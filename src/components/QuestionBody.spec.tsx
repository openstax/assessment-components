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

  describe('character limit', () => {
    const renderWithEffects = (element: Parameters<typeof renderer.create>[0]) => {
      let tree = undefined as renderer.ReactTestRenderer | undefined;
      renderer.act(() => { tree = renderer.create(element); });
      if (!tree) { throw new Error('the test renderer did not render'); }
      return tree;
    };

    const remainingCharactersIn = (tree: renderer.ReactTestRenderer) => {
      const label = tree.root.find((node) => node.type === 'span' && node.children.includes(' Remaining characters: '));
      const count = label.children[1];
      if (typeof count === 'string') { throw new Error('expected the remaining count in its own span'); }
      return count.children[0];
    };

    it('uses the limit for the question\'s response size', () => {
      const tree = renderWithEffects(
        <QuestionBody
          question={freeResponse}
          state={{ is_completed: false, canAnswer: true, free_response: 'café 😀' }}
          responseSize="short"
          onAnswerChange={() => undefined}
        />
      );
      expect(remainingCharactersIn(tree)).toEqual(`${800 - 6}`);
    });

    it('gives a small response size the short limit', () => {
      const tree = renderWithEffects(
        <QuestionBody
          question={freeResponse}
          state={{ is_completed: false, canAnswer: true }}
          responseSize="small"
          onAnswerChange={() => undefined}
        />
      );
      expect(remainingCharactersIn(tree)).toEqual('800');
    });

    it('uses the default limit when the question has no response size', () => {
      const tree = renderWithEffects(
        <QuestionBody
          question={freeResponse}
          state={{ is_completed: false, canAnswer: true }}
          onAnswerChange={() => undefined}
        />
      );
      expect(remainingCharactersIn(tree)).toEqual('4000');
    });

    it('refuses to submit a response over the limit, and says why', () => {
      let submit: (() => unknown) | undefined;
      const onStatusChange = jest.fn();
      const tree = renderWithEffects(
        <QuestionBody
          question={freeResponse}
          state={{ is_completed: false, canAnswer: true, free_response: 'eight ch' }}
          characterLimitByResponseSize={{ short: 5, medium: 5, long: 5, default: 5 }}
          onAnswerChange={() => undefined}
          onStatusChange={onStatusChange}
          registerSubmit={(fn) => { submit = fn; }}
        />
      );

      expect(remainingCharactersIn(tree)).toEqual('-3');
      expect(onStatusChange).toHaveBeenCalledWith({ canSubmit: false, dirty: false });

      let response;
      renderer.act(() => { response = submit ? submit() : undefined; });
      expect(response).toBeNull();
      expect(JSON.stringify(tree.toJSON()))
        .toContain('Shorten your response to the character limit before submitting.');
    });
  });
});
