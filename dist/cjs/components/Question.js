"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionHtml = exports.Question = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../theme");
const AnswersTable_1 = require("./AnswersTable");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const Content_1 = require("./Content");
const StyledBodyContainer = styled_components_1.default.div `
  width: 100%;
`;
const StyledQuestion = styled_components_1.default.div `
&.step-card-body {
  ${theme_1.mixins.stepCardPadding()};
}

&.openstax-question {
  border-top: 1px solid ${theme_1.colors.palette.pale};
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
    color: ${theme_1.colors.palette.neutral};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${theme_1.colors.palette.neutralLightBlue};
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
          background-color: ${theme_1.colors.palette.neutralLightest};
        }
      }
      &.answer-selected {
        font-weight: bold;
      }
      ${theme_1.mixins.answer()};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: ${theme_1.layouts.answer.horizontalSpacing};
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
      padding: ${theme_1.layouts.answer.verticalSpacing} 0 0 0;
      margin: 0;
      transition: color ${theme_1.transitions.answer};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${theme_1.mixins.answerHover()}
      }
    }

    .answer-input-box {
      ${theme_1.mixins.visuallyHidden()}
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${theme_1.mixins.answerChecked()};
          }
        }

        &:focus-visible {
          + .answer-label .answer-letter-wrapper::before {
            outline-style: solid;
            outline-width: 2px;
            outline-offset: 2px;
            outline-color: ${theme_1.colors.answer.checked};
          }
        }
      }

      .answer-selected {
        .answer-label, .answer-label:hover {
          ${theme_1.mixins.answerChecked()};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-selected {
        &:not(.answer-correct) {
          .answer-label {
            ${theme_1.mixins.answerIncorrect(true)};
          }
        }

        &.answer-correct {
          .answer-label {
            ${theme_1.mixins.answerCorrect(true)};
          }
        }
      }

      .answer-correct:not(.answer-selected) {
        .answer-label {
          ${theme_1.mixins.answerCorrect(false)}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect {
        .answer-label, .answer-label:hover {
          ${theme_1.mixins.answerIncorrect()}
        }
        &.answer-selected.answer-incorrect {
          ${theme_1.mixins.answerIncorrect(true)}
        }
      }
    }

    .question-feedback {
      ${theme_1.mixins.popover()}
      max-width: ${theme_1.layouts.answer.feedback.popover.maxWidth};
      .question-feedback-content {
        padding: ${theme_1.layouts.answer.feedback.popover.verticalSpacing} ${theme_1.layouts.answer.feedback.popover.horizontalSpacing};
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
exports.Question = react_1.default.forwardRef((props, ref) => {
    let exerciseUid, solution;
    const { question, correct_answer_id, incorrectAnswerId, exercise_uid, className, questionNumber, context, task, hidePreambles } = props;
    const { stem_html, collaborator_solutions = [], formats, stimulus_html } = question;
    const hasCorrectAnswer = !!correct_answer_id;
    const hasIncorrectAnswer = !!incorrectAnswerId;
    const taskIsDeleted = (task != null ? task.is_deleted : undefined);
    const taskIsHomework = ((task != null ? task.type : undefined) === 'homework');
    const classes = (0, classnames_1.default)('openstax-question', className, {
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
        exerciseUid = ((0, jsx_runtime_1.jsx)("div", { className: "exercise-uid", children: exercise_uid }));
    }
    if (hasSolution()) {
        solution =
            (0, jsx_runtime_1.jsxs)("div", { className: "detailed-solution", children: [(0, jsx_runtime_1.jsx)("div", { className: "header", children: "Detailed solution:" }), (0, jsx_runtime_1.jsx)(Content_1.Content, { className: "solution", block: true, html: collaborator_solutions.map(s => s['content_html']).join('') })] });
    }
    return ((0, jsx_runtime_1.jsx)(StyledQuestion, { ref: ref, className: classes, "data-question-number": questionNumber, "data-test-id": "question", children: (0, jsx_runtime_1.jsx)(StyledBodyContainer, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(exports.QuestionHtml, { type: "context", html: context, hidden: hidePreambles }), (0, jsx_runtime_1.jsx)(exports.QuestionHtml, { type: "stimulus", html: stimulus_html, hidden: hidePreambles }), (0, jsx_runtime_1.jsx)(exports.QuestionHtml, { type: "stem", html: stem_html, hidden: hidePreambles, questionNumber: questionNumber }), props.children, (0, jsx_runtime_1.jsx)(AnswersTable_1.AnswersTable, { ...props, onChangeAnswer: props.onChange, hasCorrectAnswer: hasCorrectAnswer }), solution, props.displayFormats ? (0, jsx_runtime_1.jsx)(FormatsListing, { formats: formats }) : undefined, exerciseUid] }) }) }));
});
const QuestionHtml = (props) => {
    const { html = '', type, hidden, questionNumber } = props;
    if (hidden === true || !(html.length > 0)) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(Content_1.Content, { html: html, "data-question-number": questionNumber, className: `question-${type}`, block: true }));
};
exports.QuestionHtml = QuestionHtml;
const FormatsListing = ({ formats = [] }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "formats-listing", children: [(0, jsx_runtime_1.jsx)("div", { className: "header", children: "Formats:" }), formats.map((format, i) => (0, jsx_runtime_1.jsx)("span", { children: format }, i))] }));
};
//# sourceMappingURL=Question.js.map