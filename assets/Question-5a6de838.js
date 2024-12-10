import{s as H,R as L,a as u,j as n}from"./index-6aae8bc2.js";import{m as e,c as o,l as t,t as Q}from"./theme-500b2181.js";import{A as F}from"./AnswersTable-7e7c3267.js";import{c as R}from"./index-b94bf76d.js";import{C as g}from"./Feedback-c17f6545.js";const B=H.div`
&.step-card-body {
  ${e.stepCardPadding()};
}

&.openstax-question {
  border-top: 1px solid ${o.palette.pale};
  font-size: calc(1.8rem * var(--content-text-scale));

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
    font-size: calc(1.6rem * var(--content-text-scale));
    line-height: calc(2rem * var(--content-text-scale));
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
    padding: ${t.answer.horizontalSpacing} ${t.answer.horizontalBuffer};
    margin: ${t.answer.verticalSpacing} 0 ${t.answer.horizontalSpacing} ${t.answer.verticalSpacing};
    border-left: ${t.answer.horizontalSpacing} solid ${o.palette.neutralLighter};
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
      &.answer-selected {
        font-weight: bold;
      }
      ${e.answer()};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: ${t.answer.horizontalSpacing};
      * {
        margin: 0;
      }
    }

    .answer-letter-wrapper::before {
      content: attr(data-answer-choice);
      text-align: center;
      padding: 0;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .answer-label {
      width: 100%;
      padding: ${t.answer.verticalSpacing} 0 0 0;
      margin: 0;
      transition: color ${Q.answer};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${e.answerHover()}
      }
    }

    .answer-input-box {
      ${e.visuallyHidden()}
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${e.answerChecked()};
          }
        }

        &:focus-visible {
          + .answer-label .answer-letter-wrapper::before {
            outline-style: solid;
            outline-width: 2px;
            outline-offset: 2px;
            outline-color: ${o.answer.checked};
          }
        }
      }

      .answer-selected {
        .answer-label, .answer-label:hover {
          ${e.answerChecked()};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-selected {
        &:not(.answer-correct) {
          .answer-label {
            ${e.answerIncorrect()};
          }
        }

        &.answer-correct {
          .answer-label {
            ${e.answerCorrect(!0)};
          }
        }
      }

      .answer-correct:not(.answer-selected) {
        .answer-label {
          ${e.answerCorrectAnswer()}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect {
        .answer-label, .answer-label:hover {
          ${e.answerIncorrect()}
        }
        &.answer-selected.answer-incorrect {
          ${e.answerIncorrect(!0)}
        }
      }
    }

    .question-feedback {
      ${e.popover()}
      max-width: ${t.answer.feedback.popover.maxWidth};
      .question-feedback-content {
        padding: ${t.answer.feedback.popover.verticalSpacing} ${t.answer.feedback.popover.horizontalSpacing};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 6px 8px;
  }
}
`,G=L.forwardRef((a,r)=>{let s,i;const{question:l,correct_answer_id:x,incorrectAnswerId:$,exercise_uid:p,className:v,questionNumber:h,context:y,task:c,hidePreambles:d}=a,{stem_html:k,collaborator_solutions:q=[],formats:S,stimulus_html:N}=l,b=!!x,_=!!$,z=c!=null?c.is_deleted:void 0,C=(c!=null?c.type:void 0)==="homework",A=R("openstax-question",v,{"has-correct-answer":b&&!(z&&C),"has-incorrect-answer":_}),I=()=>{const{displaySolution:w}=a,{collaborator_solutions:f=[]}=l;return w&&f&&f.find(j=>j.content_html!==void 0)};return p!=null&&(s=n("div",{className:"exercise-uid",children:p})),I()&&(i=u("div",{className:"detailed-solution",children:[n("div",{className:"header",children:"Detailed solution:"}),n(g,{className:"solution",block:!0,html:q.map(w=>w.content_html).join("")})]})),u(B,{ref:r,className:A,"data-question-number":h,"data-test-id":"question",children:[n(m,{type:"context",html:y,hidden:d}),n(m,{type:"stimulus",html:N,hidden:d}),n(m,{type:"stem",html:k,hidden:d,questionNumber:h}),a.children,n(F,{...a,onChangeAnswer:a.onChange,hasCorrectAnswer:b}),i,a.displayFormats?n(D,{formats:S}):void 0,s]})}),m=a=>{const{html:r="",type:s,hidden:i,questionNumber:l}=a;return i===!0||!(r.length>0)?null:n(g,{html:r,"data-question-number":l,className:`question-${s}`,block:!0})},D=({formats:a=[]})=>u("div",{className:"formats-listing",children:[n("div",{className:"header",children:"Formats:"}),a.map((r,s)=>n("span",{children:r},s))]});export{m as Q,G as a};
