import{m as e,c as t,b as o}from"./theme-e6ec1032.js";import{s as a}from"./index-12e12f28.js";const p=a.div`
    ${e.stepCardPadding()}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: calc(1.4rem * var(--content-text-scale));
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
    }

    .points {
        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        .attempts-left {
          color: #B03808;
          font-weight: bold;
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

    ${o.desktop`
        padding: 0 140px 32px 140px;
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
`;export{p as S};