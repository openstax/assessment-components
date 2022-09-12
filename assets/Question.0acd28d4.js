import{s as j,c as L,a as p,j as r}from"./index.6f8b1925.js";import{m as t,c as n,l as e,t as Q}from"./theme.97f2c7df.js";import{A as W}from"./AnswersTable.1cfc0aa9.js";import{C as f}from"./Feedback.3c626d9c.js";const F=j.div`
&.step-card-body {
  ${t.stepCardPadding()};
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
    color: ${n.palette.neutral};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${n.palette.neutralLightBlue};
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
    border-left: ${e.answer.horizontalSpacing} solid ${n.palette.neutralLighter};
    font-style: italic;
  }

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &:not(.disabled){
        .answer-label:focus{
          background-color: ${n.palette.neutralLightest};
        }
      }
      ${t.answer()};
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

      transition: color ${Q.answer};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${t.answerHover()}
      }
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        display: none;

        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${t.answerChecked()};
          }
        }
      }

      .answer-checked{
        .answer-label {
          ${t.answerChecked()};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-checked {
        &:not(.answer-correct) {
          .answer-label {
            ${t.answerIncorrect()};
          }
        }

        &.answer-correct {
          .answer-label {
            ${t.answerCorrect()};
          }
        }
      }

      .answer-correct:not(.answer-checked) {
        .answer-label {
          ${t.answerCorrectAnswer()}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect, .answer-checked.answer-incorrect {
        .answer-label {
          ${t.answerIncorrect()}
        }
      }
    }

    .question-feedback {
      ${t.resetText()}

      z-index: 1;
      position: relative;
      border: ${e.answer.feedback.popover.borderWidth} solid ${n.answer.feedback.popover.borderColor};
      background-color: ${n.palette.white};
      background-clip: padding-box;
      border-radius: 0.3rem;
      max-width: ${e.answer.feedback.popover.maxWidth};
      margin: calc(${e.answer.feedback.arrow.height} - 5px) 0 ${e.answer.horizontalSpacing} calc(-1 * (2 * ${e.answer.horizontalSpacing}));
      box-shadow: 10px 0px 10px rgba(0, 0, 0, .25);
      color: ${n.palette.neutral};
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
          border-bottom-color: ${n.answer.feedback.popover.borderColor};
        }
        &::after {
          top: ${e.answer.feedback.popover.borderWidth};
          border-bottom-color: ${n.palette.white};
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
`,U=a=>{let o,s;const{question:i,correct_answer_id:c,incorrectAnswerId:$,exercise_uid:m,className:x,questionNumber:b,context:k,task:l,hidePreambles:d}=a,{stem_html:v,collaborator_solutions:y=[],formats:S,stimulus_html:q}=i,u=!!c,z=!!$,C=l!=null?l.is_deleted:void 0,N=(l!=null?l.type:void 0)==="homework",_=L("openstax-question",x,{"has-correct-answer":u&&!(C&&N),"has-incorrect-answer":z}),A=()=>{const{displaySolution:w}=a,{collaborator_solutions:g=[]}=i;return w&&g&&g.find(I=>I.content_html!==void 0)};return m!=null&&(o=r("div",{className:"exercise-uid",children:m})),A()&&(s=p("div",{className:"detailed-solution",children:[r("div",{className:"header",children:"Detailed solution:"}),r(f,{className:"solution",block:!0,html:y.map(w=>w.content_html).join("")})]})),p(F,{className:_,"data-question-number":b,"data-test-id":"question",children:[r(h,{type:"context",html:k,hidden:d}),r(h,{type:"stimulus",html:q,hidden:d}),r(h,{type:"stem",html:v,hidden:d,questionNumber:b}),a.children,r(W,{...a,onChangeAnswer:a.onChange,hasCorrectAnswer:u}),s,a.displayFormats?r(H,{formats:S}):void 0,o]})},h=a=>{const{html:o="",type:s,hidden:i,questionNumber:c}=a;return i===!0||!(o.length>0)?null:r(f,{html:o,"data-question-number":c,className:`question-${s}`,block:!0})},H=({formats:a=[]})=>p("div",{className:"formats-listing",children:[r("div",{className:"header",children:"Formats:"}),a.map((o,s)=>r("span",{children:o},s))]});export{U as Q,h as a};
