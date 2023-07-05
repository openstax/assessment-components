import React from "react";
export declare const TypesetMathContext: React.Context<{
    typesetMath?: (() => void) | undefined;
}>;
export declare const useTypesetMath: () => {
    typesetMath?: (() => void) | undefined;
};
