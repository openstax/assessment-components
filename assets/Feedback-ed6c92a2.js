import{u as l,R as r,j as a,a as o}from"./index-f9eac2aa.js";import{c as i}from"./index-e6fefda7.js";const d=({html:e,component:s,block:t=!1,...n})=>{const c=l();return r.useEffect(()=>{c()},[c,e]),s!==void 0?r.cloneElement(s,{html:e,...n}):t?a("div",{dangerouslySetInnerHTML:{__html:e},...n}):a("span",{dangerouslySetInnerHTML:{__html:e},...n})},m=e=>a("aside",{children:a(d,{component:e.contentRenderer,className:i("question-feedback-content","has-html",e.className),html:e.children,block:!0})}),h=({id:e,...s})=>{const t=s.position||"bottom",n=i("question-feedback",t);return o("aside",{id:e,className:n,children:[a("div",{className:"arrow","aria-label":"Answer Feedback"}),a(m,{...s,children:s.children})]})};export{d as C,h as F,m as S};