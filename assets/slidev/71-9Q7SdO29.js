import{_ as n}from"./CodeBlockWrapper-NxBPkiDo.js";import{o as r,c as d,k as i,l as h,m as k,q as p,s as g,A as e,e as s,a0 as t}from"../modules/vue-wWbGAgj9.js";import{I as o}from"./default-UJjcZm6M.js";import{b as c,aS as l}from"../index-duDm_B_0.js";import{p as y,u,f as _}from"./context-MGWPyIfs.js";import"../modules/unplugin-icons-PW8Ss-YZ.js";import"../modules/shiki-0H6c0mr-.js";const A=s("h1",null,"Vue + Vue Router と Nuxt 3 の比較（データ取得）",-1),f=s("p",null,[s("a",{href:"https://nuxt.com/docs/getting-started/data-fetching",target:"_blank",rel:"noopener"},"https://nuxt.com/docs/getting-started/data-fetching")],-1),B=s("p",null,"useFetch 以外もある",-1),D=s("p",null,[t("useLazyFetch: 非同期関数でない代わりにデータ取得前は "),s("code",null,"null"),t(" が入る")],-1),m=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pending"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," data"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," posts"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," useLazyFetch"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"/api/posts"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")])])],-1),C=s("p",null,"useAsyncData: 例としては useFetch と同じことをやっている。（useFetch が使えないケースで）非同期処理によってデータを取得したい際に使う",-1),v=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," data"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," await"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," useAsyncData"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"count"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," $fetch"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"/api/count"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"));")])])],-1),b=s("p",null,"useLazyAsyncData: useLazyFetch の useAsyncData 版",-1),x=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pending"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," data"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," useLazyAsyncData"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"count"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  $fetch"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"/api/count"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"),")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")])])],-1),F={__name:"71",setup(z){return y(l),u(),(L,V)=>{const a=n;return r(),d(o,p(g(e(_)(e(l),70))),{default:i(()=>[A,f,B,D,h(a,k({},{ranges:[]}),{default:i(()=>[m]),_:1},16),C,h(a,k({},{ranges:[]}),{default:i(()=>[v]),_:1},16),b,h(a,k({},{ranges:[]}),{default:i(()=>[x]),_:1},16)]),_:1},16)}}},T=c(F,[["__file","/@slidev/slides/71.md"]]);export{T as default};
