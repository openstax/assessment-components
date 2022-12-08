import{jsx as n,jsxs as e,Fragment as r}from"react/jsx-runtime";import t from"classnames";import i,{createElement as a}from"react";import o,{css as s}from"styled-components";import l from"scroll-to-element";import{faBookOpen as c}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as d}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as u}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{FontAwesomeIcon as p}from"@fortawesome/react-fontawesome";import{BulletList as m}from"react-content-loader";var h="abcdefghijklmnopqrstuvwxyz",f=function(n,e){return n.id===e};function b(n){var e=n.trim().match(/\b[-?(\w+)?]+\b/gi);return e?e.length:0}function g(){return g=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},g.apply(this,arguments)}function w(n,e){if(null==n)return{};var r,t,i={},a=Object.keys(n);for(t=0;t<a.length;t++)e.indexOf(r=a[t])>=0||(i[r]=n[r]);return i}function x(n,e){return e||(e=n.slice(0)),n.raw=e,n}var v=["html","component","block"],k=function(e){var r=e.html,t=e.component,a=e.block,o=void 0!==a&&a,s=w(e,v);return void 0!==t?i.cloneElement(t,g({html:r},s)):n(o?"div":"span",g({dangerouslySetInnerHTML:{__html:r}},s))},y=function(e){return n("aside",{children:n(k,{component:e.contentRenderer,className:t("question-feedback-content","has-html",e.className),html:e.children,block:!0})})},_=function(r){var i=t("question-feedback",r.position||"bottom");return e("aside",{className:i,children:[n("div",{className:"arrow","aria-label":"Answer Feedback"}),n(y,g({},r,{children:r.children}))]})},N=function(i){var a,o,s,l,c,d=i.type,u=i.iter,p=i.answer,m=i.disabled,b=i.onKeyPress,g=i.qid,w=i.correctAnswerId,x=i.incorrectAnswerId,v=i.hasCorrectAnswer,_=i.answered_count,N=i.contentRenderer,C=i.show_all_feedback,q=i.tableFeedbackEnabled,S=function(n,e){return Boolean((e||[]).find(function(e){return e==n.id}))}(p,i.chosenAnswer),A=function(n,e){if(!n.id&&!e)return n.isCorrect;var r=n.id===e;return null!=n.correctness&&(r="1.0"===n.correctness),r}(p,w),O=f(p,x),I=n("div",{className:"correct-incorrect",children:A&&i.correctIncorrectIcon}),T=t("answers-answer",{disabled:m,"answer-checked":S,"answer-correct":A&&"student-mpp"!==d,"answer-incorrect":x&&f(p,x)}),H=(S?"Selected ":"")+"Choice "+h[u];v&&(H+="("+(A?"Correct":"Incorrect")+" Answer)"),H+=":";var j=function(){return l&&l(p)};if(v||"teacher-review"===d||"teacher-preview"===d||"student-mpp"===d||(l=i.onChangeAnswer),l&&(c=n("input",{type:"radio",className:"answer-input-box",checked:S,id:g+"-option-"+u,name:g+"-options",onChange:j,disabled:m})),C&&p.feedback_html&&!q&&(o=n(y,{contentRenderer:N,children:p.feedback_html},"question-mc-feedback")),"teacher-review"===d){var P=0;p.selected_count&&_&&(P=Math.round(p.selected_count/_*100)),s=n("span",{className:"selected-count","data-percent":""+P,children:p.selected_count}),a=e("div",{className:"review-wrapper",children:[e("div",{className:t("review-count",{green:A,red:!A}),children:[s,n("span",{className:t("letter",{green:A,red:!A}),children:h[u]})]}),e("div",{className:"answer-answer",children:[n(k,{className:"answer-content",component:N,html:p.content_html}),o]})]})}else a=e(r,{children:["teacher-preview"===d&&I,s,c,e("label",{onKeyPress:b,htmlFor:g+"-option-"+u,className:"answer-label",children:[n("span",{className:"answer-letter-wrapper",children:n("button",{onClick:j,"aria-label":H,className:"answer-letter",disabled:m||O,"data-test-id":"answer-choice-"+h[u],children:h[u]})}),e("div",{className:"answer-answer",children:[n(k,{className:"answer-content",component:N,html:p.content_html}),o]})]})]});return n("div",{className:"openstax-answer",children:n("section",{role:"region",className:T,children:a})})};N.displayName="OSAnswer";var C,q,S,A,O,I,T,H,j,P,R,E,z,B,F,L,Q,U,D,W,G,M,K,V,Y=function(r){var t=0,i=r.question,a=r.type,o=r.correct_answer_id,s=r.incorrectAnswerId,l=r.feedback_html,c=r.correct_answer_feedback_html,d=r.show_all_feedback,u=void 0!==d&&d,p=r.tableFeedbackEnabled,m=r.answerIdOrder,h=r.instructions;if(r.hideAnswers)return null;var f,b=[],w={qid:i.id||"auto-"+t++,correctAnswerId:o,incorrectAnswerId:s,hasCorrectAnswer:r.hasCorrectAnswer,chosenAnswer:[r.answer_id],onChangeAnswer:r.onChangeAnswer,type:void 0===a?"student":a,answered_count:r.answered_count,disabled:!r.choicesEnabled,show_all_feedback:u,tableFeedbackEnabled:p,onKeyPress:r.onKeyPress},x=(m?(f=m,i.answers.slice().sort(function(n,e){return f.indexOf(n.id)-f.indexOf(e.id)})):i.answers).map(function(e,r){var t={answer:g({},e,{question_id:"string"==typeof i.id?parseInt(i.id,10):i.id}),iter:r,key:w.qid+"-option-"+r},a=Object.assign({},t,w);return u&&e.feedback_html&&p?b.push({index:r,html:e.feedback_html}):e.id===s&&l?b.push({index:r,html:l}):e.id===o&&c&&b.push({index:r,html:c}),n(N,g({},a))});return b.forEach(function(e,t){var i=e.index+t+1;x.splice(i,0,n(_,{contentRenderer:r.contentRenderer,children:e.html},i))}),e("div",{className:"answers-table",children:[h,x]})},J={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},X={palette:J,answer:{color:J.lightBlue,correct:{color:J.green,background:"#77af42"},incorrect:{color:J.red,background:J.red},checked:J.lightBlue,hover:J.neutralDark,label:{color:J.neutral,colorHover:J.neutralDark,colorSelected:J.lightBlue}},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:J.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:J.neutralDark,background:J.neutralLighter}},Z=function(){return s(C||(C=x(["@media(max-width: ","px) { "," }"])),600,s.apply(void 0,[].slice.call(arguments)))},$=function(){return s(q||(q=x(["@media(max-width: ","px) { "," }"])),999,s.apply(void 0,[].slice.call(arguments)))},nn=function(){return s(S||(S=x(["@media(min-width: ","px) { "," }"])),1e3,s.apply(void 0,[].slice.call(arguments)))},en={answer:function(){return s(O||(O=x(["\n    .answer-label {\n      display: flex;\n    }\n    color: ",";\n    .answer-letter {\n      width: ",";\n      height: ",";\n      min-width: ",";\n      min-height: ",";\n      border-radius: calc("," / 2);\n      border-width: 2px;\n      border-style: solid;\n      border-color: #c6c6c6;\n      color: ",";\n      transition: color ",", border-color ",", background-color ",";\n      background-color: ",';\n      font-family: "Neue Helvetica W01", Helvetica, Arial, sans-serif;\n    }\n  '])),X.answer.label.color,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",X.answer.label.colorHover,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",X.palette.white)},answerColor:function(n){return s(I||(I=x(["\n    color: ",";\n    .answer-letter {\n       border-color: ",";\n       background-color: ",";\n       color: ",";\n    }\n  "])),n.color,n.color,n.background,X.palette.white)},answerChecked:function(){return en.answerColor({color:X.answer.checked,background:X.answer.checked})},answerCorrect:function(){return en.answerColor(X.answer.correct)},answerIncorrect:function(){return en.answerColor(X.answer.incorrect)},answerHover:function(){return s(T||(T=x(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n    }\n  "])),X.answer.label.colorHover,X.answer.label.colorSelected)},answerCorrectText:function(){return s(H||(H=x(["\n    content: 'correct answer';\n    color: ",";\n    margin-left: calc(-1.34 * ",");\n    display: flex;\n    align-items: center;\n    height: ",";\n    width: 4.8rem;\n    text-align: center;\n    font-size: 1.2rem;\n    line-height: 1.2rem;\n  "])),X.answer.label.color,"3.6rem","3.6rem")},answerCorrectAnswer:function(){return s(j||(j=x(["\n    color: ",";\n    .answer-letter {\n      border-color: ",";\n      color: ",";\n    }\n    &::before {\n     ","\n      @media screen and (max-width: ","px) {\n        display: none;\n      }\n    }\n    @media screen and (max-width:  ","px) {\n      .answer-letter-wrapper {\n        display: flex;\n        flex-direction: column;\n        &::after {\n          ","\n          width: "," !important;\n          margin-left: -0.1rem;\n        }\n      }\n    }\n  "])),X.answer.correct.color,X.answer.correct.color,X.answer.correct.color,en.answerCorrectText(),999,999,en.answerCorrectText(),"3.6rem")},resetText:function(){return s(P||(P=x(['\n    font-family:  "Neue Helvetica W01", Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.6;\n    text-align: left;\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-break: normal;\n    word-spacing: normal;\n    white-space: normal;\n    line-break: auto;\n  '])))},stepCardPadding:function(){return s(R||(R=x(["\n    padding: 48px 140px;\n\n    ","\n\n    ","\n  "])),$(E||(E=x(["\n      padding: "," ",";\n    "])),"24px","24px"),Z(z||(z=x(["\n      padding: calc("," * 2) ",";\n    "])),"8px","8px"))},popover:function(){return s(B||(B=x(["\n    ","\n\n    z-index: 1;\n    position: relative;\n    border: "," solid ",";\n    background-color: ",";\n    background-clip: padding-box;\n    max-width: ",";\n    margin: calc("," - 14px) 0 "," 8px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n    color: ",";\n    font-size: 1.4rem;\n\n    .arrow {\n      position: absolute;\n      display: block;\n      width: ",";\n      height: ",";\n      margin-left: ",";\n      top: calc(",' * -1);\n\n      &::before,\n      &::after {\n        position: absolute;\n        display: block;\n        content: "";\n        border-color: transparent;\n        border-style: solid;\n        border-width: 0 calc('," / 2) "," calc("," / 2);\n      }\n      &::before {\n        top: 0;\n        border-bottom-color: ",";\n      }\n      &::after {\n        top: ",";\n        border-bottom-color: ",";\n      }\n    }\n\n    &.right {\n      right: calc(-"," - ",");\n      .arrow { right: ","; }\n    }\n\n\n    > .content {\n      padding: "," ",";\n    }\n  "])),en.resetText(),"1px",X.popover.borderColor,X.palette.white,"325px","8px","1rem",X.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",X.popover.borderColor,"1px",X.palette.white,"9px","1px","9px","1rem","0.8rem")}},rn=o.div(F||(F=x(["\n&.step-card-body {\n  ",";\n}\n\n&.openstax-question {\n  border-top: 1px solid ",";\n  font-size: 1.8rem;\n\n  .detailed-solution {\n    margin-bottom: 1rem;\n    .header {\n      display: inline;\n      margin-right: 0.5rem;\n      color: #5e6062;\n      font-weight: bold;\n      flex-basis: 0;\n    }\n    .solution {\n      display: inline;\n      color: #6f6f6f;\n    }\n  }\n\n  img {\n    display: block;\n    margin: auto;\n    max-width: 100%;\n  }\n\n  .question-stem {\n    margin-bottom: 0;\n  }\n\n  .answers-table {\n    margin-bottom: 20px;\n    font-size: 1.6rem;\n    line-height: 2rem;\n  }\n\n  .instructions {\n    font-size: 1.4rem;\n    font-style: italic;\n    margin-top: 10px;\n    color: ",";\n    margin: 0;\n\n    i {\n      margin-left: 5px;\n    }\n\n    .text-info {\n      color: ",";\n      padding-left: 5px;\n      cursor: pointer;\n      font-style: normal;\n    }\n  }\n\n  .multiple-choice-prompt {\n    font-weight: 600;\n  }\n\n  .free-response {\n    padding: "," ",";\n    margin: "," 0 "," ",";\n    border-left: "," solid ",";\n    font-style: italic;\n  }\n\n  &:not(.openstax-question-preview) {\n    .answers-answer {\n      width: initial;\n      &:not(.disabled){\n        .answer-label:focus{\n          background-color: ",";\n        }\n      }\n      ",";\n    }\n\n    .answer-answer {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      margin-left: ",";\n      * {\n        margin: 0;\n      }\n    }\n\n    .answers-answer.answer-correct .answer-answer {\n      align-items: flex-start;\n      margin-top: calc(("," / 2) - 1rem);\n    }\n\n    .answer-letter {\n      text-align: center;\n      padding: 0;\n      font-size: 1.6rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .answer-label {\n      font-weight: normal;\n      width: 100%;\n      padding: "," 0 0 0;\n      margin: 0;\n\n      transition: color ",";\n    }\n\n    // a selectable answer\n    .answer-input-box:not([disabled]) ~ .answer-label {\n      cursor: pointer;\n\n      &:hover {\n        ","\n      }\n    }\n\n    // a selected answer\n    &:not(.has-correct-answer) {\n      .answer-input-box {\n        display: none;\n\n        &:checked {\n          + .answer-label,\n          + .answer-label:hover {\n            ",";\n          }\n        }\n      }\n\n      .answer-checked{\n        .answer-label {\n          ",";\n        }\n      }\n    }\n\n    // answer that has been checked\n    &.has-correct-answer {\n      .answer-checked {\n        &:not(.answer-correct) {\n          .answer-label {\n            ",";\n          }\n        }\n\n        &.answer-correct {\n          .answer-label {\n            ",";\n          }\n        }\n      }\n\n      .answer-correct:not(.answer-checked) {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    &.has-incorrect-answer {\n      .answer-incorrect, .answer-checked.answer-incorrect {\n        .answer-label {\n          ","\n        }\n      }\n    }\n\n    .question-feedback {\n      ","\n      max-width: ",";\n      .question-feedback-content {\n        padding: "," ",";\n      }\n    }\n  }\n\n  .openstax-answer {\n    border-top: 1px solid #d5d5d5;\n    margin: 10px 0;\n    padding: 6px 8px;\n  }\n}\n"])),en.stepCardPadding(),X.palette.pale,X.palette.neutral,X.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",X.palette.neutralLighter,X.palette.neutralLightest,en.answer(),"1rem","3.6rem","1rem","0.1s ease-in-out",en.answerHover(),en.answerChecked(),en.answerChecked(),en.answerIncorrect(),en.answerCorrect(),en.answerCorrectAnswer(),en.answerIncorrect(),en.popover(),"370px","0.9rem","1.1rem"),tn=i.forwardRef(function(r,i){var a,o,s=r.question,l=r.exercise_uid,c=r.questionNumber,d=r.context,u=r.task,p=r.hidePreambles,m=s.stem_html,h=s.collaborator_solutions,f=void 0===h?[]:h,b=s.formats,w=s.stimulus_html,x=!!r.correct_answer_id,v=t("openstax-question",r.className,{"has-correct-answer":x&&!((null!=u?u.is_deleted:void 0)&&"homework"===(null!=u?u.type:void 0)),"has-incorrect-answer":!!r.incorrectAnswerId});return null!=l&&(a=n("div",{className:"exercise-uid",children:l})),function(){var n=s.collaborator_solutions,e=void 0===n?[]:n;return r.displaySolution&&e&&e.find(function(n){return void 0!==n.content_html})}()&&(o=e("div",{className:"detailed-solution",children:[n("div",{className:"header",children:"Detailed solution:"}),n(k,{className:"solution",block:!0,html:f.map(function(n){return n.content_html}).join("")})]})),e(rn,{ref:i,className:v,"data-question-number":c,"data-test-id":"question",children:[n(an,{type:"context",html:d,hidden:p}),n(an,{type:"stimulus",html:w,hidden:p}),n(an,{type:"stem",html:m,hidden:p,questionNumber:c}),r.children,n(Y,g({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:x})),o,r.displayFormats?n(on,{formats:b}):void 0,a]})}),an=function(e){var r=e.html,t=void 0===r?"":r;return!0!==e.hidden&&t.length>0?n(k,{html:t,"data-question-number":e.questionNumber,className:"question-"+e.type,block:!0}):null},on=function(r){var t=r.formats,i=void 0===t?[]:t;return e("div",{className:"formats-listing",children:[n("div",{className:"header",children:"Formats:"}),i.map(function(e,r){return n("span",{children:e},r)})]})},sn=["disabled","isWaiting","waitingText","children"],ln=o.button(L||(L=x(["\n  background-color: ",";\n  color: ",";\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 4rem;\n  padding: 0 3rem;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n\n  &:not([disabled]) {\n    cursor: pointer;\n    &:hover {\n      background: ","\n    }\n    &:active {\n      background: ","\n    }\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n"])),X.button.background,X.palette.white,X.button.backgroundHover,X.button.backgroundActive),cn=function(e){var r=e.disabled,t=e.isWaiting,i=e.waitingText,a=e.children,o=w(e,sn);return n(ln,g({},o,{disabled:t||r,children:t&&i||a}))},dn=o.div(Q||(Q=x(["\n    ","\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    font-size: 1.4rem;\n    line-height: 2rem;\n    background: ",";\n\n    > * {\n        flex-grow: 1;\n    }\n\n    button {\n        width: 160px;\n        height: 48px;\n    }\n\n    .step-card-footer-inner {\n        border-top: 1px solid ",";\n        padding-top: 32px;\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .points {\n        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        .attempts-left {\n            color: #F36B32;\n        }\n    }\n\n    .controls {\n        display: flex;\n        flex-flow: column wrap-reverse;\n        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon\n\n        button + button {\n            margin: 0.8rem 0 0 0;\n        }\n    }\n\n    ","\n"])),en.stepCardPadding(),X.card.body.background,X.palette.pale,nn(U||(U=x(["\n        padding: 0 140px 32px 140px;\n        flex-wrap: nowrap;\n\n        .points {\n            max-width: 400px;\n        }\n\n        .controls {\n            flex-flow: row;\n            justify-content: flex-end;\n\n            button + button {\n                margin: 0 0 0 0.8rem;\n            }\n        }\n    "])))),un=s(D||(D=x(["\n  background-color: #f5e9ea;\n"]))),pn=o.div(W||(W=x(["\n  display: flex;\n  flex-direction: column;\n\n  .step-card-body {\n    ","\n  }\n"])),en.stepCardPadding()),mn=o.div(G||(G=x(["\n  font-size: 2rem;\n  line-height: 1.68em;\n  position: relative;\n"]))),hn=o.div(M||(M=x(["\n  margin: 8px 0;\n  display: flex;\n  justify-content: ",";\n  line-height: 1.6rem;\n\n  .word-limit-error-info {\n    color: ",";\n  }\n\n  div > span {\n    font-size: 12px;\n    line-height: 16px;\n\n    + span {\n      margin-left: 1rem;\n    }\n  }\n\n  .last-submitted + * {\n    margin-top: 0.8rem;\n  }\n\n  color: ",";\n"])),function(n){return n.hasChildren?"space-between":"flex-end"},X.palette.danger,X.palette.neutralThin),fn=o.textarea(K||(K=x(["\n  display: block;\n  font-family: inherit;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  width: 100%;\n  min-height: 10.5em;\n  line-height: 1.5em;\n  margin: 2.5rem 0 0 0;\n  padding: 0.5em;\n  border: 1px solid ",";\n  color: ",";\n  ",";\n  ","\n  background-color: ",";\n"])),X.palette.neutral,X.palette.neutralDark,function(n){return n.isOverWordLimit&&un},function(n){return n.isOverWordLimit&&s(V||(V=x(["\n    border: 2px solid ",";\n  "])),X.palette.danger)},function(n){return n.readOnly&&X.palette.neutralCool});fn.displayName="OSFreeResponseTextArea";var bn=function(e){return n(cn,g({},e,{children:"Cancel"}))},gn=function(r){var t=r.availablePoints,i=r.cancelHandler,a=r.defaultValue,o=r.infoRowChildren,s=r.isSubmitDisabled,l=r.pointsChildren,c=r.question,d=r.questionNumber,u=r.saveHandler,p=r.submitBtnLabel,m=r.textHasChanged,h=r.wordLimit,f=b(a)>h,w={};return d&&(w["data-question-number"]=d),e(pn,{"data-test-id":"student-free-response",children:[e("div",{className:"step-card-body",children:[n(mn,g({},w,{children:c.stem_html&&n(an,{type:"stem",html:c.stem_html,hidden:!1})})),n(fn,g({},r,{isOverWordLimit:f,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),e(hn,{hasChildren:!!o,children:[o,e("div",{children:[e("span",{children:[b(a)," words"]}),f&&e("span",{className:"word-limit-error-info",children:["Maximum ",h," words"]})]})]})]}),e(dn,{children:[e("div",{className:"points",children:[e("strong",{children:["Points: ",t]}),l]}),e("div",{className:"controls",children:[n(bn,{disabled:!m,onClick:i}),n(cn,{"data-test-id":"submit-answer-btn",disabled:s||f,onClick:u,children:p})]})]})]})};gn.displayName="OSFreeResponse";var wn,xn,vn,kn,yn,_n,Nn,Cn,qn,Sn,An,On,In=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren"],Tn=["step","questionNumber","numberOfQuestions","children","className"],Hn=o.div(wn||(wn=x(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 400px;\n  border-radius: 0.25rem;\n  margin: 0 auto 5rem auto;\n  border: 1px solid ",";\n  border-radius: 0.25rem;\n  background-color: white;\n\n  ","\n"])),X.palette.light,nn(xn||(xn=x(["\n    max-width: 1000px;\n  "])))),jn=o.div(vn||(vn=x(["\n  padding: 2rem;\n\n  ","\n"])),$(kn||(kn=x(["\n    padding: 0;\n  "])))),Pn=o.div(yn||(yn=x(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 24px;\n  background: ",";\n  font-size: 1.8rem;\n  line-height: 3rem;\n  letter-spacing: -0.72px;\n\n  div {\n    display: flex;\n    align-items: baseline;\n  }\n\n  div.question-info {\n    font-weight: bold;\n\n    .question-id {\n      font-weight: normal;\n    }\n    .ox-icon-lock {\n        margin-right: 1rem;\n    }\n  }\n\n  .num-questions, .points {\n      display: none;\n  }\n\n  .exercise-id, .separator {\n      font-weight: normal;\n  }\n\n  .separator {\n      margin: 0 0.4rem;\n  }\n\n  .exercise-id {\n      height: 28px; // Fix baseline issue\n  }\n\n  button {\n    color: ",";\n  }\n\n  .openstax-exercise-badges {\n      margin: 0;\n      line-height: 2rem;\n      svg {\n          display: block;\n          &:not(.interactive) {\n              margin: 0 0 0 6px !important;\n          }\n      }\n  }\n\n  ","\n\n    /*\n    1. Show the arrows to move to previous and next question.\n    2. Show the number of questions.\n    3. Override box-shadow of icons when turned into a button.\n    */\n    ","\n\n  ","\n"])),X.card.header.background,X.palette.gray,nn(_n||(_n=x(["\n      button.ox-icon-angle-left, button.ox-icon-angle-right {\n          display: none;\n      }\n      .separator {\n          display: inherit;\n      }\n  "]))),$(Nn||(Nn=x(["\n        font-size: 1.6rem;\n        line-height: 2.5rem;\n\n        svg.ox-icon {\n            display: inherit;\n            margin: 0;\n        }\n        button.ox-icon-angle-left {\n            margin-right: ",";\n        }\n        button.ox-icon-angle-right {\n            margin-left: ",";\n        }\n        .openstax-exercise-badges svg {\n            display: none;\n        }\n        .num-questions, points {\n            display: inherit;\n        }\n\n        .exercise-id {\n            display: none;\n        }\n\n        button[class^='ox-icon-angle']:hover {\n            box-shadow: none;\n        }\n  "])),"24px","24px"),Z(Cn||(Cn=x(["\n      font-size: 1.4rem;\n      line-height: 2rem;\n      padding: 10px 8px;\n\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n      button.ox-icon-angle-left {\n          margin-right: ",";\n      }\n  "])),"8px","8px"));Pn.displayName="StepCardHeader";var Rn=o.div(qn||(qn=x(["\n  .step-card-body {\n    ","\n\n    background: ",";\n\n    &.exercise-stimulus {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n\n    & + div .step-card-body {\n        padding-top: 0;\n    }\n\n    &.exercise-context, &.exercise-stimulus, &.exercise-stem {\n        padding-bottom: 0;\n    }\n\n    ","\n\n    .reading-step & {\n        padding: 0;\n    }\n\n    ","\n\n    ","\n\n    &&& {\n        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }\n    }\n"])),en.stepCardPadding(),X.card.body.background,function(){return s(A||(A=x(["@media(max-width: ","px) { "," }"])),600,s.apply(void 0,[].slice.call(arguments)))}(Sn||(Sn=x(["\n        && .question-feedback {\n            margin-left: 0;\n\n           .arrow { margin-left: 12px; }\n        }\n    "]))),nn(An||(An=x(["\n        .video-step &, .interactive-step & {\n            .openstax-exercise-badges {\n              margin-right: 3.8rem;\n            }\n        }\n    "]))),Z(On||(On=x(["\n        .openstax-exercise-badges svg {\n            margin-right: ",";\n        }\n    "])),"8px")),En=function(r){var t=r.questionNumber,i=r.numberOfQuestions,a=r.showTotalQuestions,o=r.stepType,s=r.isHomework,l=r.availablePoints,c=r.unpadded,d=r.className,u=r.children,p=r.questionId,m=r.multipartBadge,h=r.leftHeaderChildren,f=r.rightHeaderChildren,b=r.headerTitleChildren,x=w(r,In);return e(jn,g({},x,{children:[m,e(Hn,{className:d,children:[t&&s&&"exercise"===o&&e(Pn,{children:[e("div",{children:[h,e("div",{className:"question-info",children:[b,n("span",{children:i>1?"Questions "+t+" - "+(t+i-1):"Question "+t}),a?e("span",{className:"num-questions",children:[" / ",i]}):null,n("span",{className:"separator",children:"|"}),e("span",{className:"question-id",children:["ID: ",p]})]})]}),e("div",{children:[l&&e("div",{className:"points",children:[l," Points"]}),f]})]}),n(Rn,{unpadded:c,children:u})]})]}))};En.displayName="OSStepCard";var zn,Bn,Fn,Ln,Qn,Un=function(e){var r=e.step,i=e.questionNumber,a=e.numberOfQuestions,o=e.children,s=e.className,l=w(e,Tn);return n(En,g({},l,{unpadded:!0,questionNumber:i,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,availablePoints:r.available_points,className:t(("type"in r?r.type:"exercise")+"-step",s),questionId:r.uid,children:o}))};Un.displayName="OSTaskStepCard";var Dn,Wn,Gn,Mn,Kn,Vn,Yn,Jn,Xn,Zn,$n=o.div(zn||(zn=x(["\n  padding: 0.6rem 0.9rem;\n  .popover { display: none; }\n  &:hover {\n    svg path { fill: ",";}\n    .popover { display: flex; }\n  }\n"])),X.palette.mediumBlue),ne=o.div(Bn||(Bn=x(["\n  position: relative;\n  display: flex;\n"]))),ee=o.div(Fn||(Fn=x(["\n  ","\n  top: 3rem;\n  width: 20rem;\n  position: absolute;\n  font-size: 1.2rem;\n  line-height: 1.8rem;\n"])),en.popover),re=function(r){return n($n,g({},r.wrapperProps,{children:e(ne,{children:[r.children,e(ee,{className:"popover right",children:[n("div",{className:"arrow"}),n("div",{className:"content",children:r.text})]})]})}))},te=o.div(Ln||(Ln=x(["\n  max-width: 200px;\n  display: flex;\n  justify-content: space-between;\n"]))),ie=o(p)(Qn||(Qn=x(["\n  color: ",";\n  height: 1em;\n"])),X.palette.darkGray),ae=function(e){var r,t=e.exercise,i=e.topicUrl,a=e.errataUrl,o=[],s=t.questions.every(function(n){return n.answers.length>0});return s&&t.questions.find(function(n){return n.formats.includes("free-response")})?r="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":s&&(r="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),i&&o.push(n(re,{text:"View topic in textbook",wrapperProps:{as:"a",href:i,target:"_blank"},children:n(ie,{icon:c})},"topic")),o.push(n(re,{text:"Suggest a correction",wrapperProps:{as:"a",href:a,target:"_blank"},children:n(ie,{icon:d})},"errata")),r&&o.push(n(re,{text:r,children:n(ie,{icon:u,height:"16px",width:"16px"})},"type")),n(te,{children:o})},oe=function(n){var r=n.count;return e("div",{children:[r," attempt",1===r?"":"s"," left"]})},se=function(r){var t=r.published_comments;return t?e("div",{children:[n("strong",{children:"Feedback:"})," ",t]}):null},le=function(e){return n(cn,g({},e,{waitingText:"Saving…",isWaiting:e.isWaiting,"data-test-id":"submit-answer-btn",children:0==e.attempt_number?"Submit":"Re-submit"}))},ce=function(e){return n(cn,g({},e,{"data-test-id":"continue-btn",children:e.canUpdateCurrentStep?"Continue":"Next"}))},de=function(e){var t=e.free_response;return t?n(r,{children:n("div",{className:"free-response",children:t})}):null},ue=i.forwardRef(function(r,t){var i=r.question,a=r.questionNumber,o=r.answer_id,s=r.hasMultipleAttempts,l=r.attempts_remaining,c=r.published_comments,d=r.detailedSolution,u=r.canAnswer,p=r.needsSaved,m=r.attempt_number,h=r.apiIsPending,f=r.onAnswerSave,b=r.onNextStep,g=r.canUpdateCurrentStep,w=r.available_points;return e("div",{"data-test-id":"student-exercise-question",children:[n(tn,{ref:t,task:r.task,question:i,answerIdOrder:r.answer_id_order,choicesEnabled:r.choicesEnabled,answer_id:o,questionNumber:a,onChange:r.onAnswerChange,feedback_html:r.feedback_html,correct_answer_feedback_html:r.correct_answer_feedback_html,correct_answer_id:r.is_completed?r.correct_answer_id:null,incorrectAnswerId:r.incorrectAnswerId,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:r.displaySolution,show_all_feedback:r.show_all_feedback,tableFeedbackEnabled:r.tableFeedbackEnabled,children:n(de,{free_response:r.free_response})}),n(dn,{className:"step-card-footer",children:e("div",{className:"step-card-footer-inner",children:[e("div",{className:"points",children:[e("strong",{children:["Points: ",w]}),n("span",{className:"attempts-left",children:s&&l>0&&n(oe,{count:l})}),n(se,{published_comments:c}),d&&e("div",{children:[n("strong",{children:"Detailed solution:"})," ",n(k,{html:d})]})]}),n("div",{className:"controls",children:u&&p?n(le,{disabled:h||!o,isWaiting:h,attempt_number:m,onClick:function(){return f("string"==typeof(n=i.id)?parseInt(n,10):n);var n}}):n(ce,{onClick:function(){return b(a-1)},canUpdateCurrentStep:g})})]})})]})}),pe=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion"],me=o(Un)(Dn||(Dn=x(["\n  font-size: 1.8rem;\n  line-height: 2.8rem;\n"]))),he=function(t){var i=t.exercise;return e(r,{children:[i.context&&n(k,{className:"step-card-body exercise-context",block:!0,html:i.context}),i.stimulus_html&&n(k,{className:"step-card-body exercise-stimulus",block:!0,html:i.stimulus_html})]})},fe=function(r){var t=r.numberOfQuestions,o=r.questionNumber,s=r.step,c=r.exercise,d=r.show_all_feedback,u=r.scrollToQuestion,p=w(r,pe),m="feedback_html"in s,h=i.useRef([]);return i.useEffect(function(){var n=u&&h.current[u];n&&l(n)},[u,c]),e(me,{step:s,questionNumber:o,numberOfQuestions:m?t:c.questions.length,rightHeaderChildren:p.showExerciseIcons?n(ae,{exercise:c,topicUrl:p.topicUrl,errataUrl:p.errataUrl}):null,showTotalQuestions:m,children:[n(he,{exercise:c}),c.questions.map(function(n,e){var r,t=g({},m?s:p.questionStates[n.id]);return a(ue,g({},p,t,{ref:function(n){return h.current[o+e]=n},exercise_uid:c.uid,key:n.id,question:n,questionNumber:o+e,choicesEnabled:t.canAnswer,displaySolution:!0,detailedSolution:null==(r=t.solution)?void 0:r.content_html,show_all_feedback:d,tableFeedbackEnabled:d&&!m,canUpdateCurrentStep:"canUpdateCurrentStep"in p?p.canUpdateCurrentStep:!(e+1===c.questions.length)}))})]})},be=o.div(Wn||(Wn=x(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding: 2rem;\n  ","\n"])),Z(Gn||(Gn=x(["\n    padding: 0;\n  "])))),ge=o.span(Mn||(Mn=x(['\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n\n  &::after {\n    content: "";\n    display: block;\n    height: 0.1rem;\n    width: 1rem;\n    background-color: ',";\n  }\n\n  &:last-child {\n    &::after {\n      content: none;\n    }\n  }\n\n  ","\n"])),X.palette.pale,Z(Kn||(Kn=x(["\n    &::after {\n      width: 3.3rem;\n    }\n  "])))),we=o.button(Xn||(Xn=x(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.4rem;\n  height: 2.4rem;\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  margin: 0 0.3rem;\n  font-size: 1.4rem;\n  font-weight: bold;\n  cursor: pointer;\n  ","\n"])),function(n){return function(n,e){switch(n){case"isCorrect":return s(Vn||(Vn=x(["\n        color: ",";\n        background-color: rgba(99, 165, 36, 0.6);\n        border-color: ",";\n        box-shadow: ",";\n      "])),X.palette.white,X.palette.darkGreen,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none");case"isIncorrect":return s(Yn||(Yn=x(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),X.palette.white,X.palette.lightRed,X.palette.darkRed,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none");default:return s(Jn||(Jn=x(["\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n        box-shadow: ",";\n      "])),X.palette.darkGray,e?X.palette.white:X.palette.neutralLight,e?X.palette.darkGray:X.palette.neutralLight,e?"0 0 6px rgba(0, 0, 0, 0.4)":"none")}}(n.variant,n.isActive)}),xe=function(e){var r=e.index,t=e.step,i=e.goToStep;return n(ge,{children:n(we,{variant:t.variant,isActive:e.isActive,onClick:function(){return i(r,t)},children:r+1})})},ve=function(e){var r=e.activeIndex,t=e.goToStep;return n(be,{children:e.steps.map(function(e,i){return n(xe,{index:i,isActive:i===r,step:e,goToStep:t},i)})})},ke=o.div(Zn||(Zn=x(["\n  max-width: 1000px;\n  @media(min-width: 960px) {\n    // Around the height of a multiple choice with 4 options\n    min-height: 53.8rem;\n  }\n  padding: 2rem;\n  margin: 2rem;\n  border: 1px solid ",";\n  border-radius: 0.25rem;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  > svg {\n    max-width: 600px;\n    flex-grow: 1;\n  }\n"])),X.palette.light),ye=function(){return n(ke,{children:n(m,{uniqueKey:"OSLoader"})})};export{N as Answer,Y as AnswersTable,fe as Exercise,gn as FreeResponseInput,fn as FreeResponseTextArea,Hn as InnerStepCard,ye as Loader,jn as OuterStepCard,ve as ProgressBar,xe as ProgressBarItem,tn as Question,an as QuestionHtml,En as StepCard,we as StyledItem,Un as TaskStepCard};
//# sourceMappingURL=index.module.js.map
