var jsxRuntime = require('react/jsx-runtime');
var cn = require('classnames');
var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cn__default = /*#__PURE__*/_interopDefaultLegacy(cn);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
var MAX_CORRECTNESS = '1.0';
var isAnswerCorrect = function isAnswerCorrect(answer, correctAnswerId) {
  // if answer does not have an id, check the isCorrect property.
  if (!(answer.id || correctAnswerId)) {
    return answer.isCorrect;
  }
  var isCorrect = answer.id === correctAnswerId;
  if (answer.correctness != null) {
    isCorrect = answer.correctness === MAX_CORRECTNESS;
  }
  return isCorrect;
};
var isAnswerIncorrect = function isAnswerIncorrect(answer, incorrectAnswerId) {
  // Allow multiple attempts to show incorrectness without the correct_answer_id
  return answer.id === incorrectAnswerId;
};
var isAnswerChecked = function isAnswerChecked(answer, chosenAnswer) {
  return Boolean((chosenAnswer || []).find(function (a) {
    return a == answer.id;
  }));
};
function countWords(text) {
  var trimmedText = text.trim();
  //https://css-tricks.com/build-word-counter-app/
  var words = trimmedText.match(/\b[-?(\w+)?]+\b/gi);
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
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var _excluded$3 = ["html", "component", "block"];
var Content = function Content(_ref) {
  var html = _ref.html,
    component = _ref.component,
    _ref$block = _ref.block,
    block = _ref$block === void 0 ? false : _ref$block,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  if (component !== undefined) {
    return /*#__PURE__*/React__default["default"].cloneElement(component, _extends({
      html: html
    }, props));
  }
  if (block) {
    return jsxRuntime.jsx("div", _extends({
      dangerouslySetInnerHTML: {
        __html: html
      }
    }, props));
  } else {
    return jsxRuntime.jsx("span", _extends({
      dangerouslySetInnerHTML: {
        __html: html
      }
    }, props));
  }
};

var SimpleFeedback = function SimpleFeedback(props) {
  return jsxRuntime.jsx("aside", {
    children: jsxRuntime.jsx(Content, {
      component: props.contentRenderer,
      className: cn__default["default"]('question-feedback-content', 'has-html', props.className),
      html: props.children,
      block: true
    })
  });
};
var Feedback = function Feedback(props) {
  var position = props.position || 'bottom';
  var wrapperClasses = cn__default["default"]('question-feedback', position);
  return jsxRuntime.jsxs("aside", {
    className: wrapperClasses,
    children: [jsxRuntime.jsx("div", {
      className: "arrow",
      "aria-label": "Answer Feedback"
    }), jsxRuntime.jsx(SimpleFeedback, _extends({}, props, {
      children: props.children
    }))]
  });
};

var Answer = function Answer(props) {
  var type = props.type,
    iter = props.iter,
    answer = props.answer,
    disabled = props.disabled,
    onKeyPress = props.onKeyPress,
    qid = props.qid,
    chosenAnswer = props.chosenAnswer,
    correctAnswerId = props.correctAnswerId,
    incorrectAnswerId = props.incorrectAnswerId,
    hasCorrectAnswer = props.hasCorrectAnswer,
    answered_count = props.answered_count,
    contentRenderer = props.contentRenderer,
    show_all_feedback = props.show_all_feedback;
  var body, feedback, selectedCount;
  var isChecked = isAnswerChecked(answer, chosenAnswer);
  var isCorrect = isAnswerCorrect(answer, correctAnswerId);
  var isIncorrect = isAnswerIncorrect(answer, incorrectAnswerId);
  var correctIncorrectIcon = jsxRuntime.jsx("div", {
    className: "correct-incorrect",
    children: isCorrect && props.correctIncorrectIcon
  });
  var classes = cn__default["default"]('answers-answer', {
    'disabled': disabled,
    'answer-checked': isChecked,
    'answer-correct': isCorrect && type !== 'student-mpp',
    'answer-incorrect': incorrectAnswerId && isAnswerIncorrect(answer, incorrectAnswerId)
  });
  var ariaLabel = (isChecked ? 'Selected ' : '') + "Choice " + ALPHABET[iter];
  // somewhat misleading - this means that there is a correct answer,
  // not necessarily that this answer is correct
  if (hasCorrectAnswer) {
    ariaLabel += "(" + (isCorrect ? 'Correct' : 'Incorrect') + " Answer)";
  }
  ariaLabel += ':';
  var onChangeAnswer, radioBox;
  if (!hasCorrectAnswer && type !== 'teacher-review' && type !== 'teacher-preview' && type !== 'student-mpp') {
    onChangeAnswer = props.onChangeAnswer;
  }
  if (onChangeAnswer) {
    radioBox = jsxRuntime.jsx("input", {
      type: "radio",
      className: "answer-input-box",
      checked: isChecked,
      id: qid + "-option-" + iter,
      name: qid + "-options",
      onChange: onChangeAnswer,
      disabled: disabled
    });
  }
  if (show_all_feedback && answer.feedback_html) {
    feedback = jsxRuntime.jsx(SimpleFeedback, {
      contentRenderer: contentRenderer,
      children: answer.feedback_html
    }, "question-mc-feedback");
  }
  if (type === 'teacher-review') {
    var percent = 0;
    if (answer.selected_count && answered_count) {
      percent = Math.round(answer.selected_count / answered_count * 100);
    }
    selectedCount = jsxRuntime.jsx("span", {
      className: "selected-count",
      "data-percent": "" + percent,
      children: answer.selected_count
    });
    body = jsxRuntime.jsxs("div", {
      className: "review-wrapper",
      children: [jsxRuntime.jsxs("div", {
        className: cn__default["default"]('review-count', {
          'green': isCorrect,
          'red': !isCorrect
        }),
        children: [selectedCount, jsxRuntime.jsx("span", {
          className: cn__default["default"]('letter', {
            'green': isCorrect,
            'red': !isCorrect
          }),
          children: ALPHABET[iter]
        })]
      }), jsxRuntime.jsxs("div", {
        className: "answer-answer",
        children: [jsxRuntime.jsx(Content, {
          className: "answer-content",
          component: contentRenderer,
          html: answer.content_html
        }), feedback]
      })]
    });
  } else {
    body = jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [type === 'teacher-preview' && correctIncorrectIcon, selectedCount, radioBox, jsxRuntime.jsxs("label", {
        onKeyPress: onKeyPress,
        htmlFor: qid + "-option-" + iter,
        className: "answer-label",
        children: [jsxRuntime.jsx("span", {
          className: "answer-letter-wrapper",
          children: jsxRuntime.jsx("button", {
            onClick: onChangeAnswer,
            "aria-label": ariaLabel,
            className: "answer-letter",
            disabled: disabled || isIncorrect,
            "data-test-id": "answer-choice-" + ALPHABET[iter],
            children: ALPHABET[iter]
          })
        }), jsxRuntime.jsxs("div", {
          className: "answer-answer",
          children: [jsxRuntime.jsx(Content, {
            className: "answer-content",
            component: contentRenderer,
            html: answer.content_html
          }), feedback]
        })]
      })]
    });
  }
  return jsxRuntime.jsx("div", {
    className: "openstax-answer",
    children: jsxRuntime.jsx("section", {
      role: "region",
      className: classes,
      children: body
    })
  });
};
Answer.displayName = 'OSAnswer';

