"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeedsGradingQueue = exports.GradingNotice = void 0;
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
const StyledGradingNotice = styled_components_1.default.div `
  background-color: ${theme_1.colors.notice.background};
  border: 1px solid ${theme_1.colors.notice.border};
  color: ${theme_1.colors.notice.text};
  padding: 1rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-size: calc(1.4rem * var(--content-text-scale));
`;
const GradingNotice = () => ((0, jsx_runtime_1.jsxs)(StyledGradingNotice, { role: "note", "aria-label": "Grading note", "data-test-id": "grading-notice", children: [(0, jsx_runtime_1.jsx)("strong", { children: "NOTE:" }), ' ', "Once an item is manually graded, the student can no longer update their answers. We ", (0, jsx_runtime_1.jsx)("strong", { children: "strongly recommend" }), " waiting until the due date has passed before grading submissions."] }));
exports.GradingNotice = GradingNotice;
const NeedsGradingQueue = ({ questions, }) => {
    const container = react_1.default.useRef(null);
    const typesetQueue = react_1.default.useCallback(() => {
        if (container.current)
            (0, mathjax_1.typesetMath)(container.current);
    }, []);
    return ((0, jsx_runtime_1.jsx)(useTypesetMath_1.TypesetMathContext.Provider, { value: typesetQueue, children: (0, jsx_runtime_1.jsx)(QueueWrapper, { ref: container, children: questions.length === 0
                ? (0, jsx_runtime_1.jsx)(EmptyState, { children: "All responses have been graded." })
                : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(exports.GradingNotice, {}), questions.map((questionProps, i) => ((0, jsx_runtime_1.jsx)(NeedsGradingQuestion_1.NeedsGradingQuestion, { ...questionProps }, i)))] }) }) }));
};
exports.NeedsGradingQueue = NeedsGradingQueue;
//# sourceMappingURL=NeedsGradingQueue.js.map