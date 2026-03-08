import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime.js";import n from"classnames";import o,{useRef as i,useEffect as a,useState as l,useCallback as s,useLayoutEffect as d,createElement as c}from"react";import{createPortal as p}from"react-dom";import u,{css as m,createGlobalStyle as h}from"styled-components";import b from"scroll-to-element";import{debounce as g,once as f}from"lodash";import{memoize as w,isEmpty as x}from"lodash/fp.js";import v from"weak-map";import{FontAwesomeIcon as k}from"@fortawesome/react-fontawesome";import{faBookOpen as y,faTriangleExclamation as $,faQuestion as C,faP as S,faPlus as _,faMinus as N,faEllipsisH as q}from"@fortawesome/free-solid-svg-icons";import{faBookOpen as A}from"@fortawesome/free-solid-svg-icons/faBookOpen";import{faTriangleExclamation as M}from"@fortawesome/free-solid-svg-icons/faTriangleExclamation";import{faCircleInfo as E}from"@fortawesome/free-solid-svg-icons/faCircleInfo";import{faCheck as z}from"@fortawesome/free-solid-svg-icons/faCheck";import{faXmark as I}from"@fortawesome/free-solid-svg-icons/faXmark";import{faCircle as T}from"@fortawesome/free-solid-svg-icons/faCircle";import{BulletList as F}from"react-content-loader";function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(this,arguments)}function H(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}const O="ABCDEFGHIJKLMNOPQRSTUVWXYZ",j=(e,t)=>e.id===t,P=e=>"string"==typeof e?parseInt(e,10):e,D=e=>new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0}),R=o.createContext(()=>{throw new Error("context not initialized")});let B,Q,J,V,U,G=e=>e;const W=u.div(B||(B=G`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
`)),Z=u.div(Q||(Q=G`
  background: white;
  max-width: 100vw;
  max-height: calc(100vh - ${0}rem);
  overflow: auto;

  > img {
    ${0}
    display: block;
  }
