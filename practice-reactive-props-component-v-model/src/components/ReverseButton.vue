<script setup>
const props = defineProps({
  text: String,
});
const emits = defineEmits(["update"]);
const handleClick = () => {
  emits("update", props.text.split("").reverse().join(""));
};
</script>

<template>
  <button @click="handleClick">文字の並びを反転</button>
</template>

<style></style>
