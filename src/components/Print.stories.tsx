import { ExerciseAnswerState, ExerciseData, ExerciseQueryData, ExerciseQuestionData, StepWithData } from '../../src/types';
import data from '../../exercises.json';
import styled from 'styled-components';
import { Exercise } from './Exercise';

const ExerciseWrapper = styled.div`
  break-inside: avoid;

  .step-card-body {
    padding: 24px 48px !important;
  }

  .step-card-footer {
    display: none;
  }

  .separator, .exercise-id {
    display: inherit;
  }

  .exercise-id {
    height: auto;
  }

  .exercise-step {
    min-height: auto;
  }

  .question-feedback {
    box-shadow: none !important;
  }

  .openstax-answer {
    break-inside: avoid;

    .answer-letter-wrapper::after {
      content: '' !important;
    }
  }
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

const exercises = (data as ExerciseQueryData).exercises as ExerciseData[];

const formatAnswerData = (questions: ExerciseQuestionData[]) => questions.map((q) => (
    {id: q.id, correct_answer_id: (q.answers.find((a) => a.correctness === '1.0')?.id || '')}));

export const Default = () => (
  <>
  {data.title && <h2>Exercises for {data.title}</h2>}
  {exercises.map(((exercise, i) => {
    const exerciseAnswers = formatAnswerData(exercise.questions).reduce((acc, answer) => {
      const {id, correct_answer_id} = answer;
      return {...acc, [id]: {correct_answer_id, is_completed: true, attempts_remaining: 0}};
    }, {} as {[key: string]: ExerciseAnswerState});

    return (
      <ExerciseWrapper>
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
          questionNumber={i + 1}
          numberOfQuestions={exercises.length} 
          show_all_feedback={true} />
      </ExerciseWrapper>
    )
  }))}
  </>);
