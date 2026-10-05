import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';
import renderer from 'react-test-renderer';

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

  it('matches snapshot - initial state', () => {
    const tree = renderer.create(
      <FreeResponseInput {...baseProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - with free response text', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        free_response="Photosynthesis converts light energy into chemical energy."
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - with submission info', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        submissionTimestamp="2024-07-26T16:00:00.000Z"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - completed state', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        canAnswer={false}
        free_response="Photosynthesis is the process by which plants convert light energy into chemical energy."
        score={{ raw: 8, max: 10 }}
        feedback_html="<p>Good explanation!</p>"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - update mode', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        canAnswer={true}
        free_response="Previously submitted answer"
        submissionTimestamp="2024-07-26T16:00:00.000Z"
      />
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

  it('matches snapshot - preview mode with answer', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        canAnswer={false}
        previewMode={true}
        free_response="Photosynthesis converts sunlight into chemical energy."
        score={{ raw: 9, max: 10 }}
        feedback_html="<p>Excellent work!</p>"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - preview mode with grading', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        canAnswer={false}
        previewMode={true}
        free_response="Photosynthesis converts sunlight into chemical energy."
        score={{ raw: 9, max: 10 }}
        feedback_html="Good work overall."
        onGradingSave={jest.fn()}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - saving state', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        apiIsPending={true}
        free_response="This is being saved"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
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
    const DRAFT_NEWER = '2024-10-03T10:55:00.000Z';
    const DRAFT_OLDER = '2024-10-03T09:00:00.000Z';

    const statusText = (props: Partial<FreeResponseProps>) => JSON.stringify(
      renderer.create(<FreeResponseInput {...baseProps} free_response="a partial thought" {...props} />).toJSON()
    );

    it('shows nothing when the response has never been submitted or autosaved', () => {
      const text = statusText({});

      expect(text).not.toContain('Draft last saved');
      expect(text).not.toContain('Last submitted on');
    });

    it('shows the draft time when nothing has been submitted yet', () => {
      expect(statusText({ draftTimestamp: DRAFT_NEWER })).toContain('Draft last saved');
    });

    it('shows the submitted time when there is no draft', () => {
      expect(statusText({ is_completed: true, submissionTimestamp: SUBMITTED_AT })).toContain('Last submitted on');
    });

    it('prefers the draft when it is newer than the submission', () => {
      const text = statusText({ is_completed: true, submissionTimestamp: SUBMITTED_AT, draftTimestamp: DRAFT_NEWER });

      expect(text).toContain('Draft last saved');
      expect(text).not.toContain('Last submitted on');
    });

    it('prefers the submission when the draft is older', () => {
      const text = statusText({ is_completed: true, submissionTimestamp: SUBMITTED_AT, draftTimestamp: DRAFT_OLDER });

      expect(text).toContain('Last submitted on');
      expect(text).not.toContain('Draft last saved');
    });
  });
});
