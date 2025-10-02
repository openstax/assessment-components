import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import a,{useRef as o,useState as i,useCallback as s,useEffect as l,createElement as d}from"react";import c,{css as p,createGlobalStyle as u}from"styled-components";import m from"scroll-to-element";import{debounce as h,once as b}from"lodash";import{memoize as g,isEmpty as f}from"lodash/fp.js";import w from"weak-map";import{FontAwesomeIcon as x}from"@fortawesome/react-fontawesome";import{faBookOpen as v,faTriangleExclamation as k,faQuestion as $,faPlus as y,faMinus as C,faEllipsisH as _}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as N}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as q}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as A}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as S}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as M}from"@fortawesome/free-solid-svg-icons/faXmark";import{faCircle as I}from"@fortawesome/free-solid-svg-icons/faCircle";import{BulletList as E}from"react-content-loader";function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const T="ABCDEFGHIJKLMNOPQRSTUVWXYZ",H=(e,t)=>e.id===t;function F(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}const j=a.createContext(()=>{throw new Error("context not initialized")}),L=["html","component","block"],P=t=>{let{html:r,component:n,block:o=!1}=t,i=O(t,L);const s=a.useContext(j);return a.useEffect(()=>{s()},[s,r]),void 0!==n?a.cloneElement(n,z({html:r},i)):e(o?"div":"span",z({dangerouslySetInnerHTML:{__html:r}},i))},R=["id"],B=t=>e("aside",{children:e(P,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),D=r=>{let{id:a}=r,o=O(r,R);const i=n("question-feedback",o.position||"bottom");return t("aside",{id:a,className:i,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(B,z({},o,{children:o.children}))]})};let Q,J,V,U,W,Z,Y,G,K,X,ee,te,re,ne=e=>e;const ae={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C",softOrange:"#FEDE9F"},oe={palette:ae,answer:{neutral:ae.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032",neutralDark:"#5f6163"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:ae.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:ae.neutralDarker,background:ae.neutralLighter}},ie=(...e)=>p(Q||(Q=ne`@media(max-width: ${0}px) { ${0} }`),600,p(...e)),se=(...e)=>p(J||(J=ne`@media(max-width: ${0}px) { ${0} }`),999,p(...e)),le=(...e)=>p(V||(V=ne`@media(min-width: ${0}px) { ${0} }`),1e3,p(...e)),de={answer:()=>p(W||(W=ne`
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
  `),ae.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",oe.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",oe.palette.white),answerColor:(e,t=!1)=>p(Z||(Z=ne`
    .answer-letter-wrapper::before {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>de.answerColor(oe.answer.checked,!0),answerCorrect:e=>de.answerColor(oe.answer.correct,e),answerIncorrect:e=>de.answerColor(oe.answer.incorrect,e),answerHover:()=>p(Y||(Y=ne`
    ${0};
    font-weight: bold;
  `),de.answerColor(oe.answer.hover)),answerCorrectAnswer:()=>de.answerColor(oe.answer.correct,!1),resetText:()=>p(G||(G=ne`
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
  `)),stepCardPadding:()=>p(K||(K=ne`
    padding: 4.8rem 14rem 0;

    ${0}

    ${0}
  `),se(X||(X=ne`
      padding: ${0} ${0};
    `),"24px","24px"),ie(ee||(ee=ne`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>p(te||(te=ne`
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
  `),de.resetText(),"1px",oe.popover.borderColor,oe.palette.white,"325px","8px","1rem",oe.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",oe.popover.borderColor,"1px",oe.palette.white,"9px","1px","9px","1rem","0.8rem"),visuallyHidden:()=>p(re||(re=ne`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `))};let ce;const pe=c.div(ce||(ce=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`),e=>e.state?oe.answer.correct:oe.answer.incorrect),ue=({hasCorrectAnswer:t,isCorrect:r,isIncorrect:n,isSelected:a})=>r||n||a&&t?e(pe,{state:!!r,children:e("span",{children:(r?"Correct":"Incorrect")+" Answer"})}):null,me=r=>{const{answer:{content_html:n,feedback_html:a},contentRenderer:o,labelAnswers:i,show_all_feedback:s,tableFeedbackEnabled:l,hasCorrectAnswer:d,isCorrect:c,isIncorrect:p,isSelected:u}=r;return t("div",{className:"answer-answer",role:"status","aria-live":"polite","aria-atomic":"true",children:[!1!==i&&e(ue,{hasCorrectAnswer:d,isCorrect:c,isIncorrect:p,isSelected:u}),e(P,{className:"answer-content",component:o,html:n}),s&&a&&!l&&e(B,{contentRenderer:o,children:a},"question-mc-feedback")]})},he=r=>{const{answer:a,answered_count:o,isCorrect:i,contentRenderer:s,iter:l,show_all_feedback:d,tableFeedbackEnabled:c}=r,p=a.selected_count&&o?Math.round(a.selected_count/o*100):0;return t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:i,red:!i}),children:[e("span",{className:"selected-count","data-percent":`${p}`,children:a.selected_count}),e("span",{className:n("letter",{green:i,red:!i}),children:T[l]})]}),e(me,{answer:a,contentRenderer:s,show_all_feedback:d,tableFeedbackEnabled:c})]})},be=n=>{const{type:a,iter:o,answer:i,disabled:s,onKeyPress:l,qid:d,contentRenderer:c,correctIncorrectIcon:p,feedbackId:u,isSelected:m,isCorrect:h,isIncorrect:b,hasCorrectAnswer:g,show_all_feedback:f,tableFeedbackEnabled:w,labelAnswers:x=!0}=n,v=`${m?"Selected ":""}Choice ${T[o]}:`;let k;return g||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:k}=n),t(r,{children:["teacher-preview"===a&&e("div",{className:"correct-incorrect",children:h&&p}),e("input",{type:"radio",className:"answer-input-box",checked:m,id:`${d}-option-${o}`,name:`${d}-options`,onChange:()=>k&&k(i),disabled:s||!k,"aria-details":u}),t("label",{onKeyPress:l,htmlFor:`${d}-option-${o}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper","aria-label":v,"data-answer-choice":T[o],"data-test-id":`answer-choice-${T[o]}`}),e(me,{answer:i,contentRenderer:c,labelAnswers:x,show_all_feedback:f,tableFeedbackEnabled:w,hasCorrectAnswer:g,isCorrect:h,isIncorrect:b,isSelected:m})]})]})},ge=t=>e("teacher-review"===t.type?he:be,z({},t)),fe=t=>{const{type:r,answer:a,disabled:o,answerId:i,correctAnswerId:s,incorrectAnswerId:l}=t,d=((e,t)=>e.id==t)(a,i),c=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(a,s),p=H(a,l),u=d||void 0===i&&(!l&&c||p),m=n("answers-answer",{disabled:o,"answer-selected":u,"answer-correct":c&&"student-mpp"!==r,"answer-incorrect":l&&H(a,l)});return e("div",{className:"openstax-answer",children:e("section",{className:m,children:e(ge,z({},t,{isCorrect:c,isSelected:u,isIncorrect:p}))})})};fe.displayName="OSAnswer";const we="student",xe=r=>{let n=0;const{question:a,hideAnswers:o,type:i=we,answered_count:s,choicesEnabled:l,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:u,correct_answer_feedback_html:m,previewMode:h,labelAnswers:b,show_all_feedback:g=!1,tableFeedbackEnabled:f,hasCorrectAnswer:w,onChangeAnswer:x,onKeyPress:v,answerIdOrder:k,instructions:$}=r;if(o)return null;const{id:y}=a,C=[],_={qid:y||"auto-"+n++,answerId:p,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:w,onChangeAnswer:x,type:i,answered_count:s,disabled:h||!l,labelAnswers:b,show_all_feedback:g,tableFeedbackEnabled:f,onKeyPress:v},N=(k?(e=>{const{answers:t}=a;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(k):a.answers).map((t,r)=>{const n={answer:z({},t,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:r,key:`${_.qid}-option-${r}`},o=Object.assign({},n,_);let i,s;return g&&t.feedback_html&&f?i=t.feedback_html:t.id===c&&u?i=u:t.id===d&&m&&(i=m),i&&(s=`feedback-${_.qid}-${r}`,C.push({index:r,html:i,id:s})),e(fe,z({feedbackId:s},o))});return C.forEach((t,n)=>{const a=t.index+n+1;N.splice(a,0,e(D,{id:t.id,contentRenderer:r.contentRenderer,children:t.html},a))}),t("div",z({},h?{}:{role:"radiogroup","aria-label":"Answer choices"},{className:"answers-table",children:[$,N]}))},ve=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren","overlayChildren"],ke=["step","questionNumber","numberOfQuestions","children","className","overlayChildren"];let $e,ye,Ce,_e,Ne,qe,Ae,Se,Me,Ie,Ee,ze,Oe,Te=e=>e;const He=c.div($e||($e=Te`
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
`),oe.palette.pale,le(ye||(ye=Te`
    max-width: 1000px;
  `))),Fe=c.div(Ce||(Ce=Te`
  padding: ${0};

  ${0}
`),"2rem",ie(_e||(_e=Te`
    padding: 0;
  `))),je=c.div(Ne||(Ne=Te`
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
`),oe.card.header.background,oe.palette.gray,le(qe||(qe=Te`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
  `)),se(Ae||(Ae=Te`
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
  `),"24px","24px"),ie(Se||(Se=Te`
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));je.displayName="StepCardHeader";const Le=c.div(Me||(Me=Te`
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
`),de.stepCardPadding(),oe.card.body.background,((...e)=>p(U||(U=ne`@media(max-width: ${0}px) { ${0} }`),600,p(...e)))(Ie||(Ie=Te`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),le(Ee||(Ee=Te`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),ie(ze||(ze=Te`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),Pe=c.div(Oe||(Oe=Te`
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
`)),Re=r=>{let{questionNumber:n,numberOfQuestions:a,showTotalQuestions:d,stepType:c,isHomework:p,availablePoints:u,unpadded:m,className:h,children:b,questionId:g,multipartBadge:f,leftHeaderChildren:w,rightHeaderChildren:x,headerTitleChildren:v,overlayChildren:k}=r,$=O(r,ve);const y=o(null),[C,_]=i(!1),N=a>1?`Questions ${n} - ${n+a-1}`:`Question ${n}`,q=s(()=>{_(!0)},[]),A=s(()=>{var e;Array.from((null==(e=document.getElementById("step-card"))?void 0:e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||[]).forEach(e=>{e.setAttribute("tabindex","-1")})},[]);return l(()=>{const e=y.current;return e&&k&&(e.addEventListener("focus",q),A()),()=>{null==e||e.removeEventListener("focus",q)}},[k,y,q,A]),t(Fe,z({},$,{children:[f,e(He,{className:h,children:t("div",z({ref:y},k?{onMouseOver:()=>_(!0),onMouseLeave:()=>_(!1),onBlur:e=>{y.current&&!y.current.contains(e.relatedTarget)&&_(!1)},tabIndex:0}:{},{children:[k&&C&&e(Pe,{id:"overlay-element",children:k}),t("div",{id:"step-card",children:[n&&p&&"exercise"===c&&t(je,{className:"step-card-header",children:[t("div",{children:[w,t("h2",{className:"question-info",children:[v,e("span",{children:N}),d?t("span",{className:"num-questions",children:[" / ",a]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",g]})]})]}),u||x?t("div",{children:[u&&t("div",{className:"points",children:[u," Points"]}),x]}):null]}),e(Le,{unpadded:m,children:b})]})]}))})]}))};Re.displayName="OSStepCard";const Be=t=>{let{step:r,questionNumber:a,numberOfQuestions:o,children:i,className:s,overlayChildren:l}=t,d=O(t,ke);return e(Re,z({},d,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,overlayChildren:l,children:i}))};Be.displayName="OSTaskStepCard";const De=["disabled","isWaiting","waitingText","children"];let Qe;const Je=c.button(Qe||(Qe=(e=>e)`
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
`),oe.button.background,oe.palette.white,oe.button.backgroundHover,oe.button.backgroundActive),Ve=t=>{const{disabled:r,isWaiting:n,waitingText:a,children:o}=t,i=O(t,De);return e(Je,z({},i,{disabled:n||r,children:n&&a||o}))};let Ue,We,Ze,Ye,Ge,Ke,Xe,et=e=>e;const tt=u(Ue||(Ue=et`
  :root {
    --content-text-scale: 1;
  }
`)),rt=c(He)(We||(We=et`
  padding: 88px 72px;
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(3rem * var(--content-text-scale));
  display: block;

  button {
    height: 48px;
  }

  p {
    margin: 16px 0 20px 0;
  }
`)),nt=c.h2(Ze||(Ze=et`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`)),at=c.div(Ye||(Ye=et`
  display: flex;
  margin: 0;
  gap: 1rem;

  button {
    height: 48px;
  }
`)),ot=c.div(Ge||(Ge=et`
  display: flex;
  margin: 0;
  gap: 1rem;
`)),it=c(Ve)(Ke||(Ke=et`
  background-color: ${0};
  color: ${0};
  border: 1px solid ${0};
  font-weight: normal;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${0} !important;
    color: ${0} !important;
    border: 1px solid ${0} !important;
  }

  &:active {
    background-color: ${0} !important;
    color: ${0} !important;
    border: 1px solid ${0} !important;
  }
`),oe.palette.white,oe.palette.black,oe.palette.pale,oe.palette.neutralBright,oe.palette.black,oe.palette.pale,oe.palette.neutralLight,oe.palette.black,oe.palette.pale),st=c(({numberOfQuestions:n,numberCompleted:a,handleContinue:o,handleNext:i,className:s,scoreSoFar:l,savedScore:d,handleRetry:c})=>{const p=n===a,u=a>0,m=p||0===a&&c||u&&c?"Next":u?"Continue":"Start",h=p?"Retry Quiz":"Resume Quiz",b=p?c:o,g=p||c?i:o;return t(r,{children:[e(tt,{}),t(rt,{className:s,children:[e(nt,{children:p?"You are done.":u?"Quiz is partially complete.":"No questions have been answered."}),c?t("div",{children:[e("p",{children:p?"Attempts for this quiz are unlimited. Your highest score will be saved.":"You are in the middle of a quiz attempt. Attempts for this quiz are unlimited. Your highest score will be saved."}),e(ot,{children:t("p",{children:[e("b",{children:"Current Score:"})," ",null!=l?l:"Score unavailable"," | ",e("b",{children:"Saved Score:"})," ",null!=d?d:"Score unavailable"]})})]}):e("p",{children:p?"Great job answering all the questions.":u?`You've completed ${a} of ${n} questions.`:"Begin working on the quiz."}),t(at,{children:[c?e(it,{"data-test-id":"retry-resume-btn",onClick:b,children:h}):null,e(Ve,{"data-test-id":`${m.split(" ")[0].toLowerCase()}-btn`,onClick:g,children:m})]})]})]})})(Xe||(Xe=et``));let lt;const dt=c.div(lt||(lt=(e=>e)`
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
`),de.stepCardPadding(),oe.palette.pale,oe.palette.neutral,oe.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",oe.palette.neutralLighter,oe.palette.neutralLightest,de.answer(),"1rem","1rem","0.1s ease-in-out",de.answerHover(),de.visuallyHidden(),de.answerChecked(),oe.answer.checked,de.answerChecked(),de.answerIncorrect(!0),de.answerCorrect(!0),de.answerCorrect(!1),de.answerIncorrect(),de.answerIncorrect(!0),de.popover(),"370px","0.9rem","1.1rem"),ct=a.forwardRef((r,a)=>{let o,i;const{question:s,correct_answer_id:l,incorrectAnswerId:d,exercise_uid:c,className:p,questionNumber:u,context:m,task:h,hidePreambles:b}=r,{stem_html:g,collaborator_solutions:f=[],formats:w,stimulus_html:x}=s,v=!!l,k=n("openstax-question",p,{"has-correct-answer":v&&!((null!=h?h.is_deleted:void 0)&&"homework"===(null!=h?h.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(o=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(P,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),t(dt,{ref:a,className:k,"data-question-number":u,"data-test-id":"question",children:[e(pt,{type:"context",html:m,hidden:b}),e(pt,{type:"stimulus",html:x,hidden:b}),e(pt,{type:"stem",html:g,hidden:b,questionNumber:u}),r.children,e(xe,z({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),i,r.displayFormats?e(ut,{formats:w}):void 0,o]})}),pt=t=>{const{html:r="",type:n,hidden:a,questionNumber:o}=t;return!0!==a&&r.length>0?e(P,{html:r,"data-question-number":o,className:`question-${n}`,block:!0}):null},ut=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let mt,ht,bt,gt=e=>e;const ft=c.div(mt||(mt=gt`
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
`),de.stepCardPadding(),oe.card.body.background,oe.palette.pale,ie(ht||(ht=gt`
            flex-wrap: wrap;
        `)),le(bt||(bt=gt`
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
    `)));let wt,xt,vt,kt,$t,yt,Ct=e=>e;const _t=p(wt||(wt=Ct`
  background-color: #f5e9ea;
`)),Nt=c.div(xt||(xt=Ct`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
    padding-bottom: 1rem;
  }
`),de.stepCardPadding()),qt=c.div(vt||(vt=Ct`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),At=c.div(kt||(kt=Ct`
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
`),e=>e.hasChildren?"space-between":"flex-end",oe.palette.danger,oe.palette.neutralThin),St=c.textarea($t||($t=Ct`
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
`),oe.palette.neutral,oe.palette.neutralDark,e=>e.isOverWordLimit&&_t,e=>e.isOverWordLimit&&p(yt||(yt=Ct`
    border: 2px solid ${0};
  `),oe.palette.danger),e=>e.readOnly&&oe.palette.neutralCool);St.displayName="OSFreeResponseTextArea";const Mt=t=>e(Ve,z({},t,{children:"Cancel"})),It=r=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,question:l,questionNumber:d,saveHandler:c,submitBtnLabel:p,textHasChanged:u,wordLimit:m}=r,h=F(o)>m,b={};return d&&(b["data-question-number"]=d),t(Nt,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(qt,z({},b,{children:l.stem_html&&e(pt,{type:"stem",html:l.stem_html,hidden:!1})})),e(St,z({},r,{isOverWordLimit:h,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(At,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[F(o)," words"]}),h&&t("span",{className:"word-limit-error-info",children:["Maximum ",m," words"]})]})]})]}),t(ft,{children:[n?e("div",{className:"points",role:"status",children:t("strong",{children:["Points: ",n]})}):null,t("div",{className:"controls",children:[e(Mt,{disabled:!u,onClick:a}),e(Ve,{"data-test-id":"submit-answer-btn",disabled:s||h,onClick:c,children:p})]})]})]})};It.displayName="OSFreeResponse";const Et=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),zt=()=>e("div",{children:"Unlimited quiz attempts left"}),Ot=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,Tt=t=>e(Ve,z({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),Ht=t=>e(Ve,z({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),Ft=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,jt=a.forwardRef((r,n)=>{const{question:o,task:i,answer_id_order:s,onAnswerChange:l,feedback_html:d,correct_answer_feedback_html:c,is_completed:p,correct_answer_id:u,incorrectAnswerId:m,choicesEnabled:h,questionNumber:b,answer_id:g,hasMultipleAttempts:f,hasUnlimitedAttempts:w,attempts_remaining:x,published_comments:v,detailedSolution:k,canAnswer:$,needsSaved:y,attempt_number:C,apiIsPending:_,onAnswerSave:N,onNextStep:q,canUpdateCurrentStep:A,displaySolution:S,available_points:M,free_response:I,labelAnswers:E,show_all_feedback:z,tableFeedbackEnabled:O,hasFeedback:T,previewMode:H}=r,[F,j]=a.useState(!1);return a.useEffect(()=>{F&&p&&(q(b-1),j(!1))},[q,b,F,p]),t("div",{"data-test-id":"student-exercise-question",children:[e(ct,{ref:n,task:i,question:o,answerIdOrder:s,choicesEnabled:h,answer_id:g,questionNumber:b,onChange:l,feedback_html:d,correct_answer_feedback_html:c,correct_answer_id:p?u:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:S,labelAnswers:E,show_all_feedback:z,tableFeedbackEnabled:O,previewMode:H,children:e(Ft,{free_response:I})}),H&&k||!H?e(ft,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[M?t("strong",{children:["Points: ",M]}):null,t("span",{className:"attempts-left",children:[f&&x>0&&e(Et,{count:x}),w?e(zt,{}):null]}),e(Ot,{published_comments:v}),k&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(P,{html:k})]})]}),e("div",{className:"controls",children:$&&y||F?e(Tt,{disabled:_||!g||F,isWaiting:_||F,attempt_number:C,onClick:()=>{var e;N("string"==typeof(e=o.id)?parseInt(e,10):e),T||j(!0)},willContinue:!T}):e(Ht,{onClick:()=>q(b-1),canUpdateCurrentStep:A})})]})}):null]})}),Lt={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},Pt=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},Rt=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},Bt=(e,t,r=5)=>{r>0&&(Rt(e).length||Pt(e).length)?setTimeout(()=>{Bt(e,t,r-1)},200):t()},Dt=(e,t)=>new Promise(r=>{(function(e,t){const r=Rt(e);t.MathJax.Hub.Queue(((e,t)=>()=>{f(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=Pt(e);f(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{Bt(e,r)})}),Qt=g((e,t)=>h(Dt,100,{leading:!0,trailing:!1}).bind(null,e,t));Qt.cache=new w;const Jt=b((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(Lt),e.MathJax.Hub.processSectionDelay=0,r()):(Lt.AuthorInit=r,e.MathJax=Lt)}));let Vt,Ut,Wt,Zt,Yt,Gt=e=>e;const Kt=c.div(Vt||(Vt=Gt`
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
`),oe.palette.light,"2rem","2rem",oe.palette.neutral,oe.palette.neutralDarker,oe.palette.neutralDarker,e=>!e.desktop&&p(Ut||(Ut=Gt`
    ${0}
    ${0}
  `),le(Wt||(Wt=Gt`
      display: none;
    `)),se(Zt||(Zt=Gt`
      display: none;
    `))),e=>e.mobile&&ie(Yt||(Yt=Gt`
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
  `),oe.palette.neutral,oe.palette.light)),Xt=({icons:r})=>{var n,a;if(!r)return null;const o=Object.values(r),i=o.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),s=o.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),l=null==(n=r.topic)?void 0:n.url,d=null==(a=r.errata)?void 0:a.url;return t(Kt,z({},{mobile:i,desktop:s},{children:[l?t("a",{href:l,target:"_blank",children:[e(x,{icon:v}),e("span",{children:"View topic in textbook"})]}):null,d?t("a",{href:d,target:"_blank",children:[e(x,{icon:k}),e("span",{children:"Suggest a correction"})]}):null]}))};let er,tr,rr,nr,ar,or,ir,sr,lr,dr=e=>e;const cr=c.div(er||(er=dr`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),oe.palette.mediumBlue,e=>!e.desktop&&p(tr||(tr=dr`
    ${0}
    ${0}
  `),le(rr||(rr=dr`
      display: none;
    `)),se(nr||(nr=dr`
      display: none;
    `))),e=>!e.mobile&&ie(ar||(ar=dr`
    display: none;
  `))),pr=c.div(or||(or=dr`
  position: relative;
  display: flex;
`)),ur=c.div(ir||(ir=dr`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`),de.popover),mr=r=>e(cr,z({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(pr,{children:[r.children,t(ur,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),hr=c.div(sr||(sr=dr`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),br=c(x)(lr||(lr=dr`
  color: ${0};
  height: 1em;
`),oe.palette.darkGray),gr=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},a=[],o=t.questions.every(e=>e.answers.length>0);let i;var s,l,d;return o&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":o&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&a.push(e(mr,z({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(s=r.topic.location)?void 0:s.header)||n,{children:e(br,{icon:N})}),"topic")),r.errata&&a.push(e(mr,z({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(l=r.errata.location)?void 0:l.header)||n,{children:e(br,{icon:q})}),"errata")),r.info&&i&&a.push(e(mr,z({text:i},(null==(d=r.info.location)?void 0:d.header)||n,{children:e(br,{icon:A,height:"16px",width:"16px"})}),"type")),e(hr,{children:a})};let fr;const wr=p(fr||(fr=(e=>e)`
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
`),oe.card.header.background,oe.card.header.background,oe.palette.white,oe.palette.neutralDarker),xr=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons","overlayChildren","labelAnswers","previewMode"];let vr,kr,$r,yr,Cr,_r,Nr,qr,Ar,Sr,Mr=e=>e;const Ir=c(Be)(vr||(vr=Mr`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),Er=u(kr||(kr=Mr`
  :root {
    --content-text-scale: 1;
  }
`)),zr=c.div($r||($r=Mr`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&p(yr||(yr=Mr`
    ${0}
    ${0}
    ${0}
  `),le(Cr||(Cr=Mr`
      ${0} {
        margin-left: 6.8rem;
      }
    `),Ir),se(_r||(_r=Mr`
      ${0} {
        margin-left: 4.8rem;
      }
    `),Ir),ie(Nr||(Nr=Mr`
      ${0} {
        margin-left: 0;
      }
    `),Ir)),e=>e.mobileToolbarEnabled&&p(qr||(qr=Mr`
    ${0}
  `),ie(Ar||(Ar=Mr`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),Kt,Fe,He))),Or=r=>t(zr,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(Xt,{icons:r.exerciseIcons}),e(Ir,z({overlayChildren:r.overlayChildren},r))]}),Tr=({exercise:n})=>t(r,{children:[n.context&&e(P,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(P,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),Hr=c(r=>{let{numberOfQuestions:n,questionNumber:o,step:i,exercise:s,show_all_feedback:l,scrollToQuestion:c,exerciseIcons:p,overlayChildren:u,labelAnswers:h=!0,previewMode:b=!1}=r,g=O(r,xr);const f="feedback_html"in i,w=a.useRef([]),x=a.useRef(null),v=a.useCallback(()=>{x.current&&(async(e,t=window)=>{await Jt(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?Qt(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(x.current)},[]);a.useEffect(()=>{const e=c&&w.current[c];e&&m(e)},[c,s]);const k=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),$=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile});return t(j.Provider,{value:v,children:[e(Er,{}),e(Or,z({step:i,questionNumber:o,numberOfQuestions:f?n:s.questions.length,rightHeaderChildren:p?e(gr,{exercise:s,icons:p}):null,showTotalQuestions:f,desktopToolbarEnabled:k,mobileToolbarEnabled:$},p?{exerciseIcons:p}:null,{className:g.className,overlayChildren:u,children:t("div",{ref:x,children:[e(Tr,{exercise:s}),s.questions.map((e,t)=>{var r;const n=z({},f?i:g.questionStates[e.id]);return d(jt,z({},g,z({},n,{available_points:void 0}),{ref:e=>w.current[o+t]=e,exercise_uid:s.uid,key:e.id,question:e,questionNumber:o+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:l,labelAnswers:h,tableFeedbackEnabled:l&&!f,canUpdateCurrentStep:"canUpdateCurrentStep"in g?g.canUpdateCurrentStep:!(t+1===s.questions.length),previewMode:b}))})]})}))]})})(Sr||(Sr=Mr`
  ${0}
`),wr),Fr=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let jr,Lr,Pr,Rr,Br,Dr,Qr,Jr,Vr,Ur,Wr,Zr=e=>e;const Yr=c.nav(jr||(jr=Zr`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),ie(Lr||(Lr=Zr`
    padding: 1.6rem 0.8rem;
  `))),Gr=c.span(Pr||(Pr=Zr`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),Kr="box-shadow: 0px 1px 4px 0px #00000066;",Xr=c.button(Vr||(Vr=Zr`
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
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",oe.palette.neutralDarker,e=>e.isActive?p(Ur||(Ur=Zr`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),Kr):null,e=>(e=>{switch(e){case"isStatus":return p(Rr||(Rr=Zr`
        background-color: ${0};
      `),oe.palette.softOrange);case"isCorrect":return p(Br||(Br=Zr`
        color: ${0};
        background-color: #E8F4D8;
      `),oe.answer.correct);case"isIncorrect":return p(Dr||(Dr=Zr`
        color: ${0};
        background-color: #F8E8EA;
      `),oe.answer.incorrect);case"isIncomplete":return p(Qr||(Qr=Zr`
        background-color: ${0};
      `),oe.palette.neutralBright);default:return p(Jr||(Jr=Zr`
        background-color: ${0};
      `),oe.palette.neutralLight)}})(e.variant),Kr),en=c(x)(Wr||(Wr=Zr`
  color: ${0};
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  padding: 0.1rem;
  font-size: 1.2rem;
  border-radius: 50%;
`),e=>e.color),tn=({variant:t})=>{if("isStatus"===t)return null;const r={isCorrect:{icon:S,background:oe.answer.correct,color:oe.palette.white,label:"Correct"},isIncorrect:{icon:M,background:oe.answer.incorrect,color:oe.palette.white,label:"Incorrect"},isIncomplete:{icon:$,background:oe.answer.neutral,color:oe.palette.white,label:"Incomplete"},null:{icon:I,background:oe.answer.neutral,color:oe.answer.neutralDark,label:"No feedback"}}[String(t)];return r?e(en,{icon:r.icon,color:r.color,style:{background:r.background},height:"16px",width:"16px","aria-label":r.label,"aria-hidden":void 0}):null},rn=({index:r,isActive:n,step:a,goToStep:o})=>t(Gr,{children:[e(Xr,{variant:a.variant,isActive:n,onClick:()=>o(r,a),"aria-current":n?"location":"false","aria-label":"isStatus"===a.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===a.variant?e(Fr,{}):r+1}),e(tn,{variant:a.variant})]}),nn=({steps:t,activeIndex:r,goToStep:n})=>e(Yr,{"aria-label":"Breadcrumbs",children:t.map((t,a)=>e(rn,{index:a,isActive:a===r,step:t,goToStep:n},a))});let an;const on=c.div(an||(an=(e=>e)`
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
`),oe.palette.light),sn=()=>e(on,{children:e(E,{uniqueKey:"OSLoader"})});let ln,dn,cn,pn=e=>e;const un=c.div(ln||(ln=pn`
  display: flex;
  width: fit-content;
`)),mn=c.button(dn||(dn=pn`
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
`),oe.palette.mediumBlue,oe.palette.orange,oe.palette.neutralDarker),hn=c(x)(cn||(cn=pn`
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
`),oe.palette.white,oe.palette.mediumBlue,oe.palette.orange,oe.palette.neutralDarker),bn=({buttonVariant:r,onIncludeHandler:n,onRemoveHandler:o,onClickDetails:i})=>{const s=a.useMemo(()=>"include"===r?y:C,[r]);return t(un,{children:[t(mn,{className:r,onClick:()=>(e=>{switch(e){case"include":n();break;case"remove":o()}})(r),"aria-label":r,children:[e(hn,{className:r,icon:s,"aria-label":r+" question",border:!0,size:"lg"}),e("span",{children:(l=r,l.charAt(0).toUpperCase()+l.slice(1)+" question")})]}),t(mn,{className:"details","aria-label":"details",onClick:i,children:[e(hn,{className:"details",icon:_,border:!0,size:"lg"}),e("span",{children:"Details"})]})]});var l};let gn;const fn=c(Hr)(gn||(gn=(e=>e)`
  ${0}
  ${0}
`),({showAllFeedback:e})=>!e&&"\n    .step-card-footer {\n      display: none;\n    }\n  ",({showCorrectAnswer:e})=>!e&&"\n    .answer-answer {\n      font-weight: normal;\n    }\n  "),wn=({exercise:t,selected:r,showAllFeedback:n=!1,showChosenAnswer:a=!1,showCorrectAnswer:o=!1,labelAnswers:i=!1,overlayChildren:s,questionStates:l})=>e(fn,z({exercise:n?t:(e=>(e.questions.map(e=>e.answers.map(e=>{e.feedback_html="",e.correctness=o?e.correctness:void 0})),e))(t),className:"preview-card "+(r?"is-selected":""),previewMode:!0,overlayChildren:s},(e=>{const t=(r=e.questions,r.map(e=>{var t,r,o,i,s;return{id:e.id,answer_id:null!=(t=null==(r=a?(null!=l?l:{})[e.id]:void 0)?void 0:r.answer_id)?t:"",correct_answer_id:(null==(o=e.answers.find(e=>"1.0"===e.correctness))?void 0:o.id)||"",content_html:n&&(null==(i=e.collaborator_solutions)||null==(s=i.find(e=>"detailed"===e.solution_type))?void 0:s.content_html)}})).reduce((e,t)=>{const{id:r,answer_id:n,correct_answer_id:a,content_html:i}=t;return z({},e,{[r]:{answer_id:n,correct_answer_id:a,is_completed:o,solution:{content_html:i}}})},{});var r;return{canAnswer:!0,needsSaved:!0,hasMultipleAttempts:!1,hasUnlimitedAttempts:!1,onAnswerChange:()=>{},onAnswerSave:()=>{},onNextStep:()=>{},apiIsPending:!1,canUpdateCurrentStep:!1,step:{id:1,uid:e.uid,available_points:"1.0"},questionNumber:e.number,numberOfQuestions:e.questions.length,questionStates:t,labelAnswers:i,show_all_feedback:n}})(t)));export{fe as Answer,xe as AnswersTable,st as CompletionStatus,Hr as Exercise,wn as ExercisePreview,Xt as ExerciseToolbar,It as FreeResponseInput,St as FreeResponseTextArea,bn as IncludeRemoveQuestion,He as InnerStepCard,sn as Loader,Fe as OuterStepCard,nn as ProgressBar,rn as ProgressBarItem,ct as Question,pt as QuestionHtml,Re as StepCard,Xr as StyledItem,Pe as StyledOverlay,Kt as StyledToolbar,Be as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
