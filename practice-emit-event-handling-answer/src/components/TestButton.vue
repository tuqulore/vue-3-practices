<script>
export default {
  /**
   * setup関数に渡される第2引数にイベントを発火する関数が含まれたオブジェクトが渡されます。
   * 参考: https://v3.ja.vuejs.org/guide/composition-api-setup.html#%E3%82%B3%E3%83%B3%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88
   */
  setup(_, context) {
    const handleClick = () => {
      /**
       * Appコンポーネントにtest-eventイベントを制御し値を受け取る処理があります。
       * イベントを発火することで値を子コンポーネントから親コンポーネントへ受け渡すことができます。
       * イベントを発火する際に値を含めることができます。
       * 参考: https://v3.ja.vuejs.org/guide/component-basics.html#%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%81%A8%E5%80%A4%E3%82%92%E7%99%BA%E8%A1%8C%E3%81%99%E3%82%8B
       */
      context.emit('test-event', 'test')
    }
    return {handleClick}
  }
}
</script>

<template>
  <!--
    clickイベントを購読することで、クリックした際のイベントハンドリングが可能になります。
    参考: https://v3.ja.vuejs.org/guide/events.html#%E3%82%A4%E3%83%98%E3%82%99%E3%83%B3%E3%83%88%E3%81%AE%E8%B3%BC%E8%AA%AD
    参考: https://developer.mozilla.org/ja/docs/Web/API/Element/click_event
  -->
  <button @click="handleClick">テスト</button>
</template>

<style>
</style>
