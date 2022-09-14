import styled, { css } from 'styled-components';
import { colors, breakpoints } from '../theme';

const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 3.2rem;
  ${breakpoints.mobile`
    margin: 1rem;
  `}
`;

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

const handleVariant = (variant: ProgressBarItemVariant, isActive: boolean) => {
  switch (variant) {
    case 'isCorrect':
      return css`
        color: ${colors.palette.white};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${colors.palette.darkGreen};
        box-shadow: ${isActive ? '0 0 6px rgba(0, 0, 0, 0.4)' : 'none'};
      `;
    case 'isIncorrect':
      return css`
        color: ${colors.palette.white};
        background-color: ${colors.palette.lightRed};
        border-color: ${colors.palette.darkRed};
        box-shadow: ${isActive ? '0 0 6px rgba(0, 0, 0, 0.4)' : 'none'};
      `;
    default:
      return css`
        color: ${colors.palette.darkGray};
        background-color: ${isActive ? colors.palette.white : colors.palette.neutralLight};
        border-color: ${isActive ? colors.palette.darkGray : colors.palette.neutralLight};
        box-shadow: ${isActive ? '0 0 6px rgba(0, 0, 0, 0.4)' : 'none'};
      `;
  }
};

export const StyledItem = styled.button<{ variant: ProgressBarItemVariant, isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  margin: 0 0.3rem;
  font-weight: bold;
  cursor: pointer;
  ${props => handleVariant(props.variant, props.isActive)}
`;

export interface ProgressBarProps {
  steps: {variant: ProgressBarItemVariant}[];
  activeIndex: number | null;
  goToStep: <T>(index: number, step: T) => void;
}

export interface ProgressBarItemProps {
  index: number;
  isActive: boolean;
  goToStep: (index: number, step: Step) => void;
  step: Step;
}

export type ProgressBarItemVariant = 'isCorrect' | 'isIncorrect' | null;

interface Step {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  variant: ProgressBarItemVariant;
}

export const ProgressBarItem = ({index, isActive, step, goToStep}: ProgressBarItemProps  ) =>
  <StyledItemWrapper>
    <StyledItem variant={step.variant} isActive={isActive} onClick={() => goToStep(index, step)}>{index + 1}</StyledItem>
  </StyledItemWrapper>;

const ProgressBar = ({ steps, activeIndex, goToStep }: ProgressBarProps) => <ProgressBarWrapper>
  {steps.map((step, index) => <ProgressBarItem
    key={index}
    index={index}
    isActive={index === activeIndex}
    step={step}
    goToStep={goToStep}
  />)}
</ProgressBarWrapper>;

export default ProgressBar;