<script setup>
import { ref } from "vue";
import TwowayChild from "./TwowayChild.vue";

const title = ref("Hello !");
</script>

<template>
  <TwowayChild v-model="title" />
  <p>{{ title }}</p>
</template>
