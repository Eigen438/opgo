const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DXWnO_nj.js","./C8i7r5mt.js","./error-404.4oxyXxx0.css","./T5PkGwFL.js","./error-500.CZqNkBuR.css"])))=>i.map(i=>d[i]);
var Su=Object.defineProperty;var Cu=(t,e,n)=>e in t?Su(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ct=(t,e,n)=>Cu(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ui(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const te={},Jt=[],qe=()=>{},Ru=()=>!1,Wn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fi=t=>t.startsWith("onUpdate:"),ge=Object.assign,di=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Au=Object.prototype.hasOwnProperty,Q=(t,e)=>Au.call(t,e),W=Array.isArray,Yt=t=>$r(t)==="[object Map]",Ua=t=>$r(t)==="[object Set]",B=t=>typeof t=="function",oe=t=>typeof t=="string",It=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Ha=t=>(ie(t)||B(t))&&B(t.then)&&B(t.catch),Fa=Object.prototype.toString,$r=t=>Fa.call(t),Pu=t=>$r(t).slice(8,-1),ja=t=>$r(t)==="[object Object]",hi=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xt=ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ku=/-(\w)/g,Me=Wr(t=>t.replace(ku,(e,n)=>n?n.toUpperCase():"")),Ou=/\B([A-Z])/g,Ht=Wr(t=>t.replace(Ou,"-$1").toLowerCase()),Vr=Wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),as=Wr(t=>t?`on${Vr(t)}`:""),yt=(t,e)=>!Object.is(t,e),fr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ba=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Os=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Mu=t=>{const e=oe(t)?Number(t):NaN;return isNaN(e)?t:e};let io;const Kr=()=>io||(io=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?xu(r):qr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(oe(t)||ie(t))return t}const Nu=/;(?![^(]*\))/g,Lu=/:([^]+)/,Du=/\/\*[^]*?\*\//g;function xu(t){const e={};return t.replace(Du,"").split(Nu).forEach(n=>{if(n){const r=n.split(Lu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gr(t){let e="";if(oe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=Gr(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Uu(t){if(!t)return null;let{class:e,style:n}=t;return e&&!oe(e)&&(t.class=Gr(e)),n&&(t.style=qr(n)),t}const Hu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fu=ui(Hu);function $a(t){return!!t||t===""}const Wa=t=>!!(t&&t.__v_isRef===!0),Va=t=>oe(t)?t:t==null?"":W(t)||ie(t)&&(t.toString===Fa||!B(t.toString))?Wa(t)?Va(t.value):JSON.stringify(t,Ka,2):String(t),Ka=(t,e)=>Wa(e)?Ka(t,e.value):Yt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[cs(r,i)+" =>"]=s,n),{})}:Ua(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cs(n))}:It(e)?cs(e):ie(e)&&!W(e)&&!ja(e)?String(e):e,cs=(t,e="")=>{var n;return It(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class qa{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){this._on>0&&--this._on===0&&(Ee=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ju(t){return new qa(t)}function Ga(){return Ee}let re;const ls=new WeakSet;class za{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ls.has(this)&&(ls.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ya(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oo(this),Xa(this);const e=re,n=Ue;re=this,Ue=!0;try{return this.fn()}finally{Qa(this),re=e,Ue=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mi(e);this.deps=this.depsTail=void 0,oo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ls.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ms(this)&&this.run()}get dirty(){return Ms(this)}}let Ja=0,Sn,Cn;function Ya(t,e=!1){if(t.flags|=8,e){t.next=Cn,Cn=t;return}t.next=Sn,Sn=t}function pi(){Ja++}function gi(){if(--Ja>0)return;if(Cn){let e=Cn;for(Cn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Sn;){let e=Sn;for(Sn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Xa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qa(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),mi(r),Bu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ms(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Za(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Za(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mn)||(t.globalVersion=Mn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ms(t))))return;t.flags|=2;const e=t.dep,n=re,r=Ue;re=t,Ue=!0;try{Xa(t);const s=t.fn(t._value);(e.version===0||yt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{re=n,Ue=r,Qa(t),t.flags&=-3}}function mi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)mi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Bu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ue=!0;const ec=[];function nt(){ec.push(Ue),Ue=!1}function rt(){const t=ec.pop();Ue=t===void 0?!0:t}function oo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Mn=0;class $u{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _i{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!Ue||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new $u(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,tc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=r)}return n}trigger(e){this.version++,Mn++,this.notify(e)}notify(e){pi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gi()}}}function tc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)tc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const wr=new WeakMap,Nt=Symbol(""),Ns=Symbol(""),Nn=Symbol("");function pe(t,e,n){if(Ue&&re){let r=wr.get(t);r||wr.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new _i),s.map=r,s.key=n),s.track()}}function Qe(t,e,n,r,s,i){const o=wr.get(t);if(!o){Mn++;return}const a=c=>{c&&c.trigger()};if(pi(),e==="clear")o.forEach(a);else{const c=W(t),u=c&&hi(n);if(c&&n==="length"){const l=Number(r);o.forEach((f,d)=>{(d==="length"||d===Nn||!It(d)&&d>=l)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Nn)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Nt)),Yt(t)&&a(o.get(Ns)));break;case"delete":c||(a(o.get(Nt)),Yt(t)&&a(o.get(Ns)));break;case"set":Yt(t)&&a(o.get(Nt));break}}gi()}function Wu(t,e){const n=wr.get(t);return n&&n.get(e)}function $t(t){const e=Y(t);return e===t?e:(pe(e,"iterate",Nn),He(t)?e:e.map(ye))}function yi(t){return pe(t=Y(t),"iterate",Nn),t}const Vu={__proto__:null,[Symbol.iterator](){return us(this,Symbol.iterator,ye)},concat(...t){return $t(this).concat(...t.map(e=>W(e)?$t(e):e))},entries(){return us(this,"entries",t=>(t[1]=ye(t[1]),t))},every(t,e){return Ye(this,"every",t,e,void 0,arguments)},filter(t,e){return Ye(this,"filter",t,e,n=>n.map(ye),arguments)},find(t,e){return Ye(this,"find",t,e,ye,arguments)},findIndex(t,e){return Ye(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ye(this,"findLast",t,e,ye,arguments)},findLastIndex(t,e){return Ye(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ye(this,"forEach",t,e,void 0,arguments)},includes(...t){return fs(this,"includes",t)},indexOf(...t){return fs(this,"indexOf",t)},join(t){return $t(this).join(t)},lastIndexOf(...t){return fs(this,"lastIndexOf",t)},map(t,e){return Ye(this,"map",t,e,void 0,arguments)},pop(){return vn(this,"pop")},push(...t){return vn(this,"push",t)},reduce(t,...e){return ao(this,"reduce",t,e)},reduceRight(t,...e){return ao(this,"reduceRight",t,e)},shift(){return vn(this,"shift")},some(t,e){return Ye(this,"some",t,e,void 0,arguments)},splice(...t){return vn(this,"splice",t)},toReversed(){return $t(this).toReversed()},toSorted(t){return $t(this).toSorted(t)},toSpliced(...t){return $t(this).toSpliced(...t)},unshift(...t){return vn(this,"unshift",t)},values(){return us(this,"values",ye)}};function us(t,e,n){const r=yi(t),s=r[e]();return r!==t&&!He(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ku=Array.prototype;function Ye(t,e,n,r,s,i){const o=yi(t),a=o!==t&&!He(t),c=o[e];if(c!==Ku[e]){const f=c.apply(t,i);return a?ye(f):f}let u=n;o!==t&&(a?u=function(f,d){return n.call(this,ye(f),d,t)}:n.length>2&&(u=function(f,d){return n.call(this,f,d,t)}));const l=c.call(o,u,r);return a&&s?s(l):l}function ao(t,e,n,r){const s=yi(t);let i=n;return s!==t&&(He(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,ye(a),c,t)}),s[e](i,...r)}function fs(t,e,n){const r=Y(t);pe(r,"iterate",Nn);const s=r[e](...n);return(s===-1||s===!1)&&wi(n[0])?(n[0]=Y(n[0]),r[e](...n)):s}function vn(t,e,n=[]){nt(),pi();const r=Y(t)[e].apply(t,n);return gi(),rt(),r}const qu=ui("__proto__,__v_isRef,__isVue"),nc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(It));function Gu(t){It(t)||(t=String(t));const e=Y(this);return pe(e,"has",t),e.hasOwnProperty(t)}class rc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?rf:ac:i?oc:ic).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=W(e);if(!s){let c;if(o&&(c=Vu[n]))return c;if(n==="hasOwnProperty")return Gu}const a=Reflect.get(e,n,ce(e)?e:r);return(It(n)?nc.has(n):qu(n))||(s||pe(e,"get",n),i)?a:ce(a)?o&&hi(n)?a:a.value:ie(a)?s?cc(a):st(a):a}}class sc extends rc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Et(i);if(!He(r)&&!Et(r)&&(i=Y(i),r=Y(r)),!W(e)&&ce(i)&&!ce(r))return c?!1:(i.value=r,!0)}const o=W(e)&&hi(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,r,ce(e)?e:s);return e===Y(s)&&(o?yt(r,i)&&Qe(e,"set",n,r):Qe(e,"add",n,r)),a}deleteProperty(e,n){const r=Q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Qe(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!It(n)||!nc.has(n))&&pe(e,"has",n),r}ownKeys(e){return pe(e,"iterate",W(e)?"length":Nt),Reflect.ownKeys(e)}}class zu extends rc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ju=new sc,Yu=new zu,Xu=new sc(!0);const Ls=t=>t,er=t=>Reflect.getPrototypeOf(t);function Qu(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=Yt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Ls:e?Ds:ye;return!e&&pe(i,"iterate",c?Ns:Nt),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[l(f[0]),l(f[1])]:l(f),done:d}},[Symbol.iterator](){return this}}}}function tr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zu(t,e){const n={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);t||(yt(s,a)&&pe(o,"get",s),pe(o,"get",a));const{has:c}=er(o),u=e?Ls:t?Ds:ye;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pe(Y(s),"iterate",Nt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return t||(yt(s,a)&&pe(o,"has",s),pe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),u=e?Ls:t?Ds:ye;return!t&&pe(c,"iterate",Nt),a.forEach((l,f)=>s.call(i,u(l),u(f),o))}};return ge(n,t?{add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear")}:{add(s){!e&&!He(s)&&!Et(s)&&(s=Y(s));const i=Y(this);return er(i).has.call(i,s)||(i.add(s),Qe(i,"add",s,s)),this},set(s,i){!e&&!He(i)&&!Et(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=er(o);let u=a.call(o,s);u||(s=Y(s),u=a.call(o,s));const l=c.call(o,s);return o.set(s,i),u?yt(i,l)&&Qe(o,"set",s,i):Qe(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=er(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Qe(i,"delete",s,void 0),u},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&Qe(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Qu(s,t,e)}),n}function bi(t,e){const n=Zu(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const ef={get:bi(!1,!1)},tf={get:bi(!1,!0)},nf={get:bi(!0,!1)};const ic=new WeakMap,oc=new WeakMap,ac=new WeakMap,rf=new WeakMap;function sf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function of(t){return t.__v_skip||!Object.isExtensible(t)?0:sf(Pu(t))}function st(t){return Et(t)?t:vi(t,!1,Ju,ef,ic)}function qt(t){return vi(t,!1,Xu,tf,oc)}function cc(t){return vi(t,!0,Yu,nf,ac)}function vi(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=of(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Qt(t){return Et(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function Et(t){return!!(t&&t.__v_isReadonly)}function He(t){return!!(t&&t.__v_isShallow)}function wi(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function af(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&Ba(t,"__v_skip",!0),t}const ye=t=>ie(t)?st(t):t,Ds=t=>ie(t)?cc(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function De(t){return lc(t,!1)}function co(t){return lc(t,!0)}function lc(t,e){return ce(t)?t:new cf(t,e)}class cf{constructor(e,n){this.dep=new _i,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:ye(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||He(e)||Et(e);e=r?e:Y(e),yt(e,n)&&(this._rawValue=e,this._value=r?e:ye(e),this.dep.trigger())}}function se(t){return ce(t)?t.value:t}function lf(t){return B(t)?t():se(t)}const uf={get:(t,e,n)=>e==="__v_raw"?t:se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function uc(t){return Qt(t)?t:new Proxy(t,uf)}class ff{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Wu(Y(this._object),this._key)}}class df{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function hf(t,e,n){return ce(t)?t:B(t)?new df(t):ie(t)&&arguments.length>1?pf(t,e,n):De(t)}function pf(t,e,n){const r=t[e];return ce(r)?r:new ff(t,e,n)}class gf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new _i(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return Ya(this,!0),!0}get value(){const e=this.dep.track();return Za(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mf(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new gf(r,s,n)}const nr={},Er=new WeakMap;let kt;function _f(t,e=!1,n=kt){if(n){let r=Er.get(n);r||Er.set(n,r=[]),r.push(t)}}function yf(t,e,n=te){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=b=>s?b:He(b)||s===!1||s===0?Ze(b,1):Ze(b);let l,f,d,y,m=!1,g=!1;if(ce(t)?(f=()=>t.value,m=He(t)):Qt(t)?(f=()=>u(t),m=!0):W(t)?(g=!0,m=t.some(b=>Qt(b)||He(b)),f=()=>t.map(b=>{if(ce(b))return b.value;if(Qt(b))return u(b);if(B(b))return c?c(b,2):b()})):B(t)?e?f=c?()=>c(t,2):t:f=()=>{if(d){nt();try{d()}finally{rt()}}const b=kt;kt=l;try{return c?c(t,3,[y]):t(y)}finally{kt=b}}:f=qe,e&&s){const b=f,w=s===!0?1/0:s;f=()=>Ze(b(),w)}const E=Ga(),T=()=>{l.stop(),E&&E.active&&di(E.effects,l)};if(i&&e){const b=e;e=(...w)=>{b(...w),T()}}let P=g?new Array(t.length).fill(nr):nr;const _=b=>{if(!(!(l.flags&1)||!l.dirty&&!b))if(e){const w=l.run();if(s||m||(g?w.some((N,F)=>yt(N,P[F])):yt(w,P))){d&&d();const N=kt;kt=l;try{const F=[w,P===nr?void 0:g&&P[0]===nr?[]:P,y];c?c(e,3,F):e(...F),P=w}finally{kt=N}}}else l.run()};return a&&a(_),l=new za(f),l.scheduler=o?()=>o(_,!1):_,y=b=>_f(b,!1,l),d=l.onStop=()=>{const b=Er.get(l);if(b){if(c)c(b,4);else for(const w of b)w();Er.delete(l)}},e?r?_(!0):P=l.run():o?o(_.bind(null,!0),!0):l.run(),T.pause=l.pause.bind(l),T.resume=l.resume.bind(l),T.stop=T,T}function Ze(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))Ze(t.value,e,n);else if(W(t))for(let r=0;r<t.length;r++)Ze(t[r],e,n);else if(Ua(t)||Yt(t))t.forEach(r=>{Ze(r,e,n)});else if(ja(t)){for(const r in t)Ze(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ze(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(t,e,n,r){try{return r?t(...r):t()}catch(s){pn(s,e,n)}}function Je(t,e,n,r){if(B(t)){const s=Vn(t,e,n,r);return s&&Ha(s)&&s.catch(i=>{pn(i,e,n)}),s}if(W(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Je(t[i],e,n,r));return s}}function pn(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||te;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,c,u)===!1)return}a=a.parent}if(i){nt(),Vn(i,null,10,[t,c,u]),rt();return}}bf(t,n,s,r,o)}function bf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const be=[];let We=-1;const Zt=[];let ut=null,Vt=0;const fc=Promise.resolve();let Ir=null;function Ei(t){const e=Ir||fc;return t?e.then(this?t.bind(this):t):e}function vf(t){let e=We+1,n=be.length;for(;e<n;){const r=e+n>>>1,s=be[r],i=Ln(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ii(t){if(!(t.flags&1)){const e=Ln(t),n=be[be.length-1];!n||!(t.flags&2)&&e>=Ln(n)?be.push(t):be.splice(vf(e),0,t),t.flags|=1,dc()}}function dc(){Ir||(Ir=fc.then(hc))}function xs(t){W(t)?Zt.push(...t):ut&&t.id===-1?ut.splice(Vt+1,0,t):t.flags&1||(Zt.push(t),t.flags|=1),dc()}function lo(t,e,n=We+1){for(;n<be.length;n++){const r=be[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;be.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Tr(t){if(Zt.length){const e=[...new Set(Zt)].sort((n,r)=>Ln(n)-Ln(r));if(Zt.length=0,ut){ut.push(...e);return}for(ut=e,Vt=0;Vt<ut.length;Vt++){const n=ut[Vt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ut=null,Vt=0}}const Ln=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hc(t){try{for(We=0;We<be.length;We++){const e=be[We];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;We<be.length;We++){const e=be[We];e&&(e.flags&=-2)}We=-1,be.length=0,Tr(),Ir=null,(be.length||Zt.length)&&hc()}}let ve=null,pc=null;function Sr(t){const e=ve;return ve=t,pc=t&&t.type.__scopeId||null,e}function gc(t,e=ve,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Io(-1);const i=Sr(e);let o;try{o=t(...s)}finally{Sr(i),r._d&&Io(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function rr(t,e){if(ve===null)return t;const n=Xr(ve),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=te]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&Ze(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ve(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(nt(),Je(c,n,8,[t.el,a,t,e]),rt())}}const wf=Symbol("_vte"),Ef=t=>t.__isTeleport;function Ti(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ti(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Si(t,e){return B(t)?ge({name:t.name},e,{setup:t}):t}function Ci(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Dn(t,e,n,r,s=!1){if(W(t)){t.forEach((m,g)=>Dn(m,e&&(W(e)?e[g]:e),n,r,s));return}if(en(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Dn(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Xr(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===te?a.refs={}:a.refs,f=a.setupState,d=Y(f),y=f===te?()=>!1:m=>Q(d,m);if(u!=null&&u!==c&&(oe(u)?(l[u]=null,y(u)&&(f[u]=null)):ce(u)&&(u.value=null)),B(c))Vn(c,a,12,[o,l]);else{const m=oe(c),g=ce(c);if(m||g){const E=()=>{if(t.f){const T=m?y(c)?f[c]:l[c]:c.value;s?W(T)&&di(T,i):W(T)?T.includes(i)||T.push(i):m?(l[c]=[i],y(c)&&(f[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else m?(l[c]=o,y(c)&&(f[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(E.id=-1,Re(E,n)):E()}}}let uo=!1;const Wt=()=>{uo||(console.error("Hydration completed but contains mismatches."),uo=!0)},If=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Tf=t=>t.namespaceURI.includes("MathML"),sr=t=>{if(t.nodeType===1){if(If(t))return"svg";if(Tf(t))return"mathml"}},Gt=t=>t.nodeType===8;function Sf(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,l=(_,b)=>{if(!b.hasChildNodes()){n(null,_,b),Tr(),b._vnode=_;return}f(b.firstChild,_,null,null,null),Tr(),b._vnode=_},f=(_,b,w,N,F,K=!1)=>{K=K||!!b.dynamicChildren;const $=Gt(_)&&_.data==="[",L=()=>g(_,b,w,N,F,$),{type:J,ref:z,shapeFlag:X,patchFlag:le}=b;let ue=_.nodeType;b.el=_,le===-2&&(K=!1,b.dynamicChildren=null);let x=null;switch(J){case Dt:ue!==3?b.children===""?(c(b.el=s(""),o(_),_),x=_):x=L():(_.data!==b.children&&(Wt(),_.data=b.children),x=i(_));break;case Fe:P(_)?(x=i(_),T(b.el=_.content.firstChild,_,w)):ue!==8||$?x=L():x=i(_);break;case dr:if($&&(_=i(_),ue=_.nodeType),ue===1||ue===3){x=_;const q=!b.children.length;for(let U=0;U<b.staticCount;U++)q&&(b.children+=x.nodeType===1?x.outerHTML:x.data),U===b.staticCount-1&&(b.anchor=x),x=i(x);return $?i(x):x}else L();break;case Le:$?x=m(_,b,w,N,F,K):x=L();break;default:if(X&1)(ue!==1||b.type.toLowerCase()!==_.tagName.toLowerCase())&&!P(_)?x=L():x=d(_,b,w,N,F,K);else if(X&6){b.slotScopeIds=F;const q=o(_);if($?x=E(_):Gt(_)&&_.data==="teleport start"?x=E(_,_.data,"teleport end"):x=i(_),e(b,q,null,w,N,sr(q),K),en(b)&&!b.type.__asyncResolved){let U;$?(U=ae(Le),U.anchor=x?x.previousSibling:q.lastChild):U=_.nodeType===3?Yc(""):ae("div"),U.el=_,b.component.subTree=U}}else X&64?ue!==8?x=L():x=b.type.hydrate(_,b,w,N,F,K,t,y):X&128&&(x=b.type.hydrate(_,b,w,N,sr(o(_)),F,K,t,f))}return z!=null&&Dn(z,null,N,b),x},d=(_,b,w,N,F,K)=>{K=K||!!b.dynamicChildren;const{type:$,props:L,patchFlag:J,shapeFlag:z,dirs:X,transition:le}=b,ue=$==="input"||$==="option";if(ue||J!==-1){X&&Ve(b,null,w,"created");let x=!1;if(P(_)){x=Hc(null,le)&&w&&w.vnode.props&&w.vnode.props.appear;const U=_.content.firstChild;x&&le.beforeEnter(U),T(U,_,w),b.el=_=U}if(z&16&&!(L&&(L.innerHTML||L.textContent))){let U=y(_.firstChild,b,_,w,N,F,K);for(;U;){ir(_,1)||Wt();const de=U;U=U.nextSibling,a(de)}}else if(z&8){let U=b.children;U[0]===`
`&&(_.tagName==="PRE"||_.tagName==="TEXTAREA")&&(U=U.slice(1)),_.textContent!==U&&(ir(_,0)||Wt(),_.textContent=b.children)}if(L){if(ue||!K||J&48){const U=_.tagName.includes("-");for(const de in L)(ue&&(de.endsWith("value")||de==="indeterminate")||Wn(de)&&!Xt(de)||de[0]==="."||U)&&r(_,de,null,L[de],void 0,w)}else if(L.onClick)r(_,"onClick",null,L.onClick,void 0,w);else if(J&4&&Qt(L.style))for(const U in L.style)L.style[U]}let q;(q=L&&L.onVnodeBeforeMount)&&ke(q,w,b),X&&Ve(b,null,w,"beforeMount"),((q=L&&L.onVnodeMounted)||X||x)&&Kc(()=>{q&&ke(q,w,b),x&&le.enter(_),X&&Ve(b,null,w,"mounted")},N)}return _.nextSibling},y=(_,b,w,N,F,K,$)=>{$=$||!!b.dynamicChildren;const L=b.children,J=L.length;for(let z=0;z<J;z++){const X=$?L[z]:L[z]=Pe(L[z]),le=X.type===Dt;_?(le&&!$&&z+1<J&&Pe(L[z+1]).type===Dt&&(c(s(_.data.slice(X.children.length)),w,i(_)),_.data=X.children),_=f(_,X,N,F,K,$)):le&&!X.children?c(X.el=s(""),w):(ir(w,1)||Wt(),n(null,X,w,null,N,F,sr(w),K))}return _},m=(_,b,w,N,F,K)=>{const{slotScopeIds:$}=b;$&&(F=F?F.concat($):$);const L=o(_),J=y(i(_),b,L,w,N,F,K);return J&&Gt(J)&&J.data==="]"?i(b.anchor=J):(Wt(),c(b.anchor=u("]"),L,J),J)},g=(_,b,w,N,F,K)=>{if(ir(_.parentElement,1)||Wt(),b.el=null,K){const J=E(_);for(;;){const z=i(_);if(z&&z!==J)a(z);else break}}const $=i(_),L=o(_);return a(_),n(null,b,L,$,w,N,sr(L),F),w&&(w.vnode.el=b.el,Yr(w,b.el)),$},E=(_,b="[",w="]")=>{let N=0;for(;_;)if(_=i(_),_&&Gt(_)&&(_.data===b&&N++,_.data===w)){if(N===0)return i(_);N--}return _},T=(_,b,w)=>{const N=b.parentNode;N&&N.replaceChild(_,b);let F=w;for(;F;)F.vnode.el===b&&(F.vnode.el=F.subTree.el=_),F=F.parent},P=_=>_.nodeType===1&&_.tagName==="TEMPLATE";return[l,f]}const fo="data-allow-mismatch",Cf={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ir(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(fo);)t=t.parentElement;const n=t&&t.getAttribute(fo);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(Cf[e])}}Kr().requestIdleCallback;Kr().cancelIdleCallback;function Rf(t,e){if(Gt(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Gt(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const en=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function ho(t){B(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,l,f=0;const d=()=>(f++,u=null,y()),y=()=>{let m;return u||(m=u=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),c)return new Promise((E,T)=>{c(g,()=>E(d()),()=>T(g),f+1)});throw g}).then(g=>m!==u&&u?u:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),l=g,g)))};return Si({name:"AsyncComponentWrapper",__asyncLoader:y,__asyncHydrate(m,g,E){const T=i?()=>{const P=i(E,_=>Rf(m,_));P&&(g.bum||(g.bum=[])).push(P)}:E;l?T():y().then(()=>!g.isUnmounted&&T())},get __asyncResolved(){return l},setup(){const m=fe;if(Ci(m),l)return()=>ds(l,m);const g=_=>{u=null,pn(_,m,13,!r)};if(a&&m.suspense||un)return y().then(_=>()=>ds(_,m)).catch(_=>(g(_),()=>r?ae(r,{error:_}):null));const E=De(!1),T=De(),P=De(!!s);return s&&setTimeout(()=>{P.value=!1},s),o!=null&&setTimeout(()=>{if(!E.value&&!T.value){const _=new Error(`Async component timed out after ${o}ms.`);g(_),T.value=_}},o),y().then(()=>{E.value=!0,m.parent&&Ri(m.parent.vnode)&&m.parent.update()}).catch(_=>{g(_),T.value=_}),()=>{if(E.value&&l)return ds(l,m);if(T.value&&r)return ae(r,{error:T.value});if(n&&!P.value)return ae(n)}}})}function ds(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=ae(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ri=t=>t.type.__isKeepAlive;function mc(t,e){yc(t,"a",e)}function _c(t,e){yc(t,"da",e)}function yc(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ri(s.parent.vnode)&&Af(r,e,n,s),s=s.parent}}function Af(t,e,n,r){const s=zr(e,t,r,!0);vc(()=>{di(r[e],s)},n)}function zr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{nt();const a=Kn(n),c=Je(e,n,t,o);return a(),rt(),c});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=fe)=>{(!un||t==="sp")&&zr(t,(...r)=>e(...r),n)},Pf=at("bm"),kf=at("m"),Of=at("bu"),Mf=at("u"),bc=at("bum"),vc=at("um"),Nf=at("sp"),Lf=at("rtg"),Df=at("rtc");function wc(t,e=fe){zr("ec",t,e)}const Ec="components";function Vb(t,e){return Tc(Ec,t,!0,e)||t}const Ic=Symbol.for("v-ndc");function xf(t){return oe(t)?Tc(Ec,t,!1)||t:t||Ic}function Tc(t,e,n=!0,r=!1){const s=ve||fe;if(s){const i=s.type;{const a=Rd(i,!1);if(a&&(a===e||a===Me(e)||a===Vr(Me(e))))return i}const o=po(s[t]||i[t],e)||po(s.appContext[t],e);return!o&&r?i:o}}function po(t,e){return t&&(t[e]||t[Me(e)]||t[Vr(Me(e))])}const Us=t=>t?Qc(t)?Xr(t):Us(t.parent):null,Rn=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Us(t.parent),$root:t=>Us(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Cc(t),$forceUpdate:t=>t.f||(t.f=()=>{Ii(t.update)}),$nextTick:t=>t.n||(t.n=Ei.bind(t.proxy)),$watch:t=>rd.bind(t)}),hs=(t,e)=>t!==te&&!t.__isScriptSetup&&Q(t,e),Uf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(hs(r,e))return o[e]=1,r[e];if(s!==te&&Q(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Q(u,e))return o[e]=3,i[e];if(n!==te&&Q(n,e))return o[e]=4,n[e];Hs&&(o[e]=0)}}const l=Rn[e];let f,d;if(l)return e==="$attrs"&&pe(t.attrs,"get",""),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==te&&Q(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return hs(s,e)?(s[e]=n,!0):r!==te&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==te&&Q(t,o)||hs(e,o)||(a=i[0])&&Q(a,o)||Q(r,o)||Q(Rn,o)||Q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function go(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hs=!0;function Hf(t){const e=Cc(t),n=t.proxy,r=t.ctx;Hs=!1,e.beforeCreate&&mo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:d,beforeUpdate:y,updated:m,activated:g,deactivated:E,beforeDestroy:T,beforeUnmount:P,destroyed:_,unmounted:b,render:w,renderTracked:N,renderTriggered:F,errorCaptured:K,serverPrefetch:$,expose:L,inheritAttrs:J,components:z,directives:X,filters:le}=e;if(u&&Ff(u,r,null),o)for(const q in o){const U=o[q];B(U)&&(r[q]=U.bind(n))}if(s){const q=s.call(n,n);ie(q)&&(t.data=st(q))}if(Hs=!0,i)for(const q in i){const U=i[q],de=B(U)?U.bind(n,n):B(U.get)?U.get.bind(n,n):qe,Qn=!B(U)&&B(U.set)?U.set.bind(n):qe,Rt=el({get:de,set:Qn});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:Be=>Rt.value=Be})}if(a)for(const q in a)Sc(a[q],r,n,q);if(c){const q=B(c)?c.call(n):c;Reflect.ownKeys(q).forEach(U=>{Ac(U,q[U])})}l&&mo(l,t,"c");function x(q,U){W(U)?U.forEach(de=>q(de.bind(n))):U&&q(U.bind(n))}if(x(Pf,f),x(kf,d),x(Of,y),x(Mf,m),x(mc,g),x(_c,E),x(wc,K),x(Df,N),x(Lf,F),x(bc,P),x(vc,b),x(Nf,$),W(L))if(L.length){const q=t.exposed||(t.exposed={});L.forEach(U=>{Object.defineProperty(q,U,{get:()=>n[U],set:de=>n[U]=de})})}else t.exposed||(t.exposed={});w&&t.render===qe&&(t.render=w),J!=null&&(t.inheritAttrs=J),z&&(t.components=z),X&&(t.directives=X),$&&Ci(t)}function Ff(t,e,n=qe){W(t)&&(t=Fs(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=tn(s.from||r,s.default,!0):i=tn(s.from||r):i=tn(s),ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function mo(t,e,n){Je(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sc(t,e,n,r){let s=r.includes(".")?Bc(n,r):()=>n[r];if(oe(t)){const i=e[t];B(i)&&gs(s,i)}else if(B(t))gs(s,t.bind(n));else if(ie(t))if(W(t))t.forEach(i=>Sc(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&gs(s,i,t)}}function Cc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Cr(c,u,o,!0)),Cr(c,e,o)),ie(e)&&i.set(e,c),c}function Cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cr(t,i,n,!0),s&&s.forEach(o=>Cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=jf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jf={data:_o,props:yo,emits:yo,methods:En,computed:En,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:En,directives:En,watch:$f,provide:_o,inject:Bf};function _o(t,e){return e?t?function(){return ge(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Bf(t,e){return En(Fs(t),Fs(e))}function Fs(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?ge(Object.create(null),t,e):e}function yo(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:ge(Object.create(null),go(t),go(e??{})):e}function $f(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function Rc(){return{app:null,config:{isNativeTag:Ru,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function Vf(t,e){return function(r,s=null){B(r)||(r=ge({},r)),s!=null&&!ie(s)&&(s=null);const i=Rc(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Wf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kd,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(u,...f)):B(l)&&(o.add(l),l(u,...f))),u},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),u},component(l,f){return f?(i.components[l]=f,u):i.components[l]},directive(l,f){return f?(i.directives[l]=f,u):i.directives[l]},mount(l,f,d){if(!c){const y=u._ceVNode||ae(r,s);return y.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(y,l):t(y,l,d),c=!0,u._container=l,l.__vue_app__=u,Xr(y.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Je(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(l,f){return i.provides[l]=f,u},runWithContext(l){const f=Lt;Lt=u;try{return l()}finally{Lt=f}}};return u}}let Lt=null;function Ac(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function tn(t,e,n=!1){const r=fe||ve;if(r||Lt){const s=Lt?Lt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function Ai(){return!!(fe||ve||Lt)}const Pc={},kc=()=>Object.create(Pc),Oc=t=>Object.getPrototypeOf(t)===Pc;function Kf(t,e,n,r=!1){const s={},i=kc();t.propsDefaults=Object.create(null),Mc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:qt(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let f=0;f<l.length;f++){let d=l[f];if(Jr(t.emitsOptions,d))continue;const y=e[d];if(c)if(Q(i,d))y!==i[d]&&(i[d]=y,u=!0);else{const m=Me(d);s[m]=js(c,a,m,y,t,!1)}else y!==i[d]&&(i[d]=y,u=!0)}}}else{Mc(t,e,s,i)&&(u=!0);let l;for(const f in a)(!e||!Q(e,f)&&((l=Ht(f))===f||!Q(e,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(s[f]=js(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Q(e,f))&&(delete i[f],u=!0)}u&&Qe(t.attrs,"set","")}function Mc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xt(c))continue;const u=e[c];let l;s&&Q(s,l=Me(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Jr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Y(n),u=a||te;for(let l=0;l<i.length;l++){const f=i[l];n[f]=js(s,c,f,u[f],t,!Q(u,f))}}return o}function js(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&B(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=Kn(s);r=u[n]=c.call(null,e),l()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}const Gf=new WeakMap;function Nc(t,e,n=!1){const r=n?Gf:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const l=f=>{c=!0;const[d,y]=Nc(f,e,!0);ge(o,d),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return ie(t)&&r.set(t,Jt),Jt;if(W(i))for(let l=0;l<i.length;l++){const f=Me(i[l]);bo(f)&&(o[f]=te)}else if(i)for(const l in i){const f=Me(l);if(bo(f)){const d=i[l],y=o[f]=W(d)||B(d)?{type:d}:ge({},d),m=y.type;let g=!1,E=!0;if(W(m))for(let T=0;T<m.length;++T){const P=m[T],_=B(P)&&P.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(E=!1)}else g=B(m)&&m.name==="Boolean";y[0]=g,y[1]=E,(g||Q(y,"default"))&&a.push(f)}}const u=[o,a];return ie(t)&&r.set(t,u),u}function bo(t){return t[0]!=="$"&&!Xt(t)}const Pi=t=>t[0]==="_"||t==="$stable",ki=t=>W(t)?t.map(Pe):[Pe(t)],zf=(t,e,n)=>{if(e._n)return e;const r=gc((...s)=>ki(e(...s)),n);return r._c=!1,r},Lc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Pi(s))continue;const i=t[s];if(B(i))e[s]=zf(s,i,r);else if(i!=null){const o=ki(i);e[s]=()=>o}}},Dc=(t,e)=>{const n=ki(e);t.slots.default=()=>n},xc=(t,e,n)=>{for(const r in e)(n||!Pi(r))&&(t[r]=e[r])},Jf=(t,e,n)=>{const r=t.slots=kc();if(t.vnode.shapeFlag&32){const s=e._;s?(xc(r,e,n),n&&Ba(r,"_",s,!0)):Lc(e,r)}else e&&Dc(t,e)},Yf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:xc(s,e,n):(i=!e.$stable,Lc(e,s)),o=e}else e&&(Dc(t,e),o={default:1});if(i)for(const a in s)!Pi(a)&&o[a]==null&&delete s[a]},Re=Kc;function Xf(t){return Uc(t)}function Qf(t){return Uc(t,Sf)}function Uc(t,e){const n=Kr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:d,setScopeId:y=qe,insertStaticContent:m}=t,g=(h,p,v,C=null,I=null,S=null,O=void 0,k=null,A=!!p.dynamicChildren)=>{if(h===p)return;h&&!ht(h,p)&&(C=Zn(h),Be(h,I,S,!0),h=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:R,ref:H,shapeFlag:M}=p;switch(R){case Dt:E(h,p,v,C);break;case Fe:T(h,p,v,C);break;case dr:h==null&&P(p,v,C,O);break;case Le:z(h,p,v,C,I,S,O,k,A);break;default:M&1?w(h,p,v,C,I,S,O,k,A):M&6?X(h,p,v,C,I,S,O,k,A):(M&64||M&128)&&R.process(h,p,v,C,I,S,O,k,A,Bt)}H!=null&&I&&Dn(H,h&&h.ref,S,p||h,!p)},E=(h,p,v,C)=>{if(h==null)r(p.el=a(p.children),v,C);else{const I=p.el=h.el;p.children!==h.children&&u(I,p.children)}},T=(h,p,v,C)=>{h==null?r(p.el=c(p.children||""),v,C):p.el=h.el},P=(h,p,v,C)=>{[h.el,h.anchor]=m(h.children,p,v,C,h.el,h.anchor)},_=({el:h,anchor:p},v,C)=>{let I;for(;h&&h!==p;)I=d(h),r(h,v,C),h=I;r(p,v,C)},b=({el:h,anchor:p})=>{let v;for(;h&&h!==p;)v=d(h),s(h),h=v;s(p)},w=(h,p,v,C,I,S,O,k,A)=>{p.type==="svg"?O="svg":p.type==="math"&&(O="mathml"),h==null?N(p,v,C,I,S,O,k,A):$(h,p,I,S,O,k,A)},N=(h,p,v,C,I,S,O,k)=>{let A,R;const{props:H,shapeFlag:M,transition:D,dirs:V}=h;if(A=h.el=o(h.type,S,H&&H.is,H),M&8?l(A,h.children):M&16&&K(h.children,A,null,C,I,ps(h,S),O,k),V&&Ve(h,null,C,"created"),F(A,h,h.scopeId,O,C),H){for(const ne in H)ne!=="value"&&!Xt(ne)&&i(A,ne,null,H[ne],S,C);"value"in H&&i(A,"value",null,H.value,S),(R=H.onVnodeBeforeMount)&&ke(R,C,h)}V&&Ve(h,null,C,"beforeMount");const G=Hc(I,D);G&&D.beforeEnter(A),r(A,p,v),((R=H&&H.onVnodeMounted)||G||V)&&Re(()=>{R&&ke(R,C,h),G&&D.enter(A),V&&Ve(h,null,C,"mounted")},I)},F=(h,p,v,C,I)=>{if(v&&y(h,v),C)for(let S=0;S<C.length;S++)y(h,C[S]);if(I){let S=I.subTree;if(p===S||Wc(S.type)&&(S.ssContent===p||S.ssFallback===p)){const O=I.vnode;F(h,O,O.scopeId,O.slotScopeIds,I.parent)}}},K=(h,p,v,C,I,S,O,k,A=0)=>{for(let R=A;R<h.length;R++){const H=h[R]=k?ft(h[R]):Pe(h[R]);g(null,H,p,v,C,I,S,O,k)}},$=(h,p,v,C,I,S,O)=>{const k=p.el=h.el;let{patchFlag:A,dynamicChildren:R,dirs:H}=p;A|=h.patchFlag&16;const M=h.props||te,D=p.props||te;let V;if(v&&At(v,!1),(V=D.onVnodeBeforeUpdate)&&ke(V,v,p,h),H&&Ve(p,h,v,"beforeUpdate"),v&&At(v,!0),(M.innerHTML&&D.innerHTML==null||M.textContent&&D.textContent==null)&&l(k,""),R?L(h.dynamicChildren,R,k,v,C,ps(p,I),S):O||U(h,p,k,null,v,C,ps(p,I),S,!1),A>0){if(A&16)J(k,M,D,v,I);else if(A&2&&M.class!==D.class&&i(k,"class",null,D.class,I),A&4&&i(k,"style",M.style,D.style,I),A&8){const G=p.dynamicProps;for(let ne=0;ne<G.length;ne++){const Z=G[ne],Te=M[Z],he=D[Z];(he!==Te||Z==="value")&&i(k,Z,Te,he,I,v)}}A&1&&h.children!==p.children&&l(k,p.children)}else!O&&R==null&&J(k,M,D,v,I);((V=D.onVnodeUpdated)||H)&&Re(()=>{V&&ke(V,v,p,h),H&&Ve(p,h,v,"updated")},C)},L=(h,p,v,C,I,S,O)=>{for(let k=0;k<p.length;k++){const A=h[k],R=p[k],H=A.el&&(A.type===Le||!ht(A,R)||A.shapeFlag&70)?f(A.el):v;g(A,R,H,null,C,I,S,O,!0)}},J=(h,p,v,C,I)=>{if(p!==v){if(p!==te)for(const S in p)!Xt(S)&&!(S in v)&&i(h,S,p[S],null,I,C);for(const S in v){if(Xt(S))continue;const O=v[S],k=p[S];O!==k&&S!=="value"&&i(h,S,k,O,I,C)}"value"in v&&i(h,"value",p.value,v.value,I)}},z=(h,p,v,C,I,S,O,k,A)=>{const R=p.el=h?h.el:a(""),H=p.anchor=h?h.anchor:a("");let{patchFlag:M,dynamicChildren:D,slotScopeIds:V}=p;V&&(k=k?k.concat(V):V),h==null?(r(R,v,C),r(H,v,C),K(p.children||[],v,H,I,S,O,k,A)):M>0&&M&64&&D&&h.dynamicChildren?(L(h.dynamicChildren,D,v,I,S,O,k),(p.key!=null||I&&p===I.subTree)&&Fc(h,p,!0)):U(h,p,v,H,I,S,O,k,A)},X=(h,p,v,C,I,S,O,k,A)=>{p.slotScopeIds=k,h==null?p.shapeFlag&512?I.ctx.activate(p,v,C,O,A):le(p,v,C,I,S,O,A):ue(h,p,A)},le=(h,p,v,C,I,S,O)=>{const k=h.component=Ed(h,C,I);if(Ri(h)&&(k.ctx.renderer=Bt),Id(k,!1,O),k.asyncDep){if(I&&I.registerDep(k,x,O),!h.el){const A=k.subTree=ae(Fe);T(null,A,p,v)}}else x(k,h,p,v,I,S,O)},ue=(h,p,v)=>{const C=p.component=h.component;if(ld(h,p,v))if(C.asyncDep&&!C.asyncResolved){q(C,p,v);return}else C.next=p,C.update();else p.el=h.el,C.vnode=p},x=(h,p,v,C,I,S,O)=>{const k=()=>{if(h.isMounted){let{next:M,bu:D,u:V,parent:G,vnode:ne}=h;{const Se=jc(h);if(Se){M&&(M.el=ne.el,q(h,M,O)),Se.asyncDep.then(()=>{h.isUnmounted||k()});return}}let Z=M,Te;At(h,!1),M?(M.el=ne.el,q(h,M,O)):M=ne,D&&fr(D),(Te=M.props&&M.props.onVnodeBeforeUpdate)&&ke(Te,G,M,ne),At(h,!0);const he=ms(h),Ne=h.subTree;h.subTree=he,g(Ne,he,f(Ne.el),Zn(Ne),h,I,S),M.el=he.el,Z===null&&Yr(h,he.el),V&&Re(V,I),(Te=M.props&&M.props.onVnodeUpdated)&&Re(()=>ke(Te,G,M,ne),I)}else{let M;const{el:D,props:V}=p,{bm:G,m:ne,parent:Z,root:Te,type:he}=h,Ne=en(p);if(At(h,!1),G&&fr(G),!Ne&&(M=V&&V.onVnodeBeforeMount)&&ke(M,Z,p),At(h,!0),D&&os){const Se=()=>{h.subTree=ms(h),os(D,h.subTree,h,I,null)};Ne&&he.__asyncHydrate?he.__asyncHydrate(D,h,Se):Se()}else{Te.ce&&Te.ce._injectChildStyle(he);const Se=h.subTree=ms(h);g(null,Se,v,C,h,I,S),p.el=Se.el}if(ne&&Re(ne,I),!Ne&&(M=V&&V.onVnodeMounted)){const Se=p;Re(()=>ke(M,Z,Se),I)}(p.shapeFlag&256||Z&&en(Z.vnode)&&Z.vnode.shapeFlag&256)&&h.a&&Re(h.a,I),h.isMounted=!0,p=v=C=null}};h.scope.on();const A=h.effect=new za(k);h.scope.off();const R=h.update=A.run.bind(A),H=h.job=A.runIfDirty.bind(A);H.i=h,H.id=h.uid,A.scheduler=()=>Ii(H),At(h,!0),R()},q=(h,p,v)=>{p.component=h;const C=h.vnode.props;h.vnode=p,h.next=null,qf(h,p.props,C,v),Yf(h,p.children,v),nt(),lo(h),rt()},U=(h,p,v,C,I,S,O,k,A=!1)=>{const R=h&&h.children,H=h?h.shapeFlag:0,M=p.children,{patchFlag:D,shapeFlag:V}=p;if(D>0){if(D&128){Qn(R,M,v,C,I,S,O,k,A);return}else if(D&256){de(R,M,v,C,I,S,O,k,A);return}}V&8?(H&16&&yn(R,I,S),M!==R&&l(v,M)):H&16?V&16?Qn(R,M,v,C,I,S,O,k,A):yn(R,I,S,!0):(H&8&&l(v,""),V&16&&K(M,v,C,I,S,O,k,A))},de=(h,p,v,C,I,S,O,k,A)=>{h=h||Jt,p=p||Jt;const R=h.length,H=p.length,M=Math.min(R,H);let D;for(D=0;D<M;D++){const V=p[D]=A?ft(p[D]):Pe(p[D]);g(h[D],V,v,null,I,S,O,k,A)}R>H?yn(h,I,S,!0,!1,M):K(p,v,C,I,S,O,k,A,M)},Qn=(h,p,v,C,I,S,O,k,A)=>{let R=0;const H=p.length;let M=h.length-1,D=H-1;for(;R<=M&&R<=D;){const V=h[R],G=p[R]=A?ft(p[R]):Pe(p[R]);if(ht(V,G))g(V,G,v,null,I,S,O,k,A);else break;R++}for(;R<=M&&R<=D;){const V=h[M],G=p[D]=A?ft(p[D]):Pe(p[D]);if(ht(V,G))g(V,G,v,null,I,S,O,k,A);else break;M--,D--}if(R>M){if(R<=D){const V=D+1,G=V<H?p[V].el:C;for(;R<=D;)g(null,p[R]=A?ft(p[R]):Pe(p[R]),v,G,I,S,O,k,A),R++}}else if(R>D)for(;R<=M;)Be(h[R],I,S,!0),R++;else{const V=R,G=R,ne=new Map;for(R=G;R<=D;R++){const Ce=p[R]=A?ft(p[R]):Pe(p[R]);Ce.key!=null&&ne.set(Ce.key,R)}let Z,Te=0;const he=D-G+1;let Ne=!1,Se=0;const bn=new Array(he);for(R=0;R<he;R++)bn[R]=0;for(R=V;R<=M;R++){const Ce=h[R];if(Te>=he){Be(Ce,I,S,!0);continue}let $e;if(Ce.key!=null)$e=ne.get(Ce.key);else for(Z=G;Z<=D;Z++)if(bn[Z-G]===0&&ht(Ce,p[Z])){$e=Z;break}$e===void 0?Be(Ce,I,S,!0):(bn[$e-G]=R+1,$e>=Se?Se=$e:Ne=!0,g(Ce,p[$e],v,null,I,S,O,k,A),Te++)}const ro=Ne?Zf(bn):Jt;for(Z=ro.length-1,R=he-1;R>=0;R--){const Ce=G+R,$e=p[Ce],so=Ce+1<H?p[Ce+1].el:C;bn[R]===0?g(null,$e,v,so,I,S,O,k,A):Ne&&(Z<0||R!==ro[Z]?Rt($e,v,so,2):Z--)}}},Rt=(h,p,v,C,I=null)=>{const{el:S,type:O,transition:k,children:A,shapeFlag:R}=h;if(R&6){Rt(h.component.subTree,p,v,C);return}if(R&128){h.suspense.move(p,v,C);return}if(R&64){O.move(h,p,v,Bt);return}if(O===Le){r(S,p,v);for(let M=0;M<A.length;M++)Rt(A[M],p,v,C);r(h.anchor,p,v);return}if(O===dr){_(h,p,v);return}if(C!==2&&R&1&&k)if(C===0)k.beforeEnter(S),r(S,p,v),Re(()=>k.enter(S),I);else{const{leave:M,delayLeave:D,afterLeave:V}=k,G=()=>{h.ctx.isUnmounted?s(S):r(S,p,v)},ne=()=>{M(S,()=>{G(),V&&V()})};D?D(S,G,ne):ne()}else r(S,p,v)},Be=(h,p,v,C=!1,I=!1)=>{const{type:S,props:O,ref:k,children:A,dynamicChildren:R,shapeFlag:H,patchFlag:M,dirs:D,cacheIndex:V}=h;if(M===-2&&(I=!1),k!=null&&(nt(),Dn(k,null,v,h,!0),rt()),V!=null&&(p.renderCache[V]=void 0),H&256){p.ctx.deactivate(h);return}const G=H&1&&D,ne=!en(h);let Z;if(ne&&(Z=O&&O.onVnodeBeforeUnmount)&&ke(Z,p,h),H&6)Tu(h.component,v,C);else{if(H&128){h.suspense.unmount(v,C);return}G&&Ve(h,null,p,"beforeUnmount"),H&64?h.type.remove(h,p,v,Bt,C):R&&!R.hasOnce&&(S!==Le||M>0&&M&64)?yn(R,p,v,!1,!0):(S===Le&&M&384||!I&&H&16)&&yn(A,p,v),C&&to(h)}(ne&&(Z=O&&O.onVnodeUnmounted)||G)&&Re(()=>{Z&&ke(Z,p,h),G&&Ve(h,null,p,"unmounted")},v)},to=h=>{const{type:p,el:v,anchor:C,transition:I}=h;if(p===Le){Iu(v,C);return}if(p===dr){b(h);return}const S=()=>{s(v),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:O,delayLeave:k}=I,A=()=>O(v,S);k?k(h.el,S,A):A()}else S()},Iu=(h,p)=>{let v;for(;h!==p;)v=d(h),s(h),h=v;s(p)},Tu=(h,p,v)=>{const{bum:C,scope:I,job:S,subTree:O,um:k,m:A,a:R,parent:H,slots:{__:M}}=h;vo(A),vo(R),C&&fr(C),H&&W(M)&&M.forEach(D=>{H.renderCache[D]=void 0}),I.stop(),S&&(S.flags|=8,Be(O,h,p,v)),k&&Re(k,p),Re(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},yn=(h,p,v,C=!1,I=!1,S=0)=>{for(let O=S;O<h.length;O++)Be(h[O],p,v,C,I)},Zn=h=>{if(h.shapeFlag&6)return Zn(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),v=p&&p[wf];return v?d(v):p};let ss=!1;const no=(h,p,v)=>{h==null?p._vnode&&Be(p._vnode,null,null,!0):g(p._vnode||null,h,p,null,null,null,v),p._vnode=h,ss||(ss=!0,lo(),Tr(),ss=!1)},Bt={p:g,um:Be,m:Rt,r:to,mt:le,mc:K,pc:U,pbc:L,n:Zn,o:t};let is,os;return e&&([is,os]=e(Bt)),{render:no,hydrate:is,createApp:Vf(no,is)}}function ps({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function At({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hc(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fc(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ft(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Fc(o,a)),a.type===Dt&&(a.el=o.el),a.type===Fe&&!a.el&&(a.el=o.el)}}function Zf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jc(e)}function vo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ed=Symbol.for("v-scx"),td=()=>tn(ed);function nd(t,e){return Oi(t,null,e)}function gs(t,e,n){return Oi(t,e,n)}function Oi(t,e,n=te){const{immediate:r,deep:s,flush:i,once:o}=n,a=ge({},n),c=e&&r||!e&&i!=="post";let u;if(un){if(i==="sync"){const y=td();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=qe,y.resume=qe,y.pause=qe,y}}const l=fe;a.call=(y,m,g)=>Je(y,l,m,g);let f=!1;i==="post"?a.scheduler=y=>{Re(y,l&&l.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(y,m)=>{m?y():Ii(y)}),a.augmentJob=y=>{e&&(y.flags|=4),f&&(y.flags|=2,l&&(y.id=l.uid,y.i=l))};const d=yf(t,e,a);return un&&(u?u.push(d):c&&d()),d}function rd(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?Bc(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=Kn(this),a=Oi(s,i.bind(r),n);return o(),a}function Bc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const sd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Me(e)}Modifiers`]||t[`${Ht(e)}Modifiers`];function id(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&sd(r,e.slice(7));o&&(o.trim&&(s=n.map(l=>oe(l)?l.trim():l)),o.number&&(s=n.map(Os)));let a,c=r[a=as(e)]||r[a=as(Me(e))];!c&&i&&(c=r[a=as(Ht(e))]),c&&Je(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(u,t,6,s)}}function $c(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=u=>{const l=$c(u,e,!0);l&&(a=!0,ge(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):ge(o,i),ie(t)&&r.set(t,o),o)}function Jr(t,e){return!t||!Wn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Ht(e))||Q(t,e))}function ms(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:f,data:d,setupState:y,ctx:m,inheritAttrs:g}=t,E=Sr(t);let T,P;try{if(n.shapeFlag&4){const b=s||r,w=b;T=Pe(u.call(w,b,l,f,y,d,m)),P=a}else{const b=e;T=Pe(b.length>1?b(f,{attrs:a,slots:o,emit:c}):b(f,null)),P=e.props?a:ad(a)}}catch(b){An.length=0,pn(b,t,1),T=ae(Fe)}let _=T;if(P&&g!==!1){const b=Object.keys(P),{shapeFlag:w}=_;b.length&&w&7&&(i&&b.some(fi)&&(P=cd(P,i)),_=ln(_,P,!1,!0))}return n.dirs&&(_=ln(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&Ti(_,n.transition),T=_,Sr(E),T}function od(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Un(s)){if(s.type!==Fe||s.children==="v-if"){if(n)return;n=s}}else return}return n}const ad=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wn(n))&&((e||(e={}))[n]=t[n]);return e},cd=(t,e)=>{const n={};for(const r in t)(!fi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ld(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wo(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let f=0;f<l.length;f++){const d=l[f];if(o[d]!==r[d]&&!Jr(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wo(r,o,u):!0:!!o;return!1}function wo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Jr(n,i))return!0}return!1}function Yr({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wc=t=>t.__isSuspense;let Bs=0;const ud={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,u){if(t==null)dd(e,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}hd(t,e,n,r,s,o,a,c,u)}},hydrate:pd,normalize:gd},fd=ud;function xn(t,e){const n=t.props&&t.props[e];B(n)&&n()}function dd(t,e,n,r,s,i,o,a,c){const{p:u,o:{createElement:l}}=c,f=l("div"),d=t.suspense=Vc(t,s,r,e,f,n,i,o,a,c);u(null,d.pendingBranch=t.ssContent,f,null,r,d,i,o),d.deps>0?(xn(t,"onPending"),xn(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),nn(d,t.ssFallback)):d.resolve(!1,!0)}function hd(t,e,n,r,s,i,o,a,{p:c,um:u,o:{createElement:l}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,y=e.ssFallback,{activeBranch:m,pendingBranch:g,isInFallback:E,isHydrating:T}=f;if(g)f.pendingBranch=d,ht(d,g)?(c(g,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():E&&(T||(c(m,y,n,r,s,null,i,o,a),nn(f,y)))):(f.pendingId=Bs++,T?(f.isHydrating=!1,f.activeBranch=g):u(g,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=l("div"),E?(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(m,y,n,r,s,null,i,o,a),nn(f,y))):m&&ht(d,m)?(c(m,d,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(m&&ht(d,m))c(m,d,n,r,s,f,i,o,a),nn(f,d);else if(xn(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Bs++,c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:P,pendingId:_}=f;P>0?setTimeout(()=>{f.pendingId===_&&f.fallback(y)},P):P===0&&f.fallback(y)}}function Vc(t,e,n,r,s,i,o,a,c,u,l=!1){const{p:f,m:d,um:y,n:m,o:{parentNode:g,remove:E}}=u;let T;const P=md(t);P&&e&&e.pendingBranch&&(T=e.pendingId,e.deps++);const _=t.props?Mu(t.props.timeout):void 0,b=i,w={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Bs++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!l,isHydrating:l,isUnmounted:!1,effects:[],resolve(N=!1,F=!1){const{vnode:K,activeBranch:$,pendingBranch:L,pendingId:J,effects:z,parentComponent:X,container:le}=w;let ue=!1;w.isHydrating?w.isHydrating=!1:N||(ue=$&&L.transition&&L.transition.mode==="out-in",ue&&($.transition.afterLeave=()=>{J===w.pendingId&&(d(L,le,i===b?m($):i,0),xs(z))}),$&&(g($.el)===le&&(i=m($)),y($,X,w,!0)),ue||d(L,le,i,0)),nn(w,L),w.pendingBranch=null,w.isInFallback=!1;let x=w.parent,q=!1;for(;x;){if(x.pendingBranch){x.effects.push(...z),q=!0;break}x=x.parent}!q&&!ue&&xs(z),w.effects=[],P&&e&&e.pendingBranch&&T===e.pendingId&&(e.deps--,e.deps===0&&!F&&e.resolve()),xn(K,"onResolve")},fallback(N){if(!w.pendingBranch)return;const{vnode:F,activeBranch:K,parentComponent:$,container:L,namespace:J}=w;xn(F,"onFallback");const z=m(K),X=()=>{w.isInFallback&&(f(null,N,L,z,$,null,J,a,c),nn(w,N))},le=N.transition&&N.transition.mode==="out-in";le&&(K.transition.afterLeave=X),w.isInFallback=!0,y(K,$,null,!0),le||X()},move(N,F,K){w.activeBranch&&d(w.activeBranch,N,F,K),w.container=N},next(){return w.activeBranch&&m(w.activeBranch)},registerDep(N,F,K){const $=!!w.pendingBranch;$&&w.deps++;const L=N.vnode.el;N.asyncDep.catch(J=>{pn(J,N,0)}).then(J=>{if(N.isUnmounted||w.isUnmounted||w.pendingId!==N.suspenseId)return;N.asyncResolved=!0;const{vnode:z}=N;Ws(N,J),L&&(z.el=L);const X=!L&&N.subTree.el;F(N,z,g(L||N.subTree.el),L?null:m(N.subTree),w,o,K),X&&E(X),Yr(N,z.el),$&&--w.deps===0&&w.resolve()})},unmount(N,F){w.isUnmounted=!0,w.activeBranch&&y(w.activeBranch,n,N,F),w.pendingBranch&&y(w.pendingBranch,n,N,F)}};return w}function pd(t,e,n,r,s,i,o,a,c){const u=e.suspense=Vc(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),l=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),l}function gd(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Eo(r?n.default:n),t.ssFallback=r?Eo(n.fallback):ae(Fe)}function Eo(t){let e;if(B(t)){const n=cn&&t._c;n&&(t._d=!1,Oe()),t=t(),n&&(t._d=!0,e=Ie,qc())}return W(t)&&(t=od(t)),t=Pe(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Kc(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):xs(t)}function nn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Yr(r,s))}function md(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Le=Symbol.for("v-fgt"),Dt=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),dr=Symbol.for("v-stc"),An=[];let Ie=null;function Oe(t=!1){An.push(Ie=t?null:[])}function qc(){An.pop(),Ie=An[An.length-1]||null}let cn=1;function Io(t,e=!1){cn+=t,t<0&&Ie&&e&&(Ie.hasOnce=!0)}function Gc(t){return t.dynamicChildren=cn>0?Ie||Jt:null,qc(),cn>0&&Ie&&Ie.push(t),t}function Rr(t,e,n,r,s,i){return Gc(Ae(t,e,n,r,s,i,!0))}function Mt(t,e,n,r,s){return Gc(ae(t,e,n,r,s,!0))}function Un(t){return t?t.__v_isVNode===!0:!1}function ht(t,e){return t.type===e.type&&t.key===e.key}const zc=({key:t})=>t??null,hr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||ce(t)||B(t)?{i:ve,r:t,k:e,f:!!n}:t:null);function Ae(t,e=null,n=null,r=0,s=null,i=t===Le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zc(e),ref:e&&hr(e),scopeId:pc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ve};return a?(Mi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),cn>0&&!o&&Ie&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ie.push(c),c}const ae=_d;function _d(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ic)&&(t=Fe),Un(t)){const a=ln(t,e,!0);return n&&Mi(a,n),cn>0&&!i&&Ie&&(a.shapeFlag&6?Ie[Ie.indexOf(t)]=a:Ie.push(a)),a.patchFlag=-2,a}if(Ad(t)&&(t=t.__vccOpts),e){e=Jc(e);let{class:a,style:c}=e;a&&!oe(a)&&(e.class=Gr(a)),ie(c)&&(wi(c)&&!W(c)&&(c=ge({},c)),e.style=qr(c))}const o=oe(t)?1:Wc(t)?128:Ef(t)?64:ie(t)?4:B(t)?2:0;return Ae(t,e,n,r,s,o,i,!0)}function Jc(t){return t?wi(t)||Oc(t)?ge({},t):t:null}function ln(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?bd(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&zc(u),ref:e&&e.ref?n&&i?W(i)?i.concat(hr(e)):[i,hr(e)]:hr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ti(l,c.clone(l)),l}function Yc(t=" ",e=0){return ae(Dt,null,t,e)}function yd(t="",e=!1){return e?(Oe(),Mt(Fe,null,t)):ae(Fe,null,t)}function Pe(t){return t==null||typeof t=="boolean"?ae(Fe):W(t)?ae(Le,null,t.slice()):Un(t)?ft(t):ae(Dt,null,String(t))}function ft(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function Mi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Mi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Oc(e)?e._ctx=ve:s===3&&ve&&(ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:ve},n=32):(e=String(e),r&64?(n=16,e=[Yc(e)]):n=8);t.children=e,t.shapeFlag|=n}function bd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gr([e.class,r.class]));else if(s==="style")e.style=qr([e.style,r.style]);else if(Wn(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ke(t,e,n,r=null){Je(t,e,7,[n,r])}const vd=Rc();let wd=0;function Ed(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vd,i={uid:wd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nc(r,s),emitsOptions:$c(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=id.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const Xc=()=>fe||ve;let Ar,$s;{const t=Kr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ar=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),$s=e("__VUE_SSR_SETTERS__",n=>un=n)}const Kn=t=>{const e=fe;return Ar(t),t.scope.on(),()=>{t.scope.off(),Ar(e)}},To=()=>{fe&&fe.scope.off(),Ar(null)};function Qc(t){return t.vnode.shapeFlag&4}let un=!1;function Id(t,e=!1,n=!1){e&&$s(e);const{props:r,children:s}=t.vnode,i=Qc(t);Kf(t,r,i,e),Jf(t,s,n||e);const o=i?Td(t,e):void 0;return e&&$s(!1),o}function Td(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Uf);const{setup:r}=n;if(r){nt();const s=t.setupContext=r.length>1?Cd(t):null,i=Kn(t),o=Vn(r,t,0,[t.props,s]),a=Ha(o);if(rt(),i(),(a||t.sp)&&!en(t)&&Ci(t),a){if(o.then(To,To),e)return o.then(c=>{Ws(t,c)}).catch(c=>{pn(c,t,0)});t.asyncDep=o}else Ws(t,o)}else Zc(t)}function Ws(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=uc(e)),Zc(t)}function Zc(t,e,n){const r=t.type;t.render||(t.render=r.render||qe);{const s=Kn(t);nt();try{Hf(t)}finally{rt(),s()}}}const Sd={get(t,e){return pe(t,"get",""),t[e]}};function Cd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sd),slots:t.slots,emit:t.emit,expose:e}}function Xr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uc(af(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}})):t.proxy}function Rd(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Ad(t){return B(t)&&"__vccOpts"in t}const el=(t,e)=>mf(t,e,un);function Pd(t,e,n){const r=arguments.length;return r===2?ie(e)&&!W(e)?Un(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Un(n)&&(n=[n]),ae(t,e,n))}const kd="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vs;const So=typeof window<"u"&&window.trustedTypes;if(So)try{Vs=So.createPolicy("vue",{createHTML:t=>t})}catch{}const tl=Vs?t=>Vs.createHTML(t):t=>t,Od="http://www.w3.org/2000/svg",Md="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,Co=Xe&&Xe.createElement("template"),Nd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Xe.createElementNS(Od,t):e==="mathml"?Xe.createElementNS(Md,t):n?Xe.createElement(t,{is:n}):Xe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xe.createTextNode(t),createComment:t=>Xe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Co.innerHTML=tl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Co.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ld=Symbol("_vtc");function Dd(t,e,n){const r=t[Ld];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ro=Symbol("_vod"),xd=Symbol("_vsh"),Ud=Symbol(""),Hd=/(^|;)\s*display\s*:/;function Fd(t,e,n){const r=t.style,s=oe(n);let i=!1;if(n&&!s){if(e)if(oe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&pr(r,a,"")}else for(const o in e)n[o]==null&&pr(r,o,"");for(const o in n)o==="display"&&(i=!0),pr(r,o,n[o])}else if(s){if(e!==n){const o=r[Ud];o&&(n+=";"+o),r.cssText=n,i=Hd.test(n)}}else e&&t.removeAttribute("style");Ro in t&&(t[Ro]=i?r.display:"",t[xd]&&(r.display="none"))}const Ao=/\s*!important$/;function pr(t,e,n){if(W(n))n.forEach(r=>pr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jd(t,e);Ao.test(n)?t.setProperty(Ht(r),n.replace(Ao,""),"important"):t[r]=n}}const Po=["Webkit","Moz","ms"],_s={};function jd(t,e){const n=_s[e];if(n)return n;let r=Me(e);if(r!=="filter"&&r in t)return _s[e]=r;r=Vr(r);for(let s=0;s<Po.length;s++){const i=Po[s]+r;if(i in t)return _s[e]=i}return e}const ko="http://www.w3.org/1999/xlink";function Oo(t,e,n,r,s,i=Fu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ko,e.slice(6,e.length)):t.setAttributeNS(ko,e,n):n==null||i&&!$a(n)?t.removeAttribute(e):t.setAttribute(e,i?"":It(n)?String(n):n)}function Mo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tl(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=$a(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Kt(t,e,n,r){t.addEventListener(e,n,r)}function Bd(t,e,n,r){t.removeEventListener(e,n,r)}const No=Symbol("_vei");function $d(t,e,n,r,s=null){const i=t[No]||(t[No]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Wd(e);if(r){const u=i[e]=qd(r,s);Kt(t,a,u,c)}else o&&(Bd(t,a,o,c),i[e]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function Wd(t){let e;if(Lo.test(t)){e={};let r;for(;r=t.match(Lo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ht(t.slice(2)),e]}let ys=0;const Vd=Promise.resolve(),Kd=()=>ys||(Vd.then(()=>ys=0),ys=Date.now());function qd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Gd(r,n.value),e,5,[r])};return n.value=t,n.attached=Kd(),n}function Gd(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Do=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Dd(t,r,o):e==="style"?Fd(t,n,r):Wn(e)?fi(e)||$d(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jd(t,e,r,o))?(Mo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Oo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!oe(r))?Mo(t,Me(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Oo(t,e,r,o))};function Jd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Do(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Do(e)&&oe(n)?!1:e in t}const xo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>fr(e,n):e};function Yd(t){t.target.composing=!0}function Uo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bs=Symbol("_assign"),or={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bs]=xo(s);const i=r||s.props&&s.props.type==="number";Kt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Os(a)),t[bs](a)}),n&&Kt(t,"change",()=>{t.value=t.value.trim()}),e||(Kt(t,"compositionstart",Yd),Kt(t,"compositionend",Uo),Kt(t,"change",Uo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[bs]=xo(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Os(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},nl=ge({patchProp:zd},Nd);let Pn,Ho=!1;function Xd(){return Pn||(Pn=Xf(nl))}function Qd(){return Pn=Ho?Pn:Qf(nl),Ho=!0,Pn}const Zd=(...t)=>{const e=Xd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sl(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},eh=(...t)=>{const e=Qd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sl(r);if(s)return n(s,!0,rl(s))},e};function rl(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sl(t){return oe(t)?document.querySelector(t):t}const th=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,nh=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,rh=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function sh(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){ih(t);return}return e}function ih(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Pr(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!rh.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(th.test(t)||nh.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,sh)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const oh=/#/g,ah=/&/g,ch=/\//g,lh=/=/g,Ni=/\+/g,uh=/%5e/gi,fh=/%60/gi,dh=/%7c/gi,hh=/%20/gi;function ph(t){return encodeURI(""+t).replace(dh,"|")}function Ks(t){return ph(typeof t=="string"?t:JSON.stringify(t)).replace(Ni,"%2B").replace(hh,"+").replace(oh,"%23").replace(ah,"%26").replace(fh,"`").replace(uh,"^").replace(ch,"%2F")}function vs(t){return Ks(t).replace(lh,"%3D")}function kr(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function gh(t){return kr(t.replace(Ni," "))}function mh(t){return kr(t.replace(Ni," "))}function Li(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=gh(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=mh(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function _h(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${vs(t)}=${Ks(n)}`).join("&"):`${vs(t)}=${Ks(e)}`:vs(t)}function il(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>_h(e,t[e])).filter(Boolean).join("&")}const yh=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,bh=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,vh=/^([/\\]\s*){2,}[^/\\]/,wh=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Eh=/\/$|\/\?|\/#/,Ih=/^\.?\//;function gn(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?yh.test(t):bh.test(t)||(e.acceptRelative?vh.test(t):!1)}function Th(t){return!!t&&wh.test(t)}function qs(t="",e){return e?Eh.test(t):t.endsWith("/")}function Di(t="",e){if(!e)return(qs(t)?t.slice(0,-1):t)||"/";if(!qs(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Gs(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(qs(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function Sh(t=""){return t.startsWith("/")}function Fo(t=""){return Sh(t)?t:"/"+t}function Ch(t,e){if(al(e)||gn(t))return t;const n=Di(e);return t.startsWith(n)?t:Qr(n,t)}function Rh(t,e){if(al(e))return t;const n=Di(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function ol(t,e){const n=ul(t),r={...Li(n.search),...e};return n.search=il(r),fl(n)}function al(t){return!t||t==="/"}function Ah(t){return t&&t!=="/"}function Qr(t,...e){let n=t||"";for(const r of e.filter(s=>Ah(s)))if(n){const s=r.replace(Ih,"");n=Gs(n)+s}else n=r;return n}function cl(...t){var o,a,c,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const l of n)if(!(!l||l==="/")){for(const[f,d]of l.split(e).entries())if(!(!d||d===".")){if(d===".."){if(r.length===1&&gn(r[0]))continue;r.pop(),s--;continue}if(f===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+d;continue}r.push(d),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function Ph(t,e,n={}){return n.trailingSlash||(t=Gs(t),e=Gs(e)),n.leadingSlash||(t=Fo(t),e=Fo(e)),n.encoding||(t=kr(t),e=kr(e)),t===e}const ll=Symbol.for("ufo:protocolRelative");function ul(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,d=""]=n;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!gn(t,{acceptRelative:!0}))return jo(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:l}=jo(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:l,[ll]:!r}}function jo(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function fl(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[ll]?(t.protocol||"")+"//":"")+s+i+e+n+r}class kh extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Oh(t){var c,u,l,f,d;const e=((c=t.error)==null?void 0:c.message)||((u=t.error)==null?void 0:u.toString())||"",n=((l=t.request)==null?void 0:l.method)||((f=t.options)==null?void 0:f.method)||"GET",r=((d=t.request)==null?void 0:d.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new kh(o,t.error?{cause:t.error}:void 0);for(const y of["request","options","response"])Object.defineProperty(a,y,{get(){return t[y]}});for(const[y,m]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,y,{get(){return t.response&&t.response[m]}});return a}const Mh=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Bo(t="GET"){return Mh.has(t.toUpperCase())}function Nh(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Lh=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Dh=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function xh(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Dh.test(e)?"json":Lh.has(e)||e.startsWith("text/")?"text":"blob"}function Uh(t,e,n,r){const s=Hh((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function Hh(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function ar(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const Fh=new Set([408,409,425,429,500,502,503,504]),jh=new Set([101,204,205,304]);function dl(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let l;typeof a.options.retry=="number"?l=a.options.retry:l=Bo(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(l>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):Fh.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(y=>setTimeout(y,d)),i(a.request,{...a.options,retry:l-1})}}const u=Oh(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const l={request:c,options:Uh(c,u,t.defaults,n),response:void 0,error:void 0};l.options.method&&(l.options.method=l.options.method.toUpperCase()),l.options.onRequest&&await ar(l,l.options.onRequest),typeof l.request=="string"&&(l.options.baseURL&&(l.request=Ch(l.request,l.options.baseURL)),l.options.query&&(l.request=ol(l.request,l.options.query),delete l.options.query),"query"in l.options&&delete l.options.query,"params"in l.options&&delete l.options.params),l.options.body&&Bo(l.options.method)&&(Nh(l.options.body)?(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")):("pipeTo"in l.options.body&&typeof l.options.body.pipeTo=="function"||typeof l.options.body.pipe=="function")&&("duplex"in l.options||(l.options.duplex="half")));let f;if(!l.options.signal&&l.options.timeout){const y=new r;f=setTimeout(()=>{const m=new Error("[TimeoutError]: The operation was aborted due to timeout");m.name="TimeoutError",m.code=23,y.abort(m)},l.options.timeout),l.options.signal=y.signal}try{l.response=await e(l.request,l.options)}catch(y){return l.error=y,l.options.onRequestError&&await ar(l,l.options.onRequestError),await s(l)}finally{f&&clearTimeout(f)}if((l.response.body||l.response._bodyInit)&&!jh.has(l.response.status)&&l.options.method!=="HEAD"){const y=(l.options.parseResponse?"json":l.options.responseType)||xh(l.response.headers.get("content-type")||"");switch(y){case"json":{const m=await l.response.text(),g=l.options.parseResponse||Pr;l.response._data=g(m);break}case"stream":{l.response._data=l.response.body||l.response._bodyInit;break}default:l.response._data=await l.response[y]()}}return l.options.onResponse&&await ar(l,l.options.onResponse),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await ar(l,l.options.onResponseError),await s(l)):l.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>dl({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const Or=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Bh=Or.fetch?(...t)=>Or.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),$h=Or.Headers,Wh=Or.AbortController,Vh=dl({fetch:Bh,Headers:$h,AbortController:Wh}),Kh=Vh,qh=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Mr=qh().app,Gh=()=>Mr.baseURL,zh=()=>Mr.buildAssetsDir,xi=(...t)=>cl(hl(),zh(),...t),hl=(...t)=>{const e=Mr.cdnURL||Mr.baseURL;return t.length?cl(e,...t):e};globalThis.__buildAssetsURL=xi,globalThis.__publicAssetsURL=hl;globalThis.$fetch||(globalThis.$fetch=Kh.create({baseURL:Gh()}));"global"in globalThis||(globalThis.global=globalThis);function zs(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?zs(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const Jh={run:t=>t()},Yh=()=>Jh,pl=typeof console.createTask<"u"?console.createTask:Yh;function Xh(t,e){const n=e.shift(),r=pl(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function Qh(t,e){const n=e.shift(),r=pl(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function ws(t,e){for(const n of[...t])n(e)}class Zh{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=zs(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=zs(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(Xh,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Qh,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&ws(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&ws(this._after,s)}):(this._after&&s&&ws(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function gl(){return new Zh}function ep(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;Js.add(u);try{const l=s?s.run(o,a):a();return n||(e=void 0),await l}finally{Js.delete(u)}}}}function tp(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=ep({...t,...r})),e[n]}}}const Nr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},$o="__unctx__",np=Nr[$o]||(Nr[$o]=tp()),rp=(t,e={})=>np.get(t,e),Wo="__unctx_async_handlers__",Js=Nr[Wo]||(Nr[Wo]=new Set);function ml(t){const e=[];for(const s of Js){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Kb={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},sp=null,ip="#__nuxt",_l="nuxt-app",Vo=36e5,op="vite:preloadError";function yl(t=_l){return rp(t,{asyncContext:!1})}const ap="__nuxt_plugin";function cp(t){var s;let e=0;const n={_id:t.id||_l||"nuxt-app",_scope:ju(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.4"},get vue(){return n.vueApp.version}},payload:qt({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:qt({}),state:st({}),once:new Set,_errors:qt({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!Ga()?n._scope.run(()=>Ko(n,i)):Ko(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:qt({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=gl(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;cr(n,a,o),cr(n.vueApp.config.globalProperties,a,o)},cr(n.vueApp,"$nuxt",n),cr(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(op,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=me);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function lp(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function up(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function fp(t,e){const n=new Set,r=[],s=[],i=[];let o=0;async function a(c){var l;const u=((l=c.dependsOn)==null?void 0:l.filter(f=>e.some(d=>d._name===f)&&!n.has(f)))??[];if(u.length>0)r.push([new Set(u),c]);else{const f=up(t,c).then(async()=>{c._name&&(n.add(c._name),await Promise.all(r.map(async([d,y])=>{d.has(c._name)&&(d.delete(c._name),d.size===0&&(o++,await a(y)))})))});c.parallel?s.push(f.catch(d=>i.push(d))):await f}}for(const c of e)lp(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function Tt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ap]:!0,_name:e})}function Ko(t,e,n){const r=()=>e();return yl(t._id).set(t),t.vueApp.runWithContext(r)}function dp(t){var n;let e;return Ai()&&(e=(n=Xc())==null?void 0:n.appContext.app.$nuxt),e||(e=yl(t).tryUse()),e||null}function me(t){const e=dp(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Hn(t){return me().$config}function cr(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function hp(t,e){return{ctx:{table:t},matchAll:n=>vl(n,t)}}function bl(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,bl(s)])):new Map(Object.entries(t[n]));return e}function pp(t){return hp(bl(t))}function vl(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of qo(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of qo(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...vl(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function qo(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Es(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Ys(t,e,n=".",r){if(!Es(e))return Ys(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Es(o)&&Es(s[i])?s[i]=Ys(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function gp(t){return(...e)=>e.reduce((n,r)=>Ys(n,r,"",t),{})}const mp=gp();function _p(t,e){try{return e in t}catch{return!1}}class Xs extends Error{constructor(n,r={}){super(n,r);ct(this,"statusCode",500);ct(this,"fatal",!1);ct(this,"unhandled",!1);ct(this,"statusMessage");ct(this,"data");ct(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Qs(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=wl(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}ct(Xs,"__h3_error__",!0);function yp(t){if(typeof t=="string")return new Xs(t);if(bp(t))return t;const e=new Xs(t.message??t.statusMessage??"",{cause:t.cause||t});if(_p(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Qs(t.statusCode,e.statusCode):t.status&&(e.statusCode=Qs(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;wl(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function bp(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const vp=/[^\u0009\u0020-\u007E]/g;function wl(t=""){return t.replace(vp,"")}function Qs(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const El=Symbol("route"),xt=()=>{var t;return(t=me())==null?void 0:t.$router},Ui=()=>Ai()?tn(El,me()._route):me()._route;const wp=()=>{try{if(me()._processingMiddleware)return!0}catch{return!1}return!1},Ep=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Ip(t):xt().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:u={}}=e.open,l=Object.entries(u).filter(([f,d])=>d!==void 0).map(([f,d])=>`${f.toLowerCase()}=${d}`).join(", ");return open(n,c,l),Promise.resolve()}const r=gn(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&Th(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=wp();if(!s&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:c,search:u,hash:l}=ul(t);return{path:c,...u&&{query:Li(u)},...l&&{hash:l},replace:!0}}return{...t,replace:!0}}return t}const o=xt(),a=me();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Ip(t){return ol(t.path||"",t.query||{})+(t.hash||"")}const Il="__nuxt_error",Hi=()=>hf(me().payload,"error"),Tp=t=>{const e=Fi(t);try{const n=me(),r=Hi();n.hooks.callHook("app:error",e),r.value||(r.value=e)}catch{throw e}return e},Sp=async(t={})=>{const e=me(),n=Hi();e.callHook("app:error:cleared",t),t.redirect&&await xt().replace(t.redirect),n.value=sp},Cp=t=>!!t&&typeof t=="object"&&Il in t,Fi=t=>{const e=yp(t);return Object.defineProperty(e,Il,{value:!0,configurable:!1,writable:!1}),e};function Go(t){const e=Ap(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const Rp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ap(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=Rp.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const Pp=-1,kp=-2,Op=-3,Mp=-4,Np=-5,Lp=-6;function Dp(t,e){return xp(JSON.parse(t),e)}function xp(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===Pp)return;if(i===Op)return NaN;if(i===Mp)return 1/0;if(i===Np)return-1/0;if(i===Lp)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e==null?void 0:e[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const l=new Set;r[i]=l;for(let y=1;y<a.length;y+=1)l.add(s(a[y]));break;case"Map":const f=new Map;r[i]=f;for(let y=1;y<a.length;y+=2)f.set(s(a[y]),s(a[y+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const d=Object.create(null);r[i]=d;for(let y=1;y<a.length;y+=2)d[a[y]]=s(a[y+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const y=globalThis[c],m=a[1],g=Go(m),E=new y(g);r[i]=E;break}case"ArrayBuffer":{const y=a[1],m=Go(y);r[i]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const l=a[u];l!==kp&&(c[u]=s(l))}}else{const c={};r[i]=c;for(const u in a){const l=a[u];c[u]=s(l)}}return r[i]}return s(0)}const Up=new Set(["link","style","script","noscript"]),Hp=new Set(["title","titleTemplate","script","style","noscript"]),zo=new Set(["base","meta","link","style","script","noscript"]),Fp=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),jp=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Bp=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),$p=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Wp=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const Vp=["name","property","http-equiv"];function Tl(t){const e=t.split(":");return e.length?Wp.has(e[1]):!1}function Zs(t){const{props:e,tag:n}=t;if(jp.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of Vp)if(e[r]!==void 0)return`${n}:${e[r]}`}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(Hp.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function Jo(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function Lr(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>Lr(i,e));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=Lr(s[o],e,o);return i}return s}function Kp(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function Sl(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=Kp(n,r);return}if(Bp.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function qp(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=Sl({tag:t,props:{}},n);return r.key&&Up.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function Gp(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=Lr(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(qp(s,o))}),r.flat()}const ei=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Yo={base:-10,title:10},zp={critical:-8,high:-1,low:2},Xo={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Jp=/@import/,wn=t=>t===""||t===!0;function Yp(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=zp[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Xo;if(e.tag in Yo)n=Yo[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=Xo.meta[o])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?wn(e.props.async)?n=s.script.async:e.props.src&&!wn(e.props.defer)&&!wn(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:wn(e.props.defer)&&e.props.src&&!wn(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&Jp.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function Qo(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function Xp(t={}){var a;const e=gl();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=[],o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:c=>Qo(o,c),push(c,u){const l={...u||{}};delete l.head;const f=l._index??o._entryCount++,d={_i:f,input:c,options:l},y={_poll(m=!1){o.dirty=!0,!m&&i.push(f),e.callHook("entries:updated",o)},dispose(){r.delete(f)&&y._poll(!0)},patch(m){(!l.mode||l.mode==="server"&&n||l.mode==="client"&&!n)&&(d.input=m,r.set(f,d),y._poll())}};return y.patch(c),y},async resolveTags(){var y;const c={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",c);i.length;){const m=i.shift(),g=r.get(m);if(g){const E={tags:Gp(g.input,t.propResolvers||[]).map(T=>Object.assign(T,g.options)),entry:g};await e.callHook("entries:normalize",E),g._tags=E.tags.map((T,P)=>(T._w=Yp(o,T),T._p=(g._i<<10)+P,T._d=Zs(T),T))}}let u=!1;c.entries.flatMap(m=>(m._tags||[]).map(g=>({...g,props:{...g.props}}))).sort(ei).reduce((m,g)=>{const E=String(g._d||g._p);if(!m.has(E))return m.set(E,g);const T=m.get(E);if(((g==null?void 0:g.tagDuplicateStrategy)||($p.has(g.tag)?"merge":null)||(g.key&&g.key===T.key?"merge":null))==="merge"){const _={...T.props};Object.entries(g.props).forEach(([b,w])=>_[b]=b==="style"?new Map([...T.props.style||new Map,...w]):b==="class"?new Set([...T.props.class||new Set,...w]):w),m.set(E,{...g,props:_})}else g._p>>10===T._p>>10&&g.tag==="meta"&&Tl(E)?(m.set(E,Object.assign([...Array.isArray(T)?T:[T],g],g)),u=!0):(g._w===T._w?g._p>T._p:(g==null?void 0:g._w)<(T==null?void 0:T._w))&&m.set(E,g);return m},c.tagMap);const l=c.tagMap.get("title"),f=c.tagMap.get("titleTemplate");if(o._title=l==null?void 0:l.textContent,f){const m=f==null?void 0:f.textContent;if(o._titleTemplate=m,m){let g=typeof m=="function"?m(l==null?void 0:l.textContent):m;typeof g=="string"&&!o.plugins.has("template-params")&&(g=g.replace("%s",(l==null?void 0:l.textContent)||"")),l?g===null?c.tagMap.delete("title"):c.tagMap.set("title",{...l,textContent:g}):(f.tag="title",f.textContent=g)}}c.tags=Array.from(c.tagMap.values()),u&&(c.tags=c.tags.flat().sort(ei)),await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c);const d=[];for(const m of c.tags){const{innerHTML:g,tag:E,props:T}=m;if(Fp.has(E)&&!(Object.keys(T).length===0&&!m.innerHTML&&!m.textContent)&&!(E==="meta"&&!T.content&&!T["http-equiv"]&&!T.charset)){if(E==="script"&&g){if((y=T.type)!=null&&y.endsWith("json")){const P=typeof g=="string"?g:JSON.stringify(g);m.innerHTML=P.replace(/</g,"\\u003C")}else typeof g=="string"&&(m.innerHTML=g.replace(new RegExp(`</${E}`,"g"),`<\\/${E}`));m._d=Zs(m)}d.push(m)}}return d}};return((t==null?void 0:t.plugins)||[]).forEach(c=>Qo(o,c)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(c=>c&&o.push(c)),o}const dt="%separator",Qp=new RegExp(`${dt}(?:\\s*${dt})*`,"g");function Zp(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function lr(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(dt);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===dt||!i.includes(a))return a;const c=Zp(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(dt)&&(t=t.slice(0,-dt.length)),t.startsWith(dt)&&(t=t.slice(dt.length)),t=t.replace(Qp,n||"").trim()),t}const Zo=t=>t.includes(":key")?t:t.split(":").join(":key:"),eg={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=Zo(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=Zo(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(ei))}}},tg={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function ti(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>ti(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await ti(t[r]);return n}return t}const ng={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(ti(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},rg={meta:"content",link:"href",htmlAttrs:"lang"},sg=["innerHTML","textContent"],ig=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,s,i;const n=((s=(r=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const r=((i=e.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=lr(r.pageTitle||t._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const a=rg[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=lr(o.props[a],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const c of sg)typeof o[c]=="string"&&(o[c]=lr(o[c],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=lr(n.textContent,t._templateParams,t._separator))}}}),og=(t,e)=>ce(e)?lf(e):e,Cl="usehead";function ag(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Cl,t)}}.install}function cg(){if(Ai()){const t=tn(Cl);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function qb(t,e={}){const n=e.head||cg();return n.ssr?n.push(t||{},e):lg(n,t,e)}function lg(t,e,n={}){const r=De(!1);let s;return nd(()=>{const o=r.value?{}:Lr(e,og);s?s.patch(o):s=t.push(o,n)}),Xc()&&(bc(()=>{s.dispose()}),_c(()=>{r.value=!0}),mc(()=>{r.value=!1})),s}const ug="modulepreload",fg=function(t,e){return new URL(t,e).href},ea={},ta=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(l=>{if(l=fg(l,r),l in ea)return;ea[l]=!0;const f=l.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!r)for(let g=a.length-1;g>=0;g--){const E=a[g];if(E.href===l&&(!f||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":ug,f||(m.as="script"),m.crossOrigin="",m.href=l,u&&m.setAttribute("nonce",u),document.head.appendChild(m),f)return new Promise((g,E)=>{m.addEventListener("load",g),m.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let gr,mr;function dg(){return gr=$fetch(xi(`builds/meta/${Hn().app.buildId}.json`),{responseType:"json"}),gr.then(t=>{mr=pp(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),gr}function Zr(){return gr||dg()}async function ji(t){const e=typeof t=="string"?t:t.path;if(await Zr(),!mr)return console.error("[nuxt] Error creating app manifest matcher.",mr),{};try{return mp({},...mr.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function na(t,e={}){if(!await Al(t))return null;const r=await pg(t,e);return await Rl(r)||null}const hg="_payload.json";async function pg(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||gn(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Hn(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Al(t)?i:r.app.baseURL;return Qr(o,n.pathname,hg+(s?`?${s}`:""))}async function Rl(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(Pl));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Al(t=Ui().path){const e=me();return t=Di(t),(await Zr()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await ji({path:t});return!!r.prerender&&!r.redirect})}let Pt=null;async function gg(){var r;if(Pt)return Pt;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Pl(t.textContent||""),n=t.dataset.src?await Rl(t.dataset.src):void 0;return Pt={...e,...n,...window.__NUXT__},(r=Pt.config)!=null&&r.public&&(Pt.config.public=st(Pt.config.public)),Pt}async function Pl(t){return await Dp(t,me()._payloadRevivers)}function mg(t,e){me()._payloadRevivers[t]=e}const _g=[["NuxtError",t=>Fi(t)],["EmptyShallowRef",t=>co(t==="_"?void 0:t==="0n"?BigInt(0):Pr(t))],["EmptyRef",t=>De(t==="_"?void 0:t==="0n"?BigInt(0):Pr(t))],["ShallowRef",t=>co(t)],["ShallowReactive",t=>qt(t)],["Ref",t=>De(t)],["Reactive",t=>st(t)]],yg=Tt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of _g)mg(r,s);Object.assign(t.payload,([e,n]=ml(()=>t.runWithContext(gg)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Bi(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var y;const i=new Map,o=new Promise(m=>{t.resolveTags().then(g=>{m(g.map(E=>{const T=i.get(E._d)||0,P={tag:E,id:(T?`${E._d}:${T}`:E._d)||Jo(E),shouldRender:!0};return E._d&&Tl(E._d)&&i.set(E._d,T+1),P}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const m of["body","head"]){const g=(y=n[m])==null?void 0:y.children;for(const E of g){const T=E.tagName.toLowerCase();if(!zo.has(T))continue;const P=Sl({tag:T,props:{}},{innerHTML:E.innerHTML,...E.getAttributeNames().reduce((_,b)=>(_[b]=E.getAttribute(b),_),{})||{}});if(P.key=E.getAttribute("data-hid")||void 0,P._d=Zs(P)||Jo(P),a.elMap.has(P._d)){let _=1,b=P._d;for(;a.elMap.has(b);)b=`${P._d}:${_++}`;a.elMap.set(b,E)}else a.elMap.set(P._d,E)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(m,g,E){const T=`${m}:${g}`;a.sideEffects[T]=E,delete a.pendingSideEffects[T]}function u({id:m,$el:g,tag:E}){const T=E.tag.endsWith("Attrs");a.elMap.set(m,g),T||(E.textContent&&E.textContent!==g.textContent&&(g.textContent=E.textContent),E.innerHTML&&E.innerHTML!==g.innerHTML&&(g.innerHTML=E.innerHTML),c(m,"el",()=>{g==null||g.remove(),a.elMap.delete(m)}));for(const P in E.props){if(!Object.prototype.hasOwnProperty.call(E.props,P))continue;const _=E.props[P];if(P.startsWith("on")&&typeof _=="function"){const w=g==null?void 0:g.dataset;if(w&&w[`${P}fired`]){const N=P.slice(0,-5);_.call(g,new Event(N.substring(2)))}g.getAttribute(`data-${P}`)!==""&&((E.tag==="bodyAttrs"?n.defaultView:g).addEventListener(P.substring(2),_.bind(g)),g.setAttribute(`data-${P}`,""));continue}const b=`attr:${P}`;if(P==="class"){if(!_)continue;for(const w of _)T&&c(m,`${b}:${w}`,()=>g.classList.remove(w)),!g.classList.contains(w)&&g.classList.add(w)}else if(P==="style"){if(!_)continue;for(const[w,N]of _)c(m,`${b}:${w}`,()=>{g.style.removeProperty(w)}),g.style.setProperty(w,N)}else _!==!1&&_!==null&&(g.getAttribute(P)!==_&&g.setAttribute(P,_===!0?"":String(_)),T&&c(m,b,()=>g.removeAttribute(P)))}}const l=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const m of d){const{tag:g,shouldRender:E,id:T}=m;if(E){if(g.tag==="title"){n.title=g.textContent,c("title","",()=>n.title=a.title);continue}m.$el=m.$el||a.elMap.get(T),m.$el?u(m):zo.has(g.tag)&&l.push(m)}}for(const m of l){const g=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),u(m),f[g]=f[g]||n.createDocumentFragment(),f[g].appendChild(m.$el)}for(const m of d)await t.hooks.callHook("dom:renderTag",m,n,c);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const m in a.pendingSideEffects)a.pendingSideEffects[m]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:d}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function bg(t={}){var r,s,i;const e=((r=t.domOptions)==null?void 0:r.render)||Bi;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return Xp({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function vg(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function wg(t={}){const e=bg({domOptions:{render:vg(()=>Bi(e),n=>setTimeout(n,0))},...t});return e.install=ag(e),e}const Eg={disableDefaults:!0,disableCapoSorting:!1,plugins:[tg,ng,ig,eg]},Ig=Tt({name:"nuxt:head",enforce:"pre",setup(t){const e=wg(Eg);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Bi(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}}),Tg=async t=>{let e,n;const r=([e,n]=ml(()=>ji({path:t.path})),e=await e,n(),e);if(r.redirect)return gn(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},Sg=[Tg];function Is(t){const e=t&&typeof t=="object"?t:{};typeof t=="object"&&(t=fl({pathname:t.path||"",search:il(t.query||{}),hash:t.hash||""}));const n=new URL(t.toString(),window.location.href);return{path:n.pathname,fullPath:t,query:Li(n.search),hash:n.hash,params:e.params||{},name:void 0,matched:e.matched||[],redirectedFrom:void 0,meta:e.meta||{},href:t}}const Cg=Tt({name:"nuxt:router",enforce:"pre",setup(t){const e=Rh(window.location.pathname,Hn().app.baseURL)+window.location.search+window.location.hash,n=[],r={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},s=(f,d)=>(r[f].push(d),()=>r[f].splice(r[f].indexOf(d),1)),i=Hn().app.baseURL,o=st(Is(e));async function a(f,d){try{const y=Is(f);for(const m of r["navigate:before"]){const g=await m(y,o);if(g===!1||g instanceof Error)return;if(typeof g=="string"&&g.length)return a(g,!0)}for(const m of r["resolve:before"])await m(y,o);Object.assign(o,y),window.history[d?"replaceState":"pushState"]({},"",Qr(i,y.fullPath)),t.isHydrating||await t.runWithContext(Sp);for(const m of r["navigate:after"])await m(y,o)}catch(y){for(const m of r.error)await m(y)}}const u={currentRoute:el(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:f=>a(f,!1),replace:f=>a(f,!0),back:()=>window.history.go(-1),go:f=>window.history.go(f),forward:()=>window.history.go(1),beforeResolve:f=>s("resolve:before",f),beforeEach:f=>s("navigate:before",f),afterEach:f=>s("navigate:after",f),onError:f=>s("error",f),resolve:Is,addRoute:(f,d)=>{n.push(d)},getRoutes:()=>n,hasRoute:f=>n.some(d=>d.name===f),removeRoute:f=>{const d=n.findIndex(y=>y.name===f);d!==-1&&n.splice(d,1)}};t.vueApp.component("RouterLink",Si({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(f,{slots:d})=>{const y=()=>a(f.to,f.replace);return()=>{var g;const m=u.resolve(f.to);return f.custom?(g=d.default)==null?void 0:g.call(d,{href:f.to,navigate:y,route:m}):Pd("a",{href:f.to,onClick:E=>(E.preventDefault(),y())},d)}}})),window.addEventListener("popstate",f=>{const d=f.target.location;u.replace(d.href.replace(d.origin,""))}),t._route=o,t._middleware||(t._middleware={global:[],named:{}});const l=t.payload.state._layout;return t.hooks.hookOnce("app:created",async()=>{u.beforeEach(async(f,d)=>{f.meta=st(f.meta||{}),t.isHydrating&&l&&!Et(f.meta.layout)&&(f.meta.layout=l),t._processingMiddleware=!0;{const y=new Set([...Sg,...t._middleware.global]);{const m=await t.runWithContext(()=>ji({path:f.path}));if(m.appMiddleware)for(const g in m.appMiddleware){const E=t._middleware.named[g];if(!E)return;m.appMiddleware[g]?y.add(E):y.delete(E)}}for(const m of y){const g=await t.runWithContext(()=>m(f,d));if(g!==!0&&(g||g===!1))return g}}}),u.afterEach(()=>{delete t._processingMiddleware}),await u.replace(e),Ph(o.fullPath,e)||await t.runWithContext(()=>Ep(o.fullPath))}),{provide:{route:o,router:u}}}}),ra=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),Gb=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),$i=t=>{const e=me();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{ra(()=>t())}):ra(()=>t())},Rg=Tt({name:"nuxt:payload",setup(t){const e=new Set;xt().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await na(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),$i(()=>{var n;t.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await na(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Zr,1e3)})}}),Ag=Tt(()=>{const t=xt();$i(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Pg=Tt(t=>{let e;async function n(){const r=await Zr();e&&clearTimeout(e),e=setTimeout(n,Vo);try{const s=await $fetch(xi("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}$i(()=>{e=setTimeout(n,Vo)})});function kg(t={}){const e=t.path||window.location.pathname;let n={};try{n=Pr(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:me().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Og=Tt({name:"nuxt:chunk-reload",setup(t){const e=xt(),n=Hn(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Qr(n.app.baseURL,i.fullPath);kg({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),Mg=Tt({name:"nuxt:global-components"}),Ng=[yg,Ig,Cg,Rg,Ag,Pg,Og,Mg],Lg=()=>{};var sa={};/**
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
 */const kl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Dg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;c||(y=64,o||(d=64)),r.push(n[l],n[f],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new xg;const d=i<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const m=u<<6&192|f;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ug=function(t){const e=kl(t);return Ol.encodeByteArray(e,!0)},Ml=function(t){return Ug(t).replace(/\./g,"")},Nl=function(t){try{return Ol.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fg=()=>Hg().__FIREBASE_DEFAULTS__,jg=()=>{if(typeof process>"u"||typeof sa>"u")return;const t=sa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nl(t[1]);return e&&JSON.parse(e)},Wi=()=>{try{return Lg()||Fg()||jg()||Bg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$g=t=>{var e,n;return(n=(e=Wi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ll=()=>{var t;return(t=Wi())===null||t===void 0?void 0:t.config},Dl=t=>{var e;return(e=Wi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return t.endsWith(".cloudworkstations.dev")}async function Vg(t){return(await fetch(t,{credentials:"include"})).ok}const kn={};function Kg(){const t={prod:[],emulator:[]};for(const e of Object.keys(kn))kn[e]?t.emulator.push(e):t.prod.push(e);return t}function qg(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ia=!1;function Gg(t,e){if(typeof window>"u"||typeof document>"u"||!Vi(window.location.host)||kn[t]===e||kn[t]||ia)return;kn[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=Kg().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,y){d.setAttribute("width","24"),d.setAttribute("id",y),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{ia=!0,o()},d}function l(d,y){d.setAttribute("id",y),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=qg(r),y=n("text"),m=document.getElementById(y)||document.createElement("span"),g=n("learnmore"),E=document.getElementById(g)||document.createElement("a"),T=n("preprendIcon"),P=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const _=d.element;a(_),l(E,g);const b=u();c(P,T),_.append(P,m,E,b),document.body.appendChild(_)}i?(m.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(P.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Jg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qg(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zg(){try{return typeof indexedDB=="object"}catch{return!1}}function em(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const tm="FirebaseError";class St extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tm,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?nm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new St(s,a,r)}}function nm(t,e){return t.replace(rm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rm=/\{\$([^}]+)}/g;function sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(oa(i)&&oa(o)){if(!fn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oa(t){return t!==null&&typeof t=="object"}/**
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
 */function Gn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function In(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Tn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function im(t,e){const n=new om(t,e);return n.subscribe.bind(n)}class om{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");am(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ts),s.error===void 0&&(s.error=Ts),s.complete===void 0&&(s.complete=Ts);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function am(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ts(){}/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ot="[DEFAULT]";/**
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
 */class cm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(um(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lm(t){return t===Ot?void 0:t}function um(t){return t.instantiationMode==="EAGER"}/**
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
 */class fm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const dm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},hm=ee.INFO,pm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},gm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=hm,this._logHandler=gm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const mm=(t,e)=>e.some(n=>t instanceof n);let aa,ca;function _m(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ym(){return ca||(ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ul=new WeakMap,ni=new WeakMap,Hl=new WeakMap,Ss=new WeakMap,Ki=new WeakMap;function bm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ul.set(n,t)}).catch(()=>{}),Ki.set(e,t),e}function vm(t){if(ni.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ni.set(t,e)}let ri={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wm(t){ri=t(ri)}function Em(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cs(this),e,...n);return Hl.set(r,e.sort?e.sort():[e]),bt(r)}:ym().includes(t)?function(...e){return t.apply(Cs(this),e),bt(Ul.get(this))}:function(...e){return bt(t.apply(Cs(this),e))}}function Im(t){return typeof t=="function"?Em(t):(t instanceof IDBTransaction&&vm(t),mm(t,_m())?new Proxy(t,ri):t)}function bt(t){if(t instanceof IDBRequest)return bm(t);if(Ss.has(t))return Ss.get(t);const e=Im(t);return e!==t&&(Ss.set(t,e),Ki.set(e,t)),e}const Cs=t=>Ki.get(t);function Tm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bt(o.result),c.oldVersion,c.newVersion,bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Sm=["get","getKey","getAll","getAllKeys","count"],Cm=["put","add","delete","clear"],Rs=new Map;function la(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rs.get(e))return Rs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Cm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sm.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Rs.set(e,i),i}wm(t=>({...t,get:(e,n,r)=>la(e,n)||t.get(e,n,r),has:(e,n)=>!!la(e,n)||t.has(e,n)}));/**
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
 */class Rm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Am(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Am(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const si="@firebase/app",ua="0.13.0";/**
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
 */const it=new xl("@firebase/app"),Pm="@firebase/app-compat",km="@firebase/analytics-compat",Om="@firebase/analytics",Mm="@firebase/app-check-compat",Nm="@firebase/app-check",Lm="@firebase/auth",Dm="@firebase/auth-compat",xm="@firebase/database",Um="@firebase/data-connect",Hm="@firebase/database-compat",Fm="@firebase/functions",jm="@firebase/functions-compat",Bm="@firebase/installations",$m="@firebase/installations-compat",Wm="@firebase/messaging",Vm="@firebase/messaging-compat",Km="@firebase/performance",qm="@firebase/performance-compat",Gm="@firebase/remote-config",zm="@firebase/remote-config-compat",Jm="@firebase/storage",Ym="@firebase/storage-compat",Xm="@firebase/firestore",Qm="@firebase/ai",Zm="@firebase/firestore-compat",e_="firebase",t_="11.8.0";/**
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
 */const ii="[DEFAULT]",n_={[si]:"fire-core",[Pm]:"fire-core-compat",[Om]:"fire-analytics",[km]:"fire-analytics-compat",[Nm]:"fire-app-check",[Mm]:"fire-app-check-compat",[Lm]:"fire-auth",[Dm]:"fire-auth-compat",[xm]:"fire-rtdb",[Um]:"fire-data-connect",[Hm]:"fire-rtdb-compat",[Fm]:"fire-fn",[jm]:"fire-fn-compat",[Bm]:"fire-iid",[$m]:"fire-iid-compat",[Wm]:"fire-fcm",[Vm]:"fire-fcm-compat",[Km]:"fire-perf",[qm]:"fire-perf-compat",[Gm]:"fire-rc",[zm]:"fire-rc-compat",[Jm]:"fire-gcs",[Ym]:"fire-gcs-compat",[Xm]:"fire-fst",[Zm]:"fire-fst-compat",[Qm]:"fire-vertex","fire-js":"fire-js",[e_]:"fire-js-all"};/**
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
 */const Dr=new Map,r_=new Map,oi=new Map;function fa(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(oi.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;oi.set(e,t);for(const n of Dr.values())fa(n,t);for(const n of r_.values())fa(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ke(t){return t==null?!1:t.settings!==void 0}/**
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
 */const s_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new qn("app","Firebase",s_);/**
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
 */class i_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=t_;function jl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ii,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});if(n||(n=Ll()),!n)throw vt.create("no-options");const i=Dr.get(s);if(i){if(fn(n,i.options)&&fn(r,i.config))return i;throw vt.create("duplicate-app",{appName:s})}const o=new fm(s);for(const c of oi.values())o.addComponent(c);const a=new i_(n,r,o);return Dr.set(s,a),a}function o_(t=ii){const e=Dr.get(t);if(!e&&t===ii&&Ll())return jl();if(!e)throw vt.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=n_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(a.join(" "));return}Fn(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const a_="firebase-heartbeat-database",c_=1,jn="firebase-heartbeat-store";let As=null;function Bl(){return As||(As=Tm(a_,c_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jn)}catch(n){console.warn(n)}}}}).catch(t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})})),As}async function l_(t){try{const n=(await Bl()).transaction(jn),r=await n.objectStore(jn).get($l(t));return await n.done,r}catch(e){if(e instanceof St)it.warn(e.message);else{const n=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(n.message)}}}async function da(t,e){try{const r=(await Bl()).transaction(jn,"readwrite");await r.objectStore(jn).put(e,$l(t)),await r.done}catch(n){if(n instanceof St)it.warn(n.message);else{const r=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});it.warn(r.message)}}}function $l(t){return`${t.name}!${t.options.appId}`}/**
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
 */const u_=1024,f_=30;class d_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ha();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>f_){const o=g_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ha(),{heartbeatsToSend:r,unsentEntries:s}=h_(this._heartbeatsCache.heartbeats),i=Ml(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return it.warn(n),""}}}function ha(){return new Date().toISOString().substring(0,10)}function h_(t,e=u_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class p_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zg()?em().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await l_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pa(t){return Ml(JSON.stringify({version:2,heartbeats:t})).length}function g_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function m_(t){Fn(new dn("platform-logger",e=>new Rm(e),"PRIVATE")),Fn(new dn("heartbeat",e=>new d_(e),"PRIVATE")),rn(si,ua,t),rn(si,ua,"esm2017"),rn("fire-js","")}m_("");var __="firebase",y_="11.8.1";/**
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
 */rn(__,y_,"app");function qi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b_=Wl,Vl=new qn("auth","Firebase",Wl());/**
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
 */const xr=new xl("@firebase/auth");function v_(t,...e){xr.logLevel<=ee.WARN&&xr.warn(`Auth (${zn}): ${t}`,...e)}function _r(t,...e){xr.logLevel<=ee.ERROR&&xr.error(`Auth (${zn}): ${t}`,...e)}/**
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
 */function je(t,...e){throw Gi(t,...e)}function Ge(t,...e){return Gi(t,...e)}function Kl(t,e,n){const r=Object.assign(Object.assign({},b_()),{[e]:n});return new qn("auth","Firebase",r).create(e,{appName:t.name})}function wt(t){return Kl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vl.create(t,...e)}function j(t,e,...n){if(!t)throw Gi(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _r(e),new Error(e)}function ot(t,e){t||et(e)}/**
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
 */function ai(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function w_(){return ga()==="http:"||ga()==="https:"}function ga(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function E_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(w_()||Yg()||"connection"in navigator)?navigator.onLine:!0}function I_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=zg()||Xg()}get(){return E_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zi(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ql{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const S_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C_=new Jn(3e4,6e4);function jt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ct(t,e,n,r,s={}){return Gl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Gn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Jg()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Vi(t.emulatorConfig.host)&&(u.credentials="include"),ql.fetch()(await zl(t,t.config.apiHost,n,a),u)})}async function Gl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},T_),e);try{const s=new A_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ur(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ur(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ur(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ur(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kl(t,l,u);je(t,l)}}catch(s){if(s instanceof St)throw s;je(t,"network-request-failed",{message:String(s)})}}async function es(t,e,n,r,s={}){const i=await Ct(t,e,n,r,s);return"mfaPendingCredential"in i&&je(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function zl(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?zi(t.config,s):`${t.config.apiScheme}://${s}`;return S_.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function R_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),C_.get())})}}function ur(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ge(t,e,r);return s.customData._tokenResponse=n,s}function ma(t){return t!==void 0&&t.enterprise!==void 0}class P_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return R_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function k_(t,e){return Ct(t,"GET","/v2/recaptchaConfig",jt(t,e))}/**
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
 */async function O_(t,e){return Ct(t,"POST","/v1/accounts:delete",e)}async function Ur(t,e){return Ct(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M_(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=Ji(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(Ps(s.auth_time)),issuedAtTime:On(Ps(s.iat)),expirationTime:On(Ps(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ps(t){return Number(t)*1e3}function Ji(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nl(n);return s?JSON.parse(s):(_r("Failed to decode base64 JWT payload"),null)}catch(s){return _r("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _a(t){const e=Ji(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof St&&N_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function N_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class L_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ci{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bn(t,Ur(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Jl(i.providerUserInfo):[],a=x_(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ci(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function D_(t){const e=Ft(t);await Hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jl(t){return t.map(e=>{var{providerId:n}=e,r=qi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function U_(t,e){const n=await Gl(t,{},async()=>{const r=Gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await zl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ql.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function H_(t,e){return Ct(t,"POST","/v2/accounts:revokeToken",jt(t,e))}/**
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
 */class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_a(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=_a(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await U_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new sn;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function lt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xe{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ci(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return M_(this,e)}reload(){return D_(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(wt(this.auth));const e=await this.getIdToken();return await Bn(this,O_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:N,stsTokenManager:F}=n;j(_&&F,e,"internal-error");const K=sn.fromJSON(this.name,F);j(typeof _=="string",e,"internal-error"),lt(f,e.name),lt(d,e.name),j(typeof b=="boolean",e,"internal-error"),j(typeof w=="boolean",e,"internal-error"),lt(y,e.name),lt(m,e.name),lt(g,e.name),lt(E,e.name),lt(T,e.name),lt(P,e.name);const $=new xe({uid:_,auth:e,email:d,emailVerified:b,displayName:f,isAnonymous:w,photoURL:m,phoneNumber:y,tenantId:g,stsTokenManager:K,createdAt:T,lastLoginAt:P});return N&&Array.isArray(N)&&($.providerData=N.map(L=>Object.assign({},L))),E&&($._redirectEventId=E),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new sn;s.updateFromServerResponse(n);const i=new xe({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new sn;a.updateFromIdToken(r);const c=new xe({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ci(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const ya=new Map;function tt(t){ot(t instanceof Function,"Expected a class definition");let e=ya.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ya.set(t,e),e)}/**
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
 */class Yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yl.type="NONE";const ba=Yl;/**
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
 */function yr(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yr(this.userKey,s.apiKey,i),this.fullPersistenceKey=yr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ur(this.auth,{idToken:e}).catch(()=>{});return n?xe._fromGetAccountInfoResponse(this.auth,n,e):null}return xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new on(tt(ba),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tt(ba);const o=yr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){let f;if(typeof l=="string"){const d=await Ur(e,{idToken:l}).catch(()=>{});if(!d)break;f=await xe._fromGetAccountInfoResponse(e,d,l)}else f=xe._fromJSON(e,l);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new on(i,e,r))}}/**
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
 */function va(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nu(e))return"Blackberry";if(ru(e))return"Webos";if(Ql(e))return"Safari";if((e.includes("chrome/")||Zl(e))&&!e.includes("edge/"))return"Chrome";if(tu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xl(t=we()){return/firefox\//i.test(t)}function Ql(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zl(t=we()){return/crios\//i.test(t)}function eu(t=we()){return/iemobile/i.test(t)}function tu(t=we()){return/android/i.test(t)}function nu(t=we()){return/blackberry/i.test(t)}function ru(t=we()){return/webos/i.test(t)}function Yi(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F_(t=we()){var e;return Yi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function j_(){return Qg()&&document.documentMode===10}function su(t=we()){return Yi(t)||tu(t)||ru(t)||nu(t)||/windows phone/i.test(t)||eu(t)}/**
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
 */function iu(t,e=[]){let n;switch(t){case"Browser":n=va(we());break;case"Worker":n=`${va(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${r}`}/**
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
 */class B_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $_(t,e={}){return Ct(t,"GET","/v2/passwordPolicy",jt(t,e))}/**
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
 */const W_=6;class V_{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:W_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class K_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wa(this),this.idTokenSubscription=new wa(this),this.beforeStateQueue=new B_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ur(this,{idToken:e}),r=await xe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(wt(this));const n=e?Ft(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $_(this),n=new V_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await H_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&v_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mn(t){return Ft(t)}class wa{constructor(e){this.auth=e,this.observer=null,this.addObserver=im(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ts={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q_(t){ts=t}function ou(t){return ts.loadJS(t)}function G_(){return ts.recaptchaEnterpriseScript}function z_(){return ts.gapiScript}function J_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Y_{constructor(){this.enterprise=new X_}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class X_{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Q_="recaptcha-enterprise",au="NO_RECAPTCHA";class Z_{constructor(e){this.type=Q_,this.auth=mn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{k_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new P_(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ma(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(au)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y_().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ma(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=G_();c.length!==0&&(c+=a),ou(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ea(t,e,n,r=!1,s=!1){const i=new Z_(t);let o;if(s)o=au;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ia(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ea(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ea(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function ey(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fn(i,e??{}))return s;je(s,"already-initialized")}return n.initialize({options:e})}function ty(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ny(t,e,n){const r=mn(t);j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cu(e),{host:o,port:a}=ry(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},l=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(fn(u,r.config.emulator)&&fn(l,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,Vi(o)?(Vg(`${i}//${o}${c}`),Gg("Auth",!0)):sy()}function cu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ry(t){const e=cu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ta(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ta(o)}}}function Ta(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function iy(t,e){return Ct(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function oy(t,e){return es(t,"POST","/v1/accounts:signInWithPassword",jt(t,e))}/**
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
 */async function ay(t,e){return es(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}async function cy(t,e){return es(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}/**
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
 */class $n extends Xi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $n(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $n(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(e,n,"signInWithPassword",oy);case"emailLink":return ay(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(e,r,"signUpPassword",iy);case"emailLink":return cy(e,{idToken:n,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function an(t,e){return es(t,"POST","/v1/accounts:signInWithIdp",jt(t,e))}/**
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
 */const ly="http://localhost";class Ut extends Xi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ut(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:ly,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gn(n)}return e}}/**
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
 */function uy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fy(t){const e=In(Tn(t)).link,n=e?In(Tn(e)).deep_link_id:null,r=In(Tn(t)).deep_link_id;return(r?In(Tn(r)).link:null)||r||n||e||t}class Qi{constructor(e){var n,r,s,i,o,a;const c=In(Tn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,f=uy((s=c.mode)!==null&&s!==void 0?s:null);j(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fy(e);try{return new Qi(n)}catch{return null}}}/**
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
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,n){return $n._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qi.parseLink(n);return j(r,"argument-error"),$n._fromEmailAndCode(e,r.code,r.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yn extends lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pt extends Yn{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
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
 */class gt extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ut._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
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
 */class mt extends Yn{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
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
 */class _t extends Yn{constructor(){super("twitter.com")}static credential(e,n){return Ut._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
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
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xe._fromIdTokenResponse(e,r,s),o=Sa(r);return new hn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Sa(r);return new hn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Sa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fr extends St{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fr(e,n,r,s)}}function uu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fr._fromErrorAndOperation(t,i,e,r):i})}async function dy(t,e,n=!1){const r=await Bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hn._forOperation(t,"link",r)}/**
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
 */async function hy(t,e,n=!1){const{auth:r}=t;if(Ke(r.app))return Promise.reject(wt(r));const s="reauthenticate";try{const i=await Bn(t,uu(r,s,e,t),n);j(i.idToken,r,"internal-error");const o=Ji(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),hn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(r,"user-mismatch"),i}}/**
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
 */async function fu(t,e,n=!1){if(Ke(t.app))return Promise.reject(wt(t));const r="signIn",s=await uu(t,r,e),i=await hn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function py(t,e){return fu(mn(t),e)}/**
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
 */async function gy(t){const e=mn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function my(t,e,n){return Ke(t.app)?Promise.reject(wt(t)):py(Ft(t),_n.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gy(t),r})}function _y(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function yy(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}const jr="__sak";/**
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
 */class du{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const by=1e3,vy=10;class hu extends du{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=su(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);j_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vy):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},by)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hu.type="LOCAL";const wy=hu;/**
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
 */class pu extends du{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pu.type="SESSION";const gu=pu;/**
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
 */function Ey(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Ey(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ns.receivers=[];/**
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
 */function Zi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Iy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Zi("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ze(){return window}function Ty(t){ze().location.href=t}/**
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
 */function mu(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function Sy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ry(){return mu()?self:null}/**
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
 */const _u="firebaseLocalStorageDb",Ay=1,Br="firebaseLocalStorage",yu="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rs(t,e){return t.transaction([Br],e?"readwrite":"readonly").objectStore(Br)}function Py(){const t=indexedDB.deleteDatabase(_u);return new Xn(t).toPromise()}function li(){const t=indexedDB.open(_u,Ay);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Br,{keyPath:yu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Br)?e(r):(r.close(),await Py(),e(await li()))})})}async function Ca(t,e,n){const r=rs(t,!0).put({[yu]:e,value:n});return new Xn(r).toPromise()}async function ky(t,e){const n=rs(t,!1).get(e),r=await new Xn(n).toPromise();return r===void 0?null:r.value}function Ra(t,e){const n=rs(t,!0).delete(e);return new Xn(n).toPromise()}const Oy=800,My=3;class bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await li(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>My)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ns._getInstance(Ry()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sy(),!this.activeServiceWorker)return;this.sender=new Iy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await li();return await Ca(e,jr,"1"),await Ra(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ca(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ky(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ra(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rs(s,!1).getAll();return new Xn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bu.type="LOCAL";const Ny=bu;new Jn(3e4,6e4);/**
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
 */function Ly(t,e){return e?tt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eo extends Xi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Dy(t){return fu(t.auth,new eo(t),t.bypassAuthState)}function xy(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),hy(n,new eo(t),t.bypassAuthState)}async function Uy(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),dy(n,new eo(t),t.bypassAuthState)}/**
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
 */class vu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dy;case"linkViaPopup":case"linkViaRedirect":return Uy;case"reauthViaPopup":case"reauthViaRedirect":return xy;default:je(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hy=new Jn(2e3,1e4);class zt extends vu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zt.currentPopupAction&&zt.currentPopupAction.cancel(),zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hy.get())};e()}}zt.currentPopupAction=null;/**
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
 */const Fy="pendingRedirect",br=new Map;class jy extends vu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=br.get(this.auth._key());if(!e){try{const r=await By(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}br.set(this.auth._key(),e)}return this.bypassAuthState||br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function By(t,e){const n=Vy(e),r=Wy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $y(t,e){br.set(t._key(),e)}function Wy(t){return tt(t._redirectPersistence)}function Vy(t){return yr(Fy,t.config.apiKey,t.name)}async function Ky(t,e,n=!1){if(Ke(t.app))return Promise.reject(wt(t));const r=mn(t),s=Ly(r,e),o=await new jy(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qy=10*60*1e3;class Gy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Aa(e))}saveEventToCache(e){this.cachedEventUids.add(Aa(e)),this.lastProcessedEventTime=Date.now()}}function Aa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wu(t);default:return!1}}/**
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
 */async function Jy(t,e={}){return Ct(t,"GET","/v1/projects",e)}/**
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
 */const Yy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xy=/^https?/;async function Qy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jy(t);for(const n of e)try{if(Zy(n))return}catch{}je(t,"unauthorized-domain")}function Zy(t){const e=ai(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xy.test(n))return!1;if(Yy.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eb=new Jn(3e4,6e4);function Pa(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tb(t){return new Promise((e,n)=>{var r,s,i;function o(){Pa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pa(),n(Ge(t,"network-request-failed"))},timeout:eb.get()})}if(!((s=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const a=J_("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Ge(t,"network-request-failed"))},ou(`${z_()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vr=null,e})}let vr=null;function nb(t){return vr=vr||tb(t),vr}/**
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
 */const rb=new Jn(5e3,15e3),sb="__/auth/iframe",ib="emulator/auth/iframe",ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ab=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cb(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zi(e,ib):`https://${t.config.authDomain}/${sb}`,r={apiKey:e.apiKey,appName:t.name,v:zn},s=ab.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gn(r).slice(1)}`}async function lb(t){const e=await nb(t),n=ze().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:cb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ob,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(t,"network-request-failed"),a=ze().setTimeout(()=>{i(o)},rb.get());function c(){ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ub={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fb=500,db=600,hb="_blank",pb="http://localhost";class ka{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gb(t,e,n,r=fb,s=db){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ub),{width:r.toString(),height:s.toString(),top:i,left:o}),u=we().toLowerCase();n&&(a=Zl(u)?hb:n),Xl(u)&&(e=e||pb,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[y,m])=>`${d}${y}=${m},`,"");if(F_(u)&&a!=="_self")return mb(e||"",a),new ka(null);const f=window.open(e||"",a,l);j(f,t,"popup-blocked");try{f.focus()}catch{}return new ka(f)}function mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _b="__/auth/handler",yb="emulator/auth/handler",bb=encodeURIComponent("fac");async function Oa(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zn,eventId:s};if(e instanceof lu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,f]of Object.entries({}))o[l]=f}if(e instanceof Yn){const l=e.getScopes().filter(f=>f!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${bb}=${encodeURIComponent(c)}`:"";return`${vb(t)}?${Gn(a).slice(1)}${u}`}function vb({config:t}){return t.emulator?zi(t,yb):`https://${t.authDomain}/${_b}`}/**
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
 */const ks="webStorageSupport";class wb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gu,this._completeRedirectFn=Ky,this._overrideRedirectResult=$y}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Oa(e,n,r,ai(),s);return gb(e,o,Zi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Oa(e,n,r,ai(),s);return Ty(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lb(e),r=new Gy(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ks,{type:ks},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ks];o!==void 0&&n(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return su()||Ql()||Yi()}}const Eb=wb;var Ma="@firebase/auth",Na="1.10.6";/**
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
 */class Ib{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sb(t){Fn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iu(t)},u=new K_(r,s,i,c);return ty(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new dn("auth-internal",e=>{const n=mn(e.getProvider("auth").getImmediate());return(r=>new Ib(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Ma,Na,Tb(t)),rn(Ma,Na,"esm2017")}/**
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
 */const Cb=5*60,Rb=Dl("authIdTokenMaxAge")||Cb;let La=null;const Ab=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Rb)return;const s=n==null?void 0:n.token;La!==s&&(La=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pb(t=o_()){const e=Fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ey(t,{popupRedirectResolver:Eb,persistence:[Ny,wy,gu]}),r=Dl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ab(i.toString());yy(n,o,()=>o(n.currentUser)),_y(n,a=>o(a))}}const s=$g("auth");return s&&ny(n,`http://${s}`),n}function kb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}q_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",kb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sb("Browser");async function Ob(){const e=await(await fetch("/api/config.json")).json(),n=jl(e);return Pb(n)}const Mb={class:"login-container"},Nb={key:0},Lb={class:"form-group"},Db={class:"form-group"},xb=Si({__name:"Login",setup(t){const e=Ui(),n=De(""),r=De(""),s=De(""),i=st({requestId:e.query.request_id||"",idToken:""}),o=De(),a=async()=>{try{const u=(await my(await Ob(),n.value,r.value)).user;i.idToken=await u.getIdToken(),Ei(()=>{o.value.submit()})}catch{s.value="Login failed. Please check your credentials."}};return(c,u)=>(Oe(),Rr("div",Mb,[u[6]||(u[6]=Ae("h1",null,"Login",-1)),se(s)!=""?(Oe(),Rr("div",Nb,Va(se(s)),1)):yd("",!0),Ae("div",Lb,[u[4]||(u[4]=Ae("label",{for:"email"},"Email:",-1)),rr(Ae("input",{type:"email",id:"email","onUpdate:modelValue":u[0]||(u[0]=l=>ce(n)?n.value=l:null),required:""},null,512),[[or,se(n)]])]),Ae("div",Db,[u[5]||(u[5]=Ae("label",{for:"password"},"Password:",-1)),rr(Ae("input",{type:"password",id:"password","onUpdate:modelValue":u[1]||(u[1]=l=>ce(r)?r.value=l:null),required:""},null,512),[[or,se(r)]])]),Ae("button",{onClickOnce:a},"Login",32),Ae("form",{action:"/api/login",ref_key:"loginForm",ref:o,method:"POST"},[rr(Ae("input",{type:"hidden",name:"request_id","onUpdate:modelValue":u[2]||(u[2]=l=>se(i).requestId=l)},null,512),[[or,se(i).requestId]]),rr(Ae("input",{type:"hidden",name:"id_token","onUpdate:modelValue":u[3]||(u[3]=l=>se(i).idToken=l)},null,512),[[or,se(i).idToken]])],512)]))}}),Eu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ub=Eu(xb,[["__scopeId","data-v-09ebc5aa"]]),Hb={};function Fb(t,e){const n=Ub;return Oe(),Rr("div",null,[ae(n)])}const jb=Eu(Hb,[["render",Fb]]),Bb={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,l=s?ho(()=>ta(()=>import("./DXWnO_nj.js"),__vite__mapDeps([0,1,2]),import.meta.url)):ho(()=>ta(()=>import("./T5PkGwFL.js"),__vite__mapDeps([3,1,4]),import.meta.url));return(f,d)=>(Oe(),Mt(se(l),Uu(Jc({statusCode:se(r),statusMessage:se(i),description:se(o),stack:se(a)})),null,16))}},$b={key:0},Da={__name:"nuxt-root",setup(t){const e=()=>null,n=me(),r=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",r);xt().beforeEach(u)}const s=!1;Ac(El,Ui()),n.hooks.callHookWith(u=>u.map(l=>l()),"vue:setup");const i=Hi(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b|googlebot/i;wc((u,l,f)=>{if(n.hooks.callHook("vue:error",u,l,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(Cp(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Tp(u)),!1});const c=!1;return(u,l)=>(Oe(),Mt(fd,{onResolve:se(r)},{default:gc(()=>[se(o)?(Oe(),Rr("div",$b)):se(i)?(Oe(),Mt(se(Bb),{key:1,error:se(i)},null,8,["error"])):se(c)?(Oe(),Mt(se(e),{key:2,context:se(c)},null,8,["context"])):se(s)?(Oe(),Mt(xf(se(s)),{key:3})):(Oe(),Mt(se(jb),{key:4}))]),_:1},8,["onResolve"]))}};let xa;{let t;xa=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?eh(Da):Zd(Da),s=cp({vueApp:r});async function i(c){var u;await s.callHook("app:error",c),(u=s.payload).error||(u.error=Fi(c))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await fp(s,Ng)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(ip),await s.hooks.callHook("app:mounted",r),await Ei()}catch(c){i(c)}return r},t=xa().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{ae as A,gc as B,Yc as C,qb as D,dp as E,Ai as F,tn as G,Cl as H,Eu as _,me as a,$i as b,ra as c,Si as d,bc as e,Gb as f,Vb as g,Pd as h,Ip as i,el as j,gn as k,Qr as l,Hn as m,Ep as n,kf as o,Li as p,Di as q,De as r,co as s,Kb as t,xt as u,Rr as v,Gs as w,Oe as x,Ae as y,Va as z};
