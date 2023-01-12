<script setup>
import { ref } from "vue";
/**
 * throttle-debounceパッケージの使い方はドキュメントを参照しましょう
 * 参考: https://www.npmjs.com/package/throttle-debounce
 */
import { debounce } from "throttle-debounce";
const input = ref("");
const logs = ref([]);
const handleInput = (event) => {
  input.value = event.target.value;
  logs.value.push(event.target.value);
};
const handleClick = () => {
  logs.value = [];
};
</script>

<template>
  <p>入力履歴の1番目に「test」という文字が表示されるようにしてください</p>
  <input :value="input" @input="handleInput" />
  <p>入力内容: {{ input }}</p>
  <h4>入力履歴</h4>
  <button @click="handleClick">リセット</button>
  <ol>
    <li value="0">ここに入力履歴が追加されます</li>
    <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
  </ol>
</template>

<style></style>
