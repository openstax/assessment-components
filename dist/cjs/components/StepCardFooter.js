"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepCardFooter = void 0;
const theme_1 = require("../theme");
const styled_components_1 = __importDefault(require("styled-components"));
exports.StepCardFooter = styled_components_1.default.div `
    ${theme_1.mixins.stepCardPadding()}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: calc(1.6rem * var(--content-text-scale));
    line-height: calc(2rem * var(--content-text-scale));
    background: ${theme_1.colors.card.body.background};
    overflow: auto;

    > * {
        flex-grow: 1;
    }

    button {
        width: 160px;
        height: 48px;
    }

    .step-card-footer-inner {
        border-top: 1px solid ${theme_1.colors.palette.pale};
        padding-top: 32px;
        display: flex;
        justify-content: space-between;
        gap: 1.6rem;

        ${theme_1.breakpoints.mobile `
            flex-wrap: wrap;
        `}
    }

    .points {
        .attempts-left {
          color: #B03808;
          font-weight: bold;
        }
    }

    .controls {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        gap: 0.8rem;

        button:has(~ button),
        button + button {
            flex-shrink: 1;
            min-width: 0;
            width: 100px;
        }
    }

    ${theme_1.breakpoints.desktop `
        padding: 0 140px 32px 140px;
        flex-wrap: nowrap;

        .points {
            max-width: 400px;
        }
    `}
`;
//# sourceMappingURL=StepCardFooter.js.map