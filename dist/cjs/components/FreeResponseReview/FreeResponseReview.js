"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeResponseReview = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const FreeResponseReview_styles_1 = require("./FreeResponseReview.styles");
const FreeResponseContainer = ({ children, previewMode }) => {
    return (previewMode
        ? (0, jsx_runtime_1.jsx)(FreeResponseReview_styles_1.FreeResponseExpandedContainer, { children: children })
        : (0, jsx_runtime_1.jsx)(FreeResponseReview_styles_1.FreeResponseDefaultContainer, { children: children }));
};
const FreeResponseReview = ({ free_response, previewMode }) => {
    const [expanded, setExpanded] = react_1.default.useState(false);
    const [isOverflowing, setIsOverflowing] = react_1.default.useState(false);
    const textRef = react_1.default.useRef(null);
    react_1.default.useLayoutEffect(() => {
        if (previewMode && textRef.current) {
            const isTextOverflowing = !expanded && textRef.current.scrollHeight > FreeResponseReview_styles_1.COLLAPSED_HEIGHT * 10; // px
            setIsOverflowing(isTextOverflowing);
        }
    }, [free_response, previewMode, expanded]);
    if (!free_response) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(FreeResponseContainer, { previewMode: previewMode, children: [previewMode
                ? (0, jsx_runtime_1.jsx)(FreeResponseReview_styles_1.FreeResponseText, { ref: textRef, expanded: expanded, isOverflowing: isOverflowing, children: free_response })
                : free_response, previewMode && (isOverflowing || expanded) && ((0, jsx_runtime_1.jsx)(FreeResponseReview_styles_1.ReadMoreLink, { onClick: () => setExpanded(!expanded), children: expanded ? "show less" : "read more" }))] }));
};
exports.FreeResponseReview = FreeResponseReview;
//# sourceMappingURL=FreeResponseReview.js.map