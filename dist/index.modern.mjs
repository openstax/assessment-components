import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import a,{createElement as o}from"react";import i,{css as s}from"styled-components";import l from"scroll-to-element";import{faBookOpen as d}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as c}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as p}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{FontAwesomeIcon as h}from"@fortawesome/react-fontawesome";import{debounce as m,once as u}from"lodash";import{memoize as b,isEmpty as g}from"lodash/fp.js";import w from"weak-map";import{BulletList as f}from"react-content-loader";const x="abcdefghijklmnopqrstuvwxyz",$=function(e,t){return e.id===t};function y(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const C=["html","component","block"],_=t=>{let{html:r,component:n,block:o=!1}=t,i=k(t,C);return void 0!==n?a.cloneElement(n,v({html:r},i)):e(o?"div":"span",v({dangerouslySetInnerHTML:{__html:r}},i))},N=t=>e("aside",{children:e(_,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),q=r=>{const a=n("question-feedback",r.position||"bottom");return t("aside",{className:a,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(N,v({},r,{children:r.children}))]})},S=a=>{const{type:o,iter:i,answer:s,disabled:l,onKeyPress:d,qid:c,chosenAnswer:p,correctAnswerId:h,incorrectAnswerId:m,hasCorrectAnswer:u,answered_count:b,contentRenderer:g,show_all_feedback:w,tableFeedbackEnabled:f}=a;let y,v,k;const C=((e,t)=>Boolean((t||[]).find(t=>t==e.id)))(s,p),q=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(s,h),S=$(s,m),A=e("div",{className:"correct-incorrect",children:q&&a.correctIncorrectIcon}),M=n("answers-answer",{disabled:l,"answer-checked":C,"answer-correct":q&&"student-mpp"!==o,"answer-incorrect":m&&$(s,m)});let H,I,O=`${C?"Selected ":""}Choice ${x[i]}`;u&&(O+=`(${q?"Correct":"Incorrect"} Answer)`),O+=":";const T=()=>H&&H(s);if(u||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:H}=a),H&&(I=e("input",{type:"radio",className:"answer-input-box",checked:C,id:`${c}-option-${i}`,name:`${c}-options`,onChange:T,disabled:l})),w&&s.feedback_html&&!f&&(v=e(N,{contentRenderer:g,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===o){let r=0;s.selected_count&&b&&(r=Math.round(s.selected_count/b*100)),k=e("span",{className:"selected-count","data-percent":`${r}`,children:s.selected_count}),y=t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:q,red:!q}),children:[k,e("span",{className:n("letter",{green:q,red:!q}),children:x[i]})]}),t("div",{className:"answer-answer",children:[e(_,{className:"answer-content",component:g,html:s.content_html}),v]})]})}else y=t(r,{children:["teacher-preview"===o&&A,k,I,t("label",{onKeyPress:d,htmlFor:`${c}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:T,"aria-label":O,className:"answer-letter",disabled:l||S,"data-test-id":`answer-choice-${x[i]}`,children:x[i]})}),t("div",{className:"answer-answer",children:[e(_,{className:"answer-content",component:g,html:s.content_html}),v]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:M,children:y})})};S.displayName="OSAnswer";const A="student",M=r=>{let n=0;const{question:a,hideAnswers:o,type:i=A,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:h,correct_answer_feedback_html:m,show_all_feedback:u=!1,tableFeedbackEnabled:b,hasCorrectAnswer:g,onChangeAnswer:w,onKeyPress:f,answerIdOrder:x,instructions:$}=r;if(o)return null;const{id:y}=a,k=[],C={qid:y||"auto-"+n++,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:g,chosenAnswer:[p],onChangeAnswer:w,type:i,answered_count:s,disabled:!l,show_all_feedback:u,tableFeedbackEnabled:b,onKeyPress:f},_=(x?(e=>{const{answers:t}=a;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(x):a.answers).map((t,r)=>{const n={answer:v({},t,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:r,key:`${C.qid}-option-${r}`},o=Object.assign({},n,C);return u&&t.feedback_html&&b?k.push({index:r,html:t.feedback_html}):t.id===c&&h?k.push({index:r,html:h}):t.id===d&&m&&k.push({index:r,html:m}),e(S,v({},o))});return k.forEach((t,n)=>{const a=t.index+n+1;_.splice(a,0,e(q,{contentRenderer:r.contentRenderer,children:t.html},a))}),t("div",{className:"answers-table",children:[$,_]})};let H,I,O,T,j,E,P,L,z,J,R,B,Q,V,F=e=>e;const U={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},D={palette:U,answer:{color:U.lightBlue,correct:{color:U.green,background:"#77af42"},incorrect:{color:U.red,background:U.red},checked:U.lightBlue,hover:U.neutralDark,label:{color:U.neutral,colorHover:U.neutralDark,colorSelected:U.lightBlue}},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:U.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:U.neutralDark,background:U.neutralLighter}},W=(...e)=>s(H||(H=F`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),G=(...e)=>s(I||(I=F`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),Z=(...e)=>s(O||(O=F`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),K={answer:()=>s(j||(j=F`
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
  `),D.answer.label.color,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",D.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",D.palette.white),answerColor:e=>s(E||(E=F`
    color: ${0};
    .answer-letter {
       border-color: ${0};
       background-color: ${0};
       color: ${0};
    }
  `),e.color,e.color,e.background,D.palette.white),answerChecked:()=>K.answerColor({color:D.answer.checked,background:D.answer.checked}),answerCorrect:()=>K.answerColor(D.answer.correct),answerIncorrect:()=>K.answerColor(D.answer.incorrect),answerHover:()=>s(P||(P=F`
    color: ${0};
    .answer-letter {
      border-color: ${0};
    }
  `),D.answer.label.colorHover,D.answer.label.colorSelected),answerCorrectText:()=>s(L||(L=F`
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
  `),D.answer.label.color,"3.6rem","3.6rem"),answerCorrectAnswer:()=>s(z||(z=F`
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
  `),D.answer.correct.color,D.answer.correct.color,D.answer.correct.color,K.answerCorrectText(),999,999,K.answerCorrectText(),"3.6rem"),resetText:()=>s(J||(J=F`
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
  `)),stepCardPadding:()=>s(R||(R=F`
    padding: 48px 140px;

    ${0}

    ${0}
  `),G(B||(B=F`
      padding: ${0} ${0};
    `),"24px","24px"),W(Q||(Q=F`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(V||(V=F`
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
  `),K.resetText(),"1px",D.popover.borderColor,D.palette.white,"325px","8px","1rem",D.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",D.popover.borderColor,"1px",D.palette.white,"9px","1px","9px","1rem","0.8rem")},Y=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],X=["step","questionNumber","numberOfQuestions","children","className"];let ee,te,re,ne,ae,oe,ie,se,le,de,ce,pe,he=e=>e;const me=i.div(ee||(ee=he`
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
`),D.palette.light,Z(te||(te=he`
    max-width: 1000px;
  `))),ue=i.div(re||(re=he`
  padding: 2rem;

  ${0}
`),W(ne||(ne=he`
    padding: 0;
  `))),be=i.div(ae||(ae=he`
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
`),D.card.header.background,D.palette.gray,Z(oe||(oe=he`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),G(ie||(ie=he`
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
  `),"24px","24px"),W(se||(se=he`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));be.displayName="StepCardHeader";const ge=i.div(le||(le=he`
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
`),K.stepCardPadding(),D.card.body.background,((...e)=>s(T||(T=F`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(de||(de=he`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),Z(ce||(ce=he`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),W(pe||(pe=he`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),we=r=>{let{questionNumber:n,numberOfQuestions:a,showTotalQuestions:o,stepType:i,isHomework:s,availablePoints:l,unpadded:d,className:c,children:p,questionId:h,multipartBadge:m,leftHeaderChildren:u,rightHeaderChildren:b,headerTitleChildren:g}=r,w=k(r,Y);return t(ue,v({},w,{children:[m,t(me,{className:c,children:[n&&s&&"exercise"===i&&t(be,{children:[t("div",{children:[u,t("div",{className:"question-info",children:[g,e("span",{children:a>1?`Questions ${n} - ${n+a-1}`:`Question ${n}`}),o?t("span",{className:"num-questions",children:[" / ",a]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",h]})]})]}),t("div",{children:[l&&t("div",{className:"points",children:[l," Points"]}),b]})]}),e(ge,{unpadded:d,children:p})]})]}))};we.displayName="OSStepCard";const fe=t=>{let{step:r,questionNumber:a,numberOfQuestions:o,children:i,className:s}=t,l=k(t,X);return e(we,v({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:i}))};fe.displayName="OSTaskStepCard";const xe=["disabled","isWaiting","waitingText","children"];let $e;const ye=i.button($e||($e=(e=>e)`
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
`),D.button.background,D.palette.white,D.button.backgroundHover,D.button.backgroundActive),ve=t=>{const{disabled:r,isWaiting:n,waitingText:a,children:o}=t,i=k(t,xe);return e(ye,v({},i,{disabled:n||r,children:n&&a||o}))};let ke,Ce,_e=e=>e;const Ne=i(me)(ke||(ke=_e`
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
`)),qe=i.h2(Ce||(Ce=_e`
  font-size: 2.4rem;
  margin: 0;
`)),Se=({numberOfQuestions:r,numberCompleted:n,handleClick:a})=>{const o=r===n,i=n>0,s=o?"Next":i?"Continue":"Start";return t(Ne,{children:[e(qe,{children:o?"You are done.":i?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:o?"Great job answering all the questions.":i?`You've completed ${n} of ${r} questions.`:"Begin working on the quiz."}),e(ve,{"data-test-id":`${s.split(" ")[0].toLowerCase()}-btn`,onClick:()=>a(),children:s})]})},Ae=a.createContext({}),Me=()=>a.useContext(Ae);let He;const Ie=i.div(He||(He=(e=>e)`
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
`),K.stepCardPadding(),D.palette.pale,D.palette.neutral,D.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",D.palette.neutralLighter,D.palette.neutralLightest,K.answer(),"1rem","3.6rem","1rem","0.1s ease-in-out",K.answerHover(),K.answerChecked(),K.answerChecked(),K.answerIncorrect(),K.answerCorrect(),K.answerCorrectAnswer(),K.answerIncorrect(),K.popover(),"370px","0.9rem","1.1rem"),Oe=a.forwardRef((r,o)=>{let i,s;const{question:l,correct_answer_id:d,incorrectAnswerId:c,exercise_uid:p,className:h,questionNumber:m,context:u,task:b,hidePreambles:g}=r,{stem_html:w,collaborator_solutions:f=[],formats:x,stimulus_html:$}=l,y=!!d,k=n("openstax-question",h,{"has-correct-answer":y&&!((null!=b?b.is_deleted:void 0)&&"homework"===(null!=b?b.type:void 0)),"has-incorrect-answer":!!c});null!=p&&(i=e("div",{className:"exercise-uid",children:p})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=l;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(s=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(_,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]}));const{typesetMath:C}=Me();return a.useEffect(()=>{C&&C()},[l,r.correct_answer_feedback_html,r.feedback_html]),t(Ie,{ref:o,className:k,"data-question-number":m,"data-test-id":"question",children:[e(Te,{type:"context",html:u,hidden:g}),e(Te,{type:"stimulus",html:$,hidden:g}),e(Te,{type:"stem",html:w,hidden:g,questionNumber:m}),r.children,e(M,v({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:y})),s,r.displayFormats?e(je,{formats:x}):void 0,i]})}),Te=t=>{const{html:r="",type:n,hidden:a,questionNumber:o}=t;return!0!==a&&r.length>0?e(_,{html:r,"data-question-number":o,className:`question-${n}`,block:!0}):null},je=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let Ee,Pe,Le=e=>e;const ze=i.div(Ee||(Ee=Le`
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
`),K.stepCardPadding(),D.card.body.background,D.palette.pale,Z(Pe||(Pe=Le`
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
    `)));let Je,Re,Be,Qe,Ve,Fe,Ue=e=>e;const De=s(Je||(Je=Ue`
  background-color: #f5e9ea;
`)),We=i.div(Re||(Re=Ue`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),K.stepCardPadding()),Ge=i.div(Be||(Be=Ue`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),Ze=i.div(Qe||(Qe=Ue`
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
`),e=>e.hasChildren?"space-between":"flex-end",D.palette.danger,D.palette.neutralThin),Ke=i.textarea(Ve||(Ve=Ue`
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
`),D.palette.neutral,D.palette.neutralDark,e=>e.isOverWordLimit&&De,e=>e.isOverWordLimit&&s(Fe||(Fe=Ue`
    border: 2px solid ${0};
  `),D.palette.danger),e=>e.readOnly&&D.palette.neutralCool);Ke.displayName="OSFreeResponseTextArea";const Ye=t=>e(ve,v({},t,{children:"Cancel"})),Xe=r=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,pointsChildren:l,question:d,questionNumber:c,saveHandler:p,submitBtnLabel:h,textHasChanged:m,wordLimit:u}=r,b=y(o)>u,g={};return c&&(g["data-question-number"]=c),t(We,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(Ge,v({},g,{children:d.stem_html&&e(Te,{type:"stem",html:d.stem_html,hidden:!1})})),e(Ke,v({},r,{isOverWordLimit:b,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(Ze,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[y(o)," words"]}),b&&t("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),t(ze,{children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",n]}),l]}),t("div",{className:"controls",children:[e(Ye,{disabled:!m,onClick:a}),e(ve,{"data-test-id":"submit-answer-btn",disabled:s||b,onClick:p,children:h})]})]})]})};Xe.displayName="OSFreeResponse";let et,tt,rt,nt,at,ot=e=>e;const it=i.div(et||(et=ot`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
`),D.palette.mediumBlue),st=i.div(tt||(tt=ot`
  position: relative;
  display: flex;
`)),lt=i.div(rt||(rt=ot`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),K.popover),dt=r=>e(it,v({},r.wrapperProps,{children:t(st,{children:[r.children,t(lt,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),ct=i.div(nt||(nt=ot`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),pt=i(h)(at||(at=ot`
  color: ${0};
  height: 1em;
`),D.palette.darkGray),ht=({exercise:t,topicUrl:r,errataUrl:n})=>{const a=[],o=t.questions.every(e=>e.answers.length>0);let i;return o&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":o&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r&&a.push(e(dt,{text:"View topic in textbook",wrapperProps:{as:"a",href:r,target:"_blank"},children:e(pt,{icon:d})},"topic")),a.push(e(dt,{text:"Suggest a correction",wrapperProps:{as:"a",href:n,target:"_blank"},children:e(pt,{icon:c})},"errata")),i&&a.push(e(dt,{text:i,children:e(pt,{icon:p,height:"16px",width:"16px"})},"type")),e(ct,{children:a})},mt=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),ut=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,bt=t=>e(ve,v({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:0==t.attempt_number?"Submit":"Re-submit"})),gt=t=>e(ve,v({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),wt=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,ft=a.forwardRef((r,n)=>{const{question:o,task:i,answer_id_order:s,onAnswerChange:l,feedback_html:d,correct_answer_feedback_html:c,is_completed:p,correct_answer_id:h,incorrectAnswerId:m,choicesEnabled:u,questionNumber:b,answer_id:g,hasMultipleAttempts:w,attempts_remaining:f,published_comments:x,detailedSolution:$,canAnswer:y,needsSaved:v,attempt_number:k,apiIsPending:C,onAnswerSave:N,onNextStep:q,canUpdateCurrentStep:S,displaySolution:A,available_points:M,free_response:H,show_all_feedback:I,tableFeedbackEnabled:O}=r,{typesetMath:T}=Me();return a.useEffect(()=>{T&&T()},[$]),t("div",{"data-test-id":"student-exercise-question",children:[e(Oe,{ref:n,task:i,question:o,answerIdOrder:s,choicesEnabled:u,answer_id:g,questionNumber:b,onChange:l,feedback_html:d,correct_answer_feedback_html:c,correct_answer_id:p?h:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:A,show_all_feedback:I,tableFeedbackEnabled:O,children:e(wt,{free_response:H})}),e(ze,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",M]}),e("span",{className:"attempts-left",children:w&&f>0&&e(mt,{count:f})}),e(ut,{published_comments:x}),$&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(_,{html:$})]})]}),e("div",{className:"controls",children:y&&v?e(bt,{disabled:C||!g,isWaiting:C,attempt_number:k,onClick:()=>{return N("string"==typeof(e=o.id)?parseInt(e,10):e);var e}}):e(gt,{onClick:()=>q(b-1),canUpdateCurrentStep:S})})]})})]})}),xt={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},$t=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},yt=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},vt=(e,t,r=5)=>{r>0&&(yt(e).length||$t(e).length)?setTimeout(()=>{vt(e,t,r-1)},200):t()},kt=(e,t)=>new Promise(r=>{(function(e,t){const r=yt(e);t.MathJax.Hub.Queue(((e,t)=>()=>{g(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=$t(e);g(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{vt(e,r)})}),Ct=b((e,t)=>m(kt,100,{leading:!0,trailing:!1}).bind(null,e,t));Ct.cache=new w;const _t=u((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(xt),e.MathJax.Hub.processSectionDelay=0,r()):(xt.AuthorInit=r,e.MathJax=xt)})),Nt=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"];let qt;const St=i(fe)(qt||(qt=(e=>e)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`)),At=({exercise:n})=>t(r,{children:[n.context&&e(_,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(_,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),Mt=r=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:d,show_all_feedback:c,scrollToQuestion:p}=r,h=k(r,Nt);const m="feedback_html"in s,u=a.useRef([]),b=a.useRef(null),g=()=>{b.current&&(async(e,t=window)=>{await _t(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?Ct(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(b.current)};return a.useEffect(()=>{const e=p&&u.current[p];e&&l(e)},[p,d]),a.useEffect(()=>{g()},[d]),e(Ae.Provider,{value:{typesetMath:g},children:e(St,{step:s,questionNumber:i,numberOfQuestions:m?n:d.questions.length,rightHeaderChildren:h.showExerciseIcons?e(ht,{exercise:d,topicUrl:h.topicUrl,errataUrl:h.errataUrl}):null,showTotalQuestions:m,children:t("div",{ref:b,children:[e(At,{exercise:d}),d.questions.map((e,t)=>{var r;const n=v({},m?s:h.questionStates[e.id]);return o(ft,v({},h,n,{ref:e=>u.current[i+t]=e,exercise_uid:d.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:c,tableFeedbackEnabled:c&&!m,canUpdateCurrentStep:"canUpdateCurrentStep"in h?h.canUpdateCurrentStep:!(t+1===d.questions.length)}))})]})})})},Ht=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let It,Ot,Tt,jt,Et,Pt,Lt,zt,Jt=e=>e;const Rt=i.div(It||(It=Jt`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${0}
`),W(Ot||(Ot=Jt`
    padding: 0;
  `))),Bt=i.span(Tt||(Tt=Jt`
  display: flex;
  align-items: center;
  margin: 0 1rem 1rem 0;

  &:last-child {
    margin-right: 0;
  }
`)),Qt=i.button(zt||(zt=Jt`
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
`),e=>e.isActive?"3.0rem":"2.4rem",e=>e.isActive?"3.0rem":"2.4rem",e=>e.isActive?"0":"0 0.3rem",e=>((e,t)=>{switch(e){case"isStatus":return s(jt||(jt=Jt`
        color: ${0};
        background-color: ${0};
        border: none;
        box-shadow: ${0};
      `),t?D.palette.white:D.palette.darkGray,t?D.palette.darkGray:D.palette.neutralLight,t?"0px 0px 2px rgba(0, 0, 0, 0.4), 0px 0px 6px rgba(0, 0, 0, 0.2)":"none");case"isCorrect":return s(Et||(Et=Jt`
        color: ${0};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${0};
        box-shadow: ${0};
      `),D.palette.white,D.palette.darkGreen,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return s(Pt||(Pt=Jt`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),D.palette.white,D.palette.lightRed,D.palette.darkRed,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return s(Lt||(Lt=Jt`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),D.palette.darkGray,t?D.palette.white:D.palette.neutralLight,t?D.palette.darkGray:D.palette.neutralLight,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}})(e.variant,e.isActive)),Vt=({index:t,isActive:r,step:n,goToStep:a})=>e(Bt,{children:e(Qt,{variant:n.variant,isActive:r,onClick:()=>a(t,n),children:"isStatus"===n.variant?e(Ht,{}):t+1})}),Ft=({steps:t,activeIndex:r,goToStep:n})=>e(Rt,{children:t.map((t,a)=>e(Vt,{index:a,isActive:a===r,step:t,goToStep:n},a))});let Ut;const Dt=i.div(Ut||(Ut=(e=>e)`
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
`),D.palette.light),Wt=()=>e(Dt,{children:e(f,{uniqueKey:"OSLoader"})});export{S as Answer,M as AnswersTable,Se as CompletionStatus,Mt as Exercise,Xe as FreeResponseInput,Ke as FreeResponseTextArea,me as InnerStepCard,Wt as Loader,ue as OuterStepCard,Ft as ProgressBar,Vt as ProgressBarItem,Oe as Question,Te as QuestionHtml,we as StepCard,Qt as StyledItem,fe as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
