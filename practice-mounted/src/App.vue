<script setup>
// 何かをインポートする必要があります
//import {} from "vue"
const showDialog = () => {
  alert("Hello, World!");
};
</script>

<template>
  <p>
    ボタンを押すとダイアログが表示されます。コンポーネントがマウントされた際にダイアログが表示されるように処理を追加してください
  </p>
  <button @click="showDialog()">ダイアログを表示</button>
</template>

<style></style>
