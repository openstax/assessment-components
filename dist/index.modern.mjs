import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime.js";import n from"classnames";import a,{createElement as o}from"react";import i,{css as s}from"styled-components";import l from"scroll-to-element";import{faBookOpen as d}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as c}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as p}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{FontAwesomeIcon as m}from"@fortawesome/react-fontawesome";import{BulletList as h}from"react-content-loader";const u="abcdefghijklmnopqrstuvwxyz",b=function(e,r){return e.id===r};function g(e){const r=e.trim().match(/\b[-?(\w+)?]+\b/gi);return r?r.length:0}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},w.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r.indexOf(t=o[n])>=0||(a[t]=e[t]);return a}const x=["html","component","block"],$=r=>{let{html:t,component:n,block:o=!1}=r,i=f(r,x);return void 0!==n?a.cloneElement(n,w({html:t},i)):e(o?"div":"span",w({dangerouslySetInnerHTML:{__html:t}},i))},v=r=>e("aside",{children:e($,{component:r.contentRenderer,className:n("question-feedback-content","has-html",r.className),html:r.children,block:!0})}),k=t=>{const a=n("question-feedback",t.position||"bottom");return r("aside",{className:a,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(v,w({},t,{children:t.children}))]})},y=a=>{const{type:o,iter:i,answer:s,disabled:l,onKeyPress:d,qid:c,chosenAnswer:p,correctAnswerId:m,incorrectAnswerId:h,hasCorrectAnswer:g,answered_count:w,contentRenderer:f,show_all_feedback:x,tableFeedbackEnabled:k}=a;let y,_,N;const C=((e,r)=>Boolean((r||[]).find(r=>r==e.id)))(s,p),q=function(e,r){if(!e.id&&!r)return e.isCorrect;let t=e.id===r;return null!=e.correctness&&(t="1.0"===e.correctness),t}(s,m),S=b(s,h),A=e("div",{className:"correct-incorrect",children:q&&a.correctIncorrectIcon}),O=n("answers-answer",{disabled:l,"answer-checked":C,"answer-correct":q&&"student-mpp"!==o,"answer-incorrect":h&&b(s,h)});let I,T,H=`${C?"Selected ":""}Choice ${u[i]}`;g&&(H+=`(${q?"Correct":"Incorrect"} Answer)`),H+=":";const j=()=>I&&I(s);if(g||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:I}=a),I&&(T=e("input",{type:"radio",className:"answer-input-box",checked:C,id:`${c}-option-${i}`,name:`${c}-options`,onChange:j,disabled:l})),x&&s.feedback_html&&!k&&(_=e(v,{contentRenderer:f,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===o){let t=0;s.selected_count&&w&&(t=Math.round(s.selected_count/w*100)),N=e("span",{className:"selected-count","data-percent":`${t}`,children:s.selected_count}),y=r("div",{className:"review-wrapper",children:[r("div",{className:n("review-count",{green:q,red:!q}),children:[N,e("span",{className:n("letter",{green:q,red:!q}),children:u[i]})]}),r("div",{className:"answer-answer",children:[e($,{className:"answer-content",component:f,html:s.content_html}),_]})]})}else y=r(t,{children:["teacher-preview"===o&&A,N,T,r("label",{onKeyPress:d,htmlFor:`${c}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:j,"aria-label":H,className:"answer-letter",disabled:l||S,"data-test-id":`answer-choice-${u[i]}`,children:u[i]})}),r("div",{className:"answer-answer",children:[e($,{className:"answer-content",component:f,html:s.content_html}),_]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:O,children:y})})};y.displayName="OSAnswer";const _="student",N=t=>{let n=0;const{question:a,hideAnswers:o,type:i=_,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:m,correct_answer_feedback_html:h,show_all_feedback:u=!1,tableFeedbackEnabled:b,hasCorrectAnswer:g,onChangeAnswer:f,onKeyPress:x,answerIdOrder:$,instructions:v}=t;if(o)return null;const{id:N}=a,C=[],q={qid:N||"auto-"+n++,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:g,chosenAnswer:[p],onChangeAnswer:f,type:i,answered_count:s,disabled:!l,show_all_feedback:u,tableFeedbackEnabled:b,onKeyPress:x},S=($?(e=>{const{answers:r}=a;return r.slice().sort((r,t)=>e.indexOf(r.id)-e.indexOf(t.id))})($):a.answers).map((r,t)=>{const n={answer:w({},r,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:t,key:`${q.qid}-option-${t}`},o=Object.assign({},n,q);return u&&r.feedback_html&&b?C.push({index:t,html:r.feedback_html}):r.id===c&&m?C.push({index:t,html:m}):r.id===d&&h&&C.push({index:t,html:h}),e(y,w({},o))});return C.forEach((r,n)=>{const a=r.index+n+1;S.splice(a,0,e(k,{contentRenderer:t.contentRenderer,children:r.html},a))}),r("div",{className:"answers-table",children:[v,S]})};let C,q,S,A,O,I,T,H,j,P,R,E,z,B,F=e=>e;const L={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},Q={palette:L,answer:{color:L.lightBlue,correct:{color:L.green,background:"#77af42"},incorrect:{color:L.red,background:L.red},checked:L.lightBlue,hover:L.neutralDark,label:{color:L.neutral,colorHover:L.neutralDark,colorSelected:L.lightBlue}},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:L.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:L.neutralDark,background:L.neutralLighter}},U=(...e)=>s(C||(C=F`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),D=(...e)=>s(q||(q=F`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),W=(...e)=>s(S||(S=F`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),G={answer:()=>s(O||(O=F`
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
  `),Q.answer.label.color,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",Q.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",Q.palette.white),answerColor:e=>s(I||(I=F`
    color: ${0};
    .answer-letter {
       border-color: ${0};
       background-color: ${0};
       color: ${0};
    }
  `),e.color,e.color,e.background,Q.palette.white),answerChecked:()=>G.answerColor({color:Q.answer.checked,background:Q.answer.checked}),answerCorrect:()=>G.answerColor(Q.answer.correct),answerIncorrect:()=>G.answerColor(Q.answer.incorrect),answerHover:()=>s(T||(T=F`
    color: ${0};
    .answer-letter {
      border-color: ${0};
    }
  `),Q.answer.label.colorHover,Q.answer.label.colorSelected),answerCorrectText:()=>s(H||(H=F`
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
  `),Q.answer.label.color,"3.6rem","3.6rem"),answerCorrectAnswer:()=>s(j||(j=F`
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
  `),Q.answer.correct.color,Q.answer.correct.color,Q.answer.correct.color,G.answerCorrectText(),999,999,G.answerCorrectText(),"3.6rem"),resetText:()=>s(P||(P=F`
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
  `),D(E||(E=F`
      padding: ${0} ${0};
    `),"24px","24px"),U(z||(z=F`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(B||(B=F`
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
  `),G.resetText(),"1px",Q.popover.borderColor,Q.palette.white,"325px","8px","1rem",Q.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",Q.popover.borderColor,"1px",Q.palette.white,"9px","1px","9px","1rem","0.8rem")};let M;const K=i.div(M||(M=(e=>e)`
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
`),G.stepCardPadding(),Q.palette.pale,Q.palette.neutral,Q.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",Q.palette.neutralLighter,Q.palette.neutralLightest,G.answer(),"1rem","3.6rem","1rem","0.1s ease-in-out",G.answerHover(),G.answerChecked(),G.answerChecked(),G.answerIncorrect(),G.answerCorrect(),G.answerCorrectAnswer(),G.answerIncorrect(),G.popover(),"370px","0.9rem","1.1rem"),V=a.forwardRef((t,a)=>{let o,i;const{question:s,correct_answer_id:l,incorrectAnswerId:d,exercise_uid:c,className:p,questionNumber:m,context:h,task:u,hidePreambles:b}=t,{stem_html:g,collaborator_solutions:f=[],formats:x,stimulus_html:v}=s,k=!!l,y=n("openstax-question",p,{"has-correct-answer":k&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(o=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=t,{collaborator_solutions:r=[]}=s;return e&&r&&r.find(e=>void 0!==e.content_html)})()&&(i=r("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e($,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),r(K,{ref:a,className:y,"data-question-number":m,"data-test-id":"question",children:[e(Y,{type:"context",html:h,hidden:b}),e(Y,{type:"stimulus",html:v,hidden:b}),e(Y,{type:"stem",html:g,hidden:b,questionNumber:m}),t.children,e(N,w({},t,{onChangeAnswer:t.onChange,hasCorrectAnswer:k})),i,t.displayFormats?e(J,{formats:x}):void 0,o]})}),Y=r=>{const{html:t="",type:n,hidden:a,questionNumber:o}=r;return!0!==a&&t.length>0?e($,{html:t,"data-question-number":o,className:`question-${n}`,block:!0}):null},J=({formats:t=[]})=>r("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),t.map((r,t)=>e("span",{children:r},t))]}),X=["disabled","isWaiting","waitingText","children"];let Z;const ee=i.button(Z||(Z=(e=>e)`
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
`),Q.button.background,Q.palette.white,Q.button.backgroundHover,Q.button.backgroundActive),re=r=>{const{disabled:t,isWaiting:n,waitingText:a,children:o}=r,i=f(r,X);return e(ee,w({},i,{disabled:n||t,children:n&&a||o}))};let te,ne,ae=e=>e;const oe=i.div(te||(te=ae`
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
`),G.stepCardPadding(),Q.card.body.background,Q.palette.pale,W(ne||(ne=ae`
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
    `)));let ie,se,le,de,ce,pe,me=e=>e;const he=s(ie||(ie=me`
  background-color: #f5e9ea;
`)),ue=i.div(se||(se=me`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),G.stepCardPadding()),be=i.div(le||(le=me`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),ge=i.div(de||(de=me`
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
`),e=>e.hasChildren?"space-between":"flex-end",Q.palette.danger,Q.palette.neutralThin),we=i.textarea(ce||(ce=me`
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
`),Q.palette.neutral,Q.palette.neutralDark,e=>e.isOverWordLimit&&he,e=>e.isOverWordLimit&&s(pe||(pe=me`
    border: 2px solid ${0};
  `),Q.palette.danger),e=>e.readOnly&&Q.palette.neutralCool);we.displayName="OSFreeResponseTextArea";const fe=r=>e(re,w({},r,{children:"Cancel"})),xe=t=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,pointsChildren:l,question:d,questionNumber:c,saveHandler:p,submitBtnLabel:m,textHasChanged:h,wordLimit:u}=t,b=g(o)>u,f={};return c&&(f["data-question-number"]=c),r(ue,{"data-test-id":"student-free-response",children:[r("div",{className:"step-card-body",children:[e(be,w({},f,{children:d.stem_html&&e(Y,{type:"stem",html:d.stem_html,hidden:!1})})),e(we,w({},t,{isOverWordLimit:b,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),r(ge,{hasChildren:!!i,children:[i,r("div",{children:[r("span",{children:[g(o)," words"]}),b&&r("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),r(oe,{children:[r("div",{className:"points",children:[r("strong",{children:["Points: ",n]}),l]}),r("div",{className:"controls",children:[e(fe,{disabled:!h,onClick:a}),e(re,{"data-test-id":"submit-answer-btn",disabled:s||b,onClick:p,children:m})]})]})]})};xe.displayName="OSFreeResponse";const $e=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],ve=["step","questionNumber","numberOfQuestions","children","className"];let ke,ye,_e,Ne,Ce,qe,Se,Ae,Oe,Ie,Te,He,je=e=>e;const Pe=i.div(ke||(ke=je`
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
`),Q.palette.light,W(ye||(ye=je`
    max-width: 1000px;
  `))),Re=i.div(_e||(_e=je`
  padding: 2rem;

  ${0}
`),U(Ne||(Ne=je`
    padding: 0;
  `))),Ee=i.div(Ce||(Ce=je`
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
`),Q.card.header.background,Q.palette.gray,W(qe||(qe=je`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),D(Se||(Se=je`
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
  `),"24px","24px"),U(Ae||(Ae=je`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));Ee.displayName="StepCardHeader";const ze=i.div(Oe||(Oe=je`
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
`),G.stepCardPadding(),Q.card.body.background,((...e)=>s(A||(A=F`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(Ie||(Ie=je`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),W(Te||(Te=je`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),U(He||(He=je`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),Be=t=>{let{questionNumber:n,numberOfQuestions:a,showTotalQuestions:o,stepType:i,isHomework:s,availablePoints:l,unpadded:d,className:c,children:p,questionId:m,multipartBadge:h,leftHeaderChildren:u,rightHeaderChildren:b,headerTitleChildren:g}=t,x=f(t,$e);return r(Re,w({},x,{children:[h,r(Pe,{className:c,children:[n&&s&&"exercise"===i&&r(Ee,{children:[r("div",{children:[u,r("div",{className:"question-info",children:[g,e("span",{children:a>1?`Questions ${n} - ${n+a-1}`:`Question ${n}`}),o?r("span",{className:"num-questions",children:[" / ",a]}):null,e("span",{className:"separator",children:"|"}),r("span",{className:"question-id",children:["ID: ",m]})]})]}),r("div",{children:[l&&r("div",{className:"points",children:[l," Points"]}),b]})]}),e(ze,{unpadded:d,children:p})]})]}))};Be.displayName="OSStepCard";const Fe=r=>{let{step:t,questionNumber:a,numberOfQuestions:o,children:i,className:s}=r,l=f(r,ve);return e(Be,w({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:"type"in t?t.type:"exercise",isHomework:!("task"in t)||void 0===t.task||"homework"===t.task.type,"data-task-step-id":t.id,availablePoints:t.available_points,className:n(`${"type"in t?t.type:"exercise"}-step`,s),questionId:t.uid,children:i}))};Fe.displayName="OSTaskStepCard";let Le,Qe,Ue,De,We,Ge=e=>e;const Me=i.div(Le||(Le=Ge`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
`),Q.palette.mediumBlue),Ke=i.div(Qe||(Qe=Ge`
  position: relative;
  display: flex;
`)),Ve=i.div(Ue||(Ue=Ge`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),G.popover),Ye=t=>e(Me,w({},t.wrapperProps,{children:r(Ke,{children:[t.children,r(Ve,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:t.text})]})]})})),Je=i.div(De||(De=Ge`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),Xe=i(m)(We||(We=Ge`
  color: ${0};
  height: 1em;
`),Q.palette.darkGray),Ze=({exercise:r,topicUrl:t,errataUrl:n})=>{const a=[],o=r.questions.every(e=>e.answers.length>0);let i;return o&&r.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":o&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),t&&a.push(e(Ye,{text:"View topic in textbook",wrapperProps:{as:"a",href:t,target:"_blank"},children:e(Xe,{icon:d})},"topic")),a.push(e(Ye,{text:"Suggest a correction",wrapperProps:{as:"a",href:n,target:"_blank"},children:e(Xe,{icon:c})},"errata")),i&&a.push(e(Ye,{text:i,children:e(Xe,{icon:p,height:"16px",width:"16px"})},"type")),e(Je,{children:a})},er=({count:e})=>r("div",{children:[e," attempt",1===e?"":"s"," left"]}),rr=({published_comments:t})=>t?r("div",{children:[e("strong",{children:"Feedback:"})," ",t]}):null,tr=r=>e(re,w({},r,{waitingText:"Saving…",isWaiting:r.isWaiting,"data-test-id":"submit-answer-btn",children:0==r.attempt_number?"Submit":"Re-submit"})),nr=r=>e(re,w({},r,{"data-test-id":"continue-btn",children:r.canUpdateCurrentStep?"Continue":"Next"})),ar=({free_response:r})=>r?e(t,{children:e("div",{className:"free-response",children:r})}):null,or=a.forwardRef((t,n)=>{const{question:a,task:o,answer_id_order:i,onAnswerChange:s,feedback_html:l,correct_answer_feedback_html:d,is_completed:c,correct_answer_id:p,incorrectAnswerId:m,choicesEnabled:h,questionNumber:u,answer_id:b,hasMultipleAttempts:g,attempts_remaining:w,published_comments:f,detailedSolution:x,canAnswer:v,needsSaved:k,attempt_number:y,apiIsPending:_,onAnswerSave:N,onNextStep:C,canUpdateCurrentStep:q,displaySolution:S,available_points:A,free_response:O,show_all_feedback:I,tableFeedbackEnabled:T}=t;return r("div",{"data-test-id":"student-exercise-question",children:[e(V,{ref:n,task:o,question:a,answerIdOrder:i,choicesEnabled:h,answer_id:b,questionNumber:u,onChange:s,feedback_html:l,correct_answer_feedback_html:d,correct_answer_id:c?p:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:S,show_all_feedback:I,tableFeedbackEnabled:T,children:e(ar,{free_response:O})}),e(oe,{className:"step-card-footer",children:r("div",{className:"step-card-footer-inner",children:[r("div",{className:"points",children:[r("strong",{children:["Points: ",A]}),e("span",{className:"attempts-left",children:g&&w>0&&e(er,{count:w})}),e(rr,{published_comments:f}),x&&r("div",{children:[e("strong",{children:"Detailed solution:"})," ",e($,{html:x})]})]}),e("div",{className:"controls",children:v&&k?e(tr,{disabled:_||!b,isWaiting:_,attempt_number:y,onClick:()=>{return N("string"==typeof(e=a.id)?parseInt(e,10):e);var e}}):e(nr,{onClick:()=>C(u-1),canUpdateCurrentStep:q})})]})})]})}),ir=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"];let sr;const lr=i(Fe)(sr||(sr=(e=>e)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`)),dr=({exercise:n})=>r(t,{children:[n.context&&e($,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e($,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),cr=t=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:d,show_all_feedback:c,scrollToQuestion:p}=t,m=f(t,ir);const h="feedback_html"in s,u=a.useRef([]);return a.useEffect(()=>{const e=p&&u.current[p];e&&l(e)},[p,d]),r(lr,{step:s,questionNumber:i,numberOfQuestions:h?n:d.questions.length,rightHeaderChildren:m.showExerciseIcons?e(Ze,{exercise:d,topicUrl:m.topicUrl,errataUrl:m.errataUrl}):null,showTotalQuestions:h,children:[e(dr,{exercise:d}),d.questions.map((e,r)=>{var t;const n=w({},h?s:m.questionStates[e.id]);return o(or,w({},m,n,{ref:e=>u.current[i+r]=e,exercise_uid:d.uid,key:e.id,question:e,questionNumber:i+r,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(t=n.solution)?void 0:t.content_html,show_all_feedback:c,tableFeedbackEnabled:c&&!h,canUpdateCurrentStep:"canUpdateCurrentStep"in m?m.canUpdateCurrentStep:!(r+1===d.questions.length)}))})]})};let pr,mr,hr,ur,br,gr,wr,fr,xr=e=>e;const $r=i.div(pr||(pr=xr`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${0}
`),U(mr||(mr=xr`
    padding: 0;
  `))),vr=i.span(hr||(hr=xr`
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
`),Q.palette.pale,U(ur||(ur=xr`
    &::after {
      width: 3.3rem;
    }
  `))),kr=i.button(fr||(fr=xr`
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
`),e=>((e,r)=>{switch(e){case"isCorrect":return s(br||(br=xr`
        color: ${0};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${0};
        box-shadow: ${0};
      `),Q.palette.white,Q.palette.darkGreen,r?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return s(gr||(gr=xr`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),Q.palette.white,Q.palette.lightRed,Q.palette.darkRed,r?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return s(wr||(wr=xr`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),Q.palette.darkGray,r?Q.palette.white:Q.palette.neutralLight,r?Q.palette.darkGray:Q.palette.neutralLight,r?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}})(e.variant,e.isActive)),yr=({index:r,isActive:t,step:n,goToStep:a})=>e(vr,{children:e(kr,{variant:n.variant,isActive:t,onClick:()=>a(r,n),children:r+1})}),_r=({steps:r,activeIndex:t,goToStep:n})=>e($r,{children:r.map((r,a)=>e(yr,{index:a,isActive:a===t,step:r,goToStep:n},a))});let Nr;const Cr=i.div(Nr||(Nr=(e=>e)`
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
`),Q.palette.light),qr=()=>e(Cr,{children:e(h,{uniqueKey:"OSLoader"})});export{y as Answer,N as AnswersTable,cr as Exercise,xe as FreeResponseInput,we as FreeResponseTextArea,Pe as InnerStepCard,qr as Loader,Re as OuterStepCard,_r as ProgressBar,yr as ProgressBarItem,V as Question,Y as QuestionHtml,Be as StepCard,kr as StyledItem,Fe as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
