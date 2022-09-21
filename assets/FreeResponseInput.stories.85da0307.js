import{c as f}from"./Answer.7d08f9d8.js";import{C as p,s as r,j as e,F as R}from"./index.8cb28562.js";import{m as S,c as n}from"./theme.f0f85d84.js";import{a as $}from"./Question.2c086841.js";import{B as v}from"./Button.602c96b4.js";import{S as L}from"./StepCardFooter.4d89047f.js";import"./Feedback.0aaf4349.js";import"./AnswersTable.7bee5f4a.js";var i="/home/runner/work/assessment-components/assessment-components/src/components/FreeResponseInput.tsx";const k=p`
  background-color: #f5e9ea;
`,q=r.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${S.stepCardPadding()}
  }
`,H=r.div`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`,O=r.div`
  margin: 8px 0;
  display: flex;
  justify-content: ${o=>o.hasChildren?"space-between":"flex-end"};
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
`,h=r.textarea`
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
  ${o=>o.isOverWordLimit&&k};
  ${o=>o.isOverWordLimit&&p`
    border: 2px solid ${n.palette.danger};
  `}
  background-color: ${o=>o.readOnly&&n.palette.neutralCool};
`;h.displayName="OSFreeResponseTextArea";const D=o=>e(v,{...o,children:"Cancel"},void 0,!1,{fileName:i,lineNumber:95,columnNumber:3},void 0),l=o=>{const{availablePoints:x,cancelHandler:g,defaultValue:m,infoRowChildren:d,isSubmitDisabled:w,pointsChildren:y,question:u,questionNumber:c,saveHandler:C,submitBtnLabel:F,textHasChanged:_,wordLimit:b}=o,a=f(m)>b,N={};return c&&(N["data-question-number"]=c),e(q,{"data-test-id":"student-free-response",children:[e("div",{className:"step-card-body",children:[e(H,{...N,children:u.stem_html&&e($,{type:"stem",html:u.stem_html,hidden:!1},void 0,!1,{fileName:i,lineNumber:127,columnNumber:13},void 0)},void 0,!1,{fileName:i,lineNumber:125,columnNumber:9},void 0),e(h,{...o,isOverWordLimit:a,"data-test-id":"free-response-box",placeholder:"Enter your response...","aria-label":"question response text box"},void 0,!1,{fileName:i,lineNumber:129,columnNumber:9},void 0),e(O,{hasChildren:!!d,children:[d,e("div",{children:[e("span",{children:[f(m)," words"]},void 0,!0,{fileName:i,lineNumber:139,columnNumber:13},void 0),a&&e("span",{className:"word-limit-error-info",children:["Maximum ",b," words"]},void 0,!0,{fileName:i,lineNumber:140,columnNumber:33},void 0)]},void 0,!0,{fileName:i,lineNumber:138,columnNumber:11},void 0)]},void 0,!0,{fileName:i,lineNumber:136,columnNumber:9},void 0)]},void 0,!0,{fileName:i,lineNumber:124,columnNumber:7},void 0),e(L,{children:[e("div",{className:"points",children:[e("strong",{children:["Points: ",x]},void 0,!0,{fileName:i,lineNumber:146,columnNumber:11},void 0),y]},void 0,!0,{fileName:i,lineNumber:145,columnNumber:9},void 0),e("div",{className:"controls",children:[e(D,{disabled:!_,onClick:g},void 0,!1,{fileName:i,lineNumber:150,columnNumber:11},void 0),e(v,{"data-test-id":"submit-answer-btn",disabled:w||a,onClick:C,children:F},void 0,!1,{fileName:i,lineNumber:151,columnNumber:11},void 0)]},void 0,!0,{fileName:i,lineNumber:149,columnNumber:9},void 0)]},void 0,!0,{fileName:i,lineNumber:144,columnNumber:7},void 0)]},void 0,!0,{fileName:i,lineNumber:123,columnNumber:5},void 0)};l.displayName="OSFreeResponse";var t="/home/runner/work/assessment-components/assessment-components/src/components/FreeResponseInput.stories.tsx";const I=o=>{s.defaultValue=o.target.value},V=e("div",{children:e("span",{className:"last-submitted",children:"Last submitted on July 26 at 4:00 pm"},void 0,!1,{fileName:t,lineNumber:9,columnNumber:7},void 0)},void 0,!1,{fileName:t,lineNumber:8,columnNumber:3},void 0),s={readOnly:!1,wordLimit:5,defaultValue:"",cancelHandler:()=>null,saveHandler:()=>null,onChange:I,questionNumber:1,question:{id:"1",stem_html:"Is this a question?",collaborator_solutions:[],formats:[],stimulus_html:"",answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}],is_answer_order_important:!1},availablePoints:"1.0",pointsChildren:e(R,{},void 0,!1),isSubmitDisabled:!1,textHasChanged:!1,submitBtnLabel:"Next"},Q=()=>e(l,{...s},void 0,!1,{fileName:t,lineNumber:45,columnNumber:30},void 0),J=()=>e(l,{...s,textHasChanged:!0,defaultValue:"response goes over the word limit"},void 0,!1,{fileName:t,lineNumber:46,columnNumber:36},void 0),M=()=>e(l,{...s,infoRowChildren:V},void 0,!1,{fileName:t,lineNumber:47,columnNumber:36},void 0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Q as Default,J as OverWordLimit,M as SubmittedDate};
