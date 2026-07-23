"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixins = exports.transitions = exports.breakpoints = exports.BREAKPOINTS = exports.layouts = exports.colors = void 0;
const styled_components_1 = require("styled-components");
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
    neutralLightest: "#f9f9f9",
    neutralCool: "#f6f7f8",
    neutralBright: "#f5f5f5",
    neutralLighter: "#f1f1f1",
    neutralLight: "#e5e5e5",
    neutralMedium: "#a0a0a0",
    neutral: "#818181",
    neutralThin: "#6f6f6f",
    neutralDark: "#5f6163",
    neutralFeedback: "#555",
    neutralDarker: "#424242",
    black: "#000000",
    orange: "#D4450C",
    yellow: "#FEDE9F",
};
exports.colors = {
    palette: palette,
    answer: {
        neutral: palette.neutralThin,
        hover: '#026AA1',
        checked: '#026AA1',
        correct: '#0D7741',
        incorrect: '#C22032',
        partialCredit: '#976502',
        neutralDark: '#5f6163'
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
        color: palette.neutralDarker,
        background: palette.neutralLighter,
    },
};
exports.layouts = {
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
    },
    card: {
        spacing: '2rem'
    }
};
exports.BREAKPOINTS = {
    mobile: 600,
    tablet: 999,
    desktop: 1000,
    large: 1600,
};
exports.breakpoints = {
    mobile(...args) {
        return (0, styled_components_1.css) `@media(max-width: ${exports.BREAKPOINTS.mobile}px) { ${(0, styled_components_1.css)(...args)} }`;
    },
    tablet(...args) {
        return (0, styled_components_1.css) `@media(max-width: ${exports.BREAKPOINTS.tablet}px) { ${(0, styled_components_1.css)(...args)} }`;
    },
    desktop(...args) {
        return (0, styled_components_1.css) `@media(min-width: ${exports.BREAKPOINTS.desktop}px) { ${(0, styled_components_1.css)(...args)} }`;
    },
    only: {
        mobile(...args) {
            return (0, styled_components_1.css) `@media(max-width: ${exports.BREAKPOINTS.mobile}px) { ${(0, styled_components_1.css)(...args)} }`;
        },
    },
    margins: {
        mobile: '8px',
        tablet: '24px',
    },
};
exports.transitions = {
    answer: "0.1s ease-in-out",
};
exports.mixins = {
    answer: () => (0, styled_components_1.css) `
    .answer-label {
      display: inline-flex;
    }
    color: ${palette.neutralDarker};
    .answer-letter-wrapper::before {
      width: ${exports.layouts.answer.bubbleSize};
      height: ${exports.layouts.answer.bubbleSize};
      min-width: ${exports.layouts.answer.bubbleSize};
      min-height: ${exports.layouts.answer.bubbleSize};
      border-radius: calc(${exports.layouts.answer.bubbleSize} / 2);
      border-width: 2px;
      border-style: solid;
      border-color: #c6c6c6;
      color: ${exports.colors.answer.neutral};
      transition: color ${exports.transitions.answer}, border-color ${exports.transitions.answer}, background-color ${exports.transitions.answer};
      background-color: ${exports.colors.palette.white};
      font-family: "Neue Helvetica W01", Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      font-weight: normal;
    }
  `,
    answerColor: (color, invertBubble = false) => (0, styled_components_1.css) `
    .answer-letter-wrapper::before {
      color: ${invertBubble ? '#fff' : color};
      border-color: ${color};
      ${invertBubble ? `background-color: ${color};` : null}
    }
  `,
    answerChecked: () => exports.mixins.answerColor(exports.colors.answer.checked, true),
    answerCorrect: (checked) => exports.mixins.answerColor(exports.colors.answer.correct, checked),
    answerIncorrect: (checked) => exports.mixins.answerColor(exports.colors.answer.incorrect, checked),
    answerHover: () => (0, styled_components_1.css) `
    ${exports.mixins.answerColor(exports.colors.answer.hover)};
    font-weight: bold;
  `,
    answerCorrectAnswer: () => exports.mixins.answerColor(exports.colors.answer.correct, false),
    resetText: () => (0, styled_components_1.css) `
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
    stepCardPadding: () => (0, styled_components_1.css) `
    padding: 4.8rem 14rem 0;

    ${exports.breakpoints.tablet `
      padding: ${exports.breakpoints.margins.tablet} ${exports.breakpoints.margins.tablet};
    `}

    ${exports.breakpoints.mobile `
      padding: calc(${exports.breakpoints.margins.mobile} * 2) ${exports.breakpoints.margins.mobile};
    `}
  `,
    popover: () => (0, styled_components_1.css) `
    ${exports.mixins.resetText()}

    z-index: 1;
    position: relative;
    border: ${exports.layouts.popover.borderWidth} solid ${exports.colors.popover.borderColor};
    background-color: ${exports.colors.palette.white};
    background-clip: padding-box;
    max-width: ${exports.layouts.popover.maxWidth};
    margin: calc(${exports.layouts.popover.arrow.height} - 14px) 0 ${exports.layouts.answer.horizontalSpacing} 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    color: ${exports.colors.palette.neutralThin};
    font-size: calc(1.4rem * var(--content-text-scale));

    .arrow {
      position: absolute;
      display: block;
      width: ${exports.layouts.popover.arrow.width};
      height: ${exports.layouts.popover.arrow.height};
      margin-left: ${exports.layouts.popover.arrow.edgeDistance};
      top: calc(${exports.layouts.popover.arrow.height} * -1);

      &::before,
      &::after {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;
        border-width: 0 calc(${exports.layouts.popover.arrow.width} / 2) ${exports.layouts.popover.arrow.height} calc(${exports.layouts.popover.arrow.width} / 2);
      }
      &::before {
        top: 0;
        border-bottom-color: ${exports.colors.popover.borderColor};
      }
      &::after {
        top: ${exports.layouts.popover.borderWidth};
        border-bottom-color: ${exports.colors.palette.white};
      }
    }

    &.right {
      right: calc(-${exports.layouts.popover.arrow.edgeDistance} - ${exports.layouts.popover.borderWidth});
      .arrow { right: ${exports.layouts.popover.arrow.edgeDistance}; }
    }


    > .content {
      padding: ${exports.layouts.popover.verticalSpacing} ${exports.layouts.popover.horizontalSpacing};
    }
  `,
    visuallyHidden: () => (0, styled_components_1.css) `
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `
};
const theme = {
    colors: exports.colors,
    layouts: exports.layouts,
    transitions: exports.transitions,
    breakpoints: exports.breakpoints,
};
exports.default = theme;
//# sourceMappingURL=theme.js.map