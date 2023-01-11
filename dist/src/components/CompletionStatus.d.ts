export interface CompletionStatusProps {
    numberOfQuestions: number;
    numberCompleted: number;
    canContinue: boolean;
    handleClick: () => void;
}
export declare const CompletionStatus: ({ numberOfQuestions, numberCompleted, canContinue, handleClick }: CompletionStatusProps) => JSX.Element;
