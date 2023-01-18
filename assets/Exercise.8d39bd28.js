import{a as rn,p as b,R as Ft,s as st,j as E,r as Hn,F as Wn}from"./index.5cbceb37.js";import{T as Bn}from"./Card.fd29b348.js";import{C as Pe}from"./Feedback.b587c54d.js";import{c as on,m as qn}from"./theme.5c888d5f.js";import{E as Gn}from"./ExerciseQuestion.020b188b.js";var sn={};(function(t){t.linear=function(e){return e},t.inQuad=function(e){return e*e},t.outQuad=function(e){return e*(2-e)},t.inOutQuad=function(e){return e*=2,e<1?.5*e*e:-.5*(--e*(e-2)-1)},t.inCube=function(e){return e*e*e},t.outCube=function(e){return--e*e*e+1},t.inOutCube=function(e){return e*=2,e<1?.5*e*e*e:.5*((e-=2)*e*e+2)},t.inQuart=function(e){return e*e*e*e},t.outQuart=function(e){return 1- --e*e*e*e},t.inOutQuart=function(e){return e*=2,e<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},t.inQuint=function(e){return e*e*e*e*e},t.outQuint=function(e){return--e*e*e*e*e+1},t.inOutQuint=function(e){return e*=2,e<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},t.inSine=function(e){return 1-Math.cos(e*Math.PI/2)},t.outSine=function(e){return Math.sin(e*Math.PI/2)},t.inOutSine=function(e){return .5*(1-Math.cos(Math.PI*e))},t.inExpo=function(e){return e==0?0:Math.pow(1024,e-1)},t.outExpo=function(e){return e==1?e:1-Math.pow(2,-10*e)},t.inOutExpo=function(e){return e==0?0:e==1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)},t.inCirc=function(e){return 1-Math.sqrt(1-e*e)},t.outCirc=function(e){return Math.sqrt(1- --e*e)},t.inOutCirc=function(e){return e*=2,e<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},t.inBack=function(e){var n=1.70158;return e*e*((n+1)*e-n)},t.outBack=function(e){var n=1.70158;return--e*e*((n+1)*e+n)+1},t.inOutBack=function(e){var n=2.5949095;return(e*=2)<1?.5*(e*e*((n+1)*e-n)):.5*((e-=2)*e*((n+1)*e+n)+2)},t.inBounce=function(e){return 1-t.outBounce(1-e)},t.outBounce=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},t.inOutBounce=function(e){return e<.5?t.inBounce(e*2)*.5:t.outBounce(e*2-1)*.5+.5},t.inElastic=function(e){var n,a=.1,r=.4;return e===0?0:e===1?1:(!a||a<1?(a=1,n=r/4):n=r*Math.asin(1/a)/(2*Math.PI),-(a*Math.pow(2,10*(e-=1))*Math.sin((e-n)*(2*Math.PI)/r)))},t.outElastic=function(e){var n,a=.1,r=.4;return e===0?0:e===1?1:(!a||a<1?(a=1,n=r/4):n=r*Math.asin(1/a)/(2*Math.PI),a*Math.pow(2,-10*e)*Math.sin((e-n)*(2*Math.PI)/r)+1)},t.inOutElastic=function(e){var n,a=.1,r=.4;return e===0?0:e===1?1:(!a||a<1?(a=1,n=r/4):n=r*Math.asin(1/a)/(2*Math.PI),(e*=2)<1?-.5*(a*Math.pow(2,10*(e-=1))*Math.sin((e-n)*(2*Math.PI)/r)):a*Math.pow(2,-10*(e-=1))*Math.sin((e-n)*(2*Math.PI)/r)*.5+1)},t["in-quad"]=t.inQuad,t["out-quad"]=t.outQuad,t["in-out-quad"]=t.inOutQuad,t["in-cube"]=t.inCube,t["out-cube"]=t.outCube,t["in-out-cube"]=t.inOutCube,t["in-quart"]=t.inQuart,t["out-quart"]=t.outQuart,t["in-out-quart"]=t.inOutQuart,t["in-quint"]=t.inQuint,t["out-quint"]=t.outQuint,t["in-out-quint"]=t.inOutQuint,t["in-sine"]=t.inSine,t["out-sine"]=t.outSine,t["in-out-sine"]=t.inOutSine,t["in-expo"]=t.inExpo,t["out-expo"]=t.outExpo,t["in-out-expo"]=t.inOutExpo,t["in-circ"]=t.inCirc,t["out-circ"]=t.outCirc,t["in-out-circ"]=t.inOutCirc,t["in-back"]=t.inBack,t["out-back"]=t.outBack,t["in-out-back"]=t.inOutBack,t["in-bounce"]=t.inBounce,t["out-bounce"]=t.outBounce,t["in-out-bounce"]=t.inOutBounce,t["in-elastic"]=t.inElastic,t["out-elastic"]=t.outElastic,t["in-out-elastic"]=t.inOutElastic})(sn);var fn={exports:{}};(function(t){function e(a){if(a)return n(a)}function n(a){for(var r in e.prototype)a[r]=e.prototype[r];return a}e.prototype.on=e.prototype.addEventListener=function(a,r){return this._callbacks=this._callbacks||{},(this._callbacks["$"+a]=this._callbacks["$"+a]||[]).push(r),this},e.prototype.once=function(a,r){function i(){this.off(a,i),r.apply(this,arguments)}return i.fn=r,this.on(a,i),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(a,r){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var i=this._callbacks["$"+a];if(!i)return this;if(arguments.length==1)return delete this._callbacks["$"+a],this;for(var o,s=0;s<i.length;s++)if(o=i[s],o===r||o.fn===r){i.splice(s,1);break}return i.length===0&&delete this._callbacks["$"+a],this},e.prototype.emit=function(a){this._callbacks=this._callbacks||{};var r=[].slice.call(arguments,1),i=this._callbacks["$"+a];if(i){i=i.slice(0);for(var o=0,s=i.length;o<s;++o)i[o].apply(this,r)}return this},e.prototype.listeners=function(a){return this._callbacks=this._callbacks||{},this._callbacks["$"+a]||[]},e.prototype.hasListeners=function(a){return!!this.listeners(a).length},t.exports=e})(fn);var Xn=sn,Vn=fn.exports;function Qn(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function M(t){if(!(this instanceof M))return new M(t);this._from=t,this.ease("linear"),this.duration(500)}Vn(M.prototype);M.prototype.reset=function(){return this.isArray=Object.prototype.toString.call(this._from)==="[object Array]",this._curr=Qn({},this._from),this._done=!1,this._start=Date.now(),this};M.prototype.to=function(t){return this.reset(),this._to=t,this};M.prototype.duration=function(t){return this._duration=t,this};M.prototype.ease=function(t){if(t=typeof t=="function"?t:Xn[t],!t)throw new TypeError("invalid easing function");return this._ease=t,this};M.prototype.stop=function(){return this.stopped=!0,this._done=!0,this.emit("stop"),this.emit("end"),this};M.prototype.step=function(){if(!this._done){var t=this._duration,e=Date.now(),n=e-this._start,a=n>=t;if(a)return this._from=this._to,this._update(this._to),this._done=!0,this.emit("end"),this;var r=this._from,i=this._to,o=this._curr,s=this._ease,f=(e-this._start)/t,u=s(f);if(this.isArray){for(var l=0;l<r.length;++l)o[l]=r[l]+(i[l]-r[l])*u;return this._update(o),this}for(var c in r)o[c]=r[c]+(i[c]-r[c])*u;return this._update(o),this}};M.prototype.update=function(t){return arguments.length==0?this.step():(this._update=t,this)};var Kn=M,Yt={exports:{}},ut={exports:{}};(function(){var t,e,n,a,r,i;typeof performance<"u"&&performance!==null&&performance.now?ut.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(ut.exports=function(){return(t()-r)/1e6},e=process.hrtime,t=function(){var o;return o=e(),o[0]*1e9+o[1]},a=t(),i=process.uptime()*1e9,r=a-i):Date.now?(ut.exports=function(){return Date.now()-n},n=Date.now()):(ut.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(rn);var Jn=ut.exports,R=typeof window>"u"?rn:window,Ot=["moz","webkit"],at="AnimationFrame",it=R["request"+at],vt=R["cancel"+at]||R["cancelRequest"+at];for(var lt=0;!it&&lt<Ot.length;lt++)it=R[Ot[lt]+"Request"+at],vt=R[Ot[lt]+"Cancel"+at]||R[Ot[lt]+"CancelRequest"+at];if(!it||!vt){var Gt=0,_e=0,X=[],Zn=1e3/60;it=function(t){if(X.length===0){var e=Jn(),n=Math.max(0,Zn-(e-Gt));Gt=n+e,setTimeout(function(){var a=X.slice(0);X.length=0;for(var r=0;r<a.length;r++)if(!a[r].cancelled)try{a[r].callback(Gt)}catch(i){setTimeout(function(){throw i},0)}},Math.round(n))}return X.push({handle:++_e,callback:t,cancelled:!1}),_e},vt=function(t){for(var e=0;e<X.length;e++)X[e].handle===t&&(X[e].cancelled=!0)}}Yt.exports=function(t){return it.call(R,t)};Yt.exports.cancel=function(){vt.apply(R,arguments)};Yt.exports.polyfill=function(t){t||(t=R),t.requestAnimationFrame=it,t.cancelAnimationFrame=vt};var ta=Kn,ea=Yt.exports;function na(){var t=window.pageYOffset||document.documentElement.scrollTop,e=window.pageXOffset||document.documentElement.scrollLeft;return{top:t,left:e}}function aa(t,e,n){n=n||{};var a=na(),r=ta(a).ease(n.ease||"out-circ").to({top:e,left:t}).duration(n.duration||1e3);r.update(function(o){window.scrollTo(o.left|0,o.top|0)}),r.on("end",function(){i=function(){}});function i(){ea(i),r.update()}return i(),r}var ra=aa,ia=ra;function oa(t,e,n){var a=document.body,r=document.documentElement,i=t.getBoundingClientRect(),o=r.clientHeight,s=Math.max(a.scrollHeight,a.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight);e=e||0;var f;n==="bottom"?f=i.bottom-o:n==="middle"?f=i.bottom-o/2-i.height/2:f=i.top;var u=s-o;return Math.min(f+e+window.pageYOffset,u)}var sa=function(t,e){if(e=e||{},typeof t=="string"&&(t=document.querySelector(t)),t)return ia(0,oa(t,e.offset,e.align),e)},ln={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="book-open",a=576,r=512,i=[128214,128366],o="f518",s="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C87.5 32 35.1 48.6 9 59.9c-5.6 2.4-9 8-9 14V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V73.9c0-6.1-3.4-11.6-9-14C540.9 48.6 488.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faBookOpen=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(ln);var un={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="triangle-exclamation",a=512,r=512,i=[9888,"exclamation-triangle","warning"],o="f071",s="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faTriangleExclamation=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(un);var cn={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="circle-info",a=512,r=512,i=["info-circle"],o="f05a",s="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faCircleInfo=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(cn);function Ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ce(Object(n),!0).forEach(function(a){O(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function zt(t){return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zt(t)}function fa(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ie(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function la(t,e,n){return e&&Ie(t.prototype,e),n&&Ie(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function be(t,e){return ca(t)||da(t,e)||mn(t,e)||ba()}function wt(t){return ua(t)||ma(t)||mn(t)||va()}function ua(t){if(Array.isArray(t))return ee(t)}function ca(t){if(Array.isArray(t))return t}function ma(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function da(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function mn(t,e){if(!!t){if(typeof t=="string")return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function va(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ba(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Te=function(){},pe={},dn={},vn=null,bn={mark:Te,measure:Te};try{typeof window<"u"&&(pe=window),typeof document<"u"&&(dn=document),typeof MutationObserver<"u"&&(vn=MutationObserver),typeof performance<"u"&&(bn=performance)}catch{}var pa=pe.navigator||{},Me=pa.userAgent,Le=Me===void 0?"":Me,H=pe,g=dn,Re=vn,Nt=bn;H.document;var j=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",pn=~Le.indexOf("MSIE")||~Le.indexOf("Trident/"),Et,St,Pt,_t,Ct,F="___FONT_AWESOME___",ne=16,hn="fa",gn="svg-inline--fa",K="data-fa-i2svg",ae="data-fa-pseudo-element",ha="data-fa-pseudo-element-pending",he="data-prefix",ge="data-icon",Fe="fontawesome-i2svg",ga="async",ya=["HTML","HEAD","STYLE","SCRIPT"],yn=function(){try{return!1}catch{return!1}}(),h="classic",y="sharp",ye=[h,y];function kt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[h]}})}var bt=kt((Et={},O(Et,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(Et,y,{fa:"solid",fass:"solid","fa-solid":"solid"}),Et)),pt=kt((St={},O(St,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(St,y,{solid:"fass"}),St)),ht=kt((Pt={},O(Pt,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(Pt,y,{fass:"fa-solid"}),Pt)),wa=kt((_t={},O(_t,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(_t,y,{"fa-solid":"fass"}),_t)),ka=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,wn="fa-layers-text",xa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Aa=kt((Ct={},O(Ct,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(Ct,y,{900:"fass"}),Ct)),kn=[1,2,3,4,5,6,7,8,9,10],Oa=kn.concat([11,12,13,14,15,16,17,18,19,20]),Na=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gt=new Set;Object.keys(pt[h]).map(gt.add.bind(gt));Object.keys(pt[y]).map(gt.add.bind(gt));var Ea=[].concat(ye,wt(gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(kn.map(function(t){return"".concat(t,"x")})).concat(Oa.map(function(t){return"w-".concat(t)})),mt=H.FontAwesomeConfig||{};function Sa(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Pa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(g&&typeof g.querySelector=="function"){var _a=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_a.forEach(function(t){var e=be(t,2),n=e[0],a=e[1],r=Pa(Sa(n));r!=null&&(mt[a]=r)})}var xn={styleDefault:"solid",familyDefault:"classic",cssPrefix:hn,replacementClass:gn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mt.familyPrefix&&(mt.cssPrefix=mt.familyPrefix);var ot=m(m({},xn),mt);ot.autoReplaceSvg||(ot.observeMutations=!1);var d={};Object.keys(xn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){ot[t]=n,dt.forEach(function(a){return a(d)})},get:function(){return ot[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){ot.cssPrefix=e,dt.forEach(function(n){return n(d)})},get:function(){return ot.cssPrefix}});H.FontAwesomeConfig=d;var dt=[];function Ca(t){return dt.push(t),function(){dt.splice(dt.indexOf(t),1)}}var Y=ne,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ia(t){if(!(!t||!j)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=g.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(e,a),t}}var Ta="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yt(){for(var t=12,e="";t-- >0;)e+=Ta[Math.random()*62|0];return e}function ft(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function we(t){return t.classList?ft(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function An(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ma(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(An(t[n]),'" ')},"").trim()}function Ut(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ke(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function La(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Ra(t){var e=t.transform,n=t.width,a=n===void 0?ne:n,r=t.height,i=r===void 0?ne:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&pn?f+="translate(".concat(e.x/Y-a/2,"em, ").concat(e.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/Y,"em), calc(-50% + ").concat(e.y/Y,"em)) "):f+="translate(".concat(e.x/Y,"em, ").concat(e.y/Y,"em) "),f+="scale(".concat(e.size/Y*(e.flipX?-1:1),", ").concat(e.size/Y*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Fa=`:root, :host {
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
}`;function On(){var t=hn,e=gn,n=d.cssPrefix,a=d.replacementClass,r=Fa;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ze=!1;function Xt(){d.autoAddCss&&!ze&&(Ia(On()),ze=!0)}var za={mixout:function(){return{dom:{css:On,insertCss:Xt}}},hooks:function(){return{beforeDOMElementCreation:function(){Xt()},beforeI2svg:function(){Xt()}}}},z=H||{};z[F]||(z[F]={});z[F].styles||(z[F].styles={});z[F].hooks||(z[F].hooks={});z[F].shims||(z[F].shims=[]);var T=z[F],Nn=[],Da=function t(){g.removeEventListener("DOMContentLoaded",t),Dt=1,Nn.map(function(e){return e()})},Dt=!1;j&&(Dt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),Dt||g.addEventListener("DOMContentLoaded",Da));function ja(t){!j||(Dt?setTimeout(t,0):Nn.push(t))}function xt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?An(t):"<".concat(e," ").concat(Ma(a),">").concat(i.map(xt).join(""),"</").concat(e,">")}function De(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var $a=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Vt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?$a(n,r):n,f,u,l;for(a===void 0?(f=1,l=e[i[0]]):(f=0,l=a);f<o;f++)u=i[f],l=s(l,e[u],u,e);return l};function Ya(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function re(t){var e=Ya(t);return e.length===1?e[0].toString(16):null}function Ua(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function je(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function ie(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=je(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,je(e)):T.styles[t]=m(m({},T.styles[t]||{}),i),t==="fas"&&ie("fa",e)}var It,Tt,Mt,Z=T.styles,Ha=T.shims,Wa=(It={},O(It,h,Object.values(ht[h])),O(It,y,Object.values(ht[y])),It),xe=null,En={},Sn={},Pn={},_n={},Cn={},Ba=(Tt={},O(Tt,h,Object.keys(bt[h])),O(Tt,y,Object.keys(bt[y])),Tt);function qa(t){return~Ea.indexOf(t)}function Ga(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!qa(r)?r:null}var In=function(){var e=function(i){return Vt(Z,function(o,s,f){return o[f]=Vt(s,i,{}),o},{})};En=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Sn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Cn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in Z||d.autoFetchSvg,a=Vt(Ha,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Pn=a.names,_n=a.unicodes,xe=Ht(d.styleDefault,{family:d.familyDefault})};Ca(function(t){xe=Ht(t.styleDefault,{family:d.familyDefault})});In();function Ae(t,e){return(En[t]||{})[e]}function Xa(t,e){return(Sn[t]||{})[e]}function Q(t,e){return(Cn[t]||{})[e]}function Tn(t){return Pn[t]||{prefix:null,iconName:null}}function Va(t){var e=_n[t],n=Ae("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return xe}var Oe=function(){return{prefix:null,iconName:null,rest:[]}};function Ht(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?h:n,r=bt[a][t],i=pt[a][t]||pt[a][r],o=t in T.styles?t:null;return i||o||null}var $e=(Mt={},O(Mt,h,Object.keys(ht[h])),O(Mt,y,Object.keys(ht[y])),Mt);function Wt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},O(e,h,"".concat(d.cssPrefix,"-").concat(h)),O(e,y,"".concat(d.cssPrefix,"-").concat(y)),e),o=null,s=h;(t.includes(i[h])||t.some(function(u){return $e[h].includes(u)}))&&(s=h),(t.includes(i[y])||t.some(function(u){return $e[y].includes(u)}))&&(s=y);var f=t.reduce(function(u,l){var c=Ga(d.cssPrefix,l);if(Z[l]?(l=Wa[s].includes(l)?wa[s][l]:l,o=l,u.prefix=l):Ba[s].indexOf(l)>-1?(o=l,u.prefix=Ht(l,{family:s})):c?u.iconName=c:l!==d.replacementClass&&l!==i[h]&&l!==i[y]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var v=o==="fa"?Tn(u.iconName):{},p=Q(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||p||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!Z.far&&Z.fas&&!d.autoFetchSvg&&(u.prefix="fas")}return u},Oe());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(Z.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=Q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var Qa=function(){function t(){fa(this,t),this.definitions={}}return la(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),ie(s,o[s]);var f=ht[h][s];f&&ie(f,o[s]),In()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,l=u[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(c){typeof c=="string"&&(n[s][c]=u)}),n[s][f]=u}),n}}]),t}(),Ye=[],tt={},rt={},Ka=Object.keys(rt);function Ja(t,e){var n=e.mixoutsTo;return Ye=t,tt={},Object.keys(rt).forEach(function(a){Ka.indexOf(a)===-1&&delete rt[a]}),Ye.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),zt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){tt[o]||(tt[o]=[]),tt[o].push(i[o])})}a.provides&&a.provides(rt)}),n}function oe(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=tt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function J(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=tt[t]||[];r.forEach(function(i){i.apply(null,n)})}function D(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return rt[t]?rt[t].apply(null,e):void 0}function se(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||W();if(!!e)return e=Q(n,e)||e,De(Mn.definitions,n,e)||De(T.styles,n,e)}var Mn=new Qa,Za=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,J("noAuto")},tr={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(J("beforeI2svg",e),D("pseudoElements2svg",e),D("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ja(function(){nr({autoReplaceSvgRoot:n}),J("watch",e)})}},er={icon:function(e){if(e===null)return null;if(zt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Ht(e[0]);return{prefix:a,iconName:Q(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(ka))){var r=Wt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:Q(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=W();return{prefix:i,iconName:Q(i,e)||e}}}},C={noAuto:Za,config:d,dom:tr,parse:er,library:Mn,findIconDefinition:se,toHtml:xt},nr=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?g:n;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&j&&d.autoReplaceSvg&&C.dom.i2svg({node:a})};function Bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return xt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!j){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ar(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ke(o)&&n.found&&!a.found){var s=n.width,f=n.height,u={x:s/f/2,y:.5};r.style=Ut(m(m({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function rr(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function Ne(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,l=t.titleId,c=t.extra,v=t.watchable,p=v===void 0?!1:v,x=a.found?a:n,S=x.width,w=x.height,P=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function($){return c.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(c.classes).join(" "),A={children:[],attributes:m(m({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(w)})},_=P&&!~c.classes.indexOf("fa-fw")?{width:"".concat(S/w*16*.0625,"em")}:{};p&&(A.attributes[K]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||yt())},children:[f]}),delete A.attributes.title);var N=m(m({},A),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:m(m({},_),c.styles)}),q=a.found&&n.found?D("generateAbstractMask",N)||{children:[],attributes:{}}:D("generateAbstractIcon",N)||{children:[],attributes:{}},G=q.children,qt=q.attributes;return N.children=G,N.attributes=qt,s?rr(N):ar(N)}function Ue(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[K]="");var l=m({},o.styles);ke(r)&&(l.transform=Ra({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var c=Ut(l);c.length>0&&(u.style=c);var v=[];return v.push({tag:"span",attributes:u,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function ir(t){var e=t.content,n=t.title,a=t.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ut(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Qt=T.styles;function fe(t){var e=t[0],n=t[1],a=t.slice(4),r=be(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var or={found:!1,width:512,height:512};function sr(t,e){!yn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function le(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=W()),new Promise(function(a,r){if(D("missingIconAbstract"),n==="fa"){var i=Tn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Qt[e]&&Qt[e][t]){var o=Qt[e][t];return a(fe(o))}sr(t,e),a(m(m({},or),{},{icon:d.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}var He=function(){},ue=d.measurePerformance&&Nt&&Nt.mark&&Nt.measure?Nt:{mark:He,measure:He},ct='FA "6.2.0"',fr=function(e){return ue.mark("".concat(ct," ").concat(e," begins")),function(){return Ln(e)}},Ln=function(e){ue.mark("".concat(ct," ").concat(e," ends")),ue.measure("".concat(ct," ").concat(e),"".concat(ct," ").concat(e," begins"),"".concat(ct," ").concat(e," ends"))},Ee={begin:fr,end:Ln},Lt=function(){};function We(t){var e=t.getAttribute?t.getAttribute(K):null;return typeof e=="string"}function lr(t){var e=t.getAttribute?t.getAttribute(he):null,n=t.getAttribute?t.getAttribute(ge):null;return e&&n}function ur(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function cr(){if(d.autoReplaceSvg===!0)return Rt.replace;var t=Rt[d.autoReplaceSvg];return t||Rt.replace}function mr(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function dr(t){return g.createElement(t)}function Rn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?mr:dr:n;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Rn(o,{ceFn:a}))}),r}function vr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Rt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Rn(r),n)}),n.getAttribute(K)===null&&d.keepOriginalSource){var a=g.createComment(vr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~we(n).indexOf(d.replacementClass))return Rt.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return xt(s)}).join(`
`);n.setAttribute(K,""),n.innerHTML=o}};function Be(t){t()}function Fn(t,e){var n=typeof e=="function"?e:Lt;if(t.length===0)n();else{var a=Be;d.mutateApproach===ga&&(a=H.requestAnimationFrame||Be),a(function(){var r=cr(),i=Ee.begin("mutate");t.map(r),i(),n()})}}var Se=!1;function zn(){Se=!0}function ce(){Se=!1}var jt=null;function qe(t){if(!!Re&&!!d.observeMutations){var e=t.treeCallback,n=e===void 0?Lt:e,a=t.nodeCallback,r=a===void 0?Lt:a,i=t.pseudoElementsCallback,o=i===void 0?Lt:i,s=t.observeMutationsRoot,f=s===void 0?g:s;jt=new Re(function(u){if(!Se){var l=W();ft(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!We(c.addedNodes[0])&&(d.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&We(c.target)&&~Na.indexOf(c.attributeName))if(c.attributeName==="class"&&lr(c.target)){var v=Wt(we(c.target)),p=v.prefix,x=v.iconName;c.target.setAttribute(he,p||l),x&&c.target.setAttribute(ge,x)}else ur(c.target)&&r(c.target)})}}),j&&jt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function br(){!jt||jt.disconnect()}function pr(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function hr(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Wt(we(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Xa(r.prefix,t.innerText)||Ae(r.prefix,re(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function gr(t){var e=ft(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||yt()):(e["aria-hidden"]="true",e.focusable="false")),e}function yr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ge(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hr(t),a=n.iconName,r=n.prefix,i=n.rest,o=gr(t),s=oe("parseNodeAttributes",{},t),f=e.styleParser?pr(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var wr=T.styles;function Dn(t){var e=d.autoReplaceSvg==="nest"?Ge(t,{styleParser:!1}):Ge(t);return~e.extra.classes.indexOf(wn)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}var B=new Set;ye.map(function(t){B.add("fa-".concat(t))});Object.keys(bt[h]).map(B.add.bind(B));Object.keys(bt[y]).map(B.add.bind(B));B=wt(B);function Xe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var n=g.documentElement.classList,a=function(c){return n.add("".concat(Fe,"-").concat(c))},r=function(c){return n.remove("".concat(Fe,"-").concat(c))},i=d.autoFetchSvg?B:ye.map(function(l){return"fa-".concat(l)}).concat(Object.keys(wr));i.includes("fa")||i.push("fa");var o=[".".concat(wn,":not([").concat(K,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ft(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Ee.begin("onTree"),u=s.reduce(function(l,c){try{var v=Dn(c);v&&l.push(v)}catch(p){yn||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,c){Promise.all(u).then(function(v){Fn(v,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),l()})}).catch(function(v){f(),c(v)})})}function kr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dn(t).then(function(n){n&&Fn([n],e)})}function xr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:se(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:se(r||{})),t(a,m(m({},n),{},{mask:r}))}}var Ar=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?L:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,u=n.maskId,l=u===void 0?null:u,c=n.title,v=c===void 0?null:c,p=n.titleId,x=p===void 0?null:p,S=n.classes,w=S===void 0?[]:S,P=n.attributes,k=P===void 0?{}:P,A=n.styles,_=A===void 0?{}:A;if(!!e){var N=e.prefix,q=e.iconName,G=e.icon;return Bt(m({type:"icon"},e),function(){return J("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(v?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||yt()):(k["aria-hidden"]="true",k.focusable="false")),Ne({icons:{main:fe(G),mask:f?fe(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:q,transform:m(m({},L),r),symbol:o,title:v,maskId:l,titleId:x,extra:{attributes:k,styles:_,classes:w}})})}},Or={mixout:function(){return{icon:xr(Ar)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xe,n.nodeCallback=kr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?g:a,i=n.callback,o=i===void 0?function(){}:i;return Xe(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,l=a.mask,c=a.maskId,v=a.extra;return new Promise(function(p,x){Promise.all([le(r,s),l.iconName?le(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var w=be(S,2),P=w[0],k=w[1];p([n,Ne({icons:{main:P,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:c,title:i,titleId:o,extra:v,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Ut(s);f.length>0&&(r.style=f);var u;return ke(o)&&(u=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Nr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Bt({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(wt(i)).join(" ")},children:o}]})}}}},Er={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,l=a.styles,c=l===void 0?{}:l;return Bt({type:"counter",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),ir({content:n.toString(),title:i,extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(wt(s))}})})}}}},Sr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,u=f===void 0?[]:f,l=a.attributes,c=l===void 0?{}:l,v=a.styles,p=v===void 0?{}:v;return Bt({type:"text",content:n},function(){return J("beforeDOMElementCreation",{content:n,params:a}),Ue({content:n,transform:m(m({},L),i),title:s,extra:{attributes:c,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(wt(u))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(pn){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/u,f=l.height/u}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ue({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Pr=new RegExp('"',"ug"),Ve=[1105920,1112319];function _r(t){var e=t.replace(Pr,""),n=Ua(e,0),a=n>=Ve[0]&&n<=Ve[1],r=e.length===2?e[0]===e[1]:!1;return{value:re(r?e[0]:e),isSecondary:a||r}}function Qe(t,e){var n="".concat(ha).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=ft(t.children),o=i.filter(function(G){return G.getAttribute(ae)===e})[0],s=H.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(xa),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var c=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?y:h,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?pt[v][f[2].toLowerCase()]:Aa[v][u],x=_r(c),S=x.value,w=x.isSecondary,P=f[0].startsWith("FontAwesome"),k=Ae(p,S),A=k;if(P){var _=Va(S);_.iconName&&_.prefix&&(k=_.iconName,p=_.prefix)}if(k&&!w&&(!o||o.getAttribute(he)!==p||o.getAttribute(ge)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);var N=yr(),q=N.extra;q.attributes[ae]=e,le(k,p).then(function(G){var qt=Ne(m(m({},N),{},{icons:{main:G,mask:Oe()},prefix:p,iconName:A,extra:q,watchable:!0})),$=g.createElement("svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=qt.map(function(Un){return xt(Un)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Cr(t){return Promise.all([Qe(t,"::before"),Qe(t,"::after")])}function Ir(t){return t.parentNode!==document.head&&!~ya.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ae)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ke(t){if(!!j)return new Promise(function(e,n){var a=ft(t.querySelectorAll("*")).filter(Ir).map(Cr),r=Ee.begin("searchPseudoElements");zn(),Promise.all(a).then(function(){r(),ce(),e()}).catch(function(){r(),ce(),n()})})}var Tr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ke,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?g:a;d.searchPseudoElements&&Ke(r)}}},Je=!1,Mr={mixout:function(){return{dom:{unwatch:function(){zn(),Je=!0}}}},hooks:function(){return{bootstrap:function(){qe(oe("mutationObserverCallbacks",{}))},noAuto:function(){br()},watch:function(n){var a=n.observeMutationsRoot;Je?ce():qe(oe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ze=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Lr={mixout:function(){return{parse:{transform:function(n){return Ze(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ze(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(f," ").concat(u," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:c,path:v};return{tag:"g",attributes:m({},p.outer),children:[{tag:"g",attributes:m({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),p.path)}]}]}}}},Kt={x:0,y:0,width:"100%",height:"100%"};function tn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Rr(t){return t.tag==="g"?t.children:[t]}var Fr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Wt(r.split(" ").map(function(o){return o.trim()})):Oe();return i.prefix||(i.prefix=W()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,u=i.width,l=i.icon,c=o.width,v=o.icon,p=La({transform:f,containerWidth:c,iconWidth:u}),x={tag:"rect",attributes:m(m({},Kt),{},{fill:"white"})},S=l.children?{children:l.children.map(tn)}:{},w={tag:"g",attributes:m({},p.inner),children:[tn(m({tag:l.tag,attributes:m(m({},l.attributes),p.path)},S))]},P={tag:"g",attributes:m({},p.outer),children:[w]},k="mask-".concat(s||yt()),A="clip-".concat(s||yt()),_={tag:"mask",attributes:m(m({},Kt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,P]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Rr(v)},_]};return a.push(N,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(k,")")},Kt)}),{children:a,attributes:r}}}},zr={provides:function(e){var n=!1;H.matchMedia&&(n=H.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Dr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},jr=[za,Or,Nr,Er,Sr,Tr,Mr,Lr,Fr,zr,Dr];Ja(jr,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;var me=C.parse;C.findIconDefinition;C.toHtml;var $r=C.icon;C.layer;C.text;C.counter;function en(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?en(Object(n),!0).forEach(function(a){et(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):en(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function $t(t){return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t(t)}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Yr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ur(t,e){if(t==null)return{};var n=Yr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(n[a]=t[a]))}return n}function de(t){return Hr(t)||Wr(t)||Br(t)||qr()}function Hr(t){if(Array.isArray(t))return ve(t)}function Wr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Br(t,e){if(!!t){if(typeof t=="string")return ve(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ve(t,e)}}function ve(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function qr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,u=t.spinPulse,l=t.spinReverse,c=t.pulse,v=t.fixedWidth,p=t.inverse,x=t.border,S=t.listItem,w=t.flip,P=t.size,k=t.rotation,A=t.pull,_=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":v,"fa-inverse":p,"fa-border":x,"fa-li":S,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},et(e,"fa-".concat(P),typeof P<"u"&&P!==null),et(e,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),et(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),et(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(N){return _[N]?N:null}).filter(function(N){return N})}function Xr(t){return t=t-0,t===t}function jn(t){return Xr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Vr=["style"];function Qr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Kr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=jn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Qr(r)]=i:e[r]=i,e},{})}function $n(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return $n(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,u){var l=e.attributes[u];switch(u){case"class":f.attrs.className=l,delete e.attributes.class;break;case"style":f.attrs.style=Kr(l);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?f.attrs[u.toLowerCase()]=l:f.attrs[jn(u)]=l}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Ur(n,Vr);return r.attrs.style=U(U({},r.attrs.style),o),t.apply(void 0,[e.tag,U(U({},r.attrs),s)].concat(de(a)))}var Yn=!1;try{Yn=!1}catch{}function Jr(){if(!Yn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function nn(t){if(t&&$t(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(me.icon)return me.icon(t);if(t===null)return null;if(t&&$t(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Jt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?et({},t,e):{}}var At=Ft.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,u=nn(n),l=Jt("classes",[].concat(de(Gr(t)),de(i.split(" ")))),c=Jt("transform",typeof t.transform=="string"?me.transform(t.transform):t.transform),v=Jt("mask",nn(a)),p=$r(u,U(U(U(U({},l),c),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!p)return Jr("Could not find icon",u),null;var x=p.abstract,S={ref:e};return Object.keys(t).forEach(function(w){At.defaultProps.hasOwnProperty(w)||(S[w]=t[w])}),Zr(x[0],S)});At.displayName="FontAwesomeIcon";At.propTypes={beat:b.exports.bool,border:b.exports.bool,beatFade:b.exports.bool,bounce:b.exports.bool,className:b.exports.string,fade:b.exports.bool,flash:b.exports.bool,mask:b.exports.oneOfType([b.exports.object,b.exports.array,b.exports.string]),maskId:b.exports.string,fixedWidth:b.exports.bool,inverse:b.exports.bool,flip:b.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.exports.oneOfType([b.exports.object,b.exports.array,b.exports.string]),listItem:b.exports.bool,pull:b.exports.oneOf(["right","left"]),pulse:b.exports.bool,rotation:b.exports.oneOf([0,90,180,270]),shake:b.exports.bool,size:b.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.exports.bool,spinPulse:b.exports.bool,spinReverse:b.exports.bool,symbol:b.exports.oneOfType([b.exports.bool,b.exports.string]),title:b.exports.string,titleId:b.exports.string,transform:b.exports.oneOfType([b.exports.string,b.exports.object]),swapOpacity:b.exports.bool};At.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Zr=$n.bind(null,Ft.createElement),I="/home/runner/work/assessment-components/assessment-components/src/components/ExerciseIcons.tsx";const an={"multiple-choice":"Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts.","two-step":"In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. Recalling the answer to a question from memory helps you to retain things longer."},ti=st.div`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${on.palette.mediumBlue};}
    .popover { display: flex; }
  }
`,ei=st.div`
  position: relative;
  display: flex;
`,ni=st.div`
  ${qn.popover}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`,Zt=t=>E(ti,{...t.wrapperProps,children:E(ei,{children:[t.children,E(ni,{className:"popover right",children:[E("div",{className:"arrow"},void 0,!1,{fileName:I,lineNumber:55,columnNumber:9},void 0),E("div",{className:"content",children:t.text},void 0,!1,{fileName:I,lineNumber:56,columnNumber:9},void 0)]},void 0,!0,{fileName:I,lineNumber:54,columnNumber:7},void 0)]},void 0,!0,{fileName:I,lineNumber:52,columnNumber:5},void 0)},void 0,!1,{fileName:I,lineNumber:51,columnNumber:3},void 0),ai=st.div`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`,te=st(At)`
  color: ${on.palette.darkGray};
  height: 1em;
`,ri=({exercise:t,topicUrl:e,errataUrl:n})=>{const a=[],r=t.questions.every(o=>o.answers.length>0);let i;return r&&t.questions.find(o=>o.formats.includes("free-response"))?i=an["two-step"]:r&&(i=an["multiple-choice"]),e&&a.push(E(Zt,{text:"View topic in textbook",wrapperProps:{as:"a",href:e,target:"_blank"},children:E(te,{icon:ln.faBookOpen},void 0,!1,{fileName:I,lineNumber:88,columnNumber:9},void 0)},"topic",!1,{fileName:I,lineNumber:87,columnNumber:7},void 0)),a.push(E(Zt,{text:"Suggest a correction",wrapperProps:{as:"a",href:n,target:"_blank"},children:E(te,{icon:un.faTriangleExclamation},void 0,!1,{fileName:I,lineNumber:95,columnNumber:7},void 0)},"errata",!1,{fileName:I,lineNumber:94,columnNumber:5},void 0)),i&&a.push(E(Zt,{text:i,children:E(te,{icon:cn.faCircleInfo,height:"16px",width:"16px"},void 0,!1,{fileName:I,lineNumber:102,columnNumber:9},void 0)},"type",!1,{fileName:I,lineNumber:101,columnNumber:7},void 0)),E(ai,{children:a},void 0,!1,{fileName:I,lineNumber:108,columnNumber:5},void 0)};var nt="/home/runner/work/assessment-components/assessment-components/src/components/Exercise.tsx";const ii=st(Bn)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`,oi=({exercise:t})=>E(Wn,{children:[t.context&&E(Pe,{className:"step-card-body exercise-context",block:!0,html:t.context},void 0,!1,{fileName:nt,lineNumber:19,columnNumber:9},void 0),t.stimulus_html&&E(Pe,{className:"step-card-body exercise-stimulus",block:!0,html:t.stimulus_html},void 0,!1,{fileName:nt,lineNumber:23,columnNumber:9},void 0)]},void 0,!0),mi=({numberOfQuestions:t,questionNumber:e,step:n,exercise:a,show_all_feedback:r,scrollToQuestion:i,...o})=>{const s="feedback_html"in n,f=Ft.useRef([]);return Ft.useEffect(()=>{const u=i&&f.current[i];u&&sa(u)},[i,a]),E(ii,{step:n,questionNumber:e,numberOfQuestions:s?t:a.questions.length,rightHeaderChildren:o.showExerciseIcons?E(ri,{exercise:a,topicUrl:o.topicUrl,errataUrl:o.errataUrl},void 0,!1,{fileName:nt,lineNumber:94,columnNumber:7},void 0):null,showTotalQuestions:s,children:[E(oi,{exercise:a},void 0,!1,{fileName:nt,lineNumber:97,columnNumber:5},void 0),a.questions.map((u,l)=>{var v;const c={...s?n:o.questionStates[u.id]};return Hn.exports.createElement(Gn,{...o,...c,ref:p=>f.current[e+l]=p,exercise_uid:a.uid,key:u.id,question:u,questionNumber:e+l,choicesEnabled:c.canAnswer,displaySolution:!0,detailedSolution:(v=c.solution)==null?void 0:v.content_html,show_all_feedback:r,tableFeedbackEnabled:r&&!s,canUpdateCurrentStep:"canUpdateCurrentStep"in o?o.canUpdateCurrentStep:l+1!==a.questions.length,__self:void 0,__source:{fileName:nt,lineNumber:102,columnNumber:9}})})]},void 0,!0,{fileName:nt,lineNumber:89,columnNumber:11},void 0)};export{mi as E};
