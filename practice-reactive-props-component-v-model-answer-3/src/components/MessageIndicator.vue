<script setup>
import { ref } from "vue";
import ReverseButton from "./ReverseButton.vue";
/**
 * コンポーネントをローカル登録することによって、登録したコンポーネントをテンプレートで使用できるようになります。
 * 参考: https://v3.ja.vuejs.org/guide/component-registration.html#%E3%83%A2%E3%82%B7%E3%82%99%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%86%85%E3%81%AE%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E7%99%BB%E9%8C%B2
 */
const props = defineProps({
  message: String,
});
/**
 * setup関数は第1引数にpropsオブジェクトが渡されます。
 * 参考: https://v3.ja.vuejs.org/api/composition-api.html#setup
 */
/**
 * プロパティの値を自身のコンポーネントで保持したい場合、プロパティの値を初期値としたリアクティブな値の参照を作成しましょう
 * 参考(Options APIによる説明であることに注意): https://v3.ja.vuejs.org/guide/component-props.html#%E5%8D%98%E6%96%B9%E5%90%91%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC
 */
const messageRef = ref(props.message);
</script>

<template>
  <ReverseButton v-model:text="messageRef" />
  <p>MessageIndicator: {{ messageRef }}</p>
</template>

<style></style>
