import{s as f,r as u,j as s,a as h,R as b,b as k,u as w,F as x}from"./index-032b48ee.js";import{c as y}from"./index-e1374eea.js";const m=4.2,p=.5,M=f.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
`,E=f.div`
  background: white;
  max-width: 100vw;
  max-height: calc(100vh - ${(m+p*2)*2}rem);
  overflow: auto;

  > img {
    ${""}
    display: block;
  }
`,C=f.button`
  position: absolute;
  top: -${m+p}rem;
  right: ${p}rem;
  z-index: 10;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: ${m}rem;
  height: ${m}rem;
`,L=f.div`
  position: relative;
  pointer-events: auto;
`,S=f.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`,F=()=>h("svg",{width:"42",height:"42",viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg",children:[s("rect",{x:"1",y:"1",width:"40",height:"40",rx:"20",stroke:"white",fill:"none"}),s("line",{x1:"16",y1:"16",x2:"26",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),s("line",{x1:"26",y1:"16",x2:"16",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]}),I=({isOpen:t,onClose:e,children:o})=>{const n=u.useRef(null);return u.useEffect(()=>{if(!t||!n.current)return;const r=["button:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),i=n.current.querySelectorAll(r),c=i[0],a=i[i.length-1];c==null||c.focus();const d=l=>{if(l.key!=="Tab")return;const g=document.activeElement,v=l.shiftKey;v&&g===c?(l.preventDefault(),a==null||a.focus()):!v&&g===a&&(l.preventDefault(),c==null||c.focus())};return document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}},[t]),t?s(M,{onClick:e,children:s(S,{"aria-modal":"true",role:"dialog",children:h(L,{ref:n,onClick:r=>r.stopPropagation(),tabIndex:-1,children:[s(C,{onClick:e,"aria-label":"Close media preview",children:s(F,{})}),s(E,{children:o})]})})}):null};function P(t){return e=>{const n=e.target.closest("button.image-button-wrapper");if(!n)return;if(e.type==="keydown"){const i=e.key;if(i!=="Enter"&&i!==" ")return;e.preventDefault()}const r=n.querySelector("img");r&&t(s("img",{tabIndex:0,src:r.src,alt:r.alt||"",width:r.width,height:r.height}))}}function $(){let t=null;return{open:n=>{t==null||t(n)},MediaModalPortal:()=>{const[n,r]=b.useState(!1),[i,c]=b.useState(null);return u.useEffect(()=>(t=a=>{c(a),r(!0)},()=>{t=null}),[]),u.useEffect(()=>{if(!n||typeof document>"u")return;const a=l=>{(l.key==="Escape"||l.key==="Esc")&&r(!1)},d=document;return d.addEventListener("keydown",a),()=>{d.removeEventListener("keydown",a)}},[n]),k.createPortal(s(I,{isOpen:n,onClose:()=>r(!1),children:i}),document.body)}}}function A(t){let e=null;const o=P(t),n=()=>{e&&(e.addEventListener("click",o),e.addEventListener("keydown",o))},r=()=>{e&&(e.removeEventListener("click",o),e.removeEventListener("keydown",o))};return{mount:a=>{e!==a&&(r(),e=a),n()},unmount:()=>{r(),e=null}}}function D(){const{open:t,MediaModalPortal:e}=$(),{mount:o,unmount:n}=A(t);return{open:t,MediaModalPortal:e,mount:o,unmount:n}}function R(t){t.querySelectorAll("img").forEach(e=>{var i;if(e.closest("button"))return;const o=document.createElement("button");o.type="button";const n=e.getAttribute("alt"),r=n?`Click to enlarge image of ${n}`:"Click to enlarge this image";o.setAttribute("aria-label",r),o.classList.add("image-button-wrapper"),(i=e.parentElement)==null||i.insertBefore(o,e),o.appendChild(e)})}const j=({html:t,component:e,block:o=!1,...n})=>{const r=w(),i=u.useRef(null),c=o?"div":"span",a=D(),d=a.MediaModalPortal;return u.useEffect(()=>{const l=i.current;if(l)return r(),R(l),a.mount(l),()=>{a.unmount()}},[o,a,r]),e!==void 0?b.cloneElement(e,{html:t,...n}):h(x,{children:[s(c,{ref:i,dangerouslySetInnerHTML:{__html:t},...n}),s(d,{})]})},q=t=>s("aside",{children:s(j,{component:t.contentRenderer,className:y("question-feedback-content","has-html",t.className),html:t.children,block:!0})}),B=({id:t,...e})=>{const o=e.position||"bottom",n=y("question-feedback",o);return h("aside",{id:t,className:n,children:[s("div",{className:"arrow","aria-label":"Answer Feedback"}),s(q,{...e,children:e.children})]})};export{j as C,B as F,q as S};