`),10.4,""),Y=u.button(J||(J=G`
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
`),4.7,.5,4.2,4.2),K=u.div(V||(V=G`
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
`)),ee=()=>t("svg",{width:"42",height:"42",viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg",children:[e("rect",{x:"1",y:"1",width:"40",height:"40",rx:"20",stroke:"white",fill:"none"}),e("line",{x1:"16",y1:"16",x2:"26",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),e("line",{x1:"26",y1:"16",x2:"16",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]}),te=({isOpen:r,onClose:n,children:o})=>{const l=i(null);return a(()=>{if(!r||!l.current)return;const e=["button:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),t=l.current.querySelectorAll(e),n=t[0],o=t[t.length-1];null==n||n.focus();const i=e=>{if("Tab"!==e.key)return;const t=document.activeElement,r=e.shiftKey;r&&t===n?(e.preventDefault(),null==o||o.focus()):r||t!==o||(e.preventDefault(),null==n||n.focus())};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[r]),r?e(W,{onClick:n,children:e(X,{"aria-modal":"true",role:"dialog",children:t(K,{ref:l,onClick:e=>e.stopPropagation(),tabIndex:-1,children:[e(Y,{onClick:n,"aria-label":"Close media preview",children:e(ee,{})}),e(Z,{children:o})]})})}):null},re=["html","component","block"],ne=n=>{let{html:l,component:s,block:d=!1}=n,c=H(n,re);const u=o.useContext(R),m=i(null),h=d?"div":"span",b=function(){const{open:t,MediaModalPortal:r}=function(){let t=null;return{open:e=>{null==t||t(e)},MediaModalPortal:()=>{const[r,n]=o.useState(!1),[i,l]=o.useState(null);return a(()=>(t=e=>{l(e),n(!0)},()=>{t=null}),[]),a(()=>{if(!r||"undefined"==typeof document)return;const e=e=>{"Escape"!==e.key&&"Esc"!==e.key||n(!1)},t=document;return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}},[r]),p(e(te,{isOpen:r,onClose:()=>n(!1),children:i}),document.body)}}}(),{mount:n,unmount:i}=function(t){let r=null;const n=function(t){return r=>{const n=r.target.closest("button.image-button-wrapper");if(!n)return;if("keydown"===r.type){const e=r.key;if("Enter"!==e&&" "!==e)return;r.preventDefault()}const o=n.querySelector("img");o&&t(e("img",{tabIndex:0,src:o.src,alt:o.alt||"",width:o.width,height:o.height}))}}(t),o=()=>{r&&(r.removeEventListener("click",n),r.removeEventListener("keydown",n))};return{mount:e=>{r!==e&&(o(),r=e),r&&(r.addEventListener("click",n),r.addEventListener("keydown",n))},unmount:()=>{o(),r=null}}}(t);return{open:t,MediaModalPortal:r,mount:n,unmount:i}}(),g=b.MediaModalPortal;return a(()=>{const e=m.current;if(e)return u(),e.querySelectorAll("img").forEach(e=>{var t;if(e.closest("button"))return;const r=document.createElement("button");r.type="button";const n=e.getAttribute("alt");r.setAttribute("aria-label",n?`Click to enlarge image of ${n}`:"Click to enlarge this image"),r.classList.add("image-button-wrapper"),null==(t=e.parentElement)||t.insertBefore(r,e),r.appendChild(e)}),b.mount(e),()=>{b.unmount()}},[d,b,u]),void 0!==s?o.cloneElement(s,L({html:l},c)):t(r,{children:[e(h,L({ref:m,dangerouslySetInnerHTML:{__html:l}},c)),e(g,{})]})},oe=["id"],ie=t=>e("aside",{children:e(ne,{component:t.contentRenderer,className:n("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),ae=r=>{let{id:o}=r,i=H(r,oe);const a=n("question-feedback",i.position||"bottom");return t("aside",{id:o,className:a,children:[e("div",{className:"arrow","aria-label":"Answer Feedback"}),e(ie,L({},i,{children:i.children}))]})};let le,se,de,ce,pe,ue,me,he,be,ge,fe,we,xe,ve=e=>e;const ke={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C",yellow:"#FEDE9F"},ye={palette:ke,answer:{neutral:ke.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032",partialCredit:"#976502",neutralDark:"#5f6163"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:ke.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:ke.neutralDarker,background:ke.neutralLighter}},$e=(...e)=>m(le||(le=ve`@media(max-width: ${0}px) { ${0} }`),600,m(...e)),Ce=(...e)=>m(se||(se=ve`@media(max-width: ${0}px) { ${0} }`),999,m(...e)),Se=(...e)=>m(de||(de=ve`@media(min-width: ${0}px) { ${0} }`),1e3,m(...e)),_e={answer:()=>m(pe||(pe=ve`
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
`),e=>e.state?ye.answer.correct:ye.answer.incorrect),Ae=({hasCorrectAnswer:t,isCorrect:r,isIncorrect:n,isSelected:o})=>r||n||o&&t?e(qe,{state:!!r,children:e("span",{children:(r?"Correct":"Incorrect")+" Answer"})}):null,Me=r=>{const{answer:{content_html:n,feedback_html:o},contentRenderer:i,labelAnswers:a,show_all_feedback:l,tableFeedbackEnabled:s,hasCorrectAnswer:d,isCorrect:c,isIncorrect:p,isSelected:u}=r;return t("div",{className:"answer-answer",role:"status","aria-live":"polite","aria-atomic":"true",children:[!1!==a&&e(Ae,{hasCorrectAnswer:d,isCorrect:c,isIncorrect:p,isSelected:u}),e(ne,{className:"answer-content",component:i,html:n}),l&&o&&!s&&e(ie,{contentRenderer:i,children:o},"question-mc-feedback")]})},Ee=r=>{const{answer:o,answered_count:i,isCorrect:a,contentRenderer:l,iter:s,show_all_feedback:d,tableFeedbackEnabled:c}=r,p=o.selected_count&&i?Math.round(o.selected_count/i*100):0;return t("div",{className:"review-wrapper",children:[t("div",{className:n("review-count",{green:a,red:!a}),children:[e("span",{className:"selected-count","data-percent":`${p}`,children:o.selected_count}),e("span",{className:n("letter",{green:a,red:!a}),children:O[s]})]}),e(Me,{answer:o,contentRenderer:l,show_all_feedback:d,tableFeedbackEnabled:c})]})},ze=n=>{const{type:o,iter:i,answer:a,disabled:l,onKeyPress:s,qid:d,contentRenderer:c,correctIncorrectIcon:p,feedbackId:u,isSelected:m,isCorrect:h,isIncorrect:b,hasCorrectAnswer:g,show_all_feedback:f,tableFeedbackEnabled:w,labelAnswers:x=!0}=n,v=`${m?"Selected ":""}Choice ${O[i]}:`;let k;return g||"teacher-review"===o||"teacher-preview"===o||"student-mpp"===o||({onChangeAnswer:k}=n),t(r,{children:["teacher-preview"===o&&e("div",{className:"correct-incorrect",children:h&&p}),e("input",{type:"radio",className:"answer-input-box",checked:m,id:`${d}-option-${i}`,name:`${d}-options`,onChange:()=>k&&k(a),disabled:l||!k,"aria-details":u}),t("label",{onKeyPress:s,htmlFor:`${d}-option-${i}`,className:"answer-label",children:[e("span",{className:"answer-letter-wrapper","aria-label":v,"data-answer-choice":O[i],"data-test-id":`answer-choice-${O[i]}`}),e(Me,{answer:a,contentRenderer:c,labelAnswers:x,show_all_feedback:f,tableFeedbackEnabled:w,hasCorrectAnswer:g,isCorrect:h,isIncorrect:b,isSelected:m})]})]})},Ie=t=>e("teacher-review"===t.type?Ee:ze,L({},t)),Te=t=>{const{type:r,answer:o,disabled:i,answerId:a,correctAnswerId:l,incorrectAnswerId:s}=t,d=((e,t)=>e.id==t)(o,a),c=function(e,t){if(!e.id&&!t)return e.isCorrect;let r=e.id===t;return null!=e.correctness&&(r="1.0"===e.correctness),r}(o,l),p=j(o,s),u=d||void 0===a&&(!s&&c||p),m=n("answers-answer",{disabled:i,"answer-selected":u,"answer-correct":c&&"student-mpp"!==r,"answer-incorrect":s&&j(o,s)});return e("div",{className:"openstax-answer",children:e("section",{className:m,children:e(Ie,L({},t,{isCorrect:c,isSelected:u,isIncorrect:p}))})})};Te.displayName="OSAnswer";const Fe="student",Le=r=>{let n=0;const{question:o,hideAnswers:i,type:a=Fe,answered_count:l,choicesEnabled:s,correct_answer_id:d,incorrectAnswerId:c,answer_id:p,feedback_html:u,correct_answer_feedback_html:m,previewMode:h,labelAnswers:b,show_all_feedback:g=!1,tableFeedbackEnabled:f,hasCorrectAnswer:w,onChangeAnswer:x,onKeyPress:v,answerIdOrder:k,instructions:y}=r;if(i)return null;const{id:$}=o,C=[],S={qid:$||"auto-"+n++,answerId:p,correctAnswerId:d,incorrectAnswerId:c,hasCorrectAnswer:w,onChangeAnswer:x,type:a,answered_count:l,disabled:h||!s,labelAnswers:b,show_all_feedback:g,tableFeedbackEnabled:f,onKeyPress:v},_=(k?(e=>{const{answers:t}=o;return t.slice().sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id))})(k):o.answers).map((t,r)=>{const n={answer:L({},t,{question_id:"string"==typeof o.id?parseInt(o.id,10):o.id}),iter:r,key:`${S.qid}-option-${r}`},i=Object.assign({},n,S);let a,l;return g&&t.feedback_html&&f?a=t.feedback_html:t.id===c&&u?a=u:t.id===d&&m&&(a=m),a&&(l=`feedback-${S.qid}-${r}`,C.push({index:r,html:a,id:l})),e(Te,L({feedbackId:l},i))});return C.forEach((t,n)=>{const o=t.index+n+1;_.splice(o,0,e(ae,{id:t.id,contentRenderer:r.contentRenderer,children:t.html},o))}),t("div",L({},h?{}:{role:"radiogroup","aria-label":"Answer choices"},{className:"answers-table",children:[y,_]}))},He=["questionNumber","numberOfQuestions","showTotalQuestions","stepType","isHomework","availablePoints","unpadded","className","children","questionId","multipartBadge","leftHeaderChildren","rightHeaderChildren","headerTitleChildren","overlayChildren","showScoring","totalScoring","isGraded"],Oe=["step","questionNumber","numberOfQuestions","children","className","overlayChildren"];let je,Pe,De,Re,Be,Qe,Je,Ve,Ue,Ge,We,Ze,Ye,Ke,Xe=e=>e;const et=u.div(je||(je=Xe`
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
`),ye.palette.pale,Se(Pe||(Pe=Xe`
    max-width: 1000px;
  `))),tt=u.div(De||(De=Xe`
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
  `)),Ce(Je||(Je=Xe`
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
  `),"24px","24px"),$e(Ve||(Ve=Xe`
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
    `)),Se(Ze||(Ze=Xe`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `)),$e(Ye||(Ye=Xe`
        .openstax-exercise-badges svg {
            margin-right: ${0};
        }
    `),"8px")),it=u.div(Ke||(Ke=Xe`
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
`)),at=r=>{var n,o;let{questionNumber:d,numberOfQuestions:c,showTotalQuestions:p,stepType:u,isHomework:m,availablePoints:h,unpadded:b,className:g,children:f,questionId:w,multipartBadge:x,leftHeaderChildren:v,rightHeaderChildren:k,headerTitleChildren:y,overlayChildren:$,showScoring:C,totalScoring:S,isGraded:_}=r,N=H(r,He);const q=i(null),[A,M]=l(!1),E=c>1?`Questions ${d} - ${d+c-1}`:`Question ${d}`,z=s(()=>{M(!0)},[]),I=s(()=>{var e;Array.from((null==(e=document.getElementById("step-card"))?void 0:e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||[]).forEach(e=>{e.setAttribute("tabindex","-1")})},[]);return a(()=>{const e=q.current;return e&&$&&(e.addEventListener("focus",z),I()),()=>{null==e||e.removeEventListener("focus",z)}},[$,q,z,I]),t(tt,L({},N,{children:[x,e(et,{className:g,children:t("div",L({ref:q},$?{onMouseOver:()=>M(!0),onMouseLeave:()=>M(!1),onBlur:e=>{q.current&&!q.current.contains(e.relatedTarget)&&M(!1)},tabIndex:0}:{},{children:[$&&A&&e(it,{id:"overlay-element",children:$}),t("div",{id:"step-card",children:[d&&m&&"exercise"===u&&t(rt,{className:"step-card-header",children:[t("div",{children:[v,t("h2",{className:"question-info",children:[y,e("span",{children:E}),p?t("span",{className:"num-questions",children:[" / ",c]}):null,e("span",{className:"separator",children:"|"}),t("span",{className:"question-id",children:["ID: ",w]})]})]}),C&&e("div",{className:"scoring",children:_?t("span",{children:[null==S||null==(n=S.score)?void 0:n.toFixed(1),"/",null==S||null==(o=S.maxScore)?void 0:o.toFixed(1),null!=S&&S.maxScore&&S.maxScore>1.1?" points":" point"]}):e(nt,{children:e("span",{children:"ungraded"})})}),h||k?t("div",{children:[h&&t("div",{className:"points",children:[h," Points"]}),k]}):null]}),e(ot,{unpadded:b,children:f})]})]}))})]}))};at.displayName="OSStepCard";const lt=t=>{let{step:r,questionNumber:o,numberOfQuestions:i,children:a,className:l,overlayChildren:s}=t,d=H(t,Oe);return e(at,L({},d,{unpadded:!0,questionNumber:o,numberOfQuestions:i,stepType:"type"in r?r.type:"exercise",isHomework:!("task"in r)||void 0===r.task||"homework"===r.task.type,"data-task-step-id":r.id,className:n(`${"type"in r?r.type:"exercise"}-step`,l),questionId:r.uid,overlayChildren:s,children:a}))};lt.displayName="OSTaskStepCard";const st=["disabled","isWaiting","waitingText","children"];let dt;const ct=u.button(dt||(dt=(e=>e)`
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
`),ye.button.background,ye.palette.white,ye.button.backgroundHover,ye.button.backgroundActive),pt=t=>{const{disabled:r,isWaiting:n,waitingText:o,children:i}=t,a=H(t,st);return e(ct,L({},a,{disabled:n||r,children:n&&o||i}))};let ut,mt,ht,bt,gt,ft,wt,xt=e=>e;const vt=h(ut||(ut=xt`
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
`),ye.palette.white,ye.palette.black,ye.palette.pale,ye.palette.neutralBright,ye.palette.black,ye.palette.pale,ye.palette.neutralLight,ye.palette.black,ye.palette.pale),_t=u(({numberOfQuestions:n,numberCompleted:o,handleContinue:i,handleNext:a,className:l,score:s,handleRetry:d,isRetrying:c})=>{var p,u;const m=n===o,h=o>0,b=m||0===o&&d||h&&d?"Next":h?"Continue":"Start",g=m?"Retry Quiz":"Resume Quiz",f=m?d:i,w=m||d?a:i;return t(r,{children:[e(vt,{}),t(kt,{className:l,children:[e(yt,{children:m?"You are done.":h?"Quiz is partially complete.":"No questions have been answered."}),d?t("div",{children:[e("p",{children:m?"Attempts for this quiz are unlimited. Your highest score will be saved.":"You are in the middle of a quiz attempt. Attempts for this quiz are unlimited. Your highest score will be saved."}),e(Ct,{children:t("p",{children:[e("b",{children:"Current Score:"})," ",null!=(p=null==s?void 0:s.current)?p:"Score unavailable"," | ",e("b",{children:"Saved Score:"})," ",null!=(u=null==s?void 0:s.saved)?u:"Score unavailable"]})})]}):e("p",{children:m?"Great job answering all the questions.":h?`You've completed ${o} of ${n} questions.`:"Begin working on the quiz."}),t($t,{children:[d?e(St,{"data-test-id":"retry-resume-btn",onClick:f,disabled:c,children:g}):null,e(pt,{"data-test-id":`${b.split(" ")[0].toLowerCase()}-btn`,onClick:w,children:b})]})]})]})})(wt||(wt=xt``));let Nt,qt,At=e=>e;const Mt=u.div(Nt||(Nt=At`
  width: 100%;
