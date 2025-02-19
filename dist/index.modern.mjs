import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import a,{createElement as o}from"react";import i,{css as s,createGlobalStyle as l}from"styled-components";import c from"scroll-to-element";import{debounce as d,once as p}from"lodash";import{memoize as m,isEmpty as u}from"lodash/fp.js";import h from"weak-map";import{FontAwesomeIcon as b}from"@fortawesome/react-fontawesome";import{faBookOpen as f,faTriangleExclamation as g,faQuestion as w}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as x}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as v}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as $}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as k}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as y}from"@fortawesome/free-solid-svg-icons/faXmark";import{BulletList as C}from"react-content-loader";function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function N(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const q="ABCDEFGHIJKLMNOPQRSTUVWXYZ",S=(e,t)=>e.id===t;function A(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}const I=a.createContext(()=>{throw new Error("context not initialized")}),M=["html","component","block"],E=t=>{let{html:r,component:n,block:o=!1}=t,i=N(t,M);const s=a.useContext(I);return a.useEffect(()=>{s()},[s,r]),void 0!==n?a.cloneElement(n,_({html:r},i)):e(o?"div":"span",_({dangerouslySetInnerHTML:{__html:r}},i))},T=["id"],H=t=>e("aside",{children:e(E,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),O=r=>{let{id:a}=r,o=N(r,T);const i=n("question-feedback",o.position||"bottom");return t("aside",{id:a,className:i,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(H,_({},o,{children:o.children}))]})};let j,z,P,F,L,J,R,Q,V,B,D,W,U,Z=e=>e;const G={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},K={palette:G,answer:{neutral:G.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:G.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:G.neutralDarker,background:G.neutralLighter}},Y=(...e)=>s(j||(j=Z`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),X=(...e)=>s(z||(z=Z`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),ee=(...e)=>s(P||(P=Z`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),te={answer:()=>s(L||(L=Z`
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
  `),G.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",K.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",K.palette.white),answerColor:(e,t=!1)=>s(J||(J=Z`
    .answer-letter-wrapper::before {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>te.answerColor(K.answer.checked,!0),answerCorrect:e=>te.answerColor(K.answer.correct,e),answerIncorrect:e=>te.answerColor(K.answer.incorrect,e),answerHover:()=>s(R||(R=Z`
    ${0};
    font-weight: bold;
  `),te.answerColor(K.answer.hover)),answerCorrectAnswer:()=>te.answerColor(K.answer.correct,!1),resetText:()=>s(Q||(Q=Z`
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
  `)),stepCardPadding:()=>s(V||(V=Z`
    padding: 48px 140px;

    ${0}

    ${0}
  `),X(B||(B=Z`
      padding: ${0} ${0};
    `),"24px","24px"),Y(D||(D=Z`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(W||(W=Z`
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
  `),te.resetText(),"1px",K.popover.borderColor,K.palette.white,"325px","8px","1rem",K.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",K.popover.borderColor,"1px",K.palette.white,"9px","1px","9px","1rem","0.8rem"),visuallyHidden:()=>s(U||(U=Z`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `))};let re;const ne=i.div(re||(re=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`),e=>e.state?K.answer.correct:K.answer.incorrect),ae=({isCorrect:e,isIncorrect:r})=>{if(!e&&!r)return null;const n=e||!1===r;return t(ne,{state:n,children:[n?"Correct":"Incorrect"," Answer"]})},oe=r=>{const{answer:{content_html:n,feedback_html:a},contentRenderer:o,show_all_feedback:i,tableFeedbackEnabled:s,isCorrect:l,isIncorrect:c}=r;return t("div",{className:"answer-answer",children:[e(ae,{isCorrect:l,isIncorrect:c}),e(E,{className:"answer-content",component:o,html:n}),i&&a&&!s&&e(H,{contentRenderer:o,children:a},"question-mc-feedback")]})},ie=r=>{const{answer:a,answered_count:o,isCorrect:i,contentRenderer:s,iter:l,show_all_feedback:c,tableFeedbackEnabled:d}=r,p=a.selected_count&&o?Math.round(a.selected_count/o*100):0;return t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:i,red:!i}),children:[e("span",{className:"selected-count","data-percent":`${p}`,children:a.selected_count}),e("span",{className:n("letter",{green:i,red:!i}),children:q[l]})]}),e(oe,{answer:a,contentRenderer:s,show_all_feedback:c,tableFeedbackEnabled:d})]})},se=n=>{const{type:a,iter:o,answer:i,disabled:s,onKeyPress:l,qid:c,contentRenderer:d,correctIncorrectIcon:p,feedbackId:m,isSelected:u,isCorrect:h,isIncorrect:b,hasCorrectAnswer:f,show_all_feedback:g,tableFeedbackEnabled:w}=n,x=`${u?"Selected ":""}Choice ${q[o]}:`;let v;return f||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:v}=n),t(r,{children:["teacher-preview"===a&&e("div",{className:"correct-incorrect",children:h&&p}),e("input",{type:"radio",className:"answer-input-box",checked:u,id:`${c}-option-${o}`,name:`${c}-options`,onChange:()=>v&&v(i),disabled:s||!v,"aria-details":m}),t("label",{onKeyPress:l,htmlFor:`${c}-option-${o}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper","aria-label":x,"data-answer-choice":q[o],"data-test-id":`answer-choice-${q[o]}`}),e(oe,{answer:i,contentRenderer:d,show_all_feedback:g,tableFeedbackEnabled:w,isCorrect:h,isIncorrect:b})]})]})},le=t=>e("teacher-review"===t.type?ie:se,_({},t)),ce=t=>{const{type:r,answer:a,disabled:o,answerId:i,correctAnswerId:s,incorrectAnswerId:l}=t,c=((e,t)=>e.id==t)(a,i),d=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(a,s),p=S(a,l),m=c||void 0===i&&(!l&&d||p),u=n("answers-answer",{disabled:o,"answer-selected":m,"answer-correct":d&&"student-mpp"!==r,"answer-incorrect":l&&S(a,l)});return e("div",{className:"openstax-answer",children:e("section",{className:u,children:e(le,_({},t,{isCorrect:d,isSelected:m,isIncorrect:p}))})})};ce.displayName="OSAnswer";const de="student",pe=r=>{let n=0;const{question:a,hideAnswers:o,type:i=de,answered_count:s,choicesEnabled:l,correct_answer_id:c,incorrectAnswerId:d,answer_id:p,feedback_html:m,correct_answer_feedback_html:u,show_all_feedback:h=!1,tableFeedbackEnabled:b,hasCorrectAnswer:f,onChangeAnswer:g,onKeyPress:w,answerIdOrder:x,instructions:v}=r;if(o)return null;const{id:$}=a,k=[],y={qid:$||"auto-"+n++,answerId:p,correctAnswerId:c,incorrectAnswerId:d,hasCorrectAnswer:f,onChangeAnswer:g,type:i,answered_count:s,disabled:!l,show_all_feedback:h,tableFeedbackEnabled:b,onKeyPress:w},C=(x?(e=>{const{answers:t}=a;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(x):a.answers).map((t,r)=>{const n={answer:_({},t,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:r,key:`${y.qid}-option-${r}`},o=Object.assign({},n,y);let i,s;return h&&t.feedback_html&&b?i=t.feedback_html:t.id===d&&m?i=m:t.id===c&&u&&(i=u),i&&(s=`feedback-${y.qid}-${r}`,k.push({index:r,html:i,id:s})),e(ce,_({feedbackId:s},o))});return k.forEach((t,n)=>{const a=t.index+n+1;C.splice(a,0,e(O,{id:t.id,contentRenderer:r.contentRenderer,children:t.html},a))}),t("div",{role:"radiogroup","aria-label":"Answer choices",className:"answers-table",children:[v,C]})},me=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],ue=["step","questionNumber","numberOfQuestions","children","className"];let he,be,fe,ge,we,xe,ve,$e,ke,ye,Ce,_e,Ne=e=>e;const qe=i.div(he||(he=Ne`
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
`),K.palette.light,ee(be||(be=Ne`
    max-width: 1000px;
  `))),Se=i.div(fe||(fe=Ne`
  padding: ${0};

  ${0}
`),"2rem",Y(ge||(ge=Ne`
    padding: 0;
  `))),Ae=i.div(we||(we=Ne`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${0};
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
`),K.card.header.background,K.palette.gray,ee(xe||(xe=Ne`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),X(ve||(ve=Ne`
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
  `),"24px","24px"),Y($e||($e=Ne`
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));Ae.displayName="StepCardHeader";const Ie=i.div(ke||(ke=Ne`
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
`),te.stepCardPadding(),K.card.body.background,((...e)=>s(F||(F=Z`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(ye||(ye=Ne`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),ee(Ce||(Ce=Ne`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),Y(_e||(_e=Ne`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),Me=r=>{let{questionNumber:n,numberOfQuestions:a,showTotalQuestions:o,stepType:i,isHomework:s,availablePoints:l,unpadded:c,className:d,children:p,questionId:m,multipartBadge:u,leftHeaderChildren:h,rightHeaderChildren:b,headerTitleChildren:f}=r,g=N(r,me);return t(Se,_({},g,{children:[u,t(qe,{className:d,children:[n&&s&&"exercise"===i&&t(Ae,{children:[t("div",{children:[h,t("h2",{className:"question-info",children:[f,e("span",{children:a>1?`Questions ${n} - ${n+a-1}`:`Question ${n}`}),o?t("span",{className:"num-questions",children:[" / ",a]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",m]})]})]}),l||b?t("div",{children:[l&&t("div",{className:"points",children:[l," Points"]}),b]}):null]}),e(Ie,{unpadded:c,children:p})]})]}))};Me.displayName="OSStepCard";const Ee=t=>{let{step:r,questionNumber:a,numberOfQuestions:o,children:i,className:s}=t,l=N(t,ue);return e(Me,_({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:i}))};Ee.displayName="OSTaskStepCard";const Te=["disabled","isWaiting","waitingText","children"];let He;const Oe=i.button(He||(He=(e=>e)`
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
`),K.button.background,K.palette.white,K.button.backgroundHover,K.button.backgroundActive),je=t=>{const{disabled:r,isWaiting:n,waitingText:a,children:o}=t,i=N(t,Te);return e(Oe,_({},i,{disabled:n||r,children:n&&a||o}))};let ze,Pe,Fe,Le,Je=e=>e;const Re=l(ze||(ze=Je`
  :root {
    --content-text-scale: 1;
  }
`)),Qe=i(qe)(Pe||(Pe=Je`
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
`)),Ve=i.h2(Fe||(Fe=Je`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`)),Be=i(({numberOfQuestions:n,numberCompleted:a,handleClick:o,className:i})=>{const s=n===a,l=a>0,c=s?"Next":l?"Continue":"Start";return t(r,{children:[e(Re,{}),t(Qe,{className:i,children:[e(Ve,{children:s?"You are done.":l?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:s?"Great job answering all the questions.":l?`You've completed ${a} of ${n} questions.`:"Begin working on the quiz."}),e(je,{"data-test-id":`${c.split(" ")[0].toLowerCase()}-btn`,onClick:()=>o(),children:c})]})]})})(Le||(Le=Je``));let De;const We=i.div(De||(De=(e=>e)`
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
`),te.stepCardPadding(),K.palette.pale,K.palette.neutral,K.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",K.palette.neutralLighter,K.palette.neutralLightest,te.answer(),"1rem","1rem","0.1s ease-in-out",te.answerHover(),te.visuallyHidden(),te.answerChecked(),K.answer.checked,te.answerChecked(),te.answerIncorrect(),te.answerCorrect(!0),te.answerCorrectAnswer(),te.answerIncorrect(),te.answerIncorrect(!0),te.popover(),"370px","0.9rem","1.1rem"),Ue=a.forwardRef((r,a)=>{let o,i;const{question:s,correct_answer_id:l,incorrectAnswerId:c,exercise_uid:d,className:p,questionNumber:m,context:u,task:h,hidePreambles:b}=r,{stem_html:f,collaborator_solutions:g=[],formats:w,stimulus_html:x}=s,v=!!l,$=n("openstax-question",p,{"has-correct-answer":v&&!((null!=h?h.is_deleted:void 0)&&"homework"===(null!=h?h.type:void 0)),"has-incorrect-answer":!!c});return null!=d&&(o=e("div",{className:"exercise-uid",children:d})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(E,{className:"solution",block:!0,html:g.map(e=>e.content_html).join("")})]})),t(We,{ref:a,className:$,"data-question-number":m,"data-test-id":"question",children:[e(Ze,{type:"context",html:u,hidden:b}),e(Ze,{type:"stimulus",html:x,hidden:b}),e(Ze,{type:"stem",html:f,hidden:b,questionNumber:m}),r.children,e(pe,_({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),i,r.displayFormats?e(Ge,{formats:w}):void 0,o]})}),Ze=t=>{const{html:r="",type:n,hidden:a,questionNumber:o}=t;return!0!==a&&r.length>0?e(E,{html:r,"data-question-number":o,className:`question-${n}`,block:!0}):null},Ge=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let Ke,Ye,Xe,et=e=>e;const tt=i.div(Ke||(Ke=et`
    ${0}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: calc(1.6rem * var(--content-text-scale));
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
`),te.stepCardPadding(),K.card.body.background,K.palette.pale,Y(Ye||(Ye=et`
            flex-wrap: wrap;
        `)),ee(Xe||(Xe=et`
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
    `)));let rt,nt,at,ot,it,st,lt=e=>e;const ct=s(rt||(rt=lt`
  background-color: #f5e9ea;
`)),dt=i.div(nt||(nt=lt`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),te.stepCardPadding()),pt=i.div(at||(at=lt`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),mt=i.div(ot||(ot=lt`
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
`),e=>e.hasChildren?"space-between":"flex-end",K.palette.danger,K.palette.neutralThin),ut=i.textarea(it||(it=lt`
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
`),K.palette.neutral,K.palette.neutralDark,e=>e.isOverWordLimit&&ct,e=>e.isOverWordLimit&&s(st||(st=lt`
    border: 2px solid ${0};
  `),K.palette.danger),e=>e.readOnly&&K.palette.neutralCool);ut.displayName="OSFreeResponseTextArea";const ht=t=>e(je,_({},t,{children:"Cancel"})),bt=r=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,question:l,questionNumber:c,saveHandler:d,submitBtnLabel:p,textHasChanged:m,wordLimit:u}=r,h=A(o)>u,b={};return c&&(b["data-question-number"]=c),t(dt,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(pt,_({},b,{children:l.stem_html&&e(Ze,{type:"stem",html:l.stem_html,hidden:!1})})),e(ut,_({},r,{isOverWordLimit:h,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(mt,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[A(o)," words"]}),h&&t("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),t(tt,{children:[n?e("div",{className:"points",role:"status",children:t("strong",{children:["Points: ",n]})}):null,t("div",{className:"controls",children:[e(ht,{disabled:!m,onClick:a}),e(je,{"data-test-id":"submit-answer-btn",disabled:s||h,onClick:d,children:p})]})]})]})};bt.displayName="OSFreeResponse";const ft=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),gt=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,wt=t=>e(je,_({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),xt=t=>e(je,_({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),vt=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,$t=a.forwardRef((r,n)=>{const{question:o,task:i,answer_id_order:s,onAnswerChange:l,feedback_html:c,correct_answer_feedback_html:d,is_completed:p,correct_answer_id:m,incorrectAnswerId:u,choicesEnabled:h,questionNumber:b,answer_id:f,hasMultipleAttempts:g,attempts_remaining:w,published_comments:x,detailedSolution:v,canAnswer:$,needsSaved:k,attempt_number:y,apiIsPending:C,onAnswerSave:_,onNextStep:N,canUpdateCurrentStep:q,displaySolution:S,available_points:A,free_response:I,show_all_feedback:M,tableFeedbackEnabled:T,hasFeedback:H}=r,[O,j]=a.useState(!1);return a.useEffect(()=>{O&&p&&(N(b-1),j(!1))},[N,b,O,p]),t("div",{"data-test-id":"student-exercise-question",children:[e(Ue,{ref:n,task:i,question:o,answerIdOrder:s,choicesEnabled:h,answer_id:f,questionNumber:b,onChange:l,feedback_html:c,correct_answer_feedback_html:d,correct_answer_id:p?m:null,incorrectAnswerId:u,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:S,show_all_feedback:M,tableFeedbackEnabled:T,children:e(vt,{free_response:I})}),e(tt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[A?t("strong",{children:["Points: ",A]}):null,e("span",{className:"attempts-left",children:g&&w>0&&e(ft,{count:w})}),e(gt,{published_comments:x}),v&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(E,{html:v})]})]}),e("div",{className:"controls",children:$&&k||O?e(wt,{disabled:C||!f||O,isWaiting:C||O,attempt_number:y,onClick:()=>{var e;_("string"==typeof(e=o.id)?parseInt(e,10):e),H||j(!0)},willContinue:!H}):e(xt,{onClick:()=>N(b-1),canUpdateCurrentStep:q})})]})})]})}),kt={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},yt=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},Ct=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},_t=(e,t,r=5)=>{r>0&&(Ct(e).length||yt(e).length)?setTimeout(()=>{_t(e,t,r-1)},200):t()},Nt=(e,t)=>new Promise(r=>{(function(e,t){const r=Ct(e);t.MathJax.Hub.Queue(((e,t)=>()=>{u(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=yt(e);u(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{_t(e,r)})}),qt=m((e,t)=>d(Nt,100,{leading:!0,trailing:!1}).bind(null,e,t));qt.cache=new h;const St=p((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(kt),e.MathJax.Hub.processSectionDelay=0,r()):(kt.AuthorInit=r,e.MathJax=kt)}));let At,It,Mt,Et,Tt,Ht=e=>e;const Ot=i.div(At||(At=Ht`
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
`),K.palette.light,"2rem","2rem",K.palette.neutral,K.palette.neutralDarker,K.palette.neutralDarker,e=>!e.desktop&&s(It||(It=Ht`
    ${0}
    ${0}
  `),ee(Mt||(Mt=Ht`
      display: none;
    `)),X(Et||(Et=Ht`
      display: none;
    `))),e=>e.mobile&&Y(Tt||(Tt=Ht`
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
        font-size: 1.4rem;
        margin-top: 0.2rem;
        color: ${0};
        text-align: center;
      }

      & + * {
        border-left: 1px solid ${0};
      }
    }
  `),K.palette.neutral,K.palette.light)),jt=({icons:r})=>{var n,a;if(!r)return null;const o=Object.values(r),i=o.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),s=o.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),l=null==(n=r.topic)?void 0:n.url,c=null==(a=r.errata)?void 0:a.url;return t(Ot,_({},{mobile:i,desktop:s},{children:[l?t("a",{href:l,target:"_blank",children:[e(b,{icon:f}),e("span",{children:"View topic in textbook"})]}):null,c?t("a",{href:c,target:"_blank",children:[e(b,{icon:g}),e("span",{children:"Suggest a correction"})]}):null]}))};let zt,Pt,Ft,Lt,Jt,Rt,Qt,Vt,Bt,Dt=e=>e;const Wt=i.div(zt||(zt=Dt`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),K.palette.mediumBlue,e=>!e.desktop&&s(Pt||(Pt=Dt`
    ${0}
    ${0}
  `),ee(Ft||(Ft=Dt`
      display: none;
    `)),X(Lt||(Lt=Dt`
      display: none;
    `))),e=>!e.mobile&&Y(Jt||(Jt=Dt`
    display: none;
  `))),Ut=i.div(Rt||(Rt=Dt`
  position: relative;
  display: flex;
`)),Zt=i.div(Qt||(Qt=Dt`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`),te.popover),Gt=r=>e(Wt,_({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(Ut,{children:[r.children,t(Zt,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),Kt=i.div(Vt||(Vt=Dt`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),Yt=i(b)(Bt||(Bt=Dt`
  color: ${0};
  height: 1em;
`),K.palette.darkGray),Xt=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},a=[],o=t.questions.every(e=>e.answers.length>0);let i;var s,l,c;return o&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":o&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&a.push(e(Gt,_({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(s=r.topic.location)?void 0:s.header)||n,{children:e(Yt,{icon:x})}),"topic")),r.errata&&a.push(e(Gt,_({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(l=r.errata.location)?void 0:l.header)||n,{children:e(Yt,{icon:v})}),"errata")),r.info&&i&&a.push(e(Gt,_({text:i},(null==(c=r.info.location)?void 0:c.header)||n,{children:e(Yt,{icon:$,height:"16px",width:"16px"})}),"type")),e(Kt,{children:a})},er=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons"];let tr,rr,nr,ar,or,ir,sr,lr,cr,dr,pr=e=>e;const mr=i(Ee)(tr||(tr=pr`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),ur=l(rr||(rr=pr`
  :root {
    --content-text-scale: 1;
  }
`)),hr=i.div(nr||(nr=pr`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&s(ar||(ar=pr`
    ${0}
    ${0}
    ${0}
  `),ee(or||(or=pr`
      ${0} {
        margin-left: 6.8rem;
      }
    `),mr),X(ir||(ir=pr`
      ${0} {
        margin-left: 4.8rem;
      }
    `),mr),Y(sr||(sr=pr`
      ${0} {
        margin-left: 0;
      }
    `),mr)),e=>e.mobileToolbarEnabled&&s(lr||(lr=pr`
    ${0}
  `),Y(cr||(cr=pr`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),Ot,Se,qe))),br=r=>t(hr,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(jt,{icons:r.exerciseIcons}),e(mr,_({},r))]}),fr=({exercise:n})=>t(r,{children:[n.context&&e(E,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(E,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),gr=i(r=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:l,show_all_feedback:d,scrollToQuestion:p,exerciseIcons:m}=r,u=N(r,er);const h="feedback_html"in s,b=a.useRef([]),f=a.useRef(null),g=a.useCallback(()=>{f.current&&(async(e,t=window)=>{await St(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?qt(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(f.current)},[]);a.useEffect(()=>{const e=p&&b.current[p];e&&c(e)},[p,l]);const w=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),x=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile});return t(I.Provider,{value:g,children:[e(ur,{}),e(br,_({step:s,questionNumber:i,numberOfQuestions:h?n:l.questions.length,rightHeaderChildren:m?e(Xt,{exercise:l,icons:m}):null,showTotalQuestions:h,desktopToolbarEnabled:w,mobileToolbarEnabled:x},m?{exerciseIcons:m}:null,{className:u.className,children:t("div",{ref:f,children:[e(fr,{exercise:l}),l.questions.map((e,t)=>{var r;const n=_({},h?s:u.questionStates[e.id]);return o($t,_({},u,_({},n,{available_points:void 0}),{ref:e=>b.current[i+t]=e,exercise_uid:l.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:d,tableFeedbackEnabled:d&&!h,canUpdateCurrentStep:"canUpdateCurrentStep"in u?u.canUpdateCurrentStep:!(t+1===l.questions.length)}))})]})}))]})})(dr||(dr=pr`
`)),wr=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let xr,vr,$r,kr,yr,Cr,_r,Nr,qr,Sr,Ar=e=>e;const Ir=i.nav(xr||(xr=Ar`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),Y(vr||(vr=Ar`
    padding: 1.6rem 0.8rem;
  `))),Mr=i.span($r||($r=Ar`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),Er="box-shadow: 0px 1px 4px 0px #00000066;",Tr=i.button(Nr||(Nr=Ar`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${0};
  height: ${0};
  border: 0;
  border-radius: 50%;
  margin: ${0};
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  color: ${0};
  ${0}
  ${0}
  &:hover {
    ${0}
  }
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",K.palette.neutralDarker,e=>e.isActive?s(qr||(qr=Ar`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),Er):null,e=>(e=>{switch(e){case"isStatus":return s(kr||(kr=Ar`
        background-color: ${0};
      `),K.palette.neutralBright);case"isCorrect":return s(yr||(yr=Ar`
        color: ${0};
        background-color: #E8F4D8;
      `),K.answer.correct);case"isIncorrect":return s(Cr||(Cr=Ar`
        color: ${0};
        background-color: #F8E8EA;
      `),K.answer.incorrect);default:return s(_r||(_r=Ar`
        background-color: ${0};
      `),K.palette.neutralBright)}})(e.variant),Er),Hr=i(b)(Sr||(Sr=Ar`
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
`),e=>e.color),Or=({variant:t})=>{if(!t||"isCorrect"!==t&&"isIncorrect"!==t&&"isIncomplete"!==t)return null;const r={isCorrect:{icon:k,color:K.answer.correct,label:"Correct"},isIncorrect:{icon:y,color:K.answer.incorrect,label:"Incorrect"},isIncomplete:{icon:w,color:K.answer.neutral,label:"Incomplete"}}[t];return e(Hr,{icon:r.icon,color:r.color,height:"16px",width:"16px","aria-label":r.label,"aria-hidden":void 0})},jr=({index:r,isActive:n,step:a,goToStep:o})=>t(Mr,{children:[e(Tr,{variant:a.variant,isActive:n,onClick:()=>o(r,a),"aria-current":n?"location":"false","aria-label":"isStatus"===a.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===a.variant?e(wr,{}):r+1}),e(Or,{variant:a.variant})]}),zr=({steps:t,activeIndex:r,goToStep:n})=>e(Ir,{"aria-label":"Breadcrumbs",children:t.map((t,a)=>e(jr,{index:a,isActive:a===r,step:t,goToStep:n},a))});let Pr;const Fr=i.div(Pr||(Pr=(e=>e)`
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
`),K.palette.light),Lr=()=>e(Fr,{children:e(C,{uniqueKey:"OSLoader"})});export{ce as Answer,pe as AnswersTable,Be as CompletionStatus,gr as Exercise,jt as ExerciseToolbar,bt as FreeResponseInput,ut as FreeResponseTextArea,qe as InnerStepCard,Lr as Loader,Se as OuterStepCard,zr as ProgressBar,jr as ProgressBarItem,Ue as Question,Ze as QuestionHtml,Me as StepCard,Tr as StyledItem,Ot as StyledToolbar,Ee as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
