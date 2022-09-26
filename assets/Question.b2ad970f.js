import{s as j,c as Q,j as r}from"./index.6c34b39e.js";import{m as n,c as t,l as e,t as F}from"./theme.3d16df34.js";import{A as L}from"./AnswersTable.92c470c5.js";import{C as g}from"./Feedback.fb9def5b.js";var o="/home/runner/work/assessment-components/assessment-components/src/components/Question.tsx";const W=j.div`
&.step-card-body {
  ${n.stepCardPadding()};
}

&.openstax-question {
  border-top: 1px solid ${t.palette.pale};
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
      font-size: 1.4rem;
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
      max-width: ${e.answer.feedback.popover.maxWidth};
      margin: calc(${e.answer.feedback.arrow.height} - 14px) 0 ${e.answer.horizontalSpacing} 8px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      color: ${t.palette.neutralThin};
      font-size: 1.4rem;

      .arrow {
        position: absolute;
        display: block;
        width: ${e.answer.feedback.arrow.width};
        height: ${e.answer.feedback.arrow.height};
        margin-left: 3px;
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
    padding: 6px 8px;
  }
}
`,E=a=>{let i,s;const{question:l,correct_answer_id:d,incorrectAnswerId:v,exercise_uid:w,className:N,questionNumber:p,context:x,task:c,hidePreambles:m}=a,{stem_html:$,collaborator_solutions:k=[],formats:y,stimulus_html:q}=l,h=!!d,z=!!v,S=c!=null?c.is_deleted:void 0,C=(c!=null?c.type:void 0)==="homework",_=Q("openstax-question",N,{"has-correct-answer":h&&!(S&&C),"has-incorrect-answer":z}),A=()=>{const{displaySolution:u}=a,{collaborator_solutions:f=[]}=l;return u&&f&&f.find(I=>I.content_html!==void 0)};return w!=null&&(i=r("div",{className:"exercise-uid",children:w},void 0,!1,{fileName:o,lineNumber:292,columnNumber:7},void 0)),A()&&(s=r("div",{className:"detailed-solution",children:[r("div",{className:"header",children:"Detailed solution:"},void 0,!1,{fileName:o,lineNumber:301,columnNumber:9},void 0),r(g,{className:"solution",block:!0,html:k.map(u=>u.content_html).join("")},void 0,!1,{fileName:o,lineNumber:304,columnNumber:9},void 0)]},void 0,!0,{fileName:o,lineNumber:300,columnNumber:7},void 0)),r(W,{className:_,"data-question-number":p,"data-test-id":"question",children:[r(b,{type:"context",html:x,hidden:m},void 0,!1,{fileName:o,lineNumber:313,columnNumber:7},void 0),r(b,{type:"stimulus",html:q,hidden:m},void 0,!1,{fileName:o,lineNumber:314,columnNumber:7},void 0),r(b,{type:"stem",html:$,hidden:m,questionNumber:p},void 0,!1,{fileName:o,lineNumber:315,columnNumber:7},void 0),a.children,r(L,{...a,onChangeAnswer:a.onChange,hasCorrectAnswer:h},void 0,!1,{fileName:o,lineNumber:318,columnNumber:7},void 0),s,a.displayFormats?r(D,{formats:y},void 0,!1,{fileName:o,lineNumber:324,columnNumber:31},void 0):void 0,i]},void 0,!0,{fileName:o,lineNumber:312,columnNumber:5},void 0)},b=a=>{const{html:i="",type:s,hidden:l,questionNumber:d}=a;return l===!0||!(i.length>0)?null:r(g,{html:i,"data-question-number":d,className:`question-${s}`,block:!0},void 0,!1,{fileName:o,lineNumber:342,columnNumber:5},void 0)},D=({formats:a=[]})=>r("div",{className:"formats-listing",children:[r("div",{className:"header",children:"Formats:"},void 0,!1,{fileName:o,lineNumber:354,columnNumber:7},void 0),a.map((i,s)=>r("span",{children:i},s,!1,{fileName:o,lineNumber:355,columnNumber:35},void 0))]},void 0,!0,{fileName:o,lineNumber:353,columnNumber:5},void 0);export{E as Q,b as a};
