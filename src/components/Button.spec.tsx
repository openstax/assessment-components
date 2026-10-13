import 'jest-styled-components';
import Button from './Button';
import renderer from 'react-test-renderer';
import { colors } from '../theme';

describe('Button', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Button>Click Me</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('isWaiting state matches snapshot', () => {
    const tree = renderer.create(
      <Button isWaiting={true} waitingText="Submitting...">Click Me</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('takes its colour from the theme in each state', () => {
    const tree = renderer.create(<Button>Click Me</Button>).toJSON();

    expect(tree).toHaveStyleRule('background-color', colors.button.background);
    expect(tree).toHaveStyleRule('background', colors.button.backgroundHover, { modifier: ':not([disabled]):hover' });
    expect(tree).toHaveStyleRule('background', colors.button.backgroundActive, { modifier: ':not([disabled]):active' });
  });
});
