import{s as u,j as e}from"./index.dfd08f9a.js";import{I as c}from"./Card.0891eb1d.js";import{B as p}from"./Button.8adc5b53.js";import"./theme.6dc881e6.js";var o="/home/runner/work/assessment-components/assessment-components/src/components/CompletionStatus.tsx";const N=u(c)`
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
`,b=u.h2`
  font-size: 2.4rem;
  margin: 0;
`,s=({numberOfQuestions:r,numberCompleted:t,handleClick:d})=>{const n=r===t,i=t>0,a=n?"Next":i?"Continue":"Start";return e(N,{children:[e(b,{children:n?"You are done.":i?"Quiz is partially complete.":"No questions have been answered."},void 0,!1,{fileName:o,lineNumber:44,columnNumber:7},void 0),e("p",{children:n?"Great job answering all the questions.":i?`You've completed ${t} of ${r} questions.`:"Begin working on the quiz."},void 0,!1,{fileName:o,lineNumber:45,columnNumber:7},void 0),e(p,{"data-test-id":`${a.split(" ")[0].toLowerCase()}-btn`,onClick:()=>d(),children:a},void 0,!1,{fileName:o,lineNumber:46,columnNumber:7},void 0)]},void 0,!0,{fileName:o,lineNumber:43,columnNumber:5},void 0)};var m="/home/runner/work/assessment-components/assessment-components/src/components/CompletionStatus.stories.tsx";const l={numberOfQuestions:15,numberCompleted:0,handleClick:()=>{console.log("click")}},x=()=>e(s,{...l},void 0,!1,{fileName:m,lineNumber:9,columnNumber:30},void 0),w=()=>e(s,{...l,numberCompleted:3},void 0,!1,{fileName:m,lineNumber:10,columnNumber:38},void 0),g=()=>e(s,{...l,numberCompleted:15},void 0,!1,{fileName:m,lineNumber:11,columnNumber:31},void 0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Complete,x as Default,w as PartialComplete};
