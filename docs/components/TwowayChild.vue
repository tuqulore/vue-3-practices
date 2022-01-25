<template>
  <input type="text" v-model="title" @input="changeTitle" />
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const title = ref(props.modelValue);
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
