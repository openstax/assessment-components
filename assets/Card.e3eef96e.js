import{c as n,b as e}from"./theme.188cdec6.js";import{s as a,j as l,c as y,a as t}from"./index.20515251.js";const $=a.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  border-radius: 0.25rem;
  margin: 0 auto 5rem auto;
  border: 1px solid ${n.palette.light};
  border-radius: 0.25rem;
  background-color: white;

  ${e.desktop`
    max-width: 1000px;
    min-width: 750px;
  `}
`,k=a.div`
  padding: 2rem;

  ${e.tablet`
    padding: 0;
  `}
`,c=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${n.card.background};
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
    color: ${n.palette.gray};
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
`;c.displayName="StepCardHeader";a.div`
    padding: var(--step-card-padding-top) var(--step-card-padding-side);
    border-top: 1px solid ${n.palette.pale};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 2rem;

    > * {
        flex-grow: 1;
    }

    button {
        width: 160px;
        height: 48px;
    }

    .points {
        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        .attempts-left {
            color: #F36B32;
        }
    }

    .controls {
        display: flex;
        flex-flow: column wrap-reverse;
        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        button + button {
            margin: 0.8rem 0 0 0;
        }
    }

    ${e.desktop`
        padding: 32px var(--step-card-padding-side);
        flex-wrap: nowrap;

        .points {
            max-width: 400px;
        }

        .controls {
            flex-flow: row;
            justify-content: flex-end;

            button + button {
                margin: 0 0 0 0.8rem;
            }
        }
    `}
`;const S=a.div`
    --step-card-padding-top: 48px;
    --step-card-padding-side: 140px;

    ${e.only.tablet`
        --step-card-padding-top: ${e.margins.tablet};
        --step-card-padding-side: ${e.margins.tablet};
    `}

    ${e.only.mobile`
        --step-card-padding-top: calc(${e.margins.mobile} * 2);
        --step-card-padding-side: ${e.margins.mobile};
    `}


    ${i=>i.unpadded?".step-card-body":"&"} {
        padding: var(--step-card-padding-top) var(--step-card-padding-side);
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
`,m=({questionNumber:i,numberOfQuestions:s,stepType:o,isHomework:r,availablePoints:d,unpadded:p,className:g,children:x,questionId:h,multipartBadge:b,leftHeaderChildren:u,rightHeaderChildren:f,headerTitleChildren:v,...w})=>t(k,{...w,children:[b,t($,{className:g,children:[i&&r&&o==="exercise"&&t(c,{children:[t("div",{children:[u,t("div",{className:"question-info",children:[v,t("span",{children:["Question ",i]}),t("span",{className:"num-questions",children:["\xA0/ ",s]}),l("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",h]})]})]}),t("div",{children:[t("div",{className:"points",children:[d," Points"]}),f]})]}),l(S,{unpadded:p,children:x})]})]});m.displayName="OSStepCard";const q=({step:i,questionNumber:s,numberOfQuestions:o,children:r,className:d,...p})=>l(m,{...p,unpadded:!0,questionNumber:s,numberOfQuestions:o,stepType:i.type,isHomework:i.task.type==="homework","data-task-step-id":i.id,availablePoints:i.available_points,className:y(`${i.type}-step`,d),questionId:i.uid,children:r});q.displayName="OSTaskStepCard";export{q as T};
