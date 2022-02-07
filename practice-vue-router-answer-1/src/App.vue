<script>
import {ref, onMounted} from "vue"
import {RouterView} from "vue-router"
export default {
  /**
   * コンポーネントをローカル登録することによって、登録したコンポーネントをテンプレートで使用できるようになります。
   * 参考: https://v3.ja.vuejs.org/guide/component-registration.html#%E3%83%A2%E3%82%B7%E3%82%99%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%86%85%E3%81%AE%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E7%99%BB%E9%8C%B2
   */
  components: {
    RouterView
  },
  setup() {
    const location = ref(null)
    onMounted(() => {
      location.value = window.location
    })
    return {location}
  }
}
</script>

<template>
  <ol>
    <li>
      <a href="/#/">{{location?.origin}}/#/</a>にアクセスするとTopPageコンポーネントが表示され、
      <a href="/#/another-page">{{location?.origin}}/#/another-page</a>にアクセスするとAnotherPageコンポーネントが表示されるようにVue Routerを設定してください
    </li>
  </ol>
  <!--
    少なくともVueアプリケーションインスタンスを作成している ./main.js にVue Routerの設定を追加する必要があります
    参考: https://next.router.vuejs.org/guide/
  -->
  <RouterView />
</template>


<style>
</style>

