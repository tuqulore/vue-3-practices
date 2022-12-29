<script setup>
import {ref, computed} from "vue";

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
      <input class="text-black p-1" type="number" v-model="val1" />
    </p>
    <p>
      val2:
      <input class="text-black p-1" type="number" v-model="val2" />
    </p>
    <p>sum: {{sum}}</p>
  </div>
</template>