var defaultAnswerType = 'student';

var AnswersTable = function AnswersTable(props) {
  var idCounter = 0;
  var question = props.question,
    hideAnswers = props.hideAnswers,
    _props$type = props.type,
    type = _props$type === void 0 ? defaultAnswerType : _props$type,
    answered_count = props.answered_count,
    choicesEnabled = props.choicesEnabled,
    correct_answer_id = props.correct_answer_id,
    incorrectAnswerId = props.incorrectAnswerId,
    answer_id = props.answer_id,
    feedback_html = props.feedback_html,
    correct_answer_feedback_html = props.correct_answer_feedback_html,
    _props$show_all_feedb = props.show_all_feedback,
    show_all_feedback = _props$show_all_feedb === void 0 ? false : _props$show_all_feedb,
    hasCorrectAnswer = props.hasCorrectAnswer,
    onChangeAnswer = props.onChangeAnswer,
    onKeyPress = props.onKeyPress,
    answerIdOrder = props.answerIdOrder,
    instructions = props.instructions;
  if (hideAnswers) {
    return null;
  }
  var id = question.id;
  var feedback = [];
  var chosenAnswer = [answer_id];
  var sortedAnswersByIdOrder = function sortedAnswersByIdOrder(idOrder) {
    var answers = question.answers;
    return answers.slice().sort(function (a, b) {
      return idOrder.indexOf(a.id) - idOrder.indexOf(b.id);
    });
  };
  var questionAnswerProps = {
    qid: id || "auto-" + idCounter++,
    correctAnswerId: correct_answer_id,
    incorrectAnswerId: incorrectAnswerId,
    hasCorrectAnswer: hasCorrectAnswer,
    chosenAnswer: chosenAnswer,
    onChangeAnswer: onChangeAnswer,
    type: type,
    answered_count: answered_count,
    disabled: !choicesEnabled,
    show_all_feedback: show_all_feedback,
    onKeyPress: onKeyPress
  };
  var answers = answerIdOrder ? sortedAnswersByIdOrder(answerIdOrder) : question.answers;
  var answersHtml = answers.map(function (answer, i) {
    var additionalProps = {
      answer: answer,
      iter: i,
      key: questionAnswerProps.qid + "-option-" + i
    };
    var answerProps = Object.assign({}, additionalProps, questionAnswerProps);
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
    return jsxRuntime.jsx(Answer, _extends({}, answerProps));
  });
  feedback.forEach(function (item, i) {
    var spliceIndex = item.index + i + 1;
    answersHtml.splice(spliceIndex, 0, jsxRuntime.jsx(Feedback, {
      contentRenderer: props.contentRenderer,
      children: item.html
    }, spliceIndex));
  });
  return jsxRuntime.jsxs("div", {
    className: "answers-table",
    children: [instructions, answersHtml]
  });
};

