<script setup>
import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";
</script>

<template>
  <Component1 />
  <Component2 />
  <p>ふたつのコンポーネントの見出しが同じ大きさになっています。</p>
  <p>
    テンプレートとスタイルを変更することなく、片方のコンポーネントの見出しが元の（コンポーネントのスタイルが適用されていない）文字の大きさになるようにしてください。
  </p>
  <!--
    Component1コンポーネントのvueファイルを開いてください。
    styleタグにscoped属性を付与することで
    Component1の見出しにだけスタイルが適用されます。
    参考: https://ja.vuejs.org/api/sfc-css-features.html
  -->
</template>

<style></style>
