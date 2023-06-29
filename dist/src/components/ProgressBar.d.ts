export declare const StyledItem: import("styled-components").StyledComponent<"button", any, {
    variant: ProgressBarItemVariant;
    isActive: boolean;
}, never>;
export interface ProgressBarProps<S extends {
    variant: ProgressBarItemVariant;
}> {
    steps: S[];
    activeIndex: number | null;
    goToStep: (index: number, step: S) => void;
}
export interface ProgressBarItemProps<S> {
    index: number;
    isActive: boolean;
    step: S;
    goToStep: (index: number, step: S) => void;
}
export declare type ProgressBarItemVariant = 'isCorrect' | 'isIncorrect' | 'isStatus' | null;
export declare const ProgressBarItem: <S extends {
    variant: ProgressBarItemVariant;
}>({ index, isActive, step, goToStep }: ProgressBarItemProps<S>) => JSX.Element;
export declare const ProgressBar: <S extends {
    variant: ProgressBarItemVariant;
}>({ steps, activeIndex, goToStep }: ProgressBarProps<S>) => JSX.Element;
