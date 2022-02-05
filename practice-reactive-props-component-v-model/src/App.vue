<script>
import {ref} from "vue"
import ReverseButton from "./components/ReverseButton.vue"
import MessageIndicator from "./components/MessageIndicator.vue"

export default {
  components: {
    ReverseButton,
    MessageIndicator
  },
  setup() {
    const message = ref('Hello, World!')
    return {
      message,
    }
  }
}
</script>

<template>
  <p>同じコンポーネントが3つならび、文字の並びを反転するボタンを押すと一斉に文字の並びが反転します。</p>
  <ol>
    <li>ReverseButtonの呼び出しにv-modelディレクティブが使えるように変更してください</li>
    <li>
      Appに配置された文字の並びを反転するボタンを押しても
      <code v-text="'MessageIndicator: {{message}}'" />
      の表示が変わらないようにしてください
    </li>
    <li>それぞれのMessageIndicatorで文字の並びが反転できるように変更してください</li>
  </ol>
  <ReverseButton :text="message" @update="message = $event" />
  <p>App: {{message}}</p>
  <MessageIndicator :message="message" />
  <MessageIndicator :message="message" />
  <MessageIndicator :message="message" />
</template>

<style>
</style>
