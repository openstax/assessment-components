import React from 'react';
import styled, { css } from 'styled-components';
import { colors, mixins } from '../theme';
import { Answer as AnswerData, ExerciseQuestionData, ID, QuestionBodyState } from '../types';
import { countWords, formatTimestamp, numberfyId } from '../utils';
import { CompactDisplayProps, useCompactDisplay } from './compactDisplay';
import { FreeResponseGrading } from './FreeResponseGrading';
import { FreeResponseReview } from './FreeResponseReview/FreeResponseReview';
import { Question, QuestionHtml } from './Question';
import ExclamationCircle from '../assets/exclamation-circle';

const RESPONSE_SIZE_WORD_LIMITS: Record<string, number> = { short: 30, medium: 100, long: 1000 };
const DEFAULT_WORD_LIMIT = 100;

export const StyledFreeResponse = styled.div<CompactDisplayProps>`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.palette.pale};

  .step-card-body {
    ${mixins.stepCardPadding()}
    padding-bottom: 1rem;
  }

  ${props => props.compactDisplay && css`
    && .step-card-body {
      background-color: ${colors.palette.white};
      padding: var(--spacing, 0.8rem);
      font-size: 1.6rem;
      line-height: 2rem;
    }

    && .question-stem {
      color: ${colors.palette.neutralDarker};
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2rem;
    }
  `}
`;

const StyledQuestionStem = styled.div`
  font-size: calc(2rem * var(--content-text-scale));
  line-height: 1.68em;
  position: relative;
`;

const InfoRow = styled.div<{ hasChildren: boolean }>`
  margin: 8px 0;
  display: flex;
  justify-content: ${props => props.hasChildren ? 'space-between' : 'flex-end'};
  line-height: 1.6rem;

  .word-limit-error-info,
  .words-remaining-negative {
    color: ${colors.palette.danger};
  }

  div > span {
    font-size: calc(1.4rem * var(--content-text-scale));
    line-height: 16px;

    + span {
      margin-left: 1rem;
    }
  }

  .last-submitted + * {
    margin-top: 0.8rem;
  }

  color: ${colors.palette.neutralThin};
`;

export const FreeResponseTextArea = styled.textarea`
  display: block;
  font-family: inherit;
  font-size: calc(1.8rem * var(--content-text-scale));
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${colors.palette.neutral};
  color: ${colors.palette.neutralDarker};
`;
FreeResponseTextArea.displayName = 'OSFreeResponseTextArea';

const COLLAPSED_HEIGHT = 16.8; // rem

const ReviewAnswerLabel = styled.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${colors.palette.neutralThin};
  margin: 2.5rem 0 1rem 0;
`;

const ReviewAnswerText = styled.div<{ expanded: boolean; isOverflowing: boolean }>`
  border-left: 16px solid ${colors.palette.neutralLighter};
  padding-left: 1.6rem;
  margin: 1rem 0 1rem 1rem;
  max-height: ${({ expanded }) => (expanded ? 'none' : `${COLLAPSED_HEIGHT}rem`)};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${colors.palette.neutralDark};
  white-space: pre-wrap;

  ${({ expanded, isOverflowing }) =>
    !expanded && isOverflowing
      ? css`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ''}
`;

const ReadMoreButton = styled.button`
  display: inline;
  background: none;
  border: none;
  color: ${colors.palette.blue};
  padding: 0;
  margin: 0 0 0 1rem;
  cursor: pointer;
  font-size: calc(1.3rem * var(--content-text-scale));
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

const ResponseGradingLayout = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 2.5rem;
`;

const ResponseColumn = styled.div`
  flex: 1;
`;

const UnansweredText = styled.p`
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
  margin: 0;
`;

const EditableNotice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.notice.background};
  padding-left: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
