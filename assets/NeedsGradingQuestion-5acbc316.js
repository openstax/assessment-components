import{s as n,r as h,a,j as o,F as k}from"./index-1246e674.js";import{c as t}from"./theme-e25c540c.js";import{C as S,N as w}from"./NeedsGradingStudentRow-a98fb163.js";import{C as y}from"./Content-426e9025.js";const $=n.div`
  border: 1px solid ${t.palette.neutralLight};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
`,C=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  background-color: ${t.card.header.background};
`,E=n.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
`,Q=n.span`
  font-size: calc(1.6rem * var(--content-text-scale));
  font-weight: 600;
  color: ${t.palette.neutralDarker};
  margin: 0;
`,T=n.span`
  font-size: calc(1.3rem * var(--content-text-scale));
  font-weight: 600;
  color: ${t.palette.white};
  background-color: ${t.palette.darkGray};
  border-radius: 5px;
  padding: 0.2rem 0.8rem;
`,I=n.span`
  font-weight: normal;
  margin: 0 0.4rem;
`,z=n.span`
  font-weight: normal;
  font-size: calc(1.4rem * var(--content-text-scale));
`,G=n.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${t.palette.blue};
  padding: 0;
  text-decoration: underline;

  &:hover {
    color: ${t.palette.mediumBlue};
  }
`,j=n.div`
  padding: 1.6rem 1.6rem 0;
  background-color: ${t.card.body.background};
`,L=n.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${t.palette.neutralDarker};
`,N=n.div`
  padding: 0.8rem 1.6rem 1.2rem;
  border-bottom: 1px solid ${t.palette.neutralLight};
  background-color: ${t.card.body.background};
`,D=n.div`
  background-color: ${t.card.body.background};
`,R=l=>{const c=new Set;return l.forEach(r=>{r.score===void 0&&c.add(String(r.student.userId))}),c},J=({questionNumber:l,questionStemHtml:c,students:r,questionId:u})=>{const[s,x]=h.useState(!0),[g,p]=h.useState(()=>R(r)),b=r.filter(e=>e.score!==void 0).length,m=r.every(e=>g.has(String(e.student.userId))),f=e=>{e.stopPropagation(),p(m?new Set:new Set(r.map(d=>String(d.student.userId))))},v=e=>{p(d=>{const i=new Set(d);return i.has(e)?i.delete(e):i.add(e),i})};return a($,{children:[a(C,{children:[a(E,{type:"button",onClick:()=>x(e=>!e),"aria-expanded":s,children:[o(S,{expanded:s}),a(Q,{children:["Question ",l,u&&a(k,{children:[o(I,{children:"|"}),a(z,{children:["ID: ",u]})]})]})]}),a(T,{children:[b,"/",r.length," Graded"]})]}),a("div",{style:{display:s?void 0:"none"},children:[o(j,{children:o(L,{children:o(y,{html:c,block:!0})})}),o(N,{children:o(G,{type:"button",onClick:f,children:m?"Collapse all answers":"Expand all answers"})}),o(D,{children:r.map(e=>{const d=String(e.student.userId);return o(w,{...e,expanded:g.has(d),onToggle:()=>v(d)},d)})})]})]})};export{J as N};
