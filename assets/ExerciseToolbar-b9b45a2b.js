import{s as h,C as x,a as n,j as a}from"./index-6aae8bc2.js";import{c as r,l as m,b as i}from"./theme-500b2181.js";import{F as f}from"./index.es-394f7b39.js";var u={prefix:"fas",iconName:"book-open",icon:[576,512,[128214,128366],"f518","M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C87.5 32 35.1 48.6 9 59.9c-5.6 2.4-9 8-9 14V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V73.9c0-6.1-3.4-11.6-9-14C540.9 48.6 488.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"]},k={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"]};const y=h.div`
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

  ${e=>!e.desktop&&x`
    ${i.desktop`
      display: none;
    `}
    ${i.tablet`
      display: none;
    `}
  `}

  ${e=>e.mobile&&i.mobile`
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
        font-size: 1rem;
        margin-top: 0.2rem;
        color: ${r.palette.neutral};
        text-align: center;
      }

      & + * {
        border-left: 1px solid ${r.palette.light};
      }
    }
  `}
`,z=({icons:e})=>{var p,d;if(!e)return null;const l=Object.values(e),g=l.some(({location:t})=>{var o;return((o=t==null?void 0:t.toolbar)==null?void 0:o.mobile)??!0}),b=l.some(({location:t})=>{var o;return((o=t==null?void 0:t.toolbar)==null?void 0:o.desktop)??!1}),s=(p=e.topic)==null?void 0:p.url,c=(d=e.errata)==null?void 0:d.url;return n(y,{mobile:g,desktop:b,children:[s?n("a",{href:s,target:"_blank",children:[a(f,{icon:u}),a("span",{children:"View topic in textbook"})]}):null,c?n("a",{href:c,target:"_blank",children:[a(f,{icon:k}),a("span",{children:"Suggest a correction"})]}):null]})};export{z as E,y as S};
