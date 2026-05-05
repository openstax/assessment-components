import { MouseEventHandler, useState, useRef, useLayoutEffect, useEffect } from 'react';
import { countWords, formatTimestamp, numberfyId } from '../utils';
import styled, { css } from 'styled-components';
import { colors, mixins } from '../theme';
import { ExerciseQuestionData, Answer, ID } from 'src/types';
import { QuestionHtml } from './Question';
import Button from './Button';
import { StepCardFooter } from './StepCardFooter';
import { FreeResponseGrading } from './FreeResponseGrading';
import ExclamationCircle from '../assets/exclamation-circle';

export interface FreeResponseProps {
  is_completed: boolean;
  canAnswer: boolean;
  needsSaved: boolean;
  apiIsPending: boolean;
  free_response: string;
  onAnswerChange: (answer: Omit<Answer, 'id'> & { id: number, question_id: number }) => void;
  onAnswerSave: (question_id: number) => void;
  onNextStep: (currentIndex: number) => void;

  // Question data
  questionNumber: number;
  question: ExerciseQuestionData;

  // Specific to free response
  wordLimit: number;
  score?: { raw?: number; max?: number };
  feedback_html?: string;
  submissionTimestamp?: string | number;
  cancelHandler: MouseEventHandler<HTMLButtonElement>;
  previewMode?: boolean;

  // Grading callbacks (for preview mode)
  onGradingSave?: (questionId: ID, data: { score: number; max: number; comment: string }) => Promise<void> | void;
  gradingTimestamp?: string | number;
}


