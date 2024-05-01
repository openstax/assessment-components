import{s as r,j as s,a as n}from"./index-d5f43f47.js";import{c as o,b as i,l as w,m as S}from"./theme-fb94c9af.js";import{c as C}from"./index-69f62764.js";const q=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  margin: 0 auto 5rem auto;
  border: 1px solid ${o.palette.light};
  border-radius: 0.25rem;
  background-color: white;
  overflow: hidden;

  ${i.desktop`
    max-width: 1000px;
  `}
`,N=r.div`
  padding: ${w.card.spacing};

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

  div.question-info {
    display: flex;
    align-items: baseline;
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
`;m.displayName="StepCardHeader";const j=r.div`
  .step-card-body {
    ${S.stepCardPadding()}

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
`,g=({questionNumber:e,numberOfQuestions:t,showTotalQuestions:d,stepType:l,isHomework:p,availablePoints:a,unpadded:x,className:h,children:u,questionId:b,multipartBadge:f,leftHeaderChildren:y,rightHeaderChildren:c,headerTitleChildren:$,...v})=>{const k=t>1?`Questions ${e} - ${e+t-1}`:`Question ${e}`;return n(N,{...v,children:[f,n(q,{className:h,children:[e&&p&&l==="exercise"&&n(m,{children:[n("div",{children:[y,n("div",{className:"question-info",children:[$,s("span",{children:k}),d?n("span",{className:"num-questions",children:[" / ",t]}):null,s("span",{className:"separator",children:"|"}),n("span",{className:"question-id",children:["ID: ",b]})]})]}),a||c?n("div",{children:[a&&n("div",{className:"points",children:[a," Points"]}),c]}):null]}),s(j,{unpadded:x,children:u})]})]})};g.displayName="OSStepCard";const I=({step:e,questionNumber:t,numberOfQuestions:d,children:l,className:p,...a})=>s(g,{...a,unpadded:!0,questionNumber:t,numberOfQuestions:d,stepType:"type"in e?e.type:"exercise",isHomework:"task"in e?e.task===void 0||e.task.type==="homework":!0,"data-task-step-id":e.id,className:C(`${"type"in e?e.type:"exercise"}-step`,p),questionId:e.uid,children:l});I.displayName="OSTaskStepCard";export{q as I,N as O,I as T};
