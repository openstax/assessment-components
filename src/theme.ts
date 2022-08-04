import { css } from 'styled-components';

const palette = {
  red: "#ca2026",
  danger: "#c2002f", // dark red
  green: "#77af42",
  lightGreen: "#8bc753",
  paleYellow: "#ffffbb",
  teal: "#0dc0de",
  blue: "#007da4",
  lightBlue: "#34bdd8",
  neutralLightBlue: "#0dc0dc",
  tangerine: "#ffbd3e",
  gray: "#5e5e5e",
  pale: "#d5d5d5",
  light: "#e4e4e4",  
  white: "#ffffff",
  neutralLightest: "#f9f9f9", // nearly white
  neutralCool: "#f6f7f8", // cool bright gray
  neutralBright: "#f5f5f5", // bright gray
  neutralLighter: "#f1f1f1", // light gray
  neutralLight: "#e5e5e5", // light gray
  neutralMedium: "#a0a0a0", // light gray
  neutral: "#818181", // gray
  neutralThin: "#6f6f6f", // medium gray
  neutralDark: "#5f6163", // dark gray
  neutralDarker: "#424242", // very dark gray
  black: "#000000",
  orange: "#D4450C"
};

export const colors = {
  palette: palette,
  answer: {
    color: palette.lightBlue,
    correct: {
      color: palette.green,
      background: "#77af42",
    },
    incorrect: {
      color: palette.red,
      background: palette.red,
    },
    checked: palette.lightBlue,
    hover: palette.neutralDark,
    label: {
      color: palette.neutralMedium,
      colorHover: palette.neutralDark,
      colorSelected: palette.lightBlue,
    },
    feedback: {
      arrowOuterColor: "rgba(0, 0, 0, 0.25)",
      popover: {
        borderColor: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  card: {
    background: "#daf3f8",
  },
  button: {
    background: palette.orange,
    backgroundHover: "#E74B0D",
    backgroundActive: "#C5400B"
  },
  freeResponse: {
    color: palette.neutralDark,
    background: palette.neutralLighter,
  },
};

export const layouts = {
  answer: {
    verticalSpacing: "1.5rem",
    horizontalSpacing: "1rem",
    horizontalBuffer: "2.5rem",
    bubbleSize: "4rem",
    labelSpacing: "6.5rem",
    feedback: {
      arrow: {
        width: "20px",
        height: "15px",
      },
      popover: {
        horizontalSpacing: "2rem",
        verticalSpacing: "2rem",
        horizontalBuffer: "4rem",
        borderWidth: "1px",
        maxWidth: "370px",
      }
    },
  },
};

export const BREAKPOINTS = {
  mobile: 600,
  tablet: 999,
  desktop: 1000,
  large: 1600,
};

export const breakpoints = {
  mobile(...args: Parameters<typeof css>) {
    return css`@media(max-width: ${BREAKPOINTS.mobile}px) { ${css(...args)} }`;
  },
  tablet(...args: Parameters<typeof css>) {
    return css`@media(max-width: ${BREAKPOINTS.tablet}px) { ${css(...args)} }`;
  },
  desktop(...args: Parameters<typeof css>) {
    return css`@media(min-width: ${BREAKPOINTS.desktop}px) { ${css(...args)} }`;
  },
  large(...args: Parameters<typeof css>) {
    return css`@media(min-width: ${BREAKPOINTS.large}px) { ${css(...args)} }`;
  },
  only: {
    mobile(...args: Parameters<typeof css>) {
      return css`@media(max-width: ${BREAKPOINTS.mobile}px) { ${css(...args)} }`;
    },
    tablet(...args: Parameters<typeof css>) {
      return css`@media(min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${BREAKPOINTS.tablet}px) { ${css(...args)} }`;
    },
    desktop(...args: Parameters<typeof css>) {
      return css`@media(min-width: ${BREAKPOINTS.desktop}px) and (max-width: ${BREAKPOINTS.large - 1}px) { ${css(...args)} }`;
    },
    large(...args: Parameters<typeof css>) {
      return css`@media(min-width: ${BREAKPOINTS.large}px) { ${css(...args)} }`;
    },
  },
  margins: {
    mobile: '8px',
    tablet: '24px',
  },
};

export const transitions = {
  answer: "0.1s ease-in-out",
}

export const mixins = {
  answer: () => css`
    .answer-label {
      display: flex;
    }
    color: ${colors.answer.label.color};
    .answer-letter {
      width: ${layouts.answer.bubbleSize};
      height: ${layouts.answer.bubbleSize};
      min-width: ${layouts.answer.bubbleSize};
      min-height: ${layouts.answer.bubbleSize};
      border-radius: calc(${layouts.answer.bubbleSize} / 2);
      border-width: 2px;
      border-style: solid;
      border-color: #c6c6c6;
      color: ${colors.answer.label.colorHover};
      transition: color ${transitions.answer}, border-color ${transitions.answer}, background-color ${transitions.answer};
      background-color: ${colors.palette.white};
    }
  `,
  answerColor: (values: { color: string, background: string }) => css`
    color: ${values.color};
    .answer-letter {
       border-color: ${values.color};
       background-color: ${values.background};
       color: ${colors.palette.white};
    }
  `,
  answerChecked: () => mixins.answerColor({ color: colors.answer.checked, background: colors.answer.checked }),
  answerCorrect: () => mixins.answerColor(colors.answer.correct),
  answerIncorrect: () => mixins.answerColor(colors.answer.incorrect),
  answerHover: () => css`
    color: ${colors.answer.label.colorHover};
    .answer-letter {
      border-color: ${colors.answer.label.colorSelected};
    }
  `,
  answerCorrectText: () => css`
    content: 'correct answer';
    color: ${colors.answer.label.color};
    margin-left: calc(-1.25 * ${layouts.answer.bubbleSize});
    width: calc(1.25 * ${layouts.answer.bubbleSize});
    text-align: center;
    font-size: 1.2rem;
    // em used here for line-height for compatibility with IE
    // http://caniuse.com/#feat=rem -- rem ignored in pseudo elements
    line-height: 1em;
    margin-top: 0.8rem;
  `,
  answerCorrectAnswer: () => css`
    color: ${colors.answer.correct.color};
    .answer-letter {
      border-color: ${colors.answer.correct.color};
      color: ${colors.answer.correct.color};
    }
    &::before {
     ${mixins.answerCorrectText()}
      @media screen and (max-width: ${BREAKPOINTS.tablet}px) {
        display: none;
      }
    }
    @media screen and (max-width:  ${BREAKPOINTS.tablet}px) {
      .answer-letter-wrapper {
        display: flex;
        flex-direction: column;
        &::after {
          ${mixins.answerCorrectText()}
          width: $openstax-answer-bubble-size !important;
          margin-left: 0;
        }
      }
    }
  `,
  resetText: () => css`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
  `,
};

const theme = {
  colors: colors,
  layouts: layouts,
  transitions: transitions,
  breakpoints: breakpoints,
};

export default theme;
