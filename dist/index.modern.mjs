import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import o,{createElement as a}from"react";import i,{css as s}from"styled-components";import l from"scroll-to-element";import{faBookOpen as d}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as c}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as p}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{FontAwesomeIcon as m}from"@fortawesome/react-fontawesome";import{BulletList as h}from"react-content-loader";const u="abcdefghijklmnopqrstuvwxyz",b=function(e,t){return e.id===t};function g(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const x=["html","component","block"],$=t=>{let{html:r,component:n,block:a=!1}=t,i=f(t,x);return void 0!==n?o.cloneElement(n,w({html:r},i)):e(a?"div":"span",w({dangerouslySetInnerHTML:{__html:r}},i))},k=t=>e("aside",{children:e($,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),v=r=>{const o=n("question-feedback",r.position||"bottom");return t("aside",{className:o,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(k,w({},r,{children:r.children}))]})},y=o=>{const{type:a,iter:i,answer:s,disabled:l,onKeyPress:d,qid:c,chosenAnswer:p,correctAnswerId:m,incorrectAnswerId:h,hasCorrectAnswer:g,answered_count:w,contentRenderer:f,show_all_feedback:x,tableFeedbackEnabled:v}=o;let y,C,_;const N=((e,t)=>Boolean((t||[]).find(t=>t==e.id)))(s,p),q=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(s,m),S=b(s,h),A=e("div",{className:"correct-incorrect",children:q&&o.correctIncorrectIcon}),O=n("answers-answer",{disabled:l,"answer-checked":N,"answer-correct":q&&"student-mpp"!==a,"answer-incorrect":h&&b(s,h)});let I,T,H=`${N?"Selected ":""}Choice ${u[i]}`;g&&(H+=`(${q?"Correct":"Incorrect"} Answer)`),H+=":";const j=()=>I&&I(s);if(g||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:I}=o),I&&(T=e("input",{type:"radio",className:"answer-input-box",checked:N,id:`${c}-option-${i}`,name:`${c}-options`,onChange:j,disabled:l})),x&&s.feedback_html&&!v&&(C=e(k,{contentRenderer:f,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===a){let r=0;s.selected_count&&w&&(r=Math.round(s.selected_count/w*100)),_=e("span",{className:"selected-count","data-percent":`${r}`,children:s.selected_count}),y=t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:q,red:!q}),children:[_,e("span",{className:n("letter",{green:q,red:!q}),children:u[i]})]}),t("div",{className:"answer-answer",children:[e($,{className:"answer-content",component:f,html:s.content_html}),C]})]})}else y=t(r,{children:["teacher-preview"===a&&A,_,T,t("label",{onKeyPress:d,htmlFor:`${c}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:j,"aria-label":H,className:"answer-letter",disabled:l||S,"data-test-id":`answer-choice-${u[i]}`,children:u[i]})}),t("div",{className:"answer-answer",children:[e($,{className:"answer-content",component:f,html:s.content_html}),C]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:O,children:y})})};y.displayName="OSAnswer";const C="student",_=r=>{let n=0;const{question:o,hideAnswers:a,type:i=C,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:m,correct_answer_feedback_html:h,show_all_feedback:u=!1,tableFeedbackEnabled:b,hasCorrectAnswer:g,onChangeAnswer:f,onKeyPress:x,answerIdOrder:$,instructions:k}=r;if(a)return null;const{id:_}=o,N=[],q={qid:_||"auto-"+n++,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:g,chosenAnswer:[p],onChangeAnswer:f,type:i,answered_count:s,disabled:!l,show_all_feedback:u,tableFeedbackEnabled:b,onKeyPress:x},S=($?(e=>{const{answers:t}=o;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})($):o.answers).map((t,r)=>{const n={answer:w({},t,{question_id:"string"==typeof o.id?parseInt(o.id,10):o.id}),iter:r,key:`${q.qid}-option-${r}`},a=Object.assign({},n,q);return u&&t.feedback_html&&b?N.push({index:r,html:t.feedback_html}):t.id===c&&m?N.push({index:r,html:m}):t.id===d&&h&&N.push({index:r,html:h}),e(y,w({},a))});return N.forEach((t,n)=>{const o=t.index+n+1;S.splice(o,0,e(v,{contentRenderer:r.contentRenderer,children:t.html},o))}),t("div",{className:"answers-table",children:[k,S]})};let N,q,S,A,O,I,T,H,j,z,P,R,V,B,E=e=>e;const L={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},F={palette:L,answer:{color:L.lightBlue,correct:{color:L.green,background:"#77af42"},incorrect:{color:L.red,background:L.red},checked:L.lightBlue,hover:L.neutralDark,label:{color:L.neutral,colorHover:L.neutralDark,colorSelected:L.lightBlue}},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:L.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:L.neutralDark,background:L.neutralLighter}},Q=(...e)=>s(N||(N=E`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),M=(...e)=>s(q||(q=E`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),U=(...e)=>s(S||(S=E`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),D={answer:()=>s(O||(O=E`
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
  `),F.answer.label.color,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",F.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",F.palette.white),answerColor:e=>s(I||(I=E`
    color: ${0};
    .answer-letter {
       border-color: ${0};
       background-color: ${0};
       color: ${0};
    }
  `),e.color,e.color,e.background,F.palette.white),answerChecked:()=>D.answerColor({color:F.answer.checked,background:F.answer.checked}),answerCorrect:()=>D.answerColor(F.answer.correct),answerIncorrect:()=>D.answerColor(F.answer.incorrect),answerHover:()=>s(T||(T=E`
    color: ${0};
    .answer-letter {
      border-color: ${0};
    }
  `),F.answer.label.colorHover,F.answer.label.colorSelected),answerCorrectText:()=>s(H||(H=E`
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
  `),F.answer.label.color,"3.6rem","3.6rem"),answerCorrectAnswer:()=>s(j||(j=E`
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
  `),F.answer.correct.color,F.answer.correct.color,F.answer.correct.color,D.answerCorrectText(),999,999,D.answerCorrectText(),"3.6rem"),resetText:()=>s(z||(z=E`
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
  `)),stepCardPadding:()=>s(P||(P=E`
    padding: 48px 140px;

    ${0}

    ${0}
  `),M(R||(R=E`
      padding: ${0} ${0};
    `),"24px","24px"),Q(V||(V=E`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(B||(B=E`
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
  `),D.resetText(),"1px",F.popover.borderColor,F.palette.white,"325px","8px","1rem",F.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",F.popover.borderColor,"1px",F.palette.white,"9px","1px","9px","1rem","0.8rem")},G=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],W=["step","questionNumber","numberOfQuestions","children","className"];let Z,K,Y,J,X,ee,te,re,ne,oe,ae,ie,se=e=>e;const le=i.div(Z||(Z=se`
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
`),F.palette.light,U(K||(K=se`
    max-width: 1000px;
  `))),de=i.div(Y||(Y=se`
  padding: 2rem;

  ${0}
`),Q(J||(J=se`
    padding: 0;
  `))),ce=i.div(X||(X=se`
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
`),F.card.header.background,F.palette.gray,U(ee||(ee=se`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),M(te||(te=se`
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
  `),"24px","24px"),Q(re||(re=se`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));ce.displayName="StepCardHeader";const pe=i.div(ne||(ne=se`
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
`),D.stepCardPadding(),F.card.body.background,((...e)=>s(A||(A=E`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(oe||(oe=se`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),U(ae||(ae=se`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),Q(ie||(ie=se`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),me=r=>{let{questionNumber:n,numberOfQuestions:o,showTotalQuestions:a,stepType:i,isHomework:s,availablePoints:l,unpadded:d,className:c,children:p,questionId:m,multipartBadge:h,leftHeaderChildren:u,rightHeaderChildren:b,headerTitleChildren:g}=r,x=f(r,G);return t(de,w({},x,{children:[h,t(le,{className:c,children:[n&&s&&"exercise"===i&&t(ce,{children:[t("div",{children:[u,t("div",{className:"question-info",children:[g,e("span",{children:o>1?`Questions ${n} - ${n+o-1}`:`Question ${n}`}),a?t("span",{className:"num-questions",children:[" / ",o]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",m]})]})]}),t("div",{children:[l&&t("div",{className:"points",children:[l," Points"]}),b]})]}),e(pe,{unpadded:d,children:p})]})]}))};me.displayName="OSStepCard";const he=t=>{let{step:r,questionNumber:o,numberOfQuestions:a,children:i,className:s}=t,l=f(t,W);return e(me,w({},l,{unpadded:!0,questionNumber:o,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:i}))};he.displayName="OSTaskStepCard";const ue=["disabled","isWaiting","waitingText","children"];let be;const ge=i.button(be||(be=(e=>e)`
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
`),F.button.background,F.palette.white,F.button.backgroundHover,F.button.backgroundActive),we=t=>{const{disabled:r,isWaiting:n,waitingText:o,children:a}=t,i=f(t,ue);return e(ge,w({},i,{disabled:n||r,children:n&&o||a}))};let fe,xe,$e=e=>e;const ke=i(le)(fe||(fe=$e`
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
`)),ve=i.h2(xe||(xe=$e`
  font-size: 2.4rem;
  margin: 0;
`)),ye=({numberOfQuestions:r,numberCompleted:n,handleClick:o})=>{const a=r===n,i=n>0,s=a?"Next":i?"Continue":"Start";return t(ke,{children:[e(ve,{children:a?"You are done.":i?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:a?"Great job answering all the questions.":i?`You've completed ${n} of ${r} questions.`:"Begin working on the quiz."}),e(we,{"data-test-id":`${s.split(" ")[0].toLowerCase()}-btn`,onClick:()=>o(),children:s})]})};let Ce;const _e=i.div(Ce||(Ce=(e=>e)`
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
`),D.stepCardPadding(),F.palette.pale,F.palette.neutral,F.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",F.palette.neutralLighter,F.palette.neutralLightest,D.answer(),"1rem","3.6rem","1rem","0.1s ease-in-out",D.answerHover(),D.answerChecked(),D.answerChecked(),D.answerIncorrect(),D.answerCorrect(),D.answerCorrectAnswer(),D.answerIncorrect(),D.popover(),"370px","0.9rem","1.1rem"),Ne=o.forwardRef((r,o)=>{let a,i;const{question:s,correct_answer_id:l,incorrectAnswerId:d,exercise_uid:c,className:p,questionNumber:m,context:h,task:u,hidePreambles:b}=r,{stem_html:g,collaborator_solutions:f=[],formats:x,stimulus_html:k}=s,v=!!l,y=n("openstax-question",p,{"has-correct-answer":v&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(a=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e($,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),t(_e,{ref:o,className:y,"data-question-number":m,"data-test-id":"question",children:[e(qe,{type:"context",html:h,hidden:b}),e(qe,{type:"stimulus",html:k,hidden:b}),e(qe,{type:"stem",html:g,hidden:b,questionNumber:m}),r.children,e(_,w({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),i,r.displayFormats?e(Se,{formats:x}):void 0,a]})}),qe=t=>{const{html:r="",type:n,hidden:o,questionNumber:a}=t;return!0!==o&&r.length>0?e($,{html:r,"data-question-number":a,className:`question-${n}`,block:!0}):null},Se=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let Ae,Oe,Ie=e=>e;const Te=i.div(Ae||(Ae=Ie`
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
`),D.stepCardPadding(),F.card.body.background,F.palette.pale,U(Oe||(Oe=Ie`
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
    `)));let He,je,ze,Pe,Re,Ve,Be=e=>e;const Ee=s(He||(He=Be`
  background-color: #f5e9ea;
`)),Le=i.div(je||(je=Be`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),D.stepCardPadding()),Fe=i.div(ze||(ze=Be`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),Qe=i.div(Pe||(Pe=Be`
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
`),e=>e.hasChildren?"space-between":"flex-end",F.palette.danger,F.palette.neutralThin),Me=i.textarea(Re||(Re=Be`
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
`),F.palette.neutral,F.palette.neutralDark,e=>e.isOverWordLimit&&Ee,e=>e.isOverWordLimit&&s(Ve||(Ve=Be`
    border: 2px solid ${0};
  `),F.palette.danger),e=>e.readOnly&&F.palette.neutralCool);Me.displayName="OSFreeResponseTextArea";const Ue=t=>e(we,w({},t,{children:"Cancel"})),De=r=>{const{availablePoints:n,cancelHandler:o,defaultValue:a,infoRowChildren:i,isSubmitDisabled:s,pointsChildren:l,question:d,questionNumber:c,saveHandler:p,submitBtnLabel:m,textHasChanged:h,wordLimit:u}=r,b=g(a)>u,f={};return c&&(f["data-question-number"]=c),t(Le,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(Fe,w({},f,{children:d.stem_html&&e(qe,{type:"stem",html:d.stem_html,hidden:!1})})),e(Me,w({},r,{isOverWordLimit:b,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(Qe,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[g(a)," words"]}),b&&t("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),t(Te,{children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",n]}),l]}),t("div",{className:"controls",children:[e(Ue,{disabled:!h,onClick:o}),e(we,{"data-test-id":"submit-answer-btn",disabled:s||b,onClick:p,children:m})]})]})]})};De.displayName="OSFreeResponse";let Ge,We,Ze,Ke,Ye,Je=e=>e;const Xe=i.div(Ge||(Ge=Je`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
`),F.palette.mediumBlue),et=i.div(We||(We=Je`
  position: relative;
  display: flex;
`)),tt=i.div(Ze||(Ze=Je`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),D.popover),rt=r=>e(Xe,w({},r.wrapperProps,{children:t(et,{children:[r.children,t(tt,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),nt=i.div(Ke||(Ke=Je`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),ot=i(m)(Ye||(Ye=Je`
  color: ${0};
  height: 1em;
`),F.palette.darkGray),at=({exercise:t,topicUrl:r,errataUrl:n})=>{const o=[],a=t.questions.every(e=>e.answers.length>0);let i;return a&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":a&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r&&o.push(e(rt,{text:"View topic in textbook",wrapperProps:{as:"a",href:r,target:"_blank"},children:e(ot,{icon:d})},"topic")),o.push(e(rt,{text:"Suggest a correction",wrapperProps:{as:"a",href:n,target:"_blank"},children:e(ot,{icon:c})},"errata")),i&&o.push(e(rt,{text:i,children:e(ot,{icon:p,height:"16px",width:"16px"})},"type")),e(nt,{children:o})},it=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),st=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,lt=t=>e(we,w({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:0==t.attempt_number?"Submit":"Re-submit"})),dt=t=>e(we,w({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),ct=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,pt=o.forwardRef((r,n)=>{const{question:o,task:a,answer_id_order:i,onAnswerChange:s,feedback_html:l,correct_answer_feedback_html:d,is_completed:c,correct_answer_id:p,incorrectAnswerId:m,choicesEnabled:h,questionNumber:u,answer_id:b,hasMultipleAttempts:g,attempts_remaining:w,published_comments:f,detailedSolution:x,canAnswer:k,needsSaved:v,attempt_number:y,apiIsPending:C,onAnswerSave:_,onNextStep:N,canUpdateCurrentStep:q,displaySolution:S,available_points:A,free_response:O,show_all_feedback:I,tableFeedbackEnabled:T}=r;return t("div",{"data-test-id":"student-exercise-question",children:[e(Ne,{ref:n,task:a,question:o,answerIdOrder:i,choicesEnabled:h,answer_id:b,questionNumber:u,onChange:s,feedback_html:l,correct_answer_feedback_html:d,correct_answer_id:c?p:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:S,show_all_feedback:I,tableFeedbackEnabled:T,children:e(ct,{free_response:O})}),e(Te,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",A]}),e("span",{className:"attempts-left",children:g&&w>0&&e(it,{count:w})}),e(st,{published_comments:f}),x&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e($,{html:x})]})]}),e("div",{className:"controls",children:k&&v?e(lt,{disabled:C||!b,isWaiting:C,attempt_number:y,onClick:()=>{return _("string"==typeof(e=o.id)?parseInt(e,10):e);var e}}):e(dt,{onClick:()=>N(u-1),canUpdateCurrentStep:q})})]})})]})}),mt=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"];let ht;const ut=i(he)(ht||(ht=(e=>e)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`)),bt=({exercise:n})=>t(r,{children:[n.context&&e($,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e($,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),gt=r=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:d,show_all_feedback:c,scrollToQuestion:p}=r,m=f(r,mt);const h="feedback_html"in s,u=o.useRef([]);return o.useEffect(()=>{const e=p&&u.current[p];e&&l(e)},[p,d]),t(ut,{step:s,questionNumber:i,numberOfQuestions:h?n:d.questions.length,rightHeaderChildren:m.showExerciseIcons?e(at,{exercise:d,topicUrl:m.topicUrl,errataUrl:m.errataUrl}):null,showTotalQuestions:h,children:[e(bt,{exercise:d}),d.questions.map((e,t)=>{var r;const n=w({},h?s:m.questionStates[e.id]);return a(pt,w({},m,n,{ref:e=>u.current[i+t]=e,exercise_uid:d.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:c,tableFeedbackEnabled:c&&!h,canUpdateCurrentStep:"canUpdateCurrentStep"in m?m.canUpdateCurrentStep:!(t+1===d.questions.length)}))})]})},wt=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let ft,xt,$t,kt,vt,yt,Ct,_t,Nt,qt=e=>e;const St=i.div(ft||(ft=qt`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${0}
`),Q(xt||(xt=qt`
    padding: 0;
  `))),At=i.span($t||($t=qt`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &::after {
    content: "";
    display: block;
    height: 0.1rem;
    width: 1rem;
    background-color: ${0};
  }

  &:last-child {
    &::after {
      content: none;
    }
  }

  ${0}
`),F.palette.pale,Q(kt||(kt=qt`
    &::after {
      width: 3.3rem;
    }
  `))),Ot=i.button(Nt||(Nt=qt`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  margin: 0 0.3rem;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  ${0}
`),e=>((e,t)=>{switch(e){case"isStatus":return s(vt||(vt=qt`
        color: ${0};
        background-color: ${0};
        border: none;
        box-shadow: ${0};
      `),t?F.palette.white:F.palette.darkGray,t?F.palette.darkGray:F.palette.neutralLight,t?"0px 0px 2px rgba(0, 0, 0, 0.4), 0px 0px 6px rgba(0, 0, 0, 0.2)":"none");case"isCorrect":return s(yt||(yt=qt`
        color: ${0};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${0};
        box-shadow: ${0};
      `),F.palette.white,F.palette.darkGreen,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return s(Ct||(Ct=qt`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),F.palette.white,F.palette.lightRed,F.palette.darkRed,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return s(_t||(_t=qt`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),F.palette.darkGray,t?F.palette.white:F.palette.neutralLight,t?F.palette.darkGray:F.palette.neutralLight,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}})(e.variant,e.isActive)),It=({index:t,isActive:r,step:n,goToStep:o})=>e(At,{children:e(Ot,{variant:n.variant,isActive:r,onClick:()=>o(t,n),children:"isStatus"===n.variant?e(wt,{}):t+1})}),Tt=({steps:t,activeIndex:r,goToStep:n})=>e(St,{children:t.map((t,o)=>e(It,{index:o,isActive:o===r,step:t,goToStep:n},o))});let Ht;const jt=i.div(Ht||(Ht=(e=>e)`
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
`),F.palette.light),zt=()=>e(jt,{children:e(h,{uniqueKey:"OSLoader"})});export{y as Answer,_ as AnswersTable,ye as CompletionStatus,gt as Exercise,De as FreeResponseInput,Me as FreeResponseTextArea,le as InnerStepCard,zt as Loader,de as OuterStepCard,Tt as ProgressBar,It as ProgressBarItem,Ne as Question,qe as QuestionHtml,me as StepCard,Ot as StyledItem,he as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
