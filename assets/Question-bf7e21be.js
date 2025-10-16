import{s as x,R as F,a as d,j as e}from"./index-03c561ee.js";import{m as t,c as r,l as o,t as L}from"./theme-10b1c0db.js";import{A as R}from"./AnswersTable-6750855a.js";import{c as B}from"./index-40811dba.js";import{C as v}from"./Feedback-a60e94dd.js";const D=x.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  .step-card-body,
  .right-side-slot {
    flex: 1 1 auto;
    min-width: 0;
  }
`,P=x.div`
&.step-card-body {
  ${t.stepCardPadding()};
}

&.openstax-question {
  border-top: 1px solid ${r.palette.pale};
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
    color: ${r.palette.neutral};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${r.palette.neutralLightBlue};
      padding-left: 5px;
      cursor: pointer;
      font-style: normal;
    }
  }

  .multiple-choice-prompt {
    font-weight: 600;
  }

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &:not(.disabled){
        .answer-label:focus{
          background-color: ${r.palette.neutralLightest};
        }
      }
      &.answer-selected {
        font-weight: bold;
      }
      ${t.answer()};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: ${o.answer.horizontalSpacing};
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
      align-items: center;
      width: 100%;
      padding: ${o.answer.verticalSpacing} 0 0 0;
      margin: 0;
      transition: color ${L.answer};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${t.answerHover()}
      }
    }

    .answer-input-box {
      ${t.visuallyHidden()}
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${t.answerChecked()};
          }
        }

        &:focus-visible {
          + .answer-label .answer-letter-wrapper::before {
            outline-style: solid;
            outline-width: 2px;
            outline-offset: 2px;
            outline-color: ${r.answer.checked};
          }
        }
      }

      .answer-selected {
        .answer-label, .answer-label:hover {
          ${t.answerChecked()};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-selected {
        &:not(.answer-correct) {
          .answer-label {
            ${t.answerIncorrect(!0)};
          }
        }

        &.answer-correct {
          .answer-label {
            ${t.answerCorrect(!0)};
          }
        }
      }

      .answer-correct:not(.answer-selected) {
        .answer-label {
          ${t.answerCorrect(!1)}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect {
        .answer-label, .answer-label:hover {
          ${t.answerIncorrect()}
        }
        &.answer-selected.answer-incorrect {
          ${t.answerIncorrect(!0)}
        }
      }
    }

    .question-feedback {
      ${t.popover()}
      max-width: ${o.answer.feedback.popover.maxWidth};
      .question-feedback-content {
        padding: ${o.answer.feedback.popover.verticalSpacing} ${o.answer.feedback.popover.horizontalSpacing};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 6px 8px;
  }
}
`,K=F.forwardRef((n,a)=>{let s,i;const{question:l,correct_answer_id:y,incorrectAnswerId:$,exercise_uid:h,className:k,questionNumber:p,context:q,task:c,hidePreambles:m,rightSideSlot:b}=n,{stem_html:N,collaborator_solutions:C=[],formats:_,stimulus_html:S}=l,f=!!y,I=!!$,j=c!=null?c.is_deleted:void 0,z=(c!=null?c.type:void 0)==="homework",A=B("openstax-question",k,{"has-correct-answer":f&&!(j&&z),"has-incorrect-answer":I}),H=()=>{const{displaySolution:w}=n,{collaborator_solutions:g=[]}=l;return w&&g&&g.find(Q=>Q.content_html!==void 0)};return h!=null&&(s=e("div",{className:"exercise-uid",children:h})),H()&&(i=d("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(v,{className:"solution",block:!0,html:C.map(w=>w.content_html).join("")})]})),e(P,{ref:a,className:A,"data-question-number":p,"data-test-id":"question",children:d(D,{children:[d("div",{children:[e(u,{type:"context",html:q,hidden:m}),e(u,{type:"stimulus",html:S,hidden:m}),e(u,{type:"stem",html:N,hidden:m,questionNumber:p}),n.children,e(R,{...n,onChangeAnswer:n.onChange,hasCorrectAnswer:f}),i,n.displayFormats?e(T,{formats:_}):void 0,s]}),b&&e("div",{className:"right-side-slot",children:b})]})})}),u=n=>{const{html:a="",type:s,hidden:i,questionNumber:l}=n;return i===!0||!(a.length>0)?null:e(v,{html:a,"data-question-number":l,className:`question-${s}`,block:!0})},T=({formats:n=[]})=>d("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),n.map((a,s)=>e("span",{children:a},s))]});export{u as Q,K as a};
