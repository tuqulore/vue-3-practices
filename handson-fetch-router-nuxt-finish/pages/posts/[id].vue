<script setup>
/**
 * components プロパティによるコンポーネントの登録が省略可能です
 * 参考: https://nuxt.com/docs/examples/features/auto-imports
 */
/**
 * useRouteコンポジション関数によって
 * 現在表示されているルートの情報を取得します
 * 参考: https://router.vuejs.org/api/#useroute
 */
const route = useRoute();
/**
 * ref関数などのコンポジション関数が省略可能です
 * 参考: https://nuxt.com/docs/examples/features/auto-imports
 */
const article = ref(null);
/**
 * 現在表示されているルートのidパラメータを参照することで
 * 必要な記事の取得場所(エンドポイント)を特定しています
 */
const { data: post, pending } = await useFetch(
  `http://localhost:3000/wp-json/wp/v2/posts/${route.params.id}.json`,
);
/**
 * watchEffect 関数によってリアクティブな値に連動した
 * 副作用のある処理を実行することができます
 * 参考: https://ja.vuejs.org/guide/essentials/watchers.html#watcheffect
 */
watchEffect(() => {
  if (!article.value) return;
  /**
   * 記事中の画像に crossOrigin 属性をつけて
   * StackBlitz 等で動作する本アプリにおける
   * http://design-lab.tuqulore.com から配信される画像
   * に対する CORS (オリジン間リソース共有) の通信方法を指定しています
   * 参考: https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/crossorigin
   */
  const imgs = article.value.getElementsByTagName("img");
  for (const img of imgs) {
    img.crossOrigin = "anonymous";
  }
});
</script>

<template>
  <div>
    <NuxtLink to="/"> 記事一覧に戻る </NuxtLink>
    <hr />
    <!--
    条件付きレンダリングによって記事を取得する前後の表示内容を変更しています
  -->
    <!-- eslint-disable vue/no-v-html -->
    <template v-if="!pending">
      <!--
        テンプレート参照により記事の HTML で生成される DOM にアクセスします
        参考: https://ja.vuejs.org/guide/essentials/template-refs
      -->
      <article ref="article" v-html="post.content.rendered" />
    </template>
    <p v-else>loading...</p>
  </div>
</template>
