import styled from 'styled-components';
import { Content } from './Content';
import { TaskStepCard } from './Card';
import { AvailablePoints, ExerciseAnswerState, ExerciseData, ID, Step } from 'src/types';
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

export interface ExerciseProps {
  exercise: ExerciseData;
  step?: Step;
  numberOfQuestions: number;
  questionNumber: number;
  canAnswer: boolean;
  needsSaved: boolean;
  answer_id_order?: ID[];
  hasMultipleAttempts: boolean;
  onAnswerChange: () => void;
  onAnswerSave: () => void;
  onNextStep: () => void;
  canUpdateCurrentStep: boolean;
  attempt_number: number;
  apiIsPending: boolean;
  available_points: AvailablePoints;
  displaySolution: boolean;
  show_all_feedback?: boolean;
  exerciseAnswers: {[key: string]: ExerciseAnswerState};
}

export const Exercise = ({
  displaySolution, numberOfQuestions, questionNumber, step, exercise, canAnswer, needsSaved, exerciseAnswers, ...props
}: ExerciseProps) => (
  <StyledTaskStepCard
    step={step}
    questionNumber={questionNumber}
    numberOfQuestions={numberOfQuestions}
  >
    <Preamble exercise={exercise} />

    {exercise.questions.map((q) =>
      <ExerciseQuestion
        {...props}
        {...step}
        {...exerciseAnswers[q.id]}
        exercise_uid={exercise.uid}
        key={q.id}
        question={q}
        questionNumber={questionNumber}
        choicesEnabled={canAnswer}
        canAnswer={canAnswer}
        needsSaved={needsSaved}
        canUpdateCurrentStep={canAnswer}
        displaySolution={!!displaySolution}
        answerId={step?.answer_id}
      />
    )}
  </StyledTaskStepCard>
);
