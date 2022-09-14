import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime.js";import n from"classnames";import a,{createElement as o}from"react";import i,{css as s}from"styled-components";const l="abcdefghijklmnopqrstuvwxyz",d=function(e,r){return e.id===r};function c(e){const r=e.trim().match(/\b[-?(\w+)?]+\b/gi);return r?r.length:0}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r.indexOf(t=o[n])>=0||(a[t]=e[t]);return a}const h=["html","component","block"],u=r=>{let{html:t,component:n,block:o=!1}=r,i=p(r,h);return void 0!==n?a.cloneElement(n,m({html:t},i)):e(o?"div":"span",m({dangerouslySetInnerHTML:{__html:t}},i))},b=r=>e("aside",{children:e(u,{component:r.contentRenderer,className:n("question-feedback-content","has-html",r.className),html:r.children,block:!0})}),w=t=>{const a=n("question-feedback",t.position||"bottom");return r("aside",{className:a,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(b,m({},t,{children:t.children}))]})},g=a=>{const{type:o,iter:i,answer:s,disabled:c,onKeyPress:m,qid:p,chosenAnswer:h,correctAnswerId:w,incorrectAnswerId:g,hasCorrectAnswer:f,answered_count:x,contentRenderer:$,show_all_feedback:k}=a;let v,y,N;const C=((e,r)=>Boolean((r||[]).find(r=>r==e.id)))(s,h),_=function(e,r){if(!e.id&&!r)return e.isCorrect;let t=e.id===r;return null!=e.correctness&&(t="1.0"===e.correctness),t}(s,w),q=d(s,g),S=e("div",{className:"correct-incorrect",children:_&&a.correctIncorrectIcon}),A=n("answers-answer",{disabled:c,"answer-checked":C,"answer-correct":_&&"student-mpp"!==o,"answer-incorrect":g&&d(s,g)});let O,I,H=`${C?"Selected ":""}Choice ${l[i]}`;if(f&&(H+=`(${_?"Correct":"Incorrect"} Answer)`),H+=":",f||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:O}=a),O&&(I=e("input",{type:"radio",className:"answer-input-box",checked:C,id:`${p}-option-${i}`,name:`${p}-options`,onChange:O,disabled:c})),k&&s.feedback_html&&(y=e(b,{contentRenderer:$,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===o){let t=0;s.selected_count&&x&&(t=Math.round(s.selected_count/x*100)),N=e("span",{className:"selected-count","data-percent":`${t}`,children:s.selected_count}),v=r("div",{className:"review-wrapper",children:[r("div",{className:n("review-count",{green:_,red:!_}),children:[N,e("span",{className:n("letter",{green:_,red:!_}),children:l[i]})]}),r("div",{className:"answer-answer",children:[e(u,{className:"answer-content",component:$,html:s.content_html}),y]})]})}else v=r(t,{children:["teacher-preview"===o&&S,N,I,r("label",{onKeyPress:m,htmlFor:`${p}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:O,"aria-label":H,className:"answer-letter",disabled:c||q,"data-test-id":`answer-choice-${l[i]}`,children:l[i]})}),r("div",{className:"answer-answer",children:[e(u,{className:"answer-content",component:$,html:s.content_html}),y]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:A,children:v})})};g.displayName="OSAnswer";const f="student",x=t=>{let n=0;const{question:a,hideAnswers:o,type:i=f,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:h,correct_answer_feedback_html:u,show_all_feedback:b=!1,hasCorrectAnswer:x,onChangeAnswer:$,onKeyPress:k,answerIdOrder:v,instructions:y}=t;if(o)return null;const{id:N}=a,C=[],_={qid:N||"auto-"+n++,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:x,chosenAnswer:[p],onChangeAnswer:$,type:i,answered_count:s,disabled:!l,show_all_feedback:b,onKeyPress:k},q=(v?(e=>{const{answers:r}=a;return r.slice().sort((r,t)=>e.indexOf(r.id)-e.indexOf(t.id))})(v):a.answers).map((r,t)=>{const n=Object.assign({},{answer:r,iter:t,key:`${_.qid}-option-${t}`},_);return r.id===c&&h?C.push({index:t,html:h}):r.id===d&&u&&C.push({index:t,html:u}),e(g,m({},n))});return C.forEach((r,n)=>{const a=r.index+n+1;q.splice(a,0,e(w,{contentRenderer:t.contentRenderer,children:r.html},a))}),r("div",{className:"answers-table",children:[y,q]})};let $,k,v,y,N,C,_,q,S,A,O,I,H,P=e=>e;const T={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},z={palette:T,answer:{color:T.lightBlue,correct:{color:T.green,background:"#77af42"},incorrect:{color:T.red,background:T.red},checked:T.lightBlue,hover:T.neutralDark,label:{color:T.neutralMedium,colorHover:T.neutralDark,colorSelected:T.lightBlue},feedback:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",popover:{borderColor:"rgba(0, 0, 0, 0.2)"}}},card:{background:"#daf3f8"},button:{background:T.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:T.neutralDark,background:T.neutralLighter}},j=(...e)=>s($||($=P`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),B=(...e)=>s(k||(k=P`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),L=(...e)=>s(v||(v=P`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),R={answer:()=>s(N||(N=P`
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
  `),z.answer.label.color,"4rem","4rem","4rem","4rem","4rem",z.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",z.palette.white),answerColor:e=>s(C||(C=P`
    color: ${0};
    .answer-letter {
       border-color: ${0};
       background-color: ${0};
       color: ${0};
    }
  `),e.color,e.color,e.background,z.palette.white),answerChecked:()=>R.answerColor({color:z.answer.checked,background:z.answer.checked}),answerCorrect:()=>R.answerColor(z.answer.correct),answerIncorrect:()=>R.answerColor(z.answer.incorrect),answerHover:()=>s(_||(_=P`
    color: ${0};
    .answer-letter {
      border-color: ${0};
    }
  `),z.answer.label.colorHover,z.answer.label.colorSelected),answerCorrectText:()=>s(q||(q=P`
    content: 'correct answer';
    color: ${0};
    margin-left: calc(-1.25 * ${0});
    width: calc(1.25 * ${0});
    text-align: center;
    font-size: 1.2rem;
    // em used here for line-height for compatibility with IE
    // http://caniuse.com/#feat=rem -- rem ignored in pseudo elements
    line-height: 1em;
    margin-top: 0.8rem;
  `),z.answer.label.color,"4rem","4rem"),answerCorrectAnswer:()=>s(S||(S=P`
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
          width: $openstax-answer-bubble-size !important;
          margin-left: 0;
        }
      }
    }
  `),z.answer.correct.color,z.answer.correct.color,z.answer.correct.color,R.answerCorrectText(),999,999,R.answerCorrectText()),resetText:()=>s(A||(A=P`
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
  `)),stepCardPadding:()=>s(O||(O=P`
    padding: 48px 140px;

    ${0}

    ${0}
  `),B(I||(I=P`
      padding: ${0} ${0};
    `),"24px","24px"),j(H||(H=P`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px"))};let D;const E=i.div(D||(D=(e=>e)`
