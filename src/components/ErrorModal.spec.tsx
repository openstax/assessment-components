import renderer from 'react-test-renderer';
import { ErrorModal } from './ErrorModal';

describe('Modal', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <ErrorModal onModalClose={jest.fn()} show={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
