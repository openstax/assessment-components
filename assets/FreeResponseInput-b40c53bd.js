import{s,C as de,r as v,a as t,j as e,F as ce}from"./index-aa5cf4ff.js";import{c as me,f as V,n as y}from"./utils-e132754e.js";import{m as he,c as r}from"./theme-c95df568.js";import{a as b}from"./Question-76408e87.js";import{B as T}from"./Button-6e78a201.js";import{S as F}from"./StepCardFooter-e85a9db1.js";import{F as Q}from"./FreeResponseGrading-0366337b.js";const L=s.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${he.stepCardPadding()}
    padding-bottom: 1rem;
  }
`,z=s.div`
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
`,q=s.textarea`
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
`;q.displayName="OSFreeResponseTextArea";const te=16.8,pe=s.div`
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

  ${({expanded:d,isOverflowing:k})=>!d&&k?de`
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
`,E=s.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${r.palette.neutralDarker};
`,O=s.div`
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
`,fe=s(T)`
  background-color: ${r.palette.darkGray};

  &:hover:not(:disabled) {
    background-color: ${r.palette.neutral};
  }

  &:active:not(:disabled) {
    background-color: ${r.palette.neutralDark};
  }
`,ue=d=>e(fe,{...d,children:"Cancel"}),ve=d=>{const{is_completed:k,canAnswer:A,apiIsPending:h,free_response:l,onAnswerChange:D,onAnswerSave:ne,onNextStep:re,questionNumber:ae,question:a,wordLimit:p,score:n,feedback_html:c,submissionTimestamp:f,cancelHandler:ie,previewMode:i=!1,onGradingSave:S,gradingTimestamp:I}=d,u=typeof(n==null?void 0:n.raw)=="number"&&typeof(n==null?void 0:n.max)=="number"?`${n.raw}/${n.max}`:void 0,[o,H]=v.useState(!1),[C,se]=v.useState(!1),N=v.useRef(null),[g,W]=v.useState(""),x=k&&A,_=k&&!A;v.useLayoutEffect(()=>{x&&!g&&W(l||""),x||W("")},[x,l,g]);const j=x?(l||"")!==g:(l||"").trim().length>0,w=me(l||""),B=w>p;v.useLayoutEffect(()=>{const m=()=>{if(_&&N.current){const $=!o&&N.current.scrollHeight>te*10;se($)}};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[l,_,o]);const G=m=>{const $=m.target.value,P=$.trim();let R=$;if(P){const M=P.split(/\s+/);M.length>p&&(R=M.slice(0,p).join(" "),m.target.value=R)}D({id:y(a.id),question_id:y(a.id),type:"free-response",content_html:R,free_response:R,correctness:void 0})},U=()=>{ne(y(a.id))},le=()=>{re(ae-1)},oe=m=>{D({id:y(a.id),question_id:y(a.id),type:"free-response",content_html:g,free_response:g,correctness:void 0}),ie(m)};return _?t(L,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(z,{children:a.stem_html&&e(b,{type:"stem",html:a.stem_html,hidden:!1})}),!i&&e(pe,{children:"Your answer"}),i&&S?t(X,{children:[t(Z,{children:[e(J,{ref:N,expanded:o,isOverflowing:C,children:l||""}),(C||o)&&e(K,{onClick:()=>H(!o),children:o?"read less":"read more"}),i&&t("div",{style:{marginTop:"1.6rem"},children:[u&&t(E,{role:"status",children:["Score: ",u]}),c&&t(O,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(b,{type:"stem",html:c,hidden:!1})]})]})]}),i&&e(Q,{questionId:a.id,maxScore:(n==null?void 0:n.max)||1,score:n==null?void 0:n.raw,comment:c,onSave:S,gradingTimestamp:I})]}):t(ce,{children:[e(J,{ref:N,expanded:o,isOverflowing:C,children:l||""}),(C||o)&&e(K,{onClick:()=>H(!o),children:o?"read less":"read more"}),i&&t("div",{style:{marginTop:"1.6rem"},children:[u&&t(E,{role:"status",children:["Score: ",u]}),c&&t(O,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(b,{type:"stem",html:c,hidden:!1})]})]})]})]}),!i&&e(F,{children:t("div",{className:"step-card-footer-inner",children:[t("div",{children:[u&&t(E,{role:"status",children:["Score: ",u]}),c&&t(O,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(b,{type:"stem",html:c,hidden:!1})]})]}),e("div",{className:"controls",children:e(T,{"data-test-id":"next-btn",onClick:le,children:"Next"})})]})})]}):x?t(L,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(z,{children:a.stem_html&&e(b,{type:"stem",html:a.stem_html,hidden:!1})}),e(q,{value:l||"",onChange:G,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:i||h}),!i&&t(Y,{hasChildren:!!f,children:[f&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",V(f)]})}),t("div",{children:[w>=p&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",p-w]})]})]})]}),!i&&e(F,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),t("div",{className:"controls",children:[e(ue,{disabled:!j||h,onClick:oe}),e(T,{"data-test-id":"update-answer-btn",disabled:!j||h||B,isWaiting:h,waitingText:"Saving...",onClick:U,children:"Update"})]})]})})]}):t(L,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(z,{children:a.stem_html&&e(b,{type:"stem",html:a.stem_html,hidden:!1})}),i?S?t(X,{children:[e(Z,{children:e(ee,{children:"Unanswered"})}),e(Q,{questionId:a.id,maxScore:(n==null?void 0:n.max)||1,score:n==null?void 0:n.raw,comment:c,onSave:S,gradingTimestamp:I})]}):e(ee,{children:"Unanswered"}):e(q,{value:l||"",onChange:G,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:i||h}),!i&&t(Y,{hasChildren:!!f,children:[f&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",V(f)]})}),t("div",{children:[w>=p&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",p-w]})]})]})]}),!i&&e(F,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),e("div",{className:"controls",children:e(T,{"data-test-id":"submit-answer-btn",disabled:h||B||(l||"").trim().length===0,isWaiting:h,waitingText:"Saving...",onClick:U,children:"Submit"})})]})})]})};ve.displayName="OSFreeResponse";export{ve as F};
