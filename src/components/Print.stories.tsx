import { ExerciseAnswerState, ExerciseData, ExerciseQueryData, ExerciseQuestionData } from '../../src/types';
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
    {id: q.id, correct_answer_id: (q.answers.find((a) => a.correctness === '1.0')?.id)}));

export const Default = () => (
  <>
  {data.title && <h2>Exercises for {data.title}</h2>}
  {exercises.map(((exercise, i) => {
    const exerciseAnswers = formatAnswerData(exercise.questions).reduce((acc, answer) => {
      const {id, correct_answer_id} = answer;
      return {...acc, [id]: {correct_answer_id, is_completed: true, attempts_remaining: 0}};
    }, {} as {ID: ExerciseAnswerState});

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
          exerciseId={exercise.uid}
          show_all_feedback={true} />
      </ExerciseWrapper>
    )
  }))}
  </>);
