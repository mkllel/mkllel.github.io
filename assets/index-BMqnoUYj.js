const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DmyKzC6Q.js","assets/portfolioContent-C-2c3J9Y.js","assets/usePageMetadata-o-W47Yp7.js","assets/Portfolio-g2FmFNdO.js","assets/image-off-BEvjR_h_.js","assets/PortfolioDetail-Dmd2H4hF.js","assets/Blog-rmFmRB8y.js","assets/blogContent-DsJ4bbJY.js","assets/dateUtils-DqFCE-Pv.js","assets/BlogDetail-CExArYEZ.js","assets/index-BQUHx6Dp.js","assets/AdminRoute-B6TsUpW4.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Jp={exports:{}},xu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GT;function vC(){if(GT)return xu;GT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:n,type:r,key:c,ref:a!==void 0?a:null,props:l}}return xu.Fragment=e,xu.jsx=t,xu.jsxs=t,xu}var KT;function EC(){return KT||(KT=1,Jp.exports=vC()),Jp.exports}var re=EC(),eg={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T;function TC(){if($T)return Ce;$T=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function A(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,G={};function L(N,ne,he){this.props=N,this.context=ne,this.refs=G,this.updater=he||R}L.prototype.isReactComponent={},L.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},L.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function Y(){}Y.prototype=L.prototype;function te(N,ne,he){this.props=N,this.context=ne,this.refs=G,this.updater=he||R}var Q=te.prototype=new Y;Q.constructor=te,O(Q,L.prototype),Q.isPureReactComponent=!0;var oe=Array.isArray,le={H:null,A:null,T:null,S:null,V:null},pe=Object.prototype.hasOwnProperty;function x(N,ne,he,se,Ee,Oe){return he=Oe.ref,{$$typeof:n,type:N,key:ne,ref:he!==void 0?he:null,props:Oe}}function I(N,ne){return x(N.type,ne,void 0,void 0,void 0,N.props)}function S(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function P(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(he){return ne[he]})}var k=/\/+/g;function U(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?P(""+N.key):ne.toString(36)}function D(){}function Ht(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(D,D):(N.status="pending",N.then(function(ne){N.status==="pending"&&(N.status="fulfilled",N.value=ne)},function(ne){N.status==="pending"&&(N.status="rejected",N.reason=ne)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function dt(N,ne,he,se,Ee){var Oe=typeof N;(Oe==="undefined"||Oe==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(Oe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case n:case e:Se=!0;break;case y:return Se=N._init,dt(Se(N._payload),ne,he,se,Ee)}}if(Se)return Ee=Ee(N),Se=se===""?"."+U(N,0):se,oe(Ee)?(he="",Se!=null&&(he=Se.replace(k,"$&/")+"/"),dt(Ee,ne,he,"",function(pi){return pi})):Ee!=null&&(S(Ee)&&(Ee=I(Ee,he+(Ee.key==null||N&&N.key===Ee.key?"":(""+Ee.key).replace(k,"$&/")+"/")+Se)),ne.push(Ee)),1;Se=0;var Mt=se===""?".":se+":";if(oe(N))for(var it=0;it<N.length;it++)se=N[it],Oe=Mt+U(se,it),Se+=dt(se,ne,he,Oe,Ee);else if(it=A(N),typeof it=="function")for(N=it.call(N),it=0;!(se=N.next()).done;)se=se.value,Oe=Mt+U(se,it++),Se+=dt(se,ne,he,Oe,Ee);else if(Oe==="object"){if(typeof N.then=="function")return dt(Ht(N),ne,he,se,Ee);throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Se}function X(N,ne,he){if(N==null)return N;var se=[],Ee=0;return dt(N,se,"","",function(Oe){return ne.call(he,Oe,Ee++)}),se}function ce(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(he){(N._status===0||N._status===-1)&&(N._status=1,N._result=he)},function(he){(N._status===0||N._status===-1)&&(N._status=2,N._result=he)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var ye=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}};function qe(){}return Ce.Children={map:X,forEach:function(N,ne,he){X(N,function(){ne.apply(this,arguments)},he)},count:function(N){var ne=0;return X(N,function(){ne++}),ne},toArray:function(N){return X(N,function(ne){return ne})||[]},only:function(N){if(!S(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ce.Component=L,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=te,Ce.StrictMode=r,Ce.Suspense=m,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(N){return le.H.useMemoCache(N)}},Ce.cache=function(N){return function(){return N.apply(null,arguments)}},Ce.cloneElement=function(N,ne,he){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var se=O({},N.props),Ee=N.key,Oe=void 0;if(ne!=null)for(Se in ne.ref!==void 0&&(Oe=void 0),ne.key!==void 0&&(Ee=""+ne.key),ne)!pe.call(ne,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ne.ref===void 0||(se[Se]=ne[Se]);var Se=arguments.length-2;if(Se===1)se.children=he;else if(1<Se){for(var Mt=Array(Se),it=0;it<Se;it++)Mt[it]=arguments[it+2];se.children=Mt}return x(N.type,Ee,void 0,void 0,Oe,se)},Ce.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},Ce.createElement=function(N,ne,he){var se,Ee={},Oe=null;if(ne!=null)for(se in ne.key!==void 0&&(Oe=""+ne.key),ne)pe.call(ne,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(Ee[se]=ne[se]);var Se=arguments.length-2;if(Se===1)Ee.children=he;else if(1<Se){for(var Mt=Array(Se),it=0;it<Se;it++)Mt[it]=arguments[it+2];Ee.children=Mt}if(N&&N.defaultProps)for(se in Se=N.defaultProps,Se)Ee[se]===void 0&&(Ee[se]=Se[se]);return x(N,Oe,void 0,void 0,null,Ee)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(N){return{$$typeof:f,render:N}},Ce.isValidElement=S,Ce.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ce}},Ce.memo=function(N,ne){return{$$typeof:g,type:N,compare:ne===void 0?null:ne}},Ce.startTransition=function(N){var ne=le.T,he={};le.T=he;try{var se=N(),Ee=le.S;Ee!==null&&Ee(he,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(qe,ye)}catch(Oe){ye(Oe)}finally{le.T=ne}},Ce.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Ce.use=function(N){return le.H.use(N)},Ce.useActionState=function(N,ne,he){return le.H.useActionState(N,ne,he)},Ce.useCallback=function(N,ne){return le.H.useCallback(N,ne)},Ce.useContext=function(N){return le.H.useContext(N)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(N,ne){return le.H.useDeferredValue(N,ne)},Ce.useEffect=function(N,ne,he){var se=le.H;if(typeof he=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(N,ne)},Ce.useId=function(){return le.H.useId()},Ce.useImperativeHandle=function(N,ne,he){return le.H.useImperativeHandle(N,ne,he)},Ce.useInsertionEffect=function(N,ne){return le.H.useInsertionEffect(N,ne)},Ce.useLayoutEffect=function(N,ne){return le.H.useLayoutEffect(N,ne)},Ce.useMemo=function(N,ne){return le.H.useMemo(N,ne)},Ce.useOptimistic=function(N,ne){return le.H.useOptimistic(N,ne)},Ce.useReducer=function(N,ne,he){return le.H.useReducer(N,ne,he)},Ce.useRef=function(N){return le.H.useRef(N)},Ce.useState=function(N){return le.H.useState(N)},Ce.useSyncExternalStore=function(N,ne,he){return le.H.useSyncExternalStore(N,ne,he)},Ce.useTransition=function(){return le.H.useTransition()},Ce.version="19.1.0",Ce}var QT;function d_(){return QT||(QT=1,eg.exports=TC()),eg.exports}var $=d_(),tg={exports:{}},Ou={},ng={exports:{}},ig={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YT;function wC(){return YT||(YT=1,function(n){function e(X,ce){var ye=X.length;X.push(ce);e:for(;0<ye;){var qe=ye-1>>>1,N=X[qe];if(0<a(N,ce))X[qe]=ce,X[ye]=N,ye=qe;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ce=X[0],ye=X.pop();if(ye!==ce){X[0]=ye;e:for(var qe=0,N=X.length,ne=N>>>1;qe<ne;){var he=2*(qe+1)-1,se=X[he],Ee=he+1,Oe=X[Ee];if(0>a(se,ye))Ee<N&&0>a(Oe,se)?(X[qe]=Oe,X[Ee]=ye,qe=Ee):(X[qe]=se,X[he]=ye,qe=he);else if(Ee<N&&0>a(Oe,ye))X[qe]=Oe,X[Ee]=ye,qe=Ee;else break e}}return ce}function a(X,ce){var ye=X.sortIndex-ce.sortIndex;return ye!==0?ye:X.id-ce.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var m=[],g=[],y=1,T=null,A=3,R=!1,O=!1,G=!1,L=!1,Y=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function oe(X){for(var ce=t(g);ce!==null;){if(ce.callback===null)r(g);else if(ce.startTime<=X)r(g),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=t(g)}}function le(X){if(G=!1,oe(X),!O)if(t(m)!==null)O=!0,pe||(pe=!0,U());else{var ce=t(g);ce!==null&&dt(le,ce.startTime-X)}}var pe=!1,x=-1,I=5,S=-1;function P(){return L?!0:!(n.unstable_now()-S<I)}function k(){if(L=!1,pe){var X=n.unstable_now();S=X;var ce=!0;try{e:{O=!1,G&&(G=!1,te(x),x=-1),R=!0;var ye=A;try{t:{for(oe(X),T=t(m);T!==null&&!(T.expirationTime>X&&P());){var qe=T.callback;if(typeof qe=="function"){T.callback=null,A=T.priorityLevel;var N=qe(T.expirationTime<=X);if(X=n.unstable_now(),typeof N=="function"){T.callback=N,oe(X),ce=!0;break t}T===t(m)&&r(m),oe(X)}else r(m);T=t(m)}if(T!==null)ce=!0;else{var ne=t(g);ne!==null&&dt(le,ne.startTime-X),ce=!1}}break e}finally{T=null,A=ye,R=!1}ce=void 0}}finally{ce?U():pe=!1}}}var U;if(typeof Q=="function")U=function(){Q(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Ht=D.port2;D.port1.onmessage=k,U=function(){Ht.postMessage(null)}}else U=function(){Y(k,0)};function dt(X,ce){x=Y(function(){X(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_forceFrameRate=function(X){0>X||125<X||(I=0<X?Math.floor(1e3/X):5)},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_next=function(X){switch(A){case 1:case 2:case 3:var ce=3;break;default:ce=A}var ye=A;A=ce;try{return X()}finally{A=ye}},n.unstable_requestPaint=function(){L=!0},n.unstable_runWithPriority=function(X,ce){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ye=A;A=X;try{return ce()}finally{A=ye}},n.unstable_scheduleCallback=function(X,ce,ye){var qe=n.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?qe+ye:qe):ye=qe,X){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ye+N,X={id:y++,callback:ce,priorityLevel:X,startTime:ye,expirationTime:N,sortIndex:-1},ye>qe?(X.sortIndex=ye,e(g,X),t(m)===null&&X===t(g)&&(G?(te(x),x=-1):G=!0,dt(le,ye-qe))):(X.sortIndex=N,e(m,X),O||R||(O=!0,pe||(pe=!0,U()))),X},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(X){var ce=A;return function(){var ye=A;A=ce;try{return X.apply(this,arguments)}finally{A=ye}}}}(ig)),ig}var XT;function AC(){return XT||(XT=1,ng.exports=wC()),ng.exports}var rg={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT;function bC(){if(WT)return en;WT=1;var n=d_();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,en.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,y)},en.flushSync=function(m){var g=c.T,y=r.p;try{if(c.T=null,r.p=2,m)return m()}finally{c.T=g,r.p=y,r.d.f()}},en.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(m,g))},en.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},en.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,T=f(y,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:A,fetchPriority:R}):y==="script"&&r.d.X(m,{crossOrigin:T,integrity:A,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},en.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=f(g.as,g.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(m)},en.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=f(y,g.crossOrigin);r.d.L(m,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},en.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=f(g.as,g.crossOrigin);r.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(m)},en.requestFormReset=function(m){r.d.r(m)},en.unstable_batchedUpdates=function(m,g){return m(g)},en.useFormState=function(m,g,y){return c.H.useFormState(m,g,y)},en.useFormStatus=function(){return c.H.useHostTransitionStatus()},en.version="19.1.0",en}var ZT;function IC(){if(ZT)return rg.exports;ZT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch{}}return n(),rg.exports=bC(),rg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JT;function SC(){if(JT)return Ou;JT=1;var n=AC(),e=d_(),t=IC();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var s=i,o=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(o=s.return),i=s.return;while(i)}return s.tag===3?o:null}function c(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function f(i){if(l(i)!==i)throw Error(r(188))}function m(i){var s=i.alternate;if(!s){if(s=l(i),s===null)throw Error(r(188));return s!==i?null:i}for(var o=i,u=s;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return f(d),i;if(p===u)return f(d),s;p=p.sibling}throw Error(r(188))}if(o.return!==u.return)o=d,u=p;else{for(var E=!1,w=d.child;w;){if(w===o){E=!0,o=d,u=p;break}if(w===u){E=!0,u=d,o=p;break}w=w.sibling}if(!E){for(w=p.child;w;){if(w===o){E=!0,o=p,u=d;break}if(w===u){E=!0,u=p,o=d;break}w=w.sibling}if(!E)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?i:s}function g(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=g(i),s!==null)return s;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),te=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function U(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function Ht(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case L:return"Profiler";case G:return"StrictMode";case le:return"Suspense";case pe:return"SuspenseList";case S:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case R:return"Portal";case Q:return(i.displayName||"Context")+".Provider";case te:return(i._context.displayName||"Context")+".Consumer";case oe:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case x:return s=i.displayName||null,s!==null?s:Ht(i.type)||"Memo";case I:s=i._payload,i=i._init;try{return Ht(i(s))}catch{}}return null}var dt=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},qe=[],N=-1;function ne(i){return{current:i}}function he(i){0>N||(i.current=qe[N],qe[N]=null,N--)}function se(i,s){N++,qe[N]=i.current,i.current=s}var Ee=ne(null),Oe=ne(null),Se=ne(null),Mt=ne(null);function it(i,s){switch(se(Se,s),se(Oe,i),se(Ee,null),s.nodeType){case 9:case 11:i=(i=s.documentElement)&&(i=i.namespaceURI)?vT(i):0;break;default:if(i=s.tagName,s=s.namespaceURI)s=vT(s),i=ET(s,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}he(Ee),se(Ee,i)}function pi(){he(Ee),he(Oe),he(Se)}function Ir(i){i.memoizedState!==null&&se(Mt,i);var s=Ee.current,o=ET(s,i.type);s!==o&&(se(Oe,i),se(Ee,o))}function Bi(i){Oe.current===i&&(he(Ee),he(Oe)),Mt.current===i&&(he(Mt),Iu._currentValue=ye)}var Ss=Object.prototype.hasOwnProperty,Rs=n.unstable_scheduleCallback,Cs=n.unstable_cancelCallback,wl=n.unstable_shouldYield,Lc=n.unstable_requestPaint,Mn=n.unstable_now,Jd=n.unstable_getCurrentPriorityLevel,Al=n.unstable_ImmediatePriority,Fa=n.unstable_UserBlockingPriority,Ds=n.unstable_NormalPriority,em=n.unstable_LowPriority,Ha=n.unstable_IdlePriority,bl=n.log,Uc=n.unstable_setDisableYieldValue,mt=null,Ke=null;function En(i){if(typeof bl=="function"&&Uc(i),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(mt,i)}catch{}}var Zt=Math.clz32?Math.clz32:xs,Bc=Math.log,tm=Math.LN2;function xs(i){return i>>>=0,i===0?32:31-(Bc(i)/tm|0)|0}var Os=256,Ns=4194304;function ti(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Ga(i,s,o){var u=i.pendingLanes;if(u===0)return 0;var d=0,p=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var w=u&134217727;return w!==0?(u=w&~p,u!==0?d=ti(u):(E&=w,E!==0?d=ti(E):o||(o=w&~i,o!==0&&(d=ti(o))))):(w=u&~p,w!==0?d=ti(w):E!==0?d=ti(E):o||(o=u&~i,o!==0&&(d=ti(o)))),d===0?0:s!==0&&s!==d&&(s&p)===0&&(p=d&-d,o=s&-s,p>=o||p===32&&(o&4194048)!==0)?s:d}function Ps(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Il(i,s){switch(i){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sl(){var i=Os;return Os<<=1,(Os&4194048)===0&&(Os=256),i}function Rl(){var i=Ns;return Ns<<=1,(Ns&62914560)===0&&(Ns=4194304),i}function zi(i){for(var s=[],o=0;31>o;o++)s.push(i);return s}function ji(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Cl(i,s,o,u,d,p){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,C=i.expirationTimes,q=i.hiddenUpdates;for(o=E&~o;0<o;){var W=31-Zt(o),ee=1<<W;w[W]=0,C[W]=-1;var F=q[W];if(F!==null)for(q[W]=null,W=0;W<F.length;W++){var H=F[W];H!==null&&(H.lane&=-536870913)}o&=~ee}u!==0&&gi(i,u,0),p!==0&&d===0&&i.tag!==0&&(i.suspendedLanes|=p&~(E&~s))}function gi(i,s,o){i.pendingLanes|=s,i.suspendedLanes&=~s;var u=31-Zt(s);i.entangledLanes|=s,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Dl(i,s){var o=i.entangledLanes|=s;for(i=i.entanglements;o;){var u=31-Zt(o),d=1<<u;d&s|i[u]&s&&(i[u]|=s),o&=~d}}function Sr(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Ka(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Rr(){var i=ce.p;return i!==0?i:(i=window.event,i===void 0?32:BT(i.type))}function zc(i,s){var o=ce.p;try{return ce.p=i,s()}finally{ce.p=o}}var st=Math.random().toString(36).slice(2),Dt="__reactFiber$"+st,At="__reactProps$"+st,Ln="__reactContainer$"+st,xl="__reactEvents$"+st,nm="__reactListeners$"+st,Cr="__reactHandles$"+st,jc="__reactResources$"+st,Vs="__reactMarker$"+st;function Dr(i){delete i[Dt],delete i[At],delete i[xl],delete i[nm],delete i[Cr]}function qi(i){var s=i[Dt];if(s)return s;for(var o=i.parentNode;o;){if(s=o[Ln]||o[Dt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(i=bT(i);i!==null;){if(o=i[Dt])return o;i=bT(i)}return s}i=o,o=i.parentNode}return null}function _i(i){if(i=i[Dt]||i[Ln]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function yi(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function on(i){var s=i[jc];return s||(s=i[jc]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Et(i){i[Vs]=!0}var Ol=new Set,$a={};function ni(i,s){Fi(i,s),Fi(i+"Capture",s)}function Fi(i,s){for($a[i]=s,i=0;i<s.length;i++)Ol.add(s[i])}var qc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fc={},ks={};function Hc(i){return Ss.call(ks,i)?!0:Ss.call(Fc,i)?!1:qc.test(i)?ks[i]=!0:(Fc[i]=!0,!1)}function xr(i,s,o){if(Hc(s))if(o===null)i.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+o)}}function vi(i,s,o){if(o===null)i.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+o)}}function Gt(i,s,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(s,o,""+u)}}var Ms,Gc;function Hi(i){if(Ms===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Ms=s&&s[1]||"",Gc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ms+i+Gc}var Qa=!1;function Ya(i,s){if(!i||Qa)return"";Qa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(H){var F=H}Reflect.construct(i,[],ee)}else{try{ee.call()}catch(H){F=H}i.call(ee.prototype)}}else{try{throw Error()}catch(H){F=H}(ee=i())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(H){if(H&&F&&typeof H.stack=="string")return[H.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],w=p[1];if(E&&w){var C=E.split(`
`),q=w.split(`
`);for(d=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;d<q.length&&!q[d].includes("DetermineComponentFrameRoot");)d++;if(u===C.length||d===q.length)for(u=C.length-1,d=q.length-1;1<=u&&0<=d&&C[u]!==q[d];)d--;for(;1<=u&&0<=d;u--,d--)if(C[u]!==q[d]){if(u!==1||d!==1)do if(u--,d--,0>d||C[u]!==q[d]){var W=`
`+C[u].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=u&&0<=d);break}}}finally{Qa=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Hi(o):""}function Nl(i){switch(i.tag){case 26:case 27:case 5:return Hi(i.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 15:return Ya(i.type,!1);case 11:return Ya(i.type.render,!1);case 1:return Ya(i.type,!0);case 31:return Hi("Activity");default:return""}}function Xa(i){try{var s="";do s+=Nl(i),i=i.return;while(i);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function ln(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Pl(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function im(i){var s=Pl(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(i,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Wa(i){i._valueTracker||(i._valueTracker=im(i))}function Vl(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return i&&(u=Pl(i)?i.checked?"true":"false":i.value),i=u,i!==o?(s.setValue(i),!0):!1}function Ls(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var rm=/[\n"\\]/g;function bt(i){return i.replace(rm,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Tn(i,s,o,u,d,p,E,w){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),s!=null?E==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+ln(s)):i.value!==""+ln(s)&&(i.value=""+ln(s)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),s!=null?Or(i,E,ln(s)):o!=null?Or(i,E,ln(o)):u!=null&&i.removeAttribute("value"),d==null&&p!=null&&(i.defaultChecked=!!p),d!=null&&(i.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+ln(w):i.removeAttribute("name")}function Us(i,s,o,u,d,p,E,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(i.type=p),s!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||s!=null))return;o=o!=null?""+ln(o):"",s=s!=null?""+ln(s):o,w||s===i.value||(i.value=s),i.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=w?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Or(i,s,o){s==="number"&&Ls(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Gi(i,s,o,u){if(i=i.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<i.length;o++)d=s.hasOwnProperty("$"+i[o].value),i[o].selected!==d&&(i[o].selected=d),d&&u&&(i[o].defaultSelected=!0)}else{for(o=""+ln(o),s=null,d=0;d<i.length;d++){if(i[d].value===o){i[d].selected=!0,u&&(i[d].defaultSelected=!0);return}s!==null||i[d].disabled||(s=i[d])}s!==null&&(s.selected=!0)}}function Ze(i,s,o){if(s!=null&&(s=""+ln(s),s!==i.value&&(i.value=s),o==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=o!=null?""+ln(o):""}function Bs(i,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(r(92));if(dt(u)){if(1<u.length)throw Error(r(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=ln(s),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Un(i,s){if(s){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=s;return}}i.textContent=s}var zs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kc(i,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":u?i.setProperty(s,o):typeof o!="number"||o===0||zs.has(s)?s==="float"?i.cssFloat=o:i[s]=(""+o).trim():i[s]=o+"px"}function kl(i,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&Kc(i,d,u)}else for(var p in s)s.hasOwnProperty(p)&&Kc(i,p,s[p])}function Ml(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Za(i){return am.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Ki=null;function Bn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var $i=null,Qi=null;function Ll(i){var s=_i(i);if(s&&(i=s.stateNode)){var o=i[At]||null;e:switch(i=s.stateNode,s.type){case"input":if(Tn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+bt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==i&&u.form===i.form){var d=u[At]||null;if(!d)throw Error(r(90));Tn(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===i.form&&Vl(u)}break e;case"textarea":Ze(i,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Gi(i,!!o.multiple,s,!1)}}}var Ei=!1;function $c(i,s,o){if(Ei)return i(s,o);Ei=!0;try{var u=i(s);return u}finally{if(Ei=!1,($i!==null||Qi!==null)&&(zh(),$i&&(s=$i,i=Qi,Qi=$i=null,Ll(s),i)))for(s=0;s<i.length;s++)Ll(i[s])}}function js(i,s){var o=i.stateNode;if(o===null)return null;var u=o[At]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zn=!1;if(ii)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){zn=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{zn=!1}var Ti=null,Nr=null,Yi=null;function Ul(){if(Yi)return Yi;var i,s=Nr,o=s.length,u,d="value"in Ti?Ti.value:Ti.textContent,p=d.length;for(i=0;i<o&&s[i]===d[i];i++);var E=o-i;for(u=1;u<=E&&s[o-u]===d[p-u];u++);return Yi=d.slice(i,1<u?1-u:void 0)}function wi(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Ai(){return!0}function Bl(){return!1}function Lt(i){function s(o,u,d,p,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ai:Bl,this.isPropagationStopped=Bl,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),s}var He={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ja=Lt(He),Fs=y({},He,{view:0,detail:0}),Qc=Lt(Fs),eo,to,bi,Hs=y({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==bi&&(bi&&i.type==="mousemove"?(eo=i.screenX-bi.screenX,to=i.screenY-bi.screenY):to=eo=0,bi=i),eo)},movementY:function(i){return"movementY"in i?i.movementY:to}}),jn=Lt(Hs),Yc=y({},Hs,{dataTransfer:0}),om=Lt(Yc),Gs=y({},Fs,{relatedTarget:0}),no=Lt(Gs),zl=y({},He,{animationName:0,elapsedTime:0,pseudoElement:0}),io=Lt(zl),Xc=y({},He,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ro=Lt(Xc),lm=y({},He,{data:0}),jl=Lt(lm),Ks={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ql(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Zc[i])?!!s[i]:!1}function $s(){return ql}var Jc=y({},Fs,{key:function(i){if(i.key){var s=Ks[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=wi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Wc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(i){return i.type==="keypress"?wi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?wi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),so=Lt(Jc),eh=y({},Hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fl=Lt(eh),Xi=y({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),th=Lt(Xi),nh=y({},He,{propertyName:0,elapsedTime:0,pseudoElement:0}),ih=Lt(nh),rh=y({},Hs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ao=Lt(rh),un=y({},He,{newState:0,oldState:0}),sh=Lt(un),ah=[9,13,27,32],Ii=ii&&"CompositionEvent"in window,h=null;ii&&"documentMode"in document&&(h=document.documentMode);var _=ii&&"TextEvent"in window&&!h,v=ii&&(!Ii||h&&8<h&&11>=h),b=" ",B=!1;function K(i,s){switch(i){case"keyup":return ah.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Le=!1;function xt(i,s){switch(i){case"compositionend":return ae(s);case"keypress":return s.which!==32?null:(B=!0,b);case"textInput":return i=s.data,i===b&&B?null:i;default:return null}}function Ue(i,s){if(Le)return i==="compositionend"||!Ii&&K(i,s)?(i=Ul(),Yi=Nr=Ti=null,Le=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Ut={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ot(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!Ut[i.type]:s==="textarea"}function Wi(i,s,o,u){$i?Qi?Qi.push(u):Qi=[u]:$i=u,s=Kh(s,"onChange"),0<s.length&&(o=new Ja("onChange","change",null,o,u),i.push({event:o,listeners:s}))}var Kt=null,Si=null;function Hl(i){mT(i,0)}function oh(i){var s=yi(i);if(Vl(s))return i}function ky(i,s){if(i==="change")return s}var My=!1;if(ii){var um;if(ii){var cm="oninput"in document;if(!cm){var Ly=document.createElement("div");Ly.setAttribute("oninput","return;"),cm=typeof Ly.oninput=="function"}um=cm}else um=!1;My=um&&(!document.documentMode||9<document.documentMode)}function Uy(){Kt&&(Kt.detachEvent("onpropertychange",By),Si=Kt=null)}function By(i){if(i.propertyName==="value"&&oh(Si)){var s=[];Wi(s,Si,i,Bn(i)),$c(Hl,s)}}function YR(i,s,o){i==="focusin"?(Uy(),Kt=s,Si=o,Kt.attachEvent("onpropertychange",By)):i==="focusout"&&Uy()}function XR(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return oh(Si)}function WR(i,s){if(i==="click")return oh(s)}function ZR(i,s){if(i==="input"||i==="change")return oh(s)}function JR(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var wn=typeof Object.is=="function"?Object.is:JR;function Gl(i,s){if(wn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var o=Object.keys(i),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!Ss.call(s,d)||!wn(i[d],s[d]))return!1}return!0}function zy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function jy(i,s){var o=zy(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=s&&u>=s)return{node:o,offset:s-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=zy(o)}}function qy(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?qy(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Fy(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Ls(i.document);s instanceof i.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)i=s.contentWindow;else break;s=Ls(i.document)}return s}function hm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}var e1=ii&&"documentMode"in document&&11>=document.documentMode,oo=null,fm=null,Kl=null,dm=!1;function Hy(i,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;dm||oo==null||oo!==Ls(u)||(u=oo,"selectionStart"in u&&hm(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Kl&&Gl(Kl,u)||(Kl=u,u=Kh(fm,"onSelect"),0<u.length&&(s=new Ja("onSelect","select",null,s,o),i.push({event:s,listeners:u}),s.target=oo)))}function Qs(i,s){var o={};return o[i.toLowerCase()]=s.toLowerCase(),o["Webkit"+i]="webkit"+s,o["Moz"+i]="moz"+s,o}var lo={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionrun:Qs("Transition","TransitionRun"),transitionstart:Qs("Transition","TransitionStart"),transitioncancel:Qs("Transition","TransitionCancel"),transitionend:Qs("Transition","TransitionEnd")},mm={},Gy={};ii&&(Gy=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function Ys(i){if(mm[i])return mm[i];if(!lo[i])return i;var s=lo[i],o;for(o in s)if(s.hasOwnProperty(o)&&o in Gy)return mm[i]=s[o];return i}var Ky=Ys("animationend"),$y=Ys("animationiteration"),Qy=Ys("animationstart"),t1=Ys("transitionrun"),n1=Ys("transitionstart"),i1=Ys("transitioncancel"),Yy=Ys("transitionend"),Xy=new Map,pm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pm.push("scrollEnd");function ri(i,s){Xy.set(i,s),ni(s,[i])}var Wy=new WeakMap;function qn(i,s){if(typeof i=="object"&&i!==null){var o=Wy.get(i);return o!==void 0?o:(s={value:i,source:s,stack:Xa(s)},Wy.set(i,s),s)}return{value:i,source:s,stack:Xa(s)}}var Fn=[],uo=0,gm=0;function lh(){for(var i=uo,s=gm=uo=0;s<i;){var o=Fn[s];Fn[s++]=null;var u=Fn[s];Fn[s++]=null;var d=Fn[s];Fn[s++]=null;var p=Fn[s];if(Fn[s++]=null,u!==null&&d!==null){var E=u.pending;E===null?d.next=d:(d.next=E.next,E.next=d),u.pending=d}p!==0&&Zy(o,d,p)}}function uh(i,s,o,u){Fn[uo++]=i,Fn[uo++]=s,Fn[uo++]=o,Fn[uo++]=u,gm|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function _m(i,s,o,u){return uh(i,s,o,u),ch(i)}function co(i,s){return uh(i,null,null,s),ch(i)}function Zy(i,s,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var d=!1,p=i.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(i=p.stateNode,i===null||i._visibility&1||(d=!0)),i=p,p=p.return;return i.tag===3?(p=i.stateNode,d&&s!==null&&(d=31-Zt(o),i=p.hiddenUpdates,u=i[d],u===null?i[d]=[s]:u.push(s),s.lane=o|536870912),p):null}function ch(i){if(50<_u)throw _u=0,Ap=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var ho={};function r1(i,s,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(i,s,o,u){return new r1(i,s,o,u)}function ym(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Zi(i,s){var o=i.alternate;return o===null?(o=An(i.tag,s,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=s,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,s=i.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Jy(i,s){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,s=o.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function hh(i,s,o,u,d,p){var E=0;if(u=i,typeof i=="function")ym(i)&&(E=1);else if(typeof i=="string")E=aC(i,o,Ee.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case S:return i=An(31,o,s,d),i.elementType=S,i.lanes=p,i;case O:return Xs(o.children,d,p,s);case G:E=8,d|=24;break;case L:return i=An(12,o,s,d|2),i.elementType=L,i.lanes=p,i;case le:return i=An(13,o,s,d),i.elementType=le,i.lanes=p,i;case pe:return i=An(19,o,s,d),i.elementType=pe,i.lanes=p,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Y:case Q:E=10;break e;case te:E=9;break e;case oe:E=11;break e;case x:E=14;break e;case I:E=16,u=null;break e}E=29,o=Error(r(130,i===null?"null":typeof i,"")),u=null}return s=An(E,o,s,d),s.elementType=i,s.type=u,s.lanes=p,s}function Xs(i,s,o,u){return i=An(7,i,u,s),i.lanes=o,i}function vm(i,s,o){return i=An(6,i,null,s),i.lanes=o,i}function Em(i,s,o){return s=An(4,i.children!==null?i.children:[],i.key,s),s.lanes=o,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}var fo=[],mo=0,fh=null,dh=0,Hn=[],Gn=0,Ws=null,Ji=1,er="";function Zs(i,s){fo[mo++]=dh,fo[mo++]=fh,fh=i,dh=s}function ev(i,s,o){Hn[Gn++]=Ji,Hn[Gn++]=er,Hn[Gn++]=Ws,Ws=i;var u=Ji;i=er;var d=32-Zt(u)-1;u&=~(1<<d),o+=1;var p=32-Zt(s)+d;if(30<p){var E=d-d%5;p=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Ji=1<<32-Zt(s)+d|o<<d|u,er=p+i}else Ji=1<<p|o<<d|u,er=i}function Tm(i){i.return!==null&&(Zs(i,1),ev(i,1,0))}function wm(i){for(;i===fh;)fh=fo[--mo],fo[mo]=null,dh=fo[--mo],fo[mo]=null;for(;i===Ws;)Ws=Hn[--Gn],Hn[Gn]=null,er=Hn[--Gn],Hn[Gn]=null,Ji=Hn[--Gn],Hn[Gn]=null}var cn=null,pt=null,Fe=!1,Js=null,Ri=!1,Am=Error(r(519));function ea(i){var s=Error(r(418,""));throw Yl(qn(s,i)),Am}function tv(i){var s=i.stateNode,o=i.type,u=i.memoizedProps;switch(s[Dt]=i,s[At]=u,o){case"dialog":Ve("cancel",s),Ve("close",s);break;case"iframe":case"object":case"embed":Ve("load",s);break;case"video":case"audio":for(o=0;o<vu.length;o++)Ve(vu[o],s);break;case"source":Ve("error",s);break;case"img":case"image":case"link":Ve("error",s),Ve("load",s);break;case"details":Ve("toggle",s);break;case"input":Ve("invalid",s),Us(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Wa(s);break;case"select":Ve("invalid",s);break;case"textarea":Ve("invalid",s),Bs(s,u.value,u.defaultValue,u.children),Wa(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||yT(s.textContent,o)?(u.popover!=null&&(Ve("beforetoggle",s),Ve("toggle",s)),u.onScroll!=null&&Ve("scroll",s),u.onScrollEnd!=null&&Ve("scrollend",s),u.onClick!=null&&(s.onclick=$h),s=!0):s=!1,s||ea(i)}function nv(i){for(cn=i.return;cn;)switch(cn.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:cn=cn.return}}function $l(i){if(i!==cn)return!1;if(!Fe)return nv(i),Fe=!0,!1;var s=i.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Bp(i.type,i.memoizedProps)),o=!o),o&&pt&&ea(i),nv(i),s===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(s===0){pt=ai(i.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;i=i.nextSibling}pt=null}}else s===27?(s=pt,Qr(i.type)?(i=Fp,Fp=null,pt=i):pt=s):pt=cn?ai(i.stateNode.nextSibling):null;return!0}function Ql(){pt=cn=null,Fe=!1}function iv(){var i=Js;return i!==null&&(gn===null?gn=i:gn.push.apply(gn,i),Js=null),i}function Yl(i){Js===null?Js=[i]:Js.push(i)}var bm=ne(null),ta=null,tr=null;function Pr(i,s,o){se(bm,s._currentValue),s._currentValue=o}function nr(i){i._currentValue=bm.current,he(bm)}function Im(i,s,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===o)break;i=i.return}}function Sm(i,s,o,u){var d=i.child;for(d!==null&&(d.return=i);d!==null;){var p=d.dependencies;if(p!==null){var E=d.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=d;for(var C=0;C<s.length;C++)if(w.context===s[C]){p.lanes|=o,w=p.alternate,w!==null&&(w.lanes|=o),Im(p.return,o,i),u||(E=null);break e}p=w.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(r(341));E.lanes|=o,p=E.alternate,p!==null&&(p.lanes|=o),Im(E,o,i),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===i){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Xl(i,s,o,u){i=null;for(var d=s,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var w=d.type;wn(d.pendingProps.value,E.value)||(i!==null?i.push(w):i=[w])}}else if(d===Mt.current){if(E=d.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(i!==null?i.push(Iu):i=[Iu])}d=d.return}i!==null&&Sm(s,i,o,u),s.flags|=262144}function mh(i){for(i=i.firstContext;i!==null;){if(!wn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function na(i){ta=i,tr=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Jt(i){return rv(ta,i)}function ph(i,s){return ta===null&&na(i),rv(i,s)}function rv(i,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},tr===null){if(i===null)throw Error(r(308));tr=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else tr=tr.next=s;return o}var s1=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){s.aborted=!0,i.forEach(function(o){return o()})}},a1=n.unstable_scheduleCallback,o1=n.unstable_NormalPriority,Nt={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rm(){return{controller:new s1,data:new Map,refCount:0}}function Wl(i){i.refCount--,i.refCount===0&&a1(o1,function(){i.controller.abort()})}var Zl=null,Cm=0,po=0,go=null;function l1(i,s){if(Zl===null){var o=Zl=[];Cm=0,po=xp(),go={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Cm++,s.then(sv,sv),s}function sv(){if(--Cm===0&&Zl!==null){go!==null&&(go.status="fulfilled");var i=Zl;Zl=null,po=0,go=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function u1(i,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return i.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var av=X.S;X.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&l1(i,s),av!==null&&av(i,s)};var ia=ne(null);function Dm(){var i=ia.current;return i!==null?i:rt.pooledCache}function gh(i,s){s===null?se(ia,ia.current):se(ia,s.pool)}function ov(){var i=Dm();return i===null?null:{parent:Nt._currentValue,pool:i}}var Jl=Error(r(460)),lv=Error(r(474)),_h=Error(r(542)),xm={then:function(){}};function uv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function yh(){}function cv(i,s,o){switch(o=i[o],o===void 0?i.push(s):o!==s&&(s.then(yh,yh),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,fv(i),i;default:if(typeof s.status=="string")s.then(yh,yh);else{if(i=rt,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,fv(i),i}throw eu=s,Jl}}var eu=null;function hv(){if(eu===null)throw Error(r(459));var i=eu;return eu=null,i}function fv(i){if(i===Jl||i===_h)throw Error(r(483))}var Vr=!1;function Om(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function kr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Mr(i,s,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=ch(i),Zy(i,null,o),s}return uh(i,u,s,o),ch(i)}function tu(i,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=i.pendingLanes,o|=u,s.lanes=o,Dl(i,o)}}function Pm(i,s){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?d=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?d=p=s:p=p.next=s}else d=p=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=s:i.next=s,o.lastBaseUpdate=s}var Vm=!1;function nu(){if(Vm){var i=go;if(i!==null)throw i}}function iu(i,s,o,u){Vm=!1;var d=i.updateQueue;Vr=!1;var p=d.firstBaseUpdate,E=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var C=w,q=C.next;C.next=null,E===null?p=q:E.next=q,E=C;var W=i.alternate;W!==null&&(W=W.updateQueue,w=W.lastBaseUpdate,w!==E&&(w===null?W.firstBaseUpdate=q:w.next=q,W.lastBaseUpdate=C))}if(p!==null){var ee=d.baseState;E=0,W=q=C=null,w=p;do{var F=w.lane&-536870913,H=F!==w.lane;if(H?(Be&F)===F:(u&F)===F){F!==0&&F===po&&(Vm=!0),W!==null&&(W=W.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var be=i,Te=w;F=s;var tt=o;switch(Te.tag){case 1:if(be=Te.payload,typeof be=="function"){ee=be.call(tt,ee,F);break e}ee=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Te.payload,F=typeof be=="function"?be.call(tt,ee,F):be,F==null)break e;ee=y({},ee,F);break e;case 2:Vr=!0}}F=w.callback,F!==null&&(i.flags|=64,H&&(i.flags|=8192),H=d.callbacks,H===null?d.callbacks=[F]:H.push(F))}else H={lane:F,tag:w.tag,payload:w.payload,callback:w.callback,next:null},W===null?(q=W=H,C=ee):W=W.next=H,E|=F;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;H=w,w=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);W===null&&(C=ee),d.baseState=C,d.firstBaseUpdate=q,d.lastBaseUpdate=W,p===null&&(d.shared.lanes=0),Hr|=E,i.lanes=E,i.memoizedState=ee}}function dv(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function mv(i,s){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)dv(o[i],s)}var _o=ne(null),vh=ne(0);function pv(i,s){i=ur,se(vh,i),se(_o,s),ur=i|s.baseLanes}function km(){se(vh,ur),se(_o,_o.current)}function Mm(){ur=vh.current,he(_o),he(vh)}var Lr=0,De=null,Je=null,It=null,Eh=!1,yo=!1,ra=!1,Th=0,ru=0,vo=null,c1=0;function Tt(){throw Error(r(321))}function Lm(i,s){if(s===null)return!1;for(var o=0;o<s.length&&o<i.length;o++)if(!wn(i[o],s[o]))return!1;return!0}function Um(i,s,o,u,d,p){return Lr=p,De=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,X.H=i===null||i.memoizedState===null?Zv:Jv,ra=!1,p=o(u,d),ra=!1,yo&&(p=_v(s,o,u,d)),gv(i),p}function gv(i){X.H=Rh;var s=Je!==null&&Je.next!==null;if(Lr=0,It=Je=De=null,Eh=!1,ru=0,vo=null,s)throw Error(r(300));i===null||Bt||(i=i.dependencies,i!==null&&mh(i)&&(Bt=!0))}function _v(i,s,o,u){De=i;var d=0;do{if(yo&&(vo=null),ru=0,yo=!1,25<=d)throw Error(r(301));if(d+=1,It=Je=null,i.updateQueue!=null){var p=i.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}X.H=_1,p=s(o,u)}while(yo);return p}function h1(){var i=X.H,s=i.useState()[0];return s=typeof s.then=="function"?su(s):s,i=i.useState()[0],(Je!==null?Je.memoizedState:null)!==i&&(De.flags|=1024),s}function Bm(){var i=Th!==0;return Th=0,i}function zm(i,s,o){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~o}function jm(i){if(Eh){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Eh=!1}Lr=0,It=Je=De=null,yo=!1,ru=Th=0,vo=null}function mn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?De.memoizedState=It=i:It=It.next=i,It}function St(){if(Je===null){var i=De.alternate;i=i!==null?i.memoizedState:null}else i=Je.next;var s=It===null?De.memoizedState:It.next;if(s!==null)It=s,Je=i;else{if(i===null)throw De.alternate===null?Error(r(467)):Error(r(310));Je=i,i={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},It===null?De.memoizedState=It=i:It=It.next=i}return It}function qm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function su(i){var s=ru;return ru+=1,vo===null&&(vo=[]),i=cv(vo,i,s),s=De,(It===null?s.memoizedState:It.next)===null&&(s=s.alternate,X.H=s===null||s.memoizedState===null?Zv:Jv),i}function wh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return su(i);if(i.$$typeof===Q)return Jt(i)}throw Error(r(438,String(i)))}function Fm(i){var s=null,o=De.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=De.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=qm(),De.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(i),u=0;u<i;u++)o[u]=P;return s.index++,o}function ir(i,s){return typeof s=="function"?s(i):s}function Ah(i){var s=St();return Hm(s,Je,i)}function Hm(i,s,o){var u=i.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=o;var d=i.baseQueue,p=u.pending;if(p!==null){if(d!==null){var E=d.next;d.next=p.next,p.next=E}s.baseQueue=d=p,u.pending=null}if(p=i.baseState,d===null)i.memoizedState=p;else{s=d.next;var w=E=null,C=null,q=s,W=!1;do{var ee=q.lane&-536870913;if(ee!==q.lane?(Be&ee)===ee:(Lr&ee)===ee){var F=q.revertLane;if(F===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ee===po&&(W=!0);else if((Lr&F)===F){q=q.next,F===po&&(W=!0);continue}else ee={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(w=C=ee,E=p):C=C.next=ee,De.lanes|=F,Hr|=F;ee=q.action,ra&&o(p,ee),p=q.hasEagerState?q.eagerState:o(p,ee)}else F={lane:ee,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(w=C=F,E=p):C=C.next=F,De.lanes|=ee,Hr|=ee;q=q.next}while(q!==null&&q!==s);if(C===null?E=p:C.next=w,!wn(p,i.memoizedState)&&(Bt=!0,W&&(o=go,o!==null)))throw o;i.memoizedState=p,i.baseState=E,i.baseQueue=C,u.lastRenderedState=p}return d===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Gm(i){var s=St(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=i;var u=o.dispatch,d=o.pending,p=s.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do p=i(p,E.action),E=E.next;while(E!==d);wn(p,s.memoizedState)||(Bt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),o.lastRenderedState=p}return[p,u]}function yv(i,s,o){var u=De,d=St(),p=Fe;if(p){if(o===void 0)throw Error(r(407));o=o()}else o=s();var E=!wn((Je||d).memoizedState,o);E&&(d.memoizedState=o,Bt=!0),d=d.queue;var w=Tv.bind(null,u,d,i);if(au(2048,8,w,[i]),d.getSnapshot!==s||E||It!==null&&It.memoizedState.tag&1){if(u.flags|=2048,Eo(9,bh(),Ev.bind(null,u,d,o,s),null),rt===null)throw Error(r(349));p||(Lr&124)!==0||vv(u,s,o)}return o}function vv(i,s,o){i.flags|=16384,i={getSnapshot:s,value:o},s=De.updateQueue,s===null?(s=qm(),De.updateQueue=s,s.stores=[i]):(o=s.stores,o===null?s.stores=[i]:o.push(i))}function Ev(i,s,o,u){s.value=o,s.getSnapshot=u,wv(s)&&Av(i)}function Tv(i,s,o){return o(function(){wv(s)&&Av(i)})}function wv(i){var s=i.getSnapshot;i=i.value;try{var o=s();return!wn(i,o)}catch{return!0}}function Av(i){var s=co(i,2);s!==null&&Cn(s,i,2)}function Km(i){var s=mn();if(typeof i=="function"){var o=i;if(i=o(),ra){En(!0);try{o()}finally{En(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:i},s}function bv(i,s,o,u){return i.baseState=o,Hm(i,Je,typeof u=="function"?u:ir)}function f1(i,s,o,u,d){if(Sh(i))throw Error(r(485));if(i=s.action,i!==null){var p={payload:d,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};X.T!==null?o(!0):p.isTransition=!1,u(p),o=s.pending,o===null?(p.next=s.pending=p,Iv(s,p)):(p.next=o.next,s.pending=o.next=p)}}function Iv(i,s){var o=s.action,u=s.payload,d=i.state;if(s.isTransition){var p=X.T,E={};X.T=E;try{var w=o(d,u),C=X.S;C!==null&&C(E,w),Sv(i,s,w)}catch(q){$m(i,s,q)}finally{X.T=p}}else try{p=o(d,u),Sv(i,s,p)}catch(q){$m(i,s,q)}}function Sv(i,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Rv(i,s,u)},function(u){return $m(i,s,u)}):Rv(i,s,o)}function Rv(i,s,o){s.status="fulfilled",s.value=o,Cv(s),i.state=o,s=i.pending,s!==null&&(o=s.next,o===s?i.pending=null:(o=o.next,s.next=o,Iv(i,o)))}function $m(i,s,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Cv(s),s=s.next;while(s!==u)}i.action=null}function Cv(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function Dv(i,s){return s}function xv(i,s){if(Fe){var o=rt.formState;if(o!==null){e:{var u=De;if(Fe){if(pt){t:{for(var d=pt,p=Ri;d.nodeType!==8;){if(!p){d=null;break t}if(d=ai(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){pt=ai(d.nextSibling),u=d.data==="F!";break e}}ea(u)}u=!1}u&&(s=o[0])}}return o=mn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dv,lastRenderedState:s},o.queue=u,o=Yv.bind(null,De,u),u.dispatch=o,u=Km(!1),p=Zm.bind(null,De,!1,u.queue),u=mn(),d={state:s,dispatch:null,action:i,pending:null},u.queue=d,o=f1.bind(null,De,d,p,o),d.dispatch=o,u.memoizedState=i,[s,o,!1]}function Ov(i){var s=St();return Nv(s,Je,i)}function Nv(i,s,o){if(s=Hm(i,s,Dv)[0],i=Ah(ir)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=su(s)}catch(E){throw E===Jl?_h:E}else u=s;s=St();var d=s.queue,p=d.dispatch;return o!==s.memoizedState&&(De.flags|=2048,Eo(9,bh(),d1.bind(null,d,o),null)),[u,p,i]}function d1(i,s){i.action=s}function Pv(i){var s=St(),o=Je;if(o!==null)return Nv(s,o,i);St(),s=s.memoizedState,o=St();var u=o.queue.dispatch;return o.memoizedState=i,[s,u,!1]}function Eo(i,s,o,u){return i={tag:i,create:o,deps:u,inst:s,next:null},s=De.updateQueue,s===null&&(s=qm(),De.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,s.lastEffect=i),i}function bh(){return{destroy:void 0,resource:void 0}}function Vv(){return St().memoizedState}function Ih(i,s,o,u){var d=mn();u=u===void 0?null:u,De.flags|=i,d.memoizedState=Eo(1|s,bh(),o,u)}function au(i,s,o,u){var d=St();u=u===void 0?null:u;var p=d.memoizedState.inst;Je!==null&&u!==null&&Lm(u,Je.memoizedState.deps)?d.memoizedState=Eo(s,p,o,u):(De.flags|=i,d.memoizedState=Eo(1|s,p,o,u))}function kv(i,s){Ih(8390656,8,i,s)}function Mv(i,s){au(2048,8,i,s)}function Lv(i,s){return au(4,2,i,s)}function Uv(i,s){return au(4,4,i,s)}function Bv(i,s){if(typeof s=="function"){i=i();var o=s(i);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function zv(i,s,o){o=o!=null?o.concat([i]):null,au(4,4,Bv.bind(null,s,i),o)}function Qm(){}function jv(i,s){var o=St();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Lm(s,u[1])?u[0]:(o.memoizedState=[i,s],i)}function qv(i,s){var o=St();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Lm(s,u[1]))return u[0];if(u=i(),ra){En(!0);try{i()}finally{En(!1)}}return o.memoizedState=[u,s],u}function Ym(i,s,o){return o===void 0||(Lr&1073741824)!==0?i.memoizedState=s:(i.memoizedState=o,i=GE(),De.lanes|=i,Hr|=i,o)}function Fv(i,s,o,u){return wn(o,s)?o:_o.current!==null?(i=Ym(i,o,u),wn(i,s)||(Bt=!0),i):(Lr&42)===0?(Bt=!0,i.memoizedState=o):(i=GE(),De.lanes|=i,Hr|=i,s)}function Hv(i,s,o,u,d){var p=ce.p;ce.p=p!==0&&8>p?p:8;var E=X.T,w={};X.T=w,Zm(i,!1,s,o);try{var C=d(),q=X.S;if(q!==null&&q(w,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var W=u1(C,u);ou(i,s,W,Rn(i))}else ou(i,s,u,Rn(i))}catch(ee){ou(i,s,{then:function(){},status:"rejected",reason:ee},Rn())}finally{ce.p=p,X.T=E}}function m1(){}function Xm(i,s,o,u){if(i.tag!==5)throw Error(r(476));var d=Gv(i).queue;Hv(i,d,s,ye,o===null?m1:function(){return Kv(i),o(u)})}function Gv(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:ye},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:o},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function Kv(i){var s=Gv(i).next.queue;ou(i,s,{},Rn())}function Wm(){return Jt(Iu)}function $v(){return St().memoizedState}function Qv(){return St().memoizedState}function p1(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var o=Rn();i=kr(o);var u=Mr(s,i,o);u!==null&&(Cn(u,s,o),tu(u,s,o)),s={cache:Rm()},i.payload=s;return}s=s.return}}function g1(i,s,o){var u=Rn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Sh(i)?Xv(s,o):(o=_m(i,s,o,u),o!==null&&(Cn(o,i,u),Wv(o,s,u)))}function Yv(i,s,o){var u=Rn();ou(i,s,o,u)}function ou(i,s,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Sh(i))Xv(s,d);else{var p=i.alternate;if(i.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var E=s.lastRenderedState,w=p(E,o);if(d.hasEagerState=!0,d.eagerState=w,wn(w,E))return uh(i,s,d,0),rt===null&&lh(),!1}catch{}finally{}if(o=_m(i,s,d,u),o!==null)return Cn(o,i,u),Wv(o,s,u),!0}return!1}function Zm(i,s,o,u){if(u={lane:2,revertLane:xp(),action:u,hasEagerState:!1,eagerState:null,next:null},Sh(i)){if(s)throw Error(r(479))}else s=_m(i,o,u,2),s!==null&&Cn(s,i,2)}function Sh(i){var s=i.alternate;return i===De||s!==null&&s===De}function Xv(i,s){yo=Eh=!0;var o=i.pending;o===null?s.next=s:(s.next=o.next,o.next=s),i.pending=s}function Wv(i,s,o){if((o&4194048)!==0){var u=s.lanes;u&=i.pendingLanes,o|=u,s.lanes=o,Dl(i,o)}}var Rh={readContext:Jt,use:wh,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useLayoutEffect:Tt,useInsertionEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useSyncExternalStore:Tt,useId:Tt,useHostTransitionStatus:Tt,useFormState:Tt,useActionState:Tt,useOptimistic:Tt,useMemoCache:Tt,useCacheRefresh:Tt},Zv={readContext:Jt,use:wh,useCallback:function(i,s){return mn().memoizedState=[i,s===void 0?null:s],i},useContext:Jt,useEffect:kv,useImperativeHandle:function(i,s,o){o=o!=null?o.concat([i]):null,Ih(4194308,4,Bv.bind(null,s,i),o)},useLayoutEffect:function(i,s){return Ih(4194308,4,i,s)},useInsertionEffect:function(i,s){Ih(4,2,i,s)},useMemo:function(i,s){var o=mn();s=s===void 0?null:s;var u=i();if(ra){En(!0);try{i()}finally{En(!1)}}return o.memoizedState=[u,s],u},useReducer:function(i,s,o){var u=mn();if(o!==void 0){var d=o(s);if(ra){En(!0);try{o(s)}finally{En(!1)}}}else d=s;return u.memoizedState=u.baseState=d,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:d},u.queue=i,i=i.dispatch=g1.bind(null,De,i),[u.memoizedState,i]},useRef:function(i){var s=mn();return i={current:i},s.memoizedState=i},useState:function(i){i=Km(i);var s=i.queue,o=Yv.bind(null,De,s);return s.dispatch=o,[i.memoizedState,o]},useDebugValue:Qm,useDeferredValue:function(i,s){var o=mn();return Ym(o,i,s)},useTransition:function(){var i=Km(!1);return i=Hv.bind(null,De,i.queue,!0,!1),mn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,o){var u=De,d=mn();if(Fe){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),rt===null)throw Error(r(349));(Be&124)!==0||vv(u,s,o)}d.memoizedState=o;var p={value:o,getSnapshot:s};return d.queue=p,kv(Tv.bind(null,u,p,i),[i]),u.flags|=2048,Eo(9,bh(),Ev.bind(null,u,p,o,s),null),o},useId:function(){var i=mn(),s=rt.identifierPrefix;if(Fe){var o=er,u=Ji;o=(u&~(1<<32-Zt(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Th++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=c1++,s="«"+s+"r"+o.toString(32)+"»";return i.memoizedState=s},useHostTransitionStatus:Wm,useFormState:xv,useActionState:xv,useOptimistic:function(i){var s=mn();s.memoizedState=s.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Zm.bind(null,De,!0,o),o.dispatch=s,[i,s]},useMemoCache:Fm,useCacheRefresh:function(){return mn().memoizedState=p1.bind(null,De)}},Jv={readContext:Jt,use:wh,useCallback:jv,useContext:Jt,useEffect:Mv,useImperativeHandle:zv,useInsertionEffect:Lv,useLayoutEffect:Uv,useMemo:qv,useReducer:Ah,useRef:Vv,useState:function(){return Ah(ir)},useDebugValue:Qm,useDeferredValue:function(i,s){var o=St();return Fv(o,Je.memoizedState,i,s)},useTransition:function(){var i=Ah(ir)[0],s=St().memoizedState;return[typeof i=="boolean"?i:su(i),s]},useSyncExternalStore:yv,useId:$v,useHostTransitionStatus:Wm,useFormState:Ov,useActionState:Ov,useOptimistic:function(i,s){var o=St();return bv(o,Je,i,s)},useMemoCache:Fm,useCacheRefresh:Qv},_1={readContext:Jt,use:wh,useCallback:jv,useContext:Jt,useEffect:Mv,useImperativeHandle:zv,useInsertionEffect:Lv,useLayoutEffect:Uv,useMemo:qv,useReducer:Gm,useRef:Vv,useState:function(){return Gm(ir)},useDebugValue:Qm,useDeferredValue:function(i,s){var o=St();return Je===null?Ym(o,i,s):Fv(o,Je.memoizedState,i,s)},useTransition:function(){var i=Gm(ir)[0],s=St().memoizedState;return[typeof i=="boolean"?i:su(i),s]},useSyncExternalStore:yv,useId:$v,useHostTransitionStatus:Wm,useFormState:Pv,useActionState:Pv,useOptimistic:function(i,s){var o=St();return Je!==null?bv(o,Je,i,s):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Fm,useCacheRefresh:Qv},To=null,lu=0;function Ch(i){var s=lu;return lu+=1,To===null&&(To=[]),cv(To,i,s)}function uu(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function Dh(i,s){throw s.$$typeof===T?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function eE(i){var s=i._init;return s(i._payload)}function tE(i){function s(M,V){if(i){var j=M.deletions;j===null?(M.deletions=[V],M.flags|=16):j.push(V)}}function o(M,V){if(!i)return null;for(;V!==null;)s(M,V),V=V.sibling;return null}function u(M){for(var V=new Map;M!==null;)M.key!==null?V.set(M.key,M):V.set(M.index,M),M=M.sibling;return V}function d(M,V){return M=Zi(M,V),M.index=0,M.sibling=null,M}function p(M,V,j){return M.index=j,i?(j=M.alternate,j!==null?(j=j.index,j<V?(M.flags|=67108866,V):j):(M.flags|=67108866,V)):(M.flags|=1048576,V)}function E(M){return i&&M.alternate===null&&(M.flags|=67108866),M}function w(M,V,j,J){return V===null||V.tag!==6?(V=vm(j,M.mode,J),V.return=M,V):(V=d(V,j),V.return=M,V)}function C(M,V,j,J){var de=j.type;return de===O?W(M,V,j.props.children,J,j.key):V!==null&&(V.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===I&&eE(de)===V.type)?(V=d(V,j.props),uu(V,j),V.return=M,V):(V=hh(j.type,j.key,j.props,null,M.mode,J),uu(V,j),V.return=M,V)}function q(M,V,j,J){return V===null||V.tag!==4||V.stateNode.containerInfo!==j.containerInfo||V.stateNode.implementation!==j.implementation?(V=Em(j,M.mode,J),V.return=M,V):(V=d(V,j.children||[]),V.return=M,V)}function W(M,V,j,J,de){return V===null||V.tag!==7?(V=Xs(j,M.mode,J,de),V.return=M,V):(V=d(V,j),V.return=M,V)}function ee(M,V,j){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=vm(""+V,M.mode,j),V.return=M,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case A:return j=hh(V.type,V.key,V.props,null,M.mode,j),uu(j,V),j.return=M,j;case R:return V=Em(V,M.mode,j),V.return=M,V;case I:var J=V._init;return V=J(V._payload),ee(M,V,j)}if(dt(V)||U(V))return V=Xs(V,M.mode,j,null),V.return=M,V;if(typeof V.then=="function")return ee(M,Ch(V),j);if(V.$$typeof===Q)return ee(M,ph(M,V),j);Dh(M,V)}return null}function F(M,V,j,J){var de=V!==null?V.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return de!==null?null:w(M,V,""+j,J);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case A:return j.key===de?C(M,V,j,J):null;case R:return j.key===de?q(M,V,j,J):null;case I:return de=j._init,j=de(j._payload),F(M,V,j,J)}if(dt(j)||U(j))return de!==null?null:W(M,V,j,J,null);if(typeof j.then=="function")return F(M,V,Ch(j),J);if(j.$$typeof===Q)return F(M,V,ph(M,j),J);Dh(M,j)}return null}function H(M,V,j,J,de){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return M=M.get(j)||null,w(V,M,""+J,de);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case A:return M=M.get(J.key===null?j:J.key)||null,C(V,M,J,de);case R:return M=M.get(J.key===null?j:J.key)||null,q(V,M,J,de);case I:var Ne=J._init;return J=Ne(J._payload),H(M,V,j,J,de)}if(dt(J)||U(J))return M=M.get(j)||null,W(V,M,J,de,null);if(typeof J.then=="function")return H(M,V,j,Ch(J),de);if(J.$$typeof===Q)return H(M,V,j,ph(V,J),de);Dh(V,J)}return null}function be(M,V,j,J){for(var de=null,Ne=null,_e=V,we=V=0,jt=null;_e!==null&&we<j.length;we++){_e.index>we?(jt=_e,_e=null):jt=_e.sibling;var je=F(M,_e,j[we],J);if(je===null){_e===null&&(_e=jt);break}i&&_e&&je.alternate===null&&s(M,_e),V=p(je,V,we),Ne===null?de=je:Ne.sibling=je,Ne=je,_e=jt}if(we===j.length)return o(M,_e),Fe&&Zs(M,we),de;if(_e===null){for(;we<j.length;we++)_e=ee(M,j[we],J),_e!==null&&(V=p(_e,V,we),Ne===null?de=_e:Ne.sibling=_e,Ne=_e);return Fe&&Zs(M,we),de}for(_e=u(_e);we<j.length;we++)jt=H(_e,M,we,j[we],J),jt!==null&&(i&&jt.alternate!==null&&_e.delete(jt.key===null?we:jt.key),V=p(jt,V,we),Ne===null?de=jt:Ne.sibling=jt,Ne=jt);return i&&_e.forEach(function(Jr){return s(M,Jr)}),Fe&&Zs(M,we),de}function Te(M,V,j,J){if(j==null)throw Error(r(151));for(var de=null,Ne=null,_e=V,we=V=0,jt=null,je=j.next();_e!==null&&!je.done;we++,je=j.next()){_e.index>we?(jt=_e,_e=null):jt=_e.sibling;var Jr=F(M,_e,je.value,J);if(Jr===null){_e===null&&(_e=jt);break}i&&_e&&Jr.alternate===null&&s(M,_e),V=p(Jr,V,we),Ne===null?de=Jr:Ne.sibling=Jr,Ne=Jr,_e=jt}if(je.done)return o(M,_e),Fe&&Zs(M,we),de;if(_e===null){for(;!je.done;we++,je=j.next())je=ee(M,je.value,J),je!==null&&(V=p(je,V,we),Ne===null?de=je:Ne.sibling=je,Ne=je);return Fe&&Zs(M,we),de}for(_e=u(_e);!je.done;we++,je=j.next())je=H(_e,M,we,je.value,J),je!==null&&(i&&je.alternate!==null&&_e.delete(je.key===null?we:je.key),V=p(je,V,we),Ne===null?de=je:Ne.sibling=je,Ne=je);return i&&_e.forEach(function(yC){return s(M,yC)}),Fe&&Zs(M,we),de}function tt(M,V,j,J){if(typeof j=="object"&&j!==null&&j.type===O&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case A:e:{for(var de=j.key;V!==null;){if(V.key===de){if(de=j.type,de===O){if(V.tag===7){o(M,V.sibling),J=d(V,j.props.children),J.return=M,M=J;break e}}else if(V.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===I&&eE(de)===V.type){o(M,V.sibling),J=d(V,j.props),uu(J,j),J.return=M,M=J;break e}o(M,V);break}else s(M,V);V=V.sibling}j.type===O?(J=Xs(j.props.children,M.mode,J,j.key),J.return=M,M=J):(J=hh(j.type,j.key,j.props,null,M.mode,J),uu(J,j),J.return=M,M=J)}return E(M);case R:e:{for(de=j.key;V!==null;){if(V.key===de)if(V.tag===4&&V.stateNode.containerInfo===j.containerInfo&&V.stateNode.implementation===j.implementation){o(M,V.sibling),J=d(V,j.children||[]),J.return=M,M=J;break e}else{o(M,V);break}else s(M,V);V=V.sibling}J=Em(j,M.mode,J),J.return=M,M=J}return E(M);case I:return de=j._init,j=de(j._payload),tt(M,V,j,J)}if(dt(j))return be(M,V,j,J);if(U(j)){if(de=U(j),typeof de!="function")throw Error(r(150));return j=de.call(j),Te(M,V,j,J)}if(typeof j.then=="function")return tt(M,V,Ch(j),J);if(j.$$typeof===Q)return tt(M,V,ph(M,j),J);Dh(M,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,V!==null&&V.tag===6?(o(M,V.sibling),J=d(V,j),J.return=M,M=J):(o(M,V),J=vm(j,M.mode,J),J.return=M,M=J),E(M)):o(M,V)}return function(M,V,j,J){try{lu=0;var de=tt(M,V,j,J);return To=null,de}catch(_e){if(_e===Jl||_e===_h)throw _e;var Ne=An(29,_e,null,M.mode);return Ne.lanes=J,Ne.return=M,Ne}finally{}}}var wo=tE(!0),nE=tE(!1),Kn=ne(null),Ci=null;function Ur(i){var s=i.alternate;se(Pt,Pt.current&1),se(Kn,i),Ci===null&&(s===null||_o.current!==null||s.memoizedState!==null)&&(Ci=i)}function iE(i){if(i.tag===22){if(se(Pt,Pt.current),se(Kn,i),Ci===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Ci=i)}}else Br()}function Br(){se(Pt,Pt.current),se(Kn,Kn.current)}function rr(i){he(Kn),Ci===i&&(Ci=null),he(Pt)}var Pt=ne(0);function xh(i){for(var s=i;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||qp(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function Jm(i,s,o,u){s=i.memoizedState,o=o(u,s),o=o==null?s:y({},s,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var ep={enqueueSetState:function(i,s,o){i=i._reactInternals;var u=Rn(),d=kr(u);d.payload=s,o!=null&&(d.callback=o),s=Mr(i,d,u),s!==null&&(Cn(s,i,u),tu(s,i,u))},enqueueReplaceState:function(i,s,o){i=i._reactInternals;var u=Rn(),d=kr(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=Mr(i,d,u),s!==null&&(Cn(s,i,u),tu(s,i,u))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var o=Rn(),u=kr(o);u.tag=2,s!=null&&(u.callback=s),s=Mr(i,u,o),s!==null&&(Cn(s,i,o),tu(s,i,o))}};function rE(i,s,o,u,d,p,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,p,E):s.prototype&&s.prototype.isPureReactComponent?!Gl(o,u)||!Gl(d,p):!0}function sE(i,s,o,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==i&&ep.enqueueReplaceState(s,s.state,null)}function sa(i,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(i=i.defaultProps){o===s&&(o=y({},o));for(var d in i)o[d]===void 0&&(o[d]=i[d])}return o}var Oh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}};function aE(i){Oh(i)}function oE(i){}function lE(i){Oh(i)}function Nh(i,s){try{var o=i.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function uE(i,s,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function tp(i,s,o){return o=kr(o),o.tag=3,o.payload={element:null},o.callback=function(){Nh(i,s)},o}function cE(i){return i=kr(i),i.tag=3,i}function hE(i,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var p=u.value;i.payload=function(){return d(p)},i.callback=function(){uE(s,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){uE(s,o,u),typeof d!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function y1(i,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Xl(s,o,d,!0),o=Kn.current,o!==null){switch(o.tag){case 13:return Ci===null?Ip():o.alternate===null&&gt===0&&(gt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===xm?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Rp(i,u,d)),!1;case 22:return o.flags|=65536,u===xm?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Rp(i,u,d)),!1}throw Error(r(435,o.tag))}return Rp(i,u,d),Ip(),!1}if(Fe)return s=Kn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==Am&&(i=Error(r(422),{cause:u}),Yl(qn(i,o)))):(u!==Am&&(s=Error(r(423),{cause:u}),Yl(qn(s,o))),i=i.current.alternate,i.flags|=65536,d&=-d,i.lanes|=d,u=qn(u,o),d=tp(i.stateNode,u,d),Pm(i,d),gt!==4&&(gt=2)),!1;var p=Error(r(520),{cause:u});if(p=qn(p,o),gu===null?gu=[p]:gu.push(p),gt!==4&&(gt=2),s===null)return!0;u=qn(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,i=d&-d,o.lanes|=i,i=tp(o.stateNode,u,i),Pm(o,i),!1;case 1:if(s=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Gr===null||!Gr.has(p))))return o.flags|=65536,d&=-d,o.lanes|=d,d=cE(d),hE(d,i,o,u),Pm(o,d),!1}o=o.return}while(o!==null);return!1}var fE=Error(r(461)),Bt=!1;function $t(i,s,o,u){s.child=i===null?nE(s,null,o,u):wo(s,i.child,o,u)}function dE(i,s,o,u,d){o=o.render;var p=s.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return na(s),u=Um(i,s,o,E,p,d),w=Bm(),i!==null&&!Bt?(zm(i,s,d),sr(i,s,d)):(Fe&&w&&Tm(s),s.flags|=1,$t(i,s,u,d),s.child)}function mE(i,s,o,u,d){if(i===null){var p=o.type;return typeof p=="function"&&!ym(p)&&p.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=p,pE(i,s,p,u,d)):(i=hh(o.type,null,u,s,s.mode,d),i.ref=s.ref,i.return=s,s.child=i)}if(p=i.child,!up(i,d)){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Gl,o(E,u)&&i.ref===s.ref)return sr(i,s,d)}return s.flags|=1,i=Zi(p,u),i.ref=s.ref,i.return=s,s.child=i}function pE(i,s,o,u,d){if(i!==null){var p=i.memoizedProps;if(Gl(p,u)&&i.ref===s.ref)if(Bt=!1,s.pendingProps=u=p,up(i,d))(i.flags&131072)!==0&&(Bt=!0);else return s.lanes=i.lanes,sr(i,s,d)}return np(i,s,o,u,d)}function gE(i,s,o){var u=s.pendingProps,d=u.children,p=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,i!==null){for(d=s.child=i.child,p=0;d!==null;)p=p|d.lanes|d.childLanes,d=d.sibling;s.childLanes=p&~u}else s.childLanes=0,s.child=null;return _E(i,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&gh(s,p!==null?p.cachePool:null),p!==null?pv(s,p):km(),iE(s);else return s.lanes=s.childLanes=536870912,_E(i,s,p!==null?p.baseLanes|o:o,o)}else p!==null?(gh(s,p.cachePool),pv(s,p),Br(),s.memoizedState=null):(i!==null&&gh(s,null),km(),Br());return $t(i,s,d,o),s.child}function _E(i,s,o,u){var d=Dm();return d=d===null?null:{parent:Nt._currentValue,pool:d},s.memoizedState={baseLanes:o,cachePool:d},i!==null&&gh(s,null),km(),iE(s),i!==null&&Xl(i,s,u,!0),null}function Ph(i,s){var o=s.ref;if(o===null)i!==null&&i.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(i===null||i.ref!==o)&&(s.flags|=4194816)}}function np(i,s,o,u,d){return na(s),o=Um(i,s,o,u,void 0,d),u=Bm(),i!==null&&!Bt?(zm(i,s,d),sr(i,s,d)):(Fe&&u&&Tm(s),s.flags|=1,$t(i,s,o,d),s.child)}function yE(i,s,o,u,d,p){return na(s),s.updateQueue=null,o=_v(s,u,o,d),gv(i),u=Bm(),i!==null&&!Bt?(zm(i,s,p),sr(i,s,p)):(Fe&&u&&Tm(s),s.flags|=1,$t(i,s,o,p),s.child)}function vE(i,s,o,u,d){if(na(s),s.stateNode===null){var p=ho,E=o.contextType;typeof E=="object"&&E!==null&&(p=Jt(E)),p=new o(u,p),s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=ep,s.stateNode=p,p._reactInternals=s,p=s.stateNode,p.props=u,p.state=s.memoizedState,p.refs={},Om(s),E=o.contextType,p.context=typeof E=="object"&&E!==null?Jt(E):ho,p.state=s.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Jm(s,o,E,u),p.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&ep.enqueueReplaceState(p,p.state,null),iu(s,u,p,d),nu(),p.state=s.memoizedState),typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(i===null){p=s.stateNode;var w=s.memoizedProps,C=sa(o,w);p.props=C;var q=p.context,W=o.contextType;E=ho,typeof W=="object"&&W!==null&&(E=Jt(W));var ee=o.getDerivedStateFromProps;W=typeof ee=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,W||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||q!==E)&&sE(s,p,u,E),Vr=!1;var F=s.memoizedState;p.state=F,iu(s,u,p,d),nu(),q=s.memoizedState,w||F!==q||Vr?(typeof ee=="function"&&(Jm(s,o,ee,u),q=s.memoizedState),(C=Vr||rE(s,o,C,u,F,q,E))?(W||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(s.flags|=4194308)):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=q),p.props=u,p.state=q,p.context=E,u=C):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{p=s.stateNode,Nm(i,s),E=s.memoizedProps,W=sa(o,E),p.props=W,ee=s.pendingProps,F=p.context,q=o.contextType,C=ho,typeof q=="object"&&q!==null&&(C=Jt(q)),w=o.getDerivedStateFromProps,(q=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==ee||F!==C)&&sE(s,p,u,C),Vr=!1,F=s.memoizedState,p.state=F,iu(s,u,p,d),nu();var H=s.memoizedState;E!==ee||F!==H||Vr||i!==null&&i.dependencies!==null&&mh(i.dependencies)?(typeof w=="function"&&(Jm(s,o,w,u),H=s.memoizedState),(W=Vr||rE(s,o,W,u,F,H,C)||i!==null&&i.dependencies!==null&&mh(i.dependencies))?(q||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,H,C),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,H,C)),typeof p.componentDidUpdate=="function"&&(s.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=H),p.props=u,p.state=H,p.context=C,u=W):(typeof p.componentDidUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&F===i.memoizedState||(s.flags|=1024),u=!1)}return p=u,Ph(i,s),u=(s.flags&128)!==0,p||u?(p=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),s.flags|=1,i!==null&&u?(s.child=wo(s,i.child,null,d),s.child=wo(s,null,o,d)):$t(i,s,o,d),s.memoizedState=p.state,i=s.child):i=sr(i,s,d),i}function EE(i,s,o,u){return Ql(),s.flags|=256,$t(i,s,o,u),s.child}var ip={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rp(i){return{baseLanes:i,cachePool:ov()}}function sp(i,s,o){return i=i!==null?i.childLanes&~o:0,s&&(i|=$n),i}function TE(i,s,o){var u=s.pendingProps,d=!1,p=(s.flags&128)!==0,E;if((E=p)||(E=i!==null&&i.memoizedState===null?!1:(Pt.current&2)!==0),E&&(d=!0,s.flags&=-129),E=(s.flags&32)!==0,s.flags&=-33,i===null){if(Fe){if(d?Ur(s):Br(),Fe){var w=pt,C;if(C=w){e:{for(C=w,w=Ri;C.nodeType!==8;){if(!w){w=null;break e}if(C=ai(C.nextSibling),C===null){w=null;break e}}w=C}w!==null?(s.memoizedState={dehydrated:w,treeContext:Ws!==null?{id:Ji,overflow:er}:null,retryLane:536870912,hydrationErrors:null},C=An(18,null,null,0),C.stateNode=w,C.return=s,s.child=C,cn=s,pt=null,C=!0):C=!1}C||ea(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return qp(w)?s.lanes=32:s.lanes=536870912,null;rr(s)}return w=u.children,u=u.fallback,d?(Br(),d=s.mode,w=Vh({mode:"hidden",children:w},d),u=Xs(u,d,o,null),w.return=s,u.return=s,w.sibling=u,s.child=w,d=s.child,d.memoizedState=rp(o),d.childLanes=sp(i,E,o),s.memoizedState=ip,u):(Ur(s),ap(s,w))}if(C=i.memoizedState,C!==null&&(w=C.dehydrated,w!==null)){if(p)s.flags&256?(Ur(s),s.flags&=-257,s=op(i,s,o)):s.memoizedState!==null?(Br(),s.child=i.child,s.flags|=128,s=null):(Br(),d=u.fallback,w=s.mode,u=Vh({mode:"visible",children:u.children},w),d=Xs(d,w,o,null),d.flags|=2,u.return=s,d.return=s,u.sibling=d,s.child=u,wo(s,i.child,null,o),u=s.child,u.memoizedState=rp(o),u.childLanes=sp(i,E,o),s.memoizedState=ip,s=d);else if(Ur(s),qp(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(r(419)),u.stack="",u.digest=E,Yl({value:u,source:null,stack:null}),s=op(i,s,o)}else if(Bt||Xl(i,s,o,!1),E=(o&i.childLanes)!==0,Bt||E){if(E=rt,E!==null&&(u=o&-o,u=(u&42)!==0?1:Sr(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,co(i,u),Cn(E,i,u),fE;w.data==="$?"||Ip(),s=op(i,s,o)}else w.data==="$?"?(s.flags|=192,s.child=i.child,s=null):(i=C.treeContext,pt=ai(w.nextSibling),cn=s,Fe=!0,Js=null,Ri=!1,i!==null&&(Hn[Gn++]=Ji,Hn[Gn++]=er,Hn[Gn++]=Ws,Ji=i.id,er=i.overflow,Ws=s),s=ap(s,u.children),s.flags|=4096);return s}return d?(Br(),d=u.fallback,w=s.mode,C=i.child,q=C.sibling,u=Zi(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,q!==null?d=Zi(q,d):(d=Xs(d,w,o,null),d.flags|=2),d.return=s,u.return=s,u.sibling=d,s.child=u,u=d,d=s.child,w=i.child.memoizedState,w===null?w=rp(o):(C=w.cachePool,C!==null?(q=Nt._currentValue,C=C.parent!==q?{parent:q,pool:q}:C):C=ov(),w={baseLanes:w.baseLanes|o,cachePool:C}),d.memoizedState=w,d.childLanes=sp(i,E,o),s.memoizedState=ip,u):(Ur(s),o=i.child,i=o.sibling,o=Zi(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,i!==null&&(E=s.deletions,E===null?(s.deletions=[i],s.flags|=16):E.push(i)),s.child=o,s.memoizedState=null,o)}function ap(i,s){return s=Vh({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Vh(i,s){return i=An(22,i,null,s),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function op(i,s,o){return wo(s,i.child,null,o),i=ap(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function wE(i,s,o){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),Im(i.return,s,o)}function lp(i,s,o,u,d){var p=i.memoizedState;p===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function AE(i,s,o){var u=s.pendingProps,d=u.revealOrder,p=u.tail;if($t(i,s,u.children,o),u=Pt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&wE(i,o,s);else if(i.tag===19)wE(i,o,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(se(Pt,u),d){case"forwards":for(o=s.child,d=null;o!==null;)i=o.alternate,i!==null&&xh(i)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),lp(s,!1,d,o,p);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(i=d.alternate,i!==null&&xh(i)===null){s.child=d;break}i=d.sibling,d.sibling=o,o=d,d=i}lp(s,!0,o,null,p);break;case"together":lp(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function sr(i,s,o){if(i!==null&&(s.dependencies=i.dependencies),Hr|=s.lanes,(o&s.childLanes)===0)if(i!==null){if(Xl(i,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,o=Zi(i,i.pendingProps),s.child=o,o.return=s;i.sibling!==null;)i=i.sibling,o=o.sibling=Zi(i,i.pendingProps),o.return=s;o.sibling=null}return s.child}function up(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&mh(i)))}function v1(i,s,o){switch(s.tag){case 3:it(s,s.stateNode.containerInfo),Pr(s,Nt,i.memoizedState.cache),Ql();break;case 27:case 5:Ir(s);break;case 4:it(s,s.stateNode.containerInfo);break;case 10:Pr(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Ur(s),s.flags|=128,null):(o&s.child.childLanes)!==0?TE(i,s,o):(Ur(s),i=sr(i,s,o),i!==null?i.sibling:null);Ur(s);break;case 19:var d=(i.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Xl(i,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return AE(i,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),se(Pt,Pt.current),u)break;return null;case 22:case 23:return s.lanes=0,gE(i,s,o);case 24:Pr(s,Nt,i.memoizedState.cache)}return sr(i,s,o)}function bE(i,s,o){if(i!==null)if(i.memoizedProps!==s.pendingProps)Bt=!0;else{if(!up(i,o)&&(s.flags&128)===0)return Bt=!1,v1(i,s,o);Bt=(i.flags&131072)!==0}else Bt=!1,Fe&&(s.flags&1048576)!==0&&ev(s,dh,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var u=s.elementType,d=u._init;if(u=d(u._payload),s.type=u,typeof u=="function")ym(u)?(i=sa(u,i),s.tag=1,s=vE(null,s,u,i,o)):(s.tag=0,s=np(null,s,u,i,o));else{if(u!=null){if(d=u.$$typeof,d===oe){s.tag=11,s=dE(null,s,u,i,o);break e}else if(d===x){s.tag=14,s=mE(null,s,u,i,o);break e}}throw s=Ht(u)||u,Error(r(306,s,""))}}return s;case 0:return np(i,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=sa(u,s.pendingProps),vE(i,s,u,d,o);case 3:e:{if(it(s,s.stateNode.containerInfo),i===null)throw Error(r(387));u=s.pendingProps;var p=s.memoizedState;d=p.element,Nm(i,s),iu(s,u,null,o);var E=s.memoizedState;if(u=E.cache,Pr(s,Nt,u),u!==p.cache&&Sm(s,[Nt],o,!0),nu(),u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache},s.updateQueue.baseState=p,s.memoizedState=p,s.flags&256){s=EE(i,s,u,o);break e}else if(u!==d){d=qn(Error(r(424)),s),Yl(d),s=EE(i,s,u,o);break e}else{switch(i=s.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(pt=ai(i.firstChild),cn=s,Fe=!0,Js=null,Ri=!0,o=nE(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ql(),u===d){s=sr(i,s,o);break e}$t(i,s,u,o)}s=s.child}return s;case 26:return Ph(i,s),i===null?(o=CT(s.type,null,s.pendingProps,null))?s.memoizedState=o:Fe||(o=s.type,i=s.pendingProps,u=Qh(Se.current).createElement(o),u[Dt]=s,u[At]=i,Yt(u,o,i),Et(u),s.stateNode=u):s.memoizedState=CT(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return Ir(s),i===null&&Fe&&(u=s.stateNode=IT(s.type,s.pendingProps,Se.current),cn=s,Ri=!0,d=pt,Qr(s.type)?(Fp=d,pt=ai(u.firstChild)):pt=d),$t(i,s,s.pendingProps.children,o),Ph(i,s),i===null&&(s.flags|=4194304),s.child;case 5:return i===null&&Fe&&((d=u=pt)&&(u=$1(u,s.type,s.pendingProps,Ri),u!==null?(s.stateNode=u,cn=s,pt=ai(u.firstChild),Ri=!1,d=!0):d=!1),d||ea(s)),Ir(s),d=s.type,p=s.pendingProps,E=i!==null?i.memoizedProps:null,u=p.children,Bp(d,p)?u=null:E!==null&&Bp(d,E)&&(s.flags|=32),s.memoizedState!==null&&(d=Um(i,s,h1,null,null,o),Iu._currentValue=d),Ph(i,s),$t(i,s,u,o),s.child;case 6:return i===null&&Fe&&((i=o=pt)&&(o=Q1(o,s.pendingProps,Ri),o!==null?(s.stateNode=o,cn=s,pt=null,i=!0):i=!1),i||ea(s)),null;case 13:return TE(i,s,o);case 4:return it(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=wo(s,null,u,o):$t(i,s,u,o),s.child;case 11:return dE(i,s,s.type,s.pendingProps,o);case 7:return $t(i,s,s.pendingProps,o),s.child;case 8:return $t(i,s,s.pendingProps.children,o),s.child;case 12:return $t(i,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Pr(s,s.type,u.value),$t(i,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,na(s),d=Jt(d),u=u(d),s.flags|=1,$t(i,s,u,o),s.child;case 14:return mE(i,s,s.type,s.pendingProps,o);case 15:return pE(i,s,s.type,s.pendingProps,o);case 19:return AE(i,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},i===null?(o=Vh(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Zi(i.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return gE(i,s,o);case 24:return na(s),u=Jt(Nt),i===null?(d=Dm(),d===null&&(d=rt,p=Rm(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=o),d=p),s.memoizedState={parent:u,cache:d},Om(s),Pr(s,Nt,d)):((i.lanes&o)!==0&&(Nm(i,s),iu(s,null,null,o),nu()),d=i.memoizedState,p=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Pr(s,Nt,u)):(u=p.cache,Pr(s,Nt,u),u!==d.cache&&Sm(s,[Nt],o,!0))),$t(i,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}function ar(i){i.flags|=4}function IE(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!PT(s)){if(s=Kn.current,s!==null&&((Be&4194048)===Be?Ci!==null:(Be&62914560)!==Be&&(Be&536870912)===0||s!==Ci))throw eu=xm,lv;i.flags|=8192}}function kh(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?Rl():536870912,i.lanes|=s,So|=s)}function cu(i,s){if(!Fe)switch(i.tailMode){case"hidden":s=i.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function ct(i){var s=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(s)for(var d=i.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=u,i.childLanes=o,s}function E1(i,s,o){var u=s.pendingProps;switch(wm(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(s),null;case 1:return ct(s),null;case 3:return o=s.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),nr(Nt),pi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&($l(s)?ar(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,iv())),ct(s),null;case 26:return o=s.memoizedState,i===null?(ar(s),o!==null?(ct(s),IE(s,o)):(ct(s),s.flags&=-16777217)):o?o!==i.memoizedState?(ar(s),ct(s),IE(s,o)):(ct(s),s.flags&=-16777217):(i.memoizedProps!==u&&ar(s),ct(s),s.flags&=-16777217),null;case 27:Bi(s),o=Se.current;var d=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==u&&ar(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ct(s),null}i=Ee.current,$l(s)?tv(s):(i=IT(d,u,o),s.stateNode=i,ar(s))}return ct(s),null;case 5:if(Bi(s),o=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==u&&ar(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return ct(s),null}if(i=Ee.current,$l(s))tv(s);else{switch(d=Qh(Se.current),i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}i[Dt]=s,i[At]=u;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=i;e:switch(Yt(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ar(s)}}return ct(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==u&&ar(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(r(166));if(i=Se.current,$l(s)){if(i=s.stateNode,o=s.memoizedProps,u=null,d=cn,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}i[Dt]=s,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||yT(i.nodeValue,o)),i||ea(s)}else i=Qh(i).createTextNode(u),i[Dt]=s,s.stateNode=i}return ct(s),null;case 13:if(u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(d=$l(s),u!==null&&u.dehydrated!==null){if(i===null){if(!d)throw Error(r(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(r(317));d[Dt]=s}else Ql(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ct(s),d=!1}else d=iv(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(rr(s),s):(rr(s),null)}if(rr(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==d&&(u.flags|=2048)}return o!==i&&o&&(s.child.flags|=8192),kh(s,s.updateQueue),ct(s),null;case 4:return pi(),i===null&&Vp(s.stateNode.containerInfo),ct(s),null;case 10:return nr(s.type),ct(s),null;case 19:if(he(Pt),d=s.memoizedState,d===null)return ct(s),null;if(u=(s.flags&128)!==0,p=d.rendering,p===null)if(u)cu(d,!1);else{if(gt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(p=xh(i),p!==null){for(s.flags|=128,cu(d,!1),i=p.updateQueue,s.updateQueue=i,kh(s,i),s.subtreeFlags=0,i=o,o=s.child;o!==null;)Jy(o,i),o=o.sibling;return se(Pt,Pt.current&1|2),s.child}i=i.sibling}d.tail!==null&&Mn()>Uh&&(s.flags|=128,u=!0,cu(d,!1),s.lanes=4194304)}else{if(!u)if(i=xh(p),i!==null){if(s.flags|=128,u=!0,i=i.updateQueue,s.updateQueue=i,kh(s,i),cu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!Fe)return ct(s),null}else 2*Mn()-d.renderingStartTime>Uh&&o!==536870912&&(s.flags|=128,u=!0,cu(d,!1),s.lanes=4194304);d.isBackwards?(p.sibling=s.child,s.child=p):(i=d.last,i!==null?i.sibling=p:s.child=p,d.last=p)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Mn(),s.sibling=null,i=Pt.current,se(Pt,u?i&1|2:i&1),s):(ct(s),null);case 22:case 23:return rr(s),Mm(),u=s.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(ct(s),s.subtreeFlags&6&&(s.flags|=8192)):ct(s),o=s.updateQueue,o!==null&&kh(s,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),i!==null&&he(ia),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),nr(Nt),ct(s),null;case 25:return null;case 30:return null}throw Error(r(156,s.tag))}function T1(i,s){switch(wm(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return nr(Nt),pi(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return Bi(s),null;case 13:if(rr(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));Ql()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return he(Pt),null;case 4:return pi(),null;case 10:return nr(s.type),null;case 22:case 23:return rr(s),Mm(),i!==null&&he(ia),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return nr(Nt),null;case 25:return null;default:return null}}function SE(i,s){switch(wm(s),s.tag){case 3:nr(Nt),pi();break;case 26:case 27:case 5:Bi(s);break;case 4:pi();break;case 13:rr(s);break;case 19:he(Pt);break;case 10:nr(s.type);break;case 22:case 23:rr(s),Mm(),i!==null&&he(ia);break;case 24:nr(Nt)}}function hu(i,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&i)===i){u=void 0;var p=o.create,E=o.inst;u=p(),E.destroy=u}o=o.next}while(o!==d)}}catch(w){nt(s,s.return,w)}}function zr(i,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var p=d.next;u=p;do{if((u.tag&i)===i){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,d=s;var C=o,q=w;try{q()}catch(W){nt(d,C,W)}}}u=u.next}while(u!==p)}}catch(W){nt(s,s.return,W)}}function RE(i){var s=i.updateQueue;if(s!==null){var o=i.stateNode;try{mv(s,o)}catch(u){nt(i,i.return,u)}}}function CE(i,s,o){o.props=sa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){nt(i,s,u)}}function fu(i,s){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(d){nt(i,s,d)}}function Di(i,s){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){nt(i,s,d)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){nt(i,s,d)}else o.current=null}function DE(i){var s=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){nt(i,i.return,d)}}function cp(i,s,o){try{var u=i.stateNode;q1(u,i.type,o,s),u[At]=s}catch(d){nt(i,i.return,d)}}function xE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Qr(i.type)||i.tag===4}function hp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||xE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Qr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function fp(i,s,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(i),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=$h));else if(u!==4&&(u===27&&Qr(i.type)&&(o=i.stateNode,s=null),i=i.child,i!==null))for(fp(i,s,o),i=i.sibling;i!==null;)fp(i,s,o),i=i.sibling}function Mh(i,s,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?o.insertBefore(i,s):o.appendChild(i);else if(u!==4&&(u===27&&Qr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Mh(i,s,o),i=i.sibling;i!==null;)Mh(i,s,o),i=i.sibling}function OE(i){var s=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Yt(s,u,o),s[Dt]=i,s[At]=o}catch(p){nt(i,i.return,p)}}var or=!1,wt=!1,dp=!1,NE=typeof WeakSet=="function"?WeakSet:Set,zt=null;function w1(i,s){if(i=i.containerInfo,Lp=ef,i=Fy(i),hm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,w=-1,C=-1,q=0,W=0,ee=i,F=null;t:for(;;){for(var H;ee!==o||d!==0&&ee.nodeType!==3||(w=E+d),ee!==p||u!==0&&ee.nodeType!==3||(C=E+u),ee.nodeType===3&&(E+=ee.nodeValue.length),(H=ee.firstChild)!==null;)F=ee,ee=H;for(;;){if(ee===i)break t;if(F===o&&++q===d&&(w=E),F===p&&++W===u&&(C=E),(H=ee.nextSibling)!==null)break;ee=F,F=ee.parentNode}ee=H}o=w===-1||C===-1?null:{start:w,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Up={focusedElem:i,selectionRange:o},ef=!1,zt=s;zt!==null;)if(s=zt,i=s.child,(s.subtreeFlags&1024)!==0&&i!==null)i.return=s,zt=i;else for(;zt!==null;){switch(s=zt,p=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&p!==null){i=void 0,o=s,d=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var be=sa(o.type,d,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(be,p),u.__reactInternalSnapshotBeforeUpdate=i}catch(Te){nt(o,o.return,Te)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,o=i.nodeType,o===9)jp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":jp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,zt=i;break}zt=s.return}}function PE(i,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:jr(i,o),u&4&&hu(5,o);break;case 1:if(jr(i,o),u&4)if(i=o.stateNode,s===null)try{i.componentDidMount()}catch(E){nt(o,o.return,E)}else{var d=sa(o.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(d,s,i.__reactInternalSnapshotBeforeUpdate)}catch(E){nt(o,o.return,E)}}u&64&&RE(o),u&512&&fu(o,o.return);break;case 3:if(jr(i,o),u&64&&(i=o.updateQueue,i!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{mv(i,s)}catch(E){nt(o,o.return,E)}}break;case 27:s===null&&u&4&&OE(o);case 26:case 5:jr(i,o),s===null&&u&4&&DE(o),u&512&&fu(o,o.return);break;case 12:jr(i,o);break;case 13:jr(i,o),u&4&&ME(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=O1.bind(null,o),Y1(i,o))));break;case 22:if(u=o.memoizedState!==null||or,!u){s=s!==null&&s.memoizedState!==null||wt,d=or;var p=wt;or=u,(wt=s)&&!p?qr(i,o,(o.subtreeFlags&8772)!==0):jr(i,o),or=d,wt=p}break;case 30:break;default:jr(i,o)}}function VE(i){var s=i.alternate;s!==null&&(i.alternate=null,VE(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Dr(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var at=null,pn=!1;function lr(i,s,o){for(o=o.child;o!==null;)kE(i,s,o),o=o.sibling}function kE(i,s,o){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(mt,o)}catch{}switch(o.tag){case 26:wt||Di(o,s),lr(i,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:wt||Di(o,s);var u=at,d=pn;Qr(o.type)&&(at=o.stateNode,pn=!1),lr(i,s,o),Tu(o.stateNode),at=u,pn=d;break;case 5:wt||Di(o,s);case 6:if(u=at,d=pn,at=null,lr(i,s,o),at=u,pn=d,at!==null)if(pn)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(o.stateNode)}catch(p){nt(o,s,p)}else try{at.removeChild(o.stateNode)}catch(p){nt(o,s,p)}break;case 18:at!==null&&(pn?(i=at,AT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Du(i)):AT(at,o.stateNode));break;case 4:u=at,d=pn,at=o.stateNode.containerInfo,pn=!0,lr(i,s,o),at=u,pn=d;break;case 0:case 11:case 14:case 15:wt||zr(2,o,s),wt||zr(4,o,s),lr(i,s,o);break;case 1:wt||(Di(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&CE(o,s,u)),lr(i,s,o);break;case 21:lr(i,s,o);break;case 22:wt=(u=wt)||o.memoizedState!==null,lr(i,s,o),wt=u;break;default:lr(i,s,o)}}function ME(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Du(i)}catch(o){nt(s,s.return,o)}}function A1(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new NE),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new NE),s;default:throw Error(r(435,i.tag))}}function mp(i,s){var o=A1(i);s.forEach(function(u){var d=N1.bind(null,i,u);o.has(u)||(o.add(u),u.then(d,d))})}function bn(i,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],p=i,E=s,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(Qr(w.type)){at=w.stateNode,pn=!1;break e}break;case 5:at=w.stateNode,pn=!1;break e;case 3:case 4:at=w.stateNode.containerInfo,pn=!0;break e}w=w.return}if(at===null)throw Error(r(160));kE(p,E,d),at=null,pn=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)LE(s,i),s=s.sibling}var si=null;function LE(i,s){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:bn(s,i),In(i),u&4&&(zr(3,i,i.return),hu(3,i),zr(5,i,i.return));break;case 1:bn(s,i),In(i),u&512&&(wt||o===null||Di(o,o.return)),u&64&&or&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=si;if(bn(s,i),In(i),u&512&&(wt||o===null||Di(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":p=d.getElementsByTagName("title")[0],(!p||p[Vs]||p[Dt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(u),d.head.insertBefore(p,d.querySelector("head > title"))),Yt(p,u,o),p[Dt]=i,Et(p),u=p;break e;case"link":var E=OT("link","href",d).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(p=E[w],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}p=d.createElement(u),Yt(p,u,o),d.head.appendChild(p);break;case"meta":if(E=OT("meta","content",d).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(p=E[w],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}p=d.createElement(u),Yt(p,u,o),d.head.appendChild(p);break;default:throw Error(r(468,u))}p[Dt]=i,Et(p),u=p}i.stateNode=u}else NT(d,i.type,i.stateNode);else i.stateNode=xT(d,u,i.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?NT(d,i.type,i.stateNode):xT(d,u,i.memoizedProps)):u===null&&i.stateNode!==null&&cp(i,i.memoizedProps,o.memoizedProps)}break;case 27:bn(s,i),In(i),u&512&&(wt||o===null||Di(o,o.return)),o!==null&&u&4&&cp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(bn(s,i),In(i),u&512&&(wt||o===null||Di(o,o.return)),i.flags&32){d=i.stateNode;try{Un(d,"")}catch(H){nt(i,i.return,H)}}u&4&&i.stateNode!=null&&(d=i.memoizedProps,cp(i,d,o!==null?o.memoizedProps:d)),u&1024&&(dp=!0);break;case 6:if(bn(s,i),In(i),u&4){if(i.stateNode===null)throw Error(r(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(H){nt(i,i.return,H)}}break;case 3:if(Wh=null,d=si,si=Yh(s.containerInfo),bn(s,i),si=d,In(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Du(s.containerInfo)}catch(H){nt(i,i.return,H)}dp&&(dp=!1,UE(i));break;case 4:u=si,si=Yh(i.stateNode.containerInfo),bn(s,i),In(i),si=u;break;case 12:bn(s,i),In(i);break;case 13:bn(s,i),In(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Ep=Mn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,mp(i,u)));break;case 22:d=i.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,q=or,W=wt;if(or=q||d,wt=W||C,bn(s,i),wt=W,or=q,In(i),u&8192)e:for(s=i.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||C||or||wt||aa(i)),o=null,s=i;;){if(s.tag===5||s.tag===26){if(o===null){C=o=s;try{if(p=C.stateNode,d)E=p.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=C.stateNode;var ee=C.memoizedProps.style,F=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;w.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(H){nt(C,C.return,H)}}}else if(s.tag===6){if(o===null){C=s;try{C.stateNode.nodeValue=d?"":C.memoizedProps}catch(H){nt(C,C.return,H)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,mp(i,o))));break;case 19:bn(s,i),In(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,mp(i,u)));break;case 30:break;case 21:break;default:bn(s,i),In(i)}}function In(i){var s=i.flags;if(s&2){try{for(var o,u=i.return;u!==null;){if(xE(u)){o=u;break}u=u.return}if(o==null)throw Error(r(160));switch(o.tag){case 27:var d=o.stateNode,p=hp(i);Mh(i,p,d);break;case 5:var E=o.stateNode;o.flags&32&&(Un(E,""),o.flags&=-33);var w=hp(i);Mh(i,w,E);break;case 3:case 4:var C=o.stateNode.containerInfo,q=hp(i);fp(i,q,C);break;default:throw Error(r(161))}}catch(W){nt(i,i.return,W)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function UE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;UE(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function jr(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)PE(i,s.alternate,s),s=s.sibling}function aa(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:zr(4,s,s.return),aa(s);break;case 1:Di(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&CE(s,s.return,o),aa(s);break;case 27:Tu(s.stateNode);case 26:case 5:Di(s,s.return),aa(s);break;case 22:s.memoizedState===null&&aa(s);break;case 30:aa(s);break;default:aa(s)}i=i.sibling}}function qr(i,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=i,p=s,E=p.flags;switch(p.tag){case 0:case 11:case 15:qr(d,p,o),hu(4,p);break;case 1:if(qr(d,p,o),u=p,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(q){nt(u,u.return,q)}if(u=p,d=u.updateQueue,d!==null){var w=u.stateNode;try{var C=d.shared.hiddenCallbacks;if(C!==null)for(d.shared.hiddenCallbacks=null,d=0;d<C.length;d++)dv(C[d],w)}catch(q){nt(u,u.return,q)}}o&&E&64&&RE(p),fu(p,p.return);break;case 27:OE(p);case 26:case 5:qr(d,p,o),o&&u===null&&E&4&&DE(p),fu(p,p.return);break;case 12:qr(d,p,o);break;case 13:qr(d,p,o),o&&E&4&&ME(d,p);break;case 22:p.memoizedState===null&&qr(d,p,o),fu(p,p.return);break;case 30:break;default:qr(d,p,o)}s=s.sibling}}function pp(i,s){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Wl(o))}function gp(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Wl(i))}function xi(i,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)BE(i,s,o,u),s=s.sibling}function BE(i,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:xi(i,s,o,u),d&2048&&hu(9,s);break;case 1:xi(i,s,o,u);break;case 3:xi(i,s,o,u),d&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Wl(i)));break;case 12:if(d&2048){xi(i,s,o,u),i=s.stateNode;try{var p=s.memoizedProps,E=p.id,w=p.onPostCommit;typeof w=="function"&&w(E,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){nt(s,s.return,C)}}else xi(i,s,o,u);break;case 13:xi(i,s,o,u);break;case 23:break;case 22:p=s.stateNode,E=s.alternate,s.memoizedState!==null?p._visibility&2?xi(i,s,o,u):du(i,s):p._visibility&2?xi(i,s,o,u):(p._visibility|=2,Ao(i,s,o,u,(s.subtreeFlags&10256)!==0)),d&2048&&pp(E,s);break;case 24:xi(i,s,o,u),d&2048&&gp(s.alternate,s);break;default:xi(i,s,o,u)}}function Ao(i,s,o,u,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var p=i,E=s,w=o,C=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Ao(p,E,w,C,d),hu(8,E);break;case 23:break;case 22:var W=E.stateNode;E.memoizedState!==null?W._visibility&2?Ao(p,E,w,C,d):du(p,E):(W._visibility|=2,Ao(p,E,w,C,d)),d&&q&2048&&pp(E.alternate,E);break;case 24:Ao(p,E,w,C,d),d&&q&2048&&gp(E.alternate,E);break;default:Ao(p,E,w,C,d)}s=s.sibling}}function du(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=i,u=s,d=u.flags;switch(u.tag){case 22:du(o,u),d&2048&&pp(u.alternate,u);break;case 24:du(o,u),d&2048&&gp(u.alternate,u);break;default:du(o,u)}s=s.sibling}}var mu=8192;function bo(i){if(i.subtreeFlags&mu)for(i=i.child;i!==null;)zE(i),i=i.sibling}function zE(i){switch(i.tag){case 26:bo(i),i.flags&mu&&i.memoizedState!==null&&lC(si,i.memoizedState,i.memoizedProps);break;case 5:bo(i);break;case 3:case 4:var s=si;si=Yh(i.stateNode.containerInfo),bo(i),si=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=mu,mu=16777216,bo(i),mu=s):bo(i));break;default:bo(i)}}function jE(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function pu(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];zt=u,FE(u,i)}jE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qE(i),i=i.sibling}function qE(i){switch(i.tag){case 0:case 11:case 15:pu(i),i.flags&2048&&zr(9,i,i.return);break;case 3:pu(i);break;case 12:pu(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&2&&(i.return===null||i.return.tag!==13)?(s._visibility&=-3,Lh(i)):pu(i);break;default:pu(i)}}function Lh(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];zt=u,FE(u,i)}jE(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:zr(8,s,s.return),Lh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Lh(s));break;default:Lh(s)}i=i.sibling}}function FE(i,s){for(;zt!==null;){var o=zt;switch(o.tag){case 0:case 11:case 15:zr(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Wl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,zt=u;else e:for(o=i;zt!==null;){u=zt;var d=u.sibling,p=u.return;if(VE(u),u===o){zt=null;break e}if(d!==null){d.return=p,zt=d;break e}zt=p}}}var b1={getCacheForType:function(i){var s=Jt(Nt),o=s.data.get(i);return o===void 0&&(o=i(),s.data.set(i,o)),o}},I1=typeof WeakMap=="function"?WeakMap:Map,$e=0,rt=null,Pe=null,Be=0,Qe=0,Sn=null,Fr=!1,Io=!1,_p=!1,ur=0,gt=0,Hr=0,oa=0,yp=0,$n=0,So=0,gu=null,gn=null,vp=!1,Ep=0,Uh=1/0,Bh=null,Gr=null,Qt=0,Kr=null,Ro=null,Co=0,Tp=0,wp=null,HE=null,_u=0,Ap=null;function Rn(){if(($e&2)!==0&&Be!==0)return Be&-Be;if(X.T!==null){var i=po;return i!==0?i:xp()}return Rr()}function GE(){$n===0&&($n=(Be&536870912)===0||Fe?Sl():536870912);var i=Kn.current;return i!==null&&(i.flags|=32),$n}function Cn(i,s,o){(i===rt&&(Qe===2||Qe===9)||i.cancelPendingCommit!==null)&&(Do(i,0),$r(i,Be,$n,!1)),ji(i,o),(($e&2)===0||i!==rt)&&(i===rt&&(($e&2)===0&&(oa|=o),gt===4&&$r(i,Be,$n,!1)),Oi(i))}function KE(i,s,o){if(($e&6)!==0)throw Error(r(327));var u=!o&&(s&124)===0&&(s&i.expiredLanes)===0||Ps(i,s),d=u?C1(i,s):Sp(i,s,!0),p=u;do{if(d===0){Io&&!u&&$r(i,s,0,!1);break}else{if(o=i.current.alternate,p&&!S1(o)){d=Sp(i,s,!1),p=!1;continue}if(d===2){if(p=s,i.errorRecoveryDisabledLanes&p)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){s=E;e:{var w=i;d=gu;var C=w.current.memoizedState.isDehydrated;if(C&&(Do(w,E).flags|=256),E=Sp(w,E,!1),E!==2){if(_p&&!C){w.errorRecoveryDisabledLanes|=p,oa|=p,d=4;break e}p=gn,gn=d,p!==null&&(gn===null?gn=p:gn.push.apply(gn,p))}d=E}if(p=!1,d!==2)continue}}if(d===1){Do(i,0),$r(i,s,0,!0);break}e:{switch(u=i,p=d,p){case 0:case 1:throw Error(r(345));case 4:if((s&4194048)!==s)break;case 6:$r(u,s,$n,!Fr);break e;case 2:gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((s&62914560)===s&&(d=Ep+300-Mn(),10<d)){if($r(u,s,$n,!Fr),Ga(u,0,!0)!==0)break e;u.timeoutHandle=TT($E.bind(null,u,o,gn,Bh,vp,s,$n,oa,So,Fr,p,2,-0,0),d);break e}$E(u,o,gn,Bh,vp,s,$n,oa,So,Fr,p,0,-0,0)}}break}while(!0);Oi(i)}function $E(i,s,o,u,d,p,E,w,C,q,W,ee,F,H){if(i.timeoutHandle=-1,ee=s.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(bu={stylesheets:null,count:0,unsuspend:oC},zE(s),ee=uC(),ee!==null)){i.cancelPendingCommit=ee(eT.bind(null,i,s,p,o,u,d,E,w,C,W,1,F,H)),$r(i,p,E,!q);return}eT(i,s,p,o,u,d,E,w,C)}function S1(i){for(var s=i;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!wn(p(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function $r(i,s,o,u){s&=~yp,s&=~oa,i.suspendedLanes|=s,i.pingedLanes&=~s,u&&(i.warmLanes|=s),u=i.expirationTimes;for(var d=s;0<d;){var p=31-Zt(d),E=1<<p;u[p]=-1,d&=~E}o!==0&&gi(i,o,s)}function zh(){return($e&6)===0?(yu(0),!1):!0}function bp(){if(Pe!==null){if(Qe===0)var i=Pe.return;else i=Pe,tr=ta=null,jm(i),To=null,lu=0,i=Pe;for(;i!==null;)SE(i.alternate,i),i=i.return;Pe=null}}function Do(i,s){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,H1(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),bp(),rt=i,Pe=o=Zi(i.current,null),Be=s,Qe=0,Sn=null,Fr=!1,Io=Ps(i,s),_p=!1,So=$n=yp=oa=Hr=gt=0,gn=gu=null,vp=!1,(s&8)!==0&&(s|=s&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=s;0<u;){var d=31-Zt(u),p=1<<d;s|=i[d],u&=~p}return ur=s,lh(),o}function QE(i,s){De=null,X.H=Rh,s===Jl||s===_h?(s=hv(),Qe=3):s===lv?(s=hv(),Qe=4):Qe=s===fE?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Sn=s,Pe===null&&(gt=1,Nh(i,qn(s,i.current)))}function YE(){var i=X.H;return X.H=Rh,i===null?Rh:i}function XE(){var i=X.A;return X.A=b1,i}function Ip(){gt=4,Fr||(Be&4194048)!==Be&&Kn.current!==null||(Io=!0),(Hr&134217727)===0&&(oa&134217727)===0||rt===null||$r(rt,Be,$n,!1)}function Sp(i,s,o){var u=$e;$e|=2;var d=YE(),p=XE();(rt!==i||Be!==s)&&(Bh=null,Do(i,s)),s=!1;var E=gt;e:do try{if(Qe!==0&&Pe!==null){var w=Pe,C=Sn;switch(Qe){case 8:bp(),E=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(s=!0);var q=Qe;if(Qe=0,Sn=null,xo(i,w,C,q),o&&Io){E=0;break e}break;default:q=Qe,Qe=0,Sn=null,xo(i,w,C,q)}}R1(),E=gt;break}catch(W){QE(i,W)}while(!0);return s&&i.shellSuspendCounter++,tr=ta=null,$e=u,X.H=d,X.A=p,Pe===null&&(rt=null,Be=0,lh()),E}function R1(){for(;Pe!==null;)WE(Pe)}function C1(i,s){var o=$e;$e|=2;var u=YE(),d=XE();rt!==i||Be!==s?(Bh=null,Uh=Mn()+500,Do(i,s)):Io=Ps(i,s);e:do try{if(Qe!==0&&Pe!==null){s=Pe;var p=Sn;t:switch(Qe){case 1:Qe=0,Sn=null,xo(i,s,p,1);break;case 2:case 9:if(uv(p)){Qe=0,Sn=null,ZE(s);break}s=function(){Qe!==2&&Qe!==9||rt!==i||(Qe=7),Oi(i)},p.then(s,s);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:uv(p)?(Qe=0,Sn=null,ZE(s)):(Qe=0,Sn=null,xo(i,s,p,7));break;case 5:var E=null;switch(Pe.tag){case 26:E=Pe.memoizedState;case 5:case 27:var w=Pe;if(!E||PT(E)){Qe=0,Sn=null;var C=w.sibling;if(C!==null)Pe=C;else{var q=w.return;q!==null?(Pe=q,jh(q)):Pe=null}break t}}Qe=0,Sn=null,xo(i,s,p,5);break;case 6:Qe=0,Sn=null,xo(i,s,p,6);break;case 8:bp(),gt=6;break e;default:throw Error(r(462))}}D1();break}catch(W){QE(i,W)}while(!0);return tr=ta=null,X.H=u,X.A=d,$e=o,Pe!==null?0:(rt=null,Be=0,lh(),gt)}function D1(){for(;Pe!==null&&!wl();)WE(Pe)}function WE(i){var s=bE(i.alternate,i,ur);i.memoizedProps=i.pendingProps,s===null?jh(i):Pe=s}function ZE(i){var s=i,o=s.alternate;switch(s.tag){case 15:case 0:s=yE(o,s,s.pendingProps,s.type,void 0,Be);break;case 11:s=yE(o,s,s.pendingProps,s.type.render,s.ref,Be);break;case 5:jm(s);default:SE(o,s),s=Pe=Jy(s,ur),s=bE(o,s,ur)}i.memoizedProps=i.pendingProps,s===null?jh(i):Pe=s}function xo(i,s,o,u){tr=ta=null,jm(s),To=null,lu=0;var d=s.return;try{if(y1(i,d,s,o,Be)){gt=1,Nh(i,qn(o,i.current)),Pe=null;return}}catch(p){if(d!==null)throw Pe=d,p;gt=1,Nh(i,qn(o,i.current)),Pe=null;return}s.flags&32768?(Fe||u===1?i=!0:Io||(Be&536870912)!==0?i=!1:(Fr=i=!0,(u===2||u===9||u===3||u===6)&&(u=Kn.current,u!==null&&u.tag===13&&(u.flags|=16384))),JE(s,i)):jh(s)}function jh(i){var s=i;do{if((s.flags&32768)!==0){JE(s,Fr);return}i=s.return;var o=E1(s.alternate,s,ur);if(o!==null){Pe=o;return}if(s=s.sibling,s!==null){Pe=s;return}Pe=s=i}while(s!==null);gt===0&&(gt=5)}function JE(i,s){do{var o=T1(i.alternate,i);if(o!==null){o.flags&=32767,Pe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(i=i.sibling,i!==null)){Pe=i;return}Pe=i=o}while(i!==null);gt=6,Pe=null}function eT(i,s,o,u,d,p,E,w,C){i.cancelPendingCommit=null;do qh();while(Qt!==0);if(($e&6)!==0)throw Error(r(327));if(s!==null){if(s===i.current)throw Error(r(177));if(p=s.lanes|s.childLanes,p|=gm,Cl(i,o,p,E,w,C),i===rt&&(Pe=rt=null,Be=0),Ro=s,Kr=i,Co=o,Tp=p,wp=d,HE=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,P1(Ds,function(){return sT(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=X.T,X.T=null,d=ce.p,ce.p=2,E=$e,$e|=4;try{w1(i,s,o)}finally{$e=E,ce.p=d,X.T=u}}Qt=1,tT(),nT(),iT()}}function tT(){if(Qt===1){Qt=0;var i=Kr,s=Ro,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=X.T,X.T=null;var u=ce.p;ce.p=2;var d=$e;$e|=4;try{LE(s,i);var p=Up,E=Fy(i.containerInfo),w=p.focusedElem,C=p.selectionRange;if(E!==w&&w&&w.ownerDocument&&qy(w.ownerDocument.documentElement,w)){if(C!==null&&hm(w)){var q=C.start,W=C.end;if(W===void 0&&(W=q),"selectionStart"in w)w.selectionStart=q,w.selectionEnd=Math.min(W,w.value.length);else{var ee=w.ownerDocument||document,F=ee&&ee.defaultView||window;if(F.getSelection){var H=F.getSelection(),be=w.textContent.length,Te=Math.min(C.start,be),tt=C.end===void 0?Te:Math.min(C.end,be);!H.extend&&Te>tt&&(E=tt,tt=Te,Te=E);var M=jy(w,Te),V=jy(w,tt);if(M&&V&&(H.rangeCount!==1||H.anchorNode!==M.node||H.anchorOffset!==M.offset||H.focusNode!==V.node||H.focusOffset!==V.offset)){var j=ee.createRange();j.setStart(M.node,M.offset),H.removeAllRanges(),Te>tt?(H.addRange(j),H.extend(V.node,V.offset)):(j.setEnd(V.node,V.offset),H.addRange(j))}}}}for(ee=[],H=w;H=H.parentNode;)H.nodeType===1&&ee.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ee.length;w++){var J=ee[w];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}ef=!!Lp,Up=Lp=null}finally{$e=d,ce.p=u,X.T=o}}i.current=s,Qt=2}}function nT(){if(Qt===2){Qt=0;var i=Kr,s=Ro,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=X.T,X.T=null;var u=ce.p;ce.p=2;var d=$e;$e|=4;try{PE(i,s.alternate,s)}finally{$e=d,ce.p=u,X.T=o}}Qt=3}}function iT(){if(Qt===4||Qt===3){Qt=0,Lc();var i=Kr,s=Ro,o=Co,u=HE;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Qt=5:(Qt=0,Ro=Kr=null,rT(i,i.pendingLanes));var d=i.pendingLanes;if(d===0&&(Gr=null),Ka(o),s=s.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(mt,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=X.T,d=ce.p,ce.p=2,X.T=null;try{for(var p=i.onRecoverableError,E=0;E<u.length;E++){var w=u[E];p(w.value,{componentStack:w.stack})}}finally{X.T=s,ce.p=d}}(Co&3)!==0&&qh(),Oi(i),d=i.pendingLanes,(o&4194090)!==0&&(d&42)!==0?i===Ap?_u++:(_u=0,Ap=i):_u=0,yu(0)}}function rT(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,Wl(s)))}function qh(i){return tT(),nT(),iT(),sT()}function sT(){if(Qt!==5)return!1;var i=Kr,s=Tp;Tp=0;var o=Ka(Co),u=X.T,d=ce.p;try{ce.p=32>o?32:o,X.T=null,o=wp,wp=null;var p=Kr,E=Co;if(Qt=0,Ro=Kr=null,Co=0,($e&6)!==0)throw Error(r(331));var w=$e;if($e|=4,qE(p.current),BE(p,p.current,E,o),$e=w,yu(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(mt,p)}catch{}return!0}finally{ce.p=d,X.T=u,rT(i,s)}}function aT(i,s,o){s=qn(o,s),s=tp(i.stateNode,s,2),i=Mr(i,s,2),i!==null&&(ji(i,2),Oi(i))}function nt(i,s,o){if(i.tag===3)aT(i,i,o);else for(;s!==null;){if(s.tag===3){aT(s,i,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Gr===null||!Gr.has(u))){i=qn(o,i),o=cE(2),u=Mr(s,o,2),u!==null&&(hE(o,u,s,i),ji(u,2),Oi(u));break}}s=s.return}}function Rp(i,s,o){var u=i.pingCache;if(u===null){u=i.pingCache=new I1;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(_p=!0,d.add(o),i=x1.bind(null,i,s,o),s.then(i,i))}function x1(i,s,o){var u=i.pingCache;u!==null&&u.delete(s),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,rt===i&&(Be&o)===o&&(gt===4||gt===3&&(Be&62914560)===Be&&300>Mn()-Ep?($e&2)===0&&Do(i,0):yp|=o,So===Be&&(So=0)),Oi(i)}function oT(i,s){s===0&&(s=Rl()),i=co(i,s),i!==null&&(ji(i,s),Oi(i))}function O1(i){var s=i.memoizedState,o=0;s!==null&&(o=s.retryLane),oT(i,o)}function N1(i,s){var o=0;switch(i.tag){case 13:var u=i.stateNode,d=i.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(s),oT(i,o)}function P1(i,s){return Rs(i,s)}var Fh=null,Oo=null,Cp=!1,Hh=!1,Dp=!1,la=0;function Oi(i){i!==Oo&&i.next===null&&(Oo===null?Fh=Oo=i:Oo=Oo.next=i),Hh=!0,Cp||(Cp=!0,k1())}function yu(i,s){if(!Dp&&Hh){Dp=!0;do for(var o=!1,u=Fh;u!==null;){if(i!==0){var d=u.pendingLanes;if(d===0)var p=0;else{var E=u.suspendedLanes,w=u.pingedLanes;p=(1<<31-Zt(42|i)+1)-1,p&=d&~(E&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,hT(u,p))}else p=Be,p=Ga(u,u===rt?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||Ps(u,p)||(o=!0,hT(u,p));u=u.next}while(o);Dp=!1}}function V1(){lT()}function lT(){Hh=Cp=!1;var i=0;la!==0&&(F1()&&(i=la),la=0);for(var s=Mn(),o=null,u=Fh;u!==null;){var d=u.next,p=uT(u,s);p===0?(u.next=null,o===null?Fh=d:o.next=d,d===null&&(Oo=o)):(o=u,(i!==0||(p&3)!==0)&&(Hh=!0)),u=d}yu(i)}function uT(i,s){for(var o=i.suspendedLanes,u=i.pingedLanes,d=i.expirationTimes,p=i.pendingLanes&-62914561;0<p;){var E=31-Zt(p),w=1<<E,C=d[E];C===-1?((w&o)===0||(w&u)!==0)&&(d[E]=Il(w,s)):C<=s&&(i.expiredLanes|=w),p&=~w}if(s=rt,o=Be,o=Ga(i,i===s?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===s&&(Qe===2||Qe===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Cs(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Ps(i,o)){if(s=o&-o,s===i.callbackPriority)return s;switch(u!==null&&Cs(u),Ka(o)){case 2:case 8:o=Fa;break;case 32:o=Ds;break;case 268435456:o=Ha;break;default:o=Ds}return u=cT.bind(null,i),o=Rs(o,u),i.callbackPriority=s,i.callbackNode=o,s}return u!==null&&u!==null&&Cs(u),i.callbackPriority=2,i.callbackNode=null,2}function cT(i,s){if(Qt!==0&&Qt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(qh()&&i.callbackNode!==o)return null;var u=Be;return u=Ga(i,i===rt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(KE(i,u,s),uT(i,Mn()),i.callbackNode!=null&&i.callbackNode===o?cT.bind(null,i):null)}function hT(i,s){if(qh())return null;KE(i,s,!0)}function k1(){G1(function(){($e&6)!==0?Rs(Al,V1):lT()})}function xp(){return la===0&&(la=Sl()),la}function fT(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Za(""+i)}function dT(i,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,i.id&&o.setAttribute("form",i.id),s.parentNode.insertBefore(o,s),i=new FormData(i),o.parentNode.removeChild(o),i}function M1(i,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var p=fT((d[At]||null).action),E=u.submitter;E&&(s=(s=E[At]||null)?fT(s.formAction):E.getAttribute("formAction"),s!==null&&(p=s,E=null));var w=new Ja("action","action",null,u,d);i.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(la!==0){var C=E?dT(d,E):new FormData(d);Xm(o,{pending:!0,data:C,method:d.method,action:p},null,C)}}else typeof p=="function"&&(w.preventDefault(),C=E?dT(d,E):new FormData(d),Xm(o,{pending:!0,data:C,method:d.method,action:p},p,C))},currentTarget:d}]})}}for(var Op=0;Op<pm.length;Op++){var Np=pm[Op],L1=Np.toLowerCase(),U1=Np[0].toUpperCase()+Np.slice(1);ri(L1,"on"+U1)}ri(Ky,"onAnimationEnd"),ri($y,"onAnimationIteration"),ri(Qy,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(t1,"onTransitionRun"),ri(n1,"onTransitionStart"),ri(i1,"onTransitionCancel"),ri(Yy,"onTransitionEnd"),Fi("onMouseEnter",["mouseout","mouseover"]),Fi("onMouseLeave",["mouseout","mouseover"]),Fi("onPointerEnter",["pointerout","pointerover"]),Fi("onPointerLeave",["pointerout","pointerover"]),ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vu));function mT(i,s){s=(s&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],d=u.event;u=u.listeners;e:{var p=void 0;if(s)for(var E=u.length-1;0<=E;E--){var w=u[E],C=w.instance,q=w.currentTarget;if(w=w.listener,C!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=q;try{p(d)}catch(W){Oh(W)}d.currentTarget=null,p=C}else for(E=0;E<u.length;E++){if(w=u[E],C=w.instance,q=w.currentTarget,w=w.listener,C!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=q;try{p(d)}catch(W){Oh(W)}d.currentTarget=null,p=C}}}}function Ve(i,s){var o=s[xl];o===void 0&&(o=s[xl]=new Set);var u=i+"__bubble";o.has(u)||(pT(s,i,2,!1),o.add(u))}function Pp(i,s,o){var u=0;s&&(u|=4),pT(o,i,u,s)}var Gh="_reactListening"+Math.random().toString(36).slice(2);function Vp(i){if(!i[Gh]){i[Gh]=!0,Ol.forEach(function(o){o!=="selectionchange"&&(B1.has(o)||Pp(o,!1,i),Pp(o,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Gh]||(s[Gh]=!0,Pp("selectionchange",!1,s))}}function pT(i,s,o,u){switch(BT(s)){case 2:var d=fC;break;case 8:d=dC;break;default:d=Qp}o=d.bind(null,s,o,i),d=void 0,!zn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?i.addEventListener(s,o,{capture:!0,passive:d}):i.addEventListener(s,o,!0):d!==void 0?i.addEventListener(s,o,{passive:d}):i.addEventListener(s,o,!1)}function kp(i,s,o,u,d){var p=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===d)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;w!==null;){if(E=qi(w),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=p=E;continue e}w=w.parentNode}}u=u.return}$c(function(){var q=p,W=Bn(o),ee=[];e:{var F=Xy.get(i);if(F!==void 0){var H=Ja,be=i;switch(i){case"keypress":if(wi(o)===0)break e;case"keydown":case"keyup":H=so;break;case"focusin":be="focus",H=no;break;case"focusout":be="blur",H=no;break;case"beforeblur":case"afterblur":H=no;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=jn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=th;break;case Ky:case $y:case Qy:H=io;break;case Yy:H=ih;break;case"scroll":case"scrollend":H=Qc;break;case"wheel":H=ao;break;case"copy":case"cut":case"paste":H=ro;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Fl;break;case"toggle":case"beforetoggle":H=sh}var Te=(s&4)!==0,tt=!Te&&(i==="scroll"||i==="scrollend"),M=Te?F!==null?F+"Capture":null:F;Te=[];for(var V=q,j;V!==null;){var J=V;if(j=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||j===null||M===null||(J=js(V,M),J!=null&&Te.push(Eu(V,J,j))),tt)break;V=V.return}0<Te.length&&(F=new H(F,be,null,o,W),ee.push({event:F,listeners:Te}))}}if((s&7)===0){e:{if(F=i==="mouseover"||i==="pointerover",H=i==="mouseout"||i==="pointerout",F&&o!==Ki&&(be=o.relatedTarget||o.fromElement)&&(qi(be)||be[Ln]))break e;if((H||F)&&(F=W.window===W?W:(F=W.ownerDocument)?F.defaultView||F.parentWindow:window,H?(be=o.relatedTarget||o.toElement,H=q,be=be?qi(be):null,be!==null&&(tt=l(be),Te=be.tag,be!==tt||Te!==5&&Te!==27&&Te!==6)&&(be=null)):(H=null,be=q),H!==be)){if(Te=jn,J="onMouseLeave",M="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(Te=Fl,J="onPointerLeave",M="onPointerEnter",V="pointer"),tt=H==null?F:yi(H),j=be==null?F:yi(be),F=new Te(J,V+"leave",H,o,W),F.target=tt,F.relatedTarget=j,J=null,qi(W)===q&&(Te=new Te(M,V+"enter",be,o,W),Te.target=j,Te.relatedTarget=tt,J=Te),tt=J,H&&be)t:{for(Te=H,M=be,V=0,j=Te;j;j=No(j))V++;for(j=0,J=M;J;J=No(J))j++;for(;0<V-j;)Te=No(Te),V--;for(;0<j-V;)M=No(M),j--;for(;V--;){if(Te===M||M!==null&&Te===M.alternate)break t;Te=No(Te),M=No(M)}Te=null}else Te=null;H!==null&&gT(ee,F,H,Te,!1),be!==null&&tt!==null&&gT(ee,tt,be,Te,!0)}}e:{if(F=q?yi(q):window,H=F.nodeName&&F.nodeName.toLowerCase(),H==="select"||H==="input"&&F.type==="file")var de=ky;else if(Ot(F))if(My)de=ZR;else{de=XR;var Ne=YR}else H=F.nodeName,!H||H.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?q&&Ml(q.elementType)&&(de=ky):de=WR;if(de&&(de=de(i,q))){Wi(ee,de,o,W);break e}Ne&&Ne(i,F,q),i==="focusout"&&q&&F.type==="number"&&q.memoizedProps.value!=null&&Or(F,"number",F.value)}switch(Ne=q?yi(q):window,i){case"focusin":(Ot(Ne)||Ne.contentEditable==="true")&&(oo=Ne,fm=q,Kl=null);break;case"focusout":Kl=fm=oo=null;break;case"mousedown":dm=!0;break;case"contextmenu":case"mouseup":case"dragend":dm=!1,Hy(ee,o,W);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Hy(ee,o,W)}var _e;if(Ii)e:{switch(i){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Le?K(i,o)&&(we="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(we="onCompositionStart");we&&(v&&o.locale!=="ko"&&(Le||we!=="onCompositionStart"?we==="onCompositionEnd"&&Le&&(_e=Ul()):(Ti=W,Nr="value"in Ti?Ti.value:Ti.textContent,Le=!0)),Ne=Kh(q,we),0<Ne.length&&(we=new jl(we,i,null,o,W),ee.push({event:we,listeners:Ne}),_e?we.data=_e:(_e=ae(o),_e!==null&&(we.data=_e)))),(_e=_?xt(i,o):Ue(i,o))&&(we=Kh(q,"onBeforeInput"),0<we.length&&(Ne=new jl("onBeforeInput","beforeinput",null,o,W),ee.push({event:Ne,listeners:we}),Ne.data=_e)),M1(ee,i,q,o,W)}mT(ee,s)})}function Eu(i,s,o){return{instance:i,listener:s,currentTarget:o}}function Kh(i,s){for(var o=s+"Capture",u=[];i!==null;){var d=i,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=js(i,o),d!=null&&u.unshift(Eu(i,d,p)),d=js(i,s),d!=null&&u.push(Eu(i,d,p))),i.tag===3)return u;i=i.return}return[]}function No(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function gT(i,s,o,u,d){for(var p=s._reactName,E=[];o!==null&&o!==u;){var w=o,C=w.alternate,q=w.stateNode;if(w=w.tag,C!==null&&C===u)break;w!==5&&w!==26&&w!==27||q===null||(C=q,d?(q=js(o,p),q!=null&&E.unshift(Eu(o,q,C))):d||(q=js(o,p),q!=null&&E.push(Eu(o,q,C)))),o=o.return}E.length!==0&&i.push({event:s,listeners:E})}var z1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function _T(i){return(typeof i=="string"?i:""+i).replace(z1,`
`).replace(j1,"")}function yT(i,s){return s=_T(s),_T(i)===s}function $h(){}function et(i,s,o,u,d,p){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Un(i,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Un(i,""+u);break;case"className":vi(i,"class",u);break;case"tabIndex":vi(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":vi(i,o,u);break;case"style":kl(i,u,p);break;case"data":if(s!=="object"){vi(i,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Za(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(s!=="input"&&et(i,s,"name",d.name,d,null),et(i,s,"formEncType",d.formEncType,d,null),et(i,s,"formMethod",d.formMethod,d,null),et(i,s,"formTarget",d.formTarget,d,null)):(et(i,s,"encType",d.encType,d,null),et(i,s,"method",d.method,d,null),et(i,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Za(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=$h);break;case"onScroll":u!=null&&Ve("scroll",i);break;case"onScrollEnd":u!=null&&Ve("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(r(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=Za(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Ve("beforetoggle",i),Ve("toggle",i),xr(i,"popover",u);break;case"xlinkActuate":Gt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Gt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Gt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Gt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Gt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Gt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Gt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Gt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Gt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":xr(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=sm.get(o)||o,xr(i,o,u))}}function Mp(i,s,o,u,d,p){switch(o){case"style":kl(i,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(r(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Un(i,u):(typeof u=="number"||typeof u=="bigint")&&Un(i,""+u);break;case"onScroll":u!=null&&Ve("scroll",i);break;case"onScrollEnd":u!=null&&Ve("scrollend",i);break;case"onClick":u!=null&&(i.onclick=$h);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$a.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),p=i[At]||null,p=p!=null?p[o]:null,typeof p=="function"&&i.removeEventListener(s,p,d),typeof u=="function")){typeof p!="function"&&p!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(s,u,d);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):xr(i,o,u)}}}function Yt(i,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",i),Ve("load",i);var u=!1,d=!1,p;for(p in o)if(o.hasOwnProperty(p)){var E=o[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:et(i,s,p,E,o,null)}}d&&et(i,s,"srcSet",o.srcSet,o,null),u&&et(i,s,"src",o.src,o,null);return;case"input":Ve("invalid",i);var w=p=E=d=null,C=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var W=o[u];if(W!=null)switch(u){case"name":d=W;break;case"type":E=W;break;case"checked":C=W;break;case"defaultChecked":q=W;break;case"value":p=W;break;case"defaultValue":w=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,s));break;default:et(i,s,u,W,o,null)}}Us(i,p,w,C,q,E,d,!1),Wa(i);return;case"select":Ve("invalid",i),u=E=p=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":p=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:et(i,s,d,w,o,null)}s=p,o=E,i.multiple=!!u,s!=null?Gi(i,!!u,s,!1):o!=null&&Gi(i,!!u,o,!0);return;case"textarea":Ve("invalid",i),p=d=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":d=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:et(i,s,E,w,o,null)}Bs(i,u,d,p),Wa(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:et(i,s,C,u,o,null)}return;case"dialog":Ve("beforetoggle",i),Ve("toggle",i),Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":Ve("load",i);break;case"video":case"audio":for(u=0;u<vu.length;u++)Ve(vu[u],i);break;case"image":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"embed":case"source":case"link":Ve("error",i),Ve("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:et(i,s,q,u,o,null)}return;default:if(Ml(s)){for(W in o)o.hasOwnProperty(W)&&(u=o[W],u!==void 0&&Mp(i,s,W,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&et(i,s,w,u,o,null))}function q1(i,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,E=null,w=null,C=null,q=null,W=null;for(H in o){var ee=o[H];if(o.hasOwnProperty(H)&&ee!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":C=ee;default:u.hasOwnProperty(H)||et(i,s,H,null,u,ee)}}for(var F in u){var H=u[F];if(ee=o[F],u.hasOwnProperty(F)&&(H!=null||ee!=null))switch(F){case"type":p=H;break;case"name":d=H;break;case"checked":q=H;break;case"defaultChecked":W=H;break;case"value":E=H;break;case"defaultValue":w=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,s));break;default:H!==ee&&et(i,s,F,H,u,ee)}}Tn(i,E,w,C,q,W,p,d);return;case"select":H=E=w=F=null;for(p in o)if(C=o[p],o.hasOwnProperty(p)&&C!=null)switch(p){case"value":break;case"multiple":H=C;default:u.hasOwnProperty(p)||et(i,s,p,null,u,C)}for(d in u)if(p=u[d],C=o[d],u.hasOwnProperty(d)&&(p!=null||C!=null))switch(d){case"value":F=p;break;case"defaultValue":w=p;break;case"multiple":E=p;default:p!==C&&et(i,s,d,p,u,C)}s=w,o=E,u=H,F!=null?Gi(i,!!o,F,!1):!!u!=!!o&&(s!=null?Gi(i,!!o,s,!0):Gi(i,!!o,o?[]:"",!1));return;case"textarea":H=F=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:et(i,s,w,null,u,d)}for(E in u)if(d=u[E],p=o[E],u.hasOwnProperty(E)&&(d!=null||p!=null))switch(E){case"value":F=d;break;case"defaultValue":H=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:d!==p&&et(i,s,E,d,u,p)}Ze(i,F,H);return;case"option":for(var be in o)if(F=o[be],o.hasOwnProperty(be)&&F!=null&&!u.hasOwnProperty(be))switch(be){case"selected":i.selected=!1;break;default:et(i,s,be,null,u,F)}for(C in u)if(F=u[C],H=o[C],u.hasOwnProperty(C)&&F!==H&&(F!=null||H!=null))switch(C){case"selected":i.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:et(i,s,C,F,u,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in o)F=o[Te],o.hasOwnProperty(Te)&&F!=null&&!u.hasOwnProperty(Te)&&et(i,s,Te,null,u,F);for(q in u)if(F=u[q],H=o[q],u.hasOwnProperty(q)&&F!==H&&(F!=null||H!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,s));break;default:et(i,s,q,F,u,H)}return;default:if(Ml(s)){for(var tt in o)F=o[tt],o.hasOwnProperty(tt)&&F!==void 0&&!u.hasOwnProperty(tt)&&Mp(i,s,tt,void 0,u,F);for(W in u)F=u[W],H=o[W],!u.hasOwnProperty(W)||F===H||F===void 0&&H===void 0||Mp(i,s,W,F,u,H);return}}for(var M in o)F=o[M],o.hasOwnProperty(M)&&F!=null&&!u.hasOwnProperty(M)&&et(i,s,M,null,u,F);for(ee in u)F=u[ee],H=o[ee],!u.hasOwnProperty(ee)||F===H||F==null&&H==null||et(i,s,ee,F,u,H)}var Lp=null,Up=null;function Qh(i){return i.nodeType===9?i:i.ownerDocument}function vT(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ET(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function Bp(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var zp=null;function F1(){var i=window.event;return i&&i.type==="popstate"?i===zp?!1:(zp=i,!0):(zp=null,!1)}var TT=typeof setTimeout=="function"?setTimeout:void 0,H1=typeof clearTimeout=="function"?clearTimeout:void 0,wT=typeof Promise=="function"?Promise:void 0,G1=typeof queueMicrotask=="function"?queueMicrotask:typeof wT<"u"?function(i){return wT.resolve(null).then(i).catch(K1)}:TT;function K1(i){setTimeout(function(){throw i})}function Qr(i){return i==="head"}function AT(i,s){var o=s,u=0,d=0;do{var p=o.nextSibling;if(i.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Tu(E.documentElement),o&2&&Tu(E.body),o&4)for(o=E.head,Tu(o),E=o.firstChild;E;){var w=E.nextSibling,C=E.nodeName;E[Vs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(d===0){i.removeChild(p),Du(s);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);Du(s)}function jp(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":jp(o),Dr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function $1(i,s,o,u){for(;i.nodeType===1;){var d=o;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Vs])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(p=i.getAttribute("rel"),p==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(p!==d.rel||i.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||i.getAttribute("title")!==(d.title==null?null:d.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(p=i.getAttribute("src"),(p!==(d.src==null?null:d.src)||i.getAttribute("type")!==(d.type==null?null:d.type)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&i.getAttribute("name")===p)return i}else return i;if(i=ai(i.nextSibling),i===null)break}return null}function Q1(i,s,o){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=ai(i.nextSibling),i===null))return null;return i}function qp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function Y1(i,s){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function ai(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}var Fp=null;function bT(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return i;s--}else o==="/$"&&s++}i=i.previousSibling}return null}function IT(i,s,o){switch(s=Qh(o),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}function Tu(i){for(var s=i.attributes;s.length;)i.removeAttributeNode(s[0]);Dr(i)}var Qn=new Map,ST=new Set;function Yh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var cr=ce.d;ce.d={f:X1,r:W1,D:Z1,C:J1,L:eC,m:tC,X:iC,S:nC,M:rC};function X1(){var i=cr.f(),s=zh();return i||s}function W1(i){var s=_i(i);s!==null&&s.tag===5&&s.type==="form"?Kv(s):cr.r(i)}var Po=typeof document>"u"?null:document;function RT(i,s,o){var u=Po;if(u&&typeof s=="string"&&s){var d=bt(s);d='link[rel="'+i+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),ST.has(d)||(ST.add(d),i={rel:i,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),Yt(s,"link",i),Et(s),u.head.appendChild(s)))}}function Z1(i){cr.D(i),RT("dns-prefetch",i,null)}function J1(i,s){cr.C(i,s),RT("preconnect",i,s)}function eC(i,s,o){cr.L(i,s,o);var u=Po;if(u&&i&&s){var d='link[rel="preload"][as="'+bt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+bt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+bt(o.imageSizes)+'"]')):d+='[href="'+bt(i)+'"]';var p=d;switch(s){case"style":p=Vo(i);break;case"script":p=ko(i)}Qn.has(p)||(i=y({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:i,as:s},o),Qn.set(p,i),u.querySelector(d)!==null||s==="style"&&u.querySelector(wu(p))||s==="script"&&u.querySelector(Au(p))||(s=u.createElement("link"),Yt(s,"link",i),Et(s),u.head.appendChild(s)))}}function tC(i,s){cr.m(i,s);var o=Po;if(o&&i){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+bt(u)+'"][href="'+bt(i)+'"]',p=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ko(i)}if(!Qn.has(p)&&(i=y({rel:"modulepreload",href:i},s),Qn.set(p,i),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Au(p)))return}u=o.createElement("link"),Yt(u,"link",i),Et(u),o.head.appendChild(u)}}}function nC(i,s,o){cr.S(i,s,o);var u=Po;if(u&&i){var d=on(u).hoistableStyles,p=Vo(i);s=s||"default";var E=d.get(p);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(wu(p)))w.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":s},o),(o=Qn.get(p))&&Hp(i,o);var C=E=u.createElement("link");Et(C),Yt(C,"link",i),C._p=new Promise(function(q,W){C.onload=q,C.onerror=W}),C.addEventListener("load",function(){w.loading|=1}),C.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Xh(E,s,u)}E={type:"stylesheet",instance:E,count:1,state:w},d.set(p,E)}}}function iC(i,s){cr.X(i,s);var o=Po;if(o&&i){var u=on(o).hoistableScripts,d=ko(i),p=u.get(d);p||(p=o.querySelector(Au(d)),p||(i=y({src:i,async:!0},s),(s=Qn.get(d))&&Gp(i,s),p=o.createElement("script"),Et(p),Yt(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function rC(i,s){cr.M(i,s);var o=Po;if(o&&i){var u=on(o).hoistableScripts,d=ko(i),p=u.get(d);p||(p=o.querySelector(Au(d)),p||(i=y({src:i,async:!0,type:"module"},s),(s=Qn.get(d))&&Gp(i,s),p=o.createElement("script"),Et(p),Yt(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function CT(i,s,o,u){var d=(d=Se.current)?Yh(d):null;if(!d)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Vo(o.href),o=on(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Vo(o.href);var p=on(d).hoistableStyles,E=p.get(i);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(i,E),(p=d.querySelector(wu(i)))&&!p._p&&(E.instance=p,E.state.loading=5),Qn.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Qn.set(i,o),p||sC(d,i,o,E.state))),s&&u===null)throw Error(r(528,""));return E}if(s&&u!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ko(o),o=on(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function Vo(i){return'href="'+bt(i)+'"'}function wu(i){return'link[rel="stylesheet"]['+i+"]"}function DT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function sC(i,s,o,u){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=i.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Yt(s,"link",o),Et(s),i.head.appendChild(s))}function ko(i){return'[src="'+bt(i)+'"]'}function Au(i){return"script[async]"+i}function xT(i,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=i.querySelector('style[data-href~="'+bt(o.href)+'"]');if(u)return s.instance=u,Et(u),u;var d=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Et(u),Yt(u,"style",d),Xh(u,o.precedence,i),s.instance=u;case"stylesheet":d=Vo(o.href);var p=i.querySelector(wu(d));if(p)return s.state.loading|=4,s.instance=p,Et(p),p;u=DT(o),(d=Qn.get(d))&&Hp(u,d),p=(i.ownerDocument||i).createElement("link"),Et(p);var E=p;return E._p=new Promise(function(w,C){E.onload=w,E.onerror=C}),Yt(p,"link",u),s.state.loading|=4,Xh(p,o.precedence,i),s.instance=p;case"script":return p=ko(o.src),(d=i.querySelector(Au(p)))?(s.instance=d,Et(d),d):(u=o,(d=Qn.get(p))&&(u=y({},o),Gp(u,d)),i=i.ownerDocument||i,d=i.createElement("script"),Et(d),Yt(d,"link",u),i.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,Xh(u,o.precedence,i));return s.instance}function Xh(i,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,p=d,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===s)p=w;else if(p!==d)break}p?p.parentNode.insertBefore(i,p.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(i,s.firstChild))}function Hp(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function Gp(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var Wh=null;function OT(i,s,o){if(Wh===null){var u=new Map,d=Wh=new Map;d.set(o,u)}else d=Wh,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),d=0;d<o.length;d++){var p=o[d];if(!(p[Vs]||p[Dt]||i==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(s)||"";E=i+E;var w=u.get(E);w?w.push(p):u.set(E,[p])}}return u}function NT(i,s,o){i=i.ownerDocument||i,i.head.insertBefore(o,s==="title"?i.querySelector("head > title"):null)}function aC(i,s,o){if(o===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function PT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var bu=null;function oC(){}function lC(i,s,o){if(bu===null)throw Error(r(475));var u=bu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=Vo(o.href),p=i.querySelector(wu(d));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Zh.bind(u),i.then(u,u)),s.state.loading|=4,s.instance=p,Et(p);return}p=i.ownerDocument||i,o=DT(o),(d=Qn.get(d))&&Hp(o,d),p=p.createElement("link"),Et(p);var E=p;E._p=new Promise(function(w,C){E.onload=w,E.onerror=C}),Yt(p,"link",o),s.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=Zh.bind(u),i.addEventListener("load",s),i.addEventListener("error",s))}}function uC(){if(bu===null)throw Error(r(475));var i=bu;return i.stylesheets&&i.count===0&&Kp(i,i.stylesheets),0<i.count?function(s){var o=setTimeout(function(){if(i.stylesheets&&Kp(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Zh(){if(this.count--,this.count===0){if(this.stylesheets)Kp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Jh=null;function Kp(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Jh=new Map,s.forEach(cC,i),Jh=null,Zh.call(i))}function cC(i,s){if(!(s.state.loading&4)){var o=Jh.get(i);if(o)var u=o.get(null);else{o=new Map,Jh.set(i,o);for(var d=i.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var E=d[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}d=s.instance,E=d.getAttribute("data-precedence"),p=o.get(E)||u,p===u&&o.set(null,d),o.set(E,d),this.count++,u=Zh.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),p?p.parentNode.insertBefore(d,p.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(d,i.firstChild)),s.state.loading|=4}}var Iu={$$typeof:Q,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function hC(i,s,o,u,d,p,E,w){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.hiddenUpdates=zi(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function VT(i,s,o,u,d,p,E,w,C,q,W,ee){return i=new hC(i,s,o,E,w,C,q,ee),s=1,p===!0&&(s|=24),p=An(3,null,null,s),i.current=p,p.stateNode=i,s=Rm(),s.refCount++,i.pooledCache=s,s.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:s},Om(p),i}function kT(i){return i?(i=ho,i):ho}function MT(i,s,o,u,d,p){d=kT(d),u.context===null?u.context=d:u.pendingContext=d,u=kr(s),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=Mr(i,u,s),o!==null&&(Cn(o,i,s),tu(o,i,s))}function LT(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<s?o:s}}function $p(i,s){LT(i,s),(i=i.alternate)&&LT(i,s)}function UT(i){if(i.tag===13){var s=co(i,67108864);s!==null&&Cn(s,i,67108864),$p(i,67108864)}}var ef=!0;function fC(i,s,o,u){var d=X.T;X.T=null;var p=ce.p;try{ce.p=2,Qp(i,s,o,u)}finally{ce.p=p,X.T=d}}function dC(i,s,o,u){var d=X.T;X.T=null;var p=ce.p;try{ce.p=8,Qp(i,s,o,u)}finally{ce.p=p,X.T=d}}function Qp(i,s,o,u){if(ef){var d=Yp(u);if(d===null)kp(i,s,u,tf,o),zT(i,u);else if(pC(d,i,s,o,u))u.stopPropagation();else if(zT(i,u),s&4&&-1<mC.indexOf(i)){for(;d!==null;){var p=_i(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=ti(p.pendingLanes);if(E!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var C=1<<31-Zt(E);w.entanglements[1]|=C,E&=~C}Oi(p),($e&6)===0&&(Uh=Mn()+500,yu(0))}}break;case 13:w=co(p,2),w!==null&&Cn(w,p,2),zh(),$p(p,2)}if(p=Yp(u),p===null&&kp(i,s,u,tf,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else kp(i,s,u,null,o)}}function Yp(i){return i=Bn(i),Xp(i)}var tf=null;function Xp(i){if(tf=null,i=qi(i),i!==null){var s=l(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=c(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return tf=i,null}function BT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jd()){case Al:return 2;case Fa:return 8;case Ds:case em:return 32;case Ha:return 268435456;default:return 32}default:return 32}}var Wp=!1,Yr=null,Xr=null,Wr=null,Su=new Map,Ru=new Map,Zr=[],mC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zT(i,s){switch(i){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Su.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ru.delete(s.pointerId)}}function Cu(i,s,o,u,d,p){return i===null||i.nativeEvent!==p?(i={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},s!==null&&(s=_i(s),s!==null&&UT(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),i)}function pC(i,s,o,u,d){switch(s){case"focusin":return Yr=Cu(Yr,i,s,o,u,d),!0;case"dragenter":return Xr=Cu(Xr,i,s,o,u,d),!0;case"mouseover":return Wr=Cu(Wr,i,s,o,u,d),!0;case"pointerover":var p=d.pointerId;return Su.set(p,Cu(Su.get(p)||null,i,s,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Ru.set(p,Cu(Ru.get(p)||null,i,s,o,u,d)),!0}return!1}function jT(i){var s=qi(i.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){i.blockedOn=s,zc(i.priority,function(){if(o.tag===13){var u=Rn();u=Sr(u);var d=co(o,u);d!==null&&Cn(d,o,u),$p(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function nf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var o=Yp(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);Ki=u,o.target.dispatchEvent(u),Ki=null}else return s=_i(o),s!==null&&UT(s),i.blockedOn=o,!1;s.shift()}return!0}function qT(i,s,o){nf(i)&&o.delete(s)}function gC(){Wp=!1,Yr!==null&&nf(Yr)&&(Yr=null),Xr!==null&&nf(Xr)&&(Xr=null),Wr!==null&&nf(Wr)&&(Wr=null),Su.forEach(qT),Ru.forEach(qT)}function rf(i,s){i.blockedOn===s&&(i.blockedOn=null,Wp||(Wp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,gC)))}var sf=null;function FT(i){sf!==i&&(sf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){sf===i&&(sf=null);for(var s=0;s<i.length;s+=3){var o=i[s],u=i[s+1],d=i[s+2];if(typeof u!="function"){if(Xp(u||o)===null)continue;break}var p=_i(o);p!==null&&(i.splice(s,3),s-=3,Xm(p,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function Du(i){function s(C){return rf(C,i)}Yr!==null&&rf(Yr,i),Xr!==null&&rf(Xr,i),Wr!==null&&rf(Wr,i),Su.forEach(s),Ru.forEach(s);for(var o=0;o<Zr.length;o++){var u=Zr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<Zr.length&&(o=Zr[0],o.blockedOn===null);)jT(o),o.blockedOn===null&&Zr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],p=o[u+1],E=d[At]||null;if(typeof p=="function")E||FT(o);else if(E){var w=null;if(p&&p.hasAttribute("formAction")){if(d=p,E=p[At]||null)w=E.formAction;else if(Xp(d)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),FT(o)}}}function Zp(i){this._internalRoot=i}af.prototype.render=Zp.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,u=Rn();MT(o,u,i,s,null,null)},af.prototype.unmount=Zp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;MT(i.current,2,null,i,null,null),zh(),s[Ln]=null}};function af(i){this._internalRoot=i}af.prototype.unstable_scheduleHydration=function(i){if(i){var s=Rr();i={blockedOn:null,target:i,priority:s};for(var o=0;o<Zr.length&&s!==0&&s<Zr[o].priority;o++);Zr.splice(o,0,i),o===0&&jT(i)}};var HT=e.version;if(HT!=="19.1.0")throw Error(r(527,HT,"19.1.0"));ce.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=m(s),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var _C={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var of=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!of.isDisabled&&of.supportsFiber)try{mt=of.inject(_C),Ke=of}catch{}}return Ou.createRoot=function(i,s){if(!a(i))throw Error(r(299));var o=!1,u="",d=aE,p=oE,E=lE,w=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(p=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=VT(i,1,!1,null,null,o,u,d,p,E,w,null),i[Ln]=s.current,Vp(i),new Zp(s)},Ou.hydrateRoot=function(i,s,o){if(!a(i))throw Error(r(299));var u=!1,d="",p=aE,E=oE,w=lE,C=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),s=VT(i,1,!0,s,o??null,u,d,p,E,w,C,q),s.context=kT(null),o=s.current,u=Rn(),u=Sr(u),d=kr(u),d.callback=null,Mr(o,d,u),o=u,s.current.lanes=o,ji(s,o),Oi(s),i[Ln]=s.current,Vp(i),new af(s)},Ou.version="19.1.0",Ou}var e0;function RC(){if(e0)return tg.exports;e0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch{}}return n(),tg.exports=SC(),tg.exports}var CC=RC();const DC="modulepreload",xC=function(n){return"/"+n},t0={},Ma=function(e,t,r){let a=Promise.resolve();if(t&&t.length>0){let c=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=c(t.map(g=>{if(g=xC(g),g in t0)return;t0[g]=!0;const y=g.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${T}`))return;const A=document.createElement("link");if(A.rel=y?"stylesheet":DC,y||(A.as="script"),A.crossOrigin="",A.href=g,m&&A.setAttribute("nonce",m),document.head.appendChild(A),y)return new Promise((R,O)=>{A.addEventListener("load",R),A.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${g}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return a.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var Nu={},n0;function OC(){if(n0)return Nu;n0=1,Object.defineProperty(Nu,"__esModule",{value:!0}),Nu.parse=c,Nu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function c(A,R){const O=new l,G=A.length;if(G<2)return O;const L=(R==null?void 0:R.decode)||y;let Y=0;do{const te=A.indexOf("=",Y);if(te===-1)break;const Q=A.indexOf(";",Y),oe=Q===-1?G:Q;if(te>oe){Y=A.lastIndexOf(";",te-1)+1;continue}const le=f(A,Y,te),pe=m(A,te,le),x=A.slice(le,pe);if(O[x]===void 0){let I=f(A,te+1,oe),S=m(A,oe,I);const P=L(A.slice(I,S));O[x]=P}Y=oe+1}while(Y<G);return O}function f(A,R,O){do{const G=A.charCodeAt(R);if(G!==32&&G!==9)return R}while(++R<O);return O}function m(A,R,O){for(;R>O;){const G=A.charCodeAt(--R);if(G!==32&&G!==9)return R+1}return O}function g(A,R,O){const G=(O==null?void 0:O.encode)||encodeURIComponent;if(!n.test(A))throw new TypeError(`argument name is invalid: ${A}`);const L=G(R);if(!e.test(L))throw new TypeError(`argument val is invalid: ${R}`);let Y=A+"="+L;if(!O)return Y;if(O.maxAge!==void 0){if(!Number.isInteger(O.maxAge))throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);Y+="; Max-Age="+O.maxAge}if(O.domain){if(!t.test(O.domain))throw new TypeError(`option domain is invalid: ${O.domain}`);Y+="; Domain="+O.domain}if(O.path){if(!r.test(O.path))throw new TypeError(`option path is invalid: ${O.path}`);Y+="; Path="+O.path}if(O.expires){if(!T(O.expires)||!Number.isFinite(O.expires.valueOf()))throw new TypeError(`option expires is invalid: ${O.expires}`);Y+="; Expires="+O.expires.toUTCString()}if(O.httpOnly&&(Y+="; HttpOnly"),O.secure&&(Y+="; Secure"),O.partitioned&&(Y+="; Partitioned"),O.priority)switch(typeof O.priority=="string"?O.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${O.priority}`)}if(O.sameSite)switch(typeof O.sameSite=="string"?O.sameSite.toLowerCase():O.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${O.sameSite}`)}return Y}function y(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function T(A){return a.call(A)==="[object Date]"}return Nu}OC();/**
 * react-router v7.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var i0="popstate";function NC(n={}){function e(r,a){let{pathname:l,search:c,hash:f}=r.location;return Sg("",{pathname:l,search:c,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:nc(a)}return VC(e,t,null,n)}function lt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ci(n,e){if(!n)try{throw new Error(e)}catch{}}function PC(){return Math.random().toString(36).substring(2,10)}function r0(n,e){return{usr:n.state,key:n.key,idx:e}}function Sg(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ml(e):e,state:t,key:e&&e.key||r||PC()}}function nc({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ml(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function VC(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,f="POP",m=null,g=y();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function y(){return(c.state||{idx:null}).idx}function T(){f="POP";let L=y(),Y=L==null?null:L-g;g=L,m&&m({action:f,location:G.location,delta:Y})}function A(L,Y){f="PUSH";let te=Sg(G.location,L,Y);g=y()+1;let Q=r0(te,g),oe=G.createHref(te);try{c.pushState(Q,"",oe)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;a.location.assign(oe)}l&&m&&m({action:f,location:G.location,delta:1})}function R(L,Y){f="REPLACE";let te=Sg(G.location,L,Y);g=y();let Q=r0(te,g),oe=G.createHref(te);c.replaceState(Q,"",oe),l&&m&&m({action:f,location:G.location,delta:0})}function O(L){let Y=a.location.origin!=="null"?a.location.origin:a.location.href,te=typeof L=="string"?L:nc(L);return te=te.replace(/ $/,"%20"),lt(Y,`No window.location.(origin|href) available to create URL for href: ${te}`),new URL(te,Y)}let G={get action(){return f},get location(){return n(a,c)},listen(L){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(i0,T),m=L,()=>{a.removeEventListener(i0,T),m=null}},createHref(L){return e(a,L)},createURL:O,encodeLocation(L){let Y=O(L);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:A,replace:R,go(L){return c.go(L)}};return G}function IA(n,e,t="/"){return kC(n,e,t,!1)}function kC(n,e,t,r){let a=typeof e=="string"?ml(e):e,l=gr(a.pathname||"/",t);if(l==null)return null;let c=SA(n);MC(c);let f=null;for(let m=0;f==null&&m<c.length;++m){let g=$C(l);f=GC(c[m],g,r)}return f}function SA(n,e=[],t=[],r=""){let a=(l,c,f)=>{let m={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};m.relativePath.startsWith("/")&&(lt(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let g=mr([r,m.relativePath]),y=t.concat(m);l.children&&l.children.length>0&&(lt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),SA(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:FC(g,l.index),routesMeta:y})};return n.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let m of RA(l.path))a(l,c,m)}),e}function RA(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=RA(r.join("/")),f=[];return f.push(...c.map(m=>m===""?l:[l,m].join("/"))),a&&f.push(...c),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function MC(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:HC(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var LC=/^:[\w-]+$/,UC=3,BC=2,zC=1,jC=10,qC=-2,s0=n=>n==="*";function FC(n,e){let t=n.split("/"),r=t.length;return t.some(s0)&&(r+=qC),e&&(r+=BC),t.filter(a=>!s0(a)).reduce((a,l)=>a+(LC.test(l)?UC:l===""?zC:jC),r)}function HC(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function GC(n,e,t=!1){let{routesMeta:r}=n,a={},l="/",c=[];for(let f=0;f<r.length;++f){let m=r[f],g=f===r.length-1,y=l==="/"?e:e.slice(l.length)||"/",T=Uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),A=m.route;if(!T&&g&&t&&!r[r.length-1].route.index&&(T=Uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:mr([l,T.pathname]),pathnameBase:WC(mr([l,T.pathnameBase])),route:A}),T.pathnameBase!=="/"&&(l=mr([l,T.pathnameBase]))}return c}function Uf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=KC(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:r.reduce((g,{paramName:y,isOptional:T},A)=>{if(y==="*"){let O=f[A]||"";c=l.slice(0,l.length-O.length).replace(/(.)\/+$/,"$1")}const R=f[A];return T&&!R?g[y]=void 0:g[y]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function KC(n,e=!1,t=!0){ci(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,m)=>(r.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function $C(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ci(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function gr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function QC(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?ml(n):n;return{pathname:t?t.startsWith("/")?t:YC(t,e):e,search:ZC(r),hash:JC(a)}}function YC(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function sg(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function XC(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function m_(n){let e=XC(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function p_(n,e,t,r=!1){let a;typeof n=="string"?a=ml(n):(a={...n},lt(!a.pathname||!a.pathname.includes("?"),sg("?","pathname","search",a)),lt(!a.pathname||!a.pathname.includes("#"),sg("#","pathname","hash",a)),lt(!a.search||!a.search.includes("#"),sg("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let T=e.length-1;if(!r&&c.startsWith("..")){let A=c.split("/");for(;A[0]==="..";)A.shift(),T-=1;a.pathname=A.join("/")}f=T>=0?e[T]:"/"}let m=QC(a,f),g=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var mr=n=>n.join("/").replace(/\/\/+/g,"/"),WC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),ZC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,JC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function eD(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var CA=["POST","PUT","PATCH","DELETE"];new Set(CA);var tD=["GET",...CA];new Set(tD);var pl=$.createContext(null);pl.displayName="DataRouter";var md=$.createContext(null);md.displayName="DataRouterState";var DA=$.createContext({isTransitioning:!1});DA.displayName="ViewTransition";var nD=$.createContext(new Map);nD.displayName="Fetchers";var iD=$.createContext(null);iD.displayName="Await";var di=$.createContext(null);di.displayName="Navigation";var yc=$.createContext(null);yc.displayName="Location";var Jn=$.createContext({outlet:null,matches:[],isDataRoute:!1});Jn.displayName="Route";var g_=$.createContext(null);g_.displayName="RouteError";function rD(n,{relative:e}={}){lt(gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=$.useContext(di),{hash:a,pathname:l,search:c}=vc(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:mr([t,l])),r.createHref({pathname:f,search:c,hash:a})}function gl(){return $.useContext(yc)!=null}function mi(){return lt(gl(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(yc).location}var xA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function OA(n){$.useContext(di).static||$.useLayoutEffect(n)}function NA(){let{isDataRoute:n}=$.useContext(Jn);return n?vD():sD()}function sD(){lt(gl(),"useNavigate() may be used only in the context of a <Router> component.");let n=$.useContext(pl),{basename:e,navigator:t}=$.useContext(di),{matches:r}=$.useContext(Jn),{pathname:a}=mi(),l=JSON.stringify(m_(r)),c=$.useRef(!1);return OA(()=>{c.current=!0}),$.useCallback((m,g={})=>{if(ci(c.current,xA),!c.current)return;if(typeof m=="number"){t.go(m);return}let y=p_(m,JSON.parse(l),a,g.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:mr([e,y.pathname])),(g.replace?t.replace:t.push)(y,g.state,g)},[e,t,l,a,n])}var aD=$.createContext(null);function oD(n){let e=$.useContext(Jn).outlet;return e&&$.createElement(aD.Provider,{value:n},e)}function b4(){let{matches:n}=$.useContext(Jn),e=n[n.length-1];return e?e.params:{}}function vc(n,{relative:e}={}){let{matches:t}=$.useContext(Jn),{pathname:r}=mi(),a=JSON.stringify(m_(t));return $.useMemo(()=>p_(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function lD(n,e){return PA(n,e)}function PA(n,e,t,r){var te;lt(gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:l}=$.useContext(di),{matches:c}=$.useContext(Jn),f=c[c.length-1],m=f?f.params:{},g=f?f.pathname:"/",y=f?f.pathnameBase:"/",T=f&&f.route;{let Q=T&&T.path||"";VA(g,!T||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let A=mi(),R;if(e){let Q=typeof e=="string"?ml(e):e;lt(y==="/"||((te=Q.pathname)==null?void 0:te.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),R=Q}else R=A;let O=R.pathname||"/",G=O;if(y!=="/"){let Q=y.replace(/^\//,"").split("/");G="/"+O.replace(/^\//,"").split("/").slice(Q.length).join("/")}let L=!l&&t&&t.matches&&t.matches.length>0?t.matches:IA(n,{pathname:G});ci(T||L!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),ci(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=dD(L&&L.map(Q=>Object.assign({},Q,{params:Object.assign({},m,Q.params),pathname:mr([y,a.encodeLocation?a.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?y:mr([y,a.encodeLocation?a.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),c,t,r);return e&&Y?$.createElement(yc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},Y):Y}function uD(){let n=yD(),e=eD(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},c=null;return c=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:l},"ErrorBoundary")," or"," ",$.createElement("code",{style:l},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:a},t):null,c)}var cD=$.createElement(uD,null),hD=class extends $.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){}render(){return this.state.error!==void 0?$.createElement(Jn.Provider,{value:this.props.routeContext},$.createElement(g_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fD({routeContext:n,match:e,children:t}){let r=$.useContext(pl);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Jn.Provider,{value:n},t)}function dD(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let m=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);lt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,f=-1;if(t)for(let m=0;m<a.length;m++){let g=a[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(f=m),g.route.id){let{loaderData:y,errors:T}=t,A=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||A){c=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((m,g,y)=>{let T,A=!1,R=null,O=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,R=g.route.errorElement||cD,c&&(f<0&&y===0?(VA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,O=null):f===y&&(A=!0,O=g.route.hydrateFallbackElement||null)));let G=e.concat(a.slice(0,y+1)),L=()=>{let Y;return T?Y=R:A?Y=O:g.route.Component?Y=$.createElement(g.route.Component,null):g.route.element?Y=g.route.element:Y=m,$.createElement(fD,{match:g,routeContext:{outlet:m,matches:G,isDataRoute:t!=null},children:Y})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?$.createElement(hD,{location:t.location,revalidation:t.revalidation,component:R,error:T,children:L(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):L()},null)}function __(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mD(n){let e=$.useContext(pl);return lt(e,__(n)),e}function pD(n){let e=$.useContext(md);return lt(e,__(n)),e}function gD(n){let e=$.useContext(Jn);return lt(e,__(n)),e}function y_(n){let e=gD(n),t=e.matches[e.matches.length-1];return lt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function _D(){return y_("useRouteId")}function yD(){var r;let n=$.useContext(g_),e=pD("useRouteError"),t=y_("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function vD(){let{router:n}=mD("useNavigate"),e=y_("useNavigate"),t=$.useRef(!1);return OA(()=>{t.current=!0}),$.useCallback(async(a,l={})=>{ci(t.current,xA),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var a0={};function VA(n,e,t){!e&&!a0[n]&&(a0[n]=!0,ci(!1,t))}$.memo(ED);function ED({routes:n,future:e,state:t}){return PA(n,void 0,t,e)}function Rg({to:n,replace:e,state:t,relative:r}){lt(gl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=$.useContext(di);ci(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=$.useContext(Jn),{pathname:c}=mi(),f=NA(),m=p_(n,m_(l),c,r==="path"),g=JSON.stringify(m);return $.useEffect(()=>{f(JSON.parse(g),{replace:e,state:t,relative:r})},[f,g,r,e,t]),null}function TD(n){return oD(n.context)}function Ni(n){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wD({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:l=!1}){lt(!gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),f=$.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=ml(t));let{pathname:m="/",search:g="",hash:y="",state:T=null,key:A="default"}=t,R=$.useMemo(()=>{let O=gr(m,c);return O==null?null:{location:{pathname:O,search:g,hash:y,state:T,key:A},navigationType:r}},[c,m,g,y,T,A,r]);return ci(R!=null,`<Router basename="${c}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:$.createElement(di.Provider,{value:f},$.createElement(yc.Provider,{children:e,value:R}))}function AD({children:n,location:e}){return lD(Cg(n),e)}function Cg(n,e=[]){let t=[];return $.Children.forEach(n,(r,a)=>{if(!$.isValidElement(r))return;let l=[...e,a];if(r.type===$.Fragment){t.push.apply(t,Cg(r.props.children,l));return}lt(r.type===Ni,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Cg(r.props.children,l)),t.push(c)}),t}var Tf="get",wf="application/x-www-form-urlencoded";function pd(n){return n!=null&&typeof n.tagName=="string"}function bD(n){return pd(n)&&n.tagName.toLowerCase()==="button"}function ID(n){return pd(n)&&n.tagName.toLowerCase()==="form"}function SD(n){return pd(n)&&n.tagName.toLowerCase()==="input"}function RD(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function CD(n,e){return n.button===0&&(!e||e==="_self")&&!RD(n)}var lf=null;function DD(){if(lf===null)try{new FormData(document.createElement("form"),0),lf=!1}catch{lf=!0}return lf}var xD=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ag(n){return n!=null&&!xD.has(n)?(ci(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wf}"`),null):n}function OD(n,e){let t,r,a,l,c;if(ID(n)){let f=n.getAttribute("action");r=f?gr(f,e):null,t=n.getAttribute("method")||Tf,a=ag(n.getAttribute("enctype"))||wf,l=new FormData(n)}else if(bD(n)||SD(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||f.getAttribute("action");if(r=m?gr(m,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||Tf,a=ag(n.getAttribute("formenctype"))||ag(f.getAttribute("enctype"))||wf,l=new FormData(f,n),!DD()){let{name:g,type:y,value:T}=n;if(y==="image"){let A=g?`${g}.`:"";l.append(`${A}x`,"0"),l.append(`${A}y`,"0")}else g&&l.append(g,T)}}else{if(pd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Tf,r=null,a=wf,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:l,body:c}}function v_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function ND(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch{return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function PD(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function VD(n,e,t){let r=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await ND(l,t);return c.links?c.links():[]}return[]}));return UD(r.flat(1).filter(PD).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function o0(n,e,t,r,a,l){let c=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,f=(m,g)=>{var y;return t[g].pathname!==m.pathname||((y=t[g].route.path)==null?void 0:y.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,g)=>c(m,g)||f(m,g)):l==="data"?e.filter((m,g)=>{var T;let y=r.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(c(m,g)||f(m,g))return!0;if(m.route.shouldRevalidate){let A=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function kD(n,e,{includeHydrateFallback:t}={}){return MD(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function MD(n){return[...new Set(n)]}function LD(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function UD(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let l=JSON.stringify(LD(a));return t.has(l)||(t.add(l),r.push({key:l,link:a})),r},[])}var BD=new Set([100,101,204,205]);function zD(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&gr(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function kA(){let n=$.useContext(pl);return v_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function jD(){let n=$.useContext(md);return v_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var E_=$.createContext(void 0);E_.displayName="FrameworkContext";function MA(){let n=$.useContext(E_);return v_(n,"You must render this element inside a <HydratedRouter> element"),n}function qD(n,e){let t=$.useContext(E_),[r,a]=$.useState(!1),[l,c]=$.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:T}=e,A=$.useRef(null);$.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let G=Y=>{Y.forEach(te=>{c(te.isIntersecting)})},L=new IntersectionObserver(G,{threshold:.5});return A.current&&L.observe(A.current),()=>{L.disconnect()}}},[n]),$.useEffect(()=>{if(r){let G=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(G)}}},[r]);let R=()=>{a(!0)},O=()=>{a(!1),c(!1)};return t?n!=="intent"?[l,A,{}]:[l,A,{onFocus:Pu(f,R),onBlur:Pu(m,O),onMouseEnter:Pu(g,R),onMouseLeave:Pu(y,O),onTouchStart:Pu(T,R)}]:[!1,A,{}]}function Pu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function FD({page:n,...e}){let{router:t}=kA(),r=$.useMemo(()=>IA(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?$.createElement(GD,{page:n,matches:r,...e}):null}function HD(n){let{manifest:e,routeModules:t}=MA(),[r,a]=$.useState([]);return $.useEffect(()=>{let l=!1;return VD(n,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[n,e,t]),r}function GD({page:n,matches:e,...t}){let r=mi(),{manifest:a,routeModules:l}=MA(),{basename:c}=kA(),{loaderData:f,matches:m}=jD(),g=$.useMemo(()=>o0(n,e,m,a,r,"data"),[n,e,m,a,r]),y=$.useMemo(()=>o0(n,e,m,a,r,"assets"),[n,e,m,a,r]),T=$.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let O=new Set,G=!1;if(e.forEach(Y=>{var Q;let te=a.routes[Y.route.id];!te||!te.hasLoader||(!g.some(oe=>oe.route.id===Y.route.id)&&Y.route.id in f&&((Q=l[Y.route.id])!=null&&Q.shouldRevalidate)||te.hasClientLoader?G=!0:O.add(Y.route.id))}),O.size===0)return[];let L=zD(n,c);return G&&O.size>0&&L.searchParams.set("_routes",e.filter(Y=>O.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[L.pathname+L.search]},[c,f,r,a,g,e,n,l]),A=$.useMemo(()=>kD(y,a),[y,a]),R=HD(y);return $.createElement($.Fragment,null,T.map(O=>$.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...t})),A.map(O=>$.createElement("link",{key:O,rel:"modulepreload",href:O,...t})),R.map(({key:O,link:G})=>$.createElement("link",{key:O,...G})))}function KD(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var LA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{LA&&(window.__reactRouterVersion="7.5.1")}catch{}function $D({basename:n,children:e,window:t}){let r=$.useRef();r.current==null&&(r.current=NC({window:t,v5Compat:!0}));let a=r.current,[l,c]=$.useState({action:a.action,location:a.location}),f=$.useCallback(m=>{$.startTransition(()=>c(m))},[c]);return $.useLayoutEffect(()=>a.listen(f),[a,f]),$.createElement(wD,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var UA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wo=$.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:l,replace:c,state:f,target:m,to:g,preventScrollReset:y,viewTransition:T,...A},R){let{basename:O}=$.useContext(di),G=typeof g=="string"&&UA.test(g),L,Y=!1;if(typeof g=="string"&&G&&(L=g,LA))try{let S=new URL(window.location.href),P=g.startsWith("//")?new URL(S.protocol+g):new URL(g),k=gr(P.pathname,O);P.origin===S.origin&&k!=null?g=k+P.search+P.hash:Y=!0}catch{ci(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=rD(g,{relative:a}),[Q,oe,le]=qD(r,A),pe=WD(g,{replace:c,state:f,target:m,preventScrollReset:y,relative:a,viewTransition:T});function x(S){e&&e(S),S.defaultPrevented||pe(S)}let I=$.createElement("a",{...A,...le,href:L||te,onClick:Y||l?e:x,ref:KD(R,oe),target:m,"data-discover":!G&&t==="render"?"true":void 0});return Q&&!G?$.createElement($.Fragment,null,I,$.createElement(FD,{page:te})):I});Wo.displayName="Link";var QD=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:l,to:c,viewTransition:f,children:m,...g},y){let T=vc(c,{relative:g.relative}),A=mi(),R=$.useContext(md),{navigator:O,basename:G}=$.useContext(di),L=R!=null&&nx(T)&&f===!0,Y=O.encodeLocation?O.encodeLocation(T).pathname:T.pathname,te=A.pathname,Q=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;t||(te=te.toLowerCase(),Q=Q?Q.toLowerCase():null,Y=Y.toLowerCase()),Q&&G&&(Q=gr(Q,G)||Q);const oe=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let le=te===Y||!a&&te.startsWith(Y)&&te.charAt(oe)==="/",pe=Q!=null&&(Q===Y||!a&&Q.startsWith(Y)&&Q.charAt(Y.length)==="/"),x={isActive:le,isPending:pe,isTransitioning:L},I=le?e:void 0,S;typeof r=="function"?S=r(x):S=[r,le?"active":null,pe?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(x):l;return $.createElement(Wo,{...g,"aria-current":I,className:S,ref:y,style:P,to:c,viewTransition:f},typeof m=="function"?m(x):m)});QD.displayName="NavLink";var YD=$.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:l,method:c=Tf,action:f,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:T,...A},R)=>{let O=ex(),G=tx(f,{relative:g}),L=c.toLowerCase()==="get"?"get":"post",Y=typeof f=="string"&&UA.test(f),te=Q=>{if(m&&m(Q),Q.defaultPrevented)return;Q.preventDefault();let oe=Q.nativeEvent.submitter,le=(oe==null?void 0:oe.getAttribute("formmethod"))||c;O(oe||Q.currentTarget,{fetcherKey:e,method:le,navigate:t,replace:a,state:l,relative:g,preventScrollReset:y,viewTransition:T})};return $.createElement("form",{ref:R,method:L,action:G,onSubmit:r?m:te,...A,"data-discover":!Y&&n==="render"?"true":void 0})});YD.displayName="Form";function XD(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function BA(n){let e=$.useContext(pl);return lt(e,XD(n)),e}function WD(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:l,viewTransition:c}={}){let f=NA(),m=mi(),g=vc(n,{relative:l});return $.useCallback(y=>{if(CD(y,e)){y.preventDefault();let T=t!==void 0?t:nc(m)===nc(g);f(n,{replace:T,state:r,preventScrollReset:a,relative:l,viewTransition:c})}},[m,f,g,t,r,e,n,a,l,c])}var ZD=0,JD=()=>`__${String(++ZD)}__`;function ex(){let{router:n}=BA("useSubmit"),{basename:e}=$.useContext(di),t=_D();return $.useCallback(async(r,a={})=>{let{action:l,method:c,encType:f,formData:m,body:g}=OD(r,e);if(a.navigate===!1){let y=a.fetcherKey||JD();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||c,formEncType:a.encType||f,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||c,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function tx(n,{relative:e}={}){let{basename:t}=$.useContext(di),r=$.useContext(Jn);lt(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),l={...vc(n||".",{relative:e})},c=mi();if(n==null){l.search=c.search;let f=new URLSearchParams(l.search),m=f.getAll("index");if(m.some(y=>y==="")){f.delete("index"),m.filter(T=>T).forEach(T=>f.append("index",T));let y=f.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:mr([t,l.pathname])),nc(l)}function nx(n,e={}){let t=$.useContext(DA);lt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=BA("useViewTransitionState"),a=vc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=gr(t.currentLocation.pathname,r)||t.currentLocation.pathname,c=gr(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Uf(a.pathname,c)!=null||Uf(a.pathname,l)!=null}new TextEncoder;[...BD];const ix=()=>{const[n,e]=$.useState(!1),[t,r]=$.useState(()=>document.documentElement.dataset.theme==="light"?"light":"dark"),a=$.useRef(null),l=$.useRef(null),c=mi();return $.useEffect(()=>{const f=document.documentElement;f.dataset.theme=t,f.classList.toggle("dark",t==="dark"),f.style.colorScheme=t,localStorage.setItem("portfolio-theme",t)},[t]),$.useEffect(()=>{e(!1)},[c.pathname]),$.useEffect(()=>{let f=0;const m=()=>{var R;f=0;const T=document.documentElement.scrollHeight-window.innerHeight,A=T>0?Math.min(Math.max(window.scrollY/T,0),1):0;(R=l.current)==null||R.style.setProperty("--scroll-progress",String(A))},g=()=>{f===0&&(f=window.requestAnimationFrame(m))};g(),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g);const y=new ResizeObserver(g);return y.observe(document.body),()=>{window.removeEventListener("scroll",g),window.removeEventListener("resize",g),y.disconnect(),f!==0&&window.cancelAnimationFrame(f)}},[c.pathname]),$.useEffect(()=>{const f=m=>{n&&a.current&&!a.current.contains(m.target)&&e(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[n]),re.jsxs("header",{className:"site-header",children:[re.jsxs("div",{className:"site-container site-header__inner",children:[re.jsxs(Wo,{to:"/",className:"brand","aria-label":"이민규 포트폴리오 홈",children:[re.jsx("img",{className:"brand__logo",src:"/icon.ico",alt:"",width:"34",height:"34"}),re.jsx("span",{children:"Backend-focused Web Developer"})]}),re.jsxs("nav",{className:"desktop-nav","aria-label":"주요 메뉴",children:[re.jsx(l0,{theme:t,onToggle:()=>r(f=>f==="dark"?"light":"dark")}),re.jsx(uf,{to:"/",label:"소개"}),re.jsx(uf,{to:"/portfolio",label:"프로젝트"})]}),re.jsx("button",{className:"menu-button",type:"button","aria-label":n?"메뉴 닫기":"메뉴 열기","aria-expanded":n,onClick:()=>e(f=>!f),children:n?re.jsx(ox,{}):re.jsx(ax,{})})]}),n&&re.jsx("div",{className:"mobile-nav",ref:a,children:re.jsxs("nav",{className:"site-container","aria-label":"모바일 메뉴",children:[re.jsx("div",{className:"mobile-nav__theme-row",children:re.jsx(l0,{theme:t,onToggle:()=>r(f=>f==="dark"?"light":"dark")})}),re.jsx(uf,{to:"/",label:"소개"}),re.jsx(uf,{to:"/portfolio",label:"프로젝트"})]})}),re.jsx("div",{className:"site-header__scroll-progress",ref:l,"aria-hidden":"true"})]})},uf=({to:n,label:e})=>{const t=mi(),r=n==="/"?t.pathname==="/":t.pathname.startsWith(n);return re.jsx(Wo,{to:n,className:r?"nav-link nav-link--active":"nav-link",children:e})},l0=({theme:n,onToggle:e})=>{const t=n==="dark"?"화이트":"다크";return re.jsxs("button",{className:"theme-toggle",type:"button","aria-label":`${t} 모드로 전환`,title:`${t} 모드로 전환`,onClick:e,children:[re.jsx(rx,{}),re.jsx(sx,{})]})},rx=()=>re.jsxs("svg",{className:"theme-toggle__icon theme-toggle__sun",width:"19",height:"19",viewBox:"0 0 24 24","aria-hidden":"true",children:[re.jsx("circle",{cx:"12",cy:"12",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),re.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),sx=()=>re.jsx("svg",{className:"theme-toggle__icon theme-toggle__moon",width:"19",height:"19",viewBox:"0 0 24 24","aria-hidden":"true",children:re.jsx("path",{d:"M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),ax=()=>re.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24","aria-hidden":"true",children:re.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),ox=()=>re.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24","aria-hidden":"true",children:re.jsx("path",{d:"m6 6 12 12M18 6 6 18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),lx="https://muddy-market-f25.notion.site/4ff47355f10946f99cd2d79435a2b654",ux=()=>re.jsxs("footer",{className:"site-footer",children:[re.jsxs("div",{className:"site-container site-footer__main",children:[re.jsxs("dl",{className:"site-footer__meta",children:[re.jsxs("div",{children:[re.jsx("dt",{children:"BUILT"}),re.jsx("dd",{children:"React · TypeScript · Firebase"})]}),re.jsxs("div",{children:[re.jsx("dt",{children:"TYPE"}),re.jsx("dd",{children:"Pretendard · NanumSquare"})]})]}),re.jsxs("nav",{className:"site-footer__nav","aria-label":"하단 메뉴",children:[re.jsx(Wo,{to:"/portfolio",children:"프로젝트"}),re.jsx("a",{href:"https://github.com/mkllel",target:"_blank",rel:"noreferrer",children:"GitHub"}),re.jsx("a",{href:lx,target:"_blank",rel:"noreferrer",children:"이력서"}),re.jsx("a",{href:"mailto:vavfapi032@naver.com",children:"이메일"})]})]}),re.jsx("div",{className:"site-container site-footer__bottom",children:re.jsxs("span",{children:[re.jsx(Wo,{className:"site-footer__admin-link",to:"/login","aria-label":"관리자 로그인",children:"©"})," ",new Date().getFullYear()," MinKyu Lee. All Rights Reserved."]})})]}),cx=()=>{const{pathname:n}=mi();return $.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[n]),re.jsxs("div",{className:"flex flex-col min-h-screen",children:[re.jsx(ix,{}),re.jsx("main",{className:"flex-grow",children:re.jsx(TD,{})}),re.jsx(ux,{})]})},hx=({size:n="medium"})=>{let e;switch(n){case"small":e="w-5 h-5 border-2";break;case"large":e="w-12 h-12 border-4";break;default:e="w-8 h-8 border-3"}return re.jsx("div",{className:"flex justify-center items-center",children:re.jsx("div",{className:`${e} border-t-indigo-600 border-gray-200 rounded-full animate-spin`})})},fx=()=>{};var u0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},dx=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[r++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],f=n[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],c=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},jA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,f=c?n[a+1]:0,m=a+2<n.length,g=m?n[a+2]:0,y=l>>2,T=(l&3)<<4|f>>4;let A=(f&15)<<2|g>>6,R=g&63;m||(R=64,c||(A=64)),r.push(t[y],t[T],t[A],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dx(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],f=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new mx;const A=l<<2|f>>4;if(r.push(A),g!==64){const R=f<<4&240|g>>2;if(r.push(R),T!==64){const O=g<<6&192|T;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const px=function(n){const e=zA(n);return jA.encodeByteArray(e,!0)},Bf=function(n){return px(n).replace(/\./g,"")},qA=function(n){try{return jA.decodeString(n,!0)}catch{}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=()=>gx().__FIREBASE_DEFAULTS__,yx=()=>{if(typeof process>"u"||typeof u0>"u")return;const n=u0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qA(n[1]);return e&&JSON.parse(e)},gd=()=>{try{return fx()||_x()||yx()||vx()}catch{return}},FA=n=>{var e,t;return(t=(e=gd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},HA=n=>{const e=FA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},GA=()=>{var n;return(n=gd())===null||n===void 0?void 0:n.config},KA=n=>{var e;return(e=gd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Bf(JSON.stringify(t)),Bf(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function wx(){var n;const e=(n=gd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ax(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ix(){const n=Vt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function YA(){return!wx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T_(){try{return typeof indexedDB=="object"}catch{return!1}}function XA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function Sx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="FirebaseError";class ei extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Rx,Object.setPrototypeOf(this,ei.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?Cx(l,r):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new ei(a,f,r)}}function Cx(n,e){return n.replace(Dx,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const Dx=/\{\$([^}]+)}/g;function xx(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _s(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const l=n[a],c=e[a];if(c0(l)&&c0(c)){if(!_s(l,c))return!1}else if(l!==c)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function c0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,l]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function ju(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ox(n,e){const t=new Nx(n,e);return t.subscribe.bind(t)}class Nx{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Px(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=og),a.error===void 0&&(a.error=og),a.complete===void 0&&(a.complete=og);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch{}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Px(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function og(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=1e3,kx=2,Mx=4*60*60*1e3,Lx=.5;function h0(n,e=Vx,t=kx){const r=e*Math.pow(t,n),a=Math.round(Lx*r*(Math.random()-.5)*2);return Math.min(Mx,r+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n){return n&&n._delegate?n._delegate:n}class Wn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ex;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zx(e))try{this.getOrInitializeService({instanceIdentifier:ca})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});r.resolve(l)}catch{}}}}clearInstance(e=ca){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ca){return this.instances.has(e)}getOptions(e=ca){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);r===f&&c.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),l=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bx(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ca){return this.component?this.component.multipleInstances?e:ca:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bx(n){return n===ca?void 0:n}function zx(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ux(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const qx={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Fx=ke.INFO,Hx={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},Gx=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=Hx[e];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=Fx,this._logHandler=Gx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const Kx=(n,e)=>e.some(t=>n instanceof t);let f0,d0;function $x(){return f0||(f0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qx(){return d0||(d0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WA=new WeakMap,Dg=new WeakMap,ZA=new WeakMap,lg=new WeakMap,w_=new WeakMap;function Yx(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(hs(n.result)),a()},c=()=>{r(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&WA.set(t,n)}).catch(()=>{}),w_.set(e,n),e}function Xx(n){if(Dg.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Dg.set(n,e)}let xg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Dg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ZA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wx(n){xg=n(xg)}function Zx(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ug(this),e,...t);return ZA.set(r,e.sort?e.sort():[e]),hs(r)}:Qx().includes(n)?function(...e){return n.apply(ug(this),e),hs(WA.get(this))}:function(...e){return hs(n.apply(ug(this),e))}}function Jx(n){return typeof n=="function"?Zx(n):(n instanceof IDBTransaction&&Xx(n),Kx(n,$x())?new Proxy(n,xg):n)}function hs(n){if(n instanceof IDBRequest)return Yx(n);if(lg.has(n))return lg.get(n);const e=Jx(n);return e!==n&&(lg.set(n,e),w_.set(e,n)),e}const ug=n=>w_.get(n);function JA(n,e,{blocked:t,upgrade:r,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),f=hs(c);return r&&c.addEventListener("upgradeneeded",m=>{r(hs(c.result),m.oldVersion,m.newVersion,hs(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const eO=["get","getKey","getAll","getAllKeys","count"],tO=["put","add","delete","clear"],cg=new Map;function m0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cg.get(e))return cg.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=tO.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||eO.includes(t)))return;const l=async function(c,...f){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return r&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&m.done]))[0]};return cg.set(e,l),l}Wx(n=>({...n,get:(e,t,r)=>m0(e,t)||n.get(e,t,r),has:(e,t)=>!!m0(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iO(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function iO(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Og="@firebase/app",p0="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new _d("@firebase/app"),rO="@firebase/app-compat",sO="@firebase/analytics-compat",aO="@firebase/analytics",oO="@firebase/app-check-compat",lO="@firebase/app-check",uO="@firebase/auth",cO="@firebase/auth-compat",hO="@firebase/database",fO="@firebase/data-connect",dO="@firebase/database-compat",mO="@firebase/functions",pO="@firebase/functions-compat",gO="@firebase/installations",_O="@firebase/installations-compat",yO="@firebase/messaging",vO="@firebase/messaging-compat",EO="@firebase/performance",TO="@firebase/performance-compat",wO="@firebase/remote-config",AO="@firebase/remote-config-compat",bO="@firebase/storage",IO="@firebase/storage-compat",SO="@firebase/firestore",RO="@firebase/vertexai",CO="@firebase/firestore-compat",DO="firebase",xO="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="[DEFAULT]",OO={[Og]:"fire-core",[rO]:"fire-core-compat",[aO]:"fire-analytics",[sO]:"fire-analytics-compat",[lO]:"fire-app-check",[oO]:"fire-app-check-compat",[uO]:"fire-auth",[cO]:"fire-auth-compat",[hO]:"fire-rtdb",[fO]:"fire-data-connect",[dO]:"fire-rtdb-compat",[mO]:"fire-fn",[pO]:"fire-fn-compat",[gO]:"fire-iid",[_O]:"fire-iid-compat",[yO]:"fire-fcm",[vO]:"fire-fcm-compat",[EO]:"fire-perf",[TO]:"fire-perf-compat",[wO]:"fire-rc",[AO]:"fire-rc-compat",[bO]:"fire-gcs",[IO]:"fire-gcs-compat",[SO]:"fire-fst",[CO]:"fire-fst-compat",[RO]:"fire-vertex","fire-js":"fire-js",[DO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new Map,NO=new Map,Pg=new Map;function g0(n,e){try{n.container.addComponent(e)}catch(t){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hi(n){const e=n.name;if(Pg.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;Pg.set(e,n);for(const t of zf.values())g0(t,n);for(const t of NO.values())g0(t,n);return!0}function ws(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fs=new La("app","Firebase",PO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=xO;function eb(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ng,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw fs.create("bad-app-name",{appName:String(a)});if(t||(t=GA()),!t)throw fs.create("no-options");const l=zf.get(a);if(l){if(_s(t,l.options)&&_s(r,l.config))return l;throw fs.create("duplicate-app",{appName:a})}const c=new jx(a);for(const m of Pg.values())c.addComponent(m);const f=new VO(t,r,c);return zf.set(a,f),f}function yd(n=Ng){const e=zf.get(n);if(!e&&n===Ng&&GA())return eb();if(!e)throw fs.create("no-app",{appName:n});return e}function yn(n,e,t){var r;let a=(r=OO[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${a}" with version "${e}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(f.join(" "));return}hi(new Wn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO="firebase-heartbeat-database",MO=1,ic="firebase-heartbeat-store";let hg=null;function tb(){return hg||(hg=JA(kO,MO,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ic)}catch{}}}}).catch(n=>{throw fs.create("idb-open",{originalErrorMessage:n.message})})),hg}async function LO(n){try{const t=(await tb()).transaction(ic),r=await t.objectStore(ic).get(nb(n));return await t.done,r}catch(e){if(e instanceof ei)_r.warn(e.message);else{const t=fs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(t.message)}}}async function _0(n,e){try{const r=(await tb()).transaction(ic,"readwrite");await r.objectStore(ic).put(e,nb(n)),await r.done}catch(t){if(t instanceof ei)_r.warn(t.message);else{const r=fs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_r.warn(r.message)}}}function nb(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=1024,BO=30;class zO{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qO(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=y0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>BO){const c=FO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_r.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=y0(),{heartbeatsToSend:r,unsentEntries:a}=jO(this._heartbeatsCache.heartbeats),l=Bf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return _r.warn(t),""}}}function y0(){return new Date().toISOString().substring(0,10)}function jO(n,e=UO){const t=[];let r=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),v0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),v0(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class qO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T_()?XA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await LO(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return _0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return _0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function v0(n){return Bf(JSON.stringify({version:2,heartbeats:n})).length}function FO(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(n){hi(new Wn("platform-logger",e=>new nO(e),"PRIVATE")),hi(new Wn("heartbeat",e=>new zO(e),"PRIVATE")),yn(Og,p0,n),yn(Og,p0,"esm2017"),yn("fire-js","")}HO("");var GO="firebase",KO="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(GO,KO,"app");function A_(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function ib(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $O=ib,rb=new La("auth","Firebase",ib());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new _d("@firebase/auth");function QO(n,...e){jf.logLevel<=ke.WARN&&jf.warn(`Auth (${Ua}): ${n}`,...e)}function Af(n,...e){jf.logLevel<=ke.ERROR&&jf.error(`Auth (${Ua}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n,...e){throw I_(n,...e)}function ui(n,...e){return I_(n,...e)}function b_(n,e,t){const r=Object.assign(Object.assign({},$O()),{[e]:t});return new La("auth","Firebase",r).create(e,{appName:n.name})}function ds(n){return b_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function YO(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Zn(n,"argument-error"),b_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I_(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return rb.create(n,...e)}function Ae(n,e,...t){if(!n)throw I_(e,...t)}function hr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Af(e),new Error(e)}function yr(n,e){n||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function XO(){return E0()==="http:"||E0()==="https:"}function E0(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XO()||QA()||"connection"in navigator)?navigator.onLine:!0}function ZO(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.shortDelay=e,this.longDelay=t,yr(t>e,"Short delay should be less than long delay!"),this.isMobile=Tx()||bx()}get(){return WO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n,e){yr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tN=new Tc(3e4,6e4);function Ba(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function As(n,e,t,r,a={}){return ab(n,a,async()=>{let l={},c={};r&&(e==="GET"?c=r:l={body:JSON.stringify(r)});const f=Ec(Object.assign({key:n.config.apiKey},c)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:m},l);return Ax()||(g.referrerPolicy="no-referrer"),sb.fetch()(await ob(n,n.config.apiHost,t,f),g)})}async function ab(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},JO),e);try{const a=new iN(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw cf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw cf(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw cf(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw cf(n,"user-disabled",c);const y=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw b_(n,y,g);Zn(n,y)}}catch(a){if(a instanceof ei)throw a;Zn(n,"network-request-failed",{message:String(a)})}}async function vd(n,e,t,r,a={}){const l=await As(n,e,t,r,a);return"mfaPendingCredential"in l&&Zn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function ob(n,e,t,r){const a=`${e}${t}?${r}`,l=n,c=l.config.emulator?S_(n.config,a):`${n.config.apiScheme}://${a}`;return eN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function nN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ui(this.auth,"network-request-failed")),tN.get())})}}function cf(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=ui(n,e,r);return a.customData._tokenResponse=t,a}function T0(n){return n!==void 0&&n.enterprise!==void 0}class rN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return nN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sN(n,e){return As(n,"GET","/v2/recaptchaConfig",Ba(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(n,e){return As(n,"POST","/v1/accounts:delete",e)}async function qf(n,e){return As(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oN(n,e=!1){const t=We(n),r=await t.getIdToken(e),a=R_(r);Ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:$u(fg(a.auth_time)),issuedAtTime:$u(fg(a.iat)),expirationTime:$u(fg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function fg(n){return Number(n)*1e3}function R_(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Af("JWT malformed, contained fewer than 3 sections"),null;try{const a=qA(t);return a?JSON.parse(a):(Af("Failed to decode base64 JWT payload"),null)}catch(a){return Af("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function w0(n){const e=R_(n);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ei&&lN(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function lN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$u(this.lastLoginAt),this.creationTime=$u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(n){var e;const t=n.auth,r=await n.getIdToken(),a=await rc(n,qf(t,{idToken:r}));Ae(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?lb(l.providerUserInfo):[],f=hN(n.providerData,c),m=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),y=m?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new kg(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function cN(n){const e=We(n);await Ff(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hN(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function lb(n){return n.map(e=>{var{providerId:t}=e,r=A_(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(n,e){const t=await ab(n,{},async()=>{const r=Ec({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await ob(n,a,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",sb.fetch()(c,{method:"POST",headers:f,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dN(n,e){return As(n,"POST","/v2/accounts:revokeToken",Ba(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):w0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=w0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:l}=await fN(e,t);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:l}=t,c=new $o;return r&&(Ae(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),a&&(Ae(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n,e){Ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class li{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,l=A_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new kg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await rc(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return oN(this,e)}reload(){return cN(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ff(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(ds(this.auth));const e=await this.getIdToken();return await rc(this,aN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,l,c,f,m,g,y;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(a=t.email)!==null&&a!==void 0?a:void 0,R=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,O=(c=t.photoURL)!==null&&c!==void 0?c:void 0,G=(f=t.tenantId)!==null&&f!==void 0?f:void 0,L=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,Y=(g=t.createdAt)!==null&&g!==void 0?g:void 0,te=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Q,emailVerified:oe,isAnonymous:le,providerData:pe,stsTokenManager:x}=t;Ae(Q&&x,e,"internal-error");const I=$o.fromJSON(this.name,x);Ae(typeof Q=="string",e,"internal-error"),es(T,e.name),es(A,e.name),Ae(typeof oe=="boolean",e,"internal-error"),Ae(typeof le=="boolean",e,"internal-error"),es(R,e.name),es(O,e.name),es(G,e.name),es(L,e.name),es(Y,e.name),es(te,e.name);const S=new li({uid:Q,auth:e,email:A,emailVerified:oe,displayName:T,isAnonymous:le,photoURL:O,phoneNumber:R,tenantId:G,stsTokenManager:I,createdAt:Y,lastLoginAt:te});return pe&&Array.isArray(pe)&&(S.providerData=pe.map(P=>Object.assign({},P))),L&&(S._redirectEventId=L),S}static async _fromIdTokenResponse(e,t,r=!1){const a=new $o;a.updateFromServerResponse(t);const l=new li({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Ff(l),l}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?lb(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new $o;f.updateFromIdToken(r);const m=new li({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new kg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new Map;function fr(n){yr(n instanceof Function,"Expected a class definition");let e=A0.get(n);return e?(yr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,A0.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ub.type="NONE";const b0=ub;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n,e,t){return`firebase:${n}:${e}:${t}`}class Qo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=bf(this.userKey,a.apiKey,l),this.fullPersistenceKey=bf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qf(this.auth,{idToken:e}).catch(()=>{});return t?li._fromGetAccountInfoResponse(this.auth,t,e):null}return li._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qo(fr(b0),e,r);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||fr(b0);const c=bf(r,e.config.apiKey,e.name);let f=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const A=await qf(e,{idToken:y}).catch(()=>{});if(!A)break;T=await li._fromGetAccountInfoResponse(e,A,y)}else T=li._fromJSON(e,y);g!==l&&(f=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Qo(l,e,r):(l=m[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Qo(l,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(db(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pb(e))return"Blackberry";if(gb(e))return"Webos";if(hb(e))return"Safari";if((e.includes("chrome/")||fb(e))&&!e.includes("edge/"))return"Chrome";if(mb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cb(n=Vt()){return/firefox\//i.test(n)}function hb(n=Vt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fb(n=Vt()){return/crios\//i.test(n)}function db(n=Vt()){return/iemobile/i.test(n)}function mb(n=Vt()){return/android/i.test(n)}function pb(n=Vt()){return/blackberry/i.test(n)}function gb(n=Vt()){return/webos/i.test(n)}function C_(n=Vt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mN(n=Vt()){var e;return C_(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pN(){return Ix()&&document.documentMode===10}function _b(n=Vt()){return C_(n)||mb(n)||gb(n)||pb(n)||/windows phone/i.test(n)||db(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(n,e=[]){let t;switch(n){case"Browser":t=I0(Vt());break;case"Worker":t=`${I0(Vt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ua}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=l=>new Promise((c,f)=>{try{const m=e(l);c(m)}catch(m){f(m)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(n,e={}){return As(n,"GET","/v2/passwordPolicy",Ba(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=6;class vN{constructor(e){var t,r,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:yN,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,l,c,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new S0(this),this.idTokenSubscription=new S0(this),this.beforeStateQueue=new gN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fr(t)),this._initializationPromise=this.queue(async()=>{var r,a,l;if(!this._deleted&&(this.persistenceManager=await Qo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qf(this,{idToken:e}),r=await li._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch{await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(xn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&(m!=null&&m.user)&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ff(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(ds(this));const t=e?We(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(ds(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(ds(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _N(this),t=new vN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await dN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fr(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await Qo.create(this,[fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,r,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&QO(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function za(n){return We(n)}class S0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ox(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ed={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TN(n){Ed=n}function vb(n){return Ed.loadJS(n)}function wN(){return Ed.recaptchaEnterpriseScript}function AN(){return Ed.gapiScript}function bN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class IN{constructor(){this.enterprise=new SN}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class SN{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const RN="recaptcha-enterprise",Eb="NO_RECAPTCHA";class CN{constructor(e){this.type=RN,this.auth=za(e)}async verify(e="verify",t=!1){async function r(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{sN(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new rN(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{f(m)})})}function a(l,c,f){const m=window.grecaptcha;T0(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(Eb)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IN().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{r(this.auth).then(f=>{if(!t&&T0(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=wN();m.length!==0&&(m+=f),vb(m).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function R0(n,e,t,r=!1,a=!1){const l=new CN(n);let c;if(a)c=Eb;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return r?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function C0(n,e,t,r,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await R0(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){const f=await R0(n,e,t,t==="getOobCode");return r(n,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(n,e){const t=ws(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(_s(l,e??{}))return a;Zn(a,"already-initialized")}return t.initialize({options:e})}function xN(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(fr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ON(n,e,t){const r=za(n);Ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!1,l=Tb(e),{host:c,port:f}=NN(e),m=f===null?"":`:${f}`,g={url:`${l}//${c}${m}/`},y=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){Ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ae(_s(g,r.config.emulator)&&_s(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,PN()}function Tb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function NN(n){const e=Tb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const l=a[1];return{host:l,port:D0(r.substr(l.length+1))}}else{const[l,c]=r.split(":");return{host:l,port:D0(c)}}}function D0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function PN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,t){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function VN(n,e){return As(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(n,e){return vd(n,"POST","/v1/accounts:signInWithPassword",Ba(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(n,e){return vd(n,"POST","/v1/accounts:signInWithEmailLink",Ba(n,e))}async function LN(n,e){return vd(n,"POST","/v1/accounts:signInWithEmailLink",Ba(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends D_{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new sc(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new sc(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return C0(e,t,"signInWithPassword",kN);case"emailLink":return MN(e,{email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return C0(e,r,"signUpPassword",VN);case"emailLink":return LN(e,{idToken:t,email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(n,e){return vd(n,"POST","/v1/accounts:signInWithIdp",Ba(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="http://localhost";class ba extends D_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ba(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,l=A_(t,["providerId","signInMethod"]);if(!r||!a)return null;const c=new ba(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Yo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yo(e,t)}buildRequest(){const e={requestUri:UN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ec(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zN(n){const e=zu(ju(n)).link,t=e?zu(ju(e)).deep_link_id:null,r=zu(ju(n)).deep_link_id;return(r?zu(ju(r)).link:null)||r||t||e||n}class x_{constructor(e){var t,r,a,l,c,f;const m=zu(ju(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,y=(r=m.oobCode)!==null&&r!==void 0?r:null,T=BN((a=m.mode)!==null&&a!==void 0?a:null);Ae(g&&y&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=y,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=zN(e);try{return new x_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.providerId=_l.PROVIDER_ID}static credential(e,t){return sc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=x_.parseLink(t);return Ae(r,"argument-error"),sc._fromEmailAndCode(e,r.code,r.tenantId)}}_l.PROVIDER_ID="password";_l.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_l.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends O_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends wc{constructor(){super("facebook.com")}static credential(e){return ba._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rs.credential(e.oauthAccessToken)}catch{return null}}}rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";rs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends wc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ba._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ss.credential(t,r)}catch{return null}}}ss.GOOGLE_SIGN_IN_METHOD="google.com";ss.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends wc{constructor(){super("github.com")}static credential(e){return ba._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends wc{constructor(){super("twitter.com")}static credential(e,t){return ba._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return os.credential(t,r)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const l=await li._fromIdTokenResponse(e,r,a),c=x0(r);return new Zo({user:l,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=x0(r);return new Zo({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function x0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends ei{constructor(e,t,r,a){var l;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Hf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new Hf(e,t,r,a)}}function wb(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Hf._fromErrorAndOperation(n,l,e,r):l})}async function jN(n,e,t=!1){const r=await rc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Zo._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(n,e,t=!1){const{auth:r}=n;if(xn(r.app))return Promise.reject(ds(r));const a="reauthenticate";try{const l=await rc(n,wb(r,a,e,n),t);Ae(l.idToken,r,"internal-error");const c=R_(l.idToken);Ae(c,r,"internal-error");const{sub:f}=c;return Ae(n.uid===f,r,"user-mismatch"),Zo._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Zn(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(n,e,t=!1){if(xn(n.app))return Promise.reject(ds(n));const r="signIn",a=await wb(n,r,e),l=await Zo._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(l.user),l}async function FN(n,e){return Ab(za(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HN(n){const e=za(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function I4(n,e,t){return xn(n.app)?Promise.reject(ds(n)):FN(We(n),_l.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HN(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(n,e){return We(n).setPersistence(e)}function KN(n,e,t,r){return We(n).onIdTokenChanged(e,t,r)}function $N(n,e,t){return We(n).beforeAuthStateChanged(e,t)}function QN(n,e,t,r){return We(n).onAuthStateChanged(e,t,r)}function S4(n){return We(n).signOut()}const Gf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gf,"1"),this.storage.removeItem(Gf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=1e3,XN=10;class Ib extends bb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_b(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,m)=>{this.notifyListeners(c,m)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},l=this.storage.getItem(r);pN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,XN):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},YN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ib.type="LOCAL";const Sb=Ib;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb extends bb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rb.type="SESSION";const Cb=Rb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Td(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),m=await WN(f);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Td.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,m)=>{const g=N_("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(T){const A=T;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(y),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return window}function JN(n){Li().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(){return typeof Li().WorkerGlobalScope<"u"&&typeof Li().importScripts=="function"}async function eP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nP(){return Db()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="firebaseLocalStorageDb",iP=1,Kf="firebaseLocalStorage",Ob="fbase_key";class Ac{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wd(n,e){return n.transaction([Kf],e?"readwrite":"readonly").objectStore(Kf)}function rP(){const n=indexedDB.deleteDatabase(xb);return new Ac(n).toPromise()}function Mg(){const n=indexedDB.open(xb,iP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Kf,{keyPath:Ob})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Kf)?e(r):(r.close(),await rP(),e(await Mg()))})})}async function O0(n,e,t){const r=wd(n,!0).put({[Ob]:e,value:t});return new Ac(r).toPromise()}async function sP(n,e){const t=wd(n,!1).get(e),r=await new Ac(t).toPromise();return r===void 0?null:r.value}function N0(n,e){const t=wd(n,!0).delete(e);return new Ac(t).toPromise()}const aP=800,oP=3;class Nb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>oP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Db()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Td._getInstance(nP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eP(),!this.activeServiceWorker)return;this.sender=new ZN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mg();return await O0(e,Gf,"1"),await N0(e,Gf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>O0(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>sP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>N0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=wd(a,!1).getAll();return new Ac(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nb.type="LOCAL";const lP=Nb;new Tc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(n,e){return e?fr(e):(Ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends D_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uP(n){return Ab(n.auth,new P_(n),n.bypassAuthState)}function cP(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),qN(t,new P_(n),n.bypassAuthState)}async function hP(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),jN(t,new P_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,t,r,a,l=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uP;case"linkViaPopup":case"linkViaRedirect":return hP;case"reauthViaPopup":case"reauthViaRedirect":return cP;default:Zn(this.auth,"internal-error")}}resolve(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new Tc(2e3,1e4);async function R4(n,e,t){if(xn(n.app))return Promise.reject(ui(n,"operation-not-supported-in-this-environment"));const r=za(n);YO(n,e,O_);const a=Pb(r,t);return new _a(r,"signInViaPopup",e,a).executeNotNull()}class _a extends Vb{constructor(e,t,r,a,l){super(e,t,a,l),this.provider=r,this.authWindow=null,this.pollId=null,_a.currentPopupAction&&_a.currentPopupAction.cancel(),_a.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){yr(this.filter.length===1,"Popup operations only handle one event");const e=N_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_a.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fP.get())};e()}}_a.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="pendingRedirect",If=new Map;class mP extends Vb{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=If.get(this.auth._key());if(!e){try{const r=await pP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}If.set(this.auth._key(),e)}return this.bypassAuthState||If.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pP(n,e){const t=yP(e),r=_P(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}function gP(n,e){If.set(n._key(),e)}function _P(n){return fr(n._redirectPersistence)}function yP(n){return bf(dP,n.config.apiKey,n.name)}async function vP(n,e,t=!1){if(xn(n.app))return Promise.reject(ds(n));const r=za(n),a=Pb(r,e),c=await new mP(r,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=10*60*1e3;class TP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!kb(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ui(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EP&&this.cachedEventUids.clear(),this.cachedEventUids.has(P0(e))}saveEventToCache(e){this.cachedEventUids.add(P0(e)),this.lastProcessedEventTime=Date.now()}}function P0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kb({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kb(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(n,e={}){return As(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IP=/^https?/;async function SP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await AP(n);for(const t of e)try{if(RP(t))return}catch{}Zn(n,"unauthorized-domain")}function RP(n){const e=Vg(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!IP.test(t))return!1;if(bP.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=new Tc(3e4,6e4);function V0(){const n=Li().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function DP(n){return new Promise((e,t)=>{var r,a,l;function c(){V0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{V0(),t(ui(n,"network-request-failed"))},timeout:CP.get()})}if(!((a=(r=Li().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Li().gapi)===null||l===void 0)&&l.load)c();else{const f=bN("iframefcb");return Li()[f]=()=>{gapi.load?c():t(ui(n,"network-request-failed"))},vb(`${AN()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Sf=null,e})}let Sf=null;function xP(n){return Sf=Sf||DP(n),Sf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=new Tc(5e3,15e3),NP="__/auth/iframe",PP="emulator/auth/iframe",VP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MP(n){const e=n.config;Ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?S_(e,PP):`https://${n.config.authDomain}/${NP}`,r={apiKey:e.apiKey,appName:n.name,v:Ua},a=kP.get(n.config.apiHost);a&&(r.eid=a);const l=n._getFrameworks();return l.length&&(r.fw=l.join(",")),`${t}?${Ec(r).slice(1)}`}async function LP(n){const e=await xP(n),t=Li().gapi;return Ae(t,n,"internal-error"),e.open({where:document.body,url:MP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VP,dontclear:!0},r=>new Promise(async(a,l)=>{await r.restyle({setHideOnLeave:!1});const c=ui(n,"network-request-failed"),f=Li().setTimeout(()=>{l(c)},OP.get());function m(){Li().clearTimeout(f),a(r)}r.ping(m).then(m,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BP=500,zP=600,jP="_blank",qP="http://localhost";class k0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FP(n,e,t,r=BP,a=zP){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const m=Object.assign(Object.assign({},UP),{width:r.toString(),height:a.toString(),top:l,left:c}),g=Vt().toLowerCase();t&&(f=fb(g)?jP:t),cb(g)&&(e=e||qP,m.scrollbars="yes");const y=Object.entries(m).reduce((A,[R,O])=>`${A}${R}=${O},`,"");if(mN(g)&&f!=="_self")return HP(e||"",f),new k0(null);const T=window.open(e||"",f,y);Ae(T,n,"popup-blocked");try{T.focus()}catch{}return new k0(T)}function HP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="__/auth/handler",KP="emulator/auth/handler",$P=encodeURIComponent("fac");async function M0(n,e,t,r,a,l){Ae(n.config.authDomain,n,"auth-domain-config-required"),Ae(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ua,eventId:a};if(e instanceof O_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",xx(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof wc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await n._getAppCheckToken(),g=m?`#${$P}=${encodeURIComponent(m)}`:"";return`${QP(n)}?${Ec(f).slice(1)}${g}`}function QP({config:n}){return n.emulator?S_(n,KP):`https://${n.authDomain}/${GP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="webStorageSupport";class YP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cb,this._completeRedirectFn=vP,this._overrideRedirectResult=gP}async _openPopup(e,t,r,a){var l;yr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await M0(e,t,r,Vg(),a);return FP(e,c,N_())}async _openRedirect(e,t,r,a){await this._originValidation(e);const l=await M0(e,t,r,Vg(),a);return JN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(yr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await LP(e),r=new TP(e);return t.register("authEvent",a=>(Ae(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(dg,{type:dg},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[dg];c!==void 0&&t(!!c),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _b()||hb()||C_()}}const XP=YP;var L0="@firebase/auth",U0="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JP(n){hi(new Wn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=r.options;Ae(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yb(n)},g=new EN(r,a,l,m);return xN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),hi(new Wn("auth-internal",e=>{const t=za(e.getProvider("auth").getImmediate());return(r=>new WP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(L0,U0,ZP(n)),yn(L0,U0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=5*60,t2=KA("authIdTokenMaxAge")||e2;let B0=null;const n2=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>t2)return;const a=t==null?void 0:t.token;B0!==a&&(B0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function i2(n=yd()){const e=ws(n,"auth");if(e.isInitialized())return e.getImmediate();const t=DN(n,{popupRedirectResolver:XP,persistence:[lP,Sb,Cb]}),r=KA("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(r,location.origin);if(location.origin===l.origin){const c=n2(l.toString());$N(t,c,()=>c(t.currentUser)),KN(t,f=>c(f))}}const a=FA("auth");return a&&ON(t,`http://${a}`),t}function r2(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}TN({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const l=ui("internal-error");l.customData=a,t(l)},r.type="text/javascript",r.charset="UTF-8",r2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JP("Browser");var z0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,Mb;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function S(){}S.prototype=I.prototype,x.D=I.prototype,x.prototype=new S,x.prototype.constructor=x,x.C=function(P,k,U){for(var D=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)D[Ht-2]=arguments[Ht];return I.prototype[k].apply(P,D)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(x,I,S){S||(S=0);var P=Array(16);if(typeof I=="string")for(var k=0;16>k;++k)P[k]=I.charCodeAt(S++)|I.charCodeAt(S++)<<8|I.charCodeAt(S++)<<16|I.charCodeAt(S++)<<24;else for(k=0;16>k;++k)P[k]=I[S++]|I[S++]<<8|I[S++]<<16|I[S++]<<24;I=x.g[0],S=x.g[1],k=x.g[2];var U=x.g[3],D=I+(U^S&(k^U))+P[0]+3614090360&4294967295;I=S+(D<<7&4294967295|D>>>25),D=U+(k^I&(S^k))+P[1]+3905402710&4294967295,U=I+(D<<12&4294967295|D>>>20),D=k+(S^U&(I^S))+P[2]+606105819&4294967295,k=U+(D<<17&4294967295|D>>>15),D=S+(I^k&(U^I))+P[3]+3250441966&4294967295,S=k+(D<<22&4294967295|D>>>10),D=I+(U^S&(k^U))+P[4]+4118548399&4294967295,I=S+(D<<7&4294967295|D>>>25),D=U+(k^I&(S^k))+P[5]+1200080426&4294967295,U=I+(D<<12&4294967295|D>>>20),D=k+(S^U&(I^S))+P[6]+2821735955&4294967295,k=U+(D<<17&4294967295|D>>>15),D=S+(I^k&(U^I))+P[7]+4249261313&4294967295,S=k+(D<<22&4294967295|D>>>10),D=I+(U^S&(k^U))+P[8]+1770035416&4294967295,I=S+(D<<7&4294967295|D>>>25),D=U+(k^I&(S^k))+P[9]+2336552879&4294967295,U=I+(D<<12&4294967295|D>>>20),D=k+(S^U&(I^S))+P[10]+4294925233&4294967295,k=U+(D<<17&4294967295|D>>>15),D=S+(I^k&(U^I))+P[11]+2304563134&4294967295,S=k+(D<<22&4294967295|D>>>10),D=I+(U^S&(k^U))+P[12]+1804603682&4294967295,I=S+(D<<7&4294967295|D>>>25),D=U+(k^I&(S^k))+P[13]+4254626195&4294967295,U=I+(D<<12&4294967295|D>>>20),D=k+(S^U&(I^S))+P[14]+2792965006&4294967295,k=U+(D<<17&4294967295|D>>>15),D=S+(I^k&(U^I))+P[15]+1236535329&4294967295,S=k+(D<<22&4294967295|D>>>10),D=I+(k^U&(S^k))+P[1]+4129170786&4294967295,I=S+(D<<5&4294967295|D>>>27),D=U+(S^k&(I^S))+P[6]+3225465664&4294967295,U=I+(D<<9&4294967295|D>>>23),D=k+(I^S&(U^I))+P[11]+643717713&4294967295,k=U+(D<<14&4294967295|D>>>18),D=S+(U^I&(k^U))+P[0]+3921069994&4294967295,S=k+(D<<20&4294967295|D>>>12),D=I+(k^U&(S^k))+P[5]+3593408605&4294967295,I=S+(D<<5&4294967295|D>>>27),D=U+(S^k&(I^S))+P[10]+38016083&4294967295,U=I+(D<<9&4294967295|D>>>23),D=k+(I^S&(U^I))+P[15]+3634488961&4294967295,k=U+(D<<14&4294967295|D>>>18),D=S+(U^I&(k^U))+P[4]+3889429448&4294967295,S=k+(D<<20&4294967295|D>>>12),D=I+(k^U&(S^k))+P[9]+568446438&4294967295,I=S+(D<<5&4294967295|D>>>27),D=U+(S^k&(I^S))+P[14]+3275163606&4294967295,U=I+(D<<9&4294967295|D>>>23),D=k+(I^S&(U^I))+P[3]+4107603335&4294967295,k=U+(D<<14&4294967295|D>>>18),D=S+(U^I&(k^U))+P[8]+1163531501&4294967295,S=k+(D<<20&4294967295|D>>>12),D=I+(k^U&(S^k))+P[13]+2850285829&4294967295,I=S+(D<<5&4294967295|D>>>27),D=U+(S^k&(I^S))+P[2]+4243563512&4294967295,U=I+(D<<9&4294967295|D>>>23),D=k+(I^S&(U^I))+P[7]+1735328473&4294967295,k=U+(D<<14&4294967295|D>>>18),D=S+(U^I&(k^U))+P[12]+2368359562&4294967295,S=k+(D<<20&4294967295|D>>>12),D=I+(S^k^U)+P[5]+4294588738&4294967295,I=S+(D<<4&4294967295|D>>>28),D=U+(I^S^k)+P[8]+2272392833&4294967295,U=I+(D<<11&4294967295|D>>>21),D=k+(U^I^S)+P[11]+1839030562&4294967295,k=U+(D<<16&4294967295|D>>>16),D=S+(k^U^I)+P[14]+4259657740&4294967295,S=k+(D<<23&4294967295|D>>>9),D=I+(S^k^U)+P[1]+2763975236&4294967295,I=S+(D<<4&4294967295|D>>>28),D=U+(I^S^k)+P[4]+1272893353&4294967295,U=I+(D<<11&4294967295|D>>>21),D=k+(U^I^S)+P[7]+4139469664&4294967295,k=U+(D<<16&4294967295|D>>>16),D=S+(k^U^I)+P[10]+3200236656&4294967295,S=k+(D<<23&4294967295|D>>>9),D=I+(S^k^U)+P[13]+681279174&4294967295,I=S+(D<<4&4294967295|D>>>28),D=U+(I^S^k)+P[0]+3936430074&4294967295,U=I+(D<<11&4294967295|D>>>21),D=k+(U^I^S)+P[3]+3572445317&4294967295,k=U+(D<<16&4294967295|D>>>16),D=S+(k^U^I)+P[6]+76029189&4294967295,S=k+(D<<23&4294967295|D>>>9),D=I+(S^k^U)+P[9]+3654602809&4294967295,I=S+(D<<4&4294967295|D>>>28),D=U+(I^S^k)+P[12]+3873151461&4294967295,U=I+(D<<11&4294967295|D>>>21),D=k+(U^I^S)+P[15]+530742520&4294967295,k=U+(D<<16&4294967295|D>>>16),D=S+(k^U^I)+P[2]+3299628645&4294967295,S=k+(D<<23&4294967295|D>>>9),D=I+(k^(S|~U))+P[0]+4096336452&4294967295,I=S+(D<<6&4294967295|D>>>26),D=U+(S^(I|~k))+P[7]+1126891415&4294967295,U=I+(D<<10&4294967295|D>>>22),D=k+(I^(U|~S))+P[14]+2878612391&4294967295,k=U+(D<<15&4294967295|D>>>17),D=S+(U^(k|~I))+P[5]+4237533241&4294967295,S=k+(D<<21&4294967295|D>>>11),D=I+(k^(S|~U))+P[12]+1700485571&4294967295,I=S+(D<<6&4294967295|D>>>26),D=U+(S^(I|~k))+P[3]+2399980690&4294967295,U=I+(D<<10&4294967295|D>>>22),D=k+(I^(U|~S))+P[10]+4293915773&4294967295,k=U+(D<<15&4294967295|D>>>17),D=S+(U^(k|~I))+P[1]+2240044497&4294967295,S=k+(D<<21&4294967295|D>>>11),D=I+(k^(S|~U))+P[8]+1873313359&4294967295,I=S+(D<<6&4294967295|D>>>26),D=U+(S^(I|~k))+P[15]+4264355552&4294967295,U=I+(D<<10&4294967295|D>>>22),D=k+(I^(U|~S))+P[6]+2734768916&4294967295,k=U+(D<<15&4294967295|D>>>17),D=S+(U^(k|~I))+P[13]+1309151649&4294967295,S=k+(D<<21&4294967295|D>>>11),D=I+(k^(S|~U))+P[4]+4149444226&4294967295,I=S+(D<<6&4294967295|D>>>26),D=U+(S^(I|~k))+P[11]+3174756917&4294967295,U=I+(D<<10&4294967295|D>>>22),D=k+(I^(U|~S))+P[2]+718787259&4294967295,k=U+(D<<15&4294967295|D>>>17),D=S+(U^(k|~I))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(k+(D<<21&4294967295|D>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+U&4294967295}r.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var S=I-this.blockSize,P=this.B,k=this.h,U=0;U<I;){if(k==0)for(;U<=S;)a(this,x,U),U+=this.blockSize;if(typeof x=="string"){for(;U<I;)if(P[k++]=x.charCodeAt(U++),k==this.blockSize){a(this,P),k=0;break}}else for(;U<I;)if(P[k++]=x[U++],k==this.blockSize){a(this,P),k=0;break}}this.h=k,this.o+=I},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var S=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=S&255,S/=256;for(this.u(x),x=Array(16),I=S=0;4>I;++I)for(var P=0;32>P;P+=8)x[S++]=this.g[I]>>>P&255;return x};function l(x,I){var S=f;return Object.prototype.hasOwnProperty.call(S,x)?S[x]:S[x]=I(x)}function c(x,I){this.h=I;for(var S=[],P=!0,k=x.length-1;0<=k;k--){var U=x[k]|0;P&&U==I||(S[k]=U,P=!1)}this.g=S}var f={};function m(x){return-128<=x&&128>x?l(x,function(I){return new c([I|0],0>I?-1:0)}):new c([x|0],0>x?-1:0)}function g(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return L(g(-x));for(var I=[],S=1,P=0;x>=S;P++)I[P]=x/S|0,S*=4294967296;return new c(I,0)}function y(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return L(y(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=g(Math.pow(I,8)),P=T,k=0;k<x.length;k+=8){var U=Math.min(8,x.length-k),D=parseInt(x.substring(k,k+U),I);8>U?(U=g(Math.pow(I,U)),P=P.j(U).add(g(D))):(P=P.j(S),P=P.add(g(D)))}return P}var T=m(0),A=m(1),R=m(16777216);n=c.prototype,n.m=function(){if(G(this))return-L(this).m();for(var x=0,I=1,S=0;S<this.g.length;S++){var P=this.i(S);x+=(0<=P?P:4294967296+P)*I,I*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(O(this))return"0";if(G(this))return"-"+L(this).toString(x);for(var I=g(Math.pow(x,6)),S=this,P="";;){var k=oe(S,I).g;S=Y(S,k.j(I));var U=((0<S.g.length?S.g[0]:S.h)>>>0).toString(x);if(S=k,O(S))return U+P;for(;6>U.length;)U="0"+U;P=U+P}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function O(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function G(x){return x.h==-1}n.l=function(x){return x=Y(this,x),G(x)?-1:O(x)?0:1};function L(x){for(var I=x.g.length,S=[],P=0;P<I;P++)S[P]=~x.g[P];return new c(S,~x.h).add(A)}n.abs=function(){return G(this)?L(this):this},n.add=function(x){for(var I=Math.max(this.g.length,x.g.length),S=[],P=0,k=0;k<=I;k++){var U=P+(this.i(k)&65535)+(x.i(k)&65535),D=(U>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);P=D>>>16,U&=65535,D&=65535,S[k]=D<<16|U}return new c(S,S[S.length-1]&-2147483648?-1:0)};function Y(x,I){return x.add(L(I))}n.j=function(x){if(O(this)||O(x))return T;if(G(this))return G(x)?L(this).j(L(x)):L(L(this).j(x));if(G(x))return L(this.j(L(x)));if(0>this.l(R)&&0>x.l(R))return g(this.m()*x.m());for(var I=this.g.length+x.g.length,S=[],P=0;P<2*I;P++)S[P]=0;for(P=0;P<this.g.length;P++)for(var k=0;k<x.g.length;k++){var U=this.i(P)>>>16,D=this.i(P)&65535,Ht=x.i(k)>>>16,dt=x.i(k)&65535;S[2*P+2*k]+=D*dt,te(S,2*P+2*k),S[2*P+2*k+1]+=U*dt,te(S,2*P+2*k+1),S[2*P+2*k+1]+=D*Ht,te(S,2*P+2*k+1),S[2*P+2*k+2]+=U*Ht,te(S,2*P+2*k+2)}for(P=0;P<I;P++)S[P]=S[2*P+1]<<16|S[2*P];for(P=I;P<2*I;P++)S[P]=0;return new c(S,0)};function te(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function Q(x,I){this.g=x,this.h=I}function oe(x,I){if(O(I))throw Error("division by zero");if(O(x))return new Q(T,T);if(G(x))return I=oe(L(x),I),new Q(L(I.g),L(I.h));if(G(I))return I=oe(x,L(I)),new Q(L(I.g),I.h);if(30<x.g.length){if(G(x)||G(I))throw Error("slowDivide_ only works with positive integers.");for(var S=A,P=I;0>=P.l(x);)S=le(S),P=le(P);var k=pe(S,1),U=pe(P,1);for(P=pe(P,2),S=pe(S,2);!O(P);){var D=U.add(P);0>=D.l(x)&&(k=k.add(S),U=D),P=pe(P,1),S=pe(S,1)}return I=Y(x,k.j(I)),new Q(k,I)}for(k=T;0<=x.l(I);){for(S=Math.max(1,Math.floor(x.m()/I.m())),P=Math.ceil(Math.log(S)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),U=g(S),D=U.j(I);G(D)||0<D.l(x);)S-=P,U=g(S),D=U.j(I);O(U)&&(U=A),k=k.add(U),x=Y(x,D)}return new Q(k,x)}n.A=function(x){return oe(this,x).h},n.and=function(x){for(var I=Math.max(this.g.length,x.g.length),S=[],P=0;P<I;P++)S[P]=this.i(P)&x.i(P);return new c(S,this.h&x.h)},n.or=function(x){for(var I=Math.max(this.g.length,x.g.length),S=[],P=0;P<I;P++)S[P]=this.i(P)|x.i(P);return new c(S,this.h|x.h)},n.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),S=[],P=0;P<I;P++)S[P]=this.i(P)^x.i(P);return new c(S,this.h^x.h)};function le(x){for(var I=x.g.length+1,S=[],P=0;P<I;P++)S[P]=x.i(P)<<1|x.i(P-1)>>>31;return new c(S,x.h)}function pe(x,I){var S=I>>5;I%=32;for(var P=x.g.length-S,k=[],U=0;U<P;U++)k[U]=0<I?x.i(U+S)>>>I|x.i(U+S+1)<<32-I:x.i(U+S);return new c(k,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mb=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,ms=c}).apply(typeof z0<"u"?z0:typeof self<"u"?self:typeof window<"u"?window:{});var hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lb,qu,Ub,Rf,Lg,Bb,zb,jb;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof hf=="object"&&hf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function a(h,_){if(_)e:{var v=r;h=h.split(".");for(var b=0;b<h.length-1;b++){var B=h[b];if(!(B in v))break e;v=v[B]}h=h[h.length-1],b=v[h],_=_(b),_!=b&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,b=!1,B={next:function(){if(!b&&v<h.length){var K=v++;return{value:_(K,h[K]),done:!1}}return b=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,b),h.apply(_,B)}}return function(){return h.apply(_,arguments)}}function A(h,_,v){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,A.apply(null,arguments)}function R(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function O(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(b,B,K){for(var ae=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)ae[Le-2]=arguments[Le];return _.prototype[B].apply(b,ae)}}function G(h){const _=h.length;if(0<_){const v=Array(_);for(let b=0;b<_;b++)v[b]=h[b];return v}return[]}function L(h,_){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(m(b)){const B=h.length||0,K=b.length||0;h.length=B+K;for(let ae=0;ae<K;ae++)h[B+ae]=b[ae]}else h.push(b)}}class Y{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function te(h){return/^[\s\xa0]*$/.test(h)}function Q(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var le=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function pe(h,_,v){for(const b in h)_.call(v,h[b],b,h)}function x(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function I(h){const _={};for(const v in h)_[v]=h[v];return _}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,_){let v,b;for(let B=1;B<arguments.length;B++){b=arguments[B];for(v in b)h[v]=b[v];for(let K=0;K<S.length;K++)v=S[K],Object.prototype.hasOwnProperty.call(b,v)&&(h[v]=b[v])}}function k(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function U(h){f.setTimeout(()=>{throw h},0)}function D(){var h=qe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Ht{constructor(){this.h=this.g=null}add(_,v){const b=dt.get();b.set(_,v),this.h?this.h.next=b:this.g=b,this.h=b}}var dt=new Y(()=>new X,h=>h.reset());class X{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ye=!1,qe=new Ht,N=()=>{const h=f.Promise.resolve(void 0);ce=()=>{h.then(ne)}};var ne=()=>{for(var h;h=D();){try{h.h.call(h.g)}catch(v){U(v)}var _=dt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ye=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};f.addEventListener("test",v,_),f.removeEventListener("test",v,_)}catch{}return h}();function Oe(h,_){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(le){e:{try{oe(_.nodeName);var B=!0;break e}catch{}B=!1}B||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Oe.aa.h.call(this)}}O(Oe,se);var Se={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),it=0;function pi(h,_,v,b,B){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!b,this.ha=B,this.key=++it,this.da=this.fa=!1}function Ir(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Bi(h){this.src=h,this.g={},this.h=0}Bi.prototype.add=function(h,_,v,b,B){var K=h.toString();h=this.g[K],h||(h=this.g[K]=[],this.h++);var ae=Rs(h,_,b,B);return-1<ae?(_=h[ae],v||(_.fa=!1)):(_=new pi(_,this.src,K,!!b,B),_.fa=v,h.push(_)),_};function Ss(h,_){var v=_.type;if(v in h.g){var b=h.g[v],B=Array.prototype.indexOf.call(b,_,void 0),K;(K=0<=B)&&Array.prototype.splice.call(b,B,1),K&&(Ir(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Rs(h,_,v,b){for(var B=0;B<h.length;++B){var K=h[B];if(!K.da&&K.listener==_&&K.capture==!!v&&K.ha==b)return B}return-1}var Cs="closure_lm_"+(1e6*Math.random()|0),wl={};function Lc(h,_,v,b,B){if(Array.isArray(_)){for(var K=0;K<_.length;K++)Lc(h,_[K],v,b,B);return null}return v=Uc(v),h&&h[Mt]?h.K(_,v,g(b)?!!b.capture:!1,B):Mn(h,_,v,!1,b,B)}function Mn(h,_,v,b,B,K){if(!_)throw Error("Invalid event type");var ae=g(B)?!!B.capture:!!B,Le=Ha(h);if(Le||(h[Cs]=Le=new Bi(h)),v=Le.add(_,v,b,ae,K),v.proxy)return v;if(b=Jd(),v.proxy=b,b.src=h,b.listener=v,h.addEventListener)Ee||(B=ae),B===void 0&&(B=!1),h.addEventListener(_.toString(),b,B);else if(h.attachEvent)h.attachEvent(Ds(_.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Jd(){function h(v){return _.call(h.src,h.listener,v)}const _=em;return h}function Al(h,_,v,b,B){if(Array.isArray(_))for(var K=0;K<_.length;K++)Al(h,_[K],v,b,B);else b=g(b)?!!b.capture:!!b,v=Uc(v),h&&h[Mt]?(h=h.i,_=String(_).toString(),_ in h.g&&(K=h.g[_],v=Rs(K,v,b,B),-1<v&&(Ir(K[v]),Array.prototype.splice.call(K,v,1),K.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ha(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Rs(_,v,b,B)),(v=-1<h?_[h]:null)&&Fa(v))}function Fa(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Mt])Ss(_.i,h);else{var v=h.type,b=h.proxy;_.removeEventListener?_.removeEventListener(v,b,h.capture):_.detachEvent?_.detachEvent(Ds(v),b):_.addListener&&_.removeListener&&_.removeListener(b),(v=Ha(_))?(Ss(v,h),v.h==0&&(v.src=null,_[Cs]=null)):Ir(h)}}}function Ds(h){return h in wl?wl[h]:wl[h]="on"+h}function em(h,_){if(h.da)h=!0;else{_=new Oe(_,this);var v=h.listener,b=h.ha||h.src;h.fa&&Fa(h),h=v.call(b,_)}return h}function Ha(h){return h=h[Cs],h instanceof Bi?h:null}var bl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uc(h){return typeof h=="function"?h:(h[bl]||(h[bl]=function(_){return h.handleEvent(_)}),h[bl])}function mt(){he.call(this),this.i=new Bi(this),this.M=this,this.F=null}O(mt,he),mt.prototype[Mt]=!0,mt.prototype.removeEventListener=function(h,_,v,b){Al(this,h,_,v,b)};function Ke(h,_){var v,b=h.F;if(b)for(v=[];b;b=b.F)v.push(b);if(h=h.M,b=_.type||_,typeof _=="string")_=new se(_,h);else if(_ instanceof se)_.target=_.target||h;else{var B=_;_=new se(b,h),P(_,B)}if(B=!0,v)for(var K=v.length-1;0<=K;K--){var ae=_.g=v[K];B=En(ae,b,!0,_)&&B}if(ae=_.g=h,B=En(ae,b,!0,_)&&B,B=En(ae,b,!1,_)&&B,v)for(K=0;K<v.length;K++)ae=_.g=v[K],B=En(ae,b,!1,_)&&B}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],b=0;b<v.length;b++)Ir(v[b]);delete h.g[_],h.h--}}this.F=null},mt.prototype.K=function(h,_,v,b){return this.i.add(String(h),_,!1,v,b)},mt.prototype.L=function(h,_,v,b){return this.i.add(String(h),_,!0,v,b)};function En(h,_,v,b){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var B=!0,K=0;K<_.length;++K){var ae=_[K];if(ae&&!ae.da&&ae.capture==v){var Le=ae.listener,xt=ae.ha||ae.src;ae.fa&&Ss(h.i,ae),B=Le.call(xt,b)!==!1&&B}}return B&&!b.defaultPrevented}function Zt(h,_,v){if(typeof h=="function")v&&(h=A(h,v));else if(h&&typeof h.handleEvent=="function")h=A(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function Bc(h){h.g=Zt(()=>{h.g=null,h.i&&(h.i=!1,Bc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class tm extends he{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Bc(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(h){he.call(this),this.h=h,this.g={}}O(xs,he);var Os=[];function Ns(h){pe(h.g,function(_,v){this.g.hasOwnProperty(v)&&Fa(_)},h),h.g={}}xs.prototype.N=function(){xs.aa.N.call(this),Ns(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=f.JSON.stringify,Ga=f.JSON.parse,Ps=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function Il(){}Il.prototype.h=null;function Sl(h){return h.h||(h.h=h.i())}function Rl(){}var zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ji(){se.call(this,"d")}O(ji,se);function Cl(){se.call(this,"c")}O(Cl,se);var gi={},Dl=null;function Sr(){return Dl=Dl||new mt}gi.La="serverreachability";function Ka(h){se.call(this,gi.La,h)}O(Ka,se);function Rr(h){const _=Sr();Ke(_,new Ka(_))}gi.STAT_EVENT="statevent";function zc(h,_){se.call(this,gi.STAT_EVENT,h),this.stat=_}O(zc,se);function st(h){const _=Sr();Ke(_,new zc(_,h))}gi.Ma="timingevent";function Dt(h,_){se.call(this,gi.Ma,h),this.size=_}O(Dt,se);function At(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function xl(h,_,v,b,B,K){h.info(function(){if(h.g)if(K)for(var ae="",Le=K.split("&"),xt=0;xt<Le.length;xt++){var Ue=Le[xt].split("=");if(1<Ue.length){var Ut=Ue[0];Ue=Ue[1];var Ot=Ut.split("_");ae=2<=Ot.length&&Ot[1]=="type"?ae+(Ut+"="+Ue+"&"):ae+(Ut+"=redacted&")}}else ae=null;else ae=K;return"XMLHTTP REQ ("+b+") [attempt "+B+"]: "+_+`
`+v+`
`+ae})}function nm(h,_,v,b,B,K,ae){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+B+"]: "+_+`
`+v+`
`+K+" "+ae})}function Cr(h,_,v,b){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Vs(h,v)+(b?" "+b:"")})}function jc(h,_){h.info(function(){return"TIMEOUT: "+_})}Ln.prototype.info=function(){};function Vs(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var b=v[h];if(!(2>b.length)){var B=b[1];if(Array.isArray(B)&&!(1>B.length)){var K=B[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ae=1;ae<B.length;ae++)B[ae]=""}}}}return ti(v)}catch{return _}}var Dr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_i;function yi(){}O(yi,Il),yi.prototype.g=function(){return new XMLHttpRequest},yi.prototype.i=function(){return{}},_i=new yi;function on(h,_,v,b){this.j=h,this.i=_,this.l=v,this.R=b||1,this.U=new xs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}var Ol={},$a={};function ni(h,_,v){h.L=1,h.v=Bs(Tn(_)),h.m=v,h.P=!0,Fi(h,null)}function Fi(h,_){h.F=Date.now(),ks(h),h.A=Tn(h.v);var v=h.A,b=h.R;Array.isArray(b)||(b=[String(b)]),Ll(v.i,"t",b),h.C=0,v=h.j.J,h.h=new Et,h.g=ih(h.j,v?_:null,!h.m),0<h.O&&(h.M=new tm(A(h.Y,h,h.g),h.O)),_=h.U,v=h.g,b=h.ca;var B="readystatechange";Array.isArray(B)||(B&&(Os[0]=B.toString()),B=Os);for(var K=0;K<B.length;K++){var ae=Lc(v,B[K],b||_.handleEvent,!1,_.h||_);if(!ae)break;_.g[ae.key]=ae}_=h.H?I(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Rr(),xl(h.i,h.u,h.A,h.l,h.R,h.m)}on.prototype.ca=function(h){h=h.target;const _=this.M;_&&jn(h)==3?_.j():this.Y(h)},on.prototype.Y=function(h){try{if(h==this.g)e:{const Ot=jn(this.g);var _=this.g.Ba();const Wi=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||Yc(this.g)))){this.J||Ot!=4||_==7||(_==8||0>=Wi?Rr(3):Rr(2)),xr(this);var v=this.g.Z();this.X=v;t:if(qc(this)){var b=Yc(this.g);h="";var B=b.length,K=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),vi(this);var ae="";break t}this.h.i=new f.TextDecoder}for(_=0;_<B;_++)this.h.h=!0,h+=this.h.i.decode(b[_],{stream:!(K&&_==B-1)});b.length=0,this.h.g+=h,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,nm(this.i,this.u,this.A,this.l,this.R,Ot,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,xt=this.g;if((Le=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Le)){var Ue=Le;break t}}Ue=null}if(v=Ue)Cr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ms(this,v);else{this.o=!1,this.s=3,st(12),Gt(this),vi(this);break e}}if(this.P){v=!0;let Kt;for(;!this.J&&this.C<ae.length;)if(Kt=Fc(this,ae),Kt==$a){Ot==4&&(this.s=4,st(14),v=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Ol){this.s=4,st(15),Cr(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else Cr(this.i,this.l,Kt,null),Ms(this,Kt);if(qc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||ae.length!=0||this.h.h||(this.s=1,st(16),v=!1),this.o=this.o&&v,!v)Cr(this.i,this.l,ae,"[Invalid Chunked Response]"),Gt(this),vi(this);else if(0<ae.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),$s(Ut),Ut.M=!0,st(11))}}else Cr(this.i,this.l,ae,null),Ms(this,ae);Ot==4&&Gt(this),this.o&&!this.J&&(Ot==4?eh(this.j,this):(this.o=!1,ks(this)))}else om(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Gt(this),vi(this)}}}catch{}finally{}};function qc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Fc(h,_){var v=h.C,b=_.indexOf(`
`,v);return b==-1?$a:(v=Number(_.substring(v,b)),isNaN(v)?Ol:(b+=1,b+v>_.length?$a:(_=_.slice(b,b+v),h.C=b+v,_)))}on.prototype.cancel=function(){this.J=!0,Gt(this)};function ks(h){h.S=Date.now()+h.I,Hc(h,h.I)}function Hc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=At(A(h.ba,h),_)}function xr(h){h.B&&(f.clearTimeout(h.B),h.B=null)}on.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(jc(this.i,this.A),this.L!=2&&(Rr(),st(17)),Gt(this),this.s=2,vi(this)):Hc(this,this.S-h)};function vi(h){h.j.G==0||h.J||eh(h.j,h)}function Gt(h){xr(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Ns(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Ms(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Nl(v.h,h))){if(!h.K&&Nl(v.h,h)&&v.G==3){try{var b=v.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var B=b;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)so(v),io(v);else break e;ql(v),st(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=At(A(v.Za,v),6e3));if(1>=Ya(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Xi(v,11)}else if((h.K||v.g==h)&&so(v),!te(_))for(B=v.Da.g.parse(_),_=0;_<B.length;_++){let Ue=B[_];if(v.T=Ue[0],Ue=Ue[1],v.G==2)if(Ue[0]=="c"){v.K=Ue[1],v.ia=Ue[2];const Ut=Ue[3];Ut!=null&&(v.la=Ut,v.j.info("VER="+v.la));const Ot=Ue[4];Ot!=null&&(v.Aa=Ot,v.j.info("SVER="+v.Aa));const Wi=Ue[5];Wi!=null&&typeof Wi=="number"&&0<Wi&&(b=1.5*Wi,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Kt=h.g;if(Kt){const Si=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var K=b.h;K.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Xa(K,K.h),K.h=null))}if(b.D){const Hl=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Hl&&(b.ya=Hl,Ze(b.I,b.D,Hl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var ae=h;if(b.qa=nh(b,b.J?b.ia:null,b.W),ae.K){ln(b.h,ae);var Le=ae,xt=b.L;xt&&(Le.I=xt),Le.B&&(xr(Le),ks(Le)),b.g=ae}else Zc(b);0<v.i.length&&ro(v)}else Ue[0]!="stop"&&Ue[0]!="close"||Xi(v,7);else v.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Xi(v,7):zl(v):Ue[0]!="noop"&&v.l&&v.l.ta(Ue),v.v=0)}}Rr(4)}catch{}}var Gc=class{constructor(h,_){this.g=h,this.map=_}};function Hi(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qa(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ya(h){return h.h?1:h.g?h.g.size:0}function Nl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Xa(h,_){h.g?h.g.add(_):h.h=_}function ln(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Hi.prototype.cancel=function(){if(this.i=Pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Pl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return G(h.i)}function im(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,b=0;b<v;b++)_.push(h[b]);return _}_=[],v=0;for(b in h)_[v++]=h[b];return _}function Wa(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const b in h)_[v++]=b;return _}}}function Vl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=Wa(h),b=im(h),B=b.length,K=0;K<B;K++)_.call(void 0,b[K],v&&v[K],h)}var Ls=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rm(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var b=h[v].indexOf("="),B=null;if(0<=b){var K=h[v].substring(0,b);B=h[v].substring(b+1)}else K=h[v];_(K,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function bt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof bt){this.h=h.h,Us(this,h.j),this.o=h.o,this.g=h.g,Or(this,h.s),this.l=h.l;var _=h.i,v=new Ki;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),Gi(this,v),this.m=h.m}else h&&(_=String(h).match(Ls))?(this.h=!1,Us(this,_[1]||"",!0),this.o=Un(_[2]||""),this.g=Un(_[3]||"",!0),Or(this,_[4]),this.l=Un(_[5]||"",!0),Gi(this,_[6]||"",!0),this.m=Un(_[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}bt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(zs(_,kl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(zs(_,kl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(zs(v,v.charAt(0)=="/"?sm:Ml,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",zs(v,Za)),h.join("")};function Tn(h){return new bt(h)}function Us(h,_,v){h.j=v?Un(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Or(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Gi(h,_,v){_ instanceof Ki?(h.i=_,$c(h.i,h.h)):(v||(_=zs(_,am)),h.i=new Ki(_,h.h))}function Ze(h,_,v){h.i.set(_,v)}function Bs(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Un(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function zs(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Kc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Kc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var kl=/[#\/\?@]/g,Ml=/[#\?:]/g,sm=/[#\?]/g,am=/[#\?@]/g,Za=/#/g;function Ki(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Bn(h){h.g||(h.g=new Map,h.h=0,h.i&&rm(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=Ki.prototype,n.add=function(h,_){Bn(this),this.i=null,h=Ei(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function $i(h,_){Bn(h),_=Ei(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Qi(h,_){return Bn(h),_=Ei(h,_),h.g.has(_)}n.forEach=function(h,_){Bn(this),this.g.forEach(function(v,b){v.forEach(function(B){h.call(_,B,b,this)},this)},this)},n.na=function(){Bn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let b=0;b<_.length;b++){const B=h[b];for(let K=0;K<B.length;K++)v.push(_[b])}return v},n.V=function(h){Bn(this);let _=[];if(typeof h=="string")Qi(this,h)&&(_=_.concat(this.g.get(Ei(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return Bn(this),this.i=null,h=Ei(this,h),Qi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ll(h,_,v){$i(h,_),0<v.length&&(h.i=null,h.g.set(Ei(h,_),G(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var b=_[v];const K=encodeURIComponent(String(b)),ae=this.V(b);for(b=0;b<ae.length;b++){var B=K;ae[b]!==""&&(B+="="+encodeURIComponent(String(ae[b]))),h.push(B)}}return this.i=h.join("&")};function Ei(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function $c(h,_){_&&!h.j&&(Bn(h),h.i=null,h.g.forEach(function(v,b){var B=b.toLowerCase();b!=B&&($i(this,b),Ll(this,B,v))},h)),h.j=_}function js(h,_){const v=new Ln;if(f.Image){const b=new Image;b.onload=R(zn,v,"TestLoadImage: loaded",!0,_,b),b.onerror=R(zn,v,"TestLoadImage: error",!1,_,b),b.onabort=R(zn,v,"TestLoadImage: abort",!1,_,b),b.ontimeout=R(zn,v,"TestLoadImage: timeout",!1,_,b),f.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else _(!1)}function ii(h,_){const v=new Ln,b=new AbortController,B=setTimeout(()=>{b.abort(),zn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:b.signal}).then(K=>{clearTimeout(B),K.ok?zn(v,"TestPingServer: ok",!0,_):zn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(B),zn(v,"TestPingServer: error",!1,_)})}function zn(h,_,v,b,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),b(v)}catch{}}function qs(){this.g=new Ps}function Ti(h,_,v){const b=v||"";try{Vl(h,function(B,K){let ae=B;g(B)&&(ae=ti(B)),_.push(b+K+"="+encodeURIComponent(ae))})}catch(B){throw _.push(b+"type="+encodeURIComponent("_badmap")),B}}function Nr(h){this.l=h.Ub||null,this.j=h.eb||!1}O(Nr,Il),Nr.prototype.g=function(){return new Yi(this.l,this.j)},Nr.prototype.i=function(h){return function(){return h}}({});function Yi(h,_){mt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Yi,mt),n=Yi.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ai(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ul(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ul(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?wi(this):Ai(this),this.readyState==3&&Ul(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,wi(this))},n.Qa=function(h){this.g&&(this.response=h,wi(this))},n.ga=function(){this.g&&wi(this)};function wi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ai(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ai(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Bl(h){let _="";return pe(h,function(v,b){_+=b,_+=":",_+=v,_+=`\r
`}),_}function Lt(h,_,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=Bl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Ze(h,_,v))}function He(h){mt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(He,mt);var Ja=/^https?$/i,Fs=["POST","PUT"];n=He.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_i.g(),this.v=this.o?Sl(this.o):Sl(_i),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(K){Qc(this,K);return}if(h=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var B in b)v.set(B,b[B]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const K of b.keys())v.set(K,b.get(K));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(K=>K.toLowerCase()=="content-type"),B=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Fs,_,void 0))||b||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ae]of v)this.g.setRequestHeader(K,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hs(this),this.u=!0,this.g.send(h),this.u=!1}catch(K){Qc(this,K)}};function Qc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,eo(h),bi(h)}function eo(h){h.A||(h.A=!0,Ke(h,"complete"),Ke(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ke(this,"complete"),Ke(this,"abort"),bi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bi(this,!0)),He.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?to(this):this.bb())},n.bb=function(){to(this)};function to(h){if(h.h&&typeof c<"u"&&(!h.v[1]||jn(h)!=4||h.Z()!=2)){if(h.u&&jn(h)==4)Zt(h.Ea,0,h);else if(Ke(h,"readystatechange"),jn(h)==4){h.h=!1;try{const ae=h.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var b;if(b=ae===0){var B=String(h.D).match(Ls)[1]||null;!B&&f.self&&f.self.location&&(B=f.self.location.protocol.slice(0,-1)),b=!Ja.test(B?B.toLowerCase():"")}v=b}if(v)Ke(h,"complete"),Ke(h,"success");else{h.m=6;try{var K=2<jn(h)?h.g.statusText:""}catch{K=""}h.l=K+" ["+h.Z()+"]",eo(h)}}finally{bi(h)}}}}function bi(h,_){if(h.g){Hs(h);const v=h.g,b=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Ke(h,"ready");try{v.onreadystatechange=b}catch{}}}function Hs(h){h.I&&(f.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function jn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Ga(_)}};function Yc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function om(h){const _={};h=(h.g&&2<=jn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(te(h[b]))continue;var v=k(h[b]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const K=_[B]||[];_[B]=K,K.push(v)}x(_,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function no(h){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gs("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gs("baseRetryDelayMs",5e3,h),this.cb=Gs("retryDelaySeedMs",1e4,h),this.Wa=Gs("forwardChannelMaxRetries",2,h),this.wa=Gs("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Hi(h&&h.concurrentRequestLimit),this.Da=new qs,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=no.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,b){st(0),this.W=h,this.H=_||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=nh(this,null,this.W),ro(this)};function zl(h){if(Xc(h),h.G==3){var _=h.U++,v=Tn(h.I);if(Ze(v,"SID",h.K),Ze(v,"RID",_),Ze(v,"TYPE","terminate"),Ks(h,v),_=new on(h,h.j,_),_.L=2,_.v=Bs(Tn(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=_.v,v=!0),v||(_.g=ih(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ks(_)}th(h)}function io(h){h.g&&($s(h),h.g.cancel(),h.g=null)}function Xc(h){io(h),h.u&&(f.clearTimeout(h.u),h.u=null),so(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function ro(h){if(!Qa(h.h)&&!h.s){h.s=!0;var _=h.Ga;ce||N(),ye||(ce(),ye=!0),qe.add(_,h),h.B=0}}function lm(h,_){return Ya(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=At(A(h.Ga,h,_),Fl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const B=new on(this,this.j,h);let K=this.o;if(this.S&&(K?(K=I(K),P(K,this.S)):K=this.S),this.m!==null||this.O||(B.H=K,K=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Wc(this,B,_),v=Tn(this.I),Ze(v,"RID",h),Ze(v,"CVER",22),this.D&&Ze(v,"X-HTTP-Session-Id",this.D),Ks(this,v),K&&(this.O?_="headers="+encodeURIComponent(String(Bl(K)))+"&"+_:this.m&&Lt(v,this.m,K)),Xa(this.h,B),this.Ua&&Ze(v,"TYPE","init"),this.P?(Ze(v,"$req",_),Ze(v,"SID","null"),B.T=!0,ni(B,v,null)):ni(B,v,_),this.G=2}}else this.G==3&&(h?jl(this,h):this.i.length==0||Qa(this.h)||jl(this))};function jl(h,_){var v;_?v=_.l:v=h.U++;const b=Tn(h.I);Ze(b,"SID",h.K),Ze(b,"RID",v),Ze(b,"AID",h.T),Ks(h,b),h.m&&h.o&&Lt(b,h.m,h.o),v=new on(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Wc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Xa(h.h,v),ni(v,b,_)}function Ks(h,_){h.H&&pe(h.H,function(v,b){Ze(_,b,v)}),h.l&&Vl({},function(v,b){Ze(_,b,v)})}function Wc(h,_,v){v=Math.min(h.i.length,v);var b=h.l?A(h.l.Na,h.l,h):null;e:{var B=h.i;let K=-1;for(;;){const ae=["count="+v];K==-1?0<v?(K=B[0].g,ae.push("ofs="+K)):K=0:ae.push("ofs="+K);let Le=!0;for(let xt=0;xt<v;xt++){let Ue=B[xt].g;const Ut=B[xt].map;if(Ue-=K,0>Ue)K=Math.max(0,B[xt].g-100),Le=!1;else try{Ti(Ut,ae,"req"+Ue+"_")}catch{b&&b(Ut)}}if(Le){b=ae.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,b}function Zc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ce||N(),ye||(ce(),ye=!0),qe.add(_,h),h.v=0}}function ql(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=At(A(h.Fa,h),Fl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Jc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=At(A(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),io(this),Jc(this))};function $s(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function Jc(h){h.g=new on(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Tn(h.qa);Ze(_,"RID","rpc"),Ze(_,"SID",h.K),Ze(_,"AID",h.T),Ze(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(_,"TO",h.ja),Ze(_,"TYPE","xmlhttp"),Ks(h,_),h.m&&h.o&&Lt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Bs(Tn(_)),v.m=null,v.P=!0,Fi(v,h)}n.Za=function(){this.C!=null&&(this.C=null,io(this),ql(this),st(19))};function so(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function eh(h,_){var v=null;if(h.g==_){so(h),$s(h),h.g=null;var b=2}else if(Nl(h.h,_))v=_.D,ln(h.h,_),b=1;else return;if(h.G!=0){if(_.o)if(b==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var B=h.B;b=Sr(),Ke(b,new Dt(b,v)),ro(h)}else Zc(h);else if(B=_.s,B==3||B==0&&0<_.X||!(b==1&&lm(h,_)||b==2&&ql(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),B){case 1:Xi(h,5);break;case 4:Xi(h,10);break;case 3:Xi(h,6);break;default:Xi(h,2)}}}function Fl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function Xi(h,_){if(h.j.info("Error code "+_),_==2){var v=A(h.fb,h),b=h.Xa;const B=!b;b=new bt(b||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Us(b,"https"),Bs(b),B?js(b.toString(),v):ii(b.toString(),v)}else st(2);h.G=0,h.l&&h.l.sa(_),th(h),Xc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function th(h){if(h.G=0,h.ka=[],h.l){const _=Pl(h.h);(_.length!=0||h.i.length!=0)&&(L(h.ka,_),L(h.ka,h.i),h.h.i.length=0,G(h.i),h.i.length=0),h.l.ra()}}function nh(h,_,v){var b=v instanceof bt?Tn(v):new bt(v);if(b.g!="")_&&(b.g=_+"."+b.g),Or(b,b.s);else{var B=f.location;b=B.protocol,_=_?_+"."+B.hostname:B.hostname,B=+B.port;var K=new bt(null);b&&Us(K,b),_&&(K.g=_),B&&Or(K,B),v&&(K.l=v),b=K}return v=h.D,_=h.ya,v&&_&&Ze(b,v,_),Ze(b,"VER",h.la),Ks(h,b),b}function ih(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new He(new Nr({eb:v})):new He(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rh(){}n=rh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ao(){}ao.prototype.g=function(h,_){return new un(h,_)};function un(h,_){mt.call(this),this.g=new no(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!te(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!te(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ii(this)}O(un,mt),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){zl(this.g)},un.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=ti(h),h=v);_.i.push(new Gc(_.Ya++,h)),_.G==3&&ro(_)},un.prototype.N=function(){this.g.l=null,delete this.j,zl(this.g),delete this.g,un.aa.N.call(this)};function sh(h){ji.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}O(sh,ji);function ah(){Cl.call(this),this.status=1}O(ah,Cl);function Ii(h){this.g=h}O(Ii,rh),Ii.prototype.ua=function(){Ke(this.g,"a")},Ii.prototype.ta=function(h){Ke(this.g,new sh(h))},Ii.prototype.sa=function(h){Ke(this.g,new ah)},Ii.prototype.ra=function(){Ke(this.g,"b")},ao.prototype.createWebChannel=ao.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,jb=function(){return new ao},zb=function(){return Sr()},Bb=gi,Lg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Dr.NO_ERROR=0,Dr.TIMEOUT=8,Dr.HTTP_ERROR=6,Rf=Dr,qi.COMPLETE="complete",Ub=qi,Rl.EventType=zi,zi.OPEN="a",zi.CLOSE="b",zi.ERROR="c",zi.MESSAGE="d",mt.prototype.listen=mt.prototype.K,qu=Rl,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,Lb=He}).apply(typeof hf<"u"?hf:typeof self<"u"?self:typeof window<"u"?window:{});const j0="@firebase/firestore",q0="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new _d("@firebase/firestore");function qo(){return Ia.logLevel}function ie(n,...e){if(Ia.logLevel<=ke.DEBUG){const t=e.map(V_);Ia.debug(`Firestore (${yl}): ${n}`,...t)}}function fn(n,...e){if(Ia.logLevel<=ke.ERROR){const t=e.map(V_);Ia.error(`Firestore (${yl}): ${n}`,...t)}}function Sa(n,...e){if(Ia.logLevel<=ke.WARN){const t=e.map(V_);Ia.warn(`Firestore (${yl}): ${n}`,...t)}}function V_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n="Unexpected state"){const e=`FIRESTORE (${yl}) INTERNAL ASSERTION FAILED: `+n;throw fn(e),new Error(e)}function ge(n,e){n||me()}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends ei{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xt.UNAUTHENTICATED))}shutdown(){}}class a2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class o2{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ge(this.o===void 0);let r=this.i;const a=m=>this.i!==r?(r=this.i,t(m)):Promise.resolve();let l=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new pr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},f=m=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new pr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new qb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new Xt(e)}}class l2{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class u2{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new l2(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c2{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,xn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ge(this.o===void 0);const r=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>r(l))};const a=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new F0(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ge(typeof t.token=="string"),this.R=t.token,new F0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=h2(40);for(let l=0;l<a.length;++l)r.length<20&&a[l]<t&&(r+=e.charAt(a[l]%62))}return r}}function Ie(n,e){return n<e?-1:n>e?1:0}function Ug(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Ie(r,a);{const l=Fb(),c=f2(l.encode(H0(n,t)),l.encode(H0(e,t)));return c!==0?c:Ie(r,a)}}t+=r>65535?2:1}return Ie(n.length,e.length)}function H0(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function f2(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ie(n[t],e[t]);return Ie(n.length,e.length)}function Jo(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function Gb(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=-62135596800,K0=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*K0);return new ft(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<G0)throw new ue(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/K0}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-G0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new ft(0,0))}static max(){return new ve(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="__name__";class Pi{constructor(e,t,r){t===void 0?t=0:t>e.length&&me(),r===void 0?r=e.length-t:r>e.length-t&&me(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const l=Pi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ie(e.length,t.length)}static compareSegments(e,t){const r=Pi.isNumericId(e),a=Pi.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Pi.extractNumericId(e).compare(Pi.extractNumericId(t)):Ug(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class Ge extends Pi{construct(e,t,r){return new Ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const d2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Pi{construct(e,t,r){return new ht(e,t,r)}static isValidIdentifier(e){return d2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$0}static keyField(){return new ht([$0])}static fromServerFormat(e){const t=[];let r="",a=0;const l=()=>{if(r.length===0)throw new ue(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new ue(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ue(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=m,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(r+=f,a++):(l(),a++)}if(l(),c)throw new ue(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(t)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Ge.fromString(e))}static fromName(e){return new fe(Ge.fromString(e).popFirst(5))}static empty(){return new fe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Ge(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=-1;class $f{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function Bg(n){return n.fields.find(e=>e.kind===2)}function ha(n){return n.fields.filter(e=>e.kind!==2)}$f.UNKNOWN_ID=-1;class Cf{constructor(e,t){this.fieldPath=e,this.kind=t}}class oc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new oc(0,kn.min())}}function m2(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=ve.fromTimestamp(r===1e9?new ft(t+1,0):new ft(t,r));return new kn(a,fe.empty(),e)}function Kb(n){return new kn(n.readTime,n.key,ac)}class kn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new kn(ve.min(),fe.empty(),ac)}static max(){return new kn(ve.max(),fe.empty(),ac)}}function k_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:Ie(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(n){if(n.code!==Z.FAILED_PRECONDITION||n.message!==$b)throw n;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((r,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(r,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,r)=>{t(e)})}static reject(e){return new z((t,r)=>{r(e)})}static waitFor(e){return new z((t,r)=>{let a=0,l=0,c=!1;e.forEach(f=>{++a,f.next(()=>{++l,c&&l===a&&t()},m=>r(m))}),c=!0,l===a&&t()})}static or(e){let t=z.resolve(!1);for(const r of e)t=t.next(a=>a?z.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,l)=>{r.push(t.call(this,a,l))}),this.waitFor(r)}static mapArray(e,t){return new z((r,a)=>{const l=e.length,c=new Array(l);let f=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next(y=>{c[g]=y,++f,f===l&&r(c)},y=>a(y))}})}static doWhile(e,t){return new z((r,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):r()};l()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="SimpleDb";class Ad{static open(e,t,r,a){try{return new Ad(t,e.transaction(a,r))}catch(l){throw new Qu(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new pr,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Qu(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const a=M_(r.target.error);this.m.reject(new Qu(e,a))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(ie(Dn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new g2(t)}}class ps{static delete(e){return ie(Dn,"Removing database:",e),da(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!T_())return!1;if(ps.v())return!0;const e=Vt(),t=ps.C(e),r=0<t&&t<10,a=Yb(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||l)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,ps.C(Vt())===12.2&&fn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(ie(Dn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{r(new Qu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?r(new ue(Z.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?r(new ue(Z.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):r(new Qu(e,c))},a.onupgradeneeded=l=>{ie(Dn,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;this.O.B(c,a.transaction,l.oldVersion,this.version).next(()=>{ie(Dn,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.N(e);const f=Ad.open(this.db,e,l?"readonly":"readwrite",r),m=a(f).next(g=>(f.S(),g)).catch(g=>(f.abort(g),z.reject(g))).toPromise();return m.catch(()=>{}),await f.p,m}catch(f){const m=f,g=m.name!=="FirebaseError"&&c<3;if(ie(Dn,"Transaction failed with error:",m.message,"Retrying:",g),this.close(),!g)return Promise.reject(m)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Yb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class p2{constructor(e){this.q=e,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.U=e}delete(){return da(this.q.delete())}}class Qu extends ue{constructor(e,t){super(Z.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function bs(n){return n.name==="IndexedDbTransactionError"}class g2{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(ie(Dn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(ie(Dn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),da(r)}add(e){return ie(Dn,"ADD",this.store.name,e,e),da(this.store.add(e))}get(e){return da(this.store.get(e)).next(t=>(t===void 0&&(t=null),ie(Dn,"GET",this.store.name,e,t),t))}delete(e){return ie(Dn,"DELETE",this.store.name,e),da(this.store.delete(e))}count(){return ie(Dn,"COUNT",this.store.name),da(this.store.count())}G(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(r.range);return new z((c,f)=>{l.onerror=m=>{f(m.target.error)},l.onsuccess=m=>{c(m.target.result)}})}{const l=this.cursor(r),c=[];return this.j(l,(f,m)=>{c.push(m)}).next(()=>c)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new z((a,l)=>{r.onerror=c=>{l(c.target.error)},r.onsuccess=c=>{a(c.target.result)}})}J(e,t){ie(Dn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const a=this.cursor(r);return this.j(a,(l,c,f)=>f.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.j(a,t)}X(e){const t=this.cursor({});return new z((r,a)=>{t.onerror=l=>{const c=M_(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next(f=>{f?c.continue():r()}):r()}})}j(e,t){const r=[];return new z((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const f=c.target.result;if(!f)return void a();const m=new p2(f),g=t(f.primaryKey,f.value,m);if(g instanceof z){const y=g.catch(T=>(m.done(),z.reject(T)));r.push(y)}m.isDone?a():m.K===null?f.continue():f.continue(m.K)}}).next(()=>z.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function da(n){return new z((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=M_(r.target.error);t(a)}})}let Q0=!1;function M_(n){const e=ps.C(Vt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new ue("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Q0||(Q0=!0,setTimeout(()=>{throw r},0)),r}}return n}const Yu="IndexBackfiller";class _2{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){ie(Yu,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();ie(Yu,`Documents written: ${t}`)}catch(t){bs(t)?ie(Yu,"Ignoring IndexedDB error during index backfill: ",t):await ja(t)}await this.te(6e4)})}}class y2{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let a=t,l=!0;return z.doWhile(()=>l===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(c=>{if(c!==null&&!r.has(c))return ie(Yu,`Processing collection: ${c}`),this.ie(e,c,a).next(f=>{a-=f,r.add(c)});l=!1})).next(()=>t-a)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next(()=>this.se(a,l)).next(f=>(ie(Yu,`Updating offset: ${f}`),this.localStore.indexManager.updateCollectionGroup(e,t,f))).next(()=>c.size)}))}se(e,t){let r=e;return t.changes.forEach((a,l)=>{const c=Kb(l);k_(c,r)>0&&(r=c)}),new kn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Yn.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=-1;function bd(n){return n==null}function lc(n){return n===0&&1/n==-1/0}function v2(n){return typeof n=="number"&&Number.isInteger(n)&&!lc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="";function sn(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Y0(e)),e=E2(n.get(t),e);return Y0(e)}function E2(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Qf:t+="";break;default:t+=l}}return t}function Y0(n){return n+Qf+""}function Vi(n){const e=n.length;if(ge(e>=2),e===2)return ge(n.charAt(0)===Qf&&n.charAt(1)===""),Ge.emptyPath();const t=e-2,r=[];let a="";for(let l=0;l<e;){const c=n.indexOf(Qf,l);switch((c<0||c>t)&&me(),n.charAt(c+1)){case"":const f=n.substring(l,c);let m;a.length===0?m=f:(a+=f,m=a,a=""),r.push(m);break;case"":a+=n.substring(l,c),a+="\0";break;case"":a+=n.substring(l,c+1);break;default:me()}l=c+2}return new Ge(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="remoteDocuments",bc="owner",Mo="owner",uc="mutationQueues",T2="userId",oi="mutations",X0="batchId",ya="userMutationsIndex",W0=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n,e){return[n,sn(e)]}function Xb(n,e,t){return[n,sn(e),t]}const w2={},el="documentMutations",Yf="remoteDocumentsV14",A2=["prefixPath","collectionGroup","readTime","documentId"],xf="documentKeyIndex",b2=["prefixPath","collectionGroup","documentId"],Wb="collectionGroupIndex",I2=["collectionGroup","readTime","prefixPath","documentId"],cc="remoteDocumentGlobal",zg="remoteDocumentGlobalKey",tl="targets",Zb="queryTargetsIndex",S2=["canonicalId","targetId"],nl="targetDocuments",R2=["targetId","path"],L_="documentTargetsIndex",C2=["path","targetId"],Xf="targetGlobalKey",Ta="targetGlobal",hc="collectionParents",D2=["collectionId","parent"],il="clientMetadata",x2="clientId",Id="bundles",O2="bundleId",Sd="namedQueries",N2="name",U_="indexConfiguration",P2="indexId",jg="collectionGroupIndex",V2="collectionGroup",Wf="indexState",k2=["indexId","uid"],Jb="sequenceNumberIndex",M2=["uid","sequenceNumber"],Zf="indexEntries",L2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eI="documentKeyIndex",U2=["indexId","uid","orderedDocumentKey"],Rd="documentOverlays",B2=["userId","collectionPath","documentId"],qg="collectionPathOverlayIndex",z2=["userId","collectionPath","largestBatchId"],tI="collectionGroupOverlayIndex",j2=["userId","collectionGroup","largestBatchId"],B_="globals",q2="name",nI=[uc,oi,el,fa,tl,bc,Ta,nl,il,cc,hc,Id,Sd],F2=[...nI,Rd],iI=[uc,oi,el,Yf,tl,bc,Ta,nl,il,cc,hc,Id,Sd,Rd],rI=iI,z_=[...rI,U_,Wf,Zf],H2=z_,G2=[...z_,B_];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg extends Qb{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function kt(n,e){const t=Re(n);return ps.M(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Is(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.comparator=e,this.root=t||Wt.EMPTY}insert(e,t){return new ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ff(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ff(this.root,e,this.comparator,!1)}getReverseIterator(){return new ff(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ff(this.root,e,this.comparator,!0)}}class ff{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?r(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wt{constructor(e,t,r,a,l){this.key=e,this.value=t,this.color=r??Wt.RED,this.left=a??Wt.EMPTY,this.right=l??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,l){return new Wt(e??this.key,t??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const l=r(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,r),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Wt.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,r,a,l){return this}insert(e,t,r){return new Wt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new J0(this.data.getIterator())}getIteratorFrom(e){return new J0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Xe(this.comparator);return t.data=e,t}}class J0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Lo(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new _n([])}unionWith(e){let t=new Xe(ht.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new _n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jo(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new aI("Invalid base64 string: "+l):l}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const K2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(n){if(ge(!!n),typeof n=="string"){let e=0;const t=K2.exec(n);if(ge(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Er(n){return typeof n=="string"?Ct.fromBase64String(n):Ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="server_timestamp",lI="__type__",uI="__previous_value__",cI="__local_write_time__";function j_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[lI])===null||t===void 0?void 0:t.stringValue)===oI}function Cd(n){const e=n.mapValue.fields[uI];return j_(e)?Cd(e):e}function fc(n){const e=vr(n.mapValue.fields[cI].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,t,r,a,l,c,f,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=g}}const Jf="(default)";class Ra{constructor(e,t){this.projectId=e,this.database=t||Jf}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database===Jf}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="__type__",hI="__max__",cs={mapValue:{fields:{__type__:{stringValue:hI}}}},F_="__vector__",rl="value",Of={nullValue:"NULL_VALUE"};function ys(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?j_(n)?4:fI(n)?9007199254740991:Dd(n)?10:11:me()}function Ui(n,e){if(n===e)return!0;const t=ys(n);if(t!==ys(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fc(n).isEqual(fc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=vr(a.timestampValue),f=vr(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Er(a.bytesValue).isEqual(Er(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return ot(a.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(a.geoPointValue.longitude)===ot(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return ot(a.integerValue)===ot(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=ot(a.doubleValue),f=ot(l.doubleValue);return c===f?lc(c)===lc(f):isNaN(c)&&isNaN(f)}return!1}(n,e);case 9:return Jo(n.arrayValue.values||[],e.arrayValue.values||[],Ui);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(Z0(c)!==Z0(f))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(f[m]===void 0||!Ui(c[m],f[m])))return!1;return!0}(n,e);default:return me()}}function dc(n,e){return(n.values||[]).find(t=>Ui(t,e))!==void 0}function vs(n,e){if(n===e)return 0;const t=ys(n),r=ys(e);if(t!==r)return Ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ie(n.booleanValue,e.booleanValue);case 2:return function(l,c){const f=ot(l.integerValue||l.doubleValue),m=ot(c.integerValue||c.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(n,e);case 3:return ew(n.timestampValue,e.timestampValue);case 4:return ew(fc(n),fc(e));case 5:return Ug(n.stringValue,e.stringValue);case 6:return function(l,c){const f=Er(l),m=Er(c);return f.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const f=l.split("/"),m=c.split("/");for(let g=0;g<f.length&&g<m.length;g++){const y=Ie(f[g],m[g]);if(y!==0)return y}return Ie(f.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const f=Ie(ot(l.latitude),ot(c.latitude));return f!==0?f:Ie(ot(l.longitude),ot(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return tw(n.arrayValue,e.arrayValue);case 10:return function(l,c){var f,m,g,y;const T=l.fields||{},A=c.fields||{},R=(f=T[rl])===null||f===void 0?void 0:f.arrayValue,O=(m=A[rl])===null||m===void 0?void 0:m.arrayValue,G=Ie(((g=R==null?void 0:R.values)===null||g===void 0?void 0:g.length)||0,((y=O==null?void 0:O.values)===null||y===void 0?void 0:y.length)||0);return G!==0?G:tw(R,O)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===cs.mapValue&&c===cs.mapValue)return 0;if(l===cs.mapValue)return 1;if(c===cs.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),g=c.fields||{},y=Object.keys(g);m.sort(),y.sort();for(let T=0;T<m.length&&T<y.length;++T){const A=Ug(m[T],y[T]);if(A!==0)return A;const R=vs(f[m[T]],g[y[T]]);if(R!==0)return R}return Ie(m.length,y.length)}(n.mapValue,e.mapValue);default:throw me()}}function ew(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ie(n,e);const t=vr(n),r=vr(e),a=Ie(t.seconds,r.seconds);return a!==0?a:Ie(t.nanos,r.nanos)}function tw(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const l=vs(t[a],r[a]);if(l)return l}return Ie(t.length,r.length)}function sl(n){return Hg(n)}function Hg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=vr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Er(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return fe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const l of t.values||[])a?a=!1:r+=",",r+=Hg(l);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of r)l?l=!1:a+=",",a+=`${c}:${Hg(t.fields[c])}`;return a+"}"}(n.mapValue):me()}function Nf(n){switch(ys(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Cd(n);return e?16+Nf(e):16;case 5:return 2*n.stringValue.length;case 6:return Er(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,l)=>a+Nf(l),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return Is(r.fields,(l,c)=>{a+=l.length+Nf(c)}),a}(n.mapValue);default:throw me()}}function mc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gg(n){return!!n&&"integerValue"in n}function pc(n){return!!n&&"arrayValue"in n}function nw(n){return!!n&&"nullValue"in n}function iw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pf(n){return!!n&&"mapValue"in n}function Dd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[q_])===null||t===void 0?void 0:t.stringValue)===F_}function Xu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Is(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Xu(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function fI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===hI}const dI={mapValue:{fields:{[q_]:{stringValue:F_},[rl]:{arrayValue:{}}}}};function Q2(n){return"nullValue"in n?Of:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?mc(Ra.empty(),fe.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Dd(n)?dI:{mapValue:{}}:me()}function Y2(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?mc(Ra.empty(),fe.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?dI:"mapValue"in n?Dd(n)?{mapValue:{}}:cs:me()}function rw(n,e){const t=vs(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function sw(n,e){const t=vs(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xu(t)}setAll(e){let t=ht.emptyPath(),r={},a=[];e.forEach((c,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,r,a),r={},a=[],t=f.popLast()}c?r[f.lastSegment()]=Xu(c):a.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,r,a)}delete(e){const t=this.field(e.popLast());Pf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ui(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Pf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){Is(t,(a,l)=>e[a]=l);for(const a of r)delete e[a]}clone(){return new rn(Xu(this.value))}}function mI(n){const e=[];return Is(n.fields,(t,r)=>{const a=new ht([t]);if(Pf(r)){const l=mI(r.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new _n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,r,a,l,c,f){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new _t(e,0,ve.min(),ve.min(),ve.min(),rn.empty(),0)}static newFoundDocument(e,t,r,a){return new _t(e,1,t,ve.min(),r,a,0)}static newNoDocument(e,t){return new _t(e,2,t,ve.min(),ve.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new _t(e,3,t,ve.min(),ve.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.position=e,this.inclusive=t}}function aw(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?r=fe.comparator(fe.fromName(c.referenceValue),t.key):r=vs(c,t.data.field(l.field)),l.dir==="desc"&&(r*=-1),r!==0)break}return r}function ow(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ui(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t="asc"){this.field=e,this.dir=t}}function X2(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{}class Me extends pI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new W2(e,t,r):t==="array-contains"?new eV(e,r):t==="in"?new TI(e,r):t==="not-in"?new tV(e,r):t==="array-contains-any"?new nV(e,r):new Me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Z2(e,r):new J2(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(vs(t,this.value)):t!==null&&ys(this.value)===ys(t)&&this.matchesComparison(vs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ye extends pI{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Ye(e,t)}matches(e){return ol(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ol(n){return n.op==="and"}function Kg(n){return n.op==="or"}function H_(n){return gI(n)&&ol(n)}function gI(n){for(const e of n.filters)if(e instanceof Ye)return!1;return!0}function $g(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+sl(n.value);if(H_(n))return n.filters.map(e=>$g(e)).join(",");{const e=n.filters.map(t=>$g(t)).join(",");return`${n.op}(${e})`}}function _I(n,e){return n instanceof Me?function(r,a){return a instanceof Me&&r.op===a.op&&r.field.isEqual(a.field)&&Ui(r.value,a.value)}(n,e):n instanceof Ye?function(r,a){return a instanceof Ye&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((l,c,f)=>l&&_I(c,a.filters[f]),!0):!1}(n,e):void me()}function yI(n,e){const t=n.filters.concat(e);return Ye.create(t,n.op)}function vI(n){return n instanceof Me?function(t){return`${t.field.canonicalString()} ${t.op} ${sl(t.value)}`}(n):n instanceof Ye?function(t){return t.op.toString()+" {"+t.getFilters().map(vI).join(" ,")+"}"}(n):"Filter"}class W2 extends Me{constructor(e,t,r){super(e,t,r),this.key=fe.fromName(r.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class Z2 extends Me{constructor(e,t){super(e,"in",t),this.keys=EI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class J2 extends Me{constructor(e,t){super(e,"not-in",t),this.keys=EI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function EI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>fe.fromName(r.referenceValue))}class eV extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pc(t)&&dc(t.arrayValue,this.value)}}class TI extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dc(this.value.arrayValue,t)}}class tV extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(dc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!dc(this.value.arrayValue,t)}}class nV extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>dc(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,t=null,r=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.le=null}}function Qg(n,e=null,t=[],r=[],a=null,l=null,c=null){return new iV(n,e,t,r,a,l,c)}function Ca(n){const e=Re(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>$g(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(l){return l.field.canonicalString()+l.dir}(r)).join(","),bd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>sl(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>sl(r)).join(",")),e.le=t}return e.le}function Ic(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!X2(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_I(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ow(n.startAt,e.startAt)&&ow(n.endAt,e.endAt)}function td(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function nd(n,e){return n.filters.filter(t=>t instanceof Me&&t.field.isEqual(e))}function lw(n,e,t){let r=Of,a=!0;for(const l of nd(n,e)){let c=Of,f=!0;switch(l.op){case"<":case"<=":c=Q2(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,f=!1;break;case"!=":case"not-in":c=Of}rw({value:r,inclusive:a},{value:c,inclusive:f})<0&&(r=c,a=f)}if(t!==null){for(let l=0;l<n.orderBy.length;++l)if(n.orderBy[l].field.isEqual(e)){const c=t.position[l];rw({value:r,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(r=c,a=t.inclusive);break}}return{value:r,inclusive:a}}function uw(n,e,t){let r=cs,a=!0;for(const l of nd(n,e)){let c=cs,f=!0;switch(l.op){case">=":case">":c=Y2(l.value),f=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,f=!1;break;case"!=":case"not-in":c=cs}sw({value:r,inclusive:a},{value:c,inclusive:f})>0&&(r=c,a=f)}if(t!==null){for(let l=0;l<n.orderBy.length;++l)if(n.orderBy[l].field.isEqual(e)){const c=t.position[l];sw({value:r,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(r=c,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t=null,r=[],a=[],l=null,c="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function rV(n,e,t,r,a,l,c,f){return new Sc(n,e,t,r,a,l,c,f)}function Rc(n){return new Sc(n)}function cw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wI(n){return n.collectionGroup!==null}function Wu(n){const e=Re(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Xe(ht.comparator);return c.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(f=f.add(g.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new ed(l,r))}),t.has(ht.keyField().canonicalString())||e.he.push(new ed(ht.keyField(),r))}return e.he}function Xn(n){const e=Re(n);return e.Pe||(e.Pe=sV(e,Wu(n))),e.Pe}function sV(n,e){if(n.limitType==="F")return Qg(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new ed(a.field,l)});const t=n.endAt?new al(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new al(n.startAt.position,n.startAt.inclusive):null;return Qg(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Yg(n,e){const t=n.filters.concat([e]);return new Sc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xg(n,e,t){return new Sc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xd(n,e){return Ic(Xn(n),Xn(e))&&n.limitType===e.limitType}function AI(n){return`${Ca(Xn(n))}|lt:${n.limitType}`}function Fo(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>vI(a)).join(", ")}]`),bd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>sl(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>sl(a)).join(",")),`Target(${r})`}(Xn(n))}; limitType=${n.limitType})`}function Cc(n,e){return e.isFoundDocument()&&function(r,a){const l=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(l):fe.isDocumentKey(r.path)?r.path.isEqual(l):r.path.isImmediateParentOf(l)}(n,e)&&function(r,a){for(const l of Wu(r))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const l of r.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(c,f,m){const g=aw(c,f,m);return c.inclusive?g<=0:g<0}(r.startAt,Wu(r),a)||r.endAt&&!function(c,f,m){const g=aw(c,f,m);return c.inclusive?g>=0:g>0}(r.endAt,Wu(r),a))}(n,e)}function aV(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bI(n){return(e,t)=>{let r=!1;for(const a of Wu(n)){const l=oV(a,e,t);if(l!==0)return l;r=r||a.field.isKeyField()}return 0}}function oV(n,e,t){const r=n.field.isKeyField()?fe.comparator(e.key,t.key):function(l,c,f){const m=c.data.field(l),g=f.data.field(l);return m!==null&&g!==null?vs(m,g):me()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,l]of r)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(t,r)=>{for(const[a,l]of r)e(a,l)})}isEmpty(){return sI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=new ut(fe.comparator);function On(){return lV}const II=new ut(fe.comparator);function Fu(...n){let e=II;for(const t of n)e=e.insert(t.key,t);return e}function SI(n){let e=II;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ki(){return Zu()}function RI(){return Zu()}function Zu(){return new wr(n=>n.toString(),(n,e)=>n.isEqual(e))}const uV=new ut(fe.comparator),cV=new Xe(fe.comparator);function xe(...n){let e=cV;for(const t of n)e=e.add(t);return e}const hV=new Xe(Ie);function fV(){return hV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lc(e)?"-0":e}}function CI(n){return{integerValue:""+n}}function dV(n,e){return v2(e)?CI(e):G_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this._=void 0}}function mV(n,e,t){return n instanceof ll?function(a,l){const c={fields:{[lI]:{stringValue:oI},[cI]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&j_(l)&&(l=Cd(l)),l&&(c.fields[uI]=l),{mapValue:c}}(t,e):n instanceof ul?xI(n,e):n instanceof cl?OI(n,e):function(a,l){const c=DI(a,l),f=hw(c)+hw(a.Ie);return Gg(c)&&Gg(a.Ie)?CI(f):G_(a.serializer,f)}(n,e)}function pV(n,e,t){return n instanceof ul?xI(n,e):n instanceof cl?OI(n,e):t}function DI(n,e){return n instanceof gc?function(r){return Gg(r)||function(l){return!!l&&"doubleValue"in l}(r)}(e)?e:{integerValue:0}:null}class ll extends Od{}class ul extends Od{constructor(e){super(),this.elements=e}}function xI(n,e){const t=NI(e);for(const r of n.elements)t.some(a=>Ui(a,r))||t.push(r);return{arrayValue:{values:t}}}class cl extends Od{constructor(e){super(),this.elements=e}}function OI(n,e){let t=NI(e);for(const r of n.elements)t=t.filter(a=>!Ui(a,r));return{arrayValue:{values:t}}}class gc extends Od{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function hw(n){return ot(n.integerValue||n.doubleValue)}function NI(n){return pc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,t){this.field=e,this.transform=t}}function gV(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof ul&&a instanceof ul||r instanceof cl&&a instanceof cl?Jo(r.elements,a.elements,Ui):r instanceof gc&&a instanceof gc?Ui(r.Ie,a.Ie):r instanceof ll&&a instanceof ll}(n.transform,e.transform)}class _V{constructor(e,t){this.version=e,this.transformResults=t}}class Ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Nd{}function VI(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dc(n.key,Ft.none()):new vl(n.key,n.data,Ft.none());{const t=n.data,r=rn.empty();let a=new Xe(ht.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?r.delete(l):r.set(l,c),a=a.add(l)}return new Ar(n.key,r,new _n(a.toArray()),Ft.none())}}function yV(n,e,t){n instanceof vl?function(a,l,c){const f=a.value.clone(),m=dw(a.fieldTransforms,l,c.transformResults);f.setAll(m),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(n,e,t):n instanceof Ar?function(a,l,c){if(!Vf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=dw(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(kI(a)),m.setAll(f),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Ju(n,e,t,r){return n instanceof vl?function(l,c,f,m){if(!Vf(l.precondition,c))return f;const g=l.value.clone(),y=mw(l.fieldTransforms,m,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ar?function(l,c,f,m){if(!Vf(l.precondition,c))return f;const g=mw(l.fieldTransforms,m,c),y=c.data;return y.setAll(kI(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(l,c,f){return Vf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f}(n,e,t)}function vV(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),l=DI(r.transform,a||null);l!=null&&(t===null&&(t=rn.empty()),t.set(r.field,l))}return t||null}function fw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&Jo(r,a,(l,c)=>gV(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vl extends Nd{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ar extends Nd{constructor(e,t,r,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function kI(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dw(n,e,t){const r=new Map;ge(n.length===t.length);for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,f=e.data.field(l.field);r.set(l.field,pV(c,f,t[a]))}return r}function mw(n,e,t){const r=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);r.set(a.field,mV(l,c,e))}return r}class Dc extends Nd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MI extends Nd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&yV(l,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ju(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ju(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=RI();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const m=VI(c,f);m!==null&&r.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&Jo(this.mutations,e.mutations,(t,r)=>fw(t,r))&&Jo(this.baseMutations,e.baseMutations,(t,r)=>fw(t,r))}}class $_{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ge(e.mutations.length===r.length);let a=function(){return uV}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,r[c].version);return new $_(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,ze;function TV(n){switch(n){case Z.OK:return me();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return me()}}function LI(n){if(n===void 0)return fn("GRPC error has no .code"),Z.UNKNOWN;switch(n){case Rt.OK:return Z.OK;case Rt.CANCELLED:return Z.CANCELLED;case Rt.UNKNOWN:return Z.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return Z.INTERNAL;case Rt.UNAVAILABLE:return Z.UNAVAILABLE;case Rt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Rt.NOT_FOUND:return Z.NOT_FOUND;case Rt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Rt.ABORTED:return Z.ABORTED;case Rt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Rt.DATA_LOSS:return Z.DATA_LOSS;default:return me()}}(ze=Rt||(Rt={}))[ze.OK=0]="OK",ze[ze.CANCELLED=1]="CANCELLED",ze[ze.UNKNOWN=2]="UNKNOWN",ze[ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ze[ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ze[ze.NOT_FOUND=5]="NOT_FOUND",ze[ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",ze[ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",ze[ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",ze[ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ze[ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ze[ze.ABORTED=10]="ABORTED",ze[ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",ze[ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",ze[ze.INTERNAL=13]="INTERNAL",ze[ze.UNAVAILABLE=14]="UNAVAILABLE",ze[ze.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV=new ms([4294967295,4294967295],0);function pw(n){const e=Fb().encode(n),t=new Mb;return t.update(e),new Uint8Array(t.digest())}function gw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ms([t,r],0),new ms([a,l],0)]}class Y_{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Hu(`Invalid padding: ${t}`);if(r<0)throw new Hu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Hu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ms.fromNumber(this.Ee)}Ae(e,t,r){let a=e.add(t.multiply(ms.fromNumber(r)));return a.compare(wV)===1&&(a=new ms([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=pw(e),[r,a]=gw(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(r,a,l);if(!this.Re(c))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Y_(l,a,t);return r.forEach(f=>c.insert(f)),c}insert(e){if(this.Ee===0)return;const t=pw(e),[r,a]=gw(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(r,a,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Hu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,r,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,xc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Pd(ve.min(),a,new ut(Ie),On(),xe())}}class xc{constructor(e,t,r,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xc(r,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,r,a){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=a}}class UI{constructor(e,t){this.targetId=e,this.ge=t}}class BI{constructor(e,t,r=Ct.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class _w{constructor(){this.pe=0,this.ye=yw(),this.we=Ct.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=xe(),t=xe(),r=xe();return this.ye.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:me()}}),new xc(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=yw()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ge(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class AV{constructor(e){this.ke=e,this.qe=new Map,this.Qe=On(),this.$e=df(),this.Ue=df(),this.Ke=new ut(Ie)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,r=e.ge.count,a=this.Xe(t);if(a){const l=a.target;if(td(l))if(r===0){const c=new fe(l.path);this.ze(t,c,_t.newNoDocument(c,ve.min()))}else ge(r===1);else{const c=this.et(t);if(c!==r){const f=this.tt(e),m=f?this.nt(f,e,c):1;if(m!==0){this.Ye(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Er(r).toUint8Array()}catch(m){if(m instanceof aI)return Sa("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new Y_(c,a,l)}catch(m){return Sa(m instanceof Hu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.Ee===0?null:f}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let a=0;return r.forEach(l=>{const c=this.ke.it(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.ze(t,l,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const f=this.Xe(c);if(f){if(l.current&&td(f.target)){const m=new fe(f.target.path);this._t(m).has(c)||this.ut(c,m)||this.ze(c,m,_t.newNoDocument(m,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let r=xe();this.Ue.forEach((l,c)=>{let f=!0;c.forEachWhile(m=>{const g=this.Xe(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(r=r.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const a=new Pd(e,t,this.Ke,this.Qe,r);return this.Qe=On(),this.$e=df(),this.Ue=df(),this.Ke=new ut(Ie),a}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new _w,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Xe(Ie),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Xe(Ie),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new _w),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function df(){return new ut(fe.comparator)}function yw(){return new ut(fe.comparator)}const bV={asc:"ASCENDING",desc:"DESCENDING"},IV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SV={and:"AND",or:"OR"};class RV{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wg(n,e){return n.useProto3Json||bd(e)?e:{value:e}}function hl(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function CV(n,e){return hl(n,e.toTimestamp())}function dn(n){return ge(!!n),ve.fromTimestamp(function(t){const r=vr(t);return new ft(r.seconds,r.nanos)}(n))}function X_(n,e){return Zg(n,e).canonicalString()}function Zg(n,e){const t=function(a){return new Ge(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function jI(n){const e=Ge.fromString(n);return ge(XI(e)),e}function id(n,e){return X_(n.databaseId,e.path)}function wa(n,e){const t=jI(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(HI(t))}function qI(n,e){return X_(n.databaseId,e)}function FI(n){const e=jI(n);return e.length===4?Ge.emptyPath():HI(e)}function Jg(n){return new Ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function HI(n){return ge(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vw(n,e,t){return{name:id(n,e),fields:t.value.mapValue.fields}}function DV(n,e,t){const r=wa(n,e.name),a=dn(e.updateTime),l=e.createTime?dn(e.createTime):ve.min(),c=new rn({mapValue:{fields:e.fields}}),f=_t.newFoundDocument(r,a,l,c);return t&&f.setHasCommittedMutations(),t?f.setHasCommittedMutations():f}function xV(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(ge(y===void 0||typeof y=="string"),Ct.fromBase64String(y||"")):(ge(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Ct.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&function(g){const y=g.code===void 0?Z.UNKNOWN:LI(g.code);return new ue(y,g.message||"")}(c);t=new BI(r,a,l,f||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=wa(n,r.document.name),l=dn(r.document.updateTime),c=r.document.createTime?dn(r.document.createTime):ve.min(),f=new rn({mapValue:{fields:r.document.fields}}),m=_t.newFoundDocument(a,l,c,f),g=r.targetIds||[],y=r.removedTargetIds||[];t=new kf(g,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=wa(n,r.document),l=r.readTime?dn(r.readTime):ve.min(),c=_t.newNoDocument(a,l),f=r.removedTargetIds||[];t=new kf([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=wa(n,r.document),l=r.removedTargetIds||[];t=new kf([],l,a,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:l}=r,c=new EV(a,l),f=r.targetId;t=new UI(f,c)}}return t}function rd(n,e){let t;if(e instanceof vl)t={update:vw(n,e.key,e.value)};else if(e instanceof Dc)t={delete:id(n,e.key)};else if(e instanceof Ar)t={update:vw(n,e.key,e.data),updateMask:MV(e.fieldMask)};else{if(!(e instanceof MI))return me();t={verify:id(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(l,c){const f=c.transform;if(f instanceof ll)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ul)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof cl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof gc)return{fieldPath:c.field.canonicalString(),increment:f.Ie};throw me()}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:CV(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:me()}(n,e.precondition)),t}function e_(n,e){const t=e.currentDocument?function(l){return l.updateTime!==void 0?Ft.updateTime(dn(l.updateTime)):l.exists!==void 0?Ft.exists(l.exists):Ft.none()}(e.currentDocument):Ft.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(c,f){let m=null;if("setToServerValue"in f)ge(f.setToServerValue==="REQUEST_TIME"),m=new ll;else if("appendMissingElements"in f){const y=f.appendMissingElements.values||[];m=new ul(y)}else if("removeAllFromArray"in f){const y=f.removeAllFromArray.values||[];m=new cl(y)}else"increment"in f?m=new gc(c,f.increment):me();const g=ht.fromServerFormat(f.fieldPath);return new PI(g,m)}(n,a)):[];if(e.update){e.update.name;const a=wa(n,e.update.name),l=new rn({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=function(m){const g=m.fieldPaths||[];return new _n(g.map(y=>ht.fromServerFormat(y)))}(e.updateMask);return new Ar(a,l,c,t,r)}return new vl(a,l,t,r)}if(e.delete){const a=wa(n,e.delete);return new Dc(a,t)}if(e.verify){const a=wa(n,e.verify);return new MI(a,t)}return me()}function OV(n,e){return n&&n.length>0?(ge(e!==void 0),n.map(t=>function(a,l){let c=a.updateTime?dn(a.updateTime):dn(l);return c.isEqual(ve.min())&&(c=dn(l)),new _V(c,a.transformResults||[])}(t,e))):[]}function GI(n,e){return{documents:[qI(n,e.path)]}}function KI(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=qI(n,a);const l=function(g){if(g.length!==0)return YI(Ye.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(A){return{field:Ho(A.field),direction:PV(A.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Wg(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:a}}function $I(n){let e=FI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ge(r===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const A=QI(T);return A instanceof Ye&&H_(A)?A.getFilters():[A]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(A=>function(O){return new ed(Go(O.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(A))}(t.orderBy));let f=null;t.limit&&(f=function(T){let A;return A=typeof T=="object"?T.value:T,bd(A)?null:A}(t.limit));let m=null;t.startAt&&(m=function(T){const A=!!T.before,R=T.values||[];return new al(R,A)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const A=!T.before,R=T.values||[];return new al(R,A)}(t.endAt)),rV(e,a,c,l,f,"F",m,g)}function NV(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function QI(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Go(t.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=Go(t.unaryFilter.field);return Me.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Go(t.unaryFilter.field);return Me.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Go(t.unaryFilter.field);return Me.create(c,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(n):n.fieldFilter!==void 0?function(t){return Me.create(Go(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ye.create(t.compositeFilter.filters.map(r=>QI(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return me()}}(t.compositeFilter.op))}(n):me()}function PV(n){return bV[n]}function VV(n){return IV[n]}function kV(n){return SV[n]}function Ho(n){return{fieldPath:n.canonicalString()}}function Go(n){return ht.fromServerFormat(n.fieldPath)}function YI(n){return n instanceof Me?function(t){if(t.op==="=="){if(iw(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NAN"}};if(nw(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(iw(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NOT_NAN"}};if(nw(t.value))return{unaryFilter:{field:Ho(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ho(t.field),op:VV(t.op),value:t.value}}}(n):n instanceof Ye?function(t){const r=t.getFilters().map(a=>YI(a));return r.length===1?r[0]:{compositeFilter:{op:kV(t.op),filters:r}}}(n):me()}function MV(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function XI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,r,a,l=ve.min(),c=ve.min(),f=Ct.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.Tt=e}}function LV(n,e){let t;if(e.document)t=DV(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=fe.fromSegments(e.noDocument.path),a=xa(e.noDocument.readTime);t=_t.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return me();{const r=fe.fromSegments(e.unknownDocument.path),a=xa(e.unknownDocument.version);t=_t.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const l=new ft(a[0],a[1]);return ve.fromTimestamp(l)}(e.readTime)),t}function Ew(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:sd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(l,c){return{name:id(l,c.key),fields:c.data.value.mapValue.fields,updateTime:hl(l,c.version.toTimestamp()),createTime:hl(l,c.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Da(e.version)};else{if(!e.isUnknownDocument())return me();r.unknownDocument={path:t.path.toArray(),version:Da(e.version)}}return r}function sd(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Da(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function xa(n){const e=new ft(n.seconds,n.nanoseconds);return ve.fromTimestamp(e)}function ma(n,e){const t=(e.baseMutations||[]).map(l=>e_(n.Tt,l));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const f=e.mutations[l+1];c.updateTransforms=f.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const r=e.mutations.map(l=>e_(n.Tt,l)),a=ft.fromMillis(e.localWriteTimeMs);return new K_(e.batchId,a,t,r)}function Gu(n){const e=xa(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?xa(n.lastLimboFreeSnapshotVersion):ve.min();let r;return r=function(l){return l.documents!==void 0}(n.query)?function(l){return ge(l.documents.length===1),Xn(Rc(FI(l.documents[0])))}(n.query):function(l){return Xn($I(l))}(n.query),new dr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ct.fromBase64String(n.resumeToken))}function ZI(n,e){const t=Da(e.snapshotVersion),r=Da(e.lastLimboFreeSnapshotVersion);let a;a=td(e.target)?GI(n.Tt,e.target):KI(n.Tt,e.target).ht;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ca(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function JI(n){const e=$I({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xg(e,e.limit,"L"):e}function mg(n,e){return new Q_(e.largestBatchId,e_(n.Tt,e.overlayMutation))}function Tw(n,e){const t=e.path.lastSegment();return[n,sn(e.path.popLast()),t]}function ww(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Da(r.readTime),documentKey:sn(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{getBundleMetadata(e,t){return Aw(e).get(t).next(r=>{if(r)return function(l){return{id:l.bundleId,createTime:xa(l.createTime),version:l.version}}(r)})}saveBundleMetadata(e,t){return Aw(e).put(function(a){return{bundleId:a.id,createTime:Da(dn(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return bw(e).get(t).next(r=>{if(r)return function(l){return{name:l.name,query:JI(l.bundledQuery),readTime:xa(l.readTime)}}(r)})}saveNamedQuery(e,t){return bw(e).put(function(a){return{name:a.name,readTime:Da(dn(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function Aw(n){return kt(n,Id)}function bw(n){return kt(n,Sd)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new Vd(e,r)}getOverlay(e,t){return Vu(e).get(Tw(this.userId,t)).next(r=>r?mg(this.serializer,r):null)}getOverlays(e,t){const r=ki();return z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((l,c)=>{const f=new Q_(t,c);a.push(this.Et(e,f))}),z.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(c=>a.add(sn(c.getCollectionPath())));const l=[];return a.forEach(c=>{const f=IDBKeyRange.bound([this.userId,c,r],[this.userId,c,r+1],!1,!0);l.push(Vu(e).J(qg,f))}),z.waitFor(l)}getOverlaysForCollection(e,t,r){const a=ki(),l=sn(t),c=IDBKeyRange.bound([this.userId,l,r],[this.userId,l,Number.POSITIVE_INFINITY],!0);return Vu(e).G(qg,c).next(f=>{for(const m of f){const g=mg(this.serializer,m);a.set(g.getKey(),g)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const l=ki();let c;const f=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Vu(e).Z({index:tI,range:f},(m,g,y)=>{const T=mg(this.serializer,g);l.size()<a||T.largestBatchId===c?(l.set(T.getKey(),T),c=T.largestBatchId):y.done()}).next(()=>l)}Et(e,t){return Vu(e).put(function(a,l,c){const[f,m,g]=Tw(l,c.mutation.key);return{userId:l,collectionPath:m,documentId:g,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:rd(a.Tt,c.mutation)}}(this.serializer,this.userId,t))}}function Vu(n){return kt(n,Rd)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV{dt(e){return kt(e,B_)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Ct.fromUint8Array(r):Ct.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(ot(e.integerValue));else if("doubleValue"in e){const r=ot(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),lc(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=vr(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(Er(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?fI(e)?this.ft(t,Number.MAX_SAFE_INTEGER):Dd(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):me()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const a of Object.keys(r))this.wt(a,t),this.Rt(r[a],t)}vt(e,t){var r,a;const l=e.fields||{};this.ft(t,53);const c=rl,f=((a=(r=l[c].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.ft(t,15),t.gt(ot(f)),this.wt(c,t),this.Rt(l[c],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const a of r)this.Rt(a,t)}Dt(e,t){this.ft(t,37),fe.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}pa.xt=new pa;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=255;function zV(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Iw(n){const e=64-function(r){let a=0;for(let l=0;l<8;++l){const c=zV(255&r[l]);if(a+=c,c!==8)break}return a}(n);return Math.ceil(e/8)}class jV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const a=t.codePointAt(0);this.Nt(240|a>>>18),this.Nt(128|63&a>>>12),this.Nt(128|63&a>>>6),this.Nt(128|63&a)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const a=t.codePointAt(0);this.kt(240|a>>>18),this.kt(128|63&a>>>12),this.kt(128|63&a>>>6),this.kt(128|63&a)}}this.qt()}Ut(e){const t=this.Kt(e),r=Iw(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Gt(e){const t=this.Kt(e),r=Iw(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}zt(){this.jt(Uo),this.jt(255)}Ht(){this.Jt(Uo),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Uo?(this.jt(Uo),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Uo?(this.Jt(Uo),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class qV{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Ut(e)}Vt(){this.Zt.zt()}}class FV{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class ku{constructor(){this.Zt=new jV,this.Xt=new qV(this.Zt),this.en=new FV(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ga(this.indexId,this.documentKey,this.arrayValue,r)}}function ts(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Sw(n.arrayValue,e.arrayValue),t!==0?t:(t=Sw(n.directionalValue,e.directionalValue),t!==0?t:fe.comparator(n.documentKey,e.documentKey)))}function Sw(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.rn=new Xe((t,r)=>ht.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(ge(e.collectionGroup===this.collectionId),this.an)return!1;const t=Bg(e);if(t!==void 0&&!this.cn(t))return!1;const r=ha(e);let a=new Set,l=0,c=0;for(;l<r.length&&this.cn(r[l]);++l)a=a.add(r[l].fieldPath.canonicalString());if(l===r.length)return!0;if(this.rn.size>0){const f=this.rn.getIterator().getNext();if(!a.has(f.field.canonicalString())){const m=r[l];if(!this.ln(f,m)||!this.hn(this.sn[c++],m))return!1}++l}for(;l<r.length;++l){const f=r[l];if(c>=this.sn.length||!this.hn(this.sn[c++],f))return!1}return!0}Pn(){if(this.an)return null;let e=new Xe(ht.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Cf(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Cf(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Cf(r.field,r.dir==="asc"?0:1)));return new $f($f.UNKNOWN_ID,this.collectionId,t,oc.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(n){var e,t;if(ge(n instanceof Me||n instanceof Ye),n instanceof Me){if(n instanceof TI){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(l=>Me.create(n.field,"==",l)))||[];return Ye.create(a,"or")}return n}const r=n.filters.map(a=>eS(a));return Ye.create(r,n.op)}function HV(n){if(n.getFilters().length===0)return[];const e=i_(eS(n));return ge(tS(e)),t_(e)||n_(e)?[e]:e.getFilters()}function t_(n){return n instanceof Me}function n_(n){return n instanceof Ye&&H_(n)}function tS(n){return t_(n)||n_(n)||function(t){if(t instanceof Ye&&Kg(t)){for(const r of t.getFilters())if(!t_(r)&&!n_(r))return!1;return!0}return!1}(n)}function i_(n){if(ge(n instanceof Me||n instanceof Ye),n instanceof Me)return n;if(n.filters.length===1)return i_(n.filters[0]);const e=n.filters.map(r=>i_(r));let t=Ye.create(e,n.op);return t=ad(t),tS(t)?t:(ge(t instanceof Ye),ge(ol(t)),ge(t.filters.length>1),t.filters.reduce((r,a)=>W_(r,a)))}function W_(n,e){let t;return ge(n instanceof Me||n instanceof Ye),ge(e instanceof Me||e instanceof Ye),t=n instanceof Me?e instanceof Me?function(a,l){return Ye.create([a,l],"and")}(n,e):Cw(n,e):e instanceof Me?Cw(e,n):function(a,l){if(ge(a.filters.length>0&&l.filters.length>0),ol(a)&&ol(l))return yI(a,l.getFilters());const c=Kg(a)?a:l,f=Kg(a)?l:a,m=c.filters.map(g=>W_(g,f));return Ye.create(m,"or")}(n,e),ad(t)}function Cw(n,e){if(ol(e))return yI(e,n.getFilters());{const t=e.filters.map(r=>W_(n,r));return Ye.create(t,"or")}}function ad(n){if(ge(n instanceof Me||n instanceof Ye),n instanceof Me)return n;const e=n.getFilters();if(e.length===1)return ad(e[0]);if(gI(n))return n;const t=e.map(a=>ad(a)),r=[];return t.forEach(a=>{a instanceof Me?r.push(a):a instanceof Ye&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:Ye.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this.Tn=new Z_}addToCollectionParentIndex(e,t){return this.Tn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(kn.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(kn.min())}updateCollectionGroup(e,t,r){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class Z_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new Xe(Ge.comparator),l=!a.has(r);return this.index[t]=a.add(r),l}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new Xe(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="IndexedDbIndexManager",mf=new Uint8Array(0);class KV{constructor(e,t){this.databaseId=t,this.In=new Z_,this.En=new wr(r=>Ca(r),(r,a)=>Ic(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const l={collectionId:r,parent:sn(a)};return xw(e).put(l)}return z.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[Gb(t),""],!1,!0);return xw(e).G(a).next(l=>{for(const c of l){if(c.collectionId!==t)break;r.push(Vi(c.parent))}return r})}addFieldIndex(e,t){const r=Mu(e),a=function(f){return{indexId:f.indexId,collectionGroup:f.collectionGroup,fields:f.fields.map(m=>[m.fieldPath.canonicalString(),m.kind])}}(t);delete a.indexId;const l=r.add(a);if(t.indexState){const c=zo(e);return l.next(f=>{c.put(ww(f,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return l.next()}deleteFieldIndex(e,t){const r=Mu(e),a=zo(e),l=Bo(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Mu(e),r=Bo(e),a=zo(e);return t.J().next(()=>r.J()).next(()=>a.J())}createTargetIndexes(e,t){return z.forEach(this.dn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const l=new Rw(r).Pn();if(l!=null)return this.addFieldIndex(e,l)}}))}getDocumentsMatchingTarget(e,t){const r=Bo(e);let a=!0;const l=new Map;return z.forEach(this.dn(t),c=>this.An(e,c).next(f=>{a&&(a=!!f),l.set(c,f)})).next(()=>{if(a){let c=xe();const f=[];return z.forEach(l,(m,g)=>{ie(Dw,`Using index ${function(Q){return`id=${Q.indexId}|cg=${Q.collectionGroup}|f=${Q.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(m)} to execute ${Ca(t)}`);const y=function(Q,oe){const le=Bg(oe);if(le===void 0)return null;for(const pe of nd(Q,le.fieldPath))switch(pe.op){case"array-contains-any":return pe.value.arrayValue.values||[];case"array-contains":return[pe.value]}return null}(g,m),T=function(Q,oe){const le=new Map;for(const pe of ha(oe))for(const x of nd(Q,pe.fieldPath))switch(x.op){case"==":case"in":le.set(pe.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return le.set(pe.fieldPath.canonicalString(),x.value),Array.from(le.values())}return null}(g,m),A=function(Q,oe){const le=[];let pe=!0;for(const x of ha(oe)){const I=x.kind===0?lw(Q,x.fieldPath,Q.startAt):uw(Q,x.fieldPath,Q.startAt);le.push(I.value),pe&&(pe=I.inclusive)}return new al(le,pe)}(g,m),R=function(Q,oe){const le=[];let pe=!0;for(const x of ha(oe)){const I=x.kind===0?uw(Q,x.fieldPath,Q.endAt):lw(Q,x.fieldPath,Q.endAt);le.push(I.value),pe&&(pe=I.inclusive)}return new al(le,pe)}(g,m),O=this.Rn(m,g,A),G=this.Rn(m,g,R),L=this.Vn(m,g,T),Y=this.mn(m.indexId,y,O,A.inclusive,G,R.inclusive,L);return z.forEach(Y,te=>r.H(te,t.limit).next(Q=>{Q.forEach(oe=>{const le=fe.fromSegments(oe.documentKey);c.has(le)||(c=c.add(le),f.push(le))})}))}).next(()=>f)}return z.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=HV(Ye.create(e.filters,"and")).map(r=>Qg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,a,l,c,f){const m=(t!=null?t.length:1)*Math.max(r.length,l.length),g=m/(t!=null?t.length:1),y=[];for(let T=0;T<m;++T){const A=t?this.fn(t[T/g]):mf,R=this.gn(e,A,r[T%g],a),O=this.pn(e,A,l[T%g],c),G=f.map(L=>this.gn(e,A,L,!0));y.push(...this.createRange(R,O,G))}return y}gn(e,t,r,a){const l=new ga(e,fe.empty(),t,r);return a?l:l.nn()}pn(e,t,r,a){const l=new ga(e,fe.empty(),t,r);return a?l.nn():l}An(e,t){const r=new Rw(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(l=>{let c=null;for(const f of l)r.un(f)&&(!c||f.fields.length>c.fields.length)&&(c=f);return c})}getIndexType(e,t){let r=2;const a=this.dn(t);return z.forEach(a,l=>this.An(e,l).next(c=>{c?r!==0&&c.fields.length<function(m){let g=new Xe(ht.comparator),y=!1;for(const T of m.filters)for(const A of T.getFlattenedFilters())A.field.isKeyField()||(A.op==="array-contains"||A.op==="array-contains-any"?y=!0:g=g.add(A.field));for(const T of m.orderBy)T.field.isKeyField()||(g=g.add(T.field));return g.size+(y?1:0)}(l)&&(r=1):r=0})).next(()=>function(c){return c.limit!==null}(t)&&a.length>1&&r===2?1:r)}yn(e,t){const r=new ku;for(const a of ha(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=r.tn(a.kind);pa.xt.At(l,c)}return r.Yt()}fn(e){const t=new ku;return pa.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new ku;return pa.xt.At(mc(this.databaseId,t),r.tn(function(l){const c=ha(l);return c.length===0?0:c[c.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let a=[];a.push(new ku);let l=0;for(const c of ha(e)){const f=r[l++];for(const m of a)if(this.Sn(t,c.fieldPath)&&pc(f))a=this.bn(a,c,f);else{const g=m.tn(c.kind);pa.xt.At(f,g)}}return this.Dn(a)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){const a=[...e],l=[];for(const c of r.arrayValue.values||[])for(const f of a){const m=new ku;m.seed(f.Yt()),pa.xt.At(c,m.tn(t.kind)),l.push(m)}return l}Sn(e,t){return!!e.filters.find(r=>r instanceof Me&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Mu(e),a=zo(e);return(t?r.G(jg,IDBKeyRange.bound(t,t)):r.G()).next(l=>{const c=[];return z.forEach(l,f=>a.get([f.indexId,this.uid]).next(m=>{c.push(function(y,T){const A=T?new oc(T.sequenceNumber,new kn(xa(T.readTime),new fe(Vi(T.documentKey)),T.largestBatchId)):oc.empty(),R=y.fields.map(([O,G])=>new Cf(ht.fromServerFormat(O),G));return new $f(y.indexId,y.collectionGroup,R,A)}(f,m))})).next(()=>c)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const l=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Ie(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=Mu(e),l=zo(e);return this.vn(e).next(c=>a.G(jg,IDBKeyRange.bound(t,t)).next(f=>z.forEach(f,m=>l.put(ww(m.indexId,this.uid,c,r)))))}updateIndexEntries(e,t){const r=new Map;return z.forEach(t,(a,l)=>{const c=r.get(a.collectionGroup);return(c?z.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next(f=>(r.set(a.collectionGroup,f),z.forEach(f,m=>this.Cn(e,a,m).next(g=>{const y=this.Fn(l,m);return g.isEqual(y)?z.resolve():this.Mn(e,l,m,g,y)}))))})}xn(e,t,r,a){return Bo(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,a){return Bo(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const a=Bo(e);let l=new Xe(ts);return a.Z({index:eI,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(c,f)=>{l=l.add(new ga(r.indexId,t,f.arrayValue,f.directionalValue))}).next(()=>l)}Fn(e,t){let r=new Xe(ts);const a=this.yn(t,e);if(a==null)return r;const l=Bg(t);if(l!=null){const c=e.data.field(l.fieldPath);if(pc(c))for(const f of c.arrayValue.values||[])r=r.add(new ga(t.indexId,e.key,this.fn(f),a))}else r=r.add(new ga(t.indexId,e.key,mf,a));return r}Mn(e,t,r,a,l){ie(Dw,"Updating index entries for document '%s'",t.key);const c=[];return function(m,g,y,T,A){const R=m.getIterator(),O=g.getIterator();let G=Lo(R),L=Lo(O);for(;G||L;){let Y=!1,te=!1;if(G&&L){const Q=y(G,L);Q<0?te=!0:Q>0&&(Y=!0)}else G!=null?te=!0:Y=!0;Y?(T(L),L=Lo(O)):te?(A(G),G=Lo(R)):(G=Lo(R),L=Lo(O))}}(a,l,ts,f=>{c.push(this.xn(e,t,r,f))},f=>{c.push(this.On(e,t,r,f))}),z.waitFor(c)}vn(e){let t=1;return zo(e).Z({index:Jb,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,l)=>{l.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((c,f)=>ts(c,f)).filter((c,f,m)=>!f||ts(c,m[f-1])!==0);const a=[];a.push(e);for(const c of r){const f=ts(c,e),m=ts(c,t);if(f===0)a[0]=e.nn();else if(f>0&&m<0)a.push(c),a.push(c.nn());else if(m>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.Nn(a[c],a[c+1]))return[];const f=[a[c].indexId,this.uid,a[c].arrayValue,a[c].directionalValue,mf,[]],m=[a[c+1].indexId,this.uid,a[c+1].arrayValue,a[c+1].directionalValue,mf,[]];l.push(IDBKeyRange.bound(f,m))}return l}Nn(e,t){return ts(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ow)}getMinOffset(e,t){return z.mapArray(this.dn(t),r=>this.An(e,r).next(a=>a||me())).next(Ow)}}function xw(n){return kt(n,hc)}function Bo(n){return kt(n,Zf)}function Mu(n){return kt(n,U_)}function zo(n){return kt(n,Wf)}function Ow(n){ge(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;k_(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new kn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nS=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(n,e,t){const r=n.store(oi),a=n.store(el),l=[],c=IDBKeyRange.only(t.batchId);let f=0;const m=r.Z({range:c},(y,T,A)=>(f++,A.delete()));l.push(m.next(()=>{ge(f===1)}));const g=[];for(const y of t.mutations){const T=Xb(e,y.key.path,t.batchId);l.push(a.delete(T)),g.push(y.key)}return z.waitFor(l).next(()=>g)}function od(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw me();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(nS,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);class kd{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.Bn={}}static It(e,t,r,a){ge(e.uid!=="");const l=e.isAuthenticated()?e.uid:"";return new kd(l,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ns(e).Z({index:ya,range:r},(a,l,c)=>{t=!1,c.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const l=Ko(e),c=ns(e);return c.add({}).next(f=>{ge(typeof f=="number");const m=new K_(f,t,r,a),g=function(R,O,G){const L=G.baseMutations.map(te=>rd(R.Tt,te)),Y=G.mutations.map(te=>rd(R.Tt,te));return{userId:O,batchId:G.batchId,localWriteTimeMs:G.localWriteTime.toMillis(),baseMutations:L,mutations:Y}}(this.serializer,this.userId,m),y=[];let T=new Xe((A,R)=>Ie(A.canonicalString(),R.canonicalString()));for(const A of a){const R=Xb(this.userId,A.key.path,f);T=T.add(A.key.path.popLast()),y.push(c.put(g)),y.push(l.put(R,w2))}return T.forEach(A=>{y.push(this.indexManager.addToCollectionParentIndex(e,A))}),e.addOnCommittedListener(()=>{this.Bn[f]=m.keys()}),z.waitFor(y).next(()=>m)})}lookupMutationBatch(e,t){return ns(e).get(t).next(r=>r?(ge(r.userId===this.userId),ma(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?z.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.Bn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let l=null;return ns(e).Z({index:ya,range:a},(c,f,m)=>{f.userId===this.userId&&(ge(f.batchId>=r),l=ma(this.serializer,f)),m.done()}).next(()=>l)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Ea;return ns(e).Z({index:ya,range:t,reverse:!0},(a,l,c)=>{r=l.batchId,c.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ea],[this.userId,Number.POSITIVE_INFINITY]);return ns(e).G(ya,t).next(r=>r.map(a=>ma(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Df(this.userId,t.path),a=IDBKeyRange.lowerBound(r),l=[];return Ko(e).Z({range:a},(c,f,m)=>{const[g,y,T]=c,A=Vi(y);if(g===this.userId&&t.path.isEqual(A))return ns(e).get(T).next(R=>{if(!R)throw me();ge(R.userId===this.userId),l.push(ma(this.serializer,R))});m.done()}).next(()=>l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Xe(Ie);const a=[];return t.forEach(l=>{const c=Df(this.userId,l.path),f=IDBKeyRange.lowerBound(c),m=Ko(e).Z({range:f},(g,y,T)=>{const[A,R,O]=g,G=Vi(R);A===this.userId&&l.path.isEqual(G)?r=r.add(O):T.done()});a.push(m)}),z.waitFor(a).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,l=Df(this.userId,r),c=IDBKeyRange.lowerBound(l);let f=new Xe(Ie);return Ko(e).Z({range:c},(m,g,y)=>{const[T,A,R]=m,O=Vi(A);T===this.userId&&r.isPrefixOf(O)?O.length===a&&(f=f.add(R)):y.done()}).next(()=>this.kn(e,f))}kn(e,t){const r=[],a=[];return t.forEach(l=>{a.push(ns(e).get(l).next(c=>{if(c===null)throw me();ge(c.userId===this.userId),r.push(ma(this.serializer,c))}))}),z.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return iS(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),z.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return z.resolve();const r=IDBKeyRange.lowerBound(function(c){return[c]}(this.userId)),a=[];return Ko(e).Z({range:r},(l,c,f)=>{if(l[0]===this.userId){const m=Vi(l[1]);a.push(m)}else f.done()}).next(()=>{ge(a.length===0)})})}containsKey(e,t){return rS(e,this.userId,t)}Qn(e){return sS(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ea,lastStreamToken:""})}}function rS(n,e,t){const r=Df(e,t.path),a=r[1],l=IDBKeyRange.lowerBound(r);let c=!1;return Ko(n).Z({range:l,Y:!0},(f,m,g)=>{const[y,T,A]=f;y===e&&T===a&&(c=!0),g.done()}).next(()=>c)}function ns(n){return kt(n,oi)}function Ko(n){return kt(n,el)}function sS(n){return kt(n,uc)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Oa(0)}static Kn(){return new Oa(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new Oa(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>ve.fromTimestamp(new ft(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Gn(e,a)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>jo(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(ge(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let a=0;const l=[];return jo(e).Z((c,f)=>{const m=Gu(f);m.sequenceNumber<=t&&r.get(m.targetId)===null&&(a++,l.push(this.removeTargetData(e,m)))}).next(()=>z.waitFor(l)).next(()=>a)}forEachTarget(e,t){return jo(e).Z((r,a)=>{const l=Gu(a);t(l)})}Wn(e){return Pw(e).get(Xf).next(t=>(ge(t!==null),t))}Gn(e,t){return Pw(e).put(Xf,t)}zn(e,t){return jo(e).put(ZI(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ca(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let l=null;return jo(e).Z({range:a,index:Zb},(c,f,m)=>{const g=Gu(f);Ic(t,g.target)&&(l=g,m.done())}).next(()=>l)}addMatchingKeys(e,t,r){const a=[],l=ls(e);return t.forEach(c=>{const f=sn(c.path);a.push(l.put({targetId:r,path:f})),a.push(this.referenceDelegate.addReference(e,r,c))}),z.waitFor(a)}removeMatchingKeys(e,t,r){const a=ls(e);return z.forEach(t,l=>{const c=sn(l.path);return z.waitFor([a.delete([r,c]),this.referenceDelegate.removeReference(e,r,l)])})}removeMatchingKeysForTargetId(e,t){const r=ls(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=ls(e);let l=xe();return a.Z({range:r,Y:!0},(c,f,m)=>{const g=Vi(c[1]),y=new fe(g);l=l.add(y)}).next(()=>l)}containsKey(e,t){const r=sn(t.path),a=IDBKeyRange.bound([r],[Gb(r)],!1,!0);let l=0;return ls(e).Z({index:L_,Y:!0,range:a},([c,f],m,g)=>{c!==0&&(l++,g.done())}).next(()=>l>0)}lt(e,t){return jo(e).get(t).next(r=>r?Gu(r):null)}}function jo(n){return kt(n,tl)}function Pw(n){return kt(n,Ta)}function ls(n){return kt(n,nl)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="LruGarbageCollector",QV=1048576;function kw([n,e],[t,r]){const a=Ie(n,t);return a===0?Ie(e,r):a}class YV{constructor(e){this.Hn=e,this.buffer=new Xe(kw),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();kw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class aS{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ie(Vw,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bs(t)?ie(Vw,"Ignoring IndexedDB error during garbage collection: ",t):await ja(t)}await this.er(3e5)})}}class XV{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Yn.ae);const r=new YV(t);return this.tr.forEachTarget(e,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Nw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nw):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,a,l,c,f,m,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(r=T,f=Date.now(),this.removeTargets(e,r,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(g=Date.now(),qo()<=ke.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-y}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function oS(n,e){return new XV(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e,t){this.db=e,this.garbageCollector=oS(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,a)=>t(a))}addReference(e,t,r){return pf(e,r)}removeReference(e,t,r){return pf(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return pf(e,t)}ar(e,t){return function(a,l){let c=!1;return sS(a).X(f=>rS(a,f,l).next(m=>(m&&(c=!0),z.resolve(!m)))).next(()=>c)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this._r(e,(c,f)=>{if(f<=t){const m=this.ar(e,c).next(g=>{if(!g)return l++,r.getEntry(e,c).next(()=>(r.removeEntry(c,ve.min()),ls(e).delete(function(T){return[0,sn(T.path)]}(c))))});a.push(m)}}).next(()=>z.waitFor(a)).next(()=>r.apply(e)).next(()=>l)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return pf(e,t)}_r(e,t){const r=ls(e);let a,l=Yn.ae;return r.Z({index:L_},([c,f],{path:m,sequenceNumber:g})=>{c===0?(l!==Yn.ae&&t(new fe(Vi(a)),l),l=g,a=m):l=Yn.ae}).next(()=>{l!==Yn.ae&&t(new fe(Vi(a)),l)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function pf(n,e){return ls(n).put(function(r,a){return{targetId:0,path:sn(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.changes=new wr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ua(e).put(r)}removeEntry(e,t,r){return ua(e).delete(function(l,c){const f=l.path.toArray();return[f.slice(0,f.length-2),f[f.length-2],sd(c),f[f.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=_t.newInvalidDocument(t);return ua(e).Z({index:xf,range:IDBKeyRange.only(Lu(t))},(a,l)=>{r=this.cr(t,l)}).next(()=>r)}lr(e,t){let r={size:0,document:_t.newInvalidDocument(t)};return ua(e).Z({index:xf,range:IDBKeyRange.only(Lu(t))},(a,l)=>{r={document:this.cr(t,l),size:od(l)}}).next(()=>r)}getEntries(e,t){let r=On();return this.hr(e,t,(a,l)=>{const c=this.cr(a,l);r=r.insert(a,c)}).next(()=>r)}Pr(e,t){let r=On(),a=new ut(fe.comparator);return this.hr(e,t,(l,c)=>{const f=this.cr(l,c);r=r.insert(l,f),a=a.insert(l,od(c))}).next(()=>({documents:r,Tr:a}))}hr(e,t,r){if(t.isEmpty())return z.resolve();let a=new Xe(Uw);t.forEach(m=>a=a.add(m));const l=IDBKeyRange.bound(Lu(a.first()),Lu(a.last())),c=a.getIterator();let f=c.getNext();return ua(e).Z({index:xf,range:l},(m,g,y)=>{const T=fe.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;f&&Uw(f,T)<0;)r(f,null),f=c.getNext();f&&f.isEqual(T)&&(r(f,g),f=c.hasNext()?c.getNext():null),f?y.W(Lu(f)):y.done()}).next(()=>{for(;f;)r(f,null),f=c.hasNext()?c.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,l){const c=t.path,f=[c.popLast().toArray(),c.lastSegment(),sd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],m=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ua(e).G(IDBKeyRange.bound(f,m,!0)).next(g=>{l==null||l.incrementDocumentReadCount(g.length);let y=On();for(const T of g){const A=this.cr(fe.fromSegments(T.prefixPath.concat(T.collectionGroup,T.documentId)),T);A.isFoundDocument()&&(Cc(t,A)||a.has(A.key))&&(y=y.insert(A.key,A))}return y})}getAllFromCollectionGroup(e,t,r,a){let l=On();const c=Lw(t,r),f=Lw(t,kn.max());return ua(e).Z({index:Wb,range:IDBKeyRange.bound(c,f,!0)},(m,g,y)=>{const T=this.cr(fe.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(T.key,T),l.size===a&&y.done()}).next(()=>l)}newChangeBuffer(e){return new JV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Mw(e).get(zg).next(t=>(ge(!!t),t))}ur(e,t){return Mw(e).put(zg,t)}cr(e,t){if(t){const r=LV(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ve.min())))return r}return _t.newInvalidDocument(e)}}function uS(n){return new ZV(n)}class JV extends lS{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new wr(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new Xe((l,c)=>Ie(l.canonicalString(),c.canonicalString()));return this.changes.forEach((l,c)=>{const f=this.Er.get(l);if(t.push(this.Ir.removeEntry(e,l,f.readTime)),c.isValidDocument()){const m=Ew(this.Ir.serializer,c);a=a.add(l.path.popLast());const g=od(m);r+=g-f.size,t.push(this.Ir.addEntry(e,l,m))}else if(r-=f.size,this.trackRemovals){const m=Ew(this.Ir.serializer,c.convertToNoDocument(ve.min()));t.push(this.Ir.addEntry(e,l,m))}}),a.forEach(l=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,l))}),t.push(this.Ir.updateMetadata(e,r)),z.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:a})=>(a.forEach((l,c)=>{this.Er.set(l,{size:c,readTime:r.get(l).readTime})}),r))}}function Mw(n){return kt(n,cc)}function ua(n){return kt(n,Yf)}function Lu(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Lw(n,e){const t=e.documentKey.path.toArray();return[n,sd(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Uw(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<r.length-2;++l)if(a=Ie(t[l],r[l]),a)return a;return a=Ie(t.length,r.length),a||(a=Ie(t[t.length-2],r[r.length-2]),a||Ie(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Ju(r.mutation,a,_n.empty(),ft.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,xe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=xe()){const a=ki();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(l=>{let c=Fu();return l.forEach((f,m)=>{c=c.insert(f,m.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const r=ki();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,xe()))}populateOverlays(e,t,r){const a=[];return r.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,f)=>{t.set(c,f)})})}computeViews(e,t,r,a){let l=On();const c=Zu(),f=function(){return Zu()}();return t.forEach((m,g)=>{const y=r.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Ar)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Ju(y.mutation,g,y.mutation.getFieldMask(),ft.now())):c.set(g.key,_n.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return f.set(g,new ek(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const r=Zu();let a=new ut((c,f)=>c-f),l=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const f of c)f.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let y=r.get(m)||_n.empty();y=f.applyToLocalView(g,y),r.set(m,y);const T=(a.get(f.batchId)||xe()).add(m);a=a.insert(f.batchId,T)})}).next(()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),g=m.key,y=m.value,T=RI();y.forEach(A=>{if(!l.has(A)){const R=VI(t.get(A),r.get(A));R!==null&&T.set(A,R),l=l.add(A)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return z.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(c){return fe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-l.size):z.resolve(ki());let f=ac,m=l;return c.next(g=>z.forEach(g,(y,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(y)?z.resolve():this.remoteDocumentCache.getEntry(e,y).next(A=>{m=m.insert(y,A)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,m,g,xe())).next(y=>({batchId:f,changes:SI(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next(r=>{let a=Fu();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const l=t.collectionGroup;let c=Fu();return this.indexManager.getCollectionParents(e,l).next(f=>z.forEach(f,m=>{const g=function(T,A){return new Sc(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,r,a).next(y=>{y.forEach((T,A)=>{c=c.insert(T,A)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,r,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,l,a))).next(c=>{l.forEach((m,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,_t.newInvalidDocument(y)))});let f=Fu();return c.forEach((m,g)=>{const y=l.get(m);y!==void 0&&Ju(y.mutation,g,_n.empty(),ft.now()),Cc(t,g)&&(f=f.insert(m,g))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return z.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:dn(a.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:JI(a.bundledQuery),readTime:dn(a.readTime)}}(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.overlays=new ut(fe.comparator),this.Rr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ki();return z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,l)=>{this.Et(e,t,l)}),z.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(r)),z.resolve()}getOverlaysForCollection(e,t,r){const a=ki(),l=t.length+1,c=new fe(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const m=f.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>r&&a.set(m.getKey(),m)}return z.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let l=new ut((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let y=l.get(g.largestBatchId);y===null&&(y=ki(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const f=ki(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,y)=>f.set(g,y)),!(f.size()>=a)););return z.resolve(f)}Et(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const c=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Q_(t,r));let l=this.Rr.get(t);l===void 0&&(l=xe(),this.Rr.set(t,l)),this.Rr.set(t,l.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.Vr=new Xe(qt.mr),this.gr=new Xe(qt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new qt(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new qt(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new fe(new Ge([])),r=new qt(t,e),a=new qt(t,e+1),l=[];return this.gr.forEachInRange([r,a],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new fe(new Ge([])),r=new qt(t,e),a=new qt(t,e+1);let l=xe();return this.gr.forEachInRange([r,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new qt(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class qt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return fe.comparator(e.key,t.key)||Ie(e.Cr,t.Cr)}static pr(e,t){return Ie(e.Cr,t.Cr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Xe(qt.mr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new K_(l,t,r,a);this.mutationQueue.push(c);for(const f of a)this.Mr=this.Mr.add(new qt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return z.resolve(c)}lookupMutationBatch(e,t){return z.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Nr(r),l=a<0?0:a;return z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Ea:this.Fr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new qt(t,0),a=new qt(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([r,a],c=>{const f=this.Or(c.Cr);l.push(f)}),z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Xe(Ie);return t.forEach(a=>{const l=new qt(a,0),c=new qt(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],f=>{r=r.add(f.Cr)})}),z.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let l=r;fe.isDocumentKey(l)||(l=l.child(""));const c=new qt(new fe(l),0);let f=new Xe(Ie);return this.Mr.forEachWhile(m=>{const g=m.key.path;return!!r.isPrefixOf(g)&&(g.length===a&&(f=f.add(m.Cr)),!0)},c),z.resolve(this.Br(f))}Br(e){const t=[];return e.forEach(r=>{const a=this.Or(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ge(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return z.forEach(t.mutations,a=>{const l=new qt(a.key,t.batchId);return r=r.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new qt(t,0),a=this.Mr.firstAfterOrEqual(r);return z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.kr=e,this.docs=function(){return new ut(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),l=a?a.size:0,c=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return z.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(t))}getEntries(e,t){let r=On();return t.forEach(a=>{const l=this.docs.get(a);r=r.insert(a,l?l.document.mutableCopy():_t.newInvalidDocument(a))}),z.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let l=On();const c=t.path,f=new fe(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:g,value:{document:y}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||k_(Kb(y),r)<=0||(a.has(y.key)||Cc(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return z.resolve(l)}getAllFromCollectionGroup(e,t,r,a){me()}qr(e,t){return z.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ak(this)}getSize(e){return z.resolve(this.size)}}class ak extends lS{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(r)}),z.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.persistence=e,this.Qr=new wr(t=>Ca(t),Ic),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.$r=0,this.Ur=new J_,this.targetCount=0,this.Kr=Oa.Un()}forEachTarget(e,t){return this.Qr.forEach((r,a)=>t(a)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),z.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Oa(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.zn(t),z.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,r){let a=0;const l=[];return this.Qr.forEach((c,f)=>{f.sequenceNumber<=t&&r.get(f.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)}),z.waitFor(l).next(()=>a)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return z.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),z.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),z.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return z.resolve(r)}containsKey(e,t){return z.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Yn(0),this.zr=!1,this.zr=!0,this.jr=new ik,this.referenceDelegate=e(this),this.Hr=new ok(this),this.indexManager=new GV,this.remoteDocumentCache=function(a){return new sk(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new WI(t),this.Yr=new tk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new rk(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){ie("MemoryPersistence","Starting transaction:",e);const a=new lk(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(e,t){return z.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class lk extends Qb{constructor(e){super(),this.currentSequenceNumber=e}}class Md{constructor(e){this.persistence=e,this.ti=new J_,this.ni=null}static ri(e){return new Md(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),z.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),z.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ii,r=>{const a=fe.fromPath(r);return this.si(e,a).next(l=>{l||t.removeEntry(a,ve.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return z.or([()=>z.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class ld{constructor(e,t){this.persistence=e,this.oi=new wr(r=>sn(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=oS(this,t)}static ri(e,t){return new ld(e,t)}Zr(){}Xr(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return z.forEach(this.oi,(r,a)=>this.ar(e,r,a).next(l=>l?z.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(e,c=>this.ar(e,c,t).next(f=>{f||(r++,l.removeEntry(c,ve.min()))})).next(()=>l.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),z.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Nf(e.data.value)),t}ar(e,t,r){return z.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return z.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.serializer=e}B(e,t,r,a){const l=new Ad("createOrUpgrade",t);r<1&&a>=1&&(function(m){m.createObjectStore(bc)}(e),function(m){m.createObjectStore(uc,{keyPath:T2}),m.createObjectStore(oi,{keyPath:X0,autoIncrement:!0}).createIndex(ya,W0,{unique:!0}),m.createObjectStore(el)}(e),Bw(e),function(m){m.createObjectStore(fa)}(e));let c=z.resolve();return r<3&&a>=3&&(r!==0&&(function(m){m.deleteObjectStore(nl),m.deleteObjectStore(tl),m.deleteObjectStore(Ta)}(e),Bw(e)),c=c.next(()=>function(m){const g=m.store(Ta),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ve.min().toTimestamp(),targetCount:0};return g.put(Xf,y)}(l))),r<4&&a>=4&&(r!==0&&(c=c.next(()=>function(m,g){return g.store(oi).G().next(T=>{m.deleteObjectStore(oi),m.createObjectStore(oi,{keyPath:X0,autoIncrement:!0}).createIndex(ya,W0,{unique:!0});const A=g.store(oi),R=T.map(O=>A.put(O));return z.waitFor(R)})}(e,l))),c=c.next(()=>{(function(m){m.createObjectStore(il,{keyPath:x2})})(e)})),r<5&&a>=5&&(c=c.next(()=>this._i(l))),r<6&&a>=6&&(c=c.next(()=>(function(m){m.createObjectStore(cc)}(e),this.ai(l)))),r<7&&a>=7&&(c=c.next(()=>this.ui(l))),r<8&&a>=8&&(c=c.next(()=>this.ci(e,l))),r<9&&a>=9&&(c=c.next(()=>{(function(m){m.objectStoreNames.contains("remoteDocumentChanges")&&m.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(c=c.next(()=>this.li(l))),r<11&&a>=11&&(c=c.next(()=>{(function(m){m.createObjectStore(Id,{keyPath:O2})})(e),function(m){m.createObjectStore(Sd,{keyPath:N2})}(e)})),r<12&&a>=12&&(c=c.next(()=>{(function(m){const g=m.createObjectStore(Rd,{keyPath:B2});g.createIndex(qg,z2,{unique:!1}),g.createIndex(tI,j2,{unique:!1})})(e)})),r<13&&a>=13&&(c=c.next(()=>function(m){const g=m.createObjectStore(Yf,{keyPath:A2});g.createIndex(xf,b2),g.createIndex(Wb,I2)}(e)).next(()=>this.hi(e,l)).next(()=>e.deleteObjectStore(fa))),r<14&&a>=14&&(c=c.next(()=>this.Pi(e,l))),r<15&&a>=15&&(c=c.next(()=>function(m){m.createObjectStore(U_,{keyPath:P2,autoIncrement:!0}).createIndex(jg,V2,{unique:!1}),m.createObjectStore(Wf,{keyPath:k2}).createIndex(Jb,M2,{unique:!1}),m.createObjectStore(Zf,{keyPath:L2}).createIndex(eI,U2,{unique:!1})}(e))),r<16&&a>=16&&(c=c.next(()=>{t.objectStore(Wf).clear()}).next(()=>{t.objectStore(Zf).clear()})),r<17&&a>=17&&(c=c.next(()=>{(function(m){m.createObjectStore(B_,{keyPath:q2})})(e)})),c}ai(e){let t=0;return e.store(fa).Z((r,a)=>{t+=od(a)}).next(()=>{const r={byteSize:t};return e.store(cc).put(zg,r)})}_i(e){const t=e.store(uc),r=e.store(oi);return t.G().next(a=>z.forEach(a,l=>{const c=IDBKeyRange.bound([l.userId,Ea],[l.userId,l.lastAcknowledgedBatchId]);return r.G(ya,c).next(f=>z.forEach(f,m=>{ge(m.userId===l.userId);const g=ma(this.serializer,m);return iS(e,l.userId,g).next(()=>{})}))}))}ui(e){const t=e.store(nl),r=e.store(fa);return e.store(Ta).get(Xf).next(a=>{const l=[];return r.Z((c,f)=>{const m=new Ge(c),g=function(T){return[0,sn(T)]}(m);l.push(t.get(g).next(y=>y?z.resolve():(T=>t.put({targetId:0,path:sn(T),sequenceNumber:a.highestListenSequenceNumber}))(m)))}).next(()=>z.waitFor(l))})}ci(e,t){e.createObjectStore(hc,{keyPath:D2});const r=t.store(hc),a=new Z_,l=c=>{if(a.add(c)){const f=c.lastSegment(),m=c.popLast();return r.put({collectionId:f,parent:sn(m)})}};return t.store(fa).Z({Y:!0},(c,f)=>{const m=new Ge(c);return l(m.popLast())}).next(()=>t.store(el).Z({Y:!0},([c,f,m],g)=>{const y=Vi(f);return l(y.popLast())}))}li(e){const t=e.store(tl);return t.Z((r,a)=>{const l=Gu(a),c=ZI(this.serializer,l);return t.put(c)})}hi(e,t){const r=t.store(fa),a=[];return r.Z((l,c)=>{const f=t.store(Yf),m=function(T){return T.document?new fe(Ge.fromString(T.document.name).popFirst(5)):T.noDocument?fe.fromSegments(T.noDocument.path):T.unknownDocument?fe.fromSegments(T.unknownDocument.path):me()}(c).path.toArray(),g={prefixPath:m.slice(0,m.length-2),collectionGroup:m[m.length-2],documentId:m[m.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(f.put(g))}).next(()=>z.waitFor(a))}Pi(e,t){const r=t.store(oi),a=uS(this.serializer),l=new ey(Md.ri,this.serializer.Tt);return r.G().next(c=>{const f=new Map;return c.forEach(m=>{var g;let y=(g=f.get(m.userId))!==null&&g!==void 0?g:xe();ma(this.serializer,m).keys().forEach(T=>y=y.add(T)),f.set(m.userId,y)}),z.forEach(f,(m,g)=>{const y=new Xt(g),T=Vd.It(this.serializer,y),A=l.getIndexManager(y),R=kd.It(y,this.serializer,A,l.referenceDelegate);return new cS(a,R,T,A).recalculateAndSaveOverlaysForDocumentKeys(new Fg(t,Yn.ae),m).next()})})}}function Bw(n){n.createObjectStore(nl,{keyPath:R2}).createIndex(L_,C2,{unique:!0}),n.createObjectStore(tl,{keyPath:"targetId"}).createIndex(Zb,S2,{unique:!0}),n.createObjectStore(Ta)}const is="IndexedDbPersistence",pg=18e5,gg=5e3,_g="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",ck="main";class ty{constructor(e,t,r,a,l,c,f,m,g,y,T=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=l,this.window=c,this.document=f,this.Ii=g,this.Ei=y,this.di=T,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=A=>Promise.resolve(),!ty.D())throw new ue(Z.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new WV(this,a),this.gi=t+ck,this.serializer=new WI(m),this.pi=new ps(this.gi,this.di,new uk(this.serializer)),this.jr=new BV,this.Hr=new $V(this.referenceDelegate,this.serializer),this.remoteDocumentCache=uS(this.serializer),this.Yr=new UV,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,y===!1&&fn(is,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ue(Z.FAILED_PRECONDITION,_g);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new Yn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>gf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(bs(e))return ie(is,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ie(is,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return Uu(e).get(Mo).next(t=>z.resolve(this.Ni(t)))}Bi(e){return gf(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,pg)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=kt(t,il);return r.G().next(a=>{const l=this.qi(a,pg),c=a.filter(f=>l.indexOf(f)===-1);return z.forEach(c,f=>r.delete(f.clientId)).next(()=>c)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?z.resolve(!0):Uu(e).get(Mo).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,gg)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new ue(Z.FAILED_PRECONDITION,_g);return!1}}return!(!this.networkEnabled||!this.inForeground)||gf(e).G().next(r=>this.qi(r,gg).find(a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,f=this.networkEnabled===a.networkEnabled;if(l||c&&f)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&ie(is,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[bc,il],e=>{const t=new Fg(e,Yn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>gf(e).G().next(t=>this.qi(t,pg).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return kd.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new KV(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return Vd.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){ie(is,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=function(m){return m===17?G2:m===16?H2:m===15?z_:m===14?rI:m===13?iI:m===12?F2:m===11?nI:void me()}(this.di);let c;return this.pi.runTransaction(e,a,l,f=>(c=new Fg(f,this.Gr?this.Gr.next():Yn.ae),t==="readwrite-primary"?this.Fi(c).next(m=>!!m||this.Mi(c)).next(m=>{if(!m)throw fn(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new ue(Z.FAILED_PRECONDITION,$b);return r(c)}).next(m=>this.Oi(c).next(()=>m)):this.ji(c).next(()=>r(c)))).then(f=>(c.raiseOnCommittedEvent(),f))}ji(e){return Uu(e).get(Mo).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,gg)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ue(Z.FAILED_PRECONDITION,_g)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Uu(e).put(Mo,t)}static D(){return ps.D()}xi(e){const t=Uu(e);return t.get(Mo).next(r=>this.Ni(r)?(ie(is,"Releasing primary lease."),t.delete(Mo)):z.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(fn(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const t=/(?:Version|Mobile)\/1[456]/;YA()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return ie(is,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return fn(is,"Failed to get zombied client id.",r),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){fn("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Uu(n){return kt(n,bc)}function gf(n){return kt(n,il)}function hk(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=a}static Yi(e,t){let r=xe(),a=xe();for(const l of t.docChanges)switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new ny(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return YA()?8:Yb(Vt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,a){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,a,r).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new fk;return this._s(e,t,c).next(f=>{if(l.result=f,this.Xi)return this.us(e,t,c,f.size)})}).next(()=>l.result)}us(e,t,r,a){return r.documentReadCount<this.es?(qo()<=ke.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),z.resolve()):(qo()<=ke.DEBUG&&ie("QueryEngine","Query:",Fo(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(qo()<=ke.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(t))):z.resolve())}rs(e,t){if(cw(t))return z.resolve(null);let r=Xn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Xg(t,null,"F"),r=Xn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(l=>{const c=xe(...l);return this.ns.getDocuments(e,c).next(f=>this.indexManager.getMinOffset(e,r).next(m=>{const g=this.cs(t,f);return this.ls(t,g,c,m.readTime)?this.rs(e,Xg(t,null,"F")):this.hs(e,g,t,m)}))})))}ss(e,t,r,a){return cw(t)||a.isEqual(ve.min())?z.resolve(null):this.ns.getDocuments(e,r).next(l=>{const c=this.cs(t,l);return this.ls(t,c,r,a)?z.resolve(null):(qo()<=ke.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Fo(t)),this.hs(e,c,t,m2(a,ac)).next(f=>f))})}cs(e,t){let r=new Xe(bI(e));return t.forEach((a,l)=>{Cc(e,l)&&(r=r.add(l))}),r}ls(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(e,t,r){return qo()<=ke.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Fo(t)),this.ns.getDocumentsMatchingQuery(e,t,kn.min(),r)}hs(e,t,r,a){return this.ns.getDocumentsMatchingQuery(e,r,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="LocalStore",dk=3e8;class mk{constructor(e,t,r,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new ut(Ie),this.Is=new wr(l=>Ca(l),Ic),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cS(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function fS(n,e,t,r){return new mk(n,e,t,r)}async function dS(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(l=>(a=l,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(l=>{const c=[],f=[];let m=xe();for(const g of a){c.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}for(const g of l){f.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(r,m).next(g=>({Rs:g,removedBatchIds:c,addedBatchIds:f}))})})}function pk(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(f,m,g,y){const T=g.batch,A=T.keys();let R=z.resolve();return A.forEach(O=>{R=R.next(()=>y.getEntry(m,O)).next(G=>{const L=g.docVersions.get(O);ge(L!==null),G.version.compareTo(L)<0&&(T.applyToRemoteDocument(G,g),G.isValidDocument()&&(G.setReadTime(g.commitVersion),y.addEntry(G)))})}),R.next(()=>f.mutationQueue.removeMutationBatch(m,T))}(t,r,e,l).next(()=>l.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(f){let m=xe();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(m=m.add(f.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function mS(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function gk(n,e){const t=Re(n),r=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const f=[];e.targetChanges.forEach((y,T)=>{const A=a.get(T);if(!A)return;f.push(t.Hr.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,y.addedDocuments,T)));let R=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?R=R.withResumeToken(Ct.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,r)),a=a.insert(T,R),function(G,L,Y){return G.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=dk?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(A,R,y)&&f.push(t.Hr.updateTargetData(l,R))});let m=On(),g=xe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),f.push(_k(l,c,e.documentUpdates).next(y=>{m=y.Vs,g=y.fs})),!r.isEqual(ve.min())){const y=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,r));f.push(y)}return z.waitFor(f).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,g)).next(()=>m)}).then(l=>(t.Ts=a,l))}function _k(n,e,t){let r=xe(),a=xe();return t.forEach(l=>r=r.add(l)),e.getEntries(n,r).next(l=>{let c=On();return t.forEach((f,m)=>{const g=l.get(f);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),m.isNoDocument()&&m.version.isEqual(ve.min())?(e.removeEntry(f,m.readTime),c=c.insert(f,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(f,m)):ie(iy,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",m.version)}),{Vs:c,fs:a}})}function yk(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ea),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vk(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Hr.getTargetData(r,e).next(l=>l?(a=l,z.resolve(a)):t.Hr.allocateTargetId(r).next(c=>(a=new dr(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function r_(n,e,t){const r=Re(n),a=r.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",l,c=>r.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!bs(c))throw c;ie(iy,`Failed to update sequence numbers for target ${e}: ${c}`)}r.Ts=r.Ts.remove(e),r.Is.delete(a.target)}function zw(n,e,t){const r=Re(n);let a=ve.min(),l=xe();return r.persistence.runTransaction("Execute query","readwrite",c=>function(m,g,y){const T=Re(m),A=T.Is.get(y);return A!==void 0?z.resolve(T.Ts.get(A)):T.Hr.getTargetData(g,y)}(r,c,Xn(e)).next(f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(c,f.targetId).next(m=>{l=m})}).next(()=>r.Ps.getDocumentsMatchingQuery(c,e,t?a:ve.min(),t?l:xe())).next(f=>(Ek(r,aV(e),f),{documents:f,gs:l})))}function Ek(n,e,t){let r=n.Es.get(e)||ve.min();t.forEach((a,l)=>{l.readTime.compareTo(r)>0&&(r=l.readTime)}),n.Es.set(e,r)}class jw{constructor(){this.activeTargetIds=fV()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pS{constructor(){this.ho=new jw,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new jw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="ConnectivityMonitor";class Fw{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ie(qw,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ie(qw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f=null;function s_(){return _f===null?_f=function(){return 268435456+Math.round(2147483648*Math.random())}():_f++,"0x"+_f.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="RestConnection",wk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ak{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===Jf?`project_id=${r}`:`project_id=${r}&database_id=${a}`}So(e,t,r,a,l){const c=s_(),f=this.bo(e,t.toUriEncodedString());ie(yg,`Sending RPC '${e}' ${c}:`,f,r);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,a,l),this.vo(e,f,m,r).then(g=>(ie(yg,`Received RPC '${e}' ${c}: `,g),g),g=>{throw Sa(yg,`RPC '${e}' ${c} failed with error: `,g,"url: ",f,"request:",r),g})}Co(e,t,r,a,l,c){return this.So(e,t,r,a,l)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),r&&r.headers.forEach((a,l)=>e[l]=a)}bo(e,t){const r=wk[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="WebChannelConnection";class Ik extends Ak{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,a){const l=s_();return new Promise((c,f)=>{const m=new Lb;m.setWithCredentials(!0),m.listenOnce(Ub.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Rf.NO_ERROR:const y=m.getResponseJson();ie(tn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(y)),c(y);break;case Rf.TIMEOUT:ie(tn,`RPC '${e}' ${l} timed out`),f(new ue(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Rf.HTTP_ERROR:const T=m.getStatus();if(ie(tn,`RPC '${e}' ${l} failed with status:`,T,"response text:",m.getResponseText()),T>0){let A=m.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const O=function(L){const Y=L.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(Y)>=0?Y:Z.UNKNOWN}(R.status);f(new ue(O,R.message))}else f(new ue(Z.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new ue(Z.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ie(tn,`RPC '${e}' ${l} completed.`)}});const g=JSON.stringify(a);ie(tn,`RPC '${e}' ${l} sending request:`,a),m.send(t,"POST",g,r,15)})}Wo(e,t,r){const a=s_(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=jb(),f=zb(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,r),m.encodeInitMessageHeaders=!0;const y=l.join("");ie(tn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const T=c.createWebChannel(y,m);let A=!1,R=!1;const O=new bk({Fo:L=>{R?ie(tn,`Not sending because RPC '${e}' stream ${a} is closed:`,L):(A||(ie(tn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),A=!0),ie(tn,`RPC '${e}' stream ${a} sending:`,L),T.send(L))},Mo:()=>T.close()}),G=(L,Y,te)=>{L.listen(Y,Q=>{try{te(Q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return G(T,qu.EventType.OPEN,()=>{R||(ie(tn,`RPC '${e}' stream ${a} transport opened.`),O.Qo())}),G(T,qu.EventType.CLOSE,()=>{R||(R=!0,ie(tn,`RPC '${e}' stream ${a} transport closed`),O.Uo())}),G(T,qu.EventType.ERROR,L=>{R||(R=!0,Sa(tn,`RPC '${e}' stream ${a} transport errored:`,L),O.Uo(new ue(Z.UNAVAILABLE,"The operation could not be completed")))}),G(T,qu.EventType.MESSAGE,L=>{var Y;if(!R){const te=L.data[0];ge(!!te);const Q=te,oe=(Q==null?void 0:Q.error)||((Y=Q[0])===null||Y===void 0?void 0:Y.error);if(oe){ie(tn,`RPC '${e}' stream ${a} received error:`,oe);const le=oe.status;let pe=function(S){const P=Rt[S];if(P!==void 0)return LI(P)}(le),x=oe.message;pe===void 0&&(pe=Z.INTERNAL,x="Unknown error status: "+le+" with message "+oe.message),R=!0,O.Uo(new ue(pe,x)),T.close()}else ie(tn,`RPC '${e}' stream ${a} received:`,te),O.Ko(te)}}),G(f,Bb.STAT_EVENT,L=>{L.stat===Lg.PROXY?ie(tn,`RPC '${e}' stream ${a} detected buffering proxy`):L.stat===Lg.NOPROXY&&ie(tn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{O.$o()},0),O}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(){return typeof window<"u"?window:null}function Mf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n){return new RV(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,t,r=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-r);a>0&&ie("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="PersistentStream";class _S{constructor(e,t,r,a,l,c,f,m){this.Ti=e,this.n_=r,this.r_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new gS(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(fn(t.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===t&&this.V_(r,a)},r=>{e(()=>{const a=new ue(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ie(Hw,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ie(Hw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rk extends _S{constructor(e,t,r,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=xV(this.serializer,e),r=function(l){if(!("targetChange"in l))return ve.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ve.min():c.readTime?dn(c.readTime):ve.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Jg(this.serializer),t.addTarget=function(l,c){let f;const m=c.target;if(f=td(m)?{documents:GI(l,m)}:{query:KI(l,m).ht},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=zI(l,c.resumeToken);const g=Wg(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(ve.min())>0){f.readTime=hl(l,c.snapshotVersion.toTimestamp());const g=Wg(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f}(this.serializer,e);const r=NV(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Jg(this.serializer),t.removeTarget=e,this.I_(t)}}class Ck extends _S{constructor(e,t,r,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,c),this.serializer=l}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=OV(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Jg(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>rd(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{}class xk extends Dk{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new ue(Z.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.So(e,Zg(t,r),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue(Z.UNKNOWN,l.toString())})}Co(e,t,r,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.Co(e,Zg(t,r),a,c,f,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(Z.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Ok{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(fn(t),this.N_=!1):ie("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="RemoteStore";class Nk{constructor(e,t,r,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{r.enqueueAndForget(async()=>{qa(this)&&(ie(Na,"Restarting streams for network reachability change."),await async function(m){const g=Re(m);g.W_.add(4),await Oc(g),g.j_.set("Unknown"),g.W_.delete(4),await Ud(g)}(this))})}),this.j_=new Ok(r,a)}}async function Ud(n){if(qa(n))for(const e of n.G_)await e(!0)}async function Oc(n){for(const e of n.G_)await e(!1)}function yS(n,e){const t=Re(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),oy(t)?ay(t):El(t).c_()&&sy(t,e))}function ry(n,e){const t=Re(n),r=El(t);t.K_.delete(e),r.c_()&&vS(t,e),t.K_.size===0&&(r.c_()?r.P_():qa(t)&&t.j_.set("Unknown"))}function sy(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}El(n).y_(e)}function vS(n,e){n.H_.Ne(e),El(n).w_(e)}function ay(n){n.H_=new AV({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),El(n).start(),n.j_.B_()}function oy(n){return qa(n)&&!El(n).u_()&&n.K_.size>0}function qa(n){return Re(n).W_.size===0}function ES(n){n.H_=void 0}async function Pk(n){n.j_.set("Online")}async function Vk(n){n.K_.forEach((e,t)=>{sy(n,e)})}async function kk(n,e){ES(n),oy(n)?(n.j_.q_(e),ay(n)):n.j_.set("Unknown")}async function Mk(n,e,t){if(n.j_.set("Online"),e instanceof BI&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const f of l.targetIds)a.K_.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.K_.delete(f),a.H_.removeTarget(f))}(n,e)}catch(r){ie(Na,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ud(n,r)}else if(e instanceof kf?n.H_.We(e):e instanceof UI?n.H_.Ze(e):n.H_.je(e),!t.isEqual(ve.min()))try{const r=await mS(n.localStore);t.compareTo(r)>=0&&await function(l,c){const f=l.H_.ot(c);return f.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const y=l.K_.get(g);y&&l.K_.set(g,y.withResumeToken(m.resumeToken,c))}}),f.targetMismatches.forEach((m,g)=>{const y=l.K_.get(m);if(!y)return;l.K_.set(m,y.withResumeToken(Ct.EMPTY_BYTE_STRING,y.snapshotVersion)),vS(l,m);const T=new dr(y.target,m,g,y.sequenceNumber);sy(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(r){ie(Na,"Failed to raise snapshot:",r),await ud(n,r)}}async function ud(n,e,t){if(!bs(e))throw e;n.W_.add(1),await Oc(n),n.j_.set("Offline"),t||(t=()=>mS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ie(Na,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Ud(n)})}function TS(n,e){return e().catch(t=>ud(n,t,e))}async function Nc(n){const e=Re(n),t=Es(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ea;for(;Lk(e);)try{const a=await yk(e.localStore,r);if(a===null){e.U_.length===0&&t.P_();break}r=a.batchId,Uk(e,a)}catch(a){await ud(e,a)}wS(e)&&AS(e)}function Lk(n){return qa(n)&&n.U_.length<10}function Uk(n,e){n.U_.push(e);const t=Es(n);t.c_()&&t.S_&&t.b_(e.mutations)}function wS(n){return qa(n)&&!Es(n).u_()&&n.U_.length>0}function AS(n){Es(n).start()}async function Bk(n){Es(n).C_()}async function zk(n){const e=Es(n);for(const t of n.U_)e.b_(t.mutations)}async function jk(n,e,t){const r=n.U_.shift(),a=$_.from(r,e,t);await TS(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Nc(n)}async function qk(n,e){e&&Es(n).S_&&await async function(r,a){if(function(c){return TV(c)&&c!==Z.ABORTED}(a.code)){const l=r.U_.shift();Es(r).h_(),await TS(r,()=>r.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Nc(r)}}(n,e),wS(n)&&AS(n)}async function Gw(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ie(Na,"RemoteStore received new credentials");const r=qa(t);t.W_.add(3),await Oc(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Ud(t)}async function Fk(n,e){const t=Re(n);e?(t.W_.delete(2),await Ud(t)):e||(t.W_.add(2),await Oc(t),t.j_.set("Unknown"))}function El(n){return n.J_||(n.J_=function(t,r,a){const l=Re(t);return l.M_(),new Rk(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:Pk.bind(null,n),No:Vk.bind(null,n),Lo:kk.bind(null,n),p_:Mk.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),oy(n)?ay(n):n.j_.set("Unknown")):(await n.J_.stop(),ES(n))})),n.J_}function Es(n){return n.Y_||(n.Y_=function(t,r,a){const l=Re(t);return l.M_(),new Ck(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Bk.bind(null,n),Lo:qk.bind(null,n),D_:zk.bind(null,n),v_:jk.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Nc(n)):(await n.Y_.stop(),n.U_.length>0&&(ie(Na,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,r,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=l,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,l){const c=Date.now()+r,f=new ly(e,t,c,a,l);return f.start(r),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uy(n,e){if(fn("AsyncQueue",`${e}: ${n}`),bs(n))return new ue(Z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{static emptySet(e){return new Xo(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||fe.comparator(t.key,r.key):(t,r)=>fe.comparator(t.key,r.key),this.keyedMap=Fu(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=r.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.Z_=new ut(fe.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class fl{constructor(e,t,r,a,l,c,f,m,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,a,l){const c=[];return t.forEach(f=>{c.push({type:0,doc:f})}),new fl(e,t,Xo.emptySet(t),c,r,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Gk{constructor(){this.queries=$w(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const a=Re(t),l=a.queries;a.queries=$w(),l.forEach((c,f)=>{for(const m of f.ta)m.onError(r)})})(this,new ue(Z.ABORTED,"Firestore shutting down"))}}function $w(){return new wr(n=>AI(n),xd)}async function bS(n,e){const t=Re(n);let r=3;const a=e.query;let l=t.queries.get(a);l?!l.na()&&e.ra()&&(r=2):(l=new Hk,r=e.ra()?0:1);try{switch(r){case 0:l.ea=await t.onListen(a,!0);break;case 1:l.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=uy(c,`Initialization of query '${Fo(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&cy(t)}async function IS(n,e){const t=Re(n),r=e.query;let a=3;const l=t.queries.get(r);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?a=e.ra()?0:1:!l.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Kk(n,e){const t=Re(n);let r=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.ta)f.oa(a)&&(r=!0);c.ea=a}}r&&cy(t)}function $k(n,e,t){const r=Re(n),a=r.queries.get(e);if(a)for(const l of a.ta)l.onError(t);r.queries.delete(e)}function cy(n){n.ia.forEach(e=>{e.next()})}var a_,Qw;(Qw=a_||(a_={}))._a="default",Qw.Cache="cache";class SS{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new fl(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=fl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==a_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.key=e}}class CS{constructor(e){this.key=e}}class Qk{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=xe(),this.mutatedKeys=xe(),this.ya=bI(e),this.wa=new Xo(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new Kw,a=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const A=a.get(y),R=Cc(this.query,T)?T:null,O=!!A&&this.mutatedKeys.has(A.key),G=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let L=!1;A&&R?A.data.isEqual(R.data)?O!==G&&(r.track({type:3,doc:R}),L=!0):this.va(A,R)||(r.track({type:2,doc:R}),L=!0,(m&&this.ya(R,m)>0||g&&this.ya(R,g)<0)&&(f=!0)):!A&&R?(r.track({type:0,doc:R}),L=!0):A&&!R&&(r.track({type:1,doc:A}),L=!0,(m||g)&&(f=!0)),L&&(R?(c=c.add(R),l=G?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),r.track({type:1,doc:y})}return{wa:c,Da:r,ls:f,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((y,T)=>function(R,O){const G=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return G(R)-G(O)}(y.type,T.type)||this.ya(y.doc,T.doc)),this.Ca(r),a=a!=null&&a;const f=t&&!a?this.Fa():[],m=this.pa.size===0&&this.current&&!a?1:0,g=m!==this.ga;return this.ga=m,c.length!==0||g?{snapshot:new fl(this.query,e.wa,l,c,e.mutatedKeys,m===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:f}:{Ma:f}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Kw,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=xe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new CS(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new RS(r))}),t}Oa(e){this.fa=e.gs,this.pa=xe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return fl.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const hy="SyncEngine";class Yk{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Xk{constructor(e){this.key=e,this.Ba=!1}}class Wk{constructor(e,t,r,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new wr(f=>AI(f),xd),this.qa=new Map,this.Qa=new Set,this.$a=new ut(fe.comparator),this.Ua=new Map,this.Ka=new J_,this.Wa={},this.Ga=new Map,this.za=Oa.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Zk(n,e,t=!0){const r=VS(n);let a;const l=r.ka.get(e);return l?(r.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Na()):a=await DS(r,e,t,!0),a}async function Jk(n,e){const t=VS(n);await DS(t,e,!0,!1)}async function DS(n,e,t,r){const a=await vk(n.localStore,Xn(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return r&&(f=await eM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&yS(n.remoteStore,a),f}async function eM(n,e,t,r,a){n.Ha=(T,A,R)=>async function(G,L,Y,te){let Q=L.view.ba(Y);Q.ls&&(Q=await zw(G.localStore,L.query,!1).then(({documents:x})=>L.view.ba(x,Q)));const oe=te&&te.targetChanges.get(L.targetId),le=te&&te.targetMismatches.get(L.targetId)!=null,pe=L.view.applyChanges(Q,G.isPrimaryClient,oe,le);return Xw(G,L.targetId,pe.Ma),pe.snapshot}(n,T,A,R);const l=await zw(n.localStore,e,!0),c=new Qk(e,l.gs),f=c.ba(l.documents),m=xc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),g=c.applyChanges(f,n.isPrimaryClient,m);Xw(n,t,g.Ma);const y=new Yk(e,t,c);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),g.snapshot}async function tM(n,e,t){const r=Re(n),a=r.ka.get(e),l=r.qa.get(a.targetId);if(l.length>1)return r.qa.set(a.targetId,l.filter(c=>!xd(c,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await r_(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&ry(r.remoteStore,a.targetId),o_(r,a.targetId)}).catch(ja)):(o_(r,a.targetId),await r_(r.localStore,a.targetId,!0))}async function nM(n,e){const t=Re(n),r=t.ka.get(e),a=t.qa.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ry(t.remoteStore,r.targetId))}async function iM(n,e,t){const r=kS(n);try{const a=await function(c,f){const m=Re(c),g=ft.now(),y=f.reduce((R,O)=>R.add(O.key),xe());let T,A;return m.persistence.runTransaction("Locally write mutations","readwrite",R=>{let O=On(),G=xe();return m.ds.getEntries(R,y).next(L=>{O=L,O.forEach((Y,te)=>{te.isValidDocument()||(G=G.add(Y))})}).next(()=>m.localDocuments.getOverlayedDocuments(R,O)).next(L=>{T=L;const Y=[];for(const te of f){const Q=vV(te,T.get(te.key).overlayedDocument);Q!=null&&Y.push(new Ar(te.key,Q,mI(Q.value.mapValue),Ft.exists(!0)))}return m.mutationQueue.addMutationBatch(R,g,Y,f)}).next(L=>{A=L;const Y=L.applyToLocalDocumentSet(T,G);return m.documentOverlayCache.saveOverlays(R,L.batchId,Y)})}).then(()=>({batchId:A.batchId,changes:SI(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(c,f,m){let g=c.Wa[c.currentUser.toKey()];g||(g=new ut(Ie)),g=g.insert(f,m),c.Wa[c.currentUser.toKey()]=g}(r,a.batchId,t),await Pc(r,a.changes),await Nc(r.remoteStore)}catch(a){const l=uy(a,"Failed to persist write");t.reject(l)}}async function xS(n,e){const t=Re(n);try{const r=await gk(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Ua.get(l);c&&(ge(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.Ba=!0:a.modifiedDocuments.size>0?ge(c.Ba):a.removedDocuments.size>0&&(ge(c.Ba),c.Ba=!1))}),await Pc(t,r,e)}catch(r){await ja(r)}}function Yw(n,e,t){const r=Re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ka.forEach((l,c)=>{const f=c.view.sa(e);f.snapshot&&a.push(f.snapshot)}),function(c,f){const m=Re(c);m.onlineState=f;let g=!1;m.queries.forEach((y,T)=>{for(const A of T.ta)A.sa(f)&&(g=!0)}),g&&cy(m)}(r.eventManager,e),a.length&&r.La.p_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rM(n,e,t){const r=Re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Ua.get(e),l=a&&a.key;if(l){let c=new ut(fe.comparator);c=c.insert(l,_t.newNoDocument(l,ve.min()));const f=xe().add(l),m=new Pd(ve.min(),new Map,new ut(Ie),c,f);await xS(r,m),r.$a=r.$a.remove(l),r.Ua.delete(e),fy(r)}else await r_(r.localStore,e,!1).then(()=>o_(r,e,t)).catch(ja)}async function sM(n,e){const t=Re(n),r=e.batch.batchId;try{const a=await pk(t.localStore,e);NS(t,r,null),OS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Pc(t,a)}catch(a){await ja(a)}}async function aM(n,e,t){const r=Re(n);try{const a=await function(c,f){const m=Re(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return m.mutationQueue.lookupMutationBatch(g,f).next(T=>(ge(T!==null),y=T.keys(),m.mutationQueue.removeMutationBatch(g,T))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,y,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>m.localDocuments.getDocuments(g,y))})}(r.localStore,e);NS(r,e,t),OS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Pc(r,a)}catch(a){await ja(a)}}function OS(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function NS(n,e,t){const r=Re(n);let a=r.Wa[r.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),r.Wa[r.currentUser.toKey()]=a}}function o_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||PS(n,r)})}function PS(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(ry(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),fy(n))}function Xw(n,e,t){for(const r of t)r instanceof RS?(n.Ka.addReference(r.key,e),oM(n,r)):r instanceof CS?(ie(hy,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||PS(n,r.key)):me()}function oM(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(ie(hy,"New document in limbo: "+t),n.Qa.add(r),fy(n))}function fy(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new fe(Ge.fromString(e)),r=n.za.next();n.Ua.set(r,new Xk(t)),n.$a=n.$a.insert(t,r),yS(n.remoteStore,new dr(Xn(Rc(t.path)),r,"TargetPurposeLimboResolution",Yn.ae))}}async function Pc(n,e,t){const r=Re(n),a=[],l=[],c=[];r.ka.isEmpty()||(r.ka.forEach((f,m)=>{c.push(r.Ha(m,e,t).then(g=>{var y;if((g||t)&&r.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=ny.Yi(m.targetId,g);l.push(T)}}))}),await Promise.all(c),r.La.p_(a),await async function(m,g){const y=Re(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>z.forEach(g,A=>z.forEach(A.Hi,R=>y.persistence.referenceDelegate.addReference(T,A.targetId,R)).next(()=>z.forEach(A.Ji,R=>y.persistence.referenceDelegate.removeReference(T,A.targetId,R)))))}catch(T){if(!bs(T))throw T;ie(iy,"Failed to update sequence numbers: "+T)}for(const T of g){const A=T.targetId;if(!T.fromCache){const R=y.Ts.get(A),O=R.snapshotVersion,G=R.withLastLimboFreeSnapshotVersion(O);y.Ts=y.Ts.insert(A,G)}}}(r.localStore,l))}async function lM(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ie(hy,"User change. New user:",e.toKey());const r=await dS(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(f=>{f.forEach(m=>{m.reject(new ue(Z.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pc(t,r.Rs)}}function uM(n,e){const t=Re(n),r=t.Ua.get(e);if(r&&r.Ba)return xe().add(r.key);{let a=xe();const l=t.qa.get(e);if(!l)return a;for(const c of l){const f=t.ka.get(c);a=a.unionWith(f.view.Sa)}return a}}function VS(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rM.bind(null,e),e.La.p_=Kk.bind(null,e.eventManager),e.La.Ja=$k.bind(null,e.eventManager),e}function kS(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aM.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ld(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return fS(this.persistence,new hS,e.initialUser,this.serializer)}Xa(e){return new ey(Md.ri,this.serializer)}Za(e){return new pS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class cM extends _c{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ge(this.persistence.referenceDelegate instanceof ld);const r=this.persistence.referenceDelegate.garbageCollector;return new aS(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new ey(r=>ld.ri(r,t),this.serializer)}}class hM extends _c{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await kS(this.ru.syncEngine),await Nc(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return fS(this.persistence,new hS,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new aS(r,e.asyncQueue,t)}nu(e,t){const r=new y2(t,this.persistence);return new _2(e.asyncQueue,r)}Xa(e){const t=hk(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new ty(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Sk(),Mf(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new pS}}class cd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lM.bind(null,this.syncEngine),await Fk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gk}()}createDatastore(e){const t=Ld(e.databaseInfo.databaseId),r=function(l){return new Ik(l)}(e.databaseInfo);return function(l,c,f,m){return new xk(l,c,f,m)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,l,c,f){return new Nk(r,a,l,c,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Yw(this.syncEngine,t,0),function(){return Fw.D()?new Fw:new Tk}())}createSyncEngine(e,t){return function(a,l,c,f,m,g,y){const T=new Wk(a,l,c,f,m,g);return y&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Re(a);ie(Na,"RemoteStore shutting down."),l.W_.add(5),await Oc(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}cd.provider={build:()=>new cd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="FirestoreClient";class fM{constructor(e,t,r,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=Xt.UNAUTHENTICATED,this.clientId=Hb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(r,async c=>{ie(Ts,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(ie(Ts,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=uy(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vg(n,e){n.asyncQueue.verifyOperationInProgress(),ie(Ts,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await dS(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ww(n,e){n.asyncQueue.verifyOperationInProgress();const t=await dM(n);ie(Ts,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Gw(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>Gw(e.remoteStore,a)),n._onlineComponents=e}async function dM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ie(Ts,"Using user provided OfflineComponentProvider");try{await vg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Z.FAILED_PRECONDITION||a.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Sa("Error using user provided cache. Falling back to memory cache: "+t),await vg(n,new _c)}}else ie(Ts,"Using default OfflineComponentProvider"),await vg(n,new cM(void 0));return n._offlineComponents}async function LS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ie(Ts,"Using user provided OnlineComponentProvider"),await Ww(n,n._uninitializedComponentsProvider._online)):(ie(Ts,"Using default OnlineComponentProvider"),await Ww(n,new cd))),n._onlineComponents}function mM(n){return LS(n).then(e=>e.syncEngine)}async function l_(n){const e=await LS(n),t=e.eventManager;return t.onListen=Zk.bind(null,e.syncEngine),t.onUnlisten=tM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nM.bind(null,e.syncEngine),t}function pM(n,e,t={}){const r=new pr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,f,m,g){const y=new MS({next:A=>{y.su(),c.enqueueAndForget(()=>IS(l,T));const R=A.docs.has(f);!R&&A.fromCache?g.reject(new ue(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&A.fromCache&&m&&m.source==="server"?g.reject(new ue(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new SS(Rc(f.path),y,{includeMetadataChanges:!0,Ta:!0});return bS(l,T)}(await l_(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(n,e,t){if(!t)throw new ue(Z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gM(n,e,t,r){if(e===!0&&r===!0)throw new ue(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Jw(n){if(!fe.isDocumentKey(n))throw new ue(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function eA(n){if(fe.isDocumentKey(n))throw new ue(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":me()}function Pn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bd(n);throw new ue(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="firestore.googleapis.com",tA=!0;class nA{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zS,this.ssl=tA}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:tA;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QV)throw new ue(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=US((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zd{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new s2;switch(r.type){case"firstParty":return new u2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Zw.get(t);r&&(ie("ComponentProvider","Removing Datastore"),Zw.delete(t),r.terminate())}(this),Promise.resolve()}}function _M(n,e,t,r={}){var a;const l=(n=Pn(n,zd))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;l.host!==zS&&l.host!==f&&Sa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},l),{host:f,ssl:!1,emulatorOptions:r});if(!_s(m,c)&&(n._setSettings(m),r.mockUserToken)){let g,y;if(typeof r.mockUserToken=="string")g=r.mockUserToken,y=Xt.MOCK_USER;else{g=$A(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new ue(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Xt(T)}n._authCredentials=new a2(new qb(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tl(this.firestore,e,this._query)}}class an{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class gs extends Tl{constructor(e,t,r){super(e,t,Rc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new fe(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function jS(n,e,...t){if(n=We(n),BS("collection","path",e),n instanceof zd){const r=Ge.fromString(e,...t);return eA(r),new gs(n,null,r)}{if(!(n instanceof an||n instanceof gs))throw new ue(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ge.fromString(e,...t));return eA(r),new gs(n.firestore,null,r)}}function br(n,e,...t){if(n=We(n),arguments.length===1&&(e=Hb.newId()),BS("doc","path",e),n instanceof zd){const r=Ge.fromString(e,...t);return Jw(r),new an(n,null,new fe(r))}{if(!(n instanceof an||n instanceof gs))throw new ue(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ge.fromString(e,...t));return Jw(r),new an(n.firestore,n instanceof gs?n.converter:null,new fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="AsyncQueue";class rA{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new gS(this,"async_queue_retry"),this.Su=()=>{const r=Mf();r&&ie(iA,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Mf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Mf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new pr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!bs(e))throw e;ie(iA,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const a=function(c){let f=c.message||"";return c.stack&&(f=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),f}(r);throw fn("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=ly.createAndSchedule(this,e,t,r,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function sA(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of r)if(l in a&&typeof a[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Tr extends zd{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new rA,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rA(e),this._firestoreClient=void 0,await e}}}function yM(n,e){const t=typeof n=="object"?n:yd(),r=typeof n=="string"?n:Jf,a=ws(t,"firestore").getImmediate({identifier:r});if(!a._initialized){const l=HA("firestore");l&&_M(a,...l)}return a}function jd(n){if(n._terminated)throw new ue(Z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qS(n),n._firestoreClient}function qS(n){var e,t,r;const a=n._freezeSettings(),l=function(f,m,g,y){return new $2(f,m,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,US(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new fM(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}}(n._componentsProvider))}function vM(n,e){Sa("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return EM(n,cd.provider,{build:r=>new hM(r,t.cacheSizeBytes,void 0)}),Promise.resolve()}function EM(n,e,t){if((n=Pn(n,Tr))._firestoreClient||n._terminated)throw new ue(Z.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new ue(Z.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},qS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dl(Ct.fromBase64String(e))}catch(t){throw new ue(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dl(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=/^__.*__$/;class wM{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,t,this.fieldTransforms):new vl(e,this.data,t,this.fieldTransforms)}}class FS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ar(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function HS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class py{constructor(e,t,r,a,l,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new py(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.$u(e),a}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return hd(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(HS(this.Lu)&&TM.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class AM{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ld(e)}ju(e,t,r,a=!1){return new py({Lu:e,methodName:t,zu:r,path:ht.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fd(n){const e=n._freezeSettings(),t=Ld(n._databaseId);return new AM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function GS(n,e,t,r,a,l={}){const c=n.ju(l.merge||l.mergeFields?2:0,e,t,a);_y("Data must be an object, but it was:",c,r);const f=QS(r,c);let m,g;if(l.merge)m=new _n(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const A=u_(e,T,t);if(!c.contains(A))throw new ue(Z.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);XS(y,A)||y.push(A)}m=new _n(y),g=c.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,g=c.fieldTransforms;return new wM(new rn(f),m,g)}class kc extends qd{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kc}}class gy extends qd{_toFieldTransform(e){return new PI(e.path,new ll)}isEqual(e){return e instanceof gy}}function KS(n,e,t,r){const a=n.ju(1,e,t);_y("Data must be an object, but it was:",a,r);const l=[],c=rn.empty();Is(r,(m,g)=>{const y=yy(e,m,t);g=We(g);const T=a.Uu(y);if(g instanceof kc)l.push(y);else{const A=Mc(g,T);A!=null&&(l.push(y),c.set(y,A))}});const f=new _n(l);return new FS(c,f,a.fieldTransforms)}function $S(n,e,t,r,a,l){const c=n.ju(1,e,t),f=[u_(e,r,t)],m=[a];if(l.length%2!=0)throw new ue(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)f.push(u_(e,l[A])),m.push(l[A+1]);const g=[],y=rn.empty();for(let A=f.length-1;A>=0;--A)if(!XS(g,f[A])){const R=f[A];let O=m[A];O=We(O);const G=c.Uu(R);if(O instanceof kc)g.push(R);else{const L=Mc(O,G);L!=null&&(g.push(R),y.set(R,L))}}const T=new _n(g);return new FS(y,T,c.fieldTransforms)}function bM(n,e,t,r=!1){return Mc(t,n.ju(r?4:3,e))}function Mc(n,e){if(YS(n=We(n)))return _y("Unsupported field value:",e,n),QS(n,e);if(n instanceof qd)return function(r,a){if(!HS(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,a){const l=[];let c=0;for(const f of r){let m=Mc(f,a.Ku(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}}(n,e)}return function(r,a){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dV(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=ft.fromDate(r);return{timestampValue:hl(a.serializer,l)}}if(r instanceof ft){const l=new ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hl(a.serializer,l)}}if(r instanceof dy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dl)return{bytesValue:zI(a.serializer,r._byteString)};if(r instanceof an){const l=a.databaseId,c=r.firestore._databaseId;if(!c.isEqual(l))throw a.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:X_(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof my)return function(c,f){return{mapValue:{fields:{[q_]:{stringValue:F_},[rl]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw f.Wu("VectorValues must only contain numeric values.");return G_(f.serializer,g)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${Bd(r)}`)}(n,e)}function QS(n,e){const t={};return sI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(n,(r,a)=>{const l=Mc(a,e.qu(r));l!=null&&(t[r]=l)}),{mapValue:{fields:t}}}function YS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ft||n instanceof dy||n instanceof dl||n instanceof an||n instanceof qd||n instanceof my)}function _y(n,e,t){if(!YS(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Bd(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function u_(n,e,t){if((e=We(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return yy(n,e);throw hd("Field path arguments must be of type string or ",n,!1,void 0,t)}const IM=new RegExp("[~\\*/\\[\\]]");function yy(n,e,t){if(e.search(IM)>=0)throw hd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vc(...e.split("."))._internalPath}catch{throw hd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function hd(n,e,t,r,a){const l=r&&!r.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${r}`),c&&(m+=` in document ${a}`),m+=")"),new ue(Z.INVALID_ARGUMENT,f+n+m)}function XS(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,t,r,a,l){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vy("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class SM extends WS{data(){return super.data()}}function vy(n,e){return typeof e=="string"?yy(n,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ey{}class CM extends Ey{}function D4(n,e,...t){let r=[];e instanceof Ey&&r.push(e),r=r.concat(t),function(l){const c=l.filter(m=>m instanceof Ty).length,f=l.filter(m=>m instanceof Hd).length;if(c>1||c>0&&f>0)throw new ue(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Hd extends CM{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Hd(e,t,r)}_apply(e){const t=this._parse(e);return ZS(e._query,t),new Tl(e.firestore,e.converter,Yg(e._query,t))}_parse(e){const t=Fd(e.firestore);return function(l,c,f,m,g,y,T){let A;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ue(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){oA(T,y);const O=[];for(const G of T)O.push(aA(m,l,G));A={arrayValue:{values:O}}}else A=aA(m,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||oA(T,y),A=bM(f,c,T,y==="in"||y==="not-in");return Me.create(g,y,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function x4(n,e,t){const r=e,a=vy("where",n);return Hd._create(a,r,t)}class Ty extends Ey{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ty(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let c=a;const f=l.getFlattenedFilters();for(const m of f)ZS(c,m),c=Yg(c,m)}(e._query,t),new Tl(e.firestore,e.converter,Yg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function aA(n,e,t){if(typeof(t=We(t))=="string"){if(t==="")throw new ue(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wI(e)&&t.indexOf("/")!==-1)throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ge.fromString(t));if(!fe.isDocumentKey(r))throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mc(n,new fe(r))}if(t instanceof an)return mc(n,t._key);throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bd(t)}.`)}function oA(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ZS(n,e){const t=function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class DM{convertValue(e,t="none"){switch(ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Is(e,(a,l)=>{r[a]=this.convertValue(l,t)}),r}convertVectorValue(e){var t,r,a;const l=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[rl].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(c=>ot(c.doubleValue));return new my(l)}convertGeoPoint(e){return new dy(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Cd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(fc(e));default:return null}}convertTimestamp(e){const t=vr(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ge.fromString(e);ge(XI(r));const a=new Ra(r.get(1),r.get(3)),l=new fe(r.popFirst(5));return a.isEqual(t)||fn(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eR extends WS{constructor(e,t,r,a,l,c){super(e,t,r,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Lf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(vy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Lf extends eR{data(e={}){return super.data(e)}}class xM{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Ku(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Lf(this._firestore,this._userDataWriter,r.key,r,new Ku(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(f=>{const m=new Lf(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Ku(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const m=new Lf(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Ku(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),y=c.indexOf(f.doc.key)),{type:OM(f.type),doc:m,oldIndex:g,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function OM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(n){n=Pn(n,an);const e=Pn(n.firestore,Tr);return pM(jd(e),n._key).then(t=>sR(e,n,t))}class nR extends DM{constructor(e){super(),this.firestore=e}convertBytes(e){return new dl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,t)}}function wy(n,e,t){n=Pn(n,an);const r=Pn(n.firestore,Tr),a=JS(n.converter,e,t);return Gd(r,[GS(Fd(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Ft.none())])}function iR(n,e,t,...r){n=Pn(n,an);const a=Pn(n.firestore,Tr),l=Fd(a);let c;return c=typeof(e=We(e))=="string"||e instanceof Vc?$S(l,"updateDoc",n._key,e,t,r):KS(l,"updateDoc",n._key,e),Gd(a,[c.toMutation(n._key,Ft.exists(!0))])}function rR(n){return Gd(Pn(n.firestore,Tr),[new Dc(n._key,Ft.none())])}function O4(n,...e){var t,r,a;n=We(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||sA(e[c])||(l=e[c],c++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(sA(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(r=T.error)===null||r===void 0?void 0:r.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let m,g,y;if(n instanceof an)g=Pn(n.firestore,Tr),y=Rc(n._key.path),m={next:T=>{e[c]&&e[c](sR(g,n,T))},error:e[c+1],complete:e[c+2]};else{const T=Pn(n,Tl);g=Pn(T.firestore,Tr),y=T._query;const A=new nR(g);m={next:R=>{e[c]&&e[c](new xM(g,A,T,R))},error:e[c+1],complete:e[c+2]},RM(n._query)}return function(A,R,O,G){const L=new MS(G),Y=new SS(R,L,O);return A.asyncQueue.enqueueAndForget(async()=>bS(await l_(A),Y)),()=>{L.su(),A.asyncQueue.enqueueAndForget(async()=>IS(await l_(A),Y))}}(jd(g),y,f,m)}function Gd(n,e){return function(r,a){const l=new pr;return r.asyncQueue.enqueueAndForget(async()=>iM(await mM(r),a,l)),l.promise}(jd(n),e)}function sR(n,e,t){const r=t.docs.get(e._key),a=new nR(n);return new eR(n,a,e._key,r,new Ku(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Fd(e)}set(e,t,r){this._verifyNotCommitted();const a=Eg(e,this._firestore),l=JS(a.converter,t,r),c=GS(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,r);return this._mutations.push(c.toMutation(a._key,Ft.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const l=Eg(e,this._firestore);let c;return c=typeof(t=We(t))=="string"||t instanceof Vc?$S(this._dataReader,"WriteBatch.update",l._key,t,r,a):KS(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,Ft.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Eg(e,this._firestore);return this._mutations=this._mutations.concat(new Dc(t._key,Ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ue(Z.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Eg(n,e){if((n=We(n)).firestore!==e)throw new ue(Z.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){return new kc("deleteField")}function c_(){return new gy("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(n){return jd(n=Pn(n,Tr)),new NM(n,e=>Gd(n,e))}(function(e,t=!0){(function(a){yl=a})(Ua),hi(new Wn("firestore",(r,{instanceIdentifier:a,options:l})=>{const c=r.getProvider("app").getImmediate(),f=new Tr(new o2(r.getProvider("auth-internal")),new c2(c,r.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ue(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),yn(j0,q0,e),yn(j0,q0,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="firebasestorage.googleapis.com",oR="storageBucket",VM=2*60*1e3,kM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ei{constructor(e,t,r=0){super(Tg(e),`Firebase Storage: ${t} (${Tg(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tg(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var yt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(yt||(yt={}));function Tg(n){return"storage/"+n}function Ay(){const n="An unknown error occurred, please check the error payload for server response.";return new vt(yt.UNKNOWN,n)}function MM(n){return new vt(yt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function LM(n){return new vt(yt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UM(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new vt(yt.UNAUTHENTICATED,n)}function BM(){return new vt(yt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zM(n){return new vt(yt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jM(){return new vt(yt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qM(){return new vt(yt.CANCELED,"User canceled the upload/download.")}function FM(n){return new vt(yt.INVALID_URL,"Invalid URL '"+n+"'.")}function HM(n){return new vt(yt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function GM(){return new vt(yt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+oR+"' property when initializing the app?")}function KM(){return new vt(yt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $M(){return new vt(yt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QM(n){return new vt(yt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function h_(n){return new vt(yt.INVALID_ARGUMENT,n)}function lR(){return new vt(yt.APP_DELETED,"The Firebase app was deleted.")}function YM(n){return new vt(yt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ec(n,e){return new vt(yt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Bu(n){throw new vt(yt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Nn.makeFromUrl(e,t)}catch{return new Nn(e,"")}if(r.path==="")return r;throw HM(e)}static makeFromUrl(e,t){let r=null;const a="([A-Za-z0-9.\\-_]+)";function l(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+a+c,"i"),m={bucket:1,path:3};function g(oe){oe.path_=decodeURIComponent(oe.path)}const y="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",R=new RegExp(`^https?://${T}/${y}/b/${a}/o${A}`,"i"),O={bucket:1,path:3},G=t===aR?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",Y=new RegExp(`^https?://${G}/${a}/${L}`,"i"),Q=[{regex:f,indices:m,postModify:l},{regex:R,indices:O,postModify:g},{regex:Y,indices:{bucket:1,path:2},postModify:g}];for(let oe=0;oe<Q.length;oe++){const le=Q[oe],pe=le.regex.exec(e);if(pe){const x=pe[le.indices.bucket];let I=pe[le.indices.path];I||(I=""),r=new Nn(x,I),le.postModify(r);break}}if(r==null)throw FM(e);return r}}class XM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WM(n,e,t){let r=1,a=null,l=null,c=!1,f=0;function m(){return f===2}let g=!1;function y(...L){g||(g=!0,e.apply(null,L))}function T(L){a=setTimeout(()=>{a=null,n(R,m())},L)}function A(){l&&clearTimeout(l)}function R(L,...Y){if(g){A();return}if(L){A(),y.call(null,L,...Y);return}if(m()||c){A(),y.call(null,L,...Y);return}r<64&&(r*=2);let Q;f===1?(f=2,Q=0):Q=(r+Math.random())*1e3,T(Q)}let O=!1;function G(L){O||(O=!0,A(),!g&&(a!==null?(L||(f=2),clearTimeout(a),T(0)):L||(f=1)))}return T(0),l=setTimeout(()=>{c=!0,G(!0)},t),G}function ZM(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(n){return n!==void 0}function eL(n){return typeof n=="object"&&!Array.isArray(n)}function by(n){return typeof n=="string"||n instanceof String}function uA(n){return Iy()&&n instanceof Blob}function Iy(){return typeof Blob<"u"}function cA(n,e,t,r){if(r<e)throw h_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw h_(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function uR(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const a=e(r)+"="+e(n[r]);t=t+a+"&"}return t=t.slice(0,-1),t}var Aa;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Aa||(Aa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,t,r,a,l,c,f,m,g,y,T,A=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=T,this.retry=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,O)=>{this.resolve_=R,this.reject_=O,this.start_()})}start_(){const e=(r,a)=>{if(a){r(!1,new yf(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=f=>{const m=f.loaded,g=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const f=l.getErrorCode()===Aa.NO_ERROR,m=l.getStatus();if(!f||tL(m,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===Aa.ABORT;r(!1,new yf(!1,null,y));return}const g=this.successCodes_.indexOf(m)!==-1;r(!0,new yf(g,l))})},t=(r,a)=>{const l=this.resolve_,c=this.reject_,f=a.connection;if(a.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());JM(m)?l(m):l()}catch(m){c(m)}else if(f!==null){const m=Ay();m.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,m)):c(m)}else if(a.canceled){const m=this.appDelete_?lR():qM();c(m)}else{const m=jM();c(m)}};this.canceled_?t(!1,new yf(!1,null,!0)):this.backoffId_=WM(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yf{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function iL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function rL(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sL(n,e){e&&(n["X-Firebase-GMPID"]=e)}function aL(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function oL(n,e,t,r,a,l,c=!0){const f=uR(n.urlParams),m=n.url+f,g=Object.assign({},n.headers);return sL(g,e),iL(g,t),rL(g,l),aL(g,r),new nL(m,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function uL(...n){const e=lL();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Iy())return new Blob(n);throw new vt(yt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function cL(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(n){if(typeof atob>"u")throw QM("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wg{constructor(e,t){this.data=e,this.contentType=t||null}}function fL(n,e){switch(n){case Mi.RAW:return new wg(cR(e));case Mi.BASE64:case Mi.BASE64URL:return new wg(hR(n,e));case Mi.DATA_URL:return new wg(mL(e),pL(e))}throw Ay()}function cR(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=r,c=n.charCodeAt(++t);r=65536|(l&1023)<<10|c&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function dL(n){let e;try{e=decodeURIComponent(n)}catch{throw ec(Mi.DATA_URL,"Malformed data URL.")}return cR(e)}function hR(n,e){switch(n){case Mi.BASE64:{const a=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(a||l)throw ec(n,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case Mi.BASE64URL:{const a=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(a||l)throw ec(n,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=hL(e)}catch(a){throw a.message.includes("polyfill")?a:ec(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}class fR{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ec(Mi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=gL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mL(n){const e=new fR(n);return e.base64?hR(Mi.BASE64,e.rest):dL(e.rest)}function pL(n){return new fR(n).contentType}function gL(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){let r=0,a="";uA(e)?(this.data_=e,r=e.size,a=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=a}size(){return this.size_}type(){return this.type_}slice(e,t){if(uA(this.data_)){const r=this.data_,a=cL(r,e,t);return a===null?null:new us(a)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new us(r,!0)}}static getBlob(...e){if(Iy()){const t=e.map(r=>r instanceof us?r.data_:r);return new us(uL.apply(null,t))}else{const t=e.map(c=>by(c)?fL(Mi.RAW,c).data:c.data_);let r=0;t.forEach(c=>{r+=c.byteLength});const a=new Uint8Array(r);let l=0;return t.forEach(c=>{for(let f=0;f<c.length;f++)a[l++]=c[f]}),new us(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(n){let e;try{e=JSON.parse(n)}catch{return null}return eL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function yL(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function mR(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(n,e){return e}class hn{constructor(e,t,r,a){this.server=e,this.local=t||e,this.writable=!!r,this.xform=a||vL}}let vf=null;function EL(n){return!by(n)||n.length<2?n:mR(n)}function pR(){if(vf)return vf;const n=[];n.push(new hn("bucket")),n.push(new hn("generation")),n.push(new hn("metageneration")),n.push(new hn("name","fullPath",!0));function e(l,c){return EL(c)}const t=new hn("name");t.xform=e,n.push(t);function r(l,c){return c!==void 0?Number(c):c}const a=new hn("size");return a.xform=r,n.push(a),n.push(new hn("timeCreated")),n.push(new hn("updated")),n.push(new hn("md5Hash",null,!0)),n.push(new hn("cacheControl",null,!0)),n.push(new hn("contentDisposition",null,!0)),n.push(new hn("contentEncoding",null,!0)),n.push(new hn("contentLanguage",null,!0)),n.push(new hn("contentType",null,!0)),n.push(new hn("metadata","customMetadata",!0)),vf=n,vf}function TL(n,e){function t(){const r=n.bucket,a=n.fullPath,l=new Nn(r,a);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function wL(n,e,t){const r={};r.type="file";const a=t.length;for(let l=0;l<a;l++){const c=t[l];r[c.local]=c.xform(r,e[c.server])}return TL(r,n),r}function gR(n,e,t){const r=dR(e);return r===null?null:wL(n,r,t)}function AL(n,e,t,r){const a=dR(e);if(a===null||!by(a.downloadTokens))return null;const l=a.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(g=>{const y=n.bucket,T=n.fullPath,A="/b/"+c(y)+"/o/"+c(T),R=Kd(A,t,r),O=uR({alt:"media",token:g});return R+O})[0]}function bL(n,e){const t={},r=e.length;for(let a=0;a<r;a++){const l=e[a];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class Sy{constructor(e,t,r,a){this.url=e,this.method=t,this.handler=r,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(n){if(!n)throw Ay()}function IL(n,e){function t(r,a){const l=gR(n,a,e);return _R(l!==null),l}return t}function SL(n,e){function t(r,a){const l=gR(n,a,e);return _R(l!==null),AL(l,a,n.host,n._protocol)}return t}function yR(n){function e(t,r){let a;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?a=BM():a=UM():t.getStatus()===402?a=LM(n.bucket):t.getStatus()===403?a=zM(n.path):a=r,a.status=t.getStatus(),a.serverResponse=r.serverResponse,a}return e}function vR(n){const e=yR(n);function t(r,a){let l=e(r,a);return r.getStatus()===404&&(l=MM(n.path)),l.serverResponse=a.serverResponse,l}return t}function RL(n,e,t){const r=e.fullServerUrl(),a=Kd(r,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,f=new Sy(a,l,SL(n,t),c);return f.errorHandler=vR(e),f}function CL(n,e){const t=e.fullServerUrl(),r=Kd(t,n.host,n._protocol),a="DELETE",l=n.maxOperationRetryTime;function c(m,g){}const f=new Sy(r,a,c,l);return f.successCodes=[200,204],f.errorHandler=vR(e),f}function DL(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function xL(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=DL(null,e)),r}function OL(n,e,t,r,a){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function f(){let Q="";for(let oe=0;oe<2;oe++)Q=Q+Math.random().toString().slice(2);return Q}const m=f();c["Content-Type"]="multipart/related; boundary="+m;const g=xL(e,r,a),y=bL(g,t),T="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+m+`\r
Content-Type: `+g.contentType+`\r
\r
`,A=`\r
--`+m+"--",R=us.getBlob(T,r,A);if(R===null)throw KM();const O={name:g.fullPath},G=Kd(l,n.host,n._protocol),L="POST",Y=n.maxUploadRetryTime,te=new Sy(G,L,IL(n,t),Y);return te.urlParams=O,te.headers=c,te.body=R.uploadData(),te.errorHandler=yR(e),te}class NL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Aa.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Aa.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Aa.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,a){if(this.sent_)throw Bu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),a!==void 0)for(const l in a)a.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,a[l].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PL extends NL{initXhr(){this.xhr_.responseType="text"}}function Ry(){return new PL}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this._service=e,t instanceof Nn?this._location=t:this._location=Nn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Pa(e,t)}get root(){const e=new Nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mR(this._location.path)}get storage(){return this._service}get parent(){const e=_L(this._location.path);if(e===null)return null;const t=new Nn(this._location.bucket,e);return new Pa(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw YM(e)}}function VL(n,e,t){n._throwIfRoot("uploadBytes");const r=OL(n.storage,n._location,pR(),new us(e,!0),t);return n.storage.makeRequestWithTokens(r,Ry).then(a=>({metadata:a,ref:n}))}function kL(n){n._throwIfRoot("getDownloadURL");const e=RL(n.storage,n._location,pR());return n.storage.makeRequestWithTokens(e,Ry).then(t=>{if(t===null)throw $M();return t})}function ML(n){n._throwIfRoot("deleteObject");const e=CL(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Ry)}function LL(n,e){const t=yL(n._location.path,e),r=new Nn(n._location.bucket,t);return new Pa(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(n){return/^[A-Za-z]+:\/\//.test(n)}function BL(n,e){return new Pa(n,e)}function ER(n,e){if(n instanceof Cy){const t=n;if(t._bucket==null)throw GM();const r=new Pa(t,t._bucket);return e!=null?ER(r,e):r}else return e!==void 0?LL(n,e):n}function zL(n,e){if(e&&UL(e)){if(n instanceof Cy)return BL(n,e);throw h_("To use ref(service, url), the first argument must be a Storage instance.")}else return ER(n,e)}function hA(n,e){const t=e==null?void 0:e[oR];return t==null?null:Nn.makeFromBucketSpec(t,n)}function jL(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:$A(a,n.app.options.projectId))}class Cy{constructor(e,t,r,a,l){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=a,this._firebaseVersion=l,this._bucket=null,this._host=aR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VM,this._maxUploadRetryTime=kM,this._requests=new Set,a!=null?this._bucket=Nn.makeFromBucketSpec(a,this._host):this._bucket=hA(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nn.makeFromBucketSpec(this._url,e):this._bucket=hA(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cA("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cA("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pa(this,e)}_makeRequest(e,t,r,a,l=!0){if(this._deleted)return new XM(lR());{const c=oL(e,this._appId,r,a,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[r,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,a).getPromise()}}const fA="@firebase/storage",dA="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="storage";function wR(n,e,t){return n=We(n),VL(n,e,t)}function AR(n){return n=We(n),kL(n)}function qL(n){return n=We(n),ML(n)}function bR(n,e){return n=We(n),zL(n,e)}function FL(n=yd(),e){n=We(n);const r=ws(n,TR).getImmediate({identifier:e}),a=HA("storage");return a&&HL(r,...a),r}function HL(n,e,t,r={}){jL(n,e,t,r)}function GL(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new Cy(t,r,a,e,Ua)}function KL(){hi(new Wn(TR,GL,"PUBLIC").setMultipleInstances(!0)),yn(fA,dA,""),yn(fA,dA,"esm2017")}KL();const IR="@firebase/installations",Dy="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=1e4,RR=`w:${Dy}`,CR="FIS_v2",$L="https://firebaseinstallations.googleapis.com/v1",QL=60*60*1e3,YL="installations",XL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Va=new La(YL,XL,WL);function DR(n){return n instanceof ei&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR({projectId:n}){return`${$L}/projects/${n}/installations`}function OR(n){return{token:n.token,requestStatus:2,expiresIn:JL(n.expiresIn),creationTime:Date.now()}}async function NR(n,e){const r=(await e.json()).error;return Va.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function PR({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ZL(n,{refreshToken:e}){const t=PR(n);return t.append("Authorization",eU(e)),t}async function VR(n){const e=await n();return e.status>=500&&e.status<600?n():e}function JL(n){return Number(n.replace("s","000"))}function eU(n){return`${CR} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tU({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=xR(n),a=PR(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={fid:t,authVersion:CR,appId:n.appId,sdkVersion:RR},f={method:"POST",headers:a,body:JSON.stringify(c)},m=await VR(()=>fetch(r,f));if(m.ok){const g=await m.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:OR(g.authToken)}}else throw await NR("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nU(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU=/^[cdef][\w-]{21}$/,f_="";function rU(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=sU(n);return iU.test(t)?t:f_}catch{return f_}}function sU(n){return nU(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=new Map;function LR(n,e){const t=$d(n);UR(t,e),aU(t,e)}function UR(n,e){const t=MR.get(n);if(t)for(const r of t)r(e)}function aU(n,e){const t=oU();t&&t.postMessage({key:n,fid:e}),lU()}let va=null;function oU(){return!va&&"BroadcastChannel"in self&&(va=new BroadcastChannel("[Firebase] FID Change"),va.onmessage=n=>{UR(n.data.key,n.data.fid)}),va}function lU(){MR.size===0&&va&&(va.close(),va=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uU="firebase-installations-database",cU=1,ka="firebase-installations-store";let Ag=null;function xy(){return Ag||(Ag=JA(uU,cU,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ka)}}})),Ag}async function fd(n,e){const t=$d(n),a=(await xy()).transaction(ka,"readwrite"),l=a.objectStore(ka),c=await l.get(t);return await l.put(e,t),await a.done,(!c||c.fid!==e.fid)&&LR(n,e.fid),e}async function BR(n){const e=$d(n),r=(await xy()).transaction(ka,"readwrite");await r.objectStore(ka).delete(e),await r.done}async function Qd(n,e){const t=$d(n),a=(await xy()).transaction(ka,"readwrite"),l=a.objectStore(ka),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await a.done,f&&(!c||c.fid!==f.fid)&&LR(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(n){let e;const t=await Qd(n.appConfig,r=>{const a=hU(r),l=fU(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===f_?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function hU(n){const e=n||{fid:rU(),registrationStatus:0};return zR(e)}function fU(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Va.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=dU(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mU(n)}:{installationEntry:e}}async function dU(n,e){try{const t=await tU(n,e);return fd(n.appConfig,t)}catch(t){throw DR(t)&&t.customData.serverCode===409?await BR(n.appConfig):await fd(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function mU(n){let e=await mA(n.appConfig);for(;e.registrationStatus===1;)await kR(100),e=await mA(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Oy(n);return r||t}return e}function mA(n){return Qd(n,e=>{if(!e)throw Va.create("installation-not-found");return zR(e)})}function zR(n){return pU(n)?{fid:n.fid,registrationStatus:0}:n}function pU(n){return n.registrationStatus===1&&n.registrationTime+SR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gU({appConfig:n,heartbeatServiceProvider:e},t){const r=_U(n,t),a=ZL(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={installation:{sdkVersion:RR,appId:n.appId}},f={method:"POST",headers:a,body:JSON.stringify(c)},m=await VR(()=>fetch(r,f));if(m.ok){const g=await m.json();return OR(g)}else throw await NR("Generate Auth Token",m)}function _U(n,{fid:e}){return`${xR(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(n,e=!1){let t;const r=await Qd(n.appConfig,l=>{if(!jR(l))throw Va.create("not-registered");const c=l.authToken;if(!e&&EU(c))return l;if(c.requestStatus===1)return t=yU(n,e),l;{if(!navigator.onLine)throw Va.create("app-offline");const f=wU(l);return t=vU(n,f),f}});return t?await t:r.authToken}async function yU(n,e){let t=await pA(n.appConfig);for(;t.authToken.requestStatus===1;)await kR(100),t=await pA(n.appConfig);const r=t.authToken;return r.requestStatus===0?Ny(n,e):r}function pA(n){return Qd(n,e=>{if(!jR(e))throw Va.create("not-registered");const t=e.authToken;return AU(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function vU(n,e){try{const t=await gU(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await fd(n.appConfig,r),t}catch(t){if(DR(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await BR(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fd(n.appConfig,r)}throw t}}function jR(n){return n!==void 0&&n.registrationStatus===2}function EU(n){return n.requestStatus===2&&!TU(n)}function TU(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+QL}function wU(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function AU(n){return n.requestStatus===1&&n.requestTime+SR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bU(n){const e=n,{installationEntry:t,registrationPromise:r}=await Oy(e);return r?r.catch(console.error):Ny(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IU(n,e=!1){const t=n;return await SU(t),(await Ny(t,e)).token}async function SU(n){const{registrationPromise:e}=await Oy(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RU(n){if(!n||!n.options)throw bg("App Configuration");if(!n.name)throw bg("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw bg(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function bg(n){return Va.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="installations",CU="installations-internal",DU=n=>{const e=n.getProvider("app").getImmediate(),t=RU(e),r=ws(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xU=n=>{const e=n.getProvider("app").getImmediate(),t=ws(e,qR).getImmediate();return{getId:()=>bU(t),getToken:a=>IU(t,a)}};function OU(){hi(new Wn(qR,DU,"PUBLIC")),hi(new Wn(CU,xU,"PRIVATE"))}OU();yn(IR,Dy);yn(IR,Dy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="analytics",NU="firebase_id",PU="origin",VU=60*1e3,kU="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Py="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new _d("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MU={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vn=new La("analytics","Analytics",MU);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LU(n){if(!n.startsWith(Py)){const e=Vn.create("invalid-gtag-resource",{gtagURL:n});return vn.warn(e.message),""}return n}function FR(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function UU(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function BU(n,e){const t=UU("firebase-js-sdk-policy",{createScriptURL:LU}),r=document.createElement("script"),a=`${Py}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function zU(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function jU(n,e,t,r,a,l){const c=r[a];try{if(c)await e[c];else{const m=(await FR(t)).find(g=>g.measurementId===a);m&&await e[m.appId]}}catch(f){vn.error(f)}n("config",a,l)}async function qU(n,e,t,r,a){try{let l=[];if(a&&a.send_to){let c=a.send_to;Array.isArray(c)||(c=[c]);const f=await FR(t);for(const m of c){const g=f.find(T=>T.measurementId===m),y=g&&e[g.appId];if(y)l.push(y);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",r,a||{})}catch(l){vn.error(l)}}function FU(n,e,t,r){async function a(l,...c){try{if(l==="event"){const[f,m]=c;await qU(n,e,t,f,m)}else if(l==="config"){const[f,m]=c;await jU(n,e,t,r,f,m)}else if(l==="consent"){const[f,m]=c;n("consent",f,m)}else if(l==="get"){const[f,m,g]=c;n("get",f,m,g)}else if(l==="set"){const[f]=c;n("set",f)}else n(l,...c)}catch(f){vn.error(f)}}return a}function HU(n,e,t,r,a){let l=function(...c){window[r].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=FU(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function GU(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Py)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KU=30,$U=1e3;class QU{constructor(e={},t=$U){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const HR=new QU;function YU(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function XU(n){var e;const{appId:t,apiKey:r}=n,a={method:"GET",headers:YU(r)},l=kU.replace("{app-id}",t),c=await fetch(l,a);if(c.status!==200&&c.status!==304){let f="";try{const m=await c.json();!((e=m.error)===null||e===void 0)&&e.message&&(f=m.error.message)}catch{}throw Vn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:f})}return c.json()}async function WU(n,e=HR,t){const{appId:r,apiKey:a,measurementId:l}=n.options;if(!r)throw Vn.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:r};throw Vn.create("no-api-key")}const c=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new e4;return setTimeout(async()=>{f.abort()},VU),GR({appId:r,apiKey:a,measurementId:l},c,f,e)}async function GR(n,{throttleEndTimeMillis:e,backoffCount:t},r,a=HR){var l;const{appId:c,measurementId:f}=n;try{await ZU(r,e)}catch(m){if(f)return vn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:f};throw m}try{const m=await XU(n);return a.deleteThrottleMetadata(c),m}catch(m){const g=m;if(!JU(g)){if(a.deleteThrottleMetadata(c),f)return vn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:f};throw m}const y=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?h0(t,a.intervalMillis,KU):h0(t,a.intervalMillis),T={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return a.setThrottleMetadata(c,T),vn.debug(`Calling attemptFetch again in ${y} millis`),GR(n,T,r,a)}}function ZU(n,e){return new Promise((t,r)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),r(Vn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function JU(n){if(!(n instanceof ei)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class e4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function t4(n,e,t,r,a){if(a&&a.global){n("event",t,r);return}else{const l=await e,c=Object.assign(Object.assign({},r),{send_to:l});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n4(){if(T_())try{await XA()}catch(n){return vn.warn(Vn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return vn.warn(Vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function i4(n,e,t,r,a,l,c){var f;const m=WU(n);m.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&vn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>vn.error(R)),e.push(m);const g=n4().then(R=>{if(R)return r.getId()}),[y,T]=await Promise.all([m,g]);GU(l)||BU(l,y.measurementId),a("js",new Date);const A=(f=c==null?void 0:c.config)!==null&&f!==void 0?f:{};return A[PU]="firebase",A.update=!0,T!=null&&(A[NU]=T),a("config",y.measurementId,A),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e){this.app=e}_delete(){return delete tc[this.app.options.appId],Promise.resolve()}}let tc={},gA=[];const _A={};let Ig="dataLayer",s4="gtag",yA,KR,vA=!1;function a4(){const n=[];if(QA()&&n.push("This is a browser extension environment."),Sx()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,a)=>`(${a+1}) ${r}`).join(" "),t=Vn.create("invalid-analytics-context",{errorInfo:e});vn.warn(t.message)}}function o4(n,e,t){a4();const r=n.options.appId;if(!r)throw Vn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)vn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vn.create("no-api-key");if(tc[r]!=null)throw Vn.create("already-exists",{id:r});if(!vA){zU(Ig);const{wrappedGtag:l,gtagCore:c}=HU(tc,gA,_A,Ig,s4);KR=l,yA=c,vA=!0}return tc[r]=i4(n,gA,_A,e,yA,Ig,t),new r4(n)}function l4(n=yd()){n=We(n);const e=ws(n,dd);return e.isInitialized()?e.getImmediate():u4(n)}function u4(n,e={}){const t=ws(n,dd);if(t.isInitialized()){const a=t.getImmediate();if(_s(e,t.getOptions()))return a;throw Vn.create("already-initialized")}return t.initialize({options:e})}function c4(n,e,t,r){n=We(n),t4(KR,tc[n.app.options.appId],e,t,r).catch(a=>vn.error(a))}const EA="@firebase/analytics",TA="0.10.12";function h4(){hi(new Wn(dd,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return o4(r,a,t)},"PUBLIC")),hi(new Wn("analytics-internal",n,"PRIVATE")),yn(EA,TA),yn(EA,TA,"esm2017");function n(e){try{const t=e.getProvider(dd).getImmediate();return{logEvent:(r,a,l)=>c4(t,r,a,l)}}catch(t){throw Vn.create("interop-component-reg-failed",{reason:t})}}}h4();const wA="my-portfolio-2ea55",f4={apiKey:"AIzaSyBD7_roMn5sLR-yyyDYQLjEUw5gCRQS9yc",authDomain:`${wA}.firebaseapp.com`,databaseURL:"https://my-portfolio-2ea55-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:wA,storageBucket:"my-portfolio-2ea55.firebasestorage.app",messagingSenderId:"292379709314",appId:"1:292379709314:web:1b9e8dd734233c4251899b",measurementId:"G-BJ42JE7LGM"},Yd=eb(f4);let AA;try{AA=l4(Yd)}catch{AA=null}const Vy=i2(Yd),fi=yM(Yd),$R=FL(Yd),Xd=async(n,e)=>{const t=bR($R,n),r=await wR(t,e);return{downloadURL:await AR(r.ref),storageRef:r.ref}},Wd=async n=>{if(n)try{await qL(n)}catch{}},Zd=n=>Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0));GN(Vy,Sb).catch(n=>{});try{vM(fi).catch(n=>{n.code==="failed-precondition"||n.code})}catch{}const QR="KtZLKuzl56QzPLiFVRVfovWVapz2",Ef=new Map,d4=async()=>{const n=Vy.currentUser;if(!(!n||n.uid!==QR))try{const e=br(fi,"admins",n.uid);(await tR(e)).exists()||await wy(e,{email:n.email,role:"admin",createdAt:new Date().toISOString(),photoURL:n.photoURL||null,displayName:n.displayName||null,special:!0})}catch{}},m4=async n=>{if(n===QR)return await d4(),Ef.set(n,!0),!0;if(Ef.has(n))return Ef.get(n)||!1;try{const t=(await tR(br(fi,"admins",n))).exists();return Ef.set(n,t),t}catch{return!1}},N4=async(n,e)=>{const t=br(jS(fi,"blogPosts"));let r=null;try{const a=t.id;let l=n.image;if(e){const f=await Xd(`images/blog/${a}/${Date.now()}_${e.name}`,e);l=f.downloadURL,r=f.storageRef}const c={...n,...l?{image:l}:{},createdAt:n.createdAt||c_(),updatedAt:n.updatedAt||c_(),tags:n.tags||[]};return await wy(t,Zd(c)),a}catch(a){throw await Wd(r),a}},P4=async(n,e,t)=>{let r=null;try{const a={...e,updatedAt:c_()};if(t){const l=await Xd(`images/blog/${n}/${Date.now()}_${t.name}`,t);a.image=l.downloadURL,r=l.storageRef}return await iR(br(fi,"blogPosts",n),Zd(a)),!0}catch(a){throw await Wd(r),a}},V4=async n=>{try{return await rR(br(fi,"blogPosts",n)),!0}catch(e){throw e}},k4=async(n,e)=>{const t=br(jS(fi,"portfolioProjects"));let r=null;try{const a=t.id;let l=n.imageUrl||"";if(e){const f=await Xd(`images/portfolio/${a}/${Date.now()}_${e.name}`,e);l=f.downloadURL,r=f.storageRef}const c={...n,imageUrl:l,technologies:n.technologies||[],featured:n.featured||!1,isPrivate:n.isPrivate||!1,createdAt:n.createdAt||new Date().toISOString(),updatedAt:n.updatedAt||new Date().toISOString()};return await wy(t,Zd(c)),a}catch(a){throw await Wd(r),a}},M4=async(n,e,t)=>{var a;let r=null;try{const l={...e,link:(a=e.link)!=null&&a.trim()?e.link:lA(),featuredOrder:e.featured===!1?lA():e.featuredOrder,updatedAt:new Date().toISOString()};if(t){const c=await Xd(`images/portfolio/${n}/${Date.now()}_${t.name}`,t);l.imageUrl=c.downloadURL,r=c.storageRef}return await iR(br(fi,"portfolioProjects",n),Zd(l)),!0}catch(l){throw await Wd(r),l}},L4=async n=>{const e=PM(fi),t=new Date().toISOString();n.forEach((r,a)=>{e.update(br(fi,"portfolioProjects",r),{featuredOrder:a+1,updatedAt:t})}),await e.commit()},U4=async n=>{try{return await rR(br(fi,"portfolioProjects",n)),!0}catch(e){throw e}},B4=async(n,e)=>{const t=[];for(const r of n){const a=bR($R,`images/blog/${e}/content_${Date.now()}_${r.name}`);await wR(a,r);const l=await AR(a);t.push(l)}return t},bA=({children:n})=>{const[e,t]=$.useState(!0),[r,a]=$.useState(null),[l,c]=$.useState(!1);return $.useEffect(()=>{const f=QN(Vy,async m=>{a(m);try{if(m){const g=await m4(m.uid);c(g)}else c(!1)}catch{c(!1)}finally{t(!1)}});return()=>f()},[]),e?re.jsx("div",{className:"flex justify-center items-center min-h-screen",children:re.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"})}):r?l?re.jsx(re.Fragment,{children:n}):re.jsx(Rg,{to:"/",replace:!0}):re.jsx(Rg,{to:"/login",replace:!0})},p4=$.lazy(()=>Ma(()=>import("./Home-DmyKzC6Q.js"),__vite__mapDeps([0,1,2]))),g4=$.lazy(()=>Ma(()=>import("./Portfolio-g2FmFNdO.js"),__vite__mapDeps([3,4,1,2]))),_4=$.lazy(()=>Ma(()=>import("./PortfolioDetail-Dmd2H4hF.js"),__vite__mapDeps([5,1,2]))),y4=$.lazy(()=>Ma(()=>import("./Blog-rmFmRB8y.js"),__vite__mapDeps([6,7,1,2,8]))),v4=$.lazy(()=>Ma(()=>import("./BlogDetail-CExArYEZ.js"),__vite__mapDeps([9,7,1,2,8,10]))),E4=$.lazy(()=>Ma(()=>import("./Login-CvyCrSMm.js"),[])),T4=$.lazy(()=>Ma(()=>import("./AdminRoute-B6TsUpW4.js"),__vite__mapDeps([11,4,8,10,1]))),w4=()=>re.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:re.jsx(hx,{})}),A4=()=>re.jsx($D,{children:re.jsx($.Suspense,{fallback:re.jsx(w4,{}),children:re.jsx(AD,{children:re.jsxs(Ni,{path:"/",element:re.jsx(cx,{}),children:[re.jsx(Ni,{index:!0,element:re.jsx(p4,{})}),re.jsx(Ni,{path:"portfolio",element:re.jsx(g4,{})}),re.jsx(Ni,{path:"portfolio/:id",element:re.jsx(_4,{})}),re.jsx(Ni,{path:"blog",element:re.jsx(bA,{children:re.jsx(y4,{})})}),re.jsx(Ni,{path:"blog/:id",element:re.jsx(bA,{children:re.jsx(v4,{})})}),re.jsx(Ni,{path:"login",element:re.jsx(E4,{})}),re.jsx(Ni,{path:"admin",element:re.jsx(T4,{})}),re.jsx(Ni,{path:"*",element:re.jsx(Rg,{to:"/",replace:!0})})]})})})});document.documentElement.classList.add("dark");CC.createRoot(document.getElementById("root")).render(re.jsx($.StrictMode,{children:re.jsx(A4,{})}));export{hx as A,ss as G,Wo as L,bA as P,ft as T,br as a,NA as b,jS as c,fi as d,QN as e,Vy as f,tR as g,S4 as h,m4 as i,re as j,R4 as k,B4 as l,yM as m,N4 as n,O4 as o,P4 as p,D4 as q,$ as r,I4 as s,V4 as t,b4 as u,k4 as v,x4 as w,M4 as x,U4 as y,L4 as z};
