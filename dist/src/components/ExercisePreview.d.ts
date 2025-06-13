import React from "react";
import { ExerciseData, QuestionState } from "src/types";
export interface ExercisePreviewProps {
    exercise: ExerciseData;
    selected?: boolean;
    showAllFeedback?: boolean;
    showCorrectAnswer?: boolean;
    overlayChildren?: React.ReactNode;
    questionStates?: {
        [key: string]: QuestionState;
    };
}
export declare const ExercisePreview: ({ exercise, selected, showAllFeedback, showCorrectAnswer, overlayChildren, questionStates, }: ExercisePreviewProps) => JSX.Element;
