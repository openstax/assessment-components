import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import a,{createElement as o}from"react";import i,{css as s,createGlobalStyle as l}from"styled-components";import c from"scroll-to-element";import{debounce as d,once as p}from"lodash";import{memoize as m,isEmpty as h}from"lodash/fp.js";import u from"weak-map";import{FontAwesomeIcon as b}from"@fortawesome/react-fontawesome";import{faBookOpen as f,faTriangleExclamation as g}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as w}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as x}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as v}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as $}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as k}from"@fortawesome/free-solid-svg-icons/faXmark";import{BulletList as y}from"react-content-loader";function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}function _(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const N="ABCDEFGHIJKLMNOPQRSTUVWXYZ",q=(e,t)=>e.id===t;function S(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}const A=a.createContext(()=>{throw new Error("context not initialized")}),I=["html","component","block"],M=t=>{let{html:r,component:n,block:o=!1}=t,i=_(t,I);const s=a.useContext(A);return a.useEffect(()=>{s()},[s,r]),void 0!==n?a.cloneElement(n,C({html:r},i)):e(o?"div":"span",C({dangerouslySetInnerHTML:{__html:r}},i))},E=["id"],T=t=>e("aside",{children:e(M,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),H=r=>{let{id:a}=r,o=_(r,E);const i=n("question-feedback",o.position||"bottom");return t("aside",{id:a,className:i,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(T,C({},o,{children:o.children}))]})};let O,j,z,P,F,L,J,R,Q,V,B,D,W,U=e=>e;const Z={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},G={palette:Z,answer:{neutral:Z.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:Z.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:Z.neutralDarker,background:Z.neutralLighter}},K=(...e)=>s(O||(O=U`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),Y=(...e)=>s(j||(j=U`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),X=(...e)=>s(z||(z=U`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),ee={answer:()=>s(F||(F=U`
    .answer-label {
      display: inline-flex;
    }
    color: ${0};
    .answer-letter-wrapper::before {
      width: ${0};
      height: ${0};
      min-width: ${0};
      min-height: ${0};
      border-radius: calc(${0} / 2);
      border-width: 2px;
      border-style: solid;
      border-color: #c6c6c6;
      color: ${0};
      transition: color ${0}, border-color ${0}, background-color ${0};
      background-color: ${0};
      font-family: "Neue Helvetica W01", Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      font-weight: normal;
    }
  `),Z.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",G.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",G.palette.white),answerColor:(e,t=!1)=>s(L||(L=U`
    .answer-letter-wrapper::before {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>ee.answerColor(G.answer.checked,!0),answerCorrect:e=>ee.answerColor(G.answer.correct,e),answerIncorrect:e=>ee.answerColor(G.answer.incorrect,e),answerHover:()=>s(J||(J=U`
    ${0};
    font-weight: bold;
  `),ee.answerColor(G.answer.hover)),answerCorrectAnswer:()=>ee.answerColor(G.answer.correct,!1),resetText:()=>s(R||(R=U`
    font-family:  "Neue Helvetica W01", Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
  `)),stepCardPadding:()=>s(Q||(Q=U`
    padding: 48px 140px;

    ${0}

    ${0}
  `),Y(V||(V=U`
      padding: ${0} ${0};
    `),"24px","24px"),K(B||(B=U`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(D||(D=U`
    ${0}

    z-index: 1;
    position: relative;
    border: ${0} solid ${0};
    background-color: ${0};
    background-clip: padding-box;
    max-width: ${0};
    margin: calc(${0} - 14px) 0 ${0} 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    color: ${0};
    font-size: calc(1.4rem * var(--content-text-scale));

    .arrow {
      position: absolute;
      display: block;
      width: ${0};
      height: ${0};
      margin-left: ${0};
      top: calc(${0} * -1);

      &::before,
      &::after {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;
        border-width: 0 calc(${0} / 2) ${0} calc(${0} / 2);
      }
      &::before {
        top: 0;
        border-bottom-color: ${0};
      }
      &::after {
        top: ${0};
        border-bottom-color: ${0};
      }
    }

    &.right {
      right: calc(-${0} - ${0});
      .arrow { right: ${0}; }
    }


    > .content {
      padding: ${0} ${0};
    }
  `),ee.resetText(),"1px",G.popover.borderColor,G.palette.white,"325px","8px","1rem",G.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",G.popover.borderColor,"1px",G.palette.white,"9px","1px","9px","1rem","0.8rem"),visuallyHidden:()=>s(W||(W=U`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `))};let te;const re=i.div(te||(te=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`),e=>e.state?G.answer.correct:G.answer.incorrect),ne=({isCorrect:e,isIncorrect:r})=>{if(!e&&!r)return null;const n=e||!1===r;return t(re,{state:n,children:[n?"Correct":"Incorrect"," Answer"]})},ae=r=>{const{answer:{content_html:n,feedback_html:a},contentRenderer:o,show_all_feedback:i,tableFeedbackEnabled:s,isCorrect:l,isIncorrect:c}=r;return t("div",{className:"answer-answer",children:[e(ne,{isCorrect:l,isIncorrect:c}),e(M,{className:"answer-content",component:o,html:n}),i&&a&&!s&&e(T,{contentRenderer:o,children:a},"question-mc-feedback")]})},oe=r=>{const{answer:a,answered_count:o,isCorrect:i,contentRenderer:s,iter:l,show_all_feedback:c,tableFeedbackEnabled:d}=r,p=a.selected_count&&o?Math.round(a.selected_count/o*100):0;return t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:i,red:!i}),children:[e("span",{className:"selected-count","data-percent":`${p}`,children:a.selected_count}),e("span",{className:n("letter",{green:i,red:!i}),children:N[l]})]}),e(ae,{answer:a,contentRenderer:s,show_all_feedback:c,tableFeedbackEnabled:d})]})},ie=n=>{const{type:a,iter:o,answer:i,disabled:s,onKeyPress:l,qid:c,contentRenderer:d,correctIncorrectIcon:p,feedbackId:m,isSelected:h,isCorrect:u,isIncorrect:b,hasCorrectAnswer:f,show_all_feedback:g,tableFeedbackEnabled:w}=n,x=`${h?"Selected ":""}Choice ${N[o]}:`;let v;return f||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:v}=n),t(r,{children:["teacher-preview"===a&&e("div",{className:"correct-incorrect",children:u&&p}),e("input",{type:"radio",className:"answer-input-box",checked:h,id:`${c}-option-${o}`,name:`${c}-options`,onChange:()=>v&&v(i),disabled:s||!v,"aria-details":m}),t("label",{onKeyPress:l,htmlFor:`${c}-option-${o}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper","aria-label":x,"data-answer-choice":N[o],"data-test-id":`answer-choice-${N[o]}`}),e(ae,{answer:i,contentRenderer:d,show_all_feedback:g,tableFeedbackEnabled:w,isCorrect:u,isIncorrect:b})]})]})},se=t=>e("teacher-review"===t.type?oe:ie,C({},t)),le=t=>{const{type:r,answer:a,disabled:o,answerId:i,correctAnswerId:s,incorrectAnswerId:l}=t,c=((e,t)=>e.id==t)(a,i),d=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(a,s),p=q(a,l),m=c||void 0===i&&(!l&&d||p),h=n("answers-answer",{disabled:o,"answer-selected":m,"answer-correct":d&&"student-mpp"!==r,"answer-incorrect":l&&q(a,l)});return e("div",{className:"openstax-answer",children:e("section",{className:h,children:e(se,C({},t,{isCorrect:d,isSelected:m,isIncorrect:p}))})})};le.displayName="OSAnswer";const ce="student",de=r=>{let n=0;const{question:a,hideAnswers:o,type:i=ce,answered_count:s,choicesEnabled:l,correct_answer_id:c,incorrectAnswerId:d,answer_id:p,feedback_html:m,correct_answer_feedback_html:h,show_all_feedback:u=!1,tableFeedbackEnabled:b,hasCorrectAnswer:f,onChangeAnswer:g,onKeyPress:w,answerIdOrder:x,instructions:v}=r;if(o)return null;const{id:$}=a,k=[],y={qid:$||"auto-"+n++,answerId:p,correctAnswerId:c,incorrectAnswerId:d,hasCorrectAnswer:f,onChangeAnswer:g,type:i,answered_count:s,disabled:!l,show_all_feedback:u,tableFeedbackEnabled:b,onKeyPress:w},_=(x?(e=>{const{answers:t}=a;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(x):a.answers).map((t,r)=>{const n={answer:C({},t,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:r,key:`${y.qid}-option-${r}`},o=Object.assign({},n,y);let i,s;return u&&t.feedback_html&&b?i=t.feedback_html:t.id===d&&m?i=m:t.id===c&&h&&(i=h),i&&(s=`feedback-${y.qid}-${r}`,k.push({index:r,html:i,id:s})),e(le,C({feedbackId:s},o))});return k.forEach((t,n)=>{const a=t.index+n+1;_.splice(a,0,e(H,{id:t.id,contentRenderer:r.contentRenderer,children:t.html},a))}),t("div",{role:"radiogroup","aria-label":"Answer choices",className:"answers-table",children:[v,_]})},pe=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],me=["step","questionNumber","numberOfQuestions","children","className"];let he,ue,be,fe,ge,we,xe,ve,$e,ke,ye,Ce,_e=e=>e;const Ne=i.div(he||(he=_e`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  margin: 0 auto 5rem auto;
  border: 1px solid ${0};
  border-radius: 0.25rem;
  background-color: white;
  overflow: hidden;

  ${0}
`),G.palette.light,X(ue||(ue=_e`
    max-width: 1000px;
  `))),qe=i.div(be||(be=_e`
  padding: ${0};

  ${0}
`),"2rem",K(fe||(fe=_e`
    padding: 0;
  `))),Se=i.div(ge||(ge=_e`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  background: ${0};
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
    color: ${0};
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

  ${0}

    /*
    1. Show the arrows to move to previous and next question.
    2. Show the number of questions.
    3. Override box-shadow of icons when turned into a button.
    */
    ${0}

  ${0}
`),G.card.header.background,G.palette.gray,X(we||(we=_e`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),Y(xe||(xe=_e`
        font-size: 1.6rem;
        line-height: 2.5rem;

        svg.ox-icon {
            display: inherit;
            margin: 0;
        }
        button.ox-icon-angle-left {
            margin-right: ${0};
        }
        button.ox-icon-angle-right {
            margin-left: ${0};
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
  `),"24px","24px"),K(ve||(ve=_e`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));Se.displayName="StepCardHeader";const Ae=i.div($e||($e=_e`
  .step-card-body {
    ${0}
    overflow: auto;
    background: ${0};

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

    ${0}

    .reading-step & {
        padding: 0;
    }

    ${0}

    ${0}

    &&& {
        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }
    }
`),ee.stepCardPadding(),G.card.body.background,((...e)=>s(P||(P=U`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(ke||(ke=_e`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),X(ye||(ye=_e`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),K(Ce||(Ce=_e`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),Ie=r=>{let{questionNumber:n,numberOfQuestions:a,showTotalQuestions:o,stepType:i,isHomework:s,availablePoints:l,unpadded:c,className:d,children:p,questionId:m,multipartBadge:h,leftHeaderChildren:u,rightHeaderChildren:b,headerTitleChildren:f}=r,g=_(r,pe);return t(qe,C({},g,{children:[h,t(Ne,{className:d,children:[n&&s&&"exercise"===i&&t(Se,{className:"step-card-header",children:[t("div",{children:[u,t("h2",{className:"question-info",children:[f,e("span",{children:a>1?`Questions ${n} - ${n+a-1}`:`Question ${n}`}),o?t("span",{className:"num-questions",children:[" / ",a]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",m]})]})]}),l||b?t("div",{children:[l&&t("div",{className:"points",children:[l," Points"]}),b]}):null]}),e(Ae,{unpadded:c,children:p})]})]}))};Ie.displayName="OSStepCard";const Me=t=>{let{step:r,questionNumber:a,numberOfQuestions:o,children:i,className:s}=t,l=_(t,me);return e(Ie,C({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:i}))};Me.displayName="OSTaskStepCard";const Ee=["disabled","isWaiting","waitingText","children"];let Te;const He=i.button(Te||(Te=(e=>e)`
  background-color: ${0};
  color: ${0};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: ${0}
    }
    &:active {
      background: ${0}
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`),G.button.background,G.palette.white,G.button.backgroundHover,G.button.backgroundActive),Oe=t=>{const{disabled:r,isWaiting:n,waitingText:a,children:o}=t,i=_(t,Ee);return e(He,C({},i,{disabled:n||r,children:n&&a||o}))};let je,ze,Pe,Fe,Le=e=>e;const Je=l(je||(je=Le`
  :root {
    --content-text-scale: 1;
  }
`)),Re=i(Ne)(ze||(ze=Le`
  padding: 88px 72px;
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(3rem * var(--content-text-scale));
  display: block;

  button {
    min-width: 160px;
    height: 48px;
  }

  p {
    margin: 16px 0 20px 0;
  }
`)),Qe=i.h2(Pe||(Pe=Le`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`)),Ve=i(({numberOfQuestions:n,numberCompleted:a,handleClick:o,className:i})=>{const s=n===a,l=a>0,c=s?"Next":l?"Continue":"Start";return t(r,{children:[e(Je,{}),t(Re,{className:i,children:[e(Qe,{children:s?"You are done.":l?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:s?"Great job answering all the questions.":l?`You've completed ${a} of ${n} questions.`:"Begin working on the quiz."}),e(Oe,{"data-test-id":`${c.split(" ")[0].toLowerCase()}-btn`,onClick:()=>o(),children:c})]})]})})(Fe||(Fe=Le``));let Be;const De=i.div(Be||(Be=(e=>e)`
&.step-card-body {
  ${0};
}

&.openstax-question {
  border-top: 1px solid ${0};
  font-size: calc(1.8rem * var(--content-text-scale));

  .detailed-solution {
    margin-bottom: 1rem;
    .header {
      display: inline;
      margin-right: 0.5rem;
      color: #5e6062;
      font-weight: bold;
      flex-basis: 0;
    }
    .solution {
      display: inline;
      color: #6f6f6f;
    }
  }

  img {
    display: block;
    margin: auto;
    max-width: 100%;
  }

  .question-stem {
    margin-bottom: 0;
  }

  .answers-table {
    margin-bottom: 20px;
    font-size: calc(1.6rem * var(--content-text-scale));
    line-height: calc(2rem * var(--content-text-scale));
  }

  .instructions {
    font-size: 1.4rem;
    font-style: italic;
    margin-top: 10px;
    color: ${0};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${0};
      padding-left: 5px;
      cursor: pointer;
      font-style: normal;
    }
  }

  .multiple-choice-prompt {
    font-weight: 600;
  }

  .free-response {
    padding: ${0} ${0};
    margin: ${0} 0 ${0} ${0};
    border-left: ${0} solid ${0};
    font-style: italic;
  }

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &:not(.disabled){
        .answer-label:focus{
          background-color: ${0};
        }
      }
      &.answer-selected {
        font-weight: bold;
      }
      ${0};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: ${0};
      * {
        margin: 0;
      }
    }

    .answer-letter-wrapper::before {
      content: attr(data-answer-choice);
      text-align: center;
      padding: 0;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .answer-label {
      width: 100%;
      padding: ${0} 0 0 0;
      margin: 0;
      transition: color ${0};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${0}
      }
    }

    .answer-input-box {
      ${0}
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${0};
          }
        }

        &:focus-visible {
          + .answer-label .answer-letter-wrapper::before {
            outline-style: solid;
            outline-width: 2px;
            outline-offset: 2px;
            outline-color: ${0};
          }
        }
      }

      .answer-selected {
        .answer-label, .answer-label:hover {
          ${0};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-selected {
        &:not(.answer-correct) {
          .answer-label {
            ${0};
          }
        }

        &.answer-correct {
          .answer-label {
            ${0};
          }
        }
      }

      .answer-correct:not(.answer-selected) {
        .answer-label {
          ${0}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect {
        .answer-label, .answer-label:hover {
          ${0}
        }
        &.answer-selected.answer-incorrect {
          ${0}
        }
      }
    }

    .question-feedback {
      ${0}
      max-width: ${0};
      .question-feedback-content {
        padding: ${0} ${0};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 6px 8px;
  }
}
`),ee.stepCardPadding(),G.palette.pale,G.palette.neutral,G.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",G.palette.neutralLighter,G.palette.neutralLightest,ee.answer(),"1rem","1rem","0.1s ease-in-out",ee.answerHover(),ee.visuallyHidden(),ee.answerChecked(),G.answer.checked,ee.answerChecked(),ee.answerIncorrect(),ee.answerCorrect(!0),ee.answerCorrectAnswer(),ee.answerIncorrect(),ee.answerIncorrect(!0),ee.popover(),"370px","0.9rem","1.1rem"),We=a.forwardRef((r,a)=>{let o,i;const{question:s,correct_answer_id:l,incorrectAnswerId:c,exercise_uid:d,className:p,questionNumber:m,context:h,task:u,hidePreambles:b}=r,{stem_html:f,collaborator_solutions:g=[],formats:w,stimulus_html:x}=s,v=!!l,$=n("openstax-question",p,{"has-correct-answer":v&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!c});return null!=d&&(o=e("div",{className:"exercise-uid",children:d})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(M,{className:"solution",block:!0,html:g.map(e=>e.content_html).join("")})]})),t(De,{ref:a,className:$,"data-question-number":m,"data-test-id":"question",children:[e(Ue,{type:"context",html:h,hidden:b}),e(Ue,{type:"stimulus",html:x,hidden:b}),e(Ue,{type:"stem",html:f,hidden:b,questionNumber:m}),r.children,e(de,C({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),i,r.displayFormats?e(Ze,{formats:w}):void 0,o]})}),Ue=t=>{const{html:r="",type:n,hidden:a,questionNumber:o}=t;return!0!==a&&r.length>0?e(M,{html:r,"data-question-number":o,className:`question-${n}`,block:!0}):null},Ze=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let Ge,Ke,Ye,Xe=e=>e;const et=i.div(Ge||(Ge=Xe`
    ${0}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: calc(1.4rem * var(--content-text-scale));
    line-height: calc(2rem * var(--content-text-scale));
    background: ${0};
    overflow: auto;

    > * {
        flex-grow: 1;
    }

    button {
        width: 160px;
        height: 48px;
    }

    .step-card-footer-inner {
        border-top: 1px solid ${0};
        padding-top: 32px;
        display: flex;
        justify-content: space-between;
        gap: 1.6rem;

        ${0}
    }

    .points {
        .attempts-left {
          color: #B03808;
          font-weight: bold;
        }
    }

    .controls {
        display: flex;
        flex-flow: column wrap-reverse;

        button + button {
            margin: 0.8rem 0 0 0;
        }
    }

    ${0}
`),ee.stepCardPadding(),G.card.body.background,G.palette.pale,K(Ke||(Ke=Xe`
            flex-wrap: wrap;
        `)),X(Ye||(Ye=Xe`
        padding: 0 140px 32px 140px;
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
    `)));let tt,rt,nt,at,ot,it,st=e=>e;const lt=s(tt||(tt=st`
  background-color: #f5e9ea;
`)),ct=i.div(rt||(rt=st`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),ee.stepCardPadding()),dt=i.div(nt||(nt=st`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),pt=i.div(at||(at=st`
  margin: 8px 0;
  display: flex;
  justify-content: ${0};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${0};
  }

  div > span {
    font-size: 12px;
    line-height: 16px;

    + span {
      margin-left: 1rem;
    }
  }

  .last-submitted + * {
    margin-top: 0.8rem;
  }

  color: ${0};
`),e=>e.hasChildren?"space-between":"flex-end",G.palette.danger,G.palette.neutralThin),mt=i.textarea(ot||(ot=st`
  display: block;
  font-family: inherit;
  font-size: 1.8rem;
  line-height: 3rem;
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${0};
  color: ${0};
  ${0};
  ${0}
  background-color: ${0};
`),G.palette.neutral,G.palette.neutralDark,e=>e.isOverWordLimit&&lt,e=>e.isOverWordLimit&&s(it||(it=st`
    border: 2px solid ${0};
  `),G.palette.danger),e=>e.readOnly&&G.palette.neutralCool);mt.displayName="OSFreeResponseTextArea";const ht=t=>e(Oe,C({},t,{children:"Cancel"})),ut=r=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,question:l,questionNumber:c,saveHandler:d,submitBtnLabel:p,textHasChanged:m,wordLimit:h}=r,u=S(o)>h,b={};return c&&(b["data-question-number"]=c),t(ct,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(dt,C({},b,{children:l.stem_html&&e(Ue,{type:"stem",html:l.stem_html,hidden:!1})})),e(mt,C({},r,{isOverWordLimit:u,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(pt,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[S(o)," words"]}),u&&t("span",{className:"word-limit-error-info",children:["Maximum ",h," words"]})]})]})]}),t(et,{children:[n?e("div",{className:"points",role:"status",children:t("strong",{children:["Points: ",n]})}):null,t("div",{className:"controls",children:[e(ht,{disabled:!m,onClick:a}),e(Oe,{"data-test-id":"submit-answer-btn",disabled:s||u,onClick:d,children:p})]})]})]})};ut.displayName="OSFreeResponse";const bt=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),ft=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,gt=t=>e(Oe,C({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),wt=t=>e(Oe,C({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),xt=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,vt=a.forwardRef((r,n)=>{const{question:o,task:i,answer_id_order:s,onAnswerChange:l,feedback_html:c,correct_answer_feedback_html:d,is_completed:p,correct_answer_id:m,incorrectAnswerId:h,choicesEnabled:u,questionNumber:b,answer_id:f,hasMultipleAttempts:g,attempts_remaining:w,published_comments:x,detailedSolution:v,canAnswer:$,needsSaved:k,attempt_number:y,apiIsPending:C,onAnswerSave:_,onNextStep:N,canUpdateCurrentStep:q,displaySolution:S,available_points:A,free_response:I,show_all_feedback:E,tableFeedbackEnabled:T,hasFeedback:H}=r,[O,j]=a.useState(!1);return a.useEffect(()=>{O&&p&&(N(b-1),j(!1))},[N,b,O,p]),t("div",{"data-test-id":"student-exercise-question",children:[e(We,{ref:n,task:i,question:o,answerIdOrder:s,choicesEnabled:u,answer_id:f,questionNumber:b,onChange:l,feedback_html:c,correct_answer_feedback_html:d,correct_answer_id:p?m:null,incorrectAnswerId:h,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:S,show_all_feedback:E,tableFeedbackEnabled:T,children:e(xt,{free_response:I})}),e(et,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[A?t("strong",{children:["Points: ",A]}):null,e("span",{className:"attempts-left",children:g&&w>0&&e(bt,{count:w})}),e(ft,{published_comments:x}),v&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(M,{html:v})]})]}),e("div",{className:"controls",children:$&&k||O?e(gt,{disabled:C||!f||O,isWaiting:C||O,attempt_number:y,onClick:()=>{var e;_("string"==typeof(e=o.id)?parseInt(e,10):e),H||j(!0)},willContinue:!H}):e(wt,{onClick:()=>N(b-1),canUpdateCurrentStep:q})})]})})]})}),$t={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},kt=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},yt=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},Ct=(e,t,r=5)=>{r>0&&(yt(e).length||kt(e).length)?setTimeout(()=>{Ct(e,t,r-1)},200):t()},_t=(e,t)=>new Promise(r=>{(function(e,t){const r=yt(e);t.MathJax.Hub.Queue(((e,t)=>()=>{h(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=kt(e);h(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{Ct(e,r)})}),Nt=m((e,t)=>d(_t,100,{leading:!0,trailing:!1}).bind(null,e,t));Nt.cache=new u;const qt=p((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config($t),e.MathJax.Hub.processSectionDelay=0,r()):($t.AuthorInit=r,e.MathJax=$t)}));let St,At,It,Mt,Et,Tt=e=>e;const Ht=i.div(St||(St=Tt`
  position: absolute;
  background: #fff;
  width: 4.5rem;
  border: 1px solid ${0};
  background: #fff;
  margin: ${0} 0 0 ${0};
  z-index: 1;

  > * {
    height: 4.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${0};
    background: #fff;
    text-decoration: none;

    &:after {
      border-bottom: 1px solid #f1f1f1;
    }

    svg {
      width: 4.3rem;
      height: 1.6rem;
      transition: color 150ms;
    }

    span {
      display: none;
      flex-grow: 1;
      font-size: 1.4rem;
      color: ${0};
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;
      width: 20rem;

      svg {
        color: ${0};
      }

      span {
        display: block;
      }
    }
  }

  ${0}

  ${0}
`),G.palette.light,"2rem","2rem",G.palette.neutral,G.palette.neutralDarker,G.palette.neutralDarker,e=>!e.desktop&&s(At||(At=Tt`
    ${0}
    ${0}
  `),X(It||(It=Tt`
      display: none;
    `)),Y(Mt||(Mt=Tt`
      display: none;
    `))),e=>e.mobile&&K(Et||(Et=Tt`
    display: block;
    position: relative;
    width: auto;
    display: flex;
    flex-direction: row;
    margin: 0;

    &:not(:last-child) {
      border-bottom: 0;
    }

    > * {
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.8rem 0.6rem;
      height: auto;
      min-height: 4.8rem;

      &:hover {
        width: auto;
      }

      span {
        display: block;
        font-size: 1rem;
        margin-top: 0.2rem;
        color: ${0};
        text-align: center;
      }

      & + * {
        border-left: 1px solid ${0};
      }
    }
  `),G.palette.neutral,G.palette.light)),Ot=({icons:r})=>{var n,a;if(!r)return null;const o=Object.values(r),i=o.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),s=o.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),l=null==(n=r.topic)?void 0:n.url,c=null==(a=r.errata)?void 0:a.url;return t(Ht,C({},{mobile:i,desktop:s},{children:[l?t("a",{href:l,target:"_blank",children:[e(b,{icon:f}),e("span",{children:"View topic in textbook"})]}):null,c?t("a",{href:c,target:"_blank",children:[e(b,{icon:g}),e("span",{children:"Suggest a correction"})]}):null]}))};let jt,zt,Pt,Ft,Lt,Jt,Rt,Qt,Vt,Bt=e=>e;const Dt=i.div(jt||(jt=Bt`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),G.palette.mediumBlue,e=>!e.desktop&&s(zt||(zt=Bt`
    ${0}
    ${0}
  `),X(Pt||(Pt=Bt`
      display: none;
    `)),Y(Ft||(Ft=Bt`
      display: none;
    `))),e=>!e.mobile&&K(Lt||(Lt=Bt`
    display: none;
  `))),Wt=i.div(Jt||(Jt=Bt`
  position: relative;
  display: flex;
`)),Ut=i.div(Rt||(Rt=Bt`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),ee.popover),Zt=r=>e(Dt,C({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(Wt,{children:[r.children,t(Ut,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),Gt=i.div(Qt||(Qt=Bt`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),Kt=i(b)(Vt||(Vt=Bt`
  color: ${0};
  height: 1em;
`),G.palette.darkGray),Yt=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},a=[],o=t.questions.every(e=>e.answers.length>0);let i;var s,l,c;return o&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":o&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&a.push(e(Zt,C({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(s=r.topic.location)?void 0:s.header)||n,{children:e(Kt,{icon:w})}),"topic")),r.errata&&a.push(e(Zt,C({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(l=r.errata.location)?void 0:l.header)||n,{children:e(Kt,{icon:x})}),"errata")),r.info&&i&&a.push(e(Zt,C({text:i},(null==(c=r.info.location)?void 0:c.header)||n,{children:e(Kt,{icon:v,height:"16px",width:"16px"})}),"type")),e(Gt,{children:a})};let Xt;const er=s(Xt||(Xt=(e=>e)`
  &.preview-card {
    --spacing: 0.8rem;

    .step-card-header,
    .step-card-body {
      padding: var(--spacing);
      font-size: 1.6rem;
      line-height: 2rem;
    }

    .step-card-footer {
      padding: 0 var(--spacing) var(--spacing);
    }

    .step-card-footer-inner {
      padding-top: var(--spacing);
    }

    .answers-table {
      margin: 0;
    }

    .exercise-context {
      .os-title {
        margin: 0 0 var(--spacing);
      }
      .os-subtitle {
        margin: var(--spacing) 0;
      }
      figure {
        float: left;
        margin: 0;
      }
      img {
        max-width: 16rem;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
    .openstax-question {
      .openstax-answer {
        padding: 0;

        .answer-label {
          padding-top: var(--spacing);
        }

        .answer-letter-wrapper {
          .answer-answer {
            margin-left: var(--spacing);
          }
        }

        .answer-letter {
          min-width: 2.8rem;
          min-height: 2.8rem;
          width: 2.8rem;
          height: 2.8rem;
          display: flex;
        }
      }

      .question-feedback-content {
        font-size: 1.6rem;
      }

      .points,
      .question-feedback {
        max-width: unset;
      }
    }

    .step-card-footer {
      display: none;
    }

    .question-stem,
    .question-feedback-content {
      line-height: 2rem;
    }
  }
`)),tr=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons"];let rr,nr,ar,or,ir,sr,lr,cr,dr,pr,mr=e=>e;const hr=i(Me)(rr||(rr=mr`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),ur=l(nr||(nr=mr`
  :root {
    --content-text-scale: 1;
  }
`)),br=i.div(ar||(ar=mr`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&s(or||(or=mr`
    ${0}
    ${0}
    ${0}
  `),X(ir||(ir=mr`
      ${0} {
        margin-left: 6.8rem;
      }
    `),hr),Y(sr||(sr=mr`
      ${0} {
        margin-left: 4.8rem;
      }
    `),hr),K(lr||(lr=mr`
      ${0} {
        margin-left: 0;
      }
    `),hr)),e=>e.mobileToolbarEnabled&&s(cr||(cr=mr`
    ${0}
  `),K(dr||(dr=mr`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),Ht,qe,Ne))),fr=r=>t(br,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(Ot,{icons:r.exerciseIcons}),e(hr,C({},r))]}),gr=({exercise:n})=>t(r,{children:[n.context&&e(M,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(M,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),wr=i(r=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:l,show_all_feedback:d,scrollToQuestion:p,exerciseIcons:m}=r,h=_(r,tr);const u="feedback_html"in s,b=a.useRef([]),f=a.useRef(null),g=a.useCallback(()=>{f.current&&(async(e,t=window)=>{await qt(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?Nt(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(f.current)},[]);a.useEffect(()=>{const e=p&&b.current[p];e&&c(e)},[p,l]);const w=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),x=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile});return t(A.Provider,{value:g,children:[e(ur,{}),e(fr,C({step:s,questionNumber:i,numberOfQuestions:u?n:l.questions.length,rightHeaderChildren:m?e(Yt,{exercise:l,icons:m}):null,showTotalQuestions:u,desktopToolbarEnabled:w,mobileToolbarEnabled:x},m?{exerciseIcons:m}:null,{className:h.className,children:t("div",{ref:f,children:[e(gr,{exercise:l}),l.questions.map((e,t)=>{var r;const n=C({},u?s:h.questionStates[e.id]);return o(vt,C({},h,C({},n,{available_points:void 0}),{ref:e=>b.current[i+t]=e,exercise_uid:l.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:d,tableFeedbackEnabled:d&&!u,canUpdateCurrentStep:"canUpdateCurrentStep"in h?h.canUpdateCurrentStep:!(t+1===l.questions.length)}))})]})}))]})})(pr||(pr=mr`
  ${0}
`),er),xr=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let vr,$r,kr,yr,Cr,_r,Nr,qr,Sr,Ar,Ir=e=>e;const Mr=i.nav(vr||(vr=Ir`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),K($r||($r=Ir`
    padding: 1.6rem 0.8rem;
  `))),Er=i.span(kr||(kr=Ir`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),Tr="box-shadow: 0px 1px 4px 0px #00000066;",Hr=i.button(qr||(qr=Ir`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${0};
  height: ${0};
  border: 0;
  border-radius: 50%;
  margin: ${0};
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  color: ${0};
  ${0}
  ${0}
  &:hover {
    ${0}
  }
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",G.palette.neutralDarker,e=>e.isActive?s(Sr||(Sr=Ir`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),Tr):null,e=>(e=>{switch(e){case"isStatus":return s(yr||(yr=Ir`
        background-color: ${0};
      `),G.palette.neutralBright);case"isCorrect":return s(Cr||(Cr=Ir`
        color: ${0};
        background-color: #E8F4D8;
      `),G.answer.correct);case"isIncorrect":return s(_r||(_r=Ir`
        color: ${0};
        background-color: #F8E8EA;
      `),G.answer.incorrect);default:return s(Nr||(Nr=Ir`
        background-color: ${0};
      `),G.palette.neutralBright)}})(e.variant),Tr),Or=i(b)(Ar||(Ar=Ir`
  background: ${0};
  color: #fff;
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  padding: 0.1rem;
  font-size: 1.2rem;
  border-radius: 50%;
`),e=>e.color),jr=({variant:t})=>{if(!t||"isCorrect"!==t&&"isIncorrect"!==t)return null;const r={isCorrect:{icon:$,color:G.answer.correct,label:"Correct"},isIncorrect:{icon:k,color:G.answer.incorrect,label:"Incorrect"}}[t];return e(Or,{icon:r.icon,color:r.color,height:"16px",width:"16px","aria-label":r.label,"aria-hidden":void 0})},zr=({index:r,isActive:n,step:a,goToStep:o})=>t(Er,{children:[e(Hr,{variant:a.variant,isActive:n,onClick:()=>o(r,a),"aria-current":n?"location":"false","aria-label":"isStatus"===a.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===a.variant?e(xr,{}):r+1}),e(jr,{variant:a.variant})]}),Pr=({steps:t,activeIndex:r,goToStep:n})=>e(Mr,{"aria-label":"Breadcrumbs",children:t.map((t,a)=>e(zr,{index:a,isActive:a===r,step:t,goToStep:n},a))});let Fr;const Lr=i.div(Fr||(Fr=(e=>e)`
  max-width: 1000px;
  @media(min-width: 960px) {
    // Around the height of a multiple choice with 4 options
    min-height: 53.8rem;
  }
  padding: 2rem;
  margin: 2rem;
  border: 1px solid ${0};
  border-radius: 0.25rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    max-width: 600px;
    flex-grow: 1;
  }
`),G.palette.light),Jr=()=>e(Lr,{children:e(y,{uniqueKey:"OSLoader"})});export{le as Answer,de as AnswersTable,Ve as CompletionStatus,wr as Exercise,Ot as ExerciseToolbar,ut as FreeResponseInput,mt as FreeResponseTextArea,Ne as InnerStepCard,Jr as Loader,qe as OuterStepCard,Pr as ProgressBar,zr as ProgressBarItem,We as Question,Ue as QuestionHtml,Ie as StepCard,Hr as StyledItem,Ht as StyledToolbar,Me as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
