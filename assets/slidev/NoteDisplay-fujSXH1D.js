import{d as M,y as H,t as B,D as P,n as T,a7 as I,o as _,b as h,i as y,e as D,x as E}from"../modules/vue-DIsqvsVl.js";import{C as N,_ as K}from"../index-Bd05aFLp.js";const d="slidev-note-fade",l="slidev-note-click-mark",R=M({__name:"NoteDisplay",props:{class:{type:[String,Array],required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1},clicksContext:{type:null,required:!1},autoScroll:{type:Boolean,required:!1}},emits:["markerDblclick","markerClick"],setup(g,{expose:C,emit:c}){C();const o=g,f=c,k=H(()=>{var r;return o.clicksContext!=null&&((r=o.noteHtml)==null?void 0:r.includes("slidev-note-click-mark"))}),a=B(null);function v(){var b;if(!a.value||!k.value)return;const r=Array.from(a.value.querySelectorAll(`.${l}`)),n=+(((b=o.clicksContext)==null?void 0:b.current)??N),i=n<0||n>=N,S=new Set;function L(e){!e||e===a.value||(S.add(e),e.parentElement&&L(e.parentElement))}const w=new Map;for(const e of r){const t=e.parentElement,s=Number(e.dataset.clicks);w.set(s,e),L(t),Array.from(t.childNodes).forEach(m=>{if(m.nodeType===3){const A=document.createElement("span");A.textContent=m.textContent,t.insertBefore(A,m),m.remove()}})}const q=Array.from(a.value.querySelectorAll("*"));let u=0;const p=new Map;for(const e of q)p.has(u)||p.set(u,[]),p.get(u).push(e),e.classList.contains(l)&&(u=Number(e.dataset.clicks)||u+1);for(const[e,t]of p)i?t.forEach(s=>s.classList.remove(d)):t.forEach(s=>s.classList.toggle(d,S.has(s)?!1:e!==n));for(const[e,t]of w)t.classList.remove(d),t.classList.toggle(`${l}-past`,i?!1:e<n),t.classList.toggle(`${l}-active`,i?!1:e===n),t.classList.toggle(`${l}-next`,i?!1:e===n+1),t.classList.toggle(`${l}-future`,i?!1:e>n+1),t.ondblclick=s=>{f("markerDblclick",s,e),!s.defaultPrevented&&(o.clicksContext.current=e,s.stopPropagation(),s.stopImmediatePropagation())},t.onclick=s=>{f("markerClick",s,e)},o.autoScroll&&e===n&&t.scrollIntoView({block:"center",behavior:"smooth"})}P(()=>{var r;return[o.noteHtml,(r=o.clicksContext)==null?void 0:r.current]},()=>{T(()=>{v()})},{immediate:!0}),I(()=>{v()});const x={props:o,emit:f,withClicks:k,noteDisplay:a,CLASS_FADE:d,CLASS_MARKER:l,highlightNote:v};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),V=["innerHTML"],j=["textContent"],z=["textContent"];function F(g,C,c,o,f,k){return c.noteHtml?(_(),h("div",{key:0,ref:"noteDisplay",class:y(["prose overflow-auto outline-none slidev-note",[o.props.class,o.withClicks?"slidev-note-with-clicks":""]]),innerHTML:c.noteHtml},null,10,V)):c.note?(_(),h("div",{key:1,class:y(["prose overflow-auto outline-none slidev-note",o.props.class])},[D("p",{textContent:E(c.note)},null,8,j)],2)):(_(),h("div",{key:2,class:y(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",o.props.class])},[D("p",{textContent:E(o.props.placeholder||"No notes.")},null,8,z)],2))}const G=K(R,[["render",F],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{G as N};
