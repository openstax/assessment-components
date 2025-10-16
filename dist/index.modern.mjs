import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import o,{useRef as a,useState as i,useCallback as s,useEffect as l,createElement as d}from"react";import c,{css as p,createGlobalStyle as u}from"styled-components";import m from"scroll-to-element";import{debounce as h,once as b}from"lodash";import{memoize as g,isEmpty as w}from"lodash/fp.js";import f from"weak-map";import{FontAwesomeIcon as x}from"@fortawesome/react-fontawesome";import{faBookOpen as v,faTriangleExclamation as k,faQuestion as $,faP as y,faPlus as C,faMinus as S,faEllipsisH as _}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as N}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as q}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as A}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as M}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as I}from"@fortawesome/free-solid-svg-icons/faXmark";import{faCircle as E}from"@fortawesome/free-solid-svg-icons/faCircle";import{BulletList as H}from"react-content-loader";function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const z="ABCDEFGHIJKLMNOPQRSTUVWXYZ",F=(e,t)=>e.id===t;function j(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}const P=o.createContext(()=>{throw new Error("context not initialized")}),L=["html","component","block"],D=t=>{let{html:r,component:n,block:a=!1}=t,i=T(t,L);const s=o.useContext(P);return o.useEffect(()=>{s()},[s,r]),void 0!==n?o.cloneElement(n,O({html:r},i)):e(a?"div":"span",O({dangerouslySetInnerHTML:{__html:r}},i))},R=["id"],B=t=>e("aside",{children:e(D,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),Q=r=>{let{id:o}=r,a=T(r,R);const i=n("question-feedback",a.position||"bottom");return t("aside",{id:o,className:i,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(B,O({},a,{children:a.children}))]})};let V,J,U,W,G,Z,K,Y,X,ee,te,re,ne,oe=e=>e;const ae={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C",yellow:"#FEDE9F"},ie={palette:ae,answer:{neutral:ae.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032",partialCredit:"#976502",neutralDark:"#5f6163"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:ae.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:ae.neutralDarker,background:ae.neutralLighter}},se=(...e)=>p(V||(V=oe`@media(max-width: ${0}px) { ${0} }`),600,p(...e)),le=(...e)=>p(J||(J=oe`@media(max-width: ${0}px) { ${0} }`),999,p(...e)),de=(...e)=>p(U||(U=oe`@media(min-width: ${0}px) { ${0} }`),1e3,p(...e)),ce={answer:()=>p(G||(G=oe`
    .answer-label {
      display: inline-flex;
    }
    color: ${0};
    .answer-letter-wrapper::before {
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
      box-sizing: border-box;
      font-weight: normal;
    }
  `),ae.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",ie.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",ie.palette.white),answerColor:(e,t=!1)=>p(Z||(Z=oe`
    .answer-letter-wrapper::before {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>ce.answerColor(ie.answer.checked,!0),answerCorrect:e=>ce.answerColor(ie.answer.correct,e),answerIncorrect:e=>ce.answerColor(ie.answer.incorrect,e),answerHover:()=>p(K||(K=oe`
    ${0};
    font-weight: bold;
  `),ce.answerColor(ie.answer.hover)),answerCorrectAnswer:()=>ce.answerColor(ie.answer.correct,!1),resetText:()=>p(Y||(Y=oe`
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
  `)),stepCardPadding:()=>p(X||(X=oe`
    padding: 4.8rem 14rem 0;

    ${0}

    ${0}
  `),le(ee||(ee=oe`
      padding: ${0} ${0};
    `),"24px","24px"),se(te||(te=oe`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>p(re||(re=oe`
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
    font-size: calc(1.4rem * var(--content-text-scale));

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
  `),ce.resetText(),"1px",ie.popover.borderColor,ie.palette.white,"325px","8px","1rem",ie.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",ie.popover.borderColor,"1px",ie.palette.white,"9px","1px","9px","1rem","0.8rem"),visuallyHidden:()=>p(ne||(ne=oe`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `))};let pe;const ue=c.div(pe||(pe=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`),e=>e.state?ie.answer.correct:ie.answer.incorrect),me=({hasCorrectAnswer:t,isCorrect:r,isIncorrect:n,isSelected:o})=>r||n||o&&t?e(ue,{state:!!r,children:e("span",{children:(r?"Correct":"Incorrect")+" Answer"})}):null,he=r=>{const{answer:{content_html:n,feedback_html:o},contentRenderer:a,labelAnswers:i,show_all_feedback:s,tableFeedbackEnabled:l,hasCorrectAnswer:d,isCorrect:c,isIncorrect:p,isSelected:u}=r;return t("div",{className:"answer-answer",role:"status","aria-live":"polite","aria-atomic":"true",children:[!1!==i&&e(me,{hasCorrectAnswer:d,isCorrect:c,isIncorrect:p,isSelected:u}),e(D,{className:"answer-content",component:a,html:n}),s&&o&&!l&&e(B,{contentRenderer:a,children:o},"question-mc-feedback")]})},be=r=>{const{answer:o,answered_count:a,isCorrect:i,contentRenderer:s,iter:l,show_all_feedback:d,tableFeedbackEnabled:c}=r,p=o.selected_count&&a?Math.round(o.selected_count/a*100):0;return t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:i,red:!i}),children:[e("span",{className:"selected-count","data-percent":`${p}`,children:o.selected_count}),e("span",{className:n("letter",{green:i,red:!i}),children:z[l]})]}),e(he,{answer:o,contentRenderer:s,show_all_feedback:d,tableFeedbackEnabled:c})]})},ge=n=>{const{type:o,iter:a,answer:i,disabled:s,onKeyPress:l,qid:d,contentRenderer:c,correctIncorrectIcon:p,feedbackId:u,isSelected:m,isCorrect:h,isIncorrect:b,hasCorrectAnswer:g,show_all_feedback:w,tableFeedbackEnabled:f,labelAnswers:x=!0}=n,v=`${m?"Selected ":""}Choice ${z[a]}:`;let k;return g||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:k}=n),t(r,{children:["teacher-preview"===o&&e("div",{className:"correct-incorrect",children:h&&p}),e("input",{type:"radio",className:"answer-input-box",checked:m,id:`${d}-option-${a}`,name:`${d}-options`,onChange:()=>k&&k(i),disabled:s||!k,"aria-details":u}),t("label",{onKeyPress:l,htmlFor:`${d}-option-${a}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper","aria-label":v,"data-answer-choice":z[a],"data-test-id":`answer-choice-${z[a]}`}),e(he,{answer:i,contentRenderer:c,labelAnswers:x,show_all_feedback:w,tableFeedbackEnabled:f,hasCorrectAnswer:g,isCorrect:h,isIncorrect:b,isSelected:m})]})]})},we=t=>e("teacher-review"===t.type?be:ge,O({},t)),fe=t=>{const{type:r,answer:o,disabled:a,answerId:i,correctAnswerId:s,incorrectAnswerId:l}=t,d=((e,t)=>e.id==t)(o,i),c=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(o,s),p=F(o,l),u=d||void 0===i&&(!l&&c||p),m=n("answers-answer",{disabled:a,"answer-selected":u,"answer-correct":c&&"student-mpp"!==r,"answer-incorrect":l&&F(o,l)});return e("div",{className:"openstax-answer",children:e("section",{className:m,children:e(we,O({},t,{isCorrect:c,isSelected:u,isIncorrect:p}))})})};fe.displayName="OSAnswer";const xe="student",ve=r=>{let n=0;const{question:o,hideAnswers:a,type:i=xe,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:u,correct_answer_feedback_html:m,previewMode:h,labelAnswers:b,show_all_feedback:g=!1,tableFeedbackEnabled:w,hasCorrectAnswer:f,onChangeAnswer:x,onKeyPress:v,answerIdOrder:k,instructions:$}=r;if(a)return null;const{id:y}=o,C=[],S={qid:y||"auto-"+n++,answerId:p,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:f,onChangeAnswer:x,type:i,answered_count:s,disabled:h||!l,labelAnswers:b,show_all_feedback:g,tableFeedbackEnabled:w,onKeyPress:v},_=(k?(e=>{const{answers:t}=o;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(k):o.answers).map((t,r)=>{const n={answer:O({},t,{question_id:"string"==typeof o.id?parseInt(o.id,10):o.id}),iter:r,key:`${S.qid}-option-${r}`},a=Object.assign({},n,S);let i,s;return g&&t.feedback_html&&w?i=t.feedback_html:t.id===c&&u?i=u:t.id===d&&m&&(i=m),i&&(s=`feedback-${S.qid}-${r}`,C.push({index:r,html:i,id:s})),e(fe,O({feedbackId:s},a))});return C.forEach((t,n)=>{const o=t.index+n+1;_.splice(o,0,e(Q,{id:t.id,contentRenderer:r.contentRenderer,children:t.html},o))}),t("div",O({},h?{}:{role:"radiogroup","aria-label":"Answer choices"},{className:"answers-table",children:[$,_]}))},ke=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren","overlayChildren","showScoring","totalScoring","isGraded"],$e=["step","questionNumber","numberOfQuestions","children","className","overlayChildren"];let ye,Ce,Se,_e,Ne,qe,Ae,Me,Ie,Ee,He,Oe,Te,ze,Fe=e=>e;const je=c.div(ye||(ye=Fe`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 0 auto 5rem auto;
  border: 0.1rem solid ${0};
  border-radius: 0.25rem;
  background-color: white;
  overflow: hidden;

  ${0}
`),ie.palette.pale,de(Ce||(Ce=Fe`
    max-width: 1000px;
  `))),Pe=c.div(Se||(Se=Fe`
  padding: ${0};

  ${0}
`),"2rem",se(_e||(_e=Fe`
    padding: 0;
  `))),Le=c.div(Ne||(Ne=Fe`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  background: ${0};
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: -0.72px;

  h2.question-info {
    display: flex;
    align-items: baseline;
    font-size: inherit;
    margin: inherit;
    text-transform: uppercase;

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

  .scoring {
    margin-left: auto;
    margin-right: 1rem;

    span {
      font-size: 1.2rem;
      font-weight: normal;
      text-transform: uppercase;
    }
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
`),ie.card.header.background,ie.palette.gray,de(qe||(qe=Fe`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
  `)),le(Ae||(Ae=Fe`
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
  `),"24px","24px"),se(Me||(Me=Fe`
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px")),De=c.div(Ie||(Ie=Fe`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${0};
  border-radius: 0.5rem;
  width: 7.8rem;
  height: 1.9rem;
  padding: 0.2rem 0.4rem;

  span {
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: ${0};
  }
`),ie.palette.darkRed,ie.palette.white);Le.displayName="StepCardHeader";const Re=c.div(Ee||(Ee=Fe`
  .step-card-body {
    ${0}
    overflow: auto;
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
`),ce.stepCardPadding(),ie.card.body.background,((...e)=>p(W||(W=oe`@media(max-width: ${0}px) { ${0} }`),600,p(...e)))(He||(He=Fe`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),de(Oe||(Oe=Fe`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),se(Te||(Te=Fe`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),Be=c.div(ze||(ze=Fe`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: #FFFFFF80;
    z-index: 2;
`)),Qe=r=>{var n,o;let{questionNumber:d,numberOfQuestions:c,showTotalQuestions:p,stepType:u,isHomework:m,availablePoints:h,unpadded:b,className:g,children:w,questionId:f,multipartBadge:x,leftHeaderChildren:v,rightHeaderChildren:k,headerTitleChildren:$,overlayChildren:y,showScoring:C,totalScoring:S,isGraded:_}=r,N=T(r,ke);const q=a(null),[A,M]=i(!1),I=c>1?`Questions ${d} - ${d+c-1}`:`Question ${d}`,E=s(()=>{M(!0)},[]),H=s(()=>{var e;Array.from((null==(e=document.getElementById("step-card"))?void 0:e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||[]).forEach(e=>{e.setAttribute("tabindex","-1")})},[]);return l(()=>{const e=q.current;return e&&y&&(e.addEventListener("focus",E),H()),()=>{null==e||e.removeEventListener("focus",E)}},[y,q,E,H]),t(Pe,O({},N,{children:[x,e(je,{className:g,children:t("div",O({ref:q},y?{onMouseOver:()=>M(!0),onMouseLeave:()=>M(!1),onBlur:e=>{q.current&&!q.current.contains(e.relatedTarget)&&M(!1)},tabIndex:0}:{},{children:[y&&A&&e(Be,{id:"overlay-element",children:y}),t("div",{id:"step-card",children:[d&&m&&"exercise"===u&&t(Le,{className:"step-card-header",children:[t("div",{children:[v,t("h2",{className:"question-info",children:[$,e("span",{children:I}),p?t("span",{className:"num-questions",children:[" / ",c]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",f]})]})]}),C&&e("div",{className:"scoring",children:_?t("span",{children:[null==S||null==(n=S.score)?void 0:n.toFixed(1),"/",null==S||null==(o=S.maxScore)?void 0:o.toFixed(1),null!=S&&S.maxScore&&S.maxScore>1.1?" points":" point"]}):e(De,{children:e("span",{children:"ungraded"})})}),h||k?t("div",{children:[h&&t("div",{className:"points",children:[h," Points"]}),k]}):null]}),e(Re,{unpadded:b,children:w})]})]}))})]}))};Qe.displayName="OSStepCard";const Ve=t=>{let{step:r,questionNumber:o,numberOfQuestions:a,children:i,className:s,overlayChildren:l}=t,d=T(t,$e);return e(Qe,O({},d,{unpadded:!0,questionNumber:o,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,overlayChildren:l,children:i}))};Ve.displayName="OSTaskStepCard";const Je=["disabled","isWaiting","waitingText","children"];let Ue;const We=c.button(Ue||(Ue=(e=>e)`
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
`),ie.button.background,ie.palette.white,ie.button.backgroundHover,ie.button.backgroundActive),Ge=t=>{const{disabled:r,isWaiting:n,waitingText:o,children:a}=t,i=T(t,Je);return e(We,O({},i,{disabled:n||r,children:n&&o||a}))};let Ze,Ke,Ye,Xe,et=e=>e;const tt=u(Ze||(Ze=et`
  :root {
    --content-text-scale: 1;
  }
`)),rt=c(je)(Ke||(Ke=et`
  padding: 88px 72px;
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(3rem * var(--content-text-scale));
  display: block;

  button {
    min-width: 160px;
    height: 48px;
  }

  p {
    margin: 16px 0 20px 0;
  }
`)),nt=c.h2(Ye||(Ye=et`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`)),ot=c(({numberOfQuestions:n,numberCompleted:o,handleClick:a,className:i})=>{const s=n===o,l=o>0,d=s?"Next":l?"Continue":"Start";return t(r,{children:[e(tt,{}),t(rt,{className:i,children:[e(nt,{children:s?"You are done.":l?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:s?"Great job answering all the questions.":l?`You've completed ${o} of ${n} questions.`:"Begin working on the quiz."}),e(Ge,{"data-test-id":`${d.split(" ")[0].toLowerCase()}-btn`,onClick:()=>a(),children:d})]})]})})(Xe||(Xe=et``));let at,it,st=e=>e;const lt=c.div(at||(at=st`
  display: flex;
  width: 100%;
  gap: 2rem;

  .step-card-body,
  .right-side-slot {
    flex: 1 1 auto;
    min-width: 0;
  }
`)),dt=c.div(it||(it=st`
&.step-card-body {
  ${0};
}

&.openstax-question {
  border-top: 1px solid ${0};
  font-size: calc(1.8rem * var(--content-text-scale));

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
    font-size: calc(1.6rem * var(--content-text-scale));
    line-height: calc(2rem * var(--content-text-scale));
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

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &:not(.disabled){
        .answer-label:focus{
          background-color: ${0};
        }
      }
      &.answer-selected {
        font-weight: bold;
      }
      ${0};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: ${0};
      * {
        margin: 0;
      }
    }

    .answer-letter-wrapper::before {
      content: attr(data-answer-choice);
      text-align: center;
      padding: 0;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .answer-label {
      align-items: center;
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

    .answer-input-box {
      ${0}
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${0};
          }
        }

        &:focus-visible {
          + .answer-label .answer-letter-wrapper::before {
            outline-style: solid;
            outline-width: 2px;
            outline-offset: 2px;
            outline-color: ${0};
          }
        }
      }

      .answer-selected {
        .answer-label, .answer-label:hover {
          ${0};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-selected {
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

      .answer-correct:not(.answer-selected) {
        .answer-label {
          ${0}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect {
        .answer-label, .answer-label:hover {
          ${0}
        }
        &.answer-selected.answer-incorrect {
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
`),ce.stepCardPadding(),ie.palette.pale,ie.palette.neutral,ie.palette.neutralLightBlue,ie.palette.neutralLightest,ce.answer(),"1rem","1rem","0.1s ease-in-out",ce.answerHover(),ce.visuallyHidden(),ce.answerChecked(),ie.answer.checked,ce.answerChecked(),ce.answerIncorrect(!0),ce.answerCorrect(!0),ce.answerCorrect(!1),ce.answerIncorrect(),ce.answerIncorrect(!0),ce.popover(),"370px","0.9rem","1.1rem"),ct=o.forwardRef((r,o)=>{let a,i;const{question:s,correct_answer_id:l,incorrectAnswerId:d,exercise_uid:c,className:p,questionNumber:u,context:m,task:h,hidePreambles:b,rightSideSlot:g}=r,{stem_html:w,collaborator_solutions:f=[],formats:x,stimulus_html:v}=s,k=!!l,$=n("openstax-question",p,{"has-correct-answer":k&&!((null!=h?h.is_deleted:void 0)&&"homework"===(null!=h?h.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(a=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(D,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),e(dt,{ref:o,className:$,"data-question-number":u,"data-test-id":"question",children:t(lt,{children:[t("div",{children:[e(pt,{type:"context",html:m,hidden:b}),e(pt,{type:"stimulus",html:v,hidden:b}),e(pt,{type:"stem",html:w,hidden:b,questionNumber:u}),r.children,e(ve,O({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:k})),i,r.displayFormats?e(ut,{formats:x}):void 0,a]}),g&&e("div",{className:"right-side-slot",children:g})]})})}),pt=t=>{const{html:r="",type:n,hidden:o,questionNumber:a}=t;return!0!==o&&r.length>0?e(D,{html:r,"data-question-number":a,className:`question-${n}`,block:!0}):null},ut=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let mt,ht,bt,gt=e=>e;const wt=c.div(mt||(mt=gt`
    ${0}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: calc(1.6rem * var(--content-text-scale));
    line-height: calc(2rem * var(--content-text-scale));
    background: ${0};
    overflow: auto;

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
        gap: 1.6rem;

        ${0}
    }

    .points {
        .attempts-left {
          color: #B03808;
          font-weight: bold;
        }
    }

    .controls {
        display: flex;
        flex-flow: column wrap-reverse;

        button + button {
            margin: 0.8rem 0 0 0;
        }
    }

    ${0}
`),ce.stepCardPadding(),ie.card.body.background,ie.palette.pale,se(ht||(ht=gt`
            flex-wrap: wrap;
        `)),de(bt||(bt=gt`
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
    `)));let ft,xt,vt,kt,$t,yt,Ct=e=>e;const St=p(ft||(ft=Ct`
  background-color: #f5e9ea;
`)),_t=c.div(xt||(xt=Ct`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
    padding-bottom: 1rem;
  }
`),ce.stepCardPadding()),Nt=c.div(vt||(vt=Ct`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),qt=c.div(kt||(kt=Ct`
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
`),e=>e.hasChildren?"space-between":"flex-end",ie.palette.danger,ie.palette.neutralThin),At=c.textarea($t||($t=Ct`
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
`),ie.palette.neutral,ie.palette.neutralDark,e=>e.isOverWordLimit&&St,e=>e.isOverWordLimit&&p(yt||(yt=Ct`
    border: 2px solid ${0};
  `),ie.palette.danger),e=>e.readOnly&&ie.palette.neutralCool);At.displayName="OSFreeResponseTextArea";const Mt=t=>e(Ge,O({},t,{children:"Cancel"})),It=r=>{const{availablePoints:n,cancelHandler:o,defaultValue:a,infoRowChildren:i,isSubmitDisabled:s,question:l,questionNumber:d,saveHandler:c,submitBtnLabel:p,textHasChanged:u,wordLimit:m}=r,h=j(a)>m,b={};return d&&(b["data-question-number"]=d),t(_t,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(Nt,O({},b,{children:l.stem_html&&e(pt,{type:"stem",html:l.stem_html,hidden:!1})})),e(At,O({},r,{isOverWordLimit:h,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(qt,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[j(a)," words"]}),h&&t("span",{className:"word-limit-error-info",children:["Maximum ",m," words"]})]})]})]}),t(wt,{children:[n?e("div",{className:"points",role:"status",children:t("strong",{children:["Points: ",n]})}):null,t("div",{className:"controls",children:[e(Mt,{disabled:!u,onClick:o}),e(Ge,{"data-test-id":"submit-answer-btn",disabled:s||h,onClick:c,children:p})]})]})]})};It.displayName="OSFreeResponse";let Et,Ht,Ot,Tt,zt=e=>e;const Ft="\n  padding: 1rem 2.5rem;\n  margin: 1rem 0 1rem 1rem;\n",jt=c.div(Et||(Et=zt`
  ${0}
  border-left: ${0} solid ${0};
  font-style: italic;
`),Ft,"1rem",ie.palette.neutralLighter),Pt=c.div(Ht||(Ht=zt`
  ${0}
  position: relative;
  width: 100%;
`),Ft),Lt=c.div(Ot||(Ot=zt`
  max-height: ${0};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: 1.4rem;

  ${0}
`),({expanded:e})=>e?"none":"16.8rem",({expanded:e,isOverflowing:t})=>!e&&t?"\n    display: -webkit-box;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  ":""),Dt=c.button(Tt||(Tt=zt`
  display: inline;
  background: none;
  border: none;
  color: ${0};
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 1.3rem;
  text-decoration: underline;
  white-space: nowrap;
`),ie.palette.blue),Rt=({children:t,previewMode:r})=>e(r?Pt:jt,{children:t}),Bt=({free_response:r,previewMode:n})=>{const[a,i]=o.useState(!1),[s,l]=o.useState(!1),d=o.useRef(null);return o.useLayoutEffect(()=>{n&&d.current&&l(!a&&d.current.scrollHeight>168)},[r,n,a]),r?t(Rt,{previewMode:n,children:[n?e(Lt,{ref:d,expanded:a,isOverflowing:s,children:r}):r,n&&(s||a)&&e(Dt,{onClick:()=>i(!a),children:a?"show less":"read more"})]}):null},Qt=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),Vt=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,Jt=t=>e(Ge,O({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),Ut=t=>e(Ge,O({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),Wt=o.forwardRef((r,n)=>{const{question:a,task:i,answer_id_order:s,onAnswerChange:l,feedback_html:d,correct_answer_feedback_html:c,is_completed:p,correct_answer_id:u,incorrectAnswerId:m,choicesEnabled:h,questionNumber:b,answer_id:g,hasMultipleAttempts:w,attempts_remaining:f,published_comments:x,detailedSolution:v,canAnswer:k,needsSaved:$,attempt_number:y,apiIsPending:C,onAnswerSave:S,onNextStep:_,canUpdateCurrentStep:N,displaySolution:q,available_points:A,free_response:M,labelAnswers:I,show_all_feedback:E,tableFeedbackEnabled:H,hasFeedback:O,previewMode:T}=r,[z,F]=o.useState(!1);return o.useEffect(()=>{z&&p&&(_(b-1),F(!1))},[_,b,z,p]),t("div",{"data-test-id":"student-exercise-question",children:[e(ct,{ref:n,task:i,question:a,answerIdOrder:s,choicesEnabled:h,answer_id:g,questionNumber:b,onChange:l,feedback_html:d,correct_answer_feedback_html:c,correct_answer_id:p?u:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:q,labelAnswers:I,show_all_feedback:E,tableFeedbackEnabled:H,previewMode:T,rightSideSlot:r.rightSideSlot,children:e(Bt,{free_response:M,previewMode:T})}),T&&v||!T?e(wt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[A?t("strong",{children:["Points: ",A]}):null,e("span",{className:"attempts-left",children:w&&f>0&&e(Qt,{count:f})}),e(Vt,{published_comments:x}),v&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(D,{html:v})]})]}),e("div",{className:"controls",children:k&&$||z?e(Jt,{disabled:C||!g||z,isWaiting:C||z,attempt_number:y,onClick:()=>{var e;S("string"==typeof(e=a.id)?parseInt(e,10):e),O||F(!0)},willContinue:!O}):e(Ut,{onClick:()=>_(b-1),canUpdateCurrentStep:N})})]})}):null]})}),Gt={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},Zt=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},Kt=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},Yt=(e,t,r=5)=>{r>0&&(Kt(e).length||Zt(e).length)?setTimeout(()=>{Yt(e,t,r-1)},200):t()},Xt=(e,t)=>new Promise(r=>{(function(e,t){const r=Kt(e);t.MathJax.Hub.Queue(((e,t)=>()=>{w(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=Zt(e);w(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{Yt(e,r)})}),er=g((e,t)=>h(Xt,100,{leading:!0,trailing:!1}).bind(null,e,t));er.cache=new f;const tr=b((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(Gt),e.MathJax.Hub.processSectionDelay=0,r()):(Gt.AuthorInit=r,e.MathJax=Gt)}));let rr,nr,or,ar,ir,sr=e=>e;const lr=c.div(rr||(rr=sr`
  position: absolute;
  background: #fff;
  width: 4.5rem;
  border: 1px solid ${0};
  background: #fff;
  margin: ${0} 0 0 ${0};
  z-index: 1;

  > * {
    height: 4.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${0};
    background: #fff;
    text-decoration: none;

    &:after {
      border-bottom: 1px solid #f1f1f1;
    }

    svg {
      width: 4.3rem;
      height: 1.6rem;
      transition: color 150ms;
    }

    span {
      display: none;
      flex-grow: 1;
      font-size: 1.4rem;
      color: ${0};
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;
      width: 20rem;

      svg {
        color: ${0};
      }

      span {
        display: block;
      }
    }
  }

  ${0}

  ${0}
`),ie.palette.light,"2rem","2rem",ie.palette.neutral,ie.palette.neutralDarker,ie.palette.neutralDarker,e=>!e.desktop&&p(nr||(nr=sr`
    ${0}
    ${0}
  `),de(or||(or=sr`
      display: none;
    `)),le(ar||(ar=sr`
      display: none;
    `))),e=>e.mobile&&se(ir||(ir=sr`
    display: block;
    position: relative;
    width: auto;
    display: flex;
    flex-direction: row;
    margin: 0;

    &:not(:last-child) {
      border-bottom: 0;
    }

    > * {
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.8rem 0.6rem;
      height: auto;
      min-height: 4.8rem;

      &:hover {
        width: auto;
      }

      span {
        display: block;
        font-size: 1.4rem;
        margin-top: 0.2rem;
        color: ${0};
        text-align: center;
      }

      & + * {
        border-left: 1px solid ${0};
      }
    }
  `),ie.palette.neutral,ie.palette.light)),dr=({icons:r})=>{var n,o;if(!r)return null;const a=Object.values(r),i=a.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),s=a.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),l=null==(n=r.topic)?void 0:n.url,d=null==(o=r.errata)?void 0:o.url;return t(lr,O({},{mobile:i,desktop:s},{children:[l?t("a",{href:l,target:"_blank",children:[e(x,{icon:v}),e("span",{children:"View topic in textbook"})]}):null,d?t("a",{href:d,target:"_blank",children:[e(x,{icon:k}),e("span",{children:"Suggest a correction"})]}):null]}))};let cr,pr,ur,mr,hr,br,gr,wr,fr,xr=e=>e;const vr=c.div(cr||(cr=xr`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),ie.palette.mediumBlue,e=>!e.desktop&&p(pr||(pr=xr`
    ${0}
    ${0}
  `),de(ur||(ur=xr`
      display: none;
    `)),le(mr||(mr=xr`
      display: none;
    `))),e=>!e.mobile&&se(hr||(hr=xr`
    display: none;
  `))),kr=c.div(br||(br=xr`
  position: relative;
  display: flex;
`)),$r=c.div(gr||(gr=xr`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`),ce.popover),yr=r=>e(vr,O({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(kr,{children:[r.children,t($r,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),Cr=c.div(wr||(wr=xr`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),Sr=c(x)(fr||(fr=xr`
  color: ${0};
  height: 1em;
`),ie.palette.darkGray),_r=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},o=[],a=t.questions.every(e=>e.answers.length>0);let i;var s,l,d;return a&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":a&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&o.push(e(yr,O({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(s=r.topic.location)?void 0:s.header)||n,{children:e(Sr,{icon:N})}),"topic")),r.errata&&o.push(e(yr,O({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(l=r.errata.location)?void 0:l.header)||n,{children:e(Sr,{icon:q})}),"errata")),r.info&&i&&o.push(e(yr,O({text:i},(null==(d=r.info.location)?void 0:d.header)||n,{children:e(Sr,{icon:A,height:"16px",width:"16px"})}),"type")),e(Cr,{children:o})};let Nr;const qr=p(Nr||(Nr=(e=>e)`
  &.is-selected {
    background-color: ${0};
    border-width: 0.2rem;

    .step-card-footer,
    .step-card-body,
    .step-card-header {
      background-color: ${0} !important;
    }

    .openstax-question {
      border-width: 0.2rem !important;
    }
  }

  &.preview-card {
    --spacing: 0.8rem;
    margin: 0 auto auto auto !important;

    [data-task-step-id] {
      padding: 0;
    }

    .step-card-header,
    .step-card-body {
      background-color: ${0};
      padding: var(--spacing);
      font-size: 1.6rem;
      line-height: 2rem;
    }

    .step-card-footer {
      padding: 0 var(--spacing) var(--spacing);
    }

    .step-card-footer-inner {
      padding-top: var(--spacing);
    }

    .answers-table {
      margin: 0;
    }

    .exercise-context {
      .os-title {
        margin: 0 0 var(--spacing);
      }
      .os-subtitle {
        margin: var(--spacing) 0;
      }
      figure {
        float: left;
        margin: 0;
      }
      img {
        max-width: 16rem;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
    .openstax-question {
      .openstax-answer {
        padding: 0;
        border: none;

        .answer-label {
          padding-top: var(--spacing);
        }

        .answer-letter-wrapper {
          .answer-answer {
            margin-left: var(--spacing);
          }

          &::before {
            min-width: 2.3rem;
            min-height: 2.3rem;
            width: 2.3rem;
            height: 2.3rem;
          }
        }

        .answer-letter {
          min-width: 2.8rem;
          min-height: 2.8rem;
          width: 2.8rem;
          height: 2.8rem;
          display: flex;
        }
      }

      .question-feedback-content {
        font-size: 1.6rem;
      }

      .points,
      .question-feedback {
        max-width: unset;
      }
    }

    .step-card-footer .controls, .detailed-solution {
      display: none;
    }

    .question-stem,
    .question-feedback-content,
    .question-info,
    .exercise-context {
      line-height: 2rem;
    }

    .question-info {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .question-id {
      font-weight: 400;
      font-size: 1.2rem;
    }

    .question-stem {
      color: ${0};
      font-weight: bold;
      font-size: 1.6rem;
    }
  }
`),ie.card.header.background,ie.card.header.background,ie.palette.white,ie.palette.neutralDarker),Ar=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons","overlayChildren","labelAnswers","previewMode","showScoring","rightSideSlot"];let Mr,Ir,Er,Hr,Or,Tr,zr,Fr,jr,Pr,Lr=e=>e;const Dr=c(Ve)(Mr||(Mr=Lr`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),Rr=u(Ir||(Ir=Lr`
  :root {
    --content-text-scale: 1;
  }
`)),Br=c.div(Er||(Er=Lr`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&p(Hr||(Hr=Lr`
    ${0}
    ${0}
    ${0}
  `),de(Or||(Or=Lr`
      ${0} {
        margin-left: 6.8rem;
      }
    `),Dr),le(Tr||(Tr=Lr`
      ${0} {
        margin-left: 4.8rem;
      }
    `),Dr),se(zr||(zr=Lr`
      ${0} {
        margin-left: 0;
      }
    `),Dr)),e=>e.mobileToolbarEnabled&&p(Fr||(Fr=Lr`
    ${0}
  `),se(jr||(jr=Lr`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),lr,Pe,je))),Qr=r=>t(Br,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(dr,{icons:r.exerciseIcons}),e(Dr,O({overlayChildren:r.overlayChildren},r))]}),Vr=({exercise:n})=>t(r,{children:[n.context&&e(D,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(D,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),Jr=c(r=>{let{numberOfQuestions:n,questionNumber:a,step:i,exercise:s,show_all_feedback:l,scrollToQuestion:c,exerciseIcons:p,overlayChildren:u,labelAnswers:h=!0,previewMode:b=!1,showScoring:g=!1,rightSideSlot:w}=r,f=T(r,Ar);const x="feedback_html"in i,v=o.useRef([]),k=o.useRef(null),[$,y]=o.useState("questionStates"in f?f.questionStates:{}),C=o.useCallback(()=>{k.current&&(async(e,t=window)=>{await tr(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?er(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(k.current)},[]);o.useEffect(()=>{const e=c&&v.current[c];e&&m(e)},[c,s]);const S=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),_=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile}),{totalScoring:N,isGraded:q}=o.useMemo(()=>{const e={score:0,maxScore:0};let t=!0;for(const n of s.questions){var r;const o=null==(r=$[n.id])?void 0:r.scoring;if(null==o||!o.score||null==o||!o.maxScore){t=!1;break}e.score+=o.score,e.maxScore+=o.maxScore}return{totalScoring:e,isGraded:t}},[s.questions,$]);return t(P.Provider,{value:C,children:[e(Rr,{}),e(Qr,O({step:i,questionNumber:a,numberOfQuestions:x?n:s.questions.length,rightHeaderChildren:p?e(_r,{exercise:s,icons:p}):null,showTotalQuestions:x,desktopToolbarEnabled:S,mobileToolbarEnabled:_},p?{exerciseIcons:p}:null,{className:f.className,showScoring:g,isGraded:q,totalScoring:x&&"scoring"in i?i.scoring:N,overlayChildren:u,children:t("div",{ref:k,children:[e(Vr,{exercise:s}),s.questions.map((e,t)=>{var r,n,c,p,u;const m=O({},x?i:f.questionStates[e.id]);return d(Wt,O({},f,O({},m,{available_points:void 0}),{ref:e=>v.current[a+t]=e,exercise_uid:s.uid,key:e.id,question:e,questionNumber:a+t,choicesEnabled:m.canAnswer,displaySolution:!0,detailedSolution:null==(r=m.solution)?void 0:r.content_html,show_all_feedback:l,labelAnswers:h,tableFeedbackEnabled:l&&!x,canUpdateCurrentStep:"canUpdateCurrentStep"in f?f.canUpdateCurrentStep:!(t+1===s.questions.length),previewMode:b,rightSideSlot:o.isValidElement(w)?o.cloneElement(w,{key:e.id,score:null==(n=$[e.id])||null==(c=n.scoring)?void 0:c.score,maxScore:null==(p=$[e.id])||null==(u=p.scoring)?void 0:u.maxScore,onChange:t=>((e,t)=>{y(r=>{var n,o;return O({},r,{[e]:O({},r[e],{scoring:{score:t,maxScore:null==(n=r[e])||null==(o=n.scoring)?void 0:o.maxScore}})})})})(e.id,t)}):void 0}))})]})}))]})})(Pr||(Pr=Lr`
  ${0}
`),qr),Ur=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let Wr,Gr,Zr,Kr,Yr,Xr,en,tn,rn,nn,on,an,sn,ln=e=>e;const dn=c.nav(Wr||(Wr=ln`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),se(Gr||(Gr=ln`
    padding: 1.6rem 0.8rem;
  `))),cn=c.span(Zr||(Zr=ln`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),pn="box-shadow: 0px 1px 4px 0px #00000066;",un=c.button(nn||(nn=ln`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${0};
  height: ${0};
  border: 0;
  border-radius: 50%;
  margin: ${0};
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  color: ${0};
  ${0}
  ${0}
  &:hover {
    ${0}
  }
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",ie.palette.neutralDarker,e=>e.isActive?p(on||(on=ln`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),pn):null,e=>(e=>{switch(e){case"isStatus":return p(Kr||(Kr=ln`
        color: ${0};
        background-color: ${0};
      `),ie.palette.white,ie.palette.neutralDarker);case"isCorrect":return p(Yr||(Yr=ln`
        color: ${0};
        background-color: #E8F4D8;
      `),ie.answer.correct);case"isIncorrect":return p(Xr||(Xr=ln`
        color: ${0};
        background-color: #F8E8EA;
      `),ie.answer.incorrect);case"isIncomplete":return p(en||(en=ln`
        background-color: ${0};
      `),ie.palette.neutralBright);case"isPartialCredit":return p(tn||(tn=ln`
        color: ${0};
        background-color: ${0};
      `),ie.answer.partialCredit,ie.palette.yellow);default:return p(rn||(rn=ln`
        background-color: ${0};
      `),ie.palette.neutralLight)}})(e.variant),pn),mn=c(x)(an||(an=ln`
  color: ${0};
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  font-size: 1.2rem;
  border-radius: 50%;
`),e=>e.color),hn=c.button(sn||(sn=ln`
  background-color: ${0};
  border: 0.2rem solid ${0};
  position: absolute;
  top: 0.1rem;
  left: ${0};
  height: 1rem;
  width: 1rem;
  padding: 0.2rem;
  border-radius: 80%;
`),ie.palette.mediumBlue,ie.palette.white,e=>e.isActive?"3.8rem":"3.2rem"),bn=({variant:t})=>{if("isStatus"===t)return null;const r="0.1rem",n={isCorrect:{icon:M,background:ie.answer.correct,color:ie.palette.white,padding:r,label:"Correct"},isIncorrect:{icon:I,background:ie.answer.incorrect,color:ie.palette.white,padding:r,label:"Incorrect"},isIncomplete:{icon:$,background:ie.answer.neutral,color:ie.palette.white,padding:r,label:"Incomplete"},isPartialCredit:{icon:y,background:ie.answer.partialCredit,color:ie.palette.white,padding:"0.1rem 0.1rem 0.1rem 0.2rem",label:"Partial credit"},null:{icon:E,background:ie.answer.neutral,color:ie.answer.neutralDark,padding:r,label:"Not yet graded"}}[String(t)];return n?e(mn,{icon:n.icon,color:n.color,style:{background:n.background,padding:n.padding},height:"16px",width:"16px","aria-label":n.label,"aria-hidden":void 0}):null},gn=({index:r,isActive:n,step:o,goToStep:a})=>t(cn,{children:[o.hasFeedback&&o.variant&&"isStatus"!==o.variant?e(hn,{isActive:n,"aria-label":`Question ${r+1} - Feedback`}):null,e(un,{variant:o.variant,isActive:n,onClick:()=>a(r,o),"aria-current":n?"location":"false","aria-label":"isStatus"===o.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===o.variant?e(Ur,{}):r+1}),e(bn,{variant:o.variant})]}),wn=({steps:t,activeIndex:r,goToStep:n})=>e(dn,{"aria-label":"Breadcrumbs",children:t.map((t,o)=>e(gn,{index:o,isActive:o===r,step:t,goToStep:n},o))});let fn;const xn=c.div(fn||(fn=(e=>e)`
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
`),ie.palette.light),vn=()=>e(xn,{children:e(H,{uniqueKey:"OSLoader"})});let kn,$n,yn,Cn=e=>e;const Sn=c.div(kn||(kn=Cn`
  display: flex;
  width: fit-content;
`)),_n=c.button($n||($n=Cn`
    width: 7.4rem;
    height: 8.7rem;
    color: white;
    border: none;

    &:hover {
      box-shadow: 0 0.1rem 0.4rem 0 #00000066;
    }
    
    span {
        line-height: 1.3rem;
        font-size: 1.4rem;
        font-weight: bold;
    }

    &.include {
        background-color: ${0};
        padding-top: 1.4rem;
    }

    &.remove {
        background-color: ${0};
        padding-top: 1.4rem;
    }

    &.details {
        background-color: ${0};
    }
`),ie.palette.mediumBlue,ie.palette.orange,ie.palette.neutralDarker),Nn=c(x)(yn||(yn=Cn`
    border-radius: 50%;
    background-color: ${0};
    vertical-align: middle;
    position: relative;
    bottom: 0.5rem;
    font-weight: 900;
    line-height: 1.4rem;


    &.include {
        color: ${0};
    }

    &.remove {
        color: ${0};
    }

    &.details {
        color: ${0};
    }
`),ie.palette.white,ie.palette.mediumBlue,ie.palette.orange,ie.palette.neutralDarker),qn=({buttonVariant:r,onIncludeHandler:n,onRemoveHandler:a,onClickDetails:i})=>{const s=o.useMemo(()=>"include"===r?C:S,[r]);return t(Sn,{children:[t(_n,{className:r,onClick:()=>(e=>{switch(e){case"include":n();break;case"remove":a()}})(r),"aria-label":r,children:[e(Nn,{className:r,icon:s,"aria-label":r+" question",border:!0,size:"lg"}),e("span",{children:(l=r,l.charAt(0).toUpperCase()+l.slice(1)+" question")})]}),t(_n,{className:"details","aria-label":"details",onClick:i,children:[e(Nn,{className:"details",icon:_,border:!0,size:"lg"}),e("span",{children:"Details"})]})]});var l};let An;const Mn=c(Jr)(An||(An=(e=>e)`
  ${0}
  ${0}
`),({showAllFeedback:e})=>!e&&"\n    .step-card-footer {\n      display: none;\n    }\n  ",({showCorrectAnswer:e})=>!e&&"\n    .answer-answer {\n      font-weight: normal;\n    }\n  "),In=({exercise:t,selected:r,showAllFeedback:n=!1,showChosenAnswer:o=!1,showCorrectAnswer:a=!1,labelAnswers:i=!1,showScoring:s=!1,overlayChildren:l,questionStates:d,rightSideSlot:c})=>e(Mn,O({exercise:n?t:(e=>(e.questions.map(e=>e.answers.map(e=>{e.feedback_html="",e.correctness=a?e.correctness:void 0})),e))(t),className:"preview-card "+(r?"is-selected":""),previewMode:!0,showScoring:s,overlayChildren:l},(e=>{const t=(r=e.questions,r.map(e=>{var t,r,a,i,s,l;const c=(null!=d?d:{})[e.id];return{id:e.id,answer_id:null!=(t=null==(r=o?c:void 0)?void 0:r.answer_id)?t:"",correct_answer_id:(null==(a=e.answers.find(e=>"1.0"===e.correctness))?void 0:a.id)||"",content_html:n&&(null==(i=e.collaborator_solutions)||null==(s=i.find(e=>"detailed"===e.solution_type))?void 0:s.content_html),scoring:null!=(l=null==c?void 0:c.scoring)?l:{}}})).reduce((e,t)=>{const{id:r,answer_id:n,correct_answer_id:o,content_html:i,scoring:s}=t;return O({},e,{[r]:{answer_id:n,correct_answer_id:o,is_completed:a,solution:{content_html:i},scoring:s}})},{});var r;return{canAnswer:!0,needsSaved:!0,hasMultipleAttempts:!1,onAnswerChange:()=>{},onAnswerSave:()=>{},onNextStep:()=>{},apiIsPending:!1,canUpdateCurrentStep:!1,step:{id:1,uid:e.uid,available_points:"1.0"},questionNumber:e.number,numberOfQuestions:e.questions.length,questionStates:t,labelAnswers:i,show_all_feedback:n}})(t),{rightSideSlot:c}));export{fe as Answer,ve as AnswersTable,ot as CompletionStatus,Jr as Exercise,In as ExercisePreview,dr as ExerciseToolbar,It as FreeResponseInput,Bt as FreeResponseReview,At as FreeResponseTextArea,qn as IncludeRemoveQuestion,je as InnerStepCard,vn as Loader,Pe as OuterStepCard,wn as ProgressBar,gn as ProgressBarItem,ct as Question,pt as QuestionHtml,Qe as StepCard,un as StyledItem,Be as StyledOverlay,lr as StyledToolbar,Ve as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
