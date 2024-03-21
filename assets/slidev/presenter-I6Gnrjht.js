import{_ as X,a as Z,b as Y,c as ee,d as te}from"../modules/unplugin-icons-PW8Ss-YZ.js";import{t as M,a1 as se,d as V,c as x,i as f,A as s,o as i,y as k,b as h,e as t,l as a,F as j,x as $,g as N,Z as oe,a2 as ne,a3 as le,h as z,p as H,a as J,D as A,M as re,_ as ae,J as ie,a4 as ce,a5 as ue,k as S,a6 as de}from"../modules/vue-wWbGAgj9.js";import{b as q,C as pe,u as ve,c as L,h as me,j as _e,d as fe,k as xe}from"../index-duDm_B_0.js";import{r as he,u as ke,S as O,I as G,Q as ye,a as ge,N as be,G as Ce}from"./SlidesShow-T0h1uaZc.js";import{s as we,b as T,p as Se,S as $e,g as Ne,c as ze,i as Fe,d as Ie}from"./bottom-iB_D3luO.js";import{N as De}from"./NoteDisplay-6ho1-d-k.js";import Te from"./DrawingControls-v17v6I6g.js";import{u as Me}from"./DrawingPreview-TgRPNWgJ.js";import"../modules/shiki-0H6c0mr-.js";function je(n){if(n==null)return{info:M(),update:async()=>{}};const r=`/@slidev/slide/${n}.json`,{data:e,execute:o}=se(r).json().get();return o(),{info:e,update:async p=>await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(p)}).then(c=>c.json())}}const Ve=V({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(n){const r=n,{info:e}=je(r.no);return(o,d)=>{var p,c;return i(),x(De,{class:f(r.class),note:(p=s(e))==null?void 0:p.note,"note-html":(c=s(e))==null?void 0:c.noteHTML,"clicks-context":o.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),qe=q(Ve,[["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/NoteStatic.vue"]]),Q=n=>(H("data-v-46333647"),n=n(),J(),n),Be=["title"],Pe={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},Re=Q(()=>t("div",{"flex-auto":""},null,-1)),Ae={"text-primary":""},Le=Q(()=>t("span",{op25:""},"/",-1)),Oe={op50:""},Ge=["max"],He=V({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(n){const r=n,e=k(()=>r.clicksContext.total),o=k({get(){return r.clicksContext.current>e.value?-1:r.clicksContext.current},set(c){r.clicksContext.current=c}}),d=k(()=>Array.from({length:e.value+1},(c,u)=>u));function p(){(o.value<0||o.value>e.value)&&(o.value=0)}return(c,u)=>{const F=X;return i(),h("div",{class:f(["flex gap-1 items-center select-none",e.value?"":"op50"]),title:`Clicks in this slide: ${e.value}`},[t("div",Pe,[a(F,{"text-sm":"",op50:""}),Re,o.value>=0&&o.value!==s(pe)?(i(),h(j,{key:0},[t("span",Ae,$(o.value),1),Le],64)):N("v-if",!0),t("span",Oe,$(e.value),1)]),t("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:u[2]||(u[2]=l=>o.value=c.clicksContext.total)},[(i(!0),h(j,null,oe(d.value,l=>(i(),h("div",{key:l,border:"y main","of-hidden":"",relative:"",class:f([l===0?"rounded-l border-l":"",l===e.value?"rounded-r border-r":""]),style:z({width:e.value>0?`${1/e.value*100}%`:"100%"})},[t("div",{absolute:"","inset-0":"",class:f(l<=o.value?"bg-primary op15":"")},null,2),t("div",{class:f([+l==+o.value?"text-primary font-bold op100 border-primary":"op30 border-main",l===0?"rounded-l":"",l===e.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},$(l),3)],6))),128)),ne(t("input",{"onUpdate:modelValue":u[0]||(u[0]=l=>o.value=l),class:"range",absolute:"","inset-0":"",type:"range",min:0,max:e.value,step:1,"z-10":"",op0:"",style:z({"--thumb-width":`${1/(e.value+1)*100}%`}),onMousedown:p,onFocus:u[1]||(u[1]=l=>{var b;return(b=l.currentTarget)==null?void 0:b.blur()})},null,44,Ge),[[le,o.value]])],32)],10,Be)}}}),Je=q(He,[["__scopeId","data-v-46333647"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/internals/ClicksSlider.vue"]]),B=n=>(H("data-v-70568663"),n=n(),J(),n),Qe={class:"bg-main h-full slidev-presenter"},Ue=B(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),We={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Ee=B(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Ke={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Xe={class:"border-t border-main py-1 px-2 text-sm"},Ze={class:"grid-section bottom flex"},Ye=B(()=>t("div",{"flex-auto":""},null,-1)),et={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},tt={class:"progress-bar"},st=V({__name:"presenter",setup(n){const r=M();he(),ke(r);const{clicksContext:e,currentSlideNo:o,currentSlideRoute:d,hasNext:p,nextRoute:c,slides:u,queryClicks:F,getPrimaryClicks:l,total:b}=ve(),{isDrawing:U}=Me(),W=L.titleTemplate.replace("%s",L.title||"Slidev");me({title:`Presenter - ${W}`}),M(!1);const{timer:E,resetTimer:P}=_e(),K=k(()=>u.value.map(w=>fe(w))),v=k(()=>e.value.current<e.value.total?[d.value,e.value.current+1]:p.value?[c.value,0]:null),C=k(()=>v.value&&K.value[v.value[0].no-1]);return A([d,F],()=>{C.value&&(C.value.current=v.value[1])},{immediate:!0}),re(),ae(()=>{const w=r.value.querySelector("#slide-content"),_=ie(ce()),I=ue();A(()=>{if(!I.value||U.value||!we.value)return;const m=w.getBoundingClientRect(),y=(_.x-m.left)/m.width*100,g=(_.y-m.top)/m.height*100;if(!(y<0||y>100||g<0||g>100))return{x:y,y:g}},m=>{xe.cursor=m})}),(w,_)=>{var R;const I=Z,m=Y,y=ee,g=te;return i(),h(j,null,[t("div",Qe,[t("div",{class:f(["grid-container",`layout${s(Se)}`])},[t("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col"},[a(O,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto"},{default:S(()=>[a(ge,{"render-context":"presenter"})]),_:1}),(i(),x(Je,{key:(R=s(d))==null?void 0:R.no,"clicks-context":s(l)(s(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Ue],512),t("div",We,[v.value&&C.value?(i(),x(O,{key:"next",class:"h-full w-full"},{default:S(()=>[(i(),x($e,{is:v.value[0].component,key:v.value[0].no,"clicks-context":C.value,class:f(s(Ne)(v.value[0])),route:v.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):N("v-if",!0),Ee]),N(" Notes "),(i(),h("div",Ke,[(i(),x(qe,{key:`static-${s(o)}`,no:s(o),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:z({fontSize:`${s(ze)}em`}),"clicks-context":s(e)},null,8,["no","style","clicks-context"])),t("div",Xe,[a(G,{title:"Increase font size",onClick:s(Fe)},{default:S(()=>[a(I)]),_:1},8,["onClick"]),a(G,{title:"Decrease font size",onClick:s(Ie)},{default:S(()=>[a(m)]),_:1},8,["onClick"]),N("v-if",!0)])])),t("div",Ze,[a(be,{persist:!0}),Ye,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:_[2]||(_[2]=(...D)=>s(P)&&s(P)(...D))},[a(y,{class:"absolute"}),a(g,{class:"absolute opacity-0"})]),t("div",et,$(s(E)),1)]),(i(),x(Te,{key:2}))],2),t("div",tt,[t("div",{class:"progress h-3px bg-primary transition-all",style:z({width:`${(s(o)-1)/(s(b)-1)*100}%`})},null,4)])]),a(Ce),a(ye,{modelValue:s(T),"onUpdate:modelValue":_[3]||(_[3]=D=>de(T)?T.value=D:null)},null,8,["modelValue"])],64)}}}),pt=q(st,[["__scopeId","data-v-70568663"],["__file","/home/runner/work/vue-3-practices/vue-3-practices/node_modules/@slidev/client/pages/presenter.vue"]]);export{pt as default};
