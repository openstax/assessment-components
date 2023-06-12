export interface CompletionStatusProps {
    numberOfQuestions: number;
    numberCompleted: number;
    handleClick: () => void;
}
export declare const CompletionStatus: ({ numberOfQuestions, numberCompleted, handleClick }: CompletionStatusProps) => JSX.Element;
