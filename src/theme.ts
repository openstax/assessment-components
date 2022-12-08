import { css } from 'styled-components';

const palette = {
  red: "#ca2026",
  danger: "#c2002f",
  darkRed: "#c22032",
  lightRed: "#e298a0",
  green: "#77af42",
  lightGreen: "#8bc753",
  darkGreen: "#63a524",
  paleYellow: "#ffffbb",
  teal: "#0dc0de",
  blue: "#007da4",
  mediumBlue: "#026AA1",
  lightBlue: "#34bdd8",
  neutralLightBlue: "#0dc0dc",
  tangerine: "#ffbd3e",
  gray: "#5e5e5e",
  darkGray: "#757575",
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
  neutralFeedback: "#555", // another dark gray
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
      color: palette.neutral,
      colorHover: palette.neutralDark,
      colorSelected: palette.lightBlue,
    },
  },
  popover: {
    arrowOuterColor: "rgba(0, 0, 0, 0.25)",
    borderColor: "rgba(0, 0, 0, 0.2)",
  },
  card: {
    header: {
     background: "#daf3f8"
    },
    body: {
      background: "#fdfdfd"
    }
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
    verticalSpacing: "1rem",
    horizontalSpacing: "1rem",
    horizontalBuffer: "2.5rem",
    bubbleSize: "3.6rem",
    labelSpacing: "6.5rem",
    feedback: {
      popover: {
        horizontalSpacing: "1.1rem",
        verticalSpacing: "0.9rem",
        maxWidth: "370px",
      },
    },
  },
  popover: {
    arrow: {
      width: "16px",
      height: "8px",
      edgeDistance: "9px",
    },
    horizontalSpacing: "0.8rem",
    verticalSpacing: "1rem",
    horizontalBuffer: "4rem",
    borderWidth: "1px",
    maxWidth: "325px",
  }
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
  only: {
    mobile(...args: Parameters<typeof css>) {
      return css`@media(max-width: ${BREAKPOINTS.mobile}px) { ${css(...args)} }`;
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
      font-family: "Neue Helvetica W01", Helvetica, Arial, sans-serif;
      padding-top: 1px;
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
    margin-left: calc(-1.34 * ${layouts.answer.bubbleSize});
    display: flex;
    align-items: center;
    height: ${layouts.answer.bubbleSize};
    width: 4.8rem;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.2rem;
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
          width: ${layouts.answer.bubbleSize} !important;
          margin-left: -0.1rem;
        }
      }
    }
  `,
  resetText: () => css`
    font-family:  "Neue Helvetica W01", Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
  stepCardPadding: () => css`
    padding: 48px 140px;

    ${breakpoints.tablet`
      padding: ${breakpoints.margins.tablet} ${breakpoints.margins.tablet};
    `}

    ${breakpoints.mobile`
      padding: calc(${breakpoints.margins.mobile} * 2) ${breakpoints.margins.mobile};
    `}
  `,
  popover: () => css`
    ${mixins.resetText()}

    z-index: 1;
    position: relative;
    border: ${layouts.popover.borderWidth} solid ${colors.popover.borderColor};
    background-color: ${colors.palette.white};
    background-clip: padding-box;
    max-width: ${layouts.popover.maxWidth};
    margin: calc(${layouts.popover.arrow.height} - 14px) 0 ${layouts.answer.horizontalSpacing} 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    color: ${colors.palette.neutralThin};
    font-size: 1.4rem;

    .arrow {
      position: absolute;
      display: block;
      width: ${layouts.popover.arrow.width};
      height: ${layouts.popover.arrow.height};
      margin-left: ${layouts.popover.arrow.edgeDistance};
      top: calc(${layouts.popover.arrow.height} * -1);

      &::before,
      &::after {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;
        border-width: 0 calc(${layouts.popover.arrow.width} / 2) ${layouts.popover.arrow.height} calc(${layouts.popover.arrow.width} / 2);
      }
      &::before {
        top: 0;
        border-bottom-color: ${colors.popover.borderColor};
      }
      &::after {
        top: ${layouts.popover.borderWidth};
        border-bottom-color: ${colors.palette.white};
      }
    }

    &.right {
      right: calc(-${layouts.popover.arrow.edgeDistance} - ${layouts.popover.borderWidth});
      .arrow { right: ${layouts.popover.arrow.edgeDistance}; }
    }


    > .content {
      padding: ${layouts.popover.verticalSpacing} ${layouts.popover.horizontalSpacing};
    }
  `,
};

const theme = {
  colors: colors,
  layouts: layouts,
  transitions: transitions,
  breakpoints: breakpoints,
};

export default theme;
