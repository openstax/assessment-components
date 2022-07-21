import { AnswersTable, AnswersTableProps } from './AnswersTable';
import renderer from 'react-test-renderer';
import { answerContent } from '../test/fixtures';
import { Answer } from './Answer';

describe('AnswersTable', () => {
  let props: AnswersTableProps;

  beforeEach(() => {
    props = {
      question: {
        id: '1',
        stem_html: '',
        collaborator_solutions: [],
        formats: [],
        stimulus_html: '',

        answers: [{
          id: '1',
          correctness: undefined,
          content_html: 'A'
        }, {
            id: '2',
            correctness: undefined,
            content_html: 'B'
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
    expect(tree.root.findAllByProps({ qid: 'auto-0' }).length).toBe(2);
  });

  it('defaults the type', () => {
    const tree = renderer.create(
      <AnswersTable {...props} type={undefined} />
    );
    expect(tree.root.findAllByType(Answer).map((a) => a.props['type'])).toEqual(['student', 'student']);
  });

  it('renders teacher-preview type', () => {
    const type = 'teacher-preview';
    const tree = renderer.create(
      <AnswersTable {...props} question={{...props.question, id: ''}} type={type} />
    );
    expect(tree.root.findAllByType(Answer).map((a) => a.props['type'])).toEqual([type, type]);
  });
});
