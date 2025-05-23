import { AnswersTable, AnswersTableProps } from './AnswersTable';
import renderer from 'react-test-renderer';
import { answerContent } from '../test/fixtures';
import { Answer } from './Answer';

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

  it('matches tutor teacher-preview snapshot', () => {
    props.question.answers.forEach((answer, i) => answer.content_html = answerContent[i]);
    const tree = renderer.create(
      <AnswersTable {...props} type="teacher-preview" onKeyPress={() => null} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correct answer feedback', () => {
    const tree = renderer.create(
      <AnswersTable {...props}
        answer_id="1"
        correct_answer_id="1"
        correct_answer_feedback_html="Feedback"
        hasCorrectAnswer={true}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders incorrect answer feedback', () => {
    const tree = renderer.create(
      <AnswersTable {...props}
        answer_id="1"
        correct_answer_id="2"
        incorrectAnswerId="1"
        feedback_html="Feedback"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders all feedback', () => {
    const answers = [{
      id: '1',
      correctness: undefined,
      content_html: 'True',
      feedback_html: 'Answer level feedback',
    }, {
      id: '2',
      correctness: undefined,
      content_html: 'False',
      feedback_html: 'Answer level feedback'
    }];

    const tree = renderer.create(
      <AnswersTable {...props}
        answer_id="1"
        correct_answer_id="2"
        incorrectAnswerId="1"
        feedback_html="Feedback"
        show_all_feedback={true}
        tableFeedbackEnabled={true}
        question={{...props.question, answers}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
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

  it('sorts by given ID order', () => {
    const tree = renderer.create(
      <AnswersTable {...props} answerIdOrder={['2', '1']} />
    );
    expect(tree.root.findAllByType(Answer).map((a) => a.props.answer.id)).toEqual(['2', '1']);
    expect(tree).toMatchSnapshot();
  });

  it('renders instructions', () => {
    const tree = renderer.create(
      <AnswersTable {...props}
        instructions={<b>Instructions</b>}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('casts question id to a number', () => {
    props.question.id = '1';
    const tree = renderer.create(
      <AnswersTable {...props} />
    );
    expect(tree.root.findAllByType(Answer)[0].props.answer.question_id).toEqual(1);
  });
});
