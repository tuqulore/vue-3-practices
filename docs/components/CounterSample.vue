<template>
  <div>Counter: {{ counter }}</div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(10);
setInterval(() => {
  counter.value += 1;
}, 1000);
</script>
