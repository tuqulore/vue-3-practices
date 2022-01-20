<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const val1 = ref(2);
    const val2 = ref(3);
    const sum = computed(() => {
      return val1.value + val2.value;
    });
    return {
      val1,
      val2,
      sum,
    };
  },
};
</script>

<template>
  <div>
    <p>val1: <input type="number" v-model="val1" /></p>
    <p>val2: <input type="number" v-model="val2" /></p>
    <p>sam: {{ sum }}</p>
  </div>
</template>
