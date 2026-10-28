import renderer from 'react-test-renderer';
import { Loader } from './Loader';

describe('Loader', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Loader />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('is a focusable progress indicator named as loading when it has an id', () => {
    const root = renderer.create(<Loader id="section" />).root;
    const loader = root.find(node => typeof node.type === 'string' && node.props.id === 'section');

    expect(loader.props.tabIndex).toBe(-1);
    expect(loader.props.role).toBe('progressbar');
    expect(loader.props['aria-label']).toBe('Loading');
  });

  it('is not focusable without one', () => {
    const root = renderer.create(<Loader />).root;

    expect(root.findAll(node => typeof node.type === 'string' && node.props.role === 'progressbar')).toHaveLength(0);
  });
});
