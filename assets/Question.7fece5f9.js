import{s as Q,R as F,c as L,j as e}from"./index.abd29396.js";import{m as t,c as i,l as r,t as D}from"./theme.55931c71.js";import{A as H}from"./AnswersTable.ad500dc0.js";import{C as N}from"./Feedback.3ed4cf92.js";var n="/home/runner/work/assessment-components/assessment-components/src/components/Question.tsx";const R=Q.div`
&.step-card-body {
  ${t.stepCardPadding()};
}

&.openstax-question {
  border-top: 1px solid ${i.palette.pale};
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
    color: ${i.palette.neutral};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${i.palette.neutralLightBlue};
      padding-left: 5px;
      cursor: pointer;
      font-style: normal;
    }
  }

  .multiple-choice-prompt {
    font-weight: 600;
  }

  .free-response {
    padding: ${r.answer.horizontalSpacing} ${r.answer.horizontalBuffer};
    margin: ${r.answer.verticalSpacing} 0 ${r.answer.horizontalSpacing} ${r.answer.verticalSpacing};
    border-left: ${r.answer.horizontalSpacing} solid ${i.palette.neutralLighter};
    font-style: italic;
  }

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &:not(.disabled){
        .answer-label:focus{
          background-color: ${i.palette.neutralLightest};
        }
      }
      ${t.answer()};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      align-items: center;
      margin-left: ${r.answer.horizontalSpacing};
      * {
        margin: 0;
      }
    }

    .answers-answer.answer-correct .answer-answer {
      align-items: flex-start;
      margin-top: calc((${r.answer.bubbleSize} / 2) - 1rem);
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
      padding: ${r.answer.verticalSpacing} 0 0 0;
      margin: 0;

      transition: color ${D.answer};
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
      ${t.popover()}
      max-width: ${r.answer.feedback.popover.maxWidth};
      .question-feedback-content {
        padding: ${r.answer.feedback.popover.verticalSpacing} ${r.answer.feedback.popover.horizontalSpacing};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 6px 8px;
  }
}
`,V=F.forwardRef((a,s)=>{let o,l;const{question:c,correct_answer_id:v,incorrectAnswerId:g,exercise_uid:b,className:x,questionNumber:h,context:$,task:m,hidePreambles:d}=a,{stem_html:k,collaborator_solutions:y=[],formats:q,stimulus_html:S}=c,p=!!v,_=!!g,z=m!=null?m.is_deleted:void 0,C=(m!=null?m.type:void 0)==="homework",A=L("openstax-question",x,{"has-correct-answer":p&&!(z&&C),"has-incorrect-answer":_}),I=()=>{const{displaySolution:u}=a,{collaborator_solutions:f=[]}=c;return u&&f&&f.find(j=>j.content_html!==void 0)};return b!=null&&(o=e("div",{className:"exercise-uid",children:b},void 0,!1,{fileName:n,lineNumber:258,columnNumber:7},void 0)),I()&&(l=e("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"},void 0,!1,{fileName:n,lineNumber:267,columnNumber:9},void 0),e(N,{className:"solution",block:!0,html:y.map(u=>u.content_html).join("")},void 0,!1,{fileName:n,lineNumber:270,columnNumber:9},void 0)]},void 0,!0,{fileName:n,lineNumber:266,columnNumber:7},void 0)),e(R,{ref:s,className:A,"data-question-number":h,"data-test-id":"question",children:[e(w,{type:"context",html:$,hidden:d},void 0,!1,{fileName:n,lineNumber:279,columnNumber:7},void 0),e(w,{type:"stimulus",html:S,hidden:d},void 0,!1,{fileName:n,lineNumber:280,columnNumber:7},void 0),e(w,{type:"stem",html:k,hidden:d,questionNumber:h},void 0,!1,{fileName:n,lineNumber:281,columnNumber:7},void 0),a.children,e(H,{...a,onChangeAnswer:a.onChange,hasCorrectAnswer:p},void 0,!1,{fileName:n,lineNumber:284,columnNumber:7},void 0),l,a.displayFormats?e(B,{formats:q},void 0,!1,{fileName:n,lineNumber:290,columnNumber:31},void 0):void 0,o]},void 0,!0,{fileName:n,lineNumber:278,columnNumber:5},void 0)}),w=a=>{const{html:s="",type:o,hidden:l,questionNumber:c}=a;return l===!0||!(s.length>0)?null:e(N,{html:s,"data-question-number":c,className:`question-${o}`,block:!0},void 0,!1,{fileName:n,lineNumber:308,columnNumber:5},void 0)},B=({formats:a=[]})=>e("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"},void 0,!1,{fileName:n,lineNumber:320,columnNumber:7},void 0),a.map((s,o)=>e("span",{children:s},o,!1,{fileName:n,lineNumber:321,columnNumber:35},void 0))]},void 0,!0,{fileName:n,lineNumber:319,columnNumber:5},void 0);export{V as Q,w as a};
