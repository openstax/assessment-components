import renderer from 'react-test-renderer';
import { IncludeRemoveQuestion } from './IncludeRemoveQuestion/index';
import { colors } from '../theme';

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
});

describe('IncludeRemoveQuestion accessibility', () => {
  const render = (buttonVariant: 'include' | 'remove') => renderer.create(
    <IncludeRemoveQuestion
      buttonVariant={buttonVariant}
      onIncludeHandler={jest.fn()}
      onRemoveHandler={jest.fn()}
      onClickDetails={jest.fn()}
    />
  ).root;

  // an aria-label would replace the visible text as the name, so speaking the label would not work
  it.each`
    buttonVariant | texts
    ${'include'}  | ${['Include question', 'Details']}
    ${'remove'}   | ${['Remove question', 'Details']}
  `('names each $buttonVariant button by its visible text', ({ buttonVariant, texts }) => {
    const root = render(buttonVariant);
    const buttons = root.findAllByType('button');

    expect(buttons.map((button) => button.props['aria-label'])).toEqual([undefined, undefined]);
    expect(buttons.map((button) => button.findByType('span').children.join(''))).toEqual(texts);
  });

  it('leaves the icons out of the names', () => {
    const root = render('include');

    root.findAll((node) => node.props.icon !== undefined && typeof node.type !== 'string').forEach((icon) => {
      expect(icon.props['aria-label']).toBeUndefined();
    });
  });

  describe('focus ring', () => {
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
});