var _templateObject$6, _templateObject2$3, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6$2, _templateObject7$1, _templateObject8$1, _templateObject9$1, _templateObject10$1, _templateObject11$1, _templateObject12$1, _templateObject13;
var palette = {
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
var colors = {
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
var layouts = {
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
var BREAKPOINTS = {
  mobile: 600,
  tablet: 999,
  desktop: 1000,
  large: 1600
};
var breakpoints = {
  mobile: function mobile() {
    return styled.css(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["@media(max-width: ", "px) { ", " }"])), BREAKPOINTS.mobile, styled.css.apply(void 0, [].slice.call(arguments)));
  },
  tablet: function tablet() {
    return styled.css(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["@media(max-width: ", "px) { ", " }"])), BREAKPOINTS.tablet, styled.css.apply(void 0, [].slice.call(arguments)));
  },
  desktop: function desktop() {
    return styled.css(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteralLoose(["@media(min-width: ", "px) { ", " }"])), BREAKPOINTS.desktop, styled.css.apply(void 0, [].slice.call(arguments)));
  },
  only: {
    mobile: function mobile() {
      return styled.css(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteralLoose(["@media(max-width: ", "px) { ", " }"])), BREAKPOINTS.mobile, styled.css.apply(void 0, [].slice.call(arguments)));
    }
  },
  margins: {
    mobile: '8px',
    tablet: '24px'
  }
};
var transitions = {
  answer: "0.1s ease-in-out"
};
var mixins = {
  answer: function answer() {
    return styled.css(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteralLoose(["\n    .answer-label {\n      display: flex;\n    }\n    color: ", ";\n    .answer-letter {\n      width: ", ";\n      height: ", ";\n      min-width: ", ";\n      min-height: ", ";\n      border-radius: calc(", " / 2);\n      border-width: 2px;\n      border-style: solid;\n      border-color: #c6c6c6;\n      color: ", ";\n      transition: color ", ", border-color ", ", background-color ", ";\n      background-color: ", ";\n    }\n  "])), colors.answer.label.color, layouts.answer.bubbleSize, layouts.answer.bubbleSize, layouts.answer.bubbleSize, layouts.answer.bubbleSize, layouts.answer.bubbleSize, colors.answer.label.colorHover, transitions.answer, transitions.answer, transitions.answer, colors.palette.white);
  },
  answerColor: function answerColor(values) {
    return styled.css(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    .answer-letter {\n       border-color: ", ";\n       background-color: ", ";\n       color: ", ";\n    }\n  "])), values.color, values.color, values.background, colors.palette.white);
  },
  answerChecked: function answerChecked() {
    return mixins.answerColor({
      color: colors.answer.checked,
      background: colors.answer.checked
    });
  },
  answerCorrect: function answerCorrect() {
    return mixins.answerColor(colors.answer.correct);
  },
  answerIncorrect: function answerIncorrect() {
    return mixins.answerColor(colors.answer.incorrect);
  },
  answerHover: function answerHover() {
    return styled.css(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    .answer-letter {\n      border-color: ", ";\n    }\n  "])), colors.answer.label.colorHover, colors.answer.label.colorSelected);
  },
  answerCorrectText: function answerCorrectText() {
    return styled.css(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteralLoose(["\n    content: 'correct answer';\n    color: ", ";\n    margin-left: calc(-1.25 * ", ");\n    width: calc(1.25 * ", ");\n    text-align: center;\n    font-size: 1.2rem;\n    // em used here for line-height for compatibility with IE\n    // http://caniuse.com/#feat=rem -- rem ignored in pseudo elements\n    line-height: 1em;\n    margin-top: 0.8rem;\n  "])), colors.answer.label.color, layouts.answer.bubbleSize, layouts.answer.bubbleSize);
  },
  answerCorrectAnswer: function answerCorrectAnswer() {
    return styled.css(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    .answer-letter {\n      border-color: ", ";\n      color: ", ";\n    }\n    &::before {\n     ", "\n      @media screen and (max-width: ", "px) {\n        display: none;\n      }\n    }\n    @media screen and (max-width:  ", "px) {\n      .answer-letter-wrapper {\n        display: flex;\n        flex-direction: column;\n        &::after {\n          ", "\n          width: $openstax-answer-bubble-size !important;\n          margin-left: 0;\n        }\n      }\n    }\n  "])), colors.answer.correct.color, colors.answer.correct.color, colors.answer.correct.color, mixins.answerCorrectText(), BREAKPOINTS.tablet, BREAKPOINTS.tablet, mixins.answerCorrectText());
  },
  resetText: function resetText() {
    return styled.css(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteralLoose(["\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.6;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    white-space: normal;\n    line-break: auto;\n  "])));
  },
  stepCardPadding: function stepCardPadding() {
    return styled.css(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteralLoose(["\n    padding: 48px 140px;\n\n    ", "\n\n    ", "\n  "])), breakpoints.tablet(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteralLoose(["\n      padding: ", " ", ";\n    "])), breakpoints.margins.tablet, breakpoints.margins.tablet), breakpoints.mobile(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n      padding: calc(", " * 2) ", ";\n    "])), breakpoints.margins.mobile, breakpoints.margins.mobile));
  }
};

