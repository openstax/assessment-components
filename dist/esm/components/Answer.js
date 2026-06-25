import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import cn from 'classnames';
import { ALPHABET, isAnswerChecked, isAnswerCorrect, isAnswerIncorrect } from '../utils';
import { Content } from './Content';
import { SimpleFeedback } from './Feedback';
import styled from 'styled-components';
import { colors } from '../theme';
const StyledAnswerIndicator = styled.div `
  color: ${props => props.state ? colors.answer.correct : colors.answer.incorrect};
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
    return _jsx(StyledAnswerIndicator, { state: !!isCorrect, children: _jsx("span", { children: text }) });
};
// labelAnswers defaults to true, must be explicitly false to disable
const AnswerAnswer = (props) => {
    const { answer: { content_html, feedback_html }, contentRenderer, labelAnswers, show_all_feedback, tableFeedbackEnabled, hasCorrectAnswer, isCorrect, isIncorrect, isSelected, } = props;
    return (_jsxs("div", { className: "answer-answer", role: "status", "aria-live": "polite", "aria-atomic": "true", children: [labelAnswers !== false && _jsx(AnswerIndicator, { hasCorrectAnswer: hasCorrectAnswer, isCorrect: isCorrect, isIncorrect: isIncorrect, isSelected: isSelected }), _jsx(Content, { className: "answer-content", component: contentRenderer, html: content_html }), show_all_feedback && feedback_html && !tableFeedbackEnabled &&
                _jsx(SimpleFeedback, { contentRenderer: contentRenderer, children: feedback_html }, "question-mc-feedback")] }));
};
const TeacherReview = (props) => {
    const { answer, answered_count, isCorrect, contentRenderer, iter, show_all_feedback, tableFeedbackEnabled, } = props;
    const percent = answer.selected_count && answered_count
        ? Math.round((answer.selected_count / answered_count) * 100)
        : 0;
    return (_jsxs("div", { className: "review-wrapper", children: [_jsxs("div", { className: cn('review-count', { 'green': isCorrect, 'red': !isCorrect }), children: [_jsx("span", { className: "selected-count", "data-percent": `${percent}`, children: answer.selected_count }), _jsx("span", { className: cn('letter', { 'green': isCorrect, 'red': !isCorrect }), children: ALPHABET[iter] })] }), _jsx(AnswerAnswer, { answer: answer, contentRenderer: contentRenderer, show_all_feedback: show_all_feedback, tableFeedbackEnabled: tableFeedbackEnabled })] }));
};
const AnswerChoice = (props) => {
    const { type, iter, answer, disabled, onKeyPress, qid, contentRenderer, correctIncorrectIcon, feedbackId, isSelected, isCorrect, isIncorrect, hasCorrectAnswer, show_all_feedback, tableFeedbackEnabled, labelAnswers = true, } = props;
    const ariaLabel = `${isSelected ? 'Selected ' : ''}Choice ${ALPHABET[iter]}:`;
    let onChangeAnswer;
    const onChange = () => onChangeAnswer && onChangeAnswer(answer);
    if (!hasCorrectAnswer
        && (type !== 'teacher-review')
        && (type !== 'teacher-preview')
        && (type !== 'student-mpp')) {
        ({ onChangeAnswer } = props);
    }
    return _jsxs(_Fragment, { children: [type === 'teacher-preview' &&
                _jsx("div", { className: "correct-incorrect", children: isCorrect && correctIncorrectIcon }), _jsx("input", { type: "radio", className: "answer-input-box", checked: isSelected, id: `${qid}-option-${iter}`, name: `${qid}-options`, onChange: onChange, disabled: disabled || !onChangeAnswer, "aria-details": feedbackId }), _jsxs("label", { onKeyPress: onKeyPress, htmlFor: `${qid}-option-${iter}`, className: "answer-label", children: [_jsx("span", { className: "answer-letter-wrapper", "aria-label": ariaLabel, "data-answer-choice": ALPHABET[iter], "data-test-id": `answer-choice-${ALPHABET[iter]}` }), _jsx(AnswerAnswer, { answer: answer, contentRenderer: contentRenderer, labelAnswers: labelAnswers, show_all_feedback: show_all_feedback, tableFeedbackEnabled: tableFeedbackEnabled, hasCorrectAnswer: hasCorrectAnswer, isCorrect: isCorrect, isIncorrect: isIncorrect, isSelected: isSelected })] })] });
};
const AnswerBody = (props) => {
    return props.type === 'teacher-review'
        ? _jsx(TeacherReview, { ...props })
        : _jsx(AnswerChoice, { ...props });
};
export const Answer = (props) => {
    const { type, answer, disabled, answerId, correctAnswerId, incorrectAnswerId, } = props;
    const isChecked = isAnswerChecked(answer, answerId);
    const isCorrect = isAnswerCorrect(answer, correctAnswerId);
    const isIncorrect = isAnswerIncorrect(answer, incorrectAnswerId);
    // When rendering a previous response, we can determine if it was this answer.
    // If there is no incorrectAnswerId, that means only a correct answer is present, check isCorrect.
    // If an incorrectAnswerId is present (there is only ever one, if multiple attempts are enabled,
    // it is the latest one) checking isIncorrect works because incorrectAnswerId is only set for
    // a missed attempt, meaning if an attempt is missed and then successfully re-attempted,
    // incorrectAnswerId will be empty.
    const isPreviousResponse = answerId === undefined && (!incorrectAnswerId && isCorrect || isIncorrect);
    const isSelected = isChecked || isPreviousResponse;
    const classes = cn('answers-answer', {
        'disabled': disabled,
        'answer-selected': isSelected,
        'answer-correct': isCorrect && type !== 'student-mpp',
        'answer-incorrect': incorrectAnswerId && isAnswerIncorrect(answer, incorrectAnswerId),
    });
    return (_jsx("div", { className: "openstax-answer", children: _jsx("section", { className: classes, children: _jsx(AnswerBody, { ...props, isCorrect: isCorrect, isSelected: isSelected, isIncorrect: isIncorrect }) }) }));
};
Answer.displayName = 'OSAnswer';
//# sourceMappingURL=Answer.js.map