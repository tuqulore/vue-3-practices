<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input class="text-black p-1" v-model="message" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("Hello Vue!");
    return {
      message,
    };
  },
};
</script>
