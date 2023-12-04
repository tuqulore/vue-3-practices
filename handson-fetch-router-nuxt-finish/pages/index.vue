<script setup>
/**
 * components プロパティによるコンポーネントの登録が省略可能です
 * 参考: https://nuxt.com/docs/guide/concepts/auto-imports
 */
/**
 * Nuxtで提供されているuseFetch関数を使うとデータの取得が簡便におこなえます
 * 参考: https://nuxt.com/docs/api/composables/use-fetch
 */
/**
 * 分割代入によって使用する値を取り出します
 * 参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
const { data: posts, pending } = await useFetch(
  `http://localhost:3000/wp-json/wp/v2/posts.json`
);
</script>

<template>
  <div>
    <h1>記事一覧</h1>
    <!--
    条件付きレンダリングによって記事一覧を取得する前後の表示内容を変更しています
    useFetch関数から取り出したpendingというリアクティブな値でローディング中の表示を用意することができます
    参考: https://nuxt.com/docs/api/composables/use-fetch
  -->
    <template v-if="!pending">
      <ul>
        <!--
        リストレンダリングによって取得した記事一覧の各記事のHTML構造を表現しています
      -->
        <li v-for="post in posts" :key="post.id">
          <!--
          NuxtではRouterLinkの代わりにNuxtLinkを使います
          参考: https://nuxt.com/docs/api/components/nuxt-link
        -->
          <NuxtLink :to="`/posts/${post.id}`">{{
            post.title.rendered
          }}</NuxtLink>
        </li>
      </ul>
    </template>
    <p v-else>loading...</p>
  </div>
</template>

<style></style>
