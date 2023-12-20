<script setup>
import { RouterView } from "vue-router";
import PostList from "./components/PostList.vue";
</script>

<template>
  <!--
    RouterViewコンポーネントによって
    ルーティングに対応したコンポーネントが表示されます
    参考: https://router.vuejs.org/guide/#router-view
  -->
  <PostList />
</template>

<style></style>
