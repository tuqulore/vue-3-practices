<script>
import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";

export default {
  components: {
    Component1,
    Component2
  },
  setup() {
    return {}
  }
}
</script>

<template>
  <Component1 />
  <Component2 />
  <p>ふたつのコンポーネントの見出しが同じ大きさになっています。</p>
  <p>テンプレートとスタイルを変更することなく、片方のコンポーネントの見出しが元の（コンポーネントのスタイルが適用されていない）文字の大きさになるようにしてください。</p>
</template>

<style>
</style>
