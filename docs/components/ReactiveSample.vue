<script setup>
import { ref, computed } from "vue";

const val1 = ref(2);
const val2 = ref(3);
const sum = computed(() => {
  return val1.value + val2.value;
});
</script>

<template>
  <div>
    <p>
      val1:
      <input
        v-model="val1"
        class="border border-black dark:border-white p-1"
        type="number"
      />
    </p>
    <p>
      val2:
      <input
        v-model="val2"
        class="border border-black dark:border-white p-1"
        type="number"
      />
    </p>
    <p>sum: {{ sum }}</p>
  </div>
</template>
