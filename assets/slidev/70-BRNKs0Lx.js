import{_ as A}from"./CodeBlockWrapper-DcCHhxXs.js";import{I as _}from"./default-BQLg3l6Q.js";import{_ as u,bk as p}from"../index-DbUh889g.js";import{p as d,u as o,f}from"./context-BfYGPgxv.js";import{o as m,c as v,k as e,e as s,l as g,m as c,q as C,s as x,a6 as i}from"../modules/vue-Dm92XYA6.js";import"../modules/unplugin-icons-iKn5c9_2.js";import"../modules/shiki-CvIsS016.js";const E={__name:"70",setup(y,{expose:h}){h(),d(p);const{$slidev:l,$nav:t,$clicksContext:k,$clicks:n,$page:a,$renderContext:B,$frontmatter:D}=o(),r={$slidev:l,$nav:t,$clicksContext:k,$clicks:n,$page:a,$renderContext:B,$frontmatter:D,InjectedLayout:_,get frontmatter(){return p},get useSlideContext(){return o},get _provideFrontmatter(){return d},get _frontmatterToProps(){return f}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},b=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),j={class:"flex gap-8"},w=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),P=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-vue"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"（"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"中略"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," posts"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"null"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," load"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," async"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," response"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," await"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," fetch"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"/wp-json/wp/v2/posts.json"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  posts"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," await"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," response"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"json"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"（"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"後略"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"）")])])],-1),F=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),$={class:"h-xs overflow-y-auto"},V=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-vue"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"（"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"中略"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," data"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," posts"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pending"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," await"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," useFetch"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'  "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"http://localhost:3000/wp-json/wp/v2/posts.json"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"（"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"後略"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"）")])])],-1),N=s("ul",null,[s("li",null,"リアクティブな値を別途用意する必要がない"),s("li",null,[s("a",{href:"https://developer.mozilla.org/ja/docs/Web/API/Response/json",target:"_blank"},"Response.json()"),i("が暗黙的に実行されオブジェクトが得られる")]),s("li",null,[i("データ再取得の関数、取得中の状態値などあると便利なものが用意されている "),s("a",{href:"https://nuxt.com/docs/getting-started/data-fetching",target:"_blank"},"https://nuxt.com/docs/getting-started/data-fetching")])],-1);function I(y,h,l,t,k,n){const a=A;return m(),v(t.InjectedLayout,C(x(t._frontmatterToProps(t.frontmatter,69))),{default:e(()=>[b,s("div",j,[s("div",null,[w,g(a,c({},{ranges:[]}),{default:e(()=>[P]),_:1},16)]),s("div",null,[F,s("div",$,[g(a,c({},{ranges:[]}),{default:e(()=>[V]),_:1},16),N])])])]),_:1},16)}const O=u(E,[["render",I],["__file","/@slidev/slides/70.md"]]);export{O as default};