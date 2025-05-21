import{s as c,j as a,r as l,a as i}from"./index-8a93527d.js";import{c as p,b as t,l as T,m as A}from"./theme-bf5cfaa7.js";import{c as B}from"./index-ff89664c.js";const L=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  margin: 0 auto 5rem auto;
  border: 1px solid ${p.palette.light};
  border-radius: 0.25rem;
  background-color: white;
  overflow: hidden;

  ${t.desktop`
    max-width: 1000px;
  `}
`,H=c.div`
  padding: ${T.card.spacing};

  ${t.mobile`
    padding: 0;
  `}
`,k=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  background: ${p.card.header.background};
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: -0.72px;

  h2.question-info {
    display: flex;
    align-items: baseline;
    font-size: inherit;
    margin: inherit;

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
    color: ${p.palette.gray};
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

  ${t.desktop`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
  `}

    /*
    1. Show the arrows to move to previous and next question.
    2. Show the number of questions.
    3. Override box-shadow of icons when turned into a button.
    */
    ${t.tablet`
        font-size: 1.6rem;
        line-height: 2.5rem;

        svg.ox-icon {
            display: inherit;
            margin: 0;
        }
        button.ox-icon-angle-left {
            margin-right: ${t.margins.tablet};
        }
        button.ox-icon-angle-right {
            margin-left: ${t.margins.tablet};
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

  ${t.mobile`
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${t.margins.mobile};
      }
      button.ox-icon-angle-left {
          margin-right: ${t.margins.mobile};
      }
  `}
`;k.displayName="StepCardHeader";const M=c.div`
  .step-card-body {
    ${A.stepCardPadding()}
    overflow: auto;
    background: ${p.card.body.background};

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

    ${t.only.mobile`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `}

    .reading-step & {
        padding: 0;
    }

    ${t.desktop`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `}

    ${t.mobile`
        .openstax-exercise-badges svg {
            margin-right: ${t.margins.mobile};
        }
    `}

    &&& {
        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }
    }
`,Q=c.div`
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
`,$=({questionNumber:e,numberOfQuestions:s,showTotalQuestions:u,stepType:g,isHomework:h,availablePoints:o,unpadded:x,className:w,children:S,questionId:q,multipartBadge:E,leftHeaderChildren:F,rightHeaderChildren:b,headerTitleChildren:N,overlayChildren:r,...O})=>{const d=l.useRef(null),[C,m]=l.useState(!1),I=s>1?`Questions ${e} - ${e+s-1}`:`Question ${e}`,j=n=>{d.current&&!d.current.contains(n.relatedTarget)&&m(!1)},f=l.useCallback(()=>{m(!0)},[]),y=l.useCallback(()=>{var v;Array.from(((v=document.getElementById("step-card"))==null?void 0:v.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||[]).forEach(z=>{z.setAttribute("tabindex","-1")})},[]);return l.useEffect(()=>{const n=d.current;return n&&r&&(n.addEventListener("focus",f),y()),()=>{n==null||n.removeEventListener("focus",f)}},[r,d,f,y]),i(H,{...O,children:[E,a(L,{className:w,children:i("div",{ref:d,...r?{onMouseOver:()=>m(!0),onMouseLeave:()=>m(!1),onBlur:j,tabIndex:0}:{},children:[r&&C&&a(Q,{id:"overlay-element",children:r}),i("div",{id:"step-card",children:[e&&h&&g==="exercise"&&i(k,{className:"step-card-header",children:[i("div",{children:[F,i("h2",{className:"question-info",children:[N,a("span",{children:I}),u?i("span",{className:"num-questions",children:[" / ",s]}):null,a("span",{className:"separator",children:"|"}),i("span",{className:"question-id",children:["ID: ",q]})]})]}),o||b?i("div",{children:[o&&i("div",{className:"points",children:[o," Points"]}),b]}):null]}),a(M,{unpadded:x,children:S})]})]})})]})};$.displayName="OSStepCard";const D=({step:e,questionNumber:s,numberOfQuestions:u,children:g,className:h,overlayChildren:o,...x})=>a($,{...x,unpadded:!0,questionNumber:s,numberOfQuestions:u,stepType:"type"in e?e.type:"exercise",isHomework:"task"in e?e.task===void 0||e.task.type==="homework":!0,"data-task-step-id":e.id,className:B(`${"type"in e?e.type:"exercise"}-step`,h),questionId:e.uid,overlayChildren:o,children:g});D.displayName="OSTaskStepCard";export{L as I,H as O,D as T};
