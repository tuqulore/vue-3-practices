<script setup>
import { ref } from "vue";
const data = ref(null);
const load = async () => {
  /**
   * https://portal.data.metro.tokyo.lg.jp/opendata-api/ にはBase URL、APIエンドポイント、それぞれのAPIエンドポイントで使用可能なパラメータなどがドキュメンテーションされており、それらをページ上で試すこともできます。
   */
  const response = await fetch(
    "https://api.data.metro.tokyo.lg.jp/v1/Covid19CallCenter?limit=10",
  );
  /**
   * Response.json()メソッドを使用することによって、レスポンスをJSONとして解析しJavaScriptオブジェクトに変換することができます。
   * 参考: https://developer.mozilla.org/ja/docs/Web/API/Response/json
   */
  data.value = await response.json();
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
  <!--
    応用: レスポンスが配列ならば、リストレンダリングを使って読みやすくしましょう
  -->
  <p>データ: {{ data }}</p>
</template>

<style></style>
