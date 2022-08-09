import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Free Response Input', () => {
  let props: FreeResponseProps;

  const updateValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.defaultValue = event.target.value
  };

  const leftInfoComponent = (
    <div>
        <span className="last-submitted">Last submitted on July 26 at 4:00 pm</span>
    </div>
    );

  beforeEach(() => {
    props = {
      readOnly: false,
      wordLimit: 5,
      onChange: updateValue,
      defaultValue: '',
      cancelHandler: () => null,
      saveHandler: () => null,
      availablePoints: '1.0' as const,
      isSubmitDisabled: false,
      textHasChanged: false,
      submitBtnLabel: 'Next',
      questionNumber: 1,
      question: {
        id: '1',
        stem_html: 'Is this a question?',
        collaborator_solutions: [],
        formats: [],
        stimulus_html: '',
        answers: [{
          id: '1',
          correctness: undefined,
          content_html: 'True',
        }, {
          id: '2',
          correctness: undefined,
          content_html: 'False',
        }],
        is_answer_order_important: false,
      },
    };
  });

  it('matches snapshot', () => {
     const tree = renderer.create(
       <FreeResponseInput {...props} readOnly={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders leftInfoComponent component', () => {
    const tree = renderer.create(
      <FreeResponseInput {...props} infoRowChildren={leftInfoComponent} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders word limit error', () => {
    const tree = renderer.create(
      <FreeResponseInput {...props} defaultValue='response has more than five words' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
