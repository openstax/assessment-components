import { ProgressBar, ProgressBarItem, ProgressBarItemVariant, ProgressBarProps, StyledItem } from './ProgressBar';
import renderer from 'react-test-renderer';

const variants: ProgressBarItemVariant[] = ['isIncorrect', 'isCorrect', 'isIncorrect', 'isIncorrect', 'isPartialCredit', null, 'isStatus'];

describe('ProgressBar', () => {
  let props: ProgressBarProps<{variant: ProgressBarItemVariant; hasFeedback?: boolean}>;

  beforeEach(() => {
    props = {
      activeIndex: 2,
      goToStep: () => null,
      steps: variants.map((variant, index) => ({variant, hasFeedback: index % 2 !== 0 ? true : false})),
    }
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <ProgressBar {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when active step is incomplete', () => {
    const tree = renderer.create(
      <ProgressBar {...props} activeIndex={3} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when active step is partial credit', () => {
    const tree = renderer.create(
      <ProgressBar {...props} activeIndex={4} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when status step is active', () => {
    const tree = renderer.create(
      <ProgressBar {...props} activeIndex={6} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('clicking triggers handler', () => {
    const mockEv = jest.fn();
    const component = renderer.create(
      <ProgressBarItem isActive={true} index={3} step={{variant: 'isCorrect'}} goToStep={mockEv} />
    );

    renderer.act(() => {
      component.root.findByType(StyledItem).props.onClick();
    });

    expect(mockEv).toHaveBeenCalled();
  })

  it.each([
    ['isCorrect', false, 'Question 4, Correct'],
    ['isIncorrect', true, 'Question 4, Incorrect, feedback available'],
    ['isIncomplete', false, 'Question 4, Incomplete'],
    ['isPartialCredit', true, 'Question 4, Partial credit, feedback available'],
    [null, true, 'Question 4, Not yet graded'],
    ['isStatus', true, 'Assignment status'],
  ] as [ProgressBarItemVariant, boolean, string][])('names a %s step with feedback=%s as "%s"', (variant, hasFeedback, label) => {
    const component = renderer.create(
      <ProgressBarItem isActive={false} index={3} step={{variant, hasFeedback}} goToStep={() => null} />
    );

    expect(component.root.findByType(StyledItem).props['aria-label']).toBe(label);
  });

  it('hides the status icon and feedback dot from assistive technology', () => {
    const component = renderer.create(
      <ProgressBarItem isActive={false} index={0} step={{variant: 'isCorrect', hasFeedback: true}} goToStep={() => null} />
    );

    expect(component.root.findAllByType('button')).toHaveLength(1);
    expect(component.root.findByType('svg').props['aria-hidden']).toBe('true');
    expect(component.root.findAll(n => n.type === 'span' && n.props['aria-hidden'] === 'true')).toHaveLength(1);
  });
});
