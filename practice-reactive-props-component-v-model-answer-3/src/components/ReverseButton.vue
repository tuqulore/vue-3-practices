<script setup>
const props = defineProps({
  text: String,
});
const emits = defineEmits("udpate:text");
const handleClick = () => {
  emits("update:text", props.text.split("").reverse().join(""));
};
</script>

<template>
  <button @click="handleClick">文字の並びを反転</button>
</template>

<style></style>
