import renderer from 'react-test-renderer';

export const findByTestId = (instance: renderer.ReactTestInstance, id: string) =>
  instance.findByProps({'data-test-id': id});

type Json = renderer.ReactTestRendererJSON;
export type Rendered = Json | Json[] | null;

export const isJson = (node: unknown): node is Json =>
  typeof node === 'object' && node !== null && !Array.isArray(node);

// Helpers for asserting what a test actually names, instead of snapshotting the whole tree and
// hoping a reviewer spots the one line that matters. A whole-tree snapshot also churns whenever
// any unrelated component below it changes, which is what motivated these.

/**
 * The visible text of a rendered subtree, including content this library injects with
 * `dangerouslySetInnerHTML` (`Content` and friends), which is not part of `children`.
 */
export const textOf = (node: Rendered): string => {
  if (node === null) { return ''; }
  if (Array.isArray(node)) { return node.map(textOf).join(''); }
  const html = node.props?.dangerouslySetInnerHTML?.__html;
  return (typeof html === 'string' ? html : '')
    + (node.children || []).map(child => isJson(child) ? textOf(child) : child).join('');
};

/** Depth-first search for the first node matching `match`. */
export const findNode = (node: Rendered, match: (node: Json) => boolean): Json | undefined => {
  if (node === null) { return undefined; }
  if (Array.isArray(node)) {
    return node.reduce<Json | undefined>((found, child) => found || findNode(child, match), undefined);
  }
  if (match(node)) { return node; }
  return (node.children || []).reduce<Json | undefined>(
    (found, child) => found || (isJson(child) ? findNode(child, match) : undefined), undefined);
};

/** Every node matching `match`, in document order. */
export const findAllNodes = (node: Rendered, match: (node: Json) => boolean): Json[] => {
  if (node === null) { return []; }
  if (Array.isArray(node)) { return node.flatMap(child => findAllNodes(child, match)); }
  const here = match(node) ? [node] : [];
  return here.concat((node.children || []).flatMap(child => isJson(child) ? findAllNodes(child, match) : []));
};

/** className is a token list, and styled-components adds its own generated class to it. */
export const byClass = (className: string) => (node: Json) =>
  String(node.props?.className || '').split(/\s+/).includes(className);

export const byTestId = (id: string) => (node: Json) => node.props?.['data-test-id'] === id;

/** The text of the single node carrying `data-test-id`, or undefined when it is not rendered. */
export const textOfTestId = (tree: Rendered, id: string): string | undefined => {
  const node = findNode(tree, byTestId(id));
  return node && textOf(node);
};
