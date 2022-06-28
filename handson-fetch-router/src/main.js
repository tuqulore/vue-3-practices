import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from "./App.vue"
import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue'

/**
 * クライアントのリクエストするパスと表示されるコンポーネントの
 * 対応関係(ルート)を
 * 定義しています
 * 参考: https://router.vuejs.org/guide/#javascript
 */
const routes = [
  { path: '/', component: PostList },
  /**
   * 動的ルートマッチングによってパラメータをもとに
   * ルートをマップ(写像)して定義することができます
   * 参考: https://router.vuejs.org/guide/essentials/dynamic-matching.html
   */
  { name: 'post', path: '/post/:id', component: PostDetail }
]

/**
 * 定義したルートをもとにルーティングをおこなうルーターの
 * インスタンスを作成しています
 */
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

/**
 * 作成したルーターのインスタンスをVueアプリケーションインスタンスに
 * プラグインとしてインストールしています
 */
createApp(App).use(router).mount('#app')
