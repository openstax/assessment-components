import cn from 'classnames';
import { ReactNode } from 'react';
import { ALPHABET, isAnswerChecked, isAnswerCorrect, isAnswerIncorrect } from '../utils';
import { Answer as AnswerType, ID } from '../types';
import { Content } from './Content';
import styled from 'styled-components';
import { colors, mixins } from '../theme';

// Styled here rather than in Question so that a standalone <Answer> or <AnswersTable> — which
// both render without a Question ancestor — does not visibly print "Choice A:".
const StyledChoiceLabel = styled.span`
  ${mixins.visuallyHidden()}
`;

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
  contentRenderer?: JSX.Element;
  labelAnswers?: boolean;
  feedbackId?: string;
}

type AnswerAnswerProps = Pick<
  AnswerBodyProps,
  'answer' |
  'contentRenderer' |
  'labelAnswers' |
  'hasCorrectAnswer' |
  'isCorrect' |
  'isIncorrect' |
  'isSelected'
>;

// labelAnswers defaults to true, must be explicitly false to disable
const AnswerAnswer = (props: AnswerAnswerProps) => {
  const {
    answer: { content_html },
    contentRenderer,
    labelAnswers,
    hasCorrectAnswer,
    isCorrect,
    isIncorrect,
    isSelected,
  } = props;
  return (
    <div className="answer-answer">
      {/*
        The live region wraps only the indicator. It must not wrap the answer content: browsers
        skip subtrees whose role does not support name-from-contents when computing the accessible
        name of the enclosing label, so a role="status" around the content erases the answer text
        from the radio's accessible name. It is rendered unconditionally (even while the indicator
        itself is null) because a live region has to be present before it changes to be announced.
      */}
      {labelAnswers !== false &&
        <div
          className="answer-indicator-live"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnswerIndicator hasCorrectAnswer={hasCorrectAnswer} isCorrect={isCorrect}
                           isIncorrect={isIncorrect} isSelected={isSelected} />
        </div>}
      <Content className="answer-content" component={contentRenderer} html={content_html} />
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
        contentRenderer={contentRenderer} />
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
    labelAnswers = true,
  } = props;
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
      {/*
        The visible letter bubble is drawn with a ::before on data-answer-choice, so the span has no
        text of its own. aria-label is not allowed on a generic element, so the choice is exposed as
        real (visually hidden) text instead. No "Selected" prefix: the radio already reports its
        checked state, and a name that changes with state is its own problem.
      */}
      <span
        className="answer-letter-wrapper"
        aria-hidden="true"
        data-answer-choice={ALPHABET[iter]}
        data-test-id={`answer-choice-${ALPHABET[iter]}`}
      >
      </span>
      <StyledChoiceLabel className="answer-choice-label">{`Choice ${ALPHABET[iter]}:`}</StyledChoiceLabel>
      <AnswerAnswer
        answer={answer}
        contentRenderer={contentRenderer}
        labelAnswers={labelAnswers}
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
      <div className={classes}>
        <AnswerBody
          {...props}
          isCorrect={isCorrect}
          isSelected={isSelected}
          isIncorrect={isIncorrect} />
      </div>
    </div>
  );
}
Answer.displayName = 'OSAnswer';
