<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: { type: String, required: true },
});
const emit = defineEmits(["update:modelValue"]);
const title = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input v-model="title" />
</template>
