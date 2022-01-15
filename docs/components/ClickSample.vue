<template>
  <button v-on:click="clickHandler">Click</button>
</template>

<script>
export default {
  methods: {
    clickHandler() {
      alert("clicked");
    },
  },
};
</script>
