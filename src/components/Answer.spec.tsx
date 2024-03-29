import { Answer, AnswerProps } from './Answer';
import renderer, { act } from 'react-test-renderer';
import { answerContent } from '../test/fixtures';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

describe('Answer', () => {
  let props: AnswerProps;

  beforeEach(() => {
    props = {
      type: 'student',
      iter: 1,
      answer: {
        id: 1,
        question_id: 1,
        correctness: null,
        isCorrect: true,
        content_html: answerContent[0],
        selected_count: 5
      },
      onChangeAnswer: () => jest.fn(),
      disabled: false,
      onKeyPress: () => jest.fn(),
      qid: 1,
      hasCorrectAnswer: false,
      answerId: '',
      correctAnswerId: 2,
      incorrectAnswerId: 0,
      answered_count: 10,
      show_all_feedback: false
    };
  });

  it('matches snapshot', () => {
    const callback = jest.fn();

    const instance = renderer.create(
      <Answer {...props} onChangeAnswer={callback} />
    );
    act(() => {
      instance.root.findByType('input').props.onChange({ target: {} });
    });
    expect(callback).toHaveBeenCalled();

    expect(instance.toJSON()).toMatchSnapshot();
  });

  it('renders with a custom renderer if set', () => {
    const CustomRenderer = ({ html = '' }: { html?: string }) => (
      <div className="custom-renderer" dangerouslySetInnerHTML={{ __html: html }} />
    );
    const tree = renderer.create(
      <Answer {...props} contentRenderer={<CustomRenderer />} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders feedback', () => {
    props.show_all_feedback = true;
    props.answer.feedback_html = '<div>Insightful commentary</div>';
    const tree = renderer.create(
      <Answer {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a correct answer', () => {
    const tree = renderer.create(
      <Answer {...props} correctAnswerId={props.answer.id} hasCorrectAnswer={true} disabled={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an incorrect answer', () => {
    const tree = renderer.create(
      <Answer {...props} incorrectAnswerId={props.answer.id} hasCorrectAnswer={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a checked answer', () => {
    const tree = renderer.create(
      <Answer {...props} answerId={props.answer.id} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders teacher review', () => {
    const tree = renderer.create(
      <Answer {...props} type='teacher-review' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders teacher preview', () => {
    props = { ...props, correctAnswerId: props.answer.id, correctIncorrectIcon: <span>Iconic</span> };
    const tree = renderer.create(
      <Answer {...props} type='teacher-preview' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
