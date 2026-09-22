import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { faPlus, faMinus, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { StyledContainer, StyledButton, StyledIcon } from "./styles";
export const IncludeRemoveQuestion = ({ buttonVariant, onIncludeHandler, onRemoveHandler, onClickDetails }) => {
    const buttonIcon = React.useMemo(() => buttonVariant === 'include' ? faPlus : faMinus, [buttonVariant]);
    const onClickHandler = (variant) => {
        switch (variant) {
            case 'include':
                onIncludeHandler();
                break;
            case 'remove':
                onRemoveHandler();
                break;
        }
    };
    const generateButtonText = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1) + ' question';
    };
    return (_jsxs(StyledContainer, { children: [_jsxs(StyledButton, { className: buttonVariant, onClick: () => onClickHandler(buttonVariant), "aria-label": buttonVariant, children: [_jsx(StyledIcon, { className: buttonVariant, icon: buttonIcon, "aria-label": buttonVariant + ' question', border: true, size: "lg" }), _jsx("span", { children: generateButtonText(buttonVariant) })] }), _jsxs(StyledButton, { className: "details", "aria-label": "details", onClick: onClickDetails, children: [_jsx(StyledIcon, { className: "details", icon: faEllipsisH, border: true, size: "lg" }), _jsx("span", { children: "Details" })] })] }));
};
//# sourceMappingURL=index.js.map