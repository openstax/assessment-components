import React from "react";
declare type ComponentType = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
export interface ContentProps<T extends ComponentType | undefined> {
    className?: string;
    component?: T extends undefined ? undefined : T extends ComponentType ? React.ReactComponentElement<T> : never;
    html: string;
    block?: boolean;
}
export declare const Content: <T extends ComponentType | undefined>({ html, component, block, ...props }: ContentProps<T>) => JSX.Element;
export {};
