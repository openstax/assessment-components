import React from "react";

export const TypesetMathContext = React.createContext<() => void>(() => { throw new Error('context not initialized'))});
export const useTypesetMath = () => React.useContext(TypesetMathContext);
