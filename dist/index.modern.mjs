import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime.js";import n from"classnames";import o,{createElement as a}from"react";import i,{css as s}from"styled-components";import l from"scroll-to-element";import{faBookOpen as d}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as c}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as p}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{FontAwesomeIcon as m}from"@fortawesome/react-fontawesome";const h="abcdefghijklmnopqrstuvwxyz",u=function(e,r){return e.id===r};function b(e){const r=e.trim().match(/\b[-?(\w+)?]+\b/gi);return r?r.length:0}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g.apply(this,arguments)}function w(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}const f=["html","component","block"],x=r=>{let{html:t,component:n,block:a=!1}=r,i=w(r,f);return void 0!==n?o.cloneElement(n,g({html:t},i)):e(a?"div":"span",g({dangerouslySetInnerHTML:{__html:t}},i))},$=r=>e("aside",{children:e(x,{component:r.contentRenderer,className:n("question-feedback-content","has-html",r.className),html:r.children,block:!0})}),k=t=>{const o=n("question-feedback",t.position||"bottom");return r("aside",{className:o,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e($,g({},t,{children:t.children}))]})},v=o=>{const{type:a,iter:i,answer:s,disabled:l,onKeyPress:d,qid:c,chosenAnswer:p,correctAnswerId:m,incorrectAnswerId:b,hasCorrectAnswer:g,answered_count:w,contentRenderer:f,show_all_feedback:k,tableFeedbackEnabled:v}=o;let y,_,N;const C=((e,r)=>Boolean((r||[]).find(r=>r==e.id)))(s,p),q=function(e,r){if(!e.id&&!r)return e.isCorrect;let t=e.id===r;return null!=e.correctness&&(t="1.0"===e.correctness),t}(s,m),S=u(s,b),A=e("div",{className:"correct-incorrect",children:q&&o.correctIncorrectIcon}),I=n("answers-answer",{disabled:l,"answer-checked":C,"answer-correct":q&&"student-mpp"!==a,"answer-incorrect":b&&u(s,b)});let O,T,P=`${C?"Selected ":""}Choice ${h[i]}`;g&&(P+=`(${q?"Correct":"Incorrect"} Answer)`),P+=":";const j=()=>O&&O(s);if(g||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:O}=o),O&&(T=e("input",{type:"radio",className:"answer-input-box",checked:C,id:`${c}-option-${i}`,name:`${c}-options`,onChange:j,disabled:l})),k&&s.feedback_html&&!v&&(_=e($,{contentRenderer:f,children:s.feedback_html},"question-mc-feedback")),"teacher-review"===a){let t=0;s.selected_count&&w&&(t=Math.round(s.selected_count/w*100)),N=e("span",{className:"selected-count","data-percent":`${t}`,children:s.selected_count}),y=r("div",{className:"review-wrapper",children:[r("div",{className:n("review-count",{green:q,red:!q}),children:[N,e("span",{className:n("letter",{green:q,red:!q}),children:h[i]})]}),r("div",{className:"answer-answer",children:[e(x,{className:"answer-content",component:f,html:s.content_html}),_]})]})}else y=r(t,{children:["teacher-preview"===a&&A,N,T,r("label",{onKeyPress:d,htmlFor:`${c}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper",children:e("button",{onClick:j,"aria-label":P,className:"answer-letter",disabled:l||S,"data-test-id":`answer-choice-${h[i]}`,children:h[i]})}),r("div",{className:"answer-answer",children:[e(x,{className:"answer-content",component:f,html:s.content_html}),_]})]})]});return e("div",{className:"openstax-answer",children:e("section",{role:"region",className:I,children:y})})};v.displayName="OSAnswer";const y="student",_=t=>{let n=0;const{question:o,hideAnswers:a,type:i=y,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:m,correct_answer_feedback_html:h,show_all_feedback:u=!1,tableFeedbackEnabled:b,hasCorrectAnswer:w,onChangeAnswer:f,onKeyPress:x,answerIdOrder:$,instructions:_}=t;if(a)return null;const{id:N}=o,C=[],q={qid:N||"auto-"+n++,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:w,chosenAnswer:[p],onChangeAnswer:f,type:i,answered_count:s,disabled:!l,show_all_feedback:u,tableFeedbackEnabled:b,onKeyPress:x},S=($?(e=>{const{answers:r}=o;return r.slice().sort((r,t)=>e.indexOf(r.id)-e.indexOf(t.id))})($):o.answers).map((r,t)=>{const n={answer:g({},r,{question_id:"string"==typeof o.id?parseInt(o.id,10):o.id}),iter:t,key:`${q.qid}-option-${t}`},a=Object.assign({},n,q);return u&&r.feedback_html&&b?C.push({index:t,html:r.feedback_html}):r.id===c&&m?C.push({index:t,html:m}):r.id===d&&h&&C.push({index:t,html:h}),e(v,g({},a))});return C.forEach((r,n)=>{const o=r.index+n+1;S.splice(o,0,e(k,{contentRenderer:t.contentRenderer,children:r.html},o))}),r("div",{className:"answers-table",children:[_,S]})};let N,C,q,S,A,I,O,T,P,j,H,R,E,z,B=e=>e;const F={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},L={palette:F,answer:{color:F.lightBlue,correct:{color:F.green,background:"#77af42"},incorrect:{color:F.red,background:F.red},checked:F.lightBlue,hover:F.neutralDark,label:{color:F.neutral,colorHover:F.neutralDark,colorSelected:F.lightBlue}},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:F.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:F.neutralDark,background:F.neutralLighter}},Q=(...e)=>s(N||(N=B`@media(max-width: ${0}px) { ${0} }`),600,s(...e)),U=(...e)=>s(C||(C=B`@media(max-width: ${0}px) { ${0} }`),999,s(...e)),D=(...e)=>s(q||(q=B`@media(min-width: ${0}px) { ${0} }`),1e3,s(...e)),W={answer:()=>s(A||(A=B`
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
  `),L.answer.label.color,"2.4rem","2.4rem","2.4rem","2.4rem","2.4rem",L.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",L.palette.white),answerColor:e=>s(I||(I=B`
    color: ${0};
    .answer-letter {
       border-color: ${0};
       background-color: ${0};
       color: ${0};
    }
  `),e.color,e.color,e.background,L.palette.white),answerChecked:()=>W.answerColor({color:L.answer.checked,background:L.answer.checked}),answerCorrect:()=>W.answerColor(L.answer.correct),answerIncorrect:()=>W.answerColor(L.answer.incorrect),answerHover:()=>s(O||(O=B`
    color: ${0};
    .answer-letter {
      border-color: ${0};
    }
  `),L.answer.label.colorHover,L.answer.label.colorSelected),answerCorrectText:()=>s(T||(T=B`
    content: 'correct answer';
    color: ${0};
    margin-left: calc(-3 * ${0});
    width: calc(3 * ${0});
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.2rem;
  `),L.answer.label.color,"2.4rem","2.4rem"),answerCorrectAnswer:()=>s(P||(P=B`
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
  `),L.answer.correct.color,L.answer.correct.color,L.answer.correct.color,W.answerCorrectText(),999,999,W.answerCorrectText(),"2.4rem","2.4rem"),resetText:()=>s(j||(j=B`
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
  `)),stepCardPadding:()=>s(H||(H=B`
    padding: 48px 140px;

    ${0}

    ${0}
  `),U(R||(R=B`
      padding: ${0} ${0};
    `),"24px","24px"),Q(E||(E=B`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>s(z||(z=B`
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
  `),W.resetText(),"1px",L.popover.borderColor,L.palette.white,"325px","8px","1rem",L.palette.neutralThin,"16px","8px","4px","8px","16px","8px","16px",L.popover.borderColor,"1px",L.palette.white,"4px","1px","4px","1rem","0.8rem")};let G;const M=i.div(G||(G=(e=>e)`
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
`),W.stepCardPadding(),L.palette.pale,L.palette.neutral,L.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",L.palette.neutralLighter,L.palette.neutralLightest,W.answer(),"1rem","1rem","0.1s ease-in-out",W.answerHover(),W.answerChecked(),W.answerChecked(),W.answerIncorrect(),W.answerCorrect(),W.answerCorrectAnswer(),W.answerIncorrect(),W.popover(),"370px","0.9rem","1.1rem"),K=o.forwardRef((t,o)=>{let a,i;const{question:s,correct_answer_id:l,incorrectAnswerId:d,exercise_uid:c,className:p,questionNumber:m,context:h,task:u,hidePreambles:b}=t,{stem_html:w,collaborator_solutions:f=[],formats:$,stimulus_html:k}=s,v=!!l,y=n("openstax-question",p,{"has-correct-answer":v&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(a=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=t,{collaborator_solutions:r=[]}=s;return e&&r&&r.find(e=>void 0!==e.content_html)})()&&(i=r("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(x,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),r(M,{ref:o,className:y,"data-question-number":m,"data-test-id":"question",children:[e(V,{type:"context",html:h,hidden:b}),e(V,{type:"stimulus",html:k,hidden:b}),e(V,{type:"stem",html:w,hidden:b,questionNumber:m}),t.children,e(_,g({},t,{onChangeAnswer:t.onChange,hasCorrectAnswer:v})),i,t.displayFormats?e(Y,{formats:$}):void 0,a]})}),V=r=>{const{html:t="",type:n,hidden:o,questionNumber:a}=r;return!0!==o&&t.length>0?e(x,{html:t,"data-question-number":a,className:`question-${n}`,block:!0}):null},Y=({formats:t=[]})=>r("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),t.map((r,t)=>e("span",{children:r},t))]}),J=["disabled","isWaiting","waitingText","children"];let X;const Z=i.button(X||(X=(e=>e)`
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
`),L.button.background,L.palette.white,L.button.backgroundHover,L.button.backgroundActive),ee=r=>{const{disabled:t,isWaiting:n,waitingText:o,children:a}=r,i=w(r,J);return e(Z,g({},i,{disabled:n||t,children:n&&o||a}))};let re,te,ne=e=>e;const oe=i.div(re||(re=ne`
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
`),W.stepCardPadding(),L.card.body.background,L.palette.pale,D(te||(te=ne`
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
    `)));let ae,ie,se,le,de,ce,pe=e=>e;const me=s(ae||(ae=pe`
  background-color: #f5e9ea;
`)),he=i.div(ie||(ie=pe`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),W.stepCardPadding()),ue=i.div(se||(se=pe`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),be=i.div(le||(le=pe`
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
`),e=>e.hasChildren?"space-between":"flex-end",L.palette.danger,L.palette.neutralThin),ge=i.textarea(de||(de=pe`
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
`),L.palette.neutral,L.palette.neutralDark,e=>e.isOverWordLimit&&me,e=>e.isOverWordLimit&&s(ce||(ce=pe`
    border: 2px solid ${0};
  `),L.palette.danger),e=>e.readOnly&&L.palette.neutralCool);ge.displayName="OSFreeResponseTextArea";const we=r=>e(ee,g({},r,{children:"Cancel"})),fe=t=>{const{availablePoints:n,cancelHandler:o,defaultValue:a,infoRowChildren:i,isSubmitDisabled:s,pointsChildren:l,question:d,questionNumber:c,saveHandler:p,submitBtnLabel:m,textHasChanged:h,wordLimit:u}=t,w=b(a)>u,f={};return c&&(f["data-question-number"]=c),r(he,{"data-test-id":"student-free-response",children:[r("div",{className:"step-card-body",children:[e(ue,g({},f,{children:d.stem_html&&e(V,{type:"stem",html:d.stem_html,hidden:!1})})),e(ge,g({},t,{isOverWordLimit:w,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),r(be,{hasChildren:!!i,children:[i,r("div",{children:[r("span",{children:[b(a)," words"]}),w&&r("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),r(oe,{children:[r("div",{className:"points",children:[r("strong",{children:["Points: ",n]}),l]}),r("div",{className:"controls",children:[e(we,{disabled:!h,onClick:o}),e(ee,{"data-test-id":"submit-answer-btn",disabled:s||w,onClick:p,children:m})]})]})]})};fe.displayName="OSFreeResponse";const xe=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],$e=["step","questionNumber","numberOfQuestions","children","className"];let ke,ve,ye,_e,Ne,Ce,qe,Se,Ae,Ie,Oe,Te,Pe=e=>e;const je=i.div(ke||(ke=Pe`
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
`),L.palette.light,D(ve||(ve=Pe`
    max-width: 1000px;
    min-width: 750px;
  `))),He=i.div(ye||(ye=Pe`
  padding: 2rem;

  ${0}
`),U(_e||(_e=Pe`
    padding: 0;
  `))),Re=i.div(Ne||(Ne=Pe`
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
`),L.card.header.background,L.palette.gray,D(Ce||(Ce=Pe`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `)),U(qe||(qe=Pe`
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
  `),"24px","24px"),Q(Se||(Se=Pe`
      font-size: 1.4rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));Re.displayName="StepCardHeader";const Ee=i.div(Ae||(Ae=Pe`
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
`),W.stepCardPadding(),L.card.body.background,((...e)=>s(S||(S=B`@media(max-width: ${0}px) { ${0} }`),600,s(...e)))(Ie||(Ie=Pe`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),D(Oe||(Oe=Pe`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),Q(Te||(Te=Pe`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),ze=t=>{let{questionNumber:n,numberOfQuestions:o,showTotalQuestions:a,stepType:i,isHomework:s,availablePoints:l,unpadded:d,className:c,children:p,questionId:m,multipartBadge:h,leftHeaderChildren:u,rightHeaderChildren:b,headerTitleChildren:f}=t,x=w(t,xe);return r(He,g({},x,{children:[h,r(je,{className:c,children:[n&&s&&"exercise"===i&&r(Re,{children:[r("div",{children:[u,r("div",{className:"question-info",children:[f,e("span",{children:o>1?`Questions ${n} - ${n+o-1}`:`Question ${n}`}),a?r("span",{className:"num-questions",children:[" / ",o]}):null,e("span",{className:"separator",children:"|"}),r("span",{className:"question-id",children:["ID: ",m]})]})]}),r("div",{children:[l&&r("div",{className:"points",children:[l," Points"]}),b]})]}),e(Ee,{unpadded:d,children:p})]})]}))};ze.displayName="OSStepCard";const Be=r=>{let{step:t,questionNumber:o,numberOfQuestions:a,children:i,className:s}=r,l=w(r,$e);return e(ze,g({},l,{unpadded:!0,questionNumber:o,numberOfQuestions:a,stepType:"type"in t?t.type:"exercise",isHomework:!("task"in t)||void 0===t.task||"homework"===t.task.type,"data-task-step-id":t.id,availablePoints:t.available_points,className:n(`${"type"in t?t.type:"exercise"}-step`,s),questionId:t.uid,children:i}))};Be.displayName="OSTaskStepCard";let Fe,Le,Qe,Ue,De,We=e=>e;const Ge=i.div(Fe||(Fe=We`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
`),L.palette.mediumBlue),Me=i.div(Le||(Le=We`
  position: relative;
  display: flex;
`)),Ke=i.div(Qe||(Qe=We`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`),W.popover),Ve=t=>e(Ge,g({},t.wrapperProps,{children:r(Me,{children:[t.children,r(Ke,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:t.text})]})]})})),Ye=i.div(Ue||(Ue=We`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),Je=i(m)(De||(De=We`
  color: ${0};
  height: 1em;
`),L.palette.darkGray),Xe=({exercise:r,topicUrl:t,errataUrl:n})=>{const o=[],a=r.questions.every(e=>e.answers.length>0);let i;return a&&r.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":a&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),t&&o.push(e(Ve,{text:"View topic in textbook",wrapperProps:{as:"a",href:t,target:"_blank"},children:e(Je,{icon:d})},"topic")),o.push(e(Ve,{text:"Suggest a correction",wrapperProps:{as:"a",href:n,target:"_blank"},children:e(Je,{icon:c})},"errata")),i&&o.push(e(Ve,{text:i,children:e(Je,{icon:p,height:"16px",width:"16px"})},"type")),e(Ye,{children:o})},Ze=({count:e})=>r("div",{children:[e," attempt",1===e?"":"s"," left"]}),er=({published_comments:t})=>t?r("div",{children:[e("strong",{children:"Feedback:"})," ",t]}):null,rr=r=>e(ee,g({},r,{waitingText:"Saving…",isWaiting:r.isWaiting,"data-test-id":"submit-answer-btn",children:0==r.attempt_number?"Submit":"Re-submit"})),tr=r=>e(ee,g({},r,{"data-test-id":"continue-btn",children:r.canUpdateCurrentStep?"Continue":"Next"})),nr=({free_response:r})=>r?e(t,{children:e("div",{className:"free-response",children:r})}):null,or=o.forwardRef((t,n)=>{const{question:o,task:a,answer_id_order:i,onAnswerChange:s,feedback_html:l,correct_answer_feedback_html:d,is_completed:c,correct_answer_id:p,incorrectAnswerId:m,choicesEnabled:h,questionNumber:u,answer_id:b,hasMultipleAttempts:g,attempts_remaining:w,published_comments:f,detailedSolution:$,canAnswer:k,needsSaved:v,attempt_number:y,apiIsPending:_,onAnswerSave:N,onNextStep:C,canUpdateCurrentStep:q,displaySolution:S,available_points:A,free_response:I,show_all_feedback:O,tableFeedbackEnabled:T}=t;return r("div",{"data-test-id":"student-exercise-question",children:[e(K,{ref:n,task:a,question:o,answerIdOrder:i,choicesEnabled:h,answer_id:b,questionNumber:u,onChange:s,feedback_html:l,correct_answer_feedback_html:d,correct_answer_id:c?p:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:S,show_all_feedback:O,tableFeedbackEnabled:T,children:e(nr,{free_response:I})}),e(oe,{className:"step-card-footer",children:r("div",{className:"step-card-footer-inner",children:[r("div",{className:"points",children:[r("strong",{children:["Points: ",A]}),e("span",{className:"attempts-left",children:g&&w>0&&e(Ze,{count:w})}),e(er,{published_comments:f}),$&&r("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(x,{html:$})]})]}),e("div",{className:"controls",children:k&&v?e(rr,{disabled:_||!b,isWaiting:_,attempt_number:y,onClick:()=>{return N("string"==typeof(e=o.id)?parseInt(e,10):e);var e}}):e(tr,{onClick:()=>C(u-1),canUpdateCurrentStep:q})})]})})]})}),ar=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"];let ir;const sr=i(Be)(ir||(ir=(e=>e)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`)),lr=({exercise:n})=>r(t,{children:[n.context&&e(x,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(x,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),dr=t=>{let{numberOfQuestions:n,questionNumber:i,step:s,exercise:d,show_all_feedback:c,scrollToQuestion:p}=t,m=w(t,ar);const h="feedback_html"in s,u=o.useRef([]);return o.useEffect(()=>{const e=p&&u.current[p];e&&l(e)},[p,d]),r(sr,{step:s,questionNumber:i,numberOfQuestions:h?n:d.questions.length,rightHeaderChildren:m.showExerciseIcons?e(Xe,{exercise:d,topicUrl:m.topicUrl,errataUrl:m.errataUrl}):null,showTotalQuestions:h,children:[e(lr,{exercise:d}),d.questions.map((e,r)=>{var t;const n=g({},h?s:m.questionStates[e.id]);return a(or,g({},m,n,{ref:e=>u.current[i+r]=e,exercise_uid:d.uid,key:e.id,question:e,questionNumber:i+r,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(t=n.solution)?void 0:t.content_html,show_all_feedback:c,tableFeedbackEnabled:c&&!h,canUpdateCurrentStep:"canUpdateCurrentStep"in m?m.canUpdateCurrentStep:!(r+1===d.questions.length)}))})]})};let cr,pr,mr,hr,ur,br,gr,wr,fr=e=>e;const xr=i.div(cr||(cr=fr`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${0}
`),Q(pr||(pr=fr`
    padding: 0;
  `))),$r=i.span(mr||(mr=fr`
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
`),L.palette.pale,Q(hr||(hr=fr`
    &::after {
      width: 3.3rem;
    }
  `))),kr=i.button(wr||(wr=fr`
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
`),e=>((e,r)=>{switch(e){case"isCorrect":return s(ur||(ur=fr`
        color: ${0};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${0};
        box-shadow: ${0};
      `),L.palette.white,L.palette.darkGreen,r?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return s(br||(br=fr`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),L.palette.white,L.palette.lightRed,L.palette.darkRed,r?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return s(gr||(gr=fr`
        color: ${0};
        background-color: ${0};
        border-color: ${0};
        box-shadow: ${0};
      `),L.palette.darkGray,r?L.palette.white:L.palette.neutralLight,r?L.palette.darkGray:L.palette.neutralLight,r?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}})(e.variant,e.isActive)),vr=({index:r,isActive:t,step:n,goToStep:o})=>e($r,{children:e(kr,{variant:n.variant,isActive:t,onClick:()=>o(r,n),children:r+1})}),yr=({steps:r,activeIndex:t,goToStep:n})=>e(xr,{children:r.map((r,o)=>e(vr,{index:o,isActive:o===t,step:r,goToStep:n},o))});export{v as Answer,_ as AnswersTable,dr as Exercise,fe as FreeResponseInput,ge as FreeResponseTextArea,je as InnerStepCard,He as OuterStepCard,yr as ProgressBar,vr as ProgressBarItem,K as Question,V as QuestionHtml,ze as StepCard,kr as StyledItem,Be as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
