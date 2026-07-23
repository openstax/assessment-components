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
exports.FreeResponseInput = exports.FreeResponseTextArea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../utils");
const styled_components_1 = __importStar(require("styled-components"));
const theme_1 = require("../theme");
const Question_1 = require("./Question");
const Button_1 = __importDefault(require("./Button"));
const StepCardFooter_1 = require("./StepCardFooter");
const FreeResponseGrading_1 = require("./FreeResponseGrading");
const exclamation_circle_1 = __importDefault(require("../assets/exclamation-circle"));
const StyledFreeResponse = styled_components_1.default.div `
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${theme_1.mixins.stepCardPadding()}
    padding-bottom: 1rem;
  }
`;
const StyledQuestionStem = styled_components_1.default.div `
  font-size: calc(2rem * var(--content-text-scale));
  line-height: 1.68em;
  position: relative;
`;
const InfoRow = styled_components_1.default.div `
  margin: 8px 0;
  display: flex;
  justify-content: ${props => props.hasChildren ? 'space-between' : 'flex-end'};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${theme_1.colors.palette.danger};
  }

  div > span {
    font-size: calc(1.4rem * var(--content-text-scale));
    line-height: 16px;

    + span {
      margin-left: 1rem;
    }
  }

  .last-submitted + * {
    margin-top: 0.8rem;
  }

  color: ${theme_1.colors.palette.neutralThin};
`;
exports.FreeResponseTextArea = styled_components_1.default.textarea `
  display: block;
  font-family: inherit;
  font-size: calc(1.8rem * var(--content-text-scale));
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${theme_1.colors.palette.neutral};
  color: ${theme_1.colors.palette.neutralDarker};
`;
exports.FreeResponseTextArea.displayName = 'OSFreeResponseTextArea';
const COLLAPSED_HEIGHT = 16.8; // rem
const ReviewAnswerLabel = styled_components_1.default.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${theme_1.colors.palette.neutralThin};
  margin: 2.5rem 0 1rem 0;
