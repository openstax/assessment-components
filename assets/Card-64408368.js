import{s as r,j as s,a as t}from"./index-56238e30.js";import{c as o,b as i,m as w}from"./theme-5eecb1a5.js";import{c as S}from"./index-c1259cc6.js";const C=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  border-radius: 0.25rem;
  margin: 0 auto 5rem auto;
  border: 1px solid ${o.palette.light};
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
`,m=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${o.card.header.background};
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
    color: ${o.palette.gray};
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
`;m.displayName="StepCardHeader";const N=r.div`
  .step-card-body {
    ${w.stepCardPadding()}

    background: ${o.card.body.background};

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
`,g=({questionNumber:e,numberOfQuestions:n,showTotalQuestions:d,stepType:l,isHomework:p,availablePoints:a,unpadded:x,className:h,children:u,questionId:b,multipartBadge:f,leftHeaderChildren:y,rightHeaderChildren:c,headerTitleChildren:v,...$})=>{const k=n>1?`Questions ${e} - ${e+n-1}`:`Question ${e}`;return t(q,{...$,children:[f,t(C,{className:h,children:[e&&p&&l==="exercise"&&t(m,{children:[t("div",{children:[y,t("div",{className:"question-info",children:[v,s("span",{children:k}),d?t("span",{className:"num-questions",children:[" / ",n]}):null,s("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",b]})]})]}),a||c?t("div",{children:[a&&t("div",{className:"points",children:[a," Points"]}),c]}):null]}),s(N,{unpadded:x,children:u})]})]})};g.displayName="OSStepCard";const j=({step:e,questionNumber:n,numberOfQuestions:d,children:l,className:p,...a})=>s(g,{...a,unpadded:!0,questionNumber:n,numberOfQuestions:d,stepType:"type"in e?e.type:"exercise",isHomework:"task"in e?e.task===void 0||e.task.type==="homework":!0,"data-task-step-id":e.id,className:S(`${"type"in e?e.type:"exercise"}-step`,p),questionId:e.uid,children:l});j.displayName="OSTaskStepCard";export{C as I,j as T};
