import { StepCard, StepCardProps, TaskStepCard, TaskStepCardProps } from './Card';
import renderer, { ReactTestInstance } from 'react-test-renderer';

/** An element's text, as read: what is hidden from screen readers is left out. */
const readText = (node: ReactTestInstance | string): string => typeof node === 'string' ? node
  : node.props['aria-hidden'] === 'true' ? ''
  : node.children.map(readText).join('').replace(/\s+/g, ' ').trim();

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

  it('makes its body a focusable group named by its header\'s question numbers when it has a focus target id', () => {
    const tree = renderer.create(
      <StepCard {...props} focusTargetId="section" questionNumber={2} numberOfQuestions={2}>Question content</StepCard>
    );
    const body = tree.root.find(node => typeof node.type === 'string' && node.props.id === 'section');

    expect(body.props.tabIndex).toBe(-1);
    expect(body.props.role).toBe('group');
    expect(body.props['aria-labelledby']).toBe('section-title');
    expect(readText(tree.root.find(node => typeof node.type === 'string' && node.props.id === 'section-title')))
      .toBe('Questions 2 through 3');
    expect(body.props.children).toBe('Question content');
  });

  it('shows its range of question numbers with a dash, read as "through"', () => {
    const tree = renderer.create(<StepCard {...props} questionNumber={2} numberOfQuestions={2}>Question content</StepCard>);
    const dash = tree.root.find(node => node.props['aria-hidden'] === 'true' && typeof node.type === 'string');

    expect(dash.props.children).toBe('-');
  });

  it('puts its scroll target id on the card, around the header', () => {
    const tree = renderer.create(
      <StepCard {...props} focusTargetId="section" scrollTargetId="card" questionNumber={2} numberOfQuestions={2}>Question content</StepCard>
    );
    const card = tree.root.find(node => typeof node.type === 'string' && node.props.id === 'card');

    expect(card.findAll(node => node.props.className === 'step-card-header' || String(node.props.className).includes('step-card-header')).length).toBeGreaterThan(0);
    expect(card.findAll(node => typeof node.type === 'string' && node.props.id === 'section')).toHaveLength(1);
  });

  it('names the group of a single question by its number', () => {
    const tree = renderer.create(
      <StepCard {...props} focusTargetId="section" questionNumber={4} numberOfQuestions={1}>Question content</StepCard>
    );

    expect(readText(tree.root.find(node => typeof node.type === 'string' && node.props.id === 'section-title')))
      .toBe('Question 4');
  });

  it('puts no id or focus target anywhere without one', () => {
    const tree = renderer.create(<StepCard {...props}>Question content</StepCard>);

    expect(tree.root.findAll(node => typeof node.type === 'string' && node.props.role === 'group')).toHaveLength(0);
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
