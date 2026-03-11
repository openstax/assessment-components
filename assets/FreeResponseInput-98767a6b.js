import{s,C as ce,r as v,a as t,j as e,F as me}from"./index-bc417d84.js";import{c as he,f as V,n as x}from"./utils-e132754e.js";import{m as pe,c as r}from"./theme-4809ab32.js";import{a as b}from"./Question-f765a4bc.js";import{B as $}from"./Button-aa44f1bd.js";import{S as L}from"./StepCardFooter-32c7c5c3.js";import{F as Q}from"./FreeResponseGrading-94e6eaf6.js";const z=s.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${pe.stepCardPadding()}
    padding-bottom: 1rem;
  }
`,E=s.div`
  font-size: calc(2rem * var(--content-text-scale));
  line-height: 1.68em;
  position: relative;
`,Y=s.div`
  margin: 8px 0;
  display: flex;
  justify-content: ${d=>d.hasChildren?"space-between":"flex-end"};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${r.palette.danger};
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

  color: ${r.palette.neutralThin};
`,A=s.textarea`
  display: block;
  font-family: inherit;
  font-size: calc(1.8rem * var(--content-text-scale));
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${r.palette.neutral};
  color: ${r.palette.neutralDark};
`;A.displayName="OSFreeResponseTextArea";const te=16.8,fe=s.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${r.palette.neutralThin};
  margin: 2.5rem 0 1rem 0;
`,J=s.div`
  border-left: 16px solid ${r.palette.neutralLighter};
  padding-left: 1.6rem;
  margin: 1rem 0 1rem 1rem;
  max-height: ${({expanded:d})=>d?"none":`${te}rem`};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${r.palette.neutralDark};

  ${({expanded:d,isOverflowing:w})=>!d&&w?ce`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `:""}
`,K=s.button`
  display: inline;
  background: none;
  border: none;
  color: ${r.palette.blue};
  padding: 0;
  margin: 0 0 0 1rem;
  cursor: pointer;
  font-size: calc(1.3rem * var(--content-text-scale));
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`,O=s.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${r.palette.neutralDarker};
`,q=s.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${r.palette.neutralDarker};

  .feedback-label {
    color: ${r.palette.neutralDarker};
    font-weight: bold;
  }
`,X=s.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 2.5rem;
`,Z=s.div`
  flex: 1;
`,ee=s.p`
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${r.palette.neutralThin};
  margin: 0;
`,ue=s($)`
  background-color: ${r.palette.darkGray};

  &:hover:not(:disabled) {
    background-color: ${r.palette.neutral};
  }

  &:active:not(:disabled) {
    background-color: ${r.palette.neutralDark};
  }
`,ve=d=>e(ue,{...d,children:"Cancel"}),be=d=>{const{is_completed:w,canAnswer:D,needsSaved:R,apiIsPending:h,free_response:l,onAnswerChange:I,onAnswerSave:ne,onNextStep:re,questionNumber:ae,question:a,wordLimit:p,score:n,feedback_html:c,submissionTimestamp:f,cancelHandler:ie,previewMode:i=!1,onGradingSave:y,gradingTimestamp:H}=d,u=typeof(n==null?void 0:n.raw)=="number"&&typeof(n==null?void 0:n.max)=="number"?`${n.raw}/${n.max}`:void 0,[o,W]=v.useState(!1),[k,se]=v.useState(!1),S=v.useRef(null),[T,le]=v.useState(l||""),_=w&&D,F=w&&!D;v.useLayoutEffect(()=>{_&&!R&&le(l||"")},[R,_,l]);const j=R&&(l||"")!==T,g=he(l||""),B=g>p;v.useLayoutEffect(()=>{const m=()=>{if(F&&S.current){const C=!o&&S.current.scrollHeight>te*10;se(C)}};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[l,F,o]);const G=m=>{const C=m.target.value,P=C.trim();let N=C;if(P){const M=P.split(/\s+/);M.length>p&&(N=M.slice(0,p).join(" "),m.target.value=N)}I({id:x(a.id),question_id:x(a.id),type:"free-response",content_html:N,free_response:N,correctness:void 0})},U=()=>{ne(x(a.id))},oe=()=>{re(ae-1)},de=m=>{I({id:x(a.id),question_id:x(a.id),type:"free-response",content_html:T,free_response:T,correctness:void 0}),ie(m)};return F?t(z,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(E,{children:a.stem_html&&e(b,{type:"stem",html:a.stem_html,hidden:!1})}),!i&&e(fe,{children:"Your answer"}),i&&y?t(X,{children:[t(Z,{children:[e(J,{ref:S,expanded:o,isOverflowing:k,children:l||""}),(k||o)&&e(K,{onClick:()=>W(!o),children:o?"read less":"read more"}),i&&t("div",{style:{marginTop:"1.6rem"},children:[u&&t(O,{role:"status",children:["Score: ",u]}),c&&t(q,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(b,{type:"stem",html:c,hidden:!1})]})]})]}),i&&e(Q,{questionId:a.id,maxScore:(n==null?void 0:n.max)||1,score:n==null?void 0:n.raw,comment:c,onSave:y,gradingTimestamp:H})]}):t(me,{children:[e(J,{ref:S,expanded:o,isOverflowing:k,children:l||""}),(k||o)&&e(K,{onClick:()=>W(!o),children:o?"read less":"read more"}),i&&t("div",{style:{marginTop:"1.6rem"},children:[u&&t(O,{role:"status",children:["Score: ",u]}),c&&t(q,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(b,{type:"stem",html:c,hidden:!1})]})]})]})]}),!i&&e(L,{children:t("div",{className:"step-card-footer-inner",children:[t("div",{children:[u&&t(O,{role:"status",children:["Score: ",u]}),c&&t(q,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(b,{type:"stem",html:c,hidden:!1})]})]}),e("div",{className:"controls",children:e($,{"data-test-id":"next-btn",onClick:oe,children:"Next"})})]})})]}):_?t(z,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(E,{children:a.stem_html&&e(b,{type:"stem",html:a.stem_html,hidden:!1})}),e(A,{value:l||"",onChange:G,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:i||h}),!i&&t(Y,{hasChildren:!!f,children:[f&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",V(f)]})}),t("div",{children:[g>=p&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",p-g]})]})]})]}),!i&&e(L,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),t("div",{className:"controls",children:[e(ve,{disabled:!j||h,onClick:de}),e($,{"data-test-id":"update-answer-btn",disabled:!j||h||B||(l||"").trim().length===0,isWaiting:h,waitingText:"Saving...",onClick:U,children:"Update"})]})]})})]}):t(z,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(E,{children:a.stem_html&&e(b,{type:"stem",html:a.stem_html,hidden:!1})}),i?y?t(X,{children:[e(Z,{children:e(ee,{children:"Unanswered"})}),e(Q,{questionId:a.id,maxScore:(n==null?void 0:n.max)||1,score:n==null?void 0:n.raw,comment:c,onSave:y,gradingTimestamp:H})]}):e(ee,{children:"Unanswered"}):e(A,{value:l||"",onChange:G,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:i||h}),!i&&t(Y,{hasChildren:!!f,children:[f&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",V(f)]})}),t("div",{children:[g>=p&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",p-g]})]})]})]}),!i&&e(L,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),e("div",{className:"controls",children:e($,{"data-test-id":"submit-answer-btn",disabled:h||B||(l||"").trim().length===0,isWaiting:h,waitingText:"Saving...",onClick:U,children:"Submit"})})]})})]})};be.displayName="OSFreeResponse";export{be as F};
