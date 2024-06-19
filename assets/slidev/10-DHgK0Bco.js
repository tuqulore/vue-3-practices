import{_ as n}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-D2_2h06F.js";import{C as r}from"../modules/unplugin-icons-x-nTD0aN.js";import{o as p,c as o,k as t,e as s,l as a,m as d,q as g,s as c,A as l,a6 as i}from"../modules/vue-vuUjmER5.js";import{I as y}from"./default-RBA7rJrR.js";import{ai as e}from"../index-BOyfvy22.js";import{p as _,u as m,f as u}from"./context-BQ-mMtY4.js";import"../modules/shiki-Bw8j3jJR.js";const B=s("h1",null,"リアクティブとは？",-1),A={class:"flex flex-col gap-4"},f=s("blockquote",null,[i(" 最近この用語がプログラミングでよく出てくるようになりましたが、人々がそれについて話すとき、何を意味しているのでしょうか？リアクティビティーとは、宣言的な方法で変化に対応できるようにするプログラミングパラダイムです。よく挙げられる典型的な例として Excel のスプレッドシートが挙げられます "),s("footer",null,[s("cite",null,[s("a",{href:"https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity"},"公式ドキュメント")])])],-1),D={class:"bg-lime-100 pl-4 pr-6 py-3 rounded-lg inline-flex gap-3 items-center"},v=s("span",null,[s("a",{href:"https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity"},"公式ドキュメント"),i("に表計算風のプログラムがあるので触ってみましょう ")],-1),x=s("p",null,"表計算ソフトと同じ手順をコードにすると",-1),C=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 2"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val2"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 3"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," sum"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val1"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val2"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"sum"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 5")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"val1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 3"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"sum"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 5のまま（期待は6）")])])],-1),z={__name:"10",setup(b){return _(e),m(),(j,F)=>{const h=r,k=n;return p(),o(y,g(c(l(u)(l(e),9))),{default:t(()=>[B,s("div",A,[s("div",null,[f,s("p",D,[a(h),v])]),s("div",null,[x,a(k,d({},{ranges:[]}),{default:t(()=>[C]),_:1},16)])])]),_:1},16)}}};export{z as default};
