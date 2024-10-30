import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import o,{createElement as a}from"react";import i,{css as s,createGlobalStyle as l}from"styled-components";import c from"scroll-to-element";import{debounce as d,once as p}from"lodash";import{memoize as m,isEmpty as u}from"lodash/fp.js";import h from"weak-map";import{FontAwesomeIcon as b}from"@fortawesome/react-fontawesome";import{faBookOpen as f,faTriangleExclamation as g}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as w}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as x}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as v}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as $}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as k}from"@fortawesome/free-solid-svg-icons/faXmark";import{BulletList as y}from"react-content-loader";const C="ABCDEFGHIJKLMNOPQRSTUVWXYZ",N=(e,t)=>e.id===t;function _(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q.apply(this,arguments)}function S(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const A=o.createContext(()=>{throw new Error("context not initialized")}),M=["html","component","block"],I=t=>{let{html:r,component:n,block:a=!1}=t,i=S(t,M);const s=o.useContext(A);return o.useEffect(()=>{s()},[s,r]),void 0!==n?o.cloneElement(n,q({html:r},i)):e(a?"div":"span",q({dangerouslySetInnerHTML:{__html:r}},i))},T=t=>e("aside",{children:e(I,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),E=r=>{const o=n("question-feedback",r.position||"bottom");return t("aside",{className:o,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(T,q({},r,{children:r.children}))]})};let O,H,j,z,P,L,J,Q,V,B,F,R,D=e=>e;const W={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},U={palette:W,answer:{neutral:W.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:W.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:W.neutralDarker,background:W.neutralLighter}},Z=(...e)=>s(O||(O=D`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),G=(...e)=>s(H||(H=D`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),K=(...e)=>s(j||(j=D`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),Y={answer:()=>s(P||(P=D`
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
  `),W.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",U.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",U.palette.white),answerColor:(e,t=!1)=>s(L||(L=D`
    .answer-letter {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>Y.answerColor(U.answer.checked,!0),answerCorrect:e=>Y.answerColor(U.answer.correct,e),answerIncorrect:e=>Y.answerColor(U.answer.incorrect,e),answerHover:()=>s(J||(J=D`
    ${0};
    font-weight: bold;
  `),Y.answerColor(U.answer.hover)),answerCorrectAnswer:()=>Y.answerColor(U.answer.correct,!1),resetText:()=>s(Q||(Q=D`
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
  `)),stepCardPadding:()=>s(V||(V=D`
    padding: 48px 140px;

    ${0}

    ${0}
  `),G(B||(B=D`
      padding: ${0} ${0};
    `),"24px","24px"),Z(F||(F=D`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(R||(R=D`
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
  `),Y.resetText(),"1px",U.popover.borderColor,U.palette.white,"325px","8px","1rem",U.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",U.popover.borderColor,"1px",U.palette.white,"9px","1px","9px","1rem","0.8rem")};let X;const ee=i.div(X||(X=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`),e=>e.state?U.answer.correct:U.answer.incorrect),te=({isCorrect:e,isIncorrect:r})=>{if(!e&&!r)return null;const n=e||!1===r;return t(ee,{state:n,children:[n?"Correct":"Incorrect"," Answer"]})},re=o=>{const{type:a,iter:i,answer:s,disabled:l,onKeyPress:c,qid:d,answerId:p,correctAnswerId:m,incorrectAnswerId:u,hasCorrectAnswer:h,answered_count:b,contentRenderer:f,show_all_feedback:g,tableFeedbackEnabled:w}=o;let x,v,$;const k=((e,t)=>e.id==t)(s,p),y=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(s,m),_=N(s,u),q=n("answers-answer",{disabled:l,"answer-selected":k||void 0===p&&(!u&&y||_),"answer-correct":y&&"student-mpp"!==a,"answer-incorrect":u&&N(s,u)}),S=e("div",{className:"correct-incorrect",children:y&&o.correctIncorrectIcon});let A,M,E=`${k?"Selected ":""}Choice ${C[i]}`;h&&(E+=`(${y?"Correct":"Incorrect"} Answer)`),E+=":";const O=()=>A&&A(s);if(h||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:A}=o),A&&(M=e("input",{type:"radio",className:"answer-input-box",checked:k,id:`${d}-option-${i}`,name:`${d}-options`,onChange:O,disabled:l})),g&&s.feedback_html&&!w&&(v=e(T,{contentRenderer:f,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===a){let r=0;s.selected_count&&b&&(r=Math.round(s.selected_count/b*100)),$=e("span",{className:"selected-count","data-percent":`${r}`,children:s.selected_count}),x=t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:y,red:!y}),children:[$,e("span",{className:n("letter",{green:y,red:!y}),children:C[i]})]}),t("div",{className:"answer-answer",children:[e(I,{className:"answer-content",component:f,html:s.content_html}),v]})]})}else x=t(r,{children:["teacher-preview"===a&&S,$,M,t("label",{onKeyPress:c,htmlFor:`${d}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:O,"aria-label":E,className:"answer-letter",disabled:l||_,"data-test-id":`answer-choice-${C[i]}`,children:C[i]})}),t("div",{className:"answer-answer",children:[e(te,{isCorrect:y,isIncorrect:_}),e(I,{className:"answer-content",component:f,html:s.content_html}),v]})]})]});return e("div",{className:"openstax-answer",children:e("section",{className:q,children:x})})};re.displayName="OSAnswer";const ne="student",oe=r=>{let n=0;const{question:o,hideAnswers:a,type:i=ne,answered_count:s,choicesEnabled:l,correct_answer_id:c,incorrectAnswerId:d,answer_id:p,feedback_html:m,correct_answer_feedback_html:u,show_all_feedback:h=!1,tableFeedbackEnabled:b,hasCorrectAnswer:f,onChangeAnswer:g,onKeyPress:w,answerIdOrder:x,instructions:v}=r;if(a)return null;const{id:$}=o,k=[],y={qid:$||"auto-"+n++,answerId:p,correctAnswerId:c,incorrectAnswerId:d,hasCorrectAnswer:f,onChangeAnswer:g,type:i,answered_count:s,disabled:!l,show_all_feedback:h,tableFeedbackEnabled:b,onKeyPress:w},C=(x?(e=>{const{answers:t}=o;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(x):o.answers).map((t,r)=>{const n={answer:q({},t,{question_id:"string"==typeof o.id?parseInt(o.id,10):o.id}),iter:r,key:`${y.qid}-option-${r}`},a=Object.assign({},n,y);return h&&t.feedback_html&&b?k.push({index:r,html:t.feedback_html}):t.id===d&&m?k.push({index:r,html:m}):t.id===c&&u&&k.push({index:r,html:u}),e(re,q({},a))});return k.forEach((t,n)=>{const o=t.index+n+1;C.splice(o,0,e(E,{contentRenderer:r.contentRenderer,children:t.html},o))}),t("div",{className:"answers-table",children:[v,C]})},ae=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],ie=["step","questionNumber","numberOfQuestions","children","className"];let se,le,ce,de,pe,me,ue,he,be,fe,ge,we,xe=e=>e;const ve=i.div(se||(se=xe`
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
`),U.palette.light,K(le||(le=xe`
    max-width: 1000px;
  `))),$e=i.div(ce||(ce=xe`
  padding: ${0};

  ${0}
`),"2rem",Z(de||(de=xe`
    padding: 0;
  `))),ke=i.div(pe||(pe=xe`
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
`),U.card.header.background,U.palette.gray,K(me||(me=xe`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),G(ue||(ue=xe`
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
  `),"24px","24px"),Z(he||(he=xe`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));ke.displayName="StepCardHeader";const ye=i.div(be||(be=xe`
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
`),Y.stepCardPadding(),U.card.body.background,((...e)=>s(z||(z=D`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(fe||(fe=xe`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),K(ge||(ge=xe`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),Z(we||(we=xe`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),Ce=r=>{let{questionNumber:n,numberOfQuestions:o,showTotalQuestions:a,stepType:i,isHomework:s,availablePoints:l,unpadded:c,className:d,children:p,questionId:m,multipartBadge:u,leftHeaderChildren:h,rightHeaderChildren:b,headerTitleChildren:f}=r,g=S(r,ae);return t($e,q({},g,{children:[u,t(ve,{className:d,children:[n&&s&&"exercise"===i&&t(ke,{children:[t("div",{children:[h,t("div",{className:"question-info",children:[f,e("span",{children:o>1?`Questions ${n} - ${n+o-1}`:`Question ${n}`}),a?t("span",{className:"num-questions",children:[" / ",o]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",m]})]})]}),l||b?t("div",{children:[l&&t("div",{className:"points",children:[l," Points"]}),b]}):null]}),e(ye,{unpadded:c,children:p})]})]}))};Ce.displayName="OSStepCard";const Ne=t=>{let{step:r,questionNumber:o,numberOfQuestions:a,children:i,className:s}=t,l=S(t,ie);return e(Ce,q({},l,{unpadded:!0,questionNumber:o,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:i}))};Ne.displayName="OSTaskStepCard";const _e=["disabled","isWaiting","waitingText","children"];let qe;const Se=i.button(qe||(qe=(e=>e)`
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
`),U.button.background,U.palette.white,U.button.backgroundHover,U.button.backgroundActive),Ae=t=>{const{disabled:r,isWaiting:n,waitingText:o,children:a}=t,i=S(t,_e);return e(Se,q({},i,{disabled:n||r,children:n&&o||a}))};let Me,Ie,Te,Ee,Oe=e=>e;const He=l(Me||(Me=Oe`
  :root {
    --content-text-scale: 1;
  }
`)),je=i(ve)(Ie||(Ie=Oe`
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
`)),ze=i.h2(Te||(Te=Oe`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`)),Pe=i(({numberOfQuestions:n,numberCompleted:o,handleClick:a,className:i})=>{const s=n===o,l=o>0,c=s?"Next":l?"Continue":"Start";return t(r,{children:[e(He,{}),t(je,{className:i,children:[e(ze,{children:s?"You are done.":l?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:s?"Great job answering all the questions.":l?`You've completed ${o} of ${n} questions.`:"Begin working on the quiz."}),e(Ae,{"data-test-id":`${c.split(" ")[0].toLowerCase()}-btn`,onClick:()=>a(),children:c})]})]})})(Ee||(Ee=Oe``));let Le;const Je=i.div(Le||(Le=(e=>e)`
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
`),Y.stepCardPadding(),U.palette.pale,U.palette.neutral,U.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",U.palette.neutralLighter,U.palette.neutralLightest,Y.answer(),"1rem","1rem","0.1s ease-in-out",Y.answerHover(),Y.answerChecked(),Y.answerChecked(),Y.answerIncorrect(),Y.answerCorrect(!0),Y.answerCorrectAnswer(),Y.answerIncorrect(),Y.answerIncorrect(!0),Y.popover(),"370px","0.9rem","1.1rem"),Qe=o.forwardRef((r,o)=>{let a,i;const{question:s,correct_answer_id:l,incorrectAnswerId:c,exercise_uid:d,className:p,questionNumber:m,context:u,task:h,hidePreambles:b}=r,{stem_html:f,collaborator_solutions:g=[],formats:w,stimulus_html:x}=s,v=!!l,$=n("openstax-question",p,{"has-correct-answer":v&&!((null!=h?h.is_deleted:void 0)&&"homework"===(null!=h?h.type:void 0)),"has-incorrect-answer":!!c});return null!=d&&(a=e("div",{className:"exercise-uid",children:d})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(I,{className:"solution",block:!0,html:g.map(e=>e.content_html).join("")})]})),t(Je,{ref:o,className:$,"data-question-number":m,"data-test-id":"question",children:[e(Ve,{type:"context",html:u,hidden:b}),e(Ve,{type:"stimulus",html:x,hidden:b}),e(Ve,{type:"stem",html:f,hidden:b,questionNumber:m}),r.children,e(oe,q({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),i,r.displayFormats?e(Be,{formats:w}):void 0,a]})}),Ve=t=>{const{html:r="",type:n,hidden:o,questionNumber:a}=t;return!0!==o&&r.length>0?e(I,{html:r,"data-question-number":a,className:`question-${n}`,block:!0}):null},Be=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let Fe,Re,De=e=>e;const We=i.div(Fe||(Fe=De`
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
`),Y.stepCardPadding(),U.card.body.background,U.palette.pale,K(Re||(Re=De`
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
    `)));let Ue,Ze,Ge,Ke,Ye,Xe,et=e=>e;const tt=s(Ue||(Ue=et`
  background-color: #f5e9ea;
`)),rt=i.div(Ze||(Ze=et`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),Y.stepCardPadding()),nt=i.div(Ge||(Ge=et`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),ot=i.div(Ke||(Ke=et`
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
`),e=>e.hasChildren?"space-between":"flex-end",U.palette.danger,U.palette.neutralThin),at=i.textarea(Ye||(Ye=et`
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
`),U.palette.neutral,U.palette.neutralDark,e=>e.isOverWordLimit&&tt,e=>e.isOverWordLimit&&s(Xe||(Xe=et`
    border: 2px solid ${0};
  `),U.palette.danger),e=>e.readOnly&&U.palette.neutralCool);at.displayName="OSFreeResponseTextArea";const it=t=>e(Ae,q({},t,{children:"Cancel"})),st=r=>{const{availablePoints:n,cancelHandler:o,defaultValue:a,infoRowChildren:i,isSubmitDisabled:s,question:l,questionNumber:c,saveHandler:d,submitBtnLabel:p,textHasChanged:m,wordLimit:u}=r,h=_(a)>u,b={};return c&&(b["data-question-number"]=c),t(rt,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(nt,q({},b,{children:l.stem_html&&e(Ve,{type:"stem",html:l.stem_html,hidden:!1})})),e(at,q({},r,{isOverWordLimit:h,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(ot,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[_(a)," words"]}),h&&t("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),t(We,{children:[n?e("div",{className:"points",role:"status",children:t("strong",{children:["Points: ",n]})}):null,t("div",{className:"controls",children:[e(it,{disabled:!m,onClick:o}),e(Ae,{"data-test-id":"submit-answer-btn",disabled:s||h,onClick:d,children:p})]})]})]})};st.displayName="OSFreeResponse";const lt=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),ct=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,dt=t=>e(Ae,q({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),pt=t=>e(Ae,q({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),mt=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,ut=o.forwardRef((r,n)=>{const{question:a,task:i,answer_id_order:s,onAnswerChange:l,feedback_html:c,correct_answer_feedback_html:d,is_completed:p,correct_answer_id:m,incorrectAnswerId:u,choicesEnabled:h,questionNumber:b,answer_id:f,hasMultipleAttempts:g,attempts_remaining:w,published_comments:x,detailedSolution:v,canAnswer:$,needsSaved:k,attempt_number:y,apiIsPending:C,onAnswerSave:N,onNextStep:_,canUpdateCurrentStep:q,displaySolution:S,available_points:A,free_response:M,show_all_feedback:T,tableFeedbackEnabled:E,hasFeedback:O}=r,[H,j]=o.useState(!1);return o.useEffect(()=>{H&&p&&(_(b-1),j(!1))},[_,b,H,p]),t("div",{"data-test-id":"student-exercise-question",children:[e(Qe,{ref:n,task:i,question:a,answerIdOrder:s,choicesEnabled:h,answer_id:f,questionNumber:b,onChange:l,feedback_html:c,correct_answer_feedback_html:d,correct_answer_id:p?m:null,incorrectAnswerId:u,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:S,show_all_feedback:T,tableFeedbackEnabled:E,children:e(mt,{free_response:M})}),e(We,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[A?t("strong",{children:["Points: ",A]}):null,e("span",{className:"attempts-left",children:g&&w>0&&e(lt,{count:w})}),e(ct,{published_comments:x}),v&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(I,{html:v})]})]}),e("div",{className:"controls",children:$&&k||H?e(dt,{disabled:C||!f||H,isWaiting:C||H,attempt_number:y,onClick:()=>{var e;N("string"==typeof(e=a.id)?parseInt(e,10):e),O||j(!0)},willContinue:!O}):e(pt,{onClick:()=>_(b-1),canUpdateCurrentStep:q})})]})})]})}),ht={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},bt=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},ft=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},gt=(e,t,r=5)=>{r>0&&(ft(e).length||bt(e).length)?setTimeout(()=>{gt(e,t,r-1)},200):t()},wt=(e,t)=>new Promise(r=>{(function(e,t){const r=ft(e);t.MathJax.Hub.Queue(((e,t)=>()=>{u(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=bt(e);u(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{gt(e,r)})}),xt=m((e,t)=>d(wt,100,{leading:!0,trailing:!1}).bind(null,e,t));xt.cache=new h;const vt=p((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(ht),e.MathJax.Hub.processSectionDelay=0,r()):(ht.AuthorInit=r,e.MathJax=ht)}));let $t,kt,yt,Ct,Nt,_t=e=>e;const qt=i.div($t||($t=_t`
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
`),U.palette.light,"2rem","2rem",U.palette.neutral,U.palette.neutralDarker,U.palette.neutralDarker,e=>!e.desktop&&s(kt||(kt=_t`
    ${0}
    ${0}
  `),K(yt||(yt=_t`
      display: none;
    `)),G(Ct||(Ct=_t`
      display: none;
    `))),e=>e.mobile&&Z(Nt||(Nt=_t`
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
  `),U.palette.neutral,U.palette.light)),St=({icons:r})=>{var n,o;if(!r)return null;const a=Object.values(r),i=a.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),s=a.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),l=null==(n=r.topic)?void 0:n.url,c=null==(o=r.errata)?void 0:o.url;return t(qt,q({},{mobile:i,desktop:s},{children:[l?t("a",{href:l,target:"_blank",children:[e(b,{icon:f}),e("span",{children:"View topic in textbook"})]}):null,c?t("a",{href:c,target:"_blank",children:[e(b,{icon:g}),e("span",{children:"Suggest a correction"})]}):null]}))};let At,Mt,It,Tt,Et,Ot,Ht,jt,zt,Pt=e=>e;const Lt=i.div(At||(At=Pt`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),U.palette.mediumBlue,e=>!e.desktop&&s(Mt||(Mt=Pt`
    ${0}
    ${0}
  `),K(It||(It=Pt`
      display: none;
    `)),G(Tt||(Tt=Pt`
      display: none;
    `))),e=>!e.mobile&&Z(Et||(Et=Pt`
    display: none;
  `))),Jt=i.div(Ot||(Ot=Pt`
  position: relative;
  display: flex;
`)),Qt=i.div(Ht||(Ht=Pt`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),Y.popover),Vt=r=>e(Lt,q({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(Jt,{children:[r.children,t(Qt,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),Bt=i.div(jt||(jt=Pt`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),Ft=i(b)(zt||(zt=Pt`
  color: ${0};
  height: 1em;
`),U.palette.darkGray),Rt=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},o=[],a=t.questions.every(e=>e.answers.length>0);let i;var s,l,c;return a&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":a&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&o.push(e(Vt,q({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(s=r.topic.location)?void 0:s.header)||n,{children:e(Ft,{icon:w})}),"topic")),r.errata&&o.push(e(Vt,q({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(l=r.errata.location)?void 0:l.header)||n,{children:e(Ft,{icon:x})}),"errata")),r.info&&i&&o.push(e(Vt,q({text:i},(null==(c=r.info.location)?void 0:c.header)||n,{children:e(Ft,{icon:v,height:"16px",width:"16px"})}),"type")),e(Bt,{children:o})},Dt=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons"];let Wt,Ut,Zt,Gt,Kt,Yt,Xt,er,tr,rr,nr=e=>e;const or=i(Ne)(Wt||(Wt=nr`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),ar=l(Ut||(Ut=nr`
  :root {
    --content-text-scale: 1;
  }
`)),ir=i.div(Zt||(Zt=nr`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&s(Gt||(Gt=nr`
    ${0}
    ${0}
    ${0}
  `),K(Kt||(Kt=nr`
      ${0} {
        margin-left: 6.8rem;
      }
    `),or),G(Yt||(Yt=nr`
      ${0} {
        margin-left: 4.8rem;
      }
    `),or),Z(Xt||(Xt=nr`
      ${0} {
        margin-left: 0;
      }
    `),or)),e=>e.mobileToolbarEnabled&&s(er||(er=nr`
    ${0}
  `),Z(tr||(tr=nr`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),qt,$e,ve))),sr=r=>t(ir,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(St,{icons:r.exerciseIcons}),e(or,q({},r))]}),lr=({exercise:n})=>t(r,{children:[n.context&&e(I,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(I,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),cr=i(r=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:l,show_all_feedback:d,scrollToQuestion:p,exerciseIcons:m}=r,u=S(r,Dt);const h="feedback_html"in s,b=o.useRef([]),f=o.useRef(null),g=o.useCallback(()=>{f.current&&(async(e,t=window)=>{await vt(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?xt(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(f.current)},[]);o.useEffect(()=>{const e=p&&b.current[p];e&&c(e)},[p,l]);const w=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),x=Object.values(m||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile});return t(A.Provider,{value:g,children:[e(ar,{}),e(sr,q({step:s,questionNumber:i,numberOfQuestions:h?n:l.questions.length,rightHeaderChildren:m?e(Rt,{exercise:l,icons:m}):null,showTotalQuestions:h,desktopToolbarEnabled:w,mobileToolbarEnabled:x},m?{exerciseIcons:m}:null,{className:u.className,children:t("div",{ref:f,children:[e(lr,{exercise:l}),l.questions.map((e,t)=>{var r;const n=q({},h?s:u.questionStates[e.id]);return a(ut,q({},u,q({},n,{available_points:void 0}),{ref:e=>b.current[i+t]=e,exercise_uid:l.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:d,tableFeedbackEnabled:d&&!h,canUpdateCurrentStep:"canUpdateCurrentStep"in u?u.canUpdateCurrentStep:!(t+1===l.questions.length)}))})]})}))]})})(rr||(rr=nr`
`)),dr=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let pr,mr,ur,hr,br,fr,gr,wr,xr,vr,$r=e=>e;const kr=i.nav(pr||(pr=$r`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),Z(mr||(mr=$r`
    padding: 1.6rem 0.8rem;
  `))),yr=i.span(ur||(ur=$r`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),Cr="box-shadow: 0px 1px 4px 0px #00000066;",Nr=i.button(wr||(wr=$r`
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
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",U.palette.neutralDarker,e=>e.isActive?s(xr||(xr=$r`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),Cr):null,e=>(e=>{switch(e){case"isStatus":return s(hr||(hr=$r`
        background-color: ${0};
      `),U.palette.neutralBright);case"isCorrect":return s(br||(br=$r`
        color: ${0};
        background-color: #E8F4D8;
      `),U.answer.correct);case"isIncorrect":return s(fr||(fr=$r`
        color: ${0};
        background-color: #F8E8EA;
      `),U.answer.incorrect);default:return s(gr||(gr=$r`
        background-color: ${0};
      `),U.palette.neutralBright)}})(e.variant),Cr),_r=i(b)(vr||(vr=$r`
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
`),e=>e.color),qr=({variant:t})=>{if(!t||"isCorrect"!==t&&"isIncorrect"!==t)return null;const r={isCorrect:{icon:$,color:U.answer.correct},isIncorrect:{icon:k,color:U.answer.incorrect}}[t];return e(_r,{icon:r.icon,color:r.color,height:"16px",width:"16px"})},Sr=({index:r,isActive:n,step:o,goToStep:a})=>t(yr,{children:[e(Nr,{variant:o.variant,isActive:n,onClick:()=>a(r,o),"aria-current":n?"location":"false","aria-label":"isStatus"===o.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===o.variant?e(dr,{}):r+1}),e(qr,{variant:o.variant})]}),Ar=({steps:t,activeIndex:r,goToStep:n})=>e(kr,{"aria-label":"Breadcrumbs",children:t.map((t,o)=>e(Sr,{index:o,isActive:o===r,step:t,goToStep:n},o))});let Mr;const Ir=i.div(Mr||(Mr=(e=>e)`
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
`),U.palette.light),Tr=()=>e(Ir,{children:e(y,{uniqueKey:"OSLoader"})});export{re as Answer,oe as AnswersTable,Pe as CompletionStatus,cr as Exercise,St as ExerciseToolbar,st as FreeResponseInput,at as FreeResponseTextArea,ve as InnerStepCard,Tr as Loader,$e as OuterStepCard,Ar as ProgressBar,Sr as ProgressBarItem,Qe as Question,Ve as QuestionHtml,Ce as StepCard,Nr as StyledItem,qt as StyledToolbar,Ne as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
