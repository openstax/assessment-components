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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseHeaderIcons = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const theme_1 = require("../theme");
const faBookOpen_1 = require("@fortawesome/free-solid-svg-icons/faBookOpen");
const faTriangleExclamation_1 = require("@fortawesome/free-solid-svg-icons/faTriangleExclamation");
const faCircleInfo_1 = require("@fortawesome/free-solid-svg-icons/faCircleInfo");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const TypeExplanations = {
    'multiple-choice': 'Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts.',
    'two-step': 'In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. \
Recalling the answer to a question from memory helps you to retain things longer.',
};
const ItemWrapper = styled_components_1.default.div `
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${theme_1.colors.palette.mediumBlue};}
    .popover { display: flex; }
  }
  ${props => !props.desktop && (0, styled_components_1.css) `
    ${theme_1.breakpoints.desktop `
      display: none;
    `}
    ${theme_1.breakpoints.tablet `
      display: none;
    `}
  `}
  ${props => !props.mobile && theme_1.breakpoints.mobile `
    display: none;
  `}
`;
const InnerWrapper = styled_components_1.default.div `
  position: relative;
  display: flex;
`;
const Popover = styled_components_1.default.div `
  ${theme_1.mixins.popover}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;
const PopoverItem = (props) => ((0, jsx_runtime_1.jsx)(ItemWrapper, { ...props.wrapperProps, mobile: props.mobile, desktop: props.desktop, "aria-label": props.text, children: (0, jsx_runtime_1.jsxs)(InnerWrapper, { children: [props.children, (0, jsx_runtime_1.jsxs)(Popover, { className: "popover right", children: [(0, jsx_runtime_1.jsx)("div", { className: "arrow" }), (0, jsx_runtime_1.jsx)("div", { className: "content", children: props.text })] })] }) }));
const PopoverItemsWrapper = styled_components_1.default.div `
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`;
const StyledFontAwesomeIcon = (0, styled_components_1.default)(react_fontawesome_1.FontAwesomeIcon) `
  color: ${theme_1.colors.palette.darkGray};
  height: 1em;
`;
const ExerciseHeaderIcons = ({ exercise, icons }) => {
    var _a, _b, _c;
    const defaultHeaderLocation = { desktop: true, mobile: false };
    const items = [];
    const isMultipleChoice = exercise.questions.every((q) => q.answers.length > 0);
    let typeExplanation;
    if (isMultipleChoice && exercise.questions.find((q) => q.formats.includes('free-response'))) {
        typeExplanation = TypeExplanations['two-step'];
    }
    else if (isMultipleChoice) {
        typeExplanation = TypeExplanations['multiple-choice'];
    }
    if (icons.topic) {
        items.push((0, jsx_runtime_1.jsx)(PopoverItem, { text: 'View topic in textbook', wrapperProps: { as: 'a', href: icons.topic.url, target: '_blank' }, ...((_a = icons.topic.location) === null || _a === void 0 ? void 0 : _a.header) || defaultHeaderLocation, children: (0, jsx_runtime_1.jsx)(StyledFontAwesomeIcon, { icon: faBookOpen_1.faBookOpen }) }, 'topic'));
    }
    if (icons.errata) {
        items.push((0, jsx_runtime_1.jsx)(PopoverItem, { text: 'Suggest a correction', wrapperProps: { as: 'a', href: icons.errata.url, target: '_blank' }, ...((_b = icons.errata.location) === null || _b === void 0 ? void 0 : _b.header) || defaultHeaderLocation, children: (0, jsx_runtime_1.jsx)(StyledFontAwesomeIcon, { icon: faTriangleExclamation_1.faTriangleExclamation }) }, 'errata'));
    }
    if (icons.info && typeExplanation) {
        items.push((0, jsx_runtime_1.jsx)(PopoverItem, { text: typeExplanation, ...((_c = icons.info.location) === null || _c === void 0 ? void 0 : _c.header) || defaultHeaderLocation, children: (0, jsx_runtime_1.jsx)(StyledFontAwesomeIcon, { icon: faCircleInfo_1.faCircleInfo, height: '16px', width: '16px' }) }, 'type'));
    }
    return ((0, jsx_runtime_1.jsx)(PopoverItemsWrapper, { children: items }));
};
exports.ExerciseHeaderIcons = ExerciseHeaderIcons;
//# sourceMappingURL=ExerciseHeaderIcons.js.map