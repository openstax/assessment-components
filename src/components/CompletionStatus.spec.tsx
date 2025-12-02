import { CompletionStatus, CompletionStatusProps } from './CompletionStatus';
import Button from './Button';
import renderer from 'react-test-renderer';

describe('CompletionStatus', () => {
  let props: CompletionStatusProps;

  beforeEach(() => {
    props = {
      numberOfQuestions: 15,
      numberCompleted: 0,
      handleNext: () => {console.log('next')},
      handleContinue: () => {console.log('continue')}
    }
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <CompletionStatus {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with some questions completed', () => {
    const tree = renderer.create(
      <CompletionStatus {...props} numberCompleted={5} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with all questions completed', () => {
    const tree = renderer.create(
      <CompletionStatus {...props} numberCompleted={15} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('clicking triggers handler', () => {
    const mockEv = jest.fn();
    const component = renderer.create(
      <CompletionStatus {...props} handleContinue={mockEv} />
    );

    renderer.act(() => {
      component.root.findByType(Button).props.onClick();
    });

    expect(mockEv).toHaveBeenCalled();
  })
});
