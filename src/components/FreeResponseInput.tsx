import { MouseEventHandler, useState, useRef, useLayoutEffect } from 'react';
import { countWords } from '../utils';
import styled, { css } from 'styled-components';
import { colors, mixins } from '../theme';
import { ExerciseQuestionData } from 'src/types';
import Button from './Button';
import { StepCardFooter } from './StepCardFooter';

export interface FreeResponseProps {
  wordLimit: number;
  submissionInfo?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  cancelHandler: MouseEventHandler<HTMLButtonElement>;
  saveHandler: MouseEventHandler<HTMLButtonElement>;
  value: string;
  isSubmitDisabled: boolean;
  isSaving?: boolean;
  questionNumber: number;
  question: ExerciseQuestionData;
  score?: string;
  isSubmitted?: boolean;
  isReviewed?: boolean;
  feedback?: string;
  onNext?: MouseEventHandler<HTMLButtonElement>;
}


const StyledFreeResponse = styled.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${mixins.stepCardPadding()}
    padding-bottom: 1rem;
  }
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
    font-size: 14px;
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
  font-size: 1.8rem;
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
  font-size: 1.4rem;
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
  font-size: 1.8rem;
  color: ${colors.palette.neutralDark};

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
  font-size: 1.3rem;
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

const ReviewPointsText = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${colors.palette.neutralDarker};

`;

const FeedbackText = styled.div`
  font-size: 1.4rem;
  color: ${colors.palette.neutralDarker};

  .feedback-label {
    color: ${colors.palette.neutralDarker};
    font-weight: bold;
  }
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
    score,
    cancelHandler,
    value,
    submissionInfo,
    isSubmitDisabled,
    isSaving = false,
    saveHandler,
    wordLimit,
    onChange,
    isSubmitted = false,
    isReviewed = false,
    feedback,
    onNext,
  } = props;

  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [originalValue, setOriginalValue] = useState('');
  const hasSetOriginalValue = useRef(false);

  // When entering update mode, capture the original submitted value once
  useLayoutEffect(() => {
    if (isSubmitted && !isReviewed && !hasSetOriginalValue.current) {
      setOriginalValue(value);
      hasSetOriginalValue.current = true;
    }
    // Reset when leaving update mode
    if (!isSubmitted || isReviewed) {
      hasSetOriginalValue.current = false;
    }
  }, [isSubmitted, isReviewed, value]);

  // Determine if text has changed
  const textHasChanged = isSubmitted ? value !== originalValue : value.trim().length > 0;

  const wordCount = countWords(value);
  const isOverWordLimit = wordCount > wordLimit;

  // Check if the review answer text is overflowing
  useLayoutEffect(() => {
    if (isReviewed && textRef.current) {
      const isTextOverflowing =
        !expanded && textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10;
      setIsOverflowing(isTextOverflowing);
    }
  }, [value, isReviewed, expanded]);

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const raw = e.target.value;
    const trimmed = raw.trim();

    if (trimmed) {
      const words = trimmed.split(/\s+/);

      if (words.length > wordLimit) {
        const limited = words.slice(0, wordLimit).join(' ');
        e.target.value = limited;
      }
    }

    onChange(e);
  };

  // State 3: Post-review (read-only with "Your answer" and Next button)
  if (isReviewed) {
    return (
      <StyledFreeResponse data-test-id="student-free-response">
        <div className="step-card-body">
          <ReviewAnswerLabel>Your answer</ReviewAnswerLabel>
          <ReviewAnswerText
            ref={textRef}
            expanded={expanded}
            isOverflowing={isOverflowing}
          >
            {value}
          </ReviewAnswerText>
          {(isOverflowing || expanded) && (
            <ReadMoreButton onClick={() => setExpanded(!expanded)}>
              {expanded ? 'read less' : 'read more'}
            </ReadMoreButton>
          )}
        </div>
        <StepCardFooter>
          <div className='step-card-footer-inner'>
            <div>
                {score && <ReviewPointsText role="status">Points: {score}</ReviewPointsText>}
                {feedback && <FeedbackText><span className="feedback-label">Feedback:</span> {feedback}</FeedbackText>}
              </div>
              <div className="controls">
                <Button
                  data-test-id="next-btn"
                  onClick={onNext}
                >
                  Next
                </Button>
              </div>
          </div>
        </StepCardFooter>
      </StyledFreeResponse>
    );
  }

  // State 2: Update mode (user has submitted and is editing)
  if (isSubmitted) {
    return (
      <StyledFreeResponse data-test-id="student-free-response">
        <div className="step-card-body">
          <FreeResponseTextArea
            {...props}
            onChange={handleChange}
            data-test-id="free-response-box"
            placeholder="Enter your response..."
            aria-label="question response text box"
          />
          <InfoRow hasChildren={!!submissionInfo}>
            {submissionInfo && <div><span className="last-submitted">{submissionInfo}</span></div>}
            <div>
              {wordCount >= wordLimit && <span className="word-limit-error-info">Word limit reached</span>}
              <span> Remaining words: {wordLimit - countWords(value)}</span>
            </div>
          </InfoRow>
        </div>
        <StepCardFooter className="step-card-footer">
          <div className='step-card-footer-inner'>
            <div />
            <div className="controls">
              <RevertButton disabled={!textHasChanged || isSubmitDisabled} onClick={cancelHandler} />
              <Button
                data-test-id="update-answer-btn"
                disabled={!textHasChanged || isSubmitDisabled || isOverWordLimit}
                isWaiting={isSaving}
                waitingText="Saving..."
                onClick={saveHandler}
              >
                Update
              </Button>
            </div>
          </div>
        </StepCardFooter>
      </StyledFreeResponse>
    );
  }

  // State 1: Initial state (not submitted yet)
  return (
    <StyledFreeResponse data-test-id="student-free-response">
      <div className="step-card-body">
        <FreeResponseTextArea
          {...props}
          onChange={handleChange}
          data-test-id="free-response-box"
          placeholder="Enter your response..."
          aria-label="question response text box"
        />
        <InfoRow hasChildren={!!submissionInfo}>
          {submissionInfo && <div><span className="last-submitted">{submissionInfo}</span></div>}
          <div>
            {wordCount >= wordLimit && <span className="word-limit-error-info">Word limit reached</span>}
            <span> Remaining words: {wordLimit - countWords(value)}</span>
          </div>
        </InfoRow>
      </div>
      <StepCardFooter className="step-card-footer">
        <div className='step-card-footer-inner'>
          {score
            ? <div className="points" role="status"><strong>Points: {score}</strong></div>
            : <div />}
          <div className="controls">
            <Button
              data-test-id="submit-answer-btn"
              disabled={isSubmitDisabled || isOverWordLimit}
              isWaiting={isSaving}
              waitingText="Saving..."
              onClick={saveHandler}
            >
              Submit
            </Button>
          </div>
        </div>
      </StepCardFooter>
    </StyledFreeResponse>
  );
}

FreeResponseInput.displayName = 'OSFreeResponse';