`)),Et=u.div(qt||(qt=At`
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
`),_e.stepCardPadding(),ye.palette.pale,ye.palette.neutral,ye.palette.neutralLightBlue,ye.palette.neutralLightest,_e.answer(),"1rem","1rem","0.1s ease-in-out",_e.answerHover(),_e.visuallyHidden(),_e.answerChecked(),ye.answer.checked,_e.answerChecked(),_e.answerIncorrect(!0),_e.answerCorrect(!0),_e.answerCorrect(!1),_e.answerIncorrect(),_e.answerIncorrect(!0),_e.popover(),"370px","0.9rem","1.1rem"),zt=o.forwardRef((r,o)=>{let i,a;const{question:l,correct_answer_id:s,incorrectAnswerId:d,exercise_uid:c,className:p,questionNumber:u,context:m,task:h,hidePreambles:b}=r,{stem_html:g,collaborator_solutions:f=[],formats:w,stimulus_html:x}=l,v=!!s,k=n("openstax-question",p,{"has-correct-answer":v&&!((null!=h?h.is_deleted:void 0)&&"homework"===(null!=h?h.type:void 0)),"has-incorrect-answer":!!d});return null!=c&&(i=e("div",{className:"exercise-uid",children:c})),(()=>{const{displaySolution:e}=r,{collaborator_solutions:t=[]}=l;return e&&t&&t.find(e=>void 0!==e.content_html)})()&&(a=t("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(ne,{className:"solution",block:!0,html:f.map(e=>e.content_html).join("")})]})),e(Et,{ref:o,className:k,"data-question-number":u,"data-test-id":"question",children:e(Mt,{children:t("div",{children:[e(It,{type:"context",html:m,hidden:b}),e(It,{type:"stimulus",html:x,hidden:b}),e(It,{type:"stem",html:g,hidden:b,questionNumber:u}),r.children,e(Le,L({},r,{onChangeAnswer:r.onChange,hasCorrectAnswer:v})),a,r.displayFormats?e(Tt,{formats:w}):void 0,i]})})})}),It=t=>{const{html:r="",type:n,hidden:o,questionNumber:i}=t;return!0!==o&&r.length>0?e(ne,{html:r,"data-question-number":i,className:`question-${n}`,block:!0}):null},Tt=({formats:r=[]})=>t("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),r.map((t,r)=>e("span",{children:t},r))]});let Ft,Lt,Ht,Ot=e=>e;const jt=u.div(Ft||(Ft=Ot`
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
`),_e.stepCardPadding(),ye.card.body.background,ye.palette.pale,$e(Lt||(Lt=Ot`
            flex-wrap: wrap;
        `)),Se(Ht||(Ht=Ot`
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
    `)));let Pt,Dt,Rt,Bt,Qt,Jt,Vt,Ut,Gt=e=>e;const Wt=u.div(Pt||(Pt=Gt`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-left: 1px solid ${0};
  min-width: 300px;
