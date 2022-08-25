import{C as e}from"./index.20515251.js";const a={red:"#ca2026",danger:"#c2002f",green:"#77af42",lightGreen:"#8bc753",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},r={palette:a,answer:{color:a.lightBlue,correct:{color:a.green,background:"#77af42"},incorrect:{color:a.red,background:a.red},checked:a.lightBlue,hover:a.neutralDark,label:{color:a.neutralMedium,colorHover:a.neutralDark,colorSelected:a.lightBlue},feedback:{arrowOuterColor:"rgba(0, 0, 0, 0.25)",popover:{borderColor:"rgba(0, 0, 0, 0.2)"}}},card:{background:"#daf3f8"},button:{background:a.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"},freeResponse:{color:a.neutralDark,background:a.neutralLighter}},n={answer:{verticalSpacing:"1.5rem",horizontalSpacing:"1rem",horizontalBuffer:"2.5rem",bubbleSize:"4rem",labelSpacing:"6.5rem",feedback:{arrow:{width:"20px",height:"15px"},popover:{horizontalSpacing:"2rem",verticalSpacing:"2rem",horizontalBuffer:"4rem",borderWidth:"1px",maxWidth:"370px"}}}},t={mobile:600,tablet:999,desktop:1e3,large:1600},s={mobile(...o){return e`@media(max-width: ${t.mobile}px) { ${e(...o)} }`},tablet(...o){return e`@media(max-width: ${t.tablet}px) { ${e(...o)} }`},desktop(...o){return e`@media(min-width: ${t.desktop}px) { ${e(...o)} }`},only:{mobile(...o){return e`@media(max-width: ${t.mobile}px) { ${e(...o)} }`},tablet(...o){return e`@media(min-width: ${t.mobile+1}px) and (max-width: ${t.tablet}px) { ${e(...o)} }`}},margins:{mobile:"8px",tablet:"24px"}},i={answer:"0.1s ease-in-out"},l={answer:()=>e`
    .answer-label {
      display: flex;
    }
    color: ${r.answer.label.color};
    .answer-letter {
      width: ${n.answer.bubbleSize};
      height: ${n.answer.bubbleSize};
      min-width: ${n.answer.bubbleSize};
      min-height: ${n.answer.bubbleSize};
      border-radius: calc(${n.answer.bubbleSize} / 2);
      border-width: 2px;
      border-style: solid;
      border-color: #c6c6c6;
      color: ${r.answer.label.colorHover};
      transition: color ${i.answer}, border-color ${i.answer}, background-color ${i.answer};
      background-color: ${r.palette.white};
    }
  `,answerColor:o=>e`
    color: ${o.color};
    .answer-letter {
       border-color: ${o.color};
       background-color: ${o.background};
       color: ${r.palette.white};
    }
  `,answerChecked:()=>l.answerColor({color:r.answer.checked,background:r.answer.checked}),answerCorrect:()=>l.answerColor(r.answer.correct),answerIncorrect:()=>l.answerColor(r.answer.incorrect),answerHover:()=>e`
    color: ${r.answer.label.colorHover};
    .answer-letter {
      border-color: ${r.answer.label.colorSelected};
    }
  `,answerCorrectText:()=>e`
    content: 'correct answer';
    color: ${r.answer.label.color};
    margin-left: calc(-1.25 * ${n.answer.bubbleSize});
    width: calc(1.25 * ${n.answer.bubbleSize});
    text-align: center;
    font-size: 1.2rem;
    // em used here for line-height for compatibility with IE
    // http://caniuse.com/#feat=rem -- rem ignored in pseudo elements
    line-height: 1em;
    margin-top: 0.8rem;
  `,answerCorrectAnswer:()=>e`
    color: ${r.answer.correct.color};
    .answer-letter {
      border-color: ${r.answer.correct.color};
      color: ${r.answer.correct.color};
    }
    &::before {
     ${l.answerCorrectText()}
      @media screen and (max-width: ${t.tablet}px) {
        display: none;
      }
    }
    @media screen and (max-width:  ${t.tablet}px) {
      .answer-letter-wrapper {
        display: flex;
        flex-direction: column;
        &::after {
          ${l.answerCorrectText()}
          width: $openstax-answer-bubble-size !important;
          margin-left: 0;
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
  `};export{s as b,r as c,n as l,l as m,i as t};
