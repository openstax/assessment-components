import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef } from "react";
import { useTypesetMath } from "../hooks/useTypesetMath";
import { createMediaModalManager } from "./modalManager";
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
export const Content = (({ html, component, block = false, ...props }) => {
    const typesetMath = useTypesetMath();
    const ref = useRef(null);
    const DivOrSpan = block ? 'div' : 'span';
    const mediaModalManager = createMediaModalManager();
    const MediaModalPortal = mediaModalManager.MediaModalPortal;
    useEffect(() => {
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
        return React.cloneElement(component, { html, ...props });
    }
    return (_jsxs(_Fragment, { children: [_jsx(DivOrSpan, { ref: ref, dangerouslySetInnerHTML: { __html: html }, ...props }), _jsx(MediaModalPortal, {})] }));
});
//# sourceMappingURL=Content.js.map