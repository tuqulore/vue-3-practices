<script setup>
import ComponentOne from "./components/Component1.vue";
</script>

<template>
  <p>
    Component1コンポーネントに対してスロットコンテンツが渡されています。スロットコンテンツが表示されるように変更してください
  </p>
  <ComponentOne>
    <p>この文字列が表示されます</p>
  </ComponentOne>
</template>

<style></style>
