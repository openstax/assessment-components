import{s as r,j as o,a}from"./index-4cca09be.js";import{c as s,b as i,m as w}from"./theme-fe2e1580.js";import{c as S}from"./index-0077c59e.js";const C=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  border-radius: 0.25rem;
  margin: 0 auto 5rem auto;
  border: 1px solid ${s.palette.light};
  border-radius: 0.25rem;
  background-color: white;

  ${i.desktop`
    max-width: 1000px;
  `}
`,q=r.div`
  padding: 2rem;

  ${i.mobile`
    padding: 0;
  `}
`,c=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${s.card.header.background};
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: -0.72px;

  div {
    display: flex;
    align-items: baseline;
  }

  div.question-info {
    font-weight: bold;

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
    color: ${s.palette.gray};
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
`;c.displayName="StepCardHeader";const N=r.div`
  .step-card-body {
    ${w.stepCardPadding()}

    background: ${s.card.body.background};

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
`,m=({questionNumber:e,numberOfQuestions:t,showTotalQuestions:d,stepType:l,isHomework:p,availablePoints:n,unpadded:g,className:x,children:h,questionId:u,multipartBadge:b,leftHeaderChildren:f,rightHeaderChildren:y,headerTitleChildren:v,...$})=>{const k=t>1?`Questions ${e} - ${e+t-1}`:`Question ${e}`;return a(q,{...$,children:[b,a(C,{className:x,children:[e&&p&&l==="exercise"&&a(c,{children:[a("div",{children:[f,a("div",{className:"question-info",children:[v,o("span",{children:k}),d?a("span",{className:"num-questions",children:[" / ",t]}):null,o("span",{className:"separator",children:"|"}),a("span",{className:"question-id",children:["ID: ",u]})]})]}),a("div",{children:[n&&a("div",{className:"points",children:[n," Points"]}),y]})]}),o(N,{unpadded:g,children:h})]})]})};m.displayName="OSStepCard";const j=({step:e,questionNumber:t,numberOfQuestions:d,children:l,className:p,...n})=>o(m,{...n,unpadded:!0,questionNumber:t,numberOfQuestions:d,stepType:"type"in e?e.type:"exercise",isHomework:"task"in e?e.task===void 0||e.task.type==="homework":!0,"data-task-step-id":e.id,availablePoints:e.available_points,className:S(`${"type"in e?e.type:"exercise"}-step`,p),questionId:e.uid,children:l});j.displayName="OSTaskStepCard";export{C as I,j as T};
