<script>
import {ref} from "vue";
export default {
  setup() {
    /*
     * isRed変数はリアクティブな値になっています。
     * 参考: https://v3.ja.vuejs.org/guide/reactivity-fundamentals.html
     */
    const isRed = ref(false);
    const handleClick = () => {
      /**
       * 論理否定演算子によって、trueをfalseに、falseをtrueにできます。
       * 参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT
       */
      isRed.value = !isRed.value;
    };
    return {isRed, handleClick};
  },
};
</script>

<template>
  <p>ボタンをクリックすると、線で囲われた領域が赤くなったり白くなったりするようにしてください</p>
  <!--
    handleClick関数によって、ボタンのclickイベントがハンドリングされています。
    参考: https://v3.ja.vuejs.org/guide/events.html
  -->
  <button @click="handleClick">ボタン</button>
  <!--
    クラスバインディングによって、動的にクラスを付与することができます。
    参考: https://v3.ja.vuejs.org/guide/class-and-style.html#html-%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AE%E3%83%8F%E3%82%99%E3%82%A4%E3%83%B3%E3%83%86%E3%82%99%E3%82%A3%E3%83%B3%E3%82%AF%E3%82%99

    余力があれば、配列構文に書き換えてみましょう。
    参考: https://v3.ja.vuejs.org/guide/class-and-style.html#%E9%85%8D%E5%88%97%E6%A7%8B%E6%96%87
  -->
  <div class="colorful-box" :class="{'is-red': isRed}" />
  <!--
    インラインスタイルのバインディングによっても、動的にスタイルを付与することができます。
    参考: https://v3.ja.vuejs.org/guide/class-and-style.html#%E3%82%A4%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AE%E3%83%8F%E3%82%99%E3%82%A4%E3%83%B3%E3%83%86%E3%82%99%E3%82%A3%E3%83%B3%E3%82%AF%E3%82%99
  -->
  <div class="colorful-box" :style="{
    backgroundColor: isRed ? 'red' : 'white'
  }" />
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
