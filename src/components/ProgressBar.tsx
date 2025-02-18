import styled, { css } from 'styled-components';
import { colors, breakpoints } from '../theme';
import FlagIcon from '../assets/flag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

const ProgressBarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${breakpoints.mobile`
    padding: 1.6rem 0.8rem;
  `}
`;

const StyledItemWrapper = styled.span`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;

const handleVariant = (variant: ProgressBarItemVariant) => {
  switch (variant) {
    case 'isStatus':
      return css`
        background-color: ${colors.palette.neutralBright};
      `;
    case 'isCorrect':
      return css`
        color: ${colors.answer.correct};
        background-color: #E8F4D8;
      `;
    case 'isIncorrect':
      return css`
        color: ${colors.answer.incorrect};
        background-color: #F8E8EA;
      `;
    default:
      return css`
        background-color: ${colors.palette.neutralBright};
      `;
  }
};

const shadowCss = 'box-shadow: 0px 1px 4px 0px #00000066;';

export const StyledItem = styled.button<{ variant: ProgressBarItemVariant, isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.isActive ? '4rem' : '3.2rem'};
  height: ${props => props.isActive ? '4rem' : '3.2rem'};
  border: 0;
  border-radius: 50%;
  margin: ${props => props.isActive ? '0' : '0 0.3rem'};
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  color: ${colors.palette.neutralDarker};
  ${props => props.isActive ? css`
    ${shadowCss}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  ` : null}
  ${props => handleVariant(props.variant)}
  &:hover {
    ${shadowCss}
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  background: ${props => props.color};
  color: #fff;
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  padding: 0.1rem;
  font-size: 1.2rem;
  border-radius: 50%;
`;

const ItemIcon = ({ variant }: { variant: ProgressBarItemVariant }) => {
  if (!variant || variant !== 'isCorrect' && variant !== 'isIncorrect') {
    return null;
  }

  const variantData = {
    isCorrect: {
      icon: faCheck,
      color: colors.answer.correct,
      label: 'Correct',
    },
    isIncorrect: {
      icon: faXmark,
      color: colors.answer.incorrect,
      label: 'Incorrect',
    },
  }[variant];

  return <StyledFontAwesomeIcon
    icon={variantData.icon}
    color={variantData.color}
    height='16px'
    width='16px'
    aria-label={variantData.label}
    aria-hidden={undefined}
  />;
}

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
    <StyledItem
      variant={step.variant}
      isActive={isActive}
      onClick={() => goToStep(index, step)}
      aria-current={isActive ? 'location' : 'false'}
      aria-label={step.variant === 'isStatus' ? 'Assignment status' : `Question ${index + 1}` }
    >
      {step.variant === 'isStatus' ? <FlagIcon /> : index + 1}
    </StyledItem>
    <ItemIcon variant={step.variant} />
  </StyledItemWrapper>;

export const ProgressBar = <S extends {variant: ProgressBarItemVariant}>({ steps, activeIndex, goToStep }: ProgressBarProps<S>) =>
  <ProgressBarWrapper aria-label="Breadcrumbs">
    {steps.map((step, index) => <ProgressBarItem
      key={index}
      index={index}
      isActive={index === activeIndex}
      step={step}
      goToStep={goToStep}
    />)}
  </ProgressBarWrapper>;