`),ye.palette.neutralLighter),Zt=u.div(Dt||(Dt=Gt`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`)),Yt=u.label(Rt||(Rt=Gt`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${0};
`),ye.palette.neutralDarker),Kt=u.div(Bt||(Bt=Gt`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
`)),Xt=u.input(Qt||(Qt=Gt`
  width: 6rem;
  padding: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
  border: 1px solid ${0};
  border-radius: 4px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: ${0};
  }

  &:disabled {
    background-color: ${0};
    cursor: not-allowed;
  }

`),ye.palette.neutral,ye.palette.blue,ye.palette.neutralLighter),er=u.textarea(Jt||(Jt=Gt`
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
`),ye.palette.neutral,ye.palette.blue,ye.palette.neutralLighter),tr=u.div(Vt||(Vt=Gt`
  display: flex;
`)),rr=u.span(Ut||(Ut=Gt`
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${0};
`),ye.palette.neutralThin),nr=({questionId:r,maxScore:n,score:o,comment:i,onChange:s,onSave:d,disabled:c=!1,gradingTimestamp:p})=>{const[u,m]=l((null==o?void 0:o.toString())||""),[h,b]=l(i||""),[g,f]=l(!1),[w,x]=l(!1),v=void 0!==o;a(()=>{const e=parseFloat(u),t=!isNaN(e)&&e!==o;f(t||h!==(i||""))},[u,h,o,i]),a(()=>{m((null==o?void 0:o.toString())||""),b(i||"")},[o,i]),a(()=>{s&&!isNaN(parseFloat(u))&&s({score:parseFloat(u),comment:h})},[u,h,s]);const k=parseFloat(u),y=!isNaN(k)&&k>=0&&k<=n,$=g&&y&&!c&&!w;return t(Wt,{children:[e(Zt,{children:t(Kt,{children:[e(Yt,{htmlFor:"score-input",children:"Points"}),e(Xt,{id:"score-input",type:"number",value:u,onChange:e=>{m(e.target.value)},disabled:c,min:0,max:n,step:1,placeholder:"0","aria-label":"Score"}),t("span",{children:["out of ",n]})]})}),t(Zt,{children:[e(Yt,{htmlFor:"comment-input",children:"Comment"}),e(er,{id:"comment-input",value:h,onChange:e=>{b(e.target.value)},disabled:c,placeholder:"Enter feedback for the student...","aria-label":"Comment"})]}),e(tr,{children:e(pt,{onClick:async()=>{const e=parseFloat(u);if(!isNaN(e)&&e>=0&&e<=n&&d){x(!0);try{await d(r,{score:e,max:n,comment:h})}finally{x(!1)}}},disabled:!$,children:v?"Update":"Save"})}),p&&t(rr,{children:["Last graded on ",D(p)]})]})};let or,ir,ar,lr,sr,dr,cr,pr,ur,mr,hr,br,gr,fr,wr=e=>e;const xr=u.div(or||(or=wr`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${0}
    padding-bottom: 1rem;
  }
`),_e.stepCardPadding()),vr=u.div(ir||(ir=wr`
  font-size: calc(2rem * var(--content-text-scale));
  line-height: 1.68em;
  position: relative;
`)),kr=u.div(ar||(ar=wr`
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
`),e=>e.hasChildren?"space-between":"flex-end",ye.palette.danger,ye.palette.neutralThin),yr=u.textarea(lr||(lr=wr`
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
`),ye.palette.neutral,ye.palette.neutralDark);yr.displayName="OSFreeResponseTextArea";const $r=u.div(sr||(sr=wr`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${0};
  margin: 2.5rem 0 1rem 0;
`),ye.palette.neutralThin),Cr=u.div(dr||(dr=wr`
  border-left: 16px solid ${0};
  padding-left: 1.6rem;
  margin: 1rem 0 1rem 1rem;
  max-height: ${0};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${0};

  ${0}
`),ye.palette.neutralLighter,({expanded:e})=>e?"none":"16.8rem",ye.palette.neutralDark,({expanded:e,isOverflowing:t})=>!e&&t?m(cr||(cr=wr`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `)):""),Sr=u.button(pr||(pr=wr`
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
`),ye.palette.blue),_r=u.div(ur||(ur=wr`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${0};
`),ye.palette.neutralDarker),Nr=u.div(mr||(mr=wr`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${0};

  .feedback-label {
    color: ${0};
    font-weight: bold;
  }
`),ye.palette.neutralDarker,ye.palette.neutralDarker),qr=u.div(hr||(hr=wr`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 2.5rem;
`)),Ar=u.div(br||(br=wr`
  flex: 1;
`)),Mr=u.p(gr||(gr=wr`
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${0};
  margin: 0;
`),ye.palette.neutralThin),Er=u(pt)(fr||(fr=wr`
  background-color: ${0};

  &:hover:not(:disabled) {
    background-color: ${0};
  }

  &:active:not(:disabled) {
    background-color: ${0};
  }