const StyledFreeResponse = styled.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${mixins.stepCardPadding()}
    padding-bottom: 1rem;
  }
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

  .word-limit-error-info {
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
  color: ${colors.palette.neutralDark};
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

const ReviewScoreText = styled.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${colors.palette.neutralDarker};
`;

const FeedbackText = styled.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${colors.palette.neutralDarker};
  white-space: pre-wrap;

  .feedback-label {
    color: ${colors.palette.neutralDarker};
    font-weight: bold;
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
  background-color: #FFF5E0;
  padding-left: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
`;

const CancelButton = styled(Button)`
  background-color: ${colors.palette.darkGray};

  &:hover:not(:disabled) {
    background-color: ${colors.palette.neutral};
  }

  &:active:not(:disabled) {
    background-color: ${colors.palette.neutralDark};
  }
`;

const RevertButton = (props: {
  disabled: boolean
} & React.ComponentPropsWithoutRef<'button'>) => (
  <CancelButton {...props}>
    Cancel
  </CancelButton>
);


export const FreeResponseInput = (props: FreeResponseProps) => {
  const {
    is_completed,
    canAnswer,
    needsSaved,
    apiIsPending,
    free_response,
    onAnswerChange,
    onAnswerSave,
    onNextStep,
    questionNumber,
    question,
    wordLimit,
    score,
    feedback_html,
    submissionTimestamp,
    cancelHandler,
    previewMode = false,
    onGradingSave,
    gradingTimestamp,
  } = props;

  // Format score for display
  const scoreDisplay = typeof score?.raw === 'number' && typeof score?.max === 'number'
    ? `${score.raw}/${score.max}`
    : undefined;

  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [originalSubmittedValue, setOriginalSubmittedValue] = useState(free_response || '');

  // Derive three render states from QuestionState
  const isUpdateMode = is_completed && canAnswer;
  const isPostReview = is_completed && !canAnswer;

  const editableNotice = !previewMode ? (
    <EditableNotice>
      <ExclamationCircle />
      You can come back and edit your response until it has been graded.
    </EditableNotice>
  ) : null;

  // Sync baseline to current free_response whenever there are no unsaved changes
  useLayoutEffect(() => {
    if (isUpdateMode && !needsSaved) {
      setOriginalSubmittedValue(free_response || '');
    }
  }, [needsSaved, isUpdateMode, free_response]);

  const textHasChanged = needsSaved && (free_response || '') !== originalSubmittedValue;

  const wordCount = countWords(free_response || '');
  const isOverWordLimit = wordCount > wordLimit;

  // Check if the review answer text is overflowing
  useLayoutEffect(() => {
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
    const raw = e.target.value;
    const trimmed = raw.trim();

    let limitedValue = raw;
    if (trimmed) {
      const words = trimmed.split(/\s+/);
      if (words.length > wordLimit) {
        limitedValue = words.slice(0, wordLimit).join(' ');
        e.target.value = limitedValue;
      }
    }

    // Call parent's onAnswerChange with Answer structure
    onAnswerChange({
      id: numberfyId(question.id),
      question_id: numberfyId(question.id),
      type: 'free-response',
      content_html: limitedValue,
      free_response: limitedValue,
      correctness: undefined,
    });
  };

  const [shouldContinue, setShouldContinue] = useState(false);

  useEffect(() => {
    if (shouldContinue && is_completed && !apiIsPending) {
      setShouldContinue(false);
      onNextStep(questionNumber - 1);
    }
  }, [shouldContinue, is_completed, apiIsPending, onNextStep, questionNumber]);

  const handleSave = () => {
    onAnswerSave(numberfyId(question.id));
  };

  const handleSubmit = () => {
    onAnswerSave(numberfyId(question.id));
    setShouldContinue(true);
  };

  const handleNext = () => {
    onNextStep(questionNumber - 1);
  };

  const handleCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
    onAnswerChange({
      id: numberfyId(question.id),
      question_id: numberfyId(question.id),
      type: 'free-response',
      content_html: originalSubmittedValue,
      free_response: originalSubmittedValue,
      correctness: undefined,
    });
    cancelHandler(e);
  };

  // Post-review state (read-only with "Your answer" and Next button)
  if (isPostReview) {
    return (
      <StyledFreeResponse data-test-id="student-free-response">
        <div className="step-card-body">
          <StyledQuestionStem>
            {question.stem_html &&
              <QuestionHtml type="stem" html={question.stem_html} hidden={false} />}
          </StyledQuestionStem>
          {!previewMode && <ReviewAnswerLabel>Your answer</ReviewAnswerLabel>}
          {previewMode && onGradingSave ? (
            <ResponseGradingLayout>
              <ResponseColumn>
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
                {previewMode && (
                  <div style={{ marginTop: '1.6rem' }}>
                    {scoreDisplay && <ReviewScoreText role="status">Score: {scoreDisplay}</ReviewScoreText>}
                    {feedback_html && (
                      <FeedbackText>
                        <span className="feedback-label">Feedback:</span>{' '}
                        <QuestionHtml type="stem" html={feedback_html} hidden={false} />
                      </FeedbackText>
                    )}
                  </div>
                )}
              </ResponseColumn>
              {previewMode &&
                <FreeResponseGrading
                  questionId={question.id}
                  maxScore={score?.max || 1}
                  score={score?.raw}
                  comment={feedback_html}
                  onSave={onGradingSave}
                  gradingTimestamp={gradingTimestamp}
                />
              }
            </ResponseGradingLayout>
          ) : (
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
              {previewMode && (
                <div style={{ marginTop: '1.6rem' }}>
                  {scoreDisplay && <ReviewScoreText role="status">Score: {scoreDisplay}</ReviewScoreText>}
                  {feedback_html && (
                    <FeedbackText>
                      <span className="feedback-label">Feedback:</span>{' '}
                      <QuestionHtml type="stem" html={feedback_html} hidden={false} />
                    </FeedbackText>
                  )}
                </div>
              )}
            </>
          )}
        </div>
        {!previewMode && (
          <StepCardFooter>
            <div className='step-card-footer-inner'>
              <div>
                {scoreDisplay && <ReviewScoreText role="status">Score: {scoreDisplay}</ReviewScoreText>}
                {feedback_html && (
                  <FeedbackText>
                    <span className="feedback-label">Feedback:</span>{' '}
                    <QuestionHtml type="stem" html={feedback_html} hidden={false} />
                  </FeedbackText>
                )}
              </div>
              <div className="controls">
                <Button
                  data-test-id="next-btn"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </div>
          </StepCardFooter>
        )}
      </StyledFreeResponse>
    );
  }

  // Update mode (user has submitted and can editing)
  if (isUpdateMode) {
    return (
      <StyledFreeResponse data-test-id="student-free-response">
        <div className="step-card-body">
          {editableNotice}
          <StyledQuestionStem>
            {question.stem_html &&
              <QuestionHtml type="stem" html={question.stem_html} hidden={false} />}
          </StyledQuestionStem>
          <FreeResponseTextArea
            value={free_response || ''}
            onChange={handleChange}
            data-test-id="free-response-box"
            placeholder="Enter your response..."
            aria-label="question response text box"
            disabled={previewMode || apiIsPending}
          />
          {!previewMode && (
            <InfoRow hasChildren={!!submissionTimestamp}>
              {submissionTimestamp && <div><span className="last-submitted">Last submitted on {formatTimestamp(submissionTimestamp)}</span></div>}
              <div>
                {wordCount >= wordLimit && <span className="word-limit-error-info">Word limit reached</span>}
                <span> Remaining words: {wordLimit - wordCount}</span>
              </div>
            </InfoRow>
          )}
        </div>
        {!previewMode && (
          <StepCardFooter className="step-card-footer">
            <div className='step-card-footer-inner'>
              <div />
              <div className="controls">
                <RevertButton disabled={!textHasChanged || apiIsPending} onClick={handleCancel} />
                <Button
                  data-test-id="update-answer-btn"
                  disabled={!textHasChanged || apiIsPending || isOverWordLimit || (free_response || '').trim().length === 0}
                  isWaiting={apiIsPending}
                  waitingText="Saving..."
                  onClick={handleSave}
                >
                  Update
                </Button>
                <Button
                  data-test-id="next-btn"
                  disabled={apiIsPending || textHasChanged}
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </div>
          </StepCardFooter>
        )}
      </StyledFreeResponse>
    );
  }

  // Initial state, not submitted yet
  return (
    <StyledFreeResponse data-test-id="student-free-response">
      <div className="step-card-body">
        {editableNotice}
        <StyledQuestionStem>
          {question.stem_html &&
            <QuestionHtml type="stem" html={question.stem_html} hidden={false} />}
        </StyledQuestionStem>
        {previewMode ? (
          onGradingSave ? (
            <ResponseGradingLayout>
              <ResponseColumn>
                <UnansweredText>Unanswered</UnansweredText>
              </ResponseColumn>
              <FreeResponseGrading
                questionId={question.id}
                maxScore={score?.max || 1}
                score={score?.raw}
                comment={feedback_html}
                onSave={onGradingSave}
                gradingTimestamp={gradingTimestamp}
              />
            </ResponseGradingLayout>
          ) : (
            <UnansweredText>Unanswered</UnansweredText>
          )
        ) : (
          <FreeResponseTextArea
            value={free_response || ''}
            onChange={handleChange}
            data-test-id="free-response-box"
            placeholder="Enter your response..."
            aria-label="question response text box"
            disabled={previewMode || apiIsPending}
          />
        )}
        {!previewMode && (
          <InfoRow hasChildren={!!submissionTimestamp}>
            {submissionTimestamp && <div><span className="last-submitted">Last submitted on {formatTimestamp(submissionTimestamp)}</span></div>}
            <div>
              {wordCount >= wordLimit && <span className="word-limit-error-info">Word limit reached</span>}
              <span> Remaining words: {wordLimit - wordCount}</span>
            </div>
          </InfoRow>
        )}
      </div>
      {!previewMode && (
        <StepCardFooter className="step-card-footer">
          <div className='step-card-footer-inner'>
            <div />
            <div className="controls">
              <Button
                data-test-id="submit-answer-btn"
                disabled={apiIsPending || shouldContinue || isOverWordLimit || (free_response || '').trim().length === 0}
                isWaiting={apiIsPending || shouldContinue}
                waitingText="Saving..."
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </StepCardFooter>
      )}
    </StyledFreeResponse>
  );
}

FreeResponseInput.displayName = 'OSFreeResponse';
