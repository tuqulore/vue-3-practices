var Ry=Object.defineProperty,Iy=Object.defineProperties;var zy=Object.getOwnPropertyDescriptors;var dn=Object.getOwnPropertySymbols;var Ta=Object.prototype.hasOwnProperty,Na=Object.prototype.propertyIsEnumerable;var La=(e,l,o)=>l in e?Ry(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,gs=(e,l)=>{for(var o in l||(l={}))Ta.call(l,o)&&La(e,o,l[o]);if(dn)for(var o of dn(l))Na.call(l,o)&&La(e,o,l[o]);return e},Qs=(e,l)=>Iy(e,zy(l));var At=(e,l)=>{var o={};for(var t in e)Ta.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&dn)for(var t of dn(e))l.indexOf(t)<0&&Na.call(e,t)&&(o[t]=e[t]);return o};const Hy=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};Hy();function Hp(e,l){const o=Object.create(null),t=e.split(",");for(let r=0;r<t.length;r++)o[t[r]]=!0;return l?r=>!!o[r.toLowerCase()]:r=>!!o[r]}function oe(e){if(rs(e)){const l={};for(let o=0;o<e.length;o++){const t=e[o],r=Ks(t)?Wy(t):oe(t);if(r)for(const a in r)l[a]=r[a]}return l}else{if(Ks(e))return e;if(zs(e))return e}}const Uy=/;(?![^(]*\))/g,qy=/:(.+)/;function Wy(e){const l={};return e.split(Uy).forEach(o=>{if(o){const t=o.split(qy);t.length>1&&(l[t[0].trim()]=t[1].trim())}}),l}function Ns(e){let l="";if(Ks(e))l=e;else if(rs(e))for(let o=0;o<e.length;o++){const t=Ns(e[o]);t&&(l+=t+" ")}else if(zs(e))for(const o in e)e[o]&&(l+=o+" ");return l.trim()}function q(e){if(!e)return null;let{class:l,style:o}=e;return l&&!Ks(l)&&(e.class=Ns(l)),o&&(e.style=oe(o)),e}const Hs=e=>Ks(e)?e:e==null?"":rs(e)||zs(e)&&(e.toString===Yp||!ys(e.toString))?JSON.stringify(e,Up,2):String(e),Up=(e,l)=>l&&l.__v_isRef?Up(e,l.value):Yl(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((o,[t,r])=>(o[`${t} =>`]=r,o),{})}:Wp(l)?{[`Set(${l.size})`]:[...l.values()]}:zs(l)&&!rs(l)&&!Zp(l)?String(l):l,Os={},Kl=[],we=()=>{},Ky=()=>!1,Yy=/^on[^a-z]/,Tr=e=>Yy.test(e),qp=e=>e.startsWith("onUpdate:"),ae=Object.assign,Nr=(e,l)=>{const o=e.indexOf(l);o>-1&&e.splice(o,1)},Zy=Object.prototype.hasOwnProperty,Bs=(e,l)=>Zy.call(e,l),rs=Array.isArray,Yl=e=>Xn(e)==="[object Map]",Wp=e=>Xn(e)==="[object Set]",ys=e=>typeof e=="function",Ks=e=>typeof e=="string",jr=e=>typeof e=="symbol",zs=e=>e!==null&&typeof e=="object",Kp=e=>zs(e)&&ys(e.then)&&ys(e.catch),Yp=Object.prototype.toString,Xn=e=>Yp.call(e),Jy=e=>Xn(e).slice(8,-1),Zp=e=>Xn(e)==="[object Object]",Vr=e=>Ks(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=Hp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gn=e=>{const l=Object.create(null);return o=>l[o]||(l[o]=e(o))},Xy=/-(\w)/g,Ie=Gn(e=>e.replace(Xy,(l,o)=>o?o.toUpperCase():"")),Gy=/\B([A-Z])/g,Qn=Gn(e=>e.replace(Gy,"-$1").toLowerCase()),Rr=Gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),vt=Gn(e=>e?`on${Rr(e)}`:""),zo=(e,l)=>!Object.is(e,l),bo=(e,l)=>{for(let o=0;o<e.length;o++)e[o](l)},Mn=(e,l,o)=>{Object.defineProperty(e,l,{configurable:!0,enumerable:!1,value:o})},Qy=e=>{const l=parseFloat(e);return isNaN(l)?e:l};let ja;const su=()=>ja||(ja=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ye;class Jp{constructor(l=!1){this.active=!0,this.effects=[],this.cleanups=[],!l&&ye&&(this.parent=ye,this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}run(l){if(this.active){const o=ye;try{return ye=this,l()}finally{ye=o}}}on(){ye=this}off(){ye=this.parent}stop(l){if(this.active){let o,t;for(o=0,t=this.effects.length;o<t;o++)this.effects[o].stop();for(o=0,t=this.cleanups.length;o<t;o++)this.cleanups[o]();if(this.scopes)for(o=0,t=this.scopes.length;o<t;o++)this.scopes[o].stop(!0);if(this.parent&&!l){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function eu(e){return new Jp(e)}function lu(e,l=ye){l&&l.active&&l.effects.push(e)}function ou(){return ye}function nu(e){ye&&ye.cleanups.push(e)}const Ir=e=>{const l=new Set(e);return l.w=0,l.n=0,l},Xp=e=>(e.w&ul)>0,Gp=e=>(e.n&ul)>0,tu=({deps:e})=>{if(e.length)for(let l=0;l<e.length;l++)e[l].w|=ul},ru=e=>{const{deps:l}=e;if(l.length){let o=0;for(let t=0;t<l.length;t++){const r=l[t];Xp(r)&&!Gp(r)?r.delete(e):l[o++]=r,r.w&=~ul,r.n&=~ul}l.length=o}},Wt=new WeakMap;let Co=0,ul=1;const Kt=30;let xe;const kl=Symbol(""),Yt=Symbol("");class zr{constructor(l,o=null,t){this.fn=l,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,lu(this,t)}run(){if(!this.active)return this.fn();let l=xe,o=rl;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=xe,xe=this,rl=!0,ul=1<<++Co,Co<=Kt?tu(this):Va(this),this.fn()}finally{Co<=Kt&&ru(this),ul=1<<--Co,xe=this.parent,rl=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(Va(this),this.onStop&&this.onStop(),this.active=!1)}}function Va(e){const{deps:l}=e;if(l.length){for(let o=0;o<l.length;o++)l[o].delete(e);l.length=0}}let rl=!0;const Qp=[];function to(){Qp.push(rl),rl=!1}function ro(){const e=Qp.pop();rl=e===void 0?!0:e}function Be(e,l,o){if(rl&&xe){let t=Wt.get(e);t||Wt.set(e,t=new Map);let r=t.get(o);r||t.set(o,r=Ir()),si(r)}}function si(e,l){let o=!1;Co<=Kt?Gp(e)||(e.n|=ul,o=!Xp(e)):o=!e.has(xe),o&&(e.add(xe),xe.deps.push(e))}function Ye(e,l,o,t,r,a){const c=Wt.get(e);if(!c)return;let p=[];if(l==="clear")p=[...c.values()];else if(o==="length"&&rs(e))c.forEach((i,y)=>{(y==="length"||y>=t)&&p.push(i)});else switch(o!==void 0&&p.push(c.get(o)),l){case"add":rs(e)?Vr(o)&&p.push(c.get("length")):(p.push(c.get(kl)),Yl(e)&&p.push(c.get(Yt)));break;case"delete":rs(e)||(p.push(c.get(kl)),Yl(e)&&p.push(c.get(Yt)));break;case"set":Yl(e)&&p.push(c.get(kl));break}if(p.length===1)p[0]&&Zt(p[0]);else{const i=[];for(const y of p)y&&i.push(...y);Zt(Ir(i))}}function Zt(e,l){const o=rs(e)?e:[...e];for(const t of o)t.computed&&Ra(t);for(const t of o)t.computed||Ra(t)}function Ra(e,l){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const au=Hp("__proto__,__v_isRef,__isVue"),ei=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jr)),cu=Hr(),pu=Hr(!1,!0),iu=Hr(!0),Ia=yu();function yu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(l=>{e[l]=function(...o){const t=_s(this);for(let a=0,c=this.length;a<c;a++)Be(t,"get",a+"");const r=t[l](...o);return r===-1||r===!1?t[l](...o.map(_s)):r}}),["push","pop","shift","unshift","splice"].forEach(l=>{e[l]=function(...o){to();const t=_s(this)[l].apply(this,o);return ro(),t}}),e}function Hr(e=!1,l=!1){return function(t,r,a){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return l;if(r==="__v_raw"&&a===(e?l?xu:ri:l?ti:ni).get(t))return t;const c=rs(t);if(!e&&c&&Bs(Ia,r))return Reflect.get(Ia,r,a);const p=Reflect.get(t,r,a);return(jr(r)?ei.has(r):au(r))||(e||Be(t,"get",r),l)?p:Fs(p)?c&&Vr(r)?p:p.value:zs(p)?e?ql(p):Ts(p):p}}const uu=li(),du=li(!0);function li(e=!1){return function(o,t,r,a){let c=o[t];if(Ho(c)&&Fs(c)&&!Fs(r))return!1;if(!e&&!Ho(r)&&(Jt(r)||(r=_s(r),c=_s(c)),!rs(o)&&Fs(c)&&!Fs(r)))return c.value=r,!0;const p=rs(o)&&Vr(t)?Number(t)<o.length:Bs(o,t),i=Reflect.set(o,t,r,a);return o===_s(a)&&(p?zo(r,c)&&Ye(o,"set",t,r):Ye(o,"add",t,r)),i}}function fu(e,l){const o=Bs(e,l);e[l];const t=Reflect.deleteProperty(e,l);return t&&o&&Ye(e,"delete",l,void 0),t}function mu(e,l){const o=Reflect.has(e,l);return(!jr(l)||!ei.has(l))&&Be(e,"has",l),o}function hu(e){return Be(e,"iterate",rs(e)?"length":kl),Reflect.ownKeys(e)}const oi={get:cu,set:uu,deleteProperty:fu,has:mu,ownKeys:hu},Bu={get:iu,set(e,l){return!0},deleteProperty(e,l){return!0}},Au=ae({},oi,{get:pu,set:du}),Ur=e=>e,st=e=>Reflect.getPrototypeOf(e);function fn(e,l,o=!1,t=!1){e=e.__v_raw;const r=_s(e),a=_s(l);o||(l!==a&&Be(r,"get",l),Be(r,"get",a));const{has:c}=st(r),p=t?Ur:o?Kr:Uo;if(c.call(r,l))return p(e.get(l));if(c.call(r,a))return p(e.get(a));e!==r&&e.get(l)}function mn(e,l=!1){const o=this.__v_raw,t=_s(o),r=_s(e);return l||(e!==r&&Be(t,"has",e),Be(t,"has",r)),e===r?o.has(e):o.has(e)||o.has(r)}function hn(e,l=!1){return e=e.__v_raw,!l&&Be(_s(e),"iterate",kl),Reflect.get(e,"size",e)}function za(e){e=_s(e);const l=_s(this);return st(l).has.call(l,e)||(l.add(e),Ye(l,"add",e,e)),this}function Ha(e,l){l=_s(l);const o=_s(this),{has:t,get:r}=st(o);let a=t.call(o,e);a||(e=_s(e),a=t.call(o,e));const c=r.call(o,e);return o.set(e,l),a?zo(l,c)&&Ye(o,"set",e,l):Ye(o,"add",e,l),this}function Ua(e){const l=_s(this),{has:o,get:t}=st(l);let r=o.call(l,e);r||(e=_s(e),r=o.call(l,e)),t&&t.call(l,e);const a=l.delete(e);return r&&Ye(l,"delete",e,void 0),a}function qa(){const e=_s(this),l=e.size!==0,o=e.clear();return l&&Ye(e,"clear",void 0,void 0),o}function Bn(e,l){return function(t,r){const a=this,c=a.__v_raw,p=_s(c),i=l?Ur:e?Kr:Uo;return!e&&Be(p,"iterate",kl),c.forEach((y,u)=>t.call(r,i(y),i(u),a))}}function An(e,l,o){return function(...t){const r=this.__v_raw,a=_s(r),c=Yl(a),p=e==="entries"||e===Symbol.iterator&&c,i=e==="keys"&&c,y=r[e](...t),u=o?Ur:l?Kr:Uo;return!l&&Be(a,"iterate",i?Yt:kl),{next(){const{value:f,done:d}=y.next();return d?{value:f,done:d}:{value:p?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...l){return e==="delete"?!1:this}}function vu(){const e={get(a){return fn(this,a)},get size(){return hn(this)},has:mn,add:za,set:Ha,delete:Ua,clear:qa,forEach:Bn(!1,!1)},l={get(a){return fn(this,a,!1,!0)},get size(){return hn(this)},has:mn,add:za,set:Ha,delete:Ua,clear:qa,forEach:Bn(!1,!0)},o={get(a){return fn(this,a,!0)},get size(){return hn(this,!0)},has(a){return mn.call(this,a,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Bn(!0,!1)},t={get(a){return fn(this,a,!0,!0)},get size(){return hn(this,!0)},has(a){return mn.call(this,a,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=An(a,!1,!1),o[a]=An(a,!0,!1),l[a]=An(a,!1,!0),t[a]=An(a,!0,!0)}),[e,o,l,t]}const[Du,gu,Cu,_u]=vu();function qr(e,l){const o=l?e?_u:Cu:e?gu:Du;return(t,r,a)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?t:Reflect.get(Bs(o,r)&&r in t?o:t,r,a)}const Eu={get:qr(!1,!1)},Fu={get:qr(!1,!0)},bu={get:qr(!0,!1)},ni=new WeakMap,ti=new WeakMap,ri=new WeakMap,xu=new WeakMap;function ku(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wu(e){return e.__v_skip||!Object.isExtensible(e)?0:ku(Jy(e))}function Ts(e){return Ho(e)?e:Wr(e,!1,oi,Eu,ni)}function $u(e){return Wr(e,!1,Au,Fu,ti)}function ql(e){return Wr(e,!0,Bu,bu,ri)}function Wr(e,l,o,t,r){if(!zs(e)||e.__v_raw&&!(l&&e.__v_isReactive))return e;const a=r.get(e);if(a)return a;const c=wu(e);if(c===0)return e;const p=new Proxy(e,c===2?t:o);return r.set(e,p),p}function Zl(e){return Ho(e)?Zl(e.__v_raw):!!(e&&e.__v_isReactive)}function Ho(e){return!!(e&&e.__v_isReadonly)}function Jt(e){return!!(e&&e.__v_isShallow)}function ai(e){return Zl(e)||Ho(e)}function _s(e){const l=e&&e.__v_raw;return l?_s(l):e}function et(e){return Mn(e,"__v_skip",!0),e}const Uo=e=>zs(e)?Ts(e):e,Kr=e=>zs(e)?ql(e):e;function Yr(e){rl&&xe&&(e=_s(e),si(e.dep||(e.dep=Ir())))}function Zr(e,l){e=_s(e),e.dep&&Zt(e.dep)}function Fs(e){return!!(e&&e.__v_isRef===!0)}function U(e){return ci(e,!1)}function ze(e){return ci(e,!0)}function ci(e,l){return Fs(e)?e:new Ou(e,l)}class Ou{constructor(l,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?l:_s(l),this._value=o?l:Uo(l)}get value(){return Yr(this),this._value}set value(l){l=this.__v_isShallow?l:_s(l),zo(l,this._rawValue)&&(this._rawValue=l,this._value=this.__v_isShallow?l:Uo(l),Zr(this))}}function D(e){return Fs(e)?e.value:e}const Su={get:(e,l,o)=>D(Reflect.get(e,l,o)),set:(e,l,o,t)=>{const r=e[l];return Fs(r)&&!Fs(o)?(r.value=o,!0):Reflect.set(e,l,o,t)}};function pi(e){return Zl(e)?e:new Proxy(e,Su)}class Mu{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:t}=l(()=>Yr(this),()=>Zr(this));this._get=o,this._set=t}get value(){return this._get()}set value(l){this._set(l)}}function Pu(e){return new Mu(e)}function Lu(e){const l=rs(e)?new Array(e.length):{};for(const o in e)l[o]=Nu(e,o);return l}class Tu{constructor(l,o,t){this._object=l,this._key=o,this._defaultValue=t,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function Nu(e,l,o){const t=e[l];return Fs(t)?t:new Tu(e,l,o)}class ju{constructor(l,o,t,r){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new zr(l,()=>{this._dirty||(this._dirty=!0,Zr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=t}get value(){const l=_s(this);return Yr(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}function Vu(e,l,o=!1){let t,r;const a=ys(e);return a?(t=e,r=we):(t=e.get,r=e.set),new ju(t,r,a||!r,o)}function al(e,l,o,t){let r;try{r=t?e(...t):e()}catch(a){lt(a,l,o)}return r}function $e(e,l,o,t){if(ys(e)){const a=al(e,l,o,t);return a&&Kp(a)&&a.catch(c=>{lt(c,l,o)}),a}const r=[];for(let a=0;a<e.length;a++)r.push($e(e[a],l,o,t));return r}function lt(e,l,o,t=!0){const r=l?l.vnode:null;if(l){let a=l.parent;const c=l.proxy,p=o;for(;a;){const y=a.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](e,c,p)===!1)return}a=a.parent}const i=l.appContext.config.errorHandler;if(i){al(i,null,10,[e,c,p]);return}}Ru(e,o,r,t)}function Ru(e,l,o,t=!0){console.error(e)}let Pn=!1,Xt=!1;const fe=[];let We=0;const xo=[];let _o=null,Il=0;const ko=[];let ll=null,zl=0;const ii=Promise.resolve();let Jr=null,Gt=null;function Ws(e){const l=Jr||ii;return e?l.then(this?e.bind(this):e):l}function Iu(e){let l=We+1,o=fe.length;for(;l<o;){const t=l+o>>>1;qo(fe[t])<e?l=t+1:o=t}return l}function yi(e){(!fe.length||!fe.includes(e,Pn&&e.allowRecurse?We+1:We))&&e!==Gt&&(e.id==null?fe.push(e):fe.splice(Iu(e.id),0,e),ui())}function ui(){!Pn&&!Xt&&(Xt=!0,Jr=ii.then(mi))}function zu(e){const l=fe.indexOf(e);l>We&&fe.splice(l,1)}function di(e,l,o,t){rs(e)?o.push(...e):(!l||!l.includes(e,e.allowRecurse?t+1:t))&&o.push(e),ui()}function Hu(e){di(e,_o,xo,Il)}function Uu(e){di(e,ll,ko,zl)}function ot(e,l=null){if(xo.length){for(Gt=l,_o=[...new Set(xo)],xo.length=0,Il=0;Il<_o.length;Il++)_o[Il]();_o=null,Il=0,Gt=null,ot(e,l)}}function fi(e){if(ot(),ko.length){const l=[...new Set(ko)];if(ko.length=0,ll){ll.push(...l);return}for(ll=l,ll.sort((o,t)=>qo(o)-qo(t)),zl=0;zl<ll.length;zl++)ll[zl]();ll=null,zl=0}}const qo=e=>e.id==null?1/0:e.id;function mi(e){Xt=!1,Pn=!0,ot(e),fe.sort((o,t)=>qo(o)-qo(t));const l=we;try{for(We=0;We<fe.length;We++){const o=fe[We];o&&o.active!==!1&&al(o,null,14)}}finally{We=0,fe.length=0,fi(),Pn=!1,Jr=null,(fe.length||xo.length||ko.length)&&mi(e)}}function qu(e,l,...o){if(e.isUnmounted)return;const t=e.vnode.props||Os;let r=o;const a=l.startsWith("update:"),c=a&&l.slice(7);if(c&&c in t){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:f,trim:d}=t[u]||Os;d&&(r=o.map(m=>m.trim())),f&&(r=o.map(Qy))}let p,i=t[p=vt(l)]||t[p=vt(Ie(l))];!i&&a&&(i=t[p=vt(Qn(l))]),i&&$e(i,e,6,r);const y=t[p+"Once"];if(y){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,$e(y,e,6,r)}}function hi(e,l,o=!1){const t=l.emitsCache,r=t.get(e);if(r!==void 0)return r;const a=e.emits;let c={},p=!1;if(!ys(e)){const i=y=>{const u=hi(y,l,!0);u&&(p=!0,ae(c,u))};!o&&l.mixins.length&&l.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!a&&!p?(t.set(e,null),null):(rs(a)?a.forEach(i=>c[i]=null):ae(c,a),t.set(e,c),c)}function nt(e,l){return!e||!Tr(l)?!1:(l=l.slice(2).replace(/Once$/,""),Bs(e,l[0].toLowerCase()+l.slice(1))||Bs(e,Qn(l))||Bs(e,l))}let Zs=null,tt=null;function Ln(e){const l=Zs;return Zs=e,tt=e&&e.type.__scopeId||null,l}function LF(e){tt=e}function TF(){tt=null}function N(e,l=Zs,o){if(!l||e._n)return e;const t=(...r)=>{t._d&&lc(-1);const a=Ln(l),c=e(...r);return Ln(a),t._d&&lc(1),c};return t._n=!0,t._c=!0,t._d=!0,t}function Dt(e){const{type:l,vnode:o,proxy:t,withProxy:r,props:a,propsOptions:[c],slots:p,attrs:i,emit:y,render:u,renderCache:f,data:d,setupState:m,ctx:B,inheritAttrs:C}=e;let g,b;const E=Ln(e);try{if(o.shapeFlag&4){const k=r||t;g=Ne(u.call(k,k,f,a,m,d,B)),b=i}else{const k=l;g=Ne(k.length>1?k(a,{attrs:i,slots:p,emit:y}):k(a,null)),b=l.props?i:Wu(i)}}catch(k){$o.length=0,lt(k,e,1),g=Z(dl)}let F=g;if(b&&C!==!1){const k=Object.keys(b),{shapeFlag:I}=F;k.length&&I&7&&(c&&k.some(qp)&&(b=Ku(b,c)),F=Sl(F,b))}return o.dirs&&(F=Sl(F),F.dirs=F.dirs?F.dirs.concat(o.dirs):o.dirs),o.transition&&(F.transition=o.transition),g=F,Ln(E),g}const Wu=e=>{let l;for(const o in e)(o==="class"||o==="style"||Tr(o))&&((l||(l={}))[o]=e[o]);return l},Ku=(e,l)=>{const o={};for(const t in e)(!qp(t)||!(t.slice(9)in l))&&(o[t]=e[t]);return o};function Yu(e,l,o){const{props:t,children:r,component:a}=e,{props:c,children:p,patchFlag:i}=l,y=a.emitsOptions;if(l.dirs||l.transition)return!0;if(o&&i>=0){if(i&1024)return!0;if(i&16)return t?Wa(t,c,y):!!c;if(i&8){const u=l.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(c[d]!==t[d]&&!nt(y,d))return!0}}}else return(r||p)&&(!p||!p.$stable)?!0:t===c?!1:t?c?Wa(t,c,y):!0:!!c;return!1}function Wa(e,l,o){const t=Object.keys(l);if(t.length!==Object.keys(e).length)return!0;for(let r=0;r<t.length;r++){const a=t[r];if(l[a]!==e[a]&&!nt(o,a))return!0}return!1}function Zu({vnode:e,parent:l},o){for(;l&&l.subTree===e;)(e=l.vnode).el=o,l=l.parent}const Bi=e=>e.__isSuspense;function Ju(e,l){l&&l.pendingBranch?rs(e)?l.effects.push(...e):l.effects.push(e):Uu(e)}function de(e,l){if(Us){let o=Us.provides;const t=Us.parent&&Us.parent.provides;t===o&&(o=Us.provides=Object.create(t)),o[e]=l}}function x(e,l,o=!1){const t=Us||Zs;if(t){const r=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return o&&ys(l)?l.call(t.proxy):l}}function nn(e,l){return Xr(e,null,l)}const Ka={};function is(e,l,o){return Xr(e,l,o)}function Xr(e,l,{immediate:o,deep:t,flush:r,onTrack:a,onTrigger:c}=Os){const p=Us;let i,y=!1,u=!1;if(Fs(e)?(i=()=>e.value,y=Jt(e)):Zl(e)?(i=()=>e,t=!0):rs(e)?(u=!0,y=e.some(b=>Zl(b)||Jt(b)),i=()=>e.map(b=>{if(Fs(b))return b.value;if(Zl(b))return El(b);if(ys(b))return al(b,p,2)})):ys(e)?l?i=()=>al(e,p,2):i=()=>{if(!(p&&p.isUnmounted))return f&&f(),$e(e,p,3,[d])}:i=we,l&&t){const b=i;i=()=>El(b())}let f,d=b=>{f=g.onStop=()=>{al(b,p,4)}};if(Ko)return d=we,l?o&&$e(l,p,3,[i(),u?[]:void 0,d]):i(),we;let m=u?[]:Ka;const B=()=>{if(!!g.active)if(l){const b=g.run();(t||y||(u?b.some((E,F)=>zo(E,m[F])):zo(b,m)))&&(f&&f(),$e(l,p,3,[b,m===Ka?void 0:m,d]),m=b)}else g.run()};B.allowRecurse=!!l;let C;r==="sync"?C=B:r==="post"?C=()=>qs(B,p&&p.suspense):C=()=>Hu(B);const g=new zr(i,C);return l?o?B():m=g.run():r==="post"?qs(g.run.bind(g),p&&p.suspense):g.run(),()=>{g.stop(),p&&p.scope&&Nr(p.scope.effects,g)}}function Xu(e,l,o){const t=this.proxy,r=Ks(e)?e.includes(".")?Ai(t,e):()=>t[e]:e.bind(t,t);let a;ys(l)?a=l:(a=l.handler,o=l);const c=Us;eo(this);const p=Xr(r,a.bind(t),o);return c?eo(c):wl(),p}function Ai(e,l){const o=l.split(".");return()=>{let t=e;for(let r=0;r<o.length&&t;r++)t=t[o[r]];return t}}function El(e,l){if(!zs(e)||e.__v_skip||(l=l||new Set,l.has(e)))return e;if(l.add(e),Fs(e))El(e.value,l);else if(rs(e))for(let o=0;o<e.length;o++)El(e[o],l);else if(Wp(e)||Yl(e))e.forEach(o=>{El(o,l)});else if(Zp(e))for(const o in e)El(e[o],l);return e}function vi(e,l){e.shapeFlag&6&&e.component?vi(e.component.subTree,l):e.shapeFlag&128?(e.ssContent.transition=l.clone(e.ssContent),e.ssFallback.transition=l.clone(e.ssFallback)):e.transition=l}function bs(e){return ys(e)?{setup:e,name:e.name}:e}const Jl=e=>!!e.type.__asyncLoader,Di=e=>e.type.__isKeepAlive,Gu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:l}){const o=Ml(),t=o.ctx;if(!t.renderer)return()=>{const E=l.default&&l.default();return E&&E.length===1?E[0]:E};const r=new Map,a=new Set;let c=null;const p=o.suspense,{renderer:{p:i,m:y,um:u,o:{createElement:f}}}=t,d=f("div");t.activate=(E,F,k,I,T)=>{const J=E.component;y(E,F,k,0,p),i(J.vnode,E,F,k,J,p,I,E.slotScopeIds,T),qs(()=>{J.isDeactivated=!1,J.a&&bo(J.a);const as=E.props&&E.props.onVnodeMounted;as&&ve(as,J.parent,E)},p)},t.deactivate=E=>{const F=E.component;y(E,d,null,1,p),qs(()=>{F.da&&bo(F.da);const k=E.props&&E.props.onVnodeUnmounted;k&&ve(k,F.parent,E),F.isDeactivated=!0},p)};function m(E){gt(E),u(E,o,p,!0)}function B(E){r.forEach((F,k)=>{const I=tr(F.type);I&&(!E||!E(I))&&C(k)})}function C(E){const F=r.get(E);!c||F.type!==c.type?m(F):c&&gt(c),r.delete(E),a.delete(E)}is(()=>[e.include,e.exclude],([E,F])=>{E&&B(k=>Eo(E,k)),F&&B(k=>!Eo(F,k))},{flush:"post",deep:!0});let g=null;const b=()=>{g!=null&&r.set(g,Ct(o.subTree))};return ao(b),Ei(b),at(()=>{r.forEach(E=>{const{subTree:F,suspense:k}=o,I=Ct(F);if(E.type===I.type){gt(I);const T=I.component.da;T&&qs(T,k);return}m(E)})}),()=>{if(g=null,!l.default)return null;const E=l.default(),F=E[0];if(E.length>1)return c=null,E;if(!so(F)||!(F.shapeFlag&4)&&!(F.shapeFlag&128))return c=null,F;let k=Ct(F);const I=k.type,T=tr(Jl(k)?k.type.__asyncResolved||{}:I),{include:J,exclude:as,max:us}=e;if(J&&(!T||!Eo(J,T))||as&&T&&Eo(as,T))return c=k,F;const ms=k.key==null?I:k.key,As=r.get(ms);return k.el&&(k=Sl(k),F.shapeFlag&128&&(F.ssContent=k)),g=ms,As?(k.el=As.el,k.component=As.component,k.transition&&vi(k,k.transition),k.shapeFlag|=512,a.delete(ms),a.add(ms)):(a.add(ms),us&&a.size>parseInt(us,10)&&C(a.values().next().value)),k.shapeFlag|=256,c=k,Bi(F.type)?F:k}}},gi=Gu;function Eo(e,l){return rs(e)?e.some(o=>Eo(o,l)):Ks(e)?e.split(",").includes(l):e.test?e.test(l):!1}function Qu(e,l){Ci(e,"a",l)}function s5(e,l){Ci(e,"da",l)}function Ci(e,l,o=Us){const t=e.__wdc||(e.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(rt(l,t,o),o){let r=o.parent;for(;r&&r.parent;)Di(r.parent.vnode)&&e5(t,l,o,r),r=r.parent}}function e5(e,l,o,t){const r=rt(l,e,t,!0);ct(()=>{Nr(t[l],r)},o)}function gt(e){let l=e.shapeFlag;l&256&&(l-=256),l&512&&(l-=512),e.shapeFlag=l}function Ct(e){return e.shapeFlag&128?e.ssContent:e}function rt(e,l,o=Us,t=!1){if(o){const r=o[e]||(o[e]=[]),a=l.__weh||(l.__weh=(...c)=>{if(o.isUnmounted)return;to(),eo(o);const p=$e(l,o,e,c);return wl(),ro(),p});return t?r.unshift(a):r.push(a),a}}const Xe=e=>(l,o=Us)=>(!Ko||e==="sp")&&rt(e,l,o),_i=Xe("bm"),ao=Xe("m"),l5=Xe("bu"),Ei=Xe("u"),at=Xe("bum"),ct=Xe("um"),o5=Xe("sp"),n5=Xe("rtg"),t5=Xe("rtc");function r5(e,l=Us){rt("ec",e,l)}function He(e,l){const o=Zs;if(o===null)return e;const t=it(o)||o.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<l.length;a++){let[c,p,i,y=Os]=l[a];ys(c)&&(c={mounted:c,updated:c}),c.deep&&El(p),r.push({dir:c,instance:t,value:p,oldValue:void 0,arg:i,modifiers:y})}return e}function ml(e,l,o,t){const r=e.dirs,a=l&&l.dirs;for(let c=0;c<r.length;c++){const p=r[c];a&&(p.oldValue=a[c].value);let i=p.dir[t];i&&(to(),$e(i,o,8,[e.el,p,e,l]),ro())}}const Fi="components",a5="directives";function Tn(e,l){return bi(Fi,e,!0,l)||e}const c5=Symbol();function Gr(e){return bi(a5,e)}function bi(e,l,o=!0,t=!1){const r=Zs||Us;if(r){const a=r.type;if(e===Fi){const p=tr(a,!1);if(p&&(p===l||p===Ie(l)||p===Rr(Ie(l))))return a}const c=Ya(r[e]||a[e],l)||Ya(r.appContext[e],l);return!c&&t?a:c}}function Ya(e,l){return e&&(e[l]||e[Ie(l)]||e[Rr(Ie(l))])}function tn(e,l,o,t){let r;const a=o&&o[t];if(rs(e)||Ks(e)){r=new Array(e.length);for(let c=0,p=e.length;c<p;c++)r[c]=l(e[c],c,void 0,a&&a[c])}else if(typeof e=="number"){r=new Array(e);for(let c=0;c<e;c++)r[c]=l(c+1,c,void 0,a&&a[c])}else if(zs(e))if(e[Symbol.iterator])r=Array.from(e,(c,p)=>l(c,p,void 0,a&&a[p]));else{const c=Object.keys(e);r=new Array(c.length);for(let p=0,i=c.length;p<i;p++){const y=c[p];r[p]=l(e[y],y,p,a&&a[p])}}else r=[];return o&&(o[t]=r),r}function Ze(e,l,o={},t,r){if(Zs.isCE||Zs.parent&&Jl(Zs.parent)&&Zs.parent.isCE)return Z("slot",l==="default"?null:{name:l},t&&t());let a=e[l];a&&a._c&&(a._d=!1),v();const c=a&&xi(a(o)),p=S(Cs,{key:o.key||`_${l}`},c||(t?t():[]),c&&e._===1?64:-2);return!r&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),a&&a._c&&(a._d=!0),p}function xi(e){return e.some(l=>so(l)?!(l.type===dl||l.type===Cs&&!xi(l.children)):!0)?e:null}const Qt=e=>e?ji(e)?it(e)||e.proxy:Qt(e.parent):null,Nn=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qt(e.parent),$root:e=>Qt(e.root),$emit:e=>e.emit,$options:e=>wi(e),$forceUpdate:e=>e.f||(e.f=()=>yi(e.update)),$nextTick:e=>e.n||(e.n=Ws.bind(e.proxy)),$watch:e=>Xu.bind(e)}),p5={get({_:e},l){const{ctx:o,setupState:t,data:r,props:a,accessCache:c,type:p,appContext:i}=e;let y;if(l[0]!=="$"){const m=c[l];if(m!==void 0)switch(m){case 1:return t[l];case 2:return r[l];case 4:return o[l];case 3:return a[l]}else{if(t!==Os&&Bs(t,l))return c[l]=1,t[l];if(r!==Os&&Bs(r,l))return c[l]=2,r[l];if((y=e.propsOptions[0])&&Bs(y,l))return c[l]=3,a[l];if(o!==Os&&Bs(o,l))return c[l]=4,o[l];sr&&(c[l]=0)}}const u=Nn[l];let f,d;if(u)return l==="$attrs"&&Be(e,"get",l),u(e);if((f=p.__cssModules)&&(f=f[l]))return f;if(o!==Os&&Bs(o,l))return c[l]=4,o[l];if(d=i.config.globalProperties,Bs(d,l))return d[l]},set({_:e},l,o){const{data:t,setupState:r,ctx:a}=e;return r!==Os&&Bs(r,l)?(r[l]=o,!0):t!==Os&&Bs(t,l)?(t[l]=o,!0):Bs(e.props,l)||l[0]==="$"&&l.slice(1)in e?!1:(a[l]=o,!0)},has({_:{data:e,setupState:l,accessCache:o,ctx:t,appContext:r,propsOptions:a}},c){let p;return!!o[c]||e!==Os&&Bs(e,c)||l!==Os&&Bs(l,c)||(p=a[0])&&Bs(p,c)||Bs(t,c)||Bs(Nn,c)||Bs(r.config.globalProperties,c)},defineProperty(e,l,o){return o.get!=null?e._.accessCache[l]=0:Bs(o,"value")&&this.set(e,l,o.value,null),Reflect.defineProperty(e,l,o)}};let sr=!0;function i5(e){const l=wi(e),o=e.proxy,t=e.ctx;sr=!1,l.beforeCreate&&Za(l.beforeCreate,e,"bc");const{data:r,computed:a,methods:c,watch:p,provide:i,inject:y,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:B,activated:C,deactivated:g,beforeDestroy:b,beforeUnmount:E,destroyed:F,unmounted:k,render:I,renderTracked:T,renderTriggered:J,errorCaptured:as,serverPrefetch:us,expose:ms,inheritAttrs:As,components:Ls,directives:js,filters:Ys}=l;if(y&&y5(y,t,null,e.appContext.config.unwrapInjectedRef),c)for(const ns in c){const ls=c[ns];ys(ls)&&(t[ns]=ls.bind(o))}if(r){const ns=r.call(o,o);zs(ns)&&(e.data=Ts(ns))}if(sr=!0,a)for(const ns in a){const ls=a[ns],hs=ys(ls)?ls.bind(o,o):ys(ls.get)?ls.get.bind(o,o):we,Le=!ys(ls)&&ys(ls.set)?ls.set.bind(o):we,Gs=w({get:hs,set:Le});Object.defineProperty(t,ns,{enumerable:!0,configurable:!0,get:()=>Gs.value,set:Ae=>Gs.value=Ae})}if(p)for(const ns in p)ki(p[ns],t,o,ns);if(i){const ns=ys(i)?i.call(o):i;Reflect.ownKeys(ns).forEach(ls=>{de(ls,ns[ls])})}u&&Za(u,e,"c");function os(ns,ls){rs(ls)?ls.forEach(hs=>ns(hs.bind(o))):ls&&ns(ls.bind(o))}if(os(_i,f),os(ao,d),os(l5,m),os(Ei,B),os(Qu,C),os(s5,g),os(r5,as),os(t5,T),os(n5,J),os(at,E),os(ct,k),os(o5,us),rs(ms))if(ms.length){const ns=e.exposed||(e.exposed={});ms.forEach(ls=>{Object.defineProperty(ns,ls,{get:()=>o[ls],set:hs=>o[ls]=hs})})}else e.exposed||(e.exposed={});I&&e.render===we&&(e.render=I),As!=null&&(e.inheritAttrs=As),Ls&&(e.components=Ls),js&&(e.directives=js)}function y5(e,l,o=we,t=!1){rs(e)&&(e=er(e));for(const r in e){const a=e[r];let c;zs(a)?"default"in a?c=x(a.from||r,a.default,!0):c=x(a.from||r):c=x(a),Fs(c)&&t?Object.defineProperty(l,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:p=>c.value=p}):l[r]=c}}function Za(e,l,o){$e(rs(e)?e.map(t=>t.bind(l.proxy)):e.bind(l.proxy),l,o)}function ki(e,l,o,t){const r=t.includes(".")?Ai(o,t):()=>o[t];if(Ks(e)){const a=l[e];ys(a)&&is(r,a)}else if(ys(e))is(r,e.bind(o));else if(zs(e))if(rs(e))e.forEach(a=>ki(a,l,o,t));else{const a=ys(e.handler)?e.handler.bind(o):l[e.handler];ys(a)&&is(r,a,e)}}function wi(e){const l=e.type,{mixins:o,extends:t}=l,{mixins:r,optionsCache:a,config:{optionMergeStrategies:c}}=e.appContext,p=a.get(l);let i;return p?i=p:!r.length&&!o&&!t?i=l:(i={},r.length&&r.forEach(y=>jn(i,y,c,!0)),jn(i,l,c)),a.set(l,i),i}function jn(e,l,o,t=!1){const{mixins:r,extends:a}=l;a&&jn(e,a,o,!0),r&&r.forEach(c=>jn(e,c,o,!0));for(const c in l)if(!(t&&c==="expose")){const p=u5[c]||o&&o[c];e[c]=p?p(e[c],l[c]):l[c]}return e}const u5={data:Ja,props:vl,emits:vl,methods:vl,computed:vl,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:vl,directives:vl,watch:f5,provide:Ja,inject:d5};function Ja(e,l){return l?e?function(){return ae(ys(e)?e.call(this,this):e,ys(l)?l.call(this,this):l)}:l:e}function d5(e,l){return vl(er(e),er(l))}function er(e){if(rs(e)){const l={};for(let o=0;o<e.length;o++)l[e[o]]=e[o];return l}return e}function se(e,l){return e?[...new Set([].concat(e,l))]:l}function vl(e,l){return e?ae(ae(Object.create(null),e),l):l}function f5(e,l){if(!e)return l;if(!l)return e;const o=ae(Object.create(null),e);for(const t in l)o[t]=se(e[t],l[t]);return o}function m5(e,l,o,t=!1){const r={},a={};Mn(a,pt,1),e.propsDefaults=Object.create(null),$i(e,l,r,a);for(const c in e.propsOptions[0])c in r||(r[c]=void 0);o?e.props=t?r:$u(r):e.type.props?e.props=r:e.props=a,e.attrs=a}function h5(e,l,o,t){const{props:r,attrs:a,vnode:{patchFlag:c}}=e,p=_s(r),[i]=e.propsOptions;let y=!1;if((t||c>0)&&!(c&16)){if(c&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(nt(e.emitsOptions,d))continue;const m=l[d];if(i)if(Bs(a,d))m!==a[d]&&(a[d]=m,y=!0);else{const B=Ie(d);r[B]=lr(i,p,B,m,e,!1)}else m!==a[d]&&(a[d]=m,y=!0)}}}else{$i(e,l,r,a)&&(y=!0);let u;for(const f in p)(!l||!Bs(l,f)&&((u=Qn(f))===f||!Bs(l,u)))&&(i?o&&(o[f]!==void 0||o[u]!==void 0)&&(r[f]=lr(i,p,f,void 0,e,!0)):delete r[f]);if(a!==p)for(const f in a)(!l||!Bs(l,f)&&!0)&&(delete a[f],y=!0)}y&&Ye(e,"set","$attrs")}function $i(e,l,o,t){const[r,a]=e.propsOptions;let c=!1,p;if(l)for(let i in l){if(Fn(i))continue;const y=l[i];let u;r&&Bs(r,u=Ie(i))?!a||!a.includes(u)?o[u]=y:(p||(p={}))[u]=y:nt(e.emitsOptions,i)||(!(i in t)||y!==t[i])&&(t[i]=y,c=!0)}if(a){const i=_s(o),y=p||Os;for(let u=0;u<a.length;u++){const f=a[u];o[f]=lr(r,i,f,y[f],e,!Bs(y,f))}}return c}function lr(e,l,o,t,r,a){const c=e[o];if(c!=null){const p=Bs(c,"default");if(p&&t===void 0){const i=c.default;if(c.type!==Function&&ys(i)){const{propsDefaults:y}=r;o in y?t=y[o]:(eo(r),t=y[o]=i.call(null,l),wl())}else t=i}c[0]&&(a&&!p?t=!1:c[1]&&(t===""||t===Qn(o))&&(t=!0))}return t}function Oi(e,l,o=!1){const t=l.propsCache,r=t.get(e);if(r)return r;const a=e.props,c={},p=[];let i=!1;if(!ys(e)){const u=f=>{i=!0;const[d,m]=Oi(f,l,!0);ae(c,d),m&&p.push(...m)};!o&&l.mixins.length&&l.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!i)return t.set(e,Kl),Kl;if(rs(a))for(let u=0;u<a.length;u++){const f=Ie(a[u]);Xa(f)&&(c[f]=Os)}else if(a)for(const u in a){const f=Ie(u);if(Xa(f)){const d=a[u],m=c[f]=rs(d)||ys(d)?{type:d}:d;if(m){const B=sc(Boolean,m.type),C=sc(String,m.type);m[0]=B>-1,m[1]=C<0||B<C,(B>-1||Bs(m,"default"))&&p.push(f)}}}const y=[c,p];return t.set(e,y),y}function Xa(e){return e[0]!=="$"}function Ga(e){const l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:e===null?"null":""}function Qa(e,l){return Ga(e)===Ga(l)}function sc(e,l){return rs(l)?l.findIndex(o=>Qa(o,e)):ys(l)&&Qa(l,e)?0:-1}const Si=e=>e[0]==="_"||e==="$stable",Qr=e=>rs(e)?e.map(Ne):[Ne(e)],B5=(e,l,o)=>{if(l._n)return l;const t=N((...r)=>Qr(l(...r)),o);return t._c=!1,t},Mi=(e,l,o)=>{const t=e._ctx;for(const r in e){if(Si(r))continue;const a=e[r];if(ys(a))l[r]=B5(r,a,t);else if(a!=null){const c=Qr(a);l[r]=()=>c}}},Pi=(e,l)=>{const o=Qr(l);e.slots.default=()=>o},A5=(e,l)=>{if(e.vnode.shapeFlag&32){const o=l._;o?(e.slots=_s(l),Mn(l,"_",o)):Mi(l,e.slots={})}else e.slots={},l&&Pi(e,l);Mn(e.slots,pt,1)},v5=(e,l,o)=>{const{vnode:t,slots:r}=e;let a=!0,c=Os;if(t.shapeFlag&32){const p=l._;p?o&&p===1?a=!1:(ae(r,l),!o&&p===1&&delete r._):(a=!l.$stable,Mi(l,r)),c=l}else l&&(Pi(e,l),c={default:1});if(a)for(const p in r)!Si(p)&&!(p in c)&&delete r[p]};function Li(){return{app:null,config:{isNativeTag:Ky,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D5=0;function g5(e,l){return function(t,r=null){ys(t)||(t=Object.assign({},t)),r!=null&&!zs(r)&&(r=null);const a=Li(),c=new Set;let p=!1;const i=a.app={_uid:D5++,_component:t,_props:r,_container:null,_context:a,_instance:null,version:V5,get config(){return a.config},set config(y){},use(y,...u){return c.has(y)||(y&&ys(y.install)?(c.add(y),y.install(i,...u)):ys(y)&&(c.add(y),y(i,...u))),i},mixin(y){return a.mixins.includes(y)||a.mixins.push(y),i},component(y,u){return u?(a.components[y]=u,i):a.components[y]},directive(y,u){return u?(a.directives[y]=u,i):a.directives[y]},mount(y,u,f){if(!p){const d=Z(t,r);return d.appContext=a,u&&l?l(d,y):e(d,y,f),p=!0,i._container=y,y.__vue_app__=i,it(d.component)||d.component.proxy}},unmount(){p&&(e(null,i._container),delete i._container.__vue_app__)},provide(y,u){return a.provides[y]=u,i}};return i}}function or(e,l,o,t,r=!1){if(rs(e)){e.forEach((d,m)=>or(d,l&&(rs(l)?l[m]:l),o,t,r));return}if(Jl(t)&&!r)return;const a=t.shapeFlag&4?it(t.component)||t.component.proxy:t.el,c=r?null:a,{i:p,r:i}=e,y=l&&l.r,u=p.refs===Os?p.refs={}:p.refs,f=p.setupState;if(y!=null&&y!==i&&(Ks(y)?(u[y]=null,Bs(f,y)&&(f[y]=null)):Fs(y)&&(y.value=null)),ys(i))al(i,p,12,[c,u]);else{const d=Ks(i),m=Fs(i);if(d||m){const B=()=>{if(e.f){const C=d?u[i]:i.value;r?rs(C)&&Nr(C,a):rs(C)?C.includes(a)||C.push(a):d?(u[i]=[a],Bs(f,i)&&(f[i]=u[i])):(i.value=[a],e.k&&(u[e.k]=i.value))}else d?(u[i]=c,Bs(f,i)&&(f[i]=c)):m&&(i.value=c,e.k&&(u[e.k]=c))};c?(B.id=-1,qs(B,o)):B()}}}const qs=Ju;function C5(e){return _5(e)}function _5(e,l){const o=su();o.__VUE__=!0;const{insert:t,remove:r,patchProp:a,createElement:c,createText:p,createComment:i,setText:y,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=we,cloneNode:B,insertStaticContent:C}=e,g=(h,A,_,P=null,M=null,R=null,Y=!1,V=null,z=!!A.dynamicChildren)=>{if(h===A)return;h&&!fo(h,A)&&(P=Q(h),ne(h,M,R,!0),h=null),A.patchFlag===-2&&(z=!1,A.dynamicChildren=null);const{type:L,ref:ss,shapeFlag:G}=A;switch(L){case ea:b(h,A,_,P);break;case dl:E(h,A,_,P);break;case _t:h==null&&F(A,_,P,Y);break;case Cs:js(h,A,_,P,M,R,Y,V,z);break;default:G&1?T(h,A,_,P,M,R,Y,V,z):G&6?Ys(h,A,_,P,M,R,Y,V,z):(G&64||G&128)&&L.process(h,A,_,P,M,R,Y,V,z,Ss)}ss!=null&&M&&or(ss,h&&h.ref,R,A||h,!A)},b=(h,A,_,P)=>{if(h==null)t(A.el=p(A.children),_,P);else{const M=A.el=h.el;A.children!==h.children&&y(M,A.children)}},E=(h,A,_,P)=>{h==null?t(A.el=i(A.children||""),_,P):A.el=h.el},F=(h,A,_,P)=>{[h.el,h.anchor]=C(h.children,A,_,P,h.el,h.anchor)},k=({el:h,anchor:A},_,P)=>{let M;for(;h&&h!==A;)M=d(h),t(h,_,P),h=M;t(A,_,P)},I=({el:h,anchor:A})=>{let _;for(;h&&h!==A;)_=d(h),r(h),h=_;r(A)},T=(h,A,_,P,M,R,Y,V,z)=>{Y=Y||A.type==="svg",h==null?J(A,_,P,M,R,Y,V,z):ms(h,A,M,R,Y,V,z)},J=(h,A,_,P,M,R,Y,V)=>{let z,L;const{type:ss,props:G,shapeFlag:es,transition:ts,patchFlag:vs,dirs:ks}=h;if(h.el&&B!==void 0&&vs===-1)z=h.el=B(h.el);else{if(z=h.el=c(h.type,R,G&&G.is,G),es&8?u(z,h.children):es&16&&us(h.children,z,null,P,M,R&&ss!=="foreignObject",Y,V),ks&&ml(h,null,P,"created"),G){for(const Ms in G)Ms!=="value"&&!Fn(Ms)&&a(z,Ms,null,G[Ms],R,h.children,P,M,j);"value"in G&&a(z,"value",null,G.value),(L=G.onVnodeBeforeMount)&&ve(L,P,h)}as(z,h,h.scopeId,Y,P)}ks&&ml(h,null,P,"beforeMount");const ws=(!M||M&&!M.pendingBranch)&&ts&&!ts.persisted;ws&&ts.beforeEnter(z),t(z,A,_),((L=G&&G.onVnodeMounted)||ws||ks)&&qs(()=>{L&&ve(L,P,h),ws&&ts.enter(z),ks&&ml(h,null,P,"mounted")},M)},as=(h,A,_,P,M)=>{if(_&&m(h,_),P)for(let R=0;R<P.length;R++)m(h,P[R]);if(M){let R=M.subTree;if(A===R){const Y=M.vnode;as(h,Y,Y.scopeId,Y.slotScopeIds,M.parent)}}},us=(h,A,_,P,M,R,Y,V,z=0)=>{for(let L=z;L<h.length;L++){const ss=h[L]=V?ol(h[L]):Ne(h[L]);g(null,ss,A,_,P,M,R,Y,V)}},ms=(h,A,_,P,M,R,Y)=>{const V=A.el=h.el;let{patchFlag:z,dynamicChildren:L,dirs:ss}=A;z|=h.patchFlag&16;const G=h.props||Os,es=A.props||Os;let ts;_&&hl(_,!1),(ts=es.onVnodeBeforeUpdate)&&ve(ts,_,A,h),ss&&ml(A,h,_,"beforeUpdate"),_&&hl(_,!0);const vs=M&&A.type!=="foreignObject";if(L?As(h.dynamicChildren,L,V,_,P,vs,R):Y||hs(h,A,V,null,_,P,vs,R,!1),z>0){if(z&16)Ls(V,A,G,es,_,P,M);else if(z&2&&G.class!==es.class&&a(V,"class",null,es.class,M),z&4&&a(V,"style",G.style,es.style,M),z&8){const ks=A.dynamicProps;for(let ws=0;ws<ks.length;ws++){const Ms=ks[ws],Ee=G[Ms],Nl=es[Ms];(Nl!==Ee||Ms==="value")&&a(V,Ms,Ee,Nl,M,h.children,_,P,j)}}z&1&&h.children!==A.children&&u(V,A.children)}else!Y&&L==null&&Ls(V,A,G,es,_,P,M);((ts=es.onVnodeUpdated)||ss)&&qs(()=>{ts&&ve(ts,_,A,h),ss&&ml(A,h,_,"updated")},P)},As=(h,A,_,P,M,R,Y)=>{for(let V=0;V<A.length;V++){const z=h[V],L=A[V],ss=z.el&&(z.type===Cs||!fo(z,L)||z.shapeFlag&70)?f(z.el):_;g(z,L,ss,null,P,M,R,Y,!0)}},Ls=(h,A,_,P,M,R,Y)=>{if(_!==P){for(const V in P){if(Fn(V))continue;const z=P[V],L=_[V];z!==L&&V!=="value"&&a(h,V,L,z,Y,A.children,M,R,j)}if(_!==Os)for(const V in _)!Fn(V)&&!(V in P)&&a(h,V,_[V],null,Y,A.children,M,R,j);"value"in P&&a(h,"value",_.value,P.value)}},js=(h,A,_,P,M,R,Y,V,z)=>{const L=A.el=h?h.el:p(""),ss=A.anchor=h?h.anchor:p("");let{patchFlag:G,dynamicChildren:es,slotScopeIds:ts}=A;ts&&(V=V?V.concat(ts):ts),h==null?(t(L,_,P),t(ss,_,P),us(A.children,_,ss,M,R,Y,V,z)):G>0&&G&64&&es&&h.dynamicChildren?(As(h.dynamicChildren,es,_,M,R,Y,V),(A.key!=null||M&&A===M.subTree)&&sa(h,A,!0)):hs(h,A,_,ss,M,R,Y,V,z)},Ys=(h,A,_,P,M,R,Y,V,z)=>{A.slotScopeIds=V,h==null?A.shapeFlag&512?M.ctx.activate(A,_,P,Y,z):xs(A,_,P,M,R,Y,z):os(h,A,z)},xs=(h,A,_,P,M,R,Y)=>{const V=h.component=M5(h,P,M);if(Di(h)&&(V.ctx.renderer=Ss),P5(V),V.asyncDep){if(M&&M.registerDep(V,ns),!h.el){const z=V.subTree=Z(dl);E(null,z,A,_)}return}ns(V,h,A,_,M,R,Y)},os=(h,A,_)=>{const P=A.component=h.component;if(Yu(h,A,_))if(P.asyncDep&&!P.asyncResolved){ls(P,A,_);return}else P.next=A,zu(P.update),P.update();else A.el=h.el,P.vnode=A},ns=(h,A,_,P,M,R,Y)=>{const V=()=>{if(h.isMounted){let{next:ss,bu:G,u:es,parent:ts,vnode:vs}=h,ks=ss,ws;hl(h,!1),ss?(ss.el=vs.el,ls(h,ss,Y)):ss=vs,G&&bo(G),(ws=ss.props&&ss.props.onVnodeBeforeUpdate)&&ve(ws,ts,ss,vs),hl(h,!0);const Ms=Dt(h),Ee=h.subTree;h.subTree=Ms,g(Ee,Ms,f(Ee.el),Q(Ee),h,M,R),ss.el=Ms.el,ks===null&&Zu(h,Ms.el),es&&qs(es,M),(ws=ss.props&&ss.props.onVnodeUpdated)&&qs(()=>ve(ws,ts,ss,vs),M)}else{let ss;const{el:G,props:es}=A,{bm:ts,m:vs,parent:ks}=h,ws=Jl(A);if(hl(h,!1),ts&&bo(ts),!ws&&(ss=es&&es.onVnodeBeforeMount)&&ve(ss,ks,A),hl(h,!0),G&&ps){const Ms=()=>{h.subTree=Dt(h),ps(G,h.subTree,h,M,null)};ws?A.type.__asyncLoader().then(()=>!h.isUnmounted&&Ms()):Ms()}else{const Ms=h.subTree=Dt(h);g(null,Ms,_,P,h,M,R),A.el=Ms.el}if(vs&&qs(vs,M),!ws&&(ss=es&&es.onVnodeMounted)){const Ms=A;qs(()=>ve(ss,ks,Ms),M)}(A.shapeFlag&256||ks&&Jl(ks.vnode)&&ks.vnode.shapeFlag&256)&&h.a&&qs(h.a,M),h.isMounted=!0,A=_=P=null}},z=h.effect=new zr(V,()=>yi(L),h.scope),L=h.update=()=>z.run();L.id=h.uid,hl(h,!0),L()},ls=(h,A,_)=>{A.component=h;const P=h.vnode.props;h.vnode=A,h.next=null,h5(h,A.props,P,_),v5(h,A.children,_),to(),ot(void 0,h.update),ro()},hs=(h,A,_,P,M,R,Y,V,z=!1)=>{const L=h&&h.children,ss=h?h.shapeFlag:0,G=A.children,{patchFlag:es,shapeFlag:ts}=A;if(es>0){if(es&128){Gs(L,G,_,P,M,R,Y,V,z);return}else if(es&256){Le(L,G,_,P,M,R,Y,V,z);return}}ts&8?(ss&16&&j(L,M,R),G!==L&&u(_,G)):ss&16?ts&16?Gs(L,G,_,P,M,R,Y,V,z):j(L,M,R,!0):(ss&8&&u(_,""),ts&16&&us(G,_,P,M,R,Y,V,z))},Le=(h,A,_,P,M,R,Y,V,z)=>{h=h||Kl,A=A||Kl;const L=h.length,ss=A.length,G=Math.min(L,ss);let es;for(es=0;es<G;es++){const ts=A[es]=z?ol(A[es]):Ne(A[es]);g(h[es],ts,_,null,M,R,Y,V,z)}L>ss?j(h,M,R,!0,!1,G):us(A,_,P,M,R,Y,V,z,G)},Gs=(h,A,_,P,M,R,Y,V,z)=>{let L=0;const ss=A.length;let G=h.length-1,es=ss-1;for(;L<=G&&L<=es;){const ts=h[L],vs=A[L]=z?ol(A[L]):Ne(A[L]);if(fo(ts,vs))g(ts,vs,_,null,M,R,Y,V,z);else break;L++}for(;L<=G&&L<=es;){const ts=h[G],vs=A[es]=z?ol(A[es]):Ne(A[es]);if(fo(ts,vs))g(ts,vs,_,null,M,R,Y,V,z);else break;G--,es--}if(L>G){if(L<=es){const ts=es+1,vs=ts<ss?A[ts].el:P;for(;L<=es;)g(null,A[L]=z?ol(A[L]):Ne(A[L]),_,vs,M,R,Y,V,z),L++}}else if(L>es)for(;L<=G;)ne(h[L],M,R,!0),L++;else{const ts=L,vs=L,ks=new Map;for(L=vs;L<=es;L++){const ce=A[L]=z?ol(A[L]):Ne(A[L]);ce.key!=null&&ks.set(ce.key,L)}let ws,Ms=0;const Ee=es-vs+1;let Nl=!1,Sa=0;const uo=new Array(Ee);for(L=0;L<Ee;L++)uo[L]=0;for(L=ts;L<=G;L++){const ce=h[L];if(Ms>=Ee){ne(ce,M,R,!0);continue}let Te;if(ce.key!=null)Te=ks.get(ce.key);else for(ws=vs;ws<=es;ws++)if(uo[ws-vs]===0&&fo(ce,A[ws])){Te=ws;break}Te===void 0?ne(ce,M,R,!0):(uo[Te-vs]=L+1,Te>=Sa?Sa=Te:Nl=!0,g(ce,A[Te],_,null,M,R,Y,V,z),Ms++)}const Ma=Nl?E5(uo):Kl;for(ws=Ma.length-1,L=Ee-1;L>=0;L--){const ce=vs+L,Te=A[ce],Pa=ce+1<ss?A[ce+1].el:P;uo[L]===0?g(null,Te,_,Pa,M,R,Y,V,z):Nl&&(ws<0||L!==Ma[ws]?Ae(Te,_,Pa,2):ws--)}}},Ae=(h,A,_,P,M=null)=>{const{el:R,type:Y,transition:V,children:z,shapeFlag:L}=h;if(L&6){Ae(h.component.subTree,A,_,P);return}if(L&128){h.suspense.move(A,_,P);return}if(L&64){Y.move(h,A,_,Ss);return}if(Y===Cs){t(R,A,_);for(let G=0;G<z.length;G++)Ae(z[G],A,_,P);t(h.anchor,A,_);return}if(Y===_t){k(h,A,_);return}if(P!==2&&L&1&&V)if(P===0)V.beforeEnter(R),t(R,A,_),qs(()=>V.enter(R),M);else{const{leave:G,delayLeave:es,afterLeave:ts}=V,vs=()=>t(R,A,_),ks=()=>{G(R,()=>{vs(),ts&&ts()})};es?es(R,vs,ks):ks()}else t(R,A,_)},ne=(h,A,_,P=!1,M=!1)=>{const{type:R,props:Y,ref:V,children:z,dynamicChildren:L,shapeFlag:ss,patchFlag:G,dirs:es}=h;if(V!=null&&or(V,null,_,h,!0),ss&256){A.ctx.deactivate(h);return}const ts=ss&1&&es,vs=!Jl(h);let ks;if(vs&&(ks=Y&&Y.onVnodeBeforeUnmount)&&ve(ks,A,h),ss&6)X(h.component,_,P);else{if(ss&128){h.suspense.unmount(_,P);return}ts&&ml(h,null,A,"beforeUnmount"),ss&64?h.type.remove(h,A,_,M,Ss,P):L&&(R!==Cs||G>0&&G&64)?j(L,A,_,!1,!0):(R===Cs&&G&384||!M&&ss&16)&&j(z,A,_),P&&Tl(h)}(vs&&(ks=Y&&Y.onVnodeUnmounted)||ts)&&qs(()=>{ks&&ve(ks,A,h),ts&&ml(h,null,A,"unmounted")},_)},Tl=h=>{const{type:A,el:_,anchor:P,transition:M}=h;if(A===Cs){O(_,P);return}if(A===_t){I(h);return}const R=()=>{r(_),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(h.shapeFlag&1&&M&&!M.persisted){const{leave:Y,delayLeave:V}=M,z=()=>Y(_,R);V?V(h.el,R,z):z()}else R()},O=(h,A)=>{let _;for(;h!==A;)_=d(h),r(h),h=_;r(A)},X=(h,A,_)=>{const{bum:P,scope:M,update:R,subTree:Y,um:V}=h;P&&bo(P),M.stop(),R&&(R.active=!1,ne(Y,h,A,_)),V&&qs(V,A),qs(()=>{h.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},j=(h,A,_,P=!1,M=!1,R=0)=>{for(let Y=R;Y<h.length;Y++)ne(h[Y],A,_,P,M)},Q=h=>h.shapeFlag&6?Q(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),Ds=(h,A,_)=>{h==null?A._vnode&&ne(A._vnode,null,null,!0):g(A._vnode||null,h,A,null,null,null,_),fi(),A._vnode=h},Ss={p:g,um:ne,m:Ae,r:Tl,mt:xs,mc:us,pc:hs,pbc:As,n:Q,o:e};let ds,ps;return l&&([ds,ps]=l(Ss)),{render:Ds,hydrate:ds,createApp:g5(Ds,ds)}}function hl({effect:e,update:l},o){e.allowRecurse=l.allowRecurse=o}function sa(e,l,o=!1){const t=e.children,r=l.children;if(rs(t)&&rs(r))for(let a=0;a<t.length;a++){const c=t[a];let p=r[a];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=r[a]=ol(r[a]),p.el=c.el),o||sa(c,p))}}function E5(e){const l=e.slice(),o=[0];let t,r,a,c,p;const i=e.length;for(t=0;t<i;t++){const y=e[t];if(y!==0){if(r=o[o.length-1],e[r]<y){l[t]=r,o.push(t);continue}for(a=0,c=o.length-1;a<c;)p=a+c>>1,e[o[p]]<y?a=p+1:c=p;y<e[o[a]]&&(a>0&&(l[t]=o[a-1]),o[a]=t)}}for(a=o.length,c=o[a-1];a-- >0;)o[a]=c,c=l[c];return o}const F5=e=>e.__isTeleport,wo=e=>e&&(e.disabled||e.disabled===""),ec=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,nr=(e,l)=>{const o=e&&e.to;return Ks(o)?l?l(o):null:o},b5={__isTeleport:!0,process(e,l,o,t,r,a,c,p,i,y){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:B,createText:C,createComment:g}}=y,b=wo(l.props);let{shapeFlag:E,children:F,dynamicChildren:k}=l;if(e==null){const I=l.el=C(""),T=l.anchor=C("");m(I,o,t),m(T,o,t);const J=l.target=nr(l.props,B),as=l.targetAnchor=C("");J&&(m(as,J),c=c||ec(J));const us=(ms,As)=>{E&16&&u(F,ms,As,r,a,c,p,i)};b?us(o,T):J&&us(J,as)}else{l.el=e.el;const I=l.anchor=e.anchor,T=l.target=e.target,J=l.targetAnchor=e.targetAnchor,as=wo(e.props),us=as?o:T,ms=as?I:J;if(c=c||ec(T),k?(d(e.dynamicChildren,k,us,r,a,c,p),sa(e,l,!0)):i||f(e,l,us,ms,r,a,c,p,!1),b)as||vn(l,o,I,y,1);else if((l.props&&l.props.to)!==(e.props&&e.props.to)){const As=l.target=nr(l.props,B);As&&vn(l,As,null,y,0)}else as&&vn(l,T,J,y,1)}},remove(e,l,o,t,{um:r,o:{remove:a}},c){const{shapeFlag:p,children:i,anchor:y,targetAnchor:u,target:f,props:d}=e;if(f&&a(u),(c||!wo(d))&&(a(y),p&16))for(let m=0;m<i.length;m++){const B=i[m];r(B,l,o,!0,!!B.dynamicChildren)}},move:vn,hydrate:x5};function vn(e,l,o,{o:{insert:t},m:r},a=2){a===0&&t(e.targetAnchor,l,o);const{el:c,anchor:p,shapeFlag:i,children:y,props:u}=e,f=a===2;if(f&&t(c,l,o),(!f||wo(u))&&i&16)for(let d=0;d<y.length;d++)r(y[d],l,o,2);f&&t(p,l,o)}function x5(e,l,o,t,r,a,{o:{nextSibling:c,parentNode:p,querySelector:i}},y){const u=l.target=nr(l.props,i);if(u){const f=u._lpa||u.firstChild;if(l.shapeFlag&16)if(wo(l.props))l.anchor=y(c(e),l,p(e),o,t,r,a),l.targetAnchor=f;else{l.anchor=c(e);let d=f;for(;d;)if(d=c(d),d&&d.nodeType===8&&d.data==="teleport anchor"){l.targetAnchor=d,u._lpa=l.targetAnchor&&c(l.targetAnchor);break}y(f,l,u,o,t,r,a)}}return l.anchor&&c(l.anchor)}const k5=b5,Cs=Symbol(void 0),ea=Symbol(void 0),dl=Symbol(void 0),_t=Symbol(void 0),$o=[];let ke=null;function v(e=!1){$o.push(ke=e?null:[])}function w5(){$o.pop(),ke=$o[$o.length-1]||null}let Wo=1;function lc(e){Wo+=e}function Ti(e){return e.dynamicChildren=Wo>0?ke||Kl:null,w5(),Wo>0&&ke&&ke.push(e),e}function K(e,l,o,t,r,a){return Ti(s(e,l,o,t,r,a,!0))}function S(e,l,o,t,r){return Ti(Z(e,l,o,t,r,!0))}function so(e){return e?e.__v_isVNode===!0:!1}function fo(e,l){return e.type===l.type&&e.key===l.key}const pt="__vInternal",Ni=({key:e})=>e!=null?e:null,bn=({ref:e,ref_key:l,ref_for:o})=>e!=null?Ks(e)||Fs(e)||ys(e)?{i:Zs,r:e,k:l,f:!!o}:e:null;function s(e,l=null,o=null,t=0,r=null,a=e===Cs?0:1,c=!1,p=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:l,key:l&&Ni(l),ref:l&&bn(l),scopeId:tt,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:t,dynamicProps:r,dynamicChildren:null,appContext:null};return p?(la(i,o),a&128&&e.normalize(i)):o&&(i.shapeFlag|=Ks(o)?8:16),Wo>0&&!c&&ke&&(i.patchFlag>0||a&6)&&i.patchFlag!==32&&ke.push(i),i}const Z=$5;function $5(e,l=null,o=null,t=0,r=null,a=!1){if((!e||e===c5)&&(e=dl),so(e)){const p=Sl(e,l,!0);return o&&la(p,o),Wo>0&&!a&&ke&&(p.shapeFlag&6?ke[ke.indexOf(e)]=p:ke.push(p)),p.patchFlag|=-2,p}if(j5(e)&&(e=e.__vccOpts),l){l=H(l);let{class:p,style:i}=l;p&&!Ks(p)&&(l.class=Ns(p)),zs(i)&&(ai(i)&&!rs(i)&&(i=ae({},i)),l.style=oe(i))}const c=Ks(e)?1:Bi(e)?128:F5(e)?64:zs(e)?4:ys(e)?2:0;return s(e,l,o,t,r,c,a,!0)}function H(e){return e?ai(e)||pt in e?ae({},e):e:null}function Sl(e,l,o=!1){const{props:t,ref:r,patchFlag:a,children:c}=e,p=l?Je(t||{},l):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Ni(p),ref:l&&l.ref?o&&r?rs(r)?r.concat(bn(l)):[r,bn(l)]:bn(l):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:l&&e.type!==Cs?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Sl(e.ssContent),ssFallback:e.ssFallback&&Sl(e.ssFallback),el:e.el,anchor:e.anchor}}function n(e=" ",l=0){return Z(ea,null,e,l)}function fs(e="",l=!1){return l?(v(),S(dl,null,e)):Z(dl,null,e)}function Ne(e){return e==null||typeof e=="boolean"?Z(dl):rs(e)?Z(Cs,null,e.slice()):typeof e=="object"?ol(e):Z(ea,null,String(e))}function ol(e){return e.el===null||e.memo?e:Sl(e)}function la(e,l){let o=0;const{shapeFlag:t}=e;if(l==null)l=null;else if(rs(l))o=16;else if(typeof l=="object")if(t&65){const r=l.default;r&&(r._c&&(r._d=!1),la(e,r()),r._c&&(r._d=!0));return}else{o=32;const r=l._;!r&&!(pt in l)?l._ctx=Zs:r===3&&Zs&&(Zs.slots._===1?l._=1:(l._=2,e.patchFlag|=1024))}else ys(l)?(l={default:l,_ctx:Zs},o=32):(l=String(l),t&64?(o=16,l=[n(l)]):o=8);e.children=l,e.shapeFlag|=o}function Je(...e){const l={};for(let o=0;o<e.length;o++){const t=e[o];for(const r in t)if(r==="class")l.class!==t.class&&(l.class=Ns([l.class,t.class]));else if(r==="style")l.style=oe([l.style,t.style]);else if(Tr(r)){const a=l[r],c=t[r];c&&a!==c&&!(rs(a)&&a.includes(c))&&(l[r]=a?[].concat(a,c):c)}else r!==""&&(l[r]=t[r])}return l}function ve(e,l,o,t=null){$e(e,l,7,[o,t])}const O5=Li();let S5=0;function M5(e,l,o){const t=e.type,r=(l?l.appContext:e.appContext)||O5,a={uid:S5++,vnode:e,type:t,parent:l,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oi(t,r),emitsOptions:hi(t,r),emit:null,emitted:null,propsDefaults:Os,inheritAttrs:t.inheritAttrs,ctx:Os,data:Os,props:Os,attrs:Os,slots:Os,refs:Os,setupState:Os,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=l?l.root:a,a.emit=qu.bind(null,a),e.ce&&e.ce(a),a}let Us=null;const Ml=()=>Us||Zs,eo=e=>{Us=e,e.scope.on()},wl=()=>{Us&&Us.scope.off(),Us=null};function ji(e){return e.vnode.shapeFlag&4}let Ko=!1;function P5(e,l=!1){Ko=l;const{props:o,children:t}=e.vnode,r=ji(e);m5(e,o,r,l),A5(e,t);const a=r?L5(e,l):void 0;return Ko=!1,a}function L5(e,l){const o=e.type;e.accessCache=Object.create(null),e.proxy=et(new Proxy(e.ctx,p5));const{setup:t}=o;if(t){const r=e.setupContext=t.length>1?N5(e):null;eo(e),to();const a=al(t,e,0,[e.props,r]);if(ro(),wl(),Kp(a)){if(a.then(wl,wl),l)return a.then(c=>{oc(e,c,l)}).catch(c=>{lt(c,e,0)});e.asyncDep=a}else oc(e,a,l)}else Vi(e,l)}function oc(e,l,o){ys(l)?e.type.__ssrInlineRender?e.ssrRender=l:e.render=l:zs(l)&&(e.setupState=pi(l)),Vi(e,o)}let nc;function Vi(e,l,o){const t=e.type;if(!e.render){if(!l&&nc&&!t.render){const r=t.template;if(r){const{isCustomElement:a,compilerOptions:c}=e.appContext.config,{delimiters:p,compilerOptions:i}=t,y=ae(ae({isCustomElement:a,delimiters:p},c),i);t.render=nc(r,y)}}e.render=t.render||we}eo(e),to(),i5(e),ro(),wl()}function T5(e){return new Proxy(e.attrs,{get(l,o){return Be(e,"get","$attrs"),l[o]}})}function N5(e){const l=t=>{e.exposed=t||{}};let o;return{get attrs(){return o||(o=T5(e))},slots:e.slots,emit:e.emit,expose:l}}function it(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(pi(et(e.exposed)),{get(l,o){if(o in l)return l[o];if(o in Nn)return Nn[o](e)}}))}function tr(e,l=!0){return ys(e)?e.displayName||e.name:e.name||l&&e.__name}function j5(e){return ys(e)&&"__vccOpts"in e}const w=(e,l)=>Vu(e,l,Ko);function Oe(e,l,o){const t=arguments.length;return t===2?zs(l)&&!rs(l)?so(l)?Z(e,null,[l]):Z(e,l):Z(e,null,l):(t>3?o=Array.prototype.slice.call(arguments,2):t===3&&so(o)&&(o=[o]),Z(e,l,o))}const V5="3.2.37";function R5(e,l){const o=Object.create(null),t=e.split(",");for(let r=0;r<t.length;r++)o[t[r]]=!0;return l?r=>!!o[r.toLowerCase()]:r=>!!o[r]}const I5="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",z5=R5(I5);function Ri(e){return!!e||e===""}const H5=/^on[^a-z]/,U5=e=>H5.test(e),q5=e=>e.startsWith("onUpdate:"),W5=Object.assign,oa=Array.isArray,Ii=e=>typeof e=="function",Vn=e=>typeof e=="string",zi=e=>{const l=Object.create(null);return o=>l[o]||(l[o]=e(o))},K5=/\B([A-Z])/g,na=zi(e=>e.replace(K5,"-$1").toLowerCase()),Y5=zi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Z5=(e,l)=>{for(let o=0;o<e.length;o++)e[o](l)},tc=e=>{const l=parseFloat(e);return isNaN(l)?e:l},J5="http://www.w3.org/2000/svg",gl=typeof document!="undefined"?document:null,rc=gl&&gl.createElement("template"),X5={insert:(e,l,o)=>{l.insertBefore(e,o||null)},remove:e=>{const l=e.parentNode;l&&l.removeChild(e)},createElement:(e,l,o,t)=>{const r=l?gl.createElementNS(J5,e):gl.createElement(e,o?{is:o}:void 0);return e==="select"&&t&&t.multiple!=null&&r.setAttribute("multiple",t.multiple),r},createText:e=>gl.createTextNode(e),createComment:e=>gl.createComment(e),setText:(e,l)=>{e.nodeValue=l},setElementText:(e,l)=>{e.textContent=l},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gl.querySelector(e),setScopeId(e,l){e.setAttribute(l,"")},cloneNode(e){const l=e.cloneNode(!0);return"_value"in e&&(l._value=e._value),l},insertStaticContent(e,l,o,t,r,a){const c=o?o.previousSibling:l.lastChild;if(r&&(r===a||r.nextSibling))for(;l.insertBefore(r.cloneNode(!0),o),!(r===a||!(r=r.nextSibling)););else{rc.innerHTML=t?`<svg>${e}</svg>`:e;const p=rc.content;if(t){const i=p.firstChild;for(;i.firstChild;)p.appendChild(i.firstChild);p.removeChild(i)}l.insertBefore(p,o)}return[c?c.nextSibling:l.firstChild,o?o.previousSibling:l.lastChild]}};function G5(e,l,o){const t=e._vtc;t&&(l=(l?[l,...t]:[...t]).join(" ")),l==null?e.removeAttribute("class"):o?e.setAttribute("class",l):e.className=l}function Q5(e,l,o){const t=e.style,r=Vn(o);if(o&&!r){for(const a in o)rr(t,a,o[a]);if(l&&!Vn(l))for(const a in l)o[a]==null&&rr(t,a,"")}else{const a=t.display;r?l!==o&&(t.cssText=o):l&&e.removeAttribute("style"),"_vod"in e&&(t.display=a)}}const ac=/\s*!important$/;function rr(e,l,o){if(oa(o))o.forEach(t=>rr(e,l,t));else if(o==null&&(o=""),l.startsWith("--"))e.setProperty(l,o);else{const t=sd(e,l);ac.test(o)?e.setProperty(na(t),o.replace(ac,""),"important"):e[t]=o}}const cc=["Webkit","Moz","ms"],Et={};function sd(e,l){const o=Et[l];if(o)return o;let t=Ie(l);if(t!=="filter"&&t in e)return Et[l]=t;t=Y5(t);for(let r=0;r<cc.length;r++){const a=cc[r]+t;if(a in e)return Et[l]=a}return l}const pc="http://www.w3.org/1999/xlink";function ed(e,l,o,t,r){if(t&&l.startsWith("xlink:"))o==null?e.removeAttributeNS(pc,l.slice(6,l.length)):e.setAttributeNS(pc,l,o);else{const a=z5(l);o==null||a&&!Ri(o)?e.removeAttribute(l):e.setAttribute(l,a?"":o)}}function ld(e,l,o,t,r,a,c){if(l==="innerHTML"||l==="textContent"){t&&c(t,r,a),e[l]=o==null?"":o;return}if(l==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=o;const i=o==null?"":o;(e.value!==i||e.tagName==="OPTION")&&(e.value=i),o==null&&e.removeAttribute(l);return}let p=!1;if(o===""||o==null){const i=typeof e[l];i==="boolean"?o=Ri(o):o==null&&i==="string"?(o="",p=!0):i==="number"&&(o=0,p=!0)}try{e[l]=o}catch{}p&&e.removeAttribute(l)}const[Hi,od]=(()=>{let e=Date.now,l=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);l=!!(o&&Number(o[1])<=53)}return[e,l]})();let ar=0;const nd=Promise.resolve(),td=()=>{ar=0},rd=()=>ar||(nd.then(td),ar=Hi());function Hl(e,l,o,t){e.addEventListener(l,o,t)}function ad(e,l,o,t){e.removeEventListener(l,o,t)}function cd(e,l,o,t,r=null){const a=e._vei||(e._vei={}),c=a[l];if(t&&c)c.value=t;else{const[p,i]=pd(l);if(t){const y=a[l]=id(t,r);Hl(e,p,y,i)}else c&&(ad(e,p,c,i),a[l]=void 0)}}const ic=/(?:Once|Passive|Capture)$/;function pd(e){let l;if(ic.test(e)){l={};let o;for(;o=e.match(ic);)e=e.slice(0,e.length-o[0].length),l[o[0].toLowerCase()]=!0}return[na(e.slice(2)),l]}function id(e,l){const o=t=>{const r=t.timeStamp||Hi();(od||r>=o.attached-1)&&$e(yd(t,o.value),l,5,[t])};return o.value=e,o.attached=rd(),o}function yd(e,l){if(oa(l)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},l.map(t=>r=>!r._stopped&&t&&t(r))}else return l}const yc=/^on[a-z]/,ud=(e,l,o,t,r=!1,a,c,p,i)=>{l==="class"?G5(e,t,r):l==="style"?Q5(e,o,t):U5(l)?q5(l)||cd(e,l,o,t,c):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):dd(e,l,t,r))?ld(e,l,t,a,c,p,i):(l==="true-value"?e._trueValue=t:l==="false-value"&&(e._falseValue=t),ed(e,l,t,r))};function dd(e,l,o,t){return t?!!(l==="innerHTML"||l==="textContent"||l in e&&yc.test(l)&&Ii(o)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&e.tagName==="INPUT"||l==="type"&&e.tagName==="TEXTAREA"||yc.test(l)&&Vn(o)?!1:l in e}const uc=e=>{const l=e.props["onUpdate:modelValue"]||!1;return oa(l)?o=>Z5(l,o):l};function fd(e){e.target.composing=!0}function dc(e){const l=e.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Yo={created(e,{modifiers:{lazy:l,trim:o,number:t}},r){e._assign=uc(r);const a=t||r.props&&r.props.type==="number";Hl(e,l?"change":"input",c=>{if(c.target.composing)return;let p=e.value;o&&(p=p.trim()),a&&(p=tc(p)),e._assign(p)}),o&&Hl(e,"change",()=>{e.value=e.value.trim()}),l||(Hl(e,"compositionstart",fd),Hl(e,"compositionend",dc),Hl(e,"change",dc))},mounted(e,{value:l}){e.value=l==null?"":l},beforeUpdate(e,{value:l,modifiers:{lazy:o,trim:t,number:r}},a){if(e._assign=uc(a),e.composing||document.activeElement===e&&e.type!=="range"&&(o||t&&e.value.trim()===l||(r||e.type==="number")&&tc(e.value)===l))return;const c=l==null?"":l;e.value!==c&&(e.value=c)}},md={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fc=(e,l)=>o=>{if(!("key"in o))return;const t=na(o.key);if(l.some(r=>r===t||md[r]===t))return e(o)},Ui={beforeMount(e,{value:l},{transition:o}){e._vod=e.style.display==="none"?"":e.style.display,o&&l?o.beforeEnter(e):mo(e,l)},mounted(e,{value:l},{transition:o}){o&&l&&o.enter(e)},updated(e,{value:l,oldValue:o},{transition:t}){!l!=!o&&(t?l?(t.beforeEnter(e),mo(e,!0),t.enter(e)):t.leave(e,()=>{mo(e,!1)}):mo(e,l))},beforeUnmount(e,{value:l}){mo(e,l)}};function mo(e,l){e.style.display=l?e._vod:"none"}const hd=W5({patchProp:ud},X5);let mc;function Bd(){return mc||(mc=C5(hd))}const Ad=(...e)=>{const l=Bd().createApp(...e),{mount:o}=l;return l.mount=t=>{const r=vd(t);if(!r)return;const a=l._component;!Ii(a)&&!a.render&&!a.template&&(a.template=r.innerHTML),r.innerHTML="";const c=o(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),c},l};function vd(e){return Vn(e)?document.querySelector(e):e}var Dd=Object.defineProperty,hc=Object.getOwnPropertySymbols,gd=Object.prototype.hasOwnProperty,Cd=Object.prototype.propertyIsEnumerable,Bc=(e,l,o)=>l in e?Dd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,_d=(e,l)=>{for(var o in l||(l={}))gd.call(l,o)&&Bc(e,o,l[o]);if(hc)for(var o of hc(l))Cd.call(l,o)&&Bc(e,o,l[o]);return e},qi="usehead",Ac="head:count",Ft="data-head-attrs",Ed=(e,l,o)=>{const t=o.createElement(e);for(const r of Object.keys(l)){let a=l[r];r==="key"||a===!1||(r==="children"?t.textContent=a:t.setAttribute(r,a))}return t};function Fd(e,l){if(e instanceof HTMLElement&&l instanceof HTMLElement){const o=l.getAttribute("nonce");if(o&&!e.getAttribute("nonce")){const t=l.cloneNode(!0);return t.setAttribute("nonce",""),t.nonce=o,o===e.nonce&&e.isEqualNode(t)}}return e.isEqualNode(l)}var bd=e=>{const l=["key","id","name","property"];for(const o of l){const t=typeof e.getAttribute=="function"?e.hasAttribute(o)?e.getAttribute(o):void 0:e[o];if(t!==void 0)return{name:o,value:t}}},xd=()=>{const e=x(qi);if(!e)throw new Error("You may forget to apply app.use(head)");return e},kd=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],wd=e=>{const l=[];for(const o of Object.keys(e))if(e[o]!=null){if(o==="title")l.push({tag:o,props:{children:e[o]}});else if(o==="base")l.push({tag:o,props:_d({key:"default"},e[o])});else if(kd.includes(o)){const t=e[o];Array.isArray(t)?t.forEach(r=>{l.push({tag:o,props:r})}):t&&l.push({tag:o,props:t})}}return l},vc=(e,l)=>{const o=e.getAttribute(Ft);if(o)for(const r of o.split(","))r in l||e.removeAttribute(r);const t=[];for(const r in l){const a=l[r];a!=null&&(a===!1?e.removeAttribute(r):e.setAttribute(r,a),t.push(r))}t.length?e.setAttribute(Ft,t.join(",")):e.removeAttribute(Ft)},$d=(e=window.document,l,o)=>{var t;const r=e.head;let a=r.querySelector(`meta[name="${Ac}"]`);const c=a?Number(a.getAttribute("content")):0,p=[];if(a)for(let y=0,u=a.previousElementSibling;y<c;y++,u=(u==null?void 0:u.previousElementSibling)||null)((t=u==null?void 0:u.tagName)==null?void 0:t.toLowerCase())===l&&p.push(u);else a=e.createElement("meta"),a.setAttribute("name",Ac),a.setAttribute("content","0"),r.append(a);let i=o.map(y=>Ed(y.tag,y.props,e));i=i.filter(y=>{for(let u=0;u<p.length;u++){const f=p[u];if(Fd(f,y))return p.splice(u,1),!1}return!0}),p.forEach(y=>{var u;return(u=y.parentNode)==null?void 0:u.removeChild(y)}),i.forEach(y=>{r.insertBefore(y,a)}),a.setAttribute("content",""+(c-p.length+i.length))},Od=()=>{let e=[],l=new Set;const o={install(t){t.config.globalProperties.$head=o,t.provide(qi,o)},get headTags(){const t=[];return e.forEach(r=>{wd(r.value).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const p=bd(c.props);if(p){let i=-1;for(let y=0;y<t.length;y++){const u=t[y],f=u.props[p.name],d=c.props[p.name];if(u.tag===c.tag&&f===d){i=y;break}}i!==-1&&t.splice(i,1)}}t.push(c)})}),t},addHeadObjs(t){e.push(t)},removeHeadObjs(t){e=e.filter(r=>r!==t)},updateDOM(t=window.document){let r,a={},c={};const p={};for(const y of o.headTags){if(y.tag==="title"){r=y.props.children;continue}if(y.tag==="htmlAttrs"){Object.assign(a,y.props);continue}if(y.tag==="bodyAttrs"){Object.assign(c,y.props);continue}p[y.tag]=p[y.tag]||[],p[y.tag].push(y)}r!==void 0&&(t.title=r),vc(t.documentElement,a),vc(t.body,c);const i=new Set([...Object.keys(p),...l]);for(const y of i)$d(t,y,p[y]||[]);l.clear(),Object.keys(p).forEach(y=>l.add(y))}};return o},Sd=typeof window!="undefined",Md=e=>{const l=U(e),o=xd();o.addHeadObjs(l),Sd&&(nn(()=>{o.updateDOM()}),at(()=>{o.removeHeadObjs(l),o.updateDOM()}))};const Oo=Symbol("v-click-clicks"),Cl=Symbol("v-click-clicks-elements"),cr=Symbol("v-click-clicks-order-map"),So=Symbol("v-click-clicks-disabled"),Wi=Symbol("slidev-slide-scale"),$=Symbol("slidev-slidev-context"),Pd=Symbol("slidev-route"),Ld=Symbol("slidev-slide-context"),Dl="slidev-vclick-target",bt="slidev-vclick-hidden",Td="slidev-vclick-fade",xt="slidev-vclick-hidden-explicitly",ho="slidev-vclick-current",Dn="slidev-vclick-prior";function pr(e,l){if(!e)return!1;const o=e.indexOf(l);return o>=0?(e.splice(o,1),!0):!1}function Nd(...e){let l,o,t;e.length===1?(l=0,t=1,[o]=e):[l,o,t=1]=e;const r=[];let a=l;for(;a<o;)r.push(a),a+=t||1;return r}function jd(e){return e!=null}function Vd(e,l){return Object.fromEntries(Object.entries(e).map(([o,t])=>l(o,t)).filter(jd))}var Fl={theme:"default",title:"Vue.js",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"};const Es=Fl;var Ip;const cl=(Ip=Es.aspectRatio)!=null?Ip:16/9;var zp;const $l=(zp=Es.canvasWidth)!=null?zp:980,Ki=Math.round($l/cl),Yi=w(()=>Vd(Es.themeConfig||{},(e,l)=>[`--slidev-theme-${e}`,l]));function _e(e,l,o){Object.defineProperty(e,l,{value:o,writable:!0,enumerable:!1})}const Pl=Ts({page:0,clicks:0});let Rd=[],Id=[];_e(Pl,"$syncUp",!0);_e(Pl,"$syncDown",!0);_e(Pl,"$paused",!1);_e(Pl,"$onSet",e=>Rd.push(e));_e(Pl,"$onPatch",e=>Id.push(e));_e(Pl,"$patch",async()=>!1);function Zi(e,l,o=!1){const t=[];let r=!1,a=!1,c,p;const i=Ts(l);function y(m){t.push(m)}function u(m,B){clearTimeout(c),r=!0,i[m]=B,c=setTimeout(()=>r=!1,0)}function f(m){r||(clearTimeout(p),a=!0,Object.entries(m).forEach(([B,C])=>{i[B]=C}),p=setTimeout(()=>a=!1,0))}function d(m){let B;o?o&&window.addEventListener("storage",g=>{g&&g.key===m&&g.newValue&&f(JSON.parse(g.newValue))}):(B=new BroadcastChannel(m),B.addEventListener("message",g=>f(g.data)));function C(){!o&&B&&!a?B.postMessage(_s(i)):o&&!a&&window.localStorage.setItem(m,JSON.stringify(i)),r||t.forEach(g=>g(i))}if(is(i,C,{deep:!0}),o){const g=window.localStorage.getItem(m);g&&f(JSON.parse(g))}}return{init:d,onPatch:y,patch:u,state:i}}const{init:zd,onPatch:Hd,patch:Dc,state:kt}=Zi(Pl,{page:1,clicks:0}),Ll=Ts({});let Ud=[],qd=[];_e(Ll,"$syncUp",!0);_e(Ll,"$syncDown",!0);_e(Ll,"$paused",!1);_e(Ll,"$onSet",e=>Ud.push(e));_e(Ll,"$onPatch",e=>qd.push(e));_e(Ll,"$patch",async()=>!1);const{init:Wd,onPatch:Kd,patch:Ji,state:Rn}=Zi(Ll,{},!1),Yd="modulepreload",gc={},Zd="/vue-3-practices/",co=function(l,o){return!o||o.length===0?l():Promise.all(o.map(t=>{if(t=`${Zd}${t}`,t in gc)return;gc[t]=!0;const r=t.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":Yd,r||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),r)return new Promise((p,i)=>{c.addEventListener("load",p),c.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>l())};function te(e,l,o){return Array.isArray(e)?(e.length=Math.max(e.length,l),e.splice(l,1,o),o):(e[l]=o,o)}function Jd(e,l){if(Array.isArray(e)){e.splice(l,1);return}delete e[l]}function fl(e){return ou()?(nu(e),!0):!1}function Vs(...e){return w(()=>e.every(l=>D(l)))}function ie(e){return w(()=>!D(e))}function Xd(e){if(!Fs(e))return Ts(e);const l=new Proxy({},{get(o,t,r){return D(Reflect.get(e.value,t,r))},set(o,t,r){return Fs(e.value[t])&&!Fs(r)?e.value[t].value=r:e.value[t]=r,!0},deleteProperty(o,t){return Reflect.deleteProperty(e.value,t)},has(o,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ts(l)}var Cc;const Ce=typeof window!="undefined",Gd=e=>typeof e!="undefined",Qd=Object.prototype.toString,sf=e=>typeof e=="number",Xi=e=>typeof e=="string",In=e=>Qd.call(e)==="[object Object]",ir=()=>+Date.now(),pl=()=>{};Ce&&((Cc=window==null?void 0:window.navigator)==null?void 0:Cc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ef(e,l){function o(...t){e(()=>l.apply(this,t),{fn:l,thisArg:this,args:t})}return o}const Gi=e=>e();function lf(e=Gi){const l=U(!0);function o(){l.value=!1}function t(){l.value=!0}return{isActive:l,pause:o,resume:t,eventFilter:(...a)=>{l.value&&e(...a)}}}function of(e,l){var o;if(typeof e=="number")return e+l;const t=((o=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",r=e.slice(t.length),a=parseFloat(t)+l;return Number.isNaN(a)?e:a+r}var nf=Object.defineProperty,tf=Object.defineProperties,rf=Object.getOwnPropertyDescriptors,_c=Object.getOwnPropertySymbols,af=Object.prototype.hasOwnProperty,cf=Object.prototype.propertyIsEnumerable,Ec=(e,l,o)=>l in e?nf(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,pf=(e,l)=>{for(var o in l||(l={}))af.call(l,o)&&Ec(e,o,l[o]);if(_c)for(var o of _c(l))cf.call(l,o)&&Ec(e,o,l[o]);return e},yf=(e,l)=>tf(e,rf(l));function uf(e){if(!Fs(e))return Lu(e);const l=Array.isArray(e.value)?new Array(e.value.length):{};for(const o in e.value)l[o]=Pu(()=>({get(){return e.value[o]},set(t){if(Array.isArray(e.value)){const r=[...e.value];r[o]=t,e.value=r}else{const r=yf(pf({},e.value),{[o]:t});Object.setPrototypeOf(r,e.value),e.value=r}}}));return l}function df(e,l=!0){Ml()?_i(e):l?e():Ws(e)}function ff(e,l=!0){Ml()?ao(e):l?e():Ws(e)}function ta(e){Ml()&&ct(e)}function mf(e,l=1e3,o={}){const{immediate:t=!0,immediateCallback:r=!1}=o;let a=null;const c=U(!1);function p(){a&&(clearInterval(a),a=null)}function i(){c.value=!1,p()}function y(){D(l)<=0||(c.value=!0,r&&e(),p(),a=setInterval(e,D(l)))}if(t&&Ce&&y(),Fs(l)){const u=is(l,()=>{c.value&&Ce&&y()});fl(u)}return fl(i),{isActive:c,pause:i,resume:y}}function Qi(e=!1,l={}){const{truthyValue:o=!0,falsyValue:t=!1}=l,r=Fs(e),a=U(e);function c(p){return arguments.length?(a.value=p,a.value):(a.value=a.value===D(o)?D(t):D(o),a.value)}return r?c:[a,c]}var Fc=Object.getOwnPropertySymbols,hf=Object.prototype.hasOwnProperty,Bf=Object.prototype.propertyIsEnumerable,Af=(e,l)=>{var o={};for(var t in e)hf.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&Fc)for(var t of Fc(e))l.indexOf(t)<0&&Bf.call(e,t)&&(o[t]=e[t]);return o};function vf(e,l,o={}){const t=o,{eventFilter:r=Gi}=t,a=Af(t,["eventFilter"]);return is(e,ef(r,l),a)}function Df(e,l,o){const t=is(e,(...r)=>(Ws(()=>t()),l(...r)),o)}var gf=Object.defineProperty,Cf=Object.defineProperties,_f=Object.getOwnPropertyDescriptors,zn=Object.getOwnPropertySymbols,s8=Object.prototype.hasOwnProperty,e8=Object.prototype.propertyIsEnumerable,bc=(e,l,o)=>l in e?gf(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Ef=(e,l)=>{for(var o in l||(l={}))s8.call(l,o)&&bc(e,o,l[o]);if(zn)for(var o of zn(l))e8.call(l,o)&&bc(e,o,l[o]);return e},Ff=(e,l)=>Cf(e,_f(l)),bf=(e,l)=>{var o={};for(var t in e)s8.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&zn)for(var t of zn(e))l.indexOf(t)<0&&e8.call(e,t)&&(o[t]=e[t]);return o};function xf(e,l,o={}){const t=o,{eventFilter:r}=t,a=bf(t,["eventFilter"]),{eventFilter:c,pause:p,resume:i,isActive:y}=lf(r);return{stop:vf(e,l,Ff(Ef({},a),{eventFilter:c})),pause:p,resume:i,isActive:y}}function re(e){const l=D(e);return l!=null&&"$el"in l?l.$el:l}const Xs=Ce?window:void 0,kf=Ce?window.document:void 0;function Ps(...e){let l,o,t,r;if(Xi(e[0])?([o,t,r]=e,l=Xs):[l,o,t,r]=e,!l)return pl;let a=pl;const c=is(()=>re(l),i=>{a(),i&&(i.addEventListener(o,t,r),a=()=>{i.removeEventListener(o,t,r),a=pl})},{immediate:!0,flush:"post"}),p=()=>{c(),a()};return fl(p),p}function wf(e,l,o={}){const{window:t=Xs,ignore:r,capture:a=!0}=o;if(!t)return;const c=U(!0);let p;const i=f=>{t.clearTimeout(p);const d=re(e),m=f.composedPath();!d||d===f.target||m.includes(d)||!c.value||r&&r.length>0&&r.some(B=>{const C=re(B);return C&&(f.target===C||m.includes(C))})||l(f)},y=[Ps(t,"click",i,{passive:!0,capture:a}),Ps(t,"pointerdown",f=>{const d=re(e);c.value=!!d&&!f.composedPath().includes(d)},{passive:!0}),Ps(t,"pointerup",f=>{if(f.button===0){const d=f.composedPath();f.composedPath=()=>d,p=t.setTimeout(()=>i(f),50)}},{passive:!0})];return()=>y.forEach(f=>f())}const $f=e=>typeof e=="function"?e:typeof e=="string"?l=>l.key===e:Array.isArray(e)?l=>e.includes(l.key):e?()=>!0:()=>!1;function Of(e,l,o={}){const{target:t=Xs,eventName:r="keydown",passive:a=!1}=o,c=$f(e);return Ps(t,r,i=>{c(i)&&l(i)},a)}function Sf(e={}){const{window:l=Xs}=e,o=U(0);return l&&(Ps(l,"blur",()=>o.value+=1,!0),Ps(l,"focus",()=>o.value+=1,!0)),w(()=>(o.value,l==null?void 0:l.document.activeElement))}function xn(e,l={}){const{window:o=Xs}=l,t=Boolean(o&&"matchMedia"in o);let r;const a=U(!1),c=()=>{!t||(r||(r=o.matchMedia(e)),a.value=r.matches)};return df(()=>{c(),r&&("addEventListener"in r?r.addEventListener("change",c):r.addListener(c),fl(()=>{"removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c)}))}),a}const Mf={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Pf=Object.defineProperty,xc=Object.getOwnPropertySymbols,Lf=Object.prototype.hasOwnProperty,Tf=Object.prototype.propertyIsEnumerable,kc=(e,l,o)=>l in e?Pf(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Nf=(e,l)=>{for(var o in l||(l={}))Lf.call(l,o)&&kc(e,o,l[o]);if(xc)for(var o of xc(l))Tf.call(l,o)&&kc(e,o,l[o]);return e};function jf(e,l={}){function o(p,i){let y=e[p];return i!=null&&(y=of(y,i)),typeof y=="number"&&(y=`${y}px`),y}const{window:t=Xs}=l;function r(p){return t?t.matchMedia(p).matches:!1}const a=p=>xn(`(min-width: ${o(p)})`,l),c=Object.keys(e).reduce((p,i)=>(Object.defineProperty(p,i,{get:()=>a(i),enumerable:!0,configurable:!0}),p),{});return Nf({greater:a,smaller(p){return xn(`(max-width: ${o(p,-.1)})`,l)},between(p,i){return xn(`(min-width: ${o(p)}) and (max-width: ${o(i,-.1)})`,l)},isGreater(p){return r(`(min-width: ${o(p)})`)},isSmaller(p){return r(`(max-width: ${o(p,-.1)})`)},isInBetween(p,i){return r(`(min-width: ${o(p)}) and (max-width: ${o(i,-.1)})`)}},c)}const yr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ur="__vueuse_ssr_handlers__";yr[ur]=yr[ur]||{};const Vf=yr[ur];function Rf(e,l){return Vf[e]||l}function If(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const zf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Me(e,l,o,t={}){var r;const{flush:a="pre",deep:c=!0,listenToStorageChanges:p=!0,writeDefaults:i=!0,shallow:y,window:u=Xs,eventFilter:f,onError:d=T=>{console.error(T)}}=t,m=(y?ze:U)(l);if(!o)try{o=Rf("getDefaultStorage",()=>{var T;return(T=Xs)==null?void 0:T.localStorage})()}catch(T){d(T)}if(!o)return m;const B=D(l),C=If(B),g=(r=t.serializer)!=null?r:zf[C],{pause:b,resume:E}=xf(m,()=>F(m.value),{flush:a,deep:c,eventFilter:f});return u&&p&&Ps(u,"storage",I),I(),m;function F(T){try{T==null?o.removeItem(e):o.setItem(e,g.write(T))}catch(J){d(J)}}function k(T){if(!(T&&T.key!==e)){b();try{const J=T?T.newValue:o.getItem(e);return J==null?(i&&B!==null&&o.setItem(e,g.write(B)),B):typeof J!="string"?J:g.read(J)}catch(J){d(J)}finally{E()}}}function I(T){T&&T.key!==e||(m.value=k(T))}}function Hf(e){return xn("(prefers-color-scheme: dark)",e)}var Uf=Object.defineProperty,qf=Object.defineProperties,Wf=Object.getOwnPropertyDescriptors,wc=Object.getOwnPropertySymbols,Kf=Object.prototype.hasOwnProperty,Yf=Object.prototype.propertyIsEnumerable,$c=(e,l,o)=>l in e?Uf(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Zf=(e,l)=>{for(var o in l||(l={}))Kf.call(l,o)&&$c(e,o,l[o]);if(wc)for(var o of wc(l))Yf.call(l,o)&&$c(e,o,l[o]);return e},Jf=(e,l)=>qf(e,Wf(l));function NF(e,l={}){var o,t;const r=(o=l.draggingElement)!=null?o:Xs,a=U((t=l.initialValue)!=null?t:{x:0,y:0}),c=U(),p=d=>l.pointerTypes?l.pointerTypes.includes(d.pointerType):!0,i=d=>{D(l.preventDefault)&&d.preventDefault(),D(l.stopPropagation)&&d.stopPropagation()},y=d=>{var m;if(!p(d)||D(l.exact)&&d.target!==D(e))return;const B=D(e).getBoundingClientRect(),C={x:d.pageX-B.left,y:d.pageY-B.top};((m=l.onStart)==null?void 0:m.call(l,C,d))!==!1&&(c.value=C,i(d))},u=d=>{var m;!p(d)||!c.value||(a.value={x:d.pageX-c.value.x,y:d.pageY-c.value.y},(m=l.onMove)==null||m.call(l,a.value,d),i(d))},f=d=>{var m;!p(d)||!c.value||(c.value=void 0,(m=l.onEnd)==null||m.call(l,a.value,d),i(d))};return Ce&&(Ps(e,"pointerdown",y,!0),Ps(r,"pointermove",u,!0),Ps(r,"pointerup",f,!0)),Jf(Zf({},uf(a)),{position:a,isDragging:w(()=>!!c.value),style:w(()=>`left:${a.value.x}px;top:${a.value.y}px;`)})}var Oc=Object.getOwnPropertySymbols,Xf=Object.prototype.hasOwnProperty,Gf=Object.prototype.propertyIsEnumerable,Qf=(e,l)=>{var o={};for(var t in e)Xf.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&Oc)for(var t of Oc(e))l.indexOf(t)<0&&Gf.call(e,t)&&(o[t]=e[t]);return o};function sm(e,l,o={}){const t=o,{window:r=Xs}=t,a=Qf(t,["window"]);let c;const p=r&&"ResizeObserver"in r,i=()=>{c&&(c.disconnect(),c=void 0)},y=is(()=>re(e),f=>{i(),p&&r&&f&&(c=new ResizeObserver(l),c.observe(f,a))},{immediate:!0,flush:"post"}),u=()=>{i(),y()};return fl(u),{isSupported:p,stop:u}}function l8(e,l={}){const{immediate:o=!0,window:t=Xs}=l,r=U(!1);let a=null;function c(){!r.value||!t||(e(),a=t.requestAnimationFrame(c))}function p(){!r.value&&t&&(r.value=!0,c())}function i(){r.value=!1,a!=null&&t&&(t.cancelAnimationFrame(a),a=null)}return o&&p(),fl(i),{isActive:r,pause:i,resume:p}}function em(e,l={width:0,height:0},o={}){const t=U(l.width),r=U(l.height);return sm(e,([a])=>{t.value=a.contentRect.width,r.value=a.contentRect.height},o),is(()=>re(e),a=>{t.value=a?l.width:0,r.value=a?l.height:0}),{width:t,height:r}}const Sc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function lm(e,l={}){const{document:o=kf,autoExit:t=!1}=l,r=e||(o==null?void 0:o.querySelector("html")),a=U(!1);let c=!1,p=Sc[0];if(!o)c=!1;else for(const C of Sc)if(C[1]in o){p=C,c=!0;break}const[i,y,u,,f]=p;async function d(){!c||(o!=null&&o[u]&&await o[y](),a.value=!1)}async function m(){if(!c)return;await d();const C=re(r);C&&(await C[i](),a.value=!0)}async function B(){a.value?await d():await m()}return o&&Ps(o,f,()=>{a.value=!!(o!=null&&o[u])},!1),t&&fl(d),{isSupported:c,isFullscreen:a,enter:m,exit:d,toggle:B}}function om(e,l,o={}){const{root:t,rootMargin:r="0px",threshold:a=.1,window:c=Xs}=o,p=c&&"IntersectionObserver"in c;let i=pl;const y=p?is(()=>({el:re(e),root:re(t)}),({el:f,root:d})=>{if(i(),!f)return;const m=new IntersectionObserver(l,{root:d,rootMargin:r,threshold:a});m.observe(f),i=()=>{m.disconnect(),i=pl}},{immediate:!0,flush:"post"}):pl,u=()=>{i(),y()};return fl(u),{isSupported:p,stop:u}}const nm={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function tm(e={}){const{reactive:l=!1,target:o=Xs,aliasMap:t=nm,passive:r=!0,onEventFired:a=pl}=e,c=Ts(new Set),p={toJSON(){return{}},current:c},i=l?Ts(p):p,y=new Set;function u(m,B){m in i&&(l?i[m]=B:i[m].value=B)}function f(m,B){var C,g;const b=(C=m.key)==null?void 0:C.toLowerCase(),E=(g=m.code)==null?void 0:g.toLowerCase(),F=[E,b].filter(Boolean);E&&(B?c.add(m.code):c.delete(m.code));for(const k of F)u(k,B);b==="meta"&&!B?(y.forEach(k=>{c.delete(k),u(k,!1)}),y.clear()):typeof m.getModifierState=="function"&&m.getModifierState("Meta")&&B&&[...c,...F].forEach(k=>y.add(k))}o&&(Ps(o,"keydown",m=>(f(m,!0),a(m)),{passive:r}),Ps(o,"keyup",m=>(f(m,!1),a(m)),{passive:r}));const d=new Proxy(i,{get(m,B,C){if(typeof B!="string")return Reflect.get(m,B,C);if(B=B.toLowerCase(),B in t&&(B=t[B]),!(B in i))if(/[+_-]/.test(B)){const b=B.split(/[+_-]/g).map(E=>E.trim());i[B]=w(()=>b.every(E=>D(d[E])))}else i[B]=U(!1);const g=Reflect.get(m,B,C);return l?D(g):g}});return d}function jF(e={}){const{type:l="page",touch:o=!0,resetOnTouchEnds:t=!1,initialValue:r={x:0,y:0},window:a=Xs,eventFilter:c}=e,p=U(r.x),i=U(r.y),y=U(null),u=C=>{l==="page"?(p.value=C.pageX,i.value=C.pageY):l==="client"&&(p.value=C.clientX,i.value=C.clientY),y.value="mouse"},f=()=>{p.value=r.x,i.value=r.y},d=C=>{if(C.touches.length>0){const g=C.touches[0];l==="page"?(p.value=g.pageX,i.value=g.pageY):l==="client"&&(p.value=g.clientX,i.value=g.clientY),y.value="touch"}},m=C=>c===void 0?u(C):c(()=>u(C),{}),B=C=>c===void 0?d(C):c(()=>d(C),{});return a&&(Ps(a,"mousemove",m,{passive:!0}),Ps(a,"dragover",m,{passive:!0}),o&&(Ps(a,"touchstart",B,{passive:!0}),Ps(a,"touchmove",B,{passive:!0}),t&&Ps(a,"touchend",f,{passive:!0}))),{x:p,y:i,sourceType:y}}var Ke;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ke||(Ke={}));function rm(e,l={}){const o=U(e),{threshold:t=50,onSwipe:r,onSwipeEnd:a,onSwipeStart:c}=l,p=Ts({x:0,y:0}),i=(T,J)=>{p.x=T,p.y=J},y=Ts({x:0,y:0}),u=(T,J)=>{y.x=T,y.y=J},f=w(()=>p.x-y.x),d=w(()=>p.y-y.y),{max:m,abs:B}=Math,C=w(()=>m(B(f.value),B(d.value))>=t),g=U(!1),b=U(!1),E=w(()=>C.value?B(f.value)>B(d.value)?f.value>0?Ke.LEFT:Ke.RIGHT:d.value>0?Ke.UP:Ke.DOWN:Ke.NONE),F=T=>l.pointerTypes?l.pointerTypes.includes(T.pointerType):!0,k=[Ps(e,"pointerdown",T=>{var J,as;if(!F(T))return;b.value=!0,(as=(J=o.value)==null?void 0:J.style)==null||as.setProperty("touch-action","none");const us=T.target;us==null||us.setPointerCapture(T.pointerId);const{clientX:ms,clientY:As}=T;i(ms,As),u(ms,As),c==null||c(T)}),Ps(e,"pointermove",T=>{if(!F(T)||!b.value)return;const{clientX:J,clientY:as}=T;u(J,as),!g.value&&C.value&&(g.value=!0),g.value&&(r==null||r(T))}),Ps(e,"pointerup",T=>{var J,as;!F(T)||(g.value&&(a==null||a(T,E.value)),b.value=!1,g.value=!1,(as=(J=o.value)==null?void 0:J.style)==null||as.setProperty("touch-action","initial"))})],I=()=>k.forEach(T=>T());return{isSwiping:ql(g),direction:ql(E),posStart:ql(p),posEnd:ql(y),distanceX:f,distanceY:d,stop:I}}var am=Object.defineProperty,Mc=Object.getOwnPropertySymbols,cm=Object.prototype.hasOwnProperty,pm=Object.prototype.propertyIsEnumerable,Pc=(e,l,o)=>l in e?am(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,im=(e,l)=>{for(var o in l||(l={}))cm.call(l,o)&&Pc(e,o,l[o]);if(Mc)for(var o of Mc(l))pm.call(l,o)&&Pc(e,o,l[o]);return e};function VF(e={}){const{controls:l=!1,offset:o=0,immediate:t=!0,interval:r="requestAnimationFrame"}=e,a=U(ir()+o),c=()=>a.value=ir()+o,p=r==="requestAnimationFrame"?l8(c,{immediate:t}):mf(c,r,{immediate:t});return l?im({timestamp:a},p):a}function Ve(e,l,o,t={}){var r;const{passive:a=!1,eventName:c,deep:p=!1,defaultValue:i}=t,y=Ml(),u=o||(y==null?void 0:y.emit)||((r=y==null?void 0:y.$emit)==null?void 0:r.bind(y));let f=c;l||(l="modelValue"),f=c||f||`update:${l.toString()}`;const d=()=>Gd(e[l])?e[l]:i;if(a){const m=U(d());return is(()=>e[l],B=>m.value=B),is(m,B=>{(B!==e[l]||p)&&u(f,B)},{deep:p}),m}else return w({get(){return d()},set(m){u(f,m)}})}function RF({window:e=Xs}={}){if(!e)return U(!1);const l=U(e.document.hasFocus());return Ps(e,"blur",()=>{l.value=!1}),Ps(e,"focus",()=>{l.value=!0}),l}function ym({window:e=Xs,initialWidth:l=1/0,initialHeight:o=1/0}={}){const t=U(l),r=U(o),a=()=>{e&&(t.value=e.innerWidth,r.value=e.innerHeight)};return a(),ff(a),Ps("resize",a,{passive:!0}),{width:t,height:r}}/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const o8=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",po=e=>o8?Symbol(e):"_vr_"+e,um=po("rvlm"),Lc=po("rvd"),ra=po("r"),n8=po("rl"),dr=po("rvl"),Ul=typeof window!="undefined";function dm(e){return e.__esModule||o8&&e[Symbol.toStringTag]==="Module"}const $s=Object.assign;function wt(e,l){const o={};for(const t in l){const r=l[t];o[t]=Array.isArray(r)?r.map(e):e(r)}return o}const Mo=()=>{},fm=/\/$/,mm=e=>e.replace(fm,"");function $t(e,l,o="/"){let t,r={},a="",c="";const p=l.indexOf("?"),i=l.indexOf("#",p>-1?p:0);return p>-1&&(t=l.slice(0,p),a=l.slice(p+1,i>-1?i:l.length),r=e(a)),i>-1&&(t=t||l.slice(0,i),c=l.slice(i,l.length)),t=vm(t!=null?t:l,o),{fullPath:t+(a&&"?")+a+c,path:t,query:r,hash:c}}function hm(e,l){const o=l.query?e(l.query):"";return l.path+(o&&"?")+o+(l.hash||"")}function Tc(e,l){return!l||!e.toLowerCase().startsWith(l.toLowerCase())?e:e.slice(l.length)||"/"}function Bm(e,l,o){const t=l.matched.length-1,r=o.matched.length-1;return t>-1&&t===r&&lo(l.matched[t],o.matched[r])&&t8(l.params,o.params)&&e(l.query)===e(o.query)&&l.hash===o.hash}function lo(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function t8(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const o in e)if(!Am(e[o],l[o]))return!1;return!0}function Am(e,l){return Array.isArray(e)?Nc(e,l):Array.isArray(l)?Nc(l,e):e===l}function Nc(e,l){return Array.isArray(l)?e.length===l.length&&e.every((o,t)=>o===l[t]):e.length===1&&e[0]===l}function vm(e,l){if(e.startsWith("/"))return e;if(!e)return l;const o=l.split("/"),t=e.split("/");let r=o.length-1,a,c;for(a=0;a<t.length;a++)if(c=t[a],!(r===1||c==="."))if(c==="..")r--;else break;return o.slice(0,r).join("/")+"/"+t.slice(a-(a===t.length?1:0)).join("/")}var Zo;(function(e){e.pop="pop",e.push="push"})(Zo||(Zo={}));var Po;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Po||(Po={}));function Dm(e){if(!e)if(Ul){const l=document.querySelector("base");e=l&&l.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),mm(e)}const gm=/^[^#]+#/;function Cm(e,l){return e.replace(gm,"#")+l}function _m(e,l){const o=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:l.behavior,left:t.left-o.left-(l.left||0),top:t.top-o.top-(l.top||0)}}const yt=()=>({left:window.pageXOffset,top:window.pageYOffset});function Em(e){let l;if("el"in e){const o=e.el,t=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?t?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;l=_m(r,e)}else l=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function jc(e,l){return(history.state?history.state.position-l:-1)+e}const fr=new Map;function Fm(e,l){fr.set(e,l)}function bm(e){const l=fr.get(e);return fr.delete(e),l}let xm=()=>location.protocol+"//"+location.host;function r8(e,l){const{pathname:o,search:t,hash:r}=l,a=e.indexOf("#");if(a>-1){let p=r.includes(e.slice(a))?e.slice(a).length:1,i=r.slice(p);return i[0]!=="/"&&(i="/"+i),Tc(i,"")}return Tc(o,e)+t+r}function km(e,l,o,t){let r=[],a=[],c=null;const p=({state:d})=>{const m=r8(e,location),B=o.value,C=l.value;let g=0;if(d){if(o.value=m,l.value=d,c&&c===B){c=null;return}g=C?d.position-C.position:0}else t(m);r.forEach(b=>{b(o.value,B,{delta:g,type:Zo.pop,direction:g?g>0?Po.forward:Po.back:Po.unknown})})};function i(){c=o.value}function y(d){r.push(d);const m=()=>{const B=r.indexOf(d);B>-1&&r.splice(B,1)};return a.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState($s({},d.state,{scroll:yt()}),"")}function f(){for(const d of a)d();a=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:y,destroy:f}}function Vc(e,l,o,t=!1,r=!1){return{back:e,current:l,forward:o,replaced:t,position:window.history.length,scroll:r?yt():null}}function wm(e){const{history:l,location:o}=window,t={value:r8(e,o)},r={value:l.state};r.value||a(t.value,{back:null,current:t.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function a(i,y,u){const f=e.indexOf("#"),d=f>-1?(o.host&&document.querySelector("base")?e:e.slice(f))+i:xm()+e+i;try{l[u?"replaceState":"pushState"](y,"",d),r.value=y}catch(m){console.error(m),o[u?"replace":"assign"](d)}}function c(i,y){const u=$s({},l.state,Vc(r.value.back,i,r.value.forward,!0),y,{position:r.value.position});a(i,u,!0),t.value=i}function p(i,y){const u=$s({},r.value,l.state,{forward:i,scroll:yt()});a(u.current,u,!0);const f=$s({},Vc(t.value,i,null),{position:u.position+1},y);a(i,f,!1),t.value=i}return{location:t,state:r,push:p,replace:c}}function $m(e){e=Dm(e);const l=wm(e),o=km(e,l.state,l.location,l.replace);function t(a,c=!0){c||o.pauseListeners(),history.go(a)}const r=$s({location:"",base:e,go:t,createHref:Cm.bind(null,e)},l,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>l.state.value}),r}function Om(e){return typeof e=="string"||e&&typeof e=="object"}function a8(e){return typeof e=="string"||typeof e=="symbol"}const sl={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},c8=po("nf");var Rc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Rc||(Rc={}));function oo(e,l){return $s(new Error,{type:e,[c8]:!0},l)}function el(e,l){return e instanceof Error&&c8 in e&&(l==null||!!(e.type&l))}const Ic="[^/]+?",Sm={sensitive:!1,strict:!1,start:!0,end:!0},Mm=/[.+*?^${}()[\]/\\]/g;function Pm(e,l){const o=$s({},Sm,l),t=[];let r=o.start?"^":"";const a=[];for(const y of e){const u=y.length?[]:[90];o.strict&&!y.length&&(r+="/");for(let f=0;f<y.length;f++){const d=y[f];let m=40+(o.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(Mm,"\\$&"),m+=40;else if(d.type===1){const{value:B,repeatable:C,optional:g,regexp:b}=d;a.push({name:B,repeatable:C,optional:g});const E=b||Ic;if(E!==Ic){m+=10;try{new RegExp(`(${E})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${B}" (${E}): `+k.message)}}let F=C?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(F=g&&y.length<2?`(?:/${F})`:"/"+F),g&&(F+="?"),r+=F,m+=20,g&&(m+=-8),C&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}t.push(u)}if(o.strict&&o.end){const y=t.length-1;t[y][t[y].length-1]+=.7000000000000001}o.strict||(r+="/?"),o.end?r+="$":o.strict&&(r+="(?:/|$)");const c=new RegExp(r,o.sensitive?"":"i");function p(y){const u=y.match(c),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",B=a[d-1];f[B.name]=m&&B.repeatable?m.split("/"):m}return f}function i(y){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:B,repeatable:C,optional:g}=m,b=B in y?y[B]:"";if(Array.isArray(b)&&!C)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const E=Array.isArray(b)?b.join("/"):b;if(!E)if(g)d.length<2&&e.length>1&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${B}"`);u+=E}}return u}return{re:c,score:t,keys:a,parse:p,stringify:i}}function Lm(e,l){let o=0;for(;o<e.length&&o<l.length;){const t=l[o]-e[o];if(t)return t;o++}return e.length<l.length?e.length===1&&e[0]===40+40?-1:1:e.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function Tm(e,l){let o=0;const t=e.score,r=l.score;for(;o<t.length&&o<r.length;){const a=Lm(t[o],r[o]);if(a)return a;o++}if(Math.abs(r.length-t.length)===1){if(zc(t))return 1;if(zc(r))return-1}return r.length-t.length}function zc(e){const l=e[e.length-1];return e.length>0&&l[l.length-1]<0}const Nm={type:0,value:""},jm=/[a-zA-Z0-9_]/;function Vm(e){if(!e)return[[]];if(e==="/")return[[Nm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function l(m){throw new Error(`ERR (${o})/"${y}": ${m}`)}let o=0,t=o;const r=[];let a;function c(){a&&r.push(a),a=[]}let p=0,i,y="",u="";function f(){!y||(o===0?a.push({type:0,value:y}):o===1||o===2||o===3?(a.length>1&&(i==="*"||i==="+")&&l(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:y,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):l("Invalid state to consume buffer"),y="")}function d(){y+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&o!==2){t=o,o=4;continue}switch(o){case 0:i==="/"?(y&&f(),c()):i===":"?(f(),o=1):d();break;case 4:d(),o=t;break;case 1:i==="("?o=2:jm.test(i)?d():(f(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:o=3:u+=i;break;case 3:f(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,u="";break;default:l("Unknown state");break}}return o===2&&l(`Unfinished custom RegExp for param "${y}"`),f(),c(),r}function Rm(e,l,o){const t=Pm(Vm(e.path),o),r=$s(t,{record:e,parent:l,children:[],alias:[]});return l&&!r.record.aliasOf==!l.record.aliasOf&&l.children.push(r),r}function Im(e,l){const o=[],t=new Map;l=Uc({strict:!1,end:!0,sensitive:!1},l);function r(u){return t.get(u)}function a(u,f,d){const m=!d,B=Hm(u);B.aliasOf=d&&d.record;const C=Uc(l,u),g=[B];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of F)g.push($s({},B,{components:d?d.record.components:B.components,path:k,aliasOf:d?d.record:B}))}let b,E;for(const F of g){const{path:k}=F;if(f&&k[0]!=="/"){const I=f.record.path,T=I[I.length-1]==="/"?"":"/";F.path=f.record.path+(k&&T+k)}if(b=Rm(F,f,C),d?d.alias.push(b):(E=E||b,E!==b&&E.alias.push(b),m&&u.name&&!Hc(b)&&c(u.name)),"children"in B){const I=B.children;for(let T=0;T<I.length;T++)a(I[T],b,d&&d.children[T])}d=d||b,i(b)}return E?()=>{c(E)}:Mo}function c(u){if(a8(u)){const f=t.get(u);f&&(t.delete(u),o.splice(o.indexOf(f),1),f.children.forEach(c),f.alias.forEach(c))}else{const f=o.indexOf(u);f>-1&&(o.splice(f,1),u.record.name&&t.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function p(){return o}function i(u){let f=0;for(;f<o.length&&Tm(u,o[f])>=0&&(u.record.path!==o[f].record.path||!p8(u,o[f]));)f++;o.splice(f,0,u),u.record.name&&!Hc(u)&&t.set(u.record.name,u)}function y(u,f){let d,m={},B,C;if("name"in u&&u.name){if(d=t.get(u.name),!d)throw oo(1,{location:u});C=d.record.name,m=$s(zm(f.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),u.params),B=d.stringify(m)}else if("path"in u)B=u.path,d=o.find(E=>E.re.test(B)),d&&(m=d.parse(B),C=d.record.name);else{if(d=f.name?t.get(f.name):o.find(E=>E.re.test(f.path)),!d)throw oo(1,{location:u,currentLocation:f});C=d.record.name,m=$s({},f.params,u.params),B=d.stringify(m)}const g=[];let b=d;for(;b;)g.unshift(b.record),b=b.parent;return{name:C,path:B,params:m,matched:g,meta:qm(g)}}return e.forEach(u=>a(u)),{addRoute:a,resolve:y,removeRoute:c,getRoutes:p,getRecordMatcher:r}}function zm(e,l){const o={};for(const t of l)t in e&&(o[t]=e[t]);return o}function Hm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Um(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Um(e){const l={},o=e.props||!1;if("component"in e)l.default=o;else for(const t in e.components)l[t]=typeof o=="boolean"?o:o[t];return l}function Hc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qm(e){return e.reduce((l,o)=>$s(l,o.meta),{})}function Uc(e,l){const o={};for(const t in e)o[t]=t in l?l[t]:e[t];return o}function p8(e,l){return l.children.some(o=>o===e||p8(e,o))}const i8=/#/g,Wm=/&/g,Km=/\//g,Ym=/=/g,Zm=/\?/g,y8=/\+/g,Jm=/%5B/g,Xm=/%5D/g,u8=/%5E/g,Gm=/%60/g,d8=/%7B/g,Qm=/%7C/g,f8=/%7D/g,s3=/%20/g;function aa(e){return encodeURI(""+e).replace(Qm,"|").replace(Jm,"[").replace(Xm,"]")}function e3(e){return aa(e).replace(d8,"{").replace(f8,"}").replace(u8,"^")}function mr(e){return aa(e).replace(y8,"%2B").replace(s3,"+").replace(i8,"%23").replace(Wm,"%26").replace(Gm,"`").replace(d8,"{").replace(f8,"}").replace(u8,"^")}function l3(e){return mr(e).replace(Ym,"%3D")}function o3(e){return aa(e).replace(i8,"%23").replace(Zm,"%3F")}function n3(e){return e==null?"":o3(e).replace(Km,"%2F")}function Hn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function t3(e){const l={};if(e===""||e==="?")return l;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const a=t[r].replace(y8," "),c=a.indexOf("="),p=Hn(c<0?a:a.slice(0,c)),i=c<0?null:Hn(a.slice(c+1));if(p in l){let y=l[p];Array.isArray(y)||(y=l[p]=[y]),y.push(i)}else l[p]=i}return l}function qc(e){let l="";for(let o in e){const t=e[o];if(o=l3(o),t==null){t!==void 0&&(l+=(l.length?"&":"")+o);continue}(Array.isArray(t)?t.map(a=>a&&mr(a)):[t&&mr(t)]).forEach(a=>{a!==void 0&&(l+=(l.length?"&":"")+o,a!=null&&(l+="="+a))})}return l}function r3(e){const l={};for(const o in e){const t=e[o];t!==void 0&&(l[o]=Array.isArray(t)?t.map(r=>r==null?null:""+r):t==null?t:""+t)}return l}function Bo(){let e=[];function l(t){return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}function o(){e=[]}return{add:l,list:()=>e,reset:o}}function nl(e,l,o,t,r){const a=t&&(t.enterCallbacks[r]=t.enterCallbacks[r]||[]);return()=>new Promise((c,p)=>{const i=f=>{f===!1?p(oo(4,{from:o,to:l})):f instanceof Error?p(f):Om(f)?p(oo(2,{from:l,to:f})):(a&&t.enterCallbacks[r]===a&&typeof f=="function"&&a.push(f),c())},y=e.call(t&&t.instances[r],l,o,i);let u=Promise.resolve(y);e.length<3&&(u=u.then(i)),u.catch(f=>p(f))})}function Ot(e,l,o,t){const r=[];for(const a of e)for(const c in a.components){let p=a.components[c];if(!(l!=="beforeRouteEnter"&&!a.instances[c]))if(a3(p)){const y=(p.__vccOpts||p)[l];y&&r.push(nl(y,o,t,a,c))}else{let i=p();r.push(()=>i.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const u=dm(y)?y.default:y;a.components[c]=u;const d=(u.__vccOpts||u)[l];return d&&nl(d,o,t,a,c)()}))}}return r}function a3(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wc(e){const l=x(ra),o=x(n8),t=w(()=>l.resolve(D(e.to))),r=w(()=>{const{matched:i}=t.value,{length:y}=i,u=i[y-1],f=o.matched;if(!u||!f.length)return-1;const d=f.findIndex(lo.bind(null,u));if(d>-1)return d;const m=Kc(i[y-2]);return y>1&&Kc(u)===m&&f[f.length-1].path!==m?f.findIndex(lo.bind(null,i[y-2])):d}),a=w(()=>r.value>-1&&y3(o.params,t.value.params)),c=w(()=>r.value>-1&&r.value===o.matched.length-1&&t8(o.params,t.value.params));function p(i={}){return i3(i)?l[D(e.replace)?"replace":"push"](D(e.to)).catch(Mo):Promise.resolve()}return{route:t,href:w(()=>t.value.href),isActive:a,isExactActive:c,navigate:p}}const c3=bs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wc,setup(e,{slots:l}){const o=Ts(Wc(e)),{options:t}=x(ra),r=w(()=>({[Yc(e.activeClass,t.linkActiveClass,"router-link-active")]:o.isActive,[Yc(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const a=l.default&&l.default(o);return e.custom?a:Oe("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},a)}}}),p3=c3;function i3(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const l=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return e.preventDefault&&e.preventDefault(),!0}}function y3(e,l){for(const o in l){const t=l[o],r=e[o];if(typeof t=="string"){if(t!==r)return!1}else if(!Array.isArray(r)||r.length!==t.length||t.some((a,c)=>a!==r[c]))return!1}return!0}function Kc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Yc=(e,l,o)=>e!=null?e:l!=null?l:o,u3=bs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:l,slots:o}){const t=x(dr),r=w(()=>e.route||t.value),a=x(Lc,0),c=w(()=>r.value.matched[a]);de(Lc,a+1),de(um,c),de(dr,r);const p=U();return is(()=>[p.value,c.value,e.name],([i,y,u],[f,d,m])=>{y&&(y.instances[u]=i,d&&d!==y&&i&&i===f&&(y.leaveGuards.size||(y.leaveGuards=d.leaveGuards),y.updateGuards.size||(y.updateGuards=d.updateGuards))),i&&y&&(!d||!lo(y,d)||!f)&&(y.enterCallbacks[u]||[]).forEach(B=>B(i))},{flush:"post"}),()=>{const i=r.value,y=c.value,u=y&&y.components[e.name],f=e.name;if(!u)return Zc(o.default,{Component:u,route:i});const d=y.props[e.name],m=d?d===!0?i.params:typeof d=="function"?d(i):d:null,C=Oe(u,$s({},m,l,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(y.instances[f]=null)},ref:p}));return Zc(o.default,{Component:C,route:i})||C}}});function Zc(e,l){if(!e)return null;const o=e(l);return o.length===1?o[0]:o}const d3=u3;function f3(e){const l=Im(e.routes,e),o=e.parseQuery||t3,t=e.stringifyQuery||qc,r=e.history,a=Bo(),c=Bo(),p=Bo(),i=ze(sl);let y=sl;Ul&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=wt.bind(null,O=>""+O),f=wt.bind(null,n3),d=wt.bind(null,Hn);function m(O,X){let j,Q;return a8(O)?(j=l.getRecordMatcher(O),Q=X):Q=O,l.addRoute(Q,j)}function B(O){const X=l.getRecordMatcher(O);X&&l.removeRoute(X)}function C(){return l.getRoutes().map(O=>O.record)}function g(O){return!!l.getRecordMatcher(O)}function b(O,X){if(X=$s({},X||i.value),typeof O=="string"){const ps=$t(o,O,X.path),h=l.resolve({path:ps.path},X),A=r.createHref(ps.fullPath);return $s(ps,h,{params:d(h.params),hash:Hn(ps.hash),redirectedFrom:void 0,href:A})}let j;if("path"in O)j=$s({},O,{path:$t(o,O.path,X.path).path});else{const ps=$s({},O.params);for(const h in ps)ps[h]==null&&delete ps[h];j=$s({},O,{params:f(O.params)}),X.params=f(X.params)}const Q=l.resolve(j,X),Ds=O.hash||"";Q.params=u(d(Q.params));const Ss=hm(t,$s({},O,{hash:e3(Ds),path:Q.path})),ds=r.createHref(Ss);return $s({fullPath:Ss,hash:Ds,query:t===qc?r3(O.query):O.query||{}},Q,{redirectedFrom:void 0,href:ds})}function E(O){return typeof O=="string"?$t(o,O,i.value.path):$s({},O)}function F(O,X){if(y!==O)return oo(8,{from:X,to:O})}function k(O){return J(O)}function I(O){return k($s(E(O),{replace:!0}))}function T(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:j}=X;let Q=typeof j=="function"?j(O):j;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=E(Q):{path:Q},Q.params={}),$s({query:O.query,hash:O.hash,params:O.params},Q)}}function J(O,X){const j=y=b(O),Q=i.value,Ds=O.state,Ss=O.force,ds=O.replace===!0,ps=T(j);if(ps)return J($s(E(ps),{state:Ds,force:Ss,replace:ds}),X||j);const h=j;h.redirectedFrom=X;let A;return!Ss&&Bm(t,Q,j)&&(A=oo(16,{to:h,from:Q}),Le(Q,Q,!0,!1)),(A?Promise.resolve(A):us(h,Q)).catch(_=>el(_)?el(_,2)?_:hs(_):ns(_,h,Q)).then(_=>{if(_){if(el(_,2))return J($s(E(_.to),{state:Ds,force:Ss,replace:ds}),X||h)}else _=As(h,Q,!0,ds,Ds);return ms(h,Q,_),_})}function as(O,X){const j=F(O,X);return j?Promise.reject(j):Promise.resolve()}function us(O,X){let j;const[Q,Ds,Ss]=m3(O,X);j=Ot(Q.reverse(),"beforeRouteLeave",O,X);for(const ps of Q)ps.leaveGuards.forEach(h=>{j.push(nl(h,O,X))});const ds=as.bind(null,O,X);return j.push(ds),jl(j).then(()=>{j=[];for(const ps of a.list())j.push(nl(ps,O,X));return j.push(ds),jl(j)}).then(()=>{j=Ot(Ds,"beforeRouteUpdate",O,X);for(const ps of Ds)ps.updateGuards.forEach(h=>{j.push(nl(h,O,X))});return j.push(ds),jl(j)}).then(()=>{j=[];for(const ps of O.matched)if(ps.beforeEnter&&!X.matched.includes(ps))if(Array.isArray(ps.beforeEnter))for(const h of ps.beforeEnter)j.push(nl(h,O,X));else j.push(nl(ps.beforeEnter,O,X));return j.push(ds),jl(j)}).then(()=>(O.matched.forEach(ps=>ps.enterCallbacks={}),j=Ot(Ss,"beforeRouteEnter",O,X),j.push(ds),jl(j))).then(()=>{j=[];for(const ps of c.list())j.push(nl(ps,O,X));return j.push(ds),jl(j)}).catch(ps=>el(ps,8)?ps:Promise.reject(ps))}function ms(O,X,j){for(const Q of p.list())Q(O,X,j)}function As(O,X,j,Q,Ds){const Ss=F(O,X);if(Ss)return Ss;const ds=X===sl,ps=Ul?history.state:{};j&&(Q||ds?r.replace(O.fullPath,$s({scroll:ds&&ps&&ps.scroll},Ds)):r.push(O.fullPath,Ds)),i.value=O,Le(O,X,j,ds),hs()}let Ls;function js(){Ls||(Ls=r.listen((O,X,j)=>{const Q=b(O),Ds=T(Q);if(Ds){J($s(Ds,{replace:!0}),Q).catch(Mo);return}y=Q;const Ss=i.value;Ul&&Fm(jc(Ss.fullPath,j.delta),yt()),us(Q,Ss).catch(ds=>el(ds,12)?ds:el(ds,2)?(J(ds.to,Q).then(ps=>{el(ps,20)&&!j.delta&&j.type===Zo.pop&&r.go(-1,!1)}).catch(Mo),Promise.reject()):(j.delta&&r.go(-j.delta,!1),ns(ds,Q,Ss))).then(ds=>{ds=ds||As(Q,Ss,!1),ds&&(j.delta?r.go(-j.delta,!1):j.type===Zo.pop&&el(ds,20)&&r.go(-1,!1)),ms(Q,Ss,ds)}).catch(Mo)}))}let Ys=Bo(),xs=Bo(),os;function ns(O,X,j){hs(O);const Q=xs.list();return Q.length?Q.forEach(Ds=>Ds(O,X,j)):console.error(O),Promise.reject(O)}function ls(){return os&&i.value!==sl?Promise.resolve():new Promise((O,X)=>{Ys.add([O,X])})}function hs(O){return os||(os=!O,js(),Ys.list().forEach(([X,j])=>O?j(O):X()),Ys.reset()),O}function Le(O,X,j,Q){const{scrollBehavior:Ds}=e;if(!Ul||!Ds)return Promise.resolve();const Ss=!j&&bm(jc(O.fullPath,0))||(Q||!j)&&history.state&&history.state.scroll||null;return Ws().then(()=>Ds(O,X,Ss)).then(ds=>ds&&Em(ds)).catch(ds=>ns(ds,O,X))}const Gs=O=>r.go(O);let Ae;const ne=new Set;return{currentRoute:i,addRoute:m,removeRoute:B,hasRoute:g,getRoutes:C,resolve:b,options:e,push:k,replace:I,go:Gs,back:()=>Gs(-1),forward:()=>Gs(1),beforeEach:a.add,beforeResolve:c.add,afterEach:p.add,onError:xs.add,isReady:ls,install(O){const X=this;O.component("RouterLink",p3),O.component("RouterView",d3),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>D(i)}),Ul&&!Ae&&i.value===sl&&(Ae=!0,k(r.location).catch(Ds=>{}));const j={};for(const Ds in sl)j[Ds]=w(()=>i.value[Ds]);O.provide(ra,X),O.provide(n8,Ts(j)),O.provide(dr,i);const Q=O.unmount;ne.add(O),O.unmount=function(){ne.delete(O),ne.size<1&&(y=sl,Ls&&Ls(),Ls=null,i.value=sl,Ae=!1,os=!1),Q()}}}}function jl(e){return e.reduce((l,o)=>l.then(()=>o()),Promise.resolve())}function m3(e,l){const o=[],t=[],r=[],a=Math.max(l.matched.length,e.matched.length);for(let c=0;c<a;c++){const p=l.matched[c];p&&(e.matched.find(y=>lo(y,p))?t.push(p):o.push(p));const i=e.matched[c];i&&(l.matched.find(y=>lo(y,i))||r.push(i))}return[o,t,r]}const St=U(!1),Lo=U(!1),Wl=U(!1),h3=U(!0),hr=jf(gs({xs:460},Mf)),Ol=ym(),m8=tm(),B3=w(()=>Ol.height.value-Ol.width.value/cl>180),h8=lm(Ce?document.body:null),Xl=Sf(),A3=w(()=>{var e,l;return["INPUT","TEXTAREA"].includes(((e=Xl.value)==null?void 0:e.tagName)||"")||((l=Xl.value)==null?void 0:l.classList.contains("CodeMirror-code"))}),v3=w(()=>{var e;return["BUTTON","A"].includes(((e=Xl.value)==null?void 0:e.tagName)||"")});Me("slidev-camera","default");Me("slidev-mic","default");const kn=Me("slidev-scale",0),ee=Me("slidev-show-overview",!1),Mt=Me("slidev-presenter-cursor",!0),Jc=Me("slidev-show-editor",!1);Me("slidev-editor-width",Ce?window.innerWidth*.4:100);const B8=Qi(ee);function Xc(e,l,o,t=r=>r){return e*t(.5-l*(.5-o))}function D3(e){return[-e[0],-e[1]]}function be(e,l){return[e[0]+l[0],e[1]+l[1]]}function ge(e,l){return[e[0]-l[0],e[1]-l[1]]}function Fe(e,l){return[e[0]*l,e[1]*l]}function g3(e,l){return[e[0]/l,e[1]/l]}function Ao(e){return[e[1],-e[0]]}function C3(e,l){return e[0]*l[0]+e[1]*l[1]}function _3(e,l){return e[0]===l[0]&&e[1]===l[1]}function E3(e){return Math.hypot(e[0],e[1])}function F3(e){return e[0]*e[0]+e[1]*e[1]}function Gc(e,l){return F3(ge(e,l))}function A8(e){return g3(e,E3(e))}function b3(e,l){return Math.hypot(e[1]-l[1],e[0]-l[0])}function vo(e,l,o){let t=Math.sin(o),r=Math.cos(o),a=e[0]-l[0],c=e[1]-l[1],p=a*r-c*t,i=a*t+c*r;return[p+l[0],i+l[1]]}function Br(e,l,o){return be(e,Fe(ge(l,e),o))}function Qc(e,l,o){return be(e,Fe(l,o))}var{min:Vl,PI:x3}=Math,sp=.275,Do=x3+1e-4;function k3(e,l={}){let{size:o=16,smoothing:t=.5,thinning:r=.5,simulatePressure:a=!0,easing:c=os=>os,start:p={},end:i={},last:y=!1}=l,{cap:u=!0,easing:f=os=>os*(2-os)}=p,{cap:d=!0,easing:m=os=>--os*os*os+1}=i;if(e.length===0||o<=0)return[];let B=e[e.length-1].runningLength,C=p.taper===!1?0:p.taper===!0?Math.max(o,B):p.taper,g=i.taper===!1?0:i.taper===!0?Math.max(o,B):i.taper,b=Math.pow(o*t,2),E=[],F=[],k=e.slice(0,10).reduce((os,ns)=>{let ls=ns.pressure;if(a){let hs=Vl(1,ns.distance/o),Le=Vl(1,1-hs);ls=Vl(1,os+(Le-os)*(hs*sp))}return(os+ls)/2},e[0].pressure),I=Xc(o,r,e[e.length-1].pressure,c),T,J=e[0].vector,as=e[0].point,us=as,ms=as,As=us;for(let os=0;os<e.length;os++){let{pressure:ns}=e[os],{point:ls,vector:hs,distance:Le,runningLength:Gs}=e[os];if(os<e.length-1&&B-Gs<3)continue;if(r){if(a){let j=Vl(1,Le/o),Q=Vl(1,1-j);ns=Vl(1,k+(Q-k)*(j*sp))}I=Xc(o,r,ns,c)}else I=o/2;T===void 0&&(T=I);let Ae=Gs<C?f(Gs/C):1,ne=B-Gs<g?m((B-Gs)/g):1;if(I=Math.max(.01,I*Math.min(Ae,ne)),os===e.length-1){let j=Fe(Ao(hs),I);E.push(ge(ls,j)),F.push(be(ls,j));continue}let Tl=e[os+1].vector,O=C3(hs,Tl);if(O<0){let j=Fe(Ao(J),I);for(let Q=1/13,Ds=0;Ds<=1;Ds+=Q)ms=vo(ge(ls,j),ls,Do*Ds),E.push(ms),As=vo(be(ls,j),ls,Do*-Ds),F.push(As);as=ms,us=As;continue}let X=Fe(Ao(Br(Tl,hs,O)),I);ms=ge(ls,X),(os<=1||Gc(as,ms)>b)&&(E.push(ms),as=ms),As=be(ls,X),(os<=1||Gc(us,As)>b)&&(F.push(As),us=As),k=ns,J=hs}let Ls=e[0].point.slice(0,2),js=e.length>1?e[e.length-1].point.slice(0,2):be(e[0].point,[1,1]),Ys=[],xs=[];if(e.length===1){if(!(C||g)||y){let os=Qc(Ls,A8(Ao(ge(Ls,js))),-(T||I)),ns=[];for(let ls=1/13,hs=ls;hs<=1;hs+=ls)ns.push(vo(os,Ls,Do*2*hs));return ns}}else{if(!(C||g&&e.length===1))if(u)for(let ns=1/13,ls=ns;ls<=1;ls+=ns){let hs=vo(F[0],Ls,Do*ls);Ys.push(hs)}else{let ns=ge(E[0],F[0]),ls=Fe(ns,.5),hs=Fe(ns,.51);Ys.push(ge(Ls,ls),ge(Ls,hs),be(Ls,hs),be(Ls,ls))}let os=Ao(D3(e[e.length-1].vector));if(g||C&&e.length===1)xs.push(js);else if(d){let ns=Qc(js,os,I);for(let ls=1/29,hs=ls;hs<1;hs+=ls)xs.push(vo(ns,js,Do*3*hs))}else xs.push(be(js,Fe(os,I)),be(js,Fe(os,I*.99)),ge(js,Fe(os,I*.99)),ge(js,Fe(os,I)))}return E.concat(xs,F.reverse(),Ys)}function w3(e,l={}){var o;let{streamline:t=.5,size:r=16,last:a=!1}=l;if(e.length===0)return[];let c=.15+(1-t)*.85,p=Array.isArray(e[0])?e:e.map(({x:m,y:B,pressure:C=.5})=>[m,B,C]);if(p.length===2){let m=p[1];p=p.slice(0,-1);for(let B=1;B<5;B++)p.push(Br(p[0],m,B/4))}p.length===1&&(p=[...p,[...be(p[0],[1,1]),...p[0].slice(2)]]);let i=[{point:[p[0][0],p[0][1]],pressure:p[0][2]>=0?p[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,f=i[0],d=p.length-1;for(let m=1;m<p.length;m++){let B=a&&m===d?p[m].slice(0,2):Br(f.point,p[m],c);if(_3(f.point,B))continue;let C=b3(B,f.point);if(u+=C,m<d&&!y){if(u<r)continue;y=!0}f={point:B,pressure:p[m][2]>=0?p[m][2]:.5,vector:A8(ge(f.point,B)),distance:C,runningLength:u},i.push(f)}return i[0].vector=((o=i[1])==null?void 0:o.vector)||[0,0],i}function $3(e,l={}){return k3(w3(e,l),l)}var O3=$3,S3=Object.defineProperty,ep=Object.getOwnPropertySymbols,M3=Object.prototype.hasOwnProperty,P3=Object.prototype.propertyIsEnumerable,lp=(e,l,o)=>l in e?S3(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Ar=(e,l)=>{for(var o in l||(l={}))M3.call(l,o)&&lp(e,o,l[o]);if(ep)for(var o of ep(l))P3.call(l,o)&&lp(e,o,l[o]);return e},L3=()=>({events:{},emit(e,...l){(this.events[e]||[]).forEach(o=>o(...l))},on(e,l){return(this.events[e]=this.events[e]||[]).push(l),()=>this.events[e]=(this.events[e]||[]).filter(o=>o!==l)}});function Un(e,l){return e-l}function T3(e){return e<0?-1:1}function qn(e){return[Math.abs(e),T3(e)]}function v8(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var N3=2,qe=N3,io=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var l,o;const t=this.drauu.el,r=(l=this.drauu.options.coordinateScale)!=null?l:1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*r,y:(e.pageY-a.top)*r,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const c=a.matrixTransform((o=t.getScreenCTM())==null?void 0:o.inverse());return{x:c.x*r,y:c.y*r,pressure:e.pressure}}}createElement(e,l){var o;const t=document.createElementNS("http://www.w3.org/2000/svg",e),r=l?Ar(Ar({},this.brush),l):this.brush;return t.setAttribute("fill",(o=r.fill)!=null?o:"transparent"),t.setAttribute("stroke",r.color),t.setAttribute("stroke-width",r.size.toString()),t.setAttribute("stroke-linecap","round"),r.dasharray&&t.setAttribute("stroke-dasharray",r.dasharray),t}attr(e,l){this.el.setAttribute(e,typeof l=="string"?l:l.toFixed(qe))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},j3=class extends io{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const l=O3(e,Ar({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!l.length)return"";const o=l.reduce((t,[r,a],c,p)=>{const[i,y]=p[(c+1)%p.length];return t.push(r,a,(r+i)/2,(a+y)/2),t},["M",...l[0],"Q"]);return o.push("Z"),o.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},V3=class extends io{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,o]=qn(e.x-this.start.x),[t,r]=qn(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(l,t);l=a,t=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",l),this.attr("ry",t);else{const[a,c]=[this.start.x,this.start.x+l*o].sort(Un),[p,i]=[this.start.y,this.start.y+t*r].sort(Un);this.attr("cx",(a+c)/2),this.attr("cy",(p+i)/2),this.attr("rx",(c-a)/2),this.attr("ry",(i-p)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function D8(e,l){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",l),t.setAttribute("id",e),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(r),o.appendChild(t),o}var R3=class extends io{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const l=v8(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(D8(l,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${l})`),o}return this.el}onMove(e){if(!this.el)return!1;let{x:l,y:o}=e;if(this.shiftPressed){const t=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let a=t/r;a=Math.round(a),Math.abs(a)<=1?(l=this.start.x+r*a,o=this.start.y+r):(l=this.start.x+t,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-l),this.attr("y1",this.start.y*2-o),this.attr("x2",l),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",l),this.attr("y2",o)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},I3=class extends io{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,o]=qn(e.x-this.start.x),[t,r]=qn(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(l,t);l=a,t=a}if(this.altPressed)this.attr("x",this.start.x-l),this.attr("y",this.start.y-t),this.attr("width",l*2),this.attr("height",t*2);else{const[a,c]=[this.start.x,this.start.x+l*o].sort(Un),[p,i]=[this.start.y,this.start.y+t*r].sort(Un);this.attr("x",a),this.attr("y",p),this.attr("width",c-a),this.attr("height",i-p)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function z3(e,l){const o=e.x-l.x,t=e.y-l.y;return o*o+t*t}function H3(e,l,o){let t=l.x,r=l.y,a=o.x-t,c=o.y-r;if(a!==0||c!==0){const p=((e.x-t)*a+(e.y-r)*c)/(a*a+c*c);p>1?(t=o.x,r=o.y):p>0&&(t+=a*p,r+=c*p)}return a=e.x-t,c=e.y-r,a*a+c*c}function U3(e,l){let o=e[0];const t=[o];let r;for(let a=1,c=e.length;a<c;a++)r=e[a],z3(r,o)>l&&(t.push(r),o=r);return o!==r&&r&&t.push(r),t}function vr(e,l,o,t,r){let a=t,c=0;for(let p=l+1;p<o;p++){const i=H3(e[p],e[l],e[o]);i>a&&(c=p,a=i)}a>t&&(c-l>1&&vr(e,l,c,t,r),r.push(e[c]),o-c>1&&vr(e,c,o,t,r))}function q3(e,l){const o=e.length-1,t=[e[0]];return vr(e,0,o,l,t),t.push(e[o]),t}function op(e,l,o=!1){if(e.length<=2)return e;const t=l!==void 0?l*l:1;return e=o?e:U3(e,t),e=q3(e,t),e}var W3=class extends io{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=v8();const l=D8(this.arrowId,this.brush.color);this.el.appendChild(l)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=op(this.points,1,!0),this.count=0),this.attr("d",tp(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",tp(op(this.points,1,!0))),!e.getTotalLength()))}};function K3(e,l){const o=l.x-e.x,t=l.y-e.y;return{length:Math.sqrt(Math.pow(o,2)+Math.pow(t,2)),angle:Math.atan2(t,o)}}function np(e,l,o,t){const r=l||e,a=o||e,c=.2,p=K3(r,a),i=p.angle+(t?Math.PI:0),y=p.length*c,u=e.x+Math.cos(i)*y,f=e.y+Math.sin(i)*y;return{x:u,y:f}}function Y3(e,l,o){const t=np(o[l-1],o[l-2],e),r=np(e,o[l-1],o[l+1],!0);return`C ${t.x.toFixed(qe)},${t.y.toFixed(qe)} ${r.x.toFixed(qe)},${r.y.toFixed(qe)} ${e.x.toFixed(qe)},${e.y.toFixed(qe)}`}function tp(e){return e.reduce((l,o,t,r)=>t===0?`M ${o.x.toFixed(qe)},${o.y.toFixed(qe)}`:`${l} ${Y3(o,t,r)}`,"")}var Z3=class extends io{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const l=(o,t)=>{if(o&&o.length)for(let r=0;r<o.length;r++){const a=o[r];if(a.getTotalLength){const c=a.getTotalLength();for(let p=0;p<this.pathSubFactor;p++){const i=a.getPointAtLength(c*p/this.pathSubFactor),y=a.getPointAtLength(c*(p+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:y.x,y1:i.y,y2:y.y,segment:p,element:t||a})}}else a.children&&l(a.children,a)}};e&&l(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const l=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,l}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let l=0;l<this.pathFragments.length;l++){const o=this.pathFragments[l],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,t)&&(o.element.remove(),e.push(l))}return e.length&&(this.pathFragments=this.pathFragments.filter((l,o)=>!e.includes(o))),e.length>0}lineLineIntersect(e,l){const o=e.x1,t=e.x2,r=l.x1,a=l.x2,c=e.y1,p=e.y2,i=l.y1,y=l.y2,u=(o-t)*(i-y)-(c-p)*(r-a),f=(o*p-c*t)*(r-a)-(o-t)*(r*y-i*a),d=(o*p-c*t)*(i-y)-(c-p)*(r*y-i*a),m=(B,C,g)=>B>=C&&B<=g?!0:B>=g&&B<=C;if(u===0)return!1;{const B={x:f/u,y:d/u};return m(B.x,o,t)&&m(B.y,c,p)&&m(B.x,r,a)&&m(B.y,i,y)}}};function J3(e){return{draw:new W3(e),stylus:new j3(e),line:new R3(e),rectangle:new I3(e),ellipse:new V3(e),eraseLine:new Z3(e)}}var X3=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=L3(),this._models=J3(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,l){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(l)||this.el,t=this.eventStart.bind(this),r=this.eventMove.bind(this),a=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,l){return this._emitter.on(e,l)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const l=this.model._eventUp(e);l?(l instanceof Element&&l!==this._currentNode&&(this._currentNode=l),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function G3(e){return new X3(e)}const Dr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Re=Me("slidev-drawing-enabled",!1),IF=Me("slidev-drawing-pinned",!1),Q3=U(!1),sh=U(!1),eh=U(!1),Jo=U(!1),bl=Xd(Me("slidev-drawing-brush",{color:Dr[0],size:4,mode:"stylus"})),rp=U("stylus"),g8=w(()=>Es.drawings.syncAll||je.value);let Xo=!1;const go=w({get(){return rp.value},set(e){rp.value=e,e==="arrow"?(bl.mode="line",bl.arrowEnd=!0):(bl.mode=e,bl.arrowEnd=!1)}}),lh=Ts({brush:bl,acceptsInputTypes:w(()=>Re.value?void 0:["pen"]),coordinateTransform:!1}),le=et(G3(lh));function oh(){le.clear(),g8.value&&Ji(Is.value,"")}function C8(){var e;sh.value=le.canRedo(),Q3.value=le.canUndo(),eh.value=!!((e=le.el)!=null&&e.children.length)}function nh(e){Xo=!0;const l=Rn[e||Is.value];l!=null?le.load(l):le.clear(),Xo=!1}le.on("changed",()=>{if(C8(),!Xo){const e=le.dump(),l=Is.value;(Rn[l]||"")!==e&&g8.value&&Ji(l,le.dump())}});Kd(e=>{Xo=!0,e[Is.value]!=null&&le.load(e[Is.value]||""),Xo=!1,C8()});Ws(()=>{is(Is,()=>{!le.mounted||nh()},{immediate:!0})});le.on("start",()=>Jo.value=!0);le.on("end",()=>Jo.value=!1);window.addEventListener("keydown",e=>{if(!Re.value)return;const l=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let o=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?le.redo():le.undo():e.code==="Escape"?Re.value=!1:e.code==="KeyL"&&l?go.value="line":e.code==="KeyA"&&l?go.value="arrow":e.code==="KeyS"&&l?go.value="stylus":e.code==="KeyR"&&l?go.value="rectangle":e.code==="KeyE"&&l?go.value="ellipse":e.code==="KeyC"&&l?oh():e.code.startsWith("Digit")&&l&&+e.code[5]<=Dr.length?bl.color=Dr[+e.code[5]-1]:o=!1,o&&(e.preventDefault(),e.stopPropagation())},!1);const ap=Hf(),Pt=Me("slidev-color-schema","auto"),gr=w(()=>Es.colorSchema!=="auto"),ca=w({get(){return gr.value?Es.colorSchema==="dark":Pt.value==="auto"?ap.value:Pt.value==="dark"},set(e){gr.value||(Pt.value=e===ap.value?"auto":e?"dark":"light")}}),_8=Qi(ca);Ce&&is(ca,e=>{const l=document.querySelector("html");l.classList.toggle("dark",e),l.classList.toggle("light",!e)},{immediate:!0});function th(){return[]}const wn=U(1),$n=w(()=>Rs.length-1),me=U(0),pa=U(0);function rh(){me.value>wn.value&&(me.value-=1)}function ah(){me.value<$n.value&&(me.value+=1)}function ch(){if(me.value>wn.value){let e=me.value-pa.value;e<wn.value&&(e=wn.value),me.value=e}}function ph(){if(me.value<$n.value){let e=me.value+pa.value;e>$n.value&&(e=$n.value),me.value=e}}const E8=Vs(ie(A3),ie(v3),h3);function ih(e,l,o=!1){typeof e=="string"&&(e=m8[e]);const t=Vs(e,E8);let r=0,a;const c=()=>{if(clearTimeout(a),!t.value){r=0;return}o&&(a=setTimeout(c,Math.max(1e3-r*250,150)),r++),l()};return is(t,c,{flush:"sync"})}function yh(e,l){return Of(e,o=>{!E8.value||o.repeat||l()})}function uh(){const e=th(),{escape:l,space:o,shift:t,left:r,right:a,up:c,down:p,enter:i,d:y,g:u,o:f}=m8;new Map([{key:Vs(o,ie(t)),fn:il,autoRepeat:!0},{key:Vs(o,t),fn:yl,autoRepeat:!0},{key:Vs(a,ie(t),ie(ee)),fn:il,autoRepeat:!0},{key:Vs(r,ie(t),ie(ee)),fn:yl,autoRepeat:!0},{key:"pageDown",fn:il,autoRepeat:!0},{key:"pageUp",fn:yl,autoRepeat:!0},{key:Vs(c,ie(ee)),fn:()=>sn(!1),autoRepeat:!0},{key:Vs(p,ie(ee)),fn:Qo,autoRepeat:!0},{key:Vs(r,t),fn:()=>sn(!1),autoRepeat:!0},{key:Vs(a,t),fn:Qo,autoRepeat:!0},{key:Vs(y,ie(Re)),fn:_8},{key:Vs(f,ie(Re)),fn:B8},{key:Vs(l,ie(Re)),fn:()=>ee.value=!1},{key:Vs(u,ie(Re)),fn:()=>Wl.value=!Wl.value},{key:Vs(r,ee),fn:rh},{key:Vs(a,ee),fn:ah},{key:Vs(c,ee),fn:ch},{key:Vs(p,ee),fn:ph},{key:Vs(i,ee),fn:()=>{no(me.value),ee.value=!1}},...e].map(m=>[m.key,m])).forEach(m=>{m.fn&&ih(m.key,m.fn,m.autoRepeat)}),yh("f",()=>h8.toggle())}const dh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fh=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),mh=[fh];function hh(e,l){return v(),K("svg",dh,mh)}var Bh={name:"carbon-close",render:hh};function ia(e){var o,t;const l=(t=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:t.no;return l!=null?`slidev-page-${l}`:""}const F8=bs({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const l=e;x($);const o=U(),t=em(o),r=w(()=>l.width?l.width:t.width.value),a=w(()=>l.width?l.width/cl:t.height.value);l.width&&nn(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${a.value}px`)});const c=w(()=>r.value/a.value),p=w(()=>l.scale?l.scale:c.value<cl?r.value/$l:a.value*cl/$l),i=w(()=>({height:`${Ki}px`,width:`${$l}px`,transform:`translate(-50%, -50%) scale(${p.value})`})),y=w(()=>({"select-none":!Es.selectable,"slidev-code-line-numbers":Es.lineNumbers}));return de(Wi,p),(u,f)=>(v(),K("div",{id:"slide-container",ref_key:"root",ref:o,class:Ns(D(y))},[s("div",{id:"slide-content",style:oe(D(i))},[Ze(u.$slots,"default")],4),Ze(u.$slots,"controls")],2))}});var ya=bs({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:l}){const o=Ve(e,"clicks",l),t=Ve(e,"clicksElements",l),r=Ve(e,"clicksDisabled",l),a=Ve(e,"clicksOrderMap",l);t.value.length=0,de(Pd,e.route),de(Ld,e.context),de(Oo,o),de(So,r),de(Cl,t),de(cr,a)},render(){var e,l;return this.$props.is?Oe(this.$props.is):(l=(e=this.$slots)==null?void 0:e.default)==null?void 0:l.call(e)}});const Ah=["innerHTML"],b8=bs({__name:"DrawingPreview",props:{page:null},setup(e){return x($),(l,o)=>D(Rn)[e.page]?(v(),K("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:D(Rn)[e.page]},null,8,Ah)):fs("v-if",!0)}});var vh=Object.freeze(Object.defineProperty({__proto__:null,default:b8},Symbol.toStringTag,{value:"Module"}));const Dh={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},gh=["onClick"],Ch=bs({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:l}){const o=e;x($);const t=Ve(o,"modelValue",l);function r(){t.value=!1}function a(m){no(m),r()}function c(m){return m===me.value}const p=hr.smaller("xs"),i=hr.smaller("sm"),y=4*16*2,u=2*16,f=w(()=>p.value?Ol.width.value-y:i.value?(Ol.width.value-y-u)/2:300),d=w(()=>Math.floor((Ol.width.value-y)/(f.value+u)));return nn(()=>{me.value=Is.value,pa.value=d.value}),(m,B)=>{const C=Bh;return v(),K(Cs,null,[He(s("div",Dh,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:oe(`grid-template-columns: repeat(auto-fit,minmax(${D(f)}px,1fr))`)},[(v(!0),K(Cs,null,tn(D(Rs).slice(0,-1),(g,b)=>(v(),K("div",{key:g.path,class:"relative"},[s("div",{class:Ns(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(b+1)}]),onClick:E=>a(+g.path)},[(v(),S(F8,{key:g.path,width:D(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:N(()=>[Z(D(ya),{is:g==null?void 0:g.component,"clicks-disabled":!0,class:Ns(D(ia)(g)),route:g,context:"overview"},null,8,["is","class","route"]),Z(b8,{page:+g.path},null,8,["page"])]),_:2},1032,["width"]))],10,gh),s("div",{class:"absolute top-0 opacity-50",style:oe(`left: ${D(f)+5}px`)},Hs(b+1),5)]))),128))],4)],512),[[Ui,D(t)]]),D(t)?(v(),K("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[Z(C)])):fs("v-if",!0)],64)}}});var _h="/vue-3-practices/assets/logo.b72bde5d.png";const Eh={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Fh=bs({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:l}){const o=e;x($);const t=Ve(o,"modelValue",l);function r(){t.value=!1}return(a,c)=>(v(),S(gi,null,[D(t)?(v(),K("div",Eh,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=p=>r())}),s("div",{class:Ns(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[Ze(a.$slots,"default")],2)])):fs("v-if",!0)],1024))}});const bh={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},xh=["innerHTML"],kh=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:_h,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),n("dev ")])])],-1),wh=bs({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:l}){const o=e;x($);const t=Ve(o,"modelValue",l),r=w(()=>typeof Es.info=="string");return(a,c)=>(v(),S(Fh,{modelValue:D(t),"onUpdate:modelValue":c[0]||(c[0]=p=>Fs(t)?t.value=p:null),class:"px-6 py-4"},{default:N(()=>[s("div",bh,[D(r)?(v(),K("div",{key:0,class:"mb-4",innerHTML:D(Es).info},null,8,xh)):fs("v-if",!0),kh])]),_:1},8,["modelValue"]))}}),$h=["disabled","onKeydown"],Oh=bs({__name:"Goto",setup(e){x($);const l=U(),o=U(""),t=w(()=>{if(o.value.startsWith("/"))return!!Rs.find(c=>c.path===o.value.substring(1));{const c=+o.value;return!isNaN(c)&&c>0&&c<=V8.value}});function r(){t.value&&(o.value.startsWith("/")?no(o.value.substring(1)):no(+o.value)),a()}function a(){Wl.value=!1}return is(Wl,async c=>{var p,i;c?(await Ws(),o.value="",(p=l.value)==null||p.focus()):(i=l.value)==null||i.blur()}),is(o,c=>{c.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(c,p)=>(v(),K("div",{id:"slidev-goto-dialog",class:Ns(["fixed right-5 bg-main transform transition-all",D(Wl)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[He(s("input",{ref_key:"input",ref:l,"onUpdate:modelValue":p[0]||(p[0]=i=>o.value=i),type:"text",disabled:!D(Wl),class:Ns(["outline-none bg-transparent",{"text-red-400":!D(t)&&o.value}]),placeholder:"Goto...",onKeydown:[fc(r,["enter"]),fc(a,["escape"])],onBlur:a},null,42,$h),[[Yo,o.value]])],2))}}),Sh=bs({__name:"Controls",setup(e){x($);const l=ze(),o=ze();return(t,r)=>(v(),K(Cs,null,[Z(Ch,{modelValue:D(ee),"onUpdate:modelValue":r[0]||(r[0]=a=>Fs(ee)?ee.value=a:null)},null,8,["modelValue"]),Z(Oh),D(l)?(v(),S(D(l),{key:0})):fs("v-if",!0),D(o)?(v(),S(D(o),{key:1,modelValue:D(St),"onUpdate:modelValue":r[1]||(r[1]=a=>Fs(St)?St.value=a:null)},null,8,["modelValue"])):fs("v-if",!0),D(Es).info?(v(),S(wh,{key:2,modelValue:D(Lo),"onUpdate:modelValue":r[2]||(r[2]=a=>Fs(Lo)?Lo.value=a:null)},null,8,["modelValue"])):fs("v-if",!0)],64))}}),Mh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ph=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Lh=[Ph];function Th(e,l){return v(),K("svg",Mh,Lh)}var Nh={name:"carbon-settings-adjust",render:Th};const jh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vh=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Rh=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ih=[Vh,Rh];function zh(e,l){return v(),K("svg",jh,Ih)}var Hh={name:"carbon-information",render:zh};const Uh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qh=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Wh=[qh];function Kh(e,l){return v(),K("svg",Uh,Wh)}var Yh={name:"carbon-download",render:Kh};const Zh={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jh=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Xh=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Gh=[Jh,Xh];function Qh(e,l){return v(),K("svg",Zh,Gh)}var sB={name:"carbon-user-speaker",render:Qh};const eB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lB=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),oB=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),nB=[lB,oB];function tB(e,l){return v(),K("svg",eB,nB)}var rB={name:"carbon-presentation-file",render:tB};const aB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cB=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),pB=[cB];function iB(e,l){return v(),K("svg",aB,pB)}var yB={name:"carbon-pen",render:iB};const uB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},dB=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),fB=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),mB=[dB,fB];function hB(e,l){return v(),K("svg",uB,mB)}var BB={name:"ph-cursor-duotone",render:hB};const AB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},vB=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),DB=[vB];function gB(e,l){return v(),K("svg",AB,DB)}var x8={name:"ph-cursor-fill",render:gB};const CB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_B=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),EB=[_B];function FB(e,l){return v(),K("svg",CB,EB)}var bB={name:"carbon-sun",render:FB};const xB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kB=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),wB=[kB];function $B(e,l){return v(),K("svg",xB,wB)}var OB={name:"carbon-moon",render:$B};const SB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},MB=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),PB=[MB];function LB(e,l){return v(),K("svg",SB,PB)}var TB={name:"carbon-apps",render:LB};const NB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jB=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),VB=[jB];function RB(e,l){return v(),K("svg",NB,VB)}var k8={name:"carbon-arrow-right",render:RB};const IB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zB=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),HB=[zB];function UB(e,l){return v(),K("svg",IB,HB)}var qB={name:"carbon-arrow-left",render:UB};const WB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},KB=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),YB=[KB];function ZB(e,l){return v(),K("svg",WB,YB)}var JB={name:"carbon-maximize",render:ZB};const XB={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},GB=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),QB=[GB];function sA(e,l){return v(),K("svg",XB,QB)}var eA={name:"carbon-minimize",render:sA};const lA={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},oA=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),nA=[oA];function tA(e,l){return v(),K("svg",lA,nA)}var rA={name:"carbon-checkmark",render:tA};var Pe=(e,l)=>{const o=e.__vccOpts||e;for(const[t,r]of l)o[t]=r;return o};const aA={class:"select-list"},cA={class:"title"},pA={class:"items"},iA=["onClick"],yA=bs({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:l}){const o=e;x($);const t=Ve(o,"modelValue",l,{passive:!0});return(r,a)=>{const c=rA;return v(),K("div",aA,[s("div",cA,Hs(e.title),1),s("div",pA,[(v(!0),K(Cs,null,tn(e.items,p=>(v(),K("div",{key:p.value,class:Ns(["item",{active:D(t)===p.value}]),onClick:()=>{var i;t.value=p.value,(i=p.onClick)==null||i.call(p)}},[Z(c,{class:Ns(["text-green-500",{"opacity-0":D(t)!==p.value}])},null,8,["class"]),n(" "+Hs(p.display||p.value),1)],10,iA))),128))])])}}});var uA=Pe(yA,[["__scopeId","data-v-0a01a24c"]]);const dA={class:"text-sm"},fA=bs({__name:"Settings",setup(e){x($);const l=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,t)=>(v(),K("div",dA,[Z(uA,{modelValue:D(kn),"onUpdate:modelValue":t[0]||(t[0]=r=>Fs(kn)?kn.value=r:null),title:"Scale",items:l},null,8,["modelValue"])]))}}),mA={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},hA=bs({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:l}){const o=e;x($);const t=Ve(o,"modelValue",l,{passive:!0}),r=U();return wf(r,()=>{t.value=!1}),(a,c)=>(v(),K("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:Ns({disabled:e.disabled}),onClick:c[0]||(c[0]=p=>t.value=!D(t))},[Ze(a.$slots,"button",{class:Ns({disabled:e.disabled})})],2),(v(),S(gi,null,[D(t)?(v(),K("div",mA,[Ze(a.$slots,"menu")])):fs("v-if",!0)],1024))],512))}}),BA={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},gn={__name:"VerticalDivider",setup(e){return x($),(l,o)=>(v(),K("div",BA))}};var AA={render(){return[]}};const vA={class:"icon-btn"},DA={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},gA={class:"my-auto"},CA={class:"opacity-50"},_A=bs({__name:"NavControls",props:{persist:{default:!1}},setup(e){const l=e;x($);const o=hr.smaller("md"),{isFullscreen:t,toggle:r}=h8,a=w(()=>_r.value?`?password=${_r.value}`:""),c=w(()=>`/presenter/${Is.value}${a.value}`),p=w(()=>`/${Is.value}${a.value}`),i=U(),y=()=>{i.value&&Xl.value&&i.value.contains(Xl.value)&&Xl.value.blur()},u=w(()=>l.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=ze(),d=ze();return co(()=>import("./DrawingControls.6acfe06b.js"),[]).then(m=>d.value=m.default),(m,B)=>{const C=eA,g=JB,b=qB,E=k8,F=TB,k=OB,I=bB,T=x8,J=BB,as=yB,us=rB,ms=Tn("RouterLink"),As=sB,Ls=Yh,js=Hh,Ys=Nh;return v(),K("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[s("div",{class:Ns(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",D(u)]),onMouseleave:y},[D(Ue)?fs("v-if",!0):(v(),K("button",{key:0,class:"icon-btn",onClick:B[0]||(B[0]=(...xs)=>D(r)&&D(r)(...xs))},[D(t)?(v(),S(C,{key:0})):(v(),S(g,{key:1}))])),s("button",{class:Ns(["icon-btn",{disabled:!D(Z_)}]),onClick:B[1]||(B[1]=(...xs)=>D(yl)&&D(yl)(...xs))},[Z(b)],2),s("button",{class:Ns(["icon-btn",{disabled:!D(Y_)}]),title:"Next",onClick:B[2]||(B[2]=(...xs)=>D(il)&&D(il)(...xs))},[Z(E)],2),D(Ue)?fs("v-if",!0):(v(),K("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:B[3]||(B[3]=xs=>D(B8)())},[Z(F)])),D(gr)?fs("v-if",!0):(v(),K("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:B[4]||(B[4]=xs=>D(_8)())},[D(ca)?(v(),S(k,{key:0})):(v(),S(I,{key:1}))])),Z(gn),D(Ue)?fs("v-if",!0):(v(),K(Cs,{key:3},[!D(je)&&!D(o)&&D(f)?(v(),K(Cs,{key:0},[Z(D(f)),Z(gn)],64)):fs("v-if",!0),D(je)?(v(),K("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:B[5]||(B[5]=xs=>Mt.value=!D(Mt))},[D(Mt)?(v(),S(T,{key:0})):(v(),S(J,{key:1,class:"opacity-50"}))])):fs("v-if",!0)],64)),!D(Es).drawings.presenterOnly&&!D(Ue)?(v(),K(Cs,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:B[6]||(B[6]=xs=>Re.value=!D(Re))},[Z(as),D(Re)?(v(),K("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:oe({background:D(bl).color})},null,4)):fs("v-if",!0)]),Z(gn)],64)):fs("v-if",!0),D(Ue)?fs("v-if",!0):(v(),K(Cs,{key:5},[D(je)?(v(),S(ms,{key:0,to:D(p),class:"icon-btn",title:"Play Mode"},{default:N(()=>[Z(us)]),_:1},8,["to"])):fs("v-if",!0),D(q_)?(v(),S(ms,{key:1,to:D(c),class:"icon-btn",title:"Presenter Mode"},{default:N(()=>[Z(As)]),_:1},8,["to"])):fs("v-if",!0),fs("v-if",!0)],64)),(v(),K(Cs,{key:6},[D(Es).download?(v(),K("button",{key:0,class:"icon-btn",onClick:B[8]||(B[8]=(...xs)=>D(Er)&&D(Er)(...xs))},[Z(Ls)])):fs("v-if",!0)],64)),!D(je)&&D(Es).info&&!D(Ue)?(v(),K("button",{key:7,class:"icon-btn",onClick:B[9]||(B[9]=xs=>Lo.value=!D(Lo))},[Z(js)])):fs("v-if",!0),!D(je)&&!D(Ue)?(v(),S(hA,{key:8},{button:N(()=>[s("button",vA,[Z(Ys)])]),menu:N(()=>[Z(fA)]),_:1})):fs("v-if",!0),D(Ue)?fs("v-if",!0):(v(),S(gn,{key:9})),s("div",DA,[s("div",gA,[n(Hs(D(Is))+" ",1),s("span",CA,"/ "+Hs(D(V8)),1)])]),Z(D(AA))],34)],512)}}});var w8={render(){return[]}},$8={render(){return[]}};const EA={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},FA=bs({__name:"PresenterMouse",setup(e){return x($),(l,o)=>{const t=x8;return D(kt).cursor?(v(),K("div",EA,[Z(t,{class:"absolute",style:oe({left:`${D(kt).cursor.x}%`,top:`${D(kt).cursor.y}%`})},null,8,["style"])])):fs("v-if",!0)}}}),bA=bs({__name:"SlidesShow",props:{context:null},setup(e){x($),is(ue,()=>{var o,t;((o=ue.value)==null?void 0:o.meta)&&ue.value.meta.preload!==!1&&(ue.value.meta.__preloaded=!0),((t=Lt.value)==null?void 0:t.meta)&&Lt.value.meta.preload!==!1&&(Lt.value.meta.__preloaded=!0)},{immediate:!0});const l=ze();return co(()=>import("./DrawingLayer.7e7dc7f3.js"),[]).then(o=>l.value=o.default),(o,t)=>(v(),K(Cs,null,[fs(" Global Bottom "),Z(D($8)),fs(" Slides "),(v(!0),K(Cs,null,tn(D(Rs),r=>{var a,c;return v(),K(Cs,{key:r.path},[((a=r.meta)==null?void 0:a.__preloaded)||r===D(ue)?He((v(),S(D(ya),{key:0,is:r==null?void 0:r.component,clicks:r===D(ue)?D(Se):0,"clicks-elements":((c=r.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Ns(D(ia)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ui,r===D(ue)]]):fs("v-if",!0)],64)}),128)),fs(" Global Top "),Z(D(w8)),D(l)?(v(),S(D(l),{key:0})):fs("v-if",!0),D(je)?fs("v-if",!0):(v(),S(FA,{key:1}))],64))}}),xA=bs({__name:"Play",setup(e){x($),uh();const l=U();function o(a){var c;Jc.value||((c=a.target)==null?void 0:c.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?il():yl())}G_(l);const t=w(()=>B3.value||Jc.value);ze();const r=ze();return co(()=>import("./DrawingControls.6acfe06b.js"),[]).then(a=>r.value=a.default),(a,c)=>(v(),K(Cs,null,[s("div",{id:"page-root",ref_key:"root",ref:l,class:"grid grid-cols-[1fr,max-content]",style:oe(D(Yi))},[Z(F8,{class:"w-full h-full",style:oe({background:"var(--slidev-slide-container-background, black)"}),width:D(ma)?D(Ol).width.value:void 0,scale:D(kn),onPointerdown:o},{default:N(()=>[Z(bA,{context:"slide"})]),controls:N(()=>[s("div",{class:Ns(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[D(t)?"opacity-100 right-0":"opacity-0 p-2",D(Jo)?"pointer-events-none":""]])},[Z(_A,{class:"m-auto",persist:D(t)},null,8,["persist"])],2),!D(Es).drawings.presenterOnly&&!D(Ue)&&D(r)?(v(),S(D(r),{key:0,class:"ml-0"})):fs("v-if",!0)]),_:1},8,["style","width","scale"]),fs("v-if",!0)],4),Z(Sh)],64))}});function O8(e){const l=w(()=>e.value.path),o=w(()=>Rs.length-1),t=w(()=>parseInt(l.value.split(/\//g).slice(-1)[0])||1),r=w(()=>ut(t.value)),a=w(()=>Rs.find(d=>d.path===`${t.value}`)),c=w(()=>{var d,m,B;return(B=(m=(d=a.value)==null?void 0:d.meta)==null?void 0:m.slide)==null?void 0:B.id}),p=w(()=>{var d,m;return(m=(d=a.value)==null?void 0:d.meta)==null?void 0:m.layout}),i=w(()=>Rs.find(d=>d.path===`${Math.min(Rs.length,t.value+1)}`)),y=w(()=>Rs.filter(d=>{var m,B;return(B=(m=d.meta)==null?void 0:m.slide)==null?void 0:B.title}).reduce((d,m)=>(ha(d,m),d),[])),u=w(()=>Ba(y.value,a.value)),f=w(()=>Aa(u.value));return{route:e,path:l,total:o,currentPage:t,currentPath:r,currentRoute:a,currentSlideId:c,currentLayout:p,nextRoute:i,rawTree:y,treeWithActiveStatuses:u,tree:f}}function S8(e,l,o){const t=U(0);Ws(()=>{he.afterEach(async()=>{await Ws(),t.value+=1})});const r=w(()=>{var i,y;return t.value,((y=(i=l.value)==null?void 0:i.meta)==null?void 0:y.__clicksElements)||[]}),a=w(()=>{var i,y,u;return+((u=(y=(i=l.value)==null?void 0:i.meta)==null?void 0:y.clicks)!=null?u:r.value.length)}),c=w(()=>o.value<Rs.length-1||e.value<a.value),p=w(()=>o.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:a,hasNext:c,hasPrev:p}}const kA=["id"],cp=bs({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:l}){const o=e,t=Ve(o,"clicksElements",l),r=w(()=>({height:`${Ki}px`,width:`${$l}px`})),a=ze();co(()=>Promise.resolve().then(function(){return vh}),void 0).then(y=>a.value=y.default);const c=w(()=>o.clicks),p=S8(c,o.nav.currentRoute,o.nav.currentPage),i=w(()=>`${o.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return de($,Ts({nav:gs(gs({},o.nav),p),configs:Es,themeConfigs:w(()=>Es.themeConfig)})),(y,u)=>{var f;return v(),K("div",{id:D(i),class:"slide-container",style:oe(D(r))},[Z(D($8)),Z(D(ya),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":D(t),"onUpdate:clicks-elements":u[0]||(u[0]=d=>Fs(t)?t.value=d:null),clicks:D(c),"clicks-disabled":!1,class:Ns(D(ia)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),D(a)?(v(),S(D(a),{key:0,page:+e.route.path},null,8,["page"])):fs("v-if",!0),Z(D(w8))],12,kA)}}}),wA=bs({__name:"PrintSlide",props:{route:null},setup(e){var a;const l=e;x($);const o=Ts(((a=l.route.meta)==null?void 0:a.__clicksElements)||[]),t=w(()=>l.route),r=O8(t);return(c,p)=>(v(),K(Cs,null,[Z(cp,{"clicks-elements":o,"onUpdate:clicks-elements":p[0]||(p[0]=i=>Fs(o)?o.value=i:null),clicks:0,nav:D(r),route:D(t)},null,8,["clicks-elements","nav","route"]),D(To)?fs("v-if",!0):(v(!0),K(Cs,{key:0},tn(o.length,i=>(v(),S(cp,{key:i,clicks:i,nav:D(r),route:D(t)},null,8,["clicks","nav","route"]))),128))],64))}});const $A={id:"print-content"},OA=bs({__name:"PrintContainer",props:{width:null},setup(e){const l=e;x($);const o=w(()=>l.width),t=w(()=>l.width/cl),r=w(()=>o.value/t.value),a=w(()=>r.value<cl?o.value/$l:t.value*cl/$l),c=Rs.slice(0,-1),p=w(()=>({"select-none":!Es.selectable,"slidev-code-line-numbers":Es.lineNumbers}));return de(Wi,a),(i,y)=>(v(),K("div",{id:"print-container",class:Ns(D(p))},[s("div",$A,[(v(!0),K(Cs,null,tn(D(c),u=>(v(),S(wA,{key:u.path,route:u},null,8,["route"]))),128))]),Ze(i.$slots,"controls")],2))}});const SA=bs({__name:"Print",setup(e){x($);const l=Fl.canvasWidth,o=Math.round(l/Fl.aspectRatio)+1;function t(r,{slots:a}){if(a.default)return Oe("style",a.default())}return nn(()=>{ma?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,a)=>(v(),K(Cs,null,[Z(t,null,{default:N(()=>[n(" @page { size: "+Hs(D(l))+"px "+Hs(o)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:oe(D(Yi))},[Z(OA,{class:"w-full h-full",style:oe({background:"var(--slidev-slide-container-background, black)"}),width:D(Ol).width.value},null,8,["style","width"])],4)],64))}});const MA={class:"slidev-layout end"},PA={__name:"end",setup(e){return x($),(l,o)=>(v(),K("div",MA," END "))}};var LA=Pe(PA,[["__scopeId","data-v-f6ffeaae"]]),TA="/vue-3-practices/logo.svg";function pp(e){return e.startsWith("/")?"/vue-3-practices/"+e.slice(1):e}function NA(e,l=!1){const o=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?l?`linear-gradient(#0005, #0008), url(${pp(e)})`:`url("${pp(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const jA={class:"my-auto w-full"},VA=bs({__name:"cover",props:{background:{default:""}},setup(e){const l=e;x($);const o=w(()=>NA(l.background,!0));return(t,r)=>(v(),K("div",{class:"slidev-layout cover",style:oe(D(o))},[s("div",jA,[Ze(t.$slots,"default")])],4))}}),RA=s("div",{class:"text-center"},[s("img",{src:TA,alt:"Vue",style:{width:"100px"},class:"inline"})],-1),IA=s("h1",null,"Vue.js",-1),zA={__name:"1",setup(e){const l={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}};return x($),(o,t)=>(v(),S(VA,q(H(l)),{default:N(()=>[RA,IA]),_:1},16))}},HA={class:"slidev-layout default"},W={__name:"default",setup(e){return x($),(l,o)=>(v(),K("div",HA,[Ze(l.$slots,"default")]))}},UA=s("h1",null,"\u30A2\u30B8\u30A7\u30F3\u30C0",-1),qA=s("ul",null,[s("li",null,[n("\u306F\u3058\u3081\u306B "),s("ul",null,[s("li",null,"Composition API, \u5B66\u7FD2\u74B0\u5883\u306A\u3069")])]),s("li",null,[n("\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42 "),s("ul",null,[s("li",null,"ref, reactive, toRefs, readonly \u306A\u3069")])]),s("li",null,[n("\u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09 "),s("ul",null,[s("li",null,"computed")])]),s("li",null,[n("\u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09 "),s("ul",null,[s("li",null,"watch")])]),s("li",null,[n("\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u69CB\u6587\u306E\u8AAC\u660E "),s("ul",null,[s("li",null,"mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model \u306A\u3069")])]),s("li",null,[n("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 "),s("ul",null,[s("li",null,"props, emit, slot \u306A\u3069")])]),s("li",null,[n("Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u5468\u8FBA\u30E9\u30A4\u30D6\u30E9\u30EA "),s("ul",null,[s("li",null,"throttle-debounce, fetch, Vue Router \u306A\u3069")])])],-1),WA={__name:"2",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[UA,qA]),_:1},16))}},KA=s("h1",null,"\u306F\u3058\u3081\u306B",-1),YA=s("h2",null,"Vue.js \u3068\u306F\uFF1F",-1),ZA=s("p",null,"Web \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u304A\u3051\u308B\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u3092\u69CB\u7BC9\u3059\u308B\u305F\u3081\u306E\u3001\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u306E JavaScript \u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3002",-1),JA={class:"pt-4 text-sm"},XA={href:"https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF"},GA=n(" \u516C\u5F0F\u30B5\u30A4\u30C8 "),QA={__name:"3",setup(e){const l={};return x($),(o,t)=>{const r=k8;return v(),S(W,q(H(l)),{default:N(()=>[KA,YA,ZA,s("div",JA,[s("a",XA,[Z(r,{class:"inline"}),GA])])]),_:1},16)}}},s9=s("h1",null,"\u672C\u8B1B\u5EA7\u306E\u3059\u3059\u3081\u304B\u305F",-1),e9=s("p",null,"\u3069\u306E\u3088\u3046\u306A\u5F62\u5F0F\u3067\u9032\u884C\u3059\u308B\u306E\u304B\u306E\u78BA\u8A8D",-1),l9=s("p",null,"\u30CF\u30F3\u30BA\u30AA\u30F3 \u2252 \u30B3\u30FC\u30C9\u3092\u66F8\u3044\u3066\u52D5\u304B\u3059\u3053\u3068\uFF081 \u56DE 10 \u5206\u7A0B\u5EA6\uFF09\u3092\u30E1\u30A4\u30F3\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002",-1),o9=s("p",null,"\u9069\u5B9C\u8AAC\u660E\u3092\u631F\u307F\u307E\u3059\u304C\u3001\u52D5\u304B\u306A\u3044\u3001\u5206\u304B\u3089\u306A\u3044\u3068\u304D\u3001\u305D\u306E\u4ED6\u306A\u3093\u3067\u3082\uFF08\u5927\u62B5\u306F\u4ED6\u306E\u53D7\u8B1B\u8005\u3082\u540C\u3058\u3053\u3068\u3092\u8003\u3048\u3066\u3044\u307E\u3059\uFF01\uFF09\u8CEA\u554F\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002",-1),n9={__name:"4",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[s9,e9,l9,o9]),_:1},16))}},t9=s("h1",null,"\u6E96\u5099",-1),r9=s("p",null,"\u4F7F\u7528\u3059\u308B\u30C4\u30FC\u30EB\u306E\u78BA\u8A8D\u3068\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7",-1),a9=s("p",null,[n("\u672C\u8B1B\u5EA7\u306B\u304A\u3051\u308B\u30CF\u30F3\u30BA\u30AA\u30F3\u3001\u6F14\u7FD2\u3001\u30B5\u30F3\u30D7\u30EB\u306E\u95B2\u89A7\u306F "),s("a",{href:"https://stackblitz.com/",target:"_blank",rel:"noopener"},"StackBlitz"),n(" \u3067\u304A\u3053\u306A\u3044\u307E\u3059\u3002")],-1),c9=s("p",null,"StackBlitz \u306F\u30D6\u30E9\u30A6\u30B6\u4E0A\u3067\u52D5\u4F5C\u3059\u308B\u30AA\u30F3\u30E9\u30A4\u30F3 IDE\uFF08\u7D71\u5408\u958B\u767A\u74B0\u5883\uFF09\u3067\u3059\u3002",-1),p9=s("p",null,"\u4EE5\u4E0B\u3092\u3084\u3063\u3066\u307F\u307E\u3057\u3087\u3046",-1),i9=s("ol",null,[s("li",null,[n("\u52D5\u4F5C\u74B0\u5883\u3092"),s("a",{href:"https://developer.stackblitz.com/docs/platform/browser-support/",target:"_blank",rel:"noopener"},"\u3053\u3061\u3089"),n("\u3067\u78BA\u8A8D\u3057\u3066\u30D6\u30E9\u30A6\u30B6\u3092\u7528\u610F")]),s("li",null,[n("\u7528\u610F\u3057\u305F\u30D6\u30E9\u30A6\u30B6\u3067 "),s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev"),n(" \u306B\u30A2\u30AF\u30BB\u30B9")]),s("li",null,[s("code",null,"<template>Hello World!</template>"),n(" \u3068\u66F8\u3044\u3066\u307F\u308B")]),s("li",null,[n("\u53F3\u30AB\u30E9\u30E0\u306B "),s("code",null,"Hello World!"),n(" \u3068\u8868\u793A\u3055\u308C\u308B\u3053\u3068\u3092\u78BA\u8A8D")])],-1),y9=s("p",null,"\u8B1B\u5E2B\u306F\u9069\u5B9C\u3042\u305F\u3089\u3057\u3044\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\u3064\u304F\u3063\u3066\u3044\u304D\u307E\u3059\u304C\u3001\u53D7\u8B1B\u8005\u306E\u7686\u3055\u3093\u306F\u4F5C\u6210\u3057\u305F\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\uFF08\u5168\u6D88\u3057\u3059\u308B\u306A\u3069\uFF09\u4F7F\u3044\u307E\u308F\u3057\u3066\u3082\u3089\u3063\u3066\u5927\u4E08\u592B\u3067\u3059\u3002",-1),u9={__name:"5",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[t9,r9,a9,c9,p9,i9,y9]),_:1},16))}},d9=s("h1",null,"Vue \u306B\u306F 2 \u3064\u306E\u66F8\u304D\u65B9\u304C\u3042\u308A\u307E\u3059",-1),f9=s("div",{class:"flex gap-8"},[s("div",null,[n(" Vue2 \u3067\u4E3B\u306B\u4F7F\u308F\u308C\u3066\u3044\u305F\u300COptions API\u300D "),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),m9=s("p",null,"\u73FE\u72B6\u3001Vue \u95A2\u9023\u306E\u8A18\u4E8B\u306F Options API \u3067\u89E3\u8AAC\u3055\u308C\u3066\u3044\u308B\u307B\u3046\u304C\u5927\u591A\u6570\u3067\u3042\u308A\u3001\u521D\u5B66\u8005\u306E\u65B9\u306F\u6DF7\u4E71\u3055\u308C\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002Vue2, 3 \u3069\u3061\u3089\u3067\u3082\u4E21 API \u306F\u4F7F\u3048\u307E\u3059\u304C\u3001\u672C\u8B1B\u5EA7\u3067\u306F\u4ECA\u5F8C\u4E3B\u6D41\u3068\u306A\u308B Composition API \u3092\u53D6\u308A\u6271\u3044\u307E\u3059\u3002",-1),h9={__name:"6",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[d9,f9,m9]),_:1},16))}};var B9="/vue-3-practices/apis.png";const A9=s("h1",null,"Composition API \u306E\u30E1\u30EA\u30C3\u30C8",-1),v9=s("p",null,"Vue \u306E\u6A5F\u80FD\u3067\u306F\u306A\u304F\u3001\u8AD6\u7406\u7684\u306A\u95A2\u5FC3\u4E8B\u3067\u30B3\u30FC\u30C9\u3092\u307E\u3068\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B",-1),D9=s("img",{src:B9,class:"h-5/6"},null,-1),g9={__name:"7",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[A9,v9,D9]),_:1},16))}},C9={inject:{$slidev:{from:$}},setup(){const e=U(0);return{count:e,increment:()=>{e.value+=1}}}},_9={class:"prose"};function E9(e,l,o,t,r,a){return v(),K("div",_9,[n(Hs(t.count)+" ",1),s("button",{onClick:l[0]||(l[0]=(...c)=>t.increment&&t.increment(...c))},"+")])}var F9=Pe(C9,[["render",E9]]);const b9=s("h1",null,"\u307E\u305A\u306F\u66F8\u3044\u3066\u307F\u308B",-1),x9={class:"flex gap-8"},k9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),w9=n(" \u52D5\u4F5C\u30B5\u30F3\u30D7\u30EB "),$9={__name:"8",setup(e){const l={};return x($),(o,t)=>{const r=F9;return v(),S(W,q(H(l)),{default:N(()=>[b9,s("div",x9,[k9,s("div",null,[w9,Z(r)])])]),_:1},16)}}},O9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42",-1),S9=s("div",{class:"flex gap-4"},[s("div",null,[s("video",{controls:"",loop:"",style:{height:"30vh"},src:"https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"}),s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B"},"\u53C2\u8003")])]),s("div",null,[s("p",null,"\u8868\u8A08\u7B97\u30BD\u30D5\u30C8\u3068\u540C\u3058\u624B\u9806\u3092\u30B3\u30FC\u30C9\u306B\u3059\u308B\u3068"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5\u306E\u307E\u307E\uFF08\u671F\u5F85\u306F6\uFF09")])])])])])],-1),M9={__name:"9",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[O9,S9]),_:1},16))}},P9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42",-1),L9=s("div",{class:"flex gap-4"},[s("div",null,[s("p",null,"\u8868\u8A08\u7B97\u30BD\u30D5\u30C8\u3068\u540C\u3058\u3053\u3068\u3092\u304A\u3053\u306A\u3046\u306B\u306F"),s("ol",null,[s("li",null,"\u5024\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u3068\u304D\u306B\u8FFD\u8DE1\u3059\u308B\u3002 \u4F8B: val1 + val2 \u306F val1 \u3068 val2 \u306E\u4E21\u65B9\u3092\u8AAD\u307F\u8FBC\u3080\u3002"),s("li",null,"\u5024\u306E\u5909\u66F4\u3092\u691C\u77E5\u3059\u308B\u3002 \u4F8B: val1 = 3 \u3068\u5165\u308C\u308B\u3068\u304D\u3002"),s("li",null,"\u6700\u521D\u306B\u5024\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u30B3\u30FC\u30C9\u3092\u518D\u5B9F\u884C\u3059\u308B\u3002 \u4F8B: sum = val1 + val2 \u3092\u518D\u5EA6\u5B9F\u884C\u3057\u3066\u3001 sum \u306E\u5024\u3092\u66F4\u65B0\u3059\u308B\u3002")]),s("p",null,"Vue \u306B\u306F 1. 2. 3. \u306E\u305F\u3081\u306E\u3057\u304F\u307F\u304C\u3042\u308B")]),s("div",null,[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 3.")])])])])])],-1),T9={__name:"10",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[P9,L9]),_:1},16))}},N9={inject:{$slidev:{from:$}},setup(){const e=U(2),l=U(3),o=w(()=>e.value+l.value);return{val1:e,val2:l,sum:o}}},j9=n("val1: "),V9=n("val2: ");function R9(e,l,o,t,r,a){return v(),K("div",null,[s("p",null,[j9,He(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":l[0]||(l[0]=c=>t.val1=c)},null,512),[[Yo,t.val1]])]),s("p",null,[V9,He(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":l[1]||(l[1]=c=>t.val2=c)},null,512),[[Yo,t.val2]])]),s("p",null,"sum: "+Hs(t.sum),1)])}var I9=Pe(N9,[["render",R9]]);const z9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08ref \u306B\u3088\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u53C2\u7167\uFF09",-1),H9=s("p",null,[s("code",null,"ref"),n(" \u3092\u4F7F\u3063\u305F\u5024\u3092\u64CD\u4F5C\u3059\u308B\u5834\u5408\u3001"),s("code",null,"setup"),n(" \u95A2\u6570\u5185\u3067\u306F "),s("code",null,"value"),n(" \u30D7\u30ED\u30D1\u30C6\u30A3\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3002 "),s("code",null,"template"),n(" \u5185\u3067\u306F\u5909\u6570\uFF08\u5B9A\u6570\uFF09\u305D\u306E\u3082\u306E\u3092\u53C2\u7167\u3059\u308B\u3060\u3051\u3067\u5024\u3092\u5F97\u3089\u308C\u308B\u3002")],-1),U9={class:"flex gap-8"},q9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),W9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),K9={__name:"11",setup(e){const l={};return x($),(o,t)=>{const r=I9;return v(),S(W,q(H(l)),{default:N(()=>[z9,H9,s("div",U9,[q9,W9,Z(r)])]),_:1},16)}}},Y9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u308B\uFF09",-1),Z9=s("p",null,[n("\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306B\u3057\u305F\u3044\u30C7\u30FC\u30BF\u304C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u5834\u5408\u3001"),s("code",null,"reactive"),n(" \u3092\u4F7F\u3046")],-1),J9=s("div",{class:"flex gap-8"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),X9={__name:"12",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[Y9,Z9,J9]),_:1},16))}},G9=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u307E\u3068\u3081\u305F\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u53D6\u308A\u51FA\u3059\uFF09",-1),Q9=s("p",null,[n("\u524D\u9805\u306E "),s("code",null,"reactive"),n(" \u3060\u3068\u3001\u5206\u5272\u4EE3\u5165\u3057\u3066\u3082\u5024\u304C\u53D6\u308A\u51FA\u305B\u306A\u3044\u3002Vue \u3067\u306F "),s("code",null,"toRefs"),n(" \u3092\u4F7F\u3046\u3053\u3068\u3067\u53EF\u80FD\u306B\u306A\u308B\u3002")],-1),sv=s("div",{class:"flex gap-8"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),ev={__name:"13",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[G9,Q9,sv]),_:1},16))}},lv=s("h1",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306E\u63A2\u6C42\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u8AAD\u307F\u8FBC\u307F\u5C02\u7528\u306B\u3059\u308B\uFF09",-1),ov=s("div",{class:"flex gap-8"},[s("div",{class:"h-md overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),nv={__name:"14",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[lv,ov]),_:1},16))}},tv=s("h1",null,"\u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09",-1),rv=s("p",null,[n("\u3042\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u5143\u306B\u8A08\u7B97\u7D50\u679C\u3092\u8FD4\u3057\u305F\u3044\u5834\u5408\u3001"),s("code",null,"computed"),n(" \u95A2\u6570\u3092\u5229\u7528\u3059\u308B")],-1),av=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),cv={__name:"15",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[tv,rv,av]),_:1},16))}},pv=s("h1",null,"\u7B97\u51FA\u30D7\u30ED\u30D1\u30C6\u30A3\uFF08computed\uFF09",-1),iv=s("p",null,[s("code",null,"get"),n(),s("code",null,"set"),n(" \u95A2\u6570\u3092\u7528\u610F\u3059\u308B\u3053\u3068\u3067\u66F8\u8FBC\u307F\u53EF\u80FD\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B")],-1),yv=s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),uv={__name:"16",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[pv,iv,yv]),_:1},16))}},dv={inject:{$slidev:{from:$}},setup(){const e=()=>Math.random(),l=w(()=>Math.random());return{randomMethods:e,randomComputed:l}}},fv=s("p",null,"\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u5834\u5408",-1),mv={class:"use-methods"},hv=s("p",null,"computed\u3092\u4F7F\u3063\u305F\u5834\u5408",-1),Bv={class:"use-computed"};function Av(e,l,o,t,r,a){return v(),K(Cs,null,[fv,s("ol",mv,[s("li",null,Hs(t.randomMethods()),1),s("li",null,Hs(t.randomMethods()),1),s("li",null,Hs(t.randomMethods()),1)]),hv,s("ol",Bv,[s("li",null,Hs(t.randomComputed),1),s("li",null,Hs(t.randomComputed),1),s("li",null,Hs(t.randomComputed),1)])],64)}var vv=Pe(dv,[["render",Av]]);const Dv=s("h1",null,"computed \u3068\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u9055\u3044",-1),gv=s("p",null,[n("\u95A2\u6570\u547C\u3073\u51FA\u3057\u306F\u90FD\u5EA6\u547C\u3073\u51FA\u3055\u308C\u308B\u6BCE\u306B\u5B9F\u884C\u3059\u308B\u306E\u306B\u5BFE\u3057\u3001"),s("code",null,"computed"),n(" \u5185\u3067\u53C2\u7167\u3057\u3066\u3044\u308B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u304C\u5909\u66F4\u3055\u308C\u306A\u3044\u9650\u308A\u3001"),s("code",null,"computed"),n(" \u306F\u4E00\u5EA6\u30AD\u30E3\u30C3\u30B7\u30E5\u3055\u308C\u305F\u7D50\u679C\u3092\u8FD4\u3059\u3002 \u3046\u307E\u304F\u4F7F\u3044\u5206\u3051\u308B\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306E\u5411\u4E0A\u306B\u5F79\u7ACB\u3066\u308B\u3002")],-1),Cv={class:"flex gap-4"},_v=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ev=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Fv={__name:"17",setup(e){const l={};return x($),(o,t)=>{const r=vv;return v(),S(W,q(H(l)),{default:N(()=>[Dv,gv,s("div",Cv,[_v,Ev,s("div",null,[Z(r)])])]),_:1},16)}}},bv=s("h1",null,"\u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09",-1),xv=s("p",null,"\u7279\u5B9A\u306E\u30C7\u30FC\u30BF\u3092\u76E3\u8996\u3057\u3001\u5909\u66F4\u304C\u3042\u3063\u305F\u3068\u304D\u306B\u51E6\u7406\u3092\u884C\u3048\u308B\u3001\u5F15\u6570\u3068\u3057\u3066\u3001\u65B0\u3057\u3044\u5024\u3068\u305D\u306E\u524D\u306E\u5024\u3092\u53D6\u5F97\u3067\u304D\u308B\u3002",-1),kv=s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),wv={__name:"18",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[bv,xv,kv]),_:1},16))}},$v=s("h1",null,"\u30A6\u30A9\u30C3\u30C1\u30E3\uFF08watch\uFF09",-1),Ov=s("p",null,"\u914D\u5217\u3092\u76E3\u8996\u3059\u308B\u5834\u5408\u3001\u8907\u6570\u306E\u30C7\u30FC\u30BF\u30BD\u30FC\u30B9\u3092\u540C\u6642\u306B\u76E3\u8996\u3067\u304D\u308B",-1),Sv=s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),Mv={__name:"19",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[$v,Ov,Sv]),_:1},16))}},Pv=s("h1",null,"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u69CB\u6587",-1),Lv=s("ul",null,[s("li",null,"\u5C55\u958B"),s("li",null,"\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6"),s("li",null,"\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0"),s("li",null,"\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0"),s("li",null,"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0"),s("li",null,"\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0"),s("li",null,"\u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0")],-1),Tv={__name:"20",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[Pv,Lv]),_:1},16))}},Nv=s("h1",null,"\u5C55\u958B",-1),jv=s("p",null,"Mustache \u69CB\u6587\u3067\u30C6\u30AD\u30B9\u30C8\u5C55\u958B\u3067\u304D\u308B\u3002JavaScript \u5F0F\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B",-1),Vv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Rv=s("p",null,"\u7D50\u679C",-1),Iv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"Message: Hello!")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"Message: Hello!")])])])],-1),zv={__name:"21",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[Nv,jv,Vv,Rv,Iv]),_:1},16))}},Hv={inject:{$slidev:{from:$}},setup(){const e=U(10);return setInterval(()=>{e.value+=1},1e3),{counter:e}}},Uv={id:"counter"};function qv(e,l,o,t,r,a){return v(),K("div",Uv,"Counter: "+Hs(t.counter),1)}var Wv=Pe(Hv,[["render",qv]]);const Kv=s("h1",null,"\u5C55\u958B\uFF08\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u4F7F\u3046\u3068\uFF09",-1),Yv=s("p",{class:"text-sm"}," counter\u30921\u79D2\u3054\u3068\u306B\u5897\u3084\u3057\u3066\u3044\u304F ",-1),Zv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Jv=s("p",null,"\u7D50\u679C",-1),Xv={__name:"22",setup(e){const l={};return x($),(o,t)=>{const r=Wv;return v(),S(W,q(H(l)),{default:N(()=>[Kv,Yv,Zv,Jv,s("div",null,[Z(r)])]),_:1},16)}}},Gv=s("h1",null,"\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6",-1),Qv=s("ul",null,[s("li",null,"\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F Vue \u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u308B\u7279\u5225\u306A\u5C5E\u6027"),s("li",null,"v- \u304B\u3089\u59CB\u307E\u308B"),s("li",null,[n("\u7279\u5B9A\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\uFF08v-bind \u3068 v-on\uFF09\u306F\u7701\u7565\u8A18\u6CD5\u304C\u3042\u308B\uFF08\u4F8B\uFF1A"),s("code",null,":href"),n(),s("code",null,"@click"),n("\uFF09")]),s("li",null,[n("\u7279\u5B9A\u306E\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\u5F15\u6570\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B\uFF08\u4F8B\uFF1A"),s("code",null,"v-on:click"),n("\uFF09")])],-1),s1=s("p",null,"\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u304C\u4F7F\u308F\u308C\u3066\u3044\u308B\u7B87\u6240\u306F Vue \u306E\u6A5F\u80FD\u3068\u95A2\u4FC2\u3057\u3066\u3044\u308B\u3068\u6C17\u3065\u3051\u308B\u3068\u3088\u3044",-1),e1={__name:"23",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[Gv,Qv,s1]),_:1},16))}},l1=s("h1",null,"\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0",-1),o1=s("p",null,[n("\u300C\u5C55\u958B\u300D\u3068\u540C\u3058\u3088\u3046\u306B\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092 HTML \u5C5E\u6027\u306B\u53CD\u6620\u3055\u305B\u308B\u5834\u5408\u3001 "),s("code",null,"v-bind"),n(" \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u3092\u4F7F\u3046")],-1),n1=s("div",null,[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])]),s("p",null,"\u7701\u7565\u3059\u308B\u3068\u3053\u306E\u3088\u3046\u306B\u66F8\u3051\u308B")],-1),t1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"url"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"url"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js\u516C\u5F0F\u30B5\u30A4\u30C8 "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),r1={__name:"24",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[l1,o1,n1,t1]),_:1},16))}},a1=s("h1",null,"\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF08\u30AF\u30E9\u30B9\u3068\u30B9\u30BF\u30A4\u30EB\uFF09",-1),c1=s("p",null,"\u30AF\u30E9\u30B9\u5C5E\u6027\u3068\u30B9\u30BF\u30A4\u30EB\u5C5E\u6027\u306E\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u306B\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587\u3068\u914D\u5217\u69CB\u6587\u304C\u3042\u308B",-1),p1=s("div",{class:"flex gap-6"},[s("div",null,[s("p",{class:"text-xs"},"\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u69CB\u6587"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),i1={__name:"25",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[a1,c1,p1]),_:1},16))}},y1=s("h1",null,"\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0",-1),u1=s("p",null,[s("code",null,"v-on"),n(" \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F HTML \u8981\u7D20\u306A\u3069\u306E"),s("a",{href:"https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events",target:"_blank",rel:"noopener"},"\u30A4\u30D9\u30F3\u30C8"),n("\u64CD\u4F5C\u306B\u4F7F\u308F\u308C\u308B\u3002"),s("code",null,":"),n("\u306E\u5F8C\u306E\u5F15\u6570\u3067\u30A4\u30D9\u30F3\u30C8\u306E\u7A2E\u985E\u3092\u6307\u5B9A\u3067\u304D\u308B")],-1),d1=s("div",{class:"h-60 mb-6 overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),f1=s("p",null,"\u7701\u7565\u3059\u308B\u3068\u3053\u306E\u3088\u3046\u306B\u304B\u3051\u308B",-1),m1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"counter += 1"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"counter += 1"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),h1={__name:"26",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[y1,u1,d1,f1,m1]),_:1},16))}},B1=s("h1",null,"\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\uFF08\u95A2\u6570\u540D\u3092\u5C5E\u6027\u5024\u3068\u3057\u3066\u4F7F\u3046\uFF09",-1),A1=s("p",null,"\u95A2\u6570\u3092\u6E21\u3059\u3068\u8907\u96D1\u306A\u51E6\u7406\u304C\u66F8\u304D\u3084\u3059\u3044",-1),v1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),D1={__name:"27",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[B1,A1,v1]),_:1},16))}};let g1=e=>crypto.getRandomValues(new Uint8Array(e)),C1=(e,l,o)=>{let t=(2<<Math.log(e.length-1)/Math.LN2)-1,r=-~(1.6*t*l/e.length);return(a=l)=>{let c="";for(;;){let p=o(r),i=r;for(;i--;)if(c+=e[p[i]&t]||"",c.length===a)return c}}},_1=(e,l=21)=>C1(e,l,g1);const E1=["width","height"],F1=["id"],b1=["fill"],x1=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],ua=bs({__name:"Arrow",props:{x1:null,y1:null,x2:null,y2:null,width:null,color:null},setup(e){x($);const o=_1("abcedfghijklmn",10)();return(t,r)=>(v(),K("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",{id:D(o),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,b1)],8,F1)]),s("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${D(o)})`},null,8,x1)],8,E1))}});/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function M8(e){return typeof e=="undefined"||e===null}function k1(e){return typeof e=="object"&&e!==null}function w1(e){return Array.isArray(e)?e:M8(e)?[]:[e]}function $1(e,l){var o,t,r,a;if(l)for(a=Object.keys(l),o=0,t=a.length;o<t;o+=1)r=a[o],e[r]=l[r];return e}function O1(e,l){var o="",t;for(t=0;t<l;t+=1)o+=e;return o}function S1(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var M1=M8,P1=k1,L1=w1,T1=O1,N1=S1,j1=$1,da={isNothing:M1,isObject:P1,toArray:L1,repeat:T1,isNegativeZero:N1,extend:j1};function P8(e,l){var o="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(o+='in "'+e.mark.name+'" '),o+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!l&&e.mark.snippet&&(o+=`

`+e.mark.snippet),t+" "+o):t}function Go(e,l){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=l,this.message=P8(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Go.prototype=Object.create(Error.prototype);Go.prototype.constructor=Go;Go.prototype.toString=function(l){return this.name+": "+P8(this,l)};var _l=Go,V1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],R1=["scalar","sequence","mapping"];function I1(e){var l={};return e!==null&&Object.keys(e).forEach(function(o){e[o].forEach(function(t){l[String(t)]=o})}),l}function z1(e,l){if(l=l||{},Object.keys(l).forEach(function(o){if(V1.indexOf(o)===-1)throw new _l('Unknown option "'+o+'" is met in definition of "'+e+'" YAML type.')}),this.options=l,this.tag=e,this.kind=l.kind||null,this.resolve=l.resolve||function(){return!0},this.construct=l.construct||function(o){return o},this.instanceOf=l.instanceOf||null,this.predicate=l.predicate||null,this.represent=l.represent||null,this.representName=l.representName||null,this.defaultStyle=l.defaultStyle||null,this.multi=l.multi||!1,this.styleAliases=I1(l.styleAliases||null),R1.indexOf(this.kind)===-1)throw new _l('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Js=z1;function ip(e,l){var o=[];return e[l].forEach(function(t){var r=o.length;o.forEach(function(a,c){a.tag===t.tag&&a.kind===t.kind&&a.multi===t.multi&&(r=c)}),o[r]=t}),o}function H1(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},l,o;function t(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(l=0,o=arguments.length;l<o;l+=1)arguments[l].forEach(t);return e}function Cr(e){return this.extend(e)}Cr.prototype.extend=function(l){var o=[],t=[];if(l instanceof Js)t.push(l);else if(Array.isArray(l))t=t.concat(l);else if(l&&(Array.isArray(l.implicit)||Array.isArray(l.explicit)))l.implicit&&(o=o.concat(l.implicit)),l.explicit&&(t=t.concat(l.explicit));else throw new _l("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(a){if(!(a instanceof Js))throw new _l("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new _l("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new _l("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(a){if(!(a instanceof Js))throw new _l("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Cr.prototype);return r.implicit=(this.implicit||[]).concat(o),r.explicit=(this.explicit||[]).concat(t),r.compiledImplicit=ip(r,"implicit"),r.compiledExplicit=ip(r,"explicit"),r.compiledTypeMap=H1(r.compiledImplicit,r.compiledExplicit),r};var U1=Cr,q1=new Js("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),W1=new Js("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),K1=new Js("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Y1=new U1({explicit:[q1,W1,K1]});function Z1(e){if(e===null)return!0;var l=e.length;return l===1&&e==="~"||l===4&&(e==="null"||e==="Null"||e==="NULL")}function J1(){return null}function X1(e){return e===null}var G1=new Js("tag:yaml.org,2002:null",{kind:"scalar",resolve:Z1,construct:J1,predicate:X1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Q1(e){if(e===null)return!1;var l=e.length;return l===4&&(e==="true"||e==="True"||e==="TRUE")||l===5&&(e==="false"||e==="False"||e==="FALSE")}function sD(e){return e==="true"||e==="True"||e==="TRUE"}function eD(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var lD=new Js("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Q1,construct:sD,predicate:eD,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function oD(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function nD(e){return 48<=e&&e<=55}function tD(e){return 48<=e&&e<=57}function rD(e){if(e===null)return!1;var l=e.length,o=0,t=!1,r;if(!l)return!1;if(r=e[o],(r==="-"||r==="+")&&(r=e[++o]),r==="0"){if(o+1===l)return!0;if(r=e[++o],r==="b"){for(o++;o<l;o++)if(r=e[o],r!=="_"){if(r!=="0"&&r!=="1")return!1;t=!0}return t&&r!=="_"}if(r==="x"){for(o++;o<l;o++)if(r=e[o],r!=="_"){if(!oD(e.charCodeAt(o)))return!1;t=!0}return t&&r!=="_"}if(r==="o"){for(o++;o<l;o++)if(r=e[o],r!=="_"){if(!nD(e.charCodeAt(o)))return!1;t=!0}return t&&r!=="_"}}if(r==="_")return!1;for(;o<l;o++)if(r=e[o],r!=="_"){if(!tD(e.charCodeAt(o)))return!1;t=!0}return!(!t||r==="_")}function aD(e){var l=e,o=1,t;if(l.indexOf("_")!==-1&&(l=l.replace(/_/g,"")),t=l[0],(t==="-"||t==="+")&&(t==="-"&&(o=-1),l=l.slice(1),t=l[0]),l==="0")return 0;if(t==="0"){if(l[1]==="b")return o*parseInt(l.slice(2),2);if(l[1]==="x")return o*parseInt(l.slice(2),16);if(l[1]==="o")return o*parseInt(l.slice(2),8)}return o*parseInt(l,10)}function cD(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!da.isNegativeZero(e)}var pD=new Js("tag:yaml.org,2002:int",{kind:"scalar",resolve:rD,construct:aD,predicate:cD,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),iD=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function yD(e){return!(e===null||!iD.test(e)||e[e.length-1]==="_")}function uD(e){var l,o;return l=e.replace(/_/g,"").toLowerCase(),o=l[0]==="-"?-1:1,"+-".indexOf(l[0])>=0&&(l=l.slice(1)),l===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:l===".nan"?NaN:o*parseFloat(l,10)}var dD=/^[-+]?[0-9]+e/;function fD(e,l){var o;if(isNaN(e))switch(l){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(l){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(l){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(da.isNegativeZero(e))return"-0.0";return o=e.toString(10),dD.test(o)?o.replace("e",".e"):o}function mD(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||da.isNegativeZero(e))}var hD=new Js("tag:yaml.org,2002:float",{kind:"scalar",resolve:yD,construct:uD,predicate:mD,represent:fD,defaultStyle:"lowercase"}),BD=Y1.extend({implicit:[G1,lD,pD,hD]}),AD=BD,L8=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),T8=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function vD(e){return e===null?!1:L8.exec(e)!==null||T8.exec(e)!==null}function DD(e){var l,o,t,r,a,c,p,i=0,y=null,u,f,d;if(l=L8.exec(e),l===null&&(l=T8.exec(e)),l===null)throw new Error("Date resolve error");if(o=+l[1],t=+l[2]-1,r=+l[3],!l[4])return new Date(Date.UTC(o,t,r));if(a=+l[4],c=+l[5],p=+l[6],l[7]){for(i=l[7].slice(0,3);i.length<3;)i+="0";i=+i}return l[9]&&(u=+l[10],f=+(l[11]||0),y=(u*60+f)*6e4,l[9]==="-"&&(y=-y)),d=new Date(Date.UTC(o,t,r,a,c,p,i)),y&&d.setTime(d.getTime()-y),d}function gD(e){return e.toISOString()}var CD=new Js("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:vD,construct:DD,instanceOf:Date,represent:gD});function _D(e){return e==="<<"||e===null}var ED=new Js("tag:yaml.org,2002:merge",{kind:"scalar",resolve:_D}),fa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function FD(e){if(e===null)return!1;var l,o,t=0,r=e.length,a=fa;for(o=0;o<r;o++)if(l=a.indexOf(e.charAt(o)),!(l>64)){if(l<0)return!1;t+=6}return t%8===0}function bD(e){var l,o,t=e.replace(/[\r\n=]/g,""),r=t.length,a=fa,c=0,p=[];for(l=0;l<r;l++)l%4===0&&l&&(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)),c=c<<6|a.indexOf(t.charAt(l));return o=r%4*6,o===0?(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)):o===18?(p.push(c>>10&255),p.push(c>>2&255)):o===12&&p.push(c>>4&255),new Uint8Array(p)}function xD(e){var l="",o=0,t,r,a=e.length,c=fa;for(t=0;t<a;t++)t%3===0&&t&&(l+=c[o>>18&63],l+=c[o>>12&63],l+=c[o>>6&63],l+=c[o&63]),o=(o<<8)+e[t];return r=a%3,r===0?(l+=c[o>>18&63],l+=c[o>>12&63],l+=c[o>>6&63],l+=c[o&63]):r===2?(l+=c[o>>10&63],l+=c[o>>4&63],l+=c[o<<2&63],l+=c[64]):r===1&&(l+=c[o>>2&63],l+=c[o<<4&63],l+=c[64],l+=c[64]),l}function kD(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var wD=new Js("tag:yaml.org,2002:binary",{kind:"scalar",resolve:FD,construct:bD,predicate:kD,represent:xD}),$D=Object.prototype.hasOwnProperty,OD=Object.prototype.toString;function SD(e){if(e===null)return!0;var l=[],o,t,r,a,c,p=e;for(o=0,t=p.length;o<t;o+=1){if(r=p[o],c=!1,OD.call(r)!=="[object Object]")return!1;for(a in r)if($D.call(r,a))if(!c)c=!0;else return!1;if(!c)return!1;if(l.indexOf(a)===-1)l.push(a);else return!1}return!0}function MD(e){return e!==null?e:[]}var PD=new Js("tag:yaml.org,2002:omap",{kind:"sequence",resolve:SD,construct:MD}),LD=Object.prototype.toString;function TD(e){if(e===null)return!0;var l,o,t,r,a,c=e;for(a=new Array(c.length),l=0,o=c.length;l<o;l+=1){if(t=c[l],LD.call(t)!=="[object Object]"||(r=Object.keys(t),r.length!==1))return!1;a[l]=[r[0],t[r[0]]]}return!0}function ND(e){if(e===null)return[];var l,o,t,r,a,c=e;for(a=new Array(c.length),l=0,o=c.length;l<o;l+=1)t=c[l],r=Object.keys(t),a[l]=[r[0],t[r[0]]];return a}var jD=new Js("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:TD,construct:ND}),VD=Object.prototype.hasOwnProperty;function RD(e){if(e===null)return!0;var l,o=e;for(l in o)if(VD.call(o,l)&&o[l]!==null)return!1;return!0}function ID(e){return e!==null?e:{}}var zD=new Js("tag:yaml.org,2002:set",{kind:"mapping",resolve:RD,construct:ID});AD.extend({implicit:[CD,ED],explicit:[wD,PD,jD,zD]});function yp(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var HD=new Array(256),UD=new Array(256);for(var Rl=0;Rl<256;Rl++)HD[Rl]=yp(Rl)?1:0,UD[Rl]=yp(Rl);function qD(e){return Array.from(new Set(e))}function up(...e){let l,o,t;e.length===1?(l=0,t=1,[o]=e):[l,o,t=1]=e;const r=[];let a=l;for(;a<o;)r.push(a),a+=t||1;return r}function WD(e,l){if(!l||l==="all"||l==="*")return up(1,e+1);const o=[];for(const t of l.split(/[,;]/g))if(!t.includes("-"))o.push(+t);else{const[r,a]=t.split("-",2);o.push(...up(+r,a?+a+1:e+1))}return qD(o).filter(t=>t<=e).sort((t,r)=>t-r)}const rn=bs({__name:"CodeHighlightController",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0}},setup(e){const l=e;x($);const o=x(Oo),t=x(Cl),r=x(So);function a(i=5){const y=[],u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",f=u.length;for(let d=0;d<i;d++)y.push(u.charAt(Math.floor(Math.random()*f)));return y.join("")}const c=U(),p=Ml();return ao(()=>{const i=l.at==null?t==null?void 0:t.value.length:l.at,y=w(()=>r!=null&&r.value?l.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(i||0)),l.ranges.length-1)),u=w(()=>l.ranges[y.value]||"");if(l.ranges.length>=2&&!(r!=null&&r.value)){const f=a(),d=Nd(l.ranges.length-1).map(m=>f+m);t!=null&&t.value&&(t.value.push(...d),ct(()=>d.forEach(m=>pr(t.value,m)),p))}nn(()=>{if(!c.value)return;const d=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const m of d){const B=Array.from(m.querySelectorAll(".line")),C=WD(B.length,u.value);B.forEach((g,b)=>{const E=C.includes(b+1);g.classList.toggle(Dl,!0),g.classList.toggle("highlighted",E),g.classList.toggle("dishonored",!E)})}})}),(i,y)=>(v(),K("div",{ref_key:"el",ref:c},[Ze(i.$slots,"default")],512))}}),KD=s("h1",null,"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",-1),YD=s("p",null,[s("code",null,"v-if"),n(" \u3042\u308B\u3044\u306F "),s("code",null,"v-show"),n(" \u306B\u3088\u3063\u3066\u6761\u4EF6\u306B\u5FDC\u3058\u3066\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3059\u308B\u7BC4\u56F2\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002 "),s("code",null,"v-show"),n(" \u306F\u898B\u305F\u76EE\u4E0A\u975E\u8868\u793A\u306B\u3059\u308B\u304C "),s("code",null,"v-if"),n(" \u306F DOM \u8981\u7D20\u3082\u53D6\u308A\u9664\u304F\u3002")],-1),ZD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),JD={__name:"28",setup(e){const l={};return x($),(o,t)=>{const r=rn,a=ua,c=Gr("click");return v(),S(W,q(H(l)),{default:N(()=>[KD,YD,Z(r,Je({},{ranges:["all","3","10","all"]}),{default:N(()=>[ZD]),_:1},16),He(Z(a,{x1:"400",y1:"420",x2:"230",y2:"365",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,2]])]),_:1},16)}}},XD=s("h1",null,"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08v-if \u3068 v-show \u306E\u4F7F\u3044\u5206\u3051\uFF09",-1),GD=s("div",{class:"mb-6"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}}),s("th",{style:{"text-align":"left"}},"v-if"),s("th",{style:{"text-align":"left"}},"v-show")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},"\u521D\u671F\u30B3\u30B9\u30C8"),s("td",{style:{"text-align":"left"}},"\u4F4E\u3044"),s("td",{style:{"text-align":"left"}},"\u9AD8\u3044")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"\u5207\u308A\u66FF\u3048\u30B3\u30B9\u30C8"),s("td",{style:{"text-align":"left"}},"\u9AD8\u3044"),s("td",{style:{"text-align":"left"}},"\u4F4E\u3044")])])])],-1),QD=s("ul",null,[s("li",null,[n("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u304B\u3089\u3042\u307E\u308A\u5909\u5316\u3057\u306A\u3044\u30B1\u30FC\u30B9\u3067\u3042\u308C\u3070 "),s("code",null,"v-if"),n("\u3092\u4F7F\u3046")]),s("li",null,[n("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u304B\u3089\u983B\u7E41\u306B\u5909\u5316\u3059\u308B\u30B1\u30FC\u30B9\u3067\u3042\u308C\u3070 "),s("code",null,"v-show"),n("\u3092\u4F7F\u3046")])],-1),sg={__name:"29",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[XD,GD,QD]),_:1},16))}},eg=s("h1",null,"\u6761\u4EF6\u4ED8\u304D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",-1),lg=s("p",null,[s("code",null,"v-if v-else v-else-if"),n(" \u3067\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u6761\u4EF6\u5206\u5C90\u304C\u3067\u304D\u308B\u3002 "),s("code",null,"template"),n(" \u8981\u7D20\u306B\u5BFE\u3057\u3066\u4F7F\u3046\u3053\u3068\u3067\u30B0\u30EB\u30FC\u30D4\u30F3\u30B0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B\u3002")],-1),og=s("div",{class:"flex gap-4"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),ng={__name:"30",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[eg,lg,og]),_:1},16))}},tg=s("h1",null,"\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0",-1),rg=s("p",null,"\u914D\u5217\u3042\u308B\u3044\u306F\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u3082\u3068\u306B\u53CD\u5FA9\u3057\u305F\u8981\u7D20\u306E\u8868\u793A\u304C\u3067\u304D\u308B\u3002",-1),ag=s("div",{class:"flex gap-8"},[s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",{class:"flex-shrink"},[s("p",null,"\u7D50\u679C"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])])],-1),cg={__name:"31",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[tg,rg,ag]),_:1},16))}},pg=s("h1",null,[n("\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08"),s("code",null,"key"),n(" \u5C5E\u6027\u306E\u4ED8\u4E0E\uFF09")],-1),ig=s("p",null,[n("\u8981\u7D20\u306E\u518D\u5229\u7528\u3068\u4E26\u3073\u66FF\u3048\u3092\u8003\u616E\u3059\u308B\u5834\u5408\u3001\u4E00\u610F\u306A\u5024\u3092 "),s("code",null,"key"),n(" \u5C5E\u6027\u306B\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B\u3002")],-1),yg=s("div",{class:"flex gap-8"},[s("div",{class:"h-sm overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",{class:"flex-shrink"},[s("p",null,"\u7D50\u679C"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])])],-1),ug={__name:"32",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[pg,ig,yg]),_:1},16))}},dg=s("h1",null,[n("\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08\u6DFB\u5B57\u306B\u3088\u308B "),s("code",null,"key"),n(" \u5C5E\u6027\u306E\u4ED8\u4E0E\uFF09")],-1),fg=s("p",null,"\u8B58\u5225\u5B50\u3092\u7528\u610F\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u6DFB\u5B57\u304C\u5F97\u3089\u308C\u308B\u306E\u3067\u4EE3\u7528\u3059\u308B\u3068\u4FBF\u5229\u3002",-1),mg={class:"flex gap-8"},hg={class:"h-sm overflow-y-auto"},Bg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"list-rendering"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}},", "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},") "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"todos"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}},", "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},") "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"todos"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ag=s("div",{class:"flex-shrink w-110"},[s("p",null,"\u7D50\u679C"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")]),s("p",null,"\u305F\u3060\u3057\u3001\u4E26\u3073\u66FF\u3048\u308B\u3053\u3068\u304C\u60F3\u5B9A\u3055\u308C\u308B\u5834\u5408\u610F\u56F3\u3057\u306A\u3044\u6319\u52D5\u306B\u306A\u308B\uFF08\u3069\u3053\u306B\u30EA\u30B9\u30C8\u30A2\u30A4\u30C6\u30E0\u304C\u79FB\u52D5\u3057\u305F\u306E\u304B\u691C\u77E5\u3067\u304D\u306A\u3044\uFF09\u306E\u3067\u6CE8\u610F")],-1),vg={__name:"33",setup(e){const l={};return x($),(o,t)=>{const r=rn;return v(),S(W,q(H(l)),{default:N(()=>[dg,fg,s("div",mg,[s("div",hg,[Z(r,Je({},{ranges:["all","4"]}),{default:N(()=>[Bg]),_:1},16)]),Ag])]),_:1},16)}}},Dg={inject:{$slidev:{from:$}},setup(){return{message:U("Hello Vue!")}}},gg={id:"two-way-binding"};function Cg(e,l,o,t,r,a){return v(),K("div",gg,[s("p",null,Hs(t.message),1),He(s("input",{class:"text-black p-1","onUpdate:modelValue":l[0]||(l[0]=c=>t.message=c)},null,512),[[Yo,t.message]])])}var _g=Pe(Dg,[["render",Cg]]);const Eg=s("h1",null,"\u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0",-1),Fg=s("p",null,[s("code",null,"v-model"),n(" \u306B\u3088\u3063\u3066 form \u306E input \u8981\u7D20\u3084 textarea \u8981\u7D20\u3001select \u8981\u7D20\u306E\u5165\u529B\u30A4\u30D9\u30F3\u30C8\u306B\u5FDC\u3058\u3066\u30C7\u30FC\u30BF\u3092\u66F4\u65B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308B\u3002")],-1),bg={class:"flex gap-8"},xg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),kg={__name:"34",setup(e){const l={};return x($),(o,t)=>{const r=_g;return v(),S(W,q(H(l)),{default:N(()=>[Eg,Fg,s("div",bg,[xg,s("div",null,[Z(r)])])]),_:1},16)}}},wg=s("h1",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",-1),$g=s("ul",null,[s("li",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210"),s("li",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057"),s("li",null,"\u30A4\u30D9\u30F3\u30C8\u8CFC\u8AAD\u3092\u7528\u3044\u305F\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057"),s("li",null,"v-model \u3092\u7528\u3044\u305F\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057"),s("li",null,"v-model \u3092\u7528\u3044\u306A\u3044\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057"),s("li",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067 v-model \u3092\u4F7F\u3046"),s("li",null,"\u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1")],-1),Og={__name:"35",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[wg,$g]),_:1},16))}};var Sg="/vue-3-practices/components.png";const Mg=s("h1",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210",-1),Pg=s("p",null,"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u53C2\u7167\u3055\u308C\u30C4\u30EA\u30FC\u69CB\u9020\u306B\u306A\u308B\u3002\u6700\u4E0A\u4F4D\u306F\u30EB\u30FC\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08App.vue\uFF09",-1),Lg=s("img",{src:Sg,alt:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210",style:{height:"80%",width:"auto"}},null,-1),Tg={__name:"36",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[Mg,Pg,Lg]),_:1},16))}},Ng=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),jg=s("p",null,"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B \u6587\u5B57\u5217 \u3092\u6E21\u3057\u3066\u307F\u308B",-1),Vg=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),Rg={__name:"37",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[Ng,jg,Vg]),_:1},16))}},Ig=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),zg=s("p",null,"\u6570\u5024\u3092\u6E21\u3059\u5834\u5408\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B",-1),Hg={class:"flex gap-8"},Ug=s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue",-1),qg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Wg=s("p",{class:"text-xs"},"\u9759\u7684\u306A\u5024\u3067\u3059\u304C\u3001\u3053\u308C\u304C\u6587\u5B57\u5217\u3067\u306F\u306A\u304F JavaScript \u306E\u5F0F\u3060\u3068Vue\u306B\u4F1D\u3048\u308B\u305F\u3081\u306B\u306Fv-bind \u3092\u4F7F\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",-1),Kg=s("div",null,[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),Yg={__name:"38",setup(e){const l={};return x($),(o,t)=>{const r=rn,a=ua,c=Gr("click");return v(),S(W,q(H(l)),{default:N(()=>[Ig,zg,s("div",Hg,[s("div",null,[Ug,Z(r,Je({},{ranges:["all","2","all"]}),{default:N(()=>[qg]),_:1},16),Wg]),Kg]),He(Z(a,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},Zg=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),Jg=s("p",null,"\u771F\u507D\u5024\uFF08true / false\uFF09\u3092\u6E21\u3059\u5834\u5408\u3082\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B",-1),Xg={class:"flex gap-8"},Gg=s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue",-1),Qg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),sC=s("div",null,[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("div",{class:"h-xs overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),eC={__name:"39",setup(e){const l={};return x($),(o,t)=>{const r=rn,a=ua,c=Gr("click");return v(),S(W,q(H(l)),{default:N(()=>[Zg,Jg,s("div",Xg,[s("div",null,[Gg,Z(r,Je({},{ranges:["all","2","all"]}),{default:N(()=>[Qg]),_:1},16)]),sC]),He(Z(a,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},lC=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),oC=s("p",null,"props \u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B",-1),nC={class:"flex gap-8"},tC=s("div",null,[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),rC=s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue",-1),aC={class:"h-xs overflow-y-auto"},cC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),pC={__name:"40",setup(e){const l={};return x($),(o,t)=>{const r=rn;return v(),S(W,q(H(l)),{default:N(()=>[lC,oC,s("div",nC,[tC,s("div",null,[rC,s("div",aC,[Z(r,Je({},{ranges:["all","9-12","all"]}),{default:N(()=>[cC]),_:1},16)])])])]),_:1},16)}}},iC=s("h1",null,"\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u7528\u3044\u305F\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),yC=s("p",null,"\u914D\u5217\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3059\u5834\u5408\u3082\u3001\u89AA\u304B\u3089 v-bind \uFF08:\u3067\u7701\u7565\u53EF\uFF09\u3092\u3064\u3051\u3066\u6E21\u3059\u5FC5\u8981\u304C\u3042\u308B",-1),uC=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),dC={__name:"41",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[iC,yC,uC]),_:1},16))}},fC={inject:{$slidev:{from:$}},setup(e,l){return{clickHandler:()=>{l.emit("child-clicked","Hello!")}}}};function mC(e,l,o,t,r,a){return v(),K("button",{onClick:l[0]||(l[0]=(...c)=>t.clickHandler&&t.clickHandler(...c))},"emit !")}var hC=Pe(fC,[["render",mC]]);const BC={inject:{$slidev:{from:$}},components:{ChildComponent:hC},setup(){return{clicked:l=>{alert(l)}}}};function AC(e,l,o,t,r,a){const c=Tn("ChildComponent");return v(),S(c,{onChildClicked:t.clicked},null,8,["onChildClicked"])}var vC=Pe(BC,[["render",AC]]);const DC=s("h1",null,"\u30A4\u30D9\u30F3\u30C8\u8CFC\u8AAD\u3092\u7528\u3044\u305F\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),gC=s("p",null,"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u30A4\u30D9\u30F3\u30C8\u3092\u767A\u706B\u3055\u305B\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u53EF\u80FD",-1),CC={class:"flex gap-8"},_C=s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),EC=s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),FC={class:"flex-shrink-0"},bC=s("p",{class:"text-xs"},"\u5B9F\u884C\u30B5\u30F3\u30D7\u30EB",-1),xC={__name:"42",setup(e){const l={};return x($),(o,t)=>{const r=vC;return v(),S(W,q(H(l)),{default:N(()=>[DC,gC,s("div",CC,[_C,EC,s("div",FC,[bC,Z(r)])])]),_:1},16)}}},kC={inject:{$slidev:{from:$}},props:{modelValue:String},setup(e,l){const o=w({get:()=>e.modelValue,set:r=>{l.emit("update:modelValue",r)}});return{title:o,changeTitle:()=>{l.emit("update:modelValue",o.value)}}}};function wC(e,l,o,t,r,a){return He((v(),K("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>t.title=c)},null,512)),[[Yo,t.title]])}var N8=Pe(kC,[["render",wC]]);const $C={inject:{$slidev:{from:$}},components:{TwowayChild:N8},setup(){return{title:U("Hello !")}}};function OC(e,l,o,t,r,a){const c=N8;return v(),K(Cs,null,[Z(c,{modelValue:t.title,"onUpdate:modelValue":l[0]||(l[0]=p=>t.title=p)},null,8,["modelValue"]),s("p",null,Hs(t.title),1)],64)}var SC=Pe($C,[["render",OC]]);const MC=s("h1",null,"v-model \u3092\u7528\u3044\u305F\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),PC=s("p",null,"\u89AA\u5B50\u3067\u540C\u3058\u5024\u306B\u306A\u308B\u3088\u3046\u306B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\uFF08\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u9593\u306E\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF09",-1),LC={class:"flex gap-8"},TC=s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])],-1),NC=s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("div",{class:"h-xs overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),jC={class:"flex-shrink-0"},VC=s("p",{class:"text-xs"},"\u5B9F\u884C\u30B5\u30F3\u30D7\u30EB",-1),RC={__name:"43",setup(e){const l={};return x($),(o,t)=>{const r=SC;return v(),S(W,q(H(l)),{default:N(()=>[MC,PC,s("div",LC,[TC,NC,s("div",jC,[VC,Z(r)])])]),_:1},16)}}},IC=s("h1",null,"v-model \u3092\u7528\u3044\u306A\u3044\u89AA\u5B50\u9593\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u30C7\u30FC\u30BF\u306E\u53D7\u3051\u6E21\u3057",-1),zC=s("p",null,"\u89AA\u5B50\u3067\u540C\u3058\u5024\u306B\u306A\u308B\u3088\u3046\u306B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u3059\u308B\uFF08\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u9593\u306E\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF09",-1),HC=s("div",{class:"flex gap-8"},[s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"update"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#E0A569"}},"modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"$event"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("ul",null,[s("li",null,"v-model \u304C\u304A\u3053\u306A\u3063\u3066\u3044\u308B\u3053\u3068\u306F v-model \u3092\u4F7F\u308F\u306A\u304F\u3066\u3082\u5B9F\u73FE\u53EF\u80FD\uFF08\u7CD6\u8863\u69CB\u6587\uFF09"),s("li",null,"\u89AA \u2192 \u5B50\uFF1A\u30D7\u30ED\u30D1\u30C6\u30A3"),s("li",null,"\u5B50 \u2192 \u89AA\uFF1A\u30A4\u30D9\u30F3\u30C8"),s("li",null,"\u3053\u306E\u3088\u3046\u306A\u72B6\u614B\u304C\u53CC\u65B9\u5411\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\uFF08\u5024\u3092\u675F\u7E1B\u3057\u3042\u3063\u3066\u3044\u308B\uFF09")])],-1),UC={__name:"44",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[IC,zC,HC]),_:1},16))}},qC=s("h1",null,"\u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1",-1),WC=s("p",null,"slot \u3092\u4F7F\u3046\u3068\u3001HTML \u8981\u7D20\u306E\u3088\u3046\u306B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u5B50\u8981\u7D20\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B",-1),KC=s("div",{class:"flex gap-8"},[s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello Component"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello Component"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",{class:"flex-shrink"},[s("p",{class:"text-xs"},"\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - ChildComponent.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ChildComponent: "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ChildComponent: "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])])])],-1),YC=s("div",{class:"text-xs"},[s("p",{class:"text-xs"},"\u7D50\u679C\u4F8B"),s("strong",null,"ChildComponent: "),n("Hello Component ")],-1),ZC={__name:"45",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[qC,WC,KC,YC]),_:1},16))}},JC=s("h1",null,"Vue \u306E\u57FA\u672C\u7684\u306A\u66F8\u304D\u65B9\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01",-1),XC=s("p",null,"\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F",-1),GC=s("p",null,"\u4EE5\u4E0B\u3092\u5B66\u3093\u3067\u304D\u305F",-1),QC=s("ul",null,[s("li",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u4F5C\u308A\u65B9"),s("li",null,"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u66F8\u304D\u65B9"),s("li",null,"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4F5C\u308A\u65B9")],-1),s4=s("p",null,"\u3053\u3053\u307E\u3067\u306F Vue.js \u3092\u4F7F\u3046\u306A\u3089\u5FC5\u305A\u77E5\u3063\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308B\u5185\u5BB9",-1),e4=s("p",null,"\u5F15\u304D\u7D9A\u304D\u77E5\u3089\u306A\u3044\u6A5F\u80FD\u304C\u30B3\u30FC\u30C9\u306B\u51FA\u3066\u304F\u308B\u304B\u3082\u3057\u308C\u306A\u3044\u304C\u3001\u5B66\u3093\u3060\u3053\u3068\u3068\u95A2\u9023\u3057\u3066\u3044\u308B\u3068\u611F\u3058\u3089\u308C\u305F\u3089\u305D\u308C\u3067\u3088\u3044",-1),l4=s("p",null,"\u5B66\u7FD2\u306E\u76EE\u5B89",-1),o4=s("ul",null,[s("li",null,"\u7406\u89E3\u3057\u3066\u3044\u308B\u3053\u3068"),s("li",null,"\u66F8\u3051\u308B\u3053\u3068")],-1),n4=s("p",null,"\u81EA\u4FE1\u304C\u306A\u3044\u7B87\u6240\u306F\u5FA9\u7FD2\u30FB\u8CEA\u554F\u3057\u307E\u3057\u3087\u3046\uFF01",-1),t4={__name:"46",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[JC,XC,GC,QC,s4,e4,l4,o4,n4]),_:1},16))}},r4=s("h1",null,"\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\uFF1F",-1),a4=s("p",null,"\u3053\u308C\u304B\u3089\u5B66\u3076\u5185\u5BB9\u306E\u78BA\u8A8D",-1),c4=s("ul",null,[s("li",null,[n("\u3088\u308A\u5177\u4F53\u7684\u306A\u984C\u6750\u3067\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F "),s("ul",null,[s("li",null,[n("\u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 "),s("ul",null,[s("li",null,"\u3053\u308C\u307E\u3067\u5B66\u3093\u3060\u5185\u5BB9\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u5C11\u3057\u8907\u96D1\u306A\u5B9F\u88C5")])]),s("li",null,[n("Markdown \u30A8\u30C7\u30A3\u30BF\u30FC "),s("ul",null,[s("li",null,"throttle-debounce \u306B\u3088\u308B\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D")])]),s("li",null,[n("\u30C4\u30AF\u30ED\u30A2\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC "),s("ul",null,[s("li",null,"Fetch API \u306B\u3088\u308B JSON \u30C7\u30FC\u30BF\u306E\u53D6\u5F97"),s("li",null,"Vue Router \u306B\u3088\u308B\u753B\u9762\u9077\u79FB")])]),s("li",null,[n("\u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC "),s("ul",null,[s("li",null,"\u753B\u50CF\u306E\u53D6\u5F97\u3068\u8868\u793A"),s("li",null,"\u3042\u3089\u304B\u3058\u3081\u7528\u610F\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u306E\u9069\u7528")])])])]),s("li",null,[n("Nuxt 3 \u3092\u4F7F\u3046 "),s("ul",null,[s("li",null,"Vue.js \u5358\u4F53\u3092\u4F7F\u3046\u5834\u5408\u3068\u306E\u9055\u3044"),s("li",null,"useFetch \u306A\u3069\u306E Nuxt 3 \u7279\u6709\u306E\u30D8\u30EB\u30D1\u30FC\u95A2\u6570\u306E\u4F7F\u3044\u65B9")])])],-1),p4={__name:"47",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[r4,a4,c4]),_:1},16))}},i4=s("h1",null,"\u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",-1),y4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev")],-1),u4=s("ol",null,[s("li",null,"\u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A\u8868\u306B\u30C7\u30FC\u30BF\u3092\u6D41\u3057\u8FBC\u3093\u3067\u30AB\u30E9\u30E0\u3067\u4E26\u3079\u66FF\u3048\u3067\u304D\u308B"),s("li",null,"\u30B3\u30FC\u30C9\u306E\u8AAC\u660E"),s("li",null,"\u884C\u3092\u8FFD\u52A0\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09")],-1),d4={__name:"48",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[i4,y4,u4]),_:1},16))}},f4=s("h1",null,"\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D",-1),m4=s("p",null,"throttle, debounce \u3092\u4F7F\u3046\u3068\u30A4\u30D9\u30F3\u30C8\u30CF\u30F3\u30C9\u30EA\u30F3\u30B0\u95A2\u6570\u306E\u547C\u3073\u51FA\u3057\u983B\u5EA6\u3092\u9593\u5F15\u304F\u3053\u3068\u304C\u3067\u304D\u308B",-1),h4=s("div",{class:"flex gap-8"},[s("div",{class:"h-sm overflow-y-auto flex-shrink"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filterFruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"indexOf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},">="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"filterFruits"),s("span",{style:{color:"#858585"}},",")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filterFruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"indexOf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},">="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"filterFruits"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])])]),s("div",{class:"flex-shrink"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"input"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"filterFruits"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},", "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},") "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"input"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"filterFruits"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},", "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},") "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])]),s("p",null,"\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u63DB\u3048\u308B\u3068\u2026\uFF1F"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"filterFruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"debounce"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"indexOf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},">="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"filterFruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"debounce"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"indexOf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},">="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")])])])])])],-1),B4={__name:"49",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[f4,m4,h4]),_:1},16))}},A4=s("h1",null,"Markdown \u30A8\u30C7\u30A3\u30BF\u30FC",-1),v4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev")],-1),D4=s("ol",null,[s("li",null,"\u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A\u5DE6\u30AB\u30E9\u30E0\u306B Markdown \u8A18\u6CD5\u3067\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3059\u308B\u3068\u53F3\u30AB\u30E9\u30E0\u306B\u5BFE\u5FDC\u3059\u308B\u898B\u305F\u76EE\u304C\u8868\u793A\u3067\u304D\u308B"),s("li",null,"\u30B3\u30FC\u30C9\u306E\u8AAC\u660E"),s("li",null,"\u53F3\u30AB\u30E9\u30E0\u306E\u898B\u305F\u76EE\u304C\u5909\u308F\u308B\u983B\u5EA6\u3092 throttle-debounce \u3067\u9593\u5F15\u3044\u3066\u307F\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09")],-1),g4={__name:"50",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[A4,v4,D4]),_:1},16))}},C4=s("h1",null,"\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC",-1),_4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev")],-1),E4=s("ol",null,[s("li",null,[n("\u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A"),s("a",{href:"https://design-lab.tuqulore.com/",target:"_blank",rel:"noopener"},"\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC"),n("\u3068\u3044\u3046\u30B5\u30A4\u30C8\u3068\u540C\u3058\u8A18\u4E8B\u30C7\u30FC\u30BF\uFF08JSON\uFF09\u3092\u53D6\u5F97\u3057\u3066\u4E00\u89A7\u304B\u3089\u9078\u629E\u8868\u793A\u3067\u304D\u308B")]),s("li",null,"\u30B3\u30FC\u30C9\u306E\u8AAC\u660E\uFF08App \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3001PostList \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09"),s("li",null,[n("Vue Router \u3092\u5C0E\u5165\u3057\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09 "),s("ul",null,[s("li",null,"Vue \u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u3057\u3066 Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u767B\u9332"),s("li",null,"\u753B\u9762\u304C\u5207\u308A\u66FF\u308F\u308B\u3088\u3046\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u5DEE\u3057\u66FF\u3048"),s("li",null,"\u753B\u9762\u9077\u79FB\u3092\u88DC\u8DB3\u3067\u304D\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u5DEE\u3057\u66FF\u3048")])]),s("li",null,"\u30B3\u30FC\u30C9\u306E\u8AAC\u660E\uFF08PostDetail \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09")],-1),F4={__name:"51",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[C4,_4,E4]),_:1},16))}};var b4="/vue-3-practices/handson-gallery-shoes-finish.png";const x4=s("h1",null,"\u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC",-1),k4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev")],-1),w4=s("ol",null,[s("li",null,"\u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A\u9774\u306E\u30C7\u30FC\u30BF\uFF08JSON\uFF09\u3092\u53D6\u5F97\u3057\u3066\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30B5\u30A4\u30C8\u3089\u3057\u3044\u898B\u305F\u76EE\u3067\u4E00\u89A7\u8868\u793A\u3067\u304D\u308B"),s("li",null,"JSON \u304B\u3089\u9774\u306E\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u3088\u3046\uFF0810 \u5206\u7A0B\u5EA6\uFF09"),s("li",null,"\u53D6\u5F97\u3057\u305F\u9774\u306E\u30C7\u30FC\u30BF\u3092\u3042\u3089\u304B\u3058\u3081\u7528\u610F\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u3067\u8868\u793A\u3057\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09")],-1),$4=s("img",{class:"pt-2",src:b4,width:"400"},null,-1),O4={__name:"52",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[x4,k4,w4,$4]),_:1},16))}},S4=s("h1",null,"Nuxt 3",-1),M4=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt")],-1),P4=s("p",null,"\u52B9\u7387\u7684\u306B\u30E2\u30C0\u30F3\u306A\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u30E9\u30A4\u30D6\u30E9\u30EA\u304C\u3042\u3089\u304B\u3058\u3081\u542B\u307E\u308C\u3066\u3044\u308B\uFF08Nuxt 3 \u3092\u5C0E\u5165\u3059\u308C\u3070\u81EA\u5206\u3067\u5225\u9014\u5C0E\u5165\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\uFF09",-1),L4=s("ol",null,[s("li",null,[n("\u30EA\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u3068 Web \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u63D0\u4F9B\uFF1A"),s("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue.js")]),s("li",null,[n("\u958B\u767A\u74B0\u5883\u3067\u306E HMR\uFF08\u30DA\u30FC\u30B8\u306E\u518D\u8AAD\u307F\u8FBC\u307F\u306A\u3057\u3067 ES \u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u5DEE\u3057\u66FF\u3048\u305F\u308A\u3059\u308B\uFF09\u306E\u30B5\u30DD\u30FC\u30C8\u3001\u672C\u756A\u74B0\u5883\u3067\u306E\u30B3\u30FC\u30C9\u306E\u30D0\u30F3\u30C9\u30EA\u30F3\u30B0\uFF1A"),s("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener"},"webpack 5"),n(" \u3068 "),s("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite")]),s("li",null,[n("\u30EC\u30AC\u30B7\u30FC\u306A\u30D6\u30E9\u30A6\u30B6\u30FC\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u306A\u304C\u3089\u6700\u65B0\u306E JavaScript \u6587\u6CD5\u304C\u66F8\u3051\u308B\uFF1A"),s("a",{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener"},"esbuild")]),s("li",null,[n("\u958B\u767A\u30B5\u30FC\u30D0\u30FC\u3001\u30B5\u30FC\u30D0\u30FC\u30B5\u30A4\u30C9\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3001API \u30B5\u30FC\u30D0\u30FC\u306E\u63D0\u4F9B\uFF1A"),s("a",{href:"https://github.com/unjs/h3",target:"_blank",rel:"noopener"},"h3")]),s("li",null,[n("\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF08\u753B\u9762\u9077\u79FB\u51E6\u7406\uFF09\uFF1A"),s("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"vue-router")])],-1),T4={__name:"53",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[S4,M4,P4,L4]),_:1},16))}},N4=s("h1",null,"Nuxt 3",-1),j4=s("ul",null,[s("li",null,"Vue.js \u304C\u5C0E\u5165\u6E08\u307F\uFF08Nuxt \u3092\u5C0E\u5165\u3059\u308C\u3070 Vue.js \u306E\u5C0E\u5165\u304C\u4E0D\u8981\uFF09"),s("li",null,"Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u7B49\u306E import \u3092\u7701\u7565\u3067\u304D\u308B"),s("li",null,"pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B .vue \u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 HTML \u30DA\u30FC\u30B8\u304C\u3067\u304D\u308B\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u81EA\u52D5\u751F\u6210\uFF09"),s("li",null,"server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u30B5\u30FC\u30D0\u30FC\u5074\u306E\u51E6\u7406\u304C\u66F8\u3051\u308B\uFF08API \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306E\u751F\u6210\uFF09"),s("li",null,"Nuxt 3 \u306F 2022 \u5E74 6 \u6708\u73FE\u5728\u3001\u30EA\u30EA\u30FC\u30B9\u5019\u88DC\u7248\u304C\u516C\u958B\u3055\u308C\u3066\u3044\u308B")],-1),V4={__name:"54",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[N4,j4]),_:1},16))}},R4=s("h1",null,"Nuxt 3",-1),I4=s("ul",null,[s("li",null,"pages"),s("li",null,"NuxtLink"),s("li",null,"layouts"),s("li",null,"Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA"),s("li",null,"composables")],-1),z4={__name:"55",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[R4,I4]),_:1},16))}},H4=s("h1",null,"pages",-1),U4=s("p",null,[n("app.vue \u3092\u524A\u9664\u3059\u308B\u3002"),s("br"),n(" pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B.vue \u30D5\u30A1\u30A4\u30EB\u3092\u914D\u7F6E\u3057\u3001\u8907\u6570\u30DA\u30FC\u30B8\u3092\u69CB\u6210\u3059\u308B\u3002 \u307E\u305A\u306F "),s("code",null,"pages/index.vue"),n(", "),s("code",null,"pages/about.vue"),n(" \u3092\u4F5C\u6210\u3059\u308B\u3002")],-1),q4=s("p",null,[n("Vue \u958B\u767A\u74B0\u5883\u3067\u306F App.vue \u30D5\u30A1\u30A4\u30EB\u3092\u30E1\u30A4\u30F3\u3067\u958B\u767A\u3057\u3066\u3044\u3066\u3001Nuxt \u3067\u3082\u540C\u69D8\u306E\u76EE\u7684\u3092 app.vue \u306B\u3066\u884C\u3048\u308B\u3002\u4F8B\u3048\u3070 app.vue \u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u66F8\u3044\u3066\u3001\u5404\u30DA\u30FC\u30B8\u306E template \u90E8\u5206\u304C"),s("code",null,"<NuxtPage />"),n("\u306B\u7F6E\u304D\u63DB\u308F\u308B\u3002")],-1),W4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),K4=s("p",null,"\u305F\u3060\u3057\u3001\u8907\u6570\u30DA\u30FC\u30B8\u3092\u69CB\u6210\u3059\u308B\u306B\u3042\u305F\u3063\u3066\u306F pages \u5185\u3067\u958B\u767A\u30FB\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u4E00\u822C\u7684\u3002 \u305D\u306E\u969B\u3001app.vue \u3067\u3053\u306E\u3088\u3046\u306A\u3053\u3068\u304C\u3067\u304D\u308B\u304C\u3001\u5F8C\u8FF0\u3059\u308B layouts \u6A5F\u80FD\u3092\u4F7F\u3063\u305F\u307B\u3046\u304C\u3088\u3044\u3002",-1),Y4={__name:"56",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[H4,U4,q4,W4,K4]),_:1},16))}},Z4=s("h1",null,"NuxtLink",-1),J4=s("p",null,[n("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067 Nav.vue \u3092\u4F5C\u6210\u3001index \u3068 about \u306E\u30EA\u30F3\u30AF\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u6210\u3059\u308B\u3002"),s("br"),n(" Nuxt \u3067\u306F\u30DA\u30FC\u30B8\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 Vue Router \u306B\u3088\u308B\u8A2D\u5B9A\u3092\u81EA\u52D5\u306B\u884C\u3063\u3066\u304F\u308C\u308B\u3001\u3064\u307E\u308A Vue \u74B0\u5883\u4E0B\u306E\u3088\u3046\u306B\u624B\u52D5\u3067\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u8A2D\u5B9A\u3092\u751F\u6210\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u3002")],-1),X4=s("p",null,"\u305D\u3057\u3066\u305D\u306E\u30EB\u30FC\u30C8\u3092\u79FB\u52D5\u3059\u308B\u969B\u306F HTML \u306E",-1),G4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Q4=s("p",null,"\u3067\u306F\u306A\u304F",-1),s7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},'<NuxtLink to="/about">ABOUT</NuxtLink>')])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},'<NuxtLink to="/about">ABOUT</NuxtLink>')])])])],-1),e7=s("p",null,[n("\u3068\u8A18\u8FF0\u3057\u3066\u30EA\u30F3\u30AF\u3092\u4F5C\u6210\u3059\u308B\u3002"),s("br"),n(" \u30EB\u30FC\u30C8\u5916\u3001\u4F8B\u3048\u3070\u5916\u90E8\u30B5\u30A4\u30C8\u306E\u30EA\u30F3\u30AF\u3092\u8CBC\u308B\u5834\u5408\u306F\u5F93\u6765\u306E"),s("code",null,"<a>"),n("\u8981\u7D20\u3092\u4F7F\u3046\u3053\u3068\u306B\u306A\u308B\u3002")],-1),l7={__name:"57",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[Z4,J4,X4,G4,Q4,s7,e7]),_:1},16))}},o7=s("h1",null,"layouts",-1),n7=s("p",null,[s("code",null,"layouts/default.vue"),n("\u3092\u4F5C\u6210\u3057\u3001\u5171\u901A\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3055\u305B\u308B\u3002"),s("br"),n(" pages \u3067\u89E3\u8AAC\u3057\u305F\u3088\u3046\u306B\u4F8B\u3048\u3070 app.vue \u306B\u5171\u901A\u30D8\u30C3\u30C0\u3092\u6301\u305F\u305B\u308B\u306E\u3067\u3042\u308C\u3070\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u66F8\u304D\u65B9\u3067\u4E8B\u8DB3\u308A\u308B\u304C\u3001\u30DA\u30FC\u30B8\u306B\u3088\u3063\u3066\u306F\u30D8\u30C3\u30C0\u304C\u4E0D\u8981\u306A\u3069\u3068\u3044\u3063\u305F\u3053\u3068\u304C\u51FA\u3066\u304F\u308B\u3002 \u305D\u306E\u969B\u3001\u30DA\u30FC\u30B8\u305D\u306E\u3082\u306E\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u8907\u6570\u7528\u610F\u3057\u3001\u5404\u30DA\u30FC\u30B8\u304C\u305D\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u9078\u3073\u5909\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3002")],-1),t7=s("p",null,[s("code",null,"app.vue"),n("\u306E\u4F8B")],-1),r7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),a7=s("p",null,[s("code",null,"layouts/default.vue"),n("\u306E\u4F8B")],-1),c7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"\u5171\u901A\u30D8\u30C3\u30C0"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),p7={__name:"58",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[o7,n7,t7,r7,a7,c7]),_:1},16))}},i7=s("h1",null,"Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA",-1),y7=s("p",null,[s("code",null,"server/api"),n("\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u3042\u308B"),s("code",null,"users.js"),n("\u3092\u78BA\u8A8D\u3001"),s("code",null,"components/userList.vue"),n("\u306B\u4EE5\u4E0B\u3092\u8A18\u8FF0\u3059\u308B\u3002")],-1),u7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),d7={__name:"59",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[i7,y7,u7]),_:1},16))}},f7=s("h1",null,"composables",-1),m7=s("p",null,[n("\u30A2\u30D7\u30EA\u5168\u4F53\u5171\u901A\u306E\u30C7\u30FC\u30BF\u3092\u7BA1\u7406\u3059\u308B\u3002js \u30D5\u30A1\u30A4\u30EB\u3067\u306F\u3042\u308B\u304C\u3001\u4E2D\u8EAB\u306F vue \u306E\u8A18\u8FF0\u306B\u8FD1\u3044\u3053\u3068\u304C\u308F\u304B\u308B\u3002 \u3053\u3053\u3067\u72B6\u614B\u3092\u7BA1\u7406\u3059\u308B\u3002 "),s("code",null,"composables/userCounter.js"),n("\u3092\u4F5C\u6210\u3059\u308B\u3002")],-1),h7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),B7={__name:"60",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[f7,m7,h7]),_:1},16))}},A7=s("h1",null,"composables",-1),v7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),D7={__name:"61",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[A7,v7]),_:1},16))}},g7=s("h1",null,"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03",-1),C7=s("p",null,"\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC\u3092 Nuxt 3 \u3067\u3064\u304F\u308A\u306A\u304A\u3057\u305F\u3082\u306E",-1),_7=s("p",null,"\u52D5\u4F5C\u306F Vue 3 \u306E\u3082\u306E\u3068\u540C\u3058",-1),E7=s("p",null,"Node.js \u304C\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u6E08\u307F\u306E\u4EBA\u306F\u30ED\u30FC\u30AB\u30EB\u3067\u52D5\u304B\u3057\u3066\u307F\u3088\u3046",-1),F7=s("ol",null,[s("li",null,[s("a",{href:"https://github.com/tuqulore/vue-3-practices/",target:"_blank",rel:"noopener"},"https://github.com/tuqulore/vue-3-practices/"),n(" \u304B\u3089 ZIP \u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9")]),s("li",null,"\u4EFB\u610F\u306E\u5834\u6240\u306B ZIP \u3092\u5C55\u958B"),s("li",null,"handson-fetch-router-nuxt-finish \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u79FB\u52D5"),s("li",null,[s("code",null,"npm install"),n(" \u3067 NPM \u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB")]),s("li",null,[s("code",null,"npm run dev"),n(" \u3067 Nuxt 3 \u306E\u958B\u767A\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5")])],-1),b7={__name:"62",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[g7,C7,_7,E7,F7]),_:1},16))}},x7=s("h1",null,"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09",-1),k7=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"Vue 3"),s("ol",null,[s("li",null,"Vue Router \u3092\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"),s("li",null,"\u30EB\u30FC\u30C8\u3092\u5B9A\u7FA9\u3059\u308B"),s("li",null,"RouterView \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F7F\u3046")])]),s("div",null,[s("p",{class:"text-xs"},"Nuxt 3"),s("div",{class:"h-xs overflow-y-auto"},[s("ol",null,[s("li",null,"\u5C0E\u5165\u6E08\u307F\u306A\u306E\u3067\u8A2D\u5B9A\u4E0D\u8981"),s("li",null,"\u30D5\u30A1\u30A4\u30EB\u30FB\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u6210\u3067\u5B9A\u7FA9\u3067\u304D\u308B\uFF08\u30D5\u30A1\u30A4\u30EB\u30D9\u30FC\u30B9\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09"),s("li",null,[n("app.vue \u306F NuxtPage \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u5FC5\u8981\u3060\u304C app.vue \u81EA\u4F53\u5B58\u5728\u3057\u306A\u3051\u308C\u3070\u8A2D\u5B9A\u4E0D\u8981 "),s("a",{href:"https://v3.nuxtjs.org/guide/directory-structure/app",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/directory-structure/app")])]),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"pages/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"\u251C\u2500\u2500 index.vue // \u3053\u306E\u5834\u5408\u306E\u30D1\u30B9\u306F `/` \u3068\u306A\u308A index \u306F\u30D1\u30B9\u304B\u3089\u7701\u7565\u53EF\u80FD")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"\u2514\u2500\u2500 posts // \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304C\u305D\u306E\u307E\u307EURL\u306E\u30D1\u30B9\u306B\u542B\u307E\u308C\u308B")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"    \u2514\u2500\u2500 [id].vue // URL\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306F[]\u3067\u56F2\u3080")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"pages/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"\u251C\u2500\u2500 index.vue // \u3053\u306E\u5834\u5408\u306E\u30D1\u30B9\u306F `/` \u3068\u306A\u308A index \u306F\u30D1\u30B9\u304B\u3089\u7701\u7565\u53EF\u80FD")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"\u2514\u2500\u2500 posts // \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304C\u305D\u306E\u307E\u307EURL\u306E\u30D1\u30B9\u306B\u542B\u307E\u308C\u308B")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"    \u2514\u2500\u2500 [id].vue // URL\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306F[]\u3067\u56F2\u3080")])])])])])])],-1),w7={__name:"63",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[x7,k7]),_:1},16))}},$7=s("h1",null,"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09",-1),O7=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/directory-structure/pages",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/directory-structure/pages")],-1),S7=s("blockquote",null,[s("p",null,[n("Pages "),s("strong",null,"must have a single root element"),n(" to allow route transitions between pages. (HTML comments are considered elements as well.)")])],-1),M7=s("p",null,[n("Vue 3 \u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u6700\u4E0A\u4F4D\u306B\u8907\u6570\u8981\u7D20\u304C\u66F8\u3051\u308B\u3088\u3046\u306B\u306A\u3063\u305F "),s("a",{href:"https://v3.ja.vuejs.org/guide/migration/fragments.html",target:"_blank",rel:"noopener"},"https://v3.ja.vuejs.org/guide/migration/fragments.html")],-1),P7=s("p",null,"\u4F8B\uFF1A",-1),L7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),T7=s("p",null,"\u3057\u304B\u3057\u3001Nuxt 3 \u306E pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u914D\u7F6E\u3059\u308B Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u9650\u3063\u3066\u306F\u3001Nuxt 3 \u306E\u5236\u7D04\u3068\u3057\u3066\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u6700\u4E0A\u4F4D\u306F\u3072\u3068\u3064\u307E\u3067\u306E\u8981\u7D20\u3057\u304B\u66F8\u3051\u306A\u3044",-1),N7={__name:"64",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[$7,O7,S7,M7,P7,L7,T7]),_:1},16))}},j7=s("h1",null,"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u81EA\u52D5\u30A4\u30F3\u30DD\u30FC\u30C8\uFF09",-1),V7=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"RouterLink"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue-router"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"RouterLink"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u5F8C\u7565"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"RouterLink"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue-router"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"RouterLink"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u5F8C\u7565"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])])]),s("div",null,[s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue"),s("div",{class:"h-xs overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u5F8C\u7565"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u5F8C\u7565"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])]),s("p",null,"\u30A4\u30F3\u30DD\u30FC\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u5229\u7528\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u304C\u7701\u7565\u3067\u304D\u8A18\u8FF0\u91CF\u304C\u6E1B\u3089\u305B\u308B")])])],-1),R7={__name:"65",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[j7,V7]),_:1},16))}},I7=s("h1",null,"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u81EA\u52D5\u30A4\u30F3\u30DD\u30FC\u30C8\uFF09",-1),z7=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/concepts/auto-imports",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/concepts/auto-imports")],-1),H7=s("p",null,"\u4EE5\u4E0B\u306F\u30A4\u30F3\u30DD\u30FC\u30C8\u4E0D\u8981",-1),U7=s("ul",null,[s("li",null,"Nuxt 3 \u304C\u63D0\u4F9B\u3059\u308B\u95A2\u6570\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08useFetch\u3001$fetch\u3001NuxtLink \u306A\u3069\uFF09"),s("li",null,"\u4ECA\u307E\u3067\u4F7F\u3063\u3066\u304D\u305F Composition API \u95A2\u9023\u306E\u95A2\u6570\uFF08ref\u3001computed \u306A\u3069\uFF09"),s("li",null,"components \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u914D\u7F6E\u3055\u308C\u305F Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8"),s("li",null,"composables \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u914D\u7F6E\u3055\u308C\u305F\u30B3\u30F3\u30DD\u30B8\u30B7\u30E7\u30F3\u95A2\u6570")],-1),q7={__name:"66",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[I7,z7,H7,U7]),_:1},16))}},W7=s("h1",null,"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09",-1),K7=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue"),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u4E2D\u7565"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"load"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"response"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"posts"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"json"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"load"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u5F8C\u7565"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u4E2D\u7565"),s("span",{style:{color:"#393A34"}},"\uFF09")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"load"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"response"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"response"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"json"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"load"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u5F8C\u7565"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])])]),s("div",null,[s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue"),s("div",{class:"h-xs overflow-y-auto"},[s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u4E2D\u7565"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#C98A7D"}},"`http://localhost:3000/wp-json/wp/v2/posts.json`")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u5F8C\u7565"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u4E2D\u7565"),s("span",{style:{color:"#393A34"}},"\uFF09")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959"}},"`http://localhost:3000/wp-json/wp/v2/posts.json`")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u5F8C\u7565"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])]),s("ul",null,[s("li",null,"\u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u5225\u9014\u7528\u610F\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044"),s("li",null,[s("a",{href:"https://developer.mozilla.org/ja/docs/Web/API/Response/json",target:"_blank",rel:"noopener"},"Response.json()"),n("\u304C\u6697\u9ED9\u7684\u306B\u5B9F\u884C\u3055\u308C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5F97\u3089\u308C\u308B")]),s("li",null,[n("\u30C7\u30FC\u30BF\u518D\u53D6\u5F97\u306E\u95A2\u6570\u3001\u53D6\u5F97\u4E2D\u306E\u72B6\u614B\u5024\u306A\u3069\u3042\u308B\u3068\u4FBF\u5229\u306A\u3082\u306E\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u308B "),s("a",{href:"https://v3.nuxtjs.org/api/composables/use-fetch",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/api/composables/use-fetch")])])])])],-1),Y7={__name:"67",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[W7,K7]),_:1},16))}},Z7=s("h1",null,"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09",-1),J7=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/features/data-fetching",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/features/data-fetching")],-1),X7=s("p",null,"useFetch \u4EE5\u5916\u3082\u3042\u308B",-1),G7=s("p",null,[n("useLazyFetch: \u975E\u540C\u671F\u95A2\u6570\u3067\u306A\u3044\u4EE3\u308F\u308A\u306B\u30C7\u30FC\u30BF\u53D6\u5F97\u524D\u306F "),s("code",null,"null"),n(" \u304C\u5165\u308B")],-1),Q7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyFetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/posts"'),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyFetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/posts"'),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),s_=s("p",null,"useAsyncData: \u4F8B\u3068\u3057\u3066\u306F useFetch \u3068\u540C\u3058\u3053\u3068\u3092\u3084\u3063\u3066\u3044\u308B\u3002\uFF08useFetch \u304C\u4F7F\u3048\u306A\u3044\u30B1\u30FC\u30B9\u3067\uFF09\u975E\u540C\u671F\u51E6\u7406\u306B\u3088\u3063\u3066\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u305F\u3044\u969B\u306B\u4F7F\u3046",-1),e_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},"));")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},"));")])])])],-1),l_=s("p",null,"useLazyAsyncData: useLazyFetch \u306E useAsyncData \u7248",-1),o_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),n_={__name:"68",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[Z7,J7,X7,G7,Q7,s_,e_,l_,o_]),_:1},16))}},t_=s("h1",null,"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09",-1),r_=s("p",null,"\u4FBF\u5229\u3060\u304C\u7D20\u6734\u306B Fetch API \u3092\u4F7F\u3046\u5834\u5408\u3068\u610F\u56F3\u3057\u306A\u3044\u6319\u52D5\u306E\u969B\u304C\u751F\u3058\u308B\u5834\u5408\u304C\u3042\u308B",-1),a_=s("ul",null,[s("li",null,[n("\u540C\u4E00\u30AA\u30EA\u30B8\u30F3\uFF08\u4F8B\uFF1A"),s("code",null,"http://localhost:3000"),n("\uFF09\u3067\u3042\u3063\u3066\u3082\u3001\u30AA\u30EA\u30B8\u30F3\u3092\u542B\u3081\u305F url \u3067\u53D6\u5F97\u5148\u3092\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u3044\u3051\u306A\u3044\u5834\u5408\u304C\u3042\u308B "),s("ul",null,[s("li",null,"server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u63D0\u4F9B\u3059\u308B API \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306F\u30AA\u30EA\u30B8\u30F3\u7701\u7565\u53EF\u80FD"),s("li",null,"\u4E0A\u8A18\u4EE5\u5916\u306E\u30B1\u30FC\u30B9\u3001\u305F\u3068\u3048\u3070\u30A2\u30BB\u30C3\u30C8\uFF08public \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u63D0\u4F9B\u3059\u308B\u9759\u7684\u30D5\u30A1\u30A4\u30EB\uFF09\u306F\u30AA\u30EA\u30B8\u30F3\u304C\u5FC5\u8981")])])],-1),c_=s("p",null,[n("Nuxt 3 \u306E useFetch\u3001$fetch \u306F\u7D14\u7C8B\u306A\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u51E6\u7406\u3067\u306A\u3044\uFF08\u30B5\u30FC\u30D0\u30FC\u5074\u3067\u5185\u90E8\u7684\u306B\u51E6\u7406\u3055\u308C\u308B\uFF09\u5834\u5408\u304C\u3042\u308B\u3053\u3068\u304C\u539F\u56E0 "),s("a",{href:"https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch")],-1),p_=s("p",null,"\u5834\u5408\u306B\u3088\u3063\u3066\u306F\uFF08$fetch \u3067\u306F\u306A\u304F\uFF09 fetch \u3092\u4F7F\u3046\u3053\u3068\u3082\u691C\u8A0E\u3059\u308B\u3053\u3068",-1),i_={__name:"69",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[t_,r_,a_,c_,p_]),_:1},16))}},y_=s("h1",null,"\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9",-1),u_=s("p",null,"Vue \u56FA\u6709\u306E\u8A18\u6CD5\u306B\u3064\u3044\u3066\u306E\u516C\u5F0F\u306A\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9",-1),d_=s("ul",null,[s("li",null,"\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9\u306B\u66F8\u3044\u3066\u3042\u308B\u3053\u3068\u3092\u5B88\u3089\u306A\u304F\u3066\u3082\u3001\u52D5\u304F Vue \u306E\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u3053\u3068\u306F\u3067\u304D\u308B"),s("li",null,"\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9\u306B\u66F8\u3044\u3066\u3042\u308B\u3053\u3068\u3092\u5B88\u308B\u3068\u3001\u4E8B\u524D\u306B\u8D77\u3053\u308A\u3046\u308B\u554F\u984C\u306B\u5BFE\u51E6\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B"),s("li",null,[s("a",{href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener"},"eslint-plugin-vue"),n("\u3092\u4F7F\u3046\u3068\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9\u306B\u9055\u53CD\u3057\u3066\u3044\u308B\u304B\u9759\u7684\u306B\u30B3\u30FC\u30C9\u3092\u89E3\u6790\u30FB\u4FEE\u6B63\u3067\u304D\u308B")])],-1),f_=s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/style-guide/",target:"_blank",rel:"noopener"},"\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9")],-1),m_={__name:"70",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[y_,u_,d_,f_]),_:1},16))}},h_=s("h1",null,"Vue 3 \u3068 Nuxt 3 \u306E\u8AAC\u660E\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01",-1),B_=s("p",null,"\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F",-1),A_=s("p",null,"\u4EE5\u4E0B\u3092\u5B66\u3093\u3067\u304D\u305F",-1),v_=s("ul",null,[s("li",null,"Vue \u306E\u57FA\u672C\u7684\u306A\u66F8\u304D\u65B9"),s("li",null,"Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F"),s("li",null,"Nuxt \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F")],-1),D_=s("p",null,"Nuxt 3 \u3092\u4F7F\u3063\u3066\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3064\u304F\u3063\u3066\u3044\u304F\u6E96\u5099\u304C\u3067\u304D\u305F",-1),g_=s("p",null,"\u696D\u52D9\u30FB\u8DA3\u5473\u3067\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u767A\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046\uFF01",-1),C_=s("p",null,"\u5B66\u7FD2\u306E\u76EE\u5B89",-1),__=s("ul",null,[s("li",null,"\u7406\u89E3\u3057\u3066\u3044\u308B\u3053\u3068"),s("li",null,"\u66F8\u3051\u308B\u3053\u3068")],-1),E_=s("p",null,"\u81EA\u4FE1\u304C\u306A\u3044\u7B87\u6240\u306F\u5FA9\u7FD2\u30FB\u8CEA\u554F\u3057\u307E\u3057\u3087\u3046\uFF01",-1),F_={__name:"71",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[h_,B_,A_,v_,D_,g_,C_,__,E_]),_:1},16))}},b_=s("h1",null,"\u8AB2\u984C",-1),x_=s("ul",null,[s("li",null,"\u30EC\u30D9\u30EB 1 \uFF5E 3 \u306E 3 \u3064\u3042\u308B"),s("li",null,"1 \u304B\u3089\u9806\u756A\u306B\u53D6\u308A\u7D44\u3093\u3067\u3082\u3089\u3046"),s("li",null,"16 \u6642\u306B\u89E3\u8AAC\u3059\u308B")],-1),k_={__name:"72",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[b_,x_]),_:1},16))}},w_=s("h1",null,"\u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 1\uFF09",-1),$_=s("p",null,[n("\u554F\u984C\uFF1A"),s("a",{href:"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue")],-1),O_=s("ol",null,[s("li",null,[n("useFetch \u3092\u4F7F\u3063\u3066 "),s("a",{href:"http://localhost:3000/data.json",target:"_blank",rel:"noopener"},"http://localhost:3000/data.json"),n(" \u304B\u3089\u679C\u7269\u306E\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3057\u3066\u304F\u3060\u3055\u3044")]),s("li",null,[n("\u679C\u7269\u3092\u9806\u5E8F\u306A\u3057\u30EA\u30B9\u30C8\u3067\u8868\u793A\u3057\u3066\u304F\u3060\u3055\u3044 "),s("a",{href:"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul",target:"_blank",rel:"noopener"},"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul")])],-1),S_={__name:"73",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[w_,$_,O_]),_:1},16))}},M_=s("h1",null,"\u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 2\uFF09",-1),P_=s("p",null,[n("\u554F\u984C\uFF1A"),s("a",{href:"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue")],-1),L_=s("p",null,"\u30B3\u30FC\u30C9\u4E0A\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u8AAD\u307F\u306A\u304C\u3089\u3001\u672A\u5B8C\u6210\u306E\u30A2\u30D7\u30EA\u3092\u5B8C\u6210\u3055\u305B\u3066\u304F\u3060\u3055\u3044",-1),T_={__name:"74",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[M_,P_,L_]),_:1},16))}},N_=s("h1",null,"\u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 3\uFF09",-1),j_=s("p",null,[n("\u554F\u984C\uFF1A"),s("a",{href:"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue")],-1),V_=s("p",null,"\u30B3\u30FC\u30C9\u4E0A\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u8AAD\u307F\u306A\u304C\u3089\u3001\u672A\u5B8C\u6210\u306E\u30A2\u30D7\u30EA\u3092\u5B8C\u6210\u3055\u305B\u3066\u304F\u3060\u3055\u3044",-1),R_={__name:"75",setup(e){const l={};return x($),(o,t)=>(v(),S(W,q(H(l)),{default:N(()=>[N_,j_,V_]),_:1},16))}};var I_=[{path:"1",name:"page-1",component:zA,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
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
`,drawings:{persist:!1},title:"Vue.js"},index:0,start:0,end:29,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:WA,meta:{slide:{raw:`
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
  - throttle-debounce, fetch, Vue Router \u306A\u3069`,frontmatter:{},index:1,start:30,end:48,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:QA,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:2,start:49,end:63,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:n9,meta:{slide:{raw:`
# \u672C\u8B1B\u5EA7\u306E\u3059\u3059\u3081\u304B\u305F

\u3069\u306E\u3088\u3046\u306A\u5F62\u5F0F\u3067\u9032\u884C\u3059\u308B\u306E\u304B\u306E\u78BA\u8A8D

\u30CF\u30F3\u30BA\u30AA\u30F3 \u2252 \u30B3\u30FC\u30C9\u3092\u66F8\u3044\u3066\u52D5\u304B\u3059\u3053\u3068\uFF081 \u56DE 10 \u5206\u7A0B\u5EA6\uFF09\u3092\u30E1\u30A4\u30F3\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002

\u9069\u5B9C\u8AAC\u660E\u3092\u631F\u307F\u307E\u3059\u304C\u3001\u52D5\u304B\u306A\u3044\u3001\u5206\u304B\u3089\u306A\u3044\u3068\u304D\u3001\u305D\u306E\u4ED6\u306A\u3093\u3067\u3082\uFF08\u5927\u62B5\u306F\u4ED6\u306E\u53D7\u8B1B\u8005\u3082\u540C\u3058\u3053\u3068\u3092\u8003\u3048\u3066\u3044\u307E\u3059\uFF01\uFF09\u8CEA\u554F\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002
`,title:"\u672C\u8B1B\u5EA7\u306E\u3059\u3059\u3081\u304B\u305F",level:1,content:`# \u672C\u8B1B\u5EA7\u306E\u3059\u3059\u3081\u304B\u305F

\u3069\u306E\u3088\u3046\u306A\u5F62\u5F0F\u3067\u9032\u884C\u3059\u308B\u306E\u304B\u306E\u78BA\u8A8D

\u30CF\u30F3\u30BA\u30AA\u30F3 \u2252 \u30B3\u30FC\u30C9\u3092\u66F8\u3044\u3066\u52D5\u304B\u3059\u3053\u3068\uFF081 \u56DE 10 \u5206\u7A0B\u5EA6\uFF09\u3092\u30E1\u30A4\u30F3\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002

\u9069\u5B9C\u8AAC\u660E\u3092\u631F\u307F\u307E\u3059\u304C\u3001\u52D5\u304B\u306A\u3044\u3001\u5206\u304B\u3089\u306A\u3044\u3068\u304D\u3001\u305D\u306E\u4ED6\u306A\u3093\u3067\u3082\uFF08\u5927\u62B5\u306F\u4ED6\u306E\u53D7\u8B1B\u8005\u3082\u540C\u3058\u3053\u3068\u3092\u8003\u3048\u3066\u3044\u307E\u3059\uFF01\uFF09\u8CEA\u554F\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002`,frontmatter:{},index:3,start:64,end:73,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:u9,meta:{slide:{raw:`
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

\u8B1B\u5E2B\u306F\u9069\u5B9C\u3042\u305F\u3089\u3057\u3044\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\u3064\u304F\u3063\u3066\u3044\u304D\u307E\u3059\u304C\u3001\u53D7\u8B1B\u8005\u306E\u7686\u3055\u3093\u306F\u4F5C\u6210\u3057\u305F\u30CF\u30F3\u30BA\u30AA\u30F3\u74B0\u5883\u3092\uFF08\u5168\u6D88\u3057\u3059\u308B\u306A\u3069\uFF09\u4F7F\u3044\u307E\u308F\u3057\u3066\u3082\u3089\u3063\u3066\u5927\u4E08\u592B\u3067\u3059\u3002`,frontmatter:{},index:4,start:74,end:92,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:h9,meta:{slide:{raw:`
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

\u73FE\u72B6\u3001Vue \u95A2\u9023\u306E\u8A18\u4E8B\u306F Options API \u3067\u89E3\u8AAC\u3055\u308C\u3066\u3044\u308B\u307B\u3046\u304C\u5927\u591A\u6570\u3067\u3042\u308A\u3001\u521D\u5B66\u8005\u306E\u65B9\u306F\u6DF7\u4E71\u3055\u308C\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002Vue2, 3 \u3069\u3061\u3089\u3067\u3082\u4E21 API \u306F\u4F7F\u3048\u307E\u3059\u304C\u3001\u672C\u8B1B\u5EA7\u3067\u306F\u4ECA\u5F8C\u4E3B\u6D41\u3068\u306A\u308B Composition API \u3092\u53D6\u308A\u6271\u3044\u307E\u3059\u3002`,frontmatter:{},index:5,start:93,end:145,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:g9,meta:{slide:{raw:`
# Composition API \u306E\u30E1\u30EA\u30C3\u30C8

Vue \u306E\u6A5F\u80FD\u3067\u306F\u306A\u304F\u3001\u8AD6\u7406\u7684\u306A\u95A2\u5FC3\u4E8B\u3067\u30B3\u30FC\u30C9\u3092\u307E\u3068\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B

<img src="/apis.png" class="h-5/6" />
`,title:"Composition API \u306E\u30E1\u30EA\u30C3\u30C8",level:1,content:`# Composition API \u306E\u30E1\u30EA\u30C3\u30C8

Vue \u306E\u6A5F\u80FD\u3067\u306F\u306A\u304F\u3001\u8AD6\u7406\u7684\u306A\u95A2\u5FC3\u4E8B\u3067\u30B3\u30FC\u30C9\u3092\u307E\u3068\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u308B

<img src="/apis.png" class="h-5/6" />`,frontmatter:{},index:6,start:146,end:153,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:$9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:7,start:154,end:191,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:M9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:8,start:192,end:224,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:T9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:9,start:225,end:260,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:K9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:10,start:261,end:309,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:X9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:11,start:310,end:341,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:ev,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:12,start:342,end:376,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:nv,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:13,start:377,end:416,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:cv,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:14,start:417,end:444,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:uv,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:15,start:445,end:482,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Fv,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:16,start:483,end:534,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:wv,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:17,start:535,end:571,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Mv,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:18,start:572,end:608,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Tv,meta:{slide:{raw:`
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
- \u30D5\u30A9\u30FC\u30E0\u5165\u529B\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0`,frontmatter:{},index:19,start:609,end:620,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:zv,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:20,start:621,end:649,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Xv,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:21,start:650,end:680,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:e1,meta:{slide:{raw:`
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

\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u304C\u4F7F\u308F\u308C\u3066\u3044\u308B\u7B87\u6240\u306F Vue \u306E\u6A5F\u80FD\u3068\u95A2\u4FC2\u3057\u3066\u3044\u308B\u3068\u6C17\u3065\u3051\u308B\u3068\u3088\u3044`,frontmatter:{},index:22,start:681,end:691,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:r1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:23,start:692,end:724,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:i1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:24,start:725,end:786,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:h1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:25,start:787,end:823,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:D1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:26,start:824,end:854,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:JD,meta:{slide:{raw:`
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

<arrow v-click="2" x1="400" y1="420" x2="230" y2="365" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:27,start:855,end:881,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:sg,meta:{slide:{raw:`
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
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u30DE\u30A6\u30F3\u30C8\u3057\u3066\u304B\u3089\u983B\u7E41\u306B\u5909\u5316\u3059\u308B\u30B1\u30FC\u30B9\u3067\u3042\u308C\u3070 \`v-show\`\u3092\u4F7F\u3046`,frontmatter:{},index:28,start:882,end:897,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:ng,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:29,start:898,end:948,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:cg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:30,start:949,end:999,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:ug,meta:{slide:{raw:`
# \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08\`key\` \u5C5E\u6027\u306E\u4ED8\u4E0E\uFF09

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
`,title:"\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08`key` \u5C5E\u6027\u306E\u4ED8\u4E0E\uFF09",level:1,content:`# \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08\`key\` \u5C5E\u6027\u306E\u4ED8\u4E0E\uFF09

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

</div>`,frontmatter:{},index:31,start:1e3,end:1049,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:vg,meta:{slide:{raw:`
# \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08\u6DFB\u5B57\u306B\u3088\u308B \`key\` \u5C5E\u6027\u306E\u4ED8\u4E0E\uFF09

\u8B58\u5225\u5B50\u3092\u7528\u610F\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u6DFB\u5B57\u304C\u5F97\u3089\u308C\u308B\u306E\u3067\u4EE3\u7528\u3059\u308B\u3068\u4FBF\u5229\u3002

<div class="flex gap-8">

<div class="h-sm overflow-y-auto">

\`\`\`vue{all|4}
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
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

<div class="flex-shrink w-110">
  <p>\u7D50\u679C</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>

\u305F\u3060\u3057\u3001\u4E26\u3073\u66FF\u3048\u308B\u3053\u3068\u304C\u60F3\u5B9A\u3055\u308C\u308B\u5834\u5408\u610F\u56F3\u3057\u306A\u3044\u6319\u52D5\u306B\u306A\u308B\uFF08\u3069\u3053\u306B\u30EA\u30B9\u30C8\u30A2\u30A4\u30C6\u30E0\u304C\u79FB\u52D5\u3057\u305F\u306E\u304B\u691C\u77E5\u3067\u304D\u306A\u3044\uFF09\u306E\u3067\u6CE8\u610F

</div>

</div>
`,title:"\u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08\u6DFB\u5B57\u306B\u3088\u308B `key` \u5C5E\u6027\u306E\u4ED8\u4E0E\uFF09",level:1,content:`# \u30EA\u30B9\u30C8\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\uFF08\u6DFB\u5B57\u306B\u3088\u308B \`key\` \u5C5E\u6027\u306E\u4ED8\u4E0E\uFF09

\u8B58\u5225\u5B50\u3092\u7528\u610F\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u6DFB\u5B57\u304C\u5F97\u3089\u308C\u308B\u306E\u3067\u4EE3\u7528\u3059\u308B\u3068\u4FBF\u5229\u3002

<div class="flex gap-8">

<div class="h-sm overflow-y-auto">

\`\`\`vue{all|4}
<template>
  <div id="list-rendering">
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
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

<div class="flex-shrink w-110">
  <p>\u7D50\u679C</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>

\u305F\u3060\u3057\u3001\u4E26\u3073\u66FF\u3048\u308B\u3053\u3068\u304C\u60F3\u5B9A\u3055\u308C\u308B\u5834\u5408\u610F\u56F3\u3057\u306A\u3044\u6319\u52D5\u306B\u306A\u308B\uFF08\u3069\u3053\u306B\u30EA\u30B9\u30C8\u30A2\u30A4\u30C6\u30E0\u304C\u79FB\u52D5\u3057\u305F\u306E\u304B\u691C\u77E5\u3067\u304D\u306A\u3044\uFF09\u306E\u3067\u6CE8\u610F

</div>

</div>`,frontmatter:{},index:32,start:1050,end:1102,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:kg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:33,start:1103,end:1137,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Og,meta:{slide:{raw:`
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
- \u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1`,frontmatter:{},index:34,start:1138,end:1149,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:Tg,meta:{slide:{raw:`
# \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210

\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u53C2\u7167\u3055\u308C\u30C4\u30EA\u30FC\u69CB\u9020\u306B\u306A\u308B\u3002\u6700\u4E0A\u4F4D\u306F\u30EB\u30FC\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08App.vue\uFF09

<img src="/components.png" alt="\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210" style="height: 80%; width: auto" />
`,title:"\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210",level:1,content:`# \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210

\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304B\u3089\u5B50\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u53C2\u7167\u3055\u308C\u30C4\u30EA\u30FC\u69CB\u9020\u306B\u306A\u308B\u3002\u6700\u4E0A\u4F4D\u306F\u30EB\u30FC\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08App.vue\uFF09

<img src="/components.png" alt="\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u57FA\u672C\u3068\u69CB\u6210" style="height: 80%; width: auto" />`,frontmatter:{},index:35,start:1150,end:1157,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Rg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:36,start:1158,end:1212,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Yg,meta:{slide:{raw:`
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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:37,start:1213,end:1271,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:eC,meta:{slide:{raw:`
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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:38,start:1272,end:1332,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:pC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:39,start:1333,end:1394,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:dC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:40,start:1395,end:1449,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:xC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:41,start:1450,end:1515,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:RC,meta:{slide:{raw:`
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
import ChildComponent from "./ChildComponent.vue";
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
import ChildComponent from "./ChildComponent.vue";
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

</div>`,frontmatter:{},index:42,start:1516,end:1593,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:UC,meta:{slide:{raw:`
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
import ChildComponent from "./ChildComponent.vue";
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
import ChildComponent from "./ChildComponent.vue";
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

</div>`,frontmatter:{},index:43,start:1594,end:1634,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:ZC,meta:{slide:{raw:`
# \u30B9\u30ED\u30C3\u30C8\u306B\u3088\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u914D\u4FE1

slot \u3092\u4F7F\u3046\u3068\u3001HTML \u8981\u7D20\u306E\u3088\u3046\u306B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u5B50\u8981\u7D20\u3092\u6E21\u3059\u3053\u3068\u304C\u3067\u304D\u308B

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">\u89AA\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8 - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent>Hello Component</ChildComponent>
</template>
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
</div>`,frontmatter:{},index:44,start:1635,end:1675,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:t4,meta:{slide:{raw:`
# Vue \u306E\u57FA\u672C\u7684\u306A\u66F8\u304D\u65B9\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01

\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F

\u4EE5\u4E0B\u3092\u5B66\u3093\u3067\u304D\u305F

- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u306E\u4F5C\u308A\u65B9
- \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u66F8\u304D\u65B9
- \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4F5C\u308A\u65B9

\u3053\u3053\u307E\u3067\u306F Vue.js \u3092\u4F7F\u3046\u306A\u3089\u5FC5\u305A\u77E5\u3063\u3066\u3044\u308B\u5FC5\u8981\u304C\u3042\u308B\u5185\u5BB9

\u5F15\u304D\u7D9A\u304D\u77E5\u3089\u306A\u3044\u6A5F\u80FD\u304C\u30B3\u30FC\u30C9\u306B\u51FA\u3066\u304F\u308B\u304B\u3082\u3057\u308C\u306A\u3044\u304C\u3001\u5B66\u3093\u3060\u3053\u3068\u3068\u95A2\u9023\u3057\u3066\u3044\u308B\u3068\u611F\u3058\u3089\u308C\u305F\u3089\u305D\u308C\u3067\u3088\u3044

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

\u5F15\u304D\u7D9A\u304D\u77E5\u3089\u306A\u3044\u6A5F\u80FD\u304C\u30B3\u30FC\u30C9\u306B\u51FA\u3066\u304F\u308B\u304B\u3082\u3057\u308C\u306A\u3044\u304C\u3001\u5B66\u3093\u3060\u3053\u3068\u3068\u95A2\u9023\u3057\u3066\u3044\u308B\u3068\u611F\u3058\u3089\u308C\u305F\u3089\u305D\u308C\u3067\u3088\u3044

\u5B66\u7FD2\u306E\u76EE\u5B89

- \u7406\u89E3\u3057\u3066\u3044\u308B\u3053\u3068
- \u66F8\u3051\u308B\u3053\u3068

\u81EA\u4FE1\u304C\u306A\u3044\u7B87\u6240\u306F\u5FA9\u7FD2\u30FB\u8CEA\u554F\u3057\u307E\u3057\u3087\u3046\uFF01`,frontmatter:{},index:45,start:1676,end:1698,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:p4,meta:{slide:{raw:`
# \u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\uFF1F

\u3053\u308C\u304B\u3089\u5B66\u3076\u5185\u5BB9\u306E\u78BA\u8A8D

- \u3088\u308A\u5177\u4F53\u7684\u306A\u984C\u6750\u3067\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F
  - \u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
    - \u3053\u308C\u307E\u3067\u5B66\u3093\u3060\u5185\u5BB9\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u5C11\u3057\u8907\u96D1\u306A\u5B9F\u88C5
  - Markdown \u30A8\u30C7\u30A3\u30BF\u30FC
    - throttle-debounce \u306B\u3088\u308B\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D
  - \u30C4\u30AF\u30ED\u30A2\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC
    - Fetch API \u306B\u3088\u308B JSON \u30C7\u30FC\u30BF\u306E\u53D6\u5F97
    - Vue Router \u306B\u3088\u308B\u753B\u9762\u9077\u79FB
  - \u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC
    - \u753B\u50CF\u306E\u53D6\u5F97\u3068\u8868\u793A
    - \u3042\u3089\u304B\u3058\u3081\u7528\u610F\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u306E\u9069\u7528
- Nuxt 3 \u3092\u4F7F\u3046
  - Vue.js \u5358\u4F53\u3092\u4F7F\u3046\u5834\u5408\u3068\u306E\u9055\u3044
  - useFetch \u306A\u3069\u306E Nuxt 3 \u7279\u6709\u306E\u30D8\u30EB\u30D1\u30FC\u95A2\u6570\u306E\u4F7F\u3044\u65B9
`,title:"\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\uFF1F",level:1,content:`# \u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306F\uFF1F

\u3053\u308C\u304B\u3089\u5B66\u3076\u5185\u5BB9\u306E\u78BA\u8A8D

- \u3088\u308A\u5177\u4F53\u7684\u306A\u984C\u6750\u3067\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F
  - \u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
    - \u3053\u308C\u307E\u3067\u5B66\u3093\u3060\u5185\u5BB9\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u5C11\u3057\u8907\u96D1\u306A\u5B9F\u88C5
  - Markdown \u30A8\u30C7\u30A3\u30BF\u30FC
    - throttle-debounce \u306B\u3088\u308B\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D
  - \u30C4\u30AF\u30ED\u30A2\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC
    - Fetch API \u306B\u3088\u308B JSON \u30C7\u30FC\u30BF\u306E\u53D6\u5F97
    - Vue Router \u306B\u3088\u308B\u753B\u9762\u9077\u79FB
  - \u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC
    - \u753B\u50CF\u306E\u53D6\u5F97\u3068\u8868\u793A
    - \u3042\u3089\u304B\u3058\u3081\u7528\u610F\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u306E\u9069\u7528
- Nuxt 3 \u3092\u4F7F\u3046
  - Vue.js \u5358\u4F53\u3092\u4F7F\u3046\u5834\u5408\u3068\u306E\u9055\u3044
  - useFetch \u306A\u3069\u306E Nuxt 3 \u7279\u6709\u306E\u30D8\u30EB\u30D1\u30FC\u95A2\u6570\u306E\u4F7F\u3044\u65B9`,frontmatter:{},index:46,start:1699,end:1719,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:d4,meta:{slide:{raw:`
# \u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. \u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A\u8868\u306B\u30C7\u30FC\u30BF\u3092\u6D41\u3057\u8FBC\u3093\u3067\u30AB\u30E9\u30E0\u3067\u4E26\u3079\u66FF\u3048\u3067\u304D\u308B
2. \u30B3\u30FC\u30C9\u306E\u8AAC\u660E
3. \u884C\u3092\u8FFD\u52A0\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09
`,title:"\u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8",level:1,content:`# \u30B0\u30EA\u30C3\u30C9\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. \u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A\u8868\u306B\u30C7\u30FC\u30BF\u3092\u6D41\u3057\u8FBC\u3093\u3067\u30AB\u30E9\u30E0\u3067\u4E26\u3079\u66FF\u3048\u3067\u304D\u308B
2. \u30B3\u30FC\u30C9\u306E\u8AAC\u660E
3. \u884C\u3092\u8FFD\u52A0\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09`,frontmatter:{},index:47,start:1720,end:1729,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:B4,meta:{slide:{raw:`
# \u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D

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
    const filterFruits = () => {
      fruits.value = originalFruits.filter(
        (fruit) => fruit.indexOf(message.value) >= 0
      );
    };
    return {
      filterFruits,
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
  <input type="text" v-model="message" @input="filterFruits" />
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit }}
    </li>
  </ul>
</template>
\`\`\`

\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u63DB\u3048\u308B\u3068\u2026\uFF1F

\`\`\`js
const filterFruits = debounce(1000, () => {
  fruits.value = originalFruits.filter(
    (fruit) => fruit.indexOf(message.value) >= 0
  );
});
\`\`\`

</div>
</div>
`,title:"\u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D",level:1,content:`# \u30A4\u30D9\u30F3\u30C8\u51E6\u7406\u306E\u9593\u5F15\u304D

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
    const filterFruits = () => {
      fruits.value = originalFruits.filter(
        (fruit) => fruit.indexOf(message.value) >= 0
      );
    };
    return {
      filterFruits,
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
  <input type="text" v-model="message" @input="filterFruits" />
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit }}
    </li>
  </ul>
</template>
\`\`\`

\u6B21\u306E\u3088\u3046\u306B\u66F8\u304D\u63DB\u3048\u308B\u3068\u2026\uFF1F

\`\`\`js
const filterFruits = debounce(1000, () => {
  fruits.value = originalFruits.filter(
    (fruit) => fruit.indexOf(message.value) >= 0
  );
});
\`\`\`

</div>
</div>`,frontmatter:{},index:48,start:1730,end:1797,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:g4,meta:{slide:{raw:`
# Markdown \u30A8\u30C7\u30A3\u30BF\u30FC

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. \u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A\u5DE6\u30AB\u30E9\u30E0\u306B Markdown \u8A18\u6CD5\u3067\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3059\u308B\u3068\u53F3\u30AB\u30E9\u30E0\u306B\u5BFE\u5FDC\u3059\u308B\u898B\u305F\u76EE\u304C\u8868\u793A\u3067\u304D\u308B
2. \u30B3\u30FC\u30C9\u306E\u8AAC\u660E
3. \u53F3\u30AB\u30E9\u30E0\u306E\u898B\u305F\u76EE\u304C\u5909\u308F\u308B\u983B\u5EA6\u3092 throttle-debounce \u3067\u9593\u5F15\u3044\u3066\u307F\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09
`,title:"Markdown \u30A8\u30C7\u30A3\u30BF\u30FC",level:1,content:`# Markdown \u30A8\u30C7\u30A3\u30BF\u30FC

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. \u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A\u5DE6\u30AB\u30E9\u30E0\u306B Markdown \u8A18\u6CD5\u3067\u30C6\u30AD\u30B9\u30C8\u3092\u5165\u529B\u3059\u308B\u3068\u53F3\u30AB\u30E9\u30E0\u306B\u5BFE\u5FDC\u3059\u308B\u898B\u305F\u76EE\u304C\u8868\u793A\u3067\u304D\u308B
2. \u30B3\u30FC\u30C9\u306E\u8AAC\u660E
3. \u53F3\u30AB\u30E9\u30E0\u306E\u898B\u305F\u76EE\u304C\u5909\u308F\u308B\u983B\u5EA6\u3092 throttle-debounce \u3067\u9593\u5F15\u3044\u3066\u307F\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09`,frontmatter:{},index:49,start:1798,end:1807,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:F4,meta:{slide:{raw:`
# \u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev

1. \u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A[\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC](https://design-lab.tuqulore.com/)\u3068\u3044\u3046\u30B5\u30A4\u30C8\u3068\u540C\u3058\u8A18\u4E8B\u30C7\u30FC\u30BF\uFF08JSON\uFF09\u3092\u53D6\u5F97\u3057\u3066\u4E00\u89A7\u304B\u3089\u9078\u629E\u8868\u793A\u3067\u304D\u308B
2. \u30B3\u30FC\u30C9\u306E\u8AAC\u660E\uFF08App \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3001PostList \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09
3. Vue Router \u3092\u5C0E\u5165\u3057\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09
   - Vue \u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u3057\u3066 Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u767B\u9332
   - \u753B\u9762\u304C\u5207\u308A\u66FF\u308F\u308B\u3088\u3046\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u5DEE\u3057\u66FF\u3048
   - \u753B\u9762\u9077\u79FB\u3092\u88DC\u8DB3\u3067\u304D\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u5DEE\u3057\u66FF\u3048
4. \u30B3\u30FC\u30C9\u306E\u8AAC\u660E\uFF08PostDetail \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09
`,title:"\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC",level:1,content:`# \u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev

1. \u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A[\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC](https://design-lab.tuqulore.com/)\u3068\u3044\u3046\u30B5\u30A4\u30C8\u3068\u540C\u3058\u8A18\u4E8B\u30C7\u30FC\u30BF\uFF08JSON\uFF09\u3092\u53D6\u5F97\u3057\u3066\u4E00\u89A7\u304B\u3089\u9078\u629E\u8868\u793A\u3067\u304D\u308B
2. \u30B3\u30FC\u30C9\u306E\u8AAC\u660E\uFF08App \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3001PostList \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09
3. Vue Router \u3092\u5C0E\u5165\u3057\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09
   - Vue \u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u3057\u3066 Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u767B\u9332
   - \u753B\u9762\u304C\u5207\u308A\u66FF\u308F\u308B\u3088\u3046\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u5DEE\u3057\u66FF\u3048
   - \u753B\u9762\u9077\u79FB\u3092\u88DC\u8DB3\u3067\u304D\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3078\u306E\u5DEE\u3057\u66FF\u3048
4. \u30B3\u30FC\u30C9\u306E\u8AAC\u660E\uFF08PostDetail \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09`,frontmatter:{},index:50,start:1808,end:1821,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:O4,meta:{slide:{raw:`
# \u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev

1. \u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A\u9774\u306E\u30C7\u30FC\u30BF\uFF08JSON\uFF09\u3092\u53D6\u5F97\u3057\u3066\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30B5\u30A4\u30C8\u3089\u3057\u3044\u898B\u305F\u76EE\u3067\u4E00\u89A7\u8868\u793A\u3067\u304D\u308B
2. JSON \u304B\u3089\u9774\u306E\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u3088\u3046\uFF0810 \u5206\u7A0B\u5EA6\uFF09
3. \u53D6\u5F97\u3057\u305F\u9774\u306E\u30C7\u30FC\u30BF\u3092\u3042\u3089\u304B\u3058\u3081\u7528\u610F\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u3067\u8868\u793A\u3057\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">
`,title:"\u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC",level:1,content:`# \u9774\u306E\u30AE\u30E3\u30E9\u30EA\u30FC

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev

1. \u3069\u3093\u306A\u30A2\u30D7\u30EA\u304B\uFF1A\u9774\u306E\u30C7\u30FC\u30BF\uFF08JSON\uFF09\u3092\u53D6\u5F97\u3057\u3066\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30B5\u30A4\u30C8\u3089\u3057\u3044\u898B\u305F\u76EE\u3067\u4E00\u89A7\u8868\u793A\u3067\u304D\u308B
2. JSON \u304B\u3089\u9774\u306E\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u3088\u3046\uFF0810 \u5206\u7A0B\u5EA6\uFF09
3. \u53D6\u5F97\u3057\u305F\u9774\u306E\u30C7\u30FC\u30BF\u3092\u3042\u3089\u304B\u3058\u3081\u7528\u610F\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u3067\u8868\u793A\u3057\u3088\u3046\uFF0820 \u5206\u7A0B\u5EA6\uFF09

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">`,frontmatter:{},index:51,start:1822,end:1833,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:T4,meta:{slide:{raw:`
# Nuxt 3

https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt

\u52B9\u7387\u7684\u306B\u30E2\u30C0\u30F3\u306A\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u30E9\u30A4\u30D6\u30E9\u30EA\u304C\u3042\u3089\u304B\u3058\u3081\u542B\u307E\u308C\u3066\u3044\u308B\uFF08Nuxt 3 \u3092\u5C0E\u5165\u3059\u308C\u3070\u81EA\u5206\u3067\u5225\u9014\u5C0E\u5165\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\uFF09

1. \u30EA\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u3068 Web \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u63D0\u4F9B\uFF1A[Vue.js](https://vuejs.org/)
2. \u958B\u767A\u74B0\u5883\u3067\u306E HMR\uFF08\u30DA\u30FC\u30B8\u306E\u518D\u8AAD\u307F\u8FBC\u307F\u306A\u3057\u3067 ES \u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u5DEE\u3057\u66FF\u3048\u305F\u308A\u3059\u308B\uFF09\u306E\u30B5\u30DD\u30FC\u30C8\u3001\u672C\u756A\u74B0\u5883\u3067\u306E\u30B3\u30FC\u30C9\u306E\u30D0\u30F3\u30C9\u30EA\u30F3\u30B0\uFF1A[webpack 5](https://webpack.js.org/) \u3068 [Vite](https://vitejs.dev/)
3. \u30EC\u30AC\u30B7\u30FC\u306A\u30D6\u30E9\u30A6\u30B6\u30FC\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u306A\u304C\u3089\u6700\u65B0\u306E JavaScript \u6587\u6CD5\u304C\u66F8\u3051\u308B\uFF1A[esbuild](https://esbuild.github.io/)
4. \u958B\u767A\u30B5\u30FC\u30D0\u30FC\u3001\u30B5\u30FC\u30D0\u30FC\u30B5\u30A4\u30C9\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3001API \u30B5\u30FC\u30D0\u30FC\u306E\u63D0\u4F9B\uFF1A[h3](https://github.com/unjs/h3)
5. \u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF08\u753B\u9762\u9077\u79FB\u51E6\u7406\uFF09\uFF1A[vue-router](https://router.vuejs.org/)
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt

\u52B9\u7387\u7684\u306B\u30E2\u30C0\u30F3\u306A\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u306B\u5FC5\u8981\u306A\u30E9\u30A4\u30D6\u30E9\u30EA\u304C\u3042\u3089\u304B\u3058\u3081\u542B\u307E\u308C\u3066\u3044\u308B\uFF08Nuxt 3 \u3092\u5C0E\u5165\u3059\u308C\u3070\u81EA\u5206\u3067\u5225\u9014\u5C0E\u5165\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\uFF09

1. \u30EA\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u3068 Web \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u63D0\u4F9B\uFF1A[Vue.js](https://vuejs.org/)
2. \u958B\u767A\u74B0\u5883\u3067\u306E HMR\uFF08\u30DA\u30FC\u30B8\u306E\u518D\u8AAD\u307F\u8FBC\u307F\u306A\u3057\u3067 ES \u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u5DEE\u3057\u66FF\u3048\u305F\u308A\u3059\u308B\uFF09\u306E\u30B5\u30DD\u30FC\u30C8\u3001\u672C\u756A\u74B0\u5883\u3067\u306E\u30B3\u30FC\u30C9\u306E\u30D0\u30F3\u30C9\u30EA\u30F3\u30B0\uFF1A[webpack 5](https://webpack.js.org/) \u3068 [Vite](https://vitejs.dev/)
3. \u30EC\u30AC\u30B7\u30FC\u306A\u30D6\u30E9\u30A6\u30B6\u30FC\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u306A\u304C\u3089\u6700\u65B0\u306E JavaScript \u6587\u6CD5\u304C\u66F8\u3051\u308B\uFF1A[esbuild](https://esbuild.github.io/)
4. \u958B\u767A\u30B5\u30FC\u30D0\u30FC\u3001\u30B5\u30FC\u30D0\u30FC\u30B5\u30A4\u30C9\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3001API \u30B5\u30FC\u30D0\u30FC\u306E\u63D0\u4F9B\uFF1A[h3](https://github.com/unjs/h3)
5. \u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF08\u753B\u9762\u9077\u79FB\u51E6\u7406\uFF09\uFF1A[vue-router](https://router.vuejs.org/)`,frontmatter:{},index:52,start:1834,end:1847,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:V4,meta:{slide:{raw:`
# Nuxt 3

- Vue.js \u304C\u5C0E\u5165\u6E08\u307F\uFF08Nuxt \u3092\u5C0E\u5165\u3059\u308C\u3070 Vue.js \u306E\u5C0E\u5165\u304C\u4E0D\u8981\uFF09
- Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u7B49\u306E import \u3092\u7701\u7565\u3067\u304D\u308B
- pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B .vue \u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 HTML \u30DA\u30FC\u30B8\u304C\u3067\u304D\u308B\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u81EA\u52D5\u751F\u6210\uFF09
- server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u30B5\u30FC\u30D0\u30FC\u5074\u306E\u51E6\u7406\u304C\u66F8\u3051\u308B\uFF08API \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306E\u751F\u6210\uFF09
- Nuxt 3 \u306F 2022 \u5E74 6 \u6708\u73FE\u5728\u3001\u30EA\u30EA\u30FC\u30B9\u5019\u88DC\u7248\u304C\u516C\u958B\u3055\u308C\u3066\u3044\u308B
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

- Vue.js \u304C\u5C0E\u5165\u6E08\u307F\uFF08Nuxt \u3092\u5C0E\u5165\u3059\u308C\u3070 Vue.js \u306E\u5C0E\u5165\u304C\u4E0D\u8981\uFF09
- Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u7B49\u306E import \u3092\u7701\u7565\u3067\u304D\u308B
- pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B .vue \u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3060\u3051\u3067 HTML \u30DA\u30FC\u30B8\u304C\u3067\u304D\u308B\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u81EA\u52D5\u751F\u6210\uFF09
- server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u30B5\u30FC\u30D0\u30FC\u5074\u306E\u51E6\u7406\u304C\u66F8\u3051\u308B\uFF08API \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306E\u751F\u6210\uFF09
- Nuxt 3 \u306F 2022 \u5E74 6 \u6708\u73FE\u5728\u3001\u30EA\u30EA\u30FC\u30B9\u5019\u88DC\u7248\u304C\u516C\u958B\u3055\u308C\u3066\u3044\u308B`,frontmatter:{},index:53,start:1848,end:1857,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:z4,meta:{slide:{raw:`
# Nuxt 3

- pages
- NuxtLink
- layouts
- Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA
- composables
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

- pages
- NuxtLink
- layouts
- Data Fetching / server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA
- composables`,frontmatter:{},index:54,start:1858,end:1867,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Y4,meta:{slide:{raw:`
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
\u305D\u306E\u969B\u3001app.vue \u3067\u3053\u306E\u3088\u3046\u306A\u3053\u3068\u304C\u3067\u304D\u308B\u304C\u3001\u5F8C\u8FF0\u3059\u308B layouts \u6A5F\u80FD\u3092\u4F7F\u3063\u305F\u307B\u3046\u304C\u3088\u3044\u3002`,frontmatter:{},index:55,start:1868,end:1887,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:l7,meta:{slide:{raw:`
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
\u30EB\u30FC\u30C8\u5916\u3001\u4F8B\u3048\u3070\u5916\u90E8\u30B5\u30A4\u30C8\u306E\u30EA\u30F3\u30AF\u3092\u8CBC\u308B\u5834\u5408\u306F\u5F93\u6765\u306E\`<a>\`\u8981\u7D20\u3092\u4F7F\u3046\u3053\u3068\u306B\u306A\u308B\u3002`,frontmatter:{},index:56,start:1888,end:1909,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:p7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:57,start:1910,end:1937,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:d7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:58,start:1938,end:1964,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:B7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:59,start:1965,end:1984,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:D7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:60,start:1985,end:2013,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:b7,meta:{slide:{raw:`
# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03

\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC\u3092 Nuxt 3 \u3067\u3064\u304F\u308A\u306A\u304A\u3057\u305F\u3082\u306E

\u52D5\u4F5C\u306F Vue 3 \u306E\u3082\u306E\u3068\u540C\u3058

Node.js \u304C\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u6E08\u307F\u306E\u4EBA\u306F\u30ED\u30FC\u30AB\u30EB\u3067\u52D5\u304B\u3057\u3066\u307F\u3088\u3046

1. https://github.com/tuqulore/vue-3-practices/ \u304B\u3089 ZIP \u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9
2. \u4EFB\u610F\u306E\u5834\u6240\u306B ZIP \u3092\u5C55\u958B
3. handson-fetch-router-nuxt-finish \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u79FB\u52D5
4. \`npm install\` \u3067 NPM \u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB
5. \`npm run dev\` \u3067 Nuxt 3 \u306E\u958B\u767A\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5
`,title:"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03",level:1,content:`# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03

\u30C7\u30B6\u30A4\u30F3\u30E9\u30DC\u306E\u8A18\u4E8B\u30D3\u30E5\u30FC\u30A2\u30FC\u3092 Nuxt 3 \u3067\u3064\u304F\u308A\u306A\u304A\u3057\u305F\u3082\u306E

\u52D5\u4F5C\u306F Vue 3 \u306E\u3082\u306E\u3068\u540C\u3058

Node.js \u304C\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u6E08\u307F\u306E\u4EBA\u306F\u30ED\u30FC\u30AB\u30EB\u3067\u52D5\u304B\u3057\u3066\u307F\u3088\u3046

1. https://github.com/tuqulore/vue-3-practices/ \u304B\u3089 ZIP \u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9
2. \u4EFB\u610F\u306E\u5834\u6240\u306B ZIP \u3092\u5C55\u958B
3. handson-fetch-router-nuxt-finish \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u79FB\u52D5
4. \`npm install\` \u3067 NPM \u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB
5. \`npm run dev\` \u3067 Nuxt 3 \u306E\u958B\u767A\u30B5\u30FC\u30D0\u30FC\u3092\u8D77\u52D5`,frontmatter:{},index:61,start:2014,end:2029,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:w7,meta:{slide:{raw:`
# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3</p>

1. Vue Router \u3092\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB
2. \u30EB\u30FC\u30C8\u3092\u5B9A\u7FA9\u3059\u308B
3. RouterView \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F7F\u3046

</div>

<div>

<p class="text-xs">Nuxt 3</p>

<div class="h-xs overflow-y-auto">

1. \u5C0E\u5165\u6E08\u307F\u306A\u306E\u3067\u8A2D\u5B9A\u4E0D\u8981
2. \u30D5\u30A1\u30A4\u30EB\u30FB\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u6210\u3067\u5B9A\u7FA9\u3067\u304D\u308B\uFF08\u30D5\u30A1\u30A4\u30EB\u30D9\u30FC\u30B9\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09
3. app.vue \u306F NuxtPage \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u5FC5\u8981\u3060\u304C app.vue \u81EA\u4F53\u5B58\u5728\u3057\u306A\u3051\u308C\u3070\u8A2D\u5B9A\u4E0D\u8981 https://v3.nuxtjs.org/guide/directory-structure/app

\`\`\`
pages/
\u251C\u2500\u2500 index.vue // \u3053\u306E\u5834\u5408\u306E\u30D1\u30B9\u306F \`/\` \u3068\u306A\u308A index \u306F\u30D1\u30B9\u304B\u3089\u7701\u7565\u53EF\u80FD
\u2514\u2500\u2500 posts // \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304C\u305D\u306E\u307E\u307EURL\u306E\u30D1\u30B9\u306B\u542B\u307E\u308C\u308B
    \u2514\u2500\u2500 [id].vue // URL\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306F[]\u3067\u56F2\u3080
\`\`\`

</div>

</div>

</div>
`,title:"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09",level:1,content:`# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3</p>

1. Vue Router \u3092\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB
2. \u30EB\u30FC\u30C8\u3092\u5B9A\u7FA9\u3059\u308B
3. RouterView \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F7F\u3046

</div>

<div>

<p class="text-xs">Nuxt 3</p>

<div class="h-xs overflow-y-auto">

1. \u5C0E\u5165\u6E08\u307F\u306A\u306E\u3067\u8A2D\u5B9A\u4E0D\u8981
2. \u30D5\u30A1\u30A4\u30EB\u30FB\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u6210\u3067\u5B9A\u7FA9\u3067\u304D\u308B\uFF08\u30D5\u30A1\u30A4\u30EB\u30D9\u30FC\u30B9\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09
3. app.vue \u306F NuxtPage \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u5FC5\u8981\u3060\u304C app.vue \u81EA\u4F53\u5B58\u5728\u3057\u306A\u3051\u308C\u3070\u8A2D\u5B9A\u4E0D\u8981 https://v3.nuxtjs.org/guide/directory-structure/app

\`\`\`
pages/
\u251C\u2500\u2500 index.vue // \u3053\u306E\u5834\u5408\u306E\u30D1\u30B9\u306F \`/\` \u3068\u306A\u308A index \u306F\u30D1\u30B9\u304B\u3089\u7701\u7565\u53EF\u80FD
\u2514\u2500\u2500 posts // \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304C\u305D\u306E\u307E\u307EURL\u306E\u30D1\u30B9\u306B\u542B\u307E\u308C\u308B
    \u2514\u2500\u2500 [id].vue // URL\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306F[]\u3067\u56F2\u3080
\`\`\`

</div>

</div>

</div>`,frontmatter:{},index:62,start:2030,end:2068,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:N7,meta:{slide:{raw:`
# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09

https://v3.nuxtjs.org/guide/directory-structure/pages

> Pages **must have a single root element** to allow route transitions between pages. (HTML comments are considered elements as well.)

Vue 3 \u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u6700\u4E0A\u4F4D\u306B\u8907\u6570\u8981\u7D20\u304C\u66F8\u3051\u308B\u3088\u3046\u306B\u306A\u3063\u305F https://v3.ja.vuejs.org/guide/migration/fragments.html

\u4F8B\uFF1A

\`\`\`vue
<template>
  <div />
  <p />
</template>
\`\`\`

\u3057\u304B\u3057\u3001Nuxt 3 \u306E pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u914D\u7F6E\u3059\u308B Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u9650\u3063\u3066\u306F\u3001Nuxt 3 \u306E\u5236\u7D04\u3068\u3057\u3066\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u6700\u4E0A\u4F4D\u306F\u3072\u3068\u3064\u307E\u3067\u306E\u8981\u7D20\u3057\u304B\u66F8\u3051\u306A\u3044
`,title:"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09",level:1,content:`# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF09

https://v3.nuxtjs.org/guide/directory-structure/pages

> Pages **must have a single root element** to allow route transitions between pages. (HTML comments are considered elements as well.)

Vue 3 \u306F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u6700\u4E0A\u4F4D\u306B\u8907\u6570\u8981\u7D20\u304C\u66F8\u3051\u308B\u3088\u3046\u306B\u306A\u3063\u305F https://v3.ja.vuejs.org/guide/migration/fragments.html

\u4F8B\uFF1A

\`\`\`vue
<template>
  <div />
  <p />
</template>
\`\`\`

\u3057\u304B\u3057\u3001Nuxt 3 \u306E pages \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u914D\u7F6E\u3059\u308B Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u9650\u3063\u3066\u306F\u3001Nuxt 3 \u306E\u5236\u7D04\u3068\u3057\u3066\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306E\u6700\u4E0A\u4F4D\u306F\u3072\u3068\u3064\u307E\u3067\u306E\u8981\u7D20\u3057\u304B\u66F8\u3051\u306A\u3044`,frontmatter:{},index:63,start:2069,end:2089,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:R7,meta:{slide:{raw:`
# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u81EA\u52D5\u30A4\u30F3\u30DD\u30FC\u30C8\uFF09

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  setup() {
    const posts = ref(null);
\uFF08\u5F8C\u7565\uFF09
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<script>
export default {
  async setup() {
    const { data: posts, pending } = await useFetch(
\uFF08\u5F8C\u7565\uFF09
\`\`\`

\u30A4\u30F3\u30DD\u30FC\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u5229\u7528\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u304C\u7701\u7565\u3067\u304D\u8A18\u8FF0\u91CF\u304C\u6E1B\u3089\u305B\u308B

</div>

</div>

</div>
`,title:"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u81EA\u52D5\u30A4\u30F3\u30DD\u30FC\u30C8\uFF09",level:1,content:`# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u81EA\u52D5\u30A4\u30F3\u30DD\u30FC\u30C8\uFF09

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  setup() {
    const posts = ref(null);
\uFF08\u5F8C\u7565\uFF09
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<script>
export default {
  async setup() {
    const { data: posts, pending } = await useFetch(
\uFF08\u5F8C\u7565\uFF09
\`\`\`

\u30A4\u30F3\u30DD\u30FC\u30C8\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u5229\u7528\u3059\u308B\u305F\u3081\u306E\u30B3\u30FC\u30C9\u304C\u7701\u7565\u3067\u304D\u8A18\u8FF0\u91CF\u304C\u6E1B\u3089\u305B\u308B

</div>

</div>

</div>`,frontmatter:{},index:64,start:2090,end:2136,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:q7,meta:{slide:{raw:`
# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u81EA\u52D5\u30A4\u30F3\u30DD\u30FC\u30C8\uFF09

https://v3.nuxtjs.org/guide/concepts/auto-imports

\u4EE5\u4E0B\u306F\u30A4\u30F3\u30DD\u30FC\u30C8\u4E0D\u8981

- Nuxt 3 \u304C\u63D0\u4F9B\u3059\u308B\u95A2\u6570\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08useFetch\u3001$fetch\u3001NuxtLink \u306A\u3069\uFF09
- \u4ECA\u307E\u3067\u4F7F\u3063\u3066\u304D\u305F Composition API \u95A2\u9023\u306E\u95A2\u6570\uFF08ref\u3001computed \u306A\u3069\uFF09
- components \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u914D\u7F6E\u3055\u308C\u305F Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
- composables \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u914D\u7F6E\u3055\u308C\u305F\u30B3\u30F3\u30DD\u30B8\u30B7\u30E7\u30F3\u95A2\u6570
`,title:"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u81EA\u52D5\u30A4\u30F3\u30DD\u30FC\u30C8\uFF09",level:1,content:`# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u81EA\u52D5\u30A4\u30F3\u30DD\u30FC\u30C8\uFF09

https://v3.nuxtjs.org/guide/concepts/auto-imports

\u4EE5\u4E0B\u306F\u30A4\u30F3\u30DD\u30FC\u30C8\u4E0D\u8981

- Nuxt 3 \u304C\u63D0\u4F9B\u3059\u308B\u95A2\u6570\u3001\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF08useFetch\u3001$fetch\u3001NuxtLink \u306A\u3069\uFF09
- \u4ECA\u307E\u3067\u4F7F\u3063\u3066\u304D\u305F Composition API \u95A2\u9023\u306E\u95A2\u6570\uFF08ref\u3001computed \u306A\u3069\uFF09
- components \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u914D\u7F6E\u3055\u308C\u305F Vue \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8
- composables \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B\u914D\u7F6E\u3055\u308C\u305F\u30B3\u30F3\u30DD\u30B8\u30B7\u30E7\u30F3\u95A2\u6570`,frontmatter:{},index:65,start:2137,end:2149,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:Y7,meta:{slide:{raw:`
# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script>
\uFF08\u4E2D\u7565\uFF09
    const posts = ref(null);
    const load = async () => {
      const response = await fetch("/wp-json/wp/v2/posts.json");
      posts.value = await response.json();
    };
    load();
\uFF08\u5F8C\u7565\uFF09
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<script>
\uFF08\u4E2D\u7565\uFF09
    const { data: posts, pending } = await useFetch(
      \`http://localhost:3000/wp-json/wp/v2/posts.json\`
    );
\uFF08\u5F8C\u7565\uFF09
\`\`\`

- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u5225\u9014\u7528\u610F\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044
- [Response.json()](https://developer.mozilla.org/ja/docs/Web/API/Response/json)\u304C\u6697\u9ED9\u7684\u306B\u5B9F\u884C\u3055\u308C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5F97\u3089\u308C\u308B
- \u30C7\u30FC\u30BF\u518D\u53D6\u5F97\u306E\u95A2\u6570\u3001\u53D6\u5F97\u4E2D\u306E\u72B6\u614B\u5024\u306A\u3069\u3042\u308B\u3068\u4FBF\u5229\u306A\u3082\u306E\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u308B https://v3.nuxtjs.org/api/composables/use-fetch

</div>

</div>

</div>
`,title:"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09",level:1,content:`# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script>
\uFF08\u4E2D\u7565\uFF09
    const posts = ref(null);
    const load = async () => {
      const response = await fetch("/wp-json/wp/v2/posts.json");
      posts.value = await response.json();
    };
    load();
\uFF08\u5F8C\u7565\uFF09
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<script>
\uFF08\u4E2D\u7565\uFF09
    const { data: posts, pending } = await useFetch(
      \`http://localhost:3000/wp-json/wp/v2/posts.json\`
    );
\uFF08\u5F8C\u7565\uFF09
\`\`\`

- \u30EA\u30A2\u30AF\u30C6\u30A3\u30D6\u306A\u5024\u3092\u5225\u9014\u7528\u610F\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044
- [Response.json()](https://developer.mozilla.org/ja/docs/Web/API/Response/json)\u304C\u6697\u9ED9\u7684\u306B\u5B9F\u884C\u3055\u308C\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5F97\u3089\u308C\u308B
- \u30C7\u30FC\u30BF\u518D\u53D6\u5F97\u306E\u95A2\u6570\u3001\u53D6\u5F97\u4E2D\u306E\u72B6\u614B\u5024\u306A\u3069\u3042\u308B\u3068\u4FBF\u5229\u306A\u3082\u306E\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u308B https://v3.nuxtjs.org/api/composables/use-fetch

</div>

</div>

</div>`,frontmatter:{},index:66,start:2150,end:2198,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:n_,meta:{slide:{raw:`
# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09

https://v3.nuxtjs.org/guide/features/data-fetching

useFetch \u4EE5\u5916\u3082\u3042\u308B

useLazyFetch: \u975E\u540C\u671F\u95A2\u6570\u3067\u306A\u3044\u4EE3\u308F\u308A\u306B\u30C7\u30FC\u30BF\u53D6\u5F97\u524D\u306F \`null\` \u304C\u5165\u308B

\`\`\`js
const { pending, data: posts } = useLazyFetch("/api/posts");
\`\`\`

useAsyncData: \u4F8B\u3068\u3057\u3066\u306F useFetch \u3068\u540C\u3058\u3053\u3068\u3092\u3084\u3063\u3066\u3044\u308B\u3002\uFF08useFetch \u304C\u4F7F\u3048\u306A\u3044\u30B1\u30FC\u30B9\u3067\uFF09\u975E\u540C\u671F\u51E6\u7406\u306B\u3088\u3063\u3066\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u305F\u3044\u969B\u306B\u4F7F\u3046

\`\`\`js
const { data } = await useAsyncData("count", () => $fetch("/api/count"));
\`\`\`

useLazyAsyncData: useLazyFetch \u306E useAsyncData \u7248

\`\`\`js
const { pending, data: count } = useLazyAsyncData("count", () =>
  $fetch("/api/count")
);
\`\`\`
`,title:"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09",level:1,content:`# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09

https://v3.nuxtjs.org/guide/features/data-fetching

useFetch \u4EE5\u5916\u3082\u3042\u308B

useLazyFetch: \u975E\u540C\u671F\u95A2\u6570\u3067\u306A\u3044\u4EE3\u308F\u308A\u306B\u30C7\u30FC\u30BF\u53D6\u5F97\u524D\u306F \`null\` \u304C\u5165\u308B

\`\`\`js
const { pending, data: posts } = useLazyFetch("/api/posts");
\`\`\`

useAsyncData: \u4F8B\u3068\u3057\u3066\u306F useFetch \u3068\u540C\u3058\u3053\u3068\u3092\u3084\u3063\u3066\u3044\u308B\u3002\uFF08useFetch \u304C\u4F7F\u3048\u306A\u3044\u30B1\u30FC\u30B9\u3067\uFF09\u975E\u540C\u671F\u51E6\u7406\u306B\u3088\u3063\u3066\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3057\u305F\u3044\u969B\u306B\u4F7F\u3046

\`\`\`js
const { data } = await useAsyncData("count", () => $fetch("/api/count"));
\`\`\`

useLazyAsyncData: useLazyFetch \u306E useAsyncData \u7248

\`\`\`js
const { pending, data: count } = useLazyAsyncData("count", () =>
  $fetch("/api/count")
);
\`\`\``,frontmatter:{},index:67,start:2199,end:2226,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:i_,meta:{slide:{raw:`
# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09

\u4FBF\u5229\u3060\u304C\u7D20\u6734\u306B Fetch API \u3092\u4F7F\u3046\u5834\u5408\u3068\u610F\u56F3\u3057\u306A\u3044\u6319\u52D5\u306E\u969B\u304C\u751F\u3058\u308B\u5834\u5408\u304C\u3042\u308B

- \u540C\u4E00\u30AA\u30EA\u30B8\u30F3\uFF08\u4F8B\uFF1A\`http://localhost:3000\`\uFF09\u3067\u3042\u3063\u3066\u3082\u3001\u30AA\u30EA\u30B8\u30F3\u3092\u542B\u3081\u305F url \u3067\u53D6\u5F97\u5148\u3092\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u3044\u3051\u306A\u3044\u5834\u5408\u304C\u3042\u308B
  - server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u63D0\u4F9B\u3059\u308B API \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306F\u30AA\u30EA\u30B8\u30F3\u7701\u7565\u53EF\u80FD
  - \u4E0A\u8A18\u4EE5\u5916\u306E\u30B1\u30FC\u30B9\u3001\u305F\u3068\u3048\u3070\u30A2\u30BB\u30C3\u30C8\uFF08public \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u63D0\u4F9B\u3059\u308B\u9759\u7684\u30D5\u30A1\u30A4\u30EB\uFF09\u306F\u30AA\u30EA\u30B8\u30F3\u304C\u5FC5\u8981

Nuxt 3 \u306E useFetch\u3001$fetch \u306F\u7D14\u7C8B\u306A\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u51E6\u7406\u3067\u306A\u3044\uFF08\u30B5\u30FC\u30D0\u30FC\u5074\u3067\u5185\u90E8\u7684\u306B\u51E6\u7406\u3055\u308C\u308B\uFF09\u5834\u5408\u304C\u3042\u308B\u3053\u3068\u304C\u539F\u56E0 https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch

\u5834\u5408\u306B\u3088\u3063\u3066\u306F\uFF08$fetch \u3067\u306F\u306A\u304F\uFF09 fetch \u3092\u4F7F\u3046\u3053\u3068\u3082\u691C\u8A0E\u3059\u308B\u3053\u3068
`,title:"Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09",level:1,content:`# Vue + Vue Router \u3068 Nuxt 3 \u306E\u6BD4\u8F03\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09

\u4FBF\u5229\u3060\u304C\u7D20\u6734\u306B Fetch API \u3092\u4F7F\u3046\u5834\u5408\u3068\u610F\u56F3\u3057\u306A\u3044\u6319\u52D5\u306E\u969B\u304C\u751F\u3058\u308B\u5834\u5408\u304C\u3042\u308B

- \u540C\u4E00\u30AA\u30EA\u30B8\u30F3\uFF08\u4F8B\uFF1A\`http://localhost:3000\`\uFF09\u3067\u3042\u3063\u3066\u3082\u3001\u30AA\u30EA\u30B8\u30F3\u3092\u542B\u3081\u305F url \u3067\u53D6\u5F97\u5148\u3092\u6307\u5B9A\u3057\u306A\u3051\u308C\u3070\u3044\u3051\u306A\u3044\u5834\u5408\u304C\u3042\u308B
  - server \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u63D0\u4F9B\u3059\u308B API \u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306F\u30AA\u30EA\u30B8\u30F3\u7701\u7565\u53EF\u80FD
  - \u4E0A\u8A18\u4EE5\u5916\u306E\u30B1\u30FC\u30B9\u3001\u305F\u3068\u3048\u3070\u30A2\u30BB\u30C3\u30C8\uFF08public \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u63D0\u4F9B\u3059\u308B\u9759\u7684\u30D5\u30A1\u30A4\u30EB\uFF09\u306F\u30AA\u30EA\u30B8\u30F3\u304C\u5FC5\u8981

Nuxt 3 \u306E useFetch\u3001$fetch \u306F\u7D14\u7C8B\u306A\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u51E6\u7406\u3067\u306A\u3044\uFF08\u30B5\u30FC\u30D0\u30FC\u5074\u3067\u5185\u90E8\u7684\u306B\u51E6\u7406\u3055\u308C\u308B\uFF09\u5834\u5408\u304C\u3042\u308B\u3053\u3068\u304C\u539F\u56E0 https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch

\u5834\u5408\u306B\u3088\u3063\u3066\u306F\uFF08$fetch \u3067\u306F\u306A\u304F\uFF09 fetch \u3092\u4F7F\u3046\u3053\u3068\u3082\u691C\u8A0E\u3059\u308B\u3053\u3068`,frontmatter:{},index:68,start:2227,end:2240,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:m_,meta:{slide:{raw:`
# \u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9

Vue \u56FA\u6709\u306E\u8A18\u6CD5\u306B\u3064\u3044\u3066\u306E\u516C\u5F0F\u306A\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9

- \u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9\u306B\u66F8\u3044\u3066\u3042\u308B\u3053\u3068\u3092\u5B88\u3089\u306A\u304F\u3066\u3082\u3001\u52D5\u304F Vue \u306E\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u3053\u3068\u306F\u3067\u304D\u308B
- \u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9\u306B\u66F8\u3044\u3066\u3042\u308B\u3053\u3068\u3092\u5B88\u308B\u3068\u3001\u4E8B\u524D\u306B\u8D77\u3053\u308A\u3046\u308B\u554F\u984C\u306B\u5BFE\u51E6\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B
- [eslint-plugin-vue](https://eslint.vuejs.org/)\u3092\u4F7F\u3046\u3068\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9\u306B\u9055\u53CD\u3057\u3066\u3044\u308B\u304B\u9759\u7684\u306B\u30B3\u30FC\u30C9\u3092\u89E3\u6790\u30FB\u4FEE\u6B63\u3067\u304D\u308B

[\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9](https://v3.ja.vuejs.org/style-guide/)
`,title:"\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9",level:1,content:`# \u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9

Vue \u56FA\u6709\u306E\u8A18\u6CD5\u306B\u3064\u3044\u3066\u306E\u516C\u5F0F\u306A\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9

- \u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9\u306B\u66F8\u3044\u3066\u3042\u308B\u3053\u3068\u3092\u5B88\u3089\u306A\u304F\u3066\u3082\u3001\u52D5\u304F Vue \u306E\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u3053\u3068\u306F\u3067\u304D\u308B
- \u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9\u306B\u66F8\u3044\u3066\u3042\u308B\u3053\u3068\u3092\u5B88\u308B\u3068\u3001\u4E8B\u524D\u306B\u8D77\u3053\u308A\u3046\u308B\u554F\u984C\u306B\u5BFE\u51E6\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B
- [eslint-plugin-vue](https://eslint.vuejs.org/)\u3092\u4F7F\u3046\u3068\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9\u306B\u9055\u53CD\u3057\u3066\u3044\u308B\u304B\u9759\u7684\u306B\u30B3\u30FC\u30C9\u3092\u89E3\u6790\u30FB\u4FEE\u6B63\u3067\u304D\u308B

[\u30B9\u30BF\u30A4\u30EB\u30AC\u30A4\u30C9](https://v3.ja.vuejs.org/style-guide/)`,frontmatter:{},index:69,start:2241,end:2252,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:F_,meta:{slide:{raw:`
# Vue 3 \u3068 Nuxt 3 \u306E\u8AAC\u660E\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01

\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F

\u4EE5\u4E0B\u3092\u5B66\u3093\u3067\u304D\u305F

- Vue \u306E\u57FA\u672C\u7684\u306A\u66F8\u304D\u65B9
- Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F
- Nuxt \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F

Nuxt 3 \u3092\u4F7F\u3063\u3066\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3064\u304F\u3063\u3066\u3044\u304F\u6E96\u5099\u304C\u3067\u304D\u305F

\u696D\u52D9\u30FB\u8DA3\u5473\u3067\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u767A\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046\uFF01

\u5B66\u7FD2\u306E\u76EE\u5B89

- \u7406\u89E3\u3057\u3066\u3044\u308B\u3053\u3068
- \u66F8\u3051\u308B\u3053\u3068

\u81EA\u4FE1\u304C\u306A\u3044\u7B87\u6240\u306F\u5FA9\u7FD2\u30FB\u8CEA\u554F\u3057\u307E\u3057\u3087\u3046\uFF01
`,title:"Vue 3 \u3068 Nuxt 3 \u306E\u8AAC\u660E\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01",level:1,content:`# Vue 3 \u3068 Nuxt 3 \u306E\u8AAC\u660E\u306F\u3053\u308C\u3067\u4EE5\u4E0A\uFF01

\u304A\u3064\u304B\u308C\u3055\u307E\u3067\u3057\u305F

\u4EE5\u4E0B\u3092\u5B66\u3093\u3067\u304D\u305F

- Vue \u306E\u57FA\u672C\u7684\u306A\u66F8\u304D\u65B9
- Vue \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F
- Nuxt \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30B3\u30FC\u30C9\u3092\u8AAD\u3080\u30FB\u66F8\u304F

Nuxt 3 \u3092\u4F7F\u3063\u3066\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u3064\u304F\u3063\u3066\u3044\u304F\u6E96\u5099\u304C\u3067\u304D\u305F

\u696D\u52D9\u30FB\u8DA3\u5473\u3067\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u767A\u3057\u3066\u3044\u304D\u307E\u3057\u3087\u3046\uFF01

\u5B66\u7FD2\u306E\u76EE\u5B89

- \u7406\u89E3\u3057\u3066\u3044\u308B\u3053\u3068
- \u66F8\u3051\u308B\u3053\u3068

\u81EA\u4FE1\u304C\u306A\u3044\u7B87\u6240\u306F\u5FA9\u7FD2\u30FB\u8CEA\u554F\u3057\u307E\u3057\u3087\u3046\uFF01`,frontmatter:{},index:70,start:2253,end:2275,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:k_,meta:{slide:{raw:`
# \u8AB2\u984C

- \u30EC\u30D9\u30EB 1 \uFF5E 3 \u306E 3 \u3064\u3042\u308B
- 1 \u304B\u3089\u9806\u756A\u306B\u53D6\u308A\u7D44\u3093\u3067\u3082\u3089\u3046
- 16 \u6642\u306B\u89E3\u8AAC\u3059\u308B
`,title:"\u8AB2\u984C",level:1,content:`# \u8AB2\u984C

- \u30EC\u30D9\u30EB 1 \uFF5E 3 \u306E 3 \u3064\u3042\u308B
- 1 \u304B\u3089\u9806\u756A\u306B\u53D6\u308A\u7D44\u3093\u3067\u3082\u3089\u3046
- 16 \u6642\u306B\u89E3\u8AAC\u3059\u308B`,frontmatter:{},index:71,start:2276,end:2283,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:S_,meta:{slide:{raw:`
# \u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 1\uFF09

\u554F\u984C\uFF1Ahttps://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch \u3092\u4F7F\u3063\u3066 http://localhost:3000/data.json \u304B\u3089\u679C\u7269\u306E\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3057\u3066\u304F\u3060\u3055\u3044
2. \u679C\u7269\u3092\u9806\u5E8F\u306A\u3057\u30EA\u30B9\u30C8\u3067\u8868\u793A\u3057\u3066\u304F\u3060\u3055\u3044 https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul
`,title:"\u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 1\uFF09",level:1,content:`# \u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 1\uFF09

\u554F\u984C\uFF1Ahttps://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch \u3092\u4F7F\u3063\u3066 http://localhost:3000/data.json \u304B\u3089\u679C\u7269\u306E\u30EA\u30B9\u30C8\u3092\u53D6\u5F97\u3057\u3066\u304F\u3060\u3055\u3044
2. \u679C\u7269\u3092\u9806\u5E8F\u306A\u3057\u30EA\u30B9\u30C8\u3067\u8868\u793A\u3057\u3066\u304F\u3060\u3055\u3044 https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul`,frontmatter:{},index:72,start:2284,end:2292,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:T_,meta:{slide:{raw:`
# \u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 2\uFF09

\u554F\u984C\uFF1Ahttps://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

\u30B3\u30FC\u30C9\u4E0A\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u8AAD\u307F\u306A\u304C\u3089\u3001\u672A\u5B8C\u6210\u306E\u30A2\u30D7\u30EA\u3092\u5B8C\u6210\u3055\u305B\u3066\u304F\u3060\u3055\u3044
`,title:"\u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 2\uFF09",level:1,content:`# \u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 2\uFF09

\u554F\u984C\uFF1Ahttps://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

\u30B3\u30FC\u30C9\u4E0A\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u8AAD\u307F\u306A\u304C\u3089\u3001\u672A\u5B8C\u6210\u306E\u30A2\u30D7\u30EA\u3092\u5B8C\u6210\u3055\u305B\u3066\u304F\u3060\u3055\u3044`,frontmatter:{},index:73,start:2293,end:2300,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:R_,meta:{slide:{raw:`
# \u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 3\uFF09

\u554F\u984C\uFF1Ahttps://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

\u30B3\u30FC\u30C9\u4E0A\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u8AAD\u307F\u306A\u304C\u3089\u3001\u672A\u5B8C\u6210\u306E\u30A2\u30D7\u30EA\u3092\u5B8C\u6210\u3055\u305B\u3066\u304F\u3060\u3055\u3044
`,title:"\u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 3\uFF09",level:1,content:`# \u8AB2\u984C\uFF08\u30EC\u30D9\u30EB 3\uFF09

\u554F\u984C\uFF1Ahttps://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

\u30B3\u30FC\u30C9\u4E0A\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u8AAD\u307F\u306A\u304C\u3089\u3001\u672A\u5B8C\u6210\u306E\u30A2\u30D7\u30EA\u3092\u5B8C\u6210\u3055\u305B\u3066\u304F\u3060\u3055\u3044`,frontmatter:{},index:74,start:2301,end:2308,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",component:LA,meta:{layout:"end"}}];const Rs=I_,z_=[{name:"play",path:"/",component:xA,children:[...Rs]},{name:"print",path:"/print",component:SA},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>co(()=>import("./Presenter.1a47ffb4.js"),["assets/Presenter.1a47ffb4.js","assets/Presenter.954a6bd7.css","assets/DrawingControls.6acfe06b.js"]),beforeEnter:e=>{if(!Fl.remote||Fl.remote===e.query.password)return!0;if(Fl.remote&&e.query.password===void 0){const l=prompt("Enter password");if(Fl.remote===l)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],he=f3({history:$m("/vue-3-practices/"),routes:z_});function H_(e,l,{mode:o="replace"}={}){return w({get(){const t=he.currentRoute.value.query[e];return t==null?l!=null?l:null:Array.isArray(t)?t.filter(Boolean):t},set(t){Ws(()=>{he[D(o)]({query:Qs(gs({},he.currentRoute.value.query),{[e]:t})})})}})}const j8=U(0);Ws(()=>{he.afterEach(async()=>{await Ws(),j8.value+=1})});const Ge=w(()=>he.currentRoute.value),ma=w(()=>Ge.value.query.print!==void 0),U_=w(()=>Ge.value.query.print==="clicks"),Ue=w(()=>Ge.value.query.embedded!==void 0),je=w(()=>Ge.value.path.startsWith("/presenter")),To=w(()=>ma.value&&!U_.value),_r=w(()=>Ge.value.query.password),q_=w(()=>!je.value&&(!Es.remote||_r.value===Es.remote)),dp=H_("clicks","0"),V8=w(()=>Rs.length-1),W_=w(()=>Ge.value.path),Is=w(()=>parseInt(W_.value.split(/\//g).slice(-1)[0])||1);w(()=>ut(Is.value));const ue=w(()=>Rs.find(e=>e.path===`${Is.value}`));w(()=>{var e,l,o;return(o=(l=(e=ue.value)==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:o.id});w(()=>{var e,l;return(l=(e=ue.value)==null?void 0:e.meta)==null?void 0:l.layout});const Lt=w(()=>Rs.find(e=>e.path===`${Math.min(Rs.length,Is.value+1)}`)),K_=w(()=>{var e,l;return j8.value,((l=(e=ue.value)==null?void 0:e.meta)==null?void 0:l.__clicksElements)||[]}),Se=w({get(){if(To.value)return 99999;let e=+(dp.value||0);return isNaN(e)&&(e=0),e},set(e){dp.value=e.toString()}}),Wn=w(()=>{var e,l,o;return+((o=(l=(e=ue.value)==null?void 0:e.meta)==null?void 0:l.clicks)!=null?o:K_.value.length)}),Y_=w(()=>Is.value<Rs.length-1||Se.value<Wn.value),Z_=w(()=>Is.value>1||Se.value>0),J_=w(()=>Rs.filter(e=>{var l,o;return(o=(l=e.meta)==null?void 0:l.slide)==null?void 0:o.title}).reduce((e,l)=>(ha(e,l),e),[])),X_=w(()=>Ba(J_.value,ue.value));w(()=>Aa(X_.value));function il(){Wn.value<=Se.value?Qo():Se.value+=1}async function yl(){Se.value<=0?await sn():Se.value-=1}function ut(e){return je.value?`/presenter/${e}`:`/${e}`}function Qo(){const e=Math.min(Rs.length,Is.value+1);return no(e)}async function sn(e=!0){const l=Math.max(1,Is.value-1);await no(l),e&&Wn.value&&he.replace({query:Qs(gs({},Ge.value.query),{clicks:Wn.value})})}function no(e,l){return he.push({path:ut(e),query:Qs(gs({},Ge.value.query),{clicks:l})})}function G_(e){const l=U(0),{direction:o,distanceX:t,distanceY:r}=rm(e,{onSwipeStart(a){a.pointerType==="touch"&&(Jo.value||(l.value=ir()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!l.value||Jo.value)return;const c=Math.abs(t.value),p=Math.abs(r.value);c/window.innerWidth>.3||c>100?o.value===Ke.LEFT?il():yl():(p/window.innerHeight>.4||p>200)&&(o.value===Ke.DOWN?sn():Qo())}})}async function Er(){const{saveAs:e}=await co(()=>import("./FileSaver.min.477930e3.js").then(function(l){return l.F}),[]);e(Xi(Es.download)?Es.download:Es.exportFilename?`${Es.exportFilename}.pdf`:"/vue-3-practices/slidev-exported.pdf",`${Es.title}.pdf`)}async function Q_(e){var l,o;if(e==null){const t=(o=(l=ue.value)==null?void 0:l.meta)==null?void 0:o.slide;if(!(t!=null&&t.filepath))return!1;e=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ha(e,l,o=1){var r,a,c,p,i;const t=(a=(r=l.meta)==null?void 0:r.slide)==null?void 0:a.level;t&&t>o&&e.length>0?ha(e[e.length-1].children,l,o+1):e.push({children:[],level:o,path:l.path,hideInToc:Boolean((c=l.meta)==null?void 0:c.hideInToc),title:(i=(p=l.meta)==null?void 0:p.slide)==null?void 0:i.title})}function Ba(e,l,o=!1,t){return e.map(r=>{const a=Qs(gs({},r),{active:r.path===(l==null?void 0:l.path),hasActiveParent:o});return a.children.length>0&&(a.children=Ba(a.children,l,a.active||a.hasActiveParent,a)),t&&(a.active||a.activeParent)&&(t.activeParent=!0),a})}function Aa(e,l=1){return e.filter(o=>!o.hideInToc).map(o=>Qs(gs({},o),{children:Aa(o.children,l+1)}))}function sE(){const e=Es.titleTemplate.replace("%s",Es.title||"Slidev");Md({title:e}),zd(`${e} - shared`),Wd(`${e} - drawings`);function l(){je.value&&(Dc("page",+Is.value),Dc("clicks",Se.value))}he.afterEach(l),is(Se,l),Hd(o=>{(+o.page!=+Is.value||Se.value!==o.clicks)&&he.replace({path:ut(o.page),query:Qs(gs({},he.currentRoute.value.query),{clicks:o.clicks||0})})})}const eE=bs({__name:"App",setup(e){return x($),sE(),(l,o)=>{const t=Tn("RouterView"),r=Tn("StarportCarrier");return v(),K(Cs,null,[Z(t),Z(r)],64)}}});function Tt(e){return e!==null&&typeof e=="object"}function Fr(e,l,o=".",t){if(!Tt(l))return Fr(e,{},o,t);const r=Object.assign({},l);for(const a in e){if(a==="__proto__"||a==="constructor")continue;const c=e[a];c!=null&&(t&&t(r,a,c,o)||(Array.isArray(c)&&Array.isArray(r[a])?r[a]=[...c,...r[a]]:Tt(c)&&Tt(r[a])?r[a]=Fr(c,r[a],(o?`${o}.`:"")+a.toString(),t):r[a]=c))}return r}function lE(e){return(...l)=>l.reduce((o,t)=>Fr(o,t,"",e),{})}const oE=lE(),R8=1/60*1e3,nE=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),I8=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(nE()),R8);function tE(e){let l=[],o=[],t=0,r=!1,a=!1;const c=new WeakSet,p={schedule:(i,y=!1,u=!1)=>{const f=u&&r,d=f?l:o;return y&&c.add(i),d.indexOf(i)===-1&&(d.push(i),f&&r&&(t=l.length)),i},cancel:i=>{const y=o.indexOf(i);y!==-1&&o.splice(y,1),c.delete(i)},process:i=>{if(r){a=!0;return}if(r=!0,[l,o]=[o,l],o.length=0,t=l.length,t)for(let y=0;y<t;y++){const u=l[y];u(i),c.has(u)&&(p.schedule(u),e())}r=!1,a&&(a=!1,p.process(i))}};return p}const rE=40;let br=!0,en=!1,xr=!1;const Gl={delta:0,timestamp:0},an=["read","update","preRender","render","postRender"],dt=an.reduce((e,l)=>(e[l]=tE(()=>en=!0),e),{}),fp=an.reduce((e,l)=>{const o=dt[l];return e[l]=(t,r=!1,a=!1)=>(en||cE(),o.schedule(t,r,a)),e},{});an.reduce((e,l)=>(e[l]=dt[l].cancel,e),{});an.reduce((e,l)=>(e[l]=()=>dt[l].process(Gl),e),{});const aE=e=>dt[e].process(Gl),z8=e=>{en=!1,Gl.delta=br?R8:Math.max(Math.min(e-Gl.timestamp,rE),1),Gl.timestamp=e,xr=!0,an.forEach(aE),xr=!1,en&&(br=!1,I8(z8))},cE=()=>{en=!0,br=!0,xr||I8(z8)},pE=()=>Gl;function H8(e,l){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o}var iE=function(){},mp=function(){};const kr=(e,l,o)=>Math.min(Math.max(o,e),l),Nt=.001,yE=.01,hp=10,uE=.05,dE=1;function fE({duration:e=800,bounce:l=.25,velocity:o=0,mass:t=1}){let r,a;iE(e<=hp*1e3);let c=1-l;c=kr(uE,dE,c),e=kr(yE,hp,e/1e3),c<1?(r=y=>{const u=y*c,f=u*e,d=u-o,m=wr(y,c),B=Math.exp(-f);return Nt-d/m*B},a=y=>{const f=y*c*e,d=f*o+o,m=Math.pow(c,2)*Math.pow(y,2)*e,B=Math.exp(-f),C=wr(Math.pow(y,2),c);return(-r(y)+Nt>0?-1:1)*((d-m)*B)/C}):(r=y=>{const u=Math.exp(-y*e),f=(y-o)*e+1;return-Nt+u*f},a=y=>{const u=Math.exp(-y*e),f=(o-y)*(e*e);return u*f});const p=5/e,i=hE(r,a,p);if(e=e*1e3,isNaN(i))return{stiffness:100,damping:10,duration:e};{const y=Math.pow(i,2)*t;return{stiffness:y,damping:c*2*Math.sqrt(t*y),duration:e}}}const mE=12;function hE(e,l,o){let t=o;for(let r=1;r<mE;r++)t=t-e(t)/l(t);return t}function wr(e,l){return e*Math.sqrt(1-l*l)}const BE=["duration","bounce"],AE=["stiffness","damping","mass"];function Bp(e,l){return l.some(o=>e[o]!==void 0)}function vE(e){let l=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Bp(e,AE)&&Bp(e,BE)){const o=fE(e);l=Object.assign(Object.assign(Object.assign({},l),o),{velocity:0,mass:1}),l.isResolvedFromDuration=!0}return l}function va(e){var{from:l=0,to:o=1,restSpeed:t=2,restDelta:r}=e,a=H8(e,["from","to","restSpeed","restDelta"]);const c={done:!1,value:l};let{stiffness:p,damping:i,mass:y,velocity:u,duration:f,isResolvedFromDuration:d}=vE(a),m=Ap,B=Ap;function C(){const g=u?-(u/1e3):0,b=o-l,E=i/(2*Math.sqrt(p*y)),F=Math.sqrt(p/y)/1e3;if(r===void 0&&(r=Math.min(Math.abs(o-l)/100,.4)),E<1){const k=wr(F,E);m=I=>{const T=Math.exp(-E*F*I);return o-T*((g+E*F*b)/k*Math.sin(k*I)+b*Math.cos(k*I))},B=I=>{const T=Math.exp(-E*F*I);return E*F*T*(Math.sin(k*I)*(g+E*F*b)/k+b*Math.cos(k*I))-T*(Math.cos(k*I)*(g+E*F*b)-k*b*Math.sin(k*I))}}else if(E===1)m=k=>o-Math.exp(-F*k)*(b+(g+F*b)*k);else{const k=F*Math.sqrt(E*E-1);m=I=>{const T=Math.exp(-E*F*I),J=Math.min(k*I,300);return o-T*((g+E*F*b)*Math.sinh(J)+k*b*Math.cosh(J))/k}}}return C(),{next:g=>{const b=m(g);if(d)c.done=g>=f;else{const E=B(g)*1e3,F=Math.abs(E)<=t,k=Math.abs(o-b)<=r;c.done=F&&k}return c.value=c.done?o:b,c},flipTarget:()=>{u=-u,[l,o]=[o,l],C()}}}va.needsInterpolation=(e,l)=>typeof e=="string"||typeof l=="string";const Ap=e=>0,U8=(e,l,o)=>{const t=l-e;return t===0?1:(o-e)/t},Da=(e,l,o)=>-o*e+o*l+e,q8=(e,l)=>o=>Math.max(Math.min(o,l),e),No=e=>e%1?Number(e.toFixed(5)):e,Kn=/(-)?([\d]*\.?[\d])+/g,$r=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,DE=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function cn(e){return typeof e=="string"}const ft={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},W8=Object.assign(Object.assign({},ft),{transform:q8(0,1)});Object.assign(Object.assign({},ft),{default:1});const gE=e=>({test:l=>cn(l)&&l.endsWith(e)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${e}`}),jo=gE("%");Object.assign(Object.assign({},jo),{parse:e=>jo.parse(e)/100,transform:e=>jo.transform(e*100)});const ga=(e,l)=>o=>Boolean(cn(o)&&DE.test(o)&&o.startsWith(e)||l&&Object.prototype.hasOwnProperty.call(o,l)),K8=(e,l,o)=>t=>{if(!cn(t))return t;const[r,a,c,p]=t.match(Kn);return{[e]:parseFloat(r),[l]:parseFloat(a),[o]:parseFloat(c),alpha:p!==void 0?parseFloat(p):1}},xl={test:ga("hsl","hue"),parse:K8("hue","saturation","lightness"),transform:({hue:e,saturation:l,lightness:o,alpha:t=1})=>"hsla("+Math.round(e)+", "+jo.transform(No(l))+", "+jo.transform(No(o))+", "+No(W8.transform(t))+")"},CE=q8(0,255),jt=Object.assign(Object.assign({},ft),{transform:e=>Math.round(CE(e))}),tl={test:ga("rgb","red"),parse:K8("red","green","blue"),transform:({red:e,green:l,blue:o,alpha:t=1})=>"rgba("+jt.transform(e)+", "+jt.transform(l)+", "+jt.transform(o)+", "+No(W8.transform(t))+")"};function _E(e){let l="",o="",t="",r="";return e.length>5?(l=e.substr(1,2),o=e.substr(3,2),t=e.substr(5,2),r=e.substr(7,2)):(l=e.substr(1,1),o=e.substr(2,1),t=e.substr(3,1),r=e.substr(4,1),l+=l,o+=o,t+=t,r+=r),{red:parseInt(l,16),green:parseInt(o,16),blue:parseInt(t,16),alpha:r?parseInt(r,16)/255:1}}const Or={test:ga("#"),parse:_E,transform:tl.transform},mt={test:e=>tl.test(e)||Or.test(e)||xl.test(e),parse:e=>tl.test(e)?tl.parse(e):xl.test(e)?xl.parse(e):Or.parse(e),transform:e=>cn(e)?e:e.hasOwnProperty("red")?tl.transform(e):xl.transform(e)},Y8="${c}",Z8="${n}";function EE(e){var l,o,t,r;return isNaN(e)&&cn(e)&&((o=(l=e.match(Kn))===null||l===void 0?void 0:l.length)!==null&&o!==void 0?o:0)+((r=(t=e.match($r))===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:0)>0}function J8(e){typeof e=="number"&&(e=`${e}`);const l=[];let o=0;const t=e.match($r);t&&(o=t.length,e=e.replace($r,Y8),l.push(...t.map(mt.parse)));const r=e.match(Kn);return r&&(e=e.replace(Kn,Z8),l.push(...r.map(ft.parse))),{values:l,numColors:o,tokenised:e}}function X8(e){return J8(e).values}function G8(e){const{values:l,numColors:o,tokenised:t}=J8(e),r=l.length;return a=>{let c=t;for(let p=0;p<r;p++)c=c.replace(p<o?Y8:Z8,p<o?mt.transform(a[p]):No(a[p]));return c}}const FE=e=>typeof e=="number"?0:e;function bE(e){const l=X8(e);return G8(e)(l.map(FE))}const Q8={test:EE,parse:X8,createTransformer:G8,getAnimatableNone:bE};function Vt(e,l,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(l-e)*6*o:o<1/2?l:o<2/3?e+(l-e)*(2/3-o)*6:e}function vp({hue:e,saturation:l,lightness:o,alpha:t}){e/=360,l/=100,o/=100;let r=0,a=0,c=0;if(!l)r=a=c=o;else{const p=o<.5?o*(1+l):o+l-o*l,i=2*o-p;r=Vt(i,p,e+1/3),a=Vt(i,p,e),c=Vt(i,p,e-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:t}}const xE=(e,l,o)=>{const t=e*e,r=l*l;return Math.sqrt(Math.max(0,o*(r-t)+t))},kE=[Or,tl,xl],Dp=e=>kE.find(l=>l.test(e)),sy=(e,l)=>{let o=Dp(e),t=Dp(l),r=o.parse(e),a=t.parse(l);o===xl&&(r=vp(r),o=tl),t===xl&&(a=vp(a),t=tl);const c=Object.assign({},r);return p=>{for(const i in c)i!=="alpha"&&(c[i]=xE(r[i],a[i],p));return c.alpha=Da(r.alpha,a.alpha,p),o.transform(c)}},wE=e=>typeof e=="number",$E=(e,l)=>o=>l(e(o)),ey=(...e)=>e.reduce($E);function ly(e,l){return wE(e)?o=>Da(e,l,o):mt.test(e)?sy(e,l):ny(e,l)}const oy=(e,l)=>{const o=[...e],t=o.length,r=e.map((a,c)=>ly(a,l[c]));return a=>{for(let c=0;c<t;c++)o[c]=r[c](a);return o}},OE=(e,l)=>{const o=Object.assign(Object.assign({},e),l),t={};for(const r in o)e[r]!==void 0&&l[r]!==void 0&&(t[r]=ly(e[r],l[r]));return r=>{for(const a in t)o[a]=t[a](r);return o}};function gp(e){const l=Q8.parse(e),o=l.length;let t=0,r=0,a=0;for(let c=0;c<o;c++)t||typeof l[c]=="number"?t++:l[c].hue!==void 0?a++:r++;return{parsed:l,numNumbers:t,numRGB:r,numHSL:a}}const ny=(e,l)=>{const o=Q8.createTransformer(l),t=gp(e),r=gp(l);return t.numHSL===r.numHSL&&t.numRGB===r.numRGB&&t.numNumbers>=r.numNumbers?ey(oy(t.parsed,r.parsed),o):c=>`${c>0?l:e}`},SE=(e,l)=>o=>Da(e,l,o);function ME(e){if(typeof e=="number")return SE;if(typeof e=="string")return mt.test(e)?sy:ny;if(Array.isArray(e))return oy;if(typeof e=="object")return OE}function PE(e,l,o){const t=[],r=o||ME(e[0]),a=e.length-1;for(let c=0;c<a;c++){let p=r(e[c],e[c+1]);if(l){const i=Array.isArray(l)?l[c]:l;p=ey(i,p)}t.push(p)}return t}function LE([e,l],[o]){return t=>o(U8(e,l,t))}function TE(e,l){const o=e.length,t=o-1;return r=>{let a=0,c=!1;if(r<=e[0]?c=!0:r>=e[t]&&(a=t-1,c=!0),!c){let i=1;for(;i<o&&!(e[i]>r||i===t);i++);a=i-1}const p=U8(e[a],e[a+1],r);return l[a](p)}}function ty(e,l,{clamp:o=!0,ease:t,mixer:r}={}){const a=e.length;mp(a===l.length),mp(!t||!Array.isArray(t)||t.length===a-1),e[0]>e[a-1]&&(e=[].concat(e),l=[].concat(l),e.reverse(),l.reverse());const c=PE(l,t,r),p=a===2?LE(e,c):TE(e,c);return o?i=>p(kr(e[0],e[a-1],i)):p}const ht=e=>l=>1-e(1-l),Ca=e=>l=>l<=.5?e(2*l)/2:(2-e(2*(1-l)))/2,NE=e=>l=>Math.pow(l,e),ry=e=>l=>l*l*((e+1)*l-e),jE=e=>{const l=ry(e);return o=>(o*=2)<1?.5*l(o):.5*(2-Math.pow(2,-10*(o-1)))},ay=1.525,VE=4/11,RE=8/11,IE=9/10,cy=e=>e,_a=NE(2),zE=ht(_a),py=Ca(_a),iy=e=>1-Math.sin(Math.acos(e)),yy=ht(iy),HE=Ca(yy),Ea=ry(ay),UE=ht(Ea),qE=Ca(Ea),WE=jE(ay),KE=4356/361,YE=35442/1805,ZE=16061/1805,Yn=e=>{if(e===1||e===0)return e;const l=e*e;return e<VE?7.5625*l:e<RE?9.075*l-9.9*e+3.4:e<IE?KE*l-YE*e+ZE:10.8*e*e-20.52*e+10.72},JE=ht(Yn),XE=e=>e<.5?.5*(1-Yn(1-e*2)):.5*Yn(e*2-1)+.5;function GE(e,l){return e.map(()=>l||py).splice(0,e.length-1)}function QE(e){const l=e.length;return e.map((o,t)=>t!==0?t/(l-1):0)}function s6(e,l){return e.map(o=>o*l)}function On({from:e=0,to:l=1,ease:o,offset:t,duration:r=300}){const a={done:!1,value:e},c=Array.isArray(l)?l:[e,l],p=s6(t&&t.length===c.length?t:QE(c),r);function i(){return ty(p,c,{ease:Array.isArray(o)?o:GE(c,o)})}let y=i();return{next:u=>(a.value=y(u),a.done=u>=r,a),flipTarget:()=>{c.reverse(),y=i()}}}function e6({velocity:e=0,from:l=0,power:o=.8,timeConstant:t=350,restDelta:r=.5,modifyTarget:a}){const c={done:!1,value:l};let p=o*e;const i=l+p,y=a===void 0?i:a(i);return y!==i&&(p=y-l),{next:u=>{const f=-p*Math.exp(-u/t);return c.done=!(f>r||f<-r),c.value=c.done?y:y+f,c},flipTarget:()=>{}}}const Cp={keyframes:On,spring:va,decay:e6};function l6(e){if(Array.isArray(e.to))return On;if(Cp[e.type])return Cp[e.type];const l=new Set(Object.keys(e));return l.has("ease")||l.has("duration")&&!l.has("dampingRatio")?On:l.has("dampingRatio")||l.has("stiffness")||l.has("mass")||l.has("damping")||l.has("restSpeed")||l.has("restDelta")?va:On}const uy=1/60*1e3,o6=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),dy=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(o6()),uy);function n6(e){let l=[],o=[],t=0,r=!1,a=!1;const c=new WeakSet,p={schedule:(i,y=!1,u=!1)=>{const f=u&&r,d=f?l:o;return y&&c.add(i),d.indexOf(i)===-1&&(d.push(i),f&&r&&(t=l.length)),i},cancel:i=>{const y=o.indexOf(i);y!==-1&&o.splice(y,1),c.delete(i)},process:i=>{if(r){a=!0;return}if(r=!0,[l,o]=[o,l],o.length=0,t=l.length,t)for(let y=0;y<t;y++){const u=l[y];u(i),c.has(u)&&(p.schedule(u),e())}r=!1,a&&(a=!1,p.process(i))}};return p}const t6=40;let Sr=!0,ln=!1,Mr=!1;const Ql={delta:0,timestamp:0},pn=["read","update","preRender","render","postRender"],Bt=pn.reduce((e,l)=>(e[l]=n6(()=>ln=!0),e),{}),r6=pn.reduce((e,l)=>{const o=Bt[l];return e[l]=(t,r=!1,a=!1)=>(ln||p6(),o.schedule(t,r,a)),e},{}),a6=pn.reduce((e,l)=>(e[l]=Bt[l].cancel,e),{});pn.reduce((e,l)=>(e[l]=()=>Bt[l].process(Ql),e),{});const c6=e=>Bt[e].process(Ql),fy=e=>{ln=!1,Ql.delta=Sr?uy:Math.max(Math.min(e-Ql.timestamp,t6),1),Ql.timestamp=e,Mr=!0,pn.forEach(c6),Mr=!1,ln&&(Sr=!1,dy(fy))},p6=()=>{ln=!0,Sr=!0,Mr||dy(fy)},i6=()=>Ql;function my(e,l,o=0){return e-l-o}function y6(e,l,o=0,t=!0){return t?my(l+-e,l,o):l-(e-l)+o}function u6(e,l,o,t){return t?e>=l+o:e<=-o}const d6=e=>{const l=({delta:o})=>e(o);return{start:()=>r6.update(l,!0),stop:()=>a6.update(l)}};function hy(e){var l,o,{from:t,autoplay:r=!0,driver:a=d6,elapsed:c=0,repeat:p=0,repeatType:i="loop",repeatDelay:y=0,onPlay:u,onStop:f,onComplete:d,onRepeat:m,onUpdate:B}=e,C=H8(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:g}=C,b,E=0,F=C.duration,k,I=!1,T=!0,J;const as=l6(C);!((o=(l=as).needsInterpolation)===null||o===void 0)&&o.call(l,t,g)&&(J=ty([0,100],[t,g],{clamp:!1}),t=0,g=100);const us=as(Object.assign(Object.assign({},C),{from:t,to:g}));function ms(){E++,i==="reverse"?(T=E%2===0,c=y6(c,F,y,T)):(c=my(c,F,y),i==="mirror"&&us.flipTarget()),I=!1,m&&m()}function As(){b.stop(),d&&d()}function Ls(Ys){if(T||(Ys=-Ys),c+=Ys,!I){const xs=us.next(Math.max(0,c));k=xs.value,J&&(k=J(k)),I=T?xs.done:c<=0}B==null||B(k),I&&(E===0&&(F!=null||(F=c)),E<p?u6(c,F,y,T)&&ms():As())}function js(){u==null||u(),b=a(Ls),b.start()}return r&&js(),{stop:()=>{f==null||f(),b.stop()}}}function By(e,l){return l?e*(1e3/l):0}function f6({from:e=0,velocity:l=0,min:o,max:t,power:r=.8,timeConstant:a=750,bounceStiffness:c=500,bounceDamping:p=10,restDelta:i=1,modifyTarget:y,driver:u,onUpdate:f,onComplete:d,onStop:m}){let B;function C(F){return o!==void 0&&F<o||t!==void 0&&F>t}function g(F){return o===void 0?t:t===void 0||Math.abs(o-F)<Math.abs(t-F)?o:t}function b(F){B==null||B.stop(),B=hy(Object.assign(Object.assign({},F),{driver:u,onUpdate:k=>{var I;f==null||f(k),(I=F.onUpdate)===null||I===void 0||I.call(F,k)},onComplete:d,onStop:m}))}function E(F){b(Object.assign({type:"spring",stiffness:c,damping:p,restDelta:i},F))}if(C(e))E({from:e,velocity:l,to:g(e)});else{let F=r*l+e;typeof y!="undefined"&&(F=y(F));const k=g(F),I=k===o?-1:1;let T,J;const as=us=>{T=J,J=us,l=By(us-T,i6().delta),(I===1&&us>k||I===-1&&us<k)&&E({from:us,to:k,velocity:l})};b({type:"decay",from:e,velocity:l,timeConstant:a,power:r,restDelta:i,modifyTarget:y,onUpdate:C(F)?as:void 0})}return{stop:()=>B==null?void 0:B.stop()}}const Ay=(e,l)=>1-3*l+3*e,vy=(e,l)=>3*l-6*e,Dy=e=>3*e,Zn=(e,l,o)=>((Ay(l,o)*e+vy(l,o))*e+Dy(l))*e,gy=(e,l,o)=>3*Ay(l,o)*e*e+2*vy(l,o)*e+Dy(l),m6=1e-7,h6=10;function B6(e,l,o,t,r){let a,c,p=0;do c=l+(o-l)/2,a=Zn(c,t,r)-e,a>0?o=c:l=c;while(Math.abs(a)>m6&&++p<h6);return c}const A6=8,v6=.001;function D6(e,l,o,t){for(let r=0;r<A6;++r){const a=gy(l,o,t);if(a===0)return l;l-=(Zn(l,o,t)-e)/a}return l}const Sn=11,Cn=1/(Sn-1);function g6(e,l,o,t){if(e===l&&o===t)return cy;const r=new Float32Array(Sn);for(let c=0;c<Sn;++c)r[c]=Zn(c*Cn,e,o);function a(c){let p=0,i=1;const y=Sn-1;for(;i!==y&&r[i]<=c;++i)p+=Cn;--i;const u=(c-r[i])/(r[i+1]-r[i]),f=p+u*Cn,d=gy(f,e,o);return d>=v6?D6(c,f,e,o):d===0?f:B6(c,p,p+Cn,e,o)}return c=>c===0||c===1?c:Zn(a(c),l,t)}const Cy=(e,l)=>o=>Math.max(Math.min(o,l),e),Vo=e=>e%1?Number(e.toFixed(5)):e,on=/(-)?([\d]*\.?[\d])+/g,Pr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,C6=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function yn(e){return typeof e=="string"}const un={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ro=Object.assign(Object.assign({},un),{transform:Cy(0,1)}),_n=Object.assign(Object.assign({},un),{default:1}),Fa=e=>({test:l=>yn(l)&&l.endsWith(e)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${e}`}),Bl=Fa("deg"),Io=Fa("%"),cs=Fa("px"),_p=Object.assign(Object.assign({},Io),{parse:e=>Io.parse(e)/100,transform:e=>Io.transform(e*100)}),ba=(e,l)=>o=>Boolean(yn(o)&&C6.test(o)&&o.startsWith(e)||l&&Object.prototype.hasOwnProperty.call(o,l)),_y=(e,l,o)=>t=>{if(!yn(t))return t;const[r,a,c,p]=t.match(on);return{[e]:parseFloat(r),[l]:parseFloat(a),[o]:parseFloat(c),alpha:p!==void 0?parseFloat(p):1}},En={test:ba("hsl","hue"),parse:_y("hue","saturation","lightness"),transform:({hue:e,saturation:l,lightness:o,alpha:t=1})=>"hsla("+Math.round(e)+", "+Io.transform(Vo(l))+", "+Io.transform(Vo(o))+", "+Vo(Ro.transform(t))+")"},_6=Cy(0,255),Rt=Object.assign(Object.assign({},un),{transform:e=>Math.round(_6(e))}),Fo={test:ba("rgb","red"),parse:_y("red","green","blue"),transform:({red:e,green:l,blue:o,alpha:t=1})=>"rgba("+Rt.transform(e)+", "+Rt.transform(l)+", "+Rt.transform(o)+", "+Vo(Ro.transform(t))+")"};function E6(e){let l="",o="",t="",r="";return e.length>5?(l=e.substr(1,2),o=e.substr(3,2),t=e.substr(5,2),r=e.substr(7,2)):(l=e.substr(1,1),o=e.substr(2,1),t=e.substr(3,1),r=e.substr(4,1),l+=l,o+=o,t+=t,r+=r),{red:parseInt(l,16),green:parseInt(o,16),blue:parseInt(t,16),alpha:r?parseInt(r,16)/255:1}}const Ep={test:ba("#"),parse:E6,transform:Fo.transform},De={test:e=>Fo.test(e)||Ep.test(e)||En.test(e),parse:e=>Fo.test(e)?Fo.parse(e):En.test(e)?En.parse(e):Ep.parse(e),transform:e=>yn(e)?e:e.hasOwnProperty("red")?Fo.transform(e):En.transform(e)},Ey="${c}",Fy="${n}";function F6(e){var l,o,t,r;return isNaN(e)&&yn(e)&&((o=(l=e.match(on))===null||l===void 0?void 0:l.length)!==null&&o!==void 0?o:0)+((r=(t=e.match(Pr))===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:0)>0}function by(e){typeof e=="number"&&(e=`${e}`);const l=[];let o=0;const t=e.match(Pr);t&&(o=t.length,e=e.replace(Pr,Ey),l.push(...t.map(De.parse)));const r=e.match(on);return r&&(e=e.replace(on,Fy),l.push(...r.map(un.parse))),{values:l,numColors:o,tokenised:e}}function xy(e){return by(e).values}function ky(e){const{values:l,numColors:o,tokenised:t}=by(e),r=l.length;return a=>{let c=t;for(let p=0;p<r;p++)c=c.replace(p<o?Ey:Fy,p<o?De.transform(a[p]):Vo(a[p]));return c}}const b6=e=>typeof e=="number"?0:e;function x6(e){const l=xy(e);return ky(e)(l.map(b6))}const xa={test:F6,parse:xy,createTransformer:ky,getAnimatableNone:x6},k6=new Set(["brightness","contrast","saturate","opacity"]);function w6(e){let[l,o]=e.slice(0,-1).split("(");if(l==="drop-shadow")return e;const[t]=o.match(on)||[];if(!t)return e;const r=o.replace(t,"");let a=k6.has(l)?1:0;return t!==o&&(a*=100),l+"("+a+r+")"}const $6=/([a-z-]*)\(.*?\)/g,Lr=Object.assign(Object.assign({},xa),{getAnimatableNone:e=>{const l=e.match($6);return l?l.map(w6).join(" "):e}}),It={};class O6{constructor(){this.subscriptions=new Set}add(l){return this.subscriptions.add(l),()=>this.subscriptions.delete(l)}notify(l,o,t){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(l,o,t)}clear(){this.subscriptions.clear()}}const Fp=e=>!isNaN(parseFloat(e));class S6{constructor(l){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new O6,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:t,timestamp:r}=pE();this.lastUpdated!==r&&(this.timeDelta=t,this.lastUpdated=r),fp.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>fp.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=Fp(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=l,this.canTrackVelocity=Fp(this.current)}onChange(l){return this.updateSubscribers.add(l)}clearListeners(){this.updateSubscribers.clear()}set(l){this.updateAndNotify(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?By(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(l){return this.stop(),new Promise(o=>{const{stop:t}=l(o);this.stopAnimation=t}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function M6(e){return new S6(e)}const{isArray:P6}=Array;function L6(){const e=U({}),l=t=>{const r=a=>{!e.value[a]||(e.value[a].stop(),e.value[a].destroy(),Jd(e.value,a))};t?P6(t)?t.forEach(r):r(t):Object.keys(e.value).forEach(r)},o=(t,r,a)=>{if(e.value[t])return e.value[t];const c=M6(r);return c.onChange(p=>{te(a,t,p)}),te(e.value,t,c),c};return ta(l),{motionValues:e,get:o,stop:l}}const T6=e=>Array.isArray(e),Al=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),zt=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),N6=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ht=()=>({type:"keyframes",ease:"linear",duration:300}),j6=e=>({type:"keyframes",duration:800,values:e}),bp={default:N6,x:Al,y:Al,z:Al,rotate:Al,rotateX:Al,rotateY:Al,rotateZ:Al,scaleX:zt,scaleY:zt,scale:zt,backgroundColor:Ht,color:Ht,opacity:Ht},wy=(e,l)=>{let o;return T6(l)?o=j6:o=bp[e]||bp.default,gs({to:l},o(l))},xp=Qs(gs({},un),{transform:Math.round}),$y={color:De,backgroundColor:De,outlineColor:De,fill:De,stroke:De,borderColor:De,borderTopColor:De,borderRightColor:De,borderBottomColor:De,borderLeftColor:De,borderWidth:cs,borderTopWidth:cs,borderRightWidth:cs,borderBottomWidth:cs,borderLeftWidth:cs,borderRadius:cs,radius:cs,borderTopLeftRadius:cs,borderTopRightRadius:cs,borderBottomRightRadius:cs,borderBottomLeftRadius:cs,width:cs,maxWidth:cs,height:cs,maxHeight:cs,size:cs,top:cs,right:cs,bottom:cs,left:cs,padding:cs,paddingTop:cs,paddingRight:cs,paddingBottom:cs,paddingLeft:cs,margin:cs,marginTop:cs,marginRight:cs,marginBottom:cs,marginLeft:cs,rotate:Bl,rotateX:Bl,rotateY:Bl,rotateZ:Bl,scale:_n,scaleX:_n,scaleY:_n,scaleZ:_n,skew:Bl,skewX:Bl,skewY:Bl,distance:cs,translateX:cs,translateY:cs,translateZ:cs,x:cs,y:cs,z:cs,perspective:cs,transformPerspective:cs,opacity:Ro,originX:_p,originY:_p,originZ:cs,zIndex:xp,filter:Lr,WebkitFilter:Lr,fillOpacity:Ro,strokeOpacity:Ro,numOctaves:xp},ka=e=>$y[e],Oy=(e,l)=>l&&typeof e=="number"&&l.transform?l.transform(e):e;function V6(e,l){let o=ka(e);return o!==Lr&&(o=xa),o.getAnimatableNone?o.getAnimatableNone(l):void 0}const R6={linear:cy,easeIn:_a,easeInOut:py,easeOut:zE,circIn:iy,circInOut:HE,circOut:yy,backIn:Ea,backInOut:qE,backOut:UE,anticipate:WE,bounceIn:JE,bounceInOut:XE,bounceOut:Yn},kp=e=>{if(Array.isArray(e)){const[l,o,t,r]=e;return g6(l,o,t,r)}else if(typeof e=="string")return R6[e];return e},I6=e=>Array.isArray(e)&&typeof e[0]!="number",wp=(e,l)=>e==="zIndex"?!1:!!(typeof l=="number"||Array.isArray(l)||typeof l=="string"&&xa.test(l)&&!l.startsWith("url("));function z6(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function H6(r){var a=r,{ease:e,times:l,delay:o}=a,t=At(a,["ease","times","delay"]);const c=gs({},t);return l&&(c.offset=l),e&&(c.ease=I6(e)?e.map(kp):kp(e)),o&&(c.elapsed=-o),c}function U6(e,l,o){return Array.isArray(l.to)&&(e.duration||(e.duration=800)),z6(l),q6(e)||(e=gs(gs({},e),wy(o,l.to))),gs(gs({},l),H6(e))}function q6(c){var p=c,{delay:e,repeat:l,repeatType:o,repeatDelay:t,from:r}=p,a=At(p,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(a).length}function W6(e,l){return e[l]||e.default||e}function K6(e,l,o,t,r){const a=W6(t,e);let c=a.from===null||a.from===void 0?l.get():a.from;const p=wp(e,o);c==="none"&&p&&typeof o=="string"&&(c=V6(e,o));const i=wp(e,c);function y(f){const d={from:c,to:o,velocity:t.velocity?t.velocity:l.getVelocity(),onUpdate:m=>l.set(m)};return a.type==="inertia"||a.type==="decay"?f6(gs(gs({},d),a)):hy(Qs(gs({},U6(a,d,e)),{onUpdate:m=>{d.onUpdate(m),a.onUpdate&&a.onUpdate(m)},onComplete:()=>{t.onComplete&&t.onComplete(),r&&r(),f&&f()}}))}function u(f){return l.set(o),t.onComplete&&t.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!i||!p||a.type===!1?u:y}function Y6(){const{motionValues:e,stop:l,get:o}=L6();return{motionValues:e,stop:l,push:(r,a,c,p={},i)=>{const y=c[r],u=o(r,y,c);if(p&&p.immediate){u.set(a);return}const f=K6(r,u,a,p,i);u.start(f)}}}function Z6(e,l={},{motionValues:o,push:t,stop:r}=Y6()){const a=D(l),c=U(!1),p=is(o,d=>{c.value=Object.values(d).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0}),i=d=>{if(!a||!a[d])throw new Error(`The variant ${d} does not exist.`);return a[d]},y=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([m,B])=>{if(m!=="transition")return new Promise(C=>{t(m,B,e,d.transition||wy(m,d[m]),C)})}).filter(Boolean)));return{isAnimating:c,apply:y,set:d=>{const m=In(d)?d:i(d);Object.entries(m).forEach(([B,C])=>{B!=="transition"&&t(B,C,e,{immediate:!0})})},stopTransitions:()=>{p(),r()},leave:async d=>{let m;if(a&&(a.leave&&(m=a.leave),!a.leave&&a.initial&&(m=a.initial)),!m){d();return}await y(m),d()}}}const wa=typeof window!="undefined",J6=()=>wa&&window.onpointerdown===null,X6=()=>wa&&window.ontouchstart===null,G6=()=>wa&&window.onmousedown===null;function Q6({target:e,state:l,variants:o,apply:t}){const r=D(o),a=[],c=(...B)=>{const C=Ps.apply(null,B);return a.push(C),C},p=U(!1),i=U(!1),y=U(!1),u=w(()=>{let B=[];return r&&(r.hovered&&(B=[...B,...Object.keys(r.hovered)]),r.tapped&&(B=[...B,...Object.keys(r.tapped)]),r.focused&&(B=[...B,...Object.keys(r.focused)])),B}),f=w(()=>{const B={};Object.assign(B,l.value),p.value&&r.hovered&&Object.assign(B,r.hovered),i.value&&r.tapped&&Object.assign(B,r.tapped),y.value&&r.focused&&Object.assign(B,r.focused);for(const C in B)u.value.includes(C)||delete B[C];return B});r.hovered&&(c(e,"mouseenter",()=>{p.value=!0}),c(e,"mouseleave",()=>{p.value=!1,i.value=!1}),c(e,"mouseout",()=>{p.value=!1,i.value=!1})),r.tapped&&(G6()&&(c(e,"mousedown",()=>{i.value=!0}),c(e,"mouseup",()=>{i.value=!1})),J6()&&(c(e,"pointerdown",()=>{i.value=!0}),c(e,"pointerup",()=>{i.value=!1})),X6()&&(c(e,"touchstart",()=>{i.value=!0}),c(e,"touchend",()=>{i.value=!1}))),r.focused&&(c(e,"focus",()=>{y.value=!0}),c(e,"blur",()=>{y.value=!1}));const d=is(f,t);return{stop:()=>{a.forEach(B=>B()),d()}}}function s2({set:e,target:l,variants:o,variant:t}){const r=D(o);return{stop:is(()=>l,()=>{!r||(r.initial&&e("initial"),r.enter&&(t.value="enter"))},{immediate:!0,flush:"pre"})}}function e2({state:e,apply:l}){return{stop:is(e,t=>{t&&l(t)},{immediate:!0})}}function l2({target:e,variants:l,variant:o}){const t=D(l);let r=pl;if(t&&(t.visible||t.visibleOnce)){const{stop:a}=om(e,([{isIntersecting:c}])=>{t.visible?c?o.value="visible":o.value="initial":t.visibleOnce&&(c?o.value!=="visibleOnce"&&(o.value="visibleOnce"):o.value||(o.value="initial"))});r=a}return{stop:r}}function o2(e,l={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const o=U([]);if(l.lifeCycleHooks){const{stop:r}=s2(e);o.value.push(r)}if(l.syncVariants){const{stop:r}=e2(e);o.value.push(r)}if(l.visibilityHooks){const{stop:r}=l2(e);o.value.push(r)}if(l.eventListeners){const{stop:r}=Q6(e);o.value.push(r)}const t=()=>o.value.forEach(r=>r());return ta(t),{stop:t}}function Sy(e={}){const l=Ts(gs({},e)),o=U({});return is(l,()=>{const t={};for(const[r,a]of Object.entries(l)){const c=ka(r),p=Oy(a,c);t[r]=p}o.value=t},{immediate:!0,deep:!0}),{state:l,style:o}}const n2=["","X","Y","Z"],t2=["perspective","translate","scale","rotate","skew"],My=["transformPerspective","x","y","z"];t2.forEach(e=>{n2.forEach(l=>{const o=e+l;My.push(o)})});const r2=new Set(My);function $a(e){return r2.has(e)}const a2=new Set(["originX","originY","originZ"]);function Py(e){return a2.has(e)}function c2(e){const l={},o={};return Object.entries(e).forEach(([t,r])=>{$a(t)||Py(t)?l[t]=r:o[t]=r}),{transform:l,style:o}}function p2(e,l){let o,t;const{state:r,style:a}=Sy(),c=is(()=>re(e),y=>{if(!!y){t=y;for(const u of Object.keys($y))y.style[u]===null||y.style[u]===""||$a(u)||Py(u)||te(r,u,y.style[u]);o&&Object.entries(o).forEach(([u,f])=>te(y.style,u,f)),l&&l(r)}},{immediate:!0}),p=is(a,y=>{if(!t){o=y;return}for(const u in y)te(t.style,u,y[u])},{immediate:!0});return{style:r,stop:()=>{t=void 0,o=void 0,c(),p()}}}const i2={x:"translateX",y:"translateY",z:"translateZ"};function Ly(e={},l=!0){const o=Ts(gs({},e)),t=U("");return is(o,r=>{let a="",c=!1;l&&(r.x||r.y||r.z)&&(a+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(cs.transform).join(",")}) `,c=!0);for(const[p,i]of Object.entries(r)){if(l&&(p==="x"||p==="y"||p==="z"))continue;const y=ka(p),u=Oy(i,y);a+=`${i2[p]||p}(${u}) `}l&&!c&&(a+="translateZ(0px) "),t.value=a.trim()},{immediate:!0,deep:!0}),{state:o,transform:t}}function y2(e){const l=e.trim().split(/\) |\)/);if(l.length===1)return{};const o=t=>t.endsWith("px")||t.endsWith("deg")?parseFloat(t):isNaN(Number(t))?Number(t):t;return l.reduce((t,r)=>{if(!r)return t;const[a,c]=r.split("("),i=c.split(",").map(u=>o(u.endsWith(")")?u.replace(")",""):u.trim())),y=i.length===1?i[0]:i;return Qs(gs({},t),{[a]:y})},{})}function u2(e,l){Object.entries(y2(l)).forEach(([o,t])=>{t=parseFloat(t);const r=["x","y","z"];if(o==="translate3d"){if(t===0){r.forEach(a=>{te(e,a,0)});return}t.forEach((a,c)=>{te(e,r[c],a)});return}if(o==="translateX"){te(e,"x",t);return}if(o==="translateY"){te(e,"y",t);return}if(o==="translateZ"){te(e,"z",t);return}te(e,o,t)})}function d2(e,l){let o,t;const{state:r,transform:a}=Ly(),c=is(()=>re(e),y=>{!y||(t=y,y.style.transform&&u2(r,y.style.transform),o&&(y.style.transform=o),l&&l(r))},{immediate:!0}),p=is(a,y=>{if(!t){o=y;return}t.style.transform=y},{immediate:!0});return{transform:r,stop:()=>{o=void 0,t=void 0,c(),p()}}}function f2(e,l){const o=Ts({}),t=f=>{Object.entries(f).forEach(([d,m])=>{te(o,d,m)})},{style:r,stop:a}=p2(e,t),{transform:c,stop:p}=d2(e,t),i=is(o,f=>{Object.entries(f).forEach(([d,m])=>{const B=$a(d)?c:r;B[d]&&B[d]===m||te(B,d,m)})},{immediate:!0,deep:!0}),y=is(()=>re(e),f=>{!f||l&&t(l)},{immediate:!0});return{motionProperties:o,style:r,transform:c,stop:()=>{a(),p(),i(),y()}}}function m2(e={}){const l=D(e),o=U();return{state:w(()=>{if(!!o.value)return l[o.value]}),variant:o}}function h2(e,l={},o){const{motionProperties:t,stop:r}=f2(e),{variant:a,state:c}=m2(l),p=Z6(t,l),i=Qs(gs({target:e,variant:a,variants:l,state:c,motionProperties:t},p),{stop:(u=!1)=>{}}),{stop:y}=o2(i,o);return i.stop=(u=!1)=>{const f=()=>{i.stopTransitions(),r(),y()};if(!u&&l.value&&l.value.leave){const d=is(i.isAnimating,m=>{m||(d(),f())})}else f()},ta(()=>i.stop()),Df(()=>re(e),u=>{!u||u!=null&&u.motionInstance&&(i.stop(),Object.assign(i,u.motionInstance))}),i}const B2=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],A2=(e,l)=>{const o=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};o&&(o.variants&&In(o.variants)&&(l.value=gs(gs({},l.value),o.variants)),B2.forEach(t=>{if(t==="delay"){if(o&&o[t]&&sf(o[t])){const r=o[t];l&&l.value&&(l.value.enter&&(l.value.enter.transition||(l.value.enter.transition={}),l.value.enter.transition=Qs(gs({},l.value.enter.transition),{delay:r})),l.value.visible&&(l.value.visible.transition||(l.value.visible.transition={}),l.value.visible.transition=Qs(gs({},l.value.visible.transition),{delay:r})),l.value.visibleOnce&&(l.value.visibleOnce.transition||(l.value.visibleOnce.transition={}),l.value.visibleOnce.transition=Qs(gs({},l.value.visibleOnce.transition),{delay:r})))}return}t==="visible-once"&&(t="visibleOnce"),o&&o[t]&&In(o[t])&&(l.value[t]=o[t])}))},Ut=e=>{const l=(t,r,a)=>{const c=r.value&&typeof r.value=="string"?r.value:a.key;c&&It[c]&&It[c].stop();const p=U(e||{});typeof r.value=="object"&&(p.value=r.value),A2(a,p);const i=h2(t,p);t.motionInstance=i,c&&te(It,c,i)},o=t=>{t.motionInstance&&t.motionInstance.stop()};return{created:l,unmounted:o,bind:l,unbind:o,getSSRProps(t,r){const{initial:a}=t.value||r&&r.props||{},c=oE((e==null?void 0:e.initial)||{},a||{});if(!c||Object.keys(c).length===0)return;const{transform:p,style:i}=c2(c),{transform:y}=Ly(p),{style:u}=Sy(i);return y.value&&(u.value.transform=y.value),{style:u.value}}}},v2={initial:{opacity:0},enter:{opacity:1}},D2={initial:{opacity:0},visible:{opacity:1}},g2={initial:{opacity:0},visibleOnce:{opacity:1}},C2={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},_2={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},E2={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},F2={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},b2={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},x2={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},k2={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},w2={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},$2={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},O2={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},S2={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},M2={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},P2={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},L2={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},T2={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},N2={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},j2={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},V2={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},R2={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},I2={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},z2={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},H2={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},U2={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},q2={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},W2={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},K2={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Y2={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},$p={__proto__:null,fade:v2,fadeVisible:D2,fadeVisibleOnce:g2,pop:C2,popVisible:_2,popVisibleOnce:E2,rollBottom:P2,rollLeft:F2,rollRight:k2,rollTop:O2,rollVisibleBottom:L2,rollVisibleLeft:b2,rollVisibleRight:w2,rollVisibleTop:S2,rollVisibleOnceBottom:T2,rollVisibleOnceLeft:x2,rollVisibleOnceRight:$2,rollVisibleOnceTop:M2,slideBottom:W2,slideLeft:N2,slideRight:R2,slideTop:H2,slideVisibleBottom:K2,slideVisibleLeft:j2,slideVisibleRight:I2,slideVisibleTop:U2,slideVisibleOnceBottom:Y2,slideVisibleOnceLeft:V2,slideVisibleOnceRight:z2,slideVisibleOnceTop:q2};function Z2(e){const l="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",t=new RegExp(l.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(t,r=>o.charAt(l.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const J2={install(e,l){if(e.directive("motion",Ut()),!l||l&&!l.excludePresets)for(const o in $p){const t=$p[o];e.directive(`motion-${Z2(o)}`,Ut(t))}if(l&&l.directives)for(const o in l.directives){const t=l.directives[o];t.initial,e.directive(`motion-${o}`,Ut(t))}}},Oa="vue-starport-injection",Ty="vue-starport-options",X2={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Ny={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var G2=Object.defineProperty,Jn=Object.getOwnPropertySymbols,jy=Object.prototype.hasOwnProperty,Vy=Object.prototype.propertyIsEnumerable,Op=(e,l,o)=>l in e?G2(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Q2=(e,l)=>{for(var o in l||(l={}))jy.call(l,o)&&Op(e,o,l[o]);if(Jn)for(var o of Jn(l))Vy.call(l,o)&&Op(e,o,l[o]);return e},Sp=(e,l)=>{var o={};for(var t in e)jy.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&Jn)for(var t of Jn(e))l.indexOf(t)<0&&Vy.call(e,t)&&(o[t]=e[t]);return o};const sF=bs({name:"StarportProxy",props:Q2({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Ny),setup(e,l){const o=x(Oa),t=w(()=>o.getInstance(e.port,e.component)),r=U(),a=t.value.generateId(),c=U(!1);return t.value.isVisible||(t.value.land(),c.value=!0),ao(async()=>{t.value.el||(t.value.el=r.value,await Ws(),c.value=!0,t.value.rect.update())}),at(async()=>{t.value.rect.update(),t.value.liftOff(),t.value.el=void 0,c.value=!1,!t.value.options.keepAlive&&(await Ws(),await Ws(),!t.value.el&&o.dispose(t.value.port))}),is(()=>e,async()=>{t.value.props&&await Ws();const p=e,{props:i}=p,y=Sp(p,["props"]);t.value.props=i||{},t.value.setLocalOptions(y)},{deep:!0,immediate:!0}),()=>{const p=e,{initialProps:i,mountedProps:y}=p,u=Sp(p,["initialProps","mountedProps"]),f=Je(u,(c.value?y:i)||{});return Oe("div",Je(f,{id:a,ref:r,"data-starport-proxy":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true"}),l.slots.default?Oe(l.slots.default):void 0)}}});var eF=Object.defineProperty,lF=Object.defineProperties,oF=Object.getOwnPropertyDescriptors,Mp=Object.getOwnPropertySymbols,nF=Object.prototype.hasOwnProperty,tF=Object.prototype.propertyIsEnumerable,Pp=(e,l,o)=>l in e?eF(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,rF=(e,l)=>{for(var o in l||(l={}))nF.call(l,o)&&Pp(e,o,l[o]);if(Mp)for(var o of Mp(l))tF.call(l,o)&&Pp(e,o,l[o]);return e},aF=(e,l)=>lF(e,oF(l));const cF=bs({name:"Starport",inheritAttrs:!0,props:Ny,setup(e,l){const o=U(!1);return ao(()=>{o.value=!0}),()=>{var c,p;const t=(p=(c=l.slots).default)==null?void 0:p.call(c);if(!t)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(t.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${t.length}`);const r=t[0];let a=r.type;return(!In(a)||so(a))&&(a={render(){return t}}),Oe(sF,aF(rF({},e),{key:e.port,component:et(a),props:r.props}))}}});function pF(e){const l=Ts({height:0,width:0,left:0,top:0,update:t,listen:a,pause:c}),o=Ce?document.documentElement||document.body:void 0;function t(){if(!Ce)return;const p=re(e);if(!p)return;const{height:i,width:y,left:u,top:f}=p.getBoundingClientRect();Object.assign(l,{height:i,width:y,left:u,top:o.scrollTop+f})}const r=l8(t,{immediate:!1});function a(){!Ce||(t(),r.resume())}function c(){r.pause()}return l}let iF="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",yF=(e,l=21)=>(o=l)=>{let t="",r=o;for(;r--;)t+=e[Math.random()*e.length|0];return t},uF=(e=21)=>{let l="",o=e;for(;o--;)l+=iF[Math.random()*64|0];return l};var dF={nanoid:uF,customAlphabet:yF};const Lp=dF.customAlphabet("abcdefghijklmnopqrstuvwxyz",5);function Tp(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function fF(e){var l;return e.name||((l=e.__file)==null?void 0:l.split(/[\/\\.]/).slice(-2)[0])||""}var mF=Object.defineProperty,Np=Object.getOwnPropertySymbols,hF=Object.prototype.hasOwnProperty,BF=Object.prototype.propertyIsEnumerable,jp=(e,l,o)=>l in e?mF(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,qt=(e,l)=>{for(var o in l||(l={}))hF.call(l,o)&&jp(e,o,l[o]);if(Np)for(var o of Np(l))BF.call(l,o)&&jp(e,o,l[o]);return e};function AF(e,l,o={}){const t=fF(l),r=Tp(t)||Lp(),a=U(),c=U(null),p=U(!1),i=U(!1),y=eu(!0),u=U({}),f=w(()=>qt(qt(qt({},X2),o),u.value)),d=U(0);let m;y.run(()=>{m=pF(a),is(a,async b=>{b&&(i.value=!0),await Ws(),a.value||(i.value=!1)})});const B=Tp(e);function C(){return`starport-${r}-${B}-${Lp()}`}const g=C();return Ts({el:a,id:g,port:e,props:c,rect:m,scope:y,isLanded:p,isVisible:i,options:f,liftOffTime:d,component:l,componentName:t,componentId:r,generateId:C,setLocalOptions(b={}){u.value=JSON.parse(JSON.stringify(b))},elRef(){return a},liftOff(){!p.value||(p.value=!1,d.value=Date.now(),m.listen())},land(){p.value||(p.value=!0,m.pause())}})}function vF(e){const l=Ts(new Map);function o(r,a){let c=l.get(r);return c||(c=AF(r,a,e),l.set(r,c)),c.component=a,c}function t(r){var a;(a=l.get(r))==null||a.scope.stop(),l.delete(r)}return{portMap:l,dispose:t,getInstance:o}}var DF=Object.defineProperty,gF=Object.defineProperties,CF=Object.getOwnPropertyDescriptors,Vp=Object.getOwnPropertySymbols,_F=Object.prototype.hasOwnProperty,EF=Object.prototype.propertyIsEnumerable,Rp=(e,l,o)=>l in e?DF(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,FF=(e,l)=>{for(var o in l||(l={}))_F.call(l,o)&&Rp(e,o,l[o]);if(Vp)for(var o of Vp(l))EF.call(l,o)&&Rp(e,o,l[o]);return e},bF=(e,l)=>gF(e,CF(l));const xF=bs({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const l=x(Oa);if(!l)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=w(()=>l.getInstance(e.port,e.component)),t=w(()=>{var c;return((c=o.value.el)==null?void 0:c.id)||o.value.id}),r=w(()=>{const c=Date.now()-o.value.liftOffTime,p=Math.max(0,o.value.options.duration-c),i=o.value.rect,y={position:"absolute",left:0,top:0,width:`${i.width}px`,height:`${i.height}px`,transform:`translate3d(${i.left}px,${i.top}px,0px)`};return!o.value.isVisible||!o.value.el?bF(FF({},y),{zIndex:-1,display:"none"}):(o.value.isLanded?y.display="none":Object.assign(y,{transitionProperty:"all",transitionDuration:`${p}ms`,transitionTimingFunction:o.value.options.easing}),y)}),a={};return()=>{const c=!!(o.value.isLanded&&o.value.el);return Oe("div",{style:r.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},Oe(k5,{to:c?`#${t.value}`:"body",disabled:!c},Oe(o.value.component,Je(a,o.value.props))))}}}),kF=bs({name:"StarportCarrier",setup(e,{slots:l}){const o=vF(x(Ty,{}));return Ml().appContext.app.provide(Oa,o),()=>{var r;return[(r=l.default)==null?void 0:r.call(l),Array.from(o.portMap.entries()).map(([a,{component:c}])=>Oe(xF,{key:a,port:a,component:c}))]}}});function wF(e={}){return{install(l){l.provide(Ty,e),l.component("Starport",cF),l.component("StarportCarrier",kF)}}}function $F(e){function l(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}l(),window.addEventListener("resize",l),e.app.use(J2),e.app.use(wF({keepAlive:!0}))}function pe(e,l,o){var t,r;return(r=((t=e.instance)==null?void 0:t.$).provides[l])!=null?r:o}function OF(){return{install(e){e.directive("click",{name:"v-click",mounted(l,o){var u,f,d,m;if(To.value||((u=pe(o,So))==null?void 0:u.value))return;const t=pe(o,Cl),r=pe(o,Oo),a=pe(o,cr),c=o.modifiers.hide!==!1&&o.modifiers.hide!=null,p=o.modifiers.fade!==!1&&o.modifiers.fade!=null,i=((f=t==null?void 0:t.value)==null?void 0:f.length)||0,y=p?Td:bt;if(t&&!((d=t==null?void 0:t.value)!=null&&d.includes(l))&&t.value.push(l),o.value===null&&(o.value=t==null?void 0:t.value.length),!(a!=null&&a.value.has(o.value)))a==null||a.value.set(o.value,[l]);else if(!((m=a==null?void 0:a.value.get(o.value))!=null&&m.includes(l))){const B=(a==null?void 0:a.value.get(o.value))||[];a==null||a.value.set(o.value,[l].concat(B))}l==null||l.classList.toggle(Dl,!0),r&&is(r,()=>{var b;const B=(b=r==null?void 0:r.value)!=null?b:0,C=o.value!=null?B>=o.value:B>i;l.classList.contains(xt)||l.classList.toggle(y,!C),c!==!1&&c!==void 0&&l.classList.toggle(y,C),l.classList.toggle(ho,!1);const g=a==null?void 0:a.value.get(B);g==null||g.forEach((E,F)=>{E.classList.toggle(Dn,!1),F===g.length-1?E.classList.toggle(ho,!0):E.classList.toggle(Dn,!0)}),l.classList.contains(ho)||l.classList.toggle(Dn,C)},{immediate:!0})},unmounted(l,o){l==null||l.classList.toggle(Dl,!1);const t=pe(o,Cl);t!=null&&t.value&&pr(t.value,l)}}),e.directive("after",{name:"v-after",mounted(l,o){var p,i;if(To.value||((p=pe(o,So))==null?void 0:p.value))return;const t=pe(o,Cl),r=pe(o,Oo),a=pe(o,cr),c=t==null?void 0:t.value.length;o.value===void 0&&(o.value=t==null?void 0:t.value.length),a!=null&&a.value.has(o.value)?(i=a==null?void 0:a.value.get(o.value))==null||i.push(l):a==null||a.value.set(o.value,[l]),l==null||l.classList.toggle(Dl,!0),r&&is(r,()=>{var u,f,d;const y=((u=r.value)!=null?u:0)>=((d=(f=o.value)!=null?f:c)!=null?d:0);l.classList.contains(xt)||l.classList.toggle(bt,!y),l.classList.toggle(ho,!1),l.classList.contains(ho)||l.classList.toggle(Dn,y)},{immediate:!0})},unmounted(l){l==null||l.classList.toggle(Dl,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(l,o){var c,p,i;if(To.value||((c=pe(o,So))==null?void 0:c.value))return;const t=pe(o,Cl),r=pe(o,Oo),a=((p=t==null?void 0:t.value)==null?void 0:p.length)||0;t&&!((i=t==null?void 0:t.value)!=null&&i.includes(l))&&t.value.push(l),l==null||l.classList.toggle(Dl,!0),r&&is(r,()=>{var f;const y=(f=r==null?void 0:r.value)!=null?f:0,u=o.value!=null?y>=o.value:y>a;l.classList.toggle(bt,u),l.classList.toggle(xt,u)},{immediate:!0})},unmounted(l,o){l==null||l.classList.toggle(Dl,!1);const t=pe(o,Cl);t!=null&&t.value&&pr(t.value,l)}})}}}function SF(e,l){const o=O8(e),t=S8(l,o.currentRoute,o.currentPage);return{nav:Qs(gs(gs({},o),t),{downloadPDF:Er,next:il,nextSlide:Qo,openInEditor:Q_,prev:yl,prevSlide:sn}),configs:Es,themeConfigs:w(()=>Es.themeConfig)}}function MF(){return{install(e){const l=SF(Ge,Se);e.provide($,Ts(l))}}}const yo=Ad(eE);yo.use(he);yo.use(Od());yo.use(OF());yo.use(MF());$F({app:yo,router:he});yo.mount("#app");export{go as $,N as A,F8 as B,fs as C,Is as D,V8 as E,ee as F,Fs as G,Ch as H,Cs as I,LF as J,TF as K,Se as L,Wn as M,Y_ as N,Lt as O,kt as P,Jo as Q,Mt as R,bA as S,ia as T,ya as U,_A as V,Oh as W,Me as X,NF as Y,Ze as Z,Pe as _,s as a,gn as a0,tn as a1,Dr as a2,Q3 as a3,sh as a4,eh as a5,oh as a6,He as a7,Ui as a8,IF as a9,Re as aa,le as ab,yB as ac,bl as ad,Wi as ae,nh as af,at as ag,w as b,K as c,bs as d,$ as e,ue as f,S as g,D as h,x as i,uh as j,G_ as k,Es as l,Md as m,Ns as n,v as o,ao as p,Ts as q,U as r,jF as s,Hs as t,VF as u,RF as v,is as w,Z as x,oe as y,Yi as z};
