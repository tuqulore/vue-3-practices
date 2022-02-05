<script>
import {ref} from "vue";
import {RouterLink} from "vue-router";

export default {
  components: {
    RouterLink
  },
  setup() {
    const posts = ref(null)
    const load = async () => {
      /**
       * Fetch APIを使用することによってあらかじめ配置された
       * `/public/wp-json/wp/v2/posts.json` ファイルを取得しています
       */
      const response = await fetch('/wp-json/wp/v2/posts.json')
      posts.value = await response.json()
    }
    load()
    return {
      posts
    }
  }
}
</script>

<template>
  <h1>記事一覧</h1>
  <!--
    条件付きレンダリングによって記事一覧を取得する前後の表示内容を変更しています
  -->
  <template v-if="posts">
    <ul>
      <!--
        リストレンダリングによって取得した記事一覧の各記事のHTML構造を表現しています
      -->
      <li v-for="post in posts" :key="post.id">
        <!--
          RouterLinkコンポーネントによってルート間の移動を捕捉します
          参考: https://next.router.vuejs.org/guide/#router-link
        -->
        <RouterLink :to="{name: 'post', params: {id: post.id}}">{{post.title.rendered}}</RouterLink>
      </li>
    </ul>
  </template>
  <p v-else>loading...</p>
</template>

<style>
</style>
