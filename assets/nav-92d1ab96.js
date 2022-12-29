function eo(e,l){const n=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)n[t[a]]=!0;return l?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function se(e){if(is(e)){const l={};for(let n=0;n<e.length;n++){const t=e[n],a=zs(t)?Ji(t):se(t);if(a)for(const r in a)l[r]=a[r]}return l}else{if(zs(e))return e;if(Is(e))return e}}const qi=/;(?![^(]*\))/g,Ki=/:(.+)/;function Ji(e){const l={};return e.split(qi).forEach(n=>{if(n){const t=n.split(Ki);t.length>1&&(l[t[0].trim()]=t[1].trim())}}),l}function Hs(e){let l="";if(zs(e))l=e;else if(is(e))for(let n=0;n<e.length;n++){const t=Hs(e[n]);t&&(l+=t+" ")}else if(Is(e))for(const n in e)e[n]&&(l+=n+" ");return l.trim()}function q(e){if(!e)return null;let{class:l,style:n}=e;return l&&!zs(l)&&(e.class=Hs(l)),n&&(e.style=se(n)),e}const Ys=e=>zs(e)?e:e==null?"":is(e)||Is(e)&&(e.toString===Oc||!ds(e.toString))?JSON.stringify(e,$c,2):String(e),$c=(e,l)=>l&&l.__v_isRef?$c(e,l.value):Pl(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((n,[t,a])=>(n[`${t} =>`]=a,n),{})}:Pc(l)?{[`Set(${l.size})`]:[...l.values()]}:Is(l)&&!is(l)&&!Tc(l)?String(l):l,ks=Object.freeze({}),an=Object.freeze([]),ye=()=>{},Sc=()=>!1,Yi=/^on[^a-z]/,Ro=e=>Yi.test(e),vt=e=>e.startsWith("onUpdate:"),Ks=Object.assign,na=(e,l)=>{const n=e.indexOf(l);n>-1&&e.splice(n,1)},Zi=Object.prototype.hasOwnProperty,As=(e,l)=>Zi.call(e,l),is=Array.isArray,Pl=e=>Io(e)==="[object Map]",Pc=e=>Io(e)==="[object Set]",ds=e=>typeof e=="function",zs=e=>typeof e=="string",oa=e=>typeof e=="symbol",Is=e=>e!==null&&typeof e=="object",ta=e=>Is(e)&&ds(e.then)&&ds(e.catch),Oc=Object.prototype.toString,Io=e=>Oc.call(e),aa=e=>Io(e).slice(8,-1),Tc=e=>Io(e)==="[object Object]",ra=e=>zs(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fo=eo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gi=eo("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Vo=e=>{const l=Object.create(null);return n=>l[n]||(l[n]=e(n))},Qi=/-(\w)/g,Ve=Vo(e=>e.replace(Qi,(l,n)=>n?n.toUpperCase():"")),Xi=/\B([A-Z])/g,yn=Vo(e=>e.replace(Xi,"-$1").toLowerCase()),un=Vo(e=>e.charAt(0).toUpperCase()+e.slice(1)),gl=Vo(e=>e?`on${un(e)}`:""),Hn=(e,l)=>!Object.is(e,l),Fl=(e,l)=>{for(let n=0;n<e.length;n++)e[n](l)},Co=(e,l,n)=>{Object.defineProperty(e,l,{configurable:!0,enumerable:!1,value:n})},s8=e=>{const l=parseFloat(e);return isNaN(l)?e:l};let Ya;const Mc=()=>Ya||(Ya=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Do(e,...l){console.warn(`[Vue warn] ${e}`,...l)}let he;class Nc{constructor(l=!1){this.active=!0,this.effects=[],this.cleanups=[],!l&&he&&(this.parent=he,this.index=(he.scopes||(he.scopes=[])).push(this)-1)}run(l){if(this.active){const n=he;try{return he=this,l()}finally{he=n}}else Do("cannot run an inactive effect scope.")}on(){he=this}off(){he=this.parent}stop(l){if(this.active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(this.parent&&!l){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function y2(e){return new Nc(e)}function e8(e,l=he){l&&l.active&&l.effects.push(e)}function l8(){return he}function n8(e){he?he.cleanups.push(e):Do("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ca=e=>{const l=new Set(e);return l.w=0,l.n=0,l},Lc=e=>(e.w&ml)>0,Rc=e=>(e.n&ml)>0,o8=({deps:e})=>{if(e.length)for(let l=0;l<e.length;l++)e[l].w|=ml},t8=e=>{const{deps:l}=e;if(l.length){let n=0;for(let t=0;t<l.length;t++){const a=l[t];Lc(a)&&!Rc(a)?a.delete(e):l[n++]=a,a.w&=~ml,a.n&=~ml}l.length=n}},At=new WeakMap;let wn=0,ml=1;const _t=30;let re;const Ol=Symbol("iterate"),gt=Symbol("Map key iterate");class pa{constructor(l,n=null,t){this.fn=l,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,e8(this,t)}run(){if(!this.active)return this.fn();let l=re,n=yl;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=re,re=this,yl=!0,ml=1<<++wn,wn<=_t?o8(this):Za(this),this.fn()}finally{wn<=_t&&t8(this),ml=1<<--wn,re=this.parent,yl=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){re===this?this.deferStop=!0:this.active&&(Za(this),this.onStop&&this.onStop(),this.active=!1)}}function Za(e){const{deps:l}=e;if(l.length){for(let n=0;n<l.length;n++)l[n].delete(e);l.length=0}}let yl=!0;const Ic=[];function Ul(){Ic.push(yl),yl=!1}function ql(){const e=Ic.pop();yl=e===void 0?!0:e}function _e(e,l,n){if(yl&&re){let t=At.get(e);t||At.set(e,t=new Map);let a=t.get(n);a||t.set(n,a=ca()),Vc(a,{effect:re,target:e,type:l,key:n})}}function Vc(e,l){let n=!1;wn<=_t?Rc(e)||(e.n|=ml,n=!Lc(e)):n=!e.has(re),n&&(e.add(re),re.deps.push(e),re.onTrack&&re.onTrack(Object.assign({effect:re},l)))}function ll(e,l,n,t,a,r){const c=At.get(e);if(!c)return;let p=[];if(l==="clear")p=[...c.values()];else if(n==="length"&&is(e))c.forEach((y,u)=>{(u==="length"||u>=t)&&p.push(y)});else switch(n!==void 0&&p.push(c.get(n)),l){case"add":is(e)?ra(n)&&p.push(c.get("length")):(p.push(c.get(Ol)),Pl(e)&&p.push(c.get(gt)));break;case"delete":is(e)||(p.push(c.get(Ol)),Pl(e)&&p.push(c.get(gt)));break;case"set":Pl(e)&&p.push(c.get(Ol));break}const i={target:e,type:l,key:n,newValue:t,oldValue:a,oldTarget:r};if(p.length===1)p[0]&&Ct(p[0],i);else{const y=[];for(const u of p)u&&y.push(...u);Ct(ca(y),i)}}function Ct(e,l){const n=is(e)?e:[...e];for(const t of n)t.computed&&Ga(t,l);for(const t of n)t.computed||Ga(t,l)}function Ga(e,l){(e!==re||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ks({effect:e},l)),e.scheduler?e.scheduler():e.run())}const a8=eo("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(oa)),r8=jo(),c8=jo(!1,!0),p8=jo(!0),i8=jo(!0,!0),Qa=y8();function y8(){const e={};return["includes","indexOf","lastIndexOf"].forEach(l=>{e[l]=function(...n){const t=ms(this);for(let r=0,c=this.length;r<c;r++)_e(t,"get",r+"");const a=t[l](...n);return a===-1||a===!1?t[l](...n.map(ms)):a}}),["push","pop","shift","unshift","splice"].forEach(l=>{e[l]=function(...n){Ul();const t=ms(this)[l].apply(this,n);return ql(),t}}),e}function jo(e=!1,l=!1){return function(t,a,r){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return l;if(a==="__v_raw"&&r===(e?l?Yc:Jc:l?Kc:qc).get(t))return t;const c=is(t);if(!e&&c&&As(Qa,a))return Reflect.get(Qa,a,r);const p=Reflect.get(t,a,r);return(oa(a)?jc.has(a):a8(a))||(e||_e(t,"get",a),l)?p:Ds(p)?c&&ra(a)?p:p.value:Is(p)?e?wl(p):ee(p):p}}const u8=Hc(),d8=Hc(!0);function Hc(e=!1){return function(n,t,a,r){let c=n[t];if(Vl(c)&&Ds(c)&&!Ds(a))return!1;if(!e&&!Vl(a)&&(Dt(a)||(a=ms(a),c=ms(c)),!is(n)&&Ds(c)&&!Ds(a)))return c.value=a,!0;const p=is(n)&&ra(t)?Number(t)<n.length:As(n,t),i=Reflect.set(n,t,a,r);return n===ms(r)&&(p?Hn(a,c)&&ll(n,"set",t,a,c):ll(n,"add",t,a)),i}}function f8(e,l){const n=As(e,l),t=e[l],a=Reflect.deleteProperty(e,l);return a&&n&&ll(e,"delete",l,void 0,t),a}function h8(e,l){const n=Reflect.has(e,l);return(!oa(l)||!jc.has(l))&&_e(e,"has",l),n}function m8(e){return _e(e,"iterate",is(e)?"length":Ol),Reflect.ownKeys(e)}const zc={get:r8,set:u8,deleteProperty:f8,has:h8,ownKeys:m8},Wc={get:p8,set(e,l){return Do(`Set operation on key "${String(l)}" failed: target is readonly.`,e),!0},deleteProperty(e,l){return Do(`Delete operation on key "${String(l)}" failed: target is readonly.`,e),!0}},B8=Ks({},zc,{get:c8,set:d8}),v8=Ks({},Wc,{get:i8}),ia=e=>e,Ho=e=>Reflect.getPrototypeOf(e);function to(e,l,n=!1,t=!1){e=e.__v_raw;const a=ms(e),r=ms(l);n||(l!==r&&_e(a,"get",l),_e(a,"get",r));const{has:c}=Ho(a),p=t?ia:n?ua:zn;if(c.call(a,l))return p(e.get(l));if(c.call(a,r))return p(e.get(r));e!==a&&e.get(l)}function ao(e,l=!1){const n=this.__v_raw,t=ms(n),a=ms(e);return l||(e!==a&&_e(t,"has",e),_e(t,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function ro(e,l=!1){return e=e.__v_raw,!l&&_e(ms(e),"iterate",Ol),Reflect.get(e,"size",e)}function Xa(e){e=ms(e);const l=ms(this);return Ho(l).has.call(l,e)||(l.add(e),ll(l,"add",e,e)),this}function sr(e,l){l=ms(l);const n=ms(this),{has:t,get:a}=Ho(n);let r=t.call(n,e);r?Uc(n,t,e):(e=ms(e),r=t.call(n,e));const c=a.call(n,e);return n.set(e,l),r?Hn(l,c)&&ll(n,"set",e,l,c):ll(n,"add",e,l),this}function er(e){const l=ms(this),{has:n,get:t}=Ho(l);let a=n.call(l,e);a?Uc(l,n,e):(e=ms(e),a=n.call(l,e));const r=t?t.call(l,e):void 0,c=l.delete(e);return a&&ll(l,"delete",e,void 0,r),c}function lr(){const e=ms(this),l=e.size!==0,n=Pl(e)?new Map(e):new Set(e),t=e.clear();return l&&ll(e,"clear",void 0,void 0,n),t}function co(e,l){return function(t,a){const r=this,c=r.__v_raw,p=ms(c),i=l?ia:e?ua:zn;return!e&&_e(p,"iterate",Ol),c.forEach((y,u)=>t.call(a,i(y),i(u),r))}}function po(e,l,n){return function(...t){const a=this.__v_raw,r=ms(a),c=Pl(r),p=e==="entries"||e===Symbol.iterator&&c,i=e==="keys"&&c,y=a[e](...t),u=n?ia:l?ua:zn;return!l&&_e(r,"iterate",i?gt:Ol),{next(){const{value:d,done:f}=y.next();return f?{value:d,done:f}:{value:p?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function al(e){return function(...l){{const n=l[0]?`on key "${l[0]}" `:"";console.warn(`${un(e)} operation ${n}failed: target is readonly.`,ms(this))}return e==="delete"?!1:this}}function A8(){const e={get(r){return to(this,r)},get size(){return ro(this)},has:ao,add:Xa,set:sr,delete:er,clear:lr,forEach:co(!1,!1)},l={get(r){return to(this,r,!1,!0)},get size(){return ro(this)},has:ao,add:Xa,set:sr,delete:er,clear:lr,forEach:co(!1,!0)},n={get(r){return to(this,r,!0)},get size(){return ro(this,!0)},has(r){return ao.call(this,r,!0)},add:al("add"),set:al("set"),delete:al("delete"),clear:al("clear"),forEach:co(!0,!1)},t={get(r){return to(this,r,!0,!0)},get size(){return ro(this,!0)},has(r){return ao.call(this,r,!0)},add:al("add"),set:al("set"),delete:al("delete"),clear:al("clear"),forEach:co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=po(r,!1,!1),n[r]=po(r,!0,!1),l[r]=po(r,!1,!0),t[r]=po(r,!0,!0)}),[e,n,l,t]}const[_8,g8,C8,D8]=A8();function zo(e,l){const n=l?e?D8:C8:e?g8:_8;return(t,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?t:Reflect.get(As(n,a)&&a in t?n:t,a,r)}const E8={get:zo(!1,!1)},F8={get:zo(!1,!0)},k8={get:zo(!0,!1)},x8={get:zo(!0,!0)};function Uc(e,l,n){const t=ms(n);if(t!==n&&l.call(e,t)){const a=aa(e);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const qc=new WeakMap,Kc=new WeakMap,Jc=new WeakMap,Yc=new WeakMap;function b8(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w8(e){return e.__v_skip||!Object.isExtensible(e)?0:b8(aa(e))}function ee(e){return Vl(e)?e:Wo(e,!1,zc,E8,qc)}function $8(e){return Wo(e,!1,B8,F8,Kc)}function wl(e){return Wo(e,!0,Wc,k8,Jc)}function on(e){return Wo(e,!0,v8,x8,Yc)}function Wo(e,l,n,t,a){if(!Is(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(l&&e.__v_isReactive))return e;const r=a.get(e);if(r)return r;const c=w8(e);if(c===0)return e;const p=new Proxy(e,c===2?t:n);return a.set(e,p),p}function Tl(e){return Vl(e)?Tl(e.__v_raw):!!(e&&e.__v_isReactive)}function Vl(e){return!!(e&&e.__v_isReadonly)}function Dt(e){return!!(e&&e.__v_isShallow)}function Eo(e){return Tl(e)||Vl(e)}function ms(e){const l=e&&e.__v_raw;return l?ms(l):e}function ya(e){return Co(e,"__v_skip",!0),e}const zn=e=>Is(e)?ee(e):e,ua=e=>Is(e)?wl(e):e;function da(e){yl&&re&&(e=ms(e),Vc(e.dep||(e.dep=ca()),{target:e,type:"get",key:"value"}))}function fa(e,l){e=ms(e),e.dep&&Ct(e.dep,{target:e,type:"set",key:"value",newValue:l})}function Ds(e){return!!(e&&e.__v_isRef===!0)}function ns(e){return Zc(e,!1)}function je(e){return Zc(e,!0)}function Zc(e,l){return Ds(e)?e:new S8(e,l)}class S8{constructor(l,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?l:ms(l),this._value=n?l:zn(l)}get value(){return da(this),this._value}set value(l){l=this.__v_isShallow?l:ms(l),Hn(l,this._rawValue)&&(this._rawValue=l,this._value=this.__v_isShallow?l:zn(l),fa(this,l))}}function D(e){return Ds(e)?e.value:e}const P8={get:(e,l,n)=>D(Reflect.get(e,l,n)),set:(e,l,n,t)=>{const a=e[l];return Ds(a)&&!Ds(n)?(a.value=n,!0):Reflect.set(e,l,n,t)}};function Gc(e){return Tl(e)?e:new Proxy(e,P8)}class O8{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:t}=l(()=>da(this),()=>fa(this));this._get=n,this._set=t}get value(){return this._get()}set value(l){this._set(l)}}function Qc(e){return new O8(e)}function T8(e){Eo(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const l=is(e)?new Array(e.length):{};for(const n in e)l[n]=N8(e,n);return l}class M8{constructor(l,n,t){this._object=l,this._key=n,this._defaultValue=t,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function N8(e,l,n){const t=e[l];return Ds(t)?t:new M8(e,l,n)}class L8{constructor(l,n,t,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new pa(l,()=>{this._dirty||(this._dirty=!0,fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=t}get value(){const l=ms(this);return da(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}function R8(e,l,n=!1){let t,a;const r=ds(e);r?(t=e,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(t=e.get,a=e.set);const c=new L8(t,a,r||!a,n);return l&&!n&&(c.effect.onTrack=l.onTrack,c.effect.onTrigger=l.onTrigger),c}const Ml=[];function ho(e){Ml.push(e)}function mo(){Ml.pop()}function R(e,...l){Ul();const n=Ml.length?Ml[Ml.length-1].component:null,t=n&&n.appContext.config.warnHandler,a=I8();if(t)el(t,n,11,[e+l.join(""),n&&n.proxy,a.map(({vnode:r})=>`at <${et(n,r.type)}>`).join(`
`),a]);else{const r=[`[Vue warn]: ${e}`,...l];a.length&&r.push(`
`,...V8(a)),console.warn(...r)}ql()}function I8(){let e=Ml[Ml.length-1];if(!e)return[];const l=[];for(;e;){const n=l[0];n&&n.vnode===e?n.recurseCount++:l.push({vnode:e,recurseCount:0});const t=e.component&&e.component.parent;e=t&&t.vnode}return l}function V8(e){const l=[];return e.forEach((n,t)=>{l.push(...t===0?[]:[`
`],...j8(n))}),l}function j8({vnode:e,recurseCount:l}){const n=l>0?`... (${l} recursive calls)`:"",t=e.component?e.component.parent==null:!1,a=` at <${et(e.component,e.type,t)}`,r=">"+n;return e.props?[a,...H8(e.props),r]:[a+r]}function H8(e){const l=[],n=Object.keys(e);return n.slice(0,3).forEach(t=>{l.push(...Xc(t,e[t]))}),n.length>3&&l.push(" ..."),l}function Xc(e,l,n){return zs(l)?(l=JSON.stringify(l),n?l:[`${e}=${l}`]):typeof l=="number"||typeof l=="boolean"||l==null?n?l:[`${e}=${l}`]:Ds(l)?(l=Xc(e,ms(l.value),!0),n?l:[`${e}=Ref<`,l,">"]):ds(l)?[`${e}=fn${l.name?`<${l.name}>`:""}`]:(l=ms(l),n?l:[`${e}=`,l])}const ha={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function el(e,l,n,t){let a;try{a=t?e(...t):e()}catch(r){Uo(r,l,n)}return a}function Se(e,l,n,t){if(ds(e)){const r=el(e,l,n,t);return r&&ta(r)&&r.catch(c=>{Uo(c,l,n)}),r}const a=[];for(let r=0;r<e.length;r++)a.push(Se(e[r],l,n,t));return a}function Uo(e,l,n,t=!0){const a=l?l.vnode:null;if(l){let r=l.parent;const c=l.proxy,p=ha[n];for(;r;){const y=r.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](e,c,p)===!1)return}r=r.parent}const i=l.appContext.config.errorHandler;if(i){el(i,null,10,[e,c,p]);return}}z8(e,n,a,t)}function z8(e,l,n,t=!0){{const a=ha[l];if(n&&ho(n),R(`Unhandled error${a?` during execution of ${a}`:""}`),n&&mo(),t)throw e;console.error(e)}}let Fo=!1,Et=!1;const ve=[];let Qe=0;const On=[];let sn=null,Cl=0;const Tn=[];let qe=null,Dl=0;const sp=Promise.resolve();let ma=null,Ft=null;const W8=100;function Pe(e){const l=ma||sp;return e?l.then(this?e.bind(this):e):l}function U8(e){let l=Qe+1,n=ve.length;for(;l<n;){const t=l+n>>>1;Wn(ve[t])<e?l=t+1:n=t}return l}function Ba(e){(!ve.length||!ve.includes(e,Fo&&e.allowRecurse?Qe+1:Qe))&&e!==Ft&&(e.id==null?ve.push(e):ve.splice(U8(e.id),0,e),ep())}function ep(){!Fo&&!Et&&(Et=!0,ma=sp.then(tp))}function q8(e){const l=ve.indexOf(e);l>Qe&&ve.splice(l,1)}function lp(e,l,n,t){is(e)?n.push(...e):(!l||!l.includes(e,e.allowRecurse?t+1:t))&&n.push(e),ep()}function K8(e){lp(e,sn,On,Cl)}function np(e){lp(e,qe,Tn,Dl)}function qo(e,l=null){if(On.length){for(Ft=l,sn=[...new Set(On)],On.length=0,e=e||new Map,Cl=0;Cl<sn.length;Cl++)va(e,sn[Cl])||sn[Cl]();sn=null,Cl=0,Ft=null,qo(e,l)}}function op(e){if(qo(),Tn.length){const l=[...new Set(Tn)];if(Tn.length=0,qe){qe.push(...l);return}for(qe=l,e=e||new Map,qe.sort((n,t)=>Wn(n)-Wn(t)),Dl=0;Dl<qe.length;Dl++)va(e,qe[Dl])||qe[Dl]();qe=null,Dl=0}}const Wn=e=>e.id==null?1/0:e.id;function tp(e){Et=!1,Fo=!0,e=e||new Map,qo(e),ve.sort((n,t)=>Wn(n)-Wn(t));const l=n=>va(e,n);try{for(Qe=0;Qe<ve.length;Qe++){const n=ve[Qe];if(n&&n.active!==!1){if(l(n))continue;el(n,null,14)}}}finally{Qe=0,ve.length=0,op(e),Fo=!1,ma=null,(ve.length||On.length||Tn.length)&&tp(e)}}function va(e,l){if(!e.has(l))e.set(l,1);else{const n=e.get(l);if(n>W8){const t=l.ownerInstance,a=t&&Kn(t.type);return R(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(l,n+1)}}let ul=!1;const en=new Set;Mc().__VUE_HMR_RUNTIME__={createRecord:ot(ap),rerender:ot(Z8),reload:ot(G8)};const jl=new Map;function J8(e){const l=e.type.__hmrId;let n=jl.get(l);n||(ap(l,e.type),n=jl.get(l)),n.instances.add(e)}function Y8(e){jl.get(e.type.__hmrId).instances.delete(e)}function ap(e,l){return jl.has(e)?!1:(jl.set(e,{initialDef:Mn(l),instances:new Set}),!0)}function Mn(e){return Rp(e)?e.__vccOpts:e}function Z8(e,l){const n=jl.get(e);n&&(n.initialDef.render=l,[...n.instances].forEach(t=>{l&&(t.render=l,Mn(t.type).render=l),t.renderCache=[],ul=!0,t.update(),ul=!1}))}function G8(e,l){const n=jl.get(e);if(!n)return;l=Mn(l),nr(n.initialDef,l);const t=[...n.instances];for(const a of t){const r=Mn(a.type);en.has(r)||(r!==n.initialDef&&nr(r,l),en.add(r)),a.appContext.optionsCache.delete(a.type),a.ceReload?(en.add(r),a.ceReload(l.styles),en.delete(r)):a.parent?(Ba(a.parent.update),a.parent.type.__asyncLoader&&a.parent.ceReload&&a.parent.ceReload(l.styles)):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}np(()=>{for(const a of t)en.delete(Mn(a.type))})}function nr(e,l){Ks(e,l);for(const n in e)n!=="__file"&&!(n in l)&&delete e[n]}function ot(e){return(l,n)=>{try{return e(l,n)}catch(t){console.error(t),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let kl,$n=[],kt=!1;function lo(e,...l){kl?kl.emit(e,...l):kt||$n.push({event:e,args:l})}function rp(e,l){var n,t;kl=e,kl?(kl.enabled=!0,$n.forEach(({event:a,args:r})=>kl.emit(a,...r)),$n=[]):typeof window<"u"&&window.HTMLElement&&!(!((t=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||t===void 0)&&t.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{rp(r,l)}),setTimeout(()=>{kl||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,kt=!0,$n=[])},3e3)):(kt=!0,$n=[])}function Q8(e,l){lo("app:init",e,l,{Fragment:xs,Text:Qo,Comment:ue,Static:Bo})}function X8(e){lo("app:unmount",e)}const xt=Aa("component:added"),cp=Aa("component:updated"),sy=Aa("component:removed");function Aa(e){return l=>{lo(e,l.appContext.app,l.uid,l.parent?l.parent.uid:void 0,l)}}const ey=pp("perf:start"),ly=pp("perf:end");function pp(e){return(l,n,t)=>{lo(e,l.appContext.app,l.uid,l,n,t)}}function ny(e,l,n){lo("component:emit",e.appContext.app,e,l,n)}function oy(e,l,...n){if(e.isUnmounted)return;const t=e.vnode.props||ks;{const{emitsOptions:u,propsOptions:[d]}=e;if(u)if(!(l in u))(!d||!(gl(l)in d))&&R(`Component emitted event "${l}" but it is neither declared in the emits option nor as an "${gl(l)}" prop.`);else{const f=u[l];ds(f)&&(f(...n)||R(`Invalid event arguments: event validation failed for event "${l}".`))}}let a=n;const r=l.startsWith("update:"),c=r&&l.slice(7);if(c&&c in t){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:d,trim:f}=t[u]||ks;f&&(a=n.map(m=>m.trim())),d&&(a=n.map(s8))}ny(e,l,a);{const u=l.toLowerCase();u!==l&&t[gl(u)]&&R(`Event "${u}" is emitted in component ${et(e,e.type)} but the handler is registered for "${l}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${yn(l)}" instead of "${l}".`)}let p,i=t[p=gl(l)]||t[p=gl(Ve(l))];!i&&r&&(i=t[p=gl(yn(l))]),i&&Se(i,e,6,a);const y=t[p+"Once"];if(y){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,Se(y,e,6,a)}}function ip(e,l,n=!1){const t=l.emitsCache,a=t.get(e);if(a!==void 0)return a;const r=e.emits;let c={},p=!1;if(!ds(e)){const i=y=>{const u=ip(y,l,!0);u&&(p=!0,Ks(c,u))};!n&&l.mixins.length&&l.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!p?(t.set(e,null),null):(is(r)?r.forEach(i=>c[i]=null):Ks(c,r),t.set(e,c),c)}function Ko(e,l){return!e||!Ro(l)?!1:(l=l.slice(2).replace(/Once$/,""),As(e,l[0].toLowerCase()+l.slice(1))||As(e,yn(l))||As(e,l))}let Zs=null,Jo=null;function ko(e){const l=Zs;return Zs=e,Jo=e&&e.type.__scopeId||null,l}function u2(e){Jo=e}function d2(){Jo=null}function C(e,l=Zs,n){if(!l||e._n)return e;const t=(...a)=>{t._d&&mr(-1);const r=ko(l),c=e(...a);return ko(r),t._d&&mr(1),cp(l),c};return t._n=!0,t._c=!0,t._d=!0,t}let bt=!1;function xo(){bt=!0}function tt(e){const{type:l,vnode:n,proxy:t,withProxy:a,props:r,propsOptions:[c],slots:p,attrs:i,emit:y,render:u,renderCache:d,data:f,setupState:m,ctx:B,inheritAttrs:g}=e;let _,w;const E=ko(e);bt=!1;try{if(n.shapeFlag&4){const ss=a||t;_=we(u.call(ss,ss,d,r,m,f,B)),w=i}else{const ss=l;i===r&&xo(),_=we(ss.length>1?ss(r,{get attrs(){return xo(),i},slots:p,emit:y}):ss(r,null)),w=l.props?i:ay(i)}}catch(ss){Ln.length=0,Uo(ss,e,1),_=F(ue)}let $=_,H;if(_.patchFlag>0&&_.patchFlag&2048&&([$,H]=ty(_)),w&&g!==!1){const ss=Object.keys(w),{shapeFlag:K}=$;if(ss.length){if(K&7)c&&ss.some(vt)&&(w=ry(w,c)),$=ol($,w);else if(!bt&&$.type!==ue){const z=Object.keys(i),ts=[],hs=[];for(let fs=0,Cs=z.length;fs<Cs;fs++){const Rs=z[fs];Ro(Rs)?vt(Rs)||ts.push(Rs[2].toLowerCase()+Rs.slice(3)):hs.push(Rs)}hs.length&&R(`Extraneous non-props attributes (${hs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),ts.length&&R(`Extraneous non-emits event listeners (${ts.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(or($)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),$=ol($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&(or($)||R("Component inside <Transition> renders non-element root node that cannot be animated."),$.transition=n.transition),H?H($):_=$,ko(E),_}const ty=e=>{const l=e.children,n=e.dynamicChildren,t=yp(l);if(!t)return[e,void 0];const a=l.indexOf(t),r=n?n.indexOf(t):-1,c=p=>{l[a]=p,n&&(r>-1?n[r]=p:p.patchFlag>0&&(e.dynamicChildren=[...n,p]))};return[we(t),c]};function yp(e){let l;for(let n=0;n<e.length;n++){const t=e[n];if(Hl(t)){if(t.type!==ue||t.children==="v-if"){if(l)return;l=t}}else return}return l}const ay=e=>{let l;for(const n in e)(n==="class"||n==="style"||Ro(n))&&((l||(l={}))[n]=e[n]);return l},ry=(e,l)=>{const n={};for(const t in e)(!vt(t)||!(t.slice(9)in l))&&(n[t]=e[t]);return n},or=e=>e.shapeFlag&7||e.type===ue;function cy(e,l,n){const{props:t,children:a,component:r}=e,{props:c,children:p,patchFlag:i}=l,y=r.emitsOptions;if((a||p)&&ul||l.dirs||l.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return t?tr(t,c,y):!!c;if(i&8){const u=l.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(c[f]!==t[f]&&!Ko(y,f))return!0}}}else return(a||p)&&(!p||!p.$stable)?!0:t===c?!1:t?c?tr(t,c,y):!0:!!c;return!1}function tr(e,l,n){const t=Object.keys(l);if(t.length!==Object.keys(e).length)return!0;for(let a=0;a<t.length;a++){const r=t[a];if(l[r]!==e[r]&&!Ko(n,r))return!0}return!1}function py({vnode:e,parent:l},n){for(;l&&l.subTree===e;)(e=l.vnode).el=n,l=l.parent}const up=e=>e.__isSuspense;function iy(e,l){l&&l.pendingBranch?is(e)?l.effects.push(...e):l.effects.push(e):np(e)}function Be(e,l){if(!Us)R("provide() can only be used inside setup().");else{let n=Us.provides;const t=Us.parent&&Us.parent.provides;t===n&&(n=Us.provides=Object.create(t)),n[e]=l}}function b(e,l,n=!1){const t=Us||Zs;if(t){const a=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&ds(l)?l.call(t.proxy):l;R(`injection "${String(e)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function Bn(e,l){return _a(e,null,l)}const ar={};function js(e,l,n){return ds(l)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),_a(e,l,n)}function _a(e,l,{immediate:n,deep:t,flush:a,onTrack:r,onTrigger:c}=ks){l||(n!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),t!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const p=E=>{R("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},i=Us;let y,u=!1,d=!1;if(Ds(e)?(y=()=>e.value,u=Dt(e)):Tl(e)?(y=()=>e,t=!0):is(e)?(d=!0,u=e.some(E=>Tl(E)||Dt(E)),y=()=>e.map(E=>{if(Ds(E))return E.value;if(Tl(E))return $l(E);if(ds(E))return el(E,i,2);p(E)})):ds(e)?l?y=()=>el(e,i,2):y=()=>{if(!(i&&i.isUnmounted))return f&&f(),Se(e,i,3,[m])}:(y=ye,p(e)),l&&t){const E=y;y=()=>$l(E())}let f,m=E=>{f=w.onStop=()=>{el(E,i,4)}};if(qn)return m=ye,l?n&&Se(l,i,3,[y(),d?[]:void 0,m]):y(),ye;let B=d?[]:ar;const g=()=>{if(w.active)if(l){const E=w.run();(t||u||(d?E.some(($,H)=>Hn($,B[H])):Hn(E,B)))&&(f&&f(),Se(l,i,3,[E,B===ar?void 0:B,m]),B=E)}else w.run()};g.allowRecurse=!!l;let _;a==="sync"?_=g:a==="post"?_=()=>Xs(g,i&&i.suspense):_=()=>K8(g);const w=new pa(y,_);return w.onTrack=r,w.onTrigger=c,l?n?g():B=w.run():a==="post"?Xs(w.run.bind(w),i&&i.suspense):w.run(),()=>{w.stop(),i&&i.scope&&na(i.scope.effects,w)}}function yy(e,l,n){const t=this.proxy,a=zs(e)?e.includes(".")?dp(t,e):()=>t[e]:e.bind(t,t);let r;ds(l)?r=l:(r=l.handler,n=l);const c=Us;fn(this);const p=_a(a,r.bind(t),n);return c?fn(c):Nl(),p}function dp(e,l){const n=l.split(".");return()=>{let t=e;for(let a=0;a<n.length&&t;a++)t=t[n[a]];return t}}function $l(e,l){if(!Is(e)||e.__v_skip||(l=l||new Set,l.has(e)))return e;if(l.add(e),Ds(e))$l(e.value,l);else if(is(e))for(let n=0;n<e.length;n++)$l(e[n],l);else if(Pc(e)||Pl(e))e.forEach(n=>{$l(n,l)});else if(Tc(e))for(const n in e)$l(e[n],l);return e}function fp(e,l){e.shapeFlag&6&&e.component?fp(e.component.subTree,l):e.shapeFlag&128?(e.ssContent.transition=l.clone(e.ssContent),e.ssFallback.transition=l.clone(e.ssFallback)):e.transition=l}function Vs(e){return ds(e)?{setup:e,name:e.name}:e}const rn=e=>!!e.type.__asyncLoader,ga=e=>e.type.__isKeepAlive,uy={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:l}){const n=vl(),t=n.ctx;if(!t.renderer)return()=>{const E=l.default&&l.default();return E&&E.length===1?E[0]:E};const a=new Map,r=new Set;let c=null;n.__v_cache=a;const p=n.suspense,{renderer:{p:i,m:y,um:u,o:{createElement:d}}}=t,f=d("div");t.activate=(E,$,H,ss,K)=>{const z=E.component;y(E,$,H,0,p),i(z.vnode,E,$,H,z,p,ss,E.slotScopeIds,K),Xs(()=>{z.isDeactivated=!1,z.a&&Fl(z.a);const ts=E.props&&E.props.onVnodeMounted;ts&&De(ts,z.parent,E)},p),xt(z)},t.deactivate=E=>{const $=E.component;y(E,f,null,1,p),Xs(()=>{$.da&&Fl($.da);const H=E.props&&E.props.onVnodeUnmounted;H&&De(H,$.parent,E),$.isDeactivated=!0},p),xt($)};function m(E){at(E),u(E,n,p,!0)}function B(E){a.forEach(($,H)=>{const ss=Kn($.type);ss&&(!E||!E(ss))&&g(H)})}function g(E){const $=a.get(E);!c||$.type!==c.type?m($):c&&at(c),a.delete(E),r.delete(E)}js(()=>[e.include,e.exclude],([E,$])=>{E&&B(H=>Sn(E,H)),$&&B(H=>!Sn($,H))},{flush:"post",deep:!0});let _=null;const w=()=>{_!=null&&a.set(_,rt(n.subTree))};return Zo(w),Bp(w),vp(()=>{a.forEach(E=>{const{subTree:$,suspense:H}=n,ss=rt($);if(E.type===ss.type){at(ss);const K=ss.component.da;K&&Xs(K,H);return}m(E)})}),()=>{if(_=null,!l.default)return null;const E=l.default(),$=E[0];if(E.length>1)return R("KeepAlive should contain exactly one component child."),c=null,E;if(!Hl($)||!($.shapeFlag&4)&&!($.shapeFlag&128))return c=null,$;let H=rt($);const ss=H.type,K=Kn(rn(H)?H.type.__asyncResolved||{}:ss),{include:z,exclude:ts,max:hs}=e;if(z&&(!K||!Sn(z,K))||ts&&K&&Sn(ts,K))return c=H,$;const fs=H.key==null?ss:H.key,Cs=a.get(fs);return H.el&&(H=ol(H),$.shapeFlag&128&&($.ssContent=H)),_=fs,Cs?(H.el=Cs.el,H.component=Cs.component,H.transition&&fp(H,H.transition),H.shapeFlag|=512,r.delete(fs),r.add(fs)):(r.add(fs),hs&&r.size>parseInt(hs,10)&&g(r.values().next().value)),H.shapeFlag|=256,c=H,up($.type)?$:H}}},hp=uy;function Sn(e,l){return is(e)?e.some(n=>Sn(n,l)):zs(e)?e.split(",").includes(l):e.test?e.test(l):!1}function dy(e,l){mp(e,"a",l)}function fy(e,l){mp(e,"da",l)}function mp(e,l,n=Us){const t=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Yo(l,t,n),n){let a=n.parent;for(;a&&a.parent;)ga(a.parent.vnode)&&hy(t,l,n,a),a=a.parent}}function hy(e,l,n,t){const a=Yo(l,e,t,!0);Go(()=>{na(t[l],a)},n)}function at(e){let l=e.shapeFlag;l&256&&(l-=256),l&512&&(l-=512),e.shapeFlag=l}function rt(e){return e.shapeFlag&128?e.ssContent:e}function Yo(e,l,n=Us,t=!1){if(n){const a=n[e]||(n[e]=[]),r=l.__weh||(l.__weh=(...c)=>{if(n.isUnmounted)return;Ul(),fn(n);const p=Se(l,n,e,c);return Nl(),ql(),p});return t?a.unshift(r):a.push(r),r}else{const a=gl(ha[e].replace(/ hook$/,""));R(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const tl=e=>(l,n=Us)=>(!qn||e==="sp")&&Yo(e,l,n),my=tl("bm"),Zo=tl("m"),By=tl("bu"),Bp=tl("u"),vp=tl("bum"),Go=tl("um"),vy=tl("sp"),Ay=tl("rtg"),_y=tl("rtc");function gy(e,l=Us){Yo("ec",e,l)}function Ap(e){Gi(e)&&R("Do not use built-in directive ids as custom directive id: "+e)}function He(e,l){const n=Zs;if(n===null)return R("withDirectives can only be used inside render functions."),e;const t=st(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let r=0;r<l.length;r++){let[c,p,i,y=ks]=l[r];ds(c)&&(c={mounted:c,updated:c}),c.deep&&$l(p),a.push({dir:c,instance:t,value:p,oldValue:void 0,arg:i,modifiers:y})}return e}function Al(e,l,n,t){const a=e.dirs,r=l&&l.dirs;for(let c=0;c<a.length;c++){const p=a[c];r&&(p.oldValue=r[c].value);let i=p.dir[t];i&&(Ul(),Se(i,n,8,[e.el,p,e,l]),ql())}}const wt="components",Cy="directives";function Dy(e,l){return _p(wt,e,!0,l)||e}const Ey=Symbol();function Ca(e){return _p(Cy,e)}function _p(e,l,n=!0,t=!1){const a=Zs||Us;if(a){const r=a.type;if(e===wt){const p=Kn(r,!1);if(p&&(p===l||p===Ve(l)||p===un(Ve(l))))return r}const c=rr(a[e]||r[e],l)||rr(a.appContext[e],l);if(!c&&t)return r;if(n&&!c){const p=e===wt?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";R(`Failed to resolve ${e.slice(0,-1)}: ${l}${p}`)}return c}else R(`resolve${un(e.slice(0,-1))} can only be used in render() or setup().`)}function rr(e,l){return e&&(e[l]||e[Ve(l)]||e[un(Ve(l))])}function no(e,l,n,t){let a;const r=n&&n[t];if(is(e)||zs(e)){a=new Array(e.length);for(let c=0,p=e.length;c<p;c++)a[c]=l(e[c],c,void 0,r&&r[c])}else if(typeof e=="number"){Number.isInteger(e)||R(`The v-for range expect an integer value but got ${e}.`),a=new Array(e);for(let c=0;c<e;c++)a[c]=l(c+1,c,void 0,r&&r[c])}else if(Is(e))if(e[Symbol.iterator])a=Array.from(e,(c,p)=>l(c,p,void 0,r&&r[p]));else{const c=Object.keys(e);a=new Array(c.length);for(let p=0,i=c.length;p<i;p++){const y=c[p];a[p]=l(e[y],y,p,r&&r[p])}}else a=[];return n&&(n[t]=a),a}function nl(e,l,n={},t,a){if(Zs.isCE||Zs.parent&&rn(Zs.parent)&&Zs.parent.isCE)return F("slot",l==="default"?null:{name:l},t&&t());let r=e[l];r&&r.length>1&&(R("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),A();const c=r&&gp(r(n)),p=M(xs,{key:n.key||`_${l}`},c||(t?t():[]),c&&e._===1?64:-2);return!a&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),r&&r._c&&(r._d=!0),p}function gp(e){return e.some(l=>Hl(l)?!(l.type===ue||l.type===xs&&!gp(l.children)):!0)?e:null}const $t=e=>e?Mp(e)?st(e)||e.proxy:$t(e.parent):null,dn=Ks(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>on(e.props),$attrs:e=>on(e.attrs),$slots:e=>on(e.slots),$refs:e=>on(e.refs),$parent:e=>$t(e.parent),$root:e=>$t(e.root),$emit:e=>e.emit,$options:e=>Ep(e),$forceUpdate:e=>e.f||(e.f=()=>Ba(e.update)),$nextTick:e=>e.n||(e.n=Pe.bind(e.proxy)),$watch:e=>yy.bind(e)}),Da=e=>e==="_"||e==="$",Cp={get({_:e},l){const{ctx:n,setupState:t,data:a,props:r,accessCache:c,type:p,appContext:i}=e;if(l==="__isVue")return!0;if(t!==ks&&t.__isScriptSetup&&As(t,l))return t[l];let y;if(l[0]!=="$"){const m=c[l];if(m!==void 0)switch(m){case 1:return t[l];case 2:return a[l];case 4:return n[l];case 3:return r[l]}else{if(t!==ks&&As(t,l))return c[l]=1,t[l];if(a!==ks&&As(a,l))return c[l]=2,a[l];if((y=e.propsOptions[0])&&As(y,l))return c[l]=3,r[l];if(n!==ks&&As(n,l))return c[l]=4,n[l];St&&(c[l]=0)}}const u=dn[l];let d,f;if(u)return l==="$attrs"&&(_e(e,"get",l),xo()),u(e);if((d=p.__cssModules)&&(d=d[l]))return d;if(n!==ks&&As(n,l))return c[l]=4,n[l];if(f=i.config.globalProperties,As(f,l))return f[l];Zs&&(!zs(l)||l.indexOf("__v")!==0)&&(a!==ks&&Da(l[0])&&As(a,l)?R(`Property ${JSON.stringify(l)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Zs&&R(`Property ${JSON.stringify(l)} was accessed during render but is not defined on instance.`))},set({_:e},l,n){const{data:t,setupState:a,ctx:r}=e;return a!==ks&&As(a,l)?(a[l]=n,!0):t!==ks&&As(t,l)?(t[l]=n,!0):As(e.props,l)?(R(`Attempting to mutate prop "${l}". Props are readonly.`,e),!1):l[0]==="$"&&l.slice(1)in e?(R(`Attempting to mutate public property "${l}". Properties starting with $ are reserved and readonly.`,e),!1):(l in e.appContext.config.globalProperties?Object.defineProperty(r,l,{enumerable:!0,configurable:!0,value:n}):r[l]=n,!0)},has({_:{data:e,setupState:l,accessCache:n,ctx:t,appContext:a,propsOptions:r}},c){let p;return!!n[c]||e!==ks&&As(e,c)||l!==ks&&As(l,c)||(p=r[0])&&As(p,c)||As(t,c)||As(dn,c)||As(a.config.globalProperties,c)},defineProperty(e,l,n){return n.get!=null?e._.accessCache[l]=0:As(n,"value")&&this.set(e,l,n.value,null),Reflect.defineProperty(e,l,n)}};Cp.ownKeys=e=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Fy(e){const l={};return Object.defineProperty(l,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(dn).forEach(n=>{Object.defineProperty(l,n,{configurable:!0,enumerable:!1,get:()=>dn[n](e),set:ye})}),l}function ky(e){const{ctx:l,propsOptions:[n]}=e;n&&Object.keys(n).forEach(t=>{Object.defineProperty(l,t,{enumerable:!0,configurable:!0,get:()=>e.props[t],set:ye})})}function xy(e){const{ctx:l,setupState:n}=e;Object.keys(ms(n)).forEach(t=>{if(!n.__isScriptSetup){if(Da(t[0])){R(`setup() return property ${JSON.stringify(t)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(l,t,{enumerable:!0,configurable:!0,get:()=>n[t],set:ye})}})}function by(){const e=Object.create(null);return(l,n)=>{e[n]?R(`${l} property "${n}" is already defined in ${e[n]}.`):e[n]=l}}let St=!0;function wy(e){const l=Ep(e),n=e.proxy,t=e.ctx;St=!1,l.beforeCreate&&cr(l.beforeCreate,e,"bc");const{data:a,computed:r,methods:c,watch:p,provide:i,inject:y,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:B,activated:g,deactivated:_,beforeDestroy:w,beforeUnmount:E,destroyed:$,unmounted:H,render:ss,renderTracked:K,renderTriggered:z,errorCaptured:ts,serverPrefetch:hs,expose:fs,inheritAttrs:Cs,components:Rs,directives:Js,filters:Qs}=l,Ps=by();{const[Q]=e.propsOptions;if(Q)for(const rs in Q)Ps("Props",rs)}if(y&&$y(y,t,Ps,e.appContext.config.unwrapInjectedRef),c)for(const Q in c){const rs=c[Q];ds(rs)?(Object.defineProperty(t,Q,{value:rs.bind(n),configurable:!0,enumerable:!0,writable:!0}),Ps("Methods",Q)):R(`Method "${Q}" has type "${typeof rs}" in the component definition. Did you reference the function correctly?`)}if(a){ds(a)||R("The data option must be a function. Plain object usage is no longer supported.");const Q=a.call(n,n);if(ta(Q)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Is(Q))R("data() should return an object.");else{e.data=ee(Q);for(const rs in Q)Ps("Data",rs),Da(rs[0])||Object.defineProperty(t,rs,{configurable:!0,enumerable:!0,get:()=>Q[rs],set:ye})}}if(St=!0,r)for(const Q in r){const rs=r[Q],vs=ds(rs)?rs.bind(n,n):ds(rs.get)?rs.get.bind(n,n):ye;vs===ye&&R(`Computed property "${Q}" has no getter.`);const bs=!ds(rs)&&ds(rs.set)?rs.set.bind(n):()=>{R(`Write operation failed: computed property "${Q}" is readonly.`)},Ce=T({get:vs,set:bs});Object.defineProperty(t,Q,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:ie=>Ce.value=ie}),Ps("Computed",Q)}if(p)for(const Q in p)Dp(p[Q],t,n,Q);if(i){const Q=ds(i)?i.call(n):i;Reflect.ownKeys(Q).forEach(rs=>{Be(rs,Q[rs])})}u&&cr(u,e,"c");function Ns(Q,rs){is(rs)?rs.forEach(vs=>Q(vs.bind(n))):rs&&Q(rs.bind(n))}if(Ns(my,d),Ns(Zo,f),Ns(By,m),Ns(Bp,B),Ns(dy,g),Ns(fy,_),Ns(gy,ts),Ns(_y,K),Ns(Ay,z),Ns(vp,E),Ns(Go,H),Ns(vy,hs),is(fs))if(fs.length){const Q=e.exposed||(e.exposed={});fs.forEach(rs=>{Object.defineProperty(Q,rs,{get:()=>n[rs],set:vs=>n[rs]=vs})})}else e.exposed||(e.exposed={});ss&&e.render===ye&&(e.render=ss),Cs!=null&&(e.inheritAttrs=Cs),Rs&&(e.components=Rs),Js&&(e.directives=Js)}function $y(e,l,n=ye,t=!1){is(e)&&(e=Pt(e));for(const a in e){const r=e[a];let c;Is(r)?"default"in r?c=b(r.from||a,r.default,!0):c=b(r.from||a):c=b(r),Ds(c)?t?Object.defineProperty(l,a,{enumerable:!0,configurable:!0,get:()=>c.value,set:p=>c.value=p}):(R(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),l[a]=c):l[a]=c,n("Inject",a)}}function cr(e,l,n){Se(is(e)?e.map(t=>t.bind(l.proxy)):e.bind(l.proxy),l,n)}function Dp(e,l,n,t){const a=t.includes(".")?dp(n,t):()=>n[t];if(zs(e)){const r=l[e];ds(r)?js(a,r):R(`Invalid watch handler specified by key "${e}"`,r)}else if(ds(e))js(a,e.bind(n));else if(Is(e))if(is(e))e.forEach(r=>Dp(r,l,n,t));else{const r=ds(e.handler)?e.handler.bind(n):l[e.handler];ds(r)?js(a,r,e):R(`Invalid watch handler specified by key "${e.handler}"`,r)}else R(`Invalid watch option: "${t}"`,e)}function Ep(e){const l=e.type,{mixins:n,extends:t}=l,{mixins:a,optionsCache:r,config:{optionMergeStrategies:c}}=e.appContext,p=r.get(l);let i;return p?i=p:!a.length&&!n&&!t?i=l:(i={},a.length&&a.forEach(y=>bo(i,y,c,!0)),bo(i,l,c)),r.set(l,i),i}function bo(e,l,n,t=!1){const{mixins:a,extends:r}=l;r&&bo(e,r,n,!0),a&&a.forEach(c=>bo(e,c,n,!0));for(const c in l)if(t&&c==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const p=Sy[c]||n&&n[c];e[c]=p?p(e[c],l[c]):l[c]}return e}const Sy={data:pr,props:El,emits:El,methods:El,computed:El,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:El,directives:El,watch:Oy,provide:pr,inject:Py};function pr(e,l){return l?e?function(){return Ks(ds(e)?e.call(this,this):e,ds(l)?l.call(this,this):l)}:l:e}function Py(e,l){return El(Pt(e),Pt(l))}function Pt(e){if(is(e)){const l={};for(let n=0;n<e.length;n++)l[e[n]]=e[n];return l}return e}function te(e,l){return e?[...new Set([].concat(e,l))]:l}function El(e,l){return e?Ks(Ks(Object.create(null),e),l):l}function Oy(e,l){if(!e)return l;if(!l)return e;const n=Ks(Object.create(null),e);for(const t in l)n[t]=te(e[t],l[t]);return n}function Ty(e,l,n,t=!1){const a={},r={};Co(r,Xo,1),e.propsDefaults=Object.create(null),Fp(e,l,a,r);for(const c in e.propsOptions[0])c in a||(a[c]=void 0);xp(l||{},a,e),n?e.props=t?a:$8(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function My(e,l,n,t){const{props:a,attrs:r,vnode:{patchFlag:c}}=e,p=ms(a),[i]=e.propsOptions;let y=!1;if(!(e.type.__hmrId||e.parent&&e.parent.type.__hmrId)&&(t||c>0)&&!(c&16)){if(c&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ko(e.emitsOptions,f))continue;const m=l[f];if(i)if(As(r,f))m!==r[f]&&(r[f]=m,y=!0);else{const B=Ve(f);a[B]=Ot(i,p,B,m,e,!1)}else m!==r[f]&&(r[f]=m,y=!0)}}}else{Fp(e,l,a,r)&&(y=!0);let u;for(const d in p)(!l||!As(l,d)&&((u=yn(d))===d||!As(l,u)))&&(i?n&&(n[d]!==void 0||n[u]!==void 0)&&(a[d]=Ot(i,p,d,void 0,e,!0)):delete a[d]);if(r!==p)for(const d in r)(!l||!As(l,d))&&(delete r[d],y=!0)}y&&ll(e,"set","$attrs"),xp(l||{},a,e)}function Fp(e,l,n,t){const[a,r]=e.propsOptions;let c=!1,p;if(l)for(let i in l){if(fo(i))continue;const y=l[i];let u;a&&As(a,u=Ve(i))?!r||!r.includes(u)?n[u]=y:(p||(p={}))[u]=y:Ko(e.emitsOptions,i)||(!(i in t)||y!==t[i])&&(t[i]=y,c=!0)}if(r){const i=ms(n),y=p||ks;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ot(a,i,d,y[d],e,!As(y,d))}}return c}function Ot(e,l,n,t,a,r){const c=e[n];if(c!=null){const p=As(c,"default");if(p&&t===void 0){const i=c.default;if(c.type!==Function&&ds(i)){const{propsDefaults:y}=a;n in y?t=y[n]:(fn(a),t=y[n]=i.call(null,l),Nl())}else t=i}c[0]&&(r&&!p?t=!1:c[1]&&(t===""||t===yn(n))&&(t=!0))}return t}function kp(e,l,n=!1){const t=l.propsCache,a=t.get(e);if(a)return a;const r=e.props,c={},p=[];let i=!1;if(!ds(e)){const u=d=>{i=!0;const[f,m]=kp(d,l,!0);Ks(c,f),m&&p.push(...m)};!n&&l.mixins.length&&l.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!i)return t.set(e,an),an;if(is(r))for(let u=0;u<r.length;u++){zs(r[u])||R("props must be strings when using array syntax.",r[u]);const d=Ve(r[u]);ir(d)&&(c[d]=ks)}else if(r){Is(r)||R("invalid props options",r);for(const u in r){const d=Ve(u);if(ir(d)){const f=r[u],m=c[d]=is(f)||ds(f)?{type:f}:f;if(m){const B=ur(Boolean,m.type),g=ur(String,m.type);m[0]=B>-1,m[1]=g<0||B<g,(B>-1||As(m,"default"))&&p.push(d)}}}}const y=[c,p];return t.set(e,y),y}function ir(e){return e[0]!=="$"?!0:(R(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Tt(e){const l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:e===null?"null":""}function yr(e,l){return Tt(e)===Tt(l)}function ur(e,l){return is(l)?l.findIndex(n=>yr(n,e)):ds(l)&&yr(l,e)?0:-1}function xp(e,l,n){const t=ms(l),a=n.propsOptions[0];for(const r in a){let c=a[r];c!=null&&Ny(r,t[r],c,!As(e,r)&&!As(e,yn(r)))}}function Ny(e,l,n,t){const{type:a,required:r,validator:c}=n;if(r&&t){R('Missing required prop: "'+e+'"');return}if(!(l==null&&!n.required)){if(a!=null&&a!==!0){let p=!1;const i=is(a)?a:[a],y=[];for(let u=0;u<i.length&&!p;u++){const{valid:d,expectedType:f}=Ry(l,i[u]);y.push(f||""),p=d}if(!p){R(Iy(e,l,y));return}}c&&!c(l)&&R('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Ly=eo("String,Number,Boolean,Function,Symbol,BigInt");function Ry(e,l){let n;const t=Tt(l);if(Ly(t)){const a=typeof e;n=a===t.toLowerCase(),!n&&a==="object"&&(n=e instanceof l)}else t==="Object"?n=Is(e):t==="Array"?n=is(e):t==="null"?n=e===null:n=e instanceof l;return{valid:n,expectedType:t}}function Iy(e,l,n){let t=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(un).join(" | ")}`;const a=n[0],r=aa(l),c=dr(l,a),p=dr(l,r);return n.length===1&&fr(a)&&!Vy(a,r)&&(t+=` with value ${c}`),t+=`, got ${r} `,fr(r)&&(t+=`with value ${p}.`),t}function dr(e,l){return l==="String"?`"${e}"`:l==="Number"?`${Number(e)}`:`${e}`}function fr(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function Vy(...e){return e.some(l=>l.toLowerCase()==="boolean")}const bp=e=>e[0]==="_"||e==="$stable",Ea=e=>is(e)?e.map(we):[we(e)],jy=(e,l,n)=>{if(l._n)return l;const t=C((...a)=>(Us&&R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ea(l(...a))),n);return t._c=!1,t},wp=(e,l,n)=>{const t=e._ctx;for(const a in e){if(bp(a))continue;const r=e[a];if(ds(r))l[a]=jy(a,r,t);else if(r!=null){R(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const c=Ea(r);l[a]=()=>c}}},$p=(e,l)=>{ga(e.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Ea(l);e.slots.default=()=>n},Hy=(e,l)=>{if(e.vnode.shapeFlag&32){const n=l._;n?(e.slots=ms(l),Co(l,"_",n)):wp(l,e.slots={})}else e.slots={},l&&$p(e,l);Co(e.slots,Xo,1)},zy=(e,l,n)=>{const{vnode:t,slots:a}=e;let r=!0,c=ks;if(t.shapeFlag&32){const p=l._;p?ul?Ks(a,l):n&&p===1?r=!1:(Ks(a,l),!n&&p===1&&delete a._):(r=!l.$stable,wp(l,a)),c=l}else l&&($p(e,l),c={default:1});if(r)for(const p in a)!bp(p)&&!(p in c)&&delete a[p]};function Sp(){return{app:null,config:{isNativeTag:Sc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wy=0;function Uy(e,l){return function(t,a=null){ds(t)||(t=Object.assign({},t)),a!=null&&!Is(a)&&(R("root props passed to app.mount() must be an object."),a=null);const r=Sp(),c=new Set;let p=!1;const i=r.app={_uid:Wy++,_component:t,_props:a,_container:null,_context:r,_instance:null,version:vr,get config(){return r.config},set config(y){R("app.config cannot be replaced. Modify individual options instead.")},use(y,...u){return c.has(y)?R("Plugin has already been applied to target app."):y&&ds(y.install)?(c.add(y),y.install(i,...u)):ds(y)?(c.add(y),y(i,...u)):R('A plugin must either be a function or an object with an "install" function.'),i},mixin(y){return r.mixins.includes(y)?R("Mixin has already been applied to target app"+(y.name?`: ${y.name}`:"")):r.mixins.push(y),i},component(y,u){return Lt(y,r.config),u?(r.components[y]&&R(`Component "${y}" has already been registered in target app.`),r.components[y]=u,i):r.components[y]},directive(y,u){return Ap(y),u?(r.directives[y]&&R(`Directive "${y}" has already been registered in target app.`),r.directives[y]=u,i):r.directives[y]},mount(y,u,d){if(p)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{y.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=F(t,a);return f.appContext=r,r.reload=()=>{e(ol(f),y,d)},u&&l?l(f,y):e(f,y,d),p=!0,i._container=y,y.__vue_app__=i,i._instance=f.component,Q8(i,vr),st(f.component)||f.component.proxy}},unmount(){p?(e(null,i._container),i._instance=null,X8(i),delete i._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(y,u){return y in r.provides&&R(`App already provides property with key "${String(y)}". It will be overwritten with the new value.`),r.provides[y]=u,i}};return i}}function Mt(e,l,n,t,a=!1){if(is(e)){e.forEach((f,m)=>Mt(f,l&&(is(l)?l[m]:l),n,t,a));return}if(rn(t)&&!a)return;const r=t.shapeFlag&4?st(t.component)||t.component.proxy:t.el,c=a?null:r,{i:p,r:i}=e;if(!p){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const y=l&&l.r,u=p.refs===ks?p.refs={}:p.refs,d=p.setupState;if(y!=null&&y!==i&&(zs(y)?(u[y]=null,As(d,y)&&(d[y]=null)):Ds(y)&&(y.value=null)),ds(i))el(i,p,12,[c,u]);else{const f=zs(i),m=Ds(i);if(f||m){const B=()=>{if(e.f){const g=f?u[i]:i.value;a?is(g)&&na(g,r):is(g)?g.includes(r)||g.push(r):f?(u[i]=[r],As(d,i)&&(d[i]=u[i])):(i.value=[r],e.k&&(u[e.k]=i.value))}else f?(u[i]=c,As(d,i)&&(d[i]=c)):m?(i.value=c,e.k&&(u[e.k]=c)):R("Invalid template ref type:",i,`(${typeof i})`)};c?(B.id=-1,Xs(B,n)):B()}else R("Invalid template ref type:",i,`(${typeof i})`)}}let _n,il;function Ke(e,l){e.appContext.config.performance&&wo()&&il.mark(`vue-${l}-${e.uid}`),ey(e,l,wo()?il.now():Date.now())}function Je(e,l){if(e.appContext.config.performance&&wo()){const n=`vue-${l}-${e.uid}`,t=n+":end";il.mark(t),il.measure(`<${et(e,e.type)}> ${l}`,n,t),il.clearMarks(n),il.clearMarks(t)}ly(e,l,wo()?il.now():Date.now())}function wo(){return _n!==void 0||(typeof window<"u"&&window.performance?(_n=!0,il=window.performance):_n=!1),_n}function qy(){const e=[];if(e.length){const l=e.length>1;console.warn(`Feature flag${l?"s":""} ${e.join(", ")} ${l?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Xs=iy;function Ky(e){return Jy(e)}function Jy(e,l){qy();const n=Mc();n.__VUE__=!0,rp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:t,remove:a,patchProp:r,createElement:c,createText:p,createComment:i,setText:y,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=ye,cloneNode:B,insertStaticContent:g}=e,_=(h,v,k,N=null,O=null,V=null,U=!1,I=null,j=ul?!1:!!v.dynamicChildren)=>{if(h===v)return;h&&!gn(h,v)&&(N=Bs(h),de(h,O,V,!0),h=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:L,ref:os,shapeFlag:ls}=v;switch(L){case Qo:w(h,v,k,N);break;case ue:E(h,v,k,N);break;case Bo:h==null?$(v,k,N,U):H(h,v,k,U);break;case xs:Qs(h,v,k,N,O,V,U,I,j);break;default:ls&1?z(h,v,k,N,O,V,U,I,j):ls&6?Ps(h,v,k,N,O,V,U,I,j):ls&64||ls&128?L.process(h,v,k,N,O,V,U,I,j,cs):R("Invalid VNode type:",L,`(${typeof L})`)}os!=null&&O&&Mt(os,h&&h.ref,V,v||h,!v)},w=(h,v,k,N)=>{if(h==null)t(v.el=p(v.children),k,N);else{const O=v.el=h.el;v.children!==h.children&&y(O,v.children)}},E=(h,v,k,N)=>{h==null?t(v.el=i(v.children||""),k,N):v.el=h.el},$=(h,v,k,N)=>{[h.el,h.anchor]=g(h.children,v,k,N,h.el,h.anchor)},H=(h,v,k,N)=>{if(v.children!==h.children){const O=f(h.anchor);K(h),[v.el,v.anchor]=g(v.children,k,O,N)}else v.el=h.el,v.anchor=h.anchor},ss=({el:h,anchor:v},k,N)=>{let O;for(;h&&h!==v;)O=f(h),t(h,k,N),h=O;t(v,k,N)},K=({el:h,anchor:v})=>{let k;for(;h&&h!==v;)k=f(h),a(h),h=k;a(v)},z=(h,v,k,N,O,V,U,I,j)=>{U=U||v.type==="svg",h==null?ts(v,k,N,O,V,U,I,j):Cs(h,v,O,V,U,I,j)},ts=(h,v,k,N,O,V,U,I)=>{let j,L;const{type:os,props:ls,shapeFlag:as,transition:us,patchFlag:Es,dirs:Ss}=h;{if(j=h.el=c(h.type,V,ls&&ls.is,ls),as&8?u(j,h.children):as&16&&fs(h.children,j,null,N,O,V&&os!=="foreignObject",U,I),Ss&&Al(h,null,N,"created"),ls){for(const Ls in ls)Ls!=="value"&&!fo(Ls)&&r(j,Ls,null,ls[Ls],V,h.children,N,O,X);"value"in ls&&r(j,"value",null,ls.value),(L=ls.onVnodeBeforeMount)&&De(L,N,h)}hs(j,h,h.scopeId,U,N)}Object.defineProperty(j,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(j,"__vueParentComponent",{value:N,enumerable:!1}),Ss&&Al(h,null,N,"beforeMount");const Os=(!O||O&&!O.pendingBranch)&&us&&!us.persisted;Os&&us.beforeEnter(j),t(j,v,k),((L=ls&&ls.onVnodeMounted)||Os||Ss)&&Xs(()=>{L&&De(L,N,h),Os&&us.enter(j),Ss&&Al(h,null,N,"mounted")},O)},hs=(h,v,k,N,O)=>{if(k&&m(h,k),N)for(let V=0;V<N.length;V++)m(h,N[V]);if(O){let V=O.subTree;if(V.patchFlag>0&&V.patchFlag&2048&&(V=yp(V.children)||V),v===V){const U=O.vnode;hs(h,U,U.scopeId,U.slotScopeIds,O.parent)}}},fs=(h,v,k,N,O,V,U,I,j=0)=>{for(let L=j;L<h.length;L++){const os=h[L]=I?cl(h[L]):we(h[L]);_(null,os,v,k,N,O,V,U,I)}},Cs=(h,v,k,N,O,V,U)=>{const I=v.el=h.el;let{patchFlag:j,dynamicChildren:L,dirs:os}=v;j|=h.patchFlag&16;const ls=h.props||ks,as=v.props||ks;let us;k&&_l(k,!1),(us=as.onVnodeBeforeUpdate)&&De(us,k,v,h),os&&Al(v,h,k,"beforeUpdate"),k&&_l(k,!0),ul&&(j=0,U=!1,L=null);const Es=O&&v.type!=="foreignObject";if(L?(Rs(h.dynamicChildren,L,I,k,N,Es,V),k&&k.type.__hmrId&&Nn(h,v)):U||bs(h,v,I,null,k,N,Es,V,!1),j>0){if(j&16)Js(I,v,ls,as,k,N,O);else if(j&2&&ls.class!==as.class&&r(I,"class",null,as.class,O),j&4&&r(I,"style",ls.style,as.style,O),j&8){const Ss=v.dynamicProps;for(let Os=0;Os<Ss.length;Os++){const Ls=Ss[Os],ke=ls[Ls],Yl=as[Ls];(Yl!==ke||Ls==="value")&&r(I,Ls,ke,Yl,O,h.children,k,N,X)}}j&1&&h.children!==v.children&&u(I,v.children)}else!U&&L==null&&Js(I,v,ls,as,k,N,O);((us=as.onVnodeUpdated)||os)&&Xs(()=>{us&&De(us,k,v,h),os&&Al(v,h,k,"updated")},N)},Rs=(h,v,k,N,O,V,U)=>{for(let I=0;I<v.length;I++){const j=h[I],L=v[I],os=j.el&&(j.type===xs||!gn(j,L)||j.shapeFlag&70)?d(j.el):k;_(j,L,os,null,N,O,V,U,!0)}},Js=(h,v,k,N,O,V,U)=>{if(k!==N){for(const I in N){if(fo(I))continue;const j=N[I],L=k[I];j!==L&&I!=="value"&&r(h,I,L,j,U,v.children,O,V,X)}if(k!==ks)for(const I in k)!fo(I)&&!(I in N)&&r(h,I,k[I],null,U,v.children,O,V,X);"value"in N&&r(h,"value",k.value,N.value)}},Qs=(h,v,k,N,O,V,U,I,j)=>{const L=v.el=h?h.el:p(""),os=v.anchor=h?h.anchor:p("");let{patchFlag:ls,dynamicChildren:as,slotScopeIds:us}=v;(ul||ls&2048)&&(ls=0,j=!1,as=null),us&&(I=I?I.concat(us):us),h==null?(t(L,k,N),t(os,k,N),fs(v.children,k,os,O,V,U,I,j)):ls>0&&ls&64&&as&&h.dynamicChildren?(Rs(h.dynamicChildren,as,k,O,V,U,I),O&&O.type.__hmrId?Nn(h,v):(v.key!=null||O&&v===O.subTree)&&Nn(h,v,!0)):bs(h,v,k,os,O,V,U,I,j)},Ps=(h,v,k,N,O,V,U,I,j)=>{v.slotScopeIds=I,h==null?v.shapeFlag&512?O.ctx.activate(v,k,N,U,j):Ns(v,k,N,O,V,U,j):Q(h,v,j)},Ns=(h,v,k,N,O,V,U)=>{const I=h.component=ou(h,N,O);if(I.type.__hmrId&&J8(I),ho(h),Ke(I,"mount"),ga(h)&&(I.ctx.renderer=cs),Ke(I,"init"),au(I),Je(I,"init"),I.asyncDep){if(O&&O.registerDep(I,rs),!h.el){const j=I.subTree=F(ue);E(null,j,v,k)}return}rs(I,h,v,k,O,V,U),mo(),Je(I,"mount")},Q=(h,v,k)=>{const N=v.component=h.component;if(cy(h,v,k))if(N.asyncDep&&!N.asyncResolved){ho(v),vs(N,v,k),mo();return}else N.next=v,q8(N.update),N.update();else v.el=h.el,N.vnode=v},rs=(h,v,k,N,O,V,U)=>{const I=()=>{if(h.isMounted){let{next:os,bu:ls,u:as,parent:us,vnode:Es}=h,Ss=os,Os;ho(os||h.vnode),_l(h,!1),os?(os.el=Es.el,vs(h,os,U)):os=Es,ls&&Fl(ls),(Os=os.props&&os.props.onVnodeBeforeUpdate)&&De(Os,us,os,Es),_l(h,!0),Ke(h,"render");const Ls=tt(h);Je(h,"render");const ke=h.subTree;h.subTree=Ls,Ke(h,"patch"),_(ke,Ls,d(ke.el),Bs(ke),h,O,V),Je(h,"patch"),os.el=Ls.el,Ss===null&&py(h,Ls.el),as&&Xs(as,O),(Os=os.props&&os.props.onVnodeUpdated)&&Xs(()=>De(Os,us,os,Es),O),cp(h),mo()}else{let os;const{el:ls,props:as}=v,{bm:us,m:Es,parent:Ss}=h,Os=rn(v);if(_l(h,!1),us&&Fl(us),!Os&&(os=as&&as.onVnodeBeforeMount)&&De(os,Ss,v),_l(h,!0),ls&&Ms){const Ls=()=>{Ke(h,"render"),h.subTree=tt(h),Je(h,"render"),Ke(h,"hydrate"),Ms(ls,h.subTree,h,O,null),Je(h,"hydrate")};Os?v.type.__asyncLoader().then(()=>!h.isUnmounted&&Ls()):Ls()}else{Ke(h,"render");const Ls=h.subTree=tt(h);Je(h,"render"),Ke(h,"patch"),_(null,Ls,k,N,h,O,V),Je(h,"patch"),v.el=Ls.el}if(Es&&Xs(Es,O),!Os&&(os=as&&as.onVnodeMounted)){const Ls=v;Xs(()=>De(os,Ss,Ls),O)}(v.shapeFlag&256||Ss&&rn(Ss.vnode)&&Ss.vnode.shapeFlag&256)&&h.a&&Xs(h.a,O),h.isMounted=!0,xt(h),v=k=N=null}},j=h.effect=new pa(I,()=>Ba(L),h.scope),L=h.update=()=>j.run();L.id=h.uid,_l(h,!0),j.onTrack=h.rtc?os=>Fl(h.rtc,os):void 0,j.onTrigger=h.rtg?os=>Fl(h.rtg,os):void 0,L.ownerInstance=h,L()},vs=(h,v,k)=>{v.component=h;const N=h.vnode.props;h.vnode=v,h.next=null,My(h,v.props,N,k),zy(h,v.children,k),Ul(),qo(void 0,h.update),ql()},bs=(h,v,k,N,O,V,U,I,j=!1)=>{const L=h&&h.children,os=h?h.shapeFlag:0,ls=v.children,{patchFlag:as,shapeFlag:us}=v;if(as>0){if(as&128){ie(L,ls,k,N,O,V,U,I,j);return}else if(as&256){Ce(L,ls,k,N,O,V,U,I,j);return}}us&8?(os&16&&X(L,O,V),ls!==L&&u(k,ls)):os&16?us&16?ie(L,ls,k,N,O,V,U,I,j):X(L,O,V,!0):(os&8&&u(k,""),us&16&&fs(ls,k,N,O,V,U,I,j))},Ce=(h,v,k,N,O,V,U,I,j)=>{h=h||an,v=v||an;const L=h.length,os=v.length,ls=Math.min(L,os);let as;for(as=0;as<ls;as++){const us=v[as]=j?cl(v[as]):we(v[as]);_(h[as],us,k,null,O,V,U,I,j)}L>os?X(h,O,V,!0,!1,ls):fs(v,k,N,O,V,U,I,j,ls)},ie=(h,v,k,N,O,V,U,I,j)=>{let L=0;const os=v.length;let ls=h.length-1,as=os-1;for(;L<=ls&&L<=as;){const us=h[L],Es=v[L]=j?cl(v[L]):we(v[L]);if(gn(us,Es))_(us,Es,k,null,O,V,U,I,j);else break;L++}for(;L<=ls&&L<=as;){const us=h[ls],Es=v[as]=j?cl(v[as]):we(v[as]);if(gn(us,Es))_(us,Es,k,null,O,V,U,I,j);else break;ls--,as--}if(L>ls){if(L<=as){const us=as+1,Es=us<os?v[us].el:N;for(;L<=as;)_(null,v[L]=j?cl(v[L]):we(v[L]),k,Es,O,V,U,I,j),L++}}else if(L>as)for(;L<=ls;)de(h[L],O,V,!0),L++;else{const us=L,Es=L,Ss=new Map;for(L=Es;L<=as;L++){const oe=v[L]=j?cl(v[L]):we(v[L]);oe.key!=null&&(Ss.has(oe.key)&&R("Duplicate keys found during update:",JSON.stringify(oe.key),"Make sure keys are unique."),Ss.set(oe.key,L))}let Os,Ls=0;const ke=as-Es+1;let Yl=!1,qa=0;const An=new Array(ke);for(L=0;L<ke;L++)An[L]=0;for(L=us;L<=ls;L++){const oe=h[L];if(Ls>=ke){de(oe,O,V,!0);continue}let Ne;if(oe.key!=null)Ne=Ss.get(oe.key);else for(Os=Es;Os<=as;Os++)if(An[Os-Es]===0&&gn(oe,v[Os])){Ne=Os;break}Ne===void 0?de(oe,O,V,!0):(An[Ne-Es]=L+1,Ne>=qa?qa=Ne:Yl=!0,_(oe,v[Ne],k,null,O,V,U,I,j),Ls++)}const Ka=Yl?Yy(An):an;for(Os=Ka.length-1,L=ke-1;L>=0;L--){const oe=Es+L,Ne=v[oe],Ja=oe+1<os?v[oe+1].el:N;An[L]===0?_(null,Ne,k,Ja,O,V,U,I,j):Yl&&(Os<0||L!==Ka[Os]?Me(Ne,k,Ja,2):Os--)}}},Me=(h,v,k,N,O=null)=>{const{el:V,type:U,transition:I,children:j,shapeFlag:L}=h;if(L&6){Me(h.component.subTree,v,k,N);return}if(L&128){h.suspense.move(v,k,N);return}if(L&64){U.move(h,v,k,cs);return}if(U===xs){t(V,v,k);for(let ls=0;ls<j.length;ls++)Me(j[ls],v,k,N);t(h.anchor,v,k);return}if(U===Bo){ss(h,v,k);return}if(N!==2&&L&1&&I)if(N===0)I.beforeEnter(V),t(V,v,k),Xs(()=>I.enter(V),O);else{const{leave:ls,delayLeave:as,afterLeave:us}=I,Es=()=>t(V,v,k),Ss=()=>{ls(V,()=>{Es(),us&&us()})};as?as(V,Es,Ss):Ss()}else t(V,v,k)},de=(h,v,k,N=!1,O=!1)=>{const{type:V,props:U,ref:I,children:j,dynamicChildren:L,shapeFlag:os,patchFlag:ls,dirs:as}=h;if(I!=null&&Mt(I,null,k,h,!0),os&256){v.ctx.deactivate(h);return}const us=os&1&&as,Es=!rn(h);let Ss;if(Es&&(Ss=U&&U.onVnodeBeforeUnmount)&&De(Ss,v,h),os&6)G(h.component,k,N);else{if(os&128){h.suspense.unmount(k,N);return}us&&Al(h,null,v,"beforeUnmount"),os&64?h.type.remove(h,v,k,O,cs,N):L&&(V!==xs||ls>0&&ls&64)?X(L,v,k,!1,!0):(V===xs&&ls&384||!O&&os&16)&&X(j,v,k),N&&x(h)}(Es&&(Ss=U&&U.onVnodeUnmounted)||us)&&Xs(()=>{Ss&&De(Ss,v,h),us&&Al(h,null,v,"unmounted")},k)},x=h=>{const{type:v,el:k,anchor:N,transition:O}=h;if(v===xs){h.patchFlag>0&&h.patchFlag&2048&&O&&!O.persisted?h.children.forEach(U=>{U.type===ue?a(U.el):x(U)}):es(k,N);return}if(v===Bo){K(h);return}const V=()=>{a(k),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(h.shapeFlag&1&&O&&!O.persisted){const{leave:U,delayLeave:I}=O,j=()=>U(k,V);I?I(h.el,V,j):j()}else V()},es=(h,v)=>{let k;for(;h!==v;)k=f(h),a(h),h=k;a(v)},G=(h,v,k)=>{h.type.__hmrId&&Y8(h);const{bum:N,scope:O,update:V,subTree:U,um:I}=h;N&&Fl(N),O.stop(),V&&(V.active=!1,de(U,h,v,k)),I&&Xs(I,v),Xs(()=>{h.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve()),sy(h)},X=(h,v,k,N=!1,O=!1,V=0)=>{for(let U=V;U<h.length;U++)de(h[U],v,k,N,O)},Bs=h=>h.shapeFlag&6?Bs(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),Fs=(h,v,k)=>{h==null?v._vnode&&de(v._vnode,null,null,!0):_(v._vnode||null,h,v,null,null,null,k),op(),v._vnode=h},cs={p:_,um:de,m:Me,r:x,mt:Ns,mc:fs,pc:bs,pbc:Rs,n:Bs,o:e};let ps,Ms;return l&&([ps,Ms]=l(cs)),{render:Fs,hydrate:ps,createApp:Uy(Fs,ps)}}function _l({effect:e,update:l},n){e.allowRecurse=l.allowRecurse=n}function Nn(e,l,n=!1){const t=e.children,a=l.children;if(is(t)&&is(a))for(let r=0;r<t.length;r++){const c=t[r];let p=a[r];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=a[r]=cl(a[r]),p.el=c.el),n||Nn(c,p)),p.type===ue&&!p.el&&(p.el=c.el)}}function Yy(e){const l=e.slice(),n=[0];let t,a,r,c,p;const i=e.length;for(t=0;t<i;t++){const y=e[t];if(y!==0){if(a=n[n.length-1],e[a]<y){l[t]=a,n.push(t);continue}for(r=0,c=n.length-1;r<c;)p=r+c>>1,e[n[p]]<y?r=p+1:c=p;y<e[n[r]]&&(r>0&&(l[t]=n[r-1]),n[r]=t)}}for(r=n.length,c=n[r-1];r-- >0;)n[r]=c,c=l[c];return n}const Zy=e=>e.__isTeleport,cn=e=>e&&(e.disabled||e.disabled===""),hr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Nt=(e,l)=>{const n=e&&e.to;if(zs(n))if(l){const t=l(n);return t||R(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),t}else return R("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!cn(e)&&R(`Invalid Teleport target: ${n}`),n},Gy={__isTeleport:!0,process(e,l,n,t,a,r,c,p,i,y){const{mc:u,pc:d,pbc:f,o:{insert:m,querySelector:B,createText:g,createComment:_}}=y,w=cn(l.props);let{shapeFlag:E,children:$,dynamicChildren:H}=l;if(ul&&(i=!1,H=null),e==null){const ss=l.el=_("teleport start"),K=l.anchor=_("teleport end");m(ss,n,t),m(K,n,t);const z=l.target=Nt(l.props,B),ts=l.targetAnchor=g("");z?(m(ts,z),c=c||hr(z)):w||R("Invalid Teleport target on mount:",z,`(${typeof z})`);const hs=(fs,Cs)=>{E&16&&u($,fs,Cs,a,r,c,p,i)};w?hs(n,K):z&&hs(z,ts)}else{l.el=e.el;const ss=l.anchor=e.anchor,K=l.target=e.target,z=l.targetAnchor=e.targetAnchor,ts=cn(e.props),hs=ts?n:K,fs=ts?ss:z;if(c=c||hr(K),H?(f(e.dynamicChildren,H,hs,a,r,c,p),Nn(e,l,!0)):i||d(e,l,hs,fs,a,r,c,p,!1),w)ts||io(l,n,ss,y,1);else if((l.props&&l.props.to)!==(e.props&&e.props.to)){const Cs=l.target=Nt(l.props,B);Cs?io(l,Cs,null,y,0):R("Invalid Teleport target on update:",K,`(${typeof K})`)}else ts&&io(l,K,z,y,1)}},remove(e,l,n,t,{um:a,o:{remove:r}},c){const{shapeFlag:p,children:i,anchor:y,targetAnchor:u,target:d,props:f}=e;if(d&&r(u),(c||!cn(f))&&(r(y),p&16))for(let m=0;m<i.length;m++){const B=i[m];a(B,l,n,!0,!!B.dynamicChildren)}},move:io,hydrate:Qy};function io(e,l,n,{o:{insert:t},m:a},r=2){r===0&&t(e.targetAnchor,l,n);const{el:c,anchor:p,shapeFlag:i,children:y,props:u}=e,d=r===2;if(d&&t(c,l,n),(!d||cn(u))&&i&16)for(let f=0;f<y.length;f++)a(y[f],l,n,2);d&&t(p,l,n)}function Qy(e,l,n,t,a,r,{o:{nextSibling:c,parentNode:p,querySelector:i}},y){const u=l.target=Nt(l.props,i);if(u){const d=u._lpa||u.firstChild;if(l.shapeFlag&16)if(cn(l.props))l.anchor=y(c(e),l,p(e),n,t,a,r),l.targetAnchor=d;else{l.anchor=c(e);let f=d;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){l.targetAnchor=f,u._lpa=l.targetAnchor&&c(l.targetAnchor);break}y(d,l,u,n,t,a,r)}}return l.anchor&&c(l.anchor)}const f2=Gy,xs=Symbol("Fragment"),Qo=Symbol("Text"),ue=Symbol("Comment"),Bo=Symbol("Static"),Ln=[];let $e=null;function A(e=!1){Ln.push($e=e?null:[])}function Xy(){Ln.pop(),$e=Ln[Ln.length-1]||null}let Un=1;function mr(e){Un+=e}function Pp(e){return e.dynamicChildren=Un>0?$e||an:null,Xy(),Un>0&&$e&&$e.push(e),e}function Y(e,l,n,t,a,r){return Pp(s(e,l,n,t,a,r,!0))}function M(e,l,n,t,a){return Pp(F(e,l,n,t,a,!0))}function Hl(e){return e?e.__v_isVNode===!0:!1}function gn(e,l){return l.shapeFlag&6&&en.has(l.type)?!1:e.type===l.type&&e.key===l.key}const su=(...e)=>eu(...e),Xo="__vInternal",Op=({key:e})=>e??null,vo=({ref:e,ref_key:l,ref_for:n})=>e!=null?zs(e)||Ds(e)||ds(e)?{i:Zs,r:e,k:l,f:!!n}:e:null;function s(e,l=null,n=null,t=0,a=null,r=e===xs?0:1,c=!1,p=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:l,key:l&&Op(l),ref:l&&vo(l),scopeId:Jo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:t,dynamicProps:a,dynamicChildren:null,appContext:null};return p?(Fa(i,n),r&128&&e.normalize(i)):n&&(i.shapeFlag|=zs(n)?8:16),i.key!==i.key&&R("VNode created with invalid key (NaN). VNode type:",i.type),Un>0&&!c&&$e&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&$e.push(i),i}const F=su;function eu(e,l=null,n=null,t=0,a=null,r=!1){if((!e||e===Ey)&&(e||R(`Invalid vnode type when creating vnode: ${e}.`),e=ue),Hl(e)){const p=ol(e,l,!0);return n&&Fa(p,n),Un>0&&!r&&$e&&(p.shapeFlag&6?$e[$e.indexOf(e)]=p:$e.push(p)),p.patchFlag|=-2,p}if(Rp(e)&&(e=e.__vccOpts),l){l=W(l);let{class:p,style:i}=l;p&&!zs(p)&&(l.class=Hs(p)),Is(i)&&(Eo(i)&&!is(i)&&(i=Ks({},i)),l.style=se(i))}const c=zs(e)?1:up(e)?128:Zy(e)?64:Is(e)?4:ds(e)?2:0;return c&4&&Eo(e)&&(e=ms(e),R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,l,n,t,a,c,r,!0)}function W(e){return e?Eo(e)||Xo in e?Ks({},e):e:null}function ol(e,l,n=!1){const{props:t,ref:a,patchFlag:r,children:c}=e,p=l?Z(t||{},l):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Op(p),ref:l&&l.ref?n&&a?is(a)?a.concat(vo(l)):[a,vo(l)]:vo(l):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&is(c)?c.map(Tp):c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:l&&e.type!==xs?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ol(e.ssContent),ssFallback:e.ssFallback&&ol(e.ssFallback),el:e.el,anchor:e.anchor}}function Tp(e){const l=ol(e);return is(e.children)&&(l.children=e.children.map(Tp)),l}function o(e=" ",l=0){return F(Qo,null,e,l)}function _s(e="",l=!1){return l?(A(),M(ue,null,e)):F(ue,null,e)}function we(e){return e==null||typeof e=="boolean"?F(ue):is(e)?F(xs,null,e.slice()):typeof e=="object"?cl(e):F(Qo,null,String(e))}function cl(e){return e.el===null||e.memo?e:ol(e)}function Fa(e,l){let n=0;const{shapeFlag:t}=e;if(l==null)l=null;else if(is(l))n=16;else if(typeof l=="object")if(t&65){const a=l.default;a&&(a._c&&(a._d=!1),Fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=l._;!a&&!(Xo in l)?l._ctx=Zs:a===3&&Zs&&(Zs.slots._===1?l._=1:(l._=2,e.patchFlag|=1024))}else ds(l)?(l={default:l,_ctx:Zs},n=32):(l=String(l),t&64?(n=16,l=[o(l)]):n=8);e.children=l,e.shapeFlag|=n}function Z(...e){const l={};for(let n=0;n<e.length;n++){const t=e[n];for(const a in t)if(a==="class")l.class!==t.class&&(l.class=Hs([l.class,t.class]));else if(a==="style")l.style=se([l.style,t.style]);else if(Ro(a)){const r=l[a],c=t[a];c&&r!==c&&!(is(r)&&r.includes(c))&&(l[a]=r?[].concat(r,c):c)}else a!==""&&(l[a]=t[a])}return l}function De(e,l,n,t=null){Se(e,l,7,[n,t])}const lu=Sp();let nu=0;function ou(e,l,n){const t=e.type,a=(l?l.appContext:e.appContext)||lu,r={uid:nu++,vnode:e,type:t,parent:l,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(t,a),emitsOptions:ip(t,a),emit:null,emitted:null,propsDefaults:ks,inheritAttrs:t.inheritAttrs,ctx:ks,data:ks,props:ks,attrs:ks,slots:ks,refs:ks,setupState:ks,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Fy(r),r.root=l?l.root:r,r.emit=oy.bind(null,r),e.ce&&e.ce(r),r}let Us=null;const vl=()=>Us||Zs,fn=e=>{Us=e,e.scope.on()},Nl=()=>{Us&&Us.scope.off(),Us=null},tu=eo("slot,component");function Lt(e,l){const n=l.isNativeTag||Sc;(tu(e)||n(e))&&R("Do not use built-in or reserved HTML elements as component id: "+e)}function Mp(e){return e.vnode.shapeFlag&4}let qn=!1;function au(e,l=!1){qn=l;const{props:n,children:t}=e.vnode,a=Mp(e);Ty(e,n,a,l),Hy(e,t);const r=a?ru(e,l):void 0;return qn=!1,r}function ru(e,l){var n;const t=e.type;{if(t.name&&Lt(t.name,e.appContext.config),t.components){const r=Object.keys(t.components);for(let c=0;c<r.length;c++)Lt(r[c],e.appContext.config)}if(t.directives){const r=Object.keys(t.directives);for(let c=0;c<r.length;c++)Ap(r[c])}t.compilerOptions&&cu()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ya(new Proxy(e.ctx,Cp)),ky(e);const{setup:a}=t;if(a){const r=e.setupContext=a.length>1?Lp(e):null;fn(e),Ul();const c=el(a,e,0,[on(e.props),r]);if(ql(),Nl(),ta(c)){if(c.then(Nl,Nl),l)return c.then(p=>{Br(e,p,l)}).catch(p=>{Uo(p,e,0)});if(e.asyncDep=c,!e.suspense){const p=(n=t.name)!==null&&n!==void 0?n:"Anonymous";R(`Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Br(e,c,l)}else Np(e,l)}function Br(e,l,n){ds(l)?e.type.__ssrInlineRender?e.ssrRender=l:e.render=l:Is(l)?(Hl(l)&&R("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=l,e.setupState=Gc(l),xy(e)):l!==void 0&&R(`setup() should return an object. Received: ${l===null?"null":typeof l}`),Np(e,n)}let Rt;const cu=()=>!Rt;function Np(e,l,n){const t=e.type;if(!e.render){if(!l&&Rt&&!t.render){const a=t.template;if(a){Ke(e,"compile");const{isCustomElement:r,compilerOptions:c}=e.appContext.config,{delimiters:p,compilerOptions:i}=t,y=Ks(Ks({isCustomElement:r,delimiters:p},c),i);t.render=Rt(a,y),Je(e,"compile")}}e.render=t.render||ye}fn(e),Ul(),wy(e),ql(),Nl(),!t.render&&e.render===ye&&!l&&(t.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function pu(e){return new Proxy(e.attrs,{get(l,n){return xo(),_e(e,"get","$attrs"),l[n]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}})}function Lp(e){const l=t=>{e.exposed&&R("expose() should be called only once per setup()."),e.exposed=t||{}};let n;return Object.freeze({get attrs(){return n||(n=pu(e))},get slots(){return on(e.slots)},get emit(){return(t,...a)=>e.emit(t,...a)},expose:l})}function st(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gc(ya(e.exposed)),{get(l,n){if(n in l)return l[n];if(n in dn)return dn[n](e)}}))}const iu=/(?:^|[-_])(\w)/g,yu=e=>e.replace(iu,l=>l.toUpperCase()).replace(/[-_]/g,"");function Kn(e,l=!0){return ds(e)?e.displayName||e.name:e.name||l&&e.__name}function et(e,l,n=!1){let t=Kn(l);if(!t&&l.__file){const a=l.__file.match(/([^/\\]+)\.\w+$/);a&&(t=a[1])}if(!t&&e&&e.parent){const a=r=>{for(const c in r)if(r[c]===l)return c};t=a(e.components||e.parent.type.components)||a(e.appContext.components)}return t?yu(t):n?"App":"Anonymous"}function Rp(e){return ds(e)&&"__vccOpts"in e}const T=(e,l)=>R8(e,l,qn);function h2(){return uu().slots}function uu(){const e=vl();return e||R("useContext() called without active instance."),e.setupContext||(e.setupContext=Lp(e))}function lt(e,l,n){const t=arguments.length;return t===2?Is(l)&&!is(l)?Hl(l)?F(e,null,[l]):F(e,l):F(e,null,l):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&Hl(n)&&(n=[n]),F(e,l,n))}function ct(e){return!!(e&&e.__v_isShallow)}function du(){if(typeof window>"u")return;const e={style:"color:#3ba776"},l={style:"color:#0b1bc9"},n={style:"color:#b62e24"},t={style:"color:#9d288c"},a={header(d){return Is(d)?d.__isVue?["div",e,"VueInstance"]:Ds(d)?["div",{},["span",e,u(d)],"<",p(d.value),">"]:Tl(d)?["div",{},["span",e,ct(d)?"ShallowReactive":"Reactive"],"<",p(d),`>${Vl(d)?" (readonly)":""}`]:Vl(d)?["div",{},["span",e,ct(d)?"ShallowReadonly":"Readonly"],"<",p(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...r(d.$)]}};function r(d){const f=[];d.type.props&&d.props&&f.push(c("props",ms(d.props))),d.setupState!==ks&&f.push(c("setup",d.setupState)),d.data!==ks&&f.push(c("data",ms(d.data)));const m=i(d,"computed");m&&f.push(c("computed",m));const B=i(d,"inject");return B&&f.push(c("injected",B)),f.push(["div",{},["span",{style:t.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function c(d,f){return f=Ks({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",t,m+": "],p(f[m],!1)])]]:["span",{}]}function p(d,f=!0){return typeof d=="number"?["span",l,d]:typeof d=="string"?["span",n,JSON.stringify(d)]:typeof d=="boolean"?["span",t,d]:Is(d)?["object",{object:f?ms(d):d}]:["span",n,String(d)]}function i(d,f){const m=d.type;if(ds(m))return;const B={};for(const g in d.ctx)y(m,g,f)&&(B[g]=d.ctx[g]);return B}function y(d,f,m){const B=d[m];if(is(B)&&B.includes(f)||Is(B)&&f in B||d.extends&&y(d.extends,f,m)||d.mixins&&d.mixins.some(g=>y(g,f,m)))return!0}function u(d){return ct(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const vr="3.2.37";function ka(e,l){const n=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)n[t[a]]=!0;return l?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const fu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hu=ka(fu);function Ip(e){return!!e||e===""}const mu="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Bu="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",vu=ka(mu),Au=ka(Bu),_u=/^on[^a-z]/,gu=e=>_u.test(e),Cu=e=>e.startsWith("onUpdate:"),Du=Object.assign,xa=Array.isArray,Vp=e=>typeof e=="function",$o=e=>typeof e=="string",jp=e=>{const l=Object.create(null);return n=>l[n]||(l[n]=e(n))},Eu=/\B([A-Z])/g,ba=jp(e=>e.replace(Eu,"-$1").toLowerCase()),Fu=jp(e=>e.charAt(0).toUpperCase()+e.slice(1)),ku=(e,l)=>{for(let n=0;n<e.length;n++)e[n](l)},Ar=e=>{const l=parseFloat(e);return isNaN(l)?e:l},xu="http://www.w3.org/2000/svg",xl=typeof document<"u"?document:null,_r=xl&&xl.createElement("template"),bu={insert:(e,l,n)=>{l.insertBefore(e,n||null)},remove:e=>{const l=e.parentNode;l&&l.removeChild(e)},createElement:(e,l,n,t)=>{const a=l?xl.createElementNS(xu,e):xl.createElement(e,n?{is:n}:void 0);return e==="select"&&t&&t.multiple!=null&&a.setAttribute("multiple",t.multiple),a},createText:e=>xl.createTextNode(e),createComment:e=>xl.createComment(e),setText:(e,l)=>{e.nodeValue=l},setElementText:(e,l)=>{e.textContent=l},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xl.querySelector(e),setScopeId(e,l){e.setAttribute(l,"")},cloneNode(e){const l=e.cloneNode(!0);return"_value"in e&&(l._value=e._value),l},insertStaticContent(e,l,n,t,a,r){const c=n?n.previousSibling:l.lastChild;if(a&&(a===r||a.nextSibling))for(;l.insertBefore(a.cloneNode(!0),n),!(a===r||!(a=a.nextSibling)););else{_r.innerHTML=t?`<svg>${e}</svg>`:e;const p=_r.content;if(t){const i=p.firstChild;for(;i.firstChild;)p.appendChild(i.firstChild);p.removeChild(i)}l.insertBefore(p,n)}return[c?c.nextSibling:l.firstChild,n?n.previousSibling:l.lastChild]}};function wu(e,l,n){const t=e._vtc;t&&(l=(l?[l,...t]:[...t]).join(" ")),l==null?e.removeAttribute("class"):n?e.setAttribute("class",l):e.className=l}function $u(e,l,n){const t=e.style,a=$o(n);if(n&&!a){for(const r in n)It(t,r,n[r]);if(l&&!$o(l))for(const r in l)n[r]==null&&It(t,r,"")}else{const r=t.display;a?l!==n&&(t.cssText=n):l&&e.removeAttribute("style"),"_vod"in e&&(t.display=r)}}const gr=/\s*!important$/;function It(e,l,n){if(xa(n))n.forEach(t=>It(e,l,t));else if(n==null&&(n=""),l.startsWith("--"))e.setProperty(l,n);else{const t=Su(e,l);gr.test(n)?e.setProperty(ba(t),n.replace(gr,""),"important"):e[t]=n}}const Cr=["Webkit","Moz","ms"],pt={};function Su(e,l){const n=pt[l];if(n)return n;let t=Ve(l);if(t!=="filter"&&t in e)return pt[l]=t;t=Fu(t);for(let a=0;a<Cr.length;a++){const r=Cr[a]+t;if(r in e)return pt[l]=r}return l}const Dr="http://www.w3.org/1999/xlink";function Pu(e,l,n,t,a){if(t&&l.startsWith("xlink:"))n==null?e.removeAttributeNS(Dr,l.slice(6,l.length)):e.setAttributeNS(Dr,l,n);else{const r=hu(l);n==null||r&&!Ip(n)?e.removeAttribute(l):e.setAttribute(l,r?"":n)}}function Ou(e,l,n,t,a,r,c){if(l==="innerHTML"||l==="textContent"){t&&c(t,a,r),e[l]=n??"";return}if(l==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const i=n??"";(e.value!==i||e.tagName==="OPTION")&&(e.value=i),n==null&&e.removeAttribute(l);return}let p=!1;if(n===""||n==null){const i=typeof e[l];i==="boolean"?n=Ip(n):n==null&&i==="string"?(n="",p=!0):i==="number"&&(n=0,p=!0)}try{e[l]=n}catch(i){R(`Failed setting prop "${l}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,i)}p&&e.removeAttribute(l)}const[Hp,Tu]=(()=>{let e=Date.now,l=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);l=!!(n&&Number(n[1])<=53)}return[e,l]})();let Vt=0;const Mu=Promise.resolve(),Nu=()=>{Vt=0},Lu=()=>Vt||(Mu.then(Nu),Vt=Hp());function ln(e,l,n,t){e.addEventListener(l,n,t)}function Ru(e,l,n,t){e.removeEventListener(l,n,t)}function Iu(e,l,n,t,a=null){const r=e._vei||(e._vei={}),c=r[l];if(t&&c)c.value=t;else{const[p,i]=Vu(l);if(t){const y=r[l]=ju(t,a);ln(e,p,y,i)}else c&&(Ru(e,p,c,i),r[l]=void 0)}}const Er=/(?:Once|Passive|Capture)$/;function Vu(e){let l;if(Er.test(e)){l={};let n;for(;n=e.match(Er);)e=e.slice(0,e.length-n[0].length),l[n[0].toLowerCase()]=!0}return[ba(e.slice(2)),l]}function ju(e,l){const n=t=>{const a=t.timeStamp||Hp();(Tu||a>=n.attached-1)&&Se(Hu(t,n.value),l,5,[t])};return n.value=e,n.attached=Lu(),n}function Hu(e,l){if(xa(l)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},l.map(t=>a=>!a._stopped&&t&&t(a))}else return l}const Fr=/^on[a-z]/,zu=(e,l,n,t,a=!1,r,c,p,i)=>{l==="class"?wu(e,t,a):l==="style"?$u(e,n,t):gu(l)?Cu(l)||Iu(e,l,n,t,c):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Wu(e,l,t,a))?Ou(e,l,t,r,c,p,i):(l==="true-value"?e._trueValue=t:l==="false-value"&&(e._falseValue=t),Pu(e,l,t,a))};function Wu(e,l,n,t){return t?!!(l==="innerHTML"||l==="textContent"||l in e&&Fr.test(l)&&Vp(n)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&e.tagName==="INPUT"||l==="type"&&e.tagName==="TEXTAREA"||Fr.test(l)&&$o(n)?!1:l in e}const kr=e=>{const l=e.props["onUpdate:modelValue"]||!1;return xa(l)?n=>ku(l,n):l};function Uu(e){e.target.composing=!0}function xr(e){const l=e.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Jn={created(e,{modifiers:{lazy:l,trim:n,number:t}},a){e._assign=kr(a);const r=t||a.props&&a.props.type==="number";ln(e,l?"change":"input",c=>{if(c.target.composing)return;let p=e.value;n&&(p=p.trim()),r&&(p=Ar(p)),e._assign(p)}),n&&ln(e,"change",()=>{e.value=e.value.trim()}),l||(ln(e,"compositionstart",Uu),ln(e,"compositionend",xr),ln(e,"change",xr))},mounted(e,{value:l}){e.value=l??""},beforeUpdate(e,{value:l,modifiers:{lazy:n,trim:t,number:a}},r){if(e._assign=kr(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||t&&e.value.trim()===l||(a||e.type==="number")&&Ar(e.value)===l))return;const c=l??"";e.value!==c&&(e.value=c)}},qu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},br=(e,l)=>n=>{if(!("key"in n))return;const t=ba(n.key);if(l.some(a=>a===t||qu[a]===t))return e(n)},zp={beforeMount(e,{value:l},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&l?n.beforeEnter(e):Cn(e,l)},mounted(e,{value:l},{transition:n}){n&&l&&n.enter(e)},updated(e,{value:l,oldValue:n},{transition:t}){!l!=!n&&(t?l?(t.beforeEnter(e),Cn(e,!0),t.enter(e)):t.leave(e,()=>{Cn(e,!1)}):Cn(e,l))},beforeUnmount(e,{value:l}){Cn(e,l)}};function Cn(e,l){e.style.display=l?e._vod:"none"}const Ku=Du({patchProp:zu},bu);let wr;function Ju(){return wr||(wr=Ky(Ku))}const m2=(...e)=>{const l=Ju().createApp(...e);Yu(l),Zu(l);const{mount:n}=l;return l.mount=t=>{const a=Gu(t);if(!a)return;const r=l._component;!Vp(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const c=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),c},l};function Yu(e){Object.defineProperty(e.config,"isNativeTag",{value:l=>vu(l)||Au(l),writable:!1})}function Zu(e){{const l=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return l},set(){R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,t='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return R(t),n},set(){R(t)}})}}function Gu(e){if($o(e)){const l=document.querySelector(e);return l||R(`Failed to mount app: mount target selector "${e}" returned null.`),l}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Qu(){du()}Qu();const Wp=Symbol("v-click-clicks"),Up=Symbol("v-click-clicks-elements"),Xu=Symbol("v-click-clicks-order-map"),qp=Symbol("v-click-clicks-disabled"),Kp=Symbol("slidev-slide-scale"),S=Symbol("slidev-slidev-context"),sd=Symbol("slidev-route"),ed=Symbol("slidev-slide-context"),ld="slidev-vclick-target",B2="slidev-vclick-hidden",v2="slidev-vclick-fade",A2="slidev-vclick-hidden-explicitly",_2="slidev-vclick-current",g2="slidev-vclick-prior";function nd(e,l){if(!e)return!1;const n=e.indexOf(l);return n>=0?(e.splice(n,1),!0):!1}function od(...e){let l,n,t;e.length===1?(l=0,t=1,[n]=e):[l,n,t=1]=e;const a=[];let r=l;for(;r<n;)a.push(r),r+=t||1;return a}function td(e){return e!=null}function ad(e,l){return Object.fromEntries(Object.entries(e).map(([n,t])=>l(n,t)).filter(td))}const Pn={theme:"default",title:"Vue.js",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"},Ts=Pn,dl=Ts.aspectRatio??16/9,fl=Ts.canvasWidth??980,wa=Math.ceil(fl/dl),$a=T(()=>ad(Ts.themeConfig||{},(e,l)=>[`--slidev-theme-${e}`,l]));function Fe(e,l,n){Object.defineProperty(e,l,{value:n,writable:!0,enumerable:!1})}const Kl=ee({page:0,clicks:0});let rd=[],cd=[];Fe(Kl,"$syncUp",!0);Fe(Kl,"$syncDown",!0);Fe(Kl,"$paused",!1);Fe(Kl,"$onSet",e=>rd.push(e));Fe(Kl,"$onPatch",e=>cd.push(e));Fe(Kl,"$patch",async()=>!1);function Jp(e,l,n=!1){const t=[];let a=!1,r=!1,c,p;const i=ee(l);function y(m){t.push(m)}function u(m,B){clearTimeout(c),a=!0,i[m]=B,c=setTimeout(()=>a=!1,0)}function d(m){a||(clearTimeout(p),r=!0,Object.entries(m).forEach(([B,g])=>{i[B]=g}),p=setTimeout(()=>r=!1,0))}function f(m){let B;n?n&&window.addEventListener("storage",_=>{_&&_.key===m&&_.newValue&&d(JSON.parse(_.newValue))}):(B=new BroadcastChannel(m),B.addEventListener("message",_=>d(_.data)));function g(){!n&&B&&!r?B.postMessage(ms(i)):n&&!r&&window.localStorage.setItem(m,JSON.stringify(i)),a||t.forEach(_=>_(i))}if(js(i,g,{deep:!0}),n){const _=window.localStorage.getItem(m);_&&d(JSON.parse(_))}}return{init:f,onPatch:y,patch:u,state:i}}const{init:C2,onPatch:D2,patch:E2,state:it}=Jp(Kl,{page:1,clicks:0}),Jl=ee({});let pd=[],id=[];Fe(Jl,"$syncUp",!0);Fe(Jl,"$syncDown",!0);Fe(Jl,"$paused",!1);Fe(Jl,"$onSet",e=>pd.push(e));Fe(Jl,"$onPatch",e=>id.push(e));Fe(Jl,"$patch",async()=>!1);const{init:F2,onPatch:yd,patch:Yp,state:So}=Jp(Jl,{},!1),ud="modulepreload",dd=function(e){return"/vue-3-practices/"+e},$r={},zl=function(l,n,t){if(!n||n.length===0)return l();const a=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=dd(r),r in $r)return;$r[r]=!0;const c=r.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!t)for(let u=a.length-1;u>=0;u--){const d=a[u];if(d.href===r&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":ud,c||(y.as="script",y.crossOrigin=""),y.href=r,document.head.appendChild(y),c)return new Promise((u,d)=>{y.addEventListener("load",u),y.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>l())};var Sr;const Oe=typeof window<"u",fd=e=>typeof e<"u",hd=Object.prototype.toString,Yn=e=>typeof e=="function",k2=e=>typeof e=="number",Zp=e=>typeof e=="string",x2=e=>hd.call(e)==="[object Object]",jt=()=>+Date.now(),Rn=()=>{};Oe&&((Sr=window==null?void 0:window.navigator)!=null&&Sr.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ce(e){return typeof e=="function"?e():D(e)}function md(e,l){function n(...t){e(()=>l.apply(this,t),{fn:l,thisArg:this,args:t})}return n}const Gp=e=>e();function Bd(e=Gp){const l=ns(!0);function n(){l.value=!1}function t(){l.value=!0}return{isActive:l,pause:n,resume:t,eventFilter:(...r)=>{l.value&&e(...r)}}}function vd(e){return e}function Ad(e,l){var n;if(typeof e=="number")return e+l;const t=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",a=e.slice(t.length),r=parseFloat(t)+l;return Number.isNaN(r)?e:r+a}function _d(e,l){let n,t,a;const r=ns(!0),c=()=>{r.value=!0,a()};js(e,c,{flush:"sync"});const p=Yn(l)?l:l.get,i=Yn(l)?void 0:l.set,y=Qc((u,d)=>(t=u,a=d,{get(){return r.value&&(n=p(),r.value=!1),t(),n},set(f){i==null||i(f)}}));return Object.isExtensible(y)&&(y.trigger=c),y}function ze(e){return l8()?(n8(e),!0):!1}function gd(e){if(!Ds(e))return ee(e);const l=new Proxy({},{get(n,t,a){return D(Reflect.get(e.value,t,a))},set(n,t,a){return Ds(e.value[t])&&!Ds(a)?e.value[t].value=a:e.value[t]=a,!0},deleteProperty(n,t){return Reflect.deleteProperty(e.value,t)},has(n,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return ee(l)}function Qp(e){return typeof e=="function"?T(e):ns(e)}var Cd=Object.defineProperty,Dd=Object.defineProperties,Ed=Object.getOwnPropertyDescriptors,Pr=Object.getOwnPropertySymbols,Fd=Object.prototype.hasOwnProperty,kd=Object.prototype.propertyIsEnumerable,Or=(e,l,n)=>l in e?Cd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,xd=(e,l)=>{for(var n in l||(l={}))Fd.call(l,n)&&Or(e,n,l[n]);if(Pr)for(var n of Pr(l))kd.call(l,n)&&Or(e,n,l[n]);return e},bd=(e,l)=>Dd(e,Ed(l));function wd(e){if(!Ds(e))return T8(e);const l=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)l[n]=Qc(()=>({get(){return e.value[n]},set(t){if(Array.isArray(e.value)){const a=[...e.value];a[n]=t,e.value=a}else{const a=bd(xd({},e.value),{[n]:t});Object.setPrototypeOf(a,e.value),e.value=a}}}));return l}function Sa(e,l=!0){vl()?Zo(e):l?e():Pe(e)}function b2(e){vl()&&Go(e)}function $d(e,l=1e3,n={}){const{immediate:t=!0,immediateCallback:a=!1}=n;let r=null;const c=ns(!1);function p(){r&&(clearInterval(r),r=null)}function i(){c.value=!1,p()}function y(){D(l)<=0||(c.value=!0,a&&e(),p(),r=setInterval(e,ce(l)))}if(t&&Oe&&y(),Ds(l)||Yn(l)){const u=js(l,()=>{c.value&&Oe&&y()});ze(u)}return ze(i),{isActive:c,pause:i,resume:y}}function Sd(e,l,n={}){const{immediate:t=!0}=n,a=ns(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function p(){a.value=!1,c()}function i(...y){c(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,e(...y)},ce(l))}return t&&(a.value=!0,Oe&&i()),ze(p),{isPending:a,start:i,stop:p}}function Xp(e=!1,l={}){const{truthyValue:n=!0,falsyValue:t=!1}=l,a=Ds(e),r=ns(e);function c(p){if(arguments.length)return r.value=p,r.value;{const i=ce(n);return r.value=r.value===i?ce(t):i,r.value}}return a?c:[r,c]}var Tr=Object.getOwnPropertySymbols,Pd=Object.prototype.hasOwnProperty,Od=Object.prototype.propertyIsEnumerable,Td=(e,l)=>{var n={};for(var t in e)Pd.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&Tr)for(var t of Tr(e))l.indexOf(t)<0&&Od.call(e,t)&&(n[t]=e[t]);return n};function Md(e,l,n={}){const t=n,{eventFilter:a=Gp}=t,r=Td(t,["eventFilter"]);return js(e,md(a,l),r)}var Nd=Object.defineProperty,Ld=Object.defineProperties,Rd=Object.getOwnPropertyDescriptors,Po=Object.getOwnPropertySymbols,si=Object.prototype.hasOwnProperty,ei=Object.prototype.propertyIsEnumerable,Mr=(e,l,n)=>l in e?Nd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,Id=(e,l)=>{for(var n in l||(l={}))si.call(l,n)&&Mr(e,n,l[n]);if(Po)for(var n of Po(l))ei.call(l,n)&&Mr(e,n,l[n]);return e},Vd=(e,l)=>Ld(e,Rd(l)),jd=(e,l)=>{var n={};for(var t in e)si.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&Po)for(var t of Po(e))l.indexOf(t)<0&&ei.call(e,t)&&(n[t]=e[t]);return n};function Hd(e,l,n={}){const t=n,{eventFilter:a}=t,r=jd(t,["eventFilter"]),{eventFilter:c,pause:p,resume:i,isActive:y}=Bd(a);return{stop:Md(e,l,Vd(Id({},r),{eventFilter:c})),pause:p,resume:i,isActive:y}}function Le(e){var l;const n=ce(e);return(l=n==null?void 0:n.$el)!=null?l:n}const ne=Oe?window:void 0,li=Oe?window.document:void 0,zd=Oe?window.navigator:void 0;function $s(...e){let l,n,t,a;if(Zp(e[0])||Array.isArray(e[0])?([n,t,a]=e,l=ne):[l,n,t,a]=e,!l)return Rn;Array.isArray(n)||(n=[n]),Array.isArray(t)||(t=[t]);const r=[],c=()=>{r.forEach(u=>u()),r.length=0},p=(u,d,f)=>(u.addEventListener(d,f,a),()=>u.removeEventListener(d,f,a)),i=js(()=>Le(l),u=>{c(),u&&r.push(...n.flatMap(d=>t.map(f=>p(u,d,f))))},{immediate:!0,flush:"post"}),y=()=>{i(),c()};return ze(y),y}function Wd(e,l,n={}){const{window:t=ne,ignore:a=[],capture:r=!0,detectIframe:c=!1}=n;if(!t)return;let p=!0,i;const y=m=>a.some(B=>{if(typeof B=="string")return Array.from(t.document.querySelectorAll(B)).some(g=>g===m.target||m.composedPath().includes(g));{const g=Le(B);return g&&(m.target===g||m.composedPath().includes(g))}}),u=m=>{t.clearTimeout(i);const B=Le(e);if(!(!B||B===m.target||m.composedPath().includes(B))){if(m.detail===0&&(p=!y(m)),!p){p=!0;return}l(m)}},d=[$s(t,"click",u,{passive:!0,capture:r}),$s(t,"pointerdown",m=>{const B=Le(e);B&&(p=!m.composedPath().includes(B)&&!y(m))},{passive:!0}),$s(t,"pointerup",m=>{if(m.button===0){const B=m.composedPath();m.composedPath=()=>B,i=t.setTimeout(()=>u(m),50)}},{passive:!0}),c&&$s(t,"blur",m=>{var B;const g=Le(e);((B=t.document.activeElement)==null?void 0:B.tagName)==="IFRAME"&&!(g!=null&&g.contains(t.document.activeElement))&&l(m)})].filter(Boolean);return()=>d.forEach(m=>m())}const Ud=e=>typeof e=="function"?e:typeof e=="string"?l=>l.key===e:Array.isArray(e)?l=>e.includes(l.key):()=>!0;function qd(...e){let l,n,t={};e.length===3?(l=e[0],n=e[1],t=e[2]):e.length===2?typeof e[1]=="object"?(l=!0,n=e[0],t=e[1]):(l=e[0],n=e[1]):(l=!0,n=e[0]);const{target:a=ne,eventName:r="keydown",passive:c=!1}=t,p=Ud(l);return $s(a,r,y=>{p(y)&&n(y)},c)}function Kd(e={}){const{window:l=ne}=e,n=_d(()=>null,()=>l==null?void 0:l.document.activeElement);return l&&($s(l,"blur",t=>{t.relatedTarget!==null&&n.trigger()},!0),$s(l,"focus",n.trigger,!0)),n}function oo(e,l=!1){const n=ns(),t=()=>n.value=Boolean(e());return t(),Sa(t,l),n}function nn(e,l={}){const{window:n=ne}=l,t=oo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const r=ns(!1),c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",p):a.removeListener(p))},p=()=>{t.value&&(c(),a=n.matchMedia(Qp(e).value),r.value=a.matches,"addEventListener"in a?a.addEventListener("change",p):a.addListener(p))};return Bn(p),ze(()=>c()),r}const Jd={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Yd=Object.defineProperty,Nr=Object.getOwnPropertySymbols,Zd=Object.prototype.hasOwnProperty,Gd=Object.prototype.propertyIsEnumerable,Lr=(e,l,n)=>l in e?Yd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,Qd=(e,l)=>{for(var n in l||(l={}))Zd.call(l,n)&&Lr(e,n,l[n]);if(Nr)for(var n of Nr(l))Gd.call(l,n)&&Lr(e,n,l[n]);return e};function Xd(e,l={}){function n(p,i){let y=e[p];return i!=null&&(y=Ad(y,i)),typeof y=="number"&&(y=`${y}px`),y}const{window:t=ne}=l;function a(p){return t?t.matchMedia(p).matches:!1}const r=p=>nn(`(min-width: ${n(p)})`,l),c=Object.keys(e).reduce((p,i)=>(Object.defineProperty(p,i,{get:()=>r(i),enumerable:!0,configurable:!0}),p),{});return Qd({greater(p){return nn(`(min-width: ${n(p,.1)})`,l)},greaterOrEqual:r,smaller(p){return nn(`(max-width: ${n(p,-.1)})`,l)},smallerOrEqual(p){return nn(`(max-width: ${n(p)})`,l)},between(p,i){return nn(`(min-width: ${n(p)}) and (max-width: ${n(i,-.1)})`,l)},isGreater(p){return a(`(min-width: ${n(p,.1)})`)},isGreaterOrEqual(p){return a(`(min-width: ${n(p)})`)},isSmaller(p){return a(`(max-width: ${n(p,-.1)})`)},isSmallerOrEqual(p){return a(`(max-width: ${n(p)})`)},isInBetween(p,i){return a(`(min-width: ${n(p)}) and (max-width: ${n(i,-.1)})`)}},c)}function s5(e={}){const{navigator:l=zd,read:n=!1,source:t,copiedDuring:a=1500,legacy:r=!1}=e,c=["copy","cut"],p=oo(()=>l&&"clipboard"in l),i=T(()=>p.value||r),y=ns(""),u=ns(!1),d=Sd(()=>u.value=!1,a);function f(){p.value?l.clipboard.readText().then(_=>{y.value=_}):y.value=g()}if(i.value&&n)for(const _ of c)$s(_,f);async function m(_=ce(t)){i.value&&_!=null&&(p.value?await l.clipboard.writeText(_):B(_),y.value=_,u.value=!0,d.start())}function B(_){const w=document.createElement("textarea");w.value=_??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function g(){var _,w,E;return(E=(w=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:w.toString())!=null?E:""}return{isSupported:i,text:y,copied:u,copy:m}}function e5(e){return JSON.parse(JSON.stringify(e))}const Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zt="__vueuse_ssr_handlers__";Ht[zt]=Ht[zt]||{};const l5=Ht[zt];function n5(e,l){return l5[e]||l}function o5(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var t5=Object.defineProperty,Rr=Object.getOwnPropertySymbols,a5=Object.prototype.hasOwnProperty,r5=Object.prototype.propertyIsEnumerable,Ir=(e,l,n)=>l in e?t5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,Vr=(e,l)=>{for(var n in l||(l={}))a5.call(l,n)&&Ir(e,n,l[n]);if(Rr)for(var n of Rr(l))r5.call(l,n)&&Ir(e,n,l[n]);return e};const c5={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Te(e,l,n,t={}){var a;const{flush:r="pre",deep:c=!0,listenToStorageChanges:p=!0,writeDefaults:i=!0,mergeDefaults:y=!1,shallow:u,window:d=ne,eventFilter:f,onError:m=z=>{console.error(z)}}=t,B=(u?je:ns)(l);if(!n)try{n=n5("getDefaultStorage",()=>{var z;return(z=ne)==null?void 0:z.localStorage})()}catch(z){m(z)}if(!n)return B;const g=ce(l),_=o5(g),w=(a=t.serializer)!=null?a:c5[_],{pause:E,resume:$}=Hd(B,()=>H(B.value),{flush:r,deep:c,eventFilter:f});return d&&p&&$s(d,"storage",K),K(),B;function H(z){try{if(z==null)n.removeItem(e);else{const ts=w.write(z),hs=n.getItem(e);hs!==ts&&(n.setItem(e,ts),d&&(d==null||d.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:hs,newValue:ts,storageArea:n}))))}}catch(ts){m(ts)}}function ss(z){const ts=z?z.newValue:n.getItem(e);if(ts==null)return i&&g!==null&&n.setItem(e,w.write(g)),g;if(!z&&y){const hs=w.read(ts);return Yn(y)?y(hs,g):_==="object"&&!Array.isArray(hs)?Vr(Vr({},g),hs):hs}else return typeof ts!="string"?ts:w.read(ts)}function K(z){if(!(z&&z.storageArea!==n)){if(z&&z.key==null){B.value=g;return}if(!(z&&z.key!==e)){E();try{B.value=ss(z)}catch(ts){m(ts)}finally{z?Pe($):$()}}}}}function p5(e){return nn("(prefers-color-scheme: dark)",e)}var i5=Object.defineProperty,y5=Object.defineProperties,u5=Object.getOwnPropertyDescriptors,jr=Object.getOwnPropertySymbols,d5=Object.prototype.hasOwnProperty,f5=Object.prototype.propertyIsEnumerable,Hr=(e,l,n)=>l in e?i5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,h5=(e,l)=>{for(var n in l||(l={}))d5.call(l,n)&&Hr(e,n,l[n]);if(jr)for(var n of jr(l))f5.call(l,n)&&Hr(e,n,l[n]);return e},m5=(e,l)=>y5(e,u5(l));function w2(e,l={}){var n,t,a;const r=(n=l.draggingElement)!=null?n:ne,c=(t=l.handle)!=null?t:e,p=ns((a=ce(l.initialValue))!=null?a:{x:0,y:0}),i=ns(),y=B=>l.pointerTypes?l.pointerTypes.includes(B.pointerType):!0,u=B=>{ce(l.preventDefault)&&B.preventDefault(),ce(l.stopPropagation)&&B.stopPropagation()},d=B=>{var g;if(!y(B)||ce(l.exact)&&B.target!==ce(e))return;const _=ce(e).getBoundingClientRect(),w={x:B.clientX-_.left,y:B.clientY-_.top};((g=l.onStart)==null?void 0:g.call(l,w,B))!==!1&&(i.value=w,u(B))},f=B=>{var g;y(B)&&i.value&&(p.value={x:B.clientX-i.value.x,y:B.clientY-i.value.y},(g=l.onMove)==null||g.call(l,p.value,B),u(B))},m=B=>{var g;y(B)&&i.value&&(i.value=void 0,(g=l.onEnd)==null||g.call(l,p.value,B),u(B))};return Oe&&($s(c,"pointerdown",d,!0),$s(r,"pointermove",f,!0),$s(r,"pointerup",m,!0)),m5(h5({},wd(p)),{position:p,isDragging:T(()=>!!i.value),style:T(()=>`left:${p.value.x}px;top:${p.value.y}px;`)})}var zr=Object.getOwnPropertySymbols,B5=Object.prototype.hasOwnProperty,v5=Object.prototype.propertyIsEnumerable,A5=(e,l)=>{var n={};for(var t in e)B5.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&zr)for(var t of zr(e))l.indexOf(t)<0&&v5.call(e,t)&&(n[t]=e[t]);return n};function _5(e,l,n={}){const t=n,{window:a=ne}=t,r=A5(t,["window"]);let c;const p=oo(()=>a&&"ResizeObserver"in a),i=()=>{c&&(c.disconnect(),c=void 0)},y=js(()=>Le(e),d=>{i(),p.value&&a&&d&&(c=new ResizeObserver(l),c.observe(d,r))},{immediate:!0,flush:"post"}),u=()=>{i(),y()};return ze(u),{isSupported:p,stop:u}}function g5(e,l={}){const{immediate:n=!0,window:t=ne}=l,a=ns(!1);let r=0,c=null;function p(u){if(!a.value||!t)return;const d=u-r;e({delta:d,timestamp:u}),r=u,c=t.requestAnimationFrame(p)}function i(){!a.value&&t&&(a.value=!0,c=t.requestAnimationFrame(p))}function y(){a.value=!1,c!=null&&t&&(t.cancelAnimationFrame(c),c=null)}return n&&i(),ze(y),{isActive:a,pause:y,resume:i}}function C5(e,l={width:0,height:0},n={}){const{box:t="content-box"}=n,a=ns(l.width),r=ns(l.height);return _5(e,([c])=>{const p=t==="border-box"?c.borderBoxSize:t==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;p?(a.value=p.reduce((i,{inlineSize:y})=>i+y,0),r.value=p.reduce((i,{blockSize:y})=>i+y,0)):(a.value=c.contentRect.width,r.value=c.contentRect.height)},n),js(()=>Le(e),c=>{a.value=c?l.width:0,r.value=c?l.height:0}),{width:a,height:r}}const Wr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function D5(e,l={}){const{document:n=li,autoExit:t=!1}=l,a=e||(n==null?void 0:n.querySelector("html")),r=ns(!1);let c=Wr[0];const p=oo(()=>{if(n){for(const g of Wr)if(g[1]in n)return c=g,!0}else return!1;return!1}),[i,y,u,,d]=c;async function f(){p.value&&(n!=null&&n[u]&&await n[y](),r.value=!1)}async function m(){if(!p.value)return;await f();const g=Le(a);g&&(await g[i](),r.value=!0)}async function B(){r.value?await f():await m()}return n&&$s(n,d,()=>{r.value=!!(n!=null&&n[u])},!1),t&&ze(f),{isSupported:p,isFullscreen:r,enter:m,exit:f,toggle:B}}function $2(e,l,n={}){const{root:t,rootMargin:a="0px",threshold:r=.1,window:c=ne}=n,p=oo(()=>c&&"IntersectionObserver"in c);let i=Rn;const y=p.value?js(()=>({el:Le(e),root:Le(t)}),({el:d,root:f})=>{if(i(),!d)return;const m=new IntersectionObserver(l,{root:f,rootMargin:a,threshold:r});m.observe(d),i=()=>{m.disconnect(),i=Rn}},{immediate:!0,flush:"post"}):Rn,u=()=>{i(),y()};return ze(u),{isSupported:p,stop:u}}const E5={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function F5(e={}){const{reactive:l=!1,target:n=ne,aliasMap:t=E5,passive:a=!0,onEventFired:r=Rn}=e,c=ee(new Set),p={toJSON(){return{}},current:c},i=l?ee(p):p,y=new Set,u=new Set;function d(g,_){g in i&&(l?i[g]=_:i[g].value=_)}function f(){c.clear();for(const g of u)d(g,!1)}function m(g,_){var w,E;const $=(w=g.key)==null?void 0:w.toLowerCase(),ss=[(E=g.code)==null?void 0:E.toLowerCase(),$].filter(Boolean);$&&(_?c.add($):c.delete($));for(const K of ss)u.add(K),d(K,_);$==="meta"&&!_?(y.forEach(K=>{c.delete(K),d(K,!1)}),y.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&_&&[...c,...ss].forEach(K=>y.add(K))}$s(n,"keydown",g=>(m(g,!0),r(g)),{passive:a}),$s(n,"keyup",g=>(m(g,!1),r(g)),{passive:a}),$s("blur",f,{passive:!0}),$s("focus",f,{passive:!0});const B=new Proxy(i,{get(g,_,w){if(typeof _!="string")return Reflect.get(g,_,w);if(_=_.toLowerCase(),_ in t&&(_=t[_]),!(_ in i))if(/[+_-]/.test(_)){const $=_.split(/[+_-]/g).map(H=>H.trim());i[_]=T(()=>$.every(H=>D(B[H])))}else i[_]=ns(!1);const E=Reflect.get(g,_,w);return l?D(E):E}});return B}function S2(e={}){const{type:l="page",touch:n=!0,resetOnTouchEnds:t=!1,initialValue:a={x:0,y:0},window:r=ne,eventFilter:c}=e,p=ns(a.x),i=ns(a.y),y=ns(null),u=g=>{l==="page"?(p.value=g.pageX,i.value=g.pageY):l==="client"&&(p.value=g.clientX,i.value=g.clientY),y.value="mouse"},d=()=>{p.value=a.x,i.value=a.y},f=g=>{if(g.touches.length>0){const _=g.touches[0];l==="page"?(p.value=_.pageX,i.value=_.pageY):l==="client"&&(p.value=_.clientX,i.value=_.clientY),y.value="touch"}},m=g=>c===void 0?u(g):c(()=>u(g),{}),B=g=>c===void 0?f(g):c(()=>f(g),{});return r&&($s(r,"mousemove",m,{passive:!0}),$s(r,"dragover",m,{passive:!0}),n&&($s(r,"touchstart",B,{passive:!0}),$s(r,"touchmove",B,{passive:!0}),t&&$s(r,"touchend",d,{passive:!0}))),{x:p,y:i,sourceType:y}}var Xe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Xe||(Xe={}));function k5(e,l={}){const n=Qp(e),{threshold:t=50,onSwipe:a,onSwipeEnd:r,onSwipeStart:c}=l,p=ee({x:0,y:0}),i=(K,z)=>{p.x=K,p.y=z},y=ee({x:0,y:0}),u=(K,z)=>{y.x=K,y.y=z},d=T(()=>p.x-y.x),f=T(()=>p.y-y.y),{max:m,abs:B}=Math,g=T(()=>m(B(d.value),B(f.value))>=t),_=ns(!1),w=ns(!1),E=T(()=>g.value?B(d.value)>B(f.value)?d.value>0?Xe.LEFT:Xe.RIGHT:f.value>0?Xe.UP:Xe.DOWN:Xe.NONE),$=K=>{var z,ts,hs;const fs=K.buttons===0,Cs=K.buttons===1;return(hs=(ts=(z=l.pointerTypes)==null?void 0:z.includes(K.pointerType))!=null?ts:fs||Cs)!=null?hs:!0},H=[$s(e,"pointerdown",K=>{var z,ts;if(!$(K))return;w.value=!0,(ts=(z=n.value)==null?void 0:z.style)==null||ts.setProperty("touch-action","none");const hs=K.target;hs==null||hs.setPointerCapture(K.pointerId);const{clientX:fs,clientY:Cs}=K;i(fs,Cs),u(fs,Cs),c==null||c(K)}),$s(e,"pointermove",K=>{if(!$(K)||!w.value)return;const{clientX:z,clientY:ts}=K;u(z,ts),!_.value&&g.value&&(_.value=!0),_.value&&(a==null||a(K))}),$s(e,"pointerup",K=>{var z,ts;$(K)&&(_.value&&(r==null||r(K,E.value)),w.value=!1,_.value=!1,(ts=(z=n.value)==null?void 0:z.style)==null||ts.setProperty("touch-action","initial"))})],ss=()=>H.forEach(K=>K());return{isSwiping:wl(_),direction:wl(E),posStart:wl(p),posEnd:wl(y),distanceX:d,distanceY:f,stop:ss}}let x5=0;function P2(e,l={}){const n=ns(!1),{document:t=li,immediate:a=!0,manual:r=!1,id:c=`vueuse_styletag_${++x5}`}=l,p=ns(e);let i=()=>{};const y=()=>{if(!t)return;const d=t.getElementById(c)||t.createElement("style");d.isConnected||(d.type="text/css",d.id=c,l.media&&(d.media=l.media),t.head.appendChild(d)),!n.value&&(i=js(p,f=>{d.textContent=f},{immediate:!0}),n.value=!0)},u=()=>{!t||!n.value||(i(),t.head.removeChild(t.getElementById(c)),n.value=!1)};return a&&!r&&Sa(y),r||ze(u),{id:c,css:p,unload:u,load:y,isLoaded:wl(n)}}var b5=Object.defineProperty,Ur=Object.getOwnPropertySymbols,w5=Object.prototype.hasOwnProperty,$5=Object.prototype.propertyIsEnumerable,qr=(e,l,n)=>l in e?b5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,S5=(e,l)=>{for(var n in l||(l={}))w5.call(l,n)&&qr(e,n,l[n]);if(Ur)for(var n of Ur(l))$5.call(l,n)&&qr(e,n,l[n]);return e};function O2(e={}){const{controls:l=!1,offset:n=0,immediate:t=!0,interval:a="requestAnimationFrame",callback:r}=e,c=ns(jt()+n),p=()=>c.value=jt()+n,i=r?()=>{p(),r(c.value)}:p,y=a==="requestAnimationFrame"?g5(i,{immediate:t}):$d(i,a,{immediate:t});return l?S5({timestamp:c},y):c}var P5=Object.defineProperty,Kr=Object.getOwnPropertySymbols,O5=Object.prototype.hasOwnProperty,T5=Object.prototype.propertyIsEnumerable,Jr=(e,l,n)=>l in e?P5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,M5=(e,l)=>{for(var n in l||(l={}))O5.call(l,n)&&Jr(e,n,l[n]);if(Kr)for(var n of Kr(l))T5.call(l,n)&&Jr(e,n,l[n]);return e};const N5={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};M5({linear:vd},N5);function Re(e,l,n,t={}){var a,r,c;const{clone:p=!1,passive:i=!1,eventName:y,deep:u=!1,defaultValue:d}=t,f=vl(),m=n||(f==null?void 0:f.emit)||((a=f==null?void 0:f.$emit)==null?void 0:a.bind(f))||((c=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let B=y;l||(l="modelValue"),B=y||B||`update:${l.toString()}`;const g=w=>p?Yn(p)?p(w):e5(w):w,_=()=>fd(e[l])?g(e[l]):d;if(i){const w=_(),E=ns(w);return js(()=>e[l],$=>E.value=g($)),js(E,$=>{($!==e[l]||u)&&m(B,$)},{deep:u}),E}else return T({get(){return _()},set(w){m(B,w)}})}function T2({window:e=ne}={}){if(!e)return ns(!1);const l=ns(e.document.hasFocus());return $s(e,"blur",()=>{l.value=!1}),$s(e,"focus",()=>{l.value=!0}),l}function L5(e={}){const{window:l=ne,initialWidth:n=1/0,initialHeight:t=1/0,listenOrientation:a=!0,includeScrollbar:r=!0}=e,c=ns(n),p=ns(t),i=()=>{l&&(r?(c.value=l.innerWidth,p.value=l.innerHeight):(c.value=l.document.documentElement.clientWidth,p.value=l.document.documentElement.clientHeight))};return i(),Sa(i),$s("resize",i,{passive:!0}),a&&$s("orientationchange",i,{passive:!0}),{width:c,height:p}}function R5(){return ni().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ni(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const I5=typeof Proxy=="function",V5="devtools-plugin:setup",j5="plugin:settings:set";let Zl,Wt;function H5(){var e;return Zl!==void 0||(typeof window<"u"&&window.performance?(Zl=!0,Wt=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Zl=!0,Wt=global.perf_hooks.performance):Zl=!1),Zl}function z5(){return H5()?Wt.now():Date.now()}class W5{constructor(l,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=l,this.hook=n;const t={};if(l.settings)for(const c in l.settings){const p=l.settings[c];t[c]=p.defaultValue}const a=`__vue-devtools-plugin-settings__${l.id}`;let r=Object.assign({},t);try{const c=localStorage.getItem(a),p=JSON.parse(c);Object.assign(r,p)}catch{}this.fallbacks={getSettings(){return r},setSettings(c){try{localStorage.setItem(a,JSON.stringify(c))}catch{}r=c},now(){return z5()}},n&&n.on(j5,(c,p)=>{c===this.plugin.id&&this.fallbacks.setSettings(p)}),this.proxiedOn=new Proxy({},{get:(c,p)=>this.target?this.target.on[p]:(...i)=>{this.onQueue.push({method:p,args:i})}}),this.proxiedTarget=new Proxy({},{get:(c,p)=>this.target?this.target[p]:p==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(p)?(...i)=>(this.targetQueue.push({method:p,args:i,resolve:()=>{}}),this.fallbacks[p](...i)):(...i)=>new Promise(y=>{this.targetQueue.push({method:p,args:i,resolve:y})})})}async setRealTarget(l){this.target=l;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function U5(e,l){const n=e,t=ni(),a=R5(),r=I5&&n.enableEarlyProxy;if(a&&(t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))a.emit(V5,e,l);else{const c=r?new W5(n,a):null;(t.__VUE_DEVTOOLS_PLUGINS__=t.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:l,proxy:c}),c&&l(c.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ze=typeof window<"u";function q5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ws=Object.assign;function yt(e,l){const n={};for(const t in l){const a=l[t];n[t]=ge(a)?a.map(e):e(a)}return n}const In=()=>{},ge=Array.isArray;function gs(e){const l=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(l))}const K5=/\/$/,J5=e=>e.replace(K5,"");function ut(e,l,n="/"){let t,a={},r="",c="";const p=l.indexOf("#");let i=l.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(t=l.slice(0,i),r=l.slice(i+1,p>-1?p:l.length),a=e(r)),p>-1&&(t=t||l.slice(0,p),c=l.slice(p,l.length)),t=G5(t??l,n),{fullPath:t+(r&&"?")+r+c,path:t,query:a,hash:c}}function Y5(e,l){const n=l.query?e(l.query):"";return l.path+(n&&"?")+n+(l.hash||"")}function Yr(e,l){return!l||!e.toLowerCase().startsWith(l.toLowerCase())?e:e.slice(l.length)||"/"}function Zr(e,l,n){const t=l.matched.length-1,a=n.matched.length-1;return t>-1&&t===a&&Bl(l.matched[t],n.matched[a])&&oi(l.params,n.params)&&e(l.query)===e(n.query)&&l.hash===n.hash}function Bl(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function oi(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const n in e)if(!Z5(e[n],l[n]))return!1;return!0}function Z5(e,l){return ge(e)?Gr(e,l):ge(l)?Gr(l,e):e===l}function Gr(e,l){return ge(l)?e.length===l.length&&e.every((n,t)=>n===l[t]):e.length===1&&e[0]===l}function G5(e,l){if(e.startsWith("/"))return e;if(!l.startsWith("/"))return gs(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${l}". It should look like "/${l}".`),e;if(!e)return l;const n=l.split("/"),t=e.split("/");let a=n.length-1,r,c;for(r=0;r<t.length;r++)if(c=t[r],c!==".")if(c==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+t.slice(r-(r===t.length?1:0)).join("/")}var Zn;(function(e){e.pop="pop",e.push="push"})(Zn||(Zn={}));var Vn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Vn||(Vn={}));function Q5(e){if(!e)if(Ze){const l=document.querySelector("base");e=l&&l.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),J5(e)}const X5=/^[^#]+#/;function sf(e,l){return e.replace(X5,"#")+l}function ef(e,l){const n=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:l.behavior,left:t.left-n.left-(l.left||0),top:t.top-n.top-(l.top||0)}}const nt=()=>({left:window.pageXOffset,top:window.pageYOffset});function lf(e){let l;if("el"in e){const n=e.el,t=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!t||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(t&&r){gs(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{gs(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof n=="string"?t?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a){gs(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}l=ef(a,e)}else l=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function Qr(e,l){return(history.state?history.state.position-l:-1)+e}const Ut=new Map;function nf(e,l){Ut.set(e,l)}function of(e){const l=Ut.get(e);return Ut.delete(e),l}let tf=()=>location.protocol+"//"+location.host;function ti(e,l){const{pathname:n,search:t,hash:a}=l,r=e.indexOf("#");if(r>-1){let p=a.includes(e.slice(r))?e.slice(r).length:1,i=a.slice(p);return i[0]!=="/"&&(i="/"+i),Yr(i,"")}return Yr(n,e)+t+a}function af(e,l,n,t){let a=[],r=[],c=null;const p=({state:f})=>{const m=ti(e,location),B=n.value,g=l.value;let _=0;if(f){if(n.value=m,l.value=f,c&&c===B){c=null;return}_=g?f.position-g.position:0}else t(m);a.forEach(w=>{w(n.value,B,{delta:_,type:Zn.pop,direction:_?_>0?Vn.forward:Vn.back:Vn.unknown})})};function i(){c=n.value}function y(f){a.push(f);const m=()=>{const B=a.indexOf(f);B>-1&&a.splice(B,1)};return r.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(ws({},f.state,{scroll:nt()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:y,destroy:d}}function Xr(e,l,n,t=!1,a=!1){return{back:e,current:l,forward:n,replaced:t,position:window.history.length,scroll:a?nt():null}}function rf(e){const{history:l,location:n}=window,t={value:ti(e,n)},a={value:l.state};a.value||r(t.value,{back:null,current:t.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function r(i,y,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+i:tf()+e+i;try{l[u?"replaceState":"pushState"](y,"",f),a.value=y}catch(m){gs("Error with push/replace State",m),n[u?"replace":"assign"](f)}}function c(i,y){const u=ws({},l.state,Xr(a.value.back,i,a.value.forward,!0),y,{position:a.value.position});r(i,u,!0),t.value=i}function p(i,y){const u=ws({},a.value,l.state,{forward:i,scroll:nt()});l.state||gs(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(u.current,u,!0);const d=ws({},Xr(t.value,i,null),{position:u.position+1},y);r(i,d,!1),t.value=i}return{location:t,state:a,push:p,replace:c}}function cf(e){e=Q5(e);const l=rf(e),n=af(e,l.state,l.location,l.replace);function t(r,c=!0){c||n.pauseListeners(),history.go(r)}const a=ws({location:"",base:e,go:t,createHref:sf.bind(null,e)},l,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>l.state.value}),a}function pf(e){return typeof e=="string"||e&&typeof e=="object"}function ai(e){return typeof e=="string"||typeof e=="symbol"}const rl={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ri=Symbol("navigation failure");var sc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(sc||(sc={}));const yf={[1]({location:e,currentLocation:l}){return`No match for
 ${JSON.stringify(e)}${l?`
while being at
`+JSON.stringify(l):""}`},[2]({from:e,to:l}){return`Redirected from "${e.fullPath}" to "${df(l)}" via a navigation guard.`},[4]({from:e,to:l}){return`Navigation aborted from "${e.fullPath}" to "${l.fullPath}" via a navigation guard.`},[8]({from:e,to:l}){return`Navigation cancelled from "${e.fullPath}" to "${l.fullPath}" with a new navigation.`},[16]({from:e,to:l}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function hn(e,l){return ws(new Error(yf[e](l)),{type:e,[ri]:!0},l)}function Ue(e,l){return e instanceof Error&&ri in e&&(l==null||!!(e.type&l))}const uf=["params","query","hash"];function df(e){if(typeof e=="string")return e;if("path"in e)return e.path;const l={};for(const n of uf)n in e&&(l[n]=e[n]);return JSON.stringify(l,null,2)}const ec="[^/]+?",ff={sensitive:!1,strict:!1,start:!0,end:!0},hf=/[.+*?^${}()[\]/\\]/g;function mf(e,l){const n=ws({},ff,l),t=[];let a=n.start?"^":"";const r=[];for(const y of e){const u=y.length?[]:[90];n.strict&&!y.length&&(a+="/");for(let d=0;d<y.length;d++){const f=y[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(a+="/"),a+=f.value.replace(hf,"\\$&"),m+=40;else if(f.type===1){const{value:B,repeatable:g,optional:_,regexp:w}=f;r.push({name:B,repeatable:g,optional:_});const E=w||ec;if(E!==ec){m+=10;try{new RegExp(`(${E})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${B}" (${E}): `+H.message)}}let $=g?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||($=_&&y.length<2?`(?:/${$})`:"/"+$),_&&($+="?"),a+=$,m+=20,_&&(m+=-8),g&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}t.push(u)}if(n.strict&&n.end){const y=t.length-1;t[y][t[y].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const c=new RegExp(a,n.sensitive?"":"i");function p(y){const u=y.match(c),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",B=r[f-1];d[B.name]=m&&B.repeatable?m.split("/"):m}return d}function i(y){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:B,repeatable:g,optional:_}=m,w=B in y?y[B]:"";if(ge(w)&&!g)throw new Error(`Provided param "${B}" is an array but it is not repeatable (* or + modifiers)`);const E=ge(w)?w.join("/"):w;if(!E)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${B}"`);u+=E}}return u||"/"}return{re:c,score:t,keys:r,parse:p,stringify:i}}function Bf(e,l){let n=0;for(;n<e.length&&n<l.length;){const t=l[n]-e[n];if(t)return t;n++}return e.length<l.length?e.length===1&&e[0]===40+40?-1:1:e.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function vf(e,l){let n=0;const t=e.score,a=l.score;for(;n<t.length&&n<a.length;){const r=Bf(t[n],a[n]);if(r)return r;n++}if(Math.abs(a.length-t.length)===1){if(lc(t))return 1;if(lc(a))return-1}return a.length-t.length}function lc(e){const l=e[e.length-1];return e.length>0&&l[l.length-1]<0}const Af={type:0,value:""},_f=/[a-zA-Z0-9_]/;function gf(e){if(!e)return[[]];if(e==="/")return[[Af]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function l(m){throw new Error(`ERR (${n})/"${y}": ${m}`)}let n=0,t=n;const a=[];let r;function c(){r&&a.push(r),r=[]}let p=0,i,y="",u="";function d(){y&&(n===0?r.push({type:0,value:y}):n===1||n===2||n===3?(r.length>1&&(i==="*"||i==="+")&&l(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:y,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):l("Invalid state to consume buffer"),y="")}function f(){y+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&n!==2){t=n,n=4;continue}switch(n){case 0:i==="/"?(y&&d(),c()):i===":"?(d(),n=1):f();break;case 4:f(),n=t;break;case 1:i==="("?n=2:_f.test(i)?f():(d(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:n=3:u+=i;break;case 3:d(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,u="";break;default:l("Unknown state");break}}return n===2&&l(`Unfinished custom RegExp for param "${y}"`),d(),c(),a}function Cf(e,l,n){const t=mf(gf(e.path),n);{const r=new Set;for(const c of t.keys)r.has(c.name)&&gs(`Found duplicated params with name "${c.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(c.name)}const a=ws(t,{record:e,parent:l,children:[],alias:[]});return l&&!a.record.aliasOf==!l.record.aliasOf&&l.children.push(a),a}function Df(e,l){const n=[],t=new Map;l=tc({strict:!1,end:!0,sensitive:!1},l);function a(u){return t.get(u)}function r(u,d,f){const m=!f,B=Ef(u);bf(B,d),B.aliasOf=f&&f.record;const g=tc(l,u),_=[B];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of $)_.push(ws({},B,{components:f?f.record.components:B.components,path:H,aliasOf:f?f.record:B}))}let w,E;for(const $ of _){const{path:H}=$;if(d&&H[0]!=="/"){const ss=d.record.path,K=ss[ss.length-1]==="/"?"":"/";$.path=d.record.path+(H&&K+H)}if($.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(w=Cf($,d,g),d&&H[0]==="/"&&wf(w,d),f?(f.alias.push(w),xf(f,w)):(E=E||w,E!==w&&E.alias.push(w),m&&u.name&&!oc(w)&&c(u.name)),B.children){const ss=B.children;for(let K=0;K<ss.length;K++)r(ss[K],w,f&&f.children[K])}f=f||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&i(w)}return E?()=>{c(E)}:In}function c(u){if(ai(u)){const d=t.get(u);d&&(t.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(c),d.alias.forEach(c))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&t.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function p(){return n}function i(u){let d=0;for(;d<n.length&&vf(u,n[d])>=0&&(u.record.path!==n[d].record.path||!ci(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!oc(u)&&t.set(u.record.name,u)}function y(u,d){let f,m={},B,g;if("name"in u&&u.name){if(f=t.get(u.name),!f)throw hn(1,{location:u});{const E=Object.keys(u.params||{}).filter($=>!f.keys.find(H=>H.name===$));E.length&&gs(`Discarded invalid param(s) "${E.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=f.record.name,m=ws(nc(d.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&nc(u.params,f.keys.map(E=>E.name))),B=f.stringify(m)}else if("path"in u)B=u.path,B.startsWith("/")||gs(`The Matcher cannot resolve relative paths but received "${B}". Unless you directly called \`matcher.resolve("${B}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(E=>E.re.test(B)),f&&(m=f.parse(B),g=f.record.name);else{if(f=d.name?t.get(d.name):n.find(E=>E.re.test(d.path)),!f)throw hn(1,{location:u,currentLocation:d});g=f.record.name,m=ws({},d.params,u.params),B=f.stringify(m)}const _=[];let w=f;for(;w;)_.unshift(w.record),w=w.parent;return{name:g,path:B,params:m,matched:_,meta:kf(_)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:y,removeRoute:c,getRoutes:p,getRecordMatcher:a}}function nc(e,l){const n={};for(const t of l)t in e&&(n[t]=e[t]);return n}function Ef(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ff(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ff(e){const l={},n=e.props||!1;if("component"in e)l.default=n;else for(const t in e.components)l[t]=typeof n=="boolean"?n:n[t];return l}function oc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function kf(e){return e.reduce((l,n)=>ws(l,n.meta),{})}function tc(e,l){const n={};for(const t in e)n[t]=t in l?l[t]:e[t];return n}function qt(e,l){return e.name===l.name&&e.optional===l.optional&&e.repeatable===l.repeatable}function xf(e,l){for(const n of e.keys)if(!n.optional&&!l.keys.find(qt.bind(null,n)))return gs(`Alias "${l.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of l.keys)if(!n.optional&&!e.keys.find(qt.bind(null,n)))return gs(`Alias "${l.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function bf(e,l){l&&l.record.name&&!e.name&&!e.path&&gs(`The route named "${String(l.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function wf(e,l){for(const n of l.keys)if(!e.keys.find(qt.bind(null,n)))return gs(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${l.record.path}".`)}function ci(e,l){return l.children.some(n=>n===e||ci(e,n))}const pi=/#/g,$f=/&/g,Sf=/\//g,Pf=/=/g,Of=/\?/g,ii=/\+/g,Tf=/%5B/g,Mf=/%5D/g,yi=/%5E/g,Nf=/%60/g,ui=/%7B/g,Lf=/%7C/g,di=/%7D/g,Rf=/%20/g;function Pa(e){return encodeURI(""+e).replace(Lf,"|").replace(Tf,"[").replace(Mf,"]")}function If(e){return Pa(e).replace(ui,"{").replace(di,"}").replace(yi,"^")}function Kt(e){return Pa(e).replace(ii,"%2B").replace(Rf,"+").replace(pi,"%23").replace($f,"%26").replace(Nf,"`").replace(ui,"{").replace(di,"}").replace(yi,"^")}function Vf(e){return Kt(e).replace(Pf,"%3D")}function jf(e){return Pa(e).replace(pi,"%23").replace(Of,"%3F")}function Hf(e){return e==null?"":jf(e).replace(Sf,"%2F")}function Gn(e){try{return decodeURIComponent(""+e)}catch{gs(`Error decoding "${e}". Using original value`)}return""+e}function zf(e){const l={};if(e===""||e==="?")return l;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<t.length;++a){const r=t[a].replace(ii," "),c=r.indexOf("="),p=Gn(c<0?r:r.slice(0,c)),i=c<0?null:Gn(r.slice(c+1));if(p in l){let y=l[p];ge(y)||(y=l[p]=[y]),y.push(i)}else l[p]=i}return l}function ac(e){let l="";for(let n in e){const t=e[n];if(n=Vf(n),t==null){t!==void 0&&(l+=(l.length?"&":"")+n);continue}(ge(t)?t.map(r=>r&&Kt(r)):[t&&Kt(t)]).forEach(r=>{r!==void 0&&(l+=(l.length?"&":"")+n,r!=null&&(l+="="+r))})}return l}function Wf(e){const l={};for(const n in e){const t=e[n];t!==void 0&&(l[n]=ge(t)?t.map(a=>a==null?null:""+a):t==null?t:""+t)}return l}const Uf=Symbol("router view location matched"),rc=Symbol("router view depth"),Oa=Symbol("router"),fi=Symbol("route location"),Jt=Symbol("router view location");function Dn(){let e=[];function l(t){return e.push(t),()=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:l,list:()=>e,reset:n}}function pl(e,l,n,t,a){const r=t&&(t.enterCallbacks[a]=t.enterCallbacks[a]||[]);return()=>new Promise((c,p)=>{const i=d=>{d===!1?p(hn(4,{from:n,to:l})):d instanceof Error?p(d):pf(d)?p(hn(2,{from:l,to:d})):(r&&t.enterCallbacks[a]===r&&typeof d=="function"&&r.push(d),c())},y=e.call(t&&t.instances[a],l,n,qf(i,l,n));let u=Promise.resolve(y);if(e.length<3&&(u=u.then(i)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof y=="object"&&"then"in y)u=u.then(f=>i._called?f:(gs(d),Promise.reject(new Error("Invalid navigation guard"))));else if(y!==void 0&&!i._called){gs(d),p(new Error("Invalid navigation guard"));return}}u.catch(d=>p(d))})}function qf(e,l,n){let t=0;return function(){t++===1&&gs(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${l.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,t===1&&e.apply(null,arguments)}}function dt(e,l,n,t){const a=[];for(const r of e){!r.components&&!r.children.length&&gs(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const c in r.components){let p=r.components[c];{if(!p||typeof p!="object"&&typeof p!="function")throw gs(`Component "${c}" in record with path "${r.path}" is not a valid component. Received "${String(p)}".`),new Error("Invalid route component");if("then"in p){gs(`Component "${c}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const i=p;p=()=>i}else p.__asyncLoader&&!p.__warnedDefineAsync&&(p.__warnedDefineAsync=!0,gs(`Component "${c}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(l!=="beforeRouteEnter"&&!r.instances[c]))if(Kf(p)){const y=(p.__vccOpts||p)[l];y&&a.push(pl(y,n,t,r,c))}else{let i=p();"catch"in i||(gs(`Component "${c}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),i=Promise.resolve(i)),a.push(()=>i.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${r.path}"`));const u=q5(y)?y.default:y;r.components[c]=u;const f=(u.__vccOpts||u)[l];return f&&pl(f,n,t,r,c)()}))}}}return a}function Kf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function cc(e){const l=b(Oa),n=b(fi),t=T(()=>l.resolve(D(e.to))),a=T(()=>{const{matched:i}=t.value,{length:y}=i,u=i[y-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Bl.bind(null,u));if(f>-1)return f;const m=pc(i[y-2]);return y>1&&pc(u)===m&&d[d.length-1].path!==m?d.findIndex(Bl.bind(null,i[y-2])):f}),r=T(()=>a.value>-1&&Gf(n.params,t.value.params)),c=T(()=>a.value>-1&&a.value===n.matched.length-1&&oi(n.params,t.value.params));function p(i={}){return Zf(i)?l[D(e.replace)?"replace":"push"](D(e.to)).catch(In):Promise.resolve()}if(Ze){const i=vl();if(i){const y={route:t.value,isActive:r.value,isExactActive:c.value};i.__vrl_devtools=i.__vrl_devtools||[],i.__vrl_devtools.push(y),Bn(()=>{y.route=t.value,y.isActive=r.value,y.isExactActive=c.value},{flush:"post"})}}return{route:t,href:T(()=>t.value.href),isActive:r,isExactActive:c,navigate:p}}const Jf=Vs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cc,setup(e,{slots:l}){const n=ee(cc(e)),{options:t}=b(Oa),a=T(()=>({[ic(e.activeClass,t.linkActiveClass,"router-link-active")]:n.isActive,[ic(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=l.default&&l.default(n);return e.custom?r:lt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},r)}}}),Yf=Jf;function Zf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const l=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return e.preventDefault&&e.preventDefault(),!0}}function Gf(e,l){for(const n in l){const t=l[n],a=e[n];if(typeof t=="string"){if(t!==a)return!1}else if(!ge(a)||a.length!==t.length||t.some((r,c)=>r!==a[c]))return!1}return!0}function pc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ic=(e,l,n)=>e??l??n,Qf=Vs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:l,slots:n}){sh();const t=b(Jt),a=T(()=>e.route||t.value),r=b(rc,0),c=T(()=>{let y=D(r);const{matched:u}=a.value;let d;for(;(d=u[y])&&!d.components;)y++;return y}),p=T(()=>a.value.matched[c.value]);Be(rc,T(()=>c.value+1)),Be(Uf,p),Be(Jt,a);const i=ns();return js(()=>[i.value,p.value,e.name],([y,u,d],[f,m,B])=>{u&&(u.instances[d]=y,m&&m!==u&&y&&y===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),y&&u&&(!m||!Bl(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(g=>g(y))},{flush:"post"}),()=>{const y=a.value,u=e.name,d=p.value,f=d&&d.components[u];if(!f)return yc(n.default,{Component:f,route:y});const m=d.props[u],B=m?m===!0?y.params:typeof m=="function"?m(y):m:null,_=lt(f,ws({},B,l,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(d.instances[u]=null)},ref:i}));if(Ze&&_.ref){const w={depth:c.value,name:d.name,path:d.path,meta:d.meta};(ge(_.ref)?_.ref.map($=>$.i):[_.ref.i]).forEach($=>{$.__vrv_devtools=w})}return yc(n.default,{Component:_,route:y})||_}}});function yc(e,l){if(!e)return null;const n=e(l);return n.length===1?n[0]:n}const Xf=Qf;function sh(){const e=vl(),l=e.parent&&e.parent.type.name;if(l&&(l==="KeepAlive"||l.includes("Transition"))){const n=l==="KeepAlive"?"keep-alive":"transition";gs(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function En(e,l){const n=ws({},e,{matched:e.matched.map(t=>ph(t,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:l,value:n}}}function yo(e){return{_custom:{display:e}}}let eh=0;function lh(e,l,n){if(l.__hasDevtools)return;l.__hasDevtools=!0;const t=eh++;U5({id:"org.vuejs.router"+(t?"."+t:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((u,d)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:En(l.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:u,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:hi})}ge(d.__vrl_devtools)&&(d.__devtoolsApi=a,d.__vrl_devtools.forEach(f=>{let m=vi,B="";f.isExactActive?(m=Bi,B="This is exactly active"):f.isActive&&(m=mi,B="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:B,backgroundColor:m})}))}),js(l.currentRoute,()=>{i(),a.notifyComponentUpdate(),a.sendInspectorTree(p),a.sendInspectorState(p)});const r="router:navigations:"+t;a.addTimelineLayer({id:r,label:`Router${t?" "+t:""} Navigations`,color:4237508}),l.onError((u,d)=>{a.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:a.now(),data:{error:u},groupId:d.meta.__navigationId}})});let c=0;l.beforeEach((u,d)=>{const f={guard:yo("beforeEach"),from:En(d,"Current Location during this navigation"),to:En(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:c++}),a.addTimelineEvent({layerId:r,event:{time:a.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),l.afterEach((u,d,f)=>{const m={guard:yo("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=yo("❌")):m.status=yo("✅"),m.from=En(d,"Current Location during this navigation"),m.to=En(u,"Target location"),a.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:u.fullPath,time:a.now(),data:m,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const p="router-inspector:"+t;a.addInspector({id:p,label:"Routes"+(t?" "+t:""),icon:"book",treeFilterPlaceholder:"Search routes"});function i(){if(!y)return;const u=y;let d=n.getRoutes().filter(f=>!f.parent);d.forEach(gi),u.filter&&(d=d.filter(f=>Yt(f,u.filter.toLowerCase()))),d.forEach(f=>_i(f,l.currentRoute.value)),u.rootNodes=d.map(Ai)}let y;a.on.getInspectorTree(u=>{y=u,u.app===e&&u.inspectorId===p&&i()}),a.on.getInspectorState(u=>{if(u.app===e&&u.inspectorId===p){const f=n.getRoutes().find(m=>m.record.__vd_id===u.nodeId);f&&(u.state={options:oh(f)})}}),a.sendInspectorTree(p),a.sendInspectorState(p)})}function nh(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function oh(e){const{record:l}=e,n=[{editable:!1,key:"path",value:l.path}];return l.name!=null&&n.push({editable:!1,key:"name",value:l.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(t=>`${t.name}${nh(t)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),l.redirect!=null&&n.push({editable:!1,key:"redirect",value:l.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(t=>t.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(t=>t.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const hi=15485081,mi=2450411,Bi=8702998,th=2282478,vi=16486972,ah=6710886;function Ai(e){const l=[],{record:n}=e;n.name!=null&&l.push({label:String(n.name),textColor:0,backgroundColor:th}),n.aliasOf&&l.push({label:"alias",textColor:0,backgroundColor:vi}),e.__vd_match&&l.push({label:"matches",textColor:0,backgroundColor:hi}),e.__vd_exactActive&&l.push({label:"exact",textColor:0,backgroundColor:Bi}),e.__vd_active&&l.push({label:"active",textColor:0,backgroundColor:mi}),n.redirect&&l.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:ah});let t=n.__vd_id;return t==null&&(t=String(rh++),n.__vd_id=t),{id:t,label:n.path,tags:l,children:e.children.map(Ai)}}let rh=0;const ch=/^\/(.*)\/([a-z]*)$/;function _i(e,l){const n=l.matched.length&&Bl(l.matched[l.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=l.matched.some(t=>Bl(t,e.record))),e.children.forEach(t=>_i(t,l))}function gi(e){e.__vd_match=!1,e.children.forEach(gi)}function Yt(e,l){const n=String(e.re).match(ch);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(l))return e.children.forEach(c=>Yt(c,l)),e.record.path!=="/"||l==="/"?(e.__vd_match=e.re.test(l),!0):!1;const a=e.record.path.toLowerCase(),r=Gn(a);return!l.startsWith("/")&&(r.includes(l)||a.includes(l))||r.startsWith(l)||a.startsWith(l)||e.record.name&&String(e.record.name).includes(l)?!0:e.children.some(c=>Yt(c,l))}function ph(e,l){const n={};for(const t in e)l.includes(t)||(n[t]=e[t]);return n}function ih(e){const l=Df(e.routes,e),n=e.parseQuery||zf,t=e.stringifyQuery||ac,a=e.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Dn(),c=Dn(),p=Dn(),i=je(rl);let y=rl;Ze&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yt.bind(null,x=>""+x),d=yt.bind(null,Hf),f=yt.bind(null,Gn);function m(x,es){let G,X;return ai(x)?(G=l.getRecordMatcher(x),X=es):X=x,l.addRoute(X,G)}function B(x){const es=l.getRecordMatcher(x);es?l.removeRoute(es):gs(`Cannot remove non-existent route "${String(x)}"`)}function g(){return l.getRoutes().map(x=>x.record)}function _(x){return!!l.getRecordMatcher(x)}function w(x,es){if(es=ws({},es||i.value),typeof x=="string"){const ps=ut(n,x,es.path),Ms=l.resolve({path:ps.path},es),h=a.createHref(ps.fullPath);return h.startsWith("//")?gs(`Location "${x}" resolved to "${h}". A resolved location cannot start with multiple slashes.`):Ms.matched.length||gs(`No match found for location with path "${x}"`),ws(ps,Ms,{params:f(Ms.params),hash:Gn(ps.hash),redirectedFrom:void 0,href:h})}let G;if("path"in x)"params"in x&&!("name"in x)&&Object.keys(x.params).length&&gs(`Path "${x.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),G=ws({},x,{path:ut(n,x.path,es.path).path});else{const ps=ws({},x.params);for(const Ms in ps)ps[Ms]==null&&delete ps[Ms];G=ws({},x,{params:d(x.params)}),es.params=d(es.params)}const X=l.resolve(G,es),Bs=x.hash||"";Bs&&!Bs.startsWith("#")&&gs(`A \`hash\` should always start with the character "#". Replace "${Bs}" with "#${Bs}".`),X.params=u(f(X.params));const Fs=Y5(t,ws({},x,{hash:If(Bs),path:X.path})),cs=a.createHref(Fs);return cs.startsWith("//")?gs(`Location "${x}" resolved to "${cs}". A resolved location cannot start with multiple slashes.`):X.matched.length||gs(`No match found for location with path "${"path"in x?x.path:x}"`),ws({fullPath:Fs,hash:Bs,query:t===ac?Wf(x.query):x.query||{}},X,{redirectedFrom:void 0,href:cs})}function E(x){return typeof x=="string"?ut(n,x,i.value.path):ws({},x)}function $(x,es){if(y!==x)return hn(8,{from:es,to:x})}function H(x){return z(x)}function ss(x){return H(ws(E(x),{replace:!0}))}function K(x){const es=x.matched[x.matched.length-1];if(es&&es.redirect){const{redirect:G}=es;let X=typeof G=="function"?G(x):G;if(typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=E(X):{path:X},X.params={}),!("path"in X)&&!("name"in X))throw gs(`Invalid redirect found:
${JSON.stringify(X,null,2)}
 when navigating to "${x.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ws({query:x.query,hash:x.hash,params:"path"in X?{}:x.params},X)}}function z(x,es){const G=y=w(x),X=i.value,Bs=x.state,Fs=x.force,cs=x.replace===!0,ps=K(G);if(ps)return z(ws(E(ps),{state:typeof ps=="object"?ws({},Bs,ps.state):Bs,force:Fs,replace:cs}),es||G);const Ms=G;Ms.redirectedFrom=es;let h;return!Fs&&Zr(t,X,G)&&(h=hn(16,{to:Ms,from:X}),bs(X,X,!0,!1)),(h?Promise.resolve(h):hs(Ms,X)).catch(v=>Ue(v)?Ue(v,2)?v:vs(v):Q(v,Ms,X)).then(v=>{if(v){if(Ue(v,2))return Zr(t,w(v.to),Ms)&&es&&(es._count=es._count?es._count+1:1)>10?(gs(`Detected an infinite redirection in a navigation guard when going from "${X.fullPath}" to "${Ms.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):z(ws({replace:cs},E(v.to),{state:typeof v.to=="object"?ws({},Bs,v.to.state):Bs,force:Fs}),es||Ms)}else v=Cs(Ms,X,!0,cs,Bs);return fs(Ms,X,v),v})}function ts(x,es){const G=$(x,es);return G?Promise.reject(G):Promise.resolve()}function hs(x,es){let G;const[X,Bs,Fs]=yh(x,es);G=dt(X.reverse(),"beforeRouteLeave",x,es);for(const ps of X)ps.leaveGuards.forEach(Ms=>{G.push(pl(Ms,x,es))});const cs=ts.bind(null,x,es);return G.push(cs),Gl(G).then(()=>{G=[];for(const ps of r.list())G.push(pl(ps,x,es));return G.push(cs),Gl(G)}).then(()=>{G=dt(Bs,"beforeRouteUpdate",x,es);for(const ps of Bs)ps.updateGuards.forEach(Ms=>{G.push(pl(Ms,x,es))});return G.push(cs),Gl(G)}).then(()=>{G=[];for(const ps of x.matched)if(ps.beforeEnter&&!es.matched.includes(ps))if(ge(ps.beforeEnter))for(const Ms of ps.beforeEnter)G.push(pl(Ms,x,es));else G.push(pl(ps.beforeEnter,x,es));return G.push(cs),Gl(G)}).then(()=>(x.matched.forEach(ps=>ps.enterCallbacks={}),G=dt(Fs,"beforeRouteEnter",x,es),G.push(cs),Gl(G))).then(()=>{G=[];for(const ps of c.list())G.push(pl(ps,x,es));return G.push(cs),Gl(G)}).catch(ps=>Ue(ps,8)?ps:Promise.reject(ps))}function fs(x,es,G){for(const X of p.list())X(x,es,G)}function Cs(x,es,G,X,Bs){const Fs=$(x,es);if(Fs)return Fs;const cs=es===rl,ps=Ze?history.state:{};G&&(X||cs?a.replace(x.fullPath,ws({scroll:cs&&ps&&ps.scroll},Bs)):a.push(x.fullPath,Bs)),i.value=x,bs(x,es,G,cs),vs()}let Rs;function Js(){Rs||(Rs=a.listen((x,es,G)=>{if(!de.listening)return;const X=w(x),Bs=K(X);if(Bs){z(ws(Bs,{replace:!0}),X).catch(In);return}y=X;const Fs=i.value;Ze&&nf(Qr(Fs.fullPath,G.delta),nt()),hs(X,Fs).catch(cs=>Ue(cs,12)?cs:Ue(cs,2)?(z(cs.to,X).then(ps=>{Ue(ps,20)&&!G.delta&&G.type===Zn.pop&&a.go(-1,!1)}).catch(In),Promise.reject()):(G.delta&&a.go(-G.delta,!1),Q(cs,X,Fs))).then(cs=>{cs=cs||Cs(X,Fs,!1),cs&&(G.delta&&!Ue(cs,8)?a.go(-G.delta,!1):G.type===Zn.pop&&Ue(cs,20)&&a.go(-1,!1)),fs(X,Fs,cs)}).catch(In)}))}let Qs=Dn(),Ps=Dn(),Ns;function Q(x,es,G){vs(x);const X=Ps.list();return X.length?X.forEach(Bs=>Bs(x,es,G)):(gs("uncaught error during route navigation:"),console.error(x)),Promise.reject(x)}function rs(){return Ns&&i.value!==rl?Promise.resolve():new Promise((x,es)=>{Qs.add([x,es])})}function vs(x){return Ns||(Ns=!x,Js(),Qs.list().forEach(([es,G])=>x?G(x):es()),Qs.reset()),x}function bs(x,es,G,X){const{scrollBehavior:Bs}=e;if(!Ze||!Bs)return Promise.resolve();const Fs=!G&&of(Qr(x.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return Pe().then(()=>Bs(x,es,Fs)).then(cs=>cs&&lf(cs)).catch(cs=>Q(cs,x,es))}const Ce=x=>a.go(x);let ie;const Me=new Set,de={currentRoute:i,listening:!0,addRoute:m,removeRoute:B,hasRoute:_,getRoutes:g,resolve:w,options:e,push:H,replace:ss,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:r.add,beforeResolve:c.add,afterEach:p.add,onError:Ps.add,isReady:rs,install(x){const es=this;x.component("RouterLink",Yf),x.component("RouterView",Xf),x.config.globalProperties.$router=es,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>D(i)}),Ze&&!ie&&i.value===rl&&(ie=!0,H(a.location).catch(Bs=>{gs("Unexpected error when starting the router:",Bs)}));const G={};for(const Bs in rl)G[Bs]=T(()=>i.value[Bs]);x.provide(Oa,es),x.provide(fi,ee(G)),x.provide(Jt,i);const X=x.unmount;Me.add(x),x.unmount=function(){Me.delete(x),Me.size<1&&(y=rl,Rs&&Rs(),Rs=null,i.value=rl,ie=!1,Ns=!1),X()},Ze&&lh(x,es,l)}};return de}function Gl(e){return e.reduce((l,n)=>l.then(()=>n()),Promise.resolve())}function yh(e,l){const n=[],t=[],a=[],r=Math.max(l.matched.length,e.matched.length);for(let c=0;c<r;c++){const p=l.matched[c];p&&(e.matched.find(y=>Bl(y,p))?t.push(p):n.push(p));const i=e.matched[c];i&&(l.matched.find(y=>Bl(y,i))||a.push(i))}return[n,t,a]}const ft=ns(!1),jn=ns(!1),tn=ns(!1),uh=ns(!0),Zt=Xd({xs:460,...Jd}),Ll=L5(),Ci=F5(),dh=T(()=>Ll.height.value-Ll.width.value/dl>180),Di=D5(Oe?document.body:null),pn=Kd(),fh=T(()=>{var e,l;return["INPUT","TEXTAREA"].includes(((e=pn.value)==null?void 0:e.tagName)||"")||((l=pn.value)==null?void 0:l.classList.contains("CodeMirror-code"))}),hh=T(()=>{var e;return["BUTTON","A"].includes(((e=pn.value)==null?void 0:e.tagName)||"")});Te("slidev-camera","default");Te("slidev-mic","default");const Ao=Te("slidev-scale",0),ae=Te("slidev-show-overview",!1),ht=Te("slidev-presenter-cursor",!0),uc=Te("slidev-show-editor",!1);Te("slidev-editor-width",Oe?window.innerWidth*.4:100);const Ei=Xp(ae);function dc(e,l,n,t=a=>a){return e*t(.5-l*(.5-n))}function mh(e){return[-e[0],-e[1]]}function be(e,l){return[e[0]+l[0],e[1]+l[1]]}function Ee(e,l){return[e[0]-l[0],e[1]-l[1]]}function xe(e,l){return[e[0]*l,e[1]*l]}function Bh(e,l){return[e[0]/l,e[1]/l]}function Fn(e){return[e[1],-e[0]]}function fc(e,l){return e[0]*l[0]+e[1]*l[1]}function vh(e,l){return e[0]===l[0]&&e[1]===l[1]}function Ah(e){return Math.hypot(e[0],e[1])}function _h(e){return e[0]*e[0]+e[1]*e[1]}function hc(e,l){return _h(Ee(e,l))}function Fi(e){return Bh(e,Ah(e))}function gh(e,l){return Math.hypot(e[1]-l[1],e[0]-l[0])}function kn(e,l,n){let t=Math.sin(n),a=Math.cos(n),r=e[0]-l[0],c=e[1]-l[1],p=r*a-c*t,i=r*t+c*a;return[p+l[0],i+l[1]]}function Gt(e,l,n){return be(e,xe(Ee(l,e),n))}function mc(e,l,n){return be(e,xe(l,n))}var{min:Ql,PI:Ch}=Math,Bc=.275,xn=Ch+1e-4;function Dh(e,l={}){let{size:n=16,smoothing:t=.5,thinning:a=.5,simulatePressure:r=!0,easing:c=Q=>Q,start:p={},end:i={},last:y=!1}=l,{cap:u=!0,easing:d=Q=>Q*(2-Q)}=p,{cap:f=!0,easing:m=Q=>--Q*Q*Q+1}=i;if(e.length===0||n<=0)return[];let B=e[e.length-1].runningLength,g=p.taper===!1?0:p.taper===!0?Math.max(n,B):p.taper,_=i.taper===!1?0:i.taper===!0?Math.max(n,B):i.taper,w=Math.pow(n*t,2),E=[],$=[],H=e.slice(0,10).reduce((Q,rs)=>{let vs=rs.pressure;if(r){let bs=Ql(1,rs.distance/n),Ce=Ql(1,1-bs);vs=Ql(1,Q+(Ce-Q)*(bs*Bc))}return(Q+vs)/2},e[0].pressure),ss=dc(n,a,e[e.length-1].pressure,c),K,z=e[0].vector,ts=e[0].point,hs=ts,fs=ts,Cs=hs,Rs=!1;for(let Q=0;Q<e.length;Q++){let{pressure:rs}=e[Q],{point:vs,vector:bs,distance:Ce,runningLength:ie}=e[Q];if(Q<e.length-1&&B-ie<3)continue;if(a){if(r){let Fs=Ql(1,Ce/n),cs=Ql(1,1-Fs);rs=Ql(1,H+(cs-H)*(Fs*Bc))}ss=dc(n,a,rs,c)}else ss=n/2;K===void 0&&(K=ss);let Me=ie<g?d(ie/g):1,de=B-ie<_?m((B-ie)/_):1;ss=Math.max(.01,ss*Math.min(Me,de));let x=(Q<e.length-1?e[Q+1]:e[Q]).vector,es=Q<e.length-1?fc(bs,x):1,G=fc(bs,z)<0&&!Rs,X=es!==null&&es<0;if(G||X){let Fs=xe(Fn(z),ss);for(let cs=1/13,ps=0;ps<=1;ps+=cs)fs=kn(Ee(vs,Fs),vs,xn*ps),E.push(fs),Cs=kn(be(vs,Fs),vs,xn*-ps),$.push(Cs);ts=fs,hs=Cs,X&&(Rs=!0);continue}if(Rs=!1,Q===e.length-1){let Fs=xe(Fn(bs),ss);E.push(Ee(vs,Fs)),$.push(be(vs,Fs));continue}let Bs=xe(Fn(Gt(x,bs,es)),ss);fs=Ee(vs,Bs),(Q<=1||hc(ts,fs)>w)&&(E.push(fs),ts=fs),Cs=be(vs,Bs),(Q<=1||hc(hs,Cs)>w)&&($.push(Cs),hs=Cs),H=rs,z=bs}let Js=e[0].point.slice(0,2),Qs=e.length>1?e[e.length-1].point.slice(0,2):be(e[0].point,[1,1]),Ps=[],Ns=[];if(e.length===1){if(!(g||_)||y){let Q=mc(Js,Fi(Fn(Ee(Js,Qs))),-(K||ss)),rs=[];for(let vs=1/13,bs=vs;bs<=1;bs+=vs)rs.push(kn(Q,Js,xn*2*bs));return rs}}else{if(!(g||_&&e.length===1))if(u)for(let rs=1/13,vs=rs;vs<=1;vs+=rs){let bs=kn($[0],Js,xn*vs);Ps.push(bs)}else{let rs=Ee(E[0],$[0]),vs=xe(rs,.5),bs=xe(rs,.51);Ps.push(Ee(Js,vs),Ee(Js,bs),be(Js,bs),be(Js,vs))}let Q=Fn(mh(e[e.length-1].vector));if(_||g&&e.length===1)Ns.push(Qs);else if(f){let rs=mc(Qs,Q,ss);for(let vs=1/29,bs=vs;bs<1;bs+=vs)Ns.push(kn(rs,Qs,xn*3*bs))}else Ns.push(be(Qs,xe(Q,ss)),be(Qs,xe(Q,ss*.99)),Ee(Qs,xe(Q,ss*.99)),Ee(Qs,xe(Q,ss)))}return E.concat(Ns,$.reverse(),Ps)}function Eh(e,l={}){var n;let{streamline:t=.5,size:a=16,last:r=!1}=l;if(e.length===0)return[];let c=.15+(1-t)*.85,p=Array.isArray(e[0])?e:e.map(({x:m,y:B,pressure:g=.5})=>[m,B,g]);if(p.length===2){let m=p[1];p=p.slice(0,-1);for(let B=1;B<5;B++)p.push(Gt(p[0],m,B/4))}p.length===1&&(p=[...p,[...be(p[0],[1,1]),...p[0].slice(2)]]);let i=[{point:[p[0][0],p[0][1]],pressure:p[0][2]>=0?p[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,d=i[0],f=p.length-1;for(let m=1;m<p.length;m++){let B=r&&m===f?p[m].slice(0,2):Gt(d.point,p[m],c);if(vh(d.point,B))continue;let g=gh(B,d.point);if(u+=g,m<f&&!y){if(u<a)continue;y=!0}d={point:B,pressure:p[m][2]>=0?p[m][2]:.5,vector:Fi(Ee(d.point,B)),distance:g,runningLength:u},i.push(d)}return i[0].vector=((n=i[1])==null?void 0:n.vector)||[0,0],i}function Fh(e,l={}){return Dh(Eh(e,l),l)}var kh=()=>({events:{},emit(e,...l){let n=this.events[e]||[];for(let t=0,a=n.length;t<a;t++)n[t](...l)},on(e,l){var n;return(n=this.events[e])!=null&&n.push(l)||(this.events[e]=[l]),()=>{var t;this.events[e]=(t=this.events[e])==null?void 0:t.filter(a=>l!==a)}}});function Oo(e,l){return e-l}function xh(e){return e<0?-1:1}function To(e){return[Math.abs(e),xh(e)]}function ki(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var bh=2,Ge=bh,vn=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var l;const n=this.drauu.el,t=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*t,y:(e.pageY-a.top)*t,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const r=a.matrixTransform((l=n.getScreenCTM())==null?void 0:l.inverse());return{x:r.x*t,y:r.y*t,pressure:e.pressure}}}createElement(e,l){const n=document.createElementNS("http://www.w3.org/2000/svg",e),t=l?{...this.brush,...l}:this.brush;return n.setAttribute("fill",t.fill??"transparent"),n.setAttribute("stroke",t.color),n.setAttribute("stroke-width",t.size.toString()),n.setAttribute("stroke-linecap","round"),t.dasharray&&n.setAttribute("stroke-dasharray",t.dasharray),n}attr(e,l){this.el.setAttribute(e,typeof l=="string"?l:l.toFixed(Ge))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},wh=class extends vn{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const l=Fh(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!l.length)return"";const n=l.reduce((t,[a,r],c,p)=>{const[i,y]=p[(c+1)%p.length];return t.push(a,r,(a+i)/2,(r+y)/2),t},["M",...l[0],"Q"]);return n.push("Z"),n.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},$h=class extends vn{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,n]=To(e.x-this.start.x),[t,a]=To(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(l,t);l=r,t=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",l),this.attr("ry",t);else{const[r,c]=[this.start.x,this.start.x+l*n].sort(Oo),[p,i]=[this.start.y,this.start.y+t*a].sort(Oo);this.attr("cx",(r+c)/2),this.attr("cy",(p+i)/2),this.attr("rx",(c-r)/2),this.attr("ry",(i-p)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function xi(e,l){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",l),t.setAttribute("id",e),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(a),n.appendChild(t),n}var Sh=class extends vn{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const l=ki(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(xi(l,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${l})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:l,y:n}=e;if(this.shiftPressed){const t=e.x-this.start.x,a=e.y-this.start.y;if(a!==0){let r=t/a;r=Math.round(r),Math.abs(r)<=1?(l=this.start.x+a*r,n=this.start.y+a):(l=this.start.x+t,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-l),this.attr("y1",this.start.y*2-n),this.attr("x2",l),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",l),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Ph=class extends vn{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,n]=To(e.x-this.start.x),[t,a]=To(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(l,t);l=r,t=r}if(this.altPressed)this.attr("x",this.start.x-l),this.attr("y",this.start.y-t),this.attr("width",l*2),this.attr("height",t*2);else{const[r,c]=[this.start.x,this.start.x+l*n].sort(Oo),[p,i]=[this.start.y,this.start.y+t*a].sort(Oo);this.attr("x",r),this.attr("y",p),this.attr("width",c-r),this.attr("height",i-p)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Oh(e,l){const n=e.x-l.x,t=e.y-l.y;return n*n+t*t}function Th(e,l,n){let t=l.x,a=l.y,r=n.x-t,c=n.y-a;if(r!==0||c!==0){const p=((e.x-t)*r+(e.y-a)*c)/(r*r+c*c);p>1?(t=n.x,a=n.y):p>0&&(t+=r*p,a+=c*p)}return r=e.x-t,c=e.y-a,r*r+c*c}function Mh(e,l){let n=e[0];const t=[n];let a;for(let r=1,c=e.length;r<c;r++)a=e[r],Oh(a,n)>l&&(t.push(a),n=a);return n!==a&&a&&t.push(a),t}function Qt(e,l,n,t,a){let r=t,c=0;for(let p=l+1;p<n;p++){const i=Th(e[p],e[l],e[n]);i>r&&(c=p,r=i)}r>t&&(c-l>1&&Qt(e,l,c,t,a),a.push(e[c]),n-c>1&&Qt(e,c,n,t,a))}function Nh(e,l){const n=e.length-1,t=[e[0]];return Qt(e,0,n,l,t),t.push(e[n]),t}function vc(e,l,n=!1){if(e.length<=2)return e;const t=l!==void 0?l*l:1;return e=n?e:Mh(e,t),e=Nh(e,t),e}var Lh=class extends vn{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=ki();const l=xi(this.arrowId,this.brush.color);this.el.appendChild(l)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=vc(this.points,1,!0),this.count=0),this.attr("d",_c(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",_c(vc(this.points,1,!0))),!e.getTotalLength()))}};function Rh(e,l){const n=l.x-e.x,t=l.y-e.y;return{length:Math.sqrt(n**2+t**2),angle:Math.atan2(t,n)}}function Ac(e,l,n,t){const a=l||e,r=n||e,c=.2,p=Rh(a,r),i=p.angle+(t?Math.PI:0),y=p.length*c,u=e.x+Math.cos(i)*y,d=e.y+Math.sin(i)*y;return{x:u,y:d}}function Ih(e,l,n){const t=Ac(n[l-1],n[l-2],e),a=Ac(e,n[l-1],n[l+1],!0);return`C ${t.x.toFixed(Ge)},${t.y.toFixed(Ge)} ${a.x.toFixed(Ge)},${a.y.toFixed(Ge)} ${e.x.toFixed(Ge)},${e.y.toFixed(Ge)}`}function _c(e){return e.reduce((l,n,t,a)=>t===0?`M ${n.x.toFixed(Ge)},${n.y.toFixed(Ge)}`:`${l} ${Ih(n,t,a)}`,"")}var Vh=class extends vn{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const l=(n,t)=>{if(n&&n.length)for(let a=0;a<n.length;a++){const r=n[a];if(r.getTotalLength){const c=r.getTotalLength();for(let p=0;p<this.pathSubFactor;p++){const i=r.getPointAtLength(c*p/this.pathSubFactor),y=r.getPointAtLength(c*(p+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:y.x,y1:i.y,y2:y.y,segment:p,element:t||r})}}else r.children&&l(r.children,r)}};e&&l(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const l=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,l}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let l=0;l<this.pathFragments.length;l++){const n=this.pathFragments[l],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,t)&&(n.element.remove(),e.push(l))}return e.length&&(this.pathFragments=this.pathFragments.filter((l,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,l){const n=e.x1,t=e.x2,a=l.x1,r=l.x2,c=e.y1,p=e.y2,i=l.y1,y=l.y2,u=(n-t)*(i-y)-(c-p)*(a-r),d=(n*p-c*t)*(a-r)-(n-t)*(a*y-i*r),f=(n*p-c*t)*(i-y)-(c-p)*(a*y-i*r),m=(B,g,_)=>B>=g&&B<=_?!0:B>=_&&B<=g;if(u===0)return!1;{const B={x:d/u,y:f/u};return m(B.x,n,t)&&m(B.y,c,p)&&m(B.x,a,r)&&m(B.y,i,y)}}};function jh(e){return{draw:new Lh(e),stylus:new wh(e),line:new Sh(e),rectangle:new Ph(e),ellipse:new $h(e),eraseLine:new Vh(e)}}var Hh=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=kh(),this._models=jh(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,l){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(l)||this.el,t=this.eventStart.bind(this),a=this.eventMove.bind(this),r=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,l){return this._emitter.on(e,l)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const l=this.model._eventUp(e);l?(l instanceof Element&&l!==this._currentNode&&(this._currentNode=l),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function zh(e){return new Hh(e)}const Xt=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ie=Te("slidev-drawing-enabled",!1),M2=Te("slidev-drawing-pinned",!1),Wh=ns(!1),Uh=ns(!1),qh=ns(!1),Qn=ns(!1),Sl=gd(Te("slidev-drawing-brush",{color:Xt[0],size:4,mode:"stylus"})),gc=ns("stylus"),bi=T(()=>Ts.drawings.syncAll||sl.value);let Xn=!1;const bn=T({get(){return gc.value},set(e){gc.value=e,e==="arrow"?(Sl.mode="line",Sl.arrowEnd=!0):(Sl.mode=e,Sl.arrowEnd=!1)}}),Kh=ee({brush:Sl,acceptsInputTypes:T(()=>Ie.value?void 0:["pen"]),coordinateTransform:!1}),pe=ya(zh(Kh));function Jh(){pe.clear(),bi.value&&Yp(Gs.value,"")}function wi(){var e;Uh.value=pe.canRedo(),Wh.value=pe.canUndo(),qh.value=!!((e=pe.el)!=null&&e.children.length)}function Yh(e){Xn=!0;const l=So[e||Gs.value];l!=null?pe.load(l):pe.clear(),Xn=!1}pe.on("changed",()=>{if(wi(),!Xn){const e=pe.dump(),l=Gs.value;(So[l]||"")!==e&&bi.value&&Yp(l,pe.dump())}});yd(e=>{Xn=!0,e[Gs.value]!=null&&pe.load(e[Gs.value]||""),Xn=!1,wi()});Pe(()=>{js(Gs,()=>{pe.mounted&&Yh()},{immediate:!0})});pe.on("start",()=>Qn.value=!0);pe.on("end",()=>Qn.value=!1);window.addEventListener("keydown",e=>{if(!Ie.value)return;const l=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?pe.redo():pe.undo():e.code==="Escape"?Ie.value=!1:e.code==="KeyL"&&l?bn.value="line":e.code==="KeyA"&&l?bn.value="arrow":e.code==="KeyS"&&l?bn.value="stylus":e.code==="KeyR"&&l?bn.value="rectangle":e.code==="KeyE"&&l?bn.value="ellipse":e.code==="KeyC"&&l?Jh():e.code.startsWith("Digit")&&l&&+e.code[5]<=Xt.length?Sl.color=Xt[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ws(...e){return T(()=>e.every(l=>ce(l)))}function fe(e){return T(()=>!ce(e))}const Cc=p5(),mt=Te("slidev-color-schema","auto"),sa=T(()=>Ts.colorSchema!=="auto"),Ta=T({get(){return sa.value?Ts.colorSchema==="dark":mt.value==="auto"?Cc.value:mt.value==="dark"},set(e){sa.value||(mt.value=e===Cc.value?"auto":e?"dark":"light")}}),$i=Xp(Ta);Oe&&js(Ta,e=>{const l=document.querySelector("html");l.classList.toggle("dark",e),l.classList.toggle("light",!e)},{immediate:!0});const _o=ns(1),go=T(()=>qs.length-1),Ae=ns(0),Ma=ns(0);function Zh(){Ae.value>_o.value&&(Ae.value-=1)}function Gh(){Ae.value<go.value&&(Ae.value+=1)}function Qh(){if(Ae.value>_o.value){let e=Ae.value-Ma.value;e<_o.value&&(e=_o.value),Ae.value=e}}function Xh(){if(Ae.value<go.value){let e=Ae.value+Ma.value;e>go.value&&(e=go.value),Ae.value=e}}function sm(){const{escape:e,space:l,shift:n,left:t,right:a,up:r,down:c,enter:p,d:i,g:y,o:u}=Ci;let d=[{name:"next_space",key:Ws(l,fe(n)),fn:Rl,autoRepeat:!0},{name:"prev_space",key:Ws(l,n),fn:Il,autoRepeat:!0},{name:"next_right",key:Ws(a,fe(n),fe(ae)),fn:Rl,autoRepeat:!0},{name:"prev_left",key:Ws(t,fe(n),fe(ae)),fn:Il,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Rl,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Il,autoRepeat:!0},{name:"next_down",key:Ws(c,fe(ae)),fn:No,autoRepeat:!0},{name:"prev_up",key:Ws(r,fe(ae)),fn:()=>Lo(!1),autoRepeat:!0},{name:"next_shift",key:Ws(a,n),fn:No,autoRepeat:!0},{name:"prev_shift",key:Ws(t,n),fn:()=>Lo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ws(i,fe(Ie)),fn:$i},{name:"toggle_overview",key:Ws(u,fe(Ie)),fn:Ei},{name:"hide_overview",key:Ws(e,fe(Ie)),fn:()=>ae.value=!1},{name:"goto",key:Ws(y,fe(Ie)),fn:()=>tn.value=!tn.value},{name:"next_overview",key:Ws(a,ae),fn:Gh},{name:"prev_overview",key:Ws(t,ae),fn:Zh},{name:"up_overview",key:Ws(r,ae),fn:Qh},{name:"down_overview",key:Ws(c,ae),fn:Xh},{name:"goto_from_overview",key:Ws(p,ae),fn:()=>{mn(Ae.value),ae.value=!1}}];const f=new Set(d.map(B=>B.name));if(d.filter(B=>B.name&&f.has(B.name)).length===0){const B=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(B),console.warn(B)}return d}const Si=Ws(fe(fh),fe(hh),uh);function em(e,l,n=!1){typeof e=="string"&&(e=Ci[e]);const t=Ws(e,Si);let a=0,r;const c=()=>{if(clearTimeout(r),!t.value){a=0;return}n&&(r=setTimeout(c,Math.max(1e3-a*250,150)),a++),l()};return js(t,c,{flush:"sync"})}function lm(e,l){return qd(e,n=>{Si.value&&(n.repeat||l())})}function nm(){const e=sm();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&em(n.key,n.fn,n.autoRepeat)}),lm("f",()=>Di.toggle())}const om={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tm=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),am=[tm];function rm(e,l){return A(),Y("svg",om,am)}const cm={name:"carbon-close",render:rm};function Na(e){var n,t;const l=(t=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:t.no;return l!=null?`slidev-page-${l}`:""}const pm=Vs({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const l=e;b(S);const n=ns(),t=C5(n),a=T(()=>l.width?l.width:t.width.value),r=T(()=>l.width?l.width/dl:t.height.value);l.width&&Bn(()=>{n.value&&(n.value.style.width=`${a.value}px`,n.value.style.height=`${r.value}px`)});const c=T(()=>a.value/r.value),p=T(()=>l.scale?l.scale:c.value<dl?a.value/fl:r.value*dl/fl),i=T(()=>({height:`${wa}px`,width:`${fl}px`,transform:`translate(-50%, -50%) scale(${p.value})`})),y=T(()=>({"select-none":!Ts.selectable,"slidev-code-line-numbers":Ts.lineNumbers}));return Be(Kp,p),(u,d)=>(A(),Y("div",{id:"slide-container",ref_key:"root",ref:n,class:Hs(D(y))},[s("div",{id:"slide-content",style:se(D(i))},[nl(u.$slots,"default")],4),nl(u.$slots,"controls")],2))}});const P=(e,l)=>{const n=e.__vccOpts||e;for(const[t,a]of l)n[t]=a;return n},Pi=P(pm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlideContainer.vue"]]),La=Vs({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:l}){const n=Re(e,"clicks",l),t=Re(e,"clicksElements",l),a=Re(e,"clicksDisabled",l),r=Re(e,"clicksOrderMap",l);t.value.length=0,Be(sd,e.route),Be(ed,e.context),Be(Wp,n),Be(qp,a),Be(Up,t),Be(Xu,r)},render(){var e,l;return this.$props.is?lt(this.$props.is):(l=(e=this.$slots)==null?void 0:e.default)==null?void 0:l.call(e)}}),im=["innerHTML"],ym=Vs({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return b(S),(l,n)=>D(So)[e.page]?(A(),Y("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:D(So)[e.page]},null,8,im)):_s("v-if",!0)}}),Oi=P(ym,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),um=Object.freeze(Object.defineProperty({__proto__:null,default:Oi},Symbol.toStringTag,{value:"Module"})),dm={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},fm=["onClick"],hm=Vs({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:l}){const n=e;b(S);const t=Re(n,"modelValue",l);function a(){t.value=!1}function r(m){mn(m),a()}function c(m){return m===Ae.value}const p=Zt.smaller("xs"),i=Zt.smaller("sm"),y=4*16*2,u=2*16,d=T(()=>p.value?Ll.width.value-y:i.value?(Ll.width.value-y-u)/2:300),f=T(()=>Math.floor((Ll.width.value-y)/(d.value+u)));return Bn(()=>{Ae.value=Gs.value,Ma.value=f.value}),(m,B)=>{const g=cm;return A(),Y(xs,null,[He(s("div",dm,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:se(`grid-template-columns: repeat(auto-fit,minmax(${D(d)}px,1fr))`)},[(A(!0),Y(xs,null,no(D(qs).slice(0,-1),(_,w)=>(A(),Y("div",{key:_.path,class:"relative"},[s("div",{class:Hs(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(w+1)}]),style:se(D($a)),onClick:E=>r(+_.path)},[(A(),M(Pi,{key:_.path,width:D(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:C(()=>[F(D(La),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Hs(D(Na)(_)),route:_,context:"overview"},null,8,["is","class","route"]),F(Oi,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,fm),s("div",{class:"absolute top-0 opacity-50",style:se(`left: ${D(d)+5}px`)},Ys(w+1),5)]))),128))],4)],512),[[zp,D(t)]]),D(t)?(A(),Y("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:a},[F(g)])):_s("v-if",!0)],64)}}});const mm=P(hm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Bm="/vue-3-practices/assets/logo-b72bde5d.png",vm={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Am=Vs({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:l}){const n=e;b(S);const t=Re(n,"modelValue",l);function a(){t.value=!1}return(r,c)=>(A(),M(hp,null,[D(t)?(A(),Y("div",vm,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=p=>a())}),s("div",{class:Hs(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[nl(r.$slots,"default")],2)])):_s("v-if",!0)],1024))}}),_m=P(Am,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Modal.vue"]]),gm={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Cm=["innerHTML"],Dm=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:Bm,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),o("dev ")])])],-1),Em=Vs({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:l}){const n=e;b(S);const t=Re(n,"modelValue",l),a=T(()=>typeof Ts.info=="string");return(r,c)=>(A(),M(_m,{modelValue:D(t),"onUpdate:modelValue":c[0]||(c[0]=p=>Ds(t)?t.value=p:null),class:"px-6 py-4"},{default:C(()=>[s("div",gm,[D(a)?(A(),Y("div",{key:0,class:"mb-4",innerHTML:D(Ts).info},null,8,Cm)):_s("v-if",!0),Dm])]),_:1},8,["modelValue"]))}});const Fm=P(Em,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/InfoDialog.vue"]]),km=["disabled","onKeydown"],xm=Vs({__name:"Goto",setup(e){b(S);const l=ns(),n=ns(""),t=T(()=>{if(n.value.startsWith("/"))return!!qs.find(c=>c.path===n.value.substring(1));{const c=+n.value;return!isNaN(c)&&c>0&&c<=Ui.value}});function a(){t.value&&(n.value.startsWith("/")?mn(n.value.substring(1)):mn(+n.value)),r()}function r(){tn.value=!1}return js(tn,async c=>{var p,i;c?(await Pe(),n.value="",(p=l.value)==null||p.focus()):(i=l.value)==null||i.blur()}),js(n,c=>{c.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(c,p)=>(A(),Y("div",{id:"slidev-goto-dialog",class:Hs(["fixed right-5 bg-main transform transition-all",D(tn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[He(s("input",{ref_key:"input",ref:l,"onUpdate:modelValue":p[0]||(p[0]=i=>n.value=i),type:"text",disabled:!D(tn),class:Hs(["outline-none bg-transparent",{"text-red-400":!D(t)&&n.value}]),placeholder:"Goto...",onKeydown:[br(a,["enter"]),br(r,["escape"])],onBlur:r},null,42,km),[[Jn,n.value]])],2))}}),bm=P(xm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Goto.vue"]]),wm=Vs({__name:"Controls",setup(e){b(S);const l=je(),n=je();return(t,a)=>(A(),Y(xs,null,[F(mm,{modelValue:D(ae),"onUpdate:modelValue":a[0]||(a[0]=r=>Ds(ae)?ae.value=r:null)},null,8,["modelValue"]),F(bm),D(l)?(A(),M(D(l),{key:0})):_s("v-if",!0),D(n)?(A(),M(D(n),{key:1,modelValue:D(ft),"onUpdate:modelValue":a[1]||(a[1]=r=>Ds(ft)?ft.value=r:null)},null,8,["modelValue"])):_s("v-if",!0),D(Ts).info?(A(),M(Fm,{key:2,modelValue:D(jn),"onUpdate:modelValue":a[2]||(a[2]=r=>Ds(jn)?jn.value=r:null)},null,8,["modelValue"])):_s("v-if",!0)],64))}}),$m=P(wm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Controls.vue"]]),Sm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pm=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Om=[Pm];function Tm(e,l){return A(),Y("svg",Sm,Om)}const Mm={name:"carbon-settings-adjust",render:Tm},Nm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lm=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Rm=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Im=[Lm,Rm];function Vm(e,l){return A(),Y("svg",Nm,Im)}const jm={name:"carbon-information",render:Vm},Hm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zm=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Wm=[zm];function Um(e,l){return A(),Y("svg",Hm,Wm)}const qm={name:"carbon-download",render:Um},Km={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jm=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Ym=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Zm=[Jm,Ym];function Gm(e,l){return A(),Y("svg",Km,Zm)}const Qm={name:"carbon-user-speaker",render:Gm},Xm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s3=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),e3=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),l3=[s3,e3];function n3(e,l){return A(),Y("svg",Xm,l3)}const o3={name:"carbon-presentation-file",render:n3},t3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a3=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),r3=[a3];function c3(e,l){return A(),Y("svg",t3,r3)}const p3={name:"carbon-pen",render:c3},i3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},y3=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),u3=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),d3=[y3,u3];function f3(e,l){return A(),Y("svg",i3,d3)}const h3={name:"ph-cursor-duotone",render:f3},m3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},B3=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),v3=[B3];function A3(e,l){return A(),Y("svg",m3,v3)}const Ti={name:"ph-cursor-fill",render:A3},_3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},g3=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),C3=[g3];function D3(e,l){return A(),Y("svg",_3,C3)}const E3={name:"carbon-sun",render:D3},F3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k3=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),x3=[k3];function b3(e,l){return A(),Y("svg",F3,x3)}const w3={name:"carbon-moon",render:b3},$3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S3=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),P3=[S3];function O3(e,l){return A(),Y("svg",$3,P3)}const T3={name:"carbon-apps",render:O3},M3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N3=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),L3=[N3];function R3(e,l){return A(),Y("svg",M3,L3)}const Mi={name:"carbon-arrow-right",render:R3},I3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V3=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),j3=[V3];function H3(e,l){return A(),Y("svg",I3,j3)}const z3={name:"carbon-arrow-left",render:H3},W3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U3=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),q3=[U3];function K3(e,l){return A(),Y("svg",W3,q3)}const J3={name:"carbon-maximize",render:K3},Y3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z3=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),G3=[Z3];function Q3(e,l){return A(),Y("svg",Y3,G3)}const X3={name:"carbon-minimize",render:Q3},sB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eB=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),lB=[eB];function nB(e,l){return A(),Y("svg",sB,lB)}const oB={name:"carbon-checkmark",render:nB},tB={class:"select-list"},aB={class:"title"},rB={class:"items"},cB=["onClick"],pB=Vs({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:l}){const n=e;b(S);const t=Re(n,"modelValue",l,{passive:!0});return(a,r)=>{const c=oB;return A(),Y("div",tB,[s("div",aB,Ys(e.title),1),s("div",rB,[(A(!0),Y(xs,null,no(e.items,p=>(A(),Y("div",{key:p.value,class:Hs(["item",{active:D(t)===p.value}]),onClick:()=>{var i;t.value=p.value,(i=p.onClick)==null||i.call(p)}},[F(c,{class:Hs(["text-green-500",{"opacity-0":D(t)!==p.value}])},null,8,["class"]),o(" "+Ys(p.display||p.value),1)],10,cB))),128))])])}}});const iB=P(pB,[["__scopeId","data-v-a5c2ed88"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SelectList.vue"]]),yB={class:"text-sm"},uB=Vs({__name:"Settings",setup(e){b(S);const l=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,t)=>(A(),Y("div",yB,[F(iB,{modelValue:D(Ao),"onUpdate:modelValue":t[0]||(t[0]=a=>Ds(Ao)?Ao.value=a:null),title:"Scale",items:l},null,8,["modelValue"])]))}}),dB=P(uB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Settings.vue"]]),fB={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},hB=Vs({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:l}){const n=e;b(S);const t=Re(n,"modelValue",l,{passive:!0}),a=ns();return Wd(a,()=>{t.value=!1}),(r,c)=>(A(),Y("div",{ref_key:"el",ref:a,class:"flex relative"},[s("button",{class:Hs({disabled:e.disabled}),onClick:c[0]||(c[0]=p=>t.value=!D(t))},[nl(r.$slots,"button",{class:Hs({disabled:e.disabled})})],2),(A(),M(hp,null,[D(t)?(A(),Y("div",fB,[nl(r.$slots,"menu")])):_s("v-if",!0)],1024))],512))}}),mB=P(hB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/MenuButton.vue"]]),BB={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},vB={__name:"VerticalDivider",setup(e){return b(S),(l,n)=>(A(),Y("div",BB))}},uo=P(vB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),AB={render(){return[]}},_B={class:"icon-btn"},gB={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},CB={class:"my-auto"},DB={class:"opacity-50"},EB=Vs({__name:"NavControls",props:{persist:{default:!1}},setup(e){const l=e;b(S);const n=Zt.smaller("md"),{isFullscreen:t,toggle:a}=Di,r=T(()=>la.value?`?password=${la.value}`:""),c=T(()=>`/presenter/${Gs.value}${r.value}`),p=T(()=>`/${Gs.value}${r.value}`),i=ns(),y=()=>{i.value&&pn.value&&i.value.contains(pn.value)&&pn.value.blur()},u=T(()=>l.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=je(),f=je();return zl(()=>import("./DrawingControls-702db10c.js"),[]).then(m=>f.value=m.default),(m,B)=>{const g=X3,_=J3,w=z3,E=Mi,$=T3,H=w3,ss=E3,K=Ti,z=h3,ts=p3,hs=o3,fs=Dy("RouterLink"),Cs=Qm,Rs=qm,Js=jm,Qs=Mm;return A(),Y("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[s("div",{class:Hs(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",D(u)]),onMouseleave:y},[D(Ye)?_s("v-if",!0):(A(),Y("button",{key:0,class:"icon-btn",onClick:B[0]||(B[0]=(...Ps)=>D(a)&&D(a)(...Ps))},[D(t)?(A(),M(g,{key:0})):(A(),M(_,{key:1}))])),s("button",{class:Hs(["icon-btn",{disabled:!D(r2)}]),onClick:B[1]||(B[1]=(...Ps)=>D(Il)&&D(Il)(...Ps))},[F(w)],2),s("button",{class:Hs(["icon-btn",{disabled:!D(a2)}]),title:"Next",onClick:B[2]||(B[2]=(...Ps)=>D(Rl)&&D(Rl)(...Ps))},[F(E)],2),D(Ye)?_s("v-if",!0):(A(),Y("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:B[3]||(B[3]=Ps=>D(Ei)())},[F($)])),D(sa)?_s("v-if",!0):(A(),Y("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:B[4]||(B[4]=Ps=>D($i)())},[D(Ta)?(A(),M(H,{key:0})):(A(),M(ss,{key:1}))])),F(uo),D(Ye)?_s("v-if",!0):(A(),Y(xs,{key:3},[!D(sl)&&!D(n)&&D(d)?(A(),Y(xs,{key:0},[F(D(d)),F(uo)],64)):_s("v-if",!0),D(sl)?(A(),Y("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:B[5]||(B[5]=Ps=>ht.value=!D(ht))},[D(ht)?(A(),M(K,{key:0})):(A(),M(z,{key:1,class:"opacity-50"}))])):_s("v-if",!0)],64)),!D(Ts).drawings.presenterOnly&&!D(Ye)?(A(),Y(xs,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:B[6]||(B[6]=Ps=>Ie.value=!D(Ie))},[F(ts),D(Ie)?(A(),Y("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:se({background:D(Sl).color})},null,4)):_s("v-if",!0)]),F(uo)],64)):_s("v-if",!0),D(Ye)?_s("v-if",!0):(A(),Y(xs,{key:5},[D(sl)?(A(),M(fs,{key:0,to:D(p),class:"icon-btn",title:"Play Mode"},{default:C(()=>[F(hs)]),_:1},8,["to"])):_s("v-if",!0),D(n2)?(A(),M(fs,{key:1,to:D(c),class:"icon-btn",title:"Presenter Mode"},{default:C(()=>[F(Cs)]),_:1},8,["to"])):_s("v-if",!0),_s("v-if",!0)],64)),(A(),Y(xs,{key:6},[D(Ts).download?(A(),Y("button",{key:0,class:"icon-btn",onClick:B[8]||(B[8]=(...Ps)=>D(wc)&&D(wc)(...Ps))},[F(Rs)])):_s("v-if",!0)],64)),!D(sl)&&D(Ts).info&&!D(Ye)?(A(),Y("button",{key:7,class:"icon-btn",onClick:B[9]||(B[9]=Ps=>jn.value=!D(jn))},[F(Js)])):_s("v-if",!0),!D(sl)&&!D(Ye)?(A(),M(mB,{key:8},{button:C(()=>[s("button",_B,[F(Qs)])]),menu:C(()=>[F(dB)]),_:1})):_s("v-if",!0),D(Ye)?_s("v-if",!0):(A(),M(uo,{key:9})),s("div",gB,[s("div",CB,[o(Ys(D(Gs))+" ",1),s("span",DB,"/ "+Ys(D(Ui)),1)])]),F(D(AB))],34)],512)}}}),FB=P(EB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/NavControls.vue"]]),Ni={render(){return[]}},Li={render(){return[]}},kB={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},xB=Vs({__name:"PresenterMouse",setup(e){return b(S),(l,n)=>{const t=Ti;return D(it).cursor?(A(),Y("div",kB,[F(t,{class:"absolute",style:se({left:`${D(it).cursor.x}%`,top:`${D(it).cursor.y}%`})},null,8,["style"])])):_s("v-if",!0)}}}),bB=P(xB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),wB=Vs({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){b(S),js(me,()=>{var n,t;(n=me.value)!=null&&n.meta&&me.value.meta.preload!==!1&&(me.value.meta.__preloaded=!0),(t=Bt.value)!=null&&t.meta&&Bt.value.meta.preload!==!1&&(Bt.value.meta.__preloaded=!0)},{immediate:!0});const l=je();return zl(()=>import("./DrawingLayer-3f7aea64.js"),[]).then(n=>l.value=n.default),(n,t)=>(A(),Y(xs,null,[_s(" Global Bottom "),F(D(Li)),_s(" Slides "),(A(!0),Y(xs,null,no(D(qs),a=>{var r,c;return A(),Y(xs,{key:a.path},[(r=a.meta)!=null&&r.__preloaded||a===D(me)?He((A(),M(D(La),{key:0,is:a==null?void 0:a.component,clicks:a===D(me)?D(Wl):0,"clicks-elements":((c=a.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Hs(D(Na)(a)),route:a,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[zp,a===D(me)]]):_s("v-if",!0)],64)}),128)),_s(" Global Top "),F(D(Ni)),D(l)?(A(),M(D(l),{key:0})):_s("v-if",!0),D(sl)?_s("v-if",!0):(A(),M(bB,{key:1}))],64))}}),$B=P(wB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesShow.vue"]]),SB=Vs({__name:"Play",setup(e){b(S),nm();const l=ns();function n(r){var c;uc.value||((c=r.target)==null?void 0:c.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Rl():Il())}i2(l);const t=T(()=>dh.value||uc.value);je();const a=je();return zl(()=>import("./DrawingControls-702db10c.js"),[]).then(r=>a.value=r.default),(r,c)=>(A(),Y(xs,null,[s("div",{id:"page-root",ref_key:"root",ref:l,class:"grid grid-cols-[1fr_max-content]",style:se(D($a))},[F(Pi,{class:"w-full h-full",style:se({background:"var(--slidev-slide-container-background, black)"}),width:D(ja)?D(Ll).width.value:void 0,scale:D(Ao),onPointerdown:n},{default:C(()=>[F($B,{context:"slide"})]),controls:C(()=>[s("div",{class:Hs(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[D(t)?"opacity-100 right-0":"opacity-0 p-2",D(Qn)?"pointer-events-none":""]])},[F(FB,{class:"m-auto",persist:D(t)},null,8,["persist"])],2),!D(Ts).drawings.presenterOnly&&!D(Ye)&&D(a)?(A(),M(D(a),{key:0,class:"ml-0"})):_s("v-if",!0)]),_:1},8,["style","width","scale"]),_s("v-if",!0)],4),F($m)],64))}}),PB=P(SB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Ri(e){return typeof e>"u"||e===null}function OB(e){return typeof e=="object"&&e!==null}function TB(e){return Array.isArray(e)?e:Ri(e)?[]:[e]}function MB(e,l){var n,t,a,r;if(l)for(r=Object.keys(l),n=0,t=r.length;n<t;n+=1)a=r[n],e[a]=l[a];return e}function NB(e,l){var n="",t;for(t=0;t<l;t+=1)n+=e;return n}function LB(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var RB=Ri,IB=OB,VB=TB,jB=NB,HB=LB,zB=MB,Ra={isNothing:RB,isObject:IB,toArray:VB,repeat:jB,isNegativeZero:HB,extend:zB};function Ii(e,l){var n="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!l&&e.mark.snippet&&(n+=`

`+e.mark.snippet),t+" "+n):t}function so(e,l){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=l,this.message=Ii(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}so.prototype=Object.create(Error.prototype);so.prototype.constructor=so;so.prototype.toString=function(l){return this.name+": "+Ii(this,l)};var bl=so,WB=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],UB=["scalar","sequence","mapping"];function qB(e){var l={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(t){l[String(t)]=n})}),l}function KB(e,l){if(l=l||{},Object.keys(l).forEach(function(n){if(WB.indexOf(n)===-1)throw new bl('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=l,this.tag=e,this.kind=l.kind||null,this.resolve=l.resolve||function(){return!0},this.construct=l.construct||function(n){return n},this.instanceOf=l.instanceOf||null,this.predicate=l.predicate||null,this.represent=l.represent||null,this.representName=l.representName||null,this.defaultStyle=l.defaultStyle||null,this.multi=l.multi||!1,this.styleAliases=qB(l.styleAliases||null),UB.indexOf(this.kind)===-1)throw new bl('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var le=KB;function Dc(e,l){var n=[];return e[l].forEach(function(t){var a=n.length;n.forEach(function(r,c){r.tag===t.tag&&r.kind===t.kind&&r.multi===t.multi&&(a=c)}),n[a]=t}),n}function JB(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},l,n;function t(a){a.multi?(e.multi[a.kind].push(a),e.multi.fallback.push(a)):e[a.kind][a.tag]=e.fallback[a.tag]=a}for(l=0,n=arguments.length;l<n;l+=1)arguments[l].forEach(t);return e}function ea(e){return this.extend(e)}ea.prototype.extend=function(l){var n=[],t=[];if(l instanceof le)t.push(l);else if(Array.isArray(l))t=t.concat(l);else if(l&&(Array.isArray(l.implicit)||Array.isArray(l.explicit)))l.implicit&&(n=n.concat(l.implicit)),l.explicit&&(t=t.concat(l.explicit));else throw new bl("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof le))throw new bl("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new bl("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new bl("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(r){if(!(r instanceof le))throw new bl("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(ea.prototype);return a.implicit=(this.implicit||[]).concat(n),a.explicit=(this.explicit||[]).concat(t),a.compiledImplicit=Dc(a,"implicit"),a.compiledExplicit=Dc(a,"explicit"),a.compiledTypeMap=JB(a.compiledImplicit,a.compiledExplicit),a};var YB=ea,ZB=new le("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),GB=new le("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),QB=new le("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),XB=new YB({explicit:[ZB,GB,QB]});function sv(e){if(e===null)return!0;var l=e.length;return l===1&&e==="~"||l===4&&(e==="null"||e==="Null"||e==="NULL")}function ev(){return null}function lv(e){return e===null}var nv=new le("tag:yaml.org,2002:null",{kind:"scalar",resolve:sv,construct:ev,predicate:lv,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function ov(e){if(e===null)return!1;var l=e.length;return l===4&&(e==="true"||e==="True"||e==="TRUE")||l===5&&(e==="false"||e==="False"||e==="FALSE")}function tv(e){return e==="true"||e==="True"||e==="TRUE"}function av(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var rv=new le("tag:yaml.org,2002:bool",{kind:"scalar",resolve:ov,construct:tv,predicate:av,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function cv(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function pv(e){return 48<=e&&e<=55}function iv(e){return 48<=e&&e<=57}function yv(e){if(e===null)return!1;var l=e.length,n=0,t=!1,a;if(!l)return!1;if(a=e[n],(a==="-"||a==="+")&&(a=e[++n]),a==="0"){if(n+1===l)return!0;if(a=e[++n],a==="b"){for(n++;n<l;n++)if(a=e[n],a!=="_"){if(a!=="0"&&a!=="1")return!1;t=!0}return t&&a!=="_"}if(a==="x"){for(n++;n<l;n++)if(a=e[n],a!=="_"){if(!cv(e.charCodeAt(n)))return!1;t=!0}return t&&a!=="_"}if(a==="o"){for(n++;n<l;n++)if(a=e[n],a!=="_"){if(!pv(e.charCodeAt(n)))return!1;t=!0}return t&&a!=="_"}}if(a==="_")return!1;for(;n<l;n++)if(a=e[n],a!=="_"){if(!iv(e.charCodeAt(n)))return!1;t=!0}return!(!t||a==="_")}function uv(e){var l=e,n=1,t;if(l.indexOf("_")!==-1&&(l=l.replace(/_/g,"")),t=l[0],(t==="-"||t==="+")&&(t==="-"&&(n=-1),l=l.slice(1),t=l[0]),l==="0")return 0;if(t==="0"){if(l[1]==="b")return n*parseInt(l.slice(2),2);if(l[1]==="x")return n*parseInt(l.slice(2),16);if(l[1]==="o")return n*parseInt(l.slice(2),8)}return n*parseInt(l,10)}function dv(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ra.isNegativeZero(e)}var fv=new le("tag:yaml.org,2002:int",{kind:"scalar",resolve:yv,construct:uv,predicate:dv,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),hv=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function mv(e){return!(e===null||!hv.test(e)||e[e.length-1]==="_")}function Bv(e){var l,n;return l=e.replace(/_/g,"").toLowerCase(),n=l[0]==="-"?-1:1,"+-".indexOf(l[0])>=0&&(l=l.slice(1)),l===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:l===".nan"?NaN:n*parseFloat(l,10)}var vv=/^[-+]?[0-9]+e/;function Av(e,l){var n;if(isNaN(e))switch(l){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(l){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(l){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ra.isNegativeZero(e))return"-0.0";return n=e.toString(10),vv.test(n)?n.replace("e",".e"):n}function _v(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ra.isNegativeZero(e))}var gv=new le("tag:yaml.org,2002:float",{kind:"scalar",resolve:mv,construct:Bv,predicate:_v,represent:Av,defaultStyle:"lowercase"}),Cv=XB.extend({implicit:[nv,rv,fv,gv]}),Dv=Cv,Vi=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ji=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Ev(e){return e===null?!1:Vi.exec(e)!==null||ji.exec(e)!==null}function Fv(e){var l,n,t,a,r,c,p,i=0,y=null,u,d,f;if(l=Vi.exec(e),l===null&&(l=ji.exec(e)),l===null)throw new Error("Date resolve error");if(n=+l[1],t=+l[2]-1,a=+l[3],!l[4])return new Date(Date.UTC(n,t,a));if(r=+l[4],c=+l[5],p=+l[6],l[7]){for(i=l[7].slice(0,3);i.length<3;)i+="0";i=+i}return l[9]&&(u=+l[10],d=+(l[11]||0),y=(u*60+d)*6e4,l[9]==="-"&&(y=-y)),f=new Date(Date.UTC(n,t,a,r,c,p,i)),y&&f.setTime(f.getTime()-y),f}function kv(e){return e.toISOString()}var xv=new le("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Ev,construct:Fv,instanceOf:Date,represent:kv});function bv(e){return e==="<<"||e===null}var wv=new le("tag:yaml.org,2002:merge",{kind:"scalar",resolve:bv}),Ia=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function $v(e){if(e===null)return!1;var l,n,t=0,a=e.length,r=Ia;for(n=0;n<a;n++)if(l=r.indexOf(e.charAt(n)),!(l>64)){if(l<0)return!1;t+=6}return t%8===0}function Sv(e){var l,n,t=e.replace(/[\r\n=]/g,""),a=t.length,r=Ia,c=0,p=[];for(l=0;l<a;l++)l%4===0&&l&&(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)),c=c<<6|r.indexOf(t.charAt(l));return n=a%4*6,n===0?(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)):n===18?(p.push(c>>10&255),p.push(c>>2&255)):n===12&&p.push(c>>4&255),new Uint8Array(p)}function Pv(e){var l="",n=0,t,a,r=e.length,c=Ia;for(t=0;t<r;t++)t%3===0&&t&&(l+=c[n>>18&63],l+=c[n>>12&63],l+=c[n>>6&63],l+=c[n&63]),n=(n<<8)+e[t];return a=r%3,a===0?(l+=c[n>>18&63],l+=c[n>>12&63],l+=c[n>>6&63],l+=c[n&63]):a===2?(l+=c[n>>10&63],l+=c[n>>4&63],l+=c[n<<2&63],l+=c[64]):a===1&&(l+=c[n>>2&63],l+=c[n<<4&63],l+=c[64],l+=c[64]),l}function Ov(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Tv=new le("tag:yaml.org,2002:binary",{kind:"scalar",resolve:$v,construct:Sv,predicate:Ov,represent:Pv}),Mv=Object.prototype.hasOwnProperty,Nv=Object.prototype.toString;function Lv(e){if(e===null)return!0;var l=[],n,t,a,r,c,p=e;for(n=0,t=p.length;n<t;n+=1){if(a=p[n],c=!1,Nv.call(a)!=="[object Object]")return!1;for(r in a)if(Mv.call(a,r))if(!c)c=!0;else return!1;if(!c)return!1;if(l.indexOf(r)===-1)l.push(r);else return!1}return!0}function Rv(e){return e!==null?e:[]}var Iv=new le("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Lv,construct:Rv}),Vv=Object.prototype.toString;function jv(e){if(e===null)return!0;var l,n,t,a,r,c=e;for(r=new Array(c.length),l=0,n=c.length;l<n;l+=1){if(t=c[l],Vv.call(t)!=="[object Object]"||(a=Object.keys(t),a.length!==1))return!1;r[l]=[a[0],t[a[0]]]}return!0}function Hv(e){if(e===null)return[];var l,n,t,a,r,c=e;for(r=new Array(c.length),l=0,n=c.length;l<n;l+=1)t=c[l],a=Object.keys(t),r[l]=[a[0],t[a[0]]];return r}var zv=new le("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:jv,construct:Hv}),Wv=Object.prototype.hasOwnProperty;function Uv(e){if(e===null)return!0;var l,n=e;for(l in n)if(Wv.call(n,l)&&n[l]!==null)return!1;return!0}function qv(e){return e!==null?e:{}}var Kv=new le("tag:yaml.org,2002:set",{kind:"mapping",resolve:Uv,construct:qv});Dv.extend({implicit:[xv,wv],explicit:[Tv,Iv,zv,Kv]});function Ec(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var Jv=new Array(256),Yv=new Array(256);for(var Xl=0;Xl<256;Xl++)Jv[Xl]=Ec(Xl)?1:0,Yv[Xl]=Ec(Xl);function Zv(e){return Array.from(new Set(e))}function Fc(...e){let l,n,t;e.length===1?(l=0,t=1,[n]=e):[l,n,t=1]=e;const a=[];let r=l;for(;r<n;)a.push(r),r+=t||1;return a}function Hi(e,l){if(!l||l==="all"||l==="*")return Fc(1,e+1);const n=[];for(const t of l.split(/[,;]/g))if(!t.includes("-"))n.push(+t);else{const[a,r]=t.split("-",2);n.push(...Fc(+a,r?+r+1:e+1))}return Zv(n).filter(t=>t<=e).sort((t,a)=>t-a)}function Gv(e){const l=T(()=>e.value.path),n=T(()=>qs.length-1),t=T(()=>parseInt(l.value.split(/\//g).slice(-1)[0])||1),a=T(()=>Ha(t.value)),r=T(()=>qs.find(f=>f.path===`${t.value}`)),c=T(()=>{var f,m,B;return(B=(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:B.id}),p=T(()=>{var f,m;return((m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.layout)||(t.value===1?"cover":"default")}),i=T(()=>qs.find(f=>f.path===`${Math.min(qs.length,t.value+1)}`)),y=T(()=>qs.filter(f=>{var m,B;return(B=(m=f.meta)==null?void 0:m.slide)==null?void 0:B.title}).reduce((f,m)=>(za(f,m),f),[])),u=T(()=>Wa(y.value,r.value)),d=T(()=>Ua(u.value));return{route:e,path:l,total:n,currentPage:t,currentPath:a,currentRoute:r,currentSlideId:c,currentLayout:p,nextRoute:i,rawTree:y,treeWithActiveStatuses:u,tree:d}}function Qv(e,l,n){const t=ns(0);Pe(()=>{hl.afterEach(async()=>{await Pe(),t.value+=1})});const a=T(()=>{var i,y;return t.value,((y=(i=l.value)==null?void 0:i.meta)==null?void 0:y.__clicksElements)||[]}),r=T(()=>{var i,y;return+(((y=(i=l.value)==null?void 0:i.meta)==null?void 0:y.clicks)??a.value.length)}),c=T(()=>n.value<qs.length-1||e.value<r.value),p=T(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:a,clicksTotal:r,hasNext:c,hasPrev:p}}const Xv=["id"],sA=Vs({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:l}){const n=e,t=Re(n,"clicksElements",l),a=T(()=>({height:`${wa}px`,width:`${fl}px`})),r=je();zl(()=>Promise.resolve().then(()=>um),void 0).then(y=>r.value=y.default);const c=T(()=>n.clicks),p=Qv(c,n.nav.currentRoute,n.nav.currentPage),i=T(()=>`${n.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return Be(S,ee({nav:{...n.nav,...p},configs:Ts,themeConfigs:T(()=>Ts.themeConfig)})),(y,u)=>{var d;return A(),Y("div",{id:D(i),class:"slide-container",style:se(D(a))},[F(D(Li)),F(D(La),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":D(t),"onUpdate:clicks-elements":u[0]||(u[0]=f=>Ds(t)?t.value=f:null),clicks:D(c),"clicks-disabled":!1,class:Hs(D(Na)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),D(r)?(A(),M(D(r),{key:0,page:+e.route.path},null,8,["page"])):_s("v-if",!0),F(D(Ni))],12,Xv)}}}),kc=P(sA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),eA=Vs({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const l=e;b(S);const n=ee(((r=l.route.meta)==null?void 0:r.__clicksElements)||[]),t=T(()=>l.route),a=Gv(t);return(c,p)=>(A(),Y(xs,null,[F(kc,{"clicks-elements":n,"onUpdate:clicks-elements":p[0]||(p[0]=i=>Ds(n)?n.value=i:null),clicks:0,nav:D(a),route:D(t)},null,8,["clicks-elements","nav","route"]),D(Wi)?_s("v-if",!0):(A(!0),Y(xs,{key:0},no(n.length,i=>(A(),M(kc,{key:i,clicks:i,nav:D(a),route:D(t)},null,8,["clicks","nav","route"]))),128))],64))}}),lA=P(eA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlide.vue"]]),nA={id:"print-content"},oA=Vs({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const l=e;b(S);const n=T(()=>l.width),t=T(()=>l.width/dl),a=T(()=>n.value/t.value),r=T(()=>a.value<dl?n.value/fl:t.value*dl/fl);let c=qs.slice(0,-1);We.value.query.range&&(c=Hi(c.length,We.value.query.range).map(y=>c[y-1]));const p=T(()=>({"select-none":!Ts.selectable,"slidev-code-line-numbers":Ts.lineNumbers}));return Be(Kp,r),(i,y)=>(A(),Y("div",{id:"print-container",class:Hs(D(p))},[s("div",nA,[(A(!0),Y(xs,null,no(D(c),u=>(A(),M(lA,{key:u.path,route:u},null,8,["route"]))),128))]),nl(i.$slots,"controls")],2))}});const tA=P(oA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintContainer.vue"]]),aA=Vs({__name:"Print",setup(e){b(S);function l(n,{slots:t}){if(t.default)return lt("style",t.default())}return Bn(()=>{ja?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,t)=>(A(),Y(xs,null,[F(l,null,{default:C(()=>[o(" @page { size: "+Ys(D(fl))+"px "+Ys(D(wa))+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:se(D($a))},[F(tA,{class:"w-full h-full",style:se({background:"var(--slidev-slide-container-background, black)"}),width:D(Ll).width.value},null,8,["style","width"])],4)],64))}});const rA=P(aA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Print.vue"]]);const cA={class:"slidev-layout end"},pA={__name:"end",setup(e){return b(S),(l,n)=>(A(),Y("div",cA," END "))}},iA=P(pA,[["__scopeId","data-v-b05edd45"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/end.vue"]]),yA="/vue-3-practices/logo.svg";function xc(e){return e.startsWith("/")?"/vue-3-practices"+e.slice(1):e}function uA(e,l=!1){const n=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),t={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?l?`linear-gradient(#0005, #0008), url(${xc(e)})`:`url("${xc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const dA={class:"my-auto w-full"},fA=Vs({__name:"cover",props:{background:{default:""}},setup(e){const l=e;b(S);const n=T(()=>uA(l.background,!0));return(t,a)=>(A(),Y("div",{class:"slidev-layout cover",style:se(D(n))},[s("div",dA,[nl(t.$slots,"default")])],4))}}),hA=P(fA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/theme-default/layouts/cover.vue"]]),mA=s("div",{class:"text-center"},[s("img",{src:yA,alt:"Vue",style:{width:"100px"},class:"inline"})],-1),BA=s("h1",null,"Vue.js",-1),vA={__name:"1",setup(e){const l={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}};return b(S),(n,t)=>(A(),M(hA,q(W(l)),{default:C(()=>[mA,BA]),_:1},16))}},AA=P(vA,[["__file","/@slidev/slides/1.md"]]),_A={class:"slidev-layout default"},gA={__name:"default",setup(e){return b(S),(l,n)=>(A(),Y("div",_A,[nl(l.$slots,"default")]))}},J=P(gA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/default.vue"]]),CA=s("h1",null,"アジェンダ",-1),DA=s("ul",null,[s("li",null,[o("はじめに "),s("ul",null,[s("li",null,"Composition API, 学習環境など")])]),s("li",null,[o("リアクティブの探求 "),s("ul",null,[s("li",null,"ref, reactive, toRefs, readonly など")])]),s("li",null,[o("算出プロパティ（computed） "),s("ul",null,[s("li",null,"computed")])]),s("li",null,[o("ウォッチャ（watch） "),s("ul",null,[s("li",null,"watch")])]),s("li",null,[o("テンプレート構文の説明 "),s("ul",null,[s("li",null,"mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model など")])]),s("li",null,[o("コンポーネント "),s("ul",null,[s("li",null,"props, emit, slot など")])]),s("li",null,[o("Vue アプリケーション開発に必要な周辺ライブラリ "),s("ul",null,[s("li",null,"throttle-debounce, fetch, Vue Router など")])])],-1),EA={__name:"2",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[CA,DA]),_:1},16))}},FA=P(EA,[["__file","/@slidev/slides/2.md"]]),kA=s("h1",null,"はじめに",-1),xA=s("h2",null,"Vue.js とは？",-1),bA=s("p",null,"Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。",-1),wA={class:"pt-4 text-sm"},$A={href:"https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF"},SA=o(" 公式サイト "),PA={__name:"3",setup(e){const l={};return b(S),(n,t)=>{const a=Mi;return A(),M(J,q(W(l)),{default:C(()=>[kA,xA,bA,s("div",wA,[s("a",$A,[F(a,{class:"inline"}),SA])])]),_:1},16)}}},OA=P(PA,[["__file","/@slidev/slides/3.md"]]),TA=s("h1",null,"本講座のすすめかた",-1),MA=s("p",null,"どのような形式で進行するのかの確認",-1),NA=s("p",null,"ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。",-1),LA=s("p",null,"適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。",-1),RA={__name:"4",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[TA,MA,NA,LA]),_:1},16))}},IA=P(RA,[["__file","/@slidev/slides/4.md"]]),VA=s("h1",null,"準備",-1),jA=s("p",null,"使用するツールの確認とセットアップ",-1),HA=s("p",null,[o("本講座におけるハンズオン、演習、サンプルの閲覧は "),s("a",{href:"https://stackblitz.com/",target:"_blank",rel:"noopener"},"StackBlitz"),o(" でおこないます。")],-1),zA=s("p",null,"StackBlitz はブラウザ上で動作するオンライン IDE（統合開発環境）です。",-1),WA=s("p",null,"以下をやってみましょう",-1),UA=s("ol",null,[s("li",null,[o("動作環境を"),s("a",{href:"https://developer.stackblitz.com/docs/platform/browser-support/",target:"_blank",rel:"noopener"},"こちら"),o("で確認してブラウザを用意")]),s("li",null,[o("用意したブラウザで "),s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev"),o(" にアクセス")]),s("li",null,[s("code",null,"<template>Hello World!</template>"),o(" と書いてみる")]),s("li",null,[o("右カラムに "),s("code",null,"Hello World!"),o(" と表示されることを確認")])],-1),qA=s("p",null,"講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。",-1),KA={__name:"5",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[VA,jA,HA,zA,WA,UA,qA]),_:1},16))}},JA=P(KA,[["__file","/@slidev/slides/5.md"]]),YA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ZA=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),GA=[ZA];function QA(e,l){return A(),Y("svg",YA,GA)}const XA={name:"ph-clipboard",render:QA},s9={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},e9=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),l9=[e9];function n9(e,l){return A(),Y("svg",s9,l9)}const o9={name:"ph-check-circle",render:n9},t9=["title"],a9=Vs({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const l=e;b(S);const n=b(Wp),t=b(Up),a=b(qp);function r(d=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",B=m.length;for(let g=0;g<d;g++)f.push(m.charAt(Math.floor(Math.random()*B)));return f.join("")}const c=ns(),p=vl();Zo(()=>{const d=l.at==null?t==null?void 0:t.value.length:l.at,f=T(()=>a!=null&&a.value?l.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(d||0)),l.ranges.length-1)),m=T(()=>l.ranges[f.value]||"");if(l.ranges.length>=2&&!(a!=null&&a.value)){const B=r(),g=od(l.ranges.length-1).map(_=>B+_);t!=null&&t.value&&(t.value.push(...g),Go(()=>g.forEach(_=>nd(t.value,_)),p))}Bn(()=>{if(!c.value)return;const g=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const _ of g){const w=Array.from(_.querySelectorAll(".line")),E=Hi(w.length,m.value);if(w.forEach(($,H)=>{const ss=E.includes(H+1);$.classList.toggle(ld,!0),$.classList.toggle("highlighted",ss),$.classList.toggle("dishonored",!ss)}),l.maxHeight){const $=_.querySelector(".line.highlighted");$&&$.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:i,copy:y}=s5();function u(){var f,m;const d=(m=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;d&&y(d)}return(d,f)=>{const m=o9,B=XA;return A(),Y("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:se({"max-height":l.maxHeight,"overflow-y":l.maxHeight?"scroll":void 0})},[nl(d.$slots,"default"),D(Ts).codeCopy?(A(),Y("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:D(i)?"Copied":"Copy",onClick:f[0]||(f[0]=g=>u())},[D(i)?(A(),M(m,{key:0,class:"p-2 w-8 h-8"})):(A(),M(B,{key:1,class:"p-2 w-8 h-8"}))],8,t9)):_s("v-if",!0)],4)}}}),ys=P(a9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),r9=s("h1",null,"Vue には 2 つの API があります",-1),c9={class:"flex gap-8"},p9=o(" Options API "),i9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"data"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"methods"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"data"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"methods"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),y9=o(" Composition API "),u9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),d9=s("p",null,"現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。",-1),f9={__name:"6",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[r9,s("div",c9,[s("div",null,[p9,F(a,Z({},{ranges:[""]}),{default:C(()=>[i9]),_:1},16)]),s("div",null,[y9,F(a,Z({},{ranges:[""]}),{default:C(()=>[u9]),_:1},16)])]),d9]),_:1},16)}}},h9=P(f9,[["__file","/@slidev/slides/6.md"]]),m9="/vue-3-practices/apis.png",B9=s("h1",null,"Composition API のメリット",-1),v9=s("p",null,"Vue の機能ではなく、論理的な関心事でコードをまとめることができる",-1),A9=s("img",{src:m9,class:"h-5/6"},null,-1),_9={__name:"7",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[B9,v9,A9]),_:1},16))}},g9=P(_9,[["__file","/@slidev/slides/7.md"]]),C9=s("h1",null,"Vue には様々なシンタックスシュガー（糖衣構文）があります",-1),D9={class:"flex gap-8"},E9=o(" script "),F9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),k9=o(" script setup "),x9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),b9=s("p",null,"現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。",-1),w9={__name:"8",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[C9,s("div",D9,[s("div",null,[E9,F(a,Z({},{ranges:[""]}),{default:C(()=>[F9]),_:1},16)]),s("div",null,[k9,F(a,Z({},{ranges:[""]}),{default:C(()=>[x9]),_:1},16)])]),b9]),_:1},16)}}},$9=P(w9,[["__file","/@slidev/slides/8.md"]]),S9={class:"prose"},P9={__name:"FirstSample",setup(e){b(S);const l=ns(0);function n(){l.value+=1}return(t,a)=>(A(),Y("div",S9,[o(Ys(l.value)+" ",1),s("button",{onClick:n},"+")]))}},O9=P(P9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/FirstSample.vue"]]),T9=s("h1",null,"まずは書いてみる",-1),M9={class:"flex gap-8"},N9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"+"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"+"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),L9=o(" 動作サンプル "),R9={__name:"9",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=O9;return A(),M(J,q(W(l)),{default:C(()=>[T9,s("div",M9,[F(a,Z({},{ranges:[""]}),{default:C(()=>[N9]),_:1},16),s("div",null,[L9,F(r)])])]),_:1},16)}}},I9=P(R9,[["__file","/@slidev/slides/9.md"]]),V9=s("h1",null,"リアクティブの探求",-1),j9={class:"flex gap-4"},H9=s("div",null,[s("video",{controls:"",loop:"",style:{height:"30vh"},src:"https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"}),s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B"},"参考")])],-1),z9=s("p",null,"表計算ソフトと同じ手順をコードにすると",-1),W9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 5")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 5のまま（期待は6）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5のまま（期待は6）")])])])],-1),U9={__name:"10",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[V9,s("div",j9,[H9,s("div",null,[z9,F(a,Z({},{ranges:[""]}),{default:C(()=>[W9]),_:1},16)])])]),_:1},16)}}},q9=P(U9,[["__file","/@slidev/slides/10.md"]]),K9=s("h1",null,"リアクティブの探求",-1),J9={class:"flex gap-4"},Y9=s("div",null,[s("p",null,"表計算ソフトと同じことをおこなうには"),s("ol",null,[s("li",null,"値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。"),s("li",null,"値の変更を検知する。 例: val1 = 3 と入れるとき。"),s("li",null,"最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。")]),s("p",null,"Vue には 1. 2. 3. のためのしくみがある")],-1),Z9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 2.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 3.")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 1.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 1.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 1.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 2.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 3.")])])])],-1),G9={__name:"11",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[K9,s("div",J9,[Y9,s("div",null,[F(a,Z({},{ranges:[""]}),{default:C(()=>[Z9]),_:1},16)])])]),_:1},16)}}},Q9=P(G9,[["__file","/@slidev/slides/11.md"]]),X9=o(" val1: "),s_=o(" val2: "),e_={__name:"ReactiveSample",setup(e){b(S);const l=ns(2),n=ns(3),t=T(()=>l.value+n.value);return(a,r)=>(A(),Y("div",null,[s("p",null,[X9,He(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c)},null,512),[[Jn,l.value]])]),s("p",null,[s_,He(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":r[1]||(r[1]=c=>n.value=c)},null,512),[[Jn,n.value]])]),s("p",null,"sum: "+Ys(D(t)),1)]))}},l_=P(e_,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ReactiveSample.vue"]]),n_=s("h1",null,"リアクティブの探求（ref によるリアクティブな値の参照）",-1),o_=s("p",null,[s("code",null,"ref"),o(" を使った値を操作する場合、"),s("code",null,"setup"),o(" 関数内では "),s("code",null,"value"),o(" プロパティにアクセスする。 "),s("code",null,"template"),o(" 内では変数（定数）そのものを参照するだけで値を得られる。")],-1),t_={class:"flex gap-8"},a_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),r_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      val1:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      val2:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"sum: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      val1:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      val2:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"sum: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),c_={__name:"12",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=l_;return A(),M(J,q(W(l)),{default:C(()=>[n_,o_,s("div",t_,[F(a,Z({},{ranges:[""]}),{default:C(()=>[a_]),_:1},16),F(a,Z({},{ranges:[""]}),{default:C(()=>[r_]),_:1},16),F(r)])]),_:1},16)}}},p_=P(c_,[["__file","/@slidev/slides/12.md"]]),i_=s("h1",null,"リアクティブの探求（リアクティブな値をオブジェクトにまとめる）",-1),y_=s("p",null,[o("リアクティブにしたいデータがオブジェクトの場合、"),s("code",null,"reactive"),o(" を使う")],-1),u_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"reactive"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"reactive"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""'),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"reactive"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""'),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),d_={__name:"13",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[i_,y_,F(a,Z({},{ranges:[""]}),{default:C(()=>[u_]),_:1},16)]),_:1},16)}}},f_=P(d_,[["__file","/@slidev/slides/13.md"]]),h_=s("h1",null,"リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）",-1),m_=s("p",null,[o("前項の "),s("code",null,"reactive"),o(" だと、分割代入しても値が取り出せない。Vue では "),s("code",null,"toRefs"),o(" を使うことで可能になる。")],-1),B_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"user.name: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"name: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"reactive"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"toRefs"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"reactive"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""'),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"toRefs"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"user.name: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"name: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"toRefs"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""'),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"toRefs"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),v_={__name:"14",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[h_,m_,F(a,Z({},{ranges:[""]}),{default:C(()=>[B_]),_:1},16)]),_:1},16)}}},A_=P(v_,[["__file","/@slidev/slides/14.md"]]),__=s("h1",null,"リアクティブの探求（リアクティブな値を読み込み専用にする）",-1),g_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"<!-- user.name を変更しようとすると失敗し、警告が表示されます -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"user.name: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"name: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"reactive"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"toRefs"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"readonly"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"reactive"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""'),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"})")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"toRefs"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"<!-- user.name を変更しようとすると失敗し、警告が表示されます -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"user.name: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"name: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"toRefs"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"readonly"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""'),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"})")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"toRefs"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),C_={__name:"15",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[__,F(a,Z({},{ranges:[""]}),{default:C(()=>[g_]),_:1},16)]),_:1},16)}}},D_=P(C_,[["__file","/@slidev/slides/15.md"]]),E_=s("h1",null,"算出プロパティ（computed）",-1),F_=s("p",null,[o("あるリアクティブな値を元に計算結果を返したい場合、"),s("code",null,"computed"),o(" 関数を利用する")],-1),k_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),x_={__name:"16",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[E_,F_,F(a,Z({},{ranges:[""]}),{default:C(()=>[k_]),_:1},16)]),_:1},16)}}},b_=P(x_,[["__file","/@slidev/slides/16.md"]]),w_=s("h1",null,"算出プロパティ（computed）",-1),$_=s("p",null,[s("code",null,"get"),o(),s("code",null,"set"),o(" 関数を用意することで書込み可能なオブジェクトを作成することができる")],-1),S_={class:"h-sm overflow-y-auto"},P_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"handleClick"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"リセット"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"set"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"handleClick"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"handleClick"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"リセット"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"set"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"handleClick"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),O_={__name:"17",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[w_,$_,s("div",S_,[F(a,Z({},{ranges:[""]}),{default:C(()=>[P_]),_:1},16)])]),_:1},16)}}},T_=P(O_,[["__file","/@slidev/slides/17.md"]]),M_={inject:{$slidev:{from:S}},setup(){const e=()=>Math.random(),l=T(()=>Math.random());return{randomMethods:e,randomComputed:l}}},N_=s("p",null,"関数呼び出しの場合",-1),L_={class:"use-methods"},R_=s("p",null,"computedを使った場合",-1),I_={class:"use-computed"};function V_(e,l,n,t,a,r){return A(),Y(xs,null,[N_,s("ol",L_,[s("li",null,Ys(t.randomMethods()),1),s("li",null,Ys(t.randomMethods()),1),s("li",null,Ys(t.randomMethods()),1)]),R_,s("ol",I_,[s("li",null,Ys(t.randomComputed),1),s("li",null,Ys(t.randomComputed),1),s("li",null,Ys(t.randomComputed),1)])],64)}const j_=P(M_,[["render",V_],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ComputedMethods.vue"]]),H_=s("h1",null,"computed と関数呼び出しの違い",-1),z_=s("p",null,[o("関数呼び出しは都度呼び出される毎に実行するのに対し、"),s("code",null,"computed"),o(" 内で参照しているリアクティブな値が変更されない限り、"),s("code",null,"computed"),o(" は一度キャッシュされた結果を返す。 うまく使い分けるとパフォーマンスの向上に役立てる。")],-1),W_={class:"flex gap-4"},U_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"関数呼び出しの場合"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"use-methods"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"computedを使った場合"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"use-computed"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"関数呼び出しの場合"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"use-methods"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"computedを使った場合"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"use-computed"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),q_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Math"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"random"),s("span",{style:{color:"#858585"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Math"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"random"),s("span",{style:{color:"#858585"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Math"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"random"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Math"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"random"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),K_={__name:"18",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=j_;return A(),M(J,q(W(l)),{default:C(()=>[H_,z_,s("div",W_,[F(a,Z({},{ranges:[""]}),{default:C(()=>[U_]),_:1},16),F(a,Z({},{ranges:[""]}),{default:C(()=>[q_]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},J_=P(K_,[["__file","/@slidev/slides/18.md"]]),Y_=s("h1",null,"ウォッチャ（watch）",-1),Z_=s("p",null,"特定のデータを監視し、変更があったときに処理を行える、引数として、新しい値とその前の値を取得できる。",-1),G_={class:"h-sm overflow-y-auto"},Q_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"watch"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"set"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"watch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"prev"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"prev"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"watch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"set"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"watch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"prev"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"prev"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),X_={__name:"19",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[Y_,Z_,s("div",G_,[F(a,Z({},{ranges:[""]}),{default:C(()=>[Q_]),_:1},16)])]),_:1},16)}}},s1=P(X_,[["__file","/@slidev/slides/19.md"]]),e1=s("h1",null,"ウォッチャ（watch）",-1),l1=s("p",null,"配列を監視する場合、複数のデータソースを同時に監視できる",-1),n1={class:"h-sm overflow-y-auto"},o1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"watch"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"set"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"watch"),s("span",{style:{color:"#858585"}},"(["),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"plusOne"),s("span",{style:{color:"#858585"}},"],"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"prev"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"current"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"prev"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"watch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"set"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"watch"),s("span",{style:{color:"#8E8F8B"}},"(["),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"plusOne"),s("span",{style:{color:"#8E8F8B"}},"],"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"prev"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"current"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"prev"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),t1={__name:"20",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[e1,l1,s("div",n1,[F(a,Z({},{ranges:[""]}),{default:C(()=>[o1]),_:1},16)])]),_:1},16)}}},a1=P(t1,[["__file","/@slidev/slides/20.md"]]),r1=s("h1",null,"テンプレート構文",-1),c1=s("ul",null,[s("li",null,"展開"),s("li",null,"ディレクティブ"),s("li",null,"バインディング"),s("li",null,"イベントハンドリング"),s("li",null,"条件付きレンダリング"),s("li",null,"リストレンダリング"),s("li",null,"フォーム入力バインディング")],-1),p1={__name:"21",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[r1,c1]),_:1},16))}},i1=P(p1,[["__file","/@slidev/slides/21.md"]]),y1=s("h1",null,"展開",-1),u1=s("p",null,"Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる",-1),d1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Message: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"msg"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"msg"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Hello!"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Message: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"msg"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"msg"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Hello!"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),f1=s("p",null,"結果",-1),h1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"Message: Hello!")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"Message: Hello!")])])])],-1),m1={__name:"22",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[y1,u1,F(a,Z({},{ranges:[""]}),{default:C(()=>[d1]),_:1},16),f1,h1]),_:1},16)}}},B1=P(m1,[["__file","/@slidev/slides/22.md"]]),v1={__name:"CounterSample",setup(e){b(S);const l=ns(10);return setInterval(()=>{l.value+=1},1e3),(n,t)=>(A(),Y("div",null,"Counter: "+Ys(l.value),1))}},A1=P(v1,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/CounterSample.vue"]]),_1=s("h1",null,"展開（リアクティブな値を使うと）",-1),g1=s("p",{class:"text-sm"}," counterを1秒ごとに増やしていく ",-1),C1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Counter: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"setInterval"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"},"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Counter: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"setInterval"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),D1=s("p",null,"結果",-1),E1={__name:"23",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=A1;return A(),M(J,q(W(l)),{default:C(()=>[_1,g1,F(a,Z({},{ranges:[""]}),{default:C(()=>[C1]),_:1},16),D1,s("div",null,[F(r)])]),_:1},16)}}},F1=P(E1,[["__file","/@slidev/slides/23.md"]]),k1=s("h1",null,"ディレクティブ",-1),x1=s("ul",null,[s("li",null,"ディレクティブは Vue によって提供される特別な属性"),s("li",null,"v- から始まる"),s("li",null,[o("特定のディレクティブ（v-bind と v-on）は省略記法がある（例："),s("code",null,":href"),o(),s("code",null,"@click"),o("）")]),s("li",null,[o("特定のディレクティブは引数を渡すことができる（例："),s("code",null,"v-on:click"),o("）")])],-1),b1=s("p",null,"ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい",-1),w1={__name:"24",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[k1,x1,b1]),_:1},16))}},$1=P(w1,[["__file","/@slidev/slides/24.md"]]),S1=s("h1",null,"バインディング",-1),P1=s("p",null,[o("「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 "),s("code",null,"v-bind"),o(" ディレクティブを使う")],-1),O1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-bind"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js公式サイト "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"url"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"https://v3.ja.vuejs.org/"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-bind"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js公式サイト "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"url"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"https://v3.ja.vuejs.org/"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),T1=s("p",null,"省略するとこのように書ける",-1),M1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"url"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js公式サイト "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"url"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js公式サイト "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),N1={__name:"25",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[S1,P1,s("div",null,[F(a,Z({},{ranges:[""]}),{default:C(()=>[O1]),_:1},16),T1]),F(a,Z({},{ranges:[""]}),{default:C(()=>[M1]),_:1},16)]),_:1},16)}}},L1=P(N1,[["__file","/@slidev/slides/25.md"]]),R1=s("h1",null,"バインディング（クラスとスタイル）",-1),I1=s("p",null,"クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある",-1),V1={class:"flex gap-6"},j1=s("p",{class:"text-xs"},"オブジェクト構文",-1),H1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"{ "),s("span",{style:{color:"#E0A569"}},"red"),s("span",{style:{color:"#858585"}},": "),s("span",{style:{color:"#B8A965"}},"red"),s("span",{style:{color:"#858585"}}," }"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"red"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"style"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#E0A569"}},"red"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"color"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"red"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"style"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"{ "),s("span",{style:{color:"#B58451"}},"red"),s("span",{style:{color:"#8E8F8B"}},": "),s("span",{style:{color:"#8C862B"}},"red"),s("span",{style:{color:"#8E8F8B"}}," }"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"red"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#B58451"}},"red"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"color"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"red"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),z1=s("p",{class:"text-xs"},"配列構文はこのように書ける",-1),W1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),U1=s("p",{class:"text-xs"},"組み合わせることもできる",-1),q1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red, { red }]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red, { red }]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),K1=s("p",{class:"text-xs"},"スタイル属性にもオブジェクト構文と配列構文がある",-1),J1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"style"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"{ "),s("span",{style:{color:"#E0A569"}},"color"),s("span",{style:{color:"#858585"}},": "),s("span",{style:{color:"#C98A7D"}},"'red'"),s("span",{style:{color:"#858585"}}," }"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"style"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"{ "),s("span",{style:{color:"#B58451"}},"color"),s("span",{style:{color:"#8E8F8B"}},": "),s("span",{style:{color:"#B56959"}},"'red'"),s("span",{style:{color:"#8E8F8B"}}," }"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Y1={__name:"26",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[R1,I1,s("div",V1,[s("div",null,[j1,F(a,Z({},{ranges:[""]}),{default:C(()=>[H1]),_:1},16)]),s("div",null,[z1,F(a,Z({},{ranges:[""]}),{default:C(()=>[W1]),_:1},16),U1,F(a,Z({},{ranges:[""]}),{default:C(()=>[q1]),_:1},16),K1,F(a,Z({},{ranges:[""]}),{default:C(()=>[J1]),_:1},16)])])]),_:1},16)}}},Z1=P(Y1,[["__file","/@slidev/slides/26.md"]]),G1=s("h1",null,"イベントハンドリング",-1),Q1=s("p",null,[s("code",null,"v-on"),o(" ディレクティブは HTML 要素などの"),s("a",{href:"https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events",target:"_blank",rel:"noopener"},"イベント"),o("操作に使われる。"),s("code",null,":"),o("の後の引数でイベントの種類を指定できる")],-1),X1={class:"h-60 mb-6 overflow-y-auto"},sg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-on"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"clicked "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}}," times."),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-on"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"clicked "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}}," times."),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),eg=s("p",null,"省略するとこのようにかける",-1),lg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"counter += 1"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"counter += 1"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),ng={__name:"27",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[G1,Q1,s("div",X1,[F(a,Z({},{ranges:[""]}),{default:C(()=>[sg]),_:1},16)]),eg,F(a,Z({},{ranges:[""]}),{default:C(()=>[lg]),_:1},16)]),_:1},16)}}},og=P(ng,[["__file","/@slidev/slides/27.md"]]),tg=s("h1",null,"イベントハンドリング（関数名を属性値として使う）",-1),ag=s("p",null,"関数を渡すと複雑な処理が書きやすい",-1),rg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"clicked "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}}," times."),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"clicked "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}}," times."),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),cg={__name:"28",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[tg,ag,F(a,Z({},{ranges:[""]}),{default:C(()=>[rg]),_:1},16)]),_:1},16)}}},pg=P(cg,[["__file","/@slidev/slides/28.md"]]);let ig=e=>crypto.getRandomValues(new Uint8Array(e)),yg=(e,l,n)=>{let t=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*t*l/e.length);return(r=l)=>{let c="";for(;;){let p=n(a),i=a;for(;i--;)if(c+=e[p[i]&t]||"",c.length===r)return c}}},ug=(e,l=21)=>yg(e,l,ig);const dg=["width","height"],fg=["id"],hg=["fill"],mg=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],Bg=Vs({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){b(S);const n=ug("abcedfghijklmn",10)();return(t,a)=>(A(),Y("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",{id:D(n),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,hg)],8,fg)]),s("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${D(n)})`},null,8,mg)],8,dg))}}),Va=P(Bg,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/Arrow.vue"]]),vg=s("h1",null,"条件付きレンダリング",-1),Ag=s("p",null,[s("code",null,"v-if"),o(" あるいは "),s("code",null,"v-show"),o(" によって条件に応じてレンダリングする範囲を変更することができる。 "),s("code",null,"v-show"),o(" は見た目上非表示にするが "),s("code",null,"v-if"),o(" は DOM 要素も取り除く。")],-1),_g=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"conditional-rendering"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"seen"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Now you see me"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"seen"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"conditional-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"seen"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Now you see me"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"seen"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),gg={__name:"29",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=Va,c=Ca("click");return A(),M(J,q(W(l)),{default:C(()=>[vg,Ag,F(a,Z({},{ranges:["all","3","8","all"]}),{default:C(()=>[_g]),_:1},16),He(F(r,{x1:"350",y1:"370",x2:"190",y2:"310",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,2]])]),_:1},16)}}},Cg=P(gg,[["__file","/@slidev/slides/29.md"]]),Dg=s("h1",null,"条件付きレンダリング（v-if と v-show の使い分け）",-1),Eg=s("div",{class:"mb-6"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}}),s("th",{style:{"text-align":"left"}},"v-if"),s("th",{style:{"text-align":"left"}},"v-show")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},"初期コスト"),s("td",{style:{"text-align":"left"}},"低い"),s("td",{style:{"text-align":"left"}},"高い")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"切り替えコスト"),s("td",{style:{"text-align":"left"}},"高い"),s("td",{style:{"text-align":"left"}},"低い")])])])],-1),Fg=s("ul",null,[s("li",null,[o("コンポーネントをマウントしてからあまり変化しないケースであれば "),s("code",null,"v-if"),o("を使う")]),s("li",null,[o("コンポーネントをマウントしてから頻繁に変化するケースであれば "),s("code",null,"v-show"),o("を使う")])],-1),kg={__name:"30",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[Dg,Eg,Fg]),_:1},16))}},xg=P(kg,[["__file","/@slidev/slides/30.md"]]),bg=s("h1",null,"条件付きレンダリング",-1),wg=s("p",null,[s("code",null,"v-if v-else v-else-if"),o(" でレンダリングの条件分岐ができる。 "),s("code",null,"template"),o(" 要素に対して使うことでグルーピングすることもできる。")],-1),$g={class:"flex gap-4"},Sg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#C98A7D"}},`'A'"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"A"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-else-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#C98A7D"}},`'B'"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"B"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-else-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#C98A7D"}},`'C'"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"C"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-else"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Not A/B/C"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"A"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B56959"}},`'A'"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"A"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-else-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B56959"}},`'B'"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"B"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-else-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B56959"}},`'C'"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"C"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-else"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Not A/B/C"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"A"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Pg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"ok"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"h1"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Title"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"h1"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Paragraph 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Paragraph 2"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"ok"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"ok"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"h1"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Title"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"h1"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Paragraph 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Paragraph 2"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"ok"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Og={__name:"31",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[bg,wg,s("div",$g,[F(a,Z({},{ranges:[""]}),{default:C(()=>[Sg]),_:1},16),F(a,Z({},{ranges:[""]}),{default:C(()=>[Pg]),_:1},16)])]),_:1},16)}}},Tg=P(Og,[["__file","/@slidev/slides/31.md"]]),Mg=s("h1",null,"リストレンダリング",-1),Ng=s("p",null,"配列あるいはオブジェクトをもとに反復した要素の表示ができる。",-1),Lg={class:"flex gap-8"},Rg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"list-rendering"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"todos"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"text"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"todos"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn JavaScript"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn Vue"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Build something awesome"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"list-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"todos"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"text"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"todos"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn JavaScript"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn Vue"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Build something awesome"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ig=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),Vg={__name:"32",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[Mg,Ng,s("div",Lg,[F(a,Z({},{ranges:[""]}),{default:C(()=>[Rg]),_:1},16),Ig])]),_:1},16)}}},jg=P(Vg,[["__file","/@slidev/slides/32.md"]]),Hg=s("h1",null,[o("リストレンダリング（"),s("code",null,"key"),o(" 属性の付与）")],-1),zg=s("p",null,[o("要素の再利用と並び替えを考慮する場合、一意な値を "),s("code",null,"key"),o(" 属性に渡す必要がある。")],-1),Wg={class:"flex gap-8"},Ug=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"list-rendering"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"todos"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"text"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"todos"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn JavaScript"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn Vue"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Build something awesome"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"list-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"todos"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"text"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"todos"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn JavaScript"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn Vue"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Build something awesome"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),qg=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),Kg={__name:"33",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[Hg,zg,s("div",Wg,[F(a,Z({},{ranges:[""]}),{default:C(()=>[Ug]),_:1},16),qg])]),_:1},16)}}},Jg=P(Kg,[["__file","/@slidev/slides/33.md"]]),Yg=s("h1",null,[o("リストレンダリング（添字による "),s("code",null,"key"),o(" 属性の付与）")],-1),Zg=s("p",null,"識別子を用意していない場合、添字が得られるので代用すると便利。",-1),Gg={class:"flex gap-8"},Qg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"list-rendering"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}},", "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},") "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"todos"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"todo"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"text"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"todos"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn JavaScript"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Learn Vue"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"text"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Build something awesome"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"list-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}},", "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},") "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"todos"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"todo"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"text"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"todos"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn JavaScript"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Learn Vue"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"text"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Build something awesome"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Xg=s("div",{class:"flex-shrink w-110"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")]),s("p",null,"ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意")],-1),sC={__name:"34",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[Yg,Zg,s("div",Gg,[F(a,Z({},{ranges:["all","4"]}),{default:C(()=>[Qg]),_:1},16),Xg])]),_:1},16)}}},eC=P(sC,[["__file","/@slidev/slides/34.md"]]),lC={id:"two-way-binding"},nC={__name:"TwoWayBindingSample",setup(e){b(S);const l=ns("Hello Vue!");return(n,t)=>(A(),Y("div",lC,[s("p",null,Ys(l.value),1),He(s("input",{class:"text-black p-1","onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a)},null,512),[[Jn,l.value]])]))}},oC=P(nC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwoWayBindingSample.vue"]]),tC=s("h1",null,"フォーム入力バインディング",-1),aC=s("p",null,[s("code",null,"v-model"),o(" によって form の input 要素や textarea 要素、select 要素の入力イベントに応じてデータを更新できるようになる。")],-1),rC={class:"flex gap-8"},cC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"two-way-binding"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello Vue!"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"two-way-binding"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello Vue!"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),pC={__name:"35",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=oC;return A(),M(J,q(W(l)),{default:C(()=>[tC,aC,s("div",rC,[F(a,Z({},{ranges:[""]}),{default:C(()=>[cC]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},iC=P(pC,[["__file","/@slidev/slides/35.md"]]),yC=s("h1",null,"コンポーネント",-1),uC=s("ul",null,[s("li",null,"コンポーネントの基本と構成"),s("li",null,"プロパティを用いた子コンポーネントへのデータの受け渡し"),s("li",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し"),s("li",null,"v-model を用いた親子間コンポーネントのデータの受け渡し"),s("li",null,"v-model を用いない親子間コンポーネントのデータの受け渡し"),s("li",null,"コンポーネントで v-model を使う"),s("li",null,"スロットによるコンテンツ配信")],-1),dC={__name:"36",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[yC,uC]),_:1},16))}},fC=P(dC,[["__file","/@slidev/slides/36.md"]]),hC="/vue-3-practices/components.png",mC=s("h1",null,"コンポーネントの基本と構成",-1),BC=s("p",null,"親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）",-1),vC=s("img",{src:hC,alt:"コンポーネントの基本と構成",style:{height:"80%",width:"auto"}},null,-1),AC={__name:"37",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[mC,BC,vC]),_:1},16))}},_C=P(AC,[["__file","/@slidev/slides/37.md"]]),gC=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),CC=s("p",null,"親コンポーネントから子コンポーネントに 文字列 を渡してみる",-1),DC={class:"flex gap-8"},EC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),FC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"title"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"Hello!"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"title"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"Hello!"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),kC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),xC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"title"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"String"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"title"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"String"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),bC={__name:"38",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[gC,CC,s("div",DC,[s("div",null,[EC,F(a,Z({},{ranges:[""]}),{default:C(()=>[FC]),_:1},16)]),s("div",null,[kC,F(a,Z({},{ranges:[""]}),{default:C(()=>[xC]),_:1},16)])])]),_:1},16)}}},wC=P(bC,[["__file","/@slidev/slides/38.md"]]),$C=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),SC=s("p",null,"数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある",-1),PC={class:"flex gap-8"},OC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),TC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#6394BF"}},"14"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#296AA3"}},"14"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),MC=s("p",{class:"text-xs"},"静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります",-1),NC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),LC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Number"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Number"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),RC={__name:"39",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=Va,c=Ca("click");return A(),M(J,q(W(l)),{default:C(()=>[$C,SC,s("div",PC,[s("div",null,[OC,F(a,Z({},{ranges:["all","2","all"]}),{default:C(()=>[TC]),_:1},16),MC]),s("div",null,[NC,F(a,Z({},{ranges:[""]}),{default:C(()=>[LC]),_:1},16)])]),He(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},IC=P(RC,[["__file","/@slidev/slides/39.md"]]),VC=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),jC=s("p",null,"真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),HC={class:"flex gap-8"},zC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),WC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"is-show"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"is-show"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),UC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),qC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"show"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"isShow"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Boolean"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"show"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isShow"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"show"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Boolean"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"show"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),KC={__name:"40",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=Va,c=Ca("click");return A(),M(J,q(W(l)),{default:C(()=>[VC,jC,s("div",HC,[s("div",null,[zC,F(a,Z({},{ranges:["all","2","all"]}),{default:C(()=>[WC]),_:1},16)]),s("div",null,[UC,F(a,Z({},{ranges:[""]}),{default:C(()=>[qC]),_:1},16)])]),He(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},JC=P(KC,[["__file","/@slidev/slides/40.md"]]),YC=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),ZC=s("p",null,"props はデフォルト値を設定することもできる",-1),GC={class:"flex gap-8"},QC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),XC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"is-show"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"is-show"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),sD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),eD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"show"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"isShow"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Boolean"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"default"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"show"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isShow"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"show"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Boolean"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"default"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"show"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),lD={__name:"41",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[YC,ZC,s("div",GC,[s("div",null,[QC,F(a,Z({},{ranges:[""]}),{default:C(()=>[XC]),_:1},16)]),s("div",null,[sD,F(a,Z({},{ranges:["all","9-12","all"]}),{default:C(()=>[eD]),_:1},16)])])]),_:1},16)}}},nD=P(lD,[["__file","/@slidev/slides/41.md"]]),oD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),tD=s("p",null,"配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),aD={class:"flex gap-8"},rD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),cD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"student"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"{ "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},": "),s("span",{style:{color:"#C98A7D"}},"'taro'"),s("span",{style:{color:"#858585"}},", "),s("span",{style:{color:"#E0A569"}},"old"),s("span",{style:{color:"#858585"}},": "),s("span",{style:{color:"#C98A7D"}},"'16'"),s("span",{style:{color:"#858585"}}," }"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"student"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"{ "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},": "),s("span",{style:{color:"#B56959"}},"'taro'"),s("span",{style:{color:"#8E8F8B"}},", "),s("span",{style:{color:"#B58451"}},"old"),s("span",{style:{color:"#8E8F8B"}},": "),s("span",{style:{color:"#B56959"}},"'16'"),s("span",{style:{color:"#8E8F8B"}}," }"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),pD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),iD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"こんにちは、"),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}},"さん、"),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"old"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}},"歳になりましたね"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"student"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Object"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"student"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"こんにちは、"),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}},"さん、"),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"old"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}},"歳になりましたね"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"student"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Object"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"student"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),yD={__name:"42",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[oD,tD,s("div",aD,[s("div",null,[rD,F(a,Z({},{ranges:[""]}),{default:C(()=>[cD]),_:1},16)]),s("div",null,[pD,F(a,Z({},{ranges:[""]}),{default:C(()=>[iD]),_:1},16)])])]),_:1},16)}}},uD=P(yD,[["__file","/@slidev/slides/42.md"]]),dD={__name:"EmitChild",emits:["child-clicked"],setup(e,{emit:l}){b(S);function n(){l("child-clicked","Hello!")}return(t,a)=>(A(),Y("button",{onClick:n},"emit !"))}},fD=P(dD,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitChild.vue"]]),hD={__name:"EmitParent",setup(e){b(S);function l(n){alert(n)}return(n,t)=>(A(),M(fD,{onChildClicked:l}))}},mD=P(hD,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitParent.vue"]]),BD=s("h1",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し",-1),vD=s("p",null,"子コンポーネントでイベントを発火させることによって可能",-1),AD={class:"flex gap-8"},_D={class:"flex-shrink"},gD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),CD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"child-clicked"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"clicked"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"clicked"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"alert"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"child-clicked"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"clicked"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"clicked"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"alert"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),DD={class:"flex-shrink"},ED=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),FD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"clickHandler"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"emit !"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"emit"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineEmits"),s("span",{style:{color:"#858585"}},"(["),s("span",{style:{color:"#C98A7D"}},'"child-clicked"'),s("span",{style:{color:"#858585"}},"]);")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"clickHandler"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"emit"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"child-clicked"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Hello!"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"clickHandler"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"emit !"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"emit"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineEmits"),s("span",{style:{color:"#8E8F8B"}},"(["),s("span",{style:{color:"#B56959"}},'"child-clicked"'),s("span",{style:{color:"#8E8F8B"}},"]);")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"clickHandler"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"emit"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"child-clicked"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Hello!"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),kD={class:"flex-shrink-0"},xD=s("p",{class:"text-xs"},"実行サンプル",-1),bD={__name:"43",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=mD;return A(),M(J,q(W(l)),{default:C(()=>[BD,vD,s("div",AD,[s("div",_D,[gD,F(a,Z({},{ranges:[""]}),{default:C(()=>[CD]),_:1},16)]),s("div",DD,[ED,F(a,Z({},{ranges:[""]}),{default:C(()=>[FD]),_:1},16)]),s("div",kD,[xD,F(r)])])]),_:1},16)}}},wD=P(bD,[["__file","/@slidev/slides/43.md"]]),$D={__name:"TwowayChild",props:{modelValue:String},emits:["update:modelValue"],setup(e,{emit:l}){const n=e;b(S);const t=T({get:()=>n.modelValue,set:a=>{l("update:modelValue",a)}});return(a,r)=>He((A(),Y("input",{"onUpdate:modelValue":r[0]||(r[0]=c=>Ds(t)?t.value=c:null)},null,512)),[[Jn,D(t)]])}},SD=P($D,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayChild.vue"]]),PD={__name:"TwowayParent",setup(e){b(S);const l=ns("Hello !");return(n,t)=>(A(),Y(xs,null,[F(SD,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a)},null,8,["modelValue"]),s("p",null,Ys(l.value),1)],64))}},OD=P(PD,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayParent.vue"]]),TD=s("h1",null,"v-model を用いた親子間コンポーネントのデータの受け渡し",-1),MD=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),ND={class:"flex gap-8"},LD={class:"flex-shrink"},RD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),ID=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello !"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),VD={class:"flex-shrink"},jD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),HD={class:"h-xs overflow-y-auto"},zD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"modelValue"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"String"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"emit"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineEmits"),s("span",{style:{color:"#858585"}},"(["),s("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),s("span",{style:{color:"#858585"}},"]);")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"get"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"modelValue"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"set"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"emit"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"update:modelValue"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"modelValue"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"String"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"emit"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineEmits"),s("span",{style:{color:"#8E8F8B"}},"(["),s("span",{style:{color:"#B56959"}},'"update:modelValue"'),s("span",{style:{color:"#8E8F8B"}},"]);")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"get"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"modelValue"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"set"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"emit"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"update:modelValue"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),WD={class:"flex-shrink-0"},UD=s("p",{class:"text-xs"},"実行サンプル",-1),qD={__name:"44",setup(e){const l={};return b(S),(n,t)=>{const a=ys,r=OD;return A(),M(J,q(W(l)),{default:C(()=>[TD,MD,s("div",ND,[s("div",LD,[RD,F(a,Z({},{ranges:[""]}),{default:C(()=>[ID]),_:1},16)]),s("div",VD,[jD,s("div",HD,[F(a,Z({},{ranges:[""]}),{default:C(()=>[zD]),_:1},16)])]),s("div",WD,[UD,F(r)])])]),_:1},16)}}},KD=P(qD,[["__file","/@slidev/slides/44.md"]]),JD=s("h1",null,"v-model を用いない親子間コンポーネントのデータの受け渡し",-1),YD=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),ZD={class:"flex gap-8"},GD={class:"flex-shrink"},QD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),XD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"update"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#E0A569"}},"modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"$event"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello !"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"update"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#B58451"}},"modelValue"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"$event"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"modelValue"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),s4=s("ul",null,[s("li",null,"v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）"),s("li",null,"親 → 子：プロパティ"),s("li",null,"子 → 親：イベント"),s("li",null,"このような状態が双方向バインディング（値を束縛しあっている）")],-1),e4={__name:"45",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[JD,YD,s("div",ZD,[s("div",GD,[QD,F(a,Z({},{ranges:[""]}),{default:C(()=>[XD]),_:1},16)]),s4])]),_:1},16)}}},l4=P(e4,[["__file","/@slidev/slides/45.md"]]),n4=s("h1",null,"スロットによるコンテンツ配信",-1),o4=s("p",null,"slot を使うと、HTML 要素のようにコンポーネントに子要素を渡すことができる",-1),t4={class:"flex gap-8"},a4={class:"flex-shrink"},r4=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),c4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello Component"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello Component"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),p4={class:"flex-shrink"},i4=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),y4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ChildComponent: "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ChildComponent: "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),u4=s("div",{class:"text-xs"},[s("p",{class:"text-xs"},"結果例"),s("strong",null,"ChildComponent: "),o("Hello Component ")],-1),d4={__name:"46",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[n4,o4,s("div",t4,[s("div",a4,[r4,F(a,Z({},{ranges:[""]}),{default:C(()=>[c4]),_:1},16)]),s("div",p4,[i4,F(a,Z({},{ranges:[""]}),{default:C(()=>[y4]),_:1},16)])]),u4]),_:1},16)}}},f4=P(d4,[["__file","/@slidev/slides/46.md"]]),h4=s("h1",null,"Vue の基本的な書き方はこれで以上！",-1),m4=s("p",null,"おつかれさまでした",-1),B4=s("p",null,"以下を学んできた",-1),v4=s("ul",null,[s("li",null,"リアクティブな値の作り方"),s("li",null,"テンプレートの書き方"),s("li",null,"コンポーネントの作り方")],-1),A4=s("p",null,"ここまでは Vue.js を使うなら必ず知っている必要がある内容",-1),_4=s("p",null,"引き続き知らない機能がコードに出てくるかもしれないが、学んだことと関連していると感じられたらそれでよい",-1),g4=s("p",null,"学習の目安",-1),C4=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),D4=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),E4={__name:"47",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[h4,m4,B4,v4,A4,_4,g4,C4,D4]),_:1},16))}},F4=P(E4,[["__file","/@slidev/slides/47.md"]]),k4=s("h1",null,"次のステップは？",-1),x4=s("p",null,"これから学ぶ内容の確認",-1),b4=s("ul",null,[s("li",null,[o("より具体的な題材でコードを読む・書く "),s("ul",null,[s("li",null,[o("グリッドコンポーネント "),s("ul",null,[s("li",null,"これまで学んだ内容を組み合わせた少し複雑な実装")])]),s("li",null,[o("Markdown エディター "),s("ul",null,[s("li",null,"throttle-debounce によるイベント処理の間引き")])]),s("li",null,[o("ツクロアデザインラボの記事ビューアー "),s("ul",null,[s("li",null,"Fetch API による JSON データの取得"),s("li",null,"Vue Router による画面遷移")])]),s("li",null,[o("靴のギャラリー "),s("ul",null,[s("li",null,"画像の取得と表示"),s("li",null,"あらかじめ用意されたスタイルの適用")])])])]),s("li",null,[o("Nuxt 3 を使う "),s("ul",null,[s("li",null,"Vue.js 単体を使う場合との違い"),s("li",null,"useFetch などの Nuxt 3 特有のヘルパー関数の使い方")])])],-1),w4={__name:"48",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[k4,x4,b4]),_:1},16))}},$4=P(w4,[["__file","/@slidev/slides/48.md"]]),S4=s("h1",null,"グリッドコンポーネント",-1),P4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev")],-1),O4=s("ol",null,[s("li",null,"どんなアプリか：表にデータを流し込んでカラムで並べ替えできる"),s("li",null,"コードの説明"),s("li",null,"行を追加できるようにしよう（20 分程度）")],-1),T4={__name:"49",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[S4,P4,O4]),_:1},16))}},M4=P(T4,[["__file","/@slidev/slides/49.md"]]),N4=s("h1",null,"イベント処理の間引き",-1),L4=s("p",null,"throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる",-1),R4={class:"flex gap-8"},I4={class:"flex-shrink"},V4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"debounce"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"throttle-debounce"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'""'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"originalFruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"orange"'),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"banana"'),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"strawberry"'),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"grape"'),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"watermelon"'),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"fruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filterFruits"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"indexOf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},">="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"debounce"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"throttle-debounce"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'""'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"originalFruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"orange"'),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"banana"'),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"strawberry"'),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"grape"'),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"watermelon"'),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"fruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filterFruits"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"indexOf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},">="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),j4={class:"flex-shrink"},H4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"input"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"filterFruits"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},", "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},") "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"input"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"filterFruits"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},", "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},") "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),z4=s("p",null,"次のように書き換えると…？",-1),W4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"filterFruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"debounce"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"indexOf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},">="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"filterFruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"debounce"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"indexOf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},">="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")])])])],-1),U4={__name:"50",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[N4,L4,s("div",R4,[s("div",I4,[F(a,Z({},{ranges:[""]}),{default:C(()=>[V4]),_:1},16)]),s("div",j4,[F(a,Z({},{ranges:[""]}),{default:C(()=>[H4]),_:1},16),z4,F(a,Z({},{ranges:[""]}),{default:C(()=>[W4]),_:1},16)])])]),_:1},16)}}},q4=P(U4,[["__file","/@slidev/slides/50.md"]]),K4=s("h1",null,"Markdown エディター",-1),J4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev")],-1),Y4=s("ol",null,[s("li",null,"どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる"),s("li",null,"コードの説明"),s("li",null,"右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）")],-1),Z4={__name:"51",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[K4,J4,Y4]),_:1},16))}},G4=P(Z4,[["__file","/@slidev/slides/51.md"]]),Q4=s("h1",null,"デザインラボの記事ビューアー",-1),X4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev")],-1),s6=s("ol",null,[s("li",null,[o("どんなアプリか："),s("a",{href:"https://design-lab.tuqulore.com/",target:"_blank",rel:"noopener"},"デザインラボ"),o("というサイトと同じ記事データ（JSON）を取得して一覧から選択表示できる")]),s("li",null,"コードの説明（App コンポーネント、PostList コンポーネント）"),s("li",null,[o("Vue Router を導入しよう（20 分程度） "),s("ul",null,[s("li",null,"Vue プラグインとして Vue アプリケーションインスタンスに登録"),s("li",null,"画面が切り替わるようコンポーネントへの差し替え"),s("li",null,"画面遷移を補足できるコンポーネントへの差し替え")])]),s("li",null,"コードの説明（PostDetail コンポーネント）")],-1),e6={__name:"52",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[Q4,X4,s6]),_:1},16))}},l6=P(e6,[["__file","/@slidev/slides/52.md"]]),n6="/vue-3-practices/handson-gallery-shoes-finish.png",o6=s("h1",null,"靴のギャラリー",-1),t6=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev")],-1),a6=s("ol",null,[s("li",null,"どんなアプリか：靴のデータ（JSON）を取得してショッピングサイトらしい見た目で一覧表示できる"),s("li",null,"JSON から靴のデータを取得しよう（10 分程度）"),s("li",null,"取得した靴のデータをあらかじめ用意されたスタイルで表示しよう（20 分程度）")],-1),r6=s("img",{class:"pt-2",src:n6,width:"400"},null,-1),c6={__name:"53",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[o6,t6,a6,r6]),_:1},16))}},p6=P(c6,[["__file","/@slidev/slides/53.md"]]),i6=s("h1",null,"Nuxt 3",-1),y6=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt")],-1),u6=s("p",null,"効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）",-1),d6=s("ol",null,[s("li",null,[o("リアクティビティと Web コンポーネントの提供："),s("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue.js")]),s("li",null,[o("開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング："),s("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener"},"webpack 5"),o(" と "),s("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite")]),s("li",null,[o("レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける："),s("a",{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener"},"esbuild")]),s("li",null,[o("開発サーバー、サーバーサイドレンダリング、API サーバーの提供："),s("a",{href:"https://github.com/unjs/h3",target:"_blank",rel:"noopener"},"h3")]),s("li",null,[o("ルーティング（画面遷移処理）："),s("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"vue-router")])],-1),f6={__name:"54",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[i6,y6,u6,d6]),_:1},16))}},h6=P(f6,[["__file","/@slidev/slides/54.md"]]),m6=s("h1",null,"Nuxt 3",-1),B6=s("ul",null,[s("li",null,"Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）"),s("li",null,"Vue コンポーネント等の import を省略できる"),s("li",null,"pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）"),s("li",null,"server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）"),s("li",null,"Nuxt 3 は 2022 年 6 月現在、リリース候補版が公開されている")],-1),v6={__name:"55",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[m6,B6]),_:1},16))}},A6=P(v6,[["__file","/@slidev/slides/55.md"]]),_6=s("h1",null,"Nuxt 3",-1),g6=s("ul",null,[s("li",null,"pages"),s("li",null,"NuxtLink"),s("li",null,"layouts"),s("li",null,"Data Fetching / server ディレクトリ"),s("li",null,"composables")],-1),C6={__name:"56",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[_6,g6]),_:1},16))}},D6=P(C6,[["__file","/@slidev/slides/56.md"]]),E6=s("h1",null,"pages",-1),F6=s("p",null,[o("app.vue を削除する。"),s("br"),o(" pages ディレクトリに.vue ファイルを配置し、複数ページを構成する。 まずは "),s("code",null,"pages/index.vue"),o(", "),s("code",null,"pages/about.vue"),o(" を作成する。")],-1),k6=s("p",null,[o("Vue 開発環境では App.vue ファイルをメインで開発していて、Nuxt でも同様の目的を app.vue にて行える。例えば app.vue は以下のように書いて、各ページの template 部分が"),s("code",null,"<NuxtPage />"),o("に置き換わる。")],-1),x6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通ヘッダ"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通ヘッダ"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),b6=s("p",null,"ただし、複数ページを構成するにあたっては pages 内で開発・管理することが一般的。 その際、app.vue でこのようなことができるが、後述する layouts 機能を使ったほうがよい。",-1),w6={__name:"57",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[E6,F6,k6,F(a,Z({},{ranges:[""]}),{default:C(()=>[x6]),_:1},16),b6]),_:1},16)}}},$6=P(w6,[["__file","/@slidev/slides/57.md"]]),S6=s("h1",null,"NuxtLink",-1),P6=s("p",null,[o("コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。"),s("br"),o(" Nuxt ではページを作成するだけで Vue Router による設定を自動に行ってくれる、つまり Vue 環境下のように手動でルーティング設定を生成する必要がない。")],-1),O6=s("p",null,"そしてそのルートを移動する際は HTML の",-1),T6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),M6=s("p",null,"ではなく",-1),N6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},'<NuxtLink to="/about">ABOUT</NuxtLink>')])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},'<NuxtLink to="/about">ABOUT</NuxtLink>')])])])],-1),L6=s("p",null,[o("と記述してリンクを作成する。"),s("br"),o(" ルート外、例えば外部サイトのリンクを貼る場合は従来の"),s("code",null,"<a>"),o("要素を使うことになる。")],-1),R6={__name:"58",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[S6,P6,O6,F(a,Z({},{ranges:[""]}),{default:C(()=>[T6]),_:1},16),M6,F(a,Z({},{ranges:[""]}),{default:C(()=>[N6]),_:1},16),L6]),_:1},16)}}},I6=P(R6,[["__file","/@slidev/slides/58.md"]]),V6=s("h1",null,"layouts",-1),j6=s("p",null,[s("code",null,"layouts/default.vue"),o("を作成し、共通ナビゲーションを表示させる。"),s("br"),o(" pages で解説したように例えば app.vue に共通ヘッダを持たせるのであれば、以下のような書き方で事足りるが、ページによってはヘッダが不要などといったことが出てくる。 その際、ページそのもののテンプレートを複数用意し、各ページがそのテンプレートを必要に応じて選び変えることができる。")],-1),H6=s("p",null,[s("code",null,"app.vue"),o("の例")],-1),z6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通ヘッダ"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通ヘッダ"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),W6=s("p",null,[s("code",null,"layouts/default.vue"),o("の例")],-1),U6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通ヘッダ"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通ヘッダ"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),q6={__name:"59",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[V6,j6,H6,F(a,Z({},{ranges:[""]}),{default:C(()=>[z6]),_:1},16),W6,F(a,Z({},{ranges:[""]}),{default:C(()=>[U6]),_:1},16)]),_:1},16)}}},K6=P(q6,[["__file","/@slidev/slides/59.md"]]),J6=s("h1",null,"Data Fetching / server ディレクトリ",-1),Y6=s("p",null,[s("code",null,"server/api"),o("ディレクトリにある"),s("code",null,"users.js"),o("を確認、"),s("code",null,"components/userList.vue"),o("に以下を記述する。")],-1),Z6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#B8A965"}},"users"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"users"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/users"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#8C862B"}},"users"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"users"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/users"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),G6={__name:"60",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[J6,Y6,F(a,Z({},{ranges:[""]}),{default:C(()=>[Z6]),_:1},16)]),_:1},16)}}},Q6=P(G6,[["__file","/@slidev/slides/60.md"]]),X6=s("h1",null,"composables",-1),sE=s("p",null,[o("アプリ全体共通のデータを管理する。js ファイルではあるが、中身は vue の記述に近いことがわかる。 ここで状態を管理する。 "),s("code",null,"composables/userCounter.js"),o("を作成する。")],-1),eE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"readonly"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"),")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"readonly"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"),")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),lE={__name:"61",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[X6,sE,F(a,Z({},{ranges:[""]}),{default:C(()=>[eE]),_:1},16)]),_:1},16)}}},nE=P(lE,[["__file","/@slidev/slides/61.md"]]),oE=s("h1",null,"composables",-1),tE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"カウント: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},"><"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"increment!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"useCounter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"~~/composables/useCounter"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useCounter"),s("span",{style:{color:"#858585"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#858585"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"カウント: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},"><"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"increment!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"useCounter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"~~/composables/useCounter"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useCounter"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),aE={__name:"62",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[oE,F(a,Z({},{ranges:[""]}),{default:C(()=>[tE]),_:1},16)]),_:1},16)}}},rE=P(aE,[["__file","/@slidev/slides/62.md"]]),cE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較",-1),pE=s("p",null,"デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの",-1),iE=s("p",null,"動作は Vue 3 のものと同じ",-1),yE=s("p",null,"Node.js がセットアップ済みの人はローカルで動かしてみよう",-1),uE=s("ol",null,[s("li",null,[s("a",{href:"https://github.com/tuqulore/vue-3-practices/",target:"_blank",rel:"noopener"},"https://github.com/tuqulore/vue-3-practices/"),o(" から ZIP をダウンロード")]),s("li",null,"任意の場所に ZIP を展開"),s("li",null,"handson-fetch-router-nuxt-finish ディレクトリに移動"),s("li",null,[s("code",null,"npm install"),o(" で NPM パッケージをインストール")]),s("li",null,[s("code",null,"npm run dev"),o(" で Nuxt 3 の開発サーバーを起動")])],-1),dE={__name:"63",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[cE,pE,iE,yE,uE]),_:1},16))}},fE=P(dE,[["__file","/@slidev/slides/63.md"]]),hE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),mE=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"Vue 3"),s("ol",null,[s("li",null,"Vue Router をプラグインとしてインストール"),s("li",null,"ルートを定義する"),s("li",null,"RouterView コンポーネントを使う")])]),s("div",null,[s("p",{class:"text-xs"},"Nuxt 3"),s("div",{class:"h-xs overflow-y-auto"},[s("ol",null,[s("li",null,"導入済みなので設定不要"),s("li",null,"ファイル・ディレクトリ構成で定義できる（ファイルベースルーティング）"),s("li",null,[o("app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 "),s("a",{href:"https://v3.nuxtjs.org/guide/directory-structure/app",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/directory-structure/app")])]),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])])])])])],-1),BE={__name:"64",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[hE,mE]),_:1},16))}},vE=P(BE,[["__file","/@slidev/slides/64.md"]]),AE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),_E=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/directory-structure/pages",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/directory-structure/pages")],-1),gE=s("blockquote",null,[s("p",null,[o("Pages "),s("strong",null,"must have a single root element"),o(" to allow route transitions between pages. (HTML comments are considered elements as well.)")])],-1),CE=s("p",null,[o("Vue 3 はテンプレートの最上位に複数要素が書けるようになった "),s("a",{href:"https://v3.ja.vuejs.org/guide/migration/fragments.html",target:"_blank",rel:"noopener"},"https://v3.ja.vuejs.org/guide/migration/fragments.html")],-1),DE=s("p",null,"例：",-1),EE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),FE=s("p",null,"しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない",-1),kE={__name:"65",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[AE,_E,gE,CE,DE,F(a,Z({},{ranges:[""]}),{default:C(()=>[EE]),_:1},16),FE]),_:1},16)}}},xE=P(kE,[["__file","/@slidev/slides/65.md"]]),bE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),wE={class:"flex gap-8"},$E=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),SE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"RouterLink"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue-router"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"RouterLink"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue-router"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),PE=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),OE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),TE=s("p",null,"インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる",-1),ME={__name:"66",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[bE,s("div",wE,[s("div",null,[$E,F(a,Z({},{ranges:[""]}),{default:C(()=>[SE]),_:1},16)]),s("div",null,[PE,F(a,Z({},{ranges:[""]}),{default:C(()=>[OE]),_:1},16),TE])])]),_:1},16)}}},NE=P(ME,[["__file","/@slidev/slides/66.md"]]),LE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),RE=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/concepts/auto-imports",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/concepts/auto-imports")],-1),IE=s("p",null,"以下はインポート不要",-1),VE=s("ul",null,[s("li",null,"Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）"),s("li",null,"今まで使ってきた Composition API 関連の関数（ref、computed など）"),s("li",null,"components ディレクトリに配置された Vue コンポーネント"),s("li",null,"composables ディレクトリに配置されたコンポジション関数")],-1),jE={__name:"67",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[LE,RE,IE,VE]),_:1},16))}},HE=P(jE,[["__file","/@slidev/slides/67.md"]]),zE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),WE={class:"flex gap-8"},UE=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),qE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"中略"),s("span",{style:{color:"#DBD7CA"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"response"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"posts"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"json"),s("span",{style:{color:"#858585"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"中略"),s("span",{style:{color:"#393A34"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"response"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"response"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"json"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),KE=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),JE={class:"h-xs overflow-y-auto"},YE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"中略"),s("span",{style:{color:"#DBD7CA"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:3000/wp-json/wp/v2/posts.json"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"中略"),s("span",{style:{color:"#393A34"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"http://localhost:3000/wp-json/wp/v2/posts.json"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),ZE=s("ul",null,[s("li",null,"リアクティブな値を別途用意する必要がない"),s("li",null,[s("a",{href:"https://developer.mozilla.org/ja/docs/Web/API/Response/json",target:"_blank",rel:"noopener"},"Response.json()"),o("が暗黙的に実行されオブジェクトが得られる")]),s("li",null,[o("データ再取得の関数、取得中の状態値などあると便利なものが用意されている "),s("a",{href:"https://v3.nuxtjs.org/api/composables/use-fetch",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/api/composables/use-fetch")])],-1),GE={__name:"68",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[zE,s("div",WE,[s("div",null,[UE,F(a,Z({},{ranges:[""]}),{default:C(()=>[qE]),_:1},16)]),s("div",null,[KE,s("div",JE,[F(a,Z({},{ranges:[""]}),{default:C(()=>[YE]),_:1},16),ZE])])])]),_:1},16)}}},QE=P(GE,[["__file","/@slidev/slides/68.md"]]),XE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),s7=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/features/data-fetching",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/features/data-fetching")],-1),e7=s("p",null,"useFetch 以外もある",-1),l7=s("p",null,[o("useLazyFetch: 非同期関数でない代わりにデータ取得前は "),s("code",null,"null"),o(" が入る")],-1),n7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyFetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/posts"'),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyFetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/posts"'),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),o7=s("p",null,"useAsyncData: 例としては useFetch と同じことをやっている。（useFetch が使えないケースで）非同期処理によってデータを取得したい際に使う",-1),t7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},"));")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},"));")])])])],-1),a7=s("p",null,"useLazyAsyncData: useLazyFetch の useAsyncData 版",-1),r7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),c7={__name:"69",setup(e){const l={};return b(S),(n,t)=>{const a=ys;return A(),M(J,q(W(l)),{default:C(()=>[XE,s7,e7,l7,F(a,Z({},{ranges:[""]}),{default:C(()=>[n7]),_:1},16),o7,F(a,Z({},{ranges:[""]}),{default:C(()=>[t7]),_:1},16),a7,F(a,Z({},{ranges:[""]}),{default:C(()=>[r7]),_:1},16)]),_:1},16)}}},p7=P(c7,[["__file","/@slidev/slides/69.md"]]),i7=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),y7=s("p",null,"便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある",-1),u7=s("ul",null,[s("li",null,[o("同一オリジン（例："),s("code",null,"http://localhost:3000"),o("）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある "),s("ul",null,[s("li",null,"server ディレクトリで提供する API エンドポイントはオリジン省略可能"),s("li",null,"上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要")])])],-1),d7=s("p",null,[o("Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 "),s("a",{href:"https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch")],-1),f7=s("p",null,"場合によっては（$fetch ではなく） fetch を使うことも検討すること",-1),h7={__name:"70",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[i7,y7,u7,d7,f7]),_:1},16))}},m7=P(h7,[["__file","/@slidev/slides/70.md"]]),B7=s("h1",null,"スタイルガイド",-1),v7=s("p",null,"Vue 固有の記法についての公式なスタイルガイド",-1),A7=s("ul",null,[s("li",null,"スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる"),s("li",null,"スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる"),s("li",null,[s("a",{href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener"},"eslint-plugin-vue"),o("を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる")])],-1),_7=s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/style-guide/",target:"_blank",rel:"noopener"},"スタイルガイド")],-1),g7={__name:"71",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[B7,v7,A7,_7]),_:1},16))}},C7=P(g7,[["__file","/@slidev/slides/71.md"]]),D7=s("h1",null,"Vue 3 と Nuxt 3 の説明はこれで以上！",-1),E7=s("p",null,"おつかれさまでした",-1),F7=s("p",null,"以下を学んできた",-1),k7=s("ul",null,[s("li",null,"Vue の基本的な書き方"),s("li",null,"Vue アプリケーションのコードを読む・書く"),s("li",null,"Nuxt アプリケーションのコードを読む・書く")],-1),x7=s("p",null,"Nuxt 3 を使ってウェブアプリケーションをつくっていく準備ができた",-1),b7=s("p",null,"業務・趣味でウェブアプリケーションを開発していきましょう！",-1),w7=s("p",null,"学習の目安",-1),$7=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),S7=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),P7={__name:"72",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[D7,E7,F7,k7,x7,b7,w7,$7,S7]),_:1},16))}},O7=P(P7,[["__file","/@slidev/slides/72.md"]]),T7=s("h1",null,"課題",-1),M7=s("ul",null,[s("li",null,"レベル 1 ～ 3 の 3 つある"),s("li",null,"1 から順番に取り組んでもらう"),s("li",null,"16 時に解説する")],-1),N7={__name:"73",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[T7,M7]),_:1},16))}},L7=P(N7,[["__file","/@slidev/slides/73.md"]]),R7=s("h1",null,"課題（レベル 1）",-1),I7=s("p",null,[o("問題："),s("a",{href:"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue")],-1),V7=s("ol",null,[s("li",null,[o("useFetch を使って "),s("a",{href:"http://localhost:3000/data.json",target:"_blank",rel:"noopener"},"http://localhost:3000/data.json"),o(" から果物のリストを取得してください")]),s("li",null,[o("果物を順序なしリストで表示してください "),s("a",{href:"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul",target:"_blank",rel:"noopener"},"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul")])],-1),j7={__name:"74",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[R7,I7,V7]),_:1},16))}},H7=P(j7,[["__file","/@slidev/slides/74.md"]]),z7=s("h1",null,"課題（レベル 2）",-1),W7=s("p",null,[o("問題："),s("a",{href:"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue")],-1),U7=s("p",null,"コード上のコメントを読みながら、未完成のアプリを完成させてください",-1),q7={__name:"75",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[z7,W7,U7]),_:1},16))}},K7=P(q7,[["__file","/@slidev/slides/75.md"]]),J7=s("h1",null,"課題（レベル 3）",-1),Y7=s("p",null,[o("問題："),s("a",{href:"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue")],-1),Z7=s("p",null,"コード上のコメントを読みながら、未完成のアプリを完成させてください",-1),G7={__name:"76",setup(e){const l={};return b(S),(n,t)=>(A(),M(J,q(W(l)),{default:C(()=>[J7,Y7,Z7]),_:1},16))}},Q7=P(G7,[["__file","/@slidev/slides/76.md"]]),X7=[{path:"1",name:"page-1",component:AA,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
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
`,drawings:{persist:!1},title:"Vue.js"},index:0,start:0,end:29,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:FA,meta:{slide:{raw:`
# アジェンダ

- はじめに
  - Composition API, 学習環境など
- リアクティブの探求
  - ref, reactive, toRefs, readonly など
- 算出プロパティ（computed）
  - computed
- ウォッチャ（watch）
  - watch
- テンプレート構文の説明
  - mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model など
- コンポーネント
  - props, emit, slot など
- Vue アプリケーション開発に必要な周辺ライブラリ
  - throttle-debounce, fetch, Vue Router など
`,title:"アジェンダ",level:1,content:`# アジェンダ

- はじめに
  - Composition API, 学習環境など
- リアクティブの探求
  - ref, reactive, toRefs, readonly など
- 算出プロパティ（computed）
  - computed
- ウォッチャ（watch）
  - watch
- テンプレート構文の説明
  - mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model など
- コンポーネント
  - props, emit, slot など
- Vue アプリケーション開発に必要な周辺ライブラリ
  - throttle-debounce, fetch, Vue Router など`,frontmatter:{},index:1,start:30,end:48,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:OA,meta:{slide:{raw:`
# はじめに

## Vue.js とは？

Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。

<div class="pt-4 text-sm">

<a href="https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
</div>
`,title:"はじめに",level:1,content:`# はじめに

## Vue.js とは？

Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。

<div class="pt-4 text-sm">

<a href="https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
</div>`,frontmatter:{},index:2,start:49,end:63,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:IA,meta:{slide:{raw:`
# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。
`,title:"本講座のすすめかた",level:1,content:`# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。`,frontmatter:{},index:3,start:64,end:73,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:JA,meta:{slide:{raw:`
# 準備

使用するツールの確認とセットアップ

本講座におけるハンズオン、演習、サンプルの閲覧は [StackBlitz](https://stackblitz.com/) でおこないます。

StackBlitz はブラウザ上で動作するオンライン IDE（統合開発環境）です。

以下をやってみましょう

1. 動作環境を[こちら](https://developer.stackblitz.com/docs/platform/browser-support/)で確認してブラウザを用意
2. 用意したブラウザで https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev にアクセス
3. \`<template>Hello World!</template>\` と書いてみる
4. 右カラムに \`Hello World!\` と表示されることを確認

講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。
`,title:"準備",level:1,content:`# 準備

使用するツールの確認とセットアップ

本講座におけるハンズオン、演習、サンプルの閲覧は [StackBlitz](https://stackblitz.com/) でおこないます。

StackBlitz はブラウザ上で動作するオンライン IDE（統合開発環境）です。

以下をやってみましょう

1. 動作環境を[こちら](https://developer.stackblitz.com/docs/platform/browser-support/)で確認してブラウザを用意
2. 用意したブラウザで https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev にアクセス
3. \`<template>Hello World!</template>\` と書いてみる
4. 右カラムに \`Hello World!\` と表示されることを確認

講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。`,frontmatter:{},index:4,start:74,end:92,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:h9,meta:{slide:{raw:`
# Vue には 2 つの API があります

<div class="flex gap-8">

<div>
Options API

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
Composition API

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

現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。
`,title:"Vue には 2 つの API があります",level:1,content:`# Vue には 2 つの API があります

<div class="flex gap-8">

<div>
Options API

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
Composition API

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

現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。`,frontmatter:{},index:5,start:93,end:145,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:g9,meta:{slide:{raw:`
# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />
`,title:"Composition API のメリット",level:1,content:`# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />`,frontmatter:{},index:6,start:146,end:153,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:$9,meta:{slide:{raw:`
# Vue には様々なシンタックスシュガー（糖衣構文）があります

<div class="flex gap-8">

<div>
script

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
<div>
script setup

\`\`\`vue
<script setup>
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value += 1;
}
<\/script>
\`\`\`

</div>
</div>

現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。
`,title:"Vue には様々なシンタックスシュガー（糖衣構文）があります",level:1,content:`# Vue には様々なシンタックスシュガー（糖衣構文）があります

<div class="flex gap-8">

<div>
script

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
<div>
script setup

\`\`\`vue
<script setup>
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value += 1;
}
<\/script>
\`\`\`

</div>
</div>

現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。`,frontmatter:{},index:7,start:154,end:200,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:I9,meta:{slide:{raw:`
# まずは書いてみる

<div class="flex gap-8">

\`\`\`vue
<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value += 1;
}
<\/script>
\`\`\`

<div>
動作サンプル
<FirstSample />
</div>

</div>
`,title:"まずは書いてみる",level:1,content:`# まずは書いてみる

<div class="flex gap-8">

\`\`\`vue
<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value += 1;
}
<\/script>
\`\`\`

<div>
動作サンプル
<FirstSample />
</div>

</div>`,frontmatter:{},index:8,start:201,end:231,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:q9,meta:{slide:{raw:`
# リアクティブの探求

<div class="flex gap-4">

<div>
<video controls loop style="height: 30vh" src="https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"></video>

<a href="https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B">参考</a>

</div>

<div>

表計算ソフトと同じ手順をコードにすると

\`\`\`js
let val1 = 2;
let val2 = 3;
let sum = val1 + val2;

console.log(sum); // 5

val1 = 3;

console.log(sum); // 5のまま（期待は6）
\`\`\`

</div>

</div>
`,title:"リアクティブの探求",level:1,content:`# リアクティブの探求

<div class="flex gap-4">

<div>
<video controls loop style="height: 30vh" src="https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"></video>

<a href="https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B">参考</a>

</div>

<div>

表計算ソフトと同じ手順をコードにすると

\`\`\`js
let val1 = 2;
let val2 = 3;
let sum = val1 + val2;

console.log(sum); // 5

val1 = 3;

console.log(sum); // 5のまま（期待は6）
\`\`\`

</div>

</div>`,frontmatter:{},index:9,start:232,end:264,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Q9,meta:{slide:{raw:`
# リアクティブの探求

<div class="flex gap-4">

<div>

表計算ソフトと同じことをおこなうには

1. 値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。
2. 値の変更を検知する。 例: val1 = 3 と入れるとき。
3. 最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。

Vue には 1\\. 2\\. 3\\. のためのしくみがある

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
`,title:"リアクティブの探求",level:1,content:`# リアクティブの探求

<div class="flex gap-4">

<div>

表計算ソフトと同じことをおこなうには

1. 値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。
2. 値の変更を検知する。 例: val1 = 3 と入れるとき。
3. 最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。

Vue には 1\\. 2\\. 3\\. のためのしくみがある

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

</div>`,frontmatter:{},index:10,start:265,end:300,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:p_,meta:{slide:{raw:`
# リアクティブの探求（ref によるリアクティブな値の参照）

\`ref\` を使った値を操作する場合、\`setup\` 関数内では \`value\` プロパティにアクセスする。
\`template\` 内では変数（定数）そのものを参照するだけで値を得られる。

<div class="flex gap-8">

\`\`\`vue
<script setup>
import { ref, computed } from "vue";

const val1 = ref(2);
const val2 = ref(3);
const sum = computed(() => {
  return val1.value + val2.value;
});
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
`,title:"リアクティブの探求（ref によるリアクティブな値の参照）",level:1,content:`# リアクティブの探求（ref によるリアクティブな値の参照）

\`ref\` を使った値を操作する場合、\`setup\` 関数内では \`value\` プロパティにアクセスする。
\`template\` 内では変数（定数）そのものを参照するだけで値を得られる。

<div class="flex gap-8">

\`\`\`vue
<script setup>
import { ref, computed } from "vue";

const val1 = ref(2);
const val2 = ref(3);
const sum = computed(() => {
  return val1.value + val2.value;
});
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

</div>`,frontmatter:{},index:11,start:301,end:341,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:f_,meta:{slide:{raw:`
# リアクティブの探求（リアクティブな値をオブジェクトにまとめる）

リアクティブにしたいデータがオブジェクトの場合、\`reactive\` を使う

\`\`\`vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    {{ user.name }}
  </div>
</template>

<script setup>
import { reactive } from "vue";

const user = reactive({
  name: "",
});
<\/script>
\`\`\`
`,title:"リアクティブの探求（リアクティブな値をオブジェクトにまとめる）",level:1,content:`# リアクティブの探求（リアクティブな値をオブジェクトにまとめる）

リアクティブにしたいデータがオブジェクトの場合、\`reactive\` を使う

\`\`\`vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    {{ user.name }}
  </div>
</template>

<script setup>
import { reactive } from "vue";

const user = reactive({
  name: "",
});
<\/script>
\`\`\``,frontmatter:{},index:12,start:342,end:364,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:A_,meta:{slide:{raw:`
# リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）

前項の \`reactive\` だと、分割代入しても値が取り出せない。Vue では \`toRefs\` を使うことで可能になる。

\`\`\`vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";

const user = reactive({
  name: "",
});
const { name } = toRefs(user);
<\/script>
\`\`\`
`,title:"リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）",level:1,content:`# リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）

前項の \`reactive\` だと、分割代入しても値が取り出せない。Vue では \`toRefs\` を使うことで可能になる。

\`\`\`vue
<template>
  <div>
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";

const user = reactive({
  name: "",
});
const { name } = toRefs(user);
<\/script>
\`\`\``,frontmatter:{},index:13,start:365,end:389,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:D_,meta:{slide:{raw:`
# リアクティブの探求（リアクティブな値を読み込み専用にする）

\`\`\`vue
<template>
  <div>
    <!-- user.name を変更しようとすると失敗し、警告が表示されます -->
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>

<script setup>
import { reactive, toRefs, readonly } from "vue";

const user = readonly(
  reactive({
    name: "",
  })
);
const { name } = toRefs(user);
<\/script>
\`\`\`
`,title:"リアクティブの探求（リアクティブな値を読み込み専用にする）",level:1,content:`# リアクティブの探求（リアクティブな値を読み込み専用にする）

\`\`\`vue
<template>
  <div>
    <!-- user.name を変更しようとすると失敗し、警告が表示されます -->
    <input type="text" v-model="user.name" />
    <p>user.name: {{ user.name }}</p>
    <p>name: {{ name }}</p>
  </div>
</template>

<script setup>
import { reactive, toRefs, readonly } from "vue";

const user = readonly(
  reactive({
    name: "",
  })
);
const { name } = toRefs(user);
<\/script>
\`\`\``,frontmatter:{},index:14,start:390,end:415,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:b_,meta:{slide:{raw:`
# 算出プロパティ（computed）

あるリアクティブな値を元に計算結果を返したい場合、\`computed\` 関数を利用する

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const plusOne = computed(() => count.value + 1);
<\/script>
\`\`\`
`,title:"算出プロパティ（computed）",level:1,content:`# 算出プロパティ（computed）

あるリアクティブな値を元に計算結果を返したい場合、\`computed\` 関数を利用する

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const plusOne = computed(() => count.value + 1);
<\/script>
\`\`\``,frontmatter:{},index:15,start:416,end:437,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:T_,meta:{slide:{raw:`
# 算出プロパティ（computed）

\`get\` \`set\` 関数を用意することで書込み可能なオブジェクトを作成することができる

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    <button @click="handleClick">リセット</button>
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const plusOne = computed({
  get: () => count.value + 1,
  set: (value) => {
    count.value = value;
  },
});
function handleClick() {
  plusOne.value = 1;
}
<\/script>
\`\`\`

</div>
`,title:"算出プロパティ（computed）",level:1,content:`# 算出プロパティ（computed）

\`get\` \`set\` 関数を用意することで書込み可能なオブジェクトを作成することができる

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    <button @click="handleClick">リセット</button>
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const plusOne = computed({
  get: () => count.value + 1,
  set: (value) => {
    count.value = value;
  },
});
function handleClick() {
  plusOne.value = 1;
}
<\/script>
\`\`\`

</div>`,frontmatter:{},index:16,start:438,end:472,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:J_,meta:{slide:{raw:`
# computed と関数呼び出しの違い

関数呼び出しは都度呼び出される毎に実行するのに対し、\`computed\` 内で参照しているリアクティブな値が変更されない限り、\`computed\` は一度キャッシュされた結果を返す。
うまく使い分けるとパフォーマンスの向上に役立てる。

<div class="flex gap-4">

\`\`\`vue
<template>
  <p>関数呼び出しの場合</p>
  <ol class="use-methods">
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
  </ol>
  <p>computedを使った場合</p>
  <ol class="use-computed">
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
  </ol>
</template>
\`\`\`

\`\`\`vue
<script setup>
import { computed } from "vue";

const randomMethods = () => {
  return Math.random();
};
const randomComputed = computed(() => {
  return Math.random();
});
<\/script>
\`\`\`

<div>
  <ComputedMethods />
</div>

</div>
`,title:"computed と関数呼び出しの違い",level:1,content:`# computed と関数呼び出しの違い

関数呼び出しは都度呼び出される毎に実行するのに対し、\`computed\` 内で参照しているリアクティブな値が変更されない限り、\`computed\` は一度キャッシュされた結果を返す。
うまく使い分けるとパフォーマンスの向上に役立てる。

<div class="flex gap-4">

\`\`\`vue
<template>
  <p>関数呼び出しの場合</p>
  <ol class="use-methods">
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
    <li>{{ randomMethods() }}</li>
  </ol>
  <p>computedを使った場合</p>
  <ol class="use-computed">
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
    <li>{{ randomComputed }}</li>
  </ol>
</template>
\`\`\`

\`\`\`vue
<script setup>
import { computed } from "vue";

const randomMethods = () => {
  return Math.random();
};
const randomComputed = computed(() => {
  return Math.random();
});
<\/script>
\`\`\`

<div>
  <ComputedMethods />
</div>

</div>`,frontmatter:{},index:17,start:473,end:517,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:s1,meta:{slide:{raw:`
# ウォッチャ（watch）

特定のデータを監視し、変更があったときに処理を行える、引数として、新しい値とその前の値を取得できる。

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

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
<\/script>
\`\`\`

</div>
`,title:"ウォッチャ（watch）",level:1,content:`# ウォッチャ（watch）

特定のデータを監視し、変更があったときに処理を行える、引数として、新しい値とその前の値を取得できる。

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

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
<\/script>
\`\`\`

</div>`,frontmatter:{},index:18,start:518,end:551,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:a1,meta:{slide:{raw:`
# ウォッチャ（watch）

配列を監視する場合、複数のデータソースを同時に監視できる

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

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
<\/script>
\`\`\`

</div>
`,title:"ウォッチャ（watch）",level:1,content:`# ウォッチャ（watch）

配列を監視する場合、複数のデータソースを同時に監視できる

<div class="h-sm overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <input type="number" v-model="count" />
    {{ plusOne }}
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

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
<\/script>
\`\`\`

</div>`,frontmatter:{},index:19,start:552,end:585,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:i1,meta:{slide:{raw:`
# テンプレート構文

- 展開
- ディレクティブ
- バインディング
- イベントハンドリング
- 条件付きレンダリング
- リストレンダリング
- フォーム入力バインディング
`,title:"テンプレート構文",level:1,content:`# テンプレート構文

- 展開
- ディレクティブ
- バインディング
- イベントハンドリング
- 条件付きレンダリング
- リストレンダリング
- フォーム入力バインディング`,frontmatter:{},index:20,start:586,end:597,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:B1,meta:{slide:{raw:`
# 展開

Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる

\`\`\`vue
<template>
  <div>Message: {{ msg }}</div>
</template>

<script setup>
const msg = "Hello!";
<\/script>
\`\`\`

結果

\`\`\`
Message: Hello!
\`\`\`
`,title:"展開",level:1,content:`# 展開

Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる

\`\`\`vue
<template>
  <div>Message: {{ msg }}</div>
</template>

<script setup>
const msg = "Hello!";
<\/script>
\`\`\`

結果

\`\`\`
Message: Hello!
\`\`\``,frontmatter:{},index:21,start:598,end:619,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:F1,meta:{slide:{raw:`
# 展開（リアクティブな値を使うと）

<p class="text-sm">
counterを1秒ごとに増やしていく
</p>

\`\`\`vue
<template>
  <div>Counter: {{ counter }}</div>
</template>

<script>
import { ref } from "vue";

const counter = ref(10);
setInterval(() => {
  counter.value += 1;
}, 1000);
<\/script>
\`\`\`

結果

<div>
<CounterSample />
</div>
`,title:"展開（リアクティブな値を使うと）",level:1,content:`# 展開（リアクティブな値を使うと）

<p class="text-sm">
counterを1秒ごとに増やしていく
</p>

\`\`\`vue
<template>
  <div>Counter: {{ counter }}</div>
</template>

<script>
import { ref } from "vue";

const counter = ref(10);
setInterval(() => {
  counter.value += 1;
}, 1000);
<\/script>
\`\`\`

結果

<div>
<CounterSample />
</div>`,frontmatter:{},index:22,start:620,end:648,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:$1,meta:{slide:{raw:`
# ディレクティブ

- ディレクティブは Vue によって提供される特別な属性
- v- から始まる
- 特定のディレクティブ（v-bind と v-on）は省略記法がある（例：\`:href\` \`@click\`）
- 特定のディレクティブは引数を渡すことができる（例：\`v-on:click\`）

ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい
`,title:"ディレクティブ",level:1,content:`# ディレクティブ

- ディレクティブは Vue によって提供される特別な属性
- v- から始まる
- 特定のディレクティブ（v-bind と v-on）は省略記法がある（例：\`:href\` \`@click\`）
- 特定のディレクティブは引数を渡すことができる（例：\`v-on:click\`）

ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい`,frontmatter:{},index:23,start:649,end:659,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:L1,meta:{slide:{raw:`
# バインディング

「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 \`v-bind\` ディレクティブを使う

<div>

\`\`\`vue
<template>
  <a v-bind:href="url"> Vue.js公式サイト </a>
</template>

<script setup>
const url = "https://v3.ja.vuejs.org/";
<\/script>
\`\`\`

省略するとこのように書ける

</div>

\`\`\`html
<a :href="url"> Vue.js公式サイト </a>
\`\`\`
`,title:"バインディング",level:1,content:`# バインディング

「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 \`v-bind\` ディレクティブを使う

<div>

\`\`\`vue
<template>
  <a v-bind:href="url"> Vue.js公式サイト </a>
</template>

<script setup>
const url = "https://v3.ja.vuejs.org/";
<\/script>
\`\`\`

省略するとこのように書ける

</div>

\`\`\`html
<a :href="url"> Vue.js公式サイト </a>
\`\`\``,frontmatter:{},index:24,start:660,end:685,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Z1,meta:{slide:{raw:`
# バインディング（クラスとスタイル）

クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある

<div class="flex gap-6">

<div>

<p class="text-xs">オブジェクト構文</p>

\`\`\`vue
<template>
  <span :class="{ red: red }">Hello World!</span>
</template>

<script setup>
import { ref } from "vue";

const red = ref(true);
<\/script>

<style>
.red {
  color: red;
}
</style>
\`\`\`

</div>

<div>

<p class="text-xs">配列構文はこのように書ける</p>

\`\`\`html
<span :class="[red]">Hello World!</span>
\`\`\`

<p class="text-xs">組み合わせることもできる</p>

\`\`\`html
<span :class="[red, { red }]">Hello World!</span>
\`\`\`

<p class="text-xs">スタイル属性にもオブジェクト構文と配列構文がある</p>

\`\`\`vue
<template>
  <span :style="{ color: 'red' }">Hello World!</span>
</template>
\`\`\`

</div>

</div>
`,title:"バインディング（クラスとスタイル）",level:1,content:`# バインディング（クラスとスタイル）

クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある

<div class="flex gap-6">

<div>

<p class="text-xs">オブジェクト構文</p>

\`\`\`vue
<template>
  <span :class="{ red: red }">Hello World!</span>
</template>

<script setup>
import { ref } from "vue";

const red = ref(true);
<\/script>

<style>
.red {
  color: red;
}
</style>
\`\`\`

</div>

<div>

<p class="text-xs">配列構文はこのように書ける</p>

\`\`\`html
<span :class="[red]">Hello World!</span>
\`\`\`

<p class="text-xs">組み合わせることもできる</p>

\`\`\`html
<span :class="[red, { red }]">Hello World!</span>
\`\`\`

<p class="text-xs">スタイル属性にもオブジェクト構文と配列構文がある</p>

\`\`\`vue
<template>
  <span :style="{ color: 'red' }">Hello World!</span>
</template>
\`\`\`

</div>

</div>`,frontmatter:{},index:25,start:686,end:743,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:og,meta:{slide:{raw:`
# イベントハンドリング

\`v-on\` ディレクティブは HTML 要素などの[イベント](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events)操作に使われる。\`:\`の後の引数でイベントの種類を指定できる

<div class="h-60 mb-6 overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
<\/script>
\`\`\`

</div>

省略するとこのようにかける

\`\`\`html
<button @click="counter += 1">Add 1</button>
\`\`\`
`,title:"イベントハンドリング",level:1,content:`# イベントハンドリング

\`v-on\` ディレクティブは HTML 要素などの[イベント](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events)操作に使われる。\`:\`の後の引数でイベントの種類を指定できる

<div class="h-60 mb-6 overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
<\/script>
\`\`\`

</div>

省略するとこのようにかける

\`\`\`html
<button @click="counter += 1">Add 1</button>
\`\`\``,frontmatter:{},index:26,start:744,end:774,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:pg,meta:{slide:{raw:`
# イベントハンドリング（関数名を属性値として使う）

関数を渡すと複雑な処理が書きやすい

\`\`\`vue
<template>
  <div>
    <button @click="increment">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
function increment() {
  counter.value += 1;
}
<\/script>
\`\`\`
`,title:"イベントハンドリング（関数名を属性値として使う）",level:1,content:`# イベントハンドリング（関数名を属性値として使う）

関数を渡すと複雑な処理が書きやすい

\`\`\`vue
<template>
  <div>
    <button @click="increment">Add 1</button>
    <p>clicked {{ counter }} times.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
function increment() {
  counter.value += 1;
}
<\/script>
\`\`\``,frontmatter:{},index:27,start:775,end:798,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Cg,meta:{slide:{raw:`
# 条件付きレンダリング

\`v-if\` あるいは \`v-show\` によって条件に応じてレンダリングする範囲を変更することができる。 \`v-show\` は見た目上非表示にするが \`v-if\` は DOM 要素も取り除く。

\`\`\`vue {all|3|8|all}
<template>
  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script setup>
const seen = true;
<\/script>
\`\`\`

<arrow v-click="2" x1="350" y1="370" x2="190" y2="310" color="#564" width="3" arrowSize="1" />
`,title:"条件付きレンダリング",level:1,content:`# 条件付きレンダリング

\`v-if\` あるいは \`v-show\` によって条件に応じてレンダリングする範囲を変更することができる。 \`v-show\` は見た目上非表示にするが \`v-if\` は DOM 要素も取り除く。

\`\`\`vue {all|3|8|all}
<template>
  <div id="conditional-rendering">
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script setup>
const seen = true;
<\/script>
\`\`\`

<arrow v-click="2" x1="350" y1="370" x2="190" y2="310" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:28,start:799,end:818,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:xg,meta:{slide:{raw:`
# 条件付きレンダリング（v-if と v-show の使い分け）

<div class="mb-6">

|                | v-if | v-show |
| :------------- | :--- | :----- |
| 初期コスト     | 低い | 高い   |
| 切り替えコスト | 高い | 低い   |

</div>

- コンポーネントをマウントしてからあまり変化しないケースであれば \`v-if\`を使う
- コンポーネントをマウントしてから頻繁に変化するケースであれば \`v-show\`を使う
`,title:"条件付きレンダリング（v-if と v-show の使い分け）",level:1,content:`# 条件付きレンダリング（v-if と v-show の使い分け）

<div class="mb-6">

|                | v-if | v-show |
| :------------- | :--- | :----- |
| 初期コスト     | 低い | 高い   |
| 切り替えコスト | 高い | 低い   |

</div>

- コンポーネントをマウントしてからあまり変化しないケースであれば \`v-if\`を使う
- コンポーネントをマウントしてから頻繁に変化するケースであれば \`v-show\`を使う`,frontmatter:{},index:29,start:819,end:834,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Tg,meta:{slide:{raw:`
# 条件付きレンダリング

\`v-if v-else v-else-if\` でレンダリングの条件分岐ができる。 \`template\` 要素に対して使うことでグルーピングすることもできる。

<div class="flex gap-4">

\`\`\`vue
<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>

<script setup>
const type = "A";
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

<script setup>
const ok = true;
<\/script>
\`\`\`

</div>
`,title:"条件付きレンダリング",level:1,content:`# 条件付きレンダリング

\`v-if v-else v-else-if\` でレンダリングの条件分岐ができる。 \`template\` 要素に対して使うことでグルーピングすることもできる。

<div class="flex gap-4">

\`\`\`vue
<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>

<script setup>
const type = "A";
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

<script setup>
const ok = true;
<\/script>
\`\`\`

</div>`,frontmatter:{},index:30,start:835,end:871,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:jg,meta:{slide:{raw:`
# リストレンダリング

配列あるいはオブジェクトをもとに反復した要素の表示ができる。

<div class="flex gap-8">

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

<script setup>
const todos = [
  { text: "Learn JavaScript" },
  { text: "Learn Vue" },
  { text: "Build something awesome" },
];
<\/script>
\`\`\`

  <div class="flex-shrink">
    <p>結果</p>
    <ol>
      <li>Learn JavaScript</li>
      <li>Learn Vue</li>
      <li>Build something awesome</li>
    </ol>

  </div>

</div>
`,title:"リストレンダリング",level:1,content:`# リストレンダリング

配列あるいはオブジェクトをもとに反復した要素の表示ができる。

<div class="flex gap-8">

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

<script setup>
const todos = [
  { text: "Learn JavaScript" },
  { text: "Learn Vue" },
  { text: "Build something awesome" },
];
<\/script>
\`\`\`

  <div class="flex-shrink">
    <p>結果</p>
    <ol>
      <li>Learn JavaScript</li>
      <li>Learn Vue</li>
      <li>Build something awesome</li>
    </ol>

  </div>

</div>`,frontmatter:{},index:31,start:872,end:911,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Jg,meta:{slide:{raw:`
# リストレンダリング（\`key\` 属性の付与）

要素の再利用と並び替えを考慮する場合、一意な値を \`key\` 属性に渡す必要がある。

<div class="flex gap-8">

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

<script setup>
const todos = [
  { text: "Learn JavaScript", id: 1 },
  { text: "Learn Vue", id: 2 },
  { text: "Build something awesome", id: 3 },
];
<\/script>
\`\`\`

<div class="flex-shrink">
  <p>結果</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>
</div>

</div>
`,title:"リストレンダリング（`key` 属性の付与）",level:1,content:`# リストレンダリング（\`key\` 属性の付与）

要素の再利用と並び替えを考慮する場合、一意な値を \`key\` 属性に渡す必要がある。

<div class="flex gap-8">

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

<script setup>
const todos = [
  { text: "Learn JavaScript", id: 1 },
  { text: "Learn Vue", id: 2 },
  { text: "Build something awesome", id: 3 },
];
<\/script>
\`\`\`

<div class="flex-shrink">
  <p>結果</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>
</div>

</div>`,frontmatter:{},index:32,start:912,end:950,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:eC,meta:{slide:{raw:`
# リストレンダリング（添字による \`key\` 属性の付与）

識別子を用意していない場合、添字が得られるので代用すると便利。

<div class="flex gap-8">

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

<script setup>
const todos = [
  { text: "Learn JavaScript" },
  { text: "Learn Vue" },
  { text: "Build something awesome" },
];
<\/script>
\`\`\`

<div class="flex-shrink w-110">
  <p>結果</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>

ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意

</div>

</div>
`,title:"リストレンダリング（添字による `key` 属性の付与）",level:1,content:`# リストレンダリング（添字による \`key\` 属性の付与）

識別子を用意していない場合、添字が得られるので代用すると便利。

<div class="flex gap-8">

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

<script setup>
const todos = [
  { text: "Learn JavaScript" },
  { text: "Learn Vue" },
  { text: "Build something awesome" },
];
<\/script>
\`\`\`

<div class="flex-shrink w-110">
  <p>結果</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>

ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意

</div>

</div>`,frontmatter:{},index:33,start:951,end:992,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:iC,meta:{slide:{raw:`
# フォーム入力バインディング

\`v-model\` によって form の input 要素や textarea 要素、select 要素の入力イベントに応じてデータを更新できるようになる。

<div class="flex gap-8">

\`\`\`vue
<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello Vue!");
<\/script>
\`\`\`

<div>
  <TwoWayBindingSample/>
</div>

</div>
`,title:"フォーム入力バインディング",level:1,content:`# フォーム入力バインディング

\`v-model\` によって form の input 要素や textarea 要素、select 要素の入力イベントに応じてデータを更新できるようになる。

<div class="flex gap-8">

\`\`\`vue
<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello Vue!");
<\/script>
\`\`\`

<div>
  <TwoWayBindingSample/>
</div>

</div>`,frontmatter:{},index:34,start:993,end:1021,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:fC,meta:{slide:{raw:`
# コンポーネント

- コンポーネントの基本と構成
- プロパティを用いた子コンポーネントへのデータの受け渡し
- イベント購読を用いた親コンポーネントへのデータの受け渡し
- v-model を用いた親子間コンポーネントのデータの受け渡し
- v-model を用いない親子間コンポーネントのデータの受け渡し
- コンポーネントで v-model を使う
- スロットによるコンテンツ配信
`,title:"コンポーネント",level:1,content:`# コンポーネント

- コンポーネントの基本と構成
- プロパティを用いた子コンポーネントへのデータの受け渡し
- イベント購読を用いた親コンポーネントへのデータの受け渡し
- v-model を用いた親子間コンポーネントのデータの受け渡し
- v-model を用いない親子間コンポーネントのデータの受け渡し
- コンポーネントで v-model を使う
- スロットによるコンテンツ配信`,frontmatter:{},index:35,start:1022,end:1033,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:_C,meta:{slide:{raw:`
# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />
`,title:"コンポーネントの基本と構成",level:1,content:`# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />`,frontmatter:{},index:36,start:1034,end:1041,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:wC,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

親コンポーネントから子コンポーネントに 文字列 を渡してみる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent title="Hello!" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>{{ message }}</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
});
const message = ref(props.title);
<\/script>
\`\`\`

</div>

</div>
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

親コンポーネントから子コンポーネントに 文字列 を渡してみる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent title="Hello!" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>{{ message }}</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
});
const message = ref(props.title);
<\/script>
\`\`\`

</div>

</div>`,frontmatter:{},index:37,start:1042,end:1088,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:IC,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue {all|2|all}
<template>
  <ChildComponent :count="14" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

<p class="text-xs">静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります</p>

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>{{ message }}</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  count: Number,
});
const message = ref(props.count);
<\/script>
\`\`\`

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue {all|2|all}
<template>
  <ChildComponent :count="14" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

<p class="text-xs">静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります</p>

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>{{ message }}</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  count: Number,
});
const message = ref(props.count);
<\/script>
\`\`\`

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:38,start:1089,end:1139,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:JC,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue {all|2|all}
<template>
  <ChildComponent :is-show="false" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isShow: Boolean,
});
const show = ref(props.isShow);
<\/script>
\`\`\`

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue {all|2|all}
<template>
  <ChildComponent :is-show="false" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isShow: Boolean,
});
const show = ref(props.isShow);
<\/script>
\`\`\`

</div>

</div>

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:39,start:1140,end:1188,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:nD,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

props はデフォルト値を設定することもできる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent :is-show="false" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue {all|9-12|all}
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true,
  },
});
const show = ref(props.isShow);
<\/script>
\`\`\`

</div>

</div>
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

props はデフォルト値を設定することもできる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent :is-show="false" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue {all|9-12|all}
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true,
  },
});
const show = ref(props.isShow);
<\/script>
\`\`\`

</div>

</div>`,frontmatter:{},index:40,start:1189,end:1238,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:uD,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent :student="{ name: 'taro', old: '16' }" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>こんにちは、{{ user.name }}さん、{{ user.old }}歳になりましたね</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  student: Object,
});
const user = ref(props.student);
<\/script>
\`\`\`

</div>

</div>
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent :student="{ name: 'taro', old: '16' }" />
</template>

<script setup>
import ChildComponent from "./components/ChildComponent.vue";
<\/script>
\`\`\`

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>こんにちは、{{ user.name }}さん、{{ user.old }}歳になりましたね</p>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  student: Object,
});
const user = ref(props.student);
<\/script>
\`\`\`

</div>

</div>`,frontmatter:{},index:41,start:1239,end:1285,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:wD,meta:{slide:{raw:`
# イベント購読を用いた親コンポーネントへのデータの受け渡し

子コンポーネントでイベントを発火させることによって可能

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent @child-clicked="clicked" />
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";

function clicked(message) {
  alert(message);
}
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <button @click="clickHandler">emit !</button>
</template>

<script setup>
const emit = defineEmits(["child-clicked"]);
function clickHandler() {
  emit("child-clicked", "Hello!");
}
<\/script>
\`\`\`

</div>

<div class="flex-shrink-0">
<p class="text-xs">実行サンプル</p>
<EmitParent />
</div>

</div>
`,title:"イベント購読を用いた親コンポーネントへのデータの受け渡し",level:1,content:`# イベント購読を用いた親コンポーネントへのデータの受け渡し

子コンポーネントでイベントを発火させることによって可能

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent @child-clicked="clicked" />
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";

function clicked(message) {
  alert(message);
}
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <button @click="clickHandler">emit !</button>
</template>

<script setup>
const emit = defineEmits(["child-clicked"]);
function clickHandler() {
  emit("child-clicked", "Hello!");
}
<\/script>
\`\`\`

</div>

<div class="flex-shrink-0">
<p class="text-xs">実行サンプル</p>
<EmitParent />
</div>

</div>`,frontmatter:{},index:42,start:1286,end:1339,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:KD,meta:{slide:{raw:`
# v-model を用いた親子間コンポーネントのデータの受け渡し

親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent v-model="title" />
  <p>{{ title }}</p>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const title = ref("Hello !");
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<template>
  <input v-model="title" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const title = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
<\/script>
\`\`\`

</div>

</div>

<div class="flex-shrink-0">
<p class="text-xs">実行サンプル</p>

<TwowayParent />

</div>

</div>
`,title:"v-model を用いた親子間コンポーネントのデータの受け渡し",level:1,content:`# v-model を用いた親子間コンポーネントのデータの受け渡し

親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent v-model="title" />
  <p>{{ title }}</p>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const title = ref("Hello !");
<\/script>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<template>
  <input v-model="title" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const title = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
<\/script>
\`\`\`

</div>

</div>

<div class="flex-shrink-0">
<p class="text-xs">実行サンプル</p>

<TwowayParent />

</div>

</div>`,frontmatter:{},index:43,start:1340,end:1407,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:l4,meta:{slide:{raw:`
# v-model を用いない親子間コンポーネントのデータの受け渡し

親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent @update:modelValue="title = $event" :modelValue="title" />
  <p>{{ title }}</p>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const title = ref("Hello !");
<\/script>
\`\`\`

</div>

- v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）
- 親 → 子：プロパティ
- 子 → 親：イベント
- このような状態が双方向バインディング（値を束縛しあっている）

</div>
`,title:"v-model を用いない親子間コンポーネントのデータの受け渡し",level:1,content:`# v-model を用いない親子間コンポーネントのデータの受け渡し

親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent @update:modelValue="title = $event" :modelValue="title" />
  <p>{{ title }}</p>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const title = ref("Hello !");
<\/script>
\`\`\`

</div>

- v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）
- 親 → 子：プロパティ
- 子 → 親：イベント
- このような状態が双方向バインディング（値を束縛しあっている）

</div>`,frontmatter:{},index:44,start:1408,end:1442,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:f4,meta:{slide:{raw:`
# スロットによるコンテンツ配信

slot を使うと、HTML 要素のようにコンポーネントに子要素を渡すことができる

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent>Hello Component</ChildComponent>
</template>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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
<p class="text-xs">結果例</p>
<strong>ChildComponent: </strong>Hello Component
</div>
`,title:"スロットによるコンテンツ配信",level:1,content:`# スロットによるコンテンツ配信

slot を使うと、HTML 要素のようにコンポーネントに子要素を渡すことができる

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

\`\`\`vue
<template>
  <ChildComponent>Hello Component</ChildComponent>
</template>
\`\`\`

</div>

<div class="flex-shrink">

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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
<p class="text-xs">結果例</p>
<strong>ChildComponent: </strong>Hello Component
</div>`,frontmatter:{},index:45,start:1443,end:1483,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:F4,meta:{slide:{raw:`
# Vue の基本的な書き方はこれで以上！

おつかれさまでした

以下を学んできた

- リアクティブな値の作り方
- テンプレートの書き方
- コンポーネントの作り方

ここまでは Vue.js を使うなら必ず知っている必要がある内容

引き続き知らない機能がコードに出てくるかもしれないが、学んだことと関連していると感じられたらそれでよい

学習の目安

- 理解していること
- 書けること

自信がない箇所は復習・質問しましょう！
`,title:"Vue の基本的な書き方はこれで以上！",level:1,content:`# Vue の基本的な書き方はこれで以上！

おつかれさまでした

以下を学んできた

- リアクティブな値の作り方
- テンプレートの書き方
- コンポーネントの作り方

ここまでは Vue.js を使うなら必ず知っている必要がある内容

引き続き知らない機能がコードに出てくるかもしれないが、学んだことと関連していると感じられたらそれでよい

学習の目安

- 理解していること
- 書けること

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:46,start:1484,end:1506,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:$4,meta:{slide:{raw:`
# 次のステップは？

これから学ぶ内容の確認

- より具体的な題材でコードを読む・書く
  - グリッドコンポーネント
    - これまで学んだ内容を組み合わせた少し複雑な実装
  - Markdown エディター
    - throttle-debounce によるイベント処理の間引き
  - ツクロアデザインラボの記事ビューアー
    - Fetch API による JSON データの取得
    - Vue Router による画面遷移
  - 靴のギャラリー
    - 画像の取得と表示
    - あらかじめ用意されたスタイルの適用
- Nuxt 3 を使う
  - Vue.js 単体を使う場合との違い
  - useFetch などの Nuxt 3 特有のヘルパー関数の使い方
`,title:"次のステップは？",level:1,content:`# 次のステップは？

これから学ぶ内容の確認

- より具体的な題材でコードを読む・書く
  - グリッドコンポーネント
    - これまで学んだ内容を組み合わせた少し複雑な実装
  - Markdown エディター
    - throttle-debounce によるイベント処理の間引き
  - ツクロアデザインラボの記事ビューアー
    - Fetch API による JSON データの取得
    - Vue Router による画面遷移
  - 靴のギャラリー
    - 画像の取得と表示
    - あらかじめ用意されたスタイルの適用
- Nuxt 3 を使う
  - Vue.js 単体を使う場合との違い
  - useFetch などの Nuxt 3 特有のヘルパー関数の使い方`,frontmatter:{},index:47,start:1507,end:1527,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:M4,meta:{slide:{raw:`
# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）
`,title:"グリッドコンポーネント",level:1,content:`# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）`,frontmatter:{},index:48,start:1528,end:1537,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:q4,meta:{slide:{raw:`
# イベント処理の間引き

throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる

<div class="flex gap-8">

<div class="flex-shrink">

\`\`\`vue
<script setup>
import { debounce } from "throttle-debounce";
import { ref } from "vue";

const message = ref("");
const originalFruits = [
  "orange",
  "banana",
  "strawberry",
  "grape",
  "watermelon",
];
const fruits = ref(originalFruits);
function filterFruits() {
  fruits.value = originalFruits.filter(
    (fruit) => fruit.indexOf(message.value) >= 0
  );
}
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

次のように書き換えると…？

\`\`\`js
const filterFruits = debounce(1000, () => {
  fruits.value = originalFruits.filter(
    (fruit) => fruit.indexOf(message.value) >= 0
  );
});
\`\`\`

</div>
</div>
`,title:"イベント処理の間引き",level:1,content:`# イベント処理の間引き

throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる

<div class="flex gap-8">

<div class="flex-shrink">

\`\`\`vue
<script setup>
import { debounce } from "throttle-debounce";
import { ref } from "vue";

const message = ref("");
const originalFruits = [
  "orange",
  "banana",
  "strawberry",
  "grape",
  "watermelon",
];
const fruits = ref(originalFruits);
function filterFruits() {
  fruits.value = originalFruits.filter(
    (fruit) => fruit.indexOf(message.value) >= 0
  );
}
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

次のように書き換えると…？

\`\`\`js
const filterFruits = debounce(1000, () => {
  fruits.value = originalFruits.filter(
    (fruit) => fruit.indexOf(message.value) >= 0
  );
});
\`\`\`

</div>
</div>`,frontmatter:{},index:49,start:1538,end:1597,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:G4,meta:{slide:{raw:`
# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）
`,title:"Markdown エディター",level:1,content:`# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）`,frontmatter:{},index:50,start:1598,end:1607,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:l6,meta:{slide:{raw:`
# デザインラボの記事ビューアー

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev

1. どんなアプリか：[デザインラボ](https://design-lab.tuqulore.com/)というサイトと同じ記事データ（JSON）を取得して一覧から選択表示できる
2. コードの説明（App コンポーネント、PostList コンポーネント）
3. Vue Router を導入しよう（20 分程度）
   - Vue プラグインとして Vue アプリケーションインスタンスに登録
   - 画面が切り替わるようコンポーネントへの差し替え
   - 画面遷移を補足できるコンポーネントへの差し替え
4. コードの説明（PostDetail コンポーネント）
`,title:"デザインラボの記事ビューアー",level:1,content:`# デザインラボの記事ビューアー

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev

1. どんなアプリか：[デザインラボ](https://design-lab.tuqulore.com/)というサイトと同じ記事データ（JSON）を取得して一覧から選択表示できる
2. コードの説明（App コンポーネント、PostList コンポーネント）
3. Vue Router を導入しよう（20 分程度）
   - Vue プラグインとして Vue アプリケーションインスタンスに登録
   - 画面が切り替わるようコンポーネントへの差し替え
   - 画面遷移を補足できるコンポーネントへの差し替え
4. コードの説明（PostDetail コンポーネント）`,frontmatter:{},index:51,start:1608,end:1621,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:p6,meta:{slide:{raw:`
# 靴のギャラリー

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev

1. どんなアプリか：靴のデータ（JSON）を取得してショッピングサイトらしい見た目で一覧表示できる
2. JSON から靴のデータを取得しよう（10 分程度）
3. 取得した靴のデータをあらかじめ用意されたスタイルで表示しよう（20 分程度）

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">
`,title:"靴のギャラリー",level:1,content:`# 靴のギャラリー

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev

1. どんなアプリか：靴のデータ（JSON）を取得してショッピングサイトらしい見た目で一覧表示できる
2. JSON から靴のデータを取得しよう（10 分程度）
3. 取得した靴のデータをあらかじめ用意されたスタイルで表示しよう（20 分程度）

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">`,frontmatter:{},index:52,start:1622,end:1633,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:h6,meta:{slide:{raw:`
# Nuxt 3

https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt

効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）

1. リアクティビティと Web コンポーネントの提供：[Vue.js](https://vuejs.org/)
2. 開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング：[webpack 5](https://webpack.js.org/) と [Vite](https://vitejs.dev/)
3. レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける：[esbuild](https://esbuild.github.io/)
4. 開発サーバー、サーバーサイドレンダリング、API サーバーの提供：[h3](https://github.com/unjs/h3)
5. ルーティング（画面遷移処理）：[vue-router](https://router.vuejs.org/)
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt

効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）

1. リアクティビティと Web コンポーネントの提供：[Vue.js](https://vuejs.org/)
2. 開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング：[webpack 5](https://webpack.js.org/) と [Vite](https://vitejs.dev/)
3. レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける：[esbuild](https://esbuild.github.io/)
4. 開発サーバー、サーバーサイドレンダリング、API サーバーの提供：[h3](https://github.com/unjs/h3)
5. ルーティング（画面遷移処理）：[vue-router](https://router.vuejs.org/)`,frontmatter:{},index:53,start:1634,end:1647,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:A6,meta:{slide:{raw:`
# Nuxt 3

- Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）
- Vue コンポーネント等の import を省略できる
- pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）
- server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）
- Nuxt 3 は 2022 年 6 月現在、リリース候補版が公開されている
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

- Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）
- Vue コンポーネント等の import を省略できる
- pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）
- server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）
- Nuxt 3 は 2022 年 6 月現在、リリース候補版が公開されている`,frontmatter:{},index:54,start:1648,end:1657,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:D6,meta:{slide:{raw:`
# Nuxt 3

- pages
- NuxtLink
- layouts
- Data Fetching / server ディレクトリ
- composables
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

- pages
- NuxtLink
- layouts
- Data Fetching / server ディレクトリ
- composables`,frontmatter:{},index:55,start:1658,end:1667,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:$6,meta:{slide:{raw:`
# pages

app.vue を削除する。  
pages ディレクトリに.vue ファイルを配置し、複数ページを構成する。
まずは \`pages/index.vue\`, \`pages/about.vue\` を作成する。

Vue 開発環境では App.vue ファイルをメインで開発していて、Nuxt でも同様の目的を app.vue にて行える。例えば app.vue は以下のように書いて、各ページの template 部分が\`<NuxtPage />\`に置き換わる。

\`\`\`vue
<template>
  <header>共通ヘッダ</header>
  <NuxtPage />
</template>
\`\`\`

ただし、複数ページを構成するにあたっては pages 内で開発・管理することが一般的。
その際、app.vue でこのようなことができるが、後述する layouts 機能を使ったほうがよい。
`,title:"pages",level:1,content:`# pages

app.vue を削除する。  
pages ディレクトリに.vue ファイルを配置し、複数ページを構成する。
まずは \`pages/index.vue\`, \`pages/about.vue\` を作成する。

Vue 開発環境では App.vue ファイルをメインで開発していて、Nuxt でも同様の目的を app.vue にて行える。例えば app.vue は以下のように書いて、各ページの template 部分が\`<NuxtPage />\`に置き換わる。

\`\`\`vue
<template>
  <header>共通ヘッダ</header>
  <NuxtPage />
</template>
\`\`\`

ただし、複数ページを構成するにあたっては pages 内で開発・管理することが一般的。
その際、app.vue でこのようなことができるが、後述する layouts 機能を使ったほうがよい。`,frontmatter:{},index:56,start:1668,end:1687,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:I6,meta:{slide:{raw:`
# NuxtLink

コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。  
Nuxt ではページを作成するだけで Vue Router による設定を自動に行ってくれる、つまり Vue 環境下のように手動でルーティング設定を生成する必要がない。

そしてそのルートを移動する際は HTML の

\`\`\`html
<a href="/about">ABOUT</a>
\`\`\`

ではなく

\`\`\`vue
<NuxtLink to="/about">ABOUT</NuxtLink>
\`\`\`

と記述してリンクを作成する。  
ルート外、例えば外部サイトのリンクを貼る場合は従来の\`<a>\`要素を使うことになる。
`,title:"NuxtLink",level:1,content:`# NuxtLink

コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。  
Nuxt ではページを作成するだけで Vue Router による設定を自動に行ってくれる、つまり Vue 環境下のように手動でルーティング設定を生成する必要がない。

そしてそのルートを移動する際は HTML の

\`\`\`html
<a href="/about">ABOUT</a>
\`\`\`

ではなく

\`\`\`vue
<NuxtLink to="/about">ABOUT</NuxtLink>
\`\`\`

と記述してリンクを作成する。  
ルート外、例えば外部サイトのリンクを貼る場合は従来の\`<a>\`要素を使うことになる。`,frontmatter:{},index:57,start:1688,end:1709,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:K6,meta:{slide:{raw:`
# layouts

\`layouts/default.vue\`を作成し、共通ナビゲーションを表示させる。  
pages で解説したように例えば app.vue に共通ヘッダを持たせるのであれば、以下のような書き方で事足りるが、ページによってはヘッダが不要などといったことが出てくる。
その際、ページそのもののテンプレートを複数用意し、各ページがそのテンプレートを必要に応じて選び変えることができる。

\`app.vue\`の例

\`\`\`vue
<template>
  <header>共通ヘッダ</header>
  <NuxtPage />
</template>
\`\`\`

\`layouts/default.vue\`の例

\`\`\`vue
<template>
  <div>
    <header>共通ヘッダ</header>
    <slot />
  </div>
</template>
\`\`\`
`,title:"layouts",level:1,content:`# layouts

\`layouts/default.vue\`を作成し、共通ナビゲーションを表示させる。  
pages で解説したように例えば app.vue に共通ヘッダを持たせるのであれば、以下のような書き方で事足りるが、ページによってはヘッダが不要などといったことが出てくる。
その際、ページそのもののテンプレートを複数用意し、各ページがそのテンプレートを必要に応じて選び変えることができる。

\`app.vue\`の例

\`\`\`vue
<template>
  <header>共通ヘッダ</header>
  <NuxtPage />
</template>
\`\`\`

\`layouts/default.vue\`の例

\`\`\`vue
<template>
  <div>
    <header>共通ヘッダ</header>
    <slot />
  </div>
</template>
\`\`\``,frontmatter:{},index:58,start:1710,end:1737,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:Q6,meta:{slide:{raw:`
# Data Fetching / server ディレクトリ

\`server/api\`ディレクトリにある\`users.js\`を確認、\`components/userList.vue\`に以下を記述する。

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

<script setup>
const { data: users } = await useFetch("/api/users");
<\/script>
\`\`\`
`,title:"Data Fetching / server ディレクトリ",level:1,content:`# Data Fetching / server ディレクトリ

\`server/api\`ディレクトリにある\`users.js\`を確認、\`components/userList.vue\`に以下を記述する。

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

<script setup>
const { data: users } = await useFetch("/api/users");
<\/script>
\`\`\``,frontmatter:{},index:59,start:1738,end:1759,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:nE,meta:{slide:{raw:`
# composables

アプリ全体共通のデータを管理する。js ファイルではあるが、中身は vue の記述に近いことがわかる。 ここで状態を管理する。
\`composables/userCounter.js\`を作成する。

\`\`\`js
import { ref, readonly } from "vue";

export default () => {
  const count = ref(0);
  const increment = () => count.value++;

  return {
    count: readonly(count),
    increment,
  };
};
\`\`\`
`,title:"composables",level:1,content:`# composables

アプリ全体共通のデータを管理する。js ファイルではあるが、中身は vue の記述に近いことがわかる。 ここで状態を管理する。
\`composables/userCounter.js\`を作成する。

\`\`\`js
import { ref, readonly } from "vue";

export default () => {
  const count = ref(0);
  const increment = () => count.value++;

  return {
    count: readonly(count),
    increment,
  };
};
\`\`\``,frontmatter:{},index:60,start:1760,end:1780,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:rE,meta:{slide:{raw:`
# composables

\`\`\`vue
<template>
  <div>
    <p>カウント: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>

<script setup>
import useCounter from "~~/composables/useCounter";

const counter = useCounter();
function increment() {
  counter.increment();
}
<\/script>
\`\`\`
`,title:"composables",level:1,content:`# composables

\`\`\`vue
<template>
  <div>
    <p>カウント: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>

<script setup>
import useCounter from "~~/composables/useCounter";

const counter = useCounter();
function increment() {
  counter.increment();
}
<\/script>
\`\`\``,frontmatter:{},index:61,start:1781,end:1802,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:fE,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較

デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの

動作は Vue 3 のものと同じ

Node.js がセットアップ済みの人はローカルで動かしてみよう

1. https://github.com/tuqulore/vue-3-practices/ から ZIP をダウンロード
2. 任意の場所に ZIP を展開
3. handson-fetch-router-nuxt-finish ディレクトリに移動
4. \`npm install\` で NPM パッケージをインストール
5. \`npm run dev\` で Nuxt 3 の開発サーバーを起動
`,title:"Vue + Vue Router と Nuxt 3 の比較",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較

デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの

動作は Vue 3 のものと同じ

Node.js がセットアップ済みの人はローカルで動かしてみよう

1. https://github.com/tuqulore/vue-3-practices/ から ZIP をダウンロード
2. 任意の場所に ZIP を展開
3. handson-fetch-router-nuxt-finish ディレクトリに移動
4. \`npm install\` で NPM パッケージをインストール
5. \`npm run dev\` で Nuxt 3 の開発サーバーを起動`,frontmatter:{},index:62,start:1803,end:1818,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:vE,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（ルーティング）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3</p>

1. Vue Router をプラグインとしてインストール
2. ルートを定義する
3. RouterView コンポーネントを使う

</div>

<div>

<p class="text-xs">Nuxt 3</p>

<div class="h-xs overflow-y-auto">

1. 導入済みなので設定不要
2. ファイル・ディレクトリ構成で定義できる（ファイルベースルーティング）
3. app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 https://v3.nuxtjs.org/guide/directory-structure/app

\`\`\`
pages/
├── index.vue // この場合のパスは \`/\` となり index はパスから省略可能
└── posts // ディレクトリがそのままURLのパスに含まれる
    └── [id].vue // URLパラメーターは[]で囲む
\`\`\`

</div>

</div>

</div>
`,title:"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（ルーティング）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3</p>

1. Vue Router をプラグインとしてインストール
2. ルートを定義する
3. RouterView コンポーネントを使う

</div>

<div>

<p class="text-xs">Nuxt 3</p>

<div class="h-xs overflow-y-auto">

1. 導入済みなので設定不要
2. ファイル・ディレクトリ構成で定義できる（ファイルベースルーティング）
3. app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 https://v3.nuxtjs.org/guide/directory-structure/app

\`\`\`
pages/
├── index.vue // この場合のパスは \`/\` となり index はパスから省略可能
└── posts // ディレクトリがそのままURLのパスに含まれる
    └── [id].vue // URLパラメーターは[]で囲む
\`\`\`

</div>

</div>

</div>`,frontmatter:{},index:63,start:1819,end:1857,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:xE,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（ルーティング）

https://v3.nuxtjs.org/guide/directory-structure/pages

> Pages **must have a single root element** to allow route transitions between pages. (HTML comments are considered elements as well.)

Vue 3 はテンプレートの最上位に複数要素が書けるようになった https://v3.ja.vuejs.org/guide/migration/fragments.html

例：

\`\`\`vue
<template>
  <div />
  <p />
</template>
\`\`\`

しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない
`,title:"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（ルーティング）

https://v3.nuxtjs.org/guide/directory-structure/pages

> Pages **must have a single root element** to allow route transitions between pages. (HTML comments are considered elements as well.)

Vue 3 はテンプレートの最上位に複数要素が書けるようになった https://v3.ja.vuejs.org/guide/migration/fragments.html

例：

\`\`\`vue
<template>
  <div />
  <p />
</template>
\`\`\`

しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない`,frontmatter:{},index:64,start:1858,end:1878,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:NE,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const posts = ref(null);
（後略）
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

\`\`\`vue
<script setup>
const { data: posts, pending } = await useFetch(
（後略）
\`\`\`

インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる

</div>

</div>
`,title:"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const posts = ref(null);
（後略）
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

\`\`\`vue
<script setup>
const { data: posts, pending } = await useFetch(
（後略）
\`\`\`

インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる

</div>

</div>`,frontmatter:{},index:65,start:1879,end:1915,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:HE,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

https://v3.nuxtjs.org/guide/concepts/auto-imports

以下はインポート不要

- Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）
- 今まで使ってきた Composition API 関連の関数（ref、computed など）
- components ディレクトリに配置された Vue コンポーネント
- composables ディレクトリに配置されたコンポジション関数
`,title:"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

https://v3.nuxtjs.org/guide/concepts/auto-imports

以下はインポート不要

- Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）
- 今まで使ってきた Composition API 関連の関数（ref、computed など）
- components ディレクトリに配置された Vue コンポーネント
- composables ディレクトリに配置されたコンポジション関数`,frontmatter:{},index:66,start:1916,end:1928,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:QE,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（データ取得）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script setup>
（中略）
const posts = ref(null);
const response = await fetch("/wp-json/wp/v2/posts.json");
posts.value = await response.json();
（後略）
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<script setup>
（中略）
const { data: posts, pending } = await useFetch(
  "http://localhost:3000/wp-json/wp/v2/posts.json"
);
（後略）
\`\`\`

- リアクティブな値を別途用意する必要がない
- [Response.json()](https://developer.mozilla.org/ja/docs/Web/API/Response/json)が暗黙的に実行されオブジェクトが得られる
- データ再取得の関数、取得中の状態値などあると便利なものが用意されている https://v3.nuxtjs.org/api/composables/use-fetch

</div>

</div>

</div>
`,title:"Vue + Vue Router と Nuxt 3 の比較（データ取得）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（データ取得）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script setup>
（中略）
const posts = ref(null);
const response = await fetch("/wp-json/wp/v2/posts.json");
posts.value = await response.json();
（後略）
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<script setup>
（中略）
const { data: posts, pending } = await useFetch(
  "http://localhost:3000/wp-json/wp/v2/posts.json"
);
（後略）
\`\`\`

- リアクティブな値を別途用意する必要がない
- [Response.json()](https://developer.mozilla.org/ja/docs/Web/API/Response/json)が暗黙的に実行されオブジェクトが得られる
- データ再取得の関数、取得中の状態値などあると便利なものが用意されている https://v3.nuxtjs.org/api/composables/use-fetch

</div>

</div>

</div>`,frontmatter:{},index:67,start:1929,end:1974,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:p7,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（データ取得）

https://v3.nuxtjs.org/guide/features/data-fetching

useFetch 以外もある

useLazyFetch: 非同期関数でない代わりにデータ取得前は \`null\` が入る

\`\`\`js
const { pending, data: posts } = useLazyFetch("/api/posts");
\`\`\`

useAsyncData: 例としては useFetch と同じことをやっている。（useFetch が使えないケースで）非同期処理によってデータを取得したい際に使う

\`\`\`js
const { data } = await useAsyncData("count", () => $fetch("/api/count"));
\`\`\`

useLazyAsyncData: useLazyFetch の useAsyncData 版

\`\`\`js
const { pending, data: count } = useLazyAsyncData("count", () =>
  $fetch("/api/count")
);
\`\`\`
`,title:"Vue + Vue Router と Nuxt 3 の比較（データ取得）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（データ取得）

https://v3.nuxtjs.org/guide/features/data-fetching

useFetch 以外もある

useLazyFetch: 非同期関数でない代わりにデータ取得前は \`null\` が入る

\`\`\`js
const { pending, data: posts } = useLazyFetch("/api/posts");
\`\`\`

useAsyncData: 例としては useFetch と同じことをやっている。（useFetch が使えないケースで）非同期処理によってデータを取得したい際に使う

\`\`\`js
const { data } = await useAsyncData("count", () => $fetch("/api/count"));
\`\`\`

useLazyAsyncData: useLazyFetch の useAsyncData 版

\`\`\`js
const { pending, data: count } = useLazyAsyncData("count", () =>
  $fetch("/api/count")
);
\`\`\``,frontmatter:{},index:68,start:1975,end:2002,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:m7,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（データ取得）

便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある

- 同一オリジン（例：\`http://localhost:3000\`）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある
  - server ディレクトリで提供する API エンドポイントはオリジン省略可能
  - 上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要

Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch

場合によっては（$fetch ではなく） fetch を使うことも検討すること
`,title:"Vue + Vue Router と Nuxt 3 の比較（データ取得）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（データ取得）

便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある

- 同一オリジン（例：\`http://localhost:3000\`）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある
  - server ディレクトリで提供する API エンドポイントはオリジン省略可能
  - 上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要

Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch

場合によっては（$fetch ではなく） fetch を使うことも検討すること`,frontmatter:{},index:69,start:2003,end:2016,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:C7,meta:{slide:{raw:`
# スタイルガイド

Vue 固有の記法についての公式なスタイルガイド

- スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる
- スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる
- [eslint-plugin-vue](https://eslint.vuejs.org/)を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる

[スタイルガイド](https://v3.ja.vuejs.org/style-guide/)
`,title:"スタイルガイド",level:1,content:`# スタイルガイド

Vue 固有の記法についての公式なスタイルガイド

- スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる
- スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる
- [eslint-plugin-vue](https://eslint.vuejs.org/)を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる

[スタイルガイド](https://v3.ja.vuejs.org/style-guide/)`,frontmatter:{},index:70,start:2017,end:2028,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:O7,meta:{slide:{raw:`
# Vue 3 と Nuxt 3 の説明はこれで以上！

おつかれさまでした

以下を学んできた

- Vue の基本的な書き方
- Vue アプリケーションのコードを読む・書く
- Nuxt アプリケーションのコードを読む・書く

Nuxt 3 を使ってウェブアプリケーションをつくっていく準備ができた

業務・趣味でウェブアプリケーションを開発していきましょう！

学習の目安

- 理解していること
- 書けること

自信がない箇所は復習・質問しましょう！
`,title:"Vue 3 と Nuxt 3 の説明はこれで以上！",level:1,content:`# Vue 3 と Nuxt 3 の説明はこれで以上！

おつかれさまでした

以下を学んできた

- Vue の基本的な書き方
- Vue アプリケーションのコードを読む・書く
- Nuxt アプリケーションのコードを読む・書く

Nuxt 3 を使ってウェブアプリケーションをつくっていく準備ができた

業務・趣味でウェブアプリケーションを開発していきましょう！

学習の目安

- 理解していること
- 書けること

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:71,start:2029,end:2051,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:L7,meta:{slide:{raw:`
# 課題

- レベル 1 ～ 3 の 3 つある
- 1 から順番に取り組んでもらう
- 16 時に解説する
`,title:"課題",level:1,content:`# 課題

- レベル 1 ～ 3 の 3 つある
- 1 から順番に取り組んでもらう
- 16 時に解説する`,frontmatter:{},index:72,start:2052,end:2059,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:H7,meta:{slide:{raw:`
# 課題（レベル 1）

問題：https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch を使って http://localhost:3000/data.json から果物のリストを取得してください
2. 果物を順序なしリストで表示してください https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul
`,title:"課題（レベル 1）",level:1,content:`# 課題（レベル 1）

問題：https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch を使って http://localhost:3000/data.json から果物のリストを取得してください
2. 果物を順序なしリストで表示してください https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul`,frontmatter:{},index:73,start:2060,end:2068,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:K7,meta:{slide:{raw:`
# 課題（レベル 2）

問題：https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください
`,title:"課題（レベル 2）",level:1,content:`# 課題（レベル 2）

問題：https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください`,frontmatter:{},index:74,start:2069,end:2076,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:Q7,meta:{slide:{raw:`
# 課題（レベル 3）

問題：https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください
`,title:"課題（レベル 3）",level:1,content:`# 課題（レベル 3）

問題：https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください`,frontmatter:{},index:75,start:2077,end:2084,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",component:iA,meta:{layout:"end"}}],qs=X7,s2=[{name:"play",path:"/",component:PB,children:[...qs]},{name:"print",path:"/print",component:rA},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>zl(()=>import("./PresenterPrint-520d2f8a.js"),["assets/PresenterPrint-520d2f8a.js","assets/shared.esm-bundler-f1db99c1.js","assets/NoteViewer-bee6e13f.js","assets/index-172e1be3.js"])},{name:"presenter",path:"/presenter/:no",component:()=>zl(()=>import("./Presenter-139a7dfd.js"),["assets/Presenter-139a7dfd.js","assets/NoteViewer-bee6e13f.js","assets/DrawingControls-702db10c.js","assets/index-172e1be3.js","assets/Presenter-214154c4.css"]),beforeEnter:e=>{if(!Pn.remote||Pn.remote===e.query.password)return!0;if(Pn.remote&&e.query.password===void 0){const l=prompt("Enter password");if(Pn.remote===l)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],hl=ih({history:cf("/vue-3-practices"),routes:s2});function e2(e,l,{mode:n="replace"}={}){return T({get(){const t=hl.currentRoute.value.query[e];return t==null?l??null:Array.isArray(t)?t.filter(Boolean):t},set(t){Pe(()=>{hl[D(n)]({query:{...hl.currentRoute.value.query,[e]:t}})})}})}const zi=ns(0);Pe(()=>{hl.afterEach(async()=>{await Pe(),zi.value+=1})});const We=T(()=>hl.currentRoute.value),ja=T(()=>We.value.query.print!==void 0),l2=T(()=>We.value.query.print==="clicks"),Ye=T(()=>We.value.query.embedded!==void 0),sl=T(()=>We.value.path.startsWith("/presenter")),Wi=T(()=>ja.value&&!l2.value),la=T(()=>We.value.query.password),n2=T(()=>!sl.value&&(!Ts.remote||la.value===Ts.remote)),bc=e2("clicks","0"),Ui=T(()=>qs.length-1),o2=T(()=>We.value.path),Gs=T(()=>parseInt(o2.value.split(/\//g).slice(-1)[0])||1);T(()=>Ha(Gs.value));const me=T(()=>qs.find(e=>e.path===`${Gs.value}`));T(()=>{var e,l,n;return(n=(l=(e=me.value)==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:n.id});T(()=>{var e,l;return((l=(e=me.value)==null?void 0:e.meta)==null?void 0:l.layout)||(Gs.value===1?"cover":"default")});const Bt=T(()=>qs.find(e=>e.path===`${Math.min(qs.length,Gs.value+1)}`)),t2=T(()=>{var e,l;return zi.value,((l=(e=me.value)==null?void 0:e.meta)==null?void 0:l.__clicksElements)||[]}),Wl=T({get(){if(Wi.value)return 99999;let e=+(bc.value||0);return isNaN(e)&&(e=0),e},set(e){bc.value=e.toString()}}),Mo=T(()=>{var e,l;return+(((l=(e=me.value)==null?void 0:e.meta)==null?void 0:l.clicks)??t2.value.length)}),a2=T(()=>Gs.value<qs.length-1||Wl.value<Mo.value),r2=T(()=>Gs.value>1||Wl.value>0),c2=T(()=>qs.filter(e=>{var l,n;return(n=(l=e.meta)==null?void 0:l.slide)==null?void 0:n.title}).reduce((e,l)=>(za(e,l),e),[])),p2=T(()=>Wa(c2.value,me.value));T(()=>Ua(p2.value));function Rl(){Mo.value<=Wl.value?No():Wl.value+=1}async function Il(){Wl.value<=0?await Lo():Wl.value-=1}function Ha(e){return sl.value?`/presenter/${e}`:`/${e}`}function No(){const e=Math.min(qs.length,Gs.value+1);return mn(e)}async function Lo(e=!0){const l=Math.max(1,Gs.value-1);await mn(l),e&&Mo.value&&hl.replace({query:{...We.value.query,clicks:Mo.value}})}function mn(e,l){return hl.push({path:Ha(e),query:{...We.value.query,clicks:l}})}function i2(e){const l=ns(0),{direction:n,distanceX:t,distanceY:a}=k5(e,{onSwipeStart(r){r.pointerType==="touch"&&(Qn.value||(l.value=jt()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!l.value||Qn.value)return;const c=Math.abs(t.value),p=Math.abs(a.value);c/window.innerWidth>.3||c>100?n.value===Xe.LEFT?Rl():Il():(p/window.innerHeight>.4||p>200)&&(n.value===Xe.DOWN?Lo():No())}})}async function wc(){const{saveAs:e}=await zl(()=>import("./FileSaver.min-17c85779.js").then(l=>l.F),[]);e(Zp(Ts.download)?Ts.download:Ts.exportFilename?`${Ts.exportFilename}.pdf`:"/vue-3-practicesslidev-exported.pdf",`${Ts.title}.pdf`)}async function N2(e){var l,n;if(e==null){const t=(n=(l=me.value)==null?void 0:l.meta)==null?void 0:n.slide;if(!(t!=null&&t.filepath))return!1;e=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function za(e,l,n=1){var a,r,c,p,i;const t=(r=(a=l.meta)==null?void 0:a.slide)==null?void 0:r.level;t&&t>n&&e.length>0?za(e[e.length-1].children,l,n+1):e.push({children:[],level:n,path:l.path,hideInToc:Boolean((c=l.meta)==null?void 0:c.hideInToc),title:(i=(p=l.meta)==null?void 0:p.slide)==null?void 0:i.title})}function Wa(e,l,n=!1,t){return e.map(a=>{const r={...a,active:a.path===(l==null?void 0:l.path),hasActiveParent:n};return r.children.length>0&&(r.children=Wa(r.children,l,r.active||r.hasActiveParent,r)),t&&(r.active||r.activeParent)&&(t.activeParent=!0),r})}function Ua(e,l=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Ua(n.children,l+1)}))}export{_2 as $,x2 as A,k2 as B,$s as C,$2 as D,Le as E,xs as F,b2 as G,l8 as H,n8 as I,Zo as J,Pe as K,vp as L,Z as M,Hl as N,ya as O,vl as P,y2 as Q,Wi as R,ld as S,f2 as T,nd as U,qp as V,Up as W,Wp as X,Xu as Y,A2 as Z,P as _,F2 as a,M2 as a$,g2 as a0,B2 as a1,v2 as a2,Gv as a3,Qv as a4,wc as a5,Rl as a6,No as a7,N2 as a8,Il as a9,mm as aA,u2 as aB,d2 as aC,Mo as aD,a2 as aE,Bt as aF,it as aG,Qn as aH,ht as aI,$B as aJ,Na as aK,La as aL,FB as aM,bm as aN,Te as aO,w2 as aP,nl as aQ,bn as aR,Sl as aS,Ie as aT,Xt as aU,Wh as aV,Uh as aW,qh as aX,Jh as aY,He as aZ,zp as a_,Lo as aa,We as ab,m2 as ac,Bn as ad,Ds as ae,P2 as af,s as ag,Ys as ah,no as ai,se as aj,qs as ak,Ui as al,o as am,_s as an,$a as ao,Hs as ap,O2 as aq,me as ar,M as as,nm as at,i2 as au,S2 as av,T2 as aw,C as ax,Pi as ay,ae as az,Gs as b,pe as b0,uo as b1,p3 as b2,Kp as b3,Yh as b4,Ts as c,Wl as d,sl as e,Vs as f,Ha as g,b as h,C2 as i,S as j,Dy as k,Y as l,F as m,A as n,D2 as o,E2 as p,ee as q,hl as r,lt as s,T as t,h2 as u,vr as v,js as w,Bp as x,D as y,ns as z};
