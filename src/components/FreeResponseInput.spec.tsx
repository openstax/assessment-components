import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';
import renderer from 'react-test-renderer';
// import { answerContent } from '../test/fixtures';

describe('Free Response Input', () => {
  let props: FreeResponseProps;

  beforeEach(() => {
    props = {
      isErrored: false,
      showWarning: false,
      isReadOnly: false,
      isDisplayingNudge: false,
      lastSubmitted: '',
      wordLimit: 5,
      submittedComponent: <span className="last-submitted">Last submitted on July 26 at 4:00 pm</span>
    };
  });

  it('matches snapshot', () => {
     const tree = renderer.create(
       <FreeResponseInput {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders last submitted text', () => {
    const tree = renderer.create(
      <FreeResponseInput {...props} lastSubmitted={'2015-10-06T11:59:00.000Z'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders word limit error', () => {
    const tree = renderer.create(
      <FreeResponseInput {...props} isDisplayingNudge={true} />
    );
    expect(tree.root.findByProps({ 'data-test-id': 'free-response-box' }).props.value).toEqual('');

    const event = { target: { value: 'response has more than five words' }, preventDefault: jest.fn() };
    renderer.act(() => {
      tree.root.findByProps({ 'data-test-id': 'free-response-box' }).props.onChange(event);
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('does not setResponse if read-only', () => {
    const tree = renderer.create(
      <FreeResponseInput {...props} isReadOnly={true} />
   );

   const event = { target: { value: 'foo' }, preventDefault: jest.fn() };
   renderer.act(() => {
     tree.root.findByProps({ 'data-test-id': 'free-response-box' }).props.onChange(event);
   });

   expect(tree.toJSON()).toMatchSnapshot();
  });

  it('sets initialResponse', () => {
    const tree = renderer.create(
      <FreeResponseInput {...props} />
   );

   const event = { target: { value: 'foo' }, preventDefault: jest.fn() };
   renderer.act(() => {
     tree.root.findByProps({ 'data-test-id': 'free-response-box' }).props.onChange(event);
   });

   expect(tree.toJSON()).toMatchSnapshot();
  });
});
