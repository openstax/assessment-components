import{c as re,g as Ue,P as h,R as Lt,s as it,j as _,a as Rt,r as He,F as We}from"./index-85509e85.js";import{T as Be}from"./Card-6b7a7d94.js";import{C as _n}from"./Feedback-3f13bdfc.js";import{c as ie,m as qe}from"./theme-ef749672.js";import{E as Ge}from"./ExerciseQuestion-dcf84be9.js";var oe={};(function(t){t.linear=function(n){return n},t.inQuad=function(n){return n*n},t.outQuad=function(n){return n*(2-n)},t.inOutQuad=function(n){return n*=2,n<1?.5*n*n:-.5*(--n*(n-2)-1)},t.inCube=function(n){return n*n*n},t.outCube=function(n){return--n*n*n+1},t.inOutCube=function(n){return n*=2,n<1?.5*n*n*n:.5*((n-=2)*n*n+2)},t.inQuart=function(n){return n*n*n*n},t.outQuart=function(n){return 1- --n*n*n*n},t.inOutQuart=function(n){return n*=2,n<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)},t.inQuint=function(n){return n*n*n*n*n},t.outQuint=function(n){return--n*n*n*n*n+1},t.inOutQuint=function(n){return n*=2,n<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)},t.inSine=function(n){return 1-Math.cos(n*Math.PI/2)},t.outSine=function(n){return Math.sin(n*Math.PI/2)},t.inOutSine=function(n){return .5*(1-Math.cos(Math.PI*n))},t.inExpo=function(n){return n==0?0:Math.pow(1024,n-1)},t.outExpo=function(n){return n==1?n:1-Math.pow(2,-10*n)},t.inOutExpo=function(n){return n==0?0:n==1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)},t.inCirc=function(n){return 1-Math.sqrt(1-n*n)},t.outCirc=function(n){return Math.sqrt(1- --n*n)},t.inOutCirc=function(n){return n*=2,n<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)},t.inBack=function(n){var e=1.70158;return n*n*((e+1)*n-e)},t.outBack=function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},t.inOutBack=function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)},t.inBounce=function(n){return 1-t.outBounce(1-n)},t.outBounce=function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},t.inOutBounce=function(n){return n<.5?t.inBounce(n*2)*.5:t.outBounce(n*2-1)*.5+.5},t.inElastic=function(n){var e,a=.1,r=.4;return n===0?0:n===1?1:(!a||a<1?(a=1,e=r/4):e=r*Math.asin(1/a)/(2*Math.PI),-(a*Math.pow(2,10*(n-=1))*Math.sin((n-e)*(2*Math.PI)/r)))},t.outElastic=function(n){var e,a=.1,r=.4;return n===0?0:n===1?1:(!a||a<1?(a=1,e=r/4):e=r*Math.asin(1/a)/(2*Math.PI),a*Math.pow(2,-10*n)*Math.sin((n-e)*(2*Math.PI)/r)+1)},t.inOutElastic=function(n){var e,a=.1,r=.4;return n===0?0:n===1?1:(!a||a<1?(a=1,e=r/4):e=r*Math.asin(1/a)/(2*Math.PI),(n*=2)<1?-.5*(a*Math.pow(2,10*(n-=1))*Math.sin((n-e)*(2*Math.PI)/r)):a*Math.pow(2,-10*(n-=1))*Math.sin((n-e)*(2*Math.PI)/r)*.5+1)},t["in-quad"]=t.inQuad,t["out-quad"]=t.outQuad,t["in-out-quad"]=t.inOutQuad,t["in-cube"]=t.inCube,t["out-cube"]=t.outCube,t["in-out-cube"]=t.inOutCube,t["in-quart"]=t.inQuart,t["out-quart"]=t.outQuart,t["in-out-quart"]=t.inOutQuart,t["in-quint"]=t.inQuint,t["out-quint"]=t.outQuint,t["in-out-quint"]=t.inOutQuint,t["in-sine"]=t.inSine,t["out-sine"]=t.outSine,t["in-out-sine"]=t.inOutSine,t["in-expo"]=t.inExpo,t["out-expo"]=t.outExpo,t["in-out-expo"]=t.inOutExpo,t["in-circ"]=t.inCirc,t["out-circ"]=t.outCirc,t["in-out-circ"]=t.inOutCirc,t["in-back"]=t.inBack,t["out-back"]=t.outBack,t["in-out-back"]=t.inOutBack,t["in-bounce"]=t.inBounce,t["out-bounce"]=t.outBounce,t["in-out-bounce"]=t.inOutBounce,t["in-elastic"]=t.inElastic,t["out-elastic"]=t.outElastic,t["in-out-elastic"]=t.inOutElastic})(oe);var se={exports:{}};(function(t){function n(a){if(a)return e(a)}function e(a){for(var r in n.prototype)a[r]=n.prototype[r];return a}n.prototype.on=n.prototype.addEventListener=function(a,r){return this._callbacks=this._callbacks||{},(this._callbacks["$"+a]=this._callbacks["$"+a]||[]).push(r),this},n.prototype.once=function(a,r){function i(){this.off(a,i),r.apply(this,arguments)}return i.fn=r,this.on(a,i),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(a,r){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var i=this._callbacks["$"+a];if(!i)return this;if(arguments.length==1)return delete this._callbacks["$"+a],this;for(var o,s=0;s<i.length;s++)if(o=i[s],o===r||o.fn===r){i.splice(s,1);break}return i.length===0&&delete this._callbacks["$"+a],this},n.prototype.emit=function(a){this._callbacks=this._callbacks||{};var r=[].slice.call(arguments,1),i=this._callbacks["$"+a];if(i){i=i.slice(0);for(var o=0,s=i.length;o<s;++o)i[o].apply(this,r)}return this},n.prototype.listeners=function(a){return this._callbacks=this._callbacks||{},this._callbacks["$"+a]||[]},n.prototype.hasListeners=function(a){return!!this.listeners(a).length},t.exports=n})(se);var Xe=se.exports,Qe=oe,Ve=Xe;function Ke(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function T(t){if(!(this instanceof T))return new T(t);this._from=t,this.ease("linear"),this.duration(500)}Ve(T.prototype);T.prototype.reset=function(){return this.isArray=Object.prototype.toString.call(this._from)==="[object Array]",this._curr=Ke({},this._from),this._done=!1,this._start=Date.now(),this};T.prototype.to=function(t){return this.reset(),this._to=t,this};T.prototype.duration=function(t){return this._duration=t,this};T.prototype.ease=function(t){if(t=typeof t=="function"?t:Qe[t],!t)throw new TypeError("invalid easing function");return this._ease=t,this};T.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this};T.prototype.step=function(){if(!this._done){var t=this._duration,n=Date.now(),e=n-this._start,a=e>=t;if(a)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var r=this._from,i=this._to,o=this._curr,s=this._ease,f=(n-this._start)/t,c=s(f);if(this.isArray){for(var l=0;l<r.length;++l)o[l]=r[l]+(i[l]-r[l])*c;return this._update(o),this}for(var u in r)o[u]=r[u]+(i[u]-r[u])*c;return this._update(o),this}};T.prototype.update=function(t){return arguments.length==0?this.step():(this._update=t,this)};var Je=T,$t={exports:{}},ft={exports:{}};(function(){var t,n,e,a,r,i;typeof performance<"u"&&performance!==null&&performance.now?ft.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(ft.exports=function(){return(t()-r)/1e6},n=process.hrtime,t=function(){var o;return o=n(),o[0]*1e9+o[1]},a=t(),i=process.uptime()*1e9,r=a-i):Date.now?(ft.exports=function(){return Date.now()-e},e=Date.now()):(ft.exports=function(){return new Date().getTime()-e},e=new Date().getTime())}).call(re);var Ze=ft.exports,ta=Ze,L=typeof window>"u"?re:window,xt=["moz","webkit"],nt="AnimationFrame",at=L["request"+nt],mt=L["cancel"+nt]||L["cancelRequest"+nt];for(var st=0;!at&&st<xt.length;st++)at=L[xt[st]+"Request"+nt],mt=L[xt[st]+"Cancel"+nt]||L[xt[st]+"CancelRequest"+nt];if(!at||!mt){var qt=0,Cn=0,G=[],na=1e3/60;at=function(t){if(G.length===0){var n=ta(),e=Math.max(0,na-(n-qt));qt=e+n,setTimeout(function(){var a=G.slice(0);G.length=0;for(var r=0;r<a.length;r++)if(!a[r].cancelled)try{a[r].callback(qt)}catch(i){setTimeout(function(){throw i},0)}},Math.round(e))}return G.push({handle:++Cn,callback:t,cancelled:!1}),Cn},mt=function(t){for(var n=0;n<G.length;n++)G[n].handle===t&&(G[n].cancelled=!0)}}$t.exports=function(t){return at.call(L,t)};$t.exports.cancel=function(){mt.apply(L,arguments)};$t.exports.polyfill=function(t){t||(t=L),t.requestAnimationFrame=at,t.cancelAnimationFrame=mt};var ea=$t.exports,aa=Je,ra=ea;function ia(){var t=window.pageYOffset||document.documentElement.scrollTop,n=window.pageXOffset||document.documentElement.scrollLeft;return{top:t,left:n}}function oa(t,n,e){e=e||{};var a=ia(),r=aa(a).ease(e.ease||"out-circ").to({top:n,left:t}).duration(e.duration||1e3);r.update(function(o){window.scrollTo(o.left|0,o.top|0)}),r.on("end",function(){i=function(){}});function i(){ra(i),r.update()}return i(),r}var sa=oa,fa=sa;function la(t,n,e){var a=document.body,r=document.documentElement,i=t.getBoundingClientRect(),o=r.clientHeight,s=Math.max(a.scrollHeight,a.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight);n=n||0;var f;e==="bottom"?f=i.bottom-o:e==="middle"?f=i.bottom-o/2-i.height/2:f=i.top;var c=s-o;return Math.min(f+n+window.pageYOffset,c)}var ca=function(t,n){if(n=n||{},typeof t=="string"&&(t=document.querySelector(t)),t)return fa(0,la(t,n.offset,n.align),n)};const ua=Ue(ca);var fe={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var n="fas",e="book-open",a=576,r=512,i=[128214,128366],o="f518",s="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C87.5 32 35.1 48.6 9 59.9c-5.6 2.4-9 8-9 14V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V73.9c0-6.1-3.4-11.6-9-14C540.9 48.6 488.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z";t.definition={prefix:n,iconName:e,icon:[a,r,i,o,s]},t.faBookOpen=t.definition,t.prefix=n,t.iconName=e,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(fe);var le={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var n="fas",e="triangle-exclamation",a=512,r=512,i=[9888,"exclamation-triangle","warning"],o="f071",s="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z";t.definition={prefix:n,iconName:e,icon:[a,r,i,o,s]},t.faTriangleExclamation=t.definition,t.prefix=n,t.iconName=e,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(le);var ce={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var n="fas",e="circle-info",a=512,r=512,i=["info-circle"],o="f05a",s="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z";t.definition={prefix:n,iconName:e,icon:[a,r,i,o,s]},t.faCircleInfo=t.definition,t.prefix=n,t.iconName=e,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(ce);function In(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?In(Object(e),!0).forEach(function(a){O(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):In(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Ft(t){"@babel/helpers - typeof";return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ft(t)}function ma(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Nn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function da(t,n,e){return n&&Nn(t.prototype,n),e&&Nn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function hn(t,n){return ha(t)||pa(t,n)||ue(t,n)||ya()}function gt(t){return va(t)||ba(t)||ue(t)||ga()}function va(t){if(Array.isArray(t))return tn(t)}function ha(t){if(Array.isArray(t))return t}function ba(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function pa(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function ue(t,n){if(t){if(typeof t=="string")return tn(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return tn(t,n)}}function tn(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function ga(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ya(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tn=function(){},bn={},me={},de=null,ve={mark:Tn,measure:Tn};try{typeof window<"u"&&(bn=window),typeof document<"u"&&(me=document),typeof MutationObserver<"u"&&(de=MutationObserver),typeof performance<"u"&&(ve=performance)}catch{}var wa=bn.navigator||{},Mn=wa.userAgent,Ln=Mn===void 0?"":Mn,U=bn,g=me,Rn=de,At=ve;U.document;var D=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",he=~Ln.indexOf("MSIE")||~Ln.indexOf("Trident/"),Ot,Et,Pt,St,_t,R="___FONT_AWESOME___",nn=16,be="fa",pe="svg-inline--fa",V="data-fa-i2svg",en="data-fa-pseudo-element",ka="data-fa-pseudo-element-pending",pn="data-prefix",gn="data-icon",Fn="fontawesome-i2svg",xa="async",Aa=["HTML","HEAD","STYLE","SCRIPT"],ge=function(){try{return!0}catch{return!1}}(),p="classic",y="sharp",yn=[p,y];function yt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[p]}})}var dt=yt((Ot={},O(Ot,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(Ot,y,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ot)),vt=yt((Et={},O(Et,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(Et,y,{solid:"fass"}),Et)),ht=yt((Pt={},O(Pt,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(Pt,y,{fass:"fa-solid"}),Pt)),Oa=yt((St={},O(St,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(St,y,{"fa-solid":"fass"}),St)),Ea=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ye="fa-layers-text",Pa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Sa=yt((_t={},O(_t,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(_t,y,{900:"fass"}),_t)),we=[1,2,3,4,5,6,7,8,9,10],_a=we.concat([11,12,13,14,15,16,17,18,19,20]),Ca=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bt=new Set;Object.keys(vt[p]).map(bt.add.bind(bt));Object.keys(vt[y]).map(bt.add.bind(bt));var Ia=[].concat(yn,gt(bt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X.GROUP,X.SWAP_OPACITY,X.PRIMARY,X.SECONDARY]).concat(we.map(function(t){return"".concat(t,"x")})).concat(_a.map(function(t){return"w-".concat(t)})),ct=U.FontAwesomeConfig||{};function Na(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(g&&typeof g.querySelector=="function"){var Ma=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ma.forEach(function(t){var n=hn(t,2),e=n[0],a=n[1],r=Ta(Na(e));r!=null&&(ct[a]=r)})}var ke={styleDefault:"solid",familyDefault:"classic",cssPrefix:be,replacementClass:pe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ct.familyPrefix&&(ct.cssPrefix=ct.familyPrefix);var rt=m(m({},ke),ct);rt.autoReplaceSvg||(rt.observeMutations=!1);var d={};Object.keys(ke).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){rt[t]=e,ut.forEach(function(a){return a(d)})},get:function(){return rt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){rt.cssPrefix=n,ut.forEach(function(e){return e(d)})},get:function(){return rt.cssPrefix}});U.FontAwesomeConfig=d;var ut=[];function La(t){return ut.push(t),function(){ut.splice(ut.indexOf(t),1)}}var $=nn,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ra(t){if(!(!t||!D)){var n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=g.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(n,a),t}}var Fa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pt(){for(var t=12,n="";t-- >0;)n+=Fa[Math.random()*62|0];return n}function ot(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function wn(t){return t.classList?ot(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function xe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function za(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(xe(t[e]),'" ')},"").trim()}function Yt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function kn(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function Da(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function ja(t){var n=t.transform,e=t.width,a=e===void 0?nn:e,r=t.height,i=r===void 0?nn:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&he?f+="translate(".concat(n.x/$-a/2,"em, ").concat(n.y/$-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/$,"em), calc(-50% + ").concat(n.y/$,"em)) "):f+="translate(".concat(n.x/$,"em, ").concat(n.y/$,"em) "),f+="scale(".concat(n.size/$*(n.flipX?-1:1),", ").concat(n.size/$*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var $a=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ae(){var t=be,n=pe,e=d.cssPrefix,a=d.replacementClass,r=$a;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var zn=!1;function Gt(){d.autoAddCss&&!zn&&(Ra(Ae()),zn=!0)}var Ya={mixout:function(){return{dom:{css:Ae,insertCss:Gt}}},hooks:function(){return{beforeDOMElementCreation:function(){Gt()},beforeI2svg:function(){Gt()}}}},F=U||{};F[R]||(F[R]={});F[R].styles||(F[R].styles={});F[R].hooks||(F[R].hooks={});F[R].shims||(F[R].shims=[]);var N=F[R],Oe=[],Ua=function t(){g.removeEventListener("DOMContentLoaded",t),zt=1,Oe.map(function(n){return n()})},zt=!1;D&&(zt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),zt||g.addEventListener("DOMContentLoaded",Ua));function Ha(t){D&&(zt?setTimeout(t,0):Oe.push(t))}function wt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?xe(t):"<".concat(n," ").concat(za(a),">").concat(i.map(wt).join(""),"</").concat(n,">")}function Dn(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Wa=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Xt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Wa(e,r):e,f,c,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function Ba(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function an(t){var n=Ba(t);return n.length===1?n[0].toString(16):null}function qa(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function jn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function rn(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=jn(n);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,jn(n)):N.styles[t]=m(m({},N.styles[t]||{}),i),t==="fas"&&rn("fa",n)}var Ct,It,Nt,J=N.styles,Ga=N.shims,Xa=(Ct={},O(Ct,p,Object.values(ht[p])),O(Ct,y,Object.values(ht[y])),Ct),xn=null,Ee={},Pe={},Se={},_e={},Ce={},Qa=(It={},O(It,p,Object.keys(dt[p])),O(It,y,Object.keys(dt[y])),It);function Va(t){return~Ia.indexOf(t)}function Ka(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Va(r)?r:null}var Ie=function(){var n=function(i){return Xt(J,function(o,s,f){return o[f]=Xt(s,i,{}),o},{})};Ee=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Pe=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Ce=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in J||d.autoFetchSvg,a=Xt(Ga,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Se=a.names,_e=a.unicodes,xn=Ut(d.styleDefault,{family:d.familyDefault})};La(function(t){xn=Ut(t.styleDefault,{family:d.familyDefault})});Ie();function An(t,n){return(Ee[t]||{})[n]}function Ja(t,n){return(Pe[t]||{})[n]}function Q(t,n){return(Ce[t]||{})[n]}function Ne(t){return Se[t]||{prefix:null,iconName:null}}function Za(t){var n=_e[t],e=An("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H(){return xn}var On=function(){return{prefix:null,iconName:null,rest:[]}};function Ut(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?p:e,r=dt[a][t],i=vt[a][t]||vt[a][r],o=t in N.styles?t:null;return i||o||null}var $n=(Nt={},O(Nt,p,Object.keys(ht[p])),O(Nt,y,Object.keys(ht[y])),Nt);function Ht(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},O(n,p,"".concat(d.cssPrefix,"-").concat(p)),O(n,y,"".concat(d.cssPrefix,"-").concat(y)),n),o=null,s=p;(t.includes(i[p])||t.some(function(c){return $n[p].includes(c)}))&&(s=p),(t.includes(i[y])||t.some(function(c){return $n[y].includes(c)}))&&(s=y);var f=t.reduce(function(c,l){var u=Ka(d.cssPrefix,l);if(J[l]?(l=Xa[s].includes(l)?Oa[s][l]:l,o=l,c.prefix=l):Qa[s].indexOf(l)>-1?(o=l,c.prefix=Ut(l,{family:s})):u?c.iconName=u:l!==d.replacementClass&&l!==i[p]&&l!==i[y]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var v=o==="fa"?Ne(c.iconName):{},b=Q(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||b||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!J.far&&J.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},On());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(J.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=Q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=H()||"fas"),f}var tr=function(){function t(){ma(this,t),this.definitions={}}return da(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=m(m({},e.definitions[s]||{}),o[s]),rn(s,o[s]);var f=ht[p][s];f&&rn(f,o[s]),Ie()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(e[s][u]=c)}),e[s][f]=c}),e}}]),t}(),Yn=[],Z={},et={},nr=Object.keys(et);function er(t,n){var e=n.mixoutsTo;return Yn=t,Z={},Object.keys(et).forEach(function(a){nr.indexOf(a)===-1&&delete et[a]}),Yn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Ft(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(et)}),e}function on(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=Z[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function K(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=Z[t]||[];r.forEach(function(i){i.apply(null,e)})}function z(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,n):void 0}function sn(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||H();if(n)return n=Q(e,n)||n,Dn(Te.definitions,e,n)||Dn(N.styles,e,n)}var Te=new tr,ar=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,K("noAuto")},rr={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(K("beforeI2svg",n),z("pseudoElements2svg",n),z("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ha(function(){or({autoReplaceSvgRoot:e}),K("watch",n)})}},ir={icon:function(n){if(n===null)return null;if(Ft(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Q(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ut(n[0]);return{prefix:a,iconName:Q(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Ea))){var r=Ht(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:Q(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=H();return{prefix:i,iconName:Q(i,n)||n}}}},I={noAuto:ar,config:d,dom:rr,parse:ir,library:Te,findIconDefinition:sn,toHtml:wt},or=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?g:e;(Object.keys(N.styles).length>0||d.autoFetchSvg)&&D&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function Wt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return wt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(D){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function sr(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(kn(o)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=Yt(m(m({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function fr(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function En(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,u=t.extra,v=t.watchable,b=v===void 0?!1:v,x=a.found?a:e,P=x.width,w=x.height,S=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(j){return u.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(u.classes).join(" "),A={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(w)})},C=S&&!~u.classes.indexOf("fa-fw")?{width:"".concat(P/w*16*.0625,"em")}:{};b&&(A.attributes[V]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||pt())},children:[f]}),delete A.attributes.title);var E=m(m({},A),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:s,styles:m(m({},C),u.styles)}),B=a.found&&e.found?z("generateAbstractMask",E)||{children:[],attributes:{}}:z("generateAbstractIcon",E)||{children:[],attributes:{}},q=B.children,Bt=B.attributes;return E.children=q,E.attributes=Bt,s?fr(E):sr(E)}function Un(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[V]="");var l=m({},o.styles);kn(r)&&(l.transform=ja({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var u=Yt(l);u.length>0&&(c.style=u);var v=[];return v.push({tag:"span",attributes:c,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function lr(t){var n=t.content,e=t.title,a=t.extra,r=m(m(m({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Yt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Qt=N.styles;function fn(t){var n=t[0],e=t[1],a=t.slice(4),r=hn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var cr={found:!1,width:512,height:512};function ur(t,n){!ge&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function ln(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=H()),new Promise(function(a,r){if(z("missingIconAbstract"),e==="fa"){var i=Ne(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Qt[n]&&Qt[n][t]){var o=Qt[n][t];return a(fn(o))}ur(t,n),a(m(m({},cr),{},{icon:d.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var Hn=function(){},cn=d.measurePerformance&&At&&At.mark&&At.measure?At:{mark:Hn,measure:Hn},lt='FA "6.2.0"',mr=function(n){return cn.mark("".concat(lt," ").concat(n," begins")),function(){return Me(n)}},Me=function(n){cn.mark("".concat(lt," ").concat(n," ends")),cn.measure("".concat(lt," ").concat(n),"".concat(lt," ").concat(n," begins"),"".concat(lt," ").concat(n," ends"))},Pn={begin:mr,end:Me},Tt=function(){};function Wn(t){var n=t.getAttribute?t.getAttribute(V):null;return typeof n=="string"}function dr(t){var n=t.getAttribute?t.getAttribute(pn):null,e=t.getAttribute?t.getAttribute(gn):null;return n&&e}function vr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function hr(){if(d.autoReplaceSvg===!0)return Mt.replace;var t=Mt[d.autoReplaceSvg];return t||Mt.replace}function br(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function pr(t){return g.createElement(t)}function Le(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?br:pr:e;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Le(o,{ceFn:a}))}),r}function gr(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Mt={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Le(r),e)}),e.getAttribute(V)===null&&d.keepOriginalSource){var a=g.createComment(gr(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~wn(e).indexOf(d.replacementClass))return Mt.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return wt(s)}).join(`
`);e.setAttribute(V,""),e.innerHTML=o}};function Bn(t){t()}function Re(t,n){var e=typeof n=="function"?n:Tt;if(t.length===0)e();else{var a=Bn;d.mutateApproach===xa&&(a=U.requestAnimationFrame||Bn),a(function(){var r=hr(),i=Pn.begin("mutate");t.map(r),i(),e()})}}var Sn=!1;function Fe(){Sn=!0}function un(){Sn=!1}var Dt=null;function qn(t){if(Rn&&d.observeMutations){var n=t.treeCallback,e=n===void 0?Tt:n,a=t.nodeCallback,r=a===void 0?Tt:a,i=t.pseudoElementsCallback,o=i===void 0?Tt:i,s=t.observeMutationsRoot,f=s===void 0?g:s;Dt=new Rn(function(c){if(!Sn){var l=H();ot(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Wn(u.addedNodes[0])&&(d.searchPseudoElements&&o(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&d.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Wn(u.target)&&~Ca.indexOf(u.attributeName))if(u.attributeName==="class"&&dr(u.target)){var v=Ht(wn(u.target)),b=v.prefix,x=v.iconName;u.target.setAttribute(pn,b||l),x&&u.target.setAttribute(gn,x)}else vr(u.target)&&r(u.target)})}}),D&&Dt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yr(){Dt&&Dt.disconnect()}function wr(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function kr(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Ht(wn(t));return r.prefix||(r.prefix=H()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ja(r.prefix,t.innerText)||An(r.prefix,an(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function xr(t){var n=ot(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||pt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ar(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=kr(t),a=e.iconName,r=e.prefix,i=e.rest,o=xr(t),s=on("parseNodeAttributes",{},t),f=n.styleParser?wr(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Or=N.styles;function ze(t){var n=d.autoReplaceSvg==="nest"?Gn(t,{styleParser:!1}):Gn(t);return~n.extra.classes.indexOf(ye)?z("generateLayersText",t,n):z("generateSvgReplacementMutation",t,n)}var W=new Set;yn.map(function(t){W.add("fa-".concat(t))});Object.keys(dt[p]).map(W.add.bind(W));Object.keys(dt[y]).map(W.add.bind(W));W=gt(W);function Xn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var e=g.documentElement.classList,a=function(u){return e.add("".concat(Fn,"-").concat(u))},r=function(u){return e.remove("".concat(Fn,"-").concat(u))},i=d.autoFetchSvg?W:yn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Or));i.includes("fa")||i.push("fa");var o=[".".concat(ye,":not([").concat(V,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ot(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Pn.begin("onTree"),c=s.reduce(function(l,u){try{var v=ze(u);v&&l.push(v)}catch(b){ge||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,u){Promise.all(c).then(function(v){Re(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(v){f(),u(v)})})}function Er(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ze(t).then(function(e){e&&Re([e],n)})}function Pr(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:sn(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:sn(r||{})),t(a,m(m({},e),{},{mask:r}))}}var Sr=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?M:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,u=e.title,v=u===void 0?null:u,b=e.titleId,x=b===void 0?null:b,P=e.classes,w=P===void 0?[]:P,S=e.attributes,k=S===void 0?{}:S,A=e.styles,C=A===void 0?{}:A;if(n){var E=n.prefix,B=n.iconName,q=n.icon;return Wt(m({type:"icon"},n),function(){return K("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||pt()):(k["aria-hidden"]="true",k.focusable="false")),En({icons:{main:fn(q),mask:f?fn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:B,transform:m(m({},M),r),symbol:o,title:v,maskId:l,titleId:x,extra:{attributes:k,styles:C,classes:w}})})}},_r={mixout:function(){return{icon:Pr(Sr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Xn,e.nodeCallback=Er,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?g:a,i=e.callback,o=i===void 0?function(){}:i;return Xn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,u=a.maskId,v=a.extra;return new Promise(function(b,x){Promise.all([ln(r,s),l.iconName?ln(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var w=hn(P,2),S=w[0],k=w[1];b([e,En({icons:{main:S,mask:k},prefix:s,iconName:r,transform:f,symbol:c,maskId:u,title:i,titleId:o,extra:v,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Yt(s);f.length>0&&(r.style=f);var c;return kn(o)&&(c=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Cr={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Wt({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(gt(i)).join(" ")},children:o}]})}}}},Ir={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,u=l===void 0?{}:l;return Wt({type:"counter",content:e},function(){return K("beforeDOMElementCreation",{content:e,params:a}),lr({content:e.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(gt(s))}})})}}}},Nr={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,u=l===void 0?{}:l,v=a.styles,b=v===void 0?{}:v;return Wt({type:"text",content:e},function(){return K("beforeDOMElementCreation",{content:e,params:a}),Un({content:e,transform:m(m({},M),i),title:s,extra:{attributes:u,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(gt(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(he){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Un({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Tr=new RegExp('"',"ug"),Qn=[1105920,1112319];function Mr(t){var n=t.replace(Tr,""),e=qa(n,0),a=e>=Qn[0]&&e<=Qn[1],r=n.length===2?n[0]===n[1]:!1;return{value:an(r?n[0]:n),isSecondary:a||r}}function Vn(t,n){var e="".concat(ka).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=ot(t.children),o=i.filter(function(q){return q.getAttribute(en)===n})[0],s=U.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Pa),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var u=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?y:p,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?vt[v][f[2].toLowerCase()]:Sa[v][c],x=Mr(u),P=x.value,w=x.isSecondary,S=f[0].startsWith("FontAwesome"),k=An(b,P),A=k;if(S){var C=Za(P);C.iconName&&C.prefix&&(k=C.iconName,b=C.prefix)}if(k&&!w&&(!o||o.getAttribute(pn)!==b||o.getAttribute(gn)!==A)){t.setAttribute(e,A),o&&t.removeChild(o);var E=Ar(),B=E.extra;B.attributes[en]=n,ln(k,b).then(function(q){var Bt=En(m(m({},E),{},{icons:{main:q,mask:On()},prefix:b,iconName:A,extra:B,watchable:!0})),j=g.createElement("svg");n==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=Bt.map(function(Ye){return wt(Ye)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Lr(t){return Promise.all([Vn(t,"::before"),Vn(t,"::after")])}function Rr(t){return t.parentNode!==document.head&&!~Aa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(en)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Kn(t){if(D)return new Promise(function(n,e){var a=ot(t.querySelectorAll("*")).filter(Rr).map(Lr),r=Pn.begin("searchPseudoElements");Fe(),Promise.all(a).then(function(){r(),un(),n()}).catch(function(){r(),un(),e()})})}var Fr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Kn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?g:a;d.searchPseudoElements&&Kn(r)}}},Jn=!1,zr={mixout:function(){return{dom:{unwatch:function(){Fe(),Jn=!0}}}},hooks:function(){return{bootstrap:function(){qn(on("mutationObserverCallbacks",{}))},noAuto:function(){yr()},watch:function(e){var a=e.observeMutationsRoot;Jn?un():qn(on("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Zn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Dr={mixout:function(){return{parse:{transform:function(e){return Zn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Zn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(c," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:u,path:v};return{tag:"g",attributes:m({},b.outer),children:[{tag:"g",attributes:m({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),b.path)}]}]}}}},Vt={x:0,y:0,width:"100%",height:"100%"};function te(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function jr(t){return t.tag==="g"?t.children:[t]}var $r={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Ht(r.split(" ").map(function(o){return o.trim()})):On();return i.prefix||(i.prefix=H()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,c=i.width,l=i.icon,u=o.width,v=o.icon,b=Da({transform:f,containerWidth:u,iconWidth:c}),x={tag:"rect",attributes:m(m({},Vt),{},{fill:"white"})},P=l.children?{children:l.children.map(te)}:{},w={tag:"g",attributes:m({},b.inner),children:[te(m({tag:l.tag,attributes:m(m({},l.attributes),b.path)},P))]},S={tag:"g",attributes:m({},b.outer),children:[w]},k="mask-".concat(s||pt()),A="clip-".concat(s||pt()),C={tag:"mask",attributes:m(m({},Vt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,S]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:jr(v)},C]};return a.push(E,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(k,")")},Vt)}),{children:a,attributes:r}}}},Yr={provides:function(n){var e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ur={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Hr=[Ya,_r,Cr,Ir,Nr,Fr,zr,Dr,$r,Yr,Ur];er(Hr,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var mn=I.parse;I.findIconDefinition;I.toHtml;var Wr=I.icon;I.layer;I.text;I.counter;function ne(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function Y(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ne(Object(e),!0).forEach(function(a){tt(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ne(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function jt(t){"@babel/helpers - typeof";return jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},jt(t)}function tt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Br(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function qr(t,n){if(t==null)return{};var e=Br(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function dn(t){return Gr(t)||Xr(t)||Qr(t)||Vr()}function Gr(t){if(Array.isArray(t))return vn(t)}function Xr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Qr(t,n){if(t){if(typeof t=="string")return vn(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return vn(t,n)}}function vn(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Vr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kr(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,l=t.spinReverse,u=t.pulse,v=t.fixedWidth,b=t.inverse,x=t.border,P=t.listItem,w=t.flip,S=t.size,k=t.rotation,A=t.pull,C=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":v,"fa-inverse":b,"fa-border":x,"fa-li":P,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},tt(n,"fa-".concat(S),typeof S<"u"&&S!==null),tt(n,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),tt(n,"fa-pull-".concat(A),typeof A<"u"&&A!==null),tt(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(C).map(function(E){return C[E]?E:null}).filter(function(E){return E})}function Jr(t){return t=t-0,t===t}function De(t){return Jr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Zr=["style"];function ti(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ni(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=De(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[ti(r)]=i:n[r]=i,n},{})}function je(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return je(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,c){var l=n.attributes[c];switch(c){case"class":f.attrs.className=l,delete n.attributes.class;break;case"style":f.attrs.style=ni(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[De(c)]=l}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=qr(e,Zr);return r.attrs.style=Y(Y({},r.attrs.style),o),t.apply(void 0,[n.tag,Y(Y({},r.attrs),s)].concat(dn(a)))}var $e=!1;try{$e=!0}catch{}function ei(){if(!$e&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ee(t){if(t&&jt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(mn.icon)return mn.icon(t);if(t===null)return null;if(t&&jt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Kt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?tt({},t,n):{}}var kt=Lt.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,c=ee(e),l=Kt("classes",[].concat(dn(Kr(t)),dn(i.split(" ")))),u=Kt("transform",typeof t.transform=="string"?mn.transform(t.transform):t.transform),v=Kt("mask",ee(a)),b=Wr(c,Y(Y(Y(Y({},l),u),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!b)return ei("Could not find icon",c),null;var x=b.abstract,P={ref:n};return Object.keys(t).forEach(function(w){kt.defaultProps.hasOwnProperty(w)||(P[w]=t[w])}),ai(x[0],P)});kt.displayName="FontAwesomeIcon";kt.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};kt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ai=je.bind(null,Lt.createElement);const ae={"multiple-choice":"Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts.","two-step":"In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer."},ri=it.div`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${ie.palette.mediumBlue};}
    .popover { display: flex; }
  }
`,ii=it.div`
  position: relative;
  display: flex;
`,oi=it.div`
  ${qe.popover}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`,Jt=t=>_(ri,{...t.wrapperProps,children:Rt(ii,{children:[t.children,Rt(oi,{className:"popover right",children:[_("div",{className:"arrow"}),_("div",{className:"content",children:t.text})]})]})}),si=it.div`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`,Zt=it(kt)`
  color: ${ie.palette.darkGray};
  height: 1em;
`,fi=({exercise:t,topicUrl:n,errataUrl:e})=>{const a=[],r=t.questions.every(o=>o.answers.length>0);let i;return r&&t.questions.find(o=>o.formats.includes("free-response"))?i=ae["two-step"]:r&&(i=ae["multiple-choice"]),n&&a.push(_(Jt,{text:"View topic in textbook",wrapperProps:{as:"a",href:n,target:"_blank"},children:_(Zt,{icon:fe.faBookOpen})},"topic")),a.push(_(Jt,{text:"Suggest a correction",wrapperProps:{as:"a",href:e,target:"_blank"},children:_(Zt,{icon:le.faTriangleExclamation})},"errata")),i&&a.push(_(Jt,{text:i,children:_(Zt,{icon:ce.faCircleInfo,height:"16px",width:"16px"})},"type")),_(si,{children:a})},li=it(Be)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`,ci=({exercise:t})=>Rt(We,{children:[t.context&&_(_n,{className:"step-card-body exercise-context",block:!0,html:t.context}),t.stimulus_html&&_(_n,{className:"step-card-body exercise-stimulus",block:!0,html:t.stimulus_html})]}),bi=({numberOfQuestions:t,questionNumber:n,step:e,exercise:a,show_all_feedback:r,scrollToQuestion:i,...o})=>{const s="feedback_html"in e,f=Lt.useRef([]);return Lt.useEffect(()=>{const c=i&&f.current[i];c&&ua(c)},[i,a]),Rt(li,{step:e,questionNumber:n,numberOfQuestions:s?t:a.questions.length,rightHeaderChildren:o.showExerciseIcons?_(fi,{exercise:a,topicUrl:o.topicUrl,errataUrl:o.errataUrl}):null,showTotalQuestions:s,children:[_(ci,{exercise:a}),a.questions.map((c,l)=>{var v;const u={...s?e:o.questionStates[c.id]};return He.createElement(Ge,{...o,...u,ref:b=>f.current[n+l]=b,exercise_uid:a.uid,key:c.id,question:c,questionNumber:n+l,choicesEnabled:u.canAnswer,displaySolution:!0,detailedSolution:(v=u.solution)==null?void 0:v.content_html,show_all_feedback:r,tableFeedbackEnabled:r&&!s,canUpdateCurrentStep:"canUpdateCurrentStep"in o?o.canUpdateCurrentStep:l+1!==a.questions.length})})]})};export{bi as E};
