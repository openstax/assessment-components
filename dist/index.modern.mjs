import { jsx, jsxs, Fragment } from 'react/jsx-runtime.js';
import cn from 'classnames';
import React, { createElement } from 'react';
import styled, { css } from 'styled-components';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const MAX_CORRECTNESS = '1.0';
const isAnswerCorrect = function isAnswerCorrect(answer, correctAnswerId) {
  // if answer does not have an id, check the isCorrect property.
  if (!(answer.id || correctAnswerId)) {
    return answer.isCorrect;
  }
  let isCorrect = answer.id === correctAnswerId;
  if (answer.correctness != null) {
    isCorrect = answer.correctness === MAX_CORRECTNESS;
  }
  return isCorrect;
};
const isAnswerIncorrect = function isAnswerIncorrect(answer, incorrectAnswerId) {
  // Allow multiple attempts to show incorrectness without the correct_answer_id
  return answer.id === incorrectAnswerId;
};
const isAnswerChecked = (answer, chosenAnswer) => Boolean((chosenAnswer || []).find(a => a == answer.id));
function countWords(text) {
  const trimmedText = text.trim();
  //https://css-tricks.com/build-word-counter-app/
  const words = trimmedText.match(/\b[-?(\w+)?]+\b/gi);
  if (!words) return 0;
  return words.length;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const _excluded$3 = ["html", "component", "block"];
const Content = _ref => {
  let {
      html,
      component,
      block = false
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  if (component !== undefined) {
    return /*#__PURE__*/React.cloneElement(component, _extends({
      html
    }, props));
  }
  if (block) {
    return jsx("div", _extends({
      dangerouslySetInnerHTML: {
        __html: html
      }
    }, props));
  } else {
    return jsx("span", _extends({
      dangerouslySetInnerHTML: {
        __html: html
      }
    }, props));
  }
};

const SimpleFeedback = props => jsx("aside", {
  children: jsx(Content, {
    component: props.contentRenderer,
    className: cn('question-feedback-content', 'has-html', props.className),
    html: props.children,
    block: true
  })
});
const Feedback = props => {
  const position = props.position || 'bottom';
  const wrapperClasses = cn('question-feedback', position);
  return jsxs("aside", {
    className: wrapperClasses,
    children: [jsx("div", {
      className: "arrow",
      "aria-label": "Answer Feedback"
    }), jsx(SimpleFeedback, _extends({}, props, {
      children: props.children
    }))]
  });
};

const Answer = props => {
  const {
    type,
    iter,
    answer,
    disabled,
    onKeyPress,
    qid,
    chosenAnswer,
    correctAnswerId,
    incorrectAnswerId,
    hasCorrectAnswer,
    answered_count,
    contentRenderer,
    show_all_feedback
  } = props;
  let body, feedback, selectedCount;
  const isChecked = isAnswerChecked(answer, chosenAnswer);
  const isCorrect = isAnswerCorrect(answer, correctAnswerId);
  const isIncorrect = isAnswerIncorrect(answer, incorrectAnswerId);
  const correctIncorrectIcon = jsx("div", {
    className: "correct-incorrect",
    children: isCorrect && props.correctIncorrectIcon
  });
  const classes = cn('answers-answer', {
    'disabled': disabled,
    'answer-checked': isChecked,
    'answer-correct': isCorrect && type !== 'student-mpp',
    'answer-incorrect': incorrectAnswerId && isAnswerIncorrect(answer, incorrectAnswerId)
  });
  let ariaLabel = `${isChecked ? 'Selected ' : ''}Choice ${ALPHABET[iter]}`;
  // somewhat misleading - this means that there is a correct answer,
  // not necessarily that this answer is correct
  if (hasCorrectAnswer) {
    ariaLabel += `(${isCorrect ? 'Correct' : 'Incorrect'} Answer)`;
  }
  ariaLabel += ':';
  let onChangeAnswer, radioBox;
  if (!hasCorrectAnswer && type !== 'teacher-review' && type !== 'teacher-preview' && type !== 'student-mpp') {
    ({
      onChangeAnswer
    } = props);
  }
  if (onChangeAnswer) {
    radioBox = jsx("input", {
      type: "radio",
      className: "answer-input-box",
      checked: isChecked,
      id: `${qid}-option-${iter}`,
      name: `${qid}-options`,
      onChange: onChangeAnswer,
      disabled: disabled
    });
  }
  if (show_all_feedback && answer.feedback_html) {
    feedback = jsx(SimpleFeedback, {
      contentRenderer: contentRenderer,
      children: answer.feedback_html
    }, "question-mc-feedback");
  }
  if (type === 'teacher-review') {
    let percent = 0;
    if (answer.selected_count && answered_count) {
      percent = Math.round(answer.selected_count / answered_count * 100);
    }
    selectedCount = jsx("span", {
      className: "selected-count",
      "data-percent": `${percent}`,
      children: answer.selected_count
    });
    body = jsxs("div", {
      className: "review-wrapper",
      children: [jsxs("div", {
        className: cn('review-count', {
          'green': isCorrect,
          'red': !isCorrect
        }),
        children: [selectedCount, jsx("span", {
          className: cn('letter', {
            'green': isCorrect,
            'red': !isCorrect
          }),
          children: ALPHABET[iter]
        })]
      }), jsxs("div", {
        className: "answer-answer",
        children: [jsx(Content, {
          className: "answer-content",
          component: contentRenderer,
          html: answer.content_html
        }), feedback]
      })]
    });
  } else {
    body = jsxs(Fragment, {
      children: [type === 'teacher-preview' && correctIncorrectIcon, selectedCount, radioBox, jsxs("label", {
        onKeyPress: onKeyPress,
        htmlFor: `${qid}-option-${iter}`,
        className: "answer-label",
        children: [jsx("span", {
          className: "answer-letter-wrapper",
          children: jsx("button", {
            onClick: onChangeAnswer,
            "aria-label": ariaLabel,
            className: "answer-letter",
            disabled: disabled || isIncorrect,
            "data-test-id": `answer-choice-${ALPHABET[iter]}`,
            children: ALPHABET[iter]
          })
        }), jsxs("div", {
          className: "answer-answer",
          children: [jsx(Content, {
            className: "answer-content",
            component: contentRenderer,
            html: answer.content_html
          }), feedback]
        })]
      })]
    });
  }
  return jsx("div", {
    className: "openstax-answer",
    children: jsx("section", {
      role: "region",
      className: classes,
      children: body
    })
  });
};
Answer.displayName = 'OSAnswer';

const defaultAnswerType = 'student';

const AnswersTable = props => {
  let idCounter = 0;
  const {
    question,
    hideAnswers,
    type = defaultAnswerType,
    answered_count,
    choicesEnabled,
    correct_answer_id,
    incorrectAnswerId,
    answer_id,
    feedback_html,
    correct_answer_feedback_html,
    show_all_feedback = false,
    hasCorrectAnswer,
    onChangeAnswer,
    onKeyPress,
    answerIdOrder,
    instructions
  } = props;
  if (hideAnswers) {
    return null;
  }
  const {
    id
  } = question;
  const feedback = [];
  const chosenAnswer = [answer_id];
  const sortedAnswersByIdOrder = idOrder => {
    const {
      answers
    } = question;
    return answers.slice().sort((a, b) => idOrder.indexOf(a.id) - idOrder.indexOf(b.id));
  };
  const questionAnswerProps = {
    qid: id || `auto-${idCounter++}`,
    correctAnswerId: correct_answer_id,
    incorrectAnswerId,
    hasCorrectAnswer,
    chosenAnswer,
    onChangeAnswer: onChangeAnswer,
    type,
    answered_count,
    disabled: !choicesEnabled,
    show_all_feedback,
    onKeyPress
  };
  const answers = answerIdOrder ? sortedAnswersByIdOrder(answerIdOrder) : question.answers;
  const answersHtml = answers.map((answer, i) => {
    const additionalProps = {
      answer,
      iter: i,
      key: `${questionAnswerProps.qid}-option-${i}`
    };
    const answerProps = Object.assign({}, additionalProps, questionAnswerProps);
    if (answer.id === incorrectAnswerId && feedback_html) {
      feedback.push({
        index: i,
        html: feedback_html
      });
    } else if (answer.id === correct_answer_id && correct_answer_feedback_html) {
      feedback.push({
        index: i,
        html: correct_answer_feedback_html
      });
    }
    return jsx(Answer, _extends({}, answerProps));
  });
  feedback.forEach((item, i) => {
    const spliceIndex = item.index + i + 1;
    answersHtml.splice(spliceIndex, 0, jsx(Feedback, {
      contentRenderer: props.contentRenderer,
      children: item.html
    }, spliceIndex));
  });
  return jsxs("div", {
    className: "answers-table",
    children: [instructions, answersHtml]
  });
};

let _$6 = t => t,
  _t$6,
  _t2$3,
  _t3$2,
  _t4$2,
  _t5$2,
  _t6$2,
  _t7$1,
  _t8$1,
  _t9$1,
  _t10$1,
  _t11$1,
  _t12$1,
  _t13;
const palette = {
  red: "#ca2026",
  danger: "#c2002f",
  darkRed: "#c22032",
  lightRed: "#e298a0",
  green: "#77af42",
  lightGreen: "#8bc753",
  darkGreen: "#63a524",
  paleYellow: "#ffffbb",
  teal: "#0dc0de",
  blue: "#007da4",
  lightBlue: "#34bdd8",
  neutralLightBlue: "#0dc0dc",
  tangerine: "#ffbd3e",
  gray: "#5e5e5e",
  darkGray: "#757575",
  pale: "#d5d5d5",
  light: "#e4e4e4",
  white: "#ffffff",
  neutralLightest: "#f9f9f9",
  neutralCool: "#f6f7f8",
  neutralBright: "#f5f5f5",
  neutralLighter: "#f1f1f1",
  neutralLight: "#e5e5e5",
  neutralMedium: "#a0a0a0",
  neutral: "#818181",
  neutralThin: "#6f6f6f",
  neutralDark: "#5f6163",
  neutralDarker: "#424242",
  black: "#000000",
  orange: "#D4450C"
};
const colors = {
  palette: palette,
  answer: {
    color: palette.lightBlue,
    correct: {
      color: palette.green,
      background: "#77af42"
    },
    incorrect: {
      color: palette.red,
      background: palette.red
    },
    checked: palette.lightBlue,
    hover: palette.neutralDark,
    label: {
      color: palette.neutralMedium,
      colorHover: palette.neutralDark,
      colorSelected: palette.lightBlue
    },
    feedback: {
      arrowOuterColor: "rgba(0, 0, 0, 0.25)",
      popover: {
        borderColor: "rgba(0, 0, 0, 0.2)"
      }
    }
  },
  card: {
    background: "#daf3f8"
  },
  button: {
    background: palette.orange,
    backgroundHover: "#E74B0D",
    backgroundActive: "#C5400B"
  },
  freeResponse: {
    color: palette.neutralDark,
    background: palette.neutralLighter
  }
};
const layouts = {
  answer: {
    verticalSpacing: "1.5rem",
    horizontalSpacing: "1rem",
    horizontalBuffer: "2.5rem",
    bubbleSize: "4rem",
    labelSpacing: "6.5rem",
    feedback: {
      arrow: {
        width: "20px",
        height: "15px"
      },
      popover: {
        horizontalSpacing: "2rem",
        verticalSpacing: "2rem",
        horizontalBuffer: "4rem",
        borderWidth: "1px",
        maxWidth: "370px"
      }
    }
  }
};
const BREAKPOINTS = {
  mobile: 600,
  tablet: 999,
  desktop: 1000,
  large: 1600
};
const breakpoints = {
  mobile(...args) {
    return css(_t$6 || (_t$6 = _$6`@media(max-width: ${0}px) { ${0} }`), BREAKPOINTS.mobile, css(...args));
  },
  tablet(...args) {
    return css(_t2$3 || (_t2$3 = _$6`@media(max-width: ${0}px) { ${0} }`), BREAKPOINTS.tablet, css(...args));
  },
  desktop(...args) {
    return css(_t3$2 || (_t3$2 = _$6`@media(min-width: ${0}px) { ${0} }`), BREAKPOINTS.desktop, css(...args));
  },
  only: {
    mobile(...args) {
      return css(_t4$2 || (_t4$2 = _$6`@media(max-width: ${0}px) { ${0} }`), BREAKPOINTS.mobile, css(...args));
    }
  },
  margins: {
    mobile: '8px',
    tablet: '24px'
  }
};
const transitions = {
  answer: "0.1s ease-in-out"
};
const mixins = {
  answer: () => css(_t5$2 || (_t5$2 = _$6`
    .answer-label {
      display: flex;
    }
    color: ${0};
    .answer-letter {
      width: ${0};
      height: ${0};
      min-width: ${0};
      min-height: ${0};
      border-radius: calc(${0} / 2);
      border-width: 2px;
      border-style: solid;
      border-color: #c6c6c6;
      color: ${0};
      transition: color ${0}, border-color ${0}, background-color ${0};
      background-color: ${0};
    }
  `), colors.answer.label.color, layouts.answer.bubbleSize, layouts.answer.bubbleSize, layouts.answer.bubbleSize, layouts.answer.bubbleSize, layouts.answer.bubbleSize, colors.answer.label.colorHover, transitions.answer, transitions.answer, transitions.answer, colors.palette.white),
  answerColor: values => css(_t6$2 || (_t6$2 = _$6`
    color: ${0};
    .answer-letter {
       border-color: ${0};
       background-color: ${0};
       color: ${0};
    }
  `), values.color, values.color, values.background, colors.palette.white),
  answerChecked: () => mixins.answerColor({
    color: colors.answer.checked,
    background: colors.answer.checked
  }),
  answerCorrect: () => mixins.answerColor(colors.answer.correct),
  answerIncorrect: () => mixins.answerColor(colors.answer.incorrect),
  answerHover: () => css(_t7$1 || (_t7$1 = _$6`
    color: ${0};
    .answer-letter {
      border-color: ${0};
    }
  `), colors.answer.label.colorHover, colors.answer.label.colorSelected),
  answerCorrectText: () => css(_t8$1 || (_t8$1 = _$6`
    content: 'correct answer';
    color: ${0};
    margin-left: calc(-1.25 * ${0});
    width: calc(1.25 * ${0});
    text-align: center;
    font-size: 1.2rem;
    // em used here for line-height for compatibility with IE
    // http://caniuse.com/#feat=rem -- rem ignored in pseudo elements
    line-height: 1em;
    margin-top: 0.8rem;
  `), colors.answer.label.color, layouts.answer.bubbleSize, layouts.answer.bubbleSize),
  answerCorrectAnswer: () => css(_t9$1 || (_t9$1 = _$6`
    color: ${0};
    .answer-letter {
      border-color: ${0};
      color: ${0};
    }
    &::before {
     ${0}
      @media screen and (max-width: ${0}px) {
        display: none;
      }
    }
    @media screen and (max-width:  ${0}px) {
      .answer-letter-wrapper {
        display: flex;
        flex-direction: column;
        &::after {
          ${0}
          width: $openstax-answer-bubble-size !important;
          margin-left: 0;
        }
      }
    }
  `), colors.answer.correct.color, colors.answer.correct.color, colors.answer.correct.color, mixins.answerCorrectText(), BREAKPOINTS.tablet, BREAKPOINTS.tablet, mixins.answerCorrectText()),
  resetText: () => css(_t10$1 || (_t10$1 = _$6`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
  `)),
  stepCardPadding: () => css(_t11$1 || (_t11$1 = _$6`
    padding: 48px 140px;

    ${0}

    ${0}
  `), breakpoints.tablet(_t12$1 || (_t12$1 = _$6`
      padding: ${0} ${0};
    `), breakpoints.margins.tablet, breakpoints.margins.tablet), breakpoints.mobile(_t13 || (_t13 = _$6`
      padding: calc(${0} * 2) ${0};
    `), breakpoints.margins.mobile, breakpoints.margins.mobile))
};

let _$5 = t => t,
  _t$5;
const StyledQuestion = styled.div(_t$5 || (_t$5 = _$5`
&.step-card-body {
  ${0};
}

&.openstax-question {
  font-size: 2rem;

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
    font-size: 17px;
    line-height: 25px;
  }

  .instructions {
    font-size: 1.4rem;
    font-style: italic;
    margin-top: 10px;
    color: ${0};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${0};
      padding-left: 5px;
      cursor: pointer;
      font-style: normal;
    }
  }

  .multiple-choice-prompt {
    font-weight: 600;
  }

  .free-response {
    padding: ${0} ${0};
    margin: ${0} 0 ${0} ${0};
    border-left: ${0} solid ${0};
    font-style: italic;
  }

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &:not(.disabled){
        .answer-label:focus{
          background-color: ${0};
        }
      }
      ${0};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      align-items: center;
      margin-left: ${0};
      * {
        margin: 0;
      }
    }

    .answer-letter {
      text-align: center;
      padding: 0;
    }


    .answer-label {
      font-weight: normal;
      width: 100%;
      padding: ${0} 0 0 0;
      margin: 0;

      transition: color ${0};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${0}
      }
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        display: none;

        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${0};
          }
        }
      }

      .answer-checked{
        .answer-label {
          ${0};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-checked {
        &:not(.answer-correct) {
          .answer-label {
            ${0};
          }
        }

        &.answer-correct {
          .answer-label {
            ${0};
          }
        }
      }

      .answer-correct:not(.answer-checked) {
        .answer-label {
          ${0}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect, .answer-checked.answer-incorrect {
        .answer-label {
          ${0}
        }
      }
    }

    .question-feedback {
      ${0}

      z-index: 1;
      position: relative;
      border: ${0} solid ${0};
      background-color: ${0};
      background-clip: padding-box;
      border-radius: 0.3rem;
      max-width: ${0};
      margin: calc(${0} - 5px) 0 ${0} calc(-1 * (2 * ${0}));
      box-shadow: 10px 0px 10px rgba(0, 0, 0, .25);
      color: ${0};
      font-size: 1.4rem;
      font-style: italic;

      .arrow {
        position: absolute;
        display: block;
        width: ${0};
        height: ${0};
        margin-left: 30px;
        top: calc((${0} + ${0}) * -1);

        &::before,
        &::after {
          position: absolute;
          display: block;
          content: "";
          border-color: transparent;
          border-style: solid;
          border-width: 0 calc(${0} / 2) ${0} calc(${0} / 2);
        }
        &::before {
          top: 0;
          border-bottom-color: ${0};
        }
        &::after {
          top: ${0};
          border-bottom-color: ${0};
        }
      }

      .question-feedback-content {
        padding: ${0} ${0};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 10px 0;
  }
}
`), mixins.stepCardPadding(), colors.palette.neutral, colors.palette.neutralLightBlue, layouts.answer.horizontalSpacing, layouts.answer.horizontalBuffer, layouts.answer.verticalSpacing, layouts.answer.horizontalSpacing, layouts.answer.verticalSpacing, layouts.answer.horizontalSpacing, colors.palette.neutralLighter, colors.palette.neutralLightest, mixins.answer(), layouts.answer.horizontalSpacing, layouts.answer.verticalSpacing, transitions.answer, mixins.answerHover(), mixins.answerChecked(), mixins.answerChecked(), mixins.answerIncorrect(), mixins.answerCorrect(), mixins.answerCorrectAnswer(), mixins.answerIncorrect(), mixins.resetText(), layouts.answer.feedback.popover.borderWidth, colors.answer.feedback.popover.borderColor, colors.palette.white, layouts.answer.feedback.popover.maxWidth, layouts.answer.feedback.arrow.height, layouts.answer.horizontalSpacing, layouts.answer.horizontalSpacing, colors.palette.neutral, layouts.answer.feedback.arrow.width, layouts.answer.feedback.arrow.height, layouts.answer.feedback.arrow.height, layouts.answer.feedback.popover.borderWidth, layouts.answer.feedback.arrow.width, layouts.answer.feedback.arrow.height, layouts.answer.feedback.arrow.width, colors.answer.feedback.popover.borderColor, layouts.answer.feedback.popover.borderWidth, colors.palette.white, layouts.answer.feedback.popover.verticalSpacing, layouts.answer.feedback.popover.horizontalSpacing);
const Question = props => {
  let exerciseUid, solution;
  const {
    question,
    correct_answer_id,
    incorrectAnswerId,
    exercise_uid,
    className,
    questionNumber,
    context,
    task,
    hidePreambles
  } = props;
  const {
    stem_html,
    collaborator_solutions = [],
    formats,
    stimulus_html
  } = question;
  const hasCorrectAnswer = !!correct_answer_id;
  const hasIncorrectAnswer = !!incorrectAnswerId;
  const taskIsDeleted = task != null ? task.is_deleted : undefined;
  const taskIsHomework = (task != null ? task.type : undefined) === 'homework';
  const classes = cn('openstax-question', className, {
    'has-correct-answer': hasCorrectAnswer && !(taskIsDeleted && taskIsHomework),
    'has-incorrect-answer': hasIncorrectAnswer
  });
  const hasSolution = () => {
    const {
      displaySolution
    } = props;
    const {
      collaborator_solutions = []
    } = question;
    return displaySolution && collaborator_solutions && collaborator_solutions.find(s => s['content_html'] !== undefined);
  };
  if (exercise_uid != null) {
    exerciseUid = jsx("div", {
      className: "exercise-uid",
      children: exercise_uid
    });
  }
  if (hasSolution()) {
    solution = jsxs("div", {
      className: "detailed-solution",
      children: [jsx("div", {
        className: "header",
        children: "Detailed solution:"
      }), jsx(Content, {
        className: "solution",
        block: true,
        html: collaborator_solutions.map(s => s['content_html']).join('')
      })]
    });
  }
  return jsxs(StyledQuestion, {
    className: classes,
    "data-question-number": questionNumber,
    "data-test-id": "question",
    children: [jsx(QuestionHtml, {
      type: "context",
      html: context,
      hidden: hidePreambles
    }), jsx(QuestionHtml, {
      type: "stimulus",
      html: stimulus_html,
      hidden: hidePreambles
    }), jsx(QuestionHtml, {
      type: "stem",
      html: stem_html,
      hidden: hidePreambles,
      questionNumber: questionNumber
    }), props.children, jsx(AnswersTable, _extends({}, props, {
      onChangeAnswer: props.onChange,
      hasCorrectAnswer: hasCorrectAnswer
    })), solution, props.displayFormats ? jsx(FormatsListing, {
      formats: formats
    }) : undefined, exerciseUid]
  });
};
const QuestionHtml = props => {
  const {
    html = '',
    type,
    hidden,
    questionNumber
  } = props;
  if (hidden === true || !(html.length > 0)) {
    return null;
  }
  return jsx(Content, {
    html: html,
    "data-question-number": questionNumber,
    className: `question-${type}`,
    block: true
  });
};
const FormatsListing = ({
  formats: _formats = []
}) => {
  return jsxs("div", {
    className: "formats-listing",
    children: [jsx("div", {
      className: "header",
      children: "Formats:"
    }), _formats.map((format, i) => jsx("span", {
      children: format
    }, i))]
  });
};

const _excluded$2 = ["disabled", "isWaiting", "waitingText", "children"];
let _$4 = t => t,
  _t$4;
const StyledButton = styled.button(_t$4 || (_t$4 = _$4`
  background-color: ${0};
  color: ${0};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: ${0}
    }
    &:active {
      background: ${0}
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`), colors.button.background, colors.palette.white, colors.button.backgroundHover, colors.button.backgroundActive);
const Button = props => {
  const {
      disabled,
      isWaiting,
      waitingText,
      children
    } = props,
    otherProps = _objectWithoutPropertiesLoose(props, _excluded$2);
  return jsx(StyledButton, _extends({}, otherProps, {
    disabled: isWaiting || disabled,
    children: isWaiting && waitingText || children
  }));
};

let _$3 = t => t,
  _t$3,
  _t2$2;
const StepCardFooter = styled.div(_t$3 || (_t$3 = _$3`
    ${0}
    border-top: 1px solid ${0};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 2rem;

    > * {
        flex-grow: 1;
    }

    button {
        width: 160px;
        height: 48px;
    }

    .points {
        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        .attempts-left {
            color: #F36B32;
        }
    }

    .controls {
        display: flex;
        flex-flow: column wrap-reverse;
        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        button + button {
            margin: 0.8rem 0 0 0;
        }
    }

    ${0}
`), mixins.stepCardPadding(), colors.palette.pale, breakpoints.desktop(_t2$2 || (_t2$2 = _$3`
        padding: 32px 140px;
        flex-wrap: nowrap;

        .points {
            max-width: 400px;
        }

        .controls {
            flex-flow: row;
            justify-content: flex-end;

            button + button {
                margin: 0 0 0 0.8rem;
            }
        }
    `)));

let _$2 = t => t,
  _t$2,
  _t2$1,
  _t3$1,
  _t4$1,
  _t5$1,
  _t6$1;
const TextAreaErrorStyle = css(_t$2 || (_t$2 = _$2`
  background-color: #f5e9ea;
`));
const StyledFreeResponse = styled.div(_t2$1 || (_t2$1 = _$2`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`), mixins.stepCardPadding());
const SyledQuestionStem = styled.div(_t3$1 || (_t3$1 = _$2`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`));
const InfoRow = styled.div(_t4$1 || (_t4$1 = _$2`
  margin: 8px 0;
  display: flex;
  justify-content: ${0};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${0};
  }

  div > span {
    font-size: 12px;
    line-height: 16px;

    + span {
      margin-left: 1rem;
    }
  }

  .last-submitted + * {
    margin-top: 0.8rem;
  }

  color: ${0};
`), props => props.hasChildren ? 'space-between' : 'flex-end', colors.palette.danger, colors.palette.neutralThin);
const FreeResponseTextArea = styled.textarea(_t5$1 || (_t5$1 = _$2`
  display: block;
  font-family: inherit;
  font-size: 1.8rem;
  line-height: 3rem;
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${0};
  color: ${0};
  ${0};
  ${0}
  background-color: ${0};
`), colors.palette.neutral, colors.palette.neutralDark, props => props.isOverWordLimit && TextAreaErrorStyle, props => props.isOverWordLimit && css(_t6$1 || (_t6$1 = _$2`
    border: 2px solid ${0};
  `), colors.palette.danger), props => props.readOnly && colors.palette.neutralCool);
FreeResponseTextArea.displayName = 'OSFreeResponseTextArea';
const RevertButton = props => jsx(Button, _extends({}, props, {
  children: "Cancel"
}));
const FreeResponseInput = props => {
  const {
    availablePoints,
    cancelHandler,
    defaultValue,
    infoRowChildren,
    isSubmitDisabled,
    pointsChildren,
    question,
    questionNumber,
    saveHandler,
    submitBtnLabel,
    textHasChanged,
    wordLimit
  } = props;
  const isOverWordLimit = countWords(defaultValue) > wordLimit;
  const questionProps = {};
  if (questionNumber) {
    questionProps['data-question-number'] = questionNumber;
  }
  return jsxs(StyledFreeResponse, {
    "data-test-id": "student-free-response",
    children: [jsxs("div", {
      className: "step-card-body",
      children: [jsx(SyledQuestionStem, _extends({}, questionProps, {
        children: question.stem_html && jsx(QuestionHtml, {
          type: "stem",
          html: question.stem_html,
          hidden: false
        })
      })), jsx(FreeResponseTextArea, _extends({}, props, {
        isOverWordLimit: isOverWordLimit,
        "data-test-id": "free-response-box",
        placeholder: "Enter your response...",
        "aria-label": "question response text box"
      })), jsxs(InfoRow, {
        hasChildren: !!infoRowChildren,
        children: [infoRowChildren, jsxs("div", {
          children: [jsxs("span", {
            children: [countWords(defaultValue), " words"]
          }), isOverWordLimit && jsxs("span", {
            className: "word-limit-error-info",
            children: ["Maximum ", wordLimit, " words"]
          })]
        })]
      })]
    }), jsxs(StepCardFooter, {
      children: [jsxs("div", {
        className: "points",
        children: [jsxs("strong", {
          children: ["Points: ", availablePoints]
        }), pointsChildren]
      }), jsxs("div", {
        className: "controls",
        children: [jsx(RevertButton, {
          disabled: !textHasChanged,
          onClick: cancelHandler
        }), jsx(Button, {
          "data-test-id": "submit-answer-btn",
          disabled: isSubmitDisabled || isOverWordLimit,
          onClick: saveHandler,
          children: submitBtnLabel
        })]
      })]
    })]
  });
};
FreeResponseInput.displayName = 'OSFreeResponse';

const _excluded$1 = ["questionNumber", "numberOfQuestions", "stepType", "isHomework", "availablePoints", "unpadded", "className", "children", "questionId", "multipartBadge", "leftHeaderChildren", "rightHeaderChildren", "headerTitleChildren"],
  _excluded2 = ["step", "questionNumber", "numberOfQuestions", "children", "className"];
let _$1 = t => t,
  _t$1,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7,
  _t8,
  _t9,
  _t10,
  _t11,
  _t12;
const InnerStepCard = styled.div(_t$1 || (_t$1 = _$1`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  border-radius: 0.25rem;
  margin: 0 auto 5rem auto;
  border: 1px solid ${0};
  border-radius: 0.25rem;
  background-color: white;

  ${0}
`), colors.palette.light, breakpoints.desktop(_t2 || (_t2 = _$1`
    max-width: 1000px;
    min-width: 750px;
  `)));
const OuterStepCard = styled.div(_t3 || (_t3 = _$1`
  padding: 2rem;

  ${0}
`), breakpoints.tablet(_t4 || (_t4 = _$1`
    padding: 0;
  `)));
const StepCardHeader = styled.div(_t5 || (_t5 = _$1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${0};
  font-size: 1.8rem;
  line-height: 3rem;

  div {
    display: flex;
    align-items: center;
  }

  div.question-info {
    font-weight: bold;

    .ox-icon-lock {
        margin-right: 1rem;
    }
  }

  .num-questions, .points, .separator {
      display: none;
  }

  .exercise-id, .separator {
      font-weight: normal;
  }

  .separator {
      margin: 0 1rem;
  }

  .exercise-id {
      height: 28px; // Fix baseline issue
  }

  button {
    color: ${0};
  }

  .openstax-exercise-badges {
      margin: 0;
      line-height: 2rem;
      svg {
          display: block;
          &:not(.interactive) {
              margin: 0 0 0 6px !important;
          }
      }
  }

  ${0}

    /*
    1. Show the arrows to move to previous and next question.
    2. Show the number of questions.
    3. Override box-shadow of icons when turned into a button.
    */
    ${0}

  ${0}
`), colors.card.background, colors.palette.gray, breakpoints.desktop(_t6 || (_t6 = _$1`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)), breakpoints.tablet(_t7 || (_t7 = _$1`
        font-size: 1.6rem;
        line-height: 2.5rem;

        svg.ox-icon {
            display: inherit;
            margin: 0;
        }
        button.ox-icon-angle-left {
            margin-right: ${0};
        }
        button.ox-icon-angle-right {
            margin-left: ${0};
        }
        .openstax-exercise-badges svg {
            display: none;
        }
        .num-questions, points {
            display: inherit;
        }

        .exercise-id {
            display: none;
        }

        button[class^='ox-icon-angle']:hover {
            box-shadow: none;
        }
  `), breakpoints.margins.tablet, breakpoints.margins.tablet), breakpoints.mobile(_t8 || (_t8 = _$1`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `), breakpoints.margins.mobile, breakpoints.margins.mobile));
StepCardHeader.displayName = 'StepCardHeader';
const StepCardQuestion = styled.div(_t9 || (_t9 = _$1`
  .step-card-body {
    ${0}
  }

    & + div .step-card-body {
        padding-top: 0;
    }

    &.exercise-context, &.exercise-stimulus, &.exercise-stem {
        padding-bottom: 0;
    }

    ${0}

    .reading-step & {
        padding: 0;
    }

    ${0}

    ${0}

    &&& {
        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }
    }
`), mixins.stepCardPadding(), breakpoints.only.mobile(_t10 || (_t10 = _$1`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)), breakpoints.desktop(_t11 || (_t11 = _$1`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)), breakpoints.mobile(_t12 || (_t12 = _$1`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `), breakpoints.margins.mobile));
const StepCard = _ref => {
  let {
      questionNumber,
      numberOfQuestions,
      stepType,
      isHomework,
      availablePoints,
      unpadded,
      // currently does nothing; may need to restore if this causes tutor stepcard regression
      className,
      children,
      questionId,
      multipartBadge,
      leftHeaderChildren,
      rightHeaderChildren,
      headerTitleChildren
    } = _ref,
    otherProps = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return jsxs(OuterStepCard, _extends({}, otherProps, {
    children: [multipartBadge, jsxs(InnerStepCard, {
      className: className,
      children: [questionNumber && isHomework && stepType === 'exercise' && jsxs(StepCardHeader, {
        children: [jsxs("div", {
          children: [leftHeaderChildren, jsxs("div", {
            className: "question-info",
            children: [headerTitleChildren, jsxs("span", {
              children: ["Question ", questionNumber]
            }), jsxs("span", {
              className: "num-questions",
              children: ["\u00A0/ ", numberOfQuestions]
            }), jsx("span", {
              className: "separator",
              children: "|"
            }), jsxs("span", {
              className: "question-id",
              children: ["ID: ", questionId]
            })]
          })]
        }), jsxs("div", {
          children: [jsxs("div", {
            className: "points",
            children: [availablePoints, " Points"]
          }), rightHeaderChildren]
        })]
      }), jsx(StepCardQuestion, {
        unpadded: unpadded,
        children: children
      })]
    })]
  }));
};
StepCard.displayName = 'OSStepCard';
const TaskStepCard = _ref2 => {
  let {
      step,
      questionNumber,
      numberOfQuestions,
      children,
      className
    } = _ref2,
    otherProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return jsx(StepCard, _extends({}, otherProps, {
    unpadded: true,
    questionNumber: questionNumber,
    numberOfQuestions: numberOfQuestions,
    stepType: step.type,
    isHomework: step.task.type === 'homework',
    "data-task-step-id": step.id,
    availablePoints: step.available_points,
    className: cn(`${step.type}-step`, className),
    questionId: step.uid,
    children: children
  }));
};
TaskStepCard.displayName = 'OSTaskStepCard';

const AttemptsRemaining = ({
  count
}) => {
  return jsxs("div", {
    children: [count, " attempt", count === 1 ? '' : 's', " left"]
  });
};
const PublishedComments = ({
  published_comments
}) => {
  if (!published_comments) {
    return null;
  }
  return jsxs("div", {
    children: [jsx("strong", {
      children: "Feedback:"
    }), " ", published_comments]
  });
};
const SaveButton = props => jsx(Button, _extends({}, props, {
  waitingText: "Saving\u2026",
  isWaiting: props.isWaiting,
  "data-test-id": "submit-answer-btn",
  children: props.attempt_number == 0 ? 'Submit' : 'Re-submit'
}));
const NextButton = props => {
  return jsx(Button, {
    onClick: props.onNextStep,
    "data-test-id": "continue-btn",
    children: props.canUpdateCurrentStep ? 'Continue' : 'Next'
  });
};
const FreeResponseReview = ({
  free_response
}) => {
  if (!free_response) {
    return null;
  }
  return jsx(Fragment, {
    children: jsx("div", {
      className: "free-response",
      children: free_response
    })
  });
};
const ExerciseQuestion = props => {
  const {
    question,
    task,
    answer_id_order,
    onAnswerChange,
    feedback_html,
    correct_answer_feedback_html,
    is_completed,
    correct_answer_id,
    incorrectAnswerId,
    choicesEnabled,
    questionNumber,
    answerId,
    hasMultipleAttempts,
    attempts_remaining,
    published_comments,
    detailedSolution,
    canAnswer,
    needsSaved,
    attempt_number,
    apiIsPending,
    onAnswerSave,
    onNextStep,
    canUpdateCurrentStep,
    displaySolution,
    available_points,
    free_response
  } = props;
  return jsxs("div", {
    "data-test-id": "student-exercise-question",
    children: [jsx(Question, {
      task: task,
      question: question,
      answerIdOrder: answer_id_order,
      choicesEnabled: choicesEnabled,
      answer_id: answerId,
      questionNumber: questionNumber,
      onChange: onAnswerChange,
      feedback_html: feedback_html,
      correct_answer_feedback_html: correct_answer_feedback_html,
      correct_answer_id: is_completed ? correct_answer_id : null,
      incorrectAnswerId: incorrectAnswerId,
      className: "step-card-body",
      hideAnswers: false,
      displayFormats: false,
      displaySolution: displaySolution,
      children: jsx(FreeResponseReview, {
        free_response: free_response
      })
    }), jsxs(StepCardFooter, {
      className: "step-card-footer",
      children: [jsxs("div", {
        className: "points",
        children: [jsxs("strong", {
          children: ["Points: ", available_points]
        }), jsx("span", {
          className: "attempts-left",
          children: hasMultipleAttempts && attempts_remaining > 0 && jsx(AttemptsRemaining, {
            count: attempts_remaining
          })
        }), jsx(PublishedComments, {
          published_comments: published_comments
        }), detailedSolution && jsxs("div", {
          children: [jsx("strong", {
            children: "Detailed solution:"
          }), " ", jsx(Content, {
            html: detailedSolution
          })]
        })]
      }), jsx("div", {
        className: "controls",
        children: canAnswer && needsSaved ? jsx(SaveButton, {
          disabled: apiIsPending || !answerId,
          isWaiting: apiIsPending,
          attempt_number: attempt_number,
          onClick: onAnswerSave
        }) : jsx(NextButton, {
          onNextStep: onNextStep,
          canUpdateCurrentStep: canUpdateCurrentStep
        })
      })]
    })]
  });
};

const _excluded = ["numberOfQuestions", "questionNumber", "step", "exercise", "canAnswer", "needsSaved"];
let _ = t => t,
  _t;
const StyledTaskStepCard = styled(TaskStepCard)(_t || (_t = _`
  font-size: 1.8rem;
  line-height: 3rem;
`));
const Preamble = ({
  exercise
}) => {
  return jsxs(Fragment, {
    children: [exercise.context && jsx(Content, {
      className: "step-card-body exercise-context",
      block: true,
      html: exercise.context
    }), exercise.stimulus_html && jsx(Content, {
      className: "step-card-body exercise-stimulus",
      block: true,
      html: exercise.stimulus_html
    })]
  });
};
const Exercise = _ref => {
  let {
      numberOfQuestions,
      questionNumber,
      step,
      exercise,
      canAnswer,
      needsSaved
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return jsxs(StyledTaskStepCard, {
    step: step,
    questionNumber: questionNumber,
    numberOfQuestions: numberOfQuestions,
    children: [jsx(Preamble, {
      exercise: exercise
    }), exercise.questions.map(q => /*#__PURE__*/createElement(ExerciseQuestion, _extends({}, props, step, {
      exercise_uid: exercise.uid,
      key: q.id,
      question: q,
      questionNumber: questionNumber,
      choicesEnabled: canAnswer,
      canAnswer: canAnswer,
      needsSaved: needsSaved,
      canUpdateCurrentStep: canAnswer,
      displaySolution: true,
      answerId: step.answer_id
    })))]
  });
};

export { Answer, AnswersTable, Exercise, FreeResponseInput, FreeResponseTextArea, InnerStepCard, OuterStepCard, Question, QuestionHtml, StepCard, TaskStepCard };
//# sourceMappingURL=index.modern.mjs.map
