var e=require("react/jsx-runtime"),n=require("classnames"),r=require("react"),t=require("styled-components"),a=require("scroll-to-element"),s=require("@fortawesome/free-solid-svg-icons/faBookOpen"),o=require("@fortawesome/free-solid-svg-icons/faTriangleExclamation"),i=require("@fortawesome/free-solid-svg-icons/faCircleInfo"),l=require("@fortawesome/react-fontawesome");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=/*#__PURE__*/c(n),u=/*#__PURE__*/c(r),p=/*#__PURE__*/c(t),m=/*#__PURE__*/c(a),h="abcdefghijklmnopqrstuvwxyz",f=function(e,n){return e.id===n};function x(e){var n=e.trim().match(/\b[-?(\w+)?]+\b/gi);return n?n.length:0}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},b.apply(this,arguments)}function g(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n.indexOf(r=s[t])>=0||(a[r]=e[r]);return a}function w(e,n){return n||(n=e.slice(0)),e.raw=n,e}var v=["html","component","block"],k=function(n){var r=n.html,t=n.component,a=n.block,s=void 0!==a&&a,o=g(n,v);return void 0!==t?u.default.cloneElement(t,b({html:r},o)):e.jsx(s?"div":"span",b({dangerouslySetInnerHTML:{__html:r}},o))},y=function(n){return e.jsx("aside",{children:e.jsx(k,{component:n.contentRenderer,className:d.default("question-feedback-content","has-html",n.className),html:n.children,block:!0})})},j=function(n){var r=d.default("question-feedback",n.position||"bottom");return e.jsxs("aside",{className:r,children:[e.jsx("div",{className:"arrow","aria-label":"Answer Feedback"}),e.jsx(y,b({},n,{children:n.children}))]})},_=function(n){var r,t,a,s,o,i=n.type,l=n.iter,c=n.answer,u=n.disabled,p=n.onKeyPress,m=n.qid,x=n.correctAnswerId,b=n.incorrectAnswerId,g=n.hasCorrectAnswer,w=n.answered_count,v=n.contentRenderer,j=n.show_all_feedback,_=n.tableFeedbackEnabled,N=function(e,n){return Boolean((n||[]).find(function(n){return n==e.id}))}(c,n.chosenAnswer),C=function(e,n){if(!e.id&&!n)return e.isCorrect;var r=e.id===n;return null!=e.correctness&&(r="1.0"===e.correctness),r}(c,x),q=f(c,b),S=e.jsx("div",{className:"correct-incorrect",children:C&&n.correctIncorrectIcon}),A=d.default("answers-answer",{disabled:u,"answer-checked":N,"answer-correct":C&&"student-mpp"!==i,"answer-incorrect":b&&f(c,b)}),I=(N?"Selected ":"")+"Choice "+h[l];g&&(I+="("+(C?"Correct":"Incorrect")+" Answer)"),I+=":";var O=function(){return s&&s(c)};if(g||"teacher-review"===i||"teacher-preview"===i||"student-mpp"===i||(s=n.onChangeAnswer),s&&(o=e.jsx("input",{type:"radio",className:"answer-input-box",checked:N,id:m+"-option-"+l,name:m+"-options",onChange:O,disabled:u})),j&&c.feedback_html&&!_&&(t=e.jsx(y,{contentRenderer:v,children:c.feedback_html},"question-mc-feedback")),"teacher-review"===i){var T=0;c.selected_count&&w&&(T=Math.round(c.selected_count/w*100)),a=e.jsx("span",{className:"selected-count","data-percent":""+T,children:c.selected_count}),r=e.jsxs("div",{className:"review-wrapper",children:[e.jsxs("div",{className:d.default("review-count",{green:C,red:!C}),children:[a,e.jsx("span",{className:d.default("letter",{green:C,red:!C}),children:h[l]})]}),e.jsxs("div",{className:"answer-answer",children:[e.jsx(k,{className:"answer-content",component:v,html:c.content_html}),t]})]})}else r=e.jsxs(e.Fragment,{children:["teacher-preview"===i&&S,a,o,e.jsxs("label",{onKeyPress:p,htmlFor:m+"-option-"+l,className:"answer-label",children:[e.jsx("span",{className:"answer-letter-wrapper",children:e.jsx("button",{onClick:O,"aria-label":I,className:"answer-letter",disabled:u||q,"data-test-id":"answer-choice-"+h[l],children:h[l]})}),e.jsxs("div",{className:"answer-answer",children:[e.jsx(k,{className:"answer-content",component:v,html:c.content_html}),t]})]})]});return e.jsx("div",{className:"openstax-answer",children:e.jsx("section",{role:"region",className:A,children:r})})};_.displayName="OSAnswer";var N,C,q,S,A,I,O,T,F,P,E,R,H,B,z,L,Q,U,D,W,G,M,K,V,Y=function(n){var r=0,t=n.question,a=n.type,s=n.correct_answer_id,o=n.incorrectAnswerId,i=n.feedback_html,l=n.correct_answer_feedback_html,c=n.show_all_feedback,d=void 0!==c&&c,u=n.tableFeedbackEnabled,p=n.answerIdOrder,m=n.instructions;if(n.hideAnswers)return null;var h,f=[],x={qid:t.id||"auto-"+r++,correctAnswerId:s,incorrectAnswerId:o,hasCorrectAnswer:n.hasCorrectAnswer,chosenAnswer:[n.answer_id],onChangeAnswer:n.onChangeAnswer,type:void 0===a?"student":a,answered_count:n.answered_count,disabled:!n.choicesEnabled,show_all_feedback:d,tableFeedbackEnabled:u,onKeyPress:n.onKeyPress},g=(p?(h=p,t.answers.slice().sort(function(e,n){return h.indexOf(e.id)-h.indexOf(n.id)})):t.answers).map(function(n,r){var a={answer:b({},n,{question_id:"string"==typeof t.id?parseInt(t.id,10):t.id}),iter:r,key:x.qid+"-option-"+r},c=Object.assign({},a,x);return d&&n.feedback_html&&u?f.push({index:r,html:n.feedback_html}):n.id===o&&i?f.push({index:r,html:i}):n.id===s&&l&&f.push({index:r,html:l}),e.jsx(_,b({},c))});return f.forEach(function(r,t){var a=r.index+t+1;g.splice(a,0,e.jsx(j,{contentRenderer:n.contentRenderer,children:r.html},a))}),e.jsxs("div",{className:"answers-table",children:[m,g]})},J={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},X={palette:J,answer:{color:J.lightBlue,correct:{color:J.green,background:"#77af42"},incorrect:{color:J.red,background:J.red},checked:J.lightBlue,hover:J.neutralDark,label:{color:J.neutral,colorHover:J.neutralDark,colorSelected:J.lightBlue}},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:J.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:J.neutralDark,background:J.neutralLighter}},Z=function(){return t.css(N||(N=w(["@media(max-width: ","px) { "," }"])),600,t.css.apply(void 0,[].slice.call(arguments)))},$=function(){return t.css(C||(C=w(["@media(max-width: ","px) { "," }"])),999,t.css.apply(void 0,[].slice.call(arguments)))},ee=function(){return t.css(q||(q=w(["@media(min-width: ","px) { "," }"])),1e3,t.css.apply(void 0,[].slice.call(arguments)))},ne={answer:function(){return t.css(A||(A=w(["\n    .answer-label {\n      display: flex;\n    }\n    color: ",";\n    .answer-letter {\n      width: ",";\n      height: ",";\n      min-width: ",";\n      min-height: ",";\n      border-radius: calc("," / 2);\n      border-width: 2px;\n      border-style: solid;\n      border-color: #c6c6c6;\n      color: ",";\n      transition: color ",", border-color ",", background-color ",";\n      background-color: ",";\n    }\n  "])),X.answer.label.color,"2.4rem","2.4rem","2.4rem","2.4rem","2.4rem",X.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",X.palette.white)},answerColor:function(e){return t.css(I||(I=w(["\n    color: ",";\n    .answer-letter {\n       border-color: ",";\n       background-color: ",";\n       color: ",";\n    }\n  "])),e.color,e.color,e.background,X.palette.white)},answerChecked:function(){return ne.answerColor({color:X.answer.checked,background:X.answer.checked})},answerCorrect:function(){return ne.answerColor(X.answer.correct)},answerIncorrect:function(){return ne.answerColor(X.answer.incorrect)},answerHover:function(){return t.css(O||(O=w(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n    }\n  "])),X.answer.label.colorHover,X.answer.label.colorSelected)},answerCorrectText:function(){return t.css(T||(T=w(["\n    content: 'correct answer';\n    color: ",";\n    margin-left: calc(-3 * ",");\n    width: calc(3 * ",");\n    text-align: center;\n    font-size: 1.2rem;\n    line-height: 1.2rem;\n  "])),X.answer.label.color,"2.4rem","2.4rem")},answerCorrectAnswer:function(){return t.css(F||(F=w(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n      color: ",";\n    }\n    &::before {\n     ","\n      @media screen and (max-width: ","px) {\n        display: none;\n      }\n    }\n    @media screen and (max-width:  ","px) {\n      .answer-letter-wrapper {\n        display: flex;\n        flex-direction: column;\n        &::after {\n          ","\n          width: "," !important;\n          margin-left: calc(-"," / 3.3);\n        }\n      }\n    }\n  "])),X.answer.correct.color,X.answer.correct.color,X.answer.correct.color,ne.answerCorrectText(),999,999,ne.answerCorrectText(),"2.4rem","2.4rem")},resetText:function(){return t.css(P||(P=w(['\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.6;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    white-space: normal;\n    line-break: auto;\n  '])))},stepCardPadding:function(){return t.css(E||(E=w(["\n    padding: 48px 140px;\n\n    ","\n\n    ","\n  "])),$(R||(R=w(["\n      padding: "," ",";\n    "])),"24px","24px"),Z(H||(H=w(["\n      padding: calc("," * 2) ",";\n    "])),"8px","8px"))},popover:function(){return t.css(B||(B=w(["\n    ","\n\n    z-index: 1;\n    position: relative;\n    border: "," solid ",";\n    background-color: ",";\n    background-clip: padding-box;\n    max-width: ",";\n    margin: calc("," - 14px) 0 "," 8px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n    color: ",";\n    font-size: 1.4rem;\n\n    .arrow {\n      position: absolute;\n      display: block;\n      width: ",";\n      height: ",";\n      margin-left: ",";\n      top: calc(",' * -1);\n\n      &::before,\n      &::after {\n        position: absolute;\n        display: block;\n        content: "";\n        border-color: transparent;\n        border-style: solid;\n        border-width: 0 calc('," / 2) "," calc("," / 2);\n      }\n      &::before {\n        top: 0;\n        border-bottom-color: ",";\n      }\n      &::after {\n        top: ",";\n        border-bottom-color: ",";\n      }\n    }\n\n    &.right {\n      right: calc(-"," - ",");\n      .arrow { right: ","; }\n    }\n\n\n    > .content {\n      padding: "," ",";\n    }\n  "])),ne.resetText(),"1px",X.popover.borderColor,X.palette.white,"325px","8px","1rem",X.palette.neutralThin,"16px","8px","4px","8px","16px","8px","16px",X.popover.borderColor,"1px",X.palette.white,"4px","1px","4px","1rem","0.8rem")}},re=p.default.div(z||(z=w(["\n&.step-card-body {\n  ",";\n}\n\n&.openstax-question {\n  border-top: 1px solid ",";\n  font-size: 1.8rem;\n\n  .detailed-solution {\n    margin-bottom: 1rem;\n    .header {\n      display: inline;\n      margin-right: 0.5rem;\n      color: #5e6062;\n      font-weight: bold;\n      flex-basis: 0;\n    }\n    .solution {\n      display: inline;\n      color: #6f6f6f;\n    }\n  }\n\n  img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n  }\n\n  .question-stem {\n    margin-bottom: 0;\n  }\n\n  .answers-table {\n    margin-bottom: 20px;\n    font-size: 1.6rem;\n    line-height: 2rem;\n  }\n\n  .instructions {\n    font-size: 1.4rem;\n    font-style: italic;\n    margin-top: 10px;\n    color: ",";\n    margin: 0;\n\n    i {\n      margin-left: 5px;\n    }\n\n    .text-info {\n      color: ",";\n      padding-left: 5px;\n      cursor: pointer;\n      font-style: normal;\n    }\n  }\n\n  .multiple-choice-prompt {\n    font-weight: 600;\n  }\n\n  .free-response {\n    padding: "," ",";\n    margin: "," 0 "," ",";\n    border-left: "," solid ",";\n    font-style: italic;\n  }\n\n  &:not(.openstax-question-preview) {\n    .answers-answer {\n      width: initial;\n      &:not(.disabled){\n        .answer-label:focus{\n          background-color: ",";\n        }\n      }\n      ",";\n    }\n\n    .answer-answer {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      margin-left: ",";\n      * {\n        margin: 0;\n      }\n    }\n\n    .answer-letter {\n      text-align: center;\n      padding: 0;\n      font-size: 1.4rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n\n    .answer-label {\n      font-weight: normal;\n      width: 100%;\n      padding: "," 0 0 0;\n      margin: 0;\n\n      transition: color ",";\n    }\n\n    // a selectable answer\n    .answer-input-box:not([disabled]) ~ .answer-label {\n      cursor: pointer;\n\n      &:hover {\n        ","\n      }\n    }\n\n    // a selected answer\n    &:not(.has-correct-answer) {\n      .answer-input-box {\n        display: none;\n\n        &:checked {\n          + .answer-label,\n          + .answer-label:hover {\n            ",";\n          }\n        }\n      }\n\n      .answer-checked{\n        .answer-label {\n          ",";\n        }\n      }\n    }\n\n    // answer that has been checked\n    &.has-correct-answer {\n      .answer-checked {\n        &:not(.answer-correct) {\n          .answer-label {\n            ",";\n          }\n        }\n\n        &.answer-correct {\n          .answer-label {\n            ",";\n          }\n        }\n      }\n\n      .answer-correct:not(.answer-checked) {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    &.has-incorrect-answer {\n      .answer-incorrect, .answer-checked.answer-incorrect {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    .question-feedback {\n      ","\n      max-width: ",";\n      .question-feedback-content {\n        padding: "," ",";\n      }\n    }\n  }\n\n  .openstax-answer {\n    border-top: 1px solid #d5d5d5;\n    margin: 10px 0;\n    padding: 6px 8px;\n  }\n}\n"])),ne.stepCardPadding(),X.palette.pale,X.palette.neutral,X.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",X.palette.neutralLighter,X.palette.neutralLightest,ne.answer(),"1rem","1rem","0.1s ease-in-out",ne.answerHover(),ne.answerChecked(),ne.answerChecked(),ne.answerIncorrect(),ne.answerCorrect(),ne.answerCorrectAnswer(),ne.answerIncorrect(),ne.popover(),"370px","0.9rem","1.1rem"),te=u.default.forwardRef(function(n,r){var t,a,s=n.question,o=n.exercise_uid,i=n.questionNumber,l=n.context,c=n.task,u=n.hidePreambles,p=s.stem_html,m=s.collaborator_solutions,h=void 0===m?[]:m,f=s.formats,x=s.stimulus_html,g=!!n.correct_answer_id,w=d.default("openstax-question",n.className,{"has-correct-answer":g&&!((null!=c?c.is_deleted:void 0)&&"homework"===(null!=c?c.type:void 0)),"has-incorrect-answer":!!n.incorrectAnswerId});return null!=o&&(t=e.jsx("div",{className:"exercise-uid",children:o})),function(){var e=s.collaborator_solutions,r=void 0===e?[]:e;return n.displaySolution&&r&&r.find(function(e){return void 0!==e.content_html})}()&&(a=e.jsxs("div",{className:"detailed-solution",children:[e.jsx("div",{className:"header",children:"Detailed solution:"}),e.jsx(k,{className:"solution",block:!0,html:h.map(function(e){return e.content_html}).join("")})]})),e.jsxs(re,{ref:r,className:w,"data-question-number":i,"data-test-id":"question",children:[e.jsx(ae,{type:"context",html:l,hidden:u}),e.jsx(ae,{type:"stimulus",html:x,hidden:u}),e.jsx(ae,{type:"stem",html:p,hidden:u,questionNumber:i}),n.children,e.jsx(Y,b({},n,{onChangeAnswer:n.onChange,hasCorrectAnswer:g})),a,n.displayFormats?e.jsx(se,{formats:f}):void 0,t]})}),ae=function(n){var r=n.html,t=void 0===r?"":r;return!0!==n.hidden&&t.length>0?e.jsx(k,{html:t,"data-question-number":n.questionNumber,className:"question-"+n.type,block:!0}):null},se=function(n){var r=n.formats,t=void 0===r?[]:r;return e.jsxs("div",{className:"formats-listing",children:[e.jsx("div",{className:"header",children:"Formats:"}),t.map(function(n,r){return e.jsx("span",{children:n},r)})]})},oe=["disabled","isWaiting","waitingText","children"],ie=p.default.button(L||(L=w(["\n  background-color: ",";\n  color: ",";\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n\n  &:not([disabled]) {\n    cursor: pointer;\n    &:hover {\n      background: ","\n    }\n    &:active {\n      background: ","\n    }\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n"])),X.button.background,X.palette.white,X.button.backgroundHover,X.button.backgroundActive),le=function(n){var r=n.disabled,t=n.isWaiting,a=n.waitingText,s=n.children,o=g(n,oe);return e.jsx(ie,b({},o,{disabled:t||r,children:t&&a||s}))},ce=p.default.div(Q||(Q=w(["\n    ","\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    background: ",";\n\n    > * {\n        flex-grow: 1;\n    }\n\n    button {\n        width: 160px;\n        height: 48px;\n    }\n\n    .step-card-footer-inner {\n        border-top: 1px solid ",";\n        padding-top: 32px;\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .points {\n        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        .attempts-left {\n            color: #F36B32;\n        }\n    }\n\n    .controls {\n        display: flex;\n        flex-flow: column wrap-reverse;\n        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        button + button {\n            margin: 0.8rem 0 0 0;\n        }\n    }\n\n    ","\n"])),ne.stepCardPadding(),X.card.body.background,X.palette.pale,ee(U||(U=w(["\n        padding: 0 140px 32px 140px;\n        flex-wrap: nowrap;\n\n        .points {\n            max-width: 400px;\n        }\n\n        .controls {\n            flex-flow: row;\n            justify-content: flex-end;\n\n            button + button {\n                margin: 0 0 0 0.8rem;\n            }\n        }\n    "])))),de=t.css(D||(D=w(["\n  background-color: #f5e9ea;\n"]))),ue=p.default.div(W||(W=w(["\n  display: flex;\n  flex-direction: column;\n\n  .step-card-body {\n    ","\n  }\n"])),ne.stepCardPadding()),pe=p.default.div(G||(G=w(["\n  font-size: 2rem;\n  line-height: 1.68em;\n  position: relative;\n"]))),me=p.default.div(M||(M=w(["\n  margin: 8px 0;\n  display: flex;\n  justify-content: ",";\n  line-height: 1.6rem;\n\n  .word-limit-error-info {\n    color: ",";\n  }\n\n  div > span {\n    font-size: 12px;\n    line-height: 16px;\n\n    + span {\n      margin-left: 1rem;\n    }\n  }\n\n  .last-submitted + * {\n    margin-top: 0.8rem;\n  }\n\n  color: ",";\n"])),function(e){return e.hasChildren?"space-between":"flex-end"},X.palette.danger,X.palette.neutralThin),he=p.default.textarea(K||(K=w(["\n  display: block;\n  font-family: inherit;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  width: 100%;\n  min-height: 10.5em;\n  line-height: 1.5em;\n  margin: 2.5rem 0 0 0;\n  padding: 0.5em;\n  border: 1px solid ",";\n  color: ",";\n  ",";\n  ","\n  background-color: ",";\n"])),X.palette.neutral,X.palette.neutralDark,function(e){return e.isOverWordLimit&&de},function(e){return e.isOverWordLimit&&t.css(V||(V=w(["\n    border: 2px solid ",";\n  "])),X.palette.danger)},function(e){return e.readOnly&&X.palette.neutralCool});he.displayName="OSFreeResponseTextArea";var fe=function(n){return e.jsx(le,b({},n,{children:"Cancel"}))},xe=function(n){var r=n.availablePoints,t=n.cancelHandler,a=n.defaultValue,s=n.infoRowChildren,o=n.isSubmitDisabled,i=n.pointsChildren,l=n.question,c=n.questionNumber,d=n.saveHandler,u=n.submitBtnLabel,p=n.textHasChanged,m=n.wordLimit,h=x(a)>m,f={};return c&&(f["data-question-number"]=c),e.jsxs(ue,{"data-test-id":"student-free-response",children:[e.jsxs("div",{className:"step-card-body",children:[e.jsx(pe,b({},f,{children:l.stem_html&&e.jsx(ae,{type:"stem",html:l.stem_html,hidden:!1})})),e.jsx(he,b({},n,{isOverWordLimit:h,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),e.jsxs(me,{hasChildren:!!s,children:[s,e.jsxs("div",{children:[e.jsxs("span",{children:[x(a)," words"]}),h&&e.jsxs("span",{className:"word-limit-error-info",children:["Maximum ",m," words"]})]})]})]}),e.jsxs(ce,{children:[e.jsxs("div",{className:"points",children:[e.jsxs("strong",{children:["Points: ",r]}),i]}),e.jsxs("div",{className:"controls",children:[e.jsx(fe,{disabled:!p,onClick:t}),e.jsx(le,{"data-test-id":"submit-answer-btn",disabled:o||h,onClick:d,children:u})]})]})]})};xe.displayName="OSFreeResponse";var be,ge,we,ve,ke,ye,je,_e,Ne,Ce,qe,Se,Ae=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],Ie=["step","questionNumber","numberOfQuestions","children","className"],Oe=p.default.div(be||(be=w(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 400px;\n  border-radius: 0.25rem;\n  margin: 0 auto 5rem auto;\n  border: 1px solid ",";\n  border-radius: 0.25rem;\n  background-color: white;\n\n  ","\n"])),X.palette.light,ee(ge||(ge=w(["\n    max-width: 1000px;\n    min-width: 750px;\n  "])))),Te=p.default.div(we||(we=w(["\n  padding: 2rem;\n\n  ","\n"])),$(ve||(ve=w(["\n    padding: 0;\n  "])))),Fe=p.default.div(ke||(ke=w(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: ",";\n  font-size: 1.8rem;\n  line-height: 3rem;\n  letter-spacing: -0.72px;\n\n  div {\n    display: flex;\n    align-items: baseline;\n  }\n\n  div.question-info {\n    font-weight: bold;\n\n    .question-id {\n      font-weight: normal;\n    }\n    .ox-icon-lock {\n        margin-right: 1rem;\n    }\n  }\n\n  .num-questions, .points {\n      display: none;\n  }\n\n  .exercise-id, .separator {\n      font-weight: normal;\n  }\n\n  .separator {\n      margin: 0 0.4rem;\n  }\n\n  .exercise-id {\n      height: 28px; // Fix baseline issue\n  }\n\n  button {\n    color: ",";\n  }\n\n  .openstax-exercise-badges {\n      margin: 0;\n      line-height: 2rem;\n      svg {\n          display: block;\n          &:not(.interactive) {\n              margin: 0 0 0 6px !important;\n          }\n      }\n  }\n\n  ","\n\n    /*\n    1. Show the arrows to move to previous and next question.\n    2. Show the number of questions.\n    3. Override box-shadow of icons when turned into a button.\n    */\n    ","\n\n  ","\n"])),X.card.header.background,X.palette.gray,ee(ye||(ye=w(["\n      button.ox-icon-angle-left, button.ox-icon-angle-right {\n          display: none;\n      }\n      .separator {\n          display: inherit;\n      }\n  "]))),$(je||(je=w(["\n        font-size: 1.6rem;\n        line-height: 2.5rem;\n\n        svg.ox-icon {\n            display: inherit;\n            margin: 0;\n        }\n        button.ox-icon-angle-left {\n            margin-right: ",";\n        }\n        button.ox-icon-angle-right {\n            margin-left: ",";\n        }\n        .openstax-exercise-badges svg {\n            display: none;\n        }\n        .num-questions, points {\n            display: inherit;\n        }\n\n        .exercise-id {\n            display: none;\n        }\n\n        button[class^='ox-icon-angle']:hover {\n            box-shadow: none;\n        }\n  "])),"24px","24px"),Z(_e||(_e=w(["\n      font-size: 1.4rem;\n      line-height: 2rem;\n      padding: 10px 8px;\n\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n  "])),"8px","8px"));Fe.displayName="StepCardHeader";var Pe=p.default.div(Ne||(Ne=w(["\n  .step-card-body {\n    ","\n\n    background: ",";\n\n    &.exercise-stimulus {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n\n    & + div .step-card-body {\n        padding-top: 0;\n    }\n\n    &.exercise-context, &.exercise-stimulus, &.exercise-stem {\n        padding-bottom: 0;\n    }\n\n    ","\n\n    .reading-step & {\n        padding: 0;\n    }\n\n    ","\n\n    ","\n\n    &&& {\n        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }\n    }\n"])),ne.stepCardPadding(),X.card.body.background,function(){return t.css(S||(S=w(["@media(max-width: ","px) { "," }"])),600,t.css.apply(void 0,[].slice.call(arguments)))}(Ce||(Ce=w(["\n        && .question-feedback {\n            margin-left: 0;\n\n           .arrow { margin-left: 12px; }\n        }\n    "]))),ee(qe||(qe=w(["\n        .video-step &, .interactive-step & {\n            .openstax-exercise-badges {\n              margin-right: 3.8rem;\n            }\n        }\n    "]))),Z(Se||(Se=w(["\n        .openstax-exercise-badges svg {\n            margin-right: ",";\n        }\n    "])),"8px")),Ee=function(n){var r=n.questionNumber,t=n.numberOfQuestions,a=n.showTotalQuestions,s=n.stepType,o=n.isHomework,i=n.availablePoints,l=n.unpadded,c=n.className,d=n.children,u=n.questionId,p=n.multipartBadge,m=n.leftHeaderChildren,h=n.rightHeaderChildren,f=n.headerTitleChildren,x=g(n,Ae);return e.jsxs(Te,b({},x,{children:[p,e.jsxs(Oe,{className:c,children:[r&&o&&"exercise"===s&&e.jsxs(Fe,{children:[e.jsxs("div",{children:[m,e.jsxs("div",{className:"question-info",children:[f,e.jsx("span",{children:t>1?"Questions "+r+" - "+(r+t-1):"Question "+r}),a?e.jsxs("span",{className:"num-questions",children:[" / ",t]}):null,e.jsx("span",{className:"separator",children:"|"}),e.jsxs("span",{className:"question-id",children:["ID: ",u]})]})]}),e.jsxs("div",{children:[i&&e.jsxs("div",{className:"points",children:[i," Points"]}),h]})]}),e.jsx(Pe,{unpadded:l,children:d})]})]}))};Ee.displayName="OSStepCard";var Re,He,Be,ze,Le,Qe=function(n){var r=n.step,t=n.questionNumber,a=n.numberOfQuestions,s=n.children,o=n.className,i=g(n,Ie);return e.jsx(Ee,b({},i,{unpadded:!0,questionNumber:t,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:d.default(("type"in r?r.type:"exercise")+"-step",o),questionId:r.uid,children:s}))};Qe.displayName="OSTaskStepCard";var Ue,De,We,Ge,Me,Ke,Ve,Ye,Je,Xe=p.default.div(Re||(Re=w(["\n  padding: 0.6rem 0.9rem;\n  .popover { display: none; }\n  &:hover {\n    svg path { fill: ",";}\n    .popover { display: flex; }\n  }\n"])),X.palette.mediumBlue),Ze=p.default.div(He||(He=w(["\n  position: relative;\n  display: flex;\n"]))),$e=p.default.div(Be||(Be=w(["\n  ","\n  top: 3rem;\n  width: 20rem;\n  position: absolute;\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n"])),ne.popover),en=function(n){return e.jsx(Xe,b({},n.wrapperProps,{children:e.jsxs(Ze,{children:[n.children,e.jsxs($e,{className:"popover right",children:[e.jsx("div",{className:"arrow"}),e.jsx("div",{className:"content",children:n.text})]})]})}))},nn=p.default.div(ze||(ze=w(["\n  max-width: 200px;\n  display: flex;\n  justify-content: space-between;\n"]))),rn=p.default(l.FontAwesomeIcon)(Le||(Le=w(["\n  color: ",";\n  height: 1em;\n"])),X.palette.darkGray),tn=function(n){var r,t=n.exercise,a=n.topicUrl,l=n.errataUrl,c=[],d=t.questions.every(function(e){return e.answers.length>0});return d&&t.questions.find(function(e){return e.formats.includes("free-response")})?r="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":d&&(r="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),a&&c.push(e.jsx(en,{text:"View topic in textbook",wrapperProps:{as:"a",href:a,target:"_blank"},children:e.jsx(rn,{icon:s.faBookOpen})},"topic")),c.push(e.jsx(en,{text:"Suggest a correction",wrapperProps:{as:"a",href:l,target:"_blank"},children:e.jsx(rn,{icon:o.faTriangleExclamation})},"errata")),r&&c.push(e.jsx(en,{text:r,children:e.jsx(rn,{icon:i.faCircleInfo,height:"16px",width:"16px"})},"type")),e.jsx(nn,{children:c})},an=function(n){var r=n.count;return e.jsxs("div",{children:[r," attempt",1===r?"":"s"," left"]})},sn=function(n){var r=n.published_comments;return r?e.jsxs("div",{children:[e.jsx("strong",{children:"Feedback:"})," ",r]}):null},on=function(n){return e.jsx(le,b({},n,{waitingText:"Saving…",isWaiting:n.isWaiting,"data-test-id":"submit-answer-btn",children:0==n.attempt_number?"Submit":"Re-submit"}))},ln=function(n){return e.jsx(le,b({},n,{"data-test-id":"continue-btn",children:n.canUpdateCurrentStep?"Continue":"Next"}))},cn=function(n){var r=n.free_response;return r?e.jsx(e.Fragment,{children:e.jsx("div",{className:"free-response",children:r})}):null},dn=u.default.forwardRef(function(n,r){var t=n.question,a=n.questionNumber,s=n.answer_id,o=n.hasMultipleAttempts,i=n.attempts_remaining,l=n.published_comments,c=n.detailedSolution,d=n.canAnswer,u=n.needsSaved,p=n.attempt_number,m=n.apiIsPending,h=n.onAnswerSave,f=n.onNextStep,x=n.canUpdateCurrentStep,b=n.available_points;return e.jsxs("div",{"data-test-id":"student-exercise-question",children:[e.jsx(te,{ref:r,task:n.task,question:t,answerIdOrder:n.answer_id_order,choicesEnabled:n.choicesEnabled,answer_id:s,questionNumber:a,onChange:n.onAnswerChange,feedback_html:n.feedback_html,correct_answer_feedback_html:n.correct_answer_feedback_html,correct_answer_id:n.is_completed?n.correct_answer_id:null,incorrectAnswerId:n.incorrectAnswerId,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:n.displaySolution,show_all_feedback:n.show_all_feedback,tableFeedbackEnabled:n.tableFeedbackEnabled,children:e.jsx(cn,{free_response:n.free_response})}),e.jsx(ce,{className:"step-card-footer",children:e.jsxs("div",{className:"step-card-footer-inner",children:[e.jsxs("div",{className:"points",children:[e.jsxs("strong",{children:["Points: ",b]}),e.jsx("span",{className:"attempts-left",children:o&&i>0&&e.jsx(an,{count:i})}),e.jsx(sn,{published_comments:l}),c&&e.jsxs("div",{children:[e.jsx("strong",{children:"Detailed solution:"})," ",e.jsx(k,{html:c})]})]}),e.jsx("div",{className:"controls",children:d&&u?e.jsx(on,{disabled:m||!s,isWaiting:m,attempt_number:p,onClick:function(){return h("string"==typeof(e=t.id)?parseInt(e,10):e);var e}}):e.jsx(ln,{onClick:function(){return f(a-1)},canUpdateCurrentStep:x})})]})})]})}),un=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"],pn=p.default(Qe)(Ue||(Ue=w(["\n  font-size: 1.8rem;\n  line-height: 2.8rem;\n"]))),mn=function(n){var r=n.exercise;return e.jsxs(e.Fragment,{children:[r.context&&e.jsx(k,{className:"step-card-body exercise-context",block:!0,html:r.context}),r.stimulus_html&&e.jsx(k,{className:"step-card-body exercise-stimulus",block:!0,html:r.stimulus_html})]})},hn=p.default.div(De||(De=w(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding: 2rem;\n  ","\n"])),Z(We||(We=w(["\n    padding: 0;\n  "])))),fn=p.default.span(Ge||(Ge=w(['\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n\n  &::after {\n    content: "";\n    display: block;\n    height: 0.1rem;\n    width: 1rem;\n    background-color: ',";\n  }\n\n  &:last-child {\n    &::after {\n      content: none;\n    }\n  }\n\n  ","\n"])),X.palette.pale,Z(Me||(Me=w(["\n    &::after {\n      width: 3.3rem;\n    }\n  "])))),xn=p.default.button(Je||(Je=w(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  margin: 0 0.3rem;\n  font-size: 1.4rem;\n  font-weight: bold;\n  cursor: pointer;\n  ","\n"])),function(e){return function(e,n){switch(e){case"isCorrect":return t.css(Ke||(Ke=w(["\n        color: ",";\n        background-color: rgba(99, 165, 36, 0.6);\n        border-color: ",";\n        box-shadow: ",";\n      "])),X.palette.white,X.palette.darkGreen,n?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return t.css(Ve||(Ve=w(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),X.palette.white,X.palette.lightRed,X.palette.darkRed,n?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return t.css(Ye||(Ye=w(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),X.palette.darkGray,n?X.palette.white:X.palette.neutralLight,n?X.palette.darkGray:X.palette.neutralLight,n?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}}(e.variant,e.isActive)}),bn=function(n){var r=n.index,t=n.step,a=n.goToStep;return e.jsx(fn,{children:e.jsx(xn,{variant:t.variant,isActive:n.isActive,onClick:function(){return a(r,t)},children:r+1})})};exports.Answer=_,exports.AnswersTable=Y,exports.Exercise=function(n){var t=n.numberOfQuestions,a=n.questionNumber,s=n.step,o=n.exercise,i=n.show_all_feedback,l=n.scrollToQuestion,c=g(n,un),d="feedback_html"in s,p=u.default.useRef([]);return u.default.useEffect(function(){var e=l&&p.current[l];e&&m.default(e)},[l,o]),e.jsxs(pn,{step:s,questionNumber:a,numberOfQuestions:d?t:o.questions.length,rightHeaderChildren:c.showExerciseIcons?e.jsx(tn,{exercise:o,topicUrl:c.topicUrl,errataUrl:c.errataUrl}):null,showTotalQuestions:d,children:[e.jsx(mn,{exercise:o}),o.questions.map(function(e,n){var t,l=b({},d?s:c.questionStates[e.id]);return r.createElement(dn,b({},c,l,{ref:function(e){return p.current[a+n]=e},exercise_uid:o.uid,key:e.id,question:e,questionNumber:a+n,choicesEnabled:l.canAnswer,displaySolution:!0,detailedSolution:null==(t=l.solution)?void 0:t.content_html,show_all_feedback:i,tableFeedbackEnabled:i&&!d,canUpdateCurrentStep:"canUpdateCurrentStep"in c?c.canUpdateCurrentStep:!(n+1===o.questions.length)}))})]})},exports.FreeResponseInput=xe,exports.FreeResponseTextArea=he,exports.InnerStepCard=Oe,exports.OuterStepCard=Te,exports.ProgressBar=function(n){var r=n.activeIndex,t=n.goToStep;return e.jsx(hn,{children:n.steps.map(function(n,a){return e.jsx(bn,{index:a,isActive:a===r,step:n,goToStep:t},a)})})},exports.ProgressBarItem=bn,exports.Question=te,exports.QuestionHtml=ae,exports.StepCard=Ee,exports.StyledItem=xn,exports.TaskStepCard=Qe;
//# sourceMappingURL=index.js.map
