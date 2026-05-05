import React from 'react';
interface MediaModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare const MediaModal: React.FC<MediaModalProps>;
export default MediaModal;
