import React from "react";
import { ExerciseData, QuestionState, ID } from "src/types";
export interface ExercisePreviewProps {
    exercise: ExerciseData;
    selected?: boolean;
    showAllFeedback?: boolean;
    showChosenAnswer?: boolean;
    showCorrectAnswer?: boolean;
    labelAnswers?: boolean;
    overlayChildren?: React.ReactNode;
    questionStates?: {
        [key: ID]: QuestionState;
    };
    showScoring?: boolean;
    rightSideSlot?: React.ReactNode;
}
export declare const ExercisePreview: ({ exercise, selected, showAllFeedback, showChosenAnswer, showCorrectAnswer, labelAnswers, showScoring, overlayChildren, questionStates, rightSideSlot }: ExercisePreviewProps) => JSX.Element;
