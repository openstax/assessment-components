export declare const StyledItem: import("styled-components").StyledComponent<"button", any, {
    variant: ProgressBarItemVariant;
    isActive: boolean;
}, never>;
export interface ProgressBarProps {
    steps: {
        variant: ProgressBarItemVariant;
    }[];
    activeIndex: number | null;
    goToStep: (index: number) => void;
}
export interface ProgressBarItemProps {
    index: number;
    isActive: boolean;
    variant: ProgressBarItemVariant;
    goToStep: (index: number) => void;
}
export declare type ProgressBarItemVariant = 'isCorrect' | 'isIncorrect' | 'isActive' | null;
export declare const ProgressBarItem: ({ index, isActive, variant, goToStep }: ProgressBarItemProps) => JSX.Element;
declare const ProgressBar: ({ steps, activeIndex, goToStep }: ProgressBarProps) => JSX.Element;
export default ProgressBar;
