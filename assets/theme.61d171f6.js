import{C as e}from"./index.7657e27d.js";const o={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},r={palette:o,answer:{color:o.lightBlue,correct:{color:o.green,background:"#77af42"},incorrect:{color:o.red,background:o.red},checked:o.lightBlue,hover:o.neutralDark,label:{color:o.neutral,colorHover:o.neutralDark,colorSelected:o.lightBlue},feedback:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",popover:{borderColor:"rgba(0, 0, 0, 0.2)"}}},card:{header:{background:"#daf3f8"},body:{background:"#fdfdfd"}},button:{background:o.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:o.neutralDark,background:o.neutralLighter}},t={answer:{verticalSpacing:"1rem",horizontalSpacing:"1rem",horizontalBuffer:"2.5rem",bubbleSize:"2.4rem",labelSpacing:"6.5rem",feedback:{arrow:{width:"16px",height:"8px"},popover:{horizontalSpacing:"1.1rem",verticalSpacing:"0.9rem",horizontalBuffer:"4rem",borderWidth:"1px",maxWidth:"370px"}}}},n={mobile:600,tablet:999,desktop:1e3,large:1600},l={mobile(...a){return e`@media(max-width: ${n.mobile}px) { ${e(...a)} }`},tablet(...a){return e`@media(max-width: ${n.tablet}px) { ${e(...a)} }`},desktop(...a){return e`@media(min-width: ${n.desktop}px) { ${e(...a)} }`},only:{mobile(...a){return e`@media(max-width: ${n.mobile}px) { ${e(...a)} }`}},margins:{mobile:"8px",tablet:"24px"}},i={answer:"0.1s ease-in-out"},c={answer:()=>e`
    .answer-label {
      display: flex;
    }
    color: ${r.answer.label.color};
    .answer-letter {
      width: ${t.answer.bubbleSize};
      height: ${t.answer.bubbleSize};
      min-width: ${t.answer.bubbleSize};
      min-height: ${t.answer.bubbleSize};
      border-radius: calc(${t.answer.bubbleSize} / 2);
      border-width: 2px;
      border-style: solid;
      border-color: #c6c6c6;
      color: ${r.answer.label.colorHover};
      transition: color ${i.answer}, border-color ${i.answer}, background-color ${i.answer};
      background-color: ${r.palette.white};
    }
  `,answerColor:a=>e`
    color: ${a.color};
    .answer-letter {
       border-color: ${a.color};
       background-color: ${a.background};
       color: ${r.palette.white};
    }
  `,answerChecked:()=>c.answerColor({color:r.answer.checked,background:r.answer.checked}),answerCorrect:()=>c.answerColor(r.answer.correct),answerIncorrect:()=>c.answerColor(r.answer.incorrect),answerHover:()=>e`
    color: ${r.answer.label.colorHover};
    .answer-letter {
      border-color: ${r.answer.label.colorSelected};
    }
  `,answerCorrectText:()=>e`
    content: 'correct answer';
    color: ${r.answer.label.color};
    margin-left: calc(-3 * ${t.answer.bubbleSize});
    width: calc(3 * ${t.answer.bubbleSize});
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.2rem;
  `,answerCorrectAnswer:()=>e`
    color: ${r.answer.correct.color};
    .answer-letter {
      border-color: ${r.answer.correct.color};
      color: ${r.answer.correct.color};
    }
    &::before {
     ${c.answerCorrectText()}
      @media screen and (max-width: ${n.tablet}px) {
        display: none;
      }
    }
    @media screen and (max-width:  ${n.tablet}px) {
      .answer-letter-wrapper {
        display: flex;
        flex-direction: column;
        &::after {
          ${c.answerCorrectText()}
          width: ${t.answer.bubbleSize} !important;
          margin-left: calc(-${t.answer.bubbleSize} / 3.3);
        }
      }
    }
  `,resetText:()=>e`
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
  `,stepCardPadding:()=>e`
    padding: 48px 140px;

    ${l.tablet`
      padding: ${l.margins.tablet} ${l.margins.tablet};
    `}

    ${l.mobile`
      padding: calc(${l.margins.mobile} * 2) ${l.margins.mobile};
    `}
  `};export{l as b,r as c,t as l,c as m,i as t};
