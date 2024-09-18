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

export const CompletionStatus = styled(({
  numberOfQuestions, numberCompleted, handleClick
}: CompletionStatusProps) => {

  const allCompleted = numberOfQuestions === numberCompleted;
  const someCompleted = numberCompleted > 0;
  const buttonText = allCompleted ? 'Next' : (
      someCompleted ? 'Continue' : 'Start'
  );

  return <>
    <GlobalStyle />
    <CompletionStatusCard>
      <CompletionHeader>{allCompleted ? 'You are done.' : (someCompleted ? 'Quiz is partially complete.' : 'No questions have been answered.')}</CompletionHeader>
      <p>{allCompleted ? 'Great job answering all the questions.' : (someCompleted ? `You've completed ${numberCompleted} of ${numberOfQuestions} questions.` : 'Begin working on the quiz.')}</p>
      <Button data-test-id={`${buttonText.split(' ')[0].toLowerCase()}-btn`} onClick={() => handleClick()}>
        {buttonText}
      </Button>
    </CompletionStatusCard>
  </>
})``;
