<script setup>
import ComponentOne from "./components/ComponentOne.vue";
import ComponentTwo from "./components/ComponentTwo.vue";
</script>

<template>
  <ComponentOne />
  <ComponentTwo />
  <p>ふたつのコンポーネントの見出しが同じ大きさになっています。</p>
  <p>
    テンプレートとスタイルを変更することなく、片方のコンポーネントの見出しが元の（コンポーネントのスタイルが適用されていない）文字の大きさになるようにしてください。
  </p>
</template>

<style></style>
