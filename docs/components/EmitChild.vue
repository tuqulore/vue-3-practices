<script setup>
const emit = defineEmits(["child-clicked"]);
function clickHandler() {
  emit("child-clicked", "Hello!");
}
</script>

<template>
  <button @click="clickHandler">emit !</button>
</template>
