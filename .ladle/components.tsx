import React from 'react';
import { GlobalProvider } from "@ladle/react";
import { useEffect } from "react";
import styled from "styled-components";

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

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};
