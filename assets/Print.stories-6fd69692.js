import{s as l,a as i,F as m,j as r}from"./index-8c1d5031.js";import{E as p}from"./Exercise-ecbff5b7.js";import"./Card-7f095530.js";import"./theme-5df4f04b.js";import"./index-f5fae7ca.js";import"./Feedback-a3a561a7.js";import"./ExerciseQuestion-38764fcc.js";import"./Answer-e031d17c.js";import"./Button-340b40b9.js";import"./Question-bf1690d3.js";import"./AnswersTable-419337aa.js";import"./StepCardFooter-f74a2ded.js";import"./ExerciseToolbar-874a8fd0.js";import"./index.es-a522f86a.js";const n=[{answers:[{id:375060,content_html:"Inertia is an object’s tendency to maintain its mass.",correctness:"0.0",feedback_html:"Is the inertia of an object related to its mass? Is it not related to the motion of the object?"},{id:375061,content_html:"Inertia is an object’s tendency to remain at rest.",correctness:"0.0",feedback_html:"It is correct that the inertia of an object is its tendency to remain at rest unless acted on by an external force, but what about the case when the object is in a state of motion?"},{id:375062,content_html:"Inertia is an object’s tendency to remain in motion",correctness:"0.0",feedback_html:"Yes, the inertia of an object is its tendency to maintain its state of motion unless acted on by an external force, but what about the case when the object is at rest?"},{id:375063,content_html:"Inertia is an object’s tendency to remain at rest or, if moving, to remain in motion.",correctness:"1.0",feedback_html:"Inertia is an object’s tendency to remain at rest or, if moving, to remain in motion at a constant velocity. Inertia may also be described as the tendency of objects to maintain their state of motion."}],group_uuid:"5583b4e2-cf57-4769-834d-4a96a370caa2",stem_html:"What is inertia?",tags:["inbook-yes","k12phys","os-practice-concepts","k12phys-ch04","k12phys-ch04-s02","k12phys-ch04-s02-lo02","k12phys-ch04-ex020","dok:1","blooms:1","time:short","book:stax-phys","lo:stax-phys:4-2-1","exid:k12phys-ch04-ex020","context-cnxmod:4114c614-ff33-4d78-ac94-be5d2e3c2d56","filter-type:import:hs","book:stax-k12phys","type:conceptual-or-recall","context-cnxmod:b0ffd0a2-9c83-4d73-b899-7f2ade2acda6","context-cnxmod:abae927d-b545-4981-8e47-602c3fcb6ce5","aplo:stax-apphys:1.C.3.1"],uid:"2079@5"},{answers:[{id:375102,content_html:"No, the balls will not necessarily travel the same distance because the gravitational force acting on them is different.",correctness:"0.0",feedback_html:"Is gravity nonuniform on the surface of the Earth where these balls are being thrown?"},{id:375105,content_html:"No, the balls will not necessarily travel the same distance because the angle at which they are thrown may differ.",correctness:"1.0",feedback_html:"The trajectory of the two balls would be different if they were thrown with the same force but at different angles."},{id:375103,content_html:"Yes, the balls will travel the same distance because the gravitational force acting on them is the same.",correctness:"0.0",feedback_html:"What will happen if the balls are thrown at different angles? Will both balls travel the same distance?"},{id:375104,content_html:"Yes, the balls will travel the same distance because the angle at which they are thrown may differ.",correctness:"0.0",feedback_html:"Are you sure that the two balls will travel the same distance if they are thrown at different angles?"}],group_uuid:"4c19f84a-91cb-4919-be91-e12283fddf9c",stem_html:"Two people apply the same force to throw two identical balls in the air. Will the balls necessarily travel the same distance? Why or why not?",tags:["inbook-yes","k12phys","ost-test-prep","extended-response","k12phys-ch04","k12phys-ch04-s02","k12phys-ch04-s02-lo01","k12phys-ch04-ex032","time:medium","dok:3","blooms:5","book:stax-phys","lo:stax-phys:4-5-2","exid:k12phys-ch04-ex032","context-cnxmod:4114c614-ff33-4d78-ac94-be5d2e3c2d56","filter-type:import:hs","book:stax-k12phys","type:practice","context-cnxmod:533d782d-bcde-44b0-8913-a03b6470dae1","context-cnxmod:7b751b5e-3f12-48f3-9c23-5add811fccd6","aplo:stax-apphys:2.B.1.1","aplo:stax-apphys:3.A.4.1","aplo:stax-apphys:4.A.3.1"],uid:"2091@5"}],b=l.div`
  break-inside: avoid;

  .step-card-body {
    padding: 24px 48px !important;
  }

  .step-card-footer {
    display: none;
  }

  .exercise-id {
    height: auto;
  }

  .exercise-step {
    min-height: auto;
  }

  .question-feedback {
    box-shadow: none !important;
  }

  .openstax-answer {
    break-inside: avoid;

    .answer-letter-wrapper::after {
      content: '' !important;
    }
  }
`,o=n.exercises,f=o.reduce((e,t)=>({...e,[t.uuid]:e.questionCounter+1,questionCounter:e.questionCounter+t.questions.length}),{questionCounter:0}),u=e=>e.map(t=>{var a;return{id:t.id,correct_answer_id:((a=t.answers.find(s=>s.correctness==="1.0"))==null?void 0:a.id)||""}}),y={available_points:"1.0",is_completed:!0,answer_id:"1",free_response:"",feedback_html:"",correct_answer_feedback_html:"",attempts_remaining:0,attempt_number:1,incorrectAnswerId:0},N=()=>i(m,{children:[n.title&&i("h2",{children:["Exercises for ",n.title]}),o.map(e=>{const t={id:1,uid:e.uid,available_points:"1.0"},a=u(e.questions).reduce((s,c)=>{const{id:d,correct_answer_id:h}=c;return{...s,[d]:{...y,correct_answer_id:h}}},{});return r(b,{children:r(p,{canAnswer:!0,needsSaved:!0,hasMultipleAttempts:!1,onAnswerChange:()=>{},onAnswerSave:()=>{},onNextStep:()=>{},apiIsPending:!1,canUpdateCurrentStep:!1,exercise:e,step:t,questionNumber:f[e.uuid],numberOfQuestions:o.length,questionStates:a,show_all_feedback:!0},e.uid)},e.uid)})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{N as Default};
