export interface CompletionStatusProps {
    numberOfQuestions: number;
    numberCompleted: number;
    handleClick: () => void;
    className?: string;
    scoreSoFar?: string;
    savedScore?: string;
    handleRetry?: () => void;
}
export declare const CompletionStatus: import("styled-components").StyledComponent<({ numberOfQuestions, numberCompleted, handleClick, className, scoreSoFar, savedScore, handleRetry }: CompletionStatusProps) => JSX.Element, any, {}, never>;