`),ye.palette.darkGray,ye.palette.neutral,ye.palette.neutralDark),zr=t=>e(Er,L({},t,{children:"Cancel"})),Ir=n=>{const{is_completed:o,canAnswer:a,apiIsPending:s,free_response:c,onAnswerChange:p,onAnswerSave:u,onNextStep:m,questionNumber:h,question:b,wordLimit:g,score:f,feedback_html:w,submissionTimestamp:x,cancelHandler:v,previewMode:k=!1,onGradingSave:y,gradingTimestamp:$}=n,C="number"==typeof(null==f?void 0:f.raw)&&"number"==typeof(null==f?void 0:f.max)?`${f.raw}/${f.max}`:void 0,[S,_]=l(!1),[N,q]=l(!1),A=i(null),[M,E]=l(""),z=o&&a,I=o&&!a;d(()=>{z&&!M&&E(c||""),z||E("")},[z,c,M]);const T=z?(c||"")!==M:(c||"").trim().length>0,F=function(e){const t=e.trim();return t?t.split(/\s+/).length:0}(c||""),L=F>g;d(()=>{const e=()=>{I&&A.current&&q(!S&&A.current.scrollHeight>168)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[c,I,S]);const H=e=>{const t=e.target.value,r=t.trim();let n=t;if(r){const t=r.split(/\s+/);t.length>g&&(n=t.slice(0,g).join(" "),e.target.value=n)}p({id:P(b.id),question_id:P(b.id),type:"free-response",content_html:n,free_response:n,correctness:void 0})},O=()=>{u(P(b.id))};return t(xr,I?{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(vr,{children:b.stem_html&&e(It,{type:"stem",html:b.stem_html,hidden:!1})}),!k&&e($r,{children:"Your answer"}),k&&y?t(qr,{children:[t(Ar,{children:[e(Cr,{ref:A,expanded:S,isOverflowing:N,children:c||""}),(N||S)&&e(Sr,{onClick:()=>_(!S),children:S?"read less":"read more"}),k&&t("div",{style:{marginTop:"1.6rem"},children:[C&&t(_r,{role:"status",children:["Score: ",C]}),w&&t(Nr,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(It,{type:"stem",html:w,hidden:!1})]})]})]}),k&&e(nr,{questionId:b.id,maxScore:(null==f?void 0:f.max)||1,score:null==f?void 0:f.raw,comment:w,onSave:y,gradingTimestamp:$})]}):t(r,{children:[e(Cr,{ref:A,expanded:S,isOverflowing:N,children:c||""}),(N||S)&&e(Sr,{onClick:()=>_(!S),children:S?"read less":"read more"}),k&&t("div",{style:{marginTop:"1.6rem"},children:[C&&t(_r,{role:"status",children:["Score: ",C]}),w&&t(Nr,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(It,{type:"stem",html:w,hidden:!1})]})]})]})]}),!k&&e(jt,{children:t("div",{className:"step-card-footer-inner",children:[t("div",{children:[C&&t(_r,{role:"status",children:["Score: ",C]}),w&&t(Nr,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(It,{type:"stem",html:w,hidden:!1})]})]}),e("div",{className:"controls",children:e(pt,{"data-test-id":"next-btn",onClick:()=>{m(h-1)},children:"Next"})})]})})]}:z?{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(vr,{children:b.stem_html&&e(It,{type:"stem",html:b.stem_html,hidden:!1})}),e(yr,{value:c||"",onChange:H,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:k||s}),!k&&t(kr,{hasChildren:!!x,children:[x&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",D(x)]})}),t("div",{children:[F>=g&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",g-F]})]})]})]}),!k&&e(jt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),t("div",{className:"controls",children:[e(zr,{disabled:!T||s,onClick:e=>{p({id:P(b.id),question_id:P(b.id),type:"free-response",content_html:M,free_response:M,correctness:void 0}),v(e)}}),e(pt,{"data-test-id":"update-answer-btn",disabled:!T||s||L,isWaiting:s,waitingText:"Saving...",onClick:O,children:"Update"})]})]})})]}:{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(vr,{children:b.stem_html&&e(It,{type:"stem",html:b.stem_html,hidden:!1})}),k?y?t(qr,{children:[e(Ar,{children:e(Mr,{children:"Unanswered"})}),e(nr,{questionId:b.id,maxScore:(null==f?void 0:f.max)||1,score:null==f?void 0:f.raw,comment:w,onSave:y,gradingTimestamp:$})]}):e(Mr,{children:"Unanswered"}):e(yr,{value:c||"",onChange:H,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:k||s}),!k&&t(kr,{hasChildren:!!x,children:[x&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",D(x)]})}),t("div",{children:[F>=g&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",g-F]})]})]})]}),!k&&e(jt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),e("div",{className:"controls",children:e(pt,{"data-test-id":"submit-answer-btn",disabled:s||L||0===(c||"").trim().length,isWaiting:s,waitingText:"Saving...",onClick:O,children:"Submit"})})]})})]})};Ir.displayName="OSFreeResponse";let Tr,Fr,Lr,Hr,Or=e=>e;const jr="\n  padding: 1rem 2.5rem;\n  margin: 1rem 0 1rem 1rem;\n",Pr=u.div(Tr||(Tr=Or`
  ${0}
  border-left: ${0} solid ${0};
  font-style: italic;
`),jr,"1rem",ye.palette.neutralLighter),Dr=u.div(Fr||(Fr=Or`
  ${0}
  position: relative;
  width: 100%;
`),jr),Rr=u.div(Lr||(Lr=Or`
  max-height: ${0};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: 1.4rem;

  ${0}
