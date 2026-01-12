import React, { useState } from 'react';
import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';

const baseProps: Omit<FreeResponseProps, 'value' | 'onChange'> = {
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
  score: undefined,
  isSubmitDisabled: false,
  submitBtnLabel: 'Next',
};

const submissionInfoText = 'Last submitted on July 26 at 4:00 pm';



export const Default = () => {
  const [value, setValue] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      onChange={handleChange}
    />
  );
};

export const OverWordLimit = () => {
  const [value, setValue] = useState('response goes over the limit');

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      onChange={handleChange}
    />
  );
};

export const SubmittedDate = () => {
  const [value, setValue] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      onChange={handleChange}
      submissionInfo={submissionInfoText}
    />
  );
};

export const UpdateMode = () => {
  const [value, setValue] = useState('Previously submitted answer.');
  const [submittedValue] = useState('Previously submitted answer.');

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  const handleCancel = () => {
    setValue(submittedValue);
  };

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      onChange={handleChange}
      isSubmitted={true}
      cancelHandler={handleCancel}
      submissionInfo={submissionInfoText}
    />
  );
};

export const PostReviewShortAnswer = () => {
  const [value] = useState('This is a short answer.');

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      onChange={() => {}}
      isReviewed={true}
      score="5/10"
      feedback="Good effort, but could use more detail."
      onNext={() => console.log('Next clicked')}
    />
  );
};

export const PostReviewLongAnswer = () => {
  const [value] = useState('This is a much longer answer that demonstrates the read more/read less functionality. The answer goes on and on with lots of detail about the topic at hand. It contains multiple sentences and paragraphs of information that would normally take up more than four lines when displayed on the screen. This allows us to test the expand and collapse functionality to ensure it works correctly. Here is even more text to make sure we exceed the character limit for the read more button to appear. We need to keep adding content to ensure this text is definitely longer than 400 characters so the read more button will show up properly in the component.');

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      onChange={() => {}}
      isReviewed={true}
      score="8/10"
      feedback="Excellent detailed response!"
      onNext={() => console.log('Next clicked')}
    />
  );
};

export const SavingState = () => {
  const [value, setValue] = useState('answer that is being saved.');

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      onChange={handleChange}
      isSaving={true}
    />
  );
};

export const UpdateSavingState = () => {
  const [value, setValue] = useState('answer being saved.');
  const [submittedValue] = useState('answer being saved.');

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  const handleCancel = () => {
    setValue(submittedValue);
  };

  return (
    <FreeResponseInput
      {...baseProps}
      value={value}
      onChange={handleChange}
      isSubmitted={true}
      isSaving={true}
      cancelHandler={handleCancel}
      submissionInfo={submissionInfoText}
    />
  );
};
