import React, { useState } from 'react';
import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';

const baseProps: Omit<FreeResponseProps, 'value' | 'onChange' | 'textHasChanged'> = {
  readOnly: false,
  wordLimit: 5,
  cancelHandler: () => null,
  saveHandler: () => null,
  questionNumber: 1,
  question: {
    id: '1',
    stem_html: 'Is this a question?',
    collaborator_solutions: [],
    formats: [],
    stimulus_html: '',
    answers: [
      { id: '1', correctness: undefined, content_html: 'True' },
      { id: '2', correctness: undefined, content_html: 'False' },
    ],
    is_answer_order_important: false,
  },
  availablePoints: undefined,
  isSubmitDisabled: false,
  submitBtnLabel: 'Next',
};

const leftInfoComponent = (
  <div>
    <span className="last-submitted">Last submitted on July 26 at 4:00 pm</span>
  </div>
);



export const Default = () => {
  const [value, setValue] = useState('');
  const [textHasChanged, setTextHasChanged] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
    setTextHasChanged(event.target.value !== '');
  };

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      textHasChanged={textHasChanged}
      onChange={handleChange}
    />
  );
};

export const OverWordLimit = () => {
  const [value, setValue] = useState('response goes over the word limit');
  const [textHasChanged, setTextHasChanged] = useState(true);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
    setTextHasChanged(true);
  };

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      textHasChanged={textHasChanged}
      onChange={handleChange}
    />
  );
};

export const SubmittedDate = () => {
  const [value, setValue] = useState('');
  const [textHasChanged, setTextHasChanged] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
    setTextHasChanged(event.target.value !== '');
  };

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      textHasChanged={textHasChanged}
      onChange={handleChange}
      infoRowChildren={leftInfoComponent}
    />
  );
};