`),({expanded:e})=>e?"none":"16.8rem",({expanded:e,isOverflowing:t})=>!e&&t?"\n    display: -webkit-box;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  ":""),Br=u.button(Hr||(Hr=Or`
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
`),ye.palette.blue),Qr=({children:t,previewMode:r})=>e(r?Dr:Pr,{children:t}),Jr=({free_response:r,previewMode:n})=>{const[i,a]=o.useState(!1),[l,s]=o.useState(!1),d=o.useRef(null);return o.useLayoutEffect(()=>{n&&d.current&&s(!i&&d.current.scrollHeight>168)},[r,n,i]),r?t(Qr,{previewMode:n,children:[n?e(Rr,{ref:d,expanded:i,isOverflowing:l,children:r}):r,n&&(l||i)&&e(Br,{onClick:()=>a(!i),children:i?"show less":"read more"})]}):null},Vr=({count:e})=>t("div",{children:[e," attempt",1===e?"":"s"," left"]}),Ur=()=>e("div",{children:"Unlimited quiz attempts left"}),Gr=({published_comments:r})=>r?t("div",{children:[e("strong",{children:"Feedback:"})," ",r]}):null,Wr=t=>e(pt,L({},t,{waitingText:"Saving…",isWaiting:t.isWaiting,"data-test-id":"submit-answer-btn",children:t.willContinue?"Submit & continue":0==t.attempt_number?"Submit":"Re-submit"})),Zr=t=>e(pt,L({},t,{"data-test-id":"continue-btn",children:t.canUpdateCurrentStep?"Continue":"Next"})),Yr=o.forwardRef((r,n)=>{const{question:i,task:a,answer_id_order:l,onAnswerChange:s,feedback_html:d,correct_answer_feedback_html:c,is_completed:p,correct_answer_id:u,incorrectAnswerId:m,choicesEnabled:h,questionNumber:b,answer_id:g,hasMultipleAttempts:f,hasUnlimitedAttempts:w,attempts_remaining:x,published_comments:v,detailedSolution:k,canAnswer:y,needsSaved:$,attempt_number:C,apiIsPending:S,onAnswerSave:_,onNextStep:N,canUpdateCurrentStep:q,displaySolution:A,available_points:M,free_response:E,labelAnswers:z,show_all_feedback:I,tableFeedbackEnabled:T,hasFeedback:F,previewMode:L}=r,[H,O]=o.useState(!1);return o.useEffect(()=>{H&&p&&(N(b-1),O(!1))},[N,b,H,p]),t("div",{"data-test-id":"student-exercise-question",children:[e(zt,{ref:n,task:a,question:i,answerIdOrder:l,choicesEnabled:h,answer_id:g,questionNumber:b,onChange:s,feedback_html:d,correct_answer_feedback_html:c,correct_answer_id:p?u:null,incorrectAnswerId:m,className:"step-card-body",hideAnswers:!1,displayFormats:!1,displaySolution:A,labelAnswers:z,show_all_feedback:I,tableFeedbackEnabled:T,previewMode:L,children:e(Jr,{free_response:E,previewMode:L})}),L&&k||!L?e(jt,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[t("div",{className:"points",role:"status",children:[M?t("strong",{children:["Points: ",M]}):null,t("span",{className:"attempts-left",children:[f&&x>0&&e(Vr,{count:x}),w?e(Ur,{}):null]}),e(Gr,{published_comments:v}),k&&t("div",{children:[e("strong",{children:"Detailed solution:"})," ",e(ne,{html:k})]})]}),e("div",{className:"controls",children:y&&$||H?e(Wr,{disabled:S||!g||H,isWaiting:S||H,attempt_number:C,onClick:()=>{_(P(i.id)),F||O(!0)},willContinue:!F}):e(Zr,{onClick:()=>N(b-1),canUpdateCurrentStep:q})})]})}):null]})}),Kr={extensions:[],showProcessingMessages:!1,skipStartupTypeset:!0,styles:{"#MathJax_MSIE_Frame":{left:"",right:0,visibility:"hidden"},"#MathJax_Message":{left:"",right:0,visibility:"hidden"}},tex2jax:{displayMath:[["‌‌‌","‌‌‌"]],inlineMath:[["​​​","​​​"]]}},Xr=e=>{const t=(e=>Array.from(e.querySelectorAll(".MathJax math")))(e);return Array.from(e.querySelectorAll("math")).filter(e=>-1===t.indexOf(e))},en=e=>{const t=[];for(const r of Array.from(e.querySelectorAll("[data-math]:not(.math-rendered)"))){const e=r.getAttribute("data-math");r.classList.contains("math-marked")||(r.textContent="div"===r.tagName.toLowerCase()?`‌‌‌${e}‌‌‌`:`​​​${e}​​​`,r.classList.add("math-marked")),t.push(r)}return t},tn=(e,t,r=5)=>{r>0&&(en(e).length||Xr(e).length)?setTimeout(()=>{tn(e,t,r-1)},200):t()},rn=(e,t)=>new Promise(r=>{(function(e,t){const r=en(e);t.MathJax.Hub.Queue(((e,t)=>()=>{x(e)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e),(e=>()=>{const t=[];for(const r of e)t.push(r.className+=" math-rendered")})(e))})(r,t),((e,t)=>()=>{const r=Xr(e);x(r)||t.MathJax.Hub.Queue(()=>t.MathJax.Hub.Typeset(e))})(e,t))})(e,t),t.MathJax.Hub.Queue(()=>{tn(e,r)})}),nn=w((e,t)=>g(rn,100,{leading:!0,trailing:!1}).bind(null,e,t));nn.cache=new v;const on=f((e=window)=>new Promise(t=>{const r=()=>{e.MathJax.HTML.Cookie.prefix="mathjax",e.MathJax.Hub.Configured(),e.MathJax.Hub.Register.StartupHook("End",()=>{t()})};if(!document.getElementById("MathJax-Script")){const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured",e.id="MathJax-Script",e.async=!0,document.head.appendChild(e)}e.MathJax&&e.MathJax.Hub?(e.MathJax.Hub.Config(Kr),e.MathJax.Hub.processSectionDelay=0,r()):(Kr.AuthorInit=r,e.MathJax=Kr)}));let an,ln,sn,dn,cn,pn=e=>e;const un=u.div(an||(an=pn`
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
`),ye.palette.light,"2rem","2rem",ye.palette.neutral,ye.palette.neutralDarker,ye.palette.neutralDarker,e=>!e.desktop&&m(ln||(ln=pn`
    ${0}
    ${0}
  `),Se(sn||(sn=pn`
      display: none;
    `)),Ce(dn||(dn=pn`
      display: none;
    `))),e=>e.mobile&&$e(cn||(cn=pn`
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
  `),ye.palette.neutral,ye.palette.light)),mn=({icons:r})=>{var n,o;if(!r)return null;const i=Object.values(r),a=i.some(({location:e})=>{var t,r;return null==(t=null==e||null==(r=e.toolbar)?void 0:r.mobile)||t}),l=i.some(({location:e})=>{var t,r;return null!=(t=null==e||null==(r=e.toolbar)?void 0:r.desktop)&&t}),s=null==(n=r.topic)?void 0:n.url,d=null==(o=r.errata)?void 0:o.url;return t(un,L({},{mobile:a,desktop:l},{children:[s?t("a",{href:s,target:"_blank",children:[e(k,{icon:y}),e("span",{children:"View topic in textbook"})]}):null,d?t("a",{href:d,target:"_blank",children:[e(k,{icon:$}),e("span",{children:"Suggest a correction"})]}):null]}))};let hn,bn,gn,fn,wn,xn,vn,kn,yn,$n=e=>e;const Cn=u.div(hn||(hn=$n`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${0};}
    .popover { display: flex; }
  }
  ${0}
  ${0}
`),ye.palette.mediumBlue,e=>!e.desktop&&m(bn||(bn=$n`
    ${0}
    ${0}
  `),Se(gn||(gn=$n`
      display: none;
    `)),Ce(fn||(fn=$n`
      display: none;
    `))),e=>!e.mobile&&$e(wn||(wn=$n`
    display: none;
  `))),Sn=u.div(xn||(xn=$n`
  position: relative;
  display: flex;
`)),_n=u.div(vn||(vn=$n`
  ${0}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`),_e.popover),Nn=r=>e(Cn,L({},r.wrapperProps,{mobile:r.mobile,desktop:r.desktop,"aria-label":r.text,children:t(Sn,{children:[r.children,t(_n,{className:"popover right",children:[e("div",{className:"arrow"}),e("div",{className:"content",children:r.text})]})]})})),qn=u.div(kn||(kn=$n`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`)),An=u(k)(yn||(yn=$n`
  color: ${0};
  height: 1em;
`),ye.palette.darkGray),Mn=({exercise:t,icons:r})=>{const n={desktop:!0,mobile:!1},o=[],i=t.questions.every(e=>e.answers.length>0);let a;var l,s,d;return i&&t.questions.find(e=>e.formats.includes("free-response"))?a="In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer.":i&&(a="Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts."),r.topic&&o.push(e(Nn,L({text:"View topic in textbook",wrapperProps:{as:"a",href:r.topic.url,target:"_blank"}},(null==(l=r.topic.location)?void 0:l.header)||n,{children:e(An,{icon:A})}),"topic")),r.errata&&o.push(e(Nn,L({text:"Suggest a correction",wrapperProps:{as:"a",href:r.errata.url,target:"_blank"}},(null==(s=r.errata.location)?void 0:s.header)||n,{children:e(An,{icon:M})}),"errata")),r.info&&a&&o.push(e(Nn,L({text:a},(null==(d=r.info.location)?void 0:d.header)||n,{children:e(An,{icon:E,height:"16px",width:"16px"})}),"type")),e(qn,{children:o})};let En;const zn=m(En||(En=(e=>e)`
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
`),ye.card.header.background,ye.card.header.background,ye.palette.white,ye.palette.neutralDarker),In=["numberOfQuestions","questionNumber","step","exercise","show_all_feedback","scrollToQuestion","exerciseIcons","overlayChildren","labelAnswers","previewMode","showScoring","onGradingSave"];let Tn,Fn,Ln,Hn,On,jn,Pn,Dn,Rn,Bn,Qn=e=>e;const Jn=u(lt)(Tn||(Tn=Qn`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`)),Vn=h(Fn||(Fn=Qn`
  :root {
    --content-text-scale: 1;
  }
