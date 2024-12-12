import{d as x,O as T,Q as j,o as V,c as z,F as E,aE as G,v as d,aF as v,aG as R,l as c,ae as F,aH as M,k as m,e as t,aa as s,q as O,s as K,B}from"../modules/vue-CKPKsHJ-.js";import{ad as L,ag as D,ah as P,C as q}from"../index-Bv5_A5sz.js";import{u as _,f as H}from"./context-6ut54Adg.js";import{I as J}from"./default-QB2BoDzq.js";import"../modules/shiki-CVgb-X6J.js";const Q=x({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(u){const o=u,{$clicksContext:p}=_(),y=L();let g=+o.size;return Number.isNaN(g)&&(console.warn(`[slidev] Invalid size for VClickGap: ${o.size}`),g=1),T(()=>{const f=p.currentOffset+g-1;p.register(y,{max:f,delta:g})}),j(()=>{p.unregister(y)}),(f,n)=>(V(),z(E))}}),I=["ul","ol"],U=x({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var S,$;const u=+this.every,o=D(this.at),p=typeof o=="string";if(!o){console.warn("[slidev] Invalid at prop for v-clicks component:",o);return}const y=G("click"),g=(i,l)=>F(i,[[y,l,"",{hide:this.hide,fade:this.fade}]]),f=i=>i.flatMap(l=>v(l)&&typeof l.type=="symbol"&&Array.isArray(l.children)?f(l.children):[l]);let n=($=(S=this.$slots).default)==null?void 0:$.call(S);if(!n)return;n=f(P(n));const b=(i,l=1)=>f(i).map(r=>{if(!v(r))return r;if(I.includes(r.type)&&Array.isArray(r.children)){const h=a(r.children,l+1);return d(r,{},h)}return d(r)});let A=1,e=0;const a=(i,l=1)=>f(i).map(r=>{if(!v(r)||r.type===R)return r;const h=+o+Math.ceil(A++/u)-1;let N;l<+this.depth&&Array.isArray(r.children)?N=d(r,{},b(r.children,l)):N=d(r);const k=h-e;return e=h,g(N,p?k>=0?`+${k}`:`${k}`:h)}),C=()=>c(Q,{size:+o+Math.ceil((A-1)/u)-1-e});if(this.handleSpecialElements){if(n.length===1&&I.includes(n[0].type)&&Array.isArray(n[0].children))return d(n[0],{},[...a(n[0].children),C()]);if(n.length===1&&n[0].type==="table"){const i=n[0];if(Array.isArray(i.children))return d(i,{},i.children.map(l=>v(l)?l.type==="tbody"&&Array.isArray(l.children)?d(l,{},[...a(l.children),C()]):d(l):l))}}return[...a(n),C()]}}),W=x({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:u=>d("span",u)}},render(){return d(U,{every:q,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var u,o;return(o=(u=this.$slots).default)==null?void 0:o.call(u).map(p=>p.type===M?this.wrapText(p):p)}})}}),X={__name:"slides.md__slidev_58",setup(u){const{$slidev:o,$nav:p,$clicksContext:y,$clicks:g,$page:f,$renderContext:n,$frontmatter:b}=_();return y.setup(),(A,e)=>{const a=W;return V(),z(J,O(K(B(H)(B(b),57))),{default:m(()=>[e[12]||(e[12]=t("h1",null,"コンポーザブルを使うときの注意",-1)),e[13]||(e[13]=t("p",null,[s("コンポーザブルの引数への値の渡しかたによっては"),t("strong",null,"リアクティビティが失われてしまう（！）")],-1)),e[14]||(e[14]=t("p",null,[s("このうちいくつが "),t("code",null,"props.hoge"),s(" のリアクティビティを保って useComposable() に値を渡せるでしょうか…？")],-1)),t("ol",null,[t("li",null,[c(a,null,{default:m(()=>e[0]||(e[0]=[s("NG: ")])),_:1}),e[1]||(e[1]=t("code",null,"useComposable(props.hoge)",-1))]),t("li",null,[c(a,null,{default:m(()=>e[2]||(e[2]=[s("OK: ")])),_:1}),e[3]||(e[3]=t("code",null,'const hoge = toRef(props, "hoge"); useComposable(hoge)',-1))]),t("li",null,[c(a,null,{default:m(()=>e[4]||(e[4]=[s("OK: ")])),_:1}),e[5]||(e[5]=t("code",null,"const { hoge } = toRefs(props); useComposable(hoge)",-1))]),t("li",null,[c(a,null,{default:m(()=>e[6]||(e[6]=[s("NG: ")])),_:1}),e[7]||(e[7]=t("code",null,"const hoge = ref(props.hoge); useComposable(hoge)",-1))]),t("li",null,[c(a,null,{default:m(()=>e[8]||(e[8]=[s("OK: ")])),_:1}),e[9]||(e[9]=t("code",null,"useComposable(() => props.hoge)",-1))])]),c(a,null,{default:m(()=>e[10]||(e[10]=[t("p",null,[s("props や reactive() の値は "),t("strong",null,[s("必ず Ref 型か"),t("a",{href:"https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/get#%E8%A7%A3%E8%AA%AC",target:"_blank"},"ゲッター関数"),s("にしてコンポーザブルに渡す")]),s("こと！")],-1),t("p",null,[s("4. は hoge のリアクティブな値が渡せているけど props.hoge と値は同期されない"),t("br"),t("code",null,"ref(props.hoge)"),s(" で props.hoge とのリアクティビティが失われるため")],-1)])),_:1}),c(a,null,{default:m(()=>e[11]||(e[11]=[t("p",null,[s("コンポーザブルでは受け取った引数をどう参照すればいい？.valueつけないとだめ？→"),t("a",{href:"https://ja.vuejs.org/api/reactivity-utilities#tovalue",target:"_blank"},"toValue()"),s("を使おう")],-1),t("p",null,[s("興味がある人向け："),t("a",{href:"https://ja.vuejs.org/guide/reusability/composables.html#conventions-and-best-practices",target:"_blank"},"慣例とベストプラクティス"),s("を読もう！")],-1)])),_:1})]),_:1},16)}}},se=X;export{se as default};
