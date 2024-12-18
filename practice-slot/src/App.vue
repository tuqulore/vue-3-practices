<script setup>
import ComponentOne from "./components/ComponentOne.vue";
</script>

<template>
  <p>
    ComponentOneコンポーネントに対してスロットコンテンツが渡されています。スロットコンテンツが表示されるように変更してください
  </p>
  <ComponentOne>
    <p>この文字列が表示されます</p>
  </ComponentOne>
</template>

<style></style>
