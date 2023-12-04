<script setup>
import { ref, reactive } from "vue";
import DemoGrid from "./components/DemoGrid.vue";

// DemoGrindコンポーネントにプロパティとして渡すデータをリアクティブな値の参照として作成しています
const searchQuery = ref("");
const gridColumns = ref(["名前", "戦闘力"]);
const gridData = ref([
  // サンプルとして読みやすくするためにオブジェクトのプロパティ名を日本語にしていますが、一般的ではないので気をつけましょう
  { 名前: "チャック・ノリス", 戦闘力: Infinity },
  { 名前: "ブルース・リー", 戦闘力: 9000 },
  { 名前: "ジャッキー・チェン", 戦闘力: 7000 },
  { 名前: "ジェット・リー", 戦闘力: 8000 },
]);
const newHero = reactive({ 名前: "新たなヒーロー", 戦闘力: 0 });
const addHero = () => {
  gridData.value.push({ ...newHero });
};
</script>

<template>
  <form id="search">
    検索
    <!--
      フォーム入力関連のHTML要素の双方向バインディングは、v-modelを使うことで簡潔に実装することができます
      DOMイベント(input、update)に対して凝った入力ハンドリング(debounceの導入など)が必要になったら
      v-bind、v-onで書き換えてイベントハンドラー関数を用意するとよいでしょう
    -->
    <input name="query" v-model="searchQuery" />
  </form>
  <label
    >名前
    <input v-model="newHero['名前']" />
  </label>
  <label
    >戦闘力
    <input type="number" v-model="newHero['戦闘力']" />
  </label>
  <button @click="addHero">追加</button>
  <DemoGrid
    :heroes="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery"
  />
</template>

<style>
body {
  font-family:
    Helvetica Neue,
    Arial,
    sans-serif;
  font-size: 14px;
  color: #444;
}
</style>