`)),Un=u.div(Ln||(Ln=Qn`
  ${0}

  ${0}
`),e=>e.desktopToolbarEnabled&&m(Hn||(Hn=Qn`
    ${0}
    ${0}
    ${0}
  `),Se(On||(On=Qn`
      ${0} {
        margin-left: 6.8rem;
      }
    `),Jn),Ce(jn||(jn=Qn`
      ${0} {
        margin-left: 4.8rem;
      }
    `),Jn),$e(Pn||(Pn=Qn`
      ${0} {
        margin-left: 0;
      }
    `),Jn)),e=>e.mobileToolbarEnabled&&m(Dn||(Dn=Qn`
    ${0}
  `),$e(Rn||(Rn=Qn`
      ${0} + ${0} ${0} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `),un,tt,et))),Gn=r=>t(Un,{desktopToolbarEnabled:r.desktopToolbarEnabled,mobileToolbarEnabled:r.mobileToolbarEnabled,children:[e(mn,{icons:r.exerciseIcons}),e(Jn,L({overlayChildren:r.overlayChildren},r))]}),Wn=({exercise:n})=>t(r,{children:[n.context&&e(ne,{className:"step-card-body exercise-context",block:!0,html:n.context}),n.stimulus_html&&e(ne,{className:"step-card-body exercise-stimulus",block:!0,html:n.stimulus_html})]}),Zn=u(r=>{let{numberOfQuestions:n,questionNumber:i,step:a,exercise:l,show_all_feedback:s,scrollToQuestion:d,exerciseIcons:p,overlayChildren:u,labelAnswers:m=!0,previewMode:h=!1,showScoring:g=!1,onGradingSave:f}=r,w=H(r,In);const x="feedback_html"in a,v=o.useRef([]),k=o.useRef(null),[y,$]=o.useState("questionStates"in w?w.questionStates:{}),C=o.useCallback(()=>{k.current&&(async(e,t=window)=>{await on(),t&&t.MathJax&&t.MathJax.Hub?e.querySelector("[data-math]:not(.math-rendered), math:not(.math-rendered)")?nn(e,t)():Promise.resolve():(console.warn("Warning: Expected MathJax to be initialized."),Promise.resolve())})(k.current)},[]);o.useEffect(()=>{const e=d&&v.current[d];e&&b(e)},[d,l]);const S=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.desktop}),_=Object.values(p||{}).some(({location:e})=>{var t;return null==e||null==(t=e.toolbar)?void 0:t.mobile}),N="questionStates"in w?w.questionStates:void 0;o.useEffect(()=>{N&&$(N)},[N]);const{totalScoring:q,isGraded:A}=o.useMemo(()=>{const e={score:0,maxScore:0};let t=!0;for(const n of l.questions){var r;const o=null==(r=y[n.id])?void 0:r.score;if(void 0===(null==o?void 0:o.raw)||null==o||!o.max){t=!1;break}e.score+=o.raw,e.maxScore+=o.max}return{totalScoring:e,isGraded:t}},[l.questions,y]);return t(R.Provider,{value:C,children:[e(Vn,{}),e(Gn,L({step:a,questionNumber:i,numberOfQuestions:x?n:l.questions.length,rightHeaderChildren:p?e(Mn,{exercise:l,icons:p}):null,showTotalQuestions:x,desktopToolbarEnabled:S,mobileToolbarEnabled:_},p?{exerciseIcons:p}:null,{className:w.className,showScoring:g,isGraded:A,totalScoring:x&&"scoring"in a?a.scoring:q,overlayChildren:u,children:t("div",{ref:k,children:[e(Wn,{exercise:l}),l.questions.map((e,t)=>{var r;const n=L({},x?a:w.questionStates[e.id]);if(1===e.formats.length&&e.formats.includes("free-response")){var o,d;const r={short:30,medium:100,long:1e3},a=null==(o=l.tags)||null==(d=o.find(e=>e.startsWith("response-size:")))?void 0:d.split(":")[1];return c(Ir,L({},w,n,{available_points:void 0,ref:e=>v.current[i+t]=e,key:e.id,question:e,questionNumber:i+t,wordLimit:a&&r[a]||100,cancelHandler:()=>{},previewMode:h,onGradingSave:h?f:void 0}))}return c(Yr,L({},w,n,{available_points:void 0,ref:e=>v.current[i+t]=e,exercise_uid:l.uid,key:e.id,question:e,questionNumber:i+t,choicesEnabled:n.canAnswer,displaySolution:!0,detailedSolution:null==(r=n.solution)?void 0:r.content_html,show_all_feedback:s,labelAnswers:m,tableFeedbackEnabled:s&&!x,canUpdateCurrentStep:"canUpdateCurrentStep"in w?w.canUpdateCurrentStep:!(t+1===l.questions.length),previewMode:h}))})]})}))]})})(Bn||(Bn=Qn`
  ${0}
`),zn),Yn=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});let Kn,Xn,eo,to,ro,no,oo,io,ao,lo,so,co,po,uo=e=>e;const mo=u.nav(Kn||(Kn=uo`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${0}
`),$e(Xn||(Xn=uo`
    padding: 1.6rem 0.8rem;
  `))),ho=u.span(eo||(eo=uo`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`)),bo="box-shadow: 0px 1px 4px 0px #00000066;",go=u.button(lo||(lo=uo`
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
`),e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"4rem":"3.2rem",e=>e.isActive?"0":"0 0.3rem",ye.palette.neutralDarker,e=>e.isActive?m(so||(so=uo`
    ${0}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `),bo):null,e=>(e=>{switch(e){case"isStatus":return m(to||(to=uo`
        color: ${0};
        background-color: ${0};
      `),ye.palette.white,ye.palette.neutralDarker);case"isCorrect":return m(ro||(ro=uo`
        color: ${0};
        background-color: #E8F4D8;
      `),ye.answer.correct);case"isIncorrect":return m(no||(no=uo`
        color: ${0};
        background-color: #F8E8EA;
      `),ye.answer.incorrect);case"isIncomplete":return m(oo||(oo=uo`
        background-color: ${0};
      `),ye.palette.neutralBright);case"isPartialCredit":return m(io||(io=uo`
        color: ${0};
        background-color: ${0};
      `),ye.answer.partialCredit,ye.palette.yellow);default:return m(ao||(ao=uo`
        background-color: ${0};
      `),ye.palette.neutralLight)}})(e.variant),bo),fo=u(k)(co||(co=uo`
  color: ${0};
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  font-size: 1.2rem;
  border-radius: 50%;
