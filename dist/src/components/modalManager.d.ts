import React from 'react';
export declare function createMediaModalManager(): {
    open: (content: React.ReactNode) => void;
    MediaModalPortal: React.FC<{}>;
    mount: (newContainer: HTMLElement) => void;
    unmount: () => void;
};
