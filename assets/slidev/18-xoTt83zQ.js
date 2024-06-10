import{_ as f}from"./CodeBlockWrapper-DcCHhxXs.js";import{I as B}from"./default-BQLg3l6Q.js";import{_,ap as o}from"../index-DbUh889g.js";import{p as g,u as c,f as u}from"./context-BfYGPgxv.js";import{o as m,c as v,k as a,l as k,m as e,q as b,s as j,e as i,a6 as s}from"../modules/vue-Dm92XYA6.js";import"../modules/unplugin-icons-iKn5c9_2.js";import"../modules/shiki-CvIsS016.js";const C={__name:"18",setup(y,{expose:l}){l(),g(o);const{$slidev:n,$nav:h,$clicksContext:r,$clicks:d,$page:t,$renderContext:A,$frontmatter:D}=c(),p={$slidev:n,$nav:h,$clicksContext:r,$clicks:d,$page:t,$renderContext:A,$frontmatter:D,InjectedLayout:B,get frontmatter(){return o},get useSlideContext(){return c},get _provideFrontmatter(){return g},get _frontmatterToProps(){return u}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},x=i("h1",null,"さまざまなリアクティビティAPI",-1),F=i("h2",{class:"!text-base font-bold"},[i("a",{href:"https://ja.vuejs.org/api/reactivity-core#reactive"},"reactive()")],-1),P=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," obj"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," reactive"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," });"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 値の作成")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"obj"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 値の読み出し")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"obj"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 値の更新（.valueが不要な点に注意）")])])],-1),$=i("h2",{class:"!text-base font-bold"},[i("a",{href:"https://ja.vuejs.org/api/reactivity-utilities.html#torefs"},"toRefs()")],-1),w=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," obj"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," reactive"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," });"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 値の作成")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," toRefs"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"obj"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // refへの変換")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // obj.countと同じ値")])])],-1),I=i("h2",{class:"!text-base font-bold"},[i("a",{href:"https://ja.vuejs.org/api/reactivity-core#readonly"},"readonly()")],-1),O=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," obj"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," reactive"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," });"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 値の作成")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," readonlyObj"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," readonly"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"obj"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 読み取り専用の値の作成")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"readonlyObj"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 値の更新（阻止される）")])])],-1),S=i("h2",{class:"!text-base font-bold"},[i("a",{href:"https://ja.vuejs.org/api/reactivity-core#watcheffect"},"watchEffect()")],-1),T=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"watchEffect"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," console"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"));"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // countが更新される度に実行される")])])],-1),E=i("p",null,[s("これまで取り上げたものと比べると重要じゃないので、「使いどきがあるかも」くらいに思えればOKです。"),i("br"),s(" （ただ、watchEffectは監視対象の指定がいらないのでwatchより便利かも…）")],-1);function N(y,l,n,h,r,d){const t=f;return m(),v(h.InjectedLayout,b(j(h._frontmatterToProps(h.frontmatter,17))),{default:a(()=>[x,F,k(t,e({},{ranges:[]}),{default:a(()=>[P]),_:1},16),$,k(t,e({},{ranges:[]}),{default:a(()=>[w]),_:1},16),I,k(t,e({},{ranges:[]}),{default:a(()=>[O]),_:1},16),S,k(t,e({},{ranges:[]}),{default:a(()=>[T]),_:1},16),E]),_:1},16)}const G=_(C,[["render",N],["__file","/@slidev/slides/18.md"]]);export{G as default};