import { QuestionLevelFeedback } from './QuestionLevelFeedback';
import { Question, QuestionProps } from './Question';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { byClass, findAllNodes, findNode, textOf } from '../test/utils';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

describe('Question', () => {
  let props: QuestionProps;

  beforeEach(() => {
    props = {
      question: {
        id: '1',
        stem_html: 'Is this a question?',
        collaborator_solutions: [],
        formats: [],
        stimulus_html: '',
        is_answer_order_important: false,
        answers: [{
          id: '1',
          correctness: undefined,
          content_html: 'True',
        }, {
          id: '2',
          correctness: undefined,
          content_html: 'False',
        }],
      },
      correct_answer_id: '',
      incorrectAnswerId: '',
      hideAnswers: false,
      hidePreambles: false,
      displayFormats: false,
      className: '',
      questionNumber: 1,
      displaySolution: false,
      context: '',
      feedback_html: '',
      onChange: () => null,
      correct_answer_feedback_html: 'Feedback',
    }
  });

  // One deliberate whole-tree snapshot as a broad regression net; the rest assert the specific
  // thing they are named for, so they do not churn when a nested component's markup changes.
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Question {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const render = (overrides: Partial<QuestionProps> = {}) =>
    renderer.create(<Question {...props} {...overrides} />).toJSON();

  const sectionText = (tree: ReturnType<typeof render>, className: string) => {
    const node = findNode(tree, byClass(className));
    return node && textOf(node);
  };

  it('renders composed feedback below the answers', () => {
    const tree = render({ feedback: <QuestionLevelFeedback detailedSolution='Content HTML' /> });

    expect(sectionText(tree, 'detailed-solution')).toBe('Detailed solution:Content HTML');
    // the point of the prop: it lands after the answers, not before them
    const order = findAllNodes(tree, node =>
      byClass('answers-table')(node) || byClass('detailed-solution')(node));
    expect(order.map(node => byClass('answers-table')(node))).toEqual([true, false]);

    expect(sectionText(render(), 'detailed-solution')).toBeUndefined();
  });

  describe('the space below the answers', () => {
    // Each answer is followed by its live region, so the last child of the table is that region.
    // The frame supplies the space below, so whatever is visibly last has to end flush.
    const inDocument = (overrides: Partial<QuestionProps>) => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      act(() => { ReactDOM.render(<Question {...props} {...overrides} />, container); });
      return {
        container,
        cleanup: () => { act(() => { ReactDOM.unmountComponentAtNode(container); }); container.remove(); },
      };
    };

    it('ends flush on the feedback under the last answer', () => {
      const { container, cleanup } = inDocument({
        answer_id: '2', incorrectAnswerId: '2', correct_answer_id: '1', feedback_html: 'Not quite.',
        correct_answer_feedback_html: '',
      });
      const feedback = container.querySelectorAll('.question-feedback');

      expect(feedback).toHaveLength(1);
      expect(getComputedStyle(feedback[0]).marginBottom).toBe('0px');
      cleanup();
    });

    it('keeps the space under feedback that is not last', () => {
      const { container, cleanup } = inDocument({
        show_all_feedback: true,
        question: {
          ...props.question,
          answers: [
            { id: '1', correctness: undefined, content_html: 'True', feedback_html: 'About the first.' },
            { id: '2', correctness: undefined, content_html: 'False' },
          ],
        },
      });
      const feedback = container.querySelector('.question-feedback') as Element;

      expect(getComputedStyle(feedback).marginBottom).not.toBe('0px');
      cleanup();
    });

    // jsdom cannot evaluate :has, so the last-answer rule is checked as written; it was verified
    // in a browser, where the footer sits exactly where it did before the live regions.
    it('ends flush on the last answer when no feedback follows it', () => {
      const { cleanup } = inDocument({});
      const flush = Array.from(document.styleSheets)
        .flatMap(sheet => Array.from(sheet.cssRules) as CSSStyleRule[])
        .filter(rule => rule.style?.getPropertyValue('margin-bottom') === '0')
        .map(rule => rule.selectorText);

      expect(flush.join(' | '))
        .toContain('.openstax-answer:has(+ .question-feedback-live-region:last-child:empty)');
      cleanup();
    });
  });

  it('renders exercise uid', () => {
    expect(sectionText(render({ exercise_uid: '1@1' }), 'exercise-uid')).toBe('1@1');
    expect(sectionText(render(), 'exercise-uid')).toBeUndefined();
  });

  it('renders formats', () => {
    props.question.formats = ['true-false'];

    expect(sectionText(render({ displayFormats: true }), 'formats-listing')).toBe('Formats:true-false');
    expect(sectionText(render({ displayFormats: false }), 'formats-listing')).toBeUndefined();
  });

  it('defaults formats', () => {
    (props as any).question.formats = undefined; // eslint-disable-line @typescript-eslint/no-explicit-any

    // the listing still renders, just with nothing in it
    expect(sectionText(render({ displayFormats: true }), 'formats-listing')).toBe('Formats:');
  });

  it('sets the correct classes', () => {
    let tree = renderer.create(
      <Question {...props} correct_answer_id='1' />
    );
    expect(tree.root.findByProps({ 'data-test-id': 'question' }).props['className']).toContain('has-correct-answer');

    tree = renderer.create(
      <Question {...props} correct_answer_id={null} />
    );
    expect(tree.root.findByProps({ 'data-test-id': 'question' }).props['className']).not.toContain('has-correct-answer');
  });

  it('defaults QuestionHtml html', () => {
    // an absent context renders nothing at all rather than an empty element
    expect(sectionText(render({ context: undefined }), 'question-context')).toBeUndefined();
    expect(sectionText(render({ context: 'Some context' }), 'question-context')).toBe('Some context');
  });

  it('ignores collaborator_solutions', () => {
    // the detailed solution is composed in as `feedback` now; the question no longer reads it
    props.question.collaborator_solutions = [
      { content_html: 'Content HTML', solution_type: 'detailed' }
    ];

    expect(sectionText(render({ displaySolution: true }), 'detailed-solution')).toBeUndefined();
  });

});
