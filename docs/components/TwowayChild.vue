<template>
  <input v-model="title" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const title = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>
