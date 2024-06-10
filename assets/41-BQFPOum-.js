import{u as p,p as g,f as u}from"./slidev/context-BfYGPgxv.js";import{o as f,b as $,c as v,k as y,e as i,l as m,m as A,q as x,s as E,a6 as s}from"./modules/vue-Dm92XYA6.js";import{_ as C,aT as B}from"./index-DbUh889g.js";import{_ as F}from"./slidev/CodeBlockWrapper-DcCHhxXs.js";import{I as b}from"./slidev/default-BQLg3l6Q.js";import"./modules/shiki-CvIsS016.js";import"./modules/unplugin-icons-iKn5c9_2.js";const P={__name:"EmitChild",emits:["child-clicked"],setup(d,{expose:e,emit:a}){e();const{$slidev:t,$nav:l,$clicksContext:h,$clicks:n,$page:k,$renderContext:o,$frontmatter:r}=p(),c=a;function _(){c("child-clicked","Hello!")}const D={$slidev:t,$nav:l,$clicksContext:h,$clicks:n,$page:k,$renderContext:o,$frontmatter:r,emit:c,clickHandler:_,get useSlideContext(){return p},get _provideFrontmatter(){return g},get _frontmatterToProps(){return u}};return Object.defineProperty(D,"__isScriptSetup",{enumerable:!1,value:!0}),D}};function S(d,e,a,t,l,h){return f(),$("button",{onClick:t.clickHandler},"emit !")}const T=C(P,[["render",S],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitChild.vue"]]),H={__name:"EmitParent",setup(d,{expose:e}){e();const{$slidev:a,$nav:t,$clicksContext:l,$clicks:h,$page:n,$renderContext:k,$frontmatter:o}=p();function r(_){alert(_)}const c={$slidev:a,$nav:t,$clicksContext:l,$clicks:h,$page:n,$renderContext:k,$frontmatter:o,clicked:r,get useSlideContext(){return p},get _provideFrontmatter(){return g},get _frontmatterToProps(){return u},ChildComponent:T};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function j(d,e,a,t,l,h){return f(),v(t.ChildComponent,{onChildClicked:t.clicked})}const w=C(H,[["render",j],["__file","/home/runner/work/vue-3-practices/vue-3-practices/docs/components/EmitParent.vue"]]),I={__name:"41",setup(d,{expose:e}){e(),g(B);const{$slidev:a,$nav:t,$clicksContext:l,$clicks:h,$page:n,$renderContext:k,$frontmatter:o}=p(),r={$slidev:a,$nav:t,$clicksContext:l,$clicks:h,$page:n,$renderContext:k,$frontmatter:o,InjectedLayout:b,get frontmatter(){return B},get useSlideContext(){return p},get _provideFrontmatter(){return g},get _frontmatterToProps(){return u}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},N=i("h1",null,"イベント購読を用いた親コンポーネントへのデータの受け渡し",-1),O=i("p",null,"子コンポーネントでイベントを発火させることによって可能",-1),V={class:"flex gap-8"},L={class:"flex-shrink"},q=i("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),z=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-vue"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ChildComponent"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"./ChildComponent.vue"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," clicked"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"message"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  alert"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"message"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"ChildComponent"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," @"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"child-clicked"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"clicked"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),R={class:"flex-shrink"},W=i("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),G=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-vue"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," emit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," defineEmits"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(["),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"child-clicked"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," clickHandler"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  emit"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"child-clicked"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Hello!"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," @"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"click"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"clickHandler"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"emit !"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),J={class:"flex-shrink-0"},K=i("p",{class:"text-xs"},"実行サンプル",-1);function M(d,e,a,t,l,h){const n=F,k=w;return f(),v(t.InjectedLayout,x(E(t._frontmatterToProps(t.frontmatter,40))),{default:y(()=>[N,O,i("div",V,[i("div",L,[q,m(n,A({},{ranges:[]}),{default:y(()=>[z]),_:1},16)]),i("div",R,[W,m(n,A({},{ranges:[]}),{default:y(()=>[G]),_:1},16)]),i("div",J,[K,m(k)])])]),_:1},16)}const ti=C(I,[["render",M],["__file","/@slidev/slides/41.md"]]);export{ti as default};