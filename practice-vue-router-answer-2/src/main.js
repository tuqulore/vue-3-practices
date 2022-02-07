import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import TopPage from "./components/TopPage.vue"
import AnotherPage from "./components/AnotherPage.vue"

/**
 * クライアントのリクエストするパスと表示されるコンポーネントの
 * 対応関係(ルート)を
 * 定義しています
 * 参考: https://next.router.vuejs.org/guide/#javascript
 */
const routes = [
  { path: '/', component: TopPage },
  { path: '/another-page', component: AnotherPage }
]

/**
 * 定義したルートをもとにルーティングをおこなうルーターの
 * インスタンスを作成しています
 */
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

/**
 * アプリケーションインスタンスはコンポーネント、ディレクティブ、プラグインなどをグローバル登録することができます。
 * アプリケーションインスタンスのメソッドはチェーン(単一文での複数のメソッド呼び出し)することができます。
 * 参考: https://v3.ja.vuejs.org/guide/instance.html#%E3%82%A2%E3%83%95%E3%82%9A%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%81%AE%E4%BD%9C%E6%88%90
 */
createApp(App).use(router).mount('#app')
