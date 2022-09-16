import { ExerciseData, StepWithData } from '../../src/types';
import data from '../../exercises.json';
import styled from 'styled-components';
import { Exercise } from './Exercise';

const ExerciseWrapper = styled.div`
  break-inside: avoid;

  .step-card-footer {
    display: none;
  }
  break-inside: avoid;

  .separator {
    display: inherit;
  }
`;

const ExerciseHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
`;

const step: StepWithData = {
  uid: '1234@4',
  id: 1,
  available_points: '1.0',
  is_completed: false,
  answer_id_order: ['1', '2'],
  answer_id: '1',
  free_response: '',
  feedback_html: '',
  correct_answer_id: '',
  correct_answer_feedback_html: '',
  is_feedback_available: true,
  attempts_remaining: 0,
  attempt_number: 1,
  incorrectAnswerId: 0
};

const exercises = data as unknown as ExerciseData[];

export const Default = () =>
  exercises.map(((exercise, i) => {
    return (
      <ExerciseWrapper>
        <ExerciseHeading className="exercise-id" key={i}>Exercise ID: {exercise.uid}</ExerciseHeading>
        <Exercise
          canAnswer={true}
          needsSaved={true}
          hasMultipleAttempts={false}
          onAnswerChange={() => undefined}
          onAnswerSave={() => undefined}
          onNextStep={() => undefined}
          apiIsPending={false}
          exercise={exercise}
          step={step}
          questionNumber={i}
          numberOfQuestions={exercises.length} />
      </ExerciseWrapper>
    )
  }));
