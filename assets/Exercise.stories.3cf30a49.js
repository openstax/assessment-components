import{r as o,j as s}from"./index.59c95664.js";import{E as r}from"./Exercise.18f666af.js";import"./Feedback.63bc45ca.js";import"./Card.e3ed836a.js";import"./theme.a2f36e76.js";import"./ExerciseQuestion.7be95ba1.js";import"./Button.769d01bd.js";import"./Question.350d90c1.js";import"./AnswersTable.4e58e269.js";import"./Answer.04625252.js";import"./StepCardFooter.3c5a97a4.js";var n="/home/runner/work/assessment-components/assessment-components/src/components/Exercise.stories.tsx";const c={exercise:{uid:"1@1",uuid:"e4e27897-4abc-40d3-8565-5def31795edc",group_uuid:"20e82bf6-232e-40c8-ba68-2d22c6498f69",number:1,version:1,published_at:"2022-09-06T20:32:21.981Z",context:"Context",stimulus_html:"<b>Stimulus HTML</b>",tags:[],authors:[{user_id:1,name:"OpenStax"}],copyright_holders:[{user_id:1,name:"OpenStax"}],derived_from:[],is_vocab:!1,solutions_are_public:!1,versions:[1],questions:[{id:"1",collaborator_solutions:[],formats:["true-false"],stimulus_html:"",stem_html:"",is_answer_order_important:!1,answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}]}]},questionNumber:1,hasMultipleAttempts:!1,onAnswerChange:()=>null,onAnswerSave:()=>null,onNextStep:()=>null,canAnswer:!1,needsSaved:!1,apiIsPending:!1,step:{uid:"1234@5",id:1,available_points:"1.0",is_completed:!1,answer_id_order:["1","2"],answer_id:"1",free_response:"",feedback_html:"",correct_answer_id:"",correct_answer_feedback_html:"",is_feedback_available:!0,attempts_remaining:0,attempt_number:1,incorrectAnswerId:0},numberOfQuestions:1},t={exercise:{uid:"1@1",uuid:"e4e27897-4abc-40d3-8565-5def31795edc",group_uuid:"20e82bf6-232e-40c8-ba68-2d22c6498f69",number:1,version:1,published_at:"2022-09-06T20:32:21.981Z",context:"Context",stimulus_html:"<b>Stimulus HTML</b>",tags:[],authors:[{user_id:1,name:"OpenStax"}],copyright_holders:[{user_id:1,name:"OpenStax"}],derived_from:[],is_vocab:!1,solutions_are_public:!1,versions:[1],questions:[{id:"1",collaborator_solutions:[],formats:["true-false"],stimulus_html:"",stem_html:"",is_answer_order_important:!1,answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}]}]},questionNumber:1,numberOfQuestions:1,hasMultipleAttempts:!1,onAnswerChange:()=>null,onAnswerSave:()=>null,onNextStep:()=>null,apiIsPending:!1,step:{id:1,uid:"1234@5",available_points:"1.0"},questionStates:{1:{available_points:"1.0",is_completed:!1,answer_id_order:["1","2"],answer_id:"1",free_response:"",feedback_html:"",correct_answer_id:"",correct_answer_feedback_html:"",attempts_remaining:0,attempt_number:0,incorrectAnswerId:0,canAnswer:!0,needsSaved:!0}}},A=()=>{const[e,a]=o.exports.useState(0),[i,d]=o.exports.useState(!1);return t.questionStates[1].answer_id=e,t.apiIsPending=i,s(r,{...t,onAnswerChange:l=>a(l.id),onAnswerSave:()=>d(!0)},void 0,!1,{fileName:n,lineNumber:139,columnNumber:5},void 0)},g=()=>s(r,{...c},void 0,!1,{fileName:n,lineNumber:145,columnNumber:41},void 0),N=()=>{const e={...t,questionStates:{1:{available_points:"1.0",is_completed:!0,answer_id_order:["1","2"],answer_id:"1",free_response:"Free response",feedback_html:"Feedback",correct_answer_id:"1",correct_answer_feedback_html:"Feedback for the correct answer",attempts_remaining:0,attempt_number:1,incorrectAnswerId:0,canAnswer:!0,needsSaved:!1}}};return s(r,{...e},void 0,!1,{fileName:n,lineNumber:169,columnNumber:10},void 0)},k=()=>{const e={...t};return e.questionStates={1:{available_points:"1.0",is_completed:!0,answer_id_order:["1","2"],answer_id:"2",free_response:"Free response",feedback_html:"Feedback for the incorrect answer",correct_answer_id:"1",correct_answer_feedback_html:"Feedback for the correct answer",attempts_remaining:0,attempt_number:1,incorrectAnswerId:"2",solution:{content_html:"A detailed solution",solution_type:"detailed"},canAnswer:!0,needsSaved:!1}},s(r,{...e},void 0,!1,{fileName:n,lineNumber:192,columnNumber:10},void 0)};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{N as CompleteWithFeedback,A as Default,g as DeprecatedStepData,k as IncorrectWithFeedbackAndSolution};
