import renderer, { act } from 'react-test-renderer';
import MediaModal from './MediaModal';

describe('MediaModal', () => {
  const childContent = <div>Test Content</div>;
  const mockClose = jest.fn();

  beforeEach(() => {
    mockClose.mockReset();
  });

  it('does not render when isOpen is false', () => {
    const tree = renderer.create(
      <MediaModal isOpen={false} onClose={mockClose}>
        {childContent}
      </MediaModal>
    ).toJSON();
    expect(tree).toBeNull();
  });

  it('renders correctly when isOpen is true', () => {
    const tree = renderer.create(
      <MediaModal isOpen={true} onClose={mockClose}>
        {childContent}
      </MediaModal>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onClose when overlay is clicked', () => {
    const component = renderer.create(
      <MediaModal isOpen={true} onClose={mockClose}>
        {childContent}
      </MediaModal>
    );


    // const overlay = component.root.findByProps({ onClick: mockClose });
    const overlay = component.root.findAllByType('div')[0];

    act(() => {
      overlay.props.onClick();
    });

    expect(mockClose).toHaveBeenCalled();
  });

  it('calls onClose when close button is clicked', () => {
    const component = renderer.create(
      <MediaModal isOpen={true} onClose={mockClose}>
        {childContent}
      </MediaModal>
    );

    const closeButton = component.root.findAllByType('button')[0];

    act(() => {
      closeButton.props.onClick();
    });

    expect(mockClose).toHaveBeenCalled();
  });
});
