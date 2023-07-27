import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import i,{createElement as a}from"react";import o,{css as s}from"styled-components";import l from"scroll-to-element";import{faBookOpen as c}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as d}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as p}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{FontAwesomeIcon as h}from"@fortawesome/react-fontawesome";import{debounce as m,once as u}from"lodash";import{memoize as b,isEmpty as f}from"lodash/fp.js";import g from"weak-map";import{faCheck as w}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as x}from"@fortawesome/free-solid-svg-icons/faXmark";import{BulletList as v}from"react-content-loader";const $="ABCDEFGHIJKLMNOPQRSTUVWXYZ",y=function(e,t){return e.id===t};function k(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}function _(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}const N=i.createContext(()=>{throw new Error("context not initialized")}),q=["html","component","block"],A=t=>{let{html:r,component:n,block:a=!1}=t,o=_(t,q);const s=i.useContext(N);return i.useEffect(()=>{s()},[s,r]),void 0!==n?i.cloneElement(n,C({html:r},o)):e(a?"div":"span",C({dangerouslySetInnerHTML:{__html:r}},o))},S=t=>e("aside",{children:e(A,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),M=r=>{const i=n("question-feedback",r.position||"bottom");return t("aside",{className:i,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(S,C({},r,{children:r.children}))]})};let I,H,O,T,E,j,P,z,L,J,Q,R,V=e=>e;const B={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},F={palette:B,answer:{neutral:B.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:B.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:B.neutralDarker,background:B.neutralLighter}},U=(...e)=>s(I||(I=V`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),D=(...e)=>s(H||(H=V`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),W=(...e)=>s(O||(O=V`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),Z={answer:()=>s(E||(E=V`
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
  `),B.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",F.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",F.palette.white),answerColor:(e,t=!1)=>s(j||(j=V`
    .answer-letter {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>Z.answerColor(F.answer.checked,!0),answerCorrect:e=>Z.answerColor(F.answer.correct,e),answerIncorrect:e=>Z.answerColor(F.answer.incorrect,e),answerHover:()=>s(P||(P=V`
    ${0};
    font-weight: bold;
  `),Z.answerColor(F.answer.hover)),answerCorrectAnswer:()=>Z.answerColor(F.answer.correct,!1),resetText:()=>s(z||(z=V`
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
  `)),stepCardPadding:()=>s(L||(L=V`
    padding: 48px 140px;

    ${0}

    ${0}
  `),D(J||(J=V`
      padding: ${0} ${0};
    `),"24px","24px"),U(Q||(Q=V`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(R||(R=V`
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
  `),Z.resetText(),"1px",F.popover.borderColor,F.palette.white,"325px","8px","1rem",F.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",F.popover.borderColor,"1px",F.palette.white,"9px","1px","9px","1rem","0.8rem")};let G;const K=o.div(G||(G=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
`),e=>e.state?F.answer.correct:F.answer.incorrect),Y=({isCorrect:e,isIncorrect:r})=>{if(!e&&!r)return null;const n=e||!1===r;return t(K,{state:n,children:[n?"Correct":"Incorrect"," Answer"]})},X=i=>{const{type:a,iter:o,answer:s,disabled:l,onKeyPress:c,qid:d,chosenAnswer:p,correctAnswerId:h,incorrectAnswerId:m,hasCorrectAnswer:u,answered_count:b,contentRenderer:f,show_all_feedback:g,tableFeedbackEnabled:w}=i;let x,v,k;const C=((e,t)=>Boolean((t||[]).find(t=>t==e.id)))(s,p),_=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(s,h),N=y(s,m),q=e("div",{className:"correct-incorrect",children:_&&i.correctIncorrectIcon}),M=n("answers-answer",{disabled:l,"answer-checked":C,"answer-correct":_&&"student-mpp"!==a,"answer-incorrect":m&&y(s,m)});let I,H,O=`${C?"Selected ":""}Choice ${$[o]}`;u&&(O+=`(${_?"Correct":"Incorrect"} Answer)`),O+=":";const T=()=>I&&I(s);if(u||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:I}=i),I&&(H=e("input",{type:"radio",className:"answer-input-box",checked:C,id:`${d}-option-${o}`,name:`${d}-options`,onChange:T,disabled:l})),g&&s.feedback_html&&!w&&(v=e(S,{contentRenderer:f,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===a){let r=0;s.selected_count&&b&&(r=Math.round(s.selected_count/b*100)),k=e("span",{className:"selected-count","data-percent":`${r}`,children:s.selected_count}),x=t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:_,red:!_}),children:[k,e("span",{className:n("letter",{green:_,red:!_}),children:$[o]})]}),t("div",{className:"answer-answer",children:[e(A,{className:"answer-content",component:f,html:s.content_html}),v]})]})}else x=t(r,{children:["teacher-preview"===a&&q,k,H,t("label",{onKeyPress:c,htmlFor:`${d}-option-${o}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:T,"aria-label":O,className:"answer-letter",disabled:l||N,"data-test-id":`answer-choice-${$[o]}`,children:$[o]})}),t("div",{className:"answer-answer",children:[e(Y,{isCorrect:_,isIncorrect:N}),e(A,{className:"answer-content",component:f,html:s.content_html}),v]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:M,children:x})})};X.displayName="OSAnswer";const ee="student",te=r=>{let n=0;const{question:i,hideAnswers:a,type:o=ee,answered_count:s,choicesEnabled:l,correct_answer_id:c,incorrectAnswerId:d,answer_id:p,feedback_html:h,correct_answer_feedback_html:m,show_all_feedback:u=!1,tableFeedbackEnabled:b,hasCorrectAnswer:f,onChangeAnswer:g,onKeyPress:w,answerIdOrder:x,instructions:v}=r;if(a)return null;const{id:$}=i,y=[],k={qid:$||"auto-"+n++,correctAnswerId:c,incorrectAnswerId:d,hasCorrectAnswer:f,chosenAnswer:[p],onChangeAnswer:g,type:o,answered_count:s,disabled:!l,show_all_feedback:u,tableFeedbackEnabled:b,onKeyPress:w},_=(x?(e=>{const{answers:t}=i;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(x):i.answers).map((t,r)=>{const n={answer:C({},t,{question_id:"string"==typeof i.id?parseInt(i.id,10):i.id}),iter:r,key:`${k.qid}-option-${r}`},a=Object.assign({},n,k);return u&&t.feedback_html&&b?y.push({index:r,html:t.feedback_html}):t.id===d&&h?y.push({index:r,html:h}):t.id===c&&m&&y.push({index:r,html:m}),e(X,C({},a))});return y.forEach((t,n)=>{const i=t.index+n+1;_.splice(i,0,e(M,{contentRenderer:r.contentRenderer,children:t.html},i))}),t("div",{className:"answers-table",children:[v,_]})},re=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],ne=["step","questionNumber","numberOfQuestions","children","className"];let ie,ae,oe,se,le,ce,de,pe,he,me,ue,be,fe=e=>e;const ge=o.div(ie||(ie=fe`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  border-radius: 0.25rem;
  margin: 0 auto 5rem auto;
  border: 1px solid ${0};
  border-radius: 0.25rem;
  background-color: white;

  ${0}
`),F.palette.light,W(ae||(ae=fe`
    max-width: 1000px;
  `))),we=o.div(oe||(oe=fe`
  padding: 2rem;

  ${0}
`),U(se||(se=fe`
    padding: 0;
  `))),xe=o.div(le||(le=fe`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${0};
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
`),F.card.header.background,F.palette.gray,W(ce||(ce=fe`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),D(de||(de=fe`
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
  `),"24px","24px"),U(pe||(pe=fe`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));xe.displayName="StepCardHeader";const ve=o.div(he||(he=fe`
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
`),Z.stepCardPadding(),F.card.body.background,((...e)=>s(T||(T=V`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(me||(me=fe`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),W(ue||(ue=fe`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),U(be||(be=fe`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),$e=r=>{let{questionNumber:n,numberOfQuestions:i,showTotalQuestions:a,stepType:o,isHomework:s,availablePoints:l,unpadded:c,className:d,children:p,questionId:h,multipartBadge:m,leftHeaderChildren:u,rightHeaderChildren:b,headerTitleChildren:f}=r,g=_(r,re);return t(we,C({},g,{children:[m,t(ge,{className:d,children:[n&&s&&"exercise"===o&&t(xe,{children:[t("div",{children:[u,t("div",{className:"question-info",children:[f,e("span",{children:i>1?`Questions ${n} - ${n+i-1}`:`Question ${n}`}),a?t("span",{className:"num-questions",children:[" / ",i]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",h]})]})]}),t("div",{children:[l&&t("div",{className:"points",children:[l," Points"]}),b]})]}),e(ve,{unpadded:c,children:p})]})]}))};$e.displayName="OSStepCard";const ye=t=>{let{step:r,questionNumber:i,numberOfQuestions:a,children:o,className:s}=t,l=_(t,ne);return e($e,C({},l,{unpadded:!0,questionNumber:i,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:o}))};ye.displayName="OSTaskStepCard";const ke=["disabled","isWaiting","waitingText","children"];let Ce;const _e=o.button(Ce||(Ce=(e=>e)`
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
`),F.button.background,F.palette.white,F.button.backgroundHover,F.button.backgroundActive),Ne=t=>{const{disabled:r,isWaiting:n,waitingText:i,children:a}=t,o=_(t,ke);return e(_e,C({},o,{disabled:n||r,children:n&&i||a}))};let qe,Ae,Se=e=>e;const Me=o(ge)(qe||(qe=Se`
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
`)),Ie=o.h2(Ae||(Ae=Se`
  font-size: 2.4rem;
  margin: 0;
`)),He=({numberOfQuestions:r,numberCompleted:n,handleClick:i})=>{const a=r===n,o=n>0,s=a?"Next":o?"Continue":"Start";return t(Me,{children:[e(Ie,{children:a?"You are done.":o?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:a?"Great job answering all the questions.":o?`You've completed ${n} of ${r} questions.`:"Begin working on the quiz."}),e(Ne,{"data-test-id":`${s.split(" ")[0].toLowerCase()}-btn`,onClick:()=>i(),children:s})]})};let Oe;const Te=o.div(Oe||(Oe=(e=>e)`
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
      &.answer-checked {
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
      &, .answer-letter {
        cursor: pointer;
      }

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

      .answer-checked {
        .answer-label, .answer-label:hover {
          ${0};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-checked {
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

      .answer-correct:not(.answer-checked) {
        .answer-label {
          ${0}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect, .answer-checked.answer-incorrect {
        .answer-label, .answer-label:hover {
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
`),Z.stepCardPadding(),F.palette.pale,F.palette.neutral,F.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",F.palette.neutralLighter,F.palette.neutralLightest,Z.answer(),"1rem","1rem","0.1s ease-in-out",Z.answerHover(),Z.answerChecked(),Z.answerChecked(),Z.answerIncorrect(),Z.answerCorrect(!0),Z.answerCorrectAnswer(),Z.answerIncorrect(!0),Z.popover(),"370px","0.9rem","1.1rem"),Ee=i.forwardRef((r,i)=>{let a,o;const{question:s,correct_answer_id:l,incorrectAnswerId:c,exercise_uid:d,className:p,questionNumber:h,context:m,task:u,hidePreambles:b}=r,{stem_html:f,collaborator_solutions:g=[],formats:w,stimulus_html:x}=s,v=!!l,$=n("openstax-question",p,{"has-correct-answer":v&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!c});return null!=d&&(a=e("div",{className:"exercise-uid",children:d})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(o=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(A,{className:"solution",block:!0,html:g.map(e=>e.content_html).join("")})]})),t(Te,{ref:i,className:$,"data-question-number":h,"data-test-id":"question",children:[e(je,{type:"context",html:m,hidden:b}),e(je,{type:"stimulus",html:x,hidden:b}),e(je,{type:"stem",html:f,hidden:b,questionNumber:h}),r.children,e(te,C({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),o,r.displayFormats?e(Pe,{formats:w}):void 0,a]})}),je=t=>{const{html:r="",type:n,hidden:i,questionNumber:a}=t;return!0!==i&&r.length>0?e(A,{html:r,"data-question-number":a,className:`question-${n}`,block:!0}):null},Pe=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let ze,Le,Je=e=>e;const Qe=o.div(ze||(ze=Je`
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
`),Z.stepCardPadding(),F.card.body.background,F.palette.pale,W(Le||(Le=Je`
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
    `)));let Re,Ve,Be,Fe,Ue,De,We=e=>e;const Ze=s(Re||(Re=We`
  background-color: #f5e9ea;
`)),Ge=o.div(Ve||(Ve=We`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),Z.stepCardPadding()),Ke=o.div(Be||(Be=We`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),Ye=o.div(Fe||(Fe=We`
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
`),e=>e.hasChildren?"space-between":"flex-end",F.palette.danger,F.palette.neutralThin),Xe=o.textarea(Ue||(Ue=We`
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
`),F.palette.neutral,F.palette.neutralDark,e=>e.isOverWordLimit&&Ze,e=>e.isOverWordLimit&&s(De||(De=We`
    border: 2px solid ${0};
  `),F.palette.danger),e=>e.readOnly&&F.palette.neutralCool);Xe.displayName="OSFreeResponseTextArea";const et=t=>e(Ne,C({},t,{children:"Cancel"})),tt=r=>{const{availablePoints:n,cancelHandler:i,defaultValue:a,infoRowChildren:o,isSubmitDisabled:s,pointsChildren:l,question:c,questionNumber:d,saveHandler:p,submitBtnLabel:h,textHasChanged:m,wordLimit:u}=r,b=k(a)>u,f={};return d&&(f["data-question-number"]=d),t(Ge,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(Ke,C({},f,{children:c.stem_html&&e(je,{type:"stem",html:c.stem_html,hidden:!1})})),e(Xe,C({},r,{isOverWordLimit:b,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(Ye,{hasChildren:!!o,children:[o,t("div",{children:[t("span",{children:[k(a)," words"]}),b&&t("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),t(Qe,{children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",n]}),l]}),t("div",{className:"controls",children:[e(et,{disabled:!m,onClick:i}),e(Ne,{"data-test-id":"submit-answer-btn",disabled:s||b,onClick:p,children:h})]})]})]})};tt.displayName="OSFreeResponse";let rt,nt,it,at,ot,st=e=>e;const lt=o.div(rt||(rt=st`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
`),F.palette.mediumBlue),ct=o.div(nt||(nt=st`
  position: relative;
  display: flex;
`)),dt=o.div(it||(it=st`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),Z.popover),pt=r=>e(lt,C({},r.wrapperProps,{children:t(ct,{children:[r.children,t(dt,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),ht=o.div(at||(at=st`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),mt=o(h)(ot||(ot=st`
  color: ${0};
  height: 1em;
`),F.palette.darkGray),ut=({exercise:t,topicUrl:r,errataUrl:n})=>{const i=[],a=t.questions.every(e=>e.answers.length>0);let o;return a&&t.questions.find(e=>e.formats.includes("free-response"))?o="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":a&&(o="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r&&i.push(e(pt,{text:"View topic in textbook",wrapperProps:{as:"a",href:r,target:"_blank"},children:e(mt,{icon:c})},"topic")),i.push(e(pt,{text:"Suggest a correction",wrapperProps:{as:"a",href:n,target:"_blank"},children:e(mt,{icon:d})},"errata")),o&&i.push(e(pt,{text:o,children:e(mt,{icon:p,height:"16px",width:"16px"})},"type")),e(ht,{children:i})},bt=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),ft=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,gt=t=>e(Ne,C({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:0==t.attempt_number?"Submit":"Re-submit"})),wt=t=>e(Ne,C({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),xt=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,vt=i.forwardRef((r,n)=>{const{question:i,task:a,answer_id_order:o,onAnswerChange:s,feedback_html:l,correct_answer_feedback_html:c,is_completed:d,correct_answer_id:p,incorrectAnswerId:h,choicesEnabled:m,questionNumber:u,answer_id:b,hasMultipleAttempts:f,attempts_remaining:g,published_comments:w,detailedSolution:x,canAnswer:v,needsSaved:$,attempt_number:y,apiIsPending:k,onAnswerSave:C,onNextStep:_,canUpdateCurrentStep:N,displaySolution:q,available_points:S,free_response:M,show_all_feedback:I,tableFeedbackEnabled:H}=r;return t("div",{"data-test-id":"student-exercise-question",children:[e(Ee,{ref:n,task:a,question:i,answerIdOrder:o,choicesEnabled:m,answer_id:b,questionNumber:u,onChange:s,feedback_html:l,correct_answer_feedback_html:c,correct_answer_id:d?p:null,incorrectAnswerId:h,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:q,show_all_feedback:I,tableFeedbackEnabled:H,children:e(xt,{free_response:M})}),e(Qe,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",S]}),e("span",{className:"attempts-left",children:f&&g>0&&e(bt,{count:g})}),e(ft,{published_comments:w}),x&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(A,{html:x})]})]}),e("div",{className:"controls",children:v&&$?e(gt,{disabled:k||!b,isWaiting:k,attempt_number:y,onClick:()=>{return C("string"==typeof(e=i.id)?parseInt(e,10):e);var e}}):e(wt,{onClick:()=>_(u-1),canUpdateCurrentStep:N})})]})})]})}),$t={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},yt=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},kt=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},Ct=(e,t,r=5)=>{r>0&&(kt(e).length||yt(e).length)?setTimeout(()=>{Ct(e,t,r-1)},200):t()},_t=(e,t)=>new Promise(r=>{(function(e,t){const r=kt(e);t.MathJax.Hub.Queue(((e,t)=>()=>{f(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=yt(e);f(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{Ct(e,r)})}),Nt=b((e,t)=>m(_t,100,{leading:!0,trailing:!1}).bind(null,e,t));Nt.cache=new g;const qt=u((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config($t),e.MathJax.Hub.processSectionDelay=0,r()):($t.AuthorInit=r,e.MathJax=$t)})),At=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"];let St;const Mt=o(ye)(St||(St=(e=>e)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`)),It=({exercise:n})=>t(r,{children:[n.context&&e(A,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(A,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),Ht=r=>{let{numberOfQuestions:n,questionNumber:o,step:s,exercise:c,show_all_feedback:d,scrollToQuestion:p}=r,h=_(r,At);const m="feedback_html"in s,u=i.useRef([]),b=i.useRef(null),f=i.useCallback(()=>{b.current&&(async(e,t=window)=>{await qt(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?Nt(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(b.current)},[]);return i.useEffect(()=>{const e=p&&u.current[p];e&&l(e)},[p,c]),e(N.Provider,{value:f,children:e(Mt,{step:s,questionNumber:o,numberOfQuestions:m?n:c.questions.length,rightHeaderChildren:h.showExerciseIcons?e(ut,{exercise:c,topicUrl:h.topicUrl,errataUrl:h.errataUrl}):null,showTotalQuestions:m,children:t("div",{ref:b,children:[e(It,{exercise:c}),c.questions.map((e,t)=>{var r;const n=C({},m?s:h.questionStates[e.id]);return a(vt,C({},h,n,{ref:e=>u.current[o+t]=e,exercise_uid:c.uid,key:e.id,question:e,questionNumber:o+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:d,tableFeedbackEnabled:d&&!m,canUpdateCurrentStep:"canUpdateCurrentStep"in h?h.canUpdateCurrentStep:!(t+1===c.questions.length)}))})]})})})},Ot=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})}),Tt=["color","isActive"];let Et,jt,Pt,zt,Lt,Jt,Qt,Rt,Vt,Bt,Ft=e=>e;const Ut=o.div(Et||(Et=Ft`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${0}
`),U(jt||(jt=Ft`
    padding: 0;
  `))),Dt=o.span(Pt||(Pt=Ft`
  display: flex;
  align-items: center;
  margin: 0 1rem 1rem 0;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),Wt=o.button(Rt||(Rt=Ft`
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
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",F.palette.neutralDarker,e=>e.isActive?"box-shadow: 0px 1px 4px 0px #00000066;":null,e=>(e=>{switch(e){case"isStatus":return s(zt||(zt=Ft`
        background-color: ${0};
      `),F.palette.neutralBright);case"isCorrect":return s(Lt||(Lt=Ft`
        color: ${0};
        background-color: #E8F4D8;
      `),F.answer.correct);case"isIncorrect":return s(Jt||(Jt=Ft`
        color: ${0};
        background-color: #F8E8EA;
      `),F.answer.incorrect);default:return s(Qt||(Qt=Ft`
        background-color: ${0};
      `),F.palette.neutralBright)}})(e.variant)),Zt=o(t=>{let r=_(t,Tt);return e(h,C({},r))})(Vt||(Vt=Ft`
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
  ${0};
`),e=>e.color,e=>e.isActive?s(Bt||(Bt=Ft`
    bottom: 0;
    right: 0;
  `)):null),Gt=({variant:t,isActive:r})=>{if(!t||"isCorrect"!==t&&"isIncorrect"!==t)return null;const n={isCorrect:{icon:w,color:F.answer.correct},isIncorrect:{icon:x,color:F.answer.incorrect}}[t];return e(Zt,{icon:n.icon,color:n.color,height:"16px",width:"16px",isActive:r})},Kt=({index:r,isActive:n,step:i,goToStep:a})=>t(Dt,{children:[e(Wt,{variant:i.variant,isActive:n,onClick:()=>a(r,i),children:"isStatus"===i.variant?e(Ot,{}):r+1}),e(Gt,{variant:i.variant,isActive:n})]}),Yt=({steps:t,activeIndex:r,goToStep:n})=>e(Ut,{children:t.map((t,i)=>e(Kt,{index:i,isActive:i===r,step:t,goToStep:n},i))});let Xt;const er=o.div(Xt||(Xt=(e=>e)`
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
`),F.palette.light),tr=()=>e(er,{children:e(v,{uniqueKey:"OSLoader"})});export{X as Answer,te as AnswersTable,He as CompletionStatus,Ht as Exercise,tt as FreeResponseInput,Xe as FreeResponseTextArea,ge as InnerStepCard,tr as Loader,we as OuterStepCard,Yt as ProgressBar,Kt as ProgressBarItem,Ee as Question,je as QuestionHtml,$e as StepCard,Wt as StyledItem,ye as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
