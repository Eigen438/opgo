const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D27sAlj8.js","./C-NGv8lr.js","./error-404.4oxyXxx0.css","./Ds32dyqv.js","./error-500.CZqNkBuR.css"])))=>i.map(i=>d[i]);
var Su=Object.defineProperty;var Cu=(t,e,n)=>e in t?Su(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var at=(t,e,n)=>Cu(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ci(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const te={},Jt=[],Ke=()=>{},Au=()=>!1,Wn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),li=t=>t.startsWith("onUpdate:"),ge=Object.assign,ui=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ru=Object.prototype.hasOwnProperty,Q=(t,e)=>Ru.call(t,e),W=Array.isArray,Yt=t=>jr(t)==="[object Map]",xa=t=>jr(t)==="[object Set]",B=t=>typeof t=="function",oe=t=>typeof t=="string",It=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",Ua=t=>(se(t)||B(t))&&B(t.then)&&B(t.catch),Ha=Object.prototype.toString,jr=t=>Ha.call(t),Pu=t=>jr(t).slice(8,-1),Fa=t=>jr(t)==="[object Object]",fi=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xt=ci(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ku=/-(\w)/g,Oe=Br(t=>t.replace(ku,(e,n)=>n?n.toUpperCase():"")),Ou=/\B([A-Z])/g,Ht=Br(t=>t.replace(Ou,"-$1").toLowerCase()),$r=Br(t=>t.charAt(0).toUpperCase()+t.slice(1)),is=Br(t=>t?`on${$r(t)}`:""),_t=(t,e)=>!Object.is(t,e),lr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ja=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ps=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Mu=t=>{const e=oe(t)?Number(t):NaN;return isNaN(e)?t:e};let no;const Wr=()=>no||(no=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?xu(r):Vr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(oe(t)||se(t))return t}const Nu=/;(?![^(]*\))/g,Lu=/:([^]+)/,Du=/\/\*[^]*?\*\//g;function xu(t){const e={};return t.replace(Du,"").split(Nu).forEach(n=>{if(n){const r=n.split(Lu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kr(t){let e="";if(oe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=Kr(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Uu(t){if(!t)return null;let{class:e,style:n}=t;return e&&!oe(e)&&(t.class=Kr(e)),n&&(t.style=Vr(n)),t}const Hu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fu=ci(Hu);function Ba(t){return!!t||t===""}const $a=t=>!!(t&&t.__v_isRef===!0),Wa=t=>oe(t)?t:t==null?"":W(t)||se(t)&&(t.toString===Ha||!B(t.toString))?$a(t)?Wa(t.value):JSON.stringify(t,Va,2):String(t),Va=(t,e)=>$a(e)?Va(t,e.value):Yt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[os(r,i)+" =>"]=s,n),{})}:xa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>os(n))}:It(e)?os(e):se(e)&&!W(e)&&!Fa(e)?String(e):e,os=(t,e="")=>{var n;return It(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class Ka{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){this._on>0&&--this._on===0&&(Ee=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ju(t){return new Ka(t)}function qa(){return Ee}let re;const as=new WeakSet;class Ga{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,as.has(this)&&(as.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ja(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ro(this),Ya(this);const e=re,n=De;re=this,De=!0;try{return this.fn()}finally{Xa(this),re=e,De=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pi(e);this.deps=this.depsTail=void 0,ro(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?as.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ks(this)&&this.run()}get dirty(){return ks(this)}}let za=0,Sn,Cn;function Ja(t,e=!1){if(t.flags|=8,e){t.next=Cn,Cn=t;return}t.next=Sn,Sn=t}function di(){za++}function hi(){if(--za>0)return;if(Cn){let e=Cn;for(Cn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Sn;){let e=Sn;for(Sn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ya(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xa(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),pi(r),Bu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ks(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mn)||(t.globalVersion=Mn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ks(t))))return;t.flags|=2;const e=t.dep,n=re,r=De;re=t,De=!0;try{Ya(t);const s=t.fn(t._value);(e.version===0||_t(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{re=n,De=r,Xa(t),t.flags&=-3}}function pi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)pi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Bu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let De=!0;const Za=[];function nt(){Za.push(De),De=!1}function rt(){const t=Za.pop();De=t===void 0?!0:t}function ro(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Mn=0;class $u{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!De||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new $u(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,ec(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=r)}return n}trigger(e){this.version++,Mn++,this.notify(e)}notify(e){di();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hi()}}}function ec(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ec(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const br=new WeakMap,Nt=Symbol(""),Os=Symbol(""),Nn=Symbol("");function pe(t,e,n){if(De&&re){let r=br.get(t);r||br.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new gi),s.map=r,s.key=n),s.track()}}function Qe(t,e,n,r,s,i){const o=br.get(t);if(!o){Mn++;return}const a=c=>{c&&c.trigger()};if(di(),e==="clear")o.forEach(a);else{const c=W(t),f=c&&fi(n);if(c&&n==="length"){const l=Number(r);o.forEach((u,d)=>{(d==="length"||d===Nn||!It(d)&&d>=l)&&a(u)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),f&&a(o.get(Nn)),e){case"add":c?f&&a(o.get("length")):(a(o.get(Nt)),Yt(t)&&a(o.get(Os)));break;case"delete":c||(a(o.get(Nt)),Yt(t)&&a(o.get(Os)));break;case"set":Yt(t)&&a(o.get(Nt));break}}hi()}function Wu(t,e){const n=br.get(t);return n&&n.get(e)}function $t(t){const e=Y(t);return e===t?e:(pe(e,"iterate",Nn),xe(t)?e:e.map(ye))}function mi(t){return pe(t=Y(t),"iterate",Nn),t}const Vu={__proto__:null,[Symbol.iterator](){return cs(this,Symbol.iterator,ye)},concat(...t){return $t(this).concat(...t.map(e=>W(e)?$t(e):e))},entries(){return cs(this,"entries",t=>(t[1]=ye(t[1]),t))},every(t,e){return Ye(this,"every",t,e,void 0,arguments)},filter(t,e){return Ye(this,"filter",t,e,n=>n.map(ye),arguments)},find(t,e){return Ye(this,"find",t,e,ye,arguments)},findIndex(t,e){return Ye(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ye(this,"findLast",t,e,ye,arguments)},findLastIndex(t,e){return Ye(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ye(this,"forEach",t,e,void 0,arguments)},includes(...t){return ls(this,"includes",t)},indexOf(...t){return ls(this,"indexOf",t)},join(t){return $t(this).join(t)},lastIndexOf(...t){return ls(this,"lastIndexOf",t)},map(t,e){return Ye(this,"map",t,e,void 0,arguments)},pop(){return vn(this,"pop")},push(...t){return vn(this,"push",t)},reduce(t,...e){return so(this,"reduce",t,e)},reduceRight(t,...e){return so(this,"reduceRight",t,e)},shift(){return vn(this,"shift")},some(t,e){return Ye(this,"some",t,e,void 0,arguments)},splice(...t){return vn(this,"splice",t)},toReversed(){return $t(this).toReversed()},toSorted(t){return $t(this).toSorted(t)},toSpliced(...t){return $t(this).toSpliced(...t)},unshift(...t){return vn(this,"unshift",t)},values(){return cs(this,"values",ye)}};function cs(t,e,n){const r=mi(t),s=r[e]();return r!==t&&!xe(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ku=Array.prototype;function Ye(t,e,n,r,s,i){const o=mi(t),a=o!==t&&!xe(t),c=o[e];if(c!==Ku[e]){const u=c.apply(t,i);return a?ye(u):u}let f=n;o!==t&&(a?f=function(u,d){return n.call(this,ye(u),d,t)}:n.length>2&&(f=function(u,d){return n.call(this,u,d,t)}));const l=c.call(o,f,r);return a&&s?s(l):l}function so(t,e,n,r){const s=mi(t);let i=n;return s!==t&&(xe(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,ye(a),c,t)}),s[e](i,...r)}function ls(t,e,n){const r=Y(t);pe(r,"iterate",Nn);const s=r[e](...n);return(s===-1||s===!1)&&bi(n[0])?(n[0]=Y(n[0]),r[e](...n)):s}function vn(t,e,n=[]){nt(),di();const r=Y(t)[e].apply(t,n);return hi(),rt(),r}const qu=ci("__proto__,__v_isRef,__isVue"),tc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(It));function Gu(t){It(t)||(t=String(t));const e=Y(this);return pe(e,"has",t),e.hasOwnProperty(t)}class nc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?rf:oc:i?ic:sc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=W(e);if(!s){let c;if(o&&(c=Vu[n]))return c;if(n==="hasOwnProperty")return Gu}const a=Reflect.get(e,n,ce(e)?e:r);return(It(n)?tc.has(n):qu(n))||(s||pe(e,"get",n),i)?a:ce(a)?o&&fi(n)?a:a.value:se(a)?s?ac(a):wt(a):a}}class rc extends nc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Et(i);if(!xe(r)&&!Et(r)&&(i=Y(i),r=Y(r)),!W(e)&&ce(i)&&!ce(r))return c?!1:(i.value=r,!0)}const o=W(e)&&fi(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,r,ce(e)?e:s);return e===Y(s)&&(o?_t(r,i)&&Qe(e,"set",n,r):Qe(e,"add",n,r)),a}deleteProperty(e,n){const r=Q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Qe(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!It(n)||!tc.has(n))&&pe(e,"has",n),r}ownKeys(e){return pe(e,"iterate",W(e)?"length":Nt),Reflect.ownKeys(e)}}class zu extends nc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ju=new rc,Yu=new zu,Xu=new rc(!0);const Ms=t=>t,er=t=>Reflect.getPrototypeOf(t);function Qu(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=Yt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,f=s[t](...r),l=n?Ms:e?Ns:ye;return!e&&pe(i,"iterate",c?Os:Nt),{next(){const{value:u,done:d}=f.next();return d?{value:u,done:d}:{value:a?[l(u[0]),l(u[1])]:l(u),done:d}},[Symbol.iterator](){return this}}}}function tr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zu(t,e){const n={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);t||(_t(s,a)&&pe(o,"get",s),pe(o,"get",a));const{has:c}=er(o),f=e?Ms:t?Ns:ye;if(c.call(o,s))return f(i.get(s));if(c.call(o,a))return f(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pe(Y(s),"iterate",Nt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return t||(_t(s,a)&&pe(o,"has",s),pe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),f=e?Ms:t?Ns:ye;return!t&&pe(c,"iterate",Nt),a.forEach((l,u)=>s.call(i,f(l),f(u),o))}};return ge(n,t?{add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear")}:{add(s){!e&&!xe(s)&&!Et(s)&&(s=Y(s));const i=Y(this);return er(i).has.call(i,s)||(i.add(s),Qe(i,"add",s,s)),this},set(s,i){!e&&!xe(i)&&!Et(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=er(o);let f=a.call(o,s);f||(s=Y(s),f=a.call(o,s));const l=c.call(o,s);return o.set(s,i),f?_t(i,l)&&Qe(o,"set",s,i):Qe(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=er(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const f=i.delete(s);return c&&Qe(i,"delete",s,void 0),f},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&Qe(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Qu(s,t,e)}),n}function _i(t,e){const n=Zu(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const ef={get:_i(!1,!1)},tf={get:_i(!1,!0)},nf={get:_i(!0,!1)};const sc=new WeakMap,ic=new WeakMap,oc=new WeakMap,rf=new WeakMap;function sf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function of(t){return t.__v_skip||!Object.isExtensible(t)?0:sf(Pu(t))}function wt(t){return Et(t)?t:yi(t,!1,Ju,ef,sc)}function qt(t){return yi(t,!1,Xu,tf,ic)}function ac(t){return yi(t,!0,Yu,nf,oc)}function yi(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=of(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Qt(t){return Et(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function Et(t){return!!(t&&t.__v_isReadonly)}function xe(t){return!!(t&&t.__v_isShallow)}function bi(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function af(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&ja(t,"__v_skip",!0),t}const ye=t=>se(t)?wt(t):t,Ns=t=>se(t)?ac(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function qe(t){return cc(t,!1)}function io(t){return cc(t,!0)}function cc(t,e){return ce(t)?t:new cf(t,e)}class cf{constructor(e,n){this.dep=new gi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:ye(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xe(e)||Et(e);e=r?e:Y(e),_t(e,n)&&(this._rawValue=e,this._value=r?e:ye(e),this.dep.trigger())}}function ie(t){return ce(t)?t.value:t}function lf(t){return B(t)?t():ie(t)}const uf={get:(t,e,n)=>e==="__v_raw"?t:ie(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function lc(t){return Qt(t)?t:new Proxy(t,uf)}class ff{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Wu(Y(this._object),this._key)}}class df{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function hf(t,e,n){return ce(t)?t:B(t)?new df(t):se(t)&&arguments.length>1?pf(t,e,n):qe(t)}function pf(t,e,n){const r=t[e];return ce(r)?r:new ff(t,e,n)}class gf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return Ja(this,!0),!0}get value(){const e=this.dep.track();return Qa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mf(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new gf(r,s,n)}const nr={},vr=new WeakMap;let kt;function _f(t,e=!1,n=kt){if(n){let r=vr.get(n);r||vr.set(n,r=[]),r.push(t)}}function yf(t,e,n=te){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,f=b=>s?b:xe(b)||s===!1||s===0?Ze(b,1):Ze(b);let l,u,d,y,m=!1,g=!1;if(ce(t)?(u=()=>t.value,m=xe(t)):Qt(t)?(u=()=>f(t),m=!0):W(t)?(g=!0,m=t.some(b=>Qt(b)||xe(b)),u=()=>t.map(b=>{if(ce(b))return b.value;if(Qt(b))return f(b);if(B(b))return c?c(b,2):b()})):B(t)?e?u=c?()=>c(t,2):t:u=()=>{if(d){nt();try{d()}finally{rt()}}const b=kt;kt=l;try{return c?c(t,3,[y]):t(y)}finally{kt=b}}:u=Ke,e&&s){const b=u,w=s===!0?1/0:s;u=()=>Ze(b(),w)}const E=qa(),T=()=>{l.stop(),E&&E.active&&ui(E.effects,l)};if(i&&e){const b=e;e=(...w)=>{b(...w),T()}}let P=g?new Array(t.length).fill(nr):nr;const _=b=>{if(!(!(l.flags&1)||!l.dirty&&!b))if(e){const w=l.run();if(s||m||(g?w.some((N,F)=>_t(N,P[F])):_t(w,P))){d&&d();const N=kt;kt=l;try{const F=[w,P===nr?void 0:g&&P[0]===nr?[]:P,y];c?c(e,3,F):e(...F),P=w}finally{kt=N}}}else l.run()};return a&&a(_),l=new Ga(u),l.scheduler=o?()=>o(_,!1):_,y=b=>_f(b,!1,l),d=l.onStop=()=>{const b=vr.get(l);if(b){if(c)c(b,4);else for(const w of b)w();vr.delete(l)}},e?r?_(!0):P=l.run():o?o(_.bind(null,!0),!0):l.run(),T.pause=l.pause.bind(l),T.resume=l.resume.bind(l),T.stop=T,T}function Ze(t,e=1/0,n){if(e<=0||!se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))Ze(t.value,e,n);else if(W(t))for(let r=0;r<t.length;r++)Ze(t[r],e,n);else if(xa(t)||Yt(t))t.forEach(r=>{Ze(r,e,n)});else if(Fa(t)){for(const r in t)Ze(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ze(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(t,e,n,r){try{return r?t(...r):t()}catch(s){pn(s,e,n)}}function Je(t,e,n,r){if(B(t)){const s=Vn(t,e,n,r);return s&&Ua(s)&&s.catch(i=>{pn(i,e,n)}),s}if(W(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Je(t[i],e,n,r));return s}}function pn(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||te;if(e){let a=e.parent;const c=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,c,f)===!1)return}a=a.parent}if(i){nt(),Vn(i,null,10,[t,c,f]),rt();return}}bf(t,n,s,r,o)}function bf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const be=[];let Be=-1;const Zt=[];let lt=null,Vt=0;const uc=Promise.resolve();let wr=null;function fc(t){const e=wr||uc;return t?e.then(this?t.bind(this):t):e}function vf(t){let e=Be+1,n=be.length;for(;e<n;){const r=e+n>>>1,s=be[r],i=Ln(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vi(t){if(!(t.flags&1)){const e=Ln(t),n=be[be.length-1];!n||!(t.flags&2)&&e>=Ln(n)?be.push(t):be.splice(vf(e),0,t),t.flags|=1,dc()}}function dc(){wr||(wr=uc.then(hc))}function Ls(t){W(t)?Zt.push(...t):lt&&t.id===-1?lt.splice(Vt+1,0,t):t.flags&1||(Zt.push(t),t.flags|=1),dc()}function oo(t,e,n=Be+1){for(;n<be.length;n++){const r=be[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;be.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Er(t){if(Zt.length){const e=[...new Set(Zt)].sort((n,r)=>Ln(n)-Ln(r));if(Zt.length=0,lt){lt.push(...e);return}for(lt=e,Vt=0;Vt<lt.length;Vt++){const n=lt[Vt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lt=null,Vt=0}}const Ln=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hc(t){try{for(Be=0;Be<be.length;Be++){const e=be[Be];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Be<be.length;Be++){const e=be[Be];e&&(e.flags&=-2)}Be=-1,be.length=0,Er(),wr=null,(be.length||Zt.length)&&hc()}}let ve=null,pc=null;function Ir(t){const e=ve;return ve=t,pc=t&&t.type.__scopeId||null,e}function gc(t,e=ve,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wo(-1);const i=Ir(e);let o;try{o=t(...s)}finally{Ir(i),r._d&&wo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ao(t,e){if(ve===null)return t;const n=Jr(ve),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=te]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&Ze(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function We(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(nt(),Je(c,n,8,[t.el,a,t,e]),rt())}}const wf=Symbol("_vte"),Ef=t=>t.__isTeleport;function wi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,wi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ei(t,e){return B(t)?ge({name:t.name},e,{setup:t}):t}function Ii(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Dn(t,e,n,r,s=!1){if(W(t)){t.forEach((m,g)=>Dn(m,e&&(W(e)?e[g]:e),n,r,s));return}if(en(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Dn(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Jr(r.component):r.el,o=s?null:i,{i:a,r:c}=t,f=e&&e.r,l=a.refs===te?a.refs={}:a.refs,u=a.setupState,d=Y(u),y=u===te?()=>!1:m=>Q(d,m);if(f!=null&&f!==c&&(oe(f)?(l[f]=null,y(f)&&(u[f]=null)):ce(f)&&(f.value=null)),B(c))Vn(c,a,12,[o,l]);else{const m=oe(c),g=ce(c);if(m||g){const E=()=>{if(t.f){const T=m?y(c)?u[c]:l[c]:c.value;s?W(T)&&ui(T,i):W(T)?T.includes(i)||T.push(i):m?(l[c]=[i],y(c)&&(u[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else m?(l[c]=o,y(c)&&(u[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(E.id=-1,Ae(E,n)):E()}}}let co=!1;const Wt=()=>{co||(console.error("Hydration completed but contains mismatches."),co=!0)},If=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Tf=t=>t.namespaceURI.includes("MathML"),rr=t=>{if(t.nodeType===1){if(If(t))return"svg";if(Tf(t))return"mathml"}},Gt=t=>t.nodeType===8;function Sf(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:f}}=t,l=(_,b)=>{if(!b.hasChildNodes()){n(null,_,b),Er(),b._vnode=_;return}u(b.firstChild,_,null,null,null),Er(),b._vnode=_},u=(_,b,w,N,F,K=!1)=>{K=K||!!b.dynamicChildren;const $=Gt(_)&&_.data==="[",L=()=>g(_,b,w,N,F,$),{type:J,ref:z,shapeFlag:X,patchFlag:le}=b;let ue=_.nodeType;b.el=_,le===-2&&(K=!1,b.dynamicChildren=null);let x=null;switch(J){case Dt:ue!==3?b.children===""?(c(b.el=s(""),o(_),_),x=_):x=L():(_.data!==b.children&&(Wt(),_.data=b.children),x=i(_));break;case Ue:P(_)?(x=i(_),T(b.el=_.content.firstChild,_,w)):ue!==8||$?x=L():x=i(_);break;case ur:if($&&(_=i(_),ue=_.nodeType),ue===1||ue===3){x=_;const q=!b.children.length;for(let U=0;U<b.staticCount;U++)q&&(b.children+=x.nodeType===1?x.outerHTML:x.data),U===b.staticCount-1&&(b.anchor=x),x=i(x);return $?i(x):x}else L();break;case Ne:$?x=m(_,b,w,N,F,K):x=L();break;default:if(X&1)(ue!==1||b.type.toLowerCase()!==_.tagName.toLowerCase())&&!P(_)?x=L():x=d(_,b,w,N,F,K);else if(X&6){b.slotScopeIds=F;const q=o(_);if($?x=E(_):Gt(_)&&_.data==="teleport start"?x=E(_,_.data,"teleport end"):x=i(_),e(b,q,null,w,N,rr(q),K),en(b)&&!b.type.__asyncResolved){let U;$?(U=ae(Ne),U.anchor=x?x.previousSibling:q.lastChild):U=_.nodeType===3?Yc(""):ae("div"),U.el=_,b.component.subTree=U}}else X&64?ue!==8?x=L():x=b.type.hydrate(_,b,w,N,F,K,t,y):X&128&&(x=b.type.hydrate(_,b,w,N,rr(o(_)),F,K,t,u))}return z!=null&&Dn(z,null,N,b),x},d=(_,b,w,N,F,K)=>{K=K||!!b.dynamicChildren;const{type:$,props:L,patchFlag:J,shapeFlag:z,dirs:X,transition:le}=b,ue=$==="input"||$==="option";if(ue||J!==-1){X&&We(b,null,w,"created");let x=!1;if(P(_)){x=Hc(null,le)&&w&&w.vnode.props&&w.vnode.props.appear;const U=_.content.firstChild;x&&le.beforeEnter(U),T(U,_,w),b.el=_=U}if(z&16&&!(L&&(L.innerHTML||L.textContent))){let U=y(_.firstChild,b,_,w,N,F,K);for(;U;){sr(_,1)||Wt();const de=U;U=U.nextSibling,a(de)}}else if(z&8){let U=b.children;U[0]===`
`&&(_.tagName==="PRE"||_.tagName==="TEXTAREA")&&(U=U.slice(1)),_.textContent!==U&&(sr(_,0)||Wt(),_.textContent=b.children)}if(L){if(ue||!K||J&48){const U=_.tagName.includes("-");for(const de in L)(ue&&(de.endsWith("value")||de==="indeterminate")||Wn(de)&&!Xt(de)||de[0]==="."||U)&&r(_,de,null,L[de],void 0,w)}else if(L.onClick)r(_,"onClick",null,L.onClick,void 0,w);else if(J&4&&Qt(L.style))for(const U in L.style)L.style[U]}let q;(q=L&&L.onVnodeBeforeMount)&&Pe(q,w,b),X&&We(b,null,w,"beforeMount"),((q=L&&L.onVnodeMounted)||X||x)&&Kc(()=>{q&&Pe(q,w,b),x&&le.enter(_),X&&We(b,null,w,"mounted")},N)}return _.nextSibling},y=(_,b,w,N,F,K,$)=>{$=$||!!b.dynamicChildren;const L=b.children,J=L.length;for(let z=0;z<J;z++){const X=$?L[z]:L[z]=Re(L[z]),le=X.type===Dt;_?(le&&!$&&z+1<J&&Re(L[z+1]).type===Dt&&(c(s(_.data.slice(X.children.length)),w,i(_)),_.data=X.children),_=u(_,X,N,F,K,$)):le&&!X.children?c(X.el=s(""),w):(sr(w,1)||Wt(),n(null,X,w,null,N,F,rr(w),K))}return _},m=(_,b,w,N,F,K)=>{const{slotScopeIds:$}=b;$&&(F=F?F.concat($):$);const L=o(_),J=y(i(_),b,L,w,N,F,K);return J&&Gt(J)&&J.data==="]"?i(b.anchor=J):(Wt(),c(b.anchor=f("]"),L,J),J)},g=(_,b,w,N,F,K)=>{if(sr(_.parentElement,1)||Wt(),b.el=null,K){const J=E(_);for(;;){const z=i(_);if(z&&z!==J)a(z);else break}}const $=i(_),L=o(_);return a(_),n(null,b,L,$,w,N,rr(L),F),w&&(w.vnode.el=b.el,zr(w,b.el)),$},E=(_,b="[",w="]")=>{let N=0;for(;_;)if(_=i(_),_&&Gt(_)&&(_.data===b&&N++,_.data===w)){if(N===0)return i(_);N--}return _},T=(_,b,w)=>{const N=b.parentNode;N&&N.replaceChild(_,b);let F=w;for(;F;)F.vnode.el===b&&(F.vnode.el=F.subTree.el=_),F=F.parent},P=_=>_.nodeType===1&&_.tagName==="TEMPLATE";return[l,u]}const lo="data-allow-mismatch",Cf={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function sr(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(lo);)t=t.parentElement;const n=t&&t.getAttribute(lo);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(Cf[e])}}Wr().requestIdleCallback;Wr().cancelIdleCallback;function Af(t,e){if(Gt(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Gt(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const en=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function uo(t){B(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let f=null,l,u=0;const d=()=>(u++,f=null,y()),y=()=>{let m;return f||(m=f=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),c)return new Promise((E,T)=>{c(g,()=>E(d()),()=>T(g),u+1)});throw g}).then(g=>m!==f&&f?f:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),l=g,g)))};return Ei({name:"AsyncComponentWrapper",__asyncLoader:y,__asyncHydrate(m,g,E){const T=i?()=>{const P=i(E,_=>Af(m,_));P&&(g.bum||(g.bum=[])).push(P)}:E;l?T():y().then(()=>!g.isUnmounted&&T())},get __asyncResolved(){return l},setup(){const m=fe;if(Ii(m),l)return()=>us(l,m);const g=_=>{f=null,pn(_,m,13,!r)};if(a&&m.suspense||un)return y().then(_=>()=>us(_,m)).catch(_=>(g(_),()=>r?ae(r,{error:_}):null));const E=qe(!1),T=qe(),P=qe(!!s);return s&&setTimeout(()=>{P.value=!1},s),o!=null&&setTimeout(()=>{if(!E.value&&!T.value){const _=new Error(`Async component timed out after ${o}ms.`);g(_),T.value=_}},o),y().then(()=>{E.value=!0,m.parent&&Ti(m.parent.vnode)&&m.parent.update()}).catch(_=>{g(_),T.value=_}),()=>{if(E.value&&l)return us(l,m);if(T.value&&r)return ae(r,{error:T.value});if(n&&!P.value)return ae(n)}}})}function us(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=ae(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ti=t=>t.type.__isKeepAlive;function mc(t,e){yc(t,"a",e)}function _c(t,e){yc(t,"da",e)}function yc(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(qr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ti(s.parent.vnode)&&Rf(r,e,n,s),s=s.parent}}function Rf(t,e,n,r){const s=qr(e,t,r,!0);vc(()=>{ui(r[e],s)},n)}function qr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{nt();const a=Kn(n),c=Je(e,n,t,o);return a(),rt(),c});return r?s.unshift(i):s.push(i),i}}const ot=t=>(e,n=fe)=>{(!un||t==="sp")&&qr(t,(...r)=>e(...r),n)},Pf=ot("bm"),kf=ot("m"),Of=ot("bu"),Mf=ot("u"),bc=ot("bum"),vc=ot("um"),Nf=ot("sp"),Lf=ot("rtg"),Df=ot("rtc");function wc(t,e=fe){qr("ec",t,e)}const Ec="components";function Vb(t,e){return Tc(Ec,t,!0,e)||t}const Ic=Symbol.for("v-ndc");function xf(t){return oe(t)?Tc(Ec,t,!1)||t:t||Ic}function Tc(t,e,n=!0,r=!1){const s=ve||fe;if(s){const i=s.type;{const a=Ad(i,!1);if(a&&(a===e||a===Oe(e)||a===$r(Oe(e))))return i}const o=fo(s[t]||i[t],e)||fo(s.appContext[t],e);return!o&&r?i:o}}function fo(t,e){return t&&(t[e]||t[Oe(e)]||t[$r(Oe(e))])}const Ds=t=>t?Qc(t)?Jr(t):Ds(t.parent):null,An=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ds(t.parent),$root:t=>Ds(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Cc(t),$forceUpdate:t=>t.f||(t.f=()=>{vi(t.update)}),$nextTick:t=>t.n||(t.n=fc.bind(t.proxy)),$watch:t=>rd.bind(t)}),fs=(t,e)=>t!==te&&!t.__isScriptSetup&&Q(t,e),Uf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let f;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fs(r,e))return o[e]=1,r[e];if(s!==te&&Q(s,e))return o[e]=2,s[e];if((f=t.propsOptions[0])&&Q(f,e))return o[e]=3,i[e];if(n!==te&&Q(n,e))return o[e]=4,n[e];xs&&(o[e]=0)}}const l=An[e];let u,d;if(l)return e==="$attrs"&&pe(t.attrs,"get",""),l(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==te&&Q(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fs(s,e)?(s[e]=n,!0):r!==te&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==te&&Q(t,o)||fs(e,o)||(a=i[0])&&Q(a,o)||Q(r,o)||Q(An,o)||Q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ho(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xs=!0;function Hf(t){const e=Cc(t),n=t.proxy,r=t.ctx;xs=!1,e.beforeCreate&&po(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:f,created:l,beforeMount:u,mounted:d,beforeUpdate:y,updated:m,activated:g,deactivated:E,beforeDestroy:T,beforeUnmount:P,destroyed:_,unmounted:b,render:w,renderTracked:N,renderTriggered:F,errorCaptured:K,serverPrefetch:$,expose:L,inheritAttrs:J,components:z,directives:X,filters:le}=e;if(f&&Ff(f,r,null),o)for(const q in o){const U=o[q];B(U)&&(r[q]=U.bind(n))}if(s){const q=s.call(n,n);se(q)&&(t.data=wt(q))}if(xs=!0,i)for(const q in i){const U=i[q],de=B(U)?U.bind(n,n):B(U.get)?U.get.bind(n,n):Ke,Qn=!B(U)&&B(U.set)?U.set.bind(n):Ke,At=el({get:de,set:Qn});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>At.value,set:Fe=>At.value=Fe})}if(a)for(const q in a)Sc(a[q],r,n,q);if(c){const q=B(c)?c.call(n):c;Reflect.ownKeys(q).forEach(U=>{Rc(U,q[U])})}l&&po(l,t,"c");function x(q,U){W(U)?U.forEach(de=>q(de.bind(n))):U&&q(U.bind(n))}if(x(Pf,u),x(kf,d),x(Of,y),x(Mf,m),x(mc,g),x(_c,E),x(wc,K),x(Df,N),x(Lf,F),x(bc,P),x(vc,b),x(Nf,$),W(L))if(L.length){const q=t.exposed||(t.exposed={});L.forEach(U=>{Object.defineProperty(q,U,{get:()=>n[U],set:de=>n[U]=de})})}else t.exposed||(t.exposed={});w&&t.render===Ke&&(t.render=w),J!=null&&(t.inheritAttrs=J),z&&(t.components=z),X&&(t.directives=X),$&&Ii(t)}function Ff(t,e,n=Ke){W(t)&&(t=Us(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=tn(s.from||r,s.default,!0):i=tn(s.from||r):i=tn(s),ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function po(t,e,n){Je(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sc(t,e,n,r){let s=r.includes(".")?Bc(n,r):()=>n[r];if(oe(t)){const i=e[t];B(i)&&hs(s,i)}else if(B(t))hs(s,t.bind(n));else if(se(t))if(W(t))t.forEach(i=>Sc(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&hs(s,i,t)}}function Cc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>Tr(c,f,o,!0)),Tr(c,e,o)),se(e)&&i.set(e,c),c}function Tr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Tr(t,i,n,!0),s&&s.forEach(o=>Tr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=jf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jf={data:go,props:mo,emits:mo,methods:En,computed:En,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:En,directives:En,watch:$f,provide:go,inject:Bf};function go(t,e){return e?t?function(){return ge(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Bf(t,e){return En(Us(t),Us(e))}function Us(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?ge(Object.create(null),t,e):e}function mo(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:ge(Object.create(null),ho(t),ho(e??{})):e}function $f(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function Ac(){return{app:null,config:{isNativeTag:Au,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function Vf(t,e){return function(r,s=null){B(r)||(r=ge({},r)),s!=null&&!se(s)&&(s=null);const i=Ac(),o=new WeakSet,a=[];let c=!1;const f=i.app={_uid:Wf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(f,...u)):B(l)&&(o.add(l),l(f,...u))),f},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),f},component(l,u){return u?(i.components[l]=u,f):i.components[l]},directive(l,u){return u?(i.directives[l]=u,f):i.directives[l]},mount(l,u,d){if(!c){const y=f._ceVNode||ae(r,s);return y.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(y,l):t(y,l,d),c=!0,f._container=l,l.__vue_app__=f,Jr(y.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Je(a,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(l,u){return i.provides[l]=u,f},runWithContext(l){const u=Lt;Lt=f;try{return l()}finally{Lt=u}}};return f}}let Lt=null;function Rc(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function tn(t,e,n=!1){const r=fe||ve;if(r||Lt){const s=Lt?Lt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function Si(){return!!(fe||ve||Lt)}const Pc={},kc=()=>Object.create(Pc),Oc=t=>Object.getPrototypeOf(t)===Pc;function Kf(t,e,n,r=!1){const s={},i=kc();t.propsDefaults=Object.create(null),Mc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:qt(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let u=0;u<l.length;u++){let d=l[u];if(Gr(t.emitsOptions,d))continue;const y=e[d];if(c)if(Q(i,d))y!==i[d]&&(i[d]=y,f=!0);else{const m=Oe(d);s[m]=Hs(c,a,m,y,t,!1)}else y!==i[d]&&(i[d]=y,f=!0)}}}else{Mc(t,e,s,i)&&(f=!0);let l;for(const u in a)(!e||!Q(e,u)&&((l=Ht(u))===u||!Q(e,l)))&&(c?n&&(n[u]!==void 0||n[l]!==void 0)&&(s[u]=Hs(c,a,u,void 0,t,!0)):delete s[u]);if(i!==a)for(const u in i)(!e||!Q(e,u))&&(delete i[u],f=!0)}f&&Qe(t.attrs,"set","")}function Mc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xt(c))continue;const f=e[c];let l;s&&Q(s,l=Oe(c))?!i||!i.includes(l)?n[l]=f:(a||(a={}))[l]=f:Gr(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(i){const c=Y(n),f=a||te;for(let l=0;l<i.length;l++){const u=i[l];n[u]=Hs(s,c,u,f[u],t,!Q(f,u))}}return o}function Hs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&B(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const l=Kn(s);r=f[n]=c.call(null,e),l()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}const Gf=new WeakMap;function Nc(t,e,n=!1){const r=n?Gf:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const l=u=>{c=!0;const[d,y]=Nc(u,e,!0);ge(o,d),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return se(t)&&r.set(t,Jt),Jt;if(W(i))for(let l=0;l<i.length;l++){const u=Oe(i[l]);_o(u)&&(o[u]=te)}else if(i)for(const l in i){const u=Oe(l);if(_o(u)){const d=i[l],y=o[u]=W(d)||B(d)?{type:d}:ge({},d),m=y.type;let g=!1,E=!0;if(W(m))for(let T=0;T<m.length;++T){const P=m[T],_=B(P)&&P.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(E=!1)}else g=B(m)&&m.name==="Boolean";y[0]=g,y[1]=E,(g||Q(y,"default"))&&a.push(u)}}const f=[o,a];return se(t)&&r.set(t,f),f}function _o(t){return t[0]!=="$"&&!Xt(t)}const Ci=t=>t[0]==="_"||t==="$stable",Ai=t=>W(t)?t.map(Re):[Re(t)],zf=(t,e,n)=>{if(e._n)return e;const r=gc((...s)=>Ai(e(...s)),n);return r._c=!1,r},Lc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ci(s))continue;const i=t[s];if(B(i))e[s]=zf(s,i,r);else if(i!=null){const o=Ai(i);e[s]=()=>o}}},Dc=(t,e)=>{const n=Ai(e);t.slots.default=()=>n},xc=(t,e,n)=>{for(const r in e)(n||!Ci(r))&&(t[r]=e[r])},Jf=(t,e,n)=>{const r=t.slots=kc();if(t.vnode.shapeFlag&32){const s=e._;s?(xc(r,e,n),n&&ja(r,"_",s,!0)):Lc(e,r)}else e&&Dc(t,e)},Yf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:xc(s,e,n):(i=!e.$stable,Lc(e,s)),o=e}else e&&(Dc(t,e),o={default:1});if(i)for(const a in s)!Ci(a)&&o[a]==null&&delete s[a]},Ae=Kc;function Xf(t){return Uc(t)}function Qf(t){return Uc(t,Sf)}function Uc(t,e){const n=Wr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:f,setElementText:l,parentNode:u,nextSibling:d,setScopeId:y=Ke,insertStaticContent:m}=t,g=(h,p,v,C=null,I=null,S=null,O=void 0,k=null,R=!!p.dynamicChildren)=>{if(h===p)return;h&&!dt(h,p)&&(C=Zn(h),Fe(h,I,S,!0),h=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:A,ref:H,shapeFlag:M}=p;switch(A){case Dt:E(h,p,v,C);break;case Ue:T(h,p,v,C);break;case ur:h==null&&P(p,v,C,O);break;case Ne:z(h,p,v,C,I,S,O,k,R);break;default:M&1?w(h,p,v,C,I,S,O,k,R):M&6?X(h,p,v,C,I,S,O,k,R):(M&64||M&128)&&A.process(h,p,v,C,I,S,O,k,R,Bt)}H!=null&&I&&Dn(H,h&&h.ref,S,p||h,!p)},E=(h,p,v,C)=>{if(h==null)r(p.el=a(p.children),v,C);else{const I=p.el=h.el;p.children!==h.children&&f(I,p.children)}},T=(h,p,v,C)=>{h==null?r(p.el=c(p.children||""),v,C):p.el=h.el},P=(h,p,v,C)=>{[h.el,h.anchor]=m(h.children,p,v,C,h.el,h.anchor)},_=({el:h,anchor:p},v,C)=>{let I;for(;h&&h!==p;)I=d(h),r(h,v,C),h=I;r(p,v,C)},b=({el:h,anchor:p})=>{let v;for(;h&&h!==p;)v=d(h),s(h),h=v;s(p)},w=(h,p,v,C,I,S,O,k,R)=>{p.type==="svg"?O="svg":p.type==="math"&&(O="mathml"),h==null?N(p,v,C,I,S,O,k,R):$(h,p,I,S,O,k,R)},N=(h,p,v,C,I,S,O,k)=>{let R,A;const{props:H,shapeFlag:M,transition:D,dirs:V}=h;if(R=h.el=o(h.type,S,H&&H.is,H),M&8?l(R,h.children):M&16&&K(h.children,R,null,C,I,ds(h,S),O,k),V&&We(h,null,C,"created"),F(R,h,h.scopeId,O,C),H){for(const ne in H)ne!=="value"&&!Xt(ne)&&i(R,ne,null,H[ne],S,C);"value"in H&&i(R,"value",null,H.value,S),(A=H.onVnodeBeforeMount)&&Pe(A,C,h)}V&&We(h,null,C,"beforeMount");const G=Hc(I,D);G&&D.beforeEnter(R),r(R,p,v),((A=H&&H.onVnodeMounted)||G||V)&&Ae(()=>{A&&Pe(A,C,h),G&&D.enter(R),V&&We(h,null,C,"mounted")},I)},F=(h,p,v,C,I)=>{if(v&&y(h,v),C)for(let S=0;S<C.length;S++)y(h,C[S]);if(I){let S=I.subTree;if(p===S||Wc(S.type)&&(S.ssContent===p||S.ssFallback===p)){const O=I.vnode;F(h,O,O.scopeId,O.slotScopeIds,I.parent)}}},K=(h,p,v,C,I,S,O,k,R=0)=>{for(let A=R;A<h.length;A++){const H=h[A]=k?ut(h[A]):Re(h[A]);g(null,H,p,v,C,I,S,O,k)}},$=(h,p,v,C,I,S,O)=>{const k=p.el=h.el;let{patchFlag:R,dynamicChildren:A,dirs:H}=p;R|=h.patchFlag&16;const M=h.props||te,D=p.props||te;let V;if(v&&Rt(v,!1),(V=D.onVnodeBeforeUpdate)&&Pe(V,v,p,h),H&&We(p,h,v,"beforeUpdate"),v&&Rt(v,!0),(M.innerHTML&&D.innerHTML==null||M.textContent&&D.textContent==null)&&l(k,""),A?L(h.dynamicChildren,A,k,v,C,ds(p,I),S):O||U(h,p,k,null,v,C,ds(p,I),S,!1),R>0){if(R&16)J(k,M,D,v,I);else if(R&2&&M.class!==D.class&&i(k,"class",null,D.class,I),R&4&&i(k,"style",M.style,D.style,I),R&8){const G=p.dynamicProps;for(let ne=0;ne<G.length;ne++){const Z=G[ne],Te=M[Z],he=D[Z];(he!==Te||Z==="value")&&i(k,Z,Te,he,I,v)}}R&1&&h.children!==p.children&&l(k,p.children)}else!O&&A==null&&J(k,M,D,v,I);((V=D.onVnodeUpdated)||H)&&Ae(()=>{V&&Pe(V,v,p,h),H&&We(p,h,v,"updated")},C)},L=(h,p,v,C,I,S,O)=>{for(let k=0;k<p.length;k++){const R=h[k],A=p[k],H=R.el&&(R.type===Ne||!dt(R,A)||R.shapeFlag&70)?u(R.el):v;g(R,A,H,null,C,I,S,O,!0)}},J=(h,p,v,C,I)=>{if(p!==v){if(p!==te)for(const S in p)!Xt(S)&&!(S in v)&&i(h,S,p[S],null,I,C);for(const S in v){if(Xt(S))continue;const O=v[S],k=p[S];O!==k&&S!=="value"&&i(h,S,k,O,I,C)}"value"in v&&i(h,"value",p.value,v.value,I)}},z=(h,p,v,C,I,S,O,k,R)=>{const A=p.el=h?h.el:a(""),H=p.anchor=h?h.anchor:a("");let{patchFlag:M,dynamicChildren:D,slotScopeIds:V}=p;V&&(k=k?k.concat(V):V),h==null?(r(A,v,C),r(H,v,C),K(p.children||[],v,H,I,S,O,k,R)):M>0&&M&64&&D&&h.dynamicChildren?(L(h.dynamicChildren,D,v,I,S,O,k),(p.key!=null||I&&p===I.subTree)&&Fc(h,p,!0)):U(h,p,v,H,I,S,O,k,R)},X=(h,p,v,C,I,S,O,k,R)=>{p.slotScopeIds=k,h==null?p.shapeFlag&512?I.ctx.activate(p,v,C,O,R):le(p,v,C,I,S,O,R):ue(h,p,R)},le=(h,p,v,C,I,S,O)=>{const k=h.component=Ed(h,C,I);if(Ti(h)&&(k.ctx.renderer=Bt),Id(k,!1,O),k.asyncDep){if(I&&I.registerDep(k,x,O),!h.el){const R=k.subTree=ae(Ue);T(null,R,p,v)}}else x(k,h,p,v,I,S,O)},ue=(h,p,v)=>{const C=p.component=h.component;if(ld(h,p,v))if(C.asyncDep&&!C.asyncResolved){q(C,p,v);return}else C.next=p,C.update();else p.el=h.el,C.vnode=p},x=(h,p,v,C,I,S,O)=>{const k=()=>{if(h.isMounted){let{next:M,bu:D,u:V,parent:G,vnode:ne}=h;{const Se=jc(h);if(Se){M&&(M.el=ne.el,q(h,M,O)),Se.asyncDep.then(()=>{h.isUnmounted||k()});return}}let Z=M,Te;Rt(h,!1),M?(M.el=ne.el,q(h,M,O)):M=ne,D&&lr(D),(Te=M.props&&M.props.onVnodeBeforeUpdate)&&Pe(Te,G,M,ne),Rt(h,!0);const he=ps(h),Me=h.subTree;h.subTree=he,g(Me,he,u(Me.el),Zn(Me),h,I,S),M.el=he.el,Z===null&&zr(h,he.el),V&&Ae(V,I),(Te=M.props&&M.props.onVnodeUpdated)&&Ae(()=>Pe(Te,G,M,ne),I)}else{let M;const{el:D,props:V}=p,{bm:G,m:ne,parent:Z,root:Te,type:he}=h,Me=en(p);if(Rt(h,!1),G&&lr(G),!Me&&(M=V&&V.onVnodeBeforeMount)&&Pe(M,Z,p),Rt(h,!0),D&&ss){const Se=()=>{h.subTree=ps(h),ss(D,h.subTree,h,I,null)};Me&&he.__asyncHydrate?he.__asyncHydrate(D,h,Se):Se()}else{Te.ce&&Te.ce._injectChildStyle(he);const Se=h.subTree=ps(h);g(null,Se,v,C,h,I,S),p.el=Se.el}if(ne&&Ae(ne,I),!Me&&(M=V&&V.onVnodeMounted)){const Se=p;Ae(()=>Pe(M,Z,Se),I)}(p.shapeFlag&256||Z&&en(Z.vnode)&&Z.vnode.shapeFlag&256)&&h.a&&Ae(h.a,I),h.isMounted=!0,p=v=C=null}};h.scope.on();const R=h.effect=new Ga(k);h.scope.off();const A=h.update=R.run.bind(R),H=h.job=R.runIfDirty.bind(R);H.i=h,H.id=h.uid,R.scheduler=()=>vi(H),Rt(h,!0),A()},q=(h,p,v)=>{p.component=h;const C=h.vnode.props;h.vnode=p,h.next=null,qf(h,p.props,C,v),Yf(h,p.children,v),nt(),oo(h),rt()},U=(h,p,v,C,I,S,O,k,R=!1)=>{const A=h&&h.children,H=h?h.shapeFlag:0,M=p.children,{patchFlag:D,shapeFlag:V}=p;if(D>0){if(D&128){Qn(A,M,v,C,I,S,O,k,R);return}else if(D&256){de(A,M,v,C,I,S,O,k,R);return}}V&8?(H&16&&yn(A,I,S),M!==A&&l(v,M)):H&16?V&16?Qn(A,M,v,C,I,S,O,k,R):yn(A,I,S,!0):(H&8&&l(v,""),V&16&&K(M,v,C,I,S,O,k,R))},de=(h,p,v,C,I,S,O,k,R)=>{h=h||Jt,p=p||Jt;const A=h.length,H=p.length,M=Math.min(A,H);let D;for(D=0;D<M;D++){const V=p[D]=R?ut(p[D]):Re(p[D]);g(h[D],V,v,null,I,S,O,k,R)}A>H?yn(h,I,S,!0,!1,M):K(p,v,C,I,S,O,k,R,M)},Qn=(h,p,v,C,I,S,O,k,R)=>{let A=0;const H=p.length;let M=h.length-1,D=H-1;for(;A<=M&&A<=D;){const V=h[A],G=p[A]=R?ut(p[A]):Re(p[A]);if(dt(V,G))g(V,G,v,null,I,S,O,k,R);else break;A++}for(;A<=M&&A<=D;){const V=h[M],G=p[D]=R?ut(p[D]):Re(p[D]);if(dt(V,G))g(V,G,v,null,I,S,O,k,R);else break;M--,D--}if(A>M){if(A<=D){const V=D+1,G=V<H?p[V].el:C;for(;A<=D;)g(null,p[A]=R?ut(p[A]):Re(p[A]),v,G,I,S,O,k,R),A++}}else if(A>D)for(;A<=M;)Fe(h[A],I,S,!0),A++;else{const V=A,G=A,ne=new Map;for(A=G;A<=D;A++){const Ce=p[A]=R?ut(p[A]):Re(p[A]);Ce.key!=null&&ne.set(Ce.key,A)}let Z,Te=0;const he=D-G+1;let Me=!1,Se=0;const bn=new Array(he);for(A=0;A<he;A++)bn[A]=0;for(A=V;A<=M;A++){const Ce=h[A];if(Te>=he){Fe(Ce,I,S,!0);continue}let je;if(Ce.key!=null)je=ne.get(Ce.key);else for(Z=G;Z<=D;Z++)if(bn[Z-G]===0&&dt(Ce,p[Z])){je=Z;break}je===void 0?Fe(Ce,I,S,!0):(bn[je-G]=A+1,je>=Se?Se=je:Me=!0,g(Ce,p[je],v,null,I,S,O,k,R),Te++)}const eo=Me?Zf(bn):Jt;for(Z=eo.length-1,A=he-1;A>=0;A--){const Ce=G+A,je=p[Ce],to=Ce+1<H?p[Ce+1].el:C;bn[A]===0?g(null,je,v,to,I,S,O,k,R):Me&&(Z<0||A!==eo[Z]?At(je,v,to,2):Z--)}}},At=(h,p,v,C,I=null)=>{const{el:S,type:O,transition:k,children:R,shapeFlag:A}=h;if(A&6){At(h.component.subTree,p,v,C);return}if(A&128){h.suspense.move(p,v,C);return}if(A&64){O.move(h,p,v,Bt);return}if(O===Ne){r(S,p,v);for(let M=0;M<R.length;M++)At(R[M],p,v,C);r(h.anchor,p,v);return}if(O===ur){_(h,p,v);return}if(C!==2&&A&1&&k)if(C===0)k.beforeEnter(S),r(S,p,v),Ae(()=>k.enter(S),I);else{const{leave:M,delayLeave:D,afterLeave:V}=k,G=()=>{h.ctx.isUnmounted?s(S):r(S,p,v)},ne=()=>{M(S,()=>{G(),V&&V()})};D?D(S,G,ne):ne()}else r(S,p,v)},Fe=(h,p,v,C=!1,I=!1)=>{const{type:S,props:O,ref:k,children:R,dynamicChildren:A,shapeFlag:H,patchFlag:M,dirs:D,cacheIndex:V}=h;if(M===-2&&(I=!1),k!=null&&(nt(),Dn(k,null,v,h,!0),rt()),V!=null&&(p.renderCache[V]=void 0),H&256){p.ctx.deactivate(h);return}const G=H&1&&D,ne=!en(h);let Z;if(ne&&(Z=O&&O.onVnodeBeforeUnmount)&&Pe(Z,p,h),H&6)Tu(h.component,v,C);else{if(H&128){h.suspense.unmount(v,C);return}G&&We(h,null,p,"beforeUnmount"),H&64?h.type.remove(h,p,v,Bt,C):A&&!A.hasOnce&&(S!==Ne||M>0&&M&64)?yn(A,p,v,!1,!0):(S===Ne&&M&384||!I&&H&16)&&yn(R,p,v),C&&Qi(h)}(ne&&(Z=O&&O.onVnodeUnmounted)||G)&&Ae(()=>{Z&&Pe(Z,p,h),G&&We(h,null,p,"unmounted")},v)},Qi=h=>{const{type:p,el:v,anchor:C,transition:I}=h;if(p===Ne){Iu(v,C);return}if(p===ur){b(h);return}const S=()=>{s(v),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:O,delayLeave:k}=I,R=()=>O(v,S);k?k(h.el,S,R):R()}else S()},Iu=(h,p)=>{let v;for(;h!==p;)v=d(h),s(h),h=v;s(p)},Tu=(h,p,v)=>{const{bum:C,scope:I,job:S,subTree:O,um:k,m:R,a:A,parent:H,slots:{__:M}}=h;yo(R),yo(A),C&&lr(C),H&&W(M)&&M.forEach(D=>{H.renderCache[D]=void 0}),I.stop(),S&&(S.flags|=8,Fe(O,h,p,v)),k&&Ae(k,p),Ae(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},yn=(h,p,v,C=!1,I=!1,S=0)=>{for(let O=S;O<h.length;O++)Fe(h[O],p,v,C,I)},Zn=h=>{if(h.shapeFlag&6)return Zn(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),v=p&&p[wf];return v?d(v):p};let ns=!1;const Zi=(h,p,v)=>{h==null?p._vnode&&Fe(p._vnode,null,null,!0):g(p._vnode||null,h,p,null,null,null,v),p._vnode=h,ns||(ns=!0,oo(),Er(),ns=!1)},Bt={p:g,um:Fe,m:At,r:Qi,mt:le,mc:K,pc:U,pbc:L,n:Zn,o:t};let rs,ss;return e&&([rs,ss]=e(Bt)),{render:Zi,hydrate:rs,createApp:Vf(Zi,rs)}}function ds({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Rt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hc(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fc(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ut(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Fc(o,a)),a.type===Dt&&(a.el=o.el),a.type===Ue&&!a.el&&(a.el=o.el)}}function Zf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<f?i=a+1:o=a;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jc(e)}function yo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ed=Symbol.for("v-scx"),td=()=>tn(ed);function nd(t,e){return Ri(t,null,e)}function hs(t,e,n){return Ri(t,e,n)}function Ri(t,e,n=te){const{immediate:r,deep:s,flush:i,once:o}=n,a=ge({},n),c=e&&r||!e&&i!=="post";let f;if(un){if(i==="sync"){const y=td();f=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=Ke,y.resume=Ke,y.pause=Ke,y}}const l=fe;a.call=(y,m,g)=>Je(y,l,m,g);let u=!1;i==="post"?a.scheduler=y=>{Ae(y,l&&l.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(y,m)=>{m?y():vi(y)}),a.augmentJob=y=>{e&&(y.flags|=4),u&&(y.flags|=2,l&&(y.id=l.uid,y.i=l))};const d=yf(t,e,a);return un&&(f?f.push(d):c&&d()),d}function rd(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?Bc(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=Kn(this),a=Ri(s,i.bind(r),n);return o(),a}function Bc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const sd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Oe(e)}Modifiers`]||t[`${Ht(e)}Modifiers`];function id(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&sd(r,e.slice(7));o&&(o.trim&&(s=n.map(l=>oe(l)?l.trim():l)),o.number&&(s=n.map(Ps)));let a,c=r[a=is(e)]||r[a=is(Oe(e))];!c&&i&&(c=r[a=is(Ht(e))]),c&&Je(c,t,6,s);const f=r[a+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(f,t,6,s)}}function $c(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=f=>{const l=$c(f,e,!0);l&&(a=!0,ge(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(se(t)&&r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):ge(o,i),se(t)&&r.set(t,o),o)}function Gr(t,e){return!t||!Wn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Ht(e))||Q(t,e))}function ps(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:f,renderCache:l,props:u,data:d,setupState:y,ctx:m,inheritAttrs:g}=t,E=Ir(t);let T,P;try{if(n.shapeFlag&4){const b=s||r,w=b;T=Re(f.call(w,b,l,u,y,d,m)),P=a}else{const b=e;T=Re(b.length>1?b(u,{attrs:a,slots:o,emit:c}):b(u,null)),P=e.props?a:ad(a)}}catch(b){Rn.length=0,pn(b,t,1),T=ae(Ue)}let _=T;if(P&&g!==!1){const b=Object.keys(P),{shapeFlag:w}=_;b.length&&w&7&&(i&&b.some(li)&&(P=cd(P,i)),_=ln(_,P,!1,!0))}return n.dirs&&(_=ln(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&wi(_,n.transition),T=_,Ir(E),T}function od(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Un(s)){if(s.type!==Ue||s.children==="v-if"){if(n)return;n=s}}else return}return n}const ad=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wn(n))&&((e||(e={}))[n]=t[n]);return e},cd=(t,e)=>{const n={};for(const r in t)(!li(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ld(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?bo(r,o,f):!!o;if(c&8){const l=e.dynamicProps;for(let u=0;u<l.length;u++){const d=l[u];if(o[d]!==r[d]&&!Gr(f,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?bo(r,o,f):!0:!!o;return!1}function bo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Gr(n,i))return!0}return!1}function zr({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wc=t=>t.__isSuspense;let Fs=0;const ud={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,f){if(t==null)dd(e,n,r,s,i,o,a,c,f);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}hd(t,e,n,r,s,o,a,c,f)}},hydrate:pd,normalize:gd},fd=ud;function xn(t,e){const n=t.props&&t.props[e];B(n)&&n()}function dd(t,e,n,r,s,i,o,a,c){const{p:f,o:{createElement:l}}=c,u=l("div"),d=t.suspense=Vc(t,s,r,e,u,n,i,o,a,c);f(null,d.pendingBranch=t.ssContent,u,null,r,d,i,o),d.deps>0?(xn(t,"onPending"),xn(t,"onFallback"),f(null,t.ssFallback,e,n,r,null,i,o),nn(d,t.ssFallback)):d.resolve(!1,!0)}function hd(t,e,n,r,s,i,o,a,{p:c,um:f,o:{createElement:l}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const d=e.ssContent,y=e.ssFallback,{activeBranch:m,pendingBranch:g,isInFallback:E,isHydrating:T}=u;if(g)u.pendingBranch=d,dt(d,g)?(c(g,d,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():E&&(T||(c(m,y,n,r,s,null,i,o,a),nn(u,y)))):(u.pendingId=Fs++,T?(u.isHydrating=!1,u.activeBranch=g):f(g,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=l("div"),E?(c(null,d,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():(c(m,y,n,r,s,null,i,o,a),nn(u,y))):m&&dt(d,m)?(c(m,d,n,r,s,u,i,o,a),u.resolve(!0)):(c(null,d,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0&&u.resolve()));else if(m&&dt(d,m))c(m,d,n,r,s,u,i,o,a),nn(u,d);else if(xn(e,"onPending"),u.pendingBranch=d,d.shapeFlag&512?u.pendingId=d.component.suspenseId:u.pendingId=Fs++,c(null,d,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0)u.resolve();else{const{timeout:P,pendingId:_}=u;P>0?setTimeout(()=>{u.pendingId===_&&u.fallback(y)},P):P===0&&u.fallback(y)}}function Vc(t,e,n,r,s,i,o,a,c,f,l=!1){const{p:u,m:d,um:y,n:m,o:{parentNode:g,remove:E}}=f;let T;const P=md(t);P&&e&&e.pendingBranch&&(T=e.pendingId,e.deps++);const _=t.props?Mu(t.props.timeout):void 0,b=i,w={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Fs++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!l,isHydrating:l,isUnmounted:!1,effects:[],resolve(N=!1,F=!1){const{vnode:K,activeBranch:$,pendingBranch:L,pendingId:J,effects:z,parentComponent:X,container:le}=w;let ue=!1;w.isHydrating?w.isHydrating=!1:N||(ue=$&&L.transition&&L.transition.mode==="out-in",ue&&($.transition.afterLeave=()=>{J===w.pendingId&&(d(L,le,i===b?m($):i,0),Ls(z))}),$&&(g($.el)===le&&(i=m($)),y($,X,w,!0)),ue||d(L,le,i,0)),nn(w,L),w.pendingBranch=null,w.isInFallback=!1;let x=w.parent,q=!1;for(;x;){if(x.pendingBranch){x.effects.push(...z),q=!0;break}x=x.parent}!q&&!ue&&Ls(z),w.effects=[],P&&e&&e.pendingBranch&&T===e.pendingId&&(e.deps--,e.deps===0&&!F&&e.resolve()),xn(K,"onResolve")},fallback(N){if(!w.pendingBranch)return;const{vnode:F,activeBranch:K,parentComponent:$,container:L,namespace:J}=w;xn(F,"onFallback");const z=m(K),X=()=>{w.isInFallback&&(u(null,N,L,z,$,null,J,a,c),nn(w,N))},le=N.transition&&N.transition.mode==="out-in";le&&(K.transition.afterLeave=X),w.isInFallback=!0,y(K,$,null,!0),le||X()},move(N,F,K){w.activeBranch&&d(w.activeBranch,N,F,K),w.container=N},next(){return w.activeBranch&&m(w.activeBranch)},registerDep(N,F,K){const $=!!w.pendingBranch;$&&w.deps++;const L=N.vnode.el;N.asyncDep.catch(J=>{pn(J,N,0)}).then(J=>{if(N.isUnmounted||w.isUnmounted||w.pendingId!==N.suspenseId)return;N.asyncResolved=!0;const{vnode:z}=N;Bs(N,J),L&&(z.el=L);const X=!L&&N.subTree.el;F(N,z,g(L||N.subTree.el),L?null:m(N.subTree),w,o,K),X&&E(X),zr(N,z.el),$&&--w.deps===0&&w.resolve()})},unmount(N,F){w.isUnmounted=!0,w.activeBranch&&y(w.activeBranch,n,N,F),w.pendingBranch&&y(w.pendingBranch,n,N,F)}};return w}function pd(t,e,n,r,s,i,o,a,c){const f=e.suspense=Vc(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),l=c(t,f.pendingBranch=e.ssContent,n,f,i,o);return f.deps===0&&f.resolve(!1,!0),l}function gd(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=vo(r?n.default:n),t.ssFallback=r?vo(n.fallback):ae(Ue)}function vo(t){let e;if(B(t)){const n=cn&&t._c;n&&(t._d=!1,ke()),t=t(),n&&(t._d=!0,e=Ie,qc())}return W(t)&&(t=od(t)),t=Re(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Kc(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Ls(t)}function nn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,zr(r,s))}function md(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ne=Symbol.for("v-fgt"),Dt=Symbol.for("v-txt"),Ue=Symbol.for("v-cmt"),ur=Symbol.for("v-stc"),Rn=[];let Ie=null;function ke(t=!1){Rn.push(Ie=t?null:[])}function qc(){Rn.pop(),Ie=Rn[Rn.length-1]||null}let cn=1;function wo(t,e=!1){cn+=t,t<0&&Ie&&e&&(Ie.hasOnce=!0)}function Gc(t){return t.dynamicChildren=cn>0?Ie||Jt:null,qc(),cn>0&&Ie&&Ie.push(t),t}function Sr(t,e,n,r,s,i){return Gc($e(t,e,n,r,s,i,!0))}function Mt(t,e,n,r,s){return Gc(ae(t,e,n,r,s,!0))}function Un(t){return t?t.__v_isVNode===!0:!1}function dt(t,e){return t.type===e.type&&t.key===e.key}const zc=({key:t})=>t??null,fr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||ce(t)||B(t)?{i:ve,r:t,k:e,f:!!n}:t:null);function $e(t,e=null,n=null,r=0,s=null,i=t===Ne?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zc(e),ref:e&&fr(e),scopeId:pc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ve};return a?(Pi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),cn>0&&!o&&Ie&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ie.push(c),c}const ae=_d;function _d(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ic)&&(t=Ue),Un(t)){const a=ln(t,e,!0);return n&&Pi(a,n),cn>0&&!i&&Ie&&(a.shapeFlag&6?Ie[Ie.indexOf(t)]=a:Ie.push(a)),a.patchFlag=-2,a}if(Rd(t)&&(t=t.__vccOpts),e){e=Jc(e);let{class:a,style:c}=e;a&&!oe(a)&&(e.class=Kr(a)),se(c)&&(bi(c)&&!W(c)&&(c=ge({},c)),e.style=Vr(c))}const o=oe(t)?1:Wc(t)?128:Ef(t)?64:se(t)?4:B(t)?2:0;return $e(t,e,n,r,s,o,i,!0)}function Jc(t){return t?bi(t)||Oc(t)?ge({},t):t:null}function ln(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,f=e?bd(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&zc(f),ref:e&&e.ref?n&&i?W(i)?i.concat(fr(e)):[i,fr(e)]:fr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&wi(l,c.clone(l)),l}function Yc(t=" ",e=0){return ae(Dt,null,t,e)}function yd(t="",e=!1){return e?(ke(),Mt(Ue,null,t)):ae(Ue,null,t)}function Re(t){return t==null||typeof t=="boolean"?ae(Ue):W(t)?ae(Ne,null,t.slice()):Un(t)?ut(t):ae(Dt,null,String(t))}function ut(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function Pi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Oc(e)?e._ctx=ve:s===3&&ve&&(ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:ve},n=32):(e=String(e),r&64?(n=16,e=[Yc(e)]):n=8);t.children=e,t.shapeFlag|=n}function bd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Kr([e.class,r.class]));else if(s==="style")e.style=Vr([e.style,r.style]);else if(Wn(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pe(t,e,n,r=null){Je(t,e,7,[n,r])}const vd=Ac();let wd=0;function Ed(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vd,i={uid:wd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ka(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nc(r,s),emitsOptions:$c(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=id.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const Xc=()=>fe||ve;let Cr,js;{const t=Wr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Cr=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),js=e("__VUE_SSR_SETTERS__",n=>un=n)}const Kn=t=>{const e=fe;return Cr(t),t.scope.on(),()=>{t.scope.off(),Cr(e)}},Eo=()=>{fe&&fe.scope.off(),Cr(null)};function Qc(t){return t.vnode.shapeFlag&4}let un=!1;function Id(t,e=!1,n=!1){e&&js(e);const{props:r,children:s}=t.vnode,i=Qc(t);Kf(t,r,i,e),Jf(t,s,n||e);const o=i?Td(t,e):void 0;return e&&js(!1),o}function Td(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Uf);const{setup:r}=n;if(r){nt();const s=t.setupContext=r.length>1?Cd(t):null,i=Kn(t),o=Vn(r,t,0,[t.props,s]),a=Ua(o);if(rt(),i(),(a||t.sp)&&!en(t)&&Ii(t),a){if(o.then(Eo,Eo),e)return o.then(c=>{Bs(t,c)}).catch(c=>{pn(c,t,0)});t.asyncDep=o}else Bs(t,o)}else Zc(t)}function Bs(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=lc(e)),Zc(t)}function Zc(t,e,n){const r=t.type;t.render||(t.render=r.render||Ke);{const s=Kn(t);nt();try{Hf(t)}finally{rt(),s()}}}const Sd={get(t,e){return pe(t,"get",""),t[e]}};function Cd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Sd),slots:t.slots,emit:t.emit,expose:e}}function Jr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(lc(af(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in An)return An[n](t)},has(e,n){return n in e||n in An}})):t.proxy}function Ad(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Rd(t){return B(t)&&"__vccOpts"in t}const el=(t,e)=>mf(t,e,un);function Pd(t,e,n){const r=arguments.length;return r===2?se(e)&&!W(e)?Un(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Un(n)&&(n=[n]),ae(t,e,n))}const kd="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $s;const Io=typeof window<"u"&&window.trustedTypes;if(Io)try{$s=Io.createPolicy("vue",{createHTML:t=>t})}catch{}const tl=$s?t=>$s.createHTML(t):t=>t,Od="http://www.w3.org/2000/svg",Md="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,To=Xe&&Xe.createElement("template"),Nd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Xe.createElementNS(Od,t):e==="mathml"?Xe.createElementNS(Md,t):n?Xe.createElement(t,{is:n}):Xe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xe.createTextNode(t),createComment:t=>Xe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{To.innerHTML=tl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=To.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ld=Symbol("_vtc");function Dd(t,e,n){const r=t[Ld];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const So=Symbol("_vod"),xd=Symbol("_vsh"),Ud=Symbol(""),Hd=/(^|;)\s*display\s*:/;function Fd(t,e,n){const r=t.style,s=oe(n);let i=!1;if(n&&!s){if(e)if(oe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&dr(r,a,"")}else for(const o in e)n[o]==null&&dr(r,o,"");for(const o in n)o==="display"&&(i=!0),dr(r,o,n[o])}else if(s){if(e!==n){const o=r[Ud];o&&(n+=";"+o),r.cssText=n,i=Hd.test(n)}}else e&&t.removeAttribute("style");So in t&&(t[So]=i?r.display:"",t[xd]&&(r.display="none"))}const Co=/\s*!important$/;function dr(t,e,n){if(W(n))n.forEach(r=>dr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jd(t,e);Co.test(n)?t.setProperty(Ht(r),n.replace(Co,""),"important"):t[r]=n}}const Ao=["Webkit","Moz","ms"],gs={};function jd(t,e){const n=gs[e];if(n)return n;let r=Oe(e);if(r!=="filter"&&r in t)return gs[e]=r;r=$r(r);for(let s=0;s<Ao.length;s++){const i=Ao[s]+r;if(i in t)return gs[e]=i}return e}const Ro="http://www.w3.org/1999/xlink";function Po(t,e,n,r,s,i=Fu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ro,e.slice(6,e.length)):t.setAttributeNS(Ro,e,n):n==null||i&&!Ba(n)?t.removeAttribute(e):t.setAttribute(e,i?"":It(n)?String(n):n)}function ko(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tl(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ba(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Kt(t,e,n,r){t.addEventListener(e,n,r)}function Bd(t,e,n,r){t.removeEventListener(e,n,r)}const Oo=Symbol("_vei");function $d(t,e,n,r,s=null){const i=t[Oo]||(t[Oo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Wd(e);if(r){const f=i[e]=qd(r,s);Kt(t,a,f,c)}else o&&(Bd(t,a,o,c),i[e]=void 0)}}const Mo=/(?:Once|Passive|Capture)$/;function Wd(t){let e;if(Mo.test(t)){e={};let r;for(;r=t.match(Mo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ht(t.slice(2)),e]}let ms=0;const Vd=Promise.resolve(),Kd=()=>ms||(Vd.then(()=>ms=0),ms=Date.now());function qd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Gd(r,n.value),e,5,[r])};return n.value=t,n.attached=Kd(),n}function Gd(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const No=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Dd(t,r,o):e==="style"?Fd(t,n,r):Wn(e)?li(e)||$d(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jd(t,e,r,o))?(ko(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Po(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!oe(r))?ko(t,Oe(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Po(t,e,r,o))};function Jd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&No(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return No(e)&&oe(n)?!1:e in t}const Lo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>lr(e,n):e};function Yd(t){t.target.composing=!0}function Do(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s=Symbol("_assign"),xo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_s]=Lo(s);const i=r||s.props&&s.props.type==="number";Kt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ps(a)),t[_s](a)}),n&&Kt(t,"change",()=>{t.value=t.value.trim()}),e||(Kt(t,"compositionstart",Yd),Kt(t,"compositionend",Do),Kt(t,"change",Do))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[_s]=Lo(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ps(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},nl=ge({patchProp:zd},Nd);let Pn,Uo=!1;function Xd(){return Pn||(Pn=Xf(nl))}function Qd(){return Pn=Uo?Pn:Qf(nl),Uo=!0,Pn}const Zd=(...t)=>{const e=Xd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sl(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},eh=(...t)=>{const e=Qd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sl(r);if(s)return n(s,!0,rl(s))},e};function rl(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sl(t){return oe(t)?document.querySelector(t):t}const th=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,nh=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,rh=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function sh(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){ih(t);return}return e}function ih(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ar(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!rh.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(th.test(t)||nh.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,sh)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const oh=/#/g,ah=/&/g,ch=/\//g,lh=/=/g,ki=/\+/g,uh=/%5e/gi,fh=/%60/gi,dh=/%7c/gi,hh=/%20/gi;function ph(t){return encodeURI(""+t).replace(dh,"|")}function Ws(t){return ph(typeof t=="string"?t:JSON.stringify(t)).replace(ki,"%2B").replace(hh,"+").replace(oh,"%23").replace(ah,"%26").replace(fh,"`").replace(uh,"^").replace(ch,"%2F")}function ys(t){return Ws(t).replace(lh,"%3D")}function Rr(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function gh(t){return Rr(t.replace(ki," "))}function mh(t){return Rr(t.replace(ki," "))}function Oi(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=gh(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=mh(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function _h(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ys(t)}=${Ws(n)}`).join("&"):`${ys(t)}=${Ws(e)}`:ys(t)}function il(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>_h(e,t[e])).filter(Boolean).join("&")}const yh=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,bh=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,vh=/^([/\\]\s*){2,}[^/\\]/,wh=/^[\s\0]*(blob|data|javascript|vbscript):$/i,Eh=/\/$|\/\?|\/#/,Ih=/^\.?\//;function gn(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?yh.test(t):bh.test(t)||(e.acceptRelative?vh.test(t):!1)}function Th(t){return!!t&&wh.test(t)}function Vs(t="",e){return e?Eh.test(t):t.endsWith("/")}function Mi(t="",e){if(!e)return(Vs(t)?t.slice(0,-1):t)||"/";if(!Vs(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Ks(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Vs(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function Sh(t=""){return t.startsWith("/")}function Ho(t=""){return Sh(t)?t:"/"+t}function Ch(t,e){if(al(e)||gn(t))return t;const n=Mi(e);return t.startsWith(n)?t:Yr(n,t)}function Ah(t,e){if(al(e))return t;const n=Mi(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function ol(t,e){const n=ul(t),r={...Oi(n.search),...e};return n.search=il(r),fl(n)}function al(t){return!t||t==="/"}function Rh(t){return t&&t!=="/"}function Yr(t,...e){let n=t||"";for(const r of e.filter(s=>Rh(s)))if(n){const s=r.replace(Ih,"");n=Ks(n)+s}else n=r;return n}function cl(...t){var o,a,c,f;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const l of n)if(!(!l||l==="/")){for(const[u,d]of l.split(e).entries())if(!(!d||d===".")){if(d===".."){if(r.length===1&&gn(r[0]))continue;r.pop(),s--;continue}if(u===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+d;continue}r.push(d),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(f=n[n.length-1])!=null&&f.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function Ph(t,e,n={}){return n.trailingSlash||(t=Ks(t),e=Ks(e)),n.leadingSlash||(t=Ho(t),e=Ho(e)),n.encoding||(t=Rr(t),e=Rr(e)),t===e}const ll=Symbol.for("ufo:protocolRelative");function ul(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,u,d=""]=n;return{protocol:u.toLowerCase(),pathname:d,href:u+d,auth:"",host:"",search:"",hash:""}}if(!gn(t,{acceptRelative:!0}))return Fo(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:f,hash:l}=Fo(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:f,hash:l,[ll]:!r}}function Fo(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function fl(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[ll]?(t.protocol||"")+"//":"")+s+i+e+n+r}class kh extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Oh(t){var c,f,l,u,d;const e=((c=t.error)==null?void 0:c.message)||((f=t.error)==null?void 0:f.toString())||"",n=((l=t.request)==null?void 0:l.method)||((u=t.options)==null?void 0:u.method)||"GET",r=((d=t.request)==null?void 0:d.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new kh(o,t.error?{cause:t.error}:void 0);for(const y of["request","options","response"])Object.defineProperty(a,y,{get(){return t[y]}});for(const[y,m]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,y,{get(){return t.response&&t.response[m]}});return a}const Mh=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function jo(t="GET"){return Mh.has(t.toUpperCase())}function Nh(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Lh=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Dh=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function xh(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Dh.test(e)?"json":Lh.has(e)||e.startsWith("text/")?"text":"blob"}function Uh(t,e,n,r){const s=Hh((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function Hh(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function ir(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const Fh=new Set([408,409,425,429,500,502,503,504]),jh=new Set([101,204,205,304]);function dl(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let l;typeof a.options.retry=="number"?l=a.options.retry:l=jo(a.options.method)?0:1;const u=a.response&&a.response.status||500;if(l>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(u):Fh.has(u))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(y=>setTimeout(y,d)),i(a.request,{...a.options,retry:l-1})}}const f=Oh(a);throw Error.captureStackTrace&&Error.captureStackTrace(f,i),f}const i=async function(c,f={}){const l={request:c,options:Uh(c,f,t.defaults,n),response:void 0,error:void 0};l.options.method&&(l.options.method=l.options.method.toUpperCase()),l.options.onRequest&&await ir(l,l.options.onRequest),typeof l.request=="string"&&(l.options.baseURL&&(l.request=Ch(l.request,l.options.baseURL)),l.options.query&&(l.request=ol(l.request,l.options.query),delete l.options.query),"query"in l.options&&delete l.options.query,"params"in l.options&&delete l.options.params),l.options.body&&jo(l.options.method)&&(Nh(l.options.body)?(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")):("pipeTo"in l.options.body&&typeof l.options.body.pipeTo=="function"||typeof l.options.body.pipe=="function")&&("duplex"in l.options||(l.options.duplex="half")));let u;if(!l.options.signal&&l.options.timeout){const y=new r;u=setTimeout(()=>{const m=new Error("[TimeoutError]: The operation was aborted due to timeout");m.name="TimeoutError",m.code=23,y.abort(m)},l.options.timeout),l.options.signal=y.signal}try{l.response=await e(l.request,l.options)}catch(y){return l.error=y,l.options.onRequestError&&await ir(l,l.options.onRequestError),await s(l)}finally{u&&clearTimeout(u)}if((l.response.body||l.response._bodyInit)&&!jh.has(l.response.status)&&l.options.method!=="HEAD"){const y=(l.options.parseResponse?"json":l.options.responseType)||xh(l.response.headers.get("content-type")||"");switch(y){case"json":{const m=await l.response.text(),g=l.options.parseResponse||Ar;l.response._data=g(m);break}case"stream":{l.response._data=l.response.body||l.response._bodyInit;break}default:l.response._data=await l.response[y]()}}return l.options.onResponse&&await ir(l,l.options.onResponse),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await ir(l,l.options.onResponseError),await s(l)):l.response},o=async function(c,f){return(await i(c,f))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>dl({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const Pr=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Bh=Pr.fetch?(...t)=>Pr.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),$h=Pr.Headers,Wh=Pr.AbortController,Vh=dl({fetch:Bh,Headers:$h,AbortController:Wh}),Kh=Vh,qh=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},kr=qh().app,Gh=()=>kr.baseURL,zh=()=>kr.buildAssetsDir,Ni=(...t)=>cl(hl(),zh(),...t),hl=(...t)=>{const e=kr.cdnURL||kr.baseURL;return t.length?cl(e,...t):e};globalThis.__buildAssetsURL=Ni,globalThis.__publicAssetsURL=hl;globalThis.$fetch||(globalThis.$fetch=Kh.create({baseURL:Gh()}));"global"in globalThis||(globalThis.global=globalThis);function qs(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?qs(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const Jh={run:t=>t()},Yh=()=>Jh,pl=typeof console.createTask<"u"?console.createTask:Yh;function Xh(t,e){const n=e.shift(),r=pl(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function Qh(t,e){const n=e.shift(),r=pl(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function bs(t,e){for(const n of[...t])n(e)}class Zh{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=qs(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=qs(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(Xh,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Qh,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&bs(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&bs(this._after,s)}):(this._after&&s&&bs(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function gl(){return new Zh}function ep(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},f=()=>e===o?c:void 0;Gs.add(f);try{const l=s?s.run(o,a):a();return n||(e=void 0),await l}finally{Gs.delete(f)}}}}function tp(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=ep({...t,...r})),e[n]}}}const Or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Bo="__unctx__",np=Or[Bo]||(Or[Bo]=tp()),rp=(t,e={})=>np.get(t,e),$o="__unctx_async_handlers__",Gs=Or[$o]||(Or[$o]=new Set);function ml(t){const e=[];for(const s of Gs){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Kb={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},sp=null,ip="#__nuxt",_l="nuxt-app",Wo=36e5,op="vite:preloadError";function yl(t=_l){return rp(t,{asyncContext:!1})}const ap="__nuxt_plugin";function cp(t){var s;let e=0;const n={_id:t.id||_l||"nuxt-app",_scope:ju(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.4"},get vue(){return n.vueApp.version}},payload:qt({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:qt({}),state:wt({}),once:new Set,_errors:qt({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!qa()?n._scope.run(()=>Vo(n,i)):Vo(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:qt({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=gl(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;or(n,a,o),or(n.vueApp.config.globalProperties,a,o)},or(n.vueApp,"$nuxt",n),or(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(op,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=me);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function lp(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function up(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function fp(t,e){const n=new Set,r=[],s=[],i=[];let o=0;async function a(c){var l;const f=((l=c.dependsOn)==null?void 0:l.filter(u=>e.some(d=>d._name===u)&&!n.has(u)))??[];if(f.length>0)r.push([new Set(f),c]);else{const u=up(t,c).then(async()=>{c._name&&(n.add(c._name),await Promise.all(r.map(async([d,y])=>{d.has(c._name)&&(d.delete(c._name),d.size===0&&(o++,await a(y)))})))});c.parallel?s.push(u.catch(d=>i.push(d))):await u}}for(const c of e)lp(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function Tt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ap]:!0,_name:e})}function Vo(t,e,n){const r=()=>e();return yl(t._id).set(t),t.vueApp.runWithContext(r)}function dp(t){var n;let e;return Si()&&(e=(n=Xc())==null?void 0:n.appContext.app.$nuxt),e||(e=yl(t).tryUse()),e||null}function me(t){const e=dp(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Hn(t){return me().$config}function or(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function hp(t,e){return{ctx:{table:t},matchAll:n=>vl(n,t)}}function bl(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,bl(s)])):new Map(Object.entries(t[n]));return e}function pp(t){return hp(bl(t))}function vl(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Ko(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Ko(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...vl(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Ko(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function vs(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function zs(t,e,n=".",r){if(!vs(e))return zs(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:vs(o)&&vs(s[i])?s[i]=zs(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function gp(t){return(...e)=>e.reduce((n,r)=>zs(n,r,"",t),{})}const mp=gp();function _p(t,e){try{return e in t}catch{return!1}}class Js extends Error{constructor(n,r={}){super(n,r);at(this,"statusCode",500);at(this,"fatal",!1);at(this,"unhandled",!1);at(this,"statusMessage");at(this,"data");at(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:Ys(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=wl(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}at(Js,"__h3_error__",!0);function yp(t){if(typeof t=="string")return new Js(t);if(bp(t))return t;const e=new Js(t.message??t.statusMessage??"",{cause:t.cause||t});if(_p(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Ys(t.statusCode,e.statusCode):t.status&&(e.statusCode=Ys(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;wl(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function bp(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const vp=/[^\u0009\u0020-\u007E]/g;function wl(t=""){return t.replace(vp,"")}function Ys(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const El=Symbol("route"),xt=()=>{var t;return(t=me())==null?void 0:t.$router},Li=()=>Si()?tn(El,me()._route):me()._route;const wp=()=>{try{if(me()._processingMiddleware)return!0}catch{return!1}return!1},Ep=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Ip(t):xt().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:f={}}=e.open,l=Object.entries(f).filter(([u,d])=>d!==void 0).map(([u,d])=>`${u.toLowerCase()}=${d}`).join(", ");return open(n,c,l),Promise.resolve()}const r=gn(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&Th(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=wp();if(!s&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:c,search:f,hash:l}=ul(t);return{path:c,...f&&{query:Oi(f)},...l&&{hash:l},replace:!0}}return{...t,replace:!0}}return t}const o=xt(),a=me();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Ip(t){return ol(t.path||"",t.query||{})+(t.hash||"")}const Il="__nuxt_error",Di=()=>hf(me().payload,"error"),Tp=t=>{const e=xi(t);try{const n=me(),r=Di();n.hooks.callHook("app:error",e),r.value||(r.value=e)}catch{throw e}return e},Sp=async(t={})=>{const e=me(),n=Di();e.callHook("app:error:cleared",t),t.redirect&&await xt().replace(t.redirect),n.value=sp},Cp=t=>!!t&&typeof t=="object"&&Il in t,xi=t=>{const e=yp(t);return Object.defineProperty(e,Il,{value:!0,configurable:!1,writable:!1}),e};function qo(t){const e=Rp(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const Ap="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Rp(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=Ap.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const Pp=-1,kp=-2,Op=-3,Mp=-4,Np=-5,Lp=-6;function Dp(t,e){return xp(JSON.parse(t),e)}function xp(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===Pp)return;if(i===Op)return NaN;if(i===Mp)return 1/0;if(i===Np)return-1/0;if(i===Lp)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],f=e==null?void 0:e[c];if(f)return r[i]=f(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const l=new Set;r[i]=l;for(let y=1;y<a.length;y+=1)l.add(s(a[y]));break;case"Map":const u=new Map;r[i]=u;for(let y=1;y<a.length;y+=2)u.set(s(a[y]),s(a[y+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const d=Object.create(null);r[i]=d;for(let y=1;y<a.length;y+=2)d[a[y]]=s(a[y+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const y=globalThis[c],m=a[1],g=qo(m),E=new y(g);r[i]=E;break}case"ArrayBuffer":{const y=a[1],m=qo(y);r[i]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let f=0;f<a.length;f+=1){const l=a[f];l!==kp&&(c[f]=s(l))}}else{const c={};r[i]=c;for(const f in a){const l=a[f];c[f]=s(l)}}return r[i]}return s(0)}const Up=new Set(["link","style","script","noscript"]),Hp=new Set(["title","titleTemplate","script","style","noscript"]),Go=new Set(["base","meta","link","style","script","noscript"]),Fp=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),jp=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Bp=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),$p=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Wp=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const Vp=["name","property","http-equiv"];function Tl(t){const e=t.split(":");return e.length?Wp.has(e[1]):!1}function Xs(t){const{props:e,tag:n}=t;if(jp.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const r of Vp)if(e[r]!==void 0)return`${n}:${e[r]}`}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(Hp.has(n)){const r=t.textContent||t.innerHTML;if(r)return`${n}:content:${r}`}}function zo(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([r,s])=>`${r}:${String(s)}`).join(",")}`}function Mr(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let s;if(e&&(s=e(n,t)),Array.isArray(s))return s.map(i=>Mr(i,e));if((s==null?void 0:s.constructor)===Object){const i={};for(const o of Object.keys(s))i[o]=Mr(s[o],e,o);return i}return s}function Kp(t,e){const n=t==="style"?new Map:new Set;function r(s){const i=s.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(r):r(e):Array.isArray(e)?e.forEach(s=>r(s)):e&&typeof e=="object"&&Object.entries(e).forEach(([s,i])=>{i&&i!=="false"&&(t==="style"?n.set(s.trim(),i):r(s))}),n}function Sl(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,r])=>{if(r===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=Kp(n,r);return}if(Bp.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof r=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(r)}else t[n]=r;return}const s=String(r),i=n.startsWith("data-");s==="true"||s===""?t.props[n]=i?s:!0:!r&&i&&s==="false"?t.props[n]="false":r!==void 0&&(t.props[n]=r)}),t}function qp(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},r=Sl({tag:t,props:{}},n);return r.key&&Up.has(r.tag)&&(r.props["data-hid"]=r._h=r.key),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r}function Gp(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(s,i)=>{for(let o=0;o<e.length;o++)i=e[o](s,i);return i};t=n(void 0,t);const r=[];return t=Mr(t,n),Object.entries(t||{}).forEach(([s,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])r.push(qp(s,o))}),r.flat()}const Qs=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Jo={base:-10,title:10},zp={critical:-8,high:-1,low:2},Yo={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Jp=/@import/,wn=t=>t===""||t===!0;function Yp(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const r=zp[e.tagPriority]||0,s=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Yo;if(e.tag in Jo)n=Jo[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=Yo.meta[o])}else e.tag==="link"&&e.props.rel?n=s.link[e.props.rel]:e.tag==="script"?wn(e.props.async)?n=s.script.async:e.props.src&&!wn(e.props.defer)&&!wn(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=s.script.sync:wn(e.props.defer)&&e.props.src&&!wn(e.props.async)&&(n=s.script.defer):e.tag==="style"&&(n=e.innerHTML&&Jp.test(e.innerHTML)?s.style.imported:s.style.sync);return(n||100)+r}function Xo(t,e){const n=typeof e=="function"?e(t):e,r=n.key||String(t.plugins.size+1);t.plugins.get(r)||(t.plugins.set(r,n),t.hooks.addHooks(n.hooks||{}))}function Xp(t={}){var a;const e=gl();e.addHooks(t.hooks||{});const n=!t.document,r=new Map,s=new Map,i=[],o={_entryCount:1,plugins:s,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:r,headEntries(){return[...r.values()]},use:c=>Xo(o,c),push(c,f){const l={...f||{}};delete l.head;const u=l._index??o._entryCount++,d={_i:u,input:c,options:l},y={_poll(m=!1){o.dirty=!0,!m&&i.push(u),e.callHook("entries:updated",o)},dispose(){r.delete(u)&&y._poll(!0)},patch(m){(!l.mode||l.mode==="server"&&n||l.mode==="client"&&!n)&&(d.input=m,r.set(u,d),y._poll())}};return y.patch(c),y},async resolveTags(){var y;const c={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",c);i.length;){const m=i.shift(),g=r.get(m);if(g){const E={tags:Gp(g.input,t.propResolvers||[]).map(T=>Object.assign(T,g.options)),entry:g};await e.callHook("entries:normalize",E),g._tags=E.tags.map((T,P)=>(T._w=Yp(o,T),T._p=(g._i<<10)+P,T._d=Xs(T),T))}}let f=!1;c.entries.flatMap(m=>(m._tags||[]).map(g=>({...g,props:{...g.props}}))).sort(Qs).reduce((m,g)=>{const E=String(g._d||g._p);if(!m.has(E))return m.set(E,g);const T=m.get(E);if(((g==null?void 0:g.tagDuplicateStrategy)||($p.has(g.tag)?"merge":null)||(g.key&&g.key===T.key?"merge":null))==="merge"){const _={...T.props};Object.entries(g.props).forEach(([b,w])=>_[b]=b==="style"?new Map([...T.props.style||new Map,...w]):b==="class"?new Set([...T.props.class||new Set,...w]):w),m.set(E,{...g,props:_})}else g._p>>10===T._p>>10&&g.tag==="meta"&&Tl(E)?(m.set(E,Object.assign([...Array.isArray(T)?T:[T],g],g)),f=!0):(g._w===T._w?g._p>T._p:(g==null?void 0:g._w)<(T==null?void 0:T._w))&&m.set(E,g);return m},c.tagMap);const l=c.tagMap.get("title"),u=c.tagMap.get("titleTemplate");if(o._title=l==null?void 0:l.textContent,u){const m=u==null?void 0:u.textContent;if(o._titleTemplate=m,m){let g=typeof m=="function"?m(l==null?void 0:l.textContent):m;typeof g=="string"&&!o.plugins.has("template-params")&&(g=g.replace("%s",(l==null?void 0:l.textContent)||"")),l?g===null?c.tagMap.delete("title"):c.tagMap.set("title",{...l,textContent:g}):(u.tag="title",u.textContent=g)}}c.tags=Array.from(c.tagMap.values()),f&&(c.tags=c.tags.flat().sort(Qs)),await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c);const d=[];for(const m of c.tags){const{innerHTML:g,tag:E,props:T}=m;if(Fp.has(E)&&!(Object.keys(T).length===0&&!m.innerHTML&&!m.textContent)&&!(E==="meta"&&!T.content&&!T["http-equiv"]&&!T.charset)){if(E==="script"&&g){if((y=T.type)!=null&&y.endsWith("json")){const P=typeof g=="string"?g:JSON.stringify(g);m.innerHTML=P.replace(/</g,"\\u003C")}else typeof g=="string"&&(m.innerHTML=g.replace(new RegExp(`</${E}`,"g"),`<\\/${E}`));m._d=Xs(m)}d.push(m)}}return d}};return((t==null?void 0:t.plugins)||[]).forEach(c=>Xo(o,c)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(c=>c&&o.push(c)),o}const ft="%separator",Qp=new RegExp(`${ft}(?:\\s*${ft})*`,"g");function Zp(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):r||""}function ar(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(ft);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===ft||!i.includes(a))return a;const c=Zp(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(ft)&&(t=t.slice(0,-ft.length)),t.startsWith(ft)&&(t=t.slice(ft.length)),t=t.replace(Qp,n||"").trim()),t}const Qo=t=>t.includes(":key")?t:t.split(":").join(":key:"),eg={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const r=n.tagPriority;if(!r)continue;const s=String(r);if(s.startsWith("before:")){const i=Qo(s.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(s.startsWith("after:")){const i=Qo(s.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Qs))}}},tg={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Zs(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>Zs(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const r of Object.keys(t))n[r]=await Zs(t[r]);return n}return t}const ng={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(Zs(t.entries[n].input).then(r=>{t.entries[n].input=r,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},rg={meta:"content",link:"href",htmlAttrs:"lang"},sg=["innerHTML","textContent"],ig=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var r,s,i;const n=((s=(r=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:r[0])==null?void 0:s.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const r=((i=e.get("templateParams"))==null?void 0:i.props)||{},s=r.separator||"|";delete r.separator,r.pageTitle=ar(r.pageTitle||t._title||"",r,s);for(const o of n){if(o.processTemplateParams===!1)continue;const a=rg[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=ar(o.props[a],r,s);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const c of sg)typeof o[c]=="string"&&(o[c]=ar(o[c],r,s,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=ar(n.textContent,t._templateParams,t._separator))}}}),og=(t,e)=>ce(e)?lf(e):e,Cl="usehead";function ag(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Cl,t)}}.install}function cg(){if(Si()){const t=tn(Cl);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function qb(t,e={}){const n=e.head||cg();return n.ssr?n.push(t||{},e):lg(n,t,e)}function lg(t,e,n={}){const r=qe(!1);let s;return nd(()=>{const o=r.value?{}:Mr(e,og);s?s.patch(o):s=t.push(o,n)}),Xc()&&(bc(()=>{s.dispose()}),_c(()=>{r.value=!0}),mc(()=>{r.value=!1})),s}const ug="modulepreload",fg=function(t,e){return new URL(t,e).href},Zo={},ea=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(l=>{if(l=fg(l,r),l in Zo)return;Zo[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let g=a.length-1;g>=0;g--){const E=a[g];if(E.href===l&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":ug,u||(m.as="script"),m.crossOrigin="",m.href=l,f&&m.setAttribute("nonce",f),document.head.appendChild(m),u)return new Promise((g,E)=>{m.addEventListener("load",g),m.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let hr,pr;function dg(){return hr=$fetch(Ni(`builds/meta/${Hn().app.buildId}.json`),{responseType:"json"}),hr.then(t=>{pr=pp(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),hr}function Xr(){return hr||dg()}async function Ui(t){const e=typeof t=="string"?t:t.path;if(await Xr(),!pr)return console.error("[nuxt] Error creating app manifest matcher.",pr),{};try{return mp({},...pr.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function ta(t,e={}){if(!await Rl(t))return null;const r=await pg(t,e);return await Al(r)||null}const hg="_payload.json";async function pg(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||gn(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Hn(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Rl(t)?i:r.app.baseURL;return Yr(o,n.pathname,hg+(s?`?${s}`:""))}async function Al(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(Pl));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Rl(t=Li().path){const e=me();return t=Mi(t),(await Xr()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const r=await Ui({path:t});return!!r.prerender&&!r.redirect})}let Pt=null;async function gg(){var r;if(Pt)return Pt;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Pl(t.textContent||""),n=t.dataset.src?await Al(t.dataset.src):void 0;return Pt={...e,...n,...window.__NUXT__},(r=Pt.config)!=null&&r.public&&(Pt.config.public=wt(Pt.config.public)),Pt}async function Pl(t){return await Dp(t,me()._payloadRevivers)}function mg(t,e){me()._payloadRevivers[t]=e}const _g=[["NuxtError",t=>xi(t)],["EmptyShallowRef",t=>io(t==="_"?void 0:t==="0n"?BigInt(0):Ar(t))],["EmptyRef",t=>qe(t==="_"?void 0:t==="0n"?BigInt(0):Ar(t))],["ShallowRef",t=>io(t)],["ShallowReactive",t=>qt(t)],["Ref",t=>qe(t)],["Reactive",t=>wt(t)]],yg=Tt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of _g)mg(r,s);Object.assign(t.payload,([e,n]=ml(()=>t.runWithContext(gg)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Hi(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var y;const i=new Map,o=new Promise(m=>{t.resolveTags().then(g=>{m(g.map(E=>{const T=i.get(E._d)||0,P={tag:E,id:(T?`${E._d}:${T}`:E._d)||zo(E),shouldRender:!0};return E._d&&Tl(E._d)&&i.set(E._d,T+1),P}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const m of["body","head"]){const g=(y=n[m])==null?void 0:y.children;for(const E of g){const T=E.tagName.toLowerCase();if(!Go.has(T))continue;const P=Sl({tag:T,props:{}},{innerHTML:E.innerHTML,...E.getAttributeNames().reduce((_,b)=>(_[b]=E.getAttribute(b),_),{})||{}});if(P.key=E.getAttribute("data-hid")||void 0,P._d=Xs(P)||zo(P),a.elMap.has(P._d)){let _=1,b=P._d;for(;a.elMap.has(b);)b=`${P._d}:${_++}`;a.elMap.set(b,E)}else a.elMap.set(P._d,E)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(m,g,E){const T=`${m}:${g}`;a.sideEffects[T]=E,delete a.pendingSideEffects[T]}function f({id:m,$el:g,tag:E}){const T=E.tag.endsWith("Attrs");a.elMap.set(m,g),T||(E.textContent&&E.textContent!==g.textContent&&(g.textContent=E.textContent),E.innerHTML&&E.innerHTML!==g.innerHTML&&(g.innerHTML=E.innerHTML),c(m,"el",()=>{g==null||g.remove(),a.elMap.delete(m)}));for(const P in E.props){if(!Object.prototype.hasOwnProperty.call(E.props,P))continue;const _=E.props[P];if(P.startsWith("on")&&typeof _=="function"){const w=g==null?void 0:g.dataset;if(w&&w[`${P}fired`]){const N=P.slice(0,-5);_.call(g,new Event(N.substring(2)))}g.getAttribute(`data-${P}`)!==""&&((E.tag==="bodyAttrs"?n.defaultView:g).addEventListener(P.substring(2),_.bind(g)),g.setAttribute(`data-${P}`,""));continue}const b=`attr:${P}`;if(P==="class"){if(!_)continue;for(const w of _)T&&c(m,`${b}:${w}`,()=>g.classList.remove(w)),!g.classList.contains(w)&&g.classList.add(w)}else if(P==="style"){if(!_)continue;for(const[w,N]of _)c(m,`${b}:${w}`,()=>{g.style.removeProperty(w)}),g.style.setProperty(w,N)}else _!==!1&&_!==null&&(g.getAttribute(P)!==_&&g.setAttribute(P,_===!0?"":String(_)),T&&c(m,b,()=>g.removeAttribute(P)))}}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const m of d){const{tag:g,shouldRender:E,id:T}=m;if(E){if(g.tag==="title"){n.title=g.textContent,c("title","",()=>n.title=a.title);continue}m.$el=m.$el||a.elMap.get(T),m.$el?f(m):Go.has(g.tag)&&l.push(m)}}for(const m of l){const g=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),f(m),u[g]=u[g]||n.createDocumentFragment(),u[g].appendChild(m.$el)}for(const m of d)await t.hooks.callHook("dom:renderTag",m,n,c);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose);for(const m in a.pendingSideEffects)a.pendingSideEffects[m]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:d}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function bg(t={}){var r,s,i;const e=((r=t.domOptions)==null?void 0:r.render)||Hi;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(s=t.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return Xp({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function vg(t,e){let n=0;return()=>{const r=++n;e(()=>{n===r&&t()})}}function wg(t={}){const e=bg({domOptions:{render:vg(()=>Hi(e),n=>setTimeout(n,0))},...t});return e.install=ag(e),e}const Eg={disableDefaults:!0,disableCapoSorting:!1,plugins:[tg,ng,ig,eg]},Ig=Tt({name:"nuxt:head",enforce:"pre",setup(t){const e=wg(Eg);t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Hi(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}}),Tg=async t=>{let e,n;const r=([e,n]=ml(()=>Ui({path:t.path})),e=await e,n(),e);if(r.redirect)return gn(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},Sg=[Tg];function ws(t){const e=t&&typeof t=="object"?t:{};typeof t=="object"&&(t=fl({pathname:t.path||"",search:il(t.query||{}),hash:t.hash||""}));const n=new URL(t.toString(),window.location.href);return{path:n.pathname,fullPath:t,query:Oi(n.search),hash:n.hash,params:e.params||{},name:void 0,matched:e.matched||[],redirectedFrom:void 0,meta:e.meta||{},href:t}}const Cg=Tt({name:"nuxt:router",enforce:"pre",setup(t){const e=Ah(window.location.pathname,Hn().app.baseURL)+window.location.search+window.location.hash,n=[],r={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},s=(u,d)=>(r[u].push(d),()=>r[u].splice(r[u].indexOf(d),1)),i=Hn().app.baseURL,o=wt(ws(e));async function a(u,d){try{const y=ws(u);for(const m of r["navigate:before"]){const g=await m(y,o);if(g===!1||g instanceof Error)return;if(typeof g=="string"&&g.length)return a(g,!0)}for(const m of r["resolve:before"])await m(y,o);Object.assign(o,y),window.history[d?"replaceState":"pushState"]({},"",Yr(i,y.fullPath)),t.isHydrating||await t.runWithContext(Sp);for(const m of r["navigate:after"])await m(y,o)}catch(y){for(const m of r.error)await m(y)}}const f={currentRoute:el(()=>o),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:u=>a(u,!1),replace:u=>a(u,!0),back:()=>window.history.go(-1),go:u=>window.history.go(u),forward:()=>window.history.go(1),beforeResolve:u=>s("resolve:before",u),beforeEach:u=>s("navigate:before",u),afterEach:u=>s("navigate:after",u),onError:u=>s("error",u),resolve:ws,addRoute:(u,d)=>{n.push(d)},getRoutes:()=>n,hasRoute:u=>n.some(d=>d.name===u),removeRoute:u=>{const d=n.findIndex(y=>y.name===u);d!==-1&&n.splice(d,1)}};t.vueApp.component("RouterLink",Ei({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(u,{slots:d})=>{const y=()=>a(u.to,u.replace);return()=>{var g;const m=f.resolve(u.to);return u.custom?(g=d.default)==null?void 0:g.call(d,{href:u.to,navigate:y,route:m}):Pd("a",{href:u.to,onClick:E=>(E.preventDefault(),y())},d)}}})),window.addEventListener("popstate",u=>{const d=u.target.location;f.replace(d.href.replace(d.origin,""))}),t._route=o,t._middleware||(t._middleware={global:[],named:{}});const l=t.payload.state._layout;return t.hooks.hookOnce("app:created",async()=>{f.beforeEach(async(u,d)=>{u.meta=wt(u.meta||{}),t.isHydrating&&l&&!Et(u.meta.layout)&&(u.meta.layout=l),t._processingMiddleware=!0;{const y=new Set([...Sg,...t._middleware.global]);{const m=await t.runWithContext(()=>Ui({path:u.path}));if(m.appMiddleware)for(const g in m.appMiddleware){const E=t._middleware.named[g];if(!E)return;m.appMiddleware[g]?y.add(E):y.delete(E)}}for(const m of y){const g=await t.runWithContext(()=>m(u,d));if(g!==!0&&(g||g===!1))return g}}}),f.afterEach(()=>{delete t._processingMiddleware}),await f.replace(e),Ph(o.fullPath,e)||await t.runWithContext(()=>Ep(o.fullPath))}),{provide:{route:o,router:f}}}}),na=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),Gb=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Fi=t=>{const e=me();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{na(()=>t())}):na(()=>t())},Ag=Tt({name:"nuxt:payload",setup(t){const e=new Set;xt().beforeResolve(async(n,r)=>{if(n.path===r.path)return;const s=await ta(n.path);if(s){for(const i of e)delete t.static.data[i];for(const i in s.data)i in t.static.data||e.add(i),t.static.data[i]=s.data[i]}}),Fi(()=>{var n;t.hooks.hook("link:prefetch",async r=>{const{hostname:s}=new URL(r,window.location.href);s===window.location.hostname&&await ta(r).catch(()=>{console.warn("[nuxt] Error preloading payload for",r)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Xr,1e3)})}}),Rg=Tt(()=>{const t=xt();Fi(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Pg=Tt(t=>{let e;async function n(){const r=await Xr();e&&clearTimeout(e),e=setTimeout(n,Wo);try{const s=await $fetch(Ni("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Fi(()=>{e=setTimeout(n,Wo)})});function kg(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ar(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:me().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Og=Tt({name:"nuxt:chunk-reload",setup(t){const e=xt(),n=Hn(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Yr(n.app.baseURL,i.fullPath);kg({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),Mg=Tt({name:"nuxt:global-components"}),Ng=[yg,Ig,Cg,Ag,Rg,Pg,Og,Mg],Lg=()=>{};var ra={};/**
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
 */const kl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Dg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,l=i>>2,u=(i&3)<<4|a>>4;let d=(a&15)<<2|f>>6,y=f&63;c||(y=64,o||(d=64)),r.push(n[l],n[u],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||f==null||u==null)throw new xg;const d=i<<2|a>>4;if(r.push(d),f!==64){const y=a<<4&240|f>>2;if(r.push(y),u!==64){const m=f<<6&192|u;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ug=function(t){const e=kl(t);return Ol.encodeByteArray(e,!0)},Ml=function(t){return Ug(t).replace(/\./g,"")},Nl=function(t){try{return Ol.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Fg=()=>Hg().__FIREBASE_DEFAULTS__,jg=()=>{if(typeof process>"u"||typeof ra>"u")return;const t=ra.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nl(t[1]);return e&&JSON.parse(e)},ji=()=>{try{return Lg()||Fg()||jg()||Bg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$g=t=>{var e,n;return(n=(e=ji())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ll=()=>{var t;return(t=ji())===null||t===void 0?void 0:t.config},Dl=t=>{var e;return(e=ji())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function Bi(t){return t.endsWith(".cloudworkstations.dev")}async function Vg(t){return(await fetch(t,{credentials:"include"})).ok}const kn={};function Kg(){const t={prod:[],emulator:[]};for(const e of Object.keys(kn))kn[e]?t.emulator.push(e):t.prod.push(e);return t}function qg(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let sa=!1;function Gg(t,e){if(typeof window>"u"||typeof document>"u"||!Bi(window.location.host)||kn[t]===e||kn[t]||sa)return;kn[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=Kg().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,y){d.setAttribute("width","24"),d.setAttribute("id",y),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function f(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{sa=!0,o()},d}function l(d,y){d.setAttribute("id",y),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function u(){const d=qg(r),y=n("text"),m=document.getElementById(y)||document.createElement("span"),g=n("learnmore"),E=document.getElementById(g)||document.createElement("a"),T=n("preprendIcon"),P=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const _=d.element;a(_),l(E,g);const b=f();c(P,T),_.append(P,m,E,b),document.body.appendChild(_)}i?(m.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
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
 */const tm="FirebaseError";class St extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tm,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?nm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new St(s,a,r)}}function nm(t,e){return t.replace(rm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rm=/\{\$([^}]+)}/g;function sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ia(i)&&ia(o)){if(!fn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ia(t){return t!==null&&typeof t=="object"}/**
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
 */function Gn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function In(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Tn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function im(t,e){const n=new om(t,e);return n.subscribe.bind(n)}class om{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");am(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Es),s.error===void 0&&(s.error=Es),s.complete===void 0&&(s.complete=Es);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function am(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Es(){}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const dm={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},hm=ee.INFO,pm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},gm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pm[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=hm,this._logHandler=gm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const mm=(t,e)=>e.some(n=>t instanceof n);let oa,aa;function _m(){return oa||(oa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ym(){return aa||(aa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ul=new WeakMap,ei=new WeakMap,Hl=new WeakMap,Is=new WeakMap,$i=new WeakMap;function bm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ul.set(n,t)}).catch(()=>{}),$i.set(e,t),e}function vm(t){if(ei.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ei.set(t,e)}let ti={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ei.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wm(t){ti=t(ti)}function Em(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ts(this),e,...n);return Hl.set(r,e.sort?e.sort():[e]),yt(r)}:ym().includes(t)?function(...e){return t.apply(Ts(this),e),yt(Ul.get(this))}:function(...e){return yt(t.apply(Ts(this),e))}}function Im(t){return typeof t=="function"?Em(t):(t instanceof IDBTransaction&&vm(t),mm(t,_m())?new Proxy(t,ti):t)}function yt(t){if(t instanceof IDBRequest)return bm(t);if(Is.has(t))return Is.get(t);const e=Im(t);return e!==t&&(Is.set(t,e),$i.set(e,t)),e}const Ts=t=>$i.get(t);function Tm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=yt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(yt(o.result),c.oldVersion,c.newVersion,yt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}const Sm=["get","getKey","getAll","getAllKeys","count"],Cm=["put","add","delete","clear"],Ss=new Map;function ca(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ss.get(e))return Ss.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Cm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sm.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Ss.set(e,i),i}wm(t=>({...t,get:(e,n,r)=>ca(e,n)||t.get(e,n,r),has:(e,n)=>!!ca(e,n)||t.has(e,n)}));/**
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
 */class Am{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Rm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ni="@firebase/app",la="0.13.0";/**
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
 */const st=new xl("@firebase/app"),Pm="@firebase/app-compat",km="@firebase/analytics-compat",Om="@firebase/analytics",Mm="@firebase/app-check-compat",Nm="@firebase/app-check",Lm="@firebase/auth",Dm="@firebase/auth-compat",xm="@firebase/database",Um="@firebase/data-connect",Hm="@firebase/database-compat",Fm="@firebase/functions",jm="@firebase/functions-compat",Bm="@firebase/installations",$m="@firebase/installations-compat",Wm="@firebase/messaging",Vm="@firebase/messaging-compat",Km="@firebase/performance",qm="@firebase/performance-compat",Gm="@firebase/remote-config",zm="@firebase/remote-config-compat",Jm="@firebase/storage",Ym="@firebase/storage-compat",Xm="@firebase/firestore",Qm="@firebase/ai",Zm="@firebase/firestore-compat",e_="firebase",t_="11.8.0";/**
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
 */const ri="[DEFAULT]",n_={[ni]:"fire-core",[Pm]:"fire-core-compat",[Om]:"fire-analytics",[km]:"fire-analytics-compat",[Nm]:"fire-app-check",[Mm]:"fire-app-check-compat",[Lm]:"fire-auth",[Dm]:"fire-auth-compat",[xm]:"fire-rtdb",[Um]:"fire-data-connect",[Hm]:"fire-rtdb-compat",[Fm]:"fire-fn",[jm]:"fire-fn-compat",[Bm]:"fire-iid",[$m]:"fire-iid-compat",[Wm]:"fire-fcm",[Vm]:"fire-fcm-compat",[Km]:"fire-perf",[qm]:"fire-perf-compat",[Gm]:"fire-rc",[zm]:"fire-rc-compat",[Jm]:"fire-gcs",[Ym]:"fire-gcs-compat",[Xm]:"fire-fst",[Zm]:"fire-fst-compat",[Qm]:"fire-vertex","fire-js":"fire-js",[e_]:"fire-js-all"};/**
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
 */const Nr=new Map,r_=new Map,si=new Map;function ua(t,e){try{t.container.addComponent(e)}catch(n){st.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(si.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;si.set(e,t);for(const n of Nr.values())ua(n,t);for(const n of r_.values())ua(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ve(t){return t==null?!1:t.settings!==void 0}/**
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
 */const s_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bt=new qn("app","Firebase",s_);/**
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
 */class i_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=t_;function jl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ri,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(n||(n=Ll()),!n)throw bt.create("no-options");const i=Nr.get(s);if(i){if(fn(n,i.options)&&fn(r,i.config))return i;throw bt.create("duplicate-app",{appName:s})}const o=new fm(s);for(const c of si.values())o.addComponent(c);const a=new i_(n,r,o);return Nr.set(s,a),a}function o_(t=ri){const e=Nr.get(t);if(!e&&t===ri&&Ll())return jl();if(!e)throw bt.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=n_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(a.join(" "));return}Fn(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const a_="firebase-heartbeat-database",c_=1,jn="firebase-heartbeat-store";let Cs=null;function Bl(){return Cs||(Cs=Tm(a_,c_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jn)}catch(n){console.warn(n)}}}}).catch(t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})})),Cs}async function l_(t){try{const n=(await Bl()).transaction(jn),r=await n.objectStore(jn).get($l(t));return await n.done,r}catch(e){if(e instanceof St)st.warn(e.message);else{const n=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(n.message)}}}async function fa(t,e){try{const r=(await Bl()).transaction(jn,"readwrite");await r.objectStore(jn).put(e,$l(t)),await r.done}catch(n){if(n instanceof St)st.warn(n.message);else{const r=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});st.warn(r.message)}}}function $l(t){return`${t.name}!${t.options.appId}`}/**
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
 */const u_=1024,f_=30;class d_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=da();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>f_){const o=g_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){st.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=da(),{heartbeatsToSend:r,unsentEntries:s}=h_(this._heartbeatsCache.heartbeats),i=Ml(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return st.warn(n),""}}}function da(){return new Date().toISOString().substring(0,10)}function h_(t,e=u_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ha(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ha(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class p_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zg()?em().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await l_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ha(t){return Ml(JSON.stringify({version:2,heartbeats:t})).length}function g_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function m_(t){Fn(new dn("platform-logger",e=>new Am(e),"PRIVATE")),Fn(new dn("heartbeat",e=>new d_(e),"PRIVATE")),rn(ni,la,t),rn(ni,la,"esm2017"),rn("fire-js","")}m_("");var __="firebase",y_="11.8.1";/**
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
 */rn(__,y_,"app");function Wi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b_=Wl,Vl=new qn("auth","Firebase",Wl());/**
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
 */const Lr=new xl("@firebase/auth");function v_(t,...e){Lr.logLevel<=ee.WARN&&Lr.warn(`Auth (${zn}): ${t}`,...e)}function gr(t,...e){Lr.logLevel<=ee.ERROR&&Lr.error(`Auth (${zn}): ${t}`,...e)}/**
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
 */function He(t,...e){throw Vi(t,...e)}function Ge(t,...e){return Vi(t,...e)}function Kl(t,e,n){const r=Object.assign(Object.assign({},b_()),{[e]:n});return new qn("auth","Firebase",r).create(e,{appName:t.name})}function vt(t){return Kl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vl.create(t,...e)}function j(t,e,...n){if(!t)throw Vi(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gr(e),new Error(e)}function it(t,e){t||et(e)}/**
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
 */function ii(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function w_(){return pa()==="http:"||pa()==="https:"}function pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=zg()||Xg()}get(){return E_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ki(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */const S_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C_=new Jn(3e4,6e4);function jt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ct(t,e,n,r,s={}){return Gl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Gn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:c},i);return Jg()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Bi(t.emulatorConfig.host)&&(f.credentials="include"),ql.fetch()(await zl(t,t.config.apiHost,n,a),f)})}async function Gl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},T_),e);try{const s=new R_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,f]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw cr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw cr(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Kl(t,l,f);He(t,l)}}catch(s){if(s instanceof St)throw s;He(t,"network-request-failed",{message:String(s)})}}async function Qr(t,e,n,r,s={}){const i=await Ct(t,e,n,r,s);return"mfaPendingCredential"in i&&He(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function zl(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ki(t.config,s):`${t.config.apiScheme}://${s}`;return S_.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function A_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),C_.get())})}}function cr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ge(t,e,r);return s.customData._tokenResponse=n,s}function ga(t){return t!==void 0&&t.enterprise!==void 0}class P_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return A_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function k_(t,e){return Ct(t,"GET","/v2/recaptchaConfig",jt(t,e))}/**
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
 */async function O_(t,e){return Ct(t,"POST","/v1/accounts:delete",e)}async function Dr(t,e){return Ct(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M_(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=qi(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(As(s.auth_time)),issuedAtTime:On(As(s.iat)),expirationTime:On(As(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function As(t){return Number(t)*1e3}function qi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nl(n);return s?JSON.parse(s):(gr("Failed to decode base64 JWT payload"),null)}catch(s){return gr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ma(t){const e=qi(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */class oi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bn(t,Dr(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Jl(i.providerUserInfo):[],a=x_(t.providerData,o),c=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?f:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new oi(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function D_(t){const e=Ft(t);await xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jl(t){return t.map(e=>{var{providerId:n}=e,r=Wi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ma(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=ma(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await U_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new sn;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function ct(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Le{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return M_(this,e)}reload(){return D_(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(vt(this.auth));const e=await this.getIdToken();return await Bn(this,O_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,f,l;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(f=n.createdAt)!==null&&f!==void 0?f:void 0,P=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:_,emailVerified:b,isAnonymous:w,providerData:N,stsTokenManager:F}=n;j(_&&F,e,"internal-error");const K=sn.fromJSON(this.name,F);j(typeof _=="string",e,"internal-error"),ct(u,e.name),ct(d,e.name),j(typeof b=="boolean",e,"internal-error"),j(typeof w=="boolean",e,"internal-error"),ct(y,e.name),ct(m,e.name),ct(g,e.name),ct(E,e.name),ct(T,e.name),ct(P,e.name);const $=new Le({uid:_,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:w,photoURL:m,phoneNumber:y,tenantId:g,stsTokenManager:K,createdAt:T,lastLoginAt:P});return N&&Array.isArray(N)&&($.providerData=N.map(L=>Object.assign({},L))),E&&($._redirectEventId=E),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new sn;s.updateFromServerResponse(n);const i=new Le({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new sn;a.updateFromIdToken(r);const c=new Le({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new oi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,f),c}}/**
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
 */const _a=new Map;function tt(t){it(t instanceof Function,"Expected a class definition");let e=_a.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_a.set(t,e),e)}/**
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
 */class Yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yl.type="NONE";const ya=Yl;/**
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
 */function mr(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mr(this.userKey,s.apiKey,i),this.fullPersistenceKey=mr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Dr(this.auth,{idToken:e}).catch(()=>{});return n?Le._fromGetAccountInfoResponse(this.auth,n,e):null}return Le._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new on(tt(ya),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||tt(ya);const o=mr(r,e.config.apiKey,e.name);let a=null;for(const f of n)try{const l=await f._get(o);if(l){let u;if(typeof l=="string"){const d=await Dr(e,{idToken:l}).catch(()=>{});if(!d)break;u=await Le._fromGetAccountInfoResponse(e,d,l)}else u=Le._fromJSON(e,l);f!==i&&(a=u),i=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new on(i,e,r))}}/**
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
 */function ba(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nu(e))return"Blackberry";if(ru(e))return"Webos";if(Ql(e))return"Safari";if((e.includes("chrome/")||Zl(e))&&!e.includes("edge/"))return"Chrome";if(tu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xl(t=we()){return/firefox\//i.test(t)}function Ql(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zl(t=we()){return/crios\//i.test(t)}function eu(t=we()){return/iemobile/i.test(t)}function tu(t=we()){return/android/i.test(t)}function nu(t=we()){return/blackberry/i.test(t)}function ru(t=we()){return/webos/i.test(t)}function Gi(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F_(t=we()){var e;return Gi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function j_(){return Qg()&&document.documentMode===10}function su(t=we()){return Gi(t)||tu(t)||ru(t)||nu(t)||/windows phone/i.test(t)||eu(t)}/**
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
 */function iu(t,e=[]){let n;switch(t){case"Browser":n=ba(we());break;case"Worker":n=`${ba(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${r}`}/**
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
 */class K_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new va(this),this.idTokenSubscription=new va(this),this.beforeStateQueue=new B_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dr(this,{idToken:e}),r=await Le._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(vt(this));const n=e?Ft(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $_(this),n=new V_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await H_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&v_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mn(t){return Ft(t)}class va{constructor(e){this.auth=e,this.observer=null,this.addObserver=im(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q_(t){Zr=t}function ou(t){return Zr.loadJS(t)}function G_(){return Zr.recaptchaEnterpriseScript}function z_(){return Zr.gapiScript}function J_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Y_{constructor(){this.enterprise=new X_}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class X_{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Q_="recaptcha-enterprise",au="NO_RECAPTCHA";class Z_{constructor(e){this.type=Q_,this.auth=mn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{k_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const f=new P_(c);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,o(f.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ga(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(f=>{o(f)}).catch(()=>{o(au)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y_().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ga(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=G_();c.length!==0&&(c+=a),ou(c).then(()=>{s(a,i,o)}).catch(f=>{o(f)})}}).catch(a=>{o(a)})})}}async function wa(t,e,n,r=!1,s=!1){const i=new Z_(t);let o;if(s)o=au;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,f=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:f,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ea(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await wa(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await wa(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function ey(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fn(i,e??{}))return s;He(s,"already-initialized")}return n.initialize({options:e})}function ty(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ny(t,e,n){const r=mn(t);j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cu(e),{host:o,port:a}=ry(e),c=a===null?"":`:${a}`,f={url:`${i}//${o}${c}/`},l=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(fn(f,r.config.emulator)&&fn(l,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,Bi(o)?(Vg(`${i}//${o}${c}`),Gg("Auth",!0)):sy()}function cu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ry(t){const e=cu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ia(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ia(o)}}}function Ia(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function iy(t,e){return Ct(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function oy(t,e){return Qr(t,"POST","/v1/accounts:signInWithPassword",jt(t,e))}/**
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
 */async function ay(t,e){return Qr(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}async function cy(t,e){return Qr(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}/**
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
 */class $n extends zi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $n(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $n(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ea(e,n,"signInWithPassword",oy);case"emailLink":return ay(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ea(e,r,"signUpPassword",iy);case"emailLink":return cy(e,{idToken:n,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function an(t,e){return Qr(t,"POST","/v1/accounts:signInWithIdp",jt(t,e))}/**
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
 */const ly="http://localhost";class Ut extends zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Wi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ut(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:ly,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gn(n)}return e}}/**
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
 */function uy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fy(t){const e=In(Tn(t)).link,n=e?In(Tn(e)).deep_link_id:null,r=In(Tn(t)).deep_link_id;return(r?In(Tn(r)).link:null)||r||n||e||t}class Ji{constructor(e){var n,r,s,i,o,a;const c=In(Tn(e)),f=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,u=uy((s=c.mode)!==null&&s!==void 0?s:null);j(f&&l&&u,"argument-error"),this.apiKey=f,this.operation=u,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fy(e);try{return new Ji(n)}catch{return null}}}/**
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
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,n){return $n._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ji.parseLink(n);return j(r,"argument-error"),$n._fromEmailAndCode(e,r.code,r.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ht extends Yn{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class pt extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ut._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class gt extends Yn{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class mt extends Yn{constructor(){super("twitter.com")}static credential(e,n){return Ut._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Le._fromIdTokenResponse(e,r,s),o=Ta(r);return new hn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ta(r);return new hn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ta(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ur extends St{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ur.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ur(e,n,r,s)}}function uu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ur._fromErrorAndOperation(t,i,e,r):i})}async function dy(t,e,n=!1){const r=await Bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hn._forOperation(t,"link",r)}/**
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
 */async function hy(t,e,n=!1){const{auth:r}=t;if(Ve(r.app))return Promise.reject(vt(r));const s="reauthenticate";try{const i=await Bn(t,uu(r,s,e,t),n);j(i.idToken,r,"internal-error");const o=qi(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),hn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&He(r,"user-mismatch"),i}}/**
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
 */async function fu(t,e,n=!1){if(Ve(t.app))return Promise.reject(vt(t));const r="signIn",s=await uu(t,r,e),i=await hn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function py(t,e){return fu(mn(t),e)}/**
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
 */async function gy(t){const e=mn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function my(t,e,n){return Ve(t.app)?Promise.reject(vt(t)):py(Ft(t),_n.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gy(t),r})}function _y(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function yy(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}const Hr="__sak";/**
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
 */class du{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */class es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new es(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async f=>f(n.origin,i)),c=await Ey(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}es.receivers=[];/**
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
 */function Yi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Iy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const f=Yi("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===f)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mu(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function Sy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ay(){return mu()?self:null}/**
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
 */const _u="firebaseLocalStorageDb",Ry=1,Fr="firebaseLocalStorage",yu="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ts(t,e){return t.transaction([Fr],e?"readwrite":"readonly").objectStore(Fr)}function Py(){const t=indexedDB.deleteDatabase(_u);return new Xn(t).toPromise()}function ai(){const t=indexedDB.open(_u,Ry);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fr,{keyPath:yu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fr)?e(r):(r.close(),await Py(),e(await ai()))})})}async function Sa(t,e,n){const r=ts(t,!0).put({[yu]:e,value:n});return new Xn(r).toPromise()}async function ky(t,e){const n=ts(t,!1).get(e),r=await new Xn(n).toPromise();return r===void 0?null:r.value}function Ca(t,e){const n=ts(t,!0).delete(e);return new Xn(n).toPromise()}const Oy=800,My=3;class bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ai(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>My)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=es._getInstance(Ay()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sy(),!this.activeServiceWorker)return;this.sender=new Iy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ai();return await Sa(e,Hr,"1"),await Ca(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ky(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ca(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ts(s,!1).getAll();return new Xn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bu.type="LOCAL";const Ny=bu;new Jn(3e4,6e4);/**
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
 */class Xi extends zi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Dy(t){return fu(t.auth,new Xi(t),t.bypassAuthState)}function xy(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),hy(n,new Xi(t),t.bypassAuthState)}async function Uy(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),dy(n,new Xi(t),t.bypassAuthState)}/**
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
 */class vu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dy;case"linkViaPopup":case"linkViaRedirect":return Uy;case"reauthViaPopup":case"reauthViaRedirect":return xy;default:He(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hy=new Jn(2e3,1e4);class zt extends vu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zt.currentPopupAction&&zt.currentPopupAction.cancel(),zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=Yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hy.get())};e()}}zt.currentPopupAction=null;/**
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
 */const Fy="pendingRedirect",_r=new Map;class jy extends vu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_r.get(this.auth._key());if(!e){try{const r=await By(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_r.set(this.auth._key(),e)}return this.bypassAuthState||_r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function By(t,e){const n=Vy(e),r=Wy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $y(t,e){_r.set(t._key(),e)}function Wy(t){return tt(t._redirectPersistence)}function Vy(t){return mr(Fy,t.config.apiKey,t.name)}async function Ky(t,e,n=!1){if(Ve(t.app))return Promise.reject(vt(t));const r=mn(t),s=Ly(r,e),o=await new jy(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Yy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xy=/^https?/;async function Qy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jy(t);for(const n of e)try{if(Zy(n))return}catch{}He(t,"unauthorized-domain")}function Zy(t){const e=ii(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xy.test(n))return!1;if(Yy.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eb=new Jn(3e4,6e4);function Ra(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tb(t){return new Promise((e,n)=>{var r,s,i;function o(){Ra(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ra(),n(Ge(t,"network-request-failed"))},timeout:eb.get()})}if(!((s=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const a=J_("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Ge(t,"network-request-failed"))},ou(`${z_()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yr=null,e})}let yr=null;function nb(t){return yr=yr||tb(t),yr}/**
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
 */const rb=new Jn(5e3,15e3),sb="__/auth/iframe",ib="emulator/auth/iframe",ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ab=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cb(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ki(e,ib):`https://${t.config.authDomain}/${sb}`,r={apiKey:e.apiKey,appName:t.name,v:zn},s=ab.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gn(r).slice(1)}`}async function lb(t){const e=await nb(t),n=ze().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:cb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ob,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(t,"network-request-failed"),a=ze().setTimeout(()=>{i(o)},rb.get());function c(){ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ub={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fb=500,db=600,hb="_blank",pb="http://localhost";class Pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gb(t,e,n,r=fb,s=db){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ub),{width:r.toString(),height:s.toString(),top:i,left:o}),f=we().toLowerCase();n&&(a=Zl(f)?hb:n),Xl(f)&&(e=e||pb,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[y,m])=>`${d}${y}=${m},`,"");if(F_(f)&&a!=="_self")return mb(e||"",a),new Pa(null);const u=window.open(e||"",a,l);j(u,t,"popup-blocked");try{u.focus()}catch{}return new Pa(u)}function mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _b="__/auth/handler",yb="emulator/auth/handler",bb=encodeURIComponent("fac");async function ka(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zn,eventId:s};if(e instanceof lu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries({}))o[l]=u}if(e instanceof Yn){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),f=c?`#${bb}=${encodeURIComponent(c)}`:"";return`${vb(t)}?${Gn(a).slice(1)}${f}`}function vb({config:t}){return t.emulator?Ki(t,yb):`https://${t.authDomain}/${_b}`}/**
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
 */const Rs="webStorageSupport";class wb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gu,this._completeRedirectFn=Ky,this._overrideRedirectResult=$y}async _openPopup(e,n,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ka(e,n,r,ii(),s);return gb(e,o,Yi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ka(e,n,r,ii(),s);return Ty(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lb(e),r=new Gy(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rs,{type:Rs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rs];o!==void 0&&n(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Qy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return su()||Ql()||Gi()}}const Eb=wb;var Oa="@firebase/auth",Ma="1.10.6";/**
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
 */function Tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sb(t){Fn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iu(t)},f=new K_(r,s,i,c);return ty(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new dn("auth-internal",e=>{const n=mn(e.getProvider("auth").getImmediate());return(r=>new Ib(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Oa,Ma,Tb(t)),rn(Oa,Ma,"esm2017")}/**
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
 */const Cb=5*60,Ab=Dl("authIdTokenMaxAge")||Cb;let Na=null;const Rb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ab)return;const s=n==null?void 0:n.token;Na!==s&&(Na=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pb(t=o_()){const e=Fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ey(t,{popupRedirectResolver:Eb,persistence:[Ny,wy,gu]}),r=Dl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Rb(i.toString());yy(n,o,()=>o(n.currentUser)),_y(n,a=>o(a))}}const s=$g("auth");return s&&ny(n,`http://${s}`),n}function kb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}q_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",kb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sb("Browser");async function Ob(){const e=await(await fetch("/api/config.json")).json(),n=jl(e);return Pb(n)}const Mb={class:"login-container"},Nb={key:0},Lb={class:"form-group"},Db={class:"form-group"},xb=Ei({__name:"Login",setup(t){const n=Li().query.request_id||"",r=qe(""),s=qe(""),i=qe(""),o=async()=>{try{const f=await(await my(await Ob(),r.value,s.value)).user.getIdToken(),l=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+f},body:JSON.stringify({requestId:n})});if(l.status==200){const u=await l.json();window.location.href=u.url}else{const u=await l.json();i.value=u.message||"unknown error"}}catch(a){i.value=a}};return(a,c)=>(ke(),Sr("div",Mb,[c[4]||(c[4]=$e("h1",null,"Login",-1)),ie(i)!=""?(ke(),Sr("div",Nb,Wa(ie(i)),1)):yd("",!0),$e("div",Lb,[c[2]||(c[2]=$e("label",{for:"email"},"Email:",-1)),ao($e("input",{type:"email",id:"email","onUpdate:modelValue":c[0]||(c[0]=f=>ce(r)?r.value=f:null),required:""},null,512),[[xo,ie(r)]])]),$e("div",Db,[c[3]||(c[3]=$e("label",{for:"password"},"Password:",-1)),ao($e("input",{type:"password",id:"password","onUpdate:modelValue":c[1]||(c[1]=f=>ce(s)?s.value=f:null),required:""},null,512),[[xo,ie(s)]])]),$e("button",{onClick:o},"Login")]))}}),Eu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ub=Eu(xb,[["__scopeId","data-v-751ed368"]]),Hb={};function Fb(t,e){const n=Ub;return ke(),Sr("div",null,[ae(n)])}const jb=Eu(Hb,[["render",Fb]]),Bb={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(u=>({text:u.replace("webpack:/","").replace(".vue",".js").trim(),internal:u.includes("node_modules")&&!u.includes(".cache")||u.includes("internal")||u.includes("new Promise")})).map(u=>`<span class="stack${u.internal?" internal":""}">${u.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,l=s?uo(()=>ea(()=>import("./D27sAlj8.js"),__vite__mapDeps([0,1,2]),import.meta.url)):uo(()=>ea(()=>import("./Ds32dyqv.js"),__vite__mapDeps([3,1,4]),import.meta.url));return(u,d)=>(ke(),Mt(ie(l),Uu(Jc({statusCode:ie(r),statusMessage:ie(i),description:ie(o),stack:ie(a)})),null,16))}},$b={key:0},La={__name:"nuxt-root",setup(t){const e=()=>null,n=me(),r=n.deferHydration();if(n.isHydrating){const f=n.hooks.hookOnce("app:error",r);xt().beforeEach(f)}const s=!1;Rc(El,Li()),n.hooks.callHookWith(f=>f.map(l=>l()),"vue:setup");const i=Di(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b|googlebot/i;wc((f,l,u)=>{if(n.hooks.callHook("vue:error",f,l,u).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",f),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,f),!1;if(Cp(f)&&(f.fatal||f.unhandled))return n.runWithContext(()=>Tp(f)),!1});const c=!1;return(f,l)=>(ke(),Mt(fd,{onResolve:ie(r)},{default:gc(()=>[ie(o)?(ke(),Sr("div",$b)):ie(i)?(ke(),Mt(ie(Bb),{key:1,error:ie(i)},null,8,["error"])):ie(c)?(ke(),Mt(ie(e),{key:2,context:ie(c)},null,8,["context"])):ie(s)?(ke(),Mt(xf(ie(s)),{key:3})):(ke(),Mt(ie(jb),{key:4}))]),_:1},8,["onResolve"]))}};let Da;{let t;Da=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?eh(La):Zd(La),s=cp({vueApp:r});async function i(c){var f;await s.callHook("app:error",c),(f=s.payload).error||(f.error=xi(c))}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await fp(s,Ng)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(ip),await s.hooks.callHook("app:mounted",r),await fc()}catch(c){i(c)}return r},t=Da().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{ae as A,gc as B,Yc as C,qb as D,dp as E,Si as F,tn as G,Cl as H,Eu as _,me as a,Fi as b,na as c,Ei as d,bc as e,Gb as f,Vb as g,Pd as h,Ip as i,el as j,gn as k,Yr as l,Hn as m,Ep as n,kf as o,Oi as p,Mi as q,qe as r,io as s,Kb as t,xt as u,Sr as v,Ks as w,ke as x,$e as y,Wa as z};
