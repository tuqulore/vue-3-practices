<template>
  <ChildComponent @child-clicked="clicked" />
</template>
<script setup>
import ChildComponent from "./EmitChild.vue";

function clicked(message) {
  alert(message);
};
</script>
