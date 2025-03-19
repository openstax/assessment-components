import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import a,{useRef as o,useState as i,useCallback as s,useEffect as l,createElement as c}from"react";import d,{css as p,createGlobalStyle as m}from"styled-components";import u from"scroll-to-element";import{debounce as h,once as b}from"lodash";import{memoize as f,isEmpty as g}from"lodash/fp.js";import w from"weak-map";import{FontAwesomeIcon as x}from"@fortawesome/react-fontawesome";import{faBookOpen as v,faTriangleExclamation as $,faQuestion as k,faPlus as y,faMinus as C,faEllipsisH as _}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as N}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as q}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as S}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as A}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as M}from"@fortawesome/free-solid-svg-icons/faXmark";import{BulletList as I}from"react-content-loader";function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const H="ABCDEFGHIJKLMNOPQRSTUVWXYZ",O=(e,t)=>e.id===t;function z(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}const j=a.createContext(()=>{throw new Error("context not initialized")}),F=["html","component","block"],P=t=>{let{html:r,component:n,block:o=!1}=t,i=T(t,F);const s=a.useContext(j);return a.useEffect(()=>{s()},[s,r]),void 0!==n?a.cloneElement(n,E({html:r},i)):e(o?"div":"span",E({dangerouslySetInnerHTML:{__html:r}},i))},L=["id"],B=t=>e("aside",{children:e(P,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),R=r=>{let{id:a}=r,o=T(r,L);const i=n("question-feedback",o.position||"bottom");return t("aside",{id:a,className:i,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(B,E({},o,{children:o.children}))]})};let J,Q,V,D,U,W,Z,G,K,Y,X,ee,te,re=e=>e;const ne={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},ae={palette:ne,answer:{neutral:ne.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:ne.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:ne.neutralDarker,background:ne.neutralLighter}},oe=(...e)=>p(J||(J=re`@media(max-width: ${0}px) { ${0} }`),600,p(...e)),ie=(...e)=>p(Q||(Q=re`@media(max-width: ${0}px) { ${0} }`),999,p(...e)),se=(...e)=>p(V||(V=re`@media(min-width: ${0}px) { ${0} }`),1e3,p(...e)),le={answer:()=>p(U||(U=re`
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
  `),ne.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",ae.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",ae.palette.white),answerColor:(e,t=!1)=>p(W||(W=re`
    .answer-letter-wrapper::before {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e} !important;`:null),answerChecked:()=>le.answerColor(ae.answer.checked,!0),answerCorrect:e=>le.answerColor(ae.answer.correct,e),answerIncorrect:e=>le.answerColor(ae.answer.incorrect,e),answerHover:()=>p(Z||(Z=re`
    ${0};
    font-weight: bold;
  `),le.answerColor(ae.answer.hover)),answerCorrectAnswer:()=>le.answerColor(ae.answer.correct,!1),resetText:()=>p(G||(G=re`
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
  `)),stepCardPadding:()=>p(K||(K=re`
    padding: 48px 140px;

    ${0}

    ${0}
  `),ie(Y||(Y=re`
      padding: ${0} ${0};
    `),"24px","24px"),oe(X||(X=re`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>p(ee||(ee=re`
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
  `),le.resetText(),"1px",ae.popover.borderColor,ae.palette.white,"325px","8px","1rem",ae.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",ae.popover.borderColor,"1px",ae.palette.white,"9px","1px","9px","1rem","0.8rem"),visuallyHidden:()=>p(te||(te=re`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `))};let ce;const de=d.div(ce||(ce=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`),e=>e.state?ae.answer.correct:ae.answer.incorrect),pe=({isCorrect:e,isIncorrect:r})=>{if(!e&&!r)return null;const n=e||!1===r;return t(de,{state:n,children:[n?"Correct":"Incorrect"," Answer"]})},me=r=>{const{answer:{content_html:n,feedback_html:a},contentRenderer:o,show_all_feedback:i,tableFeedbackEnabled:s,isCorrect:l,isIncorrect:c}=r;return t("div",{className:"answer-answer",children:[e(pe,{isCorrect:l,isIncorrect:c}),e(P,{className:"answer-content",component:o,html:n}),i&&a&&!s&&e(B,{contentRenderer:o,children:a},"question-mc-feedback")]})},ue=r=>{const{answer:a,answered_count:o,isCorrect:i,contentRenderer:s,iter:l,show_all_feedback:c,tableFeedbackEnabled:d}=r,p=a.selected_count&&o?Math.round(a.selected_count/o*100):0;return t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:i,red:!i}),children:[e("span",{className:"selected-count","data-percent":`${p}`,children:a.selected_count}),e("span",{className:n("letter",{green:i,red:!i}),children:H[l]})]}),e(me,{answer:a,contentRenderer:s,show_all_feedback:c,tableFeedbackEnabled:d})]})},he=n=>{const{type:a,iter:o,answer:i,disabled:s,onKeyPress:l,qid:c,contentRenderer:d,correctIncorrectIcon:p,feedbackId:m,isSelected:u,isCorrect:h,isIncorrect:b,hasCorrectAnswer:f,show_all_feedback:g,tableFeedbackEnabled:w}=n,x=`${u?"Selected ":""}Choice ${H[o]}:`;let v;return f||"teacher-review"===a||"teacher-preview"===a||"student-mpp"===a||({onChangeAnswer:v}=n),t(r,{children:["teacher-preview"===a&&e("div",{className:"correct-incorrect",children:h&&p}),e("input",{type:"radio",className:"answer-input-box",checked:u,id:`${c}-option-${o}`,name:`${c}-options`,onChange:()=>v&&v(i),disabled:s||!v,"aria-details":m}),t("label",{onKeyPress:l,htmlFor:`${c}-option-${o}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper","aria-label":x,"data-answer-choice":H[o],"data-test-id":`answer-choice-${H[o]}`}),e(me,{answer:i,contentRenderer:d,show_all_feedback:g,tableFeedbackEnabled:w,isCorrect:h,isIncorrect:b})]})]})},be=t=>e("teacher-review"===t.type?ue:he,E({},t)),fe=t=>{const{type:r,answer:a,disabled:o,answerId:i,correctAnswerId:s,incorrectAnswerId:l}=t,c=((e,t)=>e.id==t)(a,i),d=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(a,s),p=O(a,l),m=c||void 0===i&&(!l&&d||p),u=n("answers-answer",{disabled:o,"answer-selected":m,"answer-correct":d&&"student-mpp"!==r,"answer-incorrect":l&&O(a,l)});return e("div",{className:"openstax-answer",children:e("section",{className:u,children:e(be,E({},t,{isCorrect:d,isSelected:m,isIncorrect:p}))})})};fe.displayName="OSAnswer";const ge="student",we=r=>{let n=0;const{question:a,hideAnswers:o,type:i=ge,answered_count:s,choicesEnabled:l,correct_answer_id:c,incorrectAnswerId:d,answer_id:p,feedback_html:m,correct_answer_feedback_html:u,previewMode:h,show_all_feedback:b=!1,tableFeedbackEnabled:f,hasCorrectAnswer:g,onChangeAnswer:w,onKeyPress:x,answerIdOrder:v,instructions:$}=r;if(o)return null;const{id:k}=a,y=[],C={qid:k||"auto-"+n++,answerId:p,correctAnswerId:c,incorrectAnswerId:d,hasCorrectAnswer:g,onChangeAnswer:w,type:i,answered_count:s,disabled:h||!l,show_all_feedback:b,tableFeedbackEnabled:f,onKeyPress:x},_=(v?(e=>{const{answers:t}=a;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(v):a.answers).map((t,r)=>{const n={answer:E({},t,{question_id:"string"==typeof a.id?parseInt(a.id,10):a.id}),iter:r,key:`${C.qid}-option-${r}`},o=Object.assign({},n,C);let i,s;return b&&t.feedback_html&&f?i=t.feedback_html:t.id===d&&m?i=m:t.id===c&&u&&(i=u),i&&(s=`feedback-${C.qid}-${r}`,y.push({index:r,html:i,id:s})),e(fe,E({feedbackId:s},o))});return y.forEach((t,n)=>{const a=t.index+n+1;_.splice(a,0,e(R,{id:t.id,contentRenderer:r.contentRenderer,children:t.html},a))}),t("div",E({},h?{}:{role:"radiogroup","aria-label":"Answer choices"},{className:"answers-table",children:[$,_]}))},xe=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren","overlayChildren"],ve=["step","questionNumber","numberOfQuestions","children","className","overlayChildren"];let $e,ke,ye,Ce,_e,Ne,qe,Se,Ae,Me,Ie,Ee,Te,He=e=>e;const Oe=d.div($e||($e=He`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  margin: 0 auto 5rem auto;
  border: 1px solid ${0};
  border-radius: 0.25rem;
  background-color: white;
  overflow: hidden;

  ${0}
`),ae.palette.light,se(ke||(ke=He`
    max-width: 1000px;
  `))),ze=d.div(ye||(ye=He`
  padding: ${0};

  ${0}
`),"2rem",oe(Ce||(Ce=He`
    padding: 0;
  `))),je=d.div(_e||(_e=He`
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
`),ae.card.header.background,ae.palette.gray,se(Ne||(Ne=He`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
  `)),ie(qe||(qe=He`
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
  `),"24px","24px"),oe(Se||(Se=He`
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px"));je.displayName="StepCardHeader";const Fe=d.div(Ae||(Ae=He`
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
`),le.stepCardPadding(),ae.card.body.background,((...e)=>p(D||(D=re`@media(max-width: ${0}px) { ${0} }`),600,p(...e)))(Me||(Me=He`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),se(Ie||(Ie=He`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),oe(Ee||(Ee=He`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),Pe=d.div(Te||(Te=He`
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
`)),Le=r=>{let{questionNumber:n,numberOfQuestions:a,showTotalQuestions:c,stepType:d,isHomework:p,availablePoints:m,unpadded:u,className:h,children:b,questionId:f,multipartBadge:g,leftHeaderChildren:w,rightHeaderChildren:x,headerTitleChildren:v,overlayChildren:$}=r,k=T(r,xe);const y=o(null),[C,_]=i(!1),N=a>1?`Questions ${n} - ${n+a-1}`:`Question ${n}`,q=s(()=>{_(!0)},[]),S=s(()=>{var e;Array.from((null==(e=document.getElementById("step-card"))?void 0:e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||[]).forEach(e=>{e.setAttribute("tabindex","-1")})},[]);return l(()=>{const e=y.current;return e&&$&&(e.addEventListener("focus",q),S()),()=>{null==e||e.removeEventListener("focus",q)}},[$,y,q,S]),t(ze,E({},k,{children:[g,e(Oe,{className:h,children:t("div",E({ref:y},$?{onMouseOver:()=>_(!0),onMouseLeave:()=>_(!1),onBlur:e=>{y.current&&!y.current.contains(e.relatedTarget)&&_(!1)},tabIndex:0}:{},{children:[$&&C&&e(Pe,{id:"overlay-element",children:$}),t("div",{id:"step-card",children:[n&&p&&"exercise"===d&&t(je,{className:"step-card-header",children:[t("div",{children:[w,t("h2",{className:"question-info",children:[v,e("span",{children:N}),c?t("span",{className:"num-questions",children:[" / ",a]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",f]})]})]}),m||x?t("div",{children:[m&&t("div",{className:"points",children:[m," Points"]}),x]}):null]}),e(Fe,{unpadded:u,children:b})]})]}))})]}))};Le.displayName="OSStepCard";const Be=t=>{let{step:r,questionNumber:a,numberOfQuestions:o,children:i,className:s,overlayChildren:l}=t,c=T(t,ve);return e(Le,E({},c,{unpadded:!0,questionNumber:a,numberOfQuestions:o,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,s),questionId:r.uid,overlayChildren:l,children:i}))};Be.displayName="OSTaskStepCard";const Re=["disabled","isWaiting","waitingText","children"];let Je;const Qe=d.button(Je||(Je=(e=>e)`
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
`),ae.button.background,ae.palette.white,ae.button.backgroundHover,ae.button.backgroundActive),Ve=t=>{const{disabled:r,isWaiting:n,waitingText:a,children:o}=t,i=T(t,Re);return e(Qe,E({},i,{disabled:n||r,children:n&&a||o}))};let De,Ue,We,Ze,Ge=e=>e;const Ke=m(De||(De=Ge`
  :root {
    --content-text-scale: 1;
  }
`)),Ye=d(Oe)(Ue||(Ue=Ge`
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
`)),Xe=d.h2(We||(We=Ge`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`)),et=d(({numberOfQuestions:n,numberCompleted:a,handleClick:o,className:i})=>{const s=n===a,l=a>0,c=s?"Next":l?"Continue":"Start";return t(r,{children:[e(Ke,{}),t(Ye,{className:i,children:[e(Xe,{children:s?"You are done.":l?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:s?"Great job answering all the questions.":l?`You've completed ${a} of ${n} questions.`:"Begin working on the quiz."}),e(Ve,{"data-test-id":`${c.split(" ")[0].toLowerCase()}-btn`,onClick:()=>o(),children:c})]})]})})(Ze||(Ze=Ge``));let tt;const rt=d.div(tt||(tt=(e=>e)`
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
`),le.stepCardPadding(),ae.palette.pale,ae.palette.neutral,ae.palette.neutralLightBlue,"1rem","2.5rem","1rem","1rem","1rem","1rem",ae.palette.neutralLighter,ae.palette.neutralLightest,le.answer(),"1rem","1rem","0.1s ease-in-out",le.answerHover(),le.visuallyHidden(),le.answerChecked(),ae.answer.checked,le.answerChecked(),le.answerIncorrect(),le.answerCorrect(!0),le.answerCorrectAnswer(),le.answerIncorrect(),le.answerIncorrect(!0),le.popover(),"370px","0.9rem","1.1rem"),nt=a.forwardRef((r,a)=>{let o,i;const{question:s,correct_answer_id:l,incorrectAnswerId:c,exercise_uid:d,className:p,questionNumber:m,context:u,task:h,hidePreambles:b}=r,{stem_html:f,collaborator_solutions:g=[],formats:w,stimulus_html:x}=s,v=!!l,$=n("openstax-question",p,{"has-correct-answer":v&&!((null!=h?h.is_deleted:void 0)&&"homework"===(null!=h?h.type:void 0)),"has-incorrect-answer":!!c});return null!=d&&(o=e("div",{className:"exercise-uid",children:d})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=s;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(P,{className:"solution",block:!0,html:g.map(e=>e.content_html).join("")})]})),t(rt,{ref:a,className:$,"data-question-number":m,"data-test-id":"question",children:[e(at,{type:"context",html:u,hidden:b}),e(at,{type:"stimulus",html:x,hidden:b}),e(at,{type:"stem",html:f,hidden:b,questionNumber:m}),r.children,e(we,E({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),i,r.displayFormats?e(ot,{formats:w}):void 0,o]})}),at=t=>{const{html:r="",type:n,hidden:a,questionNumber:o}=t;return!0!==a&&r.length>0?e(P,{html:r,"data-question-number":o,className:`question-${n}`,block:!0}):null},ot=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let it,st,lt,ct=e=>e;const dt=d.div(it||(it=ct`
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
`),le.stepCardPadding(),ae.card.body.background,ae.palette.pale,oe(st||(st=ct`
            flex-wrap: wrap;
        `)),se(lt||(lt=ct`
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
    `)));let pt,mt,ut,ht,bt,ft,gt=e=>e;const wt=p(pt||(pt=gt`
  background-color: #f5e9ea;
`)),xt=d.div(mt||(mt=gt`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
  }
`),le.stepCardPadding()),vt=d.div(ut||(ut=gt`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),$t=d.div(ht||(ht=gt`
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
`),e=>e.hasChildren?"space-between":"flex-end",ae.palette.danger,ae.palette.neutralThin),kt=d.textarea(bt||(bt=gt`
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
`),ae.palette.neutral,ae.palette.neutralDark,e=>e.isOverWordLimit&&wt,e=>e.isOverWordLimit&&p(ft||(ft=gt`
    border: 2px solid ${0};
  `),ae.palette.danger),e=>e.readOnly&&ae.palette.neutralCool);kt.displayName="OSFreeResponseTextArea";const yt=t=>e(Ve,E({},t,{children:"Cancel"})),Ct=r=>{const{availablePoints:n,cancelHandler:a,defaultValue:o,infoRowChildren:i,isSubmitDisabled:s,question:l,questionNumber:c,saveHandler:d,submitBtnLabel:p,textHasChanged:m,wordLimit:u}=r,h=z(o)>u,b={};return c&&(b["data-question-number"]=c),t(xt,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(vt,E({},b,{children:l.stem_html&&e(at,{type:"stem",html:l.stem_html,hidden:!1})})),e(kt,E({},r,{isOverWordLimit:h,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t($t,{hasChildren:!!i,children:[i,t("div",{children:[t("span",{children:[z(o)," words"]}),h&&t("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),t(dt,{children:[n?e("div",{className:"points",role:"status",children:t("strong",{children:["Points: ",n]})}):null,t("div",{className:"controls",children:[e(yt,{disabled:!m,onClick:a}),e(Ve,{"data-test-id":"submit-answer-btn",disabled:s||h,onClick:d,children:p})]})]})]})};Ct.displayName="OSFreeResponse";const _t=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),Nt=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,qt=t=>e(Ve,E({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),St=t=>e(Ve,E({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),At=({free_response:t})=>t?e(r,{children:e("div",{className:"free-response",children:t})}):null,Mt=a.forwardRef((r,n)=>{const{question:o,task:i,answer_id_order:s,onAnswerChange:l,feedback_html:c,correct_answer_feedback_html:d,is_completed:p,correct_answer_id:m,incorrectAnswerId:u,choicesEnabled:h,questionNumber:b,answer_id:f,hasMultipleAttempts:g,attempts_remaining:w,published_comments:x,detailedSolution:v,canAnswer:$,needsSaved:k,attempt_number:y,apiIsPending:C,onAnswerSave:_,onNextStep:N,canUpdateCurrentStep:q,displaySolution:S,available_points:A,free_response:M,show_all_feedback:I,tableFeedbackEnabled:E,hasFeedback:T,previewMode:H}=r,[O,z]=a.useState(!1);return a.useEffect(()=>{O&&p&&(N(b-1),z(!1))},[N,b,O,p]),t("div",{"data-test-id":"student-exercise-question",children:[e(nt,{ref:n,task:i,question:o,answerIdOrder:s,choicesEnabled:h,answer_id:f,questionNumber:b,onChange:l,feedback_html:c,correct_answer_feedback_html:d,correct_answer_id:p?m:null,incorrectAnswerId:u,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:S,show_all_feedback:I,tableFeedbackEnabled:E,previewMode:H,children:e(At,{free_response:M})}),e(dt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[A?t("strong",{children:["Points: ",A]}):null,e("span",{className:"attempts-left",children:g&&w>0&&e(_t,{count:w})}),e(Nt,{published_comments:x}),v&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(P,{html:v})]})]}),e("div",{className:"controls",children:$&&k||O?e(qt,{disabled:C||!f||O,isWaiting:C||O,attempt_number:y,onClick:()=>{var e;_("string"==typeof(e=o.id)?parseInt(e,10):e),T||z(!0)},willContinue:!T}):e(St,{onClick:()=>N(b-1),canUpdateCurrentStep:q})})]})})]})}),It={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},Et=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},Tt=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},Ht=(e,t,r=5)=>{r>0&&(Tt(e).length||Et(e).length)?setTimeout(()=>{Ht(e,t,r-1)},200):t()},Ot=(e,t)=>new Promise(r=>{(function(e,t){const r=Tt(e);t.MathJax.Hub.Queue(((e,t)=>()=>{g(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=Et(e);g(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{Ht(e,r)})}),zt=f((e,t)=>h(Ot,100,{leading:!0,trailing:!1}).bind(null,e,t));zt.cache=new w;const jt=b((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(It),e.MathJax.Hub.processSectionDelay=0,r()):(It.AuthorInit=r,e.MathJax=It)}));let Ft,Pt,Lt,Bt,Rt,Jt=e=>e;const Qt=d.div(Ft||(Ft=Jt`
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
`),ae.palette.light,"2rem","2rem",ae.palette.neutral,ae.palette.neutralDarker,ae.palette.neutralDarker,e=>!e.desktop&&p(Pt||(Pt=Jt`
    ${0}
    ${0}
  `),se(Lt||(Lt=Jt`
      display: none;
    `)),ie(Bt||(Bt=Jt`
      display: none;
    `))),e=>e.mobile&&oe(Rt||(Rt=Jt`
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
  `),ae.palette.neutral,ae.palette.light)),Vt=({icons:r})=>{var n,a;if(!r)return null;const o=Object.values(r),i=o.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),s=o.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),l=null==(n=r.topic)?void 0:n.url,c=null==(a=r.errata)?void 0:a.url;return t(Qt,E({},{mobile:i,desktop:s},{children:[l?t("a",{href:l,target:"_blank",children:[e(x,{icon:v}),e("span",{children:"View topic in textbook"})]}):null,c?t("a",{href:c,target:"_blank",children:[e(x,{icon:$}),e("span",{children:"Suggest a correction"})]}):null]}))};let Dt,Ut,Wt,Zt,Gt,Kt,Yt,Xt,er,tr=e=>e;const rr=d.div(Dt||(Dt=tr`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),ae.palette.mediumBlue,e=>!e.desktop&&p(Ut||(Ut=tr`
    ${0}
    ${0}
  `),se(Wt||(Wt=tr`
      display: none;
    `)),ie(Zt||(Zt=tr`
      display: none;
    `))),e=>!e.mobile&&oe(Gt||(Gt=tr`
    display: none;
  `))),nr=d.div(Kt||(Kt=tr`
  position: relative;
  display: flex;
`)),ar=d.div(Yt||(Yt=tr`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`),le.popover),or=r=>e(rr,E({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(nr,{children:[r.children,t(ar,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),ir=d.div(Xt||(Xt=tr`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),sr=d(x)(er||(er=tr`
  color: ${0};
  height: 1em;
`),ae.palette.darkGray),lr=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},a=[],o=t.questions.every(e=>e.answers.length>0);let i;var s,l,c;return o&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":o&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&a.push(e(or,E({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(s=r.topic.location)?void 0:s.header)||n,{children:e(sr,{icon:N})}),"topic")),r.errata&&a.push(e(or,E({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(l=r.errata.location)?void 0:l.header)||n,{children:e(sr,{icon:q})}),"errata")),r.info&&i&&a.push(e(or,E({text:i},(null==(c=r.info.location)?void 0:c.header)||n,{children:e(sr,{icon:S,height:"16px",width:"16px"})}),"type")),e(ir,{children:a})};let cr;const dr=p(cr||(cr=(e=>e)`
  &.is-selected {
    background-color: ${0};

    .step-card-footer-inner,
    .step-card-body,
    .step-card-header,
    .answer-letter-wrapper::before {
      background-color: ${0} !important;
    }
  }

  &.preview-card {
    --spacing: 0.8rem;

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

      &.has-correct-answer .answer-correct:not(.answer-selected) .answer-label .answer-letter-wrapper:before {
        color: ${0};
        border-color: ${0};
        background: ${0};
      }

      .question-feedback-content {
        font-size: 1.6rem;
      }

      .points,
      .question-feedback {
        max-width: unset;
      }
    }

    .step-card-footer, .detailed-solution {
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
`),ae.card.header.background,ae.card.header.background,ae.palette.white,ae.palette.white,ae.answer.correct,ae.answer.correct,ae.palette.neutralDarker),pr=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons","overlayChildren","previewMode"];let mr,ur,hr,br,fr,gr,wr,xr,vr,$r,kr=e=>e;const yr=d(Be)(mr||(mr=kr`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),Cr=m(ur||(ur=kr`
  :root {
    --content-text-scale: 1;
  }
`)),_r=d.div(hr||(hr=kr`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&p(br||(br=kr`
    ${0}
    ${0}
    ${0}
  `),se(fr||(fr=kr`
      ${0} {
        margin-left: 6.8rem;
      }
    `),yr),ie(gr||(gr=kr`
      ${0} {
        margin-left: 4.8rem;
      }
    `),yr),oe(wr||(wr=kr`
      ${0} {
        margin-left: 0;
      }
    `),yr)),e=>e.mobileToolbarEnabled&&p(xr||(xr=kr`
    ${0}
  `),oe(vr||(vr=kr`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),Qt,ze,Oe))),Nr=r=>t(_r,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(Vt,{icons:r.exerciseIcons}),e(yr,E({overlayChildren:r.overlayChildren},r))]}),qr=({exercise:n})=>t(r,{children:[n.context&&e(P,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(P,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),Sr=d(r=>{let{numberOfQuestions:n,questionNumber:o,step:i,exercise:s,show_all_feedback:l,scrollToQuestion:d,exerciseIcons:p,overlayChildren:m,previewMode:h=!1}=r,b=T(r,pr);const f="feedback_html"in i,g=a.useRef([]),w=a.useRef(null),x=a.useCallback(()=>{w.current&&(async(e,t=window)=>{await jt(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?zt(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(w.current)},[]);a.useEffect(()=>{const e=d&&g.current[d];e&&u(e)},[d,s]);const v=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),$=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile});return t(j.Provider,{value:x,children:[e(Cr,{}),e(Nr,E({step:i,questionNumber:o,numberOfQuestions:f?n:s.questions.length,rightHeaderChildren:p?e(lr,{exercise:s,icons:p}):null,showTotalQuestions:f,desktopToolbarEnabled:v,mobileToolbarEnabled:$},p?{exerciseIcons:p}:null,{className:b.className,overlayChildren:m,children:t("div",{ref:w,children:[e(qr,{exercise:s}),s.questions.map((e,t)=>{var r;const n=E({},f?i:b.questionStates[e.id]);return c(Mt,E({},b,E({},n,{available_points:void 0}),{ref:e=>g.current[o+t]=e,exercise_uid:s.uid,key:e.id,question:e,questionNumber:o+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:l,tableFeedbackEnabled:l&&!f,canUpdateCurrentStep:"canUpdateCurrentStep"in b?b.canUpdateCurrentStep:!(t+1===s.questions.length),previewMode:h}))})]})}))]})})($r||($r=kr`
  ${0}
`),dr),Ar=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let Mr,Ir,Er,Tr,Hr,Or,zr,jr,Fr,Pr,Lr=e=>e;const Br=d.nav(Mr||(Mr=Lr`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),oe(Ir||(Ir=Lr`
    padding: 1.6rem 0.8rem;
  `))),Rr=d.span(Er||(Er=Lr`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),Jr="box-shadow: 0px 1px 4px 0px #00000066;",Qr=d.button(jr||(jr=Lr`
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
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",ae.palette.neutralDarker,e=>e.isActive?p(Fr||(Fr=Lr`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),Jr):null,e=>(e=>{switch(e){case"isStatus":return p(Tr||(Tr=Lr`
        background-color: ${0};
      `),ae.palette.neutralBright);case"isCorrect":return p(Hr||(Hr=Lr`
        color: ${0};
        background-color: #E8F4D8;
      `),ae.answer.correct);case"isIncorrect":return p(Or||(Or=Lr`
        color: ${0};
        background-color: #F8E8EA;
      `),ae.answer.incorrect);default:return p(zr||(zr=Lr`
        background-color: ${0};
      `),ae.palette.neutralBright)}})(e.variant),Jr),Vr=d(x)(Pr||(Pr=Lr`
  background: ${0};
  color: #fff;
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  padding: 0.1rem;
  font-size: 1.2rem;
  border-radius: 50%;
`),e=>e.color),Dr=({variant:t})=>{if(!t||"isCorrect"!==t&&"isIncorrect"!==t&&"isIncomplete"!==t)return null;const r={isCorrect:{icon:A,color:ae.answer.correct,label:"Correct"},isIncorrect:{icon:M,color:ae.answer.incorrect,label:"Incorrect"},isIncomplete:{icon:k,color:ae.answer.neutral,label:"Incomplete"}}[t];return e(Vr,{icon:r.icon,color:r.color,height:"16px",width:"16px","aria-label":r.label,"aria-hidden":void 0})},Ur=({index:r,isActive:n,step:a,goToStep:o})=>t(Rr,{children:[e(Qr,{variant:a.variant,isActive:n,onClick:()=>o(r,a),"aria-current":n?"location":"false","aria-label":"isStatus"===a.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===a.variant?e(Ar,{}):r+1}),e(Dr,{variant:a.variant})]}),Wr=({steps:t,activeIndex:r,goToStep:n})=>e(Br,{"aria-label":"Breadcrumbs",children:t.map((t,a)=>e(Ur,{index:a,isActive:a===r,step:t,goToStep:n},a))});let Zr;const Gr=d.div(Zr||(Zr=(e=>e)`
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
`),ae.palette.light),Kr=()=>e(Gr,{children:e(I,{uniqueKey:"OSLoader"})});let Yr,Xr,en,tn=e=>e;const rn=d.div(Yr||(Yr=tn`
  display: flex;
  width: fit-content;
`)),nn=d.button(Xr||(Xr=tn`
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
`),ae.palette.mediumBlue,ae.palette.orange,ae.palette.neutralDarker),an=d(x)(en||(en=tn`
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
`),ae.palette.white,ae.palette.mediumBlue,ae.palette.orange,ae.palette.neutralDarker),on=({buttonVariant:r,onIncludeHandler:n,onRemoveHandler:o,onClickDetails:i})=>{const s=a.useMemo(()=>"include"===r?y:C,[r]);return t(rn,{children:[t(nn,{className:r,onClick:()=>(e=>{switch(e){case"include":n();break;case"remove":o()}})(r),"aria-label":r,children:[e(an,{className:r,icon:s,"aria-label":r+" question",border:!0,size:"lg"}),e("span",{children:(l=r,l.charAt(0).toUpperCase()+l.slice(1)+" question")})]}),t(nn,{className:"details","aria-label":"details",onClick:i,children:[e(an,{className:"details",icon:_,border:!0,size:"lg"}),e("span",{children:"Details"})]})]});var l},sn=({exercise:t,selected:r,showAllFeedback:n=!1,showCorrectAnswer:a=!1,overlayChildren:o})=>e(Sr,E({exercise:n?t:(e=>(e.questions.map(e=>e.answers.map(e=>{e.feedback_html="",e.correctness=a?e.correctness:void 0})),e))(t),className:r?"preview-card is-selected":"preview-card",previewMode:!0,overlayChildren:o},(e=>{const t=(r=e.questions,r.map(e=>{var t;return{id:e.id,correct_answer_id:(null==(t=e.answers.find(e=>"1.0"===e.correctness))?void 0:t.id)||""}})).reduce((e,t)=>{const{id:r,correct_answer_id:n}=t;return E({},e,{[r]:{correct_answer_id:n,is_completed:a}})},{});var r;return{canAnswer:!0,needsSaved:!0,hasMultipleAttempts:!1,onAnswerChange:()=>{},onAnswerSave:()=>{},onNextStep:()=>{},apiIsPending:!1,canUpdateCurrentStep:!1,step:{id:1,uid:e.uid,available_points:"1.0"},questionNumber:e.number,numberOfQuestions:e.questions.length,questionStates:t,show_all_feedback:n}})(t)));export{fe as Answer,we as AnswersTable,et as CompletionStatus,Sr as Exercise,sn as ExercisePreview,Vt as ExerciseToolbar,Ct as FreeResponseInput,kt as FreeResponseTextArea,on as IncludeRemoveQuestion,Oe as InnerStepCard,Kr as Loader,ze as OuterStepCard,Wr as ProgressBar,Ur as ProgressBarItem,nt as Question,at as QuestionHtml,Le as StepCard,Qr as StyledItem,Pe as StyledOverlay,Qt as StyledToolbar,Be as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
