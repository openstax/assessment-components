import{W as p,s as a,a as c,F as u,j as t}from"./index-12e12f28.js";import{I as h}from"./Card-d3cd39e0.js";import{B as x}from"./Button-442ac3a9.js";import"./theme-e6ec1032.js";import"./index-37c23baf.js";const C=p`
  :root {
    --content-text-scale: 1;
  }
`,w=a(h)`
  padding: 88px 72px;
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(3rem * var(--content-text-scale));
  display: block;

  button {
    min-width: 160px;
    height: 48px;
  }

  p {
    margin: 16px 0 20px 0;
  }
`,g=a.h2`
  font-size: calc(2.4rem * var(--content-text-scale));
  margin: 0;
`,s=a(({numberOfQuestions:i,numberCompleted:e,handleClick:d,className:m})=>{const o=i===e,n=e>0,r=o?"Next":n?"Continue":"Start";return c(u,{children:[t(C,{}),c(w,{className:m,children:[t(g,{children:o?"You are done.":n?"Quiz is partially complete.":"No questions have been answered."}),t("p",{children:o?"Great job answering all the questions.":n?`You've completed ${e} of ${i} questions.`:"Begin working on the quiz."}),t(x,{"data-test-id":`${r.split(" ")[0].toLowerCase()}-btn`,onClick:()=>d(),children:r})]})]})})``,l={numberOfQuestions:15,numberCompleted:0,handleClick:()=>{console.log("click")}},S=()=>t(s,{...l}),j=()=>t(s,{...l,numberCompleted:3}),q=()=>t(s,{...l,numberCompleted:15});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{q as Complete,S as Default,j as PartialComplete};