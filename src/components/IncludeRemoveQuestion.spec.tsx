import renderer from 'react-test-renderer';
import { IncludeRemoveQuestion } from './IncludeRemoveQuestion/index';

describe('IncludeRemoveQuestion', () => {
  it.each`
    buttonVariant
    ${'include'}
    ${'remove'}
  `('matches snapshot', ({ buttonVariant }: { buttonVariant: 'include' | 'remove' }) => {
    const mockIncludeHandler = jest.fn();
    const mockRemoveHandler = jest.fn();
    const component = renderer.create(
      <IncludeRemoveQuestion buttonVariant={buttonVariant} onIncludeHandler={mockIncludeHandler} onRemoveHandler={mockRemoveHandler}/>
    );
  
    renderer.act(() => {
        component.root.findAllByType('button')[0].props.onClick();
    });
    
    expect(buttonVariant === 'include' ? mockIncludeHandler : mockRemoveHandler).toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });
});
