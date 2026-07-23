"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const useTypesetMath_1 = require("../hooks/useTypesetMath");
const modalManager_1 = require("./modalManager");
function enhanceImagesForAccessibility(rootEl) {
    rootEl.querySelectorAll('img').forEach((img) => {
        var _a;
        if (img.closest('button')) {
            return;
        }
        const button = document.createElement('button');
        button.type = 'button';
        const alt = img.getAttribute('alt');
        const label = alt ? `Click to enlarge image of ${alt}` : 'Click to enlarge this image';
        button.setAttribute('aria-label', label);
        button.classList.add('image-button-wrapper');
        (_a = img.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(button, img);
        button.appendChild(img);
    });
}
exports.Content = (({ html, component, block = false, ...props }) => {
    const typesetMath = (0, useTypesetMath_1.useTypesetMath)();
    const ref = (0, react_1.useRef)(null);
    const DivOrSpan = block ? 'div' : 'span';
    const mediaModalManager = (0, modalManager_1.createMediaModalManager)();
    const MediaModalPortal = mediaModalManager.MediaModalPortal;
    (0, react_1.useEffect)(() => {
        const container = ref.current;
        if (!container)
            return;
        typesetMath();
        enhanceImagesForAccessibility(container);
        mediaModalManager.mount(container);
        return () => {
            mediaModalManager.unmount();
        };
    }, [block, mediaModalManager, typesetMath]);
    if (component !== undefined) {
        return react_1.default.cloneElement(component, { html, ...props });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(DivOrSpan, { ref: ref, dangerouslySetInnerHTML: { __html: html }, ...props }), (0, jsx_runtime_1.jsx)(MediaModalPortal, {})] }));
});
//# sourceMappingURL=Content.js.map