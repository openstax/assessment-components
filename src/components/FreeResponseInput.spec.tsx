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
    props.lastSubmitted = '2015-10-06T11:59:00.000Z';
    const tree = renderer.create(
      <FreeResponseInput {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('renders a correct answer', () => {
  //   const tree = renderer.create(
  //     <Answer {...props} correctAnswerId={props.answer.id} hasCorrectAnswer={true} disabled={true} />
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('renders an incorrect answer', () => {
  //   const tree = renderer.create(
  //     <Answer {...props} incorrectAnswerId={props.answer.id} hasCorrectAnswer={true} />
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('renders a checked answer', () => {
  //   const tree = renderer.create(
  //     <Answer {...props} chosenAnswer={[props.answer.id]} />
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
