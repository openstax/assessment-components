import { StepCard, StepCardProps, TaskStepCard, TaskStepCardProps } from './Card';
import renderer from 'react-test-renderer';

describe('TaskStepCard', () => {
  let props: TaskStepCardProps;

  beforeEach(() => {
    props = {
      step: {
        type: 'exercise' as const,
        task: {
          is_deleted: false,
          type: 'homework' as const
        },
        uid: '1234@1',
        id: '1',
        available_points: '1.0'
      },
      questionNumber: 1,
      numberOfQuestions: 1
    }
  });

  it('matches snapshot', () => {
     const tree = renderer.create(
       <TaskStepCard {...props} />
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
      numberOfQuestions: 1
    }
  });

  it('matches snapshot', () => {
     const tree = renderer.create(
       <StepCard {...props}>Question content</StepCard>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
