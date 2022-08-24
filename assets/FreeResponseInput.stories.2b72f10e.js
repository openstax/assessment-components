import{c as h}from"./Answer.c5e35db4.js";import{C as f,s as o,a as n,j as t,F as _}from"./index.24c6a407.js";import{c as s}from"./theme.ed682944.js";import{a as F}from"./Question.7a6652a0.js";import{B as b}from"./Button.d2fea880.js";import{S as L}from"./StepCardFooter.b358f102.js";import"./Feedback.eb2426ed.js";import"./AnswersTable.41b08fad.js";const R=f`
  background-color: #f5e9ea;
`,$=o.div`
  display: flex;
  flex-direction: column;
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
`,g=o.textarea`
  display: block;
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${s.palette.neutral};
  color: ${s.palette.neutralDark};
  ${e=>e.isOverWordLimit&&R};
  ${e=>e.isOverWordLimit&&f`
    border: 2px solid ${s.palette.danger};
  `}
  background-color: ${e=>e.readOnly&&s.palette.neutralCool};
`;g.displayName="OSFreeResponseTextArea";const O=o(b)`
  align-self: flex-end;
  margin: 4rem;
  float: right;
`,k=e=>t(b,{...e,children:"Cancel"}),i=e=>{const{availablePoints:x,cancelHandler:v,defaultValue:l,infoRowChildren:d,isSubmitDisabled:w,pointsChildren:y,question:m,questionNumber:c,saveHandler:C,submitBtnLabel:S,textHasChanged:N,wordLimit:u}=e,a=h(l)>u,p={};return c&&(p["data-question-number"]=c),n($,{"data-test-id":"student-free-response",children:[n("div",{className:"step-card-body",children:[t(q,{...p,children:m.stem_html&&t(F,{type:"stem",html:m.stem_html,hidden:!1})}),t(g,{...e,isOverWordLimit:a,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"}),n(H,{hasChildren:!!d,children:[d,n("div",{children:[n("span",{children:[h(l)," words"]}),a&&n("span",{className:"word-limit-error-info",children:["Maximum ",u," words"]})]})]})]}),n(L,{children:[n("div",{className:"points",children:[n("strong",{children:["Points: ",x]}),y]}),n("div",{className:"controls",children:[t(k,{disabled:!N,onClick:v}),t(O,{"data-test-id":"submit-answer-btn",disabled:w||a,onClick:C,children:S})]})]})]})};i.displayName="OSFreeResponse";const B=e=>{r.defaultValue=e.target.value},D=t("div",{children:t("span",{className:"last-submitted",children:"Last submitted on July 26 at 4:00 pm"})}),r={readOnly:!1,wordLimit:5,defaultValue:"",cancelHandler:()=>null,saveHandler:()=>null,onChange:B,questionNumber:1,question:{id:"1",stem_html:"Is this a question?",collaborator_solutions:[],formats:[],stimulus_html:"",answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}],is_answer_order_important:!1},availablePoints:"1.0",pointsChildren:t(_,{}),isSubmitDisabled:!1,textHasChanged:!1,submitBtnLabel:"Next"},z=()=>t(i,{...r}),Q=()=>t(i,{...r,textHasChanged:!0,defaultValue:"response goes over the word limit"}),J=()=>t(i,{...r,infoRowChildren:D});typeof window!="undefined"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{z as Default,Q as OverWordLimit,J as SubmittedDate};
