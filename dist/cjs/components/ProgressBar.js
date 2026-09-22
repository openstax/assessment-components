"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = exports.ProgressBarItem = exports.StyledItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const theme_1 = require("../theme");
const flag_1 = __importDefault(require("../assets/flag"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faCheck_1 = require("@fortawesome/free-solid-svg-icons/faCheck");
const faXmark_1 = require("@fortawesome/free-solid-svg-icons/faXmark");
const faCircle_1 = require("@fortawesome/free-solid-svg-icons/faCircle");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const ProgressBarWrapper = styled_components_1.default.nav `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${theme_1.breakpoints.mobile `
    padding: 1.6rem 0.8rem;
  `}
`;
const StyledItemWrapper = styled_components_1.default.span `
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
            return (0, styled_components_1.css) `
        color: ${theme_1.colors.palette.white};
        background-color: ${theme_1.colors.palette.neutralDarker};
      `;
        case 'isCorrect':
            return (0, styled_components_1.css) `
        color: ${theme_1.colors.answer.correct};
        background-color: #E8F4D8;
      `;
        case 'isIncorrect':
            return (0, styled_components_1.css) `
        color: ${theme_1.colors.answer.incorrect};
        background-color: #F8E8EA;
      `;
        case 'isIncomplete':
            return (0, styled_components_1.css) `
        background-color: ${theme_1.colors.palette.neutralBright};
      `;
        case 'isPartialCredit':
            return (0, styled_components_1.css) `
        color: ${theme_1.colors.answer.partialCredit};
        background-color: ${theme_1.colors.palette.yellow};
      `;
        default:
            return (0, styled_components_1.css) `
        background-color: ${theme_1.colors.palette.neutralLight};
      `;
    }
};
const shadowCss = 'box-shadow: 0px 1px 4px 0px #00000066;';
exports.StyledItem = styled_components_1.default.button `
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
  color: ${theme_1.colors.palette.neutralDarker};
  ${props => props.isActive ? (0, styled_components_1.css) `
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
const StyledFontAwesomeIcon = (0, styled_components_1.default)(react_fontawesome_1.FontAwesomeIcon) `
  color: ${props => props.color};
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  font-size: 1.2rem;
  border-radius: 50%;
`;
const StyledFeedbackNotification = styled_components_1.default.button `
  background-color: ${theme_1.colors.palette.mediumBlue};
  border: 0.2rem solid ${theme_1.colors.palette.white};
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
            icon: faCheck_1.faCheck,
            background: theme_1.colors.answer.correct,
            color: theme_1.colors.palette.white,
            padding: defaultPadding,
            label: 'Correct',
        },
        isIncorrect: {
            icon: faXmark_1.faXmark,
            background: theme_1.colors.answer.incorrect,
            color: theme_1.colors.palette.white,
            padding: defaultPadding,
            label: 'Incorrect',
        },
        isIncomplete: {
            icon: free_solid_svg_icons_1.faQuestion,
            background: theme_1.colors.answer.neutral,
            color: theme_1.colors.palette.white,
            padding: defaultPadding,
            label: 'Incomplete'
        },
        isPartialCredit: {
            icon: free_solid_svg_icons_1.faP,
            background: theme_1.colors.answer.partialCredit,
            color: theme_1.colors.palette.white,
            padding: '0.1rem 0.1rem 0.1rem 0.2rem',
            label: 'Partial credit'
        },
        null: {
            icon: faCircle_1.faCircle,
            background: theme_1.colors.answer.neutral,
            color: theme_1.colors.answer.neutralDark,
            padding: defaultPadding,
            label: 'Not yet graded'
        }
    }[String(variant)];
    if (!variantData)
        return null;
    return (0, jsx_runtime_1.jsx)(StyledFontAwesomeIcon, { icon: variantData.icon, color: variantData.color, style: { background: variantData.background, padding: variantData.padding }, height: '16px', width: '16px', "aria-label": variantData.label, "aria-hidden": undefined });
};
const ProgressBarItem = ({ index, isActive, step, goToStep }) => (0, jsx_runtime_1.jsxs)(StyledItemWrapper, { children: [step.hasFeedback && step.variant && step.variant !== 'isStatus'
            ? (0, jsx_runtime_1.jsx)(StyledFeedbackNotification, { isActive: isActive, "aria-label": `Question ${index + 1} - Feedback` })
            : null, (0, jsx_runtime_1.jsx)(exports.StyledItem, { variant: step.variant, isActive: isActive, onClick: () => goToStep(index, step), "aria-current": isActive ? 'location' : 'false', "aria-label": step.variant === 'isStatus' ? 'Assignment status' : `Question ${index + 1}`, children: step.variant === 'isStatus' ? (0, jsx_runtime_1.jsx)(flag_1.default, {}) : index + 1 }), (0, jsx_runtime_1.jsx)(ItemIcon, { variant: step.variant })] });
exports.ProgressBarItem = ProgressBarItem;
const ProgressBar = ({ steps, activeIndex, goToStep }) => (0, jsx_runtime_1.jsx)(ProgressBarWrapper, { "aria-label": "Breadcrumbs", children: steps.map((step, index) => (0, jsx_runtime_1.jsx)(exports.ProgressBarItem, { index: index, isActive: index === activeIndex, step: step, goToStep: goToStep }, index)) });
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map