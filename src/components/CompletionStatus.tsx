import styled, { createGlobalStyle } from "styled-components";
import { InnerStepCard } from "./Card";
import Button from "./Button";
import { colors } from '../theme';
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
    height: 48px;
  }
`;

const ScoreGroup = styled.div`
  display: flex;
  margin: 0;
  gap: 1rem;
`;

const RetryResumeButton = styled(Button)`
  background-color: ${colors.palette.white};
  color: ${colors.palette.black};
  border: 1px solid ${colors.palette.pale};
  font-weight: normal;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.palette.neutralBright} !important;
    color: ${colors.palette.black} !important;
    border: 1px solid ${colors.palette.pale} !important;
  }

  &:active {
    background-color: ${colors.palette.neutralLight} !important;
    color: ${colors.palette.black} !important;
    border: 1px solid ${colors.palette.pale} !important;
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

  const buttonText = allCompleted || (numberCompleted === 0 && handleRetry) || (someCompleted && handleRetry) ? 'Next' : (someCompleted ? 'Continue' : 'Start');

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
