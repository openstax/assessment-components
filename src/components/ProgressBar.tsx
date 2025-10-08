import styled, { css } from 'styled-components';
import { colors, breakpoints } from '../theme';
import FlagIcon from '../assets/flag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faP, faQuestion } from '@fortawesome/free-solid-svg-icons';

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
        color: ${colors.palette.white};
        background-color: ${colors.palette.neutralDarker};
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
    case 'isIncomplete':
      return css`
        background-color: ${colors.palette.neutralBright};
      `;
    case 'isPartialCredit':
      return css`
        color: ${colors.answer.partialCredit};
        background-color: ${colors.palette.yellow};
      `;
    default:
      return css`
        background-color: ${colors.palette.neutralLight};
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
  color: ${props => props.color};
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  font-size: 1.2rem;
  border-radius: 50%;
`;

const StyledFeedbackNotification = styled.button<{ isActive: boolean }>`
  background-color: ${colors.palette.mediumBlue};
  border: 0.2rem solid ${colors.palette.white};
  position: absolute;
  top: 0.1rem;
  left: ${props => props.isActive ? '3.8rem' : '3.2rem'};
  height: 1rem;
  width: 1rem;
  padding: 0.2rem;
  border-radius: 80%;
`;

const ItemIcon = ({ variant }: { variant: ProgressBarItemVariant }) => {
  if (variant === 'isStatus') {
    return null;
  }

  const defaultPadding = '0.1rem';

  const variantData = {
    isCorrect: {
      icon: faCheck,
      background: colors.answer.correct,
      color: colors.palette.white,
      padding: defaultPadding,
      label: 'Correct',
    },
    isIncorrect: {
      icon: faXmark,
      background: colors.answer.incorrect,
      color: colors.palette.white,
      padding: defaultPadding,
      label: 'Incorrect',
    },
    isIncomplete: {
      icon: faQuestion,
      background: colors.answer.neutral,
      color: colors.palette.white,
      padding: defaultPadding,
      label: 'Incomplete'
    },
    isPartialCredit: {
      icon: faP,
      background: colors.answer.partialCredit,
      color: colors.palette.white,
      padding: '0.1rem 0.1rem 0.1rem 0.2rem',
      label: 'Partial credit'
    },
    null: {
      icon: faCircle,
      background: colors.answer.neutral,
      color: colors.answer.neutralDark,
      padding: defaultPadding,
      label: 'No yet graded'
    }
  }[String(variant)];

  if (!variantData) return null;

  return <StyledFontAwesomeIcon
    icon={variantData.icon}
    color={variantData.color}
    style={{ background: variantData.background, padding: variantData.padding }}
    height='16px'
    width='16px'
    aria-label={variantData.label}
    aria-hidden={undefined}
  />;
}

export interface ProgressBarProps<S extends {variant: ProgressBarItemVariant, hasFeedback?: boolean}> {
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

export type ProgressBarItemVariant = 'isCorrect' | 'isIncorrect' | 'isStatus' | 'isIncomplete' | 'isPartialCredit' | null;

export const ProgressBarItem = <S extends {variant: ProgressBarItemVariant; hasFeedback?: boolean}>({index, isActive, step, goToStep}: ProgressBarItemProps<S>) =>
  <StyledItemWrapper>
    {step.hasFeedback && step.variant && step.variant !== 'isStatus' 
      ? <StyledFeedbackNotification isActive={isActive} aria-label={`Question ${index + 1} - Feedback`} /> 
      : null
    }
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

export const ProgressBar = <S extends {variant: ProgressBarItemVariant; hasFeedback?: boolean}>({ steps, activeIndex, goToStep }: ProgressBarProps<S>) =>
  <ProgressBarWrapper aria-label="Breadcrumbs">
    {steps.map((step, index) => <ProgressBarItem
      key={index}
      index={index}
      isActive={index === activeIndex}
      step={step}
      goToStep={goToStep}
    />)}
  </ProgressBarWrapper>;
