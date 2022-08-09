import { GlobalProvider } from "@ladle/react";
import { useEffect } from "react";
import styled from "styled-components";
import { startMathJax, typesetMath } from './mathjax';

const Wrapper = styled.div`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #424242;
`;

export const Provider: GlobalProvider = ({ children }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerText = 'html { font-size: 10px }';
    document.head.append(style);
  }, []);

  useEffect(() => {
    if (window.MathJax === undefined) {
      startMathJax();
    } else {
      typesetMath();
    }

  }, [children]);

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};
