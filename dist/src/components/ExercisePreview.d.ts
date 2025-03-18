import React from "react";
import { ExerciseData, ID, QuestionState } from "src/types";
export interface ExercisePreviewProps {
    exercise: ExerciseData;
    selected?: boolean;
    questionStates?: {
        [key: ID]: QuestionState;
    };
    showAllFeedback?: boolean;
    overlayChildren?: React.ReactNode;
}
export declare const ExercisePreview: ({ exercise, selected, showAllFeedback, questionStates, overlayChildren, }: ExercisePreviewProps) => JSX.Element;
