!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react/jsx-runtime"),require("classnames"),require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["exports","react/jsx-runtime","classnames","react","styled-components"],e):e((n||self).assessmentComponents={},n.jsxRuntime,n.classnames,n.react,n.styledComponents)}(this,function(n,e,r,t,a){function s(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var i=/*#__PURE__*/s(r),o=/*#__PURE__*/s(t),l=/*#__PURE__*/s(a),c="abcdefghijklmnopqrstuvwxyz",d=function(n,e){return n.id===e};function u(n){var e=n.trim().match(/\b[-?(\w+)?]+\b/gi);return e?e.length:0}function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},p.apply(this,arguments)}function m(n,e){if(null==n)return{};var r,t,a={},s=Object.keys(n);for(t=0;t<s.length;t++)e.indexOf(r=s[t])>=0||(a[r]=n[r]);return a}function h(n,e){return e||(e=n.slice(0)),n.raw=e,n}var f=["html","component","block"],b=function(n){var r=n.html,t=n.component,a=n.block,s=void 0!==a&&a,i=m(n,f);return void 0!==t?o.default.cloneElement(t,p({html:r},i)):e.jsx(s?"div":"span",p({dangerouslySetInnerHTML:{__html:r}},i))},x=function(n){return e.jsx("aside",{children:e.jsx(b,{component:n.contentRenderer,className:i.default("question-feedback-content","has-html",n.className),html:n.children,block:!0})})},w=function(n){var r=i.default("question-feedback",n.position||"bottom");return e.jsxs("aside",{className:r,children:[e.jsx("div",{className:"arrow","aria-label":"Answer Feedback"}),e.jsx(x,p({},n,{children:n.children}))]})},g=function(n){var r,t,a,s,o,l=n.type,u=n.iter,p=n.answer,m=n.disabled,h=n.onKeyPress,f=n.qid,w=n.correctAnswerId,g=n.incorrectAnswerId,v=n.hasCorrectAnswer,k=n.answered_count,j=n.contentRenderer,y=n.show_all_feedback,_=function(n,e){return Boolean((e||[]).find(function(e){return e==n.id}))}(p,n.chosenAnswer),N=function(n,e){if(!n.id&&!e)return n.isCorrect;var r=n.id===e;return null!=n.correctness&&(r="1.0"===n.correctness),r}(p,w),C=d(p,g),q=e.jsx("div",{className:"correct-incorrect",children:N&&n.correctIncorrectIcon}),S=i.default("answers-answer",{disabled:m,"answer-checked":_,"answer-correct":N&&"student-mpp"!==l,"answer-incorrect":g&&d(p,g)}),A=(_?"Selected ":"")+"Choice "+c[u];v&&(A+="("+(N?"Correct":"Incorrect")+" Answer)"),A+=":";var I=function(){return s&&s(p)};if(v||"teacher-review"===l||"teacher-preview"===l||"student-mpp"===l||(s=n.onChangeAnswer),s&&(o=e.jsx("input",{type:"radio",className:"answer-input-box",checked:_,id:f+"-option-"+u,name:f+"-options",onChange:I,disabled:m})),y&&p.feedback_html&&(t=e.jsx(x,{contentRenderer:j,children:p.feedback_html},"question-mc-feedback")),"teacher-review"===l){var O=0;p.selected_count&&k&&(O=Math.round(p.selected_count/k*100)),a=e.jsx("span",{className:"selected-count","data-percent":""+O,children:p.selected_count}),r=e.jsxs("div",{className:"review-wrapper",children:[e.jsxs("div",{className:i.default("review-count",{green:N,red:!N}),children:[a,e.jsx("span",{className:i.default("letter",{green:N,red:!N}),children:c[u]})]}),e.jsxs("div",{className:"answer-answer",children:[e.jsx(b,{className:"answer-content",component:j,html:p.content_html}),t]})]})}else r=e.jsxs(e.Fragment,{children:["teacher-preview"===l&&q,a,o,e.jsxs("label",{onKeyPress:h,htmlFor:f+"-option-"+u,className:"answer-label",children:[e.jsx("span",{className:"answer-letter-wrapper",children:e.jsx("button",{onClick:I,"aria-label":A,className:"answer-letter",disabled:m||C,"data-test-id":"answer-choice-"+c[u],children:c[u]})}),e.jsxs("div",{className:"answer-answer",children:[e.jsx(b,{className:"answer-content",component:j,html:p.content_html}),t]})]})]});return e.jsx("div",{className:"openstax-answer",children:e.jsx("section",{role:"region",className:S,children:r})})};g.displayName="OSAnswer";var v,k,j,y,_,N,C,q,S,A,I,O,T,H,P,R,E,z,B,F,L,D,Q,W=function(n){var r=0,t=n.question,a=n.type,s=n.correct_answer_id,i=n.incorrectAnswerId,o=n.feedback_html,l=n.correct_answer_feedback_html,c=n.show_all_feedback,d=n.answerIdOrder,u=n.instructions;if(n.hideAnswers)return null;var m,h=[],f={qid:t.id||"auto-"+r++,correctAnswerId:s,incorrectAnswerId:i,hasCorrectAnswer:n.hasCorrectAnswer,chosenAnswer:[n.answer_id],onChangeAnswer:n.onChangeAnswer,type:void 0===a?"student":a,answered_count:n.answered_count,disabled:!n.choicesEnabled,show_all_feedback:void 0!==c&&c,onKeyPress:n.onKeyPress},b=(d?(m=d,t.answers.slice().sort(function(n,e){return m.indexOf(n.id)-m.indexOf(e.id)})):t.answers).map(function(n,r){var a={answer:p({},n,{question_id:parseInt(t.id.toString(),10)}),iter:r,key:f.qid+"-option-"+r},c=Object.assign({},a,f);return n.id===i&&o?h.push({index:r,html:o}):n.id===s&&l&&h.push({index:r,html:l}),e.jsx(g,p({},c))});return h.forEach(function(r,t){var a=r.index+t+1;b.splice(a,0,e.jsx(w,{contentRenderer:n.contentRenderer,children:r.html},a))}),e.jsxs("div",{className:"answers-table",children:[u,b]})},M={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},G={palette:M,answer:{color:M.lightBlue,correct:{color:M.green,background:"#77af42"},incorrect:{color:M.red,background:M.red},checked:M.lightBlue,hover:M.neutralDark,label:{color:M.neutralMedium,colorHover:M.neutralDark,colorSelected:M.lightBlue},feedback:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",popover:{borderColor:"rgba(0, 0, 0, 0.2)"}}},card:{background:"#daf3f8"},button:{background:M.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:M.neutralDark,background:M.neutralLighter}},U="1.5rem",K="1rem",V="4rem",Y="20px",$="15px",J="1px",X=600,Z=999,nn=function(){return a.css(v||(v=h(["@media(max-width: ","px) { "," }"])),X,a.css.apply(void 0,[].slice.call(arguments)))},en=function(){return a.css(k||(k=h(["@media(max-width: ","px) { "," }"])),Z,a.css.apply(void 0,[].slice.call(arguments)))},rn=function(){return a.css(j||(j=h(["@media(min-width: ","px) { "," }"])),1e3,a.css.apply(void 0,[].slice.call(arguments)))},tn="8px",an="24px",sn="0.1s ease-in-out",on={answer:function(){return a.css(_||(_=h(["\n    .answer-label {\n      display: flex;\n    }\n    color: ",";\n    .answer-letter {\n      width: ",";\n      height: ",";\n      min-width: ",";\n      min-height: ",";\n      border-radius: calc("," / 2);\n      border-width: 2px;\n      border-style: solid;\n      border-color: #c6c6c6;\n      color: ",";\n      transition: color ",", border-color ",", background-color ",";\n      background-color: ",";\n    }\n  "])),G.answer.label.color,V,V,V,V,V,G.answer.label.colorHover,sn,sn,sn,G.palette.white)},answerColor:function(n){return a.css(N||(N=h(["\n    color: ",";\n    .answer-letter {\n       border-color: ",";\n       background-color: ",";\n       color: ",";\n    }\n  "])),n.color,n.color,n.background,G.palette.white)},answerChecked:function(){return on.answerColor({color:G.answer.checked,background:G.answer.checked})},answerCorrect:function(){return on.answerColor(G.answer.correct)},answerIncorrect:function(){return on.answerColor(G.answer.incorrect)},answerHover:function(){return a.css(C||(C=h(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n    }\n  "])),G.answer.label.colorHover,G.answer.label.colorSelected)},answerCorrectText:function(){return a.css(q||(q=h(["\n    content: 'correct answer';\n    color: ",";\n    margin-left: calc(-1.25 * ",");\n    width: calc(1.25 * ",");\n    text-align: center;\n    font-size: 1.2rem;\n    // em used here for line-height for compatibility with IE\n    // http://caniuse.com/#feat=rem -- rem ignored in pseudo elements\n    line-height: 1em;\n    margin-top: 0.8rem;\n  "])),G.answer.label.color,V,V)},answerCorrectAnswer:function(){return a.css(S||(S=h(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n      color: ",";\n    }\n    &::before {\n     ","\n      @media screen and (max-width: ","px) {\n        display: none;\n      }\n    }\n    @media screen and (max-width:  ","px) {\n      .answer-letter-wrapper {\n        display: flex;\n        flex-direction: column;\n        &::after {\n          ","\n          width: $openstax-answer-bubble-size !important;\n          margin-left: 0;\n        }\n      }\n    }\n  "])),G.answer.correct.color,G.answer.correct.color,G.answer.correct.color,on.answerCorrectText(),Z,Z,on.answerCorrectText())},resetText:function(){return a.css(A||(A=h(['\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.6;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    white-space: normal;\n    line-break: auto;\n  '])))},stepCardPadding:function(){return a.css(I||(I=h(["\n    padding: 48px 140px;\n\n    ","\n\n    ","\n  "])),en(O||(O=h(["\n      padding: "," ",";\n    "])),an,an),nn(T||(T=h(["\n      padding: calc("," * 2) ",";\n    "])),tn,tn))}},ln=l.default.div(H||(H=h(["\n&.step-card-body {\n  ",";\n}\n\n&.openstax-question {\n  font-size: 2rem;\n\n  .detailed-solution {\n    margin-bottom: 1rem;\n    .header {\n      display: inline;\n      margin-right: 0.5rem;\n      color: #5e6062;\n      font-weight: bold;\n      flex-basis: 0;\n    }\n    .solution {\n      display: inline;\n      color: #6f6f6f;\n    }\n  }\n\n  img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n  }\n\n  .question-stem {\n    margin-bottom: 0;\n  }\n\n  .answers-table {\n    margin-bottom: 20px;\n    font-size: 17px;\n    line-height: 25px;\n  }\n\n  .instructions {\n    font-size: 1.4rem;\n    font-style: italic;\n    margin-top: 10px;\n    color: ",";\n    margin: 0;\n\n    i {\n      margin-left: 5px;\n    }\n\n    .text-info {\n      color: ",";\n      padding-left: 5px;\n      cursor: pointer;\n      font-style: normal;\n    }\n  }\n\n  .multiple-choice-prompt {\n    font-weight: 600;\n  }\n\n  .free-response {\n    padding: "," ",";\n    margin: "," 0 "," ",";\n    border-left: "," solid ",";\n    font-style: italic;\n  }\n\n  &:not(.openstax-question-preview) {\n    .answers-answer {\n      width: initial;\n      &:not(.disabled){\n        .answer-label:focus{\n          background-color: ",";\n        }\n      }\n      ",";\n    }\n\n    .answer-answer {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      margin-left: ",";\n      * {\n        margin: 0;\n      }\n    }\n\n    .answer-letter {\n      text-align: center;\n      padding: 0;\n    }\n\n\n    .answer-label {\n      font-weight: normal;\n      width: 100%;\n      padding: "," 0 0 0;\n      margin: 0;\n\n      transition: color ",";\n    }\n\n    // a selectable answer\n    .answer-input-box:not([disabled]) ~ .answer-label {\n      cursor: pointer;\n\n      &:hover {\n        ","\n      }\n    }\n\n    // a selected answer\n    &:not(.has-correct-answer) {\n      .answer-input-box {\n        display: none;\n\n        &:checked {\n          + .answer-label,\n          + .answer-label:hover {\n            ",";\n          }\n        }\n      }\n\n      .answer-checked{\n        .answer-label {\n          ",";\n        }\n      }\n    }\n\n    // answer that has been checked\n    &.has-correct-answer {\n      .answer-checked {\n        &:not(.answer-correct) {\n          .answer-label {\n            ",";\n          }\n        }\n\n        &.answer-correct {\n          .answer-label {\n            ",";\n          }\n        }\n      }\n\n      .answer-correct:not(.answer-checked) {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    &.has-incorrect-answer {\n      .answer-incorrect, .answer-checked.answer-incorrect {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    .question-feedback {\n      ","\n\n      z-index: 1;\n      position: relative;\n      border: "," solid ",";\n      background-color: ",";\n      background-clip: padding-box;\n      border-radius: 0.3rem;\n      max-width: ",";\n      margin: calc("," - 5px) 0 "," calc(-1 * (2 * ","));\n      box-shadow: 10px 0px 10px rgba(0, 0, 0, .25);\n      color: ",";\n      font-size: 1.4rem;\n      font-style: italic;\n\n      .arrow {\n        position: absolute;\n        display: block;\n        width: ",";\n        height: ",";\n        margin-left: 30px;\n        top: calc(("," + ",') * -1);\n\n        &::before,\n        &::after {\n          position: absolute;\n          display: block;\n          content: "";\n          border-color: transparent;\n          border-style: solid;\n          border-width: 0 calc('," / 2) "," calc("," / 2);\n        }\n        &::before {\n          top: 0;\n          border-bottom-color: ",";\n        }\n        &::after {\n          top: ",";\n          border-bottom-color: ",";\n        }\n      }\n\n      .question-feedback-content {\n        padding: "," ",";\n      }\n    }\n  }\n\n  .openstax-answer {\n    border-top: 1px solid #d5d5d5;\n    margin: 10px 0;\n    padding: 10px 0;\n  }\n}\n"])),on.stepCardPadding(),G.palette.neutral,G.palette.neutralLightBlue,K,"2.5rem",U,K,U,K,G.palette.neutralLighter,G.palette.neutralLightest,on.answer(),K,U,sn,on.answerHover(),on.answerChecked(),on.answerChecked(),on.answerIncorrect(),on.answerCorrect(),on.answerCorrectAnswer(),on.answerIncorrect(),on.resetText(),J,G.answer.feedback.popover.borderColor,G.palette.white,"370px",$,K,K,G.palette.neutral,Y,$,$,J,Y,$,Y,G.answer.feedback.popover.borderColor,J,G.palette.white,"2rem","2rem"),cn=function(n){var r,t,a=n.question,s=n.exercise_uid,o=n.questionNumber,l=n.context,c=n.task,d=n.hidePreambles,u=a.stem_html,m=a.collaborator_solutions,h=void 0===m?[]:m,f=a.formats,x=a.stimulus_html,w=!!n.correct_answer_id,g=i.default("openstax-question",n.className,{"has-correct-answer":w&&!((null!=c?c.is_deleted:void 0)&&"homework"===(null!=c?c.type:void 0)),"has-incorrect-answer":!!n.incorrectAnswerId});return null!=s&&(r=e.jsx("div",{className:"exercise-uid",children:s})),function(){var e=a.collaborator_solutions,r=void 0===e?[]:e;return n.displaySolution&&r&&r.find(function(n){return void 0!==n.content_html})}()&&(t=e.jsxs("div",{className:"detailed-solution",children:[e.jsx("div",{className:"header",children:"Detailed solution:"}),e.jsx(b,{className:"solution",block:!0,html:h.map(function(n){return n.content_html}).join("")})]})),e.jsxs(ln,{className:g,"data-question-number":o,"data-test-id":"question",children:[e.jsx(dn,{type:"context",html:l,hidden:d}),e.jsx(dn,{type:"stimulus",html:x,hidden:d}),e.jsx(dn,{type:"stem",html:u,hidden:d,questionNumber:o}),n.children,e.jsx(W,p({},n,{onChangeAnswer:n.onChange,hasCorrectAnswer:w})),t,n.displayFormats?e.jsx(un,{formats:f}):void 0,r]})},dn=function(n){var r=n.html,t=void 0===r?"":r;return!0!==n.hidden&&t.length>0?e.jsx(b,{html:t,"data-question-number":n.questionNumber,className:"question-"+n.type,block:!0}):null},un=function(n){var r=n.formats,t=void 0===r?[]:r;return e.jsxs("div",{className:"formats-listing",children:[e.jsx("div",{className:"header",children:"Formats:"}),t.map(function(n,r){return e.jsx("span",{children:n},r)})]})},pn=["disabled","isWaiting","waitingText","children"],mn=l.default.button(P||(P=h(["\n  background-color: ",";\n  color: ",";\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n\n  &:not([disabled]) {\n    cursor: pointer;\n    &:hover {\n      background: ","\n    }\n    &:active {\n      background: ","\n    }\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n"])),G.button.background,G.palette.white,G.button.backgroundHover,G.button.backgroundActive),hn=function(n){var r=n.disabled,t=n.isWaiting,a=n.waitingText,s=n.children,i=m(n,pn);return e.jsx(mn,p({},i,{disabled:t||r,children:t&&a||s}))},fn=l.default.div(R||(R=h(["\n    ","\n    border-top: 1px solid ",";\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-size: 1.4rem;\n    line-height: 2rem;\n\n    > * {\n        flex-grow: 1;\n    }\n\n    button {\n        width: 160px;\n        height: 48px;\n    }\n\n    .points {\n        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        .attempts-left {\n            color: #F36B32;\n        }\n    }\n\n    .controls {\n        display: flex;\n        flex-flow: column wrap-reverse;\n        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        button + button {\n            margin: 0.8rem 0 0 0;\n        }\n    }\n\n    ","\n"])),on.stepCardPadding(),G.palette.pale,rn(E||(E=h(["\n        padding: 32px 140px;\n        flex-wrap: nowrap;\n\n        .points {\n            max-width: 400px;\n        }\n\n        .controls {\n            flex-flow: row;\n            justify-content: flex-end;\n\n            button + button {\n                margin: 0 0 0 0.8rem;\n            }\n        }\n    "])))),bn=a.css(z||(z=h(["\n  background-color: #f5e9ea;\n"]))),xn=l.default.div(B||(B=h(["\n  display: flex;\n  flex-direction: column;\n\n  .step-card-body {\n    ","\n  }\n"])),on.stepCardPadding()),wn=l.default.div(F||(F=h(["\n  font-size: 2rem;\n  line-height: 1.68em;\n  position: relative;\n"]))),gn=l.default.div(L||(L=h(["\n  margin: 8px 0;\n  display: flex;\n  justify-content: ",";\n  line-height: 1.6rem;\n\n  .word-limit-error-info {\n    color: ",";\n  }\n\n  div > span {\n    font-size: 12px;\n    line-height: 16px;\n\n    + span {\n      margin-left: 1rem;\n    }\n  }\n\n  .last-submitted + * {\n    margin-top: 0.8rem;\n  }\n\n  color: ",";\n"])),function(n){return n.hasChildren?"space-between":"flex-end"},G.palette.danger,G.palette.neutralThin),vn=l.default.textarea(D||(D=h(["\n  display: block;\n  font-family: inherit;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  width: 100%;\n  min-height: 10.5em;\n  line-height: 1.5em;\n  margin: 2.5rem 0 0 0;\n  padding: 0.5em;\n  border: 1px solid ",";\n  color: ",";\n  ",";\n  ","\n  background-color: ",";\n"])),G.palette.neutral,G.palette.neutralDark,function(n){return n.isOverWordLimit&&bn},function(n){return n.isOverWordLimit&&a.css(Q||(Q=h(["\n    border: 2px solid ",";\n  "])),G.palette.danger)},function(n){return n.readOnly&&G.palette.neutralCool});vn.displayName="OSFreeResponseTextArea";var kn=function(n){return e.jsx(hn,p({},n,{children:"Cancel"}))},jn=function(n){var r=n.availablePoints,t=n.cancelHandler,a=n.defaultValue,s=n.infoRowChildren,i=n.isSubmitDisabled,o=n.pointsChildren,l=n.question,c=n.questionNumber,d=n.saveHandler,m=n.submitBtnLabel,h=n.textHasChanged,f=n.wordLimit,b=u(a)>f,x={};return c&&(x["data-question-number"]=c),e.jsxs(xn,{"data-test-id":"student-free-response",children:[e.jsxs("div",{className:"step-card-body",children:[e.jsx(wn,p({},x,{children:l.stem_html&&e.jsx(dn,{type:"stem",html:l.stem_html,hidden:!1})})),e.jsx(vn,p({},n,{isOverWordLimit:b,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),e.jsxs(gn,{hasChildren:!!s,children:[s,e.jsxs("div",{children:[e.jsxs("span",{children:[u(a)," words"]}),b&&e.jsxs("span",{className:"word-limit-error-info",children:["Maximum ",f," words"]})]})]})]}),e.jsxs(fn,{children:[e.jsxs("div",{className:"points",children:[e.jsxs("strong",{children:["Points: ",r]}),o]}),e.jsxs("div",{className:"controls",children:[e.jsx(kn,{disabled:!h,onClick:t}),e.jsx(hn,{"data-test-id":"submit-answer-btn",disabled:i||b,onClick:d,children:m})]})]})]})};jn.displayName="OSFreeResponse";var yn,_n,Nn,Cn,qn,Sn,An,In,On,Tn,Hn,Pn,Rn=["questionNumber","numberOfQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren","wrapsExercise"],En=["step","questionNumber","numberOfQuestions","children","className"],zn=l.default.div(yn||(yn=h(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 400px;\n  border-radius: 0.25rem;\n  margin: 0 auto 5rem auto;\n  border: 1px solid ",";\n  border-radius: 0.25rem;\n  background-color: white;\n\n  ","\n"])),G.palette.light,rn(_n||(_n=h(["\n    max-width: 1000px;\n    min-width: 750px;\n  "])))),Bn=l.default.div(Nn||(Nn=h(["\n  padding: 2rem;\n\n  ","\n"])),en(Cn||(Cn=h(["\n    padding: 0;\n  "])))),Fn=l.default.div(qn||(qn=h(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: ",";\n  font-size: 1.8rem;\n  line-height: 3rem;\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n\n  div.question-info {\n    font-weight: bold;\n\n    .ox-icon-lock {\n        margin-right: 1rem;\n    }\n  }\n\n  .num-questions, .points, .separator {\n      display: none;\n  }\n\n  .exercise-id, .separator {\n      font-weight: normal;\n  }\n\n  .separator {\n      margin: 0 1rem;\n  }\n\n  .exercise-id {\n      height: 28px; // Fix baseline issue\n  }\n\n  button {\n    color: ",";\n  }\n\n  .openstax-exercise-badges {\n      margin: 0;\n      line-height: 2rem;\n      svg {\n          display: block;\n          &:not(.interactive) {\n              margin: 0 0 0 6px !important;\n          }\n      }\n  }\n\n  ","\n\n    /*\n    1. Show the arrows to move to previous and next question.\n    2. Show the number of questions.\n    3. Override box-shadow of icons when turned into a button.\n    */\n    ","\n\n  ","\n"])),G.card.background,G.palette.gray,rn(Sn||(Sn=h(["\n      button.ox-icon-angle-left, button.ox-icon-angle-right {\n          display: none;\n      }\n      .separator {\n          display: inherit;\n      }\n  "]))),en(An||(An=h(["\n        font-size: 1.6rem;\n        line-height: 2.5rem;\n\n        svg.ox-icon {\n            display: inherit;\n            margin: 0;\n        }\n        button.ox-icon-angle-left {\n            margin-right: ",";\n        }\n        button.ox-icon-angle-right {\n            margin-left: ",";\n        }\n        .openstax-exercise-badges svg {\n            display: none;\n        }\n        .num-questions, points {\n            display: inherit;\n        }\n\n        .exercise-id {\n            display: none;\n        }\n\n        button[class^='ox-icon-angle']:hover {\n            box-shadow: none;\n        }\n  "])),an,an),nn(In||(In=h(["\n      font-size: 1.4rem;\n      line-height: 2rem;\n      padding: 10px 8px;\n\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n  "])),tn,tn));Fn.displayName="StepCardHeader";var Ln=l.default.div(On||(On=h(["\n  .step-card-body {\n    ","\n  }\n\n    & + div .step-card-body {\n        padding-top: 0;\n    }\n\n    &.exercise-context, &.exercise-stimulus, &.exercise-stem {\n        padding-bottom: 0;\n    }\n\n    ","\n\n    .reading-step & {\n        padding: 0;\n    }\n\n    ","\n\n    ","\n\n    &&& {\n        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }\n    }\n"])),on.stepCardPadding(),function(){return a.css(y||(y=h(["@media(max-width: ","px) { "," }"])),X,a.css.apply(void 0,[].slice.call(arguments)))}(Tn||(Tn=h(["\n        && .question-feedback {\n            margin-left: 0;\n\n           .arrow { margin-left: 12px; }\n        }\n    "]))),rn(Hn||(Hn=h(["\n        .video-step &, .interactive-step & {\n            .openstax-exercise-badges {\n              margin-right: 3.8rem;\n            }\n        }\n    "]))),nn(Pn||(Pn=h(["\n        .openstax-exercise-badges svg {\n            margin-right: ",";\n        }\n    "])),tn)),Dn=function(n){var r=n.questionNumber,t=n.numberOfQuestions,a=n.stepType,s=n.isHomework,i=n.availablePoints,o=n.unpadded,l=n.className,c=n.children,d=n.questionId,u=n.multipartBadge,h=n.leftHeaderChildren,f=n.rightHeaderChildren,b=n.headerTitleChildren,x=n.wrapsExercise,w=m(n,Rn);return e.jsxs(Bn,p({},w,{children:[u,e.jsxs(zn,{className:l,children:[r&&s&&"exercise"===a&&e.jsxs(Fn,{children:[e.jsxs("div",{children:[h,e.jsxs("div",{className:"question-info",children:[b,e.jsxs("span",{children:[x?"Exercise":"Question"," ",r]}),e.jsxs("span",{className:"num-questions",children:[" / ",t]}),e.jsx("span",{className:"separator",children:"|"}),e.jsxs("span",{className:"question-id",children:["ID: ",d]})]})]}),e.jsxs("div",{children:[i&&e.jsxs("div",{className:"points",children:[i," Points"]}),f]})]}),e.jsx(Ln,{unpadded:o,children:c})]})]}))};Dn.displayName="OSStepCard";var Qn=function(n){var r=n.step,t=n.questionNumber,a=n.numberOfQuestions,s=n.children,o=n.className,l=m(n,En);return e.jsx(Dn,p({},l,{unpadded:!0,questionNumber:t,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:i.default(("type"in r?r.type:"exercise")+"-step",o),questionId:r.uid,children:s}))};Qn.displayName="OSTaskStepCard";var Wn,Mn,Gn,Un,Kn,Vn,Yn,$n,Jn,Xn=function(n){var r=n.count;return e.jsxs("div",{children:[r," attempt",1===r?"":"s"," left"]})},Zn=function(n){var r=n.published_comments;return r?e.jsxs("div",{children:[e.jsx("strong",{children:"Feedback:"})," ",r]}):null},ne=function(n){return e.jsx(hn,p({},n,{waitingText:"Saving…",isWaiting:n.isWaiting,"data-test-id":"submit-answer-btn",children:0==n.attempt_number?"Submit":"Re-submit"}))},ee=function(n){return e.jsx(hn,{onClick:n.onNextStep,"data-test-id":"continue-btn",children:n.canUpdateCurrentStep?"Continue":"Next"})},re=function(n){var r=n.free_response;return r?e.jsx(e.Fragment,{children:e.jsx("div",{className:"free-response",children:r})}):null},te=function(n){var r=n.answer_id,t=n.hasMultipleAttempts,a=n.attempts_remaining,s=n.published_comments,i=n.detailedSolution,o=n.canAnswer,l=n.needsSaved,c=n.attempt_number,d=n.apiIsPending,u=n.onAnswerSave,p=n.onNextStep,m=n.canUpdateCurrentStep,h=n.available_points;return e.jsxs("div",{"data-test-id":"student-exercise-question",children:[e.jsx(cn,{task:n.task,question:n.question,answerIdOrder:n.answer_id_order,choicesEnabled:n.choicesEnabled,answer_id:r,questionNumber:n.questionNumber,onChange:n.onAnswerChange,feedback_html:n.feedback_html,correct_answer_feedback_html:n.correct_answer_feedback_html,correct_answer_id:n.is_completed?n.correct_answer_id:null,incorrectAnswerId:n.incorrectAnswerId,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:n.displaySolution,show_all_feedback:n.show_all_feedback,children:e.jsx(re,{free_response:n.free_response})}),e.jsxs(fn,{className:"step-card-footer",children:[e.jsxs("div",{className:"points",children:[e.jsxs("strong",{children:["Points: ",h]}),e.jsx("span",{className:"attempts-left",children:t&&a>0&&e.jsx(Xn,{count:a})}),e.jsx(Zn,{published_comments:s}),i&&e.jsxs("div",{children:[e.jsx("strong",{children:"Detailed solution:"})," ",e.jsx(b,{html:i})]})]}),e.jsx("div",{className:"controls",children:o&&l?e.jsx(ne,{disabled:d||!r,isWaiting:d,attempt_number:c,onClick:u}):e.jsx(ee,{onNextStep:p,canUpdateCurrentStep:m})})]})]})},ae=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback"],se=l.default(Qn)(Wn||(Wn=h(["\n  font-size: 1.8rem;\n  line-height: 3rem;\n"]))),ie=function(n){var r=n.exercise;return e.jsxs(e.Fragment,{children:[r.context&&e.jsx(b,{className:"step-card-body exercise-context",block:!0,html:r.context}),r.stimulus_html&&e.jsx(b,{className:"step-card-body exercise-stimulus",block:!0,html:r.stimulus_html})]})},oe=l.default.div(Mn||(Mn=h(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin: 3.2rem;\n  ","\n"])),nn(Gn||(Gn=h(["\n    margin: 1rem;\n  "])))),le=l.default.span(Un||(Un=h(['\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n\n  &::after {\n    content: "";\n    display: block;\n    height: 0.1rem;\n    width: 1rem;\n    background-color: ',";\n  }\n\n  &:last-child {\n    &::after {\n      content: none;\n    }\n  }\n\n  ","\n"])),G.palette.pale,nn(Kn||(Kn=h(["\n    &::after {\n      width: 3.3rem;\n    }\n  "])))),ce=l.default.button(Jn||(Jn=h(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  margin: 0 0.3rem;\n  font-weight: bold;\n  cursor: pointer;\n  ","\n"])),function(n){return function(n,e){switch(n){case"isCorrect":return a.css(Vn||(Vn=h(["\n        color: ",";\n        background-color: rgba(99, 165, 36, 0.6);\n        border-color: ",";\n        box-shadow: ",";\n      "])),G.palette.white,G.palette.darkGreen,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return a.css(Yn||(Yn=h(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),G.palette.white,G.palette.lightRed,G.palette.darkRed,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return a.css($n||($n=h(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),G.palette.darkGray,e?G.palette.white:G.palette.neutralLight,e?G.palette.darkGray:G.palette.neutralLight,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}}(n.variant,n.isActive)}),de=function(n){var r=n.index,t=n.step,a=n.goToStep;return e.jsx(le,{children:e.jsx(ce,{variant:t.variant,isActive:n.isActive,onClick:function(){return a(r,t)},children:r+1})})};n.Answer=g,n.AnswersTable=W,n.Exercise=function(n){var r=n.numberOfQuestions,a=n.questionNumber,s=n.step,i=n.exercise,o=n.show_all_feedback,l=m(n,ae);return e.jsxs(se,{step:s,questionNumber:a,numberOfQuestions:r,wrapsExercise:!("feedback_html"in s),children:[e.jsx(ie,{exercise:i}),i.questions.map(function(n){var e,r=p({},"feedback_html"in s?s:l.questionStates[n.id]);return t.createElement(te,p({},l,r,{exercise_uid:i.uid,key:n.id,question:n,questionNumber:a,choicesEnabled:r.canAnswer,displaySolution:!0,detailedSolution:null==(e=r.solution)?void 0:e.content_html,show_all_feedback:o}))})]})},n.FreeResponseInput=jn,n.FreeResponseTextArea=vn,n.InnerStepCard=zn,n.OuterStepCard=Bn,n.ProgressBar=function(n){var r=n.activeIndex,t=n.goToStep;return e.jsx(oe,{children:n.steps.map(function(n,a){return e.jsx(de,{index:a,isActive:a===r,step:n,goToStep:t},a)})})},n.ProgressBarItem=de,n.Question=cn,n.QuestionHtml=dn,n.StepCard=Dn,n.StyledItem=ce,n.TaskStepCard=Qn});
//# sourceMappingURL=index.umd.js.map