`;
const ReviewAnswerText = styled_components_1.default.div `
  border-left: 16px solid ${theme_1.colors.palette.neutralLighter};
  padding-left: 1.6rem;
  margin: 1rem 0 1rem 1rem;
  max-height: ${({ expanded }) => (expanded ? 'none' : `${COLLAPSED_HEIGHT}rem`)};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.8rem * var(--content-text-scale));
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
const ReviewScoreText = styled_components_1.default.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${theme_1.colors.palette.neutralDarker};
`;
const FeedbackText = styled_components_1.default.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralDarker};
  white-space: pre-wrap;

  .feedback-label {
    color: ${theme_1.colors.palette.neutralDarker};
    font-weight: bold;
  }
`;
const ResponseGradingLayout = styled_components_1.default.div `
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 2.5rem;
`;
const ResponseColumn = styled_components_1.default.div `
  flex: 1;
`;
const UnansweredText = styled_components_1.default.p `
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralThin};
  margin: 0;
`;
const EditableNotice = styled_components_1.default.div `
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #FFF5E0;
  padding-left: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
`;
const CancelButton = (0, styled_components_1.default)(Button_1.default) `
  background-color: ${theme_1.colors.palette.darkGray};

  &:hover:not(:disabled) {
    background-color: ${theme_1.colors.palette.neutral};
  }

  &:active:not(:disabled) {
    background-color: ${theme_1.colors.palette.neutralDark};
  }
`;
const RevertButton = (props) => ((0, jsx_runtime_1.jsx)(CancelButton, { ...props, children: "Cancel" }));
const FreeResponseInput = (props) => {
    const { is_completed, canAnswer, needsSaved, apiIsPending, free_response, onAnswerChange, onAnswerSave, onNextStep, questionNumber, question, wordLimit, score, feedback_html, submissionTimestamp, cancelHandler, previewMode = false, onGradingSave, gradingTimestamp, } = props;
    // Format score for display
    const scoreDisplay = typeof (score === null || score === void 0 ? void 0 : score.raw) === 'number' && typeof (score === null || score === void 0 ? void 0 : score.max) === 'number'
        ? `${score.raw}/${score.max}`
        : undefined;
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const [isOverflowing, setIsOverflowing] = (0, react_1.useState)(false);
    const textRef = (0, react_1.useRef)(null);
    const [originalSubmittedValue, setOriginalSubmittedValue] = (0, react_1.useState)(free_response || '');
    // Derive three render states from QuestionState
    const isUpdateMode = is_completed && canAnswer;
    const isPostReview = is_completed && !canAnswer;
    const editableNotice = !previewMode ? ((0, jsx_runtime_1.jsxs)(EditableNotice, { children: [(0, jsx_runtime_1.jsx)(exclamation_circle_1.default, {}), "You can come back and edit your response until it has been graded."] })) : null;
    // Sync baseline to current free_response whenever there are no unsaved changes
    (0, react_1.useLayoutEffect)(() => {
        if (isUpdateMode && !needsSaved) {
            setOriginalSubmittedValue(free_response || '');
        }
    }, [needsSaved, isUpdateMode, free_response]);
    const textHasChanged = needsSaved && (free_response || '') !== originalSubmittedValue;
    const wordCount = (0, utils_1.countWords)(free_response || '');
    const isOverWordLimit = wordCount > wordLimit;
    // Check if the review answer text is overflowing
    (0, react_1.useLayoutEffect)(() => {
        const checkOverflow = () => {
            if (isPostReview && textRef.current) {
                const isTextOverflowing = !expanded && textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10;
                setIsOverflowing(isTextOverflowing);
            }
        };
        checkOverflow();
        // Re-check on window resize
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [free_response, isPostReview, expanded]);
    const handleChange = (e) => {
        const raw = e.target.value;
        const trimmed = raw.trim();
        let limitedValue = raw;
        if (trimmed) {
            const words = trimmed.split(/\s+/);
            if (words.length > wordLimit) {
                limitedValue = words.slice(0, wordLimit).join(' ');
                e.target.value = limitedValue;
            }
        }
        // Call parent's onAnswerChange with Answer structure
        onAnswerChange({
            id: (0, utils_1.numberfyId)(question.id),
            question_id: (0, utils_1.numberfyId)(question.id),
            type: 'free-response',
            content_html: limitedValue,
            free_response: limitedValue,
            correctness: undefined,
        });
    };
    const [shouldContinue, setShouldContinue] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (shouldContinue && is_completed && !apiIsPending) {
            setShouldContinue(false);
            onNextStep(questionNumber - 1);
        }
    }, [shouldContinue, is_completed, apiIsPending, onNextStep, questionNumber]);
    const handleSave = () => {
        onAnswerSave((0, utils_1.numberfyId)(question.id));
    };
    const handleSubmit = () => {
        onAnswerSave((0, utils_1.numberfyId)(question.id));
        setShouldContinue(true);
    };
    const handleNext = () => {
        onNextStep(questionNumber - 1);
    };
    const handleCancel = (e) => {
        onAnswerChange({
            id: (0, utils_1.numberfyId)(question.id),
            question_id: (0, utils_1.numberfyId)(question.id),
            type: 'free-response',
            content_html: originalSubmittedValue,
            free_response: originalSubmittedValue,
            correctness: undefined,
        });
        cancelHandler(e);
    };
    // Post-review state (read-only with "Your answer" and Next button)
    if (isPostReview) {
        return ((0, jsx_runtime_1.jsxs)(StyledFreeResponse, { "data-test-id": "student-free-response", children: [(0, jsx_runtime_1.jsxs)("div", { className: "step-card-body", children: [(0, jsx_runtime_1.jsx)(StyledQuestionStem, { children: question.stem_html &&
                                (0, jsx_runtime_1.jsx)(Question_1.QuestionHtml, { type: "stem", html: question.stem_html, hidden: false }) }), !previewMode && (0, jsx_runtime_1.jsx)(ReviewAnswerLabel, { children: "Your answer" }), previewMode && onGradingSave ? ((0, jsx_runtime_1.jsxs)(ResponseGradingLayout, { children: [(0, jsx_runtime_1.jsxs)(ResponseColumn, { children: [(0, jsx_runtime_1.jsx)(ReviewAnswerText, { ref: textRef, expanded: expanded, isOverflowing: isOverflowing, children: free_response || '' }), (isOverflowing || expanded) && ((0, jsx_runtime_1.jsx)(ReadMoreButton, { onClick: () => setExpanded(!expanded), children: expanded ? 'read less' : 'read more' })), previewMode && ((0, jsx_runtime_1.jsxs)("div", { style: { marginTop: '1.6rem' }, children: [scoreDisplay && (0, jsx_runtime_1.jsxs)(ReviewScoreText, { role: "status", children: ["Score: ", scoreDisplay] }), feedback_html && ((0, jsx_runtime_1.jsxs)(FeedbackText, { children: [(0, jsx_runtime_1.jsx)("span", { className: "feedback-label", children: "Feedback:" }), ' ', (0, jsx_runtime_1.jsx)(Question_1.QuestionHtml, { type: "stem", html: feedback_html, hidden: false })] }))] }))] }), previewMode &&
                                    (0, jsx_runtime_1.jsx)(FreeResponseGrading_1.FreeResponseGrading, { questionId: question.id, maxScore: (score === null || score === void 0 ? void 0 : score.max) || 1, score: score === null || score === void 0 ? void 0 : score.raw, comment: feedback_html, onSave: onGradingSave, gradingTimestamp: gradingTimestamp })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ReviewAnswerText, { ref: textRef, expanded: expanded, isOverflowing: isOverflowing, children: free_response || '' }), (isOverflowing || expanded) && ((0, jsx_runtime_1.jsx)(ReadMoreButton, { onClick: () => setExpanded(!expanded), children: expanded ? 'read less' : 'read more' })), previewMode && ((0, jsx_runtime_1.jsxs)("div", { style: { marginTop: '1.6rem' }, children: [scoreDisplay && (0, jsx_runtime_1.jsxs)(ReviewScoreText, { role: "status", children: ["Score: ", scoreDisplay] }), feedback_html && ((0, jsx_runtime_1.jsxs)(FeedbackText, { children: [(0, jsx_runtime_1.jsx)("span", { className: "feedback-label", children: "Feedback:" }), ' ', (0, jsx_runtime_1.jsx)(Question_1.QuestionHtml, { type: "stem", html: feedback_html, hidden: false })] }))] }))] }))] }), !previewMode && ((0, jsx_runtime_1.jsx)(StepCardFooter_1.StepCardFooter, { children: (0, jsx_runtime_1.jsxs)("div", { className: 'step-card-footer-inner', children: [(0, jsx_runtime_1.jsxs)("div", { children: [scoreDisplay && (0, jsx_runtime_1.jsxs)(ReviewScoreText, { role: "status", children: ["Score: ", scoreDisplay] }), feedback_html && ((0, jsx_runtime_1.jsxs)(FeedbackText, { children: [(0, jsx_runtime_1.jsx)("span", { className: "feedback-label", children: "Feedback:" }), ' ', (0, jsx_runtime_1.jsx)(Question_1.QuestionHtml, { type: "stem", html: feedback_html, hidden: false })] }))] }), (0, jsx_runtime_1.jsx)("div", { className: "controls", children: (0, jsx_runtime_1.jsx)(Button_1.default, { "data-test-id": "next-btn", onClick: handleNext, children: "Next" }) })] }) }))] }));
    }
    // Update mode (user has submitted and can editing)
    if (isUpdateMode) {
        return ((0, jsx_runtime_1.jsxs)(StyledFreeResponse, { "data-test-id": "student-free-response", children: [(0, jsx_runtime_1.jsxs)("div", { className: "step-card-body", children: [editableNotice, (0, jsx_runtime_1.jsx)(StyledQuestionStem, { children: question.stem_html &&
                                (0, jsx_runtime_1.jsx)(Question_1.QuestionHtml, { type: "stem", html: question.stem_html, hidden: false }) }), (0, jsx_runtime_1.jsx)(exports.FreeResponseTextArea, { value: free_response || '', onChange: handleChange, "data-test-id": "free-response-box", placeholder: "Enter your response...", "aria-label": "question response text box", disabled: previewMode || apiIsPending }), !previewMode && ((0, jsx_runtime_1.jsxs)(InfoRow, { hasChildren: !!submissionTimestamp, children: [submissionTimestamp && (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("span", { className: "last-submitted", children: ["Last submitted on ", (0, utils_1.formatTimestamp)(submissionTimestamp)] }) }), (0, jsx_runtime_1.jsxs)("div", { children: [wordCount >= wordLimit && (0, jsx_runtime_1.jsx)("span", { className: "word-limit-error-info", children: "Word limit reached" }), (0, jsx_runtime_1.jsxs)("span", { children: [" Remaining words: ", wordLimit - wordCount] })] })] }))] }), !previewMode && ((0, jsx_runtime_1.jsx)(StepCardFooter_1.StepCardFooter, { className: "step-card-footer", children: (0, jsx_runtime_1.jsxs)("div", { className: 'step-card-footer-inner', children: [(0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsxs)("div", { className: "controls", children: [(0, jsx_runtime_1.jsx)(RevertButton, { disabled: !textHasChanged || apiIsPending, onClick: handleCancel }), (0, jsx_runtime_1.jsx)(Button_1.default, { "data-test-id": "update-answer-btn", disabled: !textHasChanged || apiIsPending || isOverWordLimit || (free_response || '').trim().length === 0, isWaiting: apiIsPending, waitingText: "Saving...", onClick: handleSave, children: "Update" }), (0, jsx_runtime_1.jsx)(Button_1.default, { "data-test-id": "next-btn", disabled: apiIsPending || textHasChanged, onClick: handleNext, children: "Next" })] })] }) }))] }));
    }
    // Initial state, not submitted yet
    return ((0, jsx_runtime_1.jsxs)(StyledFreeResponse, { "data-test-id": "student-free-response", children: [(0, jsx_runtime_1.jsxs)("div", { className: "step-card-body", children: [editableNotice, (0, jsx_runtime_1.jsx)(StyledQuestionStem, { children: question.stem_html &&
                            (0, jsx_runtime_1.jsx)(Question_1.QuestionHtml, { type: "stem", html: question.stem_html, hidden: false }) }), previewMode ? (onGradingSave ? ((0, jsx_runtime_1.jsxs)(ResponseGradingLayout, { children: [(0, jsx_runtime_1.jsx)(ResponseColumn, { children: (0, jsx_runtime_1.jsx)(UnansweredText, { children: "Unanswered" }) }), (0, jsx_runtime_1.jsx)(FreeResponseGrading_1.FreeResponseGrading, { questionId: question.id, maxScore: (score === null || score === void 0 ? void 0 : score.max) || 1, score: score === null || score === void 0 ? void 0 : score.raw, comment: feedback_html, onSave: onGradingSave, gradingTimestamp: gradingTimestamp })] })) : ((0, jsx_runtime_1.jsx)(UnansweredText, { children: "Unanswered" }))) : ((0, jsx_runtime_1.jsx)(exports.FreeResponseTextArea, { value: free_response || '', onChange: handleChange, "data-test-id": "free-response-box", placeholder: "Enter your response...", "aria-label": "question response text box", disabled: previewMode || apiIsPending })), !previewMode && ((0, jsx_runtime_1.jsxs)(InfoRow, { hasChildren: !!submissionTimestamp, children: [submissionTimestamp && (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("span", { className: "last-submitted", children: ["Last submitted on ", (0, utils_1.formatTimestamp)(submissionTimestamp)] }) }), (0, jsx_runtime_1.jsxs)("div", { children: [wordCount >= wordLimit && (0, jsx_runtime_1.jsx)("span", { className: "word-limit-error-info", children: "Word limit reached" }), (0, jsx_runtime_1.jsxs)("span", { children: [" Remaining words: ", wordLimit - wordCount] })] })] }))] }), !previewMode && ((0, jsx_runtime_1.jsx)(StepCardFooter_1.StepCardFooter, { className: "step-card-footer", children: (0, jsx_runtime_1.jsxs)("div", { className: 'step-card-footer-inner', children: [(0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", { className: "controls", children: (0, jsx_runtime_1.jsx)(Button_1.default, { "data-test-id": "submit-answer-btn", disabled: apiIsPending || shouldContinue || isOverWordLimit || (free_response || '').trim().length === 0, isWaiting: apiIsPending || shouldContinue, waitingText: "Saving...", onClick: handleSubmit, children: "Submit" }) })] }) }))] }));
};
exports.FreeResponseInput = FreeResponseInput;
exports.FreeResponseInput.displayName = 'OSFreeResponse';
//# sourceMappingURL=FreeResponseInput.js.map