import{s as Q,c as j,j as r}from"./index.e2799ff8.js";import{m as n,c as t,l as e,t as F}from"./theme.0827f765.js";import{A as L}from"./AnswersTable.6cca0631.js";import{C as g}from"./Feedback.85e582d8.js";var a="/home/runner/work/assessment-components/assessment-components/src/components/Question.tsx";const W=Q.div`
&.step-card-body {
  ${n.stepCardPadding()};
}

&.openstax-question {
  font-size: 2rem;

  .detailed-solution {
    margin-bottom: 1rem;
    .header {
      display: inline;
      margin-right: 0.5rem;
      color: #5e6062;
      font-weight: bold;
      flex-basis: 0;
    }
    .solution {
      display: inline;
      color: #6f6f6f;
    }
  }

  img {
    display: block;
    margin: auto;
    max-width: 100%;
  }

  .question-stem {
    margin-bottom: 0;
  }

  .answers-table {
    margin-bottom: 20px;
    font-size: 17px;
    line-height: 25px;
  }

  .instructions {
    font-size: 1.4rem;
    font-style: italic;
    margin-top: 10px;
    color: ${t.palette.neutral};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${t.palette.neutralLightBlue};
      padding-left: 5px;
      cursor: pointer;
      font-style: normal;
    }
  }

  .multiple-choice-prompt {
    font-weight: 600;
  }

  .free-response {
    padding: ${e.answer.horizontalSpacing} ${e.answer.horizontalBuffer};
    margin: ${e.answer.verticalSpacing} 0 ${e.answer.horizontalSpacing} ${e.answer.verticalSpacing};
    border-left: ${e.answer.horizontalSpacing} solid ${t.palette.neutralLighter};
    font-style: italic;
  }

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &:not(.disabled){
        .answer-label:focus{
          background-color: ${t.palette.neutralLightest};
        }
      }
      ${n.answer()};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      align-items: center;
      margin-left: ${e.answer.horizontalSpacing};
      * {
        margin: 0;
      }
    }

    .answer-letter {
      text-align: center;
      padding: 0;
    }


    .answer-label {
      font-weight: normal;
      width: 100%;
      padding: ${e.answer.verticalSpacing} 0 0 0;
      margin: 0;

      transition: color ${F.answer};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${n.answerHover()}
      }
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        display: none;

        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${n.answerChecked()};
          }
        }
      }

      .answer-checked{
        .answer-label {
          ${n.answerChecked()};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-checked {
        &:not(.answer-correct) {
          .answer-label {
            ${n.answerIncorrect()};
          }
        }

        &.answer-correct {
          .answer-label {
            ${n.answerCorrect()};
          }
        }
      }

      .answer-correct:not(.answer-checked) {
        .answer-label {
          ${n.answerCorrectAnswer()}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect, .answer-checked.answer-incorrect {
        .answer-label {
          ${n.answerIncorrect()}
        }
      }
    }

    .question-feedback {
      ${n.resetText()}

      z-index: 1;
      position: relative;
      border: ${e.answer.feedback.popover.borderWidth} solid ${t.answer.feedback.popover.borderColor};
      background-color: ${t.palette.white};
      background-clip: padding-box;
      border-radius: 0.3rem;
      max-width: ${e.answer.feedback.popover.maxWidth};
      margin: calc(${e.answer.feedback.arrow.height} - 5px) 0 ${e.answer.horizontalSpacing} calc(-1 * (2 * ${e.answer.horizontalSpacing}));
      box-shadow: 10px 0px 10px rgba(0, 0, 0, .25);
      color: ${t.palette.neutral};
      font-size: 1.4rem;
      font-style: italic;

      .arrow {
        position: absolute;
        display: block;
        width: ${e.answer.feedback.arrow.width};
        height: ${e.answer.feedback.arrow.height};
        margin-left: 30px;
        top: calc((${e.answer.feedback.arrow.height} + ${e.answer.feedback.popover.borderWidth}) * -1);

        &::before,
        &::after {
          position: absolute;
          display: block;
          content: "";
          border-color: transparent;
          border-style: solid;
          border-width: 0 calc(${e.answer.feedback.arrow.width} / 2) ${e.answer.feedback.arrow.height} calc(${e.answer.feedback.arrow.width} / 2);
        }
        &::before {
          top: 0;
          border-bottom-color: ${t.answer.feedback.popover.borderColor};
        }
        &::after {
          top: ${e.answer.feedback.popover.borderWidth};
          border-bottom-color: ${t.palette.white};
        }
      }

      .question-feedback-content {
        padding: ${e.answer.feedback.popover.verticalSpacing} ${e.answer.feedback.popover.horizontalSpacing};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 10px 0;
  }
}
`,E=o=>{let i,s;const{question:l,correct_answer_id:d,incorrectAnswerId:v,exercise_uid:w,className:N,questionNumber:p,context:$,task:c,hidePreambles:m}=o,{stem_html:x,collaborator_solutions:k=[],formats:y,stimulus_html:S}=l,h=!!d,q=!!v,z=c!=null?c.is_deleted:void 0,C=(c!=null?c.type:void 0)==="homework",_=j("openstax-question",N,{"has-correct-answer":h&&!(z&&C),"has-incorrect-answer":q}),A=()=>{const{displaySolution:u}=o,{collaborator_solutions:f=[]}=l;return u&&f&&f.find(I=>I.content_html!==void 0)};return w!=null&&(i=r("div",{className:"exercise-uid",children:w},void 0,!1,{fileName:a,lineNumber:288,columnNumber:7},void 0)),A()&&(s=r("div",{className:"detailed-solution",children:[r("div",{className:"header",children:"Detailed solution:"},void 0,!1,{fileName:a,lineNumber:297,columnNumber:9},void 0),r(g,{className:"solution",block:!0,html:k.map(u=>u.content_html).join("")},void 0,!1,{fileName:a,lineNumber:300,columnNumber:9},void 0)]},void 0,!0,{fileName:a,lineNumber:296,columnNumber:7},void 0)),r(W,{className:_,"data-question-number":p,"data-test-id":"question",children:[r(b,{type:"context",html:$,hidden:m},void 0,!1,{fileName:a,lineNumber:309,columnNumber:7},void 0),r(b,{type:"stimulus",html:S,hidden:m},void 0,!1,{fileName:a,lineNumber:310,columnNumber:7},void 0),r(b,{type:"stem",html:x,hidden:m,questionNumber:p},void 0,!1,{fileName:a,lineNumber:311,columnNumber:7},void 0),o.children,r(L,{...o,onChangeAnswer:o.onChange,hasCorrectAnswer:h},void 0,!1,{fileName:a,lineNumber:314,columnNumber:7},void 0),s,o.displayFormats?r(D,{formats:y},void 0,!1,{fileName:a,lineNumber:320,columnNumber:31},void 0):void 0,i]},void 0,!0,{fileName:a,lineNumber:308,columnNumber:5},void 0)},b=o=>{const{html:i="",type:s,hidden:l,questionNumber:d}=o;return l===!0||!(i.length>0)?null:r(g,{html:i,"data-question-number":d,className:`question-${s}`,block:!0},void 0,!1,{fileName:a,lineNumber:338,columnNumber:5},void 0)},D=({formats:o=[]})=>r("div",{className:"formats-listing",children:[r("div",{className:"header",children:"Formats:"},void 0,!1,{fileName:a,lineNumber:350,columnNumber:7},void 0),o.map((i,s)=>r("span",{children:i},s,!1,{fileName:a,lineNumber:351,columnNumber:35},void 0))]},void 0,!0,{fileName:a,lineNumber:349,columnNumber:5},void 0);export{E as Q,b as a};
