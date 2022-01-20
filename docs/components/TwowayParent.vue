<template>
  <TwowayChild v-model="title" />
  <p>{{ title }}</p>
</template>
<script>
import { ref } from "vue";
import TwowayChild from "./TwowayChild.vue";
export default {
  components: { TwowayChild },
  setup() {
    const title = ref("Hello !");
    return {
      title,
    };
  },
};
</script>
