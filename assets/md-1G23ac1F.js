import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BocRSYqD.js";import{B as d}from"./modules/unplugin-icons-uLCo8SY-.js";import{o,c as g,k as l,e as s,aa as t,l as a,m as y,q as c,s as m,B as e}from"./modules/vue-DQUCc51A.js";import{I as u}from"./slidev/default-KLi4K672.js";import{u as B,f as A}from"./slidev/context-CWyu_8MT.js";import"./index-BJT4im3q.js";import"./modules/shiki-BHfDRo1z.js";const f={class:"flex flex-col gap-4"},D={class:"bg-lime-100 pl-4 pr-6 py-3 rounded-lg inline-flex gap-3 items-center"},_={__name:"slides.md__slidev_10",setup(v){const{$slidev:x,$nav:C,$clicksContext:h,$clicks:$,$page:b,$renderContext:j,$frontmatter:k}=B();return h.setup(),(P,i)=>{const n=d,r=p;return o(),g(u,c(m(e(A)(e(k),9))),{default:l(()=>[i[4]||(i[4]=s("h1",null,"リアクティブとは？",-1)),s("div",f,[s("div",null,[i[1]||(i[1]=s("blockquote",null,[t(" 最近この用語がプログラミングでよく出てくるようになりましたが、人々がそれについて話すとき、何を意味しているのでしょうか？リアクティビティーとは、宣言的な方法で変化に対応できるようにするプログラミングパラダイムです。よく挙げられる典型的な例として Excel のスプレッドシートが挙げられます "),s("footer",null,[s("cite",null,[s("a",{href:"https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity"},"公式ドキュメント")])])],-1)),s("p",D,[a(n),i[0]||(i[0]=s("span",null,[s("a",{href:"https://ja.vuejs.org/guide/extras/reactivity-in-depth.html#what-is-reactivity"},"公式ドキュメント"),t("に表計算風のプログラムがあるので触ってみましょう ")],-1))])]),s("div",null,[i[3]||(i[3]=s("p",null,"表計算ソフトと同じ手順をコードにすると",-1)),a(r,y({},{ranges:[]}),{default:l(()=>i[2]||(i[2]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 2"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val2"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 3"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"let"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," sum"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val1"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val2"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"sum"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 5")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"val1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 3"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"sum"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 5のまま（期待は6）")])])],-1)])),_:1},16)])])]),_:1},16)}}},z=_;export{z as default};
