<script>
export default {
  setup() {
    const isVisible = true
    return {isVisible}
  }
}
</script>

<template>
  <p>テンプレートを変更することなく、次の箇所を消してください</p>
  <p v-if="isVisible">ここが消えます</p>
</template>

<style>
</style>
