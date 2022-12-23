function eo(e,l){const o=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)o[t[a]]=!0;return l?a=>!!o[a.toLowerCase()]:a=>!!o[a]}function se(e){if(is(e)){const l={};for(let o=0;o<e.length;o++){const t=e[o],a=zs(t)?Zi(t):se(t);if(a)for(const r in a)l[r]=a[r]}return l}else{if(zs(e))return e;if(Is(e))return e}}const Ji=/;(?![^(]*\))/g,Yi=/:(.+)/;function Zi(e){const l={};return e.split(Ji).forEach(o=>{if(o){const t=o.split(Yi);t.length>1&&(l[t[0].trim()]=t[1].trim())}}),l}function Hs(e){let l="";if(zs(e))l=e;else if(is(e))for(let o=0;o<e.length;o++){const t=Hs(e[o]);t&&(l+=t+" ")}else if(Is(e))for(const o in e)e[o]&&(l+=o+" ");return l.trim()}function K(e){if(!e)return null;let{class:l,style:o}=e;return l&&!zs(l)&&(e.class=Hs(l)),o&&(e.style=se(o)),e}const Ys=e=>zs(e)?e:e==null?"":is(e)||Is(e)&&(e.toString===Oc||!ds(e.toString))?JSON.stringify(e,$c,2):String(e),$c=(e,l)=>l&&l.__v_isRef?$c(e,l.value):Pl(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((o,[t,a])=>(o[`${t} =>`]=a,o),{})}:Pc(l)?{[`Set(${l.size})`]:[...l.values()]}:Is(l)&&!is(l)&&!Tc(l)?String(l):l,xs=Object.freeze({}),an=Object.freeze([]),ye=()=>{},Sc=()=>!1,Gi=/^on[^a-z]/,Ro=e=>Gi.test(e),At=e=>e.startsWith("onUpdate:"),Ks=Object.assign,na=(e,l)=>{const o=e.indexOf(l);o>-1&&e.splice(o,1)},Qi=Object.prototype.hasOwnProperty,vs=(e,l)=>Qi.call(e,l),is=Array.isArray,Pl=e=>Io(e)==="[object Map]",Pc=e=>Io(e)==="[object Set]",ds=e=>typeof e=="function",zs=e=>typeof e=="string",oa=e=>typeof e=="symbol",Is=e=>e!==null&&typeof e=="object",ta=e=>Is(e)&&ds(e.then)&&ds(e.catch),Oc=Object.prototype.toString,Io=e=>Oc.call(e),aa=e=>Io(e).slice(8,-1),Tc=e=>Io(e)==="[object Object]",ra=e=>zs(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fo=eo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xi=eo("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Vo=e=>{const l=Object.create(null);return o=>l[o]||(l[o]=e(o))},s8=/-(\w)/g,Ve=Vo(e=>e.replace(s8,(l,o)=>o?o.toUpperCase():"")),e8=/\B([A-Z])/g,yn=Vo(e=>e.replace(e8,"-$1").toLowerCase()),un=Vo(e=>e.charAt(0).toUpperCase()+e.slice(1)),_l=Vo(e=>e?`on${un(e)}`:""),Hn=(e,l)=>!Object.is(e,l),Fl=(e,l)=>{for(let o=0;o<e.length;o++)e[o](l)},Co=(e,l,o)=>{Object.defineProperty(e,l,{configurable:!0,enumerable:!1,value:o})},l8=e=>{const l=parseFloat(e);return isNaN(l)?e:l};let Ya;const Mc=()=>Ya||(Ya=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function go(e,...l){console.warn(`[Vue warn] ${e}`,...l)}let Be;class Nc{constructor(l=!1){this.active=!0,this.effects=[],this.cleanups=[],!l&&Be&&(this.parent=Be,this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}run(l){if(this.active){const o=Be;try{return Be=this,l()}finally{Be=o}}else go("cannot run an inactive effect scope.")}on(){Be=this}off(){Be=this.parent}stop(l){if(this.active){let o,t;for(o=0,t=this.effects.length;o<t;o++)this.effects[o].stop();for(o=0,t=this.cleanups.length;o<t;o++)this.cleanups[o]();if(this.scopes)for(o=0,t=this.scopes.length;o<t;o++)this.scopes[o].stop(!0);if(this.parent&&!l){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function _F(e){return new Nc(e)}function n8(e,l=Be){l&&l.active&&l.effects.push(e)}function o8(){return Be}function t8(e){Be?Be.cleanups.push(e):go("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ca=e=>{const l=new Set(e);return l.w=0,l.n=0,l},Lc=e=>(e.w&hl)>0,Rc=e=>(e.n&hl)>0,a8=({deps:e})=>{if(e.length)for(let l=0;l<e.length;l++)e[l].w|=hl},r8=e=>{const{deps:l}=e;if(l.length){let o=0;for(let t=0;t<l.length;t++){const a=l[t];Lc(a)&&!Rc(a)?a.delete(e):l[o++]=a,a.w&=~hl,a.n&=~hl}l.length=o}},vt=new WeakMap;let wn=0,hl=1;const Dt=30;let re;const Ol=Symbol("iterate"),_t=Symbol("Map key iterate");class pa{constructor(l,o=null,t){this.fn=l,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,n8(this,t)}run(){if(!this.active)return this.fn();let l=re,o=yl;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=re,re=this,yl=!0,hl=1<<++wn,wn<=Dt?a8(this):Za(this),this.fn()}finally{wn<=Dt&&r8(this),hl=1<<--wn,re=this.parent,yl=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){re===this?this.deferStop=!0:this.active&&(Za(this),this.onStop&&this.onStop(),this.active=!1)}}function Za(e){const{deps:l}=e;if(l.length){for(let o=0;o<l.length;o++)l[o].delete(e);l.length=0}}let yl=!0;const Ic=[];function Ul(){Ic.push(yl),yl=!1}function ql(){const e=Ic.pop();yl=e===void 0?!0:e}function De(e,l,o){if(yl&&re){let t=vt.get(e);t||vt.set(e,t=new Map);let a=t.get(o);a||t.set(o,a=ca()),Vc(a,{effect:re,target:e,type:l,key:o})}}function Vc(e,l){let o=!1;wn<=Dt?Rc(e)||(e.n|=hl,o=!Lc(e)):o=!e.has(re),o&&(e.add(re),re.deps.push(e),re.onTrack&&re.onTrack(Object.assign({effect:re},l)))}function ll(e,l,o,t,a,r){const c=vt.get(e);if(!c)return;let p=[];if(l==="clear")p=[...c.values()];else if(o==="length"&&is(e))c.forEach((y,u)=>{(u==="length"||u>=t)&&p.push(y)});else switch(o!==void 0&&p.push(c.get(o)),l){case"add":is(e)?ra(o)&&p.push(c.get("length")):(p.push(c.get(Ol)),Pl(e)&&p.push(c.get(_t)));break;case"delete":is(e)||(p.push(c.get(Ol)),Pl(e)&&p.push(c.get(_t)));break;case"set":Pl(e)&&p.push(c.get(Ol));break}const i={target:e,type:l,key:o,newValue:t,oldValue:a,oldTarget:r};if(p.length===1)p[0]&&Ct(p[0],i);else{const y=[];for(const u of p)u&&y.push(...u);Ct(ca(y),i)}}function Ct(e,l){const o=is(e)?e:[...e];for(const t of o)t.computed&&Ga(t,l);for(const t of o)t.computed||Ga(t,l)}function Ga(e,l){(e!==re||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ks({effect:e},l)),e.scheduler?e.scheduler():e.run())}const c8=eo("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(oa)),p8=jo(),i8=jo(!1,!0),y8=jo(!0),u8=jo(!0,!0),Qa=d8();function d8(){const e={};return["includes","indexOf","lastIndexOf"].forEach(l=>{e[l]=function(...o){const t=hs(this);for(let r=0,c=this.length;r<c;r++)De(t,"get",r+"");const a=t[l](...o);return a===-1||a===!1?t[l](...o.map(hs)):a}}),["push","pop","shift","unshift","splice"].forEach(l=>{e[l]=function(...o){Ul();const t=hs(this)[l].apply(this,o);return ql(),t}}),e}function jo(e=!1,l=!1){return function(t,a,r){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return l;if(a==="__v_raw"&&r===(e?l?Yc:Jc:l?Kc:qc).get(t))return t;const c=is(t);if(!e&&c&&vs(Qa,a))return Reflect.get(Qa,a,r);const p=Reflect.get(t,a,r);return(oa(a)?jc.has(a):c8(a))||(e||De(t,"get",a),l)?p:Es(p)?c&&ra(a)?p:p.value:Is(p)?e?wl(p):ee(p):p}}const f8=Hc(),B8=Hc(!0);function Hc(e=!1){return function(o,t,a,r){let c=o[t];if(Vl(c)&&Es(c)&&!Es(a))return!1;if(!e&&!Vl(a)&&(gt(a)||(a=hs(a),c=hs(c)),!is(o)&&Es(c)&&!Es(a)))return c.value=a,!0;const p=is(o)&&ra(t)?Number(t)<o.length:vs(o,t),i=Reflect.set(o,t,a,r);return o===hs(r)&&(p?Hn(a,c)&&ll(o,"set",t,a,c):ll(o,"add",t,a)),i}}function h8(e,l){const o=vs(e,l),t=e[l],a=Reflect.deleteProperty(e,l);return a&&o&&ll(e,"delete",l,void 0,t),a}function m8(e,l){const o=Reflect.has(e,l);return(!oa(l)||!jc.has(l))&&De(e,"has",l),o}function A8(e){return De(e,"iterate",is(e)?"length":Ol),Reflect.ownKeys(e)}const zc={get:p8,set:f8,deleteProperty:h8,has:m8,ownKeys:A8},Wc={get:y8,set(e,l){return go(`Set operation on key "${String(l)}" failed: target is readonly.`,e),!0},deleteProperty(e,l){return go(`Delete operation on key "${String(l)}" failed: target is readonly.`,e),!0}},v8=Ks({},zc,{get:i8,set:B8}),D8=Ks({},Wc,{get:u8}),ia=e=>e,Ho=e=>Reflect.getPrototypeOf(e);function to(e,l,o=!1,t=!1){e=e.__v_raw;const a=hs(e),r=hs(l);o||(l!==r&&De(a,"get",l),De(a,"get",r));const{has:c}=Ho(a),p=t?ia:o?ua:zn;if(c.call(a,l))return p(e.get(l));if(c.call(a,r))return p(e.get(r));e!==a&&e.get(l)}function ao(e,l=!1){const o=this.__v_raw,t=hs(o),a=hs(e);return l||(e!==a&&De(t,"has",e),De(t,"has",a)),e===a?o.has(e):o.has(e)||o.has(a)}function ro(e,l=!1){return e=e.__v_raw,!l&&De(hs(e),"iterate",Ol),Reflect.get(e,"size",e)}function Xa(e){e=hs(e);const l=hs(this);return Ho(l).has.call(l,e)||(l.add(e),ll(l,"add",e,e)),this}function sr(e,l){l=hs(l);const o=hs(this),{has:t,get:a}=Ho(o);let r=t.call(o,e);r?Uc(o,t,e):(e=hs(e),r=t.call(o,e));const c=a.call(o,e);return o.set(e,l),r?Hn(l,c)&&ll(o,"set",e,l,c):ll(o,"add",e,l),this}function er(e){const l=hs(this),{has:o,get:t}=Ho(l);let a=o.call(l,e);a?Uc(l,o,e):(e=hs(e),a=o.call(l,e));const r=t?t.call(l,e):void 0,c=l.delete(e);return a&&ll(l,"delete",e,void 0,r),c}function lr(){const e=hs(this),l=e.size!==0,o=Pl(e)?new Map(e):new Set(e),t=e.clear();return l&&ll(e,"clear",void 0,void 0,o),t}function co(e,l){return function(t,a){const r=this,c=r.__v_raw,p=hs(c),i=l?ia:e?ua:zn;return!e&&De(p,"iterate",Ol),c.forEach((y,u)=>t.call(a,i(y),i(u),r))}}function po(e,l,o){return function(...t){const a=this.__v_raw,r=hs(a),c=Pl(r),p=e==="entries"||e===Symbol.iterator&&c,i=e==="keys"&&c,y=a[e](...t),u=o?ia:l?ua:zn;return!l&&De(r,"iterate",i?_t:Ol),{next(){const{value:d,done:f}=y.next();return f?{value:d,done:f}:{value:p?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function al(e){return function(...l){{const o=l[0]?`on key "${l[0]}" `:"";console.warn(`${un(e)} operation ${o}failed: target is readonly.`,hs(this))}return e==="delete"?!1:this}}function _8(){const e={get(r){return to(this,r)},get size(){return ro(this)},has:ao,add:Xa,set:sr,delete:er,clear:lr,forEach:co(!1,!1)},l={get(r){return to(this,r,!1,!0)},get size(){return ro(this)},has:ao,add:Xa,set:sr,delete:er,clear:lr,forEach:co(!1,!0)},o={get(r){return to(this,r,!0)},get size(){return ro(this,!0)},has(r){return ao.call(this,r,!0)},add:al("add"),set:al("set"),delete:al("delete"),clear:al("clear"),forEach:co(!0,!1)},t={get(r){return to(this,r,!0,!0)},get size(){return ro(this,!0)},has(r){return ao.call(this,r,!0)},add:al("add"),set:al("set"),delete:al("delete"),clear:al("clear"),forEach:co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=po(r,!1,!1),o[r]=po(r,!0,!1),l[r]=po(r,!1,!0),t[r]=po(r,!0,!0)}),[e,o,l,t]}const[C8,g8,E8,F8]=_8();function zo(e,l){const o=l?e?F8:E8:e?g8:C8;return(t,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?t:Reflect.get(vs(o,a)&&a in t?o:t,a,r)}const x8={get:zo(!1,!1)},k8={get:zo(!1,!0)},b8={get:zo(!0,!1)},w8={get:zo(!0,!0)};function Uc(e,l,o){const t=hs(o);if(t!==o&&l.call(e,t)){const a=aa(e);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const qc=new WeakMap,Kc=new WeakMap,Jc=new WeakMap,Yc=new WeakMap;function $8(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function S8(e){return e.__v_skip||!Object.isExtensible(e)?0:$8(aa(e))}function ee(e){return Vl(e)?e:Wo(e,!1,zc,x8,qc)}function P8(e){return Wo(e,!1,v8,k8,Kc)}function wl(e){return Wo(e,!0,Wc,b8,Jc)}function on(e){return Wo(e,!0,D8,w8,Yc)}function Wo(e,l,o,t,a){if(!Is(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(l&&e.__v_isReactive))return e;const r=a.get(e);if(r)return r;const c=S8(e);if(c===0)return e;const p=new Proxy(e,c===2?t:o);return a.set(e,p),p}function Tl(e){return Vl(e)?Tl(e.__v_raw):!!(e&&e.__v_isReactive)}function Vl(e){return!!(e&&e.__v_isReadonly)}function gt(e){return!!(e&&e.__v_isShallow)}function Eo(e){return Tl(e)||Vl(e)}function hs(e){const l=e&&e.__v_raw;return l?hs(l):e}function ya(e){return Co(e,"__v_skip",!0),e}const zn=e=>Is(e)?ee(e):e,ua=e=>Is(e)?wl(e):e;function da(e){yl&&re&&(e=hs(e),Vc(e.dep||(e.dep=ca()),{target:e,type:"get",key:"value"}))}function fa(e,l){e=hs(e),e.dep&&Ct(e.dep,{target:e,type:"set",key:"value",newValue:l})}function Es(e){return!!(e&&e.__v_isRef===!0)}function ns(e){return Zc(e,!1)}function je(e){return Zc(e,!0)}function Zc(e,l){return Es(e)?e:new O8(e,l)}class O8{constructor(l,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?l:hs(l),this._value=o?l:zn(l)}get value(){return da(this),this._value}set value(l){l=this.__v_isShallow?l:hs(l),Hn(l,this._rawValue)&&(this._rawValue=l,this._value=this.__v_isShallow?l:zn(l),fa(this,l))}}function g(e){return Es(e)?e.value:e}const T8={get:(e,l,o)=>g(Reflect.get(e,l,o)),set:(e,l,o,t)=>{const a=e[l];return Es(a)&&!Es(o)?(a.value=o,!0):Reflect.set(e,l,o,t)}};function Gc(e){return Tl(e)?e:new Proxy(e,T8)}class M8{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:t}=l(()=>da(this),()=>fa(this));this._get=o,this._set=t}get value(){return this._get()}set value(l){this._set(l)}}function Qc(e){return new M8(e)}function N8(e){Eo(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const l=is(e)?new Array(e.length):{};for(const o in e)l[o]=R8(e,o);return l}class L8{constructor(l,o,t){this._object=l,this._key=o,this._defaultValue=t,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function R8(e,l,o){const t=e[l];return Es(t)?t:new L8(e,l,o)}class I8{constructor(l,o,t,a){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new pa(l,()=>{this._dirty||(this._dirty=!0,fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=t}get value(){const l=hs(this);return da(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}function V8(e,l,o=!1){let t,a;const r=ds(e);r?(t=e,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(t=e.get,a=e.set);const c=new I8(t,a,r||!a,o);return l&&!o&&(c.effect.onTrack=l.onTrack,c.effect.onTrigger=l.onTrigger),c}const Ml=[];function Bo(e){Ml.push(e)}function ho(){Ml.pop()}function R(e,...l){Ul();const o=Ml.length?Ml[Ml.length-1].component:null,t=o&&o.appContext.config.warnHandler,a=j8();if(t)el(t,o,11,[e+l.join(""),o&&o.proxy,a.map(({vnode:r})=>`at <${et(o,r.type)}>`).join(`
`),a]);else{const r=[`[Vue warn]: ${e}`,...l];a.length&&r.push(`
`,...H8(a)),console.warn(...r)}ql()}function j8(){let e=Ml[Ml.length-1];if(!e)return[];const l=[];for(;e;){const o=l[0];o&&o.vnode===e?o.recurseCount++:l.push({vnode:e,recurseCount:0});const t=e.component&&e.component.parent;e=t&&t.vnode}return l}function H8(e){const l=[];return e.forEach((o,t)=>{l.push(...t===0?[]:[`
`],...z8(o))}),l}function z8({vnode:e,recurseCount:l}){const o=l>0?`... (${l} recursive calls)`:"",t=e.component?e.component.parent==null:!1,a=` at <${et(e.component,e.type,t)}`,r=">"+o;return e.props?[a,...W8(e.props),r]:[a+r]}function W8(e){const l=[],o=Object.keys(e);return o.slice(0,3).forEach(t=>{l.push(...Xc(t,e[t]))}),o.length>3&&l.push(" ..."),l}function Xc(e,l,o){return zs(l)?(l=JSON.stringify(l),o?l:[`${e}=${l}`]):typeof l=="number"||typeof l=="boolean"||l==null?o?l:[`${e}=${l}`]:Es(l)?(l=Xc(e,hs(l.value),!0),o?l:[`${e}=Ref<`,l,">"]):ds(l)?[`${e}=fn${l.name?`<${l.name}>`:""}`]:(l=hs(l),o?l:[`${e}=`,l])}const Ba={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function el(e,l,o,t){let a;try{a=t?e(...t):e()}catch(r){Uo(r,l,o)}return a}function Se(e,l,o,t){if(ds(e)){const r=el(e,l,o,t);return r&&ta(r)&&r.catch(c=>{Uo(c,l,o)}),r}const a=[];for(let r=0;r<e.length;r++)a.push(Se(e[r],l,o,t));return a}function Uo(e,l,o,t=!0){const a=l?l.vnode:null;if(l){let r=l.parent;const c=l.proxy,p=Ba[o];for(;r;){const y=r.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](e,c,p)===!1)return}r=r.parent}const i=l.appContext.config.errorHandler;if(i){el(i,null,10,[e,c,p]);return}}U8(e,o,a,t)}function U8(e,l,o,t=!0){{const a=Ba[l];if(o&&Bo(o),R(`Unhandled error${a?` during execution of ${a}`:""}`),o&&ho(),t)throw e;console.error(e)}}let Fo=!1,Et=!1;const Ae=[];let Qe=0;const On=[];let sn=null,Cl=0;const Tn=[];let qe=null,gl=0;const sp=Promise.resolve();let ha=null,Ft=null;const q8=100;function Pe(e){const l=ha||sp;return e?l.then(this?e.bind(this):e):l}function K8(e){let l=Qe+1,o=Ae.length;for(;l<o;){const t=l+o>>>1;Wn(Ae[t])<e?l=t+1:o=t}return l}function ma(e){(!Ae.length||!Ae.includes(e,Fo&&e.allowRecurse?Qe+1:Qe))&&e!==Ft&&(e.id==null?Ae.push(e):Ae.splice(K8(e.id),0,e),ep())}function ep(){!Fo&&!Et&&(Et=!0,ha=sp.then(tp))}function J8(e){const l=Ae.indexOf(e);l>Qe&&Ae.splice(l,1)}function lp(e,l,o,t){is(e)?o.push(...e):(!l||!l.includes(e,e.allowRecurse?t+1:t))&&o.push(e),ep()}function Y8(e){lp(e,sn,On,Cl)}function np(e){lp(e,qe,Tn,gl)}function qo(e,l=null){if(On.length){for(Ft=l,sn=[...new Set(On)],On.length=0,e=e||new Map,Cl=0;Cl<sn.length;Cl++)Aa(e,sn[Cl])||sn[Cl]();sn=null,Cl=0,Ft=null,qo(e,l)}}function op(e){if(qo(),Tn.length){const l=[...new Set(Tn)];if(Tn.length=0,qe){qe.push(...l);return}for(qe=l,e=e||new Map,qe.sort((o,t)=>Wn(o)-Wn(t)),gl=0;gl<qe.length;gl++)Aa(e,qe[gl])||qe[gl]();qe=null,gl=0}}const Wn=e=>e.id==null?1/0:e.id;function tp(e){Et=!1,Fo=!0,e=e||new Map,qo(e),Ae.sort((o,t)=>Wn(o)-Wn(t));const l=o=>Aa(e,o);try{for(Qe=0;Qe<Ae.length;Qe++){const o=Ae[Qe];if(o&&o.active!==!1){if(l(o))continue;el(o,null,14)}}}finally{Qe=0,Ae.length=0,op(e),Fo=!1,ha=null,(Ae.length||On.length||Tn.length)&&tp(e)}}function Aa(e,l){if(!e.has(l))e.set(l,1);else{const o=e.get(l);if(o>q8){const t=l.ownerInstance,a=t&&Kn(t.type);return R(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(l,o+1)}}let ul=!1;const en=new Set;Mc().__VUE_HMR_RUNTIME__={createRecord:ot(ap),rerender:ot(Q8),reload:ot(X8)};const jl=new Map;function Z8(e){const l=e.type.__hmrId;let o=jl.get(l);o||(ap(l,e.type),o=jl.get(l)),o.instances.add(e)}function G8(e){jl.get(e.type.__hmrId).instances.delete(e)}function ap(e,l){return jl.has(e)?!1:(jl.set(e,{initialDef:Mn(l),instances:new Set}),!0)}function Mn(e){return Ip(e)?e.__vccOpts:e}function Q8(e,l){const o=jl.get(e);o&&(o.initialDef.render=l,[...o.instances].forEach(t=>{l&&(t.render=l,Mn(t.type).render=l),t.renderCache=[],ul=!0,t.update(),ul=!1}))}function X8(e,l){const o=jl.get(e);if(!o)return;l=Mn(l),nr(o.initialDef,l);const t=[...o.instances];for(const a of t){const r=Mn(a.type);en.has(r)||(r!==o.initialDef&&nr(r,l),en.add(r)),a.appContext.optionsCache.delete(a.type),a.ceReload?(en.add(r),a.ceReload(l.styles),en.delete(r)):a.parent?(ma(a.parent.update),a.parent.type.__asyncLoader&&a.parent.ceReload&&a.parent.ceReload(l.styles)):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}np(()=>{for(const a of t)en.delete(Mn(a.type))})}function nr(e,l){Ks(e,l);for(const o in e)o!=="__file"&&!(o in l)&&delete e[o]}function ot(e){return(l,o)=>{try{return e(l,o)}catch(t){console.error(t),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let xl,$n=[],xt=!1;function lo(e,...l){xl?xl.emit(e,...l):xt||$n.push({event:e,args:l})}function rp(e,l){var o,t;xl=e,xl?(xl.enabled=!0,$n.forEach(({event:a,args:r})=>xl.emit(a,...r)),$n=[]):typeof window<"u"&&window.HTMLElement&&!(!((t=(o=window.navigator)===null||o===void 0?void 0:o.userAgent)===null||t===void 0)&&t.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{rp(r,l)}),setTimeout(()=>{xl||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,xt=!0,$n=[])},3e3)):(xt=!0,$n=[])}function sy(e,l){lo("app:init",e,l,{Fragment:ks,Text:Qo,Comment:ue,Static:mo})}function ey(e){lo("app:unmount",e)}const kt=va("component:added"),cp=va("component:updated"),ly=va("component:removed");function va(e){return l=>{lo(e,l.appContext.app,l.uid,l.parent?l.parent.uid:void 0,l)}}const ny=pp("perf:start"),oy=pp("perf:end");function pp(e){return(l,o,t)=>{lo(e,l.appContext.app,l.uid,l,o,t)}}function ty(e,l,o){lo("component:emit",e.appContext.app,e,l,o)}function ay(e,l,...o){if(e.isUnmounted)return;const t=e.vnode.props||xs;{const{emitsOptions:u,propsOptions:[d]}=e;if(u)if(!(l in u))(!d||!(_l(l)in d))&&R(`Component emitted event "${l}" but it is neither declared in the emits option nor as an "${_l(l)}" prop.`);else{const f=u[l];ds(f)&&(f(...o)||R(`Invalid event arguments: event validation failed for event "${l}".`))}}let a=o;const r=l.startsWith("update:"),c=r&&l.slice(7);if(c&&c in t){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:d,trim:f}=t[u]||xs;f&&(a=o.map(h=>h.trim())),d&&(a=o.map(l8))}ty(e,l,a);{const u=l.toLowerCase();u!==l&&t[_l(u)]&&R(`Event "${u}" is emitted in component ${et(e,e.type)} but the handler is registered for "${l}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${yn(l)}" instead of "${l}".`)}let p,i=t[p=_l(l)]||t[p=_l(Ve(l))];!i&&r&&(i=t[p=_l(yn(l))]),i&&Se(i,e,6,a);const y=t[p+"Once"];if(y){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,Se(y,e,6,a)}}function ip(e,l,o=!1){const t=l.emitsCache,a=t.get(e);if(a!==void 0)return a;const r=e.emits;let c={},p=!1;if(!ds(e)){const i=y=>{const u=ip(y,l,!0);u&&(p=!0,Ks(c,u))};!o&&l.mixins.length&&l.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!p?(t.set(e,null),null):(is(r)?r.forEach(i=>c[i]=null):Ks(c,r),t.set(e,c),c)}function Ko(e,l){return!e||!Ro(l)?!1:(l=l.slice(2).replace(/Once$/,""),vs(e,l[0].toLowerCase()+l.slice(1))||vs(e,yn(l))||vs(e,l))}let Zs=null,Jo=null;function xo(e){const l=Zs;return Zs=e,Jo=e&&e.type.__scopeId||null,l}function CF(e){Jo=e}function gF(){Jo=null}function C(e,l=Zs,o){if(!l||e._n)return e;const t=(...a)=>{t._d&&hr(-1);const r=xo(l),c=e(...a);return xo(r),t._d&&hr(1),cp(l),c};return t._n=!0,t._c=!0,t._d=!0,t}let bt=!1;function ko(){bt=!0}function tt(e){const{type:l,vnode:o,proxy:t,withProxy:a,props:r,propsOptions:[c],slots:p,attrs:i,emit:y,render:u,renderCache:d,data:f,setupState:h,ctx:m,inheritAttrs:_}=e;let D,b;const E=xo(e);bt=!1;try{if(o.shapeFlag&4){const ss=a||t;D=we(u.call(ss,ss,d,r,h,f,m)),b=i}else{const ss=l;i===r&&ko(),D=we(ss.length>1?ss(r,{get attrs(){return ko(),i},slots:p,emit:y}):ss(r,null)),b=l.props?i:cy(i)}}catch(ss){Ln.length=0,Uo(ss,e,1),D=F(ue)}let w=D,H;if(D.patchFlag>0&&D.patchFlag&2048&&([w,H]=ry(D)),b&&_!==!1){const ss=Object.keys(b),{shapeFlag:q}=w;if(ss.length){if(q&7)c&&ss.some(At)&&(b=py(b,c)),w=ol(w,b);else if(!bt&&w.type!==ue){const z=Object.keys(i),ts=[],Bs=[];for(let fs=0,Cs=z.length;fs<Cs;fs++){const Rs=z[fs];Ro(Rs)?At(Rs)||ts.push(Rs[2].toLowerCase()+Rs.slice(3)):Bs.push(Rs)}Bs.length&&R(`Extraneous non-props attributes (${Bs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),ts.length&&R(`Extraneous non-emits event listeners (${ts.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return o.dirs&&(or(w)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),w=ol(w),w.dirs=w.dirs?w.dirs.concat(o.dirs):o.dirs),o.transition&&(or(w)||R("Component inside <Transition> renders non-element root node that cannot be animated."),w.transition=o.transition),H?H(w):D=w,xo(E),D}const ry=e=>{const l=e.children,o=e.dynamicChildren,t=yp(l);if(!t)return[e,void 0];const a=l.indexOf(t),r=o?o.indexOf(t):-1,c=p=>{l[a]=p,o&&(r>-1?o[r]=p:p.patchFlag>0&&(e.dynamicChildren=[...o,p]))};return[we(t),c]};function yp(e){let l;for(let o=0;o<e.length;o++){const t=e[o];if(Hl(t)){if(t.type!==ue||t.children==="v-if"){if(l)return;l=t}}else return}return l}const cy=e=>{let l;for(const o in e)(o==="class"||o==="style"||Ro(o))&&((l||(l={}))[o]=e[o]);return l},py=(e,l)=>{const o={};for(const t in e)(!At(t)||!(t.slice(9)in l))&&(o[t]=e[t]);return o},or=e=>e.shapeFlag&7||e.type===ue;function iy(e,l,o){const{props:t,children:a,component:r}=e,{props:c,children:p,patchFlag:i}=l,y=r.emitsOptions;if((a||p)&&ul||l.dirs||l.transition)return!0;if(o&&i>=0){if(i&1024)return!0;if(i&16)return t?tr(t,c,y):!!c;if(i&8){const u=l.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(c[f]!==t[f]&&!Ko(y,f))return!0}}}else return(a||p)&&(!p||!p.$stable)?!0:t===c?!1:t?c?tr(t,c,y):!0:!!c;return!1}function tr(e,l,o){const t=Object.keys(l);if(t.length!==Object.keys(e).length)return!0;for(let a=0;a<t.length;a++){const r=t[a];if(l[r]!==e[r]&&!Ko(o,r))return!0}return!1}function yy({vnode:e,parent:l},o){for(;l&&l.subTree===e;)(e=l.vnode).el=o,l=l.parent}const up=e=>e.__isSuspense;function uy(e,l){l&&l.pendingBranch?is(e)?l.effects.push(...e):l.effects.push(e):np(e)}function me(e,l){if(!Us)R("provide() can only be used inside setup().");else{let o=Us.provides;const t=Us.parent&&Us.parent.provides;t===o&&(o=Us.provides=Object.create(t)),o[e]=l}}function $(e,l,o=!1){const t=Us||Zs;if(t){const a=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return o&&ds(l)?l.call(t.proxy):l;R(`injection "${String(e)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function mn(e,l){return Da(e,null,l)}const ar={};function js(e,l,o){return ds(l)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Da(e,l,o)}function Da(e,l,{immediate:o,deep:t,flush:a,onTrack:r,onTrigger:c}=xs){l||(o!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),t!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const p=E=>{R("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},i=Us;let y,u=!1,d=!1;if(Es(e)?(y=()=>e.value,u=gt(e)):Tl(e)?(y=()=>e,t=!0):is(e)?(d=!0,u=e.some(E=>Tl(E)||gt(E)),y=()=>e.map(E=>{if(Es(E))return E.value;if(Tl(E))return $l(E);if(ds(E))return el(E,i,2);p(E)})):ds(e)?l?y=()=>el(e,i,2):y=()=>{if(!(i&&i.isUnmounted))return f&&f(),Se(e,i,3,[h])}:(y=ye,p(e)),l&&t){const E=y;y=()=>$l(E())}let f,h=E=>{f=b.onStop=()=>{el(E,i,4)}};if(qn)return h=ye,l?o&&Se(l,i,3,[y(),d?[]:void 0,h]):y(),ye;let m=d?[]:ar;const _=()=>{if(b.active)if(l){const E=b.run();(t||u||(d?E.some((w,H)=>Hn(w,m[H])):Hn(E,m)))&&(f&&f(),Se(l,i,3,[E,m===ar?void 0:m,h]),m=E)}else b.run()};_.allowRecurse=!!l;let D;a==="sync"?D=_:a==="post"?D=()=>Xs(_,i&&i.suspense):D=()=>Y8(_);const b=new pa(y,D);return b.onTrack=r,b.onTrigger=c,l?o?_():m=b.run():a==="post"?Xs(b.run.bind(b),i&&i.suspense):b.run(),()=>{b.stop(),i&&i.scope&&na(i.scope.effects,b)}}function dy(e,l,o){const t=this.proxy,a=zs(e)?e.includes(".")?dp(t,e):()=>t[e]:e.bind(t,t);let r;ds(l)?r=l:(r=l.handler,o=l);const c=Us;fn(this);const p=Da(a,r.bind(t),o);return c?fn(c):Nl(),p}function dp(e,l){const o=l.split(".");return()=>{let t=e;for(let a=0;a<o.length&&t;a++)t=t[o[a]];return t}}function $l(e,l){if(!Is(e)||e.__v_skip||(l=l||new Set,l.has(e)))return e;if(l.add(e),Es(e))$l(e.value,l);else if(is(e))for(let o=0;o<e.length;o++)$l(e[o],l);else if(Pc(e)||Pl(e))e.forEach(o=>{$l(o,l)});else if(Tc(e))for(const o in e)$l(e[o],l);return e}function fp(e,l){e.shapeFlag&6&&e.component?fp(e.component.subTree,l):e.shapeFlag&128?(e.ssContent.transition=l.clone(e.ssContent),e.ssFallback.transition=l.clone(e.ssFallback)):e.transition=l}function Vs(e){return ds(e)?{setup:e,name:e.name}:e}const rn=e=>!!e.type.__asyncLoader,_a=e=>e.type.__isKeepAlive,fy={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:l}){const o=Al(),t=o.ctx;if(!t.renderer)return()=>{const E=l.default&&l.default();return E&&E.length===1?E[0]:E};const a=new Map,r=new Set;let c=null;o.__v_cache=a;const p=o.suspense,{renderer:{p:i,m:y,um:u,o:{createElement:d}}}=t,f=d("div");t.activate=(E,w,H,ss,q)=>{const z=E.component;y(E,w,H,0,p),i(z.vnode,E,w,H,z,p,ss,E.slotScopeIds,q),Xs(()=>{z.isDeactivated=!1,z.a&&Fl(z.a);const ts=E.props&&E.props.onVnodeMounted;ts&&ge(ts,z.parent,E)},p),kt(z)},t.deactivate=E=>{const w=E.component;y(E,f,null,1,p),Xs(()=>{w.da&&Fl(w.da);const H=E.props&&E.props.onVnodeUnmounted;H&&ge(H,w.parent,E),w.isDeactivated=!0},p),kt(w)};function h(E){at(E),u(E,o,p,!0)}function m(E){a.forEach((w,H)=>{const ss=Kn(w.type);ss&&(!E||!E(ss))&&_(H)})}function _(E){const w=a.get(E);!c||w.type!==c.type?h(w):c&&at(c),a.delete(E),r.delete(E)}js(()=>[e.include,e.exclude],([E,w])=>{E&&m(H=>Sn(E,H)),w&&m(H=>!Sn(w,H))},{flush:"post",deep:!0});let D=null;const b=()=>{D!=null&&a.set(D,rt(o.subTree))};return Zo(b),mp(b),Ap(()=>{a.forEach(E=>{const{subTree:w,suspense:H}=o,ss=rt(w);if(E.type===ss.type){at(ss);const q=ss.component.da;q&&Xs(q,H);return}h(E)})}),()=>{if(D=null,!l.default)return null;const E=l.default(),w=E[0];if(E.length>1)return R("KeepAlive should contain exactly one component child."),c=null,E;if(!Hl(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return c=null,w;let H=rt(w);const ss=H.type,q=Kn(rn(H)?H.type.__asyncResolved||{}:ss),{include:z,exclude:ts,max:Bs}=e;if(z&&(!q||!Sn(z,q))||ts&&q&&Sn(ts,q))return c=H,w;const fs=H.key==null?ss:H.key,Cs=a.get(fs);return H.el&&(H=ol(H),w.shapeFlag&128&&(w.ssContent=H)),D=fs,Cs?(H.el=Cs.el,H.component=Cs.component,H.transition&&fp(H,H.transition),H.shapeFlag|=512,r.delete(fs),r.add(fs)):(r.add(fs),Bs&&r.size>parseInt(Bs,10)&&_(r.values().next().value)),H.shapeFlag|=256,c=H,up(w.type)?w:H}}},Bp=fy;function Sn(e,l){return is(e)?e.some(o=>Sn(o,l)):zs(e)?e.split(",").includes(l):e.test?e.test(l):!1}function By(e,l){hp(e,"a",l)}function hy(e,l){hp(e,"da",l)}function hp(e,l,o=Us){const t=e.__wdc||(e.__wdc=()=>{let a=o;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Yo(l,t,o),o){let a=o.parent;for(;a&&a.parent;)_a(a.parent.vnode)&&my(t,l,o,a),a=a.parent}}function my(e,l,o,t){const a=Yo(l,e,t,!0);Go(()=>{na(t[l],a)},o)}function at(e){let l=e.shapeFlag;l&256&&(l-=256),l&512&&(l-=512),e.shapeFlag=l}function rt(e){return e.shapeFlag&128?e.ssContent:e}function Yo(e,l,o=Us,t=!1){if(o){const a=o[e]||(o[e]=[]),r=l.__weh||(l.__weh=(...c)=>{if(o.isUnmounted)return;Ul(),fn(o);const p=Se(l,o,e,c);return Nl(),ql(),p});return t?a.unshift(r):a.push(r),r}else{const a=_l(Ba[e].replace(/ hook$/,""));R(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const tl=e=>(l,o=Us)=>(!qn||e==="sp")&&Yo(e,l,o),Ay=tl("bm"),Zo=tl("m"),vy=tl("bu"),mp=tl("u"),Ap=tl("bum"),Go=tl("um"),Dy=tl("sp"),_y=tl("rtg"),Cy=tl("rtc");function gy(e,l=Us){Yo("ec",e,l)}function vp(e){Xi(e)&&R("Do not use built-in directive ids as custom directive id: "+e)}function He(e,l){const o=Zs;if(o===null)return R("withDirectives can only be used inside render functions."),e;const t=st(o)||o.proxy,a=e.dirs||(e.dirs=[]);for(let r=0;r<l.length;r++){let[c,p,i,y=xs]=l[r];ds(c)&&(c={mounted:c,updated:c}),c.deep&&$l(p),a.push({dir:c,instance:t,value:p,oldValue:void 0,arg:i,modifiers:y})}return e}function vl(e,l,o,t){const a=e.dirs,r=l&&l.dirs;for(let c=0;c<a.length;c++){const p=a[c];r&&(p.oldValue=r[c].value);let i=p.dir[t];i&&(Ul(),Se(i,o,8,[e.el,p,e,l]),ql())}}const wt="components",Ey="directives";function Dp(e,l){return _p(wt,e,!0,l)||e}const Fy=Symbol();function Ca(e){return _p(Ey,e)}function _p(e,l,o=!0,t=!1){const a=Zs||Us;if(a){const r=a.type;if(e===wt){const p=Kn(r,!1);if(p&&(p===l||p===Ve(l)||p===un(Ve(l))))return r}const c=rr(a[e]||r[e],l)||rr(a.appContext[e],l);if(!c&&t)return r;if(o&&!c){const p=e===wt?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";R(`Failed to resolve ${e.slice(0,-1)}: ${l}${p}`)}return c}else R(`resolve${un(e.slice(0,-1))} can only be used in render() or setup().`)}function rr(e,l){return e&&(e[l]||e[Ve(l)]||e[un(Ve(l))])}function no(e,l,o,t){let a;const r=o&&o[t];if(is(e)||zs(e)){a=new Array(e.length);for(let c=0,p=e.length;c<p;c++)a[c]=l(e[c],c,void 0,r&&r[c])}else if(typeof e=="number"){Number.isInteger(e)||R(`The v-for range expect an integer value but got ${e}.`),a=new Array(e);for(let c=0;c<e;c++)a[c]=l(c+1,c,void 0,r&&r[c])}else if(Is(e))if(e[Symbol.iterator])a=Array.from(e,(c,p)=>l(c,p,void 0,r&&r[p]));else{const c=Object.keys(e);a=new Array(c.length);for(let p=0,i=c.length;p<i;p++){const y=c[p];a[p]=l(e[y],y,p,r&&r[p])}}else a=[];return o&&(o[t]=a),a}function nl(e,l,o={},t,a){if(Zs.isCE||Zs.parent&&rn(Zs.parent)&&Zs.parent.isCE)return F("slot",l==="default"?null:{name:l},t&&t());let r=e[l];r&&r.length>1&&(R("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),v();const c=r&&Cp(r(o)),p=M(ks,{key:o.key||`_${l}`},c||(t?t():[]),c&&e._===1?64:-2);return!a&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),r&&r._c&&(r._d=!0),p}function Cp(e){return e.some(l=>Hl(l)?!(l.type===ue||l.type===ks&&!Cp(l.children)):!0)?e:null}const $t=e=>e?Np(e)?st(e)||e.proxy:$t(e.parent):null,dn=Ks(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>on(e.props),$attrs:e=>on(e.attrs),$slots:e=>on(e.slots),$refs:e=>on(e.refs),$parent:e=>$t(e.parent),$root:e=>$t(e.root),$emit:e=>e.emit,$options:e=>Fp(e),$forceUpdate:e=>e.f||(e.f=()=>ma(e.update)),$nextTick:e=>e.n||(e.n=Pe.bind(e.proxy)),$watch:e=>dy.bind(e)}),ga=e=>e==="_"||e==="$",gp={get({_:e},l){const{ctx:o,setupState:t,data:a,props:r,accessCache:c,type:p,appContext:i}=e;if(l==="__isVue")return!0;if(t!==xs&&t.__isScriptSetup&&vs(t,l))return t[l];let y;if(l[0]!=="$"){const h=c[l];if(h!==void 0)switch(h){case 1:return t[l];case 2:return a[l];case 4:return o[l];case 3:return r[l]}else{if(t!==xs&&vs(t,l))return c[l]=1,t[l];if(a!==xs&&vs(a,l))return c[l]=2,a[l];if((y=e.propsOptions[0])&&vs(y,l))return c[l]=3,r[l];if(o!==xs&&vs(o,l))return c[l]=4,o[l];St&&(c[l]=0)}}const u=dn[l];let d,f;if(u)return l==="$attrs"&&(De(e,"get",l),ko()),u(e);if((d=p.__cssModules)&&(d=d[l]))return d;if(o!==xs&&vs(o,l))return c[l]=4,o[l];if(f=i.config.globalProperties,vs(f,l))return f[l];Zs&&(!zs(l)||l.indexOf("__v")!==0)&&(a!==xs&&ga(l[0])&&vs(a,l)?R(`Property ${JSON.stringify(l)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Zs&&R(`Property ${JSON.stringify(l)} was accessed during render but is not defined on instance.`))},set({_:e},l,o){const{data:t,setupState:a,ctx:r}=e;return a!==xs&&vs(a,l)?(a[l]=o,!0):t!==xs&&vs(t,l)?(t[l]=o,!0):vs(e.props,l)?(R(`Attempting to mutate prop "${l}". Props are readonly.`,e),!1):l[0]==="$"&&l.slice(1)in e?(R(`Attempting to mutate public property "${l}". Properties starting with $ are reserved and readonly.`,e),!1):(l in e.appContext.config.globalProperties?Object.defineProperty(r,l,{enumerable:!0,configurable:!0,value:o}):r[l]=o,!0)},has({_:{data:e,setupState:l,accessCache:o,ctx:t,appContext:a,propsOptions:r}},c){let p;return!!o[c]||e!==xs&&vs(e,c)||l!==xs&&vs(l,c)||(p=r[0])&&vs(p,c)||vs(t,c)||vs(dn,c)||vs(a.config.globalProperties,c)},defineProperty(e,l,o){return o.get!=null?e._.accessCache[l]=0:vs(o,"value")&&this.set(e,l,o.value,null),Reflect.defineProperty(e,l,o)}};gp.ownKeys=e=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function xy(e){const l={};return Object.defineProperty(l,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(dn).forEach(o=>{Object.defineProperty(l,o,{configurable:!0,enumerable:!1,get:()=>dn[o](e),set:ye})}),l}function ky(e){const{ctx:l,propsOptions:[o]}=e;o&&Object.keys(o).forEach(t=>{Object.defineProperty(l,t,{enumerable:!0,configurable:!0,get:()=>e.props[t],set:ye})})}function by(e){const{ctx:l,setupState:o}=e;Object.keys(hs(o)).forEach(t=>{if(!o.__isScriptSetup){if(ga(t[0])){R(`setup() return property ${JSON.stringify(t)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(l,t,{enumerable:!0,configurable:!0,get:()=>o[t],set:ye})}})}function wy(){const e=Object.create(null);return(l,o)=>{e[o]?R(`${l} property "${o}" is already defined in ${e[o]}.`):e[o]=l}}let St=!0;function $y(e){const l=Fp(e),o=e.proxy,t=e.ctx;St=!1,l.beforeCreate&&cr(l.beforeCreate,e,"bc");const{data:a,computed:r,methods:c,watch:p,provide:i,inject:y,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:_,deactivated:D,beforeDestroy:b,beforeUnmount:E,destroyed:w,unmounted:H,render:ss,renderTracked:q,renderTriggered:z,errorCaptured:ts,serverPrefetch:Bs,expose:fs,inheritAttrs:Cs,components:Rs,directives:Js,filters:Qs}=l,Ps=wy();{const[Q]=e.propsOptions;if(Q)for(const rs in Q)Ps("Props",rs)}if(y&&Sy(y,t,Ps,e.appContext.config.unwrapInjectedRef),c)for(const Q in c){const rs=c[Q];ds(rs)?(Object.defineProperty(t,Q,{value:rs.bind(o),configurable:!0,enumerable:!0,writable:!0}),Ps("Methods",Q)):R(`Method "${Q}" has type "${typeof rs}" in the component definition. Did you reference the function correctly?`)}if(a){ds(a)||R("The data option must be a function. Plain object usage is no longer supported.");const Q=a.call(o,o);if(ta(Q)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Is(Q))R("data() should return an object.");else{e.data=ee(Q);for(const rs in Q)Ps("Data",rs),ga(rs[0])||Object.defineProperty(t,rs,{configurable:!0,enumerable:!0,get:()=>Q[rs],set:ye})}}if(St=!0,r)for(const Q in r){const rs=r[Q],As=ds(rs)?rs.bind(o,o):ds(rs.get)?rs.get.bind(o,o):ye;As===ye&&R(`Computed property "${Q}" has no getter.`);const bs=!ds(rs)&&ds(rs.set)?rs.set.bind(o):()=>{R(`Write operation failed: computed property "${Q}" is readonly.`)},Ce=T({get:As,set:bs});Object.defineProperty(t,Q,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:ie=>Ce.value=ie}),Ps("Computed",Q)}if(p)for(const Q in p)Ep(p[Q],t,o,Q);if(i){const Q=ds(i)?i.call(o):i;Reflect.ownKeys(Q).forEach(rs=>{me(rs,Q[rs])})}u&&cr(u,e,"c");function Ns(Q,rs){is(rs)?rs.forEach(As=>Q(As.bind(o))):rs&&Q(rs.bind(o))}if(Ns(Ay,d),Ns(Zo,f),Ns(vy,h),Ns(mp,m),Ns(By,_),Ns(hy,D),Ns(gy,ts),Ns(Cy,q),Ns(_y,z),Ns(Ap,E),Ns(Go,H),Ns(Dy,Bs),is(fs))if(fs.length){const Q=e.exposed||(e.exposed={});fs.forEach(rs=>{Object.defineProperty(Q,rs,{get:()=>o[rs],set:As=>o[rs]=As})})}else e.exposed||(e.exposed={});ss&&e.render===ye&&(e.render=ss),Cs!=null&&(e.inheritAttrs=Cs),Rs&&(e.components=Rs),Js&&(e.directives=Js)}function Sy(e,l,o=ye,t=!1){is(e)&&(e=Pt(e));for(const a in e){const r=e[a];let c;Is(r)?"default"in r?c=$(r.from||a,r.default,!0):c=$(r.from||a):c=$(r),Es(c)?t?Object.defineProperty(l,a,{enumerable:!0,configurable:!0,get:()=>c.value,set:p=>c.value=p}):(R(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),l[a]=c):l[a]=c,o("Inject",a)}}function cr(e,l,o){Se(is(e)?e.map(t=>t.bind(l.proxy)):e.bind(l.proxy),l,o)}function Ep(e,l,o,t){const a=t.includes(".")?dp(o,t):()=>o[t];if(zs(e)){const r=l[e];ds(r)?js(a,r):R(`Invalid watch handler specified by key "${e}"`,r)}else if(ds(e))js(a,e.bind(o));else if(Is(e))if(is(e))e.forEach(r=>Ep(r,l,o,t));else{const r=ds(e.handler)?e.handler.bind(o):l[e.handler];ds(r)?js(a,r,e):R(`Invalid watch handler specified by key "${e.handler}"`,r)}else R(`Invalid watch option: "${t}"`,e)}function Fp(e){const l=e.type,{mixins:o,extends:t}=l,{mixins:a,optionsCache:r,config:{optionMergeStrategies:c}}=e.appContext,p=r.get(l);let i;return p?i=p:!a.length&&!o&&!t?i=l:(i={},a.length&&a.forEach(y=>bo(i,y,c,!0)),bo(i,l,c)),r.set(l,i),i}function bo(e,l,o,t=!1){const{mixins:a,extends:r}=l;r&&bo(e,r,o,!0),a&&a.forEach(c=>bo(e,c,o,!0));for(const c in l)if(t&&c==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const p=Py[c]||o&&o[c];e[c]=p?p(e[c],l[c]):l[c]}return e}const Py={data:pr,props:El,emits:El,methods:El,computed:El,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:El,directives:El,watch:Ty,provide:pr,inject:Oy};function pr(e,l){return l?e?function(){return Ks(ds(e)?e.call(this,this):e,ds(l)?l.call(this,this):l)}:l:e}function Oy(e,l){return El(Pt(e),Pt(l))}function Pt(e){if(is(e)){const l={};for(let o=0;o<e.length;o++)l[e[o]]=e[o];return l}return e}function te(e,l){return e?[...new Set([].concat(e,l))]:l}function El(e,l){return e?Ks(Ks(Object.create(null),e),l):l}function Ty(e,l){if(!e)return l;if(!l)return e;const o=Ks(Object.create(null),e);for(const t in l)o[t]=te(e[t],l[t]);return o}function My(e,l,o,t=!1){const a={},r={};Co(r,Xo,1),e.propsDefaults=Object.create(null),xp(e,l,a,r);for(const c in e.propsOptions[0])c in a||(a[c]=void 0);bp(l||{},a,e),o?e.props=t?a:P8(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function Ny(e,l,o,t){const{props:a,attrs:r,vnode:{patchFlag:c}}=e,p=hs(a),[i]=e.propsOptions;let y=!1;if(!(e.type.__hmrId||e.parent&&e.parent.type.__hmrId)&&(t||c>0)&&!(c&16)){if(c&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ko(e.emitsOptions,f))continue;const h=l[f];if(i)if(vs(r,f))h!==r[f]&&(r[f]=h,y=!0);else{const m=Ve(f);a[m]=Ot(i,p,m,h,e,!1)}else h!==r[f]&&(r[f]=h,y=!0)}}}else{xp(e,l,a,r)&&(y=!0);let u;for(const d in p)(!l||!vs(l,d)&&((u=yn(d))===d||!vs(l,u)))&&(i?o&&(o[d]!==void 0||o[u]!==void 0)&&(a[d]=Ot(i,p,d,void 0,e,!0)):delete a[d]);if(r!==p)for(const d in r)(!l||!vs(l,d))&&(delete r[d],y=!0)}y&&ll(e,"set","$attrs"),bp(l||{},a,e)}function xp(e,l,o,t){const[a,r]=e.propsOptions;let c=!1,p;if(l)for(let i in l){if(fo(i))continue;const y=l[i];let u;a&&vs(a,u=Ve(i))?!r||!r.includes(u)?o[u]=y:(p||(p={}))[u]=y:Ko(e.emitsOptions,i)||(!(i in t)||y!==t[i])&&(t[i]=y,c=!0)}if(r){const i=hs(o),y=p||xs;for(let u=0;u<r.length;u++){const d=r[u];o[d]=Ot(a,i,d,y[d],e,!vs(y,d))}}return c}function Ot(e,l,o,t,a,r){const c=e[o];if(c!=null){const p=vs(c,"default");if(p&&t===void 0){const i=c.default;if(c.type!==Function&&ds(i)){const{propsDefaults:y}=a;o in y?t=y[o]:(fn(a),t=y[o]=i.call(null,l),Nl())}else t=i}c[0]&&(r&&!p?t=!1:c[1]&&(t===""||t===yn(o))&&(t=!0))}return t}function kp(e,l,o=!1){const t=l.propsCache,a=t.get(e);if(a)return a;const r=e.props,c={},p=[];let i=!1;if(!ds(e)){const u=d=>{i=!0;const[f,h]=kp(d,l,!0);Ks(c,f),h&&p.push(...h)};!o&&l.mixins.length&&l.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!i)return t.set(e,an),an;if(is(r))for(let u=0;u<r.length;u++){zs(r[u])||R("props must be strings when using array syntax.",r[u]);const d=Ve(r[u]);ir(d)&&(c[d]=xs)}else if(r){Is(r)||R("invalid props options",r);for(const u in r){const d=Ve(u);if(ir(d)){const f=r[u],h=c[d]=is(f)||ds(f)?{type:f}:f;if(h){const m=ur(Boolean,h.type),_=ur(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||vs(h,"default"))&&p.push(d)}}}}const y=[c,p];return t.set(e,y),y}function ir(e){return e[0]!=="$"?!0:(R(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Tt(e){const l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:e===null?"null":""}function yr(e,l){return Tt(e)===Tt(l)}function ur(e,l){return is(l)?l.findIndex(o=>yr(o,e)):ds(l)&&yr(l,e)?0:-1}function bp(e,l,o){const t=hs(l),a=o.propsOptions[0];for(const r in a){let c=a[r];c!=null&&Ly(r,t[r],c,!vs(e,r)&&!vs(e,yn(r)))}}function Ly(e,l,o,t){const{type:a,required:r,validator:c}=o;if(r&&t){R('Missing required prop: "'+e+'"');return}if(!(l==null&&!o.required)){if(a!=null&&a!==!0){let p=!1;const i=is(a)?a:[a],y=[];for(let u=0;u<i.length&&!p;u++){const{valid:d,expectedType:f}=Iy(l,i[u]);y.push(f||""),p=d}if(!p){R(Vy(e,l,y));return}}c&&!c(l)&&R('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Ry=eo("String,Number,Boolean,Function,Symbol,BigInt");function Iy(e,l){let o;const t=Tt(l);if(Ry(t)){const a=typeof e;o=a===t.toLowerCase(),!o&&a==="object"&&(o=e instanceof l)}else t==="Object"?o=Is(e):t==="Array"?o=is(e):t==="null"?o=e===null:o=e instanceof l;return{valid:o,expectedType:t}}function Vy(e,l,o){let t=`Invalid prop: type check failed for prop "${e}". Expected ${o.map(un).join(" | ")}`;const a=o[0],r=aa(l),c=dr(l,a),p=dr(l,r);return o.length===1&&fr(a)&&!jy(a,r)&&(t+=` with value ${c}`),t+=`, got ${r} `,fr(r)&&(t+=`with value ${p}.`),t}function dr(e,l){return l==="String"?`"${e}"`:l==="Number"?`${Number(e)}`:`${e}`}function fr(e){return["string","number","boolean"].some(o=>e.toLowerCase()===o)}function jy(...e){return e.some(l=>l.toLowerCase()==="boolean")}const wp=e=>e[0]==="_"||e==="$stable",Ea=e=>is(e)?e.map(we):[we(e)],Hy=(e,l,o)=>{if(l._n)return l;const t=C((...a)=>(Us&&R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ea(l(...a))),o);return t._c=!1,t},$p=(e,l,o)=>{const t=e._ctx;for(const a in e){if(wp(a))continue;const r=e[a];if(ds(r))l[a]=Hy(a,r,t);else if(r!=null){R(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const c=Ea(r);l[a]=()=>c}}},Sp=(e,l)=>{_a(e.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const o=Ea(l);e.slots.default=()=>o},zy=(e,l)=>{if(e.vnode.shapeFlag&32){const o=l._;o?(e.slots=hs(l),Co(l,"_",o)):$p(l,e.slots={})}else e.slots={},l&&Sp(e,l);Co(e.slots,Xo,1)},Wy=(e,l,o)=>{const{vnode:t,slots:a}=e;let r=!0,c=xs;if(t.shapeFlag&32){const p=l._;p?ul?Ks(a,l):o&&p===1?r=!1:(Ks(a,l),!o&&p===1&&delete a._):(r=!l.$stable,$p(l,a)),c=l}else l&&(Sp(e,l),c={default:1});if(r)for(const p in a)!wp(p)&&!(p in c)&&delete a[p]};function Pp(){return{app:null,config:{isNativeTag:Sc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uy=0;function qy(e,l){return function(t,a=null){ds(t)||(t=Object.assign({},t)),a!=null&&!Is(a)&&(R("root props passed to app.mount() must be an object."),a=null);const r=Pp(),c=new Set;let p=!1;const i=r.app={_uid:Uy++,_component:t,_props:a,_container:null,_context:r,_instance:null,version:Ar,get config(){return r.config},set config(y){R("app.config cannot be replaced. Modify individual options instead.")},use(y,...u){return c.has(y)?R("Plugin has already been applied to target app."):y&&ds(y.install)?(c.add(y),y.install(i,...u)):ds(y)?(c.add(y),y(i,...u)):R('A plugin must either be a function or an object with an "install" function.'),i},mixin(y){return r.mixins.includes(y)?R("Mixin has already been applied to target app"+(y.name?`: ${y.name}`:"")):r.mixins.push(y),i},component(y,u){return Lt(y,r.config),u?(r.components[y]&&R(`Component "${y}" has already been registered in target app.`),r.components[y]=u,i):r.components[y]},directive(y,u){return vp(y),u?(r.directives[y]&&R(`Directive "${y}" has already been registered in target app.`),r.directives[y]=u,i):r.directives[y]},mount(y,u,d){if(p)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{y.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=F(t,a);return f.appContext=r,r.reload=()=>{e(ol(f),y,d)},u&&l?l(f,y):e(f,y,d),p=!0,i._container=y,y.__vue_app__=i,i._instance=f.component,sy(i,Ar),st(f.component)||f.component.proxy}},unmount(){p?(e(null,i._container),i._instance=null,ey(i),delete i._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(y,u){return y in r.provides&&R(`App already provides property with key "${String(y)}". It will be overwritten with the new value.`),r.provides[y]=u,i}};return i}}function Mt(e,l,o,t,a=!1){if(is(e)){e.forEach((f,h)=>Mt(f,l&&(is(l)?l[h]:l),o,t,a));return}if(rn(t)&&!a)return;const r=t.shapeFlag&4?st(t.component)||t.component.proxy:t.el,c=a?null:r,{i:p,r:i}=e;if(!p){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const y=l&&l.r,u=p.refs===xs?p.refs={}:p.refs,d=p.setupState;if(y!=null&&y!==i&&(zs(y)?(u[y]=null,vs(d,y)&&(d[y]=null)):Es(y)&&(y.value=null)),ds(i))el(i,p,12,[c,u]);else{const f=zs(i),h=Es(i);if(f||h){const m=()=>{if(e.f){const _=f?u[i]:i.value;a?is(_)&&na(_,r):is(_)?_.includes(r)||_.push(r):f?(u[i]=[r],vs(d,i)&&(d[i]=u[i])):(i.value=[r],e.k&&(u[e.k]=i.value))}else f?(u[i]=c,vs(d,i)&&(d[i]=c)):h?(i.value=c,e.k&&(u[e.k]=c)):R("Invalid template ref type:",i,`(${typeof i})`)};c?(m.id=-1,Xs(m,o)):m()}else R("Invalid template ref type:",i,`(${typeof i})`)}}let Dn,il;function Ke(e,l){e.appContext.config.performance&&wo()&&il.mark(`vue-${l}-${e.uid}`),ny(e,l,wo()?il.now():Date.now())}function Je(e,l){if(e.appContext.config.performance&&wo()){const o=`vue-${l}-${e.uid}`,t=o+":end";il.mark(t),il.measure(`<${et(e,e.type)}> ${l}`,o,t),il.clearMarks(o),il.clearMarks(t)}oy(e,l,wo()?il.now():Date.now())}function wo(){return Dn!==void 0||(typeof window<"u"&&window.performance?(Dn=!0,il=window.performance):Dn=!1),Dn}function Ky(){const e=[];if(e.length){const l=e.length>1;console.warn(`Feature flag${l?"s":""} ${e.join(", ")} ${l?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Xs=uy;function Jy(e){return Yy(e)}function Yy(e,l){Ky();const o=Mc();o.__VUE__=!0,rp(o.__VUE_DEVTOOLS_GLOBAL_HOOK__,o);const{insert:t,remove:a,patchProp:r,createElement:c,createText:p,createComment:i,setText:y,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=ye,cloneNode:m,insertStaticContent:_}=e,D=(B,A,x,N=null,O=null,V=null,W=!1,I=null,j=ul?!1:!!A.dynamicChildren)=>{if(B===A)return;B&&!_n(B,A)&&(N=ms(B),de(B,O,V,!0),B=null),A.patchFlag===-2&&(j=!1,A.dynamicChildren=null);const{type:L,ref:os,shapeFlag:ls}=A;switch(L){case Qo:b(B,A,x,N);break;case ue:E(B,A,x,N);break;case mo:B==null?w(A,x,N,W):H(B,A,x,W);break;case ks:Qs(B,A,x,N,O,V,W,I,j);break;default:ls&1?z(B,A,x,N,O,V,W,I,j):ls&6?Ps(B,A,x,N,O,V,W,I,j):ls&64||ls&128?L.process(B,A,x,N,O,V,W,I,j,cs):R("Invalid VNode type:",L,`(${typeof L})`)}os!=null&&O&&Mt(os,B&&B.ref,V,A||B,!A)},b=(B,A,x,N)=>{if(B==null)t(A.el=p(A.children),x,N);else{const O=A.el=B.el;A.children!==B.children&&y(O,A.children)}},E=(B,A,x,N)=>{B==null?t(A.el=i(A.children||""),x,N):A.el=B.el},w=(B,A,x,N)=>{[B.el,B.anchor]=_(B.children,A,x,N,B.el,B.anchor)},H=(B,A,x,N)=>{if(A.children!==B.children){const O=f(B.anchor);q(B),[A.el,A.anchor]=_(A.children,x,O,N)}else A.el=B.el,A.anchor=B.anchor},ss=({el:B,anchor:A},x,N)=>{let O;for(;B&&B!==A;)O=f(B),t(B,x,N),B=O;t(A,x,N)},q=({el:B,anchor:A})=>{let x;for(;B&&B!==A;)x=f(B),a(B),B=x;a(A)},z=(B,A,x,N,O,V,W,I,j)=>{W=W||A.type==="svg",B==null?ts(A,x,N,O,V,W,I,j):Cs(B,A,O,V,W,I,j)},ts=(B,A,x,N,O,V,W,I)=>{let j,L;const{type:os,props:ls,shapeFlag:as,transition:us,patchFlag:gs,dirs:Ss}=B;{if(j=B.el=c(B.type,V,ls&&ls.is,ls),as&8?u(j,B.children):as&16&&fs(B.children,j,null,N,O,V&&os!=="foreignObject",W,I),Ss&&vl(B,null,N,"created"),ls){for(const Ls in ls)Ls!=="value"&&!fo(Ls)&&r(j,Ls,null,ls[Ls],V,B.children,N,O,X);"value"in ls&&r(j,"value",null,ls.value),(L=ls.onVnodeBeforeMount)&&ge(L,N,B)}Bs(j,B,B.scopeId,W,N)}Object.defineProperty(j,"__vnode",{value:B,enumerable:!1}),Object.defineProperty(j,"__vueParentComponent",{value:N,enumerable:!1}),Ss&&vl(B,null,N,"beforeMount");const Os=(!O||O&&!O.pendingBranch)&&us&&!us.persisted;Os&&us.beforeEnter(j),t(j,A,x),((L=ls&&ls.onVnodeMounted)||Os||Ss)&&Xs(()=>{L&&ge(L,N,B),Os&&us.enter(j),Ss&&vl(B,null,N,"mounted")},O)},Bs=(B,A,x,N,O)=>{if(x&&h(B,x),N)for(let V=0;V<N.length;V++)h(B,N[V]);if(O){let V=O.subTree;if(V.patchFlag>0&&V.patchFlag&2048&&(V=yp(V.children)||V),A===V){const W=O.vnode;Bs(B,W,W.scopeId,W.slotScopeIds,O.parent)}}},fs=(B,A,x,N,O,V,W,I,j=0)=>{for(let L=j;L<B.length;L++){const os=B[L]=I?cl(B[L]):we(B[L]);D(null,os,A,x,N,O,V,W,I)}},Cs=(B,A,x,N,O,V,W)=>{const I=A.el=B.el;let{patchFlag:j,dynamicChildren:L,dirs:os}=A;j|=B.patchFlag&16;const ls=B.props||xs,as=A.props||xs;let us;x&&Dl(x,!1),(us=as.onVnodeBeforeUpdate)&&ge(us,x,A,B),os&&vl(A,B,x,"beforeUpdate"),x&&Dl(x,!0),ul&&(j=0,W=!1,L=null);const gs=O&&A.type!=="foreignObject";if(L?(Rs(B.dynamicChildren,L,I,x,N,gs,V),x&&x.type.__hmrId&&Nn(B,A)):W||bs(B,A,I,null,x,N,gs,V,!1),j>0){if(j&16)Js(I,A,ls,as,x,N,O);else if(j&2&&ls.class!==as.class&&r(I,"class",null,as.class,O),j&4&&r(I,"style",ls.style,as.style,O),j&8){const Ss=A.dynamicProps;for(let Os=0;Os<Ss.length;Os++){const Ls=Ss[Os],xe=ls[Ls],Yl=as[Ls];(Yl!==xe||Ls==="value")&&r(I,Ls,xe,Yl,O,B.children,x,N,X)}}j&1&&B.children!==A.children&&u(I,A.children)}else!W&&L==null&&Js(I,A,ls,as,x,N,O);((us=as.onVnodeUpdated)||os)&&Xs(()=>{us&&ge(us,x,A,B),os&&vl(A,B,x,"updated")},N)},Rs=(B,A,x,N,O,V,W)=>{for(let I=0;I<A.length;I++){const j=B[I],L=A[I],os=j.el&&(j.type===ks||!_n(j,L)||j.shapeFlag&70)?d(j.el):x;D(j,L,os,null,N,O,V,W,!0)}},Js=(B,A,x,N,O,V,W)=>{if(x!==N){for(const I in N){if(fo(I))continue;const j=N[I],L=x[I];j!==L&&I!=="value"&&r(B,I,L,j,W,A.children,O,V,X)}if(x!==xs)for(const I in x)!fo(I)&&!(I in N)&&r(B,I,x[I],null,W,A.children,O,V,X);"value"in N&&r(B,"value",x.value,N.value)}},Qs=(B,A,x,N,O,V,W,I,j)=>{const L=A.el=B?B.el:p(""),os=A.anchor=B?B.anchor:p("");let{patchFlag:ls,dynamicChildren:as,slotScopeIds:us}=A;(ul||ls&2048)&&(ls=0,j=!1,as=null),us&&(I=I?I.concat(us):us),B==null?(t(L,x,N),t(os,x,N),fs(A.children,x,os,O,V,W,I,j)):ls>0&&ls&64&&as&&B.dynamicChildren?(Rs(B.dynamicChildren,as,x,O,V,W,I),O&&O.type.__hmrId?Nn(B,A):(A.key!=null||O&&A===O.subTree)&&Nn(B,A,!0)):bs(B,A,x,os,O,V,W,I,j)},Ps=(B,A,x,N,O,V,W,I,j)=>{A.slotScopeIds=I,B==null?A.shapeFlag&512?O.ctx.activate(A,x,N,W,j):Ns(A,x,N,O,V,W,j):Q(B,A,j)},Ns=(B,A,x,N,O,V,W)=>{const I=B.component=tu(B,N,O);if(I.type.__hmrId&&Z8(I),Bo(B),Ke(I,"mount"),_a(B)&&(I.ctx.renderer=cs),Ke(I,"init"),ru(I),Je(I,"init"),I.asyncDep){if(O&&O.registerDep(I,rs),!B.el){const j=I.subTree=F(ue);E(null,j,A,x)}return}rs(I,B,A,x,O,V,W),ho(),Je(I,"mount")},Q=(B,A,x)=>{const N=A.component=B.component;if(iy(B,A,x))if(N.asyncDep&&!N.asyncResolved){Bo(A),As(N,A,x),ho();return}else N.next=A,J8(N.update),N.update();else A.el=B.el,N.vnode=A},rs=(B,A,x,N,O,V,W)=>{const I=()=>{if(B.isMounted){let{next:os,bu:ls,u:as,parent:us,vnode:gs}=B,Ss=os,Os;Bo(os||B.vnode),Dl(B,!1),os?(os.el=gs.el,As(B,os,W)):os=gs,ls&&Fl(ls),(Os=os.props&&os.props.onVnodeBeforeUpdate)&&ge(Os,us,os,gs),Dl(B,!0),Ke(B,"render");const Ls=tt(B);Je(B,"render");const xe=B.subTree;B.subTree=Ls,Ke(B,"patch"),D(xe,Ls,d(xe.el),ms(xe),B,O,V),Je(B,"patch"),os.el=Ls.el,Ss===null&&yy(B,Ls.el),as&&Xs(as,O),(Os=os.props&&os.props.onVnodeUpdated)&&Xs(()=>ge(Os,us,os,gs),O),cp(B),ho()}else{let os;const{el:ls,props:as}=A,{bm:us,m:gs,parent:Ss}=B,Os=rn(A);if(Dl(B,!1),us&&Fl(us),!Os&&(os=as&&as.onVnodeBeforeMount)&&ge(os,Ss,A),Dl(B,!0),ls&&Ms){const Ls=()=>{Ke(B,"render"),B.subTree=tt(B),Je(B,"render"),Ke(B,"hydrate"),Ms(ls,B.subTree,B,O,null),Je(B,"hydrate")};Os?A.type.__asyncLoader().then(()=>!B.isUnmounted&&Ls()):Ls()}else{Ke(B,"render");const Ls=B.subTree=tt(B);Je(B,"render"),Ke(B,"patch"),D(null,Ls,x,N,B,O,V),Je(B,"patch"),A.el=Ls.el}if(gs&&Xs(gs,O),!Os&&(os=as&&as.onVnodeMounted)){const Ls=A;Xs(()=>ge(os,Ss,Ls),O)}(A.shapeFlag&256||Ss&&rn(Ss.vnode)&&Ss.vnode.shapeFlag&256)&&B.a&&Xs(B.a,O),B.isMounted=!0,kt(B),A=x=N=null}},j=B.effect=new pa(I,()=>ma(L),B.scope),L=B.update=()=>j.run();L.id=B.uid,Dl(B,!0),j.onTrack=B.rtc?os=>Fl(B.rtc,os):void 0,j.onTrigger=B.rtg?os=>Fl(B.rtg,os):void 0,L.ownerInstance=B,L()},As=(B,A,x)=>{A.component=B;const N=B.vnode.props;B.vnode=A,B.next=null,Ny(B,A.props,N,x),Wy(B,A.children,x),Ul(),qo(void 0,B.update),ql()},bs=(B,A,x,N,O,V,W,I,j=!1)=>{const L=B&&B.children,os=B?B.shapeFlag:0,ls=A.children,{patchFlag:as,shapeFlag:us}=A;if(as>0){if(as&128){ie(L,ls,x,N,O,V,W,I,j);return}else if(as&256){Ce(L,ls,x,N,O,V,W,I,j);return}}us&8?(os&16&&X(L,O,V),ls!==L&&u(x,ls)):os&16?us&16?ie(L,ls,x,N,O,V,W,I,j):X(L,O,V,!0):(os&8&&u(x,""),us&16&&fs(ls,x,N,O,V,W,I,j))},Ce=(B,A,x,N,O,V,W,I,j)=>{B=B||an,A=A||an;const L=B.length,os=A.length,ls=Math.min(L,os);let as;for(as=0;as<ls;as++){const us=A[as]=j?cl(A[as]):we(A[as]);D(B[as],us,x,null,O,V,W,I,j)}L>os?X(B,O,V,!0,!1,ls):fs(A,x,N,O,V,W,I,j,ls)},ie=(B,A,x,N,O,V,W,I,j)=>{let L=0;const os=A.length;let ls=B.length-1,as=os-1;for(;L<=ls&&L<=as;){const us=B[L],gs=A[L]=j?cl(A[L]):we(A[L]);if(_n(us,gs))D(us,gs,x,null,O,V,W,I,j);else break;L++}for(;L<=ls&&L<=as;){const us=B[ls],gs=A[as]=j?cl(A[as]):we(A[as]);if(_n(us,gs))D(us,gs,x,null,O,V,W,I,j);else break;ls--,as--}if(L>ls){if(L<=as){const us=as+1,gs=us<os?A[us].el:N;for(;L<=as;)D(null,A[L]=j?cl(A[L]):we(A[L]),x,gs,O,V,W,I,j),L++}}else if(L>as)for(;L<=ls;)de(B[L],O,V,!0),L++;else{const us=L,gs=L,Ss=new Map;for(L=gs;L<=as;L++){const oe=A[L]=j?cl(A[L]):we(A[L]);oe.key!=null&&(Ss.has(oe.key)&&R("Duplicate keys found during update:",JSON.stringify(oe.key),"Make sure keys are unique."),Ss.set(oe.key,L))}let Os,Ls=0;const xe=as-gs+1;let Yl=!1,qa=0;const vn=new Array(xe);for(L=0;L<xe;L++)vn[L]=0;for(L=us;L<=ls;L++){const oe=B[L];if(Ls>=xe){de(oe,O,V,!0);continue}let Ne;if(oe.key!=null)Ne=Ss.get(oe.key);else for(Os=gs;Os<=as;Os++)if(vn[Os-gs]===0&&_n(oe,A[Os])){Ne=Os;break}Ne===void 0?de(oe,O,V,!0):(vn[Ne-gs]=L+1,Ne>=qa?qa=Ne:Yl=!0,D(oe,A[Ne],x,null,O,V,W,I,j),Ls++)}const Ka=Yl?Zy(vn):an;for(Os=Ka.length-1,L=xe-1;L>=0;L--){const oe=gs+L,Ne=A[oe],Ja=oe+1<os?A[oe+1].el:N;vn[L]===0?D(null,Ne,x,Ja,O,V,W,I,j):Yl&&(Os<0||L!==Ka[Os]?Me(Ne,x,Ja,2):Os--)}}},Me=(B,A,x,N,O=null)=>{const{el:V,type:W,transition:I,children:j,shapeFlag:L}=B;if(L&6){Me(B.component.subTree,A,x,N);return}if(L&128){B.suspense.move(A,x,N);return}if(L&64){W.move(B,A,x,cs);return}if(W===ks){t(V,A,x);for(let ls=0;ls<j.length;ls++)Me(j[ls],A,x,N);t(B.anchor,A,x);return}if(W===mo){ss(B,A,x);return}if(N!==2&&L&1&&I)if(N===0)I.beforeEnter(V),t(V,A,x),Xs(()=>I.enter(V),O);else{const{leave:ls,delayLeave:as,afterLeave:us}=I,gs=()=>t(V,A,x),Ss=()=>{ls(V,()=>{gs(),us&&us()})};as?as(V,gs,Ss):Ss()}else t(V,A,x)},de=(B,A,x,N=!1,O=!1)=>{const{type:V,props:W,ref:I,children:j,dynamicChildren:L,shapeFlag:os,patchFlag:ls,dirs:as}=B;if(I!=null&&Mt(I,null,x,B,!0),os&256){A.ctx.deactivate(B);return}const us=os&1&&as,gs=!rn(B);let Ss;if(gs&&(Ss=W&&W.onVnodeBeforeUnmount)&&ge(Ss,A,B),os&6)Z(B.component,x,N);else{if(os&128){B.suspense.unmount(x,N);return}us&&vl(B,null,A,"beforeUnmount"),os&64?B.type.remove(B,A,x,O,cs,N):L&&(V!==ks||ls>0&&ls&64)?X(L,A,x,!1,!0):(V===ks&&ls&384||!O&&os&16)&&X(j,A,x),N&&k(B)}(gs&&(Ss=W&&W.onVnodeUnmounted)||us)&&Xs(()=>{Ss&&ge(Ss,A,B),us&&vl(B,null,A,"unmounted")},x)},k=B=>{const{type:A,el:x,anchor:N,transition:O}=B;if(A===ks){B.patchFlag>0&&B.patchFlag&2048&&O&&!O.persisted?B.children.forEach(W=>{W.type===ue?a(W.el):k(W)}):es(x,N);return}if(A===mo){q(B);return}const V=()=>{a(x),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(B.shapeFlag&1&&O&&!O.persisted){const{leave:W,delayLeave:I}=O,j=()=>W(x,V);I?I(B.el,V,j):j()}else V()},es=(B,A)=>{let x;for(;B!==A;)x=f(B),a(B),B=x;a(A)},Z=(B,A,x)=>{B.type.__hmrId&&G8(B);const{bum:N,scope:O,update:V,subTree:W,um:I}=B;N&&Fl(N),O.stop(),V&&(V.active=!1,de(W,B,A,x)),I&&Xs(I,A),Xs(()=>{B.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&B.asyncDep&&!B.asyncResolved&&B.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve()),ly(B)},X=(B,A,x,N=!1,O=!1,V=0)=>{for(let W=V;W<B.length;W++)de(B[W],A,x,N,O)},ms=B=>B.shapeFlag&6?ms(B.component.subTree):B.shapeFlag&128?B.suspense.next():f(B.anchor||B.el),Fs=(B,A,x)=>{B==null?A._vnode&&de(A._vnode,null,null,!0):D(A._vnode||null,B,A,null,null,null,x),op(),A._vnode=B},cs={p:D,um:de,m:Me,r:k,mt:Ns,mc:fs,pc:bs,pbc:Rs,n:ms,o:e};let ps,Ms;return l&&([ps,Ms]=l(cs)),{render:Fs,hydrate:ps,createApp:qy(Fs,ps)}}function Dl({effect:e,update:l},o){e.allowRecurse=l.allowRecurse=o}function Nn(e,l,o=!1){const t=e.children,a=l.children;if(is(t)&&is(a))for(let r=0;r<t.length;r++){const c=t[r];let p=a[r];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=a[r]=cl(a[r]),p.el=c.el),o||Nn(c,p)),p.type===ue&&!p.el&&(p.el=c.el)}}function Zy(e){const l=e.slice(),o=[0];let t,a,r,c,p;const i=e.length;for(t=0;t<i;t++){const y=e[t];if(y!==0){if(a=o[o.length-1],e[a]<y){l[t]=a,o.push(t);continue}for(r=0,c=o.length-1;r<c;)p=r+c>>1,e[o[p]]<y?r=p+1:c=p;y<e[o[r]]&&(r>0&&(l[t]=o[r-1]),o[r]=t)}}for(r=o.length,c=o[r-1];r-- >0;)o[r]=c,c=l[c];return o}const Gy=e=>e.__isTeleport,cn=e=>e&&(e.disabled||e.disabled===""),Br=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Nt=(e,l)=>{const o=e&&e.to;if(zs(o))if(l){const t=l(o);return t||R(`Failed to locate Teleport target with selector "${o}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),t}else return R("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!o&&!cn(e)&&R(`Invalid Teleport target: ${o}`),o},Qy={__isTeleport:!0,process(e,l,o,t,a,r,c,p,i,y){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:m,createText:_,createComment:D}}=y,b=cn(l.props);let{shapeFlag:E,children:w,dynamicChildren:H}=l;if(ul&&(i=!1,H=null),e==null){const ss=l.el=D("teleport start"),q=l.anchor=D("teleport end");h(ss,o,t),h(q,o,t);const z=l.target=Nt(l.props,m),ts=l.targetAnchor=_("");z?(h(ts,z),c=c||Br(z)):b||R("Invalid Teleport target on mount:",z,`(${typeof z})`);const Bs=(fs,Cs)=>{E&16&&u(w,fs,Cs,a,r,c,p,i)};b?Bs(o,q):z&&Bs(z,ts)}else{l.el=e.el;const ss=l.anchor=e.anchor,q=l.target=e.target,z=l.targetAnchor=e.targetAnchor,ts=cn(e.props),Bs=ts?o:q,fs=ts?ss:z;if(c=c||Br(q),H?(f(e.dynamicChildren,H,Bs,a,r,c,p),Nn(e,l,!0)):i||d(e,l,Bs,fs,a,r,c,p,!1),b)ts||io(l,o,ss,y,1);else if((l.props&&l.props.to)!==(e.props&&e.props.to)){const Cs=l.target=Nt(l.props,m);Cs?io(l,Cs,null,y,0):R("Invalid Teleport target on update:",q,`(${typeof q})`)}else ts&&io(l,q,z,y,1)}},remove(e,l,o,t,{um:a,o:{remove:r}},c){const{shapeFlag:p,children:i,anchor:y,targetAnchor:u,target:d,props:f}=e;if(d&&r(u),(c||!cn(f))&&(r(y),p&16))for(let h=0;h<i.length;h++){const m=i[h];a(m,l,o,!0,!!m.dynamicChildren)}},move:io,hydrate:Xy};function io(e,l,o,{o:{insert:t},m:a},r=2){r===0&&t(e.targetAnchor,l,o);const{el:c,anchor:p,shapeFlag:i,children:y,props:u}=e,d=r===2;if(d&&t(c,l,o),(!d||cn(u))&&i&16)for(let f=0;f<y.length;f++)a(y[f],l,o,2);d&&t(p,l,o)}function Xy(e,l,o,t,a,r,{o:{nextSibling:c,parentNode:p,querySelector:i}},y){const u=l.target=Nt(l.props,i);if(u){const d=u._lpa||u.firstChild;if(l.shapeFlag&16)if(cn(l.props))l.anchor=y(c(e),l,p(e),o,t,a,r),l.targetAnchor=d;else{l.anchor=c(e);let f=d;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){l.targetAnchor=f,u._lpa=l.targetAnchor&&c(l.targetAnchor);break}y(d,l,u,o,t,a,r)}}return l.anchor&&c(l.anchor)}const EF=Qy,ks=Symbol("Fragment"),Qo=Symbol("Text"),ue=Symbol("Comment"),mo=Symbol("Static"),Ln=[];let $e=null;function v(e=!1){Ln.push($e=e?null:[])}function su(){Ln.pop(),$e=Ln[Ln.length-1]||null}let Un=1;function hr(e){Un+=e}function Op(e){return e.dynamicChildren=Un>0?$e||an:null,su(),Un>0&&$e&&$e.push(e),e}function J(e,l,o,t,a,r){return Op(s(e,l,o,t,a,r,!0))}function M(e,l,o,t,a){return Op(F(e,l,o,t,a,!0))}function Hl(e){return e?e.__v_isVNode===!0:!1}function _n(e,l){return l.shapeFlag&6&&en.has(l.type)?!1:e.type===l.type&&e.key===l.key}const eu=(...e)=>lu(...e),Xo="__vInternal",Tp=({key:e})=>e??null,Ao=({ref:e,ref_key:l,ref_for:o})=>e!=null?zs(e)||Es(e)||ds(e)?{i:Zs,r:e,k:l,f:!!o}:e:null;function s(e,l=null,o=null,t=0,a=null,r=e===ks?0:1,c=!1,p=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:l,key:l&&Tp(l),ref:l&&Ao(l),scopeId:Jo,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:t,dynamicProps:a,dynamicChildren:null,appContext:null};return p?(Fa(i,o),r&128&&e.normalize(i)):o&&(i.shapeFlag|=zs(o)?8:16),i.key!==i.key&&R("VNode created with invalid key (NaN). VNode type:",i.type),Un>0&&!c&&$e&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&$e.push(i),i}const F=eu;function lu(e,l=null,o=null,t=0,a=null,r=!1){if((!e||e===Fy)&&(e||R(`Invalid vnode type when creating vnode: ${e}.`),e=ue),Hl(e)){const p=ol(e,l,!0);return o&&Fa(p,o),Un>0&&!r&&$e&&(p.shapeFlag&6?$e[$e.indexOf(e)]=p:$e.push(p)),p.patchFlag|=-2,p}if(Ip(e)&&(e=e.__vccOpts),l){l=U(l);let{class:p,style:i}=l;p&&!zs(p)&&(l.class=Hs(p)),Is(i)&&(Eo(i)&&!is(i)&&(i=Ks({},i)),l.style=se(i))}const c=zs(e)?1:up(e)?128:Gy(e)?64:Is(e)?4:ds(e)?2:0;return c&4&&Eo(e)&&(e=hs(e),R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,l,o,t,a,c,r,!0)}function U(e){return e?Eo(e)||Xo in e?Ks({},e):e:null}function ol(e,l,o=!1){const{props:t,ref:a,patchFlag:r,children:c}=e,p=l?G(t||{},l):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Tp(p),ref:l&&l.ref?o&&a?is(a)?a.concat(Ao(l)):[a,Ao(l)]:Ao(l):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&is(c)?c.map(Mp):c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:l&&e.type!==ks?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ol(e.ssContent),ssFallback:e.ssFallback&&ol(e.ssFallback),el:e.el,anchor:e.anchor}}function Mp(e){const l=ol(e);return is(e.children)&&(l.children=e.children.map(Mp)),l}function n(e=" ",l=0){return F(Qo,null,e,l)}function Ds(e="",l=!1){return l?(v(),M(ue,null,e)):F(ue,null,e)}function we(e){return e==null||typeof e=="boolean"?F(ue):is(e)?F(ks,null,e.slice()):typeof e=="object"?cl(e):F(Qo,null,String(e))}function cl(e){return e.el===null||e.memo?e:ol(e)}function Fa(e,l){let o=0;const{shapeFlag:t}=e;if(l==null)l=null;else if(is(l))o=16;else if(typeof l=="object")if(t&65){const a=l.default;a&&(a._c&&(a._d=!1),Fa(e,a()),a._c&&(a._d=!0));return}else{o=32;const a=l._;!a&&!(Xo in l)?l._ctx=Zs:a===3&&Zs&&(Zs.slots._===1?l._=1:(l._=2,e.patchFlag|=1024))}else ds(l)?(l={default:l,_ctx:Zs},o=32):(l=String(l),t&64?(o=16,l=[n(l)]):o=8);e.children=l,e.shapeFlag|=o}function G(...e){const l={};for(let o=0;o<e.length;o++){const t=e[o];for(const a in t)if(a==="class")l.class!==t.class&&(l.class=Hs([l.class,t.class]));else if(a==="style")l.style=se([l.style,t.style]);else if(Ro(a)){const r=l[a],c=t[a];c&&r!==c&&!(is(r)&&r.includes(c))&&(l[a]=r?[].concat(r,c):c)}else a!==""&&(l[a]=t[a])}return l}function ge(e,l,o,t=null){Se(e,l,7,[o,t])}const nu=Pp();let ou=0;function tu(e,l,o){const t=e.type,a=(l?l.appContext:e.appContext)||nu,r={uid:ou++,vnode:e,type:t,parent:l,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(t,a),emitsOptions:ip(t,a),emit:null,emitted:null,propsDefaults:xs,inheritAttrs:t.inheritAttrs,ctx:xs,data:xs,props:xs,attrs:xs,slots:xs,refs:xs,setupState:xs,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=xy(r),r.root=l?l.root:r,r.emit=ay.bind(null,r),e.ce&&e.ce(r),r}let Us=null;const Al=()=>Us||Zs,fn=e=>{Us=e,e.scope.on()},Nl=()=>{Us&&Us.scope.off(),Us=null},au=eo("slot,component");function Lt(e,l){const o=l.isNativeTag||Sc;(au(e)||o(e))&&R("Do not use built-in or reserved HTML elements as component id: "+e)}function Np(e){return e.vnode.shapeFlag&4}let qn=!1;function ru(e,l=!1){qn=l;const{props:o,children:t}=e.vnode,a=Np(e);My(e,o,a,l),zy(e,t);const r=a?cu(e,l):void 0;return qn=!1,r}function cu(e,l){var o;const t=e.type;{if(t.name&&Lt(t.name,e.appContext.config),t.components){const r=Object.keys(t.components);for(let c=0;c<r.length;c++)Lt(r[c],e.appContext.config)}if(t.directives){const r=Object.keys(t.directives);for(let c=0;c<r.length;c++)vp(r[c])}t.compilerOptions&&pu()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ya(new Proxy(e.ctx,gp)),ky(e);const{setup:a}=t;if(a){const r=e.setupContext=a.length>1?Rp(e):null;fn(e),Ul();const c=el(a,e,0,[on(e.props),r]);if(ql(),Nl(),ta(c)){if(c.then(Nl,Nl),l)return c.then(p=>{mr(e,p,l)}).catch(p=>{Uo(p,e,0)});if(e.asyncDep=c,!e.suspense){const p=(o=t.name)!==null&&o!==void 0?o:"Anonymous";R(`Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else mr(e,c,l)}else Lp(e,l)}function mr(e,l,o){ds(l)?e.type.__ssrInlineRender?e.ssrRender=l:e.render=l:Is(l)?(Hl(l)&&R("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=l,e.setupState=Gc(l),by(e)):l!==void 0&&R(`setup() should return an object. Received: ${l===null?"null":typeof l}`),Lp(e,o)}let Rt;const pu=()=>!Rt;function Lp(e,l,o){const t=e.type;if(!e.render){if(!l&&Rt&&!t.render){const a=t.template;if(a){Ke(e,"compile");const{isCustomElement:r,compilerOptions:c}=e.appContext.config,{delimiters:p,compilerOptions:i}=t,y=Ks(Ks({isCustomElement:r,delimiters:p},c),i);t.render=Rt(a,y),Je(e,"compile")}}e.render=t.render||ye}fn(e),Ul(),$y(e),ql(),Nl(),!t.render&&e.render===ye&&!l&&(t.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function iu(e){return new Proxy(e.attrs,{get(l,o){return ko(),De(e,"get","$attrs"),l[o]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}})}function Rp(e){const l=t=>{e.exposed&&R("expose() should be called only once per setup()."),e.exposed=t||{}};let o;return Object.freeze({get attrs(){return o||(o=iu(e))},get slots(){return on(e.slots)},get emit(){return(t,...a)=>e.emit(t,...a)},expose:l})}function st(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gc(ya(e.exposed)),{get(l,o){if(o in l)return l[o];if(o in dn)return dn[o](e)}}))}const yu=/(?:^|[-_])(\w)/g,uu=e=>e.replace(yu,l=>l.toUpperCase()).replace(/[-_]/g,"");function Kn(e,l=!0){return ds(e)?e.displayName||e.name:e.name||l&&e.__name}function et(e,l,o=!1){let t=Kn(l);if(!t&&l.__file){const a=l.__file.match(/([^/\\]+)\.\w+$/);a&&(t=a[1])}if(!t&&e&&e.parent){const a=r=>{for(const c in r)if(r[c]===l)return c};t=a(e.components||e.parent.type.components)||a(e.appContext.components)}return t?uu(t):o?"App":"Anonymous"}function Ip(e){return ds(e)&&"__vccOpts"in e}const T=(e,l)=>V8(e,l,qn);function FF(){return du().slots}function du(){const e=Al();return e||R("useContext() called without active instance."),e.setupContext||(e.setupContext=Rp(e))}function lt(e,l,o){const t=arguments.length;return t===2?Is(l)&&!is(l)?Hl(l)?F(e,null,[l]):F(e,l):F(e,null,l):(t>3?o=Array.prototype.slice.call(arguments,2):t===3&&Hl(o)&&(o=[o]),F(e,l,o))}function ct(e){return!!(e&&e.__v_isShallow)}function fu(){if(typeof window>"u")return;const e={style:"color:#3ba776"},l={style:"color:#0b1bc9"},o={style:"color:#b62e24"},t={style:"color:#9d288c"},a={header(d){return Is(d)?d.__isVue?["div",e,"VueInstance"]:Es(d)?["div",{},["span",e,u(d)],"<",p(d.value),">"]:Tl(d)?["div",{},["span",e,ct(d)?"ShallowReactive":"Reactive"],"<",p(d),`>${Vl(d)?" (readonly)":""}`]:Vl(d)?["div",{},["span",e,ct(d)?"ShallowReadonly":"Readonly"],"<",p(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...r(d.$)]}};function r(d){const f=[];d.type.props&&d.props&&f.push(c("props",hs(d.props))),d.setupState!==xs&&f.push(c("setup",d.setupState)),d.data!==xs&&f.push(c("data",hs(d.data)));const h=i(d,"computed");h&&f.push(c("computed",h));const m=i(d,"inject");return m&&f.push(c("injected",m)),f.push(["div",{},["span",{style:t.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function c(d,f){return f=Ks({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",t,h+": "],p(f[h],!1)])]]:["span",{}]}function p(d,f=!0){return typeof d=="number"?["span",l,d]:typeof d=="string"?["span",o,JSON.stringify(d)]:typeof d=="boolean"?["span",t,d]:Is(d)?["object",{object:f?hs(d):d}]:["span",o,String(d)]}function i(d,f){const h=d.type;if(ds(h))return;const m={};for(const _ in d.ctx)y(h,_,f)&&(m[_]=d.ctx[_]);return m}function y(d,f,h){const m=d[h];if(is(m)&&m.includes(f)||Is(m)&&f in m||d.extends&&y(d.extends,f,h)||d.mixins&&d.mixins.some(_=>y(_,f,h)))return!0}function u(d){return ct(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const Ar="3.2.37";function xa(e,l){const o=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)o[t[a]]=!0;return l?a=>!!o[a.toLowerCase()]:a=>!!o[a]}const Bu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hu=xa(Bu);function Vp(e){return!!e||e===""}const mu="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Au="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",vu=xa(mu),Du=xa(Au),_u=/^on[^a-z]/,Cu=e=>_u.test(e),gu=e=>e.startsWith("onUpdate:"),Eu=Object.assign,ka=Array.isArray,jp=e=>typeof e=="function",$o=e=>typeof e=="string",Hp=e=>{const l=Object.create(null);return o=>l[o]||(l[o]=e(o))},Fu=/\B([A-Z])/g,ba=Hp(e=>e.replace(Fu,"-$1").toLowerCase()),xu=Hp(e=>e.charAt(0).toUpperCase()+e.slice(1)),ku=(e,l)=>{for(let o=0;o<e.length;o++)e[o](l)},vr=e=>{const l=parseFloat(e);return isNaN(l)?e:l},bu="http://www.w3.org/2000/svg",kl=typeof document<"u"?document:null,Dr=kl&&kl.createElement("template"),wu={insert:(e,l,o)=>{l.insertBefore(e,o||null)},remove:e=>{const l=e.parentNode;l&&l.removeChild(e)},createElement:(e,l,o,t)=>{const a=l?kl.createElementNS(bu,e):kl.createElement(e,o?{is:o}:void 0);return e==="select"&&t&&t.multiple!=null&&a.setAttribute("multiple",t.multiple),a},createText:e=>kl.createTextNode(e),createComment:e=>kl.createComment(e),setText:(e,l)=>{e.nodeValue=l},setElementText:(e,l)=>{e.textContent=l},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kl.querySelector(e),setScopeId(e,l){e.setAttribute(l,"")},cloneNode(e){const l=e.cloneNode(!0);return"_value"in e&&(l._value=e._value),l},insertStaticContent(e,l,o,t,a,r){const c=o?o.previousSibling:l.lastChild;if(a&&(a===r||a.nextSibling))for(;l.insertBefore(a.cloneNode(!0),o),!(a===r||!(a=a.nextSibling)););else{Dr.innerHTML=t?`<svg>${e}</svg>`:e;const p=Dr.content;if(t){const i=p.firstChild;for(;i.firstChild;)p.appendChild(i.firstChild);p.removeChild(i)}l.insertBefore(p,o)}return[c?c.nextSibling:l.firstChild,o?o.previousSibling:l.lastChild]}};function $u(e,l,o){const t=e._vtc;t&&(l=(l?[l,...t]:[...t]).join(" ")),l==null?e.removeAttribute("class"):o?e.setAttribute("class",l):e.className=l}function Su(e,l,o){const t=e.style,a=$o(o);if(o&&!a){for(const r in o)It(t,r,o[r]);if(l&&!$o(l))for(const r in l)o[r]==null&&It(t,r,"")}else{const r=t.display;a?l!==o&&(t.cssText=o):l&&e.removeAttribute("style"),"_vod"in e&&(t.display=r)}}const _r=/\s*!important$/;function It(e,l,o){if(ka(o))o.forEach(t=>It(e,l,t));else if(o==null&&(o=""),l.startsWith("--"))e.setProperty(l,o);else{const t=Pu(e,l);_r.test(o)?e.setProperty(ba(t),o.replace(_r,""),"important"):e[t]=o}}const Cr=["Webkit","Moz","ms"],pt={};function Pu(e,l){const o=pt[l];if(o)return o;let t=Ve(l);if(t!=="filter"&&t in e)return pt[l]=t;t=xu(t);for(let a=0;a<Cr.length;a++){const r=Cr[a]+t;if(r in e)return pt[l]=r}return l}const gr="http://www.w3.org/1999/xlink";function Ou(e,l,o,t,a){if(t&&l.startsWith("xlink:"))o==null?e.removeAttributeNS(gr,l.slice(6,l.length)):e.setAttributeNS(gr,l,o);else{const r=hu(l);o==null||r&&!Vp(o)?e.removeAttribute(l):e.setAttribute(l,r?"":o)}}function Tu(e,l,o,t,a,r,c){if(l==="innerHTML"||l==="textContent"){t&&c(t,a,r),e[l]=o??"";return}if(l==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=o;const i=o??"";(e.value!==i||e.tagName==="OPTION")&&(e.value=i),o==null&&e.removeAttribute(l);return}let p=!1;if(o===""||o==null){const i=typeof e[l];i==="boolean"?o=Vp(o):o==null&&i==="string"?(o="",p=!0):i==="number"&&(o=0,p=!0)}try{e[l]=o}catch(i){R(`Failed setting prop "${l}" on <${e.tagName.toLowerCase()}>: value ${o} is invalid.`,i)}p&&e.removeAttribute(l)}const[zp,Mu]=(()=>{let e=Date.now,l=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);l=!!(o&&Number(o[1])<=53)}return[e,l]})();let Vt=0;const Nu=Promise.resolve(),Lu=()=>{Vt=0},Ru=()=>Vt||(Nu.then(Lu),Vt=zp());function ln(e,l,o,t){e.addEventListener(l,o,t)}function Iu(e,l,o,t){e.removeEventListener(l,o,t)}function Vu(e,l,o,t,a=null){const r=e._vei||(e._vei={}),c=r[l];if(t&&c)c.value=t;else{const[p,i]=ju(l);if(t){const y=r[l]=Hu(t,a);ln(e,p,y,i)}else c&&(Iu(e,p,c,i),r[l]=void 0)}}const Er=/(?:Once|Passive|Capture)$/;function ju(e){let l;if(Er.test(e)){l={};let o;for(;o=e.match(Er);)e=e.slice(0,e.length-o[0].length),l[o[0].toLowerCase()]=!0}return[ba(e.slice(2)),l]}function Hu(e,l){const o=t=>{const a=t.timeStamp||zp();(Mu||a>=o.attached-1)&&Se(zu(t,o.value),l,5,[t])};return o.value=e,o.attached=Ru(),o}function zu(e,l){if(ka(l)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},l.map(t=>a=>!a._stopped&&t&&t(a))}else return l}const Fr=/^on[a-z]/,Wu=(e,l,o,t,a=!1,r,c,p,i)=>{l==="class"?$u(e,t,a):l==="style"?Su(e,o,t):Cu(l)?gu(l)||Vu(e,l,o,t,c):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Uu(e,l,t,a))?Tu(e,l,t,r,c,p,i):(l==="true-value"?e._trueValue=t:l==="false-value"&&(e._falseValue=t),Ou(e,l,t,a))};function Uu(e,l,o,t){return t?!!(l==="innerHTML"||l==="textContent"||l in e&&Fr.test(l)&&jp(o)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&e.tagName==="INPUT"||l==="type"&&e.tagName==="TEXTAREA"||Fr.test(l)&&$o(o)?!1:l in e}const xr=e=>{const l=e.props["onUpdate:modelValue"]||!1;return ka(l)?o=>ku(l,o):l};function qu(e){e.target.composing=!0}function kr(e){const l=e.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Jn={created(e,{modifiers:{lazy:l,trim:o,number:t}},a){e._assign=xr(a);const r=t||a.props&&a.props.type==="number";ln(e,l?"change":"input",c=>{if(c.target.composing)return;let p=e.value;o&&(p=p.trim()),r&&(p=vr(p)),e._assign(p)}),o&&ln(e,"change",()=>{e.value=e.value.trim()}),l||(ln(e,"compositionstart",qu),ln(e,"compositionend",kr),ln(e,"change",kr))},mounted(e,{value:l}){e.value=l??""},beforeUpdate(e,{value:l,modifiers:{lazy:o,trim:t,number:a}},r){if(e._assign=xr(r),e.composing||document.activeElement===e&&e.type!=="range"&&(o||t&&e.value.trim()===l||(a||e.type==="number")&&vr(e.value)===l))return;const c=l??"";e.value!==c&&(e.value=c)}},Ku={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},br=(e,l)=>o=>{if(!("key"in o))return;const t=ba(o.key);if(l.some(a=>a===t||Ku[a]===t))return e(o)},Wp={beforeMount(e,{value:l},{transition:o}){e._vod=e.style.display==="none"?"":e.style.display,o&&l?o.beforeEnter(e):Cn(e,l)},mounted(e,{value:l},{transition:o}){o&&l&&o.enter(e)},updated(e,{value:l,oldValue:o},{transition:t}){!l!=!o&&(t?l?(t.beforeEnter(e),Cn(e,!0),t.enter(e)):t.leave(e,()=>{Cn(e,!1)}):Cn(e,l))},beforeUnmount(e,{value:l}){Cn(e,l)}};function Cn(e,l){e.style.display=l?e._vod:"none"}const Ju=Eu({patchProp:Wu},wu);let wr;function Yu(){return wr||(wr=Jy(Ju))}const xF=(...e)=>{const l=Yu().createApp(...e);Zu(l),Gu(l);const{mount:o}=l;return l.mount=t=>{const a=Qu(t);if(!a)return;const r=l._component;!jp(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const c=o(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),c},l};function Zu(e){Object.defineProperty(e.config,"isNativeTag",{value:l=>vu(l)||Du(l),writable:!1})}function Gu(e){{const l=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return l},set(){R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const o=e.config.compilerOptions,t='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return R(t),o},set(){R(t)}})}}function Qu(e){if($o(e)){const l=document.querySelector(e);return l||R(`Failed to mount app: mount target selector "${e}" returned null.`),l}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Xu(){fu()}Xu();const Up=Symbol("v-click-clicks"),qp=Symbol("v-click-clicks-elements"),s5=Symbol("v-click-clicks-order-map"),Kp=Symbol("v-click-clicks-disabled"),Jp=Symbol("slidev-slide-scale"),S=Symbol("slidev-slidev-context"),e5=Symbol("slidev-route"),l5=Symbol("slidev-slide-context"),n5="slidev-vclick-target",kF="slidev-vclick-hidden",bF="slidev-vclick-fade",wF="slidev-vclick-hidden-explicitly",$F="slidev-vclick-current",SF="slidev-vclick-prior";function o5(e,l){if(!e)return!1;const o=e.indexOf(l);return o>=0?(e.splice(o,1),!0):!1}function t5(...e){let l,o,t;e.length===1?(l=0,t=1,[o]=e):[l,o,t=1]=e;const a=[];let r=l;for(;r<o;)a.push(r),r+=t||1;return a}function a5(e){return e!=null}function r5(e,l){return Object.fromEntries(Object.entries(e).map(([o,t])=>l(o,t)).filter(a5))}const Pn={theme:"default",title:"Vue.js",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"},Ts=Pn,dl=Ts.aspectRatio??16/9,fl=Ts.canvasWidth??980,wa=Math.ceil(fl/dl),$a=T(()=>r5(Ts.themeConfig||{},(e,l)=>[`--slidev-theme-${e}`,l]));function Fe(e,l,o){Object.defineProperty(e,l,{value:o,writable:!0,enumerable:!1})}const Kl=ee({page:0,clicks:0});let c5=[],p5=[];Fe(Kl,"$syncUp",!0);Fe(Kl,"$syncDown",!0);Fe(Kl,"$paused",!1);Fe(Kl,"$onSet",e=>c5.push(e));Fe(Kl,"$onPatch",e=>p5.push(e));Fe(Kl,"$patch",async()=>!1);function Yp(e,l,o=!1){const t=[];let a=!1,r=!1,c,p;const i=ee(l);function y(h){t.push(h)}function u(h,m){clearTimeout(c),a=!0,i[h]=m,c=setTimeout(()=>a=!1,0)}function d(h){a||(clearTimeout(p),r=!0,Object.entries(h).forEach(([m,_])=>{i[m]=_}),p=setTimeout(()=>r=!1,0))}function f(h){let m;o?o&&window.addEventListener("storage",D=>{D&&D.key===h&&D.newValue&&d(JSON.parse(D.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",D=>d(D.data)));function _(){!o&&m&&!r?m.postMessage(hs(i)):o&&!r&&window.localStorage.setItem(h,JSON.stringify(i)),a||t.forEach(D=>D(i))}if(js(i,_,{deep:!0}),o){const D=window.localStorage.getItem(h);D&&d(JSON.parse(D))}}return{init:f,onPatch:y,patch:u,state:i}}const{init:PF,onPatch:OF,patch:TF,state:it}=Yp(Kl,{page:1,clicks:0}),Jl=ee({});let i5=[],y5=[];Fe(Jl,"$syncUp",!0);Fe(Jl,"$syncDown",!0);Fe(Jl,"$paused",!1);Fe(Jl,"$onSet",e=>i5.push(e));Fe(Jl,"$onPatch",e=>y5.push(e));Fe(Jl,"$patch",async()=>!1);const{init:MF,onPatch:u5,patch:Zp,state:So}=Yp(Jl,{},!1),d5="modulepreload",f5=function(e){return"/vue-3-practices/"+e},$r={},zl=function(l,o,t){if(!o||o.length===0)return l();const a=document.getElementsByTagName("link");return Promise.all(o.map(r=>{if(r=f5(r),r in $r)return;$r[r]=!0;const c=r.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!t)for(let u=a.length-1;u>=0;u--){const d=a[u];if(d.href===r&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":d5,c||(y.as="script",y.crossOrigin=""),y.href=r,document.head.appendChild(y),c)return new Promise((u,d)=>{y.addEventListener("load",u),y.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>l())};var Sr;const Oe=typeof window<"u",B5=e=>typeof e<"u",h5=Object.prototype.toString,Yn=e=>typeof e=="function",NF=e=>typeof e=="number",Gp=e=>typeof e=="string",LF=e=>h5.call(e)==="[object Object]",jt=()=>+Date.now(),Rn=()=>{};Oe&&((Sr=window==null?void 0:window.navigator)!=null&&Sr.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ce(e){return typeof e=="function"?e():g(e)}function m5(e,l){function o(...t){e(()=>l.apply(this,t),{fn:l,thisArg:this,args:t})}return o}const Qp=e=>e();function A5(e=Qp){const l=ns(!0);function o(){l.value=!1}function t(){l.value=!0}return{isActive:l,pause:o,resume:t,eventFilter:(...r)=>{l.value&&e(...r)}}}function v5(e){return e}function D5(e,l){var o;if(typeof e=="number")return e+l;const t=((o=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",a=e.slice(t.length),r=parseFloat(t)+l;return Number.isNaN(r)?e:r+a}function _5(e,l){let o,t,a;const r=ns(!0),c=()=>{r.value=!0,a()};js(e,c,{flush:"sync"});const p=Yn(l)?l:l.get,i=Yn(l)?void 0:l.set,y=Qc((u,d)=>(t=u,a=d,{get(){return r.value&&(o=p(),r.value=!1),t(),o},set(f){i==null||i(f)}}));return Object.isExtensible(y)&&(y.trigger=c),y}function ze(e){return o8()?(t8(e),!0):!1}function C5(e){if(!Es(e))return ee(e);const l=new Proxy({},{get(o,t,a){return g(Reflect.get(e.value,t,a))},set(o,t,a){return Es(e.value[t])&&!Es(a)?e.value[t].value=a:e.value[t]=a,!0},deleteProperty(o,t){return Reflect.deleteProperty(e.value,t)},has(o,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return ee(l)}function Xp(e){return typeof e=="function"?T(e):ns(e)}var g5=Object.defineProperty,E5=Object.defineProperties,F5=Object.getOwnPropertyDescriptors,Pr=Object.getOwnPropertySymbols,x5=Object.prototype.hasOwnProperty,k5=Object.prototype.propertyIsEnumerable,Or=(e,l,o)=>l in e?g5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,b5=(e,l)=>{for(var o in l||(l={}))x5.call(l,o)&&Or(e,o,l[o]);if(Pr)for(var o of Pr(l))k5.call(l,o)&&Or(e,o,l[o]);return e},w5=(e,l)=>E5(e,F5(l));function $5(e){if(!Es(e))return N8(e);const l=Array.isArray(e.value)?new Array(e.value.length):{};for(const o in e.value)l[o]=Qc(()=>({get(){return e.value[o]},set(t){if(Array.isArray(e.value)){const a=[...e.value];a[o]=t,e.value=a}else{const a=w5(b5({},e.value),{[o]:t});Object.setPrototypeOf(a,e.value),e.value=a}}}));return l}function Sa(e,l=!0){Al()?Zo(e):l?e():Pe(e)}function RF(e){Al()&&Go(e)}function S5(e,l=1e3,o={}){const{immediate:t=!0,immediateCallback:a=!1}=o;let r=null;const c=ns(!1);function p(){r&&(clearInterval(r),r=null)}function i(){c.value=!1,p()}function y(){g(l)<=0||(c.value=!0,a&&e(),p(),r=setInterval(e,ce(l)))}if(t&&Oe&&y(),Es(l)||Yn(l)){const u=js(l,()=>{c.value&&Oe&&y()});ze(u)}return ze(i),{isActive:c,pause:i,resume:y}}function P5(e,l,o={}){const{immediate:t=!0}=o,a=ns(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function p(){a.value=!1,c()}function i(...y){c(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,e(...y)},ce(l))}return t&&(a.value=!0,Oe&&i()),ze(p),{isPending:a,start:i,stop:p}}function si(e=!1,l={}){const{truthyValue:o=!0,falsyValue:t=!1}=l,a=Es(e),r=ns(e);function c(p){if(arguments.length)return r.value=p,r.value;{const i=ce(o);return r.value=r.value===i?ce(t):i,r.value}}return a?c:[r,c]}var Tr=Object.getOwnPropertySymbols,O5=Object.prototype.hasOwnProperty,T5=Object.prototype.propertyIsEnumerable,M5=(e,l)=>{var o={};for(var t in e)O5.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&Tr)for(var t of Tr(e))l.indexOf(t)<0&&T5.call(e,t)&&(o[t]=e[t]);return o};function N5(e,l,o={}){const t=o,{eventFilter:a=Qp}=t,r=M5(t,["eventFilter"]);return js(e,m5(a,l),r)}var L5=Object.defineProperty,R5=Object.defineProperties,I5=Object.getOwnPropertyDescriptors,Po=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,li=Object.prototype.propertyIsEnumerable,Mr=(e,l,o)=>l in e?L5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,V5=(e,l)=>{for(var o in l||(l={}))ei.call(l,o)&&Mr(e,o,l[o]);if(Po)for(var o of Po(l))li.call(l,o)&&Mr(e,o,l[o]);return e},j5=(e,l)=>R5(e,I5(l)),H5=(e,l)=>{var o={};for(var t in e)ei.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&Po)for(var t of Po(e))l.indexOf(t)<0&&li.call(e,t)&&(o[t]=e[t]);return o};function z5(e,l,o={}){const t=o,{eventFilter:a}=t,r=H5(t,["eventFilter"]),{eventFilter:c,pause:p,resume:i,isActive:y}=A5(a);return{stop:N5(e,l,j5(V5({},r),{eventFilter:c})),pause:p,resume:i,isActive:y}}function Le(e){var l;const o=ce(e);return(l=o==null?void 0:o.$el)!=null?l:o}const ne=Oe?window:void 0,ni=Oe?window.document:void 0,W5=Oe?window.navigator:void 0;function $s(...e){let l,o,t,a;if(Gp(e[0])||Array.isArray(e[0])?([o,t,a]=e,l=ne):[l,o,t,a]=e,!l)return Rn;Array.isArray(o)||(o=[o]),Array.isArray(t)||(t=[t]);const r=[],c=()=>{r.forEach(u=>u()),r.length=0},p=(u,d,f)=>(u.addEventListener(d,f,a),()=>u.removeEventListener(d,f,a)),i=js(()=>Le(l),u=>{c(),u&&r.push(...o.flatMap(d=>t.map(f=>p(u,d,f))))},{immediate:!0,flush:"post"}),y=()=>{i(),c()};return ze(y),y}function U5(e,l,o={}){const{window:t=ne,ignore:a=[],capture:r=!0,detectIframe:c=!1}=o;if(!t)return;let p=!0,i;const y=h=>a.some(m=>{if(typeof m=="string")return Array.from(t.document.querySelectorAll(m)).some(_=>_===h.target||h.composedPath().includes(_));{const _=Le(m);return _&&(h.target===_||h.composedPath().includes(_))}}),u=h=>{t.clearTimeout(i);const m=Le(e);if(!(!m||m===h.target||h.composedPath().includes(m))){if(h.detail===0&&(p=!y(h)),!p){p=!0;return}l(h)}},d=[$s(t,"click",u,{passive:!0,capture:r}),$s(t,"pointerdown",h=>{const m=Le(e);m&&(p=!h.composedPath().includes(m)&&!y(h))},{passive:!0}),$s(t,"pointerup",h=>{if(h.button===0){const m=h.composedPath();h.composedPath=()=>m,i=t.setTimeout(()=>u(h),50)}},{passive:!0}),c&&$s(t,"blur",h=>{var m;const _=Le(e);((m=t.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(_!=null&&_.contains(t.document.activeElement))&&l(h)})].filter(Boolean);return()=>d.forEach(h=>h())}const q5=e=>typeof e=="function"?e:typeof e=="string"?l=>l.key===e:Array.isArray(e)?l=>e.includes(l.key):()=>!0;function K5(...e){let l,o,t={};e.length===3?(l=e[0],o=e[1],t=e[2]):e.length===2?typeof e[1]=="object"?(l=!0,o=e[0],t=e[1]):(l=e[0],o=e[1]):(l=!0,o=e[0]);const{target:a=ne,eventName:r="keydown",passive:c=!1}=t,p=q5(l);return $s(a,r,y=>{p(y)&&o(y)},c)}function J5(e={}){const{window:l=ne}=e,o=_5(()=>null,()=>l==null?void 0:l.document.activeElement);return l&&($s(l,"blur",t=>{t.relatedTarget!==null&&o.trigger()},!0),$s(l,"focus",o.trigger,!0)),o}function oo(e,l=!1){const o=ns(),t=()=>o.value=Boolean(e());return t(),Sa(t,l),o}function nn(e,l={}){const{window:o=ne}=l,t=oo(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let a;const r=ns(!1),c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",p):a.removeListener(p))},p=()=>{t.value&&(c(),a=o.matchMedia(Xp(e).value),r.value=a.matches,"addEventListener"in a?a.addEventListener("change",p):a.addListener(p))};return mn(p),ze(()=>c()),r}const Y5={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Z5=Object.defineProperty,Nr=Object.getOwnPropertySymbols,G5=Object.prototype.hasOwnProperty,Q5=Object.prototype.propertyIsEnumerable,Lr=(e,l,o)=>l in e?Z5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,X5=(e,l)=>{for(var o in l||(l={}))G5.call(l,o)&&Lr(e,o,l[o]);if(Nr)for(var o of Nr(l))Q5.call(l,o)&&Lr(e,o,l[o]);return e};function sd(e,l={}){function o(p,i){let y=e[p];return i!=null&&(y=D5(y,i)),typeof y=="number"&&(y=`${y}px`),y}const{window:t=ne}=l;function a(p){return t?t.matchMedia(p).matches:!1}const r=p=>nn(`(min-width: ${o(p)})`,l),c=Object.keys(e).reduce((p,i)=>(Object.defineProperty(p,i,{get:()=>r(i),enumerable:!0,configurable:!0}),p),{});return X5({greater(p){return nn(`(min-width: ${o(p,.1)})`,l)},greaterOrEqual:r,smaller(p){return nn(`(max-width: ${o(p,-.1)})`,l)},smallerOrEqual(p){return nn(`(max-width: ${o(p)})`,l)},between(p,i){return nn(`(min-width: ${o(p)}) and (max-width: ${o(i,-.1)})`,l)},isGreater(p){return a(`(min-width: ${o(p,.1)})`)},isGreaterOrEqual(p){return a(`(min-width: ${o(p)})`)},isSmaller(p){return a(`(max-width: ${o(p,-.1)})`)},isSmallerOrEqual(p){return a(`(max-width: ${o(p)})`)},isInBetween(p,i){return a(`(min-width: ${o(p)}) and (max-width: ${o(i,-.1)})`)}},c)}function ed(e={}){const{navigator:l=W5,read:o=!1,source:t,copiedDuring:a=1500,legacy:r=!1}=e,c=["copy","cut"],p=oo(()=>l&&"clipboard"in l),i=T(()=>p.value||r),y=ns(""),u=ns(!1),d=P5(()=>u.value=!1,a);function f(){p.value?l.clipboard.readText().then(D=>{y.value=D}):y.value=_()}if(i.value&&o)for(const D of c)$s(D,f);async function h(D=ce(t)){i.value&&D!=null&&(p.value?await l.clipboard.writeText(D):m(D),y.value=D,u.value=!0,d.start())}function m(D){const b=document.createElement("textarea");b.value=D??"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function _(){var D,b,E;return(E=(b=(D=document==null?void 0:document.getSelection)==null?void 0:D.call(document))==null?void 0:b.toString())!=null?E:""}return{isSupported:i,text:y,copied:u,copy:h}}function ld(e){return JSON.parse(JSON.stringify(e))}const Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zt="__vueuse_ssr_handlers__";Ht[zt]=Ht[zt]||{};const nd=Ht[zt];function od(e,l){return nd[e]||l}function td(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ad=Object.defineProperty,Rr=Object.getOwnPropertySymbols,rd=Object.prototype.hasOwnProperty,cd=Object.prototype.propertyIsEnumerable,Ir=(e,l,o)=>l in e?ad(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Vr=(e,l)=>{for(var o in l||(l={}))rd.call(l,o)&&Ir(e,o,l[o]);if(Rr)for(var o of Rr(l))cd.call(l,o)&&Ir(e,o,l[o]);return e};const pd={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Te(e,l,o,t={}){var a;const{flush:r="pre",deep:c=!0,listenToStorageChanges:p=!0,writeDefaults:i=!0,mergeDefaults:y=!1,shallow:u,window:d=ne,eventFilter:f,onError:h=z=>{console.error(z)}}=t,m=(u?je:ns)(l);if(!o)try{o=od("getDefaultStorage",()=>{var z;return(z=ne)==null?void 0:z.localStorage})()}catch(z){h(z)}if(!o)return m;const _=ce(l),D=td(_),b=(a=t.serializer)!=null?a:pd[D],{pause:E,resume:w}=z5(m,()=>H(m.value),{flush:r,deep:c,eventFilter:f});return d&&p&&$s(d,"storage",q),q(),m;function H(z){try{if(z==null)o.removeItem(e);else{const ts=b.write(z),Bs=o.getItem(e);Bs!==ts&&(o.setItem(e,ts),d&&(d==null||d.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:Bs,newValue:ts,storageArea:o}))))}}catch(ts){h(ts)}}function ss(z){const ts=z?z.newValue:o.getItem(e);if(ts==null)return i&&_!==null&&o.setItem(e,b.write(_)),_;if(!z&&y){const Bs=b.read(ts);return Yn(y)?y(Bs,_):D==="object"&&!Array.isArray(Bs)?Vr(Vr({},_),Bs):Bs}else return typeof ts!="string"?ts:b.read(ts)}function q(z){if(!(z&&z.storageArea!==o)){if(z&&z.key==null){m.value=_;return}if(!(z&&z.key!==e)){E();try{m.value=ss(z)}catch(ts){h(ts)}finally{z?Pe(w):w()}}}}}function id(e){return nn("(prefers-color-scheme: dark)",e)}var yd=Object.defineProperty,ud=Object.defineProperties,dd=Object.getOwnPropertyDescriptors,jr=Object.getOwnPropertySymbols,fd=Object.prototype.hasOwnProperty,Bd=Object.prototype.propertyIsEnumerable,Hr=(e,l,o)=>l in e?yd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,hd=(e,l)=>{for(var o in l||(l={}))fd.call(l,o)&&Hr(e,o,l[o]);if(jr)for(var o of jr(l))Bd.call(l,o)&&Hr(e,o,l[o]);return e},md=(e,l)=>ud(e,dd(l));function IF(e,l={}){var o,t,a;const r=(o=l.draggingElement)!=null?o:ne,c=(t=l.handle)!=null?t:e,p=ns((a=ce(l.initialValue))!=null?a:{x:0,y:0}),i=ns(),y=m=>l.pointerTypes?l.pointerTypes.includes(m.pointerType):!0,u=m=>{ce(l.preventDefault)&&m.preventDefault(),ce(l.stopPropagation)&&m.stopPropagation()},d=m=>{var _;if(!y(m)||ce(l.exact)&&m.target!==ce(e))return;const D=ce(e).getBoundingClientRect(),b={x:m.clientX-D.left,y:m.clientY-D.top};((_=l.onStart)==null?void 0:_.call(l,b,m))!==!1&&(i.value=b,u(m))},f=m=>{var _;y(m)&&i.value&&(p.value={x:m.clientX-i.value.x,y:m.clientY-i.value.y},(_=l.onMove)==null||_.call(l,p.value,m),u(m))},h=m=>{var _;y(m)&&i.value&&(i.value=void 0,(_=l.onEnd)==null||_.call(l,p.value,m),u(m))};return Oe&&($s(c,"pointerdown",d,!0),$s(r,"pointermove",f,!0),$s(r,"pointerup",h,!0)),md(hd({},$5(p)),{position:p,isDragging:T(()=>!!i.value),style:T(()=>`left:${p.value.x}px;top:${p.value.y}px;`)})}var zr=Object.getOwnPropertySymbols,Ad=Object.prototype.hasOwnProperty,vd=Object.prototype.propertyIsEnumerable,Dd=(e,l)=>{var o={};for(var t in e)Ad.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&zr)for(var t of zr(e))l.indexOf(t)<0&&vd.call(e,t)&&(o[t]=e[t]);return o};function _d(e,l,o={}){const t=o,{window:a=ne}=t,r=Dd(t,["window"]);let c;const p=oo(()=>a&&"ResizeObserver"in a),i=()=>{c&&(c.disconnect(),c=void 0)},y=js(()=>Le(e),d=>{i(),p.value&&a&&d&&(c=new ResizeObserver(l),c.observe(d,r))},{immediate:!0,flush:"post"}),u=()=>{i(),y()};return ze(u),{isSupported:p,stop:u}}function Cd(e,l={}){const{immediate:o=!0,window:t=ne}=l,a=ns(!1);let r=0,c=null;function p(u){if(!a.value||!t)return;const d=u-r;e({delta:d,timestamp:u}),r=u,c=t.requestAnimationFrame(p)}function i(){!a.value&&t&&(a.value=!0,c=t.requestAnimationFrame(p))}function y(){a.value=!1,c!=null&&t&&(t.cancelAnimationFrame(c),c=null)}return o&&i(),ze(y),{isActive:a,pause:y,resume:i}}function gd(e,l={width:0,height:0},o={}){const{box:t="content-box"}=o,a=ns(l.width),r=ns(l.height);return _d(e,([c])=>{const p=t==="border-box"?c.borderBoxSize:t==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;p?(a.value=p.reduce((i,{inlineSize:y})=>i+y,0),r.value=p.reduce((i,{blockSize:y})=>i+y,0)):(a.value=c.contentRect.width,r.value=c.contentRect.height)},o),js(()=>Le(e),c=>{a.value=c?l.width:0,r.value=c?l.height:0}),{width:a,height:r}}const Wr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Ed(e,l={}){const{document:o=ni,autoExit:t=!1}=l,a=e||(o==null?void 0:o.querySelector("html")),r=ns(!1);let c=Wr[0];const p=oo(()=>{if(o){for(const _ of Wr)if(_[1]in o)return c=_,!0}else return!1;return!1}),[i,y,u,,d]=c;async function f(){p.value&&(o!=null&&o[u]&&await o[y](),r.value=!1)}async function h(){if(!p.value)return;await f();const _=Le(a);_&&(await _[i](),r.value=!0)}async function m(){r.value?await f():await h()}return o&&$s(o,d,()=>{r.value=!!(o!=null&&o[u])},!1),t&&ze(f),{isSupported:p,isFullscreen:r,enter:h,exit:f,toggle:m}}function VF(e,l,o={}){const{root:t,rootMargin:a="0px",threshold:r=.1,window:c=ne}=o,p=oo(()=>c&&"IntersectionObserver"in c);let i=Rn;const y=p.value?js(()=>({el:Le(e),root:Le(t)}),({el:d,root:f})=>{if(i(),!d)return;const h=new IntersectionObserver(l,{root:f,rootMargin:a,threshold:r});h.observe(d),i=()=>{h.disconnect(),i=Rn}},{immediate:!0,flush:"post"}):Rn,u=()=>{i(),y()};return ze(u),{isSupported:p,stop:u}}const Fd={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function xd(e={}){const{reactive:l=!1,target:o=ne,aliasMap:t=Fd,passive:a=!0,onEventFired:r=Rn}=e,c=ee(new Set),p={toJSON(){return{}},current:c},i=l?ee(p):p,y=new Set,u=new Set;function d(_,D){_ in i&&(l?i[_]=D:i[_].value=D)}function f(){c.clear();for(const _ of u)d(_,!1)}function h(_,D){var b,E;const w=(b=_.key)==null?void 0:b.toLowerCase(),ss=[(E=_.code)==null?void 0:E.toLowerCase(),w].filter(Boolean);w&&(D?c.add(w):c.delete(w));for(const q of ss)u.add(q),d(q,D);w==="meta"&&!D?(y.forEach(q=>{c.delete(q),d(q,!1)}),y.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&D&&[...c,...ss].forEach(q=>y.add(q))}$s(o,"keydown",_=>(h(_,!0),r(_)),{passive:a}),$s(o,"keyup",_=>(h(_,!1),r(_)),{passive:a}),$s("blur",f,{passive:!0}),$s("focus",f,{passive:!0});const m=new Proxy(i,{get(_,D,b){if(typeof D!="string")return Reflect.get(_,D,b);if(D=D.toLowerCase(),D in t&&(D=t[D]),!(D in i))if(/[+_-]/.test(D)){const w=D.split(/[+_-]/g).map(H=>H.trim());i[D]=T(()=>w.every(H=>g(m[H])))}else i[D]=ns(!1);const E=Reflect.get(_,D,b);return l?g(E):E}});return m}function jF(e={}){const{type:l="page",touch:o=!0,resetOnTouchEnds:t=!1,initialValue:a={x:0,y:0},window:r=ne,eventFilter:c}=e,p=ns(a.x),i=ns(a.y),y=ns(null),u=_=>{l==="page"?(p.value=_.pageX,i.value=_.pageY):l==="client"&&(p.value=_.clientX,i.value=_.clientY),y.value="mouse"},d=()=>{p.value=a.x,i.value=a.y},f=_=>{if(_.touches.length>0){const D=_.touches[0];l==="page"?(p.value=D.pageX,i.value=D.pageY):l==="client"&&(p.value=D.clientX,i.value=D.clientY),y.value="touch"}},h=_=>c===void 0?u(_):c(()=>u(_),{}),m=_=>c===void 0?f(_):c(()=>f(_),{});return r&&($s(r,"mousemove",h,{passive:!0}),$s(r,"dragover",h,{passive:!0}),o&&($s(r,"touchstart",m,{passive:!0}),$s(r,"touchmove",m,{passive:!0}),t&&$s(r,"touchend",d,{passive:!0}))),{x:p,y:i,sourceType:y}}var Xe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Xe||(Xe={}));function kd(e,l={}){const o=Xp(e),{threshold:t=50,onSwipe:a,onSwipeEnd:r,onSwipeStart:c}=l,p=ee({x:0,y:0}),i=(q,z)=>{p.x=q,p.y=z},y=ee({x:0,y:0}),u=(q,z)=>{y.x=q,y.y=z},d=T(()=>p.x-y.x),f=T(()=>p.y-y.y),{max:h,abs:m}=Math,_=T(()=>h(m(d.value),m(f.value))>=t),D=ns(!1),b=ns(!1),E=T(()=>_.value?m(d.value)>m(f.value)?d.value>0?Xe.LEFT:Xe.RIGHT:f.value>0?Xe.UP:Xe.DOWN:Xe.NONE),w=q=>{var z,ts,Bs;const fs=q.buttons===0,Cs=q.buttons===1;return(Bs=(ts=(z=l.pointerTypes)==null?void 0:z.includes(q.pointerType))!=null?ts:fs||Cs)!=null?Bs:!0},H=[$s(e,"pointerdown",q=>{var z,ts;if(!w(q))return;b.value=!0,(ts=(z=o.value)==null?void 0:z.style)==null||ts.setProperty("touch-action","none");const Bs=q.target;Bs==null||Bs.setPointerCapture(q.pointerId);const{clientX:fs,clientY:Cs}=q;i(fs,Cs),u(fs,Cs),c==null||c(q)}),$s(e,"pointermove",q=>{if(!w(q)||!b.value)return;const{clientX:z,clientY:ts}=q;u(z,ts),!D.value&&_.value&&(D.value=!0),D.value&&(a==null||a(q))}),$s(e,"pointerup",q=>{var z,ts;w(q)&&(D.value&&(r==null||r(q,E.value)),b.value=!1,D.value=!1,(ts=(z=o.value)==null?void 0:z.style)==null||ts.setProperty("touch-action","initial"))})],ss=()=>H.forEach(q=>q());return{isSwiping:wl(D),direction:wl(E),posStart:wl(p),posEnd:wl(y),distanceX:d,distanceY:f,stop:ss}}let bd=0;function HF(e,l={}){const o=ns(!1),{document:t=ni,immediate:a=!0,manual:r=!1,id:c=`vueuse_styletag_${++bd}`}=l,p=ns(e);let i=()=>{};const y=()=>{if(!t)return;const d=t.getElementById(c)||t.createElement("style");d.isConnected||(d.type="text/css",d.id=c,l.media&&(d.media=l.media),t.head.appendChild(d)),!o.value&&(i=js(p,f=>{d.textContent=f},{immediate:!0}),o.value=!0)},u=()=>{!t||!o.value||(i(),t.head.removeChild(t.getElementById(c)),o.value=!1)};return a&&!r&&Sa(y),r||ze(u),{id:c,css:p,unload:u,load:y,isLoaded:wl(o)}}var wd=Object.defineProperty,Ur=Object.getOwnPropertySymbols,$d=Object.prototype.hasOwnProperty,Sd=Object.prototype.propertyIsEnumerable,qr=(e,l,o)=>l in e?wd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Pd=(e,l)=>{for(var o in l||(l={}))$d.call(l,o)&&qr(e,o,l[o]);if(Ur)for(var o of Ur(l))Sd.call(l,o)&&qr(e,o,l[o]);return e};function zF(e={}){const{controls:l=!1,offset:o=0,immediate:t=!0,interval:a="requestAnimationFrame",callback:r}=e,c=ns(jt()+o),p=()=>c.value=jt()+o,i=r?()=>{p(),r(c.value)}:p,y=a==="requestAnimationFrame"?Cd(i,{immediate:t}):S5(i,a,{immediate:t});return l?Pd({timestamp:c},y):c}var Od=Object.defineProperty,Kr=Object.getOwnPropertySymbols,Td=Object.prototype.hasOwnProperty,Md=Object.prototype.propertyIsEnumerable,Jr=(e,l,o)=>l in e?Od(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,Nd=(e,l)=>{for(var o in l||(l={}))Td.call(l,o)&&Jr(e,o,l[o]);if(Kr)for(var o of Kr(l))Md.call(l,o)&&Jr(e,o,l[o]);return e};const Ld={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Nd({linear:v5},Ld);function Re(e,l,o,t={}){var a,r,c;const{clone:p=!1,passive:i=!1,eventName:y,deep:u=!1,defaultValue:d}=t,f=Al(),h=o||(f==null?void 0:f.emit)||((a=f==null?void 0:f.$emit)==null?void 0:a.bind(f))||((c=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let m=y;l||(l="modelValue"),m=y||m||`update:${l.toString()}`;const _=b=>p?Yn(p)?p(b):ld(b):b,D=()=>B5(e[l])?_(e[l]):d;if(i){const b=D(),E=ns(b);return js(()=>e[l],w=>E.value=_(w)),js(E,w=>{(w!==e[l]||u)&&h(m,w)},{deep:u}),E}else return T({get(){return D()},set(b){h(m,b)}})}function WF({window:e=ne}={}){if(!e)return ns(!1);const l=ns(e.document.hasFocus());return $s(e,"blur",()=>{l.value=!1}),$s(e,"focus",()=>{l.value=!0}),l}function Rd(e={}){const{window:l=ne,initialWidth:o=1/0,initialHeight:t=1/0,listenOrientation:a=!0,includeScrollbar:r=!0}=e,c=ns(o),p=ns(t),i=()=>{l&&(r?(c.value=l.innerWidth,p.value=l.innerHeight):(c.value=l.document.documentElement.clientWidth,p.value=l.document.documentElement.clientHeight))};return i(),Sa(i),$s("resize",i,{passive:!0}),a&&$s("orientationchange",i,{passive:!0}),{width:c,height:p}}function Id(){return oi().__VUE_DEVTOOLS_GLOBAL_HOOK__}function oi(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Vd=typeof Proxy=="function",jd="devtools-plugin:setup",Hd="plugin:settings:set";let Zl,Wt;function zd(){var e;return Zl!==void 0||(typeof window<"u"&&window.performance?(Zl=!0,Wt=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Zl=!0,Wt=global.perf_hooks.performance):Zl=!1),Zl}function Wd(){return zd()?Wt.now():Date.now()}class Ud{constructor(l,o){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=l,this.hook=o;const t={};if(l.settings)for(const c in l.settings){const p=l.settings[c];t[c]=p.defaultValue}const a=`__vue-devtools-plugin-settings__${l.id}`;let r=Object.assign({},t);try{const c=localStorage.getItem(a),p=JSON.parse(c);Object.assign(r,p)}catch{}this.fallbacks={getSettings(){return r},setSettings(c){try{localStorage.setItem(a,JSON.stringify(c))}catch{}r=c},now(){return Wd()}},o&&o.on(Hd,(c,p)=>{c===this.plugin.id&&this.fallbacks.setSettings(p)}),this.proxiedOn=new Proxy({},{get:(c,p)=>this.target?this.target.on[p]:(...i)=>{this.onQueue.push({method:p,args:i})}}),this.proxiedTarget=new Proxy({},{get:(c,p)=>this.target?this.target[p]:p==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(p)?(...i)=>(this.targetQueue.push({method:p,args:i,resolve:()=>{}}),this.fallbacks[p](...i)):(...i)=>new Promise(y=>{this.targetQueue.push({method:p,args:i,resolve:y})})})}async setRealTarget(l){this.target=l;for(const o of this.onQueue)this.target.on[o.method](...o.args);for(const o of this.targetQueue)o.resolve(await this.target[o.method](...o.args))}}function qd(e,l){const o=e,t=oi(),a=Id(),r=Vd&&o.enableEarlyProxy;if(a&&(t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))a.emit(jd,e,l);else{const c=r?new Ud(o,a):null;(t.__VUE_DEVTOOLS_PLUGINS__=t.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:o,setupFn:l,proxy:c}),c&&l(c.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ze=typeof window<"u";function Kd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ws=Object.assign;function yt(e,l){const o={};for(const t in l){const a=l[t];o[t]=_e(a)?a.map(e):e(a)}return o}const In=()=>{},_e=Array.isArray;function _s(e){const l=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(l))}const Jd=/\/$/,Yd=e=>e.replace(Jd,"");function ut(e,l,o="/"){let t,a={},r="",c="";const p=l.indexOf("#");let i=l.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(t=l.slice(0,i),r=l.slice(i+1,p>-1?p:l.length),a=e(r)),p>-1&&(t=t||l.slice(0,p),c=l.slice(p,l.length)),t=Qd(t??l,o),{fullPath:t+(r&&"?")+r+c,path:t,query:a,hash:c}}function Zd(e,l){const o=l.query?e(l.query):"";return l.path+(o&&"?")+o+(l.hash||"")}function Yr(e,l){return!l||!e.toLowerCase().startsWith(l.toLowerCase())?e:e.slice(l.length)||"/"}function Zr(e,l,o){const t=l.matched.length-1,a=o.matched.length-1;return t>-1&&t===a&&ml(l.matched[t],o.matched[a])&&ti(l.params,o.params)&&e(l.query)===e(o.query)&&l.hash===o.hash}function ml(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function ti(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const o in e)if(!Gd(e[o],l[o]))return!1;return!0}function Gd(e,l){return _e(e)?Gr(e,l):_e(l)?Gr(l,e):e===l}function Gr(e,l){return _e(l)?e.length===l.length&&e.every((o,t)=>o===l[t]):e.length===1&&e[0]===l}function Qd(e,l){if(e.startsWith("/"))return e;if(!l.startsWith("/"))return _s(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${l}". It should look like "/${l}".`),e;if(!e)return l;const o=l.split("/"),t=e.split("/");let a=o.length-1,r,c;for(r=0;r<t.length;r++)if(c=t[r],c!==".")if(c==="..")a>1&&a--;else break;return o.slice(0,a).join("/")+"/"+t.slice(r-(r===t.length?1:0)).join("/")}var Zn;(function(e){e.pop="pop",e.push="push"})(Zn||(Zn={}));var Vn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Vn||(Vn={}));function Xd(e){if(!e)if(Ze){const l=document.querySelector("base");e=l&&l.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Yd(e)}const sf=/^[^#]+#/;function ef(e,l){return e.replace(sf,"#")+l}function lf(e,l){const o=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:l.behavior,left:t.left-o.left-(l.left||0),top:t.top-o.top-(l.top||0)}}const nt=()=>({left:window.pageXOffset,top:window.pageYOffset});function nf(e){let l;if("el"in e){const o=e.el,t=typeof o=="string"&&o.startsWith("#");if(typeof e.el=="string"&&(!t||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(t&&r){_s(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{_s(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof o=="string"?t?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!a){_s(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}l=lf(a,e)}else l=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function Qr(e,l){return(history.state?history.state.position-l:-1)+e}const Ut=new Map;function of(e,l){Ut.set(e,l)}function tf(e){const l=Ut.get(e);return Ut.delete(e),l}let af=()=>location.protocol+"//"+location.host;function ai(e,l){const{pathname:o,search:t,hash:a}=l,r=e.indexOf("#");if(r>-1){let p=a.includes(e.slice(r))?e.slice(r).length:1,i=a.slice(p);return i[0]!=="/"&&(i="/"+i),Yr(i,"")}return Yr(o,e)+t+a}function rf(e,l,o,t){let a=[],r=[],c=null;const p=({state:f})=>{const h=ai(e,location),m=o.value,_=l.value;let D=0;if(f){if(o.value=h,l.value=f,c&&c===m){c=null;return}D=_?f.position-_.position:0}else t(h);a.forEach(b=>{b(o.value,m,{delta:D,type:Zn.pop,direction:D?D>0?Vn.forward:Vn.back:Vn.unknown})})};function i(){c=o.value}function y(f){a.push(f);const h=()=>{const m=a.indexOf(f);m>-1&&a.splice(m,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(ws({},f.state,{scroll:nt()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:y,destroy:d}}function Xr(e,l,o,t=!1,a=!1){return{back:e,current:l,forward:o,replaced:t,position:window.history.length,scroll:a?nt():null}}function cf(e){const{history:l,location:o}=window,t={value:ai(e,o)},a={value:l.state};a.value||r(t.value,{back:null,current:t.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function r(i,y,u){const d=e.indexOf("#"),f=d>-1?(o.host&&document.querySelector("base")?e:e.slice(d))+i:af()+e+i;try{l[u?"replaceState":"pushState"](y,"",f),a.value=y}catch(h){_s("Error with push/replace State",h),o[u?"replace":"assign"](f)}}function c(i,y){const u=ws({},l.state,Xr(a.value.back,i,a.value.forward,!0),y,{position:a.value.position});r(i,u,!0),t.value=i}function p(i,y){const u=ws({},a.value,l.state,{forward:i,scroll:nt()});l.state||_s(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(u.current,u,!0);const d=ws({},Xr(t.value,i,null),{position:u.position+1},y);r(i,d,!1),t.value=i}return{location:t,state:a,push:p,replace:c}}function pf(e){e=Xd(e);const l=cf(e),o=rf(e,l.state,l.location,l.replace);function t(r,c=!0){c||o.pauseListeners(),history.go(r)}const a=ws({location:"",base:e,go:t,createHref:ef.bind(null,e)},l,o);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>l.state.value}),a}function yf(e){return typeof e=="string"||e&&typeof e=="object"}function ri(e){return typeof e=="string"||typeof e=="symbol"}const rl={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ci=Symbol("navigation failure");var sc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(sc||(sc={}));const uf={[1]({location:e,currentLocation:l}){return`No match for
 ${JSON.stringify(e)}${l?`
while being at
`+JSON.stringify(l):""}`},[2]({from:e,to:l}){return`Redirected from "${e.fullPath}" to "${ff(l)}" via a navigation guard.`},[4]({from:e,to:l}){return`Navigation aborted from "${e.fullPath}" to "${l.fullPath}" via a navigation guard.`},[8]({from:e,to:l}){return`Navigation cancelled from "${e.fullPath}" to "${l.fullPath}" with a new navigation.`},[16]({from:e,to:l}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Bn(e,l){return ws(new Error(uf[e](l)),{type:e,[ci]:!0},l)}function Ue(e,l){return e instanceof Error&&ci in e&&(l==null||!!(e.type&l))}const df=["params","query","hash"];function ff(e){if(typeof e=="string")return e;if("path"in e)return e.path;const l={};for(const o of df)o in e&&(l[o]=e[o]);return JSON.stringify(l,null,2)}const ec="[^/]+?",Bf={sensitive:!1,strict:!1,start:!0,end:!0},hf=/[.+*?^${}()[\]/\\]/g;function mf(e,l){const o=ws({},Bf,l),t=[];let a=o.start?"^":"";const r=[];for(const y of e){const u=y.length?[]:[90];o.strict&&!y.length&&(a+="/");for(let d=0;d<y.length;d++){const f=y[d];let h=40+(o.sensitive?.25:0);if(f.type===0)d||(a+="/"),a+=f.value.replace(hf,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:_,optional:D,regexp:b}=f;r.push({name:m,repeatable:_,optional:D});const E=b||ec;if(E!==ec){h+=10;try{new RegExp(`(${E})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${m}" (${E}): `+H.message)}}let w=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(w=D&&y.length<2?`(?:/${w})`:"/"+w),D&&(w+="?"),a+=w,h+=20,D&&(h+=-8),_&&(h+=-20),E===".*"&&(h+=-50)}u.push(h)}t.push(u)}if(o.strict&&o.end){const y=t.length-1;t[y][t[y].length-1]+=.7000000000000001}o.strict||(a+="/?"),o.end?a+="$":o.strict&&(a+="(?:/|$)");const c=new RegExp(a,o.sensitive?"":"i");function p(y){const u=y.match(c),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",m=r[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function i(y){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:D}=h,b=m in y?y[m]:"";if(_e(b)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const E=_e(b)?b.join("/"):b;if(!E)if(D)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=E}}return u||"/"}return{re:c,score:t,keys:r,parse:p,stringify:i}}function Af(e,l){let o=0;for(;o<e.length&&o<l.length;){const t=l[o]-e[o];if(t)return t;o++}return e.length<l.length?e.length===1&&e[0]===40+40?-1:1:e.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function vf(e,l){let o=0;const t=e.score,a=l.score;for(;o<t.length&&o<a.length;){const r=Af(t[o],a[o]);if(r)return r;o++}if(Math.abs(a.length-t.length)===1){if(lc(t))return 1;if(lc(a))return-1}return a.length-t.length}function lc(e){const l=e[e.length-1];return e.length>0&&l[l.length-1]<0}const Df={type:0,value:""},_f=/[a-zA-Z0-9_]/;function Cf(e){if(!e)return[[]];if(e==="/")return[[Df]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function l(h){throw new Error(`ERR (${o})/"${y}": ${h}`)}let o=0,t=o;const a=[];let r;function c(){r&&a.push(r),r=[]}let p=0,i,y="",u="";function d(){y&&(o===0?r.push({type:0,value:y}):o===1||o===2||o===3?(r.length>1&&(i==="*"||i==="+")&&l(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:y,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):l("Invalid state to consume buffer"),y="")}function f(){y+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&o!==2){t=o,o=4;continue}switch(o){case 0:i==="/"?(y&&d(),c()):i===":"?(d(),o=1):f();break;case 4:f(),o=t;break;case 1:i==="("?o=2:_f.test(i)?f():(d(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:o=3:u+=i;break;case 3:d(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,u="";break;default:l("Unknown state");break}}return o===2&&l(`Unfinished custom RegExp for param "${y}"`),d(),c(),a}function gf(e,l,o){const t=mf(Cf(e.path),o);{const r=new Set;for(const c of t.keys)r.has(c.name)&&_s(`Found duplicated params with name "${c.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(c.name)}const a=ws(t,{record:e,parent:l,children:[],alias:[]});return l&&!a.record.aliasOf==!l.record.aliasOf&&l.children.push(a),a}function Ef(e,l){const o=[],t=new Map;l=tc({strict:!1,end:!0,sensitive:!1},l);function a(u){return t.get(u)}function r(u,d,f){const h=!f,m=Ff(u);wf(m,d),m.aliasOf=f&&f.record;const _=tc(l,u),D=[m];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of w)D.push(ws({},m,{components:f?f.record.components:m.components,path:H,aliasOf:f?f.record:m}))}let b,E;for(const w of D){const{path:H}=w;if(d&&H[0]!=="/"){const ss=d.record.path,q=ss[ss.length-1]==="/"?"":"/";w.path=d.record.path+(H&&q+H)}if(w.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(b=gf(w,d,_),d&&H[0]==="/"&&$f(b,d),f?(f.alias.push(b),bf(f,b)):(E=E||b,E!==b&&E.alias.push(b),h&&u.name&&!oc(b)&&c(u.name)),m.children){const ss=m.children;for(let q=0;q<ss.length;q++)r(ss[q],b,f&&f.children[q])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&i(b)}return E?()=>{c(E)}:In}function c(u){if(ri(u)){const d=t.get(u);d&&(t.delete(u),o.splice(o.indexOf(d),1),d.children.forEach(c),d.alias.forEach(c))}else{const d=o.indexOf(u);d>-1&&(o.splice(d,1),u.record.name&&t.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function p(){return o}function i(u){let d=0;for(;d<o.length&&vf(u,o[d])>=0&&(u.record.path!==o[d].record.path||!pi(u,o[d]));)d++;o.splice(d,0,u),u.record.name&&!oc(u)&&t.set(u.record.name,u)}function y(u,d){let f,h={},m,_;if("name"in u&&u.name){if(f=t.get(u.name),!f)throw Bn(1,{location:u});{const E=Object.keys(u.params||{}).filter(w=>!f.keys.find(H=>H.name===w));E.length&&_s(`Discarded invalid param(s) "${E.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=f.record.name,h=ws(nc(d.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&nc(u.params,f.keys.map(E=>E.name))),m=f.stringify(h)}else if("path"in u)m=u.path,m.startsWith("/")||_s(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=o.find(E=>E.re.test(m)),f&&(h=f.parse(m),_=f.record.name);else{if(f=d.name?t.get(d.name):o.find(E=>E.re.test(d.path)),!f)throw Bn(1,{location:u,currentLocation:d});_=f.record.name,h=ws({},d.params,u.params),m=f.stringify(h)}const D=[];let b=f;for(;b;)D.unshift(b.record),b=b.parent;return{name:_,path:m,params:h,matched:D,meta:kf(D)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:y,removeRoute:c,getRoutes:p,getRecordMatcher:a}}function nc(e,l){const o={};for(const t of l)t in e&&(o[t]=e[t]);return o}function Ff(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:xf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function xf(e){const l={},o=e.props||!1;if("component"in e)l.default=o;else for(const t in e.components)l[t]=typeof o=="boolean"?o:o[t];return l}function oc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function kf(e){return e.reduce((l,o)=>ws(l,o.meta),{})}function tc(e,l){const o={};for(const t in e)o[t]=t in l?l[t]:e[t];return o}function qt(e,l){return e.name===l.name&&e.optional===l.optional&&e.repeatable===l.repeatable}function bf(e,l){for(const o of e.keys)if(!o.optional&&!l.keys.find(qt.bind(null,o)))return _s(`Alias "${l.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${o.name}"`);for(const o of l.keys)if(!o.optional&&!e.keys.find(qt.bind(null,o)))return _s(`Alias "${l.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${o.name}"`)}function wf(e,l){l&&l.record.name&&!e.name&&!e.path&&_s(`The route named "${String(l.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function $f(e,l){for(const o of l.keys)if(!e.keys.find(qt.bind(null,o)))return _s(`Absolute path "${e.record.path}" must have the exact same param named "${o.name}" as its parent "${l.record.path}".`)}function pi(e,l){return l.children.some(o=>o===e||pi(e,o))}const ii=/#/g,Sf=/&/g,Pf=/\//g,Of=/=/g,Tf=/\?/g,yi=/\+/g,Mf=/%5B/g,Nf=/%5D/g,ui=/%5E/g,Lf=/%60/g,di=/%7B/g,Rf=/%7C/g,fi=/%7D/g,If=/%20/g;function Pa(e){return encodeURI(""+e).replace(Rf,"|").replace(Mf,"[").replace(Nf,"]")}function Vf(e){return Pa(e).replace(di,"{").replace(fi,"}").replace(ui,"^")}function Kt(e){return Pa(e).replace(yi,"%2B").replace(If,"+").replace(ii,"%23").replace(Sf,"%26").replace(Lf,"`").replace(di,"{").replace(fi,"}").replace(ui,"^")}function jf(e){return Kt(e).replace(Of,"%3D")}function Hf(e){return Pa(e).replace(ii,"%23").replace(Tf,"%3F")}function zf(e){return e==null?"":Hf(e).replace(Pf,"%2F")}function Gn(e){try{return decodeURIComponent(""+e)}catch{_s(`Error decoding "${e}". Using original value`)}return""+e}function Wf(e){const l={};if(e===""||e==="?")return l;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<t.length;++a){const r=t[a].replace(yi," "),c=r.indexOf("="),p=Gn(c<0?r:r.slice(0,c)),i=c<0?null:Gn(r.slice(c+1));if(p in l){let y=l[p];_e(y)||(y=l[p]=[y]),y.push(i)}else l[p]=i}return l}function ac(e){let l="";for(let o in e){const t=e[o];if(o=jf(o),t==null){t!==void 0&&(l+=(l.length?"&":"")+o);continue}(_e(t)?t.map(r=>r&&Kt(r)):[t&&Kt(t)]).forEach(r=>{r!==void 0&&(l+=(l.length?"&":"")+o,r!=null&&(l+="="+r))})}return l}function Uf(e){const l={};for(const o in e){const t=e[o];t!==void 0&&(l[o]=_e(t)?t.map(a=>a==null?null:""+a):t==null?t:""+t)}return l}const qf=Symbol("router view location matched"),rc=Symbol("router view depth"),Oa=Symbol("router"),Bi=Symbol("route location"),Jt=Symbol("router view location");function gn(){let e=[];function l(t){return e.push(t),()=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)}}function o(){e=[]}return{add:l,list:()=>e,reset:o}}function pl(e,l,o,t,a){const r=t&&(t.enterCallbacks[a]=t.enterCallbacks[a]||[]);return()=>new Promise((c,p)=>{const i=d=>{d===!1?p(Bn(4,{from:o,to:l})):d instanceof Error?p(d):yf(d)?p(Bn(2,{from:l,to:d})):(r&&t.enterCallbacks[a]===r&&typeof d=="function"&&r.push(d),c())},y=e.call(t&&t.instances[a],l,o,Kf(i,l,o));let u=Promise.resolve(y);if(e.length<3&&(u=u.then(i)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof y=="object"&&"then"in y)u=u.then(f=>i._called?f:(_s(d),Promise.reject(new Error("Invalid navigation guard"))));else if(y!==void 0&&!i._called){_s(d),p(new Error("Invalid navigation guard"));return}}u.catch(d=>p(d))})}function Kf(e,l,o){let t=0;return function(){t++===1&&_s(`The "next" callback was called more than once in one navigation guard when going from "${o.fullPath}" to "${l.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,t===1&&e.apply(null,arguments)}}function dt(e,l,o,t){const a=[];for(const r of e){!r.components&&!r.children.length&&_s(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const c in r.components){let p=r.components[c];{if(!p||typeof p!="object"&&typeof p!="function")throw _s(`Component "${c}" in record with path "${r.path}" is not a valid component. Received "${String(p)}".`),new Error("Invalid route component");if("then"in p){_s(`Component "${c}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const i=p;p=()=>i}else p.__asyncLoader&&!p.__warnedDefineAsync&&(p.__warnedDefineAsync=!0,_s(`Component "${c}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(l!=="beforeRouteEnter"&&!r.instances[c]))if(Jf(p)){const y=(p.__vccOpts||p)[l];y&&a.push(pl(y,o,t,r,c))}else{let i=p();"catch"in i||(_s(`Component "${c}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),i=Promise.resolve(i)),a.push(()=>i.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${r.path}"`));const u=Kd(y)?y.default:y;r.components[c]=u;const f=(u.__vccOpts||u)[l];return f&&pl(f,o,t,r,c)()}))}}}return a}function Jf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function cc(e){const l=$(Oa),o=$(Bi),t=T(()=>l.resolve(g(e.to))),a=T(()=>{const{matched:i}=t.value,{length:y}=i,u=i[y-1],d=o.matched;if(!u||!d.length)return-1;const f=d.findIndex(ml.bind(null,u));if(f>-1)return f;const h=pc(i[y-2]);return y>1&&pc(u)===h&&d[d.length-1].path!==h?d.findIndex(ml.bind(null,i[y-2])):f}),r=T(()=>a.value>-1&&Qf(o.params,t.value.params)),c=T(()=>a.value>-1&&a.value===o.matched.length-1&&ti(o.params,t.value.params));function p(i={}){return Gf(i)?l[g(e.replace)?"replace":"push"](g(e.to)).catch(In):Promise.resolve()}if(Ze){const i=Al();if(i){const y={route:t.value,isActive:r.value,isExactActive:c.value};i.__vrl_devtools=i.__vrl_devtools||[],i.__vrl_devtools.push(y),mn(()=>{y.route=t.value,y.isActive=r.value,y.isExactActive=c.value},{flush:"post"})}}return{route:t,href:T(()=>t.value.href),isActive:r,isExactActive:c,navigate:p}}const Yf=Vs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cc,setup(e,{slots:l}){const o=ee(cc(e)),{options:t}=$(Oa),a=T(()=>({[ic(e.activeClass,t.linkActiveClass,"router-link-active")]:o.isActive,[ic(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const r=l.default&&l.default(o);return e.custom?r:lt("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:a.value},r)}}}),Zf=Yf;function Gf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const l=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return e.preventDefault&&e.preventDefault(),!0}}function Qf(e,l){for(const o in l){const t=l[o],a=e[o];if(typeof t=="string"){if(t!==a)return!1}else if(!_e(a)||a.length!==t.length||t.some((r,c)=>r!==a[c]))return!1}return!0}function pc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ic=(e,l,o)=>e??l??o,Xf=Vs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:l,slots:o}){e3();const t=$(Jt),a=T(()=>e.route||t.value),r=$(rc,0),c=T(()=>{let y=g(r);const{matched:u}=a.value;let d;for(;(d=u[y])&&!d.components;)y++;return y}),p=T(()=>a.value.matched[c.value]);me(rc,T(()=>c.value+1)),me(qf,p),me(Jt,a);const i=ns();return js(()=>[i.value,p.value,e.name],([y,u,d],[f,h,m])=>{u&&(u.instances[d]=y,h&&h!==u&&y&&y===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),y&&u&&(!h||!ml(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(y))},{flush:"post"}),()=>{const y=a.value,u=e.name,d=p.value,f=d&&d.components[u];if(!f)return yc(o.default,{Component:f,route:y});const h=d.props[u],m=h?h===!0?y.params:typeof h=="function"?h(y):h:null,D=lt(f,ws({},m,l,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[u]=null)},ref:i}));if(Ze&&D.ref){const b={depth:c.value,name:d.name,path:d.path,meta:d.meta};(_e(D.ref)?D.ref.map(w=>w.i):[D.ref.i]).forEach(w=>{w.__vrv_devtools=b})}return yc(o.default,{Component:D,route:y})||D}}});function yc(e,l){if(!e)return null;const o=e(l);return o.length===1?o[0]:o}const s3=Xf;function e3(){const e=Al(),l=e.parent&&e.parent.type.name;if(l&&(l==="KeepAlive"||l.includes("Transition"))){const o=l==="KeepAlive"?"keep-alive":"transition";_s(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function En(e,l){const o=ws({},e,{matched:e.matched.map(t=>i3(t,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:l,value:o}}}function yo(e){return{_custom:{display:e}}}let l3=0;function n3(e,l,o){if(l.__hasDevtools)return;l.__hasDevtools=!0;const t=l3++;qd({id:"org.vuejs.router"+(t?"."+t:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((u,d)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:En(l.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:u,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:hi})}_e(d.__vrl_devtools)&&(d.__devtoolsApi=a,d.__vrl_devtools.forEach(f=>{let h=vi,m="";f.isExactActive?(h=Ai,m="This is exactly active"):f.isActive&&(h=mi,m="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),js(l.currentRoute,()=>{i(),a.notifyComponentUpdate(),a.sendInspectorTree(p),a.sendInspectorState(p)});const r="router:navigations:"+t;a.addTimelineLayer({id:r,label:`Router${t?" "+t:""} Navigations`,color:4237508}),l.onError((u,d)=>{a.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:a.now(),data:{error:u},groupId:d.meta.__navigationId}})});let c=0;l.beforeEach((u,d)=>{const f={guard:yo("beforeEach"),from:En(d,"Current Location during this navigation"),to:En(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:c++}),a.addTimelineEvent({layerId:r,event:{time:a.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),l.afterEach((u,d,f)=>{const h={guard:yo("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=yo("❌")):h.status=yo("✅"),h.from=En(d,"Current Location during this navigation"),h.to=En(u,"Target location"),a.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:u.fullPath,time:a.now(),data:h,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const p="router-inspector:"+t;a.addInspector({id:p,label:"Routes"+(t?" "+t:""),icon:"book",treeFilterPlaceholder:"Search routes"});function i(){if(!y)return;const u=y;let d=o.getRoutes().filter(f=>!f.parent);d.forEach(Ci),u.filter&&(d=d.filter(f=>Yt(f,u.filter.toLowerCase()))),d.forEach(f=>_i(f,l.currentRoute.value)),u.rootNodes=d.map(Di)}let y;a.on.getInspectorTree(u=>{y=u,u.app===e&&u.inspectorId===p&&i()}),a.on.getInspectorState(u=>{if(u.app===e&&u.inspectorId===p){const f=o.getRoutes().find(h=>h.record.__vd_id===u.nodeId);f&&(u.state={options:t3(f)})}}),a.sendInspectorTree(p),a.sendInspectorState(p)})}function o3(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function t3(e){const{record:l}=e,o=[{editable:!1,key:"path",value:l.path}];return l.name!=null&&o.push({editable:!1,key:"name",value:l.name}),o.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&o.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(t=>`${t.name}${o3(t)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),l.redirect!=null&&o.push({editable:!1,key:"redirect",value:l.redirect}),e.alias.length&&o.push({editable:!1,key:"aliases",value:e.alias.map(t=>t.record.path)}),Object.keys(e.record.meta).length&&o.push({editable:!1,key:"meta",value:e.record.meta}),o.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(t=>t.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),o}const hi=15485081,mi=2450411,Ai=8702998,a3=2282478,vi=16486972,r3=6710886;function Di(e){const l=[],{record:o}=e;o.name!=null&&l.push({label:String(o.name),textColor:0,backgroundColor:a3}),o.aliasOf&&l.push({label:"alias",textColor:0,backgroundColor:vi}),e.__vd_match&&l.push({label:"matches",textColor:0,backgroundColor:hi}),e.__vd_exactActive&&l.push({label:"exact",textColor:0,backgroundColor:Ai}),e.__vd_active&&l.push({label:"active",textColor:0,backgroundColor:mi}),o.redirect&&l.push({label:typeof o.redirect=="string"?`redirect: ${o.redirect}`:"redirects",textColor:16777215,backgroundColor:r3});let t=o.__vd_id;return t==null&&(t=String(c3++),o.__vd_id=t),{id:t,label:o.path,tags:l,children:e.children.map(Di)}}let c3=0;const p3=/^\/(.*)\/([a-z]*)$/;function _i(e,l){const o=l.matched.length&&ml(l.matched[l.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=o,o||(e.__vd_active=l.matched.some(t=>ml(t,e.record))),e.children.forEach(t=>_i(t,l))}function Ci(e){e.__vd_match=!1,e.children.forEach(Ci)}function Yt(e,l){const o=String(e.re).match(p3);if(e.__vd_match=!1,!o||o.length<3)return!1;if(new RegExp(o[1].replace(/\$$/,""),o[2]).test(l))return e.children.forEach(c=>Yt(c,l)),e.record.path!=="/"||l==="/"?(e.__vd_match=e.re.test(l),!0):!1;const a=e.record.path.toLowerCase(),r=Gn(a);return!l.startsWith("/")&&(r.includes(l)||a.includes(l))||r.startsWith(l)||a.startsWith(l)||e.record.name&&String(e.record.name).includes(l)?!0:e.children.some(c=>Yt(c,l))}function i3(e,l){const o={};for(const t in e)l.includes(t)||(o[t]=e[t]);return o}function y3(e){const l=Ef(e.routes,e),o=e.parseQuery||Wf,t=e.stringifyQuery||ac,a=e.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=gn(),c=gn(),p=gn(),i=je(rl);let y=rl;Ze&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yt.bind(null,k=>""+k),d=yt.bind(null,zf),f=yt.bind(null,Gn);function h(k,es){let Z,X;return ri(k)?(Z=l.getRecordMatcher(k),X=es):X=k,l.addRoute(X,Z)}function m(k){const es=l.getRecordMatcher(k);es?l.removeRoute(es):_s(`Cannot remove non-existent route "${String(k)}"`)}function _(){return l.getRoutes().map(k=>k.record)}function D(k){return!!l.getRecordMatcher(k)}function b(k,es){if(es=ws({},es||i.value),typeof k=="string"){const ps=ut(o,k,es.path),Ms=l.resolve({path:ps.path},es),B=a.createHref(ps.fullPath);return B.startsWith("//")?_s(`Location "${k}" resolved to "${B}". A resolved location cannot start with multiple slashes.`):Ms.matched.length||_s(`No match found for location with path "${k}"`),ws(ps,Ms,{params:f(Ms.params),hash:Gn(ps.hash),redirectedFrom:void 0,href:B})}let Z;if("path"in k)"params"in k&&!("name"in k)&&Object.keys(k.params).length&&_s(`Path "${k.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),Z=ws({},k,{path:ut(o,k.path,es.path).path});else{const ps=ws({},k.params);for(const Ms in ps)ps[Ms]==null&&delete ps[Ms];Z=ws({},k,{params:d(k.params)}),es.params=d(es.params)}const X=l.resolve(Z,es),ms=k.hash||"";ms&&!ms.startsWith("#")&&_s(`A \`hash\` should always start with the character "#". Replace "${ms}" with "#${ms}".`),X.params=u(f(X.params));const Fs=Zd(t,ws({},k,{hash:Vf(ms),path:X.path})),cs=a.createHref(Fs);return cs.startsWith("//")?_s(`Location "${k}" resolved to "${cs}". A resolved location cannot start with multiple slashes.`):X.matched.length||_s(`No match found for location with path "${"path"in k?k.path:k}"`),ws({fullPath:Fs,hash:ms,query:t===ac?Uf(k.query):k.query||{}},X,{redirectedFrom:void 0,href:cs})}function E(k){return typeof k=="string"?ut(o,k,i.value.path):ws({},k)}function w(k,es){if(y!==k)return Bn(8,{from:es,to:k})}function H(k){return z(k)}function ss(k){return H(ws(E(k),{replace:!0}))}function q(k){const es=k.matched[k.matched.length-1];if(es&&es.redirect){const{redirect:Z}=es;let X=typeof Z=="function"?Z(k):Z;if(typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=E(X):{path:X},X.params={}),!("path"in X)&&!("name"in X))throw _s(`Invalid redirect found:
${JSON.stringify(X,null,2)}
 when navigating to "${k.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ws({query:k.query,hash:k.hash,params:"path"in X?{}:k.params},X)}}function z(k,es){const Z=y=b(k),X=i.value,ms=k.state,Fs=k.force,cs=k.replace===!0,ps=q(Z);if(ps)return z(ws(E(ps),{state:typeof ps=="object"?ws({},ms,ps.state):ms,force:Fs,replace:cs}),es||Z);const Ms=Z;Ms.redirectedFrom=es;let B;return!Fs&&Zr(t,X,Z)&&(B=Bn(16,{to:Ms,from:X}),bs(X,X,!0,!1)),(B?Promise.resolve(B):Bs(Ms,X)).catch(A=>Ue(A)?Ue(A,2)?A:As(A):Q(A,Ms,X)).then(A=>{if(A){if(Ue(A,2))return Zr(t,b(A.to),Ms)&&es&&(es._count=es._count?es._count+1:1)>10?(_s(`Detected an infinite redirection in a navigation guard when going from "${X.fullPath}" to "${Ms.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):z(ws({replace:cs},E(A.to),{state:typeof A.to=="object"?ws({},ms,A.to.state):ms,force:Fs}),es||Ms)}else A=Cs(Ms,X,!0,cs,ms);return fs(Ms,X,A),A})}function ts(k,es){const Z=w(k,es);return Z?Promise.reject(Z):Promise.resolve()}function Bs(k,es){let Z;const[X,ms,Fs]=u3(k,es);Z=dt(X.reverse(),"beforeRouteLeave",k,es);for(const ps of X)ps.leaveGuards.forEach(Ms=>{Z.push(pl(Ms,k,es))});const cs=ts.bind(null,k,es);return Z.push(cs),Gl(Z).then(()=>{Z=[];for(const ps of r.list())Z.push(pl(ps,k,es));return Z.push(cs),Gl(Z)}).then(()=>{Z=dt(ms,"beforeRouteUpdate",k,es);for(const ps of ms)ps.updateGuards.forEach(Ms=>{Z.push(pl(Ms,k,es))});return Z.push(cs),Gl(Z)}).then(()=>{Z=[];for(const ps of k.matched)if(ps.beforeEnter&&!es.matched.includes(ps))if(_e(ps.beforeEnter))for(const Ms of ps.beforeEnter)Z.push(pl(Ms,k,es));else Z.push(pl(ps.beforeEnter,k,es));return Z.push(cs),Gl(Z)}).then(()=>(k.matched.forEach(ps=>ps.enterCallbacks={}),Z=dt(Fs,"beforeRouteEnter",k,es),Z.push(cs),Gl(Z))).then(()=>{Z=[];for(const ps of c.list())Z.push(pl(ps,k,es));return Z.push(cs),Gl(Z)}).catch(ps=>Ue(ps,8)?ps:Promise.reject(ps))}function fs(k,es,Z){for(const X of p.list())X(k,es,Z)}function Cs(k,es,Z,X,ms){const Fs=w(k,es);if(Fs)return Fs;const cs=es===rl,ps=Ze?history.state:{};Z&&(X||cs?a.replace(k.fullPath,ws({scroll:cs&&ps&&ps.scroll},ms)):a.push(k.fullPath,ms)),i.value=k,bs(k,es,Z,cs),As()}let Rs;function Js(){Rs||(Rs=a.listen((k,es,Z)=>{if(!de.listening)return;const X=b(k),ms=q(X);if(ms){z(ws(ms,{replace:!0}),X).catch(In);return}y=X;const Fs=i.value;Ze&&of(Qr(Fs.fullPath,Z.delta),nt()),Bs(X,Fs).catch(cs=>Ue(cs,12)?cs:Ue(cs,2)?(z(cs.to,X).then(ps=>{Ue(ps,20)&&!Z.delta&&Z.type===Zn.pop&&a.go(-1,!1)}).catch(In),Promise.reject()):(Z.delta&&a.go(-Z.delta,!1),Q(cs,X,Fs))).then(cs=>{cs=cs||Cs(X,Fs,!1),cs&&(Z.delta&&!Ue(cs,8)?a.go(-Z.delta,!1):Z.type===Zn.pop&&Ue(cs,20)&&a.go(-1,!1)),fs(X,Fs,cs)}).catch(In)}))}let Qs=gn(),Ps=gn(),Ns;function Q(k,es,Z){As(k);const X=Ps.list();return X.length?X.forEach(ms=>ms(k,es,Z)):(_s("uncaught error during route navigation:"),console.error(k)),Promise.reject(k)}function rs(){return Ns&&i.value!==rl?Promise.resolve():new Promise((k,es)=>{Qs.add([k,es])})}function As(k){return Ns||(Ns=!k,Js(),Qs.list().forEach(([es,Z])=>k?Z(k):es()),Qs.reset()),k}function bs(k,es,Z,X){const{scrollBehavior:ms}=e;if(!Ze||!ms)return Promise.resolve();const Fs=!Z&&tf(Qr(k.fullPath,0))||(X||!Z)&&history.state&&history.state.scroll||null;return Pe().then(()=>ms(k,es,Fs)).then(cs=>cs&&nf(cs)).catch(cs=>Q(cs,k,es))}const Ce=k=>a.go(k);let ie;const Me=new Set,de={currentRoute:i,listening:!0,addRoute:h,removeRoute:m,hasRoute:D,getRoutes:_,resolve:b,options:e,push:H,replace:ss,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:r.add,beforeResolve:c.add,afterEach:p.add,onError:Ps.add,isReady:rs,install(k){const es=this;k.component("RouterLink",Zf),k.component("RouterView",s3),k.config.globalProperties.$router=es,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>g(i)}),Ze&&!ie&&i.value===rl&&(ie=!0,H(a.location).catch(ms=>{_s("Unexpected error when starting the router:",ms)}));const Z={};for(const ms in rl)Z[ms]=T(()=>i.value[ms]);k.provide(Oa,es),k.provide(Bi,ee(Z)),k.provide(Jt,i);const X=k.unmount;Me.add(k),k.unmount=function(){Me.delete(k),Me.size<1&&(y=rl,Rs&&Rs(),Rs=null,i.value=rl,ie=!1,Ns=!1),X()},Ze&&n3(k,es,l)}};return de}function Gl(e){return e.reduce((l,o)=>l.then(()=>o()),Promise.resolve())}function u3(e,l){const o=[],t=[],a=[],r=Math.max(l.matched.length,e.matched.length);for(let c=0;c<r;c++){const p=l.matched[c];p&&(e.matched.find(y=>ml(y,p))?t.push(p):o.push(p));const i=e.matched[c];i&&(l.matched.find(y=>ml(y,i))||a.push(i))}return[o,t,a]}const ft=ns(!1),jn=ns(!1),tn=ns(!1),d3=ns(!0),Zt=sd({xs:460,...Y5}),Ll=Rd(),gi=xd(),f3=T(()=>Ll.height.value-Ll.width.value/dl>180),Ei=Ed(Oe?document.body:null),pn=J5(),B3=T(()=>{var e,l;return["INPUT","TEXTAREA"].includes(((e=pn.value)==null?void 0:e.tagName)||"")||((l=pn.value)==null?void 0:l.classList.contains("CodeMirror-code"))}),h3=T(()=>{var e;return["BUTTON","A"].includes(((e=pn.value)==null?void 0:e.tagName)||"")});Te("slidev-camera","default");Te("slidev-mic","default");const vo=Te("slidev-scale",0),ae=Te("slidev-show-overview",!1),Bt=Te("slidev-presenter-cursor",!0),uc=Te("slidev-show-editor",!1);Te("slidev-editor-width",Oe?window.innerWidth*.4:100);const Fi=si(ae);function dc(e,l,o,t=a=>a){return e*t(.5-l*(.5-o))}function m3(e){return[-e[0],-e[1]]}function be(e,l){return[e[0]+l[0],e[1]+l[1]]}function Ee(e,l){return[e[0]-l[0],e[1]-l[1]]}function ke(e,l){return[e[0]*l,e[1]*l]}function A3(e,l){return[e[0]/l,e[1]/l]}function Fn(e){return[e[1],-e[0]]}function fc(e,l){return e[0]*l[0]+e[1]*l[1]}function v3(e,l){return e[0]===l[0]&&e[1]===l[1]}function D3(e){return Math.hypot(e[0],e[1])}function _3(e){return e[0]*e[0]+e[1]*e[1]}function Bc(e,l){return _3(Ee(e,l))}function xi(e){return A3(e,D3(e))}function C3(e,l){return Math.hypot(e[1]-l[1],e[0]-l[0])}function xn(e,l,o){let t=Math.sin(o),a=Math.cos(o),r=e[0]-l[0],c=e[1]-l[1],p=r*a-c*t,i=r*t+c*a;return[p+l[0],i+l[1]]}function Gt(e,l,o){return be(e,ke(Ee(l,e),o))}function hc(e,l,o){return be(e,ke(l,o))}var{min:Ql,PI:g3}=Math,mc=.275,kn=g3+1e-4;function E3(e,l={}){let{size:o=16,smoothing:t=.5,thinning:a=.5,simulatePressure:r=!0,easing:c=Q=>Q,start:p={},end:i={},last:y=!1}=l,{cap:u=!0,easing:d=Q=>Q*(2-Q)}=p,{cap:f=!0,easing:h=Q=>--Q*Q*Q+1}=i;if(e.length===0||o<=0)return[];let m=e[e.length-1].runningLength,_=p.taper===!1?0:p.taper===!0?Math.max(o,m):p.taper,D=i.taper===!1?0:i.taper===!0?Math.max(o,m):i.taper,b=Math.pow(o*t,2),E=[],w=[],H=e.slice(0,10).reduce((Q,rs)=>{let As=rs.pressure;if(r){let bs=Ql(1,rs.distance/o),Ce=Ql(1,1-bs);As=Ql(1,Q+(Ce-Q)*(bs*mc))}return(Q+As)/2},e[0].pressure),ss=dc(o,a,e[e.length-1].pressure,c),q,z=e[0].vector,ts=e[0].point,Bs=ts,fs=ts,Cs=Bs,Rs=!1;for(let Q=0;Q<e.length;Q++){let{pressure:rs}=e[Q],{point:As,vector:bs,distance:Ce,runningLength:ie}=e[Q];if(Q<e.length-1&&m-ie<3)continue;if(a){if(r){let Fs=Ql(1,Ce/o),cs=Ql(1,1-Fs);rs=Ql(1,H+(cs-H)*(Fs*mc))}ss=dc(o,a,rs,c)}else ss=o/2;q===void 0&&(q=ss);let Me=ie<_?d(ie/_):1,de=m-ie<D?h((m-ie)/D):1;ss=Math.max(.01,ss*Math.min(Me,de));let k=(Q<e.length-1?e[Q+1]:e[Q]).vector,es=Q<e.length-1?fc(bs,k):1,Z=fc(bs,z)<0&&!Rs,X=es!==null&&es<0;if(Z||X){let Fs=ke(Fn(z),ss);for(let cs=1/13,ps=0;ps<=1;ps+=cs)fs=xn(Ee(As,Fs),As,kn*ps),E.push(fs),Cs=xn(be(As,Fs),As,kn*-ps),w.push(Cs);ts=fs,Bs=Cs,X&&(Rs=!0);continue}if(Rs=!1,Q===e.length-1){let Fs=ke(Fn(bs),ss);E.push(Ee(As,Fs)),w.push(be(As,Fs));continue}let ms=ke(Fn(Gt(k,bs,es)),ss);fs=Ee(As,ms),(Q<=1||Bc(ts,fs)>b)&&(E.push(fs),ts=fs),Cs=be(As,ms),(Q<=1||Bc(Bs,Cs)>b)&&(w.push(Cs),Bs=Cs),H=rs,z=bs}let Js=e[0].point.slice(0,2),Qs=e.length>1?e[e.length-1].point.slice(0,2):be(e[0].point,[1,1]),Ps=[],Ns=[];if(e.length===1){if(!(_||D)||y){let Q=hc(Js,xi(Fn(Ee(Js,Qs))),-(q||ss)),rs=[];for(let As=1/13,bs=As;bs<=1;bs+=As)rs.push(xn(Q,Js,kn*2*bs));return rs}}else{if(!(_||D&&e.length===1))if(u)for(let rs=1/13,As=rs;As<=1;As+=rs){let bs=xn(w[0],Js,kn*As);Ps.push(bs)}else{let rs=Ee(E[0],w[0]),As=ke(rs,.5),bs=ke(rs,.51);Ps.push(Ee(Js,As),Ee(Js,bs),be(Js,bs),be(Js,As))}let Q=Fn(m3(e[e.length-1].vector));if(D||_&&e.length===1)Ns.push(Qs);else if(f){let rs=hc(Qs,Q,ss);for(let As=1/29,bs=As;bs<1;bs+=As)Ns.push(xn(rs,Qs,kn*3*bs))}else Ns.push(be(Qs,ke(Q,ss)),be(Qs,ke(Q,ss*.99)),Ee(Qs,ke(Q,ss*.99)),Ee(Qs,ke(Q,ss)))}return E.concat(Ns,w.reverse(),Ps)}function F3(e,l={}){var o;let{streamline:t=.5,size:a=16,last:r=!1}=l;if(e.length===0)return[];let c=.15+(1-t)*.85,p=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:_=.5})=>[h,m,_]);if(p.length===2){let h=p[1];p=p.slice(0,-1);for(let m=1;m<5;m++)p.push(Gt(p[0],h,m/4))}p.length===1&&(p=[...p,[...be(p[0],[1,1]),...p[0].slice(2)]]);let i=[{point:[p[0][0],p[0][1]],pressure:p[0][2]>=0?p[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,d=i[0],f=p.length-1;for(let h=1;h<p.length;h++){let m=r&&h===f?p[h].slice(0,2):Gt(d.point,p[h],c);if(v3(d.point,m))continue;let _=C3(m,d.point);if(u+=_,h<f&&!y){if(u<a)continue;y=!0}d={point:m,pressure:p[h][2]>=0?p[h][2]:.5,vector:xi(Ee(d.point,m)),distance:_,runningLength:u},i.push(d)}return i[0].vector=((o=i[1])==null?void 0:o.vector)||[0,0],i}function x3(e,l={}){return E3(F3(e,l),l)}var k3=()=>({events:{},emit(e,...l){let o=this.events[e]||[];for(let t=0,a=o.length;t<a;t++)o[t](...l)},on(e,l){var o;return(o=this.events[e])!=null&&o.push(l)||(this.events[e]=[l]),()=>{var t;this.events[e]=(t=this.events[e])==null?void 0:t.filter(a=>l!==a)}}});function Oo(e,l){return e-l}function b3(e){return e<0?-1:1}function To(e){return[Math.abs(e),b3(e)]}function ki(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var w3=2,Ge=w3,An=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var l;const o=this.drauu.el,t=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*t,y:(e.pageY-a.top)*t,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const r=a.matrixTransform((l=o.getScreenCTM())==null?void 0:l.inverse());return{x:r.x*t,y:r.y*t,pressure:e.pressure}}}createElement(e,l){const o=document.createElementNS("http://www.w3.org/2000/svg",e),t=l?{...this.brush,...l}:this.brush;return o.setAttribute("fill",t.fill??"transparent"),o.setAttribute("stroke",t.color),o.setAttribute("stroke-width",t.size.toString()),o.setAttribute("stroke-linecap","round"),t.dasharray&&o.setAttribute("stroke-dasharray",t.dasharray),o}attr(e,l){this.el.setAttribute(e,typeof l=="string"?l:l.toFixed(Ge))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},$3=class extends An{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const l=x3(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!l.length)return"";const o=l.reduce((t,[a,r],c,p)=>{const[i,y]=p[(c+1)%p.length];return t.push(a,r,(a+i)/2,(r+y)/2),t},["M",...l[0],"Q"]);return o.push("Z"),o.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},S3=class extends An{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,o]=To(e.x-this.start.x),[t,a]=To(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(l,t);l=r,t=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",l),this.attr("ry",t);else{const[r,c]=[this.start.x,this.start.x+l*o].sort(Oo),[p,i]=[this.start.y,this.start.y+t*a].sort(Oo);this.attr("cx",(r+c)/2),this.attr("cy",(p+i)/2),this.attr("rx",(c-r)/2),this.attr("ry",(i-p)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function bi(e,l){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",l),t.setAttribute("id",e),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(a),o.appendChild(t),o}var P3=class extends An{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const l=ki(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(bi(l,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${l})`),o}return this.el}onMove(e){if(!this.el)return!1;let{x:l,y:o}=e;if(this.shiftPressed){const t=e.x-this.start.x,a=e.y-this.start.y;if(a!==0){let r=t/a;r=Math.round(r),Math.abs(r)<=1?(l=this.start.x+a*r,o=this.start.y+a):(l=this.start.x+t,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-l),this.attr("y1",this.start.y*2-o),this.attr("x2",l),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",l),this.attr("y2",o)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},O3=class extends An{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,o]=To(e.x-this.start.x),[t,a]=To(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(l,t);l=r,t=r}if(this.altPressed)this.attr("x",this.start.x-l),this.attr("y",this.start.y-t),this.attr("width",l*2),this.attr("height",t*2);else{const[r,c]=[this.start.x,this.start.x+l*o].sort(Oo),[p,i]=[this.start.y,this.start.y+t*a].sort(Oo);this.attr("x",r),this.attr("y",p),this.attr("width",c-r),this.attr("height",i-p)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function T3(e,l){const o=e.x-l.x,t=e.y-l.y;return o*o+t*t}function M3(e,l,o){let t=l.x,a=l.y,r=o.x-t,c=o.y-a;if(r!==0||c!==0){const p=((e.x-t)*r+(e.y-a)*c)/(r*r+c*c);p>1?(t=o.x,a=o.y):p>0&&(t+=r*p,a+=c*p)}return r=e.x-t,c=e.y-a,r*r+c*c}function N3(e,l){let o=e[0];const t=[o];let a;for(let r=1,c=e.length;r<c;r++)a=e[r],T3(a,o)>l&&(t.push(a),o=a);return o!==a&&a&&t.push(a),t}function Qt(e,l,o,t,a){let r=t,c=0;for(let p=l+1;p<o;p++){const i=M3(e[p],e[l],e[o]);i>r&&(c=p,r=i)}r>t&&(c-l>1&&Qt(e,l,c,t,a),a.push(e[c]),o-c>1&&Qt(e,c,o,t,a))}function L3(e,l){const o=e.length-1,t=[e[0]];return Qt(e,0,o,l,t),t.push(e[o]),t}function Ac(e,l,o=!1){if(e.length<=2)return e;const t=l!==void 0?l*l:1;return e=o?e:N3(e,t),e=L3(e,t),e}var R3=class extends An{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=ki();const l=bi(this.arrowId,this.brush.color);this.el.appendChild(l)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ac(this.points,1,!0),this.count=0),this.attr("d",Dc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Dc(Ac(this.points,1,!0))),!e.getTotalLength()))}};function I3(e,l){const o=l.x-e.x,t=l.y-e.y;return{length:Math.sqrt(o**2+t**2),angle:Math.atan2(t,o)}}function vc(e,l,o,t){const a=l||e,r=o||e,c=.2,p=I3(a,r),i=p.angle+(t?Math.PI:0),y=p.length*c,u=e.x+Math.cos(i)*y,d=e.y+Math.sin(i)*y;return{x:u,y:d}}function V3(e,l,o){const t=vc(o[l-1],o[l-2],e),a=vc(e,o[l-1],o[l+1],!0);return`C ${t.x.toFixed(Ge)},${t.y.toFixed(Ge)} ${a.x.toFixed(Ge)},${a.y.toFixed(Ge)} ${e.x.toFixed(Ge)},${e.y.toFixed(Ge)}`}function Dc(e){return e.reduce((l,o,t,a)=>t===0?`M ${o.x.toFixed(Ge)},${o.y.toFixed(Ge)}`:`${l} ${V3(o,t,a)}`,"")}var j3=class extends An{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const l=(o,t)=>{if(o&&o.length)for(let a=0;a<o.length;a++){const r=o[a];if(r.getTotalLength){const c=r.getTotalLength();for(let p=0;p<this.pathSubFactor;p++){const i=r.getPointAtLength(c*p/this.pathSubFactor),y=r.getPointAtLength(c*(p+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:y.x,y1:i.y,y2:y.y,segment:p,element:t||r})}}else r.children&&l(r.children,r)}};e&&l(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const l=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,l}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let l=0;l<this.pathFragments.length;l++){const o=this.pathFragments[l],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,t)&&(o.element.remove(),e.push(l))}return e.length&&(this.pathFragments=this.pathFragments.filter((l,o)=>!e.includes(o))),e.length>0}lineLineIntersect(e,l){const o=e.x1,t=e.x2,a=l.x1,r=l.x2,c=e.y1,p=e.y2,i=l.y1,y=l.y2,u=(o-t)*(i-y)-(c-p)*(a-r),d=(o*p-c*t)*(a-r)-(o-t)*(a*y-i*r),f=(o*p-c*t)*(i-y)-(c-p)*(a*y-i*r),h=(m,_,D)=>m>=_&&m<=D?!0:m>=D&&m<=_;if(u===0)return!1;{const m={x:d/u,y:f/u};return h(m.x,o,t)&&h(m.y,c,p)&&h(m.x,a,r)&&h(m.y,i,y)}}};function H3(e){return{draw:new R3(e),stylus:new $3(e),line:new P3(e),rectangle:new O3(e),ellipse:new S3(e),eraseLine:new j3(e)}}var z3=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=k3(),this._models=H3(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,l){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(l)||this.el,t=this.eventStart.bind(this),a=this.eventMove.bind(this),r=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,l){return this._emitter.on(e,l)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const l=this.model._eventUp(e);l?(l instanceof Element&&l!==this._currentNode&&(this._currentNode=l),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function W3(e){return new z3(e)}const Xt=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ie=Te("slidev-drawing-enabled",!1),UF=Te("slidev-drawing-pinned",!1),U3=ns(!1),q3=ns(!1),K3=ns(!1),Qn=ns(!1),Sl=C5(Te("slidev-drawing-brush",{color:Xt[0],size:4,mode:"stylus"})),_c=ns("stylus"),wi=T(()=>Ts.drawings.syncAll||sl.value);let Xn=!1;const bn=T({get(){return _c.value},set(e){_c.value=e,e==="arrow"?(Sl.mode="line",Sl.arrowEnd=!0):(Sl.mode=e,Sl.arrowEnd=!1)}}),J3=ee({brush:Sl,acceptsInputTypes:T(()=>Ie.value?void 0:["pen"]),coordinateTransform:!1}),pe=ya(W3(J3));function Y3(){pe.clear(),wi.value&&Zp(Gs.value,"")}function $i(){var e;q3.value=pe.canRedo(),U3.value=pe.canUndo(),K3.value=!!((e=pe.el)!=null&&e.children.length)}function Z3(e){Xn=!0;const l=So[e||Gs.value];l!=null?pe.load(l):pe.clear(),Xn=!1}pe.on("changed",()=>{if($i(),!Xn){const e=pe.dump(),l=Gs.value;(So[l]||"")!==e&&wi.value&&Zp(l,pe.dump())}});u5(e=>{Xn=!0,e[Gs.value]!=null&&pe.load(e[Gs.value]||""),Xn=!1,$i()});Pe(()=>{js(Gs,()=>{pe.mounted&&Z3()},{immediate:!0})});pe.on("start",()=>Qn.value=!0);pe.on("end",()=>Qn.value=!1);window.addEventListener("keydown",e=>{if(!Ie.value)return;const l=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let o=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?pe.redo():pe.undo():e.code==="Escape"?Ie.value=!1:e.code==="KeyL"&&l?bn.value="line":e.code==="KeyA"&&l?bn.value="arrow":e.code==="KeyS"&&l?bn.value="stylus":e.code==="KeyR"&&l?bn.value="rectangle":e.code==="KeyE"&&l?bn.value="ellipse":e.code==="KeyC"&&l?Y3():e.code.startsWith("Digit")&&l&&+e.code[5]<=Xt.length?Sl.color=Xt[+e.code[5]-1]:o=!1,o&&(e.preventDefault(),e.stopPropagation())},!1);function Ws(...e){return T(()=>e.every(l=>ce(l)))}function fe(e){return T(()=>!ce(e))}const Cc=id(),ht=Te("slidev-color-schema","auto"),sa=T(()=>Ts.colorSchema!=="auto"),Ta=T({get(){return sa.value?Ts.colorSchema==="dark":ht.value==="auto"?Cc.value:ht.value==="dark"},set(e){sa.value||(ht.value=e===Cc.value?"auto":e?"dark":"light")}}),Si=si(Ta);Oe&&js(Ta,e=>{const l=document.querySelector("html");l.classList.toggle("dark",e),l.classList.toggle("light",!e)},{immediate:!0});const Do=ns(1),_o=T(()=>qs.length-1),ve=ns(0),Ma=ns(0);function G3(){ve.value>Do.value&&(ve.value-=1)}function Q3(){ve.value<_o.value&&(ve.value+=1)}function X3(){if(ve.value>Do.value){let e=ve.value-Ma.value;e<Do.value&&(e=Do.value),ve.value=e}}function sB(){if(ve.value<_o.value){let e=ve.value+Ma.value;e>_o.value&&(e=_o.value),ve.value=e}}function eB(){const{escape:e,space:l,shift:o,left:t,right:a,up:r,down:c,enter:p,d:i,g:y,o:u}=gi;let d=[{name:"next_space",key:Ws(l,fe(o)),fn:Rl,autoRepeat:!0},{name:"prev_space",key:Ws(l,o),fn:Il,autoRepeat:!0},{name:"next_right",key:Ws(a,fe(o),fe(ae)),fn:Rl,autoRepeat:!0},{name:"prev_left",key:Ws(t,fe(o),fe(ae)),fn:Il,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Rl,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Il,autoRepeat:!0},{name:"next_down",key:Ws(c,fe(ae)),fn:No,autoRepeat:!0},{name:"prev_up",key:Ws(r,fe(ae)),fn:()=>Lo(!1),autoRepeat:!0},{name:"next_shift",key:Ws(a,o),fn:No,autoRepeat:!0},{name:"prev_shift",key:Ws(t,o),fn:()=>Lo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ws(i,fe(Ie)),fn:Si},{name:"toggle_overview",key:Ws(u,fe(Ie)),fn:Fi},{name:"hide_overview",key:Ws(e,fe(Ie)),fn:()=>ae.value=!1},{name:"goto",key:Ws(y,fe(Ie)),fn:()=>tn.value=!tn.value},{name:"next_overview",key:Ws(a,ae),fn:Q3},{name:"prev_overview",key:Ws(t,ae),fn:G3},{name:"up_overview",key:Ws(r,ae),fn:X3},{name:"down_overview",key:Ws(c,ae),fn:sB},{name:"goto_from_overview",key:Ws(p,ae),fn:()=>{hn(ve.value),ae.value=!1}}];const f=new Set(d.map(m=>m.name));if(d.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return d}const Pi=Ws(fe(B3),fe(h3),d3);function lB(e,l,o=!1){typeof e=="string"&&(e=gi[e]);const t=Ws(e,Pi);let a=0,r;const c=()=>{if(clearTimeout(r),!t.value){a=0;return}o&&(r=setTimeout(c,Math.max(1e3-a*250,150)),a++),l()};return js(t,c,{flush:"sync"})}function nB(e,l){return K5(e,o=>{Pi.value&&(o.repeat||l())})}function oB(){const e=eB();new Map(e.map(o=>[o.key,o])).forEach(o=>{o.fn&&lB(o.key,o.fn,o.autoRepeat)}),nB("f",()=>Ei.toggle())}const tB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},aB=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),rB=[aB];function cB(e,l){return v(),J("svg",tB,rB)}const pB={name:"carbon-close",render:cB};function Na(e){var o,t;const l=(t=(o=e==null?void 0:e.meta)==null?void 0:o.slide)==null?void 0:t.no;return l!=null?`slidev-page-${l}`:""}const iB=Vs({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const l=e;$(S);const o=ns(),t=gd(o),a=T(()=>l.width?l.width:t.width.value),r=T(()=>l.width?l.width/dl:t.height.value);l.width&&mn(()=>{o.value&&(o.value.style.width=`${a.value}px`,o.value.style.height=`${r.value}px`)});const c=T(()=>a.value/r.value),p=T(()=>l.scale?l.scale:c.value<dl?a.value/fl:r.value*dl/fl),i=T(()=>({height:`${wa}px`,width:`${fl}px`,transform:`translate(-50%, -50%) scale(${p.value})`})),y=T(()=>({"select-none":!Ts.selectable,"slidev-code-line-numbers":Ts.lineNumbers}));return me(Jp,p),(u,d)=>(v(),J("div",{id:"slide-container",ref_key:"root",ref:o,class:Hs(g(y))},[s("div",{id:"slide-content",style:se(g(i))},[nl(u.$slots,"default")],4),nl(u.$slots,"controls")],2))}});const P=(e,l)=>{const o=e.__vccOpts||e;for(const[t,a]of l)o[t]=a;return o},Oi=P(iB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlideContainer.vue"]]),La=Vs({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:l}){const o=Re(e,"clicks",l),t=Re(e,"clicksElements",l),a=Re(e,"clicksDisabled",l),r=Re(e,"clicksOrderMap",l);t.value.length=0,me(e5,e.route),me(l5,e.context),me(Up,o),me(Kp,a),me(qp,t),me(s5,r)},render(){var e,l;return this.$props.is?lt(this.$props.is):(l=(e=this.$slots)==null?void 0:e.default)==null?void 0:l.call(e)}}),yB=["innerHTML"],uB=Vs({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return $(S),(l,o)=>g(So)[e.page]?(v(),J("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:g(So)[e.page]},null,8,yB)):Ds("v-if",!0)}}),Ti=P(uB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),dB=Object.freeze(Object.defineProperty({__proto__:null,default:Ti},Symbol.toStringTag,{value:"Module"})),fB={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},BB=["onClick"],hB=Vs({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:l}){const o=e;$(S);const t=Re(o,"modelValue",l);function a(){t.value=!1}function r(h){hn(h),a()}function c(h){return h===ve.value}const p=Zt.smaller("xs"),i=Zt.smaller("sm"),y=4*16*2,u=2*16,d=T(()=>p.value?Ll.width.value-y:i.value?(Ll.width.value-y-u)/2:300),f=T(()=>Math.floor((Ll.width.value-y)/(d.value+u)));return mn(()=>{ve.value=Gs.value,Ma.value=f.value}),(h,m)=>{const _=pB;return v(),J(ks,null,[He(s("div",fB,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:se(`grid-template-columns: repeat(auto-fit,minmax(${g(d)}px,1fr))`)},[(v(!0),J(ks,null,no(g(qs).slice(0,-1),(D,b)=>(v(),J("div",{key:D.path,class:"relative"},[s("div",{class:Hs(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(b+1)}]),style:se(g($a)),onClick:E=>r(+D.path)},[(v(),M(Oi,{key:D.path,width:g(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:C(()=>[F(g(La),{is:D==null?void 0:D.component,"clicks-disabled":!0,class:Hs(g(Na)(D)),route:D,context:"overview"},null,8,["is","class","route"]),F(Ti,{page:+D.path},null,8,["page"])]),_:2},1032,["width"]))],14,BB),s("div",{class:"absolute top-0 opacity-50",style:se(`left: ${g(d)+5}px`)},Ys(b+1),5)]))),128))],4)],512),[[Wp,g(t)]]),g(t)?(v(),J("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:a},[F(_)])):Ds("v-if",!0)],64)}}});const mB=P(hB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),AB="/vue-3-practices/assets/logo-b72bde5d.png",vB={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},DB=Vs({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:l}){const o=e;$(S);const t=Re(o,"modelValue",l);function a(){t.value=!1}return(r,c)=>(v(),M(Bp,null,[g(t)?(v(),J("div",vB,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=p=>a())}),s("div",{class:Hs(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[nl(r.$slots,"default")],2)])):Ds("v-if",!0)],1024))}}),_B=P(DB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Modal.vue"]]),CB={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},gB=["innerHTML"],EB=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:AB,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),n("dev ")])])],-1),FB=Vs({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:l}){const o=e;$(S);const t=Re(o,"modelValue",l),a=T(()=>typeof Ts.info=="string");return(r,c)=>(v(),M(_B,{modelValue:g(t),"onUpdate:modelValue":c[0]||(c[0]=p=>Es(t)?t.value=p:null),class:"px-6 py-4"},{default:C(()=>[s("div",CB,[g(a)?(v(),J("div",{key:0,class:"mb-4",innerHTML:g(Ts).info},null,8,gB)):Ds("v-if",!0),EB])]),_:1},8,["modelValue"]))}});const xB=P(FB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/InfoDialog.vue"]]),kB=["disabled","onKeydown"],bB=Vs({__name:"Goto",setup(e){$(S);const l=ns(),o=ns(""),t=T(()=>{if(o.value.startsWith("/"))return!!qs.find(c=>c.path===o.value.substring(1));{const c=+o.value;return!isNaN(c)&&c>0&&c<=Ki.value}});function a(){t.value&&(o.value.startsWith("/")?hn(o.value.substring(1)):hn(+o.value)),r()}function r(){tn.value=!1}return js(tn,async c=>{var p,i;c?(await Pe(),o.value="",(p=l.value)==null||p.focus()):(i=l.value)==null||i.blur()}),js(o,c=>{c.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(c,p)=>(v(),J("div",{id:"slidev-goto-dialog",class:Hs(["fixed right-5 bg-main transform transition-all",g(tn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[He(s("input",{ref_key:"input",ref:l,"onUpdate:modelValue":p[0]||(p[0]=i=>o.value=i),type:"text",disabled:!g(tn),class:Hs(["outline-none bg-transparent",{"text-red-400":!g(t)&&o.value}]),placeholder:"Goto...",onKeydown:[br(a,["enter"]),br(r,["escape"])],onBlur:r},null,42,kB),[[Jn,o.value]])],2))}}),wB=P(bB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Goto.vue"]]),$B=Vs({__name:"Controls",setup(e){$(S);const l=je(),o=je();return(t,a)=>(v(),J(ks,null,[F(mB,{modelValue:g(ae),"onUpdate:modelValue":a[0]||(a[0]=r=>Es(ae)?ae.value=r:null)},null,8,["modelValue"]),F(wB),g(l)?(v(),M(g(l),{key:0})):Ds("v-if",!0),g(o)?(v(),M(g(o),{key:1,modelValue:g(ft),"onUpdate:modelValue":a[1]||(a[1]=r=>Es(ft)?ft.value=r:null)},null,8,["modelValue"])):Ds("v-if",!0),g(Ts).info?(v(),M(xB,{key:2,modelValue:g(jn),"onUpdate:modelValue":a[2]||(a[2]=r=>Es(jn)?jn.value=r:null)},null,8,["modelValue"])):Ds("v-if",!0)],64))}}),SB=P($B,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Controls.vue"]]),PB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},OB=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),TB=[OB];function MB(e,l){return v(),J("svg",PB,TB)}const NB={name:"carbon-settings-adjust",render:MB},LB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},RB=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),IB=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),VB=[RB,IB];function jB(e,l){return v(),J("svg",LB,VB)}const HB={name:"carbon-information",render:jB},zB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},WB=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),UB=[WB];function qB(e,l){return v(),J("svg",zB,UB)}const KB={name:"carbon-download",render:qB},JB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},YB=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),ZB=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),GB=[YB,ZB];function QB(e,l){return v(),J("svg",JB,GB)}const XB={name:"carbon-user-speaker",render:QB},sh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eh=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),lh=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),nh=[eh,lh];function oh(e,l){return v(),J("svg",sh,nh)}const th={name:"carbon-presentation-file",render:oh},ah={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rh=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),ch=[rh];function ph(e,l){return v(),J("svg",ah,ch)}const ih={name:"carbon-pen",render:ph},yh={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},uh=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),dh=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),fh=[uh,dh];function Bh(e,l){return v(),J("svg",yh,fh)}const hh={name:"ph-cursor-duotone",render:Bh},mh={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ah=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),vh=[Ah];function Dh(e,l){return v(),J("svg",mh,vh)}const Mi={name:"ph-cursor-fill",render:Dh},_h={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ch=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),gh=[Ch];function Eh(e,l){return v(),J("svg",_h,gh)}const Fh={name:"carbon-sun",render:Eh},xh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kh=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),bh=[kh];function wh(e,l){return v(),J("svg",xh,bh)}const $h={name:"carbon-moon",render:wh},Sh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ph=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Oh=[Ph];function Th(e,l){return v(),J("svg",Sh,Oh)}const Mh={name:"carbon-apps",render:Th},Nh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lh=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Rh=[Lh];function Ih(e,l){return v(),J("svg",Nh,Rh)}const Ni={name:"carbon-arrow-right",render:Ih},Vh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jh=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Hh=[jh];function zh(e,l){return v(),J("svg",Vh,Hh)}const Wh={name:"carbon-arrow-left",render:zh},Uh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qh=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Kh=[qh];function Jh(e,l){return v(),J("svg",Uh,Kh)}const Yh={name:"carbon-maximize",render:Jh},Zh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gh=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Qh=[Gh];function Xh(e,l){return v(),J("svg",Zh,Qh)}const sm={name:"carbon-minimize",render:Xh},em={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lm=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),nm=[lm];function om(e,l){return v(),J("svg",em,nm)}const tm={name:"carbon-checkmark",render:om},am={class:"select-list"},rm={class:"title"},cm={class:"items"},pm=["onClick"],im=Vs({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:l}){const o=e;$(S);const t=Re(o,"modelValue",l,{passive:!0});return(a,r)=>{const c=tm;return v(),J("div",am,[s("div",rm,Ys(e.title),1),s("div",cm,[(v(!0),J(ks,null,no(e.items,p=>(v(),J("div",{key:p.value,class:Hs(["item",{active:g(t)===p.value}]),onClick:()=>{var i;t.value=p.value,(i=p.onClick)==null||i.call(p)}},[F(c,{class:Hs(["text-green-500",{"opacity-0":g(t)!==p.value}])},null,8,["class"]),n(" "+Ys(p.display||p.value),1)],10,pm))),128))])])}}});const ym=P(im,[["__scopeId","data-v-a5c2ed88"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SelectList.vue"]]),um={class:"text-sm"},dm=Vs({__name:"Settings",setup(e){$(S);const l=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,t)=>(v(),J("div",um,[F(ym,{modelValue:g(vo),"onUpdate:modelValue":t[0]||(t[0]=a=>Es(vo)?vo.value=a:null),title:"Scale",items:l},null,8,["modelValue"])]))}}),fm=P(dm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Settings.vue"]]),Bm={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},hm=Vs({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:l}){const o=e;$(S);const t=Re(o,"modelValue",l,{passive:!0}),a=ns();return U5(a,()=>{t.value=!1}),(r,c)=>(v(),J("div",{ref_key:"el",ref:a,class:"flex relative"},[s("button",{class:Hs({disabled:e.disabled}),onClick:c[0]||(c[0]=p=>t.value=!g(t))},[nl(r.$slots,"button",{class:Hs({disabled:e.disabled})})],2),(v(),M(Bp,null,[g(t)?(v(),J("div",Bm,[nl(r.$slots,"menu")])):Ds("v-if",!0)],1024))],512))}}),mm=P(hm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/MenuButton.vue"]]),Am={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},vm={__name:"VerticalDivider",setup(e){return $(S),(l,o)=>(v(),J("div",Am))}},uo=P(vm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Dm={render(){return[]}},_m={class:"icon-btn"},Cm={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},gm={class:"my-auto"},Em={class:"opacity-50"},Fm=Vs({__name:"NavControls",props:{persist:{default:!1}},setup(e){const l=e;$(S);const o=Zt.smaller("md"),{isFullscreen:t,toggle:a}=Ei,r=T(()=>la.value?`?password=${la.value}`:""),c=T(()=>`/presenter/${Gs.value}${r.value}`),p=T(()=>`/${Gs.value}${r.value}`),i=ns(),y=()=>{i.value&&pn.value&&i.value.contains(pn.value)&&pn.value.blur()},u=T(()=>l.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=je(),f=je();return zl(()=>import("./DrawingControls-b081f154.js"),[]).then(h=>f.value=h.default),(h,m)=>{const _=sm,D=Yh,b=Wh,E=Ni,w=Mh,H=$h,ss=Fh,q=Mi,z=hh,ts=ih,Bs=th,fs=Dp("RouterLink"),Cs=XB,Rs=KB,Js=HB,Qs=NB;return v(),J("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[s("div",{class:Hs(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",g(u)]),onMouseleave:y},[g(Ye)?Ds("v-if",!0):(v(),J("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...Ps)=>g(a)&&g(a)(...Ps))},[g(t)?(v(),M(_,{key:0})):(v(),M(D,{key:1}))])),s("button",{class:Hs(["icon-btn",{disabled:!g(mF)}]),onClick:m[1]||(m[1]=(...Ps)=>g(Il)&&g(Il)(...Ps))},[F(b)],2),s("button",{class:Hs(["icon-btn",{disabled:!g(hF)}]),title:"Next",onClick:m[2]||(m[2]=(...Ps)=>g(Rl)&&g(Rl)(...Ps))},[F(E)],2),g(Ye)?Ds("v-if",!0):(v(),J("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Ps=>g(Fi)())},[F(w)])),g(sa)?Ds("v-if",!0):(v(),J("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Ps=>g(Si)())},[g(Ta)?(v(),M(H,{key:0})):(v(),M(ss,{key:1}))])),F(uo),g(Ye)?Ds("v-if",!0):(v(),J(ks,{key:3},[!g(sl)&&!g(o)&&g(d)?(v(),J(ks,{key:0},[F(g(d)),F(uo)],64)):Ds("v-if",!0),g(sl)?(v(),J("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Ps=>Bt.value=!g(Bt))},[g(Bt)?(v(),M(q,{key:0})):(v(),M(z,{key:1,class:"opacity-50"}))])):Ds("v-if",!0)],64)),!g(Ts).drawings.presenterOnly&&!g(Ye)?(v(),J(ks,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Ps=>Ie.value=!g(Ie))},[F(ts),g(Ie)?(v(),J("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:se({background:g(Sl).color})},null,4)):Ds("v-if",!0)]),F(uo)],64)):Ds("v-if",!0),g(Ye)?Ds("v-if",!0):(v(),J(ks,{key:5},[g(sl)?(v(),M(fs,{key:0,to:g(p),class:"icon-btn",title:"Play Mode"},{default:C(()=>[F(Bs)]),_:1},8,["to"])):Ds("v-if",!0),g(dF)?(v(),M(fs,{key:1,to:g(c),class:"icon-btn",title:"Presenter Mode"},{default:C(()=>[F(Cs)]),_:1},8,["to"])):Ds("v-if",!0),Ds("v-if",!0)],64)),(v(),J(ks,{key:6},[g(Ts).download?(v(),J("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...Ps)=>g(wc)&&g(wc)(...Ps))},[F(Rs)])):Ds("v-if",!0)],64)),!g(sl)&&g(Ts).info&&!g(Ye)?(v(),J("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=Ps=>jn.value=!g(jn))},[F(Js)])):Ds("v-if",!0),!g(sl)&&!g(Ye)?(v(),M(mm,{key:8},{button:C(()=>[s("button",_m,[F(Qs)])]),menu:C(()=>[F(fm)]),_:1})):Ds("v-if",!0),g(Ye)?Ds("v-if",!0):(v(),M(uo,{key:9})),s("div",Cm,[s("div",gm,[n(Ys(g(Gs))+" ",1),s("span",Em,"/ "+Ys(g(Ki)),1)])]),F(g(Dm))],34)],512)}}}),xm=P(Fm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/NavControls.vue"]]),Li={render(){return[]}},Ri={render(){return[]}},km={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},bm=Vs({__name:"PresenterMouse",setup(e){return $(S),(l,o)=>{const t=Mi;return g(it).cursor?(v(),J("div",km,[F(t,{class:"absolute",style:se({left:`${g(it).cursor.x}%`,top:`${g(it).cursor.y}%`})},null,8,["style"])])):Ds("v-if",!0)}}}),wm=P(bm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),$m=Vs({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){$(S),js(he,()=>{var o,t;(o=he.value)!=null&&o.meta&&he.value.meta.preload!==!1&&(he.value.meta.__preloaded=!0),(t=mt.value)!=null&&t.meta&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0)},{immediate:!0});const l=je();return zl(()=>import("./DrawingLayer-493ca80f.js"),[]).then(o=>l.value=o.default),(o,t)=>(v(),J(ks,null,[Ds(" Global Bottom "),F(g(Ri)),Ds(" Slides "),(v(!0),J(ks,null,no(g(qs),a=>{var r,c;return v(),J(ks,{key:a.path},[(r=a.meta)!=null&&r.__preloaded||a===g(he)?He((v(),M(g(La),{key:0,is:a==null?void 0:a.component,clicks:a===g(he)?g(Wl):0,"clicks-elements":((c=a.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Hs(g(Na)(a)),route:a,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Wp,a===g(he)]]):Ds("v-if",!0)],64)}),128)),Ds(" Global Top "),F(g(Li)),g(l)?(v(),M(g(l),{key:0})):Ds("v-if",!0),g(sl)?Ds("v-if",!0):(v(),M(wm,{key:1}))],64))}}),Sm=P($m,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Pm=Vs({__name:"Play",setup(e){$(S),oB();const l=ns();function o(r){var c;uc.value||((c=r.target)==null?void 0:c.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Rl():Il())}DF(l);const t=T(()=>f3.value||uc.value);je();const a=je();return zl(()=>import("./DrawingControls-b081f154.js"),[]).then(r=>a.value=r.default),(r,c)=>(v(),J(ks,null,[s("div",{id:"page-root",ref_key:"root",ref:l,class:"grid grid-cols-[1fr_max-content]",style:se(g($a))},[F(Oi,{class:"w-full h-full",style:se({background:"var(--slidev-slide-container-background, black)"}),width:g(ja)?g(Ll).width.value:void 0,scale:g(vo),onPointerdown:o},{default:C(()=>[F(Sm,{context:"slide"})]),controls:C(()=>[s("div",{class:Hs(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[g(t)?"opacity-100 right-0":"opacity-0 p-2",g(Qn)?"pointer-events-none":""]])},[F(xm,{class:"m-auto",persist:g(t)},null,8,["persist"])],2),!g(Ts).drawings.presenterOnly&&!g(Ye)&&g(a)?(v(),M(g(a),{key:0,class:"ml-0"})):Ds("v-if",!0)]),_:1},8,["style","width","scale"]),Ds("v-if",!0)],4),F(SB)],64))}}),Om=P(Pm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Ii(e){return typeof e>"u"||e===null}function Tm(e){return typeof e=="object"&&e!==null}function Mm(e){return Array.isArray(e)?e:Ii(e)?[]:[e]}function Nm(e,l){var o,t,a,r;if(l)for(r=Object.keys(l),o=0,t=r.length;o<t;o+=1)a=r[o],e[a]=l[a];return e}function Lm(e,l){var o="",t;for(t=0;t<l;t+=1)o+=e;return o}function Rm(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Im=Ii,Vm=Tm,jm=Mm,Hm=Lm,zm=Rm,Wm=Nm,Ra={isNothing:Im,isObject:Vm,toArray:jm,repeat:Hm,isNegativeZero:zm,extend:Wm};function Vi(e,l){var o="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(o+='in "'+e.mark.name+'" '),o+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!l&&e.mark.snippet&&(o+=`

`+e.mark.snippet),t+" "+o):t}function so(e,l){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=l,this.message=Vi(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}so.prototype=Object.create(Error.prototype);so.prototype.constructor=so;so.prototype.toString=function(l){return this.name+": "+Vi(this,l)};var bl=so,Um=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],qm=["scalar","sequence","mapping"];function Km(e){var l={};return e!==null&&Object.keys(e).forEach(function(o){e[o].forEach(function(t){l[String(t)]=o})}),l}function Jm(e,l){if(l=l||{},Object.keys(l).forEach(function(o){if(Um.indexOf(o)===-1)throw new bl('Unknown option "'+o+'" is met in definition of "'+e+'" YAML type.')}),this.options=l,this.tag=e,this.kind=l.kind||null,this.resolve=l.resolve||function(){return!0},this.construct=l.construct||function(o){return o},this.instanceOf=l.instanceOf||null,this.predicate=l.predicate||null,this.represent=l.represent||null,this.representName=l.representName||null,this.defaultStyle=l.defaultStyle||null,this.multi=l.multi||!1,this.styleAliases=Km(l.styleAliases||null),qm.indexOf(this.kind)===-1)throw new bl('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var le=Jm;function gc(e,l){var o=[];return e[l].forEach(function(t){var a=o.length;o.forEach(function(r,c){r.tag===t.tag&&r.kind===t.kind&&r.multi===t.multi&&(a=c)}),o[a]=t}),o}function Ym(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},l,o;function t(a){a.multi?(e.multi[a.kind].push(a),e.multi.fallback.push(a)):e[a.kind][a.tag]=e.fallback[a.tag]=a}for(l=0,o=arguments.length;l<o;l+=1)arguments[l].forEach(t);return e}function ea(e){return this.extend(e)}ea.prototype.extend=function(l){var o=[],t=[];if(l instanceof le)t.push(l);else if(Array.isArray(l))t=t.concat(l);else if(l&&(Array.isArray(l.implicit)||Array.isArray(l.explicit)))l.implicit&&(o=o.concat(l.implicit)),l.explicit&&(t=t.concat(l.explicit));else throw new bl("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(r){if(!(r instanceof le))throw new bl("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new bl("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new bl("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(r){if(!(r instanceof le))throw new bl("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(ea.prototype);return a.implicit=(this.implicit||[]).concat(o),a.explicit=(this.explicit||[]).concat(t),a.compiledImplicit=gc(a,"implicit"),a.compiledExplicit=gc(a,"explicit"),a.compiledTypeMap=Ym(a.compiledImplicit,a.compiledExplicit),a};var Zm=ea,Gm=new le("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Qm=new le("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Xm=new le("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),sA=new Zm({explicit:[Gm,Qm,Xm]});function eA(e){if(e===null)return!0;var l=e.length;return l===1&&e==="~"||l===4&&(e==="null"||e==="Null"||e==="NULL")}function lA(){return null}function nA(e){return e===null}var oA=new le("tag:yaml.org,2002:null",{kind:"scalar",resolve:eA,construct:lA,predicate:nA,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function tA(e){if(e===null)return!1;var l=e.length;return l===4&&(e==="true"||e==="True"||e==="TRUE")||l===5&&(e==="false"||e==="False"||e==="FALSE")}function aA(e){return e==="true"||e==="True"||e==="TRUE"}function rA(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var cA=new le("tag:yaml.org,2002:bool",{kind:"scalar",resolve:tA,construct:aA,predicate:rA,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function pA(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function iA(e){return 48<=e&&e<=55}function yA(e){return 48<=e&&e<=57}function uA(e){if(e===null)return!1;var l=e.length,o=0,t=!1,a;if(!l)return!1;if(a=e[o],(a==="-"||a==="+")&&(a=e[++o]),a==="0"){if(o+1===l)return!0;if(a=e[++o],a==="b"){for(o++;o<l;o++)if(a=e[o],a!=="_"){if(a!=="0"&&a!=="1")return!1;t=!0}return t&&a!=="_"}if(a==="x"){for(o++;o<l;o++)if(a=e[o],a!=="_"){if(!pA(e.charCodeAt(o)))return!1;t=!0}return t&&a!=="_"}if(a==="o"){for(o++;o<l;o++)if(a=e[o],a!=="_"){if(!iA(e.charCodeAt(o)))return!1;t=!0}return t&&a!=="_"}}if(a==="_")return!1;for(;o<l;o++)if(a=e[o],a!=="_"){if(!yA(e.charCodeAt(o)))return!1;t=!0}return!(!t||a==="_")}function dA(e){var l=e,o=1,t;if(l.indexOf("_")!==-1&&(l=l.replace(/_/g,"")),t=l[0],(t==="-"||t==="+")&&(t==="-"&&(o=-1),l=l.slice(1),t=l[0]),l==="0")return 0;if(t==="0"){if(l[1]==="b")return o*parseInt(l.slice(2),2);if(l[1]==="x")return o*parseInt(l.slice(2),16);if(l[1]==="o")return o*parseInt(l.slice(2),8)}return o*parseInt(l,10)}function fA(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ra.isNegativeZero(e)}var BA=new le("tag:yaml.org,2002:int",{kind:"scalar",resolve:uA,construct:dA,predicate:fA,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),hA=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function mA(e){return!(e===null||!hA.test(e)||e[e.length-1]==="_")}function AA(e){var l,o;return l=e.replace(/_/g,"").toLowerCase(),o=l[0]==="-"?-1:1,"+-".indexOf(l[0])>=0&&(l=l.slice(1)),l===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:l===".nan"?NaN:o*parseFloat(l,10)}var vA=/^[-+]?[0-9]+e/;function DA(e,l){var o;if(isNaN(e))switch(l){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(l){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(l){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ra.isNegativeZero(e))return"-0.0";return o=e.toString(10),vA.test(o)?o.replace("e",".e"):o}function _A(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ra.isNegativeZero(e))}var CA=new le("tag:yaml.org,2002:float",{kind:"scalar",resolve:mA,construct:AA,predicate:_A,represent:DA,defaultStyle:"lowercase"}),gA=sA.extend({implicit:[oA,cA,BA,CA]}),EA=gA,ji=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Hi=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function FA(e){return e===null?!1:ji.exec(e)!==null||Hi.exec(e)!==null}function xA(e){var l,o,t,a,r,c,p,i=0,y=null,u,d,f;if(l=ji.exec(e),l===null&&(l=Hi.exec(e)),l===null)throw new Error("Date resolve error");if(o=+l[1],t=+l[2]-1,a=+l[3],!l[4])return new Date(Date.UTC(o,t,a));if(r=+l[4],c=+l[5],p=+l[6],l[7]){for(i=l[7].slice(0,3);i.length<3;)i+="0";i=+i}return l[9]&&(u=+l[10],d=+(l[11]||0),y=(u*60+d)*6e4,l[9]==="-"&&(y=-y)),f=new Date(Date.UTC(o,t,a,r,c,p,i)),y&&f.setTime(f.getTime()-y),f}function kA(e){return e.toISOString()}var bA=new le("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:FA,construct:xA,instanceOf:Date,represent:kA});function wA(e){return e==="<<"||e===null}var $A=new le("tag:yaml.org,2002:merge",{kind:"scalar",resolve:wA}),Ia=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function SA(e){if(e===null)return!1;var l,o,t=0,a=e.length,r=Ia;for(o=0;o<a;o++)if(l=r.indexOf(e.charAt(o)),!(l>64)){if(l<0)return!1;t+=6}return t%8===0}function PA(e){var l,o,t=e.replace(/[\r\n=]/g,""),a=t.length,r=Ia,c=0,p=[];for(l=0;l<a;l++)l%4===0&&l&&(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)),c=c<<6|r.indexOf(t.charAt(l));return o=a%4*6,o===0?(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)):o===18?(p.push(c>>10&255),p.push(c>>2&255)):o===12&&p.push(c>>4&255),new Uint8Array(p)}function OA(e){var l="",o=0,t,a,r=e.length,c=Ia;for(t=0;t<r;t++)t%3===0&&t&&(l+=c[o>>18&63],l+=c[o>>12&63],l+=c[o>>6&63],l+=c[o&63]),o=(o<<8)+e[t];return a=r%3,a===0?(l+=c[o>>18&63],l+=c[o>>12&63],l+=c[o>>6&63],l+=c[o&63]):a===2?(l+=c[o>>10&63],l+=c[o>>4&63],l+=c[o<<2&63],l+=c[64]):a===1&&(l+=c[o>>2&63],l+=c[o<<4&63],l+=c[64],l+=c[64]),l}function TA(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var MA=new le("tag:yaml.org,2002:binary",{kind:"scalar",resolve:SA,construct:PA,predicate:TA,represent:OA}),NA=Object.prototype.hasOwnProperty,LA=Object.prototype.toString;function RA(e){if(e===null)return!0;var l=[],o,t,a,r,c,p=e;for(o=0,t=p.length;o<t;o+=1){if(a=p[o],c=!1,LA.call(a)!=="[object Object]")return!1;for(r in a)if(NA.call(a,r))if(!c)c=!0;else return!1;if(!c)return!1;if(l.indexOf(r)===-1)l.push(r);else return!1}return!0}function IA(e){return e!==null?e:[]}var VA=new le("tag:yaml.org,2002:omap",{kind:"sequence",resolve:RA,construct:IA}),jA=Object.prototype.toString;function HA(e){if(e===null)return!0;var l,o,t,a,r,c=e;for(r=new Array(c.length),l=0,o=c.length;l<o;l+=1){if(t=c[l],jA.call(t)!=="[object Object]"||(a=Object.keys(t),a.length!==1))return!1;r[l]=[a[0],t[a[0]]]}return!0}function zA(e){if(e===null)return[];var l,o,t,a,r,c=e;for(r=new Array(c.length),l=0,o=c.length;l<o;l+=1)t=c[l],a=Object.keys(t),r[l]=[a[0],t[a[0]]];return r}var WA=new le("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:HA,construct:zA}),UA=Object.prototype.hasOwnProperty;function qA(e){if(e===null)return!0;var l,o=e;for(l in o)if(UA.call(o,l)&&o[l]!==null)return!1;return!0}function KA(e){return e!==null?e:{}}var JA=new le("tag:yaml.org,2002:set",{kind:"mapping",resolve:qA,construct:KA});EA.extend({implicit:[bA,$A],explicit:[MA,VA,WA,JA]});function Ec(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var YA=new Array(256),ZA=new Array(256);for(var Xl=0;Xl<256;Xl++)YA[Xl]=Ec(Xl)?1:0,ZA[Xl]=Ec(Xl);function GA(e){return Array.from(new Set(e))}function Fc(...e){let l,o,t;e.length===1?(l=0,t=1,[o]=e):[l,o,t=1]=e;const a=[];let r=l;for(;r<o;)a.push(r),r+=t||1;return a}function zi(e,l){if(!l||l==="all"||l==="*")return Fc(1,e+1);const o=[];for(const t of l.split(/[,;]/g))if(!t.includes("-"))o.push(+t);else{const[a,r]=t.split("-",2);o.push(...Fc(+a,r?+r+1:e+1))}return GA(o).filter(t=>t<=e).sort((t,a)=>t-a)}function QA(e){const l=T(()=>e.value.path),o=T(()=>qs.length-1),t=T(()=>parseInt(l.value.split(/\//g).slice(-1)[0])||1),a=T(()=>Ha(t.value)),r=T(()=>qs.find(f=>f.path===`${t.value}`)),c=T(()=>{var f,h,m;return(m=(h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),p=T(()=>{var f,h;return((h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.layout)||(t.value===1?"cover":"default")}),i=T(()=>qs.find(f=>f.path===`${Math.min(qs.length,t.value+1)}`)),y=T(()=>qs.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(za(f,h),f),[])),u=T(()=>Wa(y.value,r.value)),d=T(()=>Ua(u.value));return{route:e,path:l,total:o,currentPage:t,currentPath:a,currentRoute:r,currentSlideId:c,currentLayout:p,nextRoute:i,rawTree:y,treeWithActiveStatuses:u,tree:d}}function XA(e,l,o){const t=ns(0);Pe(()=>{Bl.afterEach(async()=>{await Pe(),t.value+=1})});const a=T(()=>{var i,y;return t.value,((y=(i=l.value)==null?void 0:i.meta)==null?void 0:y.__clicksElements)||[]}),r=T(()=>{var i,y;return+(((y=(i=l.value)==null?void 0:i.meta)==null?void 0:y.clicks)??a.value.length)}),c=T(()=>o.value<qs.length-1||e.value<r.value),p=T(()=>o.value>1||e.value>0);return{clicks:e,clicksElements:a,clicksTotal:r,hasNext:c,hasPrev:p}}const s9=["id"],e9=Vs({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:l}){const o=e,t=Re(o,"clicksElements",l),a=T(()=>({height:`${wa}px`,width:`${fl}px`})),r=je();zl(()=>Promise.resolve().then(()=>dB),void 0).then(y=>r.value=y.default);const c=T(()=>o.clicks),p=XA(c,o.nav.currentRoute,o.nav.currentPage),i=T(()=>`${o.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return me(S,ee({nav:{...o.nav,...p},configs:Ts,themeConfigs:T(()=>Ts.themeConfig)})),(y,u)=>{var d;return v(),J("div",{id:g(i),class:"slide-container",style:se(g(a))},[F(g(Ri)),F(g(La),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":g(t),"onUpdate:clicks-elements":u[0]||(u[0]=f=>Es(t)?t.value=f:null),clicks:g(c),"clicks-disabled":!1,class:Hs(g(Na)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),g(r)?(v(),M(g(r),{key:0,page:+e.route.path},null,8,["page"])):Ds("v-if",!0),F(g(Li))],12,s9)}}}),xc=P(e9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),l9=Vs({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const l=e;$(S);const o=ee(((r=l.route.meta)==null?void 0:r.__clicksElements)||[]),t=T(()=>l.route),a=QA(t);return(c,p)=>(v(),J(ks,null,[F(xc,{"clicks-elements":o,"onUpdate:clicks-elements":p[0]||(p[0]=i=>Es(o)?o.value=i:null),clicks:0,nav:g(a),route:g(t)},null,8,["clicks-elements","nav","route"]),g(qi)?Ds("v-if",!0):(v(!0),J(ks,{key:0},no(o.length,i=>(v(),M(xc,{key:i,clicks:i,nav:g(a),route:g(t)},null,8,["clicks","nav","route"]))),128))],64))}}),n9=P(l9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlide.vue"]]),o9={id:"print-content"},t9=Vs({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const l=e;$(S);const o=T(()=>l.width),t=T(()=>l.width/dl),a=T(()=>o.value/t.value),r=T(()=>a.value<dl?o.value/fl:t.value*dl/fl);let c=qs.slice(0,-1);We.value.query.range&&(c=zi(c.length,We.value.query.range).map(y=>c[y-1]));const p=T(()=>({"select-none":!Ts.selectable,"slidev-code-line-numbers":Ts.lineNumbers}));return me(Jp,r),(i,y)=>(v(),J("div",{id:"print-container",class:Hs(g(p))},[s("div",o9,[(v(!0),J(ks,null,no(g(c),u=>(v(),M(n9,{key:u.path,route:u},null,8,["route"]))),128))]),nl(i.$slots,"controls")],2))}});const a9=P(t9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintContainer.vue"]]),r9=Vs({__name:"Print",setup(e){$(S);function l(o,{slots:t}){if(t.default)return lt("style",t.default())}return mn(()=>{ja?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,t)=>(v(),J(ks,null,[F(l,null,{default:C(()=>[n(" @page { size: "+Ys(g(fl))+"px "+Ys(g(wa))+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:se(g($a))},[F(a9,{class:"w-full h-full",style:se({background:"var(--slidev-slide-container-background, black)"}),width:g(Ll).width.value},null,8,["style","width"])],4)],64))}});const c9=P(r9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Print.vue"]]);const p9={class:"slidev-layout end"},i9={__name:"end",setup(e){return $(S),(l,o)=>(v(),J("div",p9," END "))}},y9=P(i9,[["__scopeId","data-v-b05edd45"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/end.vue"]]),u9="/vue-3-practices/logo.svg";function kc(e){return e.startsWith("/")?"/vue-3-practices"+e.slice(1):e}function d9(e,l=!1){const o=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?l?`linear-gradient(#0005, #0008), url(${kc(e)})`:`url("${kc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const f9={class:"my-auto w-full"},B9=Vs({__name:"cover",props:{background:{default:""}},setup(e){const l=e;$(S);const o=T(()=>d9(l.background,!0));return(t,a)=>(v(),J("div",{class:"slidev-layout cover",style:se(g(o))},[s("div",f9,[nl(t.$slots,"default")])],4))}}),h9=P(B9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/theme-default/layouts/cover.vue"]]),m9=s("div",{class:"text-center"},[s("img",{src:u9,alt:"Vue",style:{width:"100px"},class:"inline"})],-1),A9=s("h1",null,"Vue.js",-1),v9={__name:"1",setup(e){const l={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}};return $(S),(o,t)=>(v(),M(h9,K(U(l)),{default:C(()=>[m9,A9]),_:1},16))}},D9=P(v9,[["__file","/@slidev/slides/1.md"]]),_9={class:"slidev-layout default"},C9={__name:"default",setup(e){return $(S),(l,o)=>(v(),J("div",_9,[nl(l.$slots,"default")]))}},Y=P(C9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/default.vue"]]),g9=s("h1",null,"アジェンダ",-1),E9=s("ul",null,[s("li",null,[n("はじめに "),s("ul",null,[s("li",null,"Composition API, 学習環境など")])]),s("li",null,[n("リアクティブの探求 "),s("ul",null,[s("li",null,"ref, reactive, toRefs, readonly など")])]),s("li",null,[n("算出プロパティ（computed） "),s("ul",null,[s("li",null,"computed")])]),s("li",null,[n("ウォッチャ（watch） "),s("ul",null,[s("li",null,"watch")])]),s("li",null,[n("テンプレート構文の説明 "),s("ul",null,[s("li",null,"mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model など")])]),s("li",null,[n("コンポーネント "),s("ul",null,[s("li",null,"props, emit, slot など")])]),s("li",null,[n("Vue アプリケーション開発に必要な周辺ライブラリ "),s("ul",null,[s("li",null,"throttle-debounce, fetch, Vue Router など")])])],-1),F9={__name:"2",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[g9,E9]),_:1},16))}},x9=P(F9,[["__file","/@slidev/slides/2.md"]]),k9=s("h1",null,"はじめに",-1),b9=s("h2",null,"Vue.js とは？",-1),w9=s("p",null,"Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。",-1),$9={class:"pt-4 text-sm"},S9={href:"https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF"},P9=n(" 公式サイト "),O9={__name:"3",setup(e){const l={};return $(S),(o,t)=>{const a=Ni;return v(),M(Y,K(U(l)),{default:C(()=>[k9,b9,w9,s("div",$9,[s("a",S9,[F(a,{class:"inline"}),P9])])]),_:1},16)}}},T9=P(O9,[["__file","/@slidev/slides/3.md"]]),M9=s("h1",null,"本講座のすすめかた",-1),N9=s("p",null,"どのような形式で進行するのかの確認",-1),L9=s("p",null,"ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。",-1),R9=s("p",null,"適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。",-1),I9={__name:"4",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[M9,N9,L9,R9]),_:1},16))}},V9=P(I9,[["__file","/@slidev/slides/4.md"]]),j9=s("h1",null,"準備",-1),H9=s("p",null,"使用するツールの確認とセットアップ",-1),z9=s("p",null,[n("本講座におけるハンズオン、演習、サンプルの閲覧は "),s("a",{href:"https://stackblitz.com/",target:"_blank",rel:"noopener"},"StackBlitz"),n(" でおこないます。")],-1),W9=s("p",null,"StackBlitz はブラウザ上で動作するオンライン IDE（統合開発環境）です。",-1),U9=s("p",null,"以下をやってみましょう",-1),q9=s("ol",null,[s("li",null,[n("動作環境を"),s("a",{href:"https://developer.stackblitz.com/docs/platform/browser-support/",target:"_blank",rel:"noopener"},"こちら"),n("で確認してブラウザを用意")]),s("li",null,[n("用意したブラウザで "),s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev"),n(" にアクセス")]),s("li",null,[s("code",null,"<template>Hello World!</template>"),n(" と書いてみる")]),s("li",null,[n("右カラムに "),s("code",null,"Hello World!"),n(" と表示されることを確認")])],-1),K9=s("p",null,"講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。",-1),J9={__name:"5",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[j9,H9,z9,W9,U9,q9,K9]),_:1},16))}},Y9=P(J9,[["__file","/@slidev/slides/5.md"]]),Z9={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},G9=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),Q9=[G9];function X9(e,l){return v(),J("svg",Z9,Q9)}const sv={name:"ph-clipboard",render:X9},ev={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},lv=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),nv=[lv];function ov(e,l){return v(),J("svg",ev,nv)}const tv={name:"ph-check-circle",render:ov},av=["title"],rv=Vs({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const l=e;$(S);const o=$(Up),t=$(qp),a=$(Kp);function r(d=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let _=0;_<d;_++)f.push(h.charAt(Math.floor(Math.random()*m)));return f.join("")}const c=ns(),p=Al();Zo(()=>{const d=l.at==null?t==null?void 0:t.value.length:l.at,f=T(()=>a!=null&&a.value?l.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(d||0)),l.ranges.length-1)),h=T(()=>l.ranges[f.value]||"");if(l.ranges.length>=2&&!(a!=null&&a.value)){const m=r(),_=t5(l.ranges.length-1).map(D=>m+D);t!=null&&t.value&&(t.value.push(..._),Go(()=>_.forEach(D=>o5(t.value,D)),p))}mn(()=>{if(!c.value)return;const _=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const D of _){const b=Array.from(D.querySelectorAll(".line")),E=zi(b.length,h.value);if(b.forEach((w,H)=>{const ss=E.includes(H+1);w.classList.toggle(n5,!0),w.classList.toggle("highlighted",ss),w.classList.toggle("dishonored",!ss)}),l.maxHeight){const w=D.querySelector(".line.highlighted");w&&w.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:i,copy:y}=ed();function u(){var f,h;const d=(h=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;d&&y(d)}return(d,f)=>{const h=tv,m=sv;return v(),J("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:se({"max-height":l.maxHeight,"overflow-y":l.maxHeight?"scroll":void 0})},[nl(d.$slots,"default"),g(Ts).codeCopy?(v(),J("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:g(i)?"Copied":"Copy",onClick:f[0]||(f[0]=_=>u())},[g(i)?(v(),M(h,{key:0,class:"p-2 w-8 h-8"})):(v(),M(m,{key:1,class:"p-2 w-8 h-8"}))],8,av)):Ds("v-if",!0)],4)}}}),ys=P(rv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),cv=s("h1",null,"Vue には 2 つの書き方があります",-1),pv={class:"flex gap-8"},iv=n(" Vue2 で主に使われていた「Options API」 "),yv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),uv=n(" Vue3 で主に使われている「Composition API」 "),dv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),fv=s("p",null,"現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。",-1),Bv={__name:"6",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[cv,s("div",pv,[s("div",null,[iv,F(a,G({},{ranges:[""]}),{default:C(()=>[yv]),_:1},16)]),s("div",null,[uv,F(a,G({},{ranges:[""]}),{default:C(()=>[dv]),_:1},16)])]),fv]),_:1},16)}}},hv=P(Bv,[["__file","/@slidev/slides/6.md"]]),mv="/vue-3-practices/apis.png",Av=s("h1",null,"Composition API のメリット",-1),vv=s("p",null,"Vue の機能ではなく、論理的な関心事でコードをまとめることができる",-1),Dv=s("img",{src:mv,class:"h-5/6"},null,-1),_v={__name:"7",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[Av,vv,Dv]),_:1},16))}},Cv=P(_v,[["__file","/@slidev/slides/7.md"]]),gv={inject:{$slidev:{from:S}},setup(){const e=ns(0);return{count:e,increment:()=>{e.value+=1}}}},Ev={class:"prose"};function Fv(e,l,o,t,a,r){return v(),J("div",Ev,[n(Ys(t.count)+" ",1),s("button",{onClick:l[0]||(l[0]=(...c)=>t.increment&&t.increment(...c))},"+")])}const xv=P(gv,[["render",Fv],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/FirstSample.vue"]]),kv=s("h1",null,"まずは書いてみる",-1),bv={class:"flex gap-8"},wv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),$v=n(" 動作サンプル "),Sv={__name:"8",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=xv;return v(),M(Y,K(U(l)),{default:C(()=>[kv,s("div",bv,[F(a,G({},{ranges:[""]}),{default:C(()=>[wv]),_:1},16),s("div",null,[$v,F(r)])])]),_:1},16)}}},Pv=P(Sv,[["__file","/@slidev/slides/8.md"]]),Ov=s("h1",null,"リアクティブの探求",-1),Tv={class:"flex gap-4"},Mv=s("div",null,[s("video",{controls:"",loop:"",style:{height:"30vh"},src:"https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"}),s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B"},"参考")])],-1),Nv=s("p",null,"表計算ソフトと同じ手順をコードにすると",-1),Lv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 5")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 5のまま（期待は6）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5のまま（期待は6）")])])])],-1),Rv={__name:"9",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[Ov,s("div",Tv,[Mv,s("div",null,[Nv,F(a,G({},{ranges:[""]}),{default:C(()=>[Lv]),_:1},16)])])]),_:1},16)}}},Iv=P(Rv,[["__file","/@slidev/slides/9.md"]]),Vv=s("h1",null,"リアクティブの探求",-1),jv={class:"flex gap-4"},Hv=s("div",null,[s("p",null,"表計算ソフトと同じことをおこなうには"),s("ol",null,[s("li",null,"値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。"),s("li",null,"値の変更を検知する。 例: val1 = 3 と入れるとき。"),s("li",null,"最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。")]),s("p",null,"Vue には 1. 2. 3. のためのしくみがある")],-1),zv=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 3.")])])])],-1),Wv={__name:"10",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[Vv,s("div",jv,[Hv,s("div",null,[F(a,G({},{ranges:[""]}),{default:C(()=>[zv]),_:1},16)])])]),_:1},16)}}},Uv=P(Wv,[["__file","/@slidev/slides/10.md"]]),qv={inject:{$slidev:{from:S}},setup(){const e=ns(2),l=ns(3),o=T(()=>e.value+l.value);return{val1:e,val2:l,sum:o}}},Kv=n("val1: "),Jv=n("val2: ");function Yv(e,l,o,t,a,r){return v(),J("div",null,[s("p",null,[Kv,He(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":l[0]||(l[0]=c=>t.val1=c)},null,512),[[Jn,t.val1]])]),s("p",null,[Jv,He(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":l[1]||(l[1]=c=>t.val2=c)},null,512),[[Jn,t.val2]])]),s("p",null,"sum: "+Ys(t.sum),1)])}const Zv=P(qv,[["render",Yv],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ReactiveSample.vue"]]),Gv=s("h1",null,"リアクティブの探求（ref によるリアクティブな値の参照）",-1),Qv=s("p",null,[s("code",null,"ref"),n(" を使った値を操作する場合、"),s("code",null,"setup"),n(" 関数内では "),s("code",null,"value"),n(" プロパティにアクセスする。 "),s("code",null,"template"),n(" 内では変数（定数）そのものを参照するだけで値を得られる。")],-1),Xv={class:"flex gap-8"},sD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),eD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),lD={__name:"11",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=Zv;return v(),M(Y,K(U(l)),{default:C(()=>[Gv,Qv,s("div",Xv,[F(a,G({},{ranges:[""]}),{default:C(()=>[sD]),_:1},16),F(a,G({},{ranges:[""]}),{default:C(()=>[eD]),_:1},16),F(r)])]),_:1},16)}}},nD=P(lD,[["__file","/@slidev/slides/11.md"]]),oD=s("h1",null,"リアクティブの探求（リアクティブな値をオブジェクトにまとめる）",-1),tD=s("p",null,[n("リアクティブにしたいデータがオブジェクトの場合、"),s("code",null,"reactive"),n(" を使う")],-1),aD={class:"flex gap-8"},rD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),cD={__name:"12",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[oD,tD,s("div",aD,[F(a,G({},{ranges:[""]}),{default:C(()=>[rD]),_:1},16)])]),_:1},16)}}},pD=P(cD,[["__file","/@slidev/slides/12.md"]]),iD=s("h1",null,"リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）",-1),yD=s("p",null,[n("前項の "),s("code",null,"reactive"),n(" だと、分割代入しても値が取り出せない。Vue では "),s("code",null,"toRefs"),n(" を使うことで可能になる。")],-1),uD={class:"flex gap-8"},dD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),fD={__name:"13",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[iD,yD,s("div",uD,[F(a,G({},{ranges:[""]}),{default:C(()=>[dD]),_:1},16)])]),_:1},16)}}},BD=P(fD,[["__file","/@slidev/slides/13.md"]]),hD=s("h1",null,"リアクティブの探求（リアクティブな値を読み込み専用にする）",-1),mD={class:"flex gap-8"},AD={class:"h-md overflow-y-auto"},vD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"<!-- user.name を変更しようとすると失敗し、警告が表示されます -->")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"<!-- user.name を変更しようとすると失敗し、警告が表示されます -->")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),DD={__name:"14",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[hD,s("div",mD,[s("div",AD,[F(a,G({},{ranges:[""]}),{default:C(()=>[vD]),_:1},16)])])]),_:1},16)}}},_D=P(DD,[["__file","/@slidev/slides/14.md"]]),CD=s("h1",null,"算出プロパティ（computed）",-1),gD=s("p",null,[n("あるリアクティブな値を元に計算結果を返したい場合、"),s("code",null,"computed"),n(" 関数を利用する")],-1),ED=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),FD={__name:"15",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[CD,gD,F(a,G({},{ranges:[""]}),{default:C(()=>[ED]),_:1},16)]),_:1},16)}}},xD=P(FD,[["__file","/@slidev/slides/15.md"]]),kD=s("h1",null,"算出プロパティ（computed）",-1),bD=s("p",null,[s("code",null,"get"),n(),s("code",null,"set"),n(" 関数を用意することで書込み可能なオブジェクトを作成することができる")],-1),wD={class:"h-sm overflow-y-auto"},$D=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}}," @"),s("span",{style:{color:"#E0A569"}},"click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"handleClick"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"リセット"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}}," @"),s("span",{style:{color:"#B58451"}},"click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"handleClick"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"リセット"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),SD={__name:"16",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[kD,bD,s("div",wD,[F(a,G({},{ranges:[""]}),{default:C(()=>[$D]),_:1},16)])]),_:1},16)}}},PD=P(SD,[["__file","/@slidev/slides/16.md"]]),OD={inject:{$slidev:{from:S}},setup(){const e=()=>Math.random(),l=T(()=>Math.random());return{randomMethods:e,randomComputed:l}}},TD=s("p",null,"関数呼び出しの場合",-1),MD={class:"use-methods"},ND=s("p",null,"computedを使った場合",-1),LD={class:"use-computed"};function RD(e,l,o,t,a,r){return v(),J(ks,null,[TD,s("ol",MD,[s("li",null,Ys(t.randomMethods()),1),s("li",null,Ys(t.randomMethods()),1),s("li",null,Ys(t.randomMethods()),1)]),ND,s("ol",LD,[s("li",null,Ys(t.randomComputed),1),s("li",null,Ys(t.randomComputed),1),s("li",null,Ys(t.randomComputed),1)])],64)}const ID=P(OD,[["render",RD],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ComputedMethods.vue"]]),VD=s("h1",null,"computed と関数呼び出しの違い",-1),jD=s("p",null,[n("関数呼び出しは都度呼び出される毎に実行するのに対し、"),s("code",null,"computed"),n(" 内で参照しているリアクティブな値が変更されない限り、"),s("code",null,"computed"),n(" は一度キャッシュされた結果を返す。 うまく使い分けるとパフォーマンスの向上に役立てる。")],-1),HD={class:"flex gap-4"},zD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"関数呼び出しの場合"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"use-methods"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"computedを使った場合"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"use-computed"'),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"関数呼び出しの場合"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"use-methods"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"computedを使った場合"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"use-computed"'),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),WD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Math"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"random"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Math"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"random"),s("span",{style:{color:"#858585"}},"();")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Math"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"random"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Math"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"random"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"randomMethods"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"randomComputed"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),UD={__name:"17",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=ID;return v(),M(Y,K(U(l)),{default:C(()=>[VD,jD,s("div",HD,[F(a,G({},{ranges:[""]}),{default:C(()=>[zD]),_:1},16),F(a,G({},{ranges:[""]}),{default:C(()=>[WD]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},qD=P(UD,[["__file","/@slidev/slides/17.md"]]),KD=s("h1",null,"ウォッチャ（watch）",-1),JD=s("p",null,"特定のデータを監視し、変更があったときに処理を行える、引数として、新しい値とその前の値を取得できる。",-1),YD={class:"h-sm overflow-y-auto"},ZD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),GD={__name:"18",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[KD,JD,s("div",YD,[F(a,G({},{ranges:[""]}),{default:C(()=>[ZD]),_:1},16)])]),_:1},16)}}},QD=P(GD,[["__file","/@slidev/slides/18.md"]]),XD=s("h1",null,"ウォッチャ（watch）",-1),s_=s("p",null,"配列を監視する場合、複数のデータソースを同時に監視できる",-1),e_={class:"h-sm overflow-y-auto"},l_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),n_={__name:"19",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[XD,s_,s("div",e_,[F(a,G({},{ranges:[""]}),{default:C(()=>[l_]),_:1},16)])]),_:1},16)}}},o_=P(n_,[["__file","/@slidev/slides/19.md"]]),t_=s("h1",null,"テンプレート構文",-1),a_=s("ul",null,[s("li",null,"展開"),s("li",null,"ディレクティブ"),s("li",null,"バインディング"),s("li",null,"イベントハンドリング"),s("li",null,"条件付きレンダリング"),s("li",null,"リストレンダリング"),s("li",null,"フォーム入力バインディング")],-1),r_={__name:"20",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[t_,a_]),_:1},16))}},c_=P(r_,[["__file","/@slidev/slides/20.md"]]),p_=s("h1",null,"展開",-1),i_=s("p",null,"Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる",-1),y_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),u_=s("p",null,"結果",-1),d_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"Message: Hello!")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"Message: Hello!")])])])],-1),f_={__name:"21",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[p_,i_,F(a,G({},{ranges:[""]}),{default:C(()=>[y_]),_:1},16),u_,d_]),_:1},16)}}},B_=P(f_,[["__file","/@slidev/slides/21.md"]]),h_={inject:{$slidev:{from:S}},setup(){const e=ns(10);return setInterval(()=>{e.value+=1},1e3),{counter:e}}},m_={id:"counter"};function A_(e,l,o,t,a,r){return v(),J("div",m_,"Counter: "+Ys(t.counter),1)}const v_=P(h_,[["render",A_],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/CounterSample.vue"]]),D_=s("h1",null,"展開（リアクティブな値を使うと）",-1),__=s("p",{class:"text-sm"}," counterを1秒ごとに増やしていく ",-1),C_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"setInterval"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"setInterval"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),g_=s("p",null,"結果",-1),E_={__name:"22",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=v_;return v(),M(Y,K(U(l)),{default:C(()=>[D_,__,F(a,G({},{ranges:[""]}),{default:C(()=>[C_]),_:1},16),g_,s("div",null,[F(r)])]),_:1},16)}}},F_=P(E_,[["__file","/@slidev/slides/22.md"]]),x_=s("h1",null,"ディレクティブ",-1),k_=s("ul",null,[s("li",null,"ディレクティブは Vue によって提供される特別な属性"),s("li",null,"v- から始まる"),s("li",null,[n("特定のディレクティブ（v-bind と v-on）は省略記法がある（例："),s("code",null,":href"),n(),s("code",null,"@click"),n("）")]),s("li",null,[n("特定のディレクティブは引数を渡すことができる（例："),s("code",null,"v-on:click"),n("）")])],-1),b_=s("p",null,"ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい",-1),w_={__name:"23",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[x_,k_,b_]),_:1},16))}},$_=P(w_,[["__file","/@slidev/slides/23.md"]]),S_=s("h1",null,"バインディング",-1),P_=s("p",null,[n("「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 "),s("code",null,"v-bind"),n(" ディレクティブを使う")],-1),O_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-bind"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"url"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js公式サイト "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-bind"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"url"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js公式サイト "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),T_=s("p",null,"省略するとこのように書ける",-1),M_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"url"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js公式サイト "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"url"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js公式サイト "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),N_={__name:"24",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[S_,P_,s("div",null,[F(a,G({},{ranges:[""]}),{default:C(()=>[O_]),_:1},16),T_]),F(a,G({},{ranges:[""]}),{default:C(()=>[M_]),_:1},16)]),_:1},16)}}},L_=P(N_,[["__file","/@slidev/slides/24.md"]]),R_=s("h1",null,"バインディング（クラスとスタイル）",-1),I_=s("p",null,"クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある",-1),V_={class:"flex gap-6"},j_=s("p",{class:"text-xs"},"オブジェクト構文",-1),H_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),z_=s("p",{class:"text-xs"},"配列構文はこのように書ける",-1),W_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),U_=s("p",{class:"text-xs"},"組み合わせることもできる",-1),q_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red, { red }]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red, { red }]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),K_=s("p",{class:"text-xs"},"スタイル属性にもオブジェクト構文と配列構文がある",-1),J_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}}," :"),s("span",{style:{color:"#E0A569"}},"style"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},"{ "),s("span",{style:{color:"#E0A569"}},"color"),s("span",{style:{color:"#858585"}},": "),s("span",{style:{color:"#C98A7D"}},"'red'"),s("span",{style:{color:"#858585"}}," }"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}}," :"),s("span",{style:{color:"#B58451"}},"style"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},"{ "),s("span",{style:{color:"#B58451"}},"color"),s("span",{style:{color:"#8E8F8B"}},": "),s("span",{style:{color:"#B56959"}},"'red'"),s("span",{style:{color:"#8E8F8B"}}," }"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Y_={__name:"25",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[R_,I_,s("div",V_,[s("div",null,[j_,F(a,G({},{ranges:[""]}),{default:C(()=>[H_]),_:1},16)]),s("div",null,[z_,F(a,G({},{ranges:[""]}),{default:C(()=>[W_]),_:1},16),U_,F(a,G({},{ranges:[""]}),{default:C(()=>[q_]),_:1},16),K_,F(a,G({},{ranges:[""]}),{default:C(()=>[J_]),_:1},16)])])]),_:1},16)}}},Z_=P(Y_,[["__file","/@slidev/slides/25.md"]]),G_=s("h1",null,"イベントハンドリング",-1),Q_=s("p",null,[s("code",null,"v-on"),n(" ディレクティブは HTML 要素などの"),s("a",{href:"https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events",target:"_blank",rel:"noopener"},"イベント"),n("操作に使われる。"),s("code",null,":"),n("の後の引数でイベントの種類を指定できる")],-1),X_={class:"h-60 mb-6 overflow-y-auto"},sC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),eC=s("p",null,"省略するとこのようにかける",-1),lC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"counter += 1"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"counter += 1"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),nC={__name:"26",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[G_,Q_,s("div",X_,[F(a,G({},{ranges:[""]}),{default:C(()=>[sC]),_:1},16)]),eC,F(a,G({},{ranges:[""]}),{default:C(()=>[lC]),_:1},16)]),_:1},16)}}},oC=P(nC,[["__file","/@slidev/slides/26.md"]]),tC=s("h1",null,"イベントハンドリング（関数名を属性値として使う）",-1),aC=s("p",null,"関数を渡すと複雑な処理が書きやすい",-1),rC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),cC={__name:"27",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[tC,aC,F(a,G({},{ranges:[""]}),{default:C(()=>[rC]),_:1},16)]),_:1},16)}}},pC=P(cC,[["__file","/@slidev/slides/27.md"]]);let iC=e=>crypto.getRandomValues(new Uint8Array(e)),yC=(e,l,o)=>{let t=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*t*l/e.length);return(r=l)=>{let c="";for(;;){let p=o(a),i=a;for(;i--;)if(c+=e[p[i]&t]||"",c.length===r)return c}}},uC=(e,l=21)=>yC(e,l,iC);const dC=["width","height"],fC=["id"],BC=["fill"],hC=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],mC=Vs({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){$(S);const o=uC("abcedfghijklmn",10)();return(t,a)=>(v(),J("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",{id:g(o),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,BC)],8,fC)]),s("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${g(o)})`},null,8,hC)],8,dC))}}),Va=P(mC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/Arrow.vue"]]),AC=s("h1",null,"条件付きレンダリング",-1),vC=s("p",null,[s("code",null,"v-if"),n(" あるいは "),s("code",null,"v-show"),n(" によって条件に応じてレンダリングする範囲を変更することができる。 "),s("code",null,"v-show"),n(" は見た目上非表示にするが "),s("code",null,"v-if"),n(" は DOM 要素も取り除く。")],-1),DC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),_C={__name:"28",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=Va,c=Ca("click");return v(),M(Y,K(U(l)),{default:C(()=>[AC,vC,F(a,G({},{ranges:["all","3","10","all"]}),{default:C(()=>[DC]),_:1},16),He(F(r,{x1:"400",y1:"420",x2:"230",y2:"365",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,2]])]),_:1},16)}}},CC=P(_C,[["__file","/@slidev/slides/28.md"]]),gC=s("h1",null,"条件付きレンダリング（v-if と v-show の使い分け）",-1),EC=s("div",{class:"mb-6"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}}),s("th",{style:{"text-align":"left"}},"v-if"),s("th",{style:{"text-align":"left"}},"v-show")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},"初期コスト"),s("td",{style:{"text-align":"left"}},"低い"),s("td",{style:{"text-align":"left"}},"高い")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"切り替えコスト"),s("td",{style:{"text-align":"left"}},"高い"),s("td",{style:{"text-align":"left"}},"低い")])])])],-1),FC=s("ul",null,[s("li",null,[n("コンポーネントをマウントしてからあまり変化しないケースであれば "),s("code",null,"v-if"),n("を使う")]),s("li",null,[n("コンポーネントをマウントしてから頻繁に変化するケースであれば "),s("code",null,"v-show"),n("を使う")])],-1),xC={__name:"29",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[gC,EC,FC]),_:1},16))}},kC=P(xC,[["__file","/@slidev/slides/29.md"]]),bC=s("h1",null,"条件付きレンダリング",-1),wC=s("p",null,[s("code",null,"v-if v-else v-else-if"),n(" でレンダリングの条件分岐ができる。 "),s("code",null,"template"),n(" 要素に対して使うことでグルーピングすることもできる。")],-1),$C={class:"flex gap-4"},SC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),PC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),OC={__name:"30",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[bC,wC,s("div",$C,[F(a,G({},{ranges:[""]}),{default:C(()=>[SC]),_:1},16),F(a,G({},{ranges:[""]}),{default:C(()=>[PC]),_:1},16)])]),_:1},16)}}},TC=P(OC,[["__file","/@slidev/slides/30.md"]]),MC=s("h1",null,"リストレンダリング",-1),NC=s("p",null,"配列あるいはオブジェクトをもとに反復した要素の表示ができる。",-1),LC={class:"flex gap-8"},RC={class:"h-sm overflow-y-auto"},IC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),VC=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),jC={__name:"31",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[MC,NC,s("div",LC,[s("div",RC,[F(a,G({},{ranges:[""]}),{default:C(()=>[IC]),_:1},16)]),VC])]),_:1},16)}}},HC=P(jC,[["__file","/@slidev/slides/31.md"]]),zC=s("h1",null,[n("リストレンダリング（"),s("code",null,"key"),n(" 属性の付与）")],-1),WC=s("p",null,[n("要素の再利用と並び替えを考慮する場合、一意な値を "),s("code",null,"key"),n(" 属性に渡す必要がある。")],-1),UC={class:"flex gap-8"},qC={class:"h-sm overflow-y-auto"},KC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),JC=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),YC={__name:"32",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[zC,WC,s("div",UC,[s("div",qC,[F(a,G({},{ranges:[""]}),{default:C(()=>[KC]),_:1},16)]),JC])]),_:1},16)}}},ZC=P(YC,[["__file","/@slidev/slides/32.md"]]),GC=s("h1",null,[n("リストレンダリング（添字による "),s("code",null,"key"),n(" 属性の付与）")],-1),QC=s("p",null,"識別子を用意していない場合、添字が得られるので代用すると便利。",-1),XC={class:"flex gap-8"},s1={class:"h-sm overflow-y-auto"},e1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),l1=s("div",{class:"flex-shrink w-110"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")]),s("p",null,"ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意")],-1),n1={__name:"33",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[GC,QC,s("div",XC,[s("div",s1,[F(a,G({},{ranges:["all","4"]}),{default:C(()=>[e1]),_:1},16)]),l1])]),_:1},16)}}},o1=P(n1,[["__file","/@slidev/slides/33.md"]]),t1={inject:{$slidev:{from:S}},setup(){return{message:ns("Hello Vue!")}}},a1={id:"two-way-binding"};function r1(e,l,o,t,a,r){return v(),J("div",a1,[s("p",null,Ys(t.message),1),He(s("input",{class:"text-black p-1","onUpdate:modelValue":l[0]||(l[0]=c=>t.message=c)},null,512),[[Jn,t.message]])])}const c1=P(t1,[["render",r1],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwoWayBindingSample.vue"]]),p1=s("h1",null,"フォーム入力バインディング",-1),i1=s("p",null,[s("code",null,"v-model"),n(" によって form の input 要素や textarea 要素、select 要素の入力イベントに応じてデータを更新できるようになる。")],-1),y1={class:"flex gap-8"},u1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),d1={__name:"34",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=c1;return v(),M(Y,K(U(l)),{default:C(()=>[p1,i1,s("div",y1,[F(a,G({},{ranges:[""]}),{default:C(()=>[u1]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},f1=P(d1,[["__file","/@slidev/slides/34.md"]]),B1=s("h1",null,"コンポーネント",-1),h1=s("ul",null,[s("li",null,"コンポーネントの基本と構成"),s("li",null,"プロパティを用いた子コンポーネントへのデータの受け渡し"),s("li",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し"),s("li",null,"v-model を用いた親子間コンポーネントのデータの受け渡し"),s("li",null,"v-model を用いない親子間コンポーネントのデータの受け渡し"),s("li",null,"コンポーネントで v-model を使う"),s("li",null,"スロットによるコンテンツ配信")],-1),m1={__name:"35",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[B1,h1]),_:1},16))}},A1=P(m1,[["__file","/@slidev/slides/35.md"]]),v1="/vue-3-practices/components.png",D1=s("h1",null,"コンポーネントの基本と構成",-1),_1=s("p",null,"親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）",-1),C1=s("img",{src:v1,alt:"コンポーネントの基本と構成",style:{height:"80%",width:"auto"}},null,-1),g1={__name:"36",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[D1,_1,C1]),_:1},16))}},E1=P(g1,[["__file","/@slidev/slides/36.md"]]),F1=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),x1=s("p",null,"親コンポーネントから子コンポーネントに 文字列 を渡してみる",-1),k1={class:"flex gap-8"},b1=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),w1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),$1=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),S1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"title"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"String"),s("span",{style:{color:"#858585"}},",")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"title"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"String"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),P1={__name:"37",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[F1,x1,s("div",k1,[s("div",null,[b1,F(a,G({},{ranges:[""]}),{default:C(()=>[w1]),_:1},16)]),s("div",null,[$1,F(a,G({},{ranges:[""]}),{default:C(()=>[S1]),_:1},16)])])]),_:1},16)}}},O1=P(P1,[["__file","/@slidev/slides/37.md"]]),T1=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),M1=s("p",null,"数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある",-1),N1={class:"flex gap-8"},L1=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),R1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),I1=s("p",{class:"text-xs"},"静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります",-1),V1=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),j1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Number"),s("span",{style:{color:"#858585"}},",")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Number"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),H1={__name:"38",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=Va,c=Ca("click");return v(),M(Y,K(U(l)),{default:C(()=>[T1,M1,s("div",N1,[s("div",null,[L1,F(a,G({},{ranges:["all","2","all"]}),{default:C(()=>[R1]),_:1},16),I1]),s("div",null,[V1,F(a,G({},{ranges:[""]}),{default:C(()=>[j1]),_:1},16)])]),He(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},z1=P(H1,[["__file","/@slidev/slides/38.md"]]),W1=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),U1=s("p",null,"真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),q1={class:"flex gap-8"},K1=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),J1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Y1=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),Z1={class:"h-xs overflow-y-auto"},G1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"show"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"isShow"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Boolean"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"show"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isShow"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"show"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"show"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"props"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Boolean"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"show"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"show"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Q1={__name:"39",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=Va,c=Ca("click");return v(),M(Y,K(U(l)),{default:C(()=>[W1,U1,s("div",q1,[s("div",null,[K1,F(a,G({},{ranges:["all","2","all"]}),{default:C(()=>[J1]),_:1},16)]),s("div",null,[Y1,s("div",Z1,[F(a,G({},{ranges:[""]}),{default:C(()=>[G1]),_:1},16)])])]),He(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},X1=P(Q1,[["__file","/@slidev/slides/39.md"]]),s4=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),e4=s("p",null,"props はデフォルト値を設定することもできる",-1),l4={class:"flex gap-8"},n4=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),o4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),t4=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),a4={class:"h-xs overflow-y-auto"},r4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"show"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"isShow"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Boolean"),s("span",{style:{color:"#858585"}},",")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"show"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"props"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Boolean"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),c4={__name:"40",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[s4,e4,s("div",l4,[s("div",null,[n4,F(a,G({},{ranges:[""]}),{default:C(()=>[o4]),_:1},16)]),s("div",null,[t4,s("div",a4,[F(a,G({},{ranges:["all","9-12","all"]}),{default:C(()=>[r4]),_:1},16)])])])]),_:1},16)}}},p4=P(c4,[["__file","/@slidev/slides/40.md"]]),i4=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),y4=s("p",null,"配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),u4={class:"flex gap-8"},d4=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),f4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),B4=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),h4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"こんにちは、"),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}},"さん、"),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"old"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}"),s("span",{style:{color:"#DBD7CA"}},"歳になりましたね"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"student"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Object"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"student"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"user"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"こんにちは、"),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}},"さん、"),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"old"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}"),s("span",{style:{color:"#393A34"}},"歳になりましたね"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"props"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"student"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Object"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"student"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"user"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),m4={__name:"41",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[i4,y4,s("div",u4,[s("div",null,[d4,F(a,G({},{ranges:[""]}),{default:C(()=>[f4]),_:1},16)]),s("div",null,[B4,F(a,G({},{ranges:[""]}),{default:C(()=>[h4]),_:1},16)])])]),_:1},16)}}},A4=P(m4,[["__file","/@slidev/slides/41.md"]]),v4={inject:{$slidev:{from:S}},setup(e,l){return{clickHandler:()=>{l.emit("child-clicked","Hello!")}}}};function D4(e,l,o,t,a,r){return v(),J("button",{onClick:l[0]||(l[0]=(...c)=>t.clickHandler&&t.clickHandler(...c))},"emit !")}const _4=P(v4,[["render",D4],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitChild.vue"]]),C4={inject:{$slidev:{from:S}},components:{ChildComponent:_4},setup(){return{clicked:l=>{alert(l)}}}};function g4(e,l,o,t,a,r){const c=Dp("ChildComponent");return v(),M(c,{onChildClicked:t.clicked},null,8,["onChildClicked"])}const E4=P(C4,[["render",g4],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitParent.vue"]]),F4=s("h1",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し",-1),x4=s("p",null,"子コンポーネントでイベントを発火させることによって可能",-1),k4={class:"flex gap-8"},b4={class:"flex-shrink"},w4=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),$4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),S4={class:"flex-shrink"},P4=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),O4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),T4={class:"flex-shrink-0"},M4=s("p",{class:"text-xs"},"実行サンプル",-1),N4={__name:"42",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=E4;return v(),M(Y,K(U(l)),{default:C(()=>[F4,x4,s("div",k4,[s("div",b4,[w4,F(a,G({},{ranges:[""]}),{default:C(()=>[$4]),_:1},16)]),s("div",S4,[P4,F(a,G({},{ranges:[""]}),{default:C(()=>[O4]),_:1},16)]),s("div",T4,[M4,F(r)])])]),_:1},16)}}},L4=P(N4,[["__file","/@slidev/slides/42.md"]]),R4={inject:{$slidev:{from:S}},props:{modelValue:String},setup(e,l){const o=T({get:()=>e.modelValue,set:a=>{l.emit("update:modelValue",a)}});return{title:o,changeTitle:()=>{l.emit("update:modelValue",o.value)}}}};function I4(e,l,o,t,a,r){return He((v(),J("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>t.title=c)},null,512)),[[Jn,t.title]])}const Wi=P(R4,[["render",I4],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayChild.vue"]]),V4={inject:{$slidev:{from:S}},components:{TwowayChild:Wi},setup(){return{title:ns("Hello !")}}};function j4(e,l,o,t,a,r){const c=Wi;return v(),J(ks,null,[F(c,{modelValue:t.title,"onUpdate:modelValue":l[0]||(l[0]=p=>t.title=p)},null,8,["modelValue"]),s("p",null,Ys(t.title),1)],64)}const H4=P(V4,[["render",j4],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayParent.vue"]]),z4=s("h1",null,"v-model を用いた親子間コンポーネントのデータの受け渡し",-1),W4=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),U4={class:"flex gap-8"},q4={class:"flex-shrink"},K4=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),J4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Y4={class:"flex-shrink"},Z4=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),G4={class:"h-xs overflow-y-auto"},Q4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#858585"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"props"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"modelValue"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"String"),s("span",{style:{color:"#858585"}},",")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"modelValue"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"String"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),X4={class:"flex-shrink-0"},sg=s("p",{class:"text-xs"},"実行サンプル",-1),eg={__name:"43",setup(e){const l={};return $(S),(o,t)=>{const a=ys,r=H4;return v(),M(Y,K(U(l)),{default:C(()=>[z4,W4,s("div",U4,[s("div",q4,[K4,F(a,G({},{ranges:[""]}),{default:C(()=>[J4]),_:1},16)]),s("div",Y4,[Z4,s("div",G4,[F(a,G({},{ranges:[""]}),{default:C(()=>[Q4]),_:1},16)])]),s("div",X4,[sg,F(r)])])]),_:1},16)}}},lg=P(eg,[["__file","/@slidev/slides/43.md"]]),ng=s("h1",null,"v-model を用いない親子間コンポーネントのデータの受け渡し",-1),og=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),tg={class:"flex gap-8"},ag={class:"flex-shrink"},rg=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),cg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),pg=s("ul",null,[s("li",null,"v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）"),s("li",null,"親 → 子：プロパティ"),s("li",null,"子 → 親：イベント"),s("li",null,"このような状態が双方向バインディング（値を束縛しあっている）")],-1),ig={__name:"44",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[ng,og,s("div",tg,[s("div",ag,[rg,F(a,G({},{ranges:[""]}),{default:C(()=>[cg]),_:1},16)]),pg])]),_:1},16)}}},yg=P(ig,[["__file","/@slidev/slides/44.md"]]),ug=s("h1",null,"スロットによるコンテンツ配信",-1),dg=s("p",null,"slot を使うと、HTML 要素のようにコンポーネントに子要素を渡すことができる",-1),fg={class:"flex gap-8"},Bg={class:"flex-shrink"},hg=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),mg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello Component"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#E0A569"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello Component"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#B58451"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ag={class:"flex-shrink"},vg=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),Dg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ChildComponent: "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ChildComponent: "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),_g=s("div",{class:"text-xs"},[s("p",{class:"text-xs"},"結果例"),s("strong",null,"ChildComponent: "),n("Hello Component ")],-1),Cg={__name:"45",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[ug,dg,s("div",fg,[s("div",Bg,[hg,F(a,G({},{ranges:[""]}),{default:C(()=>[mg]),_:1},16)]),s("div",Ag,[vg,F(a,G({},{ranges:[""]}),{default:C(()=>[Dg]),_:1},16)])]),_g]),_:1},16)}}},gg=P(Cg,[["__file","/@slidev/slides/45.md"]]),Eg=s("h1",null,"Vue の基本的な書き方はこれで以上！",-1),Fg=s("p",null,"おつかれさまでした",-1),xg=s("p",null,"以下を学んできた",-1),kg=s("ul",null,[s("li",null,"リアクティブな値の作り方"),s("li",null,"テンプレートの書き方"),s("li",null,"コンポーネントの作り方")],-1),bg=s("p",null,"ここまでは Vue.js を使うなら必ず知っている必要がある内容",-1),wg=s("p",null,"引き続き知らない機能がコードに出てくるかもしれないが、学んだことと関連していると感じられたらそれでよい",-1),$g=s("p",null,"学習の目安",-1),Sg=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),Pg=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),Og={__name:"46",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[Eg,Fg,xg,kg,bg,wg,$g,Sg,Pg]),_:1},16))}},Tg=P(Og,[["__file","/@slidev/slides/46.md"]]),Mg=s("h1",null,"次のステップは？",-1),Ng=s("p",null,"これから学ぶ内容の確認",-1),Lg=s("ul",null,[s("li",null,[n("より具体的な題材でコードを読む・書く "),s("ul",null,[s("li",null,[n("グリッドコンポーネント "),s("ul",null,[s("li",null,"これまで学んだ内容を組み合わせた少し複雑な実装")])]),s("li",null,[n("Markdown エディター "),s("ul",null,[s("li",null,"throttle-debounce によるイベント処理の間引き")])]),s("li",null,[n("ツクロアデザインラボの記事ビューアー "),s("ul",null,[s("li",null,"Fetch API による JSON データの取得"),s("li",null,"Vue Router による画面遷移")])]),s("li",null,[n("靴のギャラリー "),s("ul",null,[s("li",null,"画像の取得と表示"),s("li",null,"あらかじめ用意されたスタイルの適用")])])])]),s("li",null,[n("Nuxt 3 を使う "),s("ul",null,[s("li",null,"Vue.js 単体を使う場合との違い"),s("li",null,"useFetch などの Nuxt 3 特有のヘルパー関数の使い方")])])],-1),Rg={__name:"47",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[Mg,Ng,Lg]),_:1},16))}},Ig=P(Rg,[["__file","/@slidev/slides/47.md"]]),Vg=s("h1",null,"グリッドコンポーネント",-1),jg=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev")],-1),Hg=s("ol",null,[s("li",null,"どんなアプリか：表にデータを流し込んでカラムで並べ替えできる"),s("li",null,"コードの説明"),s("li",null,"行を追加できるようにしよう（20 分程度）")],-1),zg={__name:"48",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[Vg,jg,Hg]),_:1},16))}},Wg=P(zg,[["__file","/@slidev/slides/48.md"]]),Ug=s("h1",null,"イベント処理の間引き",-1),qg=s("p",null,"throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる",-1),Kg={class:"flex gap-8"},Jg={class:"h-sm overflow-y-auto flex-shrink"},Yg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Zg={class:"flex-shrink"},Gg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Qg=s("p",null,"次のように書き換えると…？",-1),Xg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"filterFruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"debounce"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"indexOf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},">="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"filterFruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"debounce"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"indexOf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},">="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")])])])],-1),s7={__name:"49",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[Ug,qg,s("div",Kg,[s("div",Jg,[F(a,G({},{ranges:[""]}),{default:C(()=>[Yg]),_:1},16)]),s("div",Zg,[F(a,G({},{ranges:[""]}),{default:C(()=>[Gg]),_:1},16),Qg,F(a,G({},{ranges:[""]}),{default:C(()=>[Xg]),_:1},16)])])]),_:1},16)}}},e7=P(s7,[["__file","/@slidev/slides/49.md"]]),l7=s("h1",null,"Markdown エディター",-1),n7=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev")],-1),o7=s("ol",null,[s("li",null,"どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる"),s("li",null,"コードの説明"),s("li",null,"右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）")],-1),t7={__name:"50",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[l7,n7,o7]),_:1},16))}},a7=P(t7,[["__file","/@slidev/slides/50.md"]]),r7=s("h1",null,"デザインラボの記事ビューアー",-1),c7=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev")],-1),p7=s("ol",null,[s("li",null,[n("どんなアプリか："),s("a",{href:"https://design-lab.tuqulore.com/",target:"_blank",rel:"noopener"},"デザインラボ"),n("というサイトと同じ記事データ（JSON）を取得して一覧から選択表示できる")]),s("li",null,"コードの説明（App コンポーネント、PostList コンポーネント）"),s("li",null,[n("Vue Router を導入しよう（20 分程度） "),s("ul",null,[s("li",null,"Vue プラグインとして Vue アプリケーションインスタンスに登録"),s("li",null,"画面が切り替わるようコンポーネントへの差し替え"),s("li",null,"画面遷移を補足できるコンポーネントへの差し替え")])]),s("li",null,"コードの説明（PostDetail コンポーネント）")],-1),i7={__name:"51",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[r7,c7,p7]),_:1},16))}},y7=P(i7,[["__file","/@slidev/slides/51.md"]]),u7="/vue-3-practices/handson-gallery-shoes-finish.png",d7=s("h1",null,"靴のギャラリー",-1),f7=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev")],-1),B7=s("ol",null,[s("li",null,"どんなアプリか：靴のデータ（JSON）を取得してショッピングサイトらしい見た目で一覧表示できる"),s("li",null,"JSON から靴のデータを取得しよう（10 分程度）"),s("li",null,"取得した靴のデータをあらかじめ用意されたスタイルで表示しよう（20 分程度）")],-1),h7=s("img",{class:"pt-2",src:u7,width:"400"},null,-1),m7={__name:"52",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[d7,f7,B7,h7]),_:1},16))}},A7=P(m7,[["__file","/@slidev/slides/52.md"]]),v7=s("h1",null,"Nuxt 3",-1),D7=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt")],-1),_7=s("p",null,"効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）",-1),C7=s("ol",null,[s("li",null,[n("リアクティビティと Web コンポーネントの提供："),s("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue.js")]),s("li",null,[n("開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング："),s("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener"},"webpack 5"),n(" と "),s("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite")]),s("li",null,[n("レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける："),s("a",{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener"},"esbuild")]),s("li",null,[n("開発サーバー、サーバーサイドレンダリング、API サーバーの提供："),s("a",{href:"https://github.com/unjs/h3",target:"_blank",rel:"noopener"},"h3")]),s("li",null,[n("ルーティング（画面遷移処理）："),s("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"vue-router")])],-1),g7={__name:"53",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[v7,D7,_7,C7]),_:1},16))}},E7=P(g7,[["__file","/@slidev/slides/53.md"]]),F7=s("h1",null,"Nuxt 3",-1),x7=s("ul",null,[s("li",null,"Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）"),s("li",null,"Vue コンポーネント等の import を省略できる"),s("li",null,"pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）"),s("li",null,"server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）"),s("li",null,"Nuxt 3 は 2022 年 6 月現在、リリース候補版が公開されている")],-1),k7={__name:"54",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[F7,x7]),_:1},16))}},b7=P(k7,[["__file","/@slidev/slides/54.md"]]),w7=s("h1",null,"Nuxt 3",-1),$7=s("ul",null,[s("li",null,"pages"),s("li",null,"NuxtLink"),s("li",null,"layouts"),s("li",null,"Data Fetching / server ディレクトリ"),s("li",null,"composables")],-1),S7={__name:"55",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[w7,$7]),_:1},16))}},P7=P(S7,[["__file","/@slidev/slides/55.md"]]),O7=s("h1",null,"pages",-1),T7=s("p",null,[n("app.vue を削除する。"),s("br"),n(" pages ディレクトリに.vue ファイルを配置し、複数ページを構成する。 まずは "),s("code",null,"pages/index.vue"),n(", "),s("code",null,"pages/about.vue"),n(" を作成する。")],-1),M7=s("p",null,[n("Vue 開発環境では App.vue ファイルをメインで開発していて、Nuxt でも同様の目的を app.vue にて行える。例えば app.vue は以下のように書いて、各ページの template 部分が"),s("code",null,"<NuxtPage />"),n("に置き換わる。")],-1),N7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通ヘッダ"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通ヘッダ"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),L7=s("p",null,"ただし、複数ページを構成するにあたっては pages 内で開発・管理することが一般的。 その際、app.vue でこのようなことができるが、後述する layouts 機能を使ったほうがよい。",-1),R7={__name:"56",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[O7,T7,M7,F(a,G({},{ranges:[""]}),{default:C(()=>[N7]),_:1},16),L7]),_:1},16)}}},I7=P(R7,[["__file","/@slidev/slides/56.md"]]),V7=s("h1",null,"NuxtLink",-1),j7=s("p",null,[n("コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。"),s("br"),n(" Nuxt ではページを作成するだけで Vue Router による設定を自動に行ってくれる、つまり Vue 環境下のように手動でルーティング設定を生成する必要がない。")],-1),H7=s("p",null,"そしてそのルートを移動する際は HTML の",-1),z7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),W7=s("p",null,"ではなく",-1),U7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},'<NuxtLink to="/about">ABOUT</NuxtLink>')])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},'<NuxtLink to="/about">ABOUT</NuxtLink>')])])])],-1),q7=s("p",null,[n("と記述してリンクを作成する。"),s("br"),n(" ルート外、例えば外部サイトのリンクを貼る場合は従来の"),s("code",null,"<a>"),n("要素を使うことになる。")],-1),K7={__name:"57",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[V7,j7,H7,F(a,G({},{ranges:[""]}),{default:C(()=>[z7]),_:1},16),W7,F(a,G({},{ranges:[""]}),{default:C(()=>[U7]),_:1},16),q7]),_:1},16)}}},J7=P(K7,[["__file","/@slidev/slides/57.md"]]),Y7=s("h1",null,"layouts",-1),Z7=s("p",null,[s("code",null,"layouts/default.vue"),n("を作成し、共通ナビゲーションを表示させる。"),s("br"),n(" pages で解説したように例えば app.vue に共通ヘッダを持たせるのであれば、以下のような書き方で事足りるが、ページによってはヘッダが不要などといったことが出てくる。 その際、ページそのもののテンプレートを複数用意し、各ページがそのテンプレートを必要に応じて選び変えることができる。")],-1),G7=s("p",null,[s("code",null,"app.vue"),n("の例")],-1),Q7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通ヘッダ"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通ヘッダ"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),X7=s("p",null,[s("code",null,"layouts/default.vue"),n("の例")],-1),s6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通ヘッダ"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通ヘッダ"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),e6={__name:"58",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[Y7,Z7,G7,F(a,G({},{ranges:[""]}),{default:C(()=>[Q7]),_:1},16),X7,F(a,G({},{ranges:[""]}),{default:C(()=>[s6]),_:1},16)]),_:1},16)}}},l6=P(e6,[["__file","/@slidev/slides/58.md"]]),n6=s("h1",null,"Data Fetching / server ディレクトリ",-1),o6=s("p",null,[s("code",null,"server/api"),n("ディレクトリにある"),s("code",null,"users.js"),n("を確認、"),s("code",null,"components/userList.vue"),n("に以下を記述する。")],-1),t6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),a6={__name:"59",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[n6,o6,F(a,G({},{ranges:[""]}),{default:C(()=>[t6]),_:1},16)]),_:1},16)}}},r6=P(a6,[["__file","/@slidev/slides/59.md"]]),c6=s("h1",null,"composables",-1),p6=s("p",null,[n("アプリ全体共通のデータを管理する。js ファイルではあるが、中身は vue の記述に近いことがわかる。 ここで状態を管理する。 "),s("code",null,"composables/userCounter.js"),n("を作成する。")],-1),i6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),y6={__name:"60",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[c6,p6,F(a,G({},{ranges:[""]}),{default:C(()=>[i6]),_:1},16)]),_:1},16)}}},u6=P(y6,[["__file","/@slidev/slides/60.md"]]),d6=s("h1",null,"composables",-1),f6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"カウント: "),s("span",{style:{color:"#858585"}},"{{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}}</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"カウント: "),s("span",{style:{color:"#8E8F8B"}},"{{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}}</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),B6={__name:"61",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[d6,F(a,G({},{ranges:[""]}),{default:C(()=>[f6]),_:1},16)]),_:1},16)}}},h6=P(B6,[["__file","/@slidev/slides/61.md"]]),m6=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較",-1),A6=s("p",null,"デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの",-1),v6=s("p",null,"動作は Vue 3 のものと同じ",-1),D6=s("p",null,"Node.js がセットアップ済みの人はローカルで動かしてみよう",-1),_6=s("ol",null,[s("li",null,[s("a",{href:"https://github.com/tuqulore/vue-3-practices/",target:"_blank",rel:"noopener"},"https://github.com/tuqulore/vue-3-practices/"),n(" から ZIP をダウンロード")]),s("li",null,"任意の場所に ZIP を展開"),s("li",null,"handson-fetch-router-nuxt-finish ディレクトリに移動"),s("li",null,[s("code",null,"npm install"),n(" で NPM パッケージをインストール")]),s("li",null,[s("code",null,"npm run dev"),n(" で Nuxt 3 の開発サーバーを起動")])],-1),C6={__name:"62",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[m6,A6,v6,D6,_6]),_:1},16))}},g6=P(C6,[["__file","/@slidev/slides/62.md"]]),E6=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),F6=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"Vue 3"),s("ol",null,[s("li",null,"Vue Router をプラグインとしてインストール"),s("li",null,"ルートを定義する"),s("li",null,"RouterView コンポーネントを使う")])]),s("div",null,[s("p",{class:"text-xs"},"Nuxt 3"),s("div",{class:"h-xs overflow-y-auto"},[s("ol",null,[s("li",null,"導入済みなので設定不要"),s("li",null,"ファイル・ディレクトリ構成で定義できる（ファイルベースルーティング）"),s("li",null,[n("app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 "),s("a",{href:"https://v3.nuxtjs.org/guide/directory-structure/app",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/directory-structure/app")])]),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"pages/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"pages/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])])])])])],-1),x6={__name:"63",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[E6,F6]),_:1},16))}},k6=P(x6,[["__file","/@slidev/slides/63.md"]]),b6=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),w6=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/directory-structure/pages",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/directory-structure/pages")],-1),$6=s("blockquote",null,[s("p",null,[n("Pages "),s("strong",null,"must have a single root element"),n(" to allow route transitions between pages. (HTML comments are considered elements as well.)")])],-1),S6=s("p",null,[n("Vue 3 はテンプレートの最上位に複数要素が書けるようになった "),s("a",{href:"https://v3.ja.vuejs.org/guide/migration/fragments.html",target:"_blank",rel:"noopener"},"https://v3.ja.vuejs.org/guide/migration/fragments.html")],-1),P6=s("p",null,"例：",-1),O6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}}," />")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),T6=s("p",null,"しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない",-1),M6={__name:"64",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[b6,w6,$6,S6,P6,F(a,G({},{ranges:[""]}),{default:C(()=>[O6]),_:1},16),T6]),_:1},16)}}},N6=P(M6,[["__file","/@slidev/slides/64.md"]]),L6=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),R6={class:"flex gap-8"},I6=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),V6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"RouterLink"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue-router"'),s("span",{style:{color:"#858585"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"components"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"RouterLink"),s("span",{style:{color:"#858585"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"RouterLink"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue-router"'),s("span",{style:{color:"#8E8F8B"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"components"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"RouterLink"),s("span",{style:{color:"#8E8F8B"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),j6=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),H6={class:"h-xs overflow-y-auto"},z6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"setup"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"setup"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),W6=s("p",null,"インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる",-1),U6={__name:"65",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[L6,s("div",R6,[s("div",null,[I6,F(a,G({},{ranges:[""]}),{default:C(()=>[V6]),_:1},16)]),s("div",null,[j6,s("div",H6,[F(a,G({},{ranges:[""]}),{default:C(()=>[z6]),_:1},16),W6])])])]),_:1},16)}}},q6=P(U6,[["__file","/@slidev/slides/65.md"]]),K6=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),J6=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/concepts/auto-imports",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/concepts/auto-imports")],-1),Y6=s("p",null,"以下はインポート不要",-1),Z6=s("ul",null,[s("li",null,"Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）"),s("li",null,"今まで使ってきた Composition API 関連の関数（ref、computed など）"),s("li",null,"components ディレクトリに配置された Vue コンポーネント"),s("li",null,"composables ディレクトリに配置されたコンポジション関数")],-1),G6={__name:"66",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[K6,J6,Y6,Z6]),_:1},16))}},Q6=P(G6,[["__file","/@slidev/slides/66.md"]]),X6=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),sE={class:"flex gap-8"},eE=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),lE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"中略"),s("span",{style:{color:"#DBD7CA"}},"）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"load"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"response"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"posts"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"json"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"load"),s("span",{style:{color:"#858585"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"中略"),s("span",{style:{color:"#393A34"}},"）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"load"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"response"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"response"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"json"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"load"),s("span",{style:{color:"#8E8F8B"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),nE=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),oE={class:"h-xs overflow-y-auto"},tE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"中略"),s("span",{style:{color:"#DBD7CA"}},"）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#C98A7D"}},"`http://localhost:3000/wp-json/wp/v2/posts.json`")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"中略"),s("span",{style:{color:"#393A34"}},"）")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#B56959"}},"`http://localhost:3000/wp-json/wp/v2/posts.json`")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),aE=s("ul",null,[s("li",null,"リアクティブな値を別途用意する必要がない"),s("li",null,[s("a",{href:"https://developer.mozilla.org/ja/docs/Web/API/Response/json",target:"_blank",rel:"noopener"},"Response.json()"),n("が暗黙的に実行されオブジェクトが得られる")]),s("li",null,[n("データ再取得の関数、取得中の状態値などあると便利なものが用意されている "),s("a",{href:"https://v3.nuxtjs.org/api/composables/use-fetch",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/api/composables/use-fetch")])],-1),rE={__name:"67",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[X6,s("div",sE,[s("div",null,[eE,F(a,G({},{ranges:[""]}),{default:C(()=>[lE]),_:1},16)]),s("div",null,[nE,s("div",oE,[F(a,G({},{ranges:[""]}),{default:C(()=>[tE]),_:1},16),aE])])])]),_:1},16)}}},cE=P(rE,[["__file","/@slidev/slides/67.md"]]),pE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),iE=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/features/data-fetching",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/features/data-fetching")],-1),yE=s("p",null,"useFetch 以外もある",-1),uE=s("p",null,[n("useLazyFetch: 非同期関数でない代わりにデータ取得前は "),s("code",null,"null"),n(" が入る")],-1),dE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyFetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/posts"'),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyFetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/posts"'),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),fE=s("p",null,"useAsyncData: 例としては useFetch と同じことをやっている。（useFetch が使えないケースで）非同期処理によってデータを取得したい際に使う",-1),BE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},"));")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},"));")])])])],-1),hE=s("p",null,"useLazyAsyncData: useLazyFetch の useAsyncData 版",-1),mE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),AE={__name:"68",setup(e){const l={};return $(S),(o,t)=>{const a=ys;return v(),M(Y,K(U(l)),{default:C(()=>[pE,iE,yE,uE,F(a,G({},{ranges:[""]}),{default:C(()=>[dE]),_:1},16),fE,F(a,G({},{ranges:[""]}),{default:C(()=>[BE]),_:1},16),hE,F(a,G({},{ranges:[""]}),{default:C(()=>[mE]),_:1},16)]),_:1},16)}}},vE=P(AE,[["__file","/@slidev/slides/68.md"]]),DE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),_E=s("p",null,"便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある",-1),CE=s("ul",null,[s("li",null,[n("同一オリジン（例："),s("code",null,"http://localhost:3000"),n("）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある "),s("ul",null,[s("li",null,"server ディレクトリで提供する API エンドポイントはオリジン省略可能"),s("li",null,"上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要")])])],-1),gE=s("p",null,[n("Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 "),s("a",{href:"https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch")],-1),EE=s("p",null,"場合によっては（$fetch ではなく） fetch を使うことも検討すること",-1),FE={__name:"69",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[DE,_E,CE,gE,EE]),_:1},16))}},xE=P(FE,[["__file","/@slidev/slides/69.md"]]),kE=s("h1",null,"スタイルガイド",-1),bE=s("p",null,"Vue 固有の記法についての公式なスタイルガイド",-1),wE=s("ul",null,[s("li",null,"スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる"),s("li",null,"スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる"),s("li",null,[s("a",{href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener"},"eslint-plugin-vue"),n("を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる")])],-1),$E=s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/style-guide/",target:"_blank",rel:"noopener"},"スタイルガイド")],-1),SE={__name:"70",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[kE,bE,wE,$E]),_:1},16))}},PE=P(SE,[["__file","/@slidev/slides/70.md"]]),OE=s("h1",null,"Vue 3 と Nuxt 3 の説明はこれで以上！",-1),TE=s("p",null,"おつかれさまでした",-1),ME=s("p",null,"以下を学んできた",-1),NE=s("ul",null,[s("li",null,"Vue の基本的な書き方"),s("li",null,"Vue アプリケーションのコードを読む・書く"),s("li",null,"Nuxt アプリケーションのコードを読む・書く")],-1),LE=s("p",null,"Nuxt 3 を使ってウェブアプリケーションをつくっていく準備ができた",-1),RE=s("p",null,"業務・趣味でウェブアプリケーションを開発していきましょう！",-1),IE=s("p",null,"学習の目安",-1),VE=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),jE=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),HE={__name:"71",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[OE,TE,ME,NE,LE,RE,IE,VE,jE]),_:1},16))}},zE=P(HE,[["__file","/@slidev/slides/71.md"]]),WE=s("h1",null,"課題",-1),UE=s("ul",null,[s("li",null,"レベル 1 ～ 3 の 3 つある"),s("li",null,"1 から順番に取り組んでもらう"),s("li",null,"16 時に解説する")],-1),qE={__name:"72",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[WE,UE]),_:1},16))}},KE=P(qE,[["__file","/@slidev/slides/72.md"]]),JE=s("h1",null,"課題（レベル 1）",-1),YE=s("p",null,[n("問題："),s("a",{href:"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue")],-1),ZE=s("ol",null,[s("li",null,[n("useFetch を使って "),s("a",{href:"http://localhost:3000/data.json",target:"_blank",rel:"noopener"},"http://localhost:3000/data.json"),n(" から果物のリストを取得してください")]),s("li",null,[n("果物を順序なしリストで表示してください "),s("a",{href:"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul",target:"_blank",rel:"noopener"},"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul")])],-1),GE={__name:"73",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[JE,YE,ZE]),_:1},16))}},QE=P(GE,[["__file","/@slidev/slides/73.md"]]),XE=s("h1",null,"課題（レベル 2）",-1),sF=s("p",null,[n("問題："),s("a",{href:"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue")],-1),eF=s("p",null,"コード上のコメントを読みながら、未完成のアプリを完成させてください",-1),lF={__name:"74",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[XE,sF,eF]),_:1},16))}},nF=P(lF,[["__file","/@slidev/slides/74.md"]]),oF=s("h1",null,"課題（レベル 3）",-1),tF=s("p",null,[n("問題："),s("a",{href:"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue")],-1),aF=s("p",null,"コード上のコメントを読みながら、未完成のアプリを完成させてください",-1),rF={__name:"75",setup(e){const l={};return $(S),(o,t)=>(v(),M(Y,K(U(l)),{default:C(()=>[oF,tF,aF]),_:1},16))}},cF=P(rF,[["__file","/@slidev/slides/75.md"]]),pF=[{path:"1",name:"page-1",component:D9,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
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
`,drawings:{persist:!1},title:"Vue.js"},index:0,start:0,end:29,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:x9,meta:{slide:{raw:`
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
  - throttle-debounce, fetch, Vue Router など`,frontmatter:{},index:1,start:30,end:48,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:T9,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:2,start:49,end:63,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:V9,meta:{slide:{raw:`
# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。
`,title:"本講座のすすめかた",level:1,content:`# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。`,frontmatter:{},index:3,start:64,end:73,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Y9,meta:{slide:{raw:`
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

講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。`,frontmatter:{},index:4,start:74,end:92,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:hv,meta:{slide:{raw:`
# Vue には 2 つの書き方があります

<div class="flex gap-8">

<div>
Vue2 で主に使われていた「Options API」

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
Vue3 で主に使われている「Composition API」

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
`,title:"Vue には 2 つの書き方があります",level:1,content:`# Vue には 2 つの書き方があります

<div class="flex gap-8">

<div>
Vue2 で主に使われていた「Options API」

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
Vue3 で主に使われている「Composition API」

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

現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。`,frontmatter:{},index:5,start:93,end:145,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Cv,meta:{slide:{raw:`
# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />
`,title:"Composition API のメリット",level:1,content:`# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />`,frontmatter:{},index:6,start:146,end:153,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Pv,meta:{slide:{raw:`
# まずは書いてみる

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
動作サンプル
<FirstSample />
</div>

</div>`,frontmatter:{},index:7,start:154,end:191,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Iv,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:8,start:192,end:224,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Uv,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:9,start:225,end:260,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:nD,meta:{slide:{raw:`
# リアクティブの探求（ref によるリアクティブな値の参照）

\`ref\` を使った値を操作する場合、\`setup\` 関数内では \`value\` プロパティにアクセスする。
\`template\` 内では変数（定数）そのものを参照するだけで値を得られる。

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
`,title:"リアクティブの探求（ref によるリアクティブな値の参照）",level:1,content:`# リアクティブの探求（ref によるリアクティブな値の参照）

\`ref\` を使った値を操作する場合、\`setup\` 関数内では \`value\` プロパティにアクセスする。
\`template\` 内では変数（定数）そのものを参照するだけで値を得られる。

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

</div>`,frontmatter:{},index:10,start:261,end:309,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:pD,meta:{slide:{raw:`
# リアクティブの探求（リアクティブな値をオブジェクトにまとめる）

リアクティブにしたいデータがオブジェクトの場合、\`reactive\` を使う

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
`,title:"リアクティブの探求（リアクティブな値をオブジェクトにまとめる）",level:1,content:`# リアクティブの探求（リアクティブな値をオブジェクトにまとめる）

リアクティブにしたいデータがオブジェクトの場合、\`reactive\` を使う

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

</div>`,frontmatter:{},index:11,start:310,end:341,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:BD,meta:{slide:{raw:`
# リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）

前項の \`reactive\` だと、分割代入しても値が取り出せない。Vue では \`toRefs\` を使うことで可能になる。

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
`,title:"リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）",level:1,content:`# リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）

前項の \`reactive\` だと、分割代入しても値が取り出せない。Vue では \`toRefs\` を使うことで可能になる。

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

</div>`,frontmatter:{},index:12,start:342,end:376,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:_D,meta:{slide:{raw:`
# リアクティブの探求（リアクティブな値を読み込み専用にする）

<div class="flex gap-8">

<div class="h-md overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <!-- user.name を変更しようとすると失敗し、警告が表示されます -->
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
`,title:"リアクティブの探求（リアクティブな値を読み込み専用にする）",level:1,content:`# リアクティブの探求（リアクティブな値を読み込み専用にする）

<div class="flex gap-8">

<div class="h-md overflow-y-auto">

\`\`\`vue
<template>
  <div>
    <!-- user.name を変更しようとすると失敗し、警告が表示されます -->
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

</div>`,frontmatter:{},index:13,start:377,end:416,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:xD,meta:{slide:{raw:`
# 算出プロパティ（computed）

あるリアクティブな値を元に計算結果を返したい場合、\`computed\` 関数を利用する

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
`,title:"算出プロパティ（computed）",level:1,content:`# 算出プロパティ（computed）

あるリアクティブな値を元に計算結果を返したい場合、\`computed\` 関数を利用する

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
\`\`\``,frontmatter:{},index:14,start:417,end:444,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:PD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:15,start:445,end:482,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:qD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:16,start:483,end:534,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:QD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:17,start:535,end:571,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:o_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:18,start:572,end:608,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:c_,meta:{slide:{raw:`
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
- フォーム入力バインディング`,frontmatter:{},index:19,start:609,end:620,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:B_,meta:{slide:{raw:`
# 展開

Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる

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

結果

\`\`\`
Message: Hello!
\`\`\``,frontmatter:{},index:20,start:621,end:649,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:F_,meta:{slide:{raw:`
# 展開（リアクティブな値を使うと）

<p class="text-sm">
counterを1秒ごとに増やしていく
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

結果

<div>
<CounterSample />
</div>
`,title:"展開（リアクティブな値を使うと）",level:1,content:`# 展開（リアクティブな値を使うと）

<p class="text-sm">
counterを1秒ごとに増やしていく
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

結果

<div>
<CounterSample />
</div>`,frontmatter:{},index:21,start:650,end:680,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:$_,meta:{slide:{raw:`
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

ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい`,frontmatter:{},index:22,start:681,end:691,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:L_,meta:{slide:{raw:`
# バインディング

「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 \`v-bind\` ディレクティブを使う

<div>

\`\`\`vue
<template>
  <a v-bind:href="url"> Vue.js公式サイト </a>
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

省略するとこのように書ける

</div>

\`\`\`html
<a :href="url"> Vue.js公式サイト </a>
\`\`\``,frontmatter:{},index:23,start:692,end:724,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Z_,meta:{slide:{raw:`
# バインディング（クラスとスタイル）

クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある

<div class="flex gap-6">

<div>

<p class="text-xs">オブジェクト構文</p>

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

</div>`,frontmatter:{},index:24,start:725,end:786,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:oC,meta:{slide:{raw:`
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

省略するとこのようにかける

\`\`\`html
<button @click="counter += 1">Add 1</button>
\`\`\``,frontmatter:{},index:25,start:787,end:823,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:pC,meta:{slide:{raw:`
# イベントハンドリング（関数名を属性値として使う）

関数を渡すと複雑な処理が書きやすい

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
`,title:"イベントハンドリング（関数名を属性値として使う）",level:1,content:`# イベントハンドリング（関数名を属性値として使う）

関数を渡すと複雑な処理が書きやすい

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
\`\`\``,frontmatter:{},index:26,start:824,end:854,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:CC,meta:{slide:{raw:`
# 条件付きレンダリング

\`v-if\` あるいは \`v-show\` によって条件に応じてレンダリングする範囲を変更することができる。 \`v-show\` は見た目上非表示にするが \`v-if\` は DOM 要素も取り除く。

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
`,title:"条件付きレンダリング",level:1,content:`# 条件付きレンダリング

\`v-if\` あるいは \`v-show\` によって条件に応じてレンダリングする範囲を変更することができる。 \`v-show\` は見た目上非表示にするが \`v-if\` は DOM 要素も取り除く。

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

<arrow v-click="2" x1="400" y1="420" x2="230" y2="365" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:27,start:855,end:881,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:kC,meta:{slide:{raw:`
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
- コンポーネントをマウントしてから頻繁に変化するケースであれば \`v-show\`を使う`,frontmatter:{},index:28,start:882,end:897,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:TC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:29,start:898,end:948,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:HC,meta:{slide:{raw:`
# リストレンダリング

配列あるいはオブジェクトをもとに反復した要素の表示ができる。

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
    <p>結果</p>
    <ol>
      <li>Learn JavaScript</li>
      <li>Learn Vue</li>
      <li>Build something awesome</li>
    </ol>

  </div>

</div>`,frontmatter:{},index:30,start:949,end:999,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:ZC,meta:{slide:{raw:`
# リストレンダリング（\`key\` 属性の付与）

要素の再利用と並び替えを考慮する場合、一意な値を \`key\` 属性に渡す必要がある。

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
  <p>結果</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>
</div>

</div>`,frontmatter:{},index:31,start:1e3,end:1049,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:o1,meta:{slide:{raw:`
# リストレンダリング（添字による \`key\` 属性の付与）

識別子を用意していない場合、添字が得られるので代用すると便利。

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
  <p>結果</p>
  <ol>
    <li>Learn JavaScript</li>
    <li>Learn Vue</li>
    <li>Build something awesome</li>
  </ol>

ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意

</div>

</div>`,frontmatter:{},index:32,start:1050,end:1102,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:f1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:33,start:1103,end:1137,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:A1,meta:{slide:{raw:`
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
- スロットによるコンテンツ配信`,frontmatter:{},index:34,start:1138,end:1149,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:E1,meta:{slide:{raw:`
# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />
`,title:"コンポーネントの基本と構成",level:1,content:`# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />`,frontmatter:{},index:35,start:1150,end:1157,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:O1,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

親コンポーネントから子コンポーネントに 文字列 を渡してみる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

親コンポーネントから子コンポーネントに 文字列 を渡してみる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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

</div>`,frontmatter:{},index:36,start:1158,end:1212,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:z1,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります</p>

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります</p>

</div>

<div>

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:37,start:1213,end:1271,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:X1,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
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
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:38,start:1272,end:1332,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:p4,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

props はデフォルト値を設定することもできる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue {all|9-12|all}
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
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
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

props はデフォルト値を設定することもできる

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue {all|9-12|all}
<template>
  <p v-if="show">props'is-show'がtrueであれば見れます</p>
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

</div>`,frontmatter:{},index:39,start:1333,end:1394,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:A4,meta:{slide:{raw:`
# プロパティを用いた子コンポーネントへのデータの受け渡し

配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>こんにちは、{{ user.name }}さん、{{ user.old }}歳になりましたね</p>
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
`,title:"プロパティを用いた子コンポーネントへのデータの受け渡し",level:1,content:`# プロパティを用いた子コンポーネントへのデータの受け渡し

配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある

<div class="flex gap-8">

<div>

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

\`\`\`vue
<template>
  <p>こんにちは、{{ user.name }}さん、{{ user.old }}歳になりましたね</p>
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

</div>`,frontmatter:{},index:40,start:1395,end:1449,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:L4,meta:{slide:{raw:`
# イベント購読を用いた親コンポーネントへのデータの受け渡し

子コンポーネントでイベントを発火させることによって可能

<div class="flex gap-8">

<div class="flex-shrink">

<p class="text-xs">親コンポーネント - App.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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
<p class="text-xs">実行サンプル</p>
<EmitParent />
</div>

</div>`,frontmatter:{},index:41,start:1450,end:1515,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:lg,meta:{slide:{raw:`
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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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

<p class="text-xs">子コンポーネント - ChildComponent.vue</p>

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
<p class="text-xs">実行サンプル</p>

<TwowayParent />

</div>

</div>`,frontmatter:{},index:42,start:1516,end:1593,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:yg,meta:{slide:{raw:`
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

- v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）
- 親 → 子：プロパティ
- 子 → 親：イベント
- このような状態が双方向バインディング（値を束縛しあっている）

</div>`,frontmatter:{},index:43,start:1594,end:1634,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:gg,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:44,start:1635,end:1675,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:Tg,meta:{slide:{raw:`
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

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:45,start:1676,end:1698,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Ig,meta:{slide:{raw:`
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
  - useFetch などの Nuxt 3 特有のヘルパー関数の使い方`,frontmatter:{},index:46,start:1699,end:1719,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Wg,meta:{slide:{raw:`
# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）
`,title:"グリッドコンポーネント",level:1,content:`# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）`,frontmatter:{},index:47,start:1720,end:1729,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:e7,meta:{slide:{raw:`
# イベント処理の間引き

throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる

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

次のように書き換えると…？

\`\`\`js
const filterFruits = debounce(1000, () => {
  fruits.value = originalFruits.filter(
    (fruit) => fruit.indexOf(message.value) >= 0
  );
});
\`\`\`

</div>
</div>`,frontmatter:{},index:48,start:1730,end:1797,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:a7,meta:{slide:{raw:`
# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）
`,title:"Markdown エディター",level:1,content:`# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）`,frontmatter:{},index:49,start:1798,end:1807,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:y7,meta:{slide:{raw:`
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
4. コードの説明（PostDetail コンポーネント）`,frontmatter:{},index:50,start:1808,end:1821,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:A7,meta:{slide:{raw:`
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

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">`,frontmatter:{},index:51,start:1822,end:1833,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:E7,meta:{slide:{raw:`
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
5. ルーティング（画面遷移処理）：[vue-router](https://router.vuejs.org/)`,frontmatter:{},index:52,start:1834,end:1847,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:b7,meta:{slide:{raw:`
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
- Nuxt 3 は 2022 年 6 月現在、リリース候補版が公開されている`,frontmatter:{},index:53,start:1848,end:1857,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:P7,meta:{slide:{raw:`
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
- composables`,frontmatter:{},index:54,start:1858,end:1867,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:I7,meta:{slide:{raw:`
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
その際、app.vue でこのようなことができるが、後述する layouts 機能を使ったほうがよい。`,frontmatter:{},index:55,start:1868,end:1887,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:J7,meta:{slide:{raw:`
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
ルート外、例えば外部サイトのリンクを貼る場合は従来の\`<a>\`要素を使うことになる。`,frontmatter:{},index:56,start:1888,end:1909,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:l6,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:57,start:1910,end:1937,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:r6,meta:{slide:{raw:`
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

<script>
export default {
  async setup() {
    const { data: users } = await useFetch("/api/users");
    return { users };
  },
};
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

<script>
export default {
  async setup() {
    const { data: users } = await useFetch("/api/users");
    return { users };
  },
};
<\/script>
\`\`\``,frontmatter:{},index:58,start:1938,end:1964,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:u6,meta:{slide:{raw:`
# composables

アプリ全体共通のデータを管理する。js ファイルではあるが、中身は vue の記述に近いことがわかる。 ここで状態を管理する。
\`composables/userCounter.js\`を作成する。

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

アプリ全体共通のデータを管理する。js ファイルではあるが、中身は vue の記述に近いことがわかる。 ここで状態を管理する。
\`composables/userCounter.js\`を作成する。

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
\`\`\``,frontmatter:{},index:59,start:1965,end:1984,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:h6,meta:{slide:{raw:`
# composables

\`\`\`vue
<template>
  <div>
    <p>カウント: {{ counter.count }}</p>
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
    <p>カウント: {{ counter.count }}</p>
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
\`\`\``,frontmatter:{},index:60,start:1985,end:2013,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:g6,meta:{slide:{raw:`
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
5. \`npm run dev\` で Nuxt 3 の開発サーバーを起動`,frontmatter:{},index:61,start:2014,end:2029,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:k6,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:62,start:2030,end:2068,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:N6,meta:{slide:{raw:`
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

しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない`,frontmatter:{},index:63,start:2069,end:2089,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:q6,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

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
（後略）
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
（後略）
\`\`\`

インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる

</div>

</div>

</div>
`,title:"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

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
（後略）
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
（後略）
\`\`\`

インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる

</div>

</div>

</div>`,frontmatter:{},index:64,start:2090,end:2136,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:Q6,meta:{slide:{raw:`
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
- composables ディレクトリに配置されたコンポジション関数`,frontmatter:{},index:65,start:2137,end:2149,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:cE,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（データ取得）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script>
（中略）
    const posts = ref(null);
    const load = async () => {
      const response = await fetch("/wp-json/wp/v2/posts.json");
      posts.value = await response.json();
    };
    load();
（後略）
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<script>
（中略）
    const { data: posts, pending } = await useFetch(
      \`http://localhost:3000/wp-json/wp/v2/posts.json\`
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
<script>
（中略）
    const posts = ref(null);
    const load = async () => {
      const response = await fetch("/wp-json/wp/v2/posts.json");
      posts.value = await response.json();
    };
    load();
（後略）
\`\`\`

</div>

<div>

<p class="text-xs">Nuxt 3 - pages/index.vue</p>

<div class="h-xs overflow-y-auto">

\`\`\`vue
<script>
（中略）
    const { data: posts, pending } = await useFetch(
      \`http://localhost:3000/wp-json/wp/v2/posts.json\`
    );
（後略）
\`\`\`

- リアクティブな値を別途用意する必要がない
- [Response.json()](https://developer.mozilla.org/ja/docs/Web/API/Response/json)が暗黙的に実行されオブジェクトが得られる
- データ再取得の関数、取得中の状態値などあると便利なものが用意されている https://v3.nuxtjs.org/api/composables/use-fetch

</div>

</div>

</div>`,frontmatter:{},index:66,start:2150,end:2198,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:vE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:67,start:2199,end:2226,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:xE,meta:{slide:{raw:`
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

場合によっては（$fetch ではなく） fetch を使うことも検討すること`,frontmatter:{},index:68,start:2227,end:2240,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:PE,meta:{slide:{raw:`
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

[スタイルガイド](https://v3.ja.vuejs.org/style-guide/)`,frontmatter:{},index:69,start:2241,end:2252,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:zE,meta:{slide:{raw:`
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

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:70,start:2253,end:2275,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:KE,meta:{slide:{raw:`
# 課題

- レベル 1 ～ 3 の 3 つある
- 1 から順番に取り組んでもらう
- 16 時に解説する
`,title:"課題",level:1,content:`# 課題

- レベル 1 ～ 3 の 3 つある
- 1 から順番に取り組んでもらう
- 16 時に解説する`,frontmatter:{},index:71,start:2276,end:2283,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:QE,meta:{slide:{raw:`
# 課題（レベル 1）

問題：https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch を使って http://localhost:3000/data.json から果物のリストを取得してください
2. 果物を順序なしリストで表示してください https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul
`,title:"課題（レベル 1）",level:1,content:`# 課題（レベル 1）

問題：https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch を使って http://localhost:3000/data.json から果物のリストを取得してください
2. 果物を順序なしリストで表示してください https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul`,frontmatter:{},index:72,start:2284,end:2292,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:nF,meta:{slide:{raw:`
# 課題（レベル 2）

問題：https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください
`,title:"課題（レベル 2）",level:1,content:`# 課題（レベル 2）

問題：https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください`,frontmatter:{},index:73,start:2293,end:2300,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:cF,meta:{slide:{raw:`
# 課題（レベル 3）

問題：https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください
`,title:"課題（レベル 3）",level:1,content:`# 課題（レベル 3）

問題：https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください`,frontmatter:{},index:74,start:2301,end:2308,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",component:y9,meta:{layout:"end"}}],qs=pF,iF=[{name:"play",path:"/",component:Om,children:[...qs]},{name:"print",path:"/print",component:c9},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>zl(()=>import("./PresenterPrint-9980ce4f.js"),["assets/PresenterPrint-9980ce4f.js","assets/shared.esm-bundler-f1db99c1.js","assets/NoteViewer-d21d8063.js","assets/index-0da01f59.js"])},{name:"presenter",path:"/presenter/:no",component:()=>zl(()=>import("./Presenter-3c10101b.js"),["assets/Presenter-3c10101b.js","assets/NoteViewer-d21d8063.js","assets/DrawingControls-b081f154.js","assets/index-0da01f59.js","assets/Presenter-214154c4.css"]),beforeEnter:e=>{if(!Pn.remote||Pn.remote===e.query.password)return!0;if(Pn.remote&&e.query.password===void 0){const l=prompt("Enter password");if(Pn.remote===l)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],Bl=y3({history:pf("/vue-3-practices"),routes:iF});function yF(e,l,{mode:o="replace"}={}){return T({get(){const t=Bl.currentRoute.value.query[e];return t==null?l??null:Array.isArray(t)?t.filter(Boolean):t},set(t){Pe(()=>{Bl[g(o)]({query:{...Bl.currentRoute.value.query,[e]:t}})})}})}const Ui=ns(0);Pe(()=>{Bl.afterEach(async()=>{await Pe(),Ui.value+=1})});const We=T(()=>Bl.currentRoute.value),ja=T(()=>We.value.query.print!==void 0),uF=T(()=>We.value.query.print==="clicks"),Ye=T(()=>We.value.query.embedded!==void 0),sl=T(()=>We.value.path.startsWith("/presenter")),qi=T(()=>ja.value&&!uF.value),la=T(()=>We.value.query.password),dF=T(()=>!sl.value&&(!Ts.remote||la.value===Ts.remote)),bc=yF("clicks","0"),Ki=T(()=>qs.length-1),fF=T(()=>We.value.path),Gs=T(()=>parseInt(fF.value.split(/\//g).slice(-1)[0])||1);T(()=>Ha(Gs.value));const he=T(()=>qs.find(e=>e.path===`${Gs.value}`));T(()=>{var e,l,o;return(o=(l=(e=he.value)==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:o.id});T(()=>{var e,l;return((l=(e=he.value)==null?void 0:e.meta)==null?void 0:l.layout)||(Gs.value===1?"cover":"default")});const mt=T(()=>qs.find(e=>e.path===`${Math.min(qs.length,Gs.value+1)}`)),BF=T(()=>{var e,l;return Ui.value,((l=(e=he.value)==null?void 0:e.meta)==null?void 0:l.__clicksElements)||[]}),Wl=T({get(){if(qi.value)return 99999;let e=+(bc.value||0);return isNaN(e)&&(e=0),e},set(e){bc.value=e.toString()}}),Mo=T(()=>{var e,l;return+(((l=(e=he.value)==null?void 0:e.meta)==null?void 0:l.clicks)??BF.value.length)}),hF=T(()=>Gs.value<qs.length-1||Wl.value<Mo.value),mF=T(()=>Gs.value>1||Wl.value>0),AF=T(()=>qs.filter(e=>{var l,o;return(o=(l=e.meta)==null?void 0:l.slide)==null?void 0:o.title}).reduce((e,l)=>(za(e,l),e),[])),vF=T(()=>Wa(AF.value,he.value));T(()=>Ua(vF.value));function Rl(){Mo.value<=Wl.value?No():Wl.value+=1}async function Il(){Wl.value<=0?await Lo():Wl.value-=1}function Ha(e){return sl.value?`/presenter/${e}`:`/${e}`}function No(){const e=Math.min(qs.length,Gs.value+1);return hn(e)}async function Lo(e=!0){const l=Math.max(1,Gs.value-1);await hn(l),e&&Mo.value&&Bl.replace({query:{...We.value.query,clicks:Mo.value}})}function hn(e,l){return Bl.push({path:Ha(e),query:{...We.value.query,clicks:l}})}function DF(e){const l=ns(0),{direction:o,distanceX:t,distanceY:a}=kd(e,{onSwipeStart(r){r.pointerType==="touch"&&(Qn.value||(l.value=jt()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!l.value||Qn.value)return;const c=Math.abs(t.value),p=Math.abs(a.value);c/window.innerWidth>.3||c>100?o.value===Xe.LEFT?Rl():Il():(p/window.innerHeight>.4||p>200)&&(o.value===Xe.DOWN?Lo():No())}})}async function wc(){const{saveAs:e}=await zl(()=>import("./FileSaver.min-17c85779.js").then(l=>l.F),[]);e(Gp(Ts.download)?Ts.download:Ts.exportFilename?`${Ts.exportFilename}.pdf`:"/vue-3-practicesslidev-exported.pdf",`${Ts.title}.pdf`)}async function qF(e){var l,o;if(e==null){const t=(o=(l=he.value)==null?void 0:l.meta)==null?void 0:o.slide;if(!(t!=null&&t.filepath))return!1;e=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function za(e,l,o=1){var a,r,c,p,i;const t=(r=(a=l.meta)==null?void 0:a.slide)==null?void 0:r.level;t&&t>o&&e.length>0?za(e[e.length-1].children,l,o+1):e.push({children:[],level:o,path:l.path,hideInToc:Boolean((c=l.meta)==null?void 0:c.hideInToc),title:(i=(p=l.meta)==null?void 0:p.slide)==null?void 0:i.title})}function Wa(e,l,o=!1,t){return e.map(a=>{const r={...a,active:a.path===(l==null?void 0:l.path),hasActiveParent:o};return r.children.length>0&&(r.children=Wa(r.children,l,r.active||r.hasActiveParent,r)),t&&(r.active||r.activeParent)&&(t.activeParent=!0),r})}function Ua(e,l=1){return e.filter(o=>!o.hideInToc).map(o=>({...o,children:Ua(o.children,l+1)}))}export{$F as $,LF as A,NF as B,$s as C,VF as D,Le as E,ks as F,RF as G,o8 as H,t8 as I,Zo as J,Pe as K,Ap as L,G as M,Hl as N,ya as O,Al as P,_F as Q,qi as R,n5 as S,EF as T,o5 as U,Kp as V,qp as W,Up as X,s5 as Y,wF as Z,P as _,MF as a,UF as a$,SF as a0,kF as a1,bF as a2,QA as a3,XA as a4,wc as a5,Rl as a6,No as a7,qF as a8,Il as a9,mB as aA,CF as aB,gF as aC,Mo as aD,hF as aE,mt as aF,it as aG,Qn as aH,Bt as aI,Sm as aJ,Na as aK,La as aL,xm as aM,wB as aN,Te as aO,IF as aP,nl as aQ,bn as aR,Sl as aS,Ie as aT,Xt as aU,U3 as aV,q3 as aW,K3 as aX,Y3 as aY,He as aZ,Wp as a_,Lo as aa,We as ab,xF as ac,mn as ad,Es as ae,HF as af,s as ag,Ys as ah,no as ai,se as aj,qs as ak,Ki as al,n as am,Ds as an,$a as ao,Hs as ap,zF as aq,he as ar,M as as,oB as at,DF as au,jF as av,WF as aw,C as ax,Oi as ay,ae as az,Gs as b,pe as b0,uo as b1,ih as b2,Jp as b3,Z3 as b4,Ts as c,Wl as d,sl as e,Vs as f,Ha as g,$ as h,PF as i,S as j,Dp as k,J as l,F as m,v as n,OF as o,TF as p,ee as q,Bl as r,lt as s,T as t,FF as u,Ar as v,js as w,mp as x,g as y,ns as z};
