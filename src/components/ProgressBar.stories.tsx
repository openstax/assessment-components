import { ProgressBar, ProgressBarItemVariant, ProgressBarProps } from './ProgressBar';

const variants = new Array(8).fill({variant: 'isIncomplete'});
const variantsInProgress: ProgressBarItemVariant[] = ['isIncorrect', 'isCorrect', 'isIncorrect', 'isIncorrect', 'isIncomplete', 'isIncomplete', 'isIncomplete', 'isIncomplete', 'isStatus'];

const props: ProgressBarProps<{variant: ProgressBarItemVariant}> = {
  activeIndex: 0,
  goToStep: (index: number, step) => console.log(index, step),
  steps: variantsInProgress.map((variant) => ({variant})),
}

const propsNoFeedback: ProgressBarProps<{variant: ProgressBarItemVariant}> = {
  ...props,
  steps: variantsInProgress
    .map(variant => variant === 'isCorrect' || variant === 'isIncorrect' ? null : variant)
    .map(variant => ({ variant }))
}

export const Default = () => <ProgressBar {...props} steps={[...variants, {variant: 'isStatus'}]} />;
export const InProgress = () => <ProgressBar {...props} activeIndex={4} />;
export const Review = () => <ProgressBar {...props} activeIndex={2} />;
export const StatusStep = () => <ProgressBar {...props} activeIndex={8} />;
export const InProgressNoFeedback = () => <ProgressBar {...propsNoFeedback} activeIndex={4} />;
