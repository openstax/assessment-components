import{s as i,C as c,j as o}from"./index.5e439e57.js";import{b as p,c as t}from"./theme.63109520.js";const m=i.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 3.2rem;
  ${p.mobile`
    margin: 1rem;
  `}
`,b=i.span`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &::after {
    content: "";
    display: block;
    height: 0.1rem;
    width: 1rem;
    background-color: ${t.palette.pale};
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
        color: ${t.palette.white};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${t.palette.darkGreen};
        box-shadow: ${r?"0 0 6px rgba(0, 0, 0, 0.4)":"none"};
      `;case"isIncorrect":return c`
        color: ${t.palette.white};
        background-color: ${t.palette.lightRed};
        border-color: ${t.palette.darkRed};
        box-shadow: ${r?"0 0 6px rgba(0, 0, 0, 0.4)":"none"};
      `;default:return c`
        color: ${t.palette.darkGray};
        background-color: ${r?t.palette.white:t.palette.neutralLight};
        border-color: ${r?t.palette.darkGray:t.palette.neutralLight};
        box-shadow: ${r?"0 0 6px rgba(0, 0, 0, 0.4)":"none"};
      `}},u=i.button`
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
`,h=({index:e,isActive:r,variant:n,goToStep:l})=>o(b,{children:o(u,{variant:n,isActive:r,onClick:()=>l(e),children:e+1})}),d=({steps:e,activeIndex:r,goToStep:n})=>o(m,{children:e.map((l,s)=>o(h,{index:s,isActive:s===r,variant:l.variant,goToStep:n},s))}),w=["isIncorrect","isCorrect","isIncorrect","isIncorrect",null,null,null,null],a={activeIndex:0,goToStep:e=>console.log(e),steps:w.map(e=>({variant:e}))},x=()=>o(d,{...a,steps:a.steps.map(e=>Object.assign({},e,{variant:null}))}),y=()=>o(d,{...a,activeIndex:4}),k=()=>o(d,{...a,activeIndex:2});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,y as InProgress,k as Review};
