import{A as g}from"./Answer.c559d9af.js";import{F as C}from"./Feedback.85e582d8.js";import{j as i}from"./index.e2799ff8.js";const E="student";var c="/home/runner/work/assessment-components/assessment-components/src/components/AnswersTable.tsx";const B=a=>{let b=0;const{question:n,hideAnswers:h,type:A=E,answered_count:_,choicesEnabled:N,correct_answer_id:d,incorrectAnswerId:l,answer_id:x,feedback_html:m,correct_answer_feedback_html:u,show_all_feedback:k=!1,hasCorrectAnswer:v,onChangeAnswer:y,onKeyPress:I,answerIdOrder:w,instructions:q}=a;if(h)return null;const{id:j}=n,t=[],O=[x],P=e=>{const{answers:s}=n;return s.slice().sort((r,o)=>e.indexOf(r.id)-e.indexOf(o.id))},f={qid:j||`auto-${b++}`,correctAnswerId:d,incorrectAnswerId:l,hasCorrectAnswer:v,chosenAnswer:O,onChangeAnswer:y,type:A,answered_count:_,disabled:!N,show_all_feedback:k,onKeyPress:I},p=(w?P(w):n.answers).map((e,s)=>{const r={answer:{...e,question_id:typeof n.id=="string"?parseInt(n.id,10):n.id},iter:s,key:`${f.qid}-option-${s}`},o=Object.assign({},r,f);return e.id===l&&m?t.push({index:s,html:m}):e.id===d&&u&&t.push({index:s,html:u}),i(g,{...o},void 0,!1,{fileName:c,lineNumber:83,columnNumber:7},void 0)});return t.forEach((e,s)=>{const r=e.index+s+1;p.splice(r,0,i(C,{contentRenderer:a.contentRenderer,children:e.html},r,!1,{fileName:c,lineNumber:90,columnNumber:7},void 0))}),i("div",{className:"answers-table",children:[q,p]},void 0,!0,{fileName:c,lineNumber:97,columnNumber:5},void 0)};export{B as A};
