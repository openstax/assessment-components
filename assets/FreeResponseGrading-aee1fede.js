import{s as r,r as n,a as p,j as s}from"./index-6162b784.js";import{c as a}from"./theme-689bfc1f.js";import{B as j}from"./Button-411b55ab.js";import{f as B}from"./utils-e132754e.js";const I=r.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-left: 1px solid ${a.palette.neutralLighter};
  min-width: 300px;
`,F=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,C=r.label`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${a.palette.neutralDarker};
`,T=r.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
`,R=r.input`
  width: 6rem;
  padding: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
  border: 1px solid ${a.palette.neutral};
  border-radius: 4px;
  text-align: center;

  &::placeholder {
    color: #6F6F6F;
    text-align: center;
    line-height: normal;
  }

  &:focus {
    outline: none;
    border-color: ${a.palette.blue};
  }

  &:disabled {
    background-color: ${a.palette.neutralLighter};
    cursor: not-allowed;
  }
`,D=r.textarea`
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
`,H=r.div`
  display: flex;
`,P=r.span`
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${a.palette.neutralThin};
`,K=({questionId:N,maxScore:c,score:t,comment:d,onChange:u,onSave:f,disabled:i=!1,gradingTimestamp:g})=>{const[o,x]=n.useState((t==null?void 0:t.toString())||""),[l,v]=n.useState(d||""),[y,$]=n.useState(!1),[w,b]=n.useState(!1),z=t!==void 0;n.useEffect(()=>{const e=parseFloat(o),h=!isNaN(e)&&e!==t;$(h||l!==(d||""))},[o,l,t,d]),n.useEffect(()=>{x((t==null?void 0:t.toString())||""),v(d||"")},[t,d]),n.useEffect(()=>{u&&!isNaN(parseFloat(o))&&u({score:parseFloat(o),comment:l})},[o,l,u]);const E=e=>{const h=e.target.value;x(h)},k=e=>{v(e.target.value)},L=async()=>{const e=parseFloat(o);if(!isNaN(e)&&e>=0&&e<=c&&f){b(!0);try{await f(N,{score:e,max:c,comment:l})}finally{b(!1)}}},m=parseFloat(o),G=!isNaN(m)&&m>=0&&m<=c;return p(I,{children:[s(F,{children:p(T,{children:[s(C,{htmlFor:"score-input",children:"Points"}),s(R,{id:"score-input",type:"number",value:o,onChange:E,disabled:i,min:0,max:c,step:1,placeholder:"--","aria-label":"Score"}),p("span",{children:["out of ",c]})]})}),p(F,{children:[s(C,{htmlFor:"comment-input",children:"Comment"}),s(D,{id:"comment-input",value:l,onChange:k,disabled:i,placeholder:"Enter feedback for the student...","aria-label":"Comment"})]}),s(H,{children:s(j,{onClick:L,disabled:!(y&&G&&!i&&!w),children:z?"Update":"Save"})}),g&&p(P,{children:["Last graded on ",B(g)]})]})};export{K as F};
