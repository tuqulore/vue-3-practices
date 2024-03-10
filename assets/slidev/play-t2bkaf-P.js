function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-YGONyPOz.js","assets/modules/unplugin-icons-l4qQ5VLL.js","assets/modules/vue-X53O9vh8.js","assets/modules/shiki-aLti4ydI.js","assets/modules/shiki-Xmz8xnbj.css","assets/slidev/DrawingPreview-6NSSE_on.js","assets/index-muK01MNA.js","assets/index-YB8YFZ7K.css","assets/slidev/bottom-RtwGBLrn.js","assets/bottom--pztUTOy.css","assets/slidev/SlidesShow-jS2qE2Um.js","assets/SlidesShow-wVBka4qJ.css","assets/DrawingControls-uU9aGS-d.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as y,c as g,e as E,_ as I}from"../index-muK01MNA.js";import{d as h,a7 as P,o as l,c as u,A as e,b as k,e as t,f as B,i as D,g as n,a8 as R,y as $,k as M,a6 as _,$ as A,M as w,l as d,F as z,t as O,h as T}from"../modules/vue-X53O9vh8.js";import{b as x,e as C,f as S,h as U,j as N,w as L,k as W,l as j}from"./bottom-RtwGBLrn.js";import{Q as F,G,r as H,u as Q,S as J,a as K,N as X}from"./SlidesShow-jS2qE2Um.js";import{P as q}from"./PrintStyle-Em87hh7c.js";import{u as Y}from"./DrawingPreview-6NSSE_on.js";import"../modules/shiki-aLti4ydI.js";import"../modules/unplugin-icons-l4qQ5VLL.js";const Z="/vue-3-practices/assets/logo-WJB0mvzm.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,o=P(i,"modelValue",a);function s(){o.value=!1}return(m,r)=>(l(),u(R,null,[e(o)?(l(),k("div",ee,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=p=>s())}),t("div",{class:D(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[B(m.$slots,"default")],2)])):n("v-if",!0)],1024))}}),se=y(oe,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Modal.vue"]]),te={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},le=["innerHTML"],ae=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),A("dev ")])])],-1),ie=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const o=P(c,"modelValue",a),s=$(()=>typeof g.info=="string");return(m,r)=>(l(),u(se,{modelValue:e(o),"onUpdate:modelValue":r[0]||(r[0]=p=>_(o)?o.value=p:null),class:"px-6 py-4"},{default:M(()=>[t("div",te,[s.value?(l(),k("div",{key:0,class:"mb-4",innerHTML:e(g).info},null,8,le)):n("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=y(ie,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=h({__name:"Controls",setup(c){const a=w(),i=w();return(f,o)=>(l(),k(z,null,[d(F,{modelValue:e(x),"onUpdate:modelValue":o[0]||(o[0]=s=>_(x)?x.value=s:null)},null,8,["modelValue"]),d(G),a.value?(l(),u(e(a),{key:0})):n("v-if",!0),i.value?(l(),u(e(i),{key:1,modelValue:e(C),"onUpdate:modelValue":o[1]||(o[1]=s=>_(C)?C.value=s:null)},null,8,["modelValue"])):n("v-if",!0),e(g).info?(l(),u(ne,{key:2,modelValue:e(S),"onUpdate:modelValue":o[2]||(o[2]=s=>_(S)?S.value=s:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),ue=y(re,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/Controls.vue"]]),de=h({__name:"play",setup(c){H();const{next:a,prev:i,isEmbedded:f,isPrintMode:o}=E(),{isDrawing:s}=Y(),m=O();function r(v){var b;N.value||((b=v.target)==null?void 0:b.id)==="slide-container"&&(v.screenX/window.innerWidth>.6?a():i())}Q(m);const p=$(()=>U.value||N.value);w();const V=w();return I(()=>import("./DrawingControls-YGONyPOz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(v=>V.value=v.default),(v,b)=>(l(),k(z,null,[e(o)?(l(),u(q,{key:0})):n("v-if",!0),t("div",{id:"page-root",ref_key:"root",ref:m,class:D(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[d(J,{class:"w-full h-full",style:T({background:"var(--slidev-slide-container-background, black)"}),width:e(o)?e(L).width.value:void 0,scale:e(W),"is-main":!0,onPointerdown:r},{default:M(()=>[d(K,{"render-context":"slide"})]),controls:M(()=>[t("div",{class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[p.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[d(X,{class:"m-auto",persist:p.value},null,8,["persist"])],2),!e(g).drawings.presenterOnly&&!e(f)&&V.value?(l(),u(e(V),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),d(ue)],64))}}),ye=y(de,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/pages/play.vue"]]);export{ye as default};
