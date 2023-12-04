<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input class="text-black p-1" v-model="message" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello Vue!");
</script>
