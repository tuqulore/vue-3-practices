<script setup>
import { ref } from "vue";
const data = ref(null);
const load = async () => {
  // この実行環境ではfetchがグローバルメソッドとして提供されているので、インポートすることなく利用することができます
};
load();
</script>

<template>
  <a
    href="https://portal.data.metro.tokyo.lg.jp/opendata-api/"
    target="_blank"
    rel="noopener noreferrer"
    >東京都のオープンデータAPI</a
  >にあるいずれかのAPIエンドポイントからデータを取得し、あらかじめ用意されたdataの値に格納して表示されるようにしてください
  <p>データ: {{ data }}</p>
</template>

<style></style>
