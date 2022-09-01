import { colors, breakpoints } from "../theme";
import styled from "styled-components";

export const StepCardFooter = styled.div`
    --step-card-padding-top: 48px;
    --step-card-padding-side: 140px;

    ${breakpoints.only.tablet`
        --step-card-padding-top: ${breakpoints.margins.tablet};
        --step-card-padding-side: ${breakpoints.margins.tablet};
    `}

    ${breakpoints.only.mobile`
        --step-card-padding-top: calc(${breakpoints.margins.mobile} * 2);
        --step-card-padding-side: ${breakpoints.margins.mobile};
    `}

    padding: var(--step-card-padding-top) var(--step-card-padding-side);
    border-top: 1px solid ${colors.palette.pale};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 2rem;

    > * {
        flex-grow: 1;
    }

    button {
        width: 160px;
        height: 48px;
    }

    .points {
        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        .attempts-left {
            color: #F36B32;
        }
    }

    .controls {
        display: flex;
        flex-flow: column wrap-reverse;
        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        button + button {
            margin: 0.8rem 0 0 0;
        }
    }

    ${breakpoints.desktop`
        padding: 32px var(--step-card-padding-side);
        flex-wrap: nowrap;

        .points {
            max-width: 400px;
        }

        .controls {
            flex-flow: row;
            justify-content: flex-end;

            button + button {
                margin: 0 0 0 0.8rem;
            }
        }
    `}
`;
