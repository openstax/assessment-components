"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils");
const Content_1 = require("./Content");
const Feedback_1 = require("./Feedback");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../theme");
const StyledAnswerIndicator = styled_components_1.default.div `
  color: ${props => props.state ? theme_1.colors.answer.correct : theme_1.colors.answer.incorrect};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`;
// Annoyingly, sometimes the incorrect answer is only signaled via hasCorrectAnswer and isSelected (not isIncorrect)
const AnswerIndicator = ({ hasCorrectAnswer, isCorrect, isIncorrect, isSelected }) => {
    if (!isCorrect && !isIncorrect && (!isSelected || !hasCorrectAnswer)) {
        return null;
    }
    const text = `${isCorrect ? 'Correct' : 'Incorrect'} Answer`;
    return (0, jsx_runtime_1.jsx)(StyledAnswerIndicator, { state: !!isCorrect, children: (0, jsx_runtime_1.jsx)("span", { children: text }) });
};
// labelAnswers defaults to true, must be explicitly false to disable
const AnswerAnswer = (props) => {
    const { answer: { content_html, feedback_html }, contentRenderer, labelAnswers, show_all_feedback, tableFeedbackEnabled, hasCorrectAnswer, isCorrect, isIncorrect, isSelected, } = props;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "answer-answer", role: "status", "aria-live": "polite", "aria-atomic": "true", children: [labelAnswers !== false && (0, jsx_runtime_1.jsx)(AnswerIndicator, { hasCorrectAnswer: hasCorrectAnswer, isCorrect: isCorrect, isIncorrect: isIncorrect, isSelected: isSelected }), (0, jsx_runtime_1.jsx)(Content_1.Content, { className: "answer-content", component: contentRenderer, html: content_html }), show_all_feedback && feedback_html && !tableFeedbackEnabled &&
                (0, jsx_runtime_1.jsx)(Feedback_1.SimpleFeedback, { contentRenderer: contentRenderer, children: feedback_html }, "question-mc-feedback")] }));
};
const TeacherReview = (props) => {
    const { answer, answered_count, isCorrect, contentRenderer, iter, show_all_feedback, tableFeedbackEnabled, } = props;
    const percent = answer.selected_count && answered_count
        ? Math.round((answer.selected_count / answered_count) * 100)
        : 0;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "review-wrapper", children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('review-count', { 'green': isCorrect, 'red': !isCorrect }), children: [(0, jsx_runtime_1.jsx)("span", { className: "selected-count", "data-percent": `${percent}`, children: answer.selected_count }), (0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)('letter', { 'green': isCorrect, 'red': !isCorrect }), children: utils_1.ALPHABET[iter] })] }), (0, jsx_runtime_1.jsx)(AnswerAnswer, { answer: answer, contentRenderer: contentRenderer, show_all_feedback: show_all_feedback, tableFeedbackEnabled: tableFeedbackEnabled })] }));
};
const AnswerChoice = (props) => {
    const { type, iter, answer, disabled, onKeyPress, qid, contentRenderer, correctIncorrectIcon, feedbackId, isSelected, isCorrect, isIncorrect, hasCorrectAnswer, show_all_feedback, tableFeedbackEnabled, labelAnswers = true, } = props;
    const ariaLabel = `${isSelected ? 'Selected ' : ''}Choice ${utils_1.ALPHABET[iter]}:`;
    let onChangeAnswer;
    const onChange = () => onChangeAnswer && onChangeAnswer(answer);
    if (!hasCorrectAnswer
        && (type !== 'teacher-review')
        && (type !== 'teacher-preview')
        && (type !== 'student-mpp')) {
        ({ onChangeAnswer } = props);
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [type === 'teacher-preview' &&
                (0, jsx_runtime_1.jsx)("div", { className: "correct-incorrect", children: isCorrect && correctIncorrectIcon }), (0, jsx_runtime_1.jsx)("input", { type: "radio", className: "answer-input-box", checked: isSelected, id: `${qid}-option-${iter}`, name: `${qid}-options`, onChange: onChange, disabled: disabled || !onChangeAnswer, "aria-details": feedbackId }), (0, jsx_runtime_1.jsxs)("label", { onKeyPress: onKeyPress, htmlFor: `${qid}-option-${iter}`, className: "answer-label", children: [(0, jsx_runtime_1.jsx)("span", { className: "answer-letter-wrapper", "aria-label": ariaLabel, "data-answer-choice": utils_1.ALPHABET[iter], "data-test-id": `answer-choice-${utils_1.ALPHABET[iter]}` }), (0, jsx_runtime_1.jsx)(AnswerAnswer, { answer: answer, contentRenderer: contentRenderer, labelAnswers: labelAnswers, show_all_feedback: show_all_feedback, tableFeedbackEnabled: tableFeedbackEnabled, hasCorrectAnswer: hasCorrectAnswer, isCorrect: isCorrect, isIncorrect: isIncorrect, isSelected: isSelected })] })] });
};
const AnswerBody = (props) => {
    return props.type === 'teacher-review'
        ? (0, jsx_runtime_1.jsx)(TeacherReview, { ...props })
        : (0, jsx_runtime_1.jsx)(AnswerChoice, { ...props });
};
const Answer = (props) => {
    const { type, answer, disabled, answerId, correctAnswerId, incorrectAnswerId, } = props;
    const isChecked = (0, utils_1.isAnswerChecked)(answer, answerId);
    const isCorrect = (0, utils_1.isAnswerCorrect)(answer, correctAnswerId);
    const isIncorrect = (0, utils_1.isAnswerIncorrect)(answer, incorrectAnswerId);
    // When rendering a previous response, we can determine if it was this answer.
    // If there is no incorrectAnswerId, that means only a correct answer is present, check isCorrect.
    // If an incorrectAnswerId is present (there is only ever one, if multiple attempts are enabled,
    // it is the latest one) checking isIncorrect works because incorrectAnswerId is only set for
    // a missed attempt, meaning if an attempt is missed and then successfully re-attempted,
    // incorrectAnswerId will be empty.
    const isPreviousResponse = answerId === undefined && (!incorrectAnswerId && isCorrect || isIncorrect);
    const isSelected = isChecked || isPreviousResponse;
    const classes = (0, classnames_1.default)('answers-answer', {
        'disabled': disabled,
        'answer-selected': isSelected,
        'answer-correct': isCorrect && type !== 'student-mpp',
        'answer-incorrect': incorrectAnswerId && (0, utils_1.isAnswerIncorrect)(answer, incorrectAnswerId),
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "openstax-answer", children: (0, jsx_runtime_1.jsx)("section", { className: classes, children: (0, jsx_runtime_1.jsx)(AnswerBody, { ...props, isCorrect: isCorrect, isSelected: isSelected, isIncorrect: isIncorrect }) }) }));
};
exports.Answer = Answer;
exports.Answer.displayName = 'OSAnswer';
//# sourceMappingURL=Answer.js.map