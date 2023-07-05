import React from "react";

export const TypesetMathContext = React.createContext<{ typesetMath?: () => void }>({});
export const useTypesetMath = () => React.useContext(TypesetMathContext);
