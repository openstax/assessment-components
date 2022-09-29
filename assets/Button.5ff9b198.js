import{c as e}from"./theme.61d171f6.js";import{s as a,j as c}from"./index.7657e27d.js";var d="/home/runner/work/assessment-components/assessment-components/src/components/Button.tsx";const l=a.button`
  background-color: ${e.button.background};
  color: ${e.palette.white};
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
      background: ${e.button.backgroundHover}
    }
    &:active {
      background: ${e.button.backgroundActive}
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`,m=t=>{const{disabled:r,isWaiting:o,waitingText:n,children:s,...i}=t;return c(l,{...i,disabled:o||r,children:o&&n||s},void 0,!1,{fileName:d,lineNumber:47,columnNumber:5},void 0)};export{m as B};
