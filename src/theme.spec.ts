import { colors } from './theme';

const channel = (value: number) => {
  const scaled = value / 255;
  return scaled <= 0.04045 ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex: string) => {
  const [red, green, blue] = [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16));
  return 0.2126 * channel(red) + 0.7152 * channel(green) + 0.0722 * channel(blue);
};

const contrast = (first: string, second: string) => {
  const [lighter, darker] = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
};

describe('contrast helper', () => {
  it('measures black on white as 21:1', () => {
    expect(contrast('#ffffff', '#000000')).toBeCloseTo(21, 5);
  });

  it('reproduces the audit measurement of the old orange hover', () => {
    expect(contrast('#ffffff', '#e74b0d')).toBeCloseTo(3.88, 2);
  });
});

// Button text is 1.6rem bold, which is not large text, so every state needs 4.5:1.
describe.each([
  ['primary', colors.button],
  ['secondary', colors.button.secondary],
] as const)('%s button colours', (_name, set) => {
  it.each(['background', 'backgroundHover', 'backgroundActive'] as const)(
    'keeps white text at 4.5:1 or better on %s',
    (state) => {
      expect(contrast(colors.palette.white, set[state])).toBeGreaterThanOrEqual(4.5);
    }
  );

  it('gets darker from default to hover to active', () => {
    expect(luminance(set.backgroundHover)).toBeLessThan(luminance(set.background));
    expect(luminance(set.backgroundActive)).toBeLessThan(luminance(set.backgroundHover));
  });
});
