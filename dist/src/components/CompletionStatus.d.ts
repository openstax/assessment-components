export interface Score {
    current?: string;
    saved?: string;
}
export interface CompletionStatusProps {
    numberOfQuestions: number;
    numberCompleted: number;
    handleContinue: () => void;
    handleNext: () => void;
    className?: string;
    score?: Score;
    handleRetry?: () => void;
    isRetrying?: boolean;
    handleEditResponses?: () => void;
}
export declare const CompletionStatus: import("styled-components").StyledComponent<({ numberOfQuestions, numberCompleted, handleContinue, handleNext, className, score, handleRetry, isRetrying, handleEditResponses, }: CompletionStatusProps) => JSX.Element, any, {}, never>;
