import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { css } from 'styled-components';
import { colors, breakpoints } from '../theme';
import FlagIcon from '../assets/flag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faP, faQuestion } from '@fortawesome/free-solid-svg-icons';
const ProgressBarWrapper = styled.nav `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${breakpoints.mobile `
    padding: 1.6rem 0.8rem;
  `}
`;
const StyledItemWrapper = styled.span `
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;
const handleVariant = (variant) => {
    switch (variant) {
        case 'isStatus':
            return css `
        color: ${colors.palette.white};
        background-color: ${colors.palette.neutralDarker};
      `;
        case 'isCorrect':
            return css `
        color: ${colors.answer.correct};
        background-color: #E8F4D8;
      `;
        case 'isIncorrect':
            return css `
        color: ${colors.answer.incorrect};
        background-color: #F8E8EA;
      `;
        case 'isIncomplete':
            return css `
        background-color: ${colors.palette.neutralBright};
      `;
        case 'isPartialCredit':
            return css `
        color: ${colors.answer.partialCredit};
        background-color: ${colors.palette.yellow};
      `;
        default:
            return css `
        background-color: ${colors.palette.neutralLight};
      `;
    }
};
const shadowCss = 'box-shadow: 0px 1px 4px 0px #00000066;';
export const StyledItem = styled.button `
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
  ${props => props.isActive ? css `
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
const StyledFontAwesomeIcon = styled(FontAwesomeIcon) `
  color: ${props => props.color};
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  font-size: 1.2rem;
  border-radius: 50%;
`;
const StyledFeedbackNotification = styled.button `
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
const ItemIcon = ({ variant }) => {
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
            label: 'Not yet graded'
        }
    }[String(variant)];
    if (!variantData)
        return null;
    return _jsx(StyledFontAwesomeIcon, { icon: variantData.icon, color: variantData.color, style: { background: variantData.background, padding: variantData.padding }, height: '16px', width: '16px', "aria-label": variantData.label, "aria-hidden": undefined });
};
export const ProgressBarItem = ({ index, isActive, step, goToStep }) => _jsxs(StyledItemWrapper, { children: [step.hasFeedback && step.variant && step.variant !== 'isStatus'
            ? _jsx(StyledFeedbackNotification, { isActive: isActive, "aria-label": `Question ${index + 1} - Feedback` })
            : null, _jsx(StyledItem, { variant: step.variant, isActive: isActive, onClick: () => goToStep(index, step), "aria-current": isActive ? 'location' : 'false', "aria-label": step.variant === 'isStatus' ? 'Assignment status' : `Question ${index + 1}`, children: step.variant === 'isStatus' ? _jsx(FlagIcon, {}) : index + 1 }), _jsx(ItemIcon, { variant: step.variant })] });
export const ProgressBar = ({ steps, activeIndex, goToStep }) => _jsx(ProgressBarWrapper, { "aria-label": "Breadcrumbs", children: steps.map((step, index) => _jsx(ProgressBarItem, { index: index, isActive: index === activeIndex, step: step, goToStep: goToStep }, index)) });
//# sourceMappingURL=ProgressBar.js.map