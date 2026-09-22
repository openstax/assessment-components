"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleFeedback = exports.Feedback = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Content_1 = require("./Content");
const SimpleFeedback = (props) => ((0, jsx_runtime_1.jsx)("aside", { children: (0, jsx_runtime_1.jsx)(Content_1.Content, { component: props.contentRenderer, className: (0, classnames_1.default)('question-feedback-content', 'has-html', props.className), html: props.children, block: true }) }));
exports.SimpleFeedback = SimpleFeedback;
const Feedback = ({ id, ...props }) => {
    const position = props.position || 'bottom';
    const wrapperClasses = (0, classnames_1.default)('question-feedback', position);
    return ((0, jsx_runtime_1.jsxs)("aside", { id: id, className: wrapperClasses, children: [(0, jsx_runtime_1.jsx)("div", { className: "arrow", "aria-label": "Answer Feedback" }), (0, jsx_runtime_1.jsx)(SimpleFeedback, { ...props, children: props.children })] }));
};
exports.Feedback = Feedback;
//# sourceMappingURL=Feedback.js.map