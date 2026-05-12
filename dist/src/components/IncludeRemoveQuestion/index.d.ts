export interface IncludeRemoveQuestionProps {
    buttonVariant: 'include' | 'remove';
    onIncludeHandler: () => void;
    onRemoveHandler: () => void;
    onClickDetails?: () => void;
}
export declare const IncludeRemoveQuestion: ({ buttonVariant, onIncludeHandler, onRemoveHandler, onClickDetails }: IncludeRemoveQuestionProps) => JSX.Element;
