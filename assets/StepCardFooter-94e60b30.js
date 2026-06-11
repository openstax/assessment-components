import{m as o,c as t,b as e}from"./theme-28303e24.js";import{s as a}from"./index-c933295e.js";const r=a.div`
    ${o.stepCardPadding()}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: calc(1.6rem * var(--content-text-scale));
    line-height: calc(2rem * var(--content-text-scale));
    background: ${t.card.body.background};
    overflow: auto;

    > * {
        flex-grow: 1;
    }

    button {
        width: 160px;
        height: 48px;
    }

    .step-card-footer-inner {
        border-top: 1px solid ${t.palette.pale};
        padding-top: 32px;
        display: flex;
        justify-content: space-between;
        gap: 1.6rem;

        ${e.mobile`
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

    ${e.desktop`
        padding: 0 140px 32px 140px;
        flex-wrap: nowrap;

        .points {
            max-width: 400px;
        }
    `}
`;export{r as S};
