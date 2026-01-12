import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import o,{useRef as i,useEffect as a,useState as l,useCallback as s,createElement as d}from"react";import{createPortal as c}from"react-dom";import u,{css as p,createGlobalStyle as m}from"styled-components";import h from"scroll-to-element";import{debounce as b,once as g}from"lodash";import{memoize as w,isEmpty as f}from"lodash/fp.js";import x from"weak-map";import{FontAwesomeIcon as v}from"@fortawesome/react-fontawesome";import{faBookOpen as k,faTriangleExclamation as y,faQuestion as $,faP as C,faPlus as S,faMinus as _,faEllipsisH as q}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as N}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as A}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as M}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as E}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as I}from"@fortawesome/free-solid-svg-icons/faXmark";import{faCircle as z}from"@fortawesome/free-solid-svg-icons/faCircle";import{BulletList as H}from"react-content-loader";function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}const L="ABCDEFGHIJKLMNOPQRSTUVWXYZ",F=(e,t)=>e.id===t;function j(e){const t=e.trim().match(/\b[-?(\w+)?]+\b/gi);return t?t.length:0}const P=o.createContext(()=>{throw new Error("context not initialized")});let R,D,B,Q,V,J=e=>e;const U=u.div(R||(R=J`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
`)),W=u.div(D||(D=J`
  background: white;
  max-width: 100vw;
  max-height: calc(100vh - ${0}rem);
  overflow: auto;

  > img {
    ${0}
    display: block;
  }
`),10.4,""),G=u.button(B||(B=J`
  position: absolute;
  top: -${0}rem;
  right: ${0}rem;
  z-index: 10;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: ${0}rem;
  height: ${0}rem;
`),4.7,.5,4.2,4.2),Z=u.div(Q||(Q=J`
  position: relative;
  pointer-events: auto;
`)),Y=u.div(V||(V=J`
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`)),K=()=>t("svg",{width:"42",height:"42",viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg",children:[e("rect",{x:"1",y:"1",width:"40",height:"40",rx:"20",stroke:"white",fill:"none"}),e("line",{x1:"16",y1:"16",x2:"26",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),e("line",{x1:"26",y1:"16",x2:"16",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]}),X=({isOpen:r,onClose:n,children:o})=>{const l=i(null);return a(()=>{if(!r||!l.current)return;const e=["button:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),t=l.current.querySelectorAll(e),n=t[0],o=t[t.length-1];null==n||n.focus();const i=e=>{if("Tab"!==e.key)return;const t=document.activeElement,r=e.shiftKey;r&&t===n?(e.preventDefault(),null==o||o.focus()):r||t!==o||(e.preventDefault(),null==n||n.focus())};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[r]),r?e(U,{onClick:n,children:e(Y,{"aria-modal":"true",role:"dialog",children:t(Z,{ref:l,onClick:e=>e.stopPropagation(),tabIndex:-1,children:[e(G,{onClick:n,"aria-label":"Close media preview",children:e(K,{})}),e(W,{children:o})]})})}):null},ee=["html","component","block"],te=n=>{let{html:l,component:s,block:d=!1}=n,u=T(n,ee);const p=o.useContext(P),m=i(null),h=d?"div":"span",b=function(){const{open:t,MediaModalPortal:r}=function(){let t=null;return{open:e=>{null==t||t(e)},MediaModalPortal:()=>{const[r,n]=o.useState(!1),[i,l]=o.useState(null);return a(()=>(t=e=>{l(e),n(!0)},()=>{t=null}),[]),a(()=>{if(!r||"undefined"==typeof document)return;const e=e=>{"Escape"!==e.key&&"Esc"!==e.key||n(!1)},t=document;return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}},[r]),c(e(X,{isOpen:r,onClose:()=>n(!1),children:i}),document.body)}}}(),{mount:n,unmount:i}=function(t){let r=null;const n=function(t){return r=>{const n=r.target.closest("button.image-button-wrapper");if(!n)return;if("keydown"===r.type){const e=r.key;if("Enter"!==e&&" "!==e)return;r.preventDefault()}const o=n.querySelector("img");o&&t(e("img",{tabIndex:0,src:o.src,alt:o.alt||"",width:o.width,height:o.height}))}}(t),o=()=>{r&&(r.removeEventListener("click",n),r.removeEventListener("keydown",n))};return{mount:e=>{r!==e&&(o(),r=e),r&&(r.addEventListener("click",n),r.addEventListener("keydown",n))},unmount:()=>{o(),r=null}}}(t);return{open:t,MediaModalPortal:r,mount:n,unmount:i}}(),g=b.MediaModalPortal;return a(()=>{const e=m.current;if(e)return p(),e.querySelectorAll("img").forEach(e=>{var t;if(e.closest("button"))return;const r=document.createElement("button");r.type="button";const n=e.getAttribute("alt");r.setAttribute("aria-label",n?`Click to enlarge image of ${n}`:"Click to enlarge this image"),r.classList.add("image-button-wrapper"),null==(t=e.parentElement)||t.insertBefore(r,e),r.appendChild(e)}),b.mount(e),()=>{b.unmount()}},[d,b,p]),void 0!==s?o.cloneElement(s,O({html:l},u)):t(r,{children:[e(h,O({ref:m,dangerouslySetInnerHTML:{__html:l}},u)),e(g,{})]})},re=["id"],ne=t=>e("aside",{children:e(te,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),oe=r=>{let{id:o}=r,i=T(r,re);const a=n("question-feedback",i.position||"bottom");return t("aside",{id:o,className:a,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(ne,O({},i,{children:i.children}))]})};let ie,ae,le,se,de,ce,ue,pe,me,he,be,ge,we,fe=e=>e;const xe={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C",yellow:"#FEDE9F"},ve={palette:xe,answer:{neutral:xe.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032",partialCredit:"#976502",neutralDark:"#5f6163"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:xe.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:xe.neutralDarker,background:xe.neutralLighter}},ke=(...e)=>p(ie||(ie=fe`@media(max-width: ${0}px) { ${0} }`),600,p(...e)),ye=(...e)=>p(ae||(ae=fe`@media(max-width: ${0}px) { ${0} }`),999,p(...e)),$e=(...e)=>p(le||(le=fe`@media(min-width: ${0}px) { ${0} }`),1e3,p(...e)),Ce={answer:()=>p(de||(de=fe`
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
  `),xe.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",ve.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",ve.palette.white),answerColor:(e,t=!1)=>p(ce||(ce=fe`
    .answer-letter-wrapper::before {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>Ce.answerColor(ve.answer.checked,!0),answerCorrect:e=>Ce.answerColor(ve.answer.correct,e),answerIncorrect:e=>Ce.answerColor(ve.answer.incorrect,e),answerHover:()=>p(ue||(ue=fe`
    ${0};
    font-weight: bold;
  `),Ce.answerColor(ve.answer.hover)),answerCorrectAnswer:()=>Ce.answerColor(ve.answer.correct,!1),resetText:()=>p(pe||(pe=fe`
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
  `)),stepCardPadding:()=>p(me||(me=fe`
    padding: 4.8rem 14rem 0;

    ${0}

    ${0}
  `),ye(he||(he=fe`
      padding: ${0} ${0};
    `),"24px","24px"),ke(be||(be=fe`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>p(ge||(ge=fe`
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
  `),Ce.resetText(),"1px",ve.popover.borderColor,ve.palette.white,"325px","8px","1rem",ve.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",ve.popover.borderColor,"1px",ve.palette.white,"9px","1px","9px","1rem","0.8rem"),visuallyHidden:()=>p(we||(we=fe`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `))};let Se;const _e=u.div(Se||(Se=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`),e=>e.state?ve.answer.correct:ve.answer.incorrect),qe=({hasCorrectAnswer:t,isCorrect:r,isIncorrect:n,isSelected:o})=>r||n||o&&t?e(_e,{state:!!r,children:e("span",{children:(r?"Correct":"Incorrect")+" Answer"})}):null,Ne=r=>{const{answer:{content_html:n,feedback_html:o},contentRenderer:i,labelAnswers:a,show_all_feedback:l,tableFeedbackEnabled:s,hasCorrectAnswer:d,isCorrect:c,isIncorrect:u,isSelected:p}=r;return t("div",{className:"answer-answer",role:"status","aria-live":"polite","aria-atomic":"true",children:[!1!==a&&e(qe,{hasCorrectAnswer:d,isCorrect:c,isIncorrect:u,isSelected:p}),e(te,{className:"answer-content",component:i,html:n}),l&&o&&!s&&e(ne,{contentRenderer:i,children:o},"question-mc-feedback")]})},Ae=r=>{const{answer:o,answered_count:i,isCorrect:a,contentRenderer:l,iter:s,show_all_feedback:d,tableFeedbackEnabled:c}=r,u=o.selected_count&&i?Math.round(o.selected_count/i*100):0;return t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:a,red:!a}),children:[e("span",{className:"selected-count","data-percent":`${u}`,children:o.selected_count}),e("span",{className:n("letter",{green:a,red:!a}),children:L[s]})]}),e(Ne,{answer:o,contentRenderer:l,show_all_feedback:d,tableFeedbackEnabled:c})]})},Me=n=>{const{type:o,iter:i,answer:a,disabled:l,onKeyPress:s,qid:d,contentRenderer:c,correctIncorrectIcon:u,feedbackId:p,isSelected:m,isCorrect:h,isIncorrect:b,hasCorrectAnswer:g,show_all_feedback:w,tableFeedbackEnabled:f,labelAnswers:x=!0}=n,v=`${m?"Selected ":""}Choice ${L[i]}:`;let k;return g||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:k}=n),t(r,{children:["teacher-preview"===o&&e("div",{className:"correct-incorrect",children:h&&u}),e("input",{type:"radio",className:"answer-input-box",checked:m,id:`${d}-option-${i}`,name:`${d}-options`,onChange:()=>k&&k(a),disabled:l||!k,"aria-details":p}),t("label",{onKeyPress:s,htmlFor:`${d}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper","aria-label":v,"data-answer-choice":L[i],"data-test-id":`answer-choice-${L[i]}`}),e(Ne,{answer:a,contentRenderer:c,labelAnswers:x,show_all_feedback:w,tableFeedbackEnabled:f,hasCorrectAnswer:g,isCorrect:h,isIncorrect:b,isSelected:m})]})]})},Ee=t=>e("teacher-review"===t.type?Ae:Me,O({},t)),Ie=t=>{const{type:r,answer:o,disabled:i,answerId:a,correctAnswerId:l,incorrectAnswerId:s}=t,d=((e,t)=>e.id==t)(o,a),c=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(o,l),u=F(o,s),p=d||void 0===a&&(!s&&c||u),m=n("answers-answer",{disabled:i,"answer-selected":p,"answer-correct":c&&"student-mpp"!==r,"answer-incorrect":s&&F(o,s)});return e("div",{className:"openstax-answer",children:e("section",{className:m,children:e(Ee,O({},t,{isCorrect:c,isSelected:p,isIncorrect:u}))})})};Ie.displayName="OSAnswer";const ze="student",He=r=>{let n=0;const{question:o,hideAnswers:i,type:a=ze,answered_count:l,choicesEnabled:s,correct_answer_id:d,incorrectAnswerId:c,answer_id:u,feedback_html:p,correct_answer_feedback_html:m,previewMode:h,labelAnswers:b,show_all_feedback:g=!1,tableFeedbackEnabled:w,hasCorrectAnswer:f,onChangeAnswer:x,onKeyPress:v,answerIdOrder:k,instructions:y}=r;if(i)return null;const{id:$}=o,C=[],S={qid:$||"auto-"+n++,answerId:u,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:f,onChangeAnswer:x,type:a,answered_count:l,disabled:h||!s,labelAnswers:b,show_all_feedback:g,tableFeedbackEnabled:w,onKeyPress:v},_=(k?(e=>{const{answers:t}=o;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(k):o.answers).map((t,r)=>{const n={answer:O({},t,{question_id:"string"==typeof o.id?parseInt(o.id,10):o.id}),iter:r,key:`${S.qid}-option-${r}`},i=Object.assign({},n,S);let a,l;return g&&t.feedback_html&&w?a=t.feedback_html:t.id===c&&p?a=p:t.id===d&&m&&(a=m),a&&(l=`feedback-${S.qid}-${r}`,C.push({index:r,html:a,id:l})),e(Ie,O({feedbackId:l},i))});return C.forEach((t,n)=>{const o=t.index+n+1;_.splice(o,0,e(oe,{id:t.id,contentRenderer:r.contentRenderer,children:t.html},o))}),t("div",O({},h?{}:{role:"radiogroup","aria-label":"Answer choices"},{className:"answers-table",children:[y,_]}))},Oe=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren","overlayChildren","showScoring","totalScoring","isGraded"],Te=["step","questionNumber","numberOfQuestions","children","className","overlayChildren"];let Le,Fe,je,Pe,Re,De,Be,Qe,Ve,Je,Ue,We,Ge,Ze,Ye=e=>e;const Ke=u.div(Le||(Le=Ye`
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
`),ve.palette.pale,$e(Fe||(Fe=Ye`
    max-width: 1000px;
  `))),Xe=u.div(je||(je=Ye`
  padding: ${0};

  ${0}
`),"2rem",ke(Pe||(Pe=Ye`
    padding: 0;
  `))),et=u.div(Re||(Re=Ye`
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
`),ve.card.header.background,ve.palette.gray,$e(De||(De=Ye`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
  `)),ye(Be||(Be=Ye`
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
  `),"24px","24px"),ke(Qe||(Qe=Ye`
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px")),tt=u.div(Ve||(Ve=Ye`
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
`),ve.palette.darkRed,ve.palette.white);et.displayName="StepCardHeader";const rt=u.div(Je||(Je=Ye`
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
`),Ce.stepCardPadding(),ve.card.body.background,((...e)=>p(se||(se=fe`@media(max-width: ${0}px) { ${0} }`),600,p(...e)))(Ue||(Ue=Ye`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),$e(We||(We=Ye`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),ke(Ge||(Ge=Ye`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),nt=u.div(Ze||(Ze=Ye`
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
`)),ot=r=>{var n,o;let{questionNumber:d,numberOfQuestions:c,showTotalQuestions:u,stepType:p,isHomework:m,availablePoints:h,unpadded:b,className:g,children:w,questionId:f,multipartBadge:x,leftHeaderChildren:v,rightHeaderChildren:k,headerTitleChildren:y,overlayChildren:$,showScoring:C,totalScoring:S,isGraded:_}=r,q=T(r,Oe);const N=i(null),[A,M]=l(!1),E=c>1?`Questions ${d} - ${d+c-1}`:`Question ${d}`,I=s(()=>{M(!0)},[]),z=s(()=>{var e;Array.from((null==(e=document.getElementById("step-card"))?void 0:e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||[]).forEach(e=>{e.setAttribute("tabindex","-1")})},[]);return a(()=>{const e=N.current;return e&&$&&(e.addEventListener("focus",I),z()),()=>{null==e||e.removeEventListener("focus",I)}},[$,N,I,z]),t(Xe,O({},q,{children:[x,e(Ke,{className:g,children:t("div",O({ref:N},$?{onMouseOver:()=>M(!0),onMouseLeave:()=>M(!1),onBlur:e=>{N.current&&!N.current.contains(e.relatedTarget)&&M(!1)},tabIndex:0}:{},{children:[$&&A&&e(nt,{id:"overlay-element",children:$}),t("div",{id:"step-card",children:[d&&m&&"exercise"===p&&t(et,{className:"step-card-header",children:[t("div",{children:[v,t("h2",{className:"question-info",children:[y,e("span",{children:E}),u?t("span",{className:"num-questions",children:[" / ",c]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",f]})]})]}),C&&e("div",{className:"scoring",children:_?t("span",{children:[null==S||null==(n=S.score)?void 0:n.toFixed(1),"/",null==S||null==(o=S.maxScore)?void 0:o.toFixed(1),null!=S&&S.maxScore&&S.maxScore>1.1?" points":" point"]}):e(tt,{children:e("span",{children:"ungraded"})})}),h||k?t("div",{children:[h&&t("div",{className:"points",children:[h," Points"]}),k]}):null]}),e(rt,{unpadded:b,children:w})]})]}))})]}))};ot.displayName="OSStepCard";const it=t=>{let{step:r,questionNumber:o,numberOfQuestions:i,children:a,className:l,overlayChildren:s}=t,d=T(t,Te);return e(ot,O({},d,{unpadded:!0,questionNumber:o,numberOfQuestions:i,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,l),questionId:r.uid,overlayChildren:s,children:a}))};it.displayName="OSTaskStepCard";const at=["disabled","isWaiting","waitingText","children"];let lt;const st=u.button(lt||(lt=(e=>e)`
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
`),ve.button.background,ve.palette.white,ve.button.backgroundHover,ve.button.backgroundActive),dt=t=>{const{disabled:r,isWaiting:n,waitingText:o,children:i}=t,a=T(t,at);return e(st,O({},a,{disabled:n||r,children:n&&o||i}))};let ct,ut,pt,mt,ht,bt,gt,wt=e=>e;const ft=m(ct||(ct=wt`
  :root {
    --content-text-scale: 1;
  }
`)),xt=u(Ke)(ut||(ut=wt`
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
`)),vt=u.h2(pt||(pt=wt`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`)),kt=u.div(mt||(mt=wt`
  display: flex;
  margin: 0;
  gap: 1rem;

  button {
    height: 48px;
  }
`)),yt=u.div(ht||(ht=wt`
  display: flex;
  margin: 0;
  gap: 1rem;
`)),$t=u(dt)(bt||(bt=wt`
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
`),ve.palette.white,ve.palette.black,ve.palette.pale,ve.palette.neutralBright,ve.palette.black,ve.palette.pale,ve.palette.neutralLight,ve.palette.black,ve.palette.pale),Ct=u(({numberOfQuestions:n,numberCompleted:o,handleContinue:i,handleNext:a,className:l,score:s,handleRetry:d,isRetrying:c})=>{var u,p;const m=n===o,h=o>0,b=m||0===o&&d||h&&d?"Next":h?"Continue":"Start",g=m?"Retry Quiz":"Resume Quiz",w=m?d:i,f=m||d?a:i;return t(r,{children:[e(ft,{}),t(xt,{className:l,children:[e(vt,{children:m?"You are done.":h?"Quiz is partially complete.":"No questions have been answered."}),d?t("div",{children:[e("p",{children:m?"Attempts for this quiz are unlimited. Your highest score will be saved.":"You are in the middle of a quiz attempt. Attempts for this quiz are unlimited. Your highest score will be saved."}),e(yt,{children:t("p",{children:[e("b",{children:"Current Score:"})," ",null!=(u=null==s?void 0:s.current)?u:"Score unavailable"," | ",e("b",{children:"Saved Score:"})," ",null!=(p=null==s?void 0:s.saved)?p:"Score unavailable"]})})]}):e("p",{children:m?"Great job answering all the questions.":h?`You've completed ${o} of ${n} questions.`:"Begin working on the quiz."}),t(kt,{children:[d?e($t,{"data-test-id":"retry-resume-btn",onClick:w,disabled:c,children:g}):null,e(dt,{"data-test-id":`${b.split(" ")[0].toLowerCase()}-btn`,onClick:f,children:b})]})]})]})})(gt||(gt=wt``));let St,_t,qt=e=>e;const Nt=u.div(St||(St=qt`
  display: flex;
  width: 100%;
  gap: 2rem;

  .step-card-body,
  .right-side-slot {
    flex: 1 1 auto;
    min-width: 0;
  }
`)),At=u.div(_t||(_t=qt`
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
`),Ce.stepCardPadding(),ve.palette.pale,ve.palette.neutral,ve.palette.neutralLightBlue,ve.palette.neutralLightest,Ce.answer(),"1rem","1rem","0.1s ease-in-out",Ce.answerHover(),Ce.visuallyHidden(),Ce.answerChecked(),ve.answer.checked,Ce.answerChecked(),Ce.answerIncorrect(!0),Ce.answerCorrect(!0),Ce.answerCorrect(!1),Ce.answerIncorrect(),Ce.answerIncorrect(!0),Ce.popover(),"370px","0.9rem","1.1rem"),Mt=o.forwardRef((r,o)=>{let i,a;const{question:l,correct_answer_id:s,incorrectAnswerId:d,exercise_uid:c,className:u,questionNumber:p,context:m,task:h,hidePreambles:b,rightSideSlot:g}=r,{stem_html:w,collaborator_solutions:f=[],formats:x,stimulus_html:v}=l,k=!!s,y=n("openstax-question",u,{"has-correct-answer":k&&!((null!=h?h.is_deleted:void 0)&&"homework"===(null!=h?h.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(i=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=l;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(a=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(te,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),e(At,{ref:o,className:y,"data-question-number":p,"data-test-id":"question",children:t(Nt,{children:[t("div",{children:[e(Et,{type:"context",html:m,hidden:b}),e(Et,{type:"stimulus",html:v,hidden:b}),e(Et,{type:"stem",html:w,hidden:b,questionNumber:p}),r.children,e(He,O({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:k})),a,r.displayFormats?e(It,{formats:x}):void 0,i]}),g&&e("div",{className:"right-side-slot",children:g})]})})}),Et=t=>{const{html:r="",type:n,hidden:o,questionNumber:i}=t;return!0!==o&&r.length>0?e(te,{html:r,"data-question-number":i,className:`question-${n}`,block:!0}):null},It=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let zt,Ht,Ot,Tt=e=>e;const Lt=u.div(zt||(zt=Tt`
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
`),Ce.stepCardPadding(),ve.card.body.background,ve.palette.pale,ke(Ht||(Ht=Tt`
            flex-wrap: wrap;
        `)),$e(Ot||(Ot=Tt`
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
    `)));let Ft,jt,Pt,Rt,Dt,Bt,Qt=e=>e;const Vt=p(Ft||(Ft=Qt`
  background-color: #f5e9ea;
`)),Jt=u.div(jt||(jt=Qt`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
    padding-bottom: 1rem;
  }
`),Ce.stepCardPadding()),Ut=u.div(Pt||(Pt=Qt`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`)),Wt=u.div(Rt||(Rt=Qt`
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
`),e=>e.hasChildren?"space-between":"flex-end",ve.palette.danger,ve.palette.neutralThin),Gt=u.textarea(Dt||(Dt=Qt`
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
`),ve.palette.neutral,ve.palette.neutralDark,e=>e.isOverWordLimit&&Vt,e=>e.isOverWordLimit&&p(Bt||(Bt=Qt`
    border: 2px solid ${0};
  `),ve.palette.danger),e=>e.readOnly&&ve.palette.neutralCool);Gt.displayName="OSFreeResponseTextArea";const Zt=t=>e(dt,O({},t,{children:"Cancel"})),Yt=r=>{const{availablePoints:n,cancelHandler:o,defaultValue:i,infoRowChildren:a,isSubmitDisabled:l,question:s,questionNumber:d,saveHandler:c,submitBtnLabel:u,textHasChanged:p,wordLimit:m}=r,h=j(i)>m,b={};return d&&(b["data-question-number"]=d),t(Jt,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(Ut,O({},b,{children:s.stem_html&&e(Et,{type:"stem",html:s.stem_html,hidden:!1})})),e(Gt,O({},r,{isOverWordLimit:h,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"})),t(Wt,{hasChildren:!!a,children:[a,t("div",{children:[t("span",{children:[j(i)," words"]}),h&&t("span",{className:"word-limit-error-info",children:["Maximum ",m," words"]})]})]})]}),t(Lt,{children:[n?e("div",{className:"points",role:"status",children:t("strong",{children:["Points: ",n]})}):null,t("div",{className:"controls",children:[e(Zt,{disabled:!p,onClick:o}),e(dt,{"data-test-id":"submit-answer-btn",disabled:l||h,onClick:c,children:u})]})]})]})};Yt.displayName="OSFreeResponse";let Kt,Xt,er,tr,rr=e=>e;const nr="\n  padding: 1rem 2.5rem;\n  margin: 1rem 0 1rem 1rem;\n",or=u.div(Kt||(Kt=rr`
  ${0}
  border-left: ${0} solid ${0};
  font-style: italic;
`),nr,"1rem",ve.palette.neutralLighter),ir=u.div(Xt||(Xt=rr`
  ${0}
  position: relative;
  width: 100%;
`),nr),ar=u.div(er||(er=rr`
  max-height: ${0};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: 1.4rem;

  ${0}
`),({expanded:e})=>e?"none":"16.8rem",({expanded:e,isOverflowing:t})=>!e&&t?"\n    display: -webkit-box;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  ":""),lr=u.button(tr||(tr=rr`
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
`),ve.palette.blue),sr=({children:t,previewMode:r})=>e(r?ir:or,{children:t}),dr=({free_response:r,previewMode:n})=>{const[i,a]=o.useState(!1),[l,s]=o.useState(!1),d=o.useRef(null);return o.useLayoutEffect(()=>{n&&d.current&&s(!i&&d.current.scrollHeight>168)},[r,n,i]),r?t(sr,{previewMode:n,children:[n?e(ar,{ref:d,expanded:i,isOverflowing:l,children:r}):r,n&&(l||i)&&e(lr,{onClick:()=>a(!i),children:i?"show less":"read more"})]}):null},cr=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),ur=()=>e("div",{children:"Unlimited quiz attempts left"}),pr=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,mr=t=>e(dt,O({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),hr=t=>e(dt,O({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),br=o.forwardRef((r,n)=>{const{question:i,task:a,answer_id_order:l,onAnswerChange:s,feedback_html:d,correct_answer_feedback_html:c,is_completed:u,correct_answer_id:p,incorrectAnswerId:m,choicesEnabled:h,questionNumber:b,answer_id:g,hasMultipleAttempts:w,hasUnlimitedAttempts:f,attempts_remaining:x,published_comments:v,detailedSolution:k,canAnswer:y,needsSaved:$,attempt_number:C,apiIsPending:S,onAnswerSave:_,onNextStep:q,canUpdateCurrentStep:N,displaySolution:A,available_points:M,free_response:E,labelAnswers:I,show_all_feedback:z,tableFeedbackEnabled:H,hasFeedback:O,previewMode:T}=r,[L,F]=o.useState(!1);return o.useEffect(()=>{L&&u&&(q(b-1),F(!1))},[q,b,L,u]),t("div",{"data-test-id":"student-exercise-question",children:[e(Mt,{ref:n,task:a,question:i,answerIdOrder:l,choicesEnabled:h,answer_id:g,questionNumber:b,onChange:s,feedback_html:d,correct_answer_feedback_html:c,correct_answer_id:u?p:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:A,labelAnswers:I,show_all_feedback:z,tableFeedbackEnabled:H,previewMode:T,rightSideSlot:r.rightSideSlot,children:e(dr,{free_response:E,previewMode:T})}),T&&k||!T?e(Lt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[M?t("strong",{children:["Points: ",M]}):null,t("span",{className:"attempts-left",children:[w&&x>0&&e(cr,{count:x}),f?e(ur,{}):null]}),e(pr,{published_comments:v}),k&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(te,{html:k})]})]}),e("div",{className:"controls",children:y&&$||L?e(mr,{disabled:S||!g||L,isWaiting:S||L,attempt_number:C,onClick:()=>{var e;_("string"==typeof(e=i.id)?parseInt(e,10):e),O||F(!0)},willContinue:!O}):e(hr,{onClick:()=>q(b-1),canUpdateCurrentStep:N})})]})}):null]})}),gr={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},wr=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},fr=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},xr=(e,t,r=5)=>{r>0&&(fr(e).length||wr(e).length)?setTimeout(()=>{xr(e,t,r-1)},200):t()},vr=(e,t)=>new Promise(r=>{(function(e,t){const r=fr(e);t.MathJax.Hub.Queue(((e,t)=>()=>{f(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=wr(e);f(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{xr(e,r)})}),kr=w((e,t)=>b(vr,100,{leading:!0,trailing:!1}).bind(null,e,t));kr.cache=new x;const yr=g((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(gr),e.MathJax.Hub.processSectionDelay=0,r()):(gr.AuthorInit=r,e.MathJax=gr)}));let $r,Cr,Sr,_r,qr,Nr=e=>e;const Ar=u.div($r||($r=Nr`
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
`),ve.palette.light,"2rem","2rem",ve.palette.neutral,ve.palette.neutralDarker,ve.palette.neutralDarker,e=>!e.desktop&&p(Cr||(Cr=Nr`
    ${0}
    ${0}
  `),$e(Sr||(Sr=Nr`
      display: none;
    `)),ye(_r||(_r=Nr`
      display: none;
    `))),e=>e.mobile&&ke(qr||(qr=Nr`
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
  `),ve.palette.neutral,ve.palette.light)),Mr=({icons:r})=>{var n,o;if(!r)return null;const i=Object.values(r),a=i.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),l=i.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),s=null==(n=r.topic)?void 0:n.url,d=null==(o=r.errata)?void 0:o.url;return t(Ar,O({},{mobile:a,desktop:l},{children:[s?t("a",{href:s,target:"_blank",children:[e(v,{icon:k}),e("span",{children:"View topic in textbook"})]}):null,d?t("a",{href:d,target:"_blank",children:[e(v,{icon:y}),e("span",{children:"Suggest a correction"})]}):null]}))};let Er,Ir,zr,Hr,Or,Tr,Lr,Fr,jr,Pr=e=>e;const Rr=u.div(Er||(Er=Pr`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),ve.palette.mediumBlue,e=>!e.desktop&&p(Ir||(Ir=Pr`
    ${0}
    ${0}
  `),$e(zr||(zr=Pr`
      display: none;
    `)),ye(Hr||(Hr=Pr`
      display: none;
    `))),e=>!e.mobile&&ke(Or||(Or=Pr`
    display: none;
  `))),Dr=u.div(Tr||(Tr=Pr`
  position: relative;
  display: flex;
`)),Br=u.div(Lr||(Lr=Pr`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`),Ce.popover),Qr=r=>e(Rr,O({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(Dr,{children:[r.children,t(Br,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),Vr=u.div(Fr||(Fr=Pr`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),Jr=u(v)(jr||(jr=Pr`
  color: ${0};
  height: 1em;
`),ve.palette.darkGray),Ur=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},o=[],i=t.questions.every(e=>e.answers.length>0);let a;var l,s,d;return i&&t.questions.find(e=>e.formats.includes("free-response"))?a="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":i&&(a="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&o.push(e(Qr,O({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(l=r.topic.location)?void 0:l.header)||n,{children:e(Jr,{icon:N})}),"topic")),r.errata&&o.push(e(Qr,O({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(s=r.errata.location)?void 0:s.header)||n,{children:e(Jr,{icon:A})}),"errata")),r.info&&a&&o.push(e(Qr,O({text:a},(null==(d=r.info.location)?void 0:d.header)||n,{children:e(Jr,{icon:M,height:"16px",width:"16px"})}),"type")),e(Vr,{children:o})};let Wr;const Gr=p(Wr||(Wr=(e=>e)`
  .image-button-wrapper {
    /* Remove default button styles for media modal img wrapper */
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    display: inline-block;
    cursor: pointer;
  }

  .image-button-wrapper:focus {
    outline: 1px solid Highlight;
    outline: 1px solid -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  .image-button-wrapper img {
    display: block;
    max-width: 100%;
    height: auto;
  }
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
`),ve.card.header.background,ve.card.header.background,ve.palette.white,ve.palette.neutralDarker),Zr=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons","overlayChildren","labelAnswers","previewMode","showScoring","rightSideSlot"];let Yr,Kr,Xr,en,tn,rn,nn,on,an,ln,sn=e=>e;const dn=u(it)(Yr||(Yr=sn`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),cn=m(Kr||(Kr=sn`
  :root {
    --content-text-scale: 1;
  }
`)),un=u.div(Xr||(Xr=sn`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&p(en||(en=sn`
    ${0}
    ${0}
    ${0}
  `),$e(tn||(tn=sn`
      ${0} {
        margin-left: 6.8rem;
      }
    `),dn),ye(rn||(rn=sn`
      ${0} {
        margin-left: 4.8rem;
      }
    `),dn),ke(nn||(nn=sn`
      ${0} {
        margin-left: 0;
      }
    `),dn)),e=>e.mobileToolbarEnabled&&p(on||(on=sn`
    ${0}
  `),ke(an||(an=sn`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),Ar,Xe,Ke))),pn=r=>t(un,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(Mr,{icons:r.exerciseIcons}),e(dn,O({overlayChildren:r.overlayChildren},r))]}),mn=({exercise:n})=>t(r,{children:[n.context&&e(te,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(te,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),hn=u(r=>{let{numberOfQuestions:n,questionNumber:i,step:a,exercise:l,show_all_feedback:s,scrollToQuestion:c,exerciseIcons:u,overlayChildren:p,labelAnswers:m=!0,previewMode:b=!1,showScoring:g=!1,rightSideSlot:w}=r,f=T(r,Zr);const x="feedback_html"in a,v=o.useRef([]),k=o.useRef(null),[y,$]=o.useState("questionStates"in f?f.questionStates:{}),C=o.useCallback(()=>{k.current&&(async(e,t=window)=>{await yr(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?kr(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(k.current)},[]);o.useEffect(()=>{const e=c&&v.current[c];e&&h(e)},[c,l]);const S=Object.values(u||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),_=Object.values(u||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile}),{totalScoring:q,isGraded:N}=o.useMemo(()=>{const e={score:0,maxScore:0};let t=!0;for(const n of l.questions){var r;const o=null==(r=y[n.id])?void 0:r.scoring;if(null==o||!o.score||null==o||!o.maxScore){t=!1;break}e.score+=o.score,e.maxScore+=o.maxScore}return{totalScoring:e,isGraded:t}},[l.questions,y]);return t(P.Provider,{value:C,children:[e(cn,{}),e(pn,O({step:a,questionNumber:i,numberOfQuestions:x?n:l.questions.length,rightHeaderChildren:u?e(Ur,{exercise:l,icons:u}):null,showTotalQuestions:x,desktopToolbarEnabled:S,mobileToolbarEnabled:_},u?{exerciseIcons:u}:null,{className:f.className,showScoring:g,isGraded:N,totalScoring:x&&"scoring"in a?a.scoring:q,overlayChildren:p,children:t("div",{ref:k,children:[e(mn,{exercise:l}),l.questions.map((e,t)=>{var r,n,c,u,p;const h=O({},x?a:f.questionStates[e.id]);return d(br,O({},f,O({},h,{available_points:void 0}),{ref:e=>v.current[i+t]=e,exercise_uid:l.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:h.canAnswer,displaySolution:!0,detailedSolution:null==(r=h.solution)?void 0:r.content_html,show_all_feedback:s,labelAnswers:m,tableFeedbackEnabled:s&&!x,canUpdateCurrentStep:"canUpdateCurrentStep"in f?f.canUpdateCurrentStep:!(t+1===l.questions.length),previewMode:b,rightSideSlot:o.isValidElement(w)?o.cloneElement(w,{key:e.id,score:null==(n=y[e.id])||null==(c=n.scoring)?void 0:c.score,maxScore:null==(u=y[e.id])||null==(p=u.scoring)?void 0:p.maxScore,onChange:t=>((e,t)=>{$(r=>{var n,o;return O({},r,{[e]:O({},r[e],{scoring:{score:t,maxScore:null==(n=r[e])||null==(o=n.scoring)?void 0:o.maxScore}})})})})(e.id,t)}):void 0}))})]})}))]})})(ln||(ln=sn`
  ${0}
`),Gr),bn=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let gn,wn,fn,xn,vn,kn,yn,$n,Cn,Sn,_n,qn,Nn,An=e=>e;const Mn=u.nav(gn||(gn=An`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),ke(wn||(wn=An`
    padding: 1.6rem 0.8rem;
  `))),En=u.span(fn||(fn=An`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),In="box-shadow: 0px 1px 4px 0px #00000066;",zn=u.button(Sn||(Sn=An`
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
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",ve.palette.neutralDarker,e=>e.isActive?p(_n||(_n=An`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),In):null,e=>(e=>{switch(e){case"isStatus":return p(xn||(xn=An`
        color: ${0};
        background-color: ${0};
      `),ve.palette.white,ve.palette.neutralDarker);case"isCorrect":return p(vn||(vn=An`
        color: ${0};
        background-color: #E8F4D8;
      `),ve.answer.correct);case"isIncorrect":return p(kn||(kn=An`
        color: ${0};
        background-color: #F8E8EA;
      `),ve.answer.incorrect);case"isIncomplete":return p(yn||(yn=An`
        background-color: ${0};
      `),ve.palette.neutralBright);case"isPartialCredit":return p($n||($n=An`
        color: ${0};
        background-color: ${0};
      `),ve.answer.partialCredit,ve.palette.yellow);default:return p(Cn||(Cn=An`
        background-color: ${0};
      `),ve.palette.neutralLight)}})(e.variant),In),Hn=u(v)(qn||(qn=An`
  color: ${0};
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  font-size: 1.2rem;
  border-radius: 50%;
`),e=>e.color),On=u.button(Nn||(Nn=An`
  background-color: ${0};
  border: 0.2rem solid ${0};
  position: absolute;
  top: 0.1rem;
  left: ${0};
  height: 1rem;
  width: 1rem;
  padding: 0.2rem;
  border-radius: 80%;
`),ve.palette.mediumBlue,ve.palette.white,e=>e.isActive?"3.8rem":"3.2rem"),Tn=({variant:t})=>{if("isStatus"===t)return null;const r="0.1rem",n={isCorrect:{icon:E,background:ve.answer.correct,color:ve.palette.white,padding:r,label:"Correct"},isIncorrect:{icon:I,background:ve.answer.incorrect,color:ve.palette.white,padding:r,label:"Incorrect"},isIncomplete:{icon:$,background:ve.answer.neutral,color:ve.palette.white,padding:r,label:"Incomplete"},isPartialCredit:{icon:C,background:ve.answer.partialCredit,color:ve.palette.white,padding:"0.1rem 0.1rem 0.1rem 0.2rem",label:"Partial credit"},null:{icon:z,background:ve.answer.neutral,color:ve.answer.neutralDark,padding:r,label:"Not yet graded"}}[String(t)];return n?e(Hn,{icon:n.icon,color:n.color,style:{background:n.background,padding:n.padding},height:"16px",width:"16px","aria-label":n.label,"aria-hidden":void 0}):null},Ln=({index:r,isActive:n,step:o,goToStep:i})=>t(En,{children:[o.hasFeedback&&o.variant&&"isStatus"!==o.variant?e(On,{isActive:n,"aria-label":`Question ${r+1} - Feedback`}):null,e(zn,{variant:o.variant,isActive:n,onClick:()=>i(r,o),"aria-current":n?"location":"false","aria-label":"isStatus"===o.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===o.variant?e(bn,{}):r+1}),e(Tn,{variant:o.variant})]}),Fn=({steps:t,activeIndex:r,goToStep:n})=>e(Mn,{"aria-label":"Breadcrumbs",children:t.map((t,o)=>e(Ln,{index:o,isActive:o===r,step:t,goToStep:n},o))});let jn;const Pn=u.div(jn||(jn=(e=>e)`
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
`),ve.palette.light),Rn=()=>e(Pn,{children:e(H,{uniqueKey:"OSLoader"})});let Dn,Bn,Qn,Vn=e=>e;const Jn=u.div(Dn||(Dn=Vn`
  display: flex;
  width: fit-content;
`)),Un=u.button(Bn||(Bn=Vn`
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
`),ve.palette.mediumBlue,ve.palette.orange,ve.palette.neutralDarker),Wn=u(v)(Qn||(Qn=Vn`
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
`),ve.palette.white,ve.palette.mediumBlue,ve.palette.orange,ve.palette.neutralDarker),Gn=({buttonVariant:r,onIncludeHandler:n,onRemoveHandler:i,onClickDetails:a})=>{const l=o.useMemo(()=>"include"===r?S:_,[r]);return t(Jn,{children:[t(Un,{className:r,onClick:()=>(e=>{switch(e){case"include":n();break;case"remove":i()}})(r),"aria-label":r,children:[e(Wn,{className:r,icon:l,"aria-label":r+" question",border:!0,size:"lg"}),e("span",{children:(s=r,s.charAt(0).toUpperCase()+s.slice(1)+" question")})]}),t(Un,{className:"details","aria-label":"details",onClick:a,children:[e(Wn,{className:"details",icon:q,border:!0,size:"lg"}),e("span",{children:"Details"})]})]});var s};let Zn;const Yn=u(hn)(Zn||(Zn=(e=>e)`
  ${0}
  ${0}
`),({showAllFeedback:e})=>!e&&"\n    .step-card-footer {\n      display: none;\n    }\n  ",({showCorrectAnswer:e})=>!e&&"\n    .answer-answer {\n      font-weight: normal;\n    }\n  "),Kn=({exercise:t,selected:r,showAllFeedback:n=!1,showChosenAnswer:o=!1,showCorrectAnswer:i=!1,labelAnswers:a=!1,showScoring:l=!1,overlayChildren:s,questionStates:d,rightSideSlot:c})=>e(Yn,O({exercise:n?t:(e=>(e.questions.map(e=>e.answers.map(e=>{e.feedback_html="",e.correctness=i?e.correctness:void 0})),e))(t),className:"preview-card "+(r?"is-selected":""),previewMode:!0,showScoring:l,overlayChildren:s},(e=>{const t=(r=e.questions,r.map(e=>{var t,r,i,a,l,s;const c=(null!=d?d:{})[e.id];return{id:e.id,answer_id:null!=(t=null==(r=o?c:void 0)?void 0:r.answer_id)?t:"",correct_answer_id:(null==(i=e.answers.find(e=>"1.0"===e.correctness))?void 0:i.id)||"",content_html:n&&(null==(a=e.collaborator_solutions)||null==(l=a.find(e=>"detailed"===e.solution_type))?void 0:l.content_html),scoring:null!=(s=null==c?void 0:c.scoring)?s:{}}})).reduce((e,t)=>{const{id:r,answer_id:n,correct_answer_id:o,content_html:a,scoring:l}=t;return O({},e,{[r]:{answer_id:n,correct_answer_id:o,is_completed:i,solution:{content_html:a},scoring:l}})},{});var r;return{canAnswer:!0,needsSaved:!0,hasMultipleAttempts:!1,hasUnlimitedAttempts:!1,onAnswerChange:()=>{},onAnswerSave:()=>{},onNextStep:()=>{},apiIsPending:!1,canUpdateCurrentStep:!1,step:{id:1,uid:e.uid,available_points:"1.0"},questionNumber:e.number,numberOfQuestions:e.questions.length,questionStates:t,labelAnswers:a,show_all_feedback:n}})(t),{rightSideSlot:c}));export{Ie as Answer,He as AnswersTable,Ct as CompletionStatus,hn as Exercise,Kn as ExercisePreview,Mr as ExerciseToolbar,Yt as FreeResponseInput,dr as FreeResponseReview,Gt as FreeResponseTextArea,Gn as IncludeRemoveQuestion,Ke as InnerStepCard,Rn as Loader,Xe as OuterStepCard,Fn as ProgressBar,Ln as ProgressBarItem,Mt as Question,Et as QuestionHtml,ot as StepCard,zn as StyledItem,nt as StyledOverlay,Ar as StyledToolbar,it as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
