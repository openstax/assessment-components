import{jsx as n,jsxs as e,Fragment as r}from"react/jsx-runtime";import t from"classnames";import a,{createElement as i}from"react";import o,{css as s}from"styled-components";import l from"scroll-to-element";var c="abcdefghijklmnopqrstuvwxyz",d=function(n,e){return n.id===e};function u(n){var e=n.trim().match(/\b[-?(\w+)?]+\b/gi);return e?e.length:0}function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},p.apply(this,arguments)}function m(n,e){if(null==n)return{};var r,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)e.indexOf(r=i[t])>=0||(a[r]=n[r]);return a}function h(n,e){return e||(e=n.slice(0)),n.raw=e,n}var b=["html","component","block"],f=function(e){var r=e.html,t=e.component,i=e.block,o=void 0!==i&&i,s=m(e,b);return void 0!==t?a.cloneElement(t,p({html:r},s)):n(o?"div":"span",p({dangerouslySetInnerHTML:{__html:r}},s))},g=function(e){return n("aside",{children:n(f,{component:e.contentRenderer,className:t("question-feedback-content","has-html",e.className),html:e.children,block:!0})})},w=function(r){var a=t("question-feedback",r.position||"bottom");return e("aside",{className:a,children:[n("div",{className:"arrow","aria-label":"Answer Feedback"}),n(g,p({},r,{children:r.children}))]})},x=function(a){var i,o,s,l,u,p=a.type,m=a.iter,h=a.answer,b=a.disabled,w=a.onKeyPress,x=a.qid,v=a.correctAnswerId,k=a.incorrectAnswerId,y=a.hasCorrectAnswer,_=a.answered_count,N=a.contentRenderer,C=a.show_all_feedback,q=function(n,e){return Boolean((e||[]).find(function(e){return e==n.id}))}(h,a.chosenAnswer),S=function(n,e){if(!n.id&&!e)return n.isCorrect;var r=n.id===e;return null!=n.correctness&&(r="1.0"===n.correctness),r}(h,v),A=d(h,k),I=n("div",{className:"correct-incorrect",children:S&&a.correctIncorrectIcon}),O=t("answers-answer",{disabled:b,"answer-checked":q,"answer-correct":S&&"student-mpp"!==p,"answer-incorrect":k&&d(h,k)}),T=(q?"Selected ":"")+"Choice "+c[m];y&&(T+="("+(S?"Correct":"Incorrect")+" Answer)"),T+=":";var H=function(){return l&&l(h)};if(y||"teacher-review"===p||"teacher-preview"===p||"student-mpp"===p||(l=a.onChangeAnswer),l&&(u=n("input",{type:"radio",className:"answer-input-box",checked:q,id:x+"-option-"+m,name:x+"-options",onChange:H,disabled:b})),C&&h.feedback_html&&(o=n(g,{contentRenderer:N,children:h.feedback_html},"question-mc-feedback")),"teacher-review"===p){var P=0;h.selected_count&&_&&(P=Math.round(h.selected_count/_*100)),s=n("span",{className:"selected-count","data-percent":""+P,children:h.selected_count}),i=e("div",{className:"review-wrapper",children:[e("div",{className:t("review-count",{green:S,red:!S}),children:[s,n("span",{className:t("letter",{green:S,red:!S}),children:c[m]})]}),e("div",{className:"answer-answer",children:[n(f,{className:"answer-content",component:N,html:h.content_html}),o]})]})}else i=e(r,{children:["teacher-preview"===p&&I,s,u,e("label",{onKeyPress:w,htmlFor:x+"-option-"+m,className:"answer-label",children:[n("span",{className:"answer-letter-wrapper",children:n("button",{onClick:H,"aria-label":T,className:"answer-letter",disabled:b||A,"data-test-id":"answer-choice-"+c[m],children:c[m]})}),e("div",{className:"answer-answer",children:[n(f,{className:"answer-content",component:N,html:h.content_html}),o]})]})]});return n("div",{className:"openstax-answer",children:n("section",{role:"region",className:O,children:i})})};x.displayName="OSAnswer";var v,k,y,_,N,C,q,S,A,I,O,T,H,P,j,L,R,z,B,E,D,F,Q,U=function(r){var t=0,a=r.question,i=r.type,o=r.correct_answer_id,s=r.incorrectAnswerId,l=r.feedback_html,c=r.correct_answer_feedback_html,d=r.show_all_feedback,u=r.answerIdOrder,m=r.instructions;if(r.hideAnswers)return null;var h,b=[],f={qid:a.id||"auto-"+t++,correctAnswerId:o,incorrectAnswerId:s,hasCorrectAnswer:r.hasCorrectAnswer,chosenAnswer:[r.answer_id],onChangeAnswer:r.onChangeAnswer,type:void 0===i?"student":i,answered_count:r.answered_count,disabled:!r.choicesEnabled,show_all_feedback:void 0!==d&&d,onKeyPress:r.onKeyPress},g=(u?(h=u,a.answers.slice().sort(function(n,e){return h.indexOf(n.id)-h.indexOf(e.id)})):a.answers).map(function(e,r){var t={answer:p({},e,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:r,key:f.qid+"-option-"+r},i=Object.assign({},t,f);return e.id===s&&l?b.push({index:r,html:l}):e.id===o&&c&&b.push({index:r,html:c}),n(x,p({},i))});return b.forEach(function(e,t){var a=e.index+t+1;g.splice(a,0,n(w,{contentRenderer:r.contentRenderer,children:e.html},a))}),e("div",{className:"answers-table",children:[m,g]})},W={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},M={palette:W,answer:{color:W.lightBlue,correct:{color:W.green,background:"#77af42"},incorrect:{color:W.red,background:W.red},checked:W.lightBlue,hover:W.neutralDark,label:{color:W.neutralMedium,colorHover:W.neutralDark,colorSelected:W.lightBlue},feedback:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",popover:{borderColor:"rgba(0, 0, 0, 0.2)"}}},card:{background:"#daf3f8"},button:{background:W.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:W.neutralDark,background:W.neutralLighter}},G=function(){return s(v||(v=h(["@media(max-width: ","px) { "," }"])),600,s.apply(void 0,[].slice.call(arguments)))},K=function(){return s(k||(k=h(["@media(max-width: ","px) { "," }"])),999,s.apply(void 0,[].slice.call(arguments)))},V=function(){return s(y||(y=h(["@media(min-width: ","px) { "," }"])),1e3,s.apply(void 0,[].slice.call(arguments)))},Y={answer:function(){return s(N||(N=h(["\n    .answer-label {\n      display: flex;\n    }\n    color: ",";\n    .answer-letter {\n      width: ",";\n      height: ",";\n      min-width: ",";\n      min-height: ",";\n      border-radius: calc("," / 2);\n      border-width: 2px;\n      border-style: solid;\n      border-color: #c6c6c6;\n      color: ",";\n      transition: color ",", border-color ",", background-color ",";\n      background-color: ",";\n    }\n  "])),M.answer.label.color,"4rem","4rem","4rem","4rem","4rem",M.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",M.palette.white)},answerColor:function(n){return s(C||(C=h(["\n    color: ",";\n    .answer-letter {\n       border-color: ",";\n       background-color: ",";\n       color: ",";\n    }\n  "])),n.color,n.color,n.background,M.palette.white)},answerChecked:function(){return Y.answerColor({color:M.answer.checked,background:M.answer.checked})},answerCorrect:function(){return Y.answerColor(M.answer.correct)},answerIncorrect:function(){return Y.answerColor(M.answer.incorrect)},answerHover:function(){return s(q||(q=h(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n    }\n  "])),M.answer.label.colorHover,M.answer.label.colorSelected)},answerCorrectText:function(){return s(S||(S=h(["\n    content: 'correct answer';\n    color: ",";\n    margin-left: calc(-1.25 * ",");\n    width: calc(1.25 * ",");\n    text-align: center;\n    font-size: 1.2rem;\n    // em used here for line-height for compatibility with IE\n    // http://caniuse.com/#feat=rem -- rem ignored in pseudo elements\n    line-height: 1em;\n    margin-top: 0.8rem;\n  "])),M.answer.label.color,"4rem","4rem")},answerCorrectAnswer:function(){return s(A||(A=h(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n      color: ",";\n    }\n    &::before {\n     ","\n      @media screen and (max-width: ","px) {\n        display: none;\n      }\n    }\n    @media screen and (max-width:  ","px) {\n      .answer-letter-wrapper {\n        display: flex;\n        flex-direction: column;\n        &::after {\n          ","\n          width: "," !important;\n          margin-left: 0;\n        }\n      }\n    }\n  "])),M.answer.correct.color,M.answer.correct.color,M.answer.correct.color,Y.answerCorrectText(),999,999,Y.answerCorrectText(),"4rem")},resetText:function(){return s(I||(I=h(['\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.6;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    white-space: normal;\n    line-break: auto;\n  '])))},stepCardPadding:function(){return s(O||(O=h(["\n    padding: 48px 140px;\n\n    ","\n\n    ","\n  "])),K(T||(T=h(["\n      padding: "," ",";\n    "])),"24px","24px"),G(H||(H=h(["\n      padding: calc("," * 2) ",";\n    "])),"8px","8px"))}},J=o.div(P||(P=h(["\n&.step-card-body {\n  ",";\n}\n\n&.openstax-question {\n  border-top: 1px solid ",";\n  font-size: 1.8rem;\n\n  .detailed-solution {\n    margin-bottom: 1rem;\n    .header {\n      display: inline;\n      margin-right: 0.5rem;\n      color: #5e6062;\n      font-weight: bold;\n      flex-basis: 0;\n    }\n    .solution {\n      display: inline;\n      color: #6f6f6f;\n    }\n  }\n\n  img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n  }\n\n  .question-stem {\n    margin-bottom: 0;\n  }\n\n  .answers-table {\n    margin-bottom: 20px;\n    font-size: 1.6rem;\n    line-height: 2rem;\n  }\n\n  .instructions {\n    font-size: 1.4rem;\n    font-style: italic;\n    margin-top: 10px;\n    color: ",";\n    margin: 0;\n\n    i {\n      margin-left: 5px;\n    }\n\n    .text-info {\n      color: ",";\n      padding-left: 5px;\n      cursor: pointer;\n      font-style: normal;\n    }\n  }\n\n  .multiple-choice-prompt {\n    font-weight: 600;\n  }\n\n  .free-response {\n    padding: "," ",";\n    margin: "," 0 "," ",";\n    border-left: "," solid ",";\n    font-style: italic;\n  }\n\n  &:not(.openstax-question-preview) {\n    .answers-answer {\n      width: initial;\n      &:not(.disabled){\n        .answer-label:focus{\n          background-color: ",";\n        }\n      }\n      ",";\n    }\n\n    .answer-answer {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      margin-left: ",";\n      * {\n        margin: 0;\n      }\n    }\n\n    .answer-letter {\n      text-align: center;\n      padding: 0;\n    }\n\n\n    .answer-label {\n      font-weight: normal;\n      width: 100%;\n      padding: "," 0 0 0;\n      margin: 0;\n\n      transition: color ",";\n    }\n\n    // a selectable answer\n    .answer-input-box:not([disabled]) ~ .answer-label {\n      cursor: pointer;\n\n      &:hover {\n        ","\n      }\n    }\n\n    // a selected answer\n    &:not(.has-correct-answer) {\n      .answer-input-box {\n        display: none;\n\n        &:checked {\n          + .answer-label,\n          + .answer-label:hover {\n            ",";\n          }\n        }\n      }\n\n      .answer-checked{\n        .answer-label {\n          ",";\n        }\n      }\n    }\n\n    // answer that has been checked\n    &.has-correct-answer {\n      .answer-checked {\n        &:not(.answer-correct) {\n          .answer-label {\n            ",";\n          }\n        }\n\n        &.answer-correct {\n          .answer-label {\n            ",";\n          }\n        }\n      }\n\n      .answer-correct:not(.answer-checked) {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    &.has-incorrect-answer {\n      .answer-incorrect, .answer-checked.answer-incorrect {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    .question-feedback {\n      ","\n\n      z-index: 1;\n      position: relative;\n      border: "," solid ",";\n      background-color: ",";\n      background-clip: padding-box;\n      border-radius: 0.3rem;\n      max-width: ",";\n      margin: calc("," - 5px) 0 "," calc(-1 * (2 * ","));\n      box-shadow: 10px 0px 10px rgba(0, 0, 0, .25);\n      color: ",";\n      font-size: 1.4rem;\n      font-style: italic;\n\n      .arrow {\n        position: absolute;\n        display: block;\n        width: ",";\n        height: ",";\n        margin-left: 30px;\n        top: calc(("," + ",') * -1);\n\n        &::before,\n        &::after {\n          position: absolute;\n          display: block;\n          content: "";\n          border-color: transparent;\n          border-style: solid;\n          border-width: 0 calc('," / 2) "," calc("," / 2);\n        }\n        &::before {\n          top: 0;\n          border-bottom-color: ",";\n        }\n        &::after {\n          top: ",";\n          border-bottom-color: ",";\n        }\n      }\n\n      .question-feedback-content {\n        padding: "," ",";\n      }\n    }\n  }\n\n  .openstax-answer {\n    border-top: 1px solid #d5d5d5;\n    margin: 10px 0;\n    padding: 10px 0;\n  }\n}\n"])),Y.stepCardPadding(),M.palette.pale,M.palette.neutral,M.palette.neutralLightBlue,"1rem","2.5rem","1.5rem","1rem","1.5rem","1rem",M.palette.neutralLighter,M.palette.neutralLightest,Y.answer(),"1rem","1.5rem","0.1s ease-in-out",Y.answerHover(),Y.answerChecked(),Y.answerChecked(),Y.answerIncorrect(),Y.answerCorrect(),Y.answerCorrectAnswer(),Y.answerIncorrect(),Y.resetText(),"1px",M.answer.feedback.popover.borderColor,M.palette.white,"370px","15px","1rem","1rem",M.palette.neutral,"20px","15px","15px","1px","20px","15px","20px",M.answer.feedback.popover.borderColor,"1px",M.palette.white,"2rem","2rem"),X=function(r){var a,i,o=r.question,s=r.exercise_uid,l=r.questionNumber,c=r.context,d=r.task,u=r.hidePreambles,m=o.stem_html,h=o.collaborator_solutions,b=void 0===h?[]:h,g=o.formats,w=o.stimulus_html,x=!!r.correct_answer_id,v=t("openstax-question",r.className,{"has-correct-answer":x&&!((null!=d?d.is_deleted:void 0)&&"homework"===(null!=d?d.type:void 0)),"has-incorrect-answer":!!r.incorrectAnswerId});return null!=s&&(a=n("div",{className:"exercise-uid",children:s})),function(){var n=o.collaborator_solutions,e=void 0===n?[]:n;return r.displaySolution&&e&&e.find(function(n){return void 0!==n.content_html})}()&&(i=e("div",{className:"detailed-solution",children:[n("div",{className:"header",children:"Detailed solution:"}),n(f,{className:"solution",block:!0,html:b.map(function(n){return n.content_html}).join("")})]})),e(J,{className:v,"data-question-number":l,"data-test-id":"question",children:[n(Z,{type:"context",html:c,hidden:u}),n(Z,{type:"stimulus",html:w,hidden:u}),n(Z,{type:"stem",html:m,hidden:u,questionNumber:l}),r.children,n(U,p({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:x})),i,r.displayFormats?n($,{formats:g}):void 0,a]})},Z=function(e){var r=e.html,t=void 0===r?"":r;return!0!==e.hidden&&t.length>0?n(f,{html:t,"data-question-number":e.questionNumber,className:"question-"+e.type,block:!0}):null},$=function(r){var t=r.formats,a=void 0===t?[]:t;return e("div",{className:"formats-listing",children:[n("div",{className:"header",children:"Formats:"}),a.map(function(e,r){return n("span",{children:e},r)})]})},nn=["disabled","isWaiting","waitingText","children"],en=o.button(j||(j=h(["\n  background-color: ",";\n  color: ",";\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n\n  &:not([disabled]) {\n    cursor: pointer;\n    &:hover {\n      background: ","\n    }\n    &:active {\n      background: ","\n    }\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n"])),M.button.background,M.palette.white,M.button.backgroundHover,M.button.backgroundActive),rn=function(e){var r=e.disabled,t=e.isWaiting,a=e.waitingText,i=e.children,o=m(e,nn);return n(en,p({},o,{disabled:t||r,children:t&&a||i}))},tn=o.div(L||(L=h(["\n    ","\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-size: 1.4rem;\n    line-height: 2rem;\n\n    > * {\n        flex-grow: 1;\n    }\n\n    button {\n        width: 160px;\n        height: 48px;\n    }\n\n    .step-card-footer-inner {\n        border-top: 1px solid ",";\n        padding-top: 32px;\n    }\n\n    .points {\n        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        .attempts-left {\n            color: #F36B32;\n        }\n    }\n\n    .controls {\n        display: flex;\n        flex-flow: column wrap-reverse;\n        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        button + button {\n            margin: 0.8rem 0 0 0;\n        }\n    }\n\n    ","\n"])),Y.stepCardPadding(),M.palette.pale,V(R||(R=h(["\n        padding: 0 140px 32px 140px;\n        flex-wrap: nowrap;\n\n        .points {\n            max-width: 400px;\n        }\n\n        .controls {\n            flex-flow: row;\n            justify-content: flex-end;\n\n            button + button {\n                margin: 0 0 0 0.8rem;\n            }\n        }\n    "])))),an=s(z||(z=h(["\n  background-color: #f5e9ea;\n"]))),on=o.div(B||(B=h(["\n  display: flex;\n  flex-direction: column;\n\n  .step-card-body {\n    ","\n  }\n"])),Y.stepCardPadding()),sn=o.div(E||(E=h(["\n  font-size: 2rem;\n  line-height: 1.68em;\n  position: relative;\n"]))),ln=o.div(D||(D=h(["\n  margin: 8px 0;\n  display: flex;\n  justify-content: ",";\n  line-height: 1.6rem;\n\n  .word-limit-error-info {\n    color: ",";\n  }\n\n  div > span {\n    font-size: 12px;\n    line-height: 16px;\n\n    + span {\n      margin-left: 1rem;\n    }\n  }\n\n  .last-submitted + * {\n    margin-top: 0.8rem;\n  }\n\n  color: ",";\n"])),function(n){return n.hasChildren?"space-between":"flex-end"},M.palette.danger,M.palette.neutralThin),cn=o.textarea(F||(F=h(["\n  display: block;\n  font-family: inherit;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  width: 100%;\n  min-height: 10.5em;\n  line-height: 1.5em;\n  margin: 2.5rem 0 0 0;\n  padding: 0.5em;\n  border: 1px solid ",";\n  color: ",";\n  ",";\n  ","\n  background-color: ",";\n"])),M.palette.neutral,M.palette.neutralDark,function(n){return n.isOverWordLimit&&an},function(n){return n.isOverWordLimit&&s(Q||(Q=h(["\n    border: 2px solid ",";\n  "])),M.palette.danger)},function(n){return n.readOnly&&M.palette.neutralCool});cn.displayName="OSFreeResponseTextArea";var dn=function(e){return n(rn,p({},e,{children:"Cancel"}))},un=function(r){var t=r.availablePoints,a=r.cancelHandler,i=r.defaultValue,o=r.infoRowChildren,s=r.isSubmitDisabled,l=r.pointsChildren,c=r.question,d=r.questionNumber,m=r.saveHandler,h=r.submitBtnLabel,b=r.textHasChanged,f=r.wordLimit,g=u(i)>f,w={};return d&&(w["data-question-number"]=d),e(on,{"data-test-id":"student-free-response",children:[e("div",{className:"step-card-body",children:[n(sn,p({},w,{children:c.stem_html&&n(Z,{type:"stem",html:c.stem_html,hidden:!1})})),n(cn,p({},r,{isOverWordLimit:g,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),e(ln,{hasChildren:!!o,children:[o,e("div",{children:[e("span",{children:[u(i)," words"]}),g&&e("span",{className:"word-limit-error-info",children:["Maximum ",f," words"]})]})]})]}),e(tn,{children:[e("div",{className:"points",children:[e("strong",{children:["Points: ",t]}),l]}),e("div",{className:"controls",children:[n(dn,{disabled:!b,onClick:a}),n(rn,{"data-test-id":"submit-answer-btn",disabled:s||g,onClick:m,children:h})]})]})]})};un.displayName="OSFreeResponse";var pn,mn,hn,bn,fn,gn,wn,xn,vn,kn,yn,_n,Nn=["questionNumber","numberOfQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],Cn=["step","questionNumber","numberOfQuestions","children","className"],qn=o.div(pn||(pn=h(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 400px;\n  border-radius: 0.25rem;\n  margin: 0 auto 5rem auto;\n  border: 1px solid ",";\n  border-radius: 0.25rem;\n  background-color: white;\n\n  ","\n"])),M.palette.light,V(mn||(mn=h(["\n    max-width: 1000px;\n    min-width: 750px;\n  "])))),Sn=o.div(hn||(hn=h(["\n  padding: 2rem;\n\n  ","\n"])),K(bn||(bn=h(["\n    padding: 0;\n  "])))),An=o.div(fn||(fn=h(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: ",";\n  font-size: 1.8rem;\n  line-height: 3rem;\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n\n  div.question-info {\n    font-weight: bold;\n\n    .ox-icon-lock {\n        margin-right: 1rem;\n    }\n  }\n\n  .num-questions, .points, .separator {\n      display: none;\n  }\n\n  .exercise-id, .separator {\n      font-weight: normal;\n  }\n\n  .separator {\n      margin: 0 1rem;\n  }\n\n  .exercise-id {\n      height: 28px; // Fix baseline issue\n  }\n\n  button {\n    color: ",";\n  }\n\n  .openstax-exercise-badges {\n      margin: 0;\n      line-height: 2rem;\n      svg {\n          display: block;\n          &:not(.interactive) {\n              margin: 0 0 0 6px !important;\n          }\n      }\n  }\n\n  ","\n\n    /*\n    1. Show the arrows to move to previous and next question.\n    2. Show the number of questions.\n    3. Override box-shadow of icons when turned into a button.\n    */\n    ","\n\n  ","\n"])),M.card.background,M.palette.gray,V(gn||(gn=h(["\n      button.ox-icon-angle-left, button.ox-icon-angle-right {\n          display: none;\n      }\n      .separator {\n          display: inherit;\n      }\n  "]))),K(wn||(wn=h(["\n        font-size: 1.6rem;\n        line-height: 2.5rem;\n\n        svg.ox-icon {\n            display: inherit;\n            margin: 0;\n        }\n        button.ox-icon-angle-left {\n            margin-right: ",";\n        }\n        button.ox-icon-angle-right {\n            margin-left: ",";\n        }\n        .openstax-exercise-badges svg {\n            display: none;\n        }\n        .num-questions, points {\n            display: inherit;\n        }\n\n        .exercise-id {\n            display: none;\n        }\n\n        button[class^='ox-icon-angle']:hover {\n            box-shadow: none;\n        }\n  "])),"24px","24px"),G(xn||(xn=h(["\n      font-size: 1.4rem;\n      line-height: 2rem;\n      padding: 10px 8px;\n\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n  "])),"8px","8px"));An.displayName="StepCardHeader";var In=o.div(vn||(vn=h(["\n  .step-card-body {\n    ","\n\n    &.exercise-stimulus {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n\n    & + div .step-card-body {\n        padding-top: 0;\n    }\n\n    &.exercise-context, &.exercise-stimulus, &.exercise-stem {\n        padding-bottom: 0;\n    }\n\n    ","\n\n    .reading-step & {\n        padding: 0;\n    }\n\n    ","\n\n    ","\n\n    &&& {\n        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }\n    }\n"])),Y.stepCardPadding(),function(){return s(_||(_=h(["@media(max-width: ","px) { "," }"])),600,s.apply(void 0,[].slice.call(arguments)))}(kn||(kn=h(["\n        && .question-feedback {\n            margin-left: 0;\n\n           .arrow { margin-left: 12px; }\n        }\n    "]))),V(yn||(yn=h(["\n        .video-step &, .interactive-step & {\n            .openstax-exercise-badges {\n              margin-right: 3.8rem;\n            }\n        }\n    "]))),G(_n||(_n=h(["\n        .openstax-exercise-badges svg {\n            margin-right: ",";\n        }\n    "])),"8px")),On=function(r){var t=r.questionNumber,a=r.numberOfQuestions,i=r.stepType,o=r.isHomework,s=r.availablePoints,l=r.unpadded,c=r.className,d=r.children,u=r.questionId,h=r.multipartBadge,b=r.leftHeaderChildren,f=r.rightHeaderChildren,g=r.headerTitleChildren,w=m(r,Nn);return e(Sn,p({},w,{children:[h,e(qn,{className:c,children:[t&&o&&"exercise"===i&&e(An,{children:[e("div",{children:[b,e("div",{className:"question-info",children:[g,n("span",{children:a>1?"Questions "+t+" - "+(t+a-1):"Question "+t}),e("span",{className:"num-questions",children:[" / ",a]}),n("span",{className:"separator",children:"|"}),e("span",{className:"question-id",children:["ID: ",u]})]})]}),e("div",{children:[s&&e("div",{className:"points",children:[s," Points"]}),f]})]}),n(In,{unpadded:l,children:d})]})]}))};On.displayName="OSStepCard";var Tn=function(e){var r=e.step,a=e.questionNumber,i=e.numberOfQuestions,o=e.children,s=e.className,l=m(e,Cn);return n(On,p({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:i,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:t(("type"in r?r.type:"exercise")+"-step",s),questionId:r.uid,children:o}))};Tn.displayName="OSTaskStepCard";var Hn,Pn,jn,Ln,Rn,zn,Bn,En,Dn,Fn=function(n){var r=n.count;return e("div",{children:[r," attempt",1===r?"":"s"," left"]})},Qn=function(r){var t=r.published_comments;return t?e("div",{children:[n("strong",{children:"Feedback:"})," ",t]}):null},Un=function(e){return n(rn,p({},e,{waitingText:"Saving…",isWaiting:e.isWaiting,"data-test-id":"submit-answer-btn",children:0==e.attempt_number?"Submit":"Re-submit"}))},Wn=function(e){return n(rn,{onClick:e.onNextStep,"data-test-id":"continue-btn",children:e.canUpdateCurrentStep?"Continue":"Next"})},Mn=function(e){var t=e.free_response;return t?n(r,{children:n("div",{className:"free-response",children:t})}):null},Gn=function(r){var t=r.question,a=r.answer_id,i=r.hasMultipleAttempts,o=r.attempts_remaining,s=r.published_comments,l=r.detailedSolution,c=r.canAnswer,d=r.needsSaved,u=r.attempt_number,p=r.apiIsPending,m=r.onAnswerSave,h=r.onNextStep,b=r.canUpdateCurrentStep,g=r.available_points;return e("div",{"data-test-id":"student-exercise-question",children:[n(X,{task:r.task,question:t,answerIdOrder:r.answer_id_order,choicesEnabled:r.choicesEnabled,answer_id:a,questionNumber:r.questionNumber,onChange:r.onAnswerChange,feedback_html:r.feedback_html,correct_answer_feedback_html:r.correct_answer_feedback_html,correct_answer_id:r.is_completed?r.correct_answer_id:null,incorrectAnswerId:r.incorrectAnswerId,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:r.displaySolution,show_all_feedback:r.show_all_feedback,children:n(Mn,{free_response:r.free_response})}),n(tn,{className:"step-card-footer",children:e("div",{className:"step-card-footer-inner",children:[e("div",{className:"points",children:[e("strong",{children:["Points: ",g]}),n("span",{className:"attempts-left",children:i&&o>0&&n(Fn,{count:o})}),n(Qn,{published_comments:s}),l&&e("div",{children:[n("strong",{children:"Detailed solution:"})," ",n(f,{html:l})]})]}),n("div",{className:"controls",children:c&&d?n(Un,{disabled:p||!a,isWaiting:p,attempt_number:u,onClick:function(){return m("string"==typeof(n=t.id)?parseInt(n,10):n);var n}}):n(Wn,{onNextStep:h,canUpdateCurrentStep:b})})]})})]})},Kn=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"],Vn=o(Tn)(Hn||(Hn=h(["\n  font-size: 1.8rem;\n  line-height: 3rem;\n"]))),Yn=function(t){var a=t.exercise;return e(r,{children:[a.context&&n(f,{className:"step-card-body exercise-context",block:!0,html:a.context}),a.stimulus_html&&n(f,{className:"step-card-body exercise-stimulus",block:!0,html:a.stimulus_html})]})},Jn=function(r){var t=r.numberOfQuestions,o=r.questionNumber,s=r.step,c=r.exercise,d=r.show_all_feedback,u=r.scrollToQuestion,h=m(r,Kn),b="feedback_html"in s;return a.useEffect(function(){var n=document.querySelector('.openstax-question[data-question-number="'+u+'"]');n&&l(n)},[u,c]),e(Vn,{step:s,questionNumber:o,numberOfQuestions:b?t:c.questions.length,children:[n(Yn,{exercise:c}),c.questions.map(function(n,e){var r,t=p({},b?s:h.questionStates[n.id]);return i(Gn,p({},h,t,{exercise_uid:c.uid,key:n.id,question:n,questionNumber:o+e,choicesEnabled:t.canAnswer,displaySolution:!0,detailedSolution:null==(r=t.solution)?void 0:r.content_html,show_all_feedback:d,canUpdateCurrentStep:"canUpdateCurrentStep"in h?h.canUpdateCurrentStep:!(e+1===c.questions.length)}))})]})},Xn=o.div(Pn||(Pn=h(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding: 2rem;\n  ","\n"])),G(jn||(jn=h(["\n    padding: 0;\n  "])))),Zn=o.span(Ln||(Ln=h(['\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n\n  &::after {\n    content: "";\n    display: block;\n    height: 0.1rem;\n    width: 1rem;\n    background-color: ',";\n  }\n\n  &:last-child {\n    &::after {\n      content: none;\n    }\n  }\n\n  ","\n"])),M.palette.pale,G(Rn||(Rn=h(["\n    &::after {\n      width: 3.3rem;\n    }\n  "])))),$n=o.button(Dn||(Dn=h(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  margin: 0 0.3rem;\n  font-weight: bold;\n  cursor: pointer;\n  ","\n"])),function(n){return function(n,e){switch(n){case"isCorrect":return s(zn||(zn=h(["\n        color: ",";\n        background-color: rgba(99, 165, 36, 0.6);\n        border-color: ",";\n        box-shadow: ",";\n      "])),M.palette.white,M.palette.darkGreen,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return s(Bn||(Bn=h(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),M.palette.white,M.palette.lightRed,M.palette.darkRed,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return s(En||(En=h(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),M.palette.darkGray,e?M.palette.white:M.palette.neutralLight,e?M.palette.darkGray:M.palette.neutralLight,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}}(n.variant,n.isActive)}),ne=function(e){var r=e.index,t=e.step,a=e.goToStep;return n(Zn,{children:n($n,{variant:t.variant,isActive:e.isActive,onClick:function(){return a(r,t)},children:r+1})})},ee=function(e){var r=e.activeIndex,t=e.goToStep;return n(Xn,{children:e.steps.map(function(e,a){return n(ne,{index:a,isActive:a===r,step:e,goToStep:t},a)})})};export{x as Answer,U as AnswersTable,Jn as Exercise,un as FreeResponseInput,cn as FreeResponseTextArea,qn as InnerStepCard,Sn as OuterStepCard,ee as ProgressBar,ne as ProgressBarItem,X as Question,Z as QuestionHtml,On as StepCard,$n as StyledItem,Tn as TaskStepCard};
//# sourceMappingURL=index.module.js.map
