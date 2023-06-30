import React from "react";
import { typesetMath } from "../helpers/mathjax";

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

export const Content = (<T extends ComponentType | undefined>(
  {html, component, block = false, ...props}: ContentProps<T>
) => {
  const container = React.useRef(null);

  React.useEffect(() => {
    if (container.current) {
      typesetMath(container.current);
    }
  }, [html]);

  if (component !== undefined) {
    return React.cloneElement(component, {html, ref: container, ...props});
  }
  if (block) {
    return <div dangerouslySetInnerHTML={{ __html: html }} ref={container} {...props} />;
  } else {
    return <span dangerouslySetInnerHTML={{ __html: html }} ref={container} {...props} />;
  }
});
