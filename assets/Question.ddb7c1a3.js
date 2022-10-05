import{s as Q,R as F,c as L,j as e}from"./index.d152e56e.js";import{m as t,c as i,l as a,t as D}from"./theme.b7ce5b34.js";import{A as H}from"./AnswersTable.334f5937.js";import{C as N}from"./Feedback.4dc8bbc2.js";var n="/home/runner/work/assessment-components/assessment-components/src/components/Question.tsx";const R=Q.div`
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
    padding: ${a.answer.horizontalSpacing} ${a.answer.horizontalBuffer};
    margin: ${a.answer.verticalSpacing} 0 ${a.answer.horizontalSpacing} ${a.answer.verticalSpacing};
    border-left: ${a.answer.horizontalSpacing} solid ${i.palette.neutralLighter};
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
      margin-left: ${a.answer.horizontalSpacing};
      * {
        margin: 0;
      }
    }

    .answer-letter {
      text-align: center;
      padding: 0;
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }


    .answer-label {
      font-weight: normal;
      width: 100%;
      padding: ${a.answer.verticalSpacing} 0 0 0;
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
      max-width: ${a.answer.feedback.popover.maxWidth};
      .question-feedback-content {
        padding: ${a.answer.feedback.popover.verticalSpacing} ${a.answer.feedback.popover.horizontalSpacing};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 6px 8px;
  }
}
`,V=F.forwardRef((r,o)=>{let s,l;const{question:c,correct_answer_id:v,incorrectAnswerId:g,exercise_uid:b,className:x,questionNumber:h,context:$,task:m,hidePreambles:d}=r,{stem_html:k,collaborator_solutions:y=[],formats:q,stimulus_html:S}=c,p=!!v,_=!!g,z=m!=null?m.is_deleted:void 0,C=(m!=null?m.type:void 0)==="homework",A=L("openstax-question",x,{"has-correct-answer":p&&!(z&&C),"has-incorrect-answer":_}),I=()=>{const{displaySolution:u}=r,{collaborator_solutions:f=[]}=c;return u&&f&&f.find(j=>j.content_html!==void 0)};return b!=null&&(s=e("div",{className:"exercise-uid",children:b},void 0,!1,{fileName:n,lineNumber:254,columnNumber:7},void 0)),I()&&(l=e("div",{className:"detailed-solution",children:[e("div",{className:"header",children:"Detailed solution:"},void 0,!1,{fileName:n,lineNumber:263,columnNumber:9},void 0),e(N,{className:"solution",block:!0,html:y.map(u=>u.content_html).join("")},void 0,!1,{fileName:n,lineNumber:266,columnNumber:9},void 0)]},void 0,!0,{fileName:n,lineNumber:262,columnNumber:7},void 0)),e(R,{ref:o,className:A,"data-question-number":h,"data-test-id":"question",children:[e(w,{type:"context",html:$,hidden:d},void 0,!1,{fileName:n,lineNumber:275,columnNumber:7},void 0),e(w,{type:"stimulus",html:S,hidden:d},void 0,!1,{fileName:n,lineNumber:276,columnNumber:7},void 0),e(w,{type:"stem",html:k,hidden:d,questionNumber:h},void 0,!1,{fileName:n,lineNumber:277,columnNumber:7},void 0),r.children,e(H,{...r,onChangeAnswer:r.onChange,hasCorrectAnswer:p},void 0,!1,{fileName:n,lineNumber:280,columnNumber:7},void 0),l,r.displayFormats?e(B,{formats:q},void 0,!1,{fileName:n,lineNumber:286,columnNumber:31},void 0):void 0,s]},void 0,!0,{fileName:n,lineNumber:274,columnNumber:5},void 0)}),w=r=>{const{html:o="",type:s,hidden:l,questionNumber:c}=r;return l===!0||!(o.length>0)?null:e(N,{html:o,"data-question-number":c,className:`question-${s}`,block:!0},void 0,!1,{fileName:n,lineNumber:304,columnNumber:5},void 0)},B=({formats:r=[]})=>e("div",{className:"formats-listing",children:[e("div",{className:"header",children:"Formats:"},void 0,!1,{fileName:n,lineNumber:316,columnNumber:7},void 0),r.map((o,s)=>e("span",{children:o},s,!1,{fileName:n,lineNumber:317,columnNumber:35},void 0))]},void 0,!0,{fileName:n,lineNumber:315,columnNumber:5},void 0);export{V as Q,w as a};
