import{s as f,r as d,j as c,a as g,R as m,b,u as k,F as w}from"./index-1246e674.js";const h=4.2,p=.5,x=f.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
`,M=f.div`
  background: white;
  max-width: 100vw;
  max-height: calc(100vh - ${(h+p*2)*2}rem);
  overflow: auto;

  > img {
    ${""}
    display: block;
  }
`,E=f.button`
  position: absolute;
  top: -${h+p}rem;
  right: ${p}rem;
  z-index: 10;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: ${h}rem;
  height: ${h}rem;
`,C=f.div`
  position: relative;
  pointer-events: auto;
`,L=f.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`,S=()=>g("svg",{width:"42",height:"42",viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg",children:[c("rect",{x:"1",y:"1",width:"40",height:"40",rx:"20",stroke:"white",fill:"none"}),c("line",{x1:"16",y1:"16",x2:"26",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),c("line",{x1:"26",y1:"16",x2:"16",y2:"26",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]}),I=({isOpen:n,onClose:e,children:r})=>{const t=d.useRef(null);return d.useEffect(()=>{if(!n||!t.current)return;const o=["button:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", "),i=t.current.querySelectorAll(o),s=i[0],a=i[i.length-1];s==null||s.focus();const u=l=>{if(l.key!=="Tab")return;const v=document.activeElement,y=l.shiftKey;y&&v===s?(l.preventDefault(),a==null||a.focus()):!y&&v===a&&(l.preventDefault(),s==null||s.focus())};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[n]),n?c(x,{onClick:e,children:c(L,{"aria-modal":"true",role:"dialog",children:g(C,{ref:t,onClick:o=>o.stopPropagation(),tabIndex:-1,children:[c(E,{onClick:e,"aria-label":"Close media preview",children:c(S,{})}),c(M,{children:r})]})})}):null};function P(n){return e=>{const t=e.target.closest("button.image-button-wrapper");if(!t)return;if(e.type==="keydown"){const i=e.key;if(i!=="Enter"&&i!==" ")return;e.preventDefault()}const o=t.querySelector("img");o&&n(c("img",{tabIndex:0,src:o.src,alt:o.alt||"",width:o.width,height:o.height}))}}function $(){let n=null;return{open:t=>{n==null||n(t)},MediaModalPortal:()=>{const[t,o]=m.useState(!1),[i,s]=m.useState(null);return d.useEffect(()=>(n=a=>{s(a),o(!0)},()=>{n=null}),[]),d.useEffect(()=>{if(!t||typeof document>"u")return;const a=l=>{(l.key==="Escape"||l.key==="Esc")&&o(!1)},u=document;return u.addEventListener("keydown",a),()=>{u.removeEventListener("keydown",a)}},[t]),b.createPortal(c(I,{isOpen:t,onClose:()=>o(!1),children:i}),document.body)}}}function D(n){let e=null;const r=P(n),t=()=>{e&&(e.addEventListener("click",r),e.addEventListener("keydown",r))},o=()=>{e&&(e.removeEventListener("click",r),e.removeEventListener("keydown",r))};return{mount:a=>{e!==a&&(o(),e=a),t()},unmount:()=>{o(),e=null}}}function j(){const{open:n,MediaModalPortal:e}=$(),{mount:r,unmount:t}=D(n);return{open:n,MediaModalPortal:e,mount:r,unmount:t}}function A(n){n.querySelectorAll("img").forEach(e=>{var i;if(e.closest("button"))return;const r=document.createElement("button");r.type="button";const t=e.getAttribute("alt"),o=t?`Click to enlarge image of ${t}`:"Click to enlarge this image";r.setAttribute("aria-label",o),r.classList.add("image-button-wrapper"),(i=e.parentElement)==null||i.insertBefore(r,e),r.appendChild(e)})}const R=({html:n,component:e,block:r=!1,...t})=>{const o=k(),i=d.useRef(null),s=r?"div":"span",a=j(),u=a.MediaModalPortal;return d.useEffect(()=>{const l=i.current;if(l)return o(),A(l),a.mount(l),()=>{a.unmount()}},[r,a,o]),e!==void 0?m.cloneElement(e,{html:n,...t}):g(w,{children:[c(s,{ref:i,dangerouslySetInnerHTML:{__html:n},...t}),c(u,{})]})};export{R as C};
