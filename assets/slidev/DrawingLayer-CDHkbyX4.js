import{d as l,t as u,ac as c,D as i,E as m,o as p,b as f,i as _,A as s}from"../modules/vue-BgoORXJJ.js";import{u as d}from"./context-DmXEHb5M.js";import{c as v}from"./DrawingPreview-DFFSvp1N.js";import{_ as g}from"../index-CodU1En5.js";import"../modules/shiki-BLmio_L-.js";const w=l({__name:"DrawingLayer",setup(h){const{drauu:e,drawingEnabled:a,loadCanvas:t}=v(),r=d().$scale,n=u();return c(()=>{e.mount(n.value,n.value.parentElement),i(r,o=>e.options.coordinateScale=1/o,{immediate:!0}),t()}),m(()=>{e.unmount()}),(o,D)=>(p(),f("svg",{ref_key:"svg",ref:n,class:_(["w-full h-full absolute top-0",{"pointer-events-none":!s(a),"touch-none":s(a)}])},null,2))}}),b=g(w,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{b as default};
