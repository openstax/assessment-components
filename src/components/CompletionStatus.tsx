import styled, { createGlobalStyle } from "styled-components";
import { InnerStepCard } from "./Card";
import Button from "./Button";

const GlobalStyle = createGlobalStyle`
  :root {
    --content-text-scale: 1;
  }
`;

export interface CompletionStatusProps {
  numberOfQuestions: number;
  numberCompleted: number;
  handleClick: () => void;
  className?: string;
  scoreSoFar?: string;
  savedScore?: string;
  handleRetry?: () => void;
}

const CompletionStatusCard = styled(InnerStepCard)`
  padding: 88px 72px;
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(3rem * var(--content-text-scale));
  display: block;

  button {
    min-width: 160px;
    height: 48px;
  }

  p {
    margin: 16px 0 20px 0;
  }
`;

const CompletionHeader = styled.h2`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin: 0;
  gap: 1rem;

  button {
    min-width: 100px;
    height: 48px;
  }
`;

const ScoreGroup = styled.div`
  display: flex;
  margin: 0;
  gap: 1rem;
`;

const RetryResumeButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #D5D5D5;
  font-weight: normal;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5 !important;
    color: #000000 !important;
    border: 1px solid #D5D5D5 !important;
  }

  &:active {
    background-color: #eaeaea !important;
    color: #000000 !important;
    border: 1px solid #D5D5D5 !important;
  }
`;

export const CompletionStatus = styled(({
  numberOfQuestions,
  numberCompleted,
  handleClick,
  className,
  scoreSoFar,
  savedScore,
  handleRetry
}: CompletionStatusProps) => {
  const allCompleted = numberOfQuestions === numberCompleted;
  const someCompleted = numberCompleted > 0;

  const buttonText = allCompleted ? 'Next' : (someCompleted ? 'Continue' : 'Start');

  const retryOrResume = allCompleted ? 'Retry Quiz' : 'Resume Quiz';
  const unlimitedDone = "Attempts for this quiz are unlimited. Your highest score will be saved.";
  const unlimitetedCurrent = "You are in the middle of a quiz attempt. Attempts for this quiz are unlimited. Your highest score will be saved.";

  // When allCompleted, clicking Retry/Resume should create a new attempt (handleRetry)
  // When not completed, clicking Retry/Resume should resume (handleClick)
  const onRetryResumeClick = allCompleted
    ? handleRetry
    : handleClick;

  return (
    <>
      <GlobalStyle />
      <CompletionStatusCard className={className}>
        <CompletionHeader>
          {allCompleted
            ? 'You are done.'
            : (someCompleted ? 'Quiz is partially complete.' : 'No questions have been answered.')}
        </CompletionHeader>

        {handleRetry ? (
          <div>
            <p>{allCompleted ? unlimitedDone : unlimitetedCurrent}</p>
            <ScoreGroup>
              <p>
                <b>Current Score:</b> {scoreSoFar ?? 'Score unavailable'} | <b>Saved Score:</b> {savedScore ?? 'Score unavailable'}
              </p>
            </ScoreGroup>
          </div>
        ) : (
          <p>
            {allCompleted
              ? 'Great job answering all the questions.'
              : (someCompleted
                ? `You've completed ${numberCompleted} of ${numberOfQuestions} questions.`
                : 'Begin working on the quiz.')}
          </p>
        )}

        <ButtonGroup>
          {handleRetry ? (
            <RetryResumeButton
              data-test-id="retry-resume-btn"
              onClick={onRetryResumeClick}
            >
              {retryOrResume}
            </RetryResumeButton>
          ) : null}

          <Button
            data-test-id={`${buttonText.split(' ')[0].toLowerCase()}-btn`}
            onClick={() => handleClick()}
          >
            {buttonText}
          </Button>
        </ButtonGroup>
      </CompletionStatusCard>
    </>
  );
})``;
