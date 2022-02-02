<script>
import {ref} from "vue";
export default {
  setup() {
    const isRed = ref(false);
    const handleClick = () => {
      isRed.value = false
    };
    return {isRed, handleClick};
  },
};
</script>

<template>
  <p>ボタンをクリックすると、線で囲われた領域が赤くなったり白くなったりするようにしてください</p>
  <button @click="handleClick">ボタン</button>
  <div class="colorful-box" />
</template>

<style>
.colorful-box {
  margin: 1rem 0;
  width: 5rem;
  height: 5rem;
  border: 1px solid black;
}

.colorful-box.is-red {
  background-color: red;
}
</style>
