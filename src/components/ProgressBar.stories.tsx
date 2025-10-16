import { ProgressBar, ProgressBarItemVariant, ProgressBarProps } from './ProgressBar';

const variants = new Array(8).fill({variant: 'isIncomplete'});
const variantsInProgress: ProgressBarItemVariant[] = ['isIncorrect', 'isCorrect', 'isPartialCredit', 'isIncorrect', 'isIncomplete', 'isPartialCredit', 'isIncomplete', 'isIncomplete', 'isStatus'];

const props: ProgressBarProps<{variant: ProgressBarItemVariant; hasFeedback?: boolean}> = {
  activeIndex: 0,
  goToStep: (index: number, step) => console.log(index, step),
  steps: variantsInProgress.map((variant) => ({variant})),
}

const propsNoGraded: ProgressBarProps<{variant: ProgressBarItemVariant; hasFeedback?: boolean}> = {
  ...props,
  steps: variantsInProgress
    .map(variant => variant === 'isCorrect' || variant === 'isIncorrect' || variant === 'isPartialCredit' ? null : variant)
    .map(variant => ({ variant, hasFeedback: true }))
}

const propsHasFeedback: ProgressBarProps<{variant: ProgressBarItemVariant; hasFeedback?: boolean}> = {
  ...props,
  steps: variantsInProgress.map((variant) => ({variant, hasFeedback: true})),
}

const propsHasPartialFeedback: ProgressBarProps<{variant: ProgressBarItemVariant; hasFeedback?: boolean}> = {
  ...props,
  steps: variantsInProgress.map((variant, index) => ({variant, hasFeedback: index % 2 === 0 ? true : false})),
}

export const Default = () => <ProgressBar {...props} steps={[...variants, {variant: 'isStatus'}]} />;
export const InProgress = () => <ProgressBar {...props} activeIndex={4} />;
export const Review = () => <ProgressBar {...props} activeIndex={2} />;
export const StatusStep = () => <ProgressBar {...props} activeIndex={8} />;
export const InProgressNoGraded = () => <ProgressBar {...propsNoGraded} activeIndex={4} />;
export const InProgressHasFeedback = () => <ProgressBar {...propsHasFeedback} activeIndex={4} />
export const InProgressHasPartialFeedback = () => <ProgressBar {...propsHasPartialFeedback} activeIndex={2} />
