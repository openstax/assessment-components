import{C as o}from"./index-0d12179a.js";const a={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},r={palette:a,answer:{color:a.lightBlue,correct:{color:a.green,background:"#77af42"},incorrect:{color:a.red,background:a.red},checked:a.lightBlue,hover:a.neutralDark,label:{color:a.neutral,colorHover:a.neutralDark,colorSelected:a.lightBlue}},popover:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",borderColor:"rgba(0, 0, 0, 0.2)"},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:a.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:a.neutralDark,background:a.neutralLighter}},e={answer:{verticalSpacing:"1rem",horizontalSpacing:"1rem",horizontalBuffer:"2.5rem",bubbleSize:"3.6rem",labelSpacing:"6.5rem",feedback:{popover:{horizontalSpacing:"1.1rem",verticalSpacing:"0.9rem",maxWidth:"370px"}}},popover:{arrow:{width:"16px",height:"8px",edgeDistance:"9px"},horizontalSpacing:"0.8rem",verticalSpacing:"1rem",horizontalBuffer:"4rem",borderWidth:"1px",maxWidth:"325px"}},i={mobile:600,tablet:999,desktop:1e3,large:1600},l={mobile(...t){return o`@media(max-width: ${i.mobile}px) { ${o(...t)} }`},tablet(...t){return o`@media(max-width: ${i.tablet}px) { ${o(...t)} }`},desktop(...t){return o`@media(min-width: ${i.desktop}px) { ${o(...t)} }`},only:{mobile(...t){return o`@media(max-width: ${i.mobile}px) { ${o(...t)} }`}},margins:{mobile:"8px",tablet:"24px"}},c={answer:"0.1s ease-in-out"},n={answer:()=>o`
    .answer-label {
      display: flex;
    }
    color: ${r.answer.label.color};
    .answer-letter {
      width: ${e.answer.bubbleSize};
      height: ${e.answer.bubbleSize};
      min-width: ${e.answer.bubbleSize};
      min-height: ${e.answer.bubbleSize};
      border-radius: calc(${e.answer.bubbleSize} / 2);
      border-width: 2px;
      border-style: solid;
      border-color: #c6c6c6;
      color: ${r.answer.label.colorHover};
      transition: color ${c.answer}, border-color ${c.answer}, background-color ${c.answer};
      background-color: ${r.palette.white};
      font-family: "Neue Helvetica W01", Helvetica, Arial, sans-serif;
    }
  `,answerColor:t=>o`
    color: ${t.color};
    .answer-letter {
       border-color: ${t.color};
       background-color: ${t.background};
       color: ${r.palette.white};
    }
  `,answerChecked:()=>n.answerColor({color:r.answer.checked,background:r.answer.checked}),answerCorrect:()=>n.answerColor(r.answer.correct),answerIncorrect:()=>n.answerColor(r.answer.incorrect),answerHover:()=>o`
    color: ${r.answer.label.colorHover};
    .answer-letter {
      border-color: ${r.answer.label.colorSelected};
    }
  `,answerCorrectText:()=>o`
    content: 'correct answer';
    color: ${r.answer.label.color};
    margin-left: calc(-1.34 * ${e.answer.bubbleSize});
    display: flex;
    align-items: center;
    height: ${e.answer.bubbleSize};
    width: 4.8rem;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.2rem;
  `,answerCorrectAnswer:()=>o`
    color: ${r.answer.correct.color};
    .answer-letter {
      border-color: ${r.answer.correct.color};
      color: ${r.answer.correct.color};
    }
    &::before {
     ${n.answerCorrectText()}
      @media screen and (max-width: ${i.tablet}px) {
        display: none;
      }
    }
    @media screen and (max-width:  ${i.tablet}px) {
      .answer-letter-wrapper {
        display: flex;
        flex-direction: column;
        &::after {
          ${n.answerCorrectText()}
          width: ${e.answer.bubbleSize} !important;
          margin-left: -0.1rem;
        }
      }
    }
  `,resetText:()=>o`
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

    ${l.tablet`
      padding: ${l.margins.tablet} ${l.margins.tablet};
    `}

    ${l.mobile`
      padding: calc(${l.margins.mobile} * 2) ${l.margins.mobile};
    `}
  `,popover:()=>o`
    ${n.resetText()}

    z-index: 1;
    position: relative;
    border: ${e.popover.borderWidth} solid ${r.popover.borderColor};
    background-color: ${r.palette.white};
    background-clip: padding-box;
    max-width: ${e.popover.maxWidth};
    margin: calc(${e.popover.arrow.height} - 14px) 0 ${e.answer.horizontalSpacing} 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    color: ${r.palette.neutralThin};
    font-size: 1.4rem;

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
        border-bottom-color: ${r.popover.borderColor};
      }
      &::after {
        top: ${e.popover.borderWidth};
        border-bottom-color: ${r.palette.white};
      }
    }

    &.right {
      right: calc(-${e.popover.arrow.edgeDistance} - ${e.popover.borderWidth});
      .arrow { right: ${e.popover.arrow.edgeDistance}; }
    }


    > .content {
      padding: ${e.popover.verticalSpacing} ${e.popover.horizontalSpacing};
    }
  `};export{l as b,r as c,e as l,n as m,c as t};
