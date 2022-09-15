import styled from 'styled-components';
import { Content } from './Content';
import { TaskStepCard } from './Card';
import { ExerciseData, ID, QuestionState, StepBase, StepWithData } from '../../src/types';
import { ExerciseQuestion } from './ExerciseQuestion';

const StyledTaskStepCard = styled(TaskStepCard)`
  font-size: 1.8rem;
  line-height: 3rem;
`;

const Preamble = ({ exercise }: { exercise: ExerciseData }) => {
  return (
    <>
      {exercise.context &&
        <Content className="step-card-body exercise-context"
          block html={exercise.context} />}

      {exercise.stimulus_html &&
        <Content className="step-card-body exercise-stimulus"
          block html={exercise.stimulus_html} />}
    </>
  );
};

interface ExerciseBaseProps {
  step: StepBase;
  exercise: ExerciseData;
  numberOfQuestions: number;
  questionNumber: number;
  canAnswer: boolean;
  needsSaved: boolean;
  answer_id_order?: ID[];
  hasMultipleAttempts: boolean;
  onAnswerChange: () => void;
  onAnswerSave: () => void;
  onNextStep: () => void;
  apiIsPending: boolean;
}

export interface ExerciseWithStepDataProps extends ExerciseBaseProps {
  step: StepWithData;
}

export interface ExerciseWithQuestionStatesProps extends ExerciseBaseProps {
  questionStates: { [key: ID]: QuestionState };
}

export const Exercise = ({
  numberOfQuestions, questionNumber, step, exercise, canAnswer, needsSaved, ...props
}: ExerciseWithStepDataProps | ExerciseWithQuestionStatesProps) => (
  <StyledTaskStepCard
    step={step}
    questionNumber={questionNumber}
    numberOfQuestions={numberOfQuestions}
    exerciseId={exercise.uid}
  >
    <Preamble exercise={exercise} />

    {exercise.questions.map((q) => {
      const state = { ...('feedback_html' in step ? step : props['questionStates'][q.id]) };
      return (
        <ExerciseQuestion
          {...props}
          {...state}
          exercise_uid={exercise.uid}
          key={q.id}
          question={q}
          questionNumber={questionNumber}
          choicesEnabled={canAnswer}
          canAnswer={canAnswer}
          needsSaved={needsSaved}
          canUpdateCurrentStep={canAnswer}
          displaySolution={true}
          detailedSolution={state.solution?.content_html}
        />
      )
    }
    )}
  </StyledTaskStepCard>
);
