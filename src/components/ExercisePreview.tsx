import React from "react";
import { ExerciseData, ExerciseQuestionData, ID, QuestionState, StepBase } from "src/types";
import { Exercise } from "./Exercise";

export interface ExercisePreviewProps {
  exercise: ExerciseData;
  selected: boolean;
  questionStates?: { [key: ID]: QuestionState };
  showAllFeedback?: boolean;
  overlayChildren?: React.ReactNode;
}

export const ExercisePreview = (
  {
    exercise,
    selected,
    showAllFeedback = false,
    questionStates,
    overlayChildren,
  }: ExercisePreviewProps) => {

  const exercisePreviewProps = (exercise: ExerciseData) => {
    const formatAnswerData = (questions: ExerciseQuestionData[]) => questions.map((q) => (
      { id: q.id, correct_answer_id: (q.answers.find((a) => a.correctness === '1.0')?.id || '') }));

    const questionStateFields = formatAnswerData(exercise.questions).reduce((acc, answer) => {
      const { id, correct_answer_id } = answer;
      const questionValues = questionStates && questionStates[id];
      return { 
        ...acc, 
        [id]: { 
          ...questionValues, 
          correct_answer_id: showAllFeedback ? correct_answer_id : '',
          free_response: showAllFeedback ? questionValues?.free_response : '',
        } 
      };
    }, {});

    const step: StepBase = {
      id: 1,
      uid: exercise.uid,
      available_points: '1.0',
    };

    return {
      canAnswer: true,
      needsSaved: true,
      hasMultipleAttempts: false,
      onAnswerChange: () => undefined,
      onAnswerSave: () => undefined,
      onNextStep: () => undefined,
      apiIsPending: false,
      canUpdateCurrentStep: false,
      step: step,
      questionNumber: exercise.number as number,
      numberOfQuestions: exercise.questions.length,
      questionStates: questionStateFields,
    };
  };

  return (
    <Exercise
      exercise={exercise}
      className={selected ? 'preview-card is-selected' : 'preview-card'}
      previewMode
      overlayChildren={overlayChildren}
      {...exercisePreviewProps(exercise)}
    />
  );
};
