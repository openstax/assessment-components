import renderer from 'react-test-renderer';
import { IncludeRemoveQuestion } from './IncludeRemoveQuestion/index';
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

    it('leaves the icons without a name of their own', () => {
      const icons = findAllNodes(render('include'), node => node.type === 'svg');

      expect(icons).toHaveLength(2);
      icons.forEach(icon => expect(icon.props['aria-label']).toBeUndefined());
    });
  });
});
