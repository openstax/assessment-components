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
});
