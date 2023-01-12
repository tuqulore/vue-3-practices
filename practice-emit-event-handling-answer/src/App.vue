<script setup>
import { ref } from "vue";
import TestButton from "./components/TestButton.vue";
const message = ref("");
const handleTest = (value) => {
  message.value = value;
};
</script>

<template>
  <p>
    App.vueを変更することなく、TestButtonコンポーネントをクリックすると以下の部分にtestという文字列が表示されるようにしてください
  </p>
  <TestButton @test-event="handleTest" />
  <p>ここに表示されます: {{ message }}</p>
</template>

<style></style>
