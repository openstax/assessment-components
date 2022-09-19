import styled from 'styled-components';
import { Content } from './Content';
import { TaskStepCard } from './Card';
import { Answer, ExerciseData, ID, QuestionState, StepBase, StepWithData } from '../../src/types';
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
  answer_id_order?: ID[];
  hasMultipleAttempts: boolean;
  onAnswerChange: (answer: Answer & { question_id: ID }) => void;
  onAnswerSave: () => void;
  onNextStep: () => void;
  apiIsPending: boolean;
  show_all_feedback?: boolean;
}

export interface ExerciseWithStepDataProps extends ExerciseBaseProps {
  step: StepWithData;
  canAnswer: boolean;
  needsSaved: boolean;
}

export interface ExerciseWithQuestionStatesProps extends ExerciseBaseProps {
  questionStates: { [key: ID]: QuestionState };
}

export const Exercise = ({
  numberOfQuestions, questionNumber, step, exercise, show_all_feedback, ...props
}: ExerciseWithStepDataProps | ExerciseWithQuestionStatesProps) => (
  <StyledTaskStepCard
    step={step}
    questionNumber={questionNumber}
    numberOfQuestions={numberOfQuestions}
    wrapsExercise={!('feedback_html' in step)}
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
          choicesEnabled={state.canAnswer}
          canUpdateCurrentStep={state.canAnswer}
          displaySolution={true}
          detailedSolution={state.solution?.content_html}
          show_all_feedback={show_all_feedback}
        />
      )
    }
    )}
  </StyledTaskStepCard>
);
