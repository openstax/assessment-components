import { ExerciseData, Step } from '../../src/types';
import data from '../../exercises.json';
import styled from 'styled-components';
import { Exercise } from './Exercise';

const ExerciseWrapper = styled.div`
  break-inside: avoid;

  .step-card-footer {
    display: none;
  }
  break-inside: avoid;

  .separator, .exercise-id {
    display: inherit;
  }

  .exercise-id {
    height: auto;
  }

  .answer-letter-wrapper::after {
    content: '' !important;
  }
`;

const step: Step = {
  type: 'exercise' as const,
  task: {
    is_deleted: false,
    type: 'homework' as const
  },
  uid: '1234@4',
  id: 1,
  available_points: '1.0',
  preview: 'Preview content',
  is_completed: false,
  answer_id_order: ['1', '2'],
  answer_id: '1',
  free_response: '',
  last_completed_at: new Date(),
  feedback_html: '',
  correct_answer_id: '',
  correct_answer_feedback_html: '',
  external_url: '',
  can_be_updated: false,
  is_feedback_available: true,
  exercise_id: '1',
  attempts_remaining: 0,
  attempt_number: 1,
  incorrectAnswerId: 0
};

const exercises = data as ExerciseData[];

export const Default = () =>
  exercises.map(((exercise, i) => {
    return (
      <ExerciseWrapper>
        <Exercise
          canAnswer={true}
          needsSaved={true}
          hasMultipleAttempts={false}
          onAnswerChange={() => undefined}
          onAnswerSave={() => undefined}
          onNextStep={() => undefined}
          canUpdateCurrentStep={true}
          attempt_number={0}
          apiIsPending={false}
          available_points={'1.0'}
          exercise={exercise}
          step={step}
          questionNumber={i + 1}
          numberOfQuestions={exercises.length} />
      </ExerciseWrapper>
    )
  }));
