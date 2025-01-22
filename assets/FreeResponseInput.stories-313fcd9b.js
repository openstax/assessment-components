import{C as b,s as o,a as s,j as t}from"./index-99ee4ded.js";import{c as f}from"./Answer-0c211740.js";import{m as N,c as n}from"./theme-df5a7ff0.js";import{Q as _}from"./Question-2681b22b.js";import{B as x}from"./Button-f0a25884.js";import{S as $}from"./StepCardFooter-216ce807.js";import"./index-b16fccd5.js";import"./Feedback-ee3c865a.js";import"./AnswersTable-ce25fbc8.js";const L=b`
  background-color: #f5e9ea;
`,R=o.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${N.stepCardPadding()}
  }
`,q=o.div`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`,H=o.div`
  margin: 8px 0;
  display: flex;
  justify-content: ${e=>e.hasChildren?"space-between":"flex-end"};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${n.palette.danger};
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

  color: ${n.palette.neutralThin};
`,v=o.textarea`
  display: block;
  font-family: inherit;
  font-size: 1.8rem;
  line-height: 3rem;
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${n.palette.neutral};
  color: ${n.palette.neutralDark};
  ${e=>e.isOverWordLimit&&L};
  ${e=>e.isOverWordLimit&&b`
    border: 2px solid ${n.palette.danger};
  `}
  background-color: ${e=>e.readOnly&&n.palette.neutralCool};
`;v.displayName="OSFreeResponseTextArea";const O=e=>t(x,{...e,children:"Cancel"}),i=e=>{const{availablePoints:l,cancelHandler:g,defaultValue:d,infoRowChildren:m,isSubmitDisabled:w,question:c,questionNumber:u,saveHandler:y,submitBtnLabel:C,textHasChanged:S,wordLimit:p}=e,a=f(d)>p,h={};return u&&(h["data-question-number"]=u),s(R,{"data-test-id":"student-free-response",children:[s("div",{className:"step-card-body",children:[t(q,{...h,children:c.stem_html&&t(_,{type:"stem",html:c.stem_html,hidden:!1})}),t(v,{...e,isOverWordLimit:a,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"}),s(H,{hasChildren:!!m,children:[m,s("div",{children:[s("span",{children:[f(d)," words"]}),a&&s("span",{className:"word-limit-error-info",children:["Maximum ",p," words"]})]})]})]}),s($,{children:[l?t("div",{className:"points",role:"status",children:s("strong",{children:["Points: ",l]})}):null,s("div",{className:"controls",children:[t(O,{disabled:!S,onClick:g}),t(x,{"data-test-id":"submit-answer-btn",disabled:w||a,onClick:y,children:C})]})]})]})};i.displayName="OSFreeResponse";const F=e=>{r.defaultValue=e.target.value},k=t("div",{children:t("span",{className:"last-submitted",children:"Last submitted on July 26 at 4:00 pm"})}),r={readOnly:!1,wordLimit:5,defaultValue:"",cancelHandler:()=>null,saveHandler:()=>null,onChange:F,questionNumber:1,question:{id:"1",stem_html:"Is this a question?",collaborator_solutions:[],formats:[],stimulus_html:"",answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}],is_answer_order_important:!1},availablePoints:void 0,isSubmitDisabled:!1,textHasChanged:!1,submitBtnLabel:"Next"},I=()=>t(i,{...r}),z=()=>t(i,{...r,textHasChanged:!0,defaultValue:"response goes over the word limit"}),Q=()=>t(i,{...r,infoRowChildren:k});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{I as Default,z as OverWordLimit,Q as SubmittedDate};
