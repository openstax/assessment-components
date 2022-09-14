import { ExerciseData, ExerciseQueryData, ID, Step } from '../../src/types';
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

export const Default = () => (
  <>
  {data.title && <h2>Exercises for {data.title}</h2>}
  {exercises.map(((exercise, i) => {
    const correctAnswers: {id: ID, correct_answer_id?: ID}[] = exercise.questions.map(
      (q) => ({id: q.id, correct_answer_id: (q.answers.find((a) => a.correctness === '1.0')?.id)})
    );
    const exerciseAnswers = correctAnswers.reduce((acc, a) => {
      let {id, correct_answer_id} = a;
      return {...acc, [id]: {correct_answer_id}};
  }, {});
    // figure out different feedback styles

    return (
      <ExerciseWrapper>
        <Exercise
          displaySolution={true}
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
          exerciseAnswers={exerciseAnswers}
          questionNumber={i + 1}
          numberOfQuestions={exercises.length} 
          show_all_feedback={true} />
      </ExerciseWrapper>
    )
  }))}
  </>);
