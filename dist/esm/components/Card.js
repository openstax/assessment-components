import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from "react";
import { breakpoints, colors, layouts, mixins } from "../theme";
import styled from "styled-components";
import cn from "classnames";
export const InnerStepCard = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 0 auto 5rem auto;
  border: 0.1rem solid ${colors.palette.pale};
  border-radius: 0.25rem;
  background-color: white;
  overflow: hidden;

  ${breakpoints.desktop `
    max-width: 1000px;
  `}
`;
export const OuterStepCard = styled.div `
  padding: ${layouts.card.spacing};

  ${breakpoints.mobile `
    padding: 0;
  `}
`;
const StepCardHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  background: ${colors.card.header.background};
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
    color: ${colors.palette.gray};
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

  ${breakpoints.desktop `
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
  `}

    /*
    1. Show the arrows to move to previous and next question.
    2. Show the number of questions.
    3. Override box-shadow of icons when turned into a button.
    */
    ${breakpoints.tablet `
        font-size: 1.6rem;
        line-height: 2.5rem;

        svg.ox-icon {
            display: inherit;
            margin: 0;
        }
        button.ox-icon-angle-left {
            margin-right: ${breakpoints.margins.tablet};
        }
        button.ox-icon-angle-right {
            margin-left: ${breakpoints.margins.tablet};
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

  ${breakpoints.mobile `
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${breakpoints.margins.mobile};
      }
      button.ox-icon-angle-left {
          margin-right: ${breakpoints.margins.mobile};
      }
  `}
`;
const StyledUngraded = styled.div `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.palette.darkRed};
  border-radius: 0.5rem;
  width: 7.8rem;
  height: 1.9rem;
  padding: 0.2rem 0.4rem;

  span {
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: ${colors.palette.white};
  }
`;
StepCardHeader.displayName = 'StepCardHeader';
const StepCardQuestion = styled.div `
  .step-card-body {
    ${mixins.stepCardPadding()}
    overflow: auto;
    background: ${colors.card.body.background};

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

    ${breakpoints.only.mobile `
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `}

    .reading-step & {
        padding: 0;
    }

    ${breakpoints.desktop `
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `}

    ${breakpoints.mobile `
        .openstax-exercise-badges svg {
            margin-right: ${breakpoints.margins.mobile};
        }
    `}

    &&& {
        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }
    }
`;
export const StyledOverlay = styled.div `
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
    const overlayRef = useRef(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const formattedQuestionNumber = numberOfQuestions > 1
        ? `Questions ${questionNumber} - ${questionNumber + numberOfQuestions - 1}`
        : `Question ${questionNumber}`;
    const handleOverlayBlur = (event) => {
        if (overlayRef.current && !overlayRef.current.contains(event.relatedTarget)) {
            setShowOverlay(false);
        }
    };
    const handleOverlayFocus = useCallback(() => {
        setShowOverlay(true);
    }, []);
    const hideFocusableElements = useCallback(() => {
        var _a;
        const focusableElements = Array.from(((_a = document.getElementById("step-card")) === null || _a === void 0 ? void 0 : _a.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')) || []);
        focusableElements.forEach((el) => {
            el.setAttribute('tabindex', '-1');
        });
    }, []);
    useEffect(() => {
        const currentOverlayRef = overlayRef.current;
        if (currentOverlayRef && overlayChildren) {
            currentOverlayRef.addEventListener('focus', handleOverlayFocus);
            hideFocusableElements();
        }
        return () => {
            currentOverlayRef === null || currentOverlayRef === void 0 ? void 0 : currentOverlayRef.removeEventListener('focus', handleOverlayFocus);
        };
    }, [overlayChildren, overlayRef, handleOverlayFocus, hideFocusableElements]);
    return (_jsxs(OuterStepCard, { ...otherProps, children: [multipartBadge, _jsx(InnerStepCard, { className: className, children: _jsxs("div", { ref: overlayRef, ...(overlayChildren
                        ? {
                            onMouseOver: () => setShowOverlay(true),
                            onMouseLeave: () => setShowOverlay(false),
                            onBlur: handleOverlayBlur,
                            tabIndex: 0,
                        }
                        : {}), children: [(overlayChildren && showOverlay) &&
                            _jsx(StyledOverlay, { id: "overlay-element", children: overlayChildren }), _jsxs("div", { id: "step-card", children: [questionNumber && isHomework && stepType === 'exercise' &&
                                    _jsxs(StepCardHeader, { className: "step-card-header", children: [_jsxs("div", { children: [leftHeaderChildren, _jsxs("h2", { className: "question-info", children: [headerTitleChildren, _jsx("span", { children: formattedQuestionNumber }), showTotalQuestions ? _jsxs("span", { className: "num-questions", children: ["\u00A0/ ", numberOfQuestions] }) : null, _jsx("span", { className: "separator", children: "|" }), _jsxs("span", { className: "question-id", children: ["ID: ", questionId] })] })] }), showScoring &&
                                                _jsx("div", { className: "scoring", children: isGraded
                                                        ? _jsxs("span", { children: [(_a = totalScoring === null || totalScoring === void 0 ? void 0 : totalScoring.score) === null || _a === void 0 ? void 0 : _a.toFixed(1), "/", (_b = totalScoring === null || totalScoring === void 0 ? void 0 : totalScoring.maxScore) === null || _b === void 0 ? void 0 : _b.toFixed(1), (totalScoring === null || totalScoring === void 0 ? void 0 : totalScoring.maxScore) && totalScoring.maxScore > 1.1 ? ' points' : ' point'] })
                                                        : _jsx(StyledUngraded, { children: _jsx("span", { children: "ungraded" }) }) }), availablePoints || rightHeaderChildren ? _jsxs("div", { children: [availablePoints && _jsxs("div", { className: "points", children: [availablePoints, " Points"] }), rightHeaderChildren] }) : null] }), _jsx(StepCardQuestion, { unpadded: unpadded, children: children })] })] }) })] }));
};
StepCard.displayName = 'OSStepCard';
const TaskStepCard = ({ step, questionNumber, numberOfQuestions, children, className, overlayChildren, ...otherProps }) => (_jsx(StepCard, { ...otherProps, unpadded: true, questionNumber: questionNumber, numberOfQuestions: numberOfQuestions, stepType: 'type' in step ? step.type : 'exercise', isHomework: 'task' in step ? (step.task === undefined || step.task.type === 'homework') : true, "data-task-step-id": step.id, 
    // uncomment next line to display available points on exercise questions
    // availablePoints={step.available_points}
    className: cn(`${('type' in step ? step.type : 'exercise')}-step`, className), questionId: step.uid, overlayChildren: overlayChildren, children: children }));
TaskStepCard.displayName = 'OSTaskStepCard';
export { StepCard, TaskStepCard };
//# sourceMappingURL=Card.js.map