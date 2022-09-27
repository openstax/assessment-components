import{c as t,b as o,m as $}from"./theme.673eb05a.js";import{s,j as i,c as k}from"./index.e7c0040d.js";var n="/home/runner/work/assessment-components/assessment-components/src/components/Card.tsx";const w=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  border-radius: 0.25rem;
  margin: 0 auto 5rem auto;
  border: 1px solid ${t.palette.light};
  border-radius: 0.25rem;
  background-color: white;

  ${o.desktop`
    max-width: 1000px;
    min-width: 750px;
  `}
`,S=s.div`
  padding: 2rem;

  ${o.tablet`
    padding: 0;
  `}
`,c=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${t.card.header.background};
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

  .num-questions, .points, .separator {
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
    color: ${t.palette.gray};
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

  ${o.desktop`
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
    ${o.tablet`
        font-size: 1.6rem;
        line-height: 2.5rem;

        svg.ox-icon {
            display: inherit;
            margin: 0;
        }
        button.ox-icon-angle-left {
            margin-right: ${o.margins.tablet};
        }
        button.ox-icon-angle-right {
            margin-left: ${o.margins.tablet};
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

  ${o.mobile`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${o.margins.mobile};
      }
      button.ox-icon-angle-left {
          margin-right: ${o.margins.mobile};
      }
  `}
`;c.displayName="StepCardHeader";const C=s.div`
  .step-card-body {
    ${$.stepCardPadding()}

    background: ${t.card.body.background};

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

    ${o.only.mobile`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `}

    .reading-step & {
        padding: 0;
    }

    ${o.desktop`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `}

    ${o.mobile`
        .openstax-exercise-badges svg {
            margin-right: ${o.margins.mobile};
        }
    `}

    &&& {
        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }
    }
`,u=({questionNumber:e,numberOfQuestions:a,stepType:d,isHomework:l,availablePoints:r,unpadded:m,className:p,children:g,questionId:b,multipartBadge:x,leftHeaderChildren:h,rightHeaderChildren:v,headerTitleChildren:N,...f})=>{const y=a>1?`Questions ${e} - ${e+a-1}`:`Question ${e}`;return i(S,{...f,children:[x,i(w,{className:p,children:[e&&l&&d==="exercise"&&i(c,{children:[i("div",{children:[h,i("div",{className:"question-info",children:[N,i("span",{children:y},void 0,!1,{fileName:n,lineNumber:250,columnNumber:17},void 0),i("span",{className:"num-questions",children:["\xA0/ ",a]},void 0,!0,{fileName:n,lineNumber:251,columnNumber:17},void 0),i("span",{className:"separator",children:"|"},void 0,!1,{fileName:n,lineNumber:252,columnNumber:17},void 0),i("span",{className:"question-id",children:["ID: ",b]},void 0,!0,{fileName:n,lineNumber:253,columnNumber:17},void 0)]},void 0,!0,{fileName:n,lineNumber:248,columnNumber:15},void 0)]},void 0,!0,{fileName:n,lineNumber:246,columnNumber:13},void 0),i("div",{children:[r&&i("div",{className:"points",children:[r," Points"]},void 0,!0,{fileName:n,lineNumber:257,columnNumber:35},void 0),v]},void 0,!0,{fileName:n,lineNumber:256,columnNumber:13},void 0)]},void 0,!0,{fileName:n,lineNumber:245,columnNumber:11},void 0),i(C,{unpadded:m,children:g},void 0,!1,{fileName:n,lineNumber:262,columnNumber:9},void 0)]},void 0,!0,{fileName:n,lineNumber:243,columnNumber:7},void 0)]},void 0,!0,{fileName:n,lineNumber:241,columnNumber:5},void 0)};u.displayName="OSStepCard";const q=({step:e,questionNumber:a,numberOfQuestions:d,children:l,className:r,...m})=>i(u,{...m,unpadded:!0,questionNumber:a,numberOfQuestions:d,stepType:"type"in e?e.type:"exercise",isHomework:"task"in e?e.task===void 0||e.task.type==="homework":!0,"data-task-step-id":e.id,availablePoints:e.available_points,className:k(`${"type"in e?e.type:"exercise"}-step`,r),questionId:e.uid,children:l},void 0,!1,{fileName:n,lineNumber:285,columnNumber:2},void 0);q.displayName="OSTaskStepCard";export{q as T};
