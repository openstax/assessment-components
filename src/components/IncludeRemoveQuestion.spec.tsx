import renderer from 'react-test-renderer';
import { IncludeRemoveQuestion } from './IncludeRemoveQuestion/index';
import { colors } from '../theme';
import { byClass, findAllNodes, textOf } from '../test/utils';

describe('IncludeRemoveQuestion', () => {
  it.each`
    buttonVariant
    ${'include'}
    ${'remove'}
  `('matches snapshot', ({ buttonVariant }: { buttonVariant: 'include' | 'remove' }) => {
    const mockIncludeHandler = jest.fn();
    const mockRemoveHandler = jest.fn();
    const mockOnClickDetails = jest.fn();
    const component = renderer.create(
      <IncludeRemoveQuestion 
        buttonVariant={buttonVariant} 
        onIncludeHandler={mockIncludeHandler} 
        onRemoveHandler={mockRemoveHandler}
        onClickDetails={mockOnClickDetails}
      />
    );
  
    renderer.act(() => {
        component.root.findAllByType('button')[0].props.onClick();
        component.root.findAllByType('button')[1].props.onClick();
    });
    
    expect(buttonVariant === 'include' ? mockIncludeHandler : mockRemoveHandler).toHaveBeenCalled();
    expect(mockOnClickDetails).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });

  describe('accessible names', () => {
    const render = (buttonVariant: 'include' | 'remove') => renderer.create(
      <IncludeRemoveQuestion
        buttonVariant={buttonVariant}
        onIncludeHandler={jest.fn()}
        onRemoveHandler={jest.fn()}
        onClickDetails={jest.fn()}
      />
    ).toJSON();

    // with no aria-label, a button is named by its content, which is its visible text
    it.each`
      buttonVariant | visible
      ${'include'}  | ${'Include question'}
      ${'remove'}   | ${'Remove question'}
    `('names the $buttonVariant button by its visible text, $visible', ({ buttonVariant, visible }) => {
      const tree = render(buttonVariant);
      const button = findAllNodes(tree, node => node.type === 'button' && node.props.className.includes(buttonVariant))[0];

      expect(button.props['aria-label']).toBeUndefined();
      expect(textOf(button)).toBe(visible);
    });

    it('names the details button by its visible text', () => {
      const [button] = findAllNodes(render('include'), node => node.type === 'button' && byClass('details')(node));

      expect(button.props['aria-label']).toBeUndefined();
      expect(textOf(button)).toBe('Details');
    });

    it('hides the icons from assistive technology and gives them no name', () => {
      const icons = findAllNodes(render('include'), node => node.type === 'svg');

      expect(icons).toHaveLength(2);
      icons.forEach(icon => {
        expect(icon.props['aria-label']).toBeUndefined();
        expect(icon.props['aria-hidden']).toBe('true');
      });
    });
  });
});

describe('IncludeRemoveQuestion focus ring', () => {
  const luminance = (hex: string) => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const contrast = (a: string, b: string) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
  };

  // the ring is white (styles.ts) and sits inside the button, so it is measured against the fill
  it.each`
    variant            | fill
    ${'include'}       | ${colors.palette.mediumBlue}
    ${'remove'}        | ${colors.palette.orange}
    ${'details'}       | ${colors.palette.neutralDarker}
  `('is 3:1 or better against the $variant button fill', ({ fill }: { fill: string }) => {
    expect(contrast(colors.palette.white, fill)).toBeGreaterThanOrEqual(3);
  });
});
