<script setup>
import { ref } from "vue";
const input = ref("");
</script>

<template>
  <p>
    入力欄と表示欄の値が連動しています。この挙動を維持したまま、v-modelを使用するように書き換えてください。
  </p>
  <!--
    v-modelによって、inputイベントハンドラーを用意することなく
    双方向データバインディングをおこなうことができます。
    参考: https://ja.vuejs.org/guide/essentials/forms.html
  -->
  <input v-model="input" />
  <p>表示: {{ input }}</p>
</template>

<style></style>
