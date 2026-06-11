declare global {
    interface Window {
        MathJax?: any;
        __debugMathJax?: boolean;
    }
}
declare const typesetMath: (root: Element, windowImpl?: Window & typeof globalThis) => Promise<void>;
declare const startMathJax: (windowImpl?: Window) => Promise<void>;
export { typesetMath, startMathJax, };
