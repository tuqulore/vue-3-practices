import { createApp } from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";
import TopPage from "./components/TopPage.vue";
import AnotherPage from "./components/AnotherPage.vue";

/**
 * クライアントのリクエストするパスと表示されるコンポーネントの
 * 対応関係(ルート)を
 * 定義しています
 * 参考: https://next.router.vuejs.org/guide/#javascript
 */
const routes = [
  { path: "/", component: TopPage },
  { path: "/another-page", component: AnotherPage },
];

/**
 * 定義したルートをもとにルーティングをおこなうルーターの
 * インスタンスを作成しています
 */
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

/**
 * アプリケーションインスタンスはコンポーネント、ディレクティブ、プラグインなどをグローバル登録することができます。
 * アプリケーションインスタンスのメソッドはチェーン(単一文での複数のメソッド呼び出し)することができます。
 * 参考: https://ja.vuejs.org/api/application.html#createapp
 */
createApp(App).use(router).mount("#app");
