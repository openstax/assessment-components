import{c as l,b as o,m as k}from"./theme.f0f85d84.js";import{s as a,j as i,c as $}from"./index.8cb28562.js";var n="/home/runner/work/assessment-components/assessment-components/src/components/Card.tsx";const w=a.div`
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

  ${o.desktop`
    max-width: 1000px;
    min-width: 750px;
  `}
`,S=a.div`
  padding: 2rem;

  ${o.tablet`
    padding: 0;
  `}
`,u=a.div`
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
`;u.displayName="StepCardHeader";const C=a.div`
  .step-card-body {
    ${k.stepCardPadding()}
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
`,c=({questionNumber:e,numberOfQuestions:t,stepType:s,isHomework:d,availablePoints:r,unpadded:m,className:p,children:b,questionId:g,multipartBadge:x,leftHeaderChildren:h,rightHeaderChildren:v,headerTitleChildren:N,wrapsExercise:f,...y})=>i(S,{...y,children:[x,i(w,{className:p,children:[e&&d&&s==="exercise"&&i(u,{children:[i("div",{children:[h,i("div",{className:"question-info",children:[N,i("span",{children:[f?"Exercise":"Question"," ",e]},void 0,!0,{fileName:n,lineNumber:235,columnNumber:17},void 0),i("span",{className:"num-questions",children:["\xA0/ ",t]},void 0,!0,{fileName:n,lineNumber:236,columnNumber:17},void 0),i("span",{className:"separator",children:"|"},void 0,!1,{fileName:n,lineNumber:237,columnNumber:17},void 0),i("span",{className:"question-id",children:["ID: ",g]},void 0,!0,{fileName:n,lineNumber:238,columnNumber:17},void 0)]},void 0,!0,{fileName:n,lineNumber:233,columnNumber:15},void 0)]},void 0,!0,{fileName:n,lineNumber:231,columnNumber:13},void 0),i("div",{children:[r&&i("div",{className:"points",children:[r," Points"]},void 0,!0,{fileName:n,lineNumber:242,columnNumber:35},void 0),v]},void 0,!0,{fileName:n,lineNumber:241,columnNumber:13},void 0)]},void 0,!0,{fileName:n,lineNumber:230,columnNumber:11},void 0),i(C,{unpadded:m,children:b},void 0,!1,{fileName:n,lineNumber:247,columnNumber:9},void 0)]},void 0,!0,{fileName:n,lineNumber:228,columnNumber:7},void 0)]},void 0,!0,{fileName:n,lineNumber:226,columnNumber:5},void 0);c.displayName="OSStepCard";const q=({step:e,questionNumber:t,numberOfQuestions:s,children:d,className:r,...m})=>i(c,{...m,unpadded:!0,questionNumber:t,numberOfQuestions:s,stepType:"type"in e?e.type:"exercise",isHomework:"task"in e?e.task===void 0||e.task.type==="homework":!0,"data-task-step-id":e.id,availablePoints:e.available_points,className:$(`${"type"in e?e.type:"exercise"}-step`,r),questionId:e.uid,children:d},void 0,!1,{fileName:n,lineNumber:271,columnNumber:2},void 0);q.displayName="OSTaskStepCard";export{q as T};
