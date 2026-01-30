import { useState } from 'react';
import { FreeResponseInput } from './FreeResponseInput';

const mockQuestion = {
  id: '1',
  stem_html: 'Explain the process of photosynthesis and its importance to the ecosystem.',
  collaborator_solutions: [],
  formats: ['free-response'],
  stimulus_html: '',
  answers: [],
  is_answer_order_important: false,
  word_limit: 50,
};

const baseQuestionState = {
  questionNumber: 1,
  question: mockQuestion,
  wordLimit: 50,
  cancelHandler: () => null,
};

export const Default = () => {
  const [freeResponse, setFreeResponse] = useState('');

  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={false}
      canAnswer={true}
      apiIsPending={false}
      free_response={freeResponse}
      onAnswerChange={(answer) => setFreeResponse(answer.content_html)}
      onAnswerSave={() => console.log('Save')}
      onNextStep={() => console.log('Next')}
    />
  );
};

export const WordLimitReached = () => {
  const [freeResponse, setFreeResponse] = useState('response goes over the limit');

  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={false}
      canAnswer={true}
      apiIsPending={false}
      free_response={freeResponse}
      onAnswerChange={(answer) => setFreeResponse(answer.content_html)}
      onAnswerSave={() => console.log('Save')}
      onNextStep={() => console.log('Next')}
      wordLimit={5}
    />
  );
};

export const SubmittedDate = () => {
  const [freeResponse, setFreeResponse] = useState('');

  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={false}
      canAnswer={true}
      apiIsPending={false}
      free_response={freeResponse}
      submissionInfo="Last submitted on July 26 at 4:00 pm"
      onAnswerChange={(answer) => setFreeResponse(answer.content_html)}
      onAnswerSave={() => console.log('Save')}
      onNextStep={() => console.log('Next')}
    />
  );
};

export const UpdateMode = () => {
  const [freeResponse, setFreeResponse] = useState('Previously submitted answer.');

  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={true}
      canAnswer={true}
      apiIsPending={false}
      free_response={freeResponse}
      submissionInfo="Last submitted on July 26 at 4:00 pm"
      onAnswerChange={(answer) => setFreeResponse(answer.content_html)}
      onAnswerSave={() => console.log('Save')}
      onNextStep={() => console.log('Next')}
    />
  );
};

export const PostReviewShortAnswer = () => {
  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={true}
      canAnswer={false}
      apiIsPending={false}
      free_response="This is a short answer."
      feedback_html="<p>Good effort, but could use more detail.</p>"
      scoring={{ score: 5, maxScore: 10 }}
      onAnswerChange={() => {}}
      onAnswerSave={() => {}}
      onNextStep={() => console.log('Next clicked')}
    />
  );
};

export const PostReviewLongAnswer = () => {
  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={true}
      canAnswer={false}
      apiIsPending={false}
      free_response="This is a much longer answer that demonstrates the read more/read less functionality. The answer goes on and on with lots of detail about the topic at hand. It contains multiple sentences and paragraphs of information that would normally take up more than four lines when displayed on the screen. This allows us to test the expand and collapse functionality to ensure it works correctly. Here is even more text to make sure we exceed the character limit for the read more button to appear. We need to keep adding content to ensure this text is definitely longer than 400 characters so the read more button will show up properly in the component. Lets add one more line so the user can see. Well maybe we need another line so we see what the read more button does. "
      feedback_html="<p>Excellent detailed response!</p>"
      scoring={{ score: 8, maxScore: 10 }}
      onAnswerChange={() => {}}
      onAnswerSave={() => {}}
      onNextStep={() => console.log('Next clicked')}
    />
  );
};

export const SavingState = () => {
  const [freeResponse, setFreeResponse] = useState('answer that is being saved.');

  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={false}
      canAnswer={true}
      apiIsPending={true}
      free_response={freeResponse}
      onAnswerChange={(answer) => setFreeResponse(answer.content_html)}
      onAnswerSave={() => {}}
      onNextStep={() => {}}
    />
  );
};

export const UpdateSavingState = () => {
  const [freeResponse, setFreeResponse] = useState('answer being saved.');

  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={true}
      canAnswer={true}
      apiIsPending={true}
      free_response={freeResponse}
      submissionInfo="Last submitted on July 26 at 4:00 pm"
      onAnswerChange={(answer) => setFreeResponse(answer.content_html)}
      onAnswerSave={() => {}}
      onNextStep={() => {}}
    />
  );
};

export const PreviewModeUnanswered = () => {
  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={false}
      canAnswer={true}
      apiIsPending={false}
      free_response=""
      previewMode={true}
      scoring={{ maxScore: 10 }}
      onAnswerChange={() => {}}
      onAnswerSave={() => {}}
      onNextStep={() => {}}
      onGradingSave={(data) => console.log('Grading saved:', data)}
    />
  );
};

export const PreviewModeWithAnswer = () => {
  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={true}
      canAnswer={false}
      apiIsPending={false}
      free_response="Photosynthesis is the process by which plants convert light energy into chemical energy, producing oxygen and glucose from carbon dioxide and water. This is crucial for the ecosystem as it provides oxygen for other organisms and forms the base of most food chains."
      previewMode={true}
      scoring={{ score: 8, maxScore: 10 }}
      gradingComment="Good explanation, but could include more details about the chloroplast."
      onAnswerChange={() => {}}
      onAnswerSave={() => {}}
      onNextStep={() => {}}
      onGradingSave={(data) => console.log('Grading updated:', data)}
    />
  );
};

export const PreviewModeWithLongAnswer = () => {
  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={true}
      canAnswer={false}
      apiIsPending={false}
      free_response="This is a much longer answer that demonstrates the read more/read less functionality with grading. The answer goes on and on with lots of detail about the topic at hand. It contains multiple sentences and paragraphs of information that would normally take up more than four lines when displayed on the screen. This allows us to test the expand and collapse functionality to ensure it works correctly. Here is even more text to make sure we exceed the character limit for the read more button to appear. We need to keep adding content to ensure this text is definitely longer than 400 characters so the read more button will show up properly in the component. Lets add one more line so the user can see. Well maybe we need another line so we see what the read more button does."
      previewMode={true}
      scoring={{ score: 7, maxScore: 10 }}
      gradingComment="Very thorough answer with good details."
      onAnswerChange={() => {}}
      onAnswerSave={() => {}}
      onNextStep={() => {}}
      onGradingSave={(data) => console.log('Grading updated:', data)}
    />
  );
};

export const PreviewModeUnansweredNoGrading = () => {
  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={false}
      canAnswer={true}
      apiIsPending={false}
      free_response=""
      previewMode={true}
      scoring={{ maxScore: 10 }}
      onAnswerChange={() => {}}
      onAnswerSave={() => {}}
      onNextStep={() => {}}
    />
  );
};

export const PreviewModeWithAnswerNoGrading = () => {
  return (
    <FreeResponseInput
      {...baseQuestionState}
      is_completed={true}
      canAnswer={false}
      apiIsPending={false}
      free_response="Photosynthesis is the process by which plants convert light energy into chemical energy, producing oxygen and glucose from carbon dioxide and water. This is crucial for the ecosystem as it provides oxygen for other organisms and forms the base of most food chains."
      previewMode={true}
      scoring={{ score: 8, maxScore: 10 }}
      feedback_html="<p>Good explanation with clear details.</p>"
      onAnswerChange={() => {}}
      onAnswerSave={() => {}}
      onNextStep={() => {}}
    />
  );
};
