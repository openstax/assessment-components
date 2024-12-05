import cn from 'classnames';
import { ReactNode } from 'react';
import { ALPHABET, isAnswerChecked, isAnswerCorrect, isAnswerIncorrect } from '../utils';
import { Answer as AnswerType, ID } from '../types';
import { Content } from './Content';
import { SimpleFeedback } from './Feedback';
import styled from 'styled-components';
import { colors } from '../theme';

const StyledAnswerIndicator = styled.div<{ state: boolean }>`
  color: ${props => props.state ? colors.answer.correct : colors.answer.incorrect};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`;

const AnswerIndicator = (
  { isCorrect, isIncorrect }: { isCorrect?: boolean; isIncorrect?: boolean }
) => {
  if (!isCorrect && !isIncorrect) {
    return null;
  }
  const state = isCorrect || isIncorrect === false;

  return <StyledAnswerIndicator state={state}>
    {state ? 'Correct' : 'Incorrect'} Answer
  </StyledAnswerIndicator>
};

export interface AnswerProps {
  answer: AnswerType;
  iter: number;
  qid: ID;
  type: 'teacher-review' | 'teacher-preview' | 'student' | 'student-mpp';
  hasCorrectAnswer?: boolean;
  onChangeAnswer?: (answer: AnswerType) => void;
  disabled: boolean;
  answerId?: ID;
  correctAnswerId?: ID | null;
  incorrectAnswerId?: ID;
  onKeyPress?: () => void;
  answered_count?: number;
  correctIncorrectIcon?: ReactNode,
  radioBox?: ReactNode;
  contentRenderer?: JSX.Element;
  show_all_feedback?: boolean;
  tableFeedbackEnabled?: boolean;
  feedbackId?: string;
}

export const Answer = (props: AnswerProps) => {
  const {
    type,
    iter,
    answer,
    disabled,
    onKeyPress,
    qid,
    answerId,
    correctAnswerId,
    incorrectAnswerId,
    hasCorrectAnswer,
    answered_count,
    contentRenderer,
    show_all_feedback,
    tableFeedbackEnabled,
    feedbackId,
  } = props;

  let body, feedback, selectedCount;

  const isChecked = isAnswerChecked(answer, answerId);
  const isCorrect = isAnswerCorrect(answer, correctAnswerId);
  const isIncorrect = isAnswerIncorrect(answer, incorrectAnswerId);
  // When rendering a previous response, we can determine if it was this answer.
  // If there is no incorrectAnswerId, that means only a correct answer is present, check isCorrect.
  // If an incorrectAnswerId is present (there is only ever one, if multiple attempts are enabled,
  // it is the latest one) checking isIncorrect works because incorrectAnswerId is only set for
  // a missed attempt, meaning if an attempt is missed and then successfully re-attempted,
  // incorrectAnswerId will be empty.
  const isPreviousResponse = answerId === undefined && (!incorrectAnswerId && isCorrect || isIncorrect);

  const classes = cn('answers-answer', {
    'disabled': disabled,
    'answer-selected': isChecked || isPreviousResponse,
    'answer-correct': isCorrect && type !== 'student-mpp',
    'answer-incorrect': incorrectAnswerId && isAnswerIncorrect(answer, incorrectAnswerId),
  });

  const correctIncorrectIcon = (
    <div className="correct-incorrect">
      {isCorrect && props.correctIncorrectIcon}
    </div>
  );

  let ariaLabel = `${isChecked ? 'Selected ' : ''}Choice ${ALPHABET[iter]}`;
  ariaLabel += ':';

  let onChangeAnswer: AnswerProps['onChangeAnswer'];

  const onChange = () => onChangeAnswer && onChangeAnswer(answer);

  if (!hasCorrectAnswer
    && (type !== 'teacher-review')
    && (type !== 'teacher-preview')
    && (type !== 'student-mpp')) {
    ({ onChangeAnswer } = props);
  }

  if (show_all_feedback && answer.feedback_html && !tableFeedbackEnabled) {
    feedback = (
      <SimpleFeedback key="question-mc-feedback" contentRenderer={contentRenderer}>
        {answer.feedback_html}
      </SimpleFeedback>
    );
  }

  if (type === 'teacher-review') {
    let percent = 0;
    if (answer.selected_count && answered_count) {
      percent = Math.round((answer.selected_count / answered_count) * 100);
    }
    selectedCount = (
      <span
        className="selected-count"
        data-percent={`${percent}`}
      >
        {answer.selected_count}
      </span>
    );

    body = (
      <div className="review-wrapper">
        <div className={cn('review-count', { 'green': isCorrect, 'red': !isCorrect })}>
          {selectedCount}
          <span className={cn('letter', { 'green': isCorrect, 'red': !isCorrect })}>
            {ALPHABET[iter]}
          </span>
        </div>

        <div className="answer-answer">
          <Content className="answer-content" component={contentRenderer} html={answer.content_html} />
          {feedback}
        </div>
      </div>
    );
  } else {
    body = (
      <>
        {type === 'teacher-preview' && correctIncorrectIcon}
        {selectedCount}
        <input
          type="radio"
          className="answer-input-box"
          checked={isChecked}
          aria-checked={isChecked}
          id={`${qid}-option-${iter}`}
          name={`${qid}-options`}
          onChange={onChange}
          disabled={disabled || !onChangeAnswer}
          aria-details={feedbackId}
        />
        <label
          onKeyPress={onKeyPress}
          htmlFor={`${qid}-option-${iter}`}
          className="answer-label">
          <span
            className="answer-letter-wrapper"
            aria-label={ariaLabel}
            data-answer-choice={ALPHABET[iter]}
            data-test-id={`answer-choice-${ALPHABET[iter]}`}
          >
          </span>
          <div className="answer-answer">
            <AnswerIndicator isCorrect={isCorrect} isIncorrect={isIncorrect} />
            <Content className="answer-content" component={contentRenderer} html={answer.content_html} />
            {feedback}
          </div>
        </label>
      </>
    );
  }

  return (
    <div className="openstax-answer">
      <section className={classes}>
        {body}
      </section>
    </div>
  );
}
Answer.displayName = 'OSAnswer';
