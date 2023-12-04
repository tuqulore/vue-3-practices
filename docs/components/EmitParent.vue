<script setup>
import ChildComponent from "./EmitChild.vue";

function clicked(message) {
  alert(message);
}
</script>

<template>
  <ChildComponent @child-clicked="clicked" />
</template>
