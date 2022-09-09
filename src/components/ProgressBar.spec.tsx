import ProgressBar, { ProgressBarItemVariant, ProgressBarProps } from './ProgressBar';
import renderer from 'react-test-renderer';

const variants: ProgressBarItemVariant[] = ['isIncorrect', 'isCorrect', 'isIncorrect', null, null, null];

describe('ProgressBar', () => {
  let props: ProgressBarProps;

  beforeEach(() => {
    props = {
      activeIndex: 3,
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
});
