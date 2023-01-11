import styled from "styled-components";
import { InnerStepCard } from "./Card";
import Button from "./Button";

export interface CompletionStatusProps {
  numberOfQuestions: number;
  numberCompleted: number;
  canContinue: boolean;
  handleClick: () => void;
}

const CompletionStatusCard = styled(InnerStepCard)`
  padding: 88px 72px;
  font-size: 1.8rem;
  line-height: 3rem;
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
  font-size: 2.4rem;
  margin: 0;
`;

export const CompletionStatus = ({
  numberOfQuestions, numberCompleted, canContinue, handleClick
}: CompletionStatusProps) => {
  
  const allCompleted = numberOfQuestions === numberCompleted;
  const someCompleted = numberCompleted > 0;
  const buttonText = allCompleted && canContinue ? 'Continue to next step' : (
      someCompleted ? 'Continue' : 'Start'
  );

  return (
    <CompletionStatusCard>
      <CompletionHeader>{allCompleted ? 'You are done.' : (someCompleted ? 'Steps in progress' : 'No questions have been answered.')}</CompletionHeader>
      <p>{allCompleted ? 'Great job answering all the questions.' : (someCompleted ? `You've completed ${numberCompleted} of ${numberOfQuestions} questions.` : 'Begin working on the quiz.')}</p>
      {allCompleted && !canContinue ? null :
        <Button data-test-id={`${buttonText.split(' ')[0].toLowerCase()}-btn`} onClick={()=> handleClick()}>
          {buttonText}
        </Button>
      }
    </CompletionStatusCard>
  )
};
