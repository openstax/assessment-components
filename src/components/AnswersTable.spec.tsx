import { AnswersTable, AnswersTableProps } from './AnswersTable';
import renderer from 'react-test-renderer';
import { answerContent } from '../test/fixtures';
import { Answer } from './Answer';
import { byClass, findAllNodes, findNode, textOf } from '../test/utils';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

describe('AnswersTable', () => {
  let props: AnswersTableProps;

  beforeEach(() => {
    props = {
      question: {
        id: 1,
        stem_html: '',
        collaborator_solutions: [],
        formats: [],
        stimulus_html: '',
        is_answer_order_important: false,
        answers: [{
          id: '1',
          correctness: undefined,
          content_html: 'True'
        }, {
          id: '2',
          correctness: undefined,
          content_html: 'False'
        }],
      },
      type: 'student',
      answer_id: '',
      correct_answer_id: '',
      feedback_html: '',
      correct_answer_feedback_html: '',
      answered_count: 0,
      show_all_feedback: false,
      onChangeAnswer: jest.fn(),
      hideAnswers: false,
      hasCorrectAnswer: false,
      onChangeAttempt: jest.fn(),
      choicesEnabled: false,
    };
  });

  // One deliberate whole-tree snapshot as a broad regression net; the rest assert the specific
  // thing they are named for, so they do not churn when Answer's markup changes.
  it('matches tutor teacher-preview snapshot', () => {
    props.question.answers.forEach((answer, i) => answer.content_html = answerContent[i]);
    const tree = renderer.create(
      <AnswersTable {...props} type="teacher-preview" onKeyPress={() => null} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const render = (overrides: Partial<AnswersTableProps> = {}) =>
    renderer.create(<AnswersTable {...props} {...overrides} />).toJSON();

  /**
   * Each feedback block is associated with its answer by `aria-details` on the radio, so assert
   * the pairing rather than the markup: which answer points at feedback, and what it says.
   */
  const feedbackByAnswer = (tree: ReturnType<typeof render>) => {
    const feedback = new Map(findAllNodes(tree, byClass('question-feedback'))
      .map(node => [node.props.id, textOf(node)]));

    return findAllNodes(tree, node => node.type === 'input')
      .map(input => input.props['aria-details'])
      .map(id => (id === undefined ? null : feedback.get(id) ?? 'MISSING FEEDBACK'));
  };

  it('renders correct answer feedback', () => {
    expect(feedbackByAnswer(render({
      answer_id: '1', correct_answer_id: '1', correct_answer_feedback_html: 'Feedback',
      hasCorrectAnswer: true,
    }))).toEqual(['Feedback', null]);
  });

  it('renders incorrect answer feedback', () => {
    expect(feedbackByAnswer(render({
      answer_id: '1', correct_answer_id: '2', incorrectAnswerId: '1', feedback_html: 'Feedback',
    }))).toEqual(['Feedback', null]);
  });

  it('renders all feedback', () => {
    const answers = [{
      id: '1',
      correctness: undefined,
      content_html: 'True',
      feedback_html: 'First answer feedback',
    }, {
      id: '2',
      correctness: undefined,
      content_html: 'False',
      feedback_html: 'Second answer feedback'
    }];

    // with show_all_feedback every answer gets its own feedback, not just the chosen one
    expect(feedbackByAnswer(render({
      answer_id: '1', correct_answer_id: '2', incorrectAnswerId: '1', feedback_html: 'Feedback',
      show_all_feedback: true,
      question: {...props.question, answers},
    }))).toEqual(['First answer feedback', 'Second answer feedback']);
  });

  it('renders no feedback by default', () => {
    expect(feedbackByAnswer(render())).toEqual([null, null]);
  });

  it('hides answers', () => {
    const tree = renderer.create(
      <AnswersTable {...props} hideAnswers={true} />
    ).toJSON();
    expect(tree).toBeNull();
  });

  it('generates an id if missing', () => {
    const tree = renderer.create(
      <AnswersTable {...props} question={{...props.question, id: ''}} />
    );
    // 2 answers * 3 times the prop is passed down (Answer -> AnswerBody -> RadioAnswer)
    expect(tree.root.findAllByProps({ qid: 'auto-0' }).length).toBe(6);
  });

  it('defaults type and show_all_feedback', () => {
    const tree = renderer.create(
      <AnswersTable {...props} type={undefined} show_all_feedback={undefined} />
    );
    const allProps = tree.root.findAllByType(Answer).map((a) => a.props);
    expect(allProps.map((props) => props['type'])).toEqual(['student', 'student']);
    expect(allProps.map((props) => props['show_all_feedback'])).toEqual([false, false]);
  });

  it('renders teacher-preview type', () => {
    const type = 'teacher-preview';
    const tree = renderer.create(
      <AnswersTable {...props} question={{...props.question, id: ''}} type={type} />
    );
    expect(tree.root.findAllByType(Answer).map((a) => a.props['type'])).toEqual([type, type]);
  });

  it('renders instructions', () => {
    const table = findNode(render({ instructions: <b>Instructions</b> }), byClass('answers-table'));

    expect(textOf(table || null)).toContain('Instructions');
    expect(textOf(findNode(render(), byClass('answers-table')) || null)).not.toContain('Instructions');
  });

  it('casts question id to a number', () => {
    props.question.id = '1';
    const tree = renderer.create(
      <AnswersTable {...props} />
    );
    expect(tree.root.findAllByType(Answer)[0].props.answer.question_id).toEqual(1);
  });
});
