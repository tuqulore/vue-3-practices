var Ty=Object.defineProperty,Ly=Object.defineProperties;var Ny=Object.getOwnPropertyDescriptors;var dn=Object.getOwnPropertySymbols;var La=Object.prototype.hasOwnProperty,Na=Object.prototype.propertyIsEnumerable;var Ta=(e,l,o)=>l in e?Ty(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,gs=(e,l)=>{for(var o in l||(l={}))La.call(l,o)&&Ta(e,o,l[o]);if(dn)for(var o of dn(l))Na.call(l,o)&&Ta(e,o,l[o]);return e},Qs=(e,l)=>Ly(e,Ny(l));var vt=(e,l)=>{var o={};for(var t in e)La.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&dn)for(var t of dn(e))l.indexOf(t)<0&&Na.call(e,t)&&(o[t]=e[t]);return o};const Ry=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};Ry();function Rr(e,l){const o=Object.create(null),t=e.split(",");for(let r=0;r<t.length;r++)o[t[r]]=!0;return l?r=>!!o[r.toLowerCase()]:r=>!!o[r]}const Iy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jy=Rr(Iy);function zp(e){return!!e||e===""}function oe(e){if(ns(e)){const l={};for(let o=0;o<e.length;o++){const t=e[o],r=Rs(t)?Hy(t):oe(t);if(r)for(const a in r)l[a]=r[a]}return l}else{if(Rs(e))return e;if(Hs(e))return e}}const Vy=/;(?![^(]*\))/g,zy=/:(.+)/;function Hy(e){const l={};return e.split(Vy).forEach(o=>{if(o){const t=o.split(zy);t.length>1&&(l[t[0].trim()]=t[1].trim())}}),l}function Ns(e){let l="";if(Rs(e))l=e;else if(ns(e))for(let o=0;o<e.length;o++){const t=Ns(e[o]);t&&(l+=t+" ")}else if(Hs(e))for(const o in e)e[o]&&(l+=o+" ");return l.trim()}function Z(e){if(!e)return null;let{class:l,style:o}=e;return l&&!Rs(l)&&(e.class=Ns(l)),o&&(e.style=oe(o)),e}const Us=e=>Rs(e)?e:e==null?"":ns(e)||Hs(e)&&(e.toString===qp||!ps(e.toString))?JSON.stringify(e,Hp,2):String(e),Hp=(e,l)=>l&&l.__v_isRef?Hp(e,l.value):Zl(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((o,[t,r])=>(o[`${t} =>`]=r,o),{})}:Up(l)?{[`Set(${l.size})`]:[...l.values()]}:Hs(l)&&!ns(l)&&!Kp(l)?String(l):l,Ss={},Yl=[],ke=()=>{},Uy=()=>!1,Wy=/^on[^a-z]/,Jn=e=>Wy.test(e),Ir=e=>e.startsWith("onUpdate:"),ne=Object.assign,jr=(e,l)=>{const o=e.indexOf(l);o>-1&&e.splice(o,1)},qy=Object.prototype.hasOwnProperty,hs=(e,l)=>qy.call(e,l),ns=Array.isArray,Zl=e=>Xn(e)==="[object Map]",Up=e=>Xn(e)==="[object Set]",ps=e=>typeof e=="function",Rs=e=>typeof e=="string",Vr=e=>typeof e=="symbol",Hs=e=>e!==null&&typeof e=="object",Wp=e=>Hs(e)&&ps(e.then)&&ps(e.catch),qp=Object.prototype.toString,Xn=e=>qp.call(e),Ky=e=>Xn(e).slice(8,-1),Kp=e=>Xn(e)==="[object Object]",zr=e=>Rs(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=Rr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gn=e=>{const l=Object.create(null);return o=>l[o]||(l[o]=e(o))},Yy=/-(\w)/g,Ve=Gn(e=>e.replace(Yy,(l,o)=>o?o.toUpperCase():"")),Zy=/\B([A-Z])/g,Ml=Gn(e=>e.replace(Zy,"-$1").toLowerCase()),Qn=Gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Dt=Gn(e=>e?`on${Qn(e)}`:""),Ho=(e,l)=>!Object.is(e,l),Jl=(e,l)=>{for(let o=0;o<e.length;o++)e[o](l)},Mn=(e,l,o)=>{Object.defineProperty(e,l,{configurable:!0,enumerable:!1,value:o})},Kt=e=>{const l=parseFloat(e);return isNaN(l)?e:l};let Ra;const Jy=()=>Ra||(Ra=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ye;class Yp{constructor(l=!1){this.active=!0,this.effects=[],this.cleanups=[],!l&&ye&&(this.parent=ye,this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}run(l){if(this.active){const o=ye;try{return ye=this,l()}finally{ye=o}}}on(){ye=this}off(){ye=this.parent}stop(l){if(this.active){let o,t;for(o=0,t=this.effects.length;o<t;o++)this.effects[o].stop();for(o=0,t=this.cleanups.length;o<t;o++)this.cleanups[o]();if(this.scopes)for(o=0,t=this.scopes.length;o<t;o++)this.scopes[o].stop(!0);if(this.parent&&!l){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Xy(e){return new Yp(e)}function Gy(e,l=ye){l&&l.active&&l.effects.push(e)}function Qy(){return ye}function su(e){ye&&ye.cleanups.push(e)}const Hr=e=>{const l=new Set(e);return l.w=0,l.n=0,l},Zp=e=>(e.w&yl)>0,Jp=e=>(e.n&yl)>0,eu=({deps:e})=>{if(e.length)for(let l=0;l<e.length;l++)e[l].w|=yl},lu=e=>{const{deps:l}=e;if(l.length){let o=0;for(let t=0;t<l.length;t++){const r=l[t];Zp(r)&&!Jp(r)?r.delete(e):l[o++]=r,r.w&=~yl,r.n&=~yl}l.length=o}},Yt=new WeakMap;let _o=0,yl=1;const Zt=30;let xe;const wl=Symbol(""),Jt=Symbol("");class Ur{constructor(l,o=null,t){this.fn=l,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,Gy(this,t)}run(){if(!this.active)return this.fn();let l=xe,o=tl;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=xe,xe=this,tl=!0,yl=1<<++_o,_o<=Zt?eu(this):Ia(this),this.fn()}finally{_o<=Zt&&lu(this),yl=1<<--_o,xe=this.parent,tl=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(Ia(this),this.onStop&&this.onStop(),this.active=!1)}}function Ia(e){const{deps:l}=e;if(l.length){for(let o=0;o<l.length;o++)l[o].delete(e);l.length=0}}let tl=!0;const Xp=[];function ao(){Xp.push(tl),tl=!1}function co(){const e=Xp.pop();tl=e===void 0?!0:e}function he(e,l,o){if(tl&&xe){let t=Yt.get(e);t||Yt.set(e,t=new Map);let r=t.get(o);r||t.set(o,r=Hr()),Gp(r)}}function Gp(e,l){let o=!1;_o<=Zt?Jp(e)||(e.n|=yl,o=!Zp(e)):o=!e.has(xe),o&&(e.add(xe),xe.deps.push(e))}function Ye(e,l,o,t,r,a){const c=Yt.get(e);if(!c)return;let p=[];if(l==="clear")p=[...c.values()];else if(o==="length"&&ns(e))c.forEach((i,y)=>{(y==="length"||y>=t)&&p.push(i)});else switch(o!==void 0&&p.push(c.get(o)),l){case"add":ns(e)?zr(o)&&p.push(c.get("length")):(p.push(c.get(wl)),Zl(e)&&p.push(c.get(Jt)));break;case"delete":ns(e)||(p.push(c.get(wl)),Zl(e)&&p.push(c.get(Jt)));break;case"set":Zl(e)&&p.push(c.get(wl));break}if(p.length===1)p[0]&&Xt(p[0]);else{const i=[];for(const y of p)y&&i.push(...y);Xt(Hr(i))}}function Xt(e,l){const o=ns(e)?e:[...e];for(const t of o)t.computed&&ja(t);for(const t of o)t.computed||ja(t)}function ja(e,l){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ou=Rr("__proto__,__v_isRef,__isVue"),Qp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vr)),nu=Wr(),tu=Wr(!1,!0),ru=Wr(!0),Va=au();function au(){const e={};return["includes","indexOf","lastIndexOf"].forEach(l=>{e[l]=function(...o){const t=Es(this);for(let a=0,c=this.length;a<c;a++)he(t,"get",a+"");const r=t[l](...o);return r===-1||r===!1?t[l](...o.map(Es)):r}}),["push","pop","shift","unshift","splice"].forEach(l=>{e[l]=function(...o){ao();const t=Es(this)[l].apply(this,o);return co(),t}}),e}function Wr(e=!1,l=!1){return function(t,r,a){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return l;if(r==="__v_raw"&&a===(e?l?Eu:ni:l?oi:li).get(t))return t;const c=ns(t);if(!e&&c&&hs(Va,r))return Reflect.get(Va,r,a);const p=Reflect.get(t,r,a);return(Vr(r)?Qp.has(r):ou(r))||(e||he(t,"get",r),l)?p:Fs(p)?c&&zr(r)?p:p.value:Hs(p)?e?ql(p):Ls(p):p}}const cu=si(),pu=si(!0);function si(e=!1){return function(o,t,r,a){let c=o[t];if(Uo(c)&&Fs(c)&&!Fs(r))return!1;if(!e&&!Uo(r)&&(Gt(r)||(r=Es(r),c=Es(c)),!ns(o)&&Fs(c)&&!Fs(r)))return c.value=r,!0;const p=ns(o)&&zr(t)?Number(t)<o.length:hs(o,t),i=Reflect.set(o,t,r,a);return o===Es(a)&&(p?Ho(r,c)&&Ye(o,"set",t,r):Ye(o,"add",t,r)),i}}function iu(e,l){const o=hs(e,l);e[l];const t=Reflect.deleteProperty(e,l);return t&&o&&Ye(e,"delete",l,void 0),t}function yu(e,l){const o=Reflect.has(e,l);return(!Vr(l)||!Qp.has(l))&&he(e,"has",l),o}function uu(e){return he(e,"iterate",ns(e)?"length":wl),Reflect.ownKeys(e)}const ei={get:nu,set:cu,deleteProperty:iu,has:yu,ownKeys:uu},du={get:ru,set(e,l){return!0},deleteProperty(e,l){return!0}},fu=ne({},ei,{get:tu,set:pu}),qr=e=>e,st=e=>Reflect.getPrototypeOf(e);function fn(e,l,o=!1,t=!1){e=e.__v_raw;const r=Es(e),a=Es(l);o||(l!==a&&he(r,"get",l),he(r,"get",a));const{has:c}=st(r),p=t?qr:o?Zr:Wo;if(c.call(r,l))return p(e.get(l));if(c.call(r,a))return p(e.get(a));e!==r&&e.get(l)}function mn(e,l=!1){const o=this.__v_raw,t=Es(o),r=Es(e);return l||(e!==r&&he(t,"has",e),he(t,"has",r)),e===r?o.has(e):o.has(e)||o.has(r)}function Bn(e,l=!1){return e=e.__v_raw,!l&&he(Es(e),"iterate",wl),Reflect.get(e,"size",e)}function za(e){e=Es(e);const l=Es(this);return st(l).has.call(l,e)||(l.add(e),Ye(l,"add",e,e)),this}function Ha(e,l){l=Es(l);const o=Es(this),{has:t,get:r}=st(o);let a=t.call(o,e);a||(e=Es(e),a=t.call(o,e));const c=r.call(o,e);return o.set(e,l),a?Ho(l,c)&&Ye(o,"set",e,l):Ye(o,"add",e,l),this}function Ua(e){const l=Es(this),{has:o,get:t}=st(l);let r=o.call(l,e);r||(e=Es(e),r=o.call(l,e)),t&&t.call(l,e);const a=l.delete(e);return r&&Ye(l,"delete",e,void 0),a}function Wa(){const e=Es(this),l=e.size!==0,o=e.clear();return l&&Ye(e,"clear",void 0,void 0),o}function hn(e,l){return function(t,r){const a=this,c=a.__v_raw,p=Es(c),i=l?qr:e?Zr:Wo;return!e&&he(p,"iterate",wl),c.forEach((y,u)=>t.call(r,i(y),i(u),a))}}function An(e,l,o){return function(...t){const r=this.__v_raw,a=Es(r),c=Zl(a),p=e==="entries"||e===Symbol.iterator&&c,i=e==="keys"&&c,y=r[e](...t),u=o?qr:l?Zr:Wo;return!l&&he(a,"iterate",i?Jt:wl),{next(){const{value:f,done:d}=y.next();return d?{value:f,done:d}:{value:p?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...l){return e==="delete"?!1:this}}function mu(){const e={get(a){return fn(this,a)},get size(){return Bn(this)},has:mn,add:za,set:Ha,delete:Ua,clear:Wa,forEach:hn(!1,!1)},l={get(a){return fn(this,a,!1,!0)},get size(){return Bn(this)},has:mn,add:za,set:Ha,delete:Ua,clear:Wa,forEach:hn(!1,!0)},o={get(a){return fn(this,a,!0)},get size(){return Bn(this,!0)},has(a){return mn.call(this,a,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:hn(!0,!1)},t={get(a){return fn(this,a,!0,!0)},get size(){return Bn(this,!0)},has(a){return mn.call(this,a,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=An(a,!1,!1),o[a]=An(a,!0,!1),l[a]=An(a,!1,!0),t[a]=An(a,!0,!0)}),[e,o,l,t]}const[Bu,hu,Au,vu]=mu();function Kr(e,l){const o=l?e?vu:Au:e?hu:Bu;return(t,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?t:Reflect.get(hs(o,r)&&r in t?o:t,r,a)}const Du={get:Kr(!1,!1)},gu={get:Kr(!1,!0)},Cu={get:Kr(!0,!1)},li=new WeakMap,oi=new WeakMap,ni=new WeakMap,Eu=new WeakMap;function _u(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fu(e){return e.__v_skip||!Object.isExtensible(e)?0:_u(Ky(e))}function Ls(e){return Uo(e)?e:Yr(e,!1,ei,Du,li)}function bu(e){return Yr(e,!1,fu,gu,oi)}function ql(e){return Yr(e,!0,du,Cu,ni)}function Yr(e,l,o,t,r){if(!Hs(e)||e.__v_raw&&!(l&&e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const c=Fu(e);if(c===0)return e;const p=new Proxy(e,c===2?t:o);return r.set(e,p),p}function Xl(e){return Uo(e)?Xl(e.__v_raw):!!(e&&e.__v_isReactive)}function Uo(e){return!!(e&&e.__v_isReadonly)}function Gt(e){return!!(e&&e.__v_isShallow)}function ti(e){return Xl(e)||Uo(e)}function Es(e){const l=e&&e.__v_raw;return l?Es(l):e}function et(e){return Mn(e,"__v_skip",!0),e}const Wo=e=>Hs(e)?Ls(e):e,Zr=e=>Hs(e)?ql(e):e;function Jr(e){tl&&xe&&(e=Es(e),Gp(e.dep||(e.dep=Hr())))}function Xr(e,l){e=Es(e),e.dep&&Xt(e.dep)}function Fs(e){return!!(e&&e.__v_isRef===!0)}function H(e){return ri(e,!1)}function ze(e){return ri(e,!0)}function ri(e,l){return Fs(e)?e:new xu(e,l)}class xu{constructor(l,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?l:Es(l),this._value=o?l:Wo(l)}get value(){return Jr(this),this._value}set value(l){l=this.__v_isShallow?l:Es(l),Ho(l,this._rawValue)&&(this._rawValue=l,this._value=this.__v_isShallow?l:Wo(l),Xr(this))}}function D(e){return Fs(e)?e.value:e}const wu={get:(e,l,o)=>D(Reflect.get(e,l,o)),set:(e,l,o,t)=>{const r=e[l];return Fs(r)&&!Fs(o)?(r.value=o,!0):Reflect.set(e,l,o,t)}};function ai(e){return Xl(e)?e:new Proxy(e,wu)}class ku{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:t}=l(()=>Jr(this),()=>Xr(this));this._get=o,this._set=t}get value(){return this._get()}set value(l){this._set(l)}}function $u(e){return new ku(e)}function Su(e){const l=ns(e)?new Array(e.length):{};for(const o in e)l[o]=Mu(e,o);return l}class Ou{constructor(l,o,t){this._object=l,this._key=o,this._defaultValue=t,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function Mu(e,l,o){const t=e[l];return Fs(t)?t:new Ou(e,l,o)}class Pu{constructor(l,o,t,r){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ur(l,()=>{this._dirty||(this._dirty=!0,Xr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=t}get value(){const l=Es(this);return Jr(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}function Tu(e,l,o=!1){let t,r;const a=ps(e);return a?(t=e,r=ke):(t=e.get,r=e.set),new Pu(t,r,a||!r,o)}function rl(e,l,o,t){let r;try{r=t?e(...t):e()}catch(a){lt(a,l,o)}return r}function $e(e,l,o,t){if(ps(e)){const a=rl(e,l,o,t);return a&&Wp(a)&&a.catch(c=>{lt(c,l,o)}),a}const r=[];for(let a=0;a<e.length;a++)r.push($e(e[a],l,o,t));return r}function lt(e,l,o,t=!0){const r=l?l.vnode:null;if(l){let a=l.parent;const c=l.proxy,p=o;for(;a;){const y=a.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](e,c,p)===!1)return}a=a.parent}const i=l.appContext.config.errorHandler;if(i){rl(i,null,10,[e,c,p]);return}}Lu(e,o,r,t)}function Lu(e,l,o,t=!0){console.error(e)}let Pn=!1,Qt=!1;const fe=[];let qe=0;const wo=[];let Fo=null,zl=0;const ko=[];let el=null,Hl=0;const ci=Promise.resolve();let Gr=null,sr=null;function Ks(e){const l=Gr||ci;return e?l.then(this?e.bind(this):e):l}function Nu(e){let l=qe+1,o=fe.length;for(;l<o;){const t=l+o>>>1;qo(fe[t])<e?l=t+1:o=t}return l}function pi(e){(!fe.length||!fe.includes(e,Pn&&e.allowRecurse?qe+1:qe))&&e!==sr&&(e.id==null?fe.push(e):fe.splice(Nu(e.id),0,e),ii())}function ii(){!Pn&&!Qt&&(Qt=!0,Gr=ci.then(di))}function Ru(e){const l=fe.indexOf(e);l>qe&&fe.splice(l,1)}function yi(e,l,o,t){ns(e)?o.push(...e):(!l||!l.includes(e,e.allowRecurse?t+1:t))&&o.push(e),ii()}function Iu(e){yi(e,Fo,wo,zl)}function ju(e){yi(e,el,ko,Hl)}function ot(e,l=null){if(wo.length){for(sr=l,Fo=[...new Set(wo)],wo.length=0,zl=0;zl<Fo.length;zl++)Fo[zl]();Fo=null,zl=0,sr=null,ot(e,l)}}function ui(e){if(ot(),ko.length){const l=[...new Set(ko)];if(ko.length=0,el){el.push(...l);return}for(el=l,el.sort((o,t)=>qo(o)-qo(t)),Hl=0;Hl<el.length;Hl++)el[Hl]();el=null,Hl=0}}const qo=e=>e.id==null?1/0:e.id;function di(e){Qt=!1,Pn=!0,ot(e),fe.sort((o,t)=>qo(o)-qo(t));const l=ke;try{for(qe=0;qe<fe.length;qe++){const o=fe[qe];o&&o.active!==!1&&rl(o,null,14)}}finally{qe=0,fe.length=0,ui(),Pn=!1,Gr=null,(fe.length||wo.length||ko.length)&&di(e)}}function Vu(e,l,...o){if(e.isUnmounted)return;const t=e.vnode.props||Ss;let r=o;const a=l.startsWith("update:"),c=a&&l.slice(7);if(c&&c in t){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:f,trim:d}=t[u]||Ss;d&&(r=o.map(m=>m.trim())),f&&(r=o.map(Kt))}let p,i=t[p=Dt(l)]||t[p=Dt(Ve(l))];!i&&a&&(i=t[p=Dt(Ml(l))]),i&&$e(i,e,6,r);const y=t[p+"Once"];if(y){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,$e(y,e,6,r)}}function fi(e,l,o=!1){const t=l.emitsCache,r=t.get(e);if(r!==void 0)return r;const a=e.emits;let c={},p=!1;if(!ps(e)){const i=y=>{const u=fi(y,l,!0);u&&(p=!0,ne(c,u))};!o&&l.mixins.length&&l.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!a&&!p?(t.set(e,null),null):(ns(a)?a.forEach(i=>c[i]=null):ne(c,a),t.set(e,c),c)}function nt(e,l){return!e||!Jn(l)?!1:(l=l.slice(2).replace(/Once$/,""),hs(e,l[0].toLowerCase()+l.slice(1))||hs(e,Ml(l))||hs(e,l))}let Zs=null,tt=null;function Tn(e){const l=Zs;return Zs=e,tt=e&&e.type.__scopeId||null,l}function sF(e){tt=e}function eF(){tt=null}function z(e,l=Zs,o){if(!l||e._n)return e;const t=(...r)=>{t._d&&lc(-1);const a=Tn(l),c=e(...r);return Tn(a),t._d&&lc(1),c};return t._n=!0,t._c=!0,t._d=!0,t}function gt(e){const{type:l,vnode:o,proxy:t,withProxy:r,props:a,propsOptions:[c],slots:p,attrs:i,emit:y,render:u,renderCache:f,data:d,setupState:m,ctx:h,inheritAttrs:C}=e;let g,b;const _=Tn(e);try{if(o.shapeFlag&4){const x=r||t;g=Ne(u.call(x,x,f,a,m,d,h)),b=i}else{const x=l;g=Ne(x.length>1?x(a,{attrs:i,slots:p,emit:y}):x(a,null)),b=l.props?i:zu(i)}}catch(x){So.length=0,lt(x,e,1),g=q(ul)}let F=g;if(b&&C!==!1){const x=Object.keys(b),{shapeFlag:j}=F;x.length&&j&7&&(c&&x.some(Ir)&&(b=Hu(b,c)),F=Ol(F,b))}return o.dirs&&(F=Ol(F),F.dirs=F.dirs?F.dirs.concat(o.dirs):o.dirs),o.transition&&(F.transition=o.transition),g=F,Tn(_),g}const zu=e=>{let l;for(const o in e)(o==="class"||o==="style"||Jn(o))&&((l||(l={}))[o]=e[o]);return l},Hu=(e,l)=>{const o={};for(const t in e)(!Ir(t)||!(t.slice(9)in l))&&(o[t]=e[t]);return o};function Uu(e,l,o){const{props:t,children:r,component:a}=e,{props:c,children:p,patchFlag:i}=l,y=a.emitsOptions;if(l.dirs||l.transition)return!0;if(o&&i>=0){if(i&1024)return!0;if(i&16)return t?qa(t,c,y):!!c;if(i&8){const u=l.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(c[d]!==t[d]&&!nt(y,d))return!0}}}else return(r||p)&&(!p||!p.$stable)?!0:t===c?!1:t?c?qa(t,c,y):!0:!!c;return!1}function qa(e,l,o){const t=Object.keys(l);if(t.length!==Object.keys(e).length)return!0;for(let r=0;r<t.length;r++){const a=t[r];if(l[a]!==e[a]&&!nt(o,a))return!0}return!1}function Wu({vnode:e,parent:l},o){for(;l&&l.subTree===e;)(e=l.vnode).el=o,l=l.parent}const mi=e=>e.__isSuspense;function qu(e,l){l&&l.pendingBranch?ns(e)?l.effects.push(...e):l.effects.push(e):ju(e)}function de(e,l){if(Ws){let o=Ws.provides;const t=Ws.parent&&Ws.parent.provides;t===o&&(o=Ws.provides=Object.create(t)),o[e]=l}}function $(e,l,o=!1){const t=Ws||Zs;if(t){const r=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return o&&ps(l)?l.call(t.proxy):l}}function tn(e,l){return Qr(e,null,l)}const Ka={};function ys(e,l,o){return Qr(e,l,o)}function Qr(e,l,{immediate:o,deep:t,flush:r,onTrack:a,onTrigger:c}=Ss){const p=Ws;let i,y=!1,u=!1;if(Fs(e)?(i=()=>e.value,y=Gt(e)):Xl(e)?(i=()=>e,t=!0):ns(e)?(u=!0,y=e.some(b=>Xl(b)||Gt(b)),i=()=>e.map(b=>{if(Fs(b))return b.value;if(Xl(b))return _l(b);if(ps(b))return rl(b,p,2)})):ps(e)?l?i=()=>rl(e,p,2):i=()=>{if(!(p&&p.isUnmounted))return f&&f(),$e(e,p,3,[d])}:i=ke,l&&t){const b=i;i=()=>_l(b())}let f,d=b=>{f=g.onStop=()=>{rl(b,p,4)}};if(Yo)return d=ke,l?o&&$e(l,p,3,[i(),u?[]:void 0,d]):i(),ke;let m=u?[]:Ka;const h=()=>{if(!!g.active)if(l){const b=g.run();(t||y||(u?b.some((_,F)=>Ho(_,m[F])):Ho(b,m)))&&(f&&f(),$e(l,p,3,[b,m===Ka?void 0:m,d]),m=b)}else g.run()};h.allowRecurse=!!l;let C;r==="sync"?C=h:r==="post"?C=()=>qs(h,p&&p.suspense):C=()=>Iu(h);const g=new Ur(i,C);return l?o?h():m=g.run():r==="post"?qs(g.run.bind(g),p&&p.suspense):g.run(),()=>{g.stop(),p&&p.scope&&jr(p.scope.effects,g)}}function Ku(e,l,o){const t=this.proxy,r=Rs(e)?e.includes(".")?Bi(t,e):()=>t[e]:e.bind(t,t);let a;ps(l)?a=l:(a=l.handler,o=l);const c=Ws;oo(this);const p=Qr(r,a.bind(t),o);return c?oo(c):kl(),p}function Bi(e,l){const o=l.split(".");return()=>{let t=e;for(let r=0;r<o.length&&t;r++)t=t[o[r]];return t}}function _l(e,l){if(!Hs(e)||e.__v_skip||(l=l||new Set,l.has(e)))return e;if(l.add(e),Fs(e))_l(e.value,l);else if(ns(e))for(let o=0;o<e.length;o++)_l(e[o],l);else if(Up(e)||Zl(e))e.forEach(o=>{_l(o,l)});else if(Kp(e))for(const o in e)_l(e[o],l);return e}function hi(e,l){e.shapeFlag&6&&e.component?hi(e.component.subTree,l):e.shapeFlag&128?(e.ssContent.transition=l.clone(e.ssContent),e.ssFallback.transition=l.clone(e.ssFallback)):e.transition=l}function bs(e){return ps(e)?{setup:e,name:e.name}:e}const Gl=e=>!!e.type.__asyncLoader,Ai=e=>e.type.__isKeepAlive,Yu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:l}){const o=Pl(),t=o.ctx;if(!t.renderer)return()=>{const _=l.default&&l.default();return _&&_.length===1?_[0]:_};const r=new Map,a=new Set;let c=null;const p=o.suspense,{renderer:{p:i,m:y,um:u,o:{createElement:f}}}=t,d=f("div");t.activate=(_,F,x,j,T)=>{const K=_.component;y(_,F,x,0,p),i(K.vnode,_,F,x,K,p,j,_.slotScopeIds,T),qs(()=>{K.isDeactivated=!1,K.a&&Jl(K.a);const as=_.props&&_.props.onVnodeMounted;as&&ve(as,K.parent,_)},p)},t.deactivate=_=>{const F=_.component;y(_,d,null,1,p),qs(()=>{F.da&&Jl(F.da);const x=_.props&&_.props.onVnodeUnmounted;x&&ve(x,F.parent,_),F.isDeactivated=!0},p)};function m(_){Ct(_),u(_,o,p,!0)}function h(_){r.forEach((F,x)=>{const j=ar(F.type);j&&(!_||!_(j))&&C(x)})}function C(_){const F=r.get(_);!c||F.type!==c.type?m(F):c&&Ct(c),r.delete(_),a.delete(_)}ys(()=>[e.include,e.exclude],([_,F])=>{_&&h(x=>bo(_,x)),F&&h(x=>!bo(F,x))},{flush:"post",deep:!0});let g=null;const b=()=>{g!=null&&r.set(g,Et(o.subTree))};return po(b),Ci(b),at(()=>{r.forEach(_=>{const{subTree:F,suspense:x}=o,j=Et(F);if(_.type===j.type){Ct(j);const T=j.component.da;T&&qs(T,x);return}m(_)})}),()=>{if(g=null,!l.default)return null;const _=l.default(),F=_[0];if(_.length>1)return c=null,_;if(!lo(F)||!(F.shapeFlag&4)&&!(F.shapeFlag&128))return c=null,F;let x=Et(F);const j=x.type,T=ar(Gl(x)?x.type.__asyncResolved||{}:j),{include:K,exclude:as,max:us}=e;if(K&&(!T||!bo(K,T))||as&&T&&bo(as,T))return c=x,F;const ms=x.key==null?j:x.key,As=r.get(ms);return x.el&&(x=Ol(x),F.shapeFlag&128&&(F.ssContent=x)),g=ms,As?(x.el=As.el,x.component=As.component,x.transition&&hi(x,x.transition),x.shapeFlag|=512,a.delete(ms),a.add(ms)):(a.add(ms),us&&a.size>parseInt(us,10)&&C(a.values().next().value)),x.shapeFlag|=256,c=x,mi(F.type)?F:x}}},vi=Yu;function bo(e,l){return ns(e)?e.some(o=>bo(o,l)):Rs(e)?e.split(",").includes(l):e.test?e.test(l):!1}function Zu(e,l){Di(e,"a",l)}function Ju(e,l){Di(e,"da",l)}function Di(e,l,o=Ws){const t=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(rt(l,t,o),o){let r=o.parent;for(;r&&r.parent;)Ai(r.parent.vnode)&&Xu(t,l,o,r),r=r.parent}}function Xu(e,l,o,t){const r=rt(l,e,t,!0);ct(()=>{jr(t[l],r)},o)}function Ct(e){let l=e.shapeFlag;l&256&&(l-=256),l&512&&(l-=512),e.shapeFlag=l}function Et(e){return e.shapeFlag&128?e.ssContent:e}function rt(e,l,o=Ws,t=!1){if(o){const r=o[e]||(o[e]=[]),a=l.__weh||(l.__weh=(...c)=>{if(o.isUnmounted)return;ao(),oo(o);const p=$e(l,o,e,c);return kl(),co(),p});return t?r.unshift(a):r.push(a),a}}const Je=e=>(l,o=Ws)=>(!Yo||e==="sp")&&rt(e,l,o),gi=Je("bm"),po=Je("m"),Gu=Je("bu"),Ci=Je("u"),at=Je("bum"),ct=Je("um"),Qu=Je("sp"),s5=Je("rtg"),e5=Je("rtc");function l5(e,l=Ws){rt("ec",e,l)}function He(e,l){const o=Zs;if(o===null)return e;const t=it(o)||o.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<l.length;a++){let[c,p,i,y=Ss]=l[a];ps(c)&&(c={mounted:c,updated:c}),c.deep&&_l(p),r.push({dir:c,instance:t,value:p,oldValue:void 0,arg:i,modifiers:y})}return e}function ml(e,l,o,t){const r=e.dirs,a=l&&l.dirs;for(let c=0;c<r.length;c++){const p=r[c];a&&(p.oldValue=a[c].value);let i=p.dir[t];i&&(ao(),$e(i,o,8,[e.el,p,e,l]),co())}}const Ei="components",o5="directives";function Ln(e,l){return _i(Ei,e,!0,l)||e}const n5=Symbol();function sa(e){return _i(o5,e)}function _i(e,l,o=!0,t=!1){const r=Zs||Ws;if(r){const a=r.type;if(e===Ei){const p=ar(a,!1);if(p&&(p===l||p===Ve(l)||p===Qn(Ve(l))))return a}const c=Ya(r[e]||a[e],l)||Ya(r.appContext[e],l);return!c&&t?a:c}}function Ya(e,l){return e&&(e[l]||e[Ve(l)]||e[Qn(Ve(l))])}function rn(e,l,o,t){let r;const a=o&&o[t];if(ns(e)||Rs(e)){r=new Array(e.length);for(let c=0,p=e.length;c<p;c++)r[c]=l(e[c],c,void 0,a&&a[c])}else if(typeof e=="number"){r=new Array(e);for(let c=0;c<e;c++)r[c]=l(c+1,c,void 0,a&&a[c])}else if(Hs(e))if(e[Symbol.iterator])r=Array.from(e,(c,p)=>l(c,p,void 0,a&&a[p]));else{const c=Object.keys(e);r=new Array(c.length);for(let p=0,i=c.length;p<i;p++){const y=c[p];r[p]=l(e[y],y,p,a&&a[p])}}else r=[];return o&&(o[t]=r),r}function Ze(e,l,o={},t,r){if(Zs.isCE||Zs.parent&&Gl(Zs.parent)&&Zs.parent.isCE)return q("slot",l==="default"?null:{name:l},t&&t());let a=e[l];a&&a._c&&(a._d=!1),v();const c=a&&Fi(a(o)),p=L(Cs,{key:o.key||`_${l}`},c||(t?t():[]),c&&e._===1?64:-2);return!r&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),a&&a._c&&(a._d=!0),p}function Fi(e){return e.some(l=>lo(l)?!(l.type===ul||l.type===Cs&&!Fi(l.children)):!0)?e:null}const er=e=>e?Li(e)?it(e)||e.proxy:er(e.parent):null,Nn=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>er(e.parent),$root:e=>er(e.root),$emit:e=>e.emit,$options:e=>xi(e),$forceUpdate:e=>e.f||(e.f=()=>pi(e.update)),$nextTick:e=>e.n||(e.n=Ks.bind(e.proxy)),$watch:e=>Ku.bind(e)}),t5={get({_:e},l){const{ctx:o,setupState:t,data:r,props:a,accessCache:c,type:p,appContext:i}=e;let y;if(l[0]!=="$"){const m=c[l];if(m!==void 0)switch(m){case 1:return t[l];case 2:return r[l];case 4:return o[l];case 3:return a[l]}else{if(t!==Ss&&hs(t,l))return c[l]=1,t[l];if(r!==Ss&&hs(r,l))return c[l]=2,r[l];if((y=e.propsOptions[0])&&hs(y,l))return c[l]=3,a[l];if(o!==Ss&&hs(o,l))return c[l]=4,o[l];lr&&(c[l]=0)}}const u=Nn[l];let f,d;if(u)return l==="$attrs"&&he(e,"get",l),u(e);if((f=p.__cssModules)&&(f=f[l]))return f;if(o!==Ss&&hs(o,l))return c[l]=4,o[l];if(d=i.config.globalProperties,hs(d,l))return d[l]},set({_:e},l,o){const{data:t,setupState:r,ctx:a}=e;return r!==Ss&&hs(r,l)?(r[l]=o,!0):t!==Ss&&hs(t,l)?(t[l]=o,!0):hs(e.props,l)||l[0]==="$"&&l.slice(1)in e?!1:(a[l]=o,!0)},has({_:{data:e,setupState:l,accessCache:o,ctx:t,appContext:r,propsOptions:a}},c){let p;return!!o[c]||e!==Ss&&hs(e,c)||l!==Ss&&hs(l,c)||(p=a[0])&&hs(p,c)||hs(t,c)||hs(Nn,c)||hs(r.config.globalProperties,c)},defineProperty(e,l,o){return o.get!=null?e._.accessCache[l]=0:hs(o,"value")&&this.set(e,l,o.value,null),Reflect.defineProperty(e,l,o)}};let lr=!0;function r5(e){const l=xi(e),o=e.proxy,t=e.ctx;lr=!1,l.beforeCreate&&Za(l.beforeCreate,e,"bc");const{data:r,computed:a,methods:c,watch:p,provide:i,inject:y,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:h,activated:C,deactivated:g,beforeDestroy:b,beforeUnmount:_,destroyed:F,unmounted:x,render:j,renderTracked:T,renderTriggered:K,errorCaptured:as,serverPrefetch:us,expose:ms,inheritAttrs:As,components:Ts,directives:Is,filters:Ys}=l;if(y&&a5(y,t,null,e.appContext.config.unwrapInjectedRef),c)for(const ts in c){const ls=c[ts];ps(ls)&&(t[ts]=ls.bind(o))}if(r){const ts=r.call(o,o);Hs(ts)&&(e.data=Ls(ts))}if(lr=!0,a)for(const ts in a){const ls=a[ts],Bs=ps(ls)?ls.bind(o,o):ps(ls.get)?ls.get.bind(o,o):ke,Te=!ps(ls)&&ps(ls.set)?ls.set.bind(o):ke,Gs=w({get:Bs,set:Te});Object.defineProperty(t,ts,{enumerable:!0,configurable:!0,get:()=>Gs.value,set:Ae=>Gs.value=Ae})}if(p)for(const ts in p)bi(p[ts],t,o,ts);if(i){const ts=ps(i)?i.call(o):i;Reflect.ownKeys(ts).forEach(ls=>{de(ls,ts[ls])})}u&&Za(u,e,"c");function os(ts,ls){ns(ls)?ls.forEach(Bs=>ts(Bs.bind(o))):ls&&ts(ls.bind(o))}if(os(gi,f),os(po,d),os(Gu,m),os(Ci,h),os(Zu,C),os(Ju,g),os(l5,as),os(e5,T),os(s5,K),os(at,_),os(ct,x),os(Qu,us),ns(ms))if(ms.length){const ts=e.exposed||(e.exposed={});ms.forEach(ls=>{Object.defineProperty(ts,ls,{get:()=>o[ls],set:Bs=>o[ls]=Bs})})}else e.exposed||(e.exposed={});j&&e.render===ke&&(e.render=j),As!=null&&(e.inheritAttrs=As),Ts&&(e.components=Ts),Is&&(e.directives=Is)}function a5(e,l,o=ke,t=!1){ns(e)&&(e=or(e));for(const r in e){const a=e[r];let c;Hs(a)?"default"in a?c=$(a.from||r,a.default,!0):c=$(a.from||r):c=$(a),Fs(c)&&t?Object.defineProperty(l,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:p=>c.value=p}):l[r]=c}}function Za(e,l,o){$e(ns(e)?e.map(t=>t.bind(l.proxy)):e.bind(l.proxy),l,o)}function bi(e,l,o,t){const r=t.includes(".")?Bi(o,t):()=>o[t];if(Rs(e)){const a=l[e];ps(a)&&ys(r,a)}else if(ps(e))ys(r,e.bind(o));else if(Hs(e))if(ns(e))e.forEach(a=>bi(a,l,o,t));else{const a=ps(e.handler)?e.handler.bind(o):l[e.handler];ps(a)&&ys(r,a,e)}}function xi(e){const l=e.type,{mixins:o,extends:t}=l,{mixins:r,optionsCache:a,config:{optionMergeStrategies:c}}=e.appContext,p=a.get(l);let i;return p?i=p:!r.length&&!o&&!t?i=l:(i={},r.length&&r.forEach(y=>Rn(i,y,c,!0)),Rn(i,l,c)),a.set(l,i),i}function Rn(e,l,o,t=!1){const{mixins:r,extends:a}=l;a&&Rn(e,a,o,!0),r&&r.forEach(c=>Rn(e,c,o,!0));for(const c in l)if(!(t&&c==="expose")){const p=c5[c]||o&&o[c];e[c]=p?p(e[c],l[c]):l[c]}return e}const c5={data:Ja,props:vl,emits:vl,methods:vl,computed:vl,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:vl,directives:vl,watch:i5,provide:Ja,inject:p5};function Ja(e,l){return l?e?function(){return ne(ps(e)?e.call(this,this):e,ps(l)?l.call(this,this):l)}:l:e}function p5(e,l){return vl(or(e),or(l))}function or(e){if(ns(e)){const l={};for(let o=0;o<e.length;o++)l[e[o]]=e[o];return l}return e}function se(e,l){return e?[...new Set([].concat(e,l))]:l}function vl(e,l){return e?ne(ne(Object.create(null),e),l):l}function i5(e,l){if(!e)return l;if(!l)return e;const o=ne(Object.create(null),e);for(const t in l)o[t]=se(e[t],l[t]);return o}function y5(e,l,o,t=!1){const r={},a={};Mn(a,pt,1),e.propsDefaults=Object.create(null),wi(e,l,r,a);for(const c in e.propsOptions[0])c in r||(r[c]=void 0);o?e.props=t?r:bu(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function u5(e,l,o,t){const{props:r,attrs:a,vnode:{patchFlag:c}}=e,p=Es(r),[i]=e.propsOptions;let y=!1;if((t||c>0)&&!(c&16)){if(c&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(nt(e.emitsOptions,d))continue;const m=l[d];if(i)if(hs(a,d))m!==a[d]&&(a[d]=m,y=!0);else{const h=Ve(d);r[h]=nr(i,p,h,m,e,!1)}else m!==a[d]&&(a[d]=m,y=!0)}}}else{wi(e,l,r,a)&&(y=!0);let u;for(const f in p)(!l||!hs(l,f)&&((u=Ml(f))===f||!hs(l,u)))&&(i?o&&(o[f]!==void 0||o[u]!==void 0)&&(r[f]=nr(i,p,f,void 0,e,!0)):delete r[f]);if(a!==p)for(const f in a)(!l||!hs(l,f)&&!0)&&(delete a[f],y=!0)}y&&Ye(e,"set","$attrs")}function wi(e,l,o,t){const[r,a]=e.propsOptions;let c=!1,p;if(l)for(let i in l){if(Fn(i))continue;const y=l[i];let u;r&&hs(r,u=Ve(i))?!a||!a.includes(u)?o[u]=y:(p||(p={}))[u]=y:nt(e.emitsOptions,i)||(!(i in t)||y!==t[i])&&(t[i]=y,c=!0)}if(a){const i=Es(o),y=p||Ss;for(let u=0;u<a.length;u++){const f=a[u];o[f]=nr(r,i,f,y[f],e,!hs(y,f))}}return c}function nr(e,l,o,t,r,a){const c=e[o];if(c!=null){const p=hs(c,"default");if(p&&t===void 0){const i=c.default;if(c.type!==Function&&ps(i)){const{propsDefaults:y}=r;o in y?t=y[o]:(oo(r),t=y[o]=i.call(null,l),kl())}else t=i}c[0]&&(a&&!p?t=!1:c[1]&&(t===""||t===Ml(o))&&(t=!0))}return t}function ki(e,l,o=!1){const t=l.propsCache,r=t.get(e);if(r)return r;const a=e.props,c={},p=[];let i=!1;if(!ps(e)){const u=f=>{i=!0;const[d,m]=ki(f,l,!0);ne(c,d),m&&p.push(...m)};!o&&l.mixins.length&&l.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!i)return t.set(e,Yl),Yl;if(ns(a))for(let u=0;u<a.length;u++){const f=Ve(a[u]);Xa(f)&&(c[f]=Ss)}else if(a)for(const u in a){const f=Ve(u);if(Xa(f)){const d=a[u],m=c[f]=ns(d)||ps(d)?{type:d}:d;if(m){const h=sc(Boolean,m.type),C=sc(String,m.type);m[0]=h>-1,m[1]=C<0||h<C,(h>-1||hs(m,"default"))&&p.push(f)}}}const y=[c,p];return t.set(e,y),y}function Xa(e){return e[0]!=="$"}function Ga(e){const l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:e===null?"null":""}function Qa(e,l){return Ga(e)===Ga(l)}function sc(e,l){return ns(l)?l.findIndex(o=>Qa(o,e)):ps(l)&&Qa(l,e)?0:-1}const $i=e=>e[0]==="_"||e==="$stable",ea=e=>ns(e)?e.map(Ne):[Ne(e)],d5=(e,l,o)=>{if(l._n)return l;const t=z((...r)=>ea(l(...r)),o);return t._c=!1,t},Si=(e,l,o)=>{const t=e._ctx;for(const r in e){if($i(r))continue;const a=e[r];if(ps(a))l[r]=d5(r,a,t);else if(a!=null){const c=ea(a);l[r]=()=>c}}},Oi=(e,l)=>{const o=ea(l);e.slots.default=()=>o},f5=(e,l)=>{if(e.vnode.shapeFlag&32){const o=l._;o?(e.slots=Es(l),Mn(l,"_",o)):Si(l,e.slots={})}else e.slots={},l&&Oi(e,l);Mn(e.slots,pt,1)},m5=(e,l,o)=>{const{vnode:t,slots:r}=e;let a=!0,c=Ss;if(t.shapeFlag&32){const p=l._;p?o&&p===1?a=!1:(ne(r,l),!o&&p===1&&delete r._):(a=!l.$stable,Si(l,r)),c=l}else l&&(Oi(e,l),c={default:1});if(a)for(const p in r)!$i(p)&&!(p in c)&&delete r[p]};function Mi(){return{app:null,config:{isNativeTag:Uy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B5=0;function h5(e,l){return function(t,r=null){ps(t)||(t=Object.assign({},t)),r!=null&&!Hs(r)&&(r=null);const a=Mi(),c=new Set;let p=!1;const i=a.app={_uid:B5++,_component:t,_props:r,_container:null,_context:a,_instance:null,version:T5,get config(){return a.config},set config(y){},use(y,...u){return c.has(y)||(y&&ps(y.install)?(c.add(y),y.install(i,...u)):ps(y)&&(c.add(y),y(i,...u))),i},mixin(y){return a.mixins.includes(y)||a.mixins.push(y),i},component(y,u){return u?(a.components[y]=u,i):a.components[y]},directive(y,u){return u?(a.directives[y]=u,i):a.directives[y]},mount(y,u,f){if(!p){const d=q(t,r);return d.appContext=a,u&&l?l(d,y):e(d,y,f),p=!0,i._container=y,y.__vue_app__=i,it(d.component)||d.component.proxy}},unmount(){p&&(e(null,i._container),delete i._container.__vue_app__)},provide(y,u){return a.provides[y]=u,i}};return i}}function tr(e,l,o,t,r=!1){if(ns(e)){e.forEach((d,m)=>tr(d,l&&(ns(l)?l[m]:l),o,t,r));return}if(Gl(t)&&!r)return;const a=t.shapeFlag&4?it(t.component)||t.component.proxy:t.el,c=r?null:a,{i:p,r:i}=e,y=l&&l.r,u=p.refs===Ss?p.refs={}:p.refs,f=p.setupState;if(y!=null&&y!==i&&(Rs(y)?(u[y]=null,hs(f,y)&&(f[y]=null)):Fs(y)&&(y.value=null)),ps(i))rl(i,p,12,[c,u]);else{const d=Rs(i),m=Fs(i);if(d||m){const h=()=>{if(e.f){const C=d?u[i]:i.value;r?ns(C)&&jr(C,a):ns(C)?C.includes(a)||C.push(a):d?(u[i]=[a],hs(f,i)&&(f[i]=u[i])):(i.value=[a],e.k&&(u[e.k]=i.value))}else d?(u[i]=c,hs(f,i)&&(f[i]=c)):m&&(i.value=c,e.k&&(u[e.k]=c))};c?(h.id=-1,qs(h,o)):h()}}}const qs=qu;function A5(e){return v5(e)}function v5(e,l){const o=Jy();o.__VUE__=!0;const{insert:t,remove:r,patchProp:a,createElement:c,createText:p,createComment:i,setText:y,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=ke,cloneNode:h,insertStaticContent:C}=e,g=(B,A,E,O=null,S=null,I=null,W=!1,R=null,V=!!A.dynamicChildren)=>{if(B===A)return;B&&!Bo(B,A)&&(O=Q(B),te(B,S,I,!0),B=null),A.patchFlag===-2&&(V=!1,A.dynamicChildren=null);const{type:P,ref:ss,shapeFlag:G}=A;switch(P){case oa:b(B,A,E,O);break;case ul:_(B,A,E,O);break;case _t:B==null&&F(A,E,O,W);break;case Cs:Is(B,A,E,O,S,I,W,R,V);break;default:G&1?T(B,A,E,O,S,I,W,R,V):G&6?Ys(B,A,E,O,S,I,W,R,V):(G&64||G&128)&&P.process(B,A,E,O,S,I,W,R,V,Os)}ss!=null&&S&&tr(ss,B&&B.ref,I,A||B,!A)},b=(B,A,E,O)=>{if(B==null)t(A.el=p(A.children),E,O);else{const S=A.el=B.el;A.children!==B.children&&y(S,A.children)}},_=(B,A,E,O)=>{B==null?t(A.el=i(A.children||""),E,O):A.el=B.el},F=(B,A,E,O)=>{[B.el,B.anchor]=C(B.children,A,E,O,B.el,B.anchor)},x=({el:B,anchor:A},E,O)=>{let S;for(;B&&B!==A;)S=d(B),t(B,E,O),B=S;t(A,E,O)},j=({el:B,anchor:A})=>{let E;for(;B&&B!==A;)E=d(B),r(B),B=E;r(A)},T=(B,A,E,O,S,I,W,R,V)=>{W=W||A.type==="svg",B==null?K(A,E,O,S,I,W,R,V):ms(B,A,S,I,W,R,V)},K=(B,A,E,O,S,I,W,R)=>{let V,P;const{type:ss,props:G,shapeFlag:es,transition:rs,patchFlag:vs,dirs:ws}=B;if(B.el&&h!==void 0&&vs===-1)V=B.el=h(B.el);else{if(V=B.el=c(B.type,I,G&&G.is,G),es&8?u(V,B.children):es&16&&us(B.children,V,null,O,S,I&&ss!=="foreignObject",W,R),ws&&ml(B,null,O,"created"),G){for(const Ms in G)Ms!=="value"&&!Fn(Ms)&&a(V,Ms,null,G[Ms],I,B.children,O,S,N);"value"in G&&a(V,"value",null,G.value),(P=G.onVnodeBeforeMount)&&ve(P,O,B)}as(V,B,B.scopeId,W,O)}ws&&ml(B,null,O,"beforeMount");const ks=(!S||S&&!S.pendingBranch)&&rs&&!rs.persisted;ks&&rs.beforeEnter(V),t(V,A,E),((P=G&&G.onVnodeMounted)||ks||ws)&&qs(()=>{P&&ve(P,O,B),ks&&rs.enter(V),ws&&ml(B,null,O,"mounted")},S)},as=(B,A,E,O,S)=>{if(E&&m(B,E),O)for(let I=0;I<O.length;I++)m(B,O[I]);if(S){let I=S.subTree;if(A===I){const W=S.vnode;as(B,W,W.scopeId,W.slotScopeIds,S.parent)}}},us=(B,A,E,O,S,I,W,R,V=0)=>{for(let P=V;P<B.length;P++){const ss=B[P]=R?ll(B[P]):Ne(B[P]);g(null,ss,A,E,O,S,I,W,R)}},ms=(B,A,E,O,S,I,W)=>{const R=A.el=B.el;let{patchFlag:V,dynamicChildren:P,dirs:ss}=A;V|=B.patchFlag&16;const G=B.props||Ss,es=A.props||Ss;let rs;E&&Bl(E,!1),(rs=es.onVnodeBeforeUpdate)&&ve(rs,E,A,B),ss&&ml(A,B,E,"beforeUpdate"),E&&Bl(E,!0);const vs=S&&A.type!=="foreignObject";if(P?As(B.dynamicChildren,P,R,E,O,vs,I):W||Bs(B,A,R,null,E,O,vs,I,!1),V>0){if(V&16)Ts(R,A,G,es,E,O,S);else if(V&2&&G.class!==es.class&&a(R,"class",null,es.class,S),V&4&&a(R,"style",G.style,es.style,S),V&8){const ws=A.dynamicProps;for(let ks=0;ks<ws.length;ks++){const Ms=ws[ks],_e=G[Ms],Rl=es[Ms];(Rl!==_e||Ms==="value")&&a(R,Ms,_e,Rl,S,B.children,E,O,N)}}V&1&&B.children!==A.children&&u(R,A.children)}else!W&&P==null&&Ts(R,A,G,es,E,O,S);((rs=es.onVnodeUpdated)||ss)&&qs(()=>{rs&&ve(rs,E,A,B),ss&&ml(A,B,E,"updated")},O)},As=(B,A,E,O,S,I,W)=>{for(let R=0;R<A.length;R++){const V=B[R],P=A[R],ss=V.el&&(V.type===Cs||!Bo(V,P)||V.shapeFlag&70)?f(V.el):E;g(V,P,ss,null,O,S,I,W,!0)}},Ts=(B,A,E,O,S,I,W)=>{if(E!==O){for(const R in O){if(Fn(R))continue;const V=O[R],P=E[R];V!==P&&R!=="value"&&a(B,R,P,V,W,A.children,S,I,N)}if(E!==Ss)for(const R in E)!Fn(R)&&!(R in O)&&a(B,R,E[R],null,W,A.children,S,I,N);"value"in O&&a(B,"value",E.value,O.value)}},Is=(B,A,E,O,S,I,W,R,V)=>{const P=A.el=B?B.el:p(""),ss=A.anchor=B?B.anchor:p("");let{patchFlag:G,dynamicChildren:es,slotScopeIds:rs}=A;rs&&(R=R?R.concat(rs):rs),B==null?(t(P,E,O),t(ss,E,O),us(A.children,E,ss,S,I,W,R,V)):G>0&&G&64&&es&&B.dynamicChildren?(As(B.dynamicChildren,es,E,S,I,W,R),(A.key!=null||S&&A===S.subTree)&&la(B,A,!0)):Bs(B,A,E,ss,S,I,W,R,V)},Ys=(B,A,E,O,S,I,W,R,V)=>{A.slotScopeIds=R,B==null?A.shapeFlag&512?S.ctx.activate(A,E,O,W,V):xs(A,E,O,S,I,W,V):os(B,A,V)},xs=(B,A,E,O,S,I,W)=>{const R=B.component=k5(B,O,S);if(Ai(B)&&(R.ctx.renderer=Os),$5(R),R.asyncDep){if(S&&S.registerDep(R,ts),!B.el){const V=R.subTree=q(ul);_(null,V,A,E)}return}ts(R,B,A,E,S,I,W)},os=(B,A,E)=>{const O=A.component=B.component;if(Uu(B,A,E))if(O.asyncDep&&!O.asyncResolved){ls(O,A,E);return}else O.next=A,Ru(O.update),O.update();else A.el=B.el,O.vnode=A},ts=(B,A,E,O,S,I,W)=>{const R=()=>{if(B.isMounted){let{next:ss,bu:G,u:es,parent:rs,vnode:vs}=B,ws=ss,ks;Bl(B,!1),ss?(ss.el=vs.el,ls(B,ss,W)):ss=vs,G&&Jl(G),(ks=ss.props&&ss.props.onVnodeBeforeUpdate)&&ve(ks,rs,ss,vs),Bl(B,!0);const Ms=gt(B),_e=B.subTree;B.subTree=Ms,g(_e,Ms,f(_e.el),Q(_e),B,S,I),ss.el=Ms.el,ws===null&&Wu(B,Ms.el),es&&qs(es,S),(ks=ss.props&&ss.props.onVnodeUpdated)&&qs(()=>ve(ks,rs,ss,vs),S)}else{let ss;const{el:G,props:es}=A,{bm:rs,m:vs,parent:ws}=B,ks=Gl(A);if(Bl(B,!1),rs&&Jl(rs),!ks&&(ss=es&&es.onVnodeBeforeMount)&&ve(ss,ws,A),Bl(B,!0),G&&is){const Ms=()=>{B.subTree=gt(B),is(G,B.subTree,B,S,null)};ks?A.type.__asyncLoader().then(()=>!B.isUnmounted&&Ms()):Ms()}else{const Ms=B.subTree=gt(B);g(null,Ms,E,O,B,S,I),A.el=Ms.el}if(vs&&qs(vs,S),!ks&&(ss=es&&es.onVnodeMounted)){const Ms=A;qs(()=>ve(ss,ws,Ms),S)}(A.shapeFlag&256||ws&&Gl(ws.vnode)&&ws.vnode.shapeFlag&256)&&B.a&&qs(B.a,S),B.isMounted=!0,A=E=O=null}},V=B.effect=new Ur(R,()=>pi(P),B.scope),P=B.update=()=>V.run();P.id=B.uid,Bl(B,!0),P()},ls=(B,A,E)=>{A.component=B;const O=B.vnode.props;B.vnode=A,B.next=null,u5(B,A.props,O,E),m5(B,A.children,E),ao(),ot(void 0,B.update),co()},Bs=(B,A,E,O,S,I,W,R,V=!1)=>{const P=B&&B.children,ss=B?B.shapeFlag:0,G=A.children,{patchFlag:es,shapeFlag:rs}=A;if(es>0){if(es&128){Gs(P,G,E,O,S,I,W,R,V);return}else if(es&256){Te(P,G,E,O,S,I,W,R,V);return}}rs&8?(ss&16&&N(P,S,I),G!==P&&u(E,G)):ss&16?rs&16?Gs(P,G,E,O,S,I,W,R,V):N(P,S,I,!0):(ss&8&&u(E,""),rs&16&&us(G,E,O,S,I,W,R,V))},Te=(B,A,E,O,S,I,W,R,V)=>{B=B||Yl,A=A||Yl;const P=B.length,ss=A.length,G=Math.min(P,ss);let es;for(es=0;es<G;es++){const rs=A[es]=V?ll(A[es]):Ne(A[es]);g(B[es],rs,E,null,S,I,W,R,V)}P>ss?N(B,S,I,!0,!1,G):us(A,E,O,S,I,W,R,V,G)},Gs=(B,A,E,O,S,I,W,R,V)=>{let P=0;const ss=A.length;let G=B.length-1,es=ss-1;for(;P<=G&&P<=es;){const rs=B[P],vs=A[P]=V?ll(A[P]):Ne(A[P]);if(Bo(rs,vs))g(rs,vs,E,null,S,I,W,R,V);else break;P++}for(;P<=G&&P<=es;){const rs=B[G],vs=A[es]=V?ll(A[es]):Ne(A[es]);if(Bo(rs,vs))g(rs,vs,E,null,S,I,W,R,V);else break;G--,es--}if(P>G){if(P<=es){const rs=es+1,vs=rs<ss?A[rs].el:O;for(;P<=es;)g(null,A[P]=V?ll(A[P]):Ne(A[P]),E,vs,S,I,W,R,V),P++}}else if(P>es)for(;P<=G;)te(B[P],S,I,!0),P++;else{const rs=P,vs=P,ws=new Map;for(P=vs;P<=es;P++){const ce=A[P]=V?ll(A[P]):Ne(A[P]);ce.key!=null&&ws.set(ce.key,P)}let ks,Ms=0;const _e=es-vs+1;let Rl=!1,Oa=0;const mo=new Array(_e);for(P=0;P<_e;P++)mo[P]=0;for(P=rs;P<=G;P++){const ce=B[P];if(Ms>=_e){te(ce,S,I,!0);continue}let Le;if(ce.key!=null)Le=ws.get(ce.key);else for(ks=vs;ks<=es;ks++)if(mo[ks-vs]===0&&Bo(ce,A[ks])){Le=ks;break}Le===void 0?te(ce,S,I,!0):(mo[Le-vs]=P+1,Le>=Oa?Oa=Le:Rl=!0,g(ce,A[Le],E,null,S,I,W,R,V),Ms++)}const Ma=Rl?D5(mo):Yl;for(ks=Ma.length-1,P=_e-1;P>=0;P--){const ce=vs+P,Le=A[ce],Pa=ce+1<ss?A[ce+1].el:O;mo[P]===0?g(null,Le,E,Pa,S,I,W,R,V):Rl&&(ks<0||P!==Ma[ks]?Ae(Le,E,Pa,2):ks--)}}},Ae=(B,A,E,O,S=null)=>{const{el:I,type:W,transition:R,children:V,shapeFlag:P}=B;if(P&6){Ae(B.component.subTree,A,E,O);return}if(P&128){B.suspense.move(A,E,O);return}if(P&64){W.move(B,A,E,Os);return}if(W===Cs){t(I,A,E);for(let G=0;G<V.length;G++)Ae(V[G],A,E,O);t(B.anchor,A,E);return}if(W===_t){x(B,A,E);return}if(O!==2&&P&1&&R)if(O===0)R.beforeEnter(I),t(I,A,E),qs(()=>R.enter(I),S);else{const{leave:G,delayLeave:es,afterLeave:rs}=R,vs=()=>t(I,A,E),ws=()=>{G(I,()=>{vs(),rs&&rs()})};es?es(I,vs,ws):ws()}else t(I,A,E)},te=(B,A,E,O=!1,S=!1)=>{const{type:I,props:W,ref:R,children:V,dynamicChildren:P,shapeFlag:ss,patchFlag:G,dirs:es}=B;if(R!=null&&tr(R,null,E,B,!0),ss&256){A.ctx.deactivate(B);return}const rs=ss&1&&es,vs=!Gl(B);let ws;if(vs&&(ws=W&&W.onVnodeBeforeUnmount)&&ve(ws,A,B),ss&6)J(B.component,E,O);else{if(ss&128){B.suspense.unmount(E,O);return}rs&&ml(B,null,A,"beforeUnmount"),ss&64?B.type.remove(B,A,E,S,Os,O):P&&(I!==Cs||G>0&&G&64)?N(P,A,E,!1,!0):(I===Cs&&G&384||!S&&ss&16)&&N(V,A,E),O&&Nl(B)}(vs&&(ws=W&&W.onVnodeUnmounted)||rs)&&qs(()=>{ws&&ve(ws,A,B),rs&&ml(B,null,A,"unmounted")},E)},Nl=B=>{const{type:A,el:E,anchor:O,transition:S}=B;if(A===Cs){k(E,O);return}if(A===_t){j(B);return}const I=()=>{r(E),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(B.shapeFlag&1&&S&&!S.persisted){const{leave:W,delayLeave:R}=S,V=()=>W(E,I);R?R(B.el,I,V):V()}else I()},k=(B,A)=>{let E;for(;B!==A;)E=d(B),r(B),B=E;r(A)},J=(B,A,E)=>{const{bum:O,scope:S,update:I,subTree:W,um:R}=B;O&&Jl(O),S.stop(),I&&(I.active=!1,te(W,B,A,E)),R&&qs(R,A),qs(()=>{B.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&B.asyncDep&&!B.asyncResolved&&B.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},N=(B,A,E,O=!1,S=!1,I=0)=>{for(let W=I;W<B.length;W++)te(B[W],A,E,O,S)},Q=B=>B.shapeFlag&6?Q(B.component.subTree):B.shapeFlag&128?B.suspense.next():d(B.anchor||B.el),Ds=(B,A,E)=>{B==null?A._vnode&&te(A._vnode,null,null,!0):g(A._vnode||null,B,A,null,null,null,E),ui(),A._vnode=B},Os={p:g,um:te,m:Ae,r:Nl,mt:xs,mc:us,pc:Bs,pbc:As,n:Q,o:e};let ds,is;return l&&([ds,is]=l(Os)),{render:Ds,hydrate:ds,createApp:h5(Ds,ds)}}function Bl({effect:e,update:l},o){e.allowRecurse=l.allowRecurse=o}function la(e,l,o=!1){const t=e.children,r=l.children;if(ns(t)&&ns(r))for(let a=0;a<t.length;a++){const c=t[a];let p=r[a];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=r[a]=ll(r[a]),p.el=c.el),o||la(c,p))}}function D5(e){const l=e.slice(),o=[0];let t,r,a,c,p;const i=e.length;for(t=0;t<i;t++){const y=e[t];if(y!==0){if(r=o[o.length-1],e[r]<y){l[t]=r,o.push(t);continue}for(a=0,c=o.length-1;a<c;)p=a+c>>1,e[o[p]]<y?a=p+1:c=p;y<e[o[a]]&&(a>0&&(l[t]=o[a-1]),o[a]=t)}}for(a=o.length,c=o[a-1];a-- >0;)o[a]=c,c=l[c];return o}const g5=e=>e.__isTeleport,$o=e=>e&&(e.disabled||e.disabled===""),ec=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,rr=(e,l)=>{const o=e&&e.to;return Rs(o)?l?l(o):null:o},C5={__isTeleport:!0,process(e,l,o,t,r,a,c,p,i,y){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:h,createText:C,createComment:g}}=y,b=$o(l.props);let{shapeFlag:_,children:F,dynamicChildren:x}=l;if(e==null){const j=l.el=C(""),T=l.anchor=C("");m(j,o,t),m(T,o,t);const K=l.target=rr(l.props,h),as=l.targetAnchor=C("");K&&(m(as,K),c=c||ec(K));const us=(ms,As)=>{_&16&&u(F,ms,As,r,a,c,p,i)};b?us(o,T):K&&us(K,as)}else{l.el=e.el;const j=l.anchor=e.anchor,T=l.target=e.target,K=l.targetAnchor=e.targetAnchor,as=$o(e.props),us=as?o:T,ms=as?j:K;if(c=c||ec(T),x?(d(e.dynamicChildren,x,us,r,a,c,p),la(e,l,!0)):i||f(e,l,us,ms,r,a,c,p,!1),b)as||vn(l,o,j,y,1);else if((l.props&&l.props.to)!==(e.props&&e.props.to)){const As=l.target=rr(l.props,h);As&&vn(l,As,null,y,0)}else as&&vn(l,T,K,y,1)}},remove(e,l,o,t,{um:r,o:{remove:a}},c){const{shapeFlag:p,children:i,anchor:y,targetAnchor:u,target:f,props:d}=e;if(f&&a(u),(c||!$o(d))&&(a(y),p&16))for(let m=0;m<i.length;m++){const h=i[m];r(h,l,o,!0,!!h.dynamicChildren)}},move:vn,hydrate:E5};function vn(e,l,o,{o:{insert:t},m:r},a=2){a===0&&t(e.targetAnchor,l,o);const{el:c,anchor:p,shapeFlag:i,children:y,props:u}=e,f=a===2;if(f&&t(c,l,o),(!f||$o(u))&&i&16)for(let d=0;d<y.length;d++)r(y[d],l,o,2);f&&t(p,l,o)}function E5(e,l,o,t,r,a,{o:{nextSibling:c,parentNode:p,querySelector:i}},y){const u=l.target=rr(l.props,i);if(u){const f=u._lpa||u.firstChild;if(l.shapeFlag&16)if($o(l.props))l.anchor=y(c(e),l,p(e),o,t,r,a),l.targetAnchor=f;else{l.anchor=c(e);let d=f;for(;d;)if(d=c(d),d&&d.nodeType===8&&d.data==="teleport anchor"){l.targetAnchor=d,u._lpa=l.targetAnchor&&c(l.targetAnchor);break}y(f,l,u,o,t,r,a)}}return l.anchor&&c(l.anchor)}const _5=C5,Cs=Symbol(void 0),oa=Symbol(void 0),ul=Symbol(void 0),_t=Symbol(void 0),So=[];let we=null;function v(e=!1){So.push(we=e?null:[])}function F5(){So.pop(),we=So[So.length-1]||null}let Ko=1;function lc(e){Ko+=e}function Pi(e){return e.dynamicChildren=Ko>0?we||Yl:null,F5(),Ko>0&&we&&we.push(e),e}function U(e,l,o,t,r,a){return Pi(s(e,l,o,t,r,a,!0))}function L(e,l,o,t,r){return Pi(q(e,l,o,t,r,!0))}function lo(e){return e?e.__v_isVNode===!0:!1}function Bo(e,l){return e.type===l.type&&e.key===l.key}const pt="__vInternal",Ti=({key:e})=>e!=null?e:null,bn=({ref:e,ref_key:l,ref_for:o})=>e!=null?Rs(e)||Fs(e)||ps(e)?{i:Zs,r:e,k:l,f:!!o}:e:null;function s(e,l=null,o=null,t=0,r=null,a=e===Cs?0:1,c=!1,p=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:l,key:l&&Ti(l),ref:l&&bn(l),scopeId:tt,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:t,dynamicProps:r,dynamicChildren:null,appContext:null};return p?(na(i,o),a&128&&e.normalize(i)):o&&(i.shapeFlag|=Rs(o)?8:16),Ko>0&&!c&&we&&(i.patchFlag>0||a&6)&&i.patchFlag!==32&&we.push(i),i}const q=b5;function b5(e,l=null,o=null,t=0,r=null,a=!1){if((!e||e===n5)&&(e=ul),lo(e)){const p=Ol(e,l,!0);return o&&na(p,o),Ko>0&&!a&&we&&(p.shapeFlag&6?we[we.indexOf(e)]=p:we.push(p)),p.patchFlag|=-2,p}if(P5(e)&&(e=e.__vccOpts),l){l=Y(l);let{class:p,style:i}=l;p&&!Rs(p)&&(l.class=Ns(p)),Hs(i)&&(ti(i)&&!ns(i)&&(i=ne({},i)),l.style=oe(i))}const c=Rs(e)?1:mi(e)?128:g5(e)?64:Hs(e)?4:ps(e)?2:0;return s(e,l,o,t,r,c,a,!0)}function Y(e){return e?ti(e)||pt in e?ne({},e):e:null}function Ol(e,l,o=!1){const{props:t,ref:r,patchFlag:a,children:c}=e,p=l?dl(t||{},l):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Ti(p),ref:l&&l.ref?o&&r?ns(r)?r.concat(bn(l)):[r,bn(l)]:bn(l):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:l&&e.type!==Cs?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ol(e.ssContent),ssFallback:e.ssFallback&&Ol(e.ssFallback),el:e.el,anchor:e.anchor}}function n(e=" ",l=0){return q(oa,null,e,l)}function fs(e="",l=!1){return l?(v(),L(ul,null,e)):q(ul,null,e)}function Ne(e){return e==null||typeof e=="boolean"?q(ul):ns(e)?q(Cs,null,e.slice()):typeof e=="object"?ll(e):q(oa,null,String(e))}function ll(e){return e.el===null||e.memo?e:Ol(e)}function na(e,l){let o=0;const{shapeFlag:t}=e;if(l==null)l=null;else if(ns(l))o=16;else if(typeof l=="object")if(t&65){const r=l.default;r&&(r._c&&(r._d=!1),na(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=l._;!r&&!(pt in l)?l._ctx=Zs:r===3&&Zs&&(Zs.slots._===1?l._=1:(l._=2,e.patchFlag|=1024))}else ps(l)?(l={default:l,_ctx:Zs},o=32):(l=String(l),t&64?(o=16,l=[n(l)]):o=8);e.children=l,e.shapeFlag|=o}function dl(...e){const l={};for(let o=0;o<e.length;o++){const t=e[o];for(const r in t)if(r==="class")l.class!==t.class&&(l.class=Ns([l.class,t.class]));else if(r==="style")l.style=oe([l.style,t.style]);else if(Jn(r)){const a=l[r],c=t[r];c&&a!==c&&!(ns(a)&&a.includes(c))&&(l[r]=a?[].concat(a,c):c)}else r!==""&&(l[r]=t[r])}return l}function ve(e,l,o,t=null){$e(e,l,7,[o,t])}const x5=Mi();let w5=0;function k5(e,l,o){const t=e.type,r=(l?l.appContext:e.appContext)||x5,a={uid:w5++,vnode:e,type:t,parent:l,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ki(t,r),emitsOptions:fi(t,r),emit:null,emitted:null,propsDefaults:Ss,inheritAttrs:t.inheritAttrs,ctx:Ss,data:Ss,props:Ss,attrs:Ss,slots:Ss,refs:Ss,setupState:Ss,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=l?l.root:a,a.emit=Vu.bind(null,a),e.ce&&e.ce(a),a}let Ws=null;const Pl=()=>Ws||Zs,oo=e=>{Ws=e,e.scope.on()},kl=()=>{Ws&&Ws.scope.off(),Ws=null};function Li(e){return e.vnode.shapeFlag&4}let Yo=!1;function $5(e,l=!1){Yo=l;const{props:o,children:t}=e.vnode,r=Li(e);y5(e,o,r,l),f5(e,t);const a=r?S5(e,l):void 0;return Yo=!1,a}function S5(e,l){const o=e.type;e.accessCache=Object.create(null),e.proxy=et(new Proxy(e.ctx,t5));const{setup:t}=o;if(t){const r=e.setupContext=t.length>1?M5(e):null;oo(e),ao();const a=rl(t,e,0,[e.props,r]);if(co(),kl(),Wp(a)){if(a.then(kl,kl),l)return a.then(c=>{oc(e,c,l)}).catch(c=>{lt(c,e,0)});e.asyncDep=a}else oc(e,a,l)}else Ni(e,l)}function oc(e,l,o){ps(l)?e.type.__ssrInlineRender?e.ssrRender=l:e.render=l:Hs(l)&&(e.setupState=ai(l)),Ni(e,o)}let nc;function Ni(e,l,o){const t=e.type;if(!e.render){if(!l&&nc&&!t.render){const r=t.template;if(r){const{isCustomElement:a,compilerOptions:c}=e.appContext.config,{delimiters:p,compilerOptions:i}=t,y=ne(ne({isCustomElement:a,delimiters:p},c),i);t.render=nc(r,y)}}e.render=t.render||ke}oo(e),ao(),r5(e),co(),kl()}function O5(e){return new Proxy(e.attrs,{get(l,o){return he(e,"get","$attrs"),l[o]}})}function M5(e){const l=t=>{e.exposed=t||{}};let o;return{get attrs(){return o||(o=O5(e))},slots:e.slots,emit:e.emit,expose:l}}function it(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ai(et(e.exposed)),{get(l,o){if(o in l)return l[o];if(o in Nn)return Nn[o](e)}}))}function ar(e,l=!0){return ps(e)?e.displayName||e.name:e.name||l&&e.__name}function P5(e){return ps(e)&&"__vccOpts"in e}const w=(e,l)=>Tu(e,l,Yo);function Se(e,l,o){const t=arguments.length;return t===2?Hs(l)&&!ns(l)?lo(l)?q(e,null,[l]):q(e,l):q(e,null,l):(t>3?o=Array.prototype.slice.call(arguments,2):t===3&&lo(o)&&(o=[o]),q(e,l,o))}const T5="3.2.37",L5="http://www.w3.org/2000/svg",gl=typeof document!="undefined"?document:null,tc=gl&&gl.createElement("template"),N5={insert:(e,l,o)=>{l.insertBefore(e,o||null)},remove:e=>{const l=e.parentNode;l&&l.removeChild(e)},createElement:(e,l,o,t)=>{const r=l?gl.createElementNS(L5,e):gl.createElement(e,o?{is:o}:void 0);return e==="select"&&t&&t.multiple!=null&&r.setAttribute("multiple",t.multiple),r},createText:e=>gl.createTextNode(e),createComment:e=>gl.createComment(e),setText:(e,l)=>{e.nodeValue=l},setElementText:(e,l)=>{e.textContent=l},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gl.querySelector(e),setScopeId(e,l){e.setAttribute(l,"")},cloneNode(e){const l=e.cloneNode(!0);return"_value"in e&&(l._value=e._value),l},insertStaticContent(e,l,o,t,r,a){const c=o?o.previousSibling:l.lastChild;if(r&&(r===a||r.nextSibling))for(;l.insertBefore(r.cloneNode(!0),o),!(r===a||!(r=r.nextSibling)););else{tc.innerHTML=t?`<svg>${e}</svg>`:e;const p=tc.content;if(t){const i=p.firstChild;for(;i.firstChild;)p.appendChild(i.firstChild);p.removeChild(i)}l.insertBefore(p,o)}return[c?c.nextSibling:l.firstChild,o?o.previousSibling:l.lastChild]}};function R5(e,l,o){const t=e._vtc;t&&(l=(l?[l,...t]:[...t]).join(" ")),l==null?e.removeAttribute("class"):o?e.setAttribute("class",l):e.className=l}function I5(e,l,o){const t=e.style,r=Rs(o);if(o&&!r){for(const a in o)cr(t,a,o[a]);if(l&&!Rs(l))for(const a in l)o[a]==null&&cr(t,a,"")}else{const a=t.display;r?l!==o&&(t.cssText=o):l&&e.removeAttribute("style"),"_vod"in e&&(t.display=a)}}const rc=/\s*!important$/;function cr(e,l,o){if(ns(o))o.forEach(t=>cr(e,l,t));else if(o==null&&(o=""),l.startsWith("--"))e.setProperty(l,o);else{const t=j5(e,l);rc.test(o)?e.setProperty(Ml(t),o.replace(rc,""),"important"):e[t]=o}}const ac=["Webkit","Moz","ms"],Ft={};function j5(e,l){const o=Ft[l];if(o)return o;let t=Ve(l);if(t!=="filter"&&t in e)return Ft[l]=t;t=Qn(t);for(let r=0;r<ac.length;r++){const a=ac[r]+t;if(a in e)return Ft[l]=a}return l}const cc="http://www.w3.org/1999/xlink";function V5(e,l,o,t,r){if(t&&l.startsWith("xlink:"))o==null?e.removeAttributeNS(cc,l.slice(6,l.length)):e.setAttributeNS(cc,l,o);else{const a=jy(l);o==null||a&&!zp(o)?e.removeAttribute(l):e.setAttribute(l,a?"":o)}}function z5(e,l,o,t,r,a,c){if(l==="innerHTML"||l==="textContent"){t&&c(t,r,a),e[l]=o==null?"":o;return}if(l==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=o;const i=o==null?"":o;(e.value!==i||e.tagName==="OPTION")&&(e.value=i),o==null&&e.removeAttribute(l);return}let p=!1;if(o===""||o==null){const i=typeof e[l];i==="boolean"?o=zp(o):o==null&&i==="string"?(o="",p=!0):i==="number"&&(o=0,p=!0)}try{e[l]=o}catch{}p&&e.removeAttribute(l)}const[Ri,H5]=(()=>{let e=Date.now,l=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);l=!!(o&&Number(o[1])<=53)}return[e,l]})();let pr=0;const U5=Promise.resolve(),W5=()=>{pr=0},q5=()=>pr||(U5.then(W5),pr=Ri());function Ul(e,l,o,t){e.addEventListener(l,o,t)}function K5(e,l,o,t){e.removeEventListener(l,o,t)}function Y5(e,l,o,t,r=null){const a=e._vei||(e._vei={}),c=a[l];if(t&&c)c.value=t;else{const[p,i]=Z5(l);if(t){const y=a[l]=J5(t,r);Ul(e,p,y,i)}else c&&(K5(e,p,c,i),a[l]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function Z5(e){let l;if(pc.test(e)){l={};let o;for(;o=e.match(pc);)e=e.slice(0,e.length-o[0].length),l[o[0].toLowerCase()]=!0}return[Ml(e.slice(2)),l]}function J5(e,l){const o=t=>{const r=t.timeStamp||Ri();(H5||r>=o.attached-1)&&$e(X5(t,o.value),l,5,[t])};return o.value=e,o.attached=q5(),o}function X5(e,l){if(ns(l)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},l.map(t=>r=>!r._stopped&&t&&t(r))}else return l}const ic=/^on[a-z]/,G5=(e,l,o,t,r=!1,a,c,p,i)=>{l==="class"?R5(e,t,r):l==="style"?I5(e,o,t):Jn(l)?Ir(l)||Y5(e,l,o,t,c):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Q5(e,l,t,r))?z5(e,l,t,a,c,p,i):(l==="true-value"?e._trueValue=t:l==="false-value"&&(e._falseValue=t),V5(e,l,t,r))};function Q5(e,l,o,t){return t?!!(l==="innerHTML"||l==="textContent"||l in e&&ic.test(l)&&ps(o)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&e.tagName==="INPUT"||l==="type"&&e.tagName==="TEXTAREA"||ic.test(l)&&Rs(o)?!1:l in e}const yc=e=>{const l=e.props["onUpdate:modelValue"]||!1;return ns(l)?o=>Jl(l,o):l};function sd(e){e.target.composing=!0}function uc(e){const l=e.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Zo={created(e,{modifiers:{lazy:l,trim:o,number:t}},r){e._assign=yc(r);const a=t||r.props&&r.props.type==="number";Ul(e,l?"change":"input",c=>{if(c.target.composing)return;let p=e.value;o&&(p=p.trim()),a&&(p=Kt(p)),e._assign(p)}),o&&Ul(e,"change",()=>{e.value=e.value.trim()}),l||(Ul(e,"compositionstart",sd),Ul(e,"compositionend",uc),Ul(e,"change",uc))},mounted(e,{value:l}){e.value=l==null?"":l},beforeUpdate(e,{value:l,modifiers:{lazy:o,trim:t,number:r}},a){if(e._assign=yc(a),e.composing||document.activeElement===e&&e.type!=="range"&&(o||t&&e.value.trim()===l||(r||e.type==="number")&&Kt(e.value)===l))return;const c=l==null?"":l;e.value!==c&&(e.value=c)}},ed={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dc=(e,l)=>o=>{if(!("key"in o))return;const t=Ml(o.key);if(l.some(r=>r===t||ed[r]===t))return e(o)},Ii={beforeMount(e,{value:l},{transition:o}){e._vod=e.style.display==="none"?"":e.style.display,o&&l?o.beforeEnter(e):ho(e,l)},mounted(e,{value:l},{transition:o}){o&&l&&o.enter(e)},updated(e,{value:l,oldValue:o},{transition:t}){!l!=!o&&(t?l?(t.beforeEnter(e),ho(e,!0),t.enter(e)):t.leave(e,()=>{ho(e,!1)}):ho(e,l))},beforeUnmount(e,{value:l}){ho(e,l)}};function ho(e,l){e.style.display=l?e._vod:"none"}const ld=ne({patchProp:G5},N5);let fc;function od(){return fc||(fc=A5(ld))}const nd=(...e)=>{const l=od().createApp(...e),{mount:o}=l;return l.mount=t=>{const r=td(t);if(!r)return;const a=l._component;!ps(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const c=o(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),c},l};function td(e){return Rs(e)?document.querySelector(e):e}var rd=Object.defineProperty,mc=Object.getOwnPropertySymbols,ad=Object.prototype.hasOwnProperty,cd=Object.prototype.propertyIsEnumerable,Bc=(e,l,o)=>l in e?rd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,pd=(e,l)=>{for(var o in l||(l={}))ad.call(l,o)&&Bc(e,o,l[o]);if(mc)for(var o of mc(l))cd.call(l,o)&&Bc(e,o,l[o]);return e},ji="usehead",hc="head:count",bt="data-head-attrs",id=(e,l,o)=>{const t=o.createElement(e);for(const r of Object.keys(l)){let a=l[r];r==="key"||a===!1||(r==="children"?t.textContent=a:t.setAttribute(r,a))}return t};function yd(e,l){if(e instanceof HTMLElement&&l instanceof HTMLElement){const o=l.getAttribute("nonce");if(o&&!e.getAttribute("nonce")){const t=l.cloneNode(!0);return t.setAttribute("nonce",""),t.nonce=o,o===e.nonce&&e.isEqualNode(t)}}return e.isEqualNode(l)}var ud=e=>{const l=["key","id","name","property"];for(const o of l){const t=typeof e.getAttribute=="function"?e.hasAttribute(o)?e.getAttribute(o):void 0:e[o];if(t!==void 0)return{name:o,value:t}}},dd=()=>{const e=$(ji);if(!e)throw new Error("You may forget to apply app.use(head)");return e},fd=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],md=e=>{const l=[];for(const o of Object.keys(e))if(e[o]!=null){if(o==="title")l.push({tag:o,props:{children:e[o]}});else if(o==="base")l.push({tag:o,props:pd({key:"default"},e[o])});else if(fd.includes(o)){const t=e[o];Array.isArray(t)?t.forEach(r=>{l.push({tag:o,props:r})}):t&&l.push({tag:o,props:t})}}return l},Ac=(e,l)=>{const o=e.getAttribute(bt);if(o)for(const r of o.split(","))r in l||e.removeAttribute(r);const t=[];for(const r in l){const a=l[r];a!=null&&(a===!1?e.removeAttribute(r):e.setAttribute(r,a),t.push(r))}t.length?e.setAttribute(bt,t.join(",")):e.removeAttribute(bt)},Bd=(e=window.document,l,o)=>{var t;const r=e.head;let a=r.querySelector(`meta[name="${hc}"]`);const c=a?Number(a.getAttribute("content")):0,p=[];if(a)for(let y=0,u=a.previousElementSibling;y<c;y++,u=(u==null?void 0:u.previousElementSibling)||null)((t=u==null?void 0:u.tagName)==null?void 0:t.toLowerCase())===l&&p.push(u);else a=e.createElement("meta"),a.setAttribute("name",hc),a.setAttribute("content","0"),r.append(a);let i=o.map(y=>id(y.tag,y.props,e));i=i.filter(y=>{for(let u=0;u<p.length;u++){const f=p[u];if(yd(f,y))return p.splice(u,1),!1}return!0}),p.forEach(y=>{var u;return(u=y.parentNode)==null?void 0:u.removeChild(y)}),i.forEach(y=>{r.insertBefore(y,a)}),a.setAttribute("content",""+(c-p.length+i.length))},hd=()=>{let e=[],l=new Set;const o={install(t){t.config.globalProperties.$head=o,t.provide(ji,o)},get headTags(){const t=[];return e.forEach(r=>{md(r.value).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const p=ud(c.props);if(p){let i=-1;for(let y=0;y<t.length;y++){const u=t[y],f=u.props[p.name],d=c.props[p.name];if(u.tag===c.tag&&f===d){i=y;break}}i!==-1&&t.splice(i,1)}}t.push(c)})}),t},addHeadObjs(t){e.push(t)},removeHeadObjs(t){e=e.filter(r=>r!==t)},updateDOM(t=window.document){let r,a={},c={};const p={};for(const y of o.headTags){if(y.tag==="title"){r=y.props.children;continue}if(y.tag==="htmlAttrs"){Object.assign(a,y.props);continue}if(y.tag==="bodyAttrs"){Object.assign(c,y.props);continue}p[y.tag]=p[y.tag]||[],p[y.tag].push(y)}r!==void 0&&(t.title=r),Ac(t.documentElement,a),Ac(t.body,c);const i=new Set([...Object.keys(p),...l]);for(const y of i)Bd(t,y,p[y]||[]);l.clear(),Object.keys(p).forEach(y=>l.add(y))}};return o},Ad=typeof window!="undefined",vd=e=>{const l=H(e),o=dd();o.addHeadObjs(l),Ad&&(tn(()=>{o.updateDOM()}),at(()=>{o.removeHeadObjs(l),o.updateDOM()}))};const Oo=Symbol("v-click-clicks"),Cl=Symbol("v-click-clicks-elements"),ir=Symbol("v-click-clicks-order-map"),Mo=Symbol("v-click-clicks-disabled"),Vi=Symbol("slidev-slide-scale"),M=Symbol("slidev-slidev-context"),Dd=Symbol("slidev-route"),gd=Symbol("slidev-slide-context"),Dl="slidev-vclick-target",xt="slidev-vclick-hidden",Cd="slidev-vclick-fade",wt="slidev-vclick-hidden-explicitly",Ao="slidev-vclick-current",Dn="slidev-vclick-prior";function yr(e,l){if(!e)return!1;const o=e.indexOf(l);return o>=0?(e.splice(o,1),!0):!1}function Ed(...e){let l,o,t;e.length===1?(l=0,t=1,[o]=e):[l,o,t=1]=e;const r=[];let a=l;for(;a<o;)r.push(a),a+=t||1;return r}function _d(e){return e!=null}function Fd(e,l){return Object.fromEntries(Object.entries(e).map(([o,t])=>l(o,t)).filter(_d))}var Fl={theme:"default",title:"Vue.js",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"};const _s=Fl;var jp;const al=(jp=_s.aspectRatio)!=null?jp:16/9;var Vp;const $l=(Vp=_s.canvasWidth)!=null?Vp:980,zi=Math.round($l/al),Hi=w(()=>Fd(_s.themeConfig||{},(e,l)=>[`--slidev-theme-${e}`,l]));function Ee(e,l,o){Object.defineProperty(e,l,{value:o,writable:!0,enumerable:!1})}const Tl=Ls({page:0,clicks:0});let bd=[],xd=[];Ee(Tl,"$syncUp",!0);Ee(Tl,"$syncDown",!0);Ee(Tl,"$paused",!1);Ee(Tl,"$onSet",e=>bd.push(e));Ee(Tl,"$onPatch",e=>xd.push(e));Ee(Tl,"$patch",async()=>!1);function Ui(e,l,o=!1){const t=[];let r=!1,a=!1,c,p;const i=Ls(l);function y(m){t.push(m)}function u(m,h){clearTimeout(c),r=!0,i[m]=h,c=setTimeout(()=>r=!1,0)}function f(m){r||(clearTimeout(p),a=!0,Object.entries(m).forEach(([h,C])=>{i[h]=C}),p=setTimeout(()=>a=!1,0))}function d(m){let h;o?o&&window.addEventListener("storage",g=>{g&&g.key===m&&g.newValue&&f(JSON.parse(g.newValue))}):(h=new BroadcastChannel(m),h.addEventListener("message",g=>f(g.data)));function C(){!o&&h&&!a?h.postMessage(Es(i)):o&&!a&&window.localStorage.setItem(m,JSON.stringify(i)),r||t.forEach(g=>g(i))}if(ys(i,C,{deep:!0}),o){const g=window.localStorage.getItem(m);g&&f(JSON.parse(g))}}return{init:d,onPatch:y,patch:u,state:i}}const{init:wd,onPatch:kd,patch:vc,state:kt}=Ui(Tl,{page:1,clicks:0}),Ll=Ls({});let $d=[],Sd=[];Ee(Ll,"$syncUp",!0);Ee(Ll,"$syncDown",!0);Ee(Ll,"$paused",!1);Ee(Ll,"$onSet",e=>$d.push(e));Ee(Ll,"$onPatch",e=>Sd.push(e));Ee(Ll,"$patch",async()=>!1);const{init:Od,onPatch:Md,patch:Wi,state:In}=Ui(Ll,{},!1),Pd="modulepreload",Dc={},Td="/vue-3-practices/",io=function(l,o){return!o||o.length===0?l():Promise.all(o.map(t=>{if(t=`${Td}${t}`,t in Dc)return;Dc[t]=!0;const r=t.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":Pd,r||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),r)return new Promise((p,i)=>{c.addEventListener("load",p),c.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>l())};function re(e,l,o){return Array.isArray(e)?(e.length=Math.max(e.length,l),e.splice(l,1,o),o):(e[l]=o,o)}function Ld(e,l){if(Array.isArray(e)){e.splice(l,1);return}delete e[l]}function fl(e){return Qy()?(su(e),!0):!1}function js(...e){return w(()=>e.every(l=>D(l)))}function ie(e){return w(()=>!D(e))}function Nd(e){if(!Fs(e))return Ls(e);const l=new Proxy({},{get(o,t,r){return D(Reflect.get(e.value,t,r))},set(o,t,r){return Fs(e.value[t])&&!Fs(r)?e.value[t].value=r:e.value[t]=r,!0},deleteProperty(o,t){return Reflect.deleteProperty(e.value,t)},has(o,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ls(l)}var gc;const Ce=typeof window!="undefined",Rd=e=>typeof e!="undefined",Id=Object.prototype.toString,jd=e=>typeof e=="number",qi=e=>typeof e=="string",jn=e=>Id.call(e)==="[object Object]",ur=()=>+Date.now(),cl=()=>{};Ce&&((gc=window==null?void 0:window.navigator)==null?void 0:gc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Vd(e,l){function o(...t){e(()=>l.apply(this,t),{fn:l,thisArg:this,args:t})}return o}const Ki=e=>e();function zd(e=Ki){const l=H(!0);function o(){l.value=!1}function t(){l.value=!0}return{isActive:l,pause:o,resume:t,eventFilter:(...a)=>{l.value&&e(...a)}}}function Hd(e,l){var o;if(typeof e=="number")return e+l;const t=((o=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",r=e.slice(t.length),a=parseFloat(t)+l;return Number.isNaN(a)?e:a+r}var Ud=Object.defineProperty,Wd=Object.defineProperties,qd=Object.getOwnPropertyDescriptors,Cc=Object.getOwnPropertySymbols,Kd=Object.prototype.hasOwnProperty,Yd=Object.prototype.propertyIsEnumerable,Ec=(e,l,o)=>l in e?Ud(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Zd=(e,l)=>{for(var o in l||(l={}))Kd.call(l,o)&&Ec(e,o,l[o]);if(Cc)for(var o of Cc(l))Yd.call(l,o)&&Ec(e,o,l[o]);return e},Jd=(e,l)=>Wd(e,qd(l));function Xd(e){if(!Fs(e))return Su(e);const l=Array.isArray(e.value)?new Array(e.value.length):{};for(const o in e.value)l[o]=$u(()=>({get(){return e.value[o]},set(t){if(Array.isArray(e.value)){const r=[...e.value];r[o]=t,e.value=r}else{const r=Jd(Zd({},e.value),{[o]:t});Object.setPrototypeOf(r,e.value),e.value=r}}}));return l}function Gd(e,l=!0){Pl()?gi(e):l?e():Ks(e)}function Qd(e,l=!0){Pl()?po(e):l?e():Ks(e)}function ta(e){Pl()&&ct(e)}function sf(e,l=1e3,o={}){const{immediate:t=!0,immediateCallback:r=!1}=o;let a=null;const c=H(!1);function p(){a&&(clearInterval(a),a=null)}function i(){c.value=!1,p()}function y(){D(l)<=0||(c.value=!0,r&&e(),p(),a=setInterval(e,D(l)))}if(t&&Ce&&y(),Fs(l)){const u=ys(l,()=>{c.value&&Ce&&y()});fl(u)}return fl(i),{isActive:c,pause:i,resume:y}}function Yi(e=!1,l={}){const{truthyValue:o=!0,falsyValue:t=!1}=l,r=Fs(e),a=H(e);function c(p){return arguments.length?(a.value=p,a.value):(a.value=a.value===D(o)?D(t):D(o),a.value)}return r?c:[a,c]}var _c=Object.getOwnPropertySymbols,ef=Object.prototype.hasOwnProperty,lf=Object.prototype.propertyIsEnumerable,of=(e,l)=>{var o={};for(var t in e)ef.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&_c)for(var t of _c(e))l.indexOf(t)<0&&lf.call(e,t)&&(o[t]=e[t]);return o};function nf(e,l,o={}){const t=o,{eventFilter:r=Ki}=t,a=of(t,["eventFilter"]);return ys(e,Vd(r,l),a)}function tf(e,l,o){const t=ys(e,(...r)=>(Ks(()=>t()),l(...r)),o)}var rf=Object.defineProperty,af=Object.defineProperties,cf=Object.getOwnPropertyDescriptors,Vn=Object.getOwnPropertySymbols,Zi=Object.prototype.hasOwnProperty,Ji=Object.prototype.propertyIsEnumerable,Fc=(e,l,o)=>l in e?rf(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,pf=(e,l)=>{for(var o in l||(l={}))Zi.call(l,o)&&Fc(e,o,l[o]);if(Vn)for(var o of Vn(l))Ji.call(l,o)&&Fc(e,o,l[o]);return e},yf=(e,l)=>af(e,cf(l)),uf=(e,l)=>{var o={};for(var t in e)Zi.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&Vn)for(var t of Vn(e))l.indexOf(t)<0&&Ji.call(e,t)&&(o[t]=e[t]);return o};function df(e,l,o={}){const t=o,{eventFilter:r}=t,a=uf(t,["eventFilter"]),{eventFilter:c,pause:p,resume:i,isActive:y}=zd(r);return{stop:nf(e,l,yf(pf({},a),{eventFilter:c})),pause:p,resume:i,isActive:y}}function ae(e){const l=D(e);return l!=null&&"$el"in l?l.$el:l}const Xs=Ce?window:void 0,ff=Ce?window.document:void 0;function Ps(...e){let l,o,t,r;if(qi(e[0])?([o,t,r]=e,l=Xs):[l,o,t,r]=e,!l)return cl;let a=cl;const c=ys(()=>ae(l),i=>{a(),i&&(i.addEventListener(o,t,r),a=()=>{i.removeEventListener(o,t,r),a=cl})},{immediate:!0,flush:"post"}),p=()=>{c(),a()};return fl(p),p}function mf(e,l,o={}){const{window:t=Xs,ignore:r,capture:a=!0}=o;if(!t)return;const c=H(!0);let p;const i=f=>{t.clearTimeout(p);const d=ae(e),m=f.composedPath();!d||d===f.target||m.includes(d)||!c.value||r&&r.length>0&&r.some(h=>{const C=ae(h);return C&&(f.target===C||m.includes(C))})||l(f)},y=[Ps(t,"click",i,{passive:!0,capture:a}),Ps(t,"pointerdown",f=>{const d=ae(e);c.value=!!d&&!f.composedPath().includes(d)},{passive:!0}),Ps(t,"pointerup",f=>{if(f.button===0){const d=f.composedPath();f.composedPath=()=>d,p=t.setTimeout(()=>i(f),50)}},{passive:!0})];return()=>y.forEach(f=>f())}const Bf=e=>typeof e=="function"?e:typeof e=="string"?l=>l.key===e:Array.isArray(e)?l=>e.includes(l.key):e?()=>!0:()=>!1;function hf(e,l,o={}){const{target:t=Xs,eventName:r="keydown",passive:a=!1}=o,c=Bf(e);return Ps(t,r,i=>{c(i)&&l(i)},a)}function Af(e={}){const{window:l=Xs}=e,o=H(0);return l&&(Ps(l,"blur",()=>o.value+=1,!0),Ps(l,"focus",()=>o.value+=1,!0)),w(()=>(o.value,l==null?void 0:l.document.activeElement))}function xn(e,l={}){const{window:o=Xs}=l,t=Boolean(o&&"matchMedia"in o);let r;const a=H(!1),c=()=>{!t||(r||(r=o.matchMedia(e)),a.value=r.matches)};return Gd(()=>{c(),r&&("addEventListener"in r?r.addEventListener("change",c):r.addListener(c),fl(()=>{"removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c)}))}),a}const vf={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Df=Object.defineProperty,bc=Object.getOwnPropertySymbols,gf=Object.prototype.hasOwnProperty,Cf=Object.prototype.propertyIsEnumerable,xc=(e,l,o)=>l in e?Df(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Ef=(e,l)=>{for(var o in l||(l={}))gf.call(l,o)&&xc(e,o,l[o]);if(bc)for(var o of bc(l))Cf.call(l,o)&&xc(e,o,l[o]);return e};function _f(e,l={}){function o(p,i){let y=e[p];return i!=null&&(y=Hd(y,i)),typeof y=="number"&&(y=`${y}px`),y}const{window:t=Xs}=l;function r(p){return t?t.matchMedia(p).matches:!1}const a=p=>xn(`(min-width: ${o(p)})`,l),c=Object.keys(e).reduce((p,i)=>(Object.defineProperty(p,i,{get:()=>a(i),enumerable:!0,configurable:!0}),p),{});return Ef({greater:a,smaller(p){return xn(`(max-width: ${o(p,-.1)})`,l)},between(p,i){return xn(`(min-width: ${o(p)}) and (max-width: ${o(i,-.1)})`,l)},isGreater(p){return r(`(min-width: ${o(p)})`)},isSmaller(p){return r(`(max-width: ${o(p,-.1)})`)},isInBetween(p,i){return r(`(min-width: ${o(p)}) and (max-width: ${o(i,-.1)})`)}},c)}const dr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},fr="__vueuse_ssr_handlers__";dr[fr]=dr[fr]||{};const Ff=dr[fr];function bf(e,l){return Ff[e]||l}function xf(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const wf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Me(e,l,o,t={}){var r;const{flush:a="pre",deep:c=!0,listenToStorageChanges:p=!0,writeDefaults:i=!0,shallow:y,window:u=Xs,eventFilter:f,onError:d=T=>{console.error(T)}}=t,m=(y?ze:H)(l);if(!o)try{o=bf("getDefaultStorage",()=>{var T;return(T=Xs)==null?void 0:T.localStorage})()}catch(T){d(T)}if(!o)return m;const h=D(l),C=xf(h),g=(r=t.serializer)!=null?r:wf[C],{pause:b,resume:_}=df(m,()=>F(m.value),{flush:a,deep:c,eventFilter:f});return u&&p&&Ps(u,"storage",j),j(),m;function F(T){try{T==null?o.removeItem(e):o.setItem(e,g.write(T))}catch(K){d(K)}}function x(T){if(!(T&&T.key!==e)){b();try{const K=T?T.newValue:o.getItem(e);return K==null?(i&&h!==null&&o.setItem(e,g.write(h)),h):typeof K!="string"?K:g.read(K)}catch(K){d(K)}finally{_()}}}function j(T){T&&T.key!==e||(m.value=x(T))}}function kf(e){return xn("(prefers-color-scheme: dark)",e)}var $f=Object.defineProperty,Sf=Object.defineProperties,Of=Object.getOwnPropertyDescriptors,wc=Object.getOwnPropertySymbols,Mf=Object.prototype.hasOwnProperty,Pf=Object.prototype.propertyIsEnumerable,kc=(e,l,o)=>l in e?$f(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Tf=(e,l)=>{for(var o in l||(l={}))Mf.call(l,o)&&kc(e,o,l[o]);if(wc)for(var o of wc(l))Pf.call(l,o)&&kc(e,o,l[o]);return e},Lf=(e,l)=>Sf(e,Of(l));function lF(e,l={}){var o,t;const r=(o=l.draggingElement)!=null?o:Xs,a=H((t=l.initialValue)!=null?t:{x:0,y:0}),c=H(),p=d=>l.pointerTypes?l.pointerTypes.includes(d.pointerType):!0,i=d=>{D(l.preventDefault)&&d.preventDefault(),D(l.stopPropagation)&&d.stopPropagation()},y=d=>{var m;if(!p(d)||D(l.exact)&&d.target!==D(e))return;const h=D(e).getBoundingClientRect(),C={x:d.pageX-h.left,y:d.pageY-h.top};((m=l.onStart)==null?void 0:m.call(l,C,d))!==!1&&(c.value=C,i(d))},u=d=>{var m;!p(d)||!c.value||(a.value={x:d.pageX-c.value.x,y:d.pageY-c.value.y},(m=l.onMove)==null||m.call(l,a.value,d),i(d))},f=d=>{var m;!p(d)||!c.value||(c.value=void 0,(m=l.onEnd)==null||m.call(l,a.value,d),i(d))};return Ce&&(Ps(e,"pointerdown",y,!0),Ps(r,"pointermove",u,!0),Ps(r,"pointerup",f,!0)),Lf(Tf({},Xd(a)),{position:a,isDragging:w(()=>!!c.value),style:w(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var $c=Object.getOwnPropertySymbols,Nf=Object.prototype.hasOwnProperty,Rf=Object.prototype.propertyIsEnumerable,If=(e,l)=>{var o={};for(var t in e)Nf.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&$c)for(var t of $c(e))l.indexOf(t)<0&&Rf.call(e,t)&&(o[t]=e[t]);return o};function jf(e,l,o={}){const t=o,{window:r=Xs}=t,a=If(t,["window"]);let c;const p=r&&"ResizeObserver"in r,i=()=>{c&&(c.disconnect(),c=void 0)},y=ys(()=>ae(e),f=>{i(),p&&r&&f&&(c=new ResizeObserver(l),c.observe(f,a))},{immediate:!0,flush:"post"}),u=()=>{i(),y()};return fl(u),{isSupported:p,stop:u}}function Xi(e,l={}){const{immediate:o=!0,window:t=Xs}=l,r=H(!1);let a=null;function c(){!r.value||!t||(e(),a=t.requestAnimationFrame(c))}function p(){!r.value&&t&&(r.value=!0,c())}function i(){r.value=!1,a!=null&&t&&(t.cancelAnimationFrame(a),a=null)}return o&&p(),fl(i),{isActive:r,pause:i,resume:p}}function Vf(e,l={width:0,height:0},o={}){const t=H(l.width),r=H(l.height);return jf(e,([a])=>{t.value=a.contentRect.width,r.value=a.contentRect.height},o),ys(()=>ae(e),a=>{t.value=a?l.width:0,r.value=a?l.height:0}),{width:t,height:r}}const Sc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function zf(e,l={}){const{document:o=ff,autoExit:t=!1}=l,r=e||(o==null?void 0:o.querySelector("html")),a=H(!1);let c=!1,p=Sc[0];if(!o)c=!1;else for(const C of Sc)if(C[1]in o){p=C,c=!0;break}const[i,y,u,,f]=p;async function d(){!c||(o!=null&&o[u]&&await o[y](),a.value=!1)}async function m(){if(!c)return;await d();const C=ae(r);C&&(await C[i](),a.value=!0)}async function h(){a.value?await d():await m()}return o&&Ps(o,f,()=>{a.value=!!(o!=null&&o[u])},!1),t&&fl(d),{isSupported:c,isFullscreen:a,enter:m,exit:d,toggle:h}}function Hf(e,l,o={}){const{root:t,rootMargin:r="0px",threshold:a=.1,window:c=Xs}=o,p=c&&"IntersectionObserver"in c;let i=cl;const y=p?ys(()=>({el:ae(e),root:ae(t)}),({el:f,root:d})=>{if(i(),!f)return;const m=new IntersectionObserver(l,{root:d,rootMargin:r,threshold:a});m.observe(f),i=()=>{m.disconnect(),i=cl}},{immediate:!0,flush:"post"}):cl,u=()=>{i(),y()};return fl(u),{isSupported:p,stop:u}}const Uf={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Wf(e={}){const{reactive:l=!1,target:o=Xs,aliasMap:t=Uf,passive:r=!0,onEventFired:a=cl}=e,c=Ls(new Set),p={toJSON(){return{}},current:c},i=l?Ls(p):p,y=new Set;function u(m,h){m in i&&(l?i[m]=h:i[m].value=h)}function f(m,h){var C,g;const b=(C=m.key)==null?void 0:C.toLowerCase(),_=(g=m.code)==null?void 0:g.toLowerCase(),F=[_,b].filter(Boolean);_&&(h?c.add(m.code):c.delete(m.code));for(const x of F)u(x,h);b==="meta"&&!h?(y.forEach(x=>{c.delete(x),u(x,!1)}),y.clear()):typeof m.getModifierState=="function"&&m.getModifierState("Meta")&&h&&[...c,...F].forEach(x=>y.add(x))}o&&(Ps(o,"keydown",m=>(f(m,!0),a(m)),{passive:r}),Ps(o,"keyup",m=>(f(m,!1),a(m)),{passive:r}));const d=new Proxy(i,{get(m,h,C){if(typeof h!="string")return Reflect.get(m,h,C);if(h=h.toLowerCase(),h in t&&(h=t[h]),!(h in i))if(/[+_-]/.test(h)){const b=h.split(/[+_-]/g).map(_=>_.trim());i[h]=w(()=>b.every(_=>D(d[_])))}else i[h]=H(!1);const g=Reflect.get(m,h,C);return l?D(g):g}});return d}function oF(e={}){const{type:l="page",touch:o=!0,resetOnTouchEnds:t=!1,initialValue:r={x:0,y:0},window:a=Xs,eventFilter:c}=e,p=H(r.x),i=H(r.y),y=H(null),u=C=>{l==="page"?(p.value=C.pageX,i.value=C.pageY):l==="client"&&(p.value=C.clientX,i.value=C.clientY),y.value="mouse"},f=()=>{p.value=r.x,i.value=r.y},d=C=>{if(C.touches.length>0){const g=C.touches[0];l==="page"?(p.value=g.pageX,i.value=g.pageY):l==="client"&&(p.value=g.clientX,i.value=g.clientY),y.value="touch"}},m=C=>c===void 0?u(C):c(()=>u(C),{}),h=C=>c===void 0?d(C):c(()=>d(C),{});return a&&(Ps(a,"mousemove",m,{passive:!0}),Ps(a,"dragover",m,{passive:!0}),o&&(Ps(a,"touchstart",h,{passive:!0}),Ps(a,"touchmove",h,{passive:!0}),t&&Ps(a,"touchend",f,{passive:!0}))),{x:p,y:i,sourceType:y}}var Ke;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ke||(Ke={}));function qf(e,l={}){const o=H(e),{threshold:t=50,onSwipe:r,onSwipeEnd:a,onSwipeStart:c}=l,p=Ls({x:0,y:0}),i=(T,K)=>{p.x=T,p.y=K},y=Ls({x:0,y:0}),u=(T,K)=>{y.x=T,y.y=K},f=w(()=>p.x-y.x),d=w(()=>p.y-y.y),{max:m,abs:h}=Math,C=w(()=>m(h(f.value),h(d.value))>=t),g=H(!1),b=H(!1),_=w(()=>C.value?h(f.value)>h(d.value)?f.value>0?Ke.LEFT:Ke.RIGHT:d.value>0?Ke.UP:Ke.DOWN:Ke.NONE),F=T=>l.pointerTypes?l.pointerTypes.includes(T.pointerType):!0,x=[Ps(e,"pointerdown",T=>{var K,as;if(!F(T))return;b.value=!0,(as=(K=o.value)==null?void 0:K.style)==null||as.setProperty("touch-action","none");const us=T.target;us==null||us.setPointerCapture(T.pointerId);const{clientX:ms,clientY:As}=T;i(ms,As),u(ms,As),c==null||c(T)}),Ps(e,"pointermove",T=>{if(!F(T)||!b.value)return;const{clientX:K,clientY:as}=T;u(K,as),!g.value&&C.value&&(g.value=!0),g.value&&(r==null||r(T))}),Ps(e,"pointerup",T=>{var K,as;!F(T)||(g.value&&(a==null||a(T,_.value)),b.value=!1,g.value=!1,(as=(K=o.value)==null?void 0:K.style)==null||as.setProperty("touch-action","initial"))})],j=()=>x.forEach(T=>T());return{isSwiping:ql(g),direction:ql(_),posStart:ql(p),posEnd:ql(y),distanceX:f,distanceY:d,stop:j}}var Kf=Object.defineProperty,Oc=Object.getOwnPropertySymbols,Yf=Object.prototype.hasOwnProperty,Zf=Object.prototype.propertyIsEnumerable,Mc=(e,l,o)=>l in e?Kf(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Jf=(e,l)=>{for(var o in l||(l={}))Yf.call(l,o)&&Mc(e,o,l[o]);if(Oc)for(var o of Oc(l))Zf.call(l,o)&&Mc(e,o,l[o]);return e};function nF(e={}){const{controls:l=!1,offset:o=0,immediate:t=!0,interval:r="requestAnimationFrame"}=e,a=H(ur()+o),c=()=>a.value=ur()+o,p=r==="requestAnimationFrame"?Xi(c,{immediate:t}):sf(c,r,{immediate:t});return l?Jf({timestamp:a},p):a}function Ie(e,l,o,t={}){var r;const{passive:a=!1,eventName:c,deep:p=!1,defaultValue:i}=t,y=Pl(),u=o||(y==null?void 0:y.emit)||((r=y==null?void 0:y.$emit)==null?void 0:r.bind(y));let f=c;l||(l="modelValue"),f=c||f||`update:${l.toString()}`;const d=()=>Rd(e[l])?e[l]:i;if(a){const m=H(d());return ys(()=>e[l],h=>m.value=h),ys(m,h=>{(h!==e[l]||p)&&u(f,h)},{deep:p}),m}else return w({get(){return d()},set(m){u(f,m)}})}function tF({window:e=Xs}={}){if(!e)return H(!1);const l=H(e.document.hasFocus());return Ps(e,"blur",()=>{l.value=!1}),Ps(e,"focus",()=>{l.value=!0}),l}function Xf({window:e=Xs,initialWidth:l=1/0,initialHeight:o=1/0}={}){const t=H(l),r=H(o),a=()=>{e&&(t.value=e.innerWidth,r.value=e.innerHeight)};return a(),Qd(a),Ps("resize",a,{passive:!0}),{width:t,height:r}}/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gi=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",yo=e=>Gi?Symbol(e):"_vr_"+e,Gf=yo("rvlm"),Pc=yo("rvd"),ra=yo("r"),Qi=yo("rl"),mr=yo("rvl"),Wl=typeof window!="undefined";function Qf(e){return e.__esModule||Gi&&e[Symbol.toStringTag]==="Module"}const $s=Object.assign;function $t(e,l){const o={};for(const t in l){const r=l[t];o[t]=Array.isArray(r)?r.map(e):e(r)}return o}const Po=()=>{},sm=/\/$/,em=e=>e.replace(sm,"");function St(e,l,o="/"){let t,r={},a="",c="";const p=l.indexOf("?"),i=l.indexOf("#",p>-1?p:0);return p>-1&&(t=l.slice(0,p),a=l.slice(p+1,i>-1?i:l.length),r=e(a)),i>-1&&(t=t||l.slice(0,i),c=l.slice(i,l.length)),t=tm(t!=null?t:l,o),{fullPath:t+(a&&"?")+a+c,path:t,query:r,hash:c}}function lm(e,l){const o=l.query?e(l.query):"";return l.path+(o&&"?")+o+(l.hash||"")}function Tc(e,l){return!l||!e.toLowerCase().startsWith(l.toLowerCase())?e:e.slice(l.length)||"/"}function om(e,l,o){const t=l.matched.length-1,r=o.matched.length-1;return t>-1&&t===r&&no(l.matched[t],o.matched[r])&&s8(l.params,o.params)&&e(l.query)===e(o.query)&&l.hash===o.hash}function no(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function s8(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const o in e)if(!nm(e[o],l[o]))return!1;return!0}function nm(e,l){return Array.isArray(e)?Lc(e,l):Array.isArray(l)?Lc(l,e):e===l}function Lc(e,l){return Array.isArray(l)?e.length===l.length&&e.every((o,t)=>o===l[t]):e.length===1&&e[0]===l}function tm(e,l){if(e.startsWith("/"))return e;if(!e)return l;const o=l.split("/"),t=e.split("/");let r=o.length-1,a,c;for(a=0;a<t.length;a++)if(c=t[a],!(r===1||c==="."))if(c==="..")r--;else break;return o.slice(0,r).join("/")+"/"+t.slice(a-(a===t.length?1:0)).join("/")}var Jo;(function(e){e.pop="pop",e.push="push"})(Jo||(Jo={}));var To;(function(e){e.back="back",e.forward="forward",e.unknown=""})(To||(To={}));function rm(e){if(!e)if(Wl){const l=document.querySelector("base");e=l&&l.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),em(e)}const am=/^[^#]+#/;function cm(e,l){return e.replace(am,"#")+l}function pm(e,l){const o=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:l.behavior,left:t.left-o.left-(l.left||0),top:t.top-o.top-(l.top||0)}}const yt=()=>({left:window.pageXOffset,top:window.pageYOffset});function im(e){let l;if("el"in e){const o=e.el,t=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?t?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;l=pm(r,e)}else l=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function Nc(e,l){return(history.state?history.state.position-l:-1)+e}const Br=new Map;function ym(e,l){Br.set(e,l)}function um(e){const l=Br.get(e);return Br.delete(e),l}let dm=()=>location.protocol+"//"+location.host;function e8(e,l){const{pathname:o,search:t,hash:r}=l,a=e.indexOf("#");if(a>-1){let p=r.includes(e.slice(a))?e.slice(a).length:1,i=r.slice(p);return i[0]!=="/"&&(i="/"+i),Tc(i,"")}return Tc(o,e)+t+r}function fm(e,l,o,t){let r=[],a=[],c=null;const p=({state:d})=>{const m=e8(e,location),h=o.value,C=l.value;let g=0;if(d){if(o.value=m,l.value=d,c&&c===h){c=null;return}g=C?d.position-C.position:0}else t(m);r.forEach(b=>{b(o.value,h,{delta:g,type:Jo.pop,direction:g?g>0?To.forward:To.back:To.unknown})})};function i(){c=o.value}function y(d){r.push(d);const m=()=>{const h=r.indexOf(d);h>-1&&r.splice(h,1)};return a.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState($s({},d.state,{scroll:yt()}),"")}function f(){for(const d of a)d();a=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:y,destroy:f}}function Rc(e,l,o,t=!1,r=!1){return{back:e,current:l,forward:o,replaced:t,position:window.history.length,scroll:r?yt():null}}function mm(e){const{history:l,location:o}=window,t={value:e8(e,o)},r={value:l.state};r.value||a(t.value,{back:null,current:t.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function a(i,y,u){const f=e.indexOf("#"),d=f>-1?(o.host&&document.querySelector("base")?e:e.slice(f))+i:dm()+e+i;try{l[u?"replaceState":"pushState"](y,"",d),r.value=y}catch(m){console.error(m),o[u?"replace":"assign"](d)}}function c(i,y){const u=$s({},l.state,Rc(r.value.back,i,r.value.forward,!0),y,{position:r.value.position});a(i,u,!0),t.value=i}function p(i,y){const u=$s({},r.value,l.state,{forward:i,scroll:yt()});a(u.current,u,!0);const f=$s({},Rc(t.value,i,null),{position:u.position+1},y);a(i,f,!1),t.value=i}return{location:t,state:r,push:p,replace:c}}function Bm(e){e=rm(e);const l=mm(e),o=fm(e,l.state,l.location,l.replace);function t(a,c=!0){c||o.pauseListeners(),history.go(a)}const r=$s({location:"",base:e,go:t,createHref:cm.bind(null,e)},l,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>l.state.value}),r}function hm(e){return typeof e=="string"||e&&typeof e=="object"}function l8(e){return typeof e=="string"||typeof e=="symbol"}const Qe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},o8=yo("nf");var Ic;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ic||(Ic={}));function to(e,l){return $s(new Error,{type:e,[o8]:!0},l)}function sl(e,l){return e instanceof Error&&o8 in e&&(l==null||!!(e.type&l))}const jc="[^/]+?",Am={sensitive:!1,strict:!1,start:!0,end:!0},vm=/[.+*?^${}()[\]/\\]/g;function Dm(e,l){const o=$s({},Am,l),t=[];let r=o.start?"^":"";const a=[];for(const y of e){const u=y.length?[]:[90];o.strict&&!y.length&&(r+="/");for(let f=0;f<y.length;f++){const d=y[f];let m=40+(o.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(vm,"\\$&"),m+=40;else if(d.type===1){const{value:h,repeatable:C,optional:g,regexp:b}=d;a.push({name:h,repeatable:C,optional:g});const _=b||jc;if(_!==jc){m+=10;try{new RegExp(`(${_})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${h}" (${_}): `+x.message)}}let F=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(F=g&&y.length<2?`(?:/${F})`:"/"+F),g&&(F+="?"),r+=F,m+=20,g&&(m+=-8),C&&(m+=-20),_===".*"&&(m+=-50)}u.push(m)}t.push(u)}if(o.strict&&o.end){const y=t.length-1;t[y][t[y].length-1]+=.7000000000000001}o.strict||(r+="/?"),o.end?r+="$":o.strict&&(r+="(?:/|$)");const c=new RegExp(r,o.sensitive?"":"i");function p(y){const u=y.match(c),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",h=a[d-1];f[h.name]=m&&h.repeatable?m.split("/"):m}return f}function i(y){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:h,repeatable:C,optional:g}=m,b=h in y?y[h]:"";if(Array.isArray(b)&&!C)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(b)?b.join("/"):b;if(!_)if(g)d.length<2&&e.length>1&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);u+=_}}return u}return{re:c,score:t,keys:a,parse:p,stringify:i}}function gm(e,l){let o=0;for(;o<e.length&&o<l.length;){const t=l[o]-e[o];if(t)return t;o++}return e.length<l.length?e.length===1&&e[0]===40+40?-1:1:e.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function Cm(e,l){let o=0;const t=e.score,r=l.score;for(;o<t.length&&o<r.length;){const a=gm(t[o],r[o]);if(a)return a;o++}if(Math.abs(r.length-t.length)===1){if(Vc(t))return 1;if(Vc(r))return-1}return r.length-t.length}function Vc(e){const l=e[e.length-1];return e.length>0&&l[l.length-1]<0}const Em={type:0,value:""},_m=/[a-zA-Z0-9_]/;function Fm(e){if(!e)return[[]];if(e==="/")return[[Em]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function l(m){throw new Error(`ERR (${o})/"${y}": ${m}`)}let o=0,t=o;const r=[];let a;function c(){a&&r.push(a),a=[]}let p=0,i,y="",u="";function f(){!y||(o===0?a.push({type:0,value:y}):o===1||o===2||o===3?(a.length>1&&(i==="*"||i==="+")&&l(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:y,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):l("Invalid state to consume buffer"),y="")}function d(){y+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&o!==2){t=o,o=4;continue}switch(o){case 0:i==="/"?(y&&f(),c()):i===":"?(f(),o=1):d();break;case 4:d(),o=t;break;case 1:i==="("?o=2:_m.test(i)?d():(f(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:o=3:u+=i;break;case 3:f(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,u="";break;default:l("Unknown state");break}}return o===2&&l(`Unfinished custom RegExp for param "${y}"`),f(),c(),r}function bm(e,l,o){const t=Dm(Fm(e.path),o),r=$s(t,{record:e,parent:l,children:[],alias:[]});return l&&!r.record.aliasOf==!l.record.aliasOf&&l.children.push(r),r}function xm(e,l){const o=[],t=new Map;l=Hc({strict:!1,end:!0,sensitive:!1},l);function r(u){return t.get(u)}function a(u,f,d){const m=!d,h=km(u);h.aliasOf=d&&d.record;const C=Hc(l,u),g=[h];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of F)g.push($s({},h,{components:d?d.record.components:h.components,path:x,aliasOf:d?d.record:h}))}let b,_;for(const F of g){const{path:x}=F;if(f&&x[0]!=="/"){const j=f.record.path,T=j[j.length-1]==="/"?"":"/";F.path=f.record.path+(x&&T+x)}if(b=bm(F,f,C),d?d.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),m&&u.name&&!zc(b)&&c(u.name)),"children"in h){const j=h.children;for(let T=0;T<j.length;T++)a(j[T],b,d&&d.children[T])}d=d||b,i(b)}return _?()=>{c(_)}:Po}function c(u){if(l8(u)){const f=t.get(u);f&&(t.delete(u),o.splice(o.indexOf(f),1),f.children.forEach(c),f.alias.forEach(c))}else{const f=o.indexOf(u);f>-1&&(o.splice(f,1),u.record.name&&t.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function p(){return o}function i(u){let f=0;for(;f<o.length&&Cm(u,o[f])>=0&&(u.record.path!==o[f].record.path||!n8(u,o[f]));)f++;o.splice(f,0,u),u.record.name&&!zc(u)&&t.set(u.record.name,u)}function y(u,f){let d,m={},h,C;if("name"in u&&u.name){if(d=t.get(u.name),!d)throw to(1,{location:u});C=d.record.name,m=$s(wm(f.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),u.params),h=d.stringify(m)}else if("path"in u)h=u.path,d=o.find(_=>_.re.test(h)),d&&(m=d.parse(h),C=d.record.name);else{if(d=f.name?t.get(f.name):o.find(_=>_.re.test(f.path)),!d)throw to(1,{location:u,currentLocation:f});C=d.record.name,m=$s({},f.params,u.params),h=d.stringify(m)}const g=[];let b=d;for(;b;)g.unshift(b.record),b=b.parent;return{name:C,path:h,params:m,matched:g,meta:Sm(g)}}return e.forEach(u=>a(u)),{addRoute:a,resolve:y,removeRoute:c,getRoutes:p,getRecordMatcher:r}}function wm(e,l){const o={};for(const t of l)t in e&&(o[t]=e[t]);return o}function km(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$m(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function $m(e){const l={},o=e.props||!1;if("component"in e)l.default=o;else for(const t in e.components)l[t]=typeof o=="boolean"?o:o[t];return l}function zc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Sm(e){return e.reduce((l,o)=>$s(l,o.meta),{})}function Hc(e,l){const o={};for(const t in e)o[t]=t in l?l[t]:e[t];return o}function n8(e,l){return l.children.some(o=>o===e||n8(e,o))}const t8=/#/g,Om=/&/g,Mm=/\//g,Pm=/=/g,Tm=/\?/g,r8=/\+/g,Lm=/%5B/g,Nm=/%5D/g,a8=/%5E/g,Rm=/%60/g,c8=/%7B/g,Im=/%7C/g,p8=/%7D/g,jm=/%20/g;function aa(e){return encodeURI(""+e).replace(Im,"|").replace(Lm,"[").replace(Nm,"]")}function Vm(e){return aa(e).replace(c8,"{").replace(p8,"}").replace(a8,"^")}function hr(e){return aa(e).replace(r8,"%2B").replace(jm,"+").replace(t8,"%23").replace(Om,"%26").replace(Rm,"`").replace(c8,"{").replace(p8,"}").replace(a8,"^")}function zm(e){return hr(e).replace(Pm,"%3D")}function Hm(e){return aa(e).replace(t8,"%23").replace(Tm,"%3F")}function Um(e){return e==null?"":Hm(e).replace(Mm,"%2F")}function zn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Wm(e){const l={};if(e===""||e==="?")return l;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const a=t[r].replace(r8," "),c=a.indexOf("="),p=zn(c<0?a:a.slice(0,c)),i=c<0?null:zn(a.slice(c+1));if(p in l){let y=l[p];Array.isArray(y)||(y=l[p]=[y]),y.push(i)}else l[p]=i}return l}function Uc(e){let l="";for(let o in e){const t=e[o];if(o=zm(o),t==null){t!==void 0&&(l+=(l.length?"&":"")+o);continue}(Array.isArray(t)?t.map(a=>a&&hr(a)):[t&&hr(t)]).forEach(a=>{a!==void 0&&(l+=(l.length?"&":"")+o,a!=null&&(l+="="+a))})}return l}function qm(e){const l={};for(const o in e){const t=e[o];t!==void 0&&(l[o]=Array.isArray(t)?t.map(r=>r==null?null:""+r):t==null?t:""+t)}return l}function vo(){let e=[];function l(t){return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:l,list:()=>e,reset:o}}function ol(e,l,o,t,r){const a=t&&(t.enterCallbacks[r]=t.enterCallbacks[r]||[]);return()=>new Promise((c,p)=>{const i=f=>{f===!1?p(to(4,{from:o,to:l})):f instanceof Error?p(f):hm(f)?p(to(2,{from:l,to:f})):(a&&t.enterCallbacks[r]===a&&typeof f=="function"&&a.push(f),c())},y=e.call(t&&t.instances[r],l,o,i);let u=Promise.resolve(y);e.length<3&&(u=u.then(i)),u.catch(f=>p(f))})}function Ot(e,l,o,t){const r=[];for(const a of e)for(const c in a.components){let p=a.components[c];if(!(l!=="beforeRouteEnter"&&!a.instances[c]))if(Km(p)){const y=(p.__vccOpts||p)[l];y&&r.push(ol(y,o,t,a,c))}else{let i=p();r.push(()=>i.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const u=Qf(y)?y.default:y;a.components[c]=u;const d=(u.__vccOpts||u)[l];return d&&ol(d,o,t,a,c)()}))}}return r}function Km(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wc(e){const l=$(ra),o=$(Qi),t=w(()=>l.resolve(D(e.to))),r=w(()=>{const{matched:i}=t.value,{length:y}=i,u=i[y-1],f=o.matched;if(!u||!f.length)return-1;const d=f.findIndex(no.bind(null,u));if(d>-1)return d;const m=qc(i[y-2]);return y>1&&qc(u)===m&&f[f.length-1].path!==m?f.findIndex(no.bind(null,i[y-2])):d}),a=w(()=>r.value>-1&&Xm(o.params,t.value.params)),c=w(()=>r.value>-1&&r.value===o.matched.length-1&&s8(o.params,t.value.params));function p(i={}){return Jm(i)?l[D(e.replace)?"replace":"push"](D(e.to)).catch(Po):Promise.resolve()}return{route:t,href:w(()=>t.value.href),isActive:a,isExactActive:c,navigate:p}}const Ym=bs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wc,setup(e,{slots:l}){const o=Ls(Wc(e)),{options:t}=$(ra),r=w(()=>({[Kc(e.activeClass,t.linkActiveClass,"router-link-active")]:o.isActive,[Kc(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const a=l.default&&l.default(o);return e.custom?a:Se("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},a)}}}),Zm=Ym;function Jm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const l=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return e.preventDefault&&e.preventDefault(),!0}}function Xm(e,l){for(const o in l){const t=l[o],r=e[o];if(typeof t=="string"){if(t!==r)return!1}else if(!Array.isArray(r)||r.length!==t.length||t.some((a,c)=>a!==r[c]))return!1}return!0}function qc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Kc=(e,l,o)=>e!=null?e:l!=null?l:o,Gm=bs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:l,slots:o}){const t=$(mr),r=w(()=>e.route||t.value),a=$(Pc,0),c=w(()=>r.value.matched[a]);de(Pc,a+1),de(Gf,c),de(mr,r);const p=H();return ys(()=>[p.value,c.value,e.name],([i,y,u],[f,d,m])=>{y&&(y.instances[u]=i,d&&d!==y&&i&&i===f&&(y.leaveGuards.size||(y.leaveGuards=d.leaveGuards),y.updateGuards.size||(y.updateGuards=d.updateGuards))),i&&y&&(!d||!no(y,d)||!f)&&(y.enterCallbacks[u]||[]).forEach(h=>h(i))},{flush:"post"}),()=>{const i=r.value,y=c.value,u=y&&y.components[e.name],f=e.name;if(!u)return Yc(o.default,{Component:u,route:i});const d=y.props[e.name],m=d?d===!0?i.params:typeof d=="function"?d(i):d:null,C=Se(u,$s({},m,l,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(y.instances[f]=null)},ref:p}));return Yc(o.default,{Component:C,route:i})||C}}});function Yc(e,l){if(!e)return null;const o=e(l);return o.length===1?o[0]:o}const Qm=Gm;function s3(e){const l=xm(e.routes,e),o=e.parseQuery||Wm,t=e.stringifyQuery||Uc,r=e.history,a=vo(),c=vo(),p=vo(),i=ze(Qe);let y=Qe;Wl&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$t.bind(null,k=>""+k),f=$t.bind(null,Um),d=$t.bind(null,zn);function m(k,J){let N,Q;return l8(k)?(N=l.getRecordMatcher(k),Q=J):Q=k,l.addRoute(Q,N)}function h(k){const J=l.getRecordMatcher(k);J&&l.removeRoute(J)}function C(){return l.getRoutes().map(k=>k.record)}function g(k){return!!l.getRecordMatcher(k)}function b(k,J){if(J=$s({},J||i.value),typeof k=="string"){const is=St(o,k,J.path),B=l.resolve({path:is.path},J),A=r.createHref(is.fullPath);return $s(is,B,{params:d(B.params),hash:zn(is.hash),redirectedFrom:void 0,href:A})}let N;if("path"in k)N=$s({},k,{path:St(o,k.path,J.path).path});else{const is=$s({},k.params);for(const B in is)is[B]==null&&delete is[B];N=$s({},k,{params:f(k.params)}),J.params=f(J.params)}const Q=l.resolve(N,J),Ds=k.hash||"";Q.params=u(d(Q.params));const Os=lm(t,$s({},k,{hash:Vm(Ds),path:Q.path})),ds=r.createHref(Os);return $s({fullPath:Os,hash:Ds,query:t===Uc?qm(k.query):k.query||{}},Q,{redirectedFrom:void 0,href:ds})}function _(k){return typeof k=="string"?St(o,k,i.value.path):$s({},k)}function F(k,J){if(y!==k)return to(8,{from:J,to:k})}function x(k){return K(k)}function j(k){return x($s(_(k),{replace:!0}))}function T(k){const J=k.matched[k.matched.length-1];if(J&&J.redirect){const{redirect:N}=J;let Q=typeof N=="function"?N(k):N;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=_(Q):{path:Q},Q.params={}),$s({query:k.query,hash:k.hash,params:k.params},Q)}}function K(k,J){const N=y=b(k),Q=i.value,Ds=k.state,Os=k.force,ds=k.replace===!0,is=T(N);if(is)return K($s(_(is),{state:Ds,force:Os,replace:ds}),J||N);const B=N;B.redirectedFrom=J;let A;return!Os&&om(t,Q,N)&&(A=to(16,{to:B,from:Q}),Te(Q,Q,!0,!1)),(A?Promise.resolve(A):us(B,Q)).catch(E=>sl(E)?sl(E,2)?E:Bs(E):ts(E,B,Q)).then(E=>{if(E){if(sl(E,2))return K($s(_(E.to),{state:Ds,force:Os,replace:ds}),J||B)}else E=As(B,Q,!0,ds,Ds);return ms(B,Q,E),E})}function as(k,J){const N=F(k,J);return N?Promise.reject(N):Promise.resolve()}function us(k,J){let N;const[Q,Ds,Os]=e3(k,J);N=Ot(Q.reverse(),"beforeRouteLeave",k,J);for(const is of Q)is.leaveGuards.forEach(B=>{N.push(ol(B,k,J))});const ds=as.bind(null,k,J);return N.push(ds),Il(N).then(()=>{N=[];for(const is of a.list())N.push(ol(is,k,J));return N.push(ds),Il(N)}).then(()=>{N=Ot(Ds,"beforeRouteUpdate",k,J);for(const is of Ds)is.updateGuards.forEach(B=>{N.push(ol(B,k,J))});return N.push(ds),Il(N)}).then(()=>{N=[];for(const is of k.matched)if(is.beforeEnter&&!J.matched.includes(is))if(Array.isArray(is.beforeEnter))for(const B of is.beforeEnter)N.push(ol(B,k,J));else N.push(ol(is.beforeEnter,k,J));return N.push(ds),Il(N)}).then(()=>(k.matched.forEach(is=>is.enterCallbacks={}),N=Ot(Os,"beforeRouteEnter",k,J),N.push(ds),Il(N))).then(()=>{N=[];for(const is of c.list())N.push(ol(is,k,J));return N.push(ds),Il(N)}).catch(is=>sl(is,8)?is:Promise.reject(is))}function ms(k,J,N){for(const Q of p.list())Q(k,J,N)}function As(k,J,N,Q,Ds){const Os=F(k,J);if(Os)return Os;const ds=J===Qe,is=Wl?history.state:{};N&&(Q||ds?r.replace(k.fullPath,$s({scroll:ds&&is&&is.scroll},Ds)):r.push(k.fullPath,Ds)),i.value=k,Te(k,J,N,ds),Bs()}let Ts;function Is(){Ts||(Ts=r.listen((k,J,N)=>{const Q=b(k),Ds=T(Q);if(Ds){K($s(Ds,{replace:!0}),Q).catch(Po);return}y=Q;const Os=i.value;Wl&&ym(Nc(Os.fullPath,N.delta),yt()),us(Q,Os).catch(ds=>sl(ds,12)?ds:sl(ds,2)?(K(ds.to,Q).then(is=>{sl(is,20)&&!N.delta&&N.type===Jo.pop&&r.go(-1,!1)}).catch(Po),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ts(ds,Q,Os))).then(ds=>{ds=ds||As(Q,Os,!1),ds&&(N.delta?r.go(-N.delta,!1):N.type===Jo.pop&&sl(ds,20)&&r.go(-1,!1)),ms(Q,Os,ds)}).catch(Po)}))}let Ys=vo(),xs=vo(),os;function ts(k,J,N){Bs(k);const Q=xs.list();return Q.length?Q.forEach(Ds=>Ds(k,J,N)):console.error(k),Promise.reject(k)}function ls(){return os&&i.value!==Qe?Promise.resolve():new Promise((k,J)=>{Ys.add([k,J])})}function Bs(k){return os||(os=!k,Is(),Ys.list().forEach(([J,N])=>k?N(k):J()),Ys.reset()),k}function Te(k,J,N,Q){const{scrollBehavior:Ds}=e;if(!Wl||!Ds)return Promise.resolve();const Os=!N&&um(Nc(k.fullPath,0))||(Q||!N)&&history.state&&history.state.scroll||null;return Ks().then(()=>Ds(k,J,Os)).then(ds=>ds&&im(ds)).catch(ds=>ts(ds,k,J))}const Gs=k=>r.go(k);let Ae;const te=new Set;return{currentRoute:i,addRoute:m,removeRoute:h,hasRoute:g,getRoutes:C,resolve:b,options:e,push:x,replace:j,go:Gs,back:()=>Gs(-1),forward:()=>Gs(1),beforeEach:a.add,beforeResolve:c.add,afterEach:p.add,onError:xs.add,isReady:ls,install(k){const J=this;k.component("RouterLink",Zm),k.component("RouterView",Qm),k.config.globalProperties.$router=J,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>D(i)}),Wl&&!Ae&&i.value===Qe&&(Ae=!0,x(r.location).catch(Ds=>{}));const N={};for(const Ds in Qe)N[Ds]=w(()=>i.value[Ds]);k.provide(ra,J),k.provide(Qi,Ls(N)),k.provide(mr,i);const Q=k.unmount;te.add(k),k.unmount=function(){te.delete(k),te.size<1&&(y=Qe,Ts&&Ts(),Ts=null,i.value=Qe,Ae=!1,os=!1),Q()}}}}function Il(e){return e.reduce((l,o)=>l.then(()=>o()),Promise.resolve())}function e3(e,l){const o=[],t=[],r=[],a=Math.max(l.matched.length,e.matched.length);for(let c=0;c<a;c++){const p=l.matched[c];p&&(e.matched.find(y=>no(y,p))?t.push(p):o.push(p));const i=e.matched[c];i&&(l.matched.find(y=>no(y,i))||r.push(i))}return[o,t,r]}const Mt=H(!1),Lo=H(!1),Kl=H(!1),l3=H(!0),Ar=_f(gs({xs:460},vf)),Sl=Xf(),i8=Wf(),o3=w(()=>Sl.height.value-Sl.width.value/al>180),y8=zf(Ce?document.body:null),Ql=Af(),n3=w(()=>{var e,l;return["INPUT","TEXTAREA"].includes(((e=Ql.value)==null?void 0:e.tagName)||"")||((l=Ql.value)==null?void 0:l.classList.contains("CodeMirror-code"))}),t3=w(()=>{var e;return["BUTTON","A"].includes(((e=Ql.value)==null?void 0:e.tagName)||"")});Me("slidev-camera","default");Me("slidev-mic","default");const wn=Me("slidev-scale",0),ee=Me("slidev-show-overview",!1),Pt=Me("slidev-presenter-cursor",!0),Zc=Me("slidev-show-editor",!1);Me("slidev-editor-width",Ce?window.innerWidth*.4:100);const u8=Yi(ee);function Jc(e,l,o,t=r=>r){return e*t(.5-l*(.5-o))}function r3(e){return[-e[0],-e[1]]}function be(e,l){return[e[0]+l[0],e[1]+l[1]]}function ge(e,l){return[e[0]-l[0],e[1]-l[1]]}function Fe(e,l){return[e[0]*l,e[1]*l]}function a3(e,l){return[e[0]/l,e[1]/l]}function Do(e){return[e[1],-e[0]]}function c3(e,l){return e[0]*l[0]+e[1]*l[1]}function p3(e,l){return e[0]===l[0]&&e[1]===l[1]}function i3(e){return Math.hypot(e[0],e[1])}function y3(e){return e[0]*e[0]+e[1]*e[1]}function Xc(e,l){return y3(ge(e,l))}function d8(e){return a3(e,i3(e))}function u3(e,l){return Math.hypot(e[1]-l[1],e[0]-l[0])}function go(e,l,o){let t=Math.sin(o),r=Math.cos(o),a=e[0]-l[0],c=e[1]-l[1],p=a*r-c*t,i=a*t+c*r;return[p+l[0],i+l[1]]}function vr(e,l,o){return be(e,Fe(ge(l,e),o))}function Gc(e,l,o){return be(e,Fe(l,o))}var{min:jl,PI:d3}=Math,Qc=.275,Co=d3+1e-4;function f3(e,l={}){let{size:o=16,smoothing:t=.5,thinning:r=.5,simulatePressure:a=!0,easing:c=os=>os,start:p={},end:i={},last:y=!1}=l,{cap:u=!0,easing:f=os=>os*(2-os)}=p,{cap:d=!0,easing:m=os=>--os*os*os+1}=i;if(e.length===0||o<=0)return[];let h=e[e.length-1].runningLength,C=p.taper===!1?0:p.taper===!0?Math.max(o,h):p.taper,g=i.taper===!1?0:i.taper===!0?Math.max(o,h):i.taper,b=Math.pow(o*t,2),_=[],F=[],x=e.slice(0,10).reduce((os,ts)=>{let ls=ts.pressure;if(a){let Bs=jl(1,ts.distance/o),Te=jl(1,1-Bs);ls=jl(1,os+(Te-os)*(Bs*Qc))}return(os+ls)/2},e[0].pressure),j=Jc(o,r,e[e.length-1].pressure,c),T,K=e[0].vector,as=e[0].point,us=as,ms=as,As=us;for(let os=0;os<e.length;os++){let{pressure:ts}=e[os],{point:ls,vector:Bs,distance:Te,runningLength:Gs}=e[os];if(os<e.length-1&&h-Gs<3)continue;if(r){if(a){let N=jl(1,Te/o),Q=jl(1,1-N);ts=jl(1,x+(Q-x)*(N*Qc))}j=Jc(o,r,ts,c)}else j=o/2;T===void 0&&(T=j);let Ae=Gs<C?f(Gs/C):1,te=h-Gs<g?m((h-Gs)/g):1;if(j=Math.max(.01,j*Math.min(Ae,te)),os===e.length-1){let N=Fe(Do(Bs),j);_.push(ge(ls,N)),F.push(be(ls,N));continue}let Nl=e[os+1].vector,k=c3(Bs,Nl);if(k<0){let N=Fe(Do(K),j);for(let Q=1/13,Ds=0;Ds<=1;Ds+=Q)ms=go(ge(ls,N),ls,Co*Ds),_.push(ms),As=go(be(ls,N),ls,Co*-Ds),F.push(As);as=ms,us=As;continue}let J=Fe(Do(vr(Nl,Bs,k)),j);ms=ge(ls,J),(os<=1||Xc(as,ms)>b)&&(_.push(ms),as=ms),As=be(ls,J),(os<=1||Xc(us,As)>b)&&(F.push(As),us=As),x=ts,K=Bs}let Ts=e[0].point.slice(0,2),Is=e.length>1?e[e.length-1].point.slice(0,2):be(e[0].point,[1,1]),Ys=[],xs=[];if(e.length===1){if(!(C||g)||y){let os=Gc(Ts,d8(Do(ge(Ts,Is))),-(T||j)),ts=[];for(let ls=1/13,Bs=ls;Bs<=1;Bs+=ls)ts.push(go(os,Ts,Co*2*Bs));return ts}}else{if(!(C||g&&e.length===1))if(u)for(let ts=1/13,ls=ts;ls<=1;ls+=ts){let Bs=go(F[0],Ts,Co*ls);Ys.push(Bs)}else{let ts=ge(_[0],F[0]),ls=Fe(ts,.5),Bs=Fe(ts,.51);Ys.push(ge(Ts,ls),ge(Ts,Bs),be(Ts,Bs),be(Ts,ls))}let os=Do(r3(e[e.length-1].vector));if(g||C&&e.length===1)xs.push(Is);else if(d){let ts=Gc(Is,os,j);for(let ls=1/29,Bs=ls;Bs<1;Bs+=ls)xs.push(go(ts,Is,Co*3*Bs))}else xs.push(be(Is,Fe(os,j)),be(Is,Fe(os,j*.99)),ge(Is,Fe(os,j*.99)),ge(Is,Fe(os,j)))}return _.concat(xs,F.reverse(),Ys)}function m3(e,l={}){var o;let{streamline:t=.5,size:r=16,last:a=!1}=l;if(e.length===0)return[];let c=.15+(1-t)*.85,p=Array.isArray(e[0])?e:e.map(({x:m,y:h,pressure:C=.5})=>[m,h,C]);if(p.length===2){let m=p[1];p=p.slice(0,-1);for(let h=1;h<5;h++)p.push(vr(p[0],m,h/4))}p.length===1&&(p=[...p,[...be(p[0],[1,1]),...p[0].slice(2)]]);let i=[{point:[p[0][0],p[0][1]],pressure:p[0][2]>=0?p[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,f=i[0],d=p.length-1;for(let m=1;m<p.length;m++){let h=a&&m===d?p[m].slice(0,2):vr(f.point,p[m],c);if(p3(f.point,h))continue;let C=u3(h,f.point);if(u+=C,m<d&&!y){if(u<r)continue;y=!0}f={point:h,pressure:p[m][2]>=0?p[m][2]:.5,vector:d8(ge(f.point,h)),distance:C,runningLength:u},i.push(f)}return i[0].vector=((o=i[1])==null?void 0:o.vector)||[0,0],i}function B3(e,l={}){return f3(m3(e,l),l)}var h3=B3,A3=Object.defineProperty,sp=Object.getOwnPropertySymbols,v3=Object.prototype.hasOwnProperty,D3=Object.prototype.propertyIsEnumerable,ep=(e,l,o)=>l in e?A3(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Dr=(e,l)=>{for(var o in l||(l={}))v3.call(l,o)&&ep(e,o,l[o]);if(sp)for(var o of sp(l))D3.call(l,o)&&ep(e,o,l[o]);return e},g3=()=>({events:{},emit(e,...l){(this.events[e]||[]).forEach(o=>o(...l))},on(e,l){return(this.events[e]=this.events[e]||[]).push(l),()=>this.events[e]=(this.events[e]||[]).filter(o=>o!==l)}});function Hn(e,l){return e-l}function C3(e){return e<0?-1:1}function Un(e){return[Math.abs(e),C3(e)]}function f8(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var E3=2,We=E3,uo=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var l,o;const t=this.drauu.el,r=(l=this.drauu.options.coordinateScale)!=null?l:1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*r,y:(e.pageY-a.top)*r,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const c=a.matrixTransform((o=t.getScreenCTM())==null?void 0:o.inverse());return{x:c.x*r,y:c.y*r,pressure:e.pressure}}}createElement(e,l){var o;const t=document.createElementNS("http://www.w3.org/2000/svg",e),r=l?Dr(Dr({},this.brush),l):this.brush;return t.setAttribute("fill",(o=r.fill)!=null?o:"transparent"),t.setAttribute("stroke",r.color),t.setAttribute("stroke-width",r.size.toString()),t.setAttribute("stroke-linecap","round"),r.dasharray&&t.setAttribute("stroke-dasharray",r.dasharray),t}attr(e,l){this.el.setAttribute(e,typeof l=="string"?l:l.toFixed(We))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},_3=class extends uo{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const l=h3(e,Dr({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!l.length)return"";const o=l.reduce((t,[r,a],c,p)=>{const[i,y]=p[(c+1)%p.length];return t.push(r,a,(r+i)/2,(a+y)/2),t},["M",...l[0],"Q"]);return o.push("Z"),o.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},F3=class extends uo{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,o]=Un(e.x-this.start.x),[t,r]=Un(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(l,t);l=a,t=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",l),this.attr("ry",t);else{const[a,c]=[this.start.x,this.start.x+l*o].sort(Hn),[p,i]=[this.start.y,this.start.y+t*r].sort(Hn);this.attr("cx",(a+c)/2),this.attr("cy",(p+i)/2),this.attr("rx",(c-a)/2),this.attr("ry",(i-p)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function m8(e,l){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",l),t.setAttribute("id",e),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(r),o.appendChild(t),o}var b3=class extends uo{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const l=f8(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(m8(l,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${l})`),o}return this.el}onMove(e){if(!this.el)return!1;let{x:l,y:o}=e;if(this.shiftPressed){const t=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let a=t/r;a=Math.round(a),Math.abs(a)<=1?(l=this.start.x+r*a,o=this.start.y+r):(l=this.start.x+t,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-l),this.attr("y1",this.start.y*2-o),this.attr("x2",l),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",l),this.attr("y2",o)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},x3=class extends uo{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,o]=Un(e.x-this.start.x),[t,r]=Un(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(l,t);l=a,t=a}if(this.altPressed)this.attr("x",this.start.x-l),this.attr("y",this.start.y-t),this.attr("width",l*2),this.attr("height",t*2);else{const[a,c]=[this.start.x,this.start.x+l*o].sort(Hn),[p,i]=[this.start.y,this.start.y+t*r].sort(Hn);this.attr("x",a),this.attr("y",p),this.attr("width",c-a),this.attr("height",i-p)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function w3(e,l){const o=e.x-l.x,t=e.y-l.y;return o*o+t*t}function k3(e,l,o){let t=l.x,r=l.y,a=o.x-t,c=o.y-r;if(a!==0||c!==0){const p=((e.x-t)*a+(e.y-r)*c)/(a*a+c*c);p>1?(t=o.x,r=o.y):p>0&&(t+=a*p,r+=c*p)}return a=e.x-t,c=e.y-r,a*a+c*c}function $3(e,l){let o=e[0];const t=[o];let r;for(let a=1,c=e.length;a<c;a++)r=e[a],w3(r,o)>l&&(t.push(r),o=r);return o!==r&&r&&t.push(r),t}function gr(e,l,o,t,r){let a=t,c=0;for(let p=l+1;p<o;p++){const i=k3(e[p],e[l],e[o]);i>a&&(c=p,a=i)}a>t&&(c-l>1&&gr(e,l,c,t,r),r.push(e[c]),o-c>1&&gr(e,c,o,t,r))}function S3(e,l){const o=e.length-1,t=[e[0]];return gr(e,0,o,l,t),t.push(e[o]),t}function lp(e,l,o=!1){if(e.length<=2)return e;const t=l!==void 0?l*l:1;return e=o?e:$3(e,t),e=S3(e,t),e}var O3=class extends uo{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=f8();const l=m8(this.arrowId,this.brush.color);this.el.appendChild(l)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=lp(this.points,1,!0),this.count=0),this.attr("d",np(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",np(lp(this.points,1,!0))),!e.getTotalLength()))}};function M3(e,l){const o=l.x-e.x,t=l.y-e.y;return{length:Math.sqrt(Math.pow(o,2)+Math.pow(t,2)),angle:Math.atan2(t,o)}}function op(e,l,o,t){const r=l||e,a=o||e,c=.2,p=M3(r,a),i=p.angle+(t?Math.PI:0),y=p.length*c,u=e.x+Math.cos(i)*y,f=e.y+Math.sin(i)*y;return{x:u,y:f}}function P3(e,l,o){const t=op(o[l-1],o[l-2],e),r=op(e,o[l-1],o[l+1],!0);return`C ${t.x.toFixed(We)},${t.y.toFixed(We)} ${r.x.toFixed(We)},${r.y.toFixed(We)} ${e.x.toFixed(We)},${e.y.toFixed(We)}`}function np(e){return e.reduce((l,o,t,r)=>t===0?`M ${o.x.toFixed(We)},${o.y.toFixed(We)}`:`${l} ${P3(o,t,r)}`,"")}var T3=class extends uo{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const l=(o,t)=>{if(o&&o.length)for(let r=0;r<o.length;r++){const a=o[r];if(a.getTotalLength){const c=a.getTotalLength();for(let p=0;p<this.pathSubFactor;p++){const i=a.getPointAtLength(c*p/this.pathSubFactor),y=a.getPointAtLength(c*(p+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:y.x,y1:i.y,y2:y.y,segment:p,element:t||a})}}else a.children&&l(a.children,a)}};e&&l(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const l=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,l}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let l=0;l<this.pathFragments.length;l++){const o=this.pathFragments[l],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,t)&&(o.element.remove(),e.push(l))}return e.length&&(this.pathFragments=this.pathFragments.filter((l,o)=>!e.includes(o))),e.length>0}lineLineIntersect(e,l){const o=e.x1,t=e.x2,r=l.x1,a=l.x2,c=e.y1,p=e.y2,i=l.y1,y=l.y2,u=(o-t)*(i-y)-(c-p)*(r-a),f=(o*p-c*t)*(r-a)-(o-t)*(r*y-i*a),d=(o*p-c*t)*(i-y)-(c-p)*(r*y-i*a),m=(h,C,g)=>h>=C&&h<=g?!0:h>=g&&h<=C;if(u===0)return!1;{const h={x:f/u,y:d/u};return m(h.x,o,t)&&m(h.y,c,p)&&m(h.x,r,a)&&m(h.y,i,y)}}};function L3(e){return{draw:new O3(e),stylus:new _3(e),line:new b3(e),rectangle:new x3(e),ellipse:new F3(e),eraseLine:new T3(e)}}var N3=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=g3(),this._models=L3(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,l){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(l)||this.el,t=this.eventStart.bind(this),r=this.eventMove.bind(this),a=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,l){return this._emitter.on(e,l)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const l=this.model._eventUp(e);l?(l instanceof Element&&l!==this._currentNode&&(this._currentNode=l),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function R3(e){return new N3(e)}const Cr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],je=Me("slidev-drawing-enabled",!1),rF=Me("slidev-drawing-pinned",!1),I3=H(!1),j3=H(!1),V3=H(!1),Xo=H(!1),bl=Nd(Me("slidev-drawing-brush",{color:Cr[0],size:4,mode:"stylus"})),tp=H("stylus"),B8=w(()=>_s.drawings.syncAll||Re.value);let Go=!1;const Eo=w({get(){return tp.value},set(e){tp.value=e,e==="arrow"?(bl.mode="line",bl.arrowEnd=!0):(bl.mode=e,bl.arrowEnd=!1)}}),z3=Ls({brush:bl,acceptsInputTypes:w(()=>je.value?void 0:["pen"]),coordinateTransform:!1}),le=et(R3(z3));function H3(){le.clear(),B8.value&&Wi(zs.value,"")}function h8(){var e;j3.value=le.canRedo(),I3.value=le.canUndo(),V3.value=!!((e=le.el)!=null&&e.children.length)}function U3(e){Go=!0;const l=In[e||zs.value];l!=null?le.load(l):le.clear(),Go=!1}le.on("changed",()=>{if(h8(),!Go){const e=le.dump(),l=zs.value;(In[l]||"")!==e&&B8.value&&Wi(l,le.dump())}});Md(e=>{Go=!0,e[zs.value]!=null&&le.load(e[zs.value]||""),Go=!1,h8()});Ks(()=>{ys(zs,()=>{!le.mounted||U3()},{immediate:!0})});le.on("start",()=>Xo.value=!0);le.on("end",()=>Xo.value=!1);window.addEventListener("keydown",e=>{if(!je.value)return;const l=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let o=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?le.redo():le.undo():e.code==="Escape"?je.value=!1:e.code==="KeyL"&&l?Eo.value="line":e.code==="KeyA"&&l?Eo.value="arrow":e.code==="KeyS"&&l?Eo.value="stylus":e.code==="KeyR"&&l?Eo.value="rectangle":e.code==="KeyE"&&l?Eo.value="ellipse":e.code==="KeyC"&&l?H3():e.code.startsWith("Digit")&&l&&+e.code[5]<=Cr.length?bl.color=Cr[+e.code[5]-1]:o=!1,o&&(e.preventDefault(),e.stopPropagation())},!1);const rp=kf(),Tt=Me("slidev-color-schema","auto"),Er=w(()=>_s.colorSchema!=="auto"),ca=w({get(){return Er.value?_s.colorSchema==="dark":Tt.value==="auto"?rp.value:Tt.value==="dark"},set(e){Er.value||(Tt.value=e===rp.value?"auto":e?"dark":"light")}}),A8=Yi(ca);Ce&&ys(ca,e=>{const l=document.querySelector("html");l.classList.toggle("dark",e),l.classList.toggle("light",!e)},{immediate:!0});function W3(){return[]}const kn=H(1),$n=w(()=>Vs.length-1),me=H(0),pa=H(0);function q3(){me.value>kn.value&&(me.value-=1)}function K3(){me.value<$n.value&&(me.value+=1)}function Y3(){if(me.value>kn.value){let e=me.value-pa.value;e<kn.value&&(e=kn.value),me.value=e}}function Z3(){if(me.value<$n.value){let e=me.value+pa.value;e>$n.value&&(e=$n.value),me.value=e}}const v8=js(ie(n3),ie(t3),l3);function J3(e,l,o=!1){typeof e=="string"&&(e=i8[e]);const t=js(e,v8);let r=0,a;const c=()=>{if(clearTimeout(a),!t.value){r=0;return}o&&(a=setTimeout(c,Math.max(1e3-r*250,150)),r++),l()};return ys(t,c,{flush:"sync"})}function X3(e,l){return hf(e,o=>{!v8.value||o.repeat||l()})}function G3(){const e=W3(),{escape:l,space:o,shift:t,left:r,right:a,up:c,down:p,enter:i,d:y,g:u,o:f}=i8;new Map([{key:js(o,ie(t)),fn:pl,autoRepeat:!0},{key:js(o,t),fn:il,autoRepeat:!0},{key:js(a,ie(t),ie(ee)),fn:pl,autoRepeat:!0},{key:js(r,ie(t),ie(ee)),fn:il,autoRepeat:!0},{key:"pageDown",fn:pl,autoRepeat:!0},{key:"pageUp",fn:il,autoRepeat:!0},{key:js(c,ie(ee)),fn:()=>en(!1),autoRepeat:!0},{key:js(p,ie(ee)),fn:sn,autoRepeat:!0},{key:js(r,t),fn:()=>en(!1),autoRepeat:!0},{key:js(a,t),fn:sn,autoRepeat:!0},{key:js(y,ie(je)),fn:A8},{key:js(f,ie(je)),fn:u8},{key:js(l,ie(je)),fn:()=>ee.value=!1},{key:js(u,ie(je)),fn:()=>Kl.value=!Kl.value},{key:js(r,ee),fn:q3},{key:js(a,ee),fn:K3},{key:js(c,ee),fn:Y3},{key:js(p,ee),fn:Z3},{key:js(i,ee),fn:()=>{ro(me.value),ee.value=!1}},...e].map(m=>[m.key,m])).forEach(m=>{m.fn&&J3(m.key,m.fn,m.autoRepeat)}),X3("f",()=>y8.toggle())}const Q3={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},sB=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),eB=[sB];function lB(e,l){return v(),U("svg",Q3,eB)}var oB={name:"carbon-close",render:lB};function ia(e){var o,t;const l=(t=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:t.no;return l!=null?`slidev-page-${l}`:""}const D8=bs({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const l=e;$(M);const o=H(),t=Vf(o),r=w(()=>l.width?l.width:t.width.value),a=w(()=>l.width?l.width/al:t.height.value);l.width&&tn(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${a.value}px`)});const c=w(()=>r.value/a.value),p=w(()=>l.scale?l.scale:c.value<al?r.value/$l:a.value*al/$l),i=w(()=>({height:`${zi}px`,width:`${$l}px`,transform:`translate(-50%, -50%) scale(${p.value})`})),y=w(()=>({"select-none":!_s.selectable,"slidev-code-line-numbers":_s.lineNumbers}));return de(Vi,p),(u,f)=>(v(),U("div",{id:"slide-container",ref_key:"root",ref:o,class:Ns(D(y))},[s("div",{id:"slide-content",style:oe(D(i))},[Ze(u.$slots,"default")],4),Ze(u.$slots,"controls")],2))}});var ya=bs({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:l}){const o=Ie(e,"clicks",l),t=Ie(e,"clicksElements",l),r=Ie(e,"clicksDisabled",l),a=Ie(e,"clicksOrderMap",l);t.value.length=0,de(Dd,e.route),de(gd,e.context),de(Oo,o),de(Mo,r),de(Cl,t),de(ir,a)},render(){var e,l;return this.$props.is?Se(this.$props.is):(l=(e=this.$slots)==null?void 0:e.default)==null?void 0:l.call(e)}});const nB=["innerHTML"],g8=bs({__name:"DrawingPreview",props:{page:null},setup(e){return $(M),(l,o)=>D(In)[e.page]?(v(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:D(In)[e.page]},null,8,nB)):fs("v-if",!0)}});var tB=Object.freeze(Object.defineProperty({__proto__:null,default:g8},Symbol.toStringTag,{value:"Module"}));const rB={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},aB=["onClick"],cB=bs({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:l}){const o=e;$(M);const t=Ie(o,"modelValue",l);function r(){t.value=!1}function a(m){ro(m),r()}function c(m){return m===me.value}const p=Ar.smaller("xs"),i=Ar.smaller("sm"),y=4*16*2,u=2*16,f=w(()=>p.value?Sl.width.value-y:i.value?(Sl.width.value-y-u)/2:300),d=w(()=>Math.floor((Sl.width.value-y)/(f.value+u)));return tn(()=>{me.value=zs.value,pa.value=d.value}),(m,h)=>{const C=oB;return v(),U(Cs,null,[He(s("div",rB,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:oe(`grid-template-columns: repeat(auto-fit,minmax(${D(f)}px,1fr))`)},[(v(!0),U(Cs,null,rn(D(Vs).slice(0,-1),(g,b)=>(v(),U("div",{key:g.path,class:"relative"},[s("div",{class:Ns(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(b+1)}]),onClick:_=>a(+g.path)},[(v(),L(D8,{key:g.path,width:D(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:z(()=>[q(D(ya),{is:g==null?void 0:g.component,"clicks-disabled":!0,class:Ns(D(ia)(g)),route:g,context:"overview"},null,8,["is","class","route"]),q(g8,{page:+g.path},null,8,["page"])]),_:2},1032,["width"]))],10,aB),s("div",{class:"absolute top-0 opacity-50",style:oe(`left: ${D(f)+5}px`)},Us(b+1),5)]))),128))],4)],512),[[Ii,D(t)]]),D(t)?(v(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[q(C)])):fs("v-if",!0)],64)}}});var pB="/vue-3-practices/assets/logo.b72bde5d.png";const iB={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},yB=bs({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:l}){const o=e;$(M);const t=Ie(o,"modelValue",l);function r(){t.value=!1}return(a,c)=>(v(),L(vi,null,[D(t)?(v(),U("div",iB,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=p=>r())}),s("div",{class:Ns(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[Ze(a.$slots,"default")],2)])):fs("v-if",!0)],1024))}});const uB={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},dB=["innerHTML"],fB=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:pB,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),n("dev ")])])],-1),mB=bs({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:l}){const o=e;$(M);const t=Ie(o,"modelValue",l),r=w(()=>typeof _s.info=="string");return(a,c)=>(v(),L(yB,{modelValue:D(t),"onUpdate:modelValue":c[0]||(c[0]=p=>Fs(t)?t.value=p:null),class:"px-6 py-4"},{default:z(()=>[s("div",uB,[D(r)?(v(),U("div",{key:0,class:"mb-4",innerHTML:D(_s).info},null,8,dB)):fs("v-if",!0),fB])]),_:1},8,["modelValue"]))}}),BB=["disabled","onKeydown"],hB=bs({__name:"Goto",setup(e){$(M);const l=H(),o=H(""),t=w(()=>{if(o.value.startsWith("/"))return!!Vs.find(c=>c.path===o.value.substring(1));{const c=+o.value;return!isNaN(c)&&c>0&&c<=P8.value}});function r(){t.value&&(o.value.startsWith("/")?ro(o.value.substring(1)):ro(+o.value)),a()}function a(){Kl.value=!1}return ys(Kl,async c=>{var p,i;c?(await Ks(),o.value="",(p=l.value)==null||p.focus()):(i=l.value)==null||i.blur()}),ys(o,c=>{c.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(c,p)=>(v(),U("div",{id:"slidev-goto-dialog",class:Ns(["fixed right-5 bg-main transform transition-all",D(Kl)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[He(s("input",{ref_key:"input",ref:l,"onUpdate:modelValue":p[0]||(p[0]=i=>o.value=i),type:"text",disabled:!D(Kl),class:Ns(["outline-none bg-transparent",{"text-red-400":!D(t)&&o.value}]),placeholder:"Goto...",onKeydown:[dc(r,["enter"]),dc(a,["escape"])],onBlur:a},null,42,BB),[[Zo,o.value]])],2))}}),AB=bs({__name:"Controls",setup(e){$(M);const l=ze(),o=ze();return(t,r)=>(v(),U(Cs,null,[q(cB,{modelValue:D(ee),"onUpdate:modelValue":r[0]||(r[0]=a=>Fs(ee)?ee.value=a:null)},null,8,["modelValue"]),q(hB),D(l)?(v(),L(D(l),{key:0})):fs("v-if",!0),D(o)?(v(),L(D(o),{key:1,modelValue:D(Mt),"onUpdate:modelValue":r[1]||(r[1]=a=>Fs(Mt)?Mt.value=a:null)},null,8,["modelValue"])):fs("v-if",!0),D(_s).info?(v(),L(mB,{key:2,modelValue:D(Lo),"onUpdate:modelValue":r[2]||(r[2]=a=>Fs(Lo)?Lo.value=a:null)},null,8,["modelValue"])):fs("v-if",!0)],64))}}),vB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},DB=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),gB=[DB];function CB(e,l){return v(),U("svg",vB,gB)}var EB={name:"carbon-settings-adjust",render:CB};const _B={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},FB=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),bB=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xB=[FB,bB];function wB(e,l){return v(),U("svg",_B,xB)}var kB={name:"carbon-information",render:wB};const $B={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},SB=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),OB=[SB];function MB(e,l){return v(),U("svg",$B,OB)}var PB={name:"carbon-download",render:MB};const TB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},LB=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),NB=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),RB=[LB,NB];function IB(e,l){return v(),U("svg",TB,RB)}var jB={name:"carbon-user-speaker",render:IB};const VB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zB=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),HB=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),UB=[zB,HB];function WB(e,l){return v(),U("svg",VB,UB)}var qB={name:"carbon-presentation-file",render:WB};const KB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},YB=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),ZB=[YB];function JB(e,l){return v(),U("svg",KB,ZB)}var XB={name:"carbon-pen",render:JB};const GB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},QB=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),sh=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),eh=[QB,sh];function lh(e,l){return v(),U("svg",GB,eh)}var oh={name:"ph-cursor-duotone",render:lh};const nh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},th=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),rh=[th];function ah(e,l){return v(),U("svg",nh,rh)}var C8={name:"ph-cursor-fill",render:ah};const ch={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ph=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),ih=[ph];function yh(e,l){return v(),U("svg",ch,ih)}var uh={name:"carbon-sun",render:yh};const dh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fh=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),mh=[fh];function Bh(e,l){return v(),U("svg",dh,mh)}var hh={name:"carbon-moon",render:Bh};const Ah={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},vh=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Dh=[vh];function gh(e,l){return v(),U("svg",Ah,Dh)}var Ch={name:"carbon-apps",render:gh};const Eh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_h=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Fh=[_h];function bh(e,l){return v(),U("svg",Eh,Fh)}var E8={name:"carbon-arrow-right",render:bh};const xh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wh=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),kh=[wh];function $h(e,l){return v(),U("svg",xh,kh)}var Sh={name:"carbon-arrow-left",render:$h};const Oh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Mh=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Ph=[Mh];function Th(e,l){return v(),U("svg",Oh,Ph)}var Lh={name:"carbon-maximize",render:Th};const Nh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rh=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Ih=[Rh];function jh(e,l){return v(),U("svg",Nh,Ih)}var Vh={name:"carbon-minimize",render:jh};const zh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hh=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Uh=[Hh];function Wh(e,l){return v(),U("svg",zh,Uh)}var qh={name:"carbon-checkmark",render:Wh};var Pe=(e,l)=>{const o=e.__vccOpts||e;for(const[t,r]of l)o[t]=r;return o};const Kh={class:"select-list"},Yh={class:"title"},Zh={class:"items"},Jh=["onClick"],Xh=bs({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:l}){const o=e;$(M);const t=Ie(o,"modelValue",l,{passive:!0});return(r,a)=>{const c=qh;return v(),U("div",Kh,[s("div",Yh,Us(e.title),1),s("div",Zh,[(v(!0),U(Cs,null,rn(e.items,p=>(v(),U("div",{key:p.value,class:Ns(["item",{active:D(t)===p.value}]),onClick:()=>{var i;t.value=p.value,(i=p.onClick)==null||i.call(p)}},[q(c,{class:Ns(["text-green-500",{"opacity-0":D(t)!==p.value}])},null,8,["class"]),n(" "+Us(p.display||p.value),1)],10,Jh))),128))])])}}});var Gh=Pe(Xh,[["__scopeId","data-v-0a01a24c"]]);const Qh={class:"text-sm"},sA=bs({__name:"Settings",setup(e){$(M);const l=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,t)=>(v(),U("div",Qh,[q(Gh,{modelValue:D(wn),"onUpdate:modelValue":t[0]||(t[0]=r=>Fs(wn)?wn.value=r:null),title:"Scale",items:l},null,8,["modelValue"])]))}}),eA={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},lA=bs({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:l}){const o=e;$(M);const t=Ie(o,"modelValue",l,{passive:!0}),r=H();return mf(r,()=>{t.value=!1}),(a,c)=>(v(),U("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:Ns({disabled:e.disabled}),onClick:c[0]||(c[0]=p=>t.value=!D(t))},[Ze(a.$slots,"button",{class:Ns({disabled:e.disabled})})],2),(v(),L(vi,null,[D(t)?(v(),U("div",eA,[Ze(a.$slots,"menu")])):fs("v-if",!0)],1024))],512))}}),oA={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},gn={__name:"VerticalDivider",setup(e){return $(M),(l,o)=>(v(),U("div",oA))}};var nA={render(){return[]}};const tA={class:"icon-btn"},rA={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},aA={class:"my-auto"},cA={class:"opacity-50"},pA=bs({__name:"NavControls",props:{persist:{default:!1}},setup(e){const l=e;$(M);const o=Ar.smaller("md"),{isFullscreen:t,toggle:r}=y8,a=w(()=>Fr.value?`?password=${Fr.value}`:""),c=w(()=>`/presenter/${zs.value}${a.value}`),p=w(()=>`/${zs.value}${a.value}`),i=H(),y=()=>{i.value&&Ql.value&&i.value.contains(Ql.value)&&Ql.value.blur()},u=w(()=>l.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=ze(),d=ze();return io(()=>import("./DrawingControls.3546dae3.js"),[]).then(m=>d.value=m.default),(m,h)=>{const C=Vh,g=Lh,b=Sh,_=E8,F=Ch,x=hh,j=uh,T=C8,K=oh,as=XB,us=qB,ms=Ln("RouterLink"),As=jB,Ts=PB,Is=kB,Ys=EB;return v(),U("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[s("div",{class:Ns(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",D(u)]),onMouseleave:y},[D(Ue)?fs("v-if",!0):(v(),U("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(...xs)=>D(r)&&D(r)(...xs))},[D(t)?(v(),L(C,{key:0})):(v(),L(g,{key:1}))])),s("button",{class:Ns(["icon-btn",{disabled:!D(f7)}]),onClick:h[1]||(h[1]=(...xs)=>D(il)&&D(il)(...xs))},[q(b)],2),s("button",{class:Ns(["icon-btn",{disabled:!D(d7)}]),title:"Next",onClick:h[2]||(h[2]=(...xs)=>D(pl)&&D(pl)(...xs))},[q(_)],2),D(Ue)?fs("v-if",!0):(v(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=xs=>D(u8)())},[q(F)])),D(Er)?fs("v-if",!0):(v(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=xs=>D(A8)())},[D(ca)?(v(),L(x,{key:0})):(v(),L(j,{key:1}))])),q(gn),D(Ue)?fs("v-if",!0):(v(),U(Cs,{key:3},[!D(Re)&&!D(o)&&D(f)?(v(),U(Cs,{key:0},[q(D(f)),q(gn)],64)):fs("v-if",!0),D(Re)?(v(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=xs=>Pt.value=!D(Pt))},[D(Pt)?(v(),L(T,{key:0})):(v(),L(K,{key:1,class:"opacity-50"}))])):fs("v-if",!0)],64)),!D(_s).drawings.presenterOnly&&!D(Ue)?(v(),U(Cs,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=xs=>je.value=!D(je))},[q(as),D(je)?(v(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:oe({background:D(bl).color})},null,4)):fs("v-if",!0)]),q(gn)],64)):fs("v-if",!0),D(Ue)?fs("v-if",!0):(v(),U(Cs,{key:5},[D(Re)?(v(),L(ms,{key:0,to:D(p),class:"icon-btn",title:"Play Mode"},{default:z(()=>[q(us)]),_:1},8,["to"])):fs("v-if",!0),D(i7)?(v(),L(ms,{key:1,to:D(c),class:"icon-btn",title:"Presenter Mode"},{default:z(()=>[q(As)]),_:1},8,["to"])):fs("v-if",!0),fs("v-if",!0)],64)),(v(),U(Cs,{key:6},[D(_s).download?(v(),U("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(...xs)=>D(br)&&D(br)(...xs))},[q(Ts)])):fs("v-if",!0)],64)),!D(Re)&&D(_s).info&&!D(Ue)?(v(),U("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=xs=>Lo.value=!D(Lo))},[q(Is)])):fs("v-if",!0),!D(Re)&&!D(Ue)?(v(),L(lA,{key:8},{button:z(()=>[s("button",tA,[q(Ys)])]),menu:z(()=>[q(sA)]),_:1})):fs("v-if",!0),D(Ue)?fs("v-if",!0):(v(),L(gn,{key:9})),s("div",rA,[s("div",aA,[n(Us(D(zs))+" ",1),s("span",cA,"/ "+Us(D(P8)),1)])]),q(D(nA))],34)],512)}}});var _8={render(){return[]}},F8={render(){return[]}};const iA={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},yA=bs({__name:"PresenterMouse",setup(e){return $(M),(l,o)=>{const t=C8;return D(kt).cursor?(v(),U("div",iA,[q(t,{class:"absolute",style:oe({left:`${D(kt).cursor.x}%`,top:`${D(kt).cursor.y}%`})},null,8,["style"])])):fs("v-if",!0)}}}),uA=bs({__name:"SlidesShow",props:{context:null},setup(e){$(M),ys(ue,()=>{var o,t;((o=ue.value)==null?void 0:o.meta)&&ue.value.meta.preload!==!1&&(ue.value.meta.__preloaded=!0),((t=Lt.value)==null?void 0:t.meta)&&Lt.value.meta.preload!==!1&&(Lt.value.meta.__preloaded=!0)},{immediate:!0});const l=ze();return io(()=>import("./DrawingLayer.eae84965.js"),[]).then(o=>l.value=o.default),(o,t)=>(v(),U(Cs,null,[fs(" Global Bottom "),q(D(F8)),fs(" Slides "),(v(!0),U(Cs,null,rn(D(Vs),r=>{var a,c;return v(),U(Cs,{key:r.path},[((a=r.meta)==null?void 0:a.__preloaded)||r===D(ue)?He((v(),L(D(ya),{key:0,is:r==null?void 0:r.component,clicks:r===D(ue)?D(Oe):0,"clicks-elements":((c=r.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Ns(D(ia)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ii,r===D(ue)]]):fs("v-if",!0)],64)}),128)),fs(" Global Top "),q(D(_8)),D(l)?(v(),L(D(l),{key:0})):fs("v-if",!0),D(Re)?fs("v-if",!0):(v(),L(yA,{key:1}))],64))}}),dA=bs({__name:"Play",setup(e){$(M),G3();const l=H();function o(a){var c;Zc.value||((c=a.target)==null?void 0:c.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?pl():il())}h7(l);const t=w(()=>o3.value||Zc.value);ze();const r=ze();return io(()=>import("./DrawingControls.3546dae3.js"),[]).then(a=>r.value=a.default),(a,c)=>(v(),U(Cs,null,[s("div",{id:"page-root",ref_key:"root",ref:l,class:"grid grid-cols-[1fr,max-content]",style:oe(D(Hi))},[q(D8,{class:"w-full h-full",style:oe({background:"var(--slidev-slide-container-background, black)"}),width:D(ma)?D(Sl).width.value:void 0,scale:D(wn),onPointerdown:o},{default:z(()=>[q(uA,{context:"slide"})]),controls:z(()=>[s("div",{class:Ns(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[D(t)?"opacity-100 right-0":"opacity-0 p-2",D(Xo)?"pointer-events-none":""]])},[q(pA,{class:"m-auto",persist:D(t)},null,8,["persist"])],2),!D(_s).drawings.presenterOnly&&!D(Ue)&&D(r)?(v(),L(D(r),{key:0,class:"ml-0"})):fs("v-if",!0)]),_:1},8,["style","width","scale"]),fs("v-if",!0)],4),q(AB)],64))}});function b8(e){const l=w(()=>e.value.path),o=w(()=>Vs.length-1),t=w(()=>parseInt(l.value.split(/\//g).slice(-1)[0])||1),r=w(()=>dt(t.value)),a=w(()=>Vs.find(d=>d.path===`${t.value}`)),c=w(()=>{var d,m,h;return(h=(m=(d=a.value)==null?void 0:d.meta)==null?void 0:m.slide)==null?void 0:h.id}),p=w(()=>{var d,m;return(m=(d=a.value)==null?void 0:d.meta)==null?void 0:m.layout}),i=w(()=>Vs.find(d=>d.path===`${Math.min(Vs.length,t.value+1)}`)),y=w(()=>Vs.filter(d=>{var m,h;return(h=(m=d.meta)==null?void 0:m.slide)==null?void 0:h.title}).reduce((d,m)=>(Ba(d,m),d),[])),u=w(()=>ha(y.value,a.value)),f=w(()=>Aa(u.value));return{route:e,path:l,total:o,currentPage:t,currentPath:r,currentRoute:a,currentSlideId:c,currentLayout:p,nextRoute:i,rawTree:y,treeWithActiveStatuses:u,tree:f}}function x8(e,l,o){const t=H(0);Ks(()=>{Be.afterEach(async()=>{await Ks(),t.value+=1})});const r=w(()=>{var i,y;return t.value,((y=(i=l.value)==null?void 0:i.meta)==null?void 0:y.__clicksElements)||[]}),a=w(()=>{var i,y,u;return+((u=(y=(i=l.value)==null?void 0:i.meta)==null?void 0:y.clicks)!=null?u:r.value.length)}),c=w(()=>o.value<Vs.length-1||e.value<a.value),p=w(()=>o.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:a,hasNext:c,hasPrev:p}}const fA=["id"],ap=bs({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:l}){const o=e,t=Ie(o,"clicksElements",l),r=w(()=>({height:`${zi}px`,width:`${$l}px`})),a=ze();io(()=>Promise.resolve().then(function(){return tB}),void 0).then(y=>a.value=y.default);const c=w(()=>o.clicks),p=x8(c,o.nav.currentRoute,o.nav.currentPage),i=w(()=>`${o.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return de(M,Ls({nav:gs(gs({},o.nav),p),configs:_s,themeConfigs:w(()=>_s.themeConfig)})),(y,u)=>{var f;return v(),U("div",{id:D(i),class:"slide-container",style:oe(D(r))},[q(D(F8)),q(D(ya),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":D(t),"onUpdate:clicks-elements":u[0]||(u[0]=d=>Fs(t)?t.value=d:null),clicks:D(c),"clicks-disabled":!1,class:Ns(D(ia)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),D(a)?(v(),L(D(a),{key:0,page:+e.route.path},null,8,["page"])):fs("v-if",!0),q(D(_8))],12,fA)}}}),mA=bs({__name:"PrintSlide",props:{route:null},setup(e){var a;const l=e;$(M);const o=Ls(((a=l.route.meta)==null?void 0:a.__clicksElements)||[]),t=w(()=>l.route),r=b8(t);return(c,p)=>(v(),U(Cs,null,[q(ap,{"clicks-elements":o,"onUpdate:clicks-elements":p[0]||(p[0]=i=>Fs(o)?o.value=i:null),clicks:0,nav:D(r),route:D(t)},null,8,["clicks-elements","nav","route"]),D(No)?fs("v-if",!0):(v(!0),U(Cs,{key:0},rn(o.length,i=>(v(),L(ap,{key:i,clicks:i,nav:D(r),route:D(t)},null,8,["clicks","nav","route"]))),128))],64))}});const BA={id:"print-content"},hA=bs({__name:"PrintContainer",props:{width:null},setup(e){const l=e;$(M);const o=w(()=>l.width),t=w(()=>l.width/al),r=w(()=>o.value/t.value),a=w(()=>r.value<al?o.value/$l:t.value*al/$l),c=Vs.slice(0,-1),p=w(()=>({"select-none":!_s.selectable,"slidev-code-line-numbers":_s.lineNumbers}));return de(Vi,a),(i,y)=>(v(),U("div",{id:"print-container",class:Ns(D(p))},[s("div",BA,[(v(!0),U(Cs,null,rn(D(c),u=>(v(),L(mA,{key:u.path,route:u},null,8,["route"]))),128))]),Ze(i.$slots,"controls")],2))}});const AA=bs({__name:"Print",setup(e){$(M);const l=Fl.canvasWidth,o=Math.round(l/Fl.aspectRatio)+1;function t(r,{slots:a}){if(a.default)return Se("style",a.default())}return tn(()=>{ma?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,a)=>(v(),U(Cs,null,[q(t,null,{default:z(()=>[n(" @page { size: "+Us(D(l))+"px "+Us(o)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:oe(D(Hi))},[q(hA,{class:"w-full h-full",style:oe({background:"var(--slidev-slide-container-background, black)"}),width:D(Sl).width.value},null,8,["style","width"])],4)],64))}});const vA={class:"slidev-layout end"},DA={__name:"end",setup(e){return $(M),(l,o)=>(v(),U("div",vA," END "))}};var gA=Pe(DA,[["__scopeId","data-v-f6ffeaae"]]),CA="/vue-3-practices/logo.svg";function cp(e){return e.startsWith("/")?"/vue-3-practices/"+e.slice(1):e}function EA(e,l=!1){const o=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?l?`linear-gradient(#0005, #0008), url(${cp(e)})`:`url("${cp(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const _A={class:"my-auto w-full"},FA=bs({__name:"cover",props:{background:{default:""}},setup(e){const l=e;$(M);const o=w(()=>EA(l.background,!0));return(t,r)=>(v(),U("div",{class:"slidev-layout cover",style:oe(D(o))},[s("div",_A,[Ze(t.$slots,"default")])],4))}}),bA=s("div",{class:"text-center"},[s("img",{src:CA,alt:"Vue",style:{width:"100px"},class:"inline"})],-1),xA=s("h1",null,"Vue.js",-1),wA={__name:"1",setup(e){const l={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}};return $(M),(o,t)=>(v(),L(FA,Z(Y(l)),{default:z(()=>[bA,xA]),_:1},16))}},kA={class:"slidev-layout default"},X={__name:"default",setup(e){return $(M),(l,o)=>(v(),U("div",kA,[Ze(l.$slots,"default")]))}},$A=s("h1",null,"\u30A2\u30B8\u30A7\u30F3\u30C0",-1),SA=s("ul",null,[s("li",null,[n("\u306F\u3058\u3081\u306B "),s("ul",null,[s("li",null,"Composition API, \u5B66\u7FD2\u74B0\u5883\u306A\u3069")])]),s("li",null,[n("\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42 "),s("ul",null,[s("li",null,"ref, reactive, toRefs, readonly \u306A\u3069")])]),s("li",null,[n("\u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09 "),s("ul",null,[s("li",null,"computed")])]),s("li",null,[n("\u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09 "),s("ul",null,[s("li",null,"watch")])]),s("li",null,[n("\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u69CB\u6587\u306E\u8AAC\u660E "),s("ul",null,[s("li",null,"mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model \u306A\u3069")])]),s("li",null,[n("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 "),s("ul",null,[s("li",null,"props, emit, slot \u306A\u3069")])]),s("li",null,[n("Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u5468\u8FBA\u30E9\u30A4\u30D6\u30E9\u30EA "),s("ul",null,[s("li",null,"throttle-debounce, fetch, Vue Router \u306A\u3069")])])],-1),OA={__name:"2",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[$A,SA]),_:1},16))}},MA=s("h1",null,"\u306F\u3058\u3081\u306B",-1),PA=s("h2",null,"Vue.js \u3068\u306F\uFF1F",-1),TA=s("p",null,"Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308B\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u3092\u69CB\u7BC9\u3059\u308B\u305F\u3081\u306E\u3001\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u306E JavaScript \u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3002",-1),LA={class:"pt-4 text-sm"},NA={href:"https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF"},RA=n(" \u516C\u5F0F\u30B5\u30A4\u30C8 "),IA={__name:"3",setup(e){const l={};return $(M),(o,t)=>{const r=E8;return v(),L(X,Z(Y(l)),{default:z(()=>[MA,PA,TA,s("div",LA,[s("a",NA,[q(r,{class:"inline"}),RA])])]),_:1},16)}}},jA=s("h1",null,"\u672C\u8B1B\u5EA7\u306E\u3059\u3059\u3081\u304B\u305F",-1),VA=s("p",null,"\u3069\u306E\u3088\u3046\u306A\u5F62\u5F0F\u3067\u9032\u884C\u3059\u308B\u306E\u304B\u306E\u78BA\u8A8D",-1),zA=s("p",null,"\u30CF\u30F3\u30BA\u30AA\u30F3 \u2252 \u30B3\u30FC\u30C9\u3092\u66F8\u3044\u3066\u52D5\u304B\u3059\u3053\u3068\uFF081 \u56DE 10 \u5206\u7A0B\u5EA6\uFF09\u3092\u30E1\u30A4\u30F3\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002",-1),HA=s("p",null,"\u9069\u5B9C\u8AAC\u660E\u3092\u631F\u307F\u307E\u3059\u304C\u3001\u52D5\u304B\u306A\u3044\u3001\u5206\u304B\u3089\u306A\u3044\u3068\u304D\u3001\u305D\u306E\u4ED6\u306A\u3093\u3067\u3082\uFF08\u5927\u62B5\u306F\u4ED6\u306E\u53D7\u8B1B\u8005\u3082\u540C\u3058\u3053\u3068\u3092\u8003\u3048\u3066\u3044\u307E\u3059\uFF01\uFF09\u8CEA\u554F\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002",-1),UA={__name:"4",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[jA,VA,zA,HA]),_:1},16))}},WA=s("h1",null,"\u6E96\u5099",-1),qA=s("p",null,"\u4F7F\u7528\u3059\u308B\u30C4\u30FC\u30EB\u306E\u78BA\u8A8D\u3068\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7",-1),KA=s("p",null,[n("\u672C\u8B1B\u5EA7\u306B\u304A\u3051\u308B\u30CF\u30F3\u30BA\u30AA\u30F3\u3001\u6F14\u7FD2\u3001\u30B5\u30F3\u30D7\u30EB\u306E\u95B2\u89A7\u306F "),s("a",{href:"https://stackblitz.com/",target:"_blank",rel:"noopener"},"StackBlitz"),n(" \u3067\u304A\u3053\u306A\u3044\u307E\u3059\u3002")],-1),YA=s("p",null,"StackBlitz \u306F\u30D6\u30E9\u30A6\u30B6\u4E0A\u3067\u52D5\u4F5C\u3059\u308B\u30AA\u30F3\u30E9\u30A4\u30F3 IDE\uFF08\u7D71\u5408\u958B\u767A\u74B0\u5883\uFF09\u3067\u3059\u3002",-1),ZA=s("p",null,"\u4EE5\u4E0B\u3092\u3084\u3063\u3066\u307F\u307E\u3057\u3087\u3046",-1),JA=s("ol",null,[s("li",null,[n("\u52D5\u4F5C\u74B0\u5883\u3092"),s("a",{href:"https://developer.stackblitz.com/docs/platform/browser-support/",target:"_blank",rel:"noopener"},"\u3053\u3061\u3089"),n("\u3067\u78BA\u8A8D\u3057\u3066\u30D6\u30E9\u30A6\u30B6\u3092\u7528\u610F")]),s("li",null,[n("\u7528\u610F\u3057\u305F\u30D6\u30E9\u30A6\u30B6\u3067 "),s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev"),n(" \u306B\u30A2\u30AF\u30BB\u30B9")]),s("li",null,[s("code",null,"<template>Hello World!</template>"),n(" \u3068\u66F8\u3044\u3066\u307F\u308B")]),s("li",null,[n("\u53F3\u30AB\u30E9\u30E0\u306B "),s("code",null,"Hello World!"),n(" \u3068\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u3092\u78BA\u8A8D")])],-1),XA=s("p",null,"\u8B1B\u5E2B\u306F\u9069\u5B9C\u3042\u305F\u3089\u3057\u3044\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\u3064\u304F\u3063\u3066\u3044\u304D\u307E\u3059\u304C\u3001\u53D7\u8B1B\u8005\u306E\u7686\u3055\u3093\u306F\u4F5C\u6210\u3057\u305F\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\uFF08\u5168\u6D88\u3057\u3059\u308B\u306A\u3069\uFF09\u4F7F\u3044\u307E\u308F\u3057\u3066\u3082\u3089\u3063\u3066\u5927\u4E08\u592B\u3067\u3059\u3002",-1),GA={__name:"5",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[WA,qA,KA,YA,ZA,JA,XA]),_:1},16))}},QA=s("h1",null,"Vue \u306B\u306F 2 \u3064\u306E\u66F8\u304D\u65B9\u304C\u3042\u308A\u307E\u3059",-1),s9=s("div",{class:"flex gap-8"},[s("div",null,[n(" Vue2 \u3067\u4E3B\u306B\u4F7F\u308F\u308C\u3066\u3044\u305F\u300COptions API\u300D "),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"data"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"methods"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"data"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"methods"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",null,[n(" Vue3 \u3067\u4E3B\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B\u300CComposition API\u300D "),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),e9=s("p",null,"\u73FE\u72B6\u3001Vue \u95A2\u9023\u306E\u8A18\u4E8B\u306F Options API \u3067\u89E3\u8AAC\u3055\u308C\u3066\u3044\u308B\u307B\u3046\u304C\u5927\u591A\u6570\u3067\u3042\u308A\u3001\u521D\u5B66\u8005\u306E\u65B9\u306F\u6DF7\u4E71\u3055\u308C\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002Vue2, 3 \u3069\u3061\u3089\u3067\u3082\u4E21 API \u306F\u4F7F\u3048\u307E\u3059\u304C\u3001\u672C\u8B1B\u5EA7\u3067\u306F\u4ECA\u5F8C\u4E3B\u6D41\u3068\u306A\u308B Composition API \u3092\u53D6\u308A\u6271\u3044\u307E\u3059\u3002",-1),l9={__name:"6",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[QA,s9,e9]),_:1},16))}};var o9="/vue-3-practices/apis.png";const n9=s("h1",null,"Composition API \u306E\u30E1\u30EA\u30C3\u30C8",-1),t9=s("p",null,"Vue \u306E\u6A5F\u80FD\u3067\u306F\u306A\u304F\u3001\u8AD6\u7406\u7684\u306A\u95A2\u5FC3\u4E8B\u3067\u30B3\u30FC\u30C9\u3092\u307E\u3068\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B",-1),r9=s("img",{src:o9,class:"h-5/6"},null,-1),a9={__name:"7",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[n9,t9,r9]),_:1},16))}},c9={inject:{$slidev:{from:M}},setup(){const e=H(0);return{count:e,increment:()=>{e.value+=1}}}},p9={class:"prose"};function i9(e,l,o,t,r,a){return v(),U("div",p9,[n(Us(t.count)+" ",1),s("button",{onClick:l[0]||(l[0]=(...c)=>t.increment&&t.increment(...c))},"+")])}var y9=Pe(c9,[["render",i9]]);const u9=s("h1",null,"\u307E\u305A\u306F\u66F8\u3044\u3066\u307F\u308B",-1),d9={class:"flex gap-8"},f9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"+"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"+"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),m9=n(" \u52D5\u4F5C\u30B5\u30F3\u30D7\u30EB "),B9={__name:"8",setup(e){const l={};return $(M),(o,t)=>{const r=y9;return v(),L(X,Z(Y(l)),{default:z(()=>[u9,s("div",d9,[f9,s("div",null,[m9,q(r)])])]),_:1},16)}}},h9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42",-1),A9=s("div",{class:"flex gap-4"},[s("div",null,[s("video",{controls:"",loop:"",style:{height:"30vh"},src:"https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"}),s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B"},"\u53C2\u8003")])]),s("div",null,[s("p",null,"\u8868\u8A08\u7B97\u30BD\u30D5\u30C8\u3068\u540C\u3058\u624B\u9806\u3092\u30B3\u30FC\u30C9\u306B\u3059\u308B\u3068"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 5")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 5\u306E\u307E\u307E\uFF08\u671F\u5F85\u306F6\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5\u306E\u307E\u307E\uFF08\u671F\u5F85\u306F6\uFF09")])])])])])],-1),v9={__name:"9",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[h9,A9]),_:1},16))}},D9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42",-1),g9=s("div",{class:"flex gap-4"},[s("div",null,[s("p",null,"\u8868\u8A08\u7B97\u30BD\u30D5\u30C8\u3068\u540C\u3058\u3053\u3068\u3092\u304A\u3053\u306A\u3046\u306B\u306F"),s("ol",null,[s("li",null,"\u5024\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u3068\u304D\u306B\u8FFD\u8DE1\u3059\u308B\u3002 \u4F8B: val1 + val2 \u306F val1 \u3068 val2 \u306E\u4E21\u65B9\u3092\u8AAD\u307F\u8FBC\u3080\u3002"),s("li",null,"\u5024\u306E\u5909\u66F4\u3092\u691C\u77E5\u3059\u308B\u3002 \u4F8B: val1 = 3 \u3068\u5165\u308C\u308B\u3068\u304D\u3002"),s("li",null,"\u6700\u521D\u306B\u5024\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u30B3\u30FC\u30C9\u3092\u518D\u5B9F\u884C\u3059\u308B\u3002 \u4F8B: sum = val1 + val2 \u3092\u518D\u5EA6\u5B9F\u884C\u3057\u3066\u3001 sum \u306E\u5024\u3092\u66F4\u65B0\u3059\u308B\u3002")]),s("p",null,"Vue \u306B\u306F 1. 2. 3. \u306E\u305F\u3081\u306E\u3057\u304F\u307F\u304C\u3042\u308B")]),s("div",null,[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 2.")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 3.")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 1.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 1.")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 1.")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 2.")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 3.")])])])])])],-1),C9={__name:"10",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[D9,g9]),_:1},16))}},E9={inject:{$slidev:{from:M}},setup(){const e=H(2),l=H(3),o=w(()=>e.value+l.value);return{val1:e,val2:l,sum:o}}},_9=n("val1: "),F9=n("val2: ");function b9(e,l,o,t,r,a){return v(),U("div",null,[s("p",null,[_9,He(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":l[0]||(l[0]=c=>t.val1=c)},null,512),[[Zo,t.val1]])]),s("p",null,[F9,He(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":l[1]||(l[1]=c=>t.val2=c)},null,512),[[Zo,t.val2]])]),s("p",null,"sum: "+Us(t.sum),1)])}var x9=Pe(E9,[["render",b9]]);const w9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08ref \u306B\u3088\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u53C2\u7167\uFF09",-1),k9=s("p",null,[s("code",null,"ref"),n(" \u3092\u4F7F\u3063\u305F\u5024\u3092\u64CD\u4F5C\u3059\u308B\u5834\u5408\u3001"),s("code",null,"setup"),n(" \u95A2\u6570\u5185\u3067\u306F "),s("code",null,"value"),n(" \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3002 "),s("code",null,"template"),n(" \u5185\u3067\u306F\u5909\u6570\uFF08\u5B9A\u6570\uFF09\u305D\u306E\u3082\u306E\u3092\u53C2\u7167\u3059\u308B\u3060\u3051\u3067\u5024\u3092\u5F97\u3089\u308C\u308B\u3002")],-1),$9={class:"flex gap-8"},S9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),O9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      val1:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      val2:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"sum: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      val1:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      val2:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"sum: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),M9={__name:"11",setup(e){const l={};return $(M),(o,t)=>{const r=x9;return v(),L(X,Z(Y(l)),{default:z(()=>[w9,k9,s("div",$9,[S9,O9,q(r)])]),_:1},16)}}},P9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u308B\uFF09",-1),T9=s("p",null,[n("\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u3057\u305F\u3044\u30C7\u30FC\u30BF\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u3001"),s("code",null,"reactive"),n(" \u3092\u4F7F\u3046")],-1),L9=s("div",{class:"flex gap-8"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"reactive"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"reactive"),s("span",{style:{color:"#858585"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""'),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"reactive"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""'),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),N9={__name:"12",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[P9,T9,L9]),_:1},16))}},R9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u305F\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u53D6\u308A\u51FA\u3059\uFF09",-1),I9=s("p",null,[n("\u524D\u9805\u306E "),s("code",null,"reactive"),n(" \u3060\u3068\u3001\u5206\u5272\u4EE3\u5165\u3057\u3066\u3082\u5024\u304C\u53D6\u308A\u51FA\u305B\u306A\u3044\u3002Vue \u3067\u306F "),s("code",null,"toRefs"),n(" \u3092\u4F7F\u3046\u3053\u3068\u3067\u53EF\u80FD\u306B\u306A\u308B\u3002")],-1),j9=s("div",{class:"flex gap-8"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"user.name: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"name: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"reactive"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"toRefs"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"reactive"),s("span",{style:{color:"#858585"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""'),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"toRefs"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"user.name: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"name: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"toRefs"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""'),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"toRefs"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),V9={__name:"13",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[R9,I9,j9]),_:1},16))}},z9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u8AAD\u307F\u8FBC\u307F\u5C02\u7528\u306B\u3059\u308B\uFF09",-1),H9=s("div",{class:"flex gap-8"},[s("div",{class:"h-md overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"<!-- user.name \u3092\u5909\u66F4\u3057\u3088\u3046\u3068\u3059\u308B\u3068\u5931\u6557\u3057\u3001\u8B66\u544A\u304C\u8868\u793A\u3055\u308C\u307E\u3059 -->")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"user.name: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"name: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"reactive"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"toRefs"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"readonly"),s("span",{style:{color:"#858585"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"reactive"),s("span",{style:{color:"#858585"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""'),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"})")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"toRefs"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"<!-- user.name \u3092\u5909\u66F4\u3057\u3088\u3046\u3068\u3059\u308B\u3068\u5931\u6557\u3057\u3001\u8B66\u544A\u304C\u8868\u793A\u3055\u308C\u307E\u3059 -->")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"user.name: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"name: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"toRefs"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"readonly"),s("span",{style:{color:"#8E8F8B"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""'),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"})")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"toRefs"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),U9={__name:"14",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[z9,H9]),_:1},16))}},W9=s("h1",null,"\u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09",-1),q9=s("p",null,[n("\u3042\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u5143\u306B\u8A08\u7B97\u7D50\u679C\u3092\u8FD4\u3057\u305F\u3044\u5834\u5408\u3001"),s("code",null,"computed"),n(" \u95A2\u6570\u3092\u5229\u7528\u3059\u308B")],-1),K9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Y9={__name:"15",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[W9,q9,K9]),_:1},16))}},Z9=s("h1",null,"\u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09",-1),J9=s("p",null,[s("code",null,"get"),n(),s("code",null,"set"),n(" \u95A2\u6570\u3092\u7528\u610F\u3059\u308B\u3053\u3068\u3067\u66F8\u8FBC\u307F\u53EF\u80FD\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B")],-1),X9=s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"handleClick"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u30EA\u30BB\u30C3\u30C8"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"set"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"handleClick"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"handleClick"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"handleClick"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u30EA\u30BB\u30C3\u30C8"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"set"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"handleClick"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"handleClick"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),G9={__name:"16",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Z9,J9,X9]),_:1},16))}},Q9={inject:{$slidev:{from:M}},setup(){const e=()=>Math.random(),l=w(()=>Math.random());return{randomMethods:e,randomComputed:l}}},sv=s("p",null,"\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u5834\u5408",-1),ev={class:"use-methods"},lv=s("p",null,"computed\u3092\u4F7F\u3063\u305F\u5834\u5408",-1),ov={class:"use-computed"};function nv(e,l,o,t,r,a){return v(),U(Cs,null,[sv,s("ol",ev,[s("li",null,Us(t.randomMethods()),1),s("li",null,Us(t.randomMethods()),1),s("li",null,Us(t.randomMethods()),1)]),lv,s("ol",ov,[s("li",null,Us(t.randomComputed),1),s("li",null,Us(t.randomComputed),1),s("li",null,Us(t.randomComputed),1)])],64)}var tv=Pe(Q9,[["render",nv]]);const rv=s("h1",null,"computed \u3068\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u9055\u3044",-1),av=s("p",null,[n("\u95A2\u6570\u547C\u3073\u51FA\u3057\u306F\u90FD\u5EA6\u547C\u3073\u51FA\u3055\u308C\u308B\u6BCE\u306B\u5B9F\u884C\u3059\u308B\u306E\u306B\u5BFE\u3057\u3001"),s("code",null,"computed"),n(" \u5185\u3067\u53C2\u7167\u3057\u3066\u3044\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u304C\u5909\u66F4\u3055\u308C\u306A\u3044\u9650\u308A\u3001"),s("code",null,"computed"),n(" \u306F\u4E00\u5EA6\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u7D50\u679C\u3092\u8FD4\u3059\u3002 \u3046\u307E\u304F\u4F7F\u3044\u5206\u3051\u308B\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A\u306B\u5F79\u7ACB\u3066\u308B\u3002")],-1),cv={class:"flex gap-4"},pv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u5834\u5408"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"use-methods"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"computed\u3092\u4F7F\u3063\u305F\u5834\u5408"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"use-computed"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u5834\u5408"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"use-methods"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"computed\u3092\u4F7F\u3063\u305F\u5834\u5408"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"use-computed"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),iv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"Math"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#E0A569"}},"random"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"Math"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#E0A569"}},"random"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"randomMethods"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"Math"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#B58451"}},"random"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"Math"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#B58451"}},"random"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),yv={__name:"17",setup(e){const l={};return $(M),(o,t)=>{const r=tv;return v(),L(X,Z(Y(l)),{default:z(()=>[rv,av,s("div",cv,[pv,iv,s("div",null,[q(r)])])]),_:1},16)}}},uv=s("h1",null,"\u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09",-1),dv=s("p",null,"\u7279\u5B9A\u306E\u30C7\u30FC\u30BF\u3092\u76E3\u8996\u3057\u3001\u5909\u66F4\u304C\u3042\u3063\u305F\u3068\u304D\u306B\u51E6\u7406\u3092\u884C\u3048\u308B\u3001\u5F15\u6570\u3068\u3057\u3066\u3001\u65B0\u3057\u3044\u5024\u3068\u305D\u306E\u524D\u306E\u5024\u3092\u53D6\u5F97\u3067\u304D\u308B\u3002",-1),fv=s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"watch"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"set"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"watch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"prev"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"prev"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"watch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"set"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"watch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"prev"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"prev"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),mv={__name:"18",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[uv,dv,fv]),_:1},16))}},Bv=s("h1",null,"\u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09",-1),hv=s("p",null,"\u914D\u5217\u3092\u76E3\u8996\u3059\u308B\u5834\u5408\u3001\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3092\u540C\u6642\u306B\u76E3\u8996\u3067\u304D\u308B",-1),Av=s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"watch"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"set"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"watch"),s("span",{style:{color:"#858585"}},"(["),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#858585"}},"],"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"prev"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"prev"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"watch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"set"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"watch"),s("span",{style:{color:"#8E8F8B"}},"(["),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#8E8F8B"}},"],"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"prev"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"prev"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),vv={__name:"19",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Bv,hv,Av]),_:1},16))}},Dv=s("h1",null,"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u69CB\u6587",-1),gv=s("ul",null,[s("li",null,"\u5C55\u958B"),s("li",null,"\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6"),s("li",null,"\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0"),s("li",null,"\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0"),s("li",null,"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0"),s("li",null,"\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0"),s("li",null,"\u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0")],-1),Cv={__name:"20",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Dv,gv]),_:1},16))}},Ev=s("h1",null,"\u5C55\u958B",-1),_v=s("p",null,"Mustache \u69CB\u6587\u3067\u30C6\u30AD\u30B9\u30C8\u5C55\u958B\u3067\u304D\u308B\u3002JavaScript \u5F0F\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B",-1),Fv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Message: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"msg"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"msg"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Hello!"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"msg"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Message: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"msg"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"msg"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Hello!"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"msg"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),bv=s("p",null,"\u7D50\u679C",-1),xv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"Message: Hello!")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"Message: Hello!")])])])],-1),wv={__name:"21",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Ev,_v,Fv,bv,xv]),_:1},16))}},kv={inject:{$slidev:{from:M}},setup(){const e=H(10);return setInterval(()=>{e.value+=1},1e3),{counter:e}}},$v={id:"counter"};function Sv(e,l,o,t,r,a){return v(),U("div",$v,"Counter: "+Us(t.counter),1)}var Ov=Pe(kv,[["render",Sv]]);const Mv=s("h1",null,"\u5C55\u958B\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u4F7F\u3046\u3068\uFF09",-1),Pv=s("p",{class:"text-sm"}," counter\u30921\u79D2\u3054\u3068\u306B\u5897\u3084\u3057\u3066\u3044\u304F ",-1),Tv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"setInterval"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"},"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"setInterval"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Lv=s("p",null,"\u7D50\u679C",-1),Nv={__name:"22",setup(e){const l={};return $(M),(o,t)=>{const r=Ov;return v(),L(X,Z(Y(l)),{default:z(()=>[Mv,Pv,Tv,Lv,s("div",null,[q(r)])]),_:1},16)}}},Rv=s("h1",null,"\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6",-1),Iv=s("ul",null,[s("li",null,"\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F Vue \u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u308B\u7279\u5225\u306A\u5C5E\u6027"),s("li",null,"v- \u304B\u3089\u59CB\u307E\u308B"),s("li",null,[n("\u7279\u5B9A\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\uFF08v-bind \u3068 v-on\uFF09\u306F\u7701\u7565\u8A18\u6CD5\u304C\u3042\u308B\uFF08\u4F8B\uFF1A"),s("code",null,":href"),n(),s("code",null,"@click"),n("\uFF09")]),s("li",null,[n("\u7279\u5B9A\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B\uFF08\u4F8B\uFF1A"),s("code",null,"v-on:click"),n("\uFF09")])],-1),jv=s("p",null,"\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u304C\u4F7F\u308F\u308C\u3066\u3044\u308B\u7B87\u6240\u306F Vue \u306E\u6A5F\u80FD\u3068\u95A2\u4FC2\u3057\u3066\u3044\u308B\u3068\u6C17\u3065\u3051\u308B\u3068\u3088\u3044",-1),Vv={__name:"23",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Rv,Iv,jv]),_:1},16))}},zv=s("h1",null,"\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0",-1),Hv=s("p",null,[n("\u300C\u5C55\u958B\u300D\u3068\u540C\u3058\u3088\u3046\u306B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092 HTML \u5C5E\u6027\u306B\u53CD\u6620\u3055\u305B\u308B\u5834\u5408\u3001 "),s("code",null,"v-bind"),n(" \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F7F\u3046")],-1),Uv=s("div",null,[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-bind"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"url"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"https://v3.ja.vuejs.org/"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-bind"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"url"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"https://v3.ja.vuejs.org/"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])]),s("p",null,"\u7701\u7565\u3059\u308B\u3068\u3053\u306E\u3088\u3046\u306B\u66F8\u3051\u308B")],-1),Wv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"url"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"url"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),qv={__name:"24",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[zv,Hv,Uv,Wv]),_:1},16))}},Kv=s("h1",null,"\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF08\u30AF\u30E9\u30B9\u3068\u30B9\u30BF\u30A4\u30EB\uFF09",-1),Yv=s("p",null,"\u30AF\u30E9\u30B9\u5C5E\u6027\u3068\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027\u306E\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587\u3068\u914D\u5217\u69CB\u6587\u304C\u3042\u308B",-1),Zv=s("div",{class:"flex gap-6"},[s("div",null,[s("p",{class:"text-xs"},"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"{ "),s("span",{style:{color:"#E0A569"}},"red"),s("span",{style:{color:"#858585"}},": "),s("span",{style:{color:"#B8A965"}},"red"),s("span",{style:{color:"#858585"}}," }"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"red"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"red"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"style"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#E0A569"}},"red"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"color"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"red"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"style"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"{ "),s("span",{style:{color:"#B58451"}},"red"),s("span",{style:{color:"#8E8F8B"}},": "),s("span",{style:{color:"#8C862B"}},"red"),s("span",{style:{color:"#8E8F8B"}}," }"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"red"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"red"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#B58451"}},"red"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"color"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"red"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",null,[s("p",{class:"text-xs"},"\u914D\u5217\u69CB\u6587\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3051\u308B"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])]),s("p",{class:"text-xs"},"\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u308B"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red, { red }]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red, { red }]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])]),s("p",{class:"text-xs"},"\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027\u306B\u3082\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587\u3068\u914D\u5217\u69CB\u6587\u304C\u3042\u308B"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"style"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"{ "),s("span",{style:{color:"#E0A569"}},"color"),s("span",{style:{color:"#858585"}},": "),s("span",{style:{color:"#C98A7D"}},"'red'"),s("span",{style:{color:"#858585"}}," }"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"style"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"{ "),s("span",{style:{color:"#B58451"}},"color"),s("span",{style:{color:"#8E8F8B"}},": "),s("span",{style:{color:"#B56959"}},"'red'"),s("span",{style:{color:"#8E8F8B"}}," }"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),Jv={__name:"25",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Kv,Yv,Zv]),_:1},16))}},Xv=s("h1",null,"\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0",-1),Gv=s("p",null,[s("code",null,"v-on"),n(" \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F HTML \u8981\u7D20\u306A\u3069\u306E"),s("a",{href:"https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events",target:"_blank",rel:"noopener"},"\u30A4\u30D9\u30F3\u30C8"),n("\u64CD\u4F5C\u306B\u4F7F\u308F\u308C\u308B\u3002"),s("code",null,":"),n("\u306E\u5F8C\u306E\u5F15\u6570\u3067\u30A4\u30D9\u30F3\u30C8\u306E\u7A2E\u985E\u3092\u6307\u5B9A\u3067\u304D\u308B")],-1),Qv=s("div",{class:"h-60 mb-6 overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-on"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"clicked "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}}," times."),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-on"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"clicked "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}}," times."),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),s1=s("p",null,"\u7701\u7565\u3059\u308B\u3068\u3053\u306E\u3088\u3046\u306B\u304B\u3051\u308B",-1),e1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"counter += 1"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"counter += 1"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),l1={__name:"26",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Xv,Gv,Qv,s1,e1]),_:1},16))}},o1=s("h1",null,"\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\uFF08\u95A2\u6570\u540D\u3092\u5C5E\u6027\u5024\u3068\u3057\u3066\u4F7F\u3046\uFF09",-1),n1=s("p",null,"\u95A2\u6570\u3092\u6E21\u3059\u3068\u8907\u96D1\u306A\u51E6\u7406\u304C\u66F8\u304D\u3084\u3059\u3044",-1),t1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"clicked "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}}," times."),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"clicked "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}}," times."),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),r1={__name:"27",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[o1,n1,t1]),_:1},16))}};let a1=e=>crypto.getRandomValues(new Uint8Array(e)),c1=(e,l,o)=>{let t=(2<<Math.log(e.length-1)/Math.LN2)-1,r=-~(1.6*t*l/e.length);return(a=l)=>{let c="";for(;;){let p=o(r),i=r;for(;i--;)if(c+=e[p[i]&t]||"",c.length===a)return c}}},p1=(e,l=21)=>c1(e,l,a1);const i1=["width","height"],y1=["id"],u1=["fill"],d1=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],ua=bs({__name:"Arrow",props:{x1:null,y1:null,x2:null,y2:null,width:null,color:null},setup(e){$(M);const o=p1("abcedfghijklmn",10)();return(t,r)=>(v(),U("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",{id:D(o),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,u1)],8,y1)]),s("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${D(o)})`},null,8,d1)],8,i1))}});/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function w8(e){return typeof e=="undefined"||e===null}function f1(e){return typeof e=="object"&&e!==null}function m1(e){return Array.isArray(e)?e:w8(e)?[]:[e]}function B1(e,l){var o,t,r,a;if(l)for(a=Object.keys(l),o=0,t=a.length;o<t;o+=1)r=a[o],e[r]=l[r];return e}function h1(e,l){var o="",t;for(t=0;t<l;t+=1)o+=e;return o}function A1(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var v1=w8,D1=f1,g1=m1,C1=h1,E1=A1,_1=B1,da={isNothing:v1,isObject:D1,toArray:g1,repeat:C1,isNegativeZero:E1,extend:_1};function k8(e,l){var o="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(o+='in "'+e.mark.name+'" '),o+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!l&&e.mark.snippet&&(o+=`

`+e.mark.snippet),t+" "+o):t}function Qo(e,l){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=l,this.message=k8(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Qo.prototype=Object.create(Error.prototype);Qo.prototype.constructor=Qo;Qo.prototype.toString=function(l){return this.name+": "+k8(this,l)};var El=Qo,F1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],b1=["scalar","sequence","mapping"];function x1(e){var l={};return e!==null&&Object.keys(e).forEach(function(o){e[o].forEach(function(t){l[String(t)]=o})}),l}function w1(e,l){if(l=l||{},Object.keys(l).forEach(function(o){if(F1.indexOf(o)===-1)throw new El('Unknown option "'+o+'" is met in definition of "'+e+'" YAML type.')}),this.options=l,this.tag=e,this.kind=l.kind||null,this.resolve=l.resolve||function(){return!0},this.construct=l.construct||function(o){return o},this.instanceOf=l.instanceOf||null,this.predicate=l.predicate||null,this.represent=l.represent||null,this.representName=l.representName||null,this.defaultStyle=l.defaultStyle||null,this.multi=l.multi||!1,this.styleAliases=x1(l.styleAliases||null),b1.indexOf(this.kind)===-1)throw new El('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Js=w1;function pp(e,l){var o=[];return e[l].forEach(function(t){var r=o.length;o.forEach(function(a,c){a.tag===t.tag&&a.kind===t.kind&&a.multi===t.multi&&(r=c)}),o[r]=t}),o}function k1(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},l,o;function t(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(l=0,o=arguments.length;l<o;l+=1)arguments[l].forEach(t);return e}function _r(e){return this.extend(e)}_r.prototype.extend=function(l){var o=[],t=[];if(l instanceof Js)t.push(l);else if(Array.isArray(l))t=t.concat(l);else if(l&&(Array.isArray(l.implicit)||Array.isArray(l.explicit)))l.implicit&&(o=o.concat(l.implicit)),l.explicit&&(t=t.concat(l.explicit));else throw new El("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(a){if(!(a instanceof Js))throw new El("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new El("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new El("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(a){if(!(a instanceof Js))throw new El("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(_r.prototype);return r.implicit=(this.implicit||[]).concat(o),r.explicit=(this.explicit||[]).concat(t),r.compiledImplicit=pp(r,"implicit"),r.compiledExplicit=pp(r,"explicit"),r.compiledTypeMap=k1(r.compiledImplicit,r.compiledExplicit),r};var $1=_r,S1=new Js("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),O1=new Js("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),M1=new Js("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),P1=new $1({explicit:[S1,O1,M1]});function T1(e){if(e===null)return!0;var l=e.length;return l===1&&e==="~"||l===4&&(e==="null"||e==="Null"||e==="NULL")}function L1(){return null}function N1(e){return e===null}var R1=new Js("tag:yaml.org,2002:null",{kind:"scalar",resolve:T1,construct:L1,predicate:N1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function I1(e){if(e===null)return!1;var l=e.length;return l===4&&(e==="true"||e==="True"||e==="TRUE")||l===5&&(e==="false"||e==="False"||e==="FALSE")}function j1(e){return e==="true"||e==="True"||e==="TRUE"}function V1(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var z1=new Js("tag:yaml.org,2002:bool",{kind:"scalar",resolve:I1,construct:j1,predicate:V1,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function H1(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function U1(e){return 48<=e&&e<=55}function W1(e){return 48<=e&&e<=57}function q1(e){if(e===null)return!1;var l=e.length,o=0,t=!1,r;if(!l)return!1;if(r=e[o],(r==="-"||r==="+")&&(r=e[++o]),r==="0"){if(o+1===l)return!0;if(r=e[++o],r==="b"){for(o++;o<l;o++)if(r=e[o],r!=="_"){if(r!=="0"&&r!=="1")return!1;t=!0}return t&&r!=="_"}if(r==="x"){for(o++;o<l;o++)if(r=e[o],r!=="_"){if(!H1(e.charCodeAt(o)))return!1;t=!0}return t&&r!=="_"}if(r==="o"){for(o++;o<l;o++)if(r=e[o],r!=="_"){if(!U1(e.charCodeAt(o)))return!1;t=!0}return t&&r!=="_"}}if(r==="_")return!1;for(;o<l;o++)if(r=e[o],r!=="_"){if(!W1(e.charCodeAt(o)))return!1;t=!0}return!(!t||r==="_")}function K1(e){var l=e,o=1,t;if(l.indexOf("_")!==-1&&(l=l.replace(/_/g,"")),t=l[0],(t==="-"||t==="+")&&(t==="-"&&(o=-1),l=l.slice(1),t=l[0]),l==="0")return 0;if(t==="0"){if(l[1]==="b")return o*parseInt(l.slice(2),2);if(l[1]==="x")return o*parseInt(l.slice(2),16);if(l[1]==="o")return o*parseInt(l.slice(2),8)}return o*parseInt(l,10)}function Y1(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!da.isNegativeZero(e)}var Z1=new Js("tag:yaml.org,2002:int",{kind:"scalar",resolve:q1,construct:K1,predicate:Y1,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),J1=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function X1(e){return!(e===null||!J1.test(e)||e[e.length-1]==="_")}function G1(e){var l,o;return l=e.replace(/_/g,"").toLowerCase(),o=l[0]==="-"?-1:1,"+-".indexOf(l[0])>=0&&(l=l.slice(1)),l===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:l===".nan"?NaN:o*parseFloat(l,10)}var Q1=/^[-+]?[0-9]+e/;function sD(e,l){var o;if(isNaN(e))switch(l){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(l){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(l){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(da.isNegativeZero(e))return"-0.0";return o=e.toString(10),Q1.test(o)?o.replace("e",".e"):o}function eD(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||da.isNegativeZero(e))}var lD=new Js("tag:yaml.org,2002:float",{kind:"scalar",resolve:X1,construct:G1,predicate:eD,represent:sD,defaultStyle:"lowercase"}),oD=P1.extend({implicit:[R1,z1,Z1,lD]}),nD=oD,$8=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),S8=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function tD(e){return e===null?!1:$8.exec(e)!==null||S8.exec(e)!==null}function rD(e){var l,o,t,r,a,c,p,i=0,y=null,u,f,d;if(l=$8.exec(e),l===null&&(l=S8.exec(e)),l===null)throw new Error("Date resolve error");if(o=+l[1],t=+l[2]-1,r=+l[3],!l[4])return new Date(Date.UTC(o,t,r));if(a=+l[4],c=+l[5],p=+l[6],l[7]){for(i=l[7].slice(0,3);i.length<3;)i+="0";i=+i}return l[9]&&(u=+l[10],f=+(l[11]||0),y=(u*60+f)*6e4,l[9]==="-"&&(y=-y)),d=new Date(Date.UTC(o,t,r,a,c,p,i)),y&&d.setTime(d.getTime()-y),d}function aD(e){return e.toISOString()}var cD=new Js("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:tD,construct:rD,instanceOf:Date,represent:aD});function pD(e){return e==="<<"||e===null}var iD=new Js("tag:yaml.org,2002:merge",{kind:"scalar",resolve:pD}),fa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function yD(e){if(e===null)return!1;var l,o,t=0,r=e.length,a=fa;for(o=0;o<r;o++)if(l=a.indexOf(e.charAt(o)),!(l>64)){if(l<0)return!1;t+=6}return t%8===0}function uD(e){var l,o,t=e.replace(/[\r\n=]/g,""),r=t.length,a=fa,c=0,p=[];for(l=0;l<r;l++)l%4===0&&l&&(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)),c=c<<6|a.indexOf(t.charAt(l));return o=r%4*6,o===0?(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)):o===18?(p.push(c>>10&255),p.push(c>>2&255)):o===12&&p.push(c>>4&255),new Uint8Array(p)}function dD(e){var l="",o=0,t,r,a=e.length,c=fa;for(t=0;t<a;t++)t%3===0&&t&&(l+=c[o>>18&63],l+=c[o>>12&63],l+=c[o>>6&63],l+=c[o&63]),o=(o<<8)+e[t];return r=a%3,r===0?(l+=c[o>>18&63],l+=c[o>>12&63],l+=c[o>>6&63],l+=c[o&63]):r===2?(l+=c[o>>10&63],l+=c[o>>4&63],l+=c[o<<2&63],l+=c[64]):r===1&&(l+=c[o>>2&63],l+=c[o<<4&63],l+=c[64],l+=c[64]),l}function fD(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var mD=new Js("tag:yaml.org,2002:binary",{kind:"scalar",resolve:yD,construct:uD,predicate:fD,represent:dD}),BD=Object.prototype.hasOwnProperty,hD=Object.prototype.toString;function AD(e){if(e===null)return!0;var l=[],o,t,r,a,c,p=e;for(o=0,t=p.length;o<t;o+=1){if(r=p[o],c=!1,hD.call(r)!=="[object Object]")return!1;for(a in r)if(BD.call(r,a))if(!c)c=!0;else return!1;if(!c)return!1;if(l.indexOf(a)===-1)l.push(a);else return!1}return!0}function vD(e){return e!==null?e:[]}var DD=new Js("tag:yaml.org,2002:omap",{kind:"sequence",resolve:AD,construct:vD}),gD=Object.prototype.toString;function CD(e){if(e===null)return!0;var l,o,t,r,a,c=e;for(a=new Array(c.length),l=0,o=c.length;l<o;l+=1){if(t=c[l],gD.call(t)!=="[object Object]"||(r=Object.keys(t),r.length!==1))return!1;a[l]=[r[0],t[r[0]]]}return!0}function ED(e){if(e===null)return[];var l,o,t,r,a,c=e;for(a=new Array(c.length),l=0,o=c.length;l<o;l+=1)t=c[l],r=Object.keys(t),a[l]=[r[0],t[r[0]]];return a}var _D=new Js("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:CD,construct:ED}),FD=Object.prototype.hasOwnProperty;function bD(e){if(e===null)return!0;var l,o=e;for(l in o)if(FD.call(o,l)&&o[l]!==null)return!1;return!0}function xD(e){return e!==null?e:{}}var wD=new Js("tag:yaml.org,2002:set",{kind:"mapping",resolve:bD,construct:xD});nD.extend({implicit:[cD,iD],explicit:[mD,DD,_D,wD]});function ip(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var kD=new Array(256),$D=new Array(256);for(var Vl=0;Vl<256;Vl++)kD[Vl]=ip(Vl)?1:0,$D[Vl]=ip(Vl);function SD(e){return Array.from(new Set(e))}function yp(...e){let l,o,t;e.length===1?(l=0,t=1,[o]=e):[l,o,t=1]=e;const r=[];let a=l;for(;a<o;)r.push(a),a+=t||1;return r}function OD(e,l){if(!l||l==="all"||l==="*")return yp(1,e+1);const o=[];for(const t of l.split(/[,;]/g))if(!t.includes("-"))o.push(+t);else{const[r,a]=t.split("-",2);o.push(...yp(+r,a?+a+1:e+1))}return SD(o).filter(t=>t<=e).sort((t,r)=>t-r)}const ut=bs({__name:"CodeHighlightController",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0}},setup(e){const l=e;$(M);const o=$(Oo),t=$(Cl),r=$(Mo);function a(i=5){const y=[],u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",f=u.length;for(let d=0;d<i;d++)y.push(u.charAt(Math.floor(Math.random()*f)));return y.join("")}const c=H(),p=Pl();return po(()=>{const i=l.at==null?t==null?void 0:t.value.length:l.at,y=w(()=>r!=null&&r.value?l.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(i||0)),l.ranges.length-1)),u=w(()=>l.ranges[y.value]||"");if(l.ranges.length>=2&&!(r!=null&&r.value)){const f=a(),d=Ed(l.ranges.length-1).map(m=>f+m);t!=null&&t.value&&(t.value.push(...d),ct(()=>d.forEach(m=>yr(t.value,m)),p))}tn(()=>{if(!c.value)return;const d=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const m of d){const h=Array.from(m.querySelectorAll(".line")),C=OD(h.length,u.value);h.forEach((g,b)=>{const _=C.includes(b+1);g.classList.toggle(Dl,!0),g.classList.toggle("highlighted",_),g.classList.toggle("dishonored",!_)})}})}),(i,y)=>(v(),U("div",{ref_key:"el",ref:c},[Ze(i.$slots,"default")],512))}}),MD=s("h1",null,"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",-1),PD=s("p",null,[s("code",null,"v-if"),n(" \u3042\u308B\u3044\u306F "),s("code",null,"v-show"),n(" \u306B\u3088\u3063\u3066\u6761\u4EF6\u306B\u5FDC\u3058\u3066\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u7BC4\u56F2\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002 "),s("code",null,"v-show"),n(" \u306F\u898B\u305F\u76EE\u4E0A\u975E\u8868\u793A\u306B\u3059\u308B\u304C "),s("code",null,"v-if"),n(" \u306F DOM \u8981\u7D20\u3082\u53D6\u308A\u9664\u304F\u3002")],-1),TD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"conditional-rendering"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"seen"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Now you see me"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"seen"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"seen"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"conditional-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"seen"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Now you see me"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"seen"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"seen"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),LD={__name:"28",setup(e){const l={};return $(M),(o,t)=>{const r=ut,a=ua,c=sa("click");return v(),L(X,Z(Y(l)),{default:z(()=>[MD,PD,q(r,dl({},{ranges:["all","3","10","all"]}),{default:z(()=>[TD]),_:1},16),He(q(a,{x1:"400",y1:"420",x2:"230",y2:"365",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,2]])]),_:1},16)}}},ND=s("h1",null,"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08v-if \u3068 v-show \u306E\u4F7F\u3044\u5206\u3051\uFF09",-1),RD=s("div",{class:"mb-6"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}}),s("th",{style:{"text-align":"left"}},"v-if"),s("th",{style:{"text-align":"left"}},"v-show")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},"\u521D\u671F\u30B3\u30B9\u30C8"),s("td",{style:{"text-align":"left"}},"\u4F4E\u3044"),s("td",{style:{"text-align":"left"}},"\u9AD8\u3044")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"\u5207\u308A\u66FF\u3048\u30B3\u30B9\u30C8"),s("td",{style:{"text-align":"left"}},"\u9AD8\u3044"),s("td",{style:{"text-align":"left"}},"\u4F4E\u3044")])])])],-1),ID=s("ul",null,[s("li",null,[n("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u304B\u3089\u3042\u307E\u308A\u5909\u5316\u3057\u306A\u3044\u30B1\u30FC\u30B9\u3067\u3042\u308C\u3070 "),s("code",null,"v-if"),n("\u3092\u4F7F\u3046")]),s("li",null,[n("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u304B\u3089\u983B\u7E41\u306B\u5909\u5316\u3059\u308B\u30B1\u30FC\u30B9\u3067\u3042\u308C\u3070 "),s("code",null,"v-show"),n("\u3092\u4F7F\u3046")])],-1),jD={__name:"29",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[ND,RD,ID]),_:1},16))}},VD=s("h1",null,"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",-1),zD=s("p",null,[s("code",null,"v-if v-else v-else-if"),n(" \u3067\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u6761\u4EF6\u5206\u5C90\u304C\u3067\u304D\u308B\u3002 "),s("code",null,"template"),n(" \u8981\u7D20\u306B\u5BFE\u3057\u3066\u4F7F\u3046\u3053\u3068\u3067\u30B0\u30EB\u30FC\u30D4\u30F3\u30B0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B\u3002")],-1),HD=s("div",{class:"flex gap-4"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#C98A7D"}},`'A'"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"A"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-else-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#C98A7D"}},`'B'"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"B"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-else-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#C98A7D"}},`'C'"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"C"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-else"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Not A/B/C"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"A"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B56959"}},`'A'"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"A"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-else-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B56959"}},`'B'"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"B"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-else-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B56959"}},`'C'"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"C"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-else"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Not A/B/C"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"A"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])]),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"ok"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"h1"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Title"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"h1"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Paragraph 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Paragraph 2"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"ok"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"ok"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"ok"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"h1"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Title"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"h1"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Paragraph 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Paragraph 2"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"ok"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"ok"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),UD={__name:"30",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[VD,zD,HD]),_:1},16))}},WD=s("h1",null,"\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",-1),qD=s("p",null,"\u914D\u5217\u3042\u308B\u3044\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u3082\u3068\u306B\u53CD\u5FA9\u3057\u305F\u8981\u7D20\u306E\u8868\u793A\u304C\u3067\u304D\u308B\u3002",-1),KD=s("div",{class:"flex gap-8"},[s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"list-rendering"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"todos"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"text"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"todos"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn JavaScript"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn Vue"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Build something awesome"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"];")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"todos"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"list-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"todos"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"text"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"todos"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn JavaScript"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn Vue"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Build something awesome"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"];")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"todos"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",{class:"flex-shrink"},[s("p",null,"\u7D50\u679C"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])])],-1),YD={__name:"31",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[WD,qD,KD]),_:1},16))}},ZD=s("h1",null,"\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",-1),JD=s("p",null,[n("\u8981\u7D20\u306E\u518D\u5229\u7528\u3068\u4E26\u3073\u66FF\u3048\u3092\u8003\u616E\u3059\u308B\u5834\u5408\u3001\u4E00\u610F\u306A\u5024\u3092 "),s("code",null,"key"),n(" \u5C5E\u6027\u306B\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B\u3002")],-1),XD=s("div",{class:"flex gap-8"},[s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"list-rendering"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"todos"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"text"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"todos"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn JavaScript"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn Vue"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Build something awesome"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"];")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"todos"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"list-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"todos"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"text"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"todos"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn JavaScript"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn Vue"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Build something awesome"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"];")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"todos"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",{class:"flex-shrink"},[s("p",null,"\u7D50\u679C"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])])],-1),GD={__name:"32",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[ZD,JD,XD]),_:1},16))}},QD={inject:{$slidev:{from:M}},setup(){return{message:H("Hello Vue!")}}},sg={id:"two-way-binding"};function eg(e,l,o,t,r,a){return v(),U("div",sg,[s("p",null,Us(t.message),1),He(s("input",{class:"text-black p-1","onUpdate:modelValue":l[0]||(l[0]=c=>t.message=c)},null,512),[[Zo,t.message]])])}var lg=Pe(QD,[["render",eg]]);const og=s("h1",null,"\u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0",-1),ng=s("p",null,[s("code",null,"v-model"),n(" \u306B\u3088\u3063\u3066 form \u306E input \u8981\u7D20\u3084 textarea \u8981\u7D20\u3001select \u8981\u7D20\u306E\u5165\u529B\u30A4\u30D9\u30F3\u30C8\u306B\u5FDC\u3058\u3066\u30C7\u30FC\u30BF\u3092\u66F4\u65B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u3002")],-1),tg={class:"flex gap-8"},rg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"two-way-binding"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello Vue!"'),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"two-way-binding"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello Vue!"'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),ag={__name:"33",setup(e){const l={};return $(M),(o,t)=>{const r=lg;return v(),L(X,Z(Y(l)),{default:z(()=>[og,ng,s("div",tg,[rg,s("div",null,[q(r)])])]),_:1},16)}}},cg=s("h1",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",-1),pg=s("ul",null,[s("li",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210"),s("li",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057"),s("li",null,"\u30A4\u30D9\u30F3\u30C8\u8CFC\u8AAD\u3092\u7528\u3044\u305F\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057"),s("li",null,"v-model \u3092\u7528\u3044\u305F\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057"),s("li",null,"v-model \u3092\u7528\u3044\u306A\u3044\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057"),s("li",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067 v-model \u3092\u4F7F\u3046"),s("li",null,"\u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1")],-1),ig={__name:"34",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[cg,pg]),_:1},16))}};var yg="/vue-3-practices/components.png";const ug=s("h1",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210",-1),dg=s("p",null,"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u53C2\u7167\u3055\u308C\u30C4\u30EA\u30FC\u69CB\u9020\u306B\u306A\u308B\u3002\u6700\u4E0A\u4F4D\u306F\u30EB\u30FC\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08App.vue\uFF09",-1),fg=s("img",{src:yg,alt:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210",style:{height:"80%",width:"auto"}},null,-1),mg={__name:"35",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[ug,dg,fg]),_:1},16))}},Bg=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),hg=s("p",null,"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B \u6587\u5B57\u5217 \u3092\u6E21\u3057\u3066\u307F\u308B",-1),Ag=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"title"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"Hello!"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"title"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"Hello!"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",null,[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"title"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"String"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"props"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"title"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"String"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),vg={__name:"36",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Bg,hg,Ag]),_:1},16))}},Dg=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),gg=s("p",null,"\u6570\u5024\u3092\u6E21\u3059\u5834\u5408\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B",-1),Cg={class:"flex gap-8"},Eg=s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue",-1),_g=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#6394BF"}},"14"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#296AA3"}},"14"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Fg=s("p",{class:"text-xs"},"\u9759\u7684\u306A\u5024\u3067\u3059\u304C\u3001\u3053\u308C\u304C\u6587\u5B57\u5217\u3067\u306F\u306A\u304F JavaScript \u306E\u5F0F\u3060\u3068Vue\u306B\u4F1D\u3048\u308B\u305F\u3081\u306B\u306Fv-bind \u3092\u4F7F\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",-1),bg=s("div",null,[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"Number"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"props"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"Number"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),xg={__name:"37",setup(e){const l={};return $(M),(o,t)=>{const r=ut,a=ua,c=sa("click");return v(),L(X,Z(Y(l)),{default:z(()=>[Dg,gg,s("div",Cg,[s("div",null,[Eg,q(r,dl({},{ranges:["all","2","all"]}),{default:z(()=>[_g]),_:1},16),Fg]),bg]),He(q(a,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},wg=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),kg=s("p",null,"\u771F\u507D\u5024\uFF08true / false\uFF09\u3092\u6E21\u3059\u5834\u5408\u3082\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B",-1),$g={class:"flex gap-8"},Sg=s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue",-1),Og=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"is-show"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"is-show"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Mg=s("div",null,[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("div",{class:"h-xs overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"show"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"props'is-show'\u304Ctrue\u3067\u3042\u308C\u3070\u898B\u308C\u307E\u3059"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"isShow"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"Boolean"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"show"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isShow"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"show"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"show"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"props'is-show'\u304Ctrue\u3067\u3042\u308C\u3070\u898B\u308C\u307E\u3059"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"props"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"Boolean"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"show"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"show"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),Pg={__name:"38",setup(e){const l={};return $(M),(o,t)=>{const r=ut,a=ua,c=sa("click");return v(),L(X,Z(Y(l)),{default:z(()=>[wg,kg,s("div",$g,[s("div",null,[Sg,q(r,dl({},{ranges:["all","2","all"]}),{default:z(()=>[Og]),_:1},16)]),Mg]),He(q(a,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},Tg=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),Lg=s("p",null,"props \u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B",-1),Ng={class:"flex gap-8"},Rg=s("div",null,[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"is-show"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"is-show"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),Ig=s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue",-1),jg={class:"h-xs overflow-y-auto"},Vg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"show"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"props'is-show'\u304Ctrue\u3067\u3042\u308C\u3070\u898B\u308C\u307E\u3059"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"isShow"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"Boolean"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#E0A569"}},"default"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"show"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isShow"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"show"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"show"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"props'is-show'\u304Ctrue\u3067\u3042\u308C\u3070\u898B\u308C\u307E\u3059"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"props"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"Boolean"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B58451"}},"default"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"show"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"show"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),zg={__name:"39",setup(e){const l={};return $(M),(o,t)=>{const r=ut;return v(),L(X,Z(Y(l)),{default:z(()=>[Tg,Lg,s("div",Ng,[Rg,s("div",null,[Ig,s("div",jg,[q(r,dl({},{ranges:["all","9-12","all"]}),{default:z(()=>[Vg]),_:1},16)])])])]),_:1},16)}}},Hg=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),Ug=s("p",null,"\u914D\u5217\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3059\u5834\u5408\u3082\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B",-1),Wg=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"student"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"{ "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},": "),s("span",{style:{color:"#C98A7D"}},"'taro'"),s("span",{style:{color:"#858585"}},", "),s("span",{style:{color:"#E0A569"}},"old"),s("span",{style:{color:"#858585"}},": "),s("span",{style:{color:"#C98A7D"}},"'16'"),s("span",{style:{color:"#858585"}}," }"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"student"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"{ "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},": "),s("span",{style:{color:"#B56959"}},"'taro'"),s("span",{style:{color:"#8E8F8B"}},", "),s("span",{style:{color:"#B58451"}},"old"),s("span",{style:{color:"#8E8F8B"}},": "),s("span",{style:{color:"#B56959"}},"'16'"),s("span",{style:{color:"#8E8F8B"}}," }"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",null,[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u3053\u3093\u306B\u3061\u306F\u3001"),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}},"\u3055\u3093\u3001"),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"old"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}},"\u6B73\u306B\u306A\u308A\u307E\u3057\u305F\u306D"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"student"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"Object"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"student"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u3053\u3093\u306B\u3061\u306F\u3001"),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}},"\u3055\u3093\u3001"),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"old"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}},"\u6B73\u306B\u306A\u308A\u307E\u3057\u305F\u306D"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"props"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"student"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"Object"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"student"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),qg={__name:"40",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Hg,Ug,Wg]),_:1},16))}},Kg={inject:{$slidev:{from:M}},setup(e,l){return{clickHandler:()=>{l.emit("child-clicked","Hello!")}}}};function Yg(e,l,o,t,r,a){return v(),U("button",{onClick:l[0]||(l[0]=(...c)=>t.clickHandler&&t.clickHandler(...c))},"emit !")}var Zg=Pe(Kg,[["render",Yg]]);const Jg={inject:{$slidev:{from:M}},components:{ChildComponent:Zg},setup(){return{clicked:l=>{alert(l)}}}};function Xg(e,l,o,t,r,a){const c=Ln("ChildComponent");return v(),L(c,{onChildClicked:t.clicked},null,8,["onChildClicked"])}var Gg=Pe(Jg,[["render",Xg]]);const Qg=s("h1",null,"\u30A4\u30D9\u30F3\u30C8\u8CFC\u8AAD\u3092\u7528\u3044\u305F\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),sC=s("p",null,"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u767A\u706B\u3055\u305B\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u53EF\u80FD",-1),eC={class:"flex gap-8"},lC=s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"child-clicked"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"clicked"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"clicked"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"alert"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"clicked"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"child-clicked"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"clicked"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"clicked"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"alert"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"clicked"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),oC=s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"clickHandler"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"emit !"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"context"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"clickHandler"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"context"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"emit"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"child-clicked"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Hello!"'),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"clickHandler"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"clickHandler"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"emit !"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"context"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"clickHandler"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"context"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"emit"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"child-clicked"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Hello!"'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"clickHandler"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),nC={class:"flex-shrink-0"},tC=s("p",{class:"text-xs"},"\u5B9F\u884C\u30B5\u30F3\u30D7\u30EB",-1),rC={__name:"41",setup(e){const l={};return $(M),(o,t)=>{const r=Gg;return v(),L(X,Z(Y(l)),{default:z(()=>[Qg,sC,s("div",eC,[lC,oC,s("div",nC,[tC,q(r)])])]),_:1},16)}}},aC={inject:{$slidev:{from:M}},props:{modelValue:String},setup(e,l){const o=w({get:()=>e.modelValue,set:r=>{l.emit("update:modelValue",r)}});return{title:o,changeTitle:()=>{l.emit("update:modelValue",o.value)}}}};function cC(e,l,o,t,r,a){return He((v(),U("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>t.title=c)},null,512)),[[Zo,t.title]])}var O8=Pe(aC,[["render",cC]]);const pC={inject:{$slidev:{from:M}},components:{TwowayChild:O8},setup(){return{title:H("Hello !")}}};function iC(e,l,o,t,r,a){const c=O8;return v(),U(Cs,null,[q(c,{modelValue:t.title,"onUpdate:modelValue":l[0]||(l[0]=p=>t.title=p)},null,8,["modelValue"]),s("p",null,Us(t.title),1)],64)}var yC=Pe(pC,[["render",iC]]);const uC=s("h1",null,"v-model \u3092\u7528\u3044\u305F\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),dC=s("p",null,"\u89AA\u5B50\u3067\u540C\u3058\u5024\u306B\u306A\u308B\u3088\u3046\u306B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\uFF08\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u9593\u306E\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF09",-1),fC={class:"flex gap-8"},mC=s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," ... "),s("span",{style:{color:"#758575"}},"// \u4E2D\u7565;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello !"'),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," ... "),s("span",{style:{color:"#A0ADA0"}},"// \u4E2D\u7565;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),BC=s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("div",{class:"h-xs overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"modelValue"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"String"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"context"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"modelValue"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"set"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#B8A965"}},"context"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"emit"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"props"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"modelValue"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"String"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"context"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"modelValue"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"set"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8C862B"}},"context"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"emit"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"update:modelValue"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),hC={class:"flex-shrink-0"},AC=s("p",{class:"text-xs"},"\u5B9F\u884C\u30B5\u30F3\u30D7\u30EB",-1),vC={__name:"42",setup(e){const l={};return $(M),(o,t)=>{const r=yC;return v(),L(X,Z(Y(l)),{default:z(()=>[uC,dC,s("div",fC,[mC,BC,s("div",hC,[AC,q(r)])])]),_:1},16)}}},DC=s("h1",null,"v-model \u3092\u7528\u3044\u306A\u3044\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),gC=s("p",null,"\u89AA\u5B50\u3067\u540C\u3058\u5024\u306B\u306A\u308B\u3088\u3046\u306B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\uFF08\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u9593\u306E\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF09",-1),CC=s("div",{class:"flex gap-8"},[s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"update"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#E0A569"}},"modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"$event"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," ... "),s("span",{style:{color:"#758575"}},"// \u4E2D\u7565;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello !"'),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"update"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#B58451"}},"modelValue"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"$event"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"modelValue"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," ... "),s("span",{style:{color:"#A0ADA0"}},"// \u4E2D\u7565;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("ul",null,[s("li",null,"v-model \u304C\u304A\u3053\u306A\u3063\u3066\u3044\u308B\u3053\u3068\u306F v-model \u3092\u4F7F\u308F\u306A\u304F\u3066\u3082\u5B9F\u73FE\u53EF\u80FD\uFF08\u7CD6\u8863\u69CB\u6587\uFF09"),s("li",null,"\u89AA \u2192 \u5B50\uFF1A\u30D7\u30ED\u30D1\u30C6\u30A3"),s("li",null,"\u5B50 \u2192 \u89AA\uFF1A\u30A4\u30D9\u30F3\u30C8"),s("li",null,"\u3053\u306E\u3088\u3046\u306A\u72B6\u614B\u304C\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF08\u5024\u3092\u675F\u7E1B\u3057\u3042\u3063\u3066\u3044\u308B\uFF09")])],-1),EC={__name:"43",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[DC,gC,CC]),_:1},16))}},_C=s("h1",null,"\u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1",-1),FC=s("p",null,"slot \u3092\u4F7F\u3046\u3068\u3001HTML \u8981\u7D20\u306E\u3088\u3046\u306B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u5B50\u8981\u7D20\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B",-1),bC=s("div",{class:"flex gap-8"},[s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello Component"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"// script\u306F\u4E2D\u7565")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello Component"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"// script\u306F\u4E2D\u7565")])])])])]),s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ChildComponent: "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ChildComponent: "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),xC=s("div",{class:"text-xs"},[s("p",{class:"text-xs"},"\u7D50\u679C\u4F8B"),s("strong",null,"ChildComponent: "),n("Hello Component ")],-1),wC={__name:"44",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[_C,FC,bC,xC]),_:1},16))}},kC=s("h1",null,"Vue \u306E\u57FA\u672C\u7684\u306A\u66F8\u304D\u65B9\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01",-1),$C=s("p",null,"\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F",-1),SC=s("p",null,"\u4EE5\u4E0B\u3092\u5B66\u3093\u3067\u304D\u305F",-1),OC=s("ul",null,[s("li",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u4F5C\u308A\u65B9"),s("li",null,"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u66F8\u304D\u65B9"),s("li",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4F5C\u308A\u65B9")],-1),MC=s("p",null,"\u3053\u3053\u307E\u3067\u306F Vue.js \u3092\u4F7F\u3046\u306A\u3089\u5FC5\u305A\u77E5\u3063\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308B\u5185\u5BB9",-1),PC=s("p",null,"\u5B66\u7FD2\u306E\u76EE\u5B89",-1),TC=s("ul",null,[s("li",null,"\u7406\u89E3\u3057\u3066\u3044\u308B\u3053\u3068"),s("li",null,"\u66F8\u3051\u308B\u3053\u3068")],-1),LC=s("p",null,"\u81EA\u4FE1\u304C\u306A\u3044\u7B87\u6240\u306F\u5FA9\u7FD2\u30FB\u8CEA\u554F\u3057\u307E\u3057\u3087\u3046\uFF01",-1),NC={__name:"45",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[kC,$C,SC,OC,MC,PC,TC,LC]),_:1},16))}},RC=s("h1",null,"\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\uFF1F",-1),IC=s("p",null,"\u3053\u308C\u304B\u3089\u5B66\u3076\u5185\u5BB9\u306E\u78BA\u8A8D",-1),jC=s("ul",null,[s("li",null,[n("\u3088\u308A\u5177\u4F53\u7684\u306A\u984C\u6750\u3067\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F "),s("ul",null,[s("li",null,[n("\u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 "),s("ul",null,[s("li",null,"\u3053\u308C\u307E\u3067\u5B66\u3093\u3060\u5185\u5BB9\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u5C11\u3057\u8907\u96D1\u306A\u5B9F\u88C5")])]),s("li",null,[n("Markdown \u30A8\u30C7\u30A3\u30BF\u30FC "),s("ul",null,[s("li",null,"throttle-debounce \u306B\u3088\u308B\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D")])]),s("li",null,[n("\u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC "),s("ul",null,[s("li",null,"\u753B\u50CF\u306E\u53D6\u5F97\u3068\u8868\u793A"),s("li",null,"\u3042\u3089\u304B\u3058\u3081\u7528\u610F\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u306E\u9069\u7528")])]),s("li",null,[n("\u30C4\u30AF\u30ED\u30A2\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC "),s("ul",null,[s("li",null,"Fetch API \u306B\u3088\u308B JSON \u30C7\u30FC\u30BF\u306E\u53D6\u5F97"),s("li",null,"Vue Router \u306B\u3088\u308B\u753B\u9762\u9077\u79FB")])])])])],-1),VC={__name:"46",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[RC,IC,jC]),_:1},16))}},zC=s("h1",null,"Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u5468\u8FBA\u30E9\u30A4\u30D6\u30E9\u30EA",-1),HC=s("p",null,"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5FC5\u8981\u306A\u6A5F\u80FD\u306F\u4ED6\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u5B9F\u88C5\u3059\u308B",-1),UC=s("ul",null,[s("li",null,"throttle-debounce"),s("li",null,"fetch"),s("li",null,"Vue Router")],-1),WC={__name:"47",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[zC,HC,UC]),_:1},16))}},qC=s("h1",null,"throttle, debounce",-1),KC=s("p",null,"throttle, debounce \u3092\u4F7F\u3046\u3068\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057\u983B\u5EA6\u3092\u9593\u5F15\u304F\u3053\u3068\u304C\u3067\u304D\u308B",-1),YC=s("div",{class:"flex gap-8"},[s("div",{class:"h-sm overflow-y-auto flex-shrink"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"debounce"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"throttle-debounce"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'""'),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"originalFruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#C98A7D"}},'"orange"'),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#C98A7D"}},'"banana"'),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#C98A7D"}},'"strawberry"'),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#C98A7D"}},'"grape"'),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#C98A7D"}},'"watermelon"'),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"];")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"fruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"updateText"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"debounce"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"indexOf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},">="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"updateText"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"debounce"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"throttle-debounce"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'""'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"originalFruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959"}},'"orange"'),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959"}},'"banana"'),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959"}},'"strawberry"'),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959"}},'"grape"'),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959"}},'"watermelon"'),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"];")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"fruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"updateText"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"debounce"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"indexOf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},">="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"updateText"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",{class:"flex-shrink"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"input"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"updateText"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},", "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},") "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"input"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"updateText"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},", "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},") "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),ZC={__name:"48",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[qC,KC,YC]),_:1},16))}},JC=s("h1",null,"fetch",-1),XC=s("p",null,"\u30B5\u30FC\u30D0\u30FC\u3068\u306E\u901A\u4FE1\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306E\u30D6\u30E9\u30A6\u30B6\u306E\u6A19\u6E96 API",-1),GC={__name:"49",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[JC,XC]),_:1},16))}},QC=s("h1",null,"Vue Router",-1),s4=s("p",null,"URL \u3054\u3068\u306B\u8868\u793A\u3059\u308B\u753B\u9762\u3092\u5236\u5FA1\u3059\u308B\u305F\u3081\u306E\u30E9\u30A4\u30D6\u30E9\u30EA",-1),e4={__name:"50",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[QC,s4]),_:1},16))}},l4=s("h1",null,"fetch / Vue Router \u3092\u4F7F\u3063\u305F\u30B5\u30F3\u30D7\u30EB",-1),o4=s("p",null,[s("a",{href:"https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/sample-fetch-router?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/sample-fetch-router?file=src/App.vue&terminal=dev")],-1),n4={__name:"51",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[l4,o4]),_:1},16))}},t4=s("h1",null,"Nuxt 3",-1),r4=s("p",null,"\u52B9\u7387\u7684\u306B Vue 3 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306E\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF",-1),a4=s("ul",null,[s("li",null,"Vue.js \u304C\u5C0E\u5165\u6E08\u307F\uFF08Nuxt \u3092\u5C0E\u5165\u3059\u308C\u3070 Vue.js \u306E\u5C0E\u5165\u304C\u4E0D\u8981\uFF09"),s("li",null,"Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u7B49\u306E import \u3092\u7701\u7565\u3067\u304D\u308B"),s("li",null,"pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B .vue \u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 HTML \u30DA\u30FC\u30B8\u304C\u3067\u304D\u308B\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u81EA\u52D5\u751F\u6210\uFF09"),s("li",null,"server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u30B5\u30FC\u30D0\u30FC\u5074\u306E\u51E6\u7406\u304C\u66F8\u3051\u308B\uFF08API \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306E\u751F\u6210\uFF09"),s("li",null,"Nuxt 3 \u306F 2022 \u5E74 6 \u6708\u73FE\u5728\u3001\u30EA\u30EA\u30FC\u30B9\u5019\u88DC\u7248\u304C\u516C\u958B\u3055\u308C\u3066\u3044\u308B")],-1),c4={__name:"52",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[t4,r4,a4]),_:1},16))}},p4=s("h1",null,"Nuxt 3",-1),i4=s("ul",null,[s("li",null,"pages"),s("li",null,"NuxtLink"),s("li",null,"layouts"),s("li",null,"Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA"),s("li",null,"Suspense"),s("li",null,"composables")],-1),y4={__name:"53",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[p4,i4]),_:1},16))}},u4=s("h1",null,"pages",-1),d4=s("p",null,[n("app.vue \u3092\u524A\u9664\u3059\u308B\u3002"),s("br"),n(" pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B.vue \u30D5\u30A1\u30A4\u30EB\u3092\u914D\u7F6E\u3057\u3001\u8907\u6570\u30DA\u30FC\u30B8\u3092\u69CB\u6210\u3059\u308B\u3002 \u307E\u305A\u306F "),s("code",null,"pages/index.vue"),n(", "),s("code",null,"pages/about.vue"),n(" \u3092\u4F5C\u6210\u3059\u308B\u3002")],-1),f4=s("p",null,[n("Vue \u958B\u767A\u74B0\u5883\u3067\u306F App.vue \u30D5\u30A1\u30A4\u30EB\u3092\u30E1\u30A4\u30F3\u3067\u958B\u767A\u3057\u3066\u3044\u3066\u3001Nuxt \u3067\u3082\u540C\u69D8\u306E\u76EE\u7684\u3092 app.vue \u306B\u3066\u884C\u3048\u308B\u3002\u4F8B\u3048\u3070 app.vue \u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3001\u5404\u30DA\u30FC\u30B8\u306E template \u90E8\u5206\u304C"),s("code",null,"<NuxtPage />"),n("\u306B\u7F6E\u304D\u63DB\u308F\u308B\u3002")],-1),m4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),B4=s("p",null,"\u305F\u3060\u3057\u3001\u8907\u6570\u30DA\u30FC\u30B8\u3092\u69CB\u6210\u3059\u308B\u306B\u3042\u305F\u3063\u3066\u306F pages \u5185\u3067\u958B\u767A\u30FB\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u4E00\u822C\u7684\u3002 \u305D\u306E\u969B\u3001app.vue \u3067\u3053\u306E\u3088\u3046\u306A\u3053\u3068\u304C\u3067\u304D\u308B\u304C\u3001\u5F8C\u8FF0\u3059\u308B layouts \u6A5F\u80FD\u3092\u4F7F\u3063\u305F\u307B\u3046\u304C\u3088\u3044\u3002",-1),h4={__name:"54",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[u4,d4,f4,m4,B4]),_:1},16))}},A4=s("h1",null,"NuxtLink",-1),v4=s("p",null,[n("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067 Nav.vue \u3092\u4F5C\u6210\u3001index \u3068 about \u306E\u30EA\u30F3\u30AF\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u3002"),s("br"),n(" Nuxt \u3067\u306F\u30DA\u30FC\u30B8\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 Vue Router \u306B\u3088\u308B\u8A2D\u5B9A\u3092\u81EA\u52D5\u306B\u884C\u3063\u3066\u304F\u308C\u308B\u3001\u3064\u307E\u308A Vue \u74B0\u5883\u4E0B\u306E\u3088\u3046\u306B\u624B\u52D5\u3067\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u8A2D\u5B9A\u3092\u751F\u6210\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u3002")],-1),D4=s("p",null,"\u305D\u3057\u3066\u305D\u306E\u30EB\u30FC\u30C8\u3092\u79FB\u52D5\u3059\u308B\u969B\u306F HTML \u306E",-1),g4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),C4=s("p",null,"\u3067\u306F\u306A\u304F",-1),E4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},'<NuxtLink to="/about">ABOUT</NuxtLink>')])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},'<NuxtLink to="/about">ABOUT</NuxtLink>')])])])],-1),_4=s("p",null,[n("\u3068\u8A18\u8FF0\u3057\u3066\u30EA\u30F3\u30AF\u3092\u4F5C\u6210\u3059\u308B\u3002"),s("br"),n(" \u30EB\u30FC\u30C8\u5916\u3001\u4F8B\u3048\u3070\u5916\u90E8\u30B5\u30A4\u30C8\u306E\u30EA\u30F3\u30AF\u3092\u8CBC\u308B\u5834\u5408\u306F\u5F93\u6765\u306E"),s("code",null,"<a>"),n("\u8981\u7D20\u3092\u4F7F\u3046\u3053\u3068\u306B\u306A\u308B\u3002")],-1),F4={__name:"55",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[A4,v4,D4,g4,C4,E4,_4]),_:1},16))}},b4=s("h1",null,"layouts",-1),x4=s("p",null,[s("code",null,"layouts/default.vue"),n("\u3092\u4F5C\u6210\u3057\u3001\u5171\u901A\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3055\u305B\u308B\u3002"),s("br"),n(" pages \u3067\u89E3\u8AAC\u3057\u305F\u3088\u3046\u306B\u4F8B\u3048\u3070 app.vue \u306B\u5171\u901A\u30D8\u30C3\u30C0\u3092\u6301\u305F\u305B\u308B\u306E\u3067\u3042\u308C\u3070\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u66F8\u304D\u65B9\u3067\u4E8B\u8DB3\u308A\u308B\u304C\u3001\u30DA\u30FC\u30B8\u306B\u3088\u3063\u3066\u306F\u30D8\u30C3\u30C0\u304C\u4E0D\u8981\u306A\u3069\u3068\u3044\u3063\u305F\u3053\u3068\u304C\u51FA\u3066\u304F\u308B\u3002 \u305D\u306E\u969B\u3001\u30DA\u30FC\u30B8\u305D\u306E\u3082\u306E\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u8907\u6570\u7528\u610F\u3057\u3001\u5404\u30DA\u30FC\u30B8\u304C\u305D\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u9078\u3073\u5909\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002")],-1),w4=s("p",null,[s("code",null,"app.vue"),n("\u306E\u4F8B")],-1),k4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),$4=s("p",null,[s("code",null,"layouts/default.vue"),n("\u306E\u4F8B")],-1),S4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),O4={__name:"56",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[b4,x4,w4,k4,$4,S4]),_:1},16))}},M4=s("h1",null,"Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA",-1),P4=s("p",null,[s("code",null,"server/api"),n("\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u3042\u308B"),s("code",null,"users.js"),n("\u3092\u78BA\u8A8D\u3001"),s("code",null,"components/userList.vue"),n("\u306B\u4EE5\u4E0B\u3092\u8A18\u8FF0\u3059\u308B\u3002")],-1),T4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"users"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"users"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/users"'),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"users"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"users"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"users"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/users"'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"users"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),L4={__name:"57",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[M4,P4,T4]),_:1},16))}},N4=s("h1",null,"Suspense",-1),R4=s("p",null,[n("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u3067"),s("code",null,"async"),n("\u3092\u4F7F\u3063\u305F\u5834\u5408\u3001Promise \u304C\u89E3\u6C7A\u3059\u308B\u3068\u540C\u6642\u306B\u8868\u793A\u3059\u308B\u4ED5\u7D44\u307F\u3092\u5B66\u3076\u3002 \u975E\u540C\u671F\u3067\u51E6\u7406\u3055\u308C\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u8868\u793A\u304B\u3089\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u308B\u6A5F\u80FD\u3002"),s("br"),n(" \u307E\u305A\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8"),s("code",null,"SuspenseTest.vue"),n("\u3092\u4F5C\u6210\u3002")],-1),I4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"userList"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"Promise"),s("span",{style:{color:"#858585"}},"(("),s("span",{style:{color:"#B8A965"}},"resolve"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#E0A569"}},"setTimeout"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"          "),s("span",{style:{color:"#A1B567"}},"resolve"),s("span",{style:{color:"#858585"}},"(["),s("span",{style:{color:"#C98A7D"}},'"\u592A\u90CE"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"\u82B1\u5B50"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"\u6B21\u90CE"'),s("span",{style:{color:"#858585"}},"]);")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"},"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"users"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"userList"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"users"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"userList"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"Promise"),s("span",{style:{color:"#8E8F8B"}},"(("),s("span",{style:{color:"#8C862B"}},"resolve"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#B58451"}},"setTimeout"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"          "),s("span",{style:{color:"#6C7834"}},"resolve"),s("span",{style:{color:"#8E8F8B"}},"(["),s("span",{style:{color:"#B56959"}},'"\u592A\u90CE"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"\u82B1\u5B50"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"\u6B21\u90CE"'),s("span",{style:{color:"#8E8F8B"}},"]);")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"users"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"userList"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"users"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),j4={__name:"58",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[N4,R4,I4]),_:1},16))}},V4=s("h1",null,"Suspense",-1),z4=s("p",null,[s("code",null,"v-if"),n("\u3092\u4F7F\u308F\u305A\u3068\u3082\u30011 \u79D2\u7D4C\u3063\u3066\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u5B8C\u4E86\u5F8C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u308B")],-1),H4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"Suspense"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}}," #"),s("span",{style:{color:"#E0A569"}},"default"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"SuspenseTest"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}}," #"),s("span",{style:{color:"#E0A569"}},"fallback"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Loading... "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#E0A569"}},"Suspense"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"Suspense"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}}," #"),s("span",{style:{color:"#B58451"}},"default"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"SuspenseTest"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}}," #"),s("span",{style:{color:"#B58451"}},"fallback"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Loading... "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#B58451"}},"Suspense"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),U4={__name:"59",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[V4,z4,H4]),_:1},16))}},W4=s("h1",null,"composables",-1),q4=s("p",null,[n("\u30A2\u30D7\u30EA\u5168\u4F53\u5171\u901A\u306E\u30C7\u30FC\u30BF\u3092\u7BA1\u7406\u3059\u308B\u3002js \u30D5\u30A1\u30A4\u30EB\u3067\u306F\u3042\u308B\u304C\u3001\u4E2D\u8EAB\u306F vue \u306E\u8A18\u8FF0\u306B\u8FD1\u3044\u3053\u3068\u304C\u308F\u304B\u308B\u3002 \u3053\u3053\u3067\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u3002 "),s("code",null,"composables/userCounter.js"),n("\u3092\u4F5C\u6210\u3059\u308B\u3002")],-1),K4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"readonly"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"readonly"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),Y4={__name:"60",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[W4,q4,K4]),_:1},16))}},Z4=s("h1",null,"composables",-1),J4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u30AB\u30A6\u30F3\u30C8: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},"><"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"increment!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"useCounter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"~~/composables/useCounter"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useCounter"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u30AB\u30A6\u30F3\u30C8: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},"><"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"increment!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"useCounter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"~~/composables/useCounter"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useCounter"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),X4={__name:"61",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[Z4,J4]),_:1},16))}},G4=s("h1",null,"\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9",-1),Q4=s("p",null,"Vue \u56FA\u6709\u306E\u8A18\u6CD5\u306B\u3064\u3044\u3066\u306E\u516C\u5F0F\u306A\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9",-1),s7=s("p",null,"\u8AB2\u984C\u5236\u4F5C\u3092\u3059\u308B\u524D\u306B\u7406\u89E3\u3059\u308B",-1),e7=s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/style-guide/",target:"_blank",rel:"noopener"},"\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9")],-1),l7={__name:"62",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[G4,Q4,s7,e7]),_:1},16))}},o7=s("h1",null,"\u81EA\u7531\u8AB2\u984C",-1),n7=s("p",null,"Nuxt3 \u74B0\u5883\u3092\u4F7F\u3063\u3066\u30A2\u30D7\u30EA\u3092\u81EA\u7531\u306B\u3064\u304F\u3063\u3066\u307F\u3088\u3046\u3002",-1),t7={__name:"63",setup(e){const l={};return $(M),(o,t)=>(v(),L(X,Z(Y(l)),{default:z(()=>[o7,n7]),_:1},16))}};var r7=[{path:"1",name:"page-1",component:wA,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"Vue.js",slide:{raw:`---
# try also 'default' to start simple
theme: "default"
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

<div class="text-center">
<img src="/logo.svg" alt="Vue" style="width: 100px;" class="inline" />
</div>

# Vue.js
`,title:"Vue.js",level:1,content:`<div class="text-center">
<img src="/logo.svg" alt="Vue" style="width: 100px;" class="inline" />
</div>

# Vue.js`,frontmatter:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"Vue.js"},index:0,start:0,end:29,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:OA,meta:{slide:{raw:`
# \u30A2\u30B8\u30A7\u30F3\u30C0

- \u306F\u3058\u3081\u306B
  - Composition API, \u5B66\u7FD2\u74B0\u5883\u306A\u3069
- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42
  - ref, reactive, toRefs, readonly \u306A\u3069
- \u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09
  - computed
- \u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09
  - watch
- \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u69CB\u6587\u306E\u8AAC\u660E
  - mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model \u306A\u3069
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
  - props, emit, slot \u306A\u3069
- Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u5468\u8FBA\u30E9\u30A4\u30D6\u30E9\u30EA
  - throttle-debounce, fetch, Vue Router \u306A\u3069
`,title:"\u30A2\u30B8\u30A7\u30F3\u30C0",level:1,content:`# \u30A2\u30B8\u30A7\u30F3\u30C0

- \u306F\u3058\u3081\u306B
  - Composition API, \u5B66\u7FD2\u74B0\u5883\u306A\u3069
- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42
  - ref, reactive, toRefs, readonly \u306A\u3069
- \u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09
  - computed
- \u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09
  - watch
- \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u69CB\u6587\u306E\u8AAC\u660E
  - mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model \u306A\u3069
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
  - props, emit, slot \u306A\u3069
- Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u5468\u8FBA\u30E9\u30A4\u30D6\u30E9\u30EA
  - throttle-debounce, fetch, Vue Router \u306A\u3069`,frontmatter:{},index:1,start:30,end:48,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:IA,meta:{slide:{raw:`
# \u306F\u3058\u3081\u306B

## Vue.js \u3068\u306F\uFF1F

Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308B\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u3092\u69CB\u7BC9\u3059\u308B\u305F\u3081\u306E\u3001\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u306E JavaScript \u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3002

<div class="pt-4 text-sm">

<a href="https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF">
<carbon:arrow-right class="inline" /> \u516C\u5F0F\u30B5\u30A4\u30C8
</a>
</div>
`,title:"\u306F\u3058\u3081\u306B",level:1,content:`# \u306F\u3058\u3081\u306B

## Vue.js \u3068\u306F\uFF1F

Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308B\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u3092\u69CB\u7BC9\u3059\u308B\u305F\u3081\u306E\u3001\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u306E JavaScript \u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3002

<div class="pt-4 text-sm">

<a href="https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF">
<carbon:arrow-right class="inline" /> \u516C\u5F0F\u30B5\u30A4\u30C8
</a>
</div>`,frontmatter:{},index:2,start:49,end:63,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:UA,meta:{slide:{raw:`
# \u672C\u8B1B\u5EA7\u306E\u3059\u3059\u3081\u304B\u305F

\u3069\u306E\u3088\u3046\u306A\u5F62\u5F0F\u3067\u9032\u884C\u3059\u308B\u306E\u304B\u306E\u78BA\u8A8D

\u30CF\u30F3\u30BA\u30AA\u30F3 \u2252 \u30B3\u30FC\u30C9\u3092\u66F8\u3044\u3066\u52D5\u304B\u3059\u3053\u3068\uFF081 \u56DE 10 \u5206\u7A0B\u5EA6\uFF09\u3092\u30E1\u30A4\u30F3\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002

\u9069\u5B9C\u8AAC\u660E\u3092\u631F\u307F\u307E\u3059\u304C\u3001\u52D5\u304B\u306A\u3044\u3001\u5206\u304B\u3089\u306A\u3044\u3068\u304D\u3001\u305D\u306E\u4ED6\u306A\u3093\u3067\u3082\uFF08\u5927\u62B5\u306F\u4ED6\u306E\u53D7\u8B1B\u8005\u3082\u540C\u3058\u3053\u3068\u3092\u8003\u3048\u3066\u3044\u307E\u3059\uFF01\uFF09\u8CEA\u554F\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002
`,title:"\u672C\u8B1B\u5EA7\u306E\u3059\u3059\u3081\u304B\u305F",level:1,content:`# \u672C\u8B1B\u5EA7\u306E\u3059\u3059\u3081\u304B\u305F

\u3069\u306E\u3088\u3046\u306A\u5F62\u5F0F\u3067\u9032\u884C\u3059\u308B\u306E\u304B\u306E\u78BA\u8A8D

\u30CF\u30F3\u30BA\u30AA\u30F3 \u2252 \u30B3\u30FC\u30C9\u3092\u66F8\u3044\u3066\u52D5\u304B\u3059\u3053\u3068\uFF081 \u56DE 10 \u5206\u7A0B\u5EA6\uFF09\u3092\u30E1\u30A4\u30F3\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002

\u9069\u5B9C\u8AAC\u660E\u3092\u631F\u307F\u307E\u3059\u304C\u3001\u52D5\u304B\u306A\u3044\u3001\u5206\u304B\u3089\u306A\u3044\u3068\u304D\u3001\u305D\u306E\u4ED6\u306A\u3093\u3067\u3082\uFF08\u5927\u62B5\u306F\u4ED6\u306E\u53D7\u8B1B\u8005\u3082\u540C\u3058\u3053\u3068\u3092\u8003\u3048\u3066\u3044\u307E\u3059\uFF01\uFF09\u8CEA\u554F\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002`,frontmatter:{},index:3,start:64,end:73,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:GA,meta:{slide:{raw:`
# \u6E96\u5099

\u4F7F\u7528\u3059\u308B\u30C4\u30FC\u30EB\u306E\u78BA\u8A8D\u3068\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7

\u672C\u8B1B\u5EA7\u306B\u304A\u3051\u308B\u30CF\u30F3\u30BA\u30AA\u30F3\u3001\u6F14\u7FD2\u3001\u30B5\u30F3\u30D7\u30EB\u306E\u95B2\u89A7\u306F [StackBlitz](https://stackblitz.com/) \u3067\u304A\u3053\u306A\u3044\u307E\u3059\u3002

StackBlitz \u306F\u30D6\u30E9\u30A6\u30B6\u4E0A\u3067\u52D5\u4F5C\u3059\u308B\u30AA\u30F3\u30E9\u30A4\u30F3 IDE\uFF08\u7D71\u5408\u958B\u767A\u74B0\u5883\uFF09\u3067\u3059\u3002

\u4EE5\u4E0B\u3092\u3084\u3063\u3066\u307F\u307E\u3057\u3087\u3046

1. \u52D5\u4F5C\u74B0\u5883\u3092[\u3053\u3061\u3089](https://developer.stackblitz.com/docs/platform/browser-support/)\u3067\u78BA\u8A8D\u3057\u3066\u30D6\u30E9\u30A6\u30B6\u3092\u7528\u610F
2. \u7528\u610F\u3057\u305F\u30D6\u30E9\u30A6\u30B6\u3067 https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev \u306B\u30A2\u30AF\u30BB\u30B9
3. \`<template>Hello World!</template>\` \u3068\u66F8\u3044\u3066\u307F\u308B
4. \u53F3\u30AB\u30E9\u30E0\u306B \`Hello World!\` \u3068\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u3092\u78BA\u8A8D

\u8B1B\u5E2B\u306F\u9069\u5B9C\u3042\u305F\u3089\u3057\u3044\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\u3064\u304F\u3063\u3066\u3044\u304D\u307E\u3059\u304C\u3001\u53D7\u8B1B\u8005\u306E\u7686\u3055\u3093\u306F\u4F5C\u6210\u3057\u305F\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\uFF08\u5168\u6D88\u3057\u3059\u308B\u306A\u3069\uFF09\u4F7F\u3044\u307E\u308F\u3057\u3066\u3082\u3089\u3063\u3066\u5927\u4E08\u592B\u3067\u3059\u3002
`,title:"\u6E96\u5099",level:1,content:`# \u6E96\u5099

\u4F7F\u7528\u3059\u308B\u30C4\u30FC\u30EB\u306E\u78BA\u8A8D\u3068\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7

\u672C\u8B1B\u5EA7\u306B\u304A\u3051\u308B\u30CF\u30F3\u30BA\u30AA\u30F3\u3001\u6F14\u7FD2\u3001\u30B5\u30F3\u30D7\u30EB\u306E\u95B2\u89A7\u306F [StackBlitz](https://stackblitz.com/) \u3067\u304A\u3053\u306A\u3044\u307E\u3059\u3002

StackBlitz \u306F\u30D6\u30E9\u30A6\u30B6\u4E0A\u3067\u52D5\u4F5C\u3059\u308B\u30AA\u30F3\u30E9\u30A4\u30F3 IDE\uFF08\u7D71\u5408\u958B\u767A\u74B0\u5883\uFF09\u3067\u3059\u3002

\u4EE5\u4E0B\u3092\u3084\u3063\u3066\u307F\u307E\u3057\u3087\u3046

1. \u52D5\u4F5C\u74B0\u5883\u3092[\u3053\u3061\u3089](https://developer.stackblitz.com/docs/platform/browser-support/)\u3067\u78BA\u8A8D\u3057\u3066\u30D6\u30E9\u30A6\u30B6\u3092\u7528\u610F
2. \u7528\u610F\u3057\u305F\u30D6\u30E9\u30A6\u30B6\u3067 https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev \u306B\u30A2\u30AF\u30BB\u30B9
3. \`<template>Hello World!</template>\` \u3068\u66F8\u3044\u3066\u307F\u308B
4. \u53F3\u30AB\u30E9\u30E0\u306B \`Hello World!\` \u3068\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u3092\u78BA\u8A8D

\u8B1B\u5E2B\u306F\u9069\u5B9C\u3042\u305F\u3089\u3057\u3044\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\u3064\u304F\u3063\u3066\u3044\u304D\u307E\u3059\u304C\u3001\u53D7\u8B1B\u8005\u306E\u7686\u3055\u3093\u306F\u4F5C\u6210\u3057\u305F\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\uFF08\u5168\u6D88\u3057\u3059\u308B\u306A\u3069\uFF09\u4F7F\u3044\u307E\u308F\u3057\u3066\u3082\u3089\u3063\u3066\u5927\u4E08\u592B\u3067\u3059\u3002`,frontmatter:{},index:4,start:74,end:92,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:l9,meta:{slide:{raw:`
# Vue \u306B\u306F 2 \u3064\u306E\u66F8\u304D\u65B9\u304C\u3042\u308A\u307E\u3059

<div class="flex gap-8">

<div>
Vue2 \u3067\u4E3B\u306B\u4F7F\u308F\u308C\u3066\u3044\u305F\u300COptions API\u300D

\`\`\`vue
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
<\/script>
\`\`\`

</div>
<div>
Vue3 \u3067\u4E3B\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B\u300CComposition API\u300D

\`\`\`vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value += 1;
    };
    return {
      count,
      increment,
    };
  },
};
<\/script>
\`\`\`

</div>
</div>

\u73FE\u72B6\u3001Vue \u95A2\u9023\u306E\u8A18\u4E8B\u306F Options API \u3067\u89E3\u8AAC\u3055\u308C\u3066\u3044\u308B\u307B\u3046\u304C\u5927\u591A\u6570\u3067\u3042\u308A\u3001\u521D\u5B66\u8005\u306E\u65B9\u306F\u6DF7\u4E71\u3055\u308C\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002Vue2, 3 \u3069\u3061\u3089\u3067\u3082\u4E21 API \u306F\u4F7F\u3048\u307E\u3059\u304C\u3001\u672C\u8B1B\u5EA7\u3067\u306F\u4ECA\u5F8C\u4E3B\u6D41\u3068\u306A\u308B Composition API \u3092\u53D6\u308A\u6271\u3044\u307E\u3059\u3002
`,title:"Vue \u306B\u306F 2 \u3064\u306E\u66F8\u304D\u65B9\u304C\u3042\u308A\u307E\u3059",level:1,content:`# Vue \u306B\u306F 2 \u3064\u306E\u66F8\u304D\u65B9\u304C\u3042\u308A\u307E\u3059

<div class="flex gap-8">

<div>
Vue2 \u3067\u4E3B\u306B\u4F7F\u308F\u308C\u3066\u3044\u305F\u300COptions API\u300D

\`\`\`vue
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
<\/script>
\`\`\`

</div>
<div>
Vue3 \u3067\u4E3B\u306B\u4F7F\u308F\u308C\u3066\u3044\u308B\u300CComposition API\u300D

\`\`\`vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value += 1;
    };
    return {
      count,
      increment,
    };
  },
};
<\/script>
\`\`\`

</div>
</div>

\u73FE\u72B6\u3001Vue \u95A2\u9023\u306E\u8A18\u4E8B\u306F Options API \u3067\u89E3\u8AAC\u3055\u308C\u3066\u3044\u308B\u307B\u3046\u304C\u5927\u591A\u6570\u3067\u3042\u308A\u3001\u521D\u5B66\u8005\u306E\u65B9\u306F\u6DF7\u4E71\u3055\u308C\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002Vue2, 3 \u3069\u3061\u3089\u3067\u3082\u4E21 API \u306F\u4F7F\u3048\u307E\u3059\u304C\u3001\u672C\u8B1B\u5EA7\u3067\u306F\u4ECA\u5F8C\u4E3B\u6D41\u3068\u306A\u308B Composition API \u3092\u53D6\u308A\u6271\u3044\u307E\u3059\u3002`,frontmatter:{},index:5,start:93,end:145,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:a9,meta:{slide:{raw:`
# Composition API \u306E\u30E1\u30EA\u30C3\u30C8

Vue \u306E\u6A5F\u80FD\u3067\u306F\u306A\u304F\u3001\u8AD6\u7406\u7684\u306A\u95A2\u5FC3\u4E8B\u3067\u30B3\u30FC\u30C9\u3092\u307E\u3068\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B

<img src="/apis.png" class="h-5/6" />
`,title:"Composition API \u306E\u30E1\u30EA\u30C3\u30C8",level:1,content:`# Composition API \u306E\u30E1\u30EA\u30C3\u30C8

Vue \u306E\u6A5F\u80FD\u3067\u306F\u306A\u304F\u3001\u8AD6\u7406\u7684\u306A\u95A2\u5FC3\u4E8B\u3067\u30B3\u30FC\u30C9\u3092\u307E\u3068\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B

<img src="/apis.png" class="h-5/6" />`,frontmatter:{},index:6,start:146,end:153,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:B9,meta:{slide:{raw:`
# \u307E\u305A\u306F\u66F8\u3044\u3066\u307F\u308B

<div class="flex gap-8">

\`\`\`vue
<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value += 1;
    };
    return {
      count,
      increment,
    };
  },
};
<\/script>
\`\`\`

<div>
\u52D5\u4F5C\u30B5\u30F3\u30D7\u30EB
<FirstSample />
</div>

</div>
`,title:"\u307E\u305A\u306F\u66F8\u3044\u3066\u307F\u308B",level:1,content:`# \u307E\u305A\u306F\u66F8\u3044\u3066\u307F\u308B

<div class="flex gap-8">

\`\`\`vue
<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value += 1;
    };
    return {
      count,
      increment,
    };
  },
};
<\/script>
\`\`\`

<div>
\u52D5\u4F5C\u30B5\u30F3\u30D7\u30EB
<FirstSample />
</div>

</div>`,frontmatter:{},index:7,start:154,end:191,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:v9,meta:{slide:{raw:`
# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42

<div class="flex gap-4">

<div>
<video controls loop style="height: 30vh" src="https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"></video>

<a href="https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B">\u53C2\u8003</a>

</div>

<div>

\u8868\u8A08\u7B97\u30BD\u30D5\u30C8\u3068\u540C\u3058\u624B\u9806\u3092\u30B3\u30FC\u30C9\u306B\u3059\u308B\u3068

\`\`\`js
let val1 = 2;
let val2 = 3;
let sum = val1 + val2;

console.log(sum); // 5

val1 = 3;

console.log(sum); // 5\u306E\u307E\u307E\uFF08\u671F\u5F85\u306F6\uFF09
\`\`\`

</div>

</div>
`,title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42",level:1,content:`# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42

<div class="flex gap-4">

<div>
<video controls loop style="height: 30vh" src="https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"></video>

<a href="https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B">\u53C2\u8003</a>

</div>

<div>

\u8868\u8A08\u7B97\u30BD\u30D5\u30C8\u3068\u540C\u3058\u624B\u9806\u3092\u30B3\u30FC\u30C9\u306B\u3059\u308B\u3068

\`\`\`js
let val1 = 2;
let val2 = 3;
let sum = val1 + val2;

console.log(sum); // 5

val1 = 3;

console.log(sum); // 5\u306E\u307E\u307E\uFF08\u671F\u5F85\u306F6\uFF09
\`\`\`

</div>

</div>`,frontmatter:{},index:8,start:192,end:224,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:C9,meta:{slide:{raw:`
# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42

<div class="flex gap-4">

<div>

\u8868\u8A08\u7B97\u30BD\u30D5\u30C8\u3068\u540C\u3058\u3053\u3068\u3092\u304A\u3053\u306A\u3046\u306B\u306F

1. \u5024\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u3068\u304D\u306B\u8FFD\u8DE1\u3059\u308B\u3002 \u4F8B: val1 + val2 \u306F val1 \u3068 val2 \u306E\u4E21\u65B9\u3092\u8AAD\u307F\u8FBC\u3080\u3002
2. \u5024\u306E\u5909\u66F4\u3092\u691C\u77E5\u3059\u308B\u3002 \u4F8B: val1 = 3 \u3068\u5165\u308C\u308B\u3068\u304D\u3002
3. \u6700\u521D\u306B\u5024\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u30B3\u30FC\u30C9\u3092\u518D\u5B9F\u884C\u3059\u308B\u3002 \u4F8B: sum = val1 + val2 \u3092\u518D\u5EA6\u5B9F\u884C\u3057\u3066\u3001 sum \u306E\u5024\u3092\u66F4\u65B0\u3059\u308B\u3002

Vue \u306B\u306F 1\\. 2\\. 3\\. \u306E\u305F\u3081\u306E\u3057\u304F\u307F\u304C\u3042\u308B

</div>

<div>

\`\`\`js
let val1 = 2; // 1.
let val2 = 3; // 1.
let sum = val1 + val2; // 1.

console.log(sum);

val1 = 3; // 2.

console.log(sum); // 3.
\`\`\`

</div>

</div>
`,title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42",level:1,content:`# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42

<div class="flex gap-4">

<div>

\u8868\u8A08\u7B97\u30BD\u30D5\u30C8\u3068\u540C\u3058\u3053\u3068\u3092\u304A\u3053\u306A\u3046\u306B\u306F

1. \u5024\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u3068\u304D\u306B\u8FFD\u8DE1\u3059\u308B\u3002 \u4F8B: val1 + val2 \u306F val1 \u3068 val2 \u306E\u4E21\u65B9\u3092\u8AAD\u307F\u8FBC\u3080\u3002
2. \u5024\u306E\u5909\u66F4\u3092\u691C\u77E5\u3059\u308B\u3002 \u4F8B: val1 = 3 \u3068\u5165\u308C\u308B\u3068\u304D\u3002
3. \u6700\u521D\u306B\u5024\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u30B3\u30FC\u30C9\u3092\u518D\u5B9F\u884C\u3059\u308B\u3002 \u4F8B: sum = val1 + val2 \u3092\u518D\u5EA6\u5B9F\u884C\u3057\u3066\u3001 sum \u306E\u5024\u3092\u66F4\u65B0\u3059\u308B\u3002

Vue \u306B\u306F 1\\. 2\\. 3\\. \u306E\u305F\u3081\u306E\u3057\u304F\u307F\u304C\u3042\u308B

</div>

<div>

\`\`\`js
let val1 = 2; // 1.
let val2 = 3; // 1.
let sum = val1 + val2; // 1.

console.log(sum);

val1 = 3; // 2.

console.log(sum); // 3.
\`\`\`

</div>

</div>`,frontmatter:{},index:9,start:225,end:260,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:M9,meta:{slide:{raw:`
# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08ref \u306B\u3088\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u53C2\u7167\uFF09

\`ref\` \u3092\u4F7F\u3063\u305F\u5024\u3092\u64CD\u4F5C\u3059\u308B\u5834\u5408\u3001\`setup\` \u95A2\u6570\u5185\u3067\u306F \`value\` \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3002
\`template\` \u5185\u3067\u306F\u5909\u6570\uFF08\u5B9A\u6570\uFF09\u305D\u306E\u3082\u306E\u3092\u53C2\u7167\u3059\u308B\u3060\u3051\u3067\u5024\u3092\u5F97\u3089\u308C\u308B\u3002

<div class="flex gap-8">

\`\`\`vue
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const val1 = ref(2);
    const val2 = ref(3);
    const sum = computed(() => {
      return val1.value + val2.value;
    });
    return {
      val1,
      val2,
      sum,
    };
  },
};
<\/script>
\`\`\`

\`\`\`vue
<template>
  <div>
    <p>
      val1:
      <input type="number" v-model="val1" />
    </p>
    <p>
      val2:
      <input type="number" v-model="val2" />
    </p>
    <p>sum: {{ sum }}</p>
  </div>
</template>
\`\`\`

<ReactiveSample />

</div>
`,title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08ref \u306B\u3088\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u53C2\u7167\uFF09",level:1,content:`# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08ref \u306B\u3088\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u53C2\u7167\uFF09

\`ref\` \u3092\u4F7F\u3063\u305F\u5024\u3092\u64CD\u4F5C\u3059\u308B\u5834\u5408\u3001\`setup\` \u95A2\u6570\u5185\u3067\u306F \`value\` \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3002
\`template\` \u5185\u3067\u306F\u5909\u6570\uFF08\u5B9A\u6570\uFF09\u305D\u306E\u3082\u306E\u3092\u53C2\u7167\u3059\u308B\u3060\u3051\u3067\u5024\u3092\u5F97\u3089\u308C\u308B\u3002

<div class="flex gap-8">

\`\`\`vue
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const val1 = ref(2);
    const val2 = ref(3);
    const sum = computed(() => {
      return val1.value + val2.value;
    });
    return {
      val1,
      val2,
      sum,
    };
  },
};
<\/script>
\`\`\`

\`\`\`vue
<template>
  <div>
    <p>
      val1:
      <input type="number" v-model="val1" />
    </p>
    <p>
      val2:
      <input type="number" v-model="val2" />
    </p>
    <p>sum: {{ sum }}</p>
  </div>
</template>
\`\`\`

<ReactiveSample />

</div>`,frontmatter:{},index:10,start:261,end:309,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:N9,meta:{slide:{raw:`
# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u308B\uFF09

\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u3057\u305F\u3044\u30C7\u30FC\u30BF\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u3001\`reactive\` \u3092\u4F7F\u3046

<div class="flex gap-8">

\`\`\`vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    {{ user.name }}
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const user = reactive({
      name: "",
    });
    return {
      user,
    };
  },
};
<\/script>
\`\`\`

</div>
`,title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u308B\uFF09",level:1,content:`# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u308B\uFF09

\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u3057\u305F\u3044\u30C7\u30FC\u30BF\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u3001\`reactive\` \u3092\u4F7F\u3046

<div class="flex gap-8">

\`\`\`vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    {{ user.name }}
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const user = reactive({
      name: "",
    });
    return {
      user,
    };
  },
};
<\/script>
\`\`\`

</div>`,frontmatter:{},index:11,start:310,end:341,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:V9,meta:{slide:{raw:`
# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u305F\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u53D6\u308A\u51FA\u3059\uFF09

\u524D\u9805\u306E \`reactive\` \u3060\u3068\u3001\u5206\u5272\u4EE3\u5165\u3057\u3066\u3082\u5024\u304C\u53D6\u308A\u51FA\u305B\u306A\u3044\u3002Vue \u3067\u306F \`toRefs\` \u3092\u4F7F\u3046\u3053\u3068\u3067\u53EF\u80FD\u306B\u306A\u308B\u3002

<div class="flex gap-8">

\`\`\`vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const user = reactive({
      name: "",
    });
    const { name } = toRefs(user);
    return {
      user,
      name,
    };
  },
};
<\/script>
\`\`\`

</div>
`,title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u305F\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u53D6\u308A\u51FA\u3059\uFF09",level:1,content:`# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u305F\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u53D6\u308A\u51FA\u3059\uFF09

\u524D\u9805\u306E \`reactive\` \u3060\u3068\u3001\u5206\u5272\u4EE3\u5165\u3057\u3066\u3082\u5024\u304C\u53D6\u308A\u51FA\u305B\u306A\u3044\u3002Vue \u3067\u306F \`toRefs\` \u3092\u4F7F\u3046\u3053\u3068\u3067\u53EF\u80FD\u306B\u306A\u308B\u3002

<div class="flex gap-8">

\`\`\`vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const user = reactive({
      name: "",
    });
    const { name } = toRefs(user);
    return {
      user,
      name,
    };
  },
};
<\/script>
\`\`\`

</div>`,frontmatter:{},index:12,start:342,end:376,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:U9,meta:{slide:{raw:`
# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u8AAD\u307F\u8FBC\u307F\u5C02\u7528\u306B\u3059\u308B\uFF09

<div class="flex gap-8">

<div class="h-md overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <!-- user.name \u3092\u5909\u66F4\u3057\u3088\u3046\u3068\u3059\u308B\u3068\u5931\u6557\u3057\u3001\u8B66\u544A\u304C\u8868\u793A\u3055\u308C\u307E\u3059 -->
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>
<script>
import { reactive, toRefs, readonly } from "vue";
export default {
  setup() {
    const user = readonly(
      reactive({
        name: "",
      })
    );
    const { name } = toRefs(user);
    return {
      user,
      name,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>
`,title:"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u8AAD\u307F\u8FBC\u307F\u5C02\u7528\u306B\u3059\u308B\uFF09",level:1,content:`# \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u8AAD\u307F\u8FBC\u307F\u5C02\u7528\u306B\u3059\u308B\uFF09

<div class="flex gap-8">

<div class="h-md overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <!-- user.name \u3092\u5909\u66F4\u3057\u3088\u3046\u3068\u3059\u308B\u3068\u5931\u6557\u3057\u3001\u8B66\u544A\u304C\u8868\u793A\u3055\u308C\u307E\u3059 -->
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>
<script>
import { reactive, toRefs, readonly } from "vue";
export default {
  setup() {
    const user = readonly(
      reactive({
        name: "",
      })
    );
    const { name } = toRefs(user);
    return {
      user,
      name,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>`,frontmatter:{},index:13,start:377,end:416,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Y9,meta:{slide:{raw:`
# \u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09

\u3042\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u5143\u306B\u8A08\u7B97\u7D50\u679C\u3092\u8FD4\u3057\u305F\u3044\u5834\u5408\u3001\`computed\` \u95A2\u6570\u3092\u5229\u7528\u3059\u308B

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed(() => count.value + 1);
    return {
      count,
      plusOne,
    };
  },
};
<\/script>
\`\`\`
`,title:"\u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09",level:1,content:`# \u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09

\u3042\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u5143\u306B\u8A08\u7B97\u7D50\u679C\u3092\u8FD4\u3057\u305F\u3044\u5834\u5408\u3001\`computed\` \u95A2\u6570\u3092\u5229\u7528\u3059\u308B

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed(() => count.value + 1);
    return {
      count,
      plusOne,
    };
  },
};
<\/script>
\`\`\``,frontmatter:{},index:14,start:417,end:444,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:G9,meta:{slide:{raw:`
# \u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09

\`get\` \`set\` \u95A2\u6570\u3092\u7528\u610F\u3059\u308B\u3053\u3068\u3067\u66F8\u8FBC\u307F\u53EF\u80FD\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    <button @click="handleClick">\u30EA\u30BB\u30C3\u30C8</button>
    {{ plusOne }}
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: (value) => {
        count.value = value;
      },
    });
    const handleClick = () => {
      plusOne.value = 1;
    };
    return { count, plusOne, handleClick };
  },
};
<\/script>
\`\`\`

</div>
`,title:"\u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09",level:1,content:`# \u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09

\`get\` \`set\` \u95A2\u6570\u3092\u7528\u610F\u3059\u308B\u3053\u3068\u3067\u66F8\u8FBC\u307F\u53EF\u80FD\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    <button @click="handleClick">\u30EA\u30BB\u30C3\u30C8</button>
    {{ plusOne }}
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: (value) => {
        count.value = value;
      },
    });
    const handleClick = () => {
      plusOne.value = 1;
    };
    return { count, plusOne, handleClick };
  },
};
<\/script>
\`\`\`

</div>`,frontmatter:{},index:15,start:445,end:482,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:yv,meta:{slide:{raw:`
# computed \u3068\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u9055\u3044

\u95A2\u6570\u547C\u3073\u51FA\u3057\u306F\u90FD\u5EA6\u547C\u3073\u51FA\u3055\u308C\u308B\u6BCE\u306B\u5B9F\u884C\u3059\u308B\u306E\u306B\u5BFE\u3057\u3001\`computed\` \u5185\u3067\u53C2\u7167\u3057\u3066\u3044\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u304C\u5909\u66F4\u3055\u308C\u306A\u3044\u9650\u308A\u3001\`computed\` \u306F\u4E00\u5EA6\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u7D50\u679C\u3092\u8FD4\u3059\u3002
\u3046\u307E\u304F\u4F7F\u3044\u5206\u3051\u308B\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A\u306B\u5F79\u7ACB\u3066\u308B\u3002

<div class="flex gap-4">

\`\`\`vue
<template>
  <p>\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u5834\u5408</p>
  <ol class="use-methods">
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
  </ol>
  <p>computed\u3092\u4F7F\u3063\u305F\u5834\u5408</p>
  <ol class="use-computed">
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
  </ol>
</template>
\`\`\`

\`\`\`vue
<script>
import { computed } from "vue";
export default {
  setup() {
    const randomMethods = () => {
      return Math.random();
    };
    const randomComputed = computed(() => {
      return Math.random();
    });
    return {
      randomMethods,
      randomComputed,
    };
  },
};
<\/script>
\`\`\`

<div>
  <ComputedMethods />
</div>

</div>
`,title:"computed \u3068\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u9055\u3044",level:1,content:`# computed \u3068\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u9055\u3044

\u95A2\u6570\u547C\u3073\u51FA\u3057\u306F\u90FD\u5EA6\u547C\u3073\u51FA\u3055\u308C\u308B\u6BCE\u306B\u5B9F\u884C\u3059\u308B\u306E\u306B\u5BFE\u3057\u3001\`computed\` \u5185\u3067\u53C2\u7167\u3057\u3066\u3044\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u304C\u5909\u66F4\u3055\u308C\u306A\u3044\u9650\u308A\u3001\`computed\` \u306F\u4E00\u5EA6\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u7D50\u679C\u3092\u8FD4\u3059\u3002
\u3046\u307E\u304F\u4F7F\u3044\u5206\u3051\u308B\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A\u306B\u5F79\u7ACB\u3066\u308B\u3002

<div class="flex gap-4">

\`\`\`vue
<template>
  <p>\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u5834\u5408</p>
  <ol class="use-methods">
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
  </ol>
  <p>computed\u3092\u4F7F\u3063\u305F\u5834\u5408</p>
  <ol class="use-computed">
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
  </ol>
</template>
\`\`\`

\`\`\`vue
<script>
import { computed } from "vue";
export default {
  setup() {
    const randomMethods = () => {
      return Math.random();
    };
    const randomComputed = computed(() => {
      return Math.random();
    });
    return {
      randomMethods,
      randomComputed,
    };
  },
};
<\/script>
\`\`\`

<div>
  <ComputedMethods />
</div>

</div>`,frontmatter:{},index:16,start:483,end:534,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:mv,meta:{slide:{raw:`
# \u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09

\u7279\u5B9A\u306E\u30C7\u30FC\u30BF\u3092\u76E3\u8996\u3057\u3001\u5909\u66F4\u304C\u3042\u3063\u305F\u3068\u304D\u306B\u51E6\u7406\u3092\u884C\u3048\u308B\u3001\u5F15\u6570\u3068\u3057\u3066\u3001\u65B0\u3057\u3044\u5024\u3068\u305D\u306E\u524D\u306E\u5024\u3092\u53D6\u5F97\u3067\u304D\u308B\u3002

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: (value) => {
        count.value = value;
      },
    });
    watch(count, (current, prev) => {
      console.log(current, prev);
    });
    return { count, plusOne };
  },
};
<\/script>
\`\`\`

</div>
`,title:"\u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09",level:1,content:`# \u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09

\u7279\u5B9A\u306E\u30C7\u30FC\u30BF\u3092\u76E3\u8996\u3057\u3001\u5909\u66F4\u304C\u3042\u3063\u305F\u3068\u304D\u306B\u51E6\u7406\u3092\u884C\u3048\u308B\u3001\u5F15\u6570\u3068\u3057\u3066\u3001\u65B0\u3057\u3044\u5024\u3068\u305D\u306E\u524D\u306E\u5024\u3092\u53D6\u5F97\u3067\u304D\u308B\u3002

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: (value) => {
        count.value = value;
      },
    });
    watch(count, (current, prev) => {
      console.log(current, prev);
    });
    return { count, plusOne };
  },
};
<\/script>
\`\`\`

</div>`,frontmatter:{},index:17,start:535,end:571,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:vv,meta:{slide:{raw:`
# \u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09

\u914D\u5217\u3092\u76E3\u8996\u3059\u308B\u5834\u5408\u3001\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3092\u540C\u6642\u306B\u76E3\u8996\u3067\u304D\u308B

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: (value) => {
        count.value = value;
      },
    });
    watch([count, plusOne], (current, prev) => {
      console.log(current, prev);
    });
    return { count, plusOne };
  },
};
<\/script>
\`\`\`

</div>
`,title:"\u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09",level:1,content:`# \u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09

\u914D\u5217\u3092\u76E3\u8996\u3059\u308B\u5834\u5408\u3001\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3092\u540C\u6642\u306B\u76E3\u8996\u3067\u304D\u308B

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>
<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
    const count = ref(1);
    const plusOne = computed({
      get: () => count.value + 1,
      set: (value) => {
        count.value = value;
      },
    });
    watch([count, plusOne], (current, prev) => {
      console.log(current, prev);
    });
    return { count, plusOne };
  },
};
<\/script>
\`\`\`

</div>`,frontmatter:{},index:18,start:572,end:608,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Cv,meta:{slide:{raw:`
# \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u69CB\u6587

- \u5C55\u958B
- \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6
- \u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0
- \u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0
- \u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0
- \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0
- \u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0
`,title:"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u69CB\u6587",level:1,content:`# \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u69CB\u6587

- \u5C55\u958B
- \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6
- \u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0
- \u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0
- \u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0
- \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0
- \u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0`,frontmatter:{},index:19,start:609,end:620,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:wv,meta:{slide:{raw:`
# \u5C55\u958B

Mustache \u69CB\u6587\u3067\u30C6\u30AD\u30B9\u30C8\u5C55\u958B\u3067\u304D\u308B\u3002JavaScript \u5F0F\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B

\`\`\`vue
<template>
  <div>Message: {{ msg }}</div>
</template>

<script>
export default {
  setup() {
    const msg = "Hello!";
    return {
      msg,
    };
  },
};
<\/script>
\`\`\`

\u7D50\u679C

\`\`\`
Message: Hello!
\`\`\`
`,title:"\u5C55\u958B",level:1,content:`# \u5C55\u958B

Mustache \u69CB\u6587\u3067\u30C6\u30AD\u30B9\u30C8\u5C55\u958B\u3067\u304D\u308B\u3002JavaScript \u5F0F\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B

\`\`\`vue
<template>
  <div>Message: {{ msg }}</div>
</template>

<script>
export default {
  setup() {
    const msg = "Hello!";
    return {
      msg,
    };
  },
};
<\/script>
\`\`\`

\u7D50\u679C

\`\`\`
Message: Hello!
\`\`\``,frontmatter:{},index:20,start:621,end:649,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Nv,meta:{slide:{raw:`
# \u5C55\u958B\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u4F7F\u3046\u3068\uFF09

<p class="text-sm">
counter\u30921\u79D2\u3054\u3068\u306B\u5897\u3084\u3057\u3066\u3044\u304F
</p>

\`\`\`vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(10);
    setInterval(() => {
      counter.value += 1;
    }, 1000);
    return {
      counter,
    };
  },
};
<\/script>
\`\`\`

\u7D50\u679C

<div>
<CounterSample />
</div>
`,title:"\u5C55\u958B\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u4F7F\u3046\u3068\uFF09",level:1,content:`# \u5C55\u958B\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u4F7F\u3046\u3068\uFF09

<p class="text-sm">
counter\u30921\u79D2\u3054\u3068\u306B\u5897\u3084\u3057\u3066\u3044\u304F
</p>

\`\`\`vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(10);
    setInterval(() => {
      counter.value += 1;
    }, 1000);
    return {
      counter,
    };
  },
};
<\/script>
\`\`\`

\u7D50\u679C

<div>
<CounterSample />
</div>`,frontmatter:{},index:21,start:650,end:680,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Vv,meta:{slide:{raw:`
# \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6

- \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F Vue \u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u308B\u7279\u5225\u306A\u5C5E\u6027
- v- \u304B\u3089\u59CB\u307E\u308B
- \u7279\u5B9A\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\uFF08v-bind \u3068 v-on\uFF09\u306F\u7701\u7565\u8A18\u6CD5\u304C\u3042\u308B\uFF08\u4F8B\uFF1A\`:href\` \`@click\`\uFF09
- \u7279\u5B9A\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B\uFF08\u4F8B\uFF1A\`v-on:click\`\uFF09

\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u304C\u4F7F\u308F\u308C\u3066\u3044\u308B\u7B87\u6240\u306F Vue \u306E\u6A5F\u80FD\u3068\u95A2\u4FC2\u3057\u3066\u3044\u308B\u3068\u6C17\u3065\u3051\u308B\u3068\u3088\u3044
`,title:"\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6",level:1,content:`# \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6

- \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F Vue \u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u308B\u7279\u5225\u306A\u5C5E\u6027
- v- \u304B\u3089\u59CB\u307E\u308B
- \u7279\u5B9A\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\uFF08v-bind \u3068 v-on\uFF09\u306F\u7701\u7565\u8A18\u6CD5\u304C\u3042\u308B\uFF08\u4F8B\uFF1A\`:href\` \`@click\`\uFF09
- \u7279\u5B9A\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B\uFF08\u4F8B\uFF1A\`v-on:click\`\uFF09

\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u304C\u4F7F\u308F\u308C\u3066\u3044\u308B\u7B87\u6240\u306F Vue \u306E\u6A5F\u80FD\u3068\u95A2\u4FC2\u3057\u3066\u3044\u308B\u3068\u6C17\u3065\u3051\u308B\u3068\u3088\u3044`,frontmatter:{},index:22,start:681,end:691,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:qv,meta:{slide:{raw:`
# \u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0

\u300C\u5C55\u958B\u300D\u3068\u540C\u3058\u3088\u3046\u306B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092 HTML \u5C5E\u6027\u306B\u53CD\u6620\u3055\u305B\u308B\u5834\u5408\u3001 \`v-bind\` \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F7F\u3046

<div>

\`\`\`vue
<template>
  <a v-bind:href="url"> Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 </a>
</template>

<script>
export default {
  setup() {
    const url = "https://v3.ja.vuejs.org/";
    return {
      url,
    };
  },
};
<\/script>
\`\`\`

\u7701\u7565\u3059\u308B\u3068\u3053\u306E\u3088\u3046\u306B\u66F8\u3051\u308B

</div>

\`\`\`html
<a :href="url"> Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 </a>
\`\`\`
`,title:"\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0",level:1,content:`# \u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0

\u300C\u5C55\u958B\u300D\u3068\u540C\u3058\u3088\u3046\u306B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092 HTML \u5C5E\u6027\u306B\u53CD\u6620\u3055\u305B\u308B\u5834\u5408\u3001 \`v-bind\` \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F7F\u3046

<div>

\`\`\`vue
<template>
  <a v-bind:href="url"> Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 </a>
</template>

<script>
export default {
  setup() {
    const url = "https://v3.ja.vuejs.org/";
    return {
      url,
    };
  },
};
<\/script>
\`\`\`

\u7701\u7565\u3059\u308B\u3068\u3053\u306E\u3088\u3046\u306B\u66F8\u3051\u308B

</div>

\`\`\`html
<a :href="url"> Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 </a>
\`\`\``,frontmatter:{},index:23,start:692,end:724,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Jv,meta:{slide:{raw:`
# \u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF08\u30AF\u30E9\u30B9\u3068\u30B9\u30BF\u30A4\u30EB\uFF09

\u30AF\u30E9\u30B9\u5C5E\u6027\u3068\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027\u306E\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587\u3068\u914D\u5217\u69CB\u6587\u304C\u3042\u308B

<div class="flex gap-6">

<div>

<p class="text-xs">\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587</p>

\`\`\`vue
<template>
  <span :class="{ red: red }">Hello World!</span>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const red = ref(true);
    return {
      red,
    };
  },
};
<\/script>
<style>
.red {
  color: red;
}
</style>
\`\`\`

</div>

<div>

<p class="text-xs">\u914D\u5217\u69CB\u6587\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3051\u308B</p>

\`\`\`html
<span :class="[red]">Hello World!</span>
\`\`\`

<p class="text-xs">\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u308B</p>

\`\`\`html
<span :class="[red, { red }]">Hello World!</span>
\`\`\`

<p class="text-xs">\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027\u306B\u3082\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587\u3068\u914D\u5217\u69CB\u6587\u304C\u3042\u308B</p>

\`\`\`vue
<template>
  <span :style="{ color: 'red' }">Hello World!</span>
</template>
\`\`\`

</div>

</div>
`,title:"\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF08\u30AF\u30E9\u30B9\u3068\u30B9\u30BF\u30A4\u30EB\uFF09",level:1,content:`# \u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF08\u30AF\u30E9\u30B9\u3068\u30B9\u30BF\u30A4\u30EB\uFF09

\u30AF\u30E9\u30B9\u5C5E\u6027\u3068\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027\u306E\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587\u3068\u914D\u5217\u69CB\u6587\u304C\u3042\u308B

<div class="flex gap-6">

<div>

<p class="text-xs">\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587</p>

\`\`\`vue
<template>
  <span :class="{ red: red }">Hello World!</span>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const red = ref(true);
    return {
      red,
    };
  },
};
<\/script>
<style>
.red {
  color: red;
}
</style>
\`\`\`

</div>

<div>

<p class="text-xs">\u914D\u5217\u69CB\u6587\u306F\u3053\u306E\u3088\u3046\u306B\u66F8\u3051\u308B</p>

\`\`\`html
<span :class="[red]">Hello World!</span>
\`\`\`

<p class="text-xs">\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u308B</p>

\`\`\`html
<span :class="[red, { red }]">Hello World!</span>
\`\`\`

<p class="text-xs">\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027\u306B\u3082\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587\u3068\u914D\u5217\u69CB\u6587\u304C\u3042\u308B</p>

\`\`\`vue
<template>
  <span :style="{ color: 'red' }">Hello World!</span>
</template>
\`\`\`

</div>

</div>`,frontmatter:{},index:24,start:725,end:786,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:l1,meta:{slide:{raw:`
# \u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0

\`v-on\` \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F HTML \u8981\u7D20\u306A\u3069\u306E[\u30A4\u30D9\u30F3\u30C8](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events)\u64CD\u4F5C\u306B\u4F7F\u308F\u308C\u308B\u3002\`:\`\u306E\u5F8C\u306E\u5F15\u6570\u3067\u30A4\u30D9\u30F3\u30C8\u306E\u7A2E\u985E\u3092\u6307\u5B9A\u3067\u304D\u308B

<div class="h-60 mb-6 overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    return {
      counter,
    };
  },
};
<\/script>
\`\`\`

</div>

\u7701\u7565\u3059\u308B\u3068\u3053\u306E\u3088\u3046\u306B\u304B\u3051\u308B

\`\`\`html
<button @click="counter += 1">Add 1</button>
\`\`\`
`,title:"\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0",level:1,content:`# \u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0

\`v-on\` \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F HTML \u8981\u7D20\u306A\u3069\u306E[\u30A4\u30D9\u30F3\u30C8](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events)\u64CD\u4F5C\u306B\u4F7F\u308F\u308C\u308B\u3002\`:\`\u306E\u5F8C\u306E\u5F15\u6570\u3067\u30A4\u30D9\u30F3\u30C8\u306E\u7A2E\u985E\u3092\u6307\u5B9A\u3067\u304D\u308B

<div class="h-60 mb-6 overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    return {
      counter,
    };
  },
};
<\/script>
\`\`\`

</div>

\u7701\u7565\u3059\u308B\u3068\u3053\u306E\u3088\u3046\u306B\u304B\u3051\u308B

\`\`\`html
<button @click="counter += 1">Add 1</button>
\`\`\``,frontmatter:{},index:25,start:787,end:823,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:r1,meta:{slide:{raw:`
# \u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\uFF08\u95A2\u6570\u540D\u3092\u5C5E\u6027\u5024\u3068\u3057\u3066\u4F7F\u3046\uFF09

\u95A2\u6570\u3092\u6E21\u3059\u3068\u8907\u96D1\u306A\u51E6\u7406\u304C\u66F8\u304D\u3084\u3059\u3044

\`\`\`vue
<template>
  <div>
    <button @click="increment">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const increment = () => {
      counter.value += 1;
    };
    return {
      counter,
      increment,
    };
  },
};
<\/script>
\`\`\`
`,title:"\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\uFF08\u95A2\u6570\u540D\u3092\u5C5E\u6027\u5024\u3068\u3057\u3066\u4F7F\u3046\uFF09",level:1,content:`# \u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\uFF08\u95A2\u6570\u540D\u3092\u5C5E\u6027\u5024\u3068\u3057\u3066\u4F7F\u3046\uFF09

\u95A2\u6570\u3092\u6E21\u3059\u3068\u8907\u96D1\u306A\u51E6\u7406\u304C\u66F8\u304D\u3084\u3059\u3044

\`\`\`vue
<template>
  <div>
    <button @click="increment">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const increment = () => {
      counter.value += 1;
    };
    return {
      counter,
      increment,
    };
  },
};
<\/script>
\`\`\``,frontmatter:{},index:26,start:824,end:854,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:LD,meta:{slide:{raw:`
# \u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0

\`v-if\` \u3042\u308B\u3044\u306F \`v-show\` \u306B\u3088\u3063\u3066\u6761\u4EF6\u306B\u5FDC\u3058\u3066\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u7BC4\u56F2\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002 \`v-show\` \u306F\u898B\u305F\u76EE\u4E0A\u975E\u8868\u793A\u306B\u3059\u308B\u304C \`v-if\` \u306F DOM \u8981\u7D20\u3082\u53D6\u308A\u9664\u304F\u3002

\`\`\`vue {all|3|10|all}
<template>
  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script>
export default {
  setup() {
    const seen = true;
    return {
      seen,
    };
  },
};
<\/script>
\`\`\`

<arrow v-click="2" x1="400" y1="420" x2="230" y2="365" color="#564" width="3" arrowSize="1" />
`,title:"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",level:1,content:`# \u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0

\`v-if\` \u3042\u308B\u3044\u306F \`v-show\` \u306B\u3088\u3063\u3066\u6761\u4EF6\u306B\u5FDC\u3058\u3066\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u7BC4\u56F2\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002 \`v-show\` \u306F\u898B\u305F\u76EE\u4E0A\u975E\u8868\u793A\u306B\u3059\u308B\u304C \`v-if\` \u306F DOM \u8981\u7D20\u3082\u53D6\u308A\u9664\u304F\u3002

\`\`\`vue {all|3|10|all}
<template>
  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script>
export default {
  setup() {
    const seen = true;
    return {
      seen,
    };
  },
};
<\/script>
\`\`\`

<arrow v-click="2" x1="400" y1="420" x2="230" y2="365" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:27,start:855,end:881,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:jD,meta:{slide:{raw:`
# \u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08v-if \u3068 v-show \u306E\u4F7F\u3044\u5206\u3051\uFF09

<div class="mb-6">

|                | v-if | v-show |
| :------------- | :--- | :----- |
| \u521D\u671F\u30B3\u30B9\u30C8     | \u4F4E\u3044 | \u9AD8\u3044   |
| \u5207\u308A\u66FF\u3048\u30B3\u30B9\u30C8 | \u9AD8\u3044 | \u4F4E\u3044   |

</div>

- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u304B\u3089\u3042\u307E\u308A\u5909\u5316\u3057\u306A\u3044\u30B1\u30FC\u30B9\u3067\u3042\u308C\u3070 \`v-if\`\u3092\u4F7F\u3046
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u304B\u3089\u983B\u7E41\u306B\u5909\u5316\u3059\u308B\u30B1\u30FC\u30B9\u3067\u3042\u308C\u3070 \`v-show\`\u3092\u4F7F\u3046
`,title:"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08v-if \u3068 v-show \u306E\u4F7F\u3044\u5206\u3051\uFF09",level:1,content:`# \u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08v-if \u3068 v-show \u306E\u4F7F\u3044\u5206\u3051\uFF09

<div class="mb-6">

|                | v-if | v-show |
| :------------- | :--- | :----- |
| \u521D\u671F\u30B3\u30B9\u30C8     | \u4F4E\u3044 | \u9AD8\u3044   |
| \u5207\u308A\u66FF\u3048\u30B3\u30B9\u30C8 | \u9AD8\u3044 | \u4F4E\u3044   |

</div>

- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u304B\u3089\u3042\u307E\u308A\u5909\u5316\u3057\u306A\u3044\u30B1\u30FC\u30B9\u3067\u3042\u308C\u3070 \`v-if\`\u3092\u4F7F\u3046
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u304B\u3089\u983B\u7E41\u306B\u5909\u5316\u3059\u308B\u30B1\u30FC\u30B9\u3067\u3042\u308C\u3070 \`v-show\`\u3092\u4F7F\u3046`,frontmatter:{},index:28,start:882,end:897,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:UD,meta:{slide:{raw:`
# \u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0

\`v-if v-else v-else-if\` \u3067\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u6761\u4EF6\u5206\u5C90\u304C\u3067\u304D\u308B\u3002 \`template\` \u8981\u7D20\u306B\u5BFE\u3057\u3066\u4F7F\u3046\u3053\u3068\u3067\u30B0\u30EB\u30FC\u30D4\u30F3\u30B0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B\u3002

<div class="flex gap-4">

\`\`\`vue
<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>

<script>
export default {
  setup() {
    const type = "A";
    return {
      type,
    };
  },
};
<\/script>
\`\`\`

\`\`\`vue
<template>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>

<script>
export default {
  setup() {
    const ok = true;
    return {
      ok,
    };
  },
};
<\/script>
\`\`\`

</div>
`,title:"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",level:1,content:`# \u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0

\`v-if v-else v-else-if\` \u3067\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u6761\u4EF6\u5206\u5C90\u304C\u3067\u304D\u308B\u3002 \`template\` \u8981\u7D20\u306B\u5BFE\u3057\u3066\u4F7F\u3046\u3053\u3068\u3067\u30B0\u30EB\u30FC\u30D4\u30F3\u30B0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B\u3002

<div class="flex gap-4">

\`\`\`vue
<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>

<script>
export default {
  setup() {
    const type = "A";
    return {
      type,
    };
  },
};
<\/script>
\`\`\`

\`\`\`vue
<template>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>

<script>
export default {
  setup() {
    const ok = true;
    return {
      ok,
    };
  },
};
<\/script>
\`\`\`

</div>`,frontmatter:{},index:29,start:898,end:948,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:YD,meta:{slide:{raw:`
# \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0

\u914D\u5217\u3042\u308B\u3044\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u3082\u3068\u306B\u53CD\u5FA9\u3057\u305F\u8981\u7D20\u306E\u8868\u793A\u304C\u3067\u304D\u308B\u3002

<div class="flex gap-8">

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  setup() {
    const todos = [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ];
    return {
      todos,
    };
  },
};
<\/script>
\`\`\`

</div>

  <div class="flex-shrink">
    <p>\u7D50\u679C</p>
    <ol>
      <li>Learn JavaScript</li>
      <li>Learn Vue</li>
      <li>Build something awesome</li>
    </ol>

  </div>

</div>
`,title:"\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",level:1,content:`# \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0

\u914D\u5217\u3042\u308B\u3044\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u3082\u3068\u306B\u53CD\u5FA9\u3057\u305F\u8981\u7D20\u306E\u8868\u793A\u304C\u3067\u304D\u308B\u3002

<div class="flex gap-8">

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  setup() {
    const todos = [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ];
    return {
      todos,
    };
  },
};
<\/script>
\`\`\`

</div>

  <div class="flex-shrink">
    <p>\u7D50\u679C</p>
    <ol>
      <li>Learn JavaScript</li>
      <li>Learn Vue</li>
      <li>Build something awesome</li>
    </ol>

  </div>

</div>`,frontmatter:{},index:30,start:949,end:999,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:GD,meta:{slide:{raw:`
# \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0

\u8981\u7D20\u306E\u518D\u5229\u7528\u3068\u4E26\u3073\u66FF\u3048\u3092\u8003\u616E\u3059\u308B\u5834\u5408\u3001\u4E00\u610F\u306A\u5024\u3092 \`key\` \u5C5E\u6027\u306B\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B\u3002

<div class="flex gap-8">

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  setup() {
    const todos = [
      { text: "Learn JavaScript", id: 1 },
      { text: "Learn Vue", id: 2 },
      { text: "Build something awesome", id: 3 },
    ];
    return {
      todos,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink">
  <p>\u7D50\u679C</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>
</div>

</div>
`,title:"\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",level:1,content:`# \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0

\u8981\u7D20\u306E\u518D\u5229\u7528\u3068\u4E26\u3073\u66FF\u3048\u3092\u8003\u616E\u3059\u308B\u5834\u5408\u3001\u4E00\u610F\u306A\u5024\u3092 \`key\` \u5C5E\u6027\u306B\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B\u3002

<div class="flex gap-8">

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  setup() {
    const todos = [
      { text: "Learn JavaScript", id: 1 },
      { text: "Learn Vue", id: 2 },
      { text: "Build something awesome", id: 3 },
    ];
    return {
      todos,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink">
  <p>\u7D50\u679C</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>
</div>

</div>`,frontmatter:{},index:31,start:1e3,end:1049,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:ag,meta:{slide:{raw:`
# \u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0

\`v-model\` \u306B\u3088\u3063\u3066 form \u306E input \u8981\u7D20\u3084 textarea \u8981\u7D20\u3001select \u8981\u7D20\u306E\u5165\u529B\u30A4\u30D9\u30F3\u30C8\u306B\u5FDC\u3058\u3066\u30C7\u30FC\u30BF\u3092\u66F4\u65B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u3002

<div class="flex gap-8">

\`\`\`vue
<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("Hello Vue!");
    return {
      message,
    };
  },
};
<\/script>
\`\`\`

<div>
  <TwoWayBindingSample/>
</div>

</div>
`,title:"\u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0",level:1,content:`# \u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0

\`v-model\` \u306B\u3088\u3063\u3066 form \u306E input \u8981\u7D20\u3084 textarea \u8981\u7D20\u3001select \u8981\u7D20\u306E\u5165\u529B\u30A4\u30D9\u30F3\u30C8\u306B\u5FDC\u3058\u3066\u30C7\u30FC\u30BF\u3092\u66F4\u65B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u3002

<div class="flex gap-8">

\`\`\`vue
<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("Hello Vue!");
    return {
      message,
    };
  },
};
<\/script>
\`\`\`

<div>
  <TwoWayBindingSample/>
</div>

</div>`,frontmatter:{},index:32,start:1050,end:1084,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:ig,meta:{slide:{raw:`
# \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8

- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210
- \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057
- \u30A4\u30D9\u30F3\u30C8\u8CFC\u8AAD\u3092\u7528\u3044\u305F\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057
- v-model \u3092\u7528\u3044\u305F\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057
- v-model \u3092\u7528\u3044\u306A\u3044\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067 v-model \u3092\u4F7F\u3046
- \u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1
`,title:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",level:1,content:`# \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8

- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210
- \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057
- \u30A4\u30D9\u30F3\u30C8\u8CFC\u8AAD\u3092\u7528\u3044\u305F\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057
- v-model \u3092\u7528\u3044\u305F\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057
- v-model \u3092\u7528\u3044\u306A\u3044\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067 v-model \u3092\u4F7F\u3046
- \u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1`,frontmatter:{},index:33,start:1085,end:1096,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:mg,meta:{slide:{raw:`
# \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210

\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u53C2\u7167\u3055\u308C\u30C4\u30EA\u30FC\u69CB\u9020\u306B\u306A\u308B\u3002\u6700\u4E0A\u4F4D\u306F\u30EB\u30FC\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08App.vue\uFF09

<img src="/components.png" alt="\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210" style="height: 80%; width: auto" />
`,title:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210",level:1,content:`# \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210

\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u53C2\u7167\u3055\u308C\u30C4\u30EA\u30FC\u69CB\u9020\u306B\u306A\u308B\u3002\u6700\u4E0A\u4F4D\u306F\u30EB\u30FC\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08App.vue\uFF09

<img src="/components.png" alt="\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210" style="height: 80%; width: auto" />`,frontmatter:{},index:34,start:1097,end:1104,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:vg,meta:{slide:{raw:`
# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B \u6587\u5B57\u5217 \u3092\u6E21\u3057\u3066\u307F\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent title="Hello!" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>{{ message }}</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    title: String,
  },
  setup(props) {
    const message = ref(props.title);
    return {
      message,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>
`,title:"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",level:1,content:`# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B \u6587\u5B57\u5217 \u3092\u6E21\u3057\u3066\u307F\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent title="Hello!" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>{{ message }}</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    title: String,
  },
  setup(props) {
    const message = ref(props.title);
    return {
      message,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>`,frontmatter:{},index:35,start:1105,end:1159,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:xg,meta:{slide:{raw:`
# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u6570\u5024\u3092\u6E21\u3059\u5834\u5408\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue {all|2|all}
<template>
  <ChildComponent :count="14" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

<p class="text-xs">\u9759\u7684\u306A\u5024\u3067\u3059\u304C\u3001\u3053\u308C\u304C\u6587\u5B57\u5217\u3067\u306F\u306A\u304F JavaScript \u306E\u5F0F\u3060\u3068Vue\u306B\u4F1D\u3048\u308B\u305F\u3081\u306B\u306Fv-bind \u3092\u4F7F\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059</p>

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>{{ message }}</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    count: Number,
  },
  setup(props) {
    const message = ref(props.count);
    return {
      message,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />
`,title:"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",level:1,content:`# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u6570\u5024\u3092\u6E21\u3059\u5834\u5408\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue {all|2|all}
<template>
  <ChildComponent :count="14" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

<p class="text-xs">\u9759\u7684\u306A\u5024\u3067\u3059\u304C\u3001\u3053\u308C\u304C\u6587\u5B57\u5217\u3067\u306F\u306A\u304F JavaScript \u306E\u5F0F\u3060\u3068Vue\u306B\u4F1D\u3048\u308B\u305F\u3081\u306B\u306Fv-bind \u3092\u4F7F\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059</p>

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>{{ message }}</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    count: Number,
  },
  setup(props) {
    const message = ref(props.count);
    return {
      message,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:36,start:1160,end:1218,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Pg,meta:{slide:{raw:`
# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u771F\u507D\u5024\uFF08true / false\uFF09\u3092\u6E21\u3059\u5834\u5408\u3082\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue {all|2|all}
<template>
  <ChildComponent :is-show="false" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<template>
  <p v-if="show">props'is-show'\u304Ctrue\u3067\u3042\u308C\u3070\u898B\u308C\u307E\u3059</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    isShow: Boolean,
  },
  setup(props) {
    const show = ref(props.isShow);
    return {
      show,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />
`,title:"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",level:1,content:`# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u771F\u507D\u5024\uFF08true / false\uFF09\u3092\u6E21\u3059\u5834\u5408\u3082\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue {all|2|all}
<template>
  <ChildComponent :is-show="false" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<template>
  <p v-if="show">props'is-show'\u304Ctrue\u3067\u3042\u308C\u3070\u898B\u308C\u307E\u3059</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    isShow: Boolean,
  },
  setup(props) {
    const show = ref(props.isShow);
    return {
      show,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:37,start:1219,end:1279,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:zg,meta:{slide:{raw:`
# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

props \u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent :is-show="false" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue {all|9-12|all}
<template>
  <p v-if="show">props'is-show'\u304Ctrue\u3067\u3042\u308C\u3070\u898B\u308C\u307E\u3059</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const show = ref(props.isShow);
    return {
      show,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>

</div>
`,title:"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",level:1,content:`# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

props \u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent :is-show="false" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue {all|9-12|all}
<template>
  <p v-if="show">props'is-show'\u304Ctrue\u3067\u3042\u308C\u3070\u898B\u308C\u307E\u3059</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const show = ref(props.isShow);
    return {
      show,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>

</div>`,frontmatter:{},index:38,start:1280,end:1341,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:qg,meta:{slide:{raw:`
# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u914D\u5217\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3059\u5834\u5408\u3082\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent :student="{ name: 'taro', old: '16' }" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>\u3053\u3093\u306B\u3061\u306F\u3001{{ user.name }}\u3055\u3093\u3001{{ user.old }}\u6B73\u306B\u306A\u308A\u307E\u3057\u305F\u306D</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    student: Object,
  },
  setup(props) {
    const user = ref(props.student);
    return {
      user,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>
`,title:"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",level:1,content:`# \u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u914D\u5217\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3059\u5834\u5408\u3082\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B

<div class="flex gap-8">

<div>

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent :student="{ name: 'taro', old: '16' }" />
</template>
<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: { ChildComponent },
};
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>\u3053\u3093\u306B\u3061\u306F\u3001{{ user.name }}\u3055\u3093\u3001{{ user.old }}\u6B73\u306B\u306A\u308A\u307E\u3057\u305F\u306D</p>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    student: Object,
  },
  setup(props) {
    const user = ref(props.student);
    return {
      user,
    };
  },
};
<\/script>
\`\`\`

</div>

</div>`,frontmatter:{},index:39,start:1342,end:1396,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:rC,meta:{slide:{raw:`
# \u30A4\u30D9\u30F3\u30C8\u8CFC\u8AAD\u3092\u7528\u3044\u305F\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u767A\u706B\u3055\u305B\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u53EF\u80FD

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent @child-clicked="clicked" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  components: { ChildComponent },
  setup() {
    const clicked = (message) => {
      alert(message);
    };
    return {
      clicked,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <button @click="clickHandler">emit !</button>
</template>

<script>
export default {
  setup(props, context) {
    const clickHandler = () => {
      context.emit("child-clicked", "Hello!");
    };
    return {
      clickHandler,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink-0">
<p class="text-xs">\u5B9F\u884C\u30B5\u30F3\u30D7\u30EB</p>
<EmitParent />
</div>

</div>
`,title:"\u30A4\u30D9\u30F3\u30C8\u8CFC\u8AAD\u3092\u7528\u3044\u305F\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",level:1,content:`# \u30A4\u30D9\u30F3\u30C8\u8CFC\u8AAD\u3092\u7528\u3044\u305F\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u767A\u706B\u3055\u305B\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u53EF\u80FD

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent @child-clicked="clicked" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  components: { ChildComponent },
  setup() {
    const clicked = (message) => {
      alert(message);
    };
    return {
      clicked,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <button @click="clickHandler">emit !</button>
</template>

<script>
export default {
  setup(props, context) {
    const clickHandler = () => {
      context.emit("child-clicked", "Hello!");
    };
    return {
      clickHandler,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink-0">
<p class="text-xs">\u5B9F\u884C\u30B5\u30F3\u30D7\u30EB</p>
<EmitParent />
</div>

</div>`,frontmatter:{},index:40,start:1397,end:1462,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:vC,meta:{slide:{raw:`
# v-model \u3092\u7528\u3044\u305F\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u89AA\u5B50\u3067\u540C\u3058\u5024\u306B\u306A\u308B\u3088\u3046\u306B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\uFF08\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u9593\u306E\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF09

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent v-model="title" />
  <p>{{ title }}</p>
</template>
<script>
import { ref } from "vue";
import ChildComponent from ... // \u4E2D\u7565;
export default {
  components: { ChildComponent },
  setup() {
    const title = ref("Hello !");
    return {
      title,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<template>
  <input v-model="title" />
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const title = computed({
      get: () => props.modelValue,
      set: (value) => {
        context.emit("update:modelValue", value);
      },
    });
    return { title };
  },
};
<\/script>
\`\`\`

</div>

</div>

<div class="flex-shrink-0">
<p class="text-xs">\u5B9F\u884C\u30B5\u30F3\u30D7\u30EB</p>

<TwowayParent />

</div>

</div>
`,title:"v-model \u3092\u7528\u3044\u305F\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",level:1,content:`# v-model \u3092\u7528\u3044\u305F\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u89AA\u5B50\u3067\u540C\u3058\u5024\u306B\u306A\u308B\u3088\u3046\u306B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\uFF08\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u9593\u306E\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF09

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent v-model="title" />
  <p>{{ title }}</p>
</template>
<script>
import { ref } from "vue";
import ChildComponent from ... // \u4E2D\u7565;
export default {
  components: { ChildComponent },
  setup() {
    const title = ref("Hello !");
    return {
      title,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<template>
  <input v-model="title" />
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const title = computed({
      get: () => props.modelValue,
      set: (value) => {
        context.emit("update:modelValue", value);
      },
    });
    return { title };
  },
};
<\/script>
\`\`\`

</div>

</div>

<div class="flex-shrink-0">
<p class="text-xs">\u5B9F\u884C\u30B5\u30F3\u30D7\u30EB</p>

<TwowayParent />

</div>

</div>`,frontmatter:{},index:41,start:1463,end:1540,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:EC,meta:{slide:{raw:`
# v-model \u3092\u7528\u3044\u306A\u3044\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u89AA\u5B50\u3067\u540C\u3058\u5024\u306B\u306A\u308B\u3088\u3046\u306B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\uFF08\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u9593\u306E\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF09

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent @update:modelValue="title = $event" :modelValue="title" />
  <p>{{ title }}</p>
</template>
<script>
import { ref } from "vue";
import ChildComponent from ... // \u4E2D\u7565;
export default {
  components: { ChildComponent },
  setup() {
    const title = ref("Hello !");
    return {
      title,
    };
  },
};
<\/script>
\`\`\`

</div>

- v-model \u304C\u304A\u3053\u306A\u3063\u3066\u3044\u308B\u3053\u3068\u306F v-model \u3092\u4F7F\u308F\u306A\u304F\u3066\u3082\u5B9F\u73FE\u53EF\u80FD\uFF08\u7CD6\u8863\u69CB\u6587\uFF09
- \u89AA \u2192 \u5B50\uFF1A\u30D7\u30ED\u30D1\u30C6\u30A3
- \u5B50 \u2192 \u89AA\uFF1A\u30A4\u30D9\u30F3\u30C8
- \u3053\u306E\u3088\u3046\u306A\u72B6\u614B\u304C\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF08\u5024\u3092\u675F\u7E1B\u3057\u3042\u3063\u3066\u3044\u308B\uFF09

</div>
`,title:"v-model \u3092\u7528\u3044\u306A\u3044\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",level:1,content:`# v-model \u3092\u7528\u3044\u306A\u3044\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057

\u89AA\u5B50\u3067\u540C\u3058\u5024\u306B\u306A\u308B\u3088\u3046\u306B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\uFF08\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u9593\u306E\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF09

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent @update:modelValue="title = $event" :modelValue="title" />
  <p>{{ title }}</p>
</template>
<script>
import { ref } from "vue";
import ChildComponent from ... // \u4E2D\u7565;
export default {
  components: { ChildComponent },
  setup() {
    const title = ref("Hello !");
    return {
      title,
    };
  },
};
<\/script>
\`\`\`

</div>

- v-model \u304C\u304A\u3053\u306A\u3063\u3066\u3044\u308B\u3053\u3068\u306F v-model \u3092\u4F7F\u308F\u306A\u304F\u3066\u3082\u5B9F\u73FE\u53EF\u80FD\uFF08\u7CD6\u8863\u69CB\u6587\uFF09
- \u89AA \u2192 \u5B50\uFF1A\u30D7\u30ED\u30D1\u30C6\u30A3
- \u5B50 \u2192 \u89AA\uFF1A\u30A4\u30D9\u30F3\u30C8
- \u3053\u306E\u3088\u3046\u306A\u72B6\u614B\u304C\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF08\u5024\u3092\u675F\u7E1B\u3057\u3042\u3063\u3066\u3044\u308B\uFF09

</div>`,frontmatter:{},index:42,start:1541,end:1581,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:wC,meta:{slide:{raw:`
# \u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1

slot \u3092\u4F7F\u3046\u3068\u3001HTML \u8981\u7D20\u306E\u3088\u3046\u306B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u5B50\u8981\u7D20\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent>Hello Component</ChildComponent>
</template>
// script\u306F\u4E2D\u7565
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <div>
    <strong>ChildComponent: </strong>
    <slot></slot>
  </div>
</template>
\`\`\`

</div>
</div>

<div class="text-xs">
<p class="text-xs">\u7D50\u679C\u4F8B</p>
<strong>ChildComponent: </strong>Hello Component
</div>
`,title:"\u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1",level:1,content:`# \u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1

slot \u3092\u4F7F\u3046\u3068\u3001HTML \u8981\u7D20\u306E\u3088\u3046\u306B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u5B50\u8981\u7D20\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent>Hello Component</ChildComponent>
</template>
// script\u306F\u4E2D\u7565
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue</p>

\`\`\`vue
<template>
  <div>
    <strong>ChildComponent: </strong>
    <slot></slot>
  </div>
</template>
\`\`\`

</div>
</div>

<div class="text-xs">
<p class="text-xs">\u7D50\u679C\u4F8B</p>
<strong>ChildComponent: </strong>Hello Component
</div>`,frontmatter:{},index:43,start:1582,end:1623,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:NC,meta:{slide:{raw:`
# Vue \u306E\u57FA\u672C\u7684\u306A\u66F8\u304D\u65B9\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01

\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F

\u4EE5\u4E0B\u3092\u5B66\u3093\u3067\u304D\u305F

- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u4F5C\u308A\u65B9
- \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u66F8\u304D\u65B9
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4F5C\u308A\u65B9

\u3053\u3053\u307E\u3067\u306F Vue.js \u3092\u4F7F\u3046\u306A\u3089\u5FC5\u305A\u77E5\u3063\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308B\u5185\u5BB9

\u5B66\u7FD2\u306E\u76EE\u5B89

- \u7406\u89E3\u3057\u3066\u3044\u308B\u3053\u3068
- \u66F8\u3051\u308B\u3053\u3068

\u81EA\u4FE1\u304C\u306A\u3044\u7B87\u6240\u306F\u5FA9\u7FD2\u30FB\u8CEA\u554F\u3057\u307E\u3057\u3087\u3046\uFF01
`,title:"Vue \u306E\u57FA\u672C\u7684\u306A\u66F8\u304D\u65B9\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01",level:1,content:`# Vue \u306E\u57FA\u672C\u7684\u306A\u66F8\u304D\u65B9\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01

\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F

\u4EE5\u4E0B\u3092\u5B66\u3093\u3067\u304D\u305F

- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u4F5C\u308A\u65B9
- \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u66F8\u304D\u65B9
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4F5C\u308A\u65B9

\u3053\u3053\u307E\u3067\u306F Vue.js \u3092\u4F7F\u3046\u306A\u3089\u5FC5\u305A\u77E5\u3063\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308B\u5185\u5BB9

\u5B66\u7FD2\u306E\u76EE\u5B89

- \u7406\u89E3\u3057\u3066\u3044\u308B\u3053\u3068
- \u66F8\u3051\u308B\u3053\u3068

\u81EA\u4FE1\u304C\u306A\u3044\u7B87\u6240\u306F\u5FA9\u7FD2\u30FB\u8CEA\u554F\u3057\u307E\u3057\u3087\u3046\uFF01`,frontmatter:{},index:44,start:1624,end:1644,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:VC,meta:{slide:{raw:`
# \u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\uFF1F

\u3053\u308C\u304B\u3089\u5B66\u3076\u5185\u5BB9\u306E\u78BA\u8A8D

- \u3088\u308A\u5177\u4F53\u7684\u306A\u984C\u6750\u3067\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F
  - \u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
    - \u3053\u308C\u307E\u3067\u5B66\u3093\u3060\u5185\u5BB9\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u5C11\u3057\u8907\u96D1\u306A\u5B9F\u88C5
  - Markdown \u30A8\u30C7\u30A3\u30BF\u30FC
    - throttle-debounce \u306B\u3088\u308B\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D
  - \u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC
    - \u753B\u50CF\u306E\u53D6\u5F97\u3068\u8868\u793A
    - \u3042\u3089\u304B\u3058\u3081\u7528\u610F\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u306E\u9069\u7528
  - \u30C4\u30AF\u30ED\u30A2\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC
    - Fetch API \u306B\u3088\u308B JSON \u30C7\u30FC\u30BF\u306E\u53D6\u5F97
    - Vue Router \u306B\u3088\u308B\u753B\u9762\u9077\u79FB
`,title:"\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\uFF1F",level:1,content:`# \u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\uFF1F

\u3053\u308C\u304B\u3089\u5B66\u3076\u5185\u5BB9\u306E\u78BA\u8A8D

- \u3088\u308A\u5177\u4F53\u7684\u306A\u984C\u6750\u3067\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F
  - \u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
    - \u3053\u308C\u307E\u3067\u5B66\u3093\u3060\u5185\u5BB9\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u5C11\u3057\u8907\u96D1\u306A\u5B9F\u88C5
  - Markdown \u30A8\u30C7\u30A3\u30BF\u30FC
    - throttle-debounce \u306B\u3088\u308B\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D
  - \u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC
    - \u753B\u50CF\u306E\u53D6\u5F97\u3068\u8868\u793A
    - \u3042\u3089\u304B\u3058\u3081\u7528\u610F\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u306E\u9069\u7528
  - \u30C4\u30AF\u30ED\u30A2\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC
    - Fetch API \u306B\u3088\u308B JSON \u30C7\u30FC\u30BF\u306E\u53D6\u5F97
    - Vue Router \u306B\u3088\u308B\u753B\u9762\u9077\u79FB`,frontmatter:{},index:45,start:1645,end:1662,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:WC,meta:{slide:{raw:`
# Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u5468\u8FBA\u30E9\u30A4\u30D6\u30E9\u30EA

\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5FC5\u8981\u306A\u6A5F\u80FD\u306F\u4ED6\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u5B9F\u88C5\u3059\u308B

- throttle-debounce
- fetch
- Vue Router
`,title:"Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u5468\u8FBA\u30E9\u30A4\u30D6\u30E9\u30EA",level:1,content:`# Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u5468\u8FBA\u30E9\u30A4\u30D6\u30E9\u30EA

\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u5FC5\u8981\u306A\u6A5F\u80FD\u306F\u4ED6\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u5B9F\u88C5\u3059\u308B

- throttle-debounce
- fetch
- Vue Router`,frontmatter:{},index:46,start:1663,end:1672,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:ZC,meta:{slide:{raw:`
# throttle, debounce

throttle, debounce \u3092\u4F7F\u3046\u3068\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057\u983B\u5EA6\u3092\u9593\u5F15\u304F\u3053\u3068\u304C\u3067\u304D\u308B

<div class="flex gap-8">

<div class="h-sm overflow-y-auto flex-shrink">

\`\`\`vue
<script>
import { debounce } from "throttle-debounce";
import { ref } from "vue";
export default {
  setup() {
    const message = ref("");
    const originalFruits = [
      "orange",
      "banana",
      "strawberry",
      "grape",
      "watermelon",
    ];
    const fruits = ref(originalFruits);
    const updateText = debounce(1000, () => {
      fruits.value = originalFruits.filter(
        (fruit) => fruit.indexOf(message.value) >= 0
      );
    });
    return {
      updateText,
      fruits,
      message,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

\`\`\`vue
<template>
  <input type="text" v-model="message" @input="updateText" />
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit }}
    </li>
  </ul>
</template>
\`\`\`

</div>
</div>
`,title:"throttle, debounce",level:1,content:`# throttle, debounce

throttle, debounce \u3092\u4F7F\u3046\u3068\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057\u983B\u5EA6\u3092\u9593\u5F15\u304F\u3053\u3068\u304C\u3067\u304D\u308B

<div class="flex gap-8">

<div class="h-sm overflow-y-auto flex-shrink">

\`\`\`vue
<script>
import { debounce } from "throttle-debounce";
import { ref } from "vue";
export default {
  setup() {
    const message = ref("");
    const originalFruits = [
      "orange",
      "banana",
      "strawberry",
      "grape",
      "watermelon",
    ];
    const fruits = ref(originalFruits);
    const updateText = debounce(1000, () => {
      fruits.value = originalFruits.filter(
        (fruit) => fruit.indexOf(message.value) >= 0
      );
    });
    return {
      updateText,
      fruits,
      message,
    };
  },
};
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

\`\`\`vue
<template>
  <input type="text" v-model="message" @input="updateText" />
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit }}
    </li>
  </ul>
</template>
\`\`\`

</div>
</div>`,frontmatter:{},index:47,start:1673,end:1730,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:GC,meta:{slide:{raw:`
# fetch

\u30B5\u30FC\u30D0\u30FC\u3068\u306E\u901A\u4FE1\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306E\u30D6\u30E9\u30A6\u30B6\u306E\u6A19\u6E96 API
`,title:"fetch",level:1,content:`# fetch

\u30B5\u30FC\u30D0\u30FC\u3068\u306E\u901A\u4FE1\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306E\u30D6\u30E9\u30A6\u30B6\u306E\u6A19\u6E96 API`,frontmatter:{},index:48,start:1731,end:1736,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:e4,meta:{slide:{raw:`
# Vue Router

URL \u3054\u3068\u306B\u8868\u793A\u3059\u308B\u753B\u9762\u3092\u5236\u5FA1\u3059\u308B\u305F\u3081\u306E\u30E9\u30A4\u30D6\u30E9\u30EA
`,title:"Vue Router",level:1,content:`# Vue Router

URL \u3054\u3068\u306B\u8868\u793A\u3059\u308B\u753B\u9762\u3092\u5236\u5FA1\u3059\u308B\u305F\u3081\u306E\u30E9\u30A4\u30D6\u30E9\u30EA`,frontmatter:{},index:49,start:1737,end:1742,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:n4,meta:{slide:{raw:`
# fetch / Vue Router \u3092\u4F7F\u3063\u305F\u30B5\u30F3\u30D7\u30EB

https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/sample-fetch-router?file=src/App.vue&terminal=dev
`,title:"fetch / Vue Router \u3092\u4F7F\u3063\u305F\u30B5\u30F3\u30D7\u30EB",level:1,content:`# fetch / Vue Router \u3092\u4F7F\u3063\u305F\u30B5\u30F3\u30D7\u30EB

https://stackblitz.com/github/tuqulore/vue-3-practices/tree/main/sample-fetch-router?file=src/App.vue&terminal=dev`,frontmatter:{},index:50,start:1743,end:1748,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:c4,meta:{slide:{raw:`
# Nuxt 3

\u52B9\u7387\u7684\u306B Vue 3 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306E\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF

- Vue.js \u304C\u5C0E\u5165\u6E08\u307F\uFF08Nuxt \u3092\u5C0E\u5165\u3059\u308C\u3070 Vue.js \u306E\u5C0E\u5165\u304C\u4E0D\u8981\uFF09
- Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u7B49\u306E import \u3092\u7701\u7565\u3067\u304D\u308B
- pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B .vue \u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 HTML \u30DA\u30FC\u30B8\u304C\u3067\u304D\u308B\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u81EA\u52D5\u751F\u6210\uFF09
- server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u30B5\u30FC\u30D0\u30FC\u5074\u306E\u51E6\u7406\u304C\u66F8\u3051\u308B\uFF08API \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306E\u751F\u6210\uFF09
- Nuxt 3 \u306F 2022 \u5E74 6 \u6708\u73FE\u5728\u3001\u30EA\u30EA\u30FC\u30B9\u5019\u88DC\u7248\u304C\u516C\u958B\u3055\u308C\u3066\u3044\u308B
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

\u52B9\u7387\u7684\u306B Vue 3 \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u3092\u304A\u3053\u306A\u3046\u305F\u3081\u306E\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF

- Vue.js \u304C\u5C0E\u5165\u6E08\u307F\uFF08Nuxt \u3092\u5C0E\u5165\u3059\u308C\u3070 Vue.js \u306E\u5C0E\u5165\u304C\u4E0D\u8981\uFF09
- Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u7B49\u306E import \u3092\u7701\u7565\u3067\u304D\u308B
- pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B .vue \u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 HTML \u30DA\u30FC\u30B8\u304C\u3067\u304D\u308B\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u81EA\u52D5\u751F\u6210\uFF09
- server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u30B5\u30FC\u30D0\u30FC\u5074\u306E\u51E6\u7406\u304C\u66F8\u3051\u308B\uFF08API \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306E\u751F\u6210\uFF09
- Nuxt 3 \u306F 2022 \u5E74 6 \u6708\u73FE\u5728\u3001\u30EA\u30EA\u30FC\u30B9\u5019\u88DC\u7248\u304C\u516C\u958B\u3055\u308C\u3066\u3044\u308B`,frontmatter:{},index:51,start:1749,end:1760,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:y4,meta:{slide:{raw:`
# Nuxt 3

- pages
- NuxtLink
- layouts
- Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA
- Suspense
- composables
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

- pages
- NuxtLink
- layouts
- Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA
- Suspense
- composables`,frontmatter:{},index:52,start:1761,end:1771,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:h4,meta:{slide:{raw:`
# pages

app.vue \u3092\u524A\u9664\u3059\u308B\u3002  
pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B.vue \u30D5\u30A1\u30A4\u30EB\u3092\u914D\u7F6E\u3057\u3001\u8907\u6570\u30DA\u30FC\u30B8\u3092\u69CB\u6210\u3059\u308B\u3002
\u307E\u305A\u306F \`pages/index.vue\`, \`pages/about.vue\` \u3092\u4F5C\u6210\u3059\u308B\u3002

Vue \u958B\u767A\u74B0\u5883\u3067\u306F App.vue \u30D5\u30A1\u30A4\u30EB\u3092\u30E1\u30A4\u30F3\u3067\u958B\u767A\u3057\u3066\u3044\u3066\u3001Nuxt \u3067\u3082\u540C\u69D8\u306E\u76EE\u7684\u3092 app.vue \u306B\u3066\u884C\u3048\u308B\u3002\u4F8B\u3048\u3070 app.vue \u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3001\u5404\u30DA\u30FC\u30B8\u306E template \u90E8\u5206\u304C\`<NuxtPage />\`\u306B\u7F6E\u304D\u63DB\u308F\u308B\u3002

\`\`\`vue
<template>
  <header>\u5171\u901A\u30D8\u30C3\u30C0</header>
  <NuxtPage />
</template>
\`\`\`

\u305F\u3060\u3057\u3001\u8907\u6570\u30DA\u30FC\u30B8\u3092\u69CB\u6210\u3059\u308B\u306B\u3042\u305F\u3063\u3066\u306F pages \u5185\u3067\u958B\u767A\u30FB\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u4E00\u822C\u7684\u3002
\u305D\u306E\u969B\u3001app.vue \u3067\u3053\u306E\u3088\u3046\u306A\u3053\u3068\u304C\u3067\u304D\u308B\u304C\u3001\u5F8C\u8FF0\u3059\u308B layouts \u6A5F\u80FD\u3092\u4F7F\u3063\u305F\u307B\u3046\u304C\u3088\u3044\u3002
`,title:"pages",level:1,content:`# pages

app.vue \u3092\u524A\u9664\u3059\u308B\u3002  
pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B.vue \u30D5\u30A1\u30A4\u30EB\u3092\u914D\u7F6E\u3057\u3001\u8907\u6570\u30DA\u30FC\u30B8\u3092\u69CB\u6210\u3059\u308B\u3002
\u307E\u305A\u306F \`pages/index.vue\`, \`pages/about.vue\` \u3092\u4F5C\u6210\u3059\u308B\u3002

Vue \u958B\u767A\u74B0\u5883\u3067\u306F App.vue \u30D5\u30A1\u30A4\u30EB\u3092\u30E1\u30A4\u30F3\u3067\u958B\u767A\u3057\u3066\u3044\u3066\u3001Nuxt \u3067\u3082\u540C\u69D8\u306E\u76EE\u7684\u3092 app.vue \u306B\u3066\u884C\u3048\u308B\u3002\u4F8B\u3048\u3070 app.vue \u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3001\u5404\u30DA\u30FC\u30B8\u306E template \u90E8\u5206\u304C\`<NuxtPage />\`\u306B\u7F6E\u304D\u63DB\u308F\u308B\u3002

\`\`\`vue
<template>
  <header>\u5171\u901A\u30D8\u30C3\u30C0</header>
  <NuxtPage />
</template>
\`\`\`

\u305F\u3060\u3057\u3001\u8907\u6570\u30DA\u30FC\u30B8\u3092\u69CB\u6210\u3059\u308B\u306B\u3042\u305F\u3063\u3066\u306F pages \u5185\u3067\u958B\u767A\u30FB\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u4E00\u822C\u7684\u3002
\u305D\u306E\u969B\u3001app.vue \u3067\u3053\u306E\u3088\u3046\u306A\u3053\u3068\u304C\u3067\u304D\u308B\u304C\u3001\u5F8C\u8FF0\u3059\u308B layouts \u6A5F\u80FD\u3092\u4F7F\u3063\u305F\u307B\u3046\u304C\u3088\u3044\u3002`,frontmatter:{},index:53,start:1772,end:1791,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:F4,meta:{slide:{raw:`
# NuxtLink

\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067 Nav.vue \u3092\u4F5C\u6210\u3001index \u3068 about \u306E\u30EA\u30F3\u30AF\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u3002  
Nuxt \u3067\u306F\u30DA\u30FC\u30B8\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 Vue Router \u306B\u3088\u308B\u8A2D\u5B9A\u3092\u81EA\u52D5\u306B\u884C\u3063\u3066\u304F\u308C\u308B\u3001\u3064\u307E\u308A Vue \u74B0\u5883\u4E0B\u306E\u3088\u3046\u306B\u624B\u52D5\u3067\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u8A2D\u5B9A\u3092\u751F\u6210\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u3002

\u305D\u3057\u3066\u305D\u306E\u30EB\u30FC\u30C8\u3092\u79FB\u52D5\u3059\u308B\u969B\u306F HTML \u306E

\`\`\`html
<a href="/about">ABOUT</a>
\`\`\`

\u3067\u306F\u306A\u304F

\`\`\`vue
<NuxtLink to="/about">ABOUT</NuxtLink>
\`\`\`

\u3068\u8A18\u8FF0\u3057\u3066\u30EA\u30F3\u30AF\u3092\u4F5C\u6210\u3059\u308B\u3002  
\u30EB\u30FC\u30C8\u5916\u3001\u4F8B\u3048\u3070\u5916\u90E8\u30B5\u30A4\u30C8\u306E\u30EA\u30F3\u30AF\u3092\u8CBC\u308B\u5834\u5408\u306F\u5F93\u6765\u306E\`<a>\`\u8981\u7D20\u3092\u4F7F\u3046\u3053\u3068\u306B\u306A\u308B\u3002
`,title:"NuxtLink",level:1,content:`# NuxtLink

\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067 Nav.vue \u3092\u4F5C\u6210\u3001index \u3068 about \u306E\u30EA\u30F3\u30AF\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u3002  
Nuxt \u3067\u306F\u30DA\u30FC\u30B8\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 Vue Router \u306B\u3088\u308B\u8A2D\u5B9A\u3092\u81EA\u52D5\u306B\u884C\u3063\u3066\u304F\u308C\u308B\u3001\u3064\u307E\u308A Vue \u74B0\u5883\u4E0B\u306E\u3088\u3046\u306B\u624B\u52D5\u3067\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u8A2D\u5B9A\u3092\u751F\u6210\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u3002

\u305D\u3057\u3066\u305D\u306E\u30EB\u30FC\u30C8\u3092\u79FB\u52D5\u3059\u308B\u969B\u306F HTML \u306E

\`\`\`html
<a href="/about">ABOUT</a>
\`\`\`

\u3067\u306F\u306A\u304F

\`\`\`vue
<NuxtLink to="/about">ABOUT</NuxtLink>
\`\`\`

\u3068\u8A18\u8FF0\u3057\u3066\u30EA\u30F3\u30AF\u3092\u4F5C\u6210\u3059\u308B\u3002  
\u30EB\u30FC\u30C8\u5916\u3001\u4F8B\u3048\u3070\u5916\u90E8\u30B5\u30A4\u30C8\u306E\u30EA\u30F3\u30AF\u3092\u8CBC\u308B\u5834\u5408\u306F\u5F93\u6765\u306E\`<a>\`\u8981\u7D20\u3092\u4F7F\u3046\u3053\u3068\u306B\u306A\u308B\u3002`,frontmatter:{},index:54,start:1792,end:1813,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:O4,meta:{slide:{raw:`
# layouts

\`layouts/default.vue\`\u3092\u4F5C\u6210\u3057\u3001\u5171\u901A\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3055\u305B\u308B\u3002  
pages \u3067\u89E3\u8AAC\u3057\u305F\u3088\u3046\u306B\u4F8B\u3048\u3070 app.vue \u306B\u5171\u901A\u30D8\u30C3\u30C0\u3092\u6301\u305F\u305B\u308B\u306E\u3067\u3042\u308C\u3070\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u66F8\u304D\u65B9\u3067\u4E8B\u8DB3\u308A\u308B\u304C\u3001\u30DA\u30FC\u30B8\u306B\u3088\u3063\u3066\u306F\u30D8\u30C3\u30C0\u304C\u4E0D\u8981\u306A\u3069\u3068\u3044\u3063\u305F\u3053\u3068\u304C\u51FA\u3066\u304F\u308B\u3002
\u305D\u306E\u969B\u3001\u30DA\u30FC\u30B8\u305D\u306E\u3082\u306E\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u8907\u6570\u7528\u610F\u3057\u3001\u5404\u30DA\u30FC\u30B8\u304C\u305D\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u9078\u3073\u5909\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002

\`app.vue\`\u306E\u4F8B

\`\`\`vue
<template>
  <header>\u5171\u901A\u30D8\u30C3\u30C0</header>
  <NuxtPage />
</template>
\`\`\`

\`layouts/default.vue\`\u306E\u4F8B

\`\`\`vue
<template>
  <div>
    <header>\u5171\u901A\u30D8\u30C3\u30C0</header>
    <slot />
  </div>
</template>
\`\`\`
`,title:"layouts",level:1,content:`# layouts

\`layouts/default.vue\`\u3092\u4F5C\u6210\u3057\u3001\u5171\u901A\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3055\u305B\u308B\u3002  
pages \u3067\u89E3\u8AAC\u3057\u305F\u3088\u3046\u306B\u4F8B\u3048\u3070 app.vue \u306B\u5171\u901A\u30D8\u30C3\u30C0\u3092\u6301\u305F\u305B\u308B\u306E\u3067\u3042\u308C\u3070\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u66F8\u304D\u65B9\u3067\u4E8B\u8DB3\u308A\u308B\u304C\u3001\u30DA\u30FC\u30B8\u306B\u3088\u3063\u3066\u306F\u30D8\u30C3\u30C0\u304C\u4E0D\u8981\u306A\u3069\u3068\u3044\u3063\u305F\u3053\u3068\u304C\u51FA\u3066\u304F\u308B\u3002
\u305D\u306E\u969B\u3001\u30DA\u30FC\u30B8\u305D\u306E\u3082\u306E\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u8907\u6570\u7528\u610F\u3057\u3001\u5404\u30DA\u30FC\u30B8\u304C\u305D\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u9078\u3073\u5909\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002

\`app.vue\`\u306E\u4F8B

\`\`\`vue
<template>
  <header>\u5171\u901A\u30D8\u30C3\u30C0</header>
  <NuxtPage />
</template>
\`\`\`

\`layouts/default.vue\`\u306E\u4F8B

\`\`\`vue
<template>
  <div>
    <header>\u5171\u901A\u30D8\u30C3\u30C0</header>
    <slot />
  </div>
</template>
\`\`\``,frontmatter:{},index:55,start:1814,end:1841,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:L4,meta:{slide:{raw:`
# Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA

\`server/api\`\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u3042\u308B\`users.js\`\u3092\u78BA\u8A8D\u3001\`components/userList.vue\`\u306B\u4EE5\u4E0B\u3092\u8A18\u8FF0\u3059\u308B\u3002

\`\`\`vue
<template>
  <div>
    <ul>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async setup() {
    const { data: users } = await useFetch("/api/users");
    return { users };
  },
};
<\/script>
\`\`\`
`,title:"Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA",level:1,content:`# Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA

\`server/api\`\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u3042\u308B\`users.js\`\u3092\u78BA\u8A8D\u3001\`components/userList.vue\`\u306B\u4EE5\u4E0B\u3092\u8A18\u8FF0\u3059\u308B\u3002

\`\`\`vue
<template>
  <div>
    <ul>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async setup() {
    const { data: users } = await useFetch("/api/users");
    return { users };
  },
};
<\/script>
\`\`\``,frontmatter:{},index:56,start:1842,end:1868,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:j4,meta:{slide:{raw:`
# Suspense

\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u3067\`async\`\u3092\u4F7F\u3063\u305F\u5834\u5408\u3001Promise \u304C\u89E3\u6C7A\u3059\u308B\u3068\u540C\u6642\u306B\u8868\u793A\u3059\u308B\u4ED5\u7D44\u307F\u3092\u5B66\u3076\u3002
\u975E\u540C\u671F\u3067\u51E6\u7406\u3055\u308C\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u8868\u793A\u304B\u3089\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u308B\u6A5F\u80FD\u3002  
\u307E\u305A\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\`SuspenseTest.vue\`\u3092\u4F5C\u6210\u3002

\`\`\`vue
<script>
export default {
  async setup() {
    const userList = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["\u592A\u90CE", "\u82B1\u5B50", "\u6B21\u90CE"]);
        }, 1000);
      });
    };
    const users = await userList();
    return { users };
  },
};
<\/script>
\`\`\`
`,title:"Suspense",level:1,content:`# Suspense

\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C8\u30C3\u30D7\u30EC\u30D9\u30EB\u3067\`async\`\u3092\u4F7F\u3063\u305F\u5834\u5408\u3001Promise \u304C\u89E3\u6C7A\u3059\u308B\u3068\u540C\u6642\u306B\u8868\u793A\u3059\u308B\u4ED5\u7D44\u307F\u3092\u5B66\u3076\u3002
\u975E\u540C\u671F\u3067\u51E6\u7406\u3055\u308C\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u8868\u793A\u304B\u3089\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u308B\u6A5F\u80FD\u3002  
\u307E\u305A\u306F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\`SuspenseTest.vue\`\u3092\u4F5C\u6210\u3002

\`\`\`vue
<script>
export default {
  async setup() {
    const userList = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["\u592A\u90CE", "\u82B1\u5B50", "\u6B21\u90CE"]);
        }, 1000);
      });
    };
    const users = await userList();
    return { users };
  },
};
<\/script>
\`\`\``,frontmatter:{},index:57,start:1869,end:1894,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:U4,meta:{slide:{raw:`
# Suspense

\`v-if\`\u3092\u4F7F\u308F\u305A\u3068\u3082\u30011 \u79D2\u7D4C\u3063\u3066\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u5B8C\u4E86\u5F8C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u308B

\`\`\`vue
<template>
  <div>
    <Suspense>
      <template #default>
        <SuspenseTest />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>
\`\`\`
`,title:"Suspense",level:1,content:`# Suspense

\`v-if\`\u3092\u4F7F\u308F\u305A\u3068\u3082\u30011 \u79D2\u7D4C\u3063\u3066\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u5B8C\u4E86\u5F8C\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u8868\u793A\u306B\u5207\u308A\u66FF\u3048\u308B

\`\`\`vue
<template>
  <div>
    <Suspense>
      <template #default>
        <SuspenseTest />
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>
\`\`\``,frontmatter:{},index:58,start:1895,end:1913,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:Y4,meta:{slide:{raw:`
# composables

\u30A2\u30D7\u30EA\u5168\u4F53\u5171\u901A\u306E\u30C7\u30FC\u30BF\u3092\u7BA1\u7406\u3059\u308B\u3002js \u30D5\u30A1\u30A4\u30EB\u3067\u306F\u3042\u308B\u304C\u3001\u4E2D\u8EAB\u306F vue \u306E\u8A18\u8FF0\u306B\u8FD1\u3044\u3053\u3068\u304C\u308F\u304B\u308B\u3002 \u3053\u3053\u3067\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u3002
\`composables/userCounter.js\`\u3092\u4F5C\u6210\u3059\u308B\u3002

\`\`\`js
import { ref, readonly } from "vue";
const count = ref(0);
export default () => {
  const increment = () => count.value++;

  return {
    count: readonly(count),
    increment,
  };
};
\`\`\`
`,title:"composables",level:1,content:`# composables

\u30A2\u30D7\u30EA\u5168\u4F53\u5171\u901A\u306E\u30C7\u30FC\u30BF\u3092\u7BA1\u7406\u3059\u308B\u3002js \u30D5\u30A1\u30A4\u30EB\u3067\u306F\u3042\u308B\u304C\u3001\u4E2D\u8EAB\u306F vue \u306E\u8A18\u8FF0\u306B\u8FD1\u3044\u3053\u3068\u304C\u308F\u304B\u308B\u3002 \u3053\u3053\u3067\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u3002
\`composables/userCounter.js\`\u3092\u4F5C\u6210\u3059\u308B\u3002

\`\`\`js
import { ref, readonly } from "vue";
const count = ref(0);
export default () => {
  const increment = () => count.value++;

  return {
    count: readonly(count),
    increment,
  };
};
\`\`\``,frontmatter:{},index:59,start:1914,end:1933,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:X4,meta:{slide:{raw:`
# composables

\`\`\`vue
<template>
  <div>
    <p>\u30AB\u30A6\u30F3\u30C8: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>

<script>
import useCounter from "~~/composables/useCounter";
export default {
  setup() {
    const counter = useCounter();
    const increment = () => {
      counter.increment();
    };
    return {
      counter,
      increment,
    };
  },
};
<\/script>
\`\`\`
`,title:"composables",level:1,content:`# composables

\`\`\`vue
<template>
  <div>
    <p>\u30AB\u30A6\u30F3\u30C8: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>

<script>
import useCounter from "~~/composables/useCounter";
export default {
  setup() {
    const counter = useCounter();
    const increment = () => {
      counter.increment();
    };
    return {
      counter,
      increment,
    };
  },
};
<\/script>
\`\`\``,frontmatter:{},index:60,start:1934,end:1962,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:l7,meta:{slide:{raw:`
# \u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9

Vue \u56FA\u6709\u306E\u8A18\u6CD5\u306B\u3064\u3044\u3066\u306E\u516C\u5F0F\u306A\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9

\u8AB2\u984C\u5236\u4F5C\u3092\u3059\u308B\u524D\u306B\u7406\u89E3\u3059\u308B

[\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9](https://v3.ja.vuejs.org/style-guide/)
`,title:"\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9",level:1,content:`# \u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9

Vue \u56FA\u6709\u306E\u8A18\u6CD5\u306B\u3064\u3044\u3066\u306E\u516C\u5F0F\u306A\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9

\u8AB2\u984C\u5236\u4F5C\u3092\u3059\u308B\u524D\u306B\u7406\u89E3\u3059\u308B

[\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9](https://v3.ja.vuejs.org/style-guide/)`,frontmatter:{},index:61,start:1963,end:1972,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:t7,meta:{slide:{raw:`
# \u81EA\u7531\u8AB2\u984C

Nuxt3 \u74B0\u5883\u3092\u4F7F\u3063\u3066\u30A2\u30D7\u30EA\u3092\u81EA\u7531\u306B\u3064\u304F\u3063\u3066\u307F\u3088\u3046\u3002
`,title:"\u81EA\u7531\u8AB2\u984C",level:1,content:`# \u81EA\u7531\u8AB2\u984C

Nuxt3 \u74B0\u5883\u3092\u4F7F\u3063\u3066\u30A2\u30D7\u30EA\u3092\u81EA\u7531\u306B\u3064\u304F\u3063\u3066\u307F\u3088\u3046\u3002`,frontmatter:{},index:62,start:1973,end:1978,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",component:gA,meta:{layout:"end"}}];const Vs=r7,a7=[{name:"play",path:"/",component:dA,children:[...Vs]},{name:"print",path:"/print",component:AA},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>io(()=>import("./Presenter.fa1297f4.js"),["assets/Presenter.fa1297f4.js","assets/Presenter.954a6bd7.css","assets/DrawingControls.3546dae3.js"]),beforeEnter:e=>{if(!Fl.remote||Fl.remote===e.query.password)return!0;if(Fl.remote&&e.query.password===void 0){const l=prompt("Enter password");if(Fl.remote===l)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],Be=s3({history:Bm("/vue-3-practices/"),routes:a7});function c7(e,l,{mode:o="replace"}={}){return w({get(){const t=Be.currentRoute.value.query[e];return t==null?l!=null?l:null:Array.isArray(t)?t.filter(Boolean):t},set(t){Ks(()=>{Be[D(o)]({query:Qs(gs({},Be.currentRoute.value.query),{[e]:t})})})}})}const M8=H(0);Ks(()=>{Be.afterEach(async()=>{await Ks(),M8.value+=1})});const Xe=w(()=>Be.currentRoute.value),ma=w(()=>Xe.value.query.print!==void 0),p7=w(()=>Xe.value.query.print==="clicks"),Ue=w(()=>Xe.value.query.embedded!==void 0),Re=w(()=>Xe.value.path.startsWith("/presenter")),No=w(()=>ma.value&&!p7.value),Fr=w(()=>Xe.value.query.password),i7=w(()=>!Re.value&&(!_s.remote||Fr.value===_s.remote)),up=c7("clicks","0"),P8=w(()=>Vs.length-1),y7=w(()=>Xe.value.path),zs=w(()=>parseInt(y7.value.split(/\//g).slice(-1)[0])||1);w(()=>dt(zs.value));const ue=w(()=>Vs.find(e=>e.path===`${zs.value}`));w(()=>{var e,l,o;return(o=(l=(e=ue.value)==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:o.id});w(()=>{var e,l;return(l=(e=ue.value)==null?void 0:e.meta)==null?void 0:l.layout});const Lt=w(()=>Vs.find(e=>e.path===`${Math.min(Vs.length,zs.value+1)}`)),u7=w(()=>{var e,l;return M8.value,((l=(e=ue.value)==null?void 0:e.meta)==null?void 0:l.__clicksElements)||[]}),Oe=w({get(){if(No.value)return 99999;let e=+(up.value||0);return isNaN(e)&&(e=0),e},set(e){up.value=e.toString()}}),Wn=w(()=>{var e,l,o;return+((o=(l=(e=ue.value)==null?void 0:e.meta)==null?void 0:l.clicks)!=null?o:u7.value.length)}),d7=w(()=>zs.value<Vs.length-1||Oe.value<Wn.value),f7=w(()=>zs.value>1||Oe.value>0),m7=w(()=>Vs.filter(e=>{var l,o;return(o=(l=e.meta)==null?void 0:l.slide)==null?void 0:o.title}).reduce((e,l)=>(Ba(e,l),e),[])),B7=w(()=>ha(m7.value,ue.value));w(()=>Aa(B7.value));function pl(){Wn.value<=Oe.value?sn():Oe.value+=1}async function il(){Oe.value<=0?await en():Oe.value-=1}function dt(e){return Re.value?`/presenter/${e}`:`/${e}`}function sn(){const e=Math.min(Vs.length,zs.value+1);return ro(e)}async function en(e=!0){const l=Math.max(1,zs.value-1);await ro(l),e&&Wn.value&&Be.replace({query:Qs(gs({},Xe.value.query),{clicks:Wn.value})})}function ro(e,l){return Be.push({path:dt(e),query:Qs(gs({},Xe.value.query),{clicks:l})})}function h7(e){const l=H(0),{direction:o,distanceX:t,distanceY:r}=qf(e,{onSwipeStart(a){a.pointerType==="touch"&&(Xo.value||(l.value=ur()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!l.value||Xo.value)return;const c=Math.abs(t.value),p=Math.abs(r.value);c/window.innerWidth>.3||c>100?o.value===Ke.LEFT?pl():il():(p/window.innerHeight>.4||p>200)&&(o.value===Ke.DOWN?en():sn())}})}async function br(){const{saveAs:e}=await io(()=>import("./FileSaver.min.477930e3.js").then(function(l){return l.F}),[]);e(qi(_s.download)?_s.download:_s.exportFilename?`${_s.exportFilename}.pdf`:"/vue-3-practices/slidev-exported.pdf",`${_s.title}.pdf`)}async function A7(e){var l,o;if(e==null){const t=(o=(l=ue.value)==null?void 0:l.meta)==null?void 0:o.slide;if(!(t!=null&&t.filepath))return!1;e=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ba(e,l,o=1){var r,a,c,p,i;const t=(a=(r=l.meta)==null?void 0:r.slide)==null?void 0:a.level;t&&t>o&&e.length>0?Ba(e[e.length-1].children,l,o+1):e.push({children:[],level:o,path:l.path,hideInToc:Boolean((c=l.meta)==null?void 0:c.hideInToc),title:(i=(p=l.meta)==null?void 0:p.slide)==null?void 0:i.title})}function ha(e,l,o=!1,t){return e.map(r=>{const a=Qs(gs({},r),{active:r.path===(l==null?void 0:l.path),hasActiveParent:o});return a.children.length>0&&(a.children=ha(a.children,l,a.active||a.hasActiveParent,a)),t&&(a.active||a.activeParent)&&(t.activeParent=!0),a})}function Aa(e,l=1){return e.filter(o=>!o.hideInToc).map(o=>Qs(gs({},o),{children:Aa(o.children,l+1)}))}function v7(){const e=_s.titleTemplate.replace("%s",_s.title||"Slidev");vd({title:e}),wd(`${e} - shared`),Od(`${e} - drawings`);function l(){Re.value&&(vc("page",+zs.value),vc("clicks",Oe.value))}Be.afterEach(l),ys(Oe,l),kd(o=>{(+o.page!=+zs.value||Oe.value!==o.clicks)&&Be.replace({path:dt(o.page),query:Qs(gs({},Be.currentRoute.value.query),{clicks:o.clicks||0})})})}const D7=bs({__name:"App",setup(e){return $(M),v7(),(l,o)=>{const t=Ln("RouterView"),r=Ln("StarportCarrier");return v(),U(Cs,null,[q(t),q(r)],64)}}});function Nt(e){return e!==null&&typeof e=="object"}function xr(e,l,o=".",t){if(!Nt(l))return xr(e,{},o,t);const r=Object.assign({},l);for(const a in e){if(a==="__proto__"||a==="constructor")continue;const c=e[a];c!=null&&(t&&t(r,a,c,o)||(Array.isArray(c)&&Array.isArray(r[a])?r[a]=c.concat(r[a]):Nt(c)&&Nt(r[a])?r[a]=xr(c,r[a],(o?`${o}.`:"")+a.toString(),t):r[a]=c))}return r}function g7(e){return(...l)=>l.reduce((o,t)=>xr(o,t,"",e),{})}const C7=g7(),T8=1/60*1e3,E7=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),L8=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(E7()),T8);function _7(e){let l=[],o=[],t=0,r=!1,a=!1;const c=new WeakSet,p={schedule:(i,y=!1,u=!1)=>{const f=u&&r,d=f?l:o;return y&&c.add(i),d.indexOf(i)===-1&&(d.push(i),f&&r&&(t=l.length)),i},cancel:i=>{const y=o.indexOf(i);y!==-1&&o.splice(y,1),c.delete(i)},process:i=>{if(r){a=!0;return}if(r=!0,[l,o]=[o,l],o.length=0,t=l.length,t)for(let y=0;y<t;y++){const u=l[y];u(i),c.has(u)&&(p.schedule(u),e())}r=!1,a&&(a=!1,p.process(i))}};return p}const F7=40;let wr=!0,ln=!1,kr=!1;const so={delta:0,timestamp:0},an=["read","update","preRender","render","postRender"],ft=an.reduce((e,l)=>(e[l]=_7(()=>ln=!0),e),{}),dp=an.reduce((e,l)=>{const o=ft[l];return e[l]=(t,r=!1,a=!1)=>(ln||x7(),o.schedule(t,r,a)),e},{});an.reduce((e,l)=>(e[l]=ft[l].cancel,e),{});an.reduce((e,l)=>(e[l]=()=>ft[l].process(so),e),{});const b7=e=>ft[e].process(so),N8=e=>{ln=!1,so.delta=wr?T8:Math.max(Math.min(e-so.timestamp,F7),1),so.timestamp=e,kr=!0,an.forEach(b7),kr=!1,ln&&(wr=!1,L8(N8))},x7=()=>{ln=!0,wr=!0,kr||L8(N8)},w7=()=>so;function R8(e,l){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o}var k7=function(){},fp=function(){};const $r=(e,l,o)=>Math.min(Math.max(o,e),l),Rt=.001,$7=.01,mp=10,S7=.05,O7=1;function M7({duration:e=800,bounce:l=.25,velocity:o=0,mass:t=1}){let r,a;k7(e<=mp*1e3);let c=1-l;c=$r(S7,O7,c),e=$r($7,mp,e/1e3),c<1?(r=y=>{const u=y*c,f=u*e,d=u-o,m=Sr(y,c),h=Math.exp(-f);return Rt-d/m*h},a=y=>{const f=y*c*e,d=f*o+o,m=Math.pow(c,2)*Math.pow(y,2)*e,h=Math.exp(-f),C=Sr(Math.pow(y,2),c);return(-r(y)+Rt>0?-1:1)*((d-m)*h)/C}):(r=y=>{const u=Math.exp(-y*e),f=(y-o)*e+1;return-Rt+u*f},a=y=>{const u=Math.exp(-y*e),f=(o-y)*(e*e);return u*f});const p=5/e,i=T7(r,a,p);if(e=e*1e3,isNaN(i))return{stiffness:100,damping:10,duration:e};{const y=Math.pow(i,2)*t;return{stiffness:y,damping:c*2*Math.sqrt(t*y),duration:e}}}const P7=12;function T7(e,l,o){let t=o;for(let r=1;r<P7;r++)t=t-e(t)/l(t);return t}function Sr(e,l){return e*Math.sqrt(1-l*l)}const L7=["duration","bounce"],N7=["stiffness","damping","mass"];function Bp(e,l){return l.some(o=>e[o]!==void 0)}function R7(e){let l=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Bp(e,N7)&&Bp(e,L7)){const o=M7(e);l=Object.assign(Object.assign(Object.assign({},l),o),{velocity:0,mass:1}),l.isResolvedFromDuration=!0}return l}function va(e){var{from:l=0,to:o=1,restSpeed:t=2,restDelta:r}=e,a=R8(e,["from","to","restSpeed","restDelta"]);const c={done:!1,value:l};let{stiffness:p,damping:i,mass:y,velocity:u,duration:f,isResolvedFromDuration:d}=R7(a),m=hp,h=hp;function C(){const g=u?-(u/1e3):0,b=o-l,_=i/(2*Math.sqrt(p*y)),F=Math.sqrt(p/y)/1e3;if(r===void 0&&(r=Math.min(Math.abs(o-l)/100,.4)),_<1){const x=Sr(F,_);m=j=>{const T=Math.exp(-_*F*j);return o-T*((g+_*F*b)/x*Math.sin(x*j)+b*Math.cos(x*j))},h=j=>{const T=Math.exp(-_*F*j);return _*F*T*(Math.sin(x*j)*(g+_*F*b)/x+b*Math.cos(x*j))-T*(Math.cos(x*j)*(g+_*F*b)-x*b*Math.sin(x*j))}}else if(_===1)m=x=>o-Math.exp(-F*x)*(b+(g+F*b)*x);else{const x=F*Math.sqrt(_*_-1);m=j=>{const T=Math.exp(-_*F*j),K=Math.min(x*j,300);return o-T*((g+_*F*b)*Math.sinh(K)+x*b*Math.cosh(K))/x}}}return C(),{next:g=>{const b=m(g);if(d)c.done=g>=f;else{const _=h(g)*1e3,F=Math.abs(_)<=t,x=Math.abs(o-b)<=r;c.done=F&&x}return c.value=c.done?o:b,c},flipTarget:()=>{u=-u,[l,o]=[o,l],C()}}}va.needsInterpolation=(e,l)=>typeof e=="string"||typeof l=="string";const hp=e=>0,I8=(e,l,o)=>{const t=l-e;return t===0?1:(o-e)/t},Da=(e,l,o)=>-o*e+o*l+e,j8=(e,l)=>o=>Math.max(Math.min(o,l),e),Ro=e=>e%1?Number(e.toFixed(5)):e,qn=/(-)?([\d]*\.?[\d])+/g,Or=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,I7=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function cn(e){return typeof e=="string"}const mt={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},V8=Object.assign(Object.assign({},mt),{transform:j8(0,1)});Object.assign(Object.assign({},mt),{default:1});const j7=e=>({test:l=>cn(l)&&l.endsWith(e)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${e}`}),Io=j7("%");Object.assign(Object.assign({},Io),{parse:e=>Io.parse(e)/100,transform:e=>Io.transform(e*100)});const ga=(e,l)=>o=>Boolean(cn(o)&&I7.test(o)&&o.startsWith(e)||l&&Object.prototype.hasOwnProperty.call(o,l)),z8=(e,l,o)=>t=>{if(!cn(t))return t;const[r,a,c,p]=t.match(qn);return{[e]:parseFloat(r),[l]:parseFloat(a),[o]:parseFloat(c),alpha:p!==void 0?parseFloat(p):1}},xl={test:ga("hsl","hue"),parse:z8("hue","saturation","lightness"),transform:({hue:e,saturation:l,lightness:o,alpha:t=1})=>"hsla("+Math.round(e)+", "+Io.transform(Ro(l))+", "+Io.transform(Ro(o))+", "+Ro(V8.transform(t))+")"},V7=j8(0,255),It=Object.assign(Object.assign({},mt),{transform:e=>Math.round(V7(e))}),nl={test:ga("rgb","red"),parse:z8("red","green","blue"),transform:({red:e,green:l,blue:o,alpha:t=1})=>"rgba("+It.transform(e)+", "+It.transform(l)+", "+It.transform(o)+", "+Ro(V8.transform(t))+")"};function z7(e){let l="",o="",t="",r="";return e.length>5?(l=e.substr(1,2),o=e.substr(3,2),t=e.substr(5,2),r=e.substr(7,2)):(l=e.substr(1,1),o=e.substr(2,1),t=e.substr(3,1),r=e.substr(4,1),l+=l,o+=o,t+=t,r+=r),{red:parseInt(l,16),green:parseInt(o,16),blue:parseInt(t,16),alpha:r?parseInt(r,16)/255:1}}const Mr={test:ga("#"),parse:z7,transform:nl.transform},Bt={test:e=>nl.test(e)||Mr.test(e)||xl.test(e),parse:e=>nl.test(e)?nl.parse(e):xl.test(e)?xl.parse(e):Mr.parse(e),transform:e=>cn(e)?e:e.hasOwnProperty("red")?nl.transform(e):xl.transform(e)},H8="${c}",U8="${n}";function H7(e){var l,o,t,r;return isNaN(e)&&cn(e)&&((o=(l=e.match(qn))===null||l===void 0?void 0:l.length)!==null&&o!==void 0?o:0)+((r=(t=e.match(Or))===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:0)>0}function W8(e){typeof e=="number"&&(e=`${e}`);const l=[];let o=0;const t=e.match(Or);t&&(o=t.length,e=e.replace(Or,H8),l.push(...t.map(Bt.parse)));const r=e.match(qn);return r&&(e=e.replace(qn,U8),l.push(...r.map(mt.parse))),{values:l,numColors:o,tokenised:e}}function q8(e){return W8(e).values}function K8(e){const{values:l,numColors:o,tokenised:t}=W8(e),r=l.length;return a=>{let c=t;for(let p=0;p<r;p++)c=c.replace(p<o?H8:U8,p<o?Bt.transform(a[p]):Ro(a[p]));return c}}const U7=e=>typeof e=="number"?0:e;function W7(e){const l=q8(e);return K8(e)(l.map(U7))}const Y8={test:H7,parse:q8,createTransformer:K8,getAnimatableNone:W7};function jt(e,l,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(l-e)*6*o:o<1/2?l:o<2/3?e+(l-e)*(2/3-o)*6:e}function Ap({hue:e,saturation:l,lightness:o,alpha:t}){e/=360,l/=100,o/=100;let r=0,a=0,c=0;if(!l)r=a=c=o;else{const p=o<.5?o*(1+l):o+l-o*l,i=2*o-p;r=jt(i,p,e+1/3),a=jt(i,p,e),c=jt(i,p,e-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:t}}const q7=(e,l,o)=>{const t=e*e,r=l*l;return Math.sqrt(Math.max(0,o*(r-t)+t))},K7=[Mr,nl,xl],vp=e=>K7.find(l=>l.test(e)),Z8=(e,l)=>{let o=vp(e),t=vp(l),r=o.parse(e),a=t.parse(l);o===xl&&(r=Ap(r),o=nl),t===xl&&(a=Ap(a),t=nl);const c=Object.assign({},r);return p=>{for(const i in c)i!=="alpha"&&(c[i]=q7(r[i],a[i],p));return c.alpha=Da(r.alpha,a.alpha,p),o.transform(c)}},Y7=e=>typeof e=="number",Z7=(e,l)=>o=>l(e(o)),J8=(...e)=>e.reduce(Z7);function X8(e,l){return Y7(e)?o=>Da(e,l,o):Bt.test(e)?Z8(e,l):Q8(e,l)}const G8=(e,l)=>{const o=[...e],t=o.length,r=e.map((a,c)=>X8(a,l[c]));return a=>{for(let c=0;c<t;c++)o[c]=r[c](a);return o}},J7=(e,l)=>{const o=Object.assign(Object.assign({},e),l),t={};for(const r in o)e[r]!==void 0&&l[r]!==void 0&&(t[r]=X8(e[r],l[r]));return r=>{for(const a in t)o[a]=t[a](r);return o}};function Dp(e){const l=Y8.parse(e),o=l.length;let t=0,r=0,a=0;for(let c=0;c<o;c++)t||typeof l[c]=="number"?t++:l[c].hue!==void 0?a++:r++;return{parsed:l,numNumbers:t,numRGB:r,numHSL:a}}const Q8=(e,l)=>{const o=Y8.createTransformer(l),t=Dp(e),r=Dp(l);return t.numHSL===r.numHSL&&t.numRGB===r.numRGB&&t.numNumbers>=r.numNumbers?J8(G8(t.parsed,r.parsed),o):c=>`${c>0?l:e}`},X7=(e,l)=>o=>Da(e,l,o);function G7(e){if(typeof e=="number")return X7;if(typeof e=="string")return Bt.test(e)?Z8:Q8;if(Array.isArray(e))return G8;if(typeof e=="object")return J7}function Q7(e,l,o){const t=[],r=o||G7(e[0]),a=e.length-1;for(let c=0;c<a;c++){let p=r(e[c],e[c+1]);if(l){const i=Array.isArray(l)?l[c]:l;p=J8(i,p)}t.push(p)}return t}function sE([e,l],[o]){return t=>o(I8(e,l,t))}function eE(e,l){const o=e.length,t=o-1;return r=>{let a=0,c=!1;if(r<=e[0]?c=!0:r>=e[t]&&(a=t-1,c=!0),!c){let i=1;for(;i<o&&!(e[i]>r||i===t);i++);a=i-1}const p=I8(e[a],e[a+1],r);return l[a](p)}}function sy(e,l,{clamp:o=!0,ease:t,mixer:r}={}){const a=e.length;fp(a===l.length),fp(!t||!Array.isArray(t)||t.length===a-1),e[0]>e[a-1]&&(e=[].concat(e),l=[].concat(l),e.reverse(),l.reverse());const c=Q7(l,t,r),p=a===2?sE(e,c):eE(e,c);return o?i=>p($r(e[0],e[a-1],i)):p}const ht=e=>l=>1-e(1-l),Ca=e=>l=>l<=.5?e(2*l)/2:(2-e(2*(1-l)))/2,lE=e=>l=>Math.pow(l,e),ey=e=>l=>l*l*((e+1)*l-e),oE=e=>{const l=ey(e);return o=>(o*=2)<1?.5*l(o):.5*(2-Math.pow(2,-10*(o-1)))},ly=1.525,nE=4/11,tE=8/11,rE=9/10,oy=e=>e,Ea=lE(2),aE=ht(Ea),ny=Ca(Ea),ty=e=>1-Math.sin(Math.acos(e)),ry=ht(ty),cE=Ca(ry),_a=ey(ly),pE=ht(_a),iE=Ca(_a),yE=oE(ly),uE=4356/361,dE=35442/1805,fE=16061/1805,Kn=e=>{if(e===1||e===0)return e;const l=e*e;return e<nE?7.5625*l:e<tE?9.075*l-9.9*e+3.4:e<rE?uE*l-dE*e+fE:10.8*e*e-20.52*e+10.72},mE=ht(Kn),BE=e=>e<.5?.5*(1-Kn(1-e*2)):.5*Kn(e*2-1)+.5;function hE(e,l){return e.map(()=>l||ny).splice(0,e.length-1)}function AE(e){const l=e.length;return e.map((o,t)=>t!==0?t/(l-1):0)}function vE(e,l){return e.map(o=>o*l)}function Sn({from:e=0,to:l=1,ease:o,offset:t,duration:r=300}){const a={done:!1,value:e},c=Array.isArray(l)?l:[e,l],p=vE(t&&t.length===c.length?t:AE(c),r);function i(){return sy(p,c,{ease:Array.isArray(o)?o:hE(c,o)})}let y=i();return{next:u=>(a.value=y(u),a.done=u>=r,a),flipTarget:()=>{c.reverse(),y=i()}}}function DE({velocity:e=0,from:l=0,power:o=.8,timeConstant:t=350,restDelta:r=.5,modifyTarget:a}){const c={done:!1,value:l};let p=o*e;const i=l+p,y=a===void 0?i:a(i);return y!==i&&(p=y-l),{next:u=>{const f=-p*Math.exp(-u/t);return c.done=!(f>r||f<-r),c.value=c.done?y:y+f,c},flipTarget:()=>{}}}const gp={keyframes:Sn,spring:va,decay:DE};function gE(e){if(Array.isArray(e.to))return Sn;if(gp[e.type])return gp[e.type];const l=new Set(Object.keys(e));return l.has("ease")||l.has("duration")&&!l.has("dampingRatio")?Sn:l.has("dampingRatio")||l.has("stiffness")||l.has("mass")||l.has("damping")||l.has("restSpeed")||l.has("restDelta")?va:Sn}const ay=1/60*1e3,CE=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),cy=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(CE()),ay);function EE(e){let l=[],o=[],t=0,r=!1,a=!1;const c=new WeakSet,p={schedule:(i,y=!1,u=!1)=>{const f=u&&r,d=f?l:o;return y&&c.add(i),d.indexOf(i)===-1&&(d.push(i),f&&r&&(t=l.length)),i},cancel:i=>{const y=o.indexOf(i);y!==-1&&o.splice(y,1),c.delete(i)},process:i=>{if(r){a=!0;return}if(r=!0,[l,o]=[o,l],o.length=0,t=l.length,t)for(let y=0;y<t;y++){const u=l[y];u(i),c.has(u)&&(p.schedule(u),e())}r=!1,a&&(a=!1,p.process(i))}};return p}const _E=40;let Pr=!0,on=!1,Tr=!1;const eo={delta:0,timestamp:0},pn=["read","update","preRender","render","postRender"],At=pn.reduce((e,l)=>(e[l]=EE(()=>on=!0),e),{}),FE=pn.reduce((e,l)=>{const o=At[l];return e[l]=(t,r=!1,a=!1)=>(on||wE(),o.schedule(t,r,a)),e},{}),bE=pn.reduce((e,l)=>(e[l]=At[l].cancel,e),{});pn.reduce((e,l)=>(e[l]=()=>At[l].process(eo),e),{});const xE=e=>At[e].process(eo),py=e=>{on=!1,eo.delta=Pr?ay:Math.max(Math.min(e-eo.timestamp,_E),1),eo.timestamp=e,Tr=!0,pn.forEach(xE),Tr=!1,on&&(Pr=!1,cy(py))},wE=()=>{on=!0,Pr=!0,Tr||cy(py)},kE=()=>eo;function iy(e,l,o=0){return e-l-o}function $E(e,l,o=0,t=!0){return t?iy(l+-e,l,o):l-(e-l)+o}function SE(e,l,o,t){return t?e>=l+o:e<=-o}const OE=e=>{const l=({delta:o})=>e(o);return{start:()=>FE.update(l,!0),stop:()=>bE.update(l)}};function yy(e){var l,o,{from:t,autoplay:r=!0,driver:a=OE,elapsed:c=0,repeat:p=0,repeatType:i="loop",repeatDelay:y=0,onPlay:u,onStop:f,onComplete:d,onRepeat:m,onUpdate:h}=e,C=R8(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:g}=C,b,_=0,F=C.duration,x,j=!1,T=!0,K;const as=gE(C);!((o=(l=as).needsInterpolation)===null||o===void 0)&&o.call(l,t,g)&&(K=sy([0,100],[t,g],{clamp:!1}),t=0,g=100);const us=as(Object.assign(Object.assign({},C),{from:t,to:g}));function ms(){_++,i==="reverse"?(T=_%2===0,c=$E(c,F,y,T)):(c=iy(c,F,y),i==="mirror"&&us.flipTarget()),j=!1,m&&m()}function As(){b.stop(),d&&d()}function Ts(Ys){if(T||(Ys=-Ys),c+=Ys,!j){const xs=us.next(Math.max(0,c));x=xs.value,K&&(x=K(x)),j=T?xs.done:c<=0}h==null||h(x),j&&(_===0&&(F!=null||(F=c)),_<p?SE(c,F,y,T)&&ms():As())}function Is(){u==null||u(),b=a(Ts),b.start()}return r&&Is(),{stop:()=>{f==null||f(),b.stop()}}}function uy(e,l){return l?e*(1e3/l):0}function ME({from:e=0,velocity:l=0,min:o,max:t,power:r=.8,timeConstant:a=750,bounceStiffness:c=500,bounceDamping:p=10,restDelta:i=1,modifyTarget:y,driver:u,onUpdate:f,onComplete:d,onStop:m}){let h;function C(F){return o!==void 0&&F<o||t!==void 0&&F>t}function g(F){return o===void 0?t:t===void 0||Math.abs(o-F)<Math.abs(t-F)?o:t}function b(F){h==null||h.stop(),h=yy(Object.assign(Object.assign({},F),{driver:u,onUpdate:x=>{var j;f==null||f(x),(j=F.onUpdate)===null||j===void 0||j.call(F,x)},onComplete:d,onStop:m}))}function _(F){b(Object.assign({type:"spring",stiffness:c,damping:p,restDelta:i},F))}if(C(e))_({from:e,velocity:l,to:g(e)});else{let F=r*l+e;typeof y!="undefined"&&(F=y(F));const x=g(F),j=x===o?-1:1;let T,K;const as=us=>{T=K,K=us,l=uy(us-T,kE().delta),(j===1&&us>x||j===-1&&us<x)&&_({from:us,to:x,velocity:l})};b({type:"decay",from:e,velocity:l,timeConstant:a,power:r,restDelta:i,modifyTarget:y,onUpdate:C(F)?as:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const dy=(e,l)=>1-3*l+3*e,fy=(e,l)=>3*l-6*e,my=e=>3*e,Yn=(e,l,o)=>((dy(l,o)*e+fy(l,o))*e+my(l))*e,By=(e,l,o)=>3*dy(l,o)*e*e+2*fy(l,o)*e+my(l),PE=1e-7,TE=10;function LE(e,l,o,t,r){let a,c,p=0;do c=l+(o-l)/2,a=Yn(c,t,r)-e,a>0?o=c:l=c;while(Math.abs(a)>PE&&++p<TE);return c}const NE=8,RE=.001;function IE(e,l,o,t){for(let r=0;r<NE;++r){const a=By(l,o,t);if(a===0)return l;l-=(Yn(l,o,t)-e)/a}return l}const On=11,Cn=1/(On-1);function jE(e,l,o,t){if(e===l&&o===t)return oy;const r=new Float32Array(On);for(let c=0;c<On;++c)r[c]=Yn(c*Cn,e,o);function a(c){let p=0,i=1;const y=On-1;for(;i!==y&&r[i]<=c;++i)p+=Cn;--i;const u=(c-r[i])/(r[i+1]-r[i]),f=p+u*Cn,d=By(f,e,o);return d>=RE?IE(c,f,e,o):d===0?f:LE(c,p,p+Cn,e,o)}return c=>c===0||c===1?c:Yn(a(c),l,t)}const hy=(e,l)=>o=>Math.max(Math.min(o,l),e),jo=e=>e%1?Number(e.toFixed(5)):e,nn=/(-)?([\d]*\.?[\d])+/g,Lr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,VE=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function yn(e){return typeof e=="string"}const un={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Vo=Object.assign(Object.assign({},un),{transform:hy(0,1)}),En=Object.assign(Object.assign({},un),{default:1}),Fa=e=>({test:l=>yn(l)&&l.endsWith(e)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${e}`}),hl=Fa("deg"),zo=Fa("%"),cs=Fa("px"),Cp=Object.assign(Object.assign({},zo),{parse:e=>zo.parse(e)/100,transform:e=>zo.transform(e*100)}),ba=(e,l)=>o=>Boolean(yn(o)&&VE.test(o)&&o.startsWith(e)||l&&Object.prototype.hasOwnProperty.call(o,l)),Ay=(e,l,o)=>t=>{if(!yn(t))return t;const[r,a,c,p]=t.match(nn);return{[e]:parseFloat(r),[l]:parseFloat(a),[o]:parseFloat(c),alpha:p!==void 0?parseFloat(p):1}},_n={test:ba("hsl","hue"),parse:Ay("hue","saturation","lightness"),transform:({hue:e,saturation:l,lightness:o,alpha:t=1})=>"hsla("+Math.round(e)+", "+zo.transform(jo(l))+", "+zo.transform(jo(o))+", "+jo(Vo.transform(t))+")"},zE=hy(0,255),Vt=Object.assign(Object.assign({},un),{transform:e=>Math.round(zE(e))}),xo={test:ba("rgb","red"),parse:Ay("red","green","blue"),transform:({red:e,green:l,blue:o,alpha:t=1})=>"rgba("+Vt.transform(e)+", "+Vt.transform(l)+", "+Vt.transform(o)+", "+jo(Vo.transform(t))+")"};function HE(e){let l="",o="",t="",r="";return e.length>5?(l=e.substr(1,2),o=e.substr(3,2),t=e.substr(5,2),r=e.substr(7,2)):(l=e.substr(1,1),o=e.substr(2,1),t=e.substr(3,1),r=e.substr(4,1),l+=l,o+=o,t+=t,r+=r),{red:parseInt(l,16),green:parseInt(o,16),blue:parseInt(t,16),alpha:r?parseInt(r,16)/255:1}}const Ep={test:ba("#"),parse:HE,transform:xo.transform},De={test:e=>xo.test(e)||Ep.test(e)||_n.test(e),parse:e=>xo.test(e)?xo.parse(e):_n.test(e)?_n.parse(e):Ep.parse(e),transform:e=>yn(e)?e:e.hasOwnProperty("red")?xo.transform(e):_n.transform(e)},vy="${c}",Dy="${n}";function UE(e){var l,o,t,r;return isNaN(e)&&yn(e)&&((o=(l=e.match(nn))===null||l===void 0?void 0:l.length)!==null&&o!==void 0?o:0)+((r=(t=e.match(Lr))===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:0)>0}function gy(e){typeof e=="number"&&(e=`${e}`);const l=[];let o=0;const t=e.match(Lr);t&&(o=t.length,e=e.replace(Lr,vy),l.push(...t.map(De.parse)));const r=e.match(nn);return r&&(e=e.replace(nn,Dy),l.push(...r.map(un.parse))),{values:l,numColors:o,tokenised:e}}function Cy(e){return gy(e).values}function Ey(e){const{values:l,numColors:o,tokenised:t}=gy(e),r=l.length;return a=>{let c=t;for(let p=0;p<r;p++)c=c.replace(p<o?vy:Dy,p<o?De.transform(a[p]):jo(a[p]));return c}}const WE=e=>typeof e=="number"?0:e;function qE(e){const l=Cy(e);return Ey(e)(l.map(WE))}const xa={test:UE,parse:Cy,createTransformer:Ey,getAnimatableNone:qE},KE=new Set(["brightness","contrast","saturate","opacity"]);function YE(e){let[l,o]=e.slice(0,-1).split("(");if(l==="drop-shadow")return e;const[t]=o.match(nn)||[];if(!t)return e;const r=o.replace(t,"");let a=KE.has(l)?1:0;return t!==o&&(a*=100),l+"("+a+r+")"}const ZE=/([a-z-]*)\(.*?\)/g,Nr=Object.assign(Object.assign({},xa),{getAnimatableNone:e=>{const l=e.match(ZE);return l?l.map(YE).join(" "):e}}),zt={};class JE{constructor(){this.subscriptions=new Set}add(l){return this.subscriptions.add(l),()=>this.subscriptions.delete(l)}notify(l,o,t){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(l,o,t)}clear(){this.subscriptions.clear()}}const _p=e=>!isNaN(parseFloat(e));class XE{constructor(l){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new JE,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:t,timestamp:r}=w7();this.lastUpdated!==r&&(this.timeDelta=t,this.lastUpdated=r),dp.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>dp.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=_p(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=l,this.canTrackVelocity=_p(this.current)}onChange(l){return this.updateSubscribers.add(l)}clearListeners(){this.updateSubscribers.clear()}set(l){this.updateAndNotify(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?uy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(l){return this.stop(),new Promise(o=>{const{stop:t}=l(o);this.stopAnimation=t}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function GE(e){return new XE(e)}const{isArray:QE}=Array;function s_(){const e=H({}),l=t=>{const r=a=>{!e.value[a]||(e.value[a].stop(),e.value[a].destroy(),Ld(e.value,a))};t?QE(t)?t.forEach(r):r(t):Object.keys(e.value).forEach(r)},o=(t,r,a)=>{if(e.value[t])return e.value[t];const c=GE(r);return c.onChange(p=>{re(a,t,p)}),re(e.value,t,c),c};return ta(l),{motionValues:e,get:o,stop:l}}const e_=e=>Array.isArray(e),Al=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ht=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),l_=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ut=()=>({type:"keyframes",ease:"linear",duration:300}),o_=e=>({type:"keyframes",duration:800,values:e}),Fp={default:l_,x:Al,y:Al,z:Al,rotate:Al,rotateX:Al,rotateY:Al,rotateZ:Al,scaleX:Ht,scaleY:Ht,scale:Ht,backgroundColor:Ut,color:Ut,opacity:Ut},_y=(e,l)=>{let o;return e_(l)?o=o_:o=Fp[e]||Fp.default,gs({to:l},o(l))},bp=Qs(gs({},un),{transform:Math.round}),Fy={color:De,backgroundColor:De,outlineColor:De,fill:De,stroke:De,borderColor:De,borderTopColor:De,borderRightColor:De,borderBottomColor:De,borderLeftColor:De,borderWidth:cs,borderTopWidth:cs,borderRightWidth:cs,borderBottomWidth:cs,borderLeftWidth:cs,borderRadius:cs,radius:cs,borderTopLeftRadius:cs,borderTopRightRadius:cs,borderBottomRightRadius:cs,borderBottomLeftRadius:cs,width:cs,maxWidth:cs,height:cs,maxHeight:cs,size:cs,top:cs,right:cs,bottom:cs,left:cs,padding:cs,paddingTop:cs,paddingRight:cs,paddingBottom:cs,paddingLeft:cs,margin:cs,marginTop:cs,marginRight:cs,marginBottom:cs,marginLeft:cs,rotate:hl,rotateX:hl,rotateY:hl,rotateZ:hl,scale:En,scaleX:En,scaleY:En,scaleZ:En,skew:hl,skewX:hl,skewY:hl,distance:cs,translateX:cs,translateY:cs,translateZ:cs,x:cs,y:cs,z:cs,perspective:cs,transformPerspective:cs,opacity:Vo,originX:Cp,originY:Cp,originZ:cs,zIndex:bp,filter:Nr,WebkitFilter:Nr,fillOpacity:Vo,strokeOpacity:Vo,numOctaves:bp},wa=e=>Fy[e],by=(e,l)=>l&&typeof e=="number"&&l.transform?l.transform(e):e;function n_(e,l){let o=wa(e);return o!==Nr&&(o=xa),o.getAnimatableNone?o.getAnimatableNone(l):void 0}const t_={linear:oy,easeIn:Ea,easeInOut:ny,easeOut:aE,circIn:ty,circInOut:cE,circOut:ry,backIn:_a,backInOut:iE,backOut:pE,anticipate:yE,bounceIn:mE,bounceInOut:BE,bounceOut:Kn},xp=e=>{if(Array.isArray(e)){const[l,o,t,r]=e;return jE(l,o,t,r)}else if(typeof e=="string")return t_[e];return e},r_=e=>Array.isArray(e)&&typeof e[0]!="number",wp=(e,l)=>e==="zIndex"?!1:!!(typeof l=="number"||Array.isArray(l)||typeof l=="string"&&xa.test(l)&&!l.startsWith("url("));function a_(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function c_(r){var a=r,{ease:e,times:l,delay:o}=a,t=vt(a,["ease","times","delay"]);const c=gs({},t);return l&&(c.offset=l),e&&(c.ease=r_(e)?e.map(xp):xp(e)),o&&(c.elapsed=-o),c}function p_(e,l,o){return Array.isArray(l.to)&&(e.duration||(e.duration=800)),a_(l),i_(e)||(e=gs(gs({},e),_y(o,l.to))),gs(gs({},l),c_(e))}function i_(c){var p=c,{delay:e,repeat:l,repeatType:o,repeatDelay:t,from:r}=p,a=vt(p,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(a).length}function y_(e,l){return e[l]||e.default||e}function u_(e,l,o,t,r){const a=y_(t,e);let c=a.from===null||a.from===void 0?l.get():a.from;const p=wp(e,o);c==="none"&&p&&typeof o=="string"&&(c=n_(e,o));const i=wp(e,c);function y(f){const d={from:c,to:o,velocity:t.velocity?t.velocity:l.getVelocity(),onUpdate:m=>l.set(m)};return a.type==="inertia"||a.type==="decay"?ME(gs(gs({},d),a)):yy(Qs(gs({},p_(a,d,e)),{onUpdate:m=>{d.onUpdate(m),a.onUpdate&&a.onUpdate(m)},onComplete:()=>{t.onComplete&&t.onComplete(),r&&r(),f&&f()}}))}function u(f){return l.set(o),t.onComplete&&t.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!i||!p||a.type===!1?u:y}function d_(){const{motionValues:e,stop:l,get:o}=s_();return{motionValues:e,stop:l,push:(r,a,c,p={},i)=>{const y=c[r],u=o(r,y,c);if(p&&p.immediate){u.set(a);return}const f=u_(r,u,a,p,i);u.start(f)}}}function f_(e,l={},{motionValues:o,push:t,stop:r}=d_()){const a=D(l),c=H(!1),p=ys(o,d=>{c.value=Object.values(d).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0}),i=d=>{if(!a||!a[d])throw new Error(`The variant ${d} does not exist.`);return a[d]},y=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([m,h])=>{if(m!=="transition")return new Promise(C=>{t(m,h,e,d.transition||_y(m,d[m]),C)})}).filter(Boolean)));return{isAnimating:c,apply:y,set:d=>{const m=jn(d)?d:i(d);Object.entries(m).forEach(([h,C])=>{h!=="transition"&&t(h,C,e,{immediate:!0})})},stopTransitions:()=>{p(),r()},leave:async d=>{let m;if(a&&(a.leave&&(m=a.leave),!a.leave&&a.initial&&(m=a.initial)),!m){d();return}await y(m),d()}}}const ka=typeof window!="undefined",m_=()=>ka&&window.onpointerdown===null,B_=()=>ka&&window.ontouchstart===null,h_=()=>ka&&window.onmousedown===null;function A_({target:e,state:l,variants:o,apply:t}){const r=D(o),a=[],c=(...h)=>{const C=Ps.apply(null,h);return a.push(C),C},p=H(!1),i=H(!1),y=H(!1),u=w(()=>{let h=[];return r&&(r.hovered&&(h=[...h,...Object.keys(r.hovered)]),r.tapped&&(h=[...h,...Object.keys(r.tapped)]),r.focused&&(h=[...h,...Object.keys(r.focused)])),h}),f=w(()=>{const h={};Object.assign(h,l.value),p.value&&r.hovered&&Object.assign(h,r.hovered),i.value&&r.tapped&&Object.assign(h,r.tapped),y.value&&r.focused&&Object.assign(h,r.focused);for(const C in h)u.value.includes(C)||delete h[C];return h});r.hovered&&(c(e,"mouseenter",()=>{p.value=!0}),c(e,"mouseleave",()=>{p.value=!1,i.value=!1}),c(e,"mouseout",()=>{p.value=!1,i.value=!1})),r.tapped&&(h_()&&(c(e,"mousedown",()=>{i.value=!0}),c(e,"mouseup",()=>{i.value=!1})),m_()&&(c(e,"pointerdown",()=>{i.value=!0}),c(e,"pointerup",()=>{i.value=!1})),B_()&&(c(e,"touchstart",()=>{i.value=!0}),c(e,"touchend",()=>{i.value=!1}))),r.focused&&(c(e,"focus",()=>{y.value=!0}),c(e,"blur",()=>{y.value=!1}));const d=ys(f,t);return{stop:()=>{a.forEach(h=>h()),d()}}}function v_({set:e,target:l,variants:o,variant:t}){const r=D(o);return{stop:ys(()=>l,()=>{!r||(r.initial&&e("initial"),r.enter&&(t.value="enter"))},{immediate:!0,flush:"pre"})}}function D_({state:e,apply:l}){return{stop:ys(e,t=>{t&&l(t)},{immediate:!0})}}function g_({target:e,variants:l,variant:o}){const t=D(l);let r=cl;if(t&&(t.visible||t.visibleOnce)){const{stop:a}=Hf(e,([{isIntersecting:c}])=>{t.visible?c?o.value="visible":o.value="initial":t.visibleOnce&&(c?o.value!=="visibleOnce"&&(o.value="visibleOnce"):o.value||(o.value="initial"))});r=a}return{stop:r}}function C_(e,l={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const o=H([]);if(l.lifeCycleHooks){const{stop:r}=v_(e);o.value.push(r)}if(l.syncVariants){const{stop:r}=D_(e);o.value.push(r)}if(l.visibilityHooks){const{stop:r}=g_(e);o.value.push(r)}if(l.eventListeners){const{stop:r}=A_(e);o.value.push(r)}const t=()=>o.value.forEach(r=>r());return ta(t),{stop:t}}function xy(e={}){const l=Ls(gs({},e)),o=H({});return ys(l,()=>{const t={};for(const[r,a]of Object.entries(l)){const c=wa(r),p=by(a,c);t[r]=p}o.value=t},{immediate:!0,deep:!0}),{state:l,style:o}}const E_=["","X","Y","Z"],__=["perspective","translate","scale","rotate","skew"],wy=["transformPerspective","x","y","z"];__.forEach(e=>{E_.forEach(l=>{const o=e+l;wy.push(o)})});const F_=new Set(wy);function $a(e){return F_.has(e)}const b_=new Set(["originX","originY","originZ"]);function ky(e){return b_.has(e)}function x_(e){const l={},o={};return Object.entries(e).forEach(([t,r])=>{$a(t)||ky(t)?l[t]=r:o[t]=r}),{transform:l,style:o}}function w_(e,l){let o,t;const{state:r,style:a}=xy(),c=ys(()=>ae(e),y=>{if(!!y){t=y;for(const u of Object.keys(Fy))y.style[u]===null||y.style[u]===""||$a(u)||ky(u)||re(r,u,y.style[u]);o&&Object.entries(o).forEach(([u,f])=>re(y.style,u,f)),l&&l(r)}},{immediate:!0}),p=ys(a,y=>{if(!t){o=y;return}for(const u in y)re(t.style,u,y[u])},{immediate:!0});return{style:r,stop:()=>{t=void 0,o=void 0,c(),p()}}}const k_={x:"translateX",y:"translateY",z:"translateZ"};function $y(e={},l=!0){const o=Ls(gs({},e)),t=H("");return ys(o,r=>{let a="",c=!1;l&&(r.x||r.y||r.z)&&(a+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(cs.transform).join(",")}) `,c=!0);for(const[p,i]of Object.entries(r)){if(l&&(p==="x"||p==="y"||p==="z"))continue;const y=wa(p),u=by(i,y);a+=`${k_[p]||p}(${u}) `}l&&!c&&(a+="translateZ(0px) "),t.value=a.trim()},{immediate:!0,deep:!0}),{state:o,transform:t}}function $_(e){const l=e.trim().split(/\) |\)/);if(l.length===1)return{};const o=t=>t.endsWith("px")||t.endsWith("deg")?parseFloat(t):isNaN(Number(t))?Number(t):t;return l.reduce((t,r)=>{if(!r)return t;const[a,c]=r.split("("),i=c.split(",").map(u=>o(u.endsWith(")")?u.replace(")",""):u.trim())),y=i.length===1?i[0]:i;return Qs(gs({},t),{[a]:y})},{})}function S_(e,l){Object.entries($_(l)).forEach(([o,t])=>{t=parseFloat(t);const r=["x","y","z"];if(o==="translate3d"){if(t===0){r.forEach(a=>{re(e,a,0)});return}t.forEach((a,c)=>{re(e,r[c],a)});return}if(o==="translateX"){re(e,"x",t);return}if(o==="translateY"){re(e,"y",t);return}if(o==="translateZ"){re(e,"z",t);return}re(e,o,t)})}function O_(e,l){let o,t;const{state:r,transform:a}=$y(),c=ys(()=>ae(e),y=>{!y||(t=y,y.style.transform&&S_(r,y.style.transform),o&&(y.style.transform=o),l&&l(r))},{immediate:!0}),p=ys(a,y=>{if(!t){o=y;return}t.style.transform=y},{immediate:!0});return{transform:r,stop:()=>{o=void 0,t=void 0,c(),p()}}}function M_(e,l){const o=Ls({}),t=f=>{Object.entries(f).forEach(([d,m])=>{re(o,d,m)})},{style:r,stop:a}=w_(e,t),{transform:c,stop:p}=O_(e,t),i=ys(o,f=>{Object.entries(f).forEach(([d,m])=>{const h=$a(d)?c:r;h[d]&&h[d]===m||re(h,d,m)})},{immediate:!0,deep:!0}),y=ys(()=>ae(e),f=>{!f||l&&t(l)},{immediate:!0});return{motionProperties:o,style:r,transform:c,stop:()=>{a(),p(),i(),y()}}}function P_(e={}){const l=D(e),o=H();return{state:w(()=>{if(!!o.value)return l[o.value]}),variant:o}}function T_(e,l={},o){const{motionProperties:t,stop:r}=M_(e),{variant:a,state:c}=P_(l),p=f_(t,l),i=Qs(gs({target:e,variant:a,variants:l,state:c,motionProperties:t},p),{stop:(u=!1)=>{}}),{stop:y}=C_(i,o);return i.stop=(u=!1)=>{const f=()=>{i.stopTransitions(),r(),y()};if(!u&&l.value&&l.value.leave){const d=ys(i.isAnimating,m=>{m||(d(),f())})}else f()},ta(()=>i.stop()),tf(()=>ae(e),u=>{!u||u!=null&&u.motionInstance&&(i.stop(),Object.assign(i,u.motionInstance))}),i}const L_=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],N_=(e,l)=>{const o=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};o&&(o.variants&&jn(o.variants)&&(l.value=gs(gs({},l.value),o.variants)),L_.forEach(t=>{if(t==="delay"){if(o&&o[t]&&jd(o[t])){const r=o[t];l&&l.value&&(l.value.enter&&(l.value.enter.transition||(l.value.enter.transition={}),l.value.enter.transition=Qs(gs({},l.value.enter.transition),{delay:r})),l.value.visible&&(l.value.visible.transition||(l.value.visible.transition={}),l.value.visible.transition=Qs(gs({},l.value.visible.transition),{delay:r})),l.value.visibleOnce&&(l.value.visibleOnce.transition||(l.value.visibleOnce.transition={}),l.value.visibleOnce.transition=Qs(gs({},l.value.visibleOnce.transition),{delay:r})))}return}t==="visible-once"&&(t="visibleOnce"),o&&o[t]&&jn(o[t])&&(l.value[t]=o[t])}))},Wt=e=>{const l=(t,r,a)=>{const c=r.value&&typeof r.value=="string"?r.value:a.key;c&&zt[c]&&zt[c].stop();const p=H(e||{});typeof r.value=="object"&&(p.value=r.value),N_(a,p);const i=T_(t,p);t.motionInstance=i,c&&re(zt,c,i)},o=t=>{t.motionInstance&&t.motionInstance.stop()};return{created:l,unmounted:o,bind:l,unbind:o,getSSRProps(t,r){const{initial:a}=t.value||r&&r.props||{},c=C7((e==null?void 0:e.initial)||{},a||{});if(!c||Object.keys(c).length===0)return;const{transform:p,style:i}=x_(c),{transform:y}=$y(p),{style:u}=xy(i);return y.value&&(u.value.transform=y.value),{style:u.value}}}},R_={initial:{opacity:0},enter:{opacity:1}},I_={initial:{opacity:0},visible:{opacity:1}},j_={initial:{opacity:0},visibleOnce:{opacity:1}},V_={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},z_={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},H_={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},U_={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},W_={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},q_={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},K_={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Y_={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Z_={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},J_={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},X_={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},G_={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Q_={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},s2={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},e2={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},l2={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},o2={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},n2={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},t2={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},r2={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},a2={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},c2={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},p2={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},i2={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},y2={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},u2={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},d2={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},kp={__proto__:null,fade:R_,fadeVisible:I_,fadeVisibleOnce:j_,pop:V_,popVisible:z_,popVisibleOnce:H_,rollBottom:Q_,rollLeft:U_,rollRight:K_,rollTop:J_,rollVisibleBottom:s2,rollVisibleLeft:W_,rollVisibleRight:Y_,rollVisibleTop:X_,rollVisibleOnceBottom:e2,rollVisibleOnceLeft:q_,rollVisibleOnceRight:Z_,rollVisibleOnceTop:G_,slideBottom:y2,slideLeft:l2,slideRight:t2,slideTop:c2,slideVisibleBottom:u2,slideVisibleLeft:o2,slideVisibleRight:r2,slideVisibleTop:p2,slideVisibleOnceBottom:d2,slideVisibleOnceLeft:n2,slideVisibleOnceRight:a2,slideVisibleOnceTop:i2};function f2(e){const l="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",t=new RegExp(l.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(t,r=>o.charAt(l.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const m2={install(e,l){if(e.directive("motion",Wt()),!l||l&&!l.excludePresets)for(const o in kp){const t=kp[o];e.directive(`motion-${f2(o)}`,Wt(t))}if(l&&l.directives)for(const o in l.directives){const t=l.directives[o];t.initial,e.directive(`motion-${o}`,Wt(t))}}},Sa="vue-starport-injection",Sy="vue-starport-options",B2={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Oy={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var h2=Object.defineProperty,Zn=Object.getOwnPropertySymbols,My=Object.prototype.hasOwnProperty,Py=Object.prototype.propertyIsEnumerable,$p=(e,l,o)=>l in e?h2(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,A2=(e,l)=>{for(var o in l||(l={}))My.call(l,o)&&$p(e,o,l[o]);if(Zn)for(var o of Zn(l))Py.call(l,o)&&$p(e,o,l[o]);return e},Sp=(e,l)=>{var o={};for(var t in e)My.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&Zn)for(var t of Zn(e))l.indexOf(t)<0&&Py.call(e,t)&&(o[t]=e[t]);return o};const v2=bs({name:"StarportProxy",props:A2({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Oy),setup(e,l){const o=$(Sa),t=w(()=>o.getInstance(e.port,e.component)),r=H(),a=t.value.generateId(),c=H(!1);return t.value.isVisible||(t.value.land(),c.value=!0),po(async()=>{t.value.el||(t.value.el=r.value,await Ks(),c.value=!0,t.value.rect.update())}),at(async()=>{t.value.rect.update(),t.value.liftOff(),t.value.el=void 0,c.value=!1,!t.value.options.keepAlive&&(await Ks(),await Ks(),!t.value.el&&o.dispose(t.value.port))}),ys(()=>e,async()=>{t.value.props&&await Ks();const p=e,{props:i}=p,y=Sp(p,["props"]);t.value.props=i||{},t.value.setLocalOptions(y)},{deep:!0,immediate:!0}),()=>{const p=e,{initialProps:i,mountedProps:y}=p,u=Sp(p,["initialProps","mountedProps"]),f=dl(u,(c.value?y:i)||{});return Se("div",dl(f,{id:a,ref:r,"data-starport-proxy":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true"}),l.slots.default?Se(l.slots.default):void 0)}}});var D2=Object.defineProperty,g2=Object.defineProperties,C2=Object.getOwnPropertyDescriptors,Op=Object.getOwnPropertySymbols,E2=Object.prototype.hasOwnProperty,_2=Object.prototype.propertyIsEnumerable,Mp=(e,l,o)=>l in e?D2(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,F2=(e,l)=>{for(var o in l||(l={}))E2.call(l,o)&&Mp(e,o,l[o]);if(Op)for(var o of Op(l))_2.call(l,o)&&Mp(e,o,l[o]);return e},b2=(e,l)=>g2(e,C2(l));const x2=bs({name:"Starport",inheritAttrs:!0,props:Oy,setup(e,l){const o=H(!1);return po(()=>{o.value=!0}),()=>{var c,p;const t=(p=(c=l.slots).default)==null?void 0:p.call(c);if(!t)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(t.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${t.length}`);const r=t[0];let a=r.type;return(!jn(a)||lo(a))&&(a={render(){return t}}),Se(v2,b2(F2({},e),{key:e.port,component:et(a),props:r.props}))}}});function w2(e){const l=Ls({height:0,width:0,left:0,top:0,update:t,listen:a,pause:c}),o=Ce?document.documentElement||document.body:void 0;function t(){if(!Ce)return;const p=ae(e);if(!p)return;const{height:i,width:y,left:u,top:f}=p.getBoundingClientRect();Object.assign(l,{height:i,width:y,left:u,top:o.scrollTop+f})}const r=Xi(t,{immediate:!1});function a(){!Ce||(t(),r.resume())}function c(){r.pause()}return l}let k2="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",$2=(e,l=21)=>(o=l)=>{let t="",r=o;for(;r--;)t+=e[Math.random()*e.length|0];return t},S2=(e=21)=>{let l="",o=e;for(;o--;)l+=k2[Math.random()*64|0];return l};var O2={nanoid:S2,customAlphabet:$2};const Pp=O2.customAlphabet("abcdefghijklmnopqrstuvwxyz",5);function Tp(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function M2(e){var l;return e.name||((l=e.__file)==null?void 0:l.split(/[\/\\.]/).slice(-2)[0])||""}var P2=Object.defineProperty,Lp=Object.getOwnPropertySymbols,T2=Object.prototype.hasOwnProperty,L2=Object.prototype.propertyIsEnumerable,Np=(e,l,o)=>l in e?P2(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,qt=(e,l)=>{for(var o in l||(l={}))T2.call(l,o)&&Np(e,o,l[o]);if(Lp)for(var o of Lp(l))L2.call(l,o)&&Np(e,o,l[o]);return e};function N2(e,l,o={}){const t=M2(l),r=Tp(t)||Pp(),a=H(),c=H(null),p=H(!1),i=H(!1),y=Xy(!0),u=H({}),f=w(()=>qt(qt(qt({},B2),o),u.value)),d=H(0);let m;y.run(()=>{m=w2(a),ys(a,async b=>{b&&(i.value=!0),await Ks(),a.value||(i.value=!1)})});const h=Tp(e);function C(){return`starport-${r}-${h}-${Pp()}`}const g=C();return Ls({el:a,id:g,port:e,props:c,rect:m,scope:y,isLanded:p,isVisible:i,options:f,liftOffTime:d,component:l,componentName:t,componentId:r,generateId:C,setLocalOptions(b={}){u.value=JSON.parse(JSON.stringify(b))},elRef(){return a},liftOff(){!p.value||(p.value=!1,d.value=Date.now(),m.listen())},land(){p.value||(p.value=!0,m.pause())}})}function R2(e){const l=Ls(new Map);function o(r,a){let c=l.get(r);return c||(c=N2(r,a,e),l.set(r,c)),c.component=a,c}function t(r){var a;(a=l.get(r))==null||a.scope.stop(),l.delete(r)}return{portMap:l,dispose:t,getInstance:o}}var I2=Object.defineProperty,j2=Object.defineProperties,V2=Object.getOwnPropertyDescriptors,Rp=Object.getOwnPropertySymbols,z2=Object.prototype.hasOwnProperty,H2=Object.prototype.propertyIsEnumerable,Ip=(e,l,o)=>l in e?I2(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,U2=(e,l)=>{for(var o in l||(l={}))z2.call(l,o)&&Ip(e,o,l[o]);if(Rp)for(var o of Rp(l))H2.call(l,o)&&Ip(e,o,l[o]);return e},W2=(e,l)=>j2(e,V2(l));const q2=bs({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const l=$(Sa);if(!l)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=w(()=>l.getInstance(e.port,e.component)),t=w(()=>{var c;return((c=o.value.el)==null?void 0:c.id)||o.value.id}),r=w(()=>{const c=Date.now()-o.value.liftOffTime,p=Math.max(0,o.value.options.duration-c),i=o.value.rect,y={position:"absolute",left:0,top:0,width:`${i.width}px`,height:`${i.height}px`,transform:`translate3d(${i.left}px,${i.top}px,0px)`};return!o.value.isVisible||!o.value.el?W2(U2({},y),{zIndex:-1,display:"none"}):(o.value.isLanded?y.display="none":Object.assign(y,{transitionProperty:"all",transitionDuration:`${p}ms`,transitionTimingFunction:o.value.options.easing}),y)}),a={};return()=>{const c=!!(o.value.isLanded&&o.value.el);return Se("div",{style:r.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},Se(_5,{to:c?`#${t.value}`:"body",disabled:!c},Se(o.value.component,dl(a,o.value.props))))}}}),K2=bs({name:"StarportCarrier",setup(e,{slots:l}){const o=R2($(Sy,{}));return Pl().appContext.app.provide(Sa,o),()=>{var r;return[(r=l.default)==null?void 0:r.call(l),Array.from(o.portMap.entries()).map(([a,{component:c}])=>Se(q2,{key:a,port:a,component:c}))]}}});function Y2(e={}){return{install(l){l.provide(Sy,e),l.component("Starport",x2),l.component("StarportCarrier",K2)}}}function Z2(e){function l(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}l(),window.addEventListener("resize",l),e.app.use(m2),e.app.use(Y2({keepAlive:!0}))}function pe(e,l,o){var t,r;return(r=((t=e.instance)==null?void 0:t.$).provides[l])!=null?r:o}function J2(){return{install(e){e.directive("click",{name:"v-click",mounted(l,o){var u,f,d,m;if(No.value||((u=pe(o,Mo))==null?void 0:u.value))return;const t=pe(o,Cl),r=pe(o,Oo),a=pe(o,ir),c=o.modifiers.hide!==!1&&o.modifiers.hide!=null,p=o.modifiers.fade!==!1&&o.modifiers.fade!=null,i=((f=t==null?void 0:t.value)==null?void 0:f.length)||0,y=p?Cd:xt;if(t&&!((d=t==null?void 0:t.value)!=null&&d.includes(l))&&t.value.push(l),o.value===null&&(o.value=t==null?void 0:t.value.length),!(a!=null&&a.value.has(o.value)))a==null||a.value.set(o.value,[l]);else if(!((m=a==null?void 0:a.value.get(o.value))!=null&&m.includes(l))){const h=(a==null?void 0:a.value.get(o.value))||[];a==null||a.value.set(o.value,[l].concat(h))}l==null||l.classList.toggle(Dl,!0),r&&ys(r,()=>{var b;const h=(b=r==null?void 0:r.value)!=null?b:0,C=o.value!=null?h>=o.value:h>i;l.classList.contains(wt)||l.classList.toggle(y,!C),c!==!1&&c!==void 0&&l.classList.toggle(y,C),l.classList.toggle(Ao,!1);const g=a==null?void 0:a.value.get(h);g==null||g.forEach((_,F)=>{_.classList.toggle(Dn,!1),F===g.length-1?_.classList.toggle(Ao,!0):_.classList.toggle(Dn,!0)}),l.classList.contains(Ao)||l.classList.toggle(Dn,C)},{immediate:!0})},unmounted(l,o){l==null||l.classList.toggle(Dl,!1);const t=pe(o,Cl);t!=null&&t.value&&yr(t.value,l)}}),e.directive("after",{name:"v-after",mounted(l,o){var p,i;if(No.value||((p=pe(o,Mo))==null?void 0:p.value))return;const t=pe(o,Cl),r=pe(o,Oo),a=pe(o,ir),c=t==null?void 0:t.value.length;o.value===void 0&&(o.value=t==null?void 0:t.value.length),a!=null&&a.value.has(o.value)?(i=a==null?void 0:a.value.get(o.value))==null||i.push(l):a==null||a.value.set(o.value,[l]),l==null||l.classList.toggle(Dl,!0),r&&ys(r,()=>{var u,f,d;const y=((u=r.value)!=null?u:0)>=((d=(f=o.value)!=null?f:c)!=null?d:0);l.classList.contains(wt)||l.classList.toggle(xt,!y),l.classList.toggle(Ao,!1),l.classList.contains(Ao)||l.classList.toggle(Dn,y)},{immediate:!0})},unmounted(l){l==null||l.classList.toggle(Dl,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(l,o){var c,p,i;if(No.value||((c=pe(o,Mo))==null?void 0:c.value))return;const t=pe(o,Cl),r=pe(o,Oo),a=((p=t==null?void 0:t.value)==null?void 0:p.length)||0;t&&!((i=t==null?void 0:t.value)!=null&&i.includes(l))&&t.value.push(l),l==null||l.classList.toggle(Dl,!0),r&&ys(r,()=>{var f;const y=(f=r==null?void 0:r.value)!=null?f:0,u=o.value!=null?y>=o.value:y>a;l.classList.toggle(xt,u),l.classList.toggle(wt,u)},{immediate:!0})},unmounted(l,o){l==null||l.classList.toggle(Dl,!1);const t=pe(o,Cl);t!=null&&t.value&&yr(t.value,l)}})}}}function X2(e,l){const o=b8(e),t=x8(l,o.currentRoute,o.currentPage);return{nav:Qs(gs(gs({},o),t),{downloadPDF:br,next:pl,nextSlide:sn,openInEditor:A7,prev:il,prevSlide:en}),configs:_s,themeConfigs:w(()=>_s.themeConfig)}}function G2(){return{install(e){const l=X2(Xe,Oe);e.provide(M,Ls(l))}}}const fo=nd(D7);fo.use(Be);fo.use(hd());fo.use(J2());fo.use(G2());Z2({app:fo,router:Be});fo.mount("#app");export{Eo as $,z as A,D8 as B,fs as C,zs as D,P8 as E,ee as F,Fs as G,cB as H,Cs as I,sF as J,eF as K,Oe as L,Wn as M,d7 as N,Lt as O,kt as P,Xo as Q,Pt as R,uA as S,ia as T,ya as U,pA as V,hB as W,Me as X,lF as Y,Ze as Z,Pe as _,s as a,gn as a0,rn as a1,Cr as a2,I3 as a3,j3 as a4,V3 as a5,H3 as a6,He as a7,Ii as a8,rF as a9,je as aa,le as ab,XB as ac,bl as ad,Vi as ae,U3 as af,at as ag,w as b,U as c,bs as d,M as e,ue as f,L as g,D as h,$ as i,G3 as j,h7 as k,_s as l,vd as m,Ns as n,v as o,po as p,Ls as q,H as r,oF as s,Us as t,nF as u,tF as v,ys as w,q as x,oe as y,Hi as z};
