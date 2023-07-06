import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import a,{createElement as o}from"react";import i,{css as s}from"styled-components";import l from"scroll-to-element";import{faBookOpen as d}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as c}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as p}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{FontAwesomeIcon as h}from"@fortawesome/react-fontawesome";import{debounce as m,once as u}from"lodash";import{memoize as b,isEmpty as g}from"lodash/fp.js";import w from"weak-map";import{BulletList as f}from"react-content-loader";const x="abcdefghijklmnopqrstuvwxyz",$=function(e,t){return e.id===t};function v(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const C=a.createContext(()=>{throw new Error("context not initialized")}),_=["html","component","block"],N=t=>{let{html:r,component:n,block:o=!1}=t,i=k(t,_);const s=a.useContext(C);return a.useEffect(()=>{s()},[s,r]),void 0!==n?a.cloneElement(n,y({html:r},i)):e(o?"div":"span",y({dangerouslySetInnerHTML:{__html:r}},i))},q=t=>e("aside",{children:e(N,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),S=r=>{const a=n("question-feedback",r.position||"bottom");return t("aside",{className:a,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(q,y({},r,{children:r.children}))]})},A=a=>{const{type:o,iter:i,answer:s,disabled:l,onKeyPress:d,qid:c,chosenAnswer:p,correctAnswerId:h,incorrectAnswerId:m,hasCorrectAnswer:u,answered_count:b,contentRenderer:g,show_all_feedback:w,tableFeedbackEnabled:f}=a;let v,y,k;const C=((e,t)=>Boolean((t||[]).find(t=>t==e.id)))(s,p),_=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(s,h),S=$(s,m),A=e("div",{className:"correct-incorrect",children:_&&a.correctIncorrectIcon}),M=n("answers-answer",{disabled:l,"answer-checked":C,"answer-correct":_&&"student-mpp"!==o,"answer-incorrect":m&&$(s,m)});let H,I,O=`${C?"Selected ":""}Choice ${x[i]}`;u&&(O+=`(${_?"Correct":"Incorrect"} Answer)`),O+=":";const T=()=>H&&H(s);if(u||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:H}=a),H&&(I=e("input",{type:"radio",className:"answer-input-box",checked:C,id:`${c}-option-${i}`,name:`${c}-options`,onChange:T,disabled:l})),w&&s.feedback_html&&!f&&(y=e(q,{contentRenderer:g,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===o){let r=0;s.selected_count&&b&&(r=Math.round(s.selected_count/b*100)),k=e("span",{className:"selected-count","data-percent":`${r}`,children:s.selected_count}),v=t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:_,red:!_}),children:[k,e("span",{className:n("letter",{green:_,red:!_}),children:x[i]})]}),t("div",{className:"answer-answer",children:[e(N,{className:"answer-content",component:g,html:s.content_html}),y]})]})}else v=t(r,{children:["teacher-preview"===o&&A,k,I,t("label",{onKeyPress:d,htmlFor:`${c}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:T,"aria-label":O,className:"answer-letter",disabled:l||S,"data-test-id":`answer-choice-${x[i]}`,children:x[i]})}),t("div",{className:"answer-answer",children:[e(N,{className:"answer-content",component:g,html:s.content_html}),y]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:M,children:v})})};A.displayName="OSAnswer";const M="student",H=r=>{let n=0;const{question:a,hideAnswers:o,type:i=M,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:h,correct_answer_feedback_html:m,show_all_feedback:u=!1,tableFeedbackEnabled:b,hasCorrectAnswer:g,onChangeAnswer:w,onKeyPress:f,answerIdOrder:x,instructions:$}=r;if(o)return null;const{id:v}=a,k=[],C={qid:v||"auto-"+n++,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:g,chosenAnswer:[p],onChangeAnswer:w,type:i,answered_count:s,disabled:!l,show_all_feedback:u,tableFeedbackEnabled:b,onKeyPress:f},_=(x?(e=>{const{answers:t}=a;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(x):a.answers).map((t,r)=>{const n={answer:y({},t,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:r,key:`${C.qid}-option-${r}`},o=Object.assign({},n,C);return u&&t.feedback_html&&b?k.push({index:r,html:t.feedback_html}):t.id===c&&h?k.push({index:r,html:h}):t.id===d&&m&&k.push({index:r,html:m}),e(A,y({},o))});return k.forEach((t,n)=>{const a=t.index+n+1;_.splice(a,0,e(S,{contentRenderer:r.contentRenderer,children:t.html},a))}),t("div",{className:"answers-table",children:[$,_]})};let I,O,T,j,P,E,L,z,J,R,B,Q,V,F,U=e=>e;const D={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},W={palette:D,answer:{color:D.lightBlue,correct:{color:D.green,background:"#77af42"},incorrect:{color:D.red,background:D.red},checked:D.lightBlue,hover:D.neutralDark,label:{color:D.neutral,colorHover:D.neutralDark,colorSelected:D.lightBlue}},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:D.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:D.neutralDark,background:D.neutralLighter}},G=(...e)=>s(I||(I=U`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),Z=(...e)=>s(O||(O=U`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),K=(...e)=>s(T||(T=U`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),Y={answer:()=>s(P||(P=U`
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
  `),W.answer.label.color,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",W.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",W.palette.white),answerColor:e=>s(E||(E=U`
    color: ${0};
    .answer-letter {
       border-color: ${0};
       background-color: ${0};
       color: ${0};
    }
  `),e.color,e.color,e.background,W.palette.white),answerChecked:()=>Y.answerColor({color:W.answer.checked,background:W.answer.checked}),answerCorrect:()=>Y.answerColor(W.answer.correct),answerIncorrect:()=>Y.answerColor(W.answer.incorrect),answerHover:()=>s(L||(L=U`
    color: ${0};
    .answer-letter {
      border-color: ${0};
    }
  `),W.answer.label.colorHover,W.answer.label.colorSelected),answerCorrectText:()=>s(z||(z=U`
    content: 'correct answer';
    color: ${0};
    margin-left: calc(-1.34 * ${0});
    display: flex;
    align-items: center;
    height: ${0};
    width: 4.8rem;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.2rem;
  `),W.answer.label.color,"3.6rem","3.6rem"),answerCorrectAnswer:()=>s(J||(J=U`
    color: ${0};
    .answer-letter {
      border-color: ${0};
      color: ${0};
    }
    &::before {
     ${0}
      @media screen and (max-width: ${0}px) {
        display: none;
      }
    }
    @media screen and (max-width:  ${0}px) {
      .answer-letter-wrapper {
        display: flex;
        flex-direction: column;
        &::after {
          ${0}
          width: ${0} !important;
          margin-left: -0.1rem;
        }
      }
    }
  `),W.answer.correct.color,W.answer.correct.color,W.answer.correct.color,Y.answerCorrectText(),999,999,Y.answerCorrectText(),"3.6rem"),resetText:()=>s(R||(R=U`
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
  `)),stepCardPadding:()=>s(B||(B=U`
    padding: 48px 140px;

    ${0}

    ${0}
  `),Z(Q||(Q=U`
      padding: ${0} ${0};
    `),"24px","24px"),G(V||(V=U`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(F||(F=U`
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
  `),Y.resetText(),"1px",W.popover.borderColor,W.palette.white,"325px","8px","1rem",W.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",W.popover.borderColor,"1px",W.palette.white,"9px","1px","9px","1rem","0.8rem")},X=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],ee=["step","questionNumber","numberOfQuestions","children","className"];let te,re,ne,ae,oe,ie,se,le,de,ce,pe,he,me=e=>e;const ue=i.div(te||(te=me`
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
`),W.palette.light,K(re||(re=me`
    max-width: 1000px;
  `))),be=i.div(ne||(ne=me`
  padding: 2rem;

  ${0}
`),G(ae||(ae=me`
    padding: 0;
  `))),ge=i.div(oe||(oe=me`
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
`),W.card.header.background,W.palette.gray,K(ie||(ie=me`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),Z(se||(se=me`
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
  `),"24px","24px"),G(le||(le=me`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));ge.displayName="StepCardHeader";const we=i.div(de||(de=me`
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
`),Y.stepCardPadding(),W.card.body.background,((...e)=>s(j||(j=U`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(ce||(ce=me`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),K(pe||(pe=me`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),G(he||(he=me`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),fe=r=>{let{questionNumber:n,numberOfQuestions:a,showTotalQuestions:o,stepType:i,isHomework:s,availablePoints:l,unpadded:d,className:c,children:p,questionId:h,multipartBadge:m,leftHeaderChildren:u,rightHeaderChildren:b,headerTitleChildren:g}=r,w=k(r,X);return t(be,y({},w,{children:[m,t(ue,{className:c,children:[n&&s&&"exercise"===i&&t(ge,{children:[t("div",{children:[u,t("div",{className:"question-info",children:[g,e("span",{children:a>1?`Questions ${n} - ${n+a-1}`:`Question ${n}`}),o?t("span",{className:"num-questions",children:[" / ",a]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",h]})]})]}),t("div",{children:[l&&t("div",{className:"points",children:[l," Points"]}),b]})]}),e(we,{unpadded:d,children:p})]})]}))};fe.displayName="OSStepCard";const xe=t=>{let{step:r,questionNumber:a,numberOfQuestions:o,children:i,className:s}=t,l=k(t,ee);return e(fe,y({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:i}))};xe.displayName="OSTaskStepCard";const $e=["disabled","isWaiting","waitingText","children"];let ve;const ye=i.button(ve||(ve=(e=>e)`
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
`),W.button.background,W.palette.white,W.button.backgroundHover,W.button.backgroundActive),ke=t=>{const{disabled:r,isWaiting:n,waitingText:a,children:o}=t,i=k(t,$e);return e(ye,y({},i,{disabled:n||r,children:n&&a||o}))};let Ce,_e,Ne=e=>e;const qe=i(ue)(Ce||(Ce=Ne`
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
`)),Se=i.h2(_e||(_e=Ne`
  font-size: 2.4rem;
  margin: 0;
`)),Ae=({numberOfQuestions:r,numberCompleted:n,handleClick:a})=>{const o=r===n,i=n>0,s=o?"Next":i?"Continue":"Start";return t(qe,{children:[e(Se,{children:o?"You are done.":i?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:o?"Great job answering all the questions.":i?`You've completed ${n} of ${r} questions.`:"Begin working on the quiz."}),e(ke,{"data-test-id":`${s.split(" ")[0].toLowerCase()}-btn`,onClick:()=>a(),children:s})]})};let Me;const He=i.div(Me||(Me=(e=>e)`
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
      ${0};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      align-items: center;
      margin-left: ${0};
      * {
        margin: 0;
      }
    }

    .answers-answer.answer-correct .answer-answer {
      align-items: flex-start;
      margin-top: calc((${0} / 2) - 1rem);
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
      font-weight: normal;
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

      .answer-checked{
        .answer-label {
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
        .answer-label {
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
`),Y.stepCardPadding(),W.palette.pale,W.palette.neutral,W.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",W.palette.neutralLighter,W.palette.neutralLightest,Y.answer(),"1rem","3.6rem","1rem","0.1s ease-in-out",Y.answerHover(),Y.answerChecked(),Y.answerChecked(),Y.answerIncorrect(),Y.answerCorrect(),Y.answerCorrectAnswer(),Y.answerIncorrect(),Y.popover(),"370px","0.9rem","1.1rem"),Ie=a.forwardRef((r,a)=>{let o,i;const{question:s,correct_answer_id:l,incorrectAnswerId:d,exercise_uid:c,className:p,questionNumber:h,context:m,task:u,hidePreambles:b}=r,{stem_html:g,collaborator_solutions:w=[],formats:f,stimulus_html:x}=s,$=!!l,v=n("openstax-question",p,{"has-correct-answer":$&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(o=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(N,{className:"solution",block:!0,html:w.map(e=>e.content_html).join("")})]})),t(He,{ref:a,className:v,"data-question-number":h,"data-test-id":"question",children:[e(Oe,{type:"context",html:m,hidden:b}),e(Oe,{type:"stimulus",html:x,hidden:b}),e(Oe,{type:"stem",html:g,hidden:b,questionNumber:h}),r.children,e(H,y({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:$})),i,r.displayFormats?e(Te,{formats:f}):void 0,o]})}),Oe=t=>{const{html:r="",type:n,hidden:a,questionNumber:o}=t;return!0!==a&&r.length>0?e(N,{html:r,"data-question-number":o,className:`question-${n}`,block:!0}):null},Te=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let je,Pe,Ee=e=>e;const Le=i.div(je||(je=Ee`
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

    ${0}
`),Y.stepCardPadding(),W.card.body.background,W.palette.pale,K(Pe||(Pe=Ee`
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
    `)));let ze,Je,Re,Be,Qe,Ve,Fe=e=>e;const Ue=s(ze||(ze=Fe`
  background-color: #f5e9ea;
`)),De=i.div(Je||(Je=Fe`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),Y.stepCardPadding()),We=i.div(Re||(Re=Fe`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),Ge=i.div(Be||(Be=Fe`
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
`),e=>e.hasChildren?"space-between":"flex-end",W.palette.danger,W.palette.neutralThin),Ze=i.textarea(Qe||(Qe=Fe`
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
`),W.palette.neutral,W.palette.neutralDark,e=>e.isOverWordLimit&&Ue,e=>e.isOverWordLimit&&s(Ve||(Ve=Fe`
    border: 2px solid ${0};
  `),W.palette.danger),e=>e.readOnly&&W.palette.neutralCool);Ze.displayName="OSFreeResponseTextArea";const Ke=t=>e(ke,y({},t,{children:"Cancel"})),Ye=r=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,pointsChildren:l,question:d,questionNumber:c,saveHandler:p,submitBtnLabel:h,textHasChanged:m,wordLimit:u}=r,b=v(o)>u,g={};return c&&(g["data-question-number"]=c),t(De,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(We,y({},g,{children:d.stem_html&&e(Oe,{type:"stem",html:d.stem_html,hidden:!1})})),e(Ze,y({},r,{isOverWordLimit:b,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(Ge,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[v(o)," words"]}),b&&t("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),t(Le,{children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",n]}),l]}),t("div",{className:"controls",children:[e(Ke,{disabled:!m,onClick:a}),e(ke,{"data-test-id":"submit-answer-btn",disabled:s||b,onClick:p,children:h})]})]})]})};Ye.displayName="OSFreeResponse";let Xe,et,tt,rt,nt,at=e=>e;const ot=i.div(Xe||(Xe=at`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
`),W.palette.mediumBlue),it=i.div(et||(et=at`
  position: relative;
  display: flex;
`)),st=i.div(tt||(tt=at`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),Y.popover),lt=r=>e(ot,y({},r.wrapperProps,{children:t(it,{children:[r.children,t(st,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),dt=i.div(rt||(rt=at`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),ct=i(h)(nt||(nt=at`
  color: ${0};
  height: 1em;
`),W.palette.darkGray),pt=({exercise:t,topicUrl:r,errataUrl:n})=>{const a=[],o=t.questions.every(e=>e.answers.length>0);let i;return o&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":o&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r&&a.push(e(lt,{text:"View topic in textbook",wrapperProps:{as:"a",href:r,target:"_blank"},children:e(ct,{icon:d})},"topic")),a.push(e(lt,{text:"Suggest a correction",wrapperProps:{as:"a",href:n,target:"_blank"},children:e(ct,{icon:c})},"errata")),i&&a.push(e(lt,{text:i,children:e(ct,{icon:p,height:"16px",width:"16px"})},"type")),e(dt,{children:a})},ht=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),mt=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,ut=t=>e(ke,y({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:0==t.attempt_number?"Submit":"Re-submit"})),bt=t=>e(ke,y({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),gt=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,wt=a.forwardRef((r,n)=>{const{question:a,task:o,answer_id_order:i,onAnswerChange:s,feedback_html:l,correct_answer_feedback_html:d,is_completed:c,correct_answer_id:p,incorrectAnswerId:h,choicesEnabled:m,questionNumber:u,answer_id:b,hasMultipleAttempts:g,attempts_remaining:w,published_comments:f,detailedSolution:x,canAnswer:$,needsSaved:v,attempt_number:y,apiIsPending:k,onAnswerSave:C,onNextStep:_,canUpdateCurrentStep:q,displaySolution:S,available_points:A,free_response:M,show_all_feedback:H,tableFeedbackEnabled:I}=r;return t("div",{"data-test-id":"student-exercise-question",children:[e(Ie,{ref:n,task:o,question:a,answerIdOrder:i,choicesEnabled:m,answer_id:b,questionNumber:u,onChange:s,feedback_html:l,correct_answer_feedback_html:d,correct_answer_id:c?p:null,incorrectAnswerId:h,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:S,show_all_feedback:H,tableFeedbackEnabled:I,children:e(gt,{free_response:M})}),e(Le,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",A]}),e("span",{className:"attempts-left",children:g&&w>0&&e(ht,{count:w})}),e(mt,{published_comments:f}),x&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(N,{html:x})]})]}),e("div",{className:"controls",children:$&&v?e(ut,{disabled:k||!b,isWaiting:k,attempt_number:y,onClick:()=>{return C("string"==typeof(e=a.id)?parseInt(e,10):e);var e}}):e(bt,{onClick:()=>_(u-1),canUpdateCurrentStep:q})})]})})]})}),ft={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},xt=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},$t=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},vt=(e,t,r=5)=>{r>0&&($t(e).length||xt(e).length)?setTimeout(()=>{vt(e,t,r-1)},200):t()},yt=(e,t)=>new Promise(r=>{(function(e,t){const r=$t(e);t.MathJax.Hub.Queue(((e,t)=>()=>{g(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=xt(e);g(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{vt(e,r)})}),kt=b((e,t)=>m(yt,100,{leading:!0,trailing:!1}).bind(null,e,t));kt.cache=new w;const Ct=u((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(ft),e.MathJax.Hub.processSectionDelay=0,r()):(ft.AuthorInit=r,e.MathJax=ft)})),_t=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"];let Nt;const qt=i(xe)(Nt||(Nt=(e=>e)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`)),St=({exercise:n})=>t(r,{children:[n.context&&e(N,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(N,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),At=r=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:d,show_all_feedback:c,scrollToQuestion:p}=r,h=k(r,_t);const m="feedback_html"in s,u=a.useRef([]),b=a.useRef(null),g=a.useCallback(()=>{b.current&&(async(e,t=window)=>{await Ct(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?kt(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(b.current)},[]);return a.useEffect(()=>{const e=p&&u.current[p];e&&l(e)},[p,d]),e(C.Provider,{value:g,children:e(qt,{step:s,questionNumber:i,numberOfQuestions:m?n:d.questions.length,rightHeaderChildren:h.showExerciseIcons?e(pt,{exercise:d,topicUrl:h.topicUrl,errataUrl:h.errataUrl}):null,showTotalQuestions:m,children:t("div",{ref:b,children:[e(St,{exercise:d}),d.questions.map((e,t)=>{var r;const n=y({},m?s:h.questionStates[e.id]);return o(wt,y({},h,n,{ref:e=>u.current[i+t]=e,exercise_uid:d.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:c,tableFeedbackEnabled:c&&!m,canUpdateCurrentStep:"canUpdateCurrentStep"in h?h.canUpdateCurrentStep:!(t+1===d.questions.length)}))})]})})})},Mt=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let Ht,It,Ot,Tt,jt,Pt,Et,Lt,zt=e=>e;const Jt=i.div(Ht||(Ht=zt`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${0}
`),G(It||(It=zt`
    padding: 0;
  `))),Rt=i.span(Ot||(Ot=zt`
  display: flex;
  align-items: center;
  margin: 0 1rem 1rem 0;

  &:last-child {
    margin-right: 0;
  }
`)),Bt=i.button(Lt||(Lt=zt`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${0};
  height: ${0};
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  margin: ${0};
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  ${0}
`),e=>e.isActive?"3.0rem":"2.4rem",e=>e.isActive?"3.0rem":"2.4rem",e=>e.isActive?"0":"0 0.3rem",e=>((e,t)=>{switch(e){case"isStatus":return s(Tt||(Tt=zt`
        color: ${0};
        background-color: ${0};
        border: none;
        box-shadow: ${0};
      `),t?W.palette.white:W.palette.darkGray,t?W.palette.darkGray:W.palette.neutralLight,t?"0px 0px 2px rgba(0, 0, 0, 0.4), 0px 0px 6px rgba(0, 0, 0, 0.2)":"none");case"isCorrect":return s(jt||(jt=zt`
        color: ${0};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${0};
        box-shadow: ${0};
      `),W.palette.white,W.palette.darkGreen,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return s(Pt||(Pt=zt`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),W.palette.white,W.palette.lightRed,W.palette.darkRed,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return s(Et||(Et=zt`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),W.palette.darkGray,t?W.palette.white:W.palette.neutralLight,t?W.palette.darkGray:W.palette.neutralLight,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}})(e.variant,e.isActive)),Qt=({index:t,isActive:r,step:n,goToStep:a})=>e(Rt,{children:e(Bt,{variant:n.variant,isActive:r,onClick:()=>a(t,n),children:"isStatus"===n.variant?e(Mt,{}):t+1})}),Vt=({steps:t,activeIndex:r,goToStep:n})=>e(Jt,{children:t.map((t,a)=>e(Qt,{index:a,isActive:a===r,step:t,goToStep:n},a))});let Ft;const Ut=i.div(Ft||(Ft=(e=>e)`
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
`),W.palette.light),Dt=()=>e(Ut,{children:e(f,{uniqueKey:"OSLoader"})});export{A as Answer,H as AnswersTable,Ae as CompletionStatus,At as Exercise,Ye as FreeResponseInput,Ze as FreeResponseTextArea,ue as InnerStepCard,Dt as Loader,be as OuterStepCard,Vt as ProgressBar,Qt as ProgressBarItem,Ie as Question,Oe as QuestionHtml,fe as StepCard,Bt as StyledItem,xe as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
