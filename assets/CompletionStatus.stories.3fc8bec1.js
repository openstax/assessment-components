import{s as d,j as e}from"./index.a7d08830.js";import{I as p}from"./Card.d374153d.js";import{B as N}from"./Button.88d3b1a3.js";import"./theme.a55d2ff4.js";var n="/home/runner/work/assessment-components/assessment-components/src/components/CompletionStatus.tsx";const f=d(p)`
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
`,b=d.h2`
  font-size: 2.4rem;
  margin: 0;
`,t=({numberOfQuestions:r,numberCompleted:m,canContinue:a,handleClick:c})=>{const o=r===m,l=m>0,u=o&&a?"Continue to next step":l?"Continue":"Start";return e(f,{children:[e(b,{children:o?"You are done.":l?"Steps in progress":"No questions have been answered."},void 0,!1,{fileName:n,lineNumber:45,columnNumber:7},void 0),e("p",{children:o?"Great job answering all the questions.":l?`You've completed ${m} of ${r} questions.`:"Begin working on the quiz."},void 0,!1,{fileName:n,lineNumber:46,columnNumber:7},void 0),o&&!a?null:e(N,{"data-test-id":`${u.split(" ")[0].toLowerCase()}-btn`,onClick:()=>c(),children:u},void 0,!1,{fileName:n,lineNumber:48,columnNumber:9},void 0)]},void 0,!0,{fileName:n,lineNumber:44,columnNumber:5},void 0)};var i="/home/runner/work/assessment-components/assessment-components/src/components/CompletionStatus.stories.tsx";const s={numberOfQuestions:15,numberCompleted:0,canContinue:!1,handleClick:()=>{console.log("click")}},w=()=>e(t,{...s},void 0,!1,{fileName:i,lineNumber:10,columnNumber:30},void 0),g=()=>e(t,{...s,numberCompleted:3},void 0,!1,{fileName:i,lineNumber:11,columnNumber:38},void 0),k=()=>e(t,{...s,numberCompleted:15,canContinue:!0},void 0,!1,{fileName:i,lineNumber:12,columnNumber:43},void 0),S=()=>e(t,{...s,numberCompleted:15,canContinue:!1},void 0,!1,{fileName:i,lineNumber:13,columnNumber:31},void 0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as Complete,k as CompleteWithContinue,w as Default,g as PartialComplete};