`),e=>e.color),wo=u.button(po||(po=uo`
  background-color: ${0};
  border: 0.2rem solid ${0};
  position: absolute;
  top: 0.1rem;
  left: ${0};
  height: 1rem;
  width: 1rem;
  padding: 0.2rem;
  border-radius: 80%;
`),ye.palette.mediumBlue,ye.palette.white,e=>e.isActive?"3.8rem":"3.2rem"),xo=({variant:t})=>{if("isStatus"===t)return null;const r="0.1rem",n={isCorrect:{icon:z,background:ye.answer.correct,color:ye.palette.white,padding:r,label:"Correct"},isIncorrect:{icon:I,background:ye.answer.incorrect,color:ye.palette.white,padding:r,label:"Incorrect"},isIncomplete:{icon:C,background:ye.answer.neutral,color:ye.palette.white,padding:r,label:"Incomplete"},isPartialCredit:{icon:S,background:ye.answer.partialCredit,color:ye.palette.white,padding:"0.1rem 0.1rem 0.1rem 0.2rem",label:"Partial credit"},null:{icon:T,background:ye.answer.neutral,color:ye.answer.neutralDark,padding:r,label:"Not yet graded"}}[String(t)];return n?e(fo,{icon:n.icon,color:n.color,style:{background:n.background,padding:n.padding},height:"16px",width:"16px","aria-label":n.label,"aria-hidden":void 0}):null},vo=({index:r,isActive:n,step:o,goToStep:i})=>t(ho,{children:[o.hasFeedback&&o.variant&&"isStatus"!==o.variant?e(wo,{isActive:n,"aria-label":`Question ${r+1} - Feedback`}):null,e(go,{variant:o.variant,isActive:n,onClick:()=>i(r,o),"aria-current":n?"location":"false","aria-label":"isStatus"===o.variant?"Assignment status":`Question ${r+1}`,children:"isStatus"===o.variant?e(Yn,{}):r+1}),e(xo,{variant:o.variant})]}),ko=({steps:t,activeIndex:r,goToStep:n})=>e(mo,{"aria-label":"Breadcrumbs",children:t.map((t,o)=>e(vo,{index:o,isActive:o===r,step:t,goToStep:n},o))});let yo;const $o=u.div(yo||(yo=(e=>e)`
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
`),ye.palette.light),Co=()=>e($o,{children:e(F,{uniqueKey:"OSLoader"})});let So,_o,No,qo=e=>e;const Ao=u.div(So||(So=qo`
  display: flex;
  width: fit-content;
`)),Mo=u.button(_o||(_o=qo`
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
`),ye.palette.mediumBlue,ye.palette.orange,ye.palette.neutralDarker),Eo=u(k)(No||(No=qo`
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
`),ye.palette.white,ye.palette.mediumBlue,ye.palette.orange,ye.palette.neutralDarker),zo=({buttonVariant:r,onIncludeHandler:n,onRemoveHandler:i,onClickDetails:a})=>{const l=o.useMemo(()=>"include"===r?_:N,[r]);return t(Ao,{children:[t(Mo,{className:r,onClick:()=>(e=>{switch(e){case"include":n();break;case"remove":i()}})(r),"aria-label":r,children:[e(Eo,{className:r,icon:l,"aria-label":r+" question",border:!0,size:"lg"}),e("span",{children:(s=r,s.charAt(0).toUpperCase()+s.slice(1)+" question")})]}),t(Mo,{className:"details","aria-label":"details",onClick:a,children:[e(Eo,{className:"details",icon:q,border:!0,size:"lg"}),e("span",{children:"Details"})]})]});var s};let Io;const To=u(Zn)(Io||(Io=(e=>e)`
  .step-card-footer {
    display: none;
  }
  ${0}
`),({showCorrectAnswer:e})=>!e&&"\n    .answer-answer {\n      font-weight: normal;\n    }\n  "),Fo=({exercise:t,selected:r,showAllFeedback:n=!1,showChosenAnswer:o=!1,showCorrectAnswer:i=!1,labelAnswers:a=!1,showScoring:l=!1,overlayChildren:s,questionStates:d,onGradingSave:c})=>e(To,L({exercise:n?t:(e=>(e.questions.map(e=>e.answers.map(e=>{e.feedback_html="",e.correctness=i?e.correctness:void 0})),e))(t),className:"preview-card "+(r?"is-selected":""),previewMode:!0,showScoring:l,overlayChildren:s},(e=>{const t=(r=e.questions,r.map(e=>{var t,r,i,a,l;return{id:e.id,answer_id:null!=(t=null==(r=o?(null!=d?d:{})[e.id]:void 0)?void 0:r.answer_id)?t:"",correct_answer_id:(null==(i=e.answers.find(e=>"1.0"===e.correctness))?void 0:i.id)||"",content_html:n&&(null==(a=e.collaborator_solutions)||null==(l=a.find(e=>"detailed"===e.solution_type))?void 0:l.content_html)}})).reduce((e,t)=>{const{id:r,answer_id:n,correct_answer_id:o,content_html:a}=t,l=(null!=d?d:{})[r];return L({},e,{[r]:{answer_id:n,correct_answer_id:o,is_completed:i,canAnswer:!i,solution:{content_html:a},score:null==l?void 0:l.score,free_response:(null==l?void 0:l.free_response)||"",feedback_html:(null==l?void 0:l.feedback_html)||"",gradingTimestamp:null==l?void 0:l.gradingTimestamp}})},{});var r;return{canAnswer:!0,needsSaved:!0,hasMultipleAttempts:!1,hasUnlimitedAttempts:!1,onAnswerChange:()=>{},onAnswerSave:()=>{},onNextStep:()=>{},apiIsPending:!1,canUpdateCurrentStep:!1,step:{id:1,uid:e.uid,available_points:"1.0"},questionNumber:e.number,numberOfQuestions:e.questions.length,questionStates:t,labelAnswers:a,show_all_feedback:n}})(t),{onGradingSave:c}));export{Te as Answer,Le as AnswersTable,_t as CompletionStatus,Zn as Exercise,Fo as ExercisePreview,mn as ExerciseToolbar,Ir as FreeResponseInput,Jr as FreeResponseReview,yr as FreeResponseTextArea,zo as IncludeRemoveQuestion,et as InnerStepCard,Co as Loader,tt as OuterStepCard,ko as ProgressBar,vo as ProgressBarItem,zt as Question,It as QuestionHtml,at as StepCard,go as StyledItem,it as StyledOverlay,un as StyledToolbar,lt as TaskStepCard};
//# sourceMappingURL=index.modern.mjs.map
