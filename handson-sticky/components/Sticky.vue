<script setup>
import { useDraggable } from "@vueuse/core";

// composablesを呼び出す
const stickies = useStickies();

// props の定義
const props = defineProps({
  data: {
    type: Object,
  },
});

// 付箋のテキスト文字列と、付箋の背景色
const textContent = ref(props.data.content);
const bgColor = ref(props.data.bgColor);

// ドラッグするときに必要で、HTML要素をVueで参照するための記述
const el = ref(null);

// updateの関数、composableのデータを更新する
const update = () => {
  stickies.update({
    id: props.data.id,
    x: x.value,
    y: y.value,
    content: textContent.value,
    bgColor: bgColor.value,
  });
};

// VueUse の useDraggable を設定することで、ドラッグ可能になる
const { x, y, style } = useDraggable(el, {
  initialValue: { x: props.data.x, y: props.data.y },
  // onMove は付箋がドラッグ中に常に呼び出されるイベントハンドラ
  onMove: () => update(),
});

// HTML側「:style="cssStyle"」で使っている、座標や背景色のCSSの文字列が返される
const cssStyle = computed(() => {
  return `${style.value} background-color: ${bgColor.value}`;
});

// 文字と背景色の変更を監視して、変更があればemitする
watch([textContent, bgColor], () => update());
</script>

<template>
  <div class="sticky" ref="el" :style="cssStyle">
    <textarea v-model="textContent" class="textarea"></textarea>
    <input type="color" v-model="bgColor" />
  </div>
</template>

<style scoped>
.sticky {
  background-color: #f4f4f4;
  width: 10rem;
  height: 10rem;
  padding: 0.2rem;
  font-size: 0.8rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  position: fixed;
}
.textarea {
  border: none;
  height: 100%;
  display: block;
  background-color: transparent;
}
</style>
