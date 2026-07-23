import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { mixins, colors, layouts, transitions } from '../theme';
import { AnswersTable } from './AnswersTable';
import classnames from 'classnames';
import React from 'react';
import { Content } from './Content';
const StyledBodyContainer = styled.div `
  width: 100%;
`;
const StyledQuestion = styled.div `
&.step-card-body {
  ${mixins.stepCardPadding()};
}

&.openstax-question {
  border-top: 1px solid ${colors.palette.pale};
  font-size: calc(1.8rem * var(--content-text-scale));

  .detailed-solution {
    margin-bottom: 1rem;
    .header {
      display: inline;
      margin-right: 0.5rem;
      color: #5e6062;
      font-weight: bold;
      flex-basis: 0;
    }
    .solution {
      display: inline;
      color: #6f6f6f;
    }
  }

  img {
    display: block;
    margin: auto;
    max-width: 100%;
  }

  .question-stem {
    margin-bottom: 0;
  }

  .answers-table {
    margin-bottom: 20px;
    font-size: calc(1.6rem * var(--content-text-scale));
    line-height: calc(2rem * var(--content-text-scale));
  }

  .instructions {
    font-size: 1.4rem;
    font-style: italic;
    margin-top: 10px;
    color: ${colors.palette.neutral};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${colors.palette.neutralLightBlue};
      padding-left: 5px;
      cursor: pointer;
      font-style: normal;
    }
  }

  .multiple-choice-prompt {
    font-weight: 600;
  }

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &:not(.disabled){
        .answer-label:focus{
          background-color: ${colors.palette.neutralLightest};
        }
      }
      &.answer-selected {
        font-weight: bold;
      }
      ${mixins.answer()};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: ${layouts.answer.horizontalSpacing};
      * {
        margin: 0;
      }
    }

    .answer-letter-wrapper::before {
      content: attr(data-answer-choice);
      text-align: center;
      padding: 0;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .answer-label {
      align-items: center;
      width: 100%;
      padding: ${layouts.answer.verticalSpacing} 0 0 0;
      margin: 0;
      transition: color ${transitions.answer};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${mixins.answerHover()}
      }
    }

    .answer-input-box {
      ${mixins.visuallyHidden()}
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${mixins.answerChecked()};
          }
        }

        &:focus-visible {
          + .answer-label .answer-letter-wrapper::before {
            outline-style: solid;
            outline-width: 2px;
            outline-offset: 2px;
            outline-color: ${colors.answer.checked};
          }
        }
      }

      .answer-selected {
        .answer-label, .answer-label:hover {
          ${mixins.answerChecked()};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-selected {
        &:not(.answer-correct) {
          .answer-label {
            ${mixins.answerIncorrect(true)};
          }
        }

        &.answer-correct {
          .answer-label {
            ${mixins.answerCorrect(true)};
          }
        }
      }

      .answer-correct:not(.answer-selected) {
        .answer-label {
          ${mixins.answerCorrect(false)}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect {
        .answer-label, .answer-label:hover {
          ${mixins.answerIncorrect()}
        }
        &.answer-selected.answer-incorrect {
          ${mixins.answerIncorrect(true)}
        }
      }
    }

    .question-feedback {
      ${mixins.popover()}
      max-width: ${layouts.answer.feedback.popover.maxWidth};
      .question-feedback-content {
        padding: ${layouts.answer.feedback.popover.verticalSpacing} ${layouts.answer.feedback.popover.horizontalSpacing};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 6px 8px;
  }
}
`;
export const Question = React.forwardRef((props, ref) => {
    let exerciseUid, solution;
    const { question, correct_answer_id, incorrectAnswerId, exercise_uid, className, questionNumber, context, task, hidePreambles } = props;
    const { stem_html, collaborator_solutions = [], formats, stimulus_html } = question;
    const hasCorrectAnswer = !!correct_answer_id;
    const hasIncorrectAnswer = !!incorrectAnswerId;
    const taskIsDeleted = (task != null ? task.is_deleted : undefined);
    const taskIsHomework = ((task != null ? task.type : undefined) === 'homework');
    const classes = classnames('openstax-question', className, {
        'has-correct-answer': hasCorrectAnswer && !(taskIsDeleted && taskIsHomework),
        'has-incorrect-answer': hasIncorrectAnswer,
    });
    const hasSolution = () => {
        const { displaySolution } = props;
        const { collaborator_solutions = [] } = question;
        return (displaySolution &&
            collaborator_solutions &&
            collaborator_solutions.find(s => s['content_html'] !== undefined));
    };
    if (exercise_uid != null) {
        exerciseUid = (_jsx("div", { className: "exercise-uid", children: exercise_uid }));
    }
    if (hasSolution()) {
        solution =
            _jsxs("div", { className: "detailed-solution", children: [_jsx("div", { className: "header", children: "Detailed solution:" }), _jsx(Content, { className: "solution", block: true, html: collaborator_solutions.map(s => s['content_html']).join('') })] });
    }
    return (_jsx(StyledQuestion, { ref: ref, className: classes, "data-question-number": questionNumber, "data-test-id": "question", children: _jsx(StyledBodyContainer, { children: _jsxs("div", { children: [_jsx(QuestionHtml, { type: "context", html: context, hidden: hidePreambles }), _jsx(QuestionHtml, { type: "stimulus", html: stimulus_html, hidden: hidePreambles }), _jsx(QuestionHtml, { type: "stem", html: stem_html, hidden: hidePreambles, questionNumber: questionNumber }), props.children, _jsx(AnswersTable, { ...props, onChangeAnswer: props.onChange, hasCorrectAnswer: hasCorrectAnswer }), solution, props.displayFormats ? _jsx(FormatsListing, { formats: formats }) : undefined, exerciseUid] }) }) }));
});
export const QuestionHtml = (props) => {
    const { html = '', type, hidden, questionNumber } = props;
    if (hidden === true || !(html.length > 0)) {
        return null;
    }
    return (_jsx(Content, { html: html, "data-question-number": questionNumber, className: `question-${type}`, block: true }));
};
const FormatsListing = ({ formats = [] }) => {
    return (_jsxs("div", { className: "formats-listing", children: [_jsx("div", { className: "header", children: "Formats:" }), formats.map((format, i) => _jsx("span", { children: format }, i))] }));
};
//# sourceMappingURL=Question.js.map