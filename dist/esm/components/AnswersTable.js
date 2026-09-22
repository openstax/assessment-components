import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { defaultAnswerType } from "../constants";
import { Answer } from "./Answer";
import { Feedback } from "./Feedback";
export const AnswersTable = (props) => {
    let idCounter = 0;
    const { question, hideAnswers, type = defaultAnswerType, answered_count, choicesEnabled, correct_answer_id, incorrectAnswerId, answer_id, feedback_html, correct_answer_feedback_html, previewMode, labelAnswers, show_all_feedback = false, tableFeedbackEnabled, hasCorrectAnswer, onChangeAnswer, onKeyPress, answerIdOrder, instructions } = props;
    if (hideAnswers) {
        return null;
    }
    const { id } = question;
    const feedback = [];
    const sortedAnswersByIdOrder = (idOrder) => {
        const { answers } = question;
        return answers.slice().sort((a, b) => idOrder.indexOf(a.id) - idOrder.indexOf(b.id));
    };
    const questionAnswerProps = {
        qid: id || `auto-${idCounter++}`,
        answerId: answer_id,
        correctAnswerId: correct_answer_id,
        incorrectAnswerId,
        hasCorrectAnswer,
        onChangeAnswer: onChangeAnswer,
        type,
        answered_count,
        disabled: previewMode || !choicesEnabled,
        labelAnswers,
        show_all_feedback,
        tableFeedbackEnabled,
        onKeyPress
    };
    const answers = answerIdOrder ? sortedAnswersByIdOrder(answerIdOrder) : question.answers;
    const answersHtml = answers.map((answer, i) => {
        const additionalProps = {
            answer: {
                ...answer,
                question_id: typeof question.id === 'string' ? parseInt(question.id, 10) : question.id
            },
            iter: i,
            key: `${questionAnswerProps.qid}-option-${i}`,
        };
        const answerProps = Object.assign({}, additionalProps, questionAnswerProps);
        let html;
        let feedbackId;
        if (show_all_feedback && answer.feedback_html && tableFeedbackEnabled) {
            html = answer.feedback_html;
        }
        else if (answer.id === incorrectAnswerId && feedback_html) {
            html = feedback_html;
        }
        else if (answer.id === correct_answer_id && correct_answer_feedback_html) {
            html = correct_answer_feedback_html;
        }
        if (html) {
            feedbackId = `feedback-${questionAnswerProps.qid}-${i}`;
            feedback.push({ index: i, html, id: feedbackId });
        }
        return (_jsx(Answer, { feedbackId: feedbackId, ...answerProps }));
    });
    feedback.forEach((item, i) => {
        const spliceIndex = item.index + i + 1;
        answersHtml.splice(spliceIndex, 0, (_jsx(Feedback, { id: item.id, contentRenderer: props.contentRenderer, children: item.html }, spliceIndex)));
    });
    return (_jsxs("div", { ...(!previewMode
            ? {
                role: "radiogroup",
                'aria-label': "Answer choices"
            }
            : {}), className: "answers-table", children: [instructions, answersHtml] }));
};
//# sourceMappingURL=AnswersTable.js.map