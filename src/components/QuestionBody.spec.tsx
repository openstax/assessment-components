import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
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

  describe('the read more control', () => {
    const originalHeight = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollHeight');

    // jsdom does no layout, so make the answer look taller than its collapsed height
    beforeEach(() => {
      Object.defineProperty(Element.prototype, 'scrollHeight', { configurable: true, get: () => 1000 });
    });

    afterEach(() => {
      if (originalHeight) { Object.defineProperty(Element.prototype, 'scrollHeight', originalHeight); }
      else { Reflect.deleteProperty(Element.prototype, 'scrollHeight'); }
    });

    const mount = (props: Partial<React.ComponentProps<typeof QuestionBody>> = {}) => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      act(() => {
        ReactDOM.render(
          <QuestionBody
            question={freeResponse}
            state={{ is_completed: true, canAnswer: false, free_response: 'A long answer' }}
            onAnswerChange={() => undefined}
            {...props}
          />,
          container
        );
      });
      return {
        container,
        button: () => container.querySelector('button') as HTMLButtonElement,
        cleanup: () => { act(() => { ReactDOM.unmountComponentAtNode(container); }); container.remove(); },
      };
    };

    it('says whether the answer is expanded', () => {
      const { button, cleanup } = mount();

      expect(button().getAttribute('aria-expanded')).toBe('false');
      act(() => { button().click(); });
      expect(button().getAttribute('aria-expanded')).toBe('true');
      act(() => { button().click(); });
      expect(button().getAttribute('aria-expanded')).toBe('false');
      cleanup();
    });

    it('points at the answer text it expands', () => {
      const { container, button, cleanup } = mount();
      const target = container.querySelector(`#${button().getAttribute('aria-controls')}`);

      expect(target?.textContent).toBe('A long answer');
      cleanup();
    });

    it('keeps the visible words in its name and says which question it belongs to', () => {
      const { button, cleanup } = mount({ questionNumber: 2 });

      expect(button().textContent).toBe('read more');
      expect(button().getAttribute('aria-label')).toBe('Read more of your answer to question 2');
      act(() => { button().click(); });
      expect(button().textContent).toBe('read less');
      expect(button().getAttribute('aria-label')).toBe('Read less of your answer to question 2');
      cleanup();
    });

    it('still has a name when the question number is not known', () => {
      const { button, cleanup } = mount();

      expect(button().getAttribute('aria-label')).toBe('Read more of your answer');
      cleanup();
    });
  });

  describe('the notice icon', () => {
    const editable = (question: ExerciseQuestionData) => (
      <QuestionBody
        question={question}
        state={{ is_completed: false, canAnswer: true }}
        onAnswerChange={() => undefined}
      />
    );

    it('is hidden from assistive technology', () => {
      const tree = renderer.create(editable(freeResponse));
      const icons = tree.root.findAll(node => node.type === 'svg');

      expect(icons).toHaveLength(1);
      expect(icons[0].props['aria-hidden']).toBe('true');
    });

    it('carries no ids, so several can share a page', () => {
      const tree = renderer.create(<>{editable(freeResponse)}{editable({ ...freeResponse, id: '2' })}</>);
      const icons = tree.root.findAll(node => node.type === 'svg');

      expect(icons).toHaveLength(2);
      icons.forEach(icon => expect(icon.findAll(node => node.props.id !== undefined)).toHaveLength(0));
    });
  });
});
