import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-fCjvdgSO.js";import{o as r,c as d,k as h,e as i,l as t,m as k,q as g,s as y,A as l,a9 as s}from"./modules/vue-BbW9NcE7.js";import{I as o}from"./slidev/default-CgrLVZ3a.js";import{u as c,f as D}from"./slidev/context-CaB2LmHm.js";import"./modules/unplugin-icons-CIvqXdgf.js";import"./index-BSELA52U.js";import"./modules/shiki-CvlxCV4k.js";const B=i("h1",null,"プロパティを用いた子コンポーネントへのデータの受け渡し",-1),m=i("p",null,"親コンポーネントから子コンポーネントに 文字列 を渡してみる",-1),_={class:"flex gap-8"},f=i("p",{class:"text-xs"},"親コンポーネント - App.vue",-1),A=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-vue"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ChildComponent"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"./ChildComponent.vue"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  <"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"ChildComponent"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," title"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Hello!"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),u=i("p",{class:"text-xs"},"子コンポーネント - ChildComponent.vue",-1),C=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-vue"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"script"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," setup"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")]),s(`
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
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"template"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),v={__name:"slides.md__slidev_36",setup(E){const{$slidev:F,$nav:x,$clicksContext:e,$clicks:$,$page:b,$renderContext:P,$frontmatter:n}=c();return e.setup(),(N,V)=>{const a=p;return r(),d(o,g(y(l(D)(l(n),35))),{default:h(()=>[B,m,i("div",_,[i("div",null,[f,t(a,k({},{ranges:[]}),{default:h(()=>[A]),_:1},16)]),i("div",null,[u,t(a,k({},{ranges:[]}),{default:h(()=>[C]),_:1},16)])])]),_:1},16)}}},H=v;export{H as default};