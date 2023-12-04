<script setup>
import { ref } from "vue";
/*
 * isRed変数はリアクティブな値になっています。
 * 参考: https://ja.vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state-1
 */
const isRed = ref(false);
const handleClick = () => {
  /**
   * 論理否定演算子によって、trueをfalseに、falseをtrueにできます。
   * 参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT
   */
  isRed.value = !isRed.value;
};
</script>

<template>
  <p>
    ボタンをクリックすると、線で囲われた領域が赤くなったり白くなったりするようにしてください
  </p>
  <!--
    handleClick関数によって、ボタンのclickイベントがハンドリングされています。
    参考: https://ja.vuejs.org/guide/components/events.html
  -->
  <button @click="handleClick">ボタン</button>
  <!--
    クラスバインディングによって、動的にクラスを付与することができます。
    参考: https://ja.vuejs.org/guide/essentials/class-and-style.html

    余力があれば、配列構文に書き換えてみましょう。
    参考: https://ja.vuejs.org/guide/essentials/class-and-style.html#binding-to-arrays
  -->
  <div class="colorful-box" :class="{ 'is-red': isRed }" />
  <!--
    インラインスタイルのバインディングによっても、動的にスタイルを付与することができます。
    参考: https://ja.vuejs.org/guide/essentials/class-and-style.html#binding-inline-styles
  -->
  <div
    class="colorful-box"
    :style="{
      backgroundColor: isRed ? 'red' : 'white',
    }"
  />
</template>

<style>
.colorful-box {
  margin: 1rem 0;
  width: 5rem;
  height: 5rem;
  border: 1px solid black;
}

/**
 * あらかじめ背景が赤くなるクラスが定義されていますが、
 * 必ずしも使う必要はありません。
 */
.colorful-box.is-red {
  background-color: red;
}
</style>
