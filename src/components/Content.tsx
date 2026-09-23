import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTypesetMath } from "../hooks/useTypesetMath";
import { createMediaModalManager } from "./modalManager";

/**
 * `enhanceImagesForAccessibility` below wraps every image in a button so the media modal has
 * a click target, so the rules that stop that button looking like a button belong here, beside
 * the markup that creates it.
 */
const StyledContent = styled.div`
  .image-button-wrapper {
    /* Remove default button styles for media modal img wrapper */
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    display: inline-block;
    cursor: pointer;
  }

  .image-button-wrapper:focus {
    outline: 1px solid Highlight;
    outline: 1px solid -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  .image-button-wrapper img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type ComponentType = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

export interface ContentProps<T extends ComponentType | undefined> {
  className?: string;
  component?: T extends undefined ? undefined :
    T extends ComponentType ? React.ReactComponentElement<T>:
    never;
  html: string;
  block?: boolean;
}

function enhanceImagesForAccessibility(rootEl: HTMLElement) {
  rootEl.querySelectorAll('img').forEach((img) => {
    if (img.closest('button')) {
      return;
    }

    const button = document.createElement('button');
    button.type = 'button';
    const alt = img.getAttribute('alt');
    const label = alt ? `Click to enlarge image of ${alt}` : 'Click to enlarge this image';
    button.setAttribute('aria-label', label);

    button.classList.add('image-button-wrapper');

    img.parentElement?.insertBefore(button, img);
    button.appendChild(img);
  });
}

export const Content = (<T extends ComponentType | undefined>(
  { html, component, block = false, ...props }: ContentProps<T>
) => {
  const typesetMath = useTypesetMath();
  const ref = useRef<HTMLDivElement>(null);
  const DivOrSpan = block ? 'div' : 'span';
  const mediaModalManager = createMediaModalManager();
  const MediaModalPortal = mediaModalManager.MediaModalPortal;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

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

  return (
    <>
      <StyledContent as={DivOrSpan} ref={ref} dangerouslySetInnerHTML={{ __html: html }} {...props} />
      <MediaModalPortal />
    </>
  );
});
