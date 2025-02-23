import { ExerciseQuestion, ExerciseQuestionProps, SaveButton, NextButton } from './ExerciseQuestion';
import renderer from 'react-test-renderer';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

describe('ExerciseQuestion', () => {
  let props: ExerciseQuestionProps;

  beforeEach(() => {
    props = {
      question: {
        id: '1',
        stem_html: 'Is this a question?',
        collaborator_solutions: [],
        formats: [],
        stimulus_html: '',
        answers: [{
          id: '1',
          correctness: undefined,
          content_html: 'True',
        }, {
          id: '2',
          correctness: undefined,
          content_html: 'False',
        }],
        is_answer_order_important: false,
      },
      questionNumber: 1,
      choicesEnabled: false,
      hasMultipleAttempts: false,
      onAnswerChange: () => null,
      onAnswerSave: () => null,
      onNextStep: () => null,
      feedback_html: '',
      correct_answer_feedback_html: '',
      is_completed: false,
      correct_answer_id: '',
      incorrectAnswerId: '',
      answer_id: '',
      attempts_remaining: 2,
      published_comments: '',
      detailedSolution: '',
      canAnswer: false,
      needsSaved: false,
      canUpdateCurrentStep: false,
      attempt_number: 0,
      apiIsPending: false,
      displaySolution: false,
      available_points: '1.0',
      exercise_uid: '',
      hasFeedback: true,
    }
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders all attempts remaining', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props}
        hasMultipleAttempts={true}
        choicesEnabled={true}
        attempts_remaining={2}
        attempt_number={0}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders some attempts remaining', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props}
        hasMultipleAttempts={true}
        choicesEnabled={true}
        attempts_remaining={1}
        attempt_number={1}
        incorrectAnswerId='2'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders no attempts remaining', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props}
        hasMultipleAttempts={true}
        choicesEnabled={false}
        attempts_remaining={0}
        attempt_number={2}
        incorrectAnswerId='2'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Save button', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props}
        choicesEnabled={true}
        incorrectAnswerId='2'
        canAnswer={true}
        needsSaved={true}
        answer_id='1'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Re-submit button', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props}
        choicesEnabled={true}
        incorrectAnswerId='2'
        canAnswer={true}
        needsSaved={true}
        attempt_number={1}
        answer_id='1'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Submit & continue button', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props}
        choicesEnabled={true}
        incorrectAnswerId='2'
        canAnswer={true}
        needsSaved={true}
        answer_id='1'
        canUpdateCurrentStep={false}
        hasFeedback={false}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders continue button (unused?)', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props}
        choicesEnabled={false}
        incorrectAnswerId='2'
        canAnswer={false}
        canUpdateCurrentStep={true}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders detailed solution and published comments', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props}
        choicesEnabled={false}
        incorrectAnswerId='2'
        correct_answer_id='1'
        is_completed={true}
        canAnswer={false}
        needsSaved={false}
        detailedSolution='A detailed solution'
        published_comments='Teacher feedback'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders free response', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props}
        free_response='A free response'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('converts question id as a number when saving', () => {
    const mockFn = jest.fn();

    const tree = renderer.create(
      <ExerciseQuestion
        {...props}
        needsSaved={true}
        canAnswer={true}
        onAnswerSave={mockFn}
      />
    );
    renderer.act(() => {
      tree.root.findByType(SaveButton).props.onClick();
    });

    expect(mockFn).toHaveBeenCalledWith(1);
  });

  it('passes question index on next button click', () => {
    const mockFn = jest.fn();

    const tree = renderer.create(
      <ExerciseQuestion
        {...props}
        needsSaved={false}
        canAnswer={true}
        onNextStep={mockFn}
      />
    );
    renderer.act(() => {
      tree.root.findByType(NextButton).props.onClick();
    });

    expect(mockFn).toHaveBeenCalledWith(0);
  });

  it('passes question index on submit button click when there is not feedback', () => {
    const mockFn = jest.fn();

    // This combination of props should never happen: `is_completed` should not 
    // be true at the same time as `needsSaved`. This combination allows the 
    // test to work correctly without simulating waiting for api calls
    const tree = renderer.create(
      <ExerciseQuestion
        {...props}
        needsSaved={true}
        canAnswer={true}
        hasFeedback={false}
        is_completed={true}
        onNextStep={mockFn}
      />
    );
    renderer.act(() => {
      tree.root.findByType(SaveButton).props.onClick();
    });

    expect(mockFn).toHaveBeenCalledWith(0);
  });
});
