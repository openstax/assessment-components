import renderer from 'react-test-renderer';
import { Body, Modal } from './Modal';

describe('Modal', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Modal onModalClose={jest.fn()} show={true} heading='Heading'>
        <Body>Modal Body</Body>
      </Modal>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hides', () => {
    const tree = renderer.create(
      <Modal onModalClose={jest.fn()} show={false} heading='Heading'>
        <Body>Modal Body</Body>
      </Modal>
    ).toJSON();
    expect(tree).toBeNull();
  });
});
