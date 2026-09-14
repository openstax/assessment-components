"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const buttonHeight = 4.2; // rem
const buttonMargin = 0.5; // rem
// tslint:disable-next-line:variable-name
const Overlay = styled_components_1.default.div `
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
`;
// tslint:disable-next-line:variable-name
const ScrollableContent = styled_components_1.default.div `
  background: white;
  max-width: 100vw;
  max-height: calc(100vh - ${(buttonHeight + buttonMargin * 2) * 2}rem);
  overflow: auto;

  > img {
    ${ /*
  fix ScrollableContent height issue where it is slightly larger than
  the image and leaves a gap at the bottom */''}
    display: block;
  }
`;
// tslint:disable-next-line:variable-name
const FloatingCloseButton = styled_components_1.default.button `
  position: absolute;
  top: -${buttonHeight + buttonMargin}rem;
  right: ${buttonMargin}rem;
  z-index: 10;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: ${buttonHeight}rem;
  height: ${buttonHeight}rem;
`;
// tslint:disable-next-line:variable-name
const ContentContainer = styled_components_1.default.div `
  position: relative;
  pointer-events: auto;
`;
// tslint:disable-next-line:variable-name
const ModalWrapper = styled_components_1.default.div `
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;
// tslint:disable-next-line:variable-name
const CloseIcon = () => ((0, jsx_runtime_1.jsxs)("svg", { width: '42', height: '42', viewBox: '0 0 42 42', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("rect", { x: '1', y: '1', width: '40', height: '40', rx: '20', stroke: 'white', fill: 'none' }), (0, jsx_runtime_1.jsx)("line", { x1: '16', y1: '16', x2: '26', y2: '26', stroke: 'white', strokeWidth: '2', strokeLinecap: 'round' }), (0, jsx_runtime_1.jsx)("line", { x1: '26', y1: '16', x2: '16', y2: '26', stroke: 'white', strokeWidth: '2', strokeLinecap: 'round' })] }));
// tslint:disable-next-line:variable-name
const MediaModal = ({ isOpen, onClose, children }) => {
    const modalRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!isOpen || !modalRef.current)
            return;
        const focusableSelectors = [
            'button:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
        ].join(', ');
        const focusableElements = modalRef.current.querySelectorAll(focusableSelectors);
        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];
        firstEl === null || firstEl === void 0 ? void 0 : firstEl.focus();
        const trapFocus = (e) => {
            if (e.key !== 'Tab')
                return;
            const activeEl = document.activeElement;
            const isShift = e.shiftKey;
            if (isShift && activeEl === firstEl) {
                e.preventDefault();
                lastEl === null || lastEl === void 0 ? void 0 : lastEl.focus();
            }
            else if (!isShift && activeEl === lastEl) {
                e.preventDefault();
                firstEl === null || firstEl === void 0 ? void 0 : firstEl.focus();
            }
        };
        document.addEventListener('keydown', trapFocus);
        return () => {
            document.removeEventListener('keydown', trapFocus);
        };
    }, [isOpen]);
    if (!isOpen)
        return null;
    return ((0, jsx_runtime_1.jsx)(Overlay, { onClick: onClose, children: (0, jsx_runtime_1.jsx)(ModalWrapper, { "aria-modal": "true", role: "dialog", children: (0, jsx_runtime_1.jsxs)(ContentContainer, { ref: modalRef, onClick: (e) => e.stopPropagation(), tabIndex: -1, children: [(0, jsx_runtime_1.jsx)(FloatingCloseButton, { onClick: onClose, "aria-label": "Close media preview", children: (0, jsx_runtime_1.jsx)(CloseIcon, {}) }), (0, jsx_runtime_1.jsx)(ScrollableContent, { children: children })] }) }) }));
};
exports.default = MediaModal;
//# sourceMappingURL=MediaModal.js.map