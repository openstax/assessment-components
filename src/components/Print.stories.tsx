import { ExerciseAnswerState, ExerciseData, ExerciseQueryData, ExerciseQuestionData, StepBase } from '../../src/types';
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

const exercises = (data as ExerciseQueryData).exercises as ExerciseData[];

const formatAnswerData = (questions: ExerciseQuestionData[]) => questions.map((q) => (
    {id: q.id, correct_answer_id: (q.answers.find((a) => a.correctness === '1.0')?.id || '')}));

export const Default = () => (
  <>
  {data.title && <h2>Exercises for {data.title}</h2>}
  {exercises.map(((exercise, i) => {

  const step: StepBase = {
    id: 1,
    uid: exercise.uid,
    available_points: '1.0',
  };

  const questionStateFields = {
    available_points: '1.0',
    is_completed: true,
    answer_id: '1',
    free_response: 'Free response',
    feedback_html: 'Feedback',
    correct_answer_id: '1',
    correct_answer_feedback_html: 'Feedback for the correct answer',
    attempts_remaining: 0,
    attempt_number: 1,
    incorrectAnswerId: 0
  }
    const questionStates = formatAnswerData(exercise.questions).reduce((acc, answer) => {
      const {id, correct_answer_id} = answer;
      return {...acc, [id]: {...questionStateFields, correct_answer_id}};
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
          questionStates={questionStates} />
      </ExerciseWrapper>
    )
  }))}
  </>);
