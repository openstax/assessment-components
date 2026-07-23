"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeedsGradingQueue = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../theme");
const mathjax_1 = require("../helpers/mathjax");
const useTypesetMath_1 = require("../hooks/useTypesetMath");
const NeedsGradingQuestion_1 = require("./NeedsGradingQuestion");
const QueueWrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
const EmptyState = styled_components_1.default.div `
  padding: 4rem 0;
  text-align: center;
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralThin};
`;
const NeedsGradingQueue = ({ questions, }) => {
    const container = react_1.default.useRef(null);
    const typesetQueue = react_1.default.useCallback(() => {
        if (container.current)
            (0, mathjax_1.typesetMath)(container.current);
    }, []);
    return ((0, jsx_runtime_1.jsx)(useTypesetMath_1.TypesetMathContext.Provider, { value: typesetQueue, children: (0, jsx_runtime_1.jsx)(QueueWrapper, { ref: container, children: questions.length === 0
                ? (0, jsx_runtime_1.jsx)(EmptyState, { children: "All responses have been graded." })
                : questions.map((questionProps, i) => ((0, jsx_runtime_1.jsx)(NeedsGradingQuestion_1.NeedsGradingQuestion, { ...questionProps }, i))) }) }));
};
exports.NeedsGradingQueue = NeedsGradingQueue;
//# sourceMappingURL=NeedsGradingQueue.js.map