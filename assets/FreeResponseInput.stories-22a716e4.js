import{C as b,s as i,a as n,j as t}from"./index-804c7b1f.js";import{c as f}from"./Answer-411915de.js";import{m as N,c as s}from"./theme-84626a92.js";import{Q as _}from"./Question-73c55de5.js";import{B as x}from"./Button-d9494b7e.js";import{S as $}from"./StepCardFooter-154554ce.js";import"./index-c00549f5.js";import"./Feedback-f27f0a8c.js";import"./AnswersTable-0a77a9ab.js";const L=b`
  background-color: #f5e9ea;
`,R=i.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${N.stepCardPadding()}
  }
`,q=i.div`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`,H=i.div`
  margin: 8px 0;
  display: flex;
  justify-content: ${e=>e.hasChildren?"space-between":"flex-end"};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${s.palette.danger};
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

  color: ${s.palette.neutralThin};
`,v=i.textarea`
  display: block;
  font-family: inherit;
  font-size: 1.8rem;
  line-height: 3rem;
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${s.palette.neutral};
  color: ${s.palette.neutralDark};
  ${e=>e.isOverWordLimit&&L};
  ${e=>e.isOverWordLimit&&b`
    border: 2px solid ${s.palette.danger};
  `}
  background-color: ${e=>e.readOnly&&s.palette.neutralCool};
`;v.displayName="OSFreeResponseTextArea";const O=e=>t(x,{...e,children:"Cancel"}),o=e=>{const{availablePoints:l,cancelHandler:g,defaultValue:d,infoRowChildren:m,isSubmitDisabled:w,question:c,questionNumber:u,saveHandler:y,submitBtnLabel:C,textHasChanged:S,wordLimit:p}=e,a=f(d)>p,h={};return u&&(h["data-question-number"]=u),n(R,{"data-test-id":"student-free-response",children:[n("div",{className:"step-card-body",children:[t(q,{...h,children:c.stem_html&&t(_,{type:"stem",html:c.stem_html,hidden:!1})}),t(v,{...e,isOverWordLimit:a,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"}),n(H,{hasChildren:!!m,children:[m,n("div",{children:[n("span",{children:[f(d)," words"]}),a&&n("span",{className:"word-limit-error-info",children:["Maximum ",p," words"]})]})]})]}),n($,{children:[l?t("div",{className:"points",children:n("strong",{children:["Points: ",l]})}):null,n("div",{className:"controls",children:[t(O,{disabled:!S,onClick:g}),t(x,{"data-test-id":"submit-answer-btn",disabled:w||a,onClick:y,children:C})]})]})]})};o.displayName="OSFreeResponse";const F=e=>{r.defaultValue=e.target.value},k=t("div",{children:t("span",{className:"last-submitted",children:"Last submitted on July 26 at 4:00 pm"})}),r={readOnly:!1,wordLimit:5,defaultValue:"",cancelHandler:()=>null,saveHandler:()=>null,onChange:F,questionNumber:1,question:{id:"1",stem_html:"Is this a question?",collaborator_solutions:[],formats:[],stimulus_html:"",answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}],is_answer_order_important:!1},availablePoints:void 0,isSubmitDisabled:!1,textHasChanged:!1,submitBtnLabel:"Next"},I=()=>t(o,{...r}),z=()=>t(o,{...r,textHasChanged:!0,defaultValue:"response goes over the word limit"}),Q=()=>t(o,{...r,infoRowChildren:k});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{I as Default,z as OverWordLimit,Q as SubmittedDate};
