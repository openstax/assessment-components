import{u as l,R as r,j as s,a as o}from"./index-bd739496.js";import{c as i}from"./index-40e1f09b.js";const d=({html:e,component:a,block:n=!1,...t})=>{const c=l();return r.useEffect(()=>{c()},[c,e]),a!==void 0?r.cloneElement(a,{html:e,...t}):n?s("div",{dangerouslySetInnerHTML:{__html:e},...t}):s("span",{dangerouslySetInnerHTML:{__html:e},...t})},m=e=>s("aside",{children:s(d,{component:e.contentRenderer,className:i("question-feedback-content","has-html",e.className),html:e.children,block:!0})}),h=e=>{const a=e.position||"bottom",n=i("question-feedback",a);return o("aside",{className:n,children:[s("div",{className:"arrow","aria-label":"Answer Feedback"}),s(m,{...e,children:e.children})]})};export{d as C,h as F,m as S};
