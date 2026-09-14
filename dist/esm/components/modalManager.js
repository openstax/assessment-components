import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import MediaModal from './MediaModal';
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
        open(_jsx("img", { tabIndex: 0, src: img.src, alt: img.alt || '', width: img.width, height: img.height }));
    };
}
function createMediaModalPortal() {
    let setModalContent = null;
    const open = (content) => {
        setModalContent === null || setModalContent === void 0 ? void 0 : setModalContent(content);
    };
    const MediaModalPortal = () => {
        const [isOpen, setIsOpen] = React.useState(false);
        const [modalContent, setContent] = React.useState(null);
        useEffect(() => {
            setModalContent = (content) => {
                setContent(content);
                setIsOpen(true);
            };
            return () => {
                setModalContent = null;
            };
        }, []);
        useEffect(() => {
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
        return createPortal(_jsx(MediaModal, { isOpen: isOpen, onClose: () => setIsOpen(false), children: modalContent }), document.body);
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
export function createMediaModalManager() {
    const { open, MediaModalPortal } = createMediaModalPortal();
    const { mount, unmount } = createListeners(open);
    return {
        open,
        MediaModalPortal,
        mount,
        unmount,
    };
}
//# sourceMappingURL=modalManager.js.map