import { defaultAnswerType } from "../constants";
import { Answer as AnswerType, AnswerDisplayType, ID, ExerciseQuestionData } from "../types";
import { Answer } from "./Answer";
import { Feedback } from "./Feedback";

export interface AnswersTableProps {
  question: ExerciseQuestionData;
  type?: AnswerDisplayType;
  answer_id?: ID;
  correct_answer_id?: ID | null;
  incorrectAnswerId?: ID;
  feedback_html: string;
  correct_answer_feedback_html?: string;
  answered_count?: number;
  show_all_feedback?: boolean;
  labelAnswers?: boolean;
  onChangeAnswer: (answer: AnswerType) => void;
  hideAnswers: boolean;
  hasCorrectAnswer?: boolean;
  onChangeAttempt?: () => void;
  choicesEnabled?: boolean;
  onKeyPress?: () => void;
  contentRenderer?: JSX.Element;
  instructions?: JSX.Element;
  previewMode?: boolean;
}

export const AnswersTable = (props: AnswersTableProps) => {
  let idCounter = 0;

  const {
    question, hideAnswers, type = defaultAnswerType, answered_count, choicesEnabled, correct_answer_id,
    incorrectAnswerId, answer_id, feedback_html, correct_answer_feedback_html, previewMode,
    labelAnswers, show_all_feedback = false, hasCorrectAnswer, onChangeAnswer, onKeyPress, instructions
  } = props;
  if (hideAnswers) { return null; }

  const { id } = question;

  const feedback: { index: number, html: string, id: string }[] = [];

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
    onKeyPress
  };

  const answersHtml = question.answers.map((answer, i) => {
    const additionalProps: { answer: AnswerType, iter: number, key: string }
      = {
      answer: {
        ...answer,
        question_id: typeof question.id === 'string' ? parseInt(question.id, 10) : question.id
      },
      iter: i,
      key: `${questionAnswerProps.qid}-option-${i}`,
    };
    const answerProps = Object.assign({}, additionalProps, questionAnswerProps);
    let html: string | undefined;
    let feedbackId: string | undefined;

    if (show_all_feedback && answer.feedback_html) {
      html = answer.feedback_html;
    } else if (answer.id === incorrectAnswerId && feedback_html) {
      html = feedback_html;
    } else if (answer.id === correct_answer_id && correct_answer_feedback_html) {
      html = correct_answer_feedback_html;
    }

    if (html) {
      feedbackId = `feedback-${questionAnswerProps.qid}-${i}`
      feedback.push({ index: i, html, id: feedbackId });
    }

    return (
      <Answer feedbackId={feedbackId} {...answerProps} />
    );
  });

  feedback.forEach((item, i) => {
    const spliceIndex = item.index + i + 1;
    answersHtml.splice(spliceIndex, 0, (
      <Feedback id={item.id} key={spliceIndex} contentRenderer={props.contentRenderer}>
        {item.html}
      </Feedback>
    ));
  });

  return (
    <div
      {
      ...(!previewMode
        ? {
          role: "radiogroup",
          'aria-label': "Answer choices"
        }
        : {})
      }
      className="answers-table"
    >
      {instructions}
      {answersHtml}
    </div>
  );
}
