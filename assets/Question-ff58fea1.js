import{s as L,R as Q,a as u,j as n}from"./index-56238e30.js";import{m as e,c as o,l as t,t as F}from"./theme-5eecb1a5.js";import{A as H}from"./AnswersTable-a755e213.js";import{c as R}from"./index-c1259cc6.js";import{C as g}from"./Feedback-4989b699.js";const B=L.div`
&.step-card-body {
  ${e.stepCardPadding()};
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

    .answer-letter {
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
      transition: color ${F.answer};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${e.answerHover()}
      }
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        display: none;

        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${e.answerChecked()};
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
`,G=Q.forwardRef((a,r)=>{let s,i;const{question:l,correct_answer_id:x,incorrectAnswerId:$,exercise_uid:h,className:v,questionNumber:p,context:y,task:c,hidePreambles:d}=a,{stem_html:k,collaborator_solutions:q=[],formats:S,stimulus_html:N}=l,b=!!x,_=!!$,z=c!=null?c.is_deleted:void 0,C=(c!=null?c.type:void 0)==="homework",A=R("openstax-question",v,{"has-correct-answer":b&&!(z&&C),"has-incorrect-answer":_}),I=()=>{const{displaySolution:m}=a,{collaborator_solutions:f=[]}=l;return m&&f&&f.find(j=>j.content_html!==void 0)};return h!=null&&(s=n("div",{className:"exercise-uid",children:h})),I()&&(i=u("div",{className:"detailed-solution",children:[n("div",{className:"header",children:"Detailed solution:"}),n(g,{className:"solution",block:!0,html:q.map(m=>m.content_html).join("")})]})),u(B,{ref:r,className:A,"data-question-number":p,"data-test-id":"question",children:[n(w,{type:"context",html:y,hidden:d}),n(w,{type:"stimulus",html:N,hidden:d}),n(w,{type:"stem",html:k,hidden:d,questionNumber:p}),a.children,n(H,{...a,onChangeAnswer:a.onChange,hasCorrectAnswer:b}),i,a.displayFormats?n(D,{formats:S}):void 0,s]})}),w=a=>{const{html:r="",type:s,hidden:i,questionNumber:l}=a;return i===!0||!(r.length>0)?null:n(g,{html:r,"data-question-number":l,className:`question-${s}`,block:!0})},D=({formats:a=[]})=>u("div",{className:"formats-listing",children:[n("div",{className:"header",children:"Formats:"}),a.map((r,s)=>n("span",{children:r},s))]});export{w as Q,G as a};
