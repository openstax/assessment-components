import{c as l,b as e,m as $}from"./theme.97f2c7df.js";import{s as t,j as p,c as k,a as i}from"./index.6f8b1925.js";const w=t.div`
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

  ${e.desktop`
    max-width: 1000px;
    min-width: 750px;
  `}
`,S=t.div`
  padding: 2rem;

  ${e.tablet`
    padding: 0;
  `}
`,m=t.div`
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

  ${e.desktop`
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
    ${e.tablet`
        font-size: 1.6rem;
        line-height: 2.5rem;

        svg.ox-icon {
            display: inherit;
            margin: 0;
        }
        button.ox-icon-angle-left {
            margin-right: ${e.margins.tablet};
        }
        button.ox-icon-angle-right {
            margin-left: ${e.margins.tablet};
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

  ${e.mobile`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${e.margins.mobile};
      }
      button.ox-icon-angle-left {
          margin-right: ${e.margins.mobile};
      }
  `}
`;m.displayName="StepCardHeader";const C=t.div`
  .step-card-body {
    ${$.stepCardPadding()}
  }

    & + div .step-card-body {
        padding-top: 0;
    }

    &.exercise-context, &.exercise-stimulus, &.exercise-stem {
        padding-bottom: 0;
    }

    ${e.only.mobile`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `}

    .reading-step & {
        padding: 0;
    }

    ${e.desktop`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `}

    ${e.mobile`
        .openstax-exercise-badges svg {
            margin-right: ${e.margins.mobile};
        }
    `}

    &&& {
        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }
    }
`,c=({questionNumber:a,numberOfQuestions:n,stepType:s,isHomework:o,availablePoints:r,unpadded:d,className:g,children:h,questionId:x,multipartBadge:b,leftHeaderChildren:u,rightHeaderChildren:f,headerTitleChildren:v,...y})=>i(S,{...y,children:[b,i(w,{className:g,children:[a&&o&&s==="exercise"&&i(m,{children:[i("div",{children:[u,i("div",{className:"question-info",children:[v,i("span",{children:["Question ",a]}),i("span",{className:"num-questions",children:["\xA0/ ",n]}),p("span",{className:"separator",children:"|"}),i("span",{className:"question-id",children:["ID: ",x]})]})]}),i("div",{children:[i("div",{className:"points",children:[r," Points"]}),f]})]}),p(C,{unpadded:d,children:h})]})]});c.displayName="OSStepCard";const q=({step:a,questionNumber:n,numberOfQuestions:s,children:o,className:r,...d})=>p(c,{...d,unpadded:!0,questionNumber:n,numberOfQuestions:s,stepType:a.type,isHomework:a.task.type==="homework","data-task-step-id":a.id,availablePoints:a.available_points,className:k(`${a.type}-step`,r),questionId:a.uid,children:o});q.displayName="OSTaskStepCard";export{q as T};
