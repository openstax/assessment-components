import styled, { css } from 'styled-components';
import { colors, breakpoints } from '../theme';
import FlagIcon from '../assets/flag';

const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${breakpoints.mobile`
    padding: 0;
  `}
`;

const StyledItemWrapper = styled.span`
  display: flex;
  align-items: center;
  margin: 0 1rem 1rem 0;

  &:last-child {
    margin-right: 0;
  }
`;

const handleVariant = (variant: ProgressBarItemVariant, isActive: boolean) => {
  switch (variant) {
    case 'isStatus':
      return css`
        color: ${isActive ? colors.palette.white : colors.palette.darkGray};
        background-color: ${isActive ? colors.palette.darkGray : colors.palette.neutralLight};
        border: none;
        box-shadow: ${isActive ? '0px 0px 2px rgba(0, 0, 0, 0.4), 0px 0px 6px rgba(0, 0, 0, 0.2)' : 'none'};
      `;
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
  width: ${props => props.isActive ? '3.0rem' : '2.4rem'};
  height: ${props => props.isActive ? '3.0rem' : '2.4rem'};
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  margin: ${props => props.isActive ? '0' : '0 0.3rem'};
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  ${props => handleVariant(props.variant, props.isActive)}
`;

export interface ProgressBarProps<S extends {variant: ProgressBarItemVariant}> {
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

export type ProgressBarItemVariant = 'isCorrect' | 'isIncorrect' | 'isStatus' | null;

export const ProgressBarItem = <S extends {variant: ProgressBarItemVariant}>({index, isActive, step, goToStep}: ProgressBarItemProps<S>) =>
  <StyledItemWrapper>
    <StyledItem variant={step.variant} isActive={isActive} onClick={() => goToStep(index, step)}>
      {step.variant === 'isStatus' ? <FlagIcon /> : index + 1}
    </StyledItem>
  </StyledItemWrapper>;

export const ProgressBar = <S extends {variant: ProgressBarItemVariant}>({ steps, activeIndex, goToStep }: ProgressBarProps<S>) => <ProgressBarWrapper>
  {steps.map((step, index) => <ProgressBarItem
    key={index}
    index={index}
    isActive={index === activeIndex}
    step={step}
    goToStep={goToStep}
  />)}
</ProgressBarWrapper>;

