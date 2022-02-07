<script>
import {RouterLink} from "vue-router"
export default {
  /**
   * コンポーネントをローカル登録することによって、登録したコンポーネントをテンプレートで使用できるようになります。
   * 参考: https://v3.ja.vuejs.org/guide/component-registration.html#%E3%83%A2%E3%82%B7%E3%82%99%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%86%85%E3%81%AE%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E7%99%BB%E9%8C%B2
   */
  components: {
    RouterLink
  },
  setup() {
    return {}
  }
}
</script>

<template>
  <ol>
    <li value="2">RouterLinkコンポーネントを使って、TopPageコンポーネントからAnotherPageコンポーネントへ表示が切り替わるようにしてください</li>
  </ol>
  <!--
    toプロパティを使うことによって、遷移先のルートを指定することができます。
    参考: https://next.router.vuejs.org/api/#to
  -->
  <RouterLink to="/another-page">アナザーページ</RouterLink>
  <!--
    発展: Vue Routerインスタンスを作成する際に、createWebHashHistoryの代わりにcreateWebHistoryを使うとどのような変化が生じるか、観察してみましょう
    参考: https://next.router.vuejs.org/api/#createwebhistory
  -->
</template>

<style>
</style>
