import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled, { createGlobalStyle } from "styled-components";
import { InnerStepCard } from "./Card";
import Button from "./Button";
import { colors } from '../theme';
const GlobalStyle = createGlobalStyle `
  :root {
    --content-text-scale: 1;
  }
`;
const CompletionStatusCard = styled(InnerStepCard) `
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
const CompletionHeader = styled.h2 `
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`;
const ButtonGroup = styled.div `
  display: flex;
  margin: 0;
  gap: 1rem;

  button {
    height: 48px;
  }
`;
const ScoreGroup = styled.div `
  display: flex;
  margin: 0;
  gap: 1rem;
`;
const RetryResumeButton = styled(Button) `
  background-color: ${colors.palette.white};
  color: ${colors.palette.black};
  border: 1px solid ${colors.palette.pale};
  font-weight: normal;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.palette.neutralBright} !important;
    color: ${colors.palette.black} !important;
    border: 1px solid ${colors.palette.pale} !important;
  }

  &:active {
    background-color: ${colors.palette.neutralLight} !important;
    color: ${colors.palette.black} !important;
    border: 1px solid ${colors.palette.pale} !important;
  }
`;
export const CompletionStatus = styled(({ numberOfQuestions, numberCompleted, handleContinue, handleNext, className, score, handleRetry, isRetrying, handleEditResponses, }) => {
    var _a, _b;
    const allCompleted = numberOfQuestions === numberCompleted;
    const someCompleted = numberCompleted > 0;
    if (handleEditResponses) {
        return (_jsxs(_Fragment, { children: [_jsx(GlobalStyle, {}), _jsxs(CompletionStatusCard, { className: className, children: [_jsx(CompletionHeader, { children: allCompleted
                                ? 'You are done.'
                                : (someCompleted ? 'Quiz is partially complete.' : 'No questions have been answered.') }), _jsx("p", { children: allCompleted
                                ? 'Your ungraded responses can be edited until they have been graded.'
                                : (someCompleted
                                    ? `You've completed ${numberCompleted} of ${numberOfQuestions} questions.`
                                    : 'Begin working on the quiz.') }), _jsxs(ButtonGroup, { children: [allCompleted ? (_jsx(RetryResumeButton, { "data-test-id": "edit-responses-btn", onClick: handleEditResponses, children: "Edit responses" })) : someCompleted ? (_jsx(RetryResumeButton, { "data-test-id": "resume-btn", onClick: handleContinue, children: "Continue" })) : null, allCompleted && handleRetry ? (_jsx(RetryResumeButton, { "data-test-id": "retry-btn", onClick: handleRetry, children: "Retry Quiz" })) : null, _jsx(Button, { "data-test-id": "next-btn", onClick: handleNext, children: "Next" })] })] })] }));
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
    return (_jsxs(_Fragment, { children: [_jsx(GlobalStyle, {}), _jsxs(CompletionStatusCard, { className: className, children: [_jsx(CompletionHeader, { children: allCompleted
                            ? 'You are done.'
                            : (someCompleted ? 'Quiz is partially complete.' : 'No questions have been answered.') }), handleRetry ? (_jsxs("div", { children: [_jsx("p", { children: allCompleted ? unlimitedDone : unlimitedCurrent }), _jsx(ScoreGroup, { children: _jsxs("p", { children: [_jsx("b", { children: "Current Score:" }), " ", (_a = score === null || score === void 0 ? void 0 : score.current) !== null && _a !== void 0 ? _a : 'Score unavailable', " | ", _jsx("b", { children: "Saved Score:" }), " ", (_b = score === null || score === void 0 ? void 0 : score.saved) !== null && _b !== void 0 ? _b : 'Score unavailable'] }) })] })) : (_jsx("p", { children: allCompleted
                            ? 'Great job answering all the questions.'
                            : (someCompleted
                                ? `You've completed ${numberCompleted} of ${numberOfQuestions} questions.`
                                : 'Begin working on the quiz.') })), _jsxs(ButtonGroup, { children: [handleRetry ? (_jsx(RetryResumeButton, { "data-test-id": "retry-resume-btn", onClick: onRetryResumeClick, disabled: isRetrying, children: retryOrResume })) : null, _jsx(Button, { "data-test-id": `${buttonText.split(' ')[0].toLowerCase()}-btn`, onClick: onNextContinueClick, children: buttonText })] })] })] }));
}) ``;
//# sourceMappingURL=CompletionStatus.js.map