import { StepCard, StepCardProps, TaskStepCard, TaskStepCardProps } from './Card';
import renderer from 'react-test-renderer';

describe('TaskStepCard', () => {
  let props: TaskStepCardProps;

  beforeEach(() => {
    props = {
      step: {
        uid: '1234@1',
        id: 1,
        available_points: '1.0',
        is_completed: false,
        answer_id_order: ['1', '2'],
        answer_id: '1',
        free_response: '',
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        is_feedback_available: true,
        attempts_remaining: 0,
        attempt_number: 1,
        incorrectAnswerId: 0
      },
      questionNumber: 1,
      numberOfQuestions: 1,
      wrapsExercise: true,
    }
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <TaskStepCard {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can optionally provide task', () => {
    const tree = renderer.create(
      <TaskStepCard {...props} step={{ ...props.step, task: { is_deleted: false, type: 'homework' } }} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can optionally provide type', () => {
    const tree = renderer.create(
      <TaskStepCard {...props} step={{ ...props.step, type: 'exercise' }} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('StepCard', () => {
  let props: StepCardProps;

  beforeEach(() => {
    props = {
      unpadded: false,
      stepType: 'exercise' as const,
      availablePoints: '1.0',
      isHomework: true,
      questionNumber: 1,
      numberOfQuestions: 1,
      wrapsExercise: true,
    }
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <StepCard {...props}>Question content</StepCard>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
