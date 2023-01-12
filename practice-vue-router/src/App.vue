<script setup>
import { ref, onMounted } from "vue";
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
</template>

<style></style>
