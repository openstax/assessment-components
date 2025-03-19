import React from "react";
import { ExerciseData } from "src/types";
export interface ExercisePreviewProps {
    exercise: ExerciseData;
    selected?: boolean;
    showAllFeedback?: boolean;
    showCorrectAnswer?: boolean;
    overlayChildren?: React.ReactNode;
}
export declare const ExercisePreview: ({ exercise, selected, showAllFeedback, showCorrectAnswer, overlayChildren, }: ExercisePreviewProps) => JSX.Element;
