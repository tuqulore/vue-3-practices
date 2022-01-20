<template>
  <ChildComponent @child-clicked="clicked" />
</template>
<script>
import ChildComponent from "./EmitChild.vue";
export default {
  components: { ChildComponent },
  setup() {
    const clicked = (message) => {
      alert(message);
    };
    return {
      clicked,
    };
  },
};
</script>
