import 'jest-styled-components';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { QuestionBody } from './QuestionBody';
import { ExerciseQuestionData } from '../types';
import { colors } from '../theme';
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

      describe('where the count is not shown', () => {
        const answerable = { is_completed: true, canAnswer: true, free_response: 'A response' };

        // a preview draws no count line, but a completed, answerable question still gets a box
        it('is left out of a preview, rather than pointing at nothing', () => {
          const tree = render({ previewMode: true, state: answerable });

          expect(box(tree).props['aria-describedby']).toBeUndefined();
        });

        it('only ever points at elements that are on the page, for its label as well', () => {
          const cases = [
            {},
            { state: answerable },
            { previewMode: true, state: answerable },
          ];

          cases.forEach((props) => {
            const tree = render(props);
            const ids = `${box(tree).props['aria-describedby'] ?? ''} ${box(tree).props['aria-labelledby'] ?? ''}`
              .split(' ').filter(Boolean);

            ids.forEach(id => expect(findNode(tree.toJSON() as never, node => node.props?.id === id)).toBeDefined());
          });
        });
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
      it('is the question it answers', () => {
        const tree = render({ question: { ...freeResponse, stem_html: 'Why is eleven prime?' } });
        const id = box(tree).props['aria-labelledby'];

        expect(id).toBeDefined();
        expect(textOfId(tree, id)).toBe('Why is eleven prime?');
        expect(box(tree).props['aria-label']).toBeUndefined();
      });

      it('is different for each question on the page', () => {
        let tree!: renderer.ReactTestRenderer;
        renderer.act(() => {
          tree = renderer.create(
            <>
              <QuestionBody question={{ ...freeResponse, stem_html: 'First question' }} state={{ is_completed: false, canAnswer: true }} onAnswerChange={() => undefined} />
              <QuestionBody question={{ ...second, stem_html: 'Second question' }} state={{ is_completed: false, canAnswer: true }} onAnswerChange={() => undefined} />
            </>
          );
        });
        const boxes = tree.root.findAllByProps({ 'data-test-id': 'free-response-box' })
          .filter(node => typeof node.type !== 'string');

        expect(boxes.map(node => textOfId(tree, node.props['aria-labelledby']))).toEqual(['First question', 'Second question']);
      });

      it('falls back to a plain name when the question has no stem', () => {
        const tree = render({ question: { ...freeResponse, stem_html: '' } });

        expect(box(tree).props['aria-labelledby']).toBeUndefined();
        expect(box(tree).props['aria-label']).toBe('Your response');
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
      const { button, cleanup } = mount({ question: { ...freeResponse, id: 'exercise@1.2:3' } });
      const target = document.getElementById(button().getAttribute('aria-controls') as string);

      expect(target?.textContent).toBe('A long answer');
      cleanup();
    });

    it('keeps the visible words in its name and says which question it belongs to', () => {
      const { button, cleanup } = mount({ questionNumber: 2 });

      expect(button().textContent).toBe('show more');
      expect(button().getAttribute('aria-label')).toBe('Show more of the answer for question 2');
      act(() => { button().click(); });
      expect(button().textContent).toBe('show less');
      expect(button().getAttribute('aria-label')).toBe('Show less of the answer for question 2');
      cleanup();
    });

    it('still has a name when the question number is not known', () => {
      const { button, cleanup } = mount();

      expect(button().getAttribute('aria-label')).toBe('Show more of the answer');
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

    it('sets its own text colour, readable on its own background', () => {
      const tree = renderer.create(editable(freeResponse)).toJSON() as renderer.ReactTestRendererJSON;
      const notice = findNode(tree, node => !!node.children?.some(child => typeof child === 'string' && child.startsWith('You can come back')));
      const luminance = (hex: string) => {
        const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
          .map(c => c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const [lighter, darker] = [colors.notice.background, colors.palette.neutralDarker]
        .map(luminance).sort((x, y) => y - x);

      expect(notice).toHaveStyleRule('color', colors.palette.neutralDarker);
      expect(notice).toHaveStyleRule('background-color', colors.notice.background);
      expect((lighter + 0.05) / (darker + 0.05)).toBeGreaterThanOrEqual(4.5);
    });

    it('carries no ids, so several can share a page', () => {
      const tree = renderer.create(<>{editable(freeResponse)}{editable({ ...freeResponse, id: '2' })}</>);
      const icons = tree.root.findAll(node => node.type === 'svg');

      expect(icons).toHaveLength(2);
      icons.forEach(icon => expect(icon.findAll(node => node.props.id !== undefined)).toHaveLength(0));
    });
  });
});
