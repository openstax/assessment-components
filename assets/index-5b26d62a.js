import{c as x,g as dt,s as b,C as I,j as s,a as C,W as ht,R as y,T as mt,r as X,F as pt}from"./index-1246e674.js";import{O as gt,I as vt,T as bt}from"./Card-87f4e216.js";import{C as J}from"./Content-426e9025.js";import{E as wt}from"./ExerciseQuestion-64e179ce.js";import{F as yt}from"./FreeResponseInput-6a7b3d7b.js";import{t as kt}from"./mathjax-f052f1a4.js";import{S as _t,E as Et}from"./ExerciseToolbar-d2d0ee62.js";import{c as S,b as _,m as St}from"./theme-e25c540c.js";import{F as Mt}from"./index-55750d2b.js";var tt={};(function(e){e.linear=function(t){return t},e.inQuad=function(t){return t*t},e.outQuad=function(t){return t*(2-t)},e.inOutQuad=function(t){return t*=2,t<1?.5*t*t:-.5*(--t*(t-2)-1)},e.inCube=function(t){return t*t*t},e.outCube=function(t){return--t*t*t+1},e.inOutCube=function(t){return t*=2,t<1?.5*t*t*t:.5*((t-=2)*t*t+2)},e.inQuart=function(t){return t*t*t*t},e.outQuart=function(t){return 1- --t*t*t*t},e.inOutQuart=function(t){return t*=2,t<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},e.inQuint=function(t){return t*t*t*t*t},e.outQuint=function(t){return--t*t*t*t*t+1},e.inOutQuint=function(t){return t*=2,t<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},e.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},e.outSine=function(t){return Math.sin(t*Math.PI/2)},e.inOutSine=function(t){return .5*(1-Math.cos(Math.PI*t))},e.inExpo=function(t){return t==0?0:Math.pow(1024,t-1)},e.outExpo=function(t){return t==1?t:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){return t==0?0:t==1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},e.inCirc=function(t){return 1-Math.sqrt(1-t*t)},e.outCirc=function(t){return Math.sqrt(1- --t*t)},e.inOutCirc=function(t){return t*=2,t<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.inBack=function(t){var n=1.70158;return t*t*((n+1)*t-n)},e.outBack=function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},e.inOutBack=function(t){var n=2.5949095;return(t*=2)<1?.5*(t*t*((n+1)*t-n)):.5*((t-=2)*t*((n+1)*t+n)+2)},e.inBounce=function(t){return 1-e.outBounce(1-t)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inOutBounce=function(t){return t<.5?e.inBounce(t*2)*.5:e.outBounce(t*2-1)*.5+.5},e.inElastic=function(t){var n,i=.1,a=.4;return t===0?0:t===1?1:(!i||i<1?(i=1,n=a/4):n=a*Math.asin(1/i)/(2*Math.PI),-(i*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)))},e.outElastic=function(t){var n,i=.1,a=.4;return t===0?0:t===1?1:(!i||i<1?(i=1,n=a/4):n=a*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/a)+1)},e.inOutElastic=function(t){var n,i=.1,a=.4;return t===0?0:t===1?1:(!i||i<1?(i=1,n=a/4):n=a*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)):i*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)*.5+1)},e["in-quad"]=e.inQuad,e["out-quad"]=e.outQuad,e["in-out-quad"]=e.inOutQuad,e["in-cube"]=e.inCube,e["out-cube"]=e.outCube,e["in-out-cube"]=e.inOutCube,e["in-quart"]=e.inQuart,e["out-quart"]=e.outQuart,e["in-out-quart"]=e.inOutQuart,e["in-quint"]=e.inQuint,e["out-quint"]=e.outQuint,e["in-out-quint"]=e.inOutQuint,e["in-sine"]=e.inSine,e["out-sine"]=e.outSine,e["in-out-sine"]=e.inOutSine,e["in-expo"]=e.inExpo,e["out-expo"]=e.outExpo,e["in-out-expo"]=e.inOutExpo,e["in-circ"]=e.inCirc,e["out-circ"]=e.outCirc,e["in-out-circ"]=e.inOutCirc,e["in-back"]=e.inBack,e["out-back"]=e.outBack,e["in-out-back"]=e.inOutBack,e["in-bounce"]=e.inBounce,e["out-bounce"]=e.outBounce,e["in-out-bounce"]=e.inOutBounce,e["in-elastic"]=e.inElastic,e["out-elastic"]=e.outElastic,e["in-out-elastic"]=e.inOutElastic})(tt);var et={exports:{}};(function(e){function t(i){if(i)return n(i)}function n(i){for(var a in t.prototype)i[a]=t.prototype[a];return i}t.prototype.on=t.prototype.addEventListener=function(i,a){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(a),this},t.prototype.once=function(i,a){function r(){this.off(i,r),a.apply(this,arguments)}return r.fn=a,this.on(i,r),this},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(i,a){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+i];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var o,u=0;u<r.length;u++)if(o=r[u],o===a||o.fn===a){r.splice(u,1);break}return r.length===0&&delete this._callbacks["$"+i],this},t.prototype.emit=function(i){this._callbacks=this._callbacks||{};var a=[].slice.call(arguments,1),r=this._callbacks["$"+i];if(r){r=r.slice(0);for(var o=0,u=r.length;o<u;++o)r[o].apply(this,a)}return this},t.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]},t.prototype.hasListeners=function(i){return!!this.listeners(i).length},e.exports=t})(et);var Ct=et.exports,Tt=tt,$t=Ct;function Ot(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function m(e){if(!(this instanceof m))return new m(e);this._from=e,this.ease("linear"),this.duration(500)}$t(m.prototype);m.prototype.reset=function(){return this.isArray=Object.prototype.toString.call(this._from)==="[object Array]",this._curr=Ot({},this._from),this._done=!1,this._start=Date.now(),this};m.prototype.to=function(e){return this.reset(),this._to=e,this};m.prototype.duration=function(e){return this._duration=e,this};m.prototype.ease=function(e){if(e=typeof e=="function"?e:Tt[e],!e)throw new TypeError("invalid easing function");return this._ease=e,this};m.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this};m.prototype.step=function(){if(!this._done){var e=this._duration,t=Date.now(),n=t-this._start,i=n>=e;if(i)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var a=this._from,r=this._to,o=this._curr,u=this._ease,d=(t-this._start)/e,f=u(d);if(this.isArray){for(var v=0;v<a.length;++v)o[v]=a[v]+(r[v]-a[v])*f;return this._update(o),this}for(var E in a)o[E]=a[E]+(r[E]-a[E])*f;return this._update(o),this}};m.prototype.update=function(e){return arguments.length==0?this.step():(this._update=e,this)};var qt=m,z={exports:{}},q={exports:{}};(function(){var e,t,n,i,a,r;typeof performance<"u"&&performance!==null&&performance.now?q.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(q.exports=function(){return(e()-a)/1e6},t=process.hrtime,e=function(){var o;return o=t(),o[0]*1e9+o[1]},i=e(),r=process.uptime()*1e9,a=i-r):Date.now?(q.exports=function(){return Date.now()-n},n=Date.now()):(q.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(x);var Pt=q.exports,Qt=Pt,g=typeof window>"u"?x:window,Q=["moz","webkit"],M="AnimationFrame",T=g["request"+M],P=g["cancel"+M]||g["cancelRequest"+M];for(var O=0;!T&&O<Q.length;O++)T=g[Q[O]+"Request"+M],P=g[Q[O]+"Cancel"+M]||g[Q[O]+"CancelRequest"+M];if(!T||!P){var A=0,K=0,k=[],Bt=1e3/60;T=function(e){if(k.length===0){var t=Qt(),n=Math.max(0,Bt-(t-A));A=n+t,setTimeout(function(){var i=k.slice(0);k.length=0;for(var a=0;a<i.length;a++)if(!i[a].cancelled)try{i[a].callback(A)}catch(r){setTimeout(function(){throw r},0)}},Math.round(n))}return k.push({handle:++K,callback:e,cancelled:!1}),K},P=function(e){for(var t=0;t<k.length;t++)k[t].handle===e&&(k[t].cancelled=!0)}}z.exports=function(e){return T.call(g,e)};z.exports.cancel=function(){P.apply(g,arguments)};z.exports.polyfill=function(e){e||(e=g),e.requestAnimationFrame=T,e.cancelAnimationFrame=P};var It=z.exports,zt=qt,Nt=It;function Ht(){var e=window.pageYOffset||document.documentElement.scrollTop,t=window.pageXOffset||document.documentElement.scrollLeft;return{top:e,left:t}}function Rt(e,t,n){n=n||{};var i=Ht(),a=zt(i).ease(n.ease||"out-circ").to({top:t,left:e}).duration(n.duration||1e3);a.update(function(o){window.scrollTo(o.left|0,o.top|0)}),a.on("end",function(){r=function(){}});function r(){Nt(r),a.update()}return r(),a}var Dt=Rt,Ft=Dt;function At(e,t,n){var i=document.body,a=document.documentElement,r=e.getBoundingClientRect(),o=a.clientHeight,u=Math.max(i.scrollHeight,i.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight);t=t||0;var d;n==="bottom"?d=r.bottom-o:n==="middle"?d=r.bottom-o/2-r.height/2:d=r.top;var f=u-o;return Math.min(d+t+window.pageYOffset,f)}var Lt=function(e,t){if(t=t||{},typeof e=="string"&&(e=document.querySelector(e)),e)return Ft(0,At(e,t.offset,t.align),t)};const Vt=dt(Lt);var it={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="fas",n="book-open",i=576,a=512,r=[128214,128366],o="f518",u="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C87.5 32 35.1 48.6 9 59.9c-5.6 2.4-9 8-9 14V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V73.9c0-6.1-3.4-11.6-9-14C540.9 48.6 488.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z";e.definition={prefix:t,iconName:n,icon:[i,a,r,o,u]},e.faBookOpen=e.definition,e.prefix=t,e.iconName=n,e.width=i,e.height=a,e.ligatures=r,e.unicode=o,e.svgPathData=u,e.aliases=r})(it);var nt={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="fas",n="triangle-exclamation",i=512,a=512,r=[9888,"exclamation-triangle","warning"],o="f071",u="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z";e.definition={prefix:t,iconName:n,icon:[i,a,r,o,u]},e.faTriangleExclamation=e.definition,e.prefix=t,e.iconName=n,e.width=i,e.height=a,e.ligatures=r,e.unicode=o,e.svgPathData=u,e.aliases=r})(nt);var at={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="fas",n="circle-info",i=512,a=512,r=["info-circle"],o="f05a",u="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z";e.definition={prefix:t,iconName:n,icon:[i,a,r,o,u]},e.faCircleInfo=e.definition,e.prefix=t,e.iconName=n,e.width=i,e.height=a,e.ligatures=r,e.unicode=o,e.svgPathData=u,e.aliases=r})(at);const Z={"multiple-choice":"Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts.","two-step":"In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer."},Wt=b.div`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${S.palette.mediumBlue};}
    .popover { display: flex; }
  }
  ${e=>!e.desktop&&I`
    ${_.desktop`
      display: none;
    `}
    ${_.tablet`
      display: none;
    `}
  `}
  ${e=>!e.mobile&&_.mobile`
    display: none;
  `}
`,Gt=b.div`
  position: relative;
  display: flex;
`,jt=b.div`
  ${St.popover}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`,L=e=>s(Wt,{...e.wrapperProps,mobile:e.mobile,desktop:e.desktop,"aria-label":e.text,children:C(Gt,{children:[e.children,C(jt,{className:"popover right",children:[s("div",{className:"arrow"}),s("div",{className:"content",children:e.text})]})]})}),Ut=b.div`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`,V=b(Mt)`
  color: ${S.palette.darkGray};
  height: 1em;
`,Yt=({exercise:e,icons:t})=>{var o,u,d;const n={desktop:!0,mobile:!1},i=[],a=e.questions.every(f=>f.answers.length>0);let r;return a&&e.questions.find(f=>f.formats.includes("free-response"))?r=Z["two-step"]:a&&(r=Z["multiple-choice"]),t.topic&&i.push(s(L,{text:"View topic in textbook",wrapperProps:{as:"a",href:t.topic.url,target:"_blank"},...((o=t.topic.location)==null?void 0:o.header)||n,children:s(V,{icon:it.faBookOpen})},"topic")),t.errata&&i.push(s(L,{text:"Suggest a correction",wrapperProps:{as:"a",href:t.errata.url,target:"_blank"},...((u=t.errata.location)==null?void 0:u.header)||n,children:s(V,{icon:nt.faTriangleExclamation})},"errata")),t.info&&r&&i.push(s(L,{text:r,...((d=t.info.location)==null?void 0:d.header)||n,children:s(V,{icon:at.faCircleInfo,height:"16px",width:"16px"})},"type")),s(Ut,{children:i})},Xt=I`
  .image-button-wrapper {
    /* Remove default button styles for media modal img wrapper */
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    display: inline-block;
    cursor: pointer;
  }

  .image-button-wrapper:focus {
    outline: 1px solid Highlight;
    outline: 1px solid -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  .image-button-wrapper img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  &.is-selected {
    background-color: ${S.card.header.background};
    border-width: 0.2rem;

    .step-card-footer,
    .step-card-body,
    .step-card-header {
      background-color: ${S.card.header.background} !important;
    }

    .openstax-question {
      border-width: 0.2rem !important;
    }
  }

  &.preview-card {
    --spacing: 0.8rem;
    margin: 0 auto auto auto !important;

    [data-task-step-id] {
      padding: 0;
    }

    .step-card-header,
    .step-card-body {
      background-color: ${S.palette.white};
      padding: var(--spacing);
      font-size: 1.6rem;
      line-height: 2rem;
    }

    .step-card-footer {
      padding: 0 var(--spacing) var(--spacing);
    }

    .step-card-footer-inner {
      padding-top: var(--spacing);
    }

    .answers-table {
      margin: 0;
    }

    .exercise-context {
      .os-title {
        margin: 0 0 var(--spacing);
      }
      .os-subtitle {
        margin: var(--spacing) 0;
      }
      figure {
        float: left;
        margin: 0;
      }
      img {
        max-width: 16rem;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
    .openstax-question {
      .openstax-answer {
        padding: 0;
        border: none;

        .answer-label {
          padding-top: var(--spacing);
        }

        .answer-letter-wrapper {
          .answer-answer {
            margin-left: var(--spacing);
          }

          &::before {
            min-width: 2.3rem;
            min-height: 2.3rem;
            width: 2.3rem;
            height: 2.3rem;
          }
        }

        .answer-letter {
          min-width: 2.8rem;
          min-height: 2.8rem;
          width: 2.8rem;
          height: 2.8rem;
          display: flex;
        }
      }

      .question-feedback-content {
        font-size: 1.6rem;
      }

      .points,
      .question-feedback {
        max-width: unset;
      }
    }

    .step-card-footer .controls, .detailed-solution {
      display: none;
    }

    .question-stem,
    .question-feedback-content,
    .question-info,
    .exercise-context {
      line-height: 2rem;
    }

    .question-info {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .question-id {
      font-weight: 400;
      font-size: 1.2rem;
    }

    .question-stem {
      color: ${S.palette.neutralDarker};
      font-weight: bold;
      font-size: 1.6rem;
    }

  }
`,B=b(bt)`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`,Jt=ht`
  :root {
    --content-text-scale: 1;
  }
`,Kt=b.div`
  ${e=>e.desktopToolbarEnabled&&I`
    ${_.desktop`
      ${B} {
        margin-left: 6.8rem;
      }
    `}
    ${_.tablet`
      ${B} {
        margin-left: 4.8rem;
      }
    `}
    ${_.mobile`
      ${B} {
        margin-left: 0;
      }
    `}
  `}

  ${e=>e.mobileToolbarEnabled&&I`
    ${_.mobile`
      ${_t} + ${gt} ${vt} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `}
  `}
`,Zt=e=>C(Kt,{desktopToolbarEnabled:e.desktopToolbarEnabled,mobileToolbarEnabled:e.mobileToolbarEnabled,children:[s(Et,{icons:e.exerciseIcons}),s(B,{overlayChildren:e.overlayChildren,...e})]}),xt=({exercise:e})=>C(pt,{children:[e.context&&s(J,{className:"step-card-body exercise-context",block:!0,html:e.context}),e.stimulus_html&&s(J,{className:"step-card-body exercise-stimulus",block:!0,html:e.stimulus_html})]}),se=b(({numberOfQuestions:e,questionNumber:t,step:n,exercise:i,show_all_feedback:a,scrollToQuestion:r,exerciseIcons:o,overlayChildren:u,labelAnswers:d=!0,previewMode:f=!1,showScoring:v=!1,onGradingSave:E,...p})=>{const $="feedback_html"in n,N=y.useRef([]),H=y.useRef(null),[W,rt]=y.useState("questionStates"in p?p.questionStates:{}),ot=y.useCallback(()=>{H.current&&kt(H.current)},[]);y.useEffect(()=>{const c=r&&N.current[r];c&&Vt(c)},[r,i]);const ut=Object.values(o||{}).some(({location:c})=>{var l;return(l=c==null?void 0:c.toolbar)==null?void 0:l.desktop}),ct=Object.values(o||{}).some(({location:c})=>{var l;return(l=c==null?void 0:c.toolbar)==null?void 0:l.mobile}),R="questionStates"in p?p.questionStates:void 0;y.useEffect(()=>{R&&rt(R)},[R]);const{totalScoring:st,isGraded:lt}=y.useMemo(()=>{var w;const c={score:0,maxScore:0};let l=!0;for(const G of i.questions){const h=(w=W[G.id])==null?void 0:w.score;if((h==null?void 0:h.raw)===void 0||!(h!=null&&h.max)){l=!1;break}else c.score+=h.raw,c.maxScore+=h.max}return{totalScoring:c,isGraded:l}},[i.questions,W]);return C(mt.Provider,{value:ot,children:[s(Jt,{}),s(Zt,{step:n,questionNumber:t,numberOfQuestions:$?e:i.questions.length,rightHeaderChildren:o?s(Yt,{exercise:i,icons:o}):null,showTotalQuestions:$,desktopToolbarEnabled:ut,mobileToolbarEnabled:ct,...o?{exerciseIcons:o}:null,className:p.className,showScoring:v,isGraded:lt,totalScoring:$&&"scoring"in n?n.scoring:st,overlayChildren:u,children:C("div",{ref:H,children:[s(xt,{exercise:i}),i.questions.map((c,l)=>{var h,j,U;const w={...$?n:p.questionStates[c.id]};if(c.formats.length===1&&c.formats.includes("free-response")){const D={short:30,medium:100,long:1e3},Y=(j=(h=i.tags)==null?void 0:h.find(F=>F.startsWith("response-size:")))==null?void 0:j.split(":")[1],ft=Y&&D[Y]||100;return X.createElement(yt,{...p,...w,available_points:void 0,ref:F=>N.current[t+l]=F,key:c.id,question:c,questionNumber:t+l,wordLimit:ft,cancelHandler:()=>{},previewMode:f,onGradingSave:f?E:void 0})}return X.createElement(wt,{...p,...w,available_points:void 0,ref:D=>N.current[t+l]=D,exercise_uid:i.uid,key:c.id,question:c,questionNumber:t+l,choicesEnabled:w.canAnswer,displaySolution:!0,detailedSolution:(U=w.solution)==null?void 0:U.content_html,show_all_feedback:a,labelAnswers:d,tableFeedbackEnabled:a&&!$,canUpdateCurrentStep:"canUpdateCurrentStep"in p?p.canUpdateCurrentStep:l+1!==i.questions.length,previewMode:f})})]})})]})})`
  ${Xt}
`;export{se as E};
