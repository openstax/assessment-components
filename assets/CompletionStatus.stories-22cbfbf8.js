import{W as N,s,a as r,F as f,j as e}from"./index-6162b784.js";import{I as P}from"./Card-0670e8c1.js";import{B as m}from"./Button-411b55ab.js";import{c as o}from"./theme-689bfc1f.js";import"./index-1deb9702.js";const k=N`
  :root {
    --content-text-scale: 1;
  }
`,y=s(P)`
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
`,w=s.h2`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`,S=s.div`
  display: flex;
  margin: 0;
  gap: 1rem;

  button {
    height: 48px;
  }
`,Q=s.div`
  display: flex;
  margin: 0;
  gap: 1rem;
`,u=s(m)`
  background-color: ${o.palette.white};
  color: ${o.palette.black};
  border: 1px solid ${o.palette.pale};
  font-weight: normal;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${o.palette.neutralBright} !important;
    color: ${o.palette.black} !important;
    border: 1px solid ${o.palette.pale} !important;
  }

  &:active {
    background-color: ${o.palette.neutralLight} !important;
    color: ${o.palette.black} !important;
    border: 1px solid ${o.palette.pale} !important;
  }
`,t=s(({numberOfQuestions:h,numberCompleted:c,handleContinue:b,handleNext:g,className:C,score:l,handleRetry:n,isRetrying:$,handleEditResponses:x})=>{const i=h===c,p=c>0;if(x)return r(f,{children:[e(k,{}),r(y,{className:C,children:[e(w,{children:"You are done."}),e("p",{children:"Your ungraded responses can be edited until they have been graded."}),r(S,{children:[e(u,{"data-test-id":"edit-responses-btn",onClick:x,children:"Edit responses"}),n?e(u,{"data-test-id":"retry-btn",onClick:n,children:"Retry Quiz"}):null,e(m,{"data-test-id":"next-btn",onClick:g,children:"Next"})]})]})]});const v=i||c===0&&n||p&&n?"Next":p?"Continue":"Start",z=i?"Retry Quiz":"Resume Quiz",R="Attempts for this quiz are unlimited. Your highest score will be saved.",q="You are in the middle of a quiz attempt. Attempts for this quiz are unlimited. Your highest score will be saved.",Y=i?n:b,B=i||n?g:b;return r(f,{children:[e(k,{}),r(y,{className:C,children:[e(w,{children:i?"You are done.":p?"Quiz is partially complete.":"No questions have been answered."}),n?r("div",{children:[e("p",{children:i?R:q}),e(Q,{children:r("p",{children:[e("b",{children:"Current Score:"})," ",(l==null?void 0:l.current)??"Score unavailable"," | ",e("b",{children:"Saved Score:"})," ",(l==null?void 0:l.saved)??"Score unavailable"]})})]}):e("p",{children:i?"Great job answering all the questions.":p?`You've completed ${c} of ${h} questions.`:"Begin working on the quiz."}),r(S,{children:[n?e(u,{"data-test-id":"retry-resume-btn",onClick:Y,disabled:$,children:z}):null,e(m,{"data-test-id":`${v.split(" ")[0].toLowerCase()}-btn`,onClick:B,children:v})]})]})]})})``,a={numberOfQuestions:15,numberCompleted:0,handleNext:()=>{console.log("next")},handleContinue:()=>{console.log("continue")}},d={numberOfQuestions:15,numberCompleted:0,handleNext:()=>{console.log("next")},handleContinue:()=>{console.log("continue")},handleRetry:()=>{console.log("retry")},score:{current:"5/15",saved:"10/15"}},D=()=>e(t,{...a}),F=()=>e(t,{...a,numberCompleted:3}),I=()=>e(t,{...a,numberCompleted:15}),L=()=>e(t,{...d,numberCompleted:15}),O=()=>e(t,{...d,numberCompleted:5}),U=()=>e(t,{...d,score:void 0,numberCompleted:15}),H=()=>e(t,{...d,score:{current:"0/15",saved:"0/15"},numberCompleted:0}),T=()=>e(t,{...d,score:{current:"4/15",saved:"4/15"},numberCompleted:15,isRetrying:!0}),J=()=>e(t,{...a,numberCompleted:15,handleEditResponses:()=>{console.log("edit responses")}}),K=()=>e(t,{...a,numberCompleted:15,handleEditResponses:()=>{console.log("edit responses")},handleRetry:()=>{console.log("retry")}});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{I as Complete,D as Default,F as PartialComplete,J as UngradedResponseComplete,K as UngradedResponseCompleteWithRetry,L as unlimitedComplete,T as unlimitedCompleteRetrying,U as unlimitedCompletedNoScore,O as unlimitedPartial,H as unlimitedPartialNoProgress};
