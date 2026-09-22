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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaModalManager = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
const MediaModal_1 = __importDefault(require("./MediaModal"));
function createInteractionHandler(open) {
    return (e) => {
        const target = e.target;
        const button = target.closest('button.image-button-wrapper');
        if (!button)
            return;
        if (e.type === 'keydown') {
            const key = e.key;
            if (key !== 'Enter' && key !== ' ')
                return;
            e.preventDefault();
        }
        const img = button.querySelector('img');
        if (!img)
            return;
        open((0, jsx_runtime_1.jsx)("img", { tabIndex: 0, src: img.src, alt: img.alt || '', width: img.width, height: img.height }));
    };
}
function createMediaModalPortal() {
    let setModalContent = null;
    const open = (content) => {
        setModalContent === null || setModalContent === void 0 ? void 0 : setModalContent(content);
    };
    const MediaModalPortal = () => {
        const [isOpen, setIsOpen] = react_1.default.useState(false);
        const [modalContent, setContent] = react_1.default.useState(null);
        (0, react_1.useEffect)(() => {
            setModalContent = (content) => {
                setContent(content);
                setIsOpen(true);
            };
            return () => {
                setModalContent = null;
            };
        }, []);
        (0, react_1.useEffect)(() => {
            if (!isOpen || typeof document === 'undefined')
                return;
            const onKeyDown = (e) => {
                if (e.key === 'Escape' || e.key === 'Esc') {
                    setIsOpen(false);
                }
            };
            const doc = document;
            doc.addEventListener('keydown', onKeyDown);
            return () => {
                doc.removeEventListener('keydown', onKeyDown);
            };
        }, [isOpen]);
        return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(MediaModal_1.default, { isOpen: isOpen, onClose: () => setIsOpen(false), children: modalContent }), document.body);
    };
    return { open, MediaModalPortal };
}
function createListeners(open) {
    let container = null;
    const handleInteraction = createInteractionHandler(open);
    const attach = () => {
        if (!container)
            return;
        container.addEventListener('click', handleInteraction);
        container.addEventListener('keydown', handleInteraction);
    };
    const detach = () => {
        if (!container)
            return;
        container.removeEventListener('click', handleInteraction);
        container.removeEventListener('keydown', handleInteraction);
    };
    const mount = (newContainer) => {
        if (container !== newContainer) {
            detach();
            container = newContainer;
        }
        attach();
    };
    const unmount = () => {
        detach();
        container = null;
    };
    return { mount, unmount };
}
function createMediaModalManager() {
    const { open, MediaModalPortal } = createMediaModalPortal();
    const { mount, unmount } = createListeners(open);
    return {
        open,
        MediaModalPortal,
        mount,
        unmount,
    };
}
exports.createMediaModalManager = createMediaModalManager;
//# sourceMappingURL=modalManager.js.map