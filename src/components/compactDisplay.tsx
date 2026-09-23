import React from 'react';

/**
 * Compact rendering — a tile rather than a card: tighter spacing, a smaller type scale,
 * flat white backgrounds and no desktop width caps.
 *
 * Set it on any of the components that accept it and every component below inherits it,
 * so a caller composing the pieces directly only has to say it once.
 */
export const CompactDisplayContext = React.createContext(false);

export interface CompactDisplayProps {
  /**
   * Render this as a compact tile rather than a full-size card. Inherited by nested
   * components; defaults to whatever an enclosing component asked for.
   */
  compactDisplay?: boolean;
}

/** Resolves an explicit prop against what an enclosing component asked for. */
export const useCompactDisplay = (compactDisplay?: boolean): boolean => {
  const inherited = React.useContext(CompactDisplayContext);
  return compactDisplay ?? inherited;
};

/**
 * Publishes `compactDisplay` to everything below. Renders no element of its own, so a
 * component can wrap its output in this without changing its DOM.
 */
export const CompactDisplayProvider = (
  { compactDisplay, children }: CompactDisplayProps & { children: React.ReactNode }
) => {
  const resolved = useCompactDisplay(compactDisplay);
  return <CompactDisplayContext.Provider value={resolved}>{children}</CompactDisplayContext.Provider>;
};
