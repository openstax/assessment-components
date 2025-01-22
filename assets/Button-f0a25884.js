import{s as a,j as s}from"./index-99ee4ded.js";import{c as t}from"./theme-df5a7ff0.js";const c=a.button`
  background-color: ${t.button.background};
  color: ${t.palette.white};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: ${t.button.backgroundHover}
    }
    &:active {
      background: ${t.button.backgroundActive}
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`,u=e=>{const{disabled:r,isWaiting:o,waitingText:n,children:i,...d}=e;return s(c,{...d,disabled:o||r,children:o&&n||i})};export{u as B};
