import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-fCjvdgSO.js";import{o as r,c as d,k as t,e as s,l as h,m as k,q as g,s as o,A as l,a9 as i}from"./modules/vue-BbW9NcE7.js";import{I as c}from"./slidev/default-CgrLVZ3a.js";import{u as y,f as B}from"./slidev/context-CaB2LmHm.js";import"./modules/unplugin-icons-CIvqXdgf.js";import"./index-BSELA52U.js";import"./modules/shiki-CvlxCV4k.js";const D=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),A={class:"flex gap-8"},u=s("p",{class:"text-xs"},"Vue 3 - components/PostList.vue",-1),_=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-vue"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"（"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"中略"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," posts"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"null"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," load"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," async"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," response"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," await"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," fetch"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"/wp-json/wp/v2/posts.json"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  posts"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," await"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," response"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"json"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"（"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"後略"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"）")])])],-1),f=s("p",{class:"text-xs"},"Nuxt 3 - pages/index.vue",-1),m={class:"h-xs overflow-y-auto"},C=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-vue"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"（"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"中略"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," data"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," posts"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pending"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," await"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," useFetch"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'  "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"http://localhost:3000/wp-json/wp/v2/posts.json"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"（"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"後略"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"）")])])],-1),v=s("ul",null,[s("li",null,"リアクティブな値を別途用意する必要がない"),s("li",null,[s("a",{href:"https://developer.mozilla.org/ja/docs/Web/API/Response/json",target:"_blank"},"Response.json()"),i("が暗黙的に実行されオブジェクトが得られる")]),s("li",null,[i("データ再取得の関数、取得中の状態値などあると便利なものが用意されている "),s("a",{href:"https://nuxt.com/docs/getting-started/data-fetching",target:"_blank"},"https://nuxt.com/docs/getting-started/data-fetching")])],-1),E={__name:"slides.md__slidev_70",setup(x){const{$slidev:b,$nav:j,$clicksContext:e,$clicks:w,$page:$,$renderContext:F,$frontmatter:n}=y();return e.setup(),(P,V)=>{const a=p;return r(),d(c,g(o(l(B)(l(n),69))),{default:t(()=>[D,s("div",A,[s("div",null,[u,h(a,k({},{ranges:[]}),{default:t(()=>[_]),_:1},16)]),s("div",null,[f,s("div",m,[h(a,k({},{ranges:[]}),{default:t(()=>[C]),_:1},16),v])])])]),_:1},16)}}},q=E;export{q as default};