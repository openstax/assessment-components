import{s,R as h,a,j as r}from"./index-8053cc87.js";import{F as g,f as b,a as f,b as k}from"./index-51df3ab1.js";import{c as o}from"./theme-534671fb.js";const w=s.div`
  display: flex;
  width: fit-content;
`,t=s.button`
    width: 7.4rem;
    height: 8.7rem;
    color: white;
    border: none;

    &:hover {
      box-shadow: 0 0.1rem 0.4rem 0 #00000066;
    }
    
    span {
        line-height: 1.3rem;
        font-size: 1.4rem;
        font-weight: bold;
    }

    &.include {
        background-color: ${o.palette.mediumBlue};
        padding-top: 1.4rem;
    }

    &.remove {
        background-color: ${o.palette.orange};
        padding-top: 1.4rem;
    }

    &.details {
        background-color: ${o.palette.neutralDarker};
    }
`,i=s(g)`
    border-radius: 50%;
    background-color: ${o.palette.white};
    vertical-align: middle;
    position: relative;
    bottom: 0.5rem;
    font-weight: 900;
    line-height: 1.4rem;


    &.include {
        color: ${o.palette.mediumBlue};
    }

    &.remove {
        color: ${o.palette.orange};
    }

    &.details {
        color: ${o.palette.neutralDarker};
    }
`,y=({buttonVariant:e,onIncludeHandler:c,onRemoveHandler:n,onClickDetails:d})=>{const m=h.useMemo(()=>e==="include"?b:f,[e]),p=l=>{switch(l){case"include":c();break;case"remove":n();break}},u=l=>l.charAt(0).toUpperCase()+l.slice(1)+" question";return a(w,{children:[a(t,{className:e,onClick:()=>p(e),"aria-label":e,children:[r(i,{className:e,icon:m,"aria-label":e+" question",border:!0,size:"lg"}),r("span",{children:u(e)})]}),a(t,{className:"details","aria-label":"details",onClick:d,children:[r(i,{className:"details",icon:k,border:!0,size:"lg"}),r("span",{children:"Details"})]})]})};export{y as I};
