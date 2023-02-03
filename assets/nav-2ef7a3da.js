function Dl(e,l){const n=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)n[t[a]]=!0;return l?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Xs(e){if(cs(e)){const l={};for(let n=0;n<e.length;n++){const t=e[n],a=Ts(t)?Ri(t):Xs(t);if(a)for(const r in a)l[r]=a[r]}return l}else{if(Ts(e))return e;if(ws(e))return e}}const Ti=/;(?![^(]*\))/g,Ni=/:([^]+)/,Mi=/\/\*.*?\*\//gs;function Ri(e){const l={};return e.replace(Mi,"").split(Ti).forEach(n=>{if(n){const t=n.split(Ni);t.length>1&&(l[t[0].trim()]=t[1].trim())}}),l}function js(e){let l="";if(Ts(e))l=e;else if(cs(e))for(let n=0;n<e.length;n++){const t=js(e[n]);t&&(l+=t+" ")}else if(ws(e))for(const n in e)e[n]&&(l+=n+" ");return l.trim()}function q(e){if(!e)return null;let{class:l,style:n}=e;return l&&!Ts(l)&&(e.class=js(l)),n&&(e.style=Xs(n)),e}const Ii="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ji="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Hi=Dl(Ii),zi=Dl(ji),Wi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ui=Dl(Wi);function Cc(e){return!!e||e===""}const Js=e=>Ts(e)?e:e==null?"":cs(e)||ws(e)&&(e.toString===xc||!is(e.toString))?JSON.stringify(e,Ec,2):String(e),Ec=(e,l)=>l&&l.__v_isRef?Ec(e,l.value):Vl(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((n,[t,a])=>(n[`${t} =>`]=a,n),{})}:kc(l)?{[`Set(${l.size})`]:[...l.values()]}:ws(l)&&!cs(l)&&!bc(l)?String(l):l,Vs=Object.freeze({}),rn=Object.freeze([]),ye=()=>{},Fc=()=>!1,qi=/^on[^a-z]/,Xn=e=>qi.test(e),Do=e=>e.startsWith("onUpdate:"),zs=Object.assign,la=(e,l)=>{const n=e.indexOf(l);n>-1&&e.splice(n,1)},Ki=Object.prototype.hasOwnProperty,As=(e,l)=>Ki.call(e,l),cs=Array.isArray,Vl=e=>Ro(e)==="[object Map]",kc=e=>Ro(e)==="[object Set]",is=e=>typeof e=="function",Ts=e=>typeof e=="string",na=e=>typeof e=="symbol",ws=e=>e!==null&&typeof e=="object",oa=e=>ws(e)&&is(e.then)&&is(e.catch),xc=Object.prototype.toString,Ro=e=>xc.call(e),ta=e=>Ro(e).slice(8,-1),bc=e=>Ro(e)==="[object Object]",aa=e=>Ts(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fo=Dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ji=Dl("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Io=e=>{const l=Object.create(null);return n=>l[n]||(l[n]=e(n))},Yi=/-(\w)/g,He=Io(e=>e.replace(Yi,(l,n)=>n?n.toUpperCase():"")),Zi=/\B([A-Z])/g,el=Io(e=>e.replace(Zi,"-$1").toLowerCase()),Hl=Io(e=>e.charAt(0).toUpperCase()+e.slice(1)),kl=Io(e=>e?`on${Hl(e)}`:""),Rn=(e,l)=>!Object.is(e,l),yl=(e,l)=>{for(let n=0;n<e.length;n++)e[n](l)},Co=(e,l,n)=>{Object.defineProperty(e,l,{configurable:!0,enumerable:!1,value:n})},Eo=e=>{const l=parseFloat(e);return isNaN(l)?e:l};let za;const wc=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fo(e,...l){console.warn(`[Vue warn] ${e}`,...l)}let me;class $c{constructor(l=!1){this.detached=l,this.active=!0,this.effects=[],this.cleanups=[],this.parent=me,!l&&me&&(this.index=(me.scopes||(me.scopes=[])).push(this)-1)}run(l){if(this.active){const n=me;try{return me=this,l()}finally{me=n}}else Fo("cannot run an inactive effect scope.")}on(){me=this}off(){me=this.parent}stop(l){if(this.active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!l){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function a6(e){return new $c(e)}function Gi(e,l=me){l&&l.active&&l.effects.push(e)}function Qi(){return me}function Xi(e){me?me.cleanups.push(e):Fo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ra=e=>{const l=new Set(e);return l.w=0,l.n=0,l},Sc=e=>(e.w&Al)>0,Pc=e=>(e.n&Al)>0,s8=({deps:e})=>{if(e.length)for(let l=0;l<e.length;l++)e[l].w|=Al},e8=e=>{const{deps:l}=e;if(l.length){let n=0;for(let t=0;t<l.length;t++){const a=l[t];Sc(a)&&!Pc(a)?a.delete(e):l[n++]=a,a.w&=~Al,a.n&=~Al}l.length=n}},gt=new WeakMap;let bn=0,Al=1;const Dt=30;let ce;const Ol=Symbol("iterate"),Ct=Symbol("Map key iterate");class ca{constructor(l,n=null,t){this.fn=l,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Gi(this,t)}run(){if(!this.active)return this.fn();let l=ce,n=fl;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=ce,ce=this,fl=!0,Al=1<<++bn,bn<=Dt?s8(this):Wa(this),this.fn()}finally{bn<=Dt&&e8(this),Al=1<<--bn,ce=this.parent,fl=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ce===this?this.deferStop=!0:this.active&&(Wa(this),this.onStop&&this.onStop(),this.active=!1)}}function Wa(e){const{deps:l}=e;if(l.length){for(let n=0;n<l.length;n++)l[n].delete(e);l.length=0}}let fl=!0;const Vc=[];function Kl(){Vc.push(fl),fl=!1}function Jl(){const e=Vc.pop();fl=e===void 0?!0:e}function _e(e,l,n){if(fl&&ce){let t=gt.get(e);t||gt.set(e,t=new Map);let a=t.get(n);a||t.set(n,a=ra()),Oc(a,{effect:ce,target:e,type:l,key:n})}}function Oc(e,l){let n=!1;bn<=Dt?Pc(e)||(e.n|=Al,n=!Sc(e)):n=!e.has(ce),n&&(e.add(ce),ce.deps.push(e),ce.onTrack&&ce.onTrack(Object.assign({effect:ce},l)))}function ll(e,l,n,t,a,r){const c=gt.get(e);if(!c)return;let p=[];if(l==="clear")p=[...c.values()];else if(n==="length"&&cs(e)){const u=Eo(t);c.forEach((d,y)=>{(y==="length"||y>=u)&&p.push(d)})}else switch(n!==void 0&&p.push(c.get(n)),l){case"add":cs(e)?aa(n)&&p.push(c.get("length")):(p.push(c.get(Ol)),Vl(e)&&p.push(c.get(Ct)));break;case"delete":cs(e)||(p.push(c.get(Ol)),Vl(e)&&p.push(c.get(Ct)));break;case"set":Vl(e)&&p.push(c.get(Ol));break}const i={target:e,type:l,key:n,newValue:t,oldValue:a,oldTarget:r};if(p.length===1)p[0]&&Et(p[0],i);else{const u=[];for(const d of p)d&&u.push(...d);Et(ra(u),i)}}function Et(e,l){const n=cs(e)?e:[...e];for(const t of n)t.computed&&Ua(t,l);for(const t of n)t.computed||Ua(t,l)}function Ua(e,l){(e!==ce||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(zs({effect:e},l)),e.scheduler?e.scheduler():e.run())}const l8=Dl("__proto__,__v_isRef,__isVue"),Lc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(na)),n8=jo(),o8=jo(!1,!0),t8=jo(!0),a8=jo(!0,!0),qa=r8();function r8(){const e={};return["includes","indexOf","lastIndexOf"].forEach(l=>{e[l]=function(...n){const t=hs(this);for(let r=0,c=this.length;r<c;r++)_e(t,"get",r+"");const a=t[l](...n);return a===-1||a===!1?t[l](...n.map(hs)):a}}),["push","pop","shift","unshift","splice"].forEach(l=>{e[l]=function(...n){Kl();const t=hs(this)[l].apply(this,n);return Jl(),t}}),e}function jo(e=!1,l=!1){return function(t,a,r){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return l;if(a==="__v_raw"&&r===(e?l?zc:Hc:l?jc:Ic).get(t))return t;const c=cs(t);if(!e&&c&&As(qa,a))return Reflect.get(qa,a,r);const p=Reflect.get(t,a,r);return(na(a)?Lc.has(a):l8(a))||(e||_e(t,"get",a),l)?p:Fs(p)?c&&aa(a)?p:p.value:ws(p)?e?$l(p):se(p):p}}const c8=Tc(),p8=Tc(!0);function Tc(e=!1){return function(n,t,a,r){let c=n[t];if(_l(c)&&Fs(c)&&!Fs(a))return!1;if(!e&&(!ko(a)&&!_l(a)&&(c=hs(c),a=hs(a)),!cs(n)&&Fs(c)&&!Fs(a)))return c.value=a,!0;const p=cs(n)&&aa(t)?Number(t)<n.length:As(n,t),i=Reflect.set(n,t,a,r);return n===hs(r)&&(p?Rn(a,c)&&ll(n,"set",t,a,c):ll(n,"add",t,a)),i}}function i8(e,l){const n=As(e,l),t=e[l],a=Reflect.deleteProperty(e,l);return a&&n&&ll(e,"delete",l,void 0,t),a}function u8(e,l){const n=Reflect.has(e,l);return(!na(l)||!Lc.has(l))&&_e(e,"has",l),n}function y8(e){return _e(e,"iterate",cs(e)?"length":Ol),Reflect.ownKeys(e)}const Nc={get:n8,set:c8,deleteProperty:i8,has:u8,ownKeys:y8},Mc={get:t8,set(e,l){return Fo(`Set operation on key "${String(l)}" failed: target is readonly.`,e),!0},deleteProperty(e,l){return Fo(`Delete operation on key "${String(l)}" failed: target is readonly.`,e),!0}},d8=zs({},Nc,{get:o8,set:p8}),f8=zs({},Mc,{get:a8}),pa=e=>e,Ho=e=>Reflect.getPrototypeOf(e);function oo(e,l,n=!1,t=!1){e=e.__v_raw;const a=hs(e),r=hs(l);n||(l!==r&&_e(a,"get",l),_e(a,"get",r));const{has:c}=Ho(a),p=t?pa:n?ua:In;if(c.call(a,l))return p(e.get(l));if(c.call(a,r))return p(e.get(r));e!==a&&e.get(l)}function to(e,l=!1){const n=this.__v_raw,t=hs(n),a=hs(e);return l||(e!==a&&_e(t,"has",e),_e(t,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function ao(e,l=!1){return e=e.__v_raw,!l&&_e(hs(e),"iterate",Ol),Reflect.get(e,"size",e)}function Ka(e){e=hs(e);const l=hs(this);return Ho(l).has.call(l,e)||(l.add(e),ll(l,"add",e,e)),this}function Ja(e,l){l=hs(l);const n=hs(this),{has:t,get:a}=Ho(n);let r=t.call(n,e);r?Rc(n,t,e):(e=hs(e),r=t.call(n,e));const c=a.call(n,e);return n.set(e,l),r?Rn(l,c)&&ll(n,"set",e,l,c):ll(n,"add",e,l),this}function Ya(e){const l=hs(this),{has:n,get:t}=Ho(l);let a=n.call(l,e);a?Rc(l,n,e):(e=hs(e),a=n.call(l,e));const r=t?t.call(l,e):void 0,c=l.delete(e);return a&&ll(l,"delete",e,void 0,r),c}function Za(){const e=hs(this),l=e.size!==0,n=Vl(e)?new Map(e):new Set(e),t=e.clear();return l&&ll(e,"clear",void 0,void 0,n),t}function ro(e,l){return function(t,a){const r=this,c=r.__v_raw,p=hs(c),i=l?pa:e?ua:In;return!e&&_e(p,"iterate",Ol),c.forEach((u,d)=>t.call(a,i(u),i(d),r))}}function co(e,l,n){return function(...t){const a=this.__v_raw,r=hs(a),c=Vl(r),p=e==="entries"||e===Symbol.iterator&&c,i=e==="keys"&&c,u=a[e](...t),d=n?pa:l?ua:In;return!l&&_e(r,"iterate",i?Ct:Ol),{next(){const{value:y,done:f}=u.next();return f?{value:y,done:f}:{value:p?[d(y[0]),d(y[1])]:d(y),done:f}},[Symbol.iterator](){return this}}}}function rl(e){return function(...l){{const n=l[0]?`on key "${l[0]}" `:"";console.warn(`${Hl(e)} operation ${n}failed: target is readonly.`,hs(this))}return e==="delete"?!1:this}}function h8(){const e={get(r){return oo(this,r)},get size(){return ao(this)},has:to,add:Ka,set:Ja,delete:Ya,clear:Za,forEach:ro(!1,!1)},l={get(r){return oo(this,r,!1,!0)},get size(){return ao(this)},has:to,add:Ka,set:Ja,delete:Ya,clear:Za,forEach:ro(!1,!0)},n={get(r){return oo(this,r,!0)},get size(){return ao(this,!0)},has(r){return to.call(this,r,!0)},add:rl("add"),set:rl("set"),delete:rl("delete"),clear:rl("clear"),forEach:ro(!0,!1)},t={get(r){return oo(this,r,!0,!0)},get size(){return ao(this,!0)},has(r){return to.call(this,r,!0)},add:rl("add"),set:rl("set"),delete:rl("delete"),clear:rl("clear"),forEach:ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=co(r,!1,!1),n[r]=co(r,!0,!1),l[r]=co(r,!1,!0),t[r]=co(r,!0,!0)}),[e,n,l,t]}const[m8,v8,B8,A8]=h8();function zo(e,l){const n=l?e?A8:B8:e?v8:m8;return(t,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?t:Reflect.get(As(n,a)&&a in t?n:t,a,r)}const _8={get:zo(!1,!1)},g8={get:zo(!1,!0)},D8={get:zo(!0,!1)},C8={get:zo(!0,!0)};function Rc(e,l,n){const t=hs(n);if(t!==n&&l.call(e,t)){const a=ta(e);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ic=new WeakMap,jc=new WeakMap,Hc=new WeakMap,zc=new WeakMap;function E8(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function F8(e){return e.__v_skip||!Object.isExtensible(e)?0:E8(ta(e))}function se(e){return _l(e)?e:Wo(e,!1,Nc,_8,Ic)}function k8(e){return Wo(e,!1,d8,g8,jc)}function $l(e){return Wo(e,!0,Mc,D8,Hc)}function tn(e){return Wo(e,!0,f8,C8,zc)}function Wo(e,l,n,t,a){if(!ws(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(l&&e.__v_isReactive))return e;const r=a.get(e);if(r)return r;const c=F8(e);if(c===0)return e;const p=new Proxy(e,c===2?t:n);return a.set(e,p),p}function Ll(e){return _l(e)?Ll(e.__v_raw):!!(e&&e.__v_isReactive)}function _l(e){return!!(e&&e.__v_isReadonly)}function ko(e){return!!(e&&e.__v_isShallow)}function xo(e){return Ll(e)||_l(e)}function hs(e){const l=e&&e.__v_raw;return l?hs(l):e}function ia(e){return Co(e,"__v_skip",!0),e}const In=e=>ws(e)?se(e):e,ua=e=>ws(e)?$l(e):e;function ya(e){fl&&ce&&(e=hs(e),Oc(e.dep||(e.dep=ra()),{target:e,type:"get",key:"value"}))}function da(e,l){e=hs(e),e.dep&&Et(e.dep,{target:e,type:"set",key:"value",newValue:l})}function Fs(e){return!!(e&&e.__v_isRef===!0)}function ns(e){return Wc(e,!1)}function ze(e){return Wc(e,!0)}function Wc(e,l){return Fs(e)?e:new x8(e,l)}class x8{constructor(l,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?l:hs(l),this._value=n?l:In(l)}get value(){return ya(this),this._value}set value(l){const n=this.__v_isShallow||ko(l)||_l(l);l=n?l:hs(l),Rn(l,this._rawValue)&&(this._rawValue=l,this._value=n?l:In(l),da(this,l))}}function C(e){return Fs(e)?e.value:e}const b8={get:(e,l,n)=>C(Reflect.get(e,l,n)),set:(e,l,n,t)=>{const a=e[l];return Fs(a)&&!Fs(n)?(a.value=n,!0):Reflect.set(e,l,n,t)}};function Uc(e){return Ll(e)?e:new Proxy(e,b8)}class w8{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:t}=l(()=>ya(this),()=>da(this));this._get=n,this._set=t}get value(){return this._get()}set value(l){this._set(l)}}function qc(e){return new w8(e)}function $8(e){xo(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const l=cs(e)?new Array(e.length):{};for(const n in e)l[n]=P8(e,n);return l}class S8{constructor(l,n,t){this._object=l,this._key=n,this._defaultValue=t,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function P8(e,l,n){const t=e[l];return Fs(t)?t:new S8(e,l,n)}var Kc;class V8{constructor(l,n,t,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Kc]=!1,this._dirty=!0,this.effect=new ca(l,()=>{this._dirty||(this._dirty=!0,da(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=t}get value(){const l=hs(this);return ya(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}Kc="__v_isReadonly";function O8(e,l,n=!1){let t,a;const r=is(e);r?(t=e,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(t=e.get,a=e.set);const c=new V8(t,a,r||!a,n);return l&&!n&&(c.effect.onTrack=l.onTrack,c.effect.onTrigger=l.onTrigger),c}const Tl=[];function ho(e){Tl.push(e)}function mo(){Tl.pop()}function R(e,...l){Kl();const n=Tl.length?Tl[Tl.length-1].component:null,t=n&&n.appContext.config.warnHandler,a=L8();if(t)sl(t,n,11,[e+l.join(""),n&&n.proxy,a.map(({vnode:r})=>`at <${et(n,r.type)}>`).join(`
`),a]);else{const r=[`[Vue warn]: ${e}`,...l];a.length&&r.push(`
`,...T8(a)),console.warn(...r)}Jl()}function L8(){let e=Tl[Tl.length-1];if(!e)return[];const l=[];for(;e;){const n=l[0];n&&n.vnode===e?n.recurseCount++:l.push({vnode:e,recurseCount:0});const t=e.component&&e.component.parent;e=t&&t.vnode}return l}function T8(e){const l=[];return e.forEach((n,t)=>{l.push(...t===0?[]:[`
`],...N8(n))}),l}function N8({vnode:e,recurseCount:l}){const n=l>0?`... (${l} recursive calls)`:"",t=e.component?e.component.parent==null:!1,a=` at <${et(e.component,e.type,t)}`,r=">"+n;return e.props?[a,...M8(e.props),r]:[a+r]}function M8(e){const l=[],n=Object.keys(e);return n.slice(0,3).forEach(t=>{l.push(...Jc(t,e[t]))}),n.length>3&&l.push(" ..."),l}function Jc(e,l,n){return Ts(l)?(l=JSON.stringify(l),n?l:[`${e}=${l}`]):typeof l=="number"||typeof l=="boolean"||l==null?n?l:[`${e}=${l}`]:Fs(l)?(l=Jc(e,hs(l.value),!0),n?l:[`${e}=Ref<`,l,">"]):is(l)?[`${e}=fn${l.name?`<${l.name}>`:""}`]:(l=hs(l),n?l:[`${e}=`,l])}const fa={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function sl(e,l,n,t){let a;try{a=t?e(...t):e()}catch(r){Uo(r,l,n)}return a}function $e(e,l,n,t){if(is(e)){const r=sl(e,l,n,t);return r&&oa(r)&&r.catch(c=>{Uo(c,l,n)}),r}const a=[];for(let r=0;r<e.length;r++)a.push($e(e[r],l,n,t));return a}function Uo(e,l,n,t=!0){const a=l?l.vnode:null;if(l){let r=l.parent;const c=l.proxy,p=fa[n];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}r=r.parent}const i=l.appContext.config.errorHandler;if(i){sl(i,null,10,[e,c,p]);return}}R8(e,n,a,t)}function R8(e,l,n,t=!0){{const a=fa[l];if(n&&ho(n),R(`Unhandled error${a?` during execution of ${a}`:""}`),n&&mo(),t)throw e;console.error(e)}}let jn=!1,Ft=!1;const le=[];let Ne=0;const cn=[];let Te=null,pl=0;const Yc=Promise.resolve();let ha=null;const I8=100;function Se(e){const l=ha||Yc;return e?l.then(this?e.bind(this):e):l}function j8(e){let l=Ne+1,n=le.length;for(;l<n;){const t=l+n>>>1;Hn(le[t])<e?l=t+1:n=t}return l}function qo(e){(!le.length||!le.includes(e,jn&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?le.push(e):le.splice(j8(e.id),0,e),Zc())}function Zc(){!jn&&!Ft&&(Ft=!0,ha=Yc.then(Xc))}function H8(e){const l=le.indexOf(e);l>Ne&&le.splice(l,1)}function Gc(e){cs(e)?cn.push(...e):(!Te||!Te.includes(e,e.allowRecurse?pl+1:pl))&&cn.push(e),Zc()}function Ga(e,l=jn?Ne+1:0){for(e=e||new Map;l<le.length;l++){const n=le[l];if(n&&n.pre){if(ma(e,n))continue;le.splice(l,1),l--,n()}}}function Qc(e){if(cn.length){const l=[...new Set(cn)];if(cn.length=0,Te){Te.push(...l);return}for(Te=l,e=e||new Map,Te.sort((n,t)=>Hn(n)-Hn(t)),pl=0;pl<Te.length;pl++)ma(e,Te[pl])||Te[pl]();Te=null,pl=0}}const Hn=e=>e.id==null?1/0:e.id,z8=(e,l)=>{const n=Hn(e)-Hn(l);if(n===0){if(e.pre&&!l.pre)return-1;if(l.pre&&!e.pre)return 1}return n};function Xc(e){Ft=!1,jn=!0,e=e||new Map,le.sort(z8);const l=n=>ma(e,n);try{for(Ne=0;Ne<le.length;Ne++){const n=le[Ne];if(n&&n.active!==!1){if(l(n))continue;sl(n,null,14)}}}finally{Ne=0,le.length=0,Qc(e),jn=!1,ha=null,(le.length||cn.length)&&Xc(e)}}function ma(e,l){if(!e.has(l))e.set(l,1);else{const n=e.get(l);if(n>I8){const t=l.ownerInstance,a=t&&Un(t.type);return R(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(l,n+1)}}let hl=!1;const ln=new Set;wc().__VUE_HMR_RUNTIME__={createRecord:tt(sp),rerender:tt(q8),reload:tt(K8)};const zl=new Map;function W8(e){const l=e.type.__hmrId;let n=zl.get(l);n||(sp(l,e.type),n=zl.get(l)),n.instances.add(e)}function U8(e){zl.get(e.type.__hmrId).instances.delete(e)}function sp(e,l){return zl.has(e)?!1:(zl.set(e,{initialDef:Pn(l),instances:new Set}),!0)}function Pn(e){return Pp(e)?e.__vccOpts:e}function q8(e,l){const n=zl.get(e);n&&(n.initialDef.render=l,[...n.instances].forEach(t=>{l&&(t.render=l,Pn(t.type).render=l),t.renderCache=[],hl=!0,t.update(),hl=!1}))}function K8(e,l){const n=zl.get(e);if(!n)return;l=Pn(l),Qa(n.initialDef,l);const t=[...n.instances];for(const a of t){const r=Pn(a.type);ln.has(r)||(r!==n.initialDef&&Qa(r,l),ln.add(r)),a.appContext.optionsCache.delete(a.type),a.ceReload?(ln.add(r),a.ceReload(l.styles),ln.delete(r)):a.parent?qo(a.parent.update):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Gc(()=>{for(const a of t)ln.delete(Pn(a.type))})}function Qa(e,l){zs(e,l);for(const n in e)n!=="__file"&&!(n in l)&&delete e[n]}function tt(e){return(l,n)=>{try{return e(l,n)}catch(t){console.error(t),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Me,wn=[],kt=!1;function so(e,...l){Me?Me.emit(e,...l):kt||wn.push({event:e,args:l})}function ep(e,l){var n,t;Me=e,Me?(Me.enabled=!0,wn.forEach(({event:a,args:r})=>Me.emit(a,...r)),wn=[]):typeof window<"u"&&window.HTMLElement&&!(!((t=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||t===void 0)&&t.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{ep(r,l)}),setTimeout(()=>{Me||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,kt=!0,wn=[])},3e3)):(kt=!0,wn=[])}function J8(e,l){so("app:init",e,l,{Fragment:ks,Text:lo,Comment:de,Static:vo})}function Y8(e){so("app:unmount",e)}const xt=va("component:added"),lp=va("component:updated"),Z8=va("component:removed"),G8=e=>{Me&&typeof Me.cleanupBuffer=="function"&&!Me.cleanupBuffer(e)&&Z8(e)};function va(e){return l=>{so(e,l.appContext.app,l.uid,l.parent?l.parent.uid:void 0,l)}}const Q8=np("perf:start"),X8=np("perf:end");function np(e){return(l,n,t)=>{so(e,l.appContext.app,l.uid,l,n,t)}}function su(e,l,n){so("component:emit",e.appContext.app,e,l,n)}function eu(e,l,...n){if(e.isUnmounted)return;const t=e.vnode.props||Vs;{const{emitsOptions:d,propsOptions:[y]}=e;if(d)if(!(l in d))(!y||!(kl(l)in y))&&R(`Component emitted event "${l}" but it is neither declared in the emits option nor as an "${kl(l)}" prop.`);else{const f=d[l];is(f)&&(f(...n)||R(`Invalid event arguments: event validation failed for event "${l}".`))}}let a=n;const r=l.startsWith("update:"),c=r&&l.slice(7);if(c&&c in t){const d=`${c==="modelValue"?"model":c}Modifiers`,{number:y,trim:f}=t[d]||Vs;f&&(a=n.map(m=>Ts(m)?m.trim():m)),y&&(a=n.map(Eo))}su(e,l,a);{const d=l.toLowerCase();d!==l&&t[kl(d)]&&R(`Event "${d}" is emitted in component ${et(e,e.type)} but the handler is registered for "${l}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${el(l)}" instead of "${l}".`)}let p,i=t[p=kl(l)]||t[p=kl(He(l))];!i&&r&&(i=t[p=kl(el(l))]),i&&$e(i,e,6,a);const u=t[p+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,$e(u,e,6,a)}}function op(e,l,n=!1){const t=l.emitsCache,a=t.get(e);if(a!==void 0)return a;const r=e.emits;let c={},p=!1;if(!is(e)){const i=u=>{const d=op(u,l,!0);d&&(p=!0,zs(c,d))};!n&&l.mixins.length&&l.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!p?(ws(e)&&t.set(e,null),null):(cs(r)?r.forEach(i=>c[i]=null):zs(c,r),ws(e)&&t.set(e,c),c)}function Ko(e,l){return!e||!Xn(l)?!1:(l=l.slice(2).replace(/Once$/,""),As(e,l[0].toLowerCase()+l.slice(1))||As(e,el(l))||As(e,l))}let Ks=null,Jo=null;function bo(e){const l=Ks;return Ks=e,Jo=e&&e.type.__scopeId||null,l}function r6(e){Jo=e}function c6(){Jo=null}function g(e,l=Ks,n){if(!l||e._n)return e;const t=(...a)=>{t._d&&ir(-1);const r=bo(l);let c;try{c=e(...a)}finally{bo(r),t._d&&ir(1)}return lp(l),c};return t._n=!0,t._c=!0,t._d=!0,t}let bt=!1;function wo(){bt=!0}function at(e){const{type:l,vnode:n,proxy:t,withProxy:a,props:r,propsOptions:[c],slots:p,attrs:i,emit:u,render:d,renderCache:y,data:f,setupState:m,ctx:v,inheritAttrs:_}=e;let D,P;const k=bo(e);bt=!1;try{if(n.shapeFlag&4){const Q=a||t;D=be(d.call(Q,Q,y,r,m,f,v)),P=i}else{const Q=l;i===r&&wo(),D=be(Q.length>1?Q(r,{get attrs(){return wo(),i},slots:p,emit:u}):Q(r,null)),P=l.props?i:nu(i)}}catch(Q){On.length=0,Uo(Q,e,1),D=F(de)}let w=D,N;if(D.patchFlag>0&&D.patchFlag&2048&&([w,N]=lu(D)),P&&_!==!1){const Q=Object.keys(P),{shapeFlag:J}=w;if(Q.length){if(J&7)c&&Q.some(Do)&&(P=ou(P,c)),w=ol(w,P);else if(!bt&&w.type!==de){const U=Object.keys(i),ts=[],ys=[];for(let vs=0,Ds=U.length;vs<Ds;vs++){const Rs=U[vs];Xn(Rs)?Do(Rs)||ts.push(Rs[2].toLowerCase()+Rs.slice(3)):ys.push(Rs)}ys.length&&R(`Extraneous non-props attributes (${ys.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),ts.length&&R(`Extraneous non-emits event listeners (${ts.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Xa(w)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),w=ol(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(Xa(w)||R("Component inside <Transition> renders non-element root node that cannot be animated."),w.transition=n.transition),N?N(w):D=w,bo(k),D}const lu=e=>{const l=e.children,n=e.dynamicChildren,t=tp(l);if(!t)return[e,void 0];const a=l.indexOf(t),r=n?n.indexOf(t):-1,c=p=>{l[a]=p,n&&(r>-1?n[r]=p:p.patchFlag>0&&(e.dynamicChildren=[...n,p]))};return[be(t),c]};function tp(e){let l;for(let n=0;n<e.length;n++){const t=e[n];if(Wl(t)){if(t.type!==de||t.children==="v-if"){if(l)return;l=t}}else return}return l}const nu=e=>{let l;for(const n in e)(n==="class"||n==="style"||Xn(n))&&((l||(l={}))[n]=e[n]);return l},ou=(e,l)=>{const n={};for(const t in e)(!Do(t)||!(t.slice(9)in l))&&(n[t]=e[t]);return n},Xa=e=>e.shapeFlag&7||e.type===de;function tu(e,l,n){const{props:t,children:a,component:r}=e,{props:c,children:p,patchFlag:i}=l,u=r.emitsOptions;if((a||p)&&hl||l.dirs||l.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return t?sr(t,c,u):!!c;if(i&8){const d=l.dynamicProps;for(let y=0;y<d.length;y++){const f=d[y];if(c[f]!==t[f]&&!Ko(u,f))return!0}}}else return(a||p)&&(!p||!p.$stable)?!0:t===c?!1:t?c?sr(t,c,u):!0:!!c;return!1}function sr(e,l,n){const t=Object.keys(l);if(t.length!==Object.keys(e).length)return!0;for(let a=0;a<t.length;a++){const r=t[a];if(l[r]!==e[r]&&!Ko(n,r))return!0}return!1}function au({vnode:e,parent:l},n){for(;l&&l.subTree===e;)(e=l.vnode).el=n,l=l.parent}const ap=e=>e.__isSuspense;function ru(e,l){l&&l.pendingBranch?cs(e)?l.effects.push(...e):l.effects.push(e):Gc(e)}function Be(e,l){if(!Us)R("provide() can only be used inside setup().");else{let n=Us.provides;const t=Us.parent&&Us.parent.provides;t===n&&(n=Us.provides=Object.create(t)),n[e]=l}}function b(e,l,n=!1){const t=Us||Ks;if(t){const a=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&is(l)?l.call(t.proxy):l;R(`injection "${String(e)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function mn(e,l){return Ba(e,null,l)}const po={};function Is(e,l,n){return is(l)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ba(e,l,n)}function Ba(e,l,{immediate:n,deep:t,flush:a,onTrack:r,onTrigger:c}=Vs){l||(n!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),t!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const p=N=>{R("Invalid watch source: ",N,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},i=Us;let u,d=!1,y=!1;if(Fs(e)?(u=()=>e.value,d=ko(e)):Ll(e)?(u=()=>e,t=!0):cs(e)?(y=!0,d=e.some(N=>Ll(N)||ko(N)),u=()=>e.map(N=>{if(Fs(N))return N.value;if(Ll(N))return Sl(N);if(is(N))return sl(N,i,2);p(N)})):is(e)?l?u=()=>sl(e,i,2):u=()=>{if(!(i&&i.isUnmounted))return f&&f(),$e(e,i,3,[m])}:(u=ye,p(e)),l&&t){const N=u;u=()=>Sl(N())}let f,m=N=>{f=k.onStop=()=>{sl(N,i,4)}},v;if(Wn)if(m=ye,l?n&&$e(l,i,3,[u(),y?[]:void 0,m]):u(),a==="sync"){const N=yy();v=N.__watcherHandles||(N.__watcherHandles=[])}else return ye;let _=y?new Array(e.length).fill(po):po;const D=()=>{if(k.active)if(l){const N=k.run();(t||d||(y?N.some((Q,J)=>Rn(Q,_[J])):Rn(N,_)))&&(f&&f(),$e(l,i,3,[N,_===po?void 0:y&&_[0]===po?[]:_,m]),_=N)}else k.run()};D.allowRecurse=!!l;let P;a==="sync"?P=D:a==="post"?P=()=>Qs(D,i&&i.suspense):(D.pre=!0,i&&(D.id=i.uid),P=()=>qo(D));const k=new ca(u,P);k.onTrack=r,k.onTrigger=c,l?n?D():_=k.run():a==="post"?Qs(k.run.bind(k),i&&i.suspense):k.run();const w=()=>{k.stop(),i&&i.scope&&la(i.scope.effects,k)};return v&&v.push(w),w}function cu(e,l,n){const t=this.proxy,a=Ts(e)?e.includes(".")?rp(t,e):()=>t[e]:e.bind(t,t);let r;is(l)?r=l:(r=l.handler,n=l);const c=Us;dn(this);const p=Ba(a,r.bind(t),n);return c?dn(c):Ml(),p}function rp(e,l){const n=l.split(".");return()=>{let t=e;for(let a=0;a<n.length&&t;a++)t=t[n[a]];return t}}function Sl(e,l){if(!ws(e)||e.__v_skip||(l=l||new Set,l.has(e)))return e;if(l.add(e),Fs(e))Sl(e.value,l);else if(cs(e))for(let n=0;n<e.length;n++)Sl(e[n],l);else if(kc(e)||Vl(e))e.forEach(n=>{Sl(n,l)});else if(bc(e))for(const n in e)Sl(e[n],l);return e}function cp(e,l){e.shapeFlag&6&&e.component?cp(e.component.subTree,l):e.shapeFlag&128?(e.ssContent.transition=l.clone(e.ssContent),e.ssFallback.transition=l.clone(e.ssFallback)):e.transition=l}function Ms(e){return is(e)?{setup:e,name:e.name}:e}const pn=e=>!!e.type.__asyncLoader,Aa=e=>e.type.__isKeepAlive,pu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:l}){const n=Cl(),t=n.ctx;if(!t.renderer)return()=>{const k=l.default&&l.default();return k&&k.length===1?k[0]:k};const a=new Map,r=new Set;let c=null;n.__v_cache=a;const p=n.suspense,{renderer:{p:i,m:u,um:d,o:{createElement:y}}}=t,f=y("div");t.activate=(k,w,N,Q,J)=>{const U=k.component;u(k,w,N,0,p),i(U.vnode,k,w,N,U,p,Q,k.slotScopeIds,J),Qs(()=>{U.isDeactivated=!1,U.a&&yl(U.a);const ts=k.props&&k.props.onVnodeMounted;ts&&De(ts,U.parent,k)},p),xt(U)},t.deactivate=k=>{const w=k.component;u(k,f,null,1,p),Qs(()=>{w.da&&yl(w.da);const N=k.props&&k.props.onVnodeUnmounted;N&&De(N,w.parent,k),w.isDeactivated=!0},p),xt(w)};function m(k){rt(k),d(k,n,p,!0)}function v(k){a.forEach((w,N)=>{const Q=Un(w.type);Q&&(!k||!k(Q))&&_(N)})}function _(k){const w=a.get(k);!c||w.type!==c.type?m(w):c&&rt(c),a.delete(k),r.delete(k)}Is(()=>[e.include,e.exclude],([k,w])=>{k&&v(N=>$n(k,N)),w&&v(N=>!$n(w,N))},{flush:"post",deep:!0});let D=null;const P=()=>{D!=null&&a.set(D,ct(n.subTree))};return Zo(P),up(P),yp(()=>{a.forEach(k=>{const{subTree:w,suspense:N}=n,Q=ct(w);if(k.type===Q.type){rt(Q);const J=Q.component.da;J&&Qs(J,N);return}m(k)})}),()=>{if(D=null,!l.default)return null;const k=l.default(),w=k[0];if(k.length>1)return R("KeepAlive should contain exactly one component child."),c=null,k;if(!Wl(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return c=null,w;let N=ct(w);const Q=N.type,J=Un(pn(N)?N.type.__asyncResolved||{}:Q),{include:U,exclude:ts,max:ys}=e;if(U&&(!J||!$n(U,J))||ts&&J&&$n(ts,J))return c=N,w;const vs=N.key==null?Q:N.key,Ds=a.get(vs);return N.el&&(N=ol(N),w.shapeFlag&128&&(w.ssContent=N)),D=vs,Ds?(N.el=Ds.el,N.component=Ds.component,N.transition&&cp(N,N.transition),N.shapeFlag|=512,r.delete(vs),r.add(vs)):(r.add(vs),ys&&r.size>parseInt(ys,10)&&_(r.values().next().value)),N.shapeFlag|=256,c=N,ap(w.type)?w:N}}},pp=pu;function $n(e,l){return cs(e)?e.some(n=>$n(n,l)):Ts(e)?e.split(",").includes(l):e.test?e.test(l):!1}function iu(e,l){ip(e,"a",l)}function uu(e,l){ip(e,"da",l)}function ip(e,l,n=Us){const t=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Yo(l,t,n),n){let a=n.parent;for(;a&&a.parent;)Aa(a.parent.vnode)&&yu(t,l,n,a),a=a.parent}}function yu(e,l,n,t){const a=Yo(l,e,t,!0);Go(()=>{la(t[l],a)},n)}function rt(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ct(e){return e.shapeFlag&128?e.ssContent:e}function Yo(e,l,n=Us,t=!1){if(n){const a=n[e]||(n[e]=[]),r=l.__weh||(l.__weh=(...c)=>{if(n.isUnmounted)return;Kl(),dn(n);const p=$e(l,n,e,c);return Ml(),Jl(),p});return t?a.unshift(r):a.push(r),r}else{const a=kl(fa[e].replace(/ hook$/,""));R(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const tl=e=>(l,n=Us)=>(!Wn||e==="sp")&&Yo(e,(...t)=>l(...t),n),du=tl("bm"),Zo=tl("m"),fu=tl("bu"),up=tl("u"),yp=tl("bum"),Go=tl("um"),hu=tl("sp"),mu=tl("rtg"),vu=tl("rtc");function Bu(e,l=Us){Yo("ec",e,l)}function dp(e){Ji(e)&&R("Do not use built-in directive ids as custom directive id: "+e)}function Pe(e,l){const n=Ks;if(n===null)return R("withDirectives can only be used inside render functions."),e;const t=st(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let r=0;r<l.length;r++){let[c,p,i,u=Vs]=l[r];c&&(is(c)&&(c={mounted:c,updated:c}),c.deep&&Sl(p),a.push({dir:c,instance:t,value:p,oldValue:void 0,arg:i,modifiers:u}))}return e}function El(e,l,n,t){const a=e.dirs,r=l&&l.dirs;for(let c=0;c<a.length;c++){const p=a[c];r&&(p.oldValue=r[c].value);let i=p.dir[t];i&&(Kl(),$e(i,n,8,[e.el,p,e,l]),Jl())}}const wt="components",Au="directives";function _u(e,l){return fp(wt,e,!0,l)||e}const gu=Symbol();function Qo(e){return fp(Au,e)}function fp(e,l,n=!0,t=!1){const a=Ks||Us;if(a){const r=a.type;if(e===wt){const p=Un(r,!1);if(p&&(p===l||p===He(l)||p===Hl(He(l))))return r}const c=er(a[e]||r[e],l)||er(a.appContext[e],l);if(!c&&t)return r;if(n&&!c){const p=e===wt?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";R(`Failed to resolve ${e.slice(0,-1)}: ${l}${p}`)}return c}else R(`resolve${Hl(e.slice(0,-1))} can only be used in render() or setup().`)}function er(e,l){return e&&(e[l]||e[He(l)]||e[Hl(He(l))])}function eo(e,l,n,t){let a;const r=n&&n[t];if(cs(e)||Ts(e)){a=new Array(e.length);for(let c=0,p=e.length;c<p;c++)a[c]=l(e[c],c,void 0,r&&r[c])}else if(typeof e=="number"){Number.isInteger(e)||R(`The v-for range expect an integer value but got ${e}.`),a=new Array(e);for(let c=0;c<e;c++)a[c]=l(c+1,c,void 0,r&&r[c])}else if(ws(e))if(e[Symbol.iterator])a=Array.from(e,(c,p)=>l(c,p,void 0,r&&r[p]));else{const c=Object.keys(e);a=new Array(c.length);for(let p=0,i=c.length;p<i;p++){const u=c[p];a[p]=l(e[u],u,p,r&&r[p])}}else a=[];return n&&(n[t]=a),a}function nl(e,l,n={},t,a){if(Ks.isCE||Ks.parent&&pn(Ks.parent)&&Ks.parent.isCE)return l!=="default"&&(n.name=l),F("slot",n,t&&t());let r=e[l];r&&r.length>1&&(R("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),A();const c=r&&hp(r(n)),p=O(ks,{key:n.key||c&&c.key||`_${l}`},c||(t?t():[]),c&&e._===1?64:-2);return!a&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),r&&r._c&&(r._d=!0),p}function hp(e){return e.some(l=>Wl(l)?!(l.type===de||l.type===ks&&!hp(l.children)):!0)?e:null}const $t=e=>e?wp(e)?st(e)||e.proxy:$t(e.parent):null,Nl=zs(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>tn(e.props),$attrs:e=>tn(e.attrs),$slots:e=>tn(e.slots),$refs:e=>tn(e.refs),$parent:e=>$t(e.parent),$root:e=>$t(e.root),$emit:e=>e.emit,$options:e=>ga(e),$forceUpdate:e=>e.f||(e.f=()=>qo(e.update)),$nextTick:e=>e.n||(e.n=Se.bind(e.proxy)),$watch:e=>cu.bind(e)}),_a=e=>e==="_"||e==="$",pt=(e,l)=>e!==Vs&&!e.__isScriptSetup&&As(e,l),mp={get({_:e},l){const{ctx:n,setupState:t,data:a,props:r,accessCache:c,type:p,appContext:i}=e;if(l==="__isVue")return!0;let u;if(l[0]!=="$"){const m=c[l];if(m!==void 0)switch(m){case 1:return t[l];case 2:return a[l];case 4:return n[l];case 3:return r[l]}else{if(pt(t,l))return c[l]=1,t[l];if(a!==Vs&&As(a,l))return c[l]=2,a[l];if((u=e.propsOptions[0])&&As(u,l))return c[l]=3,r[l];if(n!==Vs&&As(n,l))return c[l]=4,n[l];St&&(c[l]=0)}}const d=Nl[l];let y,f;if(d)return l==="$attrs"&&(_e(e,"get",l),wo()),d(e);if((y=p.__cssModules)&&(y=y[l]))return y;if(n!==Vs&&As(n,l))return c[l]=4,n[l];if(f=i.config.globalProperties,As(f,l))return f[l];Ks&&(!Ts(l)||l.indexOf("__v")!==0)&&(a!==Vs&&_a(l[0])&&As(a,l)?R(`Property ${JSON.stringify(l)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ks&&R(`Property ${JSON.stringify(l)} was accessed during render but is not defined on instance.`))},set({_:e},l,n){const{data:t,setupState:a,ctx:r}=e;return pt(a,l)?(a[l]=n,!0):a.__isScriptSetup&&As(a,l)?(R(`Cannot mutate <script setup> binding "${l}" from Options API.`),!1):t!==Vs&&As(t,l)?(t[l]=n,!0):As(e.props,l)?(R(`Attempting to mutate prop "${l}". Props are readonly.`),!1):l[0]==="$"&&l.slice(1)in e?(R(`Attempting to mutate public property "${l}". Properties starting with $ are reserved and readonly.`),!1):(l in e.appContext.config.globalProperties?Object.defineProperty(r,l,{enumerable:!0,configurable:!0,value:n}):r[l]=n,!0)},has({_:{data:e,setupState:l,accessCache:n,ctx:t,appContext:a,propsOptions:r}},c){let p;return!!n[c]||e!==Vs&&As(e,c)||pt(l,c)||(p=r[0])&&As(p,c)||As(t,c)||As(Nl,c)||As(a.config.globalProperties,c)},defineProperty(e,l,n){return n.get!=null?e._.accessCache[l]=0:As(n,"value")&&this.set(e,l,n.value,null),Reflect.defineProperty(e,l,n)}};mp.ownKeys=e=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Du(e){const l={};return Object.defineProperty(l,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Nl).forEach(n=>{Object.defineProperty(l,n,{configurable:!0,enumerable:!1,get:()=>Nl[n](e),set:ye})}),l}function Cu(e){const{ctx:l,propsOptions:[n]}=e;n&&Object.keys(n).forEach(t=>{Object.defineProperty(l,t,{enumerable:!0,configurable:!0,get:()=>e.props[t],set:ye})})}function Eu(e){const{ctx:l,setupState:n}=e;Object.keys(hs(n)).forEach(t=>{if(!n.__isScriptSetup){if(_a(t[0])){R(`setup() return property ${JSON.stringify(t)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(l,t,{enumerable:!0,configurable:!0,get:()=>n[t],set:ye})}})}function Fu(){const e=Object.create(null);return(l,n)=>{e[n]?R(`${l} property "${n}" is already defined in ${e[n]}.`):e[n]=l}}let St=!0;function ku(e){const l=ga(e),n=e.proxy,t=e.ctx;St=!1,l.beforeCreate&&lr(l.beforeCreate,e,"bc");const{data:a,computed:r,methods:c,watch:p,provide:i,inject:u,created:d,beforeMount:y,mounted:f,beforeUpdate:m,updated:v,activated:_,deactivated:D,beforeDestroy:P,beforeUnmount:k,destroyed:w,unmounted:N,render:Q,renderTracked:J,renderTriggered:U,errorCaptured:ts,serverPrefetch:ys,expose:vs,inheritAttrs:Ds,components:Rs,directives:Zs,filters:Gs}=l,$s=Fu();{const[X]=e.propsOptions;if(X)for(const rs in X)$s("Props",rs)}if(u&&xu(u,t,$s,e.appContext.config.unwrapInjectedRef),c)for(const X in c){const rs=c[X];is(rs)?(Object.defineProperty(t,X,{value:rs.bind(n),configurable:!0,enumerable:!0,writable:!0}),$s("Methods",X)):R(`Method "${X}" has type "${typeof rs}" in the component definition. Did you reference the function correctly?`)}if(a){is(a)||R("The data option must be a function. Plain object usage is no longer supported.");const X=a.call(n,n);if(oa(X)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!ws(X))R("data() should return an object.");else{e.data=se(X);for(const rs in X)$s("Data",rs),_a(rs[0])||Object.defineProperty(t,rs,{configurable:!0,enumerable:!0,get:()=>X[rs],set:ye})}}if(St=!0,r)for(const X in r){const rs=r[X],ms=is(rs)?rs.bind(n,n):is(rs.get)?rs.get.bind(n,n):ye;ms===ye&&R(`Computed property "${X}" has no getter.`);const Ss=!is(rs)&&is(rs.set)?rs.set.bind(n):()=>{R(`Write operation failed: computed property "${X}" is readonly.`)},fe=L({get:ms,set:Ss});Object.defineProperty(t,X,{enumerable:!0,configurable:!0,get:()=>fe.value,set:ee=>fe.value=ee}),$s("Computed",X)}if(p)for(const X in p)vp(p[X],t,n,X);if(i){const X=is(i)?i.call(n):i;Reflect.ownKeys(X).forEach(rs=>{Be(rs,X[rs])})}d&&lr(d,e,"c");function Ns(X,rs){cs(rs)?rs.forEach(ms=>X(ms.bind(n))):rs&&X(rs.bind(n))}if(Ns(du,y),Ns(Zo,f),Ns(fu,m),Ns(up,v),Ns(iu,_),Ns(uu,D),Ns(Bu,ts),Ns(vu,J),Ns(mu,U),Ns(yp,k),Ns(Go,N),Ns(hu,ys),cs(vs))if(vs.length){const X=e.exposed||(e.exposed={});vs.forEach(rs=>{Object.defineProperty(X,rs,{get:()=>n[rs],set:ms=>n[rs]=ms})})}else e.exposed||(e.exposed={});Q&&e.render===ye&&(e.render=Q),Ds!=null&&(e.inheritAttrs=Ds),Rs&&(e.components=Rs),Zs&&(e.directives=Zs)}function xu(e,l,n=ye,t=!1){cs(e)&&(e=Pt(e));for(const a in e){const r=e[a];let c;ws(r)?"default"in r?c=b(r.from||a,r.default,!0):c=b(r.from||a):c=b(r),Fs(c)?t?Object.defineProperty(l,a,{enumerable:!0,configurable:!0,get:()=>c.value,set:p=>c.value=p}):(R(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),l[a]=c):l[a]=c,n("Inject",a)}}function lr(e,l,n){$e(cs(e)?e.map(t=>t.bind(l.proxy)):e.bind(l.proxy),l,n)}function vp(e,l,n,t){const a=t.includes(".")?rp(n,t):()=>n[t];if(Ts(e)){const r=l[e];is(r)?Is(a,r):R(`Invalid watch handler specified by key "${e}"`,r)}else if(is(e))Is(a,e.bind(n));else if(ws(e))if(cs(e))e.forEach(r=>vp(r,l,n,t));else{const r=is(e.handler)?e.handler.bind(n):l[e.handler];is(r)?Is(a,r,e):R(`Invalid watch handler specified by key "${e.handler}"`,r)}else R(`Invalid watch option: "${t}"`,e)}function ga(e){const l=e.type,{mixins:n,extends:t}=l,{mixins:a,optionsCache:r,config:{optionMergeStrategies:c}}=e.appContext,p=r.get(l);let i;return p?i=p:!a.length&&!n&&!t?i=l:(i={},a.length&&a.forEach(u=>$o(i,u,c,!0)),$o(i,l,c)),ws(l)&&r.set(l,i),i}function $o(e,l,n,t=!1){const{mixins:a,extends:r}=l;r&&$o(e,r,n,!0),a&&a.forEach(c=>$o(e,c,n,!0));for(const c in l)if(t&&c==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const p=bu[c]||n&&n[c];e[c]=p?p(e[c],l[c]):l[c]}return e}const bu={data:nr,props:xl,emits:xl,methods:xl,computed:xl,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:xl,directives:xl,watch:$u,provide:nr,inject:wu};function nr(e,l){return l?e?function(){return zs(is(e)?e.call(this,this):e,is(l)?l.call(this,this):l)}:l:e}function wu(e,l){return xl(Pt(e),Pt(l))}function Pt(e){if(cs(e)){const l={};for(let n=0;n<e.length;n++)l[e[n]]=e[n];return l}return e}function ae(e,l){return e?[...new Set([].concat(e,l))]:l}function xl(e,l){return e?zs(zs(Object.create(null),e),l):l}function $u(e,l){if(!e)return l;if(!l)return e;const n=zs(Object.create(null),e);for(const t in l)n[t]=ae(e[t],l[t]);return n}function Su(e,l,n,t=!1){const a={},r={};Co(r,Xo,1),e.propsDefaults=Object.create(null),Bp(e,l,a,r);for(const c in e.propsOptions[0])c in a||(a[c]=void 0);_p(l||{},a,e),n?e.props=t?a:k8(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function Pu(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Vu(e,l,n,t){const{props:a,attrs:r,vnode:{patchFlag:c}}=e,p=hs(a),[i]=e.propsOptions;let u=!1;if(!Pu(e)&&(t||c>0)&&!(c&16)){if(c&8){const d=e.vnode.dynamicProps;for(let y=0;y<d.length;y++){let f=d[y];if(Ko(e.emitsOptions,f))continue;const m=l[f];if(i)if(As(r,f))m!==r[f]&&(r[f]=m,u=!0);else{const v=He(f);a[v]=Vt(i,p,v,m,e,!1)}else m!==r[f]&&(r[f]=m,u=!0)}}}else{Bp(e,l,a,r)&&(u=!0);let d;for(const y in p)(!l||!As(l,y)&&((d=el(y))===y||!As(l,d)))&&(i?n&&(n[y]!==void 0||n[d]!==void 0)&&(a[y]=Vt(i,p,y,void 0,e,!0)):delete a[y]);if(r!==p)for(const y in r)(!l||!As(l,y))&&(delete r[y],u=!0)}u&&ll(e,"set","$attrs"),_p(l||{},a,e)}function Bp(e,l,n,t){const[a,r]=e.propsOptions;let c=!1,p;if(l)for(let i in l){if(fo(i))continue;const u=l[i];let d;a&&As(a,d=He(i))?!r||!r.includes(d)?n[d]=u:(p||(p={}))[d]=u:Ko(e.emitsOptions,i)||(!(i in t)||u!==t[i])&&(t[i]=u,c=!0)}if(r){const i=hs(n),u=p||Vs;for(let d=0;d<r.length;d++){const y=r[d];n[y]=Vt(a,i,y,u[y],e,!As(u,y))}}return c}function Vt(e,l,n,t,a,r){const c=e[n];if(c!=null){const p=As(c,"default");if(p&&t===void 0){const i=c.default;if(c.type!==Function&&is(i)){const{propsDefaults:u}=a;n in u?t=u[n]:(dn(a),t=u[n]=i.call(null,l),Ml())}else t=i}c[0]&&(r&&!p?t=!1:c[1]&&(t===""||t===el(n))&&(t=!0))}return t}function Ap(e,l,n=!1){const t=l.propsCache,a=t.get(e);if(a)return a;const r=e.props,c={},p=[];let i=!1;if(!is(e)){const d=y=>{i=!0;const[f,m]=Ap(y,l,!0);zs(c,f),m&&p.push(...m)};!n&&l.mixins.length&&l.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!i)return ws(e)&&t.set(e,rn),rn;if(cs(r))for(let d=0;d<r.length;d++){Ts(r[d])||R("props must be strings when using array syntax.",r[d]);const y=He(r[d]);or(y)&&(c[y]=Vs)}else if(r){ws(r)||R("invalid props options",r);for(const d in r){const y=He(d);if(or(y)){const f=r[d],m=c[y]=cs(f)||is(f)?{type:f}:Object.assign({},f);if(m){const v=ar(Boolean,m.type),_=ar(String,m.type);m[0]=v>-1,m[1]=_<0||v<_,(v>-1||As(m,"default"))&&p.push(y)}}}}const u=[c,p];return ws(e)&&t.set(e,u),u}function or(e){return e[0]!=="$"?!0:(R(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Ot(e){const l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:e===null?"null":""}function tr(e,l){return Ot(e)===Ot(l)}function ar(e,l){return cs(l)?l.findIndex(n=>tr(n,e)):is(l)&&tr(l,e)?0:-1}function _p(e,l,n){const t=hs(l),a=n.propsOptions[0];for(const r in a){let c=a[r];c!=null&&Ou(r,t[r],c,!As(e,r)&&!As(e,el(r)))}}function Ou(e,l,n,t){const{type:a,required:r,validator:c}=n;if(r&&t){R('Missing required prop: "'+e+'"');return}if(!(l==null&&!n.required)){if(a!=null&&a!==!0){let p=!1;const i=cs(a)?a:[a],u=[];for(let d=0;d<i.length&&!p;d++){const{valid:y,expectedType:f}=Tu(l,i[d]);u.push(f||""),p=y}if(!p){R(Nu(e,l,u));return}}c&&!c(l)&&R('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Lu=Dl("String,Number,Boolean,Function,Symbol,BigInt");function Tu(e,l){let n;const t=Ot(l);if(Lu(t)){const a=typeof e;n=a===t.toLowerCase(),!n&&a==="object"&&(n=e instanceof l)}else t==="Object"?n=ws(e):t==="Array"?n=cs(e):t==="null"?n=e===null:n=e instanceof l;return{valid:n,expectedType:t}}function Nu(e,l,n){let t=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(Hl).join(" | ")}`;const a=n[0],r=ta(l),c=rr(l,a),p=rr(l,r);return n.length===1&&cr(a)&&!Mu(a,r)&&(t+=` with value ${c}`),t+=`, got ${r} `,cr(r)&&(t+=`with value ${p}.`),t}function rr(e,l){return l==="String"?`"${e}"`:l==="Number"?`${Number(e)}`:`${e}`}function cr(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function Mu(...e){return e.some(l=>l.toLowerCase()==="boolean")}const gp=e=>e[0]==="_"||e==="$stable",Da=e=>cs(e)?e.map(be):[be(e)],Ru=(e,l,n)=>{if(l._n)return l;const t=g((...a)=>(Us&&R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Da(l(...a))),n);return t._c=!1,t},Dp=(e,l,n)=>{const t=e._ctx;for(const a in e){if(gp(a))continue;const r=e[a];if(is(r))l[a]=Ru(a,r,t);else if(r!=null){R(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const c=Da(r);l[a]=()=>c}}},Cp=(e,l)=>{Aa(e.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Da(l);e.slots.default=()=>n},Iu=(e,l)=>{if(e.vnode.shapeFlag&32){const n=l._;n?(e.slots=hs(l),Co(l,"_",n)):Dp(l,e.slots={})}else e.slots={},l&&Cp(e,l);Co(e.slots,Xo,1)},ju=(e,l,n)=>{const{vnode:t,slots:a}=e;let r=!0,c=Vs;if(t.shapeFlag&32){const p=l._;p?hl?zs(a,l):n&&p===1?r=!1:(zs(a,l),!n&&p===1&&delete a._):(r=!l.$stable,Dp(l,a)),c=l}else l&&(Cp(e,l),c={default:1});if(r)for(const p in a)!gp(p)&&!(p in c)&&delete a[p]};function Ep(){return{app:null,config:{isNativeTag:Fc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hu=0;function zu(e,l){return function(t,a=null){is(t)||(t=Object.assign({},t)),a!=null&&!ws(a)&&(R("root props passed to app.mount() must be an object."),a=null);const r=Ep(),c=new Set;let p=!1;const i=r.app={_uid:Hu++,_component:t,_props:a,_container:null,_context:r,_instance:null,version:yr,get config(){return r.config},set config(u){R("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return c.has(u)?R("Plugin has already been applied to target app."):u&&is(u.install)?(c.add(u),u.install(i,...d)):is(u)?(c.add(u),u(i,...d)):R('A plugin must either be a function or an object with an "install" function.'),i},mixin(u){return r.mixins.includes(u)?R("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),i},component(u,d){return Nt(u,r.config),d?(r.components[u]&&R(`Component "${u}" has already been registered in target app.`),r.components[u]=d,i):r.components[u]},directive(u,d){return dp(u),d?(r.directives[u]&&R(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,i):r.directives[u]},mount(u,d,y){if(p)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=F(t,a);return f.appContext=r,r.reload=()=>{e(ol(f),u,y)},d&&l?l(f,u):e(f,u,y),p=!0,i._container=u,u.__vue_app__=i,i._instance=f.component,J8(i,yr),st(f.component)||f.component.proxy}},unmount(){p?(e(null,i._container),i._instance=null,Y8(i),delete i._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&R(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,i}};return i}}function Lt(e,l,n,t,a=!1){if(cs(e)){e.forEach((f,m)=>Lt(f,l&&(cs(l)?l[m]:l),n,t,a));return}if(pn(t)&&!a)return;const r=t.shapeFlag&4?st(t.component)||t.component.proxy:t.el,c=a?null:r,{i:p,r:i}=e;if(!p){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=l&&l.r,d=p.refs===Vs?p.refs={}:p.refs,y=p.setupState;if(u!=null&&u!==i&&(Ts(u)?(d[u]=null,As(y,u)&&(y[u]=null)):Fs(u)&&(u.value=null)),is(i))sl(i,p,12,[c,d]);else{const f=Ts(i),m=Fs(i);if(f||m){const v=()=>{if(e.f){const _=f?As(y,i)?y[i]:d[i]:i.value;a?cs(_)&&la(_,r):cs(_)?_.includes(r)||_.push(r):f?(d[i]=[r],As(y,i)&&(y[i]=d[i])):(i.value=[r],e.k&&(d[e.k]=i.value))}else f?(d[i]=c,As(y,i)&&(y[i]=c)):m?(i.value=c,e.k&&(d[e.k]=c)):R("Invalid template ref type:",i,`(${typeof i})`)};c?(v.id=-1,Qs(v,n)):v()}else R("Invalid template ref type:",i,`(${typeof i})`)}}let An,dl;function Ke(e,l){e.appContext.config.performance&&So()&&dl.mark(`vue-${l}-${e.uid}`),Q8(e,l,So()?dl.now():Date.now())}function Je(e,l){if(e.appContext.config.performance&&So()){const n=`vue-${l}-${e.uid}`,t=n+":end";dl.mark(t),dl.measure(`<${et(e,e.type)}> ${l}`,n,t),dl.clearMarks(n),dl.clearMarks(t)}X8(e,l,So()?dl.now():Date.now())}function So(){return An!==void 0||(typeof window<"u"&&window.performance?(An=!0,dl=window.performance):An=!1),An}function Wu(){const e=[];if(e.length){const l=e.length>1;console.warn(`Feature flag${l?"s":""} ${e.join(", ")} ${l?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Qs=ru;function Uu(e){return qu(e)}function qu(e,l){Wu();const n=wc();n.__VUE__=!0,ep(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:t,remove:a,patchProp:r,createElement:c,createText:p,createComment:i,setText:u,setElementText:d,parentNode:y,nextSibling:f,setScopeId:m=ye,insertStaticContent:v}=e,_=(h,B,E,T=null,V=null,j=null,Y=!1,I=null,H=hl?!1:!!B.dynamicChildren)=>{if(h===B)return;h&&!_n(h,B)&&(T=es(h),ue(h,V,j,!0),h=null),B.patchFlag===-2&&(H=!1,B.dynamicChildren=null);const{type:M,ref:os,shapeFlag:ls}=B;switch(M){case lo:D(h,B,E,T);break;case de:P(h,B,E,T);break;case vo:h==null?k(B,E,T,Y):w(h,B,E,Y);break;case ks:Zs(h,B,E,T,V,j,Y,I,H);break;default:ls&1?J(h,B,E,T,V,j,Y,I,H):ls&6?Gs(h,B,E,T,V,j,Y,I,H):ls&64||ls&128?M.process(h,B,E,T,V,j,Y,I,H,Cs):R("Invalid VNode type:",M,`(${typeof M})`)}os!=null&&V&&Lt(os,h&&h.ref,j,B||h,!B)},D=(h,B,E,T)=>{if(h==null)t(B.el=p(B.children),E,T);else{const V=B.el=h.el;B.children!==h.children&&u(V,B.children)}},P=(h,B,E,T)=>{h==null?t(B.el=i(B.children||""),E,T):B.el=h.el},k=(h,B,E,T)=>{[h.el,h.anchor]=v(h.children,B,E,T,h.el,h.anchor)},w=(h,B,E,T)=>{if(B.children!==h.children){const V=f(h.anchor);Q(h),[B.el,B.anchor]=v(B.children,E,V,T)}else B.el=h.el,B.anchor=h.anchor},N=({el:h,anchor:B},E,T)=>{let V;for(;h&&h!==B;)V=f(h),t(h,E,T),h=V;t(B,E,T)},Q=({el:h,anchor:B})=>{let E;for(;h&&h!==B;)E=f(h),a(h),h=E;a(B)},J=(h,B,E,T,V,j,Y,I,H)=>{Y=Y||B.type==="svg",h==null?U(B,E,T,V,j,Y,I,H):vs(h,B,V,j,Y,I,H)},U=(h,B,E,T,V,j,Y,I)=>{let H,M;const{type:os,props:ls,shapeFlag:as,transition:fs,dirs:_s}=h;if(H=h.el=c(h.type,j,ls&&ls.is,ls),as&8?d(H,h.children):as&16&&ys(h.children,H,null,T,V,j&&os!=="foreignObject",Y,I),_s&&El(h,null,T,"created"),ls){for(const Ps in ls)Ps!=="value"&&!fo(Ps)&&r(H,Ps,null,ls[Ps],j,h.children,T,V,z);"value"in ls&&r(H,"value",null,ls.value),(M=ls.onVnodeBeforeMount)&&De(M,T,h)}ts(H,h,h.scopeId,Y,T),Object.defineProperty(H,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(H,"__vueParentComponent",{value:T,enumerable:!1}),_s&&El(h,null,T,"beforeMount");const Os=(!V||V&&!V.pendingBranch)&&fs&&!fs.persisted;Os&&fs.beforeEnter(H),t(H,B,E),((M=ls&&ls.onVnodeMounted)||Os||_s)&&Qs(()=>{M&&De(M,T,h),Os&&fs.enter(H),_s&&El(h,null,T,"mounted")},V)},ts=(h,B,E,T,V)=>{if(E&&m(h,E),T)for(let j=0;j<T.length;j++)m(h,T[j]);if(V){let j=V.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=tp(j.children)||j),B===j){const Y=V.vnode;ts(h,Y,Y.scopeId,Y.slotScopeIds,V.parent)}}},ys=(h,B,E,T,V,j,Y,I,H=0)=>{for(let M=H;M<h.length;M++){const os=h[M]=I?il(h[M]):be(h[M]);_(null,os,B,E,T,V,j,Y,I)}},vs=(h,B,E,T,V,j,Y)=>{const I=B.el=h.el;let{patchFlag:H,dynamicChildren:M,dirs:os}=B;H|=h.patchFlag&16;const ls=h.props||Vs,as=B.props||Vs;let fs;E&&Fl(E,!1),(fs=as.onVnodeBeforeUpdate)&&De(fs,E,B,h),os&&El(B,h,E,"beforeUpdate"),E&&Fl(E,!0),hl&&(H=0,Y=!1,M=null);const _s=V&&B.type!=="foreignObject";if(M?(Ds(h.dynamicChildren,M,I,E,T,_s,j),E&&E.type.__hmrId&&Vn(h,B)):Y||ms(h,B,I,null,E,T,_s,j,!1),H>0){if(H&16)Rs(I,B,ls,as,E,T,V);else if(H&2&&ls.class!==as.class&&r(I,"class",null,as.class,V),H&4&&r(I,"style",ls.style,as.style,V),H&8){const Os=B.dynamicProps;for(let Ps=0;Ps<Os.length;Ps++){const Hs=Os[Ps],Fe=ls[Hs],Gl=as[Hs];(Gl!==Fe||Hs==="value")&&r(I,Hs,Fe,Gl,V,h.children,E,T,z)}}H&1&&h.children!==B.children&&d(I,B.children)}else!Y&&M==null&&Rs(I,B,ls,as,E,T,V);((fs=as.onVnodeUpdated)||os)&&Qs(()=>{fs&&De(fs,E,B,h),os&&El(B,h,E,"updated")},T)},Ds=(h,B,E,T,V,j,Y)=>{for(let I=0;I<B.length;I++){const H=h[I],M=B[I],os=H.el&&(H.type===ks||!_n(H,M)||H.shapeFlag&70)?y(H.el):E;_(H,M,os,null,T,V,j,Y,!0)}},Rs=(h,B,E,T,V,j,Y)=>{if(E!==T){if(E!==Vs)for(const I in E)!fo(I)&&!(I in T)&&r(h,I,E[I],null,Y,B.children,V,j,z);for(const I in T){if(fo(I))continue;const H=T[I],M=E[I];H!==M&&I!=="value"&&r(h,I,M,H,Y,B.children,V,j,z)}"value"in T&&r(h,"value",E.value,T.value)}},Zs=(h,B,E,T,V,j,Y,I,H)=>{const M=B.el=h?h.el:p(""),os=B.anchor=h?h.anchor:p("");let{patchFlag:ls,dynamicChildren:as,slotScopeIds:fs}=B;(hl||ls&2048)&&(ls=0,H=!1,as=null),fs&&(I=I?I.concat(fs):fs),h==null?(t(M,E,T),t(os,E,T),ys(B.children,E,os,V,j,Y,I,H)):ls>0&&ls&64&&as&&h.dynamicChildren?(Ds(h.dynamicChildren,as,E,V,j,Y,I),V&&V.type.__hmrId?Vn(h,B):(B.key!=null||V&&B===V.subTree)&&Vn(h,B,!0)):ms(h,B,E,os,V,j,Y,I,H)},Gs=(h,B,E,T,V,j,Y,I,H)=>{B.slotScopeIds=I,h==null?B.shapeFlag&512?V.ctx.activate(B,E,T,Y,H):$s(B,E,T,V,j,Y,H):Ns(h,B,H)},$s=(h,B,E,T,V,j,Y)=>{const I=h.component=ly(h,T,V);if(I.type.__hmrId&&W8(I),ho(h),Ke(I,"mount"),Aa(h)&&(I.ctx.renderer=Cs),Ke(I,"init"),oy(I),Je(I,"init"),I.asyncDep){if(V&&V.registerDep(I,X),!h.el){const H=I.subTree=F(de);P(null,H,B,E)}return}X(I,h,B,E,V,j,Y),mo(),Je(I,"mount")},Ns=(h,B,E)=>{const T=B.component=h.component;if(tu(h,B,E))if(T.asyncDep&&!T.asyncResolved){ho(B),rs(T,B,E),mo();return}else T.next=B,H8(T.update),T.update();else B.el=h.el,T.vnode=B},X=(h,B,E,T,V,j,Y)=>{const I=()=>{if(h.isMounted){let{next:os,bu:ls,u:as,parent:fs,vnode:_s}=h,Os=os,Ps;ho(os||h.vnode),Fl(h,!1),os?(os.el=_s.el,rs(h,os,Y)):os=_s,ls&&yl(ls),(Ps=os.props&&os.props.onVnodeBeforeUpdate)&&De(Ps,fs,os,_s),Fl(h,!0),Ke(h,"render");const Hs=at(h);Je(h,"render");const Fe=h.subTree;h.subTree=Hs,Ke(h,"patch"),_(Fe,Hs,y(Fe.el),es(Fe),h,V,j),Je(h,"patch"),os.el=Hs.el,Os===null&&au(h,Hs.el),as&&Qs(as,V),(Ps=os.props&&os.props.onVnodeUpdated)&&Qs(()=>De(Ps,fs,os,_s),V),lp(h),mo()}else{let os;const{el:ls,props:as}=B,{bm:fs,m:_s,parent:Os}=h,Ps=pn(B);if(Fl(h,!1),fs&&yl(fs),!Ps&&(os=as&&as.onVnodeBeforeMount)&&De(os,Os,B),Fl(h,!0),ls&&ps){const Hs=()=>{Ke(h,"render"),h.subTree=at(h),Je(h,"render"),Ke(h,"hydrate"),ps(ls,h.subTree,h,V,null),Je(h,"hydrate")};Ps?B.type.__asyncLoader().then(()=>!h.isUnmounted&&Hs()):Hs()}else{Ke(h,"render");const Hs=h.subTree=at(h);Je(h,"render"),Ke(h,"patch"),_(null,Hs,E,T,h,V,j),Je(h,"patch"),B.el=Hs.el}if(_s&&Qs(_s,V),!Ps&&(os=as&&as.onVnodeMounted)){const Hs=B;Qs(()=>De(os,Os,Hs),V)}(B.shapeFlag&256||Os&&pn(Os.vnode)&&Os.vnode.shapeFlag&256)&&h.a&&Qs(h.a,V),h.isMounted=!0,xt(h),B=E=T=null}},H=h.effect=new ca(I,()=>qo(M),h.scope),M=h.update=()=>H.run();M.id=h.uid,Fl(h,!0),H.onTrack=h.rtc?os=>yl(h.rtc,os):void 0,H.onTrigger=h.rtg?os=>yl(h.rtg,os):void 0,M.ownerInstance=h,M()},rs=(h,B,E)=>{B.component=h;const T=h.vnode.props;h.vnode=B,h.next=null,Vu(h,B.props,T,E),ju(h,B.children,E),Kl(),Ga(),Jl()},ms=(h,B,E,T,V,j,Y,I,H=!1)=>{const M=h&&h.children,os=h?h.shapeFlag:0,ls=B.children,{patchFlag:as,shapeFlag:fs}=B;if(as>0){if(as&128){fe(M,ls,E,T,V,j,Y,I,H);return}else if(as&256){Ss(M,ls,E,T,V,j,Y,I,H);return}}fs&8?(os&16&&z(M,V,j),ls!==M&&d(E,ls)):os&16?fs&16?fe(M,ls,E,T,V,j,Y,I,H):z(M,V,j,!0):(os&8&&d(E,""),fs&16&&ys(ls,E,T,V,j,Y,I,H))},Ss=(h,B,E,T,V,j,Y,I,H)=>{h=h||rn,B=B||rn;const M=h.length,os=B.length,ls=Math.min(M,os);let as;for(as=0;as<ls;as++){const fs=B[as]=H?il(B[as]):be(B[as]);_(h[as],fs,E,null,V,j,Y,I,H)}M>os?z(h,V,j,!0,!1,ls):ys(B,E,T,V,j,Y,I,H,ls)},fe=(h,B,E,T,V,j,Y,I,H)=>{let M=0;const os=B.length;let ls=h.length-1,as=os-1;for(;M<=ls&&M<=as;){const fs=h[M],_s=B[M]=H?il(B[M]):be(B[M]);if(_n(fs,_s))_(fs,_s,E,null,V,j,Y,I,H);else break;M++}for(;M<=ls&&M<=as;){const fs=h[ls],_s=B[as]=H?il(B[as]):be(B[as]);if(_n(fs,_s))_(fs,_s,E,null,V,j,Y,I,H);else break;ls--,as--}if(M>ls){if(M<=as){const fs=as+1,_s=fs<os?B[fs].el:T;for(;M<=as;)_(null,B[M]=H?il(B[M]):be(B[M]),E,_s,V,j,Y,I,H),M++}}else if(M>as)for(;M<=ls;)ue(h[M],V,j,!0),M++;else{const fs=M,_s=M,Os=new Map;for(M=_s;M<=as;M++){const te=B[M]=H?il(B[M]):be(B[M]);te.key!=null&&(Os.has(te.key)&&R("Duplicate keys found during update:",JSON.stringify(te.key),"Make sure keys are unique."),Os.set(te.key,M))}let Ps,Hs=0;const Fe=as-_s+1;let Gl=!1,Ia=0;const Bn=new Array(Fe);for(M=0;M<Fe;M++)Bn[M]=0;for(M=fs;M<=ls;M++){const te=h[M];if(Hs>=Fe){ue(te,V,j,!0);continue}let Le;if(te.key!=null)Le=Os.get(te.key);else for(Ps=_s;Ps<=as;Ps++)if(Bn[Ps-_s]===0&&_n(te,B[Ps])){Le=Ps;break}Le===void 0?ue(te,V,j,!0):(Bn[Le-_s]=M+1,Le>=Ia?Ia=Le:Gl=!0,_(te,B[Le],E,null,V,j,Y,I,H),Hs++)}const ja=Gl?Ku(Bn):rn;for(Ps=ja.length-1,M=Fe-1;M>=0;M--){const te=_s+M,Le=B[te],Ha=te+1<os?B[te+1].el:T;Bn[M]===0?_(null,Le,E,Ha,V,j,Y,I,H):Gl&&(Ps<0||M!==ja[Ps]?ee(Le,E,Ha,2):Ps--)}}},ee=(h,B,E,T,V=null)=>{const{el:j,type:Y,transition:I,children:H,shapeFlag:M}=h;if(M&6){ee(h.component.subTree,B,E,T);return}if(M&128){h.suspense.move(B,E,T);return}if(M&64){Y.move(h,B,E,Cs);return}if(Y===ks){t(j,B,E);for(let ls=0;ls<H.length;ls++)ee(H[ls],B,E,T);t(h.anchor,B,E);return}if(Y===vo){N(h,B,E);return}if(T!==2&&M&1&&I)if(T===0)I.beforeEnter(j),t(j,B,E),Qs(()=>I.enter(j),V);else{const{leave:ls,delayLeave:as,afterLeave:fs}=I,_s=()=>t(j,B,E),Os=()=>{ls(j,()=>{_s(),fs&&fs()})};as?as(j,_s,Os):Os()}else t(j,B,E)},ue=(h,B,E,T=!1,V=!1)=>{const{type:j,props:Y,ref:I,children:H,dynamicChildren:M,shapeFlag:os,patchFlag:ls,dirs:as}=h;if(I!=null&&Lt(I,null,E,h,!0),os&256){B.ctx.deactivate(h);return}const fs=os&1&&as,_s=!pn(h);let Os;if(_s&&(Os=Y&&Y.onVnodeBeforeUnmount)&&De(Os,B,h),os&6)ss(h.component,E,T);else{if(os&128){h.suspense.unmount(E,T);return}fs&&El(h,null,B,"beforeUnmount"),os&64?h.type.remove(h,B,E,V,Cs,T):M&&(j!==ks||ls>0&&ls&64)?z(M,B,E,!1,!0):(j===ks&&ls&384||!V&&os&16)&&z(H,B,E),T&&al(h)}(_s&&(Os=Y&&Y.onVnodeUnmounted)||fs)&&Qs(()=>{Os&&De(Os,B,h),fs&&El(h,null,B,"unmounted")},E)},al=h=>{const{type:B,el:E,anchor:T,transition:V}=h;if(B===ks){h.patchFlag>0&&h.patchFlag&2048&&V&&!V.persisted?h.children.forEach(Y=>{Y.type===de?a(Y.el):al(Y)}):x(E,T);return}if(B===vo){Q(h);return}const j=()=>{a(E),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(h.shapeFlag&1&&V&&!V.persisted){const{leave:Y,delayLeave:I}=V,H=()=>Y(E,j);I?I(h.el,j,H):H()}else j()},x=(h,B)=>{let E;for(;h!==B;)E=f(h),a(h),h=E;a(B)},ss=(h,B,E)=>{h.type.__hmrId&&U8(h);const{bum:T,scope:V,update:j,subTree:Y,um:I}=h;T&&yl(T),V.stop(),j&&(j.active=!1,ue(Y,h,B,E)),I&&Qs(I,B),Qs(()=>{h.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve()),G8(h)},z=(h,B,E,T=!1,V=!1,j=0)=>{for(let Y=j;Y<h.length;Y++)ue(h[Y],B,E,T,V)},es=h=>h.shapeFlag&6?es(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),Bs=(h,B,E)=>{h==null?B._vnode&&ue(B._vnode,null,null,!0):_(B._vnode||null,h,B,null,null,null,E),Ga(),Qc(),B._vnode=h},Cs={p:_,um:ue,m:ee,r:al,mt:$s,mc:ys,pc:ms,pbc:Ds,n:es,o:e};let ds,ps;return l&&([ds,ps]=l(Cs)),{render:Bs,hydrate:ds,createApp:zu(Bs,ds)}}function Fl({effect:e,update:l},n){e.allowRecurse=l.allowRecurse=n}function Vn(e,l,n=!1){const t=e.children,a=l.children;if(cs(t)&&cs(a))for(let r=0;r<t.length;r++){const c=t[r];let p=a[r];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=a[r]=il(a[r]),p.el=c.el),n||Vn(c,p)),p.type===lo&&(p.el=c.el),p.type===de&&!p.el&&(p.el=c.el)}}function Ku(e){const l=e.slice(),n=[0];let t,a,r,c,p;const i=e.length;for(t=0;t<i;t++){const u=e[t];if(u!==0){if(a=n[n.length-1],e[a]<u){l[t]=a,n.push(t);continue}for(r=0,c=n.length-1;r<c;)p=r+c>>1,e[n[p]]<u?r=p+1:c=p;u<e[n[r]]&&(r>0&&(l[t]=n[r-1]),n[r]=t)}}for(r=n.length,c=n[r-1];r-- >0;)n[r]=c,c=l[c];return n}const Ju=e=>e.__isTeleport,un=e=>e&&(e.disabled||e.disabled===""),pr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Tt=(e,l)=>{const n=e&&e.to;if(Ts(n))if(l){const t=l(n);return t||R(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),t}else return R("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!un(e)&&R(`Invalid Teleport target: ${n}`),n},Yu={__isTeleport:!0,process(e,l,n,t,a,r,c,p,i,u){const{mc:d,pc:y,pbc:f,o:{insert:m,querySelector:v,createText:_,createComment:D}}=u,P=un(l.props);let{shapeFlag:k,children:w,dynamicChildren:N}=l;if(hl&&(i=!1,N=null),e==null){const Q=l.el=D("teleport start"),J=l.anchor=D("teleport end");m(Q,n,t),m(J,n,t);const U=l.target=Tt(l.props,v),ts=l.targetAnchor=_("");U?(m(ts,U),c=c||pr(U)):P||R("Invalid Teleport target on mount:",U,`(${typeof U})`);const ys=(vs,Ds)=>{k&16&&d(w,vs,Ds,a,r,c,p,i)};P?ys(n,J):U&&ys(U,ts)}else{l.el=e.el;const Q=l.anchor=e.anchor,J=l.target=e.target,U=l.targetAnchor=e.targetAnchor,ts=un(e.props),ys=ts?n:J,vs=ts?Q:U;if(c=c||pr(J),N?(f(e.dynamicChildren,N,ys,a,r,c,p),Vn(e,l,!0)):i||y(e,l,ys,vs,a,r,c,p,!1),P)ts||io(l,n,Q,u,1);else if((l.props&&l.props.to)!==(e.props&&e.props.to)){const Ds=l.target=Tt(l.props,v);Ds?io(l,Ds,null,u,0):R("Invalid Teleport target on update:",J,`(${typeof J})`)}else ts&&io(l,J,U,u,1)}Fp(l)},remove(e,l,n,t,{um:a,o:{remove:r}},c){const{shapeFlag:p,children:i,anchor:u,targetAnchor:d,target:y,props:f}=e;if(y&&r(d),(c||!un(f))&&(r(u),p&16))for(let m=0;m<i.length;m++){const v=i[m];a(v,l,n,!0,!!v.dynamicChildren)}},move:io,hydrate:Zu};function io(e,l,n,{o:{insert:t},m:a},r=2){r===0&&t(e.targetAnchor,l,n);const{el:c,anchor:p,shapeFlag:i,children:u,props:d}=e,y=r===2;if(y&&t(c,l,n),(!y||un(d))&&i&16)for(let f=0;f<u.length;f++)a(u[f],l,n,2);y&&t(p,l,n)}function Zu(e,l,n,t,a,r,{o:{nextSibling:c,parentNode:p,querySelector:i}},u){const d=l.target=Tt(l.props,i);if(d){const y=d._lpa||d.firstChild;if(l.shapeFlag&16)if(un(l.props))l.anchor=u(c(e),l,p(e),n,t,a,r),l.targetAnchor=y;else{l.anchor=c(e);let f=y;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){l.targetAnchor=f,d._lpa=l.targetAnchor&&c(l.targetAnchor);break}u(y,l,d,n,t,a,r)}Fp(l)}return l.anchor&&c(l.anchor)}const p6=Yu;function Fp(e){const l=e.ctx;if(l&&l.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",l.uid),n=n.nextSibling;l.ut()}}const ks=Symbol("Fragment"),lo=Symbol("Text"),de=Symbol("Comment"),vo=Symbol("Static"),On=[];let we=null;function A(e=!1){On.push(we=e?null:[])}function Gu(){On.pop(),we=On[On.length-1]||null}let zn=1;function ir(e){zn+=e}function kp(e){return e.dynamicChildren=zn>0?we||rn:null,Gu(),zn>0&&we&&we.push(e),e}function G(e,l,n,t,a,r){return kp(s(e,l,n,t,a,r,!0))}function O(e,l,n,t,a){return kp(F(e,l,n,t,a,!0))}function Wl(e){return e?e.__v_isVNode===!0:!1}function _n(e,l){return l.shapeFlag&6&&ln.has(l.type)?(e.shapeFlag&=-257,l.shapeFlag&=-513,!1):e.type===l.type&&e.key===l.key}const Qu=(...e)=>Xu(...e),Xo="__vInternal",xp=({key:e})=>e??null,Bo=({ref:e,ref_key:l,ref_for:n})=>e!=null?Ts(e)||Fs(e)||is(e)?{i:Ks,r:e,k:l,f:!!n}:e:null;function s(e,l=null,n=null,t=0,a=null,r=e===ks?0:1,c=!1,p=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:l,key:l&&xp(l),ref:l&&Bo(l),scopeId:Jo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:t,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ks};return p?(Ca(i,n),r&128&&e.normalize(i)):n&&(i.shapeFlag|=Ts(n)?8:16),i.key!==i.key&&R("VNode created with invalid key (NaN). VNode type:",i.type),zn>0&&!c&&we&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&we.push(i),i}const F=Qu;function Xu(e,l=null,n=null,t=0,a=null,r=!1){if((!e||e===gu)&&(e||R(`Invalid vnode type when creating vnode: ${e}.`),e=de),Wl(e)){const p=ol(e,l,!0);return n&&Ca(p,n),zn>0&&!r&&we&&(p.shapeFlag&6?we[we.indexOf(e)]=p:we.push(p)),p.patchFlag|=-2,p}if(Pp(e)&&(e=e.__vccOpts),l){l=W(l);let{class:p,style:i}=l;p&&!Ts(p)&&(l.class=js(p)),ws(i)&&(xo(i)&&!cs(i)&&(i=zs({},i)),l.style=Xs(i))}const c=Ts(e)?1:ap(e)?128:Ju(e)?64:ws(e)?4:is(e)?2:0;return c&4&&xo(e)&&(e=hs(e),R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,l,n,t,a,c,r,!0)}function W(e){return e?xo(e)||Xo in e?zs({},e):e:null}function ol(e,l,n=!1){const{props:t,ref:a,patchFlag:r,children:c}=e,p=l?Z(t||{},l):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&xp(p),ref:l&&l.ref?n&&a?cs(a)?a.concat(Bo(l)):[a,Bo(l)]:Bo(l):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&cs(c)?c.map(bp):c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:l&&e.type!==ks?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ol(e.ssContent),ssFallback:e.ssFallback&&ol(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function bp(e){const l=ol(e);return cs(e.children)&&(l.children=e.children.map(bp)),l}function o(e=" ",l=0){return F(lo,null,e,l)}function gs(e="",l=!1){return l?(A(),O(de,null,e)):F(de,null,e)}function be(e){return e==null||typeof e=="boolean"?F(de):cs(e)?F(ks,null,e.slice()):typeof e=="object"?il(e):F(lo,null,String(e))}function il(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ol(e)}function Ca(e,l){let n=0;const{shapeFlag:t}=e;if(l==null)l=null;else if(cs(l))n=16;else if(typeof l=="object")if(t&65){const a=l.default;a&&(a._c&&(a._d=!1),Ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=l._;!a&&!(Xo in l)?l._ctx=Ks:a===3&&Ks&&(Ks.slots._===1?l._=1:(l._=2,e.patchFlag|=1024))}else is(l)?(l={default:l,_ctx:Ks},n=32):(l=String(l),t&64?(n=16,l=[o(l)]):n=8);e.children=l,e.shapeFlag|=n}function Z(...e){const l={};for(let n=0;n<e.length;n++){const t=e[n];for(const a in t)if(a==="class")l.class!==t.class&&(l.class=js([l.class,t.class]));else if(a==="style")l.style=Xs([l.style,t.style]);else if(Xn(a)){const r=l[a],c=t[a];c&&r!==c&&!(cs(r)&&r.includes(c))&&(l[a]=r?[].concat(r,c):c)}else a!==""&&(l[a]=t[a])}return l}function De(e,l,n,t=null){$e(e,l,7,[n,t])}const sy=Ep();let ey=0;function ly(e,l,n){const t=e.type,a=(l?l.appContext:e.appContext)||sy,r={uid:ey++,vnode:e,type:t,parent:l,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(t,a),emitsOptions:op(t,a),emit:null,emitted:null,propsDefaults:Vs,inheritAttrs:t.inheritAttrs,ctx:Vs,data:Vs,props:Vs,attrs:Vs,slots:Vs,refs:Vs,setupState:Vs,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Du(r),r.root=l?l.root:r,r.emit=eu.bind(null,r),e.ce&&e.ce(r),r}let Us=null;const Cl=()=>Us||Ks,dn=e=>{Us=e,e.scope.on()},Ml=()=>{Us&&Us.scope.off(),Us=null},ny=Dl("slot,component");function Nt(e,l){const n=l.isNativeTag||Fc;(ny(e)||n(e))&&R("Do not use built-in or reserved HTML elements as component id: "+e)}function wp(e){return e.vnode.shapeFlag&4}let Wn=!1;function oy(e,l=!1){Wn=l;const{props:n,children:t}=e.vnode,a=wp(e);Su(e,n,a,l),Iu(e,t);const r=a?ty(e,l):void 0;return Wn=!1,r}function ty(e,l){var n;const t=e.type;{if(t.name&&Nt(t.name,e.appContext.config),t.components){const r=Object.keys(t.components);for(let c=0;c<r.length;c++)Nt(r[c],e.appContext.config)}if(t.directives){const r=Object.keys(t.directives);for(let c=0;c<r.length;c++)dp(r[c])}t.compilerOptions&&ay()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ia(new Proxy(e.ctx,mp)),Cu(e);const{setup:a}=t;if(a){const r=e.setupContext=a.length>1?Sp(e):null;dn(e),Kl();const c=sl(a,e,0,[tn(e.props),r]);if(Jl(),Ml(),oa(c)){if(c.then(Ml,Ml),l)return c.then(p=>{ur(e,p,l)}).catch(p=>{Uo(p,e,0)});if(e.asyncDep=c,!e.suspense){const p=(n=t.name)!==null&&n!==void 0?n:"Anonymous";R(`Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else ur(e,c,l)}else $p(e,l)}function ur(e,l,n){is(l)?e.type.__ssrInlineRender?e.ssrRender=l:e.render=l:ws(l)?(Wl(l)&&R("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=l,e.setupState=Uc(l),Eu(e)):l!==void 0&&R(`setup() should return an object. Received: ${l===null?"null":typeof l}`),$p(e,n)}let Mt;const ay=()=>!Mt;function $p(e,l,n){const t=e.type;if(!e.render){if(!l&&Mt&&!t.render){const a=t.template||ga(e).template;if(a){Ke(e,"compile");const{isCustomElement:r,compilerOptions:c}=e.appContext.config,{delimiters:p,compilerOptions:i}=t,u=zs(zs({isCustomElement:r,delimiters:p},c),i);t.render=Mt(a,u),Je(e,"compile")}}e.render=t.render||ye}dn(e),Kl(),ku(e),Jl(),Ml(),!t.render&&e.render===ye&&!l&&(t.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function ry(e){return new Proxy(e.attrs,{get(l,n){return wo(),_e(e,"get","$attrs"),l[n]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}})}function Sp(e){const l=t=>{e.exposed&&R("expose() should be called only once per setup()."),e.exposed=t||{}};let n;return Object.freeze({get attrs(){return n||(n=ry(e))},get slots(){return tn(e.slots)},get emit(){return(t,...a)=>e.emit(t,...a)},expose:l})}function st(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Uc(ia(e.exposed)),{get(l,n){if(n in l)return l[n];if(n in Nl)return Nl[n](e)},has(l,n){return n in l||n in Nl}}))}const cy=/(?:^|[-_])(\w)/g,py=e=>e.replace(cy,l=>l.toUpperCase()).replace(/[-_]/g,"");function Un(e,l=!0){return is(e)?e.displayName||e.name:e.name||l&&e.__name}function et(e,l,n=!1){let t=Un(l);if(!t&&l.__file){const a=l.__file.match(/([^/\\]+)\.\w+$/);a&&(t=a[1])}if(!t&&e&&e.parent){const a=r=>{for(const c in r)if(r[c]===l)return c};t=a(e.components||e.parent.type.components)||a(e.appContext.components)}return t?py(t):n?"App":"Anonymous"}function Pp(e){return is(e)&&"__vccOpts"in e}const L=(e,l)=>O8(e,l,Wn);function i6(){return iy().slots}function iy(){const e=Cl();return e||R("useContext() called without active instance."),e.setupContext||(e.setupContext=Sp(e))}function lt(e,l,n){const t=arguments.length;return t===2?ws(l)&&!cs(l)?Wl(l)?F(e,null,[l]):F(e,l):F(e,null,l):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&Wl(n)&&(n=[n]),F(e,l,n))}const uy=Symbol("ssrContext"),yy=()=>{{const e=b(uy);return e||R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function it(e){return!!(e&&e.__v_isShallow)}function dy(){if(typeof window>"u")return;const e={style:"color:#3ba776"},l={style:"color:#0b1bc9"},n={style:"color:#b62e24"},t={style:"color:#9d288c"},a={header(y){return ws(y)?y.__isVue?["div",e,"VueInstance"]:Fs(y)?["div",{},["span",e,d(y)],"<",p(y.value),">"]:Ll(y)?["div",{},["span",e,it(y)?"ShallowReactive":"Reactive"],"<",p(y),`>${_l(y)?" (readonly)":""}`]:_l(y)?["div",{},["span",e,it(y)?"ShallowReadonly":"Readonly"],"<",p(y),">"]:null:null},hasBody(y){return y&&y.__isVue},body(y){if(y&&y.__isVue)return["div",{},...r(y.$)]}};function r(y){const f=[];y.type.props&&y.props&&f.push(c("props",hs(y.props))),y.setupState!==Vs&&f.push(c("setup",y.setupState)),y.data!==Vs&&f.push(c("data",hs(y.data)));const m=i(y,"computed");m&&f.push(c("computed",m));const v=i(y,"inject");return v&&f.push(c("injected",v)),f.push(["div",{},["span",{style:t.style+";opacity:0.66"},"$ (internal): "],["object",{object:y}]]),f}function c(y,f){return f=zs({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},y],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",t,m+": "],p(f[m],!1)])]]:["span",{}]}function p(y,f=!0){return typeof y=="number"?["span",l,y]:typeof y=="string"?["span",n,JSON.stringify(y)]:typeof y=="boolean"?["span",t,y]:ws(y)?["object",{object:f?hs(y):y}]:["span",n,String(y)]}function i(y,f){const m=y.type;if(is(m))return;const v={};for(const _ in y.ctx)u(m,_,f)&&(v[_]=y.ctx[_]);return v}function u(y,f,m){const v=y[m];if(cs(v)&&v.includes(f)||ws(v)&&f in v||y.extends&&u(y.extends,f,m)||y.mixins&&y.mixins.some(_=>u(_,f,m)))return!0}function d(y){return it(y)?"ShallowRef":y.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const yr="3.2.45",fy="http://www.w3.org/2000/svg",bl=typeof document<"u"?document:null,dr=bl&&bl.createElement("template"),hy={insert:(e,l,n)=>{l.insertBefore(e,n||null)},remove:e=>{const l=e.parentNode;l&&l.removeChild(e)},createElement:(e,l,n,t)=>{const a=l?bl.createElementNS(fy,e):bl.createElement(e,n?{is:n}:void 0);return e==="select"&&t&&t.multiple!=null&&a.setAttribute("multiple",t.multiple),a},createText:e=>bl.createTextNode(e),createComment:e=>bl.createComment(e),setText:(e,l)=>{e.nodeValue=l},setElementText:(e,l)=>{e.textContent=l},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bl.querySelector(e),setScopeId(e,l){e.setAttribute(l,"")},insertStaticContent(e,l,n,t,a,r){const c=n?n.previousSibling:l.lastChild;if(a&&(a===r||a.nextSibling))for(;l.insertBefore(a.cloneNode(!0),n),!(a===r||!(a=a.nextSibling)););else{dr.innerHTML=t?`<svg>${e}</svg>`:e;const p=dr.content;if(t){const i=p.firstChild;for(;i.firstChild;)p.appendChild(i.firstChild);p.removeChild(i)}l.insertBefore(p,n)}return[c?c.nextSibling:l.firstChild,n?n.previousSibling:l.lastChild]}};function my(e,l,n){const t=e._vtc;t&&(l=(l?[l,...t]:[...t]).join(" ")),l==null?e.removeAttribute("class"):n?e.setAttribute("class",l):e.className=l}function vy(e,l,n){const t=e.style,a=Ts(n);if(n&&!a){for(const r in n)Rt(t,r,n[r]);if(l&&!Ts(l))for(const r in l)n[r]==null&&Rt(t,r,"")}else{const r=t.display;a?l!==n&&(t.cssText=n):l&&e.removeAttribute("style"),"_vod"in e&&(t.display=r)}}const By=/[^\\];\s*$/,fr=/\s*!important$/;function Rt(e,l,n){if(cs(n))n.forEach(t=>Rt(e,l,t));else if(n==null&&(n=""),By.test(n)&&R(`Unexpected semicolon at the end of '${l}' style value: '${n}'`),l.startsWith("--"))e.setProperty(l,n);else{const t=Ay(e,l);fr.test(n)?e.setProperty(el(t),n.replace(fr,""),"important"):e[t]=n}}const hr=["Webkit","Moz","ms"],ut={};function Ay(e,l){const n=ut[l];if(n)return n;let t=He(l);if(t!=="filter"&&t in e)return ut[l]=t;t=Hl(t);for(let a=0;a<hr.length;a++){const r=hr[a]+t;if(r in e)return ut[l]=r}return l}const mr="http://www.w3.org/1999/xlink";function _y(e,l,n,t,a){if(t&&l.startsWith("xlink:"))n==null?e.removeAttributeNS(mr,l.slice(6,l.length)):e.setAttributeNS(mr,l,n);else{const r=Ui(l);n==null||r&&!Cc(n)?e.removeAttribute(l):e.setAttribute(l,r?"":n)}}function gy(e,l,n,t,a,r,c){if(l==="innerHTML"||l==="textContent"){t&&c(t,a,r),e[l]=n??"";return}if(l==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const i=n??"";(e.value!==i||e.tagName==="OPTION")&&(e.value=i),n==null&&e.removeAttribute(l);return}let p=!1;if(n===""||n==null){const i=typeof e[l];i==="boolean"?n=Cc(n):n==null&&i==="string"?(n="",p=!0):i==="number"&&(n=0,p=!0)}try{e[l]=n}catch(i){p||R(`Failed setting prop "${l}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`,i)}p&&e.removeAttribute(l)}function nn(e,l,n,t){e.addEventListener(l,n,t)}function Dy(e,l,n,t){e.removeEventListener(l,n,t)}function Cy(e,l,n,t,a=null){const r=e._vei||(e._vei={}),c=r[l];if(t&&c)c.value=t;else{const[p,i]=Ey(l);if(t){const u=r[l]=xy(t,a);nn(e,p,u,i)}else c&&(Dy(e,p,c,i),r[l]=void 0)}}const vr=/(?:Once|Passive|Capture)$/;function Ey(e){let l;if(vr.test(e)){l={};let t;for(;t=e.match(vr);)e=e.slice(0,e.length-t[0].length),l[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):el(e.slice(2)),l]}let yt=0;const Fy=Promise.resolve(),ky=()=>yt||(Fy.then(()=>yt=0),yt=Date.now());function xy(e,l){const n=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=n.attached)return;$e(by(t,n.value),l,5,[t])};return n.value=e,n.attached=ky(),n}function by(e,l){if(cs(l)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},l.map(t=>a=>!a._stopped&&t&&t(a))}else return l}const Br=/^on[a-z]/,wy=(e,l,n,t,a=!1,r,c,p,i)=>{l==="class"?my(e,t,a):l==="style"?vy(e,n,t):Xn(l)?Do(l)||Cy(e,l,n,t,c):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):$y(e,l,t,a))?gy(e,l,t,r,c,p,i):(l==="true-value"?e._trueValue=t:l==="false-value"&&(e._falseValue=t),_y(e,l,t,a))};function $y(e,l,n,t){return t?!!(l==="innerHTML"||l==="textContent"||l in e&&Br.test(l)&&is(n)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&e.tagName==="INPUT"||l==="type"&&e.tagName==="TEXTAREA"||Br.test(l)&&Ts(n)?!1:l in e}const Ar=e=>{const l=e.props["onUpdate:modelValue"]||!1;return cs(l)?n=>yl(l,n):l};function Sy(e){e.target.composing=!0}function _r(e){const l=e.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const qn={created(e,{modifiers:{lazy:l,trim:n,number:t}},a){e._assign=Ar(a);const r=t||a.props&&a.props.type==="number";nn(e,l?"change":"input",c=>{if(c.target.composing)return;let p=e.value;n&&(p=p.trim()),r&&(p=Eo(p)),e._assign(p)}),n&&nn(e,"change",()=>{e.value=e.value.trim()}),l||(nn(e,"compositionstart",Sy),nn(e,"compositionend",_r),nn(e,"change",_r))},mounted(e,{value:l}){e.value=l??""},beforeUpdate(e,{value:l,modifiers:{lazy:n,trim:t,number:a}},r){if(e._assign=Ar(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||t&&e.value.trim()===l||(a||e.type==="number")&&Eo(e.value)===l))return;const c=l??"";e.value!==c&&(e.value=c)}},Py={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gr=(e,l)=>n=>{if(!("key"in n))return;const t=el(n.key);if(l.some(a=>a===t||Py[a]===t))return e(n)},Vp={beforeMount(e,{value:l},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&l?n.beforeEnter(e):gn(e,l)},mounted(e,{value:l},{transition:n}){n&&l&&n.enter(e)},updated(e,{value:l,oldValue:n},{transition:t}){!l!=!n&&(t?l?(t.beforeEnter(e),gn(e,!0),t.enter(e)):t.leave(e,()=>{gn(e,!1)}):gn(e,l))},beforeUnmount(e,{value:l}){gn(e,l)}};function gn(e,l){e.style.display=l?e._vod:"none"}const Vy=zs({patchProp:wy},hy);let Dr;function Oy(){return Dr||(Dr=Uu(Vy))}const u6=(...e)=>{const l=Oy().createApp(...e);Ly(l),Ty(l);const{mount:n}=l;return l.mount=t=>{const a=Ny(t);if(!a)return;const r=l._component;!is(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const c=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),c},l};function Ly(e){Object.defineProperty(e.config,"isNativeTag",{value:l=>Hi(l)||zi(l),writable:!1})}function Ty(e){{const l=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return l},set(){R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,t='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return R(t),n},set(){R(t)}})}}function Ny(e){if(Ts(e)){const l=document.querySelector(e);return l||R(`Failed to mount app: mount target selector "${e}" returned null.`),l}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function My(){dy()}My();const Op=Symbol("v-click-clicks"),Lp=Symbol("v-click-clicks-elements"),Ry=Symbol("v-click-clicks-order-map"),Tp=Symbol("v-click-clicks-disabled"),Np=Symbol("slidev-slide-scale"),$=Symbol("slidev-slidev-context"),Iy=Symbol("slidev-route"),jy=Symbol("slidev-slide-context"),Hy="slidev-vclick-target",y6="slidev-vclick-hidden",d6="slidev-vclick-fade",f6="slidev-vclick-hidden-explicitly",h6="slidev-vclick-current",m6="slidev-vclick-prior";function zy(e,l){if(!e)return!1;const n=e.indexOf(l);return n>=0?(e.splice(n,1),!0):!1}function Wy(...e){let l,n,t;e.length===1?(l=0,t=1,[n]=e):[l,n,t=1]=e;const a=[];let r=l;for(;r<n;)a.push(r),r+=t||1;return a}function Uy(e){return e!=null}function qy(e,l){return Object.fromEntries(Object.entries(e).map(([n,t])=>l(n,t)).filter(Uy))}const Sn={theme:"default",title:"Vue.js",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"},Ls=Sn,ml=Ls.aspectRatio??16/9,vl=Ls.canvasWidth??980,Ea=Math.ceil(vl/ml),Fa=L(()=>qy(Ls.themeConfig||{},(e,l)=>[`--slidev-theme-${e}`,l]));function Ee(e,l,n){Object.defineProperty(e,l,{value:n,writable:!0,enumerable:!1})}const Yl=se({page:0,clicks:0});let Ky=[],Jy=[];Ee(Yl,"$syncUp",!0);Ee(Yl,"$syncDown",!0);Ee(Yl,"$paused",!1);Ee(Yl,"$onSet",e=>Ky.push(e));Ee(Yl,"$onPatch",e=>Jy.push(e));Ee(Yl,"$patch",async()=>!1);function Mp(e,l,n=!1){const t=[];let a=!1,r=!1,c,p;const i=se(l);function u(m){t.push(m)}function d(m,v){clearTimeout(c),a=!0,i[m]=v,c=setTimeout(()=>a=!1,0)}function y(m){a||(clearTimeout(p),r=!0,Object.entries(m).forEach(([v,_])=>{i[v]=_}),p=setTimeout(()=>r=!1,0))}function f(m){let v;n?n&&window.addEventListener("storage",D=>{D&&D.key===m&&D.newValue&&y(JSON.parse(D.newValue))}):(v=new BroadcastChannel(m),v.addEventListener("message",D=>y(D.data)));function _(){!n&&v&&!r?v.postMessage(hs(i)):n&&!r&&window.localStorage.setItem(m,JSON.stringify(i)),a||t.forEach(D=>D(i))}if(Is(i,_,{deep:!0}),n){const D=window.localStorage.getItem(m);D&&y(JSON.parse(D))}}return{init:f,onPatch:u,patch:d,state:i}}const{init:v6,onPatch:B6,patch:A6,state:dt}=Mp(Yl,{page:1,clicks:0}),Zl=se({});let Yy=[],Zy=[];Ee(Zl,"$syncUp",!0);Ee(Zl,"$syncDown",!0);Ee(Zl,"$paused",!1);Ee(Zl,"$onSet",e=>Yy.push(e));Ee(Zl,"$onPatch",e=>Zy.push(e));Ee(Zl,"$patch",async()=>!1);const{init:_6,onPatch:Gy,patch:Rp,state:Po}=Mp(Zl,{},!1),Qy="modulepreload",Xy=function(e){return"/vue-3-practices/"+e},Cr={},Ul=function(l,n,t){if(!n||n.length===0)return l();const a=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Xy(r),r in Cr)return;Cr[r]=!0;const c=r.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!t)for(let d=a.length-1;d>=0;d--){const y=a[d];if(y.href===r&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Qy,c||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),c)return new Promise((d,y)=>{u.addEventListener("load",d),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>l())};var Er;const Ve=typeof window<"u",sd=e=>typeof e<"u",ed=Object.prototype.toString,Kn=e=>typeof e=="function",g6=e=>typeof e=="number",Ip=e=>typeof e=="string",D6=e=>ed.call(e)==="[object Object]",It=()=>+Date.now(),Ln=()=>{};Ve&&((Er=window==null?void 0:window.navigator)!=null&&Er.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pe(e){return typeof e=="function"?e():C(e)}function ld(e,l){function n(...t){return new Promise((a,r)=>{Promise.resolve(e(()=>l.apply(this,t),{fn:l,thisArg:this,args:t})).then(a).catch(r)})}return n}const jp=e=>e();function nd(e=jp){const l=ns(!0);function n(){l.value=!1}function t(){l.value=!0}return{isActive:l,pause:n,resume:t,eventFilter:(...r)=>{l.value&&e(...r)}}}function od(e){return e}function td(e,l){var n;if(typeof e=="number")return e+l;const t=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",a=e.slice(t.length),r=parseFloat(t)+l;return Number.isNaN(r)?e:r+a}function ad(e,l){let n,t,a;const r=ns(!0),c=()=>{r.value=!0,a()};Is(e,c,{flush:"sync"});const p=Kn(l)?l:l.get,i=Kn(l)?void 0:l.set,u=qc((d,y)=>(t=d,a=y,{get(){return r.value&&(n=p(),r.value=!1),t(),n},set(f){i==null||i(f)}}));return Object.isExtensible(u)&&(u.trigger=c),u}function We(e){return Qi()?(Xi(e),!0):!1}function rd(e){if(!Fs(e))return se(e);const l=new Proxy({},{get(n,t,a){return C(Reflect.get(e.value,t,a))},set(n,t,a){return Fs(e.value[t])&&!Fs(a)?e.value[t].value=a:e.value[t]=a,!0},deleteProperty(n,t){return Reflect.deleteProperty(e.value,t)},has(n,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return se(l)}function Hp(e){return typeof e=="function"?L(e):ns(e)}var cd=Object.defineProperty,pd=Object.defineProperties,id=Object.getOwnPropertyDescriptors,Fr=Object.getOwnPropertySymbols,ud=Object.prototype.hasOwnProperty,yd=Object.prototype.propertyIsEnumerable,kr=(e,l,n)=>l in e?cd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,dd=(e,l)=>{for(var n in l||(l={}))ud.call(l,n)&&kr(e,n,l[n]);if(Fr)for(var n of Fr(l))yd.call(l,n)&&kr(e,n,l[n]);return e},fd=(e,l)=>pd(e,id(l));function hd(e){if(!Fs(e))return $8(e);const l=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)l[n]=qc(()=>({get(){return e.value[n]},set(t){if(Array.isArray(e.value)){const a=[...e.value];a[n]=t,e.value=a}else{const a=fd(dd({},e.value),{[n]:t});Object.setPrototypeOf(a,e.value),e.value=a}}}));return l}function ka(e,l=!0){Cl()?Zo(e):l?e():Se(e)}function C6(e){Cl()&&Go(e)}function md(e,l=1e3,n={}){const{immediate:t=!0,immediateCallback:a=!1}=n;let r=null;const c=ns(!1);function p(){r&&(clearInterval(r),r=null)}function i(){c.value=!1,p()}function u(){C(l)<=0||(c.value=!0,a&&e(),p(),r=setInterval(e,pe(l)))}if(t&&Ve&&u(),Fs(l)||Kn(l)){const d=Is(l,()=>{c.value&&Ve&&u()});We(d)}return We(i),{isActive:c,pause:i,resume:u}}function vd(e,l,n={}){const{immediate:t=!0}=n,a=ns(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function p(){a.value=!1,c()}function i(...u){c(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,e(...u)},pe(l))}return t&&(a.value=!0,Ve&&i()),We(p),{isPending:a,start:i,stop:p}}function zp(e=!1,l={}){const{truthyValue:n=!0,falsyValue:t=!1}=l,a=Fs(e),r=ns(e);function c(p){if(arguments.length)return r.value=p,r.value;{const i=pe(n);return r.value=r.value===i?pe(t):i,r.value}}return a?c:[r,c]}var xr=Object.getOwnPropertySymbols,Bd=Object.prototype.hasOwnProperty,Ad=Object.prototype.propertyIsEnumerable,_d=(e,l)=>{var n={};for(var t in e)Bd.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&xr)for(var t of xr(e))l.indexOf(t)<0&&Ad.call(e,t)&&(n[t]=e[t]);return n};function gd(e,l,n={}){const t=n,{eventFilter:a=jp}=t,r=_d(t,["eventFilter"]);return Is(e,ld(a,l),r)}var Dd=Object.defineProperty,Cd=Object.defineProperties,Ed=Object.getOwnPropertyDescriptors,Vo=Object.getOwnPropertySymbols,Wp=Object.prototype.hasOwnProperty,Up=Object.prototype.propertyIsEnumerable,br=(e,l,n)=>l in e?Dd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,Fd=(e,l)=>{for(var n in l||(l={}))Wp.call(l,n)&&br(e,n,l[n]);if(Vo)for(var n of Vo(l))Up.call(l,n)&&br(e,n,l[n]);return e},kd=(e,l)=>Cd(e,Ed(l)),xd=(e,l)=>{var n={};for(var t in e)Wp.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&Vo)for(var t of Vo(e))l.indexOf(t)<0&&Up.call(e,t)&&(n[t]=e[t]);return n};function bd(e,l,n={}){const t=n,{eventFilter:a}=t,r=xd(t,["eventFilter"]),{eventFilter:c,pause:p,resume:i,isActive:u}=nd(a);return{stop:gd(e,l,kd(Fd({},r),{eventFilter:c})),pause:p,resume:i,isActive:u}}function Re(e){var l;const n=pe(e);return(l=n==null?void 0:n.$el)!=null?l:n}const oe=Ve?window:void 0,qp=Ve?window.document:void 0,wd=Ve?window.navigator:void 0;function bs(...e){let l,n,t,a;if(Ip(e[0])||Array.isArray(e[0])?([n,t,a]=e,l=oe):[l,n,t,a]=e,!l)return Ln;Array.isArray(n)||(n=[n]),Array.isArray(t)||(t=[t]);const r=[],c=()=>{r.forEach(d=>d()),r.length=0},p=(d,y,f)=>(d.addEventListener(y,f,a),()=>d.removeEventListener(y,f,a)),i=Is(()=>Re(l),d=>{c(),d&&r.push(...n.flatMap(y=>t.map(f=>p(d,y,f))))},{immediate:!0,flush:"post"}),u=()=>{i(),c()};return We(u),u}function $d(e,l,n={}){const{window:t=oe,ignore:a=[],capture:r=!0,detectIframe:c=!1}=n;if(!t)return;let p=!0,i;const u=m=>a.some(v=>{if(typeof v=="string")return Array.from(t.document.querySelectorAll(v)).some(_=>_===m.target||m.composedPath().includes(_));{const _=Re(v);return _&&(m.target===_||m.composedPath().includes(_))}}),d=m=>{t.clearTimeout(i);const v=Re(e);if(!(!v||v===m.target||m.composedPath().includes(v))){if(m.detail===0&&(p=!u(m)),!p){p=!0;return}l(m)}},y=[bs(t,"click",d,{passive:!0,capture:r}),bs(t,"pointerdown",m=>{const v=Re(e);v&&(p=!m.composedPath().includes(v)&&!u(m))},{passive:!0}),bs(t,"pointerup",m=>{if(m.button===0){const v=m.composedPath();m.composedPath=()=>v,i=t.setTimeout(()=>d(m),50)}},{passive:!0}),c&&bs(t,"blur",m=>{var v;const _=Re(e);((v=t.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(_!=null&&_.contains(t.document.activeElement))&&l(m)})].filter(Boolean);return()=>y.forEach(m=>m())}const Sd=e=>typeof e=="function"?e:typeof e=="string"?l=>l.key===e:Array.isArray(e)?l=>e.includes(l.key):()=>!0;function Pd(...e){let l,n,t={};e.length===3?(l=e[0],n=e[1],t=e[2]):e.length===2?typeof e[1]=="object"?(l=!0,n=e[0],t=e[1]):(l=e[0],n=e[1]):(l=!0,n=e[0]);const{target:a=oe,eventName:r="keydown",passive:c=!1}=t,p=Sd(l);return bs(a,r,u=>{p(u)&&n(u)},c)}function Vd(e={}){var l;const{window:n=oe}=e,t=(l=e.document)!=null?l:n==null?void 0:n.document,a=ad(()=>null,()=>t==null?void 0:t.activeElement);return n&&(bs(n,"blur",r=>{r.relatedTarget===null&&a.trigger()},!0),bs(n,"focus",a.trigger,!0)),a}function no(e,l=!1){const n=ns(),t=()=>n.value=Boolean(e());return t(),ka(t,l),n}function on(e,l={}){const{window:n=oe}=l,t=no(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const r=ns(!1),c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",p):a.removeListener(p))},p=()=>{t.value&&(c(),a=n.matchMedia(Hp(e).value),r.value=a.matches,"addEventListener"in a?a.addEventListener("change",p):a.addListener(p))};return mn(p),We(()=>c()),r}const Od={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Ld=Object.defineProperty,wr=Object.getOwnPropertySymbols,Td=Object.prototype.hasOwnProperty,Nd=Object.prototype.propertyIsEnumerable,$r=(e,l,n)=>l in e?Ld(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,Md=(e,l)=>{for(var n in l||(l={}))Td.call(l,n)&&$r(e,n,l[n]);if(wr)for(var n of wr(l))Nd.call(l,n)&&$r(e,n,l[n]);return e};function Rd(e,l={}){function n(p,i){let u=e[p];return i!=null&&(u=td(u,i)),typeof u=="number"&&(u=`${u}px`),u}const{window:t=oe}=l;function a(p){return t?t.matchMedia(p).matches:!1}const r=p=>on(`(min-width: ${n(p)})`,l),c=Object.keys(e).reduce((p,i)=>(Object.defineProperty(p,i,{get:()=>r(i),enumerable:!0,configurable:!0}),p),{});return Md({greater(p){return on(`(min-width: ${n(p,.1)})`,l)},greaterOrEqual:r,smaller(p){return on(`(max-width: ${n(p,-.1)})`,l)},smallerOrEqual(p){return on(`(max-width: ${n(p)})`,l)},between(p,i){return on(`(min-width: ${n(p)}) and (max-width: ${n(i,-.1)})`,l)},isGreater(p){return a(`(min-width: ${n(p,.1)})`)},isGreaterOrEqual(p){return a(`(min-width: ${n(p)})`)},isSmaller(p){return a(`(max-width: ${n(p,-.1)})`)},isSmallerOrEqual(p){return a(`(max-width: ${n(p)})`)},isInBetween(p,i){return a(`(min-width: ${n(p)}) and (max-width: ${n(i,-.1)})`)}},c)}function Id(e={}){const{navigator:l=wd,read:n=!1,source:t,copiedDuring:a=1500,legacy:r=!1}=e,c=["copy","cut"],p=no(()=>l&&"clipboard"in l),i=L(()=>p.value||r),u=ns(""),d=ns(!1),y=vd(()=>d.value=!1,a);function f(){p.value?l.clipboard.readText().then(D=>{u.value=D}):u.value=_()}if(i.value&&n)for(const D of c)bs(D,f);async function m(D=pe(t)){i.value&&D!=null&&(p.value?await l.clipboard.writeText(D):v(D),u.value=D,d.value=!0,y.start())}function v(D){const P=document.createElement("textarea");P.value=D??"",P.style.position="absolute",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),P.remove()}function _(){var D,P,k;return(k=(P=(D=document==null?void 0:document.getSelection)==null?void 0:D.call(document))==null?void 0:P.toString())!=null?k:""}return{isSupported:i,text:u,copied:d,copy:m}}function jd(e){return JSON.parse(JSON.stringify(e))}const jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ht="__vueuse_ssr_handlers__";jt[Ht]=jt[Ht]||{};const Hd=jt[Ht];function zd(e,l){return Hd[e]||l}function Wd(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ud=Object.defineProperty,Sr=Object.getOwnPropertySymbols,qd=Object.prototype.hasOwnProperty,Kd=Object.prototype.propertyIsEnumerable,Pr=(e,l,n)=>l in e?Ud(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,Vr=(e,l)=>{for(var n in l||(l={}))qd.call(l,n)&&Pr(e,n,l[n]);if(Sr)for(var n of Sr(l))Kd.call(l,n)&&Pr(e,n,l[n]);return e};const Jd={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Oe(e,l,n,t={}){var a;const{flush:r="pre",deep:c=!0,listenToStorageChanges:p=!0,writeDefaults:i=!0,mergeDefaults:u=!1,shallow:d,window:y=oe,eventFilter:f,onError:m=U=>{console.error(U)}}=t,v=(d?ze:ns)(l);if(!n)try{n=zd("getDefaultStorage",()=>{var U;return(U=oe)==null?void 0:U.localStorage})()}catch(U){m(U)}if(!n)return v;const _=pe(l),D=Wd(_),P=(a=t.serializer)!=null?a:Jd[D],{pause:k,resume:w}=bd(v,()=>N(v.value),{flush:r,deep:c,eventFilter:f});return y&&p&&bs(y,"storage",J),J(),v;function N(U){try{if(U==null)n.removeItem(e);else{const ts=P.write(U),ys=n.getItem(e);ys!==ts&&(n.setItem(e,ts),y&&(y==null||y.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:ys,newValue:ts,storageArea:n}))))}}catch(ts){m(ts)}}function Q(U){const ts=U?U.newValue:n.getItem(e);if(ts==null)return i&&_!==null&&n.setItem(e,P.write(_)),_;if(!U&&u){const ys=P.read(ts);return Kn(u)?u(ys,_):D==="object"&&!Array.isArray(ys)?Vr(Vr({},_),ys):ys}else return typeof ts!="string"?ts:P.read(ts)}function J(U){if(!(U&&U.storageArea!==n)){if(U&&U.key==null){v.value=_;return}if(!(U&&U.key!==e)){k();try{v.value=Q(U)}catch(ts){m(ts)}finally{U?Se(w):w()}}}}}function Yd(e){return on("(prefers-color-scheme: dark)",e)}var Zd=Object.defineProperty,Gd=Object.defineProperties,Qd=Object.getOwnPropertyDescriptors,Or=Object.getOwnPropertySymbols,Xd=Object.prototype.hasOwnProperty,s5=Object.prototype.propertyIsEnumerable,Lr=(e,l,n)=>l in e?Zd(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,e5=(e,l)=>{for(var n in l||(l={}))Xd.call(l,n)&&Lr(e,n,l[n]);if(Or)for(var n of Or(l))s5.call(l,n)&&Lr(e,n,l[n]);return e},l5=(e,l)=>Gd(e,Qd(l));function E6(e,l={}){var n,t,a;const r=(n=l.draggingElement)!=null?n:oe,c=(t=l.handle)!=null?t:e,p=ns((a=pe(l.initialValue))!=null?a:{x:0,y:0}),i=ns(),u=v=>l.pointerTypes?l.pointerTypes.includes(v.pointerType):!0,d=v=>{pe(l.preventDefault)&&v.preventDefault(),pe(l.stopPropagation)&&v.stopPropagation()},y=v=>{var _;if(!u(v)||pe(l.exact)&&v.target!==pe(e))return;const D=pe(e).getBoundingClientRect(),P={x:v.clientX-D.left,y:v.clientY-D.top};((_=l.onStart)==null?void 0:_.call(l,P,v))!==!1&&(i.value=P,d(v))},f=v=>{var _;u(v)&&i.value&&(p.value={x:v.clientX-i.value.x,y:v.clientY-i.value.y},(_=l.onMove)==null||_.call(l,p.value,v),d(v))},m=v=>{var _;u(v)&&i.value&&(i.value=void 0,(_=l.onEnd)==null||_.call(l,p.value,v),d(v))};return Ve&&(bs(c,"pointerdown",y,!0),bs(r,"pointermove",f,!0),bs(r,"pointerup",m,!0)),l5(e5({},hd(p)),{position:p,isDragging:L(()=>!!i.value),style:L(()=>`left:${p.value.x}px;top:${p.value.y}px;`)})}var Tr=Object.getOwnPropertySymbols,n5=Object.prototype.hasOwnProperty,o5=Object.prototype.propertyIsEnumerable,t5=(e,l)=>{var n={};for(var t in e)n5.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&Tr)for(var t of Tr(e))l.indexOf(t)<0&&o5.call(e,t)&&(n[t]=e[t]);return n};function a5(e,l,n={}){const t=n,{window:a=oe}=t,r=t5(t,["window"]);let c;const p=no(()=>a&&"ResizeObserver"in a),i=()=>{c&&(c.disconnect(),c=void 0)},u=Is(()=>Re(e),y=>{i(),p.value&&a&&y&&(c=new ResizeObserver(l),c.observe(y,r))},{immediate:!0,flush:"post"}),d=()=>{i(),u()};return We(d),{isSupported:p,stop:d}}function r5(e,l={}){const{immediate:n=!0,window:t=oe}=l,a=ns(!1);let r=0,c=null;function p(d){if(!a.value||!t)return;const y=d-r;e({delta:y,timestamp:d}),r=d,c=t.requestAnimationFrame(p)}function i(){!a.value&&t&&(a.value=!0,c=t.requestAnimationFrame(p))}function u(){a.value=!1,c!=null&&t&&(t.cancelAnimationFrame(c),c=null)}return n&&i(),We(u),{isActive:a,pause:u,resume:i}}function c5(e,l={width:0,height:0},n={}){const{box:t="content-box"}=n,a=ns(l.width),r=ns(l.height);return a5(e,([c])=>{const p=t==="border-box"?c.borderBoxSize:t==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;p?(a.value=p.reduce((i,{inlineSize:u})=>i+u,0),r.value=p.reduce((i,{blockSize:u})=>i+u,0)):(a.value=c.contentRect.width,r.value=c.contentRect.height)},n),Is(()=>Re(e),c=>{a.value=c?l.width:0,r.value=c?l.height:0}),{width:a,height:r}}const Nr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function p5(e,l={}){const{document:n=qp,autoExit:t=!1}=l,a=e||(n==null?void 0:n.querySelector("html")),r=ns(!1);let c=Nr[0];const p=no(()=>{if(n){for(const _ of Nr)if(_[1]in n)return c=_,!0}else return!1;return!1}),[i,u,d,,y]=c;async function f(){p.value&&(n!=null&&n[d]&&await n[u](),r.value=!1)}async function m(){if(!p.value)return;await f();const _=Re(a);_&&(await _[i](),r.value=!0)}async function v(){r.value?await f():await m()}return n&&bs(n,y,()=>{r.value=!!(n!=null&&n[d])},!1),t&&We(f),{isSupported:p,isFullscreen:r,enter:m,exit:f,toggle:v}}function F6(e,l,n={}){const{root:t,rootMargin:a="0px",threshold:r=.1,window:c=oe}=n,p=no(()=>c&&"IntersectionObserver"in c);let i=Ln;const u=p.value?Is(()=>({el:Re(e),root:Re(t)}),({el:y,root:f})=>{if(i(),!y)return;const m=new IntersectionObserver(l,{root:f,rootMargin:a,threshold:r});m.observe(y),i=()=>{m.disconnect(),i=Ln}},{immediate:!0,flush:"post"}):Ln,d=()=>{i(),u()};return We(d),{isSupported:p,stop:d}}const i5={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function u5(e={}){const{reactive:l=!1,target:n=oe,aliasMap:t=i5,passive:a=!0,onEventFired:r=Ln}=e,c=se(new Set),p={toJSON(){return{}},current:c},i=l?se(p):p,u=new Set,d=new Set;function y(_,D){_ in i&&(l?i[_]=D:i[_].value=D)}function f(){c.clear();for(const _ of d)y(_,!1)}function m(_,D){var P,k;const w=(P=_.key)==null?void 0:P.toLowerCase(),Q=[(k=_.code)==null?void 0:k.toLowerCase(),w].filter(Boolean);w&&(D?c.add(w):c.delete(w));for(const J of Q)d.add(J),y(J,D);w==="meta"&&!D?(u.forEach(J=>{c.delete(J),y(J,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&D&&[...c,...Q].forEach(J=>u.add(J))}bs(n,"keydown",_=>(m(_,!0),r(_)),{passive:a}),bs(n,"keyup",_=>(m(_,!1),r(_)),{passive:a}),bs("blur",f,{passive:!0}),bs("focus",f,{passive:!0});const v=new Proxy(i,{get(_,D,P){if(typeof D!="string")return Reflect.get(_,D,P);if(D=D.toLowerCase(),D in t&&(D=t[D]),!(D in i))if(/[+_-]/.test(D)){const w=D.split(/[+_-]/g).map(N=>N.trim());i[D]=L(()=>w.every(N=>C(v[N])))}else i[D]=ns(!1);const k=Reflect.get(_,D,P);return l?C(k):k}});return v}function k6(e={}){const{type:l="page",touch:n=!0,resetOnTouchEnds:t=!1,initialValue:a={x:0,y:0},window:r=oe,eventFilter:c}=e,p=ns(a.x),i=ns(a.y),u=ns(null),d=_=>{l==="page"?(p.value=_.pageX,i.value=_.pageY):l==="client"?(p.value=_.clientX,i.value=_.clientY):l==="movement"&&(p.value=_.movementX,i.value=_.movementY),u.value="mouse"},y=()=>{p.value=a.x,i.value=a.y},f=_=>{if(_.touches.length>0){const D=_.touches[0];l==="page"?(p.value=D.pageX,i.value=D.pageY):l==="client"&&(p.value=D.clientX,i.value=D.clientY),u.value="touch"}},m=_=>c===void 0?d(_):c(()=>d(_),{}),v=_=>c===void 0?f(_):c(()=>f(_),{});return r&&(bs(r,"mousemove",m,{passive:!0}),bs(r,"dragover",m,{passive:!0}),n&&l!=="movement"&&(bs(r,"touchstart",v,{passive:!0}),bs(r,"touchmove",v,{passive:!0}),t&&bs(r,"touchend",y,{passive:!0}))),{x:p,y:i,sourceType:u}}var Qe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Qe||(Qe={}));function y5(e,l={}){const n=Hp(e),{threshold:t=50,onSwipe:a,onSwipeEnd:r,onSwipeStart:c}=l,p=se({x:0,y:0}),i=(J,U)=>{p.x=J,p.y=U},u=se({x:0,y:0}),d=(J,U)=>{u.x=J,u.y=U},y=L(()=>p.x-u.x),f=L(()=>p.y-u.y),{max:m,abs:v}=Math,_=L(()=>m(v(y.value),v(f.value))>=t),D=ns(!1),P=ns(!1),k=L(()=>_.value?v(y.value)>v(f.value)?y.value>0?Qe.LEFT:Qe.RIGHT:f.value>0?Qe.UP:Qe.DOWN:Qe.NONE),w=J=>{var U,ts,ys;const vs=J.buttons===0,Ds=J.buttons===1;return(ys=(ts=(U=l.pointerTypes)==null?void 0:U.includes(J.pointerType))!=null?ts:vs||Ds)!=null?ys:!0},N=[bs(e,"pointerdown",J=>{var U,ts;if(!w(J))return;P.value=!0,(ts=(U=n.value)==null?void 0:U.style)==null||ts.setProperty("touch-action","none");const ys=J.target;ys==null||ys.setPointerCapture(J.pointerId);const{clientX:vs,clientY:Ds}=J;i(vs,Ds),d(vs,Ds),c==null||c(J)}),bs(e,"pointermove",J=>{if(!w(J)||!P.value)return;const{clientX:U,clientY:ts}=J;d(U,ts),!D.value&&_.value&&(D.value=!0),D.value&&(a==null||a(J))}),bs(e,"pointerup",J=>{var U,ts;w(J)&&(D.value&&(r==null||r(J,k.value)),P.value=!1,D.value=!1,(ts=(U=n.value)==null?void 0:U.style)==null||ts.setProperty("touch-action","initial"))})],Q=()=>N.forEach(J=>J());return{isSwiping:$l(D),direction:$l(k),posStart:$l(p),posEnd:$l(u),distanceX:y,distanceY:f,stop:Q}}let d5=0;function x6(e,l={}){const n=ns(!1),{document:t=qp,immediate:a=!0,manual:r=!1,id:c=`vueuse_styletag_${++d5}`}=l,p=ns(e);let i=()=>{};const u=()=>{if(!t)return;const y=t.getElementById(c)||t.createElement("style");y.isConnected||(y.type="text/css",y.id=c,l.media&&(y.media=l.media),t.head.appendChild(y)),!n.value&&(i=Is(p,f=>{y.textContent=f},{immediate:!0}),n.value=!0)},d=()=>{!t||!n.value||(i(),t.head.removeChild(t.getElementById(c)),n.value=!1)};return a&&!r&&ka(u),r||We(d),{id:c,css:p,unload:d,load:u,isLoaded:$l(n)}}var f5=Object.defineProperty,Mr=Object.getOwnPropertySymbols,h5=Object.prototype.hasOwnProperty,m5=Object.prototype.propertyIsEnumerable,Rr=(e,l,n)=>l in e?f5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,v5=(e,l)=>{for(var n in l||(l={}))h5.call(l,n)&&Rr(e,n,l[n]);if(Mr)for(var n of Mr(l))m5.call(l,n)&&Rr(e,n,l[n]);return e};function b6(e={}){const{controls:l=!1,offset:n=0,immediate:t=!0,interval:a="requestAnimationFrame",callback:r}=e,c=ns(It()+n),p=()=>c.value=It()+n,i=r?()=>{p(),r(c.value)}:p,u=a==="requestAnimationFrame"?r5(i,{immediate:t}):md(i,a,{immediate:t});return l?v5({timestamp:c},u):c}var B5=Object.defineProperty,Ir=Object.getOwnPropertySymbols,A5=Object.prototype.hasOwnProperty,_5=Object.prototype.propertyIsEnumerable,jr=(e,l,n)=>l in e?B5(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,g5=(e,l)=>{for(var n in l||(l={}))A5.call(l,n)&&jr(e,n,l[n]);if(Ir)for(var n of Ir(l))_5.call(l,n)&&jr(e,n,l[n]);return e};const D5={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};g5({linear:od},D5);function Ie(e,l,n,t={}){var a,r,c;const{clone:p=!1,passive:i=!1,eventName:u,deep:d=!1,defaultValue:y}=t,f=Cl(),m=n||(f==null?void 0:f.emit)||((a=f==null?void 0:f.$emit)==null?void 0:a.bind(f))||((c=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let v=u;l||(l="modelValue"),v=u||v||`update:${l.toString()}`;const _=P=>p?Kn(p)?p(P):jd(P):P,D=()=>sd(e[l])?_(e[l]):y;if(i){const P=D(),k=ns(P);return Is(()=>e[l],w=>k.value=_(w)),Is(k,w=>{(w!==e[l]||d)&&m(v,w)},{deep:d}),k}else return L({get(){return D()},set(P){m(v,P)}})}function w6({window:e=oe}={}){if(!e)return ns(!1);const l=ns(e.document.hasFocus());return bs(e,"blur",()=>{l.value=!1}),bs(e,"focus",()=>{l.value=!0}),l}function C5(e={}){const{window:l=oe,initialWidth:n=1/0,initialHeight:t=1/0,listenOrientation:a=!0,includeScrollbar:r=!0}=e,c=ns(n),p=ns(t),i=()=>{l&&(r?(c.value=l.innerWidth,p.value=l.innerHeight):(c.value=l.document.documentElement.clientWidth,p.value=l.document.documentElement.clientHeight))};return i(),ka(i),bs("resize",i,{passive:!0}),a&&bs("orientationchange",i,{passive:!0}),{width:c,height:p}}function E5(){return Kp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Kp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const F5=typeof Proxy=="function",k5="devtools-plugin:setup",x5="plugin:settings:set";let Ql,zt;function b5(){var e;return Ql!==void 0||(typeof window<"u"&&window.performance?(Ql=!0,zt=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Ql=!0,zt=global.perf_hooks.performance):Ql=!1),Ql}function w5(){return b5()?zt.now():Date.now()}class $5{constructor(l,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=l,this.hook=n;const t={};if(l.settings)for(const c in l.settings){const p=l.settings[c];t[c]=p.defaultValue}const a=`__vue-devtools-plugin-settings__${l.id}`;let r=Object.assign({},t);try{const c=localStorage.getItem(a),p=JSON.parse(c);Object.assign(r,p)}catch{}this.fallbacks={getSettings(){return r},setSettings(c){try{localStorage.setItem(a,JSON.stringify(c))}catch{}r=c},now(){return w5()}},n&&n.on(x5,(c,p)=>{c===this.plugin.id&&this.fallbacks.setSettings(p)}),this.proxiedOn=new Proxy({},{get:(c,p)=>this.target?this.target.on[p]:(...i)=>{this.onQueue.push({method:p,args:i})}}),this.proxiedTarget=new Proxy({},{get:(c,p)=>this.target?this.target[p]:p==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(p)?(...i)=>(this.targetQueue.push({method:p,args:i,resolve:()=>{}}),this.fallbacks[p](...i)):(...i)=>new Promise(u=>{this.targetQueue.push({method:p,args:i,resolve:u})})})}async setRealTarget(l){this.target=l;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function S5(e,l){const n=e,t=Kp(),a=E5(),r=F5&&n.enableEarlyProxy;if(a&&(t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))a.emit(k5,e,l);else{const c=r?new $5(n,a):null;(t.__VUE_DEVTOOLS_PLUGINS__=t.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:l,proxy:c}),c&&l(c.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ze=typeof window<"u";function P5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const xs=Object.assign;function ft(e,l){const n={};for(const t in l){const a=l[t];n[t]=ge(a)?a.map(e):e(a)}return n}const Tn=()=>{},ge=Array.isArray;function Es(e){const l=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(l))}const V5=/\/$/,O5=e=>e.replace(V5,"");function ht(e,l,n="/"){let t,a={},r="",c="";const p=l.indexOf("#");let i=l.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(t=l.slice(0,i),r=l.slice(i+1,p>-1?p:l.length),a=e(r)),p>-1&&(t=t||l.slice(0,p),c=l.slice(p,l.length)),t=N5(t??l,n),{fullPath:t+(r&&"?")+r+c,path:t,query:a,hash:c}}function L5(e,l){const n=l.query?e(l.query):"";return l.path+(n&&"?")+n+(l.hash||"")}function Hr(e,l){return!l||!e.toLowerCase().startsWith(l.toLowerCase())?e:e.slice(l.length)||"/"}function zr(e,l,n){const t=l.matched.length-1,a=n.matched.length-1;return t>-1&&t===a&&gl(l.matched[t],n.matched[a])&&Jp(l.params,n.params)&&e(l.query)===e(n.query)&&l.hash===n.hash}function gl(e,l){return(e.aliasOf||e)===(l.aliasOf||l)}function Jp(e,l){if(Object.keys(e).length!==Object.keys(l).length)return!1;for(const n in e)if(!T5(e[n],l[n]))return!1;return!0}function T5(e,l){return ge(e)?Wr(e,l):ge(l)?Wr(l,e):e===l}function Wr(e,l){return ge(l)?e.length===l.length&&e.every((n,t)=>n===l[t]):e.length===1&&e[0]===l}function N5(e,l){if(e.startsWith("/"))return e;if(!l.startsWith("/"))return Es(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${l}". It should look like "/${l}".`),e;if(!e)return l;const n=l.split("/"),t=e.split("/");let a=n.length-1,r,c;for(r=0;r<t.length;r++)if(c=t[r],c!==".")if(c==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+t.slice(r-(r===t.length?1:0)).join("/")}var Jn;(function(e){e.pop="pop",e.push="push"})(Jn||(Jn={}));var Nn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Nn||(Nn={}));function M5(e){if(!e)if(Ze){const l=document.querySelector("base");e=l&&l.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),O5(e)}const R5=/^[^#]+#/;function I5(e,l){return e.replace(R5,"#")+l}function j5(e,l){const n=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:l.behavior,left:t.left-n.left-(l.left||0),top:t.top-n.top-(l.top||0)}}const nt=()=>({left:window.pageXOffset,top:window.pageYOffset});function H5(e){let l;if("el"in e){const n=e.el,t=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!t||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(t&&r){Es(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Es(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof n=="string"?t?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a){Es(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}l=j5(a,e)}else l=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function Ur(e,l){return(history.state?history.state.position-l:-1)+e}const Wt=new Map;function z5(e,l){Wt.set(e,l)}function W5(e){const l=Wt.get(e);return Wt.delete(e),l}let U5=()=>location.protocol+"//"+location.host;function Yp(e,l){const{pathname:n,search:t,hash:a}=l,r=e.indexOf("#");if(r>-1){let p=a.includes(e.slice(r))?e.slice(r).length:1,i=a.slice(p);return i[0]!=="/"&&(i="/"+i),Hr(i,"")}return Hr(n,e)+t+a}function q5(e,l,n,t){let a=[],r=[],c=null;const p=({state:f})=>{const m=Yp(e,location),v=n.value,_=l.value;let D=0;if(f){if(n.value=m,l.value=f,c&&c===v){c=null;return}D=_?f.position-_.position:0}else t(m);a.forEach(P=>{P(n.value,v,{delta:D,type:Jn.pop,direction:D?D>0?Nn.forward:Nn.back:Nn.unknown})})};function i(){c=n.value}function u(f){a.push(f);const m=()=>{const v=a.indexOf(f);v>-1&&a.splice(v,1)};return r.push(m),m}function d(){const{history:f}=window;f.state&&f.replaceState(xs({},f.state,{scroll:nt()}),"")}function y(){for(const f of r)f();r=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",d),{pauseListeners:i,listen:u,destroy:y}}function qr(e,l,n,t=!1,a=!1){return{back:e,current:l,forward:n,replaced:t,position:window.history.length,scroll:a?nt():null}}function K5(e){const{history:l,location:n}=window,t={value:Yp(e,n)},a={value:l.state};a.value||r(t.value,{back:null,current:t.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function r(i,u,d){const y=e.indexOf("#"),f=y>-1?(n.host&&document.querySelector("base")?e:e.slice(y))+i:U5()+e+i;try{l[d?"replaceState":"pushState"](u,"",f),a.value=u}catch(m){Es("Error with push/replace State",m),n[d?"replace":"assign"](f)}}function c(i,u){const d=xs({},l.state,qr(a.value.back,i,a.value.forward,!0),u,{position:a.value.position});r(i,d,!0),t.value=i}function p(i,u){const d=xs({},a.value,l.state,{forward:i,scroll:nt()});l.state||Es(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const y=xs({},qr(t.value,i,null),{position:d.position+1},u);r(i,y,!1),t.value=i}return{location:t,state:a,push:p,replace:c}}function J5(e){e=M5(e);const l=K5(e),n=q5(e,l.state,l.location,l.replace);function t(r,c=!0){c||n.pauseListeners(),history.go(r)}const a=xs({location:"",base:e,go:t,createHref:I5.bind(null,e)},l,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>l.state.value}),a}function Y5(e){return typeof e=="string"||e&&typeof e=="object"}function Zp(e){return typeof e=="string"||typeof e=="symbol"}const cl={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gp=Symbol("navigation failure");var Kr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Kr||(Kr={}));const Z5={[1]({location:e,currentLocation:l}){return`No match for
 ${JSON.stringify(e)}${l?`
while being at
`+JSON.stringify(l):""}`},[2]({from:e,to:l}){return`Redirected from "${e.fullPath}" to "${Q5(l)}" via a navigation guard.`},[4]({from:e,to:l}){return`Navigation aborted from "${e.fullPath}" to "${l.fullPath}" via a navigation guard.`},[8]({from:e,to:l}){return`Navigation cancelled from "${e.fullPath}" to "${l.fullPath}" with a new navigation.`},[16]({from:e,to:l}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function fn(e,l){return xs(new Error(Z5[e](l)),{type:e,[Gp]:!0},l)}function qe(e,l){return e instanceof Error&&Gp in e&&(l==null||!!(e.type&l))}const G5=["params","query","hash"];function Q5(e){if(typeof e=="string")return e;if("path"in e)return e.path;const l={};for(const n of G5)n in e&&(l[n]=e[n]);return JSON.stringify(l,null,2)}const Jr="[^/]+?",X5={sensitive:!1,strict:!1,start:!0,end:!0},sf=/[.+*?^${}()[\]/\\]/g;function ef(e,l){const n=xs({},X5,l),t=[];let a=n.start?"^":"";const r=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(a+="/");for(let y=0;y<u.length;y++){const f=u[y];let m=40+(n.sensitive?.25:0);if(f.type===0)y||(a+="/"),a+=f.value.replace(sf,"\\$&"),m+=40;else if(f.type===1){const{value:v,repeatable:_,optional:D,regexp:P}=f;r.push({name:v,repeatable:_,optional:D});const k=P||Jr;if(k!==Jr){m+=10;try{new RegExp(`(${k})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+N.message)}}let w=_?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;y||(w=D&&u.length<2?`(?:/${w})`:"/"+w),D&&(w+="?"),a+=w,m+=20,D&&(m+=-8),_&&(m+=-20),k===".*"&&(m+=-50)}d.push(m)}t.push(d)}if(n.strict&&n.end){const u=t.length-1;t[u][t[u].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const c=new RegExp(a,n.sensitive?"":"i");function p(u){const d=u.match(c),y={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",v=r[f-1];y[v.name]=m&&v.repeatable?m.split("/"):m}return y}function i(u){let d="",y=!1;for(const f of e){(!y||!d.endsWith("/"))&&(d+="/"),y=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:v,repeatable:_,optional:D}=m,P=v in u?u[v]:"";if(ge(P)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=ge(P)?P.join("/"):P;if(!k)if(D)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):y=!0);else throw new Error(`Missing required param "${v}"`);d+=k}}return d||"/"}return{re:c,score:t,keys:r,parse:p,stringify:i}}function lf(e,l){let n=0;for(;n<e.length&&n<l.length;){const t=l[n]-e[n];if(t)return t;n++}return e.length<l.length?e.length===1&&e[0]===40+40?-1:1:e.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function nf(e,l){let n=0;const t=e.score,a=l.score;for(;n<t.length&&n<a.length;){const r=lf(t[n],a[n]);if(r)return r;n++}if(Math.abs(a.length-t.length)===1){if(Yr(t))return 1;if(Yr(a))return-1}return a.length-t.length}function Yr(e){const l=e[e.length-1];return e.length>0&&l[l.length-1]<0}const of={type:0,value:""},tf=/[a-zA-Z0-9_]/;function af(e){if(!e)return[[]];if(e==="/")return[[of]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function l(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,t=n;const a=[];let r;function c(){r&&a.push(r),r=[]}let p=0,i,u="",d="";function y(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(i==="*"||i==="+")&&l(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):l("Invalid state to consume buffer"),u="")}function f(){u+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&n!==2){t=n,n=4;continue}switch(n){case 0:i==="/"?(u&&y(),c()):i===":"?(y(),n=1):f();break;case 4:f(),n=t;break;case 1:i==="("?n=2:tf.test(i)?f():(y(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+i:n=3:d+=i;break;case 3:y(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,d="";break;default:l("Unknown state");break}}return n===2&&l(`Unfinished custom RegExp for param "${u}"`),y(),c(),a}function rf(e,l,n){const t=ef(af(e.path),n);{const r=new Set;for(const c of t.keys)r.has(c.name)&&Es(`Found duplicated params with name "${c.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(c.name)}const a=xs(t,{record:e,parent:l,children:[],alias:[]});return l&&!a.record.aliasOf==!l.record.aliasOf&&l.children.push(a),a}function cf(e,l){const n=[],t=new Map;l=Qr({strict:!1,end:!0,sensitive:!1},l);function a(d){return t.get(d)}function r(d,y,f){const m=!f,v=pf(d);ff(v,y),v.aliasOf=f&&f.record;const _=Qr(l,d),D=[v];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const N of w)D.push(xs({},v,{components:f?f.record.components:v.components,path:N,aliasOf:f?f.record:v}))}let P,k;for(const w of D){const{path:N}=w;if(y&&N[0]!=="/"){const Q=y.record.path,J=Q[Q.length-1]==="/"?"":"/";w.path=y.record.path+(N&&J+N)}if(w.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(P=rf(w,y,_),y&&N[0]==="/"&&hf(P,y),f?(f.alias.push(P),df(f,P)):(k=k||P,k!==P&&k.alias.push(P),m&&d.name&&!Gr(P)&&c(d.name)),v.children){const Q=v.children;for(let J=0;J<Q.length;J++)r(Q[J],P,f&&f.children[J])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&i(P)}return k?()=>{c(k)}:Tn}function c(d){if(Zp(d)){const y=t.get(d);y&&(t.delete(d),n.splice(n.indexOf(y),1),y.children.forEach(c),y.alias.forEach(c))}else{const y=n.indexOf(d);y>-1&&(n.splice(y,1),d.record.name&&t.delete(d.record.name),d.children.forEach(c),d.alias.forEach(c))}}function p(){return n}function i(d){let y=0;for(;y<n.length&&nf(d,n[y])>=0&&(d.record.path!==n[y].record.path||!Qp(d,n[y]));)y++;n.splice(y,0,d),d.record.name&&!Gr(d)&&t.set(d.record.name,d)}function u(d,y){let f,m={},v,_;if("name"in d&&d.name){if(f=t.get(d.name),!f)throw fn(1,{location:d});{const k=Object.keys(d.params||{}).filter(w=>!f.keys.find(N=>N.name===w));k.length&&Es(`Discarded invalid param(s) "${k.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=f.record.name,m=xs(Zr(y.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),d.params&&Zr(d.params,f.keys.map(k=>k.name))),v=f.stringify(m)}else if("path"in d)v=d.path,v.startsWith("/")||Es(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(k=>k.re.test(v)),f&&(m=f.parse(v),_=f.record.name);else{if(f=y.name?t.get(y.name):n.find(k=>k.re.test(y.path)),!f)throw fn(1,{location:d,currentLocation:y});_=f.record.name,m=xs({},y.params,d.params),v=f.stringify(m)}const D=[];let P=f;for(;P;)D.unshift(P.record),P=P.parent;return{name:_,path:v,params:m,matched:D,meta:yf(D)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:c,getRoutes:p,getRecordMatcher:a}}function Zr(e,l){const n={};for(const t of l)t in e&&(n[t]=e[t]);return n}function pf(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:uf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function uf(e){const l={},n=e.props||!1;if("component"in e)l.default=n;else for(const t in e.components)l[t]=typeof n=="boolean"?n:n[t];return l}function Gr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yf(e){return e.reduce((l,n)=>xs(l,n.meta),{})}function Qr(e,l){const n={};for(const t in e)n[t]=t in l?l[t]:e[t];return n}function Ut(e,l){return e.name===l.name&&e.optional===l.optional&&e.repeatable===l.repeatable}function df(e,l){for(const n of e.keys)if(!n.optional&&!l.keys.find(Ut.bind(null,n)))return Es(`Alias "${l.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of l.keys)if(!n.optional&&!e.keys.find(Ut.bind(null,n)))return Es(`Alias "${l.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function ff(e,l){l&&l.record.name&&!e.name&&!e.path&&Es(`The route named "${String(l.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function hf(e,l){for(const n of l.keys)if(!e.keys.find(Ut.bind(null,n)))return Es(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${l.record.path}".`)}function Qp(e,l){return l.children.some(n=>n===e||Qp(e,n))}const Xp=/#/g,mf=/&/g,vf=/\//g,Bf=/=/g,Af=/\?/g,si=/\+/g,_f=/%5B/g,gf=/%5D/g,ei=/%5E/g,Df=/%60/g,li=/%7B/g,Cf=/%7C/g,ni=/%7D/g,Ef=/%20/g;function xa(e){return encodeURI(""+e).replace(Cf,"|").replace(_f,"[").replace(gf,"]")}function Ff(e){return xa(e).replace(li,"{").replace(ni,"}").replace(ei,"^")}function qt(e){return xa(e).replace(si,"%2B").replace(Ef,"+").replace(Xp,"%23").replace(mf,"%26").replace(Df,"`").replace(li,"{").replace(ni,"}").replace(ei,"^")}function kf(e){return qt(e).replace(Bf,"%3D")}function xf(e){return xa(e).replace(Xp,"%23").replace(Af,"%3F")}function bf(e){return e==null?"":xf(e).replace(vf,"%2F")}function Yn(e){try{return decodeURIComponent(""+e)}catch{Es(`Error decoding "${e}". Using original value`)}return""+e}function wf(e){const l={};if(e===""||e==="?")return l;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<t.length;++a){const r=t[a].replace(si," "),c=r.indexOf("="),p=Yn(c<0?r:r.slice(0,c)),i=c<0?null:Yn(r.slice(c+1));if(p in l){let u=l[p];ge(u)||(u=l[p]=[u]),u.push(i)}else l[p]=i}return l}function Xr(e){let l="";for(let n in e){const t=e[n];if(n=kf(n),t==null){t!==void 0&&(l+=(l.length?"&":"")+n);continue}(ge(t)?t.map(r=>r&&qt(r)):[t&&qt(t)]).forEach(r=>{r!==void 0&&(l+=(l.length?"&":"")+n,r!=null&&(l+="="+r))})}return l}function $f(e){const l={};for(const n in e){const t=e[n];t!==void 0&&(l[n]=ge(t)?t.map(a=>a==null?null:""+a):t==null?t:""+t)}return l}const Sf=Symbol("router view location matched"),sc=Symbol("router view depth"),ba=Symbol("router"),oi=Symbol("route location"),Kt=Symbol("router view location");function Dn(){let e=[];function l(t){return e.push(t),()=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:l,list:()=>e,reset:n}}function ul(e,l,n,t,a){const r=t&&(t.enterCallbacks[a]=t.enterCallbacks[a]||[]);return()=>new Promise((c,p)=>{const i=y=>{y===!1?p(fn(4,{from:n,to:l})):y instanceof Error?p(y):Y5(y)?p(fn(2,{from:l,to:y})):(r&&t.enterCallbacks[a]===r&&typeof y=="function"&&r.push(y),c())},u=e.call(t&&t.instances[a],l,n,Pf(i,l,n));let d=Promise.resolve(u);if(e.length<3&&(d=d.then(i)),e.length>2){const y=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(f=>i._called?f:(Es(y),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!i._called){Es(y),p(new Error("Invalid navigation guard"));return}}d.catch(y=>p(y))})}function Pf(e,l,n){let t=0;return function(){t++===1&&Es(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${l.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,t===1&&e.apply(null,arguments)}}function mt(e,l,n,t){const a=[];for(const r of e){!r.components&&!r.children.length&&Es(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const c in r.components){let p=r.components[c];{if(!p||typeof p!="object"&&typeof p!="function")throw Es(`Component "${c}" in record with path "${r.path}" is not a valid component. Received "${String(p)}".`),new Error("Invalid route component");if("then"in p){Es(`Component "${c}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const i=p;p=()=>i}else p.__asyncLoader&&!p.__warnedDefineAsync&&(p.__warnedDefineAsync=!0,Es(`Component "${c}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(l!=="beforeRouteEnter"&&!r.instances[c]))if(Vf(p)){const u=(p.__vccOpts||p)[l];u&&a.push(ul(u,n,t,r,c))}else{let i=p();"catch"in i||(Es(`Component "${c}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),i=Promise.resolve(i)),a.push(()=>i.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${r.path}"`));const d=P5(u)?u.default:u;r.components[c]=d;const f=(d.__vccOpts||d)[l];return f&&ul(f,n,t,r,c)()}))}}}return a}function Vf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ec(e){const l=b(ba),n=b(oi),t=L(()=>l.resolve(C(e.to))),a=L(()=>{const{matched:i}=t.value,{length:u}=i,d=i[u-1],y=n.matched;if(!d||!y.length)return-1;const f=y.findIndex(gl.bind(null,d));if(f>-1)return f;const m=lc(i[u-2]);return u>1&&lc(d)===m&&y[y.length-1].path!==m?y.findIndex(gl.bind(null,i[u-2])):f}),r=L(()=>a.value>-1&&Nf(n.params,t.value.params)),c=L(()=>a.value>-1&&a.value===n.matched.length-1&&Jp(n.params,t.value.params));function p(i={}){return Tf(i)?l[C(e.replace)?"replace":"push"](C(e.to)).catch(Tn):Promise.resolve()}if(Ze){const i=Cl();if(i){const u={route:t.value,isActive:r.value,isExactActive:c.value};i.__vrl_devtools=i.__vrl_devtools||[],i.__vrl_devtools.push(u),mn(()=>{u.route=t.value,u.isActive=r.value,u.isExactActive=c.value},{flush:"post"})}}return{route:t,href:L(()=>t.value.href),isActive:r,isExactActive:c,navigate:p}}const Of=Ms({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ec,setup(e,{slots:l}){const n=se(ec(e)),{options:t}=b(ba),a=L(()=>({[nc(e.activeClass,t.linkActiveClass,"router-link-active")]:n.isActive,[nc(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=l.default&&l.default(n);return e.custom?r:lt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},r)}}}),Lf=Of;function Tf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const l=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return e.preventDefault&&e.preventDefault(),!0}}function Nf(e,l){for(const n in l){const t=l[n],a=e[n];if(typeof t=="string"){if(t!==a)return!1}else if(!ge(a)||a.length!==t.length||t.some((r,c)=>r!==a[c]))return!1}return!0}function lc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const nc=(e,l,n)=>e??l??n,Mf=Ms({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:l,slots:n}){If();const t=b(Kt),a=L(()=>e.route||t.value),r=b(sc,0),c=L(()=>{let u=C(r);const{matched:d}=a.value;let y;for(;(y=d[u])&&!y.components;)u++;return u}),p=L(()=>a.value.matched[c.value]);Be(sc,L(()=>c.value+1)),Be(Sf,p),Be(Kt,a);const i=ns();return Is(()=>[i.value,p.value,e.name],([u,d,y],[f,m,v])=>{d&&(d.instances[y]=u,m&&m!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!gl(d,m)||!f)&&(d.enterCallbacks[y]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=a.value,d=e.name,y=p.value,f=y&&y.components[d];if(!f)return oc(n.default,{Component:f,route:u});const m=y.props[d],v=m?m===!0?u.params:typeof m=="function"?m(u):m:null,D=lt(f,xs({},v,l,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(y.instances[d]=null)},ref:i}));if(Ze&&D.ref){const P={depth:c.value,name:y.name,path:y.path,meta:y.meta};(ge(D.ref)?D.ref.map(w=>w.i):[D.ref.i]).forEach(w=>{w.__vrv_devtools=P})}return oc(n.default,{Component:D,route:u})||D}}});function oc(e,l){if(!e)return null;const n=e(l);return n.length===1?n[0]:n}const Rf=Mf;function If(){const e=Cl(),l=e.parent&&e.parent.type.name;if(l&&(l==="KeepAlive"||l.includes("Transition"))){const n=l==="KeepAlive"?"keep-alive":"transition";Es(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${n}>
    <component :is="Component" />
  </${n}>
</router-view>`)}}function Cn(e,l){const n=xs({},e,{matched:e.matched.map(t=>Yf(t,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:l,value:n}}}function uo(e){return{_custom:{display:e}}}let jf=0;function Hf(e,l,n){if(l.__hasDevtools)return;l.__hasDevtools=!0;const t=jf++;S5({id:"org.vuejs.router"+(t?"."+t:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((d,y)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Cn(l.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:d,componentInstance:y})=>{if(y.__vrv_devtools){const f=y.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:ti})}ge(y.__vrl_devtools)&&(y.__devtoolsApi=a,y.__vrl_devtools.forEach(f=>{let m=ci,v="";f.isExactActive?(m=ri,v="This is exactly active"):f.isActive&&(m=ai,v="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:v,backgroundColor:m})}))}),Is(l.currentRoute,()=>{i(),a.notifyComponentUpdate(),a.sendInspectorTree(p),a.sendInspectorState(p)});const r="router:navigations:"+t;a.addTimelineLayer({id:r,label:`Router${t?" "+t:""} Navigations`,color:4237508}),l.onError((d,y)=>{a.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:y.fullPath,logType:"error",time:a.now(),data:{error:d},groupId:y.meta.__navigationId}})});let c=0;l.beforeEach((d,y)=>{const f={guard:uo("beforeEach"),from:Cn(y,"Current Location during this navigation"),to:Cn(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:c++}),a.addTimelineEvent({layerId:r,event:{time:a.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),l.afterEach((d,y,f)=>{const m={guard:uo("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=uo("❌")):m.status=uo("✅"),m.from=Cn(y,"Current Location during this navigation"),m.to=Cn(d,"Target location"),a.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:a.now(),data:m,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const p="router-inspector:"+t;a.addInspector({id:p,label:"Routes"+(t?" "+t:""),icon:"book",treeFilterPlaceholder:"Search routes"});function i(){if(!u)return;const d=u;let y=n.getRoutes().filter(f=>!f.parent);y.forEach(ui),d.filter&&(y=y.filter(f=>Jt(f,d.filter.toLowerCase()))),y.forEach(f=>ii(f,l.currentRoute.value)),d.rootNodes=y.map(pi)}let u;a.on.getInspectorTree(d=>{u=d,d.app===e&&d.inspectorId===p&&i()}),a.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===p){const f=n.getRoutes().find(m=>m.record.__vd_id===d.nodeId);f&&(d.state={options:Wf(f)})}}),a.sendInspectorTree(p),a.sendInspectorState(p)})}function zf(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function Wf(e){const{record:l}=e,n=[{editable:!1,key:"path",value:l.path}];return l.name!=null&&n.push({editable:!1,key:"name",value:l.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(t=>`${t.name}${zf(t)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),l.redirect!=null&&n.push({editable:!1,key:"redirect",value:l.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(t=>t.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(t=>t.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const ti=15485081,ai=2450411,ri=8702998,Uf=2282478,ci=16486972,qf=6710886;function pi(e){const l=[],{record:n}=e;n.name!=null&&l.push({label:String(n.name),textColor:0,backgroundColor:Uf}),n.aliasOf&&l.push({label:"alias",textColor:0,backgroundColor:ci}),e.__vd_match&&l.push({label:"matches",textColor:0,backgroundColor:ti}),e.__vd_exactActive&&l.push({label:"exact",textColor:0,backgroundColor:ri}),e.__vd_active&&l.push({label:"active",textColor:0,backgroundColor:ai}),n.redirect&&l.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:qf});let t=n.__vd_id;return t==null&&(t=String(Kf++),n.__vd_id=t),{id:t,label:n.path,tags:l,children:e.children.map(pi)}}let Kf=0;const Jf=/^\/(.*)\/([a-z]*)$/;function ii(e,l){const n=l.matched.length&&gl(l.matched[l.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=l.matched.some(t=>gl(t,e.record))),e.children.forEach(t=>ii(t,l))}function ui(e){e.__vd_match=!1,e.children.forEach(ui)}function Jt(e,l){const n=String(e.re).match(Jf);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(l))return e.children.forEach(c=>Jt(c,l)),e.record.path!=="/"||l==="/"?(e.__vd_match=e.re.test(l),!0):!1;const a=e.record.path.toLowerCase(),r=Yn(a);return!l.startsWith("/")&&(r.includes(l)||a.includes(l))||r.startsWith(l)||a.startsWith(l)||e.record.name&&String(e.record.name).includes(l)?!0:e.children.some(c=>Jt(c,l))}function Yf(e,l){const n={};for(const t in e)l.includes(t)||(n[t]=e[t]);return n}function Zf(e){const l=cf(e.routes,e),n=e.parseQuery||wf,t=e.stringifyQuery||Xr,a=e.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Dn(),c=Dn(),p=Dn(),i=ze(cl);let u=cl;Ze&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ft.bind(null,x=>""+x),y=ft.bind(null,bf),f=ft.bind(null,Yn);function m(x,ss){let z,es;return Zp(x)?(z=l.getRecordMatcher(x),es=ss):es=x,l.addRoute(es,z)}function v(x){const ss=l.getRecordMatcher(x);ss?l.removeRoute(ss):Es(`Cannot remove non-existent route "${String(x)}"`)}function _(){return l.getRoutes().map(x=>x.record)}function D(x){return!!l.getRecordMatcher(x)}function P(x,ss){if(ss=xs({},ss||i.value),typeof x=="string"){const ps=ht(n,x,ss.path),h=l.resolve({path:ps.path},ss),B=a.createHref(ps.fullPath);return B.startsWith("//")?Es(`Location "${x}" resolved to "${B}". A resolved location cannot start with multiple slashes.`):h.matched.length||Es(`No match found for location with path "${x}"`),xs(ps,h,{params:f(h.params),hash:Yn(ps.hash),redirectedFrom:void 0,href:B})}let z;if("path"in x)"params"in x&&!("name"in x)&&Object.keys(x.params).length&&Es(`Path "${x.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),z=xs({},x,{path:ht(n,x.path,ss.path).path});else{const ps=xs({},x.params);for(const h in ps)ps[h]==null&&delete ps[h];z=xs({},x,{params:y(x.params)}),ss.params=y(ss.params)}const es=l.resolve(z,ss),Bs=x.hash||"";Bs&&!Bs.startsWith("#")&&Es(`A \`hash\` should always start with the character "#". Replace "${Bs}" with "#${Bs}".`),es.params=d(f(es.params));const Cs=L5(t,xs({},x,{hash:Ff(Bs),path:es.path})),ds=a.createHref(Cs);return ds.startsWith("//")?Es(`Location "${x}" resolved to "${ds}". A resolved location cannot start with multiple slashes.`):es.matched.length||Es(`No match found for location with path "${"path"in x?x.path:x}"`),xs({fullPath:Cs,hash:Bs,query:t===Xr?$f(x.query):x.query||{}},es,{redirectedFrom:void 0,href:ds})}function k(x){return typeof x=="string"?ht(n,x,i.value.path):xs({},x)}function w(x,ss){if(u!==x)return fn(8,{from:ss,to:x})}function N(x){return U(x)}function Q(x){return N(xs(k(x),{replace:!0}))}function J(x){const ss=x.matched[x.matched.length-1];if(ss&&ss.redirect){const{redirect:z}=ss;let es=typeof z=="function"?z(x):z;if(typeof es=="string"&&(es=es.includes("?")||es.includes("#")?es=k(es):{path:es},es.params={}),!("path"in es)&&!("name"in es))throw Es(`Invalid redirect found:
${JSON.stringify(es,null,2)}
 when navigating to "${x.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return xs({query:x.query,hash:x.hash,params:"path"in es?{}:x.params},es)}}function U(x,ss){const z=u=P(x),es=i.value,Bs=x.state,Cs=x.force,ds=x.replace===!0,ps=J(z);if(ps)return U(xs(k(ps),{state:typeof ps=="object"?xs({},Bs,ps.state):Bs,force:Cs,replace:ds}),ss||z);const h=z;h.redirectedFrom=ss;let B;return!Cs&&zr(t,es,z)&&(B=fn(16,{to:h,from:es}),Ss(es,es,!0,!1)),(B?Promise.resolve(B):ys(h,es)).catch(E=>qe(E)?qe(E,2)?E:ms(E):X(E,h,es)).then(E=>{if(E){if(qe(E,2))return zr(t,P(E.to),h)&&ss&&(ss._count=ss._count?ss._count+1:1)>10?(Es(`Detected an infinite redirection in a navigation guard when going from "${es.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):U(xs({replace:ds},k(E.to),{state:typeof E.to=="object"?xs({},Bs,E.to.state):Bs,force:Cs}),ss||h)}else E=Ds(h,es,!0,ds,Bs);return vs(h,es,E),E})}function ts(x,ss){const z=w(x,ss);return z?Promise.reject(z):Promise.resolve()}function ys(x,ss){let z;const[es,Bs,Cs]=Gf(x,ss);z=mt(es.reverse(),"beforeRouteLeave",x,ss);for(const ps of es)ps.leaveGuards.forEach(h=>{z.push(ul(h,x,ss))});const ds=ts.bind(null,x,ss);return z.push(ds),Xl(z).then(()=>{z=[];for(const ps of r.list())z.push(ul(ps,x,ss));return z.push(ds),Xl(z)}).then(()=>{z=mt(Bs,"beforeRouteUpdate",x,ss);for(const ps of Bs)ps.updateGuards.forEach(h=>{z.push(ul(h,x,ss))});return z.push(ds),Xl(z)}).then(()=>{z=[];for(const ps of x.matched)if(ps.beforeEnter&&!ss.matched.includes(ps))if(ge(ps.beforeEnter))for(const h of ps.beforeEnter)z.push(ul(h,x,ss));else z.push(ul(ps.beforeEnter,x,ss));return z.push(ds),Xl(z)}).then(()=>(x.matched.forEach(ps=>ps.enterCallbacks={}),z=mt(Cs,"beforeRouteEnter",x,ss),z.push(ds),Xl(z))).then(()=>{z=[];for(const ps of c.list())z.push(ul(ps,x,ss));return z.push(ds),Xl(z)}).catch(ps=>qe(ps,8)?ps:Promise.reject(ps))}function vs(x,ss,z){for(const es of p.list())es(x,ss,z)}function Ds(x,ss,z,es,Bs){const Cs=w(x,ss);if(Cs)return Cs;const ds=ss===cl,ps=Ze?history.state:{};z&&(es||ds?a.replace(x.fullPath,xs({scroll:ds&&ps&&ps.scroll},Bs)):a.push(x.fullPath,Bs)),i.value=x,Ss(x,ss,z,ds),ms()}let Rs;function Zs(){Rs||(Rs=a.listen((x,ss,z)=>{if(!al.listening)return;const es=P(x),Bs=J(es);if(Bs){U(xs(Bs,{replace:!0}),es).catch(Tn);return}u=es;const Cs=i.value;Ze&&z5(Ur(Cs.fullPath,z.delta),nt()),ys(es,Cs).catch(ds=>qe(ds,12)?ds:qe(ds,2)?(U(ds.to,es).then(ps=>{qe(ps,20)&&!z.delta&&z.type===Jn.pop&&a.go(-1,!1)}).catch(Tn),Promise.reject()):(z.delta&&a.go(-z.delta,!1),X(ds,es,Cs))).then(ds=>{ds=ds||Ds(es,Cs,!1),ds&&(z.delta&&!qe(ds,8)?a.go(-z.delta,!1):z.type===Jn.pop&&qe(ds,20)&&a.go(-1,!1)),vs(es,Cs,ds)}).catch(Tn)}))}let Gs=Dn(),$s=Dn(),Ns;function X(x,ss,z){ms(x);const es=$s.list();return es.length?es.forEach(Bs=>Bs(x,ss,z)):(Es("uncaught error during route navigation:"),console.error(x)),Promise.reject(x)}function rs(){return Ns&&i.value!==cl?Promise.resolve():new Promise((x,ss)=>{Gs.add([x,ss])})}function ms(x){return Ns||(Ns=!x,Zs(),Gs.list().forEach(([ss,z])=>x?z(x):ss()),Gs.reset()),x}function Ss(x,ss,z,es){const{scrollBehavior:Bs}=e;if(!Ze||!Bs)return Promise.resolve();const Cs=!z&&W5(Ur(x.fullPath,0))||(es||!z)&&history.state&&history.state.scroll||null;return Se().then(()=>Bs(x,ss,Cs)).then(ds=>ds&&H5(ds)).catch(ds=>X(ds,x,ss))}const fe=x=>a.go(x);let ee;const ue=new Set,al={currentRoute:i,listening:!0,addRoute:m,removeRoute:v,hasRoute:D,getRoutes:_,resolve:P,options:e,push:N,replace:Q,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:r.add,beforeResolve:c.add,afterEach:p.add,onError:$s.add,isReady:rs,install(x){const ss=this;x.component("RouterLink",Lf),x.component("RouterView",Rf),x.config.globalProperties.$router=ss,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>C(i)}),Ze&&!ee&&i.value===cl&&(ee=!0,N(a.location).catch(Bs=>{Es("Unexpected error when starting the router:",Bs)}));const z={};for(const Bs in cl)z[Bs]=L(()=>i.value[Bs]);x.provide(ba,ss),x.provide(oi,se(z)),x.provide(Kt,i);const es=x.unmount;ue.add(x),x.unmount=function(){ue.delete(x),ue.size<1&&(u=cl,Rs&&Rs(),Rs=null,i.value=cl,ee=!1,Ns=!1),es()},Ze&&Hf(x,ss,l)}};return al}function Xl(e){return e.reduce((l,n)=>l.then(()=>n()),Promise.resolve())}function Gf(e,l){const n=[],t=[],a=[],r=Math.max(l.matched.length,e.matched.length);for(let c=0;c<r;c++){const p=l.matched[c];p&&(e.matched.find(u=>gl(u,p))?t.push(p):n.push(p));const i=e.matched[c];i&&(l.matched.find(u=>gl(u,i))||a.push(i))}return[n,t,a]}const vt=ns(!1),Mn=ns(!1),an=ns(!1),Qf=ns(!0),Yt=Rd({xs:460,...Od}),Rl=C5(),yi=u5(),Xf=L(()=>Rl.height.value-Rl.width.value/ml>180),di=p5(Ve?document.body:null),yn=Vd(),sh=L(()=>{var e,l;return["INPUT","TEXTAREA"].includes(((e=yn.value)==null?void 0:e.tagName)||"")||((l=yn.value)==null?void 0:l.classList.contains("CodeMirror-code"))}),eh=L(()=>{var e;return["BUTTON","A"].includes(((e=yn.value)==null?void 0:e.tagName)||"")});Oe("slidev-camera","default");Oe("slidev-mic","default");const Ao=Oe("slidev-scale",0),re=Oe("slidev-show-overview",!1),Bt=Oe("slidev-presenter-cursor",!0),tc=Oe("slidev-show-editor",!1);Oe("slidev-editor-width",Ve?window.innerWidth*.4:100);const fi=zp(re);function ac(e,l,n,t=a=>a){return e*t(.5-l*(.5-n))}function lh(e){return[-e[0],-e[1]]}function xe(e,l){return[e[0]+l[0],e[1]+l[1]]}function Ce(e,l){return[e[0]-l[0],e[1]-l[1]]}function ke(e,l){return[e[0]*l,e[1]*l]}function nh(e,l){return[e[0]/l,e[1]/l]}function En(e){return[e[1],-e[0]]}function rc(e,l){return e[0]*l[0]+e[1]*l[1]}function oh(e,l){return e[0]===l[0]&&e[1]===l[1]}function th(e){return Math.hypot(e[0],e[1])}function ah(e){return e[0]*e[0]+e[1]*e[1]}function cc(e,l){return ah(Ce(e,l))}function hi(e){return nh(e,th(e))}function rh(e,l){return Math.hypot(e[1]-l[1],e[0]-l[0])}function Fn(e,l,n){let t=Math.sin(n),a=Math.cos(n),r=e[0]-l[0],c=e[1]-l[1],p=r*a-c*t,i=r*t+c*a;return[p+l[0],i+l[1]]}function Zt(e,l,n){return xe(e,ke(Ce(l,e),n))}function pc(e,l,n){return xe(e,ke(l,n))}var{min:sn,PI:ch}=Math,ic=.275,kn=ch+1e-4;function ph(e,l={}){let{size:n=16,smoothing:t=.5,thinning:a=.5,simulatePressure:r=!0,easing:c=X=>X,start:p={},end:i={},last:u=!1}=l,{cap:d=!0,easing:y=X=>X*(2-X)}=p,{cap:f=!0,easing:m=X=>--X*X*X+1}=i;if(e.length===0||n<=0)return[];let v=e[e.length-1].runningLength,_=p.taper===!1?0:p.taper===!0?Math.max(n,v):p.taper,D=i.taper===!1?0:i.taper===!0?Math.max(n,v):i.taper,P=Math.pow(n*t,2),k=[],w=[],N=e.slice(0,10).reduce((X,rs)=>{let ms=rs.pressure;if(r){let Ss=sn(1,rs.distance/n),fe=sn(1,1-Ss);ms=sn(1,X+(fe-X)*(Ss*ic))}return(X+ms)/2},e[0].pressure),Q=ac(n,a,e[e.length-1].pressure,c),J,U=e[0].vector,ts=e[0].point,ys=ts,vs=ts,Ds=ys,Rs=!1;for(let X=0;X<e.length;X++){let{pressure:rs}=e[X],{point:ms,vector:Ss,distance:fe,runningLength:ee}=e[X];if(X<e.length-1&&v-ee<3)continue;if(a){if(r){let Cs=sn(1,fe/n),ds=sn(1,1-Cs);rs=sn(1,N+(ds-N)*(Cs*ic))}Q=ac(n,a,rs,c)}else Q=n/2;J===void 0&&(J=Q);let ue=ee<_?y(ee/_):1,al=v-ee<D?m((v-ee)/D):1;Q=Math.max(.01,Q*Math.min(ue,al));let x=(X<e.length-1?e[X+1]:e[X]).vector,ss=X<e.length-1?rc(Ss,x):1,z=rc(Ss,U)<0&&!Rs,es=ss!==null&&ss<0;if(z||es){let Cs=ke(En(U),Q);for(let ds=1/13,ps=0;ps<=1;ps+=ds)vs=Fn(Ce(ms,Cs),ms,kn*ps),k.push(vs),Ds=Fn(xe(ms,Cs),ms,kn*-ps),w.push(Ds);ts=vs,ys=Ds,es&&(Rs=!0);continue}if(Rs=!1,X===e.length-1){let Cs=ke(En(Ss),Q);k.push(Ce(ms,Cs)),w.push(xe(ms,Cs));continue}let Bs=ke(En(Zt(x,Ss,ss)),Q);vs=Ce(ms,Bs),(X<=1||cc(ts,vs)>P)&&(k.push(vs),ts=vs),Ds=xe(ms,Bs),(X<=1||cc(ys,Ds)>P)&&(w.push(Ds),ys=Ds),N=rs,U=Ss}let Zs=e[0].point.slice(0,2),Gs=e.length>1?e[e.length-1].point.slice(0,2):xe(e[0].point,[1,1]),$s=[],Ns=[];if(e.length===1){if(!(_||D)||u){let X=pc(Zs,hi(En(Ce(Zs,Gs))),-(J||Q)),rs=[];for(let ms=1/13,Ss=ms;Ss<=1;Ss+=ms)rs.push(Fn(X,Zs,kn*2*Ss));return rs}}else{if(!(_||D&&e.length===1))if(d)for(let rs=1/13,ms=rs;ms<=1;ms+=rs){let Ss=Fn(w[0],Zs,kn*ms);$s.push(Ss)}else{let rs=Ce(k[0],w[0]),ms=ke(rs,.5),Ss=ke(rs,.51);$s.push(Ce(Zs,ms),Ce(Zs,Ss),xe(Zs,Ss),xe(Zs,ms))}let X=En(lh(e[e.length-1].vector));if(D||_&&e.length===1)Ns.push(Gs);else if(f){let rs=pc(Gs,X,Q);for(let ms=1/29,Ss=ms;Ss<1;Ss+=ms)Ns.push(Fn(rs,Gs,kn*3*Ss))}else Ns.push(xe(Gs,ke(X,Q)),xe(Gs,ke(X,Q*.99)),Ce(Gs,ke(X,Q*.99)),Ce(Gs,ke(X,Q)))}return k.concat(Ns,w.reverse(),$s)}function ih(e,l={}){var n;let{streamline:t=.5,size:a=16,last:r=!1}=l;if(e.length===0)return[];let c=.15+(1-t)*.85,p=Array.isArray(e[0])?e:e.map(({x:m,y:v,pressure:_=.5})=>[m,v,_]);if(p.length===2){let m=p[1];p=p.slice(0,-1);for(let v=1;v<5;v++)p.push(Zt(p[0],m,v/4))}p.length===1&&(p=[...p,[...xe(p[0],[1,1]),...p[0].slice(2)]]);let i=[{point:[p[0][0],p[0][1]],pressure:p[0][2]>=0?p[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,y=i[0],f=p.length-1;for(let m=1;m<p.length;m++){let v=r&&m===f?p[m].slice(0,2):Zt(y.point,p[m],c);if(oh(y.point,v))continue;let _=rh(v,y.point);if(d+=_,m<f&&!u){if(d<a)continue;u=!0}y={point:v,pressure:p[m][2]>=0?p[m][2]:.5,vector:hi(Ce(y.point,v)),distance:_,runningLength:d},i.push(y)}return i[0].vector=((n=i[1])==null?void 0:n.vector)||[0,0],i}function uh(e,l={}){return ph(ih(e,l),l)}var yh=()=>({events:{},emit(e,...l){let n=this.events[e]||[];for(let t=0,a=n.length;t<a;t++)n[t](...l)},on(e,l){var n;return(n=this.events[e])!=null&&n.push(l)||(this.events[e]=[l]),()=>{var t;this.events[e]=(t=this.events[e])==null?void 0:t.filter(a=>l!==a)}}});function Oo(e,l){return e-l}function dh(e){return e<0?-1:1}function Lo(e){return[Math.abs(e),dh(e)]}function mi(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var fh=2,Ge=fh,vn=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var l;const n=this.drauu.el,t=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*t,y:(e.pageY-a.top)*t,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const r=a.matrixTransform((l=n.getScreenCTM())==null?void 0:l.inverse());return{x:r.x*t,y:r.y*t,pressure:e.pressure}}}createElement(e,l){const n=document.createElementNS("http://www.w3.org/2000/svg",e),t=l?{...this.brush,...l}:this.brush;return n.setAttribute("fill",t.fill??"transparent"),n.setAttribute("stroke",t.color),n.setAttribute("stroke-width",t.size.toString()),n.setAttribute("stroke-linecap","round"),t.dasharray&&n.setAttribute("stroke-dasharray",t.dasharray),n}attr(e,l){this.el.setAttribute(e,typeof l=="string"?l:l.toFixed(Ge))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},hh=class extends vn{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const l=uh(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!l.length)return"";const n=l.reduce((t,[a,r],c,p)=>{const[i,u]=p[(c+1)%p.length];return t.push(a,r,(a+i)/2,(r+u)/2),t},["M",...l[0],"Q"]);return n.push("Z"),n.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},mh=class extends vn{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,n]=Lo(e.x-this.start.x),[t,a]=Lo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(l,t);l=r,t=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",l),this.attr("ry",t);else{const[r,c]=[this.start.x,this.start.x+l*n].sort(Oo),[p,i]=[this.start.y,this.start.y+t*a].sort(Oo);this.attr("cx",(r+c)/2),this.attr("cy",(p+i)/2),this.attr("rx",(c-r)/2),this.attr("ry",(i-p)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function vi(e,l){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",l),t.setAttribute("id",e),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(a),n.appendChild(t),n}var vh=class extends vn{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const l=mi(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(vi(l,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${l})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:l,y:n}=e;if(this.shiftPressed){const t=e.x-this.start.x,a=e.y-this.start.y;if(a!==0){let r=t/a;r=Math.round(r),Math.abs(r)<=1?(l=this.start.x+a*r,n=this.start.y+a):(l=this.start.x+t,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-l),this.attr("y1",this.start.y*2-n),this.attr("x2",l),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",l),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Bh=class extends vn{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[l,n]=Lo(e.x-this.start.x),[t,a]=Lo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(l,t);l=r,t=r}if(this.altPressed)this.attr("x",this.start.x-l),this.attr("y",this.start.y-t),this.attr("width",l*2),this.attr("height",t*2);else{const[r,c]=[this.start.x,this.start.x+l*n].sort(Oo),[p,i]=[this.start.y,this.start.y+t*a].sort(Oo);this.attr("x",r),this.attr("y",p),this.attr("width",c-r),this.attr("height",i-p)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Ah(e,l){const n=e.x-l.x,t=e.y-l.y;return n*n+t*t}function _h(e,l,n){let t=l.x,a=l.y,r=n.x-t,c=n.y-a;if(r!==0||c!==0){const p=((e.x-t)*r+(e.y-a)*c)/(r*r+c*c);p>1?(t=n.x,a=n.y):p>0&&(t+=r*p,a+=c*p)}return r=e.x-t,c=e.y-a,r*r+c*c}function gh(e,l){let n=e[0];const t=[n];let a;for(let r=1,c=e.length;r<c;r++)a=e[r],Ah(a,n)>l&&(t.push(a),n=a);return n!==a&&a&&t.push(a),t}function Gt(e,l,n,t,a){let r=t,c=0;for(let p=l+1;p<n;p++){const i=_h(e[p],e[l],e[n]);i>r&&(c=p,r=i)}r>t&&(c-l>1&&Gt(e,l,c,t,a),a.push(e[c]),n-c>1&&Gt(e,c,n,t,a))}function Dh(e,l){const n=e.length-1,t=[e[0]];return Gt(e,0,n,l,t),t.push(e[n]),t}function uc(e,l,n=!1){if(e.length<=2)return e;const t=l!==void 0?l*l:1;return e=n?e:gh(e,t),e=Dh(e,t),e}var Ch=class extends vn{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=mi();const l=vi(this.arrowId,this.brush.color);this.el.appendChild(l)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=uc(this.points,1,!0),this.count=0),this.attr("d",dc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",dc(uc(this.points,1,!0))),!e.getTotalLength()))}};function Eh(e,l){const n=l.x-e.x,t=l.y-e.y;return{length:Math.sqrt(n**2+t**2),angle:Math.atan2(t,n)}}function yc(e,l,n,t){const a=l||e,r=n||e,c=.2,p=Eh(a,r),i=p.angle+(t?Math.PI:0),u=p.length*c,d=e.x+Math.cos(i)*u,y=e.y+Math.sin(i)*u;return{x:d,y}}function Fh(e,l,n){const t=yc(n[l-1],n[l-2],e),a=yc(e,n[l-1],n[l+1],!0);return`C ${t.x.toFixed(Ge)},${t.y.toFixed(Ge)} ${a.x.toFixed(Ge)},${a.y.toFixed(Ge)} ${e.x.toFixed(Ge)},${e.y.toFixed(Ge)}`}function dc(e){return e.reduce((l,n,t,a)=>t===0?`M ${n.x.toFixed(Ge)},${n.y.toFixed(Ge)}`:`${l} ${Fh(n,t,a)}`,"")}var kh=class extends vn{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const l=(n,t)=>{if(n&&n.length)for(let a=0;a<n.length;a++){const r=n[a];if(r.getTotalLength){const c=r.getTotalLength();for(let p=0;p<this.pathSubFactor;p++){const i=r.getPointAtLength(c*p/this.pathSubFactor),u=r.getPointAtLength(c*(p+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:u.x,y1:i.y,y2:u.y,segment:p,element:t||r})}}else r.children&&l(r.children,r)}};e&&l(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const l=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,l}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let l=0;l<this.pathFragments.length;l++){const n=this.pathFragments[l],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,t)&&(n.element.remove(),e.push(l))}return e.length&&(this.pathFragments=this.pathFragments.filter((l,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,l){const n=e.x1,t=e.x2,a=l.x1,r=l.x2,c=e.y1,p=e.y2,i=l.y1,u=l.y2,d=(n-t)*(i-u)-(c-p)*(a-r),y=(n*p-c*t)*(a-r)-(n-t)*(a*u-i*r),f=(n*p-c*t)*(i-u)-(c-p)*(a*u-i*r),m=(v,_,D)=>v>=_&&v<=D?!0:v>=D&&v<=_;if(d===0)return!1;{const v={x:y/d,y:f/d};return m(v.x,n,t)&&m(v.y,c,p)&&m(v.x,a,r)&&m(v.y,i,u)}}};function xh(e){return{draw:new Ch(e),stylus:new hh(e),line:new vh(e),rectangle:new Bh(e),ellipse:new mh(e),eraseLine:new kh(e)}}var bh=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=yh(),this._models=xh(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,l){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(l)||this.el,t=this.eventStart.bind(this),a=this.eventMove.bind(this),r=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,l){return this._emitter.on(e,l)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const l=this.model._eventUp(e);l?(l instanceof Element&&l!==this._currentNode&&(this._currentNode=l),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function wh(e){return new bh(e)}const Qt=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],je=Oe("slidev-drawing-enabled",!1),$6=Oe("slidev-drawing-pinned",!1),$h=ns(!1),Sh=ns(!1),Ph=ns(!1),Zn=ns(!1),Pl=rd(Oe("slidev-drawing-brush",{color:Qt[0],size:4,mode:"stylus"})),fc=ns("stylus"),Bi=L(()=>Ls.drawings.syncAll||Xe.value);let Gn=!1;const xn=L({get(){return fc.value},set(e){fc.value=e,e==="arrow"?(Pl.mode="line",Pl.arrowEnd=!0):(Pl.mode=e,Pl.arrowEnd=!1)}}),Vh=se({brush:Pl,acceptsInputTypes:L(()=>je.value?void 0:["pen"]),coordinateTransform:!1}),ie=ia(wh(Vh));function Oh(){ie.clear(),Bi.value&&Rp(Ys.value,"")}function Ai(){var e;Sh.value=ie.canRedo(),$h.value=ie.canUndo(),Ph.value=!!((e=ie.el)!=null&&e.children.length)}function Lh(e){Gn=!0;const l=Po[e||Ys.value];l!=null?ie.load(l):ie.clear(),Gn=!1}ie.on("changed",()=>{if(Ai(),!Gn){const e=ie.dump(),l=Ys.value;(Po[l]||"")!==e&&Bi.value&&Rp(l,ie.dump())}});Gy(e=>{Gn=!0,e[Ys.value]!=null&&ie.load(e[Ys.value]||""),Gn=!1,Ai()});Se(()=>{Is(Ys,()=>{ie.mounted&&Lh()},{immediate:!0})});ie.on("start",()=>Zn.value=!0);ie.on("end",()=>Zn.value=!1);window.addEventListener("keydown",e=>{if(!je.value)return;const l=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ie.redo():ie.undo():e.code==="Escape"?je.value=!1:e.code==="KeyL"&&l?xn.value="line":e.code==="KeyA"&&l?xn.value="arrow":e.code==="KeyS"&&l?xn.value="stylus":e.code==="KeyR"&&l?xn.value="rectangle":e.code==="KeyE"&&l?xn.value="ellipse":e.code==="KeyC"&&l?Oh():e.code.startsWith("Digit")&&l&&+e.code[5]<=Qt.length?Pl.color=Qt[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ws(...e){return L(()=>e.every(l=>pe(l)))}function he(e){return L(()=>!pe(e))}const hc=Yd(),At=Oe("slidev-color-schema","auto"),Xt=L(()=>Ls.colorSchema!=="auto"),wa=L({get(){return Xt.value?Ls.colorSchema==="dark":At.value==="auto"?hc.value:At.value==="dark"},set(e){Xt.value||(At.value=e===hc.value?"auto":e?"dark":"light")}}),_i=zp(wa);Ve&&Is(wa,e=>{const l=document.querySelector("html");l.classList.toggle("dark",e),l.classList.toggle("light",!e)},{immediate:!0});const _o=ns(1),go=L(()=>qs.length-1),Ae=ns(0),$a=ns(0);function Th(){Ae.value>_o.value&&(Ae.value-=1)}function Nh(){Ae.value<go.value&&(Ae.value+=1)}function Mh(){if(Ae.value>_o.value){let e=Ae.value-$a.value;e<_o.value&&(e=_o.value),Ae.value=e}}function Rh(){if(Ae.value<go.value){let e=Ae.value+$a.value;e>go.value&&(e=go.value),Ae.value=e}}function Ih(){const{escape:e,space:l,shift:n,left:t,right:a,up:r,down:c,enter:p,d:i,g:u,o:d}=yi;let y=[{name:"next_space",key:Ws(l,he(n)),fn:Il,autoRepeat:!0},{name:"prev_space",key:Ws(l,n),fn:jl,autoRepeat:!0},{name:"next_right",key:Ws(a,he(n),he(re)),fn:Il,autoRepeat:!0},{name:"prev_left",key:Ws(t,he(n),he(re)),fn:jl,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Il,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:jl,autoRepeat:!0},{name:"next_down",key:Ws(c,he(re)),fn:No,autoRepeat:!0},{name:"prev_up",key:Ws(r,he(re)),fn:()=>Mo(!1),autoRepeat:!0},{name:"next_shift",key:Ws(a,n),fn:No,autoRepeat:!0},{name:"prev_shift",key:Ws(t,n),fn:()=>Mo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ws(i,he(je)),fn:_i},{name:"toggle_overview",key:Ws(d,he(je)),fn:fi},{name:"hide_overview",key:Ws(e,he(je)),fn:()=>re.value=!1},{name:"goto",key:Ws(u,he(je)),fn:()=>an.value=!an.value},{name:"next_overview",key:Ws(a,re),fn:Nh},{name:"prev_overview",key:Ws(t,re),fn:Th},{name:"up_overview",key:Ws(r,re),fn:Mh},{name:"down_overview",key:Ws(c,re),fn:Rh},{name:"goto_from_overview",key:Ws(p,re),fn:()=>{hn(Ae.value),re.value=!1}}];const f=new Set(y.map(v=>v.name));if(y.filter(v=>v.name&&f.has(v.name)).length===0){const v=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(v),console.warn(v)}return y}const gi=Ws(he(sh),he(eh),Qf);function jh(e,l,n=!1){typeof e=="string"&&(e=yi[e]);const t=Ws(e,gi);let a=0,r;const c=()=>{if(clearTimeout(r),!t.value){a=0;return}n&&(r=setTimeout(c,Math.max(1e3-a*250,150)),a++),l()};return Is(t,c,{flush:"sync"})}function Hh(e,l){return Pd(e,n=>{gi.value&&(n.repeat||l())})}function zh(){const e=Ih();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&jh(n.key,n.fn,n.autoRepeat)}),Hh("f",()=>di.toggle())}const Wh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uh=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),qh=[Uh];function Kh(e,l){return A(),G("svg",Wh,qh)}const Jh={name:"carbon-close",render:Kh};function Sa(e){var n,t;const l=(t=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:t.no;return l!=null?`slidev-page-${l}`:""}const Yh=Ms({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const l=e;b($);const n=ns(),t=c5(n),a=L(()=>l.width?l.width:t.width.value),r=L(()=>l.width?l.width/ml:t.height.value);l.width&&mn(()=>{n.value&&(n.value.style.width=`${a.value}px`,n.value.style.height=`${r.value}px`)});const c=L(()=>a.value/r.value),p=L(()=>l.scale?l.scale:c.value<ml?a.value/vl:r.value*ml/vl),i=L(()=>({height:`${Ea}px`,width:`${vl}px`,transform:`translate(-50%, -50%) scale(${p.value})`})),u=L(()=>({"select-none":!Ls.selectable,"slidev-code-line-numbers":Ls.lineNumbers}));return Be(Np,p),(d,y)=>(A(),G("div",{id:"slide-container",ref_key:"root",ref:n,class:js(C(u))},[s("div",{id:"slide-content",style:Xs(C(i))},[nl(d.$slots,"default")],4),nl(d.$slots,"controls")],2))}});const S=(e,l)=>{const n=e.__vccOpts||e;for(const[t,a]of l)n[t]=a;return n},Di=S(Yh,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Pa=Ms({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:l}){const n=Ie(e,"clicks",l),t=Ie(e,"clicksElements",l),a=Ie(e,"clicksDisabled",l),r=Ie(e,"clicksOrderMap",l);t.value.length=0,Be(Iy,e.route),Be(jy,e.context),Be(Op,n),Be(Tp,a),Be(Lp,t),Be(Ry,r)},render(){var e,l;return this.$props.is?lt(this.$props.is):(l=(e=this.$slots)==null?void 0:e.default)==null?void 0:l.call(e)}}),Zh=["innerHTML"],Gh=Ms({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return b($),(l,n)=>C(Po)[e.page]?(A(),G("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(Po)[e.page]},null,8,Zh)):gs("v-if",!0)}}),Ci=S(Gh,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Qh=Object.freeze(Object.defineProperty({__proto__:null,default:Ci},Symbol.toStringTag,{value:"Module"})),Xh={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},sm=["onClick"],em=Ms({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:l}){const n=e;b($);const t=Ie(n,"modelValue",l);function a(){t.value=!1}function r(m){hn(m),a()}function c(m){return m===Ae.value}const p=Yt.smaller("xs"),i=Yt.smaller("sm"),u=4*16*2,d=2*16,y=L(()=>p.value?Rl.width.value-u:i.value?(Rl.width.value-u-d)/2:300),f=L(()=>Math.floor((Rl.width.value-u)/(y.value+d)));return mn(()=>{Ae.value=Ys.value,$a.value=f.value}),(m,v)=>{const _=Jh;return A(),G(ks,null,[Pe(s("div",Xh,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Xs(`grid-template-columns: repeat(auto-fit,minmax(${C(y)}px,1fr))`)},[(A(!0),G(ks,null,eo(C(qs).slice(0,-1),(D,P)=>(A(),G("div",{key:D.path,class:"relative"},[s("div",{class:js(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(P+1)}]),style:Xs(C(Fa)),onClick:k=>r(+D.path)},[(A(),O(Di,{key:D.path,width:C(y),"clicks-disabled":!0,class:"pointer-events-none"},{default:g(()=>[F(C(Pa),{is:D==null?void 0:D.component,"clicks-disabled":!0,class:js(C(Sa)(D)),route:D,context:"overview"},null,8,["is","class","route"]),F(Ci,{page:+D.path},null,8,["page"])]),_:2},1032,["width"]))],14,sm),s("div",{class:"absolute top-0 opacity-50",style:Xs(`left: ${C(y)+5}px`)},Js(P+1),5)]))),128))],4)],512),[[Vp,C(t)]]),C(t)?(A(),G("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:a},[F(_)])):gs("v-if",!0)],64)}}});const lm=S(em,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),nm="/vue-3-practices/assets/logo-b72bde5d.png",om={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},tm=Ms({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:l}){const n=e;b($);const t=Ie(n,"modelValue",l);function a(){t.value=!1}return(r,c)=>(A(),O(pp,null,[C(t)?(A(),G("div",om,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=p=>a())}),s("div",{class:js(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[nl(r.$slots,"default")],2)])):gs("v-if",!0)],1024))}}),am=S(tm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Modal.vue"]]),rm={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},cm=["innerHTML"],pm=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:nm,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),o("dev ")])])],-1),im=Ms({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:l}){const n=e;b($);const t=Ie(n,"modelValue",l),a=L(()=>typeof Ls.info=="string");return(r,c)=>(A(),O(am,{modelValue:C(t),"onUpdate:modelValue":c[0]||(c[0]=p=>Fs(t)?t.value=p:null),class:"px-6 py-4"},{default:g(()=>[s("div",rm,[C(a)?(A(),G("div",{key:0,class:"mb-4",innerHTML:C(Ls).info},null,8,cm)):gs("v-if",!0),pm])]),_:1},8,["modelValue"]))}});const um=S(im,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/InfoDialog.vue"]]),ym=["disabled","onKeydown"],dm=Ms({__name:"Goto",setup(e){b($);const l=ns(),n=ns(""),t=L(()=>{if(n.value.startsWith("/"))return!!qs.find(c=>c.path===n.value.substring(1));{const c=+n.value;return!isNaN(c)&&c>0&&c<=Li.value}});function a(){t.value&&(n.value.startsWith("/")?hn(n.value.substring(1)):hn(+n.value)),r()}function r(){an.value=!1}return Is(an,async c=>{var p,i;c?(await Se(),n.value="",(p=l.value)==null||p.focus()):(i=l.value)==null||i.blur()}),Is(n,c=>{c.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(c,p)=>(A(),G("div",{id:"slidev-goto-dialog",class:js(["fixed right-5 bg-main transform transition-all",C(an)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Pe(s("input",{ref_key:"input",ref:l,"onUpdate:modelValue":p[0]||(p[0]=i=>n.value=i),type:"text",disabled:!C(an),class:js(["outline-none bg-transparent",{"text-red-400":!C(t)&&n.value}]),placeholder:"Goto...",onKeydown:[gr(a,["enter"]),gr(r,["escape"])],onBlur:r},null,42,ym),[[qn,n.value]])],2))}}),fm=S(dm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Goto.vue"]]),hm=Ms({__name:"Controls",setup(e){b($);const l=ze(),n=ze();return(t,a)=>(A(),G(ks,null,[F(lm,{modelValue:C(re),"onUpdate:modelValue":a[0]||(a[0]=r=>Fs(re)?re.value=r:null)},null,8,["modelValue"]),F(fm),C(l)?(A(),O(C(l),{key:0})):gs("v-if",!0),C(n)?(A(),O(C(n),{key:1,modelValue:C(vt),"onUpdate:modelValue":a[1]||(a[1]=r=>Fs(vt)?vt.value=r:null)},null,8,["modelValue"])):gs("v-if",!0),C(Ls).info?(A(),O(um,{key:2,modelValue:C(Mn),"onUpdate:modelValue":a[2]||(a[2]=r=>Fs(Mn)?Mn.value=r:null)},null,8,["modelValue"])):gs("v-if",!0)],64))}}),mm=S(hm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Controls.vue"]]),vm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bm=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Am=[Bm];function _m(e,l){return A(),G("svg",vm,Am)}const gm={name:"carbon-settings-adjust",render:_m},Dm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cm=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Em=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Fm=[Cm,Em];function km(e,l){return A(),G("svg",Dm,Fm)}const xm={name:"carbon-information",render:km},bm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wm=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),$m=[wm];function Sm(e,l){return A(),G("svg",bm,$m)}const Pm={name:"carbon-download",render:Sm},Vm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Om=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Lm=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Tm=[Om,Lm];function Nm(e,l){return A(),G("svg",Vm,Tm)}const Mm={name:"carbon-user-speaker",render:Nm},Rm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Im=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),jm=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Hm=[Im,jm];function zm(e,l){return A(),G("svg",Rm,Hm)}const Wm={name:"carbon-presentation-file",render:zm},Um={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qm=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Km=[qm];function Jm(e,l){return A(),G("svg",Um,Km)}const Ym={name:"carbon-pen",render:Jm},Zm={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Gm=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Qm=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Xm=[Gm,Qm];function s3(e,l){return A(),G("svg",Zm,Xm)}const e3={name:"ph-cursor-duotone",render:s3},l3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},n3=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),o3=[n3];function t3(e,l){return A(),G("svg",l3,o3)}const Ei={name:"ph-cursor-fill",render:t3},a3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r3=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),c3=[r3];function p3(e,l){return A(),G("svg",a3,c3)}const i3={name:"carbon-sun",render:p3},u3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y3=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),d3=[y3];function f3(e,l){return A(),G("svg",u3,d3)}const h3={name:"carbon-moon",render:f3},m3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v3=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),B3=[v3];function A3(e,l){return A(),G("svg",m3,B3)}const _3={name:"carbon-apps",render:A3},g3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D3=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),C3=[D3];function E3(e,l){return A(),G("svg",g3,C3)}const Fi={name:"carbon-arrow-right",render:E3},F3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k3=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),x3=[k3];function b3(e,l){return A(),G("svg",F3,x3)}const w3={name:"carbon-arrow-left",render:b3},$3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S3=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),P3=[S3];function V3(e,l){return A(),G("svg",$3,P3)}const O3={name:"carbon-maximize",render:V3},L3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T3=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),N3=[T3];function M3(e,l){return A(),G("svg",L3,N3)}const R3={name:"carbon-minimize",render:M3},I3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j3=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),H3=[j3];function z3(e,l){return A(),G("svg",I3,H3)}const W3={name:"carbon-checkmark",render:z3},U3={class:"select-list"},q3={class:"title"},K3={class:"items"},J3=["onClick"],Y3=Ms({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:l}){const n=e;b($);const t=Ie(n,"modelValue",l,{passive:!0});return(a,r)=>{const c=W3;return A(),G("div",U3,[s("div",q3,Js(e.title),1),s("div",K3,[(A(!0),G(ks,null,eo(e.items,p=>(A(),G("div",{key:p.value,class:js(["item",{active:C(t)===p.value}]),onClick:()=>{var i;t.value=p.value,(i=p.onClick)==null||i.call(p)}},[F(c,{class:js(["text-green-500",{"opacity-0":C(t)!==p.value}])},null,8,["class"]),o(" "+Js(p.display||p.value),1)],10,J3))),128))])])}}});const Z3=S(Y3,[["__scopeId","data-v-a5c2ed88"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SelectList.vue"]]),G3={class:"text-sm"},Q3=Ms({__name:"Settings",setup(e){b($);const l=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,t)=>(A(),G("div",G3,[F(Z3,{modelValue:C(Ao),"onUpdate:modelValue":t[0]||(t[0]=a=>Fs(Ao)?Ao.value=a:null),title:"Scale",items:l},null,8,["modelValue"])]))}}),X3=S(Q3,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Settings.vue"]]),sv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},ev=Ms({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:l}){const n=e;b($);const t=Ie(n,"modelValue",l,{passive:!0}),a=ns();return $d(a,()=>{t.value=!1}),(r,c)=>(A(),G("div",{ref_key:"el",ref:a,class:"flex relative"},[s("button",{class:js({disabled:e.disabled}),onClick:c[0]||(c[0]=p=>t.value=!C(t))},[nl(r.$slots,"button",{class:js({disabled:e.disabled})})],2),(A(),O(pp,null,[C(t)?(A(),G("div",sv,[nl(r.$slots,"menu")])):gs("v-if",!0)],1024))],512))}}),lv=S(ev,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/MenuButton.vue"]]),nv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ov={__name:"VerticalDivider",setup(e){return b($),(l,n)=>(A(),G("div",nv))}},yo=S(ov,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),tv={render(){return[]}},av={class:"icon-btn"},rv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},cv={class:"my-auto"},pv={class:"opacity-50"},iv=Ms({__name:"NavControls",props:{persist:{default:!1}},setup(e){const l=e;b($);const n=Yt.smaller("md"),{isFullscreen:t,toggle:a}=di,r=L(()=>ea.value?`?password=${ea.value}`:""),c=L(()=>`/presenter/${Ys.value}${r.value}`),p=L(()=>`/${Ys.value}${r.value}`),i=ns(),u=()=>{i.value&&yn.value&&i.value.contains(yn.value)&&yn.value.blur()},d=L(()=>l.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=ze(),f=ze();return Ul(()=>import("./DrawingControls-1986a4f6.js"),[]).then(m=>f.value=m.default),(m,v)=>{const _=R3,D=O3,P=w3,k=Fi,w=_3,N=h3,Q=i3,J=Ei,U=e3,ts=Ym,ys=Wm,vs=_u("RouterLink"),Ds=Mm,Rs=Pm,Zs=xm,Gs=gm;return A(),G("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[s("div",{class:js(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",C(d)]),onMouseleave:u},[C(Ye)?gs("v-if",!0):(A(),G("button",{key:0,class:"icon-btn",onClick:v[0]||(v[0]=(...$s)=>C(a)&&C(a)(...$s))},[C(t)?(A(),O(_,{key:0})):(A(),O(D,{key:1}))])),s("button",{class:js(["icon-btn",{disabled:!C(l6)}]),onClick:v[1]||(v[1]=(...$s)=>C(jl)&&C(jl)(...$s))},[F(P)],2),s("button",{class:js(["icon-btn",{disabled:!C(e6)}]),title:"Next",onClick:v[2]||(v[2]=(...$s)=>C(Il)&&C(Il)(...$s))},[F(k)],2),C(Ye)?gs("v-if",!0):(A(),G("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=$s=>C(fi)())},[F(w)])),C(Xt)?gs("v-if",!0):(A(),G("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=$s=>C(_i)())},[C(wa)?(A(),O(N,{key:0})):(A(),O(Q,{key:1}))])),F(yo),C(Ye)?gs("v-if",!0):(A(),G(ks,{key:3},[!C(Xe)&&!C(n)&&C(y)?(A(),G(ks,{key:0},[F(C(y)),F(yo)],64)):gs("v-if",!0),C(Xe)?(A(),G("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=$s=>Bt.value=!C(Bt))},[C(Bt)?(A(),O(J,{key:0})):(A(),O(U,{key:1,class:"opacity-50"}))])):gs("v-if",!0)],64)),!C(Ls).drawings.presenterOnly&&!C(Ye)?(A(),G(ks,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=$s=>je.value=!C(je))},[F(ts),C(je)?(A(),G("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Xs({background:C(Pl).color})},null,4)):gs("v-if",!0)]),F(yo)],64)):gs("v-if",!0),C(Ye)?gs("v-if",!0):(A(),G(ks,{key:5},[C(Xe)?(A(),O(vs,{key:0,to:C(p),class:"icon-btn",title:"Play Mode"},{default:g(()=>[F(ys)]),_:1},8,["to"])):gs("v-if",!0),C(QE)?(A(),O(vs,{key:1,to:C(c),class:"icon-btn",title:"Presenter Mode"},{default:g(()=>[F(Ds)]),_:1},8,["to"])):gs("v-if",!0),gs("v-if",!0)],64)),(A(),G(ks,{key:6},[C(Ls).download?(A(),G("button",{key:0,class:"icon-btn",onClick:v[8]||(v[8]=(...$s)=>C(Dc)&&C(Dc)(...$s))},[F(Rs)])):gs("v-if",!0)],64)),!C(Xe)&&C(Ls).info&&!C(Ye)?(A(),G("button",{key:7,class:"icon-btn",onClick:v[9]||(v[9]=$s=>Mn.value=!C(Mn))},[F(Zs)])):gs("v-if",!0),!C(Xe)&&!C(Ye)?(A(),O(lv,{key:8},{button:g(()=>[s("button",av,[F(Gs)])]),menu:g(()=>[F(X3)]),_:1})):gs("v-if",!0),C(Ye)?gs("v-if",!0):(A(),O(yo,{key:9})),s("div",rv,[s("div",cv,[o(Js(C(Ys))+" ",1),s("span",pv,"/ "+Js(C(Li)),1)])]),F(C(tv))],34)],512)}}}),uv=S(iv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/NavControls.vue"]]),ki={render(){return[]}},xi={render(){return[]}},yv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},dv=Ms({__name:"PresenterMouse",setup(e){return b($),(l,n)=>{const t=Ei;return C(dt).cursor?(A(),G("div",yv,[F(t,{class:"absolute",style:Xs({left:`${C(dt).cursor.x}%`,top:`${C(dt).cursor.y}%`})},null,8,["style"])])):gs("v-if",!0)}}}),fv=S(dv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),hv=Ms({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){b($),Is(ve,()=>{var n,t;(n=ve.value)!=null&&n.meta&&ve.value.meta.preload!==!1&&(ve.value.meta.__preloaded=!0),(t=_t.value)!=null&&t.meta&&_t.value.meta.preload!==!1&&(_t.value.meta.__preloaded=!0)},{immediate:!0});const l=ze();return Ul(()=>import("./DrawingLayer-de13b2b4.js"),[]).then(n=>l.value=n.default),(n,t)=>(A(),G(ks,null,[gs(" Global Bottom "),F(C(xi)),gs(" Slides "),(A(!0),G(ks,null,eo(C(qs),a=>{var r,c;return A(),G(ks,{key:a.path},[(r=a.meta)!=null&&r.__preloaded||a===C(ve)?Pe((A(),O(C(Pa),{key:0,is:a==null?void 0:a.component,clicks:a===C(ve)?C(ql):0,"clicks-elements":((c=a.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:js(C(Sa)(a)),route:a,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Vp,a===C(ve)]]):gs("v-if",!0)],64)}),128)),gs(" Global Top "),F(C(ki)),C(l)?(A(),O(C(l),{key:0})):gs("v-if",!0),C(Xe)?gs("v-if",!0):(A(),O(fv,{key:1}))],64))}}),mv=S(hv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesShow.vue"]]),vv=Ms({__name:"Play",setup(e){b($),zh();const l=ns();function n(r){var c;tc.value||((c=r.target)==null?void 0:c.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Il():jl())}t6(l);const t=L(()=>Xf.value||tc.value);ze();const a=ze();return Ul(()=>import("./DrawingControls-1986a4f6.js"),[]).then(r=>a.value=r.default),(r,c)=>(A(),G(ks,null,[s("div",{id:"page-root",ref_key:"root",ref:l,class:"grid grid-cols-[1fr_max-content]",style:Xs(C(Fa))},[F(Di,{class:"w-full h-full",style:Xs({background:"var(--slidev-slide-container-background, black)"}),width:C(La)?C(Rl).width.value:void 0,scale:C(Ao),onPointerdown:n},{default:g(()=>[F(mv,{context:"slide"})]),controls:g(()=>[s("div",{class:js(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[C(t)?"opacity-100 right-0":"opacity-0 p-2",C(Zn)?"pointer-events-none":""]])},[F(uv,{class:"m-auto",persist:C(t)},null,8,["persist"])],2),!C(Ls).drawings.presenterOnly&&!C(Ye)&&C(a)?(A(),O(C(a),{key:0,class:"ml-0"})):gs("v-if",!0)]),_:1},8,["style","width","scale"]),gs("v-if",!0)],4),F(mm)],64))}}),Bv=S(vv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function bi(e){return typeof e>"u"||e===null}function Av(e){return typeof e=="object"&&e!==null}function _v(e){return Array.isArray(e)?e:bi(e)?[]:[e]}function gv(e,l){var n,t,a,r;if(l)for(r=Object.keys(l),n=0,t=r.length;n<t;n+=1)a=r[n],e[a]=l[a];return e}function Dv(e,l){var n="",t;for(t=0;t<l;t+=1)n+=e;return n}function Cv(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Ev=bi,Fv=Av,kv=_v,xv=Dv,bv=Cv,wv=gv,Va={isNothing:Ev,isObject:Fv,toArray:kv,repeat:xv,isNegativeZero:bv,extend:wv};function wi(e,l){var n="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!l&&e.mark.snippet&&(n+=`

`+e.mark.snippet),t+" "+n):t}function Qn(e,l){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=l,this.message=wi(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Qn.prototype=Object.create(Error.prototype);Qn.prototype.constructor=Qn;Qn.prototype.toString=function(l){return this.name+": "+wi(this,l)};var wl=Qn,$v=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Sv=["scalar","sequence","mapping"];function Pv(e){var l={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(t){l[String(t)]=n})}),l}function Vv(e,l){if(l=l||{},Object.keys(l).forEach(function(n){if($v.indexOf(n)===-1)throw new wl('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=l,this.tag=e,this.kind=l.kind||null,this.resolve=l.resolve||function(){return!0},this.construct=l.construct||function(n){return n},this.instanceOf=l.instanceOf||null,this.predicate=l.predicate||null,this.represent=l.represent||null,this.representName=l.representName||null,this.defaultStyle=l.defaultStyle||null,this.multi=l.multi||!1,this.styleAliases=Pv(l.styleAliases||null),Sv.indexOf(this.kind)===-1)throw new wl('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ne=Vv;function mc(e,l){var n=[];return e[l].forEach(function(t){var a=n.length;n.forEach(function(r,c){r.tag===t.tag&&r.kind===t.kind&&r.multi===t.multi&&(a=c)}),n[a]=t}),n}function Ov(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},l,n;function t(a){a.multi?(e.multi[a.kind].push(a),e.multi.fallback.push(a)):e[a.kind][a.tag]=e.fallback[a.tag]=a}for(l=0,n=arguments.length;l<n;l+=1)arguments[l].forEach(t);return e}function sa(e){return this.extend(e)}sa.prototype.extend=function(l){var n=[],t=[];if(l instanceof ne)t.push(l);else if(Array.isArray(l))t=t.concat(l);else if(l&&(Array.isArray(l.implicit)||Array.isArray(l.explicit)))l.implicit&&(n=n.concat(l.implicit)),l.explicit&&(t=t.concat(l.explicit));else throw new wl("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof ne))throw new wl("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new wl("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new wl("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(r){if(!(r instanceof ne))throw new wl("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(sa.prototype);return a.implicit=(this.implicit||[]).concat(n),a.explicit=(this.explicit||[]).concat(t),a.compiledImplicit=mc(a,"implicit"),a.compiledExplicit=mc(a,"explicit"),a.compiledTypeMap=Ov(a.compiledImplicit,a.compiledExplicit),a};var Lv=sa,Tv=new ne("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Nv=new ne("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Mv=new ne("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Rv=new Lv({explicit:[Tv,Nv,Mv]});function Iv(e){if(e===null)return!0;var l=e.length;return l===1&&e==="~"||l===4&&(e==="null"||e==="Null"||e==="NULL")}function jv(){return null}function Hv(e){return e===null}var zv=new ne("tag:yaml.org,2002:null",{kind:"scalar",resolve:Iv,construct:jv,predicate:Hv,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Wv(e){if(e===null)return!1;var l=e.length;return l===4&&(e==="true"||e==="True"||e==="TRUE")||l===5&&(e==="false"||e==="False"||e==="FALSE")}function Uv(e){return e==="true"||e==="True"||e==="TRUE"}function qv(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Kv=new ne("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Wv,construct:Uv,predicate:qv,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Jv(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Yv(e){return 48<=e&&e<=55}function Zv(e){return 48<=e&&e<=57}function Gv(e){if(e===null)return!1;var l=e.length,n=0,t=!1,a;if(!l)return!1;if(a=e[n],(a==="-"||a==="+")&&(a=e[++n]),a==="0"){if(n+1===l)return!0;if(a=e[++n],a==="b"){for(n++;n<l;n++)if(a=e[n],a!=="_"){if(a!=="0"&&a!=="1")return!1;t=!0}return t&&a!=="_"}if(a==="x"){for(n++;n<l;n++)if(a=e[n],a!=="_"){if(!Jv(e.charCodeAt(n)))return!1;t=!0}return t&&a!=="_"}if(a==="o"){for(n++;n<l;n++)if(a=e[n],a!=="_"){if(!Yv(e.charCodeAt(n)))return!1;t=!0}return t&&a!=="_"}}if(a==="_")return!1;for(;n<l;n++)if(a=e[n],a!=="_"){if(!Zv(e.charCodeAt(n)))return!1;t=!0}return!(!t||a==="_")}function Qv(e){var l=e,n=1,t;if(l.indexOf("_")!==-1&&(l=l.replace(/_/g,"")),t=l[0],(t==="-"||t==="+")&&(t==="-"&&(n=-1),l=l.slice(1),t=l[0]),l==="0")return 0;if(t==="0"){if(l[1]==="b")return n*parseInt(l.slice(2),2);if(l[1]==="x")return n*parseInt(l.slice(2),16);if(l[1]==="o")return n*parseInt(l.slice(2),8)}return n*parseInt(l,10)}function Xv(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Va.isNegativeZero(e)}var sB=new ne("tag:yaml.org,2002:int",{kind:"scalar",resolve:Gv,construct:Qv,predicate:Xv,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),eB=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function lB(e){return!(e===null||!eB.test(e)||e[e.length-1]==="_")}function nB(e){var l,n;return l=e.replace(/_/g,"").toLowerCase(),n=l[0]==="-"?-1:1,"+-".indexOf(l[0])>=0&&(l=l.slice(1)),l===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:l===".nan"?NaN:n*parseFloat(l,10)}var oB=/^[-+]?[0-9]+e/;function tB(e,l){var n;if(isNaN(e))switch(l){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(l){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(l){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Va.isNegativeZero(e))return"-0.0";return n=e.toString(10),oB.test(n)?n.replace("e",".e"):n}function aB(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Va.isNegativeZero(e))}var rB=new ne("tag:yaml.org,2002:float",{kind:"scalar",resolve:lB,construct:nB,predicate:aB,represent:tB,defaultStyle:"lowercase"}),cB=Rv.extend({implicit:[zv,Kv,sB,rB]}),pB=cB,$i=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Si=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function iB(e){return e===null?!1:$i.exec(e)!==null||Si.exec(e)!==null}function uB(e){var l,n,t,a,r,c,p,i=0,u=null,d,y,f;if(l=$i.exec(e),l===null&&(l=Si.exec(e)),l===null)throw new Error("Date resolve error");if(n=+l[1],t=+l[2]-1,a=+l[3],!l[4])return new Date(Date.UTC(n,t,a));if(r=+l[4],c=+l[5],p=+l[6],l[7]){for(i=l[7].slice(0,3);i.length<3;)i+="0";i=+i}return l[9]&&(d=+l[10],y=+(l[11]||0),u=(d*60+y)*6e4,l[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,t,a,r,c,p,i)),u&&f.setTime(f.getTime()-u),f}function yB(e){return e.toISOString()}var dB=new ne("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:iB,construct:uB,instanceOf:Date,represent:yB});function fB(e){return e==="<<"||e===null}var hB=new ne("tag:yaml.org,2002:merge",{kind:"scalar",resolve:fB}),Oa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function mB(e){if(e===null)return!1;var l,n,t=0,a=e.length,r=Oa;for(n=0;n<a;n++)if(l=r.indexOf(e.charAt(n)),!(l>64)){if(l<0)return!1;t+=6}return t%8===0}function vB(e){var l,n,t=e.replace(/[\r\n=]/g,""),a=t.length,r=Oa,c=0,p=[];for(l=0;l<a;l++)l%4===0&&l&&(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)),c=c<<6|r.indexOf(t.charAt(l));return n=a%4*6,n===0?(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)):n===18?(p.push(c>>10&255),p.push(c>>2&255)):n===12&&p.push(c>>4&255),new Uint8Array(p)}function BB(e){var l="",n=0,t,a,r=e.length,c=Oa;for(t=0;t<r;t++)t%3===0&&t&&(l+=c[n>>18&63],l+=c[n>>12&63],l+=c[n>>6&63],l+=c[n&63]),n=(n<<8)+e[t];return a=r%3,a===0?(l+=c[n>>18&63],l+=c[n>>12&63],l+=c[n>>6&63],l+=c[n&63]):a===2?(l+=c[n>>10&63],l+=c[n>>4&63],l+=c[n<<2&63],l+=c[64]):a===1&&(l+=c[n>>2&63],l+=c[n<<4&63],l+=c[64],l+=c[64]),l}function AB(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var _B=new ne("tag:yaml.org,2002:binary",{kind:"scalar",resolve:mB,construct:vB,predicate:AB,represent:BB}),gB=Object.prototype.hasOwnProperty,DB=Object.prototype.toString;function CB(e){if(e===null)return!0;var l=[],n,t,a,r,c,p=e;for(n=0,t=p.length;n<t;n+=1){if(a=p[n],c=!1,DB.call(a)!=="[object Object]")return!1;for(r in a)if(gB.call(a,r))if(!c)c=!0;else return!1;if(!c)return!1;if(l.indexOf(r)===-1)l.push(r);else return!1}return!0}function EB(e){return e!==null?e:[]}var FB=new ne("tag:yaml.org,2002:omap",{kind:"sequence",resolve:CB,construct:EB}),kB=Object.prototype.toString;function xB(e){if(e===null)return!0;var l,n,t,a,r,c=e;for(r=new Array(c.length),l=0,n=c.length;l<n;l+=1){if(t=c[l],kB.call(t)!=="[object Object]"||(a=Object.keys(t),a.length!==1))return!1;r[l]=[a[0],t[a[0]]]}return!0}function bB(e){if(e===null)return[];var l,n,t,a,r,c=e;for(r=new Array(c.length),l=0,n=c.length;l<n;l+=1)t=c[l],a=Object.keys(t),r[l]=[a[0],t[a[0]]];return r}var wB=new ne("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:xB,construct:bB}),$B=Object.prototype.hasOwnProperty;function SB(e){if(e===null)return!0;var l,n=e;for(l in n)if($B.call(n,l)&&n[l]!==null)return!1;return!0}function PB(e){return e!==null?e:{}}var VB=new ne("tag:yaml.org,2002:set",{kind:"mapping",resolve:SB,construct:PB});pB.extend({implicit:[dB,hB],explicit:[_B,FB,wB,VB]});function vc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var OB=new Array(256),LB=new Array(256);for(var en=0;en<256;en++)OB[en]=vc(en)?1:0,LB[en]=vc(en);function TB(e){return Array.from(new Set(e))}function Bc(...e){let l,n,t;e.length===1?(l=0,t=1,[n]=e):[l,n,t=1]=e;const a=[];let r=l;for(;r<n;)a.push(r),r+=t||1;return a}function Pi(e,l){if(!l||l==="all"||l==="*")return Bc(1,e+1);const n=[];for(const t of l.split(/[,;]/g))if(!t.includes("-"))n.push(+t);else{const[a,r]=t.split("-",2);n.push(...Bc(+a,r?+r+1:e+1))}return TB(n).filter(t=>t<=e).sort((t,a)=>t-a)}function NB(e){const l=L(()=>e.value.path),n=L(()=>qs.length-1),t=L(()=>parseInt(l.value.split(/\//g).slice(-1)[0])||1),a=L(()=>Ta(t.value)),r=L(()=>qs.find(f=>f.path===`${t.value}`)),c=L(()=>{var f,m,v;return(v=(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:v.id}),p=L(()=>{var f,m;return((m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.layout)||(t.value===1?"cover":"default")}),i=L(()=>qs.find(f=>f.path===`${Math.min(qs.length,t.value+1)}`)),u=L(()=>qs.filter(f=>{var m,v;return(v=(m=f.meta)==null?void 0:m.slide)==null?void 0:v.title}).reduce((f,m)=>(Na(f,m),f),[])),d=L(()=>Ma(u.value,r.value)),y=L(()=>Ra(d.value));return{route:e,path:l,total:n,currentPage:t,currentPath:a,currentRoute:r,currentSlideId:c,currentLayout:p,nextRoute:i,rawTree:u,treeWithActiveStatuses:d,tree:y}}function MB(e,l,n){const t=ns(0);Se(()=>{Bl.afterEach(async()=>{await Se(),t.value+=1})});const a=L(()=>{var i,u;return t.value,((u=(i=l.value)==null?void 0:i.meta)==null?void 0:u.__clicksElements)||[]}),r=L(()=>{var i,u;return+(((u=(i=l.value)==null?void 0:i.meta)==null?void 0:u.clicks)??a.value.length)}),c=L(()=>n.value<qs.length-1||e.value<r.value),p=L(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:a,clicksTotal:r,hasNext:c,hasPrev:p}}const RB=["id"],IB=Ms({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:l}){const n=e,t=Ie(n,"clicksElements",l),a=L(()=>({height:`${Ea}px`,width:`${vl}px`})),r=ze();Ul(()=>Promise.resolve().then(()=>Qh),void 0).then(u=>r.value=u.default);const c=L(()=>n.clicks),p=MB(c,n.nav.currentRoute,n.nav.currentPage),i=L(()=>`${n.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return Be($,se({nav:{...n.nav,...p},configs:Ls,themeConfigs:L(()=>Ls.themeConfig)})),(u,d)=>{var y;return A(),G("div",{id:C(i),class:"slide-container",style:Xs(C(a))},[F(C(xi)),F(C(Pa),{is:(y=e.route)==null?void 0:y.component,"clicks-elements":C(t),"onUpdate:clicks-elements":d[0]||(d[0]=f=>Fs(t)?t.value=f:null),clicks:C(c),"clicks-disabled":!1,class:js(C(Sa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),C(r)?(A(),O(C(r),{key:0,page:+e.route.path},null,8,["page"])):gs("v-if",!0),F(C(ki))],12,RB)}}}),Ac=S(IB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),jB=Ms({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const l=e;b($);const n=se(((r=l.route.meta)==null?void 0:r.__clicksElements)||[]),t=L(()=>l.route),a=NB(t);return(c,p)=>(A(),G(ks,null,[F(Ac,{"clicks-elements":n,"onUpdate:clicks-elements":p[0]||(p[0]=i=>n=i),clicks:0,nav:C(a),route:C(t)},null,8,["clicks-elements","nav","route"]),C(Oi)?gs("v-if",!0):(A(!0),G(ks,{key:0},eo(n.length,i=>(A(),O(Ac,{key:i,clicks:i,nav:C(a),route:C(t)},null,8,["clicks","nav","route"]))),128))],64))}}),HB=S(jB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlide.vue"]]),zB={id:"print-content"},WB=Ms({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const l=e;b($);const n=L(()=>l.width),t=L(()=>l.width/ml),a=L(()=>n.value/t.value),r=L(()=>a.value<ml?n.value/vl:t.value*ml/vl);let c=qs.slice(0,-1);Ue.value.query.range&&(c=Pi(c.length,Ue.value.query.range).map(u=>c[u-1]));const p=L(()=>({"select-none":!Ls.selectable,"slidev-code-line-numbers":Ls.lineNumbers}));return Be(Np,r),(i,u)=>(A(),G("div",{id:"print-container",class:js(C(p))},[s("div",zB,[(A(!0),G(ks,null,eo(C(c),d=>(A(),O(HB,{key:d.path,route:d},null,8,["route"]))),128))]),nl(i.$slots,"controls")],2))}});const UB=S(WB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintContainer.vue"]]),qB=Ms({__name:"Print",setup(e){b($);function l(n,{slots:t}){if(t.default)return lt("style",t.default())}return mn(()=>{La?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,t)=>(A(),G(ks,null,[F(l,null,{default:g(()=>[o(" @page { size: "+Js(C(vl))+"px "+Js(C(Ea))+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Xs(C(Fa))},[F(UB,{class:"w-full h-full",style:Xs({background:"var(--slidev-slide-container-background, black)"}),width:C(Rl).width.value},null,8,["style","width"])],4)],64))}});const KB=S(qB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Print.vue"]]);const JB={class:"slidev-layout end"},YB={__name:"end",setup(e){return b($),(l,n)=>(A(),G("div",JB," END "))}},ZB=S(YB,[["__scopeId","data-v-b05edd45"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/end.vue"]]),GB="/vue-3-practices/logo.svg";function _c(e){return e.startsWith("/")?"/vue-3-practices"+e.slice(1):e}function QB(e,l=!1){const n=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),t={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?l?`linear-gradient(#0005, #0008), url(${_c(e)})`:`url("${_c(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const XB={class:"my-auto w-full"},sA=Ms({__name:"cover",props:{background:{default:""}},setup(e){const l=e;b($);const n=L(()=>QB(l.background,!0));return(t,a)=>(A(),G("div",{class:"slidev-layout cover",style:Xs(C(n))},[s("div",XB,[nl(t.$slots,"default")])],4))}}),eA=S(sA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/theme-default/layouts/cover.vue"]]),lA=s("div",{class:"text-center"},[s("img",{src:GB,alt:"Vue",style:{width:"100px"},class:"inline"})],-1),nA=s("h1",null,"Vue.js",-1),oA={__name:"1",setup(e){const l={theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}};return b($),(n,t)=>(A(),O(eA,q(W(l)),{default:g(()=>[lA,nA]),_:1},16))}},tA=S(oA,[["__file","/@slidev/slides/1.md"]]),aA={class:"slidev-layout default"},rA={__name:"default",setup(e){return b($),(l,n)=>(A(),G("div",aA,[nl(l.$slots,"default")]))}},K=S(rA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/default.vue"]]),cA=s("h1",null,"アジェンダ",-1),pA=s("ul",null,[s("li",null,[o("はじめに "),s("ul",null,[s("li",null,"Composition API, 学習環境など")])]),s("li",null,[o("リアクティビティーの探求 "),s("ul",null,[s("li",null,"ref, reactive, toRefs, readonly など")])]),s("li",null,[o("算出プロパティ（computed） "),s("ul",null,[s("li",null,"computed")])]),s("li",null,[o("ウォッチャ（watch） "),s("ul",null,[s("li",null,"watch")])]),s("li",null,[o("テンプレート構文の説明 "),s("ul",null,[s("li",null,"mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model など")])]),s("li",null,[o("コンポーネント "),s("ul",null,[s("li",null,"props, emit, slot など")])]),s("li",null,[o("Vue アプリケーション開発に必要な周辺ライブラリ "),s("ul",null,[s("li",null,"throttle-debounce, fetch, Vue Router など")])])],-1),iA={__name:"2",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[cA,pA]),_:1},16))}},uA=S(iA,[["__file","/@slidev/slides/2.md"]]),yA=s("h1",null,"はじめに",-1),dA=s("h2",null,"Vue.js とは？",-1),fA=s("p",null,"Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。",-1),hA={class:"pt-4 text-sm"},mA={href:"https://ja.vuejs.org/guide/introduction.html"},vA={__name:"3",setup(e){const l={};return b($),(n,t)=>{const a=Fi;return A(),O(K,q(W(l)),{default:g(()=>[yA,dA,fA,s("div",hA,[s("a",mA,[F(a,{class:"inline"}),o(" 公式サイト ")])])]),_:1},16)}}},BA=S(vA,[["__file","/@slidev/slides/3.md"]]),AA=s("h1",null,"本講座のすすめかた",-1),_A=s("p",null,"どのような形式で進行するのかの確認",-1),gA=s("p",null,"ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。",-1),DA=s("p",null,"適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。",-1),CA={__name:"4",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[AA,_A,gA,DA]),_:1},16))}},EA=S(CA,[["__file","/@slidev/slides/4.md"]]),FA=s("h1",null,"準備",-1),kA=s("p",null,"使用するツールの確認とセットアップ",-1),xA=s("p",null,[o("本講座におけるハンズオン、演習、サンプルの閲覧は "),s("a",{href:"https://stackblitz.com/",target:"_blank",rel:"noopener"},"StackBlitz"),o(" でおこないます。")],-1),bA=s("p",null,"StackBlitz はブラウザ上で動作するオンライン IDE（統合開発環境）です。",-1),wA=s("p",null,"以下をやってみましょう",-1),$A=s("ol",null,[s("li",null,[o("動作環境を"),s("a",{href:"https://developer.stackblitz.com/docs/platform/browser-support/",target:"_blank",rel:"noopener"},"こちら"),o("で確認してブラウザを用意")]),s("li",null,[o("用意したブラウザで "),s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev"),o(" にアクセス")]),s("li",null,[s("code",null,"<template>Hello World!</template>"),o(" と書いてみる")]),s("li",null,[o("右カラムに "),s("code",null,"Hello World!"),o(" と表示されることを確認")])],-1),SA=s("p",null,"講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。",-1),PA={__name:"5",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[FA,kA,xA,bA,wA,$A,SA]),_:1},16))}},VA=S(PA,[["__file","/@slidev/slides/5.md"]]),OA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},LA=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),TA=[LA];function NA(e,l){return A(),G("svg",OA,TA)}const MA={name:"ph-clipboard",render:NA},RA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},IA=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),jA=[IA];function HA(e,l){return A(),G("svg",RA,jA)}const zA={name:"ph-check-circle",render:HA},WA=["title"],UA=Ms({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const l=e;b($);const n=b(Op),t=b(Lp),a=b(Tp);function r(y=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",v=m.length;for(let _=0;_<y;_++)f.push(m.charAt(Math.floor(Math.random()*v)));return f.join("")}const c=ns(),p=Cl();Zo(()=>{const y=l.at==null?t==null?void 0:t.value.length:l.at,f=L(()=>a!=null&&a.value?l.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(y||0)),l.ranges.length-1)),m=L(()=>l.ranges[f.value]||"");if(l.ranges.length>=2&&!(a!=null&&a.value)){const v=r(),_=Wy(l.ranges.length-1).map(D=>v+D);t!=null&&t.value&&(t.value.push(..._),Go(()=>_.forEach(D=>zy(t.value,D)),p))}mn(()=>{if(!c.value)return;const _=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const D of _){const P=Array.from(D.querySelectorAll(".line")),k=Pi(P.length,m.value);if(P.forEach((w,N)=>{const Q=k.includes(N+1);w.classList.toggle(Hy,!0),w.classList.toggle("highlighted",Q),w.classList.toggle("dishonored",!Q)}),l.maxHeight){const w=D.querySelector(".line.highlighted");w&&w.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:i,copy:u}=Id();function d(){var f,m;const y=(m=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;y&&u(y)}return(y,f)=>{const m=zA,v=MA;return A(),G("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:Xs({"max-height":l.maxHeight,"overflow-y":l.maxHeight?"scroll":void 0})},[nl(y.$slots,"default"),C(Ls).codeCopy?(A(),G("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:C(i)?"Copied":"Copy",onClick:f[0]||(f[0]=_=>d())},[C(i)?(A(),O(m,{key:0,class:"p-2 w-8 h-8"})):(A(),O(v,{key:1,class:"p-2 w-8 h-8"}))],8,WA)):gs("v-if",!0)],4)}}}),us=S(UA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),qA=s("h1",null,"Vue には 2 つの API があります",-1),KA={class:"flex gap-8"},JA=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),YA=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),ZA=s("p",null,"現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。",-1),GA={__name:"6",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[qA,s("div",KA,[s("div",null,[o(" Options API "),F(a,Z({},{ranges:[""]}),{default:g(()=>[JA]),_:1},16)]),s("div",null,[o(" Composition API "),F(a,Z({},{ranges:[""]}),{default:g(()=>[YA]),_:1},16)])]),ZA]),_:1},16)}}},QA=S(GA,[["__file","/@slidev/slides/6.md"]]),XA="/vue-3-practices/apis.png",s9=s("h1",null,"Composition API のメリット",-1),e9=s("p",null,"Vue の機能ではなく、論理的な関心事でコードをまとめることができる",-1),l9=s("img",{src:XA,class:"h-5/6"},null,-1),n9={__name:"7",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[s9,e9,l9]),_:1},16))}},o9=S(n9,[["__file","/@slidev/slides/7.md"]]),t9=s("h1",null,"Vue には様々なシンタックスシュガー（糖衣構文）があります",-1),a9={class:"flex gap-8"},r9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),c9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),p9=s("p",null,"現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。",-1),i9={__name:"8",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[t9,s("div",a9,[s("div",null,[o(" script "),F(a,Z({},{ranges:[""]}),{default:g(()=>[r9]),_:1},16)]),s("div",null,[o(" script setup "),F(a,Z({},{ranges:[""]}),{default:g(()=>[c9]),_:1},16)])]),p9]),_:1},16)}}},u9=S(i9,[["__file","/@slidev/slides/8.md"]]),y9={class:"prose"},d9={__name:"FirstSample",setup(e){b($);const l=ns(0);function n(){l.value+=1}return(t,a)=>(A(),G("div",y9,[o(Js(l.value)+" ",1),s("button",{onClick:n},"+")]))}},f9=S(d9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/FirstSample.vue"]]),h9=s("h1",null,"まずは書いてみる",-1),m9={class:"flex gap-8"},v9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),B9={__name:"9",setup(e){const l={};return b($),(n,t)=>{const a=us,r=f9;return A(),O(K,q(W(l)),{default:g(()=>[h9,s("div",m9,[F(a,Z({},{ranges:[""]}),{default:g(()=>[v9]),_:1},16),s("div",null,[o(" 動作サンプル "),F(r)])])]),_:1},16)}}},A9=S(B9,[["__file","/@slidev/slides/9.md"]]),_9=s("h1",null,"リアクティビティーの探求",-1),g9={class:"flex gap-4"},D9=s("div",null,[s("video",{controls:"",loop:"",style:{height:"30vh"},src:"https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"}),s("p",null,[s("a",{href:"https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity"},"参考")])],-1),C9=s("p",null,"表計算ソフトと同じ手順をコードにすると",-1),E9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5のまま（期待は6）")])])])],-1),F9={__name:"10",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[_9,s("div",g9,[D9,s("div",null,[C9,F(a,Z({},{ranges:[""]}),{default:g(()=>[E9]),_:1},16)])])]),_:1},16)}}},k9=S(F9,[["__file","/@slidev/slides/10.md"]]),x9=s("h1",null,"リアクティビティーの探求",-1),b9={class:"flex gap-4"},w9=s("div",null,[s("p",null,"表計算ソフトと同じことをおこなうには"),s("ol",null,[s("li",null,"値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。"),s("li",null,"値の変更を検知する。 例: val1 = 3 と入れるとき。"),s("li",null,"最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。")]),s("p",null,"Vue には 1. 2. 3. のためのしくみがある")],-1),$9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 3.")])])])],-1),S9={__name:"11",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[x9,s("div",b9,[w9,s("div",null,[F(a,Z({},{ranges:[""]}),{default:g(()=>[$9]),_:1},16)])])]),_:1},16)}}},P9=S(S9,[["__file","/@slidev/slides/11.md"]]),V9={__name:"ReactiveSample",setup(e){b($);const l=ns(2),n=ns(3),t=L(()=>l.value+n.value);return(a,r)=>(A(),G("div",null,[s("p",null,[o(" val1: "),Pe(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c)},null,512),[[qn,l.value]])]),s("p",null,[o(" val2: "),Pe(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":r[1]||(r[1]=c=>n.value=c)},null,512),[[qn,n.value]])]),s("p",null,"sum: "+Js(C(t)),1)]))}},O9=S(V9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ReactiveSample.vue"]]),L9=s("h1",null,"リアクティビティーの探求（ref によるリアクティブな値の参照）",-1),T9=s("p",null,[s("code",null,"ref"),o(" を使った値を操作する場合、"),s("code",null,"setup"),o(" 関数内では "),s("code",null,"value"),o(" プロパティにアクセスする。 "),s("code",null,"template"),o(" 内では変数（定数）そのものを参照するだけで値を得られる。")],-1),N9={class:"flex gap-8"},M9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),R9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),I9={__name:"12",setup(e){const l={};return b($),(n,t)=>{const a=us,r=O9;return A(),O(K,q(W(l)),{default:g(()=>[L9,T9,s("div",N9,[F(a,Z({},{ranges:[""]}),{default:g(()=>[M9]),_:1},16),F(a,Z({},{ranges:[""]}),{default:g(()=>[R9]),_:1},16),F(r)])]),_:1},16)}}},j9=S(I9,[["__file","/@slidev/slides/12.md"]]),H9=s("h1",null,"リアクティビティーの探求（リアクティブな値をオブジェクトにまとめる）",-1),z9=s("p",null,[o("リアクティブにしたいデータがオブジェクトの場合、"),s("code",null,"reactive"),o(" を使う")],-1),W9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),U9={__name:"13",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[H9,z9,F(a,Z({},{ranges:[""]}),{default:g(()=>[W9]),_:1},16)]),_:1},16)}}},q9=S(U9,[["__file","/@slidev/slides/13.md"]]),K9=s("h1",null,"リアクティビティーの探求（オブジェクトにまとめたリアクティブな値を取り出す）",-1),J9=s("p",null,[o("前項の "),s("code",null,"reactive"),o(" だと、分割代入しても値が取り出せない。Vue では "),s("code",null,"toRefs"),o(" を使うことで可能になる。")],-1),Y9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Z9={__name:"14",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[K9,J9,F(a,Z({},{ranges:[""]}),{default:g(()=>[Y9]),_:1},16)]),_:1},16)}}},G9=S(Z9,[["__file","/@slidev/slides/14.md"]]),Q9=s("h1",null,"リアクティビティーの探求（リアクティブな値を読み込み専用にする）",-1),X9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),s_={__name:"15",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[Q9,F(a,Z({},{ranges:[""]}),{default:g(()=>[X9]),_:1},16)]),_:1},16)}}},e_=S(s_,[["__file","/@slidev/slides/15.md"]]),l_=s("h1",null,"算出プロパティ（computed）",-1),n_=s("p",null,[o("あるリアクティブな値を元に計算結果を返したい場合、"),s("code",null,"computed"),o(" 関数を利用する")],-1),o_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),t_={__name:"16",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[l_,n_,F(a,Z({},{ranges:[""]}),{default:g(()=>[o_]),_:1},16)]),_:1},16)}}},a_=S(t_,[["__file","/@slidev/slides/16.md"]]),r_=s("h1",null,"算出プロパティ（computed）",-1),c_=s("p",null,[s("code",null,"get"),o(),s("code",null,"set"),o(" 関数を用意することで書込み可能なオブジェクトを作成することができる")],-1),p_={class:"h-sm overflow-y-auto"},i_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),u_={__name:"17",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[r_,c_,s("div",p_,[F(a,Z({},{ranges:[""]}),{default:g(()=>[i_]),_:1},16)])]),_:1},16)}}},y_=S(u_,[["__file","/@slidev/slides/17.md"]]),d_={inject:{$slidev:{from:$}},setup(){const e=()=>Math.random(),l=L(()=>Math.random());return{randomMethods:e,randomComputed:l}}},f_=s("p",null,"関数呼び出しの場合",-1),h_={class:"use-methods"},m_=s("p",null,"computedを使った場合",-1),v_={class:"use-computed"};function B_(e,l,n,t,a,r){return A(),G(ks,null,[f_,s("ol",h_,[s("li",null,Js(t.randomMethods()),1),s("li",null,Js(t.randomMethods()),1),s("li",null,Js(t.randomMethods()),1)]),m_,s("ol",v_,[s("li",null,Js(t.randomComputed),1),s("li",null,Js(t.randomComputed),1),s("li",null,Js(t.randomComputed),1)])],64)}const A_=S(d_,[["render",B_],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ComputedMethods.vue"]]),__=s("h1",null,"computed と関数呼び出しの違い",-1),g_=s("p",null,[o("関数呼び出しは都度呼び出される毎に実行するのに対し、"),s("code",null,"computed"),o(" 内で参照しているリアクティブな値が変更されない限り、"),s("code",null,"computed"),o(" は一度キャッシュされた結果を返す。 うまく使い分けるとパフォーマンスの向上に役立てる。")],-1),D_={class:"flex gap-4"},C_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),E_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),F_={__name:"18",setup(e){const l={};return b($),(n,t)=>{const a=us,r=A_;return A(),O(K,q(W(l)),{default:g(()=>[__,g_,s("div",D_,[F(a,Z({},{ranges:[""]}),{default:g(()=>[C_]),_:1},16),F(a,Z({},{ranges:[""]}),{default:g(()=>[E_]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},k_=S(F_,[["__file","/@slidev/slides/18.md"]]),x_=s("h1",null,"ウォッチャ（watch）",-1),b_=s("p",null,"特定のデータを監視し、変更があったときに処理を行える、引数として、新しい値とその前の値を取得できる。",-1),w_={class:"h-sm overflow-y-auto"},$_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),S_={__name:"19",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[x_,b_,s("div",w_,[F(a,Z({},{ranges:[""]}),{default:g(()=>[$_]),_:1},16)])]),_:1},16)}}},P_=S(S_,[["__file","/@slidev/slides/19.md"]]),V_=s("h1",null,"ウォッチャ（watch）",-1),O_=s("p",null,"配列を監視する場合、複数のデータソースを同時に監視できる",-1),L_={class:"h-sm overflow-y-auto"},T_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),N_={__name:"20",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[V_,O_,s("div",L_,[F(a,Z({},{ranges:[""]}),{default:g(()=>[T_]),_:1},16)])]),_:1},16)}}},M_=S(N_,[["__file","/@slidev/slides/20.md"]]),R_=s("h1",null,"テンプレート構文",-1),I_=s("ul",null,[s("li",null,"展開"),s("li",null,"ディレクティブ"),s("li",null,"バインディング"),s("li",null,"イベントハンドリング"),s("li",null,"条件付きレンダリング"),s("li",null,"リストレンダリング"),s("li",null,"フォーム入力バインディング")],-1),j_={__name:"21",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[R_,I_]),_:1},16))}},H_=S(j_,[["__file","/@slidev/slides/21.md"]]),z_=s("h1",null,"展開",-1),W_=s("p",null,"Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる",-1),U_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),q_=s("p",null,"結果",-1),K_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"Message: Hello!")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"Message: Hello!")])])])],-1),J_={__name:"22",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[z_,W_,F(a,Z({},{ranges:[""]}),{default:g(()=>[U_]),_:1},16),q_,K_]),_:1},16)}}},Y_=S(J_,[["__file","/@slidev/slides/22.md"]]),Z_={__name:"CounterSample",setup(e){b($);const l=ns(10);return setInterval(()=>{l.value+=1},1e3),(n,t)=>(A(),G("div",null,"Counter: "+Js(l.value),1))}},G_=S(Z_,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/CounterSample.vue"]]),Q_=s("h1",null,"展開（リアクティブな値を使うと）",-1),X_=s("p",{class:"text-sm"}," counterを1秒ごとに増やしていく ",-1),s1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),e1=s("p",null,"結果",-1),l1={__name:"23",setup(e){const l={};return b($),(n,t)=>{const a=us,r=G_;return A(),O(K,q(W(l)),{default:g(()=>[Q_,X_,F(a,Z({},{ranges:[""]}),{default:g(()=>[s1]),_:1},16),e1,s("div",null,[F(r)])]),_:1},16)}}},n1=S(l1,[["__file","/@slidev/slides/23.md"]]),o1=s("h1",null,"ディレクティブ",-1),t1=s("ul",null,[s("li",null,"ディレクティブは Vue によって提供される特別な属性"),s("li",null,"v- から始まる"),s("li",null,[o("特定のディレクティブ（v-bind と v-on）は省略記法がある（例："),s("code",null,":href"),o(),s("code",null,"@click"),o("）")]),s("li",null,[o("特定のディレクティブは引数を渡すことができる（例："),s("code",null,"v-on:click"),o("）")])],-1),a1=s("p",null,"ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい",-1),r1={__name:"24",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[o1,t1,a1]),_:1},16))}},c1=S(r1,[["__file","/@slidev/slides/24.md"]]),p1=s("h1",null,"バインディング",-1),i1=s("p",null,[o("「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 "),s("code",null,"v-bind"),o(" ディレクティブを使う")],-1),u1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-bind:href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"url"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js公式サイト "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"url"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"https://ja.vuejs.org/"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-bind:href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"url"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js公式サイト "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"url"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"https://ja.vuejs.org/"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),y1=s("p",null,"省略するとこのように書ける",-1),d1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"url"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js公式サイト "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"url"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js公式サイト "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),f1={__name:"25",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[p1,i1,s("div",null,[F(a,Z({},{ranges:[""]}),{default:g(()=>[u1]),_:1},16),y1]),F(a,Z({},{ranges:[""]}),{default:g(()=>[d1]),_:1},16)]),_:1},16)}}},h1=S(f1,[["__file","/@slidev/slides/25.md"]]),m1=s("h1",null,"バインディング（クラスとスタイル）",-1),v1=s("p",null,"クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある",-1),B1={class:"flex gap-6"},A1=s("p",{class:"text-xs"},"オブジェクト構文",-1),_1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),g1=s("p",{class:"text-xs"},"配列構文はこのように書ける",-1),D1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),C1=s("p",{class:"text-xs"},"組み合わせることもできる",-1),E1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red, { red }]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red, { red }]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),F1=s("p",{class:"text-xs"},"スタイル属性にもオブジェクト構文と配列構文がある",-1),k1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":style"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},`"{ color: 'red' }"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":style"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},`"{ color: 'red' }"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),x1={__name:"26",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[m1,v1,s("div",B1,[s("div",null,[A1,F(a,Z({},{ranges:[""]}),{default:g(()=>[_1]),_:1},16)]),s("div",null,[g1,F(a,Z({},{ranges:[""]}),{default:g(()=>[D1]),_:1},16),C1,F(a,Z({},{ranges:[""]}),{default:g(()=>[E1]),_:1},16),F1,F(a,Z({},{ranges:[""]}),{default:g(()=>[k1]),_:1},16)])])]),_:1},16)}}},b1=S(x1,[["__file","/@slidev/slides/26.md"]]),w1=s("h1",null,"イベントハンドリング",-1),$1=s("p",null,[s("code",null,"v-on"),o(" ディレクティブは HTML 要素などの"),s("a",{href:"https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events",target:"_blank",rel:"noopener"},"イベント"),o("操作に使われる。"),s("code",null,":"),o("の後の引数でイベントの種類を指定できる")],-1),S1={class:"h-60 mb-6 overflow-y-auto"},P1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),V1=s("p",null,"省略するとこのようにかける",-1),O1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"counter += 1"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"counter += 1"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),L1={__name:"27",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[w1,$1,s("div",S1,[F(a,Z({},{ranges:[""]}),{default:g(()=>[P1]),_:1},16)]),V1,F(a,Z({},{ranges:[""]}),{default:g(()=>[O1]),_:1},16)]),_:1},16)}}},T1=S(L1,[["__file","/@slidev/slides/27.md"]]),N1=s("h1",null,"イベントハンドリング（関数名を属性値として使う）",-1),M1=s("p",null,"関数を渡すと複雑な処理が書きやすい",-1),R1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),I1={__name:"28",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[N1,M1,F(a,Z({},{ranges:[""]}),{default:g(()=>[R1]),_:1},16)]),_:1},16)}}},j1=S(I1,[["__file","/@slidev/slides/28.md"]]);let H1=e=>crypto.getRandomValues(new Uint8Array(e)),z1=(e,l,n)=>{let t=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*t*l/e.length);return(r=l)=>{let c="";for(;;){let p=n(a),i=a;for(;i--;)if(c+=e[p[i]&t]||"",c.length===r)return c}}},W1=(e,l=21)=>z1(e,l,H1);const U1=["width","height"],q1=["id"],K1=["fill"],J1=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],Y1=Ms({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){b($);const n=W1("abcedfghijklmn",10)();return(t,a)=>(A(),G("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",{id:C(n),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,K1)],8,q1)]),s("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${C(n)})`},null,8,J1)],8,U1))}}),ot=S(Y1,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/Arrow.vue"]]),Z1=s("h1",null,"条件付きレンダリング",-1),G1=s("p",null,[s("code",null,"v-if"),o(" あるいは "),s("code",null,"v-show"),o(" によって条件に応じてレンダリングする範囲を変更することができる。 "),s("code",null,"v-show"),o(" は見た目上非表示にするが "),s("code",null,"v-if"),o(" は DOM 要素も取り除く。")],-1),Q1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),X1={__name:"29",setup(e){const l={};return b($),(n,t)=>{const a=us,r=ot,c=Qo("click");return A(),O(K,q(W(l)),{default:g(()=>[Z1,G1,F(a,Z({},{ranges:["all","3","8","all"]}),{default:g(()=>[Q1]),_:1},16),Pe(F(r,{x1:"350",y1:"370",x2:"190",y2:"310",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,2]])]),_:1},16)}}},sg=S(X1,[["__file","/@slidev/slides/29.md"]]),eg=s("h1",null,"条件付きレンダリング（v-if と v-show の使い分け）",-1),lg=s("div",{class:"mb-6"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}}),s("th",{style:{"text-align":"left"}},"v-if"),s("th",{style:{"text-align":"left"}},"v-show")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},"初期コスト"),s("td",{style:{"text-align":"left"}},"低い"),s("td",{style:{"text-align":"left"}},"高い")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"切り替えコスト"),s("td",{style:{"text-align":"left"}},"高い"),s("td",{style:{"text-align":"left"}},"低い")])])])],-1),ng=s("ul",null,[s("li",null,[o("コンポーネントをマウントしてからあまり変化しないケースであれば "),s("code",null,"v-if"),o("を使う")]),s("li",null,[o("コンポーネントをマウントしてから頻繁に変化するケースであれば "),s("code",null,"v-show"),o("を使う")])],-1),og={__name:"30",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[eg,lg,ng]),_:1},16))}},tg=S(og,[["__file","/@slidev/slides/30.md"]]),ag=s("h1",null,"条件付きレンダリング",-1),rg=s("p",null,[s("code",null,"v-if v-else v-else-if"),o(" でレンダリングの条件分岐ができる。 "),s("code",null,"template"),o(" 要素に対して使うことでグルーピングすることもできる。")],-1),cg={class:"flex gap-4"},pg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),ig=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),ug={__name:"31",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[ag,rg,s("div",cg,[F(a,Z({},{ranges:[""]}),{default:g(()=>[pg]),_:1},16),F(a,Z({},{ranges:[""]}),{default:g(()=>[ig]),_:1},16)])]),_:1},16)}}},yg=S(ug,[["__file","/@slidev/slides/31.md"]]),dg=s("h1",null,"リストレンダリング",-1),fg=s("p",null,"配列あるいはオブジェクトをもとに反復した要素の表示ができる。",-1),hg={class:"flex gap-8"},mg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),vg=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),Bg={__name:"32",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[dg,fg,s("div",hg,[F(a,Z({},{ranges:[""]}),{default:g(()=>[mg]),_:1},16),vg])]),_:1},16)}}},Ag=S(Bg,[["__file","/@slidev/slides/32.md"]]),_g=s("h1",null,[o("リストレンダリング（"),s("code",null,"key"),o(" 属性の付与）")],-1),gg=s("p",null,[o("要素の再利用と並び替えを考慮する場合、一意な値を "),s("code",null,"key"),o(" 属性に渡す必要がある。")],-1),Dg={class:"flex gap-8"},Cg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Eg=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),Fg={__name:"33",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[_g,gg,s("div",Dg,[F(a,Z({},{ranges:[""]}),{default:g(()=>[Cg]),_:1},16),Eg])]),_:1},16)}}},kg=S(Fg,[["__file","/@slidev/slides/33.md"]]),xg=s("h1",null,[o("リストレンダリング（添字による "),s("code",null,"key"),o(" 属性の付与）")],-1),bg=s("p",null,"識別子を用意していない場合、添字が得られるので代用すると便利。",-1),wg={class:"flex gap-8"},$g=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Sg=s("div",{class:"flex-shrink w-110"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")]),s("p",null,"ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意")],-1),Pg={__name:"34",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[xg,bg,s("div",wg,[F(a,Z({},{ranges:["all","4"]}),{default:g(()=>[$g]),_:1},16),Sg])]),_:1},16)}}},Vg=S(Pg,[["__file","/@slidev/slides/34.md"]]),Og={id:"two-way-binding"},Lg={__name:"TwoWayBindingSample",setup(e){b($);const l=ns("Hello Vue!");return(n,t)=>(A(),G("div",Og,[s("p",null,Js(l.value),1),Pe(s("input",{class:"text-black p-1","onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a)},null,512),[[qn,l.value]])]))}},Tg=S(Lg,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwoWayBindingSample.vue"]]),Ng=s("h1",null,"フォーム入力バインディング",-1),Mg=s("p",null,[s("code",null,"v-model"),o(" によって form の input 要素や textarea 要素、select 要素の入力イベントに応じてデータを更新できるようになる。")],-1),Rg={class:"flex gap-8"},Ig=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),jg={__name:"35",setup(e){const l={};return b($),(n,t)=>{const a=us,r=Tg;return A(),O(K,q(W(l)),{default:g(()=>[Ng,Mg,s("div",Rg,[F(a,Z({},{ranges:[""]}),{default:g(()=>[Ig]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},Hg=S(jg,[["__file","/@slidev/slides/35.md"]]),zg=s("h1",null,"コンポーネント",-1),Wg=s("ul",null,[s("li",null,"コンポーネントの基本と構成"),s("li",null,"プロパティを用いた子コンポーネントへのデータの受け渡し"),s("li",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し"),s("li",null,"v-model を用いた親子間コンポーネントのデータの受け渡し"),s("li",null,"v-model を用いない親子間コンポーネントのデータの受け渡し"),s("li",null,"コンポーネントで v-model を使う"),s("li",null,"スロットによるコンテンツ配信")],-1),Ug={__name:"36",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[zg,Wg]),_:1},16))}},qg=S(Ug,[["__file","/@slidev/slides/36.md"]]),Kg="/vue-3-practices/components.png",Jg=s("h1",null,"コンポーネントの基本と構成",-1),Yg=s("p",null,"親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）",-1),Zg=s("img",{src:Kg,alt:"コンポーネントの基本と構成",style:{height:"80%",width:"auto"}},null,-1),Gg={__name:"37",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[Jg,Yg,Zg]),_:1},16))}},Qg=S(Gg,[["__file","/@slidev/slides/37.md"]]),Xg=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),sD=s("p",null,"親コンポーネントから子コンポーネントに 文字列 を渡してみる",-1),eD={class:"flex gap-8"},lD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),nD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),oD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),tD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),aD={__name:"38",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[Xg,sD,s("div",eD,[s("div",null,[lD,F(a,Z({},{ranges:[""]}),{default:g(()=>[nD]),_:1},16)]),s("div",null,[oD,F(a,Z({},{ranges:[""]}),{default:g(()=>[tD]),_:1},16)])])]),_:1},16)}}},rD=S(aD,[["__file","/@slidev/slides/38.md"]]),cD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),pD=s("p",null,"数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある",-1),iD={class:"flex gap-8"},uD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),yD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),dD=s("p",{class:"text-xs"},"静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります",-1),fD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),hD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),mD={__name:"39",setup(e){const l={};return b($),(n,t)=>{const a=us,r=ot,c=Qo("click");return A(),O(K,q(W(l)),{default:g(()=>[cD,pD,s("div",iD,[s("div",null,[uD,F(a,Z({},{ranges:["all","2","all"]}),{default:g(()=>[yD]),_:1},16),dD]),s("div",null,[fD,F(a,Z({},{ranges:[""]}),{default:g(()=>[hD]),_:1},16)])]),Pe(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},vD=S(mD,[["__file","/@slidev/slides/39.md"]]),BD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),AD=s("p",null,"真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),_D={class:"flex gap-8"},gD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),DD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),CD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),ED=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),FD={__name:"40",setup(e){const l={};return b($),(n,t)=>{const a=us,r=ot,c=Qo("click");return A(),O(K,q(W(l)),{default:g(()=>[BD,AD,s("div",_D,[s("div",null,[gD,F(a,Z({},{ranges:["all","2","all"]}),{default:g(()=>[DD]),_:1},16)]),s("div",null,[CD,F(a,Z({},{ranges:[""]}),{default:g(()=>[ED]),_:1},16)])]),Pe(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},kD=S(FD,[["__file","/@slidev/slides/40.md"]]),xD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),bD=s("p",null,"props はデフォルト値を設定することもできる",-1),wD={class:"flex gap-8"},$D=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),SD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),PD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),VD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),OD={__name:"41",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[xD,bD,s("div",wD,[s("div",null,[$D,F(a,Z({},{ranges:[""]}),{default:g(()=>[SD]),_:1},16)]),s("div",null,[PD,F(a,Z({},{ranges:["all","9-12","all"]}),{default:g(()=>[VD]),_:1},16)])])]),_:1},16)}}},LD=S(OD,[["__file","/@slidev/slides/41.md"]]),TD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),ND=s("p",null,"配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),MD={class:"flex gap-8"},RD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),ID=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),jD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),HD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),zD={__name:"42",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[TD,ND,s("div",MD,[s("div",null,[RD,F(a,Z({},{ranges:[""]}),{default:g(()=>[ID]),_:1},16)]),s("div",null,[jD,F(a,Z({},{ranges:[""]}),{default:g(()=>[HD]),_:1},16)])])]),_:1},16)}}},WD=S(zD,[["__file","/@slidev/slides/42.md"]]),UD={__name:"EmitChild",emits:["child-clicked"],setup(e,{emit:l}){b($);function n(){l("child-clicked","Hello!")}return(t,a)=>(A(),G("button",{onClick:n},"emit !"))}},qD=S(UD,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitChild.vue"]]),KD={__name:"EmitParent",setup(e){b($);function l(n){alert(n)}return(n,t)=>(A(),O(qD,{onChildClicked:l}))}},JD=S(KD,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitParent.vue"]]),YD=s("h1",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し",-1),ZD=s("p",null,"子コンポーネントでイベントを発火させることによって可能",-1),GD={class:"flex gap-8"},QD={class:"flex-shrink"},XD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),sC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@child-clicked"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"clicked"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"clicked"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"alert"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@child-clicked"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"clicked"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"clicked"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"alert"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),eC={class:"flex-shrink"},lC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),nC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),oC={class:"flex-shrink-0"},tC=s("p",{class:"text-xs"},"実行サンプル",-1),aC={__name:"43",setup(e){const l={};return b($),(n,t)=>{const a=us,r=JD;return A(),O(K,q(W(l)),{default:g(()=>[YD,ZD,s("div",GD,[s("div",QD,[XD,F(a,Z({},{ranges:[""]}),{default:g(()=>[sC]),_:1},16)]),s("div",eC,[lC,F(a,Z({},{ranges:[""]}),{default:g(()=>[nC]),_:1},16)]),s("div",oC,[tC,F(r)])])]),_:1},16)}}},rC=S(aC,[["__file","/@slidev/slides/43.md"]]),cC={__name:"TwowayChild",props:{modelValue:String},emits:["update:modelValue"],setup(e,{emit:l}){const n=e;b($);const t=L({get:()=>n.modelValue,set:a=>{l("update:modelValue",a)}});return(a,r)=>Pe((A(),G("input",{"onUpdate:modelValue":r[0]||(r[0]=c=>Fs(t)?t.value=c:null)},null,512)),[[qn,C(t)]])}},pC=S(cC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayChild.vue"]]),iC={__name:"TwowayParent",setup(e){b($);const l=ns("Hello !");return(n,t)=>(A(),G(ks,null,[F(pC,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a)},null,8,["modelValue"]),s("p",null,Js(l.value),1)],64))}},uC=S(iC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayParent.vue"]]),yC=s("h1",null,"v-model を用いた親子間コンポーネントのデータの受け渡し",-1),dC=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),fC={class:"flex gap-8"},hC={class:"flex-shrink"},mC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),vC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"v-model"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"title"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ title }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello !"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"v-model"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"title"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ title }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),BC={class:"flex-shrink"},AC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),_C={class:"h-xs overflow-y-auto"},gC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),DC={class:"flex-shrink-0"},CC=s("p",{class:"text-xs"},"実行サンプル",-1),EC={__name:"44",setup(e){const l={};return b($),(n,t)=>{const a=us,r=uC;return A(),O(K,q(W(l)),{default:g(()=>[yC,dC,s("div",fC,[s("div",hC,[mC,F(a,Z({},{ranges:[""]}),{default:g(()=>[vC]),_:1},16)]),s("div",BC,[AC,s("div",_C,[F(a,Z({},{ranges:[""]}),{default:g(()=>[gC]),_:1},16)])]),s("div",DC,[CC,F(r)])])]),_:1},16)}}},FC=S(EC,[["__file","/@slidev/slides/44.md"]]),kC=s("h1",null,"v-model を用いない親子間コンポーネントのデータの受け渡し",-1),xC=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),bC={class:"flex gap-8"},wC={class:"flex-shrink"},$C=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),SC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@update:modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"title = $event"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":modelValue"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"title"'),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"{{ title }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ChildComponent"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"title"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"Hello !"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@update:modelValue"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"title = $event"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":modelValue"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"title"'),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"{{ title }}"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ChildComponent"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"./components/ChildComponent.vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"title"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"Hello !"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),PC=s("ul",null,[s("li",null,"v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）"),s("li",null,"親 → 子：プロパティ"),s("li",null,"子 → 親：イベント"),s("li",null,"このような状態が双方向バインディング（値を束縛しあっている）")],-1),VC={__name:"45",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[kC,xC,s("div",bC,[s("div",wC,[$C,F(a,Z({},{ranges:[""]}),{default:g(()=>[SC]),_:1},16)]),PC])]),_:1},16)}}},OC=S(VC,[["__file","/@slidev/slides/45.md"]]),LC=s("h1",null,"スロットによるコンテンツ配信",-1),TC=s("p",null,"slot を使うと、HTML 要素のようにコンポーネントに子要素を渡すことができる",-1),NC={class:"flex gap-8"},MC={class:"flex-shrink"},RC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),IC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello Component"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello Component"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),jC={class:"flex-shrink"},HC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),zC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ChildComponent: "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ChildComponent: "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),WC=s("div",{class:"text-xs"},[s("p",{class:"text-xs"},"結果例"),s("strong",null,"ChildComponent: "),o("Hello Component ")],-1),UC={__name:"46",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[LC,TC,s("div",NC,[s("div",MC,[RC,F(a,Z({},{ranges:[""]}),{default:g(()=>[IC]),_:1},16)]),s("div",jC,[HC,F(a,Z({},{ranges:[""]}),{default:g(()=>[zC]),_:1},16)])]),WC]),_:1},16)}}},qC=S(UC,[["__file","/@slidev/slides/46.md"]]),KC=s("h1",null,"Vue の基本的な書き方はこれで以上！",-1),JC=s("p",null,"おつかれさまでした",-1),YC=s("p",null,"以下を学んできた",-1),ZC=s("ul",null,[s("li",null,"リアクティブな値の作り方"),s("li",null,"テンプレートの書き方"),s("li",null,"コンポーネントの作り方")],-1),GC=s("p",null,"ここまでは Vue.js を使うなら必ず知っている必要がある内容",-1),QC=s("p",null,"引き続き知らない機能がコードに出てくるかもしれないが、学んだことと関連していると感じられたらそれでよい",-1),XC=s("p",null,"学習の目安",-1),s4=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),e4=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),l4={__name:"47",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[KC,JC,YC,ZC,GC,QC,XC,s4,e4]),_:1},16))}},n4=S(l4,[["__file","/@slidev/slides/47.md"]]),o4=s("h1",null,"次のステップは？",-1),t4=s("p",null,"これから学ぶ内容の確認",-1),a4=s("ul",null,[s("li",null,[o("より具体的な題材でコードを読む・書く "),s("ul",null,[s("li",null,[o("グリッドコンポーネント "),s("ul",null,[s("li",null,"これまで学んだ内容を組み合わせた少し複雑な実装")])]),s("li",null,[o("Markdown エディター "),s("ul",null,[s("li",null,"throttle-debounce によるイベント処理の間引き")])]),s("li",null,[o("ツクロアデザインラボの記事ビューアー "),s("ul",null,[s("li",null,"Fetch API による JSON データの取得"),s("li",null,"Vue Router による画面遷移")])]),s("li",null,[o("靴のギャラリー "),s("ul",null,[s("li",null,"画像の取得と表示"),s("li",null,"あらかじめ用意されたスタイルの適用")])])])]),s("li",null,[o("Nuxt 3 を使う "),s("ul",null,[s("li",null,"Vue.js 単体を使う場合との違い"),s("li",null,"useFetch などの Nuxt 3 特有のヘルパー関数の使い方")])])],-1),r4={__name:"48",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[o4,t4,a4]),_:1},16))}},c4=S(r4,[["__file","/@slidev/slides/48.md"]]),p4=s("h1",null,"グリッドコンポーネント",-1),i4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev")],-1),u4=s("ol",null,[s("li",null,"どんなアプリか：表にデータを流し込んでカラムで並べ替えできる"),s("li",null,"コードの説明"),s("li",null,"行を追加できるようにしよう（20 分程度）")],-1),y4={__name:"49",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[p4,i4,u4]),_:1},16))}},d4=S(y4,[["__file","/@slidev/slides/49.md"]]),f4=s("h1",null,"イベント処理の間引き",-1),h4=s("p",null,"throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる",-1),m4={class:"flex gap-8"},v4={class:"flex-shrink"},B4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),A4={class:"flex-shrink"},_4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),g4=s("p",null,"次のように書き換えると…？",-1),D4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"filterFruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"debounce"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"indexOf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},">="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"filterFruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"debounce"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"indexOf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},">="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")])])])],-1),C4={__name:"50",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[f4,h4,s("div",m4,[s("div",v4,[F(a,Z({},{ranges:[""]}),{default:g(()=>[B4]),_:1},16)]),s("div",A4,[F(a,Z({},{ranges:[""]}),{default:g(()=>[_4]),_:1},16),g4,F(a,Z({},{ranges:[""]}),{default:g(()=>[D4]),_:1},16)])])]),_:1},16)}}},E4=S(C4,[["__file","/@slidev/slides/50.md"]]),F4=s("h1",null,"Markdown エディター",-1),k4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev")],-1),x4=s("ol",null,[s("li",null,"どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる"),s("li",null,"コードの説明"),s("li",null,"右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）")],-1),b4={__name:"51",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[F4,k4,x4]),_:1},16))}},w4=S(b4,[["__file","/@slidev/slides/51.md"]]),$4=s("h1",null,"デザインラボの記事ビューアー",-1),S4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev")],-1),P4=s("ol",null,[s("li",null,[o("どんなアプリか："),s("a",{href:"https://design-lab.tuqulore.com/",target:"_blank",rel:"noopener"},"デザインラボ"),o("というサイトと同じ記事データ（JSON）を取得して一覧から選択表示できる")]),s("li",null,"コードの説明（App コンポーネント、PostList コンポーネント）"),s("li",null,[o("Vue Router を導入しよう（20 分程度） "),s("ul",null,[s("li",null,"Vue プラグインとして Vue アプリケーションインスタンスに登録"),s("li",null,"画面が切り替わるようコンポーネントへの差し替え"),s("li",null,"画面遷移を補足できるコンポーネントへの差し替え")])]),s("li",null,"コードの説明（PostDetail コンポーネント）")],-1),V4={__name:"52",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[$4,S4,P4]),_:1},16))}},O4=S(V4,[["__file","/@slidev/slides/52.md"]]),L4="/vue-3-practices/handson-gallery-shoes-finish.png",T4=s("h1",null,"靴のギャラリー",-1),N4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev")],-1),M4=s("ol",null,[s("li",null,"どんなアプリか：靴のデータ（JSON）を取得してショッピングサイトらしい見た目で一覧表示できる"),s("li",null,"JSON から靴のデータを取得しよう（10 分程度）"),s("li",null,"取得した靴のデータをあらかじめ用意されたスタイルで表示しよう（20 分程度）")],-1),R4=s("img",{class:"pt-2",src:L4,width:"400"},null,-1),I4={__name:"53",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[T4,N4,M4,R4]),_:1},16))}},j4=S(I4,[["__file","/@slidev/slides/53.md"]]),H4=s("h1",null,"Nuxt 3",-1),z4=s("p",null,[s("a",{href:"https://nuxt.com/docs/getting-started/introduction#what-is-nuxt",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/getting-started/introduction#what-is-nuxt")],-1),W4=s("p",null,"効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）",-1),U4=s("ol",null,[s("li",null,[o("リアクティビティと Web コンポーネントの提供："),s("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue.js")]),s("li",null,[o("開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング："),s("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener"},"webpack 5"),o(" と "),s("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite")]),s("li",null,[o("レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける："),s("a",{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener"},"esbuild")]),s("li",null,[o("開発サーバー、サーバーサイドレンダリング、API サーバーの提供："),s("a",{href:"https://github.com/unjs/h3",target:"_blank",rel:"noopener"},"h3")]),s("li",null,[o("ルーティング（画面遷移処理）："),s("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"vue-router")])],-1),q4={__name:"54",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[H4,z4,W4,U4]),_:1},16))}},K4=S(q4,[["__file","/@slidev/slides/54.md"]]),J4=s("h1",null,"Nuxt 3",-1),Y4=s("ul",null,[s("li",null,"Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）"),s("li",null,"Vue コンポーネント等の import を省略できる"),s("li",null,"pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）"),s("li",null,"server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）"),s("li",null,"Nuxt 3 は 2022 年 11 月に安定版がリリースされた")],-1),Z4={__name:"55",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[J4,Y4]),_:1},16))}},G4=S(Z4,[["__file","/@slidev/slides/55.md"]]),Q4=s("h1",null,"Nuxt 3 のハンズオン",-1),X4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-nuxt-playground?file=app.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-nuxt-playground?file=app.vue&terminal=dev")],-1),s7=s("ul",null,[s("li",null,"app.vue"),s("li",null,"pages"),s("li",null,"NuxtLink"),s("li",null,"layouts"),s("li",null,"Data Fetching / server ディレクトリ"),s("li",null,"composables")],-1),e7={__name:"56",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[Q4,X4,s7]),_:1},16))}},l7=S(e7,[["__file","/@slidev/slides/56.md"]]),n7=s("h1",null,"app.vue",-1),o7=s("p",null,[o("app.vue を開いて中身を確認する。"),s("br"),o(" app.vue を削除する。")],-1),t7=s("p",null,[o("Vue 開発環境では App.vue ファイルをルートコンポーネントとして取り扱うことが多いが、Nuxt では app.vue がルートコンポーネントと決められている。ルーティングをおこなう場合、"),s("code",null,"<NuxtPage />"),o(" コンポーネントを挿入する。（Vue Router 導入時に出てきた "),s("code",null,"<RouterView />"),o(" コンポーネントと同じ）")],-1),a7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通レイアウト"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通レイアウト"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),r7=s("p",null,[s("code",null,"<NuxtPage />"),o(" コンポーネントの外側は共通レイアウト（画面遷移しても見た目が変わらない部分）になる。ページごとに共通レイアウトを切り替えたい場合は、後述する layouts を使う必要がある。")],-1),c7=s("p",null,"そもそも共通レイアウトが不要なのであれば、 app.vue を削除することもできる。（この場合、ルートコンポーネントが消えるわけではなく、Nuxt 3によって隠蔽される。）",-1),p7={__name:"57",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[n7,o7,t7,F(a,Z({},{ranges:[""]}),{default:g(()=>[a7]),_:1},16),r7,c7]),_:1},16)}}},i7=S(p7,[["__file","/@slidev/slides/57.md"]]),u7=s("h1",null,"pages",-1),y7=s("p",null,[o("pages ディレクトリに "),s("code",null,"pages/index.vue"),o(", "),s("code",null,"pages/about.vue"),o(" ファイルを配置し、複数ページを構成する。")],-1),d7=s("p",null,"Nuxt ではページを作成するだけでルートを定義することができる。つまり、 Vue Router を導入したときのように手動でルートを定義する必要がない。",-1),f7={__name:"58",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[u7,y7,d7]),_:1},16))}},h7=S(f7,[["__file","/@slidev/slides/58.md"]]),m7=s("h1",null,"NuxtLink",-1),v7=s("p",null,"コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。",-1),B7=s("p",null,"そしてそのルートを移動する際は HTML の",-1),A7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),_7=s("p",null,"ではなく",-1),g7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"NuxtLink"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"to"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"NuxtLink"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"NuxtLink"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"to"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"NuxtLink"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),D7=s("p",null,[o("と記述してリンクを作成する。"),s("br"),o(" ルート外、例えば外部サイトのリンクを貼る場合は従来の"),s("code",null,"<a>"),o("要素を使うことになる。")],-1),C7={__name:"59",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[m7,v7,B7,F(a,Z({},{ranges:[""]}),{default:g(()=>[A7]),_:1},16),_7,F(a,Z({},{ranges:[""]}),{default:g(()=>[g7]),_:1},16),D7]),_:1},16)}}},E7=S(C7,[["__file","/@slidev/slides/59.md"]]),F7=s("h1",null,"layouts",-1),k7=s("p",null,[s("code",null,"layouts/default.vue"),o("を作成し、"),s("code",null,"<Nav />"),o(" を表示させる。"),s("br"),o(" layouts 配下にいくつかのレイアウトコンポーネントを用意し、ページコンポーネントごとに切り替えることもできる。")],-1),x7={class:"flex gap-8"},b7=s("p",null,[s("code",null,"app.vue"),o("で共通レイアウトを組む例")],-1),w7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"Nav"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"Nav"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),$7=s("p",null,[s("code",null,"layouts/default.vue"),o("で共通レイアウトを組む例")],-1),S7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"Nav"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"Nav"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),P7=s("p",null,[s("code",null,"layouts/custom.vue"),o("に別の共通レイアウトを組む例")],-1),V7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"別の共通レイアウト"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"別の共通レイアウト"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),O7=s("p",null,"ページコンポーネントで custom レイアウトを参照する例",-1),L7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"NuxtLayout"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"custom"'),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#758575"}},"<!-- ページコンテンツ -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"NuxtLayout"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"NuxtLayout"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"custom"'),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#A0ADA0"}},"<!-- ページコンテンツ -->")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"NuxtLayout"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),T7={__name:"60",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[F7,k7,s("div",x7,[s("div",null,[b7,F(a,Z({},{ranges:[""]}),{default:g(()=>[w7]),_:1},16),$7,F(a,Z({},{ranges:[""]}),{default:g(()=>[S7]),_:1},16)]),s("div",null,[P7,F(a,Z({},{ranges:[""]}),{default:g(()=>[V7]),_:1},16),O7,F(a,Z({},{ranges:[""]}),{default:g(()=>[L7]),_:1},16)])])]),_:1},16)}}},N7=S(T7,[["__file","/@slidev/slides/60.md"]]),M7=s("h1",null,"Data Fetching / server ディレクトリ",-1),R7=s("p",null,[s("code",null,"server/api"),o("ディレクトリにある"),s("code",null,"users.js"),o("を確認して、"),s("code",null,"components/userList.vue"),o("に以下を記述する。")],-1),I7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),j7={__name:"61",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[M7,R7,F(a,Z({},{ranges:[""]}),{default:g(()=>[I7]),_:1},16)]),_:1},16)}}},H7=S(j7,[["__file","/@slidev/slides/61.md"]]),z7=s("h1",null,"composables",-1),W7=s("p",null,[s("code",null,"composables/useCounter.js"),o("を作成する。"),s("br"),o(" アプリで再利用したいロジックを管理することができる。js ファイルではあるが、Vue コンポーネントで使ってきた関数を使用していることがわかる。")],-1),U7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"#app"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"increment"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"count"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"readonly"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"count"),s("span",{style:{color:"#858585"}},"),")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"increment"),s("span",{style:{color:"#858585"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"#app"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"count"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"readonly"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"count"),s("span",{style:{color:"#8E8F8B"}},"),")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"increment"),s("span",{style:{color:"#8E8F8B"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"};")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),q7={__name:"62",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[z7,W7,F(a,Z({},{ranges:[""]}),{default:g(()=>[U7]),_:1},16)]),_:1},16)}}},K7=S(q7,[["__file","/@slidev/slides/62.md"]]),J7=s("h1",null,"composables",-1),Y7=s("p",null,"作成した useCounter コンポジション関数を使用する。",-1),Z7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"カウント: {{ counter.count }}"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},"><"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"increment"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"increment!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"counter"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useCounter"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"increment"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),G7={__name:"63",setup(e){const l={};return b($),(n,t)=>{const a=us,r=ot,c=Qo("click");return A(),O(K,q(W(l)),{default:g(()=>[J7,Y7,F(a,Z({},{ranges:[""]}),{default:g(()=>[Z7]),_:1},16),Pe(F(r,{x1:"400",y1:"400",x2:"220",y2:"300",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},Q7=S(G7,[["__file","/@slidev/slides/63.md"]]),X7=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較",-1),s2=s("p",null,"デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの",-1),e2=s("p",null,"動作は Vue 3 のものと同じ",-1),l2=s("ol",null,[s("li",null,[s("a",{href:"https://codesandbox.io/p/github/tuqulore/vue-3-practices/main?file=%2Fhandson-fetch-router-nuxt-finish%2Fpages%2Findex.vue",target:"_blank",rel:"noopener"},"https://codesandbox.io/p/github/tuqulore/vue-3-practices/main?file=%2Fhandson-fetch-router-nuxt-finish%2Fpages%2Findex.vue"),o(" にアクセス")]),s("li",null,[s("code",null,"Start handson-fetch-router-nuxt-finish"),o(" というタスクを実行")]),s("li",null,"しばらくして何も変化がないようならブラウザ再読み込み"),s("li",null,"右上に講師のアバターアイコンがあるはずなのでそれをクリック")],-1),n2={__name:"64",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[X7,s2,e2,l2]),_:1},16))}},o2=S(n2,[["__file","/@slidev/slides/64.md"]]),t2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),a2=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"Vue 3"),s("ol",null,[s("li",null,"Vue Router をプラグインとしてインストール"),s("li",null,"ルートを定義する"),s("li",null,"RouterView コンポーネントを使う")])]),s("div",null,[s("p",{class:"text-xs"},"Nuxt 3"),s("div",{class:"h-xs overflow-y-auto"},[s("ol",null,[s("li",null,"導入済みなので設定不要"),s("li",null,"ファイル・ディレクトリ構成で定義できる（ファイルベースルーティング）"),s("li",null,[o("app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 "),s("a",{href:"https://nuxt.com/docs/guide/directory-structure/app",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/guide/directory-structure/app")])]),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])])])])])],-1),r2={__name:"65",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[t2,a2]),_:1},16))}},c2=S(r2,[["__file","/@slidev/slides/65.md"]]),p2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),i2=s("p",null,"Vue 3 はテンプレートの最上位に複数要素が書ける",-1),u2=s("p",null,"例：",-1),y2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),d2=s("p",null,"しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない",-1),f2=s("blockquote",null,[s("p",null,"Pages must have a single root element to allow route transitions between pages. (HTML comments are considered elements as well.)")],-1),h2=s("p",null,[s("a",{href:"https://nuxt.com/docs/guide/directory-structure/pages",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/guide/directory-structure/pages")],-1),m2={__name:"66",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[p2,i2,u2,F(a,Z({},{ranges:[""]}),{default:g(()=>[y2]),_:1},16),d2,f2,h2]),_:1},16)}}},v2=S(m2,[["__file","/@slidev/slides/66.md"]]),B2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),A2={class:"flex gap-8"},_2=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),g2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"RouterLink"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue-router"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"RouterLink"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue-router"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),D2=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),C2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),E2=s("p",null,"インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる",-1),F2={__name:"67",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[B2,s("div",A2,[s("div",null,[_2,F(a,Z({},{ranges:[""]}),{default:g(()=>[g2]),_:1},16)]),s("div",null,[D2,F(a,Z({},{ranges:[""]}),{default:g(()=>[C2]),_:1},16),E2])])]),_:1},16)}}},k2=S(F2,[["__file","/@slidev/slides/67.md"]]),x2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),b2=s("p",null,[s("a",{href:"https://nuxt.com/docs/guide/concepts/auto-imports",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/guide/concepts/auto-imports")],-1),w2=s("p",null,"以下はインポート不要",-1),$2=s("ul",null,[s("li",null,"Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）"),s("li",null,"今まで使ってきた Composition API 関連の関数（ref、computed など）"),s("li",null,"components ディレクトリに配置された Vue コンポーネント"),s("li",null,"composables ディレクトリに配置されたコンポジション関数")],-1),S2={__name:"68",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[x2,b2,w2,$2]),_:1},16))}},P2=S(S2,[["__file","/@slidev/slides/68.md"]]),V2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),O2={class:"flex gap-8"},L2=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),T2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"中略"),s("span",{style:{color:"#DBD7CA"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"load"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"response"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"posts"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"response"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"json"),s("span",{style:{color:"#858585"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"中略"),s("span",{style:{color:"#393A34"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"load"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"response"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/wp-json/wp/v2/posts.json"'),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"response"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"json"),s("span",{style:{color:"#8E8F8B"}},"();")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),N2=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),M2={class:"h-xs overflow-y-auto"},R2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"中略"),s("span",{style:{color:"#DBD7CA"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:3000/wp-json/wp/v2/posts.json"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"中略"),s("span",{style:{color:"#393A34"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"http://localhost:3000/wp-json/wp/v2/posts.json"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),I2=s("ul",null,[s("li",null,"リアクティブな値を別途用意する必要がない"),s("li",null,[s("a",{href:"https://developer.mozilla.org/ja/docs/Web/API/Response/json",target:"_blank",rel:"noopener"},"Response.json()"),o("が暗黙的に実行されオブジェクトが得られる")]),s("li",null,[o("データ再取得の関数、取得中の状態値などあると便利なものが用意されている "),s("a",{href:"https://nuxt.com/docs/getting-started/data-fetching",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/getting-started/data-fetching")])],-1),j2={__name:"69",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[V2,s("div",O2,[s("div",null,[L2,F(a,Z({},{ranges:[""]}),{default:g(()=>[T2]),_:1},16)]),s("div",null,[N2,s("div",M2,[F(a,Z({},{ranges:[""]}),{default:g(()=>[R2]),_:1},16),I2])])])]),_:1},16)}}},H2=S(j2,[["__file","/@slidev/slides/69.md"]]),z2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),W2=s("p",null,[s("a",{href:"https://nuxt.com/docs/getting-started/data-fetching",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/getting-started/data-fetching")],-1),U2=s("p",null,"useFetch 以外もある",-1),q2=s("p",null,[o("useLazyFetch: 非同期関数でない代わりにデータ取得前は "),s("code",null,"null"),o(" が入る")],-1),K2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyFetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/posts"'),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyFetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/posts"'),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),J2=s("p",null,"useAsyncData: 例としては useFetch と同じことをやっている。（useFetch が使えないケースで）非同期処理によってデータを取得したい際に使う",-1),Y2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},"));")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},"));")])])])],-1),Z2=s("p",null,"useLazyAsyncData: useLazyFetch の useAsyncData 版",-1),G2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),Q2={__name:"70",setup(e){const l={};return b($),(n,t)=>{const a=us;return A(),O(K,q(W(l)),{default:g(()=>[z2,W2,U2,q2,F(a,Z({},{ranges:[""]}),{default:g(()=>[K2]),_:1},16),J2,F(a,Z({},{ranges:[""]}),{default:g(()=>[Y2]),_:1},16),Z2,F(a,Z({},{ranges:[""]}),{default:g(()=>[G2]),_:1},16)]),_:1},16)}}},X2=S(Q2,[["__file","/@slidev/slides/70.md"]]),sE=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),eE=s("p",null,"便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある",-1),lE=s("ul",null,[s("li",null,[o("同一オリジン（例："),s("code",null,"http://localhost:3000"),o("）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある "),s("ul",null,[s("li",null,"server ディレクトリで提供する API エンドポイントはオリジン省略可能"),s("li",null,"上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要")])])],-1),nE=s("p",null,[o("Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 "),s("a",{href:"https://nuxt.com/docs/getting-started/data-fetching#isomorphic-fetch-and-fetch",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/getting-started/data-fetching#isomorphic-fetch-and-fetch")],-1),oE=s("p",null,"場合によっては（$fetch ではなく） fetch を使うことも検討すること",-1),tE={__name:"71",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[sE,eE,lE,nE,oE]),_:1},16))}},aE=S(tE,[["__file","/@slidev/slides/71.md"]]),rE=s("h1",null,"VueUse",-1),cE=s("p",null,"便利なコンポジション関数を提供しているライブラリ",-1),pE=s("ul",null,[s("li",null,"スクラッチ（ゼロ）から処理を書くのは車輪の再発明かもしれない"),s("li",null,"既製のライブラリを使用することで効率的に開発することができる"),s("li",null,[s("a",{href:"https://vueuse.org/functions.html",target:"_blank",rel:"noopener"},"https://vueuse.org/functions.html"),o(" をみてみよう")])],-1),iE={__name:"72",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[rE,cE,pE]),_:1},16))}},uE=S(iE,[["__file","/@slidev/slides/72.md"]]),yE=s("h1",null,"スタイルガイド",-1),dE=s("p",null,"Vue 固有の記法についての公式なスタイルガイド",-1),fE=s("ul",null,[s("li",null,"スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる"),s("li",null,"スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる"),s("li",null,[s("a",{href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener"},"eslint-plugin-vue"),o("を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる")])],-1),hE=s("p",null,[s("a",{href:"https://ja.vuejs.org/style-guide/",target:"_blank",rel:"noopener"},"スタイルガイド")],-1),mE={__name:"73",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[yE,dE,fE,hE]),_:1},16))}},vE=S(mE,[["__file","/@slidev/slides/73.md"]]),BE=s("h1",null,"Vue 3 と Nuxt 3 の説明はこれで以上！",-1),AE=s("p",null,"おつかれさまでした",-1),_E=s("p",null,"以下を学んできた",-1),gE=s("ul",null,[s("li",null,"Vue の基本的な書き方"),s("li",null,"Vue アプリケーションのコードを読む・書く"),s("li",null,"Nuxt アプリケーションのコードを読む・書く")],-1),DE=s("p",null,"Nuxt 3 を使ってウェブアプリケーションをつくっていく準備ができた",-1),CE=s("p",null,"業務・趣味でウェブアプリケーションを開発していきましょう！",-1),EE=s("p",null,"学習の目安",-1),FE=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),kE=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),xE={__name:"74",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[BE,AE,_E,gE,DE,CE,EE,FE,kE]),_:1},16))}},bE=S(xE,[["__file","/@slidev/slides/74.md"]]),wE=s("h1",null,"課題",-1),$E=s("ul",null,[s("li",null,"レベル 1 ～ 3 の 3 つある"),s("li",null,"1 から順番に取り組んでもらう"),s("li",null,"16 時に解説する")],-1),SE={__name:"75",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[wE,$E]),_:1},16))}},PE=S(SE,[["__file","/@slidev/slides/75.md"]]),VE=s("h1",null,"課題（レベル 1）",-1),OE=s("p",null,[o("問題："),s("a",{href:"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue")],-1),LE=s("ol",null,[s("li",null,[o("useFetch を使って "),s("a",{href:"http://localhost:3000/data.json",target:"_blank",rel:"noopener"},"http://localhost:3000/data.json"),o(" から果物のリストを取得してください")]),s("li",null,[o("果物を順序なしリストで表示してください "),s("a",{href:"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul",target:"_blank",rel:"noopener"},"https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul")])],-1),TE={__name:"76",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[VE,OE,LE]),_:1},16))}},NE=S(TE,[["__file","/@slidev/slides/76.md"]]),ME=s("h1",null,"課題（レベル 2）",-1),RE=s("p",null,[o("問題："),s("a",{href:"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue")],-1),IE=s("p",null,"コード上のコメントを読みながら、未完成のアプリを完成させてください",-1),jE={__name:"77",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[ME,RE,IE]),_:1},16))}},HE=S(jE,[["__file","/@slidev/slides/77.md"]]),zE=s("h1",null,"課題（レベル 3）",-1),WE=s("p",null,[o("問題："),s("a",{href:"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue",target:"_blank",rel:"noopener"},"https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue")],-1),UE=s("p",null,"コード上のコメントを読みながら、未完成のアプリを完成させてください",-1),qE={__name:"78",setup(e){const l={};return b($),(n,t)=>(A(),O(K,q(W(l)),{default:g(()=>[zE,WE,UE]),_:1},16))}},KE=S(qE,[["__file","/@slidev/slides/78.md"]]),JE=[{path:"1",name:"page-1",component:tA,meta:{theme:"default",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
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
`,drawings:{persist:!1},title:"Vue.js"},index:0,start:0,end:29,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:uA,meta:{slide:{raw:`
# アジェンダ

- はじめに
  - Composition API, 学習環境など
- リアクティビティーの探求
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
- リアクティビティーの探求
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
  - throttle-debounce, fetch, Vue Router など`,frontmatter:{},index:1,start:30,end:48,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:BA,meta:{slide:{raw:`
# はじめに

## Vue.js とは？

Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。

<div class="pt-4 text-sm">

<a href="https://ja.vuejs.org/guide/introduction.html">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
</div>
`,title:"はじめに",level:1,content:`# はじめに

## Vue.js とは？

Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。

<div class="pt-4 text-sm">

<a href="https://ja.vuejs.org/guide/introduction.html">
<carbon:arrow-right class="inline" /> 公式サイト
</a>
</div>`,frontmatter:{},index:2,start:49,end:63,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:EA,meta:{slide:{raw:`
# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。
`,title:"本講座のすすめかた",level:1,content:`# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。`,frontmatter:{},index:3,start:64,end:73,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:VA,meta:{slide:{raw:`
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

講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。`,frontmatter:{},index:4,start:74,end:92,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:QA,meta:{slide:{raw:`
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

現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。`,frontmatter:{},index:5,start:93,end:145,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:o9,meta:{slide:{raw:`
# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />
`,title:"Composition API のメリット",level:1,content:`# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />`,frontmatter:{},index:6,start:146,end:153,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:u9,meta:{slide:{raw:`
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

現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。`,frontmatter:{},index:7,start:154,end:200,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:A9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:8,start:201,end:231,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:k9,meta:{slide:{raw:`
# リアクティビティーの探求

<div class="flex gap-4">

<div>
<video controls loop style="height: 30vh" src="https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"></video>

<a href="https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity">参考</a>

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
`,title:"リアクティビティーの探求",level:1,content:`# リアクティビティーの探求

<div class="flex gap-4">

<div>
<video controls loop style="height: 30vh" src="https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"></video>

<a href="https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity">参考</a>

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

</div>`,frontmatter:{},index:9,start:232,end:264,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:P9,meta:{slide:{raw:`
# リアクティビティーの探求

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
`,title:"リアクティビティーの探求",level:1,content:`# リアクティビティーの探求

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

</div>`,frontmatter:{},index:10,start:265,end:300,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:j9,meta:{slide:{raw:`
# リアクティビティーの探求（ref によるリアクティブな値の参照）

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
`,title:"リアクティビティーの探求（ref によるリアクティブな値の参照）",level:1,content:`# リアクティビティーの探求（ref によるリアクティブな値の参照）

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

</div>`,frontmatter:{},index:11,start:301,end:341,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:q9,meta:{slide:{raw:`
# リアクティビティーの探求（リアクティブな値をオブジェクトにまとめる）

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
`,title:"リアクティビティーの探求（リアクティブな値をオブジェクトにまとめる）",level:1,content:`# リアクティビティーの探求（リアクティブな値をオブジェクトにまとめる）

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
\`\`\``,frontmatter:{},index:12,start:342,end:364,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:G9,meta:{slide:{raw:`
# リアクティビティーの探求（オブジェクトにまとめたリアクティブな値を取り出す）

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
`,title:"リアクティビティーの探求（オブジェクトにまとめたリアクティブな値を取り出す）",level:1,content:`# リアクティビティーの探求（オブジェクトにまとめたリアクティブな値を取り出す）

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
\`\`\``,frontmatter:{},index:13,start:365,end:389,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:e_,meta:{slide:{raw:`
# リアクティビティーの探求（リアクティブな値を読み込み専用にする）

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
`,title:"リアクティビティーの探求（リアクティブな値を読み込み専用にする）",level:1,content:`# リアクティビティーの探求（リアクティブな値を読み込み専用にする）

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
\`\`\``,frontmatter:{},index:14,start:390,end:415,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:a_,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:15,start:416,end:437,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:y_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:16,start:438,end:472,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:k_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:17,start:473,end:517,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:P_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:18,start:518,end:551,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:M_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:19,start:552,end:585,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:H_,meta:{slide:{raw:`
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
- フォーム入力バインディング`,frontmatter:{},index:20,start:586,end:597,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Y_,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:21,start:598,end:619,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:n1,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:22,start:620,end:648,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:c1,meta:{slide:{raw:`
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

ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい`,frontmatter:{},index:23,start:649,end:659,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:h1,meta:{slide:{raw:`
# バインディング

「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 \`v-bind\` ディレクティブを使う

<div>

\`\`\`vue
<template>
  <a v-bind:href="url"> Vue.js公式サイト </a>
</template>

<script setup>
const url = "https://ja.vuejs.org/";
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
const url = "https://ja.vuejs.org/";
<\/script>
\`\`\`

省略するとこのように書ける

</div>

\`\`\`html
<a :href="url"> Vue.js公式サイト </a>
\`\`\``,frontmatter:{},index:24,start:660,end:685,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:b1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:25,start:686,end:743,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:T1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:26,start:744,end:774,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:j1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:27,start:775,end:798,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:sg,meta:{slide:{raw:`
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

<arrow v-click="2" x1="350" y1="370" x2="190" y2="310" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:28,start:799,end:818,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:tg,meta:{slide:{raw:`
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
- コンポーネントをマウントしてから頻繁に変化するケースであれば \`v-show\`を使う`,frontmatter:{},index:29,start:819,end:834,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:yg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:30,start:835,end:871,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Ag,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:31,start:872,end:911,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:kg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:32,start:912,end:950,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Vg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:33,start:951,end:992,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Hg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:34,start:993,end:1021,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:qg,meta:{slide:{raw:`
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
- スロットによるコンテンツ配信`,frontmatter:{},index:35,start:1022,end:1033,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Qg,meta:{slide:{raw:`
# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />
`,title:"コンポーネントの基本と構成",level:1,content:`# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />`,frontmatter:{},index:36,start:1034,end:1041,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:rD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:37,start:1042,end:1088,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:vD,meta:{slide:{raw:`
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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:38,start:1089,end:1139,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:kD,meta:{slide:{raw:`
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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:39,start:1140,end:1188,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:LD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:40,start:1189,end:1238,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:WD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:41,start:1239,end:1285,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:rC,meta:{slide:{raw:`
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
import ChildComponent from "./components/ChildComponent.vue";

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
import ChildComponent from "./components/ChildComponent.vue";

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

</div>`,frontmatter:{},index:42,start:1286,end:1339,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:FC,meta:{slide:{raw:`
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
import ChildComponent from "./components/ChildComponent.vue";

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
import ChildComponent from "./components/ChildComponent.vue";

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

</div>`,frontmatter:{},index:43,start:1340,end:1407,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:OC,meta:{slide:{raw:`
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
import ChildComponent from "./components/ChildComponent.vue";

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
import ChildComponent from "./components/ChildComponent.vue";

const title = ref("Hello !");
<\/script>
\`\`\`

</div>

- v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）
- 親 → 子：プロパティ
- 子 → 親：イベント
- このような状態が双方向バインディング（値を束縛しあっている）

</div>`,frontmatter:{},index:44,start:1408,end:1442,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:qC,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:45,start:1443,end:1483,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:n4,meta:{slide:{raw:`
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

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:46,start:1484,end:1506,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:c4,meta:{slide:{raw:`
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
  - useFetch などの Nuxt 3 特有のヘルパー関数の使い方`,frontmatter:{},index:47,start:1507,end:1527,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:d4,meta:{slide:{raw:`
# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）
`,title:"グリッドコンポーネント",level:1,content:`# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）`,frontmatter:{},index:48,start:1528,end:1537,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:E4,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:49,start:1538,end:1597,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:w4,meta:{slide:{raw:`
# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）
`,title:"Markdown エディター",level:1,content:`# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）`,frontmatter:{},index:50,start:1598,end:1607,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:O4,meta:{slide:{raw:`
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
4. コードの説明（PostDetail コンポーネント）`,frontmatter:{},index:51,start:1608,end:1621,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:j4,meta:{slide:{raw:`
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

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">`,frontmatter:{},index:52,start:1622,end:1633,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:K4,meta:{slide:{raw:`
# Nuxt 3

https://nuxt.com/docs/getting-started/introduction#what-is-nuxt

効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）

1. リアクティビティと Web コンポーネントの提供：[Vue.js](https://vuejs.org/)
2. 開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング：[webpack 5](https://webpack.js.org/) と [Vite](https://vitejs.dev/)
3. レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける：[esbuild](https://esbuild.github.io/)
4. 開発サーバー、サーバーサイドレンダリング、API サーバーの提供：[h3](https://github.com/unjs/h3)
5. ルーティング（画面遷移処理）：[vue-router](https://router.vuejs.org/)
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

https://nuxt.com/docs/getting-started/introduction#what-is-nuxt

効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）

1. リアクティビティと Web コンポーネントの提供：[Vue.js](https://vuejs.org/)
2. 開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング：[webpack 5](https://webpack.js.org/) と [Vite](https://vitejs.dev/)
3. レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける：[esbuild](https://esbuild.github.io/)
4. 開発サーバー、サーバーサイドレンダリング、API サーバーの提供：[h3](https://github.com/unjs/h3)
5. ルーティング（画面遷移処理）：[vue-router](https://router.vuejs.org/)`,frontmatter:{},index:53,start:1634,end:1647,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:G4,meta:{slide:{raw:`
# Nuxt 3

- Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）
- Vue コンポーネント等の import を省略できる
- pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）
- server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）
- Nuxt 3 は 2022 年 11 月に安定版がリリースされた
`,title:"Nuxt 3",level:1,content:`# Nuxt 3

- Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）
- Vue コンポーネント等の import を省略できる
- pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）
- server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）
- Nuxt 3 は 2022 年 11 月に安定版がリリースされた`,frontmatter:{},index:54,start:1648,end:1657,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:l7,meta:{slide:{raw:`
# Nuxt 3 のハンズオン

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-nuxt-playground?file=app.vue&terminal=dev

- app.vue
- pages
- NuxtLink
- layouts
- Data Fetching / server ディレクトリ
- composables
`,title:"Nuxt 3 のハンズオン",level:1,content:`# Nuxt 3 のハンズオン

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-nuxt-playground?file=app.vue&terminal=dev

- app.vue
- pages
- NuxtLink
- layouts
- Data Fetching / server ディレクトリ
- composables`,frontmatter:{},index:55,start:1658,end:1670,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:i7,meta:{slide:{raw:`
# app.vue

app.vue を開いて中身を確認する。  
app.vue を削除する。

Vue 開発環境では App.vue ファイルをルートコンポーネントとして取り扱うことが多いが、Nuxt では app.vue がルートコンポーネントと決められている。ルーティングをおこなう場合、\`<NuxtPage />\` コンポーネントを挿入する。（Vue Router 導入時に出てきた \`<RouterView />\` コンポーネントと同じ）

\`\`\`vue
<template>
  <div>
    <header>共通レイアウト</header>
    <NuxtPage />
  </div>
</template>
\`\`\`

\`<NuxtPage />\` コンポーネントの外側は共通レイアウト（画面遷移しても見た目が変わらない部分）になる。ページごとに共通レイアウトを切り替えたい場合は、後述する layouts を使う必要がある。

そもそも共通レイアウトが不要なのであれば、 app.vue を削除することもできる。（この場合、ルートコンポーネントが消えるわけではなく、Nuxt 3によって隠蔽される。）
`,title:"app.vue",level:1,content:`# app.vue

app.vue を開いて中身を確認する。  
app.vue を削除する。

Vue 開発環境では App.vue ファイルをルートコンポーネントとして取り扱うことが多いが、Nuxt では app.vue がルートコンポーネントと決められている。ルーティングをおこなう場合、\`<NuxtPage />\` コンポーネントを挿入する。（Vue Router 導入時に出てきた \`<RouterView />\` コンポーネントと同じ）

\`\`\`vue
<template>
  <div>
    <header>共通レイアウト</header>
    <NuxtPage />
  </div>
</template>
\`\`\`

\`<NuxtPage />\` コンポーネントの外側は共通レイアウト（画面遷移しても見た目が変わらない部分）になる。ページごとに共通レイアウトを切り替えたい場合は、後述する layouts を使う必要がある。

そもそも共通レイアウトが不要なのであれば、 app.vue を削除することもできる。（この場合、ルートコンポーネントが消えるわけではなく、Nuxt 3によって隠蔽される。）`,frontmatter:{},index:56,start:1671,end:1692,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:h7,meta:{slide:{raw:`
# pages

pages ディレクトリに \`pages/index.vue\`, \`pages/about.vue\` ファイルを配置し、複数ページを構成する。

Nuxt ではページを作成するだけでルートを定義することができる。つまり、 Vue Router を導入したときのように手動でルートを定義する必要がない。


`,title:"pages",level:1,content:"# pages\n\npages ディレクトリに `pages/index.vue`, `pages/about.vue` ファイルを配置し、複数ページを構成する。\n\nNuxt ではページを作成するだけでルートを定義することができる。つまり、 Vue Router を導入したときのように手動でルートを定義する必要がない。",frontmatter:{},index:57,start:1693,end:1702,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:E7,meta:{slide:{raw:`
# NuxtLink

コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。  

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

そしてそのルートを移動する際は HTML の

\`\`\`html
<a href="/about">ABOUT</a>
\`\`\`

ではなく

\`\`\`vue
<NuxtLink to="/about">ABOUT</NuxtLink>
\`\`\`

と記述してリンクを作成する。  
ルート外、例えば外部サイトのリンクを貼る場合は従来の\`<a>\`要素を使うことになる。`,frontmatter:{},index:58,start:1703,end:1723,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:N7,meta:{slide:{raw:`
# layouts

\`layouts/default.vue\`を作成し、\`<Nav />\` を表示させる。  
layouts 配下にいくつかのレイアウトコンポーネントを用意し、ページコンポーネントごとに切り替えることもできる。

<div class="flex gap-8">

<div>

\`app.vue\`で共通レイアウトを組む例

\`\`\`vue
<template>
  <div>
    <Nav />
    <NuxtPage />
  </div>
</template>
\`\`\`

\`layouts/default.vue\`で共通レイアウトを組む例

\`\`\`vue
<template>
  <div>
    <Nav />
    <slot />
  </div>
</template>
\`\`\`

</div>
<div>

\`layouts/custom.vue\`に別の共通レイアウトを組む例

\`\`\`vue
<template>
  <div>
    <header>別の共通レイアウト</header>
    <slot />
  </div>
</template>
\`\`\`

ページコンポーネントで custom レイアウトを参照する例

\`\`\`vue
<template>
  <div>
    <NuxtLayout name="custom">
      <!-- ページコンテンツ -->
    </NuxtLayout>
  </div>
</template>
\`\`\`

</div>

</div>
`,title:"layouts",level:1,content:`# layouts

\`layouts/default.vue\`を作成し、\`<Nav />\` を表示させる。  
layouts 配下にいくつかのレイアウトコンポーネントを用意し、ページコンポーネントごとに切り替えることもできる。

<div class="flex gap-8">

<div>

\`app.vue\`で共通レイアウトを組む例

\`\`\`vue
<template>
  <div>
    <Nav />
    <NuxtPage />
  </div>
</template>
\`\`\`

\`layouts/default.vue\`で共通レイアウトを組む例

\`\`\`vue
<template>
  <div>
    <Nav />
    <slot />
  </div>
</template>
\`\`\`

</div>
<div>

\`layouts/custom.vue\`に別の共通レイアウトを組む例

\`\`\`vue
<template>
  <div>
    <header>別の共通レイアウト</header>
    <slot />
  </div>
</template>
\`\`\`

ページコンポーネントで custom レイアウトを参照する例

\`\`\`vue
<template>
  <div>
    <NuxtLayout name="custom">
      <!-- ページコンテンツ -->
    </NuxtLayout>
  </div>
</template>
\`\`\`

</div>

</div>`,frontmatter:{},index:59,start:1724,end:1786,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:H7,meta:{slide:{raw:`
# Data Fetching / server ディレクトリ

\`server/api\`ディレクトリにある\`users.js\`を確認して、\`components/userList.vue\`に以下を記述する。

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

\`server/api\`ディレクトリにある\`users.js\`を確認して、\`components/userList.vue\`に以下を記述する。

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
\`\`\``,frontmatter:{},index:60,start:1787,end:1808,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:K7,meta:{slide:{raw:`
# composables

\`composables/useCounter.js\`を作成する。  
アプリで再利用したいロジックを管理することができる。js ファイルではあるが、Vue コンポーネントで使ってきた関数を使用していることがわかる。

\`\`\`js
import { ref, readonly } from "#app";

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

\`composables/useCounter.js\`を作成する。  
アプリで再利用したいロジックを管理することができる。js ファイルではあるが、Vue コンポーネントで使ってきた関数を使用していることがわかる。

\`\`\`js
import { ref, readonly } from "#app";

export default () => {
  const count = ref(0);
  const increment = () => count.value++;

  return {
    count: readonly(count),
    increment,
  };
};
\`\`\``,frontmatter:{},index:61,start:1809,end:1829,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:Q7,meta:{slide:{raw:`
# composables

作成した useCounter コンポジション関数を使用する。

\`\`\`vue
<template>
  <div>
    <p>カウント: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>

<script setup>
const counter = useCounter();
function increment() {
  counter.increment();
}
<\/script>
\`\`\`

<arrow v-click="1" x1="400" y1="400" x2="220" y2="300" color="#564" width="3" arrowSize="1" />
`,title:"composables",level:1,content:`# composables

作成した useCounter コンポジション関数を使用する。

\`\`\`vue
<template>
  <div>
    <p>カウント: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>

<script setup>
const counter = useCounter();
function increment() {
  counter.increment();
}
<\/script>
\`\`\`

<arrow v-click="1" x1="400" y1="400" x2="220" y2="300" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:62,start:1830,end:1853,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:o2,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較

デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの

動作は Vue 3 のものと同じ

1. https://codesandbox.io/p/github/tuqulore/vue-3-practices/main?file=%2Fhandson-fetch-router-nuxt-finish%2Fpages%2Findex.vue にアクセス
2. \`Start handson-fetch-router-nuxt-finish\` というタスクを実行
3. しばらくして何も変化がないようならブラウザ再読み込み
4. 右上に講師のアバターアイコンがあるはずなのでそれをクリック
`,title:"Vue + Vue Router と Nuxt 3 の比較",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較

デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの

動作は Vue 3 のものと同じ

1. https://codesandbox.io/p/github/tuqulore/vue-3-practices/main?file=%2Fhandson-fetch-router-nuxt-finish%2Fpages%2Findex.vue にアクセス
2. \`Start handson-fetch-router-nuxt-finish\` というタスクを実行
3. しばらくして何も変化がないようならブラウザ再読み込み
4. 右上に講師のアバターアイコンがあるはずなのでそれをクリック`,frontmatter:{},index:63,start:1854,end:1866,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:c2,meta:{slide:{raw:`
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
3. app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 https://nuxt.com/docs/guide/directory-structure/app

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
3. app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 https://nuxt.com/docs/guide/directory-structure/app

\`\`\`
pages/
├── index.vue // この場合のパスは \`/\` となり index はパスから省略可能
└── posts // ディレクトリがそのままURLのパスに含まれる
    └── [id].vue // URLパラメーターは[]で囲む
\`\`\`

</div>

</div>

</div>`,frontmatter:{},index:64,start:1867,end:1905,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:v2,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（ルーティング）

Vue 3 はテンプレートの最上位に複数要素が書ける

例：

\`\`\`vue
<template>
  <div />
  <p />
</template>
\`\`\`

しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない

> Pages must have a single root element to allow route transitions between pages. (HTML comments are considered elements as well.)

https://nuxt.com/docs/guide/directory-structure/pages
`,title:"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（ルーティング）

Vue 3 はテンプレートの最上位に複数要素が書ける

例：

\`\`\`vue
<template>
  <div />
  <p />
</template>
\`\`\`

しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない

> Pages must have a single root element to allow route transitions between pages. (HTML comments are considered elements as well.)

https://nuxt.com/docs/guide/directory-structure/pages`,frontmatter:{},index:65,start:1906,end:1926,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:k2,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:66,start:1927,end:1963,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:P2,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

https://nuxt.com/docs/guide/concepts/auto-imports

以下はインポート不要

- Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）
- 今まで使ってきた Composition API 関連の関数（ref、computed など）
- components ディレクトリに配置された Vue コンポーネント
- composables ディレクトリに配置されたコンポジション関数
`,title:"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（自動インポート）

https://nuxt.com/docs/guide/concepts/auto-imports

以下はインポート不要

- Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）
- 今まで使ってきた Composition API 関連の関数（ref、computed など）
- components ディレクトリに配置された Vue コンポーネント
- composables ディレクトリに配置されたコンポジション関数`,frontmatter:{},index:67,start:1964,end:1976,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:H2,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（データ取得）

<div class="flex gap-8">

<div>

<p class="text-xs">Vue 3 - components/PostList.vue</p>

\`\`\`vue
<script setup>
（中略）
const posts = ref(null);
const load = async () => {
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
- データ再取得の関数、取得中の状態値などあると便利なものが用意されている https://nuxt.com/docs/getting-started/data-fetching

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
const load = async () => {
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
- データ再取得の関数、取得中の状態値などあると便利なものが用意されている https://nuxt.com/docs/getting-started/data-fetching

</div>

</div>

</div>`,frontmatter:{},index:68,start:1977,end:2023,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:X2,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（データ取得）

https://nuxt.com/docs/getting-started/data-fetching

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

https://nuxt.com/docs/getting-started/data-fetching

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
\`\`\``,frontmatter:{},index:69,start:2024,end:2051,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:aE,meta:{slide:{raw:`
# Vue + Vue Router と Nuxt 3 の比較（データ取得）

便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある

- 同一オリジン（例：\`http://localhost:3000\`）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある
  - server ディレクトリで提供する API エンドポイントはオリジン省略可能
  - 上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要

Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 https://nuxt.com/docs/getting-started/data-fetching#isomorphic-fetch-and-fetch

場合によっては（$fetch ではなく） fetch を使うことも検討すること
`,title:"Vue + Vue Router と Nuxt 3 の比較（データ取得）",level:1,content:`# Vue + Vue Router と Nuxt 3 の比較（データ取得）

便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある

- 同一オリジン（例：\`http://localhost:3000\`）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある
  - server ディレクトリで提供する API エンドポイントはオリジン省略可能
  - 上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要

Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 https://nuxt.com/docs/getting-started/data-fetching#isomorphic-fetch-and-fetch

場合によっては（$fetch ではなく） fetch を使うことも検討すること`,frontmatter:{},index:70,start:2052,end:2065,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:uE,meta:{slide:{raw:`
# VueUse

便利なコンポジション関数を提供しているライブラリ

- スクラッチ（ゼロ）から処理を書くのは車輪の再発明かもしれない
- 既製のライブラリを使用することで効率的に開発することができる
- https://vueuse.org/functions.html をみてみよう
`,title:"VueUse",level:1,content:`# VueUse

便利なコンポジション関数を提供しているライブラリ

- スクラッチ（ゼロ）から処理を書くのは車輪の再発明かもしれない
- 既製のライブラリを使用することで効率的に開発することができる
- https://vueuse.org/functions.html をみてみよう`,frontmatter:{},index:71,start:2066,end:2075,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:vE,meta:{slide:{raw:`
# スタイルガイド

Vue 固有の記法についての公式なスタイルガイド

- スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる
- スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる
- [eslint-plugin-vue](https://eslint.vuejs.org/)を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる

[スタイルガイド](https://ja.vuejs.org/style-guide/)
`,title:"スタイルガイド",level:1,content:`# スタイルガイド

Vue 固有の記法についての公式なスタイルガイド

- スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる
- スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる
- [eslint-plugin-vue](https://eslint.vuejs.org/)を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる

[スタイルガイド](https://ja.vuejs.org/style-guide/)`,frontmatter:{},index:72,start:2076,end:2087,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:bE,meta:{slide:{raw:`
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

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:73,start:2088,end:2110,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:PE,meta:{slide:{raw:`
# 課題

- レベル 1 ～ 3 の 3 つある
- 1 から順番に取り組んでもらう
- 16 時に解説する
`,title:"課題",level:1,content:`# 課題

- レベル 1 ～ 3 の 3 つある
- 1 から順番に取り組んでもらう
- 16 時に解説する`,frontmatter:{},index:74,start:2111,end:2118,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:NE,meta:{slide:{raw:`
# 課題（レベル 1）

問題：https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch を使って http://localhost:3000/data.json から果物のリストを取得してください
2. 果物を順序なしリストで表示してください https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul
`,title:"課題（レベル 1）",level:1,content:`# 課題（レベル 1）

問題：https://stackblitz.com/edit/github-siucq8-dvv8rq?file=app.vue

1. useFetch を使って http://localhost:3000/data.json から果物のリストを取得してください
2. 果物を順序なしリストで表示してください https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul`,frontmatter:{},index:75,start:2119,end:2127,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:HE,meta:{slide:{raw:`
# 課題（レベル 2）

問題：https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください
`,title:"課題（レベル 2）",level:1,content:`# 課題（レベル 2）

問題：https://stackblitz.com/edit/github-siucq8-ews4bu?file=app.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください`,frontmatter:{},index:76,start:2128,end:2135,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:KE,meta:{slide:{raw:`
# 課題（レベル 3）

問題：https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください
`,title:"課題（レベル 3）",level:1,content:`# 課題（レベル 3）

問題：https://stackblitz.com/edit/nuxt-starter-qk1mbi?file=components%2FTreeItem.vue

コード上のコメントを読みながら、未完成のアプリを完成させてください`,frontmatter:{},index:77,start:2136,end:2143,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",component:ZB,meta:{layout:"end"}}],qs=JE,YE=[{name:"play",path:"/",component:Bv,children:[...qs]},{name:"print",path:"/print",component:KB},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>Ul(()=>import("./PresenterPrint-f7d897ac.js"),["assets/PresenterPrint-f7d897ac.js","assets/NoteViewer-9e5f62c5.js","assets/index-2d9c89f9.js"])},{name:"presenter",path:"/presenter/:no",component:()=>Ul(()=>import("./Presenter-5be2a147.js"),["assets/Presenter-5be2a147.js","assets/NoteViewer-9e5f62c5.js","assets/DrawingControls-1986a4f6.js","assets/index-2d9c89f9.js","assets/Presenter-214154c4.css"]),beforeEnter:e=>{if(!Sn.remote||Sn.remote===e.query.password)return!0;if(Sn.remote&&e.query.password===void 0){const l=prompt("Enter password");if(Sn.remote===l)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],Bl=Zf({history:J5("/vue-3-practices"),routes:YE});function ZE(e,l,{mode:n="replace"}={}){return L({get(){const t=Bl.currentRoute.value.query[e];return t==null?l??null:Array.isArray(t)?t.filter(Boolean):t},set(t){Se(()=>{Bl[C(n)]({query:{...Bl.currentRoute.value.query,[e]:t}})})}})}const Vi=ns(0);Se(()=>{Bl.afterEach(async()=>{await Se(),Vi.value+=1})});const Ue=L(()=>Bl.currentRoute.value),La=L(()=>Ue.value.query.print!==void 0),GE=L(()=>Ue.value.query.print==="clicks"),Ye=L(()=>Ue.value.query.embedded!==void 0),Xe=L(()=>Ue.value.path.startsWith("/presenter")),Oi=L(()=>La.value&&!GE.value),ea=L(()=>Ue.value.query.password),QE=L(()=>!Xe.value&&(!Ls.remote||ea.value===Ls.remote)),gc=ZE("clicks","0"),Li=L(()=>qs.length-1),XE=L(()=>Ue.value.path),Ys=L(()=>parseInt(XE.value.split(/\//g).slice(-1)[0])||1);L(()=>Ta(Ys.value));const ve=L(()=>qs.find(e=>e.path===`${Ys.value}`));L(()=>{var e,l,n;return(n=(l=(e=ve.value)==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:n.id});L(()=>{var e,l;return((l=(e=ve.value)==null?void 0:e.meta)==null?void 0:l.layout)||(Ys.value===1?"cover":"default")});const _t=L(()=>qs.find(e=>e.path===`${Math.min(qs.length,Ys.value+1)}`)),s6=L(()=>{var e,l;return Vi.value,((l=(e=ve.value)==null?void 0:e.meta)==null?void 0:l.__clicksElements)||[]}),ql=L({get(){if(Oi.value)return 99999;let e=+(gc.value||0);return isNaN(e)&&(e=0),e},set(e){gc.value=e.toString()}}),To=L(()=>{var e,l;return+(((l=(e=ve.value)==null?void 0:e.meta)==null?void 0:l.clicks)??s6.value.length)}),e6=L(()=>Ys.value<qs.length-1||ql.value<To.value),l6=L(()=>Ys.value>1||ql.value>0),n6=L(()=>qs.filter(e=>{var l,n;return(n=(l=e.meta)==null?void 0:l.slide)==null?void 0:n.title}).reduce((e,l)=>(Na(e,l),e),[])),o6=L(()=>Ma(n6.value,ve.value));L(()=>Ra(o6.value));function Il(){To.value<=ql.value?No():ql.value+=1}async function jl(){ql.value<=0?await Mo():ql.value-=1}function Ta(e){return Xe.value?`/presenter/${e}`:`/${e}`}function No(){const e=Math.min(qs.length,Ys.value+1);return hn(e)}async function Mo(e=!0){const l=Math.max(1,Ys.value-1);await hn(l),e&&To.value&&Bl.replace({query:{...Ue.value.query,clicks:To.value}})}function hn(e,l){return Bl.push({path:Ta(e),query:{...Ue.value.query,clicks:l}})}function t6(e){const l=ns(0),{direction:n,distanceX:t,distanceY:a}=y5(e,{onSwipeStart(r){r.pointerType==="touch"&&(Zn.value||(l.value=It()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!l.value||Zn.value)return;const c=Math.abs(t.value),p=Math.abs(a.value);c/window.innerWidth>.3||c>100?n.value===Qe.LEFT?Il():jl():(p/window.innerHeight>.4||p>200)&&(n.value===Qe.DOWN?Mo():No())}})}async function Dc(){const{saveAs:e}=await Ul(()=>import("./FileSaver.min-17c85779.js").then(l=>l.F),[]);e(Ip(Ls.download)?Ls.download:Ls.exportFilename?`${Ls.exportFilename}.pdf`:"/vue-3-practicesslidev-exported.pdf",`${Ls.title}.pdf`)}async function S6(e){var l,n;if(e==null){const t=(n=(l=ve.value)==null?void 0:l.meta)==null?void 0:n.slide;if(!(t!=null&&t.filepath))return!1;e=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Na(e,l,n=1){var a,r,c,p,i;const t=(r=(a=l.meta)==null?void 0:a.slide)==null?void 0:r.level;t&&t>n&&e.length>0?Na(e[e.length-1].children,l,n+1):e.push({children:[],level:n,path:l.path,hideInToc:Boolean((c=l.meta)==null?void 0:c.hideInToc),title:(i=(p=l.meta)==null?void 0:p.slide)==null?void 0:i.title})}function Ma(e,l,n=!1,t){return e.map(a=>{const r={...a,active:a.path===(l==null?void 0:l.path),hasActiveParent:n};return r.children.length>0&&(r.children=Ma(r.children,l,r.active||r.hasActiveParent,r)),t&&(r.active||r.activeParent)&&(t.activeParent=!0),r})}function Ra(e,l=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Ra(n.children,l+1)}))}export{f6 as $,ns as A,D6 as B,g6 as C,bs as D,F6 as E,ks as F,Re as G,C6 as H,Qi as I,Xi as J,Zo as K,Se as L,yp as M,Z as N,Wl as O,ia as P,Cl as Q,a6 as R,Oi as S,p6 as T,Hy as U,zy as V,Tp as W,Lp as X,Op as Y,Ry as Z,S as _,_6 as a,Pe as a$,h6 as a0,m6 as a1,y6 as a2,d6 as a3,NB as a4,MB as a5,Dc as a6,Il as a7,No as a8,S6 as a9,Di as aA,re as aB,lm as aC,r6 as aD,c6 as aE,To as aF,e6 as aG,_t as aH,dt as aI,Zn as aJ,Bt as aK,mv as aL,Sa as aM,Pa as aN,uv as aO,fm as aP,Oe as aQ,E6 as aR,nl as aS,xn as aT,Pl as aU,je as aV,Qt as aW,$h as aX,Sh as aY,Ph as aZ,Oh as a_,jl as aa,Mo as ab,Ue as ac,u6 as ad,mn as ae,Fs as af,x6 as ag,O8 as ah,s as ai,Js as aj,eo as ak,Xs as al,qs as am,Li as an,o as ao,gs as ap,Fa as aq,js as ar,b6 as as,ve as at,O as au,zh as av,t6 as aw,k6 as ax,w6 as ay,g as az,Ys as b,Vp as b0,$6 as b1,ie as b2,yo as b3,Ym as b4,Np as b5,Lh as b6,Ls as c,ql as d,Xe as e,Ms as f,Ta as g,b as h,v6 as i,$ as j,_u as k,G as l,F as m,A as n,B6 as o,A6 as p,se as q,Bl as r,lt as s,L as t,i6 as u,yr as v,Is as w,up as x,C as y,Hi as z};
