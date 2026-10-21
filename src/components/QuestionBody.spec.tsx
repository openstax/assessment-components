import renderer from 'react-test-renderer';
import { QuestionBody } from './QuestionBody';
import { ExerciseQuestionData } from '../types';
import { findNode, textOf } from '../test/utils';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

const freeResponse: ExerciseQuestionData = {
  id: '1',
  formats: ['free-response'],
  is_answer_order_important: false,
  stimulus_html: '',
  stem_html: 'Why?',
  collaborator_solutions: [],
  answers: [],
};

const multipleChoice: ExerciseQuestionData = {
  ...freeResponse,
  formats: ['multiple-choice'],
  answers: [
    { id: '1', content_html: 'True' },
    { id: '2', content_html: 'False' },
  ],
};

describe('QuestionBody', () => {
  it('disables the free response input when the question cannot be answered', () => {
    const tree = renderer.create(
      <QuestionBody
        question={freeResponse}
        state={{ is_completed: false, canAnswer: false }}
        onAnswerChange={() => undefined}
      />
    );
    expect(tree.root.findByProps({ 'data-test-id': 'free-response-box' }).props.disabled).toBe(true);
  });

  it('leaves the free response input editable when it can be answered', () => {
    const tree = renderer.create(
      <QuestionBody
        question={freeResponse}
        state={{ is_completed: false, canAnswer: true }}
        onAnswerChange={() => undefined}
      />
    );
    expect(tree.root.findByProps({ 'data-test-id': 'free-response-box' }).props.disabled).toBe(false);
  });

  it('reports whether the response can be submitted', () => {
    const onStatusChange = jest.fn();
    renderer.act(() => {
      renderer.create(
        <QuestionBody
          question={multipleChoice}
          state={{ is_completed: false, canAnswer: true, answer_id: '1' }}
          onAnswerChange={() => undefined}
          onStatusChange={onStatusChange}
        />
      );
    });
    // reported on mount, so a footer is never briefly enabled against an empty response
    expect(onStatusChange).toHaveBeenCalledWith({ canSubmit: true });
  });

  it('refuses to submit an unanswered question, and says why', () => {
    let submit: (() => unknown) | undefined;
    let tree!: renderer.ReactTestRenderer;
    renderer.act(() => {
      tree = renderer.create(
        <QuestionBody
          question={multipleChoice}
          state={{ is_completed: false, canAnswer: true }}
          onAnswerChange={() => undefined}
          registerSubmit={(fn) => { submit = fn; }}
        />
      );
    });

    expect(submit).toBeDefined();

    let response;
    renderer.act(() => { response = submit ? submit() : undefined; });
    expect(response).toBeNull();

    const message = tree.root.findByProps({ className: 'validation-message' });
    expect(message.props.role).toEqual('alert');
  });

  describe('the free response box', () => {
    const second: ExerciseQuestionData = { ...freeResponse, id: '2' };

    const render = (props: Partial<React.ComponentProps<typeof QuestionBody>> = {}) => {
      let tree!: renderer.ReactTestRenderer;
      renderer.act(() => {
        tree = renderer.create(
          <QuestionBody
            question={freeResponse}
            state={{ is_completed: false, canAnswer: true, free_response: '' }}
            onAnswerChange={() => undefined}
            {...props}
          />
        );
      });
      return tree;
    };

    const box = (tree: renderer.ReactTestRenderer) => tree.root.findByProps({ 'data-test-id': 'free-response-box' });
    const textOfId = (tree: renderer.ReactTestRenderer, id: string) =>
      textOf(findNode(tree.toJSON() as never, node => node.props?.id === id) || null);

    describe('its description', () => {
      it('is the remaining word count', () => {
        const tree = render({ wordLimit: 50 });
        const id = box(tree).props['aria-describedby'];

        expect(textOfId(tree, id)).toContain('Remaining words: 50');
      });

      it('reads the count for the current response', () => {
        const tree = render({
          wordLimit: 5, state: { is_completed: false, canAnswer: true, free_response: 'one two three' },
        });

        expect(textOfId(tree, box(tree).props['aria-describedby'])).toContain('Remaining words: 2');
      });

      it('includes the warning once the limit is reached', () => {
        const tree = render({
          wordLimit: 3, state: { is_completed: false, canAnswer: true, free_response: 'one two three' },
        });

        expect(textOfId(tree, box(tree).props['aria-describedby'])).toContain('Word limit reached');
      });

      it('is different for each question on the page', () => {
        let tree!: renderer.ReactTestRenderer;
        renderer.act(() => {
          tree = renderer.create(
            <>
              <QuestionBody question={freeResponse} state={{ is_completed: false, canAnswer: true }} onAnswerChange={() => undefined} />
              <QuestionBody question={second} state={{ is_completed: false, canAnswer: true }} onAnswerChange={() => undefined} />
            </>
          );
        });
        const boxes = tree.root.findAllByProps({ 'data-test-id': 'free-response-box' })
          .filter(node => typeof node.type !== 'string');
        const ids = boxes.map(node => node.props['aria-describedby']);

        expect(ids).toHaveLength(2);
        expect(ids[0]).not.toEqual(ids[1]);
        ids.forEach(id => expect(textOfId(tree, id)).toContain('Remaining words'));
      });
    });

    describe('its name', () => {
      it('says which question it answers', () => {
        expect(box(render({ questionNumber: 3 })).props['aria-label']).toBe('Your response to question 3');
        expect(box(render({ questionNumber: 4 })).props['aria-label']).toBe('Your response to question 4');
      });

      it('still has a name when the question number is not known', () => {
        expect(box(render()).props['aria-label']).toBe('Your response');
      });
    });

    describe('when a submission is refused', () => {
      const refuse = () => {
        let submit: (() => unknown) | undefined;
        const tree = render({ registerSubmit: (fn) => { submit = fn; } });

        expect(box(tree).props['aria-invalid']).toBeUndefined();
        expect(box(tree).props['aria-describedby']).toBe('free-response-count-1');

        renderer.act(() => { submit?.(); });
        return tree;
      };

      it('marks the box invalid and describes it by the message first, then the count', () => {
        const tree = refuse();

        expect(box(tree).props['aria-invalid']).toBe(true);
        expect(box(tree).props['aria-describedby']).toBe('free-response-error-1 free-response-count-1');
        expect(textOfId(tree, 'free-response-error-1')).toBe('Enter a response before submitting.');
      });

      it('clears the invalid state once the learner edits the response', () => {
        const tree = refuse();

        renderer.act(() => { box(tree).props.onChange({ target: { value: 'A reason' } }); });

        expect(box(tree).props['aria-invalid']).toBeUndefined();
        expect(box(tree).props['aria-describedby']).toBe('free-response-count-1');
      });
    });
  });

  describe('autosaved drafts', () => {
    const SUBMITTED = '2024-10-03T10:00:00.000Z';
    const DRAFT = '2024-10-03T10:55:00.000Z';

    it('shows the draft time when there is a draft of a submitted response', () => {
      const tree = renderer.create(
        <QuestionBody
          question={freeResponse}
          state={{
            is_completed: true, canAnswer: true, free_response: 'a draft',
            submissionTimestamp: SUBMITTED, draftTimestamp: DRAFT,
          }}
          onAnswerChange={() => undefined}
        />
      );
      const status = tree.root.findByProps({ className: 'last-submitted' });
      expect(status.children.join('')).toContain('Draft last saved');
    });

    it('cancels back to the submitted response rather than the draft', () => {
      const onAnswerChange = jest.fn();
      let cancel: (() => void) | undefined;
      renderer.act(() => {
        renderer.create(
          <QuestionBody
            question={freeResponse}
            state={{
              is_completed: true, canAnswer: true, free_response: 'a draft',
              submittedResponse: 'the submitted answer', draftTimestamp: DRAFT,
            }}
            needsSaved={true}
            onAnswerChange={onAnswerChange}
            registerCancel={(fn) => { cancel = fn; }}
          />
        );
      });

      renderer.act(() => { cancel?.(); });
      expect(onAnswerChange).toHaveBeenCalledWith(
        expect.objectContaining({ free_response: 'the submitted answer' })
      );
    });
  });
});
