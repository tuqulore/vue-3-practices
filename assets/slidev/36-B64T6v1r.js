import{_ as D}from"./CodeBlockWrapper-DcCHhxXs.js";import{I as f}from"./default-BQLg3l6Q.js";import{_ as B,aO as p}from"../index-DbUh889g.js";import{p as d,u as g,f as u}from"./context-BfYGPgxv.js";import{o as A,c as C,k as h,e as i,l as o,m as y,q as v,s as F,a6 as s}from"../modules/vue-Dm92XYA6.js";import"../modules/unplugin-icons-iKn5c9_2.js";import"../modules/shiki-CvIsS016.js";const x={__name:"36",setup(c,{expose:e}){e(),d(p);const{$slidev:k,$nav:t,$clicksContext:l,$clicks:n,$page:a,$renderContext:_,$frontmatter:m}=g(),r={$slidev:k,$nav:t,$clicksContext:l,$clicks:n,$page:a,$renderContext:_,$frontmatter:m,InjectedLayout:f,get frontmatter(){return p},get useSlideContext(){return g},get _provideFrontmatter(){return d},get _frontmatterToProps(){return u}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},E=i("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),b=i("p",null,"親コンポーネントから子コンポーネントに 文字列 を渡してみる",-1),P={class:"flex gap-8"},$=i("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),S=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-vue"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ChildComponent"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"./ChildComponent.vue"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"ChildComponent"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," title"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Hello!"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),T=i("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),j=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-vue"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ref"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"vue"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," props"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," defineProps"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  title"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," String"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"});")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," message"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"props"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"title"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"p"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">{{"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," message"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }}</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"p"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1);function I(c,e,k,t,l,n){const a=D;return A(),C(t.InjectedLayout,v(F(t._frontmatterToProps(t.frontmatter,35))),{default:h(()=>[E,b,i("div",P,[i("div",null,[$,o(a,y({},{ranges:[]}),{default:h(()=>[S]),_:1},16)]),i("div",null,[T,o(a,y({},{ranges:[]}),{default:h(()=>[j]),_:1},16)])])]),_:1},16)}const H=B(x,[["render",I],["__file","/@slidev/slides/36.md"]]);export{H as default};