import { QuestionLevelFeedback } from './QuestionLevelFeedback';
import { Question, QuestionProps } from './Question';
import renderer from 'react-test-renderer';
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
