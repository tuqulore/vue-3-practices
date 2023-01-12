function so(e,l){const n=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)n[t[a]]=!0;return l?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function se(e){if(is(e)){const l={};for(let n=0;n<e.length;n++){const t=e[n],a=zs(t)?Ji(t):se(t);if(a)for(const r in a)l[r]=a[r]}return l}else{if(zs(e))return e;if(Rs(e))return e}}const qi=/;(?![^(]*\))/g,Ki=/:(.+)/;function Ji(e){const l={};return e.split(qi).forEach(n=>{if(n){const t=n.split(Ki);t.length>1&&(l[t[0].trim()]=t[1].trim())}}),l}function Hs(e){let l="";if(zs(e))l=e;else if(is(e))for(let n=0;n<e.length;n++){const t=Hs(e[n]);t&&(l+=t+" ")}else if(Rs(e))for(const n in e)e[n]&&(l+=n+" ");return l.trim()}function q(e){if(!e)return null;let{class:l,style:n}=e;return l&&!zs(l)&&(e.class=Hs(l)),n&&(e.style=se(n)),e}const Ys=e=>zs(e)?e:e==null?"":is(e)||Rs(e)&&(e.toString===Pc||!ds(e.toString))?JSON.stringify(e,wc,2):String(e),wc=(e,l)=>l&&l.__v_isRef?wc(e,l.value):Sl(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((n,[t,a])=>(n[`${t} =>`]=a,n),{})}:Sc(l)?{[`Set(${l.size})`]:[...l.values()]}:Rs(l)&&!is(l)&&!Vc(l)?String(l):l,ks=Object.freeze({}),an=Object.freeze([]),ue=()=>{},$c=()=>!1,Yi=/^on[^a-z]/,To=e=>Yi.test(e),mt=e=>e.startsWith("onUpdate:"),Ks=Object.assign,ea=(e,l)=>{const n=e.indexOf(l);n>-1&&e.splice(n,1)},Zi=Object.prototype.hasOwnProperty,As=(e,l)=>Zi.call(e,l),is=Array.isArray,Sl=e=>Mo(e)==="[object Map]",Sc=e=>Mo(e)==="[object Set]",ds=e=>typeof e=="function",zs=e=>typeof e=="string",la=e=>typeof e=="symbol",Rs=e=>e!==null&&typeof e=="object",na=e=>Rs(e)&&ds(e.then)&&ds(e.catch),Pc=Object.prototype.toString,Mo=e=>Pc.call(e),oa=e=>Mo(e).slice(8,-1),Vc=e=>Mo(e)==="[object Object]",ta=e=>zs(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,uo=so(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gi=so("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),No=e=>{const l=Object.create(null);return n=>l[n]||(l[n]=e(n))},Qi=/-(\w)/g,Re=No(e=>e.replace(Qi,(l,n)=>n?n.toUpperCase():"")),Xi=/\B([A-Z])/g,un=No(e=>e.replace(Xi,"-$1").toLowerCase()),yn=No(e=>e.charAt(0).toUpperCase()+e.slice(1)),_l=No(e=>e?`on${yn(e)}`:""),jn=(e,l)=>!Object.is(e,l),El=(e,l)=>{for(let n=0;n<e.length;n++)e[n](l)},_o=(e,l,n)=>{Object.defineProperty(e,l,{configurable:!0,enumerable:!1,value:n})},s8=e=>{const l=parseFloat(e);return isNaN(l)?e:l};let Ja;const Oc=()=>Ja||(Ja=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function go(e,...l){console.warn(`[Vue warn] ${e}`,...l)}let he;class Lc{constructor(l=!1){this.active=!0,this.effects=[],this.cleanups=[],!l&&he&&(this.parent=he,this.index=(he.scopes||(he.scopes=[])).push(this)-1)}run(l){if(this.active){const n=he;try{return he=this,l()}finally{he=n}}else go("cannot run an inactive effect scope.")}on(){he=this}off(){he=this.parent}stop(l){if(this.active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(this.parent&&!l){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function i6(e){return new Lc(e)}function e8(e,l=he){l&&l.active&&l.effects.push(e)}function l8(){return he}function n8(e){he?he.cleanups.push(e):go("onScopeDispose() is called when there is no active effect scope to be associated with.")}const aa=e=>{const l=new Set(e);return l.w=0,l.n=0,l},Tc=e=>(e.w&ml)>0,Mc=e=>(e.n&ml)>0,o8=({deps:e})=>{if(e.length)for(let l=0;l<e.length;l++)e[l].w|=ml},t8=e=>{const{deps:l}=e;if(l.length){let n=0;for(let t=0;t<l.length;t++){const a=l[t];Tc(a)&&!Mc(a)?a.delete(e):l[n++]=a,a.w&=~ml,a.n&=~ml}l.length=n}},vt=new WeakMap;let wn=0,ml=1;const Bt=30;let ae;const Pl=Symbol("iterate"),At=Symbol("Map key iterate");class ra{constructor(l,n=null,t){this.fn=l,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,e8(this,t)}run(){if(!this.active)return this.fn();let l=ae,n=ul;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=ae,ae=this,ul=!0,ml=1<<++wn,wn<=Bt?o8(this):Ya(this),this.fn()}finally{wn<=Bt&&t8(this),ml=1<<--wn,ae=this.parent,ul=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ae===this?this.deferStop=!0:this.active&&(Ya(this),this.onStop&&this.onStop(),this.active=!1)}}function Ya(e){const{deps:l}=e;if(l.length){for(let n=0;n<l.length;n++)l[n].delete(e);l.length=0}}let ul=!0;const Nc=[];function Wl(){Nc.push(ul),ul=!1}function Ul(){const e=Nc.pop();ul=e===void 0?!0:e}function _e(e,l,n){if(ul&&ae){let t=vt.get(e);t||vt.set(e,t=new Map);let a=t.get(n);a||t.set(n,a=aa()),Rc(a,{effect:ae,target:e,type:l,key:n})}}function Rc(e,l){let n=!1;wn<=Bt?Mc(e)||(e.n|=ml,n=!Tc(e)):n=!e.has(ae),n&&(e.add(ae),ae.deps.push(e),ae.onTrack&&ae.onTrack(Object.assign({effect:ae},l)))}function sl(e,l,n,t,a,r){const c=vt.get(e);if(!c)return;let p=[];if(l==="clear")p=[...c.values()];else if(n==="length"&&is(e))c.forEach((u,y)=>{(y==="length"||y>=t)&&p.push(u)});else switch(n!==void 0&&p.push(c.get(n)),l){case"add":is(e)?ta(n)&&p.push(c.get("length")):(p.push(c.get(Pl)),Sl(e)&&p.push(c.get(At)));break;case"delete":is(e)||(p.push(c.get(Pl)),Sl(e)&&p.push(c.get(At)));break;case"set":Sl(e)&&p.push(c.get(Pl));break}const i={target:e,type:l,key:n,newValue:t,oldValue:a,oldTarget:r};if(p.length===1)p[0]&&_t(p[0],i);else{const u=[];for(const y of p)y&&u.push(...y);_t(aa(u),i)}}function _t(e,l){const n=is(e)?e:[...e];for(const t of n)t.computed&&Za(t,l);for(const t of n)t.computed||Za(t,l)}function Za(e,l){(e!==ae||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ks({effect:e},l)),e.scheduler?e.scheduler():e.run())}const a8=so("__proto__,__v_isRef,__isVue"),Ic=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(la)),r8=Ro(),c8=Ro(!1,!0),p8=Ro(!0),i8=Ro(!0,!0),Ga=u8();function u8(){const e={};return["includes","indexOf","lastIndexOf"].forEach(l=>{e[l]=function(...n){const t=ms(this);for(let r=0,c=this.length;r<c;r++)_e(t,"get",r+"");const a=t[l](...n);return a===-1||a===!1?t[l](...n.map(ms)):a}}),["push","pop","shift","unshift","splice"].forEach(l=>{e[l]=function(...n){Wl();const t=ms(this)[l].apply(this,n);return Ul(),t}}),e}function Ro(e=!1,l=!1){return function(t,a,r){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return l;if(a==="__v_raw"&&r===(e?l?Jc:Kc:l?qc:Uc).get(t))return t;const c=is(t);if(!e&&c&&As(Ga,a))return Reflect.get(Ga,a,r);const p=Reflect.get(t,a,r);return(la(a)?Ic.has(a):a8(a))||(e||_e(t,"get",a),l)?p:Cs(p)?c&&ta(a)?p:p.value:Rs(p)?e?bl(p):ee(p):p}}const y8=jc(),d8=jc(!0);function jc(e=!1){return function(n,t,a,r){let c=n[t];if(Rl(c)&&Cs(c)&&!Cs(a))return!1;if(!e&&!Rl(a)&&(gt(a)||(a=ms(a),c=ms(c)),!is(n)&&Cs(c)&&!Cs(a)))return c.value=a,!0;const p=is(n)&&ta(t)?Number(t)<n.length:As(n,t),i=Reflect.set(n,t,a,r);return n===ms(r)&&(p?jn(a,c)&&sl(n,"set",t,a,c):sl(n,"add",t,a)),i}}function f8(e,l){const n=As(e,l),t=e[l],a=Reflect.deleteProperty(e,l);return a&&n&&sl(e,"delete",l,void 0,t),a}function h8(e,l){const n=Reflect.has(e,l);return(!la(l)||!Ic.has(l))&&_e(e,"has",l),n}function m8(e){return _e(e,"iterate",is(e)?"length":Pl),Reflect.ownKeys(e)}const Hc={get:r8,set:y8,deleteProperty:f8,has:h8,ownKeys:m8},zc={get:p8,set(e,l){return go(`Set operation on key "${String(l)}" failed: target is readonly.`,e),!0},deleteProperty(e,l){return go(`Delete operation on key "${String(l)}" failed: target is readonly.`,e),!0}},v8=Ks({},Hc,{get:c8,set:d8}),B8=Ks({},zc,{get:i8}),ca=e=>e,Io=e=>Reflect.getPrototypeOf(e);function no(e,l,n=!1,t=!1){e=e.__v_raw;const a=ms(e),r=ms(l);n||(l!==r&&_e(a,"get",l),_e(a,"get",r));const{has:c}=Io(a),p=t?ca:n?ia:Hn;if(c.call(a,l))return p(e.get(l));if(c.call(a,r))return p(e.get(r));e!==a&&e.get(l)}function oo(e,l=!1){const n=this.__v_raw,t=ms(n),a=ms(e);return l||(e!==a&&_e(t,"has",e),_e(t,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function to(e,l=!1){return e=e.__v_raw,!l&&_e(ms(e),"iterate",Pl),Reflect.get(e,"size",e)}function Qa(e){e=ms(e);const l=ms(this);return Io(l).has.call(l,e)||(l.add(e),sl(l,"add",e,e)),this}function Xa(e,l){l=ms(l);const n=ms(this),{has:t,get:a}=Io(n);let r=t.call(n,e);r?Wc(n,t,e):(e=ms(e),r=t.call(n,e));const c=a.call(n,e);return n.set(e,l),r?jn(l,c)&&sl(n,"set",e,l,c):sl(n,"add",e,l),this}function sr(e){const l=ms(this),{has:n,get:t}=Io(l);let a=n.call(l,e);a?Wc(l,n,e):(e=ms(e),a=n.call(l,e));const r=t?t.call(l,e):void 0,c=l.delete(e);return a&&sl(l,"delete",e,void 0,r),c}function er(){const e=ms(this),l=e.size!==0,n=Sl(e)?new Map(e):new Set(e),t=e.clear();return l&&sl(e,"clear",void 0,void 0,n),t}function ao(e,l){return function(t,a){const r=this,c=r.__v_raw,p=ms(c),i=l?ca:e?ia:Hn;return!e&&_e(p,"iterate",Pl),c.forEach((u,y)=>t.call(a,i(u),i(y),r))}}function ro(e,l,n){return function(...t){const a=this.__v_raw,r=ms(a),c=Sl(r),p=e==="entries"||e===Symbol.iterator&&c,i=e==="keys"&&c,u=a[e](...t),y=n?ca:l?ia:Hn;return!l&&_e(r,"iterate",i?At:Pl),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:p?[y(d[0]),y(d[1])]:y(d),done:f}},[Symbol.iterator](){return this}}}}function tl(e){return function(...l){{const n=l[0]?`on key "${l[0]}" `:"";console.warn(`${yn(e)} operation ${n}failed: target is readonly.`,ms(this))}return e==="delete"?!1:this}}function A8(){const e={get(r){return no(this,r)},get size(){return to(this)},has:oo,add:Qa,set:Xa,delete:sr,clear:er,forEach:ao(!1,!1)},l={get(r){return no(this,r,!1,!0)},get size(){return to(this)},has:oo,add:Qa,set:Xa,delete:sr,clear:er,forEach:ao(!1,!0)},n={get(r){return no(this,r,!0)},get size(){return to(this,!0)},has(r){return oo.call(this,r,!0)},add:tl("add"),set:tl("set"),delete:tl("delete"),clear:tl("clear"),forEach:ao(!0,!1)},t={get(r){return no(this,r,!0,!0)},get size(){return to(this,!0)},has(r){return oo.call(this,r,!0)},add:tl("add"),set:tl("set"),delete:tl("delete"),clear:tl("clear"),forEach:ao(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ro(r,!1,!1),n[r]=ro(r,!0,!1),l[r]=ro(r,!1,!0),t[r]=ro(r,!0,!0)}),[e,n,l,t]}const[_8,g8,D8,C8]=A8();function jo(e,l){const n=l?e?C8:D8:e?g8:_8;return(t,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?t:Reflect.get(As(n,a)&&a in t?n:t,a,r)}const E8={get:jo(!1,!1)},F8={get:jo(!1,!0)},k8={get:jo(!0,!1)},x8={get:jo(!0,!0)};function Wc(e,l,n){const t=ms(n);if(t!==n&&l.call(e,t)){const a=oa(e);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Uc=new WeakMap,qc=new WeakMap,Kc=new WeakMap,Jc=new WeakMap;function b8(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w8(e){return e.__v_skip||!Object.isExtensible(e)?0:b8(oa(e))}function ee(e){return Rl(e)?e:Ho(e,!1,Hc,E8,Uc)}function $8(e){return Ho(e,!1,v8,F8,qc)}function bl(e){return Ho(e,!0,zc,k8,Kc)}function on(e){return Ho(e,!0,B8,x8,Jc)}function Ho(e,l,n,t,a){if(!Rs(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(l&&e.__v_isReactive))return e;const r=a.get(e);if(r)return r;const c=w8(e);if(c===0)return e;const p=new Proxy(e,c===2?t:n);return a.set(e,p),p}function Vl(e){return Rl(e)?Vl(e.__v_raw):!!(e&&e.__v_isReactive)}function Rl(e){return!!(e&&e.__v_isReadonly)}function gt(e){return!!(e&&e.__v_isShallow)}function Do(e){return Vl(e)||Rl(e)}function ms(e){const l=e&&e.__v_raw;return l?ms(l):e}function pa(e){return _o(e,"__v_skip",!0),e}const Hn=e=>Rs(e)?ee(e):e,ia=e=>Rs(e)?bl(e):e;function ua(e){ul&&ae&&(e=ms(e),Rc(e.dep||(e.dep=aa()),{target:e,type:"get",key:"value"}))}function ya(e,l){e=ms(e),e.dep&&_t(e.dep,{target:e,type:"set",key:"value",newValue:l})}function Cs(e){return!!(e&&e.__v_isRef===!0)}function ns(e){return Yc(e,!1)}function Ie(e){return Yc(e,!0)}function Yc(e,l){return Cs(e)?e:new S8(e,l)}class S8{constructor(l,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?l:ms(l),this._value=n?l:Hn(l)}get value(){return ua(this),this._value}set value(l){l=this.__v_isShallow?l:ms(l),jn(l,this._rawValue)&&(this._rawValue=l,this._value=this.__v_isShallow?l:Hn(l),ya(this,l))}}function C(e){return Cs(e)?e.value:e}const P8={get:(e,l,n)=>C(Reflect.get(e,l,n)),set:(e,l,n,t)=>{const a=e[l];return Cs(a)&&!Cs(n)?(a.value=n,!0):Reflect.set(e,l,n,t)}};function Zc(e){return Vl(e)?e:new Proxy(e,P8)}class V8{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:t}=l(()=>ua(this),()=>ya(this));this._get=n,this._set=t}get value(){return this._get()}set value(l){this._set(l)}}function Gc(e){return new V8(e)}function O8(e){Do(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const l=is(e)?new Array(e.length):{};for(const n in e)l[n]=T8(e,n);return l}class L8{constructor(l,n,t){this._object=l,this._key=n,this._defaultValue=t,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function T8(e,l,n){const t=e[l];return Cs(t)?t:new L8(e,l,n)}class M8{constructor(l,n,t,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ra(l,()=>{this._dirty||(this._dirty=!0,ya(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=t}get value(){const l=ms(this);return ua(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}function N8(e,l,n=!1){let t,a;const r=ds(e);r?(t=e,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(t=e.get,a=e.set);const c=new M8(t,a,r||!a,n);return l&&!n&&(c.effect.onTrack=l.onTrack,c.effect.onTrigger=l.onTrigger),c}const Ol=[];function yo(e){Ol.push(e)}function fo(){Ol.pop()}function N(e,...l){Wl();const n=Ol.length?Ol[Ol.length-1].component:null,t=n&&n.appContext.config.warnHandler,a=R8();if(t)Xe(t,n,11,[e+l.join(""),n&&n.proxy,a.map(({vnode:r})=>`at <${Qo(n,r.type)}>`).join(`
`),a]);else{const r=[`[Vue warn]: ${e}`,...l];a.length&&r.push(`
`,...I8(a)),console.warn(...r)}Ul()}function R8(){let e=Ol[Ol.length-1];if(!e)return[];const l=[];for(;e;){const n=l[0];n&&n.vnode===e?n.recurseCount++:l.push({vnode:e,recurseCount:0});const t=e.component&&e.component.parent;e=t&&t.vnode}return l}function I8(e){const l=[];return e.forEach((n,t)=>{l.push(...t===0?[]:[`
`],...j8(n))}),l}function j8({vnode:e,recurseCount:l}){const n=l>0?`... (${l} recursive calls)`:"",t=e.component?e.component.parent==null:!1,a=` at <${Qo(e.component,e.type,t)}`,r=">"+n;return e.props?[a,...H8(e.props),r]:[a+r]}function H8(e){const l=[],n=Object.keys(e);return n.slice(0,3).forEach(t=>{l.push(...Qc(t,e[t]))}),n.length>3&&l.push(" ..."),l}function Qc(e,l,n){return zs(l)?(l=JSON.stringify(l),n?l:[`${e}=${l}`]):typeof l=="number"||typeof l=="boolean"||l==null?n?l:[`${e}=${l}`]:Cs(l)?(l=Qc(e,ms(l.value),!0),n?l:[`${e}=Ref<`,l,">"]):ds(l)?[`${e}=fn${l.name?`<${l.name}>`:""}`]:(l=ms(l),n?l:[`${e}=`,l])}const da={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Xe(e,l,n,t){let a;try{a=t?e(...t):e()}catch(r){zo(r,l,n)}return a}function Se(e,l,n,t){if(ds(e)){const r=Xe(e,l,n,t);return r&&na(r)&&r.catch(c=>{zo(c,l,n)}),r}const a=[];for(let r=0;r<e.length;r++)a.push(Se(e[r],l,n,t));return a}function zo(e,l,n,t=!0){const a=l?l.vnode:null;if(l){let r=l.parent;const c=l.proxy,p=da[n];for(;r;){const u=r.ec;if(u){for(let y=0;y<u.length;y++)if(u[y](e,c,p)===!1)return}r=r.parent}const i=l.appContext.config.errorHandler;if(i){Xe(i,null,10,[e,c,p]);return}}z8(e,n,a,t)}function z8(e,l,n,t=!0){{const a=da[l];if(n&&yo(n),N(`Unhandled error${a?` during execution of ${a}`:""}`),n&&fo(),t)throw e;console.error(e)}}let Co=!1,Dt=!1;const Be=[];let Ze=0;const Vn=[];let sn=null,gl=0;const On=[];let We=null,Dl=0;const Xc=Promise.resolve();let fa=null,Ct=null;const W8=100;function Pe(e){const l=fa||Xc;return e?l.then(this?e.bind(this):e):l}function U8(e){let l=Ze+1,n=Be.length;for(;l<n;){const t=l+n>>>1;zn(Be[t])<e?l=t+1:n=t}return l}function ha(e){(!Be.length||!Be.includes(e,Co&&e.allowRecurse?Ze+1:Ze))&&e!==Ct&&(e.id==null?Be.push(e):Be.splice(U8(e.id),0,e),sp())}function sp(){!Co&&!Dt&&(Dt=!0,fa=Xc.then(op))}function q8(e){const l=Be.indexOf(e);l>Ze&&Be.splice(l,1)}function ep(e,l,n,t){is(e)?n.push(...e):(!l||!l.includes(e,e.allowRecurse?t+1:t))&&n.push(e),sp()}function K8(e){ep(e,sn,Vn,gl)}function lp(e){ep(e,We,On,Dl)}function Wo(e,l=null){if(Vn.length){for(Ct=l,sn=[...new Set(Vn)],Vn.length=0,e=e||new Map,gl=0;gl<sn.length;gl++)ma(e,sn[gl])||sn[gl]();sn=null,gl=0,Ct=null,Wo(e,l)}}function np(e){if(Wo(),On.length){const l=[...new Set(On)];if(On.length=0,We){We.push(...l);return}for(We=l,e=e||new Map,We.sort((n,t)=>zn(n)-zn(t)),Dl=0;Dl<We.length;Dl++)ma(e,We[Dl])||We[Dl]();We=null,Dl=0}}const zn=e=>e.id==null?1/0:e.id;function op(e){Dt=!1,Co=!0,e=e||new Map,Wo(e),Be.sort((n,t)=>zn(n)-zn(t));const l=n=>ma(e,n);try{for(Ze=0;Ze<Be.length;Ze++){const n=Be[Ze];if(n&&n.active!==!1){if(l(n))continue;Xe(n,null,14)}}}finally{Ze=0,Be.length=0,np(e),Co=!1,fa=null,(Be.length||Vn.length||On.length)&&op(e)}}function ma(e,l){if(!e.has(l))e.set(l,1);else{const n=e.get(l);if(n>W8){const t=l.ownerInstance,a=t&&qn(t.type);return N(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(l,n+1)}}let yl=!1;const en=new Set;Oc().__VUE_HMR_RUNTIME__={createRecord:lt(tp),rerender:lt(Z8),reload:lt(G8)};const Il=new Map;function J8(e){const l=e.type.__hmrId;let n=Il.get(l);n||(tp(l,e.type),n=Il.get(l)),n.instances.add(e)}function Y8(e){Il.get(e.type.__hmrId).instances.delete(e)}function tp(e,l){return Il.has(e)?!1:(Il.set(e,{initialDef:Ln(l),instances:new Set}),!0)}function Ln(e){return Mp(e)?e.__vccOpts:e}function Z8(e,l){const n=Il.get(e);n&&(n.initialDef.render=l,[...n.instances].forEach(t=>{l&&(t.render=l,Ln(t.type).render=l),t.renderCache=[],yl=!0,t.update(),yl=!1}))}function G8(e,l){const n=Il.get(e);if(!n)return;l=Ln(l),lr(n.initialDef,l);const t=[...n.instances];for(const a of t){const r=Ln(a.type);en.has(r)||(r!==n.initialDef&&lr(r,l),en.add(r)),a.appContext.optionsCache.delete(a.type),a.ceReload?(en.add(r),a.ceReload(l.styles),en.delete(r)):a.parent?(ha(a.parent.update),a.parent.type.__asyncLoader&&a.parent.ceReload&&a.parent.ceReload(l.styles)):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}lp(()=>{for(const a of t)en.delete(Ln(a.type))})}function lr(e,l){Ks(e,l);for(const n in e)n!=="__file"&&!(n in l)&&delete e[n]}function lt(e){return(l,n)=>{try{return e(l,n)}catch(t){console.error(t),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Fl,$n=[],Et=!1;function eo(e,...l){Fl?Fl.emit(e,...l):Et||$n.push({event:e,args:l})}function ap(e,l){var n,t;Fl=e,Fl?(Fl.enabled=!0,$n.forEach(({event:a,args:r})=>Fl.emit(a,...r)),$n=[]):typeof window<"u"&&window.HTMLElement&&!(!((t=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||t===void 0)&&t.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{ap(r,l)}),setTimeout(()=>{Fl||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Et=!0,$n=[])},3e3)):(Et=!0,$n=[])}function Q8(e,l){eo("app:init",e,l,{Fragment:xs,Text:Yo,Comment:ye,Static:ho})}function X8(e){eo("app:unmount",e)}const Ft=va("component:added"),rp=va("component:updated"),su=va("component:removed");function va(e){return l=>{eo(e,l.appContext.app,l.uid,l.parent?l.parent.uid:void 0,l)}}const eu=cp("perf:start"),lu=cp("perf:end");function cp(e){return(l,n,t)=>{eo(e,l.appContext.app,l.uid,l,n,t)}}function nu(e,l,n){eo("component:emit",e.appContext.app,e,l,n)}function ou(e,l,...n){if(e.isUnmounted)return;const t=e.vnode.props||ks;{const{emitsOptions:y,propsOptions:[d]}=e;if(y)if(!(l in y))(!d||!(_l(l)in d))&&N(`Component emitted event "${l}" but it is neither declared in the emits option nor as an "${_l(l)}" prop.`);else{const f=y[l];ds(f)&&(f(...n)||N(`Invalid event arguments: event validation failed for event "${l}".`))}}let a=n;const r=l.startsWith("update:"),c=r&&l.slice(7);if(c&&c in t){const y=`${c==="modelValue"?"model":c}Modifiers`,{number:d,trim:f}=t[y]||ks;f&&(a=n.map(m=>m.trim())),d&&(a=n.map(s8))}nu(e,l,a);{const y=l.toLowerCase();y!==l&&t[_l(y)]&&N(`Event "${y}" is emitted in component ${Qo(e,e.type)} but the handler is registered for "${l}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${un(l)}" instead of "${l}".`)}let p,i=t[p=_l(l)]||t[p=_l(Re(l))];!i&&r&&(i=t[p=_l(un(l))]),i&&Se(i,e,6,a);const u=t[p+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,Se(u,e,6,a)}}function pp(e,l,n=!1){const t=l.emitsCache,a=t.get(e);if(a!==void 0)return a;const r=e.emits;let c={},p=!1;if(!ds(e)){const i=u=>{const y=pp(u,l,!0);y&&(p=!0,Ks(c,y))};!n&&l.mixins.length&&l.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!p?(t.set(e,null),null):(is(r)?r.forEach(i=>c[i]=null):Ks(c,r),t.set(e,c),c)}function Uo(e,l){return!e||!To(l)?!1:(l=l.slice(2).replace(/Once$/,""),As(e,l[0].toLowerCase()+l.slice(1))||As(e,un(l))||As(e,l))}let Zs=null,qo=null;function Eo(e){const l=Zs;return Zs=e,qo=e&&e.type.__scopeId||null,l}function u6(e){qo=e}function y6(){qo=null}function D(e,l=Zs,n){if(!l||e._n)return e;const t=(...a)=>{t._d&&hr(-1);const r=Eo(l),c=e(...a);return Eo(r),t._d&&hr(1),rp(l),c};return t._n=!0,t._c=!0,t._d=!0,t}let kt=!1;function Fo(){kt=!0}function nt(e){const{type:l,vnode:n,proxy:t,withProxy:a,props:r,propsOptions:[c],slots:p,attrs:i,emit:u,render:y,renderCache:d,data:f,setupState:m,ctx:v,inheritAttrs:g}=e;let _,w;const E=Eo(e);kt=!1;try{if(n.shapeFlag&4){const ss=a||t;_=we(y.call(ss,ss,d,r,m,f,v)),w=i}else{const ss=l;i===r&&Fo(),_=we(ss.length>1?ss(r,{get attrs(){return Fo(),i},slots:p,emit:u}):ss(r,null)),w=l.props?i:au(i)}}catch(ss){Mn.length=0,zo(ss,e,1),_=F(ye)}let $=_,H;if(_.patchFlag>0&&_.patchFlag&2048&&([$,H]=tu(_)),w&&g!==!1){const ss=Object.keys(w),{shapeFlag:K}=$;if(ss.length){if(K&7)c&&ss.some(mt)&&(w=ru(w,c)),$=ll($,w);else if(!kt&&$.type!==ye){const z=Object.keys(i),ts=[],hs=[];for(let fs=0,Ds=z.length;fs<Ds;fs++){const Ns=z[fs];To(Ns)?mt(Ns)||ts.push(Ns[2].toLowerCase()+Ns.slice(3)):hs.push(Ns)}hs.length&&N(`Extraneous non-props attributes (${hs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),ts.length&&N(`Extraneous non-emits event listeners (${ts.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(nr($)||N("Runtime directive used on component with non-element root node. The directives will not function as intended."),$=ll($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&(nr($)||N("Component inside <Transition> renders non-element root node that cannot be animated."),$.transition=n.transition),H?H($):_=$,Eo(E),_}const tu=e=>{const l=e.children,n=e.dynamicChildren,t=ip(l);if(!t)return[e,void 0];const a=l.indexOf(t),r=n?n.indexOf(t):-1,c=p=>{l[a]=p,n&&(r>-1?n[r]=p:p.patchFlag>0&&(e.dynamicChildren=[...n,p]))};return[we(t),c]};function ip(e){let l;for(let n=0;n<e.length;n++){const t=e[n];if(jl(t)){if(t.type!==ye||t.children==="v-if"){if(l)return;l=t}}else return}return l}const au=e=>{let l;for(const n in e)(n==="class"||n==="style"||To(n))&&((l||(l={}))[n]=e[n]);return l},ru=(e,l)=>{const n={};for(const t in e)(!mt(t)||!(t.slice(9)in l))&&(n[t]=e[t]);return n},nr=e=>e.shapeFlag&7||e.type===ye;function cu(e,l,n){const{props:t,children:a,component:r}=e,{props:c,children:p,patchFlag:i}=l,u=r.emitsOptions;if((a||p)&&yl||l.dirs||l.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return t?or(t,c,u):!!c;if(i&8){const y=l.dynamicProps;for(let d=0;d<y.length;d++){const f=y[d];if(c[f]!==t[f]&&!Uo(u,f))return!0}}}else return(a||p)&&(!p||!p.$stable)?!0:t===c?!1:t?c?or(t,c,u):!0:!!c;return!1}function or(e,l,n){const t=Object.keys(l);if(t.length!==Object.keys(e).length)return!0;for(let a=0;a<t.length;a++){const r=t[a];if(l[r]!==e[r]&&!Uo(n,r))return!0}return!1}function pu({vnode:e,parent:l},n){for(;l&&l.subTree===e;)(e=l.vnode).el=n,l=l.parent}const up=e=>e.__isSuspense;function iu(e,l){l&&l.pendingBranch?is(e)?l.effects.push(...e):l.effects.push(e):lp(e)}function ve(e,l){if(!Us)N("provide() can only be used inside setup().");else{let n=Us.provides;const t=Us.parent&&Us.parent.provides;t===n&&(n=Us.provides=Object.create(t)),n[e]=l}}function b(e,l,n=!1){const t=Us||Zs;if(t){const a=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&ds(l)?l.call(t.proxy):l;N(`injection "${String(e)}" not found.`)}else N("inject() can only be used inside setup() or functional components.")}function vn(e,l){return Ba(e,null,l)}const tr={};function js(e,l,n){return ds(l)||N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ba(e,l,n)}function Ba(e,l,{immediate:n,deep:t,flush:a,onTrack:r,onTrigger:c}=ks){l||(n!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),t!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const p=E=>{N("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},i=Us;let u,y=!1,d=!1;if(Cs(e)?(u=()=>e.value,y=gt(e)):Vl(e)?(u=()=>e,t=!0):is(e)?(d=!0,y=e.some(E=>Vl(E)||gt(E)),u=()=>e.map(E=>{if(Cs(E))return E.value;if(Vl(E))return wl(E);if(ds(E))return Xe(E,i,2);p(E)})):ds(e)?l?u=()=>Xe(e,i,2):u=()=>{if(!(i&&i.isUnmounted))return f&&f(),Se(e,i,3,[m])}:(u=ue,p(e)),l&&t){const E=u;u=()=>wl(E())}let f,m=E=>{f=w.onStop=()=>{Xe(E,i,4)}};if(Un)return m=ue,l?n&&Se(l,i,3,[u(),d?[]:void 0,m]):u(),ue;let v=d?[]:tr;const g=()=>{if(w.active)if(l){const E=w.run();(t||y||(d?E.some(($,H)=>jn($,v[H])):jn(E,v)))&&(f&&f(),Se(l,i,3,[E,v===tr?void 0:v,m]),v=E)}else w.run()};g.allowRecurse=!!l;let _;a==="sync"?_=g:a==="post"?_=()=>Xs(g,i&&i.suspense):_=()=>K8(g);const w=new ra(u,_);return w.onTrack=r,w.onTrigger=c,l?n?g():v=w.run():a==="post"?Xs(w.run.bind(w),i&&i.suspense):w.run(),()=>{w.stop(),i&&i.scope&&ea(i.scope.effects,w)}}function uu(e,l,n){const t=this.proxy,a=zs(e)?e.includes(".")?yp(t,e):()=>t[e]:e.bind(t,t);let r;ds(l)?r=l:(r=l.handler,n=l);const c=Us;fn(this);const p=Ba(a,r.bind(t),n);return c?fn(c):Ll(),p}function yp(e,l){const n=l.split(".");return()=>{let t=e;for(let a=0;a<n.length&&t;a++)t=t[n[a]];return t}}function wl(e,l){if(!Rs(e)||e.__v_skip||(l=l||new Set,l.has(e)))return e;if(l.add(e),Cs(e))wl(e.value,l);else if(is(e))for(let n=0;n<e.length;n++)wl(e[n],l);else if(Sc(e)||Sl(e))e.forEach(n=>{wl(n,l)});else if(Vc(e))for(const n in e)wl(e[n],l);return e}function dp(e,l){e.shapeFlag&6&&e.component?dp(e.component.subTree,l):e.shapeFlag&128?(e.ssContent.transition=l.clone(e.ssContent),e.ssFallback.transition=l.clone(e.ssFallback)):e.transition=l}function Is(e){return ds(e)?{setup:e,name:e.name}:e}const rn=e=>!!e.type.__asyncLoader,Aa=e=>e.type.__isKeepAlive,yu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:l}){const n=ql(),t=n.ctx;if(!t.renderer)return()=>{const E=l.default&&l.default();return E&&E.length===1?E[0]:E};const a=new Map,r=new Set;let c=null;n.__v_cache=a;const p=n.suspense,{renderer:{p:i,m:u,um:y,o:{createElement:d}}}=t,f=d("div");t.activate=(E,$,H,ss,K)=>{const z=E.component;u(E,$,H,0,p),i(z.vnode,E,$,H,z,p,ss,E.slotScopeIds,K),Xs(()=>{z.isDeactivated=!1,z.a&&El(z.a);const ts=E.props&&E.props.onVnodeMounted;ts&&Ce(ts,z.parent,E)},p),Ft(z)},t.deactivate=E=>{const $=E.component;u(E,f,null,1,p),Xs(()=>{$.da&&El($.da);const H=E.props&&E.props.onVnodeUnmounted;H&&Ce(H,$.parent,E),$.isDeactivated=!0},p),Ft($)};function m(E){ot(E),y(E,n,p,!0)}function v(E){a.forEach(($,H)=>{const ss=qn($.type);ss&&(!E||!E(ss))&&g(H)})}function g(E){const $=a.get(E);!c||$.type!==c.type?m($):c&&ot(c),a.delete(E),r.delete(E)}js(()=>[e.include,e.exclude],([E,$])=>{E&&v(H=>Sn(E,H)),$&&v(H=>!Sn($,H))},{flush:"post",deep:!0});let _=null;const w=()=>{_!=null&&a.set(_,tt(n.subTree))};return Jo(w),mp(w),vp(()=>{a.forEach(E=>{const{subTree:$,suspense:H}=n,ss=tt($);if(E.type===ss.type){ot(ss);const K=ss.component.da;K&&Xs(K,H);return}m(E)})}),()=>{if(_=null,!l.default)return null;const E=l.default(),$=E[0];if(E.length>1)return N("KeepAlive should contain exactly one component child."),c=null,E;if(!jl($)||!($.shapeFlag&4)&&!($.shapeFlag&128))return c=null,$;let H=tt($);const ss=H.type,K=qn(rn(H)?H.type.__asyncResolved||{}:ss),{include:z,exclude:ts,max:hs}=e;if(z&&(!K||!Sn(z,K))||ts&&K&&Sn(ts,K))return c=H,$;const fs=H.key==null?ss:H.key,Ds=a.get(fs);return H.el&&(H=ll(H),$.shapeFlag&128&&($.ssContent=H)),_=fs,Ds?(H.el=Ds.el,H.component=Ds.component,H.transition&&dp(H,H.transition),H.shapeFlag|=512,r.delete(fs),r.add(fs)):(r.add(fs),hs&&r.size>parseInt(hs,10)&&g(r.values().next().value)),H.shapeFlag|=256,c=H,up($.type)?$:H}}},fp=yu;function Sn(e,l){return is(e)?e.some(n=>Sn(n,l)):zs(e)?e.split(",").includes(l):e.test?e.test(l):!1}function du(e,l){hp(e,"a",l)}function fu(e,l){hp(e,"da",l)}function hp(e,l,n=Us){const t=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ko(l,t,n),n){let a=n.parent;for(;a&&a.parent;)Aa(a.parent.vnode)&&hu(t,l,n,a),a=a.parent}}function hu(e,l,n,t){const a=Ko(l,e,t,!0);_a(()=>{ea(t[l],a)},n)}function ot(e){let l=e.shapeFlag;l&256&&(l-=256),l&512&&(l-=512),e.shapeFlag=l}function tt(e){return e.shapeFlag&128?e.ssContent:e}function Ko(e,l,n=Us,t=!1){if(n){const a=n[e]||(n[e]=[]),r=l.__weh||(l.__weh=(...c)=>{if(n.isUnmounted)return;Wl(),fn(n);const p=Se(l,n,e,c);return Ll(),Ul(),p});return t?a.unshift(r):a.push(r),r}else{const a=_l(da[e].replace(/ hook$/,""));N(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ol=e=>(l,n=Us)=>(!Un||e==="sp")&&Ko(e,l,n),mu=ol("bm"),Jo=ol("m"),vu=ol("bu"),mp=ol("u"),vp=ol("bum"),_a=ol("um"),Bu=ol("sp"),Au=ol("rtg"),_u=ol("rtc");function gu(e,l=Us){Ko("ec",e,l)}function Bp(e){Gi(e)&&N("Do not use built-in directive ids as custom directive id: "+e)}function je(e,l){const n=Zs;if(n===null)return N("withDirectives can only be used inside render functions."),e;const t=Go(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let r=0;r<l.length;r++){let[c,p,i,u=ks]=l[r];ds(c)&&(c={mounted:c,updated:c}),c.deep&&wl(p),a.push({dir:c,instance:t,value:p,oldValue:void 0,arg:i,modifiers:u})}return e}function Bl(e,l,n,t){const a=e.dirs,r=l&&l.dirs;for(let c=0;c<a.length;c++){const p=a[c];r&&(p.oldValue=r[c].value);let i=p.dir[t];i&&(Wl(),Se(i,n,8,[e.el,p,e,l]),Ul())}}const xt="components",Du="directives";function Cu(e,l){return Ap(xt,e,!0,l)||e}const Eu=Symbol();function ga(e){return Ap(Du,e)}function Ap(e,l,n=!0,t=!1){const a=Zs||Us;if(a){const r=a.type;if(e===xt){const p=qn(r,!1);if(p&&(p===l||p===Re(l)||p===yn(Re(l))))return r}const c=ar(a[e]||r[e],l)||ar(a.appContext[e],l);if(!c&&t)return r;if(n&&!c){const p=e===xt?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";N(`Failed to resolve ${e.slice(0,-1)}: ${l}${p}`)}return c}else N(`resolve${yn(e.slice(0,-1))} can only be used in render() or setup().`)}function ar(e,l){return e&&(e[l]||e[Re(l)]||e[yn(Re(l))])}function lo(e,l,n,t){let a;const r=n&&n[t];if(is(e)||zs(e)){a=new Array(e.length);for(let c=0,p=e.length;c<p;c++)a[c]=l(e[c],c,void 0,r&&r[c])}else if(typeof e=="number"){Number.isInteger(e)||N(`The v-for range expect an integer value but got ${e}.`),a=new Array(e);for(let c=0;c<e;c++)a[c]=l(c+1,c,void 0,r&&r[c])}else if(Rs(e))if(e[Symbol.iterator])a=Array.from(e,(c,p)=>l(c,p,void 0,r&&r[p]));else{const c=Object.keys(e);a=new Array(c.length);for(let p=0,i=c.length;p<i;p++){const u=c[p];a[p]=l(e[u],u,p,r&&r[p])}}else a=[];return n&&(n[t]=a),a}function el(e,l,n={},t,a){if(Zs.isCE||Zs.parent&&rn(Zs.parent)&&Zs.parent.isCE)return F("slot",l==="default"?null:{name:l},t&&t());let r=e[l];r&&r.length>1&&(N("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),A();const c=r&&_p(r(n)),p=L(xs,{key:n.key||`_${l}`},c||(t?t():[]),c&&e._===1?64:-2);return!a&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),r&&r._c&&(r._d=!0),p}function _p(e){return e.some(l=>jl(l)?!(l.type===ye||l.type===xs&&!_p(l.children)):!0)?e:null}const bt=e=>e?Op(e)?Go(e)||e.proxy:bt(e.parent):null,dn=Ks(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>on(e.props),$attrs:e=>on(e.attrs),$slots:e=>on(e.slots),$refs:e=>on(e.refs),$parent:e=>bt(e.parent),$root:e=>bt(e.root),$emit:e=>e.emit,$options:e=>Cp(e),$forceUpdate:e=>e.f||(e.f=()=>ha(e.update)),$nextTick:e=>e.n||(e.n=Pe.bind(e.proxy)),$watch:e=>uu.bind(e)}),Da=e=>e==="_"||e==="$",gp={get({_:e},l){const{ctx:n,setupState:t,data:a,props:r,accessCache:c,type:p,appContext:i}=e;if(l==="__isVue")return!0;if(t!==ks&&t.__isScriptSetup&&As(t,l))return t[l];let u;if(l[0]!=="$"){const m=c[l];if(m!==void 0)switch(m){case 1:return t[l];case 2:return a[l];case 4:return n[l];case 3:return r[l]}else{if(t!==ks&&As(t,l))return c[l]=1,t[l];if(a!==ks&&As(a,l))return c[l]=2,a[l];if((u=e.propsOptions[0])&&As(u,l))return c[l]=3,r[l];if(n!==ks&&As(n,l))return c[l]=4,n[l];wt&&(c[l]=0)}}const y=dn[l];let d,f;if(y)return l==="$attrs"&&(_e(e,"get",l),Fo()),y(e);if((d=p.__cssModules)&&(d=d[l]))return d;if(n!==ks&&As(n,l))return c[l]=4,n[l];if(f=i.config.globalProperties,As(f,l))return f[l];Zs&&(!zs(l)||l.indexOf("__v")!==0)&&(a!==ks&&Da(l[0])&&As(a,l)?N(`Property ${JSON.stringify(l)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Zs&&N(`Property ${JSON.stringify(l)} was accessed during render but is not defined on instance.`))},set({_:e},l,n){const{data:t,setupState:a,ctx:r}=e;return a!==ks&&As(a,l)?(a[l]=n,!0):t!==ks&&As(t,l)?(t[l]=n,!0):As(e.props,l)?(N(`Attempting to mutate prop "${l}". Props are readonly.`,e),!1):l[0]==="$"&&l.slice(1)in e?(N(`Attempting to mutate public property "${l}". Properties starting with $ are reserved and readonly.`,e),!1):(l in e.appContext.config.globalProperties?Object.defineProperty(r,l,{enumerable:!0,configurable:!0,value:n}):r[l]=n,!0)},has({_:{data:e,setupState:l,accessCache:n,ctx:t,appContext:a,propsOptions:r}},c){let p;return!!n[c]||e!==ks&&As(e,c)||l!==ks&&As(l,c)||(p=r[0])&&As(p,c)||As(t,c)||As(dn,c)||As(a.config.globalProperties,c)},defineProperty(e,l,n){return n.get!=null?e._.accessCache[l]=0:As(n,"value")&&this.set(e,l,n.value,null),Reflect.defineProperty(e,l,n)}};gp.ownKeys=e=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Fu(e){const l={};return Object.defineProperty(l,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(dn).forEach(n=>{Object.defineProperty(l,n,{configurable:!0,enumerable:!1,get:()=>dn[n](e),set:ue})}),l}function ku(e){const{ctx:l,propsOptions:[n]}=e;n&&Object.keys(n).forEach(t=>{Object.defineProperty(l,t,{enumerable:!0,configurable:!0,get:()=>e.props[t],set:ue})})}function xu(e){const{ctx:l,setupState:n}=e;Object.keys(ms(n)).forEach(t=>{if(!n.__isScriptSetup){if(Da(t[0])){N(`setup() return property ${JSON.stringify(t)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(l,t,{enumerable:!0,configurable:!0,get:()=>n[t],set:ue})}})}function bu(){const e=Object.create(null);return(l,n)=>{e[n]?N(`${l} property "${n}" is already defined in ${e[n]}.`):e[n]=l}}let wt=!0;function wu(e){const l=Cp(e),n=e.proxy,t=e.ctx;wt=!1,l.beforeCreate&&rr(l.beforeCreate,e,"bc");const{data:a,computed:r,methods:c,watch:p,provide:i,inject:u,created:y,beforeMount:d,mounted:f,beforeUpdate:m,updated:v,activated:g,deactivated:_,beforeDestroy:w,beforeUnmount:E,destroyed:$,unmounted:H,render:ss,renderTracked:K,renderTriggered:z,errorCaptured:ts,serverPrefetch:hs,expose:fs,inheritAttrs:Ds,components:Ns,directives:Js,filters:Qs}=l,Ps=bu();{const[Q]=e.propsOptions;if(Q)for(const rs in Q)Ps("Props",rs)}if(u&&$u(u,t,Ps,e.appContext.config.unwrapInjectedRef),c)for(const Q in c){const rs=c[Q];ds(rs)?(Object.defineProperty(t,Q,{value:rs.bind(n),configurable:!0,enumerable:!0,writable:!0}),Ps("Methods",Q)):N(`Method "${Q}" has type "${typeof rs}" in the component definition. Did you reference the function correctly?`)}if(a){ds(a)||N("The data option must be a function. Plain object usage is no longer supported.");const Q=a.call(n,n);if(na(Q)&&N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Rs(Q))N("data() should return an object.");else{e.data=ee(Q);for(const rs in Q)Ps("Data",rs),Da(rs[0])||Object.defineProperty(t,rs,{configurable:!0,enumerable:!0,get:()=>Q[rs],set:ue})}}if(wt=!0,r)for(const Q in r){const rs=r[Q],Bs=ds(rs)?rs.bind(n,n):ds(rs.get)?rs.get.bind(n,n):ue;Bs===ue&&N(`Computed property "${Q}" has no getter.`);const bs=!ds(rs)&&ds(rs.set)?rs.set.bind(n):()=>{N(`Write operation failed: computed property "${Q}" is readonly.`)},De=O({get:Bs,set:bs});Object.defineProperty(t,Q,{enumerable:!0,configurable:!0,get:()=>De.value,set:ie=>De.value=ie}),Ps("Computed",Q)}if(p)for(const Q in p)Dp(p[Q],t,n,Q);if(i){const Q=ds(i)?i.call(n):i;Reflect.ownKeys(Q).forEach(rs=>{ve(rs,Q[rs])})}y&&rr(y,e,"c");function Ts(Q,rs){is(rs)?rs.forEach(Bs=>Q(Bs.bind(n))):rs&&Q(rs.bind(n))}if(Ts(mu,d),Ts(Jo,f),Ts(vu,m),Ts(mp,v),Ts(du,g),Ts(fu,_),Ts(gu,ts),Ts(_u,K),Ts(Au,z),Ts(vp,E),Ts(_a,H),Ts(Bu,hs),is(fs))if(fs.length){const Q=e.exposed||(e.exposed={});fs.forEach(rs=>{Object.defineProperty(Q,rs,{get:()=>n[rs],set:Bs=>n[rs]=Bs})})}else e.exposed||(e.exposed={});ss&&e.render===ue&&(e.render=ss),Ds!=null&&(e.inheritAttrs=Ds),Ns&&(e.components=Ns),Js&&(e.directives=Js)}function $u(e,l,n=ue,t=!1){is(e)&&(e=$t(e));for(const a in e){const r=e[a];let c;Rs(r)?"default"in r?c=b(r.from||a,r.default,!0):c=b(r.from||a):c=b(r),Cs(c)?t?Object.defineProperty(l,a,{enumerable:!0,configurable:!0,get:()=>c.value,set:p=>c.value=p}):(N(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),l[a]=c):l[a]=c,n("Inject",a)}}function rr(e,l,n){Se(is(e)?e.map(t=>t.bind(l.proxy)):e.bind(l.proxy),l,n)}function Dp(e,l,n,t){const a=t.includes(".")?yp(n,t):()=>n[t];if(zs(e)){const r=l[e];ds(r)?js(a,r):N(`Invalid watch handler specified by key "${e}"`,r)}else if(ds(e))js(a,e.bind(n));else if(Rs(e))if(is(e))e.forEach(r=>Dp(r,l,n,t));else{const r=ds(e.handler)?e.handler.bind(n):l[e.handler];ds(r)?js(a,r,e):N(`Invalid watch handler specified by key "${e.handler}"`,r)}else N(`Invalid watch option: "${t}"`,e)}function Cp(e){const l=e.type,{mixins:n,extends:t}=l,{mixins:a,optionsCache:r,config:{optionMergeStrategies:c}}=e.appContext,p=r.get(l);let i;return p?i=p:!a.length&&!n&&!t?i=l:(i={},a.length&&a.forEach(u=>ko(i,u,c,!0)),ko(i,l,c)),r.set(l,i),i}function ko(e,l,n,t=!1){const{mixins:a,extends:r}=l;r&&ko(e,r,n,!0),a&&a.forEach(c=>ko(e,c,n,!0));for(const c in l)if(t&&c==="expose")N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const p=Su[c]||n&&n[c];e[c]=p?p(e[c],l[c]):l[c]}return e}const Su={data:cr,props:Cl,emits:Cl,methods:Cl,computed:Cl,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:Cl,directives:Cl,watch:Vu,provide:cr,inject:Pu};function cr(e,l){return l?e?function(){return Ks(ds(e)?e.call(this,this):e,ds(l)?l.call(this,this):l)}:l:e}function Pu(e,l){return Cl($t(e),$t(l))}function $t(e){if(is(e)){const l={};for(let n=0;n<e.length;n++)l[e[n]]=e[n];return l}return e}function oe(e,l){return e?[...new Set([].concat(e,l))]:l}function Cl(e,l){return e?Ks(Ks(Object.create(null),e),l):l}function Vu(e,l){if(!e)return l;if(!l)return e;const n=Ks(Object.create(null),e);for(const t in l)n[t]=oe(e[t],l[t]);return n}function Ou(e,l,n,t=!1){const a={},r={};_o(r,Zo,1),e.propsDefaults=Object.create(null),Ep(e,l,a,r);for(const c in e.propsOptions[0])c in a||(a[c]=void 0);kp(l||{},a,e),n?e.props=t?a:$8(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function Lu(e,l,n,t){const{props:a,attrs:r,vnode:{patchFlag:c}}=e,p=ms(a),[i]=e.propsOptions;let u=!1;if(!(e.type.__hmrId||e.parent&&e.parent.type.__hmrId)&&(t||c>0)&&!(c&16)){if(c&8){const y=e.vnode.dynamicProps;for(let d=0;d<y.length;d++){let f=y[d];if(Uo(e.emitsOptions,f))continue;const m=l[f];if(i)if(As(r,f))m!==r[f]&&(r[f]=m,u=!0);else{const v=Re(f);a[v]=St(i,p,v,m,e,!1)}else m!==r[f]&&(r[f]=m,u=!0)}}}else{Ep(e,l,a,r)&&(u=!0);let y;for(const d in p)(!l||!As(l,d)&&((y=un(d))===d||!As(l,y)))&&(i?n&&(n[d]!==void 0||n[y]!==void 0)&&(a[d]=St(i,p,d,void 0,e,!0)):delete a[d]);if(r!==p)for(const d in r)(!l||!As(l,d))&&(delete r[d],u=!0)}u&&sl(e,"set","$attrs"),kp(l||{},a,e)}function Ep(e,l,n,t){const[a,r]=e.propsOptions;let c=!1,p;if(l)for(let i in l){if(uo(i))continue;const u=l[i];let y;a&&As(a,y=Re(i))?!r||!r.includes(y)?n[y]=u:(p||(p={}))[y]=u:Uo(e.emitsOptions,i)||(!(i in t)||u!==t[i])&&(t[i]=u,c=!0)}if(r){const i=ms(n),u=p||ks;for(let y=0;y<r.length;y++){const d=r[y];n[d]=St(a,i,d,u[d],e,!As(u,d))}}return c}function St(e,l,n,t,a,r){const c=e[n];if(c!=null){const p=As(c,"default");if(p&&t===void 0){const i=c.default;if(c.type!==Function&&ds(i)){const{propsDefaults:u}=a;n in u?t=u[n]:(fn(a),t=u[n]=i.call(null,l),Ll())}else t=i}c[0]&&(r&&!p?t=!1:c[1]&&(t===""||t===un(n))&&(t=!0))}return t}function Fp(e,l,n=!1){const t=l.propsCache,a=t.get(e);if(a)return a;const r=e.props,c={},p=[];let i=!1;if(!ds(e)){const y=d=>{i=!0;const[f,m]=Fp(d,l,!0);Ks(c,f),m&&p.push(...m)};!n&&l.mixins.length&&l.mixins.forEach(y),e.extends&&y(e.extends),e.mixins&&e.mixins.forEach(y)}if(!r&&!i)return t.set(e,an),an;if(is(r))for(let y=0;y<r.length;y++){zs(r[y])||N("props must be strings when using array syntax.",r[y]);const d=Re(r[y]);pr(d)&&(c[d]=ks)}else if(r){Rs(r)||N("invalid props options",r);for(const y in r){const d=Re(y);if(pr(d)){const f=r[y],m=c[d]=is(f)||ds(f)?{type:f}:f;if(m){const v=ur(Boolean,m.type),g=ur(String,m.type);m[0]=v>-1,m[1]=g<0||v<g,(v>-1||As(m,"default"))&&p.push(d)}}}}const u=[c,p];return t.set(e,u),u}function pr(e){return e[0]!=="$"?!0:(N(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Pt(e){const l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:e===null?"null":""}function ir(e,l){return Pt(e)===Pt(l)}function ur(e,l){return is(l)?l.findIndex(n=>ir(n,e)):ds(l)&&ir(l,e)?0:-1}function kp(e,l,n){const t=ms(l),a=n.propsOptions[0];for(const r in a){let c=a[r];c!=null&&Tu(r,t[r],c,!As(e,r)&&!As(e,un(r)))}}function Tu(e,l,n,t){const{type:a,required:r,validator:c}=n;if(r&&t){N('Missing required prop: "'+e+'"');return}if(!(l==null&&!n.required)){if(a!=null&&a!==!0){let p=!1;const i=is(a)?a:[a],u=[];for(let y=0;y<i.length&&!p;y++){const{valid:d,expectedType:f}=Nu(l,i[y]);u.push(f||""),p=d}if(!p){N(Ru(e,l,u));return}}c&&!c(l)&&N('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Mu=so("String,Number,Boolean,Function,Symbol,BigInt");function Nu(e,l){let n;const t=Pt(l);if(Mu(t)){const a=typeof e;n=a===t.toLowerCase(),!n&&a==="object"&&(n=e instanceof l)}else t==="Object"?n=Rs(e):t==="Array"?n=is(e):t==="null"?n=e===null:n=e instanceof l;return{valid:n,expectedType:t}}function Ru(e,l,n){let t=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(yn).join(" | ")}`;const a=n[0],r=oa(l),c=yr(l,a),p=yr(l,r);return n.length===1&&dr(a)&&!Iu(a,r)&&(t+=` with value ${c}`),t+=`, got ${r} `,dr(r)&&(t+=`with value ${p}.`),t}function yr(e,l){return l==="String"?`"${e}"`:l==="Number"?`${Number(e)}`:`${e}`}function dr(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function Iu(...e){return e.some(l=>l.toLowerCase()==="boolean")}const xp=e=>e[0]==="_"||e==="$stable",Ca=e=>is(e)?e.map(we):[we(e)],ju=(e,l,n)=>{if(l._n)return l;const t=D((...a)=>(Us&&N(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ca(l(...a))),n);return t._c=!1,t},bp=(e,l,n)=>{const t=e._ctx;for(const a in e){if(xp(a))continue;const r=e[a];if(ds(r))l[a]=ju(a,r,t);else if(r!=null){N(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const c=Ca(r);l[a]=()=>c}}},wp=(e,l)=>{Aa(e.vnode)||N("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Ca(l);e.slots.default=()=>n},Hu=(e,l)=>{if(e.vnode.shapeFlag&32){const n=l._;n?(e.slots=ms(l),_o(l,"_",n)):bp(l,e.slots={})}else e.slots={},l&&wp(e,l);_o(e.slots,Zo,1)},zu=(e,l,n)=>{const{vnode:t,slots:a}=e;let r=!0,c=ks;if(t.shapeFlag&32){const p=l._;p?yl?Ks(a,l):n&&p===1?r=!1:(Ks(a,l),!n&&p===1&&delete a._):(r=!l.$stable,bp(l,a)),c=l}else l&&(wp(e,l),c={default:1});if(r)for(const p in a)!xp(p)&&!(p in c)&&delete a[p]};function $p(){return{app:null,config:{isNativeTag:$c,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wu=0;function Uu(e,l){return function(t,a=null){ds(t)||(t=Object.assign({},t)),a!=null&&!Rs(a)&&(N("root props passed to app.mount() must be an object."),a=null);const r=$p(),c=new Set;let p=!1;const i=r.app={_uid:Wu++,_component:t,_props:a,_container:null,_context:r,_instance:null,version:vr,get config(){return r.config},set config(u){N("app.config cannot be replaced. Modify individual options instead.")},use(u,...y){return c.has(u)?N("Plugin has already been applied to target app."):u&&ds(u.install)?(c.add(u),u.install(i,...y)):ds(u)?(c.add(u),u(i,...y)):N('A plugin must either be a function or an object with an "install" function.'),i},mixin(u){return r.mixins.includes(u)?N("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),i},component(u,y){return Lt(u,r.config),y?(r.components[u]&&N(`Component "${u}" has already been registered in target app.`),r.components[u]=y,i):r.components[u]},directive(u,y){return Bp(u),y?(r.directives[u]&&N(`Directive "${u}" has already been registered in target app.`),r.directives[u]=y,i):r.directives[u]},mount(u,y,d){if(p)N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=F(t,a);return f.appContext=r,r.reload=()=>{e(ll(f),u,d)},y&&l?l(f,u):e(f,u,d),p=!0,i._container=u,u.__vue_app__=i,i._instance=f.component,Q8(i,vr),Go(f.component)||f.component.proxy}},unmount(){p?(e(null,i._container),i._instance=null,X8(i),delete i._container.__vue_app__):N("Cannot unmount an app that is not mounted.")},provide(u,y){return u in r.provides&&N(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=y,i}};return i}}function Vt(e,l,n,t,a=!1){if(is(e)){e.forEach((f,m)=>Vt(f,l&&(is(l)?l[m]:l),n,t,a));return}if(rn(t)&&!a)return;const r=t.shapeFlag&4?Go(t.component)||t.component.proxy:t.el,c=a?null:r,{i:p,r:i}=e;if(!p){N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=l&&l.r,y=p.refs===ks?p.refs={}:p.refs,d=p.setupState;if(u!=null&&u!==i&&(zs(u)?(y[u]=null,As(d,u)&&(d[u]=null)):Cs(u)&&(u.value=null)),ds(i))Xe(i,p,12,[c,y]);else{const f=zs(i),m=Cs(i);if(f||m){const v=()=>{if(e.f){const g=f?y[i]:i.value;a?is(g)&&ea(g,r):is(g)?g.includes(r)||g.push(r):f?(y[i]=[r],As(d,i)&&(d[i]=y[i])):(i.value=[r],e.k&&(y[e.k]=i.value))}else f?(y[i]=c,As(d,i)&&(d[i]=c)):m?(i.value=c,e.k&&(y[e.k]=c)):N("Invalid template ref type:",i,`(${typeof i})`)};c?(v.id=-1,Xs(v,n)):v()}else N("Invalid template ref type:",i,`(${typeof i})`)}}let _n,pl;function Ue(e,l){e.appContext.config.performance&&xo()&&pl.mark(`vue-${l}-${e.uid}`),eu(e,l,xo()?pl.now():Date.now())}function qe(e,l){if(e.appContext.config.performance&&xo()){const n=`vue-${l}-${e.uid}`,t=n+":end";pl.mark(t),pl.measure(`<${Qo(e,e.type)}> ${l}`,n,t),pl.clearMarks(n),pl.clearMarks(t)}lu(e,l,xo()?pl.now():Date.now())}function xo(){return _n!==void 0||(typeof window<"u"&&window.performance?(_n=!0,pl=window.performance):_n=!1),_n}function qu(){const e=[];if(e.length){const l=e.length>1;console.warn(`Feature flag${l?"s":""} ${e.join(", ")} ${l?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Xs=iu;function Ku(e){return Ju(e)}function Ju(e,l){qu();const n=Oc();n.__VUE__=!0,ap(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:t,remove:a,patchProp:r,createElement:c,createText:p,createComment:i,setText:u,setElementText:y,parentNode:d,nextSibling:f,setScopeId:m=ue,cloneNode:v,insertStaticContent:g}=e,_=(h,B,k,T=null,V=null,I=null,U=!1,R=null,j=yl?!1:!!B.dynamicChildren)=>{if(h===B)return;h&&!gn(h,B)&&(T=vs(h),de(h,V,I,!0),h=null),B.patchFlag===-2&&(j=!1,B.dynamicChildren=null);const{type:M,ref:os,shapeFlag:ls}=B;switch(M){case Yo:w(h,B,k,T);break;case ye:E(h,B,k,T);break;case ho:h==null?$(B,k,T,U):H(h,B,k,U);break;case xs:Qs(h,B,k,T,V,I,U,R,j);break;default:ls&1?z(h,B,k,T,V,I,U,R,j):ls&6?Ps(h,B,k,T,V,I,U,R,j):ls&64||ls&128?M.process(h,B,k,T,V,I,U,R,j,cs):N("Invalid VNode type:",M,`(${typeof M})`)}os!=null&&V&&Vt(os,h&&h.ref,I,B||h,!B)},w=(h,B,k,T)=>{if(h==null)t(B.el=p(B.children),k,T);else{const V=B.el=h.el;B.children!==h.children&&u(V,B.children)}},E=(h,B,k,T)=>{h==null?t(B.el=i(B.children||""),k,T):B.el=h.el},$=(h,B,k,T)=>{[h.el,h.anchor]=g(h.children,B,k,T,h.el,h.anchor)},H=(h,B,k,T)=>{if(B.children!==h.children){const V=f(h.anchor);K(h),[B.el,B.anchor]=g(B.children,k,V,T)}else B.el=h.el,B.anchor=h.anchor},ss=({el:h,anchor:B},k,T)=>{let V;for(;h&&h!==B;)V=f(h),t(h,k,T),h=V;t(B,k,T)},K=({el:h,anchor:B})=>{let k;for(;h&&h!==B;)k=f(h),a(h),h=k;a(B)},z=(h,B,k,T,V,I,U,R,j)=>{U=U||B.type==="svg",h==null?ts(B,k,T,V,I,U,R,j):Ds(h,B,V,I,U,R,j)},ts=(h,B,k,T,V,I,U,R)=>{let j,M;const{type:os,props:ls,shapeFlag:as,transition:ys,patchFlag:Es,dirs:Ss}=h;{if(j=h.el=c(h.type,I,ls&&ls.is,ls),as&8?y(j,h.children):as&16&&fs(h.children,j,null,T,V,I&&os!=="foreignObject",U,R),Ss&&Bl(h,null,T,"created"),ls){for(const Ms in ls)Ms!=="value"&&!uo(Ms)&&r(j,Ms,null,ls[Ms],I,h.children,T,V,X);"value"in ls&&r(j,"value",null,ls.value),(M=ls.onVnodeBeforeMount)&&Ce(M,T,h)}hs(j,h,h.scopeId,U,T)}Object.defineProperty(j,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(j,"__vueParentComponent",{value:T,enumerable:!1}),Ss&&Bl(h,null,T,"beforeMount");const Vs=(!V||V&&!V.pendingBranch)&&ys&&!ys.persisted;Vs&&ys.beforeEnter(j),t(j,B,k),((M=ls&&ls.onVnodeMounted)||Vs||Ss)&&Xs(()=>{M&&Ce(M,T,h),Vs&&ys.enter(j),Ss&&Bl(h,null,T,"mounted")},V)},hs=(h,B,k,T,V)=>{if(k&&m(h,k),T)for(let I=0;I<T.length;I++)m(h,T[I]);if(V){let I=V.subTree;if(I.patchFlag>0&&I.patchFlag&2048&&(I=ip(I.children)||I),B===I){const U=V.vnode;hs(h,U,U.scopeId,U.slotScopeIds,V.parent)}}},fs=(h,B,k,T,V,I,U,R,j=0)=>{for(let M=j;M<h.length;M++){const os=h[M]=R?rl(h[M]):we(h[M]);_(null,os,B,k,T,V,I,U,R)}},Ds=(h,B,k,T,V,I,U)=>{const R=B.el=h.el;let{patchFlag:j,dynamicChildren:M,dirs:os}=B;j|=h.patchFlag&16;const ls=h.props||ks,as=B.props||ks;let ys;k&&Al(k,!1),(ys=as.onVnodeBeforeUpdate)&&Ce(ys,k,B,h),os&&Bl(B,h,k,"beforeUpdate"),k&&Al(k,!0),yl&&(j=0,U=!1,M=null);const Es=V&&B.type!=="foreignObject";if(M?(Ns(h.dynamicChildren,M,R,k,T,Es,I),k&&k.type.__hmrId&&Tn(h,B)):U||bs(h,B,R,null,k,T,Es,I,!1),j>0){if(j&16)Js(R,B,ls,as,k,T,V);else if(j&2&&ls.class!==as.class&&r(R,"class",null,as.class,V),j&4&&r(R,"style",ls.style,as.style,V),j&8){const Ss=B.dynamicProps;for(let Vs=0;Vs<Ss.length;Vs++){const Ms=Ss[Vs],ke=ls[Ms],Yl=as[Ms];(Yl!==ke||Ms==="value")&&r(R,Ms,ke,Yl,V,h.children,k,T,X)}}j&1&&h.children!==B.children&&y(R,B.children)}else!U&&M==null&&Js(R,B,ls,as,k,T,V);((ys=as.onVnodeUpdated)||os)&&Xs(()=>{ys&&Ce(ys,k,B,h),os&&Bl(B,h,k,"updated")},T)},Ns=(h,B,k,T,V,I,U)=>{for(let R=0;R<B.length;R++){const j=h[R],M=B[R],os=j.el&&(j.type===xs||!gn(j,M)||j.shapeFlag&70)?d(j.el):k;_(j,M,os,null,T,V,I,U,!0)}},Js=(h,B,k,T,V,I,U)=>{if(k!==T){for(const R in T){if(uo(R))continue;const j=T[R],M=k[R];j!==M&&R!=="value"&&r(h,R,M,j,U,B.children,V,I,X)}if(k!==ks)for(const R in k)!uo(R)&&!(R in T)&&r(h,R,k[R],null,U,B.children,V,I,X);"value"in T&&r(h,"value",k.value,T.value)}},Qs=(h,B,k,T,V,I,U,R,j)=>{const M=B.el=h?h.el:p(""),os=B.anchor=h?h.anchor:p("");let{patchFlag:ls,dynamicChildren:as,slotScopeIds:ys}=B;(yl||ls&2048)&&(ls=0,j=!1,as=null),ys&&(R=R?R.concat(ys):ys),h==null?(t(M,k,T),t(os,k,T),fs(B.children,k,os,V,I,U,R,j)):ls>0&&ls&64&&as&&h.dynamicChildren?(Ns(h.dynamicChildren,as,k,V,I,U,R),V&&V.type.__hmrId?Tn(h,B):(B.key!=null||V&&B===V.subTree)&&Tn(h,B,!0)):bs(h,B,k,os,V,I,U,R,j)},Ps=(h,B,k,T,V,I,U,R,j)=>{B.slotScopeIds=R,h==null?B.shapeFlag&512?V.ctx.activate(B,k,T,U,j):Ts(B,k,T,V,I,U,j):Q(h,B,j)},Ts=(h,B,k,T,V,I,U)=>{const R=h.component=oy(h,T,V);if(R.type.__hmrId&&J8(R),yo(h),Ue(R,"mount"),Aa(h)&&(R.ctx.renderer=cs),Ue(R,"init"),ay(R),qe(R,"init"),R.asyncDep){if(V&&V.registerDep(R,rs),!h.el){const j=R.subTree=F(ye);E(null,j,B,k)}return}rs(R,h,B,k,V,I,U),fo(),qe(R,"mount")},Q=(h,B,k)=>{const T=B.component=h.component;if(cu(h,B,k))if(T.asyncDep&&!T.asyncResolved){yo(B),Bs(T,B,k),fo();return}else T.next=B,q8(T.update),T.update();else B.el=h.el,T.vnode=B},rs=(h,B,k,T,V,I,U)=>{const R=()=>{if(h.isMounted){let{next:os,bu:ls,u:as,parent:ys,vnode:Es}=h,Ss=os,Vs;yo(os||h.vnode),Al(h,!1),os?(os.el=Es.el,Bs(h,os,U)):os=Es,ls&&El(ls),(Vs=os.props&&os.props.onVnodeBeforeUpdate)&&Ce(Vs,ys,os,Es),Al(h,!0),Ue(h,"render");const Ms=nt(h);qe(h,"render");const ke=h.subTree;h.subTree=Ms,Ue(h,"patch"),_(ke,Ms,d(ke.el),vs(ke),h,V,I),qe(h,"patch"),os.el=Ms.el,Ss===null&&pu(h,Ms.el),as&&Xs(as,V),(Vs=os.props&&os.props.onVnodeUpdated)&&Xs(()=>Ce(Vs,ys,os,Es),V),rp(h),fo()}else{let os;const{el:ls,props:as}=B,{bm:ys,m:Es,parent:Ss}=h,Vs=rn(B);if(Al(h,!1),ys&&El(ys),!Vs&&(os=as&&as.onVnodeBeforeMount)&&Ce(os,Ss,B),Al(h,!0),ls&&Ls){const Ms=()=>{Ue(h,"render"),h.subTree=nt(h),qe(h,"render"),Ue(h,"hydrate"),Ls(ls,h.subTree,h,V,null),qe(h,"hydrate")};Vs?B.type.__asyncLoader().then(()=>!h.isUnmounted&&Ms()):Ms()}else{Ue(h,"render");const Ms=h.subTree=nt(h);qe(h,"render"),Ue(h,"patch"),_(null,Ms,k,T,h,V,I),qe(h,"patch"),B.el=Ms.el}if(Es&&Xs(Es,V),!Vs&&(os=as&&as.onVnodeMounted)){const Ms=B;Xs(()=>Ce(os,Ss,Ms),V)}(B.shapeFlag&256||Ss&&rn(Ss.vnode)&&Ss.vnode.shapeFlag&256)&&h.a&&Xs(h.a,V),h.isMounted=!0,Ft(h),B=k=T=null}},j=h.effect=new ra(R,()=>ha(M),h.scope),M=h.update=()=>j.run();M.id=h.uid,Al(h,!0),j.onTrack=h.rtc?os=>El(h.rtc,os):void 0,j.onTrigger=h.rtg?os=>El(h.rtg,os):void 0,M.ownerInstance=h,M()},Bs=(h,B,k)=>{B.component=h;const T=h.vnode.props;h.vnode=B,h.next=null,Lu(h,B.props,T,k),zu(h,B.children,k),Wl(),Wo(void 0,h.update),Ul()},bs=(h,B,k,T,V,I,U,R,j=!1)=>{const M=h&&h.children,os=h?h.shapeFlag:0,ls=B.children,{patchFlag:as,shapeFlag:ys}=B;if(as>0){if(as&128){ie(M,ls,k,T,V,I,U,R,j);return}else if(as&256){De(M,ls,k,T,V,I,U,R,j);return}}ys&8?(os&16&&X(M,V,I),ls!==M&&y(k,ls)):os&16?ys&16?ie(M,ls,k,T,V,I,U,R,j):X(M,V,I,!0):(os&8&&y(k,""),ys&16&&fs(ls,k,T,V,I,U,R,j))},De=(h,B,k,T,V,I,U,R,j)=>{h=h||an,B=B||an;const M=h.length,os=B.length,ls=Math.min(M,os);let as;for(as=0;as<ls;as++){const ys=B[as]=j?rl(B[as]):we(B[as]);_(h[as],ys,k,null,V,I,U,R,j)}M>os?X(h,V,I,!0,!1,ls):fs(B,k,T,V,I,U,R,j,ls)},ie=(h,B,k,T,V,I,U,R,j)=>{let M=0;const os=B.length;let ls=h.length-1,as=os-1;for(;M<=ls&&M<=as;){const ys=h[M],Es=B[M]=j?rl(B[M]):we(B[M]);if(gn(ys,Es))_(ys,Es,k,null,V,I,U,R,j);else break;M++}for(;M<=ls&&M<=as;){const ys=h[ls],Es=B[as]=j?rl(B[as]):we(B[as]);if(gn(ys,Es))_(ys,Es,k,null,V,I,U,R,j);else break;ls--,as--}if(M>ls){if(M<=as){const ys=as+1,Es=ys<os?B[ys].el:T;for(;M<=as;)_(null,B[M]=j?rl(B[M]):we(B[M]),k,Es,V,I,U,R,j),M++}}else if(M>as)for(;M<=ls;)de(h[M],V,I,!0),M++;else{const ys=M,Es=M,Ss=new Map;for(M=Es;M<=as;M++){const ne=B[M]=j?rl(B[M]):we(B[M]);ne.key!=null&&(Ss.has(ne.key)&&N("Duplicate keys found during update:",JSON.stringify(ne.key),"Make sure keys are unique."),Ss.set(ne.key,M))}let Vs,Ms=0;const ke=as-Es+1;let Yl=!1,Ua=0;const An=new Array(ke);for(M=0;M<ke;M++)An[M]=0;for(M=ys;M<=ls;M++){const ne=h[M];if(Ms>=ke){de(ne,V,I,!0);continue}let Te;if(ne.key!=null)Te=Ss.get(ne.key);else for(Vs=Es;Vs<=as;Vs++)if(An[Vs-Es]===0&&gn(ne,B[Vs])){Te=Vs;break}Te===void 0?de(ne,V,I,!0):(An[Te-Es]=M+1,Te>=Ua?Ua=Te:Yl=!0,_(ne,B[Te],k,null,V,I,U,R,j),Ms++)}const qa=Yl?Yu(An):an;for(Vs=qa.length-1,M=ke-1;M>=0;M--){const ne=Es+M,Te=B[ne],Ka=ne+1<os?B[ne+1].el:T;An[M]===0?_(null,Te,k,Ka,V,I,U,R,j):Yl&&(Vs<0||M!==qa[Vs]?Le(Te,k,Ka,2):Vs--)}}},Le=(h,B,k,T,V=null)=>{const{el:I,type:U,transition:R,children:j,shapeFlag:M}=h;if(M&6){Le(h.component.subTree,B,k,T);return}if(M&128){h.suspense.move(B,k,T);return}if(M&64){U.move(h,B,k,cs);return}if(U===xs){t(I,B,k);for(let ls=0;ls<j.length;ls++)Le(j[ls],B,k,T);t(h.anchor,B,k);return}if(U===ho){ss(h,B,k);return}if(T!==2&&M&1&&R)if(T===0)R.beforeEnter(I),t(I,B,k),Xs(()=>R.enter(I),V);else{const{leave:ls,delayLeave:as,afterLeave:ys}=R,Es=()=>t(I,B,k),Ss=()=>{ls(I,()=>{Es(),ys&&ys()})};as?as(I,Es,Ss):Ss()}else t(I,B,k)},de=(h,B,k,T=!1,V=!1)=>{const{type:I,props:U,ref:R,children:j,dynamicChildren:M,shapeFlag:os,patchFlag:ls,dirs:as}=h;if(R!=null&&Vt(R,null,k,h,!0),os&256){B.ctx.deactivate(h);return}const ys=os&1&&as,Es=!rn(h);let Ss;if(Es&&(Ss=U&&U.onVnodeBeforeUnmount)&&Ce(Ss,B,h),os&6)G(h.component,k,T);else{if(os&128){h.suspense.unmount(k,T);return}ys&&Bl(h,null,B,"beforeUnmount"),os&64?h.type.remove(h,B,k,V,cs,T):M&&(I!==xs||ls>0&&ls&64)?X(M,B,k,!1,!0):(I===xs&&ls&384||!V&&os&16)&&X(j,B,k),T&&x(h)}(Es&&(Ss=U&&U.onVnodeUnmounted)||ys)&&Xs(()=>{Ss&&Ce(Ss,B,h),ys&&Bl(h,null,B,"unmounted")},k)},x=h=>{const{type:B,el:k,anchor:T,transition:V}=h;if(B===xs){h.patchFlag>0&&h.patchFlag&2048&&V&&!V.persisted?h.children.forEach(U=>{U.type===ye?a(U.el):x(U)}):es(k,T);return}if(B===ho){K(h);return}const I=()=>{a(k),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(h.shapeFlag&1&&V&&!V.persisted){const{leave:U,delayLeave:R}=V,j=()=>U(k,I);R?R(h.el,I,j):j()}else I()},es=(h,B)=>{let k;for(;h!==B;)k=f(h),a(h),h=k;a(B)},G=(h,B,k)=>{h.type.__hmrId&&Y8(h);const{bum:T,scope:V,update:I,subTree:U,um:R}=h;T&&El(T),V.stop(),I&&(I.active=!1,de(U,h,B,k)),R&&Xs(R,B),Xs(()=>{h.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve()),su(h)},X=(h,B,k,T=!1,V=!1,I=0)=>{for(let U=I;U<h.length;U++)de(h[U],B,k,T,V)},vs=h=>h.shapeFlag&6?vs(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),Fs=(h,B,k)=>{h==null?B._vnode&&de(B._vnode,null,null,!0):_(B._vnode||null,h,B,null,null,null,k),np(),B._vnode=h},cs={p:_,um:de,m:Le,r:x,mt:Ts,mc:fs,pc:bs,pbc:Ns,n:vs,o:e};let ps,Ls;return l&&([ps,Ls]=l(cs)),{render:Fs,hydrate:ps,createApp:Uu(Fs,ps)}}function Al({effect:e,update:l},n){e.allowRecurse=l.allowRecurse=n}function Tn(e,l,n=!1){const t=e.children,a=l.children;if(is(t)&&is(a))for(let r=0;r<t.length;r++){const c=t[r];let p=a[r];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=a[r]=rl(a[r]),p.el=c.el),n||Tn(c,p)),p.type===ye&&!p.el&&(p.el=c.el)}}function Yu(e){const l=e.slice(),n=[0];let t,a,r,c,p;const i=e.length;for(t=0;t<i;t++){const u=e[t];if(u!==0){if(a=n[n.length-1],e[a]<u){l[t]=a,n.push(t);continue}for(r=0,c=n.length-1;r<c;)p=r+c>>1,e[n[p]]<u?r=p+1:c=p;u<e[n[r]]&&(r>0&&(l[t]=n[r-1]),n[r]=t)}}for(r=n.length,c=n[r-1];r-- >0;)n[r]=c,c=l[c];return n}const Zu=e=>e.__isTeleport,cn=e=>e&&(e.disabled||e.disabled===""),fr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ot=(e,l)=>{const n=e&&e.to;if(zs(n))if(l){const t=l(n);return t||N(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),t}else return N("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!cn(e)&&N(`Invalid Teleport target: ${n}`),n},Gu={__isTeleport:!0,process(e,l,n,t,a,r,c,p,i,u){const{mc:y,pc:d,pbc:f,o:{insert:m,querySelector:v,createText:g,createComment:_}}=u,w=cn(l.props);let{shapeFlag:E,children:$,dynamicChildren:H}=l;if(yl&&(i=!1,H=null),e==null){const ss=l.el=_("teleport start"),K=l.anchor=_("teleport end");m(ss,n,t),m(K,n,t);const z=l.target=Ot(l.props,v),ts=l.targetAnchor=g("");z?(m(ts,z),c=c||fr(z)):w||N("Invalid Teleport target on mount:",z,`(${typeof z})`);const hs=(fs,Ds)=>{E&16&&y($,fs,Ds,a,r,c,p,i)};w?hs(n,K):z&&hs(z,ts)}else{l.el=e.el;const ss=l.anchor=e.anchor,K=l.target=e.target,z=l.targetAnchor=e.targetAnchor,ts=cn(e.props),hs=ts?n:K,fs=ts?ss:z;if(c=c||fr(K),H?(f(e.dynamicChildren,H,hs,a,r,c,p),Tn(e,l,!0)):i||d(e,l,hs,fs,a,r,c,p,!1),w)ts||co(l,n,ss,u,1);else if((l.props&&l.props.to)!==(e.props&&e.props.to)){const Ds=l.target=Ot(l.props,v);Ds?co(l,Ds,null,u,0):N("Invalid Teleport target on update:",K,`(${typeof K})`)}else ts&&co(l,K,z,u,1)}},remove(e,l,n,t,{um:a,o:{remove:r}},c){const{shapeFlag:p,children:i,anchor:u,targetAnchor:y,target:d,props:f}=e;if(d&&r(y),(c||!cn(f))&&(r(u),p&16))for(let m=0;m<i.length;m++){const v=i[m];a(v,l,n,!0,!!v.dynamicChildren)}},move:co,hydrate:Qu};function co(e,l,n,{o:{insert:t},m:a},r=2){r===0&&t(e.targetAnchor,l,n);const{el:c,anchor:p,shapeFlag:i,children:u,props:y}=e,d=r===2;if(d&&t(c,l,n),(!d||cn(y))&&i&16)for(let f=0;f<u.length;f++)a(u[f],l,n,2);d&&t(p,l,n)}function Qu(e,l,n,t,a,r,{o:{nextSibling:c,parentNode:p,querySelector:i}},u){const y=l.target=Ot(l.props,i);if(y){const d=y._lpa||y.firstChild;if(l.shapeFlag&16)if(cn(l.props))l.anchor=u(c(e),l,p(e),n,t,a,r),l.targetAnchor=d;else{l.anchor=c(e);let f=d;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){l.targetAnchor=f,y._lpa=l.targetAnchor&&c(l.targetAnchor);break}u(d,l,y,n,t,a,r)}}return l.anchor&&c(l.anchor)}const d6=Gu,xs=Symbol("Fragment"),Yo=Symbol("Text"),ye=Symbol("Comment"),ho=Symbol("Static"),Mn=[];let $e=null;function A(e=!1){Mn.push($e=e?null:[])}function Xu(){Mn.pop(),$e=Mn[Mn.length-1]||null}let Wn=1;function hr(e){Wn+=e}function Sp(e){return e.dynamicChildren=Wn>0?$e||an:null,Xu(),Wn>0&&$e&&$e.push(e),e}function Y(e,l,n,t,a,r){return Sp(s(e,l,n,t,a,r,!0))}function L(e,l,n,t,a){return Sp(F(e,l,n,t,a,!0))}function jl(e){return e?e.__v_isVNode===!0:!1}function gn(e,l){return l.shapeFlag&6&&en.has(l.type)?!1:e.type===l.type&&e.key===l.key}const sy=(...e)=>ey(...e),Zo="__vInternal",Pp=({key:e})=>e??null,mo=({ref:e,ref_key:l,ref_for:n})=>e!=null?zs(e)||Cs(e)||ds(e)?{i:Zs,r:e,k:l,f:!!n}:e:null;function s(e,l=null,n=null,t=0,a=null,r=e===xs?0:1,c=!1,p=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:l,key:l&&Pp(l),ref:l&&mo(l),scopeId:qo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:t,dynamicProps:a,dynamicChildren:null,appContext:null};return p?(Ea(i,n),r&128&&e.normalize(i)):n&&(i.shapeFlag|=zs(n)?8:16),i.key!==i.key&&N("VNode created with invalid key (NaN). VNode type:",i.type),Wn>0&&!c&&$e&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&$e.push(i),i}const F=sy;function ey(e,l=null,n=null,t=0,a=null,r=!1){if((!e||e===Eu)&&(e||N(`Invalid vnode type when creating vnode: ${e}.`),e=ye),jl(e)){const p=ll(e,l,!0);return n&&Ea(p,n),Wn>0&&!r&&$e&&(p.shapeFlag&6?$e[$e.indexOf(e)]=p:$e.push(p)),p.patchFlag|=-2,p}if(Mp(e)&&(e=e.__vccOpts),l){l=W(l);let{class:p,style:i}=l;p&&!zs(p)&&(l.class=Hs(p)),Rs(i)&&(Do(i)&&!is(i)&&(i=Ks({},i)),l.style=se(i))}const c=zs(e)?1:up(e)?128:Zu(e)?64:Rs(e)?4:ds(e)?2:0;return c&4&&Do(e)&&(e=ms(e),N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,l,n,t,a,c,r,!0)}function W(e){return e?Do(e)||Zo in e?Ks({},e):e:null}function ll(e,l,n=!1){const{props:t,ref:a,patchFlag:r,children:c}=e,p=l?Z(t||{},l):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Pp(p),ref:l&&l.ref?n&&a?is(a)?a.concat(mo(l)):[a,mo(l)]:mo(l):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&is(c)?c.map(Vp):c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:l&&e.type!==xs?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ll(e.ssContent),ssFallback:e.ssFallback&&ll(e.ssFallback),el:e.el,anchor:e.anchor}}function Vp(e){const l=ll(e);return is(e.children)&&(l.children=e.children.map(Vp)),l}function o(e=" ",l=0){return F(Yo,null,e,l)}function _s(e="",l=!1){return l?(A(),L(ye,null,e)):F(ye,null,e)}function we(e){return e==null||typeof e=="boolean"?F(ye):is(e)?F(xs,null,e.slice()):typeof e=="object"?rl(e):F(Yo,null,String(e))}function rl(e){return e.el===null||e.memo?e:ll(e)}function Ea(e,l){let n=0;const{shapeFlag:t}=e;if(l==null)l=null;else if(is(l))n=16;else if(typeof l=="object")if(t&65){const a=l.default;a&&(a._c&&(a._d=!1),Ea(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=l._;!a&&!(Zo in l)?l._ctx=Zs:a===3&&Zs&&(Zs.slots._===1?l._=1:(l._=2,e.patchFlag|=1024))}else ds(l)?(l={default:l,_ctx:Zs},n=32):(l=String(l),t&64?(n=16,l=[o(l)]):n=8);e.children=l,e.shapeFlag|=n}function Z(...e){const l={};for(let n=0;n<e.length;n++){const t=e[n];for(const a in t)if(a==="class")l.class!==t.class&&(l.class=Hs([l.class,t.class]));else if(a==="style")l.style=se([l.style,t.style]);else if(To(a)){const r=l[a],c=t[a];c&&r!==c&&!(is(r)&&r.includes(c))&&(l[a]=r?[].concat(r,c):c)}else a!==""&&(l[a]=t[a])}return l}function Ce(e,l,n,t=null){Se(e,l,7,[n,t])}const ly=$p();let ny=0;function oy(e,l,n){const t=e.type,a=(l?l.appContext:e.appContext)||ly,r={uid:ny++,vnode:e,type:t,parent:l,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fp(t,a),emitsOptions:pp(t,a),emit:null,emitted:null,propsDefaults:ks,inheritAttrs:t.inheritAttrs,ctx:ks,data:ks,props:ks,attrs:ks,slots:ks,refs:ks,setupState:ks,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Fu(r),r.root=l?l.root:r,r.emit=ou.bind(null,r),e.ce&&e.ce(r),r}let Us=null;const ql=()=>Us||Zs,fn=e=>{Us=e,e.scope.on()},Ll=()=>{Us&&Us.scope.off(),Us=null},ty=so("slot,component");function Lt(e,l){const n=l.isNativeTag||$c;(ty(e)||n(e))&&N("Do not use built-in or reserved HTML elements as component id: "+e)}function Op(e){return e.vnode.shapeFlag&4}let Un=!1;function ay(e,l=!1){Un=l;const{props:n,children:t}=e.vnode,a=Op(e);Ou(e,n,a,l),Hu(e,t);const r=a?ry(e,l):void 0;return Un=!1,r}function ry(e,l){var n;const t=e.type;{if(t.name&&Lt(t.name,e.appContext.config),t.components){const r=Object.keys(t.components);for(let c=0;c<r.length;c++)Lt(r[c],e.appContext.config)}if(t.directives){const r=Object.keys(t.directives);for(let c=0;c<r.length;c++)Bp(r[c])}t.compilerOptions&&cy()&&N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=pa(new Proxy(e.ctx,gp)),ku(e);const{setup:a}=t;if(a){const r=e.setupContext=a.length>1?Tp(e):null;fn(e),Wl();const c=Xe(a,e,0,[on(e.props),r]);if(Ul(),Ll(),na(c)){if(c.then(Ll,Ll),l)return c.then(p=>{mr(e,p,l)}).catch(p=>{zo(p,e,0)});if(e.asyncDep=c,!e.suspense){const p=(n=t.name)!==null&&n!==void 0?n:"Anonymous";N(`Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else mr(e,c,l)}else Lp(e,l)}function mr(e,l,n){ds(l)?e.type.__ssrInlineRender?e.ssrRender=l:e.render=l:Rs(l)?(jl(l)&&N("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=l,e.setupState=Zc(l),xu(e)):l!==void 0&&N(`setup() should return an object. Received: ${l===null?"null":typeof l}`),Lp(e,n)}let Tt;const cy=()=>!Tt;function Lp(e,l,n){const t=e.type;if(!e.render){if(!l&&Tt&&!t.render){const a=t.template;if(a){Ue(e,"compile");const{isCustomElement:r,compilerOptions:c}=e.appContext.config,{delimiters:p,compilerOptions:i}=t,u=Ks(Ks({isCustomElement:r,delimiters:p},c),i);t.render=Tt(a,u),qe(e,"compile")}}e.render=t.render||ue}fn(e),Wl(),wu(e),Ul(),Ll(),!t.render&&e.render===ue&&!l&&(t.template?N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):N("Component is missing template or render function."))}function py(e){return new Proxy(e.attrs,{get(l,n){return Fo(),_e(e,"get","$attrs"),l[n]},set(){return N("setupContext.attrs is readonly."),!1},deleteProperty(){return N("setupContext.attrs is readonly."),!1}})}function Tp(e){const l=t=>{e.exposed&&N("expose() should be called only once per setup()."),e.exposed=t||{}};let n;return Object.freeze({get attrs(){return n||(n=py(e))},get slots(){return on(e.slots)},get emit(){return(t,...a)=>e.emit(t,...a)},expose:l})}function Go(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zc(pa(e.exposed)),{get(l,n){if(n in l)return l[n];if(n in dn)return dn[n](e)}}))}const iy=/(?:^|[-_])(\w)/g,uy=e=>e.replace(iy,l=>l.toUpperCase()).replace(/[-_]/g,"");function qn(e,l=!0){return ds(e)?e.displayName||e.name:e.name||l&&e.__name}function Qo(e,l,n=!1){let t=qn(l);if(!t&&l.__file){const a=l.__file.match(/([^/\\]+)\.\w+$/);a&&(t=a[1])}if(!t&&e&&e.parent){const a=r=>{for(const c in r)if(r[c]===l)return c};t=a(e.components||e.parent.type.components)||a(e.appContext.components)}return t?uy(t):n?"App":"Anonymous"}function Mp(e){return ds(e)&&"__vccOpts"in e}const O=(e,l)=>N8(e,l,Un);function f6(){return yy().slots}function yy(){const e=ql();return e||N("useContext() called without active instance."),e.setupContext||(e.setupContext=Tp(e))}function Xo(e,l,n){const t=arguments.length;return t===2?Rs(l)&&!is(l)?jl(l)?F(e,null,[l]):F(e,l):F(e,null,l):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&jl(n)&&(n=[n]),F(e,l,n))}function at(e){return!!(e&&e.__v_isShallow)}function dy(){if(typeof window>"u")return;const e={style:"color:#3ba776"},l={style:"color:#0b1bc9"},n={style:"color:#b62e24"},t={style:"color:#9d288c"},a={header(d){return Rs(d)?d.__isVue?["div",e,"VueInstance"]:Cs(d)?["div",{},["span",e,y(d)],"<",p(d.value),">"]:Vl(d)?["div",{},["span",e,at(d)?"ShallowReactive":"Reactive"],"<",p(d),`>${Rl(d)?" (readonly)":""}`]:Rl(d)?["div",{},["span",e,at(d)?"ShallowReadonly":"Readonly"],"<",p(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...r(d.$)]}};function r(d){const f=[];d.type.props&&d.props&&f.push(c("props",ms(d.props))),d.setupState!==ks&&f.push(c("setup",d.setupState)),d.data!==ks&&f.push(c("data",ms(d.data)));const m=i(d,"computed");m&&f.push(c("computed",m));const v=i(d,"inject");return v&&f.push(c("injected",v)),f.push(["div",{},["span",{style:t.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),f}function c(d,f){return f=Ks({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",t,m+": "],p(f[m],!1)])]]:["span",{}]}function p(d,f=!0){return typeof d=="number"?["span",l,d]:typeof d=="string"?["span",n,JSON.stringify(d)]:typeof d=="boolean"?["span",t,d]:Rs(d)?["object",{object:f?ms(d):d}]:["span",n,String(d)]}function i(d,f){const m=d.type;if(ds(m))return;const v={};for(const g in d.ctx)u(m,g,f)&&(v[g]=d.ctx[g]);return v}function u(d,f,m){const v=d[m];if(is(v)&&v.includes(f)||Rs(v)&&f in v||d.extends&&u(d.extends,f,m)||d.mixins&&d.mixins.some(g=>u(g,f,m)))return!0}function y(d){return at(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const vr="3.2.37";function Fa(e,l){const n=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)n[t[a]]=!0;return l?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const fy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hy=Fa(fy);function Np(e){return!!e||e===""}const my="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",vy="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",By=Fa(my),Ay=Fa(vy),_y=/^on[^a-z]/,gy=e=>_y.test(e),Dy=e=>e.startsWith("onUpdate:"),Cy=Object.assign,ka=Array.isArray,Rp=e=>typeof e=="function",bo=e=>typeof e=="string",Ip=e=>{const l=Object.create(null);return n=>l[n]||(l[n]=e(n))},Ey=/\B([A-Z])/g,xa=Ip(e=>e.replace(Ey,"-$1").toLowerCase()),Fy=Ip(e=>e.charAt(0).toUpperCase()+e.slice(1)),ky=(e,l)=>{for(let n=0;n<e.length;n++)e[n](l)},Br=e=>{const l=parseFloat(e);return isNaN(l)?e:l},xy="http://www.w3.org/2000/svg",kl=typeof document<"u"?document:null,Ar=kl&&kl.createElement("template"),by={insert:(e,l,n)=>{l.insertBefore(e,n||null)},remove:e=>{const l=e.parentNode;l&&l.removeChild(e)},createElement:(e,l,n,t)=>{const a=l?kl.createElementNS(xy,e):kl.createElement(e,n?{is:n}:void 0);return e==="select"&&t&&t.multiple!=null&&a.setAttribute("multiple",t.multiple),a},createText:e=>kl.createTextNode(e),createComment:e=>kl.createComment(e),setText:(e,l)=>{e.nodeValue=l},setElementText:(e,l)=>{e.textContent=l},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kl.querySelector(e),setScopeId(e,l){e.setAttribute(l,"")},cloneNode(e){const l=e.cloneNode(!0);return"_value"in e&&(l._value=e._value),l},insertStaticContent(e,l,n,t,a,r){const c=n?n.previousSibling:l.lastChild;if(a&&(a===r||a.nextSibling))for(;l.insertBefore(a.cloneNode(!0),n),!(a===r||!(a=a.nextSibling)););else{Ar.innerHTML=t?`<svg>${e}</svg>`:e;const p=Ar.content;if(t){const i=p.firstChild;for(;i.firstChild;)p.appendChild(i.firstChild);p.removeChild(i)}l.insertBefore(p,n)}return[c?c.nextSibling:l.firstChild,n?n.previousSibling:l.lastChild]}};function wy(e,l,n){const t=e._vtc;t&&(l=(l?[l,...t]:[...t]).join(" ")),l==null?e.removeAttribute("class"):n?e.setAttribute("class",l):e.className=l}function $y(e,l,n){const t=e.style,a=bo(n);if(n&&!a){for(const r in n)Mt(t,r,n[r]);if(l&&!bo(l))for(const r in l)n[r]==null&&Mt(t,r,"")}else{const r=t.display;a?l!==n&&(t.cssText=n):l&&e.removeAttribute("style"),"_vod"in e&&(t.display=r)}}const _r=/\s*!important$/;function Mt(e,l,n){if(ka(n))n.forEach(t=>Mt(e,l,t));else if(n==null&&(n=""),l.startsWith("--"))e.setProperty(l,n);else{const t=Sy(e,l);_r.test(n)?e.setProperty(xa(t),n.replace(_r,""),"important"):e[t]=n}}const gr=["Webkit","Moz","ms"],rt={};function Sy(e,l){const n=rt[l];if(n)return n;let t=Re(l);if(t!=="filter"&&t in e)return rt[l]=t;t=Fy(t);for(let a=0;a<gr.length;a++){const r=gr[a]+t;if(r in e)return rt[l]=r}return l}const Dr="http://www.w3.org/1999/xlink";function Py(e,l,n,t,a){if(t&&l.startsWith("xlink:"))n==null?e.removeAttributeNS(Dr,l.slice(6,l.length)):e.setAttributeNS(Dr,l,n);else{const r=hy(l);n==null||r&&!Np(n)?e.removeAttribute(l):e.setAttribute(l,r?"":n)}}function Vy(e,l,n,t,a,r,c){if(l==="innerHTML"||l==="textContent"){t&&c(t,a,r),e[l]=n??"";return}if(l==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const i=n??"";(e.value!==i||e.tagName==="OPTION")&&(e.value=i),n==null&&e.removeAttribute(l);return}let p=!1;if(n===""||n==null){const i=typeof e[l];i==="boolean"?n=Np(n):n==null&&i==="string"?(n="",p=!0):i==="number"&&(n=0,p=!0)}try{e[l]=n}catch(i){N(`Failed setting prop "${l}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,i)}p&&e.removeAttribute(l)}const[jp,Oy]=(()=>{let e=Date.now,l=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);l=!!(n&&Number(n[1])<=53)}return[e,l]})();let Nt=0;const Ly=Promise.resolve(),Ty=()=>{Nt=0},My=()=>Nt||(Ly.then(Ty),Nt=jp());function ln(e,l,n,t){e.addEventListener(l,n,t)}function Ny(e,l,n,t){e.removeEventListener(l,n,t)}function Ry(e,l,n,t,a=null){const r=e._vei||(e._vei={}),c=r[l];if(t&&c)c.value=t;else{const[p,i]=Iy(l);if(t){const u=r[l]=jy(t,a);ln(e,p,u,i)}else c&&(Ny(e,p,c,i),r[l]=void 0)}}const Cr=/(?:Once|Passive|Capture)$/;function Iy(e){let l;if(Cr.test(e)){l={};let n;for(;n=e.match(Cr);)e=e.slice(0,e.length-n[0].length),l[n[0].toLowerCase()]=!0}return[xa(e.slice(2)),l]}function jy(e,l){const n=t=>{const a=t.timeStamp||jp();(Oy||a>=n.attached-1)&&Se(Hy(t,n.value),l,5,[t])};return n.value=e,n.attached=My(),n}function Hy(e,l){if(ka(l)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},l.map(t=>a=>!a._stopped&&t&&t(a))}else return l}const Er=/^on[a-z]/,zy=(e,l,n,t,a=!1,r,c,p,i)=>{l==="class"?wy(e,t,a):l==="style"?$y(e,n,t):gy(l)?Dy(l)||Ry(e,l,n,t,c):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Wy(e,l,t,a))?Vy(e,l,t,r,c,p,i):(l==="true-value"?e._trueValue=t:l==="false-value"&&(e._falseValue=t),Py(e,l,t,a))};function Wy(e,l,n,t){return t?!!(l==="innerHTML"||l==="textContent"||l in e&&Er.test(l)&&Rp(n)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&e.tagName==="INPUT"||l==="type"&&e.tagName==="TEXTAREA"||Er.test(l)&&bo(n)?!1:l in e}const Fr=e=>{const l=e.props["onUpdate:modelValue"]||!1;return ka(l)?n=>ky(l,n):l};function Uy(e){e.target.composing=!0}function kr(e){const l=e.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const Kn={created(e,{modifiers:{lazy:l,trim:n,number:t}},a){e._assign=Fr(a);const r=t||a.props&&a.props.type==="number";ln(e,l?"change":"input",c=>{if(c.target.composing)return;let p=e.value;n&&(p=p.trim()),r&&(p=Br(p)),e._assign(p)}),n&&ln(e,"change",()=>{e.value=e.value.trim()}),l||(ln(e,"compositionstart",Uy),ln(e,"compositionend",kr),ln(e,"change",kr))},mounted(e,{value:l}){e.value=l??""},beforeUpdate(e,{value:l,modifiers:{lazy:n,trim:t,number:a}},r){if(e._assign=Fr(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||t&&e.value.trim()===l||(a||e.type==="number")&&Br(e.value)===l))return;const c=l??"";e.value!==c&&(e.value=c)}},qy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xr=(e,l)=>n=>{if(!("key"in n))return;const t=xa(n.key);if(l.some(a=>a===t||qy[a]===t))return e(n)},Hp={beforeMount(e,{value:l},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&l?n.beforeEnter(e):Dn(e,l)},mounted(e,{value:l},{transition:n}){n&&l&&n.enter(e)},updated(e,{value:l,oldValue:n},{transition:t}){!l!=!n&&(t?l?(t.beforeEnter(e),Dn(e,!0),t.enter(e)):t.leave(e,()=>{Dn(e,!1)}):Dn(e,l))},beforeUnmount(e,{value:l}){Dn(e,l)}};function Dn(e,l){e.style.display=l?e._vod:"none"}const Ky=Cy({patchProp:zy},by);let br;function Jy(){return br||(br=Ku(Ky))}const h6=(...e)=>{const l=Jy().createApp(...e);Yy(l),Zy(l);const{mount:n}=l;return l.mount=t=>{const a=Gy(t);if(!a)return;const r=l._component;!Rp(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const c=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),c},l};function Yy(e){Object.defineProperty(e.config,"isNativeTag",{value:l=>By(l)||Ay(l),writable:!1})}function Zy(e){{const l=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return l},set(){N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,t='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return N(t),n},set(){N(t)}})}}function Gy(e){if(bo(e)){const l=document.querySelector(e);return l||N(`Failed to mount app: mount target selector "${e}" returned null.`),l}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Qy(){dy()}Qy();const zp=Symbol("v-click-clicks"),Wp=Symbol("v-click-clicks-elements"),Xy=Symbol("v-click-clicks-order-map"),Up=Symbol("v-click-clicks-disabled"),qp=Symbol("slidev-slide-scale"),S=Symbol("slidev-slidev-context"),sd=Symbol("slidev-route"),ed=Symbol("slidev-slide-context"),ld="slidev-vclick-target",m6="slidev-vclick-hidden",v6="slidev-vclick-fade",B6="slidev-vclick-hidden-explicitly",A6="slidev-vclick-current",_6="slidev-vclick-prior";function nd(e,l){if(!e)return!1;const n=e.indexOf(l);return n>=0?(e.splice(n,1),!0):!1}function od(...e){let l,n,t;e.length===1?(l=0,t=1,[n]=e):[l,n,t=1]=e;const a=[];let r=l;for(;r<n;)a.push(r),r+=t||1;return a}function td(e){return e!=null}function ad(e,l){return Object.fromEntries(Object.entries(e).map(([n,t])=>l(n,t)).filter(td))}const Pn={theme:"default",title:"Vue.js",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"},Os=Pn,dl=Os.aspectRatio??16/9,fl=Os.canvasWidth??980,ba=Math.ceil(fl/dl),wa=O(()=>ad(Os.themeConfig||{},(e,l)=>[`--slidev-theme-${e}`,l]));function Fe(e,l,n){Object.defineProperty(e,l,{value:n,writable:!0,enumerable:!1})}const Kl=ee({page:0,clicks:0});let rd=[],cd=[];Fe(Kl,"$syncUp",!0);Fe(Kl,"$syncDown",!0);Fe(Kl,"$paused",!1);Fe(Kl,"$onSet",e=>rd.push(e));Fe(Kl,"$onPatch",e=>cd.push(e));Fe(Kl,"$patch",async()=>!1);function Kp(e,l,n=!1){const t=[];let a=!1,r=!1,c,p;const i=ee(l);function u(m){t.push(m)}function y(m,v){clearTimeout(c),a=!0,i[m]=v,c=setTimeout(()=>a=!1,0)}function d(m){a||(clearTimeout(p),r=!0,Object.entries(m).forEach(([v,g])=>{i[v]=g}),p=setTimeout(()=>r=!1,0))}function f(m){let v;n?n&&window.addEventListener("storage",_=>{_&&_.key===m&&_.newValue&&d(JSON.parse(_.newValue))}):(v=new BroadcastChannel(m),v.addEventListener("message",_=>d(_.data)));function g(){!n&&v&&!r?v.postMessage(ms(i)):n&&!r&&window.localStorage.setItem(m,JSON.stringify(i)),a||t.forEach(_=>_(i))}if(js(i,g,{deep:!0}),n){const _=window.localStorage.getItem(m);_&&d(JSON.parse(_))}}return{init:f,onPatch:u,patch:y,state:i}}const{init:g6,onPatch:D6,patch:C6,state:ct}=Kp(Kl,{page:1,clicks:0}),Jl=ee({});let pd=[],id=[];Fe(Jl,"$syncUp",!0);Fe(Jl,"$syncDown",!0);Fe(Jl,"$paused",!1);Fe(Jl,"$onSet",e=>pd.push(e));Fe(Jl,"$onPatch",e=>id.push(e));Fe(Jl,"$patch",async()=>!1);const{init:E6,onPatch:ud,patch:Jp,state:wo}=Kp(Jl,{},!1),yd="modulepreload",dd=function(e){return"/vue-3-practices/"+e},wr={},Hl=function(l,n,t){if(!n||n.length===0)return l();const a=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=dd(r),r in wr)return;wr[r]=!0;const c=r.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!t)for(let y=a.length-1;y>=0;y--){const d=a[y];if(d.href===r&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":yd,c||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),c)return new Promise((y,d)=>{u.addEventListener("load",y),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>l())};var $r;const Ve=typeof window<"u",fd=e=>typeof e<"u",Jn=e=>typeof e=="function",Yp=e=>typeof e=="string",Rt=()=>+Date.now(),Zp=()=>{};Ve&&(($r=window==null?void 0:window.navigator)!=null&&$r.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function re(e){return typeof e=="function"?e():C(e)}function hd(e,l){function n(...t){return new Promise((a,r)=>{Promise.resolve(e(()=>l.apply(this,t),{fn:l,thisArg:this,args:t})).then(a).catch(r)})}return n}const Gp=e=>e();function md(e=Gp){const l=ns(!0);function n(){l.value=!1}function t(){l.value=!0}return{isActive:l,pause:n,resume:t,eventFilter:(...r)=>{l.value&&e(...r)}}}function vd(e){return e}function Bd(e,l){var n;if(typeof e=="number")return e+l;const t=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",a=e.slice(t.length),r=parseFloat(t)+l;return Number.isNaN(r)?e:r+a}function Ad(e,l){let n,t,a;const r=ns(!0),c=()=>{r.value=!0,a()};js(e,c,{flush:"sync"});const p=Jn(l)?l:l.get,i=Jn(l)?void 0:l.set,u=Gc((y,d)=>(t=y,a=d,{get(){return r.value&&(n=p(),r.value=!1),t(),n},set(f){i==null||i(f)}}));return Object.isExtensible(u)&&(u.trigger=c),u}function nl(e){return l8()?(n8(e),!0):!1}function _d(e){if(!Cs(e))return ee(e);const l=new Proxy({},{get(n,t,a){return C(Reflect.get(e.value,t,a))},set(n,t,a){return Cs(e.value[t])&&!Cs(a)?e.value[t].value=a:e.value[t]=a,!0},deleteProperty(n,t){return Reflect.deleteProperty(e.value,t)},has(n,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return ee(l)}function Qp(e){return typeof e=="function"?O(e):ns(e)}var gd=Object.defineProperty,Dd=Object.defineProperties,Cd=Object.getOwnPropertyDescriptors,Sr=Object.getOwnPropertySymbols,Ed=Object.prototype.hasOwnProperty,Fd=Object.prototype.propertyIsEnumerable,Pr=(e,l,n)=>l in e?gd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,kd=(e,l)=>{for(var n in l||(l={}))Ed.call(l,n)&&Pr(e,n,l[n]);if(Sr)for(var n of Sr(l))Fd.call(l,n)&&Pr(e,n,l[n]);return e},xd=(e,l)=>Dd(e,Cd(l));function bd(e){if(!Cs(e))return O8(e);const l=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)l[n]=Gc(()=>({get(){return e.value[n]},set(t){if(Array.isArray(e.value)){const a=[...e.value];a[n]=t,e.value=a}else{const a=xd(kd({},e.value),{[n]:t});Object.setPrototypeOf(a,e.value),e.value=a}}}));return l}function $a(e,l=!0){ql()?Jo(e):l?e():Pe(e)}function wd(e,l=1e3,n={}){const{immediate:t=!0,immediateCallback:a=!1}=n;let r=null;const c=ns(!1);function p(){r&&(clearInterval(r),r=null)}function i(){c.value=!1,p()}function u(){C(l)<=0||(c.value=!0,a&&e(),p(),r=setInterval(e,re(l)))}if(t&&Ve&&u(),Cs(l)||Jn(l)){const y=js(l,()=>{c.value&&Ve&&u()});nl(y)}return nl(i),{isActive:c,pause:i,resume:u}}function $d(e,l,n={}){const{immediate:t=!0}=n,a=ns(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function p(){a.value=!1,c()}function i(...u){c(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,e(...u)},re(l))}return t&&(a.value=!0,Ve&&i()),nl(p),{isPending:a,start:i,stop:p}}function Xp(e=!1,l={}){const{truthyValue:n=!0,falsyValue:t=!1}=l,a=Cs(e),r=ns(e);function c(p){if(arguments.length)return r.value=p,r.value;{const i=re(n);return r.value=r.value===i?re(t):i,r.value}}return a?c:[r,c]}var Vr=Object.getOwnPropertySymbols,Sd=Object.prototype.hasOwnProperty,Pd=Object.prototype.propertyIsEnumerable,Vd=(e,l)=>{var n={};for(var t in e)Sd.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&Vr)for(var t of Vr(e))l.indexOf(t)<0&&Pd.call(e,t)&&(n[t]=e[t]);return n};function Od(e,l,n={}){const t=n,{eventFilter:a=Gp}=t,r=Vd(t,["eventFilter"]);return js(e,hd(a,l),r)}var Ld=Object.defineProperty,Td=Object.defineProperties,Md=Object.getOwnPropertyDescriptors,$o=Object.getOwnPropertySymbols,si=Object.prototype.hasOwnProperty,ei=Object.prototype.propertyIsEnumerable,Or=(e,l,n)=>l in e?Ld(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,Nd=(e,l)=>{for(var n in l||(l={}))si.call(l,n)&&Or(e,n,l[n]);if($o)for(var n of $o(l))ei.call(l,n)&&Or(e,n,l[n]);return e},Rd=(e,l)=>Td(e,Md(l)),Id=(e,l)=>{var n={};for(var t in e)si.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&$o)for(var t of $o(e))l.indexOf(t)<0&&ei.call(e,t)&&(n[t]=e[t]);return n};function jd(e,l,n={}){const t=n,{eventFilter:a}=t,r=Id(t,["eventFilter"]),{eventFilter:c,pause:p,resume:i,isActive:u}=md(a);return{stop:Od(e,l,Rd(Nd({},r),{eventFilter:c})),pause:p,resume:i,isActive:u}}function il(e){var l;const n=re(e);return(l=n==null?void 0:n.$el)!=null?l:n}const pe=Ve?window:void 0,li=Ve?window.document:void 0,Hd=Ve?window.navigator:void 0;function $s(...e){let l,n,t,a;if(Yp(e[0])||Array.isArray(e[0])?([n,t,a]=e,l=pe):[l,n,t,a]=e,!l)return Zp;Array.isArray(n)||(n=[n]),Array.isArray(t)||(t=[t]);const r=[],c=()=>{r.forEach(y=>y()),r.length=0},p=(y,d,f)=>(y.addEventListener(d,f,a),()=>y.removeEventListener(d,f,a)),i=js(()=>il(l),y=>{c(),y&&r.push(...n.flatMap(d=>t.map(f=>p(y,d,f))))},{immediate:!0,flush:"post"}),u=()=>{i(),c()};return nl(u),u}function zd(e,l,n={}){const{window:t=pe,ignore:a=[],capture:r=!0,detectIframe:c=!1}=n;if(!t)return;let p=!0,i;const u=m=>a.some(v=>{if(typeof v=="string")return Array.from(t.document.querySelectorAll(v)).some(g=>g===m.target||m.composedPath().includes(g));{const g=il(v);return g&&(m.target===g||m.composedPath().includes(g))}}),y=m=>{t.clearTimeout(i);const v=il(e);if(!(!v||v===m.target||m.composedPath().includes(v))){if(m.detail===0&&(p=!u(m)),!p){p=!0;return}l(m)}},d=[$s(t,"click",y,{passive:!0,capture:r}),$s(t,"pointerdown",m=>{const v=il(e);v&&(p=!m.composedPath().includes(v)&&!u(m))},{passive:!0}),$s(t,"pointerup",m=>{if(m.button===0){const v=m.composedPath();m.composedPath=()=>v,i=t.setTimeout(()=>y(m),50)}},{passive:!0}),c&&$s(t,"blur",m=>{var v;const g=il(e);((v=t.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(g!=null&&g.contains(t.document.activeElement))&&l(m)})].filter(Boolean);return()=>d.forEach(m=>m())}const Wd=e=>typeof e=="function"?e:typeof e=="string"?l=>l.key===e:Array.isArray(e)?l=>e.includes(l.key):()=>!0;function Ud(...e){let l,n,t={};e.length===3?(l=e[0],n=e[1],t=e[2]):e.length===2?typeof e[1]=="object"?(l=!0,n=e[0],t=e[1]):(l=e[0],n=e[1]):(l=!0,n=e[0]);const{target:a=pe,eventName:r="keydown",passive:c=!1}=t,p=Wd(l);return $s(a,r,u=>{p(u)&&n(u)},c)}function qd(e={}){var l;const{window:n=pe}=e,t=(l=e.document)!=null?l:n==null?void 0:n.document,a=Ad(()=>null,()=>t==null?void 0:t.activeElement);return n&&($s(n,"blur",r=>{r.relatedTarget===null&&a.trigger()},!0),$s(n,"focus",a.trigger,!0)),a}function st(e,l=!1){const n=ns(),t=()=>n.value=Boolean(e());return t(),$a(t,l),n}function nn(e,l={}){const{window:n=pe}=l,t=st(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const r=ns(!1),c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",p):a.removeListener(p))},p=()=>{t.value&&(c(),a=n.matchMedia(Qp(e).value),r.value=a.matches,"addEventListener"in a?a.addEventListener("change",p):a.addListener(p))};return vn(p),nl(()=>c()),r}const Kd={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Jd=Object.defineProperty,Lr=Object.getOwnPropertySymbols,Yd=Object.prototype.hasOwnProperty,Zd=Object.prototype.propertyIsEnumerable,Tr=(e,l,n)=>l in e?Jd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,Gd=(e,l)=>{for(var n in l||(l={}))Yd.call(l,n)&&Tr(e,n,l[n]);if(Lr)for(var n of Lr(l))Zd.call(l,n)&&Tr(e,n,l[n]);return e};function Qd(e,l={}){function n(p,i){let u=e[p];return i!=null&&(u=Bd(u,i)),typeof u=="number"&&(u=`${u}px`),u}const{window:t=pe}=l;function a(p){return t?t.matchMedia(p).matches:!1}const r=p=>nn(`(min-width: ${n(p)})`,l),c=Object.keys(e).reduce((p,i)=>(Object.defineProperty(p,i,{get:()=>r(i),enumerable:!0,configurable:!0}),p),{});return Gd({greater(p){return nn(`(min-width: ${n(p,.1)})`,l)},greaterOrEqual:r,smaller(p){return nn(`(max-width: ${n(p,-.1)})`,l)},smallerOrEqual(p){return nn(`(max-width: ${n(p)})`,l)},between(p,i){return nn(`(min-width: ${n(p)}) and (max-width: ${n(i,-.1)})`,l)},isGreater(p){return a(`(min-width: ${n(p,.1)})`)},isGreaterOrEqual(p){return a(`(min-width: ${n(p)})`)},isSmaller(p){return a(`(max-width: ${n(p,-.1)})`)},isSmallerOrEqual(p){return a(`(max-width: ${n(p)})`)},isInBetween(p,i){return a(`(min-width: ${n(p)}) and (max-width: ${n(i,-.1)})`)}},c)}function Xd(e={}){const{navigator:l=Hd,read:n=!1,source:t,copiedDuring:a=1500,legacy:r=!1}=e,c=["copy","cut"],p=st(()=>l&&"clipboard"in l),i=O(()=>p.value||r),u=ns(""),y=ns(!1),d=$d(()=>y.value=!1,a);function f(){p.value?l.clipboard.readText().then(_=>{u.value=_}):u.value=g()}if(i.value&&n)for(const _ of c)$s(_,f);async function m(_=re(t)){i.value&&_!=null&&(p.value?await l.clipboard.writeText(_):v(_),u.value=_,y.value=!0,d.start())}function v(_){const w=document.createElement("textarea");w.value=_??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function g(){var _,w,E;return(E=(w=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:w.toString())!=null?E:""}return{isSupported:i,text:u,copied:y,copy:m}}function s5(e){return JSON.parse(JSON.stringify(e))}const It=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jt="__vueuse_ssr_handlers__";It[jt]=It[jt]||{};const e5=It[jt];function l5(e,l){return e5[e]||l}function n5(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var o5=Object.defineProperty,Mr=Object.getOwnPropertySymbols,t5=Object.prototype.hasOwnProperty,a5=Object.prototype.propertyIsEnumerable,Nr=(e,l,n)=>l in e?o5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,Rr=(e,l)=>{for(var n in l||(l={}))t5.call(l,n)&&Nr(e,n,l[n]);if(Mr)for(var n of Mr(l))a5.call(l,n)&&Nr(e,n,l[n]);return e};const r5={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Oe(e,l,n,t={}){var a;const{flush:r="pre",deep:c=!0,listenToStorageChanges:p=!0,writeDefaults:i=!0,mergeDefaults:u=!1,shallow:y,window:d=pe,eventFilter:f,onError:m=z=>{console.error(z)}}=t,v=(y?Ie:ns)(l);if(!n)try{n=l5("getDefaultStorage",()=>{var z;return(z=pe)==null?void 0:z.localStorage})()}catch(z){m(z)}if(!n)return v;const g=re(l),_=n5(g),w=(a=t.serializer)!=null?a:r5[_],{pause:E,resume:$}=jd(v,()=>H(v.value),{flush:r,deep:c,eventFilter:f});return d&&p&&$s(d,"storage",K),K(),v;function H(z){try{if(z==null)n.removeItem(e);else{const ts=w.write(z),hs=n.getItem(e);hs!==ts&&(n.setItem(e,ts),d&&(d==null||d.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:hs,newValue:ts,storageArea:n}))))}}catch(ts){m(ts)}}function ss(z){const ts=z?z.newValue:n.getItem(e);if(ts==null)return i&&g!==null&&n.setItem(e,w.write(g)),g;if(!z&&u){const hs=w.read(ts);return Jn(u)?u(hs,g):_==="object"&&!Array.isArray(hs)?Rr(Rr({},g),hs):hs}else return typeof ts!="string"?ts:w.read(ts)}function K(z){if(!(z&&z.storageArea!==n)){if(z&&z.key==null){v.value=g;return}if(!(z&&z.key!==e)){E();try{v.value=ss(z)}catch(ts){m(ts)}finally{z?Pe($):$()}}}}}function c5(e){return nn("(prefers-color-scheme: dark)",e)}var p5=Object.defineProperty,i5=Object.defineProperties,u5=Object.getOwnPropertyDescriptors,Ir=Object.getOwnPropertySymbols,y5=Object.prototype.hasOwnProperty,d5=Object.prototype.propertyIsEnumerable,jr=(e,l,n)=>l in e?p5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,f5=(e,l)=>{for(var n in l||(l={}))y5.call(l,n)&&jr(e,n,l[n]);if(Ir)for(var n of Ir(l))d5.call(l,n)&&jr(e,n,l[n]);return e},h5=(e,l)=>i5(e,u5(l));function F6(e,l={}){var n,t,a;const r=(n=l.draggingElement)!=null?n:pe,c=(t=l.handle)!=null?t:e,p=ns((a=re(l.initialValue))!=null?a:{x:0,y:0}),i=ns(),u=v=>l.pointerTypes?l.pointerTypes.includes(v.pointerType):!0,y=v=>{re(l.preventDefault)&&v.preventDefault(),re(l.stopPropagation)&&v.stopPropagation()},d=v=>{var g;if(!u(v)||re(l.exact)&&v.target!==re(e))return;const _=re(e).getBoundingClientRect(),w={x:v.clientX-_.left,y:v.clientY-_.top};((g=l.onStart)==null?void 0:g.call(l,w,v))!==!1&&(i.value=w,y(v))},f=v=>{var g;u(v)&&i.value&&(p.value={x:v.clientX-i.value.x,y:v.clientY-i.value.y},(g=l.onMove)==null||g.call(l,p.value,v),y(v))},m=v=>{var g;u(v)&&i.value&&(i.value=void 0,(g=l.onEnd)==null||g.call(l,p.value,v),y(v))};return Ve&&($s(c,"pointerdown",d,!0),$s(r,"pointermove",f,!0),$s(r,"pointerup",m,!0)),h5(f5({},bd(p)),{position:p,isDragging:O(()=>!!i.value),style:O(()=>`left:${p.value.x}px;top:${p.value.y}px;`)})}var Hr=Object.getOwnPropertySymbols,m5=Object.prototype.hasOwnProperty,v5=Object.prototype.propertyIsEnumerable,B5=(e,l)=>{var n={};for(var t in e)m5.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&Hr)for(var t of Hr(e))l.indexOf(t)<0&&v5.call(e,t)&&(n[t]=e[t]);return n};function A5(e,l,n={}){const t=n,{window:a=pe}=t,r=B5(t,["window"]);let c;const p=st(()=>a&&"ResizeObserver"in a),i=()=>{c&&(c.disconnect(),c=void 0)},u=js(()=>il(e),d=>{i(),p.value&&a&&d&&(c=new ResizeObserver(l),c.observe(d,r))},{immediate:!0,flush:"post"}),y=()=>{i(),u()};return nl(y),{isSupported:p,stop:y}}function _5(e,l={}){const{immediate:n=!0,window:t=pe}=l,a=ns(!1);let r=0,c=null;function p(y){if(!a.value||!t)return;const d=y-r;e({delta:d,timestamp:y}),r=y,c=t.requestAnimationFrame(p)}function i(){!a.value&&t&&(a.value=!0,c=t.requestAnimationFrame(p))}function u(){a.value=!1,c!=null&&t&&(t.cancelAnimationFrame(c),c=null)}return n&&i(),nl(u),{isActive:a,pause:u,resume:i}}function g5(e,l={width:0,height:0},n={}){const{box:t="content-box"}=n,a=ns(l.width),r=ns(l.height);return A5(e,([c])=>{const p=t==="border-box"?c.borderBoxSize:t==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;p?(a.value=p.reduce((i,{inlineSize:u})=>i+u,0),r.value=p.reduce((i,{blockSize:u})=>i+u,0)):(a.value=c.contentRect.width,r.value=c.contentRect.height)},n),js(()=>il(e),c=>{a.value=c?l.width:0,r.value=c?l.height:0}),{width:a,height:r}}const zr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function D5(e,l={}){const{document:n=li,autoExit:t=!1}=l,a=e||(n==null?void 0:n.querySelector("html")),r=ns(!1);let c=zr[0];const p=st(()=>{if(n){for(const g of zr)if(g[1]in n)return c=g,!0}else return!1;return!1}),[i,u,y,,d]=c;async function f(){p.value&&(n!=null&&n[y]&&await n[u](),r.value=!1)}async function m(){if(!p.value)return;await f();const g=il(a);g&&(await g[i](),r.value=!0)}async function v(){r.value?await f():await m()}return n&&$s(n,d,()=>{r.value=!!(n!=null&&n[y])},!1),t&&nl(f),{isSupported:p,isFullscreen:r,enter:m,exit:f,toggle:v}}const C5={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function E5(e={}){const{reactive:l=!1,target:n=pe,aliasMap:t=C5,passive:a=!0,onEventFired:r=Zp}=e,c=ee(new Set),p={toJSON(){return{}},current:c},i=l?ee(p):p,u=new Set,y=new Set;function d(g,_){g in i&&(l?i[g]=_:i[g].value=_)}function f(){c.clear();for(const g of y)d(g,!1)}function m(g,_){var w,E;const $=(w=g.key)==null?void 0:w.toLowerCase(),ss=[(E=g.code)==null?void 0:E.toLowerCase(),$].filter(Boolean);$&&(_?c.add($):c.delete($));for(const K of ss)y.add(K),d(K,_);$==="meta"&&!_?(u.forEach(K=>{c.delete(K),d(K,!1)}),u.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&_&&[...c,...ss].forEach(K=>u.add(K))}$s(n,"keydown",g=>(m(g,!0),r(g)),{passive:a}),$s(n,"keyup",g=>(m(g,!1),r(g)),{passive:a}),$s("blur",f,{passive:!0}),$s("focus",f,{passive:!0});const v=new Proxy(i,{get(g,_,w){if(typeof _!="string")return Reflect.get(g,_,w);if(_=_.toLowerCase(),_ in t&&(_=t[_]),!(_ in i))if(/[+_-]/.test(_)){const $=_.split(/[+_-]/g).map(H=>H.trim());i[_]=O(()=>$.every(H=>C(v[H])))}else i[_]=ns(!1);const E=Reflect.get(g,_,w);return l?C(E):E}});return v}function k6(e={}){const{type:l="page",touch:n=!0,resetOnTouchEnds:t=!1,initialValue:a={x:0,y:0},window:r=pe,eventFilter:c}=e,p=ns(a.x),i=ns(a.y),u=ns(null),y=g=>{l==="page"?(p.value=g.pageX,i.value=g.pageY):l==="client"?(p.value=g.clientX,i.value=g.clientY):l==="movement"&&(p.value=g.movementX,i.value=g.movementY),u.value="mouse"},d=()=>{p.value=a.x,i.value=a.y},f=g=>{if(g.touches.length>0){const _=g.touches[0];l==="page"?(p.value=_.pageX,i.value=_.pageY):l==="client"&&(p.value=_.clientX,i.value=_.clientY),u.value="touch"}},m=g=>c===void 0?y(g):c(()=>y(g),{}),v=g=>c===void 0?f(g):c(()=>f(g),{});return r&&($s(r,"mousemove",m,{passive:!0}),$s(r,"dragover",m,{passive:!0}),n&&l!=="movement"&&($s(r,"touchstart",v,{passive:!0}),$s(r,"touchmove",v,{passive:!0}),t&&$s(r,"touchend",d,{passive:!0}))),{x:p,y:i,sourceType:u}}var Ge;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ge||(Ge={}));function F5(e,l={}){const n=Qp(e),{threshold:t=50,onSwipe:a,onSwipeEnd:r,onSwipeStart:c}=l,p=ee({x:0,y:0}),i=(K,z)=>{p.x=K,p.y=z},u=ee({x:0,y:0}),y=(K,z)=>{u.x=K,u.y=z},d=O(()=>p.x-u.x),f=O(()=>p.y-u.y),{max:m,abs:v}=Math,g=O(()=>m(v(d.value),v(f.value))>=t),_=ns(!1),w=ns(!1),E=O(()=>g.value?v(d.value)>v(f.value)?d.value>0?Ge.LEFT:Ge.RIGHT:f.value>0?Ge.UP:Ge.DOWN:Ge.NONE),$=K=>{var z,ts,hs;const fs=K.buttons===0,Ds=K.buttons===1;return(hs=(ts=(z=l.pointerTypes)==null?void 0:z.includes(K.pointerType))!=null?ts:fs||Ds)!=null?hs:!0},H=[$s(e,"pointerdown",K=>{var z,ts;if(!$(K))return;w.value=!0,(ts=(z=n.value)==null?void 0:z.style)==null||ts.setProperty("touch-action","none");const hs=K.target;hs==null||hs.setPointerCapture(K.pointerId);const{clientX:fs,clientY:Ds}=K;i(fs,Ds),y(fs,Ds),c==null||c(K)}),$s(e,"pointermove",K=>{if(!$(K)||!w.value)return;const{clientX:z,clientY:ts}=K;y(z,ts),!_.value&&g.value&&(_.value=!0),_.value&&(a==null||a(K))}),$s(e,"pointerup",K=>{var z,ts;$(K)&&(_.value&&(r==null||r(K,E.value)),w.value=!1,_.value=!1,(ts=(z=n.value)==null?void 0:z.style)==null||ts.setProperty("touch-action","initial"))})],ss=()=>H.forEach(K=>K());return{isSwiping:bl(_),direction:bl(E),posStart:bl(p),posEnd:bl(u),distanceX:d,distanceY:f,stop:ss}}let k5=0;function x6(e,l={}){const n=ns(!1),{document:t=li,immediate:a=!0,manual:r=!1,id:c=`vueuse_styletag_${++k5}`}=l,p=ns(e);let i=()=>{};const u=()=>{if(!t)return;const d=t.getElementById(c)||t.createElement("style");d.isConnected||(d.type="text/css",d.id=c,l.media&&(d.media=l.media),t.head.appendChild(d)),!n.value&&(i=js(p,f=>{d.textContent=f},{immediate:!0}),n.value=!0)},y=()=>{!t||!n.value||(i(),t.head.removeChild(t.getElementById(c)),n.value=!1)};return a&&!r&&$a(u),r||nl(y),{id:c,css:p,unload:y,load:u,isLoaded:bl(n)}}var x5=Object.defineProperty,Wr=Object.getOwnPropertySymbols,b5=Object.prototype.hasOwnProperty,w5=Object.prototype.propertyIsEnumerable,Ur=(e,l,n)=>l in e?x5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,$5=(e,l)=>{for(var n in l||(l={}))b5.call(l,n)&&Ur(e,n,l[n]);if(Wr)for(var n of Wr(l))w5.call(l,n)&&Ur(e,n,l[n]);return e};function b6(e={}){const{controls:l=!1,offset:n=0,immediate:t=!0,interval:a="requestAnimationFrame",callback:r}=e,c=ns(Rt()+n),p=()=>c.value=Rt()+n,i=r?()=>{p(),r(c.value)}:p,u=a==="requestAnimationFrame"?_5(i,{immediate:t}):wd(i,a,{immediate:t});return l?$5({timestamp:c},u):c}var S5=Object.defineProperty,qr=Object.getOwnPropertySymbols,P5=Object.prototype.hasOwnProperty,V5=Object.prototype.propertyIsEnumerable,Kr=(e,l,n)=>l in e?S5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,O5=(e,l)=>{for(var n in l||(l={}))P5.call(l,n)&&Kr(e,n,l[n]);if(qr)for(var n of qr(l))V5.call(l,n)&&Kr(e,n,l[n]);return e};const L5={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};O5({linear:vd},L5);function Me(e,l,n,t={}){var a,r,c;const{clone:p=!1,passive:i=!1,eventName:u,deep:y=!1,defaultValue:d}=t,f=ql(),m=n||(f==null?void 0:f.emit)||((a=f==null?void 0:f.$emit)==null?void 0:a.bind(f))||((c=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let v=u;l||(l="modelValue"),v=u||v||`update:${l.toString()}`;const g=w=>p?Jn(p)?p(w):s5(w):w,_=()=>fd(e[l])?g(e[l]):d;if(i){const w=_(),E=ns(w);return js(()=>e[l],$=>E.value=g($)),js(E,$=>{($!==e[l]||y)&&m(v,$)},{deep:y}),E}else return O({get(){return _()},set(w){m(v,w)}})}function w6({window:e=pe}={}){if(!e)return ns(!1);const l=ns(e.document.hasFocus());return $s(e,"blur",()=>{l.value=!1}),$s(e,"focus",()=>{l.value=!0}),l}function T5(e={}){const{window:l=pe,initialWidth:n=1/0,initialHeight:t=1/0,listenOrientation:a=!0,includeScrollbar:r=!0}=e,c=ns(n),p=ns(t),i=()=>{l&&(r?(c.value=l.innerWidth,p.value=l.innerHeight):(c.value=l.document.documentElement.clientWidth,p.value=l.document.documentElement.clientHeight))};return i(),$a(i),$s("resize",i,{passive:!0}),a&&$s("orientationchange",i,{passive:!0}),{width:c,height:p}}function M5(){return ni().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ni(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const N5=typeof Proxy=="function",R5="devtools-plugin:setup",I5="plugin:settings:set";let Zl,Ht;function j5(){var e;return Zl!==void 0||(typeof window<"u"&&window.performance?(Zl=!0,Ht=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Zl=!0,Ht=global.perf_hooks.performance):Zl=!1),Zl}function H5(){return j5()?Ht.now():Date.now()}class z5{constructor(l,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=l,this.hook=n;const t={};if(l.settings)for(const c in l.settings){const p=l.settings[c];t[c]=p.defaultValue}const a=`__vue-devtools-plugin-settings__${l.id}`;let r=Object.assign({},t);try{const c=localStorage.getItem(a),p=JSON.parse(c);Object.assign(r,p)}catch{}this.fallbacks={getSettings(){return r},setSettings(c){try{localStorage.setItem(a,JSON.stringify(c))}catch{}r=c},now(){return H5()}},n&&n.on(I5,(c,p)=>{c===this.plugin.id&&this.fallbacks.setSettings(p)}),this.proxiedOn=new Proxy({},{get:(c,p)=>this.target?this.target.on[p]:(...i)=>{this.onQueue.push({method:p,args:i})}}),this.proxiedTarget=new Proxy({},{get:(c,p)=>this.target?this.target[p]:p==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(p)?(...i)=>(this.targetQueue.push({method:p,args:i,resolve:()=>{}}),this.fallbacks[p](...i)):(...i)=>new Promise(u=>{this.targetQueue.push({method:p,args:i,resolve:u})})})}async setRealTarget(l){this.target=l;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function W5(e,l){const n=e,t=ni(),a=M5(),r=N5&&n.enableEarlyProxy;if(a&&(t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))a.emit(R5,e,l);else{const c=r?new z5(n,a):null;(t.__VUE_DEVTOOLS_PLUGINS__=t.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:l,proxy:c}),c&&l(c.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Je=typeof window<"u";function U5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ws=Object.assign;function pt(e,l){const n={};for(const t in l){const a=l[t];n[t]=ge(a)?a.map(e):e(a)}return n}const Nn=()=>{},ge=Array.isArray;function gs(e){const l=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(l))}const q5=/\/$/,K5=e=>e.replace(q5,"");function it(e,l,n="/"){let t,a={},r="",c="";const p=l.indexOf("#");let i=l.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(t=l.slice(0,i),r=l.slice(i+1,p>-1?p:l.length),a=e(r)),p>-1&&(t=t||l.slice(0,p),c=l.slice(p,l.length)),t=Z5(t??l,n),{fullPath:t+(r&&"?")+r+c,path:t,query:a,hash:c}}function J5(e,l){const n=l.query?e(l.query):"";return l.path+(n&&"?")+n+(l.hash||"")}function Jr(e,l){return!l||!e.toLowerCase().startsWith(l.toLowerCase())?e:e.slice(l.length)||"/"}function Yr(e,l,n){const t=l.matched.length-1,a=n.matched.length-1;return t>-1&&t===a&&vl(l.matched[t],n.matched[a])&&oi(l.params,n.params)&&e(l.query)===e(n.query)&&l.hash===n.hash}function vl(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function oi(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const n in e)if(!Y5(e[n],l[n]))return!1;return!0}function Y5(e,l){return ge(e)?Zr(e,l):ge(l)?Zr(l,e):e===l}function Zr(e,l){return ge(l)?e.length===l.length&&e.every((n,t)=>n===l[t]):e.length===1&&e[0]===l}function Z5(e,l){if(e.startsWith("/"))return e;if(!l.startsWith("/"))return gs(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${l}". It should look like "/${l}".`),e;if(!e)return l;const n=l.split("/"),t=e.split("/");let a=n.length-1,r,c;for(r=0;r<t.length;r++)if(c=t[r],c!==".")if(c==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+t.slice(r-(r===t.length?1:0)).join("/")}var Yn;(function(e){e.pop="pop",e.push="push"})(Yn||(Yn={}));var Rn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Rn||(Rn={}));function G5(e){if(!e)if(Je){const l=document.querySelector("base");e=l&&l.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),K5(e)}const Q5=/^[^#]+#/;function X5(e,l){return e.replace(Q5,"#")+l}function sf(e,l){const n=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:l.behavior,left:t.left-n.left-(l.left||0),top:t.top-n.top-(l.top||0)}}const et=()=>({left:window.pageXOffset,top:window.pageYOffset});function ef(e){let l;if("el"in e){const n=e.el,t=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!t||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(t&&r){gs(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{gs(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof n=="string"?t?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a){gs(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}l=sf(a,e)}else l=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function Gr(e,l){return(history.state?history.state.position-l:-1)+e}const zt=new Map;function lf(e,l){zt.set(e,l)}function nf(e){const l=zt.get(e);return zt.delete(e),l}let of=()=>location.protocol+"//"+location.host;function ti(e,l){const{pathname:n,search:t,hash:a}=l,r=e.indexOf("#");if(r>-1){let p=a.includes(e.slice(r))?e.slice(r).length:1,i=a.slice(p);return i[0]!=="/"&&(i="/"+i),Jr(i,"")}return Jr(n,e)+t+a}function tf(e,l,n,t){let a=[],r=[],c=null;const p=({state:f})=>{const m=ti(e,location),v=n.value,g=l.value;let _=0;if(f){if(n.value=m,l.value=f,c&&c===v){c=null;return}_=g?f.position-g.position:0}else t(m);a.forEach(w=>{w(n.value,v,{delta:_,type:Yn.pop,direction:_?_>0?Rn.forward:Rn.back:Rn.unknown})})};function i(){c=n.value}function u(f){a.push(f);const m=()=>{const v=a.indexOf(f);v>-1&&a.splice(v,1)};return r.push(m),m}function y(){const{history:f}=window;f.state&&f.replaceState(ws({},f.state,{scroll:et()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",y),{pauseListeners:i,listen:u,destroy:d}}function Qr(e,l,n,t=!1,a=!1){return{back:e,current:l,forward:n,replaced:t,position:window.history.length,scroll:a?et():null}}function af(e){const{history:l,location:n}=window,t={value:ti(e,n)},a={value:l.state};a.value||r(t.value,{back:null,current:t.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function r(i,u,y){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+i:of()+e+i;try{l[y?"replaceState":"pushState"](u,"",f),a.value=u}catch(m){gs("Error with push/replace State",m),n[y?"replace":"assign"](f)}}function c(i,u){const y=ws({},l.state,Qr(a.value.back,i,a.value.forward,!0),u,{position:a.value.position});r(i,y,!0),t.value=i}function p(i,u){const y=ws({},a.value,l.state,{forward:i,scroll:et()});l.state||gs(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(y.current,y,!0);const d=ws({},Qr(t.value,i,null),{position:y.position+1},u);r(i,d,!1),t.value=i}return{location:t,state:a,push:p,replace:c}}function rf(e){e=G5(e);const l=af(e),n=tf(e,l.state,l.location,l.replace);function t(r,c=!0){c||n.pauseListeners(),history.go(r)}const a=ws({location:"",base:e,go:t,createHref:X5.bind(null,e)},l,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>l.state.value}),a}function cf(e){return typeof e=="string"||e&&typeof e=="object"}function ai(e){return typeof e=="string"||typeof e=="symbol"}const al={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ri=Symbol("navigation failure");var Xr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Xr||(Xr={}));const pf={[1]({location:e,currentLocation:l}){return`No match for
 ${JSON.stringify(e)}${l?`
while being at
`+JSON.stringify(l):""}`},[2]({from:e,to:l}){return`Redirected from "${e.fullPath}" to "${yf(l)}" via a navigation guard.`},[4]({from:e,to:l}){return`Navigation aborted from "${e.fullPath}" to "${l.fullPath}" via a navigation guard.`},[8]({from:e,to:l}){return`Navigation cancelled from "${e.fullPath}" to "${l.fullPath}" with a new navigation.`},[16]({from:e,to:l}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function hn(e,l){return ws(new Error(pf[e](l)),{type:e,[ri]:!0},l)}function ze(e,l){return e instanceof Error&&ri in e&&(l==null||!!(e.type&l))}const uf=["params","query","hash"];function yf(e){if(typeof e=="string")return e;if("path"in e)return e.path;const l={};for(const n of uf)n in e&&(l[n]=e[n]);return JSON.stringify(l,null,2)}const sc="[^/]+?",df={sensitive:!1,strict:!1,start:!0,end:!0},ff=/[.+*?^${}()[\]/\\]/g;function hf(e,l){const n=ws({},df,l),t=[];let a=n.start?"^":"";const r=[];for(const u of e){const y=u.length?[]:[90];n.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(a+="/"),a+=f.value.replace(ff,"\\$&"),m+=40;else if(f.type===1){const{value:v,repeatable:g,optional:_,regexp:w}=f;r.push({name:v,repeatable:g,optional:_});const E=w||sc;if(E!==sc){m+=10;try{new RegExp(`(${E})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+H.message)}}let $=g?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||($=_&&u.length<2?`(?:/${$})`:"/"+$),_&&($+="?"),a+=$,m+=20,_&&(m+=-8),g&&(m+=-20),E===".*"&&(m+=-50)}y.push(m)}t.push(y)}if(n.strict&&n.end){const u=t.length-1;t[u][t[u].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const c=new RegExp(a,n.sensitive?"":"i");function p(u){const y=u.match(c),d={};if(!y)return null;for(let f=1;f<y.length;f++){const m=y[f]||"",v=r[f-1];d[v.name]=m&&v.repeatable?m.split("/"):m}return d}function i(u){let y="",d=!1;for(const f of e){(!d||!y.endsWith("/"))&&(y+="/"),d=!1;for(const m of f)if(m.type===0)y+=m.value;else if(m.type===1){const{value:v,repeatable:g,optional:_}=m,w=v in u?u[v]:"";if(ge(w)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=ge(w)?w.join("/"):w;if(!E)if(_)f.length<2&&(y.endsWith("/")?y=y.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);y+=E}}return y||"/"}return{re:c,score:t,keys:r,parse:p,stringify:i}}function mf(e,l){let n=0;for(;n<e.length&&n<l.length;){const t=l[n]-e[n];if(t)return t;n++}return e.length<l.length?e.length===1&&e[0]===40+40?-1:1:e.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function vf(e,l){let n=0;const t=e.score,a=l.score;for(;n<t.length&&n<a.length;){const r=mf(t[n],a[n]);if(r)return r;n++}if(Math.abs(a.length-t.length)===1){if(ec(t))return 1;if(ec(a))return-1}return a.length-t.length}function ec(e){const l=e[e.length-1];return e.length>0&&l[l.length-1]<0}const Bf={type:0,value:""},Af=/[a-zA-Z0-9_]/;function _f(e){if(!e)return[[]];if(e==="/")return[[Bf]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function l(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,t=n;const a=[];let r;function c(){r&&a.push(r),r=[]}let p=0,i,u="",y="";function d(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(i==="*"||i==="+")&&l(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:y,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):l("Invalid state to consume buffer"),u="")}function f(){u+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&n!==2){t=n,n=4;continue}switch(n){case 0:i==="/"?(u&&d(),c()):i===":"?(d(),n=1):f();break;case 4:f(),n=t;break;case 1:i==="("?n=2:Af.test(i)?f():(d(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+i:n=3:y+=i;break;case 3:d(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,y="";break;default:l("Unknown state");break}}return n===2&&l(`Unfinished custom RegExp for param "${u}"`),d(),c(),a}function gf(e,l,n){const t=hf(_f(e.path),n);{const r=new Set;for(const c of t.keys)r.has(c.name)&&gs(`Found duplicated params with name "${c.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(c.name)}const a=ws(t,{record:e,parent:l,children:[],alias:[]});return l&&!a.record.aliasOf==!l.record.aliasOf&&l.children.push(a),a}function Df(e,l){const n=[],t=new Map;l=oc({strict:!1,end:!0,sensitive:!1},l);function a(y){return t.get(y)}function r(y,d,f){const m=!f,v=Cf(y);xf(v,d),v.aliasOf=f&&f.record;const g=oc(l,y),_=[v];if("alias"in y){const $=typeof y.alias=="string"?[y.alias]:y.alias;for(const H of $)_.push(ws({},v,{components:f?f.record.components:v.components,path:H,aliasOf:f?f.record:v}))}let w,E;for(const $ of _){const{path:H}=$;if(d&&H[0]!=="/"){const ss=d.record.path,K=ss[ss.length-1]==="/"?"":"/";$.path=d.record.path+(H&&K+H)}if($.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(w=gf($,d,g),d&&H[0]==="/"&&bf(w,d),f?(f.alias.push(w),kf(f,w)):(E=E||w,E!==w&&E.alias.push(w),m&&y.name&&!nc(w)&&c(y.name)),v.children){const ss=v.children;for(let K=0;K<ss.length;K++)r(ss[K],w,f&&f.children[K])}f=f||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&i(w)}return E?()=>{c(E)}:Nn}function c(y){if(ai(y)){const d=t.get(y);d&&(t.delete(y),n.splice(n.indexOf(d),1),d.children.forEach(c),d.alias.forEach(c))}else{const d=n.indexOf(y);d>-1&&(n.splice(d,1),y.record.name&&t.delete(y.record.name),y.children.forEach(c),y.alias.forEach(c))}}function p(){return n}function i(y){let d=0;for(;d<n.length&&vf(y,n[d])>=0&&(y.record.path!==n[d].record.path||!ci(y,n[d]));)d++;n.splice(d,0,y),y.record.name&&!nc(y)&&t.set(y.record.name,y)}function u(y,d){let f,m={},v,g;if("name"in y&&y.name){if(f=t.get(y.name),!f)throw hn(1,{location:y});{const E=Object.keys(y.params||{}).filter($=>!f.keys.find(H=>H.name===$));E.length&&gs(`Discarded invalid param(s) "${E.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}g=f.record.name,m=ws(lc(d.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),y.params&&lc(y.params,f.keys.map(E=>E.name))),v=f.stringify(m)}else if("path"in y)v=y.path,v.startsWith("/")||gs(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(E=>E.re.test(v)),f&&(m=f.parse(v),g=f.record.name);else{if(f=d.name?t.get(d.name):n.find(E=>E.re.test(d.path)),!f)throw hn(1,{location:y,currentLocation:d});g=f.record.name,m=ws({},d.params,y.params),v=f.stringify(m)}const _=[];let w=f;for(;w;)_.unshift(w.record),w=w.parent;return{name:g,path:v,params:m,matched:_,meta:Ff(_)}}return e.forEach(y=>r(y)),{addRoute:r,resolve:u,removeRoute:c,getRoutes:p,getRecordMatcher:a}}function lc(e,l){const n={};for(const t of l)t in e&&(n[t]=e[t]);return n}function Cf(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ef(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ef(e){const l={},n=e.props||!1;if("component"in e)l.default=n;else for(const t in e.components)l[t]=typeof n=="boolean"?n:n[t];return l}function nc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ff(e){return e.reduce((l,n)=>ws(l,n.meta),{})}function oc(e,l){const n={};for(const t in e)n[t]=t in l?l[t]:e[t];return n}function Wt(e,l){return e.name===l.name&&e.optional===l.optional&&e.repeatable===l.repeatable}function kf(e,l){for(const n of e.keys)if(!n.optional&&!l.keys.find(Wt.bind(null,n)))return gs(`Alias "${l.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of l.keys)if(!n.optional&&!e.keys.find(Wt.bind(null,n)))return gs(`Alias "${l.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function xf(e,l){l&&l.record.name&&!e.name&&!e.path&&gs(`The route named "${String(l.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function bf(e,l){for(const n of l.keys)if(!e.keys.find(Wt.bind(null,n)))return gs(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${l.record.path}".`)}function ci(e,l){return l.children.some(n=>n===e||ci(e,n))}const pi=/#/g,wf=/&/g,$f=/\//g,Sf=/=/g,Pf=/\?/g,ii=/\+/g,Vf=/%5B/g,Of=/%5D/g,ui=/%5E/g,Lf=/%60/g,yi=/%7B/g,Tf=/%7C/g,di=/%7D/g,Mf=/%20/g;function Sa(e){return encodeURI(""+e).replace(Tf,"|").replace(Vf,"[").replace(Of,"]")}function Nf(e){return Sa(e).replace(yi,"{").replace(di,"}").replace(ui,"^")}function Ut(e){return Sa(e).replace(ii,"%2B").replace(Mf,"+").replace(pi,"%23").replace(wf,"%26").replace(Lf,"`").replace(yi,"{").replace(di,"}").replace(ui,"^")}function Rf(e){return Ut(e).replace(Sf,"%3D")}function If(e){return Sa(e).replace(pi,"%23").replace(Pf,"%3F")}function jf(e){return e==null?"":If(e).replace($f,"%2F")}function Zn(e){try{return decodeURIComponent(""+e)}catch{gs(`Error decoding "${e}". Using original value`)}return""+e}function Hf(e){const l={};if(e===""||e==="?")return l;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<t.length;++a){const r=t[a].replace(ii," "),c=r.indexOf("="),p=Zn(c<0?r:r.slice(0,c)),i=c<0?null:Zn(r.slice(c+1));if(p in l){let u=l[p];ge(u)||(u=l[p]=[u]),u.push(i)}else l[p]=i}return l}function tc(e){let l="";for(let n in e){const t=e[n];if(n=Rf(n),t==null){t!==void 0&&(l+=(l.length?"&":"")+n);continue}(ge(t)?t.map(r=>r&&Ut(r)):[t&&Ut(t)]).forEach(r=>{r!==void 0&&(l+=(l.length?"&":"")+n,r!=null&&(l+="="+r))})}return l}function zf(e){const l={};for(const n in e){const t=e[n];t!==void 0&&(l[n]=ge(t)?t.map(a=>a==null?null:""+a):t==null?t:""+t)}return l}const Wf=Symbol("router view location matched"),ac=Symbol("router view depth"),Pa=Symbol("router"),fi=Symbol("route location"),qt=Symbol("router view location");function Cn(){let e=[];function l(t){return e.push(t),()=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:l,list:()=>e,reset:n}}function cl(e,l,n,t,a){const r=t&&(t.enterCallbacks[a]=t.enterCallbacks[a]||[]);return()=>new Promise((c,p)=>{const i=d=>{d===!1?p(hn(4,{from:n,to:l})):d instanceof Error?p(d):cf(d)?p(hn(2,{from:l,to:d})):(r&&t.enterCallbacks[a]===r&&typeof d=="function"&&r.push(d),c())},u=e.call(t&&t.instances[a],l,n,Uf(i,l,n));let y=Promise.resolve(u);if(e.length<3&&(y=y.then(i)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)y=y.then(f=>i._called?f:(gs(d),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!i._called){gs(d),p(new Error("Invalid navigation guard"));return}}y.catch(d=>p(d))})}function Uf(e,l,n){let t=0;return function(){t++===1&&gs(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${l.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,t===1&&e.apply(null,arguments)}}function ut(e,l,n,t){const a=[];for(const r of e){!r.components&&!r.children.length&&gs(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const c in r.components){let p=r.components[c];{if(!p||typeof p!="object"&&typeof p!="function")throw gs(`Component "${c}" in record with path "${r.path}" is not a valid component. Received "${String(p)}".`),new Error("Invalid route component");if("then"in p){gs(`Component "${c}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const i=p;p=()=>i}else p.__asyncLoader&&!p.__warnedDefineAsync&&(p.__warnedDefineAsync=!0,gs(`Component "${c}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(l!=="beforeRouteEnter"&&!r.instances[c]))if(qf(p)){const u=(p.__vccOpts||p)[l];u&&a.push(cl(u,n,t,r,c))}else{let i=p();"catch"in i||(gs(`Component "${c}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),i=Promise.resolve(i)),a.push(()=>i.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${r.path}"`));const y=U5(u)?u.default:u;r.components[c]=y;const f=(y.__vccOpts||y)[l];return f&&cl(f,n,t,r,c)()}))}}}return a}function qf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function rc(e){const l=b(Pa),n=b(fi),t=O(()=>l.resolve(C(e.to))),a=O(()=>{const{matched:i}=t.value,{length:u}=i,y=i[u-1],d=n.matched;if(!y||!d.length)return-1;const f=d.findIndex(vl.bind(null,y));if(f>-1)return f;const m=cc(i[u-2]);return u>1&&cc(y)===m&&d[d.length-1].path!==m?d.findIndex(vl.bind(null,i[u-2])):f}),r=O(()=>a.value>-1&&Zf(n.params,t.value.params)),c=O(()=>a.value>-1&&a.value===n.matched.length-1&&oi(n.params,t.value.params));function p(i={}){return Yf(i)?l[C(e.replace)?"replace":"push"](C(e.to)).catch(Nn):Promise.resolve()}if(Je){const i=ql();if(i){const u={route:t.value,isActive:r.value,isExactActive:c.value};i.__vrl_devtools=i.__vrl_devtools||[],i.__vrl_devtools.push(u),vn(()=>{u.route=t.value,u.isActive=r.value,u.isExactActive=c.value},{flush:"post"})}}return{route:t,href:O(()=>t.value.href),isActive:r,isExactActive:c,navigate:p}}const Kf=Is({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rc,setup(e,{slots:l}){const n=ee(rc(e)),{options:t}=b(Pa),a=O(()=>({[pc(e.activeClass,t.linkActiveClass,"router-link-active")]:n.isActive,[pc(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=l.default&&l.default(n);return e.custom?r:Xo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},r)}}}),Jf=Kf;function Yf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const l=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return e.preventDefault&&e.preventDefault(),!0}}function Zf(e,l){for(const n in l){const t=l[n],a=e[n];if(typeof t=="string"){if(t!==a)return!1}else if(!ge(a)||a.length!==t.length||t.some((r,c)=>r!==a[c]))return!1}return!0}function cc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const pc=(e,l,n)=>e??l??n,Gf=Is({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:l,slots:n}){Xf();const t=b(qt),a=O(()=>e.route||t.value),r=b(ac,0),c=O(()=>{let u=C(r);const{matched:y}=a.value;let d;for(;(d=y[u])&&!d.components;)u++;return u}),p=O(()=>a.value.matched[c.value]);ve(ac,O(()=>c.value+1)),ve(Wf,p),ve(qt,a);const i=ns();return js(()=>[i.value,p.value,e.name],([u,y,d],[f,m,v])=>{y&&(y.instances[d]=u,m&&m!==y&&u&&u===f&&(y.leaveGuards.size||(y.leaveGuards=m.leaveGuards),y.updateGuards.size||(y.updateGuards=m.updateGuards))),u&&y&&(!m||!vl(y,m)||!f)&&(y.enterCallbacks[d]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=a.value,y=e.name,d=p.value,f=d&&d.components[y];if(!f)return ic(n.default,{Component:f,route:u});const m=d.props[y],v=m?m===!0?u.params:typeof m=="function"?m(u):m:null,_=Xo(f,ws({},v,l,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(d.instances[y]=null)},ref:i}));if(Je&&_.ref){const w={depth:c.value,name:d.name,path:d.path,meta:d.meta};(ge(_.ref)?_.ref.map($=>$.i):[_.ref.i]).forEach($=>{$.__vrv_devtools=w})}return ic(n.default,{Component:_,route:u})||_}}});function ic(e,l){if(!e)return null;const n=e(l);return n.length===1?n[0]:n}const Qf=Gf;function Xf(){const e=ql(),l=e.parent&&e.parent.type.name;if(l&&(l==="KeepAlive"||l.includes("Transition"))){const n=l==="KeepAlive"?"keep-alive":"transition";gs(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function En(e,l){const n=ws({},e,{matched:e.matched.map(t=>ch(t,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:l,value:n}}}function po(e){return{_custom:{display:e}}}let sh=0;function eh(e,l,n){if(l.__hasDevtools)return;l.__hasDevtools=!0;const t=sh++;W5({id:"org.vuejs.router"+(t?"."+t:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((y,d)=>{y.instanceData&&y.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:En(l.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:y,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;y.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:hi})}ge(d.__vrl_devtools)&&(d.__devtoolsApi=a,d.__vrl_devtools.forEach(f=>{let m=Bi,v="";f.isExactActive?(m=vi,v="This is exactly active"):f.isActive&&(m=mi,v="This link is active"),y.tags.push({label:f.route.path,textColor:0,tooltip:v,backgroundColor:m})}))}),js(l.currentRoute,()=>{i(),a.notifyComponentUpdate(),a.sendInspectorTree(p),a.sendInspectorState(p)});const r="router:navigations:"+t;a.addTimelineLayer({id:r,label:`Router${t?" "+t:""} Navigations`,color:4237508}),l.onError((y,d)=>{a.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:a.now(),data:{error:y},groupId:d.meta.__navigationId}})});let c=0;l.beforeEach((y,d)=>{const f={guard:po("beforeEach"),from:En(d,"Current Location during this navigation"),to:En(y,"Target location")};Object.defineProperty(y.meta,"__navigationId",{value:c++}),a.addTimelineEvent({layerId:r,event:{time:a.now(),title:"Start of navigation",subtitle:y.fullPath,data:f,groupId:y.meta.__navigationId}})}),l.afterEach((y,d,f)=>{const m={guard:po("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=po("❌")):m.status=po("✅"),m.from=En(d,"Current Location during this navigation"),m.to=En(y,"Target location"),a.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:y.fullPath,time:a.now(),data:m,logType:f?"warning":"default",groupId:y.meta.__navigationId}})});const p="router-inspector:"+t;a.addInspector({id:p,label:"Routes"+(t?" "+t:""),icon:"book",treeFilterPlaceholder:"Search routes"});function i(){if(!u)return;const y=u;let d=n.getRoutes().filter(f=>!f.parent);d.forEach(gi),y.filter&&(d=d.filter(f=>Kt(f,y.filter.toLowerCase()))),d.forEach(f=>_i(f,l.currentRoute.value)),y.rootNodes=d.map(Ai)}let u;a.on.getInspectorTree(y=>{u=y,y.app===e&&y.inspectorId===p&&i()}),a.on.getInspectorState(y=>{if(y.app===e&&y.inspectorId===p){const f=n.getRoutes().find(m=>m.record.__vd_id===y.nodeId);f&&(y.state={options:nh(f)})}}),a.sendInspectorTree(p),a.sendInspectorState(p)})}function lh(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function nh(e){const{record:l}=e,n=[{editable:!1,key:"path",value:l.path}];return l.name!=null&&n.push({editable:!1,key:"name",value:l.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(t=>`${t.name}${lh(t)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),l.redirect!=null&&n.push({editable:!1,key:"redirect",value:l.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(t=>t.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(t=>t.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const hi=15485081,mi=2450411,vi=8702998,oh=2282478,Bi=16486972,th=6710886;function Ai(e){const l=[],{record:n}=e;n.name!=null&&l.push({label:String(n.name),textColor:0,backgroundColor:oh}),n.aliasOf&&l.push({label:"alias",textColor:0,backgroundColor:Bi}),e.__vd_match&&l.push({label:"matches",textColor:0,backgroundColor:hi}),e.__vd_exactActive&&l.push({label:"exact",textColor:0,backgroundColor:vi}),e.__vd_active&&l.push({label:"active",textColor:0,backgroundColor:mi}),n.redirect&&l.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:th});let t=n.__vd_id;return t==null&&(t=String(ah++),n.__vd_id=t),{id:t,label:n.path,tags:l,children:e.children.map(Ai)}}let ah=0;const rh=/^\/(.*)\/([a-z]*)$/;function _i(e,l){const n=l.matched.length&&vl(l.matched[l.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=l.matched.some(t=>vl(t,e.record))),e.children.forEach(t=>_i(t,l))}function gi(e){e.__vd_match=!1,e.children.forEach(gi)}function Kt(e,l){const n=String(e.re).match(rh);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(l))return e.children.forEach(c=>Kt(c,l)),e.record.path!=="/"||l==="/"?(e.__vd_match=e.re.test(l),!0):!1;const a=e.record.path.toLowerCase(),r=Zn(a);return!l.startsWith("/")&&(r.includes(l)||a.includes(l))||r.startsWith(l)||a.startsWith(l)||e.record.name&&String(e.record.name).includes(l)?!0:e.children.some(c=>Kt(c,l))}function ch(e,l){const n={};for(const t in e)l.includes(t)||(n[t]=e[t]);return n}function ph(e){const l=Df(e.routes,e),n=e.parseQuery||Hf,t=e.stringifyQuery||tc,a=e.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Cn(),c=Cn(),p=Cn(),i=Ie(al);let u=al;Je&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=pt.bind(null,x=>""+x),d=pt.bind(null,jf),f=pt.bind(null,Zn);function m(x,es){let G,X;return ai(x)?(G=l.getRecordMatcher(x),X=es):X=x,l.addRoute(X,G)}function v(x){const es=l.getRecordMatcher(x);es?l.removeRoute(es):gs(`Cannot remove non-existent route "${String(x)}"`)}function g(){return l.getRoutes().map(x=>x.record)}function _(x){return!!l.getRecordMatcher(x)}function w(x,es){if(es=ws({},es||i.value),typeof x=="string"){const ps=it(n,x,es.path),Ls=l.resolve({path:ps.path},es),h=a.createHref(ps.fullPath);return h.startsWith("//")?gs(`Location "${x}" resolved to "${h}". A resolved location cannot start with multiple slashes.`):Ls.matched.length||gs(`No match found for location with path "${x}"`),ws(ps,Ls,{params:f(Ls.params),hash:Zn(ps.hash),redirectedFrom:void 0,href:h})}let G;if("path"in x)"params"in x&&!("name"in x)&&Object.keys(x.params).length&&gs(`Path "${x.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),G=ws({},x,{path:it(n,x.path,es.path).path});else{const ps=ws({},x.params);for(const Ls in ps)ps[Ls]==null&&delete ps[Ls];G=ws({},x,{params:d(x.params)}),es.params=d(es.params)}const X=l.resolve(G,es),vs=x.hash||"";vs&&!vs.startsWith("#")&&gs(`A \`hash\` should always start with the character "#". Replace "${vs}" with "#${vs}".`),X.params=y(f(X.params));const Fs=J5(t,ws({},x,{hash:Nf(vs),path:X.path})),cs=a.createHref(Fs);return cs.startsWith("//")?gs(`Location "${x}" resolved to "${cs}". A resolved location cannot start with multiple slashes.`):X.matched.length||gs(`No match found for location with path "${"path"in x?x.path:x}"`),ws({fullPath:Fs,hash:vs,query:t===tc?zf(x.query):x.query||{}},X,{redirectedFrom:void 0,href:cs})}function E(x){return typeof x=="string"?it(n,x,i.value.path):ws({},x)}function $(x,es){if(u!==x)return hn(8,{from:es,to:x})}function H(x){return z(x)}function ss(x){return H(ws(E(x),{replace:!0}))}function K(x){const es=x.matched[x.matched.length-1];if(es&&es.redirect){const{redirect:G}=es;let X=typeof G=="function"?G(x):G;if(typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=E(X):{path:X},X.params={}),!("path"in X)&&!("name"in X))throw gs(`Invalid redirect found:
${JSON.stringify(X,null,2)}
 when navigating to "${x.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ws({query:x.query,hash:x.hash,params:"path"in X?{}:x.params},X)}}function z(x,es){const G=u=w(x),X=i.value,vs=x.state,Fs=x.force,cs=x.replace===!0,ps=K(G);if(ps)return z(ws(E(ps),{state:typeof ps=="object"?ws({},vs,ps.state):vs,force:Fs,replace:cs}),es||G);const Ls=G;Ls.redirectedFrom=es;let h;return!Fs&&Yr(t,X,G)&&(h=hn(16,{to:Ls,from:X}),bs(X,X,!0,!1)),(h?Promise.resolve(h):hs(Ls,X)).catch(B=>ze(B)?ze(B,2)?B:Bs(B):Q(B,Ls,X)).then(B=>{if(B){if(ze(B,2))return Yr(t,w(B.to),Ls)&&es&&(es._count=es._count?es._count+1:1)>10?(gs(`Detected an infinite redirection in a navigation guard when going from "${X.fullPath}" to "${Ls.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):z(ws({replace:cs},E(B.to),{state:typeof B.to=="object"?ws({},vs,B.to.state):vs,force:Fs}),es||Ls)}else B=Ds(Ls,X,!0,cs,vs);return fs(Ls,X,B),B})}function ts(x,es){const G=$(x,es);return G?Promise.reject(G):Promise.resolve()}function hs(x,es){let G;const[X,vs,Fs]=ih(x,es);G=ut(X.reverse(),"beforeRouteLeave",x,es);for(const ps of X)ps.leaveGuards.forEach(Ls=>{G.push(cl(Ls,x,es))});const cs=ts.bind(null,x,es);return G.push(cs),Gl(G).then(()=>{G=[];for(const ps of r.list())G.push(cl(ps,x,es));return G.push(cs),Gl(G)}).then(()=>{G=ut(vs,"beforeRouteUpdate",x,es);for(const ps of vs)ps.updateGuards.forEach(Ls=>{G.push(cl(Ls,x,es))});return G.push(cs),Gl(G)}).then(()=>{G=[];for(const ps of x.matched)if(ps.beforeEnter&&!es.matched.includes(ps))if(ge(ps.beforeEnter))for(const Ls of ps.beforeEnter)G.push(cl(Ls,x,es));else G.push(cl(ps.beforeEnter,x,es));return G.push(cs),Gl(G)}).then(()=>(x.matched.forEach(ps=>ps.enterCallbacks={}),G=ut(Fs,"beforeRouteEnter",x,es),G.push(cs),Gl(G))).then(()=>{G=[];for(const ps of c.list())G.push(cl(ps,x,es));return G.push(cs),Gl(G)}).catch(ps=>ze(ps,8)?ps:Promise.reject(ps))}function fs(x,es,G){for(const X of p.list())X(x,es,G)}function Ds(x,es,G,X,vs){const Fs=$(x,es);if(Fs)return Fs;const cs=es===al,ps=Je?history.state:{};G&&(X||cs?a.replace(x.fullPath,ws({scroll:cs&&ps&&ps.scroll},vs)):a.push(x.fullPath,vs)),i.value=x,bs(x,es,G,cs),Bs()}let Ns;function Js(){Ns||(Ns=a.listen((x,es,G)=>{if(!de.listening)return;const X=w(x),vs=K(X);if(vs){z(ws(vs,{replace:!0}),X).catch(Nn);return}u=X;const Fs=i.value;Je&&lf(Gr(Fs.fullPath,G.delta),et()),hs(X,Fs).catch(cs=>ze(cs,12)?cs:ze(cs,2)?(z(cs.to,X).then(ps=>{ze(ps,20)&&!G.delta&&G.type===Yn.pop&&a.go(-1,!1)}).catch(Nn),Promise.reject()):(G.delta&&a.go(-G.delta,!1),Q(cs,X,Fs))).then(cs=>{cs=cs||Ds(X,Fs,!1),cs&&(G.delta&&!ze(cs,8)?a.go(-G.delta,!1):G.type===Yn.pop&&ze(cs,20)&&a.go(-1,!1)),fs(X,Fs,cs)}).catch(Nn)}))}let Qs=Cn(),Ps=Cn(),Ts;function Q(x,es,G){Bs(x);const X=Ps.list();return X.length?X.forEach(vs=>vs(x,es,G)):(gs("uncaught error during route navigation:"),console.error(x)),Promise.reject(x)}function rs(){return Ts&&i.value!==al?Promise.resolve():new Promise((x,es)=>{Qs.add([x,es])})}function Bs(x){return Ts||(Ts=!x,Js(),Qs.list().forEach(([es,G])=>x?G(x):es()),Qs.reset()),x}function bs(x,es,G,X){const{scrollBehavior:vs}=e;if(!Je||!vs)return Promise.resolve();const Fs=!G&&nf(Gr(x.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return Pe().then(()=>vs(x,es,Fs)).then(cs=>cs&&ef(cs)).catch(cs=>Q(cs,x,es))}const De=x=>a.go(x);let ie;const Le=new Set,de={currentRoute:i,listening:!0,addRoute:m,removeRoute:v,hasRoute:_,getRoutes:g,resolve:w,options:e,push:H,replace:ss,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:c.add,afterEach:p.add,onError:Ps.add,isReady:rs,install(x){const es=this;x.component("RouterLink",Jf),x.component("RouterView",Qf),x.config.globalProperties.$router=es,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>C(i)}),Je&&!ie&&i.value===al&&(ie=!0,H(a.location).catch(vs=>{gs("Unexpected error when starting the router:",vs)}));const G={};for(const vs in al)G[vs]=O(()=>i.value[vs]);x.provide(Pa,es),x.provide(fi,ee(G)),x.provide(qt,i);const X=x.unmount;Le.add(x),x.unmount=function(){Le.delete(x),Le.size<1&&(u=al,Ns&&Ns(),Ns=null,i.value=al,ie=!1,Ts=!1),X()},Je&&eh(x,es,l)}};return de}function Gl(e){return e.reduce((l,n)=>l.then(()=>n()),Promise.resolve())}function ih(e,l){const n=[],t=[],a=[],r=Math.max(l.matched.length,e.matched.length);for(let c=0;c<r;c++){const p=l.matched[c];p&&(e.matched.find(u=>vl(u,p))?t.push(p):n.push(p));const i=e.matched[c];i&&(l.matched.find(u=>vl(u,i))||a.push(i))}return[n,t,a]}const yt=ns(!1),In=ns(!1),tn=ns(!1),uh=ns(!0),Jt=Qd({xs:460,...Kd}),Tl=T5(),Di=E5(),yh=O(()=>Tl.height.value-Tl.width.value/dl>180),Ci=D5(Ve?document.body:null),pn=qd(),dh=O(()=>{var e,l;return["INPUT","TEXTAREA"].includes(((e=pn.value)==null?void 0:e.tagName)||"")||((l=pn.value)==null?void 0:l.classList.contains("CodeMirror-code"))}),fh=O(()=>{var e;return["BUTTON","A"].includes(((e=pn.value)==null?void 0:e.tagName)||"")});Oe("slidev-camera","default");Oe("slidev-mic","default");const vo=Oe("slidev-scale",0),te=Oe("slidev-show-overview",!1),dt=Oe("slidev-presenter-cursor",!0),uc=Oe("slidev-show-editor",!1);Oe("slidev-editor-width",Ve?window.innerWidth*.4:100);const Ei=Xp(te);function yc(e,l,n,t=a=>a){return e*t(.5-l*(.5-n))}function hh(e){return[-e[0],-e[1]]}function be(e,l){return[e[0]+l[0],e[1]+l[1]]}function Ee(e,l){return[e[0]-l[0],e[1]-l[1]]}function xe(e,l){return[e[0]*l,e[1]*l]}function mh(e,l){return[e[0]/l,e[1]/l]}function Fn(e){return[e[1],-e[0]]}function dc(e,l){return e[0]*l[0]+e[1]*l[1]}function vh(e,l){return e[0]===l[0]&&e[1]===l[1]}function Bh(e){return Math.hypot(e[0],e[1])}function Ah(e){return e[0]*e[0]+e[1]*e[1]}function fc(e,l){return Ah(Ee(e,l))}function Fi(e){return mh(e,Bh(e))}function _h(e,l){return Math.hypot(e[1]-l[1],e[0]-l[0])}function kn(e,l,n){let t=Math.sin(n),a=Math.cos(n),r=e[0]-l[0],c=e[1]-l[1],p=r*a-c*t,i=r*t+c*a;return[p+l[0],i+l[1]]}function Yt(e,l,n){return be(e,xe(Ee(l,e),n))}function hc(e,l,n){return be(e,xe(l,n))}var{min:Ql,PI:gh}=Math,mc=.275,xn=gh+1e-4;function Dh(e,l={}){let{size:n=16,smoothing:t=.5,thinning:a=.5,simulatePressure:r=!0,easing:c=Q=>Q,start:p={},end:i={},last:u=!1}=l,{cap:y=!0,easing:d=Q=>Q*(2-Q)}=p,{cap:f=!0,easing:m=Q=>--Q*Q*Q+1}=i;if(e.length===0||n<=0)return[];let v=e[e.length-1].runningLength,g=p.taper===!1?0:p.taper===!0?Math.max(n,v):p.taper,_=i.taper===!1?0:i.taper===!0?Math.max(n,v):i.taper,w=Math.pow(n*t,2),E=[],$=[],H=e.slice(0,10).reduce((Q,rs)=>{let Bs=rs.pressure;if(r){let bs=Ql(1,rs.distance/n),De=Ql(1,1-bs);Bs=Ql(1,Q+(De-Q)*(bs*mc))}return(Q+Bs)/2},e[0].pressure),ss=yc(n,a,e[e.length-1].pressure,c),K,z=e[0].vector,ts=e[0].point,hs=ts,fs=ts,Ds=hs,Ns=!1;for(let Q=0;Q<e.length;Q++){let{pressure:rs}=e[Q],{point:Bs,vector:bs,distance:De,runningLength:ie}=e[Q];if(Q<e.length-1&&v-ie<3)continue;if(a){if(r){let Fs=Ql(1,De/n),cs=Ql(1,1-Fs);rs=Ql(1,H+(cs-H)*(Fs*mc))}ss=yc(n,a,rs,c)}else ss=n/2;K===void 0&&(K=ss);let Le=ie<g?d(ie/g):1,de=v-ie<_?m((v-ie)/_):1;ss=Math.max(.01,ss*Math.min(Le,de));let x=(Q<e.length-1?e[Q+1]:e[Q]).vector,es=Q<e.length-1?dc(bs,x):1,G=dc(bs,z)<0&&!Ns,X=es!==null&&es<0;if(G||X){let Fs=xe(Fn(z),ss);for(let cs=1/13,ps=0;ps<=1;ps+=cs)fs=kn(Ee(Bs,Fs),Bs,xn*ps),E.push(fs),Ds=kn(be(Bs,Fs),Bs,xn*-ps),$.push(Ds);ts=fs,hs=Ds,X&&(Ns=!0);continue}if(Ns=!1,Q===e.length-1){let Fs=xe(Fn(bs),ss);E.push(Ee(Bs,Fs)),$.push(be(Bs,Fs));continue}let vs=xe(Fn(Yt(x,bs,es)),ss);fs=Ee(Bs,vs),(Q<=1||fc(ts,fs)>w)&&(E.push(fs),ts=fs),Ds=be(Bs,vs),(Q<=1||fc(hs,Ds)>w)&&($.push(Ds),hs=Ds),H=rs,z=bs}let Js=e[0].point.slice(0,2),Qs=e.length>1?e[e.length-1].point.slice(0,2):be(e[0].point,[1,1]),Ps=[],Ts=[];if(e.length===1){if(!(g||_)||u){let Q=hc(Js,Fi(Fn(Ee(Js,Qs))),-(K||ss)),rs=[];for(let Bs=1/13,bs=Bs;bs<=1;bs+=Bs)rs.push(kn(Q,Js,xn*2*bs));return rs}}else{if(!(g||_&&e.length===1))if(y)for(let rs=1/13,Bs=rs;Bs<=1;Bs+=rs){let bs=kn($[0],Js,xn*Bs);Ps.push(bs)}else{let rs=Ee(E[0],$[0]),Bs=xe(rs,.5),bs=xe(rs,.51);Ps.push(Ee(Js,Bs),Ee(Js,bs),be(Js,bs),be(Js,Bs))}let Q=Fn(hh(e[e.length-1].vector));if(_||g&&e.length===1)Ts.push(Qs);else if(f){let rs=hc(Qs,Q,ss);for(let Bs=1/29,bs=Bs;bs<1;bs+=Bs)Ts.push(kn(rs,Qs,xn*3*bs))}else Ts.push(be(Qs,xe(Q,ss)),be(Qs,xe(Q,ss*.99)),Ee(Qs,xe(Q,ss*.99)),Ee(Qs,xe(Q,ss)))}return E.concat(Ts,$.reverse(),Ps)}function Ch(e,l={}){var n;let{streamline:t=.5,size:a=16,last:r=!1}=l;if(e.length===0)return[];let c=.15+(1-t)*.85,p=Array.isArray(e[0])?e:e.map(({x:m,y:v,pressure:g=.5})=>[m,v,g]);if(p.length===2){let m=p[1];p=p.slice(0,-1);for(let v=1;v<5;v++)p.push(Yt(p[0],m,v/4))}p.length===1&&(p=[...p,[...be(p[0],[1,1]),...p[0].slice(2)]]);let i=[{point:[p[0][0],p[0][1]],pressure:p[0][2]>=0?p[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,y=0,d=i[0],f=p.length-1;for(let m=1;m<p.length;m++){let v=r&&m===f?p[m].slice(0,2):Yt(d.point,p[m],c);if(vh(d.point,v))continue;let g=_h(v,d.point);if(y+=g,m<f&&!u){if(y<a)continue;u=!0}d={point:v,pressure:p[m][2]>=0?p[m][2]:.5,vector:Fi(Ee(d.point,v)),distance:g,runningLength:y},i.push(d)}return i[0].vector=((n=i[1])==null?void 0:n.vector)||[0,0],i}function Eh(e,l={}){return Dh(Ch(e,l),l)}var Fh=()=>({events:{},emit(e,...l){let n=this.events[e]||[];for(let t=0,a=n.length;t<a;t++)n[t](...l)},on(e,l){var n;return(n=this.events[e])!=null&&n.push(l)||(this.events[e]=[l]),()=>{var t;this.events[e]=(t=this.events[e])==null?void 0:t.filter(a=>l!==a)}}});function So(e,l){return e-l}function kh(e){return e<0?-1:1}function Po(e){return[Math.abs(e),kh(e)]}function ki(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var xh=2,Ye=xh,Bn=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var l;const n=this.drauu.el,t=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*t,y:(e.pageY-a.top)*t,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const r=a.matrixTransform((l=n.getScreenCTM())==null?void 0:l.inverse());return{x:r.x*t,y:r.y*t,pressure:e.pressure}}}createElement(e,l){const n=document.createElementNS("http://www.w3.org/2000/svg",e),t=l?{...this.brush,...l}:this.brush;return n.setAttribute("fill",t.fill??"transparent"),n.setAttribute("stroke",t.color),n.setAttribute("stroke-width",t.size.toString()),n.setAttribute("stroke-linecap","round"),t.dasharray&&n.setAttribute("stroke-dasharray",t.dasharray),n}attr(e,l){this.el.setAttribute(e,typeof l=="string"?l:l.toFixed(Ye))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},bh=class extends Bn{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const l=Eh(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!l.length)return"";const n=l.reduce((t,[a,r],c,p)=>{const[i,u]=p[(c+1)%p.length];return t.push(a,r,(a+i)/2,(r+u)/2),t},["M",...l[0],"Q"]);return n.push("Z"),n.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},wh=class extends Bn{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,n]=Po(e.x-this.start.x),[t,a]=Po(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(l,t);l=r,t=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",l),this.attr("ry",t);else{const[r,c]=[this.start.x,this.start.x+l*n].sort(So),[p,i]=[this.start.y,this.start.y+t*a].sort(So);this.attr("cx",(r+c)/2),this.attr("cy",(p+i)/2),this.attr("rx",(c-r)/2),this.attr("ry",(i-p)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function xi(e,l){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",l),t.setAttribute("id",e),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(a),n.appendChild(t),n}var $h=class extends Bn{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const l=ki(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(xi(l,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${l})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:l,y:n}=e;if(this.shiftPressed){const t=e.x-this.start.x,a=e.y-this.start.y;if(a!==0){let r=t/a;r=Math.round(r),Math.abs(r)<=1?(l=this.start.x+a*r,n=this.start.y+a):(l=this.start.x+t,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-l),this.attr("y1",this.start.y*2-n),this.attr("x2",l),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",l),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Sh=class extends Bn{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,n]=Po(e.x-this.start.x),[t,a]=Po(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(l,t);l=r,t=r}if(this.altPressed)this.attr("x",this.start.x-l),this.attr("y",this.start.y-t),this.attr("width",l*2),this.attr("height",t*2);else{const[r,c]=[this.start.x,this.start.x+l*n].sort(So),[p,i]=[this.start.y,this.start.y+t*a].sort(So);this.attr("x",r),this.attr("y",p),this.attr("width",c-r),this.attr("height",i-p)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Ph(e,l){const n=e.x-l.x,t=e.y-l.y;return n*n+t*t}function Vh(e,l,n){let t=l.x,a=l.y,r=n.x-t,c=n.y-a;if(r!==0||c!==0){const p=((e.x-t)*r+(e.y-a)*c)/(r*r+c*c);p>1?(t=n.x,a=n.y):p>0&&(t+=r*p,a+=c*p)}return r=e.x-t,c=e.y-a,r*r+c*c}function Oh(e,l){let n=e[0];const t=[n];let a;for(let r=1,c=e.length;r<c;r++)a=e[r],Ph(a,n)>l&&(t.push(a),n=a);return n!==a&&a&&t.push(a),t}function Zt(e,l,n,t,a){let r=t,c=0;for(let p=l+1;p<n;p++){const i=Vh(e[p],e[l],e[n]);i>r&&(c=p,r=i)}r>t&&(c-l>1&&Zt(e,l,c,t,a),a.push(e[c]),n-c>1&&Zt(e,c,n,t,a))}function Lh(e,l){const n=e.length-1,t=[e[0]];return Zt(e,0,n,l,t),t.push(e[n]),t}function vc(e,l,n=!1){if(e.length<=2)return e;const t=l!==void 0?l*l:1;return e=n?e:Oh(e,t),e=Lh(e,t),e}var Th=class extends Bn{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=ki();const l=xi(this.arrowId,this.brush.color);this.el.appendChild(l)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=vc(this.points,1,!0),this.count=0),this.attr("d",Ac(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ac(vc(this.points,1,!0))),!e.getTotalLength()))}};function Mh(e,l){const n=l.x-e.x,t=l.y-e.y;return{length:Math.sqrt(n**2+t**2),angle:Math.atan2(t,n)}}function Bc(e,l,n,t){const a=l||e,r=n||e,c=.2,p=Mh(a,r),i=p.angle+(t?Math.PI:0),u=p.length*c,y=e.x+Math.cos(i)*u,d=e.y+Math.sin(i)*u;return{x:y,y:d}}function Nh(e,l,n){const t=Bc(n[l-1],n[l-2],e),a=Bc(e,n[l-1],n[l+1],!0);return`C ${t.x.toFixed(Ye)},${t.y.toFixed(Ye)} ${a.x.toFixed(Ye)},${a.y.toFixed(Ye)} ${e.x.toFixed(Ye)},${e.y.toFixed(Ye)}`}function Ac(e){return e.reduce((l,n,t,a)=>t===0?`M ${n.x.toFixed(Ye)},${n.y.toFixed(Ye)}`:`${l} ${Nh(n,t,a)}`,"")}var Rh=class extends Bn{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const l=(n,t)=>{if(n&&n.length)for(let a=0;a<n.length;a++){const r=n[a];if(r.getTotalLength){const c=r.getTotalLength();for(let p=0;p<this.pathSubFactor;p++){const i=r.getPointAtLength(c*p/this.pathSubFactor),u=r.getPointAtLength(c*(p+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:u.x,y1:i.y,y2:u.y,segment:p,element:t||r})}}else r.children&&l(r.children,r)}};e&&l(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const l=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,l}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let l=0;l<this.pathFragments.length;l++){const n=this.pathFragments[l],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,t)&&(n.element.remove(),e.push(l))}return e.length&&(this.pathFragments=this.pathFragments.filter((l,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,l){const n=e.x1,t=e.x2,a=l.x1,r=l.x2,c=e.y1,p=e.y2,i=l.y1,u=l.y2,y=(n-t)*(i-u)-(c-p)*(a-r),d=(n*p-c*t)*(a-r)-(n-t)*(a*u-i*r),f=(n*p-c*t)*(i-u)-(c-p)*(a*u-i*r),m=(v,g,_)=>v>=g&&v<=_?!0:v>=_&&v<=g;if(y===0)return!1;{const v={x:d/y,y:f/y};return m(v.x,n,t)&&m(v.y,c,p)&&m(v.x,a,r)&&m(v.y,i,u)}}};function Ih(e){return{draw:new Th(e),stylus:new bh(e),line:new $h(e),rectangle:new Sh(e),ellipse:new wh(e),eraseLine:new Rh(e)}}var jh=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Fh(),this._models=Ih(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,l){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(l)||this.el,t=this.eventStart.bind(this),a=this.eventMove.bind(this),r=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,l){return this._emitter.on(e,l)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const l=this.model._eventUp(e);l?(l instanceof Element&&l!==this._currentNode&&(this._currentNode=l),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Hh(e){return new jh(e)}const Gt=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ne=Oe("slidev-drawing-enabled",!1),$6=Oe("slidev-drawing-pinned",!1),zh=ns(!1),Wh=ns(!1),Uh=ns(!1),Gn=ns(!1),$l=_d(Oe("slidev-drawing-brush",{color:Gt[0],size:4,mode:"stylus"})),_c=ns("stylus"),bi=O(()=>Os.drawings.syncAll||Qe.value);let Qn=!1;const bn=O({get(){return _c.value},set(e){_c.value=e,e==="arrow"?($l.mode="line",$l.arrowEnd=!0):($l.mode=e,$l.arrowEnd=!1)}}),qh=ee({brush:$l,acceptsInputTypes:O(()=>Ne.value?void 0:["pen"]),coordinateTransform:!1}),ce=pa(Hh(qh));function Kh(){ce.clear(),bi.value&&Jp(Gs.value,"")}function wi(){var e;Wh.value=ce.canRedo(),zh.value=ce.canUndo(),Uh.value=!!((e=ce.el)!=null&&e.children.length)}function Jh(e){Qn=!0;const l=wo[e||Gs.value];l!=null?ce.load(l):ce.clear(),Qn=!1}ce.on("changed",()=>{if(wi(),!Qn){const e=ce.dump(),l=Gs.value;(wo[l]||"")!==e&&bi.value&&Jp(l,ce.dump())}});ud(e=>{Qn=!0,e[Gs.value]!=null&&ce.load(e[Gs.value]||""),Qn=!1,wi()});Pe(()=>{js(Gs,()=>{ce.mounted&&Jh()},{immediate:!0})});ce.on("start",()=>Gn.value=!0);ce.on("end",()=>Gn.value=!1);window.addEventListener("keydown",e=>{if(!Ne.value)return;const l=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ce.redo():ce.undo():e.code==="Escape"?Ne.value=!1:e.code==="KeyL"&&l?bn.value="line":e.code==="KeyA"&&l?bn.value="arrow":e.code==="KeyS"&&l?bn.value="stylus":e.code==="KeyR"&&l?bn.value="rectangle":e.code==="KeyE"&&l?bn.value="ellipse":e.code==="KeyC"&&l?Kh():e.code.startsWith("Digit")&&l&&+e.code[5]<=Gt.length?$l.color=Gt[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ws(...e){return O(()=>e.every(l=>re(l)))}function fe(e){return O(()=>!re(e))}const gc=c5(),ft=Oe("slidev-color-schema","auto"),Qt=O(()=>Os.colorSchema!=="auto"),Va=O({get(){return Qt.value?Os.colorSchema==="dark":ft.value==="auto"?gc.value:ft.value==="dark"},set(e){Qt.value||(ft.value=e===gc.value?"auto":e?"dark":"light")}}),$i=Xp(Va);Ve&&js(Va,e=>{const l=document.querySelector("html");l.classList.toggle("dark",e),l.classList.toggle("light",!e)},{immediate:!0});const Bo=ns(1),Ao=O(()=>qs.length-1),Ae=ns(0),Oa=ns(0);function Yh(){Ae.value>Bo.value&&(Ae.value-=1)}function Zh(){Ae.value<Ao.value&&(Ae.value+=1)}function Gh(){if(Ae.value>Bo.value){let e=Ae.value-Oa.value;e<Bo.value&&(e=Bo.value),Ae.value=e}}function Qh(){if(Ae.value<Ao.value){let e=Ae.value+Oa.value;e>Ao.value&&(e=Ao.value),Ae.value=e}}function Xh(){const{escape:e,space:l,shift:n,left:t,right:a,up:r,down:c,enter:p,d:i,g:u,o:y}=Di;let d=[{name:"next_space",key:Ws(l,fe(n)),fn:Ml,autoRepeat:!0},{name:"prev_space",key:Ws(l,n),fn:Nl,autoRepeat:!0},{name:"next_right",key:Ws(a,fe(n),fe(te)),fn:Ml,autoRepeat:!0},{name:"prev_left",key:Ws(t,fe(n),fe(te)),fn:Nl,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ml,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Nl,autoRepeat:!0},{name:"next_down",key:Ws(c,fe(te)),fn:Oo,autoRepeat:!0},{name:"prev_up",key:Ws(r,fe(te)),fn:()=>Lo(!1),autoRepeat:!0},{name:"next_shift",key:Ws(a,n),fn:Oo,autoRepeat:!0},{name:"prev_shift",key:Ws(t,n),fn:()=>Lo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ws(i,fe(Ne)),fn:$i},{name:"toggle_overview",key:Ws(y,fe(Ne)),fn:Ei},{name:"hide_overview",key:Ws(e,fe(Ne)),fn:()=>te.value=!1},{name:"goto",key:Ws(u,fe(Ne)),fn:()=>tn.value=!tn.value},{name:"next_overview",key:Ws(a,te),fn:Zh},{name:"prev_overview",key:Ws(t,te),fn:Yh},{name:"up_overview",key:Ws(r,te),fn:Gh},{name:"down_overview",key:Ws(c,te),fn:Qh},{name:"goto_from_overview",key:Ws(p,te),fn:()=>{mn(Ae.value),te.value=!1}}];const f=new Set(d.map(v=>v.name));if(d.filter(v=>v.name&&f.has(v.name)).length===0){const v=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(v),console.warn(v)}return d}const Si=Ws(fe(dh),fe(fh),uh);function sm(e,l,n=!1){typeof e=="string"&&(e=Di[e]);const t=Ws(e,Si);let a=0,r;const c=()=>{if(clearTimeout(r),!t.value){a=0;return}n&&(r=setTimeout(c,Math.max(1e3-a*250,150)),a++),l()};return js(t,c,{flush:"sync"})}function em(e,l){return Ud(e,n=>{Si.value&&(n.repeat||l())})}function lm(){const e=Xh();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&sm(n.key,n.fn,n.autoRepeat)}),em("f",()=>Ci.toggle())}const nm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},om=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),tm=[om];function am(e,l){return A(),Y("svg",nm,tm)}const rm={name:"carbon-close",render:am};function La(e){var n,t;const l=(t=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:t.no;return l!=null?`slidev-page-${l}`:""}const cm=Is({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const l=e;b(S);const n=ns(),t=g5(n),a=O(()=>l.width?l.width:t.width.value),r=O(()=>l.width?l.width/dl:t.height.value);l.width&&vn(()=>{n.value&&(n.value.style.width=`${a.value}px`,n.value.style.height=`${r.value}px`)});const c=O(()=>a.value/r.value),p=O(()=>l.scale?l.scale:c.value<dl?a.value/fl:r.value*dl/fl),i=O(()=>({height:`${ba}px`,width:`${fl}px`,transform:`translate(-50%, -50%) scale(${p.value})`})),u=O(()=>({"select-none":!Os.selectable,"slidev-code-line-numbers":Os.lineNumbers}));return ve(qp,p),(y,d)=>(A(),Y("div",{id:"slide-container",ref_key:"root",ref:n,class:Hs(C(u))},[s("div",{id:"slide-content",style:se(C(i))},[el(y.$slots,"default")],4),el(y.$slots,"controls")],2))}});const P=(e,l)=>{const n=e.__vccOpts||e;for(const[t,a]of l)n[t]=a;return n},Pi=P(cm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ta=Is({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:l}){const n=Me(e,"clicks",l),t=Me(e,"clicksElements",l),a=Me(e,"clicksDisabled",l),r=Me(e,"clicksOrderMap",l);t.value.length=0,ve(sd,e.route),ve(ed,e.context),ve(zp,n),ve(Up,a),ve(Wp,t),ve(Xy,r)},render(){var e,l;return this.$props.is?Xo(this.$props.is):(l=(e=this.$slots)==null?void 0:e.default)==null?void 0:l.call(e)}}),pm=["innerHTML"],im=Is({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return b(S),(l,n)=>C(wo)[e.page]?(A(),Y("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(wo)[e.page]},null,8,pm)):_s("v-if",!0)}}),Vi=P(im,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),um=Object.freeze(Object.defineProperty({__proto__:null,default:Vi},Symbol.toStringTag,{value:"Module"})),ym={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},dm=["onClick"],fm=Is({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:l}){const n=e;b(S);const t=Me(n,"modelValue",l);function a(){t.value=!1}function r(m){mn(m),a()}function c(m){return m===Ae.value}const p=Jt.smaller("xs"),i=Jt.smaller("sm"),u=4*16*2,y=2*16,d=O(()=>p.value?Tl.width.value-u:i.value?(Tl.width.value-u-y)/2:300),f=O(()=>Math.floor((Tl.width.value-u)/(d.value+y)));return vn(()=>{Ae.value=Gs.value,Oa.value=f.value}),(m,v)=>{const g=rm;return A(),Y(xs,null,[je(s("div",ym,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:se(`grid-template-columns: repeat(auto-fit,minmax(${C(d)}px,1fr))`)},[(A(!0),Y(xs,null,lo(C(qs).slice(0,-1),(_,w)=>(A(),Y("div",{key:_.path,class:"relative"},[s("div",{class:Hs(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(w+1)}]),style:se(C(wa)),onClick:E=>r(+_.path)},[(A(),L(Pi,{key:_.path,width:C(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:D(()=>[F(C(Ta),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Hs(C(La)(_)),route:_,context:"overview"},null,8,["is","class","route"]),F(Vi,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,dm),s("div",{class:"absolute top-0 opacity-50",style:se(`left: ${C(d)+5}px`)},Ys(w+1),5)]))),128))],4)],512),[[Hp,C(t)]]),C(t)?(A(),Y("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:a},[F(g)])):_s("v-if",!0)],64)}}});const hm=P(fm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),mm="/vue-3-practices/assets/logo-b72bde5d.png",vm={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Bm=Is({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:l}){const n=e;b(S);const t=Me(n,"modelValue",l);function a(){t.value=!1}return(r,c)=>(A(),L(fp,null,[C(t)?(A(),Y("div",vm,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=p=>a())}),s("div",{class:Hs(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[el(r.$slots,"default")],2)])):_s("v-if",!0)],1024))}}),Am=P(Bm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Modal.vue"]]),_m={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},gm=["innerHTML"],Dm=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:mm,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),o("dev ")])])],-1),Cm=Is({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:l}){const n=e;b(S);const t=Me(n,"modelValue",l),a=O(()=>typeof Os.info=="string");return(r,c)=>(A(),L(Am,{modelValue:C(t),"onUpdate:modelValue":c[0]||(c[0]=p=>Cs(t)?t.value=p:null),class:"px-6 py-4"},{default:D(()=>[s("div",_m,[C(a)?(A(),Y("div",{key:0,class:"mb-4",innerHTML:C(Os).info},null,8,gm)):_s("v-if",!0),Dm])]),_:1},8,["modelValue"]))}});const Em=P(Cm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/InfoDialog.vue"]]),Fm=["disabled","onKeydown"],km=Is({__name:"Goto",setup(e){b(S);const l=ns(),n=ns(""),t=O(()=>{if(n.value.startsWith("/"))return!!qs.find(c=>c.path===n.value.substring(1));{const c=+n.value;return!isNaN(c)&&c>0&&c<=Ui.value}});function a(){t.value&&(n.value.startsWith("/")?mn(n.value.substring(1)):mn(+n.value)),r()}function r(){tn.value=!1}return js(tn,async c=>{var p,i;c?(await Pe(),n.value="",(p=l.value)==null||p.focus()):(i=l.value)==null||i.blur()}),js(n,c=>{c.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(c,p)=>(A(),Y("div",{id:"slidev-goto-dialog",class:Hs(["fixed right-5 bg-main transform transition-all",C(tn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[je(s("input",{ref_key:"input",ref:l,"onUpdate:modelValue":p[0]||(p[0]=i=>n.value=i),type:"text",disabled:!C(tn),class:Hs(["outline-none bg-transparent",{"text-red-400":!C(t)&&n.value}]),placeholder:"Goto...",onKeydown:[xr(a,["enter"]),xr(r,["escape"])],onBlur:r},null,42,Fm),[[Kn,n.value]])],2))}}),xm=P(km,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Goto.vue"]]),bm=Is({__name:"Controls",setup(e){b(S);const l=Ie(),n=Ie();return(t,a)=>(A(),Y(xs,null,[F(hm,{modelValue:C(te),"onUpdate:modelValue":a[0]||(a[0]=r=>Cs(te)?te.value=r:null)},null,8,["modelValue"]),F(xm),C(l)?(A(),L(C(l),{key:0})):_s("v-if",!0),C(n)?(A(),L(C(n),{key:1,modelValue:C(yt),"onUpdate:modelValue":a[1]||(a[1]=r=>Cs(yt)?yt.value=r:null)},null,8,["modelValue"])):_s("v-if",!0),C(Os).info?(A(),L(Em,{key:2,modelValue:C(In),"onUpdate:modelValue":a[2]||(a[2]=r=>Cs(In)?In.value=r:null)},null,8,["modelValue"])):_s("v-if",!0)],64))}}),wm=P(bm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Controls.vue"]]),$m={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sm=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Pm=[Sm];function Vm(e,l){return A(),Y("svg",$m,Pm)}const Om={name:"carbon-settings-adjust",render:Vm},Lm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tm=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Mm=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Nm=[Tm,Mm];function Rm(e,l){return A(),Y("svg",Lm,Nm)}const Im={name:"carbon-information",render:Rm},jm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hm=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),zm=[Hm];function Wm(e,l){return A(),Y("svg",jm,zm)}const Um={name:"carbon-download",render:Wm},qm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Km=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Jm=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Ym=[Km,Jm];function Zm(e,l){return A(),Y("svg",qm,Ym)}const Gm={name:"carbon-user-speaker",render:Zm},Qm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xm=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),s3=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),e3=[Xm,s3];function l3(e,l){return A(),Y("svg",Qm,e3)}const n3={name:"carbon-presentation-file",render:l3},o3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t3=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),a3=[t3];function r3(e,l){return A(),Y("svg",o3,a3)}const c3={name:"carbon-pen",render:r3},p3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},i3=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),u3=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),y3=[i3,u3];function d3(e,l){return A(),Y("svg",p3,y3)}const f3={name:"ph-cursor-duotone",render:d3},h3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},m3=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),v3=[m3];function B3(e,l){return A(),Y("svg",h3,v3)}const Oi={name:"ph-cursor-fill",render:B3},A3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_3=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),g3=[_3];function D3(e,l){return A(),Y("svg",A3,g3)}const C3={name:"carbon-sun",render:D3},E3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F3=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),k3=[F3];function x3(e,l){return A(),Y("svg",E3,k3)}const b3={name:"carbon-moon",render:x3},w3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$3=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),S3=[$3];function P3(e,l){return A(),Y("svg",w3,S3)}const V3={name:"carbon-apps",render:P3},O3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L3=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),T3=[L3];function M3(e,l){return A(),Y("svg",O3,T3)}const Li={name:"carbon-arrow-right",render:M3},N3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R3=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),I3=[R3];function j3(e,l){return A(),Y("svg",N3,I3)}const H3={name:"carbon-arrow-left",render:j3},z3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W3=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),U3=[W3];function q3(e,l){return A(),Y("svg",z3,U3)}const K3={name:"carbon-maximize",render:q3},J3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y3=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Z3=[Y3];function G3(e,l){return A(),Y("svg",J3,Z3)}const Q3={name:"carbon-minimize",render:G3},X3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},sv=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),ev=[sv];function lv(e,l){return A(),Y("svg",X3,ev)}const nv={name:"carbon-checkmark",render:lv},ov={class:"select-list"},tv={class:"title"},av={class:"items"},rv=["onClick"],cv=Is({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:l}){const n=e;b(S);const t=Me(n,"modelValue",l,{passive:!0});return(a,r)=>{const c=nv;return A(),Y("div",ov,[s("div",tv,Ys(e.title),1),s("div",av,[(A(!0),Y(xs,null,lo(e.items,p=>(A(),Y("div",{key:p.value,class:Hs(["item",{active:C(t)===p.value}]),onClick:()=>{var i;t.value=p.value,(i=p.onClick)==null||i.call(p)}},[F(c,{class:Hs(["text-green-500",{"opacity-0":C(t)!==p.value}])},null,8,["class"]),o(" "+Ys(p.display||p.value),1)],10,rv))),128))])])}}});const pv=P(cv,[["__scopeId","data-v-a5c2ed88"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SelectList.vue"]]),iv={class:"text-sm"},uv=Is({__name:"Settings",setup(e){b(S);const l=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,t)=>(A(),Y("div",iv,[F(pv,{modelValue:C(vo),"onUpdate:modelValue":t[0]||(t[0]=a=>Cs(vo)?vo.value=a:null),title:"Scale",items:l},null,8,["modelValue"])]))}}),yv=P(uv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Settings.vue"]]),dv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},fv=Is({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:l}){const n=e;b(S);const t=Me(n,"modelValue",l,{passive:!0}),a=ns();return zd(a,()=>{t.value=!1}),(r,c)=>(A(),Y("div",{ref_key:"el",ref:a,class:"flex relative"},[s("button",{class:Hs({disabled:e.disabled}),onClick:c[0]||(c[0]=p=>t.value=!C(t))},[el(r.$slots,"button",{class:Hs({disabled:e.disabled})})],2),(A(),L(fp,null,[C(t)?(A(),Y("div",dv,[el(r.$slots,"menu")])):_s("v-if",!0)],1024))],512))}}),hv=P(fv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/MenuButton.vue"]]),mv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},vv={__name:"VerticalDivider",setup(e){return b(S),(l,n)=>(A(),Y("div",mv))}},io=P(vv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Bv={render(){return[]}},Av={class:"icon-btn"},_v={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},gv={class:"my-auto"},Dv={class:"opacity-50"},Cv=Is({__name:"NavControls",props:{persist:{default:!1}},setup(e){const l=e;b(S);const n=Jt.smaller("md"),{isFullscreen:t,toggle:a}=Ci,r=O(()=>sa.value?`?password=${sa.value}`:""),c=O(()=>`/presenter/${Gs.value}${r.value}`),p=O(()=>`/${Gs.value}${r.value}`),i=ns(),u=()=>{i.value&&pn.value&&i.value.contains(pn.value)&&pn.value.blur()},y=O(()=>l.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Ie(),f=Ie();return Hl(()=>import("./DrawingControls-a42f3614.js"),[]).then(m=>f.value=m.default),(m,v)=>{const g=Q3,_=K3,w=H3,E=Li,$=V3,H=b3,ss=C3,K=Oi,z=f3,ts=c3,hs=n3,fs=Cu("RouterLink"),Ds=Gm,Ns=Um,Js=Im,Qs=Om;return A(),Y("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[s("div",{class:Hs(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",C(y)]),onMouseleave:u},[C(Ke)?_s("v-if",!0):(A(),Y("button",{key:0,class:"icon-btn",onClick:v[0]||(v[0]=(...Ps)=>C(a)&&C(a)(...Ps))},[C(t)?(A(),L(g,{key:0})):(A(),L(_,{key:1}))])),s("button",{class:Hs(["icon-btn",{disabled:!C(a6)}]),onClick:v[1]||(v[1]=(...Ps)=>C(Nl)&&C(Nl)(...Ps))},[F(w)],2),s("button",{class:Hs(["icon-btn",{disabled:!C(t6)}]),title:"Next",onClick:v[2]||(v[2]=(...Ps)=>C(Ml)&&C(Ml)(...Ps))},[F(E)],2),C(Ke)?_s("v-if",!0):(A(),Y("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=Ps=>C(Ei)())},[F($)])),C(Qt)?_s("v-if",!0):(A(),Y("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=Ps=>C($i)())},[C(Va)?(A(),L(H,{key:0})):(A(),L(ss,{key:1}))])),F(io),C(Ke)?_s("v-if",!0):(A(),Y(xs,{key:3},[!C(Qe)&&!C(n)&&C(d)?(A(),Y(xs,{key:0},[F(C(d)),F(io)],64)):_s("v-if",!0),C(Qe)?(A(),Y("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=Ps=>dt.value=!C(dt))},[C(dt)?(A(),L(K,{key:0})):(A(),L(z,{key:1,class:"opacity-50"}))])):_s("v-if",!0)],64)),!C(Os).drawings.presenterOnly&&!C(Ke)?(A(),Y(xs,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=Ps=>Ne.value=!C(Ne))},[F(ts),C(Ne)?(A(),Y("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:se({background:C($l).color})},null,4)):_s("v-if",!0)]),F(io)],64)):_s("v-if",!0),C(Ke)?_s("v-if",!0):(A(),Y(xs,{key:5},[C(Qe)?(A(),L(fs,{key:0,to:C(p),class:"icon-btn",title:"Play Mode"},{default:D(()=>[F(hs)]),_:1},8,["to"])):_s("v-if",!0),C(l6)?(A(),L(fs,{key:1,to:C(c),class:"icon-btn",title:"Presenter Mode"},{default:D(()=>[F(Ds)]),_:1},8,["to"])):_s("v-if",!0),_s("v-if",!0)],64)),(A(),Y(xs,{key:6},[C(Os).download?(A(),Y("button",{key:0,class:"icon-btn",onClick:v[8]||(v[8]=(...Ps)=>C(bc)&&C(bc)(...Ps))},[F(Ns)])):_s("v-if",!0)],64)),!C(Qe)&&C(Os).info&&!C(Ke)?(A(),Y("button",{key:7,class:"icon-btn",onClick:v[9]||(v[9]=Ps=>In.value=!C(In))},[F(Js)])):_s("v-if",!0),!C(Qe)&&!C(Ke)?(A(),L(hv,{key:8},{button:D(()=>[s("button",Av,[F(Qs)])]),menu:D(()=>[F(yv)]),_:1})):_s("v-if",!0),C(Ke)?_s("v-if",!0):(A(),L(io,{key:9})),s("div",_v,[s("div",gv,[o(Ys(C(Gs))+" ",1),s("span",Dv,"/ "+Ys(C(Ui)),1)])]),F(C(Bv))],34)],512)}}}),Ev=P(Cv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/NavControls.vue"]]),Ti={render(){return[]}},Mi={render(){return[]}},Fv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},kv=Is({__name:"PresenterMouse",setup(e){return b(S),(l,n)=>{const t=Oi;return C(ct).cursor?(A(),Y("div",Fv,[F(t,{class:"absolute",style:se({left:`${C(ct).cursor.x}%`,top:`${C(ct).cursor.y}%`})},null,8,["style"])])):_s("v-if",!0)}}}),xv=P(kv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),bv=Is({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){b(S),js(me,()=>{var n,t;(n=me.value)!=null&&n.meta&&me.value.meta.preload!==!1&&(me.value.meta.__preloaded=!0),(t=ht.value)!=null&&t.meta&&ht.value.meta.preload!==!1&&(ht.value.meta.__preloaded=!0)},{immediate:!0});const l=Ie();return Hl(()=>import("./DrawingLayer-7cb13b1e.js"),[]).then(n=>l.value=n.default),(n,t)=>(A(),Y(xs,null,[_s(" Global Bottom "),F(C(Mi)),_s(" Slides "),(A(!0),Y(xs,null,lo(C(qs),a=>{var r,c;return A(),Y(xs,{key:a.path},[(r=a.meta)!=null&&r.__preloaded||a===C(me)?je((A(),L(C(Ta),{key:0,is:a==null?void 0:a.component,clicks:a===C(me)?C(zl):0,"clicks-elements":((c=a.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Hs(C(La)(a)),route:a,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Hp,a===C(me)]]):_s("v-if",!0)],64)}),128)),_s(" Global Top "),F(C(Ti)),C(l)?(A(),L(C(l),{key:0})):_s("v-if",!0),C(Qe)?_s("v-if",!0):(A(),L(xv,{key:1}))],64))}}),wv=P(bv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesShow.vue"]]),$v=Is({__name:"Play",setup(e){b(S),lm();const l=ns();function n(r){var c;uc.value||((c=r.target)==null?void 0:c.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Ml():Nl())}p6(l);const t=O(()=>yh.value||uc.value);Ie();const a=Ie();return Hl(()=>import("./DrawingControls-a42f3614.js"),[]).then(r=>a.value=r.default),(r,c)=>(A(),Y(xs,null,[s("div",{id:"page-root",ref_key:"root",ref:l,class:"grid grid-cols-[1fr_max-content]",style:se(C(wa))},[F(Pi,{class:"w-full h-full",style:se({background:"var(--slidev-slide-container-background, black)"}),width:C(Ia)?C(Tl).width.value:void 0,scale:C(vo),onPointerdown:n},{default:D(()=>[F(wv,{context:"slide"})]),controls:D(()=>[s("div",{class:Hs(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[C(t)?"opacity-100 right-0":"opacity-0 p-2",C(Gn)?"pointer-events-none":""]])},[F(Ev,{class:"m-auto",persist:C(t)},null,8,["persist"])],2),!C(Os).drawings.presenterOnly&&!C(Ke)&&C(a)?(A(),L(C(a),{key:0,class:"ml-0"})):_s("v-if",!0)]),_:1},8,["style","width","scale"]),_s("v-if",!0)],4),F(wm)],64))}}),Sv=P($v,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Ni(e){return typeof e>"u"||e===null}function Pv(e){return typeof e=="object"&&e!==null}function Vv(e){return Array.isArray(e)?e:Ni(e)?[]:[e]}function Ov(e,l){var n,t,a,r;if(l)for(r=Object.keys(l),n=0,t=r.length;n<t;n+=1)a=r[n],e[a]=l[a];return e}function Lv(e,l){var n="",t;for(t=0;t<l;t+=1)n+=e;return n}function Tv(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Mv=Ni,Nv=Pv,Rv=Vv,Iv=Lv,jv=Tv,Hv=Ov,Ma={isNothing:Mv,isObject:Nv,toArray:Rv,repeat:Iv,isNegativeZero:jv,extend:Hv};function Ri(e,l){var n="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!l&&e.mark.snippet&&(n+=`

`+e.mark.snippet),t+" "+n):t}function Xn(e,l){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=l,this.message=Ri(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Xn.prototype=Object.create(Error.prototype);Xn.prototype.constructor=Xn;Xn.prototype.toString=function(l){return this.name+": "+Ri(this,l)};var xl=Xn,zv=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Wv=["scalar","sequence","mapping"];function Uv(e){var l={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(t){l[String(t)]=n})}),l}function qv(e,l){if(l=l||{},Object.keys(l).forEach(function(n){if(zv.indexOf(n)===-1)throw new xl('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=l,this.tag=e,this.kind=l.kind||null,this.resolve=l.resolve||function(){return!0},this.construct=l.construct||function(n){return n},this.instanceOf=l.instanceOf||null,this.predicate=l.predicate||null,this.represent=l.represent||null,this.representName=l.representName||null,this.defaultStyle=l.defaultStyle||null,this.multi=l.multi||!1,this.styleAliases=Uv(l.styleAliases||null),Wv.indexOf(this.kind)===-1)throw new xl('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var le=qv;function Dc(e,l){var n=[];return e[l].forEach(function(t){var a=n.length;n.forEach(function(r,c){r.tag===t.tag&&r.kind===t.kind&&r.multi===t.multi&&(a=c)}),n[a]=t}),n}function Kv(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},l,n;function t(a){a.multi?(e.multi[a.kind].push(a),e.multi.fallback.push(a)):e[a.kind][a.tag]=e.fallback[a.tag]=a}for(l=0,n=arguments.length;l<n;l+=1)arguments[l].forEach(t);return e}function Xt(e){return this.extend(e)}Xt.prototype.extend=function(l){var n=[],t=[];if(l instanceof le)t.push(l);else if(Array.isArray(l))t=t.concat(l);else if(l&&(Array.isArray(l.implicit)||Array.isArray(l.explicit)))l.implicit&&(n=n.concat(l.implicit)),l.explicit&&(t=t.concat(l.explicit));else throw new xl("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof le))throw new xl("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new xl("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new xl("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(r){if(!(r instanceof le))throw new xl("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(Xt.prototype);return a.implicit=(this.implicit||[]).concat(n),a.explicit=(this.explicit||[]).concat(t),a.compiledImplicit=Dc(a,"implicit"),a.compiledExplicit=Dc(a,"explicit"),a.compiledTypeMap=Kv(a.compiledImplicit,a.compiledExplicit),a};var Jv=Xt,Yv=new le("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Zv=new le("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Gv=new le("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Qv=new Jv({explicit:[Yv,Zv,Gv]});function Xv(e){if(e===null)return!0;var l=e.length;return l===1&&e==="~"||l===4&&(e==="null"||e==="Null"||e==="NULL")}function sB(){return null}function eB(e){return e===null}var lB=new le("tag:yaml.org,2002:null",{kind:"scalar",resolve:Xv,construct:sB,predicate:eB,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function nB(e){if(e===null)return!1;var l=e.length;return l===4&&(e==="true"||e==="True"||e==="TRUE")||l===5&&(e==="false"||e==="False"||e==="FALSE")}function oB(e){return e==="true"||e==="True"||e==="TRUE"}function tB(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var aB=new le("tag:yaml.org,2002:bool",{kind:"scalar",resolve:nB,construct:oB,predicate:tB,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function rB(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function cB(e){return 48<=e&&e<=55}function pB(e){return 48<=e&&e<=57}function iB(e){if(e===null)return!1;var l=e.length,n=0,t=!1,a;if(!l)return!1;if(a=e[n],(a==="-"||a==="+")&&(a=e[++n]),a==="0"){if(n+1===l)return!0;if(a=e[++n],a==="b"){for(n++;n<l;n++)if(a=e[n],a!=="_"){if(a!=="0"&&a!=="1")return!1;t=!0}return t&&a!=="_"}if(a==="x"){for(n++;n<l;n++)if(a=e[n],a!=="_"){if(!rB(e.charCodeAt(n)))return!1;t=!0}return t&&a!=="_"}if(a==="o"){for(n++;n<l;n++)if(a=e[n],a!=="_"){if(!cB(e.charCodeAt(n)))return!1;t=!0}return t&&a!=="_"}}if(a==="_")return!1;for(;n<l;n++)if(a=e[n],a!=="_"){if(!pB(e.charCodeAt(n)))return!1;t=!0}return!(!t||a==="_")}function uB(e){var l=e,n=1,t;if(l.indexOf("_")!==-1&&(l=l.replace(/_/g,"")),t=l[0],(t==="-"||t==="+")&&(t==="-"&&(n=-1),l=l.slice(1),t=l[0]),l==="0")return 0;if(t==="0"){if(l[1]==="b")return n*parseInt(l.slice(2),2);if(l[1]==="x")return n*parseInt(l.slice(2),16);if(l[1]==="o")return n*parseInt(l.slice(2),8)}return n*parseInt(l,10)}function yB(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Ma.isNegativeZero(e)}var dB=new le("tag:yaml.org,2002:int",{kind:"scalar",resolve:iB,construct:uB,predicate:yB,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),fB=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function hB(e){return!(e===null||!fB.test(e)||e[e.length-1]==="_")}function mB(e){var l,n;return l=e.replace(/_/g,"").toLowerCase(),n=l[0]==="-"?-1:1,"+-".indexOf(l[0])>=0&&(l=l.slice(1)),l===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:l===".nan"?NaN:n*parseFloat(l,10)}var vB=/^[-+]?[0-9]+e/;function BB(e,l){var n;if(isNaN(e))switch(l){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(l){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(l){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ma.isNegativeZero(e))return"-0.0";return n=e.toString(10),vB.test(n)?n.replace("e",".e"):n}function AB(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Ma.isNegativeZero(e))}var _B=new le("tag:yaml.org,2002:float",{kind:"scalar",resolve:hB,construct:mB,predicate:AB,represent:BB,defaultStyle:"lowercase"}),gB=Qv.extend({implicit:[lB,aB,dB,_B]}),DB=gB,Ii=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ji=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function CB(e){return e===null?!1:Ii.exec(e)!==null||ji.exec(e)!==null}function EB(e){var l,n,t,a,r,c,p,i=0,u=null,y,d,f;if(l=Ii.exec(e),l===null&&(l=ji.exec(e)),l===null)throw new Error("Date resolve error");if(n=+l[1],t=+l[2]-1,a=+l[3],!l[4])return new Date(Date.UTC(n,t,a));if(r=+l[4],c=+l[5],p=+l[6],l[7]){for(i=l[7].slice(0,3);i.length<3;)i+="0";i=+i}return l[9]&&(y=+l[10],d=+(l[11]||0),u=(y*60+d)*6e4,l[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,t,a,r,c,p,i)),u&&f.setTime(f.getTime()-u),f}function FB(e){return e.toISOString()}var kB=new le("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:CB,construct:EB,instanceOf:Date,represent:FB});function xB(e){return e==="<<"||e===null}var bB=new le("tag:yaml.org,2002:merge",{kind:"scalar",resolve:xB}),Na=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function wB(e){if(e===null)return!1;var l,n,t=0,a=e.length,r=Na;for(n=0;n<a;n++)if(l=r.indexOf(e.charAt(n)),!(l>64)){if(l<0)return!1;t+=6}return t%8===0}function $B(e){var l,n,t=e.replace(/[\r\n=]/g,""),a=t.length,r=Na,c=0,p=[];for(l=0;l<a;l++)l%4===0&&l&&(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)),c=c<<6|r.indexOf(t.charAt(l));return n=a%4*6,n===0?(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)):n===18?(p.push(c>>10&255),p.push(c>>2&255)):n===12&&p.push(c>>4&255),new Uint8Array(p)}function SB(e){var l="",n=0,t,a,r=e.length,c=Na;for(t=0;t<r;t++)t%3===0&&t&&(l+=c[n>>18&63],l+=c[n>>12&63],l+=c[n>>6&63],l+=c[n&63]),n=(n<<8)+e[t];return a=r%3,a===0?(l+=c[n>>18&63],l+=c[n>>12&63],l+=c[n>>6&63],l+=c[n&63]):a===2?(l+=c[n>>10&63],l+=c[n>>4&63],l+=c[n<<2&63],l+=c[64]):a===1&&(l+=c[n>>2&63],l+=c[n<<4&63],l+=c[64],l+=c[64]),l}function PB(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var VB=new le("tag:yaml.org,2002:binary",{kind:"scalar",resolve:wB,construct:$B,predicate:PB,represent:SB}),OB=Object.prototype.hasOwnProperty,LB=Object.prototype.toString;function TB(e){if(e===null)return!0;var l=[],n,t,a,r,c,p=e;for(n=0,t=p.length;n<t;n+=1){if(a=p[n],c=!1,LB.call(a)!=="[object Object]")return!1;for(r in a)if(OB.call(a,r))if(!c)c=!0;else return!1;if(!c)return!1;if(l.indexOf(r)===-1)l.push(r);else return!1}return!0}function MB(e){return e!==null?e:[]}var NB=new le("tag:yaml.org,2002:omap",{kind:"sequence",resolve:TB,construct:MB}),RB=Object.prototype.toString;function IB(e){if(e===null)return!0;var l,n,t,a,r,c=e;for(r=new Array(c.length),l=0,n=c.length;l<n;l+=1){if(t=c[l],RB.call(t)!=="[object Object]"||(a=Object.keys(t),a.length!==1))return!1;r[l]=[a[0],t[a[0]]]}return!0}function jB(e){if(e===null)return[];var l,n,t,a,r,c=e;for(r=new Array(c.length),l=0,n=c.length;l<n;l+=1)t=c[l],a=Object.keys(t),r[l]=[a[0],t[a[0]]];return r}var HB=new le("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:IB,construct:jB}),zB=Object.prototype.hasOwnProperty;function WB(e){if(e===null)return!0;var l,n=e;for(l in n)if(zB.call(n,l)&&n[l]!==null)return!1;return!0}function UB(e){return e!==null?e:{}}var qB=new le("tag:yaml.org,2002:set",{kind:"mapping",resolve:WB,construct:UB});DB.extend({implicit:[kB,bB],explicit:[VB,NB,HB,qB]});function Cc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var KB=new Array(256),JB=new Array(256);for(var Xl=0;Xl<256;Xl++)KB[Xl]=Cc(Xl)?1:0,JB[Xl]=Cc(Xl);function YB(e){return Array.from(new Set(e))}function Ec(...e){let l,n,t;e.length===1?(l=0,t=1,[n]=e):[l,n,t=1]=e;const a=[];let r=l;for(;r<n;)a.push(r),r+=t||1;return a}function Hi(e,l){if(!l||l==="all"||l==="*")return Ec(1,e+1);const n=[];for(const t of l.split(/[,;]/g))if(!t.includes("-"))n.push(+t);else{const[a,r]=t.split("-",2);n.push(...Ec(+a,r?+r+1:e+1))}return YB(n).filter(t=>t<=e).sort((t,a)=>t-a)}function ZB(e){const l=O(()=>e.value.path),n=O(()=>qs.length-1),t=O(()=>parseInt(l.value.split(/\//g).slice(-1)[0])||1),a=O(()=>ja(t.value)),r=O(()=>qs.find(f=>f.path===`${t.value}`)),c=O(()=>{var f,m,v;return(v=(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:v.id}),p=O(()=>{var f,m;return((m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.layout)||(t.value===1?"cover":"default")}),i=O(()=>qs.find(f=>f.path===`${Math.min(qs.length,t.value+1)}`)),u=O(()=>qs.filter(f=>{var m,v;return(v=(m=f.meta)==null?void 0:m.slide)==null?void 0:v.title}).reduce((f,m)=>(Ha(f,m),f),[])),y=O(()=>za(u.value,r.value)),d=O(()=>Wa(y.value));return{route:e,path:l,total:n,currentPage:t,currentPath:a,currentRoute:r,currentSlideId:c,currentLayout:p,nextRoute:i,rawTree:u,treeWithActiveStatuses:y,tree:d}}function GB(e,l,n){const t=ns(0);Pe(()=>{hl.afterEach(async()=>{await Pe(),t.value+=1})});const a=O(()=>{var i,u;return t.value,((u=(i=l.value)==null?void 0:i.meta)==null?void 0:u.__clicksElements)||[]}),r=O(()=>{var i,u;return+(((u=(i=l.value)==null?void 0:i.meta)==null?void 0:u.clicks)??a.value.length)}),c=O(()=>n.value<qs.length-1||e.value<r.value),p=O(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:a,clicksTotal:r,hasNext:c,hasPrev:p}}const QB=["id"],XB=Is({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:l}){const n=e,t=Me(n,"clicksElements",l),a=O(()=>({height:`${ba}px`,width:`${fl}px`})),r=Ie();Hl(()=>Promise.resolve().then(()=>um),void 0).then(u=>r.value=u.default);const c=O(()=>n.clicks),p=GB(c,n.nav.currentRoute,n.nav.currentPage),i=O(()=>`${n.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return ve(S,ee({nav:{...n.nav,...p},configs:Os,themeConfigs:O(()=>Os.themeConfig)})),(u,y)=>{var d;return A(),Y("div",{id:C(i),class:"slide-container",style:se(C(a))},[F(C(Mi)),F(C(Ta),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":C(t),"onUpdate:clicks-elements":y[0]||(y[0]=f=>Cs(t)?t.value=f:null),clicks:C(c),"clicks-disabled":!1,class:Hs(C(La)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),C(r)?(A(),L(C(r),{key:0,page:+e.route.path},null,8,["page"])):_s("v-if",!0),F(C(Ti))],12,QB)}}}),Fc=P(XB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),sA=Is({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const l=e;b(S);const n=ee(((r=l.route.meta)==null?void 0:r.__clicksElements)||[]),t=O(()=>l.route),a=ZB(t);return(c,p)=>(A(),Y(xs,null,[F(Fc,{"clicks-elements":n,"onUpdate:clicks-elements":p[0]||(p[0]=i=>Cs(n)?n.value=i:null),clicks:0,nav:C(a),route:C(t)},null,8,["clicks-elements","nav","route"]),C(Wi)?_s("v-if",!0):(A(!0),Y(xs,{key:0},lo(n.length,i=>(A(),L(Fc,{key:i,clicks:i,nav:C(a),route:C(t)},null,8,["clicks","nav","route"]))),128))],64))}}),eA=P(sA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlide.vue"]]),lA={id:"print-content"},nA=Is({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const l=e;b(S);const n=O(()=>l.width),t=O(()=>l.width/dl),a=O(()=>n.value/t.value),r=O(()=>a.value<dl?n.value/fl:t.value*dl/fl);let c=qs.slice(0,-1);He.value.query.range&&(c=Hi(c.length,He.value.query.range).map(u=>c[u-1]));const p=O(()=>({"select-none":!Os.selectable,"slidev-code-line-numbers":Os.lineNumbers}));return ve(qp,r),(i,u)=>(A(),Y("div",{id:"print-container",class:Hs(C(p))},[s("div",lA,[(A(!0),Y(xs,null,lo(C(c),y=>(A(),L(eA,{key:y.path,route:y},null,8,["route"]))),128))]),el(i.$slots,"controls")],2))}});const oA=P(nA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintContainer.vue"]]),tA=Is({__name:"Print",setup(e){b(S);function l(n,{slots:t}){if(t.default)return Xo("style",t.default())}return vn(()=>{Ia?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,t)=>(A(),Y(xs,null,[F(l,null,{default:D(()=>[o(" @page { size: "+Ys(C(fl))+"px "+Ys(C(ba))+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:se(C(wa))},[F(oA,{class:"w-full h-full",style:se({background:"var(--slidev-slide-container-background, black)"}),width:C(Tl).width.value},null,8,["style","width"])],4)],64))}});const aA=P(tA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Print.vue"]]);const rA={class:"slidev-layout end"},cA={__name:"end",setup(e){return b(S),(l,n)=>(A(),Y("div",rA," END "))}},pA=P(cA,[["__scopeId","data-v-b05edd45"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/end.vue"]]),iA="/vue-3-practices/logo.svg";function kc(e){return e.startsWith("/")?"/vue-3-practices"+e.slice(1):e}function uA(e,l=!1){const n=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),t={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?l?`linear-gradient(#0005, #0008), url(${kc(e)})`:`url("${kc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const yA={class:"my-auto w-full"},dA=Is({__name:"cover",props:{background:{default:""}},setup(e){const l=e;b(S);const n=O(()=>uA(l.background,!0));return(t,a)=>(A(),Y("div",{class:"slidev-layout cover",style:se(C(n))},[s("div",yA,[el(t.$slots,"default")])],4))}}),fA=P(dA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/theme-default/layouts/cover.vue"]]),hA=s("div",{class:"text-center"},[s("img",{src:iA,alt:"Vue",style:{width:"100px"},class:"inline"})],-1),mA=s("h1",null,"Vue.js",-1),vA={__name:"1",setup(e){const l={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}};return b(S),(n,t)=>(A(),L(fA,q(W(l)),{default:D(()=>[hA,mA]),_:1},16))}},BA=P(vA,[["__file","/@slidev/slides/1.md"]]),AA={class:"slidev-layout default"},_A={__name:"default",setup(e){return b(S),(l,n)=>(A(),Y("div",AA,[el(l.$slots,"default")]))}},J=P(_A,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/default.vue"]]),gA=s("h1",null,"アジェンダ",-1),DA=s("ul",null,[s("li",null,[o("はじめに "),s("ul",null,[s("li",null,"Composition API, 学習環境など")])]),s("li",null,[o("リアクティブの探求 "),s("ul",null,[s("li",null,"ref, reactive, toRefs, readonly など")])]),s("li",null,[o("算出プロパティ（computed） "),s("ul",null,[s("li",null,"computed")])]),s("li",null,[o("ウォッチャ（watch） "),s("ul",null,[s("li",null,"watch")])]),s("li",null,[o("テンプレート構文の説明 "),s("ul",null,[s("li",null,"mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model など")])]),s("li",null,[o("コンポーネント "),s("ul",null,[s("li",null,"props, emit, slot など")])]),s("li",null,[o("Vue アプリケーション開発に必要な周辺ライブラリ "),s("ul",null,[s("li",null,"throttle-debounce, fetch, Vue Router など")])])],-1),CA={__name:"2",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[gA,DA]),_:1},16))}},EA=P(CA,[["__file","/@slidev/slides/2.md"]]),FA=s("h1",null,"はじめに",-1),kA=s("h2",null,"Vue.js とは？",-1),xA=s("p",null,"Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。",-1),bA={class:"pt-4 text-sm"},wA={href:"https://v3.ja.vuejs.org/guide/introduction.html#vue-js-%E3%81%A8%E3%81%AF"},$A=o(" 公式サイト "),SA={__name:"3",setup(e){const l={};return b(S),(n,t)=>{const a=Li;return A(),L(J,q(W(l)),{default:D(()=>[FA,kA,xA,s("div",bA,[s("a",wA,[F(a,{class:"inline"}),$A])])]),_:1},16)}}},PA=P(SA,[["__file","/@slidev/slides/3.md"]]),VA=s("h1",null,"本講座のすすめかた",-1),OA=s("p",null,"どのような形式で進行するのかの確認",-1),LA=s("p",null,"ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。",-1),TA=s("p",null,"適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。",-1),MA={__name:"4",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[VA,OA,LA,TA]),_:1},16))}},NA=P(MA,[["__file","/@slidev/slides/4.md"]]),RA=s("h1",null,"準備",-1),IA=s("p",null,"使用するツールの確認とセットアップ",-1),jA=s("p",null,[o("本講座におけるハンズオン、演習、サンプルの閲覧は "),s("a",{href:"https://stackblitz.com/",target:"_blank",rel:"noopener"},"StackBlitz"),o(" でおこないます。")],-1),HA=s("p",null,"StackBlitz はブラウザ上で動作するオンライン IDE（統合開発環境）です。",-1),zA=s("p",null,"以下をやってみましょう",-1),WA=s("ol",null,[s("li",null,[o("動作環境を"),s("a",{href:"https://developer.stackblitz.com/docs/platform/browser-support/",target:"_blank",rel:"noopener"},"こちら"),o("で確認してブラウザを用意")]),s("li",null,[o("用意したブラウザで "),s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev"),o(" にアクセス")]),s("li",null,[s("code",null,"<template>Hello World!</template>"),o(" と書いてみる")]),s("li",null,[o("右カラムに "),s("code",null,"Hello World!"),o(" と表示されることを確認")])],-1),UA=s("p",null,"講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。",-1),qA={__name:"5",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[RA,IA,jA,HA,zA,WA,UA]),_:1},16))}},KA=P(qA,[["__file","/@slidev/slides/5.md"]]),JA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},YA=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),ZA=[YA];function GA(e,l){return A(),Y("svg",JA,ZA)}const QA={name:"ph-clipboard",render:GA},XA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},s9=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),e9=[s9];function l9(e,l){return A(),Y("svg",XA,e9)}const n9={name:"ph-check-circle",render:l9},o9=["title"],t9=Is({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const l=e;b(S);const n=b(zp),t=b(Wp),a=b(Up);function r(d=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",v=m.length;for(let g=0;g<d;g++)f.push(m.charAt(Math.floor(Math.random()*v)));return f.join("")}const c=ns(),p=ql();Jo(()=>{const d=l.at==null?t==null?void 0:t.value.length:l.at,f=O(()=>a!=null&&a.value?l.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(d||0)),l.ranges.length-1)),m=O(()=>l.ranges[f.value]||"");if(l.ranges.length>=2&&!(a!=null&&a.value)){const v=r(),g=od(l.ranges.length-1).map(_=>v+_);t!=null&&t.value&&(t.value.push(...g),_a(()=>g.forEach(_=>nd(t.value,_)),p))}vn(()=>{if(!c.value)return;const g=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const _ of g){const w=Array.from(_.querySelectorAll(".line")),E=Hi(w.length,m.value);if(w.forEach(($,H)=>{const ss=E.includes(H+1);$.classList.toggle(ld,!0),$.classList.toggle("highlighted",ss),$.classList.toggle("dishonored",!ss)}),l.maxHeight){const $=_.querySelector(".line.highlighted");$&&$.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:i,copy:u}=Xd();function y(){var f,m;const d=(m=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;d&&u(d)}return(d,f)=>{const m=n9,v=QA;return A(),Y("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:se({"max-height":l.maxHeight,"overflow-y":l.maxHeight?"scroll":void 0})},[el(d.$slots,"default"),C(Os).codeCopy?(A(),Y("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:C(i)?"Copied":"Copy",onClick:f[0]||(f[0]=g=>y())},[C(i)?(A(),L(m,{key:0,class:"p-2 w-8 h-8"})):(A(),L(v,{key:1,class:"p-2 w-8 h-8"}))],8,o9)):_s("v-if",!0)],4)}}}),us=P(t9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),a9=s("h1",null,"Vue には 2 つの API があります",-1),r9={class:"flex gap-8"},c9=o(" Options API "),p9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),i9=o(" Composition API "),u9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),y9=s("p",null,"現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。",-1),d9={__name:"6",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[a9,s("div",r9,[s("div",null,[c9,F(a,Z({},{ranges:[""]}),{default:D(()=>[p9]),_:1},16)]),s("div",null,[i9,F(a,Z({},{ranges:[""]}),{default:D(()=>[u9]),_:1},16)])]),y9]),_:1},16)}}},f9=P(d9,[["__file","/@slidev/slides/6.md"]]),h9="/vue-3-practices/apis.png",m9=s("h1",null,"Composition API のメリット",-1),v9=s("p",null,"Vue の機能ではなく、論理的な関心事でコードをまとめることができる",-1),B9=s("img",{src:h9,class:"h-5/6"},null,-1),A9={__name:"7",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[m9,v9,B9]),_:1},16))}},_9=P(A9,[["__file","/@slidev/slides/7.md"]]),g9=s("h1",null,"Vue には様々なシンタックスシュガー（糖衣構文）があります",-1),D9={class:"flex gap-8"},C9=o(" script "),E9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),F9=o(" script setup "),k9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),x9=s("p",null,"現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。",-1),b9={__name:"8",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[g9,s("div",D9,[s("div",null,[C9,F(a,Z({},{ranges:[""]}),{default:D(()=>[E9]),_:1},16)]),s("div",null,[F9,F(a,Z({},{ranges:[""]}),{default:D(()=>[k9]),_:1},16)])]),x9]),_:1},16)}}},w9=P(b9,[["__file","/@slidev/slides/8.md"]]),$9={class:"prose"},S9={__name:"FirstSample",setup(e){b(S);const l=ns(0);function n(){l.value+=1}return(t,a)=>(A(),Y("div",$9,[o(Ys(l.value)+" ",1),s("button",{onClick:n},"+")]))}},P9=P(S9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/FirstSample.vue"]]),V9=s("h1",null,"まずは書いてみる",-1),O9={class:"flex gap-8"},L9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    {{ count }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"increment"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"+"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    {{ count }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"increment"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"+"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),T9=o(" 動作サンプル "),M9={__name:"9",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=P9;return A(),L(J,q(W(l)),{default:D(()=>[V9,s("div",O9,[F(a,Z({},{ranges:[""]}),{default:D(()=>[L9]),_:1},16),s("div",null,[T9,F(r)])])]),_:1},16)}}},N9=P(M9,[["__file","/@slidev/slides/9.md"]]),R9=s("h1",null,"リアクティブの探求",-1),I9={class:"flex gap-4"},j9=s("div",null,[s("video",{controls:"",loop:"",style:{height:"30vh"},src:"https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"}),s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/guide/reactivity.html#%E3%83%AA%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%95%E3%82%99%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B"},"参考")])],-1),H9=s("p",null,"表計算ソフトと同じ手順をコードにすると",-1),z9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 5")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 5のまま（期待は6）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5のまま（期待は6）")])])])],-1),W9={__name:"10",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[R9,s("div",I9,[j9,s("div",null,[H9,F(a,Z({},{ranges:[""]}),{default:D(()=>[z9]),_:1},16)])])]),_:1},16)}}},U9=P(W9,[["__file","/@slidev/slides/10.md"]]),q9=s("h1",null,"リアクティブの探求",-1),K9={class:"flex gap-4"},J9=s("div",null,[s("p",null,"表計算ソフトと同じことをおこなうには"),s("ol",null,[s("li",null,"値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。"),s("li",null,"値の変更を検知する。 例: val1 = 3 と入れるとき。"),s("li",null,"最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。")]),s("p",null,"Vue には 1. 2. 3. のためのしくみがある")],-1),Y9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 2.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sum"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 3.")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 1.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 1.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 1.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 2.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 3.")])])])],-1),Z9={__name:"11",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[q9,s("div",K9,[J9,s("div",null,[F(a,Z({},{ranges:[""]}),{default:D(()=>[Y9]),_:1},16)])])]),_:1},16)}}},G9=P(Z9,[["__file","/@slidev/slides/11.md"]]),Q9=o(" val1: "),X9=o(" val2: "),s_={__name:"ReactiveSample",setup(e){b(S);const l=ns(2),n=ns(3),t=O(()=>l.value+n.value);return(a,r)=>(A(),Y("div",null,[s("p",null,[Q9,je(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c)},null,512),[[Kn,l.value]])]),s("p",null,[X9,je(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":r[1]||(r[1]=c=>n.value=c)},null,512),[[Kn,n.value]])]),s("p",null,"sum: "+Ys(C(t)),1)]))}},e_=P(s_,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ReactiveSample.vue"]]),l_=s("h1",null,"リアクティブの探求（ref によるリアクティブな値の参照）",-1),n_=s("p",null,[s("code",null,"ref"),o(" を使った値を操作する場合、"),s("code",null,"setup"),o(" 関数内では "),s("code",null,"value"),o(" プロパティにアクセスする。 "),s("code",null,"template"),o(" 内では変数（定数）そのものを参照するだけで値を得られる。")],-1),o_={class:"flex gap-8"},t_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"val2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"3"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"sum"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val2"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"val1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"val2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"3"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"sum"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val1"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"val2"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),a_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      val1:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"val1"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      val2:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"val2"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"sum: {{ sum }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      val1:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"val1"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      val2:")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"val2"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"sum: {{ sum }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),r_={__name:"12",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=e_;return A(),L(J,q(W(l)),{default:D(()=>[l_,n_,s("div",o_,[F(a,Z({},{ranges:[""]}),{default:D(()=>[t_]),_:1},16),F(a,Z({},{ranges:[""]}),{default:D(()=>[a_]),_:1},16),F(r)])]),_:1},16)}}},c_=P(r_,[["__file","/@slidev/slides/12.md"]]),p_=s("h1",null,"リアクティブの探求（リアクティブな値をオブジェクトにまとめる）",-1),i_=s("p",null,[o("リアクティブにしたいデータがオブジェクトの場合、"),s("code",null,"reactive"),o(" を使う")],-1),u_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"user.name"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    {{ user.name }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"reactive"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"reactive"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'""'),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"user.name"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    {{ user.name }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"reactive"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"reactive"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'""'),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),y_={__name:"13",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[p_,i_,F(a,Z({},{ranges:[""]}),{default:D(()=>[u_]),_:1},16)]),_:1},16)}}},d_=P(y_,[["__file","/@slidev/slides/13.md"]]),f_=s("h1",null,"リアクティブの探求（オブジェクトにまとめたリアクティブな値を取り出す）",-1),h_=s("p",null,[o("前項の "),s("code",null,"reactive"),o(" だと、分割代入しても値が取り出せない。Vue では "),s("code",null,"toRefs"),o(" を使うことで可能になる。")],-1),m_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"user.name"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"user.name: {{ user.name }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"name: {{ name }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"user.name"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"user.name: {{ user.name }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"name: {{ name }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),v_={__name:"14",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[f_,h_,F(a,Z({},{ranges:[""]}),{default:D(()=>[m_]),_:1},16)]),_:1},16)}}},B_=P(v_,[["__file","/@slidev/slides/14.md"]]),A_=s("h1",null,"リアクティブの探求（リアクティブな値を読み込み専用にする）",-1),__=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"<!-- user.name を変更しようとすると失敗し、警告が表示されます -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"user.name"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"user.name: {{ user.name }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"name: {{ name }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"<!-- user.name を変更しようとすると失敗し、警告が表示されます -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"user.name"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"user.name: {{ user.name }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"name: {{ name }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),g_={__name:"15",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[A_,F(a,Z({},{ranges:[""]}),{default:D(()=>[__]),_:1},16)]),_:1},16)}}},D_=P(g_,[["__file","/@slidev/slides/15.md"]]),C_=s("h1",null,"算出プロパティ（computed）",-1),E_=s("p",null,[o("あるリアクティブな値を元に計算結果を返したい場合、"),s("code",null,"computed"),o(" 関数を利用する")],-1),F_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    {{ plusOne }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"plusOne"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    {{ plusOne }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"plusOne"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),k_={__name:"16",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[C_,E_,F(a,Z({},{ranges:[""]}),{default:D(()=>[F_]),_:1},16)]),_:1},16)}}},x_=P(k_,[["__file","/@slidev/slides/16.md"]]),b_=s("h1",null,"算出プロパティ（computed）",-1),w_=s("p",null,[s("code",null,"get"),o(),s("code",null,"set"),o(" 関数を用意することで書込み可能なオブジェクトを作成することができる")],-1),$_={class:"h-sm overflow-y-auto"},S_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"handleClick"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"リセット"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    {{ plusOne }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"handleClick"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"リセット"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    {{ plusOne }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),P_={__name:"17",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[b_,w_,s("div",$_,[F(a,Z({},{ranges:[""]}),{default:D(()=>[S_]),_:1},16)])]),_:1},16)}}},V_=P(P_,[["__file","/@slidev/slides/17.md"]]),O_={inject:{$slidev:{from:S}},setup(){const e=()=>Math.random(),l=O(()=>Math.random());return{randomMethods:e,randomComputed:l}}},L_=s("p",null,"関数呼び出しの場合",-1),T_={class:"use-methods"},M_=s("p",null,"computedを使った場合",-1),N_={class:"use-computed"};function R_(e,l,n,t,a,r){return A(),Y(xs,null,[L_,s("ol",T_,[s("li",null,Ys(t.randomMethods()),1),s("li",null,Ys(t.randomMethods()),1),s("li",null,Ys(t.randomMethods()),1)]),M_,s("ol",N_,[s("li",null,Ys(t.randomComputed),1),s("li",null,Ys(t.randomComputed),1),s("li",null,Ys(t.randomComputed),1)])],64)}const I_=P(O_,[["render",R_],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ComputedMethods.vue"]]),j_=s("h1",null,"computed と関数呼び出しの違い",-1),H_=s("p",null,[o("関数呼び出しは都度呼び出される毎に実行するのに対し、"),s("code",null,"computed"),o(" 内で参照しているリアクティブな値が変更されない限り、"),s("code",null,"computed"),o(" は一度キャッシュされた結果を返す。 うまく使い分けるとパフォーマンスの向上に役立てる。")],-1),z_={class:"flex gap-4"},W_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"関数呼び出しの場合"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"use-methods"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ randomMethods() }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ randomMethods() }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ randomMethods() }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"computedを使った場合"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"use-computed"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ randomComputed }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ randomComputed }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ randomComputed }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"関数呼び出しの場合"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"use-methods"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ randomMethods() }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ randomMethods() }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ randomMethods() }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"computedを使った場合"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"use-computed"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ randomComputed }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ randomComputed }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ randomComputed }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),U_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"computed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"randomMethods"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Math"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"random"),s("span",{style:{color:"#858585"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"randomComputed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"computed"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Math"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"random"),s("span",{style:{color:"#858585"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"computed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"randomMethods"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Math"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"random"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"randomComputed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"computed"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Math"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"random"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),q_={__name:"18",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=I_;return A(),L(J,q(W(l)),{default:D(()=>[j_,H_,s("div",z_,[F(a,Z({},{ranges:[""]}),{default:D(()=>[W_]),_:1},16),F(a,Z({},{ranges:[""]}),{default:D(()=>[U_]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},K_=P(q_,[["__file","/@slidev/slides/18.md"]]),J_=s("h1",null,"ウォッチャ（watch）",-1),Y_=s("p",null,"特定のデータを監視し、変更があったときに処理を行える、引数として、新しい値とその前の値を取得できる。",-1),Z_={class:"h-sm overflow-y-auto"},G_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    {{ plusOne }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    {{ plusOne }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Q_={__name:"19",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[J_,Y_,s("div",Z_,[F(a,Z({},{ranges:[""]}),{default:D(()=>[G_]),_:1},16)])]),_:1},16)}}},X_=P(Q_,[["__file","/@slidev/slides/19.md"]]),s1=s("h1",null,"ウォッチャ（watch）",-1),e1=s("p",null,"配列を監視する場合、複数のデータソースを同時に監視できる",-1),l1={class:"h-sm overflow-y-auto"},n1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"number"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    {{ plusOne }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"number"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    {{ plusOne }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),o1={__name:"20",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[s1,e1,s("div",l1,[F(a,Z({},{ranges:[""]}),{default:D(()=>[n1]),_:1},16)])]),_:1},16)}}},t1=P(o1,[["__file","/@slidev/slides/20.md"]]),a1=s("h1",null,"テンプレート構文",-1),r1=s("ul",null,[s("li",null,"展開"),s("li",null,"ディレクティブ"),s("li",null,"バインディング"),s("li",null,"イベントハンドリング"),s("li",null,"条件付きレンダリング"),s("li",null,"リストレンダリング"),s("li",null,"フォーム入力バインディング")],-1),c1={__name:"21",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[a1,r1]),_:1},16))}},p1=P(c1,[["__file","/@slidev/slides/21.md"]]),i1=s("h1",null,"展開",-1),u1=s("p",null,"Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる",-1),y1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Message: {{ msg }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"msg"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Hello!"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Message: {{ msg }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"msg"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Hello!"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),d1=s("p",null,"結果",-1),f1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"Message: Hello!")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"Message: Hello!")])])])],-1),h1={__name:"22",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[i1,u1,F(a,Z({},{ranges:[""]}),{default:D(()=>[y1]),_:1},16),d1,f1]),_:1},16)}}},m1=P(h1,[["__file","/@slidev/slides/22.md"]]),v1={__name:"CounterSample",setup(e){b(S);const l=ns(10);return setInterval(()=>{l.value+=1},1e3),(n,t)=>(A(),Y("div",null,"Counter: "+Ys(l.value),1))}},B1=P(v1,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/CounterSample.vue"]]),A1=s("h1",null,"展開（リアクティブな値を使うと）",-1),_1=s("p",{class:"text-sm"}," counterを1秒ごとに増やしていく ",-1),g1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Counter: {{ counter }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"10"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A1B567"}},"setInterval"),s("span",{style:{color:"#858585"}},"(()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"},"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Counter: {{ counter }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"10"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6C7834"}},"setInterval"),s("span",{style:{color:"#8E8F8B"}},"(()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"},"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),D1=s("p",null,"結果",-1),C1={__name:"23",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=B1;return A(),L(J,q(W(l)),{default:D(()=>[A1,_1,F(a,Z({},{ranges:[""]}),{default:D(()=>[g1]),_:1},16),D1,s("div",null,[F(r)])]),_:1},16)}}},E1=P(C1,[["__file","/@slidev/slides/23.md"]]),F1=s("h1",null,"ディレクティブ",-1),k1=s("ul",null,[s("li",null,"ディレクティブは Vue によって提供される特別な属性"),s("li",null,"v- から始まる"),s("li",null,[o("特定のディレクティブ（v-bind と v-on）は省略記法がある（例："),s("code",null,":href"),o(),s("code",null,"@click"),o("）")]),s("li",null,[o("特定のディレクティブは引数を渡すことができる（例："),s("code",null,"v-on:click"),o("）")])],-1),x1=s("p",null,"ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい",-1),b1={__name:"24",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[F1,k1,x1]),_:1},16))}},w1=P(b1,[["__file","/@slidev/slides/24.md"]]),$1=s("h1",null,"バインディング",-1),S1=s("p",null,[o("「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 "),s("code",null,"v-bind"),o(" ディレクティブを使う")],-1),P1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-bind:href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"url"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js公式サイト "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"url"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"https://v3.ja.vuejs.org/"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-bind:href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"url"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js公式サイト "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"url"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"https://v3.ja.vuejs.org/"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),V1=s("p",null,"省略するとこのように書ける",-1),O1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"url"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js公式サイト "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"url"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js公式サイト "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),L1={__name:"25",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[$1,S1,s("div",null,[F(a,Z({},{ranges:[""]}),{default:D(()=>[P1]),_:1},16),V1]),F(a,Z({},{ranges:[""]}),{default:D(()=>[O1]),_:1},16)]),_:1},16)}}},T1=P(L1,[["__file","/@slidev/slides/25.md"]]),M1=s("h1",null,"バインディング（クラスとスタイル）",-1),N1=s("p",null,"クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある",-1),R1={class:"flex gap-6"},I1=s("p",{class:"text-xs"},"オブジェクト構文",-1),j1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"{ red: red }"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"style"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"{ red: red }"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),H1=s("p",{class:"text-xs"},"配列構文はこのように書ける",-1),z1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),W1=s("p",{class:"text-xs"},"組み合わせることもできる",-1),U1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red, { red }]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red, { red }]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),q1=s("p",{class:"text-xs"},"スタイル属性にもオブジェクト構文と配列構文がある",-1),K1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":style"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},`"{ color: 'red' }"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":style"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},`"{ color: 'red' }"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),J1={__name:"26",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[M1,N1,s("div",R1,[s("div",null,[I1,F(a,Z({},{ranges:[""]}),{default:D(()=>[j1]),_:1},16)]),s("div",null,[H1,F(a,Z({},{ranges:[""]}),{default:D(()=>[z1]),_:1},16),W1,F(a,Z({},{ranges:[""]}),{default:D(()=>[U1]),_:1},16),q1,F(a,Z({},{ranges:[""]}),{default:D(()=>[K1]),_:1},16)])])]),_:1},16)}}},Y1=P(J1,[["__file","/@slidev/slides/26.md"]]),Z1=s("h1",null,"イベントハンドリング",-1),G1=s("p",null,[s("code",null,"v-on"),o(" ディレクティブは HTML 要素などの"),s("a",{href:"https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events",target:"_blank",rel:"noopener"},"イベント"),o("操作に使われる。"),s("code",null,":"),o("の後の引数でイベントの種類を指定できる")],-1),Q1={class:"h-60 mb-6 overflow-y-auto"},X1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-on:click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"counter += 1"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"clicked {{ counter }} times."),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"counter"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-on:click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"counter += 1"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"clicked {{ counter }} times."),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),sg=s("p",null,"省略するとこのようにかける",-1),eg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"counter += 1"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"counter += 1"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),lg={__name:"27",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[Z1,G1,s("div",Q1,[F(a,Z({},{ranges:[""]}),{default:D(()=>[X1]),_:1},16)]),sg,F(a,Z({},{ranges:[""]}),{default:D(()=>[eg]),_:1},16)]),_:1},16)}}},ng=P(lg,[["__file","/@slidev/slides/27.md"]]),og=s("h1",null,"イベントハンドリング（関数名を属性値として使う）",-1),tg=s("p",null,"関数を渡すと複雑な処理が書きやすい",-1),ag=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"increment"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"clicked {{ counter }} times."),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"increment"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"clicked {{ counter }} times."),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),rg={__name:"28",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[og,tg,F(a,Z({},{ranges:[""]}),{default:D(()=>[ag]),_:1},16)]),_:1},16)}}},cg=P(rg,[["__file","/@slidev/slides/28.md"]]);let pg=e=>crypto.getRandomValues(new Uint8Array(e)),ig=(e,l,n)=>{let t=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*t*l/e.length);return(r=l)=>{let c="";for(;;){let p=n(a),i=a;for(;i--;)if(c+=e[p[i]&t]||"",c.length===r)return c}}},ug=(e,l=21)=>ig(e,l,pg);const yg=["width","height"],dg=["id"],fg=["fill"],hg=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],mg=Is({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){b(S);const n=ug("abcedfghijklmn",10)();return(t,a)=>(A(),Y("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",{id:C(n),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,fg)],8,dg)]),s("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${C(n)})`},null,8,hg)],8,yg))}}),Ra=P(mg,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/Arrow.vue"]]),vg=s("h1",null,"条件付きレンダリング",-1),Bg=s("p",null,[s("code",null,"v-if"),o(" あるいは "),s("code",null,"v-show"),o(" によって条件に応じてレンダリングする範囲を変更することができる。 "),s("code",null,"v-show"),o(" は見た目上非表示にするが "),s("code",null,"v-if"),o(" は DOM 要素も取り除く。")],-1),Ag=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"conditional-rendering"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"seen"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Now you see me"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"seen"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"conditional-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"seen"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Now you see me"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"seen"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),_g={__name:"29",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=Ra,c=ga("click");return A(),L(J,q(W(l)),{default:D(()=>[vg,Bg,F(a,Z({},{ranges:["all","3","8","all"]}),{default:D(()=>[Ag]),_:1},16),je(F(r,{x1:"350",y1:"370",x2:"190",y2:"310",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,2]])]),_:1},16)}}},gg=P(_g,[["__file","/@slidev/slides/29.md"]]),Dg=s("h1",null,"条件付きレンダリング（v-if と v-show の使い分け）",-1),Cg=s("div",{class:"mb-6"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}}),s("th",{style:{"text-align":"left"}},"v-if"),s("th",{style:{"text-align":"left"}},"v-show")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},"初期コスト"),s("td",{style:{"text-align":"left"}},"低い"),s("td",{style:{"text-align":"left"}},"高い")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"切り替えコスト"),s("td",{style:{"text-align":"left"}},"高い"),s("td",{style:{"text-align":"left"}},"低い")])])])],-1),Eg=s("ul",null,[s("li",null,[o("コンポーネントをマウントしてからあまり変化しないケースであれば "),s("code",null,"v-if"),o("を使う")]),s("li",null,[o("コンポーネントをマウントしてから頻繁に変化するケースであれば "),s("code",null,"v-show"),o("を使う")])],-1),Fg={__name:"30",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[Dg,Cg,Eg]),_:1},16))}},kg=P(Fg,[["__file","/@slidev/slides/30.md"]]),xg=s("h1",null,"条件付きレンダリング",-1),bg=s("p",null,[s("code",null,"v-if v-else v-else-if"),o(" でレンダリングの条件分岐ができる。 "),s("code",null,"template"),o(" 要素に対して使うことでグルーピングすることもできる。")],-1),wg={class:"flex gap-4"},$g=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},`"type === 'A'"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"A"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-else-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},`"type === 'B'"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"B"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-else-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},`"type === 'C'"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"C"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-else"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Not A/B/C"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"A"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},`"type === 'A'"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"A"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-else-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},`"type === 'B'"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"B"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-else-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},`"type === 'C'"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"C"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-else"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Not A/B/C"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"A"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Sg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#B8A965"}},"ok"),s("span",{style:{color:"#C98A7D"}},'"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"h1"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Title"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"h1"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Paragraph 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Paragraph 2"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"ok"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8C862B"}},"ok"),s("span",{style:{color:"#B56959"}},'"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"h1"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Title"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"h1"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Paragraph 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Paragraph 2"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"ok"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Pg={__name:"31",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[xg,bg,s("div",wg,[F(a,Z({},{ranges:[""]}),{default:D(()=>[$g]),_:1},16),F(a,Z({},{ranges:[""]}),{default:D(()=>[Sg]),_:1},16)])]),_:1},16)}}},Vg=P(Pg,[["__file","/@slidev/slides/31.md"]]),Og=s("h1",null,"リストレンダリング",-1),Lg=s("p",null,"配列あるいはオブジェクトをもとに反復した要素の表示ができる。",-1),Tg={class:"flex gap-8"},Mg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"list-rendering"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"todo in todos"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        {{ todo.text }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"list-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"todo in todos"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        {{ todo.text }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ng=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),Rg={__name:"32",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[Og,Lg,s("div",Tg,[F(a,Z({},{ranges:[""]}),{default:D(()=>[Mg]),_:1},16),Ng])]),_:1},16)}}},Ig=P(Rg,[["__file","/@slidev/slides/32.md"]]),jg=s("h1",null,[o("リストレンダリング（"),s("code",null,"key"),o(" 属性の付与）")],-1),Hg=s("p",null,[o("要素の再利用と並び替えを考慮する場合、一意な値を "),s("code",null,"key"),o(" 属性に渡す必要がある。")],-1),zg={class:"flex gap-8"},Wg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"list-rendering"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"todo in todos"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"todo.id"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        {{ todo.text }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"list-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"todo in todos"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"todo.id"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        {{ todo.text }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ug=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),qg={__name:"33",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[jg,Hg,s("div",zg,[F(a,Z({},{ranges:[""]}),{default:D(()=>[Wg]),_:1},16),Ug])]),_:1},16)}}},Kg=P(qg,[["__file","/@slidev/slides/33.md"]]),Jg=s("h1",null,[o("リストレンダリング（添字による "),s("code",null,"key"),o(" 属性の付与）")],-1),Yg=s("p",null,"識別子を用意していない場合、添字が得られるので代用すると便利。",-1),Zg={class:"flex gap-8"},Gg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"list-rendering"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ol"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"(todo, index) in todos"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"index"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        {{ todo.text }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"list-rendering"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ol"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"(todo, index) in todos"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"index"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        {{ todo.text }}")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Qg=s("div",{class:"flex-shrink w-110"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")]),s("p",null,"ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意")],-1),Xg={__name:"34",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[Jg,Yg,s("div",Zg,[F(a,Z({},{ranges:["all","4"]}),{default:D(()=>[Gg]),_:1},16),Qg])]),_:1},16)}}},sD=P(Xg,[["__file","/@slidev/slides/34.md"]]),eD={id:"two-way-binding"},lD={__name:"TwoWayBindingSample",setup(e){b(S);const l=ns("Hello Vue!");return(n,t)=>(A(),Y("div",eD,[s("p",null,Ys(l.value),1),je(s("input",{class:"text-black p-1","onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a)},null,512),[[Kn,l.value]])]))}},nD=P(lD,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwoWayBindingSample.vue"]]),oD=s("h1",null,"フォーム入力バインディング",-1),tD=s("p",null,[s("code",null,"v-model"),o(" によって form の input 要素や textarea 要素、select 要素の入力イベントに応じてデータを更新できるようになる。")],-1),aD={class:"flex gap-8"},rD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"two-way-binding"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ message }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"message"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello Vue!"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"two-way-binding"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ message }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"message"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello Vue!"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),cD={__name:"35",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=nD;return A(),L(J,q(W(l)),{default:D(()=>[oD,tD,s("div",aD,[F(a,Z({},{ranges:[""]}),{default:D(()=>[rD]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},pD=P(cD,[["__file","/@slidev/slides/35.md"]]),iD=s("h1",null,"コンポーネント",-1),uD=s("ul",null,[s("li",null,"コンポーネントの基本と構成"),s("li",null,"プロパティを用いた子コンポーネントへのデータの受け渡し"),s("li",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し"),s("li",null,"v-model を用いた親子間コンポーネントのデータの受け渡し"),s("li",null,"v-model を用いない親子間コンポーネントのデータの受け渡し"),s("li",null,"コンポーネントで v-model を使う"),s("li",null,"スロットによるコンテンツ配信")],-1),yD={__name:"36",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[iD,uD]),_:1},16))}},dD=P(yD,[["__file","/@slidev/slides/36.md"]]),fD="/vue-3-practices/components.png",hD=s("h1",null,"コンポーネントの基本と構成",-1),mD=s("p",null,"親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）",-1),vD=s("img",{src:fD,alt:"コンポーネントの基本と構成",style:{height:"80%",width:"auto"}},null,-1),BD={__name:"37",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[hD,mD,vD]),_:1},16))}},AD=P(BD,[["__file","/@slidev/slides/37.md"]]),_D=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),gD=s("p",null,"親コンポーネントから子コンポーネントに 文字列 を渡してみる",-1),DD={class:"flex gap-8"},CD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),ED=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"title"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"Hello!"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"title"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"Hello!"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),FD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),kD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ message }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"title"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"String"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ message }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"title"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"String"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),xD={__name:"38",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[_D,gD,s("div",DD,[s("div",null,[CD,F(a,Z({},{ranges:[""]}),{default:D(()=>[ED]),_:1},16)]),s("div",null,[FD,F(a,Z({},{ranges:[""]}),{default:D(()=>[kD]),_:1},16)])])]),_:1},16)}}},bD=P(xD,[["__file","/@slidev/slides/38.md"]]),wD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),$D=s("p",null,"数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある",-1),SD={class:"flex gap-8"},PD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),VD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":count"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"14"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":count"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"14"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),OD=s("p",{class:"text-xs"},"静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります",-1),LD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),TD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ message }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Number"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"message"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ message }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Number"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"message"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),MD={__name:"39",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=Ra,c=ga("click");return A(),L(J,q(W(l)),{default:D(()=>[wD,$D,s("div",SD,[s("div",null,[PD,F(a,Z({},{ranges:["all","2","all"]}),{default:D(()=>[VD]),_:1},16),OD]),s("div",null,[LD,F(a,Z({},{ranges:[""]}),{default:D(()=>[TD]),_:1},16)])]),je(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},ND=P(MD,[["__file","/@slidev/slides/39.md"]]),RD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),ID=s("p",null,"真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),jD={class:"flex gap-8"},HD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),zD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":is-show"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"false"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":is-show"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"false"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),WD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),UD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"show"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"isShow"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Boolean"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"show"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isShow"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"show"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Boolean"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"show"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isShow"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),qD={__name:"40",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=Ra,c=ga("click");return A(),L(J,q(W(l)),{default:D(()=>[RD,ID,s("div",jD,[s("div",null,[HD,F(a,Z({},{ranges:["all","2","all"]}),{default:D(()=>[zD]),_:1},16)]),s("div",null,[WD,F(a,Z({},{ranges:[""]}),{default:D(()=>[UD]),_:1},16)])]),je(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},KD=P(qD,[["__file","/@slidev/slides/40.md"]]),JD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),YD=s("p",null,"props はデフォルト値を設定することもできる",-1),ZD={class:"flex gap-8"},GD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),QD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":is-show"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"false"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":is-show"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"false"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),XD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),sC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-if"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"show"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-if"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"show"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"props'is-show'がtrueであれば見れます"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),eC={__name:"41",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[JD,YD,s("div",ZD,[s("div",null,[GD,F(a,Z({},{ranges:[""]}),{default:D(()=>[QD]),_:1},16)]),s("div",null,[XD,F(a,Z({},{ranges:["all","9-12","all"]}),{default:D(()=>[sC]),_:1},16)])])]),_:1},16)}}},lC=P(eC,[["__file","/@slidev/slides/41.md"]]),nC=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),oC=s("p",null,"配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),tC={class:"flex gap-8"},aC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),rC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":student"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},`"{ name: 'taro', old: '16' }"`),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":student"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},`"{ name: 'taro', old: '16' }"`),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),cC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),pC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"こんにちは、{{ user.name }}さん、{{ user.old }}歳になりましたね"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"props"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineProps"),s("span",{style:{color:"#858585"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"student"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Object"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"user"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"props"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"student"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"こんにちは、{{ user.name }}さん、{{ user.old }}歳になりましたね"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"props"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineProps"),s("span",{style:{color:"#8E8F8B"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"student"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Object"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"user"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"props"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"student"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),iC={__name:"42",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[nC,oC,s("div",tC,[s("div",null,[aC,F(a,Z({},{ranges:[""]}),{default:D(()=>[rC]),_:1},16)]),s("div",null,[cC,F(a,Z({},{ranges:[""]}),{default:D(()=>[pC]),_:1},16)])])]),_:1},16)}}},uC=P(iC,[["__file","/@slidev/slides/42.md"]]),yC={__name:"EmitChild",emits:["child-clicked"],setup(e,{emit:l}){b(S);function n(){l("child-clicked","Hello!")}return(t,a)=>(A(),Y("button",{onClick:n},"emit !"))}},dC=P(yC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitChild.vue"]]),fC={__name:"EmitParent",setup(e){b(S);function l(n){alert(n)}return(n,t)=>(A(),L(dC,{onChildClicked:l}))}},hC=P(fC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitParent.vue"]]),mC=s("h1",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し",-1),vC=s("p",null,"子コンポーネントでイベントを発火させることによって可能",-1),BC={class:"flex gap-8"},AC={class:"flex-shrink"},_C=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),gC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@child-clicked"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"clicked"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"clicked"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"alert"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@child-clicked"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"clicked"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"clicked"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"alert"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),DC={class:"flex-shrink"},CC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),EC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"clickHandler"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"emit !"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"emit"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineEmits"),s("span",{style:{color:"#858585"}},"(["),s("span",{style:{color:"#C98A7D"}},'"child-clicked"'),s("span",{style:{color:"#858585"}},"]);")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"clickHandler"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"emit"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"child-clicked"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Hello!"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"clickHandler"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"emit !"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"emit"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineEmits"),s("span",{style:{color:"#8E8F8B"}},"(["),s("span",{style:{color:"#B56959"}},'"child-clicked"'),s("span",{style:{color:"#8E8F8B"}},"]);")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"clickHandler"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"emit"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"child-clicked"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Hello!"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),FC={class:"flex-shrink-0"},kC=s("p",{class:"text-xs"},"実行サンプル",-1),xC={__name:"43",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=hC;return A(),L(J,q(W(l)),{default:D(()=>[mC,vC,s("div",BC,[s("div",AC,[_C,F(a,Z({},{ranges:[""]}),{default:D(()=>[gC]),_:1},16)]),s("div",DC,[CC,F(a,Z({},{ranges:[""]}),{default:D(()=>[EC]),_:1},16)]),s("div",FC,[kC,F(r)])])]),_:1},16)}}},bC=P(xC,[["__file","/@slidev/slides/43.md"]]),wC={__name:"TwowayChild",props:{modelValue:String},emits:["update:modelValue"],setup(e,{emit:l}){const n=e;b(S);const t=O({get:()=>n.modelValue,set:a=>{l("update:modelValue",a)}});return(a,r)=>je((A(),Y("input",{"onUpdate:modelValue":r[0]||(r[0]=c=>Cs(t)?t.value=c:null)},null,512)),[[Kn,C(t)]])}},$C=P(wC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayChild.vue"]]),SC={__name:"TwowayParent",setup(e){b(S);const l=ns("Hello !");return(n,t)=>(A(),Y(xs,null,[F($C,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a)},null,8,["modelValue"]),s("p",null,Ys(l.value),1)],64))}},PC=P(SC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayParent.vue"]]),VC=s("h1",null,"v-model を用いた親子間コンポーネントのデータの受け渡し",-1),OC=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),LC={class:"flex gap-8"},TC={class:"flex-shrink"},MC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),NC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"title"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ title }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello !"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"title"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ title }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),RC={class:"flex-shrink"},IC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),jC={class:"h-xs overflow-y-auto"},HC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"title"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"title"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),zC={class:"flex-shrink-0"},WC=s("p",{class:"text-xs"},"実行サンプル",-1),UC={__name:"44",setup(e){const l={};return b(S),(n,t)=>{const a=us,r=PC;return A(),L(J,q(W(l)),{default:D(()=>[VC,OC,s("div",LC,[s("div",TC,[MC,F(a,Z({},{ranges:[""]}),{default:D(()=>[NC]),_:1},16)]),s("div",RC,[IC,s("div",jC,[F(a,Z({},{ranges:[""]}),{default:D(()=>[HC]),_:1},16)])]),s("div",zC,[WC,F(r)])])]),_:1},16)}}},qC=P(UC,[["__file","/@slidev/slides/44.md"]]),KC=s("h1",null,"v-model を用いない親子間コンポーネントのデータの受け渡し",-1),JC=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),YC={class:"flex gap-8"},ZC={class:"flex-shrink"},GC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),QC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@update:modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"title = $event"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"title"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ title }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello !"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@update:modelValue"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"title = $event"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":modelValue"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"title"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ title }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),XC=s("ul",null,[s("li",null,"v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）"),s("li",null,"親 → 子：プロパティ"),s("li",null,"子 → 親：イベント"),s("li",null,"このような状態が双方向バインディング（値を束縛しあっている）")],-1),s4={__name:"45",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[KC,JC,s("div",YC,[s("div",ZC,[GC,F(a,Z({},{ranges:[""]}),{default:D(()=>[QC]),_:1},16)]),XC])]),_:1},16)}}},e4=P(s4,[["__file","/@slidev/slides/45.md"]]),l4=s("h1",null,"スロットによるコンテンツ配信",-1),n4=s("p",null,"slot を使うと、HTML 要素のようにコンポーネントに子要素を渡すことができる",-1),o4={class:"flex gap-8"},t4={class:"flex-shrink"},a4=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),r4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello Component"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello Component"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),c4={class:"flex-shrink"},p4=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),i4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ChildComponent: "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ChildComponent: "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),u4=s("div",{class:"text-xs"},[s("p",{class:"text-xs"},"結果例"),s("strong",null,"ChildComponent: "),o("Hello Component ")],-1),y4={__name:"46",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[l4,n4,s("div",o4,[s("div",t4,[a4,F(a,Z({},{ranges:[""]}),{default:D(()=>[r4]),_:1},16)]),s("div",c4,[p4,F(a,Z({},{ranges:[""]}),{default:D(()=>[i4]),_:1},16)])]),u4]),_:1},16)}}},d4=P(y4,[["__file","/@slidev/slides/46.md"]]),f4=s("h1",null,"Vue の基本的な書き方はこれで以上！",-1),h4=s("p",null,"おつかれさまでした",-1),m4=s("p",null,"以下を学んできた",-1),v4=s("ul",null,[s("li",null,"リアクティブな値の作り方"),s("li",null,"テンプレートの書き方"),s("li",null,"コンポーネントの作り方")],-1),B4=s("p",null,"ここまでは Vue.js を使うなら必ず知っている必要がある内容",-1),A4=s("p",null,"引き続き知らない機能がコードに出てくるかもしれないが、学んだことと関連していると感じられたらそれでよい",-1),_4=s("p",null,"学習の目安",-1),g4=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),D4=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),C4={__name:"47",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[f4,h4,m4,v4,B4,A4,_4,g4,D4]),_:1},16))}},E4=P(C4,[["__file","/@slidev/slides/47.md"]]),F4=s("h1",null,"次のステップは？",-1),k4=s("p",null,"これから学ぶ内容の確認",-1),x4=s("ul",null,[s("li",null,[o("より具体的な題材でコードを読む・書く "),s("ul",null,[s("li",null,[o("グリッドコンポーネント "),s("ul",null,[s("li",null,"これまで学んだ内容を組み合わせた少し複雑な実装")])]),s("li",null,[o("Markdown エディター "),s("ul",null,[s("li",null,"throttle-debounce によるイベント処理の間引き")])]),s("li",null,[o("ツクロアデザインラボの記事ビューアー "),s("ul",null,[s("li",null,"Fetch API による JSON データの取得"),s("li",null,"Vue Router による画面遷移")])]),s("li",null,[o("靴のギャラリー "),s("ul",null,[s("li",null,"画像の取得と表示"),s("li",null,"あらかじめ用意されたスタイルの適用")])])])]),s("li",null,[o("Nuxt 3 を使う "),s("ul",null,[s("li",null,"Vue.js 単体を使う場合との違い"),s("li",null,"useFetch などの Nuxt 3 特有のヘルパー関数の使い方")])])],-1),b4={__name:"48",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[F4,k4,x4]),_:1},16))}},w4=P(b4,[["__file","/@slidev/slides/48.md"]]),$4=s("h1",null,"グリッドコンポーネント",-1),S4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev")],-1),P4=s("ol",null,[s("li",null,"どんなアプリか：表にデータを流し込んでカラムで並べ替えできる"),s("li",null,"コードの説明"),s("li",null,"行を追加できるようにしよう（20 分程度）")],-1),V4={__name:"49",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[$4,S4,P4]),_:1},16))}},O4=P(V4,[["__file","/@slidev/slides/49.md"]]),L4=s("h1",null,"イベント処理の間引き",-1),T4=s("p",null,"throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる",-1),M4={class:"flex gap-8"},N4={class:"flex-shrink"},R4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),I4={class:"flex-shrink"},j4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"input"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"text"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"message"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@input"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"filterFruits"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"(fruit, index) in fruits"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":key"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"index"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      {{ fruit }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"input"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"text"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"message"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@input"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"filterFruits"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"/>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"(fruit, index) in fruits"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":key"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"index"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      {{ fruit }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),H4=s("p",null,"次のように書き換えると…？",-1),z4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"filterFruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"debounce"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"indexOf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},">="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"filterFruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"debounce"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"indexOf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},">="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")])])])],-1),W4={__name:"50",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[L4,T4,s("div",M4,[s("div",N4,[F(a,Z({},{ranges:[""]}),{default:D(()=>[R4]),_:1},16)]),s("div",I4,[F(a,Z({},{ranges:[""]}),{default:D(()=>[j4]),_:1},16),H4,F(a,Z({},{ranges:[""]}),{default:D(()=>[z4]),_:1},16)])])]),_:1},16)}}},U4=P(W4,[["__file","/@slidev/slides/50.md"]]),q4=s("h1",null,"Markdown エディター",-1),K4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev")],-1),J4=s("ol",null,[s("li",null,"どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる"),s("li",null,"コードの説明"),s("li",null,"右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）")],-1),Y4={__name:"51",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[q4,K4,J4]),_:1},16))}},Z4=P(Y4,[["__file","/@slidev/slides/51.md"]]),G4=s("h1",null,"デザインラボの記事ビューアー",-1),Q4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev")],-1),X4=s("ol",null,[s("li",null,[o("どんなアプリか："),s("a",{href:"https://design-lab.tuqulore.com/",target:"_blank",rel:"noopener"},"デザインラボ"),o("というサイトと同じ記事データ（JSON）を取得して一覧から選択表示できる")]),s("li",null,"コードの説明（App コンポーネント、PostList コンポーネント）"),s("li",null,[o("Vue Router を導入しよう（20 分程度） "),s("ul",null,[s("li",null,"Vue プラグインとして Vue アプリケーションインスタンスに登録"),s("li",null,"画面が切り替わるようコンポーネントへの差し替え"),s("li",null,"画面遷移を補足できるコンポーネントへの差し替え")])]),s("li",null,"コードの説明（PostDetail コンポーネント）")],-1),s7={__name:"52",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[G4,Q4,X4]),_:1},16))}},e7=P(s7,[["__file","/@slidev/slides/52.md"]]),l7="/vue-3-practices/handson-gallery-shoes-finish.png",n7=s("h1",null,"靴のギャラリー",-1),o7=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev")],-1),t7=s("ol",null,[s("li",null,"どんなアプリか：靴のデータ（JSON）を取得してショッピングサイトらしい見た目で一覧表示できる"),s("li",null,"JSON から靴のデータを取得しよう（10 分程度）"),s("li",null,"取得した靴のデータをあらかじめ用意されたスタイルで表示しよう（20 分程度）")],-1),a7=s("img",{class:"pt-2",src:l7,width:"400"},null,-1),r7={__name:"53",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[n7,o7,t7,a7]),_:1},16))}},c7=P(r7,[["__file","/@slidev/slides/53.md"]]),p7=s("h1",null,"Nuxt 3",-1),i7=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/concepts/introduction#why-nuxt")],-1),u7=s("p",null,"効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）",-1),y7=s("ol",null,[s("li",null,[o("リアクティビティと Web コンポーネントの提供："),s("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue.js")]),s("li",null,[o("開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング："),s("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener"},"webpack 5"),o(" と "),s("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite")]),s("li",null,[o("レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける："),s("a",{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener"},"esbuild")]),s("li",null,[o("開発サーバー、サーバーサイドレンダリング、API サーバーの提供："),s("a",{href:"https://github.com/unjs/h3",target:"_blank",rel:"noopener"},"h3")]),s("li",null,[o("ルーティング（画面遷移処理）："),s("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"vue-router")])],-1),d7={__name:"54",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[p7,i7,u7,y7]),_:1},16))}},f7=P(d7,[["__file","/@slidev/slides/54.md"]]),h7=s("h1",null,"Nuxt 3",-1),m7=s("ul",null,[s("li",null,"Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）"),s("li",null,"Vue コンポーネント等の import を省略できる"),s("li",null,"pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）"),s("li",null,"server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）"),s("li",null,"Nuxt 3 は 2022 年 6 月現在、リリース候補版が公開されている")],-1),v7={__name:"55",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[h7,m7]),_:1},16))}},B7=P(v7,[["__file","/@slidev/slides/55.md"]]),A7=s("h1",null,"Nuxt 3",-1),_7=s("ul",null,[s("li",null,"pages"),s("li",null,"NuxtLink"),s("li",null,"layouts"),s("li",null,"Data Fetching / server ディレクトリ"),s("li",null,"composables")],-1),g7={__name:"56",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[A7,_7]),_:1},16))}},D7=P(g7,[["__file","/@slidev/slides/56.md"]]),C7=s("h1",null,"pages",-1),E7=s("p",null,[o("app.vue を削除する。"),s("br"),o(" pages ディレクトリに.vue ファイルを配置し、複数ページを構成する。 まずは "),s("code",null,"pages/index.vue"),o(", "),s("code",null,"pages/about.vue"),o(" を作成する。")],-1),F7=s("p",null,[o("Vue 開発環境では App.vue ファイルをメインで開発していて、Nuxt でも同様の目的を app.vue にて行える。例えば app.vue は以下のように書いて、各ページの template 部分が"),s("code",null,"<NuxtPage />"),o("に置き換わる。")],-1),k7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通ヘッダ"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通ヘッダ"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),x7=s("p",null,"ただし、複数ページを構成するにあたっては pages 内で開発・管理することが一般的。 その際、app.vue でこのようなことができるが、後述する layouts 機能を使ったほうがよい。",-1),b7={__name:"57",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[C7,E7,F7,F(a,Z({},{ranges:[""]}),{default:D(()=>[k7]),_:1},16),x7]),_:1},16)}}},w7=P(b7,[["__file","/@slidev/slides/57.md"]]),$7=s("h1",null,"NuxtLink",-1),S7=s("p",null,[o("コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。"),s("br"),o(" Nuxt ではページを作成するだけで Vue Router による設定を自動に行ってくれる、つまり Vue 環境下のように手動でルーティング設定を生成する必要がない。")],-1),P7=s("p",null,"そしてそのルートを移動する際は HTML の",-1),V7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),O7=s("p",null,"ではなく",-1),L7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"NuxtLink"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"to"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"NuxtLink"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"NuxtLink"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"to"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"NuxtLink"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),T7=s("p",null,[o("と記述してリンクを作成する。"),s("br"),o(" ルート外、例えば外部サイトのリンクを貼る場合は従来の"),s("code",null,"<a>"),o("要素を使うことになる。")],-1),M7={__name:"58",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[$7,S7,P7,F(a,Z({},{ranges:[""]}),{default:D(()=>[V7]),_:1},16),O7,F(a,Z({},{ranges:[""]}),{default:D(()=>[L7]),_:1},16),T7]),_:1},16)}}},N7=P(M7,[["__file","/@slidev/slides/58.md"]]),R7=s("h1",null,"layouts",-1),I7=s("p",null,[s("code",null,"layouts/default.vue"),o("を作成し、共通ナビゲーションを表示させる。"),s("br"),o(" pages で解説したように例えば app.vue に共通ヘッダを持たせるのであれば、以下のような書き方で事足りるが、ページによってはヘッダが不要などといったことが出てくる。 その際、ページそのもののテンプレートを複数用意し、各ページがそのテンプレートを必要に応じて選び変えることができる。")],-1),j7=s("p",null,[s("code",null,"app.vue"),o("の例")],-1),H7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通ヘッダ"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通ヘッダ"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),z7=s("p",null,[s("code",null,"layouts/default.vue"),o("の例")],-1),W7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通ヘッダ"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通ヘッダ"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),U7={__name:"59",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[R7,I7,j7,F(a,Z({},{ranges:[""]}),{default:D(()=>[H7]),_:1},16),z7,F(a,Z({},{ranges:[""]}),{default:D(()=>[W7]),_:1},16)]),_:1},16)}}},q7=P(U7,[["__file","/@slidev/slides/59.md"]]),K7=s("h1",null,"Data Fetching / server ディレクトリ",-1),J7=s("p",null,[s("code",null,"server/api"),o("ディレクトリにある"),s("code",null,"users.js"),o("を確認、"),s("code",null,"components/userList.vue"),o("に以下を記述する。")],-1),Y7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-for"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"user in users"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        {{ user.name }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"li"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"ul"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"users"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/users"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-for"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"user in users"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        {{ user.name }}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"li"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"ul"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"users"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/users"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Z7={__name:"60",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[K7,J7,F(a,Z({},{ranges:[""]}),{default:D(()=>[Y7]),_:1},16)]),_:1},16)}}},G7=P(Z7,[["__file","/@slidev/slides/60.md"]]),Q7=s("h1",null,"composables",-1),X7=s("p",null,[o("アプリ全体共通のデータを管理する。js ファイルではあるが、中身は vue の記述に近いことがわかる。 ここで状態を管理する。 "),s("code",null,"composables/userCounter.js"),o("を作成する。")],-1),sE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"readonly"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"),")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"readonly"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"),")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),eE={__name:"61",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[Q7,X7,F(a,Z({},{ranges:[""]}),{default:D(()=>[sE]),_:1},16)]),_:1},16)}}},lE=P(eE,[["__file","/@slidev/slides/61.md"]]),nE=s("h1",null,"composables",-1),oE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"カウント: {{ counter.count }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},"><"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"increment"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"increment!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"カウント: {{ counter.count }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},"><"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"increment"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"increment!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),tE={__name:"62",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[nE,F(a,Z({},{ranges:[""]}),{default:D(()=>[oE]),_:1},16)]),_:1},16)}}},aE=P(tE,[["__file","/@slidev/slides/62.md"]]),rE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較",-1),cE=s("p",null,"デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの",-1),pE=s("p",null,"動作は Vue 3 のものと同じ",-1),iE=s("p",null,"Node.js がセットアップ済みの人はローカルで動かしてみよう",-1),uE=s("ol",null,[s("li",null,[s("a",{href:"https://github.com/tuqulore/vue-3-practices/",target:"_blank",rel:"noopener"},"https://github.com/tuqulore/vue-3-practices/"),o(" から ZIP をダウンロード")]),s("li",null,"任意の場所に ZIP を展開"),s("li",null,"handson-fetch-router-nuxt-finish ディレクトリに移動"),s("li",null,[s("code",null,"npm install"),o(" で NPM パッケージをインストール")]),s("li",null,[s("code",null,"npm run dev"),o(" で Nuxt 3 の開発サーバーを起動")])],-1),yE={__name:"63",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[rE,cE,pE,iE,uE]),_:1},16))}},dE=P(yE,[["__file","/@slidev/slides/63.md"]]),fE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),hE=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"Vue 3"),s("ol",null,[s("li",null,"Vue Router をプラグインとしてインストール"),s("li",null,"ルートを定義する"),s("li",null,"RouterView コンポーネントを使う")])]),s("div",null,[s("p",{class:"text-xs"},"Nuxt 3"),s("div",{class:"h-xs overflow-y-auto"},[s("ol",null,[s("li",null,"導入済みなので設定不要"),s("li",null,"ファイル・ディレクトリ構成で定義できる（ファイルベースルーティング）"),s("li",null,[o("app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 "),s("a",{href:"https://v3.nuxtjs.org/guide/directory-structure/app",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/directory-structure/app")])]),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])])])])])],-1),mE={__name:"64",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[fE,hE]),_:1},16))}},vE=P(mE,[["__file","/@slidev/slides/64.md"]]),BE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),AE=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/directory-structure/pages",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/directory-structure/pages")],-1),_E=s("blockquote",null,[s("p",null,[o("Pages "),s("strong",null,"must have a single root element"),o(" to allow route transitions between pages. (HTML comments are considered elements as well.)")])],-1),gE=s("p",null,[o("Vue 3 はテンプレートの最上位に複数要素が書けるようになった "),s("a",{href:"https://v3.ja.vuejs.org/guide/migration/fragments.html",target:"_blank",rel:"noopener"},"https://v3.ja.vuejs.org/guide/migration/fragments.html")],-1),DE=s("p",null,"例：",-1),CE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),EE=s("p",null,"しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない",-1),FE={__name:"65",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[BE,AE,_E,gE,DE,F(a,Z({},{ranges:[""]}),{default:D(()=>[CE]),_:1},16),EE]),_:1},16)}}},kE=P(FE,[["__file","/@slidev/slides/65.md"]]),xE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),bE={class:"flex gap-8"},wE=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),$E=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"RouterLink"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue-router"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"RouterLink"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue-router"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),SE=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),PE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),VE=s("p",null,"インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる",-1),OE={__name:"66",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[xE,s("div",bE,[s("div",null,[wE,F(a,Z({},{ranges:[""]}),{default:D(()=>[$E]),_:1},16)]),s("div",null,[SE,F(a,Z({},{ranges:[""]}),{default:D(()=>[PE]),_:1},16),VE])])]),_:1},16)}}},LE=P(OE,[["__file","/@slidev/slides/66.md"]]),TE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),ME=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/concepts/auto-imports",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/concepts/auto-imports")],-1),NE=s("p",null,"以下はインポート不要",-1),RE=s("ul",null,[s("li",null,"Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）"),s("li",null,"今まで使ってきた Composition API 関連の関数（ref、computed など）"),s("li",null,"components ディレクトリに配置された Vue コンポーネント"),s("li",null,"composables ディレクトリに配置されたコンポジション関数")],-1),IE={__name:"67",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[TE,ME,NE,RE]),_:1},16))}},jE=P(IE,[["__file","/@slidev/slides/67.md"]]),HE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),zE={class:"flex gap-8"},WE=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),UE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"中略"),s("span",{style:{color:"#DBD7CA"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"response"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"posts"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"json"),s("span",{style:{color:"#858585"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"中略"),s("span",{style:{color:"#393A34"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"response"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"response"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"json"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),qE=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),KE={class:"h-xs overflow-y-auto"},JE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"中略"),s("span",{style:{color:"#DBD7CA"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:3000/wp-json/wp/v2/posts.json"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"中略"),s("span",{style:{color:"#393A34"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"http://localhost:3000/wp-json/wp/v2/posts.json"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),YE=s("ul",null,[s("li",null,"リアクティブな値を別途用意する必要がない"),s("li",null,[s("a",{href:"https://developer.mozilla.org/ja/docs/Web/API/Response/json",target:"_blank",rel:"noopener"},"Response.json()"),o("が暗黙的に実行されオブジェクトが得られる")]),s("li",null,[o("データ再取得の関数、取得中の状態値などあると便利なものが用意されている "),s("a",{href:"https://v3.nuxtjs.org/api/composables/use-fetch",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/api/composables/use-fetch")])],-1),ZE={__name:"68",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[HE,s("div",zE,[s("div",null,[WE,F(a,Z({},{ranges:[""]}),{default:D(()=>[UE]),_:1},16)]),s("div",null,[qE,s("div",KE,[F(a,Z({},{ranges:[""]}),{default:D(()=>[JE]),_:1},16),YE])])])]),_:1},16)}}},GE=P(ZE,[["__file","/@slidev/slides/68.md"]]),QE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),XE=s("p",null,[s("a",{href:"https://v3.nuxtjs.org/guide/features/data-fetching",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/features/data-fetching")],-1),s2=s("p",null,"useFetch 以外もある",-1),e2=s("p",null,[o("useLazyFetch: 非同期関数でない代わりにデータ取得前は "),s("code",null,"null"),o(" が入る")],-1),l2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyFetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/posts"'),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyFetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/posts"'),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),n2=s("p",null,"useAsyncData: 例としては useFetch と同じことをやっている。（useFetch が使えないケースで）非同期処理によってデータを取得したい際に使う",-1),o2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},"));")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},"));")])])])],-1),t2=s("p",null,"useLazyAsyncData: useLazyFetch の useAsyncData 版",-1),a2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),r2={__name:"69",setup(e){const l={};return b(S),(n,t)=>{const a=us;return A(),L(J,q(W(l)),{default:D(()=>[QE,XE,s2,e2,F(a,Z({},{ranges:[""]}),{default:D(()=>[l2]),_:1},16),n2,F(a,Z({},{ranges:[""]}),{default:D(()=>[o2]),_:1},16),t2,F(a,Z({},{ranges:[""]}),{default:D(()=>[a2]),_:1},16)]),_:1},16)}}},c2=P(r2,[["__file","/@slidev/slides/69.md"]]),p2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),i2=s("p",null,"便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある",-1),u2=s("ul",null,[s("li",null,[o("同一オリジン（例："),s("code",null,"http://localhost:3000"),o("）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある "),s("ul",null,[s("li",null,"server ディレクトリで提供する API エンドポイントはオリジン省略可能"),s("li",null,"上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要")])])],-1),y2=s("p",null,[o("Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 "),s("a",{href:"https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch",target:"_blank",rel:"noopener"},"https://v3.nuxtjs.org/guide/features/data-fetching#isomorphic-fetch-and-fetch")],-1),d2=s("p",null,"場合によっては（$fetch ではなく） fetch を使うことも検討すること",-1),f2={__name:"70",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[p2,i2,u2,y2,d2]),_:1},16))}},h2=P(f2,[["__file","/@slidev/slides/70.md"]]),m2=s("h1",null,"スタイルガイド",-1),v2=s("p",null,"Vue 固有の記法についての公式なスタイルガイド",-1),B2=s("ul",null,[s("li",null,"スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる"),s("li",null,"スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる"),s("li",null,[s("a",{href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener"},"eslint-plugin-vue"),o("を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる")])],-1),A2=s("p",null,[s("a",{href:"https://v3.ja.vuejs.org/style-guide/",target:"_blank",rel:"noopener"},"スタイルガイド")],-1),_2={__name:"71",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[m2,v2,B2,A2]),_:1},16))}},g2=P(_2,[["__file","/@slidev/slides/71.md"]]),D2=s("h1",null,"Vue 3 と Nuxt 3 の説明はこれで以上！",-1),C2=s("p",null,"おつかれさまでした",-1),E2=s("p",null,"以下を学んできた",-1),F2=s("ul",null,[s("li",null,"Vue の基本的な書き方"),s("li",null,"Vue アプリケーションのコードを読む・書く"),s("li",null,"Nuxt アプリケーションのコードを読む・書く")],-1),k2=s("p",null,"Nuxt 3 を使ってウェブアプリケーションをつくっていく準備ができた",-1),x2=s("p",null,"業務・趣味でウェブアプリケーションを開発していきましょう！",-1),b2=s("p",null,"学習の目安",-1),w2=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),$2=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),S2={__name:"72",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[D2,C2,E2,F2,k2,x2,b2,w2,$2]),_:1},16))}},P2=P(S2,[["__file","/@slidev/slides/72.md"]]),V2=s("h1",null,"課題",-1),O2=s("ul",null,[s("li",null,"レベル 1 ～ 3 の 3 つある"),s("li",null,"1 から順番に取り組んでもらう"),s("li",null,"16 時に解説する")],-1),L2={__name:"73",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[V2,O2]),_:1},16))}},T2=P(L2,[["__file","/@slidev/slides/73.md"]]),M2=s("h1",null,"課題（レベル 1）",-1),N2=s("p",null,[o("問題："),s("a",{href:"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue")],-1),R2=s("ol",null,[s("li",null,[o("useFetch を使って "),s("a",{href:"http://localhost:3000/data.json",target:"_blank",rel:"noopener"},"http://localhost:3000/data.json"),o(" から果物のリストを取得してください")]),s("li",null,[o("果物を順序なしリストで表示してください "),s("a",{href:"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul",target:"_blank",rel:"noopener"},"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul")])],-1),I2={__name:"74",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[M2,N2,R2]),_:1},16))}},j2=P(I2,[["__file","/@slidev/slides/74.md"]]),H2=s("h1",null,"課題（レベル 2）",-1),z2=s("p",null,[o("問題："),s("a",{href:"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue")],-1),W2=s("p",null,"コード上のコメントを読みながら、未完成のアプリを完成させてください",-1),U2={__name:"75",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[H2,z2,W2]),_:1},16))}},q2=P(U2,[["__file","/@slidev/slides/75.md"]]),K2=s("h1",null,"課題（レベル 3）",-1),J2=s("p",null,[o("問題："),s("a",{href:"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue")],-1),Y2=s("p",null,"コード上のコメントを読みながら、未完成のアプリを完成させてください",-1),Z2={__name:"76",setup(e){const l={};return b(S),(n,t)=>(A(),L(J,q(W(l)),{default:D(()=>[K2,J2,Y2]),_:1},16))}},G2=P(Z2,[["__file","/@slidev/slides/76.md"]]),Q2=[{path:"1",name:"page-1",component:BA,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
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
`,drawings:{persist:!1},title:"Vue.js"},index:0,start:0,end:29,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:EA,meta:{slide:{raw:`
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
  - throttle-debounce, fetch, Vue Router など`,frontmatter:{},index:1,start:30,end:48,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:PA,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:2,start:49,end:63,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:NA,meta:{slide:{raw:`
# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。
`,title:"本講座のすすめかた",level:1,content:`# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。`,frontmatter:{},index:3,start:64,end:73,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:KA,meta:{slide:{raw:`
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

講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。`,frontmatter:{},index:4,start:74,end:92,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:f9,meta:{slide:{raw:`
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

現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。`,frontmatter:{},index:5,start:93,end:145,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:_9,meta:{slide:{raw:`
# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />
`,title:"Composition API のメリット",level:1,content:`# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />`,frontmatter:{},index:6,start:146,end:153,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:w9,meta:{slide:{raw:`
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

現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。`,frontmatter:{},index:7,start:154,end:200,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:N9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:8,start:201,end:231,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:U9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:9,start:232,end:264,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:G9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:10,start:265,end:300,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:c_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:11,start:301,end:341,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:d_,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:12,start:342,end:364,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:B_,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:14,start:390,end:415,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:x_,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:15,start:416,end:437,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:V_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:16,start:438,end:472,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:K_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:17,start:473,end:517,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:X_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:18,start:518,end:551,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:t1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:19,start:552,end:585,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:p1,meta:{slide:{raw:`
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
- フォーム入力バインディング`,frontmatter:{},index:20,start:586,end:597,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:m1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:21,start:598,end:619,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:E1,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:22,start:620,end:648,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:w1,meta:{slide:{raw:`
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

ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい`,frontmatter:{},index:23,start:649,end:659,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:T1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:24,start:660,end:685,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Y1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:25,start:686,end:743,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:ng,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:26,start:744,end:774,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:cg,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:27,start:775,end:798,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:gg,meta:{slide:{raw:`
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

