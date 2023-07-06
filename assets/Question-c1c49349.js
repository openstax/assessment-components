import{s as L,R as Q,a as h,j as n}from"./index-0d12179a.js";import{m as a,c as o,l as e,t as F}from"./theme-0bf4f63c.js";import{A as H}from"./AnswersTable-0e9b9326.js";import{c as R}from"./index-cefa4567.js";import{C as f}from"./Feedback-078fb78f.js";const B=L.div`
&.step-card-body {
  ${a.stepCardPadding()};
}

&.openstax-question {
  border-top: 1px solid ${o.palette.pale};
  font-size: 1.8rem;

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
    font-size: 1.6rem;
    line-height: 2rem;
  }

  .instructions {
    font-size: 1.4rem;
    font-style: italic;
    margin-top: 10px;
    color: ${o.palette.neutral};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${o.palette.neutralLightBlue};
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
    border-left: ${e.answer.horizontalSpacing} solid ${o.palette.neutralLighter};
    font-style: italic;
  }

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &:not(.disabled){
        .answer-label:focus{
          background-color: ${o.palette.neutralLightest};
        }
      }
      ${a.answer()};
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

    .answers-answer.answer-correct .answer-answer {
      align-items: flex-start;
      margin-top: calc((${e.answer.bubbleSize} / 2) - 1rem);
    }

    .answer-letter {
      text-align: center;
      padding: 0;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
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
        ${a.answerHover()}
      }
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        display: none;

        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${a.answerChecked()};
          }
        }
      }

      .answer-checked{
        .answer-label {
          ${a.answerChecked()};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-checked {
        &:not(.answer-correct) {
          .answer-label {
            ${a.answerIncorrect()};
          }
        }

        &.answer-correct {
          .answer-label {
            ${a.answerCorrect()};
          }
        }
      }

      .answer-correct:not(.answer-checked) {
        .answer-label {
          ${a.answerCorrectAnswer()}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect, .answer-checked.answer-incorrect {
        .answer-label {
          ${a.answerIncorrect()}
        }
      }
    }

    .question-feedback {
      ${a.popover()}
      max-width: ${e.answer.feedback.popover.maxWidth};
      .question-feedback-content {
        padding: ${e.answer.feedback.popover.verticalSpacing} ${e.answer.feedback.popover.horizontalSpacing};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 6px 8px;
  }
}
`,G=Q.forwardRef((t,r)=>{let s,i;const{question:l,correct_answer_id:x,incorrectAnswerId:$,exercise_uid:p,className:k,questionNumber:u,context:v,task:c,hidePreambles:d}=t,{stem_html:y,collaborator_solutions:q=[],formats:S,stimulus_html:z}=l,g=!!x,N=!!$,_=c!=null?c.is_deleted:void 0,C=(c!=null?c.type:void 0)==="homework",A=R("openstax-question",k,{"has-correct-answer":g&&!(_&&C),"has-incorrect-answer":N}),I=()=>{const{displaySolution:m}=t,{collaborator_solutions:b=[]}=l;return m&&b&&b.find(j=>j.content_html!==void 0)};return p!=null&&(s=n("div",{className:"exercise-uid",children:p})),I()&&(i=h("div",{className:"detailed-solution",children:[n("div",{className:"header",children:"Detailed solution:"}),n(f,{className:"solution",block:!0,html:q.map(m=>m.content_html).join("")})]})),h(B,{ref:r,className:A,"data-question-number":u,"data-test-id":"question",children:[n(w,{type:"context",html:v,hidden:d}),n(w,{type:"stimulus",html:z,hidden:d}),n(w,{type:"stem",html:y,hidden:d,questionNumber:u}),t.children,n(H,{...t,onChangeAnswer:t.onChange,hasCorrectAnswer:g}),i,t.displayFormats?n(D,{formats:S}):void 0,s]})}),w=t=>{const{html:r="",type:s,hidden:i,questionNumber:l}=t;return i===!0||!(r.length>0)?null:n(f,{html:r,"data-question-number":l,className:`question-${s}`,block:!0})},D=({formats:t=[]})=>h("div",{className:"formats-listing",children:[n("div",{className:"header",children:"Formats:"}),t.map((r,s)=>n("span",{children:r},s))]});export{w as Q,G as a};
