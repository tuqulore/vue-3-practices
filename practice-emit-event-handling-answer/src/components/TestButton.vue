<script setup>
/**
 * 発火させるイベントをdefineEmitsマクロによって定義することができます。
 * 参考: https://ja.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
 */
const emits = defineEmits(["test-event"]);
const handleClick = () => {
  /**
   * Appコンポーネントにtest-eventイベントを制御し値を受け取る処理があります。
   * イベントを発火することで値を子コンポーネントから親コンポーネントへ受け渡すことができます。
   * イベントを発火する際に値を含めることができます。
   * 参考: https://ja.vuejs.org/guide/components/events.html
   */
  emits("test-event", "test");
};
</script>

<template>
  <!--
    clickイベントを購読することで、クリックした際のイベントハンドリングが可能になります。
    参考: https://ja.vuejs.org/guide/components/events.html
    参考: https://developer.mozilla.org/ja/docs/Web/API/Element/click_event
  -->
  <button @click="handleClick">テスト</button>
</template>

<style></style>
