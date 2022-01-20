<script>
import {ref} from "vue"
export default {
  setup() {
    const input = ref("")
    return {input}
  }
}
</script>

<template>
  <p>入力欄と表示欄の値が連動しています。この挙動を維持したまま、v-modelを使用するように書き換えてください。</p>
  <!--
    v-modelによって、inputイベントハンドラーを用意することなく
    双方向データバインディングをおこなうことができます。
    参考: https://v3.ja.vuejs.org/guide/forms.html#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9
  -->
  <input v-model="input" />
  <p>表示: {{input}}</p>
</template>

<style>
</style>
