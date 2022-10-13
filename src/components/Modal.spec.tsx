import renderer from 'react-test-renderer';
import { Modal, ModalBody } from './Modal';

describe('Modal', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Modal onModalClose={jest.fn()} show={true} heading='Heading'>
        <ModalBody>Modal Body</ModalBody>
      </Modal>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hides', () => {
    const tree = renderer.create(
      <Modal onModalClose={jest.fn()} show={false} heading='Heading'>
        <ModalBody>Modal Body</ModalBody>
      </Modal>
    ).toJSON();
    expect(tree).toBeNull();
  });
});
