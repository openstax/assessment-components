import{s as m,C as c,j as t}from"./index.8cb28562.js";import{b as p,c as o}from"./theme.f0f85d84.js";var a="/home/runner/work/assessment-components/assessment-components/src/components/ProgressBar.tsx";const b=m.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${p.mobile`
    padding: 0;
  `}
`,f=m.span`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &::after {
    content: "";
    display: block;
    height: 0.1rem;
    width: 1rem;
    background-color: ${o.palette.pale};
  }

  &:last-child {
    &::after {
      content: none;
    }
  }

  ${p.mobile`
    &::after {
      width: 3.3rem;
    }
  `}
`,g=(e,r)=>{switch(e){case"isCorrect":return c`
        color: ${o.palette.white};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${o.palette.darkGreen};
        box-shadow: ${r?"0 0 6px rgba(0, 0, 0, 0.4)":"none"};
      `;case"isIncorrect":return c`
        color: ${o.palette.white};
        background-color: ${o.palette.lightRed};
        border-color: ${o.palette.darkRed};
        box-shadow: ${r?"0 0 6px rgba(0, 0, 0, 0.4)":"none"};
      `;default:return c`
        color: ${o.palette.darkGray};
        background-color: ${r?o.palette.white:o.palette.neutralLight};
        border-color: ${r?o.palette.darkGray:o.palette.neutralLight};
        box-shadow: ${r?"0 0 6px rgba(0, 0, 0, 0.4)":"none"};
      `}},h=m.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  margin: 0 0.3rem;
  font-weight: bold;
  cursor: pointer;
  ${e=>g(e.variant,e.isActive)}
`,v=({index:e,isActive:r,step:n,goToStep:l})=>t(f,{children:t(h,{variant:n.variant,isActive:r,onClick:()=>l(e,n),children:e+1},void 0,!1,{fileName:a,lineNumber:98,columnNumber:5},void 0)},void 0,!1,{fileName:a,lineNumber:97,columnNumber:3},void 0),d=({steps:e,activeIndex:r,goToStep:n})=>t(b,{children:e.map((l,i)=>t(v,{index:i,isActive:i===r,step:l,goToStep:n},i,!1,{fileName:a,lineNumber:102,columnNumber:31},void 0))},void 0,!1,{fileName:a,lineNumber:101,columnNumber:132},void 0);var u="/home/runner/work/assessment-components/assessment-components/src/components/ProgressBar.stories.tsx";const w=["isIncorrect","isCorrect","isIncorrect","isIncorrect",null,null,null,null],s={activeIndex:0,goToStep:(e,r)=>console.log(e,r),steps:w.map(e=>({variant:e}))},$=()=>t(d,{...s,steps:s.steps.map(e=>Object.assign({},e,{variant:null}))},void 0,!1,{fileName:u,lineNumber:11,columnNumber:30},void 0),y=()=>t(d,{...s,activeIndex:4},void 0,!1,{fileName:u,lineNumber:12,columnNumber:33},void 0),k=()=>t(d,{...s,activeIndex:2},void 0,!1,{fileName:u,lineNumber:13,columnNumber:29},void 0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{$ as Default,y as InProgress,k as Review};
