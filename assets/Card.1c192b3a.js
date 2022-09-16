import{c as l,b as i,m as k}from"./theme.a2288646.js";import{s as n,j as p,c as $,a as t}from"./index.89f9a85b.js";const w=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  border-radius: 0.25rem;
  margin: 0 auto 5rem auto;
  border: 1px solid ${l.palette.light};
  border-radius: 0.25rem;
  background-color: white;

  ${i.desktop`
    max-width: 1000px;
    min-width: 750px;
  `}
`,S=n.div`
  padding: 2rem;

  ${i.tablet`
    padding: 0;
  `}
`,m=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${l.card.background};
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
    color: ${l.palette.gray};
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

  ${i.desktop`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `}

    /*
    1. Show the arrows to move to previous and next question.
    2. Show the number of questions.
    3. Override box-shadow of icons when turned into a button.
    */
    ${i.tablet`
        font-size: 1.6rem;
        line-height: 2.5rem;

        svg.ox-icon {
            display: inherit;
            margin: 0;
        }
        button.ox-icon-angle-left {
            margin-right: ${i.margins.tablet};
        }
        button.ox-icon-angle-right {
            margin-left: ${i.margins.tablet};
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

  ${i.mobile`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${i.margins.mobile};
      }
      button.ox-icon-angle-left {
          margin-right: ${i.margins.mobile};
      }
  `}
`;m.displayName="StepCardHeader";const C=n.div`
  .step-card-body {
    ${k.stepCardPadding()}
  }

    & + div .step-card-body {
        padding-top: 0;
    }

    &.exercise-context, &.exercise-stimulus, &.exercise-stem {
        padding-bottom: 0;
    }

    ${i.only.mobile`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `}

    .reading-step & {
        padding: 0;
    }

    ${i.desktop`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `}

    ${i.mobile`
        .openstax-exercise-badges svg {
            margin-right: ${i.margins.mobile};
        }
    `}

    &&& {
        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }
    }
`,c=({questionNumber:e,numberOfQuestions:s,stepType:o,isHomework:r,availablePoints:a,unpadded:d,className:g,children:x,questionId:h,multipartBadge:u,leftHeaderChildren:b,rightHeaderChildren:f,headerTitleChildren:y,...v})=>t(S,{...v,children:[u,t(w,{className:g,children:[e&&r&&o==="exercise"&&t(m,{children:[t("div",{children:[b,t("div",{className:"question-info",children:[y,t("span",{children:["Question ",e]}),t("span",{className:"num-questions",children:["\xA0/ ",s]}),p("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",h]})]})]}),t("div",{children:[a&&t("div",{className:"points",children:[a," Points"]}),f]})]}),p(C,{unpadded:d,children:x})]})]});c.displayName="OSStepCard";const q=({step:e,questionNumber:s,numberOfQuestions:o,children:r,className:a,...d})=>p(c,{...d,unpadded:!0,questionNumber:s,numberOfQuestions:o,stepType:"type"in e?e.type:"exercise",isHomework:"task"in e?e.task===void 0||e.task.type==="homework":!0,"data-task-step-id":e.id,availablePoints:e.available_points,className:$(`${"type"in e?e.type:"exercise"}-step`,a),questionId:e.uid,children:r});q.displayName="OSTaskStepCard";export{q as T};
