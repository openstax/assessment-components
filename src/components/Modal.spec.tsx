import renderer from 'react-test-renderer';
import { Modal } from './Modal';

describe('Modal', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Modal onModalClose={jest.fn()} show={true} heading='Heading'>Modal Body</Modal>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hides', () => {
    const tree = renderer.create(
      <Modal onModalClose={jest.fn()} show={false} heading='Heading'>Modal Body</Modal>
    ).toJSON();
    expect(tree).toBeNull();
  });
});
