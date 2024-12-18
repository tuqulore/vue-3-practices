<script setup>
import { ref } from "vue";

const message = ref("Hello Vue!");
</script>

<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" class="text-black p-1" />
  </div>
</template>
