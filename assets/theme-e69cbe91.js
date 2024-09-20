import{C as o}from"./index-6d896872.js";const i={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},a={palette:i,answer:{neutral:i.neutralThin,hover:"#026AA1",checked:"#026AA1",correct:"#0D7741",incorrect:"#C22032"},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:i.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:i.neutralDarker,background:i.neutralLighter}},e={answer:{verticalSpacing:"1rem",horizontalSpacing:"1rem",horizontalBuffer:"2.5rem",bubbleSize:"3.6rem",labelSpacing:"6.5rem",feedback:{popover:{horizontalSpacing:"1.1rem",verticalSpacing:"0.9rem",maxWidth:"370px"}}},popover:{arrow:{width:"16px",height:"8px",edgeDistance:"9px"},horizontalSpacing:"0.8rem",verticalSpacing:"1rem",horizontalBuffer:"4rem",borderWidth:"1px",maxWidth:"325px"},card:{spacing:"2rem"}},l={mobile:600,tablet:999,desktop:1e3,large:1600},t={mobile(...r){return o`@media(max-width: ${l.mobile}px) { ${o(...r)} }`},tablet(...r){return o`@media(max-width: ${l.tablet}px) { ${o(...r)} }`},desktop(...r){return o`@media(min-width: ${l.desktop}px) { ${o(...r)} }`},only:{mobile(...r){return o`@media(max-width: ${l.mobile}px) { ${o(...r)} }`}},margins:{mobile:"8px",tablet:"24px"}},d={answer:"0.1s ease-in-out"},n={answer:()=>o`
    .answer-label {
      display: flex;
    }
    color: ${i.neutralDarker};
    .answer-letter {
      width: ${e.answer.bubbleSize};
      height: ${e.answer.bubbleSize};
      min-width: ${e.answer.bubbleSize};
      min-height: ${e.answer.bubbleSize};
      border-radius: calc(${e.answer.bubbleSize} / 2);
      border-width: 2px;
      border-style: solid;
      border-color: #c6c6c6;
      color: ${a.answer.neutral};
      transition: color ${d.answer}, border-color ${d.answer}, background-color ${d.answer};
      background-color: ${a.palette.white};
      font-family: "Neue Helvetica W01", Helvetica, Arial, sans-serif;
    }
  `,answerColor:(r,c=!1)=>o`
    .answer-letter {
      color: ${c?"#fff":r};
      border-color: ${r};
      ${c?`background-color: ${r};`:null}
    }
  `,answerChecked:()=>n.answerColor(a.answer.checked,!0),answerCorrect:r=>n.answerColor(a.answer.correct,r),answerIncorrect:r=>n.answerColor(a.answer.incorrect,r),answerHover:()=>o`
    ${n.answerColor(a.answer.hover)};
    font-weight: bold;
  `,answerCorrectAnswer:()=>n.answerColor(a.answer.correct,!1),resetText:()=>o`
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
  `,stepCardPadding:()=>o`
    padding: 48px 140px;

    ${t.tablet`
      padding: ${t.margins.tablet} ${t.margins.tablet};
    `}

    ${t.mobile`
      padding: calc(${t.margins.mobile} * 2) ${t.margins.mobile};
    `}
  `,popover:()=>o`
    ${n.resetText()}

    z-index: 1;
    position: relative;
    border: ${e.popover.borderWidth} solid ${a.popover.borderColor};
    background-color: ${a.palette.white};
    background-clip: padding-box;
    max-width: ${e.popover.maxWidth};
    margin: calc(${e.popover.arrow.height} - 14px) 0 ${e.answer.horizontalSpacing} 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    color: ${a.palette.neutralThin};
    font-size: calc(1.4rem * var(--content-text-scale));

    .arrow {
      position: absolute;
      display: block;
      width: ${e.popover.arrow.width};
      height: ${e.popover.arrow.height};
      margin-left: ${e.popover.arrow.edgeDistance};
      top: calc(${e.popover.arrow.height} * -1);

      &::before,
      &::after {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;
        border-width: 0 calc(${e.popover.arrow.width} / 2) ${e.popover.arrow.height} calc(${e.popover.arrow.width} / 2);
      }
      &::before {
        top: 0;
        border-bottom-color: ${a.popover.borderColor};
      }
      &::after {
        top: ${e.popover.borderWidth};
        border-bottom-color: ${a.palette.white};
      }
    }

    &.right {
      right: calc(-${e.popover.arrow.edgeDistance} - ${e.popover.borderWidth});
      .arrow { right: ${e.popover.arrow.edgeDistance}; }
    }


    > .content {
      padding: ${e.popover.verticalSpacing} ${e.popover.horizontalSpacing};
    }
  `};export{t as b,a as c,e as l,n as m,d as t};
