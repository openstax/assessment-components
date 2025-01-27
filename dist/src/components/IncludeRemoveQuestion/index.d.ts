export interface IncludeRemoveQuestionProps {
    buttonVariant: 'include' | 'remove';
    onIncludeHandler: () => void;
    onRemoveHandler: () => void;
}
export declare const IncludeRemoveQuestion: ({ buttonVariant, onIncludeHandler, onRemoveHandler }: IncludeRemoveQuestionProps) => JSX.Element;
