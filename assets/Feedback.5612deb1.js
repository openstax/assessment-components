import{R as l,j as a,c,a as r}from"./index.45218507.js";const i=({html:e,component:n,block:s=!1,...t})=>n!==void 0?l.cloneElement(n,{html:e,...t}):s?a("div",{dangerouslySetInnerHTML:{__html:e},...t}):a("span",{dangerouslySetInnerHTML:{__html:e},...t}),o=e=>a("aside",{children:a(i,{component:e.contentRenderer,className:c("question-feedback-content","has-html",e.className),html:e.children,block:!0})}),m=e=>{const n=e.position||"bottom",s=c("question-feedback",n);return r("aside",{className:s,children:[a("div",{className:"arrow","aria-label":"Answer Feedback"}),a(o,{...e,children:e.children})]})};export{i as C,m as F,o as S};
