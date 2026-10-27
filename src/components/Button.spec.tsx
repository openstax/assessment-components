import 'jest-styled-components';
import Button from './Button';
import renderer from 'react-test-renderer';
import { colors } from '../theme';
import { textOf } from '../test/utils';

const render = (element: JSX.Element) => renderer.create(element).toJSON() as renderer.ReactTestRendererJSON;

describe('Button', () => {
  it('renders its children in a button', () => {
    const tree = render(<Button>Click Me</Button>);

    expect(tree.type).toBe('button');
    expect(textOf(tree)).toBe('Click Me');
    expect(tree.props.disabled).toBeFalsy();
  });

  it('passes other props through to the button', () => {
    const onClick = jest.fn();
    const tree = render(<Button data-test-id="go" type="submit" onClick={onClick}>Go</Button>);

    expect(tree.props['data-test-id']).toBe('go');
    expect(tree.props.type).toBe('submit');
    expect(tree.props.onClick).toBe(onClick);
  });

  it('is disabled when told to be', () => {
    expect(render(<Button disabled>Click Me</Button>).props.disabled).toBe(true);
  });

  it('shows the waiting text and disables itself while waiting', () => {
    const tree = render(<Button isWaiting={true} waitingText="Submitting...">Click Me</Button>);

    expect(textOf(tree)).toBe('Submitting...');
    expect(tree.props.disabled).toBe(true);
  });

  it('shows its children when it is not waiting', () => {
    const tree = render(<Button isWaiting={false} waitingText="Submitting...">Click Me</Button>);

    expect(textOf(tree)).toBe('Click Me');
    expect(tree.props.disabled).toBeFalsy();
  });

  it('takes its colour from the theme in each state', () => {
    const tree = render(<Button>Click Me</Button>);

    expect(tree).toHaveStyleRule('background-color', colors.button.background);
    expect(tree).toHaveStyleRule('background', colors.button.backgroundHover, { modifier: ':not([disabled]):hover' });
    expect(tree).toHaveStyleRule('background', colors.button.backgroundActive, { modifier: ':not([disabled]):active' });
  });
});