<arrow v-click="2" x1="350" y1="370" x2="190" y2="310" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:28,start:799,end:818,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:kg,meta:{slide:{raw:`
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
- コンポーネントをマウントしてから頻繁に変化するケースであれば \`v-show\`を使う`,frontmatter:{},index:29,start:819,end:834,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Vg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:30,start:835,end:871,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Ig,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:31,start:872,end:911,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Kg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:32,start:912,end:950,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:sD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:33,start:951,end:992,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:pD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:34,start:993,end:1021,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:dD,meta:{slide:{raw:`
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
- スロットによるコンテンツ配信`,frontmatter:{},index:35,start:1022,end:1033,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:AD,meta:{slide:{raw:`
# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />
`,title:"コンポーネントの基本と構成",level:1,content:`# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />`,frontmatter:{},index:36,start:1034,end:1041,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:bD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:37,start:1042,end:1088,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:ND,meta:{slide:{raw:`
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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:38,start:1089,end:1139,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:KD,meta:{slide:{raw:`
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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:39,start:1140,end:1188,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:lC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:40,start:1189,end:1238,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:uC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:41,start:1239,end:1285,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:bC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:42,start:1286,end:1339,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:qC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:43,start:1340,end:1407,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:e4,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:44,start:1408,end:1442,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:d4,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:45,start:1443,end:1483,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:E4,meta:{slide:{raw:`
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

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:46,start:1484,end:1506,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:w4,meta:{slide:{raw:`
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
  - useFetch などの Nuxt 3 特有のヘルパー関数の使い方`,frontmatter:{},index:47,start:1507,end:1527,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:O4,meta:{slide:{raw:`
# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）
`,title:"グリッドコンポーネント",level:1,content:`# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）`,frontmatter:{},index:48,start:1528,end:1537,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:U4,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:49,start:1538,end:1597,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Z4,meta:{slide:{raw:`
# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）
`,title:"Markdown エディター",level:1,content:`# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）`,frontmatter:{},index:50,start:1598,end:1607,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:e7,meta:{slide:{raw:`
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
4. コードの説明（PostDetail コンポーネント）`,frontmatter:{},index:51,start:1608,end:1621,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:c7,meta:{slide:{raw:`
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

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">`,frontmatter:{},index:52,start:1622,end:1633,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:f7,meta:{slide:{raw:`
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
5. ルーティング（画面遷移処理）：[vue-router](https://router.vuejs.org/)`,frontmatter:{},index:53,start:1634,end:1647,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:B7,meta:{slide:{raw:`
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
- Nuxt 3 は 2022 年 6 月現在、リリース候補版が公開されている`,frontmatter:{},index:54,start:1648,end:1657,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:D7,meta:{slide:{raw:`
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
- composables`,frontmatter:{},index:55,start:1658,end:1667,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:w7,meta:{slide:{raw:`
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
その際、app.vue でこのようなことができるが、後述する layouts 機能を使ったほうがよい。`,frontmatter:{},index:56,start:1668,end:1687,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:N7,meta:{slide:{raw:`
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
ルート外、例えば外部サイトのリンクを貼る場合は従来の\`<a>\`要素を使うことになる。`,frontmatter:{},index:57,start:1688,end:1709,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:q7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:58,start:1710,end:1737,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:G7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:59,start:1738,end:1759,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:lE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:60,start:1760,end:1780,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:aE,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:61,start:1781,end:1802,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:dE,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:63,start:1819,end:1857,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:kE,meta:{slide:{raw:`
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

しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない`,frontmatter:{},index:64,start:1858,end:1878,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:LE,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:65,start:1879,end:1915,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:jE,meta:{slide:{raw:`
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
- composables ディレクトリに配置されたコンポジション関数`,frontmatter:{},index:66,start:1916,end:1928,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:GE,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:67,start:1929,end:1974,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:c2,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:68,start:1975,end:2002,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:h2,meta:{slide:{raw:`
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

場合によっては（$fetch ではなく） fetch を使うことも検討すること`,frontmatter:{},index:69,start:2003,end:2016,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:g2,meta:{slide:{raw:`
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

[スタイルガイド](https://v3.ja.vuejs.org/style-guide/)`,frontmatter:{},index:70,start:2017,end:2028,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:P2,meta:{slide:{raw:`
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

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:71,start:2029,end:2051,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:T2,meta:{slide:{raw:`
# 課題

- レベル 1 ～ 3 の 3 つある
- 1 から順番に取り組んでもらう
- 16 時に解説する
`,title:"課題",level:1,content:`# 課題

- レベル 1 ～ 3 の 3 つある
- 1 から順番に取り組んでもらう
- 16 時に解説する`,frontmatter:{},index:72,start:2052,end:2059,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:j2,meta:{slide:{raw:`
# 課題（レベル 1）

問題：https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch を使って http://localhost:3000/data.json から果物のリストを取得してください
2. 果物を順序なしリストで表示してください https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul
`,title:"課題（レベル 1）",level:1,content:`# 課題（レベル 1）

問題：https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch を使って http://localhost:3000/data.json から果物のリストを取得してください
2. 果物を順序なしリストで表示してください https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul`,frontmatter:{},index:73,start:2060,end:2068,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:q2,meta:{slide:{raw:`
# 課題（レベル 2）

問題：https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください
`,title:"課題（レベル 2）",level:1,content:`# 課題（レベル 2）

問題：https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください`,frontmatter:{},index:74,start:2069,end:2076,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:G2,meta:{slide:{raw:`
# 課題（レベル 3）

問題：https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください
`,title:"課題（レベル 3）",level:1,content:`# 課題（レベル 3）

問題：https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください`,frontmatter:{},index:75,start:2077,end:2084,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",component:pA,meta:{layout:"end"}}],qs=Q2,X2=[{name:"play",path:"/",component:Sv,children:[...qs]},{name:"print",path:"/print",component:aA},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>Hl(()=>import("./PresenterPrint-713eed97.js"),["assets/PresenterPrint-713eed97.js","assets/shared.esm-bundler-f1db99c1.js","assets/NoteViewer-00396034.js","assets/index-0a61dec2.js"])},{name:"presenter",path:"/presenter/:no",component:()=>Hl(()=>import("./Presenter-2a58be68.js"),["assets/Presenter-2a58be68.js","assets/NoteViewer-00396034.js","assets/DrawingControls-a42f3614.js","assets/index-0a61dec2.js","assets/Presenter-214154c4.css"]),beforeEnter:e=>{if(!Pn.remote||Pn.remote===e.query.password)return!0;if(Pn.remote&&e.query.password===void 0){const l=prompt("Enter password");if(Pn.remote===l)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],hl=ph({history:rf("/vue-3-practices"),routes:X2});function s6(e,l,{mode:n="replace"}={}){return O({get(){const t=hl.currentRoute.value.query[e];return t==null?l??null:Array.isArray(t)?t.filter(Boolean):t},set(t){Pe(()=>{hl[C(n)]({query:{...hl.currentRoute.value.query,[e]:t}})})}})}const zi=ns(0);Pe(()=>{hl.afterEach(async()=>{await Pe(),zi.value+=1})});const He=O(()=>hl.currentRoute.value),Ia=O(()=>He.value.query.print!==void 0),e6=O(()=>He.value.query.print==="clicks"),Ke=O(()=>He.value.query.embedded!==void 0),Qe=O(()=>He.value.path.startsWith("/presenter")),Wi=O(()=>Ia.value&&!e6.value),sa=O(()=>He.value.query.password),l6=O(()=>!Qe.value&&(!Os.remote||sa.value===Os.remote)),xc=s6("clicks","0"),Ui=O(()=>qs.length-1),n6=O(()=>He.value.path),Gs=O(()=>parseInt(n6.value.split(/\//g).slice(-1)[0])||1);O(()=>ja(Gs.value));const me=O(()=>qs.find(e=>e.path===`${Gs.value}`));O(()=>{var e,l,n;return(n=(l=(e=me.value)==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:n.id});O(()=>{var e,l;return((l=(e=me.value)==null?void 0:e.meta)==null?void 0:l.layout)||(Gs.value===1?"cover":"default")});const ht=O(()=>qs.find(e=>e.path===`${Math.min(qs.length,Gs.value+1)}`)),o6=O(()=>{var e,l;return zi.value,((l=(e=me.value)==null?void 0:e.meta)==null?void 0:l.__clicksElements)||[]}),zl=O({get(){if(Wi.value)return 99999;let e=+(xc.value||0);return isNaN(e)&&(e=0),e},set(e){xc.value=e.toString()}}),Vo=O(()=>{var e,l;return+(((l=(e=me.value)==null?void 0:e.meta)==null?void 0:l.clicks)??o6.value.length)}),t6=O(()=>Gs.value<qs.length-1||zl.value<Vo.value),a6=O(()=>Gs.value>1||zl.value>0),r6=O(()=>qs.filter(e=>{var l,n;return(n=(l=e.meta)==null?void 0:l.slide)==null?void 0:n.title}).reduce((e,l)=>(Ha(e,l),e),[])),c6=O(()=>za(r6.value,me.value));O(()=>Wa(c6.value));function Ml(){Vo.value<=zl.value?Oo():zl.value+=1}async function Nl(){zl.value<=0?await Lo():zl.value-=1}function ja(e){return Qe.value?`/presenter/${e}`:`/${e}`}function Oo(){const e=Math.min(qs.length,Gs.value+1);return mn(e)}async function Lo(e=!0){const l=Math.max(1,Gs.value-1);await mn(l),e&&Vo.value&&hl.replace({query:{...He.value.query,clicks:Vo.value}})}function mn(e,l){return hl.push({path:ja(e),query:{...He.value.query,clicks:l}})}function p6(e){const l=ns(0),{direction:n,distanceX:t,distanceY:a}=F5(e,{onSwipeStart(r){r.pointerType==="touch"&&(Gn.value||(l.value=Rt()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!l.value||Gn.value)return;const c=Math.abs(t.value),p=Math.abs(a.value);c/window.innerWidth>.3||c>100?n.value===Ge.LEFT?Ml():Nl():(p/window.innerHeight>.4||p>200)&&(n.value===Ge.DOWN?Lo():Oo())}})}async function bc(){const{saveAs:e}=await Hl(()=>import("./FileSaver.min-17c85779.js").then(l=>l.F),[]);e(Yp(Os.download)?Os.download:Os.exportFilename?`${Os.exportFilename}.pdf`:"/vue-3-practicesslidev-exported.pdf",`${Os.title}.pdf`)}async function S6(e){var l,n;if(e==null){const t=(n=(l=me.value)==null?void 0:l.meta)==null?void 0:n.slide;if(!(t!=null&&t.filepath))return!1;e=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ha(e,l,n=1){var a,r,c,p,i;const t=(r=(a=l.meta)==null?void 0:a.slide)==null?void 0:r.level;t&&t>n&&e.length>0?Ha(e[e.length-1].children,l,n+1):e.push({children:[],level:n,path:l.path,hideInToc:Boolean((c=l.meta)==null?void 0:c.hideInToc),title:(i=(p=l.meta)==null?void 0:p.slide)==null?void 0:i.title})}function za(e,l,n=!1,t){return e.map(a=>{const r={...a,active:a.path===(l==null?void 0:l.path),hasActiveParent:n};return r.children.length>0&&(r.children=za(r.children,l,r.active||r.hasActiveParent,r)),t&&(r.active||r.activeParent)&&(t.activeParent=!0),r})}function Wa(e,l=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Wa(n.children,l+1)}))}export{GB as $,ns as A,f6 as B,ee as C,Xo as D,O as E,xs as F,mp as G,vp as H,Z as I,jl as J,pa as K,i6 as L,Wi as M,ld as N,nd as O,Up as P,Wp as Q,zp as R,Xy as S,d6 as T,B6 as U,A6 as V,_6 as W,m6 as X,v6 as Y,ZB as Z,P as _,E6 as a,Jh as a$,bc as a0,Ml as a1,Oo as a2,S6 as a3,Nl as a4,Lo as a5,He as a6,h6 as a7,vn as a8,Cs as a9,ht as aA,ct as aB,Gn as aC,dt as aD,wv as aE,La as aF,Ta as aG,Ev as aH,xm as aI,Oe as aJ,F6 as aK,el as aL,bn as aM,$l as aN,Ne as aO,Gt as aP,zh as aQ,Wh as aR,Uh as aS,Kh as aT,je as aU,Hp as aV,$6 as aW,ce as aX,io as aY,c3 as aZ,qp as a_,x6 as aa,s as ab,Ys as ac,lo as ad,se as ae,qs as af,Ui as ag,o as ah,_s as ai,wa as aj,Hs as ak,b6 as al,me as am,L as an,lm as ao,p6 as ap,k6 as aq,w6 as ar,D as as,Pi as at,te as au,hm as av,u6 as aw,y6 as ax,Vo as ay,t6 as az,Gs as b,Os as c,zl as d,Qe as e,Is as f,ja as g,b as h,g6 as i,S as j,Cu as k,Y as l,F as m,A as n,D6 as o,C6 as p,l8 as q,hl as r,n8 as s,ql as t,C as u,vr as v,js as w,_a as x,Jo as y,Pe as z};
