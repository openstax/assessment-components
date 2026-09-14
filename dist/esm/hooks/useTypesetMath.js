import React from "react";
export const TypesetMathContext = React.createContext(() => { throw new Error('context not initialized'); });
export const useTypesetMath = () => React.useContext(TypesetMathContext);
//# sourceMappingURL=useTypesetMath.js.map