<template>
  <input v-model="title" />
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const title = computed({
      get: () => props.modelValue,
      set: (value) => {
        context.emit("update:modelValue", value);
      },
    });
    const changeTitle = () => {
      context.emit("update:modelValue", title.value);
    };
    return {
      title,
      changeTitle,
    };
  },
};
</script>
