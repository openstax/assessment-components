import{s as a,r as o,a as u,j as s}from"./index-c933295e.js";import{c as r}from"./theme-28303e24.js";import{B as R}from"./Button-01868bf4.js";import{f as T}from"./utils-e132754e.js";let D=0;const H=a.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-left: 1px solid ${r.palette.neutralLighter};
  min-width: 300px;
`,y=a.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,w=a.label`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${r.palette.neutralDarker};
`,P=a.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
`,S=a.input`
  width: 6rem;
  padding: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
  border: 1px solid ${r.palette.neutral};
  border-radius: 4px;
  text-align: center;

  &::placeholder {
    color: #6F6F6F;
    text-align: center;
    line-height: normal;
  }

  &:focus {
    outline: none;
    border-color: ${r.palette.blue};
  }

  &:disabled {
    background-color: ${r.palette.neutralLighter};
    cursor: not-allowed;
  }
`,U=a.textarea`
  width: 100%;
  min-height: 12rem;
  padding: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
  font-family: inherit;
  border: 1px solid ${r.palette.neutral};
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${r.palette.blue};
  }

  &:disabled {
    background-color: ${r.palette.neutralLighter};
    cursor: not-allowed;
  }
`,V=a.div`
  display: flex;
`,q=a.span`
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${r.palette.neutralThin};
`,W=({questionId:I,maxScore:c,score:t,comment:d,onChange:p,onSave:x,disabled:m=!1,gradingTimestamp:b})=>{const i=o.useRef(null);i.current===null&&(i.current=`frg-${D++}`);const v=`${i.current}-score`,F=`${i.current}-comment`,[n,C]=o.useState((t==null?void 0:t.toString())||""),[l,$]=o.useState(d||""),[z,E]=o.useState(!1),[f,N]=o.useState(!1),k=t!==void 0;o.useEffect(()=>{const e=parseFloat(n),g=!isNaN(e)&&e!==t;E(g||l!==(d||""))},[n,l,t,d]),o.useEffect(()=>{C((t==null?void 0:t.toString())||""),$(d||"")},[t,d]),o.useEffect(()=>{p&&!isNaN(parseFloat(n))&&p({score:parseFloat(n),comment:l})},[n,l,p]);const L=e=>{const g=e.target.value;C(g)},G=e=>{$(e.target.value)},j=async()=>{const e=parseFloat(n);if(!isNaN(e)&&e>=0&&e<=c&&x){N(!0);try{await x(I,{score:e,max:c,comment:l})}finally{N(!1)}}},h=parseFloat(n),B=!isNaN(h)&&h>=0&&h<=c;return u(H,{children:[s(y,{children:u(P,{children:[s(w,{htmlFor:v,children:"Points"}),s(S,{id:v,type:"number",value:n,onChange:L,disabled:m||f,min:0,max:c,step:1,placeholder:"--","aria-label":"Score"}),u("span",{children:["out of ",c]})]})}),u(y,{children:[s(w,{htmlFor:F,children:"Comment"}),s(U,{id:F,value:l,onChange:G,disabled:m||f,placeholder:"Enter feedback for the student...","aria-label":"Comment"})]}),s(V,{children:s(R,{onClick:j,disabled:!(z&&B&&!m&&!f),children:k?"Update":"Save"})}),b&&u(q,{children:["Last graded on ",T(b)]})]})};export{W as F};
