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
exports.NeedsGradingStudentRow = exports.ChevronIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importStar(require("styled-components"));
const theme_1 = require("../theme");
const FreeResponseGrading_1 = require("./FreeResponseGrading");
const COLLAPSED_HEIGHT = 16.8; // rem
const RowWrapper = styled_components_1.default.div `
  border-bottom: 1px solid ${theme_1.colors.palette.neutralLight};

  &:last-child {
    border-bottom: none;
  }
`;
const RowHeader = styled_components_1.default.button `
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.2rem 1.6rem;
  background: none;
  border: none;
  cursor: pointer;
  gap: 1rem;
  text-align: left;
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralDarker};

  &:hover {
    background-color: ${theme_1.colors.palette.neutralLightest};
  }
`;
const StudentName = styled_components_1.default.span `
  font-weight: 600;
  flex: 1;
`;
const PointsLabel = styled_components_1.default.span `
  font-size: calc(1.3rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralThin};
  white-space: nowrap;

  strong {
    font-weight: 700;
    color: ${theme_1.colors.palette.neutralDarker};
  }
`;
exports.ChevronIcon = styled_components_1.default.span `
  display: inline-block;
  width: 0;
  height: 0;
  flex-shrink: 0;
  ${({ expanded }) => expanded
    ? `
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid ${theme_1.colors.palette.neutralDark};
    `
    : `
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 6px solid ${theme_1.colors.palette.neutralDark};
    `}
`;
const RowBody = styled_components_1.default.div `
  display: flex;
  align-items: flex-start;
  border-top: 1px solid ${theme_1.colors.palette.neutralLighter};
`;
const AnswerColumn = styled_components_1.default.div `
  flex: 1;
  padding: 1.6rem;
  min-width: 0;
`;
const AnswerText = styled_components_1.default.div `
  border-left: 16px solid ${theme_1.colors.palette.neutralLighter};
  padding-left: 1.6rem;
  margin: 0 0 1rem 1rem;
  max-height: ${({ expanded }) => (expanded ? 'none' : `${COLLAPSED_HEIGHT}rem`)};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralDark};
  white-space: pre-wrap;

  ${({ expanded, isOverflowing }) => !expanded && isOverflowing
    ? (0, styled_components_1.css) `
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `
    : ''}
`;
const UnansweredText = styled_components_1.default.p `
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralThin};
  margin: 0 0 1rem 0;
`;
const ReadMoreButton = styled_components_1.default.button `
  display: inline;
  background: none;
  border: none;
  color: ${theme_1.colors.palette.blue};
  padding: 0;
  margin: 0 0 0 1rem;
  cursor: pointer;
  font-size: calc(1.3rem * var(--content-text-scale));
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;
const GradeDisplay = styled_components_1.default.div `
  margin-top: 1.6rem;
`;
const ReviewScoreText = styled_components_1.default.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${theme_1.colors.palette.neutralDarker};
`;
const FeedbackText = styled_components_1.default.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralDarker};
  white-space: pre-wrap;
  margin-top: 0.4rem;

  .feedback-label {
    font-weight: bold;
  }
`;
const NeedsGradingStudentRow = ({ student, freeResponse, questionId, maxScore, score, comment, onSave, disabled, gradingTimestamp, expanded: controlledExpanded, onToggle, }) => {
    const isControlled = controlledExpanded !== undefined;
    const isGraded = score !== undefined;
    const [internalExpanded, setInternalExpanded] = (0, react_1.useState)(!isGraded);
    const [textExpanded, setTextExpanded] = (0, react_1.useState)(false);
    const [isOverflowing, setIsOverflowing] = (0, react_1.useState)(false);
    const textRef = (0, react_1.useRef)(null);
    const expanded = isControlled ? controlledExpanded : internalExpanded;
    (0, react_1.useLayoutEffect)(() => {
        if (textRef.current) {
            const overflows = !textExpanded && textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10; // px
            setIsOverflowing(overflows);
        }
    }, [freeResponse, textExpanded, expanded]);
    const handleToggle = () => {
        if (isControlled) {
            onToggle === null || onToggle === void 0 ? void 0 : onToggle();
        }
        else {
            setInternalExpanded(prev => !prev);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(RowWrapper, { children: [(0, jsx_runtime_1.jsxs)(RowHeader, { type: "button", onClick: handleToggle, "aria-expanded": expanded, children: [(0, jsx_runtime_1.jsx)(exports.ChevronIcon, { expanded: expanded }), (0, jsx_runtime_1.jsx)(StudentName, { children: student.name }), (0, jsx_runtime_1.jsxs)(PointsLabel, { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Points:" }), ' ', isGraded ? score : '--', " out of ", maxScore] })] }), (0, jsx_runtime_1.jsxs)(RowBody, { style: { display: expanded ? undefined : 'none' }, children: [(0, jsx_runtime_1.jsxs)(AnswerColumn, { children: [freeResponse
                                ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(AnswerText, { ref: textRef, expanded: textExpanded, isOverflowing: isOverflowing, children: freeResponse }), (isOverflowing || textExpanded) && ((0, jsx_runtime_1.jsx)(ReadMoreButton, { type: "button", onClick: () => setTextExpanded(prev => !prev), children: textExpanded ? 'read less' : 'read more' }))] }))
                                : (0, jsx_runtime_1.jsx)(UnansweredText, { children: "Unanswered" }), isGraded && ((0, jsx_runtime_1.jsxs)(GradeDisplay, { children: [(0, jsx_runtime_1.jsxs)(ReviewScoreText, { children: ["Score: ", score, "/", maxScore] }), comment && ((0, jsx_runtime_1.jsxs)(FeedbackText, { children: [(0, jsx_runtime_1.jsx)("span", { className: "feedback-label", children: "Comment:" }), ' ', comment] }))] }))] }), (0, jsx_runtime_1.jsx)(FreeResponseGrading_1.FreeResponseGrading, { questionId: questionId, maxScore: maxScore, score: score, comment: comment, onSave: onSave, disabled: disabled, gradingTimestamp: gradingTimestamp })] })] }));
};
exports.NeedsGradingStudentRow = NeedsGradingStudentRow;
//# sourceMappingURL=NeedsGradingStudentRow.js.map