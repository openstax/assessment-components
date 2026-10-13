/**
 * Compact rendering — a tile rather than a card: tighter spacing, a smaller type scale,
 * flat white backgrounds and no desktop width caps.
 *
 * It is a prop on each component that renders differently when compact, and it applies to
 * that component only: nothing is inherited. A caller composing the pieces directly passes it
 * to each of them, the way `Exercise` does.
 */
export interface CompactDisplayProps {
  /** Render this as part of a compact tile rather than a full-size card. */
  compactDisplay?: boolean;
}