`;

const ValidationMessage = styled.div`
  color: ${colors.palette.danger};
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  margin-top: 0.8rem;
`;

/** Rendered against the interaction that produced them when a submission is refused. */
const VALIDATION_MESSAGES = {
  'no-answer-selected': 'Select an answer before submitting.',
  'no-response-entered': 'Enter a response before submitting.',
  'over-word-limit': 'Shorten your response to the word limit before submitting.',
};

type ValidationKey = keyof typeof VALIDATION_MESSAGES;

export interface QuestionBodyProps extends CompactDisplayProps {
  question: ExerciseQuestionData;
  /** the fields the body reads — not the whole `QuestionState` */
  state: QuestionBodyState;
  /** host state: disables the input while a save is in flight */
  apiIsPending?: boolean;
  /** host state: free response computes `dirty` from this */
  needsSaved?: boolean;
  /** when set alongside `previewMode`, the body renders the grading widget */
  onGradingSave?: (questionId: ID, data: { score: number; max: number; comment: string }) => Promise<void> | void;
  onAnswerChange: (
    answer: Omit<AnswerData, 'id'> & { id: number; question_id: number },
    status?: { canSubmit?: boolean; dirty?: boolean },
  ) => void;
  /**
   * Called on mount with a submit handle. Invoking it validates the current response,
   * renders any validation messages in the body, and returns the response — or `null`
   * when it is not valid to submit.
   */
  registerSubmit?: (submit: () => AnswerData | null) => void;
  /**
   * Called on mount with a handle that discards any unsubmitted edit, for a composer that
   * renders its own Cancel control. The body owns the baseline it reverts to.
   */
  registerCancel?: (cancel: () => void) => void;
  /**
   * Reports whether the current response can be submitted, and whether it differs from the
   * one last submitted — the two things only the body knows and a footer needs. Called on
   * mount and whenever either changes; the same values ride along on `onAnswerChange`.
   */
  onStatusChange?: (status: { canSubmit?: boolean; dirty?: boolean }) => void;
  /** how long an answer this question expects. The word count behind it stays internal. */
  responseSize?: 'short' | 'medium' | 'long';
  /** @deprecated Pass the semantic `responseSize` instead; this overrides it while it is passed. */
  wordLimit?: number;
  questionNumber?: number;
  /** render as instructor-facing content: answers and solutions visible, learner controls absent */
  previewMode?: boolean;
  /** reveals every answer's `feedback_html`, not only the selected one */
  show_all_feedback?: boolean;
  /** `false` suppresses the correct/incorrect indicator; defaults to `true` */
  labelAnswers?: boolean;
  /** rendered at the bottom of the body — `QuestionLevelFeedback`, for a caller that wants it there */
  feedback?: React.ReactNode;
}

export const isFreeResponseQuestion = (question: ExerciseQuestionData) =>
  question.formats.length === 1 && question.formats.includes('free-response');

const FreeResponseBody = React.forwardRef((
  props: QuestionBodyProps, ref: React.ForwardedRef<HTMLDivElement>
) => {
  const {
    question, state, apiIsPending = false, needsSaved = false, onAnswerChange, onGradingSave,
    registerSubmit, registerCancel, responseSize, previewMode = false, feedback, compactDisplay,
  } = props;
  const {
    is_completed, canAnswer, free_response = '', score, feedback_html, submissionTimestamp, draftTimestamp,
    submittedResponse: submittedText, gradingTimestamp,
  } = state;

  const compact = useCompactDisplay(compactDisplay);
  const wordLimit = props.wordLimit
    ?? ((responseSize && RESPONSE_SIZE_WORD_LIMITS[responseSize]) || DEFAULT_WORD_LIMIT);

  const [expanded, setExpanded] = React.useState(false);
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const [validation, setValidation] = React.useState<ValidationKey | null>(null);
  const textRef = React.useRef<HTMLDivElement>(null);
  const [lastSettledValue, setLastSettledValue] = React.useState(free_response || '');

  const isUpdateMode = is_completed && canAnswer;
  const isPostReview = is_completed && !canAnswer;

  const editableNotice = !previewMode ? (
    <EditableNotice>
      <ExclamationCircle />
      You can come back and edit your response until it has been graded.
    </EditableNotice>
  ) : null;

  React.useLayoutEffect(() => {
    if (isUpdateMode && !needsSaved) {
      setLastSettledValue(free_response || '');
    }
  }, [needsSaved, isUpdateMode, free_response]);

  // Cancel reverts to the submitted answer, so the baseline is derived rather than cached:
  // when free_response holds an autosaved draft, the draft is not what cancel should restore
  const originalSubmittedValue = submittedText ?? lastSettledValue;

  const textHasChanged = needsSaved && (free_response || '') !== originalSubmittedValue;

  const wordCount = countWords(free_response || '');
  const remainingWords = wordLimit - wordCount;
  const isOverWordLimit = remainingWords < 0;
  const isEmpty = (free_response || '').trim().length === 0;
  const canSubmit = !isOverWordLimit && !isEmpty;

  const { onStatusChange } = props;
  React.useLayoutEffect(() => {
    if (onStatusChange) { onStatusChange({ canSubmit, dirty: textHasChanged }); }
  }, [onStatusChange, canSubmit, textHasChanged]);

  const answerFor = (value: string) => ({
    id: numberfyId(question.id),
    question_id: numberfyId(question.id),
    type: 'free-response' as const,
    content_html: value,
    free_response: value,
    correctness: undefined,
  });

  React.useEffect(() => {
    if (!registerSubmit) { return; }
    registerSubmit(() => {
      if (isEmpty) { setValidation('no-response-entered'); return null; }
      if (isOverWordLimit) { setValidation('over-word-limit'); return null; }
      setValidation(null);
      return answerFor(free_response || '');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSubmit, isEmpty, isOverWordLimit, free_response, question.id]);

  React.useEffect(() => {
    if (!registerCancel) { return; }
    registerCancel(() => onAnswerChange(answerFor(originalSubmittedValue)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerCancel, originalSubmittedValue, onAnswerChange, question.id]);

  // Check if the review answer text is overflowing
  React.useLayoutEffect(() => {
    const checkOverflow = () => {
      if (isPostReview && textRef.current) {
        const isTextOverflowing =
          !expanded && textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10;
        setIsOverflowing(isTextOverflowing);
      }
    };

    checkOverflow();

    // Re-check on window resize
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [free_response, isPostReview, expanded]);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    // Students may type or paste past the word limit; submission is blocked instead of truncating
    const value = e.target.value;
    const valueIsEmpty = value.trim().length === 0;
    const valueIsOverLimit = wordLimit - countWords(value) < 0;

    if (validation) { setValidation(null); }

    onAnswerChange(answerFor(value), {
      canSubmit: !valueIsEmpty && !valueIsOverLimit,
      dirty: needsSaved && value !== originalSubmittedValue,
    });
  };

  const stem = (
    <StyledQuestionStem>
      {question.stem_html &&
        <QuestionHtml type="stem" html={question.stem_html} hidden={false} />}
    </StyledQuestionStem>
  );

  const validationMessage = validation
    ? <ValidationMessage role="alert" className="validation-message">{VALIDATION_MESSAGES[validation]}</ValidationMessage>
    : null;

  const textarea = (
    <FreeResponseTextArea
      value={free_response || ''}
      onChange={handleChange}
      data-test-id="free-response-box"
      placeholder="Enter your response..."
      aria-label="question response text box"
      disabled={previewMode || apiIsPending || !canAnswer}
    />
  );

  const showDraft = draftTimestamp !== undefined
    && (submissionTimestamp === undefined
      || new Date(draftTimestamp).getTime() > new Date(submissionTimestamp).getTime());

  const responseStatus = showDraft
    ? `Draft last saved ${formatTimestamp(draftTimestamp)}`
    : submissionTimestamp !== undefined
      ? `Last submitted on ${formatTimestamp(submissionTimestamp)}`
      : undefined;

  const infoRow = !previewMode && (
    <InfoRow hasChildren={!!responseStatus}>
      {responseStatus && <div><span className="last-submitted">{responseStatus}</span></div>}
      <div>
        {wordCount >= wordLimit && <span className="word-limit-error-info">Word limit reached</span>}
        <span> Remaining words: <span className={isOverWordLimit ? 'words-remaining-negative' : undefined}>{remainingWords}</span></span>
      </div>
    </InfoRow>
  );

  const gradingWidget = (
    <FreeResponseGrading
      questionId={question.id}
      maxScore={score?.max || 1}
      score={score?.raw}
      comment={feedback_html}
      onSave={onGradingSave as NonNullable<QuestionBodyProps['onGradingSave']>}
      gradingTimestamp={gradingTimestamp}
    />
  );

  const submittedResponse = (
    <>
      <ReviewAnswerText
        ref={textRef}
        expanded={expanded}
        isOverflowing={isOverflowing}
      >
        {free_response || ''}
      </ReviewAnswerText>
      {(isOverflowing || expanded) && (
        <ReadMoreButton onClick={() => setExpanded(!expanded)}>
          {expanded ? 'read less' : 'read more'}
        </ReadMoreButton>
      )}
    </>
  );

  // Post-review state (read-only)
  if (isPostReview) {
    return (
      <StyledFreeResponse ref={ref} data-test-id="student-free-response" compactDisplay={compact}>
        <div className="step-card-body">
          {stem}
          {!previewMode && <ReviewAnswerLabel>Your answer</ReviewAnswerLabel>}
          {previewMode && onGradingSave ? (
            <ResponseGradingLayout>
              <ResponseColumn>
                {submittedResponse}
                {feedback}
              </ResponseColumn>
              {gradingWidget}
            </ResponseGradingLayout>
          ) : (
            <>
              {submittedResponse}
              {feedback}
            </>
          )}
        </div>
      </StyledFreeResponse>
    );
  }

  // Update mode (submitted, still editable)
  if (isUpdateMode) {
    return (
      <StyledFreeResponse ref={ref} data-test-id="student-free-response" compactDisplay={compact}>
        <div className="step-card-body">
          {editableNotice}
          {stem}
          {textarea}
          {validationMessage}
          {infoRow}
          {feedback}
        </div>
      </StyledFreeResponse>
    );
  }

  // Initial state, not submitted yet
  return (
    <StyledFreeResponse ref={ref} data-test-id="student-free-response" compactDisplay={compact}>
      <div className="step-card-body">
        {editableNotice}
        {stem}
        {previewMode ? (
          onGradingSave ? (
            <ResponseGradingLayout>
              <ResponseColumn>
                <UnansweredText>Unanswered</UnansweredText>
              </ResponseColumn>
              {gradingWidget}
            </ResponseGradingLayout>
          ) : (
            <UnansweredText>Unanswered</UnansweredText>
          )
        ) : textarea}
        {validationMessage}
        {infoRow}
        {feedback}
      </div>
    </StyledFreeResponse>
  );
});
FreeResponseBody.displayName = 'OSFreeResponseBody';

const MultipleChoiceBody = React.forwardRef((
  props: QuestionBodyProps, ref: React.ForwardedRef<HTMLDivElement>
) => {
  const {
    question, state, onAnswerChange, registerSubmit, questionNumber = 1, previewMode,
    show_all_feedback, labelAnswers, feedback, compactDisplay,
  } = props;
  const {
    answer_id, correct_answer_id, incorrectAnswerId, feedback_html, correct_answer_feedback_html,
    is_completed, canAnswer, free_response,
  } = state;

  const [validation, setValidation] = React.useState<ValidationKey | null>(null);

  const { onStatusChange } = props;
  const canSubmit = !!answer_id;
  React.useLayoutEffect(() => {
    // multiple choice has never had a `dirty`: its body is fully controlled
    if (onStatusChange) { onStatusChange({ canSubmit }); }
  }, [onStatusChange, canSubmit]);

  React.useEffect(() => {
    if (!registerSubmit) { return; }
    registerSubmit(() => {
      const selected = question.answers.find((a) => a.id === answer_id);
      if (!selected) { setValidation('no-answer-selected'); return null; }
      setValidation(null);
      return {
        ...selected,
        question_id: numberfyId(question.id),
      };
    });
  }, [registerSubmit, answer_id, question]);

  const handleChange = (answer: AnswerData) => {
    if (validation) { setValidation(null); }
    onAnswerChange(
      { ...answer, id: numberfyId(answer.id), question_id: numberfyId(question.id) },
      { canSubmit: true },
    );
  };

  return (
    <Question
      ref={ref}
      question={question}
      choicesEnabled={canAnswer}
      answer_id={answer_id}
      questionNumber={questionNumber}
      onChange={handleChange}
      feedback_html={feedback_html || ''}
      correct_answer_feedback_html={correct_answer_feedback_html}
      correct_answer_id={is_completed ? (correct_answer_id ?? null) : null}
      incorrectAnswerId={incorrectAnswerId as ID}
      className="step-card-body"
      hideAnswers={false}
      displayFormats={false}
      displaySolution={false}
      labelAnswers={labelAnswers}
      show_all_feedback={show_all_feedback}
      previewMode={previewMode}
      compactDisplay={compactDisplay}
      feedback={
        <>
          {validation &&
            <ValidationMessage role="alert" className="validation-message">
              {VALIDATION_MESSAGES[validation]}
            </ValidationMessage>}
          {feedback}
        </>
      }
    >
      <FreeResponseReview free_response={free_response} previewMode={previewMode} />
    </Question>
  );
});
MultipleChoiceBody.displayName = 'OSMultipleChoiceBody';

/**
 * The content of a question: its stem, its answers or its response input, and whatever
 * feedback a caller composes into it. Knows which format it is looking at, so the `formats`
 * dispatch lives here exactly once.
 */
export const QuestionBody = React.forwardRef((
  props: QuestionBodyProps, ref: React.ForwardedRef<HTMLDivElement>
) => isFreeResponseQuestion(props.question)
  ? <FreeResponseBody {...props} ref={ref} />
  : <MultipleChoiceBody {...props} ref={ref} />
);

QuestionBody.displayName = 'OSQuestionBody';
