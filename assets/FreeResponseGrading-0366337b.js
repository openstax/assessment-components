import{s,r,a as p,j as n}from"./index-aa5cf4ff.js";import{c as a}from"./theme-c95df568.js";import{B as j}from"./Button-6e78a201.js";import{f as B}from"./utils-e132754e.js";const I=s.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-left: 1px solid ${a.palette.neutralLighter};
  min-width: 300px;
`,C=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,N=s.label`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${a.palette.neutralDarker};
`,T=s.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
`,R=s.input`
  width: 6rem;
  padding: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
  border: 1px solid ${a.palette.neutral};
  border-radius: 4px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: ${a.palette.blue};
  }

  &:disabled {
    background-color: ${a.palette.neutralLighter};
    cursor: not-allowed;
  }

`,D=s.textarea`
  width: 100%;
  min-height: 12rem;
  padding: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
  font-family: inherit;
  border: 1px solid ${a.palette.neutral};
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${a.palette.blue};
  }

  &:disabled {
    background-color: ${a.palette.neutralLighter};
    cursor: not-allowed;
  }
`,H=s.div`
  display: flex;
`,P=s.span`
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${a.palette.neutralThin};
`,K=({questionId:y,maxScore:l,score:t,comment:d,onChange:u,onSave:h,disabled:m=!1,gradingTimestamp:g})=>{const[o,x]=r.useState((t==null?void 0:t.toString())||""),[c,v]=r.useState(d||""),[F,$]=r.useState(!1),[w,b]=r.useState(!1),z=t!==void 0;r.useEffect(()=>{const e=parseFloat(o),f=!isNaN(e)&&e!==t;$(f||c!==(d||""))},[o,c,t,d]),r.useEffect(()=>{x((t==null?void 0:t.toString())||""),v(d||"")},[t,d]),r.useEffect(()=>{u&&!isNaN(parseFloat(o))&&u({score:parseFloat(o),comment:c})},[o,c,u]);const E=e=>{const f=e.target.value;x(f)},k=e=>{v(e.target.value)},L=async()=>{const e=parseFloat(o);if(!isNaN(e)&&e>=0&&e<=l&&h){b(!0);try{await h(y,{score:e,max:l,comment:c})}finally{b(!1)}}},i=parseFloat(o),G=!isNaN(i)&&i>=0&&i<=l;return p(I,{children:[n(C,{children:p(T,{children:[n(N,{htmlFor:"score-input",children:"Points"}),n(R,{id:"score-input",type:"number",value:o,onChange:E,disabled:m,min:0,max:l,step:1,placeholder:"0","aria-label":"Score"}),p("span",{children:["out of ",l]})]})}),p(C,{children:[n(N,{htmlFor:"comment-input",children:"Comment"}),n(D,{id:"comment-input",value:c,onChange:k,disabled:m,placeholder:"Enter feedback for the student...","aria-label":"Comment"})]}),n(H,{children:n(j,{onClick:L,disabled:!(F&&G&&!m&&!w),children:z?"Update":"Save"})}),g&&p(P,{children:["Last graded on ",B(g)]})]})};export{K as F};
