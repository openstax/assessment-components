import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import o,{createElement as a}from"react";import i,{css as s}from"styled-components";import l from"scroll-to-element";import{debounce as d,once as c}from"lodash";import{memoize as p,isEmpty as m}from"lodash/fp.js";import h from"weak-map";import{FontAwesomeIcon as u}from"@fortawesome/react-fontawesome";import{faBookOpen as b,faTriangleExclamation as f}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as g}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as w}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as x}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as v}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as $}from"@fortawesome/free-solid-svg-icons/faXmark";import{BulletList as k}from"react-content-loader";const y="ABCDEFGHIJKLMNOPQRSTUVWXYZ",C=(e,t)=>e.id===t;function _(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function q(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const S=o.createContext(()=>{throw new Error("context not initialized")}),A=["html","component","block"],M=t=>{let{html:r,component:n,block:a=!1}=t,i=q(t,A);const s=o.useContext(S);return o.useEffect(()=>{s()},[s,r]),void 0!==n?o.cloneElement(n,N({html:r},i)):e(a?"div":"span",N({dangerouslySetInnerHTML:{__html:r}},i))},I=t=>e("aside",{children:e(M,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),T=r=>{const o=n("question-feedback",r.position||"bottom");return t("aside",{className:o,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(I,N({},r,{children:r.children}))]})};let O,E,H,j,z,P,L,J,V,B,Q,R,F=e=>e;const D={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},W={palette:D,answer:{neutral:D.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:D.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:D.neutralDarker,background:D.neutralLighter}},U=(...e)=>s(O||(O=F`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),Z=(...e)=>s(E||(E=F`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),G=(...e)=>s(H||(H=F`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),K={answer:()=>s(z||(z=F`
    .answer-label {
      display: flex;
    }
    color: ${0};
    .answer-letter {
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
    }
  `),D.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",W.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",W.palette.white),answerColor:(e,t=!1)=>s(P||(P=F`
    .answer-letter {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>K.answerColor(W.answer.checked,!0),answerCorrect:e=>K.answerColor(W.answer.correct,e),answerIncorrect:e=>K.answerColor(W.answer.incorrect,e),answerHover:()=>s(L||(L=F`
    ${0};
    font-weight: bold;
  `),K.answerColor(W.answer.hover)),answerCorrectAnswer:()=>K.answerColor(W.answer.correct,!1),resetText:()=>s(J||(J=F`
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
  `)),stepCardPadding:()=>s(V||(V=F`
    padding: 48px 140px;

    ${0}

    ${0}
  `),Z(B||(B=F`
      padding: ${0} ${0};
    `),"24px","24px"),U(Q||(Q=F`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(R||(R=F`
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
    font-size: 1.4rem;

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
  `),K.resetText(),"1px",W.popover.borderColor,W.palette.white,"325px","8px","1rem",W.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",W.popover.borderColor,"1px",W.palette.white,"9px","1px","9px","1rem","0.8rem")};let Y;const X=i.div(Y||(Y=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
`),e=>e.state?W.answer.correct:W.answer.incorrect),ee=({isCorrect:e,isIncorrect:r})=>{if(!e&&!r)return null;const n=e||!1===r;return t(X,{state:n,children:[n?"Correct":"Incorrect"," Answer"]})},te=o=>{const{type:a,iter:i,answer:s,disabled:l,onKeyPress:d,qid:c,answerId:p,correctAnswerId:m,incorrectAnswerId:h,hasCorrectAnswer:u,answered_count:b,contentRenderer:f,show_all_feedback:g,tableFeedbackEnabled:w}=o;let x,v,$;const k=((e,t)=>e.id==t)(s,p),_=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(s,m),N=C(s,h),q=n("answers-answer",{disabled:l,"answer-selected":k||void 0===p&&(!h&&_||N),"answer-correct":_&&"student-mpp"!==a,"answer-incorrect":h&&C(s,h)}),S=e("div",{className:"correct-incorrect",children:_&&o.correctIncorrectIcon});let A,T,O=`${k?"Selected ":""}Choice ${y[i]}`;u&&(O+=`(${_?"Correct":"Incorrect"} Answer)`),O+=":";const E=()=>A&&A(s);if(u||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:A}=o),A&&(T=e("input",{type:"radio",className:"answer-input-box",checked:k,id:`${c}-option-${i}`,name:`${c}-options`,onChange:E,disabled:l})),g&&s.feedback_html&&!w&&(v=e(I,{contentRenderer:f,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===a){let r=0;s.selected_count&&b&&(r=Math.round(s.selected_count/b*100)),$=e("span",{className:"selected-count","data-percent":`${r}`,children:s.selected_count}),x=t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:_,red:!_}),children:[$,e("span",{className:n("letter",{green:_,red:!_}),children:y[i]})]}),t("div",{className:"answer-answer",children:[e(M,{className:"answer-content",component:f,html:s.content_html}),v]})]})}else x=t(r,{children:["teacher-preview"===a&&S,$,T,t("label",{onKeyPress:d,htmlFor:`${c}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:E,"aria-label":O,className:"answer-letter",disabled:l||N,"data-test-id":`answer-choice-${y[i]}`,children:y[i]})}),t("div",{className:"answer-answer",children:[e(ee,{isCorrect:_,isIncorrect:N}),e(M,{className:"answer-content",component:f,html:s.content_html}),v]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:q,children:x})})};te.displayName="OSAnswer";const re="student",ne=r=>{let n=0;const{question:o,hideAnswers:a,type:i=re,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:m,correct_answer_feedback_html:h,show_all_feedback:u=!1,tableFeedbackEnabled:b,hasCorrectAnswer:f,onChangeAnswer:g,onKeyPress:w,answerIdOrder:x,instructions:v}=r;if(a)return null;const{id:$}=o,k=[],y={qid:$||"auto-"+n++,answerId:p,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:f,onChangeAnswer:g,type:i,answered_count:s,disabled:!l,show_all_feedback:u,tableFeedbackEnabled:b,onKeyPress:w},C=(x?(e=>{const{answers:t}=o;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(x):o.answers).map((t,r)=>{const n={answer:N({},t,{question_id:"string"==typeof o.id?parseInt(o.id,10):o.id}),iter:r,key:`${y.qid}-option-${r}`},a=Object.assign({},n,y);return u&&t.feedback_html&&b?k.push({index:r,html:t.feedback_html}):t.id===c&&m?k.push({index:r,html:m}):t.id===d&&h&&k.push({index:r,html:h}),e(te,N({},a))});return k.forEach((t,n)=>{const o=t.index+n+1;C.splice(o,0,e(T,{contentRenderer:r.contentRenderer,children:t.html},o))}),t("div",{className:"answers-table",children:[v,C]})},oe=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],ae=["step","questionNumber","numberOfQuestions","children","className"];let ie,se,le,de,ce,pe,me,he,ue,be,fe,ge,we=e=>e;const xe=i.div(ie||(ie=we`
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
`),W.palette.light,G(se||(se=we`
    max-width: 1000px;
  `))),ve=i.div(le||(le=we`
  padding: ${0};

  ${0}
`),"2rem",U(de||(de=we`
    padding: 0;
  `))),$e=i.div(ce||(ce=we`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
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
`),W.card.header.background,W.palette.gray,G(pe||(pe=we`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),Z(me||(me=we`
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
  `),"24px","24px"),U(he||(he=we`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));$e.displayName="StepCardHeader";const ke=i.div(ue||(ue=we`
  .step-card-body {
    ${0}

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
`),K.stepCardPadding(),W.card.body.background,((...e)=>s(j||(j=F`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(be||(be=we`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),G(fe||(fe=we`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),U(ge||(ge=we`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),ye=r=>{let{questionNumber:n,numberOfQuestions:o,showTotalQuestions:a,stepType:i,isHomework:s,availablePoints:l,unpadded:d,className:c,children:p,questionId:m,multipartBadge:h,leftHeaderChildren:u,rightHeaderChildren:b,headerTitleChildren:f}=r,g=q(r,oe);return t(ve,N({},g,{children:[h,t(xe,{className:c,children:[n&&s&&"exercise"===i&&t($e,{children:[t("div",{children:[u,t("div",{className:"question-info",children:[f,e("span",{children:o>1?`Questions ${n} - ${n+o-1}`:`Question ${n}`}),a?t("span",{className:"num-questions",children:[" / ",o]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",m]})]})]}),l||b?t("div",{children:[l&&t("div",{className:"points",children:[l," Points"]}),b]}):null]}),e(ke,{unpadded:d,children:p})]})]}))};ye.displayName="OSStepCard";const Ce=t=>{let{step:r,questionNumber:o,numberOfQuestions:a,children:i,className:s}=t,l=q(t,ae);return e(ye,N({},l,{unpadded:!0,questionNumber:o,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:i}))};Ce.displayName="OSTaskStepCard";const _e=["disabled","isWaiting","waitingText","children"];let Ne;const qe=i.button(Ne||(Ne=(e=>e)`
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
`),W.button.background,W.palette.white,W.button.backgroundHover,W.button.backgroundActive),Se=t=>{const{disabled:r,isWaiting:n,waitingText:o,children:a}=t,i=q(t,_e);return e(qe,N({},i,{disabled:n||r,children:n&&o||a}))};let Ae,Me,Ie=e=>e;const Te=i(xe)(Ae||(Ae=Ie`
  padding: 88px 72px;
  font-size: 1.8rem;
  line-height: 3rem;
  display: block;

  button {
    min-width: 160px;
    height: 48px;
  }

  p {
    margin: 16px 0 20px 0;
  }
`)),Oe=i.h2(Me||(Me=Ie`
  font-size: 2.4rem;
  margin: 0;
`)),Ee=({numberOfQuestions:r,numberCompleted:n,handleClick:o})=>{const a=r===n,i=n>0,s=a?"Next":i?"Continue":"Start";return t(Te,{children:[e(Oe,{children:a?"You are done.":i?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:a?"Great job answering all the questions.":i?`You've completed ${n} of ${r} questions.`:"Begin working on the quiz."}),e(Se,{"data-test-id":`${s.split(" ")[0].toLowerCase()}-btn`,onClick:()=>o(),children:s})]})};let He;const je=i.div(He||(He=(e=>e)`
&.step-card-body {
  ${0};
}

&.openstax-question {
  border-top: 1px solid ${0};
  font-size: 1.8rem;

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
    font-size: 1.6rem;
    line-height: 2rem;
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

    .answer-letter {
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

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        display: none;

        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${0};
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
`),K.stepCardPadding(),W.palette.pale,W.palette.neutral,W.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",W.palette.neutralLighter,W.palette.neutralLightest,K.answer(),"1rem","1rem","0.1s ease-in-out",K.answerHover(),K.answerChecked(),K.answerChecked(),K.answerIncorrect(),K.answerCorrect(!0),K.answerCorrectAnswer(),K.answerIncorrect(),K.answerIncorrect(!0),K.popover(),"370px","0.9rem","1.1rem"),ze=o.forwardRef((r,o)=>{let a,i;const{question:s,correct_answer_id:l,incorrectAnswerId:d,exercise_uid:c,className:p,questionNumber:m,context:h,task:u,hidePreambles:b}=r,{stem_html:f,collaborator_solutions:g=[],formats:w,stimulus_html:x}=s,v=!!l,$=n("openstax-question",p,{"has-correct-answer":v&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(a=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(M,{className:"solution",block:!0,html:g.map(e=>e.content_html).join("")})]})),t(je,{ref:o,className:$,"data-question-number":m,"data-test-id":"question",children:[e(Pe,{type:"context",html:h,hidden:b}),e(Pe,{type:"stimulus",html:x,hidden:b}),e(Pe,{type:"stem",html:f,hidden:b,questionNumber:m}),r.children,e(ne,N({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),i,r.displayFormats?e(Le,{formats:w}):void 0,a]})}),Pe=t=>{const{html:r="",type:n,hidden:o,questionNumber:a}=t;return!0!==o&&r.length>0?e(M,{html:r,"data-question-number":a,className:`question-${n}`,block:!0}):null},Le=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let Je,Ve,Be=e=>e;const Qe=i.div(Je||(Je=Be`
    ${0}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 2rem;
    background: ${0};

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
    }

    .points {
        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        .attempts-left {
          color: #B03808;
          font-weight: bold;
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

    ${0}
`),K.stepCardPadding(),W.card.body.background,W.palette.pale,G(Ve||(Ve=Be`
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
    `)));let Re,Fe,De,We,Ue,Ze,Ge=e=>e;const Ke=s(Re||(Re=Ge`
  background-color: #f5e9ea;
`)),Ye=i.div(Fe||(Fe=Ge`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),K.stepCardPadding()),Xe=i.div(De||(De=Ge`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),et=i.div(We||(We=Ge`
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
`),e=>e.hasChildren?"space-between":"flex-end",W.palette.danger,W.palette.neutralThin),tt=i.textarea(Ue||(Ue=Ge`
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
`),W.palette.neutral,W.palette.neutralDark,e=>e.isOverWordLimit&&Ke,e=>e.isOverWordLimit&&s(Ze||(Ze=Ge`
    border: 2px solid ${0};
  `),W.palette.danger),e=>e.readOnly&&W.palette.neutralCool);tt.displayName="OSFreeResponseTextArea";const rt=t=>e(Se,N({},t,{children:"Cancel"})),nt=r=>{const{availablePoints:n,cancelHandler:o,defaultValue:a,infoRowChildren:i,isSubmitDisabled:s,question:l,questionNumber:d,saveHandler:c,submitBtnLabel:p,textHasChanged:m,wordLimit:h}=r,u=_(a)>h,b={};return d&&(b["data-question-number"]=d),t(Ye,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(Xe,N({},b,{children:l.stem_html&&e(Pe,{type:"stem",html:l.stem_html,hidden:!1})})),e(tt,N({},r,{isOverWordLimit:u,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(et,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[_(a)," words"]}),u&&t("span",{className:"word-limit-error-info",children:["Maximum ",h," words"]})]})]})]}),t(Qe,{children:[n?e("div",{className:"points",children:t("strong",{children:["Points: ",n]})}):null,t("div",{className:"controls",children:[e(rt,{disabled:!m,onClick:o}),e(Se,{"data-test-id":"submit-answer-btn",disabled:s||u,onClick:c,children:p})]})]})]})};nt.displayName="OSFreeResponse";const ot=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),at=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,it=t=>e(Se,N({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:0==t.attempt_number?"Submit":"Re-submit"})),st=t=>e(Se,N({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),lt=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,dt=o.forwardRef((r,n)=>{const{question:o,task:a,answer_id_order:i,onAnswerChange:s,feedback_html:l,correct_answer_feedback_html:d,is_completed:c,correct_answer_id:p,incorrectAnswerId:m,choicesEnabled:h,questionNumber:u,answer_id:b,hasMultipleAttempts:f,attempts_remaining:g,published_comments:w,detailedSolution:x,canAnswer:v,needsSaved:$,attempt_number:k,apiIsPending:y,onAnswerSave:C,onNextStep:_,canUpdateCurrentStep:N,displaySolution:q,available_points:S,free_response:A,show_all_feedback:I,tableFeedbackEnabled:T}=r;return t("div",{"data-test-id":"student-exercise-question",children:[e(ze,{ref:n,task:a,question:o,answerIdOrder:i,choicesEnabled:h,answer_id:b,questionNumber:u,onChange:s,feedback_html:l,correct_answer_feedback_html:d,correct_answer_id:c?p:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:q,show_all_feedback:I,tableFeedbackEnabled:T,children:e(lt,{free_response:A})}),e(Qe,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",children:[S?t("strong",{children:["Points: ",S]}):null,e("span",{className:"attempts-left",children:f&&g>0&&e(ot,{count:g})}),e(at,{published_comments:w}),x&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(M,{html:x})]})]}),e("div",{className:"controls",children:v&&$?e(it,{disabled:y||!b,isWaiting:y,attempt_number:k,onClick:()=>{return C("string"==typeof(e=o.id)?parseInt(e,10):e);var e}}):e(st,{onClick:()=>_(u-1),canUpdateCurrentStep:N})})]})})]})}),ct={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},pt=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},mt=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},ht=(e,t,r=5)=>{r>0&&(mt(e).length||pt(e).length)?setTimeout(()=>{ht(e,t,r-1)},200):t()},ut=(e,t)=>new Promise(r=>{(function(e,t){const r=mt(e);t.MathJax.Hub.Queue(((e,t)=>()=>{m(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=pt(e);m(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{ht(e,r)})}),bt=p((e,t)=>d(ut,100,{leading:!0,trailing:!1}).bind(null,e,t));bt.cache=new h;const ft=c((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(ct),e.MathJax.Hub.processSectionDelay=0,r()):(ct.AuthorInit=r,e.MathJax=ct)}));let gt,wt,xt,vt,$t,kt=e=>e;const yt=i.div(gt||(gt=kt`
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
`),W.palette.light,"2rem","2rem",W.palette.neutral,W.palette.neutralDarker,W.palette.neutralDarker,e=>!e.desktop&&s(wt||(wt=kt`
    ${0}
    ${0}
  `),G(xt||(xt=kt`
      display: none;
    `)),Z(vt||(vt=kt`
      display: none;
    `))),e=>e.mobile&&U($t||($t=kt`
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
  `),W.palette.neutral,W.palette.light)),Ct=({icons:r})=>{var n,o;if(!r)return null;const a=Object.values(r),i=a.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),s=a.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),l=null==(n=r.topic)?void 0:n.url,d=null==(o=r.errata)?void 0:o.url;return t(yt,N({},{mobile:i,desktop:s},{children:[l?t("a",{href:l,target:"_blank",children:[e(u,{icon:b}),e("span",{children:"View topic in textbook"})]}):null,d?t("a",{href:d,target:"_blank",children:[e(u,{icon:f}),e("span",{children:"Suggest a correction"})]}):null]}))};let _t,Nt,qt,St,At,Mt,It,Tt,Ot,Et=e=>e;const Ht=i.div(_t||(_t=Et`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),W.palette.mediumBlue,e=>!e.desktop&&s(Nt||(Nt=Et`
    ${0}
    ${0}
  `),G(qt||(qt=Et`
      display: none;
    `)),Z(St||(St=Et`
      display: none;
    `))),e=>!e.mobile&&U(At||(At=Et`
    display: none;
  `))),jt=i.div(Mt||(Mt=Et`
  position: relative;
  display: flex;
`)),zt=i.div(It||(It=Et`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),K.popover),Pt=r=>e(Ht,N({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(jt,{children:[r.children,t(zt,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),Lt=i.div(Tt||(Tt=Et`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),Jt=i(u)(Ot||(Ot=Et`
  color: ${0};
  height: 1em;
`),W.palette.darkGray),Vt=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},o=[],a=t.questions.every(e=>e.answers.length>0);let i;var s,l,d;return a&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":a&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&o.push(e(Pt,N({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(s=r.topic.location)?void 0:s.header)||n,{children:e(Jt,{icon:g})}),"topic")),r.errata&&o.push(e(Pt,N({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(l=r.errata.location)?void 0:l.header)||n,{children:e(Jt,{icon:w})}),"errata")),r.info&&i&&o.push(e(Pt,N({text:i},(null==(d=r.info.location)?void 0:d.header)||n,{children:e(Jt,{icon:x,height:"16px",width:"16px"})}),"type")),e(Lt,{children:o})},Bt=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons"];let Qt,Rt,Ft,Dt,Wt,Ut,Zt,Gt,Kt=e=>e;const Yt=i(Ce)(Qt||(Qt=Kt`
  font-size: 1.8rem;
  line-height: 2.8rem;
`)),Xt=i.div(Rt||(Rt=Kt`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&s(Ft||(Ft=Kt`
    ${0}
    ${0}
    ${0}
  `),G(Dt||(Dt=Kt`
      ${0} {
        margin-left: 6.8rem;
      }
    `),Yt),Z(Wt||(Wt=Kt`
      ${0} {
        margin-left: 4.8rem;
      }
    `),Yt),U(Ut||(Ut=Kt`
      ${0} {
        margin-left: 0;
      }
    `),Yt)),e=>e.mobileToolbarEnabled&&s(Zt||(Zt=Kt`
    ${0}
  `),U(Gt||(Gt=Kt`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),yt,ve,xe))),er=r=>t(Xt,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(Ct,{icons:r.exerciseIcons}),e(Yt,N({},r))]}),tr=({exercise:n})=>t(r,{children:[n.context&&e(M,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(M,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),rr=r=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:d,show_all_feedback:c,scrollToQuestion:p,exerciseIcons:m}=r,h=q(r,Bt);const u="feedback_html"in s,b=o.useRef([]),f=o.useRef(null),g=o.useCallback(()=>{f.current&&(async(e,t=window)=>{await ft(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?bt(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(f.current)},[]);o.useEffect(()=>{const e=p&&b.current[p];e&&l(e)},[p,d]);const w=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),x=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile});return e(S.Provider,{value:g,children:e(er,N({step:s,questionNumber:i,numberOfQuestions:u?n:d.questions.length,rightHeaderChildren:m?e(Vt,{exercise:d,icons:m}):null,showTotalQuestions:u,desktopToolbarEnabled:w,mobileToolbarEnabled:x},m?{exerciseIcons:m}:null,{children:t("div",{ref:f,children:[e(tr,{exercise:d}),d.questions.map((e,t)=>{var r;const n=N({},u?s:h.questionStates[e.id]);return a(dt,N({},h,N({},n,{available_points:void 0}),{ref:e=>b.current[i+t]=e,exercise_uid:d.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:c,tableFeedbackEnabled:c&&!u,canUpdateCurrentStep:"canUpdateCurrentStep"in h?h.canUpdateCurrentStep:!(t+1===d.questions.length)}))})]})}))})},nr=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let or,ar,ir,sr,lr,dr,cr,pr,mr,hr,ur=e=>e;const br=i.nav(or||(or=ur`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${0}
`),U(ar||(ar=ur`
    padding: 0;
  `))),fr=i.span(ir||(ir=ur`
  display: flex;
  align-items: center;
  margin: 0 1rem 1rem 0;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),gr="box-shadow: 0px 1px 4px 0px #00000066;",wr=i.button(pr||(pr=ur`
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
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",W.palette.neutralDarker,e=>e.isActive?s(mr||(mr=ur`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),gr):null,e=>(e=>{switch(e){case"isStatus":return s(sr||(sr=ur`
        background-color: ${0};
      `),W.palette.neutralBright);case"isCorrect":return s(lr||(lr=ur`
        color: ${0};
        background-color: #E8F4D8;
      `),W.answer.correct);case"isIncorrect":return s(dr||(dr=ur`
        color: ${0};
        background-color: #F8E8EA;
      `),W.answer.incorrect);default:return s(cr||(cr=ur`
        background-color: ${0};
      `),W.palette.neutralBright)}})(e.variant),gr),xr=i(u)(hr||(hr=ur`
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
`),e=>e.color),vr=({variant:t})=>{if(!t||"isCorrect"!==t&&"isIncorrect"!==t)return null;const r={isCorrect:{icon:v,color:W.answer.correct},isIncorrect:{icon:$,color:W.answer.incorrect}}[t];return e(xr,{icon:r.icon,color:r.color,height:"16px",width:"16px"})},$r=({index:r,isActive:n,step:o,goToStep:a})=>t(fr,{children:[e(wr,{variant:o.variant,isActive:n,onClick:()=>a(r,o),"aria-current":n?"location":"false","aria-label":"isStatus"===o.variant?"Assignment status":`Step ${r+1}`,children:"isStatus"===o.variant?e(nr,{}):r+1}),e(vr,{variant:o.variant})]}),kr=({steps:t,activeIndex:r,goToStep:n})=>e(br,{"aria-label":"Breadcrumbs",children:t.map((t,o)=>e($r,{index:o,isActive:o===r,step:t,goToStep:n},o))});let yr;const Cr=i.div(yr||(yr=(e=>e)`
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
`),W.palette.light),_r=()=>e(Cr,{children:e(k,{uniqueKey:"OSLoader"})});export{te as Answer,ne as AnswersTable,Ee as CompletionStatus,rr as Exercise,Ct as ExerciseToolbar,nt as FreeResponseInput,tt as FreeResponseTextArea,xe as InnerStepCard,_r as Loader,ve as OuterStepCard,kr as ProgressBar,$r as ProgressBarItem,ze as Question,Pe as QuestionHtml,ye as StepCard,wr as StyledItem,yt as StyledToolbar,Ce as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
