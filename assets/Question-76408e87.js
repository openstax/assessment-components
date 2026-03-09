import{s as x,R as Q,a as u,j as e}from"./index-aa5cf4ff.js";import{m as t,c as s,l as o,t as F}from"./theme-c95df568.js";import{A as L}from"./AnswersTable-1be6dd15.js";import{c as R}from"./index-c69feb82.js";import{C as g}from"./Feedback-f9737414.js";const B=x.div`
  width: 100%;
`,D=x.div`
&.step-card-body {
  ${t.stepCardPadding()};
}

&.openstax-question {
  border-top: 1px solid ${s.palette.pale};
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
    color: ${s.palette.neutral};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${s.palette.neutralLightBlue};
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
          background-color: ${s.palette.neutralLightest};
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
      transition: color ${F.answer};
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
            outline-color: ${s.answer.checked};
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
`,J=Q.forwardRef((n,a)=>{let r,i;const{question:l,correct_answer_id:v,incorrectAnswerId:y,exercise_uid:h,className:$,questionNumber:p,context:k,task:c,hidePreambles:d}=n,{stem_html:q,collaborator_solutions:C=[],formats:N,stimulus_html:_}=l,b=!!v,S=!!y,I=c!=null?c.is_deleted:void 0,j=(c!=null?c.type:void 0)==="homework",z=R("openstax-question",$,{"has-correct-answer":b&&!(I&&j),"has-incorrect-answer":S}),A=()=>{const{displaySolution:m}=n,{collaborator_solutions:f=[]}=l;return m&&f&&f.find(H=>H.content_html!==void 0)};return h!=null&&(r=e("div",{className:"exercise-uid",children:h})),A()&&(i=u("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"}),e(g,{className:"solution",block:!0,html:C.map(m=>m.content_html).join("")})]})),e(D,{ref:a,className:z,"data-question-number":p,"data-test-id":"question",children:e(B,{children:u("div",{children:[e(w,{type:"context",html:k,hidden:d}),e(w,{type:"stimulus",html:_,hidden:d}),e(w,{type:"stem",html:q,hidden:d,questionNumber:p}),n.children,e(L,{...n,onChangeAnswer:n.onChange,hasCorrectAnswer:b}),i,n.displayFormats?e(P,{formats:N}):void 0,r]})})})}),w=n=>{const{html:a="",type:r,hidden:i,questionNumber:l}=n;return i===!0||!(a.length>0)?null:e(g,{html:a,"data-question-number":l,className:`question-${r}`,block:!0})},P=({formats:n=[]})=>u("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"}),n.map((a,r)=>e("span",{children:a},r))]});export{J as Q,w as a};
