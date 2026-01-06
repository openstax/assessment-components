import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const buttonHeight = 4.2; // rem
const buttonMargin = 0.5; // rem

// tslint:disable-next-line:variable-name
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
`;

// tslint:disable-next-line:variable-name
const ScrollableContent = styled.div`
  background: white;
  max-width: 100vw;
  max-height: calc(100vh - ${(buttonHeight + buttonMargin * 2) * 2}rem);
  overflow: auto;

  > img {
    ${/*
      fix ScrollableContent height issue where it is slightly larger than
      the image and leaves a gap at the bottom */ ''}
    display: block;
  }
`;


// tslint:disable-next-line:variable-name
const FloatingCloseButton = styled.button`
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
const ContentContainer = styled.div`
  position: relative;
  pointer-events: auto;
`;

// tslint:disable-next-line:variable-name
const ModalWrapper = styled.div`
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
const CloseIcon = () => (
  <svg width='42' height='42' viewBox='0 0 42 42' xmlns='http://www.w3.org/2000/svg'>
    <rect x='1' y='1' width='40' height='40' rx='20' stroke='white' fill='none' />
    <line x1='16' y1='16' x2='26' y2='26' stroke='white' strokeWidth='2' strokeLinecap='round' />
    <line x1='26' y1='16' x2='16' y2='26' stroke='white' strokeWidth='2' strokeLinecap='round' />
  </svg>
);

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
// tslint:disable-next-line:variable-name
const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableSelectors = [
      'button:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors);
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    firstEl?.focus();

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const activeEl = document.activeElement;
      const isShift = e.shiftKey;

      if (isShift && activeEl === firstEl) {
        e.preventDefault();
        lastEl?.focus();
      } else if (!isShift && activeEl === lastEl) {
        e.preventDefault();
        firstEl?.focus();
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => {
      document.removeEventListener('keydown', trapFocus);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper aria-modal="true" role="dialog">
        <ContentContainer
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          <FloatingCloseButton onClick={onClose} aria-label="Close media preview">
            <CloseIcon />
          </FloatingCloseButton>
          <ScrollableContent>{children}</ScrollableContent>
        </ContentContainer>
      </ModalWrapper>
    </Overlay>
  );
};

export default MediaModal;
