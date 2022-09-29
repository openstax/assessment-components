import { ExerciseData, ExerciseQueryData, ExerciseQuestionData, StepBase } from '../../src/types';
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

const firstQuestionNumByExercise = exercises.reduce((acc, ex) => ({
    ...acc,
    [ex.uuid]: acc.questionCounter + 1,
    questionCounter: acc.questionCounter + ex.questions.length
  }), {questionCounter: 0});

// placeholder until exercise data contains correct answer IDs
const formatAnswerData = (questions: ExerciseQuestionData[]) => questions.map((q) => (
    {id: q.id, correct_answer_id: (q.answers.find((a) => a.correctness === '1.0')?.id || '')}));

const questionStateFields = {
  available_points: '1.0',
  is_completed: true,
  answer_id: '1',
  free_response: '',
  feedback_html: '',
  correct_answer_feedback_html: '',
  attempts_remaining: 0,
  attempt_number: 1,
  incorrectAnswerId: 0
}

export const Default = () => (
  <>
    {data.title && <h2>Exercises for {data.title}</h2>}
    {exercises.map(((exercise) => {

      const step: StepBase = {
        id: 1,
        uid: exercise.uid,
        available_points: '1.0',
      };

      const questionStates = formatAnswerData(exercise.questions).reduce((acc, answer) => {
        const {id, correct_answer_id} = answer;
        return {...acc, [id]: {...questionStateFields, correct_answer_id}};
      }, {});

      return (
        <ExerciseWrapper key={exercise.uid}>
          <Exercise
            key={exercise.uid}
            canAnswer={true}
            needsSaved={true}
            hasMultipleAttempts={false}
            onAnswerChange={() => undefined}
            onAnswerSave={() => undefined}
            onNextStep={() => undefined}
            apiIsPending={false}
            canUpdateCurrentStep={false}
            exercise={exercise}
            step={step}
            questionNumber={firstQuestionNumByExercise[exercise.uuid]}
            numberOfQuestions={exercises.length}
            questionStates={questionStates}
            show_all_feedback={true} />
        </ExerciseWrapper>
      )
  }))}
  </>);
