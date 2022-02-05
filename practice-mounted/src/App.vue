<script>
// 何かをインポートする必要があります
//import {} from "vue"
export default {
  setup() {
    const showDialog = () => {alert("Hello, World!")}
    return {showDialog}
  }
}
</script>

<template>
  <p>ボタンを押すとダイアログが表示されます。コンポーネントがマウントされた際にダイアログが表示されるように処理を追加してください</p>
  <button @click="showDialog()">ダイアログを表示</button>
</template>

<style>
</style>
