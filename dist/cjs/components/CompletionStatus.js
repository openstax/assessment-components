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
exports.CompletionStatus = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const Card_1 = require("./Card");
const Button_1 = __importDefault(require("./Button"));
const theme_1 = require("../theme");
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  :root {
    --content-text-scale: 1;
  }
`;
const CompletionStatusCard = (0, styled_components_1.default)(Card_1.InnerStepCard) `
  padding: 88px 72px;
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(3rem * var(--content-text-scale));
  display: block;

  button {
    height: 48px;
  }

  p {
    margin: 16px 0 20px 0;
  }
`;
const CompletionHeader = styled_components_1.default.h2 `
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`;
const ButtonGroup = styled_components_1.default.div `
  display: flex;
  margin: 0;
  gap: 1rem;

  button {
    height: 48px;
  }
`;
const ScoreGroup = styled_components_1.default.div `
  display: flex;
  margin: 0;
  gap: 1rem;
`;
const RetryResumeButton = (0, styled_components_1.default)(Button_1.default) `
  background-color: ${theme_1.colors.palette.white};
  color: ${theme_1.colors.palette.black};
  border: 1px solid ${theme_1.colors.palette.pale};
  font-weight: normal;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme_1.colors.palette.neutralBright} !important;
    color: ${theme_1.colors.palette.black} !important;
    border: 1px solid ${theme_1.colors.palette.pale} !important;
  }

  &:active {
    background-color: ${theme_1.colors.palette.neutralLight} !important;
    color: ${theme_1.colors.palette.black} !important;
    border: 1px solid ${theme_1.colors.palette.pale} !important;
  }
`;
exports.CompletionStatus = (0, styled_components_1.default)(({ numberOfQuestions, numberCompleted, handleContinue, handleNext, className, score, handleRetry, isRetrying, handleEditResponses, }) => {
    var _a, _b;
    const allCompleted = numberOfQuestions === numberCompleted;
    const someCompleted = numberCompleted > 0;
    if (handleEditResponses) {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GlobalStyle, {}), (0, jsx_runtime_1.jsxs)(CompletionStatusCard, { className: className, children: [(0, jsx_runtime_1.jsx)(CompletionHeader, { children: allCompleted
                                ? 'You are done.'
                                : (someCompleted ? 'Quiz is partially complete.' : 'No questions have been answered.') }), (0, jsx_runtime_1.jsx)("p", { children: allCompleted
                                ? 'Your ungraded responses can be edited until they have been graded.'
                                : (someCompleted
                                    ? `You've completed ${numberCompleted} of ${numberOfQuestions} questions.`
                                    : 'Begin working on the quiz.') }), (0, jsx_runtime_1.jsxs)(ButtonGroup, { children: [allCompleted ? ((0, jsx_runtime_1.jsx)(RetryResumeButton, { "data-test-id": "edit-responses-btn", onClick: handleEditResponses, children: "Edit responses" })) : someCompleted ? ((0, jsx_runtime_1.jsx)(RetryResumeButton, { "data-test-id": "resume-btn", onClick: handleContinue, children: "Continue" })) : null, allCompleted && handleRetry ? ((0, jsx_runtime_1.jsx)(RetryResumeButton, { "data-test-id": "retry-btn", onClick: handleRetry, children: "Retry Quiz" })) : null, (0, jsx_runtime_1.jsx)(Button_1.default, { "data-test-id": "next-btn", onClick: handleNext, children: "Next" })] })] })] }));
    }
    const buttonText = allCompleted || (numberCompleted === 0 && handleRetry) || (someCompleted && handleRetry) ? 'Next' : (someCompleted ? 'Continue' : 'Start');
    const retryOrResume = allCompleted ? 'Retry Quiz' : 'Resume Quiz';
    const unlimitedDone = "Attempts for this quiz are unlimited. Your highest score will be saved.";
    const unlimitedCurrent = "You are in the middle of a quiz attempt. Attempts for this quiz are unlimited. Your highest score will be saved.";
    // When allCompleted, clicking Retry/Resume should create a new attempt (handleRetry)
    // When not completed, clicking Retry/Resume should resume (handleContinue)
    const onRetryResumeClick = allCompleted
        ? handleRetry
        : handleContinue;
    // if unlimited attempts (handleRetry) is active always show next button
    // if all is completed show next button
    // if not unlimited and incomplete show and handle continue
    const onNextContinueClick = allCompleted || handleRetry
        ? handleNext
        : handleContinue;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GlobalStyle, {}), (0, jsx_runtime_1.jsxs)(CompletionStatusCard, { className: className, children: [(0, jsx_runtime_1.jsx)(CompletionHeader, { children: allCompleted
                            ? 'You are done.'
                            : (someCompleted ? 'Quiz is partially complete.' : 'No questions have been answered.') }), handleRetry ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: allCompleted ? unlimitedDone : unlimitedCurrent }), (0, jsx_runtime_1.jsx)(ScoreGroup, { children: (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("b", { children: "Current Score:" }), " ", (_a = score === null || score === void 0 ? void 0 : score.current) !== null && _a !== void 0 ? _a : 'Score unavailable', " | ", (0, jsx_runtime_1.jsx)("b", { children: "Saved Score:" }), " ", (_b = score === null || score === void 0 ? void 0 : score.saved) !== null && _b !== void 0 ? _b : 'Score unavailable'] }) })] })) : ((0, jsx_runtime_1.jsx)("p", { children: allCompleted
                            ? 'Great job answering all the questions.'
                            : (someCompleted
                                ? `You've completed ${numberCompleted} of ${numberOfQuestions} questions.`
                                : 'Begin working on the quiz.') })), (0, jsx_runtime_1.jsxs)(ButtonGroup, { children: [handleRetry ? ((0, jsx_runtime_1.jsx)(RetryResumeButton, { "data-test-id": "retry-resume-btn", onClick: onRetryResumeClick, disabled: isRetrying, children: retryOrResume })) : null, (0, jsx_runtime_1.jsx)(Button_1.default, { "data-test-id": `${buttonText.split(' ')[0].toLowerCase()}-btn`, onClick: onNextContinueClick, children: buttonText })] })] })] }));
}) ``;
//# sourceMappingURL=CompletionStatus.js.map