export interface CompletionStatusProps {
    numberOfQuestions: number;
    numberCompleted: number;
    handleClick: () => void;
    className?: string;
}
export declare const CompletionStatus: import("styled-components").StyledComponent<({ numberOfQuestions, numberCompleted, handleClick, className }: CompletionStatusProps) => JSX.Element, any, {}, never>;
