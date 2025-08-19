import{s as h,C as u,a as l,j as a}from"./index-3984dcc0.js";import{c as r,l as m,b as n}from"./theme-76e27ff7.js";import{F as f,c as x,d as k}from"./index-2cae9f2b.js";const y=h.div`
  position: absolute;
  background: #fff;
  width: 4.5rem;
  border: 1px solid ${r.palette.light};
  background: #fff;
  margin: ${m.card.spacing} 0 0 ${m.card.spacing};
  z-index: 1;

  > * {
    height: 4.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${r.palette.neutral};
    background: #fff;
    text-decoration: none;

    &:after {
      border-bottom: 1px solid #f1f1f1;
    }

    svg {
      width: 4.3rem;
      height: 1.6rem;
      transition: color 150ms;
    }

    span {
      display: none;
      flex-grow: 1;
      font-size: 1.4rem;
      color: ${r.palette.neutralDarker};
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;
      width: 20rem;

      svg {
        color: ${r.palette.neutralDarker};
      }

      span {
        display: block;
      }
    }
  }

  ${e=>!e.desktop&&u`
    ${n.desktop`
      display: none;
    `}
    ${n.tablet`
      display: none;
    `}
  `}

  ${e=>e.mobile&&n.mobile`
    display: block;
    position: relative;
    width: auto;
    display: flex;
    flex-direction: row;
    margin: 0;

    &:not(:last-child) {
      border-bottom: 0;
    }

    > * {
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.8rem 0.6rem;
      height: auto;
      min-height: 4.8rem;

      &:hover {
        width: auto;
      }

      span {
        display: block;
        font-size: 1.4rem;
        margin-top: 0.2rem;
        color: ${r.palette.neutral};
        text-align: center;
      }

      & + * {
        border-left: 1px solid ${r.palette.light};
      }
    }
  `}
`,j=({icons:e})=>{var p,c;if(!e)return null;const s=Object.values(e),b=s.some(({location:t})=>{var o;return((o=t==null?void 0:t.toolbar)==null?void 0:o.mobile)??!0}),g=s.some(({location:t})=>{var o;return((o=t==null?void 0:t.toolbar)==null?void 0:o.desktop)??!1}),i=(p=e.topic)==null?void 0:p.url,d=(c=e.errata)==null?void 0:c.url;return l(y,{mobile:b,desktop:g,children:[i?l("a",{href:i,target:"_blank",children:[a(f,{icon:x}),a("span",{children:"View topic in textbook"})]}):null,d?l("a",{href:d,target:"_blank",children:[a(f,{icon:k}),a("span",{children:"Suggest a correction"})]}):null]})};export{j as E,y as S};
