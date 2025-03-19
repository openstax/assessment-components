import React from "react";
import { ExerciseData, ExerciseQuestionData, StepBase } from "src/types";
import { Exercise } from "./Exercise";

export interface ExercisePreviewProps {
  exercise: ExerciseData;
  selected?: boolean;
  showAllFeedback?: boolean;
  showCorrectAnswer?: boolean;
  overlayChildren?: React.ReactNode;
}

export const ExercisePreview = (
  {
    exercise,
    selected,
    showAllFeedback = false,
    showCorrectAnswer = false,
    overlayChildren,
  }: ExercisePreviewProps) => {

  const hideAnswerFeedback = (exercise: ExerciseData) => {
    exercise.questions.map(question => 
      question.answers.map(a => {
        a.feedback_html = ''; 
        a.correctness = showCorrectAnswer ? a.correctness : undefined;
      } ));
    return exercise;
  };

  const exercisePreviewProps = (exercise: ExerciseData) => {
    const formatAnswerData = (questions: ExerciseQuestionData[]) => questions.map((q) => (
      { id: q.id, correct_answer_id: (q.answers.find((a) => a.correctness === '1.0')?.id || '') }));

    const questionStateFields = formatAnswerData(exercise.questions).reduce((acc, answer) => {
      const { id, correct_answer_id } = answer;
      return { 
        ...acc, 
        [id]: {
          correct_answer_id,
          is_completed: showCorrectAnswer,
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
      show_all_feedback: showAllFeedback,
    };
  };

  return (
    <Exercise
      exercise={showAllFeedback ? exercise : hideAnswerFeedback(exercise)}
      className={selected ? 'preview-card is-selected' : 'preview-card'}
      previewMode
      overlayChildren={overlayChildren}
      {...exercisePreviewProps(exercise)}
    />
  );
};
