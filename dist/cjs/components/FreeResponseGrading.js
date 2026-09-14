"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeResponseGrading = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../theme");
const Button_1 = __importDefault(require("./Button"));
const utils_1 = require("../utils");
let instanceCounter = 0;
const GradingContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-left: 1px solid ${theme_1.colors.palette.neutralLighter};
  min-width: 300px;
`;
const FieldGroup = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Label = styled_components_1.default.label `
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${theme_1.colors.palette.neutralDarker};
`;
const ScoreRow = styled_components_1.default.div `
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
`;
const ScoreInput = styled_components_1.default.input `
  width: 6rem;
  padding: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
  border: 1px solid ${theme_1.colors.palette.neutral};
  border-radius: 4px;
  text-align: center;

  &::placeholder {
    color: #6F6F6F;
    text-align: center;
    line-height: normal;
  }

  &:focus {
    outline: none;
    border-color: ${theme_1.colors.palette.blue};
  }

  &:disabled {
    background-color: ${theme_1.colors.palette.neutralLighter};
    cursor: not-allowed;
  }
`;
const CommentTextarea = styled_components_1.default.textarea `
  width: 100%;
  min-height: 12rem;
  padding: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
  font-family: inherit;
  border: 1px solid ${theme_1.colors.palette.neutral};
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${theme_1.colors.palette.blue};
  }

  &:disabled {
    background-color: ${theme_1.colors.palette.neutralLighter};
    cursor: not-allowed;
  }
`;
const ButtonContainer = styled_components_1.default.div `
  display: flex;
`;
const SubmissionInfoText = styled_components_1.default.span `
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralThin};
`;
const FreeResponseGrading = ({ questionId, maxScore, score: initialScore, comment: initialComment, onChange, onSave, disabled = false, gradingTimestamp, }) => {
    const id = (0, react_1.useRef)(null);
    if (id.current === null) {
        id.current = `frg-${instanceCounter++}`;
    }
    const scoreInputId = `${id.current}-score`;
    const commentInputId = `${id.current}-comment`;
    const [score, setScore] = (0, react_1.useState)((initialScore === null || initialScore === void 0 ? void 0 : initialScore.toString()) || '');
    const [comment, setComment] = (0, react_1.useState)(initialComment || '');
    const [hasChanges, setHasChanges] = (0, react_1.useState)(false);
    const [isSaving, setIsSaving] = (0, react_1.useState)(false);
    // Check if initial score and comment exist (meaning it's already been graded)
    const hasExistingGrade = initialScore !== undefined;
    (0, react_1.useEffect)(() => {
        const scoreNum = parseFloat(score);
        const scoreChanged = !isNaN(scoreNum) && scoreNum !== initialScore;
        const commentChanged = comment !== (initialComment || '');
        setHasChanges(scoreChanged || commentChanged);
    }, [score, comment, initialScore, initialComment]);
    (0, react_1.useEffect)(() => {
        setScore((initialScore === null || initialScore === void 0 ? void 0 : initialScore.toString()) || '');
        setComment(initialComment || '');
    }, [initialScore, initialComment]);
    (0, react_1.useEffect)(() => {
        if (onChange && !isNaN(parseFloat(score))) {
            onChange({ score: parseFloat(score), comment });
        }
    }, [score, comment, onChange]);
    const handleScoreChange = (e) => {
        const value = e.target.value;
        setScore(value);
    };
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
    const handleSave = async () => {
        const scoreNum = parseFloat(score);
        if (!isNaN(scoreNum) && scoreNum >= 0 && scoreNum <= maxScore && onSave) {
            setIsSaving(true);
            try {
                await onSave(questionId, { score: scoreNum, max: maxScore, comment });
            }
            finally {
                setIsSaving(false);
            }
        }
    };
    const scoreNum = parseFloat(score);
    const isScoreValid = !isNaN(scoreNum) && scoreNum >= 0 && scoreNum <= maxScore;
    const canSave = hasChanges && isScoreValid && !disabled && !isSaving;
    return ((0, jsx_runtime_1.jsxs)(GradingContainer, { children: [(0, jsx_runtime_1.jsx)(FieldGroup, { children: (0, jsx_runtime_1.jsxs)(ScoreRow, { children: [(0, jsx_runtime_1.jsx)(Label, { htmlFor: scoreInputId, children: "Points" }), (0, jsx_runtime_1.jsx)(ScoreInput, { id: scoreInputId, type: "number", value: score, onChange: handleScoreChange, disabled: disabled || isSaving, min: 0, max: maxScore, step: 1, placeholder: "--", "aria-label": "Score" }), (0, jsx_runtime_1.jsxs)("span", { children: ["out of ", maxScore] })] }) }), (0, jsx_runtime_1.jsxs)(FieldGroup, { children: [(0, jsx_runtime_1.jsx)(Label, { htmlFor: commentInputId, children: "Comment" }), (0, jsx_runtime_1.jsx)(CommentTextarea, { id: commentInputId, value: comment, onChange: handleCommentChange, disabled: disabled || isSaving, placeholder: "Enter feedback for the student...", "aria-label": "Comment" })] }), (0, jsx_runtime_1.jsx)(ButtonContainer, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleSave, disabled: !canSave, children: hasExistingGrade ? 'Update' : 'Save' }) }), gradingTimestamp && ((0, jsx_runtime_1.jsxs)(SubmissionInfoText, { children: ["Last graded on ", (0, utils_1.formatTimestamp)(gradingTimestamp)] }))] }));
};
exports.FreeResponseGrading = FreeResponseGrading;
//# sourceMappingURL=FreeResponseGrading.js.map