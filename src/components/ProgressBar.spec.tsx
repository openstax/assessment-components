import ProgressBar, { ProgressBarItem, ProgressBarProps, ProgressBarItemProps } from './ProgressBar';
import renderer from 'react-test-renderer';

describe('ProgressBar', () => {
  let props: ProgressBarProps;

  beforeEach(() => {
    props = {
      activeIndex: 3,
      goToStep: () => null,
      steps: [
        {
          variant: 'isIncorrect',
        },
        {
          variant: 'isCorrect',
        },
        {
          variant: 'isIncorrect',
        },
        {
          variant: null,
        },
        {
          variant: null,
        },
        {
          variant: null,
        },
      ]
    }
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <ProgressBar {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
