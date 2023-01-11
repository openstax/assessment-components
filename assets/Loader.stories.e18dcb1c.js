import{r as t,s as S,j as p}from"./index.a7d08830.js";import{c as T}from"./theme.a55d2ff4.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var a=function(){return a=Object.assign||function(i){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(i[l]=n[l])}return i},a.apply(this,arguments)};function M(e,i){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)i.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var q=function(){return Math.random().toString(36).substring(6)},b=function(e){var i=e.animate,n=e.animateBegin,r=e.backgroundColor,o=e.backgroundOpacity,l=e.baseUrl,E=e.children,w=e.foregroundColor,O=e.foregroundOpacity,s=e.gradientRatio,k=e.gradientDirection,C=e.uniqueKey,N=e.interval,j=e.rtl,L=e.speed,P=e.style,f=e.title,c=e.beforeMask,B=M(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),d=C||q(),x=d+"-diff",g=d+"-animated-diff",y=d+"-aria",D=j?{transform:"scaleX(-1)"}:null,m="0; "+N+"; 1",u=L+"s",R=k==="top-bottom"?"rotate(90)":void 0;return t.exports.createElement("svg",a({"aria-labelledby":y,role:"img",style:a(a({},P),D)},B),f?t.exports.createElement("title",{id:y},f):null,c&&t.exports.isValidElement(c)?c:null,t.exports.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+x+")",style:{fill:"url("+l+"#"+g+")"}}),t.exports.createElement("defs",null,t.exports.createElement("clipPath",{id:x},E),t.exports.createElement("linearGradient",{id:g,gradientTransform:R},t.exports.createElement("stop",{offset:"0%",stopColor:r,stopOpacity:o},i&&t.exports.createElement("animate",{attributeName:"offset",values:-s+"; "+-s+"; 1",keyTimes:m,dur:u,repeatCount:"indefinite",begin:n})),t.exports.createElement("stop",{offset:"50%",stopColor:w,stopOpacity:O},i&&t.exports.createElement("animate",{attributeName:"offset",values:-s/2+"; "+-s/2+"; "+(1+s/2),keyTimes:m,dur:u,repeatCount:"indefinite",begin:n})),t.exports.createElement("stop",{offset:"100%",stopColor:r,stopOpacity:o},i&&t.exports.createElement("animate",{attributeName:"offset",values:"0; 0; "+(1+s),keyTimes:m,dur:u,repeatCount:"indefinite",begin:n})))))};b.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var v=function(e){return e.children?t.exports.createElement(b,a({},e)):t.exports.createElement(K,a({},e))},K=function(e){return t.exports.createElement(v,a({viewBox:"0 0 476 124"},e),t.exports.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),t.exports.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),t.exports.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),t.exports.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),t.exports.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),t.exports.createElement("circle",{cx:"20",cy:"20",r:"20"}))},U=function(e){return t.exports.createElement(v,a({viewBox:"0 0 245 125"},e),t.exports.createElement("circle",{cx:"10",cy:"20",r:"8"}),t.exports.createElement("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),t.exports.createElement("circle",{cx:"10",cy:"50",r:"8"}),t.exports.createElement("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),t.exports.createElement("circle",{cx:"10",cy:"80",r:"8"}),t.exports.createElement("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),t.exports.createElement("circle",{cx:"10",cy:"110",r:"8"}),t.exports.createElement("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"}))},h="/home/runner/work/assessment-components/assessment-components/src/components/Loader.tsx";const A=S.div`
  max-width: 1000px;
  @media(min-width: 960px) {
    // Around the height of a multiple choice with 4 options
    min-height: 53.8rem;
  }
  padding: 2rem;
  margin: 2rem;
  border: 1px solid ${T.palette.light};
  border-radius: 0.25rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    max-width: 600px;
    flex-grow: 1;
  }
`,F=()=>p(A,{children:p(U,{uniqueKey:"OSLoader"},void 0,!1,{fileName:h,lineNumber:25,columnNumber:38},void 0)},void 0,!1,{fileName:h,lineNumber:25,columnNumber:29},void 0);var G="/home/runner/work/assessment-components/assessment-components/src/components/Loader.stories.tsx";const $=()=>p(F,{},void 0,!1,{fileName:G,lineNumber:3,columnNumber:30},void 0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{$ as Default};
