import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';
import renderer from 'react-test-renderer';
import { FreeResponseGrading } from './FreeResponseGrading';
import { findAllNodes, textOf } from '../test/utils';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  formatTimestamp: () => 'Jul 26, 2024, 9:00 AM',
}));

describe('Free Response Input', () => {
  let baseProps: FreeResponseProps;

  beforeEach(() => {
    baseProps = {
      is_completed: false,
      canAnswer: true,
      apiIsPending: false,
      free_response: '',
      onAnswerChange: jest.fn(),
      onAnswerSave: jest.fn(),
      onNextStep: jest.fn(),
      questionNumber: 1,
      question: {
        id: '1',
        stem_html: 'Explain the process of photosynthesis.',
        collaborator_solutions: [],
        formats: ['free-response'],
        stimulus_html: '',
        answers: [],
        is_answer_order_important: false,
      },
      wordLimit: 50,
      needsSaved: false,
      cancelHandler: jest.fn(),
    };
  });

  const render = (overrides: Partial<FreeResponseProps> = {}) => {
    let tree!: renderer.ReactTestRenderer;
    renderer.act(() => { tree = renderer.create(<FreeResponseInput {...baseProps} {...overrides} />); });
    return tree;
  };

  const textarea = (tree: renderer.ReactTestRenderer) => tree.root.findAll(node => node.type === 'textarea')[0];
  const buttons = (tree: renderer.ReactTestRenderer) => tree.root.findAll(node => node.type === 'button');
  const labels = (tree: renderer.ReactTestRenderer) => buttons(tree).map(b => b.children.join(''));
  const button = (tree: renderer.ReactTestRenderer, testId: string) =>
    buttons(tree).find(b => b.props['data-test-id'] === testId);
  const text = (tree: renderer.ReactTestRenderer) => textOf(tree.toJSON());

  it('matches snapshot - initial state', () => {
    const tree = renderer.create(
      <FreeResponseInput {...baseProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('matches snapshot - preview mode unanswered', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        previewMode={true}
        score={{ max: 10 }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('frames a preview in a body section, with no footer', () => {
    const tree = renderer.create(
      <FreeResponseInput {...baseProps} previewMode={true} hasUnlimitedAttempts={true} />
    );
    expect(tree.root.findAllByProps({ className: 'step-card-question' })).not.toHaveLength(0);
    expect(tree.root.findAllByProps({ className: 'step-card-footer' })).toHaveLength(0);
  });

  it('matches snapshot - preview mode with answer', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        canAnswer={false}
        previewMode={true}
        free_response="Photosynthesis converts sunlight into chemical energy."
        score={{ raw: 9, max: 10 }}
        feedback_html="Excellent work!"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('before a response is submitted', () => {
    it('shows the question and an empty, editable response box', () => {
      const tree = render();

      expect(text(tree)).toContain('Explain the process of photosynthesis.');
      expect(textarea(tree).props.value).toBe('');
      expect(textarea(tree).props.disabled).toBe(false);
    });

    it('shows the response typed so far', () => {
      const tree = render({ free_response: 'Photosynthesis converts light energy into chemical energy.' });

      expect(textarea(tree).props.value).toBe('Photosynthesis converts light energy into chemical energy.');
    });

    it('counts the words remaining', () => {
      expect(text(render())).toContain('Remaining words: 50');
      expect(text(render({ free_response: 'one two three' }))).toContain('Remaining words: 47');
    });

    it('says when the response was last submitted', () => {
      expect(text(render({ submissionTimestamp: '2024-07-26T16:00:00.000Z' })))
        .toContain('Last submitted on Jul 26, 2024, 9:00 AM');
      expect(text(render())).not.toContain('Last submitted');
    });

    it('offers only Submit, which stays disabled until there is a response', () => {
      expect(labels(render())).toEqual(['Submit']);
      expect(button(render(), 'submit-answer-btn')?.props.disabled).toBe(true);
      expect(button(render({ free_response: 'An answer' }), 'submit-answer-btn')?.props.disabled).toBe(false);
    });

    it('hands the question id to the host when Submit is pressed', () => {
      const tree = render({ free_response: 'An answer' });

      renderer.act(() => { button(tree, 'submit-answer-btn')?.props.onClick(); });
      expect(baseProps.onAnswerSave).toHaveBeenCalledWith(1);
    });
  });

  describe('while the response is being saved', () => {
    it('shows Saving… on a disabled button and locks the response box', () => {
      const tree = render({ apiIsPending: true, free_response: 'This is being saved' });

      expect(labels(tree)).toEqual(['Saving…']);
      expect(button(tree, 'submit-answer-btn')?.props.disabled).toBe(true);
      expect(textarea(tree).props.disabled).toBe(true);
    });
  });

  describe('once the response has been graded', () => {
    const graded = {
      is_completed: true,
      canAnswer: false,
      free_response: 'Photosynthesis is the process by which plants convert light energy into chemical energy.',
      score: { raw: 8, max: 10 },
      feedback_html: 'Good explanation!',
    };

    it('shows the response read-only, with no response box', () => {
      const tree = render(graded);

      expect(textarea(tree)).toBeUndefined();
      expect(text(tree)).toContain('Your answer');
      expect(text(tree)).toContain(graded.free_response);
    });

    it('shows the score and feedback in the footer', () => {
      const footer = text(render(graded));

      expect(footer).toContain('Score: 8/10');
      expect(footer).toContain('Good explanation!');
    });

    it('shows no score or feedback when there is none', () => {
      const footer = text(render({ ...graded, score: undefined, feedback_html: undefined }));

      expect(footer).not.toContain('Score:');
      expect(footer).not.toContain('Feedback:');
    });

    it('offers only Next, which moves the host on from this question', () => {
      const tree = render({ ...graded, questionNumber: 3 });

      expect(labels(tree)).toEqual(['Next']);
      renderer.act(() => { button(tree, 'continue-btn')?.props.onClick(); });
      expect(baseProps.onNextStep).toHaveBeenCalledWith(2);
    });
  });

  describe('when the response can still be edited', () => {
    const editable = {
      is_completed: true,
      canAnswer: true,
      free_response: 'Previously submitted answer',
      submissionTimestamp: '2024-07-26T16:00:00.000Z',
    };

    it('says it can be edited until it is graded, and keeps the response box open', () => {
      const tree = render(editable);

      expect(text(tree)).toContain('You can come back and edit your response until it has been graded.');
      expect(textarea(tree).props.disabled).toBe(false);
      expect(textarea(tree).props.value).toBe('Previously submitted answer');
    });

    it('offers Cancel, Update and Next, with Cancel and Update waiting for a change', () => {
      const tree = render(editable);

      expect(labels(tree)).toEqual(['Cancel', 'Update', 'Next']);
      expect(buttons(tree)[0].props.disabled).toBe(true);
      expect(button(tree, 'update-answer-btn')?.props.disabled).toBe(true);
    });

    it('restores the submitted response and tells the host when Cancel is pressed', () => {
      const tree = render(editable);
      const event = { type: 'click' };

      renderer.act(() => { buttons(tree)[0].props.onClick(event); });

      expect(baseProps.onAnswerChange).toHaveBeenCalledWith(
        expect.objectContaining({ free_response: 'Previously submitted answer' })
      );
      expect(baseProps.cancelHandler).toHaveBeenCalledWith(event);
    });
  });

  describe('in preview mode', () => {
    it('has no controls and no response box, and says the question is unanswered', () => {
      const tree = render({ previewMode: true, score: { max: 10 } });

      expect(buttons(tree)).toHaveLength(0);
      expect(textarea(tree)).toBeUndefined();
      expect(text(tree)).toContain('Unanswered');
    });

    it('shows the grading form instead of the feedback block when grading is possible', () => {
      const tree = render({
        is_completed: true,
        canAnswer: false,
        previewMode: true,
        free_response: 'Photosynthesis converts sunlight into chemical energy.',
        score: { raw: 9, max: 10 },
        feedback_html: 'Good work overall.',
        onGradingSave: jest.fn(),
      });

      expect(tree.root.findByType(FreeResponseGrading).props).toMatchObject({
        questionId: '1', maxScore: 10, score: 9, comment: 'Good work overall.',
      });
      expect(findAllNodes(tree.toJSON(), node => node.type === 'button')).toHaveLength(1);
      expect(text(tree)).not.toContain('Feedback:');
    });
  });

  describe('reverting a restored draft', () => {
    const SUBMITTED = 'my submitted answer';
    const DRAFT = 'an abandoned revision';

    // the Cancel button carries no data-test-id, so it is matched on its label
    const findCancel = (tree: renderer.ReactTestRenderer) =>
      tree.root.findAllByType('button').filter(node => node.props.children === 'Cancel')[0];

    const findUpdate = (tree: renderer.ReactTestRenderer) =>
      tree.root.findAllByType('button').filter(node => node.props['data-test-id'] === 'update-answer-btn')[0];

    let draftProps: FreeResponseProps;

    beforeEach(() => {
      draftProps = {
        ...baseProps,
        is_completed: true,
        canAnswer: true,
        needsSaved: true,
        free_response: DRAFT,
        submittedResponse: SUBMITTED,
      };
    });

    it('enables Update when a restored draft differs from the submitted answer', () => {
      const tree = renderer.create(<FreeResponseInput {...draftProps} />);

      expect(findUpdate(tree).props.disabled).toBe(false);
    });

    it('reverts to the submitted answer rather than the draft', () => {
      const tree = renderer.create(<FreeResponseInput {...draftProps} />);

      renderer.act(() => { findCancel(tree).props.onClick({}); });

      expect(draftProps.onAnswerChange).toHaveBeenCalledWith(
        expect.objectContaining({ free_response: SUBMITTED })
      );
      expect(draftProps.cancelHandler).toHaveBeenCalled();
    });

    // the component mounts before the question state hash is populated, so the submitted text
    // arrives on a later render. a baseline cached at mount would be stuck on the empty value.
    it('reverts to the submitted answer when it arrives after mount', () => {
      const tree = renderer.create(
        <FreeResponseInput
          {...draftProps}
          is_completed={undefined as unknown as boolean}
          canAnswer={undefined as unknown as boolean}
          free_response={undefined as unknown as string}
          submittedResponse={undefined}
          needsSaved={undefined as unknown as boolean}
        />
      );

      renderer.act(() => { tree.update(<FreeResponseInput {...draftProps} />); });
      renderer.act(() => { findCancel(tree).props.onClick({}); });

      expect(draftProps.onAnswerChange).toHaveBeenCalledWith(
        expect.objectContaining({ free_response: SUBMITTED })
      );
    });

    it('disables Update when the text matches what was submitted', () => {
      const tree = renderer.create(<FreeResponseInput {...draftProps} free_response={SUBMITTED} />);

      expect(findUpdate(tree).props.disabled).toBe(true);
    });

    it('falls back to free_response as the baseline when no submitted text is given', () => {
      const tree = renderer.create(<FreeResponseInput {...draftProps} submittedResponse={undefined} />);

      expect(findUpdate(tree).props.disabled).toBe(true);
    });
  });

  describe('status line', () => {
    const SUBMITTED_AT = '2024-10-03T10:00:00.000Z';
    const DRAFT_SAVED_AT = '2024-10-03T10:55:00.000Z';

    const statusText = (props: Partial<FreeResponseProps>) => JSON.stringify(
      renderer.create(<FreeResponseInput {...baseProps} free_response="a partial thought" {...props} />).toJSON()
    );

    it('shows nothing when the response has never been submitted or autosaved', () => {
      const text = statusText({});

      expect(text).not.toContain('Draft last saved');
      expect(text).not.toContain('Last submitted on');
    });

    it('shows the draft time when nothing has been submitted yet', () => {
      expect(statusText({ draftTimestamp: DRAFT_SAVED_AT })).toContain('Draft last saved');
    });

    it('shows the submitted time when there is no draft', () => {
      expect(statusText({ is_completed: true, submissionTimestamp: SUBMITTED_AT })).toContain('Last submitted on');
    });

    it('shows the draft time when there is a draft of a submitted response', () => {
      const text = statusText({ is_completed: true, submissionTimestamp: SUBMITTED_AT, draftTimestamp: DRAFT_SAVED_AT });

      expect(text).toContain('Draft last saved');
      expect(text).not.toContain('Last submitted on');
    });
  });
});
