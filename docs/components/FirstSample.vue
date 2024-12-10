<script setup>
import { ref } from "vue";

const count = ref(0);
function increment() {
  count.value += 1;
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<style scoped>
button {
  border: 1px solid;
  padding-inline: 1rem;
}
</style>
