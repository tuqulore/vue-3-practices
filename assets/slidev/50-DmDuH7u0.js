import{o as r,c as a,k as s,q as n,s as u,A as t,e as l,a6 as e}from"../modules/vue-BIf9ZN93.js";import{I as p}from"./default-BtzEMOMl.js";import{b1 as o}from"../index-Dsi3x63m.js";import{p as c,u as i,f as d}from"./context-Idfa0BSd.js";import"../modules/shiki-zMNB8mWW.js";const h=l("h1",null,"パスワードチェッカー",-1),m=l("p",null,"handson-password-checkerディレクトリのアプリを起動する",-1),_=l("ol",null,[l("li",null,"どんなアプリか：パスワードの強度を判定できる"),l("li",null,[e("Vue特有な部分を中心にコードを理解する "),l("ul",null,[l("li",null,"どうやってパスワードの強度を判定しているのか"),l("li",null,"どうやってパスワードの強度を視覚化しているのか")])]),l("li",null,[e("講師と一緒にハンズオン（何をするのか分かったら講師を待たずにすすめてOK） "),l("ul",null,[l("li",null,[l("a",{href:"https://www.npmjs.com/package/throttle-debounce",target:"_blank"},"throttle-debounce"),e(" の debounce を使ってパスワードを入力してから一定時間後にパスワードの強度を判定してみる "),l("ul",null,[l("li",null,"props.password を ref 値：propsPassword として取り出す"),l("li",null,"PasswordChecker内部で管理するリアクティブな値：passwordを定義する"),l("li",null,"取り出した値を watch で監視する"),l("li",null,"watch のコールバック関数に debounce を使用する"),l("li",null,"props.password を参照している箇所を password.value に差し替える")])]),l("li",null,[l("a",{href:"https://www.npmjs.com/package/throttle-debounce",target:"_blank"},"throttle-debounce"),e(" の throttle を使ってパスワードを入力している際に一定間隔でパスワードの強度を判定してみる "),l("ul",null,[l("li",null,"debounce を使用している箇所を throttle に差し替える")])])])])],-1),v={__name:"50",setup(w){return c(o),i(),(f,b)=>(r(),a(p,n(u(t(d)(t(o),49))),{default:s(()=>[h,m,_]),_:1},16))}};export{v as default};