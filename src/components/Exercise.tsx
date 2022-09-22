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

export interface ExerciseBaseProps {
  step: StepBase;
  exercise: ExerciseData;
  numberOfQuestions: number;
  questionNumber: number;
  answer_id_order?: ID[];
  hasMultipleAttempts: boolean;
  onAnswerSave: (question_id: number) => void;
  onNextStep: () => void;
  show_all_feedback?: boolean;
}

export interface ExerciseWithStepDataProps extends ExerciseBaseProps {
  step: StepWithData;
  canAnswer: boolean;
  needsSaved: boolean;
  apiIsPending: boolean;
  onAnswerChange: (answer: Answer) => void;
  canUpdateCurrentStep: boolean;
}

export interface ExerciseWithQuestionStatesProps extends ExerciseBaseProps {
  questionStates: { [key: ID]: QuestionState };
  onAnswerChange: (answer: Omit<Answer, 'id'> & { id: number, question_id: number }) => void;
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

    {exercise.questions.map((q, i) => {
      const legacyStepRender = 'feedback_html' in step;
      const state = { ...(legacyStepRender ? step : props['questionStates'][q.id]) };
      return (
        <ExerciseQuestion
          {...props}
          {...state}
          exercise_uid={exercise.uid}
          key={q.id}
          question={q}
          questionNumber={questionNumber}
          choicesEnabled={state.canAnswer}
          displaySolution={true}
          detailedSolution={state.solution?.content_html}
          show_all_feedback={show_all_feedback}
          canUpdateCurrentStep={
            // misleading prop name, we want to show a continue button for completed questions
            // that aren't the last question, which requires this prop to be true
            'canUpdateCurrentStep' in props ?
              props.canUpdateCurrentStep : !(i + 1 === exercise.questions.length)
          }
        />
      )
    }
    )}
  </StyledTaskStepCard>
);
