import{W as N,s as a,a as i,F as f,j as e}from"./index-89a6f642.js";import{I as P}from"./Card-7abd4061.js";import{B as b}from"./Button-a911acd5.js";import{c as n}from"./theme-adad61a5.js";import"./index-c9927a90.js";const k=N`
  :root {
    --content-text-scale: 1;
  }
`,y=a(P)`
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
`,w=a.h2`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`,$=a.div`
  display: flex;
  margin: 0;
  gap: 1rem;

  button {
    height: 48px;
  }
`,Q=a.div`
  display: flex;
  margin: 0;
  gap: 1rem;
`,p=a(b)`
  background-color: ${n.palette.white};
  color: ${n.palette.black};
  border: 1px solid ${n.palette.pale};
  font-weight: normal;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${n.palette.neutralBright} !important;
    color: ${n.palette.black} !important;
    border: 1px solid ${n.palette.pale} !important;
  }

  &:active {
    background-color: ${n.palette.neutralLight} !important;
    color: ${n.palette.black} !important;
    border: 1px solid ${n.palette.pale} !important;
  }
`,o=a(({numberOfQuestions:m,numberCompleted:d,handleContinue:h,handleNext:g,className:C,score:s,handleRetry:r,isRetrying:z,handleEditResponses:x})=>{const t=m===d,l=d>0;if(x)return i(f,{children:[e(k,{}),i(y,{className:C,children:[e(w,{children:t?"You are done.":l?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:t?"Your ungraded responses can be edited until they have been graded.":l?`You've completed ${d} of ${m} questions.`:"Begin working on the quiz."}),i($,{children:[t?e(p,{"data-test-id":"edit-responses-btn",onClick:x,children:"Edit responses"}):l?e(p,{"data-test-id":"resume-btn",onClick:h,children:"Continue"}):null,t&&r?e(p,{"data-test-id":"retry-btn",onClick:r,children:"Retry Quiz"}):null,e(b,{"data-test-id":"next-btn",onClick:g,children:"Next"})]})]})]});const v=t||d===0&&r||l&&r?"Next":l?"Continue":"Start",S=t?"Retry Quiz":"Resume Quiz",q="Attempts for this quiz are unlimited. Your highest score will be saved.",R="You are in the middle of a quiz attempt. Attempts for this quiz are unlimited. Your highest score will be saved.",Y=t?r:h,B=t||r?g:h;return i(f,{children:[e(k,{}),i(y,{className:C,children:[e(w,{children:t?"You are done.":l?"Quiz is partially complete.":"No questions have been answered."}),r?i("div",{children:[e("p",{children:t?q:R}),e(Q,{children:i("p",{children:[e("b",{children:"Current Score:"})," ",(s==null?void 0:s.current)??"Score unavailable"," | ",e("b",{children:"Saved Score:"})," ",(s==null?void 0:s.saved)??"Score unavailable"]})})]}):e("p",{children:t?"Great job answering all the questions.":l?`You've completed ${d} of ${m} questions.`:"Begin working on the quiz."}),i($,{children:[r?e(p,{"data-test-id":"retry-resume-btn",onClick:Y,disabled:z,children:S}):null,e(b,{"data-test-id":`${v.split(" ")[0].toLowerCase()}-btn`,onClick:B,children:v})]})]})]})})``,c={numberOfQuestions:15,numberCompleted:0,handleNext:()=>{console.log("next")},handleContinue:()=>{console.log("continue")}},u={numberOfQuestions:15,numberCompleted:0,handleNext:()=>{console.log("next")},handleContinue:()=>{console.log("continue")},handleRetry:()=>{console.log("retry")},score:{current:"5/15",saved:"10/15"}},D=()=>e(o,{...c}),F=()=>e(o,{...c,numberCompleted:3}),I=()=>e(o,{...c,numberCompleted:15}),L=()=>e(o,{...u,numberCompleted:15}),U=()=>e(o,{...u,numberCompleted:5}),H=()=>e(o,{...u,score:void 0,numberCompleted:15}),O=()=>e(o,{...u,score:{current:"0/15",saved:"0/15"},numberCompleted:0}),T=()=>e(o,{...u,score:{current:"4/15",saved:"4/15"},numberCompleted:15,isRetrying:!0}),J=()=>e(o,{...c,numberCompleted:15,handleEditResponses:()=>{console.log("edit responses")}}),K=()=>e(o,{...c,numberCompleted:15,handleEditResponses:()=>{console.log("edit responses")},handleRetry:()=>{console.log("retry")}});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{I as Complete,D as Default,F as PartialComplete,J as UngradedResponseComplete,K as UngradedResponseCompleteWithRetry,L as unlimitedComplete,T as unlimitedCompleteRetrying,H as unlimitedCompletedNoScore,U as unlimitedPartial,O as unlimitedPartialNoProgress};
