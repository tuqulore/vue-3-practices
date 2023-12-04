<script setup>
import { ref } from "vue";
const props = defineProps({
  message: String,
});
/**
 * 参照するプロパティをdefinePropsマクロによって定義することができます。
 * 参考: https://ja.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
 */
/**
 * プロパティの値を自身のコンポーネントで保持したい場合、プロパティの値を初期値としたリアクティブな値の参照を作成しましょう
 * 参考: https://ja.vuejs.org/guide/components/props.html#one-way-data-flow
 */
const messageRef = ref(props.message);
</script>

<template>
  <p>MessageIndicator: {{ messageRef }}</p>
</template>

<style></style>
