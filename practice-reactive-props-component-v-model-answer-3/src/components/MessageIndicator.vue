<script setup>
import { ref } from "vue";
import ReverseButton from "./ReverseButton.vue";
/**
 * `<script setup>`  を使用する場合、 `<script setup>` 内で宣言された
 * トップレベルのバインディング（変数、関数宣言、インポートを含む）は、テンプレートで直接使用できます
 * 引用:  https://ja.vuejs.org/api/sfc-script-setup.html#basic-syntax
 */
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
  <ReverseButton v-model:text="messageRef" />
  <p>MessageIndicator: {{ messageRef }}</p>
</template>

<style></style>
