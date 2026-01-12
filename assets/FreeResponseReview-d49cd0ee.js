import{s,R as i,a as h,j as r}from"./index-032b48ee.js";import{l as o,c}from"./theme-8fdf0c94.js";const d=16.8,p=`
  padding: ${o.answer.horizontalSpacing} ${o.answer.horizontalBuffer};
  margin: ${o.answer.verticalSpacing} 0 ${o.answer.horizontalSpacing} ${o.answer.verticalSpacing};
`,w=s.div`
  ${p}
  border-left: ${o.answer.horizontalSpacing} solid ${c.palette.neutralLighter};
  font-style: italic;
`,x=s.div`
  ${p}
  position: relative;
  width: 100%;
`,$=s.div`
  max-height: ${({expanded:e})=>e?"none":`${d}rem`};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: 1.4rem;

  ${({expanded:e,isOverflowing:n})=>!e&&n?`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `:""}
`,m=s.button`
  display: inline;
  background: none;
  border: none;
  color: ${c.palette.blue};
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 1.3rem;
  text-decoration: underline;
  white-space: nowrap;
`,b=({children:e,previewMode:n})=>n?r(x,{children:e}):r(w,{children:e}),S=({free_response:e,previewMode:n})=>{const[t,f]=i.useState(!1),[l,u]=i.useState(!1),a=i.useRef(null);return i.useLayoutEffect(()=>{if(n&&a.current){const g=!t&&a.current.scrollHeight>d*10;u(g)}},[e,n,t]),e?h(b,{previewMode:n,children:[n?r($,{ref:a,expanded:t,isOverflowing:l,children:e}):e,n&&(l||t)&&r(m,{onClick:()=>f(!t),children:t?"show less":"read more"})]}):null};export{S as F};
