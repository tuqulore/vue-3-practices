const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-CDa9H1EJ.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-K1eqKprS.js","assets/modules/vue-6zbViVe9.js","assets/modules/shiki-Ctnqx5hv.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-GI2q9kqf.js","assets/index-CEmGoRbI.js","assets/index-DxLkH51-.css","assets/SlideWrapper-B0cQzmjg.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-Bc-dGMtE.js","assets/slidev/shortcuts-Cmg85Zyr.js","assets/slidev/context-DOyBpjw5.js","assets/modules/unplugin-icons-NMRSJG0B.js","assets/shortcuts-Cu75pJXu.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{z as b,E as N,ao as H,ap as L,d as h,ad as z,b as f,o as a,aq as A,f as g,i as d,C as e,g as i,j as F,n as E,an as D,w as M,ac as O,Q as x,F as I,e as v,k as U,r as W}from"../modules/vue-6zbViVe9.js";import{c as j,a as q}from"./SlideWrapper-GI2q9kqf.js";import{q as G,v as V,a as P,w as K,x as C,y as $,d as S,j as k,z as Q,A as c,B as w,D as X}from"../index-CEmGoRbI.js";import{c as Y,G as J,d as Z,u as ee,r as te,a as se,o as oe,b as ae,S as ne}from"./shortcuts-Cmg85Zyr.js";import{b as le}from"../modules/unplugin-icons-NMRSJG0B.js";import"../modules/shiki-Ctnqx5hv.js";import"./context-DOyBpjw5.js";import"./IconButton.vue_vue_type_script_setup_true_lang-Bc-dGMtE.js";const ie=2e3;function re(m){const n=b(()=>m.value&&G.value);function r(){document.body.style.cursor="none"}function o(){document.body.style.cursor=""}N(n,u=>{u||o()}),L(o);let t=null;H(document.body,["pointermove","pointerdown"],()=>{o(),t&&clearTimeout(t),n.value?t=setTimeout(r,ie):t=null},{passive:!0})}const ue="/vue-3-practices/assets/logo-BYkHSa_O.png",de={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ce=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:n}){const r=m,t=z(r,"modelValue",n);function u(){t.value=!1}return(_,s)=>(a(),f(A,null,[e(t)?(a(),g("div",de,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=p=>u())}),i("div",{class:E(["m-auto rounded-md bg-main shadow",r.class]),"dark:border":"~ main"},[F(_.$slots,"default")],2)])):d("v-if",!0)],1024))}}),me={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},pe=["innerHTML"],fe=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:n}){const t=z(m,"modelValue",n),u=b(()=>typeof V.info=="string");return(_,s)=>(a(),f(ce,{modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=p=>D(t)?t.value=p:null),class:"px-6 py-4"},{default:M(()=>[i("div",me,[u.value?(a(),g("div",{key:0,class:"mb-4",innerHTML:e(V).info},null,8,pe)):d("v-if",!0),s[1]||(s[1]=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:ue,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),O("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ve=h({__name:"Controls",setup(m){const{isEmbedded:n}=P(),r=!V.drawings.presenterOnly&&!n.value,o=x();r&&K(()=>import("./DrawingControls-CDa9H1EJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(_=>o.value=_.default);const t=x(),u=x();return(_,s)=>(a(),g(I,null,[o.value?(a(),f(e(o),{key:0})):d("v-if",!0),v(Y),v(J),t.value?(a(),f(e(t),{key:1})):d("v-if",!0),u.value?(a(),f(e(u),{key:2,modelValue:e(C),"onUpdate:modelValue":s[0]||(s[0]=p=>D(C)?C.value=p:null)},null,8,["modelValue"])):d("v-if",!0),e(V).info?(a(),f(fe,{key:3,modelValue:e($),"onUpdate:modelValue":s[1]||(s[1]=p=>D($)?$.value=p:null)},null,8,["modelValue"])):d("v-if",!0),v(Z)],64))}}),_e={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ge=h({__name:"PresenterMouse",setup(m){return(n,r)=>{const o=le;return e(S).cursor?(a(),g("div",_e,[v(o,{class:"absolute stroke-white dark:stroke-black",style:U({left:`${e(S).cursor.x}%`,top:`${e(S).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}}}),$e=h({__name:"play",setup(m){const{next:n,prev:r,isPrintMode:o,isPlaying:t,isEmbedded:u}=P(),{isDrawing:_}=j(),s=W();function p(l){var y;k.value||l.button===0&&((y=l.target)==null?void 0:y.id)==="slide-container"&&(l.pageX/window.innerWidth>.5?n():r())}ee(s),te(),se(),re(b(()=>t.value&&!u.value&&!k.value));const R=b(()=>Q.value||k.value),T=x(),B=b(()=>{let l="";return c.value.brightness!==w.brightness&&(l+=`brightness(${c.value.brightness}) `),c.value.contrast!==w.contrast&&(l+=`contrast(${c.value.contrast}) `),c.value.sepia!==w.sepia&&(l+=`sepia(${c.value.sepia}) `),c.value.hueRotate!==w.hueRotate&&(l+=`hue-rotate(${c.value.hueRotate}deg) `),c.value.invert&&(l+="invert(1) "),{filter:l}});return(l,y)=>(a(),g(I,null,[i("div",{id:"page-root",ref_key:"root",ref:s,class:E(["grid",e(X)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[v(q,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"","content-style":B.value,onPointerdown:p,onContextmenu:e(oe)},{default:M(()=>[v(ne,{"render-context":"slide"}),v(ge)]),controls:M(()=>[e(o)?d("v-if",!0):(a(),g("div",{key:0,class:E(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[R.value?"!opacity-100 right-0":"opacity-0 p-2",e(_)?"pointer-events-none":""]])},[v(ae,{persist:R.value},null,8,["persist"])],2))]),_:1},8,["content-style","onContextmenu"]),T.value&&e(k)?(a(),f(e(T),{key:0,resize:!0})):d("v-if",!0)],2),e(o)?d("v-if",!0):(a(),f(ve,{key:0})),y[0]||(y[0]=i("div",{id:"twoslash-container"},null,-1))],64))}});export{$e as default};
