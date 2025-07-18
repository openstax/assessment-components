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

// Annoyingly, sometimes the incorrect answer is only signaled via hasCorrectAnswer and isSelected (not isIncorrect)
const AnswerIndicator = (
  { hasCorrectAnswer, isCorrect, isIncorrect, isSelected }: {
    hasCorrectAnswer?:boolean; isCorrect?: boolean; isIncorrect?: boolean; isSelected?: boolean
  }
) => {
  if (!isCorrect && !isIncorrect && (!isSelected || !hasCorrectAnswer)) { return null; }

  const text = `${isCorrect ? 'Correct' : 'Incorrect'} Answer`;

  return <StyledAnswerIndicator state={!!isCorrect}>
    <span>{text}</span>
  </StyledAnswerIndicator>;
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
  labelAnswers?: boolean;
  show_all_feedback?: boolean;
  tableFeedbackEnabled?: boolean;
  feedbackId?: string;
}

type AnswerAnswerProps = Pick<
  AnswerBodyProps,
  'answer' |
  'contentRenderer' |
  'labelAnswers' |
  'show_all_feedback' |
  'tableFeedbackEnabled' |
  'hasCorrectAnswer' |
  'isCorrect' |
  'isIncorrect' |
  'isSelected'
>;

// labelAnswers defaults to true, must be explicitly false to disable
const AnswerAnswer = (props: AnswerAnswerProps) => {
  const {
    answer: { content_html, feedback_html },
    contentRenderer,
    labelAnswers,
    show_all_feedback,
    tableFeedbackEnabled,
    hasCorrectAnswer,
    isCorrect,
    isIncorrect,
    isSelected,
  } = props;
  return (
    <div
      className="answer-answer"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {labelAnswers !== false && <AnswerIndicator hasCorrectAnswer={hasCorrectAnswer} isCorrect={isCorrect}
                                                  isIncorrect={isIncorrect} isSelected={isSelected} />}
      <Content className="answer-content" component={contentRenderer} html={content_html} />
      {show_all_feedback && feedback_html && !tableFeedbackEnabled &&
        <SimpleFeedback key="question-mc-feedback" contentRenderer={contentRenderer}>
          {feedback_html}
        </SimpleFeedback>}
    </div>
  )
}

interface AnswerBodyProps extends AnswerProps {
  isCorrect?: boolean;
  isSelected?: boolean;
  isIncorrect?: boolean;
  labelAnswers?: boolean;
}

const TeacherReview = (props: AnswerBodyProps) => {
  const {
    answer,
    answered_count,
    isCorrect,
    contentRenderer,
    iter,
    show_all_feedback,
    tableFeedbackEnabled,
  } = props;
  const percent = answer.selected_count && answered_count
    ? Math.round((answer.selected_count / answered_count) * 100)
    : 0;
  return (
    <div className="review-wrapper">
      <div className={cn('review-count', { 'green': isCorrect, 'red': !isCorrect })}>
        <span
          className="selected-count"
          data-percent={`${percent}`}
        >
          {answer.selected_count}
        </span>
        <span className={cn('letter', { 'green': isCorrect, 'red': !isCorrect })}>
          {ALPHABET[iter]}
        </span>
      </div>
      <AnswerAnswer
        answer={answer}
        contentRenderer={contentRenderer}
        show_all_feedback={show_all_feedback}
        tableFeedbackEnabled={tableFeedbackEnabled} />
    </div>
  );
}

const AnswerChoice = (props: AnswerBodyProps) => {
  const {
    type,
    iter,
    answer,
    disabled,
    onKeyPress,
    qid,
    contentRenderer,
    correctIncorrectIcon,
    feedbackId,
    isSelected,
    isCorrect,
    isIncorrect,
    hasCorrectAnswer,
    show_all_feedback,
    tableFeedbackEnabled,
    labelAnswers = true,
  } = props;
  const ariaLabel = `${isSelected ? 'Selected ' : ''}Choice ${ALPHABET[iter]}:`;
  let onChangeAnswer: AnswerProps['onChangeAnswer'];

  const onChange = () => onChangeAnswer && onChangeAnswer(answer);

  if (!hasCorrectAnswer
    && (type !== 'teacher-review')
    && (type !== 'teacher-preview')
    && (type !== 'student-mpp')) {
    ({ onChangeAnswer } = props);
  }

  return <>
    {type === 'teacher-preview' &&
      <div className="correct-incorrect">
        {isCorrect && correctIncorrectIcon}
      </div>}
    <input
      type="radio"
      className="answer-input-box"
      checked={isSelected}
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
      <AnswerAnswer
        answer={answer}
        contentRenderer={contentRenderer}
        labelAnswers={labelAnswers}
        show_all_feedback={show_all_feedback}
        tableFeedbackEnabled={tableFeedbackEnabled}
        hasCorrectAnswer={hasCorrectAnswer}
        isCorrect={isCorrect}
        isIncorrect={isIncorrect}
        isSelected={isSelected}
        />
    </label>
  </>
}

const AnswerBody = (props: AnswerBodyProps) => {
  return props.type === 'teacher-review'
    ? <TeacherReview {...props} />
    : <AnswerChoice {...props} />
}

export const Answer = (props: AnswerProps) => {
  const {
    type,
    answer,
    disabled,
    answerId,
    correctAnswerId,
    incorrectAnswerId,
  } = props;

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

  const isSelected = isChecked || isPreviousResponse;
  const classes = cn('answers-answer', {
    'disabled': disabled,
    'answer-selected': isSelected,
    'answer-correct': isCorrect && type !== 'student-mpp',
    'answer-incorrect': incorrectAnswerId && isAnswerIncorrect(answer, incorrectAnswerId),
  });

  return (
    <div className="openstax-answer">
      <section className={classes}>
        <AnswerBody
          {...props}
          isCorrect={isCorrect}
          isSelected={isSelected}
          isIncorrect={isIncorrect} />
      </section>
    </div>
  );
}
Answer.displayName = 'OSAnswer';
