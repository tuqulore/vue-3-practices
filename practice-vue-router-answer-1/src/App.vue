<script setup>
import { ref, onMounted } from "vue";
/**
 * `<script setup>`  を使用する場合、 `<script setup>` 内で宣言された
 * トップレベルのバインディング（変数、関数宣言、インポートを含む）は、テンプレートで直接使用できます
 * 引用:  https://ja.vuejs.org/api/sfc-script-setup.html#basic-syntax
 */
import { RouterView } from "vue-router";
const location = ref(null);
onMounted(() => {
  location.value = window.location;
});
</script>

<template>
  <ol>
    <li>
      <a href="/#/">{{ location?.origin }}/#/</a
      >にアクセスするとTopPageコンポーネントが表示され、
      <a href="/#/another-page">{{ location?.origin }}/#/another-page</a
      >にアクセスするとAnotherPageコンポーネントが表示されるようにVue
      Routerを設定してください
    </li>
  </ol>
  <!--
    少なくともVueアプリケーションインスタンスを作成している ./main.js にVue Routerの設定を追加する必要があります
    参考: https://next.router.vuejs.org/guide/
  -->
  <RouterView />
</template>

<style></style>
