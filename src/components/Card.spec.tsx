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
      },
      questionNumber: 1,
      numberOfQuestions: 1,
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
      availablePoints: '1.0',
      questionNumber: 1,
      numberOfQuestions: 1,
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
      <StepCard {...props} numberOfQuestions={3}>Question content</StepCard>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Tests for StepCard scoring display logic
describe('StepCard scoring display', () => {

  it('shows score and maxScore when isGraded is true (singular)', () => {
    const tree = renderer.create(
      <StepCard
        questionNumber={1}
        numberOfQuestions={1}
        showScoring={true}
        isGraded={true}
        totalScoring={{ score: 1.0, maxScore: 1.0 }}
      >
        Question content
      </StepCard>
    );
    const scoring = tree.root.findByProps({ className: 'scoring' });
    expect(scoring.findByType('span').children.join('')).toBe('1.0/1.0 point');
  });

  it('shows score and maxScore when isGraded is true (plural)', () => {
    const tree = renderer.create(
      <StepCard
        questionNumber={1}
        numberOfQuestions={1}
        showScoring={true}
        isGraded={true}
        totalScoring={{ score: 2.5, maxScore: 3.0 }}
      >
        Question content
      </StepCard>
    );
    const scoring = tree.root.findByProps({ className: 'scoring' });
    expect(scoring.findByType('span').children.join('')).toBe('2.5/3.0 points');
  });

  it('shows "ungraded" when isGraded is false', () => {
    const tree = renderer.create(
      <StepCard
        questionNumber={1}
        numberOfQuestions={1}
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
        questionNumber={1}
        numberOfQuestions={1}
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
