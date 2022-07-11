import cn from 'classnames';
import React, { ReactNode } from 'react';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const isAnswerIncorrect = function(answer: answerType, incorrectAnswerId: idType) {
  // Allow multiple attempts to show incorrectness without the correct_answer_id
  return answer.id === incorrectAnswerId;
};

const isAnswerChecked = (answer: answerType, chosenAnswer: AnswerProps['chosenAnswer']) =>
  Boolean((chosenAnswer || []).find( a => a == answer.id));

type answerType = {
  id: idType;
  correctness: string;
  isCorrect: boolean;
  content_html: string;
  selected_count?: number;
};
type idType = string | number;

interface AnswerProps {
  answer: answerType;
  iter: number;
  qid: idType;
  type: 'teacher-review' | 'teacher-preview' | 'student' | 'student-mpp';
  hasCorrectAnswer: boolean;
  onChangeAnswer: () => void;
  disabled: boolean;
  chosenAnswer: (string | null | undefined)[];
  correctAnswerId: idType;
  incorrectAnswerId: idType;
  answered_count: number;
  show_all_feedback: boolean;
  keyControl: string | number | [];
  onKeyPress: () => void;
  children?: ReactNode;
  migratingProps: {
    correctIncorrectIcon?: any;
    selectedCount: any;
    radioBox?: any;
    isCorrect: any;
    isIncorrect: any;
    feedback?: any;
  };
}

export const Answer = (props: AnswerProps) => {
  const {
    type,
    iter,
    answer,
    disabled,
    onKeyPress,
    qid,
    chosenAnswer,
    incorrectAnswerId,
    hasCorrectAnswer,
    answered_count,
    children
  } = props;
  const {
    feedback,
    isCorrect,
    isIncorrect,
  } = props.migratingProps;

  let body;
  //let feedback, onChange, radioBox, selectedCount, correctIncorrectIcon;
  let selectedCount, correctIncorrectIcon;

  const isChecked = isAnswerChecked(answer, chosenAnswer);
  const classes = cn('answers-answer', {
    'disabled': disabled,
    'answer-checked': isChecked,
    'answer-correct': isCorrect && type !== 'student-mpp',
    'answer-incorrect': isAnswerIncorrect(answer, incorrectAnswerId),
  });

  let ariaLabel = `${isChecked ? 'Selected ' : ''}Choice ${ALPHABET[iter]}`;
  // somewhat misleading - this means that there is a correct answer,
  // not necessarily that this answer is correct
  if (hasCorrectAnswer) {
    ariaLabel += `(${isCorrect ? 'Correct' : 'Incorrect'} Answer)`;
  }
  ariaLabel += ':';

  let onChangeAnswer, radioBox;

  if (!hasCorrectAnswer
    && (type !== 'teacher-review')
    && (type !== 'teacher-preview')
    && (type !== 'student-mpp')) {
    ({ onChangeAnswer } = props);
  }

  if (onChangeAnswer) {
    radioBox = (
      <input
        type="radio"
        className="answer-input-box"
        checked={isChecked}
        id={`${qid}-option-${iter}`}
        name={`${qid}-options`}
        onChange={onChangeAnswer}
        disabled={disabled}
      />
    );
  }
  if (type === 'teacher-review' && answer.selected_count) {
    const percent = Math.round((answer.selected_count / answered_count) * 100) || 0;
    selectedCount = (
      <span
        className="selected-count"
        data-percent={`${percent}`}
      >
        {answer.selected_count}
      </span>
    );
  }
  if (type === 'teacher-preview') {
    correctIncorrectIcon = props.migratingProps.correctIncorrectIcon;
  }

  if (type === 'teacher-review') {
    body = (
      <div className="review-wrapper">
        <div className={cn('review-count', { 'green': isCorrect, 'red': !isCorrect })}>
          {selectedCount}
          <span className={cn('letter', { 'green': isCorrect, 'red': !isCorrect })}>
            {ALPHABET[iter]}
          </span>
        </div>

        <div className="answer-answer">
          <div className="answer-content">
            {children}
          </div>
          {feedback}
        </div>
      </div>
    );
  } else {
    body = (
      <>
        {correctIncorrectIcon}
        {selectedCount}
        {radioBox}
        <label
          onKeyPress={onKeyPress}
          htmlFor={`${qid}-option-${iter}`}
          className="answer-label">
          <span className="answer-letter-wrapper">
            <button
              onClick={onChangeAnswer}
              aria-label={ariaLabel}
              className="answer-letter"
              disabled={disabled || isIncorrect}
              data-test-id={`answer-choice-${ALPHABET[iter]}`}
            >
              {ALPHABET[iter]}
            </button>
          </span>
          <div className="answer-answer">
            <div className="answer-content">
              {children}
            </div>
            {feedback}
          </div>
        </label>
      </>
    );
  }

  return (
    <div className="openstax-answer">
      <section role="region" className={classes}>
        {body}
      </section>
    </div>
  );
}
Answer.displayName = 'OSAnswer';
