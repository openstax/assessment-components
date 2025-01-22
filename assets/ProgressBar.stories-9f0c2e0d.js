import{j as a,s as h,C as d,a as p}from"./index-99ee4ded.js";import{b as w,c as n}from"./theme-df5a7ff0.js";import{F as b,b as I}from"./index-a8d710b8.js";const V=()=>a("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})});var v={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var r="fas",t="check",i=512,o=512,c=[10003,10004],s="f00c",l="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z";e.definition={prefix:r,iconName:t,icon:[i,o,c,s,l]},e.faCheck=e.definition,e.prefix=r,e.iconName=t,e.width=i,e.height=o,e.ligatures=c,e.unicode=s,e.svgPathData=l,e.aliases=c})(v);var g={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var r="fas",t="xmark",i=320,o=512,c=[128473,10005,10006,10060,215,"close","multiply","remove","times"],s="f00d",l="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z";e.definition={prefix:r,iconName:t,icon:[i,o,c,s,l]},e.faXmark=e.definition,e.prefix=r,e.iconName=t,e.width=i,e.height=o,e.ligatures=c,e.unicode=s,e.svgPathData=l,e.aliases=c})(g);const k=h.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;

  ${w.mobile`
    padding: 1.6rem 0.8rem;
  `}
`,y=h.span`
  display: flex;
  align-items: center;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`,$=e=>{switch(e){case"isStatus":return d`
        background-color: ${n.palette.neutralBright};
      `;case"isCorrect":return d`
        color: ${n.answer.correct};
        background-color: #E8F4D8;
      `;case"isIncorrect":return d`
        color: ${n.answer.incorrect};
        background-color: #F8E8EA;
      `;default:return d`
        background-color: ${n.palette.neutralBright};
      `}},f="box-shadow: 0px 1px 4px 0px #00000066;",M=h.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${e=>e.isActive?"4rem":"3.2rem"};
  height: ${e=>e.isActive?"4rem":"3.2rem"};
  border: 0;
  border-radius: 50%;
  margin: ${e=>e.isActive?"0":"0 0.3rem"};
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  color: ${n.palette.neutralDarker};
  ${e=>e.isActive?d`
    ${f}
    & + [data-icon] {
      bottom: 0;
      right: 0;
    }
  `:null}
  ${e=>$(e.variant)}
  &:hover {
    ${f}
  }
`,P=h(b)`
  background: ${e=>e.color};
  color: #fff;
  position: absolute;
  bottom: 0.4rem;
  right: 0.3rem;
  height: 0.8rem;
  width: 0.8rem;
  padding: 0.1rem;
  font-size: 1.2rem;
  border-radius: 50%;
`,S=({variant:e})=>{if(!e||e!=="isCorrect"&&e!=="isIncorrect"&&e!=="isIncomplete")return null;const r={isCorrect:{icon:v.faCheck,color:n.answer.correct,label:"Correct"},isIncorrect:{icon:g.faXmark,color:n.answer.incorrect,label:"Incorrect"},isIncomplete:{icon:I,color:n.answer.neutral,label:"Incomplete"}}[e];return a(P,{icon:r.icon,color:r.color,height:"16px",width:"16px","aria-label":r.label,"aria-hidden":void 0})},A=({index:e,isActive:r,step:t,goToStep:i})=>p(y,{children:[a(M,{variant:t.variant,isActive:r,onClick:()=>i(e,t),"aria-current":r?"location":"false","aria-label":t.variant==="isStatus"?"Assignment status":`Question ${e+1}`,children:t.variant==="isStatus"?a(V,{}):e+1}),a(S,{variant:t.variant})]}),m=({steps:e,activeIndex:r,goToStep:t})=>a(k,{"aria-label":"Breadcrumbs",children:e.map((i,o)=>a(A,{index:o,isActive:o===r,step:i,goToStep:t},o))}),Z=new Array(8).fill({variant:"isIncomplete"}),C=["isIncorrect","isCorrect","isIncorrect","isIncorrect","isIncomplete","isIncomplete","isIncomplete","isIncomplete","isStatus"],u={activeIndex:0,goToStep:(e,r)=>console.log(e,r),steps:C.map(e=>({variant:e}))},D={...u,steps:C.map(e=>e==="isCorrect"||e==="isIncorrect"?null:e).map(e=>({variant:e}))},F=()=>a(m,{...u,steps:[...Z,{variant:"isStatus"}]}),E=()=>a(m,{...u,activeIndex:4}),L=()=>a(m,{...u,activeIndex:2}),z=()=>a(m,{...u,activeIndex:8}),_=()=>a(m,{...D,activeIndex:4});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{F as Default,E as InProgress,_ as InProgressNoFeedback,L as Review,z as StatusStep};
