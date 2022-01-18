<template>
  <button v-on:click="clickHandler">Click</button>
</template>

<script>
export default {
  setup() {
    const clickHandler = () => {
      alert("clicked");
    };
    return {
      clickHandler,
    };
  },
};
</script>
