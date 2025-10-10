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
      showTotalQuestions: false,
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
      showTotalQuestions: false,
    }
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <StepCard {...props}>Question content</StepCard>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with more than one question', () => {
    const tree = renderer.create(
      <StepCard {...props} showTotalQuestions={true} numberOfQuestions={3}>Question content</StepCard>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Tests for StepCard scoring display logic
describe('StepCard scoring display', () => {
  it('shows score and maxScore when isGraded is true', () => {
    const tree = renderer.create(
      <StepCard
        unpadded={false}
        stepType="exercise"
        isHomework={true}
        questionNumber={1}
        numberOfQuestions={1}
        showTotalQuestions={false}
        showScoring={true}
        isGraded={true}
        totalScoring={{ score: 2.5, maxScore: 3.0 }}
      >
        Question content
      </StepCard>
    );
    const scoring = tree.root.findByProps({ className: 'scoring' });
    expect(scoring.findByType('span').children.join('')).toBe('2.5/3.0 point');
  });

  it('shows "ungraded" when isGraded is false', () => {
    const tree = renderer.create(
      <StepCard
        unpadded={false}
        stepType="exercise"
        isHomework={true}
        questionNumber={1}
        numberOfQuestions={1}
        showTotalQuestions={false}
        showScoring={true}
        isGraded={false}
        totalScoring={{ score: 0, maxScore: 3.0 }}
      >
        Question content
      </StepCard>
    );
    const scoring = tree.root.findByProps({ className: 'scoring' });
    expect(scoring.findByType('span').children.join('')).toBe('ungraded');
  });

  it('does not render scoring when showScoring is false', () => {
    const tree = renderer.create(
      <StepCard
        unpadded={false}
        stepType="exercise"
        isHomework={true}
        questionNumber={1}
        numberOfQuestions={1}
        showTotalQuestions={false}
        showScoring={false}
        isGraded={true}
        totalScoring={{ score: 1, maxScore: 2 }}
      >
        Question content
      </StepCard>
    );
    expect(() => tree.root.findByProps({ className: 'scoring' })).toThrow();
  });
});
