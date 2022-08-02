import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Free Response Input', () => {
  let props: FreeResponseProps;

  const updateValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.defaultValue = event.target.value
  };

  beforeEach(() => {
    props = {
      isErrored: false,
      isDisplayingNudge: false,
      readOnly: false,
      lastSubmitted: '',
      wordLimit: 5,
      submittedComponent: <span className="last-submitted">Last submitted on July 26 at 4:00 pm</span>,
      onChange: updateValue,
      defaultValue: '',
    };
  });

  it('matches snapshot', () => {
     const tree = renderer.create(
       <FreeResponseInput {...props} readOnly={true} />
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
      <FreeResponseInput {...props} isDisplayingNudge={true} isErrored={true} defaultValue={'response has more than five words'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
