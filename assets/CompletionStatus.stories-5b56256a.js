import{s as l,a as m,j as e}from"./index-4cca09be.js";import{I as p}from"./Card-e55fff7b.js";import{B as c}from"./Button-c2f33026.js";import"./theme-fe2e1580.js";import"./index-0077c59e.js";const u=l(p)`
  padding: 88px 72px;
  font-size: 1.8rem;
  line-height: 3rem;
  display: block;

  button {
    min-width: 160px;
    height: 48px;
  }

  p {
    margin: 16px 0 20px 0;
  }
`,h=l.h2`
  font-size: 2.4rem;
  margin: 0;
`,i=({numberOfQuestions:r,numberCompleted:t,handleClick:d})=>{const o=r===t,n=t>0,a=o?"Next":n?"Continue":"Start";return m(u,{children:[e(h,{children:o?"You are done.":n?"Quiz is partially complete.":"No questions have been answered."}),e("p",{children:o?"Great job answering all the questions.":n?`You've completed ${t} of ${r} questions.`:"Begin working on the quiz."}),e(c,{"data-test-id":`${a.split(" ")[0].toLowerCase()}-btn`,onClick:()=>d(),children:a})]})},s={numberOfQuestions:15,numberCompleted:0,handleClick:()=>{console.log("click")}},b=()=>e(i,{...s}),k=()=>e(i,{...s,numberCompleted:3}),y=()=>e(i,{...s,numberCompleted:15});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Complete,b as Default,k as PartialComplete};
