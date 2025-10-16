import{s as o,j as a,r as p,a as i}from"./index-68e65b2a.js";import{c as r,b as t,l as M,m as Q}from"./theme-468bcf18.js";import{c as R}from"./index-29945ffc.js";const D=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 0 auto 5rem auto;
  border: 0.1rem solid ${r.palette.pale};
  border-radius: 0.25rem;
  background-color: white;
  overflow: hidden;

  ${t.desktop`
    max-width: 1000px;
  `}
`,U=o.div`
  padding: ${M.card.spacing};

  ${t.mobile`
    padding: 0;
  `}
`,F=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  background: ${r.card.header.background};
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
    color: ${r.palette.gray};
  }

  .scoring {
    margin-left: auto;
    margin-right: 1rem;

    span {
      font-size: 1.2rem;
      font-weight: normal;
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
`,G=o.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${r.palette.darkRed};
  border-radius: 0.5rem;
  width: 7.8rem;
  height: 1.9rem;
  padding: 0.2rem 0.4rem;

  span {
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: ${r.palette.white};
  }
`;F.displayName="StepCardHeader";const J=o.div`
  .step-card-body {
    ${Q.stepCardPadding()}
    overflow: auto;
    background: ${r.card.body.background};

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
`,K=o.div`
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
`,N=({questionNumber:e,numberOfQuestions:d,showTotalQuestions:g,stepType:h,isHomework:x,availablePoints:l,unpadded:f,className:q,children:E,questionId:O,multipartBadge:C,leftHeaderChildren:j,rightHeaderChildren:y,headerTitleChildren:z,overlayChildren:c,showScoring:I,totalScoring:n,isGraded:S,...H})=>{var k,$;const m=p.useRef(null),[T,u]=p.useState(!1),A=d>1?`Questions ${e} - ${e+d-1}`:`Question ${e}`,B=s=>{m.current&&!m.current.contains(s.relatedTarget)&&u(!1)},b=p.useCallback(()=>{u(!0)},[]),v=p.useCallback(()=>{var w;Array.from(((w=document.getElementById("step-card"))==null?void 0:w.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||[]).forEach(L=>{L.setAttribute("tabindex","-1")})},[]);return p.useEffect(()=>{const s=m.current;return s&&c&&(s.addEventListener("focus",b),v()),()=>{s==null||s.removeEventListener("focus",b)}},[c,m,b,v]),i(U,{...H,children:[C,a(D,{className:q,children:i("div",{ref:m,...c?{onMouseOver:()=>u(!0),onMouseLeave:()=>u(!1),onBlur:B,tabIndex:0}:{},children:[c&&T&&a(K,{id:"overlay-element",children:c}),i("div",{id:"step-card",children:[e&&x&&h==="exercise"&&i(F,{className:"step-card-header",children:[i("div",{children:[j,i("h2",{className:"question-info",children:[z,a("span",{children:A}),g?i("span",{className:"num-questions",children:[" / ",d]}):null,a("span",{className:"separator",children:"|"}),i("span",{className:"question-id",children:["ID: ",O]})]})]}),I&&a("div",{className:"scoring",children:S?i("span",{children:[(k=n==null?void 0:n.score)==null?void 0:k.toFixed(1),"/",($=n==null?void 0:n.maxScore)==null?void 0:$.toFixed(1),n!=null&&n.maxScore&&n.maxScore>1.1?" points":" point"]}):a(G,{children:a("span",{children:"ungraded"})})}),l||y?i("div",{children:[l&&i("div",{className:"points",children:[l," Points"]}),y]}):null]}),a(J,{unpadded:f,children:E})]})]})})]})};N.displayName="OSStepCard";const P=({step:e,questionNumber:d,numberOfQuestions:g,children:h,className:x,overlayChildren:l,...f})=>a(N,{...f,unpadded:!0,questionNumber:d,numberOfQuestions:g,stepType:"type"in e?e.type:"exercise",isHomework:"task"in e?e.task===void 0||e.task.type==="homework":!0,"data-task-step-id":e.id,className:R(`${"type"in e?e.type:"exercise"}-step`,x),questionId:e.uid,overlayChildren:l,children:h});P.displayName="OSTaskStepCard";export{D as I,U as O,P as T};
