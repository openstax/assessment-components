"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncludeRemoveQuestion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const styles_1 = require("./styles");
const IncludeRemoveQuestion = ({ buttonVariant, onIncludeHandler, onRemoveHandler, onClickDetails }) => {
    const buttonIcon = react_1.default.useMemo(() => buttonVariant === 'include' ? free_solid_svg_icons_1.faPlus : free_solid_svg_icons_1.faMinus, [buttonVariant]);
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
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledContainer, { children: [(0, jsx_runtime_1.jsxs)(styles_1.StyledButton, { className: buttonVariant, onClick: () => onClickHandler(buttonVariant), "aria-label": buttonVariant, children: [(0, jsx_runtime_1.jsx)(styles_1.StyledIcon, { className: buttonVariant, icon: buttonIcon, "aria-label": buttonVariant + ' question', border: true, size: "lg" }), (0, jsx_runtime_1.jsx)("span", { children: generateButtonText(buttonVariant) })] }), (0, jsx_runtime_1.jsxs)(styles_1.StyledButton, { className: "details", "aria-label": "details", onClick: onClickDetails, children: [(0, jsx_runtime_1.jsx)(styles_1.StyledIcon, { className: "details", icon: free_solid_svg_icons_1.faEllipsisH, border: true, size: "lg" }), (0, jsx_runtime_1.jsx)("span", { children: "Details" })] })] }));
};
exports.IncludeRemoveQuestion = IncludeRemoveQuestion;
//# sourceMappingURL=index.js.map