import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { FreeResponseDefaultContainer, FreeResponseExpandedContainer, FreeResponseText, ReadMoreLink, COLLAPSED_HEIGHT } from "./FreeResponseReview.styles";
const FreeResponseContainer = ({ children, previewMode }) => {
    return (previewMode
        ? _jsx(FreeResponseExpandedContainer, { children: children })
        : _jsx(FreeResponseDefaultContainer, { children: children }));
};
export const FreeResponseReview = ({ free_response, previewMode }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [isOverflowing, setIsOverflowing] = React.useState(false);
    const textRef = React.useRef(null);
    React.useLayoutEffect(() => {
        if (previewMode && textRef.current) {
            const isTextOverflowing = !expanded && textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10; // px
            setIsOverflowing(isTextOverflowing);
        }
    }, [free_response, previewMode, expanded]);
    if (!free_response) {
        return null;
    }
    return (_jsxs(FreeResponseContainer, { previewMode: previewMode, children: [previewMode
                ? _jsx(FreeResponseText, { ref: textRef, expanded: expanded, isOverflowing: isOverflowing, children: free_response })
                : free_response, previewMode && (isOverflowing || expanded) && (_jsx(ReadMoreLink, { onClick: () => setExpanded(!expanded), children: expanded ? "show less" : "read more" }))] }));
};
//# sourceMappingURL=FreeResponseReview.js.map