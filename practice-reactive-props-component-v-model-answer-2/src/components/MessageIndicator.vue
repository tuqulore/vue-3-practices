<script>
import {ref} from "vue"
export default {
  props: {
    message: String
  },
  /**
   * setup関数は第1引数にpropsオブジェクトが渡されます。
   * 参考: https://v3.ja.vuejs.org/api/composition-api.html#setup
   */
  setup(props) {
    /**
     * プロパティの値を自身のコンポーネントで保持したい場合、プロパティの値を初期値としたリアクティブな値の参照を作成しましょう
     * 参考(Options APIによる説明であることに注意): https://v3.ja.vuejs.org/guide/component-props.html#%E5%8D%98%E6%96%B9%E5%90%91%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF%E3%83%95%E3%83%AD%E3%83%BC
     */
    const messageRef = ref(props.message)
    return {messageRef}
  }
}
</script>

<template>
  <p>MessageIndicator: {{messageRef}}</p>
</template>

<style>
</style>
