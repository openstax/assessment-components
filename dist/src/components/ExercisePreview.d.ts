import { ExerciseData } from "src/types";
export interface ExercisePreviewProps {
    exercise: ExerciseData;
    selected: boolean;
    onIncludeHandler: () => void;
    onRemoveHandler: () => void;
    onClickDetails: () => void;
    enableOverlay?: boolean;
}
/**
 * An Exercise version with less interaction with card and grants an Overlay with Include/Remove component
 */
export declare const ExercisePreview: ({ exercise, selected, onIncludeHandler, onRemoveHandler, onClickDetails, enableOverlay, }: ExercisePreviewProps) => JSX.Element;