var _templateObject$5;
var StyledQuestion = styled__default["default"].div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n&.step-card-body {\n  ", ";\n}\n\n&.openstax-question {\n  font-size: 2rem;\n\n  .detailed-solution {\n    margin-bottom: 1rem;\n    .header {\n      display: inline;\n      margin-right: 0.5rem;\n      color: #5e6062;\n      font-weight: bold;\n      flex-basis: 0;\n    }\n    .solution {\n      display: inline;\n      color: #6f6f6f;\n    }\n  }\n\n  img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n  }\n\n  .question-stem {\n    margin-bottom: 0;\n  }\n\n  .answers-table {\n    margin-bottom: 20px;\n    font-size: 17px;\n    line-height: 25px;\n  }\n\n  .instructions {\n    font-size: 1.4rem;\n    font-style: italic;\n    margin-top: 10px;\n    color: ", ";\n    margin: 0;\n\n    i {\n      margin-left: 5px;\n    }\n\n    .text-info {\n      color: ", ";\n      padding-left: 5px;\n      cursor: pointer;\n      font-style: normal;\n    }\n  }\n\n  .multiple-choice-prompt {\n    font-weight: 600;\n  }\n\n  .free-response {\n    padding: ", " ", ";\n    margin: ", " 0 ", " ", ";\n    border-left: ", " solid ", ";\n    font-style: italic;\n  }\n\n  &:not(.openstax-question-preview) {\n    .answers-answer {\n      width: initial;\n      &:not(.disabled){\n        .answer-label:focus{\n          background-color: ", ";\n        }\n      }\n      ", ";\n    }\n\n    .answer-answer {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      margin-left: ", ";\n      * {\n        margin: 0;\n      }\n    }\n\n    .answer-letter {\n      text-align: center;\n      padding: 0;\n    }\n\n\n    .answer-label {\n      font-weight: normal;\n      width: 100%;\n      padding: ", " 0 0 0;\n      margin: 0;\n\n      transition: color ", ";\n    }\n\n    // a selectable answer\n    .answer-input-box:not([disabled]) ~ .answer-label {\n      cursor: pointer;\n\n      &:hover {\n        ", "\n      }\n    }\n\n    // a selected answer\n    &:not(.has-correct-answer) {\n      .answer-input-box {\n        display: none;\n\n        &:checked {\n          + .answer-label,\n          + .answer-label:hover {\n            ", ";\n          }\n        }\n      }\n\n      .answer-checked{\n        .answer-label {\n          ", ";\n        }\n      }\n    }\n\n    // answer that has been checked\n    &.has-correct-answer {\n      .answer-checked {\n        &:not(.answer-correct) {\n          .answer-label {\n            ", ";\n          }\n        }\n\n        &.answer-correct {\n          .answer-label {\n            ", ";\n          }\n        }\n      }\n\n      .answer-correct:not(.answer-checked) {\n        .answer-label {\n          ", "\n        }\n      }\n    }\n\n    &.has-incorrect-answer {\n      .answer-incorrect, .answer-checked.answer-incorrect {\n        .answer-label {\n          ", "\n        }\n      }\n    }\n\n    .question-feedback {\n      ", "\n\n      z-index: 1;\n      position: relative;\n      border: ", " solid ", ";\n      background-color: ", ";\n      background-clip: padding-box;\n      border-radius: 0.3rem;\n      max-width: ", ";\n      margin: calc(", " - 5px) 0 ", " calc(-1 * (2 * ", "));\n      box-shadow: 10px 0px 10px rgba(0, 0, 0, .25);\n      color: ", ";\n      font-size: 1.4rem;\n      font-style: italic;\n\n      .arrow {\n        position: absolute;\n        display: block;\n        width: ", ";\n        height: ", ";\n        margin-left: 30px;\n        top: calc((", " + ", ") * -1);\n\n        &::before,\n        &::after {\n          position: absolute;\n          display: block;\n          content: \"\";\n          border-color: transparent;\n          border-style: solid;\n          border-width: 0 calc(", " / 2) ", " calc(", " / 2);\n        }\n        &::before {\n          top: 0;\n          border-bottom-color: ", ";\n        }\n        &::after {\n          top: ", ";\n          border-bottom-color: ", ";\n        }\n      }\n\n      .question-feedback-content {\n        padding: ", " ", ";\n      }\n    }\n  }\n\n  .openstax-answer {\n    border-top: 1px solid #d5d5d5;\n    margin: 10px 0;\n    padding: 10px 0;\n  }\n}\n"])), mixins.stepCardPadding(), colors.palette.neutral, colors.palette.neutralLightBlue, layouts.answer.horizontalSpacing, layouts.answer.horizontalBuffer, layouts.answer.verticalSpacing, layouts.answer.horizontalSpacing, layouts.answer.verticalSpacing, layouts.answer.horizontalSpacing, colors.palette.neutralLighter, colors.palette.neutralLightest, mixins.answer(), layouts.answer.horizontalSpacing, layouts.answer.verticalSpacing, transitions.answer, mixins.answerHover(), mixins.answerChecked(), mixins.answerChecked(), mixins.answerIncorrect(), mixins.answerCorrect(), mixins.answerCorrectAnswer(), mixins.answerIncorrect(), mixins.resetText(), layouts.answer.feedback.popover.borderWidth, colors.answer.feedback.popover.borderColor, colors.palette.white, layouts.answer.feedback.popover.maxWidth, layouts.answer.feedback.arrow.height, layouts.answer.horizontalSpacing, layouts.answer.horizontalSpacing, colors.palette.neutral, layouts.answer.feedback.arrow.width, layouts.answer.feedback.arrow.height, layouts.answer.feedback.arrow.height, layouts.answer.feedback.popover.borderWidth, layouts.answer.feedback.arrow.width, layouts.answer.feedback.arrow.height, layouts.answer.feedback.arrow.width, colors.answer.feedback.popover.borderColor, layouts.answer.feedback.popover.borderWidth, colors.palette.white, layouts.answer.feedback.popover.verticalSpacing, layouts.answer.feedback.popover.horizontalSpacing);
var Question = function Question(props) {
  var exerciseUid, solution;
  var question = props.question,
    correct_answer_id = props.correct_answer_id,
    incorrectAnswerId = props.incorrectAnswerId,
    exercise_uid = props.exercise_uid,
    className = props.className,
    questionNumber = props.questionNumber,
    context = props.context,
    task = props.task,
    hidePreambles = props.hidePreambles;
  var stem_html = question.stem_html,
    _question$collaborato = question.collaborator_solutions,
    collaborator_solutions = _question$collaborato === void 0 ? [] : _question$collaborato,
    formats = question.formats,
    stimulus_html = question.stimulus_html;
  var hasCorrectAnswer = !!correct_answer_id;
  var hasIncorrectAnswer = !!incorrectAnswerId;
  var taskIsDeleted = task != null ? task.is_deleted : undefined;
  var taskIsHomework = (task != null ? task.type : undefined) === 'homework';
  var classes = cn__default["default"]('openstax-question', className, {
    'has-correct-answer': hasCorrectAnswer && !(taskIsDeleted && taskIsHomework),
    'has-incorrect-answer': hasIncorrectAnswer
  });
  var hasSolution = function hasSolution() {
    var displaySolution = props.displaySolution;
    var _question$collaborato2 = question.collaborator_solutions,
      collaborator_solutions = _question$collaborato2 === void 0 ? [] : _question$collaborato2;
    return displaySolution && collaborator_solutions && collaborator_solutions.find(function (s) {
      return s['content_html'] !== undefined;
    });
  };
  if (exercise_uid != null) {
    exerciseUid = jsxRuntime.jsx("div", {
      className: "exercise-uid",
      children: exercise_uid
    });
  }
  if (hasSolution()) {
    solution = jsxRuntime.jsxs("div", {
      className: "detailed-solution",
      children: [jsxRuntime.jsx("div", {
        className: "header",
        children: "Detailed solution:"
      }), jsxRuntime.jsx(Content, {
        className: "solution",
        block: true,
        html: collaborator_solutions.map(function (s) {
          return s['content_html'];
        }).join('')
      })]
    });
  }
  return jsxRuntime.jsxs(StyledQuestion, {
    className: classes,
    "data-question-number": questionNumber,
    "data-test-id": "question",
    children: [jsxRuntime.jsx(QuestionHtml, {
      type: "context",
      html: context,
      hidden: hidePreambles
    }), jsxRuntime.jsx(QuestionHtml, {
      type: "stimulus",
      html: stimulus_html,
      hidden: hidePreambles
    }), jsxRuntime.jsx(QuestionHtml, {
      type: "stem",
      html: stem_html,
      hidden: hidePreambles,
      questionNumber: questionNumber
    }), props.children, jsxRuntime.jsx(AnswersTable, _extends({}, props, {
      onChangeAnswer: props.onChange,
      hasCorrectAnswer: hasCorrectAnswer
    })), solution, props.displayFormats ? jsxRuntime.jsx(FormatsListing, {
      formats: formats
    }) : undefined, exerciseUid]
  });
};
var QuestionHtml = function QuestionHtml(props) {
  var _props$html = props.html,
    html = _props$html === void 0 ? '' : _props$html,
    type = props.type,
    hidden = props.hidden,
    questionNumber = props.questionNumber;
  if (hidden === true || !(html.length > 0)) {
    return null;
  }
  return jsxRuntime.jsx(Content, {
    html: html,
    "data-question-number": questionNumber,
    className: "question-" + type,
    block: true
  });
};
var FormatsListing = function FormatsListing(_ref) {
  var _ref$formats = _ref.formats,
    formats = _ref$formats === void 0 ? [] : _ref$formats;
  return jsxRuntime.jsxs("div", {
    className: "formats-listing",
    children: [jsxRuntime.jsx("div", {
      className: "header",
      children: "Formats:"
    }), formats.map(function (format, i) {
      return jsxRuntime.jsx("span", {
        children: format
      }, i);
    })]
  });
};

var _excluded$2 = ["disabled", "isWaiting", "waitingText", "children"];
var _templateObject$4;
var StyledButton = styled__default["default"].button(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n\n  &:not([disabled]) {\n    cursor: pointer;\n    &:hover {\n      background: ", "\n    }\n    &:active {\n      background: ", "\n    }\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n"])), colors.button.background, colors.palette.white, colors.button.backgroundHover, colors.button.backgroundActive);
var Button = function Button(props) {
  var disabled = props.disabled,
    isWaiting = props.isWaiting,
    waitingText = props.waitingText,
    children = props.children,
    otherProps = _objectWithoutPropertiesLoose(props, _excluded$2);
  return jsxRuntime.jsx(StyledButton, _extends({}, otherProps, {
    disabled: isWaiting || disabled,
    children: isWaiting && waitingText || children
  }));
};

var _templateObject$3, _templateObject2$2;
var StepCardFooter = styled__default["default"].div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n    ", "\n    border-top: 1px solid ", ";\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-size: 1.4rem;\n    line-height: 2rem;\n\n    > * {\n        flex-grow: 1;\n    }\n\n    button {\n        width: 160px;\n        height: 48px;\n    }\n\n    .points {\n        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        .attempts-left {\n            color: #F36B32;\n        }\n    }\n\n    .controls {\n        display: flex;\n        flex-flow: column wrap-reverse;\n        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        button + button {\n            margin: 0.8rem 0 0 0;\n        }\n    }\n\n    ", "\n"])), mixins.stepCardPadding(), colors.palette.pale, breakpoints.desktop(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n        padding: 32px 140px;\n        flex-wrap: nowrap;\n\n        .points {\n            max-width: 400px;\n        }\n\n        .controls {\n            flex-flow: row;\n            justify-content: flex-end;\n\n            button + button {\n                margin: 0 0 0 0.8rem;\n            }\n        }\n    "]))));

var _templateObject$2, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1;
var TextAreaErrorStyle = styled.css(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  background-color: #f5e9ea;\n"])));
var StyledFreeResponse = styled__default["default"].div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n\n  .step-card-body {\n    ", "\n  }\n"])), mixins.stepCardPadding());
var SyledQuestionStem = styled__default["default"].div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  font-size: 2rem;\n  line-height: 1.68em;\n  position: relative;\n"])));
var InfoRow = styled__default["default"].div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  margin: 8px 0;\n  display: flex;\n  justify-content: ", ";\n  line-height: 1.6rem;\n\n  .word-limit-error-info {\n    color: ", ";\n  }\n\n  div > span {\n    font-size: 12px;\n    line-height: 16px;\n\n    + span {\n      margin-left: 1rem;\n    }\n  }\n\n  .last-submitted + * {\n    margin-top: 0.8rem;\n  }\n\n  color: ", ";\n"])), function (props) {
  return props.hasChildren ? 'space-between' : 'flex-end';
}, colors.palette.danger, colors.palette.neutralThin);
var FreeResponseTextArea = styled__default["default"].textarea(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["\n  display: block;\n  font-family: inherit;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  width: 100%;\n  min-height: 10.5em;\n  line-height: 1.5em;\n  margin: 2.5rem 0 0 0;\n  padding: 0.5em;\n  border: 1px solid ", ";\n  color: ", ";\n  ", ";\n  ", "\n  background-color: ", ";\n"])), colors.palette.neutral, colors.palette.neutralDark, function (props) {
  return props.isOverWordLimit && TextAreaErrorStyle;
}, function (props) {
  return props.isOverWordLimit && styled.css(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteralLoose(["\n    border: 2px solid ", ";\n  "])), colors.palette.danger);
}, function (props) {
  return props.readOnly && colors.palette.neutralCool;
});
FreeResponseTextArea.displayName = 'OSFreeResponseTextArea';
var RevertButton = function RevertButton(props) {
  return jsxRuntime.jsx(Button, _extends({}, props, {
    children: "Cancel"
  }));
};
var FreeResponseInput = function FreeResponseInput(props) {
  var availablePoints = props.availablePoints,
    cancelHandler = props.cancelHandler,
    defaultValue = props.defaultValue,
    infoRowChildren = props.infoRowChildren,
    isSubmitDisabled = props.isSubmitDisabled,
    pointsChildren = props.pointsChildren,
    question = props.question,
    questionNumber = props.questionNumber,
    saveHandler = props.saveHandler,
    submitBtnLabel = props.submitBtnLabel,
    textHasChanged = props.textHasChanged,
    wordLimit = props.wordLimit;
  var isOverWordLimit = countWords(defaultValue) > wordLimit;
  var questionProps = {};
  if (questionNumber) {
    questionProps['data-question-number'] = questionNumber;
  }
  return jsxRuntime.jsxs(StyledFreeResponse, {
    "data-test-id": "student-free-response",
    children: [jsxRuntime.jsxs("div", {
      className: "step-card-body",
      children: [jsxRuntime.jsx(SyledQuestionStem, _extends({}, questionProps, {
        children: question.stem_html && jsxRuntime.jsx(QuestionHtml, {
          type: "stem",
          html: question.stem_html,
          hidden: false
        })
      })), jsxRuntime.jsx(FreeResponseTextArea, _extends({}, props, {
        isOverWordLimit: isOverWordLimit,
        "data-test-id": "free-response-box",
        placeholder: "Enter your response...",
        "aria-label": "question response text box"
      })), jsxRuntime.jsxs(InfoRow, {
        hasChildren: !!infoRowChildren,
        children: [infoRowChildren, jsxRuntime.jsxs("div", {
          children: [jsxRuntime.jsxs("span", {
            children: [countWords(defaultValue), " words"]
          }), isOverWordLimit && jsxRuntime.jsxs("span", {
            className: "word-limit-error-info",
            children: ["Maximum ", wordLimit, " words"]
          })]
        })]
      })]
    }), jsxRuntime.jsxs(StepCardFooter, {
      children: [jsxRuntime.jsxs("div", {
        className: "points",
        children: [jsxRuntime.jsxs("strong", {
          children: ["Points: ", availablePoints]
        }), pointsChildren]
      }), jsxRuntime.jsxs("div", {
        className: "controls",
        children: [jsxRuntime.jsx(RevertButton, {
          disabled: !textHasChanged,
          onClick: cancelHandler
        }), jsxRuntime.jsx(Button, {
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

var _excluded$1 = ["questionNumber", "numberOfQuestions", "stepType", "isHomework", "availablePoints", "unpadded", "className", "children", "questionId", "multipartBadge", "leftHeaderChildren", "rightHeaderChildren", "headerTitleChildren"],
  _excluded2 = ["step", "questionNumber", "numberOfQuestions", "children", "className"];
var _templateObject$1, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var InnerStepCard = styled__default["default"].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 400px;\n  border-radius: 0.25rem;\n  margin: 0 auto 5rem auto;\n  border: 1px solid ", ";\n  border-radius: 0.25rem;\n  background-color: white;\n\n  ", "\n"])), colors.palette.light, breakpoints.desktop(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    max-width: 1000px;\n    min-width: 750px;\n  "]))));
var OuterStepCard = styled__default["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  padding: 2rem;\n\n  ", "\n"])), breakpoints.tablet(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n    padding: 0;\n  "]))));
var StepCardHeader = styled__default["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: ", ";\n  font-size: 1.8rem;\n  line-height: 3rem;\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n\n  div.question-info {\n    font-weight: bold;\n\n    .ox-icon-lock {\n        margin-right: 1rem;\n    }\n  }\n\n  .num-questions, .points, .separator {\n      display: none;\n  }\n\n  .exercise-id, .separator {\n      font-weight: normal;\n  }\n\n  .separator {\n      margin: 0 1rem;\n  }\n\n  .exercise-id {\n      height: 28px; // Fix baseline issue\n  }\n\n  button {\n    color: ", ";\n  }\n\n  .openstax-exercise-badges {\n      margin: 0;\n      line-height: 2rem;\n      svg {\n          display: block;\n          &:not(.interactive) {\n              margin: 0 0 0 6px !important;\n          }\n      }\n  }\n\n  ", "\n\n    /*\n    1. Show the arrows to move to previous and next question.\n    2. Show the number of questions.\n    3. Override box-shadow of icons when turned into a button.\n    */\n    ", "\n\n  ", "\n"])), colors.card.background, colors.palette.gray, breakpoints.desktop(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      button.ox-icon-angle-left, button.ox-icon-angle-right {\n          display: none;\n      }\n      .separator {\n          display: inherit;\n      }\n  "]))), breakpoints.tablet(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n        font-size: 1.6rem;\n        line-height: 2.5rem;\n\n        svg.ox-icon {\n            display: inherit;\n            margin: 0;\n        }\n        button.ox-icon-angle-left {\n            margin-right: ", ";\n        }\n        button.ox-icon-angle-right {\n            margin-left: ", ";\n        }\n        .openstax-exercise-badges svg {\n            display: none;\n        }\n        .num-questions, points {\n            display: inherit;\n        }\n\n        .exercise-id {\n            display: none;\n        }\n\n        button[class^='ox-icon-angle']:hover {\n            box-shadow: none;\n        }\n  "])), breakpoints.margins.tablet, breakpoints.margins.tablet), breakpoints.mobile(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      font-size: 1.4rem;\n      line-height: 2rem;\n      padding: 10px 8px;\n\n      button.ox-icon-angle-left {\n          margin-right: ", ";\n      }\n      button.ox-icon-angle-left {\n          margin-right: ", ";\n      }\n  "])), breakpoints.margins.mobile, breakpoints.margins.mobile));
StepCardHeader.displayName = 'StepCardHeader';
var StepCardQuestion = styled__default["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  .step-card-body {\n    ", "\n  }\n\n    & + div .step-card-body {\n        padding-top: 0;\n    }\n\n    &.exercise-context, &.exercise-stimulus, &.exercise-stem {\n        padding-bottom: 0;\n    }\n\n    ", "\n\n    .reading-step & {\n        padding: 0;\n    }\n\n    ", "\n\n    ", "\n\n    &&& {\n        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }\n    }\n"])), mixins.stepCardPadding(), breakpoints.only.mobile(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n        && .question-feedback {\n            margin-left: 0;\n\n           .arrow { margin-left: 12px; }\n        }\n    "]))), breakpoints.desktop(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n        .video-step &, .interactive-step & {\n            .openstax-exercise-badges {\n              margin-right: 3.8rem;\n            }\n        }\n    "]))), breakpoints.mobile(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n        .openstax-exercise-badges svg {\n            margin-right: ", ";\n        }\n    "])), breakpoints.margins.mobile));
var StepCard = function StepCard(_ref) {
  var questionNumber = _ref.questionNumber,
    numberOfQuestions = _ref.numberOfQuestions,
    stepType = _ref.stepType,
    isHomework = _ref.isHomework,
    availablePoints = _ref.availablePoints,
    unpadded = _ref.unpadded,
    className = _ref.className,
    children = _ref.children,
    questionId = _ref.questionId,
    multipartBadge = _ref.multipartBadge,
    leftHeaderChildren = _ref.leftHeaderChildren,
    rightHeaderChildren = _ref.rightHeaderChildren,
    headerTitleChildren = _ref.headerTitleChildren,
    otherProps = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return jsxRuntime.jsxs(OuterStepCard, _extends({}, otherProps, {
    children: [multipartBadge, jsxRuntime.jsxs(InnerStepCard, {
      className: className,
      children: [questionNumber && isHomework && stepType === 'exercise' && jsxRuntime.jsxs(StepCardHeader, {
        children: [jsxRuntime.jsxs("div", {
          children: [leftHeaderChildren, jsxRuntime.jsxs("div", {
            className: "question-info",
            children: [headerTitleChildren, jsxRuntime.jsxs("span", {
              children: ["Question ", questionNumber]
            }), jsxRuntime.jsxs("span", {
              className: "num-questions",
              children: ["\xA0/ ", numberOfQuestions]
            }), jsxRuntime.jsx("span", {
              className: "separator",
              children: "|"
            }), jsxRuntime.jsxs("span", {
              className: "question-id",
              children: ["ID: ", questionId]
            })]
          })]
        }), jsxRuntime.jsxs("div", {
          children: [jsxRuntime.jsxs("div", {
            className: "points",
            children: [availablePoints, " Points"]
          }), rightHeaderChildren]
        })]
      }), jsxRuntime.jsx(StepCardQuestion, {
        unpadded: unpadded,
        children: children
      })]
    })]
  }));
};
StepCard.displayName = 'OSStepCard';
var TaskStepCard = function TaskStepCard(_ref2) {
  var step = _ref2.step,
    questionNumber = _ref2.questionNumber,
    numberOfQuestions = _ref2.numberOfQuestions,
    children = _ref2.children,
    className = _ref2.className,
    otherProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return jsxRuntime.jsx(StepCard, _extends({}, otherProps, {
    unpadded: true,
    questionNumber: questionNumber,
    numberOfQuestions: numberOfQuestions,
    stepType: step.type,
    isHomework: step.task.type === 'homework',
    "data-task-step-id": step.id,
    availablePoints: step.available_points,
    className: cn__default["default"](step.type + "-step", className),
    questionId: step.uid,
    children: children
  }));
};
TaskStepCard.displayName = 'OSTaskStepCard';

var AttemptsRemaining = function AttemptsRemaining(_ref) {
  var count = _ref.count;
  return jsxRuntime.jsxs("div", {
    children: [count, " attempt", count === 1 ? '' : 's', " left"]
  });
};
var PublishedComments = function PublishedComments(_ref2) {
  var published_comments = _ref2.published_comments;
  if (!published_comments) {
    return null;
  }
  return jsxRuntime.jsxs("div", {
    children: [jsxRuntime.jsx("strong", {
      children: "Feedback:"
    }), " ", published_comments]
  });
};
var SaveButton = function SaveButton(props) {
  return jsxRuntime.jsx(Button, _extends({}, props, {
    waitingText: "Saving\u2026",
    isWaiting: props.isWaiting,
    "data-test-id": "submit-answer-btn",
    children: props.attempt_number == 0 ? 'Submit' : 'Re-submit'
  }));
};
var NextButton = function NextButton(props) {
  return jsxRuntime.jsx(Button, {
    onClick: props.onNextStep,
    "data-test-id": "continue-btn",
    children: props.canUpdateCurrentStep ? 'Continue' : 'Next'
  });
};
var FreeResponseReview = function FreeResponseReview(_ref3) {
  var free_response = _ref3.free_response;
  if (!free_response) {
    return null;
  }
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsx("div", {
      className: "free-response",
      children: free_response
    })
  });
};
var ExerciseQuestion = function ExerciseQuestion(props) {
  var question = props.question,
    task = props.task,
    answer_id_order = props.answer_id_order,
    onAnswerChange = props.onAnswerChange,
    feedback_html = props.feedback_html,
    correct_answer_feedback_html = props.correct_answer_feedback_html,
    is_completed = props.is_completed,
    correct_answer_id = props.correct_answer_id,
    incorrectAnswerId = props.incorrectAnswerId,
    choicesEnabled = props.choicesEnabled,
    questionNumber = props.questionNumber,
    answerId = props.answerId,
    hasMultipleAttempts = props.hasMultipleAttempts,
    attempts_remaining = props.attempts_remaining,
    published_comments = props.published_comments,
    detailedSolution = props.detailedSolution,
    canAnswer = props.canAnswer,
    needsSaved = props.needsSaved,
    attempt_number = props.attempt_number,
    apiIsPending = props.apiIsPending,
    onAnswerSave = props.onAnswerSave,
    onNextStep = props.onNextStep,
    canUpdateCurrentStep = props.canUpdateCurrentStep,
    displaySolution = props.displaySolution,
    available_points = props.available_points,
    free_response = props.free_response;
  return jsxRuntime.jsxs("div", {
    "data-test-id": "student-exercise-question",
    children: [jsxRuntime.jsx(Question, {
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
      children: jsxRuntime.jsx(FreeResponseReview, {
        free_response: free_response
      })
    }), jsxRuntime.jsxs(StepCardFooter, {
      className: "step-card-footer",
      children: [jsxRuntime.jsxs("div", {
        className: "points",
        children: [jsxRuntime.jsxs("strong", {
          children: ["Points: ", available_points]
        }), jsxRuntime.jsx("span", {
          className: "attempts-left",
          children: hasMultipleAttempts && attempts_remaining > 0 && jsxRuntime.jsx(AttemptsRemaining, {
            count: attempts_remaining
          })
        }), jsxRuntime.jsx(PublishedComments, {
          published_comments: published_comments
        }), detailedSolution && jsxRuntime.jsxs("div", {
          children: [jsxRuntime.jsx("strong", {
            children: "Detailed solution:"
          }), " ", jsxRuntime.jsx(Content, {
            html: detailedSolution
          })]
        })]
      }), jsxRuntime.jsx("div", {
        className: "controls",
        children: canAnswer && needsSaved ? jsxRuntime.jsx(SaveButton, {
          disabled: apiIsPending || !answerId,
          isWaiting: apiIsPending,
          attempt_number: attempt_number,
          onClick: onAnswerSave
        }) : jsxRuntime.jsx(NextButton, {
          onNextStep: onNextStep,
          canUpdateCurrentStep: canUpdateCurrentStep
        })
      })]
    })]
  });
};

