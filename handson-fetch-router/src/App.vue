<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <!--
    RouterViewコンポーネントによって
    ルーティングに対応したコンポーネントが表示されます
    参考: https://router.vuejs.org/guide/#router-view
  -->
  <RouterView />
</template>

<style></style>
