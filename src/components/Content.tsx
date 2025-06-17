import React, { useEffect, useRef, useState } from "react";
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
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Open media preview');
  });
}

export const Content = (<T extends ComponentType | undefined>(
  { html, component, block = false, ...props }: ContentProps<T>
) => {
  const typesetMath = useTypesetMath();
  const divRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const [MediaModalPortal, setMediaModalPortal] = useState<() => JSX.Element | null>(() => () => null);

  useEffect(() => {
    const container = block ? divRef.current : spanRef.current;
    if (!container) return;

    typesetMath();
    enhanceImagesForAccessibility(container);

    const mediaModalManager = createMediaModalManager(container);
    setMediaModalPortal(() => mediaModalManager.MediaModalPortal);

    return () => {
      mediaModalManager.detachListeners();
    };
  }, [typesetMath, html, block]);

  if (component !== undefined) {
    return React.cloneElement(component, { html, ...props });
  }

  return (
    <>
      {block ? (
        <div ref={divRef} dangerouslySetInnerHTML={{ __html: html }} {...props} />
      ) : (
        <span ref={spanRef} dangerouslySetInnerHTML={{ __html: html }} {...props} />
      )}
      <MediaModalPortal />
    </>
  );
});
