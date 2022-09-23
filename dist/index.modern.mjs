import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime.js";import n from"classnames";import a,{createElement as o}from"react";import i,{css as s}from"styled-components";import l from"scroll-to-element";const d="abcdefghijklmnopqrstuvwxyz",c=function(e,r){return e.id===r};function p(e){const r=e.trim().match(/\b[-?(\w+)?]+\b/gi);return r?r.length:0}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}function h(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r.indexOf(t=o[n])>=0||(a[t]=e[t]);return a}const u=["html","component","block"],b=r=>{let{html:t,component:n,block:o=!1}=r,i=h(r,u);return void 0!==n?a.cloneElement(n,m({html:t},i)):e(o?"div":"span",m({dangerouslySetInnerHTML:{__html:t}},i))},g=r=>e("aside",{children:e(b,{component:r.contentRenderer,className:n("question-feedback-content","has-html",r.className),html:r.children,block:!0})}),w=t=>{const a=n("question-feedback",t.position||"bottom");return r("aside",{className:a,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(g,m({},t,{children:t.children}))]})},f=a=>{const{type:o,iter:i,answer:s,disabled:l,onKeyPress:p,qid:m,chosenAnswer:h,correctAnswerId:u,incorrectAnswerId:w,hasCorrectAnswer:f,answered_count:x,contentRenderer:$,show_all_feedback:k}=a;let v,y,_;const N=((e,r)=>Boolean((r||[]).find(r=>r==e.id)))(s,h),C=function(e,r){if(!e.id&&!r)return e.isCorrect;let t=e.id===r;return null!=e.correctness&&(t="1.0"===e.correctness),t}(s,u),q=c(s,w),S=e("div",{className:"correct-incorrect",children:C&&a.correctIncorrectIcon}),A=n("answers-answer",{disabled:l,"answer-checked":N,"answer-correct":C&&"student-mpp"!==o,"answer-incorrect":w&&c(s,w)});let I,O,T=`${N?"Selected ":""}Choice ${d[i]}`;f&&(T+=`(${C?"Correct":"Incorrect"} Answer)`),T+=":";const H=()=>I&&I(s);if(f||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:I}=a),I&&(O=e("input",{type:"radio",className:"answer-input-box",checked:N,id:`${m}-option-${i}`,name:`${m}-options`,onChange:H,disabled:l})),k&&s.feedback_html&&(y=e(g,{contentRenderer:$,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===o){let t=0;s.selected_count&&x&&(t=Math.round(s.selected_count/x*100)),_=e("span",{className:"selected-count","data-percent":`${t}`,children:s.selected_count}),v=r("div",{className:"review-wrapper",children:[r("div",{className:n("review-count",{green:C,red:!C}),children:[_,e("span",{className:n("letter",{green:C,red:!C}),children:d[i]})]}),r("div",{className:"answer-answer",children:[e(b,{className:"answer-content",component:$,html:s.content_html}),y]})]})}else v=r(t,{children:["teacher-preview"===o&&S,_,O,r("label",{onKeyPress:p,htmlFor:`${m}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:H,"aria-label":T,className:"answer-letter",disabled:l||q,"data-test-id":`answer-choice-${d[i]}`,children:d[i]})}),r("div",{className:"answer-answer",children:[e(b,{className:"answer-content",component:$,html:s.content_html}),y]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:A,children:v})})};f.displayName="OSAnswer";const x="student",$=t=>{let n=0;const{question:a,hideAnswers:o,type:i=x,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:h,correct_answer_feedback_html:u,show_all_feedback:b=!1,hasCorrectAnswer:g,onChangeAnswer:$,onKeyPress:k,answerIdOrder:v,instructions:y}=t;if(o)return null;const{id:_}=a,N=[],C={qid:_||"auto-"+n++,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:g,chosenAnswer:[p],onChangeAnswer:$,type:i,answered_count:s,disabled:!l,show_all_feedback:b,onKeyPress:k},q=(v?(e=>{const{answers:r}=a;return r.slice().sort((r,t)=>e.indexOf(r.id)-e.indexOf(t.id))})(v):a.answers).map((r,t)=>{const n={answer:m({},r,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:t,key:`${C.qid}-option-${t}`},o=Object.assign({},n,C);return r.id===c&&h?N.push({index:t,html:h}):r.id===d&&u&&N.push({index:t,html:u}),e(f,m({},o))});return N.forEach((r,n)=>{const a=r.index+n+1;q.splice(a,0,e(w,{contentRenderer:t.contentRenderer,children:r.html},a))}),r("div",{className:"answers-table",children:[y,q]})};let k,v,y,_,N,C,q,S,A,I,O,T,H,P=e=>e;const j={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},L={palette:j,answer:{color:j.lightBlue,correct:{color:j.green,background:"#77af42"},incorrect:{color:j.red,background:j.red},checked:j.lightBlue,hover:j.neutralDark,label:{color:j.neutralMedium,colorHover:j.neutralDark,colorSelected:j.lightBlue},feedback:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",popover:{borderColor:"rgba(0, 0, 0, 0.2)"}}},card:{background:"#daf3f8"},button:{background:j.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:j.neutralDark,background:j.neutralLighter}},R=(...e)=>s(k||(k=P`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),z=(...e)=>s(v||(v=P`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),B=(...e)=>s(y||(y=P`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),E={answer:()=>s(N||(N=P`
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
  `),L.answer.label.color,"4rem","4rem","4rem","4rem","4rem",L.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",L.palette.white),answerColor:e=>s(C||(C=P`
    color: ${0};
    .answer-letter {
       border-color: ${0};
       background-color: ${0};
       color: ${0};
    }
  `),e.color,e.color,e.background,L.palette.white),answerChecked:()=>E.answerColor({color:L.answer.checked,background:L.answer.checked}),answerCorrect:()=>E.answerColor(L.answer.correct),answerIncorrect:()=>E.answerColor(L.answer.incorrect),answerHover:()=>s(q||(q=P`
    color: ${0};
    .answer-letter {
      border-color: ${0};
    }
  `),L.answer.label.colorHover,L.answer.label.colorSelected),answerCorrectText:()=>s(S||(S=P`
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
  `),L.answer.label.color,"4rem","4rem"),answerCorrectAnswer:()=>s(A||(A=P`
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
          margin-left: 0;
        }
      }
    }
  `),L.answer.correct.color,L.answer.correct.color,L.answer.correct.color,E.answerCorrectText(),999,999,E.answerCorrectText(),"4rem"),resetText:()=>s(I||(I=P`
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
  `),z(T||(T=P`
      padding: ${0} ${0};
    `),"24px","24px"),R(H||(H=P`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px"))};let D;const F=i.div(D||(D=(e=>e)`
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
`),E.stepCardPadding(),L.palette.pale,L.palette.neutral,L.palette.neutralLightBlue,"1rem","2.5rem","1.5rem","1rem","1.5rem","1rem",L.palette.neutralLighter,L.palette.neutralLightest,E.answer(),"1rem","1.5rem","0.1s ease-in-out",E.answerHover(),E.answerChecked(),E.answerChecked(),E.answerIncorrect(),E.answerCorrect(),E.answerCorrectAnswer(),E.answerIncorrect(),E.resetText(),"1px",L.answer.feedback.popover.borderColor,L.palette.white,"370px","15px","1rem","1rem",L.palette.neutral,"20px","15px","15px","1px","20px","15px","20px",L.answer.feedback.popover.borderColor,"1px",L.palette.white,"2rem","2rem"),Q=t=>{let a,o;const{question:i,correct_answer_id:s,incorrectAnswerId:l,exercise_uid:d,className:c,questionNumber:p,context:h,task:u,hidePreambles:g}=t,{stem_html:w,collaborator_solutions:f=[],formats:x,stimulus_html:k}=i,v=!!s,y=n("openstax-question",c,{"has-correct-answer":v&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!l});return null!=d&&(a=e("div",{className:"exercise-uid",children:d})),(()=>{const{displaySolution:e}=t,{collaborator_solutions:r=[]}=i;return e&&r&&r.find(e=>void 0!==e.content_html)})()&&(o=r("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(b,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),r(F,{className:y,"data-question-number":p,"data-test-id":"question",children:[e(U,{type:"context",html:h,hidden:g}),e(U,{type:"stimulus",html:k,hidden:g}),e(U,{type:"stem",html:w,hidden:g,questionNumber:p}),t.children,e($,m({},t,{onChangeAnswer:t.onChange,hasCorrectAnswer:v})),o,t.displayFormats?e(W,{formats:x}):void 0,a]})},U=r=>{const{html:t="",type:n,hidden:a,questionNumber:o}=r;return!0!==a&&t.length>0?e(b,{html:t,"data-question-number":o,className:`question-${n}`,block:!0}):null},W=({formats:t=[]})=>r("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),t.map((r,t)=>e("span",{children:r},t))]}),M=["disabled","isWaiting","waitingText","children"];let G;const K=i.button(G||(G=(e=>e)`
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
`),L.button.background,L.palette.white,L.button.backgroundHover,L.button.backgroundActive),V=r=>{const{disabled:t,isWaiting:n,waitingText:a,children:o}=r,i=h(r,M);return e(K,m({},i,{disabled:n||t,children:n&&a||o}))};let Y,J,X=e=>e;const Z=i.div(Y||(Y=X`
    ${0}
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

    .step-card-footer-inner {
        border-top: 1px solid ${0};
        padding-top: 32px;
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
`),E.stepCardPadding(),L.palette.pale,B(J||(J=X`
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
    `)));let ee,re,te,ne,ae,oe,ie=e=>e;const se=s(ee||(ee=ie`
  background-color: #f5e9ea;
`)),le=i.div(re||(re=ie`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),E.stepCardPadding()),de=i.div(te||(te=ie`
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
`),e=>e.hasChildren?"space-between":"flex-end",L.palette.danger,L.palette.neutralThin),pe=i.textarea(ae||(ae=ie`
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
`),L.palette.neutral,L.palette.neutralDark,e=>e.isOverWordLimit&&se,e=>e.isOverWordLimit&&s(oe||(oe=ie`
    border: 2px solid ${0};
  `),L.palette.danger),e=>e.readOnly&&L.palette.neutralCool);pe.displayName="OSFreeResponseTextArea";const me=r=>e(V,m({},r,{children:"Cancel"})),he=t=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,pointsChildren:l,question:d,questionNumber:c,saveHandler:h,submitBtnLabel:u,textHasChanged:b,wordLimit:g}=t,w=p(o)>g,f={};return c&&(f["data-question-number"]=c),r(le,{"data-test-id":"student-free-response",children:[r("div",{className:"step-card-body",children:[e(de,m({},f,{children:d.stem_html&&e(U,{type:"stem",html:d.stem_html,hidden:!1})})),e(pe,m({},t,{isOverWordLimit:w,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),r(ce,{hasChildren:!!i,children:[i,r("div",{children:[r("span",{children:[p(o)," words"]}),w&&r("span",{className:"word-limit-error-info",children:["Maximum ",g," words"]})]})]})]}),r(Z,{children:[r("div",{className:"points",children:[r("strong",{children:["Points: ",n]}),l]}),r("div",{className:"controls",children:[e(me,{disabled:!b,onClick:a}),e(V,{"data-test-id":"submit-answer-btn",disabled:s||w,onClick:h,children:u})]})]})]})};he.displayName="OSFreeResponse";const ue=["questionNumber","numberOfQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],be=["step","questionNumber","numberOfQuestions","children","className"];let ge,we,fe,xe,$e,ke,ve,ye,_e,Ne,Ce,qe,Se=e=>e;const Ae=i.div(ge||(ge=Se`
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
`),L.palette.light,B(we||(we=Se`
    max-width: 1000px;
    min-width: 750px;
  `))),Ie=i.div(fe||(fe=Se`
  padding: 2rem;

  ${0}
`),z(xe||(xe=Se`
    padding: 0;
  `))),Oe=i.div($e||($e=Se`
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
`),L.card.background,L.palette.gray,B(ke||(ke=Se`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),z(ve||(ve=Se`
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
  `),"24px","24px"),R(ye||(ye=Se`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));Oe.displayName="StepCardHeader";const Te=i.div(_e||(_e=Se`
  .step-card-body {
    ${0}

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
`),E.stepCardPadding(),((...e)=>s(_||(_=P`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(Ne||(Ne=Se`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),B(Ce||(Ce=Se`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),R(qe||(qe=Se`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),He=t=>{let{questionNumber:n,numberOfQuestions:a,stepType:o,isHomework:i,availablePoints:s,unpadded:l,className:d,children:c,questionId:p,multipartBadge:u,leftHeaderChildren:b,rightHeaderChildren:g,headerTitleChildren:w}=t,f=h(t,ue);return r(Ie,m({},f,{children:[u,r(Ae,{className:d,children:[n&&i&&"exercise"===o&&r(Oe,{children:[r("div",{children:[b,r("div",{className:"question-info",children:[w,e("span",{children:a>1?`Questions ${n} - ${n+a-1}`:`Question ${n}`}),r("span",{className:"num-questions",children:[" / ",a]}),e("span",{className:"separator",children:"|"}),r("span",{className:"question-id",children:["ID: ",p]})]})]}),r("div",{children:[s&&r("div",{className:"points",children:[s," Points"]}),g]})]}),e(Te,{unpadded:l,children:c})]})]}))};He.displayName="OSStepCard";const Pe=r=>{let{step:t,questionNumber:a,numberOfQuestions:o,children:i,className:s}=r,l=h(r,be);return e(He,m({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:"type"in t?t.type:"exercise",isHomework:!("task"in t)||void 0===t.task||"homework"===t.task.type,"data-task-step-id":t.id,availablePoints:t.available_points,className:n(`${"type"in t?t.type:"exercise"}-step`,s),questionId:t.uid,children:i}))};Pe.displayName="OSTaskStepCard";const je=({count:e})=>r("div",{children:[e," attempt",1===e?"":"s"," left"]}),Le=({published_comments:t})=>t?r("div",{children:[e("strong",{children:"Feedback:"})," ",t]}):null,Re=r=>e(V,m({},r,{waitingText:"Saving…",isWaiting:r.isWaiting,"data-test-id":"submit-answer-btn",children:0==r.attempt_number?"Submit":"Re-submit"})),ze=r=>e(V,{onClick:r.onNextStep,"data-test-id":"continue-btn",children:r.canUpdateCurrentStep?"Continue":"Next"}),Be=({free_response:r})=>r?e(t,{children:e("div",{className:"free-response",children:r})}):null,Ee=t=>{const{question:n,task:a,answer_id_order:o,onAnswerChange:i,feedback_html:s,correct_answer_feedback_html:l,is_completed:d,correct_answer_id:c,incorrectAnswerId:p,choicesEnabled:m,questionNumber:h,answer_id:u,hasMultipleAttempts:g,attempts_remaining:w,published_comments:f,detailedSolution:x,canAnswer:$,needsSaved:k,attempt_number:v,apiIsPending:y,onAnswerSave:_,onNextStep:N,canUpdateCurrentStep:C,displaySolution:q,available_points:S,free_response:A,show_all_feedback:I}=t;return r("div",{"data-test-id":"student-exercise-question",children:[e(Q,{task:a,question:n,answerIdOrder:o,choicesEnabled:m,answer_id:u,questionNumber:h,onChange:i,feedback_html:s,correct_answer_feedback_html:l,correct_answer_id:d?c:null,incorrectAnswerId:p,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:q,show_all_feedback:I,children:e(Be,{free_response:A})}),e(Z,{className:"step-card-footer",children:r("div",{className:"step-card-footer-inner",children:[r("div",{className:"points",children:[r("strong",{children:["Points: ",S]}),e("span",{className:"attempts-left",children:g&&w>0&&e(je,{count:w})}),e(Le,{published_comments:f}),x&&r("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(b,{html:x})]})]}),e("div",{className:"controls",children:$&&k?e(Re,{disabled:y||!u,isWaiting:y,attempt_number:v,onClick:()=>{return _("string"==typeof(e=n.id)?parseInt(e,10):e);var e}}):e(ze,{onNextStep:N,canUpdateCurrentStep:C})})]})})]})},De=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"];let Fe;const Qe=i(Pe)(Fe||(Fe=(e=>e)`
  font-size: 1.8rem;
  line-height: 3rem;
`)),Ue=({exercise:n})=>r(t,{children:[n.context&&e(b,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(b,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),We=t=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:d,show_all_feedback:c,scrollToQuestion:p}=t,u=h(t,De);const b="feedback_html"in s;return a.useEffect(()=>{const e=document.querySelector(`.openstax-question[data-question-number="${p}"]`);e&&l(e)},[p]),r(Qe,{step:s,questionNumber:i,numberOfQuestions:b?n:d.questions.length,children:[e(Ue,{exercise:d}),d.questions.map((e,r)=>{var t;const n=m({},b?s:u.questionStates[e.id]);return o(Ee,m({},u,n,{exercise_uid:d.uid,key:e.id,question:e,questionNumber:i+r,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(t=n.solution)?void 0:t.content_html,show_all_feedback:c,canUpdateCurrentStep:"canUpdateCurrentStep"in u?u.canUpdateCurrentStep:!(r+1===d.questions.length)}))})]})};let Me,Ge,Ke,Ve,Ye,Je,Xe,Ze,er=e=>e;const rr=i.div(Me||(Me=er`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${0}
`),R(Ge||(Ge=er`
    padding: 0;
  `))),tr=i.span(Ke||(Ke=er`
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
`),L.palette.pale,R(Ve||(Ve=er`
    &::after {
      width: 3.3rem;
    }
  `))),nr=i.button(Ze||(Ze=er`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  margin: 0 0.3rem;
  font-weight: bold;
  cursor: pointer;
  ${0}
`),e=>((e,r)=>{switch(e){case"isCorrect":return s(Ye||(Ye=er`
        color: ${0};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${0};
        box-shadow: ${0};
      `),L.palette.white,L.palette.darkGreen,r?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return s(Je||(Je=er`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),L.palette.white,L.palette.lightRed,L.palette.darkRed,r?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return s(Xe||(Xe=er`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),L.palette.darkGray,r?L.palette.white:L.palette.neutralLight,r?L.palette.darkGray:L.palette.neutralLight,r?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}})(e.variant,e.isActive)),ar=({index:r,isActive:t,step:n,goToStep:a})=>e(tr,{children:e(nr,{variant:n.variant,isActive:t,onClick:()=>a(r,n),children:r+1})}),or=({steps:r,activeIndex:t,goToStep:n})=>e(rr,{children:r.map((r,a)=>e(ar,{index:a,isActive:a===t,step:r,goToStep:n},a))});export{f as Answer,$ as AnswersTable,We as Exercise,he as FreeResponseInput,pe as FreeResponseTextArea,Ae as InnerStepCard,Ie as OuterStepCard,or as ProgressBar,ar as ProgressBarItem,Q as Question,U as QuestionHtml,He as StepCard,nr as StyledItem,Pe as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
