import{W as S,s as i,a,F as $,j as e}from"./index-032b48ee.js";import{I as z}from"./Card-1a70cf4d.js";import{B as h}from"./Button-1e96fc4b.js";import{c as t}from"./theme-8fdf0c94.js";import"./index-e1374eea.js";const q=S`
  :root {
    --content-text-scale: 1;
  }
`,N=i(z)`
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
`,B=i.h2`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`,P=i.div`
  display: flex;
  margin: 0;
  gap: 1rem;

  button {
    height: 48px;
  }
`,R=i.div`
  display: flex;
  margin: 0;
  gap: 1rem;
`,Y=i(h)`
  background-color: ${t.palette.white};
  color: ${t.palette.black};
  border: 1px solid ${t.palette.pale};
  font-weight: normal;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${t.palette.neutralBright} !important;
    color: ${t.palette.black} !important;
    border: 1px solid ${t.palette.pale} !important;
  }

  &:active {
    background-color: ${t.palette.neutralLight} !important;
    color: ${t.palette.black} !important;
    border: 1px solid ${t.palette.pale} !important;
  }
`,o=i(({numberOfQuestions:u,numberCompleted:c,handleContinue:p,handleNext:g,className:C,score:r,handleRetry:l,isRetrying:x})=>{const n=u===c,d=c>0,b=n||c===0&&l||d&&l?"Next":d?"Continue":"Start",v=n?"Retry Quiz":"Resume Quiz",f="Attempts for this quiz are unlimited. Your highest score will be saved.",w="You are in the middle of a quiz attempt. Attempts for this quiz are unlimited. Your highest score will be saved.",k=n?l:p,y=n||l?g:p;return a($,{children:[e(q,{}),a(N,{className:C,children:[e(B,{children:n?"You are done.":d?"Quiz is partially complete.":"No questions have been answered."}),l?a("div",{children:[e("p",{children:n?f:w}),e(R,{children:a("p",{children:[e("b",{children:"Current Score:"})," ",(r==null?void 0:r.current)??"Score unavailable"," | ",e("b",{children:"Saved Score:"})," ",(r==null?void 0:r.saved)??"Score unavailable"]})})]}):e("p",{children:n?"Great job answering all the questions.":d?`You've completed ${c} of ${u} questions.`:"Begin working on the quiz."}),a(P,{children:[l?e(Y,{"data-test-id":"retry-resume-btn",onClick:k,disabled:x,children:v}):null,e(h,{"data-test-id":`${b.split(" ")[0].toLowerCase()}-btn`,onClick:y,children:b})]})]})]})})``,m={numberOfQuestions:15,numberCompleted:0,handleNext:()=>{console.log("next")},handleContinue:()=>{console.log("continue")}},s={numberOfQuestions:15,numberCompleted:0,handleNext:()=>{console.log("next")},handleContinue:()=>{console.log("continue")},handleRetry:()=>{console.log("retry")},score:{current:"5/15",saved:"10/15"}},E=()=>e(o,{...m}),F=()=>e(o,{...m,numberCompleted:3}),I=()=>e(o,{...m,numberCompleted:15}),L=()=>e(o,{...s,numberCompleted:15}),O=()=>e(o,{...s,numberCompleted:5}),W=()=>e(o,{...s,score:void 0,numberCompleted:15}),H=()=>e(o,{...s,score:{current:"0/15",saved:"0/15"},numberCompleted:0}),T=()=>e(o,{...s,score:{current:"4/15",saved:"4/15"},numberCompleted:15,isRetrying:!0});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{I as Complete,E as Default,F as PartialComplete,L as unlimitedComplete,T as unlimitedCompleteRetrying,W as unlimitedCompletedNoScore,O as unlimitedPartial,H as unlimitedPartialNoProgress};
