import renderer from 'react-test-renderer';
import { QuestionBody } from './QuestionBody';
import { ExerciseQuestionData } from '../types';

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

  describe('autosaved drafts', () => {
    const SUBMITTED = '2024-10-03T10:00:00.000Z';
    const DRAFT = '2024-10-03T10:55:00.000Z';

    it('shows the draft time when the draft is newer than the submission', () => {
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
