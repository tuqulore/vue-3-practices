<script setup>
import { ref, computed } from "vue";
const count = ref(1);
</script>

<template>
  <p>
    カウントボタンを押すと数が1増えます。数が3の倍数のときは「Fizz」、数が5の倍数のときは「Buzz」、数が15の倍数のときは「FizzBuzz」という文字列が表示されるように追加してください。
  </p>
  <button @click="count++">カウント</button>
  <p>数: {{ count }}</p>
  <p>表示:</p>
</template>

<style></style>
