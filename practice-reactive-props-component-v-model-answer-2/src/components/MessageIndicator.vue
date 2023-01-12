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
 * 参考(Options APIによる説明であることに注意): https://v3.ja.vuejs.org/guide/component-props.html#%E5%8D%98%E6%96%B9%E5%90%91%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC
 */
const messageRef = ref(props.message);
</script>

<template>
  <p>MessageIndicator: {{ messageRef }}</p>
</template>

<style></style>
