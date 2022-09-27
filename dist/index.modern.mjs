import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import a,{createElement as o}from"react";import i,{css as s}from"styled-components";import l from"scroll-to-element";const d="abcdefghijklmnopqrstuvwxyz",c=function(e,t){return e.id===t};function p(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const u=["html","component","block"],b=t=>{let{html:r,component:n,block:o=!1}=t,i=h(t,u);return void 0!==n?a.cloneElement(n,m({html:r},i)):e(o?"div":"span",m({dangerouslySetInnerHTML:{__html:r}},i))},g=t=>e("aside",{children:e(b,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),w=r=>{const a=n("question-feedback",r.position||"bottom");return t("aside",{className:a,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(g,m({},r,{children:r.children}))]})},f=a=>{const{type:o,iter:i,answer:s,disabled:l,onKeyPress:p,qid:m,chosenAnswer:h,correctAnswerId:u,incorrectAnswerId:w,hasCorrectAnswer:f,answered_count:x,contentRenderer:$,show_all_feedback:k,tableFeedbackEnabled:y}=a;let v,_,N;const C=((e,t)=>Boolean((t||[]).find(t=>t==e.id)))(s,h),q=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(s,u),S=c(s,w),A=e("div",{className:"correct-incorrect",children:q&&a.correctIncorrectIcon}),O=n("answers-answer",{disabled:l,"answer-checked":C,"answer-correct":q&&"student-mpp"!==o,"answer-incorrect":w&&c(s,w)});let I,T,j=`${C?"Selected ":""}Choice ${d[i]}`;f&&(j+=`(${q?"Correct":"Incorrect"} Answer)`),j+=":";const H=()=>I&&I(s);if(f||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:I}=a),I&&(T=e("input",{type:"radio",className:"answer-input-box",checked:C,id:`${m}-option-${i}`,name:`${m}-options`,onChange:H,disabled:l})),k&&s.feedback_html&&!y&&(_=e(g,{contentRenderer:$,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===o){let r=0;s.selected_count&&x&&(r=Math.round(s.selected_count/x*100)),N=e("span",{className:"selected-count","data-percent":`${r}`,children:s.selected_count}),v=t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:q,red:!q}),children:[N,e("span",{className:n("letter",{green:q,red:!q}),children:d[i]})]}),t("div",{className:"answer-answer",children:[e(b,{className:"answer-content",component:$,html:s.content_html}),_]})]})}else v=t(r,{children:["teacher-preview"===o&&A,N,T,t("label",{onKeyPress:p,htmlFor:`${m}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:H,"aria-label":j,className:"answer-letter",disabled:l||S,"data-test-id":`answer-choice-${d[i]}`,children:d[i]})}),t("div",{className:"answer-answer",children:[e(b,{className:"answer-content",component:$,html:s.content_html}),_]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:O,children:v})})};f.displayName="OSAnswer";const x="student",$=r=>{let n=0;const{question:a,hideAnswers:o,type:i=x,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:h,correct_answer_feedback_html:u,show_all_feedback:b=!1,tableFeedbackEnabled:g,hasCorrectAnswer:$,onChangeAnswer:k,onKeyPress:y,answerIdOrder:v,instructions:_}=r;if(o)return null;const{id:N}=a,C=[],q={qid:N||"auto-"+n++,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:$,chosenAnswer:[p],onChangeAnswer:k,type:i,answered_count:s,disabled:!l,show_all_feedback:b,tableFeedbackEnabled:g,onKeyPress:y},S=(v?(e=>{const{answers:t}=a;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(v):a.answers).map((t,r)=>{const n={answer:m({},t,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:r,key:`${q.qid}-option-${r}`},o=Object.assign({},n,q);return b&&t.feedback_html&&g?C.push({index:r,html:t.feedback_html}):t.id===c&&h?C.push({index:r,html:h}):t.id===d&&u&&C.push({index:r,html:u}),e(f,m({},o))});return C.forEach((t,n)=>{const a=t.index+n+1;S.splice(a,0,e(w,{contentRenderer:r.contentRenderer,children:t.html},a))}),t("div",{className:"answers-table",children:[_,S]})};let k,y,v,_,N,C,q,S,A,O,I,T,j,H=e=>e;const P={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},z={palette:P,answer:{color:P.lightBlue,correct:{color:P.green,background:"#77af42"},incorrect:{color:P.red,background:P.red},checked:P.lightBlue,hover:P.neutralDark,label:{color:P.neutral,colorHover:P.neutralDark,colorSelected:P.lightBlue},feedback:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",popover:{borderColor:"rgba(0, 0, 0, 0.2)"}}},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:P.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:P.neutralDark,background:P.neutralLighter}},E=(...e)=>s(k||(k=H`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),F=(...e)=>s(y||(y=H`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),L=(...e)=>s(v||(v=H`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),R={answer:()=>s(N||(N=H`
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
    }
  `),z.answer.label.color,"2.4rem","2.4rem","2.4rem","2.4rem","2.4rem",z.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",z.palette.white),answerColor:e=>s(C||(C=H`
    color: ${0};
    .answer-letter {
       border-color: ${0};
       background-color: ${0};
       color: ${0};
    }
  `),e.color,e.color,e.background,z.palette.white),answerChecked:()=>R.answerColor({color:z.answer.checked,background:z.answer.checked}),answerCorrect:()=>R.answerColor(z.answer.correct),answerIncorrect:()=>R.answerColor(z.answer.incorrect),answerHover:()=>s(q||(q=H`
    color: ${0};
    .answer-letter {
      border-color: ${0};
    }
  `),z.answer.label.colorHover,z.answer.label.colorSelected),answerCorrectText:()=>s(S||(S=H`
    content: 'correct answer';
    color: ${0};
    margin-left: calc(-3 * ${0});
    width: calc(3 * ${0});
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.2rem;
  `),z.answer.label.color,"2.4rem","2.4rem"),answerCorrectAnswer:()=>s(A||(A=H`
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
          margin-left: calc(-${0} / 3.3);
        }
      }
    }
  `),z.answer.correct.color,z.answer.correct.color,z.answer.correct.color,R.answerCorrectText(),999,999,R.answerCorrectText(),"2.4rem","2.4rem"),resetText:()=>s(O||(O=H`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
  `)),stepCardPadding:()=>s(I||(I=H`
    padding: 48px 140px;

    ${0}

    ${0}
  `),F(T||(T=H`
      padding: ${0} ${0};
    `),"24px","24px"),E(j||(j=H`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px"))};let B;const D=i.div(B||(B=(e=>e)`
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

    .answer-letter {
      text-align: center;
      padding: 0;
      font-size: 1.4rem;
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
        margin-left: 3px;
        top: calc((${0} + ${0}) * -1);

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
`),R.stepCardPadding(),z.palette.pale,z.palette.neutral,z.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",z.palette.neutralLighter,z.palette.neutralLightest,R.answer(),"1rem","1rem","0.1s ease-in-out",R.answerHover(),R.answerChecked(),R.answerChecked(),R.answerIncorrect(),R.answerCorrect(),R.answerCorrectAnswer(),R.answerIncorrect(),R.resetText(),"1px",z.answer.feedback.popover.borderColor,z.palette.white,"370px","8px","1rem",z.palette.neutralThin,"16px","8px","8px","1px","16px","8px","16px",z.answer.feedback.popover.borderColor,"1px",z.palette.white,"0.9rem","1.1rem"),Q=r=>{let a,o;const{question:i,correct_answer_id:s,incorrectAnswerId:l,exercise_uid:d,className:c,questionNumber:p,context:h,task:u,hidePreambles:g}=r,{stem_html:w,collaborator_solutions:f=[],formats:x,stimulus_html:k}=i,y=!!s,v=n("openstax-question",c,{"has-correct-answer":y&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!l});return null!=d&&(a=e("div",{className:"exercise-uid",children:d})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=i;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(o=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(b,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),t(D,{className:v,"data-question-number":p,"data-test-id":"question",children:[e(U,{type:"context",html:h,hidden:g}),e(U,{type:"stimulus",html:k,hidden:g}),e(U,{type:"stem",html:w,hidden:g,questionNumber:p}),r.children,e($,m({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:y})),o,r.displayFormats?e(W,{formats:x}):void 0,a]})},U=t=>{const{html:r="",type:n,hidden:a,questionNumber:o}=t;return!0!==a&&r.length>0?e(b,{html:r,"data-question-number":o,className:`question-${n}`,block:!0}):null},W=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]}),G=["disabled","isWaiting","waitingText","children"];let M;const K=i.button(M||(M=(e=>e)`
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
`),z.button.background,z.palette.white,z.button.backgroundHover,z.button.backgroundActive),V=t=>{const{disabled:r,isWaiting:n,waitingText:a,children:o}=t,i=h(t,G);return e(K,m({},i,{disabled:n||r,children:n&&a||o}))};let Y,J,X=e=>e;const Z=i.div(Y||(Y=X`
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
`),R.stepCardPadding(),z.card.body.background,z.palette.pale,L(J||(J=X`
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
    `)));let ee,te,re,ne,ae,oe,ie=e=>e;const se=s(ee||(ee=ie`
  background-color: #f5e9ea;
`)),le=i.div(te||(te=ie`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),R.stepCardPadding()),de=i.div(re||(re=ie`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),ce=i.div(ne||(ne=ie`
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
`),e=>e.hasChildren?"space-between":"flex-end",z.palette.danger,z.palette.neutralThin),pe=i.textarea(ae||(ae=ie`
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
`),z.palette.neutral,z.palette.neutralDark,e=>e.isOverWordLimit&&se,e=>e.isOverWordLimit&&s(oe||(oe=ie`
    border: 2px solid ${0};
  `),z.palette.danger),e=>e.readOnly&&z.palette.neutralCool);pe.displayName="OSFreeResponseTextArea";const me=t=>e(V,m({},t,{children:"Cancel"})),he=r=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,pointsChildren:l,question:d,questionNumber:c,saveHandler:h,submitBtnLabel:u,textHasChanged:b,wordLimit:g}=r,w=p(o)>g,f={};return c&&(f["data-question-number"]=c),t(le,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(de,m({},f,{children:d.stem_html&&e(U,{type:"stem",html:d.stem_html,hidden:!1})})),e(pe,m({},r,{isOverWordLimit:w,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(ce,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[p(o)," words"]}),w&&t("span",{className:"word-limit-error-info",children:["Maximum ",g," words"]})]})]})]}),t(Z,{children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",n]}),l]}),t("div",{className:"controls",children:[e(me,{disabled:!b,onClick:a}),e(V,{"data-test-id":"submit-answer-btn",disabled:s||w,onClick:h,children:u})]})]})]})};he.displayName="OSFreeResponse";const ue=["questionNumber","numberOfQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],be=["step","questionNumber","numberOfQuestions","children","className"];let ge,we,fe,xe,$e,ke,ye,ve,_e,Ne,Ce,qe,Se=e=>e;const Ae=i.div(ge||(ge=Se`
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
`),z.palette.light,L(we||(we=Se`
    max-width: 1000px;
    min-width: 750px;
  `))),Oe=i.div(fe||(fe=Se`
  padding: 2rem;

  ${0}
`),F(xe||(xe=Se`
    padding: 0;
  `))),Ie=i.div($e||($e=Se`
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

  .num-questions, .points, .separator {
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
`),z.card.header.background,z.palette.gray,L(ke||(ke=Se`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),F(ye||(ye=Se`
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
  `),"24px","24px"),E(ve||(ve=Se`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));Ie.displayName="StepCardHeader";const Te=i.div(_e||(_e=Se`
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
`),R.stepCardPadding(),z.card.body.background,((...e)=>s(_||(_=H`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(Ne||(Ne=Se`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),L(Ce||(Ce=Se`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),E(qe||(qe=Se`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),je=r=>{let{questionNumber:n,numberOfQuestions:a,stepType:o,isHomework:i,availablePoints:s,unpadded:l,className:d,children:c,questionId:p,multipartBadge:u,leftHeaderChildren:b,rightHeaderChildren:g,headerTitleChildren:w}=r,f=h(r,ue);return t(Oe,m({},f,{children:[u,t(Ae,{className:d,children:[n&&i&&"exercise"===o&&t(Ie,{children:[t("div",{children:[b,t("div",{className:"question-info",children:[w,e("span",{children:a>1?`Questions ${n} - ${n+a-1}`:`Question ${n}`}),t("span",{className:"num-questions",children:[" / ",a]}),e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",p]})]})]}),t("div",{children:[s&&t("div",{className:"points",children:[s," Points"]}),g]})]}),e(Te,{unpadded:l,children:c})]})]}))};je.displayName="OSStepCard";const He=t=>{let{step:r,questionNumber:a,numberOfQuestions:o,children:i,className:s}=t,l=h(t,be);return e(je,m({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,children:i}))};He.displayName="OSTaskStepCard";const Pe=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),ze=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,Ee=t=>e(V,m({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:0==t.attempt_number?"Submit":"Re-submit"})),Fe=t=>e(V,m({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),Le=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,Re=r=>{const{question:n,task:a,answer_id_order:o,onAnswerChange:i,feedback_html:s,correct_answer_feedback_html:l,is_completed:d,correct_answer_id:c,incorrectAnswerId:p,choicesEnabled:m,questionNumber:h,answer_id:u,hasMultipleAttempts:g,attempts_remaining:w,published_comments:f,detailedSolution:x,canAnswer:$,needsSaved:k,attempt_number:y,apiIsPending:v,onAnswerSave:_,onNextStep:N,canUpdateCurrentStep:C,displaySolution:q,available_points:S,free_response:A,show_all_feedback:O,tableFeedbackEnabled:I}=r;return t("div",{"data-test-id":"student-exercise-question",children:[e(Q,{task:a,question:n,answerIdOrder:o,choicesEnabled:m,answer_id:u,questionNumber:h,onChange:i,feedback_html:s,correct_answer_feedback_html:l,correct_answer_id:d?c:null,incorrectAnswerId:p,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:q,show_all_feedback:O,tableFeedbackEnabled:I,children:e(Le,{free_response:A})}),e(Z,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",children:[t("strong",{children:["Points: ",S]}),e("span",{className:"attempts-left",children:g&&w>0&&e(Pe,{count:w})}),e(ze,{published_comments:f}),x&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(b,{html:x})]})]}),e("div",{className:"controls",children:$&&k?e(Ee,{disabled:v||!u,isWaiting:v,attempt_number:y,onClick:()=>{return _("string"==typeof(e=n.id)?parseInt(e,10):e);var e}}):e(Fe,{onClick:()=>N(h-1),canUpdateCurrentStep:C})})]})})]})},Be=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"];let De;const Qe=i(He)(De||(De=(e=>e)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`)),Ue=({exercise:n})=>t(r,{children:[n.context&&e(b,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(b,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),We=r=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:d,show_all_feedback:c,scrollToQuestion:p}=r,u=h(r,Be);const b="feedback_html"in s;return a.useEffect(()=>{const e=document.querySelector(`.openstax-question[data-question-number="${p}"]`);e&&l(e)},[p,d]),t(Qe,{step:s,questionNumber:i,numberOfQuestions:b?n:d.questions.length,children:[e(Ue,{exercise:d}),d.questions.map((e,t)=>{var r;const n=m({},b?s:u.questionStates[e.id]);return o(Re,m({},u,n,{exercise_uid:d.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:c,tableFeedbackEnabled:c&&!b,canUpdateCurrentStep:"canUpdateCurrentStep"in u?u.canUpdateCurrentStep:!(t+1===d.questions.length)}))})]})};let Ge,Me,Ke,Ve,Ye,Je,Xe,Ze,et=e=>e;const tt=i.div(Ge||(Ge=et`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${0}
`),E(Me||(Me=et`
    padding: 0;
  `))),rt=i.span(Ke||(Ke=et`
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
`),z.palette.pale,E(Ve||(Ve=et`
    &::after {
      width: 3.3rem;
    }
  `))),nt=i.button(Ze||(Ze=et`
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
`),e=>((e,t)=>{switch(e){case"isCorrect":return s(Ye||(Ye=et`
        color: ${0};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${0};
        box-shadow: ${0};
      `),z.palette.white,z.palette.darkGreen,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return s(Je||(Je=et`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),z.palette.white,z.palette.lightRed,z.palette.darkRed,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return s(Xe||(Xe=et`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),z.palette.darkGray,t?z.palette.white:z.palette.neutralLight,t?z.palette.darkGray:z.palette.neutralLight,t?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}})(e.variant,e.isActive)),at=({index:t,isActive:r,step:n,goToStep:a})=>e(rt,{children:e(nt,{variant:n.variant,isActive:r,onClick:()=>a(t,n),children:t+1})}),ot=({steps:t,activeIndex:r,goToStep:n})=>e(tt,{children:t.map((t,a)=>e(at,{index:a,isActive:a===r,step:t,goToStep:n},a))});export{f as Answer,$ as AnswersTable,We as Exercise,he as FreeResponseInput,pe as FreeResponseTextArea,Ae as InnerStepCard,Oe as OuterStepCard,ot as ProgressBar,at as ProgressBarItem,Q as Question,U as QuestionHtml,je as StepCard,nt as StyledItem,He as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
