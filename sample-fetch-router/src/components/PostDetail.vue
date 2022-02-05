<script>
import {ref} from "vue";
import {RouterLink, useRoute} from "vue-router";

export default {
  components: {
    RouterLink
  },
  setup() {
    /**
     * useRouteコンポジション関数によって
     * 現在表示されているルートの情報を取得します
     * 参考: https://next.router.vuejs.org/api/#useroute
     */
    const route = useRoute()
    const post = ref(null)
    const load = async () => {
      /**
       * 現在表示されているルートのidパラメータを参照することで
       * 必要な記事の取得場所(エンドポイント)を特定しています
       */
      const response = await fetch(`/wp-json/wp/v2/posts/${route.params.id}.json`)
      post.value = await response.json()
    }
    load()
    return {
      post
    }
  }
}
</script>

<template>
  <RouterLink to="/">記事一覧に戻る</RouterLink>
  <hr />
  <!--
    条件付きレンダリングによって記事を取得する前後の表示内容を変更しています
  -->
  <template v-if="post">
    <article v-html="post.content.rendered" />
  </template>
  <p v-else>loading...</p>
</template>
