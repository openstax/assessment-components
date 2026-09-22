"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseQuestion = exports.NextButton = exports.SaveButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const utils_1 = require("../utils");
const Button_1 = __importDefault(require("./Button"));
const Content_1 = require("./Content");
const Question_1 = require("./Question");
const StepCardFooter_1 = require("./StepCardFooter");
const FreeResponseReview_1 = require("./FreeResponseReview/FreeResponseReview");
const AttemptsRemaining = ({ count }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [count, " attempt", count === 1 ? '' : 's', " left"] }));
};
const UnlimitedAttempts = () => {
    return ((0, jsx_runtime_1.jsx)("div", { children: "Unlimited quiz attempts left" }));
};
const PublishedComments = ({ published_comments }) => {
    if (!published_comments) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Feedback:" }), " ", published_comments] }));
};
const SaveButton = (props) => ((0, jsx_runtime_1.jsx)(Button_1.default, { ...props, waitingText: "Saving\u2026", isWaiting: props.isWaiting, "data-test-id": "submit-answer-btn", children: props.willContinue
        ? 'Submit & continue'
        : (props.attempt_number == 0 ? 'Submit' : 'Re-submit') }));
exports.SaveButton = SaveButton;
const NextButton = (props) => {
    return ((0, jsx_runtime_1.jsx)(Button_1.default, { ...props, "data-test-id": "continue-btn", children: props.canUpdateCurrentStep ? 'Continue' : 'Next' }));
};
exports.NextButton = NextButton;
exports.ExerciseQuestion = react_1.default.forwardRef((props, ref) => {
    const { question, task, answer_id_order, onAnswerChange, feedback_html, correct_answer_feedback_html, is_completed, correct_answer_id, incorrectAnswerId, choicesEnabled, questionNumber, answer_id, hasMultipleAttempts, hasUnlimitedAttempts, attempts_remaining, published_comments, detailedSolution, canAnswer, needsSaved, attempt_number, apiIsPending, onAnswerSave, onNextStep, canUpdateCurrentStep, displaySolution, available_points, free_response, labelAnswers, show_all_feedback, tableFeedbackEnabled, hasFeedback, previewMode } = props;
    const [shouldContinue, setShouldContinue] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        if (shouldContinue && is_completed) {
            onNextStep(questionNumber - 1);
            setShouldContinue(false);
        }
    }, [onNextStep, questionNumber, shouldContinue, is_completed]);
    return ((0, jsx_runtime_1.jsxs)("div", { "data-test-id": "student-exercise-question", children: [(0, jsx_runtime_1.jsx)(Question_1.Question, { ref: ref, task: task, question: question, answerIdOrder: answer_id_order, choicesEnabled: choicesEnabled, answer_id: answer_id, questionNumber: questionNumber, onChange: onAnswerChange, feedback_html: feedback_html, correct_answer_feedback_html: correct_answer_feedback_html, correct_answer_id: is_completed ? correct_answer_id : null, incorrectAnswerId: incorrectAnswerId, className: "step-card-body", hideAnswers: false, displayFormats: false, displaySolution: displaySolution, labelAnswers: labelAnswers, show_all_feedback: show_all_feedback, tableFeedbackEnabled: tableFeedbackEnabled, previewMode: previewMode, children: (0, jsx_runtime_1.jsx)(FreeResponseReview_1.FreeResponseReview, { free_response: free_response, previewMode: previewMode }) }), (previewMode && detailedSolution) || !previewMode ?
                (0, jsx_runtime_1.jsx)(StepCardFooter_1.StepCardFooter, { className: "step-card-footer", children: (0, jsx_runtime_1.jsxs)("div", { className: "step-card-footer-inner", children: [(0, jsx_runtime_1.jsxs)("div", { className: "points", role: "status", children: [available_points ? (0, jsx_runtime_1.jsxs)("strong", { children: ["Points: ", available_points] }) : null, (0, jsx_runtime_1.jsxs)("span", { className: "attempts-left", children: [hasMultipleAttempts &&
                                                attempts_remaining > 0 &&
                                                (0, jsx_runtime_1.jsx)(AttemptsRemaining, { count: attempts_remaining }), hasUnlimitedAttempts ? (0, jsx_runtime_1.jsx)(UnlimitedAttempts, {}) : null] }), (0, jsx_runtime_1.jsx)(PublishedComments, { published_comments: published_comments }), detailedSolution && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Detailed solution:" }), " ", (0, jsx_runtime_1.jsx)(Content_1.Content, { html: detailedSolution })] }))] }), (0, jsx_runtime_1.jsx)("div", { className: "controls", children: (canAnswer && needsSaved) || shouldContinue ?
                                    (0, jsx_runtime_1.jsx)(exports.SaveButton, { disabled: apiIsPending || !answer_id || shouldContinue, isWaiting: apiIsPending || shouldContinue, attempt_number: attempt_number, onClick: () => {
                                            onAnswerSave((0, utils_1.numberfyId)(question.id));
                                            if (!hasFeedback) {
                                                setShouldContinue(true);
                                            }
                                        }, willContinue: !hasFeedback }) :
                                    (0, jsx_runtime_1.jsx)(exports.NextButton, { onClick: () => onNextStep(questionNumber - 1), canUpdateCurrentStep: canUpdateCurrentStep }) })] }) }) : null] }));
});
//# sourceMappingURL=ExerciseQuestion.js.map