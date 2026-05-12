import{a as t,j as e,s,C as ue,r as p,F as fe}from"./index-6162b784.js";import{c as ve,f as X,n as b}from"./utils-e132754e.js";import{m as ge,c as i}from"./theme-689bfc1f.js";import{a as x}from"./Question-c35b9832.js";import{B as y}from"./Button-411b55ab.js";import{S as O}from"./StepCardFooter-41e9d20b.js";import{F as ee}from"./FreeResponseGrading-aee1fede.js";const be=()=>t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("mask",{id:"mask0_4564_440",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"16",height:"16",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0C3.58203 0 0 3.58332 0 8C0 12.4193 3.58203 16 8 16C12.418 16 16 12.4193 16 8C16 3.58332 12.418 0 8 0ZM8 3.54835C8.74825 3.54835 9.35482 4.15493 9.35482 4.90318C9.35482 5.65143 8.74825 6.25801 8 6.25801C7.25175 6.25801 6.64518 5.65143 6.64518 4.90318C6.64518 4.15493 7.25175 3.54835 8 3.54835ZM9.80648 11.7419C9.80648 11.9557 9.63315 12.129 9.41937 12.129H6.58062C6.36685 12.129 6.19352 11.9557 6.19352 11.7419V10.9677C6.19352 10.754 6.36685 10.5806 6.58062 10.5806H6.96773V8.51611H6.58062C6.36685 8.51611 6.19352 8.34279 6.19352 8.12901V7.35482C6.19352 7.14104 6.36685 6.96772 6.58062 6.96772H8.64517C8.85895 6.96772 9.03227 7.14104 9.03227 7.35482V10.5806H9.41937C9.63315 10.5806 9.80648 10.754 9.80648 10.9677V11.7419Z",fill:"white"})}),e("g",{mask:"url(#mask0_4564_440)",children:e("rect",{width:"16",height:"16",fill:"#976502"})})]}),q=s.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${ge.stepCardPadding()}
    padding-bottom: 1rem;
  }
`,A=s.div`
  font-size: calc(2rem * var(--content-text-scale));
  line-height: 1.68em;
  position: relative;
`,te=s.div`
  margin: 8px 0;
  display: flex;
  justify-content: ${c=>c.hasChildren?"space-between":"flex-end"};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${i.palette.danger};
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

  color: ${i.palette.neutralThin};
`,V=s.textarea`
  display: block;
  font-family: inherit;
  font-size: calc(1.8rem * var(--content-text-scale));
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${i.palette.neutral};
  color: ${i.palette.neutralDark};
`;V.displayName="OSFreeResponseTextArea";const le=16.8,xe=s.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${i.palette.neutralThin};
  margin: 2.5rem 0 1rem 0;
`,ne=s.div`
  border-left: 16px solid ${i.palette.neutralLighter};
  padding-left: 1.6rem;
  margin: 1rem 0 1rem 1rem;
  max-height: ${({expanded:c})=>c?"none":`${le}rem`};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${i.palette.neutralDark};
  white-space: pre-wrap;

  ${({expanded:c,isOverflowing:f})=>!c&&f?ue`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `:""}
`,ie=s.button`
  display: inline;
  background: none;
  border: none;
  color: ${i.palette.blue};
  padding: 0;
  margin: 0 0 0 1rem;
  cursor: pointer;
  font-size: calc(1.3rem * var(--content-text-scale));
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`,D=s.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${i.palette.neutralDarker};
`,I=s.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${i.palette.neutralDarker};
  white-space: pre-wrap;

  .feedback-label {
    color: ${i.palette.neutralDarker};
    font-weight: bold;
  }
`,re=s.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 2.5rem;
`,ae=s.div`
  flex: 1;
`,se=s.p`
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${i.palette.neutralThin};
  margin: 0;
`,we=s.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #FFF5E0;
  padding-left: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
`,ye=s(y)`
  background-color: ${i.palette.darkGray};

  &:hover:not(:disabled) {
    background-color: ${i.palette.neutral};
  }

  &:active:not(:disabled) {
    background-color: ${i.palette.neutralDark};
  }
`,Ce=c=>e(ye,{...c,children:"Cancel"}),ke=c=>{const{is_completed:f,canAnswer:U,needsSaved:_,apiIsPending:o,free_response:l,onAnswerChange:B,onAnswerSave:M,onNextStep:T,questionNumber:F,question:r,wordLimit:u,score:n,feedback_html:m,submissionTimestamp:v,cancelHandler:oe,previewMode:a=!1,onGradingSave:C,gradingTimestamp:W}=c,g=typeof(n==null?void 0:n.raw)=="number"&&typeof(n==null?void 0:n.max)=="number"?`${n.raw}/${n.max}`:void 0,[d,j]=p.useState(!1),[k,de]=p.useState(!1),S=p.useRef(null),[E,ce]=p.useState(l||""),L=f&&U,z=f&&!U,G=a?null:t(we,{children:[e(be,{}),"You can come back and edit your response until it has been graded."]});p.useLayoutEffect(()=>{L&&!_&&ce(l||"")},[_,L,l]);const H=_&&(l||"")!==E,w=ve(l||""),P=w>u;p.useLayoutEffect(()=>{const h=()=>{if(z&&S.current){const $=!d&&S.current.scrollHeight>le*10;de($)}};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[l,z,d]);const Z=h=>{const $=h.target.value,J=$.trim();let R=$;if(J){const K=J.split(/\s+/);K.length>u&&(R=K.slice(0,u).join(" "),h.target.value=R)}B({id:b(r.id),question_id:b(r.id),type:"free-response",content_html:R,free_response:R,correctness:void 0})},[N,Q]=p.useState(!1);p.useEffect(()=>{N&&f&&!o&&(Q(!1),T(F-1))},[N,f,o,T,F]);const me=()=>{M(b(r.id))},he=()=>{M(b(r.id)),Q(!0)},Y=()=>{T(F-1)},pe=h=>{B({id:b(r.id),question_id:b(r.id),type:"free-response",content_html:E,free_response:E,correctness:void 0}),oe(h)};return z?t(q,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[e(A,{children:r.stem_html&&e(x,{type:"stem",html:r.stem_html,hidden:!1})}),!a&&e(xe,{children:"Your answer"}),a&&C?t(re,{children:[t(ae,{children:[e(ne,{ref:S,expanded:d,isOverflowing:k,children:l||""}),(k||d)&&e(ie,{onClick:()=>j(!d),children:d?"read less":"read more"}),a&&t("div",{style:{marginTop:"1.6rem"},children:[g&&t(D,{role:"status",children:["Score: ",g]}),m&&t(I,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(x,{type:"stem",html:m,hidden:!1})]})]})]}),a&&e(ee,{questionId:r.id,maxScore:(n==null?void 0:n.max)||1,score:n==null?void 0:n.raw,comment:m,onSave:C,gradingTimestamp:W})]}):t(fe,{children:[e(ne,{ref:S,expanded:d,isOverflowing:k,children:l||""}),(k||d)&&e(ie,{onClick:()=>j(!d),children:d?"read less":"read more"}),a&&t("div",{style:{marginTop:"1.6rem"},children:[g&&t(D,{role:"status",children:["Score: ",g]}),m&&t(I,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(x,{type:"stem",html:m,hidden:!1})]})]})]})]}),!a&&e(O,{children:t("div",{className:"step-card-footer-inner",children:[t("div",{children:[g&&t(D,{role:"status",children:["Score: ",g]}),m&&t(I,{children:[e("span",{className:"feedback-label",children:"Feedback:"})," ",e(x,{type:"stem",html:m,hidden:!1})]})]}),e("div",{className:"controls",children:e(y,{"data-test-id":"next-btn",onClick:Y,children:"Next"})})]})})]}):L?t(q,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[G,e(A,{children:r.stem_html&&e(x,{type:"stem",html:r.stem_html,hidden:!1})}),e(V,{value:l||"",onChange:Z,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:a||o}),!a&&t(te,{hasChildren:!!v,children:[v&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",X(v)]})}),t("div",{children:[w>=u&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",u-w]})]})]})]}),!a&&e(O,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),t("div",{className:"controls",children:[e(Ce,{disabled:!H||o,onClick:pe}),e(y,{"data-test-id":"update-answer-btn",disabled:!H||o||P||(l||"").trim().length===0,isWaiting:o,waitingText:"Saving...",onClick:me,children:"Update"}),e(y,{"data-test-id":"next-btn",disabled:o||H,onClick:Y,children:"Next"})]})]})})]}):t(q,{"data-test-id":"student-free-response",children:[t("div",{className:"step-card-body",children:[G,e(A,{children:r.stem_html&&e(x,{type:"stem",html:r.stem_html,hidden:!1})}),a?C?t(re,{children:[e(ae,{children:e(se,{children:"Unanswered"})}),e(ee,{questionId:r.id,maxScore:(n==null?void 0:n.max)||1,score:n==null?void 0:n.raw,comment:m,onSave:C,gradingTimestamp:W})]}):e(se,{children:"Unanswered"}):e(V,{value:l||"",onChange:Z,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box",disabled:a||o}),!a&&t(te,{hasChildren:!!v,children:[v&&e("div",{children:t("span",{className:"last-submitted",children:["Last submitted on ",X(v)]})}),t("div",{children:[w>=u&&e("span",{className:"word-limit-error-info",children:"Word limit reached"}),t("span",{children:[" Remaining words: ",u-w]})]})]})]}),!a&&e(O,{className:"step-card-footer",children:t("div",{className:"step-card-footer-inner",children:[e("div",{}),e("div",{className:"controls",children:e(y,{"data-test-id":"submit-answer-btn",disabled:o||N||P||(l||"").trim().length===0,isWaiting:o||N,waitingText:"Saving...",onClick:he,children:"Submit"})})]})})]})};ke.displayName="OSFreeResponse";export{ke as F};
