import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import o,{useRef as a,useEffect as i,useState as l,useCallback as s,useLayoutEffect as d,createElement as c}from"react";import{createPortal as p}from"react-dom";import u,{css as m,createGlobalStyle as h}from"styled-components";import b from"scroll-to-element";import{debounce as g,once as f}from"lodash";import{memoize as w,isEmpty as x}from"lodash/fp.js";import v from"weak-map";import{FontAwesomeIcon as k}from"@fortawesome/react-fontawesome";import{faBookOpen as y,faTriangleExclamation as $,faQuestion as C,faP as S,faPlus as _,faMinus as N,faEllipsisH as q}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as A}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as z}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as M}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as E}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as I}from"@fortawesome/free-solid-svg-icons/faXmark";import{faCircle as T}from"@fortawesome/free-solid-svg-icons/faCircle";import{BulletList as F}from"react-content-loader";function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(this,arguments)}function H(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const O="ABCDEFGHIJKLMNOPQRSTUVWXYZ",D=(e,t)=>e.id===t,j=e=>"string"==typeof e?parseInt(e,10):e,P=e=>new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0}),R=o.createContext(()=>{throw new Error("context not initialized")});let B,Q,V,J,U,G=e=>e;const W=u.div(B||(B=G`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
`)),Y=u.div(Q||(Q=G`
  background: white;
  max-width: 100vw;
  max-height: calc(100vh - ${0}rem);
  overflow: auto;

  > img {
    ${0}
    display: block;
  }
`),10.4,""),Z=u.button(V||(V=G`
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
`),4.7,.5,4.2,4.2),K=u.div(J||(J=G`
  position: relative;
  pointer-events: auto;
`)),X=u.div(U||(U=G`
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`)),ee=()=>t("svg",{width:"42",height:"42",viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg",children:[e("rect",{x:"1",y:"1",width:"40",height:"40",rx:"20",stroke:"white",fill:"none"}),e("line",{x1:"16",y1:"16",x2:"26",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),e("line",{x1:"26",y1:"16",x2:"16",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]}),te=({isOpen:r,onClose:n,children:o})=>{const l=a(null);return i(()=>{if(!r||!l.current)return;const e=["button:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),t=l.current.querySelectorAll(e),n=t[0],o=t[t.length-1];null==n||n.focus();const a=e=>{if("Tab"!==e.key)return;const t=document.activeElement,r=e.shiftKey;r&&t===n?(e.preventDefault(),null==o||o.focus()):r||t!==o||(e.preventDefault(),null==n||n.focus())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[r]),r?e(W,{onClick:n,children:e(X,{"aria-modal":"true",role:"dialog",children:t(K,{ref:l,onClick:e=>e.stopPropagation(),tabIndex:-1,children:[e(Z,{onClick:n,"aria-label":"Close media preview",children:e(ee,{})}),e(Y,{children:o})]})})}):null},re=["html","component","block"],ne=n=>{let{html:l,component:s,block:d=!1}=n,c=H(n,re);const u=o.useContext(R),m=a(null),h=d?"div":"span",b=function(){const{open:t,MediaModalPortal:r}=function(){let t=null;return{open:e=>{null==t||t(e)},MediaModalPortal:()=>{const[r,n]=o.useState(!1),[a,l]=o.useState(null);return i(()=>(t=e=>{l(e),n(!0)},()=>{t=null}),[]),i(()=>{if(!r||"undefined"==typeof document)return;const e=e=>{"Escape"!==e.key&&"Esc"!==e.key||n(!1)},t=document;return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}},[r]),p(e(te,{isOpen:r,onClose:()=>n(!1),children:a}),document.body)}}}(),{mount:n,unmount:a}=function(t){let r=null;const n=function(t){return r=>{const n=r.target.closest("button.image-button-wrapper");if(!n)return;if("keydown"===r.type){const e=r.key;if("Enter"!==e&&" "!==e)return;r.preventDefault()}const o=n.querySelector("img");o&&t(e("img",{tabIndex:0,src:o.src,alt:o.alt||"",width:o.width,height:o.height}))}}(t),o=()=>{r&&(r.removeEventListener("click",n),r.removeEventListener("keydown",n))};return{mount:e=>{r!==e&&(o(),r=e),r&&(r.addEventListener("click",n),r.addEventListener("keydown",n))},unmount:()=>{o(),r=null}}}(t);return{open:t,MediaModalPortal:r,mount:n,unmount:a}}(),g=b.MediaModalPortal;return i(()=>{const e=m.current;if(e)return u(),e.querySelectorAll("img").forEach(e=>{var t;if(e.closest("button"))return;const r=document.createElement("button");r.type="button";const n=e.getAttribute("alt");r.setAttribute("aria-label",n?`Click to enlarge image of ${n}`:"Click to enlarge this image"),r.classList.add("image-button-wrapper"),null==(t=e.parentElement)||t.insertBefore(r,e),r.appendChild(e)}),b.mount(e),()=>{b.unmount()}},[d,b,u]),void 0!==s?o.cloneElement(s,L({html:l},c)):t(r,{children:[e(h,L({ref:m,dangerouslySetInnerHTML:{__html:l}},c)),e(g,{})]})},oe=["id"],ae=t=>e("aside",{children:e(ne,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),ie=r=>{let{id:o}=r,a=H(r,oe);const i=n("question-feedback",a.position||"bottom");return t("aside",{id:o,className:i,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(ae,L({},a,{children:a.children}))]})};let le,se,de,ce,pe,ue,me,he,be,ge,fe,we,xe,ve=e=>e;const ke={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C",yellow:"#FEDE9F"},ye={palette:ke,answer:{neutral:ke.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032",partialCredit:"#976502",neutralDark:"#5f6163"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:ke.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:ke.neutralDarker,background:ke.neutralLighter}},$e=(...e)=>m(le||(le=ve`@media(max-width: ${0}px) { ${0} }`),600,m(...e)),Ce=(...e)=>m(se||(se=ve`@media(max-width: ${0}px) { ${0} }`),999,m(...e)),Se=(...e)=>m(de||(de=ve`@media(min-width: ${0}px) { ${0} }`),1e3,m(...e)),_e={answer:()=>m(pe||(pe=ve`
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
  `),ke.neutralDarker,"3.6rem","3.6rem","3.6rem","3.6rem","3.6rem",ye.answer.neutral,"0.1s ease-in-out","0.1s ease-in-out","0.1s ease-in-out",ye.palette.white),answerColor:(e,t=!1)=>m(ue||(ue=ve`
    .answer-letter-wrapper::before {
      color: ${0};
      border-color: ${0};
      ${0}
    }
  `),t?"#fff":e,e,t?`background-color: ${e};`:null),answerChecked:()=>_e.answerColor(ye.answer.checked,!0),answerCorrect:e=>_e.answerColor(ye.answer.correct,e),answerIncorrect:e=>_e.answerColor(ye.answer.incorrect,e),answerHover:()=>m(me||(me=ve`
    ${0};
    font-weight: bold;
  `),_e.answerColor(ye.answer.hover)),answerCorrectAnswer:()=>_e.answerColor(ye.answer.correct,!1),resetText:()=>m(he||(he=ve`
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
  `)),stepCardPadding:()=>m(be||(be=ve`
    padding: 4.8rem 14rem 0;

    ${0}

    ${0}
  `),Ce(ge||(ge=ve`
      padding: ${0} ${0};
    `),"24px","24px"),$e(fe||(fe=ve`
      padding: calc(${0} * 2) ${0};
    `),"8px","8px")),popover:()=>m(we||(we=ve`
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
  `),_e.resetText(),"1px",ye.popover.borderColor,ye.palette.white,"325px","8px","1rem",ye.palette.neutralThin,"16px","8px","9px","8px","16px","8px","16px",ye.popover.borderColor,"1px",ye.palette.white,"9px","1px","9px","1rem","0.8rem"),visuallyHidden:()=>m(xe||(xe=ve`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `))};let Ne;const qe=u.div(Ne||(Ne=(e=>e)`
  color: ${0};
  text-transform: uppercase;
  font-size: calc(1.1rem * var(--content-text-scale));
  font-weight: bold;
`),e=>e.state?ye.answer.correct:ye.answer.incorrect),Ae=({hasCorrectAnswer:t,isCorrect:r,isIncorrect:n,isSelected:o})=>r||n||o&&t?e(qe,{state:!!r,children:e("span",{children:(r?"Correct":"Incorrect")+" Answer"})}):null,ze=r=>{const{answer:{content_html:n,feedback_html:o},contentRenderer:a,labelAnswers:i,show_all_feedback:l,tableFeedbackEnabled:s,hasCorrectAnswer:d,isCorrect:c,isIncorrect:p,isSelected:u}=r;return t("div",{className:"answer-answer",role:"status","aria-live":"polite","aria-atomic":"true",children:[!1!==i&&e(Ae,{hasCorrectAnswer:d,isCorrect:c,isIncorrect:p,isSelected:u}),e(ne,{className:"answer-content",component:a,html:n}),l&&o&&!s&&e(ae,{contentRenderer:a,children:o},"question-mc-feedback")]})},Me=r=>{const{answer:o,answered_count:a,isCorrect:i,contentRenderer:l,iter:s,show_all_feedback:d,tableFeedbackEnabled:c}=r,p=o.selected_count&&a?Math.round(o.selected_count/a*100):0;return t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:i,red:!i}),children:[e("span",{className:"selected-count","data-percent":`${p}`,children:o.selected_count}),e("span",{className:n("letter",{green:i,red:!i}),children:O[s]})]}),e(ze,{answer:o,contentRenderer:l,show_all_feedback:d,tableFeedbackEnabled:c})]})},Ee=n=>{const{type:o,iter:a,answer:i,disabled:l,onKeyPress:s,qid:d,contentRenderer:c,correctIncorrectIcon:p,feedbackId:u,isSelected:m,isCorrect:h,isIncorrect:b,hasCorrectAnswer:g,show_all_feedback:f,tableFeedbackEnabled:w,labelAnswers:x=!0}=n,v=`${m?"Selected ":""}Choice ${O[a]}:`;let k;return g||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:k}=n),t(r,{children:["teacher-preview"===o&&e("div",{className:"correct-incorrect",children:h&&p}),e("input",{type:"radio",className:"answer-input-box",checked:m,id:`${d}-option-${a}`,name:`${d}-options`,onChange:()=>k&&k(i),disabled:l||!k,"aria-details":u}),t("label",{onKeyPress:s,htmlFor:`${d}-option-${a}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper","aria-label":v,"data-answer-choice":O[a],"data-test-id":`answer-choice-${O[a]}`}),e(ze,{answer:i,contentRenderer:c,labelAnswers:x,show_all_feedback:f,tableFeedbackEnabled:w,hasCorrectAnswer:g,isCorrect:h,isIncorrect:b,isSelected:m})]})]})},Ie=t=>e("teacher-review"===t.type?Me:Ee,L({},t)),Te=t=>{const{type:r,answer:o,disabled:a,answerId:i,correctAnswerId:l,incorrectAnswerId:s}=t,d=((e,t)=>e.id==t)(o,i),c=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(o,l),p=D(o,s),u=d||void 0===i&&(!s&&c||p),m=n("answers-answer",{disabled:a,"answer-selected":u,"answer-correct":c&&"student-mpp"!==r,"answer-incorrect":s&&D(o,s)});return e("div",{className:"openstax-answer",children:e("section",{className:m,children:e(Ie,L({},t,{isCorrect:c,isSelected:u,isIncorrect:p}))})})};Te.displayName="OSAnswer";const Fe="student",Le=r=>{let n=0;const{question:o,hideAnswers:a,type:i=Fe,answered_count:l,choicesEnabled:s,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:u,correct_answer_feedback_html:m,previewMode:h,labelAnswers:b,show_all_feedback:g=!1,tableFeedbackEnabled:f,hasCorrectAnswer:w,onChangeAnswer:x,onKeyPress:v,answerIdOrder:k,instructions:y}=r;if(a)return null;const{id:$}=o,C=[],S={qid:$||"auto-"+n++,answerId:p,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:w,onChangeAnswer:x,type:i,answered_count:l,disabled:h||!s,labelAnswers:b,show_all_feedback:g,tableFeedbackEnabled:f,onKeyPress:v},_=(k?(e=>{const{answers:t}=o;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(k):o.answers).map((t,r)=>{const n={answer:L({},t,{question_id:"string"==typeof o.id?parseInt(o.id,10):o.id}),iter:r,key:`${S.qid}-option-${r}`},a=Object.assign({},n,S);let i,l;return g&&t.feedback_html&&f?i=t.feedback_html:t.id===c&&u?i=u:t.id===d&&m&&(i=m),i&&(l=`feedback-${S.qid}-${r}`,C.push({index:r,html:i,id:l})),e(Te,L({feedbackId:l},a))});return C.forEach((t,n)=>{const o=t.index+n+1;_.splice(o,0,e(ie,{id:t.id,contentRenderer:r.contentRenderer,children:t.html},o))}),t("div",L({},h?{}:{role:"radiogroup","aria-label":"Answer choices"},{className:"answers-table",children:[y,_]}))},He=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren","overlayChildren","showScoring","totalScoring","isGraded"],Oe=["step","questionNumber","numberOfQuestions","children","className","overlayChildren"];let De,je,Pe,Re,Be,Qe,Ve,Je,Ue,Ge,We,Ye,Ze,Ke,Xe=e=>e;const et=u.div(De||(De=Xe`
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
`),ye.palette.pale,Se(je||(je=Xe`
    max-width: 1000px;
  `))),tt=u.div(Pe||(Pe=Xe`
  padding: ${0};

  ${0}
`),"2rem",$e(Re||(Re=Xe`
    padding: 0;
  `))),rt=u.div(Be||(Be=Xe`
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
`),ye.card.header.background,ye.palette.gray,Se(Qe||(Qe=Xe`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
  `)),Ce(Ve||(Ve=Xe`
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
  `),"24px","24px"),$e(Je||(Je=Xe`
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${0};
      }
      button.ox-icon-angle-left {
          margin-right: ${0};
      }
  `),"8px","8px")),nt=u.div(Ue||(Ue=Xe`
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
`),ye.palette.darkRed,ye.palette.white);rt.displayName="StepCardHeader";const ot=u.div(Ge||(Ge=Xe`
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
`),_e.stepCardPadding(),ye.card.body.background,((...e)=>m(ce||(ce=ve`@media(max-width: ${0}px) { ${0} }`),600,m(...e)))(We||(We=Xe`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `)),Se(Ye||(Ye=Xe`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),$e(Ze||(Ze=Xe`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),at=u.div(Ke||(Ke=Xe`
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
`)),it=r=>{var n,o;let{questionNumber:d,numberOfQuestions:c,showTotalQuestions:p,stepType:u,isHomework:m,availablePoints:h,unpadded:b,className:g,children:f,questionId:w,multipartBadge:x,leftHeaderChildren:v,rightHeaderChildren:k,headerTitleChildren:y,overlayChildren:$,showScoring:C,totalScoring:S,isGraded:_}=r,N=H(r,He);const q=a(null),[A,z]=l(!1),M=c>1?`Questions ${d} - ${d+c-1}`:`Question ${d}`,E=s(()=>{z(!0)},[]),I=s(()=>{var e;Array.from((null==(e=document.getElementById("step-card"))?void 0:e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||[]).forEach(e=>{e.setAttribute("tabindex","-1")})},[]);return i(()=>{const e=q.current;return e&&$&&(e.addEventListener("focus",E),I()),()=>{null==e||e.removeEventListener("focus",E)}},[$,q,E,I]),t(tt,L({},N,{children:[x,e(et,{className:g,children:t("div",L({ref:q},$?{onMouseOver:()=>z(!0),onMouseLeave:()=>z(!1),onBlur:e=>{q.current&&!q.current.contains(e.relatedTarget)&&z(!1)},tabIndex:0}:{},{children:[$&&A&&e(at,{id:"overlay-element",children:$}),t("div",{id:"step-card",children:[d&&m&&"exercise"===u&&t(rt,{className:"step-card-header",children:[t("div",{children:[v,t("h2",{className:"question-info",children:[y,e("span",{children:M}),p?t("span",{className:"num-questions",children:[" / ",c]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",w]})]})]}),C&&e("div",{className:"scoring",children:_?t("span",{children:[null==S||null==(n=S.score)?void 0:n.toFixed(1),"/",null==S||null==(o=S.maxScore)?void 0:o.toFixed(1),null!=S&&S.maxScore&&S.maxScore>1.1?" points":" point"]}):e(nt,{children:e("span",{children:"ungraded"})})}),h||k?t("div",{children:[h&&t("div",{className:"points",children:[h," Points"]}),k]}):null]}),e(ot,{unpadded:b,children:f})]})]}))})]}))};it.displayName="OSStepCard";const lt=t=>{let{step:r,questionNumber:o,numberOfQuestions:a,children:i,className:l,overlayChildren:s}=t,d=H(t,Oe);return e(it,L({},d,{unpadded:!0,questionNumber:o,numberOfQuestions:a,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,l),questionId:r.uid,overlayChildren:s,children:i}))};lt.displayName="OSTaskStepCard";const st=["disabled","isWaiting","waitingText","children"];let dt;const ct=u.button(dt||(dt=(e=>e)`
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
`),ye.button.background,ye.palette.white,ye.button.backgroundHover,ye.button.backgroundActive),pt=t=>{const{disabled:r,isWaiting:n,waitingText:o,children:a}=t,i=H(t,st);return e(ct,L({},i,{disabled:n||r,children:n&&o||a}))};let ut,mt,ht,bt,gt,ft,wt,xt=e=>e;const vt=h(ut||(ut=xt`
  :root {
    --content-text-scale: 1;
  }
`)),kt=u(et)(mt||(mt=xt`
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
`)),yt=u.h2(ht||(ht=xt`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`)),$t=u.div(bt||(bt=xt`
  display: flex;
  margin: 0;
  gap: 1rem;

  button {
    height: 48px;
  }
`)),Ct=u.div(gt||(gt=xt`
  display: flex;
  margin: 0;
  gap: 1rem;
`)),St=u(pt)(ft||(ft=xt`
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
`),ye.palette.white,ye.palette.black,ye.palette.pale,ye.palette.neutralBright,ye.palette.black,ye.palette.pale,ye.palette.neutralLight,ye.palette.black,ye.palette.pale),_t=u(({numberOfQuestions:n,numberCompleted:o,handleContinue:a,handleNext:i,className:l,score:s,handleRetry:d,isRetrying:c,handleEditResponses:p})=>{var u,m;const h=n===o,b=o>0;if(p)return t(r,{children:[e(vt,{}),t(kt,{className:l,children:[e(yt,{children:h?"You are done.":b?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:h?"Your ungraded responses can be edited until they have been graded.":b?`You've completed ${o} of ${n} questions.`:"Begin working on the quiz."}),t($t,{children:[h?e(St,{"data-test-id":"edit-responses-btn",onClick:p,children:"Edit responses"}):b?e(St,{"data-test-id":"resume-btn",onClick:a,children:"Continue"}):null,h&&d?e(St,{"data-test-id":"retry-btn",onClick:d,children:"Retry Quiz"}):null,e(pt,{"data-test-id":"next-btn",onClick:i,children:"Next"})]})]})]});const g=h||0===o&&d||b&&d?"Next":b?"Continue":"Start",f=h?"Retry Quiz":"Resume Quiz",w=h?d:a,x=h||d?i:a;return t(r,{children:[e(vt,{}),t(kt,{className:l,children:[e(yt,{children:h?"You are done.":b?"Quiz is partially complete.":"No questions have been answered."}),d?t("div",{children:[e("p",{children:h?"Attempts for this quiz are unlimited. Your highest score will be saved.":"You are in the middle of a quiz attempt. Attempts for this quiz are unlimited. Your highest score will be saved."}),e(Ct,{children:t("p",{children:[e("b",{children:"Current Score:"})," ",null!=(u=null==s?void 0:s.current)?u:"Score unavailable"," | ",e("b",{children:"Saved Score:"})," ",null!=(m=null==s?void 0:s.saved)?m:"Score unavailable"]})})]}):e("p",{children:h?"Great job answering all the questions.":b?`You've completed ${o} of ${n} questions.`:"Begin working on the quiz."}),t($t,{children:[d?e(St,{"data-test-id":"retry-resume-btn",onClick:w,disabled:c,children:f}):null,e(pt,{"data-test-id":`${g.split(" ")[0].toLowerCase()}-btn`,onClick:x,children:g})]})]})]})})(wt||(wt=xt``));let Nt,qt,At=e=>e;const zt=u.div(Nt||(Nt=At`
  width: 100%;
`)),Mt=u.div(qt||(qt=At`
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
`),_e.stepCardPadding(),ye.palette.pale,ye.palette.neutral,ye.palette.neutralLightBlue,ye.palette.neutralLightest,_e.answer(),"1rem","1rem","0.1s ease-in-out",_e.answerHover(),_e.visuallyHidden(),_e.answerChecked(),ye.answer.checked,_e.answerChecked(),_e.answerIncorrect(!0),_e.answerCorrect(!0),_e.answerCorrect(!1),_e.answerIncorrect(),_e.answerIncorrect(!0),_e.popover(),"370px","0.9rem","1.1rem"),Et=o.forwardRef((r,o)=>{let a,i;const{question:l,correct_answer_id:s,incorrectAnswerId:d,exercise_uid:c,className:p,questionNumber:u,context:m,task:h,hidePreambles:b}=r,{stem_html:g,collaborator_solutions:f=[],formats:w,stimulus_html:x}=l,v=!!s,k=n("openstax-question",p,{"has-correct-answer":v&&!((null!=h?h.is_deleted:void 0)&&"homework"===(null!=h?h.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(a=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=l;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(i=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(ne,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),e(Mt,{ref:o,className:k,"data-question-number":u,"data-test-id":"question",children:e(zt,{children:t("div",{children:[e(It,{type:"context",html:m,hidden:b}),e(It,{type:"stimulus",html:x,hidden:b}),e(It,{type:"stem",html:g,hidden:b,questionNumber:u}),r.children,e(Le,L({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),i,r.displayFormats?e(Tt,{formats:w}):void 0,a]})})})}),It=t=>{const{html:r="",type:n,hidden:o,questionNumber:a}=t;return!0!==o&&r.length>0?e(ne,{html:r,"data-question-number":a,className:`question-${n}`,block:!0}):null},Tt=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let Ft,Lt,Ht,Ot=e=>e;const Dt=u.div(Ft||(Ft=Ot`
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
        flex-flow: row nowrap;
        justify-content: flex-end;
        gap: 0.8rem;

        button:has(~ button),
        button + button {
            flex-shrink: 1;
            min-width: 0;
            width: 100px;
        }
    }

    ${0}
`),_e.stepCardPadding(),ye.card.body.background,ye.palette.pale,$e(Lt||(Lt=Ot`
            flex-wrap: wrap;
        `)),Se(Ht||(Ht=Ot`
        padding: 0 140px 32px 140px;
        flex-wrap: nowrap;

        .points {
            max-width: 400px;
        }
    `)));let jt,Pt,Rt,Bt,Qt,Vt,Jt,Ut,Gt=e=>e,Wt=0;const Yt=u.div(jt||(jt=Gt`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-left: 1px solid ${0};
  min-width: 300px;
`),ye.palette.neutralLighter),Zt=u.div(Pt||(Pt=Gt`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`)),Kt=u.label(Rt||(Rt=Gt`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${0};
`),ye.palette.neutralDarker),Xt=u.div(Bt||(Bt=Gt`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
`)),er=u.input(Qt||(Qt=Gt`
  width: 6rem;
  padding: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
  border: 1px solid ${0};
  border-radius: 4px;
  text-align: center;

  &::placeholder {
    color: #6F6F6F;
    text-align: center;
    line-height: normal;
  }

  &:focus {
    outline: none;
    border-color: ${0};
  }

  &:disabled {
    background-color: ${0};
    cursor: not-allowed;
  }
`),ye.palette.neutral,ye.palette.blue,ye.palette.neutralLighter),tr=u.textarea(Vt||(Vt=Gt`
  width: 100%;
  min-height: 12rem;
  padding: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
  font-family: inherit;
  border: 1px solid ${0};
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${0};
  }

  &:disabled {
    background-color: ${0};
    cursor: not-allowed;
  }
`),ye.palette.neutral,ye.palette.blue,ye.palette.neutralLighter),rr=u.div(Jt||(Jt=Gt`
  display: flex;
`)),nr=u.span(Ut||(Ut=Gt`
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${0};
`),ye.palette.neutralThin),or=({questionId:r,maxScore:n,score:o,comment:s,onChange:d,onSave:c,disabled:p=!1,gradingTimestamp:u})=>{const m=a(null);null===m.current&&(m.current="frg-"+Wt++);const h=`${m.current}-score`,b=`${m.current}-comment`,[g,f]=l((null==o?void 0:o.toString())||""),[w,x]=l(s||""),[v,k]=l(!1),[y,$]=l(!1),C=void 0!==o;i(()=>{const e=parseFloat(g),t=!isNaN(e)&&e!==o;k(t||w!==(s||""))},[g,w,o,s]),i(()=>{f((null==o?void 0:o.toString())||""),x(s||"")},[o,s]),i(()=>{d&&!isNaN(parseFloat(g))&&d({score:parseFloat(g),comment:w})},[g,w,d]);const S=parseFloat(g),_=!isNaN(S)&&S>=0&&S<=n,N=v&&_&&!p&&!y;return t(Yt,{children:[e(Zt,{children:t(Xt,{children:[e(Kt,{htmlFor:h,children:"Points"}),e(er,{id:h,type:"number",value:g,onChange:e=>{f(e.target.value)},disabled:p||y,min:0,max:n,step:1,placeholder:"--","aria-label":"Score"}),t("span",{children:["out of ",n]})]})}),t(Zt,{children:[e(Kt,{htmlFor:b,children:"Comment"}),e(tr,{id:b,value:w,onChange:e=>{x(e.target.value)},disabled:p||y,placeholder:"Enter feedback for the student...","aria-label":"Comment"})]}),e(rr,{children:e(pt,{onClick:async()=>{const e=parseFloat(g);if(!isNaN(e)&&e>=0&&e<=n&&c){$(!0);try{await c(r,{score:e,max:n,comment:w})}finally{$(!1)}}},disabled:!N,children:C?"Update":"Save"})}),u&&t(nr,{children:["Last graded on ",P(u)]})]})},ar=()=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("mask",{id:"mask0_4564_440",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"16",height:"16",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0C3.58203 0 0 3.58332 0 8C0 12.4193 3.58203 16 8 16C12.418 16 16 12.4193 16 8C16 3.58332 12.418 0 8 0ZM8 3.54835C8.74825 3.54835 9.35482 4.15493 9.35482 4.90318C9.35482 5.65143 8.74825 6.25801 8 6.25801C7.25175 6.25801 6.64518 5.65143 6.64518 4.90318C6.64518 4.15493 7.25175 3.54835 8 3.54835ZM9.80648 11.7419C9.80648 11.9557 9.63315 12.129 9.41937 12.129H6.58062C6.36685 12.129 6.19352 11.9557 6.19352 11.7419V10.9677C6.19352 10.754 6.36685 10.5806 6.58062 10.5806H6.96773V8.51611H6.58062C6.36685 8.51611 6.19352 8.34279 6.19352 8.12901V7.35482C6.19352 7.14104 6.36685 6.96772 6.58062 6.96772H8.64517C8.85895 6.96772 9.03227 7.14104 9.03227 7.35482V10.5806H9.41937C9.63315 10.5806 9.80648 10.754 9.80648 10.9677V11.7419Z",fill:"white"})}),e("g",{mask:"url(#mask0_4564_440)",children:e("rect",{width:"16",height:"16",fill:"#976502"})})]});let ir,lr,sr,dr,cr,pr,ur,mr,hr,br,gr,fr,wr,xr,vr,kr=e=>e;const yr=u.div(ir||(ir=kr`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
    padding-bottom: 1rem;
  }
`),_e.stepCardPadding()),$r=u.div(lr||(lr=kr`
  font-size: calc(2rem * var(--content-text-scale));
  line-height: 1.68em;
  position: relative;
`)),Cr=u.div(sr||(sr=kr`
  margin: 8px 0;
  display: flex;
  justify-content: ${0};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${0};
  }

  div > span {
    font-size: calc(1.4rem * var(--content-text-scale));
    line-height: 16px;

    + span {
      margin-left: 1rem;
    }
  }

  .last-submitted + * {
    margin-top: 0.8rem;
  }

  color: ${0};
`),e=>e.hasChildren?"space-between":"flex-end",ye.palette.danger,ye.palette.neutralThin),Sr=u.textarea(dr||(dr=kr`
  display: block;
  font-family: inherit;
  font-size: calc(1.8rem * var(--content-text-scale));
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${0};
  color: ${0};
`),ye.palette.neutral,ye.palette.neutralDark);Sr.displayName="OSFreeResponseTextArea";const _r=u.div(cr||(cr=kr`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${0};
  margin: 2.5rem 0 1rem 0;
`),ye.palette.neutralThin),Nr=u.div(pr||(pr=kr`
  border-left: 16px solid ${0};
  padding-left: 1.6rem;
  margin: 1rem 0 1rem 1rem;
  max-height: ${0};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${0};
  white-space: pre-wrap;

  ${0}
`),ye.palette.neutralLighter,({expanded:e})=>e?"none":"16.8rem",ye.palette.neutralDark,({expanded:e,isOverflowing:t})=>!e&&t?m(ur||(ur=kr`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `)):""),qr=u.button(mr||(mr=kr`
  display: inline;
  background: none;
  border: none;
  color: ${0};
  padding: 0;
  margin: 0 0 0 1rem;
  cursor: pointer;
  font-size: calc(1.3rem * var(--content-text-scale));
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`),ye.palette.blue),Ar=u.div(hr||(hr=kr`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${0};
`),ye.palette.neutralDarker),zr=u.div(br||(br=kr`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${0};
  white-space: pre-wrap;

  .feedback-label {
    color: ${0};
    font-weight: bold;
  }
`),ye.palette.neutralDarker,ye.palette.neutralDarker),Mr=u.div(gr||(gr=kr`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 2.5rem;
`)),Er=u.div(fr||(fr=kr`
  flex: 1;
`)),Ir=u.p(wr||(wr=kr`
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${0};
  margin: 0;
`),ye.palette.neutralThin),Tr=u.div(xr||(xr=kr`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #FFF5E0;
  padding-left: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
`)),Fr=u(pt)(vr||(vr=kr`
  background-color: ${0};

  &:hover:not(:disabled) {
    background-color: ${0};
  }

  &:active:not(:disabled) {
    background-color: ${0};
  }
`),ye.palette.darkGray,ye.palette.neutral,ye.palette.neutralDark),Lr=t=>e(Fr,L({},t,{children:"Cancel"})),Hr=n=>{const{is_completed:o,canAnswer:s,needsSaved:c,apiIsPending:p,free_response:u,onAnswerChange:m,onAnswerSave:h,onNextStep:b,questionNumber:g,question:f,wordLimit:w,score:x,feedback_html:v,submissionTimestamp:k,cancelHandler:y,previewMode:$=!1,onGradingSave:C,gradingTimestamp:S}=n,_="number"==typeof(null==x?void 0:x.raw)&&"number"==typeof(null==x?void 0:x.max)?`${x.raw}/${x.max}`:void 0,[N,q]=l(!1),[A,z]=l(!1),M=a(null),[E,I]=l(u||""),T=o&&s,F=o&&!s,L=$?null:t(Tr,{children:[e(ar,{}),"You can come back and edit your response until it has been graded."]});d(()=>{T&&!c&&I(u||"")},[c,T,u]);const H=c&&(u||"")!==E,O=function(e){const t=e.trim();return t?t.split(/\s+/).length:0}(u||""),D=O>w;d(()=>{const e=()=>{F&&M.current&&z(!N&&M.current.scrollHeight>168)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[u,F,N]);const R=e=>{const t=e.target.value,r=t.trim();let n=t;if(r){const t=r.split(/\s+/);t.length>w&&(n=t.slice(0,w).join(" "),e.target.value=n)}m({id:j(f.id),question_id:j(f.id),type:"free-response",content_html:n,free_response:n,correctness:void 0})},[B,Q]=l(!1);i(()=>{B&&o&&!p&&(Q(!1),b(g-1))},[B,o,p,b,g]);const V=()=>{b(g-1)};return t(yr,F?{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e($r,{children:f.stem_html&&e(It,{type:"stem",html:f.stem_html,hidden:!1})}),!$&&e(_r,{children:"Your answer"}),$&&C?t(Mr,{children:[t(Er,{children:[e(Nr,{ref:M,expanded:N,isOverflowing:A,children:u||""}),(A||N)&&e(qr,{onClick:()=>q(!N),children:N?"read less":"read more"}),$&&t("div",{style:{marginTop:"1.6rem"},children:[_&&t(Ar,{role:"status",children:["Score: ",_]}),v&&t(zr,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(It,{type:"stem",html:v,hidden:!1})]})]})]}),$&&e(or,{questionId:f.id,maxScore:(null==x?void 0:x.max)||1,score:null==x?void 0:x.raw,comment:v,onSave:C,gradingTimestamp:S})]}):t(r,{children:[e(Nr,{ref:M,expanded:N,isOverflowing:A,children:u||""}),(A||N)&&e(qr,{onClick:()=>q(!N),children:N?"read less":"read more"}),$&&t("div",{style:{marginTop:"1.6rem"},children:[_&&t(Ar,{role:"status",children:["Score: ",_]}),v&&t(zr,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(It,{type:"stem",html:v,hidden:!1})]})]})]})]}),!$&&e(Dt,{children:t("div",{className:"step-card-footer-inner",children:[t("div",{children:[_&&t(Ar,{role:"status",children:["Score: ",_]}),v&&t(zr,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(It,{type:"stem",html:v,hidden:!1})]})]}),e("div",{className:"controls",children:e(pt,{"data-test-id":"next-btn",onClick:V,children:"Next"})})]})})]}:T?{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[L,e($r,{children:f.stem_html&&e(It,{type:"stem",html:f.stem_html,hidden:!1})}),e(Sr,{value:u||"",onChange:R,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:$||p}),!$&&t(Cr,{hasChildren:!!k,children:[k&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",P(k)]})}),t("div",{children:[O>=w&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",w-O]})]})]})]}),!$&&e(Dt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),t("div",{className:"controls",children:[e(Lr,{disabled:!H||p,onClick:e=>{m({id:j(f.id),question_id:j(f.id),type:"free-response",content_html:E,free_response:E,correctness:void 0}),y(e)}}),e(pt,{"data-test-id":"update-answer-btn",disabled:!H||p||D||0===(u||"").trim().length,isWaiting:p,waitingText:"Saving...",onClick:()=>{h(j(f.id))},children:"Update"}),e(pt,{"data-test-id":"next-btn",disabled:p||H,onClick:V,children:"Next"})]})]})})]}:{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[L,e($r,{children:f.stem_html&&e(It,{type:"stem",html:f.stem_html,hidden:!1})}),$?C?t(Mr,{children:[e(Er,{children:e(Ir,{children:"Unanswered"})}),e(or,{questionId:f.id,maxScore:(null==x?void 0:x.max)||1,score:null==x?void 0:x.raw,comment:v,onSave:C,gradingTimestamp:S})]}):e(Ir,{children:"Unanswered"}):e(Sr,{value:u||"",onChange:R,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:$||p}),!$&&t(Cr,{hasChildren:!!k,children:[k&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",P(k)]})}),t("div",{children:[O>=w&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",w-O]})]})]})]}),!$&&e(Dt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),e("div",{className:"controls",children:e(pt,{"data-test-id":"submit-answer-btn",disabled:p||B||D||0===(u||"").trim().length,isWaiting:p||B,waitingText:"Saving...",onClick:()=>{h(j(f.id)),Q(!0)},children:"Submit"})})]})})]})};Hr.displayName="OSFreeResponse";let Or,Dr,jr,Pr,Rr=e=>e;const Br="\n  padding: 1rem 2.5rem;\n  margin: 1rem 0 1rem 1rem;\n",Qr=u.div(Or||(Or=Rr`
  ${0}
  border-left: ${0} solid ${0};
  font-style: italic;
`),Br,"1rem",ye.palette.neutralLighter),Vr=u.div(Dr||(Dr=Rr`
  ${0}
  position: relative;
  width: 100%;
`),Br),Jr=u.div(jr||(jr=Rr`
  max-height: ${0};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: 1.4rem;

  ${0}
`),({expanded:e})=>e?"none":"16.8rem",({expanded:e,isOverflowing:t})=>!e&&t?"\n    display: -webkit-box;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  ":""),Ur=u.button(Pr||(Pr=Rr`
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
`),ye.palette.blue),Gr=({children:t,previewMode:r})=>e(r?Vr:Qr,{children:t}),Wr=({free_response:r,previewMode:n})=>{const[a,i]=o.useState(!1),[l,s]=o.useState(!1),d=o.useRef(null);return o.useLayoutEffect(()=>{n&&d.current&&s(!a&&d.current.scrollHeight>168)},[r,n,a]),r?t(Gr,{previewMode:n,children:[n?e(Jr,{ref:d,expanded:a,isOverflowing:l,children:r}):r,n&&(l||a)&&e(Ur,{onClick:()=>i(!a),children:a?"show less":"read more"})]}):null},Yr=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),Zr=()=>e("div",{children:"Unlimited quiz attempts left"}),Kr=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,Xr=t=>e(pt,L({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),en=t=>e(pt,L({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),tn=o.forwardRef((r,n)=>{const{question:a,task:i,answer_id_order:l,onAnswerChange:s,feedback_html:d,correct_answer_feedback_html:c,is_completed:p,correct_answer_id:u,incorrectAnswerId:m,choicesEnabled:h,questionNumber:b,answer_id:g,hasMultipleAttempts:f,hasUnlimitedAttempts:w,attempts_remaining:x,published_comments:v,detailedSolution:k,canAnswer:y,needsSaved:$,attempt_number:C,apiIsPending:S,onAnswerSave:_,onNextStep:N,canUpdateCurrentStep:q,displaySolution:A,available_points:z,free_response:M,labelAnswers:E,show_all_feedback:I,tableFeedbackEnabled:T,hasFeedback:F,previewMode:L}=r,[H,O]=o.useState(!1);return o.useEffect(()=>{H&&p&&(N(b-1),O(!1))},[N,b,H,p]),t("div",{"data-test-id":"student-exercise-question",children:[e(Et,{ref:n,task:i,question:a,answerIdOrder:l,choicesEnabled:h,answer_id:g,questionNumber:b,onChange:s,feedback_html:d,correct_answer_feedback_html:c,correct_answer_id:p?u:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:A,labelAnswers:E,show_all_feedback:I,tableFeedbackEnabled:T,previewMode:L,children:e(Wr,{free_response:M,previewMode:L})}),L&&k||!L?e(Dt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[z?t("strong",{children:["Points: ",z]}):null,t("span",{className:"attempts-left",children:[f&&x>0&&e(Yr,{count:x}),w?e(Zr,{}):null]}),e(Kr,{published_comments:v}),k&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(ne,{html:k})]})]}),e("div",{className:"controls",children:y&&$||H?e(Xr,{disabled:S||!g||H,isWaiting:S||H,attempt_number:C,onClick:()=>{_(j(a.id)),F||O(!0)},willContinue:!F}):e(en,{onClick:()=>N(b-1),canUpdateCurrentStep:q})})]})}):null]})}),rn={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},nn=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},on=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},an=(e,t,r=5)=>{r>0&&(on(e).length||nn(e).length)?setTimeout(()=>{an(e,t,r-1)},200):t()},ln=(e,t)=>new Promise(r=>{(function(e,t){const r=on(e);t.MathJax.Hub.Queue(((e,t)=>()=>{x(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=nn(e);x(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{an(e,r)})}),sn=w((e,t)=>g(ln,100,{leading:!0,trailing:!1}).bind(null,e,t));sn.cache=new v;const dn=f((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(rn),e.MathJax.Hub.processSectionDelay=0,r()):(rn.AuthorInit=r,e.MathJax=rn)}));let cn,pn,un,mn,hn,bn=e=>e;const gn=u.div(cn||(cn=bn`
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
`),ye.palette.light,"2rem","2rem",ye.palette.neutral,ye.palette.neutralDarker,ye.palette.neutralDarker,e=>!e.desktop&&m(pn||(pn=bn`
    ${0}
    ${0}
  `),Se(un||(un=bn`
      display: none;
    `)),Ce(mn||(mn=bn`
      display: none;
    `))),e=>e.mobile&&$e(hn||(hn=bn`
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
  `),ye.palette.neutral,ye.palette.light)),fn=({icons:r})=>{var n,o;if(!r)return null;const a=Object.values(r),i=a.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),l=a.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),s=null==(n=r.topic)?void 0:n.url,d=null==(o=r.errata)?void 0:o.url;return t(gn,L({},{mobile:i,desktop:l},{children:[s?t("a",{href:s,target:"_blank",children:[e(k,{icon:y}),e("span",{children:"View topic in textbook"})]}):null,d?t("a",{href:d,target:"_blank",children:[e(k,{icon:$}),e("span",{children:"Suggest a correction"})]}):null]}))};let wn,xn,vn,kn,yn,$n,Cn,Sn,_n,Nn=e=>e;const qn=u.div(wn||(wn=Nn`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),ye.palette.mediumBlue,e=>!e.desktop&&m(xn||(xn=Nn`
    ${0}
    ${0}
  `),Se(vn||(vn=Nn`
      display: none;
    `)),Ce(kn||(kn=Nn`
      display: none;
    `))),e=>!e.mobile&&$e(yn||(yn=Nn`
    display: none;
  `))),An=u.div($n||($n=Nn`
  position: relative;
  display: flex;
`)),zn=u.div(Cn||(Cn=Nn`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`),_e.popover),Mn=r=>e(qn,L({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(An,{children:[r.children,t(zn,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),En=u.div(Sn||(Sn=Nn`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),In=u(k)(_n||(_n=Nn`
  color: ${0};
  height: 1em;
`),ye.palette.darkGray),Tn=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},o=[],a=t.questions.every(e=>e.answers.length>0);let i;var l,s,d;return a&&t.questions.find(e=>e.formats.includes("free-response"))?i="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":a&&(i="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&o.push(e(Mn,L({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(l=r.topic.location)?void 0:l.header)||n,{children:e(In,{icon:A})}),"topic")),r.errata&&o.push(e(Mn,L({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(s=r.errata.location)?void 0:s.header)||n,{children:e(In,{icon:z})}),"errata")),r.info&&i&&o.push(e(Mn,L({text:i},(null==(d=r.info.location)?void 0:d.header)||n,{children:e(In,{icon:M,height:"16px",width:"16px"})}),"type")),e(En,{children:o})};let Fn;const Ln=m(Fn||(Fn=(e=>e)`
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
`),ye.card.header.background,ye.card.header.background,ye.palette.white,ye.palette.neutralDarker),Hn=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons","overlayChildren","labelAnswers","previewMode","showScoring","onGradingSave"];let On,Dn,jn,Pn,Rn,Bn,Qn,Vn,Jn,Un,Gn=e=>e;const Wn=u(lt)(On||(On=Gn`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),Yn=h(Dn||(Dn=Gn`
  :root {
    --content-text-scale: 1;
  }
`)),Zn=u.div(jn||(jn=Gn`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&m(Pn||(Pn=Gn`
    ${0}
    ${0}
    ${0}
  `),Se(Rn||(Rn=Gn`
      ${0} {
        margin-left: 6.8rem;
      }
    `),Wn),Ce(Bn||(Bn=Gn`
      ${0} {
        margin-left: 4.8rem;
      }
    `),Wn),$e(Qn||(Qn=Gn`
      ${0} {
        margin-left: 0;
      }
    `),Wn)),e=>e.mobileToolbarEnabled&&m(Vn||(Vn=Gn`
    ${0}
  `),$e(Jn||(Jn=Gn`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),gn,tt,et))),Kn=r=>t(Zn,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(fn,{icons:r.exerciseIcons}),e(Wn,L({overlayChildren:r.overlayChildren},r))]}),Xn=({exercise:n})=>t(r,{children:[n.context&&e(ne,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(ne,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),eo=u(r=>{let{numberOfQuestions:n,questionNumber:a,step:i,exercise:l,show_all_feedback:s,scrollToQuestion:d,exerciseIcons:p,overlayChildren:u,labelAnswers:m=!0,previewMode:h=!1,showScoring:g=!1,onGradingSave:f}=r,w=H(r,Hn);const x="feedback_html"in i,v=o.useRef([]),k=o.useRef(null),[y,$]=o.useState("questionStates"in w?w.questionStates:{}),C=o.useCallback(()=>{k.current&&(async(e,t=window)=>{await dn(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?sn(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(k.current)},[]);o.useEffect(()=>{const e=d&&v.current[d];e&&b(e)},[d,l]);const S=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),_=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile}),N="questionStates"in w?w.questionStates:void 0;o.useEffect(()=>{N&&$(N)},[N]);const{totalScoring:q,isGraded:A}=o.useMemo(()=>{const e={score:0,maxScore:0};let t=!0;for(const n of l.questions){var r;const o=null==(r=y[n.id])?void 0:r.score;if(void 0===(null==o?void 0:o.raw)||null==o||!o.max){t=!1;break}e.score+=o.raw,e.maxScore+=o.max}return{totalScoring:e,isGraded:t}},[l.questions,y]);return t(R.Provider,{value:C,children:[e(Yn,{}),e(Kn,L({step:i,questionNumber:a,numberOfQuestions:x?n:l.questions.length,rightHeaderChildren:p?e(Tn,{exercise:l,icons:p}):null,showTotalQuestions:x,desktopToolbarEnabled:S,mobileToolbarEnabled:_},p?{exerciseIcons:p}:null,{className:w.className,showScoring:g,isGraded:A,totalScoring:x&&"scoring"in i?i.scoring:q,overlayChildren:u,children:t("div",{ref:k,children:[e(Xn,{exercise:l}),l.questions.map((e,t)=>{var r;const n=L({},x?i:w.questionStates[e.id]);if(1===e.formats.length&&e.formats.includes("free-response")){var o,d;const r={short:30,medium:100,long:1e3},i=null==(o=l.tags)||null==(d=o.find(e=>e.startsWith("response-size:")))?void 0:d.split(":")[1];return c(Hr,L({},w,n,{available_points:void 0,ref:e=>v.current[a+t]=e,key:e.id,question:e,questionNumber:a+t,wordLimit:i&&r[i]||100,cancelHandler:()=>{},previewMode:h,onGradingSave:h?f:void 0}))}return c(tn,L({},w,n,{available_points:void 0,ref:e=>v.current[a+t]=e,exercise_uid:l.uid,key:e.id,question:e,questionNumber:a+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:s,labelAnswers:m,tableFeedbackEnabled:s&&!x,canUpdateCurrentStep:"canUpdateCurrentStep"in w?w.canUpdateCurrentStep:!(t+1===l.questions.length),previewMode:h}))})]})}))]})})(Un||(Un=Gn`
  ${0}
`),Ln),to=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let ro,no,oo,ao,io,lo,so,co,po,uo,mo,ho,bo,go=e=>e;const fo=u.nav(ro||(ro=go`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),$e(no||(no=go`
    padding: 1.6rem 0.8rem;
  `))),wo=u.span(oo||(oo=go`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),xo="box-shadow: 0px 1px 4px 0px #00000066;",vo=u.button(uo||(uo=go`
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
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",ye.palette.neutralDarker,e=>e.isActive?m(mo||(mo=go`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),xo):null,e=>(e=>{switch(e){case"isStatus":return m(ao||(ao=go`
        color: ${0};
        background-color: ${0};
      `),ye.palette.white,ye.palette.neutralDarker);case"isCorrect":return m(io||(io=go`
        color: ${0};
        background-color: #E8F4D8;
      `),ye.answer.correct);case"isIncorrect":return m(lo||(lo=go`
        color: ${0};
        background-color: #F8E8EA;
      `),ye.answer.incorrect);case"isIncomplete":return m(so||(so=go`
        background-color: ${0};
      `),ye.palette.neutralBright);case"isPartialCredit":return m(co||(co=go`
        color: ${0};
        background-color: ${0};
      `),ye.answer.partialCredit,ye.palette.yellow);default:return m(po||(po=go`
        background-color: ${0};
      `),ye.palette.neutralLight)}})(e.variant),xo),ko=u(k)(ho||(ho=go`
  color: ${0};
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  font-size: 1.2rem;
  border-radius: 50%;
`),e=>e.color),yo=u.button(bo||(bo=go`
  background-color: ${0};
  border: 0.2rem solid ${0};
  position: absolute;
  top: 0.1rem;
  left: ${0};
  height: 1rem;
  width: 1rem;
  padding: 0.2rem;
  border-radius: 80%;
`),ye.palette.mediumBlue,ye.palette.white,e=>e.isActive?"3.8rem":"3.2rem"),$o=({variant:t})=>{if("isStatus"===t)return null;const r="0.1rem",n={isCorrect:{icon:E,background:ye.answer.correct,color:ye.palette.white,padding:r,label:"Correct"},isIncorrect:{icon:I,background:ye.answer.incorrect,color:ye.palette.white,padding:r,label:"Incorrect"},isIncomplete:{icon:C,background:ye.answer.neutral,color:ye.palette.white,padding:r,label:"Incomplete"},isPartialCredit:{icon:S,background:ye.answer.partialCredit,color:ye.palette.white,padding:"0.1rem 0.1rem 0.1rem 0.2rem",label:"Partial credit"},null:{icon:T,background:ye.answer.neutral,color:ye.answer.neutralDark,padding:r,label:"Not yet graded"}}[String(t)];return n?e(ko,{icon:n.icon,color:n.color,style:{background:n.background,padding:n.padding},height:"16px",width:"16px","aria-label":n.label,"aria-hidden":void 0}):null},Co=({index:r,isActive:n,step:o,goToStep:a})=>t(wo,{children:[o.hasFeedback&&o.variant&&"isStatus"!==o.variant?e(yo,{isActive:n,"aria-label":`Question ${r+1} - Feedback`}):null,e(vo,{variant:o.variant,isActive:n,onClick:()=>a(r,o),"aria-current":n?"location":"false","aria-label":"isStatus"===o.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===o.variant?e(to,{}):r+1}),e($o,{variant:o.variant})]}),So=({steps:t,activeIndex:r,goToStep:n})=>e(fo,{"aria-label":"Breadcrumbs",children:t.map((t,o)=>e(Co,{index:o,isActive:o===r,step:t,goToStep:n},o))});let _o;const No=u.div(_o||(_o=(e=>e)`
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
`),ye.palette.light),qo=()=>e(No,{children:e(F,{uniqueKey:"OSLoader"})});let Ao,zo,Mo,Eo=e=>e;const Io=u.div(Ao||(Ao=Eo`
  display: flex;
  width: fit-content;
`)),To=u.button(zo||(zo=Eo`
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
`),ye.palette.mediumBlue,ye.palette.orange,ye.palette.neutralDarker),Fo=u(k)(Mo||(Mo=Eo`
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
`),ye.palette.white,ye.palette.mediumBlue,ye.palette.orange,ye.palette.neutralDarker),Lo=({buttonVariant:r,onIncludeHandler:n,onRemoveHandler:a,onClickDetails:i})=>{const l=o.useMemo(()=>"include"===r?_:N,[r]);return t(Io,{children:[t(To,{className:r,onClick:()=>(e=>{switch(e){case"include":n();break;case"remove":a()}})(r),"aria-label":r,children:[e(Fo,{className:r,icon:l,"aria-label":r+" question",border:!0,size:"lg"}),e("span",{children:(s=r,s.charAt(0).toUpperCase()+s.slice(1)+" question")})]}),t(To,{className:"details","aria-label":"details",onClick:i,children:[e(Fo,{className:"details",icon:q,border:!0,size:"lg"}),e("span",{children:"Details"})]})]});var s};let Ho;const Oo=u(eo)(Ho||(Ho=(e=>e)`
  .step-card-footer {
    display: none;
  }
  ${0}
`),({showCorrectAnswer:e})=>!e&&"\n    .answer-answer {\n      font-weight: normal;\n    }\n  "),Do=({exercise:t,selected:r,showAllFeedback:n=!1,showChosenAnswer:o=!1,showCorrectAnswer:a=!1,labelAnswers:i=!1,showScoring:l=!1,overlayChildren:s,questionStates:d,onGradingSave:c})=>e(Oo,L({exercise:n?t:(e=>(e.questions.map(e=>e.answers.map(e=>{e.feedback_html="",e.correctness=a?e.correctness:void 0})),e))(t),className:"preview-card "+(r?"is-selected":""),previewMode:!0,showScoring:l,overlayChildren:s},(e=>{const t=(r=e.questions,r.map(e=>{var t,r,a,i,l;return{id:e.id,answer_id:null!=(t=null==(r=o?(null!=d?d:{})[e.id]:void 0)?void 0:r.answer_id)?t:"",correct_answer_id:(null==(a=e.answers.find(e=>"1.0"===e.correctness))?void 0:a.id)||"",content_html:n&&(null==(i=e.collaborator_solutions)||null==(l=i.find(e=>"detailed"===e.solution_type))?void 0:l.content_html)}})).reduce((e,t)=>{const{id:r,answer_id:n,correct_answer_id:o,content_html:i}=t,l=(null!=d?d:{})[r];return L({},e,{[r]:{answer_id:n,correct_answer_id:o,is_completed:a,canAnswer:!a,solution:{content_html:i},score:null==l?void 0:l.score,free_response:(null==l?void 0:l.free_response)||"",feedback_html:(null==l?void 0:l.feedback_html)||"",gradingTimestamp:null==l?void 0:l.gradingTimestamp}})},{});var r;return{canAnswer:!0,needsSaved:!0,hasMultipleAttempts:!1,hasUnlimitedAttempts:!1,onAnswerChange:()=>{},onAnswerSave:()=>{},onNextStep:()=>{},apiIsPending:!1,canUpdateCurrentStep:!1,step:{id:1,uid:e.uid,available_points:"1.0"},questionNumber:e.number,numberOfQuestions:e.questions.length,questionStates:t,labelAnswers:i,show_all_feedback:n}})(t),{onGradingSave:c}));let jo,Po,Ro,Bo,Qo,Vo,Jo,Uo,Go,Wo,Yo,Zo,Ko,Xo,ea=e=>e;const ta=u.div(jo||(jo=ea`
  border-bottom: 1px solid ${0};

  &:last-child {
    border-bottom: none;
  }
`),ye.palette.neutralLight),ra=u.button(Po||(Po=ea`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.2rem 1.6rem;
  background: none;
  border: none;
  cursor: pointer;
  gap: 1rem;
  text-align: left;
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${0};

  &:hover {
    background-color: ${0};
  }
`),ye.palette.neutralDarker,ye.palette.neutralLightest),na=u.span(Ro||(Ro=ea`
  font-weight: 600;
  flex: 1;
`)),oa=u.span(Bo||(Bo=ea`
  font-size: calc(1.3rem * var(--content-text-scale));
  color: ${0};
  white-space: nowrap;

  strong {
    font-weight: 700;
    color: ${0};
  }
`),ye.palette.neutralThin,ye.palette.neutralDarker),aa=u.span(Qo||(Qo=ea`
  display: inline-block;
  width: 0;
  height: 0;
  flex-shrink: 0;
  ${0}
`),({expanded:e})=>e?`\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-top: 6px solid ${ye.palette.neutralDark};\n    `:`\n      border-top: 5px solid transparent;\n      border-bottom: 5px solid transparent;\n      border-left: 6px solid ${ye.palette.neutralDark};\n    `),ia=u.div(Vo||(Vo=ea`
  display: flex;
  align-items: flex-start;
  border-top: 1px solid ${0};
`),ye.palette.neutralLighter),la=u.div(Jo||(Jo=ea`
  flex: 1;
  padding: 1.6rem;
  min-width: 0;
`)),sa=u.div(Uo||(Uo=ea`
  border-left: 16px solid ${0};
  padding-left: 1.6rem;
  margin: 0 0 1rem 1rem;
  max-height: ${0};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${0};
  white-space: pre-wrap;

  ${0}
`),ye.palette.neutralLighter,({expanded:e})=>e?"none":"16.8rem",ye.palette.neutralDark,({expanded:e,isOverflowing:t})=>!e&&t?m(Go||(Go=ea`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `)):""),da=u.p(Wo||(Wo=ea`
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${0};
  margin: 0 0 1rem 0;
`),ye.palette.neutralThin),ca=u.button(Yo||(Yo=ea`
  display: inline;
  background: none;
  border: none;
  color: ${0};
  padding: 0;
  margin: 0 0 0 1rem;
  cursor: pointer;
  font-size: calc(1.3rem * var(--content-text-scale));
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`),ye.palette.blue),pa=u.div(Zo||(Zo=ea`
  margin-top: 1.6rem;
`)),ua=u.div(Ko||(Ko=ea`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${0};
`),ye.palette.neutralDarker),ma=u.div(Xo||(Xo=ea`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${0};
  white-space: pre-wrap;
  margin-top: 0.4rem;

  .feedback-label {
    font-weight: bold;
  }
`),ye.palette.neutralDarker),ha=({student:n,freeResponse:o,questionId:i,maxScore:s,score:c,comment:p,onSave:u,disabled:m,gradingTimestamp:h,expanded:b,onToggle:g})=>{const f=void 0!==b,w=void 0!==c,[x,v]=l(!w),[k,y]=l(!1),[$,C]=l(!1),S=a(null),_=f?b:x;return d(()=>{S.current&&C(!k&&S.current.scrollHeight>168)},[o,k,_]),t(ta,{children:[t(ra,{type:"button",onClick:()=>{f?null==g||g():v(e=>!e)},"aria-expanded":_,children:[e(aa,{expanded:_}),e(na,{children:n.name}),t(oa,{children:[e("strong",{children:"Points:"})," ",w?c:"--"," out of ",s]})]}),t(ia,{style:{display:_?void 0:"none"},children:[t(la,{children:[o?t(r,{children:[e(sa,{ref:S,expanded:k,isOverflowing:$,children:o}),($||k)&&e(ca,{type:"button",onClick:()=>y(e=>!e),children:k?"read less":"read more"})]}):e(da,{children:"Unanswered"}),w&&t(pa,{children:[t(ua,{children:["Score: ",c,"/",s]}),p&&t(ma,{children:[e("span",{className:"feedback-label",children:"Comment:"})," ",p]})]})]}),e(or,{questionId:i,maxScore:s,score:c,comment:p,onSave:u,disabled:m,gradingTimestamp:h})]})]})};let ba,ga,fa,wa,xa,va,ka,ya,$a,Ca,Sa,_a,Na=e=>e;const qa=u.div(ba||(ba=Na`
  border: 1px solid ${0};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
`),ye.palette.neutralLight),Aa=u.div(ga||(ga=Na`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  background-color: ${0};
`),ye.card.header.background),za=u.button(fa||(fa=Na`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
`)),Ma=u.span(wa||(wa=Na`
  font-size: calc(1.6rem * var(--content-text-scale));
  font-weight: 600;
  color: ${0};
  margin: 0;
`),ye.palette.neutralDarker),Ea=u.span(xa||(xa=Na`
  font-size: calc(1.3rem * var(--content-text-scale));
  font-weight: 600;
  color: ${0};
  background-color: ${0};
  border-radius: 5px;
  padding: 0.2rem 0.8rem;
`),ye.palette.white,ye.palette.darkGray),Ia=u.span(va||(va=Na`
  font-weight: normal;
  margin: 0 0.4rem;
`)),Ta=u.span(ka||(ka=Na`
  font-weight: normal;
  font-size: calc(1.4rem * var(--content-text-scale));
`)),Fa=u.button(ya||(ya=Na`
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${0};
  padding: 0;
  text-decoration: underline;

  &:hover {
    color: ${0};
  }
`),ye.palette.blue,ye.palette.mediumBlue),La=u.div($a||($a=Na`
  padding: 1.6rem 1.6rem 0;
  background-color: ${0};
`),ye.card.body.background),Ha=u.div(Ca||(Ca=Na`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${0};
`),ye.palette.neutralDarker),Oa=u.div(Sa||(Sa=Na`
  padding: 0.8rem 1.6rem 1.2rem;
  border-bottom: 1px solid ${0};
  background-color: ${0};
`),ye.palette.neutralLight,ye.card.body.background),Da=u.div(_a||(_a=Na`
  background-color: ${0};
`),ye.card.body.background),ja=({questionNumber:n,questionStemHtml:o,students:a,questionId:i})=>{const[s,d]=l(!0),[c,p]=l(()=>(e=>{const t=new Set;return e.forEach(e=>{void 0===e.score&&t.add(String(e.student.userId))}),t})(a)),u=a.filter(e=>void 0!==e.score).length,m=a.every(e=>c.has(String(e.student.userId)));return t(qa,{children:[t(Aa,{children:[t(za,{type:"button",onClick:()=>d(e=>!e),"aria-expanded":s,children:[e(aa,{expanded:s}),t(Ma,{children:["Question ",n,i&&t(r,{children:[e(Ia,{children:"|"}),t(Ta,{children:["ID: ",i]})]})]})]}),t(Ea,{children:[u,"/",a.length," Graded"]})]}),t("div",{style:{display:s?void 0:"none"},children:[e(La,{children:e(Ha,{children:e(ne,{html:o,block:!0})})}),e(Oa,{children:e(Fa,{type:"button",onClick:e=>{e.stopPropagation(),p(m?new Set:new Set(a.map(e=>String(e.student.userId))))},children:m?"Collapse all answers":"Expand all answers"})}),e(Da,{children:a.map(t=>{const r=String(t.student.userId);return e(ha,L({},t,{expanded:c.has(r),onToggle:()=>{return e=r,void p(t=>{const r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r});var e}}),r)})})]})]})};let Pa,Ra,Ba=e=>e;const Qa=u.div(Pa||(Pa=Ba`
  display: flex;
  flex-direction: column;
`)),Va=u.div(Ra||(Ra=Ba`
  padding: 4rem 0;
  text-align: center;
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${0};
`),ye.palette.neutralThin),Ja=({questions:t})=>e(Qa,{children:0===t.length?e(Va,{children:"All responses have been graded."}):t.map((t,r)=>e(ja,L({},t),r))});export{Te as Answer,Le as AnswersTable,aa as ChevronIcon,_t as CompletionStatus,eo as Exercise,Do as ExercisePreview,fn as ExerciseToolbar,Hr as FreeResponseInput,Wr as FreeResponseReview,Sr as FreeResponseTextArea,Lo as IncludeRemoveQuestion,et as InnerStepCard,qo as Loader,ja as NeedsGradingQuestion,Ja as NeedsGradingQueue,ha as NeedsGradingStudentRow,tt as OuterStepCard,So as ProgressBar,Co as ProgressBarItem,Et as Question,It as QuestionHtml,it as StepCard,vo as StyledItem,at as StyledOverlay,gn as StyledToolbar,lt as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
