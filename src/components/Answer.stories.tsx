import React from 'react';
import { Answer, AnswerProps } from './Answer';
const props: AnswerProps = {
  type: 'student',
  iter: 0,
  answer: {
    id: '1',
    question_id: 1,
    correctness: null,
    isCorrect: true,
    content_html: 'Answer',
    selected_count: 5
  },
  onChangeAnswer: () => null,
  disabled: false,
  onKeyPress: () => null,
  qid: 1,
  hasCorrectAnswer: false,
  incorrectAnswerId: 0,
  answered_count: 0,
};

export const Default = () => <Answer {...props} />;
export const Checked = () => <Answer {...props} answerId='1' />;
export const Correct = () => <Answer {...props} correctAnswerId='1' />;
export const Incorrect = () => <Answer {...props} incorrectAnswerId='1' />;

export const ToggleCorrect = () => {
  const [correctId, setCorrectId] = React.useState<'1' | '2'>('1');

  return (
    <div style={{ padding: '1rem', maxWidth: 600 }}>
      <p>
        <strong>Current correctAnswerId:</strong> {correctId}
      </p>
      <button
        onClick={() => setCorrectId(id => (id === '1' ? '2' : '1'))}
        aria-live="polite"
      >
        Toggle correct answer (now: {correctId})
      </button>
      <div style={{ marginTop: '1rem' }}>
        <Answer {...props} correctAnswerId={correctId} />
      </div>
    </div>
  );
};