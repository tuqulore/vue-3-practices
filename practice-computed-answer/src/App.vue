<script>
import {ref, computed} from "vue"
export default {
  setup() {
    const count = ref(1)
    /**
     * computedを使うことでリアクティブな値に連動した値を用意することができます
     * 参考: https://v3.ja.vuejs.org/guide/reactivity-computed-watchers.html#%E7%AE%97%E5%87%BA%E3%83%95%E3%82%9A%E3%83%AD%E3%83%8F%E3%82%9A%E3%83%86%E3%82%A3
     */
    /**
     * 剰余演算子を使うことで割り切れるかかどうか判定することができます
     * 参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Remainder
     */
    const fizz = computed(() => count.value % 3 === 0 ? "Fizz" : "")
    const buzz = computed(() => count.value % 5 === 0 ? "Buzz" : "")
    return {
      count,
      fizz,
      buzz,
    }
  }
}
</script>

<template>
  <p>カウントボタンを押すと数が1増えます。数が3の倍数のときは「Fizz」、数が5の倍数のときは「Buzz」、数が15の倍数のときは「FizzBuzz」という文字列が表示されるように追加してください。</p>
  <button @click="count++">カウント</button>
  <p>数: {{count}}</p>
  <!--
    テキスト展開によってリアクティブな値に格納された文字列を表示します
    参考: https://v3.ja.vuejs.org/guide/template-syntax.html#%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88
  -->
  <p>表示: {{fizz}}{{buzz}}</p>
</template>

<style>
</style>
