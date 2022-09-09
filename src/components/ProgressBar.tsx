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

const handleVariant = (variant: ProgressBarItemVariant) => {
  switch (variant) {
    case 'isCorrect':
      return css`
        color: ${colors.palette.white};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${colors.palette.darkGreen};
      `;
    case 'isIncorrect':
      return css`
        color: ${colors.palette.white};
        background-color: ${colors.palette.lightRed};
        border-color: ${colors.palette.darkRed};
      `;
    case 'isActive':
      return css`
        color: ${colors.palette.darkGray};
        background-color: ${colors.palette.white};
        border-color: ${colors.palette.darkGray};
      `
    default:
      return css`
        color: ${colors.palette.darkGray};
        background-color: ${colors.palette.neutralLight};
        border-color: ${colors.palette.neutralLight};
      `;
  }
};

export const StyledItem = styled.button<{ variant: ProgressBarItemVariant }>`
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
  ${props => handleVariant(props.variant)}
`;

export interface ProgressBarProps {
  steps: {variant: ProgressBarItemVariant}[];
  activeIndex: number | null;
  goToStep: (index: number) => void;
}

export interface ProgressBarItemProps {
  index: number;
  variant: ProgressBarItemVariant;
  goToStep: (index: number) => void;
}

export type ProgressBarItemVariant = 'isCorrect' | 'isIncorrect' | 'isActive' | null;

export const ProgressBarItem = ({index, variant, goToStep}: ProgressBarItemProps  ) => (
  <StyledItemWrapper>
    <StyledItem variant={variant} onClick={() => goToStep(index)}>{index + 1}</StyledItem>
  </StyledItemWrapper>
);

const ProgressBar = ({ steps, activeIndex, goToStep }: ProgressBarProps) => <ProgressBarWrapper>
  {steps.map((step, index) => <ProgressBarItem
    key={index}
    index={index}
    variant={index === activeIndex ? 'isActive' : step.variant}
    goToStep={goToStep}
  />)}
</ProgressBarWrapper>;

export default ProgressBar;