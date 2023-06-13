import{j as o,s as d,C as n}from"./index-4cca09be.js";import{b as p,c as r}from"./theme-fe2e1580.js";const C=()=>o("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M14.556 2.09149C15.2296 1.78355 16 2.26721 16 2.99824V10.5951C16 10.9241 15.8362 11.2328 15.5605 11.4188C14.4229 12.1864 13.2007 12.6956 11.6715 12.6956C9.53267 12.6956 8.12768 11.6087 6.42651 11.6087C4.81213 11.6087 3.69241 11.923 2.79365 12.3V15.25C2.79365 15.6642 2.45254 16 2.03175 16H1.52381C1.10302 16 0.761905 15.6642 0.761905 15.25V3.18577C0.301492 2.86952 0 2.34455 0 1.74999C0 0.75924 0.836349 -0.0391985 1.852 0.00148899C2.75575 0.0376765 3.49578 0.75049 3.55203 1.63912C3.56854 1.8998 3.52632 2.1488 3.43819 2.37543C4.09648 2.13699 4.80613 1.99999 5.59835 1.99999C7.73718 1.99999 9.14216 3.08696 10.8433 3.08696C12.1289 3.08696 13.4659 2.5899 14.556 2.09149ZM2.79365 4.20718V6.40999C3.71429 6.07656 4.41841 5.85281 5.13016 5.75656V3.51999C4.38413 3.5878 3.84635 3.82593 2.79365 4.20718ZM9.80317 4.49437C8.96454 4.34837 8.21949 4.05752 7.46667 3.82749V5.93437C8.23413 6.14393 8.9767 6.44824 9.80317 6.63156V4.49437ZM5.13016 5.75656V7.94531C6.1713 7.85224 6.84159 7.92546 7.46667 8.06406V5.93437C6.66517 5.71452 5.98791 5.6399 5.13016 5.75656ZM7.46667 10.2012C8.30279 10.3466 9.04546 10.6365 9.80317 10.8681V8.76156C9.03248 8.55074 8.29397 8.24749 7.46667 8.06406V10.2012ZM2.79365 10.6906C3.54349 10.4284 4.31079 10.2581 5.13016 10.1731V7.94531C4.30127 8.01874 3.62667 8.19656 2.79365 8.48781V10.6906ZM14.4762 3.76562C13.8 4.04218 12.9971 4.31687 12.1397 4.4678V6.71499C13.0067 6.57874 13.7279 6.27437 14.4762 5.96843V3.76562ZM14.4762 10.3269V8.12406C13.7717 8.56781 12.9276 8.83062 12.1397 8.93718V11.1741C12.9356 11.0997 13.679 10.8291 14.4762 10.3269ZM9.80317 6.63156V8.76156C10.6179 8.9845 11.283 9.05349 12.1397 8.93718V6.71499C11.3143 6.84584 10.5542 6.79862 9.80317 6.63156Z",fill:"currentColor"})}),g=d.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 2rem;
  ${p.mobile`
    padding: 0;
  `}
`,u=d.span`
  display: flex;
  align-items: center;
  margin: 0 1rem 1rem 0;

  &:last-child {
    margin-right: 0;
  }
`,m=(e,t)=>{switch(e){case"isStatus":return n`
        color: ${t?r.palette.white:r.palette.darkGray};
        background-color: ${t?r.palette.darkGray:r.palette.neutralLight};
        border: none;
        box-shadow: ${t?"0px 0px 2px rgba(0, 0, 0, 0.4), 0px 0px 6px rgba(0, 0, 0, 0.2)":"none"};
      `;case"isCorrect":return n`
        color: ${r.palette.white};
        background-color: rgba(99, 165, 36, 0.6);
        border-color: ${r.palette.darkGreen};
        box-shadow: ${t?"0 0 6px rgba(0, 0, 0, 0.4)":"none"};
      `;case"isIncorrect":return n`
        color: ${r.palette.white};
        background-color: ${r.palette.lightRed};
        border-color: ${r.palette.darkRed};
        box-shadow: ${t?"0 0 6px rgba(0, 0, 0, 0.4)":"none"};
      `;default:return n`
        color: ${r.palette.darkGray};
        background-color: ${t?r.palette.white:r.palette.neutralLight};
        border-color: ${t?r.palette.darkGray:r.palette.neutralLight};
        box-shadow: ${t?"0 0 6px rgba(0, 0, 0, 0.4)":"none"};
      `}},h=d.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${e=>e.isActive?"3.0rem":"2.4rem"};
  height: ${e=>e.isActive?"3.0rem":"2.4rem"};
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  margin: ${e=>e.isActive?"0":"0 0.3rem"};
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  ${e=>m(e.variant,e.isActive)}
`,w=({index:e,isActive:t,step:a,goToStep:i})=>o(u,{children:o(h,{variant:a.variant,isActive:t,onClick:()=>i(e,a),children:a.variant==="isStatus"?o(C,{}):e+1})}),l=({steps:e,activeIndex:t,goToStep:a})=>o(g,{children:e.map((i,c)=>o(w,{index:c,isActive:c===t,step:i,goToStep:a},c))}),b=new Array(8).fill({variant:null}),x=["isIncorrect","isCorrect","isIncorrect","isIncorrect",null,null,null,null,"isStatus"],s={activeIndex:0,goToStep:(e,t)=>console.log(e,t),steps:x.map(e=>({variant:e}))},f=()=>o(l,{...s,steps:[...b,{variant:"isStatus"}]}),v=()=>o(l,{...s,activeIndex:4}),y=()=>o(l,{...s,activeIndex:2}),I=()=>o(l,{...s,activeIndex:8});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,v as InProgress,y as Review,I as StatusStep};
