import React, { useEffect, useRef } from "react";
import { useTypesetMath } from "../hooks/useTypesetMath";
import { createMediaModalManager } from "./modalManager";

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
  const spanRef = useRef<HTMLSpanElement>(null);
  const mediaModalManager = createMediaModalManager();
  const MediaModalPortal = mediaModalManager.MediaModalPortal;

  useEffect(() => {
    const container = block ? divRef.current : spanRef.current;
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
      <DivOrSpan ref={ref} dangerouslySetInnerHTML={{ __html: html }} {...props} />
        <div ref={divRef} dangerouslySetInnerHTML={{ __html: html }} {...props} />
      ) : (
        <span ref={spanRef} dangerouslySetInnerHTML={{ __html: html }} {...props} />
      )}
      <MediaModalPortal />
    </>
  );
});
