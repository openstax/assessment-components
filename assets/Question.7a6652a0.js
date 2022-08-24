import{s as L,c as Q,a as p,j as r}from"./index.24c6a407.js";import{c as t,l as e,m as n,t as W}from"./theme.ed682944.js";import{A as F}from"./AnswersTable.41b08fad.js";import{C as f}from"./Feedback.eb2426ed.js";const H=L.div`
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

      transition: color ${W.answer};
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
`,E=a=>{let o,s;const{question:l,correct_answer_id:c,incorrectAnswerId:g,exercise_uid:m,className:$,questionNumber:b,context:x,task:i,hidePreambles:d}=a,{stem_html:k,collaborator_solutions:v,formats:y,stimulus_html:q}=l,u=!!c,S=!!g,z=i!=null?i.is_deleted:void 0,C=(i!=null?i.type:void 0)==="homework",N=Q("openstax-question",$,{"has-correct-answer":u&&!(z&&C),"has-incorrect-answer":S}),_=()=>{const{question:w,displaySolution:A}=a,{collaborator_solutions:I}=w;return A&&I.find(j=>j.content_html!==void 0)};return m!=null&&(o=r("div",{className:"exercise-uid",children:m})),_()&&(s=p("div",{className:"detailed-solution",children:[r("div",{className:"header",children:"Detailed solution:"}),r(f,{className:"solution",block:!0,html:v.map(w=>w.content_html).join("")})]})),p(H,{className:N,"data-question-number":b,"data-test-id":"question",children:[r(h,{type:"context",html:x,hidden:d}),r(h,{type:"stimulus",html:q,hidden:d}),r(h,{type:"stem",html:k,hidden:d,questionNumber:b}),a.children,r(F,{...a,onChangeAnswer:a.onChange,hasCorrectAnswer:u}),s,a.displayFormats?r(B,{formats:y}):void 0,o]})},h=a=>{const{html:o="",type:s,hidden:l,questionNumber:c}=a;return l===!0||!(o.length>0)?null:r(f,{html:o,"data-question-number":c,className:`question-${s}`,block:!0})},B=({formats:a=[]})=>p("div",{className:"formats-listing",children:[r("div",{className:"header",children:"Formats:"}),a.map((o,s)=>r("span",{children:o},s))]});export{E as Q,h as a};
