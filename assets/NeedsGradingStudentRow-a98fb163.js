import{s as t,C as E,r as s,a as r,j as n,F as R}from"./index-1246e674.js";import{c as e}from"./theme-e25c540c.js";import{F as S}from"./FreeResponseGrading-edfeb266.js";const g=16.8,T=t.div`
  border-bottom: 1px solid ${e.palette.neutralLight};

  &:last-child {
    border-bottom: none;
  }
`,F=t.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.2rem 1.6rem;
  background: none;
  border: none;
  cursor: pointer;
  gap: 1rem;
  text-align: left;
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${e.palette.neutralDarker};

  &:hover {
    background-color: ${e.palette.neutralLightest};
  }
`,G=t.span`
  font-weight: 600;
  flex: 1;
`,H=t.span`
  font-size: calc(1.3rem * var(--content-text-scale));
  color: ${e.palette.neutralThin};
  white-space: nowrap;

  strong {
    font-weight: 700;
    color: ${e.palette.neutralDarker};
  }
`,I=t.span`
  display: inline-block;
  width: 0;
  height: 0;
  flex-shrink: 0;
  ${({expanded:o})=>o?`
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid ${e.palette.neutralDark};
    `:`
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 6px solid ${e.palette.neutralDark};
    `}
`,N=t.div`
  display: flex;
  align-items: flex-start;
  border-top: 1px solid ${e.palette.neutralLighter};
`,j=t.div`
  flex: 1;
  padding: 1.6rem;
  min-width: 0;
`,A=t.div`
  border-left: 16px solid ${e.palette.neutralLighter};
  padding-left: 1.6rem;
  margin: 0 0 1rem 1rem;
  max-height: ${({expanded:o})=>o?"none":`${g}rem`};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${e.palette.neutralDark};
  white-space: pre-wrap;

  ${({expanded:o,isOverflowing:a})=>!o&&a?E`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `:""}
`,O=t.p`
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${e.palette.neutralThin};
  margin: 0 0 1rem 0;
`,P=t.button`
  display: inline;
  background: none;
  border: none;
  color: ${e.palette.blue};
  padding: 0;
  margin: 0 0 0 1rem;
  cursor: pointer;
  font-size: calc(1.3rem * var(--content-text-scale));
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`,B=t.div`
  margin-top: 1.6rem;
`,U=t.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${e.palette.neutralDarker};
`,M=t.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${e.palette.neutralDarker};
  white-space: pre-wrap;
  margin-top: 0.4rem;

  .feedback-label {
    font-weight: bold;
  }
`,K=({student:o,freeResponse:a,questionId:v,maxScore:p,score:d,comment:h,onSave:k,disabled:$,gradingTimestamp:y,expanded:u,onToggle:x})=>{const b=u!==void 0,f=d!==void 0,[C,D]=s.useState(!f),[l,L]=s.useState(!1),[w,z]=s.useState(!1),m=s.useRef(null),c=b?u:C;return s.useLayoutEffect(()=>{if(m.current){const i=!l&&m.current.scrollHeight>g*10;z(i)}},[a,l,c]),r(T,{children:[r(F,{type:"button",onClick:()=>{b?x==null||x():D(i=>!i)},"aria-expanded":c,children:[n(I,{expanded:c}),n(G,{children:o.name}),r(H,{children:[n("strong",{children:"Points:"})," ",f?d:"--"," out of ",p]})]}),r(N,{style:{display:c?void 0:"none"},children:[r(j,{children:[a?r(R,{children:[n(A,{ref:m,expanded:l,isOverflowing:w,children:a}),(w||l)&&n(P,{type:"button",onClick:()=>L(i=>!i),children:l?"read less":"read more"})]}):n(O,{children:"Unanswered"}),f&&r(B,{children:[r(U,{children:["Score: ",d,"/",p]}),h&&r(M,{children:[n("span",{className:"feedback-label",children:"Comment:"})," ",h]})]})]}),n(S,{questionId:v,maxScore:p,score:d,comment:h,onSave:k,disabled:$,gradingTimestamp:y})]})]})};export{I as C,K as N};
