import{j as A,a as E}from"./index-6aae8bc2.js";import{A as F}from"./Answer-3bf89cae.js";import{F as R}from"./Feedback-c17f6545.js";const T="student",N=c=>{let _=0;const{question:n,hideAnswers:k,type:x=T,answered_count:I,choicesEnabled:q,correct_answer_id:i,incorrectAnswerId:l,answer_id:y,feedback_html:w,correct_answer_feedback_html:f,show_all_feedback:b=!1,tableFeedbackEnabled:h,hasCorrectAnswer:$,onChangeAnswer:g,onKeyPress:j,answerIdOrder:u,instructions:O}=c;if(k)return null;const{id:P}=n,p=[],C=e=>{const{answers:s}=n;return s.slice().sort((r,a)=>e.indexOf(r.id)-e.indexOf(a.id))},d={qid:P||`auto-${_++}`,answerId:y,correctAnswerId:i,incorrectAnswerId:l,hasCorrectAnswer:$,onChangeAnswer:g,type:x,answered_count:I,disabled:!q,show_all_feedback:b,tableFeedbackEnabled:h,onKeyPress:j},m=(u?C(u):n.answers).map((e,s)=>{const r={answer:{...e,question_id:typeof n.id=="string"?parseInt(n.id,10):n.id},iter:s,key:`${d.qid}-option-${s}`},a=Object.assign({},r,d);let t,o;return b&&e.feedback_html&&h?t=e.feedback_html:e.id===l&&w?t=w:e.id===i&&f&&(t=f),t&&(o=`feedback-${d.qid}-${s}`,p.push({index:s,html:t,id:o})),A(F,{feedbackId:o,...a})});return p.forEach((e,s)=>{const r=e.index+s+1;m.splice(r,0,A(R,{id:e.id,contentRenderer:c.contentRenderer,children:e.html},r))}),E("div",{role:"radiogroup","aria-label":"Answer choices",className:"answers-table",children:[O,m]})};export{N as A};
