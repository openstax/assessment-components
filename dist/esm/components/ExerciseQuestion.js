import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { numberfyId } from "../utils";
import Button from "./Button";
import { Content } from "./Content";
import { Question } from './Question';
import { StepCardFooter } from "./StepCardFooter";
import { FreeResponseReview } from "./FreeResponseReview/FreeResponseReview";
const AttemptsRemaining = ({ count }) => {
    return (_jsxs("div", { children: [count, " attempt", count === 1 ? '' : 's', " left"] }));
};
const UnlimitedAttempts = () => {
    return (_jsx("div", { children: "Unlimited quiz attempts left" }));
};
const PublishedComments = ({ published_comments }) => {
    if (!published_comments) {
        return null;
    }
    return (_jsxs("div", { children: [_jsx("strong", { children: "Feedback:" }), " ", published_comments] }));
};
export const SaveButton = (props) => (_jsx(Button, { ...props, waitingText: "Saving\u2026", isWaiting: props.isWaiting, "data-test-id": "submit-answer-btn", children: props.willContinue
        ? 'Submit & continue'
        : (props.attempt_number == 0 ? 'Submit' : 'Re-submit') }));
export const NextButton = (props) => {
    return (_jsx(Button, { ...props, "data-test-id": "continue-btn", children: props.canUpdateCurrentStep ? 'Continue' : 'Next' }));
};
export const ExerciseQuestion = React.forwardRef((props, ref) => {
    const { question, task, answer_id_order, onAnswerChange, feedback_html, correct_answer_feedback_html, is_completed, correct_answer_id, incorrectAnswerId, choicesEnabled, questionNumber, answer_id, hasMultipleAttempts, hasUnlimitedAttempts, attempts_remaining, published_comments, detailedSolution, canAnswer, needsSaved, attempt_number, apiIsPending, onAnswerSave, onNextStep, canUpdateCurrentStep, displaySolution, available_points, free_response, labelAnswers, show_all_feedback, tableFeedbackEnabled, hasFeedback, previewMode } = props;
    const [shouldContinue, setShouldContinue] = React.useState(false);
    React.useEffect(() => {
        if (shouldContinue && is_completed) {
            onNextStep(questionNumber - 1);
            setShouldContinue(false);
        }
    }, [onNextStep, questionNumber, shouldContinue, is_completed]);
    return (_jsxs("div", { "data-test-id": "student-exercise-question", children: [_jsx(Question, { ref: ref, task: task, question: question, answerIdOrder: answer_id_order, choicesEnabled: choicesEnabled, answer_id: answer_id, questionNumber: questionNumber, onChange: onAnswerChange, feedback_html: feedback_html, correct_answer_feedback_html: correct_answer_feedback_html, correct_answer_id: is_completed ? correct_answer_id : null, incorrectAnswerId: incorrectAnswerId, className: "step-card-body", hideAnswers: false, displayFormats: false, displaySolution: displaySolution, labelAnswers: labelAnswers, show_all_feedback: show_all_feedback, tableFeedbackEnabled: tableFeedbackEnabled, previewMode: previewMode, children: _jsx(FreeResponseReview, { free_response: free_response, previewMode: previewMode }) }), (previewMode && detailedSolution) || !previewMode ?
                _jsx(StepCardFooter, { className: "step-card-footer", children: _jsxs("div", { className: "step-card-footer-inner", children: [_jsxs("div", { className: "points", role: "status", children: [available_points ? _jsxs("strong", { children: ["Points: ", available_points] }) : null, _jsxs("span", { className: "attempts-left", children: [hasMultipleAttempts &&
                                                attempts_remaining > 0 &&
                                                _jsx(AttemptsRemaining, { count: attempts_remaining }), hasUnlimitedAttempts ? _jsx(UnlimitedAttempts, {}) : null] }), _jsx(PublishedComments, { published_comments: published_comments }), detailedSolution && (_jsxs("div", { children: [_jsx("strong", { children: "Detailed solution:" }), " ", _jsx(Content, { html: detailedSolution })] }))] }), _jsx("div", { className: "controls", children: (canAnswer && needsSaved) || shouldContinue ?
                                    _jsx(SaveButton, { disabled: apiIsPending || !answer_id || shouldContinue, isWaiting: apiIsPending || shouldContinue, attempt_number: attempt_number, onClick: () => {
                                            onAnswerSave(numberfyId(question.id));
                                            if (!hasFeedback) {
                                                setShouldContinue(true);
                                            }
                                        }, willContinue: !hasFeedback }) :
                                    _jsx(NextButton, { onClick: () => onNextStep(questionNumber - 1), canUpdateCurrentStep: canUpdateCurrentStep }) })] }) }) : null] }));
});
//# sourceMappingURL=ExerciseQuestion.js.map