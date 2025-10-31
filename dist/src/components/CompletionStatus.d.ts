export interface CompletionStatusProps {
    numberOfQuestions: number;
    numberCompleted: number;
    handleContinue: () => void;
    handleNext: () => void;
    className?: string;
    scoreSoFar?: string;
    savedScore?: string;
    handleRetry?: () => void;
}
export declare const CompletionStatus: import("styled-components").StyledComponent<({ numberOfQuestions, numberCompleted, handleContinue, handleNext, className, scoreSoFar, savedScore, handleRetry }: CompletionStatusProps) => JSX.Element, any, {}, never>;