&.step-card-body {
  ${0};
}

&.openstax-question {
  font-size: 2rem;

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
    font-size: 17px;
    line-height: 25px;
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
      border-radius: 0.3rem;
      max-width: ${0};
      margin: calc(${0} - 5px) 0 ${0} calc(-1 * (2 * ${0}));
      box-shadow: 10px 0px 10px rgba(0, 0, 0, .25);
      color: ${0};
      font-size: 1.4rem;
      font-style: italic;

      .arrow {
        position: absolute;
        display: block;
        width: ${0};
        height: ${0};
        margin-left: 30px;
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
    padding: 10px 0;
  }
}
`),R.stepCardPadding(),z.palette.neutral,z.palette.neutralLightBlue,"1rem","2.5rem","1.5rem","1rem","1.5rem","1rem",z.palette.neutralLighter,z.palette.neutralLightest,R.answer(),"1rem","1.5rem","0.1s ease-in-out",R.answerHover(),R.answerChecked(),R.answerChecked(),R.answerIncorrect(),R.answerCorrect(),R.answerCorrectAnswer(),R.answerIncorrect(),R.resetText(),"1px",z.answer.feedback.popover.borderColor,z.palette.white,"370px","15px","1rem","1rem",z.palette.neutral,"20px","15px","15px","1px","20px","15px","20px",z.answer.feedback.popover.borderColor,"1px",z.palette.white,"2rem","2rem"),F=t=>{let a,o;const{question:i,correct_answer_id:s,incorrectAnswerId:l,exercise_uid:d,className:c,questionNumber:p,context:h,task:b,hidePreambles:w}=t,{stem_html:g,collaborator_solutions:f=[],formats:$,stimulus_html:k}=i,v=!!s,y=n("openstax-question",c,{"has-correct-answer":v&&!((null!=b?b.is_deleted:void 0)&&"homework"===(null!=b?b.type:void 0)),"has-incorrect-answer":!!l});return null!=d&&(a=e("div",{className:"exercise-uid",children:d})),(()=>{const{displaySolution:e}=t,{collaborator_solutions:r=[]}=i;return e&&r&&r.find(e=>void 0!==e.content_html)})()&&(o=r("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(u,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),r(E,{className:y,"data-question-number":p,"data-test-id":"question",children:[e(Q,{type:"context",html:h,hidden:w}),e(Q,{type:"stimulus",html:k,hidden:w}),e(Q,{type:"stem",html:g,hidden:w,questionNumber:p}),t.children,e(x,m({},t,{onChangeAnswer:t.onChange,hasCorrectAnswer:v})),o,t.displayFormats?e(W,{formats:$}):void 0,a]})},Q=r=>{const{html:t="",type:n,hidden:a,questionNumber:o}=r;return!0!==a&&t.length>0?e(u,{html:t,"data-question-number":o,className:`question-${n}`,block:!0}):null},W=({formats:t=[]})=>r("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),t.map((r,t)=>e("span",{children:r},t))]}),M=["disabled","isWaiting","waitingText","children"];let U;const K=i.button(U||(U=(e=>e)`
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
`),z.button.background,z.palette.white,z.button.backgroundHover,z.button.backgroundActive),G=r=>{const{disabled:t,isWaiting:n,waitingText:a,children:o}=r,i=p(r,M);return e(K,m({},i,{disabled:n||t,children:n&&a||o}))};let V,Y,J=e=>e;const X=i.div(V||(V=J`
    ${0}
    border-top: 1px solid ${0};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 2rem;

    > * {
        flex-grow: 1;
    }

    button {
        width: 160px;
        height: 48px;
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
`),R.stepCardPadding(),z.palette.pale,L(Y||(Y=J`
        padding: 32px 140px;
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
    `)));let Z,ee,re,te,ne,ae,oe=e=>e;const ie=s(Z||(Z=oe`
  background-color: #f5e9ea;
`)),se=i.div(ee||(ee=oe`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),R.stepCardPadding()),le=i.div(re||(re=oe`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),de=i.div(te||(te=oe`
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
`),e=>e.hasChildren?"space-between":"flex-end",z.palette.danger,z.palette.neutralThin),ce=i.textarea(ne||(ne=oe`
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
`),z.palette.neutral,z.palette.neutralDark,e=>e.isOverWordLimit&&ie,e=>e.isOverWordLimit&&s(ae||(ae=oe`
    border: 2px solid ${0};
  `),z.palette.danger),e=>e.readOnly&&z.palette.neutralCool);ce.displayName="OSFreeResponseTextArea";const me=r=>e(G,m({},r,{children:"Cancel"})),pe=t=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,pointsChildren:l,question:d,questionNumber:p,saveHandler:h,submitBtnLabel:u,textHasChanged:b,wordLimit:w}=t,g=c(o)>w,f={};return p&&(f["data-question-number"]=p),r(se,{"data-test-id":"student-free-response",children:[r("div",{className:"step-card-body",children:[e(le,m({},f,{children:d.stem_html&&e(Q,{type:"stem",html:d.stem_html,hidden:!1})})),e(ce,m({},t,{isOverWordLimit:g,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),r(de,{hasChildren:!!i,children:[i,r("div",{children:[r("span",{children:[c(o)," words"]}),g&&r("span",{className:"word-limit-error-info",children:["Maximum ",w," words"]})]})]})]}),r(X,{children:[r("div",{className:"points",children:[r("strong",{children:["Points: ",n]}),l]}),r("div",{className:"controls",children:[e(me,{disabled:!b,onClick:a}),e(G,{"data-test-id":"submit-answer-btn",disabled:s||g,onClick:h,children:u})]})]})]})};pe.displayName="OSFreeResponse";const he=["questionNumber","numberOfQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],ue=["step","questionNumber","numberOfQuestions","children","className"];let be,we,ge,fe,xe,$e,ke,ve,ye,Ne,Ce,_e,qe=e=>e;const Se=i.div(be||(be=qe`
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
`),z.palette.light,L(we||(we=qe`
    max-width: 1000px;
    min-width: 750px;
  `))),Ae=i.div(ge||(ge=qe`
  padding: 2rem;

  ${0}
`),B(fe||(fe=qe`
    padding: 0;
  `))),Oe=i.div(xe||(xe=qe`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${0};
  font-size: 1.8rem;
  line-height: 3rem;

  div {
    display: flex;
    align-items: center;
  }

  div.question-info {
    font-weight: bold;

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
      margin: 0 1rem;
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
`),z.card.background,z.palette.gray,L($e||($e=qe`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),B(ke||(ke=qe`
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
  `),"24px","24px"),j(ve||(ve=qe`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));Oe.displayName="StepCardHeader";const Ie=i.div(ye||(ye=qe`
  .step-card-body {
    ${0}
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
`),R.stepCardPadding(),((...e)=>s(y||(y=P`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(Ne||(Ne=qe`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),L(Ce||(Ce=qe`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),j(_e||(_e=qe`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),He=t=>{let{questionNumber:n,numberOfQuestions:a,stepType:o,isHomework:i,availablePoints:s,unpadded:l,className:d,children:c,questionId:h,multipartBadge:u,leftHeaderChildren:b,rightHeaderChildren:w,headerTitleChildren:g}=t,f=p(t,he);return r(Ae,m({},f,{children:[u,r(Se,{className:d,children:[n&&i&&"exercise"===o&&r(Oe,{children:[r("div",{children:[b,r("div",{className:"question-info",children:[g,r("span",{children:["Question ",n]}),r("span",{className:"num-questions",children:[" / ",a]}),e("span",{className:"separator",children:"|"}),r("span",{className:"question-id",children:["ID: ",h]})]})]}),r("div",{children:[r("div",{className:"points",children:[s," Points"]}),w]})]}),e(Ie,{unpadded:l,children:c})]})]}))};He.displayName="OSStepCard";const Pe=r=>{let{step:t,questionNumber:a,numberOfQuestions:o,children:i,className:s}=r,l=p(r,ue);return e(He,m({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:t.type,isHomework:"homework"===t.task.type,"data-task-step-id":t.id,availablePoints:t.available_points,className:n(`${t.type}-step`,s),questionId:t.uid,children:i}))};Pe.displayName="OSTaskStepCard";const Te=({count:e})=>r("div",{children:[e," attempt",1===e?"":"s"," left"]}),ze=({published_comments:t})=>t?r("div",{children:[e("strong",{children:"Feedback:"})," ",t]}):null,je=r=>e(G,m({},r,{waitingText:"Saving…",isWaiting:r.isWaiting,"data-test-id":"submit-answer-btn",children:0==r.attempt_number?"Submit":"Re-submit"})),Be=r=>e(G,{onClick:r.onNextStep,"data-test-id":"continue-btn",children:r.canUpdateCurrentStep?"Continue":"Next"}),Le=({free_response:r})=>r?e(t,{children:e("div",{className:"free-response",children:r})}):null,Re=t=>{const{question:n,task:a,answer_id_order:o,onAnswerChange:i,feedback_html:s,correct_answer_feedback_html:l,is_completed:d,correct_answer_id:c,incorrectAnswerId:m,choicesEnabled:p,questionNumber:h,answerId:b,hasMultipleAttempts:w,attempts_remaining:g,published_comments:f,detailedSolution:x,canAnswer:$,needsSaved:k,attempt_number:v,apiIsPending:y,onAnswerSave:N,onNextStep:C,canUpdateCurrentStep:_,displaySolution:q,available_points:S,free_response:A}=t;return r("div",{"data-test-id":"student-exercise-question",children:[e(F,{task:a,question:n,answerIdOrder:o,choicesEnabled:p,answer_id:b,questionNumber:h,onChange:i,feedback_html:s,correct_answer_feedback_html:l,correct_answer_id:d?c:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:q,children:e(Le,{free_response:A})}),r(X,{className:"step-card-footer",children:[r("div",{className:"points",children:[r("strong",{children:["Points: ",S]}),e("span",{className:"attempts-left",children:w&&g>0&&e(Te,{count:g})}),e(ze,{published_comments:f}),x&&r("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(u,{html:x})]})]}),e("div",{className:"controls",children:$&&k?e(je,{disabled:y||!b,isWaiting:y,attempt_number:v,onClick:N}):e(Be,{onNextStep:C,canUpdateCurrentStep:_})})]})]})},De=["numberOfQuestions","questionNumber","step","exercise","canAnswer","needsSaved"];let Ee;const Fe=i(Pe)(Ee||(Ee=(e=>e)`
  font-size: 1.8rem;
  line-height: 3rem;
`)),Qe=({exercise:n})=>r(t,{children:[n.context&&e(u,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(u,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),We=t=>{let{numberOfQuestions:n,questionNumber:a,step:i,exercise:s,canAnswer:l,needsSaved:d}=t,c=p(t,De);return r(Fe,{step:i,questionNumber:a,numberOfQuestions:n,children:[e(Qe,{exercise:s}),s.questions.map(e=>o(Re,m({},c,i,{exercise_uid:s.uid,key:e.id,question:e,questionNumber:a,choicesEnabled:l,canAnswer:l,needsSaved:d,canUpdateCurrentStep:l,displaySolution:!0,answerId:i.answer_id})))]})};export{g as Answer,x as AnswersTable,We as Exercise,pe as FreeResponseInput,ce as FreeResponseTextArea,Se as InnerStepCard,Ae as OuterStepCard,F as Question,Q as QuestionHtml,He as StepCard,Pe as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
