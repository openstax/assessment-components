import { colors, breakpoints, mixins } from "../theme";
import styled, { css } from "styled-components";
import { CompactDisplayProps } from "./compactDisplay";

export const StepCardFooter = styled.div<CompactDisplayProps>`
    ${mixins.stepCardPadding()}
    border-top: 1px solid ${colors.palette.pale};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: calc(1.6rem * var(--content-text-scale));
    line-height: calc(2rem * var(--content-text-scale));
    background: ${colors.card.body.background};
    overflow: auto;

    > * {
        flex-grow: 1;
    }

    button {
        width: 160px;
        height: 48px;
    }

    .step-card-footer-inner {
        padding-top: 32px;
        display: flex;
        justify-content: space-between;
        gap: 1.6rem;

        ${breakpoints.mobile`
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
        /* the left region renders nothing when there is nothing to say, so the controls
           hold the right-hand edge themselves rather than relying on a spacer */
        margin-left: auto;

        button:has(~ button),
        button + button {
            flex-shrink: 1;
            min-width: 0;
            width: 100px;
        }
    }

    ${breakpoints.desktop`
        padding: 0 140px 32px 140px;
        flex-wrap: nowrap;

        .points {
            max-width: 400px;
        }
    `}

    ${props => props.compactDisplay && css`
        && {
            padding: 0 var(--spacing, 0.8rem) var(--spacing, 0.8rem);
        }

        .step-card-footer-inner {
            padding-top: var(--spacing, 0.8rem);
        }
    `}
`;
