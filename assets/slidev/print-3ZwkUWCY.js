function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-qwt_F7K2.js","assets/modules/vue-X53O9vh8.js","assets/index-SLfzSeaI.js","assets/modules/shiki-aLti4ydI.js","assets/modules/shiki-Xmz8xnbj.css","assets/index-ViNL0uM2.css","assets/slidev/bottom-TgnYnHtS.js","assets/bottom--pztUTOy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,y as l,M as F,Y as L,J as V,o as r,b as c,l as d,A as e,i as q,c as m,g as S,h as A,F as p,Z as B,e as R,f as j,C as z}from"../modules/vue-X53O9vh8.js";import{G,g as M,S as W,a as D,w as I}from"./bottom-TgnYnHtS.js";import{s as O,a as g,_ as T,c as k,i as H,b as h,u as w,d as x,C as J,e as $,f,p as K,g as X}from"../index-SLfzSeaI.js";import{P as Y}from"./PrintStyle-vQp0OXN5.js";import"../modules/shiki-aLti4ydI.js";const Z=["id"],Q=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(o){const{nav:t}=o,n=l(()=>t.currentSlideRoute.value),i=l(()=>({height:`${O.value}px`,width:`${g.value}px`})),s=F();T(()=>import("./DrawingPreview-qwt_F7K2.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(a=>s.value=a.default);const u=l(()=>`${n.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return L(H,V({nav:t,configs:k,themeConfigs:l(()=>k.themeConfig)})),(a,C)=>(r(),c("div",{id:u.value,class:"print-slide-container",style:A(i.value)},[d(e(G)),d(W,{is:n.value.component,"clicks-context":a.nav.clicksContext.value,class:q(e(M)(n.value)),route:n.value},null,8,["is","clicks-context","class","route"]),s.value?(r(),m(e(s),{key:0,page:n.value.no},null,8,["page"])):S("v-if",!0),d(e(D))],12,Z))}}),N=h(Q,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),U=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(o){const{route:t}=o,{isPrintWithClicks:n}=w(),i=x(t,n.value?0:J);return(s,u)=>(r(),c(p,null,[d(N,{"clicks-context":e(i),nav:e($)(s.route,e(i))},null,8,["clicks-context","nav"]),e(n)?(r(!0),c(p,{key:0},B(e(i).total,a=>(r(),m(N,{key:a,nav:e($)(s.route,e(x)(s.route,a))},null,8,["nav"]))),128)):S("v-if",!0)],64))}}),ee=h(U,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintSlide.vue"]]),te={id:"print-content"},ne=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(o){const t=o,{slides:n,currentRoute:i}=w(),s=l(()=>t.width),u=l(()=>t.width/f.value),a=l(()=>s.value/u.value),C=l(()=>a.value<f.value?s.value/g.value:u.value*f.value/g.value);let v=n.value;i.value.query.range&&(v=K(v.length,i.value.query.range).map(P=>v[P-1]));const E=l(()=>({"select-none":!k.selectable}));return L(X,C),(y,P)=>(r(),c("div",{id:"print-container",class:q(E.value)},[R("div",te,[(r(!0),c(p,null,B(e(v),b=>(r(),m(ee,{key:b.no,route:b},null,8,["route"]))),128))]),j(y.$slots,"controls")],2))}}),se=h(ne,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},re=_({__name:"print",setup(o){const{isPrintMode:t}=w();return z(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,i)=>(r(),c(p,null,[e(t)?(r(),m(Y,{key:0})):S("v-if",!0),R("div",ae,[d(se,{class:"w-full h-full",style:A({background:"var(--slidev-slide-container-background, black)"}),width:e(I).width.value},null,8,["style","width"])])],64))}}),de=h(re,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/pages/print.vue"]]);export{de as default};
