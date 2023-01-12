<script setup>
import { ref } from "vue";
const input = ref("");
const handleInput = (event) => {
  input.value = event.target.value;
};
</script>

<template>
  <p>
    入力欄と表示欄の値が連動しています。この挙動を維持したまま、v-modelを使用するように書き換えてください。
  </p>
  <input :value="input" @input="handleInput" />
  <p>表示: {{ input }}</p>
</template>

<style></style>
