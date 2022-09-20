var n=require("react/jsx-runtime"),e=require("classnames"),r=require("react"),t=require("styled-components");function a(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var s=/*#__PURE__*/a(e),i=/*#__PURE__*/a(r),o=/*#__PURE__*/a(t),l="abcdefghijklmnopqrstuvwxyz",c=function(n,e){return n.id===e};function d(n){var e=n.trim().match(/\b[-?(\w+)?]+\b/gi);return e?e.length:0}function u(){return u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},u.apply(this,arguments)}function p(n,e){if(null==n)return{};var r,t,a={},s=Object.keys(n);for(t=0;t<s.length;t++)e.indexOf(r=s[t])>=0||(a[r]=n[r]);return a}function m(n,e){return e||(e=n.slice(0)),n.raw=e,n}var h=["html","component","block"],x=function(e){var r=e.html,t=e.component,a=e.block,s=void 0!==a&&a,o=p(e,h);return void 0!==t?i.default.cloneElement(t,u({html:r},o)):n.jsx(s?"div":"span",u({dangerouslySetInnerHTML:{__html:r}},o))},b=function(e){return n.jsx("aside",{children:n.jsx(x,{component:e.contentRenderer,className:s.default("question-feedback-content","has-html",e.className),html:e.children,block:!0})})},f=function(e){var r=s.default("question-feedback",e.position||"bottom");return n.jsxs("aside",{className:r,children:[n.jsx("div",{className:"arrow","aria-label":"Answer Feedback"}),n.jsx(b,u({},e,{children:e.children}))]})},w=function(e){var r,t,a,i,o,d=e.type,u=e.iter,p=e.answer,m=e.disabled,h=e.onKeyPress,f=e.qid,w=e.correctAnswerId,g=e.incorrectAnswerId,v=e.hasCorrectAnswer,k=e.answered_count,j=e.contentRenderer,y=e.show_all_feedback,_=function(n,e){return Boolean((e||[]).find(function(e){return e==n.id}))}(p,e.chosenAnswer),N=function(n,e){if(!n.id&&!e)return n.isCorrect;var r=n.id===e;return null!=n.correctness&&(r="1.0"===n.correctness),r}(p,w),C=c(p,g),q=n.jsx("div",{className:"correct-incorrect",children:N&&e.correctIncorrectIcon}),S=s.default("answers-answer",{disabled:m,"answer-checked":_,"answer-correct":N&&"student-mpp"!==d,"answer-incorrect":g&&c(p,g)}),A=(_?"Selected ":"")+"Choice "+l[u];v&&(A+="("+(N?"Correct":"Incorrect")+" Answer)"),A+=":";var I=function(){return i&&i(p)};if(v||"teacher-review"===d||"teacher-preview"===d||"student-mpp"===d||(i=e.onChangeAnswer),i&&(o=n.jsx("input",{type:"radio",className:"answer-input-box",checked:_,id:f+"-option-"+u,name:f+"-options",onChange:I,disabled:m})),y&&p.feedback_html&&(t=n.jsx(b,{contentRenderer:j,children:p.feedback_html},"question-mc-feedback")),"teacher-review"===d){var O=0;p.selected_count&&k&&(O=Math.round(p.selected_count/k*100)),a=n.jsx("span",{className:"selected-count","data-percent":""+O,children:p.selected_count}),r=n.jsxs("div",{className:"review-wrapper",children:[n.jsxs("div",{className:s.default("review-count",{green:N,red:!N}),children:[a,n.jsx("span",{className:s.default("letter",{green:N,red:!N}),children:l[u]})]}),n.jsxs("div",{className:"answer-answer",children:[n.jsx(x,{className:"answer-content",component:j,html:p.content_html}),t]})]})}else r=n.jsxs(n.Fragment,{children:["teacher-preview"===d&&q,a,o,n.jsxs("label",{onKeyPress:h,htmlFor:f+"-option-"+u,className:"answer-label",children:[n.jsx("span",{className:"answer-letter-wrapper",children:n.jsx("button",{onClick:I,"aria-label":A,className:"answer-letter",disabled:m||C,"data-test-id":"answer-choice-"+l[u],children:l[u]})}),n.jsxs("div",{className:"answer-answer",children:[n.jsx(x,{className:"answer-content",component:j,html:p.content_html}),t]})]})]});return n.jsx("div",{className:"openstax-answer",children:n.jsx("section",{role:"region",className:S,children:r})})};w.displayName="OSAnswer";var g,v,k,j,y,_,N,C,q,S,A,I,O,T,H,P,R,E,z,B,F,L,D,Q=function(e){var r=0,t=e.question,a=e.type,s=e.correct_answer_id,i=e.incorrectAnswerId,o=e.feedback_html,l=e.correct_answer_feedback_html,c=e.show_all_feedback,d=e.answerIdOrder,p=e.instructions;if(e.hideAnswers)return null;var m,h=[],x={qid:t.id||"auto-"+r++,correctAnswerId:s,incorrectAnswerId:i,hasCorrectAnswer:e.hasCorrectAnswer,chosenAnswer:[e.answer_id],onChangeAnswer:e.onChangeAnswer,type:void 0===a?"student":a,answered_count:e.answered_count,disabled:!e.choicesEnabled,show_all_feedback:void 0!==c&&c,onKeyPress:e.onKeyPress},b=(d?(m=d,t.answers.slice().sort(function(n,e){return m.indexOf(n.id)-m.indexOf(e.id)})):t.answers).map(function(e,r){var a={answer:u({},e,{question_id:"string"==typeof t.id?parseInt(t.id,10):t.id}),iter:r,key:x.qid+"-option-"+r},c=Object.assign({},a,x);return e.id===i&&o?h.push({index:r,html:o}):e.id===s&&l&&h.push({index:r,html:l}),n.jsx(w,u({},c))});return h.forEach(function(r,t){var a=r.index+t+1;b.splice(a,0,n.jsx(f,{contentRenderer:e.contentRenderer,children:r.html},a))}),n.jsxs("div",{className:"answers-table",children:[p,b]})},U={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},W={palette:U,answer:{color:U.lightBlue,correct:{color:U.green,background:"#77af42"},incorrect:{color:U.red,background:U.red},checked:U.lightBlue,hover:U.neutralDark,label:{color:U.neutralMedium,colorHover:U.neutralDark,colorSelected:U.lightBlue},feedback:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",popover:{borderColor:"rgba(0, 0, 0, 0.2)"}}},card:{background:"#daf3f8"},button:{background:U.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:U.neutralDark,background:U.neutralLighter}},M=function(){return t.css(g||(g=m(["@media(max-width: ","px) { "," }"])),600,t.css.apply(void 0,[].slice.call(arguments)))},G=function(){return t.css(v||(v=m(["@media(max-width: ","px) { "," }"])),999,t.css.apply(void 0,[].slice.call(arguments)))},K=function(){return t.css(k||(k=m(["@media(min-width: ","px) { "," }"])),1e3,t.css.apply(void 0,[].slice.call(arguments)))},V={answer:function(){return t.css(y||(y=m(["\n    .answer-label {\n      display: flex;\n    }\n    color: ",";\n    .answer-letter {\n      width: ",";\n      height: ",";\n      min-width: ",";\n      min-height: ",";\n      border-radius: calc("," / 2);\n      border-width: 2px;\n      border-style: solid;\n      border-color: #c6c6c6;\n      color: ",";\n      transition: color ",", border-color ",", background-color ",";\n      background-color: ",";\n    }\n  "])),W.answer.label.color,"4rem","4rem","4rem","4rem","4rem",W.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",W.palette.white)},answerColor:function(n){return t.css(_||(_=m(["\n    color: ",";\n    .answer-letter {\n       border-color: ",";\n       background-color: ",";\n       color: ",";\n    }\n  "])),n.color,n.color,n.background,W.palette.white)},answerChecked:function(){return V.answerColor({color:W.answer.checked,background:W.answer.checked})},answerCorrect:function(){return V.answerColor(W.answer.correct)},answerIncorrect:function(){return V.answerColor(W.answer.incorrect)},answerHover:function(){return t.css(N||(N=m(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n    }\n  "])),W.answer.label.colorHover,W.answer.label.colorSelected)},answerCorrectText:function(){return t.css(C||(C=m(["\n    content: 'correct answer';\n    color: ",";\n    margin-left: calc(-1.25 * ",");\n    width: calc(1.25 * ",");\n    text-align: center;\n    font-size: 1.2rem;\n    // em used here for line-height for compatibility with IE\n    // http://caniuse.com/#feat=rem -- rem ignored in pseudo elements\n    line-height: 1em;\n    margin-top: 0.8rem;\n  "])),W.answer.label.color,"4rem","4rem")},answerCorrectAnswer:function(){return t.css(q||(q=m(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n      color: ",";\n    }\n    &::before {\n     ","\n      @media screen and (max-width: ","px) {\n        display: none;\n      }\n    }\n    @media screen and (max-width:  ","px) {\n      .answer-letter-wrapper {\n        display: flex;\n        flex-direction: column;\n        &::after {\n          ","\n          width: $openstax-answer-bubble-size !important;\n          margin-left: 0;\n        }\n      }\n    }\n  "])),W.answer.correct.color,W.answer.correct.color,W.answer.correct.color,V.answerCorrectText(),999,999,V.answerCorrectText())},resetText:function(){return t.css(S||(S=m(['\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.6;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    white-space: normal;\n    line-break: auto;\n  '])))},stepCardPadding:function(){return t.css(A||(A=m(["\n    padding: 48px 140px;\n\n    ","\n\n    ","\n  "])),G(I||(I=m(["\n      padding: "," ",";\n    "])),"24px","24px"),M(O||(O=m(["\n      padding: calc("," * 2) ",";\n    "])),"8px","8px"))}},Y=o.default.div(T||(T=m(["\n&.step-card-body {\n  ",";\n}\n\n&.openstax-question {\n  font-size: 2rem;\n\n  .detailed-solution {\n    margin-bottom: 1rem;\n    .header {\n      display: inline;\n      margin-right: 0.5rem;\n      color: #5e6062;\n      font-weight: bold;\n      flex-basis: 0;\n    }\n    .solution {\n      display: inline;\n      color: #6f6f6f;\n    }\n  }\n\n  img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n  }\n\n  .question-stem {\n    margin-bottom: 0;\n  }\n\n  .answers-table {\n    margin-bottom: 20px;\n    font-size: 17px;\n    line-height: 25px;\n  }\n\n  .instructions {\n    font-size: 1.4rem;\n    font-style: italic;\n    margin-top: 10px;\n    color: ",";\n    margin: 0;\n\n    i {\n      margin-left: 5px;\n    }\n\n    .text-info {\n      color: ",";\n      padding-left: 5px;\n      cursor: pointer;\n      font-style: normal;\n    }\n  }\n\n  .multiple-choice-prompt {\n    font-weight: 600;\n  }\n\n  .free-response {\n    padding: "," ",";\n    margin: "," 0 "," ",";\n    border-left: "," solid ",";\n    font-style: italic;\n  }\n\n  &:not(.openstax-question-preview) {\n    .answers-answer {\n      width: initial;\n      &:not(.disabled){\n        .answer-label:focus{\n          background-color: ",";\n        }\n      }\n      ",";\n    }\n\n    .answer-answer {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      margin-left: ",";\n      * {\n        margin: 0;\n      }\n    }\n\n    .answer-letter {\n      text-align: center;\n      padding: 0;\n    }\n\n\n    .answer-label {\n      font-weight: normal;\n      width: 100%;\n      padding: "," 0 0 0;\n      margin: 0;\n\n      transition: color ",";\n    }\n\n    // a selectable answer\n    .answer-input-box:not([disabled]) ~ .answer-label {\n      cursor: pointer;\n\n      &:hover {\n        ","\n      }\n    }\n\n    // a selected answer\n    &:not(.has-correct-answer) {\n      .answer-input-box {\n        display: none;\n\n        &:checked {\n          + .answer-label,\n          + .answer-label:hover {\n            ",";\n          }\n        }\n      }\n\n      .answer-checked{\n        .answer-label {\n          ",";\n        }\n      }\n    }\n\n    // answer that has been checked\n    &.has-correct-answer {\n      .answer-checked {\n        &:not(.answer-correct) {\n          .answer-label {\n            ",";\n          }\n        }\n\n        &.answer-correct {\n          .answer-label {\n            ",";\n          }\n        }\n      }\n\n      .answer-correct:not(.answer-checked) {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    &.has-incorrect-answer {\n      .answer-incorrect, .answer-checked.answer-incorrect {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    .question-feedback {\n      ","\n\n      z-index: 1;\n      position: relative;\n      border: "," solid ",";\n      background-color: ",";\n      background-clip: padding-box;\n      border-radius: 0.3rem;\n      max-width: ",";\n      margin: calc("," - 5px) 0 "," calc(-1 * (2 * ","));\n      box-shadow: 10px 0px 10px rgba(0, 0, 0, .25);\n      color: ",";\n      font-size: 1.4rem;\n      font-style: italic;\n\n      .arrow {\n        position: absolute;\n        display: block;\n        width: ",";\n        height: ",";\n        margin-left: 30px;\n        top: calc(("," + ",') * -1);\n\n        &::before,\n        &::after {\n          position: absolute;\n          display: block;\n          content: "";\n          border-color: transparent;\n          border-style: solid;\n          border-width: 0 calc('," / 2) "," calc("," / 2);\n        }\n        &::before {\n          top: 0;\n          border-bottom-color: ",";\n        }\n        &::after {\n          top: ",";\n          border-bottom-color: ",";\n        }\n      }\n\n      .question-feedback-content {\n        padding: "," ",";\n      }\n    }\n  }\n\n  .openstax-answer {\n    border-top: 1px solid #d5d5d5;\n    margin: 10px 0;\n    padding: 10px 0;\n  }\n}\n"])),V.stepCardPadding(),W.palette.neutral,W.palette.neutralLightBlue,"1rem","2.5rem","1.5rem","1rem","1.5rem","1rem",W.palette.neutralLighter,W.palette.neutralLightest,V.answer(),"1rem","1.5rem","0.1s ease-in-out",V.answerHover(),V.answerChecked(),V.answerChecked(),V.answerIncorrect(),V.answerCorrect(),V.answerCorrectAnswer(),V.answerIncorrect(),V.resetText(),"1px",W.answer.feedback.popover.borderColor,W.palette.white,"370px","15px","1rem","1rem",W.palette.neutral,"20px","15px","15px","1px","20px","15px","20px",W.answer.feedback.popover.borderColor,"1px",W.palette.white,"2rem","2rem"),$=function(e){var r,t,a=e.question,i=e.exercise_uid,o=e.questionNumber,l=e.context,c=e.task,d=e.hidePreambles,p=a.stem_html,m=a.collaborator_solutions,h=void 0===m?[]:m,b=a.formats,f=a.stimulus_html,w=!!e.correct_answer_id,g=s.default("openstax-question",e.className,{"has-correct-answer":w&&!((null!=c?c.is_deleted:void 0)&&"homework"===(null!=c?c.type:void 0)),"has-incorrect-answer":!!e.incorrectAnswerId});return null!=i&&(r=n.jsx("div",{className:"exercise-uid",children:i})),function(){var n=a.collaborator_solutions,r=void 0===n?[]:n;return e.displaySolution&&r&&r.find(function(n){return void 0!==n.content_html})}()&&(t=n.jsxs("div",{className:"detailed-solution",children:[n.jsx("div",{className:"header",children:"Detailed solution:"}),n.jsx(x,{className:"solution",block:!0,html:h.map(function(n){return n.content_html}).join("")})]})),n.jsxs(Y,{className:g,"data-question-number":o,"data-test-id":"question",children:[n.jsx(J,{type:"context",html:l,hidden:d}),n.jsx(J,{type:"stimulus",html:f,hidden:d}),n.jsx(J,{type:"stem",html:p,hidden:d,questionNumber:o}),e.children,n.jsx(Q,u({},e,{onChangeAnswer:e.onChange,hasCorrectAnswer:w})),t,e.displayFormats?n.jsx(X,{formats:b}):void 0,r]})},J=function(e){var r=e.html,t=void 0===r?"":r;return!0!==e.hidden&&t.length>0?n.jsx(x,{html:t,"data-question-number":e.questionNumber,className:"question-"+e.type,block:!0}):null},X=function(e){var r=e.formats,t=void 0===r?[]:r;return n.jsxs("div",{className:"formats-listing",children:[n.jsx("div",{className:"header",children:"Formats:"}),t.map(function(e,r){return n.jsx("span",{children:e},r)})]})},Z=["disabled","isWaiting","waitingText","children"],nn=o.default.button(H||(H=m(["\n  background-color: ",";\n  color: ",";\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n\n  &:not([disabled]) {\n    cursor: pointer;\n    &:hover {\n      background: ","\n    }\n    &:active {\n      background: ","\n    }\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n"])),W.button.background,W.palette.white,W.button.backgroundHover,W.button.backgroundActive),en=function(e){var r=e.disabled,t=e.isWaiting,a=e.waitingText,s=e.children,i=p(e,Z);return n.jsx(nn,u({},i,{disabled:t||r,children:t&&a||s}))},rn=o.default.div(P||(P=m(["\n    ","\n    border-top: 1px solid ",";\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-size: 1.4rem;\n    line-height: 2rem;\n\n    > * {\n        flex-grow: 1;\n    }\n\n    button {\n        width: 160px;\n        height: 48px;\n    }\n\n    .points {\n        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        .attempts-left {\n            color: #F36B32;\n        }\n    }\n\n    .controls {\n        display: flex;\n        flex-flow: column wrap-reverse;\n        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        button + button {\n            margin: 0.8rem 0 0 0;\n        }\n    }\n\n    ","\n"])),V.stepCardPadding(),W.palette.pale,K(R||(R=m(["\n        padding: 32px 140px;\n        flex-wrap: nowrap;\n\n        .points {\n            max-width: 400px;\n        }\n\n        .controls {\n            flex-flow: row;\n            justify-content: flex-end;\n\n            button + button {\n                margin: 0 0 0 0.8rem;\n            }\n        }\n    "])))),tn=t.css(E||(E=m(["\n  background-color: #f5e9ea;\n"]))),an=o.default.div(z||(z=m(["\n  display: flex;\n  flex-direction: column;\n\n  .step-card-body {\n    ","\n  }\n"])),V.stepCardPadding()),sn=o.default.div(B||(B=m(["\n  font-size: 2rem;\n  line-height: 1.68em;\n  position: relative;\n"]))),on=o.default.div(F||(F=m(["\n  margin: 8px 0;\n  display: flex;\n  justify-content: ",";\n  line-height: 1.6rem;\n\n  .word-limit-error-info {\n    color: ",";\n  }\n\n  div > span {\n    font-size: 12px;\n    line-height: 16px;\n\n    + span {\n      margin-left: 1rem;\n    }\n  }\n\n  .last-submitted + * {\n    margin-top: 0.8rem;\n  }\n\n  color: ",";\n"])),function(n){return n.hasChildren?"space-between":"flex-end"},W.palette.danger,W.palette.neutralThin),ln=o.default.textarea(L||(L=m(["\n  display: block;\n  font-family: inherit;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  width: 100%;\n  min-height: 10.5em;\n  line-height: 1.5em;\n  margin: 2.5rem 0 0 0;\n  padding: 0.5em;\n  border: 1px solid ",";\n  color: ",";\n  ",";\n  ","\n  background-color: ",";\n"])),W.palette.neutral,W.palette.neutralDark,function(n){return n.isOverWordLimit&&tn},function(n){return n.isOverWordLimit&&t.css(D||(D=m(["\n    border: 2px solid ",";\n  "])),W.palette.danger)},function(n){return n.readOnly&&W.palette.neutralCool});ln.displayName="OSFreeResponseTextArea";var cn=function(e){return n.jsx(en,u({},e,{children:"Cancel"}))},dn=function(e){var r=e.availablePoints,t=e.cancelHandler,a=e.defaultValue,s=e.infoRowChildren,i=e.isSubmitDisabled,o=e.pointsChildren,l=e.question,c=e.questionNumber,p=e.saveHandler,m=e.submitBtnLabel,h=e.textHasChanged,x=e.wordLimit,b=d(a)>x,f={};return c&&(f["data-question-number"]=c),n.jsxs(an,{"data-test-id":"student-free-response",children:[n.jsxs("div",{className:"step-card-body",children:[n.jsx(sn,u({},f,{children:l.stem_html&&n.jsx(J,{type:"stem",html:l.stem_html,hidden:!1})})),n.jsx(ln,u({},e,{isOverWordLimit:b,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),n.jsxs(on,{hasChildren:!!s,children:[s,n.jsxs("div",{children:[n.jsxs("span",{children:[d(a)," words"]}),b&&n.jsxs("span",{className:"word-limit-error-info",children:["Maximum ",x," words"]})]})]})]}),n.jsxs(rn,{children:[n.jsxs("div",{className:"points",children:[n.jsxs("strong",{children:["Points: ",r]}),o]}),n.jsxs("div",{className:"controls",children:[n.jsx(cn,{disabled:!h,onClick:t}),n.jsx(en,{"data-test-id":"submit-answer-btn",disabled:i||b,onClick:p,children:m})]})]})]})};dn.displayName="OSFreeResponse";var un,pn,mn,hn,xn,bn,fn,wn,gn,vn,kn,jn,yn=["questionNumber","numberOfQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren","wrapsExercise"],_n=["step","questionNumber","numberOfQuestions","children","className"],Nn=o.default.div(un||(un=m(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 400px;\n  border-radius: 0.25rem;\n  margin: 0 auto 5rem auto;\n  border: 1px solid ",";\n  border-radius: 0.25rem;\n  background-color: white;\n\n  ","\n"])),W.palette.light,K(pn||(pn=m(["\n    max-width: 1000px;\n    min-width: 750px;\n  "])))),Cn=o.default.div(mn||(mn=m(["\n  padding: 2rem;\n\n  ","\n"])),G(hn||(hn=m(["\n    padding: 0;\n  "])))),qn=o.default.div(xn||(xn=m(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: ",";\n  font-size: 1.8rem;\n  line-height: 3rem;\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n\n  div.question-info {\n    font-weight: bold;\n\n    .ox-icon-lock {\n        margin-right: 1rem;\n    }\n  }\n\n  .num-questions, .points, .separator {\n      display: none;\n  }\n\n  .exercise-id, .separator {\n      font-weight: normal;\n  }\n\n  .separator {\n      margin: 0 1rem;\n  }\n\n  .exercise-id {\n      height: 28px; // Fix baseline issue\n  }\n\n  button {\n    color: ",";\n  }\n\n  .openstax-exercise-badges {\n      margin: 0;\n      line-height: 2rem;\n      svg {\n          display: block;\n          &:not(.interactive) {\n              margin: 0 0 0 6px !important;\n          }\n      }\n  }\n\n  ","\n\n    /*\n    1. Show the arrows to move to previous and next question.\n    2. Show the number of questions.\n    3. Override box-shadow of icons when turned into a button.\n    */\n    ","\n\n  ","\n"])),W.card.background,W.palette.gray,K(bn||(bn=m(["\n      button.ox-icon-angle-left, button.ox-icon-angle-right {\n          display: none;\n      }\n      .separator {\n          display: inherit;\n      }\n  "]))),G(fn||(fn=m(["\n        font-size: 1.6rem;\n        line-height: 2.5rem;\n\n        svg.ox-icon {\n            display: inherit;\n            margin: 0;\n        }\n        button.ox-icon-angle-left {\n            margin-right: ",";\n        }\n        button.ox-icon-angle-right {\n            margin-left: ",";\n        }\n        .openstax-exercise-badges svg {\n            display: none;\n        }\n        .num-questions, points {\n            display: inherit;\n        }\n\n        .exercise-id {\n            display: none;\n        }\n\n        button[class^='ox-icon-angle']:hover {\n            box-shadow: none;\n        }\n  "])),"24px","24px"),M(wn||(wn=m(["\n      font-size: 1.4rem;\n      line-height: 2rem;\n      padding: 10px 8px;\n\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n  "])),"8px","8px"));qn.displayName="StepCardHeader";var Sn=o.default.div(gn||(gn=m(["\n  .step-card-body {\n    ","\n  }\n\n    & + div .step-card-body {\n        padding-top: 0;\n    }\n\n    &.exercise-context, &.exercise-stimulus, &.exercise-stem {\n        padding-bottom: 0;\n    }\n\n    ","\n\n    .reading-step & {\n        padding: 0;\n    }\n\n    ","\n\n    ","\n\n    &&& {\n        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }\n    }\n"])),V.stepCardPadding(),function(){return t.css(j||(j=m(["@media(max-width: ","px) { "," }"])),600,t.css.apply(void 0,[].slice.call(arguments)))}(vn||(vn=m(["\n        && .question-feedback {\n            margin-left: 0;\n\n           .arrow { margin-left: 12px; }\n        }\n    "]))),K(kn||(kn=m(["\n        .video-step &, .interactive-step & {\n            .openstax-exercise-badges {\n              margin-right: 3.8rem;\n            }\n        }\n    "]))),M(jn||(jn=m(["\n        .openstax-exercise-badges svg {\n            margin-right: ",";\n        }\n    "])),"8px")),An=function(e){var r=e.questionNumber,t=e.numberOfQuestions,a=e.stepType,s=e.isHomework,i=e.availablePoints,o=e.unpadded,l=e.className,c=e.children,d=e.questionId,m=e.multipartBadge,h=e.leftHeaderChildren,x=e.rightHeaderChildren,b=e.headerTitleChildren,f=e.wrapsExercise,w=p(e,yn);return n.jsxs(Cn,u({},w,{children:[m,n.jsxs(Nn,{className:l,children:[r&&s&&"exercise"===a&&n.jsxs(qn,{children:[n.jsxs("div",{children:[h,n.jsxs("div",{className:"question-info",children:[b,n.jsxs("span",{children:[f?"Exercise":"Question"," ",r]}),n.jsxs("span",{className:"num-questions",children:[" / ",t]}),n.jsx("span",{className:"separator",children:"|"}),n.jsxs("span",{className:"question-id",children:["ID: ",d]})]})]}),n.jsxs("div",{children:[i&&n.jsxs("div",{className:"points",children:[i," Points"]}),x]})]}),n.jsx(Sn,{unpadded:o,children:c})]})]}))};An.displayName="OSStepCard";var In=function(e){var r=e.step,t=e.questionNumber,a=e.numberOfQuestions,i=e.children,o=e.className,l=p(e,_n);return n.jsx(An,u({},l,{unpadded:!0,questionNumber:t,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:s.default(("type"in r?r.type:"exercise")+"-step",o),questionId:r.uid,children:i}))};In.displayName="OSTaskStepCard";var On,Tn,Hn,Pn,Rn,En,zn,Bn,Fn,Ln=function(e){var r=e.count;return n.jsxs("div",{children:[r," attempt",1===r?"":"s"," left"]})},Dn=function(e){var r=e.published_comments;return r?n.jsxs("div",{children:[n.jsx("strong",{children:"Feedback:"})," ",r]}):null},Qn=function(e){return n.jsx(en,u({},e,{waitingText:"Saving…",isWaiting:e.isWaiting,"data-test-id":"submit-answer-btn",children:0==e.attempt_number?"Submit":"Re-submit"}))},Un=function(e){return n.jsx(en,{onClick:e.onNextStep,"data-test-id":"continue-btn",children:e.canUpdateCurrentStep?"Continue":"Next"})},Wn=function(e){var r=e.free_response;return r?n.jsx(n.Fragment,{children:n.jsx("div",{className:"free-response",children:r})}):null},Mn=function(e){var r=e.answer_id,t=e.hasMultipleAttempts,a=e.attempts_remaining,s=e.published_comments,i=e.detailedSolution,o=e.canAnswer,l=e.needsSaved,c=e.attempt_number,d=e.apiIsPending,u=e.onAnswerSave,p=e.onNextStep,m=e.canUpdateCurrentStep,h=e.available_points;return n.jsxs("div",{"data-test-id":"student-exercise-question",children:[n.jsx($,{task:e.task,question:e.question,answerIdOrder:e.answer_id_order,choicesEnabled:e.choicesEnabled,answer_id:r,questionNumber:e.questionNumber,onChange:e.onAnswerChange,feedback_html:e.feedback_html,correct_answer_feedback_html:e.correct_answer_feedback_html,correct_answer_id:e.is_completed?e.correct_answer_id:null,incorrectAnswerId:e.incorrectAnswerId,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:e.displaySolution,show_all_feedback:e.show_all_feedback,children:n.jsx(Wn,{free_response:e.free_response})}),n.jsxs(rn,{className:"step-card-footer",children:[n.jsxs("div",{className:"points",children:[n.jsxs("strong",{children:["Points: ",h]}),n.jsx("span",{className:"attempts-left",children:t&&a>0&&n.jsx(Ln,{count:a})}),n.jsx(Dn,{published_comments:s}),i&&n.jsxs("div",{children:[n.jsx("strong",{children:"Detailed solution:"})," ",n.jsx(x,{html:i})]})]}),n.jsx("div",{className:"controls",children:o&&l?n.jsx(Qn,{disabled:d||!r,isWaiting:d,attempt_number:c,onClick:u}):n.jsx(Un,{onNextStep:p,canUpdateCurrentStep:m})})]})]})},Gn=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback"],Kn=o.default(In)(On||(On=m(["\n  font-size: 1.8rem;\n  line-height: 3rem;\n"]))),Vn=function(e){var r=e.exercise;return n.jsxs(n.Fragment,{children:[r.context&&n.jsx(x,{className:"step-card-body exercise-context",block:!0,html:r.context}),r.stimulus_html&&n.jsx(x,{className:"step-card-body exercise-stimulus",block:!0,html:r.stimulus_html})]})},Yn=o.default.div(Tn||(Tn=m(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin: 3.2rem;\n  ","\n"])),M(Hn||(Hn=m(["\n    margin: 1rem;\n  "])))),$n=o.default.span(Pn||(Pn=m(['\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n\n  &::after {\n    content: "";\n    display: block;\n    height: 0.1rem;\n    width: 1rem;\n    background-color: ',";\n  }\n\n  &:last-child {\n    &::after {\n      content: none;\n    }\n  }\n\n  ","\n"])),W.palette.pale,M(Rn||(Rn=m(["\n    &::after {\n      width: 3.3rem;\n    }\n  "])))),Jn=o.default.button(Fn||(Fn=m(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  margin: 0 0.3rem;\n  font-weight: bold;\n  cursor: pointer;\n  ","\n"])),function(n){return function(n,e){switch(n){case"isCorrect":return t.css(En||(En=m(["\n        color: ",";\n        background-color: rgba(99, 165, 36, 0.6);\n        border-color: ",";\n        box-shadow: ",";\n      "])),W.palette.white,W.palette.darkGreen,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return t.css(zn||(zn=m(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),W.palette.white,W.palette.lightRed,W.palette.darkRed,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return t.css(Bn||(Bn=m(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),W.palette.darkGray,e?W.palette.white:W.palette.neutralLight,e?W.palette.darkGray:W.palette.neutralLight,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}}(n.variant,n.isActive)}),Xn=function(e){var r=e.index,t=e.step,a=e.goToStep;return n.jsx($n,{children:n.jsx(Jn,{variant:t.variant,isActive:e.isActive,onClick:function(){return a(r,t)},children:r+1})})};exports.Answer=w,exports.AnswersTable=Q,exports.Exercise=function(e){var t=e.numberOfQuestions,a=e.questionNumber,s=e.step,i=e.exercise,o=e.show_all_feedback,l=p(e,Gn);return n.jsxs(Kn,{step:s,questionNumber:a,numberOfQuestions:t,wrapsExercise:!("feedback_html"in s),children:[n.jsx(Vn,{exercise:i}),i.questions.map(function(n,e){var t,c=u({},"feedback_html"in s?s:l.questionStates[n.id]);return r.createElement(Mn,u({},l,c,{exercise_uid:i.uid,key:n.id,question:n,questionNumber:a,choicesEnabled:c.canAnswer,displaySolution:!0,detailedSolution:null==(t=c.solution)?void 0:t.content_html,show_all_feedback:o,canUpdateCurrentStep:"canUpdateCurrentStep"in l?l.canUpdateCurrentStep:!(e+1===i.questions.length)}))})]})},exports.FreeResponseInput=dn,exports.FreeResponseTextArea=ln,exports.InnerStepCard=Nn,exports.OuterStepCard=Cn,exports.ProgressBar=function(e){var r=e.activeIndex,t=e.goToStep;return n.jsx(Yn,{children:e.steps.map(function(e,a){return n.jsx(Xn,{index:a,isActive:a===r,step:e,goToStep:t},a)})})},exports.ProgressBarItem=Xn,exports.Question=$,exports.QuestionHtml=J,exports.StepCard=An,exports.StyledItem=Jn,exports.TaskStepCard=In;
//# sourceMappingURL=index.js.map
