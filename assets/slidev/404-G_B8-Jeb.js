import{N as f,y as m,b as h,e,a6 as c,x as r,A as v,c as p,k as u,g as d,r as x,o as n,p as k,a as g}from"../modules/vue-vuUjmER5.js";import{_ as b,a as N}from"../index-BOyfvy22.js";import"../modules/shiki-Bw8j3jJR.js";const S=o=>(k("data-v-2b3af62b"),o=o(),g(),o),y={class:"grid justify-center pt-15%"},B=S(()=>e("h1",{class:"text-9xl font-bold"}," 404 ",-1)),I={class:"text-2xl"},R={class:"op-70"},C={class:"mt-3 flex flex-col gap-2"},V={__name:"404",setup(o){const{currentRoute:l}=f(),{total:_}=N(),s=m(()=>{const a=l.value.path.match(/\d+/);if(a){const t=+a[0];if(t>0&&t<=_.value)return t}return null});return(i,a)=>{const t=x("RouterLink");return n(),h("div",y,[e("div",null,[B,e("p",I,[c(" Page not found"),e("code",R,":"+r(v(l).path),1)]),e("div",C,[s.value!==1?(n(),p(t,{key:0,to:"/",class:"page-link"},{default:u(()=>[c(" Go Home ")]),_:1})):d("",!0),s.value?(n(),p(t,{key:1,to:`/${s.value}`,class:"page-link"},{default:u(()=>[c(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):d("",!0)])])])}}},j=b(V,[["__scopeId","data-v-2b3af62b"]]);export{j as default};