var _excluded = ["numberOfQuestions", "questionNumber", "step", "exercise", "canAnswer", "needsSaved"];
var _templateObject;
var StyledTaskStepCard = styled__default["default"](TaskStepCard)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  font-size: 1.8rem;\n  line-height: 3rem;\n"])));
var Preamble = function Preamble(_ref) {
  var exercise = _ref.exercise;
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [exercise.context && jsxRuntime.jsx(Content, {
      className: "step-card-body exercise-context",
      block: true,
      html: exercise.context
    }), exercise.stimulus_html && jsxRuntime.jsx(Content, {
      className: "step-card-body exercise-stimulus",
      block: true,
      html: exercise.stimulus_html
    })]
  });
};
var Exercise = function Exercise(_ref2) {
  var numberOfQuestions = _ref2.numberOfQuestions,
    questionNumber = _ref2.questionNumber,
    step = _ref2.step,
    exercise = _ref2.exercise,
    canAnswer = _ref2.canAnswer,
    needsSaved = _ref2.needsSaved,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  return jsxRuntime.jsxs(StyledTaskStepCard, {
    step: step,
    questionNumber: questionNumber,
    numberOfQuestions: numberOfQuestions,
    children: [jsxRuntime.jsx(Preamble, {
      exercise: exercise
    }), exercise.questions.map(function (q) {
      return /*#__PURE__*/React.createElement(ExerciseQuestion, _extends({}, props, step, {
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
      }));
    })]
  });
};

exports.Answer = Answer;
exports.AnswersTable = AnswersTable;
exports.Exercise = Exercise;
exports.FreeResponseInput = FreeResponseInput;
exports.FreeResponseTextArea = FreeResponseTextArea;
exports.InnerStepCard = InnerStepCard;
exports.OuterStepCard = OuterStepCard;
exports.Question = Question;
exports.QuestionHtml = QuestionHtml;
exports.StepCard = StepCard;
exports.TaskStepCard = TaskStepCard;
//# sourceMappingURL=index.js.map
