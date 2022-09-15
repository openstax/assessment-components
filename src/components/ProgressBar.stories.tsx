import ProgressBar, { ProgressBarItemVariant, ProgressBarProps } from './ProgressBar';

const variants: ProgressBarItemVariant[] = ['isIncorrect', 'isCorrect', 'isIncorrect', 'isIncorrect', null, null, null, null];

const props: ProgressBarProps<{variant: ProgressBarItemVariant}> = {
  activeIndex: 0,
  goToStep: (index: number, step) => console.log(index, step),
  steps: variants.map((variant) => ({variant})),
}

export const Default = () => <ProgressBar {...props} steps={props.steps.map((step) => Object.assign({}, step, {variant: null}))} />;
export const InProgress = () => <ProgressBar {...props} activeIndex={4} />;
export const Review = () => <ProgressBar {...props} activeIndex={2} />;
