<template>
  <div>
    <p>カウント: {{ counter.count }}</p>
    <p><button @click="increment">increment!</button></p>
  </div>
</template>

<script>
import useCounter from "~~/composables/useCounter";

export default {
  setup() {
    const counter = useCounter();
    const increment = () => {
      counter.increment();
    };
    return {
      counter,
      increment,
    };
  },
};
</script>
