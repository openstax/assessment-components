import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import o,{useState as a,useEffect as i,createElement as s}from"react";import l,{css as c,createGlobalStyle as d}from"styled-components";import p from"scroll-to-element";import{debounce as m,once as h}from"lodash";import{memoize as u,isEmpty as b}from"lodash/fp.js";import f from"weak-map";import{FontAwesomeIcon as g}from"@fortawesome/react-fontawesome";import{faBookOpen as w,faTriangleExclamation as x}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as v}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as $}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as k}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as y}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as C}from"@fortawesome/free-solid-svg-icons/faXmark";import{BulletList as _}from"react-content-loader";const N="ABCDEFGHIJKLMNOPQRSTUVWXYZ",q=(e,t)=>e.id===t;function S(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}function M(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const I=o.createContext(()=>{throw new Error("context not initialized")}),T=["html","component","block"],O=t=>{let{html:r,component:n,block:a=!1}=t,i=M(t,T);const s=o.useContext(I);return o.useEffect(()=>{s()},[s,r]),void 0!==n?o.cloneElement(n,A({html:r},i)):e(a?"div":"span",A({dangerouslySetInnerHTML:{__html:r}},i))},E=t=>e("aside",{children:e(O,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),H=r=>{const o=n("question-feedback",r.position||"bottom");return t("aside",{className:o,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(E,A({},r,{children:r.children}))]})};let j,z,P,L,J,Q,V,B,F,R,D,W,U=e=>e;const Z={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},G={palette:Z,answer:{neutral:Z.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:Z.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:Z.neutralDarker,background:Z.neutralLighter}},K=(...e)=>c(j||(j=U`@media(max-width: ${0}px) { ${0} }`),600,c(...e)),Y=(...e)=>c(z||(z=U`@media(max-width: ${0}px) { ${0} }`),999,c(...e)),X=(...e)=>c(P||(P=U`@media(min-width: ${0}px) { ${0} }`),1e3,c(...e)),ee={answer:()=>c(J||(J=U`
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
  `),Z.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",G.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",G.palette.white),answerColor:(e,t=!1)=>c(Q||(Q=U`
    .answer-letter {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>ee.answerColor(G.answer.checked,!0),answerCorrect:e=>ee.answerColor(G.answer.correct,e),answerIncorrect:e=>ee.answerColor(G.answer.incorrect,e),answerHover:()=>c(V||(V=U`
    ${0};
    font-weight: bold;
  `),ee.answerColor(G.answer.hover)),answerCorrectAnswer:()=>ee.answerColor(G.answer.correct,!1),resetText:()=>c(B||(B=U`
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
  `)),stepCardPadding:()=>c(F||(F=U`
    padding: 48px 140px;

    ${0}

    ${0}
  `),Y(R||(R=U`
      padding: ${0} ${0};
    `),"24px","24px"),K(D||(D=U`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>c(W||(W=U`
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
  `),ee.resetText(),"1px",G.popover.borderColor,G.palette.white,"325px","8px","1rem",G.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",G.popover.borderColor,"1px",G.palette.white,"9px","1px","9px","1rem","0.8rem")};let te;const re=l.div(te||(te=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`),e=>e.state?G.answer.correct:G.answer.incorrect),ne=({isCorrect:e,isIncorrect:r})=>{if(!e&&!r)return null;const n=e||!1===r;return t(re,{state:n,children:[n?"Correct":"Incorrect"," Answer"]})},oe=o=>{const{type:a,iter:i,answer:s,disabled:l,onKeyPress:c,qid:d,answerId:p,correctAnswerId:m,incorrectAnswerId:h,hasCorrectAnswer:u,answered_count:b,contentRenderer:f,show_all_feedback:g,tableFeedbackEnabled:w}=o;let x,v,$;const k=((e,t)=>e.id==t)(s,p),y=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(s,m),C=q(s,h),_=n("answers-answer",{disabled:l,"answer-selected":k||void 0===p&&(!h&&y||C),"answer-correct":y&&"student-mpp"!==a,"answer-incorrect":h&&q(s,h)}),S=e("div",{className:"correct-incorrect",children:y&&o.correctIncorrectIcon});let A,M,I=`${k?"Selected ":""}Choice ${N[i]}`;u&&(I+=`(${y?"Correct":"Incorrect"} Answer)`),I+=":";const T=()=>A&&A(s);if(u||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:A}=o),A&&(M=e("input",{type:"radio",className:"answer-input-box",checked:k,id:`${d}-option-${i}`,name:`${d}-options`,onChange:T,disabled:l})),g&&s.feedback_html&&!w&&(v=e(E,{contentRenderer:f,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===a){let r=0;s.selected_count&&b&&(r=Math.round(s.selected_count/b*100)),$=e("span",{className:"selected-count","data-percent":`${r}`,children:s.selected_count}),x=t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:y,red:!y}),children:[$,e("span",{className:n("letter",{green:y,red:!y}),children:N[i]})]}),t("div",{className:"answer-answer",children:[e(O,{className:"answer-content",component:f,html:s.content_html}),v]})]})}else x=t(r,{children:["teacher-preview"===a&&S,$,M,t("label",{onKeyPress:c,htmlFor:`${d}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:T,"aria-label":I,className:"answer-letter",disabled:l||C,"data-test-id":`answer-choice-${N[i]}`,children:N[i]})}),t("div",{className:"answer-answer",children:[e(ne,{isCorrect:y,isIncorrect:C}),e(O,{className:"answer-content",component:f,html:s.content_html}),v]})]})]});return e("div",{className:"openstax-answer",children:e("section",{className:_,children:x})})};oe.displayName="OSAnswer";const ae="student",ie=r=>{let n=0;const{question:o,hideAnswers:a,type:i=ae,answered_count:s,choicesEnabled:l,correct_answer_id:c,incorrectAnswerId:d,answer_id:p,feedback_html:m,correct_answer_feedback_html:h,show_all_feedback:u=!1,tableFeedbackEnabled:b,hasCorrectAnswer:f,onChangeAnswer:g,onKeyPress:w,answerIdOrder:x,instructions:v}=r;if(a)return null;const{id:$}=o,k=[],y={qid:$||"auto-"+n++,answerId:p,correctAnswerId:c,incorrectAnswerId:d,hasCorrectAnswer:f,onChangeAnswer:g,type:i,answered_count:s,disabled:!l,show_all_feedback:u,tableFeedbackEnabled:b,onKeyPress:w},C=(x?(e=>{const{answers:t}=o;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(x):o.answers).map((t,r)=>{const n={answer:A({},t,{question_id:"string"==typeof o.id?parseInt(o.id,10):o.id}),iter:r,key:`${y.qid}-option-${r}`},a=Object.assign({},n,y);return u&&t.feedback_html&&b?k.push({index:r,html:t.feedback_html}):t.id===d&&m?k.push({index:r,html:m}):t.id===c&&h&&k.push({index:r,html:h}),e(oe,A({},a))});return k.forEach((t,n)=>{const o=t.index+n+1;C.splice(o,0,e(H,{contentRenderer:r.contentRenderer,children:t.html},o))}),t("div",{className:"answers-table",children:[v,C]})},se=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],le=["step","questionNumber","numberOfQuestions","children","className"];let ce,de,pe,me,he,ue,be,fe,ge,we,xe,ve,$e=e=>e;const ke=l.div(ce||(ce=$e`
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
`),G.palette.light,X(de||(de=$e`
    max-width: 1000px;
  `))),ye=l.div(pe||(pe=$e`
  padding: ${0};

  ${0}
`),"2rem",K(me||(me=$e`
    padding: 0;
  `))),Ce=l.div(he||(he=$e`
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
`),G.card.header.background,G.palette.gray,X(ue||(ue=$e`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),Y(be||(be=$e`
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
  `),"24px","24px"),K(fe||(fe=$e`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));Ce.displayName="StepCardHeader";const _e=l.div(ge||(ge=$e`
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
`),ee.stepCardPadding(),G.card.body.background,((...e)=>c(L||(L=U`@media(max-width: ${0}px) { ${0} }`),600,c(...e)))(we||(we=$e`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),X(xe||(xe=$e`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),K(ve||(ve=$e`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),Ne=r=>{let{questionNumber:n,numberOfQuestions:o,showTotalQuestions:a,stepType:i,isHomework:s,availablePoints:l,unpadded:c,className:d,children:p,questionId:m,multipartBadge:h,leftHeaderChildren:u,rightHeaderChildren:b,headerTitleChildren:f}=r,g=M(r,se);return t(ye,A({},g,{children:[h,t(ke,{className:d,children:[n&&s&&"exercise"===i&&t(Ce,{children:[t("div",{children:[u,t("div",{className:"question-info",children:[f,e("span",{children:o>1?`Questions ${n} - ${n+o-1}`:`Question ${n}`}),a?t("span",{className:"num-questions",children:[" / ",o]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",m]})]})]}),l||b?t("div",{children:[l&&t("div",{className:"points",children:[l," Points"]}),b]}):null]}),e(_e,{unpadded:c,children:p})]})]}))};Ne.displayName="OSStepCard";const qe=t=>{let{step:r,questionNumber:o,numberOfQuestions:a,children:i,className:s}=t,l=M(t,le);return e(Ne,A({},l,{unpadded:!0,questionNumber:o,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:i}))};qe.displayName="OSTaskStepCard";const Se=["disabled","isWaiting","waitingText","children"];let Ae;const Me=l.button(Ae||(Ae=(e=>e)`
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
`),G.button.background,G.palette.white,G.button.backgroundHover,G.button.backgroundActive),Ie=t=>{const{disabled:r,isWaiting:n,waitingText:o,children:a}=t,i=M(t,Se);return e(Me,A({},i,{disabled:n||r,children:n&&o||a}))};let Te,Oe,Ee,He,je=e=>e;const ze=d(Te||(Te=je`
  :root {
    --content-text-scale: 1;
  }
`)),Pe=l(ke)(Oe||(Oe=je`
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
`)),Le=l.h2(Ee||(Ee=je`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`)),Je=l(({numberOfQuestions:n,numberCompleted:o,handleClick:a,className:i})=>{const s=n===o,l=o>0,c=s?"Next":l?"Continue":"Start";return t(r,{children:[e(ze,{}),t(Pe,{className:i,children:[e(Le,{children:s?"You are done.":l?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:s?"Great job answering all the questions.":l?`You've completed ${o} of ${n} questions.`:"Begin working on the quiz."}),e(Ie,{"data-test-id":`${c.split(" ")[0].toLowerCase()}-btn`,onClick:()=>a(),children:c})]})]})})(He||(He=je``));let Qe;const Ve=l.div(Qe||(Qe=(e=>e)`
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
`),ee.stepCardPadding(),G.palette.pale,G.palette.neutral,G.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",G.palette.neutralLighter,G.palette.neutralLightest,ee.answer(),"1rem","1rem","0.1s ease-in-out",ee.answerHover(),ee.answerChecked(),ee.answerChecked(),ee.answerIncorrect(),ee.answerCorrect(!0),ee.answerCorrectAnswer(),ee.answerIncorrect(),ee.answerIncorrect(!0),ee.popover(),"370px","0.9rem","1.1rem"),Be=o.forwardRef((r,o)=>{let a,i;const{question:s,correct_answer_id:l,incorrectAnswerId:c,exercise_uid:d,className:p,questionNumber:m,context:h,task:u,hidePreambles:b}=r,{stem_html:f,collaborator_solutions:g=[],formats:w,stimulus_html:x}=s,v=!!l,$=n("openstax-question",p,{"has-correct-answer":v&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!c});return null!=d&&(a=e("div",{className:"exercise-uid",children:d})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(O,{className:"solution",block:!0,html:g.map(e=>e.content_html).join("")})]})),t(Ve,{ref:o,className:$,"data-question-number":m,"data-test-id":"question",children:[e(Fe,{type:"context",html:h,hidden:b}),e(Fe,{type:"stimulus",html:x,hidden:b}),e(Fe,{type:"stem",html:f,hidden:b,questionNumber:m}),r.children,e(ie,A({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),i,r.displayFormats?e(Re,{formats:w}):void 0,a]})}),Fe=t=>{const{html:r="",type:n,hidden:o,questionNumber:a}=t;return!0!==o&&r.length>0?e(O,{html:r,"data-question-number":a,className:`question-${n}`,block:!0}):null},Re=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let De,We,Ue=e=>e;const Ze=l.div(De||(De=Ue`
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
`),ee.stepCardPadding(),G.card.body.background,G.palette.pale,X(We||(We=Ue`
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
    `)));let Ge,Ke,Ye,Xe,et,tt,rt=e=>e;const nt=c(Ge||(Ge=rt`
  background-color: #f5e9ea;
`)),ot=l.div(Ke||(Ke=rt`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),ee.stepCardPadding()),at=l.div(Ye||(Ye=rt`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),it=l.div(Xe||(Xe=rt`
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
`),e=>e.hasChildren?"space-between":"flex-end",G.palette.danger,G.palette.neutralThin),st=l.textarea(et||(et=rt`
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
`),G.palette.neutral,G.palette.neutralDark,e=>e.isOverWordLimit&&nt,e=>e.isOverWordLimit&&c(tt||(tt=rt`
    border: 2px solid ${0};
  `),G.palette.danger),e=>e.readOnly&&G.palette.neutralCool);st.displayName="OSFreeResponseTextArea";const lt=t=>e(Ie,A({},t,{children:"Cancel"})),ct=r=>{const{availablePoints:n,cancelHandler:o,defaultValue:a,infoRowChildren:i,isSubmitDisabled:s,question:l,questionNumber:c,saveHandler:d,submitBtnLabel:p,textHasChanged:m,wordLimit:h}=r,u=S(a)>h,b={};return c&&(b["data-question-number"]=c),t(ot,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(at,A({},b,{children:l.stem_html&&e(Fe,{type:"stem",html:l.stem_html,hidden:!1})})),e(st,A({},r,{isOverWordLimit:u,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(it,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[S(a)," words"]}),u&&t("span",{className:"word-limit-error-info",children:["Maximum ",h," words"]})]})]})]}),t(Ze,{children:[n?e("div",{className:"points",role:"status",children:t("strong",{children:["Points: ",n]})}):null,t("div",{className:"controls",children:[e(lt,{disabled:!m,onClick:o}),e(Ie,{"data-test-id":"submit-answer-btn",disabled:s||u,onClick:d,children:p})]})]})]})};ct.displayName="OSFreeResponse";const dt=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),pt=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,mt=t=>e(Ie,A({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),ht=t=>e(Ie,A({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),ut=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,bt=o.forwardRef((r,n)=>{const{question:o,task:s,answer_id_order:l,onAnswerChange:c,feedback_html:d,correct_answer_feedback_html:p,is_completed:m,correct_answer_id:h,incorrectAnswerId:u,choicesEnabled:b,questionNumber:f,answer_id:g,hasMultipleAttempts:w,attempts_remaining:x,published_comments:v,detailedSolution:$,canAnswer:k,needsSaved:y,attempt_number:C,apiIsPending:_,onAnswerSave:N,onNextStep:q,canUpdateCurrentStep:S,displaySolution:A,available_points:M,free_response:I,show_all_feedback:T,tableFeedbackEnabled:E,hasFeedback:H}=r,[j,z]=a(!1);return console.log("shouldContinue:",j,"is_completed:",m),console.log(r),i(()=>{j&&m&&(q(f-1),z(!1))},[q,f,j,m]),t("div",{"data-test-id":"student-exercise-question",children:[e(Be,{ref:n,task:s,question:o,answerIdOrder:l,choicesEnabled:b,answer_id:g,questionNumber:f,onChange:c,feedback_html:d,correct_answer_feedback_html:p,correct_answer_id:m?h:null,incorrectAnswerId:u,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:A,show_all_feedback:T,tableFeedbackEnabled:E,children:e(ut,{free_response:I})}),e(Ze,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[M?t("strong",{children:["Points: ",M]}):null,e("span",{className:"attempts-left",children:w&&x>0&&e(dt,{count:x})}),e(pt,{published_comments:v}),$&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(O,{html:$})]})]}),e("div",{className:"controls",children:k&&y||j?e(mt,{disabled:_||!g||j,isWaiting:_||j,attempt_number:C,onClick:()=>{var e;N("string"==typeof(e=o.id)?parseInt(e,10):e),H||z(!0)},willContinue:!H}):e(ht,{onClick:()=>q(f-1),canUpdateCurrentStep:S})})]})})]})}),ft={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},gt=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},wt=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},xt=(e,t,r=5)=>{r>0&&(wt(e).length||gt(e).length)?setTimeout(()=>{xt(e,t,r-1)},200):t()},vt=(e,t)=>new Promise(r=>{(function(e,t){const r=wt(e);t.MathJax.Hub.Queue(((e,t)=>()=>{b(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=gt(e);b(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{xt(e,r)})}),$t=u((e,t)=>m(vt,100,{leading:!0,trailing:!1}).bind(null,e,t));$t.cache=new f;const kt=h((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(ft),e.MathJax.Hub.processSectionDelay=0,r()):(ft.AuthorInit=r,e.MathJax=ft)}));let yt,Ct,_t,Nt,qt,St=e=>e;const At=l.div(yt||(yt=St`
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
`),G.palette.light,"2rem","2rem",G.palette.neutral,G.palette.neutralDarker,G.palette.neutralDarker,e=>!e.desktop&&c(Ct||(Ct=St`
    ${0}
    ${0}
  `),X(_t||(_t=St`
      display: none;
    `)),Y(Nt||(Nt=St`
      display: none;
    `))),e=>e.mobile&&K(qt||(qt=St`
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
  `),G.palette.neutral,G.palette.light)),Mt=({icons:r})=>{var n,o;if(!r)return null;const a=Object.values(r),i=a.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),s=a.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),l=null==(n=r.topic)?void 0:n.url,c=null==(o=r.errata)?void 0:o.url;return t(At,A({},{mobile:i,desktop:s},{children:[l?t("a",{href:l,target:"_blank",children:[e(g,{icon:w}),e("span",{children:"View topic in textbook"})]}):null,c?t("a",{href:c,target:"_blank",children:[e(g,{icon:x}),e("span",{children:"Suggest a correction"})]}):null]}))};let It,Tt,Ot,Et,Ht,jt,zt,Pt,Lt,Jt=e=>e;const Qt=l.div(It||(It=Jt`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),G.palette.mediumBlue,e=>!e.desktop&&c(Tt||(Tt=Jt`
    ${0}
    ${0}
  `),X(Ot||(Ot=Jt`
      display: none;
    `)),Y(Et||(Et=Jt`
      display: none;
    `))),e=>!e.mobile&&K(Ht||(Ht=Jt`
    display: none;
  `))),Vt=l.div(jt||(jt=Jt`
  position: relative;
  display: flex;
`)),Bt=l.div(zt||(zt=Jt`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),ee.popover),Ft=r=>e(Qt,A({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(Vt,{children:[r.children,t(Bt,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),Rt=l.div(Pt||(Pt=Jt`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),Dt=l(g)(Lt||(Lt=Jt`
  color: ${0};
  height: 1em;
`),G.palette.darkGray),Wt=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},o=[],a=t.questions.every(e=>e.answers.length>0);let i;var s,l,c;return a&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":a&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&o.push(e(Ft,A({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(s=r.topic.location)?void 0:s.header)||n,{children:e(Dt,{icon:v})}),"topic")),r.errata&&o.push(e(Ft,A({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(l=r.errata.location)?void 0:l.header)||n,{children:e(Dt,{icon:$})}),"errata")),r.info&&i&&o.push(e(Ft,A({text:i},(null==(c=r.info.location)?void 0:c.header)||n,{children:e(Dt,{icon:k,height:"16px",width:"16px"})}),"type")),e(Rt,{children:o})},Ut=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons"];let Zt,Gt,Kt,Yt,Xt,er,tr,rr,nr,or,ar=e=>e;const ir=l(qe)(Zt||(Zt=ar`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),sr=d(Gt||(Gt=ar`
  :root {
    --content-text-scale: 1;
  }
`)),lr=l.div(Kt||(Kt=ar`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&c(Yt||(Yt=ar`
    ${0}
    ${0}
    ${0}
  `),X(Xt||(Xt=ar`
      ${0} {
        margin-left: 6.8rem;
      }
    `),ir),Y(er||(er=ar`
      ${0} {
        margin-left: 4.8rem;
      }
    `),ir),K(tr||(tr=ar`
      ${0} {
        margin-left: 0;
      }
    `),ir)),e=>e.mobileToolbarEnabled&&c(rr||(rr=ar`
    ${0}
  `),K(nr||(nr=ar`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),At,ye,ke))),cr=r=>t(lr,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(Mt,{icons:r.exerciseIcons}),e(ir,A({},r))]}),dr=({exercise:n})=>t(r,{children:[n.context&&e(O,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(O,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),pr=l(r=>{let{numberOfQuestions:n,questionNumber:a,step:i,exercise:l,show_all_feedback:c,scrollToQuestion:d,exerciseIcons:m}=r,h=M(r,Ut);const u="feedback_html"in i,b=o.useRef([]),f=o.useRef(null),g=o.useCallback(()=>{f.current&&(async(e,t=window)=>{await kt(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?$t(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(f.current)},[]);o.useEffect(()=>{const e=d&&b.current[d];e&&p(e)},[d,l]);const w=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),x=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile});return t(I.Provider,{value:g,children:[e(sr,{}),e(cr,A({step:i,questionNumber:a,numberOfQuestions:u?n:l.questions.length,rightHeaderChildren:m?e(Wt,{exercise:l,icons:m}):null,showTotalQuestions:u,desktopToolbarEnabled:w,mobileToolbarEnabled:x},m?{exerciseIcons:m}:null,{className:h.className,children:t("div",{ref:f,children:[e(dr,{exercise:l}),l.questions.map((e,t)=>{var r;const n=A({},u?i:h.questionStates[e.id]);return s(bt,A({},h,A({},n,{available_points:void 0}),{ref:e=>b.current[a+t]=e,exercise_uid:l.uid,key:e.id,question:e,questionNumber:a+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:c,tableFeedbackEnabled:c&&!u,canUpdateCurrentStep:"canUpdateCurrentStep"in h?h.canUpdateCurrentStep:!(t+1===l.questions.length)}))})]})}))]})})(or||(or=ar`
`)),mr=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let hr,ur,br,fr,gr,wr,xr,vr,$r,kr,yr=e=>e;const Cr=l.nav(hr||(hr=yr`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),K(ur||(ur=yr`
    padding: 1.6rem 0.8rem;
  `))),_r=l.span(br||(br=yr`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),Nr="box-shadow: 0px 1px 4px 0px #00000066;",qr=l.button(vr||(vr=yr`
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
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",G.palette.neutralDarker,e=>e.isActive?c($r||($r=yr`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),Nr):null,e=>(e=>{switch(e){case"isStatus":return c(fr||(fr=yr`
        background-color: ${0};
      `),G.palette.neutralBright);case"isCorrect":return c(gr||(gr=yr`
        color: ${0};
        background-color: #E8F4D8;
      `),G.answer.correct);case"isIncorrect":return c(wr||(wr=yr`
        color: ${0};
        background-color: #F8E8EA;
      `),G.answer.incorrect);default:return c(xr||(xr=yr`
        background-color: ${0};
      `),G.palette.neutralBright)}})(e.variant),Nr),Sr=l(g)(kr||(kr=yr`
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
`),e=>e.color),Ar=({variant:t})=>{if(!t||"isCorrect"!==t&&"isIncorrect"!==t)return null;const r={isCorrect:{icon:y,color:G.answer.correct},isIncorrect:{icon:C,color:G.answer.incorrect}}[t];return e(Sr,{icon:r.icon,color:r.color,height:"16px",width:"16px"})},Mr=({index:r,isActive:n,step:o,goToStep:a})=>t(_r,{children:[e(qr,{variant:o.variant,isActive:n,onClick:()=>a(r,o),"aria-current":n?"location":"false","aria-label":"isStatus"===o.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===o.variant?e(mr,{}):r+1}),e(Ar,{variant:o.variant})]}),Ir=({steps:t,activeIndex:r,goToStep:n})=>e(Cr,{"aria-label":"Breadcrumbs",children:t.map((t,o)=>e(Mr,{index:o,isActive:o===r,step:t,goToStep:n},o))});let Tr;const Or=l.div(Tr||(Tr=(e=>e)`
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
`),G.palette.light),Er=()=>e(Or,{children:e(_,{uniqueKey:"OSLoader"})});export{oe as Answer,ie as AnswersTable,Je as CompletionStatus,pr as Exercise,Mt as ExerciseToolbar,ct as FreeResponseInput,st as FreeResponseTextArea,ke as InnerStepCard,Er as Loader,ye as OuterStepCard,Ir as ProgressBar,Mr as ProgressBarItem,Be as Question,Fe as QuestionHtml,Ne as StepCard,qr as StyledItem,At as StyledToolbar,qe as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
