<script setup>
import { ref, computed } from "vue";
const count = ref(1);
/**
 * computedを使うことでリアクティブな値に連動した値を用意することができます
 * 参考: https://ja.vuejs.org/guide/essentials/computed.html#computed-properties
 */
/**
 * 剰余演算子を使うことで割り切れるかかどうか判定することができます
 * 参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Remainder
 */
const fizz = computed(() => (count.value % 3 === 0 ? "Fizz" : ""));
const buzz = computed(() => (count.value % 5 === 0 ? "Buzz" : ""));
</script>

<template>
  <p>
    カウントボタンを押すと数が1増えます。数が3の倍数のときは「Fizz」、数が5の倍数のときは「Buzz」、数が15の倍数のときは「FizzBuzz」という文字列が表示されるように追加してください。
  </p>
  <button @click="count++">カウント</button>
  <p>数: {{ count }}</p>
  <!--
    テキスト展開によってリアクティブな値に格納された文字列を表示します
    参考: https://ja.vuejs.org/guide/essentials/template-syntax.html#text-interpolation
  -->
  <p>表示: {{ fizz }}{{ buzz }}</p>
</template>

<style></style>
