import{I as f}from"./default-BQLg3l6Q.js";import{_ as h,ao as c}from"../index-DbUh889g.js";import{p as l,u as _,f as x}from"./context-BfYGPgxv.js";import{o as P,c as $,k as v,q as g,s as k,e as t,a6 as u}from"../modules/vue-Dm92XYA6.js";import"../modules/shiki-CvIsS016.js";const C={__name:"17",setup(d,{expose:o}){o(),l(c);const{$slidev:r,$nav:e,$clicksContext:n,$clicks:s,$page:p,$renderContext:i,$frontmatter:m}=_(),a={$slidev:r,$nav:e,$clicksContext:n,$clicks:s,$page:p,$renderContext:i,$frontmatter:m,InjectedLayout:f,get frontmatter(){return c},get useSlideContext(){return _},get _provideFrontmatter(){return l},get _frontmatterToProps(){return x}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},I=t("h1",null,"watch と computed の違い",-1),w=t("p",null,[t("code",null,"watch"),u("は値の変化を監視に特化したAPIだが、"),t("code",null,"computed"),u("は値の変化に応じて値を加工（算出）するためのAPI")],-1),S=t("p",null,"値が変化したタイミングで、変化した値の中身が…",-1),T=t("ul",null,[t("li",null,"必要→computedを使いましょう"),t("li",null,"不要→watchを使いましょう")],-1),j=t("p",null,"使用頻度としてはcomputedの方が多いのでcomputedを使いこなせるようになりましょう。",-1);function y(d,o,r,e,n,s){return P(),$(e.InjectedLayout,g(k(e._frontmatterToProps(e.frontmatter,16))),{default:v(()=>[I,w,S,T,j]),_:1},16)}const N=h(C,[["render",y],["__file","/@slidev/slides/17.md"]]);export{N as default};