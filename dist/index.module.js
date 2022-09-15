import{jsx as n,jsxs as e,Fragment as r}from"react/jsx-runtime";import t from"classnames";import a,{createElement as i}from"react";import o,{css as s}from"styled-components";var l="abcdefghijklmnopqrstuvwxyz",c=function(n,e){return n.id===e};function d(n){var e=n.trim().match(/\b[-?(\w+)?]+\b/gi);return e?e.length:0}function u(){return u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},u.apply(this,arguments)}function m(n,e){if(null==n)return{};var r,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)e.indexOf(r=i[t])>=0||(a[r]=n[r]);return a}function p(n,e){return e||(e=n.slice(0)),n.raw=e,n}var h=["html","component","block"],b=function(e){var r=e.html,t=e.component,i=e.block,o=void 0!==i&&i,s=m(e,h);return void 0!==t?a.cloneElement(t,u({html:r},s)):n(o?"div":"span",u({dangerouslySetInnerHTML:{__html:r}},s))},f=function(e){return n("aside",{children:n(b,{component:e.contentRenderer,className:t("question-feedback-content","has-html",e.className),html:e.children,block:!0})})},w=function(r){var a=t("question-feedback",r.position||"bottom");return e("aside",{className:a,children:[n("div",{className:"arrow","aria-label":"Answer Feedback"}),n(f,u({},r,{children:r.children}))]})},g=function(a){var i,o,s,d,u,m=a.type,p=a.iter,h=a.answer,w=a.disabled,g=a.onKeyPress,x=a.qid,v=a.correctAnswerId,k=a.incorrectAnswerId,y=a.hasCorrectAnswer,N=a.answered_count,_=a.contentRenderer,C=a.show_all_feedback,q=function(n,e){return Boolean((e||[]).find(function(e){return e==n.id}))}(h,a.chosenAnswer),S=function(n,e){if(!n.id&&!e)return n.isCorrect;var r=n.id===e;return null!=n.correctness&&(r="1.0"===n.correctness),r}(h,v),A=c(h,k),O=n("div",{className:"correct-incorrect",children:S&&a.correctIncorrectIcon}),I=t("answers-answer",{disabled:w,"answer-checked":q,"answer-correct":S&&"student-mpp"!==m,"answer-incorrect":k&&c(h,k)}),H=(q?"Selected ":"")+"Choice "+l[p];if(y&&(H+="("+(S?"Correct":"Incorrect")+" Answer)"),H+=":",y||"teacher-review"===m||"teacher-preview"===m||"student-mpp"===m||(d=a.onChangeAnswer),d&&(u=n("input",{type:"radio",className:"answer-input-box",checked:q,id:x+"-option-"+p,name:x+"-options",onChange:d,disabled:w})),C&&h.feedback_html&&(o=n(f,{contentRenderer:_,children:h.feedback_html},"question-mc-feedback")),"teacher-review"===m){var P=0;h.selected_count&&N&&(P=Math.round(h.selected_count/N*100)),s=n("span",{className:"selected-count","data-percent":""+P,children:h.selected_count}),i=e("div",{className:"review-wrapper",children:[e("div",{className:t("review-count",{green:S,red:!S}),children:[s,n("span",{className:t("letter",{green:S,red:!S}),children:l[p]})]}),e("div",{className:"answer-answer",children:[n(b,{className:"answer-content",component:_,html:h.content_html}),o]})]})}else i=e(r,{children:["teacher-preview"===m&&O,s,u,e("label",{onKeyPress:g,htmlFor:x+"-option-"+p,className:"answer-label",children:[n("span",{className:"answer-letter-wrapper",children:n("button",{onClick:d,"aria-label":H,className:"answer-letter",disabled:w||A,"data-test-id":"answer-choice-"+l[p],children:l[p]})}),e("div",{className:"answer-answer",children:[n(b,{className:"answer-content",component:_,html:h.content_html}),o]})]})]});return n("div",{className:"openstax-answer",children:n("section",{role:"region",className:I,children:i})})};g.displayName="OSAnswer";var x,v,k,y,N,_,C,q,S,A,O,I,H,P,T,z,j,B,L,R,D,E,F,Q=function(r){var t=0,a=r.question,i=r.type,o=r.correct_answer_id,s=r.incorrectAnswerId,l=r.feedback_html,c=r.correct_answer_feedback_html,d=r.show_all_feedback,m=r.answerIdOrder,p=r.instructions;if(r.hideAnswers)return null;var h,b=[],f={qid:a.id||"auto-"+t++,correctAnswerId:o,incorrectAnswerId:s,hasCorrectAnswer:r.hasCorrectAnswer,chosenAnswer:[r.answer_id],onChangeAnswer:r.onChangeAnswer,type:void 0===i?"student":i,answered_count:r.answered_count,disabled:!r.choicesEnabled,show_all_feedback:void 0!==d&&d,onKeyPress:r.onKeyPress},x=(m?(h=m,a.answers.slice().sort(function(n,e){return h.indexOf(n.id)-h.indexOf(e.id)})):a.answers).map(function(e,r){var t=Object.assign({},{answer:e,iter:r,key:f.qid+"-option-"+r},f);return e.id===s&&l?b.push({index:r,html:l}):e.id===o&&c&&b.push({index:r,html:c}),n(g,u({},t))});return b.forEach(function(e,t){var a=e.index+t+1;x.splice(a,0,n(w,{contentRenderer:r.contentRenderer,children:e.html},a))}),e("div",{className:"answers-table",children:[p,x]})},W={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},M={palette:W,answer:{color:W.lightBlue,correct:{color:W.green,background:"#77af42"},incorrect:{color:W.red,background:W.red},checked:W.lightBlue,hover:W.neutralDark,label:{color:W.neutralMedium,colorHover:W.neutralDark,colorSelected:W.lightBlue},feedback:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",popover:{borderColor:"rgba(0, 0, 0, 0.2)"}}},card:{background:"#daf3f8"},button:{background:W.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:W.neutralDark,background:W.neutralLighter}},U=function(){return s(x||(x=p(["@media(max-width: ","px) { "," }"])),600,s.apply(void 0,[].slice.call(arguments)))},K=function(){return s(v||(v=p(["@media(max-width: ","px) { "," }"])),999,s.apply(void 0,[].slice.call(arguments)))},G=function(){return s(k||(k=p(["@media(min-width: ","px) { "," }"])),1e3,s.apply(void 0,[].slice.call(arguments)))},V={answer:function(){return s(N||(N=p(["\n    .answer-label {\n      display: flex;\n    }\n    color: ",";\n    .answer-letter {\n      width: ",";\n      height: ",";\n      min-width: ",";\n      min-height: ",";\n      border-radius: calc("," / 2);\n      border-width: 2px;\n      border-style: solid;\n      border-color: #c6c6c6;\n      color: ",";\n      transition: color ",", border-color ",", background-color ",";\n      background-color: ",";\n    }\n  "])),M.answer.label.color,"4rem","4rem","4rem","4rem","4rem",M.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",M.palette.white)},answerColor:function(n){return s(_||(_=p(["\n    color: ",";\n    .answer-letter {\n       border-color: ",";\n       background-color: ",";\n       color: ",";\n    }\n  "])),n.color,n.color,n.background,M.palette.white)},answerChecked:function(){return V.answerColor({color:M.answer.checked,background:M.answer.checked})},answerCorrect:function(){return V.answerColor(M.answer.correct)},answerIncorrect:function(){return V.answerColor(M.answer.incorrect)},answerHover:function(){return s(C||(C=p(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n    }\n  "])),M.answer.label.colorHover,M.answer.label.colorSelected)},answerCorrectText:function(){return s(q||(q=p(["\n    content: 'correct answer';\n    color: ",";\n    margin-left: calc(-1.25 * ",");\n    width: calc(1.25 * ",");\n    text-align: center;\n    font-size: 1.2rem;\n    // em used here for line-height for compatibility with IE\n    // http://caniuse.com/#feat=rem -- rem ignored in pseudo elements\n    line-height: 1em;\n    margin-top: 0.8rem;\n  "])),M.answer.label.color,"4rem","4rem")},answerCorrectAnswer:function(){return s(S||(S=p(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n      color: ",";\n    }\n    &::before {\n     ","\n      @media screen and (max-width: ","px) {\n        display: none;\n      }\n    }\n    @media screen and (max-width:  ","px) {\n      .answer-letter-wrapper {\n        display: flex;\n        flex-direction: column;\n        &::after {\n          ","\n          width: $openstax-answer-bubble-size !important;\n          margin-left: 0;\n        }\n      }\n    }\n  "])),M.answer.correct.color,M.answer.correct.color,M.answer.correct.color,V.answerCorrectText(),999,999,V.answerCorrectText())},resetText:function(){return s(A||(A=p(['\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.6;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    white-space: normal;\n    line-break: auto;\n  '])))},stepCardPadding:function(){return s(O||(O=p(["\n    padding: 48px 140px;\n\n    ","\n\n    ","\n  "])),K(I||(I=p(["\n      padding: "," ",";\n    "])),"24px","24px"),U(H||(H=p(["\n      padding: calc("," * 2) ",";\n    "])),"8px","8px"))}},Y=o.div(P||(P=p(["\n&.step-card-body {\n  ",";\n}\n\n&.openstax-question {\n  font-size: 2rem;\n\n  .detailed-solution {\n    margin-bottom: 1rem;\n    .header {\n      display: inline;\n      margin-right: 0.5rem;\n      color: #5e6062;\n      font-weight: bold;\n      flex-basis: 0;\n    }\n    .solution {\n      display: inline;\n      color: #6f6f6f;\n    }\n  }\n\n  img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n  }\n\n  .question-stem {\n    margin-bottom: 0;\n  }\n\n  .answers-table {\n    margin-bottom: 20px;\n    font-size: 17px;\n    line-height: 25px;\n  }\n\n  .instructions {\n    font-size: 1.4rem;\n    font-style: italic;\n    margin-top: 10px;\n    color: ",";\n    margin: 0;\n\n    i {\n      margin-left: 5px;\n    }\n\n    .text-info {\n      color: ",";\n      padding-left: 5px;\n      cursor: pointer;\n      font-style: normal;\n    }\n  }\n\n  .multiple-choice-prompt {\n    font-weight: 600;\n  }\n\n  .free-response {\n    padding: "," ",";\n    margin: "," 0 "," ",";\n    border-left: "," solid ",";\n    font-style: italic;\n  }\n\n  &:not(.openstax-question-preview) {\n    .answers-answer {\n      width: initial;\n      &:not(.disabled){\n        .answer-label:focus{\n          background-color: ",";\n        }\n      }\n      ",";\n    }\n\n    .answer-answer {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      margin-left: ",";\n      * {\n        margin: 0;\n      }\n    }\n\n    .answer-letter {\n      text-align: center;\n      padding: 0;\n    }\n\n\n    .answer-label {\n      font-weight: normal;\n      width: 100%;\n      padding: "," 0 0 0;\n      margin: 0;\n\n      transition: color ",";\n    }\n\n    // a selectable answer\n    .answer-input-box:not([disabled]) ~ .answer-label {\n      cursor: pointer;\n\n      &:hover {\n        ","\n      }\n    }\n\n    // a selected answer\n    &:not(.has-correct-answer) {\n      .answer-input-box {\n        display: none;\n\n        &:checked {\n          + .answer-label,\n          + .answer-label:hover {\n            ",";\n          }\n        }\n      }\n\n      .answer-checked{\n        .answer-label {\n          ",";\n        }\n      }\n    }\n\n    // answer that has been checked\n    &.has-correct-answer {\n      .answer-checked {\n        &:not(.answer-correct) {\n          .answer-label {\n            ",";\n          }\n        }\n\n        &.answer-correct {\n          .answer-label {\n            ",";\n          }\n        }\n      }\n\n      .answer-correct:not(.answer-checked) {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    &.has-incorrect-answer {\n      .answer-incorrect, .answer-checked.answer-incorrect {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    .question-feedback {\n      ","\n\n      z-index: 1;\n      position: relative;\n      border: "," solid ",";\n      background-color: ",";\n      background-clip: padding-box;\n      border-radius: 0.3rem;\n      max-width: ",";\n      margin: calc("," - 5px) 0 "," calc(-1 * (2 * ","));\n      box-shadow: 10px 0px 10px rgba(0, 0, 0, .25);\n      color: ",";\n      font-size: 1.4rem;\n      font-style: italic;\n\n      .arrow {\n        position: absolute;\n        display: block;\n        width: ",";\n        height: ",";\n        margin-left: 30px;\n        top: calc(("," + ",') * -1);\n\n        &::before,\n        &::after {\n          position: absolute;\n          display: block;\n          content: "";\n          border-color: transparent;\n          border-style: solid;\n          border-width: 0 calc('," / 2) "," calc("," / 2);\n        }\n        &::before {\n          top: 0;\n          border-bottom-color: ",";\n        }\n        &::after {\n          top: ",";\n          border-bottom-color: ",";\n        }\n      }\n\n      .question-feedback-content {\n        padding: "," ",";\n      }\n    }\n  }\n\n  .openstax-answer {\n    border-top: 1px solid #d5d5d5;\n    margin: 10px 0;\n    padding: 10px 0;\n  }\n}\n"])),V.stepCardPadding(),M.palette.neutral,M.palette.neutralLightBlue,"1rem","2.5rem","1.5rem","1rem","1.5rem","1rem",M.palette.neutralLighter,M.palette.neutralLightest,V.answer(),"1rem","1.5rem","0.1s ease-in-out",V.answerHover(),V.answerChecked(),V.answerChecked(),V.answerIncorrect(),V.answerCorrect(),V.answerCorrectAnswer(),V.answerIncorrect(),V.resetText(),"1px",M.answer.feedback.popover.borderColor,M.palette.white,"370px","15px","1rem","1rem",M.palette.neutral,"20px","15px","15px","1px","20px","15px","20px",M.answer.feedback.popover.borderColor,"1px",M.palette.white,"2rem","2rem"),$=function(r){var a,i,o=r.question,s=r.exercise_uid,l=r.questionNumber,c=r.context,d=r.task,m=r.hidePreambles,p=o.stem_html,h=o.collaborator_solutions,f=void 0===h?[]:h,w=o.formats,g=o.stimulus_html,x=!!r.correct_answer_id,v=t("openstax-question",r.className,{"has-correct-answer":x&&!((null!=d?d.is_deleted:void 0)&&"homework"===(null!=d?d.type:void 0)),"has-incorrect-answer":!!r.incorrectAnswerId});return null!=s&&(a=n("div",{className:"exercise-uid",children:s})),function(){var n=o.collaborator_solutions,e=void 0===n?[]:n;return r.displaySolution&&e&&e.find(function(n){return void 0!==n.content_html})}()&&(i=e("div",{className:"detailed-solution",children:[n("div",{className:"header",children:"Detailed solution:"}),n(b,{className:"solution",block:!0,html:f.map(function(n){return n.content_html}).join("")})]})),e(Y,{className:v,"data-question-number":l,"data-test-id":"question",children:[n(J,{type:"context",html:c,hidden:m}),n(J,{type:"stimulus",html:g,hidden:m}),n(J,{type:"stem",html:p,hidden:m,questionNumber:l}),r.children,n(Q,u({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:x})),i,r.displayFormats?n(X,{formats:w}):void 0,a]})},J=function(e){var r=e.html,t=void 0===r?"":r;return!0!==e.hidden&&t.length>0?n(b,{html:t,"data-question-number":e.questionNumber,className:"question-"+e.type,block:!0}):null},X=function(r){var t=r.formats,a=void 0===t?[]:t;return e("div",{className:"formats-listing",children:[n("div",{className:"header",children:"Formats:"}),a.map(function(e,r){return n("span",{children:e},r)})]})},Z=["disabled","isWaiting","waitingText","children"],nn=o.button(T||(T=p(["\n  background-color: ",";\n  color: ",";\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n\n  &:not([disabled]) {\n    cursor: pointer;\n    &:hover {\n      background: ","\n    }\n    &:active {\n      background: ","\n    }\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n"])),M.button.background,M.palette.white,M.button.backgroundHover,M.button.backgroundActive),en=function(e){var r=e.disabled,t=e.isWaiting,a=e.waitingText,i=e.children,o=m(e,Z);return n(nn,u({},o,{disabled:t||r,children:t&&a||i}))},rn=o.div(z||(z=p(["\n    ","\n    border-top: 1px solid ",";\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-size: 1.4rem;\n    line-height: 2rem;\n\n    > * {\n        flex-grow: 1;\n    }\n\n    button {\n        width: 160px;\n        height: 48px;\n    }\n\n    .points {\n        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        .attempts-left {\n            color: #F36B32;\n        }\n    }\n\n    .controls {\n        display: flex;\n        flex-flow: column wrap-reverse;\n        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        button + button {\n            margin: 0.8rem 0 0 0;\n        }\n    }\n\n    ","\n"])),V.stepCardPadding(),M.palette.pale,G(j||(j=p(["\n        padding: 32px 140px;\n        flex-wrap: nowrap;\n\n        .points {\n            max-width: 400px;\n        }\n\n        .controls {\n            flex-flow: row;\n            justify-content: flex-end;\n\n            button + button {\n                margin: 0 0 0 0.8rem;\n            }\n        }\n    "])))),tn=s(B||(B=p(["\n  background-color: #f5e9ea;\n"]))),an=o.div(L||(L=p(["\n  display: flex;\n  flex-direction: column;\n\n  .step-card-body {\n    ","\n  }\n"])),V.stepCardPadding()),on=o.div(R||(R=p(["\n  font-size: 2rem;\n  line-height: 1.68em;\n  position: relative;\n"]))),sn=o.div(D||(D=p(["\n  margin: 8px 0;\n  display: flex;\n  justify-content: ",";\n  line-height: 1.6rem;\n\n  .word-limit-error-info {\n    color: ",";\n  }\n\n  div > span {\n    font-size: 12px;\n    line-height: 16px;\n\n    + span {\n      margin-left: 1rem;\n    }\n  }\n\n  .last-submitted + * {\n    margin-top: 0.8rem;\n  }\n\n  color: ",";\n"])),function(n){return n.hasChildren?"space-between":"flex-end"},M.palette.danger,M.palette.neutralThin),ln=o.textarea(E||(E=p(["\n  display: block;\n  font-family: inherit;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  width: 100%;\n  min-height: 10.5em;\n  line-height: 1.5em;\n  margin: 2.5rem 0 0 0;\n  padding: 0.5em;\n  border: 1px solid ",";\n  color: ",";\n  ",";\n  ","\n  background-color: ",";\n"])),M.palette.neutral,M.palette.neutralDark,function(n){return n.isOverWordLimit&&tn},function(n){return n.isOverWordLimit&&s(F||(F=p(["\n    border: 2px solid ",";\n  "])),M.palette.danger)},function(n){return n.readOnly&&M.palette.neutralCool});ln.displayName="OSFreeResponseTextArea";var cn=function(e){return n(en,u({},e,{children:"Cancel"}))},dn=function(r){var t=r.availablePoints,a=r.cancelHandler,i=r.defaultValue,o=r.infoRowChildren,s=r.isSubmitDisabled,l=r.pointsChildren,c=r.question,m=r.questionNumber,p=r.saveHandler,h=r.submitBtnLabel,b=r.textHasChanged,f=r.wordLimit,w=d(i)>f,g={};return m&&(g["data-question-number"]=m),e(an,{"data-test-id":"student-free-response",children:[e("div",{className:"step-card-body",children:[n(on,u({},g,{children:c.stem_html&&n(J,{type:"stem",html:c.stem_html,hidden:!1})})),n(ln,u({},r,{isOverWordLimit:w,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),e(sn,{hasChildren:!!o,children:[o,e("div",{children:[e("span",{children:[d(i)," words"]}),w&&e("span",{className:"word-limit-error-info",children:["Maximum ",f," words"]})]})]})]}),e(rn,{children:[e("div",{className:"points",children:[e("strong",{children:["Points: ",t]}),l]}),e("div",{className:"controls",children:[n(cn,{disabled:!b,onClick:a}),n(en,{"data-test-id":"submit-answer-btn",disabled:s||w,onClick:p,children:h})]})]})]})};dn.displayName="OSFreeResponse";var un,mn,pn,hn,bn,fn,wn,gn,xn,vn,kn,yn,Nn=["questionNumber","numberOfQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],_n=["step","questionNumber","numberOfQuestions","children","className"],Cn=o.div(un||(un=p(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 400px;\n  border-radius: 0.25rem;\n  margin: 0 auto 5rem auto;\n  border: 1px solid ",";\n  border-radius: 0.25rem;\n  background-color: white;\n\n  ","\n"])),M.palette.light,G(mn||(mn=p(["\n    max-width: 1000px;\n    min-width: 750px;\n  "])))),qn=o.div(pn||(pn=p(["\n  padding: 2rem;\n\n  ","\n"])),K(hn||(hn=p(["\n    padding: 0;\n  "])))),Sn=o.div(bn||(bn=p(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: ",";\n  font-size: 1.8rem;\n  line-height: 3rem;\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n\n  div.question-info {\n    font-weight: bold;\n\n    .ox-icon-lock {\n        margin-right: 1rem;\n    }\n  }\n\n  .num-questions, .points, .separator {\n      display: none;\n  }\n\n  .exercise-id, .separator {\n      font-weight: normal;\n  }\n\n  .separator {\n      margin: 0 1rem;\n  }\n\n  .exercise-id {\n      height: 28px; // Fix baseline issue\n  }\n\n  button {\n    color: ",";\n  }\n\n  .openstax-exercise-badges {\n      margin: 0;\n      line-height: 2rem;\n      svg {\n          display: block;\n          &:not(.interactive) {\n              margin: 0 0 0 6px !important;\n          }\n      }\n  }\n\n  ","\n\n    /*\n    1. Show the arrows to move to previous and next question.\n    2. Show the number of questions.\n    3. Override box-shadow of icons when turned into a button.\n    */\n    ","\n\n  ","\n"])),M.card.background,M.palette.gray,G(fn||(fn=p(["\n      button.ox-icon-angle-left, button.ox-icon-angle-right {\n          display: none;\n      }\n      .separator {\n          display: inherit;\n      }\n  "]))),K(wn||(wn=p(["\n        font-size: 1.6rem;\n        line-height: 2.5rem;\n\n        svg.ox-icon {\n            display: inherit;\n            margin: 0;\n        }\n        button.ox-icon-angle-left {\n            margin-right: ",";\n        }\n        button.ox-icon-angle-right {\n            margin-left: ",";\n        }\n        .openstax-exercise-badges svg {\n            display: none;\n        }\n        .num-questions, points {\n            display: inherit;\n        }\n\n        .exercise-id {\n            display: none;\n        }\n\n        button[class^='ox-icon-angle']:hover {\n            box-shadow: none;\n        }\n  "])),"24px","24px"),U(gn||(gn=p(["\n      font-size: 1.4rem;\n      line-height: 2rem;\n      padding: 10px 8px;\n\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n  "])),"8px","8px"));Sn.displayName="StepCardHeader";var An=o.div(xn||(xn=p(["\n  .step-card-body {\n    ","\n  }\n\n    & + div .step-card-body {\n        padding-top: 0;\n    }\n\n    &.exercise-context, &.exercise-stimulus, &.exercise-stem {\n        padding-bottom: 0;\n    }\n\n    ","\n\n    .reading-step & {\n        padding: 0;\n    }\n\n    ","\n\n    ","\n\n    &&& {\n        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }\n    }\n"])),V.stepCardPadding(),function(){return s(y||(y=p(["@media(max-width: ","px) { "," }"])),600,s.apply(void 0,[].slice.call(arguments)))}(vn||(vn=p(["\n        && .question-feedback {\n            margin-left: 0;\n\n           .arrow { margin-left: 12px; }\n        }\n    "]))),G(kn||(kn=p(["\n        .video-step &, .interactive-step & {\n            .openstax-exercise-badges {\n              margin-right: 3.8rem;\n            }\n        }\n    "]))),U(yn||(yn=p(["\n        .openstax-exercise-badges svg {\n            margin-right: ",";\n        }\n    "])),"8px")),On=function(r){var t=r.questionNumber,a=r.numberOfQuestions,i=r.stepType,o=r.isHomework,s=r.availablePoints,l=r.unpadded,c=r.className,d=r.children,p=r.questionId,h=r.multipartBadge,b=r.leftHeaderChildren,f=r.rightHeaderChildren,w=r.headerTitleChildren,g=m(r,Nn);return e(qn,u({},g,{children:[h,e(Cn,{className:c,children:[t&&o&&"exercise"===i&&e(Sn,{children:[e("div",{children:[b,e("div",{className:"question-info",children:[w,e("span",{children:["Question ",t]}),e("span",{className:"num-questions",children:[" / ",a]}),n("span",{className:"separator",children:"|"}),e("span",{className:"question-id",children:["ID: ",p]})]})]}),e("div",{children:[s&&e("div",{className:"points",children:[s," Points"]}),f]})]}),n(An,{unpadded:l,children:d})]})]}))};On.displayName="OSStepCard";var In=function(e){var r=e.step,a=e.questionNumber,i=e.numberOfQuestions,o=e.children,s=e.className,l=m(e,_n);return n(On,u({},l,{unpadded:!0,questionNumber:a,numberOfQuestions:i,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:t(("type"in r?r.type:"exercise")+"-step",s),questionId:r.uid,children:o}))};In.displayName="OSTaskStepCard";var Hn,Pn=function(n){var r=n.count;return e("div",{children:[r," attempt",1===r?"":"s"," left"]})},Tn=function(r){var t=r.published_comments;return t?e("div",{children:[n("strong",{children:"Feedback:"})," ",t]}):null},zn=function(e){return n(en,u({},e,{waitingText:"Saving…",isWaiting:e.isWaiting,"data-test-id":"submit-answer-btn",children:0==e.attempt_number?"Submit":"Re-submit"}))},jn=function(e){return n(en,{onClick:e.onNextStep,"data-test-id":"continue-btn",children:e.canUpdateCurrentStep?"Continue":"Next"})},Bn=function(e){var t=e.free_response;return t?n(r,{children:n("div",{className:"free-response",children:t})}):null},Ln=function(r){var t=r.answer_id,a=r.hasMultipleAttempts,i=r.attempts_remaining,o=r.published_comments,s=r.detailedSolution,l=r.canAnswer,c=r.needsSaved,d=r.attempt_number,u=r.apiIsPending,m=r.onAnswerSave,p=r.onNextStep,h=r.canUpdateCurrentStep,f=r.available_points;return e("div",{"data-test-id":"student-exercise-question",children:[n($,{task:r.task,question:r.question,answerIdOrder:r.answer_id_order,choicesEnabled:r.choicesEnabled,answer_id:t,questionNumber:r.questionNumber,onChange:r.onAnswerChange,feedback_html:r.feedback_html,correct_answer_feedback_html:r.correct_answer_feedback_html,correct_answer_id:r.is_completed?r.correct_answer_id:null,incorrectAnswerId:r.incorrectAnswerId,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:r.displaySolution,children:n(Bn,{free_response:r.free_response})}),e(rn,{className:"step-card-footer",children:[e("div",{className:"points",children:[e("strong",{children:["Points: ",f]}),n("span",{className:"attempts-left",children:a&&i>0&&n(Pn,{count:i})}),n(Tn,{published_comments:o}),s&&e("div",{children:[n("strong",{children:"Detailed solution:"})," ",n(b,{html:s})]})]}),n("div",{className:"controls",children:l&&c?n(zn,{disabled:u||!t,isWaiting:u,attempt_number:d,onClick:m}):n(jn,{onNextStep:p,canUpdateCurrentStep:h})})]})]})},Rn=["numberOfQuestions","questionNumber","step","exercise","canAnswer","needsSaved"],Dn=o(In)(Hn||(Hn=p(["\n  font-size: 1.8rem;\n  line-height: 3rem;\n"]))),En=function(t){var a=t.exercise;return e(r,{children:[a.context&&n(b,{className:"step-card-body exercise-context",block:!0,html:a.context}),a.stimulus_html&&n(b,{className:"step-card-body exercise-stimulus",block:!0,html:a.stimulus_html})]})},Fn=function(r){var t=r.numberOfQuestions,a=r.questionNumber,o=r.step,s=r.exercise,l=r.canAnswer,c=r.needsSaved,d=m(r,Rn);return e(Dn,{step:o,questionNumber:a,numberOfQuestions:t,children:[n(En,{exercise:s}),s.questions.map(function(n){var e,r=u({},"feedback_html"in o?o:d.questionStates[n.id]);return i(Ln,u({},d,r,{exercise_uid:s.uid,key:n.id,question:n,questionNumber:a,choicesEnabled:l,canAnswer:l,needsSaved:c,canUpdateCurrentStep:l,displaySolution:!0,detailedSolution:null==(e=r.solution)?void 0:e.content_html}))})]})};export{g as Answer,Q as AnswersTable,Fn as Exercise,dn as FreeResponseInput,ln as FreeResponseTextArea,Cn as InnerStepCard,qn as OuterStepCard,$ as Question,J as QuestionHtml,On as StepCard,In as TaskStepCard};
//# sourceMappingURL=index.module.js.map
