import{r as t,s as T,j as f}from"./index-8c1d5031.js";import{c as D}from"./theme-5df4f04b.js";/*! *****************************************************************************
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
***************************************************************************** */var o=function(){return o=Object.assign||function(a){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(a[l]=n[l])}return a},o.apply(this,arguments)};function M(e,a){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)a.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var q=function(){return Math.random().toString(36).substring(6)},b=function(e){var a=e.animate,n=e.animateBegin,r=e.backgroundColor,i=e.backgroundOpacity,l=e.baseUrl,E=e.children,v=e.foregroundColor,w=e.foregroundOpacity,c=e.gradientRatio,O=e.gradientDirection,k=e.uniqueKey,C=e.interval,j=e.rtl,L=e.speed,P=e.style,g=e.title,d=e.beforeMask,B=M(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),u=k||q(),y=u+"-diff",p=u+"-animated-diff",h=u+"-aria",R=j?{transform:"scaleX(-1)"}:null,m="0; "+C+"; 1",s=L+"s",S=O==="top-bottom"?"rotate(90)":void 0;return t.createElement("svg",o({"aria-labelledby":h,role:"img",style:o(o({},P),R)},B),g?t.createElement("title",{id:h},g):null,d&&t.isValidElement(d)?d:null,t.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+l+"#"+y+")",style:{fill:"url("+l+"#"+p+")"}}),t.createElement("defs",null,t.createElement("clipPath",{id:y},E),t.createElement("linearGradient",{id:p,gradientTransform:S},t.createElement("stop",{offset:"0%",stopColor:r,stopOpacity:i},a&&t.createElement("animate",{attributeName:"offset",values:-c+"; "+-c+"; 1",keyTimes:m,dur:s,repeatCount:"indefinite",begin:n})),t.createElement("stop",{offset:"50%",stopColor:v,stopOpacity:w},a&&t.createElement("animate",{attributeName:"offset",values:-c/2+"; "+-c/2+"; "+(1+c/2),keyTimes:m,dur:s,repeatCount:"indefinite",begin:n})),t.createElement("stop",{offset:"100%",stopColor:r,stopOpacity:i},a&&t.createElement("animate",{attributeName:"offset",values:"0; 0; "+(1+c),keyTimes:m,dur:s,repeatCount:"indefinite",begin:n})))))};b.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var x=function(e){return e.children?t.createElement(b,o({},e)):t.createElement(K,o({},e))},K=function(e){return t.createElement(x,o({viewBox:"0 0 476 124"},e),t.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),t.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),t.createElement("circle",{cx:"20",cy:"20",r:"20"}))},U=function(e){return t.createElement(x,o({viewBox:"0 0 245 125"},e),t.createElement("circle",{cx:"10",cy:"20",r:"8"}),t.createElement("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),t.createElement("circle",{cx:"10",cy:"50",r:"8"}),t.createElement("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),t.createElement("circle",{cx:"10",cy:"80",r:"8"}),t.createElement("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),t.createElement("circle",{cx:"10",cy:"110",r:"8"}),t.createElement("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"}))};const A=T.div`
  max-width: 1000px;
  @media(min-width: 960px) {
    // Around the height of a multiple choice with 4 options
    min-height: 53.8rem;
  }
  padding: 2rem;
  margin: 2rem;
  border: 1px solid ${D.palette.light};
  border-radius: 0.25rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    max-width: 600px;
    flex-grow: 1;
  }
`,G=()=>f(A,{children:f(U,{uniqueKey:"OSLoader"})}),V=()=>f(G,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{V as Default};
