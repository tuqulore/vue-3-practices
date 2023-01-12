<script setup>
import { ref } from "vue";
import ReverseButton from "./components/ReverseButton.vue";
import MessageIndicator from "./components/MessageIndicator.vue";

const message = ref("Hello, World!");
</script>

<template>
  <p>
    同じコンポーネントが3つならび、文字の並びを反転するボタンを押すと一斉に文字の並びが反転します。
  </p>
  <ol>
    <li>
      ReverseButtonの呼び出しにv-modelディレクティブが使えるように変更してください
    </li>
    <li>
      Appに配置された文字の並びを反転するボタンを押しても
      <code v-text="'MessageIndicator: {{message}}'" />
      の表示が変わらないようにしてください
    </li>
    <li>
      それぞれのMessageIndicatorで文字の並びが反転できるように変更してください
    </li>
  </ol>
  <!--
    v-modelディレクティブは引数をとることもできます。引数をとらない形に変更しても構いません。
    参考: https://v3.ja.vuejs.org/guide/component-custom-events.html#v-model-%E3%81%AE%E5%BC%95%E6%95%B0
  -->
  <ReverseButton v-model:text="message" />
  <p>App: {{ message }}</p>
  <MessageIndicator :message="message" />
  <MessageIndicator :message="message" />
  <MessageIndicator :message="message" />
</template>

<style></style>
