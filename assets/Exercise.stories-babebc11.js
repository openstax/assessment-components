import{s as w,r as l,j as t,a as u}from"./index-544e99ee.js";import{E as r}from"./Exercise-4bd62fcf.js";import"./Card-b26016b1.js";import"./theme-7dd1c118.js";import"./index-5e4c7aa7.js";import"./Feedback-7b6165c1.js";import"./ExerciseQuestion-4ef4f4fa.js";import"./Answer-6b567c0e.js";import"./Button-06cc3237.js";import"./Question-ecea5789.js";import"./AnswersTable-68235bf0.js";import"./StepCardFooter-4be36887.js";import"./ExerciseToolbar-bf2b2d49.js";import"./index.es-b309defe.js";const p={exercise:{uid:"1@1",uuid:"e4e27897-4abc-40d3-8565-5def31795edc",group_uuid:"20e82bf6-232e-40c8-ba68-2d22c6498f69",number:1,version:1,published_at:"2022-09-06T20:32:21.981Z",context:"Context",stimulus_html:"<b>Stimulus HTML</b>",tags:[],authors:[{user_id:1,name:"OpenStax"}],copyright_holders:[{user_id:1,name:"OpenStax"}],derived_from:[],is_vocab:!1,solutions_are_public:!1,versions:[1],questions:[{id:"1",collaborator_solutions:[],formats:["true-false"],stimulus_html:"",stem_html:"",is_answer_order_important:!1,answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}]}]},questionNumber:1,hasMultipleAttempts:!1,onAnswerChange:()=>null,onAnswerSave:()=>null,onNextStep:()=>null,canAnswer:!1,needsSaved:!1,apiIsPending:!1,step:{uid:"1234@5",id:1,available_points:"1.0",is_completed:!1,answer_id_order:["1","2"],answer_id:"1",free_response:"",feedback_html:"",correct_answer_id:"",correct_answer_feedback_html:"",is_feedback_available:!0,attempts_remaining:0,attempt_number:1,incorrectAnswerId:0},numberOfQuestions:1,canUpdateCurrentStep:!1},a=()=>({exercise:{uid:"1@1",uuid:"e4e27897-4abc-40d3-8565-5def31795edc",group_uuid:"20e82bf6-232e-40c8-ba68-2d22c6498f69",number:1,version:1,published_at:"2022-09-06T20:32:21.981Z",context:"Context",stimulus_html:"<b>Stimulus HTML</b>",tags:[],authors:[{user_id:1,name:"OpenStax"}],copyright_holders:[{user_id:1,name:"OpenStax"}],derived_from:[],is_vocab:!1,solutions_are_public:!1,versions:[1],questions:[{id:"1",collaborator_solutions:[],formats:["true-false"],stimulus_html:"",stem_html:"",is_answer_order_important:!1,answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}]}]},questionNumber:1,numberOfQuestions:1,hasMultipleAttempts:!1,onAnswerChange:()=>null,onAnswerSave:()=>null,onNextStep:()=>null,step:{id:1,uid:"1234@5",available_points:"1.0"},questionStates:{1:{available_points:"1.0",is_completed:!1,answer_id_order:["1","2"],answer_id:1,free_response:"",feedback_html:"",correct_answer_id:"",correct_answer_feedback_html:"",attempts_remaining:0,attempt_number:0,incorrectAnswerId:0,canAnswer:!0,needsSaved:!0,apiIsPending:!1}},hasFeedback:!0}),f=[.75,.9,1,1.25,1.5,2],h=[-2,-1,0,1,2,3],b=new Map(h.map((e,n)=>[e,f[n]])),x=w.div`
   ${e=>`
    --content-text-scale: ${b.get(e.textSize)};
  `}
`,d=({children:e})=>{const[n,o]=l.useState(2),i=()=>o(Math.min(n+1,h.length-1)),s=()=>o(Math.max(n-1,0));return u(x,{textSize:h[n],children:[u("div",{style:{marginBottom:"2rem",alignItems:"center",placeContent:"center",display:"flex",gap:"1rem"},children:[t("h3",{children:"Text Size"}),t("button",{onClick:s,children:"- Decrease"}),t("span",{style:{display:"inline-block",width:"3rem",textAlign:"center"},children:t("b",{children:f[n]})}),t("button",{onClick:i,children:"+ Increase"})]}),e]})},W=()=>{const[e,n]=l.useState(0),[o,i]=l.useState(!1),s=a();return s.questionStates[1].answer_id=e,s.questionStates[1].apiIsPending=o,t(r,{...s,onAnswerChange:m=>{n(m.id)},onAnswerSave:()=>i(!0)})},z=()=>{const[e,n]=l.useState(0),[o,i]=l.useState(!1),[s,m]=l.useState(!1),c=a();return c.hasFeedback=!1,c.questionStates[1].answer_id=e,c.questionStates[1].apiIsPending=o,c.questionStates[1].is_completed=s,c.questionStates[1].canAnswer=!s,t(r,{...c,onAnswerChange:_=>{n(_.id)},onAnswerSave:()=>{i(!0),setTimeout(()=>{i(!1),m(!0)},1e3)},onNextStep:_=>console.log(`Next step: ${_}`)})},H=()=>t(r,{...p}),N=()=>{const e={...a(),questionStates:{1:{available_points:"1.0",is_completed:!0,answer_id_order:["1","2"],answer_id:void 0,free_response:"Free response",feedback_html:"Feedback",correct_answer_id:"1",correct_answer_feedback_html:"Feedback for the correct answer",attempts_remaining:0,attempt_number:1,incorrectAnswerId:0,canAnswer:!1,needsSaved:!1,apiIsPending:!1}}};return t(d,{children:t(r,{...e})})},E=()=>{const e={...a(),questionStates:{1:{available_points:"1.0",is_completed:!0,answer_id_order:["1","2"],answer_id:1,free_response:"Free response",feedback_html:"",correct_answer_id:"",correct_answer_feedback_html:"",attempts_remaining:0,attempt_number:1,incorrectAnswerId:0,canAnswer:!1,needsSaved:!1,apiIsPending:!1}},hasFeedback:!1};return t(d,{children:t(r,{...e})})},D=()=>{const e={...a()};return e.questionStates={1:{available_points:"1.0",is_completed:!0,answer_id_order:["1","2"],answer_id:void 0,free_response:"Free response",feedback_html:"Feedback for the incorrect answer",correct_answer_id:"1",correct_answer_feedback_html:"Feedback for the correct answer",attempts_remaining:0,attempt_number:1,incorrectAnswerId:"2",solution:{content_html:"A detailed solution",solution_type:"detailed"},canAnswer:!0,needsSaved:!1,apiIsPending:!1}},t(d,{children:t(r,{...e})})},R=()=>{const e=a();return e.questionStates={1:{available_points:"1.0",is_completed:!0,answer_id_order:["1","2"],answer_id:2,free_response:"Free response",feedback_html:"Feedback for the incorrect answer",correct_answer_id:"1",correct_answer_feedback_html:"Feedback for the correct answer",attempts_remaining:0,attempt_number:1,incorrectAnswerId:"2",solution:{content_html:"A detailed solution",solution_type:"detailed"},canAnswer:!0,needsSaved:!1,apiIsPending:!1}},e.exercise.questions[0].answers[0].content_html="A very long correct answer to observe line wrapping at mobile sizes",e.exercise.questions[0].answers[1].content_html="A very long incorrect answer to observe line wrapping at mobile sizes",t(d,{children:t(r,{...e})})},B=()=>t(d,{children:t(r,{...{exercise:{uid:"1@1",uuid:"e4e27897-4abc-40d3-8565-5def31795edc",group_uuid:"20e82bf6-232e-40c8-ba68-2d22c6498f69",number:1,version:1,published_at:"2022-09-06T20:32:21.981Z",context:"Context",stimulus_html:"<b>Stimulus HTML</b>",tags:[],authors:[{user_id:1,name:"OpenStax"}],copyright_holders:[{user_id:1,name:"OpenStax"}],derived_from:[],is_vocab:!1,solutions_are_public:!1,versions:[1],questions:[{id:1,collaborator_solutions:[],formats:["true-false"],stimulus_html:"",stem_html:"",is_answer_order_important:!1,answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}]},{id:2,collaborator_solutions:[],formats:["true-false"],stimulus_html:"",stem_html:"",is_answer_order_important:!1,answers:[{id:"1",correctness:void 0,content_html:"True"},{id:"2",correctness:void 0,content_html:"False"}]}]},questionNumber:1,numberOfQuestions:2,hasMultipleAttempts:!1,onAnswerChange:()=>null,onAnswerSave:()=>null,onNextStep:()=>null,step:{id:1,uid:"1234@5",available_points:"1.0"},questionStates:{1:{available_points:"1.0",is_completed:!0,answer_id_order:["1","2"],answer_id:1,free_response:"",feedback_html:"",correct_answer_id:"",correct_answer_feedback_html:"",attempts_remaining:0,attempt_number:0,incorrectAnswerId:0,canAnswer:!1,needsSaved:!1,apiIsPending:!1},2:{available_points:"1.0",is_completed:!1,answer_id_order:["1","2"],answer_id:0,free_response:"",feedback_html:"",correct_answer_id:"",correct_answer_feedback_html:"",attempts_remaining:0,attempt_number:0,incorrectAnswerId:0,canAnswer:!0,needsSaved:!0,apiIsPending:!1}}}})}),L=()=>{const e={toolbar:{desktop:!1,mobile:!0},header:{desktop:!0,mobile:!1}};return t(r,{...a(),exerciseIcons:{topic:{url:"https://openstax.org",location:e},errata:{url:"https://openstax.org",location:e},info:{location:e}}})},Q=()=>{const[e,n]=l.useState(0),[o,i]=l.useState(void 0),s={...a(),questionStates:{1:{available_points:"1.0",is_completed:!1,answer_id_order:["1","2"],answer_id:e,free_response:"",feedback_html:"",correct_answer_id:"1",correct_answer_feedback_html:"",attempts_remaining:0,attempt_number:0,incorrectAnswerId:0,canAnswer:!0,needsSaved:!0,apiIsPending:!1}},exercise:{...p.exercise,context:"",stimulus_html:"",questions:[{id:"1",formats:["true-false"],stimulus_html:"",stem_html:`What's the sound of the reaction <span data-math="2 \\, \\text{H}_{2(g)} + \\, \\text{O}_{2(g)} \\to 2 \\, \\text{H}_{2}\\text{O}_{(l)}"></span> under the moonlight?`,is_answer_order_important:!1,answers:[{id:"1",correctness:"1",content_html:'<span data-math="\\text{H}_2\\text{O} + \\sqrt[3]{\\text{Melodic Echo}}"></span>',feedback_html:`<span data-math="\\text{H}_2\\text{O} + \\sqrt[3]{\\text{Melodic Echo}}"></span> implies that water molecules are harmonizing with the cubic root of a Melodic Echo.
This resonates with an unheard symphony of the universe, creating a multisensory mathematics that's both refreshing and melodious.`},{id:"2",correctness:void 0,content_html:'<span data-math="2 \\, \\text{NO}_2 \\to \\, \\text{N}_2\\text{O}_4 + \\text{Silent Whisper}"></span>'}]}]}};o&&(s.questionStates[1].is_completed=!0,s.questionStates[1].correct_answer_feedback_html=s.exercise.questions[0].answers[0].feedback_html||"",s.questionStates[1].solution={content_html:'<span data-math="2 \\, \\text{H}_{2(g)} + \\, \\text{O}_{2(g)} \\to 2 \\, \\text{H}_{2}\\text{O}_{(l)}"></span>',solution_type:"detailed"});const m={...a(),exercise:{...p.exercise,context:`At the intersection of mathematics and abstract art, there is a realm where equations take on the characteristics of color and flavor. For
instance, in this dimension, the quadratic formula <span data-math="x = \\frac{{-b \\pm \\sqrt{{b^2-4ac}}}}{{2a}}"></span> might taste like a blend of sweet and
sour, with the variable <span data-math="a"></span> contributing sweetness, <span data-math="b"></span> sourness, and <span data-math="c"></span> a hint of
bitterness. The discriminant <span data-math="b^2 - 4ac"></span> could perhaps alter the color of the equation, ranging from vibrant blue to fiery red.`,stimulus_html:`In a universe where equations like
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mrow class="MJX-TeXAtom-ORD">
    <mfrac>
      <mrow>
        <mo>&#x2212;<!-- − --></mo>
        <mi>b</mi>
        <mo>&#x00B1;<!-- ± --></mo>
        <msqrt>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
          <mo>&#x2212;<!-- − --></mo>
          <mn>4</mn>
          <mi>a</mi>
          <mi>c</mi>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math> have flavor and color properties...`,questions:[{id:"1",collaborator_solutions:[],formats:["true-false"],stimulus_html:"",stem_html:`What's the flavor of the integral <span data-math="( \\int (3x^2 - 2x + 1) \\, dx )?"></span>`,is_answer_order_important:!1,answers:[{id:"1",correctness:void 0,content_html:'<span data-math="\\sqrt[3]{\\text{Apple}}"></span>'},{id:"2",correctness:void 0,content_html:'<span data-math="\\frac{\\text{Banana}^{2}}{4}"></span>'}]},{id:"2",collaborator_solutions:[],formats:["true-false"],stimulus_html:`If <span data-math="f(x) = \\sin(x) \\cos(x)"></span>, then what's the color of its derivative?`,stem_html:"",is_answer_order_important:!1,answers:[{id:"1",correctness:void 0,content_html:'<span data-math="e^{\\text{Blue}}"></span>'},{id:"2",correctness:void 0,content_html:'<span data-math="\\frac{\\pi}{2} + \\text{Red}"></span>'}]}]},questionStates:{...a().questionStates,1:{...a().questionStates[1],solution:{content_html:'<span data-math="\\sqrt[3]{\\text{Apple}}"></span>',solution_type:"detailed"}},2:{...a().questionStates[1],solution:{content_html:'<span data-math="e^{\\text{Blue}}"></span>',solution_type:"detailed"}}}};return u(d,{children:[t(r,{...s,onAnswerChange:c=>{n(c.id)},onAnswerSave:()=>{i(1)}}),t(r,{...m})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{N as CompleteWithFeedback,E as CompleteWithoutFeedback,W as Default,z as DefaultWithoutFeedback,H as DeprecatedStepData,L as Icons,D as IncorrectWithFeedbackAndSolution,R as IncorrectWithFeedbackAndSolutionWrappingText,Q as MathJax,B as MultiPartHalfComplete};
