<script>
import Component1 from "./components/Component1.vue"
export default {
  components: {
    Component1
  },
  setup() {
    return {}
  }
}
</script>

<template>
  <p>Component1コンポーネントに対してスロットコンテンツが渡されています。スロットコンテンツが表示されるように変更してください</p>
  <Component1>
    <p>この文字列が表示されます</p>
  </Component1>
</template>

<style>
</style>
