<script setup>
import { onMounted } from "vue";
const showDialog = () => {
  alert("Hello, World!");
};
/**
 * mountedライフサイクル時に処理を実行する必要があるため
 * onMountedライフサイクルフックを使用します
 * 参考: https://ja.vuejs.org/api/composition-api-lifecycle.html#onmounted
 */
onMounted(showDialog);
</script>

<template>
  <p>
    ボタンを押すとダイアログが表示されます。コンポーネントがマウントされた際にダイアログが表示されるように処理を追加してください
  </p>
  <button @click="showDialog()">ダイアログを表示</button>
</template>

<style></style>
