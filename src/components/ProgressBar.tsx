import styled, { css } from 'styled-components';
import { colors, breakpoints } from '../theme';

const StyledItemWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &::after {
    content: "";
    display: block;
    height: 0.1rem;
    width: 1rem;
    background-color: ${colors.palette.pale};
  }

  &:last-child {
    &::after {
      content: none;
    }
  }

  ${breakpoints.mobile`
    &::after {
      width: 3.3rem;
    }
  `}
`;

const StyledItem = styled.button<{ variant: ProgressBarItemVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: ${colors.palette.neutralLight};
  border: 1px solid ${colors.palette.neutralLight};
  color: ${colors.palette.darkGray};
  margin: 0 0.3rem;
  font-weight: bold;
  cursor: pointer;

  ${props => props.variant === 'isCorrect' && css`
    color: ${colors.palette.white};
    background-color: rgba(99, 165, 36, 0.6);
    border-color: ${colors.palette.darkGreen};
  `}

  ${props => props.variant === 'isIncorrect' && css`
    color: ${colors.palette.white};
    background-color: ${colors.palette.lightRed};
    border-color: ${colors.palette.darkRed};
  `}

  ${props => props.variant === 'isActive' && css`
    color: ${colors.palette.darkGray};
    background-color: ${colors.palette.white};
    border-color: ${colors.palette.darkGray};
  `}
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 3.2rem;
  ${breakpoints.mobile`
    margin: 1rem;
  `}
`;

interface ProgressBarProps {
  steps: {variant: ProgressBarItemVariant}[];
  activeIndex: number | null;
  goToStep: (index: number) => void;
}

interface ProgressBarItemProps {
  value: number;
  variant: ProgressBarItemVariant;
  goToStep: (index: number) => void;
}

export type ProgressBarItemVariant = 'isCorrect' | 'isIncorrect' | 'isActive' | 'isInactive' | null;

const ProgressBarItem = ({value, variant, goToStep}: ProgressBarItemProps  ) => (
  <StyledItemWrapper>
    <StyledItem variant={variant} onClick={() => goToStep(value - 1)}>{value}</StyledItem>
  </StyledItemWrapper>
);

const ProgressBar = ({ steps, activeIndex, goToStep }: ProgressBarProps) => <ProgressBarWrapper>
  {steps.map((step, index) => <ProgressBarItem
    key={index}
    value={index + 1}
    variant={step.variant || (index === activeIndex ? 'isActive' : 'isInactive')}
    goToStep={goToStep}
  />)}
</ProgressBarWrapper>;

export default ProgressBar;