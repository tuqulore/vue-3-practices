function Cn(e,n){const l=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)l[t[a]]=!0;return n?a=>!!l[a.toLowerCase()]:a=>!!l[a]}function Xs(e){if(cs(e)){const n={};for(let l=0;l<e.length;l++){const t=e[l],a=Ts(t)?Ri(t):Xs(t);if(a)for(const r in a)n[r]=a[r]}return n}else{if(Ts(e))return e;if(ws(e))return e}}const Ti=/;(?![^(]*\))/g,Ni=/:([^]+)/,Mi=/\/\*.*?\*\//gs;function Ri(e){const n={};return e.replace(Mi,"").split(Ti).forEach(l=>{if(l){const t=l.split(Ni);t.length>1&&(n[t[0].trim()]=t[1].trim())}}),n}function js(e){let n="";if(Ts(e))n=e;else if(cs(e))for(let l=0;l<e.length;l++){const t=js(e[l]);t&&(n+=t+" ")}else if(ws(e))for(const l in e)e[l]&&(n+=l+" ");return n.trim()}function W(e){if(!e)return null;let{class:n,style:l}=e;return n&&!Ts(n)&&(e.class=js(n)),l&&(e.style=Xs(l)),e}const Ii="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ji="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Hi=Cn(Ii),zi=Cn(ji),Ui="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wi=Cn(Ui);function Cc(e){return!!e||e===""}const Js=e=>Ts(e)?e:e==null?"":cs(e)||ws(e)&&(e.toString===xc||!is(e.toString))?JSON.stringify(e,Ec,2):String(e),Ec=(e,n)=>n&&n.__v_isRef?Ec(e,n.value):On(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((l,[t,a])=>(l[`${t} =>`]=a,l),{})}:kc(n)?{[`Set(${n.size})`]:[...n.values()]}:ws(n)&&!cs(n)&&!bc(n)?String(n):n,Vs=Object.freeze({}),cl=Object.freeze([]),ye=()=>{},Fc=()=>!1,qi=/^on[^a-z]/,Xl=e=>qi.test(e),Do=e=>e.startsWith("onUpdate:"),zs=Object.assign,na=(e,n)=>{const l=e.indexOf(n);l>-1&&e.splice(l,1)},Ki=Object.prototype.hasOwnProperty,As=(e,n)=>Ki.call(e,n),cs=Array.isArray,On=e=>Ro(e)==="[object Map]",kc=e=>Ro(e)==="[object Set]",is=e=>typeof e=="function",Ts=e=>typeof e=="string",la=e=>typeof e=="symbol",ws=e=>e!==null&&typeof e=="object",oa=e=>ws(e)&&is(e.then)&&is(e.catch),xc=Object.prototype.toString,Ro=e=>xc.call(e),ta=e=>Ro(e).slice(8,-1),bc=e=>Ro(e)==="[object Object]",aa=e=>Ts(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fo=Cn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ji=Cn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Io=e=>{const n=Object.create(null);return l=>n[l]||(n[l]=e(l))},Yi=/-(\w)/g,He=Io(e=>e.replace(Yi,(n,l)=>l?l.toUpperCase():"")),Zi=/\B([A-Z])/g,en=Io(e=>e.replace(Zi,"-$1").toLowerCase()),zn=Io(e=>e.charAt(0).toUpperCase()+e.slice(1)),xn=Io(e=>e?`on${zn(e)}`:""),Rl=(e,n)=>!Object.is(e,n),dn=(e,n)=>{for(let l=0;l<e.length;l++)e[l](n)},Co=(e,n,l)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:l})},Eo=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let za;const wc=()=>za||(za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fo(e,...n){console.warn(`[Vue warn] ${e}`,...n)}let me;class $c{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=me,!n&&me&&(this.index=(me.scopes||(me.scopes=[])).push(this)-1)}run(n){if(this.active){const l=me;try{return me=this,n()}finally{me=l}}else Fo("cannot run an inactive effect scope.")}on(){me=this}off(){me=this.parent}stop(n){if(this.active){let l,t;for(l=0,t=this.effects.length;l<t;l++)this.effects[l].stop();for(l=0,t=this.cleanups.length;l<t;l++)this.cleanups[l]();if(this.scopes)for(l=0,t=this.scopes.length;l<t;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function v6(e){return new $c(e)}function Gi(e,n=me){n&&n.active&&n.effects.push(e)}function Qi(){return me}function Xi(e){me?me.cleanups.push(e):Fo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ra=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Sc=e=>(e.w&_n)>0,Pc=e=>(e.n&_n)>0,s8=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=_n},e8=e=>{const{deps:n}=e;if(n.length){let l=0;for(let t=0;t<n.length;t++){const a=n[t];Sc(a)&&!Pc(a)?a.delete(e):n[l++]=a,a.w&=~_n,a.n&=~_n}n.length=l}},gt=new WeakMap;let bl=0,_n=1;const Dt=30;let ce;const Ln=Symbol("iterate"),Ct=Symbol("Map key iterate");class ca{constructor(n,l=null,t){this.fn=n,this.scheduler=l,this.active=!0,this.deps=[],this.parent=void 0,Gi(this,t)}run(){if(!this.active)return this.fn();let n=ce,l=hn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=ce,ce=this,hn=!0,_n=1<<++bl,bl<=Dt?s8(this):Ua(this),this.fn()}finally{bl<=Dt&&e8(this),_n=1<<--bl,ce=this.parent,hn=l,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ce===this?this.deferStop=!0:this.active&&(Ua(this),this.onStop&&this.onStop(),this.active=!1)}}function Ua(e){const{deps:n}=e;if(n.length){for(let l=0;l<n.length;l++)n[l].delete(e);n.length=0}}let hn=!0;const Vc=[];function Jn(){Vc.push(hn),hn=!1}function Yn(){const e=Vc.pop();hn=e===void 0?!0:e}function _e(e,n,l){if(hn&&ce){let t=gt.get(e);t||gt.set(e,t=new Map);let a=t.get(l);a||t.set(l,a=ra()),Oc(a,{effect:ce,target:e,type:n,key:l})}}function Oc(e,n){let l=!1;bl<=Dt?Pc(e)||(e.n|=_n,l=!Sc(e)):l=!e.has(ce),l&&(e.add(ce),ce.deps.push(e),ce.onTrack&&ce.onTrack(Object.assign({effect:ce},n)))}function nn(e,n,l,t,a,r){const c=gt.get(e);if(!c)return;let p=[];if(n==="clear")p=[...c.values()];else if(l==="length"&&cs(e)){const u=Eo(t);c.forEach((d,y)=>{(y==="length"||y>=u)&&p.push(d)})}else switch(l!==void 0&&p.push(c.get(l)),n){case"add":cs(e)?aa(l)&&p.push(c.get("length")):(p.push(c.get(Ln)),On(e)&&p.push(c.get(Ct)));break;case"delete":cs(e)||(p.push(c.get(Ln)),On(e)&&p.push(c.get(Ct)));break;case"set":On(e)&&p.push(c.get(Ln));break}const i={target:e,type:n,key:l,newValue:t,oldValue:a,oldTarget:r};if(p.length===1)p[0]&&Et(p[0],i);else{const u=[];for(const d of p)d&&u.push(...d);Et(ra(u),i)}}function Et(e,n){const l=cs(e)?e:[...e];for(const t of l)t.computed&&Wa(t,n);for(const t of l)t.computed||Wa(t,n)}function Wa(e,n){(e!==ce||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(zs({effect:e},n)),e.scheduler?e.scheduler():e.run())}const n8=Cn("__proto__,__v_isRef,__isVue"),Lc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(la)),l8=jo(),o8=jo(!1,!0),t8=jo(!0),a8=jo(!0,!0),qa=r8();function r8(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...l){const t=hs(this);for(let r=0,c=this.length;r<c;r++)_e(t,"get",r+"");const a=t[n](...l);return a===-1||a===!1?t[n](...l.map(hs)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...l){Jn();const t=hs(this)[n].apply(this,l);return Yn(),t}}),e}function jo(e=!1,n=!1){return function(t,a,r){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return n;if(a==="__v_raw"&&r===(e?n?zc:Hc:n?jc:Ic).get(t))return t;const c=cs(t);if(!e&&c&&As(qa,a))return Reflect.get(qa,a,r);const p=Reflect.get(t,a,r);return(la(a)?Lc.has(a):n8(a))||(e||_e(t,"get",a),n)?p:Fs(p)?c&&aa(a)?p:p.value:ws(p)?e?Sn(p):se(p):p}}const c8=Tc(),p8=Tc(!0);function Tc(e=!1){return function(l,t,a,r){let c=l[t];if(gn(c)&&Fs(c)&&!Fs(a))return!1;if(!e&&(!ko(a)&&!gn(a)&&(c=hs(c),a=hs(a)),!cs(l)&&Fs(c)&&!Fs(a)))return c.value=a,!0;const p=cs(l)&&aa(t)?Number(t)<l.length:As(l,t),i=Reflect.set(l,t,a,r);return l===hs(r)&&(p?Rl(a,c)&&nn(l,"set",t,a,c):nn(l,"add",t,a)),i}}function i8(e,n){const l=As(e,n),t=e[n],a=Reflect.deleteProperty(e,n);return a&&l&&nn(e,"delete",n,void 0,t),a}function u8(e,n){const l=Reflect.has(e,n);return(!la(n)||!Lc.has(n))&&_e(e,"has",n),l}function y8(e){return _e(e,"iterate",cs(e)?"length":Ln),Reflect.ownKeys(e)}const Nc={get:l8,set:c8,deleteProperty:i8,has:u8,ownKeys:y8},Mc={get:t8,set(e,n){return Fo(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0},deleteProperty(e,n){return Fo(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}},d8=zs({},Nc,{get:o8,set:p8}),f8=zs({},Mc,{get:a8}),pa=e=>e,Ho=e=>Reflect.getPrototypeOf(e);function oo(e,n,l=!1,t=!1){e=e.__v_raw;const a=hs(e),r=hs(n);l||(n!==r&&_e(a,"get",n),_e(a,"get",r));const{has:c}=Ho(a),p=t?pa:l?ua:Il;if(c.call(a,n))return p(e.get(n));if(c.call(a,r))return p(e.get(r));e!==a&&e.get(n)}function to(e,n=!1){const l=this.__v_raw,t=hs(l),a=hs(e);return n||(e!==a&&_e(t,"has",e),_e(t,"has",a)),e===a?l.has(e):l.has(e)||l.has(a)}function ao(e,n=!1){return e=e.__v_raw,!n&&_e(hs(e),"iterate",Ln),Reflect.get(e,"size",e)}function Ka(e){e=hs(e);const n=hs(this);return Ho(n).has.call(n,e)||(n.add(e),nn(n,"add",e,e)),this}function Ja(e,n){n=hs(n);const l=hs(this),{has:t,get:a}=Ho(l);let r=t.call(l,e);r?Rc(l,t,e):(e=hs(e),r=t.call(l,e));const c=a.call(l,e);return l.set(e,n),r?Rl(n,c)&&nn(l,"set",e,n,c):nn(l,"add",e,n),this}function Ya(e){const n=hs(this),{has:l,get:t}=Ho(n);let a=l.call(n,e);a?Rc(n,l,e):(e=hs(e),a=l.call(n,e));const r=t?t.call(n,e):void 0,c=n.delete(e);return a&&nn(n,"delete",e,void 0,r),c}function Za(){const e=hs(this),n=e.size!==0,l=On(e)?new Map(e):new Set(e),t=e.clear();return n&&nn(e,"clear",void 0,void 0,l),t}function ro(e,n){return function(t,a){const r=this,c=r.__v_raw,p=hs(c),i=n?pa:e?ua:Il;return!e&&_e(p,"iterate",Ln),c.forEach((u,d)=>t.call(a,i(u),i(d),r))}}function co(e,n,l){return function(...t){const a=this.__v_raw,r=hs(a),c=On(r),p=e==="entries"||e===Symbol.iterator&&c,i=e==="keys"&&c,u=a[e](...t),d=l?pa:n?ua:Il;return!n&&_e(r,"iterate",i?Ct:Ln),{next(){const{value:y,done:f}=u.next();return f?{value:y,done:f}:{value:p?[d(y[0]),d(y[1])]:d(y),done:f}},[Symbol.iterator](){return this}}}}function rn(e){return function(...n){{const l=n[0]?`on key "${n[0]}" `:"";console.warn(`${zn(e)} operation ${l}failed: target is readonly.`,hs(this))}return e==="delete"?!1:this}}function h8(){const e={get(r){return oo(this,r)},get size(){return ao(this)},has:to,add:Ka,set:Ja,delete:Ya,clear:Za,forEach:ro(!1,!1)},n={get(r){return oo(this,r,!1,!0)},get size(){return ao(this)},has:to,add:Ka,set:Ja,delete:Ya,clear:Za,forEach:ro(!1,!0)},l={get(r){return oo(this,r,!0)},get size(){return ao(this,!0)},has(r){return to.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:ro(!0,!1)},t={get(r){return oo(this,r,!0,!0)},get size(){return ao(this,!0)},has(r){return to.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=co(r,!1,!1),l[r]=co(r,!0,!1),n[r]=co(r,!1,!0),t[r]=co(r,!0,!0)}),[e,l,n,t]}const[m8,v8,B8,A8]=h8();function zo(e,n){const l=n?e?A8:B8:e?v8:m8;return(t,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?t:Reflect.get(As(l,a)&&a in t?l:t,a,r)}const _8={get:zo(!1,!1)},g8={get:zo(!1,!0)},D8={get:zo(!0,!1)},C8={get:zo(!0,!0)};function Rc(e,n,l){const t=hs(l);if(t!==l&&n.call(e,t)){const a=ta(e);console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ic=new WeakMap,jc=new WeakMap,Hc=new WeakMap,zc=new WeakMap;function E8(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function F8(e){return e.__v_skip||!Object.isExtensible(e)?0:E8(ta(e))}function se(e){return gn(e)?e:Uo(e,!1,Nc,_8,Ic)}function k8(e){return Uo(e,!1,d8,g8,jc)}function Sn(e){return Uo(e,!0,Mc,D8,Hc)}function al(e){return Uo(e,!0,f8,C8,zc)}function Uo(e,n,l,t,a){if(!ws(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=a.get(e);if(r)return r;const c=F8(e);if(c===0)return e;const p=new Proxy(e,c===2?t:l);return a.set(e,p),p}function Tn(e){return gn(e)?Tn(e.__v_raw):!!(e&&e.__v_isReactive)}function gn(e){return!!(e&&e.__v_isReadonly)}function ko(e){return!!(e&&e.__v_isShallow)}function xo(e){return Tn(e)||gn(e)}function hs(e){const n=e&&e.__v_raw;return n?hs(n):e}function ia(e){return Co(e,"__v_skip",!0),e}const Il=e=>ws(e)?se(e):e,ua=e=>ws(e)?Sn(e):e;function ya(e){hn&&ce&&(e=hs(e),Oc(e.dep||(e.dep=ra()),{target:e,type:"get",key:"value"}))}function da(e,n){e=hs(e),e.dep&&Et(e.dep,{target:e,type:"set",key:"value",newValue:n})}function Fs(e){return!!(e&&e.__v_isRef===!0)}function ls(e){return Uc(e,!1)}function ze(e){return Uc(e,!0)}function Uc(e,n){return Fs(e)?e:new x8(e,n)}class x8{constructor(n,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?n:hs(n),this._value=l?n:Il(n)}get value(){return ya(this),this._value}set value(n){const l=this.__v_isShallow||ko(n)||gn(n);n=l?n:hs(n),Rl(n,this._rawValue)&&(this._rawValue=n,this._value=l?n:Il(n),da(this,n))}}function C(e){return Fs(e)?e.value:e}const b8={get:(e,n,l)=>C(Reflect.get(e,n,l)),set:(e,n,l,t)=>{const a=e[n];return Fs(a)&&!Fs(l)?(a.value=l,!0):Reflect.set(e,n,l,t)}};function Wc(e){return Tn(e)?e:new Proxy(e,b8)}class w8{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:t}=n(()=>ya(this),()=>da(this));this._get=l,this._set=t}get value(){return this._get()}set value(n){this._set(n)}}function qc(e){return new w8(e)}function $8(e){xo(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=cs(e)?new Array(e.length):{};for(const l in e)n[l]=P8(e,l);return n}class S8{constructor(n,l,t){this._object=n,this._key=l,this._defaultValue=t,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function P8(e,n,l){const t=e[n];return Fs(t)?t:new S8(e,n,l)}var Kc;class V8{constructor(n,l,t,a){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this[Kc]=!1,this._dirty=!0,this.effect=new ca(n,()=>{this._dirty||(this._dirty=!0,da(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=t}get value(){const n=hs(this);return ya(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Kc="__v_isReadonly";function O8(e,n,l=!1){let t,a;const r=is(e);r?(t=e,a=()=>{console.warn("Write operation failed: computed value is readonly")}):(t=e.get,a=e.set);const c=new V8(t,a,r||!a,l);return n&&!l&&(c.effect.onTrack=n.onTrack,c.effect.onTrigger=n.onTrigger),c}const Nn=[];function ho(e){Nn.push(e)}function mo(){Nn.pop()}function R(e,...n){Jn();const l=Nn.length?Nn[Nn.length-1].component:null,t=l&&l.appContext.config.warnHandler,a=L8();if(t)sn(t,l,11,[e+n.join(""),l&&l.proxy,a.map(({vnode:r})=>`at <${et(l,r.type)}>`).join(`
`),a]);else{const r=[`[Vue warn]: ${e}`,...n];a.length&&r.push(`
`,...T8(a)),console.warn(...r)}Yn()}function L8(){let e=Nn[Nn.length-1];if(!e)return[];const n=[];for(;e;){const l=n[0];l&&l.vnode===e?l.recurseCount++:n.push({vnode:e,recurseCount:0});const t=e.component&&e.component.parent;e=t&&t.vnode}return n}function T8(e){const n=[];return e.forEach((l,t)=>{n.push(...t===0?[]:[`
`],...N8(l))}),n}function N8({vnode:e,recurseCount:n}){const l=n>0?`... (${n} recursive calls)`:"",t=e.component?e.component.parent==null:!1,a=` at <${et(e.component,e.type,t)}`,r=">"+l;return e.props?[a,...M8(e.props),r]:[a+r]}function M8(e){const n=[],l=Object.keys(e);return l.slice(0,3).forEach(t=>{n.push(...Jc(t,e[t]))}),l.length>3&&n.push(" ..."),n}function Jc(e,n,l){return Ts(n)?(n=JSON.stringify(n),l?n:[`${e}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?l?n:[`${e}=${n}`]:Fs(n)?(n=Jc(e,hs(n.value),!0),l?n:[`${e}=Ref<`,n,">"]):is(n)?[`${e}=fn${n.name?`<${n.name}>`:""}`]:(n=hs(n),l?n:[`${e}=`,n])}const fa={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function sn(e,n,l,t){let a;try{a=t?e(...t):e()}catch(r){Wo(r,n,l)}return a}function $e(e,n,l,t){if(is(e)){const r=sn(e,n,l,t);return r&&oa(r)&&r.catch(c=>{Wo(c,n,l)}),r}const a=[];for(let r=0;r<e.length;r++)a.push($e(e[r],n,l,t));return a}function Wo(e,n,l,t=!0){const a=n?n.vnode:null;if(n){let r=n.parent;const c=n.proxy,p=fa[l];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,p)===!1)return}r=r.parent}const i=n.appContext.config.errorHandler;if(i){sn(i,null,10,[e,c,p]);return}}R8(e,l,a,t)}function R8(e,n,l,t=!0){{const a=fa[n];if(l&&ho(l),R(`Unhandled error${a?` during execution of ${a}`:""}`),l&&mo(),t)throw e;console.error(e)}}let jl=!1,Ft=!1;const ne=[];let Ne=0;const pl=[];let Te=null,pn=0;const Yc=Promise.resolve();let ha=null;const I8=100;function Se(e){const n=ha||Yc;return e?n.then(this?e.bind(this):e):n}function j8(e){let n=Ne+1,l=ne.length;for(;n<l;){const t=n+l>>>1;Hl(ne[t])<e?n=t+1:l=t}return n}function qo(e){(!ne.length||!ne.includes(e,jl&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ne.push(e):ne.splice(j8(e.id),0,e),Zc())}function Zc(){!jl&&!Ft&&(Ft=!0,ha=Yc.then(Xc))}function H8(e){const n=ne.indexOf(e);n>Ne&&ne.splice(n,1)}function Gc(e){cs(e)?pl.push(...e):(!Te||!Te.includes(e,e.allowRecurse?pn+1:pn))&&pl.push(e),Zc()}function Ga(e,n=jl?Ne+1:0){for(e=e||new Map;n<ne.length;n++){const l=ne[n];if(l&&l.pre){if(ma(e,l))continue;ne.splice(n,1),n--,l()}}}function Qc(e){if(pl.length){const n=[...new Set(pl)];if(pl.length=0,Te){Te.push(...n);return}for(Te=n,e=e||new Map,Te.sort((l,t)=>Hl(l)-Hl(t)),pn=0;pn<Te.length;pn++)ma(e,Te[pn])||Te[pn]();Te=null,pn=0}}const Hl=e=>e.id==null?1/0:e.id,z8=(e,n)=>{const l=Hl(e)-Hl(n);if(l===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return l};function Xc(e){Ft=!1,jl=!0,e=e||new Map,ne.sort(z8);const n=l=>ma(e,l);try{for(Ne=0;Ne<ne.length;Ne++){const l=ne[Ne];if(l&&l.active!==!1){if(n(l))continue;sn(l,null,14)}}}finally{Ne=0,ne.length=0,Qc(e),jl=!1,ha=null,(ne.length||pl.length)&&Xc(e)}}function ma(e,n){if(!e.has(n))e.set(n,1);else{const l=e.get(n);if(l>I8){const t=n.ownerInstance,a=t&&Wl(t.type);return R(`Maximum recursive updates exceeded${a?` in component <${a}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(n,l+1)}}let mn=!1;const ll=new Set;wc().__VUE_HMR_RUNTIME__={createRecord:tt(sp),rerender:tt(q8),reload:tt(K8)};const Un=new Map;function U8(e){const n=e.type.__hmrId;let l=Un.get(n);l||(sp(n,e.type),l=Un.get(n)),l.instances.add(e)}function W8(e){Un.get(e.type.__hmrId).instances.delete(e)}function sp(e,n){return Un.has(e)?!1:(Un.set(e,{initialDef:Pl(n),instances:new Set}),!0)}function Pl(e){return Pp(e)?e.__vccOpts:e}function q8(e,n){const l=Un.get(e);l&&(l.initialDef.render=n,[...l.instances].forEach(t=>{n&&(t.render=n,Pl(t.type).render=n),t.renderCache=[],mn=!0,t.update(),mn=!1}))}function K8(e,n){const l=Un.get(e);if(!l)return;n=Pl(n),Qa(l.initialDef,n);const t=[...l.instances];for(const a of t){const r=Pl(a.type);ll.has(r)||(r!==l.initialDef&&Qa(r,n),ll.add(r)),a.appContext.optionsCache.delete(a.type),a.ceReload?(ll.add(r),a.ceReload(n.styles),ll.delete(r)):a.parent?qo(a.parent.update):a.appContext.reload?a.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Gc(()=>{for(const a of t)ll.delete(Pl(a.type))})}function Qa(e,n){zs(e,n);for(const l in e)l!=="__file"&&!(l in n)&&delete e[l]}function tt(e){return(n,l)=>{try{return e(n,l)}catch(t){console.error(t),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Me,wl=[],kt=!1;function so(e,...n){Me?Me.emit(e,...n):kt||wl.push({event:e,args:n})}function ep(e,n){var l,t;Me=e,Me?(Me.enabled=!0,wl.forEach(({event:a,args:r})=>Me.emit(a,...r)),wl=[]):typeof window<"u"&&window.HTMLElement&&!(!((t=(l=window.navigator)===null||l===void 0?void 0:l.userAgent)===null||t===void 0)&&t.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{ep(r,n)}),setTimeout(()=>{Me||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,kt=!0,wl=[])},3e3)):(kt=!0,wl=[])}function J8(e,n){so("app:init",e,n,{Fragment:ks,Text:no,Comment:de,Static:vo})}function Y8(e){so("app:unmount",e)}const xt=va("component:added"),np=va("component:updated"),Z8=va("component:removed"),G8=e=>{Me&&typeof Me.cleanupBuffer=="function"&&!Me.cleanupBuffer(e)&&Z8(e)};function va(e){return n=>{so(e,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const Q8=lp("perf:start"),X8=lp("perf:end");function lp(e){return(n,l,t)=>{so(e,n.appContext.app,n.uid,n,l,t)}}function su(e,n,l){so("component:emit",e.appContext.app,e,n,l)}function eu(e,n,...l){if(e.isUnmounted)return;const t=e.vnode.props||Vs;{const{emitsOptions:d,propsOptions:[y]}=e;if(d)if(!(n in d))(!y||!(xn(n)in y))&&R(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${xn(n)}" prop.`);else{const f=d[n];is(f)&&(f(...l)||R(`Invalid event arguments: event validation failed for event "${n}".`))}}let a=l;const r=n.startsWith("update:"),c=r&&n.slice(7);if(c&&c in t){const d=`${c==="modelValue"?"model":c}Modifiers`,{number:y,trim:f}=t[d]||Vs;f&&(a=l.map(m=>Ts(m)?m.trim():m)),y&&(a=l.map(Eo))}su(e,n,a);{const d=n.toLowerCase();d!==n&&t[xn(d)]&&R(`Event "${d}" is emitted in component ${et(e,e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${en(n)}" instead of "${n}".`)}let p,i=t[p=xn(n)]||t[p=xn(He(n))];!i&&r&&(i=t[p=xn(en(n))]),i&&$e(i,e,6,a);const u=t[p+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[p])return;e.emitted[p]=!0,$e(u,e,6,a)}}function op(e,n,l=!1){const t=n.emitsCache,a=t.get(e);if(a!==void 0)return a;const r=e.emits;let c={},p=!1;if(!is(e)){const i=u=>{const d=op(u,n,!0);d&&(p=!0,zs(c,d))};!l&&n.mixins.length&&n.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!p?(ws(e)&&t.set(e,null),null):(cs(r)?r.forEach(i=>c[i]=null):zs(c,r),ws(e)&&t.set(e,c),c)}function Ko(e,n){return!e||!Xl(n)?!1:(n=n.slice(2).replace(/Once$/,""),As(e,n[0].toLowerCase()+n.slice(1))||As(e,en(n))||As(e,n))}let Ks=null,Jo=null;function bo(e){const n=Ks;return Ks=e,Jo=e&&e.type.__scopeId||null,n}function B6(e){Jo=e}function A6(){Jo=null}function g(e,n=Ks,l){if(!n||e._n)return e;const t=(...a)=>{t._d&&ir(-1);const r=bo(n);let c;try{c=e(...a)}finally{bo(r),t._d&&ir(1)}return np(n),c};return t._n=!0,t._c=!0,t._d=!0,t}let bt=!1;function wo(){bt=!0}function at(e){const{type:n,vnode:l,proxy:t,withProxy:a,props:r,propsOptions:[c],slots:p,attrs:i,emit:u,render:d,renderCache:y,data:f,setupState:m,ctx:v,inheritAttrs:_}=e;let D,P;const k=bo(e);bt=!1;try{if(l.shapeFlag&4){const Q=a||t;D=be(d.call(Q,Q,y,r,m,f,v)),P=i}else{const Q=n;i===r&&wo(),D=be(Q.length>1?Q(r,{get attrs(){return wo(),i},slots:p,emit:u}):Q(r,null)),P=n.props?i:lu(i)}}catch(Q){Ol.length=0,Wo(Q,e,1),D=F(de)}let S=D,N;if(D.patchFlag>0&&D.patchFlag&2048&&([S,N]=nu(D)),P&&_!==!1){const Q=Object.keys(P),{shapeFlag:J}=S;if(Q.length){if(J&7)c&&Q.some(Do)&&(P=ou(P,c)),S=on(S,P);else if(!bt&&S.type!==de){const q=Object.keys(i),ts=[],ys=[];for(let vs=0,Ds=q.length;vs<Ds;vs++){const Rs=q[vs];Xl(Rs)?Do(Rs)||ts.push(Rs[2].toLowerCase()+Rs.slice(3)):ys.push(Rs)}ys.length&&R(`Extraneous non-props attributes (${ys.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),ts.length&&R(`Extraneous non-emits event listeners (${ts.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return l.dirs&&(Xa(S)||R("Runtime directive used on component with non-element root node. The directives will not function as intended."),S=on(S),S.dirs=S.dirs?S.dirs.concat(l.dirs):l.dirs),l.transition&&(Xa(S)||R("Component inside <Transition> renders non-element root node that cannot be animated."),S.transition=l.transition),N?N(S):D=S,bo(k),D}const nu=e=>{const n=e.children,l=e.dynamicChildren,t=tp(n);if(!t)return[e,void 0];const a=n.indexOf(t),r=l?l.indexOf(t):-1,c=p=>{n[a]=p,l&&(r>-1?l[r]=p:p.patchFlag>0&&(e.dynamicChildren=[...l,p]))};return[be(t),c]};function tp(e){let n;for(let l=0;l<e.length;l++){const t=e[l];if(Wn(t)){if(t.type!==de||t.children==="v-if"){if(n)return;n=t}}else return}return n}const lu=e=>{let n;for(const l in e)(l==="class"||l==="style"||Xl(l))&&((n||(n={}))[l]=e[l]);return n},ou=(e,n)=>{const l={};for(const t in e)(!Do(t)||!(t.slice(9)in n))&&(l[t]=e[t]);return l},Xa=e=>e.shapeFlag&7||e.type===de;function tu(e,n,l){const{props:t,children:a,component:r}=e,{props:c,children:p,patchFlag:i}=n,u=r.emitsOptions;if((a||p)&&mn||n.dirs||n.transition)return!0;if(l&&i>=0){if(i&1024)return!0;if(i&16)return t?sr(t,c,u):!!c;if(i&8){const d=n.dynamicProps;for(let y=0;y<d.length;y++){const f=d[y];if(c[f]!==t[f]&&!Ko(u,f))return!0}}}else return(a||p)&&(!p||!p.$stable)?!0:t===c?!1:t?c?sr(t,c,u):!0:!!c;return!1}function sr(e,n,l){const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!0;for(let a=0;a<t.length;a++){const r=t[a];if(n[r]!==e[r]&&!Ko(l,r))return!0}return!1}function au({vnode:e,parent:n},l){for(;n&&n.subTree===e;)(e=n.vnode).el=l,n=n.parent}const ap=e=>e.__isSuspense;function ru(e,n){n&&n.pendingBranch?cs(e)?n.effects.push(...e):n.effects.push(e):Gc(e)}function Be(e,n){if(!Ws)R("provide() can only be used inside setup().");else{let l=Ws.provides;const t=Ws.parent&&Ws.parent.provides;t===l&&(l=Ws.provides=Object.create(t)),l[e]=n}}function x(e,n,l=!1){const t=Ws||Ks;if(t){const a=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return l&&is(n)?n.call(t.proxy):n;R(`injection "${String(e)}" not found.`)}else R("inject() can only be used inside setup() or functional components.")}function ml(e,n){return Ba(e,null,n)}const po={};function Is(e,n,l){return is(n)||R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ba(e,n,l)}function Ba(e,n,{immediate:l,deep:t,flush:a,onTrack:r,onTrigger:c}=Vs){n||(l!==void 0&&R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),t!==void 0&&R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const p=N=>{R("Invalid watch source: ",N,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},i=Ws;let u,d=!1,y=!1;if(Fs(e)?(u=()=>e.value,d=ko(e)):Tn(e)?(u=()=>e,t=!0):cs(e)?(y=!0,d=e.some(N=>Tn(N)||ko(N)),u=()=>e.map(N=>{if(Fs(N))return N.value;if(Tn(N))return Pn(N);if(is(N))return sn(N,i,2);p(N)})):is(e)?n?u=()=>sn(e,i,2):u=()=>{if(!(i&&i.isUnmounted))return f&&f(),$e(e,i,3,[m])}:(u=ye,p(e)),n&&t){const N=u;u=()=>Pn(N())}let f,m=N=>{f=k.onStop=()=>{sn(N,i,4)}},v;if(Ul)if(m=ye,n?l&&$e(n,i,3,[u(),y?[]:void 0,m]):u(),a==="sync"){const N=yy();v=N.__watcherHandles||(N.__watcherHandles=[])}else return ye;let _=y?new Array(e.length).fill(po):po;const D=()=>{if(k.active)if(n){const N=k.run();(t||d||(y?N.some((Q,J)=>Rl(Q,_[J])):Rl(N,_)))&&(f&&f(),$e(n,i,3,[N,_===po?void 0:y&&_[0]===po?[]:_,m]),_=N)}else k.run()};D.allowRecurse=!!n;let P;a==="sync"?P=D:a==="post"?P=()=>Qs(D,i&&i.suspense):(D.pre=!0,i&&(D.id=i.uid),P=()=>qo(D));const k=new ca(u,P);k.onTrack=r,k.onTrigger=c,n?l?D():_=k.run():a==="post"?Qs(k.run.bind(k),i&&i.suspense):k.run();const S=()=>{k.stop(),i&&i.scope&&na(i.scope.effects,k)};return v&&v.push(S),S}function cu(e,n,l){const t=this.proxy,a=Ts(e)?e.includes(".")?rp(t,e):()=>t[e]:e.bind(t,t);let r;is(n)?r=n:(r=n.handler,l=n);const c=Ws;dl(this);const p=Ba(a,r.bind(t),l);return c?dl(c):Rn(),p}function rp(e,n){const l=n.split(".");return()=>{let t=e;for(let a=0;a<l.length&&t;a++)t=t[l[a]];return t}}function Pn(e,n){if(!ws(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Fs(e))Pn(e.value,n);else if(cs(e))for(let l=0;l<e.length;l++)Pn(e[l],n);else if(kc(e)||On(e))e.forEach(l=>{Pn(l,n)});else if(bc(e))for(const l in e)Pn(e[l],n);return e}function cp(e,n){e.shapeFlag&6&&e.component?cp(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Ms(e){return is(e)?{setup:e,name:e.name}:e}const il=e=>!!e.type.__asyncLoader,Aa=e=>e.type.__isKeepAlive,pu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const l=En(),t=l.ctx;if(!t.renderer)return()=>{const k=n.default&&n.default();return k&&k.length===1?k[0]:k};const a=new Map,r=new Set;let c=null;l.__v_cache=a;const p=l.suspense,{renderer:{p:i,m:u,um:d,o:{createElement:y}}}=t,f=y("div");t.activate=(k,S,N,Q,J)=>{const q=k.component;u(k,S,N,0,p),i(q.vnode,k,S,N,q,p,Q,k.slotScopeIds,J),Qs(()=>{q.isDeactivated=!1,q.a&&dn(q.a);const ts=k.props&&k.props.onVnodeMounted;ts&&De(ts,q.parent,k)},p),xt(q)},t.deactivate=k=>{const S=k.component;u(k,f,null,1,p),Qs(()=>{S.da&&dn(S.da);const N=k.props&&k.props.onVnodeUnmounted;N&&De(N,S.parent,k),S.isDeactivated=!0},p),xt(S)};function m(k){rt(k),d(k,l,p,!0)}function v(k){a.forEach((S,N)=>{const Q=Wl(S.type);Q&&(!k||!k(Q))&&_(N)})}function _(k){const S=a.get(k);!c||S.type!==c.type?m(S):c&&rt(c),a.delete(k),r.delete(k)}Is(()=>[e.include,e.exclude],([k,S])=>{k&&v(N=>$l(k,N)),S&&v(N=>!$l(S,N))},{flush:"post",deep:!0});let D=null;const P=()=>{D!=null&&a.set(D,ct(l.subTree))};return Zo(P),up(P),yp(()=>{a.forEach(k=>{const{subTree:S,suspense:N}=l,Q=ct(S);if(k.type===Q.type){rt(Q);const J=Q.component.da;J&&Qs(J,N);return}m(k)})}),()=>{if(D=null,!n.default)return null;const k=n.default(),S=k[0];if(k.length>1)return R("KeepAlive should contain exactly one component child."),c=null,k;if(!Wn(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return c=null,S;let N=ct(S);const Q=N.type,J=Wl(il(N)?N.type.__asyncResolved||{}:Q),{include:q,exclude:ts,max:ys}=e;if(q&&(!J||!$l(q,J))||ts&&J&&$l(ts,J))return c=N,S;const vs=N.key==null?Q:N.key,Ds=a.get(vs);return N.el&&(N=on(N),S.shapeFlag&128&&(S.ssContent=N)),D=vs,Ds?(N.el=Ds.el,N.component=Ds.component,N.transition&&cp(N,N.transition),N.shapeFlag|=512,r.delete(vs),r.add(vs)):(r.add(vs),ys&&r.size>parseInt(ys,10)&&_(r.values().next().value)),N.shapeFlag|=256,c=N,ap(S.type)?S:N}}},pp=pu;function $l(e,n){return cs(e)?e.some(l=>$l(l,n)):Ts(e)?e.split(",").includes(n):e.test?e.test(n):!1}function iu(e,n){ip(e,"a",n)}function uu(e,n){ip(e,"da",n)}function ip(e,n,l=Ws){const t=e.__wdc||(e.__wdc=()=>{let a=l;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Yo(n,t,l),l){let a=l.parent;for(;a&&a.parent;)Aa(a.parent.vnode)&&yu(t,n,l,a),a=a.parent}}function yu(e,n,l,t){const a=Yo(n,e,t,!0);Go(()=>{na(t[n],a)},l)}function rt(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ct(e){return e.shapeFlag&128?e.ssContent:e}function Yo(e,n,l=Ws,t=!1){if(l){const a=l[e]||(l[e]=[]),r=n.__weh||(n.__weh=(...c)=>{if(l.isUnmounted)return;Jn(),dl(l);const p=$e(n,l,e,c);return Rn(),Yn(),p});return t?a.unshift(r):a.push(r),r}else{const a=xn(fa[e].replace(/ hook$/,""));R(`${a} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const tn=e=>(n,l=Ws)=>(!Ul||e==="sp")&&Yo(e,(...t)=>n(...t),l),du=tn("bm"),Zo=tn("m"),fu=tn("bu"),up=tn("u"),yp=tn("bum"),Go=tn("um"),hu=tn("sp"),mu=tn("rtg"),vu=tn("rtc");function Bu(e,n=Ws){Yo("ec",e,n)}function dp(e){Ji(e)&&R("Do not use built-in directive ids as custom directive id: "+e)}function Pe(e,n){const l=Ks;if(l===null)return R("withDirectives can only be used inside render functions."),e;const t=st(l)||l.proxy,a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[c,p,i,u=Vs]=n[r];c&&(is(c)&&(c={mounted:c,updated:c}),c.deep&&Pn(p),a.push({dir:c,instance:t,value:p,oldValue:void 0,arg:i,modifiers:u}))}return e}function Fn(e,n,l,t){const a=e.dirs,r=n&&n.dirs;for(let c=0;c<a.length;c++){const p=a[c];r&&(p.oldValue=r[c].value);let i=p.dir[t];i&&(Jn(),$e(i,l,8,[e.el,p,e,n]),Yn())}}const wt="components",Au="directives";function _u(e,n){return fp(wt,e,!0,n)||e}const gu=Symbol();function Qo(e){return fp(Au,e)}function fp(e,n,l=!0,t=!1){const a=Ks||Ws;if(a){const r=a.type;if(e===wt){const p=Wl(r,!1);if(p&&(p===n||p===He(n)||p===zn(He(n))))return r}const c=er(a[e]||r[e],n)||er(a.appContext[e],n);if(!c&&t)return r;if(l&&!c){const p=e===wt?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";R(`Failed to resolve ${e.slice(0,-1)}: ${n}${p}`)}return c}else R(`resolve${zn(e.slice(0,-1))} can only be used in render() or setup().`)}function er(e,n){return e&&(e[n]||e[He(n)]||e[zn(He(n))])}function eo(e,n,l,t){let a;const r=l&&l[t];if(cs(e)||Ts(e)){a=new Array(e.length);for(let c=0,p=e.length;c<p;c++)a[c]=n(e[c],c,void 0,r&&r[c])}else if(typeof e=="number"){Number.isInteger(e)||R(`The v-for range expect an integer value but got ${e}.`),a=new Array(e);for(let c=0;c<e;c++)a[c]=n(c+1,c,void 0,r&&r[c])}else if(ws(e))if(e[Symbol.iterator])a=Array.from(e,(c,p)=>n(c,p,void 0,r&&r[p]));else{const c=Object.keys(e);a=new Array(c.length);for(let p=0,i=c.length;p<i;p++){const u=c[p];a[p]=n(e[u],u,p,r&&r[p])}}else a=[];return l&&(l[t]=a),a}function ln(e,n,l={},t,a){if(Ks.isCE||Ks.parent&&il(Ks.parent)&&Ks.parent.isCE)return n!=="default"&&(l.name=n),F("slot",l,t&&t());let r=e[n];r&&r.length>1&&(R("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),A();const c=r&&hp(r(l)),p=V(ks,{key:l.key||c&&c.key||`_${n}`},c||(t?t():[]),c&&e._===1?64:-2);return!a&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),r&&r._c&&(r._d=!0),p}function hp(e){return e.some(n=>Wn(n)?!(n.type===de||n.type===ks&&!hp(n.children)):!0)?e:null}const $t=e=>e?wp(e)?st(e)||e.proxy:$t(e.parent):null,Mn=zs(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>al(e.props),$attrs:e=>al(e.attrs),$slots:e=>al(e.slots),$refs:e=>al(e.refs),$parent:e=>$t(e.parent),$root:e=>$t(e.root),$emit:e=>e.emit,$options:e=>ga(e),$forceUpdate:e=>e.f||(e.f=()=>qo(e.update)),$nextTick:e=>e.n||(e.n=Se.bind(e.proxy)),$watch:e=>cu.bind(e)}),_a=e=>e==="_"||e==="$",pt=(e,n)=>e!==Vs&&!e.__isScriptSetup&&As(e,n),mp={get({_:e},n){const{ctx:l,setupState:t,data:a,props:r,accessCache:c,type:p,appContext:i}=e;if(n==="__isVue")return!0;let u;if(n[0]!=="$"){const m=c[n];if(m!==void 0)switch(m){case 1:return t[n];case 2:return a[n];case 4:return l[n];case 3:return r[n]}else{if(pt(t,n))return c[n]=1,t[n];if(a!==Vs&&As(a,n))return c[n]=2,a[n];if((u=e.propsOptions[0])&&As(u,n))return c[n]=3,r[n];if(l!==Vs&&As(l,n))return c[n]=4,l[n];St&&(c[n]=0)}}const d=Mn[n];let y,f;if(d)return n==="$attrs"&&(_e(e,"get",n),wo()),d(e);if((y=p.__cssModules)&&(y=y[n]))return y;if(l!==Vs&&As(l,n))return c[n]=4,l[n];if(f=i.config.globalProperties,As(f,n))return f[n];Ks&&(!Ts(n)||n.indexOf("__v")!==0)&&(a!==Vs&&_a(n[0])&&As(a,n)?R(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ks&&R(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:e},n,l){const{data:t,setupState:a,ctx:r}=e;return pt(a,n)?(a[n]=l,!0):a.__isScriptSetup&&As(a,n)?(R(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):t!==Vs&&As(t,n)?(t[n]=l,!0):As(e.props,n)?(R(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in e?(R(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in e.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:l}):r[n]=l,!0)},has({_:{data:e,setupState:n,accessCache:l,ctx:t,appContext:a,propsOptions:r}},c){let p;return!!l[c]||e!==Vs&&As(e,c)||pt(n,c)||(p=r[0])&&As(p,c)||As(t,c)||As(Mn,c)||As(a.config.globalProperties,c)},defineProperty(e,n,l){return l.get!=null?e._.accessCache[n]=0:As(l,"value")&&this.set(e,n,l.value,null),Reflect.defineProperty(e,n,l)}};mp.ownKeys=e=>(R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Du(e){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Mn).forEach(l=>{Object.defineProperty(n,l,{configurable:!0,enumerable:!1,get:()=>Mn[l](e),set:ye})}),n}function Cu(e){const{ctx:n,propsOptions:[l]}=e;l&&Object.keys(l).forEach(t=>{Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:()=>e.props[t],set:ye})})}function Eu(e){const{ctx:n,setupState:l}=e;Object.keys(hs(l)).forEach(t=>{if(!l.__isScriptSetup){if(_a(t[0])){R(`setup() return property ${JSON.stringify(t)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:()=>l[t],set:ye})}})}function Fu(){const e=Object.create(null);return(n,l)=>{e[l]?R(`${n} property "${l}" is already defined in ${e[l]}.`):e[l]=n}}let St=!0;function ku(e){const n=ga(e),l=e.proxy,t=e.ctx;St=!1,n.beforeCreate&&nr(n.beforeCreate,e,"bc");const{data:a,computed:r,methods:c,watch:p,provide:i,inject:u,created:d,beforeMount:y,mounted:f,beforeUpdate:m,updated:v,activated:_,deactivated:D,beforeDestroy:P,beforeUnmount:k,destroyed:S,unmounted:N,render:Q,renderTracked:J,renderTriggered:q,errorCaptured:ts,serverPrefetch:ys,expose:vs,inheritAttrs:Ds,components:Rs,directives:Zs,filters:Gs}=n,$s=Fu();{const[X]=e.propsOptions;if(X)for(const rs in X)$s("Props",rs)}if(u&&xu(u,t,$s,e.appContext.config.unwrapInjectedRef),c)for(const X in c){const rs=c[X];is(rs)?(Object.defineProperty(t,X,{value:rs.bind(l),configurable:!0,enumerable:!0,writable:!0}),$s("Methods",X)):R(`Method "${X}" has type "${typeof rs}" in the component definition. Did you reference the function correctly?`)}if(a){is(a)||R("The data option must be a function. Plain object usage is no longer supported.");const X=a.call(l,l);if(oa(X)&&R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!ws(X))R("data() should return an object.");else{e.data=se(X);for(const rs in X)$s("Data",rs),_a(rs[0])||Object.defineProperty(t,rs,{configurable:!0,enumerable:!0,get:()=>X[rs],set:ye})}}if(St=!0,r)for(const X in r){const rs=r[X],ms=is(rs)?rs.bind(l,l):is(rs.get)?rs.get.bind(l,l):ye;ms===ye&&R(`Computed property "${X}" has no getter.`);const Ss=!is(rs)&&is(rs.set)?rs.set.bind(l):()=>{R(`Write operation failed: computed property "${X}" is readonly.`)},fe=L({get:ms,set:Ss});Object.defineProperty(t,X,{enumerable:!0,configurable:!0,get:()=>fe.value,set:ee=>fe.value=ee}),$s("Computed",X)}if(p)for(const X in p)vp(p[X],t,l,X);if(i){const X=is(i)?i.call(l):i;Reflect.ownKeys(X).forEach(rs=>{Be(rs,X[rs])})}d&&nr(d,e,"c");function Ns(X,rs){cs(rs)?rs.forEach(ms=>X(ms.bind(l))):rs&&X(rs.bind(l))}if(Ns(du,y),Ns(Zo,f),Ns(fu,m),Ns(up,v),Ns(iu,_),Ns(uu,D),Ns(Bu,ts),Ns(vu,J),Ns(mu,q),Ns(yp,k),Ns(Go,N),Ns(hu,ys),cs(vs))if(vs.length){const X=e.exposed||(e.exposed={});vs.forEach(rs=>{Object.defineProperty(X,rs,{get:()=>l[rs],set:ms=>l[rs]=ms})})}else e.exposed||(e.exposed={});Q&&e.render===ye&&(e.render=Q),Ds!=null&&(e.inheritAttrs=Ds),Rs&&(e.components=Rs),Zs&&(e.directives=Zs)}function xu(e,n,l=ye,t=!1){cs(e)&&(e=Pt(e));for(const a in e){const r=e[a];let c;ws(r)?"default"in r?c=x(r.from||a,r.default,!0):c=x(r.from||a):c=x(r),Fs(c)?t?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>c.value,set:p=>c.value=p}):(R(`injected property "${a}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[a]=c):n[a]=c,l("Inject",a)}}function nr(e,n,l){$e(cs(e)?e.map(t=>t.bind(n.proxy)):e.bind(n.proxy),n,l)}function vp(e,n,l,t){const a=t.includes(".")?rp(l,t):()=>l[t];if(Ts(e)){const r=n[e];is(r)?Is(a,r):R(`Invalid watch handler specified by key "${e}"`,r)}else if(is(e))Is(a,e.bind(l));else if(ws(e))if(cs(e))e.forEach(r=>vp(r,n,l,t));else{const r=is(e.handler)?e.handler.bind(l):n[e.handler];is(r)?Is(a,r,e):R(`Invalid watch handler specified by key "${e.handler}"`,r)}else R(`Invalid watch option: "${t}"`,e)}function ga(e){const n=e.type,{mixins:l,extends:t}=n,{mixins:a,optionsCache:r,config:{optionMergeStrategies:c}}=e.appContext,p=r.get(n);let i;return p?i=p:!a.length&&!l&&!t?i=n:(i={},a.length&&a.forEach(u=>$o(i,u,c,!0)),$o(i,n,c)),ws(n)&&r.set(n,i),i}function $o(e,n,l,t=!1){const{mixins:a,extends:r}=n;r&&$o(e,r,l,!0),a&&a.forEach(c=>$o(e,c,l,!0));for(const c in n)if(t&&c==="expose")R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const p=bu[c]||l&&l[c];e[c]=p?p(e[c],n[c]):n[c]}return e}const bu={data:lr,props:bn,emits:bn,methods:bn,computed:bn,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:bn,directives:bn,watch:$u,provide:lr,inject:wu};function lr(e,n){return n?e?function(){return zs(is(e)?e.call(this,this):e,is(n)?n.call(this,this):n)}:n:e}function wu(e,n){return bn(Pt(e),Pt(n))}function Pt(e){if(cs(e)){const n={};for(let l=0;l<e.length;l++)n[e[l]]=e[l];return n}return e}function ae(e,n){return e?[...new Set([].concat(e,n))]:n}function bn(e,n){return e?zs(zs(Object.create(null),e),n):n}function $u(e,n){if(!e)return n;if(!n)return e;const l=zs(Object.create(null),e);for(const t in n)l[t]=ae(e[t],n[t]);return l}function Su(e,n,l,t=!1){const a={},r={};Co(r,Xo,1),e.propsDefaults=Object.create(null),Bp(e,n,a,r);for(const c in e.propsOptions[0])c in a||(a[c]=void 0);_p(n||{},a,e),l?e.props=t?a:k8(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function Pu(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function Vu(e,n,l,t){const{props:a,attrs:r,vnode:{patchFlag:c}}=e,p=hs(a),[i]=e.propsOptions;let u=!1;if(!Pu(e)&&(t||c>0)&&!(c&16)){if(c&8){const d=e.vnode.dynamicProps;for(let y=0;y<d.length;y++){let f=d[y];if(Ko(e.emitsOptions,f))continue;const m=n[f];if(i)if(As(r,f))m!==r[f]&&(r[f]=m,u=!0);else{const v=He(f);a[v]=Vt(i,p,v,m,e,!1)}else m!==r[f]&&(r[f]=m,u=!0)}}}else{Bp(e,n,a,r)&&(u=!0);let d;for(const y in p)(!n||!As(n,y)&&((d=en(y))===y||!As(n,d)))&&(i?l&&(l[y]!==void 0||l[d]!==void 0)&&(a[y]=Vt(i,p,y,void 0,e,!0)):delete a[y]);if(r!==p)for(const y in r)(!n||!As(n,y))&&(delete r[y],u=!0)}u&&nn(e,"set","$attrs"),_p(n||{},a,e)}function Bp(e,n,l,t){const[a,r]=e.propsOptions;let c=!1,p;if(n)for(let i in n){if(fo(i))continue;const u=n[i];let d;a&&As(a,d=He(i))?!r||!r.includes(d)?l[d]=u:(p||(p={}))[d]=u:Ko(e.emitsOptions,i)||(!(i in t)||u!==t[i])&&(t[i]=u,c=!0)}if(r){const i=hs(l),u=p||Vs;for(let d=0;d<r.length;d++){const y=r[d];l[y]=Vt(a,i,y,u[y],e,!As(u,y))}}return c}function Vt(e,n,l,t,a,r){const c=e[l];if(c!=null){const p=As(c,"default");if(p&&t===void 0){const i=c.default;if(c.type!==Function&&is(i)){const{propsDefaults:u}=a;l in u?t=u[l]:(dl(a),t=u[l]=i.call(null,n),Rn())}else t=i}c[0]&&(r&&!p?t=!1:c[1]&&(t===""||t===en(l))&&(t=!0))}return t}function Ap(e,n,l=!1){const t=n.propsCache,a=t.get(e);if(a)return a;const r=e.props,c={},p=[];let i=!1;if(!is(e)){const d=y=>{i=!0;const[f,m]=Ap(y,n,!0);zs(c,f),m&&p.push(...m)};!l&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!i)return ws(e)&&t.set(e,cl),cl;if(cs(r))for(let d=0;d<r.length;d++){Ts(r[d])||R("props must be strings when using array syntax.",r[d]);const y=He(r[d]);or(y)&&(c[y]=Vs)}else if(r){ws(r)||R("invalid props options",r);for(const d in r){const y=He(d);if(or(y)){const f=r[d],m=c[y]=cs(f)||is(f)?{type:f}:Object.assign({},f);if(m){const v=ar(Boolean,m.type),_=ar(String,m.type);m[0]=v>-1,m[1]=_<0||v<_,(v>-1||As(m,"default"))&&p.push(y)}}}}const u=[c,p];return ws(e)&&t.set(e,u),u}function or(e){return e[0]!=="$"?!0:(R(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Ot(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function tr(e,n){return Ot(e)===Ot(n)}function ar(e,n){return cs(n)?n.findIndex(l=>tr(l,e)):is(n)&&tr(n,e)?0:-1}function _p(e,n,l){const t=hs(n),a=l.propsOptions[0];for(const r in a){let c=a[r];c!=null&&Ou(r,t[r],c,!As(e,r)&&!As(e,en(r)))}}function Ou(e,n,l,t){const{type:a,required:r,validator:c}=l;if(r&&t){R('Missing required prop: "'+e+'"');return}if(!(n==null&&!l.required)){if(a!=null&&a!==!0){let p=!1;const i=cs(a)?a:[a],u=[];for(let d=0;d<i.length&&!p;d++){const{valid:y,expectedType:f}=Tu(n,i[d]);u.push(f||""),p=y}if(!p){R(Nu(e,n,u));return}}c&&!c(n)&&R('Invalid prop: custom validator check failed for prop "'+e+'".')}}const Lu=Cn("String,Number,Boolean,Function,Symbol,BigInt");function Tu(e,n){let l;const t=Ot(n);if(Lu(t)){const a=typeof e;l=a===t.toLowerCase(),!l&&a==="object"&&(l=e instanceof n)}else t==="Object"?l=ws(e):t==="Array"?l=cs(e):t==="null"?l=e===null:l=e instanceof n;return{valid:l,expectedType:t}}function Nu(e,n,l){let t=`Invalid prop: type check failed for prop "${e}". Expected ${l.map(zn).join(" | ")}`;const a=l[0],r=ta(n),c=rr(n,a),p=rr(n,r);return l.length===1&&cr(a)&&!Mu(a,r)&&(t+=` with value ${c}`),t+=`, got ${r} `,cr(r)&&(t+=`with value ${p}.`),t}function rr(e,n){return n==="String"?`"${e}"`:n==="Number"?`${Number(e)}`:`${e}`}function cr(e){return["string","number","boolean"].some(l=>e.toLowerCase()===l)}function Mu(...e){return e.some(n=>n.toLowerCase()==="boolean")}const gp=e=>e[0]==="_"||e==="$stable",Da=e=>cs(e)?e.map(be):[be(e)],Ru=(e,n,l)=>{if(n._n)return n;const t=g((...a)=>(Ws&&R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Da(n(...a))),l);return t._c=!1,t},Dp=(e,n,l)=>{const t=e._ctx;for(const a in e){if(gp(a))continue;const r=e[a];if(is(r))n[a]=Ru(a,r,t);else if(r!=null){R(`Non-function value encountered for slot "${a}". Prefer function slots for better performance.`);const c=Da(r);n[a]=()=>c}}},Cp=(e,n)=>{Aa(e.vnode)||R("Non-function value encountered for default slot. Prefer function slots for better performance.");const l=Da(n);e.slots.default=()=>l},Iu=(e,n)=>{if(e.vnode.shapeFlag&32){const l=n._;l?(e.slots=hs(n),Co(n,"_",l)):Dp(n,e.slots={})}else e.slots={},n&&Cp(e,n);Co(e.slots,Xo,1)},ju=(e,n,l)=>{const{vnode:t,slots:a}=e;let r=!0,c=Vs;if(t.shapeFlag&32){const p=n._;p?mn?zs(a,n):l&&p===1?r=!1:(zs(a,n),!l&&p===1&&delete a._):(r=!n.$stable,Dp(n,a)),c=n}else n&&(Cp(e,n),c={default:1});if(r)for(const p in a)!gp(p)&&!(p in c)&&delete a[p]};function Ep(){return{app:null,config:{isNativeTag:Fc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hu=0;function zu(e,n){return function(t,a=null){is(t)||(t=Object.assign({},t)),a!=null&&!ws(a)&&(R("root props passed to app.mount() must be an object."),a=null);const r=Ep(),c=new Set;let p=!1;const i=r.app={_uid:Hu++,_component:t,_props:a,_container:null,_context:r,_instance:null,version:yr,get config(){return r.config},set config(u){R("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return c.has(u)?R("Plugin has already been applied to target app."):u&&is(u.install)?(c.add(u),u.install(i,...d)):is(u)?(c.add(u),u(i,...d)):R('A plugin must either be a function or an object with an "install" function.'),i},mixin(u){return r.mixins.includes(u)?R("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),i},component(u,d){return Nt(u,r.config),d?(r.components[u]&&R(`Component "${u}" has already been registered in target app.`),r.components[u]=d,i):r.components[u]},directive(u,d){return dp(u),d?(r.directives[u]&&R(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,i):r.directives[u]},mount(u,d,y){if(p)R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=F(t,a);return f.appContext=r,r.reload=()=>{e(on(f),u,y)},d&&n?n(f,u):e(f,u,y),p=!0,i._container=u,u.__vue_app__=i,i._instance=f.component,J8(i,yr),st(f.component)||f.component.proxy}},unmount(){p?(e(null,i._container),i._instance=null,Y8(i),delete i._container.__vue_app__):R("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&R(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,i}};return i}}function Lt(e,n,l,t,a=!1){if(cs(e)){e.forEach((f,m)=>Lt(f,n&&(cs(n)?n[m]:n),l,t,a));return}if(il(t)&&!a)return;const r=t.shapeFlag&4?st(t.component)||t.component.proxy:t.el,c=a?null:r,{i:p,r:i}=e;if(!p){R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=n&&n.r,d=p.refs===Vs?p.refs={}:p.refs,y=p.setupState;if(u!=null&&u!==i&&(Ts(u)?(d[u]=null,As(y,u)&&(y[u]=null)):Fs(u)&&(u.value=null)),is(i))sn(i,p,12,[c,d]);else{const f=Ts(i),m=Fs(i);if(f||m){const v=()=>{if(e.f){const _=f?As(y,i)?y[i]:d[i]:i.value;a?cs(_)&&na(_,r):cs(_)?_.includes(r)||_.push(r):f?(d[i]=[r],As(y,i)&&(y[i]=d[i])):(i.value=[r],e.k&&(d[e.k]=i.value))}else f?(d[i]=c,As(y,i)&&(y[i]=c)):m?(i.value=c,e.k&&(d[e.k]=c)):R("Invalid template ref type:",i,`(${typeof i})`)};c?(v.id=-1,Qs(v,l)):v()}else R("Invalid template ref type:",i,`(${typeof i})`)}}let Al,fn;function Ke(e,n){e.appContext.config.performance&&So()&&fn.mark(`vue-${n}-${e.uid}`),Q8(e,n,So()?fn.now():Date.now())}function Je(e,n){if(e.appContext.config.performance&&So()){const l=`vue-${n}-${e.uid}`,t=l+":end";fn.mark(t),fn.measure(`<${et(e,e.type)}> ${n}`,l,t),fn.clearMarks(l),fn.clearMarks(t)}X8(e,n,So()?fn.now():Date.now())}function So(){return Al!==void 0||(typeof window<"u"&&window.performance?(Al=!0,fn=window.performance):Al=!1),Al}function Uu(){const e=[];if(e.length){const n=e.length>1;console.warn(`Feature flag${n?"s":""} ${e.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Qs=ru;function Wu(e){return qu(e)}function qu(e,n){Uu();const l=wc();l.__VUE__=!0,ep(l.__VUE_DEVTOOLS_GLOBAL_HOOK__,l);const{insert:t,remove:a,patchProp:r,createElement:c,createText:p,createComment:i,setText:u,setElementText:d,parentNode:y,nextSibling:f,setScopeId:m=ye,insertStaticContent:v}=e,_=(h,B,E,T=null,O=null,j=null,Y=!1,I=null,H=mn?!1:!!B.dynamicChildren)=>{if(h===B)return;h&&!_l(h,B)&&(T=es(h),ue(h,O,j,!0),h=null),B.patchFlag===-2&&(H=!1,B.dynamicChildren=null);const{type:M,ref:os,shapeFlag:ns}=B;switch(M){case no:D(h,B,E,T);break;case de:P(h,B,E,T);break;case vo:h==null?k(B,E,T,Y):S(h,B,E,Y);break;case ks:Zs(h,B,E,T,O,j,Y,I,H);break;default:ns&1?J(h,B,E,T,O,j,Y,I,H):ns&6?Gs(h,B,E,T,O,j,Y,I,H):ns&64||ns&128?M.process(h,B,E,T,O,j,Y,I,H,Cs):R("Invalid VNode type:",M,`(${typeof M})`)}os!=null&&O&&Lt(os,h&&h.ref,j,B||h,!B)},D=(h,B,E,T)=>{if(h==null)t(B.el=p(B.children),E,T);else{const O=B.el=h.el;B.children!==h.children&&u(O,B.children)}},P=(h,B,E,T)=>{h==null?t(B.el=i(B.children||""),E,T):B.el=h.el},k=(h,B,E,T)=>{[h.el,h.anchor]=v(h.children,B,E,T,h.el,h.anchor)},S=(h,B,E,T)=>{if(B.children!==h.children){const O=f(h.anchor);Q(h),[B.el,B.anchor]=v(B.children,E,O,T)}else B.el=h.el,B.anchor=h.anchor},N=({el:h,anchor:B},E,T)=>{let O;for(;h&&h!==B;)O=f(h),t(h,E,T),h=O;t(B,E,T)},Q=({el:h,anchor:B})=>{let E;for(;h&&h!==B;)E=f(h),a(h),h=E;a(B)},J=(h,B,E,T,O,j,Y,I,H)=>{Y=Y||B.type==="svg",h==null?q(B,E,T,O,j,Y,I,H):vs(h,B,O,j,Y,I,H)},q=(h,B,E,T,O,j,Y,I)=>{let H,M;const{type:os,props:ns,shapeFlag:as,transition:fs,dirs:_s}=h;if(H=h.el=c(h.type,j,ns&&ns.is,ns),as&8?d(H,h.children):as&16&&ys(h.children,H,null,T,O,j&&os!=="foreignObject",Y,I),_s&&Fn(h,null,T,"created"),ns){for(const Ps in ns)Ps!=="value"&&!fo(Ps)&&r(H,Ps,null,ns[Ps],j,h.children,T,O,U);"value"in ns&&r(H,"value",null,ns.value),(M=ns.onVnodeBeforeMount)&&De(M,T,h)}ts(H,h,h.scopeId,Y,T),Object.defineProperty(H,"__vnode",{value:h,enumerable:!1}),Object.defineProperty(H,"__vueParentComponent",{value:T,enumerable:!1}),_s&&Fn(h,null,T,"beforeMount");const Os=(!O||O&&!O.pendingBranch)&&fs&&!fs.persisted;Os&&fs.beforeEnter(H),t(H,B,E),((M=ns&&ns.onVnodeMounted)||Os||_s)&&Qs(()=>{M&&De(M,T,h),Os&&fs.enter(H),_s&&Fn(h,null,T,"mounted")},O)},ts=(h,B,E,T,O)=>{if(E&&m(h,E),T)for(let j=0;j<T.length;j++)m(h,T[j]);if(O){let j=O.subTree;if(j.patchFlag>0&&j.patchFlag&2048&&(j=tp(j.children)||j),B===j){const Y=O.vnode;ts(h,Y,Y.scopeId,Y.slotScopeIds,O.parent)}}},ys=(h,B,E,T,O,j,Y,I,H=0)=>{for(let M=H;M<h.length;M++){const os=h[M]=I?un(h[M]):be(h[M]);_(null,os,B,E,T,O,j,Y,I)}},vs=(h,B,E,T,O,j,Y)=>{const I=B.el=h.el;let{patchFlag:H,dynamicChildren:M,dirs:os}=B;H|=h.patchFlag&16;const ns=h.props||Vs,as=B.props||Vs;let fs;E&&kn(E,!1),(fs=as.onVnodeBeforeUpdate)&&De(fs,E,B,h),os&&Fn(B,h,E,"beforeUpdate"),E&&kn(E,!0),mn&&(H=0,Y=!1,M=null);const _s=O&&B.type!=="foreignObject";if(M?(Ds(h.dynamicChildren,M,I,E,T,_s,j),E&&E.type.__hmrId&&Vl(h,B)):Y||ms(h,B,I,null,E,T,_s,j,!1),H>0){if(H&16)Rs(I,B,ns,as,E,T,O);else if(H&2&&ns.class!==as.class&&r(I,"class",null,as.class,O),H&4&&r(I,"style",ns.style,as.style,O),H&8){const Os=B.dynamicProps;for(let Ps=0;Ps<Os.length;Ps++){const Hs=Os[Ps],Fe=ns[Hs],Qn=as[Hs];(Qn!==Fe||Hs==="value")&&r(I,Hs,Fe,Qn,O,h.children,E,T,U)}}H&1&&h.children!==B.children&&d(I,B.children)}else!Y&&M==null&&Rs(I,B,ns,as,E,T,O);((fs=as.onVnodeUpdated)||os)&&Qs(()=>{fs&&De(fs,E,B,h),os&&Fn(B,h,E,"updated")},T)},Ds=(h,B,E,T,O,j,Y)=>{for(let I=0;I<B.length;I++){const H=h[I],M=B[I],os=H.el&&(H.type===ks||!_l(H,M)||H.shapeFlag&70)?y(H.el):E;_(H,M,os,null,T,O,j,Y,!0)}},Rs=(h,B,E,T,O,j,Y)=>{if(E!==T){if(E!==Vs)for(const I in E)!fo(I)&&!(I in T)&&r(h,I,E[I],null,Y,B.children,O,j,U);for(const I in T){if(fo(I))continue;const H=T[I],M=E[I];H!==M&&I!=="value"&&r(h,I,M,H,Y,B.children,O,j,U)}"value"in T&&r(h,"value",E.value,T.value)}},Zs=(h,B,E,T,O,j,Y,I,H)=>{const M=B.el=h?h.el:p(""),os=B.anchor=h?h.anchor:p("");let{patchFlag:ns,dynamicChildren:as,slotScopeIds:fs}=B;(mn||ns&2048)&&(ns=0,H=!1,as=null),fs&&(I=I?I.concat(fs):fs),h==null?(t(M,E,T),t(os,E,T),ys(B.children,E,os,O,j,Y,I,H)):ns>0&&ns&64&&as&&h.dynamicChildren?(Ds(h.dynamicChildren,as,E,O,j,Y,I),O&&O.type.__hmrId?Vl(h,B):(B.key!=null||O&&B===O.subTree)&&Vl(h,B,!0)):ms(h,B,E,os,O,j,Y,I,H)},Gs=(h,B,E,T,O,j,Y,I,H)=>{B.slotScopeIds=I,h==null?B.shapeFlag&512?O.ctx.activate(B,E,T,Y,H):$s(B,E,T,O,j,Y,H):Ns(h,B,H)},$s=(h,B,E,T,O,j,Y)=>{const I=h.component=ny(h,T,O);if(I.type.__hmrId&&U8(I),ho(h),Ke(I,"mount"),Aa(h)&&(I.ctx.renderer=Cs),Ke(I,"init"),oy(I),Je(I,"init"),I.asyncDep){if(O&&O.registerDep(I,X),!h.el){const H=I.subTree=F(de);P(null,H,B,E)}return}X(I,h,B,E,O,j,Y),mo(),Je(I,"mount")},Ns=(h,B,E)=>{const T=B.component=h.component;if(tu(h,B,E))if(T.asyncDep&&!T.asyncResolved){ho(B),rs(T,B,E),mo();return}else T.next=B,H8(T.update),T.update();else B.el=h.el,T.vnode=B},X=(h,B,E,T,O,j,Y)=>{const I=()=>{if(h.isMounted){let{next:os,bu:ns,u:as,parent:fs,vnode:_s}=h,Os=os,Ps;ho(os||h.vnode),kn(h,!1),os?(os.el=_s.el,rs(h,os,Y)):os=_s,ns&&dn(ns),(Ps=os.props&&os.props.onVnodeBeforeUpdate)&&De(Ps,fs,os,_s),kn(h,!0),Ke(h,"render");const Hs=at(h);Je(h,"render");const Fe=h.subTree;h.subTree=Hs,Ke(h,"patch"),_(Fe,Hs,y(Fe.el),es(Fe),h,O,j),Je(h,"patch"),os.el=Hs.el,Os===null&&au(h,Hs.el),as&&Qs(as,O),(Ps=os.props&&os.props.onVnodeUpdated)&&Qs(()=>De(Ps,fs,os,_s),O),np(h),mo()}else{let os;const{el:ns,props:as}=B,{bm:fs,m:_s,parent:Os}=h,Ps=il(B);if(kn(h,!1),fs&&dn(fs),!Ps&&(os=as&&as.onVnodeBeforeMount)&&De(os,Os,B),kn(h,!0),ns&&ps){const Hs=()=>{Ke(h,"render"),h.subTree=at(h),Je(h,"render"),Ke(h,"hydrate"),ps(ns,h.subTree,h,O,null),Je(h,"hydrate")};Ps?B.type.__asyncLoader().then(()=>!h.isUnmounted&&Hs()):Hs()}else{Ke(h,"render");const Hs=h.subTree=at(h);Je(h,"render"),Ke(h,"patch"),_(null,Hs,E,T,h,O,j),Je(h,"patch"),B.el=Hs.el}if(_s&&Qs(_s,O),!Ps&&(os=as&&as.onVnodeMounted)){const Hs=B;Qs(()=>De(os,Os,Hs),O)}(B.shapeFlag&256||Os&&il(Os.vnode)&&Os.vnode.shapeFlag&256)&&h.a&&Qs(h.a,O),h.isMounted=!0,xt(h),B=E=T=null}},H=h.effect=new ca(I,()=>qo(M),h.scope),M=h.update=()=>H.run();M.id=h.uid,kn(h,!0),H.onTrack=h.rtc?os=>dn(h.rtc,os):void 0,H.onTrigger=h.rtg?os=>dn(h.rtg,os):void 0,M.ownerInstance=h,M()},rs=(h,B,E)=>{B.component=h;const T=h.vnode.props;h.vnode=B,h.next=null,Vu(h,B.props,T,E),ju(h,B.children,E),Jn(),Ga(),Yn()},ms=(h,B,E,T,O,j,Y,I,H=!1)=>{const M=h&&h.children,os=h?h.shapeFlag:0,ns=B.children,{patchFlag:as,shapeFlag:fs}=B;if(as>0){if(as&128){fe(M,ns,E,T,O,j,Y,I,H);return}else if(as&256){Ss(M,ns,E,T,O,j,Y,I,H);return}}fs&8?(os&16&&U(M,O,j),ns!==M&&d(E,ns)):os&16?fs&16?fe(M,ns,E,T,O,j,Y,I,H):U(M,O,j,!0):(os&8&&d(E,""),fs&16&&ys(ns,E,T,O,j,Y,I,H))},Ss=(h,B,E,T,O,j,Y,I,H)=>{h=h||cl,B=B||cl;const M=h.length,os=B.length,ns=Math.min(M,os);let as;for(as=0;as<ns;as++){const fs=B[as]=H?un(B[as]):be(B[as]);_(h[as],fs,E,null,O,j,Y,I,H)}M>os?U(h,O,j,!0,!1,ns):ys(B,E,T,O,j,Y,I,H,ns)},fe=(h,B,E,T,O,j,Y,I,H)=>{let M=0;const os=B.length;let ns=h.length-1,as=os-1;for(;M<=ns&&M<=as;){const fs=h[M],_s=B[M]=H?un(B[M]):be(B[M]);if(_l(fs,_s))_(fs,_s,E,null,O,j,Y,I,H);else break;M++}for(;M<=ns&&M<=as;){const fs=h[ns],_s=B[as]=H?un(B[as]):be(B[as]);if(_l(fs,_s))_(fs,_s,E,null,O,j,Y,I,H);else break;ns--,as--}if(M>ns){if(M<=as){const fs=as+1,_s=fs<os?B[fs].el:T;for(;M<=as;)_(null,B[M]=H?un(B[M]):be(B[M]),E,_s,O,j,Y,I,H),M++}}else if(M>as)for(;M<=ns;)ue(h[M],O,j,!0),M++;else{const fs=M,_s=M,Os=new Map;for(M=_s;M<=as;M++){const te=B[M]=H?un(B[M]):be(B[M]);te.key!=null&&(Os.has(te.key)&&R("Duplicate keys found during update:",JSON.stringify(te.key),"Make sure keys are unique."),Os.set(te.key,M))}let Ps,Hs=0;const Fe=as-_s+1;let Qn=!1,Ia=0;const Bl=new Array(Fe);for(M=0;M<Fe;M++)Bl[M]=0;for(M=fs;M<=ns;M++){const te=h[M];if(Hs>=Fe){ue(te,O,j,!0);continue}let Le;if(te.key!=null)Le=Os.get(te.key);else for(Ps=_s;Ps<=as;Ps++)if(Bl[Ps-_s]===0&&_l(te,B[Ps])){Le=Ps;break}Le===void 0?ue(te,O,j,!0):(Bl[Le-_s]=M+1,Le>=Ia?Ia=Le:Qn=!0,_(te,B[Le],E,null,O,j,Y,I,H),Hs++)}const ja=Qn?Ku(Bl):cl;for(Ps=ja.length-1,M=Fe-1;M>=0;M--){const te=_s+M,Le=B[te],Ha=te+1<os?B[te+1].el:T;Bl[M]===0?_(null,Le,E,Ha,O,j,Y,I,H):Qn&&(Ps<0||M!==ja[Ps]?ee(Le,E,Ha,2):Ps--)}}},ee=(h,B,E,T,O=null)=>{const{el:j,type:Y,transition:I,children:H,shapeFlag:M}=h;if(M&6){ee(h.component.subTree,B,E,T);return}if(M&128){h.suspense.move(B,E,T);return}if(M&64){Y.move(h,B,E,Cs);return}if(Y===ks){t(j,B,E);for(let ns=0;ns<H.length;ns++)ee(H[ns],B,E,T);t(h.anchor,B,E);return}if(Y===vo){N(h,B,E);return}if(T!==2&&M&1&&I)if(T===0)I.beforeEnter(j),t(j,B,E),Qs(()=>I.enter(j),O);else{const{leave:ns,delayLeave:as,afterLeave:fs}=I,_s=()=>t(j,B,E),Os=()=>{ns(j,()=>{_s(),fs&&fs()})};as?as(j,_s,Os):Os()}else t(j,B,E)},ue=(h,B,E,T=!1,O=!1)=>{const{type:j,props:Y,ref:I,children:H,dynamicChildren:M,shapeFlag:os,patchFlag:ns,dirs:as}=h;if(I!=null&&Lt(I,null,E,h,!0),os&256){B.ctx.deactivate(h);return}const fs=os&1&&as,_s=!il(h);let Os;if(_s&&(Os=Y&&Y.onVnodeBeforeUnmount)&&De(Os,B,h),os&6)ss(h.component,E,T);else{if(os&128){h.suspense.unmount(E,T);return}fs&&Fn(h,null,B,"beforeUnmount"),os&64?h.type.remove(h,B,E,O,Cs,T):M&&(j!==ks||ns>0&&ns&64)?U(M,B,E,!1,!0):(j===ks&&ns&384||!O&&os&16)&&U(H,B,E),T&&an(h)}(_s&&(Os=Y&&Y.onVnodeUnmounted)||fs)&&Qs(()=>{Os&&De(Os,B,h),fs&&Fn(h,null,B,"unmounted")},E)},an=h=>{const{type:B,el:E,anchor:T,transition:O}=h;if(B===ks){h.patchFlag>0&&h.patchFlag&2048&&O&&!O.persisted?h.children.forEach(Y=>{Y.type===de?a(Y.el):an(Y)}):b(E,T);return}if(B===vo){Q(h);return}const j=()=>{a(E),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(h.shapeFlag&1&&O&&!O.persisted){const{leave:Y,delayLeave:I}=O,H=()=>Y(E,j);I?I(h.el,j,H):H()}else j()},b=(h,B)=>{let E;for(;h!==B;)E=f(h),a(h),h=E;a(B)},ss=(h,B,E)=>{h.type.__hmrId&&W8(h);const{bum:T,scope:O,update:j,subTree:Y,um:I}=h;T&&dn(T),O.stop(),j&&(j.active=!1,ue(Y,h,B,E)),I&&Qs(I,B),Qs(()=>{h.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve()),G8(h)},U=(h,B,E,T=!1,O=!1,j=0)=>{for(let Y=j;Y<h.length;Y++)ue(h[Y],B,E,T,O)},es=h=>h.shapeFlag&6?es(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),Bs=(h,B,E)=>{h==null?B._vnode&&ue(B._vnode,null,null,!0):_(B._vnode||null,h,B,null,null,null,E),Ga(),Qc(),B._vnode=h},Cs={p:_,um:ue,m:ee,r:an,mt:$s,mc:ys,pc:ms,pbc:Ds,n:es,o:e};let ds,ps;return n&&([ds,ps]=n(Cs)),{render:Bs,hydrate:ds,createApp:zu(Bs,ds)}}function kn({effect:e,update:n},l){e.allowRecurse=n.allowRecurse=l}function Vl(e,n,l=!1){const t=e.children,a=n.children;if(cs(t)&&cs(a))for(let r=0;r<t.length;r++){const c=t[r];let p=a[r];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=a[r]=un(a[r]),p.el=c.el),l||Vl(c,p)),p.type===no&&(p.el=c.el),p.type===de&&!p.el&&(p.el=c.el)}}function Ku(e){const n=e.slice(),l=[0];let t,a,r,c,p;const i=e.length;for(t=0;t<i;t++){const u=e[t];if(u!==0){if(a=l[l.length-1],e[a]<u){n[t]=a,l.push(t);continue}for(r=0,c=l.length-1;r<c;)p=r+c>>1,e[l[p]]<u?r=p+1:c=p;u<e[l[r]]&&(r>0&&(n[t]=l[r-1]),l[r]=t)}}for(r=l.length,c=l[r-1];r-- >0;)l[r]=c,c=n[c];return l}const Ju=e=>e.__isTeleport,ul=e=>e&&(e.disabled||e.disabled===""),pr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Tt=(e,n)=>{const l=e&&e.to;if(Ts(l))if(n){const t=n(l);return t||R(`Failed to locate Teleport target with selector "${l}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),t}else return R("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!l&&!ul(e)&&R(`Invalid Teleport target: ${l}`),l},Yu={__isTeleport:!0,process(e,n,l,t,a,r,c,p,i,u){const{mc:d,pc:y,pbc:f,o:{insert:m,querySelector:v,createText:_,createComment:D}}=u,P=ul(n.props);let{shapeFlag:k,children:S,dynamicChildren:N}=n;if(mn&&(i=!1,N=null),e==null){const Q=n.el=D("teleport start"),J=n.anchor=D("teleport end");m(Q,l,t),m(J,l,t);const q=n.target=Tt(n.props,v),ts=n.targetAnchor=_("");q?(m(ts,q),c=c||pr(q)):P||R("Invalid Teleport target on mount:",q,`(${typeof q})`);const ys=(vs,Ds)=>{k&16&&d(S,vs,Ds,a,r,c,p,i)};P?ys(l,J):q&&ys(q,ts)}else{n.el=e.el;const Q=n.anchor=e.anchor,J=n.target=e.target,q=n.targetAnchor=e.targetAnchor,ts=ul(e.props),ys=ts?l:J,vs=ts?Q:q;if(c=c||pr(J),N?(f(e.dynamicChildren,N,ys,a,r,c,p),Vl(e,n,!0)):i||y(e,n,ys,vs,a,r,c,p,!1),P)ts||io(n,l,Q,u,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Ds=n.target=Tt(n.props,v);Ds?io(n,Ds,null,u,0):R("Invalid Teleport target on update:",J,`(${typeof J})`)}else ts&&io(n,J,q,u,1)}Fp(n)},remove(e,n,l,t,{um:a,o:{remove:r}},c){const{shapeFlag:p,children:i,anchor:u,targetAnchor:d,target:y,props:f}=e;if(y&&r(d),(c||!ul(f))&&(r(u),p&16))for(let m=0;m<i.length;m++){const v=i[m];a(v,n,l,!0,!!v.dynamicChildren)}},move:io,hydrate:Zu};function io(e,n,l,{o:{insert:t},m:a},r=2){r===0&&t(e.targetAnchor,n,l);const{el:c,anchor:p,shapeFlag:i,children:u,props:d}=e,y=r===2;if(y&&t(c,n,l),(!y||ul(d))&&i&16)for(let f=0;f<u.length;f++)a(u[f],n,l,2);y&&t(p,n,l)}function Zu(e,n,l,t,a,r,{o:{nextSibling:c,parentNode:p,querySelector:i}},u){const d=n.target=Tt(n.props,i);if(d){const y=d._lpa||d.firstChild;if(n.shapeFlag&16)if(ul(n.props))n.anchor=u(c(e),n,p(e),l,t,a,r),n.targetAnchor=y;else{n.anchor=c(e);let f=y;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,d._lpa=n.targetAnchor&&c(n.targetAnchor);break}u(y,n,d,l,t,a,r)}Fp(n)}return n.anchor&&c(n.anchor)}const _6=Yu;function Fp(e){const n=e.ctx;if(n&&n.ut){let l=e.children[0].el;for(;l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",n.uid),l=l.nextSibling;n.ut()}}const ks=Symbol("Fragment"),no=Symbol("Text"),de=Symbol("Comment"),vo=Symbol("Static"),Ol=[];let we=null;function A(e=!1){Ol.push(we=e?null:[])}function Gu(){Ol.pop(),we=Ol[Ol.length-1]||null}let zl=1;function ir(e){zl+=e}function kp(e){return e.dynamicChildren=zl>0?we||cl:null,Gu(),zl>0&&we&&we.push(e),e}function G(e,n,l,t,a,r){return kp(s(e,n,l,t,a,r,!0))}function V(e,n,l,t,a){return kp(F(e,n,l,t,a,!0))}function Wn(e){return e?e.__v_isVNode===!0:!1}function _l(e,n){return n.shapeFlag&6&&ll.has(n.type)?(e.shapeFlag&=-257,n.shapeFlag&=-513,!1):e.type===n.type&&e.key===n.key}const Qu=(...e)=>Xu(...e),Xo="__vInternal",xp=({key:e})=>e??null,Bo=({ref:e,ref_key:n,ref_for:l})=>e!=null?Ts(e)||Fs(e)||is(e)?{i:Ks,r:e,k:n,f:!!l}:e:null;function s(e,n=null,l=null,t=0,a=null,r=e===ks?0:1,c=!1,p=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&xp(n),ref:n&&Bo(n),scopeId:Jo,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:t,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ks};return p?(Ca(i,l),r&128&&e.normalize(i)):l&&(i.shapeFlag|=Ts(l)?8:16),i.key!==i.key&&R("VNode created with invalid key (NaN). VNode type:",i.type),zl>0&&!c&&we&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&we.push(i),i}const F=Qu;function Xu(e,n=null,l=null,t=0,a=null,r=!1){if((!e||e===gu)&&(e||R(`Invalid vnode type when creating vnode: ${e}.`),e=de),Wn(e)){const p=on(e,n,!0);return l&&Ca(p,l),zl>0&&!r&&we&&(p.shapeFlag&6?we[we.indexOf(e)]=p:we.push(p)),p.patchFlag|=-2,p}if(Pp(e)&&(e=e.__vccOpts),n){n=z(n);let{class:p,style:i}=n;p&&!Ts(p)&&(n.class=js(p)),ws(i)&&(xo(i)&&!cs(i)&&(i=zs({},i)),n.style=Xs(i))}const c=Ts(e)?1:ap(e)?128:Ju(e)?64:ws(e)?4:is(e)?2:0;return c&4&&xo(e)&&(e=hs(e),R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),s(e,n,l,t,a,c,r,!0)}function z(e){return e?xo(e)||Xo in e?zs({},e):e:null}function on(e,n,l=!1){const{props:t,ref:a,patchFlag:r,children:c}=e,p=n?Z(t||{},n):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&xp(p),ref:n&&n.ref?l&&a?cs(a)?a.concat(Bo(n)):[a,Bo(n)]:Bo(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&cs(c)?c.map(bp):c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ks?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&on(e.ssContent),ssFallback:e.ssFallback&&on(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function bp(e){const n=on(e);return cs(e.children)&&(n.children=e.children.map(bp)),n}function o(e=" ",n=0){return F(no,null,e,n)}function gs(e="",n=!1){return n?(A(),V(de,null,e)):F(de,null,e)}function be(e){return e==null||typeof e=="boolean"?F(de):cs(e)?F(ks,null,e.slice()):typeof e=="object"?un(e):F(no,null,String(e))}function un(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:on(e)}function Ca(e,n){let l=0;const{shapeFlag:t}=e;if(n==null)n=null;else if(cs(n))l=16;else if(typeof n=="object")if(t&65){const a=n.default;a&&(a._c&&(a._d=!1),Ca(e,a()),a._c&&(a._d=!0));return}else{l=32;const a=n._;!a&&!(Xo in n)?n._ctx=Ks:a===3&&Ks&&(Ks.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else is(n)?(n={default:n,_ctx:Ks},l=32):(n=String(n),t&64?(l=16,n=[o(n)]):l=8);e.children=n,e.shapeFlag|=l}function Z(...e){const n={};for(let l=0;l<e.length;l++){const t=e[l];for(const a in t)if(a==="class")n.class!==t.class&&(n.class=js([n.class,t.class]));else if(a==="style")n.style=Xs([n.style,t.style]);else if(Xl(a)){const r=n[a],c=t[a];c&&r!==c&&!(cs(r)&&r.includes(c))&&(n[a]=r?[].concat(r,c):c)}else a!==""&&(n[a]=t[a])}return n}function De(e,n,l,t=null){$e(e,n,7,[l,t])}const sy=Ep();let ey=0;function ny(e,n,l){const t=e.type,a=(n?n.appContext:e.appContext)||sy,r={uid:ey++,vnode:e,type:t,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(t,a),emitsOptions:op(t,a),emit:null,emitted:null,propsDefaults:Vs,inheritAttrs:t.inheritAttrs,ctx:Vs,data:Vs,props:Vs,attrs:Vs,slots:Vs,refs:Vs,setupState:Vs,setupContext:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Du(r),r.root=n?n.root:r,r.emit=eu.bind(null,r),e.ce&&e.ce(r),r}let Ws=null;const En=()=>Ws||Ks,dl=e=>{Ws=e,e.scope.on()},Rn=()=>{Ws&&Ws.scope.off(),Ws=null},ly=Cn("slot,component");function Nt(e,n){const l=n.isNativeTag||Fc;(ly(e)||l(e))&&R("Do not use built-in or reserved HTML elements as component id: "+e)}function wp(e){return e.vnode.shapeFlag&4}let Ul=!1;function oy(e,n=!1){Ul=n;const{props:l,children:t}=e.vnode,a=wp(e);Su(e,l,a,n),Iu(e,t);const r=a?ty(e,n):void 0;return Ul=!1,r}function ty(e,n){var l;const t=e.type;{if(t.name&&Nt(t.name,e.appContext.config),t.components){const r=Object.keys(t.components);for(let c=0;c<r.length;c++)Nt(r[c],e.appContext.config)}if(t.directives){const r=Object.keys(t.directives);for(let c=0;c<r.length;c++)dp(r[c])}t.compilerOptions&&ay()&&R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ia(new Proxy(e.ctx,mp)),Cu(e);const{setup:a}=t;if(a){const r=e.setupContext=a.length>1?Sp(e):null;dl(e),Jn();const c=sn(a,e,0,[al(e.props),r]);if(Yn(),Rn(),oa(c)){if(c.then(Rn,Rn),n)return c.then(p=>{ur(e,p,n)}).catch(p=>{Wo(p,e,0)});if(e.asyncDep=c,!e.suspense){const p=(l=t.name)!==null&&l!==void 0?l:"Anonymous";R(`Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else ur(e,c,n)}else $p(e,n)}function ur(e,n,l){is(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ws(n)?(Wn(n)&&R("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=n,e.setupState=Wc(n),Eu(e)):n!==void 0&&R(`setup() should return an object. Received: ${n===null?"null":typeof n}`),$p(e,l)}let Mt;const ay=()=>!Mt;function $p(e,n,l){const t=e.type;if(!e.render){if(!n&&Mt&&!t.render){const a=t.template||ga(e).template;if(a){Ke(e,"compile");const{isCustomElement:r,compilerOptions:c}=e.appContext.config,{delimiters:p,compilerOptions:i}=t,u=zs(zs({isCustomElement:r,delimiters:p},c),i);t.render=Mt(a,u),Je(e,"compile")}}e.render=t.render||ye}dl(e),Jn(),ku(e),Yn(),Rn(),!t.render&&e.render===ye&&!n&&(t.template?R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):R("Component is missing template or render function."))}function ry(e){return new Proxy(e.attrs,{get(n,l){return wo(),_e(e,"get","$attrs"),n[l]},set(){return R("setupContext.attrs is readonly."),!1},deleteProperty(){return R("setupContext.attrs is readonly."),!1}})}function Sp(e){const n=t=>{e.exposed&&R("expose() should be called only once per setup()."),e.exposed=t||{}};let l;return Object.freeze({get attrs(){return l||(l=ry(e))},get slots(){return al(e.slots)},get emit(){return(t,...a)=>e.emit(t,...a)},expose:n})}function st(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wc(ia(e.exposed)),{get(n,l){if(l in n)return n[l];if(l in Mn)return Mn[l](e)},has(n,l){return l in n||l in Mn}}))}const cy=/(?:^|[-_])(\w)/g,py=e=>e.replace(cy,n=>n.toUpperCase()).replace(/[-_]/g,"");function Wl(e,n=!0){return is(e)?e.displayName||e.name:e.name||n&&e.__name}function et(e,n,l=!1){let t=Wl(n);if(!t&&n.__file){const a=n.__file.match(/([^/\\]+)\.\w+$/);a&&(t=a[1])}if(!t&&e&&e.parent){const a=r=>{for(const c in r)if(r[c]===n)return c};t=a(e.components||e.parent.type.components)||a(e.appContext.components)}return t?py(t):l?"App":"Anonymous"}function Pp(e){return is(e)&&"__vccOpts"in e}const L=(e,n)=>O8(e,n,Ul);function g6(){return iy().slots}function iy(){const e=En();return e||R("useContext() called without active instance."),e.setupContext||(e.setupContext=Sp(e))}function nt(e,n,l){const t=arguments.length;return t===2?ws(n)&&!cs(n)?Wn(n)?F(e,null,[n]):F(e,n):F(e,null,n):(t>3?l=Array.prototype.slice.call(arguments,2):t===3&&Wn(l)&&(l=[l]),F(e,n,l))}const uy=Symbol("ssrContext"),yy=()=>{{const e=x(uy);return e||R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function it(e){return!!(e&&e.__v_isShallow)}function dy(){if(typeof window>"u")return;const e={style:"color:#3ba776"},n={style:"color:#0b1bc9"},l={style:"color:#b62e24"},t={style:"color:#9d288c"},a={header(y){return ws(y)?y.__isVue?["div",e,"VueInstance"]:Fs(y)?["div",{},["span",e,d(y)],"<",p(y.value),">"]:Tn(y)?["div",{},["span",e,it(y)?"ShallowReactive":"Reactive"],"<",p(y),`>${gn(y)?" (readonly)":""}`]:gn(y)?["div",{},["span",e,it(y)?"ShallowReadonly":"Readonly"],"<",p(y),">"]:null:null},hasBody(y){return y&&y.__isVue},body(y){if(y&&y.__isVue)return["div",{},...r(y.$)]}};function r(y){const f=[];y.type.props&&y.props&&f.push(c("props",hs(y.props))),y.setupState!==Vs&&f.push(c("setup",y.setupState)),y.data!==Vs&&f.push(c("data",hs(y.data)));const m=i(y,"computed");m&&f.push(c("computed",m));const v=i(y,"inject");return v&&f.push(c("injected",v)),f.push(["div",{},["span",{style:t.style+";opacity:0.66"},"$ (internal): "],["object",{object:y}]]),f}function c(y,f){return f=zs({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},y],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",t,m+": "],p(f[m],!1)])]]:["span",{}]}function p(y,f=!0){return typeof y=="number"?["span",n,y]:typeof y=="string"?["span",l,JSON.stringify(y)]:typeof y=="boolean"?["span",t,y]:ws(y)?["object",{object:f?hs(y):y}]:["span",l,String(y)]}function i(y,f){const m=y.type;if(is(m))return;const v={};for(const _ in y.ctx)u(m,_,f)&&(v[_]=y.ctx[_]);return v}function u(y,f,m){const v=y[m];if(cs(v)&&v.includes(f)||ws(v)&&f in v||y.extends&&u(y.extends,f,m)||y.mixins&&y.mixins.some(_=>u(_,f,m)))return!0}function d(y){return it(y)?"ShallowRef":y.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(a):window.devtoolsFormatters=[a]}const yr="3.2.45",fy="http://www.w3.org/2000/svg",wn=typeof document<"u"?document:null,dr=wn&&wn.createElement("template"),hy={insert:(e,n,l)=>{n.insertBefore(e,l||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,l,t)=>{const a=n?wn.createElementNS(fy,e):wn.createElement(e,l?{is:l}:void 0);return e==="select"&&t&&t.multiple!=null&&a.setAttribute("multiple",t.multiple),a},createText:e=>wn.createTextNode(e),createComment:e=>wn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,l,t,a,r){const c=l?l.previousSibling:n.lastChild;if(a&&(a===r||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),l),!(a===r||!(a=a.nextSibling)););else{dr.innerHTML=t?`<svg>${e}</svg>`:e;const p=dr.content;if(t){const i=p.firstChild;for(;i.firstChild;)p.appendChild(i.firstChild);p.removeChild(i)}n.insertBefore(p,l)}return[c?c.nextSibling:n.firstChild,l?l.previousSibling:n.lastChild]}};function my(e,n,l){const t=e._vtc;t&&(n=(n?[n,...t]:[...t]).join(" ")),n==null?e.removeAttribute("class"):l?e.setAttribute("class",n):e.className=n}function vy(e,n,l){const t=e.style,a=Ts(l);if(l&&!a){for(const r in l)Rt(t,r,l[r]);if(n&&!Ts(n))for(const r in n)l[r]==null&&Rt(t,r,"")}else{const r=t.display;a?n!==l&&(t.cssText=l):n&&e.removeAttribute("style"),"_vod"in e&&(t.display=r)}}const By=/[^\\];\s*$/,fr=/\s*!important$/;function Rt(e,n,l){if(cs(l))l.forEach(t=>Rt(e,n,t));else if(l==null&&(l=""),By.test(l)&&R(`Unexpected semicolon at the end of '${n}' style value: '${l}'`),n.startsWith("--"))e.setProperty(n,l);else{const t=Ay(e,n);fr.test(l)?e.setProperty(en(t),l.replace(fr,""),"important"):e[t]=l}}const hr=["Webkit","Moz","ms"],ut={};function Ay(e,n){const l=ut[n];if(l)return l;let t=He(n);if(t!=="filter"&&t in e)return ut[n]=t;t=zn(t);for(let a=0;a<hr.length;a++){const r=hr[a]+t;if(r in e)return ut[n]=r}return n}const mr="http://www.w3.org/1999/xlink";function _y(e,n,l,t,a){if(t&&n.startsWith("xlink:"))l==null?e.removeAttributeNS(mr,n.slice(6,n.length)):e.setAttributeNS(mr,n,l);else{const r=Wi(n);l==null||r&&!Cc(l)?e.removeAttribute(n):e.setAttribute(n,r?"":l)}}function gy(e,n,l,t,a,r,c){if(n==="innerHTML"||n==="textContent"){t&&c(t,a,r),e[n]=l??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=l;const i=l??"";(e.value!==i||e.tagName==="OPTION")&&(e.value=i),l==null&&e.removeAttribute(n);return}let p=!1;if(l===""||l==null){const i=typeof e[n];i==="boolean"?l=Cc(l):l==null&&i==="string"?(l="",p=!0):i==="number"&&(l=0,p=!0)}try{e[n]=l}catch(i){p||R(`Failed setting prop "${n}" on <${e.tagName.toLowerCase()}>: value ${l} is invalid.`,i)}p&&e.removeAttribute(n)}function ol(e,n,l,t){e.addEventListener(n,l,t)}function Dy(e,n,l,t){e.removeEventListener(n,l,t)}function Cy(e,n,l,t,a=null){const r=e._vei||(e._vei={}),c=r[n];if(t&&c)c.value=t;else{const[p,i]=Ey(n);if(t){const u=r[n]=xy(t,a);ol(e,p,u,i)}else c&&(Dy(e,p,c,i),r[n]=void 0)}}const vr=/(?:Once|Passive|Capture)$/;function Ey(e){let n;if(vr.test(e)){n={};let t;for(;t=e.match(vr);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),n]}let yt=0;const Fy=Promise.resolve(),ky=()=>yt||(Fy.then(()=>yt=0),yt=Date.now());function xy(e,n){const l=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=l.attached)return;$e(by(t,l.value),n,5,[t])};return l.value=e,l.attached=ky(),l}function by(e,n){if(cs(n)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},n.map(t=>a=>!a._stopped&&t&&t(a))}else return n}const Br=/^on[a-z]/,wy=(e,n,l,t,a=!1,r,c,p,i)=>{n==="class"?my(e,t,a):n==="style"?vy(e,l,t):Xl(n)?Do(n)||Cy(e,n,l,t,c):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):$y(e,n,t,a))?gy(e,n,t,r,c,p,i):(n==="true-value"?e._trueValue=t:n==="false-value"&&(e._falseValue=t),_y(e,n,t,a))};function $y(e,n,l,t){return t?!!(n==="innerHTML"||n==="textContent"||n in e&&Br.test(n)&&is(l)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Br.test(n)&&Ts(l)?!1:n in e}const Ar=e=>{const n=e.props["onUpdate:modelValue"]||!1;return cs(n)?l=>dn(n,l):n};function Sy(e){e.target.composing=!0}function _r(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const ql={created(e,{modifiers:{lazy:n,trim:l,number:t}},a){e._assign=Ar(a);const r=t||a.props&&a.props.type==="number";ol(e,n?"change":"input",c=>{if(c.target.composing)return;let p=e.value;l&&(p=p.trim()),r&&(p=Eo(p)),e._assign(p)}),l&&ol(e,"change",()=>{e.value=e.value.trim()}),n||(ol(e,"compositionstart",Sy),ol(e,"compositionend",_r),ol(e,"change",_r))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,modifiers:{lazy:l,trim:t,number:a}},r){if(e._assign=Ar(r),e.composing||document.activeElement===e&&e.type!=="range"&&(l||t&&e.value.trim()===n||(a||e.type==="number")&&Eo(e.value)===n))return;const c=n??"";e.value!==c&&(e.value=c)}},Py={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gr=(e,n)=>l=>{if(!("key"in l))return;const t=en(l.key);if(n.some(a=>a===t||Py[a]===t))return e(l)},Vp={beforeMount(e,{value:n},{transition:l}){e._vod=e.style.display==="none"?"":e.style.display,l&&n?l.beforeEnter(e):gl(e,n)},mounted(e,{value:n},{transition:l}){l&&n&&l.enter(e)},updated(e,{value:n,oldValue:l},{transition:t}){!n!=!l&&(t?n?(t.beforeEnter(e),gl(e,!0),t.enter(e)):t.leave(e,()=>{gl(e,!1)}):gl(e,n))},beforeUnmount(e,{value:n}){gl(e,n)}};function gl(e,n){e.style.display=n?e._vod:"none"}const Vy=zs({patchProp:wy},hy);let Dr;function Oy(){return Dr||(Dr=Wu(Vy))}const D6=(...e)=>{const n=Oy().createApp(...e);Ly(n),Ty(n);const{mount:l}=n;return n.mount=t=>{const a=Ny(t);if(!a)return;const r=n._component;!is(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const c=l(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),c},n};function Ly(e){Object.defineProperty(e.config,"isNativeTag",{value:n=>Hi(n)||zi(n),writable:!1})}function Ty(e){{const n=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return n},set(){R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const l=e.config.compilerOptions,t='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return R(t),l},set(){R(t)}})}}function Ny(e){if(Ts(e)){const n=document.querySelector(e);return n||R(`Failed to mount app: mount target selector "${e}" returned null.`),n}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function My(){dy()}My();const Op=Symbol("v-click-clicks"),Lp=Symbol("v-click-clicks-elements"),Ry=Symbol("v-click-clicks-order-map"),Tp=Symbol("v-click-clicks-disabled"),Np=Symbol("slidev-slide-scale"),w=Symbol("slidev-slidev-context"),Iy=Symbol("slidev-route"),jy=Symbol("slidev-slide-context"),Hy="slidev-vclick-target",C6="slidev-vclick-hidden",E6="slidev-vclick-fade",F6="slidev-vclick-hidden-explicitly",k6="slidev-vclick-current",x6="slidev-vclick-prior";function zy(e,n){if(!e)return!1;const l=e.indexOf(n);return l>=0?(e.splice(l,1),!0):!1}function Uy(...e){let n,l,t;e.length===1?(n=0,t=1,[l]=e):[n,l,t=1]=e;const a=[];let r=n;for(;r<l;)a.push(r),r+=t||1;return a}function Wy(e){return e!=null}function qy(e,n){return Object.fromEntries(Object.entries(e).map(([l,t])=>n(l,t)).filter(Wy))}const Sl={theme:"default",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",class:"text-center"},Ls=Sl,vn=Ls.aspectRatio??16/9,Bn=Ls.canvasWidth??980,Ea=Math.ceil(Bn/vn),Fa=L(()=>qy(Ls.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function Ee(e,n,l){Object.defineProperty(e,n,{value:l,writable:!0,enumerable:!1})}const Zn=se({page:0,clicks:0});let Ky=[],Jy=[];Ee(Zn,"$syncUp",!0);Ee(Zn,"$syncDown",!0);Ee(Zn,"$paused",!1);Ee(Zn,"$onSet",e=>Ky.push(e));Ee(Zn,"$onPatch",e=>Jy.push(e));Ee(Zn,"$patch",async()=>!1);function Mp(e,n,l=!1){const t=[];let a=!1,r=!1,c,p;const i=se(n);function u(m){t.push(m)}function d(m,v){clearTimeout(c),a=!0,i[m]=v,c=setTimeout(()=>a=!1,0)}function y(m){a||(clearTimeout(p),r=!0,Object.entries(m).forEach(([v,_])=>{i[v]=_}),p=setTimeout(()=>r=!1,0))}function f(m){let v;l?l&&window.addEventListener("storage",D=>{D&&D.key===m&&D.newValue&&y(JSON.parse(D.newValue))}):(v=new BroadcastChannel(m),v.addEventListener("message",D=>y(D.data)));function _(){!l&&v&&!r?v.postMessage(hs(i)):l&&!r&&window.localStorage.setItem(m,JSON.stringify(i)),a||t.forEach(D=>D(i))}if(Is(i,_,{deep:!0}),l){const D=window.localStorage.getItem(m);D&&y(JSON.parse(D))}}return{init:f,onPatch:u,patch:d,state:i}}const{init:b6,onPatch:w6,patch:$6,state:dt}=Mp(Zn,{page:1,clicks:0}),Gn=se({});let Yy=[],Zy=[];Ee(Gn,"$syncUp",!0);Ee(Gn,"$syncDown",!0);Ee(Gn,"$paused",!1);Ee(Gn,"$onSet",e=>Yy.push(e));Ee(Gn,"$onPatch",e=>Zy.push(e));Ee(Gn,"$patch",async()=>!1);const{init:S6,onPatch:Gy,patch:Rp,state:Po}=Mp(Gn,{},!1),Qy="modulepreload",Xy=function(e){return"/vue-3-practices/"+e},Cr={},qn=function(n,l,t){if(!l||l.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(l.map(r=>{if(r=Xy(r),r in Cr)return;Cr[r]=!0;const c=r.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!t)for(let d=a.length-1;d>=0;d--){const y=a[d];if(y.href===r&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Qy,c||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),c)return new Promise((d,y)=>{u.addEventListener("load",d),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};var Er;const Ve=typeof window<"u",sd=e=>typeof e<"u",ed=Object.prototype.toString,Kl=e=>typeof e=="function",P6=e=>typeof e=="number",Ip=e=>typeof e=="string",V6=e=>ed.call(e)==="[object Object]",It=()=>+Date.now(),Ll=()=>{};Ve&&((Er=window==null?void 0:window.navigator)!=null&&Er.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pe(e){return typeof e=="function"?e():C(e)}function nd(e,n){function l(...t){return new Promise((a,r)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(a).catch(r)})}return l}const jp=e=>e();function ld(e=jp){const n=ls(!0);function l(){n.value=!1}function t(){n.value=!0}return{isActive:n,pause:l,resume:t,eventFilter:(...r)=>{n.value&&e(...r)}}}function od(e){return e}function td(e,n){var l;if(typeof e=="number")return e+n;const t=((l=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:l[0])||"",a=e.slice(t.length),r=parseFloat(t)+n;return Number.isNaN(r)?e:r+a}function ad(e,n){let l,t,a;const r=ls(!0),c=()=>{r.value=!0,a()};Is(e,c,{flush:"sync"});const p=Kl(n)?n:n.get,i=Kl(n)?void 0:n.set,u=qc((d,y)=>(t=d,a=y,{get(){return r.value&&(l=p(),r.value=!1),t(),l},set(f){i==null||i(f)}}));return Object.isExtensible(u)&&(u.trigger=c),u}function Ue(e){return Qi()?(Xi(e),!0):!1}function rd(e){if(!Fs(e))return se(e);const n=new Proxy({},{get(l,t,a){return C(Reflect.get(e.value,t,a))},set(l,t,a){return Fs(e.value[t])&&!Fs(a)?e.value[t].value=a:e.value[t]=a,!0},deleteProperty(l,t){return Reflect.deleteProperty(e.value,t)},has(l,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return se(n)}function Hp(e){return typeof e=="function"?L(e):ls(e)}var cd=Object.defineProperty,pd=Object.defineProperties,id=Object.getOwnPropertyDescriptors,Fr=Object.getOwnPropertySymbols,ud=Object.prototype.hasOwnProperty,yd=Object.prototype.propertyIsEnumerable,kr=(e,n,l)=>n in e?cd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,dd=(e,n)=>{for(var l in n||(n={}))ud.call(n,l)&&kr(e,l,n[l]);if(Fr)for(var l of Fr(n))yd.call(n,l)&&kr(e,l,n[l]);return e},fd=(e,n)=>pd(e,id(n));function hd(e){if(!Fs(e))return $8(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const l in e.value)n[l]=qc(()=>({get(){return e.value[l]},set(t){if(Array.isArray(e.value)){const a=[...e.value];a[l]=t,e.value=a}else{const a=fd(dd({},e.value),{[l]:t});Object.setPrototypeOf(a,e.value),e.value=a}}}));return n}function ka(e,n=!0){En()?Zo(e):n?e():Se(e)}function O6(e){En()&&Go(e)}function md(e,n=1e3,l={}){const{immediate:t=!0,immediateCallback:a=!1}=l;let r=null;const c=ls(!1);function p(){r&&(clearInterval(r),r=null)}function i(){c.value=!1,p()}function u(){C(n)<=0||(c.value=!0,a&&e(),p(),r=setInterval(e,pe(n)))}if(t&&Ve&&u(),Fs(n)||Kl(n)){const d=Is(n,()=>{c.value&&Ve&&u()});Ue(d)}return Ue(i),{isActive:c,pause:i,resume:u}}function vd(e,n,l={}){const{immediate:t=!0}=l,a=ls(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function p(){a.value=!1,c()}function i(...u){c(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,e(...u)},pe(n))}return t&&(a.value=!0,Ve&&i()),Ue(p),{isPending:a,start:i,stop:p}}function zp(e=!1,n={}){const{truthyValue:l=!0,falsyValue:t=!1}=n,a=Fs(e),r=ls(e);function c(p){if(arguments.length)return r.value=p,r.value;{const i=pe(l);return r.value=r.value===i?pe(t):i,r.value}}return a?c:[r,c]}var xr=Object.getOwnPropertySymbols,Bd=Object.prototype.hasOwnProperty,Ad=Object.prototype.propertyIsEnumerable,_d=(e,n)=>{var l={};for(var t in e)Bd.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&xr)for(var t of xr(e))n.indexOf(t)<0&&Ad.call(e,t)&&(l[t]=e[t]);return l};function gd(e,n,l={}){const t=l,{eventFilter:a=jp}=t,r=_d(t,["eventFilter"]);return Is(e,nd(a,n),r)}var Dd=Object.defineProperty,Cd=Object.defineProperties,Ed=Object.getOwnPropertyDescriptors,Vo=Object.getOwnPropertySymbols,Up=Object.prototype.hasOwnProperty,Wp=Object.prototype.propertyIsEnumerable,br=(e,n,l)=>n in e?Dd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Fd=(e,n)=>{for(var l in n||(n={}))Up.call(n,l)&&br(e,l,n[l]);if(Vo)for(var l of Vo(n))Wp.call(n,l)&&br(e,l,n[l]);return e},kd=(e,n)=>Cd(e,Ed(n)),xd=(e,n)=>{var l={};for(var t in e)Up.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&Vo)for(var t of Vo(e))n.indexOf(t)<0&&Wp.call(e,t)&&(l[t]=e[t]);return l};function bd(e,n,l={}){const t=l,{eventFilter:a}=t,r=xd(t,["eventFilter"]),{eventFilter:c,pause:p,resume:i,isActive:u}=ld(a);return{stop:gd(e,n,kd(Fd({},r),{eventFilter:c})),pause:p,resume:i,isActive:u}}function Re(e){var n;const l=pe(e);return(n=l==null?void 0:l.$el)!=null?n:l}const oe=Ve?window:void 0,qp=Ve?window.document:void 0,wd=Ve?window.navigator:void 0;function bs(...e){let n,l,t,a;if(Ip(e[0])||Array.isArray(e[0])?([l,t,a]=e,n=oe):[n,l,t,a]=e,!n)return Ll;Array.isArray(l)||(l=[l]),Array.isArray(t)||(t=[t]);const r=[],c=()=>{r.forEach(d=>d()),r.length=0},p=(d,y,f)=>(d.addEventListener(y,f,a),()=>d.removeEventListener(y,f,a)),i=Is(()=>Re(n),d=>{c(),d&&r.push(...l.flatMap(y=>t.map(f=>p(d,y,f))))},{immediate:!0,flush:"post"}),u=()=>{i(),c()};return Ue(u),u}function $d(e,n,l={}){const{window:t=oe,ignore:a=[],capture:r=!0,detectIframe:c=!1}=l;if(!t)return;let p=!0,i;const u=m=>a.some(v=>{if(typeof v=="string")return Array.from(t.document.querySelectorAll(v)).some(_=>_===m.target||m.composedPath().includes(_));{const _=Re(v);return _&&(m.target===_||m.composedPath().includes(_))}}),d=m=>{t.clearTimeout(i);const v=Re(e);if(!(!v||v===m.target||m.composedPath().includes(v))){if(m.detail===0&&(p=!u(m)),!p){p=!0;return}n(m)}},y=[bs(t,"click",d,{passive:!0,capture:r}),bs(t,"pointerdown",m=>{const v=Re(e);v&&(p=!m.composedPath().includes(v)&&!u(m))},{passive:!0}),bs(t,"pointerup",m=>{if(m.button===0){const v=m.composedPath();m.composedPath=()=>v,i=t.setTimeout(()=>d(m),50)}},{passive:!0}),c&&bs(t,"blur",m=>{var v;const _=Re(e);((v=t.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(_!=null&&_.contains(t.document.activeElement))&&n(m)})].filter(Boolean);return()=>y.forEach(m=>m())}const Sd=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function Pd(...e){let n,l,t={};e.length===3?(n=e[0],l=e[1],t=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,l=e[0],t=e[1]):(n=e[0],l=e[1]):(n=!0,l=e[0]);const{target:a=oe,eventName:r="keydown",passive:c=!1}=t,p=Sd(n);return bs(a,r,u=>{p(u)&&l(u)},c)}function Vd(e={}){var n;const{window:l=oe}=e,t=(n=e.document)!=null?n:l==null?void 0:l.document,a=ad(()=>null,()=>t==null?void 0:t.activeElement);return l&&(bs(l,"blur",r=>{r.relatedTarget===null&&a.trigger()},!0),bs(l,"focus",a.trigger,!0)),a}function lo(e,n=!1){const l=ls(),t=()=>l.value=Boolean(e());return t(),ka(t,n),l}function tl(e,n={}){const{window:l=oe}=n,t=lo(()=>l&&"matchMedia"in l&&typeof l.matchMedia=="function");let a;const r=ls(!1),c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",p):a.removeListener(p))},p=()=>{t.value&&(c(),a=l.matchMedia(Hp(e).value),r.value=a.matches,"addEventListener"in a?a.addEventListener("change",p):a.addListener(p))};return ml(p),Ue(()=>c()),r}const Od={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Ld=Object.defineProperty,wr=Object.getOwnPropertySymbols,Td=Object.prototype.hasOwnProperty,Nd=Object.prototype.propertyIsEnumerable,$r=(e,n,l)=>n in e?Ld(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Md=(e,n)=>{for(var l in n||(n={}))Td.call(n,l)&&$r(e,l,n[l]);if(wr)for(var l of wr(n))Nd.call(n,l)&&$r(e,l,n[l]);return e};function Rd(e,n={}){function l(p,i){let u=e[p];return i!=null&&(u=td(u,i)),typeof u=="number"&&(u=`${u}px`),u}const{window:t=oe}=n;function a(p){return t?t.matchMedia(p).matches:!1}const r=p=>tl(`(min-width: ${l(p)})`,n),c=Object.keys(e).reduce((p,i)=>(Object.defineProperty(p,i,{get:()=>r(i),enumerable:!0,configurable:!0}),p),{});return Md({greater(p){return tl(`(min-width: ${l(p,.1)})`,n)},greaterOrEqual:r,smaller(p){return tl(`(max-width: ${l(p,-.1)})`,n)},smallerOrEqual(p){return tl(`(max-width: ${l(p)})`,n)},between(p,i){return tl(`(min-width: ${l(p)}) and (max-width: ${l(i,-.1)})`,n)},isGreater(p){return a(`(min-width: ${l(p,.1)})`)},isGreaterOrEqual(p){return a(`(min-width: ${l(p)})`)},isSmaller(p){return a(`(max-width: ${l(p,-.1)})`)},isSmallerOrEqual(p){return a(`(max-width: ${l(p)})`)},isInBetween(p,i){return a(`(min-width: ${l(p)}) and (max-width: ${l(i,-.1)})`)}},c)}function Id(e={}){const{navigator:n=wd,read:l=!1,source:t,copiedDuring:a=1500,legacy:r=!1}=e,c=["copy","cut"],p=lo(()=>n&&"clipboard"in n),i=L(()=>p.value||r),u=ls(""),d=ls(!1),y=vd(()=>d.value=!1,a);function f(){p.value?n.clipboard.readText().then(D=>{u.value=D}):u.value=_()}if(i.value&&l)for(const D of c)bs(D,f);async function m(D=pe(t)){i.value&&D!=null&&(p.value?await n.clipboard.writeText(D):v(D),u.value=D,d.value=!0,y.start())}function v(D){const P=document.createElement("textarea");P.value=D??"",P.style.position="absolute",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),P.remove()}function _(){var D,P,k;return(k=(P=(D=document==null?void 0:document.getSelection)==null?void 0:D.call(document))==null?void 0:P.toString())!=null?k:""}return{isSupported:i,text:u,copied:d,copy:m}}function jd(e){return JSON.parse(JSON.stringify(e))}const jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ht="__vueuse_ssr_handlers__";jt[Ht]=jt[Ht]||{};const Hd=jt[Ht];function zd(e,n){return Hd[e]||n}function Ud(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Wd=Object.defineProperty,Sr=Object.getOwnPropertySymbols,qd=Object.prototype.hasOwnProperty,Kd=Object.prototype.propertyIsEnumerable,Pr=(e,n,l)=>n in e?Wd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Vr=(e,n)=>{for(var l in n||(n={}))qd.call(n,l)&&Pr(e,l,n[l]);if(Sr)for(var l of Sr(n))Kd.call(n,l)&&Pr(e,l,n[l]);return e};const Jd={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Oe(e,n,l,t={}){var a;const{flush:r="pre",deep:c=!0,listenToStorageChanges:p=!0,writeDefaults:i=!0,mergeDefaults:u=!1,shallow:d,window:y=oe,eventFilter:f,onError:m=q=>{console.error(q)}}=t,v=(d?ze:ls)(n);if(!l)try{l=zd("getDefaultStorage",()=>{var q;return(q=oe)==null?void 0:q.localStorage})()}catch(q){m(q)}if(!l)return v;const _=pe(n),D=Ud(_),P=(a=t.serializer)!=null?a:Jd[D],{pause:k,resume:S}=bd(v,()=>N(v.value),{flush:r,deep:c,eventFilter:f});return y&&p&&bs(y,"storage",J),J(),v;function N(q){try{if(q==null)l.removeItem(e);else{const ts=P.write(q),ys=l.getItem(e);ys!==ts&&(l.setItem(e,ts),y&&(y==null||y.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:ys,newValue:ts,storageArea:l}))))}}catch(ts){m(ts)}}function Q(q){const ts=q?q.newValue:l.getItem(e);if(ts==null)return i&&_!==null&&l.setItem(e,P.write(_)),_;if(!q&&u){const ys=P.read(ts);return Kl(u)?u(ys,_):D==="object"&&!Array.isArray(ys)?Vr(Vr({},_),ys):ys}else return typeof ts!="string"?ts:P.read(ts)}function J(q){if(!(q&&q.storageArea!==l)){if(q&&q.key==null){v.value=_;return}if(!(q&&q.key!==e)){k();try{v.value=Q(q)}catch(ts){m(ts)}finally{q?Se(S):S()}}}}}function Yd(e){return tl("(prefers-color-scheme: dark)",e)}var Zd=Object.defineProperty,Gd=Object.defineProperties,Qd=Object.getOwnPropertyDescriptors,Or=Object.getOwnPropertySymbols,Xd=Object.prototype.hasOwnProperty,sf=Object.prototype.propertyIsEnumerable,Lr=(e,n,l)=>n in e?Zd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,ef=(e,n)=>{for(var l in n||(n={}))Xd.call(n,l)&&Lr(e,l,n[l]);if(Or)for(var l of Or(n))sf.call(n,l)&&Lr(e,l,n[l]);return e},nf=(e,n)=>Gd(e,Qd(n));function L6(e,n={}){var l,t,a;const r=(l=n.draggingElement)!=null?l:oe,c=(t=n.handle)!=null?t:e,p=ls((a=pe(n.initialValue))!=null?a:{x:0,y:0}),i=ls(),u=v=>n.pointerTypes?n.pointerTypes.includes(v.pointerType):!0,d=v=>{pe(n.preventDefault)&&v.preventDefault(),pe(n.stopPropagation)&&v.stopPropagation()},y=v=>{var _;if(!u(v)||pe(n.exact)&&v.target!==pe(e))return;const D=pe(e).getBoundingClientRect(),P={x:v.clientX-D.left,y:v.clientY-D.top};((_=n.onStart)==null?void 0:_.call(n,P,v))!==!1&&(i.value=P,d(v))},f=v=>{var _;u(v)&&i.value&&(p.value={x:v.clientX-i.value.x,y:v.clientY-i.value.y},(_=n.onMove)==null||_.call(n,p.value,v),d(v))},m=v=>{var _;u(v)&&i.value&&(i.value=void 0,(_=n.onEnd)==null||_.call(n,p.value,v),d(v))};return Ve&&(bs(c,"pointerdown",y,!0),bs(r,"pointermove",f,!0),bs(r,"pointerup",m,!0)),nf(ef({},hd(p)),{position:p,isDragging:L(()=>!!i.value),style:L(()=>`left:${p.value.x}px;top:${p.value.y}px;`)})}var Tr=Object.getOwnPropertySymbols,lf=Object.prototype.hasOwnProperty,of=Object.prototype.propertyIsEnumerable,tf=(e,n)=>{var l={};for(var t in e)lf.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&Tr)for(var t of Tr(e))n.indexOf(t)<0&&of.call(e,t)&&(l[t]=e[t]);return l};function af(e,n,l={}){const t=l,{window:a=oe}=t,r=tf(t,["window"]);let c;const p=lo(()=>a&&"ResizeObserver"in a),i=()=>{c&&(c.disconnect(),c=void 0)},u=Is(()=>Re(e),y=>{i(),p.value&&a&&y&&(c=new ResizeObserver(n),c.observe(y,r))},{immediate:!0,flush:"post"}),d=()=>{i(),u()};return Ue(d),{isSupported:p,stop:d}}function rf(e,n={}){const{immediate:l=!0,window:t=oe}=n,a=ls(!1);let r=0,c=null;function p(d){if(!a.value||!t)return;const y=d-r;e({delta:y,timestamp:d}),r=d,c=t.requestAnimationFrame(p)}function i(){!a.value&&t&&(a.value=!0,c=t.requestAnimationFrame(p))}function u(){a.value=!1,c!=null&&t&&(t.cancelAnimationFrame(c),c=null)}return l&&i(),Ue(u),{isActive:a,pause:u,resume:i}}function cf(e,n={width:0,height:0},l={}){const{box:t="content-box"}=l,a=ls(n.width),r=ls(n.height);return af(e,([c])=>{const p=t==="border-box"?c.borderBoxSize:t==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;p?(a.value=p.reduce((i,{inlineSize:u})=>i+u,0),r.value=p.reduce((i,{blockSize:u})=>i+u,0)):(a.value=c.contentRect.width,r.value=c.contentRect.height)},l),Is(()=>Re(e),c=>{a.value=c?n.width:0,r.value=c?n.height:0}),{width:a,height:r}}const Nr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function pf(e,n={}){const{document:l=qp,autoExit:t=!1}=n,a=e||(l==null?void 0:l.querySelector("html")),r=ls(!1);let c=Nr[0];const p=lo(()=>{if(l){for(const _ of Nr)if(_[1]in l)return c=_,!0}else return!1;return!1}),[i,u,d,,y]=c;async function f(){p.value&&(l!=null&&l[d]&&await l[u](),r.value=!1)}async function m(){if(!p.value)return;await f();const _=Re(a);_&&(await _[i](),r.value=!0)}async function v(){r.value?await f():await m()}return l&&bs(l,y,()=>{r.value=!!(l!=null&&l[d])},!1),t&&Ue(f),{isSupported:p,isFullscreen:r,enter:m,exit:f,toggle:v}}function T6(e,n,l={}){const{root:t,rootMargin:a="0px",threshold:r=.1,window:c=oe}=l,p=lo(()=>c&&"IntersectionObserver"in c);let i=Ll;const u=p.value?Is(()=>({el:Re(e),root:Re(t)}),({el:y,root:f})=>{if(i(),!y)return;const m=new IntersectionObserver(n,{root:f,rootMargin:a,threshold:r});m.observe(y),i=()=>{m.disconnect(),i=Ll}},{immediate:!0,flush:"post"}):Ll,d=()=>{i(),u()};return Ue(d),{isSupported:p,stop:d}}const uf={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function yf(e={}){const{reactive:n=!1,target:l=oe,aliasMap:t=uf,passive:a=!0,onEventFired:r=Ll}=e,c=se(new Set),p={toJSON(){return{}},current:c},i=n?se(p):p,u=new Set,d=new Set;function y(_,D){_ in i&&(n?i[_]=D:i[_].value=D)}function f(){c.clear();for(const _ of d)y(_,!1)}function m(_,D){var P,k;const S=(P=_.key)==null?void 0:P.toLowerCase(),Q=[(k=_.code)==null?void 0:k.toLowerCase(),S].filter(Boolean);S&&(D?c.add(S):c.delete(S));for(const J of Q)d.add(J),y(J,D);S==="meta"&&!D?(u.forEach(J=>{c.delete(J),y(J,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&D&&[...c,...Q].forEach(J=>u.add(J))}bs(l,"keydown",_=>(m(_,!0),r(_)),{passive:a}),bs(l,"keyup",_=>(m(_,!1),r(_)),{passive:a}),bs("blur",f,{passive:!0}),bs("focus",f,{passive:!0});const v=new Proxy(i,{get(_,D,P){if(typeof D!="string")return Reflect.get(_,D,P);if(D=D.toLowerCase(),D in t&&(D=t[D]),!(D in i))if(/[+_-]/.test(D)){const S=D.split(/[+_-]/g).map(N=>N.trim());i[D]=L(()=>S.every(N=>C(v[N])))}else i[D]=ls(!1);const k=Reflect.get(_,D,P);return n?C(k):k}});return v}function N6(e={}){const{type:n="page",touch:l=!0,resetOnTouchEnds:t=!1,initialValue:a={x:0,y:0},window:r=oe,eventFilter:c}=e,p=ls(a.x),i=ls(a.y),u=ls(null),d=_=>{n==="page"?(p.value=_.pageX,i.value=_.pageY):n==="client"?(p.value=_.clientX,i.value=_.clientY):n==="movement"&&(p.value=_.movementX,i.value=_.movementY),u.value="mouse"},y=()=>{p.value=a.x,i.value=a.y},f=_=>{if(_.touches.length>0){const D=_.touches[0];n==="page"?(p.value=D.pageX,i.value=D.pageY):n==="client"&&(p.value=D.clientX,i.value=D.clientY),u.value="touch"}},m=_=>c===void 0?d(_):c(()=>d(_),{}),v=_=>c===void 0?f(_):c(()=>f(_),{});return r&&(bs(r,"mousemove",m,{passive:!0}),bs(r,"dragover",m,{passive:!0}),l&&n!=="movement"&&(bs(r,"touchstart",v,{passive:!0}),bs(r,"touchmove",v,{passive:!0}),t&&bs(r,"touchend",y,{passive:!0}))),{x:p,y:i,sourceType:u}}var Qe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Qe||(Qe={}));function df(e,n={}){const l=Hp(e),{threshold:t=50,onSwipe:a,onSwipeEnd:r,onSwipeStart:c}=n,p=se({x:0,y:0}),i=(J,q)=>{p.x=J,p.y=q},u=se({x:0,y:0}),d=(J,q)=>{u.x=J,u.y=q},y=L(()=>p.x-u.x),f=L(()=>p.y-u.y),{max:m,abs:v}=Math,_=L(()=>m(v(y.value),v(f.value))>=t),D=ls(!1),P=ls(!1),k=L(()=>_.value?v(y.value)>v(f.value)?y.value>0?Qe.LEFT:Qe.RIGHT:f.value>0?Qe.UP:Qe.DOWN:Qe.NONE),S=J=>{var q,ts,ys;const vs=J.buttons===0,Ds=J.buttons===1;return(ys=(ts=(q=n.pointerTypes)==null?void 0:q.includes(J.pointerType))!=null?ts:vs||Ds)!=null?ys:!0},N=[bs(e,"pointerdown",J=>{var q,ts;if(!S(J))return;P.value=!0,(ts=(q=l.value)==null?void 0:q.style)==null||ts.setProperty("touch-action","none");const ys=J.target;ys==null||ys.setPointerCapture(J.pointerId);const{clientX:vs,clientY:Ds}=J;i(vs,Ds),d(vs,Ds),c==null||c(J)}),bs(e,"pointermove",J=>{if(!S(J)||!P.value)return;const{clientX:q,clientY:ts}=J;d(q,ts),!D.value&&_.value&&(D.value=!0),D.value&&(a==null||a(J))}),bs(e,"pointerup",J=>{var q,ts;S(J)&&(D.value&&(r==null||r(J,k.value)),P.value=!1,D.value=!1,(ts=(q=l.value)==null?void 0:q.style)==null||ts.setProperty("touch-action","initial"))})],Q=()=>N.forEach(J=>J());return{isSwiping:Sn(D),direction:Sn(k),posStart:Sn(p),posEnd:Sn(u),distanceX:y,distanceY:f,stop:Q}}let ff=0;function M6(e,n={}){const l=ls(!1),{document:t=qp,immediate:a=!0,manual:r=!1,id:c=`vueuse_styletag_${++ff}`}=n,p=ls(e);let i=()=>{};const u=()=>{if(!t)return;const y=t.getElementById(c)||t.createElement("style");y.isConnected||(y.type="text/css",y.id=c,n.media&&(y.media=n.media),t.head.appendChild(y)),!l.value&&(i=Is(p,f=>{y.textContent=f},{immediate:!0}),l.value=!0)},d=()=>{!t||!l.value||(i(),t.head.removeChild(t.getElementById(c)),l.value=!1)};return a&&!r&&ka(u),r||Ue(d),{id:c,css:p,unload:d,load:u,isLoaded:Sn(l)}}var hf=Object.defineProperty,Mr=Object.getOwnPropertySymbols,mf=Object.prototype.hasOwnProperty,vf=Object.prototype.propertyIsEnumerable,Rr=(e,n,l)=>n in e?hf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Bf=(e,n)=>{for(var l in n||(n={}))mf.call(n,l)&&Rr(e,l,n[l]);if(Mr)for(var l of Mr(n))vf.call(n,l)&&Rr(e,l,n[l]);return e};function R6(e={}){const{controls:n=!1,offset:l=0,immediate:t=!0,interval:a="requestAnimationFrame",callback:r}=e,c=ls(It()+l),p=()=>c.value=It()+l,i=r?()=>{p(),r(c.value)}:p,u=a==="requestAnimationFrame"?rf(i,{immediate:t}):md(i,a,{immediate:t});return n?Bf({timestamp:c},u):c}var Af=Object.defineProperty,Ir=Object.getOwnPropertySymbols,_f=Object.prototype.hasOwnProperty,gf=Object.prototype.propertyIsEnumerable,jr=(e,n,l)=>n in e?Af(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Df=(e,n)=>{for(var l in n||(n={}))_f.call(n,l)&&jr(e,l,n[l]);if(Ir)for(var l of Ir(n))gf.call(n,l)&&jr(e,l,n[l]);return e};const Cf={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Df({linear:od},Cf);function Ie(e,n,l,t={}){var a,r,c;const{clone:p=!1,passive:i=!1,eventName:u,deep:d=!1,defaultValue:y}=t,f=En(),m=l||(f==null?void 0:f.emit)||((a=f==null?void 0:f.$emit)==null?void 0:a.bind(f))||((c=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let v=u;n||(n="modelValue"),v=u||v||`update:${n.toString()}`;const _=P=>p?Kl(p)?p(P):jd(P):P,D=()=>sd(e[n])?_(e[n]):y;if(i){const P=D(),k=ls(P);return Is(()=>e[n],S=>k.value=_(S)),Is(k,S=>{(S!==e[n]||d)&&m(v,S)},{deep:d}),k}else return L({get(){return D()},set(P){m(v,P)}})}function I6({window:e=oe}={}){if(!e)return ls(!1);const n=ls(e.document.hasFocus());return bs(e,"blur",()=>{n.value=!1}),bs(e,"focus",()=>{n.value=!0}),n}function Ef(e={}){const{window:n=oe,initialWidth:l=1/0,initialHeight:t=1/0,listenOrientation:a=!0,includeScrollbar:r=!0}=e,c=ls(l),p=ls(t),i=()=>{n&&(r?(c.value=n.innerWidth,p.value=n.innerHeight):(c.value=n.document.documentElement.clientWidth,p.value=n.document.documentElement.clientHeight))};return i(),ka(i),bs("resize",i,{passive:!0}),a&&bs("orientationchange",i,{passive:!0}),{width:c,height:p}}function Ff(){return Kp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Kp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const kf=typeof Proxy=="function",xf="devtools-plugin:setup",bf="plugin:settings:set";let Xn,zt;function wf(){var e;return Xn!==void 0||(typeof window<"u"&&window.performance?(Xn=!0,zt=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Xn=!0,zt=global.perf_hooks.performance):Xn=!1),Xn}function $f(){return wf()?zt.now():Date.now()}class Sf{constructor(n,l){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=l;const t={};if(n.settings)for(const c in n.settings){const p=n.settings[c];t[c]=p.defaultValue}const a=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},t);try{const c=localStorage.getItem(a),p=JSON.parse(c);Object.assign(r,p)}catch{}this.fallbacks={getSettings(){return r},setSettings(c){try{localStorage.setItem(a,JSON.stringify(c))}catch{}r=c},now(){return $f()}},l&&l.on(bf,(c,p)=>{c===this.plugin.id&&this.fallbacks.setSettings(p)}),this.proxiedOn=new Proxy({},{get:(c,p)=>this.target?this.target.on[p]:(...i)=>{this.onQueue.push({method:p,args:i})}}),this.proxiedTarget=new Proxy({},{get:(c,p)=>this.target?this.target[p]:p==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(p)?(...i)=>(this.targetQueue.push({method:p,args:i,resolve:()=>{}}),this.fallbacks[p](...i)):(...i)=>new Promise(u=>{this.targetQueue.push({method:p,args:i,resolve:u})})})}async setRealTarget(n){this.target=n;for(const l of this.onQueue)this.target.on[l.method](...l.args);for(const l of this.targetQueue)l.resolve(await this.target[l.method](...l.args))}}function Pf(e,n){const l=e,t=Kp(),a=Ff(),r=kf&&l.enableEarlyProxy;if(a&&(t.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))a.emit(xf,e,n);else{const c=r?new Sf(l,a):null;(t.__VUE_DEVTOOLS_PLUGINS__=t.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:l,setupFn:n,proxy:c}),c&&n(c.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ze=typeof window<"u";function Vf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const xs=Object.assign;function ft(e,n){const l={};for(const t in n){const a=n[t];l[t]=ge(a)?a.map(e):e(a)}return l}const Tl=()=>{},ge=Array.isArray;function Es(e){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(n))}const Of=/\/$/,Lf=e=>e.replace(Of,"");function ht(e,n,l="/"){let t,a={},r="",c="";const p=n.indexOf("#");let i=n.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(t=n.slice(0,i),r=n.slice(i+1,p>-1?p:n.length),a=e(r)),p>-1&&(t=t||n.slice(0,p),c=n.slice(p,n.length)),t=Mf(t??n,l),{fullPath:t+(r&&"?")+r+c,path:t,query:a,hash:c}}function Tf(e,n){const l=n.query?e(n.query):"";return n.path+(l&&"?")+l+(n.hash||"")}function Hr(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function zr(e,n,l){const t=n.matched.length-1,a=l.matched.length-1;return t>-1&&t===a&&Dn(n.matched[t],l.matched[a])&&Jp(n.params,l.params)&&e(n.query)===e(l.query)&&n.hash===l.hash}function Dn(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Jp(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const l in e)if(!Nf(e[l],n[l]))return!1;return!0}function Nf(e,n){return ge(e)?Ur(e,n):ge(n)?Ur(n,e):e===n}function Ur(e,n){return ge(n)?e.length===n.length&&e.every((l,t)=>l===n[t]):e.length===1&&e[0]===n}function Mf(e,n){if(e.startsWith("/"))return e;if(!n.startsWith("/"))return Es(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${n}". It should look like "/${n}".`),e;if(!e)return n;const l=n.split("/"),t=e.split("/");let a=l.length-1,r,c;for(r=0;r<t.length;r++)if(c=t[r],c!==".")if(c==="..")a>1&&a--;else break;return l.slice(0,a).join("/")+"/"+t.slice(r-(r===t.length?1:0)).join("/")}var Jl;(function(e){e.pop="pop",e.push="push"})(Jl||(Jl={}));var Nl;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Nl||(Nl={}));function Rf(e){if(!e)if(Ze){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lf(e)}const If=/^[^#]+#/;function jf(e,n){return e.replace(If,"#")+n}function Hf(e,n){const l=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:n.behavior,left:t.left-l.left-(n.left||0),top:t.top-l.top-(n.top||0)}}const lt=()=>({left:window.pageXOffset,top:window.pageYOffset});function zf(e){let n;if("el"in e){const l=e.el,t=typeof l=="string"&&l.startsWith("#");if(typeof e.el=="string"&&(!t||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(t&&r){Es(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Es(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const a=typeof l=="string"?t?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!a){Es(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}n=Hf(a,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Wr(e,n){return(history.state?history.state.position-n:-1)+e}const Ut=new Map;function Uf(e,n){Ut.set(e,n)}function Wf(e){const n=Ut.get(e);return Ut.delete(e),n}let qf=()=>location.protocol+"//"+location.host;function Yp(e,n){const{pathname:l,search:t,hash:a}=n,r=e.indexOf("#");if(r>-1){let p=a.includes(e.slice(r))?e.slice(r).length:1,i=a.slice(p);return i[0]!=="/"&&(i="/"+i),Hr(i,"")}return Hr(l,e)+t+a}function Kf(e,n,l,t){let a=[],r=[],c=null;const p=({state:f})=>{const m=Yp(e,location),v=l.value,_=n.value;let D=0;if(f){if(l.value=m,n.value=f,c&&c===v){c=null;return}D=_?f.position-_.position:0}else t(m);a.forEach(P=>{P(l.value,v,{delta:D,type:Jl.pop,direction:D?D>0?Nl.forward:Nl.back:Nl.unknown})})};function i(){c=l.value}function u(f){a.push(f);const m=()=>{const v=a.indexOf(f);v>-1&&a.splice(v,1)};return r.push(m),m}function d(){const{history:f}=window;f.state&&f.replaceState(xs({},f.state,{scroll:lt()}),"")}function y(){for(const f of r)f();r=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",d),{pauseListeners:i,listen:u,destroy:y}}function qr(e,n,l,t=!1,a=!1){return{back:e,current:n,forward:l,replaced:t,position:window.history.length,scroll:a?lt():null}}function Jf(e){const{history:n,location:l}=window,t={value:Yp(e,l)},a={value:n.state};a.value||r(t.value,{back:null,current:t.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(i,u,d){const y=e.indexOf("#"),f=y>-1?(l.host&&document.querySelector("base")?e:e.slice(y))+i:qf()+e+i;try{n[d?"replaceState":"pushState"](u,"",f),a.value=u}catch(m){Es("Error with push/replace State",m),l[d?"replace":"assign"](f)}}function c(i,u){const d=xs({},n.state,qr(a.value.back,i,a.value.forward,!0),u,{position:a.value.position});r(i,d,!0),t.value=i}function p(i,u){const d=xs({},a.value,n.state,{forward:i,scroll:lt()});n.state||Es(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const y=xs({},qr(t.value,i,null),{position:d.position+1},u);r(i,y,!1),t.value=i}return{location:t,state:a,push:p,replace:c}}function Yf(e){e=Rf(e);const n=Jf(e),l=Kf(e,n.state,n.location,n.replace);function t(r,c=!0){c||l.pauseListeners(),history.go(r)}const a=xs({location:"",base:e,go:t,createHref:jf.bind(null,e)},n,l);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function Zf(e){return typeof e=="string"||e&&typeof e=="object"}function Zp(e){return typeof e=="string"||typeof e=="symbol"}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gp=Symbol("navigation failure");var Kr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Kr||(Kr={}));const Gf={[1]({location:e,currentLocation:n}){return`No match for
 ${JSON.stringify(e)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:e,to:n}){return`Redirected from "${e.fullPath}" to "${Xf(n)}" via a navigation guard.`},[4]({from:e,to:n}){return`Navigation aborted from "${e.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:e,to:n}){return`Navigation cancelled from "${e.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:e,to:n}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function fl(e,n){return xs(new Error(Gf[e](n)),{type:e,[Gp]:!0},n)}function qe(e,n){return e instanceof Error&&Gp in e&&(n==null||!!(e.type&n))}const Qf=["params","query","hash"];function Xf(e){if(typeof e=="string")return e;if("path"in e)return e.path;const n={};for(const l of Qf)l in e&&(n[l]=e[l]);return JSON.stringify(n,null,2)}const Jr="[^/]+?",s5={sensitive:!1,strict:!1,start:!0,end:!0},e5=/[.+*?^${}()[\]/\\]/g;function n5(e,n){const l=xs({},s5,n),t=[];let a=l.start?"^":"";const r=[];for(const u of e){const d=u.length?[]:[90];l.strict&&!u.length&&(a+="/");for(let y=0;y<u.length;y++){const f=u[y];let m=40+(l.sensitive?.25:0);if(f.type===0)y||(a+="/"),a+=f.value.replace(e5,"\\$&"),m+=40;else if(f.type===1){const{value:v,repeatable:_,optional:D,regexp:P}=f;r.push({name:v,repeatable:_,optional:D});const k=P||Jr;if(k!==Jr){m+=10;try{new RegExp(`(${k})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+N.message)}}let S=_?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;y||(S=D&&u.length<2?`(?:/${S})`:"/"+S),D&&(S+="?"),a+=S,m+=20,D&&(m+=-8),_&&(m+=-20),k===".*"&&(m+=-50)}d.push(m)}t.push(d)}if(l.strict&&l.end){const u=t.length-1;t[u][t[u].length-1]+=.7000000000000001}l.strict||(a+="/?"),l.end?a+="$":l.strict&&(a+="(?:/|$)");const c=new RegExp(a,l.sensitive?"":"i");function p(u){const d=u.match(c),y={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",v=r[f-1];y[v.name]=m&&v.repeatable?m.split("/"):m}return y}function i(u){let d="",y=!1;for(const f of e){(!y||!d.endsWith("/"))&&(d+="/"),y=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:v,repeatable:_,optional:D}=m,P=v in u?u[v]:"";if(ge(P)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=ge(P)?P.join("/"):P;if(!k)if(D)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):y=!0);else throw new Error(`Missing required param "${v}"`);d+=k}}return d||"/"}return{re:c,score:t,keys:r,parse:p,stringify:i}}function l5(e,n){let l=0;for(;l<e.length&&l<n.length;){const t=n[l]-e[l];if(t)return t;l++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function o5(e,n){let l=0;const t=e.score,a=n.score;for(;l<t.length&&l<a.length;){const r=l5(t[l],a[l]);if(r)return r;l++}if(Math.abs(a.length-t.length)===1){if(Yr(t))return 1;if(Yr(a))return-1}return a.length-t.length}function Yr(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const t5={type:0,value:""},a5=/[a-zA-Z0-9_]/;function r5(e){if(!e)return[[]];if(e==="/")return[[t5]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function n(m){throw new Error(`ERR (${l})/"${u}": ${m}`)}let l=0,t=l;const a=[];let r;function c(){r&&a.push(r),r=[]}let p=0,i,u="",d="";function y(){u&&(l===0?r.push({type:0,value:u}):l===1||l===2||l===3?(r.length>1&&(i==="*"||i==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):n("Invalid state to consume buffer"),u="")}function f(){u+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&l!==2){t=l,l=4;continue}switch(l){case 0:i==="/"?(u&&y(),c()):i===":"?(y(),l=1):f();break;case 4:f(),l=t;break;case 1:i==="("?l=2:a5.test(i)?f():(y(),l=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+i:l=3:d+=i;break;case 3:y(),l=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,d="";break;default:n("Unknown state");break}}return l===2&&n(`Unfinished custom RegExp for param "${u}"`),y(),c(),a}function c5(e,n,l){const t=n5(r5(e.path),l);{const r=new Set;for(const c of t.keys)r.has(c.name)&&Es(`Found duplicated params with name "${c.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(c.name)}const a=xs(t,{record:e,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function p5(e,n){const l=[],t=new Map;n=Qr({strict:!1,end:!0,sensitive:!1},n);function a(d){return t.get(d)}function r(d,y,f){const m=!f,v=i5(d);f5(v,y),v.aliasOf=f&&f.record;const _=Qr(n,d),D=[v];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const N of S)D.push(xs({},v,{components:f?f.record.components:v.components,path:N,aliasOf:f?f.record:v}))}let P,k;for(const S of D){const{path:N}=S;if(y&&N[0]!=="/"){const Q=y.record.path,J=Q[Q.length-1]==="/"?"":"/";S.path=y.record.path+(N&&J+N)}if(S.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(P=c5(S,y,_),y&&N[0]==="/"&&h5(P,y),f?(f.alias.push(P),d5(f,P)):(k=k||P,k!==P&&k.alias.push(P),m&&d.name&&!Gr(P)&&c(d.name)),v.children){const Q=v.children;for(let J=0;J<Q.length;J++)r(Q[J],P,f&&f.children[J])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&i(P)}return k?()=>{c(k)}:Tl}function c(d){if(Zp(d)){const y=t.get(d);y&&(t.delete(d),l.splice(l.indexOf(y),1),y.children.forEach(c),y.alias.forEach(c))}else{const y=l.indexOf(d);y>-1&&(l.splice(y,1),d.record.name&&t.delete(d.record.name),d.children.forEach(c),d.alias.forEach(c))}}function p(){return l}function i(d){let y=0;for(;y<l.length&&o5(d,l[y])>=0&&(d.record.path!==l[y].record.path||!Qp(d,l[y]));)y++;l.splice(y,0,d),d.record.name&&!Gr(d)&&t.set(d.record.name,d)}function u(d,y){let f,m={},v,_;if("name"in d&&d.name){if(f=t.get(d.name),!f)throw fl(1,{location:d});{const k=Object.keys(d.params||{}).filter(S=>!f.keys.find(N=>N.name===S));k.length&&Es(`Discarded invalid param(s) "${k.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=f.record.name,m=xs(Zr(y.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),d.params&&Zr(d.params,f.keys.map(k=>k.name))),v=f.stringify(m)}else if("path"in d)v=d.path,v.startsWith("/")||Es(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=l.find(k=>k.re.test(v)),f&&(m=f.parse(v),_=f.record.name);else{if(f=y.name?t.get(y.name):l.find(k=>k.re.test(y.path)),!f)throw fl(1,{location:d,currentLocation:y});_=f.record.name,m=xs({},y.params,d.params),v=f.stringify(m)}const D=[];let P=f;for(;P;)D.unshift(P.record),P=P.parent;return{name:_,path:v,params:m,matched:D,meta:y5(D)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:c,getRoutes:p,getRecordMatcher:a}}function Zr(e,n){const l={};for(const t of n)t in e&&(l[t]=e[t]);return l}function i5(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:u5(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function u5(e){const n={},l=e.props||!1;if("component"in e)n.default=l;else for(const t in e.components)n[t]=typeof l=="boolean"?l:l[t];return n}function Gr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function y5(e){return e.reduce((n,l)=>xs(n,l.meta),{})}function Qr(e,n){const l={};for(const t in e)l[t]=t in n?n[t]:e[t];return l}function Wt(e,n){return e.name===n.name&&e.optional===n.optional&&e.repeatable===n.repeatable}function d5(e,n){for(const l of e.keys)if(!l.optional&&!n.keys.find(Wt.bind(null,l)))return Es(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${l.name}"`);for(const l of n.keys)if(!l.optional&&!e.keys.find(Wt.bind(null,l)))return Es(`Alias "${n.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${l.name}"`)}function f5(e,n){n&&n.record.name&&!e.name&&!e.path&&Es(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function h5(e,n){for(const l of n.keys)if(!e.keys.find(Wt.bind(null,l)))return Es(`Absolute path "${e.record.path}" must have the exact same param named "${l.name}" as its parent "${n.record.path}".`)}function Qp(e,n){return n.children.some(l=>l===e||Qp(e,l))}const Xp=/#/g,m5=/&/g,v5=/\//g,B5=/=/g,A5=/\?/g,si=/\+/g,_5=/%5B/g,g5=/%5D/g,ei=/%5E/g,D5=/%60/g,ni=/%7B/g,C5=/%7C/g,li=/%7D/g,E5=/%20/g;function xa(e){return encodeURI(""+e).replace(C5,"|").replace(_5,"[").replace(g5,"]")}function F5(e){return xa(e).replace(ni,"{").replace(li,"}").replace(ei,"^")}function qt(e){return xa(e).replace(si,"%2B").replace(E5,"+").replace(Xp,"%23").replace(m5,"%26").replace(D5,"`").replace(ni,"{").replace(li,"}").replace(ei,"^")}function k5(e){return qt(e).replace(B5,"%3D")}function x5(e){return xa(e).replace(Xp,"%23").replace(A5,"%3F")}function b5(e){return e==null?"":x5(e).replace(v5,"%2F")}function Yl(e){try{return decodeURIComponent(""+e)}catch{Es(`Error decoding "${e}". Using original value`)}return""+e}function w5(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<t.length;++a){const r=t[a].replace(si," "),c=r.indexOf("="),p=Yl(c<0?r:r.slice(0,c)),i=c<0?null:Yl(r.slice(c+1));if(p in n){let u=n[p];ge(u)||(u=n[p]=[u]),u.push(i)}else n[p]=i}return n}function Xr(e){let n="";for(let l in e){const t=e[l];if(l=k5(l),t==null){t!==void 0&&(n+=(n.length?"&":"")+l);continue}(ge(t)?t.map(r=>r&&qt(r)):[t&&qt(t)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+l,r!=null&&(n+="="+r))})}return n}function $5(e){const n={};for(const l in e){const t=e[l];t!==void 0&&(n[l]=ge(t)?t.map(a=>a==null?null:""+a):t==null?t:""+t)}return n}const S5=Symbol("router view location matched"),sc=Symbol("router view depth"),ba=Symbol("router"),oi=Symbol("route location"),Kt=Symbol("router view location");function Dl(){let e=[];function n(t){return e.push(t),()=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)}}function l(){e=[]}return{add:n,list:()=>e,reset:l}}function yn(e,n,l,t,a){const r=t&&(t.enterCallbacks[a]=t.enterCallbacks[a]||[]);return()=>new Promise((c,p)=>{const i=y=>{y===!1?p(fl(4,{from:l,to:n})):y instanceof Error?p(y):Zf(y)?p(fl(2,{from:n,to:y})):(r&&t.enterCallbacks[a]===r&&typeof y=="function"&&r.push(y),c())},u=e.call(t&&t.instances[a],n,l,P5(i,n,l));let d=Promise.resolve(u);if(e.length<3&&(d=d.then(i)),e.length>2){const y=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(f=>i._called?f:(Es(y),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!i._called){Es(y),p(new Error("Invalid navigation guard"));return}}d.catch(y=>p(y))})}function P5(e,n,l){let t=0;return function(){t++===1&&Es(`The "next" callback was called more than once in one navigation guard when going from "${l.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,t===1&&e.apply(null,arguments)}}function mt(e,n,l,t){const a=[];for(const r of e){!r.components&&!r.children.length&&Es(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const c in r.components){let p=r.components[c];{if(!p||typeof p!="object"&&typeof p!="function")throw Es(`Component "${c}" in record with path "${r.path}" is not a valid component. Received "${String(p)}".`),new Error("Invalid route component");if("then"in p){Es(`Component "${c}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const i=p;p=()=>i}else p.__asyncLoader&&!p.__warnedDefineAsync&&(p.__warnedDefineAsync=!0,Es(`Component "${c}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[c]))if(V5(p)){const u=(p.__vccOpts||p)[n];u&&a.push(yn(u,l,t,r,c))}else{let i=p();"catch"in i||(Es(`Component "${c}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),i=Promise.resolve(i)),a.push(()=>i.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${r.path}"`));const d=Vf(u)?u.default:u;r.components[c]=d;const f=(d.__vccOpts||d)[n];return f&&yn(f,l,t,r,c)()}))}}}return a}function V5(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ec(e){const n=x(ba),l=x(oi),t=L(()=>n.resolve(C(e.to))),a=L(()=>{const{matched:i}=t.value,{length:u}=i,d=i[u-1],y=l.matched;if(!d||!y.length)return-1;const f=y.findIndex(Dn.bind(null,d));if(f>-1)return f;const m=nc(i[u-2]);return u>1&&nc(d)===m&&y[y.length-1].path!==m?y.findIndex(Dn.bind(null,i[u-2])):f}),r=L(()=>a.value>-1&&N5(l.params,t.value.params)),c=L(()=>a.value>-1&&a.value===l.matched.length-1&&Jp(l.params,t.value.params));function p(i={}){return T5(i)?n[C(e.replace)?"replace":"push"](C(e.to)).catch(Tl):Promise.resolve()}if(Ze){const i=En();if(i){const u={route:t.value,isActive:r.value,isExactActive:c.value};i.__vrl_devtools=i.__vrl_devtools||[],i.__vrl_devtools.push(u),ml(()=>{u.route=t.value,u.isActive=r.value,u.isExactActive=c.value},{flush:"post"})}}return{route:t,href:L(()=>t.value.href),isActive:r,isExactActive:c,navigate:p}}const O5=Ms({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ec,setup(e,{slots:n}){const l=se(ec(e)),{options:t}=x(ba),a=L(()=>({[lc(e.activeClass,t.linkActiveClass,"router-link-active")]:l.isActive,[lc(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const r=n.default&&n.default(l);return e.custom?r:nt("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:a.value},r)}}}),L5=O5;function T5(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function N5(e,n){for(const l in n){const t=n[l],a=e[l];if(typeof t=="string"){if(t!==a)return!1}else if(!ge(a)||a.length!==t.length||t.some((r,c)=>r!==a[c]))return!1}return!0}function nc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const lc=(e,n,l)=>e??n??l,M5=Ms({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:l}){I5();const t=x(Kt),a=L(()=>e.route||t.value),r=x(sc,0),c=L(()=>{let u=C(r);const{matched:d}=a.value;let y;for(;(y=d[u])&&!y.components;)u++;return u}),p=L(()=>a.value.matched[c.value]);Be(sc,L(()=>c.value+1)),Be(S5,p),Be(Kt,a);const i=ls();return Is(()=>[i.value,p.value,e.name],([u,d,y],[f,m,v])=>{d&&(d.instances[y]=u,m&&m!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!Dn(d,m)||!f)&&(d.enterCallbacks[y]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=a.value,d=e.name,y=p.value,f=y&&y.components[d];if(!f)return oc(l.default,{Component:f,route:u});const m=y.props[d],v=m?m===!0?u.params:typeof m=="function"?m(u):m:null,D=nt(f,xs({},v,n,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(y.instances[d]=null)},ref:i}));if(Ze&&D.ref){const P={depth:c.value,name:y.name,path:y.path,meta:y.meta};(ge(D.ref)?D.ref.map(S=>S.i):[D.ref.i]).forEach(S=>{S.__vrv_devtools=P})}return oc(l.default,{Component:D,route:u})||D}}});function oc(e,n){if(!e)return null;const l=e(n);return l.length===1?l[0]:l}const R5=M5;function I5(){const e=En(),n=e.parent&&e.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const l=n==="KeepAlive"?"keep-alive":"transition";Es(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${l}>
    <component :is="Component" />
  </${l}>
</router-view>`)}}function Cl(e,n){const l=xs({},e,{matched:e.matched.map(t=>Y5(t,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:n,value:l}}}function uo(e){return{_custom:{display:e}}}let j5=0;function H5(e,n,l){if(n.__hasDevtools)return;n.__hasDevtools=!0;const t=j5++;Pf({id:"org.vuejs.router"+(t?"."+t:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},a=>{typeof a.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),a.on.inspectComponent((d,y)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Cl(n.currentRoute.value,"Current Route")})}),a.on.visitComponentTree(({treeNode:d,componentInstance:y})=>{if(y.__vrv_devtools){const f=y.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:ti})}ge(y.__vrl_devtools)&&(y.__devtoolsApi=a,y.__vrl_devtools.forEach(f=>{let m=ci,v="";f.isExactActive?(m=ri,v="This is exactly active"):f.isActive&&(m=ai,v="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:v,backgroundColor:m})}))}),Is(n.currentRoute,()=>{i(),a.notifyComponentUpdate(),a.sendInspectorTree(p),a.sendInspectorState(p)});const r="router:navigations:"+t;a.addTimelineLayer({id:r,label:`Router${t?" "+t:""} Navigations`,color:4237508}),n.onError((d,y)=>{a.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:y.fullPath,logType:"error",time:a.now(),data:{error:d},groupId:y.meta.__navigationId}})});let c=0;n.beforeEach((d,y)=>{const f={guard:uo("beforeEach"),from:Cl(y,"Current Location during this navigation"),to:Cl(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:c++}),a.addTimelineEvent({layerId:r,event:{time:a.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),n.afterEach((d,y,f)=>{const m={guard:uo("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=uo("❌")):m.status=uo("✅"),m.from=Cl(y,"Current Location during this navigation"),m.to=Cl(d,"Target location"),a.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:a.now(),data:m,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const p="router-inspector:"+t;a.addInspector({id:p,label:"Routes"+(t?" "+t:""),icon:"book",treeFilterPlaceholder:"Search routes"});function i(){if(!u)return;const d=u;let y=l.getRoutes().filter(f=>!f.parent);y.forEach(ui),d.filter&&(y=y.filter(f=>Jt(f,d.filter.toLowerCase()))),y.forEach(f=>ii(f,n.currentRoute.value)),d.rootNodes=y.map(pi)}let u;a.on.getInspectorTree(d=>{u=d,d.app===e&&d.inspectorId===p&&i()}),a.on.getInspectorState(d=>{if(d.app===e&&d.inspectorId===p){const f=l.getRoutes().find(m=>m.record.__vd_id===d.nodeId);f&&(d.state={options:U5(f)})}}),a.sendInspectorTree(p),a.sendInspectorState(p)})}function z5(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function U5(e){const{record:n}=e,l=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&l.push({editable:!1,key:"name",value:n.name}),l.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&l.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(t=>`${t.name}${z5(t)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),n.redirect!=null&&l.push({editable:!1,key:"redirect",value:n.redirect}),e.alias.length&&l.push({editable:!1,key:"aliases",value:e.alias.map(t=>t.record.path)}),Object.keys(e.record.meta).length&&l.push({editable:!1,key:"meta",value:e.record.meta}),l.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(t=>t.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),l}const ti=15485081,ai=2450411,ri=8702998,W5=2282478,ci=16486972,q5=6710886;function pi(e){const n=[],{record:l}=e;l.name!=null&&n.push({label:String(l.name),textColor:0,backgroundColor:W5}),l.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:ci}),e.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:ti}),e.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:ri}),e.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:ai}),l.redirect&&n.push({label:typeof l.redirect=="string"?`redirect: ${l.redirect}`:"redirects",textColor:16777215,backgroundColor:q5});let t=l.__vd_id;return t==null&&(t=String(K5++),l.__vd_id=t),{id:t,label:l.path,tags:n,children:e.children.map(pi)}}let K5=0;const J5=/^\/(.*)\/([a-z]*)$/;function ii(e,n){const l=n.matched.length&&Dn(n.matched[n.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=l,l||(e.__vd_active=n.matched.some(t=>Dn(t,e.record))),e.children.forEach(t=>ii(t,n))}function ui(e){e.__vd_match=!1,e.children.forEach(ui)}function Jt(e,n){const l=String(e.re).match(J5);if(e.__vd_match=!1,!l||l.length<3)return!1;if(new RegExp(l[1].replace(/\$$/,""),l[2]).test(n))return e.children.forEach(c=>Jt(c,n)),e.record.path!=="/"||n==="/"?(e.__vd_match=e.re.test(n),!0):!1;const a=e.record.path.toLowerCase(),r=Yl(a);return!n.startsWith("/")&&(r.includes(n)||a.includes(n))||r.startsWith(n)||a.startsWith(n)||e.record.name&&String(e.record.name).includes(n)?!0:e.children.some(c=>Jt(c,n))}function Y5(e,n){const l={};for(const t in e)n.includes(t)||(l[t]=e[t]);return l}function Z5(e){const n=p5(e.routes,e),l=e.parseQuery||w5,t=e.stringifyQuery||Xr,a=e.history;if(!a)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Dl(),c=Dl(),p=Dl(),i=ze(cn);let u=cn;Ze&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ft.bind(null,b=>""+b),y=ft.bind(null,b5),f=ft.bind(null,Yl);function m(b,ss){let U,es;return Zp(b)?(U=n.getRecordMatcher(b),es=ss):es=b,n.addRoute(es,U)}function v(b){const ss=n.getRecordMatcher(b);ss?n.removeRoute(ss):Es(`Cannot remove non-existent route "${String(b)}"`)}function _(){return n.getRoutes().map(b=>b.record)}function D(b){return!!n.getRecordMatcher(b)}function P(b,ss){if(ss=xs({},ss||i.value),typeof b=="string"){const ps=ht(l,b,ss.path),h=n.resolve({path:ps.path},ss),B=a.createHref(ps.fullPath);return B.startsWith("//")?Es(`Location "${b}" resolved to "${B}". A resolved location cannot start with multiple slashes.`):h.matched.length||Es(`No match found for location with path "${b}"`),xs(ps,h,{params:f(h.params),hash:Yl(ps.hash),redirectedFrom:void 0,href:B})}let U;if("path"in b)"params"in b&&!("name"in b)&&Object.keys(b.params).length&&Es(`Path "${b.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),U=xs({},b,{path:ht(l,b.path,ss.path).path});else{const ps=xs({},b.params);for(const h in ps)ps[h]==null&&delete ps[h];U=xs({},b,{params:y(b.params)}),ss.params=y(ss.params)}const es=n.resolve(U,ss),Bs=b.hash||"";Bs&&!Bs.startsWith("#")&&Es(`A \`hash\` should always start with the character "#". Replace "${Bs}" with "#${Bs}".`),es.params=d(f(es.params));const Cs=Tf(t,xs({},b,{hash:F5(Bs),path:es.path})),ds=a.createHref(Cs);return ds.startsWith("//")?Es(`Location "${b}" resolved to "${ds}". A resolved location cannot start with multiple slashes.`):es.matched.length||Es(`No match found for location with path "${"path"in b?b.path:b}"`),xs({fullPath:Cs,hash:Bs,query:t===Xr?$5(b.query):b.query||{}},es,{redirectedFrom:void 0,href:ds})}function k(b){return typeof b=="string"?ht(l,b,i.value.path):xs({},b)}function S(b,ss){if(u!==b)return fl(8,{from:ss,to:b})}function N(b){return q(b)}function Q(b){return N(xs(k(b),{replace:!0}))}function J(b){const ss=b.matched[b.matched.length-1];if(ss&&ss.redirect){const{redirect:U}=ss;let es=typeof U=="function"?U(b):U;if(typeof es=="string"&&(es=es.includes("?")||es.includes("#")?es=k(es):{path:es},es.params={}),!("path"in es)&&!("name"in es))throw Es(`Invalid redirect found:
${JSON.stringify(es,null,2)}
 when navigating to "${b.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return xs({query:b.query,hash:b.hash,params:"path"in es?{}:b.params},es)}}function q(b,ss){const U=u=P(b),es=i.value,Bs=b.state,Cs=b.force,ds=b.replace===!0,ps=J(U);if(ps)return q(xs(k(ps),{state:typeof ps=="object"?xs({},Bs,ps.state):Bs,force:Cs,replace:ds}),ss||U);const h=U;h.redirectedFrom=ss;let B;return!Cs&&zr(t,es,U)&&(B=fl(16,{to:h,from:es}),Ss(es,es,!0,!1)),(B?Promise.resolve(B):ys(h,es)).catch(E=>qe(E)?qe(E,2)?E:ms(E):X(E,h,es)).then(E=>{if(E){if(qe(E,2))return zr(t,P(E.to),h)&&ss&&(ss._count=ss._count?ss._count+1:1)>10?(Es(`Detected an infinite redirection in a navigation guard when going from "${es.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):q(xs({replace:ds},k(E.to),{state:typeof E.to=="object"?xs({},Bs,E.to.state):Bs,force:Cs}),ss||h)}else E=Ds(h,es,!0,ds,Bs);return vs(h,es,E),E})}function ts(b,ss){const U=S(b,ss);return U?Promise.reject(U):Promise.resolve()}function ys(b,ss){let U;const[es,Bs,Cs]=G5(b,ss);U=mt(es.reverse(),"beforeRouteLeave",b,ss);for(const ps of es)ps.leaveGuards.forEach(h=>{U.push(yn(h,b,ss))});const ds=ts.bind(null,b,ss);return U.push(ds),sl(U).then(()=>{U=[];for(const ps of r.list())U.push(yn(ps,b,ss));return U.push(ds),sl(U)}).then(()=>{U=mt(Bs,"beforeRouteUpdate",b,ss);for(const ps of Bs)ps.updateGuards.forEach(h=>{U.push(yn(h,b,ss))});return U.push(ds),sl(U)}).then(()=>{U=[];for(const ps of b.matched)if(ps.beforeEnter&&!ss.matched.includes(ps))if(ge(ps.beforeEnter))for(const h of ps.beforeEnter)U.push(yn(h,b,ss));else U.push(yn(ps.beforeEnter,b,ss));return U.push(ds),sl(U)}).then(()=>(b.matched.forEach(ps=>ps.enterCallbacks={}),U=mt(Cs,"beforeRouteEnter",b,ss),U.push(ds),sl(U))).then(()=>{U=[];for(const ps of c.list())U.push(yn(ps,b,ss));return U.push(ds),sl(U)}).catch(ps=>qe(ps,8)?ps:Promise.reject(ps))}function vs(b,ss,U){for(const es of p.list())es(b,ss,U)}function Ds(b,ss,U,es,Bs){const Cs=S(b,ss);if(Cs)return Cs;const ds=ss===cn,ps=Ze?history.state:{};U&&(es||ds?a.replace(b.fullPath,xs({scroll:ds&&ps&&ps.scroll},Bs)):a.push(b.fullPath,Bs)),i.value=b,Ss(b,ss,U,ds),ms()}let Rs;function Zs(){Rs||(Rs=a.listen((b,ss,U)=>{if(!an.listening)return;const es=P(b),Bs=J(es);if(Bs){q(xs(Bs,{replace:!0}),es).catch(Tl);return}u=es;const Cs=i.value;Ze&&Uf(Wr(Cs.fullPath,U.delta),lt()),ys(es,Cs).catch(ds=>qe(ds,12)?ds:qe(ds,2)?(q(ds.to,es).then(ps=>{qe(ps,20)&&!U.delta&&U.type===Jl.pop&&a.go(-1,!1)}).catch(Tl),Promise.reject()):(U.delta&&a.go(-U.delta,!1),X(ds,es,Cs))).then(ds=>{ds=ds||Ds(es,Cs,!1),ds&&(U.delta&&!qe(ds,8)?a.go(-U.delta,!1):U.type===Jl.pop&&qe(ds,20)&&a.go(-1,!1)),vs(es,Cs,ds)}).catch(Tl)}))}let Gs=Dl(),$s=Dl(),Ns;function X(b,ss,U){ms(b);const es=$s.list();return es.length?es.forEach(Bs=>Bs(b,ss,U)):(Es("uncaught error during route navigation:"),console.error(b)),Promise.reject(b)}function rs(){return Ns&&i.value!==cn?Promise.resolve():new Promise((b,ss)=>{Gs.add([b,ss])})}function ms(b){return Ns||(Ns=!b,Zs(),Gs.list().forEach(([ss,U])=>b?U(b):ss()),Gs.reset()),b}function Ss(b,ss,U,es){const{scrollBehavior:Bs}=e;if(!Ze||!Bs)return Promise.resolve();const Cs=!U&&Wf(Wr(b.fullPath,0))||(es||!U)&&history.state&&history.state.scroll||null;return Se().then(()=>Bs(b,ss,Cs)).then(ds=>ds&&zf(ds)).catch(ds=>X(ds,b,ss))}const fe=b=>a.go(b);let ee;const ue=new Set,an={currentRoute:i,listening:!0,addRoute:m,removeRoute:v,hasRoute:D,getRoutes:_,resolve:P,options:e,push:N,replace:Q,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:r.add,beforeResolve:c.add,afterEach:p.add,onError:$s.add,isReady:rs,install(b){const ss=this;b.component("RouterLink",L5),b.component("RouterView",R5),b.config.globalProperties.$router=ss,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>C(i)}),Ze&&!ee&&i.value===cn&&(ee=!0,N(a.location).catch(Bs=>{Es("Unexpected error when starting the router:",Bs)}));const U={};for(const Bs in cn)U[Bs]=L(()=>i.value[Bs]);b.provide(ba,ss),b.provide(oi,se(U)),b.provide(Kt,i);const es=b.unmount;ue.add(b),b.unmount=function(){ue.delete(b),ue.size<1&&(u=cn,Rs&&Rs(),Rs=null,i.value=cn,ee=!1,Ns=!1),es()},Ze&&H5(b,ss,n)}};return an}function sl(e){return e.reduce((n,l)=>n.then(()=>l()),Promise.resolve())}function G5(e,n){const l=[],t=[],a=[],r=Math.max(n.matched.length,e.matched.length);for(let c=0;c<r;c++){const p=n.matched[c];p&&(e.matched.find(u=>Dn(u,p))?t.push(p):l.push(p));const i=e.matched[c];i&&(n.matched.find(u=>Dn(u,i))||a.push(i))}return[l,t,a]}const vt=ls(!1),Ml=ls(!1),rl=ls(!1),Q5=ls(!0),Yt=Rd({xs:460,...Od}),In=Ef(),yi=yf(),X5=L(()=>In.height.value-In.width.value/vn>180),di=pf(Ve?document.body:null),yl=Vd(),sh=L(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=yl.value)==null?void 0:e.tagName)||"")||((n=yl.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),eh=L(()=>{var e;return["BUTTON","A"].includes(((e=yl.value)==null?void 0:e.tagName)||"")});Oe("slidev-camera","default");Oe("slidev-mic","default");const Ao=Oe("slidev-scale",0),re=Oe("slidev-show-overview",!1),Bt=Oe("slidev-presenter-cursor",!0),tc=Oe("slidev-show-editor",!1);Oe("slidev-editor-width",Ve?window.innerWidth*.4:100);const fi=zp(re);function ac(e,n,l,t=a=>a){return e*t(.5-n*(.5-l))}function nh(e){return[-e[0],-e[1]]}function xe(e,n){return[e[0]+n[0],e[1]+n[1]]}function Ce(e,n){return[e[0]-n[0],e[1]-n[1]]}function ke(e,n){return[e[0]*n,e[1]*n]}function lh(e,n){return[e[0]/n,e[1]/n]}function El(e){return[e[1],-e[0]]}function rc(e,n){return e[0]*n[0]+e[1]*n[1]}function oh(e,n){return e[0]===n[0]&&e[1]===n[1]}function th(e){return Math.hypot(e[0],e[1])}function ah(e){return e[0]*e[0]+e[1]*e[1]}function cc(e,n){return ah(Ce(e,n))}function hi(e){return lh(e,th(e))}function rh(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function Fl(e,n,l){let t=Math.sin(l),a=Math.cos(l),r=e[0]-n[0],c=e[1]-n[1],p=r*a-c*t,i=r*t+c*a;return[p+n[0],i+n[1]]}function Zt(e,n,l){return xe(e,ke(Ce(n,e),l))}function pc(e,n,l){return xe(e,ke(n,l))}var{min:el,PI:ch}=Math,ic=.275,kl=ch+1e-4;function ph(e,n={}){let{size:l=16,smoothing:t=.5,thinning:a=.5,simulatePressure:r=!0,easing:c=X=>X,start:p={},end:i={},last:u=!1}=n,{cap:d=!0,easing:y=X=>X*(2-X)}=p,{cap:f=!0,easing:m=X=>--X*X*X+1}=i;if(e.length===0||l<=0)return[];let v=e[e.length-1].runningLength,_=p.taper===!1?0:p.taper===!0?Math.max(l,v):p.taper,D=i.taper===!1?0:i.taper===!0?Math.max(l,v):i.taper,P=Math.pow(l*t,2),k=[],S=[],N=e.slice(0,10).reduce((X,rs)=>{let ms=rs.pressure;if(r){let Ss=el(1,rs.distance/l),fe=el(1,1-Ss);ms=el(1,X+(fe-X)*(Ss*ic))}return(X+ms)/2},e[0].pressure),Q=ac(l,a,e[e.length-1].pressure,c),J,q=e[0].vector,ts=e[0].point,ys=ts,vs=ts,Ds=ys,Rs=!1;for(let X=0;X<e.length;X++){let{pressure:rs}=e[X],{point:ms,vector:Ss,distance:fe,runningLength:ee}=e[X];if(X<e.length-1&&v-ee<3)continue;if(a){if(r){let Cs=el(1,fe/l),ds=el(1,1-Cs);rs=el(1,N+(ds-N)*(Cs*ic))}Q=ac(l,a,rs,c)}else Q=l/2;J===void 0&&(J=Q);let ue=ee<_?y(ee/_):1,an=v-ee<D?m((v-ee)/D):1;Q=Math.max(.01,Q*Math.min(ue,an));let b=(X<e.length-1?e[X+1]:e[X]).vector,ss=X<e.length-1?rc(Ss,b):1,U=rc(Ss,q)<0&&!Rs,es=ss!==null&&ss<0;if(U||es){let Cs=ke(El(q),Q);for(let ds=1/13,ps=0;ps<=1;ps+=ds)vs=Fl(Ce(ms,Cs),ms,kl*ps),k.push(vs),Ds=Fl(xe(ms,Cs),ms,kl*-ps),S.push(Ds);ts=vs,ys=Ds,es&&(Rs=!0);continue}if(Rs=!1,X===e.length-1){let Cs=ke(El(Ss),Q);k.push(Ce(ms,Cs)),S.push(xe(ms,Cs));continue}let Bs=ke(El(Zt(b,Ss,ss)),Q);vs=Ce(ms,Bs),(X<=1||cc(ts,vs)>P)&&(k.push(vs),ts=vs),Ds=xe(ms,Bs),(X<=1||cc(ys,Ds)>P)&&(S.push(Ds),ys=Ds),N=rs,q=Ss}let Zs=e[0].point.slice(0,2),Gs=e.length>1?e[e.length-1].point.slice(0,2):xe(e[0].point,[1,1]),$s=[],Ns=[];if(e.length===1){if(!(_||D)||u){let X=pc(Zs,hi(El(Ce(Zs,Gs))),-(J||Q)),rs=[];for(let ms=1/13,Ss=ms;Ss<=1;Ss+=ms)rs.push(Fl(X,Zs,kl*2*Ss));return rs}}else{if(!(_||D&&e.length===1))if(d)for(let rs=1/13,ms=rs;ms<=1;ms+=rs){let Ss=Fl(S[0],Zs,kl*ms);$s.push(Ss)}else{let rs=Ce(k[0],S[0]),ms=ke(rs,.5),Ss=ke(rs,.51);$s.push(Ce(Zs,ms),Ce(Zs,Ss),xe(Zs,Ss),xe(Zs,ms))}let X=El(nh(e[e.length-1].vector));if(D||_&&e.length===1)Ns.push(Gs);else if(f){let rs=pc(Gs,X,Q);for(let ms=1/29,Ss=ms;Ss<1;Ss+=ms)Ns.push(Fl(rs,Gs,kl*3*Ss))}else Ns.push(xe(Gs,ke(X,Q)),xe(Gs,ke(X,Q*.99)),Ce(Gs,ke(X,Q*.99)),Ce(Gs,ke(X,Q)))}return k.concat(Ns,S.reverse(),$s)}function ih(e,n={}){var l;let{streamline:t=.5,size:a=16,last:r=!1}=n;if(e.length===0)return[];let c=.15+(1-t)*.85,p=Array.isArray(e[0])?e:e.map(({x:m,y:v,pressure:_=.5})=>[m,v,_]);if(p.length===2){let m=p[1];p=p.slice(0,-1);for(let v=1;v<5;v++)p.push(Zt(p[0],m,v/4))}p.length===1&&(p=[...p,[...xe(p[0],[1,1]),...p[0].slice(2)]]);let i=[{point:[p[0][0],p[0][1]],pressure:p[0][2]>=0?p[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,y=i[0],f=p.length-1;for(let m=1;m<p.length;m++){let v=r&&m===f?p[m].slice(0,2):Zt(y.point,p[m],c);if(oh(y.point,v))continue;let _=rh(v,y.point);if(d+=_,m<f&&!u){if(d<a)continue;u=!0}y={point:v,pressure:p[m][2]>=0?p[m][2]:.5,vector:hi(Ce(y.point,v)),distance:_,runningLength:d},i.push(y)}return i[0].vector=((l=i[1])==null?void 0:l.vector)||[0,0],i}function uh(e,n={}){return ph(ih(e,n),n)}var yh=()=>({events:{},emit(e,...n){let l=this.events[e]||[];for(let t=0,a=l.length;t<a;t++)l[t](...n)},on(e,n){var l;return(l=this.events[e])!=null&&l.push(n)||(this.events[e]=[n]),()=>{var t;this.events[e]=(t=this.events[e])==null?void 0:t.filter(a=>n!==a)}}});function Oo(e,n){return e-n}function dh(e){return e<0?-1:1}function Lo(e){return[Math.abs(e),dh(e)]}function mi(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var fh=2,Ge=fh,vl=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n;const l=this.drauu.el,t=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*t,y:(e.pageY-a.top)*t,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const r=a.matrixTransform((n=l.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*t,y:r.y*t,pressure:e.pressure}}}createElement(e,n){const l=document.createElementNS("http://www.w3.org/2000/svg",e),t=n?{...this.brush,...n}:this.brush;return l.setAttribute("fill",t.fill??"transparent"),l.setAttribute("stroke",t.color),l.setAttribute("stroke-width",t.size.toString()),l.setAttribute("stroke-linecap","round"),t.dasharray&&l.setAttribute("stroke-dasharray",t.dasharray),l}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(Ge))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},hh=class extends vl{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=uh(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const l=n.reduce((t,[a,r],c,p)=>{const[i,u]=p[(c+1)%p.length];return t.push(a,r,(a+i)/2,(r+u)/2),t},["M",...n[0],"Q"]);return l.push("Z"),l.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},mh=class extends vl{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,l]=Lo(e.x-this.start.x),[t,a]=Lo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,t);n=r,t=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",t);else{const[r,c]=[this.start.x,this.start.x+n*l].sort(Oo),[p,i]=[this.start.y,this.start.y+t*a].sort(Oo);this.attr("cx",(r+c)/2),this.attr("cy",(p+i)/2),this.attr("rx",(c-r)/2),this.attr("ry",(i-p)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function vi(e,n){const l=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",n),t.setAttribute("id",e),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(a),l.appendChild(t),l}var vh=class extends vl{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=mi(),l=document.createElementNS("http://www.w3.org/2000/svg","g");return l.append(vi(n,this.brush.color)),l.append(this.el),this.attr("marker-end",`url(#${n})`),l}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:l}=e;if(this.shiftPressed){const t=e.x-this.start.x,a=e.y-this.start.y;if(a!==0){let r=t/a;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+a*r,l=this.start.y+a):(n=this.start.x+t,l=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-l),this.attr("x2",n),this.attr("y2",l)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",l)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Bh=class extends vl{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,l]=Lo(e.x-this.start.x),[t,a]=Lo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,t);n=r,t=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-t),this.attr("width",n*2),this.attr("height",t*2);else{const[r,c]=[this.start.x,this.start.x+n*l].sort(Oo),[p,i]=[this.start.y,this.start.y+t*a].sort(Oo);this.attr("x",r),this.attr("y",p),this.attr("width",c-r),this.attr("height",i-p)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Ah(e,n){const l=e.x-n.x,t=e.y-n.y;return l*l+t*t}function _h(e,n,l){let t=n.x,a=n.y,r=l.x-t,c=l.y-a;if(r!==0||c!==0){const p=((e.x-t)*r+(e.y-a)*c)/(r*r+c*c);p>1?(t=l.x,a=l.y):p>0&&(t+=r*p,a+=c*p)}return r=e.x-t,c=e.y-a,r*r+c*c}function gh(e,n){let l=e[0];const t=[l];let a;for(let r=1,c=e.length;r<c;r++)a=e[r],Ah(a,l)>n&&(t.push(a),l=a);return l!==a&&a&&t.push(a),t}function Gt(e,n,l,t,a){let r=t,c=0;for(let p=n+1;p<l;p++){const i=_h(e[p],e[n],e[l]);i>r&&(c=p,r=i)}r>t&&(c-n>1&&Gt(e,n,c,t,a),a.push(e[c]),l-c>1&&Gt(e,c,l,t,a))}function Dh(e,n){const l=e.length-1,t=[e[0]];return Gt(e,0,l,n,t),t.push(e[l]),t}function uc(e,n,l=!1){if(e.length<=2)return e;const t=n!==void 0?n*n:1;return e=l?e:gh(e,t),e=Dh(e,t),e}var Ch=class extends vl{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=mi();const n=vi(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=uc(this.points,1,!0),this.count=0),this.attr("d",dc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",dc(uc(this.points,1,!0))),!e.getTotalLength()))}};function Eh(e,n){const l=n.x-e.x,t=n.y-e.y;return{length:Math.sqrt(l**2+t**2),angle:Math.atan2(t,l)}}function yc(e,n,l,t){const a=n||e,r=l||e,c=.2,p=Eh(a,r),i=p.angle+(t?Math.PI:0),u=p.length*c,d=e.x+Math.cos(i)*u,y=e.y+Math.sin(i)*u;return{x:d,y}}function Fh(e,n,l){const t=yc(l[n-1],l[n-2],e),a=yc(e,l[n-1],l[n+1],!0);return`C ${t.x.toFixed(Ge)},${t.y.toFixed(Ge)} ${a.x.toFixed(Ge)},${a.y.toFixed(Ge)} ${e.x.toFixed(Ge)},${e.y.toFixed(Ge)}`}function dc(e){return e.reduce((n,l,t,a)=>t===0?`M ${l.x.toFixed(Ge)},${l.y.toFixed(Ge)}`:`${n} ${Fh(l,t,a)}`,"")}var kh=class extends vl{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(l,t)=>{if(l&&l.length)for(let a=0;a<l.length;a++){const r=l[a];if(r.getTotalLength){const c=r.getTotalLength();for(let p=0;p<this.pathSubFactor;p++){const i=r.getPointAtLength(c*p/this.pathSubFactor),u=r.getPointAtLength(c*(p+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:u.x,y1:i.y,y2:u.y,segment:p,element:t||r})}}else r.children&&n(r.children,r)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const l=this.pathFragments[n],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(l,t)&&(l.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,l)=>!e.includes(l))),e.length>0}lineLineIntersect(e,n){const l=e.x1,t=e.x2,a=n.x1,r=n.x2,c=e.y1,p=e.y2,i=n.y1,u=n.y2,d=(l-t)*(i-u)-(c-p)*(a-r),y=(l*p-c*t)*(a-r)-(l-t)*(a*u-i*r),f=(l*p-c*t)*(i-u)-(c-p)*(a*u-i*r),m=(v,_,D)=>v>=_&&v<=D?!0:v>=D&&v<=_;if(d===0)return!1;{const v={x:y/d,y:f/d};return m(v.x,l,t)&&m(v.y,c,p)&&m(v.x,a,r)&&m(v.y,i,u)}}};function xh(e){return{draw:new Ch(e),stylus:new hh(e),line:new vh(e),rectangle:new Bh(e),ellipse:new mh(e),eraseLine:new kh(e)}}var bh=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=yh(),this._models=xh(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const l=this.resolveSelector(n)||this.el,t=this.eventStart.bind(this),a=this.eventMove.bind(this),r=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);l.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{l.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function wh(e){return new bh(e)}const Qt=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],je=Oe("slidev-drawing-enabled",!1),j6=Oe("slidev-drawing-pinned",!1),$h=ls(!1),Sh=ls(!1),Ph=ls(!1),Zl=ls(!1),Vn=rd(Oe("slidev-drawing-brush",{color:Qt[0],size:4,mode:"stylus"})),fc=ls("stylus"),Bi=L(()=>Ls.drawings.syncAll||Xe.value);let Gl=!1;const xl=L({get(){return fc.value},set(e){fc.value=e,e==="arrow"?(Vn.mode="line",Vn.arrowEnd=!0):(Vn.mode=e,Vn.arrowEnd=!1)}}),Vh=se({brush:Vn,acceptsInputTypes:L(()=>je.value?void 0:["pen"]),coordinateTransform:!1}),ie=ia(wh(Vh));function Oh(){ie.clear(),Bi.value&&Rp(Ys.value,"")}function Ai(){var e;Sh.value=ie.canRedo(),$h.value=ie.canUndo(),Ph.value=!!((e=ie.el)!=null&&e.children.length)}function Lh(e){Gl=!0;const n=Po[e||Ys.value];n!=null?ie.load(n):ie.clear(),Gl=!1}ie.on("changed",()=>{if(Ai(),!Gl){const e=ie.dump(),n=Ys.value;(Po[n]||"")!==e&&Bi.value&&Rp(n,ie.dump())}});Gy(e=>{Gl=!0,e[Ys.value]!=null&&ie.load(e[Ys.value]||""),Gl=!1,Ai()});Se(()=>{Is(Ys,()=>{ie.mounted&&Lh()},{immediate:!0})});ie.on("start",()=>Zl.value=!0);ie.on("end",()=>Zl.value=!1);window.addEventListener("keydown",e=>{if(!je.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let l=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ie.redo():ie.undo():e.code==="Escape"?je.value=!1:e.code==="KeyL"&&n?xl.value="line":e.code==="KeyA"&&n?xl.value="arrow":e.code==="KeyS"&&n?xl.value="stylus":e.code==="KeyR"&&n?xl.value="rectangle":e.code==="KeyE"&&n?xl.value="ellipse":e.code==="KeyC"&&n?Oh():e.code.startsWith("Digit")&&n&&+e.code[5]<=Qt.length?Vn.color=Qt[+e.code[5]-1]:l=!1,l&&(e.preventDefault(),e.stopPropagation())},!1);function Us(...e){return L(()=>e.every(n=>pe(n)))}function he(e){return L(()=>!pe(e))}const hc=Yd(),At=Oe("slidev-color-schema","auto"),Xt=L(()=>Ls.colorSchema!=="auto"),wa=L({get(){return Xt.value?Ls.colorSchema==="dark":At.value==="auto"?hc.value:At.value==="dark"},set(e){Xt.value||(At.value=e===hc.value?"auto":e?"dark":"light")}}),_i=zp(wa);Ve&&Is(wa,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const _o=ls(1),go=L(()=>qs.length-1),Ae=ls(0),$a=ls(0);function Th(){Ae.value>_o.value&&(Ae.value-=1)}function Nh(){Ae.value<go.value&&(Ae.value+=1)}function Mh(){if(Ae.value>_o.value){let e=Ae.value-$a.value;e<_o.value&&(e=_o.value),Ae.value=e}}function Rh(){if(Ae.value<go.value){let e=Ae.value+$a.value;e>go.value&&(e=go.value),Ae.value=e}}function Ih(){const{escape:e,space:n,shift:l,left:t,right:a,up:r,down:c,enter:p,d:i,g:u,o:d}=yi;let y=[{name:"next_space",key:Us(n,he(l)),fn:jn,autoRepeat:!0},{name:"prev_space",key:Us(n,l),fn:Hn,autoRepeat:!0},{name:"next_right",key:Us(a,he(l),he(re)),fn:jn,autoRepeat:!0},{name:"prev_left",key:Us(t,he(l),he(re)),fn:Hn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:jn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Hn,autoRepeat:!0},{name:"next_down",key:Us(c,he(re)),fn:No,autoRepeat:!0},{name:"prev_up",key:Us(r,he(re)),fn:()=>Mo(!1),autoRepeat:!0},{name:"next_shift",key:Us(a,l),fn:No,autoRepeat:!0},{name:"prev_shift",key:Us(t,l),fn:()=>Mo(!1),autoRepeat:!0},{name:"toggle_dark",key:Us(i,he(je)),fn:_i},{name:"toggle_overview",key:Us(d,he(je)),fn:fi},{name:"hide_overview",key:Us(e,he(je)),fn:()=>re.value=!1},{name:"goto",key:Us(u,he(je)),fn:()=>rl.value=!rl.value},{name:"next_overview",key:Us(a,re),fn:Nh},{name:"prev_overview",key:Us(t,re),fn:Th},{name:"up_overview",key:Us(r,re),fn:Mh},{name:"down_overview",key:Us(c,re),fn:Rh},{name:"goto_from_overview",key:Us(p,re),fn:()=>{hl(Ae.value),re.value=!1}}];const f=new Set(y.map(v=>v.name));if(y.filter(v=>v.name&&f.has(v.name)).length===0){const v=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(v),console.warn(v)}return y}const gi=Us(he(sh),he(eh),Q5);function jh(e,n,l=!1){typeof e=="string"&&(e=yi[e]);const t=Us(e,gi);let a=0,r;const c=()=>{if(clearTimeout(r),!t.value){a=0;return}l&&(r=setTimeout(c,Math.max(1e3-a*250,150)),a++),n()};return Is(t,c,{flush:"sync"})}function Hh(e,n){return Pd(e,l=>{gi.value&&(l.repeat||n())})}function zh(){const e=Ih();new Map(e.map(l=>[l.key,l])).forEach(l=>{l.fn&&jh(l.key,l.fn,l.autoRepeat)}),Hh("f",()=>di.toggle())}const Uh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wh=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),qh=[Wh];function Kh(e,n){return A(),G("svg",Uh,qh)}const Jh={name:"carbon-close",render:Kh};function Sa(e){var l,t;const n=(t=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:t.no;return n!=null?`slidev-page-${n}`:""}const Yh=Ms({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;x(w);const l=ls(),t=cf(l),a=L(()=>n.width?n.width:t.width.value),r=L(()=>n.width?n.width/vn:t.height.value);n.width&&ml(()=>{l.value&&(l.value.style.width=`${a.value}px`,l.value.style.height=`${r.value}px`)});const c=L(()=>a.value/r.value),p=L(()=>n.scale?n.scale:c.value<vn?a.value/Bn:r.value*vn/Bn),i=L(()=>({height:`${Ea}px`,width:`${Bn}px`,transform:`translate(-50%, -50%) scale(${p.value})`})),u=L(()=>({"select-none":!Ls.selectable,"slidev-code-line-numbers":Ls.lineNumbers}));return Be(Np,p),(d,y)=>(A(),G("div",{id:"slide-container",ref_key:"root",ref:l,class:js(C(u))},[s("div",{id:"slide-content",style:Xs(C(i))},[ln(d.$slots,"default")],4),ln(d.$slots,"controls")],2))}});const $=(e,n)=>{const l=e.__vccOpts||e;for(const[t,a]of n)l[t]=a;return l},Di=$(Yh,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Pa=Ms({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const l=Ie(e,"clicks",n),t=Ie(e,"clicksElements",n),a=Ie(e,"clicksDisabled",n),r=Ie(e,"clicksOrderMap",n);t.value.length=0,Be(Iy,e.route),Be(jy,e.context),Be(Op,l),Be(Tp,a),Be(Lp,t),Be(Ry,r)},render(){var e,n;return this.$props.is?nt(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),Zh=["innerHTML"],Gh=Ms({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return x(w),(n,l)=>C(Po)[e.page]?(A(),G("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(Po)[e.page]},null,8,Zh)):gs("v-if",!0)}}),Ci=$(Gh,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Qh=Object.freeze(Object.defineProperty({__proto__:null,default:Ci},Symbol.toStringTag,{value:"Module"})),Xh={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},sm=["onClick"],em=Ms({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:n}){const l=e;x(w);const t=Ie(l,"modelValue",n);function a(){t.value=!1}function r(m){hl(m),a()}function c(m){return m===Ae.value}const p=Yt.smaller("xs"),i=Yt.smaller("sm"),u=4*16*2,d=2*16,y=L(()=>p.value?In.width.value-u:i.value?(In.width.value-u-d)/2:300),f=L(()=>Math.floor((In.width.value-u)/(y.value+d)));return ml(()=>{Ae.value=Ys.value,$a.value=f.value}),(m,v)=>{const _=Jh;return A(),G(ks,null,[Pe(s("div",Xh,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Xs(`grid-template-columns: repeat(auto-fit,minmax(${C(y)}px,1fr))`)},[(A(!0),G(ks,null,eo(C(qs).slice(0,-1),(D,P)=>(A(),G("div",{key:D.path,class:"relative"},[s("div",{class:js(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(P+1)}]),style:Xs(C(Fa)),onClick:k=>r(+D.path)},[(A(),V(Di,{key:D.path,width:C(y),"clicks-disabled":!0,class:"pointer-events-none"},{default:g(()=>[F(C(Pa),{is:D==null?void 0:D.component,"clicks-disabled":!0,class:js(C(Sa)(D)),route:D,context:"overview"},null,8,["is","class","route"]),F(Ci,{page:+D.path},null,8,["page"])]),_:2},1032,["width"]))],14,sm),s("div",{class:"absolute top-0 opacity-50",style:Xs(`left: ${C(y)+5}px`)},Js(P+1),5)]))),128))],4)],512),[[Vp,C(t)]]),C(t)?(A(),G("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:a},[F(_)])):gs("v-if",!0)],64)}}});const nm=$(em,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),lm="/vue-3-practices/assets/logo-b72bde5d.png",om={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},tm=Ms({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const l=e;x(w);const t=Ie(l,"modelValue",n);function a(){t.value=!1}return(r,c)=>(A(),V(pp,null,[C(t)?(A(),G("div",om,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=p=>a())}),s("div",{class:js(["m-auto rounded-md bg-main shadow",l.class]),"dark:border":"~ gray-400 opacity-10"},[ln(r.$slots,"default")],2)])):gs("v-if",!0)],1024))}}),am=$(tm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Modal.vue"]]),rm={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},cm=["innerHTML"],pm=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:lm,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),o("dev ")])])],-1),im=Ms({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const l=e;x(w);const t=Ie(l,"modelValue",n),a=L(()=>typeof Ls.info=="string");return(r,c)=>(A(),V(am,{modelValue:C(t),"onUpdate:modelValue":c[0]||(c[0]=p=>Fs(t)?t.value=p:null),class:"px-6 py-4"},{default:g(()=>[s("div",rm,[C(a)?(A(),G("div",{key:0,class:"mb-4",innerHTML:C(Ls).info},null,8,cm)):gs("v-if",!0),pm])]),_:1},8,["modelValue"]))}});const um=$(im,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/InfoDialog.vue"]]),ym=["disabled","onKeydown"],dm=Ms({__name:"Goto",setup(e){x(w);const n=ls(),l=ls(""),t=L(()=>{if(l.value.startsWith("/"))return!!qs.find(c=>c.path===l.value.substring(1));{const c=+l.value;return!isNaN(c)&&c>0&&c<=Li.value}});function a(){t.value&&(l.value.startsWith("/")?hl(l.value.substring(1)):hl(+l.value)),r()}function r(){rl.value=!1}return Is(rl,async c=>{var p,i;c?(await Se(),l.value="",(p=n.value)==null||p.focus()):(i=n.value)==null||i.blur()}),Is(l,c=>{c.match(/^[^0-9/]/)&&(l.value=l.value.substring(1))}),(c,p)=>(A(),G("div",{id:"slidev-goto-dialog",class:js(["fixed right-5 bg-main transform transition-all",C(rl)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Pe(s("input",{ref_key:"input",ref:n,"onUpdate:modelValue":p[0]||(p[0]=i=>l.value=i),type:"text",disabled:!C(rl),class:js(["outline-none bg-transparent",{"text-red-400":!C(t)&&l.value}]),placeholder:"Goto...",onKeydown:[gr(a,["enter"]),gr(r,["escape"])],onBlur:r},null,42,ym),[[ql,l.value]])],2))}}),fm=$(dm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Goto.vue"]]),hm=Ms({__name:"Controls",setup(e){x(w);const n=ze(),l=ze();return(t,a)=>(A(),G(ks,null,[F(nm,{modelValue:C(re),"onUpdate:modelValue":a[0]||(a[0]=r=>Fs(re)?re.value=r:null)},null,8,["modelValue"]),F(fm),C(n)?(A(),V(C(n),{key:0})):gs("v-if",!0),C(l)?(A(),V(C(l),{key:1,modelValue:C(vt),"onUpdate:modelValue":a[1]||(a[1]=r=>Fs(vt)?vt.value=r:null)},null,8,["modelValue"])):gs("v-if",!0),C(Ls).info?(A(),V(um,{key:2,modelValue:C(Ml),"onUpdate:modelValue":a[2]||(a[2]=r=>Fs(Ml)?Ml.value=r:null)},null,8,["modelValue"])):gs("v-if",!0)],64))}}),mm=$(hm,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Controls.vue"]]),vm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bm=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Am=[Bm];function _m(e,n){return A(),G("svg",vm,Am)}const gm={name:"carbon-settings-adjust",render:_m},Dm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cm=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Em=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Fm=[Cm,Em];function km(e,n){return A(),G("svg",Dm,Fm)}const xm={name:"carbon-information",render:km},bm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wm=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),$m=[wm];function Sm(e,n){return A(),G("svg",bm,$m)}const Pm={name:"carbon-download",render:Sm},Vm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Om=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Lm=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Tm=[Om,Lm];function Nm(e,n){return A(),G("svg",Vm,Tm)}const Mm={name:"carbon-user-speaker",render:Nm},Rm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Im=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),jm=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Hm=[Im,jm];function zm(e,n){return A(),G("svg",Rm,Hm)}const Um={name:"carbon-presentation-file",render:zm},Wm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qm=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Km=[qm];function Jm(e,n){return A(),G("svg",Wm,Km)}const Ym={name:"carbon-pen",render:Jm},Zm={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Gm=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Qm=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Xm=[Gm,Qm];function s3(e,n){return A(),G("svg",Zm,Xm)}const e3={name:"ph-cursor-duotone",render:s3},n3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},l3=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),o3=[l3];function t3(e,n){return A(),G("svg",n3,o3)}const Ei={name:"ph-cursor-fill",render:t3},a3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r3=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),c3=[r3];function p3(e,n){return A(),G("svg",a3,c3)}const i3={name:"carbon-sun",render:p3},u3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y3=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),d3=[y3];function f3(e,n){return A(),G("svg",u3,d3)}const h3={name:"carbon-moon",render:f3},m3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v3=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),B3=[v3];function A3(e,n){return A(),G("svg",m3,B3)}const _3={name:"carbon-apps",render:A3},g3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D3=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),C3=[D3];function E3(e,n){return A(),G("svg",g3,C3)}const Fi={name:"carbon-arrow-right",render:E3},F3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k3=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),x3=[k3];function b3(e,n){return A(),G("svg",F3,x3)}const w3={name:"carbon-arrow-left",render:b3},$3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S3=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),P3=[S3];function V3(e,n){return A(),G("svg",$3,P3)}const O3={name:"carbon-maximize",render:V3},L3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T3=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),N3=[T3];function M3(e,n){return A(),G("svg",L3,N3)}const R3={name:"carbon-minimize",render:M3},I3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j3=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),H3=[j3];function z3(e,n){return A(),G("svg",I3,H3)}const U3={name:"carbon-checkmark",render:z3},W3={class:"select-list"},q3={class:"title"},K3={class:"items"},J3=["onClick"],Y3=Ms({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const l=e;x(w);const t=Ie(l,"modelValue",n,{passive:!0});return(a,r)=>{const c=U3;return A(),G("div",W3,[s("div",q3,Js(e.title),1),s("div",K3,[(A(!0),G(ks,null,eo(e.items,p=>(A(),G("div",{key:p.value,class:js(["item",{active:C(t)===p.value}]),onClick:()=>{var i;t.value=p.value,(i=p.onClick)==null||i.call(p)}},[F(c,{class:js(["text-green-500",{"opacity-0":C(t)!==p.value}])},null,8,["class"]),o(" "+Js(p.display||p.value),1)],10,J3))),128))])])}}});const Z3=$(Y3,[["__scopeId","data-v-a5c2ed88"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SelectList.vue"]]),G3={class:"text-sm"},Q3=Ms({__name:"Settings",setup(e){x(w);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(l,t)=>(A(),G("div",G3,[F(Z3,{modelValue:C(Ao),"onUpdate:modelValue":t[0]||(t[0]=a=>Fs(Ao)?Ao.value=a:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),X3=$(Q3,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Settings.vue"]]),sv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},ev=Ms({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const l=e;x(w);const t=Ie(l,"modelValue",n,{passive:!0}),a=ls();return $d(a,()=>{t.value=!1}),(r,c)=>(A(),G("div",{ref_key:"el",ref:a,class:"flex relative"},[s("button",{class:js({disabled:e.disabled}),onClick:c[0]||(c[0]=p=>t.value=!C(t))},[ln(r.$slots,"button",{class:js({disabled:e.disabled})})],2),(A(),V(pp,null,[C(t)?(A(),G("div",sv,[ln(r.$slots,"menu")])):gs("v-if",!0)],1024))],512))}}),nv=$(ev,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/MenuButton.vue"]]),lv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ov={__name:"VerticalDivider",setup(e){return x(w),(n,l)=>(A(),G("div",lv))}},yo=$(ov,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),tv={render(){return[]}},av={class:"icon-btn"},rv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},cv={class:"my-auto"},pv={class:"opacity-50"},iv=Ms({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;x(w);const l=Yt.smaller("md"),{isFullscreen:t,toggle:a}=di,r=L(()=>ea.value?`?password=${ea.value}`:""),c=L(()=>`/presenter/${Ys.value}${r.value}`),p=L(()=>`/${Ys.value}${r.value}`),i=ls(),u=()=>{i.value&&yl.value&&i.value.contains(yl.value)&&yl.value.blur()},d=L(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=ze(),f=ze();return qn(()=>import("./DrawingControls-45958a9e.js"),[]).then(m=>f.value=m.default),(m,v)=>{const _=R3,D=O3,P=w3,k=Fi,S=_3,N=h3,Q=i3,J=Ei,q=e3,ts=Ym,ys=Um,vs=_u("RouterLink"),Ds=Mm,Rs=Pm,Zs=xm,Gs=gm;return A(),G("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[s("div",{class:js(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",C(d)]),onMouseleave:u},[C(Ye)?gs("v-if",!0):(A(),G("button",{key:0,class:"icon-btn",onClick:v[0]||(v[0]=(...$s)=>C(a)&&C(a)(...$s))},[C(t)?(A(),V(_,{key:0})):(A(),V(D,{key:1}))])),s("button",{class:js(["icon-btn",{disabled:!C(d6)}]),onClick:v[1]||(v[1]=(...$s)=>C(Hn)&&C(Hn)(...$s))},[F(P)],2),s("button",{class:js(["icon-btn",{disabled:!C(y6)}]),title:"Next",onClick:v[2]||(v[2]=(...$s)=>C(jn)&&C(jn)(...$s))},[F(k)],2),C(Ye)?gs("v-if",!0):(A(),G("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=$s=>C(fi)())},[F(S)])),C(Xt)?gs("v-if",!0):(A(),G("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=$s=>C(_i)())},[C(wa)?(A(),V(N,{key:0})):(A(),V(Q,{key:1}))])),F(yo),C(Ye)?gs("v-if",!0):(A(),G(ks,{key:3},[!C(Xe)&&!C(l)&&C(y)?(A(),G(ks,{key:0},[F(C(y)),F(yo)],64)):gs("v-if",!0),C(Xe)?(A(),G("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=$s=>Bt.value=!C(Bt))},[C(Bt)?(A(),V(J,{key:0})):(A(),V(q,{key:1,class:"opacity-50"}))])):gs("v-if",!0)],64)),!C(Ls).drawings.presenterOnly&&!C(Ye)?(A(),G(ks,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=$s=>je.value=!C(je))},[F(ts),C(je)?(A(),G("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Xs({background:C(Vn).color})},null,4)):gs("v-if",!0)]),F(yo)],64)):gs("v-if",!0),C(Ye)?gs("v-if",!0):(A(),G(ks,{key:5},[C(Xe)?(A(),V(vs,{key:0,to:C(p),class:"icon-btn",title:"Play Mode"},{default:g(()=>[F(ys)]),_:1},8,["to"])):gs("v-if",!0),C(p6)?(A(),V(vs,{key:1,to:C(c),class:"icon-btn",title:"Presenter Mode"},{default:g(()=>[F(Ds)]),_:1},8,["to"])):gs("v-if",!0),gs("v-if",!0)],64)),(A(),G(ks,{key:6},[C(Ls).download?(A(),G("button",{key:0,class:"icon-btn",onClick:v[8]||(v[8]=(...$s)=>C(Dc)&&C(Dc)(...$s))},[F(Rs)])):gs("v-if",!0)],64)),!C(Xe)&&C(Ls).info&&!C(Ye)?(A(),G("button",{key:7,class:"icon-btn",onClick:v[9]||(v[9]=$s=>Ml.value=!C(Ml))},[F(Zs)])):gs("v-if",!0),!C(Xe)&&!C(Ye)?(A(),V(nv,{key:8},{button:g(()=>[s("button",av,[F(Gs)])]),menu:g(()=>[F(X3)]),_:1})):gs("v-if",!0),C(Ye)?gs("v-if",!0):(A(),V(yo,{key:9})),s("div",rv,[s("div",cv,[o(Js(C(Ys))+" ",1),s("span",pv,"/ "+Js(C(Li)),1)])]),F(C(tv))],34)],512)}}}),uv=$(iv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/NavControls.vue"]]),ki={render(){return[]}},xi={render(){return[]}},yv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},dv=Ms({__name:"PresenterMouse",setup(e){return x(w),(n,l)=>{const t=Ei;return C(dt).cursor?(A(),G("div",yv,[F(t,{class:"absolute",style:Xs({left:`${C(dt).cursor.x}%`,top:`${C(dt).cursor.y}%`})},null,8,["style"])])):gs("v-if",!0)}}}),fv=$(dv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),hv=Ms({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){x(w),Is(ve,()=>{var l,t;(l=ve.value)!=null&&l.meta&&ve.value.meta.preload!==!1&&(ve.value.meta.__preloaded=!0),(t=_t.value)!=null&&t.meta&&_t.value.meta.preload!==!1&&(_t.value.meta.__preloaded=!0)},{immediate:!0});const n=ze();return qn(()=>import("./DrawingLayer-f41925d9.js"),[]).then(l=>n.value=l.default),(l,t)=>(A(),G(ks,null,[gs(" Global Bottom "),F(C(xi)),gs(" Slides "),(A(!0),G(ks,null,eo(C(qs),a=>{var r,c;return A(),G(ks,{key:a.path},[(r=a.meta)!=null&&r.__preloaded||a===C(ve)?Pe((A(),V(C(Pa),{key:0,is:a==null?void 0:a.component,clicks:a===C(ve)?C(Kn):0,"clicks-elements":((c=a.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:js(C(Sa)(a)),route:a,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Vp,a===C(ve)]]):gs("v-if",!0)],64)}),128)),gs(" Global Top "),F(C(ki)),C(n)?(A(),V(C(n),{key:0})):gs("v-if",!0),C(Xe)?gs("v-if",!0):(A(),V(fv,{key:1}))],64))}}),mv=$(hv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/SlidesShow.vue"]]),vv=Ms({__name:"Play",setup(e){x(w),zh();const n=ls();function l(r){var c;tc.value||((c=r.target)==null?void 0:c.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?jn():Hn())}m6(n);const t=L(()=>X5.value||tc.value);ze();const a=ze();return qn(()=>import("./DrawingControls-45958a9e.js"),[]).then(r=>a.value=r.default),(r,c)=>(A(),G(ks,null,[s("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:Xs(C(Fa))},[F(Di,{class:"w-full h-full",style:Xs({background:"var(--slidev-slide-container-background, black)"}),width:C(La)?C(In).width.value:void 0,scale:C(Ao),onPointerdown:l},{default:g(()=>[F(mv,{context:"slide"})]),controls:g(()=>[s("div",{class:js(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[C(t)?"opacity-100 right-0":"opacity-0 p-2",C(Zl)?"pointer-events-none":""]])},[F(uv,{class:"m-auto",persist:C(t)},null,8,["persist"])],2),!C(Ls).drawings.presenterOnly&&!C(Ye)&&C(a)?(A(),V(C(a),{key:0,class:"ml-0"})):gs("v-if",!0)]),_:1},8,["style","width","scale"]),gs("v-if",!0)],4),F(mm)],64))}}),Bv=$(vv,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function bi(e){return typeof e>"u"||e===null}function Av(e){return typeof e=="object"&&e!==null}function _v(e){return Array.isArray(e)?e:bi(e)?[]:[e]}function gv(e,n){var l,t,a,r;if(n)for(r=Object.keys(n),l=0,t=r.length;l<t;l+=1)a=r[l],e[a]=n[a];return e}function Dv(e,n){var l="",t;for(t=0;t<n;t+=1)l+=e;return l}function Cv(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Ev=bi,Fv=Av,kv=_v,xv=Dv,bv=Cv,wv=gv,Va={isNothing:Ev,isObject:Fv,toArray:kv,repeat:xv,isNegativeZero:bv,extend:wv};function wi(e,n){var l="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(l+='in "'+e.mark.name+'" '),l+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(l+=`

`+e.mark.snippet),t+" "+l):t}function Ql(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=wi(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ql.prototype=Object.create(Error.prototype);Ql.prototype.constructor=Ql;Ql.prototype.toString=function(n){return this.name+": "+wi(this,n)};var $n=Ql,$v=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Sv=["scalar","sequence","mapping"];function Pv(e){var n={};return e!==null&&Object.keys(e).forEach(function(l){e[l].forEach(function(t){n[String(t)]=l})}),n}function Vv(e,n){if(n=n||{},Object.keys(n).forEach(function(l){if($v.indexOf(l)===-1)throw new $n('Unknown option "'+l+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(l){return l},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Pv(n.styleAliases||null),Sv.indexOf(this.kind)===-1)throw new $n('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var le=Vv;function mc(e,n){var l=[];return e[n].forEach(function(t){var a=l.length;l.forEach(function(r,c){r.tag===t.tag&&r.kind===t.kind&&r.multi===t.multi&&(a=c)}),l[a]=t}),l}function Ov(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,l;function t(a){a.multi?(e.multi[a.kind].push(a),e.multi.fallback.push(a)):e[a.kind][a.tag]=e.fallback[a.tag]=a}for(n=0,l=arguments.length;n<l;n+=1)arguments[n].forEach(t);return e}function sa(e){return this.extend(e)}sa.prototype.extend=function(n){var l=[],t=[];if(n instanceof le)t.push(n);else if(Array.isArray(n))t=t.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(l=l.concat(n.implicit)),n.explicit&&(t=t.concat(n.explicit));else throw new $n("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(r){if(!(r instanceof le))throw new $n("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new $n("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new $n("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(r){if(!(r instanceof le))throw new $n("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(sa.prototype);return a.implicit=(this.implicit||[]).concat(l),a.explicit=(this.explicit||[]).concat(t),a.compiledImplicit=mc(a,"implicit"),a.compiledExplicit=mc(a,"explicit"),a.compiledTypeMap=Ov(a.compiledImplicit,a.compiledExplicit),a};var Lv=sa,Tv=new le("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Nv=new le("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Mv=new le("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Rv=new Lv({explicit:[Tv,Nv,Mv]});function Iv(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function jv(){return null}function Hv(e){return e===null}var zv=new le("tag:yaml.org,2002:null",{kind:"scalar",resolve:Iv,construct:jv,predicate:Hv,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Uv(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Wv(e){return e==="true"||e==="True"||e==="TRUE"}function qv(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Kv=new le("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Uv,construct:Wv,predicate:qv,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Jv(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Yv(e){return 48<=e&&e<=55}function Zv(e){return 48<=e&&e<=57}function Gv(e){if(e===null)return!1;var n=e.length,l=0,t=!1,a;if(!n)return!1;if(a=e[l],(a==="-"||a==="+")&&(a=e[++l]),a==="0"){if(l+1===n)return!0;if(a=e[++l],a==="b"){for(l++;l<n;l++)if(a=e[l],a!=="_"){if(a!=="0"&&a!=="1")return!1;t=!0}return t&&a!=="_"}if(a==="x"){for(l++;l<n;l++)if(a=e[l],a!=="_"){if(!Jv(e.charCodeAt(l)))return!1;t=!0}return t&&a!=="_"}if(a==="o"){for(l++;l<n;l++)if(a=e[l],a!=="_"){if(!Yv(e.charCodeAt(l)))return!1;t=!0}return t&&a!=="_"}}if(a==="_")return!1;for(;l<n;l++)if(a=e[l],a!=="_"){if(!Zv(e.charCodeAt(l)))return!1;t=!0}return!(!t||a==="_")}function Qv(e){var n=e,l=1,t;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),t=n[0],(t==="-"||t==="+")&&(t==="-"&&(l=-1),n=n.slice(1),t=n[0]),n==="0")return 0;if(t==="0"){if(n[1]==="b")return l*parseInt(n.slice(2),2);if(n[1]==="x")return l*parseInt(n.slice(2),16);if(n[1]==="o")return l*parseInt(n.slice(2),8)}return l*parseInt(n,10)}function Xv(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Va.isNegativeZero(e)}var sB=new le("tag:yaml.org,2002:int",{kind:"scalar",resolve:Gv,construct:Qv,predicate:Xv,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),eB=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function nB(e){return!(e===null||!eB.test(e)||e[e.length-1]==="_")}function lB(e){var n,l;return n=e.replace(/_/g,"").toLowerCase(),l=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?l===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:l*parseFloat(n,10)}var oB=/^[-+]?[0-9]+e/;function tB(e,n){var l;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Va.isNegativeZero(e))return"-0.0";return l=e.toString(10),oB.test(l)?l.replace("e",".e"):l}function aB(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Va.isNegativeZero(e))}var rB=new le("tag:yaml.org,2002:float",{kind:"scalar",resolve:nB,construct:lB,predicate:aB,represent:tB,defaultStyle:"lowercase"}),cB=Rv.extend({implicit:[zv,Kv,sB,rB]}),pB=cB,$i=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Si=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function iB(e){return e===null?!1:$i.exec(e)!==null||Si.exec(e)!==null}function uB(e){var n,l,t,a,r,c,p,i=0,u=null,d,y,f;if(n=$i.exec(e),n===null&&(n=Si.exec(e)),n===null)throw new Error("Date resolve error");if(l=+n[1],t=+n[2]-1,a=+n[3],!n[4])return new Date(Date.UTC(l,t,a));if(r=+n[4],c=+n[5],p=+n[6],n[7]){for(i=n[7].slice(0,3);i.length<3;)i+="0";i=+i}return n[9]&&(d=+n[10],y=+(n[11]||0),u=(d*60+y)*6e4,n[9]==="-"&&(u=-u)),f=new Date(Date.UTC(l,t,a,r,c,p,i)),u&&f.setTime(f.getTime()-u),f}function yB(e){return e.toISOString()}var dB=new le("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:iB,construct:uB,instanceOf:Date,represent:yB});function fB(e){return e==="<<"||e===null}var hB=new le("tag:yaml.org,2002:merge",{kind:"scalar",resolve:fB}),Oa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function mB(e){if(e===null)return!1;var n,l,t=0,a=e.length,r=Oa;for(l=0;l<a;l++)if(n=r.indexOf(e.charAt(l)),!(n>64)){if(n<0)return!1;t+=6}return t%8===0}function vB(e){var n,l,t=e.replace(/[\r\n=]/g,""),a=t.length,r=Oa,c=0,p=[];for(n=0;n<a;n++)n%4===0&&n&&(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)),c=c<<6|r.indexOf(t.charAt(n));return l=a%4*6,l===0?(p.push(c>>16&255),p.push(c>>8&255),p.push(c&255)):l===18?(p.push(c>>10&255),p.push(c>>2&255)):l===12&&p.push(c>>4&255),new Uint8Array(p)}function BB(e){var n="",l=0,t,a,r=e.length,c=Oa;for(t=0;t<r;t++)t%3===0&&t&&(n+=c[l>>18&63],n+=c[l>>12&63],n+=c[l>>6&63],n+=c[l&63]),l=(l<<8)+e[t];return a=r%3,a===0?(n+=c[l>>18&63],n+=c[l>>12&63],n+=c[l>>6&63],n+=c[l&63]):a===2?(n+=c[l>>10&63],n+=c[l>>4&63],n+=c[l<<2&63],n+=c[64]):a===1&&(n+=c[l>>2&63],n+=c[l<<4&63],n+=c[64],n+=c[64]),n}function AB(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var _B=new le("tag:yaml.org,2002:binary",{kind:"scalar",resolve:mB,construct:vB,predicate:AB,represent:BB}),gB=Object.prototype.hasOwnProperty,DB=Object.prototype.toString;function CB(e){if(e===null)return!0;var n=[],l,t,a,r,c,p=e;for(l=0,t=p.length;l<t;l+=1){if(a=p[l],c=!1,DB.call(a)!=="[object Object]")return!1;for(r in a)if(gB.call(a,r))if(!c)c=!0;else return!1;if(!c)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function EB(e){return e!==null?e:[]}var FB=new le("tag:yaml.org,2002:omap",{kind:"sequence",resolve:CB,construct:EB}),kB=Object.prototype.toString;function xB(e){if(e===null)return!0;var n,l,t,a,r,c=e;for(r=new Array(c.length),n=0,l=c.length;n<l;n+=1){if(t=c[n],kB.call(t)!=="[object Object]"||(a=Object.keys(t),a.length!==1))return!1;r[n]=[a[0],t[a[0]]]}return!0}function bB(e){if(e===null)return[];var n,l,t,a,r,c=e;for(r=new Array(c.length),n=0,l=c.length;n<l;n+=1)t=c[n],a=Object.keys(t),r[n]=[a[0],t[a[0]]];return r}var wB=new le("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:xB,construct:bB}),$B=Object.prototype.hasOwnProperty;function SB(e){if(e===null)return!0;var n,l=e;for(n in l)if($B.call(l,n)&&l[n]!==null)return!1;return!0}function PB(e){return e!==null?e:{}}var VB=new le("tag:yaml.org,2002:set",{kind:"mapping",resolve:SB,construct:PB});pB.extend({implicit:[dB,hB],explicit:[_B,FB,wB,VB]});function vc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var OB=new Array(256),LB=new Array(256);for(var nl=0;nl<256;nl++)OB[nl]=vc(nl)?1:0,LB[nl]=vc(nl);function TB(e){return Array.from(new Set(e))}function Bc(...e){let n,l,t;e.length===1?(n=0,t=1,[l]=e):[n,l,t=1]=e;const a=[];let r=n;for(;r<l;)a.push(r),r+=t||1;return a}function Pi(e,n){if(!n||n==="all"||n==="*")return Bc(1,e+1);const l=[];for(const t of n.split(/[,;]/g))if(!t.includes("-"))l.push(+t);else{const[a,r]=t.split("-",2);l.push(...Bc(+a,r?+r+1:e+1))}return TB(l).filter(t=>t<=e).sort((t,a)=>t-a)}function NB(e){const n=L(()=>e.value.path),l=L(()=>qs.length-1),t=L(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),a=L(()=>Ta(t.value)),r=L(()=>qs.find(f=>f.path===`${t.value}`)),c=L(()=>{var f,m,v;return(v=(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:v.id}),p=L(()=>{var f,m;return((m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.layout)||(t.value===1?"cover":"default")}),i=L(()=>qs.find(f=>f.path===`${Math.min(qs.length,t.value+1)}`)),u=L(()=>qs.filter(f=>{var m,v;return(v=(m=f.meta)==null?void 0:m.slide)==null?void 0:v.title}).reduce((f,m)=>(Na(f,m),f),[])),d=L(()=>Ma(u.value,r.value)),y=L(()=>Ra(d.value));return{route:e,path:n,total:l,currentPage:t,currentPath:a,currentRoute:r,currentSlideId:c,currentLayout:p,nextRoute:i,rawTree:u,treeWithActiveStatuses:d,tree:y}}function MB(e,n,l){const t=ls(0);Se(()=>{An.afterEach(async()=>{await Se(),t.value+=1})});const a=L(()=>{var i,u;return t.value,((u=(i=n.value)==null?void 0:i.meta)==null?void 0:u.__clicksElements)||[]}),r=L(()=>{var i,u;return+(((u=(i=n.value)==null?void 0:i.meta)==null?void 0:u.clicks)??a.value.length)}),c=L(()=>l.value<qs.length-1||e.value<r.value),p=L(()=>l.value>1||e.value>0);return{clicks:e,clicksElements:a,clicksTotal:r,hasNext:c,hasPrev:p}}const RB=["id"],IB=Ms({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:n}){const l=e,t=Ie(l,"clicksElements",n),a=L(()=>({height:`${Ea}px`,width:`${Bn}px`})),r=ze();qn(()=>Promise.resolve().then(()=>Qh),void 0).then(u=>r.value=u.default);const c=L(()=>l.clicks),p=MB(c,l.nav.currentRoute,l.nav.currentPage),i=L(()=>`${l.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return Be(w,se({nav:{...l.nav,...p},configs:Ls,themeConfigs:L(()=>Ls.themeConfig)})),(u,d)=>{var y;return A(),G("div",{id:C(i),class:"slide-container",style:Xs(C(a))},[F(C(xi)),F(C(Pa),{is:(y=e.route)==null?void 0:y.component,"clicks-elements":C(t),"onUpdate:clicks-elements":d[0]||(d[0]=f=>Fs(t)?t.value=f:null),clicks:C(c),"clicks-disabled":!1,class:js(C(Sa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),C(r)?(A(),V(C(r),{key:0,page:+e.route.path},null,8,["page"])):gs("v-if",!0),F(C(ki))],12,RB)}}}),Ac=$(IB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),jB=Ms({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const n=e;x(w);const l=se(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),t=L(()=>n.route),a=NB(t);return(c,p)=>(A(),G(ks,null,[F(Ac,{"clicks-elements":l,"onUpdate:clicks-elements":p[0]||(p[0]=i=>l=i),clicks:0,nav:C(a),route:C(t)},null,8,["clicks-elements","nav","route"]),C(Oi)?gs("v-if",!0):(A(!0),G(ks,{key:0},eo(l.length,i=>(A(),V(Ac,{key:i,clicks:i,nav:C(a),route:C(t)},null,8,["clicks","nav","route"]))),128))],64))}}),HB=$(jB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlide.vue"]]),zB={id:"print-content"},UB=Ms({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const n=e;x(w);const l=L(()=>n.width),t=L(()=>n.width/vn),a=L(()=>l.value/t.value),r=L(()=>a.value<vn?l.value/Bn:t.value*vn/Bn);let c=qs.slice(0,-1);We.value.query.range&&(c=Pi(c.length,We.value.query.range).map(u=>c[u-1]));const p=L(()=>({"select-none":!Ls.selectable,"slidev-code-line-numbers":Ls.lineNumbers}));return Be(Np,r),(i,u)=>(A(),G("div",{id:"print-container",class:js(C(p))},[s("div",zB,[(A(!0),G(ks,null,eo(C(c),d=>(A(),V(HB,{key:d.path,route:d},null,8,["route"]))),128))]),ln(i.$slots,"controls")],2))}});const WB=$(UB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintContainer.vue"]]),qB=Ms({__name:"Print",setup(e){x(w);function n(l,{slots:t}){if(t.default)return nt("style",t.default())}return ml(()=>{La?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(l,t)=>(A(),G(ks,null,[F(n,null,{default:g(()=>[o(" @page { size: "+Js(C(Bn))+"px "+Js(C(Ea))+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Xs(C(Fa))},[F(WB,{class:"w-full h-full",style:Xs({background:"var(--slidev-slide-container-background, black)"}),width:C(In).width.value},null,8,["style","width"])],4)],64))}});const KB=$(qB,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Print.vue"]]);const JB={class:"slidev-layout end"},YB={__name:"end",setup(e){return x(w),(n,l)=>(A(),G("div",JB," END "))}},ZB=$(YB,[["__scopeId","data-v-b05edd45"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/end.vue"]]),GB="/vue-3-practices/logo.svg";function _c(e){return e.startsWith("/")?"/vue-3-practices"+e.slice(1):e}function QB(e,n=!1){const l=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),t={background:l?e:void 0,color:e&&!l?"white":void 0,backgroundImage:l?void 0:e?n?`linear-gradient(#0005, #0008), url(${_c(e)})`:`url("${_c(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const XB={class:"my-auto w-full"},sA=Ms({__name:"cover",props:{background:{default:""}},setup(e){const n=e;x(w);const l=L(()=>QB(n.background,!0));return(t,a)=>(A(),G("div",{class:"slidev-layout cover",style:Xs(C(l))},[s("div",XB,[ln(t.$slots,"default")])],4))}}),eA=$(sA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/theme-default/layouts/cover.vue"]]),nA=s("div",{class:"text-center"},[s("img",{src:GB,alt:"Vue",style:{width:"100px"},class:"inline mb-4"}),s("h1",{class:"!text-5xl"},"Vue3 Practices")],-1),lA={__name:"1",setup(e){const n={theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}};return x(w),(l,t)=>(A(),V(eA,W(z(n)),{default:g(()=>[nA]),_:1},16))}},oA=$(lA,[["__file","/@slidev/slides/1.md"]]),tA={class:"slidev-layout default"},aA={__name:"default",setup(e){return x(w),(n,l)=>(A(),G("div",tA,[ln(n.$slots,"default")]))}},K=$(aA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/layouts/default.vue"]]),rA=s("h1",null,"アジェンダ",-1),cA=s("ul",null,[s("li",null,[o("はじめに "),s("ul",null,[s("li",null,"Composition API, 学習環境など")])]),s("li",null,[o("リアクティビティーの探求 "),s("ul",null,[s("li",null,"ref, reactive, toRefs, readonly など")])]),s("li",null,[o("算出プロパティ（computed） "),s("ul",null,[s("li",null,"computed")])]),s("li",null,[o("ウォッチャ（watch） "),s("ul",null,[s("li",null,"watch")])]),s("li",null,[o("テンプレート構文の説明 "),s("ul",null,[s("li",null,"mustache, v-bind, v-on, v-if/v-else/v-else-if, v-show, v-for, v-model など")])]),s("li",null,[o("コンポーネント "),s("ul",null,[s("li",null,"props, emit, slot など")])]),s("li",null,[o("Vue アプリケーション開発に必要な周辺ライブラリ "),s("ul",null,[s("li",null,"throttle-debounce, fetch, Vue Router など")])])],-1),pA={__name:"2",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[rA,cA]),_:1},16))}},iA=$(pA,[["__file","/@slidev/slides/2.md"]]),uA=s("h1",null,"はじめに",-1),yA=s("h2",null,"Vue.js とは？",-1),dA=s("p",null,"Web アプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースの JavaScript フレームワーク。",-1),fA={class:"pt-4 text-sm"},hA={href:"https://ja.vuejs.org/guide/introduction.html"},mA={__name:"3",setup(e){const n={};return x(w),(l,t)=>{const a=Fi;return A(),V(K,W(z(n)),{default:g(()=>[uA,yA,dA,s("div",fA,[s("a",hA,[F(a,{class:"inline"}),o(" 公式サイト ")])])]),_:1},16)}}},vA=$(mA,[["__file","/@slidev/slides/3.md"]]),BA=s("h1",null,"本講座のすすめかた",-1),AA=s("p",null,"どのような形式で進行するのかの確認",-1),_A=s("p",null,"ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。",-1),gA=s("p",null,"適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。",-1),DA={__name:"4",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[BA,AA,_A,gA]),_:1},16))}},CA=$(DA,[["__file","/@slidev/slides/4.md"]]),EA=s("h1",null,"準備",-1),FA=s("p",null,"使用するツールの確認とセットアップ",-1),kA=s("p",null,[o("本講座におけるハンズオン、演習、サンプルの閲覧は "),s("a",{href:"https://stackblitz.com/",target:"_blank",rel:"noopener"},"StackBlitz"),o(" でおこないます。")],-1),xA=s("p",null,"StackBlitz はブラウザ上で動作するオンライン IDE（統合開発環境）です。",-1),bA=s("p",null,"以下をやってみましょう",-1),wA=s("ol",null,[s("li",null,[o("動作環境を"),s("a",{href:"https://developer.stackblitz.com/docs/platform/browser-support/",target:"_blank",rel:"noopener"},"こちら"),o("で確認してブラウザを用意")]),s("li",null,[o("用意したブラウザで "),s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-vue?file=src/App.vue&terminal=dev"),o(" にアクセス")]),s("li",null,[s("code",null,"<template>Hello World!</template>"),o(" と書いてみる")]),s("li",null,[o("右カラムに "),s("code",null,"Hello World!"),o(" と表示されることを確認")])],-1),$A=s("p",null,"講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。",-1),SA={__name:"5",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[EA,FA,kA,xA,bA,wA,$A]),_:1},16))}},PA=$(SA,[["__file","/@slidev/slides/5.md"]]),VA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},OA=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),LA=[OA];function TA(e,n){return A(),G("svg",VA,LA)}const NA={name:"ph-clipboard",render:TA},MA={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},RA=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),IA=[RA];function jA(e,n){return A(),G("svg",MA,IA)}const HA={name:"ph-check-circle",render:jA},zA=["title"],UA=Ms({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;x(w);const l=x(Op),t=x(Lp),a=x(Tp);function r(y=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",v=m.length;for(let _=0;_<y;_++)f.push(m.charAt(Math.floor(Math.random()*v)));return f.join("")}const c=ls(),p=En();Zo(()=>{const y=n.at==null?t==null?void 0:t.value.length:n.at,f=L(()=>a!=null&&a.value?n.ranges.length-1:Math.min(Math.max(0,((l==null?void 0:l.value)||0)-(y||0)),n.ranges.length-1)),m=L(()=>n.ranges[f.value]||"");if(n.ranges.length>=2&&!(a!=null&&a.value)){const v=r(),_=Uy(n.ranges.length-1).map(D=>v+D);t!=null&&t.value&&(t.value.push(..._),Go(()=>_.forEach(D=>zy(t.value,D)),p))}ml(()=>{if(!c.value)return;const _=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const D of _){const P=Array.from(D.querySelectorAll(".line")),k=Pi(P.length,m.value);if(P.forEach((S,N)=>{const Q=k.includes(N+1);S.classList.toggle(Hy,!0),S.classList.toggle("highlighted",Q),S.classList.toggle("dishonored",!Q)}),n.maxHeight){const S=D.querySelector(".line.highlighted");S&&S.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:i,copy:u}=Id();function d(){var f,m;const y=(m=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;y&&u(y)}return(y,f)=>{const m=HA,v=NA;return A(),G("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:Xs({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[ln(y.$slots,"default"),C(Ls).codeCopy?(A(),G("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:C(i)?"Copied":"Copy",onClick:f[0]||(f[0]=_=>d())},[C(i)?(A(),V(m,{key:0,class:"p-2 w-8 h-8"})):(A(),V(v,{key:1,class:"p-2 w-8 h-8"}))],8,zA)):gs("v-if",!0)],4)}}}),us=$(UA,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),WA=s("h1",null,"Vue には 2 つの API があります",-1),qA={class:"flex gap-8"},KA=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),JA=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),YA=s("p",null,"現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。",-1),ZA={__name:"6",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[WA,s("div",qA,[s("div",null,[o(" Options API "),F(a,Z({},{ranges:[""]}),{default:g(()=>[KA]),_:1},16)]),s("div",null,[o(" Composition API "),F(a,Z({},{ranges:[""]}),{default:g(()=>[JA]),_:1},16)])]),YA]),_:1},16)}}},GA=$(ZA,[["__file","/@slidev/slides/6.md"]]),QA="/vue-3-practices/apis.png",XA=s("h1",null,"Composition API のメリット",-1),s9=s("p",null,"Vue の機能ではなく、論理的な関心事でコードをまとめることができる",-1),e9=s("img",{src:QA,class:"h-5/6"},null,-1),n9={__name:"7",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[XA,s9,e9]),_:1},16))}},l9=$(n9,[["__file","/@slidev/slides/7.md"]]),o9=s("h1",null,"Vue には様々なシンタックスシュガー（糖衣構文）があります",-1),t9={class:"flex gap-8"},a9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),r9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),c9=s("p",null,"現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。",-1),p9={__name:"8",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[o9,s("div",t9,[s("div",null,[o(" script "),F(a,Z({},{ranges:[""]}),{default:g(()=>[a9]),_:1},16)]),s("div",null,[o(" script setup "),F(a,Z({},{ranges:[""]}),{default:g(()=>[r9]),_:1},16)])]),c9]),_:1},16)}}},i9=$(p9,[["__file","/@slidev/slides/8.md"]]),u9={class:"prose"},y9={__name:"FirstSample",setup(e){x(w);const n=ls(0);function l(){n.value+=1}return(t,a)=>(A(),G("div",u9,[o(Js(n.value)+" ",1),s("button",{onClick:l},"+")]))}},d9=$(y9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/FirstSample.vue"]]),f9=s("h1",null,"まずは書いてみる",-1),h9={class:"flex gap-8"},m9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),v9={__name:"9",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=d9;return A(),V(K,W(z(n)),{default:g(()=>[f9,s("div",h9,[F(a,Z({},{ranges:[""]}),{default:g(()=>[m9]),_:1},16),s("div",null,[o(" 動作サンプル "),F(r)])])]),_:1},16)}}},B9=$(v9,[["__file","/@slidev/slides/9.md"]]),A9=s("h1",null,"リアクティビティーの探求",-1),_9={class:"flex gap-4"},g9=s("div",null,[s("video",{controls:"",loop:"",style:{height:"30vh"},src:"https://v3.ja.vuejs.org/images/reactivity-spreadsheet.mp4"}),s("p",null,[s("a",{href:"https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity"},"参考")])],-1),D9=s("p",null,"表計算ソフトと同じ手順をコードにすると",-1),C9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 5のまま（期待は6）")])])])],-1),E9={__name:"10",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[A9,s("div",_9,[g9,s("div",null,[D9,F(a,Z({},{ranges:[""]}),{default:g(()=>[C9]),_:1},16)])])]),_:1},16)}}},F9=$(E9,[["__file","/@slidev/slides/10.md"]]),k9=s("h1",null,"リアクティビティーの探求",-1),x9={class:"flex gap-4"},b9=s("div",null,[s("p",null,"表計算ソフトと同じことをおこなうには"),s("ol",null,[s("li",null,"値が読み込まれたときに追跡する。 例: val1 + val2 は val1 と val2 の両方を読み込む。"),s("li",null,"値の変更を検知する。 例: val1 = 3 と入れるとき。"),s("li",null,"最初に値を読み込んだコードを再実行する。 例: sum = val1 + val2 を再度実行して、 sum の値を更新する。")]),s("p",null,"Vue には 1. 2. 3. のためのしくみがある")],-1),w9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"val1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// 1.")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sum"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// 3.")])])])],-1),$9={__name:"11",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[k9,s("div",x9,[b9,s("div",null,[F(a,Z({},{ranges:[""]}),{default:g(()=>[w9]),_:1},16)])])]),_:1},16)}}},S9=$($9,[["__file","/@slidev/slides/11.md"]]),P9={__name:"ReactiveSample",setup(e){x(w);const n=ls(2),l=ls(3),t=L(()=>n.value+l.value);return(a,r)=>(A(),G("div",null,[s("p",null,[o(" val1: "),Pe(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":r[0]||(r[0]=c=>n.value=c)},null,512),[[ql,n.value]])]),s("p",null,[o(" val2: "),Pe(s("input",{class:"text-black p-1",type:"number","onUpdate:modelValue":r[1]||(r[1]=c=>l.value=c)},null,512),[[ql,l.value]])]),s("p",null,"sum: "+Js(C(t)),1)]))}},V9=$(P9,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ReactiveSample.vue"]]),O9=s("h1",null,"リアクティビティーの探求（ref によるリアクティブな値の参照）",-1),L9=s("p",null,[s("code",null,"ref"),o(" を使った値を操作する場合、"),s("code",null,"setup"),o(" 関数内では "),s("code",null,"value"),o(" プロパティにアクセスする。 "),s("code",null,"template"),o(" 内では変数（定数）そのものを参照するだけで値を得られる。")],-1),T9={class:"flex gap-8"},N9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),M9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),R9={__name:"12",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=V9;return A(),V(K,W(z(n)),{default:g(()=>[O9,L9,s("div",T9,[F(a,Z({},{ranges:[""]}),{default:g(()=>[N9]),_:1},16),F(a,Z({},{ranges:[""]}),{default:g(()=>[M9]),_:1},16),F(r)])]),_:1},16)}}},I9=$(R9,[["__file","/@slidev/slides/12.md"]]),j9=s("h1",null,"リアクティビティーの探求（リアクティブな値をオブジェクトにまとめる）",-1),H9=s("p",null,[o("リアクティブにしたいデータがオブジェクトの場合、"),s("code",null,"reactive"),o(" を使う")],-1),z9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),U9={__name:"13",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[j9,H9,F(a,Z({},{ranges:[""]}),{default:g(()=>[z9]),_:1},16)]),_:1},16)}}},W9=$(U9,[["__file","/@slidev/slides/13.md"]]),q9=s("h1",null,"リアクティビティーの探求（オブジェクトにまとめたリアクティブな値を取り出す）",-1),K9=s("p",null,[o("前項の "),s("code",null,"reactive"),o(" だと、分割代入しても値が取り出せない。Vue では "),s("code",null,"toRefs"),o(" を使うことで可能になる。")],-1),J9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Y9={__name:"14",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[q9,K9,F(a,Z({},{ranges:[""]}),{default:g(()=>[J9]),_:1},16)]),_:1},16)}}},Z9=$(Y9,[["__file","/@slidev/slides/14.md"]]),G9=s("h1",null,"リアクティビティーの探求（リアクティブな値を読み込み専用にする）",-1),Q9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),X9={__name:"15",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[G9,F(a,Z({},{ranges:[""]}),{default:g(()=>[Q9]),_:1},16)]),_:1},16)}}},s_=$(X9,[["__file","/@slidev/slides/15.md"]]),e_=s("h1",null,"算出プロパティ（computed）",-1),n_=s("p",null,[o("あるリアクティブな値を元に計算結果を返したい場合、"),s("code",null,"computed"),o(" 関数を利用する")],-1),l_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),o_={__name:"16",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[e_,n_,F(a,Z({},{ranges:[""]}),{default:g(()=>[l_]),_:1},16)]),_:1},16)}}},t_=$(o_,[["__file","/@slidev/slides/16.md"]]),a_=s("h1",null,"算出プロパティ（computed）",-1),r_=s("p",null,[s("code",null,"get"),o(),s("code",null,"set"),o(" 関数を用意することで書込み可能なオブジェクトを作成することができる")],-1),c_={class:"h-sm overflow-y-auto"},p_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),i_={__name:"17",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[a_,r_,s("div",c_,[F(a,Z({},{ranges:[""]}),{default:g(()=>[p_]),_:1},16)])]),_:1},16)}}},u_=$(i_,[["__file","/@slidev/slides/17.md"]]),y_={inject:{$slidev:{from:w}},setup(){const e=()=>Math.random(),n=L(()=>Math.random());return{randomMethods:e,randomComputed:n}}},d_=s("p",null,"関数呼び出しの場合",-1),f_={class:"use-methods"},h_=s("p",null,"computedを使った場合",-1),m_={class:"use-computed"};function v_(e,n,l,t,a,r){return A(),G(ks,null,[d_,s("ol",f_,[s("li",null,Js(t.randomMethods()),1),s("li",null,Js(t.randomMethods()),1),s("li",null,Js(t.randomMethods()),1)]),h_,s("ol",m_,[s("li",null,Js(t.randomComputed),1),s("li",null,Js(t.randomComputed),1),s("li",null,Js(t.randomComputed),1)])],64)}const B_=$(y_,[["render",v_],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/ComputedMethods.vue"]]),A_=s("h1",null,"computed と関数呼び出しの違い",-1),__=s("p",null,[o("関数呼び出しは都度呼び出される毎に実行するのに対し、"),s("code",null,"computed"),o(" 内で参照しているリアクティブな値が変更されない限り、"),s("code",null,"computed"),o(" は一度キャッシュされた結果を返す。 うまく使い分けるとパフォーマンスの向上に役立てる。")],-1),g_={class:"flex gap-4"},D_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),C_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),E_={__name:"18",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=B_;return A(),V(K,W(z(n)),{default:g(()=>[A_,__,s("div",g_,[F(a,Z({},{ranges:[""]}),{default:g(()=>[D_]),_:1},16),F(a,Z({},{ranges:[""]}),{default:g(()=>[C_]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},F_=$(E_,[["__file","/@slidev/slides/18.md"]]),k_=s("h1",null,"ウォッチャ（watch）",-1),x_=s("p",null,"特定のデータを監視し、変更があったときに処理を行える、引数として、新しい値とその前の値を取得できる。",-1),b_={class:"h-sm overflow-y-auto"},w_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),$_={__name:"19",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[k_,x_,s("div",b_,[F(a,Z({},{ranges:[""]}),{default:g(()=>[w_]),_:1},16)])]),_:1},16)}}},S_=$($_,[["__file","/@slidev/slides/19.md"]]),P_=s("h1",null,"ウォッチャ（watch）",-1),V_=s("p",null,"配列を監視する場合、複数のデータソースを同時に監視できる",-1),O_={class:"h-sm overflow-y-auto"},L_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),T_={__name:"20",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[P_,V_,s("div",O_,[F(a,Z({},{ranges:[""]}),{default:g(()=>[L_]),_:1},16)])]),_:1},16)}}},N_=$(T_,[["__file","/@slidev/slides/20.md"]]),M_=s("h1",null,"テンプレート構文",-1),R_=s("ul",null,[s("li",null,"展開"),s("li",null,"ディレクティブ"),s("li",null,"バインディング"),s("li",null,"イベントハンドリング"),s("li",null,"条件付きレンダリング"),s("li",null,"リストレンダリング"),s("li",null,"フォーム入力バインディング")],-1),I_={__name:"21",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[M_,R_]),_:1},16))}},j_=$(I_,[["__file","/@slidev/slides/21.md"]]),H_=s("h1",null,"展開",-1),z_=s("p",null,"Mustache 構文でテキスト展開できる。JavaScript 式を使用することもできる",-1),U_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),W_=s("p",null,"結果",-1),q_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"Message: Hello!")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"Message: Hello!")])])])],-1),K_={__name:"22",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[H_,z_,F(a,Z({},{ranges:[""]}),{default:g(()=>[U_]),_:1},16),W_,q_]),_:1},16)}}},J_=$(K_,[["__file","/@slidev/slides/22.md"]]),Y_={__name:"CounterSample",setup(e){x(w);const n=ls(10);return setInterval(()=>{n.value+=1},1e3),(l,t)=>(A(),G("div",null,"Counter: "+Js(n.value),1))}},Z_=$(Y_,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/CounterSample.vue"]]),G_=s("h1",null,"展開（リアクティブな値を使うと）",-1),Q_=s("p",{class:"text-sm"}," counterを1秒ごとに増やしていく ",-1),X_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),s1=s("p",null,"結果",-1),e1={__name:"23",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=Z_;return A(),V(K,W(z(n)),{default:g(()=>[G_,Q_,F(a,Z({},{ranges:[""]}),{default:g(()=>[X_]),_:1},16),s1,s("div",null,[F(r)])]),_:1},16)}}},n1=$(e1,[["__file","/@slidev/slides/23.md"]]),l1=s("h1",null,"ディレクティブ",-1),o1=s("ul",null,[s("li",null,"ディレクティブは Vue によって提供される特別な属性"),s("li",null,"v- から始まる"),s("li",null,[o("特定のディレクティブ（v-bind と v-on）は省略記法がある（例："),s("code",null,":href"),o(),s("code",null,"@click"),o("）")]),s("li",null,[o("特定のディレクティブは引数を渡すことができる（例："),s("code",null,"v-on:click"),o("）")])],-1),t1=s("p",null,"ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい",-1),a1={__name:"24",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[l1,o1,t1]),_:1},16))}},r1=$(a1,[["__file","/@slidev/slides/24.md"]]),c1=s("h1",null,"バインディング",-1),p1=s("p",null,[o("「展開」と同じようにリアクティブな値を HTML 属性に反映させる場合、 "),s("code",null,"v-bind"),o(" ディレクティブを使う")],-1),i1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),u1=s("p",null,"省略するとこのように書ける",-1),y1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"url"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," Vue.js公式サイト "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"url"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," Vue.js公式サイト "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),d1={__name:"25",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[c1,p1,s("div",null,[F(a,Z({},{ranges:[""]}),{default:g(()=>[i1]),_:1},16),u1]),F(a,Z({},{ranges:[""]}),{default:g(()=>[y1]),_:1},16)]),_:1},16)}}},f1=$(d1,[["__file","/@slidev/slides/25.md"]]),h1=s("h1",null,"バインディング（クラスとスタイル）",-1),m1=s("p",null,"クラス属性とスタイル属性のバインディングにはオブジェクト構文と配列構文がある",-1),v1={class:"flex gap-6"},B1=s("p",{class:"text-xs"},"オブジェクト構文",-1),A1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"style"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),_1=s("p",{class:"text-xs"},"配列構文はこのように書ける",-1),g1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),D1=s("p",{class:"text-xs"},"組み合わせることもできる",-1),C1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":class"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"[red, { red }]"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":class"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"[red, { red }]"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),E1=s("p",{class:"text-xs"},"スタイル属性にもオブジェクト構文と配列構文がある",-1),F1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},":style"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},`"{ color: 'red' }"`),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello World!"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"span"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},":style"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},`"{ color: 'red' }"`),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello World!"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"span"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),k1={__name:"26",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[h1,m1,s("div",v1,[s("div",null,[B1,F(a,Z({},{ranges:[""]}),{default:g(()=>[A1]),_:1},16)]),s("div",null,[_1,F(a,Z({},{ranges:[""]}),{default:g(()=>[g1]),_:1},16),D1,F(a,Z({},{ranges:[""]}),{default:g(()=>[C1]),_:1},16),E1,F(a,Z({},{ranges:[""]}),{default:g(()=>[F1]),_:1},16)])])]),_:1},16)}}},x1=$(k1,[["__file","/@slidev/slides/26.md"]]),b1=s("h1",null,"イベントハンドリング",-1),w1=s("p",null,[s("code",null,"v-on"),o(" ディレクティブは HTML 要素などの"),s("a",{href:"https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Events",target:"_blank",rel:"noopener"},"イベント"),o("操作に使われる。"),s("code",null,":"),o("の後の引数でイベントの種類を指定できる")],-1),$1={class:"h-60 mb-6 overflow-y-auto"},S1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),P1=s("p",null,"省略するとこのようにかける",-1),V1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"@click"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"counter += 1"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Add 1"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"button"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"@click"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"counter += 1"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Add 1"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"button"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),O1={__name:"27",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[b1,w1,s("div",$1,[F(a,Z({},{ranges:[""]}),{default:g(()=>[S1]),_:1},16)]),P1,F(a,Z({},{ranges:[""]}),{default:g(()=>[V1]),_:1},16)]),_:1},16)}}},L1=$(O1,[["__file","/@slidev/slides/27.md"]]),T1=s("h1",null,"イベントハンドリング（関数名を属性値として使う）",-1),N1=s("p",null,"関数を渡すと複雑な処理が書きやすい",-1),M1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),R1={__name:"28",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[T1,N1,F(a,Z({},{ranges:[""]}),{default:g(()=>[M1]),_:1},16)]),_:1},16)}}},I1=$(R1,[["__file","/@slidev/slides/28.md"]]);let j1=e=>crypto.getRandomValues(new Uint8Array(e)),H1=(e,n,l)=>{let t=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*t*n/e.length);return(r=n)=>{let c="";for(;;){let p=l(a),i=a;for(;i--;)if(c+=e[p[i]&t]||"",c.length===r)return c}}},z1=(e,n=21)=>H1(e,n,j1);const U1=["width","height"],W1=["id"],q1=["fill"],K1=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],J1=Ms({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(e){x(w);const l=z1("abcedfghijklmn",10)();return(t,a)=>(A(),G("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[s("defs",null,[s("marker",{id:C(l),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,q1)],8,W1)]),s("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${C(l)})`},null,8,K1)],8,U1))}}),ot=$(J1,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/builtin/Arrow.vue"]]),Y1=s("h1",null,"条件付きレンダリング",-1),Z1=s("p",null,[s("code",null,"v-if"),o(" あるいは "),s("code",null,"v-show"),o(" によって条件に応じてレンダリングする範囲を変更することができる。 "),s("code",null,"v-show"),o(" は見た目上非表示にするが "),s("code",null,"v-if"),o(" は DOM 要素も取り除く。")],-1),G1=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Q1={__name:"29",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=ot,c=Qo("click");return A(),V(K,W(z(n)),{default:g(()=>[Y1,Z1,F(a,Z({},{ranges:["all","3","8","all"]}),{default:g(()=>[G1]),_:1},16),Pe(F(r,{x1:"350",y1:"370",x2:"190",y2:"310",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,2]])]),_:1},16)}}},X1=$(Q1,[["__file","/@slidev/slides/29.md"]]),sg=s("h1",null,"条件付きレンダリング（v-if と v-show の使い分け）",-1),eg=s("div",{class:"mb-6"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}}),s("th",{style:{"text-align":"left"}},"v-if"),s("th",{style:{"text-align":"left"}},"v-show")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},"初期コスト"),s("td",{style:{"text-align":"left"}},"低い"),s("td",{style:{"text-align":"left"}},"高い")]),s("tr",null,[s("td",{style:{"text-align":"left"}},"切り替えコスト"),s("td",{style:{"text-align":"left"}},"高い"),s("td",{style:{"text-align":"left"}},"低い")])])])],-1),ng=s("ul",null,[s("li",null,[o("コンポーネントをマウントしてからあまり変化しないケースであれば "),s("code",null,"v-if"),o("を使う")]),s("li",null,[o("コンポーネントをマウントしてから頻繁に変化するケースであれば "),s("code",null,"v-show"),o("を使う")])],-1),lg={__name:"30",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[sg,eg,ng]),_:1},16))}},og=$(lg,[["__file","/@slidev/slides/30.md"]]),tg=s("h1",null,"条件付きレンダリング",-1),ag=s("p",null,[s("code",null,"v-if v-else v-else-if"),o(" でレンダリングの条件分岐ができる。 "),s("code",null,"template"),o(" 要素に対して使うことでグルーピングすることもできる。")],-1),rg={class:"flex gap-4"},cg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),pg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),ig={__name:"31",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[tg,ag,s("div",rg,[F(a,Z({},{ranges:[""]}),{default:g(()=>[cg]),_:1},16),F(a,Z({},{ranges:[""]}),{default:g(()=>[pg]),_:1},16)])]),_:1},16)}}},ug=$(ig,[["__file","/@slidev/slides/31.md"]]),yg=s("h1",null,"リストレンダリング",-1),dg=s("p",null,"配列あるいはオブジェクトをもとに反復した要素の表示ができる。",-1),fg={class:"flex gap-8"},hg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),mg=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),vg={__name:"32",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[yg,dg,s("div",fg,[F(a,Z({},{ranges:[""]}),{default:g(()=>[hg]),_:1},16),mg])]),_:1},16)}}},Bg=$(vg,[["__file","/@slidev/slides/32.md"]]),Ag=s("h1",null,[o("リストレンダリング（"),s("code",null,"key"),o(" 属性の付与）")],-1),_g=s("p",null,[o("要素の再利用と並び替えを考慮する場合、一意な値を "),s("code",null,"key"),o(" 属性に渡す必要がある。")],-1),gg={class:"flex gap-8"},Dg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Cg=s("div",{class:"flex-shrink"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")])],-1),Eg={__name:"33",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[Ag,_g,s("div",gg,[F(a,Z({},{ranges:[""]}),{default:g(()=>[Dg]),_:1},16),Cg])]),_:1},16)}}},Fg=$(Eg,[["__file","/@slidev/slides/33.md"]]),kg=s("h1",null,[o("リストレンダリング（添字による "),s("code",null,"key"),o(" 属性の付与）")],-1),xg=s("p",null,"識別子を用意していない場合、添字が得られるので代用すると便利。",-1),bg={class:"flex gap-8"},wg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),$g=s("div",{class:"flex-shrink w-110"},[s("p",null,"結果"),s("ol",null,[s("li",null,"Learn JavaScript"),s("li",null,"Learn Vue"),s("li",null,"Build something awesome")]),s("p",null,"ただし、並び替えることが想定される場合意図しない挙動になる（どこにリストアイテムが移動したのか検知できない）ので注意")],-1),Sg={__name:"34",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[kg,xg,s("div",bg,[F(a,Z({},{ranges:["all","4"]}),{default:g(()=>[wg]),_:1},16),$g])]),_:1},16)}}},Pg=$(Sg,[["__file","/@slidev/slides/34.md"]]),Vg={id:"two-way-binding"},Og={__name:"TwoWayBindingSample",setup(e){x(w);const n=ls("Hello Vue!");return(l,t)=>(A(),G("div",Vg,[s("p",null,Js(n.value),1),Pe(s("input",{class:"text-black p-1","onUpdate:modelValue":t[0]||(t[0]=a=>n.value=a)},null,512),[[ql,n.value]])]))}},Lg=$(Og,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwoWayBindingSample.vue"]]),Tg=s("h1",null,"フォーム入力バインディング",-1),Ng=s("p",null,[s("code",null,"v-model"),o(" によって form の input 要素や textarea 要素、select 要素の入力イベントに応じてデータを更新できるようになる。")],-1),Mg={class:"flex gap-8"},Rg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Ig={__name:"35",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=Lg;return A(),V(K,W(z(n)),{default:g(()=>[Tg,Ng,s("div",Mg,[F(a,Z({},{ranges:[""]}),{default:g(()=>[Rg]),_:1},16),s("div",null,[F(r)])])]),_:1},16)}}},jg=$(Ig,[["__file","/@slidev/slides/35.md"]]),Hg=s("h1",null,"コンポーネント",-1),zg=s("ul",null,[s("li",null,"コンポーネントの基本と構成"),s("li",null,"プロパティを用いた子コンポーネントへのデータの受け渡し"),s("li",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し"),s("li",null,"v-model を用いた親子間コンポーネントのデータの受け渡し"),s("li",null,"v-model を用いない親子間コンポーネントのデータの受け渡し"),s("li",null,"コンポーネントで v-model を使う"),s("li",null,"スロットによるコンテンツ配信")],-1),Ug={__name:"36",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[Hg,zg]),_:1},16))}},Wg=$(Ug,[["__file","/@slidev/slides/36.md"]]),qg="/vue-3-practices/components.png",Kg=s("h1",null,"コンポーネントの基本と構成",-1),Jg=s("p",null,"親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）",-1),Yg=s("img",{src:qg,alt:"コンポーネントの基本と構成",style:{height:"80%",width:"auto"}},null,-1),Zg={__name:"37",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[Kg,Jg,Yg]),_:1},16))}},Gg=$(Zg,[["__file","/@slidev/slides/37.md"]]),Qg=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),Xg=s("p",null,"親コンポーネントから子コンポーネントに 文字列 を渡してみる",-1),sD={class:"flex gap-8"},eD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),nD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),lD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),oD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),tD={__name:"38",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[Qg,Xg,s("div",sD,[s("div",null,[eD,F(a,Z({},{ranges:[""]}),{default:g(()=>[nD]),_:1},16)]),s("div",null,[lD,F(a,Z({},{ranges:[""]}),{default:g(()=>[oD]),_:1},16)])])]),_:1},16)}}},aD=$(tD,[["__file","/@slidev/slides/38.md"]]),rD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),cD=s("p",null,"数値を渡す場合、親から v-bind （:で省略可）をつけて渡す必要がある",-1),pD={class:"flex gap-8"},iD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),uD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),yD=s("p",{class:"text-xs"},"静的な値ですが、これが文字列ではなく JavaScript の式だとVueに伝えるためにはv-bind を使う必要があります",-1),dD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),fD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),hD={__name:"39",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=ot,c=Qo("click");return A(),V(K,W(z(n)),{default:g(()=>[rD,cD,s("div",pD,[s("div",null,[iD,F(a,Z({},{ranges:["all","2","all"]}),{default:g(()=>[uD]),_:1},16),yD]),s("div",null,[dD,F(a,Z({},{ranges:[""]}),{default:g(()=>[fD]),_:1},16)])]),Pe(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},mD=$(hD,[["__file","/@slidev/slides/39.md"]]),vD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),BD=s("p",null,"真偽値（true / false）を渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),AD={class:"flex gap-8"},_D=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),gD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),DD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),CD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),ED={__name:"40",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=ot,c=Qo("click");return A(),V(K,W(z(n)),{default:g(()=>[vD,BD,s("div",AD,[s("div",null,[_D,F(a,Z({},{ranges:["all","2","all"]}),{default:g(()=>[gD]),_:1},16)]),s("div",null,[DD,F(a,Z({},{ranges:[""]}),{default:g(()=>[CD]),_:1},16)])]),Pe(F(r,{x1:"160",y1:"180",x2:"185",y2:"215",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},FD=$(ED,[["__file","/@slidev/slides/40.md"]]),kD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),xD=s("p",null,"props はデフォルト値を設定することもできる",-1),bD={class:"flex gap-8"},wD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),$D=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),SD=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),PD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),VD={__name:"41",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[kD,xD,s("div",bD,[s("div",null,[wD,F(a,Z({},{ranges:[""]}),{default:g(()=>[$D]),_:1},16)]),s("div",null,[SD,F(a,Z({},{ranges:["all","9-12","all"]}),{default:g(()=>[PD]),_:1},16)])])]),_:1},16)}}},OD=$(VD,[["__file","/@slidev/slides/41.md"]]),LD=s("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),TD=s("p",null,"配列、オブジェクトを渡す場合も、親から v-bind （:で省略可）をつけて渡す必要がある",-1),ND={class:"flex gap-8"},MD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),RD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),ID=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),jD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),HD={__name:"42",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[LD,TD,s("div",ND,[s("div",null,[MD,F(a,Z({},{ranges:[""]}),{default:g(()=>[RD]),_:1},16)]),s("div",null,[ID,F(a,Z({},{ranges:[""]}),{default:g(()=>[jD]),_:1},16)])])]),_:1},16)}}},zD=$(HD,[["__file","/@slidev/slides/42.md"]]),UD={__name:"EmitChild",emits:["child-clicked"],setup(e,{emit:n}){x(w);function l(){n("child-clicked","Hello!")}return(t,a)=>(A(),G("button",{onClick:l},"emit !"))}},WD=$(UD,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitChild.vue"]]),qD={__name:"EmitParent",setup(e){x(w);function n(l){alert(l)}return(l,t)=>(A(),V(WD,{onChildClicked:n}))}},KD=$(qD,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitParent.vue"]]),JD=s("h1",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し",-1),YD=s("p",null,"子コンポーネントでイベントを発火させることによって可能",-1),ZD={class:"flex gap-8"},GD={class:"flex-shrink"},QD=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),XD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),sC={class:"flex-shrink"},eC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),nC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),lC={class:"flex-shrink-0"},oC=s("p",{class:"text-xs"},"実行サンプル",-1),tC={__name:"43",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=KD;return A(),V(K,W(z(n)),{default:g(()=>[JD,YD,s("div",ZD,[s("div",GD,[QD,F(a,Z({},{ranges:[""]}),{default:g(()=>[XD]),_:1},16)]),s("div",sC,[eC,F(a,Z({},{ranges:[""]}),{default:g(()=>[nC]),_:1},16)]),s("div",lC,[oC,F(r)])])]),_:1},16)}}},aC=$(tC,[["__file","/@slidev/slides/43.md"]]),rC={__name:"TwowayChild",props:{modelValue:String},emits:["update:modelValue"],setup(e,{emit:n}){const l=e;x(w);const t=L({get:()=>l.modelValue,set:a=>{n("update:modelValue",a)}});return(a,r)=>Pe((A(),G("input",{"onUpdate:modelValue":r[0]||(r[0]=c=>Fs(t)?t.value=c:null)},null,512)),[[ql,C(t)]])}},cC=$(rC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayChild.vue"]]),pC={__name:"TwowayParent",setup(e){x(w);const n=ls("Hello !");return(l,t)=>(A(),G(ks,null,[F(cC,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=a=>n.value=a)},null,8,["modelValue"]),s("p",null,Js(n.value),1)],64))}},iC=$(pC,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/TwowayParent.vue"]]),uC=s("h1",null,"v-model を用いた親子間コンポーネントのデータの受け渡し",-1),yC=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),dC={class:"flex gap-8"},fC={class:"flex-shrink"},hC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),mC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),vC={class:"flex-shrink"},BC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),AC={class:"h-xs overflow-y-auto"},_C=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),gC={class:"flex-shrink-0"},DC=s("p",{class:"text-xs"},"実行サンプル",-1),CC={__name:"44",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=iC;return A(),V(K,W(z(n)),{default:g(()=>[uC,yC,s("div",dC,[s("div",fC,[hC,F(a,Z({},{ranges:[""]}),{default:g(()=>[mC]),_:1},16)]),s("div",vC,[BC,s("div",AC,[F(a,Z({},{ranges:[""]}),{default:g(()=>[_C]),_:1},16)])]),s("div",gC,[DC,F(r)])])]),_:1},16)}}},EC=$(CC,[["__file","/@slidev/slides/44.md"]]),FC=s("h1",null,"v-model を用いない親子間コンポーネントのデータの受け渡し",-1),kC=s("p",null,"親子で同じ値になるようにバインディングする（コンポーネント間の双方向バインディング）",-1),xC={class:"flex gap-8"},bC={class:"flex-shrink"},wC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),$C=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),SC=s("ul",null,[s("li",null,"v-model がおこなっていることは v-model を使わなくても実現可能（糖衣構文）"),s("li",null,"親 → 子：プロパティ"),s("li",null,"子 → 親：イベント"),s("li",null,"このような状態が双方向バインディング（値を束縛しあっている）")],-1),PC={__name:"45",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[FC,kC,s("div",xC,[s("div",bC,[wC,F(a,Z({},{ranges:[""]}),{default:g(()=>[$C]),_:1},16)]),SC])]),_:1},16)}}},VC=$(PC,[["__file","/@slidev/slides/45.md"]]),OC=s("h1",null,"スロットによるコンテンツ配信",-1),LC=s("p",null,"slot を使うと、HTML 要素のようにコンポーネントに子要素を渡すことができる",-1),TC={class:"flex gap-8"},NC={class:"flex-shrink"},MC=s("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),RC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"Hello Component"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"Hello Component"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ChildComponent"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),IC={class:"flex-shrink"},jC=s("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),HC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ChildComponent: "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"strong"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},"></"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ChildComponent: "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"strong"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},"></"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),zC=s("div",{class:"text-xs"},[s("p",{class:"text-xs"},"結果例"),s("strong",null,"ChildComponent: "),o("Hello Component ")],-1),UC={__name:"46",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[OC,LC,s("div",TC,[s("div",NC,[MC,F(a,Z({},{ranges:[""]}),{default:g(()=>[RC]),_:1},16)]),s("div",IC,[jC,F(a,Z({},{ranges:[""]}),{default:g(()=>[HC]),_:1},16)])]),zC]),_:1},16)}}},WC=$(UC,[["__file","/@slidev/slides/46.md"]]),qC=s("h1",null,"Vue の基本的な書き方はこれで以上！",-1),KC=s("p",null,"おつかれさまでした",-1),JC=s("p",null,"以下を学んできた",-1),YC=s("ul",null,[s("li",null,"リアクティブな値の作り方"),s("li",null,"テンプレートの書き方"),s("li",null,"コンポーネントの作り方")],-1),ZC=s("p",null,"ここまでは Vue.js を使うなら必ず知っている必要がある内容",-1),GC=s("p",null,"引き続き知らない機能がコードに出てくるかもしれないが、学んだことと関連していると感じられたらそれでよい",-1),QC=s("p",null,"学習の目安",-1),XC=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),s4=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),e4={__name:"47",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[qC,KC,JC,YC,ZC,GC,QC,XC,s4]),_:1},16))}},n4=$(e4,[["__file","/@slidev/slides/47.md"]]),l4=s("h1",null,"次のステップは？",-1),o4=s("p",null,"これから学ぶ内容の確認",-1),t4=s("ul",null,[s("li",null,[o("より具体的な題材でコードを読む・書く "),s("ul",null,[s("li",null,[o("グリッドコンポーネント "),s("ul",null,[s("li",null,"これまで学んだ内容を組み合わせた少し複雑な実装")])]),s("li",null,[o("Markdown エディター "),s("ul",null,[s("li",null,"throttle-debounce によるイベント処理の間引き")])]),s("li",null,[o("ツクロアデザインラボの記事ビューアー "),s("ul",null,[s("li",null,"Fetch API による JSON データの取得"),s("li",null,"Vue Router による画面遷移")])]),s("li",null,[o("靴のギャラリー "),s("ul",null,[s("li",null,"画像の取得と表示"),s("li",null,"あらかじめ用意されたスタイルの適用")])])])]),s("li",null,[o("Nuxt 3 を使う "),s("ul",null,[s("li",null,"Vue.js 単体を使う場合との違い"),s("li",null,"useFetch などの Nuxt 3 特有のヘルパー関数の使い方")])])],-1),a4={__name:"48",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[l4,o4,t4]),_:1},16))}},r4=$(a4,[["__file","/@slidev/slides/48.md"]]),c4=s("h1",null,"グリッドコンポーネント",-1),p4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev")],-1),i4=s("ol",null,[s("li",null,"どんなアプリか：表にデータを流し込んでカラムで並べ替えできる"),s("li",null,"コードの説明"),s("li",null,"行を追加できるようにしよう（20 分程度）")],-1),u4={__name:"49",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[c4,p4,i4]),_:1},16))}},y4=$(u4,[["__file","/@slidev/slides/49.md"]]),d4=s("h1",null,"イベント処理の間引き",-1),f4=s("p",null,"throttle, debounce を使うとイベントハンドリング関数の呼び出し頻度を間引くことができる",-1),h4={class:"flex gap-8"},m4={class:"flex-shrink"},v4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),B4={class:"flex-shrink"},A4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),_4=s("p",null,"次のように書き換えると…？",-1),g4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"filterFruits"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"debounce"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"fruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"originalFruits"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"fruit"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"indexOf"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"message"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},">="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"});")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"filterFruits"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"debounce"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"fruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"originalFruits"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"fruit"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"indexOf"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"message"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},">="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"});")])])])],-1),D4={__name:"50",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[d4,f4,s("div",h4,[s("div",m4,[F(a,Z({},{ranges:[""]}),{default:g(()=>[v4]),_:1},16)]),s("div",B4,[F(a,Z({},{ranges:[""]}),{default:g(()=>[A4]),_:1},16),_4,F(a,Z({},{ranges:[""]}),{default:g(()=>[g4]),_:1},16)])])]),_:1},16)}}},C4=$(D4,[["__file","/@slidev/slides/50.md"]]),E4=s("h1",null,"Markdown エディター",-1),F4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev")],-1),k4=s("ol",null,[s("li",null,"どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる"),s("li",null,"コードの説明"),s("li",null,"右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）")],-1),x4={__name:"51",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[E4,F4,k4]),_:1},16))}},b4=$(x4,[["__file","/@slidev/slides/51.md"]]),w4=s("h1",null,"デザインラボの記事ビューアー",-1),$4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-fetch-router?file=src/App.vue&terminal=dev")],-1),S4=s("ol",null,[s("li",null,[o("どんなアプリか："),s("a",{href:"https://design-lab.tuqulore.com/",target:"_blank",rel:"noopener"},"デザインラボ"),o("というサイトと同じ記事データ（JSON）を取得して一覧から選択表示できる")]),s("li",null,"コードの説明（App コンポーネント、PostList コンポーネント）"),s("li",null,[o("Vue Router を導入しよう（20 分程度） "),s("ul",null,[s("li",null,"Vue プラグインとして Vue アプリケーションインスタンスに登録"),s("li",null,"画面が切り替わるようコンポーネントへの差し替え"),s("li",null,"画面遷移を補足できるコンポーネントへの差し替え")])]),s("li",null,"コードの説明（PostDetail コンポーネント）")],-1),P4={__name:"52",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[w4,$4,S4]),_:1},16))}},V4=$(P4,[["__file","/@slidev/slides/52.md"]]),O4="/vue-3-practices/handson-gallery-shoes-finish.png",L4=s("h1",null,"靴のギャラリー",-1),T4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-gallery-shoes?file=src/App.vue&terminal=dev")],-1),N4=s("ol",null,[s("li",null,"どんなアプリか：靴のデータ（JSON）を取得してショッピングサイトらしい見た目で一覧表示できる"),s("li",null,"JSON から靴のデータを取得しよう（10 分程度）"),s("li",null,"取得した靴のデータをあらかじめ用意されたスタイルで表示しよう（20 分程度）")],-1),M4=s("img",{class:"pt-2",src:O4,width:"400"},null,-1),R4={__name:"53",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[L4,T4,N4,M4]),_:1},16))}},I4=$(R4,[["__file","/@slidev/slides/53.md"]]),j4=s("h1",null,"Nuxt 3",-1),H4=s("p",null,[s("a",{href:"https://nuxt.com/docs/getting-started/introduction#what-is-nuxt",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/getting-started/introduction#what-is-nuxt")],-1),z4=s("p",null,"効率的にモダンなウェブアプリケーション開発に必要なライブラリがあらかじめ含まれている（Nuxt 3 を導入すれば自分で別途導入する必要がない）",-1),U4=s("ol",null,[s("li",null,[o("リアクティビティと Web コンポーネントの提供："),s("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue.js")]),s("li",null,[o("開発環境での HMR（ページの再読み込みなしで ES モジュールを差し替えたりする）のサポート、本番環境でのコードのバンドリング："),s("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener"},"webpack 5"),o(" と "),s("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite")]),s("li",null,[o("レガシーなブラウザーをサポートしながら最新の JavaScript 文法が書ける："),s("a",{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener"},"esbuild")]),s("li",null,[o("開発サーバー、サーバーサイドレンダリング、API サーバーの提供："),s("a",{href:"https://github.com/unjs/h3",target:"_blank",rel:"noopener"},"h3")]),s("li",null,[o("ルーティング（画面遷移処理）："),s("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"vue-router")])],-1),W4={__name:"54",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[j4,H4,z4,U4]),_:1},16))}},q4=$(W4,[["__file","/@slidev/slides/54.md"]]),K4=s("h1",null,"Nuxt 3",-1),J4=s("ul",null,[s("li",null,"Vue.js が導入済み（Nuxt を導入すれば Vue.js の導入が不要）"),s("li",null,"Vue コンポーネント等の import を省略できる"),s("li",null,"pages ディレクトリに .vue ファイルを作成するだけで HTML ページができる（ルーティングの自動生成）"),s("li",null,"server ディレクトリにサーバー側の処理が書ける（API エンドポイントの生成）"),s("li",null,"Nuxt 3 は 2022 年 11 月に安定版がリリースされた")],-1),Y4={__name:"55",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[K4,J4]),_:1},16))}},Z4=$(Y4,[["__file","/@slidev/slides/55.md"]]),G4=s("h1",null,"Nuxt 3 のハンズオン",-1),Q4=s("p",null,[s("a",{href:"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-nuxt-playground?file=app.vue&terminal=dev",target:"_blank",rel:"noopener"},"https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-nuxt-playground?file=app.vue&terminal=dev")],-1),X4=s("ul",null,[s("li",null,"app.vue"),s("li",null,"pages"),s("li",null,"NuxtLink"),s("li",null,"layouts"),s("li",null,"Data Fetching / server ディレクトリ"),s("li",null,"composables")],-1),s7={__name:"56",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[G4,Q4,X4]),_:1},16))}},e7=$(s7,[["__file","/@slidev/slides/56.md"]]),n7=s("h1",null,"app.vue",-1),l7=s("p",null,[o("app.vue を開いて中身を確認する。"),s("br"),o(" app.vue を削除する。")],-1),o7=s("p",null,[o("Vue 開発環境では App.vue ファイルをルートコンポーネントとして取り扱うことが多いが、Nuxt では app.vue がルートコンポーネントと決められている。ルーティングをおこなう場合、"),s("code",null,"<NuxtPage />"),o(" コンポーネントを挿入する。（Vue Router 導入時に出てきた "),s("code",null,"<RouterView />"),o(" コンポーネントと同じ）")],-1),t7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"共通レイアウト"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"共通レイアウト"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),a7=s("p",null,[s("code",null,"<NuxtPage />"),o(" コンポーネントの外側は共通レイアウト（画面遷移しても見た目が変わらない部分）になる。ページごとに共通レイアウトを切り替えたい場合は、後述する layouts を使う必要がある。")],-1),r7=s("p",null,"そもそも共通レイアウトが不要なのであれば、 app.vue を削除することもできる。（この場合、ルートコンポーネントが消えるわけではなく、Nuxt 3 によって隠蔽される。）",-1),c7={__name:"57",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[n7,l7,o7,F(a,Z({},{ranges:[""]}),{default:g(()=>[t7]),_:1},16),a7,r7]),_:1},16)}}},p7=$(c7,[["__file","/@slidev/slides/57.md"]]),i7=s("h1",null,"pages",-1),u7=s("p",null,[o("pages ディレクトリに "),s("code",null,"pages/index.vue"),o(", "),s("code",null,"pages/about.vue"),o(" ファイルを配置し、複数ページを構成する。")],-1),y7=s("p",null,"Nuxt ではページを作成するだけでルートを定義することができる。つまり、 Vue Router を導入したときのように手動でルートを定義する必要がない。",-1),d7={__name:"58",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[i7,u7,y7]),_:1},16))}},f7=$(d7,[["__file","/@slidev/slides/58.md"]]),h7=s("h1",null,"NuxtLink",-1),m7=s("p",null,"コンポーネントで Nav.vue を作成、index と about のリンクナビゲーションを作成する。",-1),v7=s("p",null,"そしてそのルートを移動する際は HTML の",-1),B7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"href"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"a"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"href"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"a"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),A7=s("p",null,"ではなく",-1),_7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"NuxtLink"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"to"),s("span",{style:{color:"#858585"}},"="),s("span",{style:{color:"#C98A7D"}},'"/about"'),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"ABOUT"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"NuxtLink"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"NuxtLink"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"to"),s("span",{style:{color:"#8E8F8B"}},"="),s("span",{style:{color:"#B56959"}},'"/about"'),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"ABOUT"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"NuxtLink"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),g7=s("p",null,[o("と記述してリンクを作成する。"),s("br"),o(" ルート外、例えば外部サイトのリンクを貼る場合は従来の"),s("code",null,"<a>"),o("要素を使うことになる。")],-1),D7={__name:"59",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[h7,m7,v7,F(a,Z({},{ranges:[""]}),{default:g(()=>[B7]),_:1},16),A7,F(a,Z({},{ranges:[""]}),{default:g(()=>[_7]),_:1},16),g7]),_:1},16)}}},C7=$(D7,[["__file","/@slidev/slides/59.md"]]),E7=s("h1",null,"layouts",-1),F7=s("p",null,[s("code",null,"layouts/default.vue"),o("を作成し、"),s("code",null,"<Nav />"),o(" を表示させる。"),s("br"),o(" layouts 配下にいくつかのレイアウトコンポーネントを用意し、ページコンポーネントごとに切り替えることもできる。")],-1),k7={class:"flex gap-8"},x7=s("p",null,[s("code",null,"app.vue"),o("で共通レイアウトを組む例")],-1),b7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"Nav"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#858585"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"Nav"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"NuxtPage"),s("span",{style:{color:"#8E8F8B"}}," />")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),w7=s("p",null,[s("code",null,"layouts/default.vue"),o("で共通レイアウトを組む例")],-1),$7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"Nav"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"Nav"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),S7=s("p",null,[s("code",null,"layouts/custom.vue"),o("に別の共通レイアウトを組む例")],-1),P7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}},"別の共通レイアウト"),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"header"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"slot"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}},"別の共通レイアウト"),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"header"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"slot"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),V7=s("p",null,"ページコンポーネントで custom レイアウトを参照する例",-1),O7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),L7={__name:"60",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[E7,F7,s("div",k7,[s("div",null,[x7,F(a,Z({},{ranges:[""]}),{default:g(()=>[b7]),_:1},16),w7,F(a,Z({},{ranges:[""]}),{default:g(()=>[$7]),_:1},16)]),s("div",null,[S7,F(a,Z({},{ranges:[""]}),{default:g(()=>[P7]),_:1},16),V7,F(a,Z({},{ranges:[""]}),{default:g(()=>[O7]),_:1},16)])])]),_:1},16)}}},T7=$(L7,[["__file","/@slidev/slides/60.md"]]),N7=s("h1",null,"Data Fetching / server ディレクトリ",-1),M7=s("p",null,[s("code",null,"server/api"),o("ディレクトリにある"),s("code",null,"users.js"),o("を確認して、"),s("code",null,"components/userList.vue"),o("に以下を記述する。")],-1),R7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),I7={__name:"61",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[N7,M7,F(a,Z({},{ranges:[""]}),{default:g(()=>[R7]),_:1},16)]),_:1},16)}}},j7=$(I7,[["__file","/@slidev/slides/61.md"]]),H7=s("h1",null,"composables",-1),z7=s("p",null,[s("code",null,"composables/useCounter.js"),o("を作成する。"),s("br"),o(" アプリで再利用したいロジックを管理することができる。js ファイルではあるが、Vue コンポーネントで使ってきた関数を使用していることがわかる。")],-1),U7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"#app"'),s("span",{style:{color:"#858585"}},";")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),W7={__name:"62",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[H7,z7,F(a,Z({},{ranges:[""]}),{default:g(()=>[U7]),_:1},16)]),_:1},16)}}},q7=$(W7,[["__file","/@slidev/slides/62.md"]]),K7=s("h1",null,"composables",-1),J7=s("p",null,"作成した useCounter コンポジション関数を使用する。",-1),Y7=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),Z7={__name:"63",setup(e){const n={};return x(w),(l,t)=>{const a=us,r=ot,c=Qo("click");return A(),V(K,W(z(n)),{default:g(()=>[K7,J7,F(a,Z({},{ranges:[""]}),{default:g(()=>[Y7]),_:1},16),Pe(F(r,{x1:"400",y1:"400",x2:"220",y2:"300",color:"#564",width:"3",arrowSize:"1"},null,512),[[c,1]])]),_:1},16)}}},G7=$(Z7,[["__file","/@slidev/slides/63.md"]]),Q7=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較",-1),X7=s("p",null,"デザインラボの記事ビューアーを Nuxt 3 でつくりなおしたもの",-1),s2=s("p",null,"動作は Vue 3 のものと同じ",-1),e2=s("ol",null,[s("li",null,[s("a",{href:"https://codesandbox.io/p/github/tuqulore/vue-3-practices/main?file=%2Fhandson-fetch-router-nuxt-finish%2Fpages%2Findex.vue",target:"_blank",rel:"noopener"},"https://codesandbox.io/p/github/tuqulore/vue-3-practices/main?file=%2Fhandson-fetch-router-nuxt-finish%2Fpages%2Findex.vue"),o(" にアクセス")]),s("li",null,[s("code",null,"Start handson-fetch-router-nuxt-finish"),o(" というタスクを実行")]),s("li",null,"しばらくして何も変化がないようならブラウザ再読み込み"),s("li",null,"右上に講師のアバターアイコンがあるはずなのでそれをクリック")],-1),n2={__name:"64",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[Q7,X7,s2,e2]),_:1},16))}},l2=$(n2,[["__file","/@slidev/slides/64.md"]]),o2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),t2=s("div",{class:"flex gap-8"},[s("div",null,[s("p",{class:"text-xs"},"Vue 3"),s("ol",null,[s("li",null,"Vue Router をプラグインとしてインストール"),s("li",null,"ルートを定義する"),s("li",null,"RouterView コンポーネントを使う")])]),s("div",null,[s("p",{class:"text-xs"},"Nuxt 3"),s("div",{class:"h-xs overflow-y-auto"},[s("ol",null,[s("li",null,"導入済みなので設定不要"),s("li",null,"ファイル・ディレクトリ構成で定義できる（ファイルベースルーティング）"),s("li",null,[o("app.vue は NuxtPage コンポーネントが必要だが app.vue 自体存在しなければ設定不要 "),s("a",{href:"https://nuxt.com/docs/guide/directory-structure/app",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/guide/directory-structure/app")])]),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── index.vue // この場合のパスは `/` となり index はパスから省略可能")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"└── posts // ディレクトリがそのままURLのパスに含まれる")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"    └── [id].vue // URLパラメーターは[]で囲む")])])])])])])],-1),a2={__name:"65",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[o2,t2]),_:1},16))}},r2=$(a2,[["__file","/@slidev/slides/65.md"]]),c2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（ルーティング）",-1),p2=s("p",null,"Vue 3 はテンプレートの最上位に複数要素が書ける",-1),i2=s("p",null,"例：",-1),u2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"div"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"p"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"/"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"</"),s("span",{style:{color:"#429988"}},"template"),s("span",{style:{color:"#858585"}},">")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"div"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"p"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B31D28","font-style":"italic"}},"/"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"</"),s("span",{style:{color:"#2F8A89"}},"template"),s("span",{style:{color:"#8E8F8B"}},">")])])])],-1),y2=s("p",null,"しかし、Nuxt 3 の pages ディレクトリに配置する Vue コンポーネントに限っては、Nuxt 3 の制約としてテンプレートの最上位はひとつまでの要素しか書けない",-1),d2=s("blockquote",null,[s("p",null,"Pages must have a single root element to allow route transitions between pages. (HTML comments are considered elements as well.)")],-1),f2=s("p",null,[s("a",{href:"https://nuxt.com/docs/guide/directory-structure/pages",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/guide/directory-structure/pages")],-1),h2={__name:"66",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[c2,p2,i2,F(a,Z({},{ranges:[""]}),{default:g(()=>[u2]),_:1},16),y2,d2,f2]),_:1},16)}}},m2=$(h2,[["__file","/@slidev/slides/66.md"]]),v2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),B2={class:"flex gap-8"},A2=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),_2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ref"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"RouterLink"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"vue-router"'),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ref"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ref"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"RouterLink"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"vue-router"'),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ref"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),g2=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),D2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),C2=s("p",null,"インポート、コンポーネントを利用するためのコードが省略でき記述量が減らせる",-1),E2={__name:"67",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[v2,s("div",B2,[s("div",null,[A2,F(a,Z({},{ranges:[""]}),{default:g(()=>[_2]),_:1},16)]),s("div",null,[g2,F(a,Z({},{ranges:[""]}),{default:g(()=>[D2]),_:1},16),C2])])]),_:1},16)}}},F2=$(E2,[["__file","/@slidev/slides/67.md"]]),k2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（自動インポート）",-1),x2=s("p",null,[s("a",{href:"https://nuxt.com/docs/guide/concepts/auto-imports",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/guide/concepts/auto-imports")],-1),b2=s("p",null,"以下はインポート不要",-1),w2=s("ul",null,[s("li",null,"Nuxt 3 が提供する関数、コンポーネント（useFetch、$fetch、NuxtLink など）"),s("li",null,"今まで使ってきた Composition API 関連の関数（ref、computed など）"),s("li",null,"components ディレクトリに配置された Vue コンポーネント"),s("li",null,"composables ディレクトリに配置されたコンポジション関数")],-1),$2={__name:"68",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[k2,x2,b2,w2]),_:1},16))}},S2=$($2,[["__file","/@slidev/slides/68.md"]]),P2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),V2={class:"flex gap-8"},O2=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),L2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),T2=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),N2={class:"h-xs overflow-y-auto"},M2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#429988"}},"script"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"setup"),s("span",{style:{color:"#858585"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"中略"),s("span",{style:{color:"#DBD7CA"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useFetch"),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},'"http://localhost:3000/wp-json/wp/v2/posts.json"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"（"),s("span",{style:{color:"#B8A965"}},"後略"),s("span",{style:{color:"#DBD7CA"}},"）")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#2F8A89"}},"script"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"setup"),s("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"中略"),s("span",{style:{color:"#393A34"}},"）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useFetch"),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},'"http://localhost:3000/wp-json/wp/v2/posts.json"')]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"（"),s("span",{style:{color:"#8C862B"}},"後略"),s("span",{style:{color:"#393A34"}},"）")])])])],-1),R2=s("ul",null,[s("li",null,"リアクティブな値を別途用意する必要がない"),s("li",null,[s("a",{href:"https://developer.mozilla.org/ja/docs/Web/API/Response/json",target:"_blank",rel:"noopener"},"Response.json()"),o("が暗黙的に実行されオブジェクトが得られる")]),s("li",null,[o("データ再取得の関数、取得中の状態値などあると便利なものが用意されている "),s("a",{href:"https://nuxt.com/docs/getting-started/data-fetching",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/getting-started/data-fetching")])],-1),I2={__name:"69",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[P2,s("div",V2,[s("div",null,[O2,F(a,Z({},{ranges:[""]}),{default:g(()=>[L2]),_:1},16)]),s("div",null,[T2,s("div",N2,[F(a,Z({},{ranges:[""]}),{default:g(()=>[M2]),_:1},16),R2])])])]),_:1},16)}}},j2=$(I2,[["__file","/@slidev/slides/69.md"]]),H2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),z2=s("p",null,[s("a",{href:"https://nuxt.com/docs/getting-started/data-fetching",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/getting-started/data-fetching")],-1),U2=s("p",null,"useFetch 以外もある",-1),W2=s("p",null,[o("useLazyFetch: 非同期関数でない代わりにデータ取得前は "),s("code",null,"null"),o(" が入る")],-1),q2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"posts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyFetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/posts"'),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"posts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyFetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/posts"'),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),K2=s("p",null,"useAsyncData: 例としては useFetch と同じことをやっている。（useFetch が使えないケースで）非同期処理によってデータを取得したい際に使う",-1),J2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},"));")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},"));")])])])],-1),Y2=s("p",null,"useLazyAsyncData: useLazyFetch の useAsyncData 版",-1),Z2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"pending"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"count"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"useLazyAsyncData"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"count"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"$fetch"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/api/count"'),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"pending"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"count"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"useLazyAsyncData"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"count"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"$fetch"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/api/count"'),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),G2={__name:"70",setup(e){const n={};return x(w),(l,t)=>{const a=us;return A(),V(K,W(z(n)),{default:g(()=>[H2,z2,U2,W2,F(a,Z({},{ranges:[""]}),{default:g(()=>[q2]),_:1},16),K2,F(a,Z({},{ranges:[""]}),{default:g(()=>[J2]),_:1},16),Y2,F(a,Z({},{ranges:[""]}),{default:g(()=>[Z2]),_:1},16)]),_:1},16)}}},Q2=$(G2,[["__file","/@slidev/slides/70.md"]]),X2=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),sE=s("p",null,"便利だが素朴に Fetch API を使う場合と意図しない挙動の際が生じる場合がある",-1),eE=s("ul",null,[s("li",null,[o("同一オリジン（例："),s("code",null,"http://localhost:3000"),o("）であっても、オリジンを含めた url で取得先を指定しなければいけない場合がある "),s("ul",null,[s("li",null,"server ディレクトリで提供する API エンドポイントはオリジン省略可能"),s("li",null,"上記以外のケース、たとえばアセット（public ディレクトリで提供する静的ファイル）はオリジンが必要")])])],-1),nE=s("p",null,[o("Nuxt 3 の useFetch、$fetch は純粋なクライアント処理でない（サーバー側で内部的に処理される）場合があることが原因 "),s("a",{href:"https://nuxt.com/docs/getting-started/data-fetching#isomorphic-fetch-and-fetch",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/getting-started/data-fetching#isomorphic-fetch-and-fetch")],-1),lE=s("p",null,"場合によっては（$fetch ではなく） fetch を使うことも検討すること",-1),oE={__name:"71",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[X2,sE,eE,nE,lE]),_:1},16))}},tE=$(oE,[["__file","/@slidev/slides/71.md"]]),aE=s("h1",null,"VueUse",-1),rE=s("p",null,"便利なコンポジション関数を提供しているライブラリ",-1),cE=s("ul",null,[s("li",null,"スクラッチ（ゼロ）から処理を書くのは車輪の再発明かもしれない"),s("li",null,"既製のライブラリを使用することで効率的に開発することができる"),s("li",null,[s("a",{href:"https://vueuse.org/functions.html",target:"_blank",rel:"noopener"},"https://vueuse.org/functions.html"),o(" をみてみよう")])],-1),pE={__name:"72",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[aE,rE,cE]),_:1},16))}},iE=$(pE,[["__file","/@slidev/slides/72.md"]]),uE=s("h1",null,"スタイルガイド",-1),yE=s("p",null,"Vue 固有の記法についての公式なスタイルガイド",-1),dE=s("ul",null,[s("li",null,"スタイルガイドに書いてあることを守らなくても、動く Vue のコードを書くことはできる"),s("li",null,"スタイルガイドに書いてあることを守ると、事前に起こりうる問題に対処することができる"),s("li",null,[s("a",{href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener"},"eslint-plugin-vue"),o("を使うとスタイルガイドに違反しているか静的にコードを解析・修正できる")])],-1),fE=s("p",null,[s("a",{href:"https://ja.vuejs.org/style-guide/",target:"_blank",rel:"noopener"},"スタイルガイド")],-1),hE={__name:"73",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[uE,yE,dE,fE]),_:1},16))}},mE=$(hE,[["__file","/@slidev/slides/73.md"]]),vE=s("h1",null,"Vue 3 と Nuxt 3 の説明はこれで以上！",-1),BE=s("p",null,"おつかれさまでした",-1),AE=s("p",null,"以下を学んできた",-1),_E=s("ul",null,[s("li",null,"Vue の基本的な書き方"),s("li",null,"Vue アプリケーションのコードを読む・書く"),s("li",null,"Nuxt アプリケーションのコードを読む・書く")],-1),gE=s("p",null,"Nuxt 3 を使ってウェブアプリケーションをつくっていく準備ができた",-1),DE=s("p",null,"業務・趣味でウェブアプリケーションを開発していきましょう！",-1),CE=s("p",null,"学習の目安",-1),EE=s("ul",null,[s("li",null,"理解していること"),s("li",null,"書けること")],-1),FE=s("p",null,"自信がない箇所は復習・質問しましょう！",-1),kE={__name:"74",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[vE,BE,AE,_E,gE,DE,CE,EE,FE]),_:1},16))}},xE=$(kE,[["__file","/@slidev/slides/74.md"]]),bE="/vue-3-practices/sticky-handson.png",wE="/vue-3-practices/fig-sticky-handson.png",$E=s("h1",null,"課題 - 付箋アプリをつくってみよう",-1),SE=s("div",{class:"text-xs"},[s("p",null,"マウスドラッグで付箋を動かし、文字を書き込み、色を変えるアプリです。さらに皆さんの追加したい機能を考えて自由につくり替えてみましょう。"),s("div",{class:"grid grid-cols-2 items-center text-xs font-bold text-gray-500"},[s("figure",null,[s("img",{src:bE,class:"w-80 mb-4",alt:""}),s("figcaption",null,"どこからでも付箋の情報を扱える Composables を使う")]),s("figure",null,[s("img",{src:wE,class:"w-80 border border-gray-200 mb-4",alt:""}),s("figcaption",null,[s("a",{target:"_blank",rel:"noopener noreferrer",href:"https://stackblitz.com/edit/nuxt-starter-eqvxvb"},"まずはサンプルを見てみましょう →")])])])],-1),PE={__name:"75",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[$E,SE]),_:1},16))}},VE=$(PE,[["__file","/@slidev/slides/75.md"]]),OE="/vue-3-practices/fig-vueuse.png",LE=s("h1",null,"VueUse を使って付箋のドラッグ移動を実現",-1),TE=s("div",{class:"text-xs h-11/12"},[s("p",null,"様々な Vue で使える便利なユーティリティがあります。"),s("img",{src:OE,alt:"VueUse",class:"h-8/12"}),s("p",null,[s("a",{target:"_blank",rel:"noopener noreferrer",href:"https://vueuse.org/"},[s("a",{href:"https://vueuse.org/",target:"_blank",rel:"noopener"},"https://vueuse.org/")])]),s("p",null,[o(" 今回は "),s("a",{target:"_blank",rel:"noopener noreferrer",href:"https://vueuse.org/core/usedraggable/#usedraggable"},"useDraggable"),o(" を使います ")])],-1),NE={__name:"76",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[LE,TE]),_:1},16))}},ME=$(NE,[["__file","/@slidev/slides/76.md"]]),RE=s("h1",null,"構成を理解しよう",-1),IE=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── components/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"│ ├── Sticky.vue （付箋単体の情報を格納したコンポーネント）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── composables/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"│ ├── useStickies.vue （付箋全体の情報を一括で管理する Composables）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"│ ├── index.vue （ページ）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── app.vue （ページをラップする雛形）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"├── package.json （今回はuseDraggableが含まれています）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}})])])]),s("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── components/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"│ ├── Sticky.vue （付箋単体の情報を格納したコンポーネント）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── composables/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"│ ├── useStickies.vue （付箋全体の情報を一括で管理する Composables）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── pages/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"│ ├── index.vue （ページ）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── app.vue （ページをラップする雛形）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"├── package.json （今回はuseDraggableが含まれています）")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}})])])])],-1),jE=s("div",{class:"text-xs leading-5 my-4"},[s("ul",null,[s("li",null,[s("code",null,"pages/index.vue"),o(" と "),s("code",null,"components/Sticky.vue"),o(" は同じ "),s("code",null,"composables/useStickies.vue"),o(" を参照していることがわかります")]),s("li",null,[s("code",null,"composables/useStickies.vue"),o(" には現在、3 つの付箋の情報が配列で用意されています")]),s("li",null,[s("code",null,"composables/useStickies.vue"),o(" には現在、"),s("code",null,"add()"),o("と"),s("code",null,"update()"),o("の関数が用意されていて、別々のコンポーネントから呼び出しが可能になっています")])]),s("p",null,"これで付箋の情報を一元管理できることがわかります。")],-1),HE={__name:"77",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[RE,IE,jE]),_:1},16))}},zE=$(HE,[["__file","/@slidev/slides/77.md"]]),UE="/vue-3-practices/fig-sticky-remove.png",WE="/vue-3-practices/fig-sticky-photo.png",qE="/vue-3-practices/fig-sticky-add.png",KE=s("h1",null,"機能を追加しよう",-1),JE=s("p",{class:"text-xs"},[o("先程の簡単なサンプルから以下のサンプルコードを選んで、機能を追加していきましょう。"),s("br"),o("まずは書き写してみるだけでも勉強になります。")],-1),YE=s("div",{class:"grid grid-cols-3 gap-6 text-xs"},[s("figure",null,[s("img",{src:UE,class:"p-1 border mb-2",alt:""}),s("figcaption",null,[s("a",{target:"_blank",rel:"noopener noreferrer",href:"https://stackblitz.com/edit/nuxt-starter-a1jojw"},"削除ボタンの追加 →")])]),s("figure",null,[s("img",{src:WE,class:"p-1 border mb-2",alt:""}),s("figcaption",null,[s("a",{target:"_blank",rel:"noopener noreferrer",href:"https://stackblitz.com/edit/nuxt-starter-7qahec"},"付箋に画像を貼る →")])]),s("figure",null,[s("img",{src:qE,class:"p-1 border mb-2",alt:""}),s("figcaption",null,[s("a",{target:"_blank",rel:"noopener noreferrer",href:"https://stackblitz.com/edit/nuxt-starter-ryc4pc"},"付箋の追加ボタンを新規コンポーネントで作成 →")])])],-1),ZE={__name:"78",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[KE,JE,YE]),_:1},16))}},GE=$(ZE,[["__file","/@slidev/slides/78.md"]]),QE=s("h1",null,"次はあなたのアイデアで！",-1),XE=s("p",null,"例えば…",-1),s6=s("ul",null,[s("li",null,"重ね順を変更させたい"),s("li",null,"文字の色、太さ、影など付けたい"),s("li",null,"動画を貼りたい"),s("li",null,"カメラを起動させて撮影した写真を貼りたい"),s("li",null,"スタンプを貼りたい")],-1),e6=s("p",null,"など、余裕ができたらあなたのアイデアを実現してみましょう。",-1),n6=s("p",null,"ちょっとハードルは上がるかもしれませんが、どう実装するべきかは講師にも相談してみてください。",-1),l6={__name:"79",setup(e){const n={};return x(w),(l,t)=>(A(),V(K,W(z(n)),{default:g(()=>[QE,XE,s6,e6,n6]),_:1},16))}},o6=$(l6,[["__file","/@slidev/slides/79.md"]]),t6=[{path:"1",name:"page-1",component:oA,meta:{theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},slide:{raw:`---
# try also 'default' to start simple
theme: "default"
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
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
<img src="/logo.svg" alt="Vue" style="width: 100px;" class="inline mb-4" />

<h1 class="!text-5xl">Vue3 Practices</h1>

</div>
`,content:`<div class="text-center">
<img src="/logo.svg" alt="Vue" style="width: 100px;" class="inline mb-4" />

<h1 class="!text-5xl">Vue3 Practices</h1>

</div>`,frontmatter:{theme:"default",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}},index:0,start:0,end:29,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:iA,meta:{slide:{raw:`
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
  - throttle-debounce, fetch, Vue Router など`,frontmatter:{},index:1,start:30,end:48,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:vA,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:2,start:49,end:63,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:CA,meta:{slide:{raw:`
# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。
`,title:"本講座のすすめかた",level:1,content:`# 本講座のすすめかた

どのような形式で進行するのかの確認

ハンズオン ≒ コードを書いて動かすこと（1 回 10 分程度）をメインに取り組みます。

適宜説明を挟みますが、動かない、分からないとき、その他なんでも（大抵は他の受講者も同じことを考えています！）質問をお願いします。`,frontmatter:{},index:3,start:64,end:73,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:PA,meta:{slide:{raw:`
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

講師は適宜あたらしいハンズオン環境をつくっていきますが、受講者の皆さんは作成したハンズオン環境を（全消しするなど）使いまわしてもらって大丈夫です。`,frontmatter:{},index:4,start:74,end:92,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:GA,meta:{slide:{raw:`
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

現状、Vue 関連の記事は Options API で解説されているほうが大多数であり、初学者の方は混乱されるかもしれません。Vue2, 3 どちらでも両 API は使えますが、本講座では今後主流となる Composition API を取り扱います。`,frontmatter:{},index:5,start:93,end:145,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:l9,meta:{slide:{raw:`
# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />
`,title:"Composition API のメリット",level:1,content:`# Composition API のメリット

Vue の機能ではなく、論理的な関心事でコードをまとめることができる

<img src="/apis.png" class="h-5/6" />`,frontmatter:{},index:6,start:146,end:153,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:i9,meta:{slide:{raw:`
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

現状 Vue では、簡潔なコードで表現するための支援機能として、シンタックスシュガー（糖衣構文）が提供されることがあります。HTML とも JS とも異なる構文への理解が求められる反面、記述量が減る、コードの複雑さが減るといったメリットがあるので、本講座では積極的に取り扱います。`,frontmatter:{},index:7,start:154,end:200,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:B9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:8,start:201,end:231,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:F9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:9,start:232,end:264,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:S9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:10,start:265,end:300,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:I9,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:11,start:301,end:341,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:W9,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:12,start:342,end:364,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Z9,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:13,start:365,end:389,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:s_,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:14,start:390,end:415,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:t_,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:15,start:416,end:437,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:u_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:16,start:438,end:472,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:F_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:17,start:473,end:517,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:S_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:18,start:518,end:551,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:N_,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:19,start:552,end:585,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:j_,meta:{slide:{raw:`
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
- フォーム入力バインディング`,frontmatter:{},index:20,start:586,end:597,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:J_,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:22,start:620,end:648,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:r1,meta:{slide:{raw:`
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

ディレクティブが使われている箇所は Vue の機能と関係していると気づけるとよい`,frontmatter:{},index:23,start:649,end:659,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:f1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:24,start:660,end:685,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:x1,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:25,start:686,end:743,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:L1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:26,start:744,end:774,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:I1,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:27,start:775,end:798,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:X1,meta:{slide:{raw:`
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

<arrow v-click="2" x1="350" y1="370" x2="190" y2="310" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:28,start:799,end:818,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:og,meta:{slide:{raw:`
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
- コンポーネントをマウントしてから頻繁に変化するケースであれば \`v-show\`を使う`,frontmatter:{},index:29,start:819,end:834,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:ug,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:30,start:835,end:871,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Bg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:31,start:872,end:911,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Fg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:32,start:912,end:950,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Pg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:33,start:951,end:992,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:jg,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:34,start:993,end:1021,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:Wg,meta:{slide:{raw:`
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
- スロットによるコンテンツ配信`,frontmatter:{},index:35,start:1022,end:1033,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Gg,meta:{slide:{raw:`
# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />
`,title:"コンポーネントの基本と構成",level:1,content:`# コンポーネントの基本と構成

親コンポーネントから子コンポーネントが参照されツリー構造になる。最上位はルートコンポーネント（App.vue）

<img src="/components.png" alt="コンポーネントの基本と構成" style="height: 80%; width: auto" />`,frontmatter:{},index:36,start:1034,end:1041,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:aD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:37,start:1042,end:1088,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:mD,meta:{slide:{raw:`
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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:38,start:1089,end:1139,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:FD,meta:{slide:{raw:`
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

<arrow v-click="1" x1="160" y1="180" x2="185" y2="215" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:39,start:1140,end:1188,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:OD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:40,start:1189,end:1238,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:zD,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:41,start:1239,end:1285,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:aC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:42,start:1286,end:1339,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:EC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:43,start:1340,end:1407,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:VC,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:44,start:1408,end:1442,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:WC,meta:{slide:{raw:`
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

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:46,start:1484,end:1506,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:r4,meta:{slide:{raw:`
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
  - useFetch などの Nuxt 3 特有のヘルパー関数の使い方`,frontmatter:{},index:47,start:1507,end:1527,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:y4,meta:{slide:{raw:`
# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）
`,title:"グリッドコンポーネント",level:1,content:`# グリッドコンポーネント

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-grid-component?file=src/App.vue&terminal=dev

1. どんなアプリか：表にデータを流し込んでカラムで並べ替えできる
2. コードの説明
3. 行を追加できるようにしよう（20 分程度）`,frontmatter:{},index:48,start:1528,end:1537,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:C4,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:49,start:1538,end:1597,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:b4,meta:{slide:{raw:`
# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）
`,title:"Markdown エディター",level:1,content:`# Markdown エディター

https://stackblitz.com/fork/github/tuqulore/vue-3-practices/tree/main/handson-markdown-editor?file=src/App.vue&terminal=dev

1. どんなアプリか：左カラムに Markdown 記法でテキストを入力すると右カラムに対応する見た目が表示できる
2. コードの説明
3. 右カラムの見た目が変わる頻度を throttle-debounce で間引いてみよう（20 分程度）`,frontmatter:{},index:50,start:1598,end:1607,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:V4,meta:{slide:{raw:`
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
4. コードの説明（PostDetail コンポーネント）`,frontmatter:{},index:51,start:1608,end:1621,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:I4,meta:{slide:{raw:`
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

<img class="pt-2" src="/handson-gallery-shoes-finish.png" width="400">`,frontmatter:{},index:52,start:1622,end:1633,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:q4,meta:{slide:{raw:`
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
5. ルーティング（画面遷移処理）：[vue-router](https://router.vuejs.org/)`,frontmatter:{},index:53,start:1634,end:1647,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:Z4,meta:{slide:{raw:`
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
- Nuxt 3 は 2022 年 11 月に安定版がリリースされた`,frontmatter:{},index:54,start:1648,end:1657,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:e7,meta:{slide:{raw:`
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
- composables`,frontmatter:{},index:55,start:1658,end:1670,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:p7,meta:{slide:{raw:`
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

そもそも共通レイアウトが不要なのであれば、 app.vue を削除することもできる。（この場合、ルートコンポーネントが消えるわけではなく、Nuxt 3 によって隠蔽される。）
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

そもそも共通レイアウトが不要なのであれば、 app.vue を削除することもできる。（この場合、ルートコンポーネントが消えるわけではなく、Nuxt 3 によって隠蔽される。）`,frontmatter:{},index:56,start:1671,end:1692,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:f7,meta:{slide:{raw:`
# pages

pages ディレクトリに \`pages/index.vue\`, \`pages/about.vue\` ファイルを配置し、複数ページを構成する。

Nuxt ではページを作成するだけでルートを定義することができる。つまり、 Vue Router を導入したときのように手動でルートを定義する必要がない。
`,title:"pages",level:1,content:"# pages\n\npages ディレクトリに `pages/index.vue`, `pages/about.vue` ファイルを配置し、複数ページを構成する。\n\nNuxt ではページを作成するだけでルートを定義することができる。つまり、 Vue Router を導入したときのように手動でルートを定義する必要がない。",frontmatter:{},index:57,start:1693,end:1700,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:C7,meta:{slide:{raw:`
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
ルート外、例えば外部サイトのリンクを貼る場合は従来の\`<a>\`要素を使うことになる。`,frontmatter:{},index:58,start:1701,end:1721,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:T7,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:59,start:1722,end:1784,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:j7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:60,start:1785,end:1806,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",name:"page-62",component:q7,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:61,start:1807,end:1827,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:61,no:62},__clicksElements:[],__preloaded:!1}},{path:"63",name:"page-63",component:G7,meta:{slide:{raw:`
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

<arrow v-click="1" x1="400" y1="400" x2="220" y2="300" color="#564" width="3" arrowSize="1" />`,frontmatter:{},index:62,start:1828,end:1851,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:62,no:63},__clicksElements:[],__preloaded:!1}},{path:"64",name:"page-64",component:l2,meta:{slide:{raw:`
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
4. 右上に講師のアバターアイコンがあるはずなのでそれをクリック`,frontmatter:{},index:63,start:1852,end:1864,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:63,no:64},__clicksElements:[],__preloaded:!1}},{path:"65",name:"page-65",component:r2,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:64,start:1865,end:1903,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:64,no:65},__clicksElements:[],__preloaded:!1}},{path:"66",name:"page-66",component:m2,meta:{slide:{raw:`
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

https://nuxt.com/docs/guide/directory-structure/pages`,frontmatter:{},index:65,start:1904,end:1924,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:65,no:66},__clicksElements:[],__preloaded:!1}},{path:"67",name:"page-67",component:F2,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:66,start:1925,end:1961,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:66,no:67},__clicksElements:[],__preloaded:!1}},{path:"68",name:"page-68",component:S2,meta:{slide:{raw:`
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
- composables ディレクトリに配置されたコンポジション関数`,frontmatter:{},index:67,start:1962,end:1974,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:67,no:68},__clicksElements:[],__preloaded:!1}},{path:"69",name:"page-69",component:j2,meta:{slide:{raw:`
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

</div>`,frontmatter:{},index:68,start:1975,end:2021,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:68,no:69},__clicksElements:[],__preloaded:!1}},{path:"70",name:"page-70",component:Q2,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:69,start:2022,end:2049,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:69,no:70},__clicksElements:[],__preloaded:!1}},{path:"71",name:"page-71",component:tE,meta:{slide:{raw:`
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

場合によっては（$fetch ではなく） fetch を使うことも検討すること`,frontmatter:{},index:70,start:2050,end:2063,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:70,no:71},__clicksElements:[],__preloaded:!1}},{path:"72",name:"page-72",component:iE,meta:{slide:{raw:`
# VueUse

便利なコンポジション関数を提供しているライブラリ

- スクラッチ（ゼロ）から処理を書くのは車輪の再発明かもしれない
- 既製のライブラリを使用することで効率的に開発することができる
- https://vueuse.org/functions.html をみてみよう
`,title:"VueUse",level:1,content:`# VueUse

便利なコンポジション関数を提供しているライブラリ

- スクラッチ（ゼロ）から処理を書くのは車輪の再発明かもしれない
- 既製のライブラリを使用することで効率的に開発することができる
- https://vueuse.org/functions.html をみてみよう`,frontmatter:{},index:71,start:2064,end:2073,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:71,no:72},__clicksElements:[],__preloaded:!1}},{path:"73",name:"page-73",component:mE,meta:{slide:{raw:`
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

[スタイルガイド](https://ja.vuejs.org/style-guide/)`,frontmatter:{},index:72,start:2074,end:2085,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:72,no:73},__clicksElements:[],__preloaded:!1}},{path:"74",name:"page-74",component:xE,meta:{slide:{raw:`
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

自信がない箇所は復習・質問しましょう！`,frontmatter:{},index:73,start:2086,end:2108,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:73,no:74},__clicksElements:[],__preloaded:!1}},{path:"75",name:"page-75",component:VE,meta:{slide:{raw:`
# 課題 - 付箋アプリをつくってみよう

<div class="text-xs">

マウスドラッグで付箋を動かし、文字を書き込み、色を変えるアプリです。さらに皆さんの追加したい機能を考えて自由につくり替えてみましょう。

<div class="grid grid-cols-2 items-center text-xs font-bold text-gray-500">
  <figure>
  <img src="/sticky-handson.png" class="w-80 mb-4" alt />
    <figcaption>どこからでも付箋の情報を扱える Composables を使う</figcaption>
  </figure>
  <figure>
  <img src="/fig-sticky-handson.png" class="w-80 border border-gray-200 mb-4" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-eqvxvb">まずはサンプルを見てみましょう →</a>
    </figcaption>
  </figure>
</div>

</div>
`,title:"課題 - 付箋アプリをつくってみよう",level:1,content:`# 課題 - 付箋アプリをつくってみよう

<div class="text-xs">

マウスドラッグで付箋を動かし、文字を書き込み、色を変えるアプリです。さらに皆さんの追加したい機能を考えて自由につくり替えてみましょう。

<div class="grid grid-cols-2 items-center text-xs font-bold text-gray-500">
  <figure>
  <img src="/sticky-handson.png" class="w-80 mb-4" alt />
    <figcaption>どこからでも付箋の情報を扱える Composables を使う</figcaption>
  </figure>
  <figure>
  <img src="/fig-sticky-handson.png" class="w-80 border border-gray-200 mb-4" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-eqvxvb">まずはサンプルを見てみましょう →</a>
    </figcaption>
  </figure>
</div>

</div>`,frontmatter:{},index:74,start:2109,end:2131,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:74,no:75},__clicksElements:[],__preloaded:!1}},{path:"76",name:"page-76",component:ME,meta:{slide:{raw:`
# VueUse を使って付箋のドラッグ移動を実現

<div class="text-xs h-11/12">

<p>様々な Vue で使える便利なユーティリティがあります。</p>

<img src="/fig-vueuse.png" alt="VueUse" class="h-8/12" />

<a target="_blank" rel="noopener noreferrer" href="https://vueuse.org/">https://vueuse.org/</a>

<p>
今回は <a target="_blank" rel="noopener noreferrer" href="https://vueuse.org/core/usedraggable/#usedraggable">useDraggable</a> を使います
</p>
</div>
`,title:"VueUse を使って付箋のドラッグ移動を実現",level:1,content:`# VueUse を使って付箋のドラッグ移動を実現

<div class="text-xs h-11/12">

<p>様々な Vue で使える便利なユーティリティがあります。</p>

<img src="/fig-vueuse.png" alt="VueUse" class="h-8/12" />

<a target="_blank" rel="noopener noreferrer" href="https://vueuse.org/">https://vueuse.org/</a>

<p>
今回は <a target="_blank" rel="noopener noreferrer" href="https://vueuse.org/core/usedraggable/#usedraggable">useDraggable</a> を使います
</p>
</div>`,frontmatter:{},index:75,start:2132,end:2148,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:75,no:76},__clicksElements:[],__preloaded:!1}},{path:"77",name:"page-77",component:zE,meta:{slide:{raw:`
# 構成を理解しよう

\`\`\`
├── components/
│ ├── Sticky.vue （付箋単体の情報を格納したコンポーネント）
├── composables/
│ ├── useStickies.vue （付箋全体の情報を一括で管理する Composables）
├── pages/
│ ├── index.vue （ページ）
├── app.vue （ページをラップする雛形）
├── package.json （今回はuseDraggableが含まれています）

\`\`\`

<div class="text-xs leading-5 my-4">

- \`pages/index.vue\` と \`components/Sticky.vue\` は同じ \`composables/useStickies.vue\` を参照していることがわかります
- \`composables/useStickies.vue\` には現在、3 つの付箋の情報が配列で用意されています
- \`composables/useStickies.vue\` には現在、\`add()\`と\`update()\`の関数が用意されていて、別々のコンポーネントから呼び出しが可能になっています

これで付箋の情報を一元管理できることがわかります。

</div>
`,title:"構成を理解しよう",level:1,content:`# 構成を理解しよう

\`\`\`
├── components/
│ ├── Sticky.vue （付箋単体の情報を格納したコンポーネント）
├── composables/
│ ├── useStickies.vue （付箋全体の情報を一括で管理する Composables）
├── pages/
│ ├── index.vue （ページ）
├── app.vue （ページをラップする雛形）
├── package.json （今回はuseDraggableが含まれています）

\`\`\`

<div class="text-xs leading-5 my-4">

- \`pages/index.vue\` と \`components/Sticky.vue\` は同じ \`composables/useStickies.vue\` を参照していることがわかります
- \`composables/useStickies.vue\` には現在、3 つの付箋の情報が配列で用意されています
- \`composables/useStickies.vue\` には現在、\`add()\`と\`update()\`の関数が用意されていて、別々のコンポーネントから呼び出しが可能になっています

これで付箋の情報を一元管理できることがわかります。

</div>`,frontmatter:{},index:76,start:2149,end:2174,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:76,no:77},__clicksElements:[],__preloaded:!1}},{path:"78",name:"page-78",component:GE,meta:{slide:{raw:`
# 機能を追加しよう

<p class="text-xs">先程の簡単なサンプルから以下のサンプルコードを選んで、機能を追加していきましょう。<br />まずは書き写してみるだけでも勉強になります。</p>

<div class="grid grid-cols-3 gap-6 text-xs">
  <figure>
    <img src="/fig-sticky-remove.png" class="p-1 border mb-2" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-a1jojw">削除ボタンの追加 →</a>
      </figcaption>
  </figure>

  <figure>
    <img src="/fig-sticky-photo.png" class="p-1 border mb-2" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-7qahec">付箋に画像を貼る →</a>
      </figcaption>
  </figure>

  <figure>
    <img src="/fig-sticky-add.png" class="p-1 border mb-2" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-ryc4pc">付箋の追加ボタンを新規コンポーネントで作成 →</a>
      </figcaption>
  </figure>
</div>
`,title:"機能を追加しよう",level:1,content:`# 機能を追加しよう

<p class="text-xs">先程の簡単なサンプルから以下のサンプルコードを選んで、機能を追加していきましょう。<br />まずは書き写してみるだけでも勉強になります。</p>

<div class="grid grid-cols-3 gap-6 text-xs">
  <figure>
    <img src="/fig-sticky-remove.png" class="p-1 border mb-2" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-a1jojw">削除ボタンの追加 →</a>
      </figcaption>
  </figure>

  <figure>
    <img src="/fig-sticky-photo.png" class="p-1 border mb-2" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-7qahec">付箋に画像を貼る →</a>
      </figcaption>
  </figure>

  <figure>
    <img src="/fig-sticky-add.png" class="p-1 border mb-2" alt />
    <figcaption>
      <a target="_blank" rel="noopener noreferrer" href="https://stackblitz.com/edit/nuxt-starter-ryc4pc">付箋の追加ボタンを新規コンポーネントで作成 →</a>
      </figcaption>
  </figure>
</div>`,frontmatter:{},index:77,start:2175,end:2203,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:77,no:78},__clicksElements:[],__preloaded:!1}},{path:"79",name:"page-79",component:o6,meta:{slide:{raw:`
# 次はあなたのアイデアで！

例えば...

- 重ね順を変更させたい
- 文字の色、太さ、影など付けたい
- 動画を貼りたい
- カメラを起動させて撮影した写真を貼りたい
- スタンプを貼りたい

など、余裕ができたらあなたのアイデアを実現してみましょう。

ちょっとハードルは上がるかもしれませんが、どう実装するべきかは講師にも相談してみてください。
`,title:"次はあなたのアイデアで！",level:1,content:`# 次はあなたのアイデアで！

例えば...

- 重ね順を変更させたい
- 文字の色、太さ、影など付けたい
- 動画を貼りたい
- カメラを起動させて撮影した写真を貼りたい
- スタンプを貼りたい

など、余裕ができたらあなたのアイデアを実現してみましょう。

ちょっとハードルは上がるかもしれませんが、どう実装するべきかは講師にも相談してみてください。`,frontmatter:{},index:78,start:2204,end:2219,notesHTML:"",filepath:"/home/runner/work/vue-3-practices/vue-3-practices/docs/slides.md",id:78,no:79},__clicksElements:[],__preloaded:!1}},{path:"80",component:ZB,meta:{layout:"end"}}],qs=t6,a6=[{name:"play",path:"/",component:Bv,children:[...qs]},{name:"print",path:"/print",component:KB},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>qn(()=>import("./PresenterPrint-4d5d818b.js"),["assets/PresenterPrint-4d5d818b.js","assets/NoteViewer-e4926269.js","assets/index-6a527584.js"])},{name:"presenter",path:"/presenter/:no",component:()=>qn(()=>import("./Presenter-87d8f9a4.js"),["assets/Presenter-87d8f9a4.js","assets/NoteViewer-e4926269.js","assets/DrawingControls-45958a9e.js","assets/index-6a527584.js","assets/Presenter-214154c4.css"]),beforeEnter:e=>{if(!Sl.remote||Sl.remote===e.query.password)return!0;if(Sl.remote&&e.query.password===void 0){const n=prompt("Enter password");if(Sl.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],An=Z5({history:Yf("/vue-3-practices"),routes:a6});function r6(e,n,{mode:l="replace"}={}){return L({get(){const t=An.currentRoute.value.query[e];return t==null?n??null:Array.isArray(t)?t.filter(Boolean):t},set(t){Se(()=>{An[C(l)]({query:{...An.currentRoute.value.query,[e]:t}})})}})}const Vi=ls(0);Se(()=>{An.afterEach(async()=>{await Se(),Vi.value+=1})});const We=L(()=>An.currentRoute.value),La=L(()=>We.value.query.print!==void 0),c6=L(()=>We.value.query.print==="clicks"),Ye=L(()=>We.value.query.embedded!==void 0),Xe=L(()=>We.value.path.startsWith("/presenter")),Oi=L(()=>La.value&&!c6.value),ea=L(()=>We.value.query.password),p6=L(()=>!Xe.value&&(!Ls.remote||ea.value===Ls.remote)),gc=r6("clicks","0"),Li=L(()=>qs.length-1),i6=L(()=>We.value.path),Ys=L(()=>parseInt(i6.value.split(/\//g).slice(-1)[0])||1);L(()=>Ta(Ys.value));const ve=L(()=>qs.find(e=>e.path===`${Ys.value}`));L(()=>{var e,n,l;return(l=(n=(e=ve.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:l.id});L(()=>{var e,n;return((n=(e=ve.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Ys.value===1?"cover":"default")});const _t=L(()=>qs.find(e=>e.path===`${Math.min(qs.length,Ys.value+1)}`)),u6=L(()=>{var e,n;return Vi.value,((n=(e=ve.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Kn=L({get(){if(Oi.value)return 99999;let e=+(gc.value||0);return isNaN(e)&&(e=0),e},set(e){gc.value=e.toString()}}),To=L(()=>{var e,n;return+(((n=(e=ve.value)==null?void 0:e.meta)==null?void 0:n.clicks)??u6.value.length)}),y6=L(()=>Ys.value<qs.length-1||Kn.value<To.value),d6=L(()=>Ys.value>1||Kn.value>0),f6=L(()=>qs.filter(e=>{var n,l;return(l=(n=e.meta)==null?void 0:n.slide)==null?void 0:l.title}).reduce((e,n)=>(Na(e,n),e),[])),h6=L(()=>Ma(f6.value,ve.value));L(()=>Ra(h6.value));function jn(){To.value<=Kn.value?No():Kn.value+=1}async function Hn(){Kn.value<=0?await Mo():Kn.value-=1}function Ta(e){return Xe.value?`/presenter/${e}`:`/${e}`}function No(){const e=Math.min(qs.length,Ys.value+1);return hl(e)}async function Mo(e=!0){const n=Math.max(1,Ys.value-1);await hl(n),e&&To.value&&An.replace({query:{...We.value.query,clicks:To.value}})}function hl(e,n){return An.push({path:Ta(e),query:{...We.value.query,clicks:n}})}function m6(e){const n=ls(0),{direction:l,distanceX:t,distanceY:a}=df(e,{onSwipeStart(r){r.pointerType==="touch"&&(Zl.value||(n.value=It()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Zl.value)return;const c=Math.abs(t.value),p=Math.abs(a.value);c/window.innerWidth>.3||c>100?l.value===Qe.LEFT?jn():Hn():(p/window.innerHeight>.4||p>200)&&(l.value===Qe.DOWN?Mo():No())}})}async function Dc(){const{saveAs:e}=await qn(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);e(Ip(Ls.download)?Ls.download:Ls.exportFilename?`${Ls.exportFilename}.pdf`:"/vue-3-practicesslidev-exported.pdf",`${Ls.title}.pdf`)}async function H6(e){var n,l;if(e==null){const t=(l=(n=ve.value)==null?void 0:n.meta)==null?void 0:l.slide;if(!(t!=null&&t.filepath))return!1;e=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Na(e,n,l=1){var a,r,c,p,i;const t=(r=(a=n.meta)==null?void 0:a.slide)==null?void 0:r.level;t&&t>l&&e.length>0?Na(e[e.length-1].children,n,l+1):e.push({children:[],level:l,path:n.path,hideInToc:Boolean((c=n.meta)==null?void 0:c.hideInToc),title:(i=(p=n.meta)==null?void 0:p.slide)==null?void 0:i.title})}function Ma(e,n,l=!1,t){return e.map(a=>{const r={...a,active:a.path===(n==null?void 0:n.path),hasActiveParent:l};return r.children.length>0&&(r.children=Ma(r.children,n,r.active||r.hasActiveParent,r)),t&&(r.active||r.activeParent)&&(t.activeParent=!0),r})}function Ra(e,n=1){return e.filter(l=>!l.hideInToc).map(l=>({...l,children:Ra(l.children,n+1)}))}export{F6 as $,ls as A,V6 as B,P6 as C,bs as D,T6 as E,ks as F,Re as G,O6 as H,Qi as I,Xi as J,Zo as K,Se as L,yp as M,Z as N,Wn as O,ia as P,En as Q,v6 as R,Oi as S,_6 as T,Hy as U,zy as V,Tp as W,Lp as X,Op as Y,Ry as Z,$ as _,S6 as a,Pe as a$,k6 as a0,x6 as a1,C6 as a2,E6 as a3,NB as a4,MB as a5,Dc as a6,jn as a7,No as a8,H6 as a9,Di as aA,re as aB,nm as aC,B6 as aD,A6 as aE,To as aF,y6 as aG,_t as aH,dt as aI,Zl as aJ,Bt as aK,mv as aL,Sa as aM,Pa as aN,uv as aO,fm as aP,Oe as aQ,L6 as aR,ln as aS,xl as aT,Vn as aU,je as aV,Qt as aW,$h as aX,Sh as aY,Ph as aZ,Oh as a_,Hn as aa,Mo as ab,We as ac,D6 as ad,ml as ae,Fs as af,M6 as ag,O8 as ah,s as ai,Js as aj,eo as ak,Xs as al,qs as am,Li as an,o as ao,gs as ap,Fa as aq,js as ar,R6 as as,ve as at,V as au,zh as av,m6 as aw,N6 as ax,I6 as ay,g as az,Ys as b,Vp as b0,j6 as b1,ie as b2,yo as b3,Ym as b4,Np as b5,Lh as b6,Ls as c,Kn as d,Xe as e,Ms as f,Ta as g,x as h,b6 as i,w as j,_u as k,G as l,F as m,A as n,w6 as o,$6 as p,se as q,An as r,nt as s,L as t,g6 as u,yr as v,Is as w,up as x,C as y,Hi as z};
