import { ProgressBar, ProgressBarItem, ProgressBarItemVariant, ProgressBarProps, StyledItem } from './ProgressBar';
import renderer from 'react-test-renderer';

const variants: ProgressBarItemVariant[] = ['isIncorrect', 'isCorrect', 'isIncorrect', null, null, null];

describe('ProgressBar', () => {
  let props: ProgressBarProps<{variant: ProgressBarItemVariant}>;

  beforeEach(() => {
    props = {
      activeIndex: 2,
      goToStep: () => null,
      steps: variants.map((variant) => ({variant})),
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

  it('clicking triggers handler', () => {
    const mockEv = jest.fn();
    const component = renderer.create(
      <ProgressBarItem isActive={true} index={3} step={{variant: 'isCorrect'} }goToStep={mockEv} />
    );

    renderer.act(() => {
      component.root.findByType(StyledItem).props.onClick();
    });

    expect(mockEv).toHaveBeenCalled();
  })
});
