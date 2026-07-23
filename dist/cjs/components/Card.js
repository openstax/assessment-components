"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStepCard = exports.StepCard = exports.StyledOverlay = exports.OuterStepCard = exports.InnerStepCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const theme_1 = require("../theme");
const styled_components_1 = __importDefault(require("styled-components"));
const classnames_1 = __importDefault(require("classnames"));
exports.InnerStepCard = styled_components_1.default.div `
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 0 auto 5rem auto;
  border: 0.1rem solid ${theme_1.colors.palette.pale};
  border-radius: 0.25rem;
  background-color: white;
  overflow: hidden;

  ${theme_1.breakpoints.desktop `
    max-width: 1000px;
  `}
`;
exports.OuterStepCard = styled_components_1.default.div `
  padding: ${theme_1.layouts.card.spacing};

  ${theme_1.breakpoints.mobile `
    padding: 0;
  `}
`;
const StepCardHeader = styled_components_1.default.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  background: ${theme_1.colors.card.header.background};
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: -0.72px;

  h2.question-info {
    display: flex;
    align-items: baseline;
    font-size: inherit;
    margin: inherit;
    text-transform: uppercase;

    .question-id {
      font-weight: normal;
    }
    .ox-icon-lock {
        margin-right: 1rem;
    }
  }

  .num-questions, .points {
      display: none;
  }

  .exercise-id, .separator {
      font-weight: normal;
  }

  .separator {
      margin: 0 0.4rem;
  }

  .exercise-id {
      height: 28px; // Fix baseline issue
  }

  button {
    color: ${theme_1.colors.palette.gray};
  }

  .scoring {
    margin-left: auto;
    margin-right: 1rem;

    span {
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
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

  ${theme_1.breakpoints.desktop `
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
  `}

    /*
    1. Show the arrows to move to previous and next question.
    2. Show the number of questions.
    3. Override box-shadow of icons when turned into a button.
    */
    ${theme_1.breakpoints.tablet `
        font-size: 1.6rem;
        line-height: 2.5rem;

        svg.ox-icon {
            display: inherit;
            margin: 0;
        }
        button.ox-icon-angle-left {
            margin-right: ${theme_1.breakpoints.margins.tablet};
        }
        button.ox-icon-angle-right {
            margin-left: ${theme_1.breakpoints.margins.tablet};
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
  `}

  ${theme_1.breakpoints.mobile `
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${theme_1.breakpoints.margins.mobile};
      }
      button.ox-icon-angle-left {
          margin-right: ${theme_1.breakpoints.margins.mobile};
      }
  `}
`;
const StyledUngraded = styled_components_1.default.div `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme_1.colors.palette.darkRed};
  border-radius: 0.5rem;
  width: 7.8rem;
  height: 1.9rem;
  padding: 0.2rem 0.4rem;

  span {
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: ${theme_1.colors.palette.white};
  }
`;
StepCardHeader.displayName = 'StepCardHeader';
const StepCardQuestion = styled_components_1.default.div `
  .step-card-body {
    ${theme_1.mixins.stepCardPadding()}
    overflow: auto;
    background: ${theme_1.colors.card.body.background};

    &.exercise-stimulus {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

    & + div .step-card-body {
        padding-top: 0;
    }

    &.exercise-context, &.exercise-stimulus, &.exercise-stem {
        padding-bottom: 0;
    }

    ${theme_1.breakpoints.only.mobile `
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `}

    .reading-step & {
        padding: 0;
    }

    ${theme_1.breakpoints.desktop `
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `}

    ${theme_1.breakpoints.mobile `
        .openstax-exercise-badges svg {
            margin-right: ${theme_1.breakpoints.margins.mobile};
        }
    `}

    &&& {
        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }
    }
`;
exports.StyledOverlay = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: #FFFFFF80;
    z-index: 2;
`;
const StepCard = ({ questionNumber, numberOfQuestions, showTotalQuestions, stepType, isHomework, availablePoints, unpadded, // currently does nothing; may need to restore if this causes tutor stepcard regression
className, children, questionId, multipartBadge, leftHeaderChildren, rightHeaderChildren, headerTitleChildren, overlayChildren, showScoring, totalScoring, isGraded, ...otherProps }) => {
    var _a, _b;
    const overlayRef = (0, react_1.useRef)(null);
    const [showOverlay, setShowOverlay] = (0, react_1.useState)(false);
    const formattedQuestionNumber = numberOfQuestions > 1
        ? `Questions ${questionNumber} - ${questionNumber + numberOfQuestions - 1}`
        : `Question ${questionNumber}`;
    const handleOverlayBlur = (event) => {
        if (overlayRef.current && !overlayRef.current.contains(event.relatedTarget)) {
            setShowOverlay(false);
        }
    };
    const handleOverlayFocus = (0, react_1.useCallback)(() => {
        setShowOverlay(true);
    }, []);
    const hideFocusableElements = (0, react_1.useCallback)(() => {
        var _a;
        const focusableElements = Array.from(((_a = document.getElementById("step-card")) === null || _a === void 0 ? void 0 : _a.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')) || []);
        focusableElements.forEach((el) => {
            el.setAttribute('tabindex', '-1');
        });
    }, []);
    (0, react_1.useEffect)(() => {
        const currentOverlayRef = overlayRef.current;
        if (currentOverlayRef && overlayChildren) {
            currentOverlayRef.addEventListener('focus', handleOverlayFocus);
            hideFocusableElements();
        }
        return () => {
            currentOverlayRef === null || currentOverlayRef === void 0 ? void 0 : currentOverlayRef.removeEventListener('focus', handleOverlayFocus);
        };
    }, [overlayChildren, overlayRef, handleOverlayFocus, hideFocusableElements]);
    return ((0, jsx_runtime_1.jsxs)(exports.OuterStepCard, { ...otherProps, children: [multipartBadge, (0, jsx_runtime_1.jsx)(exports.InnerStepCard, { className: className, children: (0, jsx_runtime_1.jsxs)("div", { ref: overlayRef, ...(overlayChildren
                        ? {
                            onMouseOver: () => setShowOverlay(true),
                            onMouseLeave: () => setShowOverlay(false),
                            onBlur: handleOverlayBlur,
                            tabIndex: 0,
                        }
                        : {}), children: [(overlayChildren && showOverlay) &&
                            (0, jsx_runtime_1.jsx)(exports.StyledOverlay, { id: "overlay-element", children: overlayChildren }), (0, jsx_runtime_1.jsxs)("div", { id: "step-card", children: [questionNumber && isHomework && stepType === 'exercise' &&
                                    (0, jsx_runtime_1.jsxs)(StepCardHeader, { className: "step-card-header", children: [(0, jsx_runtime_1.jsxs)("div", { children: [leftHeaderChildren, (0, jsx_runtime_1.jsxs)("h2", { className: "question-info", children: [headerTitleChildren, (0, jsx_runtime_1.jsx)("span", { children: formattedQuestionNumber }), showTotalQuestions ? (0, jsx_runtime_1.jsxs)("span", { className: "num-questions", children: ["\u00A0/ ", numberOfQuestions] }) : null, (0, jsx_runtime_1.jsx)("span", { className: "separator", children: "|" }), (0, jsx_runtime_1.jsxs)("span", { className: "question-id", children: ["ID: ", questionId] })] })] }), showScoring &&
                                                (0, jsx_runtime_1.jsx)("div", { className: "scoring", children: isGraded
                                                        ? (0, jsx_runtime_1.jsxs)("span", { children: [(_a = totalScoring === null || totalScoring === void 0 ? void 0 : totalScoring.score) === null || _a === void 0 ? void 0 : _a.toFixed(1), "/", (_b = totalScoring === null || totalScoring === void 0 ? void 0 : totalScoring.maxScore) === null || _b === void 0 ? void 0 : _b.toFixed(1), (totalScoring === null || totalScoring === void 0 ? void 0 : totalScoring.maxScore) && totalScoring.maxScore > 1.1 ? ' points' : ' point'] })
                                                        : (0, jsx_runtime_1.jsx)(StyledUngraded, { children: (0, jsx_runtime_1.jsx)("span", { children: "ungraded" }) }) }), availablePoints || rightHeaderChildren ? (0, jsx_runtime_1.jsxs)("div", { children: [availablePoints && (0, jsx_runtime_1.jsxs)("div", { className: "points", children: [availablePoints, " Points"] }), rightHeaderChildren] }) : null] }), (0, jsx_runtime_1.jsx)(StepCardQuestion, { unpadded: unpadded, children: children })] })] }) })] }));
};
exports.StepCard = StepCard;
StepCard.displayName = 'OSStepCard';
const TaskStepCard = ({ step, questionNumber, numberOfQuestions, children, className, overlayChildren, ...otherProps }) => ((0, jsx_runtime_1.jsx)(StepCard, { ...otherProps, unpadded: true, questionNumber: questionNumber, numberOfQuestions: numberOfQuestions, stepType: 'type' in step ? step.type : 'exercise', isHomework: 'task' in step ? (step.task === undefined || step.task.type === 'homework') : true, "data-task-step-id": step.id, 
    // uncomment next line to display available points on exercise questions
    // availablePoints={step.available_points}
    className: (0, classnames_1.default)(`${('type' in step ? step.type : 'exercise')}-step`, className), questionId: step.uid, overlayChildren: overlayChildren, children: children }));
exports.TaskStepCard = TaskStepCard;
TaskStepCard.displayName = 'OSTaskStepCard';
//# sourceMappingURL=Card.js.map